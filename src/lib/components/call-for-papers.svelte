<script lang="ts">
	import { computer1 } from '$lib/assets/images';
</script>

<section class="flex bg-primary text-primary-foreground px-[5%] relative overflow-hidden">
	<img
		src={computer1}
		alt="Computer"
		class="absolute -right-56 h-[calc(100%_+_1rem)] z-[9] hidden md:block"
	/>

	<div class="w-2/3 flex flex-col py-20 gap-5 relative z-10">
		<h1 class="font-metropolis-bold text-4xl xl:text-6xl 2xl:text-8xl uppercase">
			Call for Papers
		</h1>

		<p class="text-xl xl:text-2xl 2xl:text-3xl font-metropolis-medium">
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
</section>
