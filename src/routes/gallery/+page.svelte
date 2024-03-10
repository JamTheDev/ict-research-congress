<script lang="ts">
	import { ictrc5th, ictrc6th, ictrc7th, ictrc8th, ictrc9th, itechy } from '$lib/assets/images';
	import { Footer, Header } from '$lib/components';

	const GALLERY = [
		{
			image: itechy
		},
		{
			image: ictrc5th
		},
		{
			image: ictrc6th
		},
		{
			image: ictrc7th
		},
		{
			image: ictrc8th
		},
		{
			image: ictrc9th
		}
	];
</script>

<Header title="Gallery" />

<section class="px-[5%] container py-20">
	<div class="grid grid-cols-3 gap-4">
		{#each GALLERY as { image }, idx (idx)}
			<div class="w-full rounded-xl overflow-hidden">
				<img src={image} alt="" class="object-cover w-full h-full" />
			</div>
		{/each}
	</div>
</section>

<Footer />
