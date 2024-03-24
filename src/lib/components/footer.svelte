<script lang="ts">
	import { Facebook } from '$lib/assets/icons';
	import { computer1, logo1, logos } from '$lib/assets/images';
	import { buttonVariants } from './ui/button';
</script>

<footer
	class="relative bg-gradient-to-b from-primary via-blue-900 to-primary text-primary-foreground"
>
	<div class="container relative px-[5%]">
		<img src={computer1} alt="Computer" class="absolute -right-56 z-[9] hidden h-full md:block" />

		<div class="relative z-10 flex w-full flex-col gap-5 py-20 md:w-2/3">
			<h1 class="font-metropolis-bold text-2xl uppercase md:text-3xl lg:text-5xl">
				Call for Papers
			</h1>

			<p class="font-metropolis text-lg lg:text-xl lg:leading-8">
				Do you have groundbreaking research pushing the boundaries of Information Technology? Share
				your insights and innovations on the global stage at the UMak ICT Research Congress!
			</p>

			<a
				href="https://easychair.org/my/conference?conf=ictrcie2024"
				target="_blank"
				rel="noreferrer"
				class={buttonVariants({
					variant: 'ghost',
					class:
						'h-auto w-fit rounded-full bg-black px-7 text-sm uppercase text-primary-foreground md:text-base lg:text-lg'
				})}
			>
				Submit Your Paper
			</a>
		</div>
	</div>

	<div class="relative">
		<div class="absolute bottom-0 left-0 z-[5] h-full w-full bg-nodes bg-cover"></div>

		<div class="container relative z-10 px-[5%] py-10">
			<div class="mb-40 space-y-5">
				<div class="flex h-10 items-center gap-5">
					<img src={logos} alt="Makati, UMak, & CCIS" class="h-full object-cover" />
					<img src={logo1} alt="ICT Research Congress" class="h-full object-cover" />
				</div>

				<div class="space-y-2">
					<p class="font-metropolis text-xs uppercase tracking-widest">
						City Government of Makati - Republic of the Philippines
					</p>
					<div>
						<p class="font-marcellus text-3xl uppercase">
							<span class="font-marcellus text-[2.0rem]">U</span>niversity of
							<span class="font-marcellus text-[2.0rem]">M</span>akati
						</p>
						<p class="font-marcellus text-xs">College of Computing and Information Sciences</p>
					</div>
				</div>
			</div>

			<div class="container">
				<a
					href="https://web.facebook.com/ICTResearchCongress"
					class="mb-2 flex items-center gap-4 transition-[filter] duration-300 ease-in-out hover:brightness-75"
					target="_blank"
					rel="noreferrer"
				>
					<Facebook class="h-5 w-5" />
					<p class="font-metropolis-medium text-lg lg:text-lg">/ ICT Research Congress</p>
				</a>

				<a
					href="mailto:ccis@umak.edu.ph"
					class="text-md font-metropolis-medium transition-[filter] duration-300 ease-in-out hover:brightness-75"
					>ccis@umak.edu.ph</a
				>
			</div>
		</div>

		<div class="relative z-10 border-t-2 border-black bg-gradient-to-b from-sky-950 to-secondary">
			<div class="container flex gap-5 px-[5%] py-5 text-sm md:text-base">
				<span>ICT Research Congress 2024</span>
				|
				<a
					href="/devs"
					target="_blank"
					class="transition-[filter] duration-300 ease-in-out hover:brightness-75"
					>Acknowledgements</a
				>
			</div>
		</div>
	</div>
</footer>
