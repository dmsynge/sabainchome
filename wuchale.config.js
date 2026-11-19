// @ts-check
import { defineConfig } from 'wuchale';
import { adapter as svelte } from '@wuchale/svelte';
import { adapter as vanilla } from 'wuchale/adapter-vanilla';

// English is the source language and lives at `/`; Japanese lives under `/ja/`.
const url = {
	localize: './src/lib/i18n/localize.js',
	patterns: ['/**']
};

export default defineConfig({
	locales: ['en', 'ja'],
	adapters: {
		main: svelte({
			loader: 'sveltekit',
			url,
			files: [
				'src/routes/+*.svelte',
				'src/routes/\\[slug\\]/*.svelte',
				'src/routes/company/*.svelte',
				'src/lib/components/site/*.svelte'
			]
		}),
		js: vanilla({
			loader: 'vite',
			url,
			files: ['src/lib/products.ts', 'src/lib/company.ts', 'src/lib/config/meta.ts']
		})
	}
});
