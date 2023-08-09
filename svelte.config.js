import adapter from '@sveltejs/adapter-vercel'
//import { vitePreprocess } from '@sveltejs/kit/vite'

/**使用自定义Adapter时可能需要配置 vitePreproces 
但如果你使用自定义的adapter,比如 @sveltejs/adapter-node 或者自己实现的适配器,那么就需要手动添加 vitePreprocess。这是因为自定义适配器不会做 Svelte 的预处理。
 */

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
