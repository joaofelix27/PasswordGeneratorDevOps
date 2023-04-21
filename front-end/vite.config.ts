import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import "dotenv/config";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  }}
)
  