<!--
	Language switcher. Remembers the choice in a `lang` cookie, which the
	script in app.html reads on the next visit (falling back to the browser's
	language). Switching does a full page load so every catalog, including the
	Cal.com embed, starts in the new language.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { localize } from './localize.js';

	const options = [
		{ locale: 'en', label: 'EN', name: 'English' },
		{ locale: 'ja', label: '日本語', name: '日本語' }
	];

	let current = $derived(page.data.locale);
	let path = $derived(page.data.path ?? '/');

	function choose(event: MouseEvent, locale: string) {
		document.cookie = `lang=${locale}; path=/; max-age=31536000; samesite=lax`;
		const a = event.currentTarget as HTMLAnchorElement;
		a.hash = location.hash;
	}
</script>

<div class="flex items-center gap-1 text-[0.8rem]" role="group" aria-label="Language / 言語">
	{#each options as o, i (o.locale)}
		{#if i > 0}<span class="hidden text-line sm:inline" aria-hidden="true">/</span>{/if}
		{#if o.locale === current}
			<!-- On phones only the other language is shown. -->
			<span class="hidden px-1 text-ink sm:inline" aria-current="true" lang={o.locale}>{o.label}</span>
		{:else}
			<a
				href={localize(path, o.locale)}
				hreflang={o.locale}
				lang={o.locale}
				title={o.name}
				data-sveltekit-reload
				class="px-1 whitespace-nowrap text-ink-3 transition-colors hover:text-shu"
				onclick={(e) => choose(e, o.locale)}>{o.label}</a
			>
		{/if}
	{/each}
</div>
