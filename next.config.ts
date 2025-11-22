import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // WAJIB: aktifkan output standalone agar cPanel bisa menjalankan server Next.js
  output: "standalone",

  // (opsional tapi sangat dianjurkan)
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
