<script lang="ts">
	import { getProducts } from '$lib/products';
	import { CAL_URL } from '$lib/cal';
	import { EMAIL } from '$lib/company';

	const products = getProducts();
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line">
	<div class="container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
		<div class="flex flex-col gap-5">
			<img
				src="/brand/saba-logo.svg"
				alt="株式会社鯖 Saba Inc."
				width="260"
				height="70"
				class="h-14 w-auto self-start dark:hidden"
			/>
			<img
				src="/brand/saba-logo-reversed.svg"
				alt="株式会社鯖 Saba Inc."
				width="260"
				height="70"
				class="hidden h-14 w-auto self-start dark:block"
			/>
			<p class="max-w-xs text-sm leading-relaxed text-ink-3">
				A small, independent company working between Japan and Australia.
			</p>
		</div>

		<div>
			<p class="eyebrow mb-4">Work</p>
			<ul class="flex flex-col gap-2 text-sm">
				{#each products as p (p.slug)}
					<li>
						<a href="/{p.slug}/" class="link-draw text-ink-2 hover:text-ink">{p.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="eyebrow mb-4">Company</p>
			<ul class="flex flex-col gap-2 text-sm">
				<li>
					<a href="/company/" class="link-draw text-ink-2 hover:text-ink">Company profile</a>
				</li>
				<li>
					<a href="mailto:{EMAIL}" class="link-draw text-ink-2 hover:text-ink">{EMAIL}</a>
				</li>
				<li>
					<a href={CAL_URL} target="_blank" rel="noopener" class="link-draw text-ink-2 hover:text-ink">
						Book a call ↗
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="container flex flex-wrap gap-3 border-t border-line/70 py-6 text-xs text-ink-3">
		<p>© {year} <span class="font-mincho">株式会社鯖</span> Saba Inc.</p>
	</div>
</footer>
