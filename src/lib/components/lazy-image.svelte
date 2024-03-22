<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	export let src: string;
	export let className: string;

	let shimmerElements: HTMLElement;
	let gsapAnimation: GSAPAnimation;

	const setShimmerElements = () => {
		gsap.set(shimmerElements, {
			x: '-100%'
		});
	};

	const playShimmer = () => {
        gsapAnimation = gsap.to(shimmerElements, {
            x: "100%",
            repeat: -1,
            duration: 2,
            ease: "power3.out"
        })
    };

	const disposeOfGsap = () => {
        gsapAnimation?.kill()
    };

    const loadImageInto = async () => {
        
    }

	onMount(() => {
        setShimmerElements();
		playShimmer();
	});
</script>

<div class={className}>
	<div class="relative w-full h-full">
		<!-- Shimmer -->
		<div class="absolute bg-gray-300 w-full h-full overflow-hidden">
			<div
				bind:this={shimmerElements}
				class="flex flex-row relative rotate-6 w-full h-full scale-y-150"
			>
				<div class="bg-gradient-to-l from-gray-400/25 w-[30%] h-full"></div>
				<div class="bg-gradient-to-r from-gray-400/25 w-[30%] h-full"></div>
			</div>
		</div>
	</div>
</div>
