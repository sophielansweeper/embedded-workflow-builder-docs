/**
 * Eslint config for markdown files.
 */
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.md"],
    ignores: ["docs/connectors/*.md"],
    plugins: {
      markdown,
    },
    extends: ["markdown/recommended"],
  },
]);
