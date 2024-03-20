<script lang="ts">
	import { Header, Footer } from '$lib/components';
	import * as Table from '$lib/components/ui/table';
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
		<!-- <h2 -->
		<!-- 	class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase text-center" -->
		<!-- > -->
		<!-- 	Call for Papers -->
		<!-- </h2> -->

		<p>
			The 11th ICT Research Congress: International Edition 2024, with the Theme “Elevating
			Information Technology and Computing Knowledge through Cutting-Edge Technology,” is NOW
			accepting Research Papers in Computing Research, and Information and Network Security.
		</p>
	</div>

	<div class="space-y-4">
		<h2
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
		>
			Submission
		</h2>

		<p>
			Submit your full paper with the given
			<a
				href="/documents/2024-11th-ICT-Research-Congress-Template-Guide-for-Authors.docx"
				class="underline text-primary font-metropolis-semibold"
				target="_blank"
				rel="noreferrer"
			>
				research template
			</a>
			.
		</p>
	</div>

	<div class="space-y-4">
		<h2
			class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
		>
			Payment
		</h2>

		<ol class="list-decimal">
			<li>
				<p>
					The payment channel is through GCash or a bank deposit through Lank Bank of the
					Philippines.
				</p>

				<ul class="list-disc">
					<li>Gcash: Jernell Sanchez - 0920-972-3134</li>
					<li>Land Bank deposit (for participants abroad):</li>
				</ul>
			</li>
		</ol>

		<Table.Root>
			<Table.Caption>
				<span class="text-destructive">*</span>
				Additional
				<span class="font-metropolis-bold"> Php 1,000.00 </span>
				per copy of the proceedings.
			</Table.Caption>
			<Table.Header>
				<Table.Row
					class="[&>th]:text-sm [&>th]:md:text-base [&>th]:font-metropolis-bold [&>th]:text-foreground"
				>
					<Table.Head>Particulars</Table.Head>
					<Table.Head>Foreign Participants</Table.Head>
					<Table.Head>Local Participants</Table.Head>
					<Table.Head>UMak Employees and Students</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row class="[&>td]:text-sm [&>td]:md:text-base [&>td]:text-foreground">
					<Table.Cell>Author-Presenter, and Co-Author/s</Table.Cell>
					<Table.Cell>USD 30.00</Table.Cell>
					<Table.Cell>Php 500.00</Table.Cell>
					<Table.Cell>Free</Table.Cell>
				</Table.Row>

				<Table.Row class="[&>td]:text-sm [&>td]:md:text-base [&>td]:text-foreground">
					<Table.Cell>Poster</Table.Cell>
					<Table.Cell>USD 20.00</Table.Cell>
					<Table.Cell>Php 300.00</Table.Cell>
					<Table.Cell>Free</Table.Cell>
				</Table.Row>

				<Table.Row class="[&>td]:text-sm [&>td]:md:text-base [&>td]:text-foreground">
					<Table.Cell>Audience-Participant only</Table.Cell>
					<Table.Cell>USD 10.00</Table.Cell>
					<Table.Cell>Php 200.00</Table.Cell>
					<Table.Cell>Free</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
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
