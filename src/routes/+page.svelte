<script lang="ts">
	import { computer2, hero, logo1 } from '$lib/assets/images';
	import { CallForPapers, Footer } from '$lib/components';
	import { Button, buttonVariants } from '$lib/components/ui/button';
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
		Call for Papers!
	</a>
</section>

<section class="py-20">
	<div class="flex flex-col justify-center items-center gap-6 pb-16">
		<h1 class="text-5xl font-bold text-center text-gradient-primary">ABOUT THE</h1>

		<div
			class="aspect-[3/1] max-w-[25%] px-10 rounded-3xl grid place-items-center w-fit h-fit bg-gradient-to-t from-[#2D5C8B] to-[#004298]"
		>
			<img class="aspect-[3/1]" src={logo1} alt="ICT Research Congress Logo" />
		</div>
	</div>

	<div class="px-[5%] flex items-center gap-10 w-full bg-gradient-to-r from-[#004298] to-secondary">
		<div class="flex-1 flex flex-col gap-3">
			<p class="text-3xl text-white text-justify">
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
			<img class="relative scale-150 left-48" src={computer2} alt="Blue Computer" />
		</div>
	</div>
</section>

<section class="py-20 px-[5%]">Previous ICT Research Congress images here.</section>

<CallForPapers />

<Footer />
