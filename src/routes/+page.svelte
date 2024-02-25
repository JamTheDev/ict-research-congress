<script lang="ts">
	import { hero, logo1 } from '$lib/assets/images';
	import { Button, buttonVariants } from '$lib/components/ui/button';
</script>

<section
	class={`h-[100svh] py-20 flex justify-center items-center px-[5%] flex-col relative`}
	id="hero"
>
	<!-- <img src={hero} class="absolute top-0 left-0 object-cover w-full h-full z-0" alt="hero" /> -->
	<!-- <div class="absolute top-0 left-0 object-cover w-full h-full bg-primary/50 z-[1]"></div> -->

	<img src={logo1} alt="ICT Research Congress" />

	<div class="px-10 py-5 bg-primary rounded-3xl mt-5">
		<p class="uppercase font-semibold text-5xl text-primary-foreground">
			Reformation of Computing Knowledge:
		</p>
		<p class="uppercase text-4xl text-primary-foreground">
			Crafting Research Through Cutting-edge Technology
		</p>
	</div>

	<a
		href="/call-for-papers"
		class="uppercase rounded-full text-primary-foreground text-2xl h-auto bg-primary px-5 py-2 mt-10"
	>
		Call for Papers
	</a>
</section>

<section class="py-20 px-[5%]">
	<h1 class="text-5xl font-bold text-center">About</h1>

	<div class="flex items-center gap-10">
		<p class="flex-1">Text here</p>
		<div class="flex-1">image here</div>
	</div>
</section>

<section class="py-20 px-[5%]">Previous ICT Research Congress images here.</section>

<section class="flex flex-col items-center py-20 px-[5%]">
	<p>Call to action</p>
	<Button class="w-fit">Register</Button>
</section>

<footer class="py-20 px-[5%]">Footer here.</footer>
