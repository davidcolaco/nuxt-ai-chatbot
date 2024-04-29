// vitest.config.ts
import { defineConfig } from "vitest/config";
import * as path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./tests/setup.ts"], // Setup file for initializing tests
  },
  // resolve: {
  //   alias: {
  //     "~": path.resolve(__dirname, "src"),
  //   },
  // },
});
