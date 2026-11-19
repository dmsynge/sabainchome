import type { Reroute } from '@sveltejs/kit';
import { locales } from './locales/data.js';
import { delocalize } from '$lib/i18n/localize.js';

// `/ja/company/` renders the same route as `/company/`.
export const reroute: Reroute = ({ url }) => delocalize(url.pathname, locales)[1];
