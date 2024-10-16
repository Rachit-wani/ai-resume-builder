import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    'process.env': {}, // Define a polyfill for process.env to avoid the error
  },



  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
