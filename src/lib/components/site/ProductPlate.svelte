<!--
	A typographic "plate" standing in for a screenshot: the product's name set
	large on its own tint, with a hairline frame and its domain like a caption.
-->
<script lang="ts">
	import type { Product } from '$lib/products';

	let { product, size = 'md' }: { product: Product; size?: 'sm' | 'md' | 'lg' } = $props();
	let small = $derived(size === 'sm');
</script>

<div
	class={[
		'plate relative isolate flex flex-col justify-between overflow-hidden text-[#f4efe5]',
		small ? 'aspect-[4/3] rounded-md p-3' : 'rounded-lg p-5 sm:p-7',
		size === 'md' && 'aspect-[4/3]',
		size === 'lg' && 'aspect-[4/3] md:aspect-[5/4]'
	]}
	style:--tone={product.tone}
	aria-hidden="true"
>
	{#if !small}
		<div class="flex items-start justify-between gap-4 text-[0.7rem] tracking-[0.14em] uppercase opacity-75">
			<span>{product.kind}</span>
			<span class="font-mincho tracking-normal normal-case">鯖</span>
		</div>
	{/if}

	<p
		class={[
			'font-serif leading-[0.92] tracking-tight hyphens-manual',
			small && 'mt-auto text-[1.15rem]',
			size === 'md' && 'text-[clamp(2.4rem,5vw,3.6rem)]',
			size === 'lg' && 'text-[clamp(3rem,7.5vw,6.25rem)]'
		]}
	>
		{product.plate}
	</p>

	{#if !small}
		<div class="flex items-end justify-between gap-4 text-xs opacity-75">
			<span>{product.domain}</span>
			<span class="text-right">{product.where}</span>
		</div>
	{/if}
</div>

<style>
	.plate {
		background:
			radial-gradient(120% 90% at 100% 0%, rgb(255 255 255 / 0.1), transparent 60%),
			radial-gradient(90% 80% at 0% 100%, rgb(0 0 0 / 0.25), transparent 70%),
			var(--tone);
	}
	/* inner hairline frame, echoing the seal */
	.plate::before {
		content: '';
		position: absolute;
		inset: 0.45rem;
		border: 1px solid rgb(244 239 229 / 0.22);
		border-radius: 0.25rem;
		pointer-events: none;
		z-index: -1;
	}
	/* faint paper grain */
	.plate::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		opacity: 0.18;
		mix-blend-mode: overlay;
		pointer-events: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
	}
</style>
