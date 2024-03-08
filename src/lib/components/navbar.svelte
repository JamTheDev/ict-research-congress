<script lang="ts">
	import { logo1 } from '$lib/assets/images';
	import { buttonVariants } from '$lib/components/ui/button';
	import { ScrollDirection } from '$lib/enums';
	import { curScrollDir } from '$lib/store';
	import { onMount } from 'svelte';

	let isOnTop = true;

	function setIsOnTop(): void {
		window.scrollY > 100 ? (isOnTop = false) : (isOnTop = true);
	}

	onMount(() => {
		curScrollDir.subscribe(val => {
			isOnTop = false;
			console.log(isOnTop)
		})
		window.addEventListener('scroll', setIsOnTop);
	});
</script>

<nav
	class={`fixed top-0 left-0 h-20 z-[500] w-full bg-gradient-to-b from-primary  transition-[background-color,box-shadow] duration-300 ${!isOnTop ? 'bg-primary shadow-md-2' : ''}`}
>
	<div class="container h-20 z-[500] flex w-full justify-between px-[5%] py-5">
		<a href="/" class="contents">
			<img src={logo1} alt="ICT Research Congress" class="object-cover h-full" />
		</a>

		<div class="flex items-center gap-10">
			<a href="/" class="uppercase text-primary-foreground hover:font-metropolis-bold">Home</a>
			<a href="/about" class="uppercase text-primary-foreground hover:font-metropolis-bold">About</a>
			<a href="/faq" class="uppercase text-primary-foreground hover:font-metropolis-bold">FAQ</a>
			<a href="/mechanics" class="uppercase text-primary-foreground hover:font-metropolis-bold">Mechanics</a>
		</div>

		<a
			href="/call-for-papers"
			class={buttonVariants({
				variant: 'ghost',
				class: 'uppercase bg-black rounded-full text-primary-foreground'
			})}
		>
			Call for Papers
		</a>
	</div>
</nav>