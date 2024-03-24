<script lang="ts">
	import { logo1, nodes, particles1, particles2 } from '$lib/assets/images';
	import { faCalendarDay, faLocationDot } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { buttonVariants } from './ui/button';
</script>

<section
	class={`relative flex h-[100svh] flex-col items-center justify-center bg-radial-primary px-[5%] pt-20`}
>
	<img
		src={particles1}
		alt=""
		class="absolute -right-80 -top-20 z-0 max-h-[60%] object-cover"
		draggable="false"
	/>
	<img
		src={particles2}
		alt=""
		class="absolute -left-20 -top-60 z-0 max-h-[75%] rotate-45 object-cover"
		draggable="false"
	/>
	<img
		src={nodes}
		alt=""
		class="absolute -bottom-40 left-0 z-0 w-full min-w-[80rem] object-cover object-center"
		draggable="false"
	/>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<div class="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-4">
		<img class="aspect-[16/5] max-h-[45%]" src={logo1} alt="ICT Research Congress" />

		<div
			class="rounded-full bg-gradient-to-r from-secondary/25 via-transparent to-secondary/25 px-10 py-3 text-center"
		>
			<!-- <span class="font-semibold text-lg text-primary-foreground"> AI Horizons: </span> -->
			<!-- <span class="text-lg text-primary-foreground"> -->
			<!-- 	Navigating the Future of Connectivity -->
			<!-- </span> -->

			<p class="font-metropolis-black text-sm text-primary-foreground md:text-base lg:text-lg">
				Elevating Information Technology and Computing Knowledge through Cutting-Edge Technology
			</p>
		</div>

		<div class="flex items-center gap-10">
			<div class="flex items-center gap-2">
				<Fa icon={faLocationDot} size="1.5x" class="text-yellow-500/70" />
				<span class="font-metropolis-black text-sm text-primary-foreground md:text-base lg:text-lg"
					>University of Makati</span
				>
			</div>

			<div class="flex items-center gap-2">
				<Fa icon={faCalendarDay} size="1.5x" class="text-yellow-500/70" />
				<span class="font-metropolis-black text-sm text-primary-foreground md:text-base lg:text-lg"
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
						'mt-5 h-auto rounded-full border border-black bg-black px-7 text-sm uppercase text-primary-foreground hover:border-white md:text-base lg:text-lg'
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
