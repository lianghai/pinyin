import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: "docs", // GitHub Pages
      fallback: "404.html", // for the single-page app mode (GitHub Pages does’t support the 200.html fallback)
    }),
  },
};

export default config;
