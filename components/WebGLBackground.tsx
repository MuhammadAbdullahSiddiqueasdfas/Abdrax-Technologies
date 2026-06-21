"use client";

/**
 * WebGLBackground — a single shared Three.js canvas mounted once in the root layout.
 *
 * One fixed full-viewport canvas, one requestAnimationFrame loop. This gives every
 * page a Three.js backdrop for the cost of ONE GPU context (instead of multiple
 * per-section scenes that cause lag).
 *
 * Performance gates:
 *  - DPR capped at 1.5
 *  - RAF loop pauses when the tab is hidden (document.hidden)
 *  - Respects prefers-reduced-motion (renders a single static frame)
 *  - pointer-events:none + behind all content (z-0)
 *
 * Loaded via next/dynamic({ ssr:false }) from layout.tsx, so this module (and
 * three) land in a separate lazy chunk that never blocks first paint.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 1;

    // Full-screen gradient plane via a custom shader (cheap: one draw call).
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color("#0a0f1e") }, // deep navy
        uColorB: { value: new THREE.Color("#0e7490") }, // cyan
        uColorC: { value: new THREE.Color("#1e1b4b") }, // violet
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;

        // Lightweight hash noise — cheap and good enough for a soft aurora field.
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.05;

          // Slow drifting blobs
          float n1 = noise(uv * 2.0 + vec2(t, -t * 0.7));
          float n2 = noise(uv * 2.5 - vec2(-t * 0.8, t));

          // Base dark fill with soft cyan/violet aurora glow that moves.
          vec3 col = uColorA;
          col = mix(col, uColorB * 0.6, smoothstep(0.4, 0.85, n1) * 0.5);
          col = mix(col, uColorC * 0.7, smoothstep(0.45, 0.9, n2) * 0.35);

          // Vignette to keep edges dark for readable text.
          float d = distance(uv, vec2(0.5));
          col *= smoothstep(0.95, 0.2, d);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let rafId = 0;
    let running = true;

    const render = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    // Reduced motion: render one static frame, no loop.
    if (prefersReducedMotion) {
      render();
    } else {
      const loop = () => {
        rafId = requestAnimationFrame(loop);
        if (document.hidden) return; // pause when tab not visible
        render();
      };
      loop();
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
