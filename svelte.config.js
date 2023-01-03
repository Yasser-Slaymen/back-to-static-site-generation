import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import postcss from "postcss";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
		
	  ],


};


export default config;
