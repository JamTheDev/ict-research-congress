<script lang="ts">
	import { COLLABORATORS, SPEAKERS, WHY_ATTEND } from '$lib';
	import { computer2, logo1, nodes, particles1, particles2 } from '$lib/assets/images';
	import { Footer, Timeline } from '$lib/components';
	import { buttonVariants } from '$lib/components/ui/button';
	import {
		faArrowUpRightFromSquare,
		faCalendarDay,
		faLocationDot
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
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
		class="absolute -bottom-40 left-0 object-cover w-full z-0"
		draggable="false"
	/>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<div class="flex justify-center items-center flex-col w-full h-full space-y-4">
		<img class="aspect-[16/5] max-h-[45%]" src={logo1} alt="ICT Research Congress" />

		<div
			class="px-10 py-3 bg-gradient-to-r from-secondary/25 via-transparent to-secondary/25 text-center rounded-full"
		>
			<!-- <span class="font-semibold text-lg text-primary-foreground"> AI Horizons: </span> -->
			<!-- <span class="text-lg text-primary-foreground"> -->
			<!-- 	Navigating the Future of Connectivity -->
			<!-- </span> -->

			<p class="font-metropolis-black text-lg text-primary-foreground">
				AI Horizons: Navigating the Future of Connectivity
			</p>
		</div>

		<div class="flex items-center gap-10">
			<div class="flex items-center gap-2">
				<Fa icon={faLocationDot} size="1.5x" class="text-yellow-500/70" />
				<span class="text-primary-foreground font-metropolis-black text-lg"
					>University of Makati</span
				>
			</div>

			<div class="flex items-center gap-2">
				<Fa icon={faCalendarDay} size="1.5x" class="text-yellow-500/70" />
				<span class="text-primary-foreground font-metropolis-black text-lg">May 10, 2024</span>
			</div>
		</div>

		<a
			href="/call-for-papers"
			class={buttonVariants({
				variant: 'ghost',
				class:
					'text-lg px-7 mt-5 uppercase h-auto bg-black rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]'
			})}
		>
			Call for Papers
		</a>
	</div>
</section>

<Timeline />

<section class="relative container">
	<div class="relative px-[5%] flex items-center gap-20 w-full h-[500px]">
		<div
			class="absolute w-full h-full scale-x-125 rounded-3xl left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 to-secondary -z-0"
		></div>
		<div class="flex-1 flex flex-col gap-3 z-10">
			<p class="text-2xl text-primary-foreground leading-10">
				The
				<span class="font-metropolis-bold">ICT Research Congress</span>
				is an annual event of the
				<span class="font-metropolis-bold"
					>University of Makati - College of Computing and Information Sciences (UMak - CCIS)</span
				>
				where researchers, students, and industry professionals collide to exchange ideas, showcase discoveries,
				and shape the future of technology.
			</p>
		</div>
		<div class="flex-1">
			<img
				class="relative scale-125 left-0 lg:left-48 xl:left-48 2xl:left-24"
				src={computer2}
				alt="Blue Computer"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<section class="bg-blue-50">
	<div class="py-20 px-[5%] container flex flex-col justify-center items-center gap-20">
		<h1
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase"
		>
			Speakers
		</h1>

		<div class="grid grid-cols-4 gap-10 w-full">
			{#each SPEAKERS as speaker, idx (idx)}
				<div
					class="border border-blue-900/15 rounded-xl bg-card text-card-foreground h-full flex flex-col shadow-b-2xl shadow-secondary/25 p-6 w-full"
				>
					<div class="p-6 w-full flex justify-center">
						<img
							class="h-60 w-60 object-cover bg-blue-900/10 rounded-xl"
							alt={speaker.name}
							src={speaker.imageUrl}
							loading="lazy"
						/>
					</div>

					<div class="flex justify-between flex-col h-full gap-2">
						<h3 class="text-center text-sm md:text-base lg:text-lg font-metropolis-medium">
							{speaker.name}
						</h3>

						<p class="text-muted-foreground text-sm md:text-base">
							{speaker.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-blue-50">
	<div class="py-20 px-[5%] container flex flex-col justify-center items-center gap-20">
		<h1
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase"
		>
			In Collaboration With
		</h1>

		<div class="grid grid-cols-3 gap-10 w-full">
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
						<h3 class="text-center text-sm md:text-base lg:text-lg font-metropolis-medium">
							{collaborator.text}
						</h3>

						<a
							href={collaborator.link}
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class:
									'w-fit gap-2 text-base h-auto rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]'
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
	<div class="py-20 px-[5%] flex flex-row justify-center items-center container gap-10 *:flex-1">
		<div class="flex flex-col items-start justify-start gap-5">
			<h1 class="text-5xl font-metropolis-bold">Why attend the ICT Research Congress?</h1>
			<div class="h-1 bg-gradient-to-r from-primary via-90% w-full" />
			<p>
				Fuel your passion for ICT at the ICT Research Congress! Network with leading minds, explore
				cutting-edge research, and shape the future of technology. Attend and ignite your career in
				this dynamic field.
			</p>

			<a
				href="/call-for-papers"
				class="relative uppercase rounded-full text-primary-foreground text-lg h-auto bg-primary w-fit px-7 py-2 z-10"
			>
				Register Now
			</a>
		</div>

		<div class="flex flex-row flex-wrap *:flex-1 gap-5">
			{#each WHY_ATTEND as data, idx (idx)}
				<div class="flex flex-row gap-5 justify-between items-center my-5">
					<div
						class="relative bg-gradient-to-b aspect-square w-fit h-24 from-[#2D5C8B] to-[#021329] rounded-full"
					>
						<Fa
							icon={data.icon}
							class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl scale-150 text-white"
						/>
					</div>

					<div class="flex flex-col w-full h-full">
						<h3 class="uppercase font-metropolis-bold text-sm w-full flex-[20%]">
							{data.title}
						</h3>

						<p class="flex-[80%]">Lorem ipsum very short text</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- <CallForPapers /> -->

<Footer />
