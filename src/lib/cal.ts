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
		cssVarsPerTheme: {
			light: { 'cal-brand': '#1c1b19' },
			dark: { 'cal-brand': '#ece6da' }
		}
	});

	return () => {
		node.replaceChildren();
	};
}
