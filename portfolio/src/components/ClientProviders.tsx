"use client";

/**
 * Browser-only overlays. No children, no providers — mounted once inside Providers.
 */
import dynamic from "next/dynamic";

const GlobalBackground = dynamic(
  () => import("@/components/3d/GlobalBackground"),
  { ssr: false, loading: () => null }
);

const LoadingScreen = dynamic(
  () => import("@/components/LoadingScreen"),
  { ssr: false, loading: () => null }
);

const CustomCursor = dynamic(
  () => import("@/components/CustomCursor"),
  { ssr: false, loading: () => null }
);

export default function ClientProviders() {
  return (
    <>
      <GlobalBackground />
      <LoadingScreen />
      <CustomCursor />
    </>
  );
}
