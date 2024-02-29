<script lang="ts">
	import { computer2, hero, ictrc7th, ictrc8th, ictrc9th, logo1 } from '$lib/assets/images';
	import { CallForPapers, EventLogo, Footer } from '$lib/components';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { faLightbulb, faMicrophone, faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<section
	class={`h-[100svh] pt-20 flex justify-center items-center px-[5%] flex-col relative`}
	id="hero"
>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<img class="aspect-[16/5] max-h-[45%]" src={logo1} alt="ICT Research Congress" />

	<div class="px-10 py-3 bg-gradient-to-b from-[#2D5C8B] to-[#004298] rounded-3xl mt-5 text-center">
		<p class="uppercase font-semibold text-2xl text-primary-foreground">
			Reformation of Computing Knowledge:
		</p>
		<p class="uppercase text-lg text-primary-foreground">
			Crafting Research Through Cutting-edge Technology
		</p>
	</div>

	<a
		href="/call-for-papers"
		class="relative uppercase rounded-full text-primary-foreground text-lg h-auto bg-secondary px-7 py-2 mt-5 z-10"
	>
		Call for Papers
	</a>
</section>

<section class="py-10 container">
	<div class="flex flex-col justify-center items-center gap-6 pt-10 pb-16">
		<h1 class="text-5xl font-metropolis-bold text-center text-gradient-primary">ABOUT THE</h1>
		<EventLogo />
	</div>

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
			/>
		</div>
	</div>
</section>

<section class="py-20 px-[5%] flex flex-col justify-center items-center container gap-20">
	<h1
		class="font-metropolis-bold px-20 py-5 text-3xl uppercase rounded-xl bg-gradient-to-b from-[#2D5C8B] to-[#004298] text-white"
	>
		Why attend the ICT Research Congress?
	</h1>

	<div class="max-w-full flex flex-row *:flex-[33%] flex-wrap">
		<div class="flex flex-col flex-[33%] gap-5 justify-center items-center">
			<div
				class="relative bg-gradient-to-b aspect-square w-fit h-56 from-[#2D5C8B] to-[#021329] rounded-full p-10"
			>
				<Fa
					icon={faUserGroup}
					class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl scale-150 text-white"
				/>
			</div>

			<h3 class="uppercase font-metropolis-bold text-3xl w-fit text-center">
				networking opportunities
			</h3>
		</div>

		<div class="flex flex-col flex-[33%] gap-5 justify-center items-center">
			<div
				class="relative bg-gradient-to-b aspect-square w-fit h-56 from-[#2D5C8B] to-[#021329] rounded-full p-10"
			>
				<Fa
					icon={faMicrophone}
					class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl scale-150 text-white"
				/>
			</div>

			<h3 class="uppercase font-metropolis-bold text-3xl w-fit text-center">
				unique resource speakers
			</h3>
		</div>
		<div class="flex flex-col flex-[33%] gap-5 justify-center items-center">
			<div
				class="relative bg-gradient-to-b aspect-square w-fit h-56 from-[#2D5C8B] to-[#021329] rounded-full p-10"
			>
				<Fa
					icon={faLightbulb}
					class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl scale-150 text-white"
				/>
			</div>

			<h3 class="uppercase font-metropolis-bold text-3xl w-fit text-center">
				innovative <br /> learning
			</h3>
		</div>
	</div>
</section>

<section class="py-20 px-[5%] container flex flex-col gap-10 items-center">
	<h1
		class="font-metropolis-bold px-20 py-5 text-3xl uppercase rounded-xl bg-gradient-to-b from-[#2D5C8B] to-[#004298] text-white"
	>
		PREVIOUS ICT RESEARCH CONGRESS
	</h1>

	<div class="max-w-full w-full flex flex-row flex-wrap gap-5 *:hover:cursor-pointer">


		<div class="relative flex-[70%] aspect-[1/3] h-96 rounded-xl bg-gray-300 overflow-hidden group">

			<img class="absolute w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" src={ictrc7th} alt="">
			
			<div class="absolute flex flex-col gap-3 bottom-0 p-5 ">
				<h3 class="font-metropolis-bold text-3xl text-white translate-y-14 group-hover:-translate-y-0 transition-transform">7th IT Research Congress</h3>
				<a class="bg-white rounded-xl px-5 py-2 w-fit opacity-0 group-hover:opacity-100 transition-opacity" href="https://web.facebook.com/ICTResearchCongress/videos/7168114083214987">Watch Now</a>
			</div>
		</div>

		<div class="relative flex-[20%] aspect-[1/2] h-96 rounded-xl bg-gray-300 overflow-hidden group">

			<img class="absolute w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" src={ictrc8th} alt="">
			
			<div class="absolute flex flex-col gap-3 bottom-0 p-5 ">
				<h3 class="font-metropolis-bold text-3xl text-white translate-y-14 group-hover:-translate-y-0 transition-transform">8th IT Research Congress</h3>
				<a class="bg-white rounded-xl px-5 py-2 w-fit opacity-0 group-hover:opacity-100 transition-opacity" href="https://web.facebook.com/ICTResearchCongress/videos/7168114083214987">Watch Now</a>
			</div>
		</div>

		<div class="relative flex-[10%] aspect-[1/3] h-96 rounded-xl bg-gray-300 overflow-hidden group">

			<img class="absolute w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" src={ictrc9th} alt="">
			
			<div class="absolute flex flex-col gap-3 bottom-0 p-5 ">
				<h3 class="font-metropolis-bold text-3xl text-white translate-y-14 group-hover:-translate-y-0 transition-transform">9th IT Research Congress</h3>
				<a class="bg-white rounded-xl px-5 py-2 w-fit opacity-0 group-hover:opacity-100 transition-opacity" href="https://web.facebook.com/ICTResearchCongress/videos/7168114083214987">Watch Now</a>
			</div>
		</div>

		<div class="relative flex-[50%] aspect-[1/3] h-96 rounded-xl bg-gray-300 overflow-hidden group">

			<img class="absolute w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" src={hero} alt="">
			<div class="absolute w-full h-full bg-gradient-to-t from-[#021329]"></div>
			
			<div class="absolute flex flex-col gap-3 bottom-0 p-5 ">
				<h3 class="font-metropolis-bold text-3xl text-white translate-y-14 group-hover:-translate-y-0 transition-transform">10th IT Research Congress</h3>
				<a class="bg-white rounded-xl px-5 py-2 w-fit opacity-0 group-hover:opacity-100 transition-opacity" href="https://web.facebook.com/ICTResearchCongress/videos/7168114083214987">Watch Now</a>
			</div>
		</div>
	</div>
</section>

<!-- <CallForPapers /> -->

<Footer />
