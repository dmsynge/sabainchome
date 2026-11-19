<script lang="ts">
	import { products, groups, type Group } from '$lib/products';
	import ProductPlate from '$lib/components/site/ProductPlate.svelte';
	import CalEmbed from '$lib/components/site/CalEmbed.svelte';
	import { CAL_URL } from '$lib/cal';

	const order: Group[] = ['civic', 'design', 'trade'];

	const capabilities = [
		{
			title: 'Software',
			text: 'We design and build our own products end to end, from the first sketch to the server it runs on, and we keep running them after launch.'
		},
		{
			title: 'Research',
			text: 'Polling, modelling and analysis for campaigns, written up plainly enough that the people making decisions actually use it.'
		},
		{
			title: 'Design',
			text: 'Brand identity, illustration and art direction through Mari Uchida Design, for audiences in Japan and Australia.'
		},
		{
			title: 'Trade',
			text: 'A butcher’s shop in Tasmania and a wine import business in Japan. Real customers keep us honest about what “useful” means.'
		}
	];

	const principles = [
		{
			title: 'Small on purpose',
			text: 'You talk to the people doing the work. Nothing gets lost between a salesperson and a developer.'
		},
		{
			title: 'Useful over impressive',
			text: 'We build what people will use on a busy Tuesday, not what looks good in a pitch deck.'
		},
		{
			title: 'We run what we build',
			text: 'Everything here is something we operate ourselves, so we feel it when it breaks and we fix it.'
		}
	];

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
			class="font-serif text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[1.02] font-light tracking-[-0.02em]"
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
				<h2 class="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] font-light tracking-tight">
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
								href="/{p.slug}"
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

<!-- Approach -->
<section id="approach" class="scroll-mt-16 bg-paper-2">
	<div class="container py-24 md:py-32">
		<div class="grid gap-12 md:grid-cols-[1fr_1.2fr]">
			<div>
				<p class="eyebrow mb-4">Approach</p>
				<h2 class="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] font-light tracking-tight">
					Fewer things, <em>done properly.</em>
				</h2>
			</div>
			<p class="max-w-lg self-end text-lg leading-relaxed text-ink-2">
				We are deliberately small. We take on a handful of things we understand well, look after
				them properly, and grow them slowly.
			</p>
		</div>

		<div class="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{#each capabilities as c (c.title)}
				<div class="border-t border-ink/80 pt-6">
					<h3 class="font-serif text-2xl">{c.title}</h3>
					<p class="mt-3 leading-relaxed text-ink-2">{c.text}</p>
				</div>
			{/each}
		</div>

		<ol class="mt-24 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
			{#each principles as pr, i (pr.title)}
				<li class="flex flex-col gap-3 bg-paper p-8">
					<span class="font-mincho text-sm text-shu">{['一', '二', '三'][i]}</span>
					<h3 class="font-serif text-xl">{pr.title}</h3>
					<p class="text-sm leading-relaxed text-ink-2">{pr.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="scroll-mt-16 border-t border-line">
	<div class="container grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
		<div class="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
			<p class="eyebrow">Contact</p>
			<h2 class="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] font-light tracking-tight">
				Have something worth building? <em class="text-shu">Let’s talk.</em>
			</h2>
			<p class="max-w-sm leading-relaxed text-ink-2">
				Pick a time for a 30-minute call. We are a small team, so you will be talking to someone who
				can actually help.
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

		<div class="overflow-hidden rounded-lg border border-line bg-paper">
			<CalEmbed />
		</div>
	</div>
</section>
