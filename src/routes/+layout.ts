import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
import { locales, type Locale } from '../locales/data.js';
import { delocalize } from '$lib/i18n/localize.js';
import type { LayoutLoad } from './$types';

// Register the catalog loaders before anything renders.
import '../locales/main.loader.svelte.js';
import '../locales/js.loader.js';

export const prerender = true;
// Every page is written out as `<path>/index.html`, so `/ja/` and `/ja/company/`
// work on a static host.
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }) => {
	const [locale, path] = delocalize(url.pathname, locales) as [Locale, string];
	if (browser) await loadLocale(locale);
	return { locale, path };
};
