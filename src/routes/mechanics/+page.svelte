<script lang="ts">
	import { Header, Footer, EventLogo } from '$lib/components';
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

<section class="shadow-b-section shadow-secondary relative z-10">
	<div class="px-[5%] container py-20 space-y-10">
		<div class="space-y-4">
			<div class="flex justify-between items-center gap-4">
				<div class="flex-1 max-w-[50%] space-y-4">
					<h2
						class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
					>
						Submit Your Paper
					</h2>
					<div class="h-1 bg-gradient-to-r from-primary via-90% w-full" />
					<p class="text-base md:text-lg lg:text-xl lg:leading-8">
						The
						<span class="font-metropolis-semibold">
							11th ICT Research Congress: International Edition 2024,
						</span>
						with the theme
						<span class="font-metropolis-semibold">
							“Elevating Information Technology and Computing Knowledge through Cutting-Edge
							Technology,”
						</span>
						is NOW accepting Research Papers in Computing Research, and Information and Network Security.
					</p>

					<p class="text-base md:text-lg lg:text-xl lg:leading-8">
						Create your full paper with the given
						<a
							href="/documents/2024-11th-ICT-Research-Congress-Template-Guide-for-Authors.docx"
							class="underline text-primary font-metropolis-semibold"
							target="_blank"
							rel="noreferrer"
						>
							research template
						</a>
						and submit it through
						<a
							href="https://easychair.org/my/conference?conf=ictrcie2024"
							class="underline text-primary font-metropolis-semibold"
							target="_blank"
							rel="noreferrer"
						>
							easy chair.
						</a>
					</p>
				</div>

				<div class="perspective relative w-full max-w-[40%] flex-1">
					<EventLogo class="" />
					<div
						class="bg-secondary/50 w-3/4 h-10 absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-[50%] blur-lg"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-blue-50 relative">
	<div class="px-[5%] container py-20 space-y-10">
		<div class="space-y-4"></div>

		<div class="space-y-4">
			<h2
				class="font-metropolis-black bg-gradient-to-t from-black to-gray-200 bg-clip-text text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase"
			>
				Payment
			</h2>

			<div class="space-y-2">
				<ol class="list-decimal pl-4 space-y-2">
					<li>
						<p>
							The payment channel is through GCash or a bank deposit through Lank Bank of the
							Philippines.
						</p>

						<ul class="list-disc pl-4">
							<li>
								<span class="font-metropolis-bold"> Gcash: </span>
								Jernell Sanchez - 0920-972-3134
							</li>
							<li>
								<span class="font-metropolis-bold">
									Land Bank deposit (for participants abroad):
								</span>
								<br />
								<div class="pl-4">
									<p>
										<span class="font-metropolis-medium"> Account Name: </span>
										University of Makati Employees Multi-Purpose Cooperative
									</p>

									<p>
										<span class="font-metropolis-semibold"> Account Number: </span>
										2882 1013 07
									</p>
								</div>
							</li>
						</ul>
					</li>

					<li>
						A
						<span class="font-metropolis-bold"> picture or screenshot </span>
						of the transaction shall be uploaded in the provided registration form for verification.
					</li>

					<li>
						The Registration Committee
						<span class="font-metropolis-bold"> will send a confirmation message </span>
						of the officially registered participant through email.
					</li>
				</ol>

				<p class="text-muted-foreground text-sm">
					<span class="text-destructive">*</span>
					<span class="font-metropolis-bold uppercase"> No refund </span>
					of Research Fee in case of cancellation or non-appearance of the participant on the day of
					the event.
					<br />
					Thus, requests for a refund must be made one (1) week before the closing of registration.
				</p>
			</div>

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
	</div>
</section>

<Footer />
