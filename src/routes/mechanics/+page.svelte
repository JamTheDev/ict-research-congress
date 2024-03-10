<script lang="ts">
	import { Header, Footer } from '$lib/components';
	import type { Schedule } from '$lib/types';

	const SCHEDULES: Schedule[] = [
		{
			startTime: '8:00 AM',
			endTime: '8:30 AM',
			programs: [
				{
					title: 'Registration'
				}
			]
		},
		{
			startTime: '8:31 AM',
			endTime: '9:00 AM',
			programs: [
				{
					title: 'Opening Program',
					events: [
						'Doxology, Choir',
						'National Anthem, Choir',
						'Makati Hymn AVP',
						'UMak Hymn',
						'Opening Welcome Remarks',
						'Conference Overview',
						'Special Message from the University President'
					]
				}
			]
		},
		{
			startTime: '9:01 AM',
			endTime: '4:00 PM',
			programs: [{ title: 'Poster Presentation' }]
		},
		{
			startTime: '9:01 AM',
			endTime: '9:45 AM',
			programs: [{ title: 'Introduction of Keynote Speaker' }, { title: 'Keynote Speech' }]
		},
		{
			startTime: '9:46 AM',
			endTime: '10:00 AM',
			programs: [{ title: 'Intermission' }]
		},
		{
			startTime: '10:01 AM',
			endTime: '10:30 AM',
			programs: [{ title: 'Introduction of Plenary Speaker 1' }, { title: 'Plenary Speech' }]
		},
		{
			startTime: '10:31 AM',
			endTime: '11:00 AM',
			programs: [{ title: 'Introduction of Plenary Speaker 2' }, { title: 'Plenary Speech' }]
		},
		{
			startTime: '11:01 AM',
			endTime: '11:15 AM',
			programs: [{ title: 'Intermission' }]
		},
		{
			startTime: '11:16 AM',
			endTime: '11:45 AM',
			programs: [{ title: 'Introduction of Plenary Speaker 3' }, { title: 'Plenary Speech' }]
		},
		{
			startTime: '11:46 AM',
			endTime: '1:00 PM',
			programs: [{ title: 'Lunch Break' }]
		},
		{
			startTime: '1:01 PM',
			endTime: '3:00 PM',
			programs: [
				{ title: 'Closing Program' },
				{ title: 'Conference Synopsis' },
				{
					title: 'Awarding of Certificates',
					events: [
						'Research Evaluator',
						'Poster Judges',
						'Moderators',
						'Oral Presenters',
						'Poster Presenters',
						'Best Presenter',
						'Best Paper'
					]
				},
				{ title: 'Closing Remarks' }
			]
		}
	];
</script>

<Header title="Mechanics" />

<section class="px-[5%] container py-20 space-y-10">
	<div class="space-y-4">
		<h2
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
		>
			Registration
		</h2>

		<div>Hello World</div>
	</div>

	<div class="space-y-4">
		<h2
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
		>
			Programme
		</h2>

		<div class="flex flex-col">
			{#each SCHEDULES as schedule, i (i)}
				<div
					class="flex gap-4 items-center w-full p-4 border-b border-b-secondary/50 last:border-none"
				>
					<span class="font-metropolis-bold text-lg text-blue-950 flex-1 text-center"
						>{schedule.startTime} - {schedule.endTime}</span
					>

					<div class="flex flex-col flex-1 gap-4">
						{#each schedule.programs as program, j (j)}
							<div>
								<p class="text-lg font-metropolis-bold">{program.title}</p>
								<ul class="list-disc pl-8 space-y-2">
									{#if program.events}
										{#each program.events as event, k (k)}
											<li>{event}</li>
										{/each}
									{/if}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<Footer />
