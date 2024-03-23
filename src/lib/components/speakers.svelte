<script lang="ts">
	import { SPEAKERS } from '$lib';
</script>

<section class="bg-blue-50">
	<div class="py-20 px-[5%] container flex flex-col justify-center items-center gap-20">
		<h1
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase"
		>
			Speakers
		</h1>

		<div class="flex flex-row flex-wrap justify-center w-full gap-5">
			{#each SPEAKERS as speaker, idx (idx)}
				<div
					class="border border-blue-900/15 rounded-xl bg-card text-card-foreground flex-1 min-w-[16rem] flex flex-col shadow-b-2xl shadow-secondary/25"
				>
					<div class="h-2/3">
						<img
							class="h-full w-full object-cover bg-blue-900/10 rounded-t-xl"
							alt={speaker.name}
							src={speaker.imageUrl}
							loading="lazy"
						/>
					</div>

					<div class="h-1/3 p-6 space-y-2">
						<h3 class="text-sm md:text-base lg:text-lg font-metropolis-semibold">
							{speaker.name}
						</h3>

						<p class="text-muted-foreground text-xs md:text-sm lg:text-base line-clamp-6">
							{speaker.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
