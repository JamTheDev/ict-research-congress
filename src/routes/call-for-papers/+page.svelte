<script lang="ts">
	import { calendar } from '$lib/assets/images';
	import { Footer, Header } from '$lib/components';
	import EventLogo from '$lib/components/event-logo.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Header title="Call for Papers" />

<section class="px-[5%] py-10 flex items-center flex-col gap-10">
	<div class="px-16 py-10 bg-primary rounded-3xl">
		<h2 class="uppercase font-metropolis-bold text-4xl w-fit text-primary-foreground">
			Submission of Papers
		</h2>
	</div>

	<p class="text-base lg:text-2xl font-metropolis-medium">
		Join academics, industry leaders, and budding tech minds at the UMak IT Research Congress! Share
		your research breakthroughs, real-world solutions, or insightful industry perspectives in
		technical deep dives, business-centric presentations, or sector-focused discussions. Spark
		dialogue, inspire collaboration, and propel the future of IT forward. Submit your session
		proposal by [Date] and join the conversation. Visit [Website Link] for key themes, submission
		guidelines, and more. Don't miss this chance to unleash your IT brilliance!
	</p>

	<Button class="rounded-full text-lg h-auto px-7 uppercase">Submit Now</Button>
</section>

<section
	class="px-[5%] py-10 flex items-center gap-10 bg-gradient-to-r from-secondary to-blue-900 relative"
>
	<div>
		<h2 class="uppercase font-metropolis-bold text-4xl lg:text-6xl w-fit text-primary-foreground">
			Key Dates for Submission
		</h2>

		<img src={calendar} alt="Calendar" />
	</div>

	<div>
		<div class="text-primary-foreground">
			<span class="font-metropolis-semibold text-4xl lg:text-6xl uppercase">Feb 8, 2024</span>

			<p>Description here</p>
		</div>

		<span class="w-3 h-full bg-white absolute top-0 right-[10%] translate-x-1/2"></span>

		<span
			class="w-12 h-12 bg-white absolute top-1/4 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full"
		></span>

		<span
			class="w-12 h-12 bg-white absolute top-1/2 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full"
		></span>

		<span
			class="w-12 h-12 bg-white absolute top-3/4 right-[10%] -translate-y-1/2 translate-x-1/2 rounded-full"
		></span>
	</div>
</section>

<section class="px-[5%] py-10 flex items-center flex-col gap-10">
	<EventLogo />

	<h2 class="uppercase font-metropolis-bold text-4xl w-fit">Key Topics</h2>

	<div class="grid grid-cols-3 gap-4 w-full">
		<!-- NOTE: Could be a component -->
		<div class="px-10 py-5 bg-primary">
			<span class="font-metropolis-medium text-xl text-primary-foreground">Machine Learning</span>
		</div>
		<div class="px-10 py-5 bg-primary">
			<span class="font-metropolis-medium text-xl text-primary-foreground">Machine Learning</span>
		</div>
		<div class="px-10 py-5 bg-primary">
			<span class="font-metropolis-medium text-xl text-primary-foreground">Machine Learning</span>
		</div>
	</div>
</section>

<Footer />
