<script lang="ts">
	import { getProducts, getGroups, type Group } from '$lib/products';
	import ProductPlate from '$lib/components/site/ProductPlate.svelte';
	import CalEmbed from '$lib/components/site/CalEmbed.svelte';
	import { CAL_URL } from '$lib/cal';

	const products = getProducts();
	const groups = getGroups();
	const order: Group[] = ['civic', 'design', 'trade'];

	const pad = (n: number) => String(n).padStart(2, '0');
</script>

<!-- Hero -->
<section class="container grid items-center gap-14 pt-16 pb-24 md:grid-cols-[1fr_auto] md:pt-28 md:pb-36">
	<div class="max-w-3xl">
		<p class="eyebrow mb-8 flex items-center gap-3">
			<span class="inline-block h-px w-8 bg-shu"></span>
			<span><span class="font-mincho tracking-normal">株式会社鯖</span> &nbsp;·&nbsp; Saba Inc.</span>
		</p>
		<h1
			class="font-serif text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[1.02] font-light tracking-[-0.02em] ja:text-[clamp(2rem,4.6vw,3.6rem)] ja:leading-[1.35] ja:tracking-normal"
		>
			We make useful things for people doing <em class="text-shu">important</em> work.
		</h1>
		<p class="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
			A small, independent company working between Japan and Australia.
		</p>
		<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
			<a
				href="#work"
				class="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-shu"
			>
				See our work
				<span class="transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
			</a>
			<a href="#contact" class="link-draw text-sm text-ink-2 hover:text-ink">Book a call</a>
		</div>
	</div>

	<img
		src="/brand/saba-mark.svg"
		alt=""
		width="200"
		height="200"
		class="hidden size-[200px] -rotate-[4deg] drop-shadow-[0_18px_30px_rgb(120_40_20/0.18)] md:block lg:size-[240px]"
	/>
</section>

<!-- Work -->
<section id="work" class="scroll-mt-20 border-t border-line">
	<div class="container py-24 md:py-32">
		<div class="mb-16 grid gap-6 md:mb-24 md:grid-cols-[1fr_1.2fr] md:items-end">
			<div>
				<p class="eyebrow mb-4">Work</p>
				<h2 class="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] font-light tracking-tight ja:text-[clamp(1.8rem,3.4vw,2.8rem)] ja:leading-[1.35]">
					What we make and run.
				</h2>
			</div>
			<p class="max-w-lg text-lg leading-relaxed text-ink-2">
				Some we own outright, others we build with partners. Each one solves a specific problem for
				a specific group of people.
			</p>
		</div>

		{#each order as g (g)}
			{@const items = products.filter((p) => p.group === g)}
			<div class="grid gap-8 border-t border-ink/80 pt-8 pb-20 last:pb-0 md:grid-cols-[16rem_1fr] md:gap-12">
				<div class="md:sticky md:top-28 md:self-start">
					<h3 class="font-serif text-2xl">{groups[g].title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink-3">{groups[g].blurb}</p>
				</div>

				<ol class="flex flex-col">
					{#each items as p (p.slug)}
						{@const n = products.indexOf(p) + 1}
						<li class="border-b border-line first:border-t md:first:border-t-0">
							<a
								href="/{p.slug}/"
								class="group grid grid-cols-[2rem_1fr_auto] items-center gap-x-4 gap-y-1 py-7 transition-colors md:grid-cols-[2.5rem_9.5rem_1fr_auto] md:gap-x-8"
							>
								<span class="self-start pt-2 font-serif text-sm text-ink-3 tabular-nums">
									{pad(n)}
								</span>
								<div class="hidden w-[9.5rem] transition-transform duration-500 group-hover:-rotate-2 md:block">
									<ProductPlate product={p} size="sm" />
								</div>
								<div class="min-w-0">
									<p class="eyebrow mb-1.5">{p.kind}</p>
									<p class="font-serif text-[1.9rem] leading-tight tracking-tight transition-colors group-hover:text-shu md:text-[2.2rem]">
										{p.name}
									</p>
									<p class="mt-1.5 max-w-xl text-ink-2">{p.summary}</p>
								</div>
								<span
									class="self-center text-xl text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-shu"
									aria-hidden="true">→</span
								>
							</a>
						</li>
					{/each}
				</ol>
			</div>
		{/each}
	</div>
</section>

<!-- Contact -->
<section id="contact" class="scroll-mt-16 border-t border-line">
	<div class="container py-24 md:py-32">
		<div class="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-12">
			<div>
				<p class="eyebrow mb-4">Contact</p>
				<h2 class="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] font-light tracking-tight ja:text-[clamp(1.8rem,3.6vw,3rem)] ja:leading-[1.35]">
					Have something worth building? <em class="text-shu">Let’s talk.</em>
				</h2>
			</div>
			<div class="flex max-w-lg flex-col gap-4">
				<p class="text-lg leading-relaxed text-ink-2">
					Pick a time for a 30-minute call. We are a small team, so you will be talking to someone
					who can actually help.
				</p>
				<a
					href={CAL_URL}
					target="_blank"
					rel="noopener"
					class="link-draw self-start text-sm text-ink-3 hover:text-ink"
				>
					Open the calendar on Cal.com ↗
				</a>
			</div>
		</div>

		<div class="border-t border-ink/80 pt-4">
			<CalEmbed />
		</div>
	</div>
</section>
