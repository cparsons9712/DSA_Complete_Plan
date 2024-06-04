// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: true, // Set to false if you want to see the browser interactions
  },
  testDir: "./tests",
});
