<script>
	import { GioImg, JamImg } from '$lib/assets/images';
</script>

<main class="pt-28">
	<section class=" bg-gray-100 py-10 h-[500px]">
		<h1 class="font-metropolis-black text-4xl text-center py-5">Core Development Team</h1>
		<div class="container grid grid-cols-2 gap-10">
			<div
				class="border border-blue-900/15 rounded-xl bg-card text-card-foreground h-full flex flex-row shadow-b-2xl shadow-secondary/25 p-6"
			>
				<div class="p-6 w-fit flex justify-center">
					<img class="h-60 object-cover" src={JamImg} alt={`Jam's Picture`} />
				</div>

				<div class="flex flex-col justify-center h-full gap-4">
					<div>
						<h3 class=" text-sm md:text-base lg:text-lg font-marcellus font-bold">
							Jam Emmanuel Villarosa
						</h3>

						<div>
							<span>II - ACSAD | Batch 2022 - 2026</span>
						</div>
					</div>

					<div>
						<span class="font-metropolis-bold">Roles:</span>
						<p class="text-sm"><strong>Project Lead</strong>, Front-End Lead</p>
					</div>

					<!-- <a
							href={collaborator.link}
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class:
									'w-fit gap-2 text-base h-auto rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]'
							})}
						>
							<span class="font-metropolis-medium">Visit</span>

							<Fa icon={faArrowUpRightFromSquare} />
						</a> -->
				</div>
			</div>

			<div
				class="border border-blue-900/15 rounded-xl bg-card text-card-foreground h-full flex flex-row shadow-b-2xl shadow-secondary/25 p-6"
			>
				<div class="p-6 w-fit flex justify-center">
					<img class="h-60 object-cover" src={GioImg} alt={`Jam's Picture`} />
				</div>

				<div class="flex flex-col justify-center h-full gap-4">
					<div>
						<h3 class=" text-sm md:text-base lg:text-lg font-marcellus font-bold">
							Giordan Matthew Nuez
						</h3>

						<div>
							<span>I - BCSAD | Batch 2023 - 2027</span>
						</div>
					</div>

					<div>
						<span class="font-metropolis-bold">Roles:</span>
						<p class="text-sm"><strong>Project Co-Lead</strong>, Back-End Lead</p>
					</div>

					<!-- <a
							href={collaborator.link}
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class:
									'w-fit gap-2 text-base h-auto rounded-full text-primary-foreground duration-300 hover:scale-95 transition-[transform,background-color,color]'
							})}
						>
							<span class="font-metropolis-medium">Visit</span>

							<Fa icon={faArrowUpRightFromSquare} />
						</a> -->
				</div>
			</div>
		</div>
	</section>
</main>
