<script lang="ts">
	import { Header, Footer, EventLogo } from '$lib/components';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Table from '$lib/components/ui/table';
	import type { Schedule } from '$lib/types';
	import { faCheckToSlot, faDownload } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

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

<section class="relative z-10 shadow-b-section shadow-secondary">
	<div class="container space-y-10 px-[5%] py-20">
		<div class="space-y-4">
			<div class="flex items-center justify-between gap-4">
				<div class="max-w-[50%] flex-1 space-y-4">
					<h2
						class="bg-gradient-to-t from-black to-gray-200 bg-clip-text font-metropolis-black text-xl uppercase md:text-2xl lg:text-4xl xl:text-5xl"
					>
						Submit Your Paper
					</h2>
					<div class="h-1 w-full bg-gradient-to-r from-primary via-90%" />
					<p class="text-base md:text-lg md:leading-8">
						The
						<span
							class="bg-primary bg-gradient-to-r from-primary to-secondary/50 bg-clip-text font-metropolis-bold text-transparent"
						>
							11th ICT Research Congress: International Edition 2024,
						</span>
						with the theme
						<span
							class="bg-primary bg-gradient-to-r from-primary to-secondary/50 bg-clip-text font-metropolis-bold text-transparent"
						>
							“Elevating Information Technology and Computing Knowledge through Cutting-Edge
							Technology,”
						</span>
						is now accepting Research Papers in Computing Research, and Information and Network Security.
					</p>

					<div class="flex gap-2">
						<a
							href="/documents/2024-11th-ICT-Research-Congress-Template-Guide-for-Authors.docx"
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								class:
									'flex h-auto items-center  gap-2 rounded-full  px-7 text-base uppercase md:text-lg'
							})}
						>
							<Fa icon={faDownload} />
							Template
						</a>

						<a
							href="https://easychair.org/my/conference?conf=ictrcie2024"
							target="_blank"
							rel="noreferrer"
							class={buttonVariants({
								variant: 'ghost',
								class:
									'flex h-auto gap-2  rounded-full  bg-black  px-7 text-base uppercase text-primary-foreground md:text-lg'
							})}
						>
							<Fa icon={faCheckToSlot} />
							Submit Paper
						</a>
					</div>
				</div>

				<div class="perspective relative w-full max-w-[40%] flex-1">
					<EventLogo class="" />
					<div
						class="absolute -bottom-10 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-[50%] bg-secondary/50 blur-lg"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="relative bg-blue-50">
	<div class="container space-y-10 px-[5%] py-20">
		<!-- <div class="space-y-4"></div> -->

		<div class="mb-20">
			<div class="mb-4 space-y-2">
				<h2
					class=" bg-gradient-to-t from-black to-gray-200 bg-clip-text font-metropolis-black text-xl uppercase md:text-2xl lg:text-4xl xl:text-5xl"
				>
					Payment
				</h2>

				<p
					class="relative pl-4 text-xs text-muted-foreground before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-primary/75 before:content-[''] md:text-sm"
				>
					<span class="font-metropolis-bold"> No refund </span>
					of Research Fee in case of cancellation or non-appearance of the participant on the day of
					the event.
					<br />
					Thus, requests for a refund must be made
					<span class="font-metropolis-bold"> one (1) week </span>
					before the closing of registration.
				</p>
			</div>

			<div class="flex flex-col gap-10 md:gap-20">
				<div class="flex max-w-5xl gap-2">
					<div class="flex rounded-lg border bg-card shadow-b-2xl shadow-secondary/50">
						<div class="relative flex w-full gap-4 p-6 text-sm md:text-base">
							<span
								class=" flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-center font-metropolis-black text-base text-background md:h-10 md:w-10 md:p-6 md:text-xl"
							>
								1
							</span>

							<div class="space-y-4">
								<h3 class="font-metropolis-black uppercase lg:text-2xl">Send Payment</h3>

								<p>
									The payment channel is through
									<span class="font-metropolis-bold"> GCash </span>
									or a bank deposit through
									<span class="font-metropolis-bold"> Lank Bank of the Philippines </span>
									for participants abroad.
								</p>

								<Separator />

								<div class="space-y-4">
									<div class="space-y-2">
										<h4
											class="w-fit bg-primary bg-gradient-to-r from-primary to-secondary/50 bg-clip-text font-metropolis-bold text-sm text-transparent md:text-base lg:text-lg"
										>
											GCash
										</h4>

										<div class="grid grid-cols-4 gap-x-5 gap-y-1">
											<div class="contents">
												<div class="col-span-1">
													<span class="font-metropolis-semibold"> Name </span>
												</div>

												<div class="col-span-3">
													<span>Jernell Sanchez</span>
												</div>
											</div>

											<div class="contents">
												<div class="col-span-1">
													<span class="font-metropolis-semibold"> Number </span>
												</div>

												<div class="col-span-3">
													<span>0920-972-3134</span>
												</div>
											</div>
										</div>
									</div>

									<div class="space-y-2">
										<h4
											class="w-fit bg-primary bg-gradient-to-r from-primary to-secondary/50 bg-clip-text font-metropolis-bold text-sm text-transparent md:text-base lg:text-lg"
										>
											Land Bank
										</h4>
										<div class="grid grid-cols-4 gap-x-5 gap-y-1">
											<div class="col-span-1">
												<span class="font-metropolis-semibold"> Name </span>
											</div>

											<div class="col-span-3">
												<span>University of Makati Employees Multi-Purpose Cooperative</span>
											</div>

											<div class="col-span-1">
												<span class="font-metropolis-semibold"> Number </span>
											</div>

											<div class="col-span-3">
												<span>2882 1013 07</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="flex w-full justify-end">
					<div
						class="flex w-fit max-w-5xl rounded-lg border bg-card shadow-b-2xl shadow-secondary/50"
					>
						<div class="relative flex w-full gap-4 p-6 text-sm md:text-base">
							<span
								class=" flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-center font-metropolis-black text-base text-background md:h-10 md:w-10 md:p-6 md:text-xl"
							>
								2
							</span>

							<div class="space-y-4">
								<h3 class="font-metropolis-black uppercase lg:text-2xl">Send Receipt</h3>

								<p>
									A
									<span class="font-metropolis-bold"> picture or screenshot </span>
									of the transaction shall be uploaded in the provided registration form for verification.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div
					class="flex w-fit max-w-5xl rounded-lg border bg-card shadow-b-2xl shadow-secondary/50"
				>
					<div class="relative flex w-full gap-4 p-6 text-sm md:text-base">
						<span
							class=" flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-center font-metropolis-black text-base text-background md:h-10 md:w-10 md:p-6 md:text-xl"
						>
							3
						</span>

						<div class="space-y-4">
							<h3 class="font-metropolis-black uppercase lg:text-2xl">Wait for Confirmation</h3>

							<p>
								The Registration Committee will send a
								<span class="font-metropolis-bold"> confirmation message </span>
								of the officially registered participant
								<span class="font-metropolis-bold"> through email. </span>
							</p>
						</div>
					</div>
				</div>

				<div class="space-y-4">
					<div class="space-y-2">
						<h3 class="font-metropolis-black uppercase lg:text-2xl">Pricing</h3>

						<p
							class="relative pl-4 text-xs text-muted-foreground before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-primary/75 before:content-[''] md:text-sm"
						>
							Additional
							<span class="font-metropolis-bold"> Php 1,000.00 </span>
							per copy of the proceedings.
						</p>
					</div>

					<div class="rounded-lg border shadow-b-2xl shadow-secondary/50">
						<Table.Root class="rounded-lg bg-background">
							<!-- <Table.Caption> -->
							<!-- 	<span class="text-destructive">*</span> -->
							<!-- 	Additional -->
							<!-- 	<span class="font-metropolis-bold"> Php 1,000.00 </span> -->
							<!-- 	per copy of the proceedings. -->
							<!-- </Table.Caption> -->

							<Table.Header>
								<Table.Row
									class=" [&>th]:p-6 [&>th]:font-metropolis-bold [&>th]:text-sm [&>th]:text-foreground [&>th]:md:text-base"
								>
									<Table.Head>Particulars</Table.Head>
									<Table.Head>Foreign Participants</Table.Head>
									<Table.Head>Local Participants</Table.Head>
									<Table.Head>UMak Employees and Students</Table.Head>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								<Table.Row
									class="[&>td]:p-6 [&>td]:text-sm [&>td]:text-foreground [&>td]:md:text-base"
								>
									<Table.Cell>Author-Presenter, and Co-Author/s</Table.Cell>
									<Table.Cell>USD 30.00</Table.Cell>
									<Table.Cell>Php 500.00</Table.Cell>
									<Table.Cell>Free</Table.Cell>
								</Table.Row>

								<Table.Row
									class="[&>td]:p-6 [&>td]:text-sm [&>td]:text-foreground [&>td]:md:text-base"
								>
									<Table.Cell>Poster</Table.Cell>
									<Table.Cell>USD 20.00</Table.Cell>
									<Table.Cell>Php 300.00</Table.Cell>
									<Table.Cell>Free</Table.Cell>
								</Table.Row>

								<Table.Row
									class="[&>td]:p-6 [&>td]:text-sm [&>td]:text-foreground [&>td]:md:text-base"
								>
									<Table.Cell>Audience-Participant only</Table.Cell>
									<Table.Cell>USD 10.00</Table.Cell>
									<Table.Cell>Php 200.00</Table.Cell>
									<Table.Cell>Free</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h2
				class="bg-gradient-to-t from-black to-gray-200 bg-clip-text font-metropolis-black text-xl uppercase md:text-2xl lg:text-4xl xl:text-5xl"
			>
				Programme
			</h2>

			<div
				class="flex flex-col divide-y rounded-lg border bg-background shadow-b-2xl shadow-secondary/50"
			>
				{#each SCHEDULES as schedule, i (i)}
					<div class="flex w-full items-center gap-4 p-6">
						<span class="flex-1 text-center font-metropolis-bold text-lg"
							>{schedule.startTime} - {schedule.endTime}</span
						>

						<div class="flex flex-1 flex-col gap-4">
							{#each schedule.programs as program, j (j)}
								<div>
									<p class="font-metropolis-bold text-lg">{program.title}</p>
									<ul class="list-disc space-y-2 pl-8">
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
