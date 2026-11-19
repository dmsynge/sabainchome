/**
 * Locale-aware paths. English (the source language) has no prefix; every
 * other locale lives under `/<locale>/`. Used by wuchale to rewrite internal
 * links, and by the reroute hook and language switcher.
 */

export const defaultLocale = 'en';

/**
 * Pages are served as `<path>/index.html`, so page links end in a slash
 * (wuchale drops it when it rewrites a link, so it is added back here).
 * @param {string} href
 */
function withSlash(href) {
	const i = href.search(/[?#]/);
	const path = i === -1 ? href : href.slice(0, i);
	if (path.endsWith('/') || /\.[a-z0-9]+$/i.test(path)) return href;
	return path + '/' + (i === -1 ? '' : href.slice(i));
}

/** @param {string} path @param {string} locale */
export function localize(path, locale) {
	if (!path.startsWith('/')) return path;
	return withSlash(locale === defaultLocale ? path : `/${locale}${path}`);
}

/**
 * Splits a pathname into its locale and the unprefixed path.
 * @param {string} pathname
 * @param {readonly string[]} locales
 * @returns {[string, string]} [locale, path]
 */
export function delocalize(pathname, locales) {
	const m = pathname.match(/^\/([^/]+)(\/.*)?$/);
	if (m && m[1] !== defaultLocale && locales.includes(m[1])) return [m[1], m[2] || '/'];
	return [defaultLocale, pathname];
}
