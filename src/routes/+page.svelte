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
	<div class="container flex w-full items-center gap-20 px-[5%]">
		<!-- <div class="absolute w-full h-full scale-x-125 left-1/2 -translate-x-1/2 -z-0"></div> -->

		<div class="z-10 flex flex-1 flex-col gap-3 py-10 md:py-20">
			<p
				class="text-base leading-6 text-primary-foreground md:text-xl md:leading-8 lg:text-2xl lg:leading-10"
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

		<div class="hidden flex-1 md:block">
			<img
				class="relative left-12 scale-125 lg:left-48 2xl:left-24"
				src={computer2}
				alt="Blue Computer"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<Speakers />

<section class="bg-blue-50">
	<div class="container flex flex-col items-center justify-center gap-20 px-[5%] py-20">
		<h1
			class="bg-gradient-to-t from-black to-gray-200 bg-clip-text font-metropolis-black text-2xl uppercase md:text-3xl lg:text-5xl xl:text-6xl"
		>
			In Collaboration With
		</h1>

		<div class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
			{#each COLLABORATORS as collaborator, idx (idx)}
				<div
					class="flex h-full w-full flex-col rounded-xl border border-blue-900/15 bg-card p-6 text-card-foreground shadow-b-2xl shadow-secondary/25"
				>
					<div class="flex w-full justify-center p-6">
						<img
							class="h-60 object-cover"
							src={collaborator.icon}
							alt={`${collaborator.text}'s Logo'`}
						/>
					</div>

					<div class="flex h-full flex-col justify-between gap-4">
						<h3 class="text-center font-metropolis-semibold text-sm md:text-base lg:text-lg">
							{collaborator.text}
						</h3>

						<a
							href={collaborator.link}
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class: 'w-fit space-x-1 rounded-full '
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
		class="container flex flex-col items-center justify-center gap-10 px-[5%] py-20 *:flex-1 lg:flex-row"
	>
		<div class="flex flex-col items-start justify-start gap-5">
			<h1 class="font-metropolis-bold text-2xl md:text-4xl xl:text-5xl">
				Why attend the ICT Research Congress?
			</h1>
			<div class="h-1 w-full bg-gradient-to-r from-primary via-90%" />
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

		<div class="flex flex-row flex-wrap gap-5 *:flex-1">
			{#each WHY_ATTEND as data, idx (idx)}
				<div class="my-5 flex flex-row items-center justify-between gap-5">
					<div
						class="relative aspect-square h-20 w-fit rounded-full bg-gradient-to-b from-[#2D5C8B] to-[#021329] xl:h-24"
					>
						<Fa
							icon={data.icon}
							class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 text-xl text-white"
						/>
					</div>

					<div class="flex h-full w-full flex-col space-y-1">
						<h3 class="w-full flex-[20%] font-metropolis-bold text-xs uppercase md:text-sm">
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
