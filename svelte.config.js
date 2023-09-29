import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: true,
	},

	kit: {
		adapter: adapter(),
		files: {
			assets: "src/public",
			hooks: {
				client: "src/hooks/hooks.client",
				server: "src/hooks/hooks.server",
			},
			lib: "src/library",
			appTemplate: "src/template/app.html",
		},
	},
};

export default config;
