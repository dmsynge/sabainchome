import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { wuchale } from 'wuchale/vite';

export default defineConfig({
	plugins: [wuchale(), tailwindcss(), sveltekit()]
});
