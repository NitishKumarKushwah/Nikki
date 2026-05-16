import { useState, useEffect } from "react";

/**
 * useMounted — returns true only after the component has hydrated on the client.
 * Use this to gate any browser-only rendering logic (WebGL, window, animations)
 * and prevent React SSR/client hydration mismatches.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
