"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";

/**
 * Single client provider root. Theme wraps once; overlays are siblings (not nested providers).
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <ClientProviders />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </ThemeProvider>
  );
}
