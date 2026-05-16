import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Transpile Three.js ecosystem packages that ship ESM-only
  // Required for Turbopack + webpack compatibility
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
    "postprocessing",
  ],

  // Turbopack configuration (Next.js 15+)
  turbopack: {
    // Resolve Three.js addons correctly under Turbopack
    resolveAlias: {
      "three/addons": "three/examples/jsm",
    },
  },

  // Compiler-level options
  compiler: {
    // Remove console.log calls in production for cleaner output
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better React 19 + RSC compatibility
  experimental: {
    // Opt in to PPR (Partial Prerendering) — renders static shell instantly,
    // streams dynamic client islands in. Eliminates layout shift on load.
    ppr: false, // Set to true once all sections are RSC-ready
  },
};

export default nextConfig;
