import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kanban-board/",
  exclude: ["js-big-decimal"],
  optimizeDeps: { exclude: ["fsevents"] },
});
