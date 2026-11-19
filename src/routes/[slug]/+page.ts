import { error } from '@sveltejs/kit';
import { products, getProduct } from '$lib/products';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => products.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const product = getProduct(params.slug);
	if (!product) error(404, 'Not found');

	const i = products.indexOf(product);
	return {
		product,
		prev: products[(i - 1 + products.length) % products.length],
		next: products[(i + 1) % products.length]
	};
};
