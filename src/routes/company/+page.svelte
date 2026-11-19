<script lang="ts">
	import { profile } from '$lib/company';
	import { products } from '$lib/products';

	const rows = profile.filter((r) => r.value !== null);
	const list = (v: string | string[]) => (Array.isArray(v) ? v : [v]);
</script>

<svelte:head>
	<title>会社概要 Company profile — Saba Inc.</title>
	<meta name="description" content="株式会社鯖（Saba Inc.）の会社概要。Company profile of Saba Inc." />
</svelte:head>

<article class="container pt-16 pb-24 md:pt-24 md:pb-32">
	<header class="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
		<div>
			<p class="eyebrow mb-6 flex items-center gap-3">
				<span class="inline-block h-px w-8 bg-shu"></span>Company
			</p>
			<h1 lang="ja" class="font-mincho text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-bold tracking-[0.04em]">
				会社概要
			</h1>
			<p class="mt-4 font-serif text-2xl text-ink-2 italic">Company profile</p>
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
		{#each rows as row (row.en)}
			<div class="grid gap-2 border-b border-line py-6 md:grid-cols-[16rem_1fr] md:gap-12 md:py-7">
				<dt class="flex items-baseline gap-3 md:flex-col md:gap-1">
					<span lang="ja" class="font-mincho text-lg font-bold">{row.ja}</span>
					<span class="eyebrow">{row.en}</span>
				</dt>
				<dd class="flex flex-col gap-1">
					{#if row.href}
						<a href={row.href} target="_blank" rel="noopener" class="group self-start">
							<span lang="ja" class="link-draw text-ink group-hover:text-shu">{row.value!.ja} ↗</span>
							<span class="block text-sm text-ink-3">{row.value!.en}</span>
						</a>
					{:else}
						<ul class="flex flex-col gap-2">
							{#each list(row.value!.ja) as line, i (line)}
								<li>
									<span lang="ja" class="text-ink">{line}</span>
									<span class="block text-sm text-ink-3">{list(row.value!.en)[i]}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</dd>
			</div>
		{/each}

		<div class="grid gap-2 border-b border-line py-6 md:grid-cols-[16rem_1fr] md:gap-12 md:py-7">
			<dt class="flex items-baseline gap-3 md:flex-col md:gap-1">
				<span lang="ja" class="font-mincho text-lg font-bold">運営事業</span>
				<span class="eyebrow">Brands</span>
			</dt>
			<dd>
				<ul class="grid gap-x-10 gap-y-2 sm:grid-cols-2">
					{#each products as p (p.slug)}
						<li class="flex items-baseline justify-between gap-4 border-b border-line/60 py-1.5 sm:border-0 sm:py-0">
							<a href="/{p.slug}" class="link-draw text-ink hover:text-shu">{p.name}</a>
							<span class="text-sm text-ink-3">{p.domain}</span>
						</li>
					{/each}
				</ul>
			</dd>
		</div>
	</dl>
</article>
