<script lang="ts">
	import { COLLABORATORS, WHY_ATTEND } from '$lib';
	import { computer2, hero, ictrc7th, ictrc8th, ictrc9th, logo1 } from '$lib/assets/images';
	import { CallForPapers, EventLogo, Footer, Timeline } from '$lib/components';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { faLightbulb, faMicrophone, faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<section
	class={`h-[100svh] pt-20 flex justify-center items-center px-[5%] flex-col relative bg-radial-primary`}
>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<img class="aspect-[16/5] max-h-[45%]" src={logo1} alt="ICT Research Congress" />

	<div class="px-10 py-3 bg-gradient-to-b from-[#2D5C8B] to-[#004298] rounded-3xl mt-5 text-center">
		<span class="uppercase font-semibold text-lg text-primary-foreground"> AI Horizons: </span>
		<span class="uppercase text-lg text-primary-foreground">
			Navigating the Future of Connectivity
		</span>
	</div>

	<a
		href="/call-for-papers"
		class="relative uppercase rounded-full text-primary-foreground text-lg h-auto bg-secondary px-7 py-2 mt-5 z-10"
	>
		Call for Papers
	</a>
</section>

<Timeline />
<section class="relative container">
	<div class="relative px-[5%] flex items-center gap-20 w-full h-[500px]">
		<div
			class="absolute w-full h-full scale-x-125 rounded-3xl left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 to-secondary -z-0"
		></div>
		<div class="flex-1 flex flex-col gap-3 z-10">
			<p class="text-2xl text-white text-justify">
				The <strong>University of Makati (UMak) - IT Research Congress</strong> is an annual event
				of the
				<strong
					>University of Makati UMak College of Computing and Information Sciences (UMak - CCIS)</strong
				> where Researchers, students, and industry professionals collide to exchange ideas, showcase
				discoveries, and shape the future of technology.
			</p>

			<a
				href="/call-for-papers"
				class="relative uppercase rounded-full text-primary-foreground text-lg h-auto bg-primary w-fit px-7 py-2 mt-5 z-10"
			>
				know more
			</a>
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

<section class="py-20 px-[5%] flex flex-col justify-center items-center container gap-20">
	<h1
		class="font-metropolis-bold px-20 py-5 text-3xl uppercase rounded-xl bg-gradient-to-b from-[#2D5C8B] to-[#004298] text-white"
	>
		In Collaboration With
	</h1>

	<div class="flex flex-row justify-center items-center gap-40">
		{#each COLLABORATORS as collaborator}
			<button
				class={`aspect-square w-44 flex flex-col justify-center items-center transition-all group `}
				on:click={() => window.open(collaborator.link, '_blank')}
			>
				<div class="flex flex-col gap-10">
					<img class="group-hover:scale-125 transition-all" src={collaborator.icon} alt={`${collaborator.text}'s Logo'`} />
					<span class="w-full text-center font-marcellus text-lg font-bold"
						>{collaborator.text}</span
					>
				</div>
				<a
			href="/call-for-papers"
			class="text-center opacity-0 -translate-y-6 transition-all group-hover:opacity-100 group-hover:translate-y-6 relative uppercase rounded-full text-primary-foreground text-sm h-auto bg-primary w-fit px-7 py-2 z-10"
		>
			visit
		</a>
			</button>
		{/each}
	</div>
</section>

<section class="py-20 px-[5%] flex flex-row justify-center items-center container gap-10 *:flex-1">
	<!-- <h1
		class="font-metropolis-bold px-20 py-5 text-3xl uppercase rounded-xl bg-gradient-to-b from-[#2D5C8B] to-[#004298] text-white"
	>
		Why attend the ICT Research Congress?
	</h1>

	<div class="max-w-full flex flex-row *:flex-[33%] justify-between flex-wrap ">
		
	</div> -->

	<div class="flex flex-col items-start justify-start gap-5">
		<h1 class="text-5xl font-metropolis font-black">Why attend the ICT Research Congress?</h1>
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
			register now
		</a>
	</div>

	<div class="flex flex-row flex-wrap *:flex-1 gap-5">
		{#each WHY_ATTEND as data}
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
</section>

<!-- <CallForPapers /> -->

<Footer />
