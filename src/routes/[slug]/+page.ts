import { error } from '@sveltejs/kit';
import { getProducts, slugs } from '$lib/products';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => slugs.map((slug) => ({ slug }));

export const load: PageLoad = async ({ params, parent }) => {
	// Wait for the root layout to load this locale's catalog.
	await parent();
	const products = getProducts();
	const i = products.findIndex((p) => p.slug === params.slug);
	if (i === -1) error(404, 'Not found');

	return {
		product: products[i],
		index: i,
		prev: products[(i - 1 + products.length) % products.length],
		next: products[(i + 1) % products.length]
	};
};
