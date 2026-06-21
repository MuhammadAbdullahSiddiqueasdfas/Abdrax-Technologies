"use client";

import dynamic from "next/dynamic";

// ssr:false is only valid inside a Client Component ("use client").
// This wrapper is imported by the root layout (Server Component) so it must
// live in its own file with "use client" at the top.
const WebGLBackground = dynamic(
  () => import("@/components/WebGLBackground"),
  { ssr: false }
);

export default function WebGLBackgroundClient() {
  return <WebGLBackground />;
}
