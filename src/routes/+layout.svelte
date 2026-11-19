<script lang="ts">
	import { getSiteConfig, SITE_URL } from '$lib/config/meta';
	import { localize } from '$lib/i18n/localize.js';
	import { locales } from '../locales/data.js';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import '../app.css';

	let { data, children } = $props();
	const site = getSiteConfig();
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.description} />
	<meta name="keywords" content={site.keywords.join(', ')} />

	{#each locales as l (l)}
		<link rel="alternate" hreflang={l} href="{SITE_URL}{localize(data.path, l)}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE_URL}{data.path}" />

	<meta property="og:site_name" content="Saba Inc." />
	<meta property="og:locale" content={data.locale === 'ja' ? 'ja_JP' : 'en_AU'} />
	<meta property="og:title" content={site.name} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={site.ogImage} />
	<meta property="og:url" content="{SITE_URL}{localize(data.path, data.locale)}" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={site.name} />
	<meta property="twitter:description" content={site.description} />
	<meta property="twitter:image" content={site.ogImage} />

	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="925f7ad0-46a3-47fb-92f9-9fab35ddaadb"
	></script>
</svelte:head>

<a
	href="#main"
	class="sr-only z-50 rounded bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
	Skip to content
</a>

<SiteHeader />

<main id="main">
	{@render children()}
</main>

<SiteFooter />
