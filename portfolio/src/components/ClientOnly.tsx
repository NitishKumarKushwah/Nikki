"use client";

import { useEffect, useState, ReactNode } from "react";

/**
 * ClientOnly - Renders children only after the component has mounted on the client.
 * This is the canonical pattern to prevent React/Next.js SSR hydration mismatches
 * for components that rely on browser-only APIs or generate dynamic values.
 */
export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
