import { useRef, useState, type ReactNode } from 'react';

interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  colors?: string[];
  fillOpacity?: number;
  // Accepted for API compat — no longer used.
  edgeSensitivity?: number;
  coneSpread?: number;
  animated?: boolean;
}

/**
 * BorderGlow — lightweight card with a gradient border that brightens on hover
 * plus a single soft outer glow.
 *
 * Replaces the previous 13-layer box-shadow + conic-gradient mask stack.
 * Same visual intent, ~1/10th the paint cost.
 */
const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  glowColor = '0 255 255',
  backgroundColor = 'rgba(255,255,255,0.04)',
  borderRadius = 16,
  glowRadius = 30,
  colors,
  fillOpacity = 0.2,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const stops = colors && colors.length >= 2
    ? `${colors[0]}, ${colors[1]}`
    : '#06b6d4, #3b82f6';

  return (
    <div
      ref={cardRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`relative isolate ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        background: backgroundColor,
        border: '1px solid transparent',
        backgroundImage: `
          linear-gradient(${backgroundColor}, ${backgroundColor}) padding-box,
          linear-gradient(135deg, ${stops}) border-box
        `,
        boxShadow: isHovered
          ? `0 0 ${glowRadius}px rgba(${glowColor} / ${fillOpacity}), 0 8px 30px rgba(0,0,0,0.35)`
          : '0 8px 30px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.3s ease-out',
      }}
    >
      <div className="flex flex-col relative h-full overflow-auto z-[1]">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
