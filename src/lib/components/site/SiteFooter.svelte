<script lang="ts">
	import { products } from '$lib/products';

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
				A small, independent company making software, research and businesses that are useful to
				the people who rely on them.
			</p>
		</div>

		<div>
			<p class="eyebrow mb-4">Work</p>
			<ul class="flex flex-col gap-2 text-sm">
				{#each products as p (p.slug)}
					<li>
						<a href="/{p.slug}" class="link-draw text-ink-2 hover:text-ink">{p.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="eyebrow mb-4">Get in touch</p>
			<ul class="flex flex-col gap-2 text-sm">
				<li>
					<a href="mailto:hello@saba.inc" class="link-draw text-ink-2 hover:text-ink">
						hello@saba.inc
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="container flex flex-wrap justify-between gap-3 border-t border-line/70 py-6 text-xs text-ink-3">
		<p>© {year} <span class="font-mincho">株式会社鯖</span> Saba Inc.</p>
		<p>Made with care, not templates.</p>
	</div>
</footer>
