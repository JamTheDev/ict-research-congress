<script lang="ts">
	import { logo1, nodes, particles1, particles2 } from '$lib/assets/images';
	import { faCalendarDay, faLocationDot } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { buttonVariants } from './ui/button';
</script>

<section
	class={`h-[100svh] pt-20 flex justify-center items-center px-[5%] flex-col relative bg-radial-primary`}
>
	<img
		src={particles1}
		alt=""
		class="absolute -top-20 -right-80 object-cover max-h-[60%] z-0"
		draggable="false"
	/>
	<img
		src={particles2}
		alt=""
		class="absolute -top-60 -left-20 object-cover max-h-[75%] z-0 rotate-45"
		draggable="false"
	/>
	<img
		src={nodes}
		alt=""
		class="absolute -bottom-40 left-0 object-cover w-full min-w-[80rem] object-center z-0"
		draggable="false"
	/>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<div class="flex justify-center items-center flex-col w-full h-full space-y-4 relative z-10">
		<img class="aspect-[16/5] max-h-[45%]" src={logo1} alt="ICT Research Congress" />

		<div
			class="px-10 py-3 bg-gradient-to-r from-secondary/25 via-transparent to-secondary/25 text-center rounded-full"
		>
			<!-- <span class="font-semibold text-lg text-primary-foreground"> AI Horizons: </span> -->
			<!-- <span class="text-lg text-primary-foreground"> -->
			<!-- 	Navigating the Future of Connectivity -->
			<!-- </span> -->

			<p class="font-metropolis-black text-primary-foreground text-sm md:text-base lg:text-lg">
				Elevating Information Technology and Computing Knowledge through Cutting-Edge Technology
			</p>
		</div>

		<div class="flex items-center gap-10">
			<div class="flex items-center gap-2">
				<Fa icon={faLocationDot} size="1.5x" class="text-yellow-500/70" />
				<span class="text-primary-foreground font-metropolis-black text-sm md:text-base lg:text-lg"
					>University of Makati</span
				>
			</div>

			<div class="flex items-center gap-2">
				<Fa icon={faCalendarDay} size="1.5x" class="text-yellow-500/70" />
				<span class="text-primary-foreground font-metropolis-black text-sm md:text-base lg:text-lg"
					>May 10, 2024</span
				>
			</div>
		</div>

		<div class="space-x-2">
			<a
				href="https://easychair.org/my/conference?conf=ictrcie2024"
				target="_blank"
				rel="noreferrer"
				class={buttonVariants({
					variant: 'ghost',
					class:
						'text-sm md:text-base lg:text-lg px-7 mt-5 border border-black hover:border-white uppercase h-auto bg-black rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,border-color,color]'
				})}
			>
				Call for Papers
			</a>

			<!-- <a -->
			<!-- 	href="/register" -->
			<!-- 	class={buttonVariants({ -->
			<!-- 		variant: 'outline', -->
			<!-- 		class: -->
			<!-- 			'text-sm md:text-base lg:text-lg px-7 mt-5 uppercase h-auto rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]' -->
			<!-- 	})} -->
			<!-- > -->
			<!-- 	Register -->
			<!-- </a> -->
		</div>
	</div>
</section>
