<script lang="ts">
	import { siteConfig } from '$lib/config/meta';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteConfig.name}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords.join(', ')} />

	<meta property="og:site_name" content="Saba Inc." />
	<meta property="og:title" content={siteConfig.name} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta property="og:url" content={siteConfig.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={siteConfig.name} />
	<meta property="twitter:description" content={siteConfig.description} />
	<meta property="twitter:image" content={siteConfig.ogImage} />
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
