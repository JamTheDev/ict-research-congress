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

		<div
			class="h-[40rem] flex w-full bg-background border border-blue-900/15 rounded-xl shadow-b-2xl shadow-secondary/25"
		>
			<div class="w-1/2 h-full">
				<img
					class="object-cover bg-blue-900/10 rounded-l-xl h-full w-full"
					alt={SPEAKERS[0].name}
					src={SPEAKERS[0].imageUrl}
					loading="lazy"
				/>
			</div>

			<div class="p-6">
				<h3 class="text-lg md:text-xl lg:text-2xl font-metropolis-bold">
					{SPEAKERS[0].name}
				</h3>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-10">
			{#each SPEAKERS as speaker, idx (idx)}
				{#if idx > 0}
					<div
						class="border border-blue-900/15 rounded-xl bg-card text-card-foreground h-full flex flex-col shadow-b-2xl shadow-secondary/25 w-full"
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
							<h3 class="text-center text-sm md:text-base lg:text-lg font-metropolis-medium">
								{speaker.name}
							</h3>

							<p class="text-muted-foreground text-xs md:text-sm lg:text-base">
								{speaker.description}
							</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
