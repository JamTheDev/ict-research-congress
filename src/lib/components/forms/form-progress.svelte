<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let formItems: Array<string> = [];
	export let formProgressIdx: number = 0;
	let progressBarLength: number = 100;
	let progressBarElement: Array<HTMLElement> = [];

	onMount(() => {
        gsap.set(progressBarElement[formProgressIdx], {
            width: "0%"
        });
		gsap.to(progressBarElement[formProgressIdx], {
			width: progressBarLength + '%'
		});
	});
</script>

<div class="flex justify-center w-full py-5 ">
	<div class="flex flex-row justify-center items-center max-w-[900px] w-full">
        {#each formItems as formItem, idx}
		<div class={`relative flex flex-row items-center ${idx < formItems.length - 1 ? "flex-1" : ""}`}>
			<div class="relative z-10 right-1">
				<span class="absolute w-44 -left-[250%] text-center text-xs {idx < formItems.length - 1 ? "" : "font-bold  scale-110 "}">{formItem}</span>
				<div class="aspect-square w-7 bg-white border-4 border-black rounded-full my-5" />
			</div>

			{#if idx < formItems.length - 1}
				<div class="absolute w-full h-1 bg-black opacity-25"></div>
				<div bind:this={progressBarElement[idx]} class={`absolute h-1 bg-black ${idx > formItems.length - 1 ? "" : "w-full"}`}></div>
			{/if}
		</div>
	{/each}
    </div>
</div>
