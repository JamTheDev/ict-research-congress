<script lang="ts">
	import { TIMELINE } from '$lib';
	import Fa from 'svelte-fa';
	import { particles2 } from '$lib/assets/images';
</script>

<section class="px-[5%] flex items-center gap-10 relative overflow-hidden bg-blue-50">
	<div class="container relative flex flex-col w-full gap-10 z-10 pt-28 pb-40">
		<!-- <h1 class="font-metropolis-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl uppercase"> -->
		<!-- 	Timeline -->
		<!-- </h1> -->

		<img
			src={particles2}
			alt=""
			draggable="false"
			class="absolute -right-1/4 top-0 object-cover h-full hue-rotate-[50deg] opacity-75 scale-150 -z-20"
		/>
		<div class="absolute w-2 bg-blue-950 h-full top-0 left-1/2 -translate-x-1/2 z-[9]"></div>

		{#each TIMELINE as { date, description, icon }, idx (idx)}
			<div
				class={`flex w-full items-center justify-center  ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
			>
				<div
					class={`px-8 py-6 bg-blue-950 text-white rounded-lg w-full  shadow-b-2xl shadow-secondary/75 ${idx % 2 === 1 ? 'text-start' : 'text-end'}`}
				>
					<h3 class="font-metropolis-bold text-2xl lg:text-4xl uppercase mb-2">
						{date}
					</h3>
					<p class="font-metropolis-medium text-base lg:text-lg">
						{description}
					</p>
				</div>

				<div
					class="min-w-16 min-h-16 bg-blue-950 rounded-full mx-4 z-10 shadow-md shadow-secondary/50 flex justify-center items-center text-primary-foreground border-primary-foreground border-4"
				>
					<Fa {icon} size="1.5x" />
				</div>

				<div class="text-primary-foreground w-full px-8 py-6"></div>
			</div>
		{/each}

		<!-- <div> -->
		<!-- {#each TIMELINE as { date, description }, idx (idx)} -->
		<!-- 	<div -->
		<!-- 		class="text-primary-foreground text-end relative after:content-[''] after:absolute after:w-12 after:h-12 after:-right-16 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white" -->
		<!-- 	> -->
		<!-- 		<span class="font-metropolis-semibold text-4xl lg:text-6xl uppercase">{date}</span> -->
		<!---->
		<!-- 		<p>{description}</p> -->
		<!-- 		<span class="w-3 h-full bg-white absolute top-0 -right-10 translate-x-1/2"></span> -->
		<!-- 	</div> -->
		<!-- {/each} -->

		<!-- <span -->
		<!-- 	class="w-12 h-12 bg-white absolute top-1/4 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full" -->
		<!-- ></span> -->
		<!---->
		<!-- <span -->
		<!-- 	class="w-12 h-12 bg-white absolute top-1/2 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full" -->
		<!-- ></span> -->
		<!---->
		<!-- <span -->
		<!-- 	class="w-12 h-12 bg-white absolute top-3/4 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full" -->
		<!-- ></span> -->
		<!-- </div> -->
	</div>
</section>
