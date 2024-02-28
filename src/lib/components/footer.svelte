<script lang="ts">
	import { Facebook } from '$lib/assets/icons';
	import { logo1, logos } from '$lib/assets/images';
</script>

<footer class="bg-primary text-primary-foreground">
	<div class="py-10 px-[5%]">
		<div class="space-y-5 mb-40">
			<div class="h-20 flex items-center gap-5">
				<img src={logos} alt="Makati, UMak, & CCIS" class="object-cover h-full" />
				<img src={logo1} alt="ICT Research Congress" class="object-cover h-full" />
			</div>

			<div class="space-y-2">
				<p class="uppercase text-base">City Government of Makati - Republic of the Philippines</p>
				<p class="uppercase text-5xl font-marcellus">University of Makati</p>
				<p class="text-base">College of Computing and Information Sciences</p>
			</div>
		</div>

		<div>
			<div class="flex items-center gap-4 mb-2">
				<Facebook class="w-10 h-10" />
				<p class="text-lg lg:text-2xl">/ ICT Research Congress</p>
			</div>

			<a href="mailto:ccis@umak.edu.ph" class="text-lg lg:text-2xl">ccis@umak.edu.ph</a>
		</div>
	</div>

	<div class="py-5 px-[5%] flex gap-5 bg-blue-900">
		<span>ICT Research Congress 2024</span>
		|
		<span>Acknowledgements</span>
	</div>
</footer>
