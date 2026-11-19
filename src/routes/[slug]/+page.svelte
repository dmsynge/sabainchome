<script lang="ts">
	import ProductPlate from '$lib/components/site/ProductPlate.svelte';
	import { products } from '$lib/products';

	let { data } = $props();
	let p = $derived(data.product);
	let n = $derived(String(products.indexOf(p) + 1).padStart(2, '0'));

	let facts = $derived([
		{ label: 'What', value: p.kind },
		{ label: 'For', value: p.audience },
		{ label: 'Where', value: p.where },
		{ label: 'Status', value: p.status }
	]);
</script>

<svelte:head>
	<title>{p.name} — Saba Inc.</title>
	<meta name="description" content={p.summary} />
	<meta property="og:title" content="{p.name} — Saba Inc." />
	<meta property="og:description" content={p.summary} />
</svelte:head>

{#snippet visit(label: string)}
	<a
		href={p.url}
		target="_blank"
		rel="noopener"
		class="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-shu"
	>
		{label}
		<span class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
	</a>
{/snippet}

<article>
	<!-- Header -->
	<header class="container pt-10 pb-20 md:pt-14 md:pb-28">
		<nav aria-label="Breadcrumb" class="mb-12 text-sm text-ink-3 md:mb-16">
			<a href="/#work" class="link-draw hover:text-ink">← All work</a>
			<span class="mx-2">/</span>
			<span class="font-serif text-ink-2 tabular-nums">{n}</span>
		</nav>

		<div class="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
			<div>
				<p class="eyebrow mb-5 flex items-center gap-3">
					<span class="inline-block h-px w-8 bg-shu"></span>{p.kind}
				</p>
				<h1 class="font-serif text-[clamp(3rem,8vw,6.25rem)] leading-[0.95] font-light tracking-[-0.025em]">
					{p.name}
				</h1>

				<blockquote class="mt-8 max-w-xl border-l-2 border-shu pl-5">
					{#if p.headlineLang}
						<p lang={p.headlineLang} class="font-mincho text-xl leading-relaxed [word-break:auto-phrase] md:text-2xl">
							{p.headline}
						</p>
						{#if p.headlineTranslation}
							<p class="mt-2 font-serif text-lg text-ink-2 italic">{p.headlineTranslation}</p>
						{/if}
					{:else}
						<p class="font-serif text-xl leading-snug text-ink-2 italic md:text-2xl">
							“{p.headline}”
						</p>
					{/if}
				</blockquote>

				<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
					{@render visit(`Visit ${p.domain}`)}
				</div>
			</div>

			<ProductPlate product={p} size="lg" />
		</div>
	</header>

	<!-- At a glance -->
	<section aria-label="At a glance" class="border-y border-line bg-paper-2">
		<dl class="container grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
			{#each facts as f (f.label)}
				<div class="py-6 lg:py-8 lg:pr-8">
					<dt class="eyebrow mb-2">{f.label}</dt>
					<dd class="leading-snug text-ink">{f.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<!-- About -->
	<section class="container grid gap-8 py-24 md:grid-cols-[16rem_1fr] md:gap-12 md:py-32">
		<h2 class="eyebrow pt-2">About</h2>
		<div class="max-w-2xl">
			{#each p.intro as para, i (i)}
				<p
					class={i === 0
						? 'font-serif text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.35] font-light'
						: 'mt-6 text-lg leading-relaxed text-ink-2'}
				>
					{para}
				</p>
			{/each}
		</div>
	</section>

	<!-- Highlights -->
	<section class="container pb-24 md:pb-32">
		<div class="grid gap-8 md:grid-cols-[16rem_1fr] md:gap-12">
			<h2 class="eyebrow pt-2">What it does</h2>
			<ol class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
				{#each p.highlights as h, i (h.title)}
					<li class="border-t border-ink/80 pt-5">
						<span class="font-serif text-sm text-shu tabular-nums">{String(i + 1).padStart(2, '0')}</span>
						<h3 class="mt-2 font-serif text-2xl leading-tight">{h.title}</h3>
						<p class="mt-2 leading-relaxed text-ink-2">{h.text}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Visit -->
	<section class="container pb-24 md:pb-32">
		<div
			class="flex flex-col items-start justify-between gap-6 rounded-lg border border-line bg-paper-2 p-8 md:flex-row md:items-center md:p-12"
		>
			<div>
				<p class="eyebrow mb-2">{p.domain}</p>
				<p class="font-serif text-3xl leading-tight">See {p.name} for yourself.</p>
			</div>
			{@render visit(`Go to ${p.name}`)}
		</div>
	</section>

	<!-- Prev / next -->
	<nav aria-label="More work" class="border-t border-line">
		<div class="container grid grid-cols-2">
			<a href="/{data.prev.slug}" class="group flex flex-col gap-1 border-r border-line py-10 pr-6">
				<span class="eyebrow">← Previous</span>
				<span class="font-serif text-xl transition-colors group-hover:text-shu md:text-2xl">{data.prev.name}</span>
			</a>
			<a href="/{data.next.slug}" class="group flex flex-col items-end gap-1 py-10 pl-6 text-right">
				<span class="eyebrow">Next →</span>
				<span class="font-serif text-xl transition-colors group-hover:text-shu md:text-2xl">{data.next.name}</span>
			</a>
		</div>
	</nav>
</article>
