<script lang="ts">
	import { getProfile, UPDATED } from '$lib/company';
	import { getProducts } from '$lib/products';

	let { data } = $props();

	const rows = getProfile().filter((r) => r.lines.length > 0);
	const products = getProducts();

	let updated = $derived(
		new Intl.DateTimeFormat(data.locale === 'ja' ? 'ja-JP' : 'en-AU', { dateStyle: 'long' }).format(
			new Date(`${UPDATED}T00:00:00+09:00`)
		)
	);
</script>

<svelte:head>
	<title>Company profile — Saba Inc.</title>
	<meta
		name="description"
		content="Company profile of Saba Inc. (株式会社鯖): representative, address, capital and business."
	/>
</svelte:head>

<article class="container pt-16 pb-24 md:pt-24 md:pb-32">
	<header class="mb-16 grid gap-10 md:mb-20 md:grid-cols-[1fr_auto] md:items-end">
		<div>
			<p class="eyebrow mb-6 flex items-center gap-3">
				<span class="inline-block h-px w-8 bg-shu"></span>Company
			</p>
			<h1 class="font-serif text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-light tracking-tight">
				Company profile
			</h1>
		</div>
		<img
			src="/brand/saba-mark.svg"
			alt=""
			width="96"
			height="96"
			class="hidden size-24 -rotate-[4deg] md:block"
		/>
	</header>

	<dl class="border-t border-ink/80">
		{#each rows as row (row.label)}
			<div class="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-10 md:py-6">
				<dt class="font-medium text-ink-3 sm:text-ink-2">{row.label}</dt>
				<dd>
					<ul class="flex flex-col gap-1.5">
						{#each row.lines as line (typeof line === 'string' ? line : line.href)}
							<li class={['text-ink', row.lines.length > 1 && 'flex gap-3']}>
								{#if row.lines.length > 1}<span class="text-shu" aria-hidden="true">·</span>{/if}
								{#if typeof line === 'string'}
									{line}
								{:else}
									<a
										href={line.href}
										target={line.href.startsWith('http') ? '_blank' : undefined}
										rel="noopener"
										class="link-draw hover:text-shu"
									>
										{line.text}{line.href.startsWith('http') ? ' ↗' : ''}
									</a>
								{/if}
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		{/each}

		<div class="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-10 md:py-6">
			<dt class="font-medium text-ink-3 sm:text-ink-2">Brands</dt>
			<dd>
				<ul class="grid gap-x-10 gap-y-2 md:grid-cols-2">
					{#each products as p (p.slug)}
						<li class="flex items-baseline justify-between gap-4">
							<span>
								<a href="/{p.slug}/" class="link-draw text-ink hover:text-shu">{p.name}</a>
								{#if p.ownership}<span class="ml-1.5 text-xs text-ink-3">({p.ownership})</span>{/if}
							</span>
							<span class="text-sm text-ink-3">{p.domain}</span>
						</li>
					{/each}
				</ul>
			</dd>
		</div>
	</dl>

	<p class="mt-6 text-right text-sm text-ink-3">Last updated {updated}</p>
</article>

