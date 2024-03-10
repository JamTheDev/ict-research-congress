<script lang="ts">
	import { Navbar } from '$lib/components';
	import { onMount } from 'svelte';
	import '../app.pcss';
	import { curScrollDir } from '$lib/store';
	import { ScrollDirection } from '$lib/enums';
	import { Toaster } from '$lib/components/ui/sonner';

	let oldScrollY: number = 0;
	let scrollY: number;

	const onUserScrollEvent = (e: Event) => {
		if (oldScrollY < scrollY) {
			curScrollDir.update((v) => ScrollDirection.DOWN);
		} else {
			curScrollDir.update((v) => ScrollDirection.UP);
		}

		oldScrollY = scrollY;
	};
</script>

<Toaster closeButton richColors />

<svelte:window on:scroll={onUserScrollEvent} bind:scrollY />

<Navbar />

<main>
	<slot />
</main>
