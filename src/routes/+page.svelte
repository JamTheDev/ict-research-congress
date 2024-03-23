<script lang="ts">
	import { COLLABORATORS, WHY_ATTEND } from '$lib';
	import { computer2 } from '$lib/assets/images';
	import { Footer, Hero, Speakers, Timeline } from '$lib/components';
	import { buttonVariants } from '$lib/components/ui/button';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<Hero />

<Timeline />

<section class="relative bg-gradient-to-r from-blue-900 to-secondary">
	<div class="container px-[5%] flex items-center gap-20 w-full">
		<!-- <div class="absolute w-full h-full scale-x-125 left-1/2 -translate-x-1/2 -z-0"></div> -->

		<div class="flex-1 flex flex-col gap-3 z-10 py-10 md:py-20">
			<p
				class="text-base md:text-xl lg:text-2xl text-primary-foreground leading-6 md:leading-8 lg:leading-10"
			>
				The
				<span class="font-metropolis-bold">ICT Research Congress</span>
				is an annual event of the
				<span class="font-metropolis-bold"
					>University of Makati - College of Computing and Information Sciences (UMak - CCIS)</span
				>
				that started on 2013 where researchers, students, and industry professionals collide to exchange
				ideas, showcase discoveries, and shape the future of technology.
			</p>
		</div>

		<div class="flex-1 hidden md:block">
			<img
				class="relative scale-125 left-12 lg:left-48 2xl:left-24"
				src={computer2}
				alt="Blue Computer"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<Speakers />

<section class="bg-blue-50">
	<div class="py-20 px-[5%] container flex flex-col justify-center items-center gap-20">
		<h1
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase"
		>
			In Collaboration With
		</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
			{#each COLLABORATORS as collaborator, idx (idx)}
				<div
					class="border border-blue-900/15 rounded-xl bg-card text-card-foreground h-full flex flex-col shadow-b-2xl shadow-secondary/25 p-6 w-full"
				>
					<div class="p-6 w-full flex justify-center">
						<img
							class="h-60 object-cover"
							src={collaborator.icon}
							alt={`${collaborator.text}'s Logo'`}
						/>
					</div>

					<div class="flex justify-between flex-col h-full gap-4">
						<h3 class="text-center text-sm md:text-base lg:text-lg font-metropolis-semibold">
							{collaborator.text}
						</h3>

						<a
							href={collaborator.link}
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class:
									'w-fit rounded-full space-x-1 hover:scale-95 transition-[background-position,transform]'
							})}
						>
							<span class="font-metropolis-medium">Visit</span>

							<Fa icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="shadow-t-section shadow-secondary">
	<div
		class="py-20 px-[5%] flex flex-col lg:flex-row justify-center items-center container gap-10 *:flex-1"
	>
		<div class="flex flex-col items-start justify-start gap-5">
			<h1 class="text-2xl md:text-4xl xl:text-5xl font-metropolis-bold">
				Why attend the ICT Research Congress?
			</h1>
			<div class="h-1 bg-gradient-to-r from-primary via-90% w-full" />
			<p class="text-sm md:text-base">
				Fuel your passion for ICT at the ICT Research Congress! Network with leading minds, explore
				cutting-edge research, and shape the future of technology. Attend and ignite your career in
				this dynamic field.
			</p>

			<!-- <a -->
			<!-- 	href="/register" -->
			<!-- 	class={buttonVariants({ -->
			<!-- 		class: -->
			<!-- 			'rounded-full relative uppercase text-sm md:text-base lg:text-lg w-fit px-7 py-5 z-10 hover:scale-95 transition-[background-position,transform]' -->
			<!-- 	})} -->
			<!-- > -->
			<!-- 	Register Now -->
			<!-- </a> -->
		</div>

		<div class="flex flex-row flex-wrap *:flex-1 gap-5">
			{#each WHY_ATTEND as data, idx (idx)}
				<div class="flex flex-row gap-5 justify-between items-center my-5">
					<div
						class="relative bg-gradient-to-b aspect-square w-fit h-20 xl:h-24 from-[#2D5C8B] to-[#021329] rounded-full"
					>
						<Fa
							icon={data.icon}
							class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl scale-150 text-white"
						/>
					</div>

					<div class="flex flex-col w-full h-full space-y-1">
						<h3 class="uppercase font-metropolis-bold text-xs md:text-sm w-full flex-[20%]">
							{data.title}
						</h3>

						<p class="flex-[80%] text-sm md:text-base">{data.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- <CallForPapers /> -->

<Footer />
