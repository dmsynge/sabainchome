import type { Handle } from '@sveltejs/kit';
import { loadLocales, runWithLocale } from 'wuchale/load-utils/server';
import * as main from './locales/main.loader.server.svelte.js';
import * as js from './locales/js.loader.server.js';
import { locales } from './locales/data.js';
import { delocalize } from '$lib/i18n/localize.js';

// Load every catalog once at startup; each request then picks its locale.
await loadLocales(main.key, main.loadCount, main.loadCatalog, locales);
await loadLocales(js.key, js.loadCount, js.loadCatalog, locales);

export const handle: Handle = async ({ event, resolve }) => {
	const [locale] = delocalize(event.url.pathname, locales);
	return await runWithLocale(locale, async () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		})
	);
};
