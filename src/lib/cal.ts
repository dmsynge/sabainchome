/**
 * Cal.com booking. The loader below is Cal's official inline-embed snippet,
 * unminified and typed, so it can run from a Svelte attachment instead of a
 * raw <script> tag.
 */
export const CAL_LINK = 'django-saba/30min';
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

type CalApi = ((...args: unknown[]) => void) & {
	q?: unknown[][];
	ns?: Record<string, CalApi>;
	loaded?: boolean;
	config?: Record<string, unknown>;
};

declare global {
	interface Window {
		Cal?: CalApi;
	}
}

const EMBED_SRC = 'https://app.cal.com/embed/embed.js';

/** Install the global `Cal` queue and start loading embed.js (once). */
function ensureCal(): CalApi {
	if (window.Cal) return window.Cal;

	const push = (api: CalApi, args: unknown[]) => api.q!.push(args);

	const cal: CalApi = function (...args: unknown[]) {
		if (!cal.loaded) {
			cal.ns = {};
			cal.q = cal.q || [];
			const s = document.createElement('script');
			s.src = EMBED_SRC;
			s.async = true;
			document.head.appendChild(s);
			cal.loaded = true;
		}
		if (args[0] === 'init') {
			const api: CalApi = function (...a: unknown[]) {
				push(api, a);
			};
			api.q = api.q || [];
			const namespace = args[1];
			if (typeof namespace === 'string') {
				cal.ns![namespace] = cal.ns![namespace] || api;
				push(cal.ns![namespace], args);
				push(cal, ['initNamespace', namespace]);
			} else {
				push(cal, args);
			}
			return;
		}
		push(cal, args);
	};
	cal.q = [];
	window.Cal = cal;
	return cal;
}

/**
 * Cal's design tokens, mapped onto the site palette (see app.css) so the
 * booker reads as part of the page rather than a box dropped onto it.
 */
const CAL_THEME = {
	light: {
		'cal-brand': '#1c1b19',
		'cal-brand-emphasis': '#b23a26',
		'cal-brand-text': '#f6f2ea',
		'cal-bg': '#f6f2ea',
		'cal-bg-muted': '#f6f2ea',
		'cal-bg-subtle': '#efe9dd',
		'cal-bg-emphasis': '#e6dfd0',
		'cal-border': '#d9d1c1',
		'cal-border-subtle': '#e6dfd0',
		'cal-border-emphasis': '#807a6e',
		'cal-border-booker': 'transparent',
		'cal-text': '#1c1b19',
		'cal-text-emphasis': '#1c1b19',
		'cal-text-subtle': '#807a6e',
		'cal-text-muted': '#807a6e'
	},
	dark: {
		'cal-brand': '#ece6da',
		'cal-brand-emphasis': '#d0573f',
		'cal-brand-text': '#151412',
		'cal-bg': '#151412',
		'cal-bg-muted': '#151412',
		'cal-bg-subtle': '#1d1c19',
		'cal-bg-emphasis': '#272521',
		'cal-border': '#34312b',
		'cal-border-subtle': '#272521',
		'cal-border-emphasis': '#8a8478',
		'cal-border-booker': 'transparent',
		'cal-text': '#ece6da',
		'cal-text-emphasis': '#ece6da',
		'cal-text-subtle': '#8a8478',
		'cal-text-muted': '#8a8478'
	}
};

export interface InlineOptions {
	namespace?: string;
	calLink?: string;
}

/** Render the booking calendar inline inside `node`. Returns a cleanup function. */
export function mountCalInline(node: HTMLElement, opts: InlineOptions = {}) {
	const namespace = opts.namespace ?? '30min';
	const calLink = opts.calLink ?? CAL_LINK;
	const Cal = ensureCal();

	if (!Cal.ns?.[namespace]) {
		Cal('init', namespace, { origin: 'https://app.cal.com' });
		Cal.config = Cal.config || {};
		Cal.config.forwardQueryParams = true;
	}

	const api = Cal.ns![namespace];
	api('inline', {
		elementOrSelector: node,
		config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
		calLink
	});
	api('ui', {
		hideEventTypeDetails: false,
		layout: 'month_view',
		cssVarsPerTheme: CAL_THEME
	});

	return () => {
		node.replaceChildren();
	};
}
