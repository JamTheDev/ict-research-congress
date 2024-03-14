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
	class={`fixed top-0 left-0 h-20 z-[500] w-full bg-gradient-to-b from-primary to-primary md:to-transparent transition-[background-color,box-shadow] duration-300 ${!isOnTop || $page.route.id === '/register' ? 'bg-primary shadow-md-2' : ''}`}
>
	<div class="container h-20 z-[500] flex w-full justify-between px-[5%] py-5 items-center">
		<a href="/" class="contents">
			<img src={logo1} alt="ICT Research Congress" class="object-cover h-full" />
		</a>

		<input type="checkbox" id="hamburger" hidden bind:checked={isMenuOpen} />

		<label for="hamburger" class="block md:hidden hover:cursor-pointer">
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

		<div class="items-center gap-10 hidden md:flex">
			{#each ROUTES as { name, path }, idx (idx)}
				<a
					href={path}
					class="relative uppercase text-primary-foreground after:content-[''] after:h-[1px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-100 after:transition-transform after:duration-300 after:ease-in-out"
					>{name}</a
				>
			{/each}
		</div>

		<!-- Mobile -->
		<div
			class={`absolute items-center top-20 py-2 divide-y divide-primary/10 backdrop-blur-md border-b-8 border-b-primary left-1/2 -translate-x-1/2 flex-col bg-secondary/90 w-full ${isMenuOpen ? 'flex md:hidden' : 'hidden'}`}
		>
			{#each ROUTES as { name, path }, idx (idx)}
				<a
					href={path}
					class="relative uppercase w-full text-center py-4 md:py-0 text-primary-foreground after:content-none md:after:content-[''] after:h-[1px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-100 after:transition-transform after:duration-300 after:ease-in-out"
					on:click={() => (isMenuOpen = false)}>{name}</a
				>
			{/each}
		</div>

		<a
			href="/call-for-papers"
			class={buttonVariants({
				variant: 'ghost',
				class:
					'hidden md:block uppercase h-auto bg-black rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]'
			})}
		>
			Call for Papers
		</a>
	</div>
</nav>
