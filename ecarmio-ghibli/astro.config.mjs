import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Call the function tailwind() inside the integrations array
export default defineConfig({
  site: "https://ecarmio.github.io/ecarmio.github.io", // Replace with your GitHub repo details
  integrations: [tailwind()], // Add parentheses to execute the function
  base: "/ecarmio.github.io/", // Replace with your repo name
});