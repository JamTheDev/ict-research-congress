<script lang="ts">
	import { page } from '$app/stores';
	import { ROUTES } from '$lib';
	import { logo1 } from '$lib/assets/images';
	import { buttonVariants } from '$lib/components/ui/button';
	import { curScrollDir } from '$lib/store';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import Input from './ui/input/input.svelte';

	let isOnTop = true;
	let isMenuOpen = false;

	function setIsOnTop(): void {
		window.scrollY > 100 ? (isOnTop = false) : (isOnTop = true);
	}

	onMount(() => {
		curScrollDir.subscribe(() => {
			isOnTop = false;
			// console.log(isOnTop);
		});
		window.addEventListener('scroll', setIsOnTop);
	});
</script>

<nav
	class={`fixed left-0 top-0 z-[500] h-20 w-full bg-gradient-to-b from-primary to-primary transition-[background-color,box-shadow] duration-300 md:to-transparent ${!isOnTop || $page.route.id === '/register' ? 'bg-primary shadow-md-2' : ''}`}
>
	<div class="container z-[500] flex h-20 w-full items-center justify-between px-[5%] py-5">
		<a href="/" class="contents">
			<img src={logo1} alt="ICT Research Congress" class="h-full object-cover" />
		</a>

		<input type="checkbox" id="hamburger" hidden bind:checked={isMenuOpen} />

		<label for="hamburger" class="block hover:cursor-pointer md:hidden">
			<Fa icon={faBars} color="white" size="1.5x" />
		</label>

		<!-- <div -->
		<!-- 	class="items-center gap-0 md:gap-10 flex absolute w-full md:w-auto md:relative top-20 py-2 md:py-0 bg-secondary/90 md:bg-transparent backdrop-blur-md left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 md:top-0 flex-col md:flex-row" -->
		<!-- > -->
		<!-- 	{#each ROUTES as { name, path }, idx (idx)} -->
		<!-- 		<a -->
		<!-- 			href={path} -->
		<!-- 			class="relative uppercase w-full text-center py-2 md:py-0 text-primary-foreground after:content-none md:after:content-[''] after:h-[1px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-100 after:transition-transform after:duration-300 after:ease-in-out" -->
		<!-- 			>{name}</a -->
		<!-- 		> -->
		<!-- 	{/each} -->
		<!-- </div> -->

		<div class="hidden items-center gap-10 md:flex">
			{#each ROUTES as { name, path }, idx (idx)}
				<a
					href={path}
					class="relative uppercase text-primary-foreground after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-100"
					>{name}</a
				>
			{/each}
		</div>

		<!-- Mobile -->
		<div
			class={`absolute left-1/2 top-20 w-full -translate-x-1/2 flex-col items-center divide-y divide-primary/10 border-b-8 border-b-primary bg-secondary/90 py-2 backdrop-blur-md ${isMenuOpen ? 'flex md:hidden' : 'hidden'}`}
		>
			{#each ROUTES as { name, path }, idx (idx)}
				<a
					href={path}
					class="relative w-full py-4 text-center uppercase text-primary-foreground after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out after:content-none hover:after:scale-100 md:py-0 md:after:content-['']"
					on:click={() => (isMenuOpen = false)}>{name}</a
				>
			{/each}
		</div>

		<a
			href="https://easychair.org/my/conference?conf=ictrcie2024"
			target="_blank"
			rel="noreferrer"
			class={buttonVariants({
				variant: 'ghost',
				class: 'hidden h-auto rounded-full bg-black uppercase text-primary-foreground md:block'
			})}
		>
			Call for Papers
		</a>
	</div>
</nav>
