<script lang="ts">
	import { page } from '$app/state';
	import LangSwitch from '$lib/i18n/LangSwitch.svelte';

	const links = [
		{ href: '/#work', label: 'Work' },
		{ href: '/company/', label: 'Company', wide: true },
		{ href: '/#contact', label: 'Contact' }
	];

	let onHome = $derived(page.data.path === '/');
</script>

<header class="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
	<div class="container flex h-16 items-center justify-between gap-6">
		<a
			href="/"
			class="group flex items-center gap-3"
			aria-label="Saba Inc."
			aria-current={onHome ? 'page' : undefined}
		>
			<img
				src="/brand/saba-mark.svg"
				alt=""
				width="30"
				height="30"
				class="size-[30px] transition-transform duration-500 group-hover:-rotate-6"
			/>
			<span class="flex items-baseline gap-2.5">
				<span class="font-serif text-[1.35rem] leading-none tracking-tight">Saba</span>
				<span class="hidden font-mincho text-[0.8rem] leading-none text-ink-3 sm:inline">
					株式会社鯖
				</span>
			</span>
		</a>

		<nav aria-label="Main">
			<ul class="flex items-center gap-4 text-[0.9rem] text-ink-2 sm:gap-8">
				{#each links as link (link.href)}
					<li class={link.wide ? 'hidden sm:block' : undefined}>
						<a href={link.href} class="link-draw py-1 whitespace-nowrap transition-colors hover:text-ink">
							{link.label}
						</a>
					</li>
				{/each}
				<li class="border-l border-line pl-3 sm:pl-5"><LangSwitch /></li>
			</ul>
		</nav>
	</div>
</header>
