<script lang="ts">
	import { Facebook } from '$lib/assets/icons';
	import { computer1, logo1, logos } from '$lib/assets/images';
</script>

<footer
	class="bg-gradient-to-b from-primary via-blue-900 to-primary text-primary-foreground relative"
>
	<div class="relative px-[5%]">
		<img src={computer1} alt="Computer" class="absolute -right-56 h-full z-[9] hidden md:block" />

		<div class="w-2/3 flex flex-col py-20 gap-5 relative z-10">
			<h1 class="font-metropolis-bold text-2xl lg:text-3xl 2xl:text-4xl uppercase">
				Call for Papers
			</h1>

			<p class="text-lg lg:text-xl 2xl:text-2xl font-metropolis-medium">
				Do you have groundbreaking research pushing the boundaries of Information Technology? Share
				your insights and innovations on the global stage at the UMak ICT Research Congress!
			</p>

			<a
				href="/call-for-papers"
				class="uppercase rounded-full w-fit text-primary-foreground text-lg bg-secondary px-7 py-2 mt-5 z-10"
			>
				Submit Your Paper
			</a>
		</div>
	</div>

	<div class="relative">
		<div class="bg-nodes w-full h-full absolute bottom-0 left-0 bg-cover z-[5]"></div>

		<div class="py-10 px-[5%] z-10 relative">
			<div class="space-y-5 mb-40">
				<div class="h-10 flex items-center gap-5">
					<img src={logos} alt="Makati, UMak, & CCIS" class="object-cover h-full" />
					<img src={logo1} alt="ICT Research Congress" class="object-cover h-full" />
				</div>

				<div class="space-y-2">
					<p class="uppercase font-metropolis tracking-widest text-xs">
						City Government of Makati - Republic of the Philippines
					</p>
					<div>
						<p class="uppercase text-3xl font-marcellus"><span class="text-[2.0rem] font-marcellus">U</span>niversity of <span class="text-[2.0rem] font-marcellus">M</span>akati</p>
						<p class="text-xs font-marcellus">College of Computing and Information Sciences</p>
					</div>
				</div>
			</div>

			<div>
				<a
					href="https://web.facebook.com/ICTResearchCongress"
					class="flex items-center gap-4 mb-2"
					target="_blank"
					rel="noreferrer"
				>
					<Facebook class="w-5 h-5" />
					<p class="text-lg lg:text-lg font-metropolis-medium">/ ICT Research Congress</p>
				</a>

				<a href="mailto:ccis@umak.edu.ph" class="text-md font-metropolis-medium">ccis@umak.edu.ph</a
				>
			</div>
		</div>

		<div
			class="py-5 px-[5%] flex gap-5 bg-gradient-to-b from-sky-950 to-secondary border-t-2 border-black relative z-10"
		>
			<span>ICT Research Congress 2024</span>
			|
			<span>Acknowledgements</span>
		</div>
	</div>
</footer>
