import sveltePreprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";
import vercel from "@sveltejs/adapter-vercel";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			preserve: ["ld+json"],
			postcss: true,
		}),
	],
	kit: {
		adapter: vercel(),

		target: "#svelte",
		hostHeader: "X-Forwarded-Host",
		vite: {
			build: {
				minify: "terser",
				chunkSizeWarningLimit: 1000,
			},

			resolve: {
				alias: {
					$components: resolve("src/commons/components"),
					$stores: resolve("src/commons/stores"),
					$datasources: resolve("src/commons/datasources"),
					$libs: resolve("src/commons/libs"),
					$appconfig: resolve("src/appconfig.ts"),
				},
			},
		},
	},
};
export default config;
