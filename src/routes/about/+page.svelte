<script lang="ts">
	import { ccisLogo, umakLogo } from '$lib/assets/images';
	import { EventLogo, Footer, Header } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
</script>

<Header title="About" />

<section class="px-[5%] py-10 flex items-center flex-col gap-10">
	<EventLogo />

	<p class="text-base lg:text-2xl font-metropolis-medium">
		The
		<span class="font-metropolis-bold">University of Makati (UMak) - ICT Research Congress </span>
		is an annual event of the University of Makati UMak College of Computing and Information Sciences
		(UMak CCIS) where researchers, students, and industry professionals collide to exchange ideas, showcase
		discoveries, and shape the future of technology.
		<br />
		<br />
		Now in it's 11th year, it seeks out innovative and educative researches in the CS/ IT / CPE / IS
		field.
	</p>

	<Button class="rounded-full text-lg h-auto px-7 uppercase">Submit Now</Button>
</section>

<section class="px-[5%] py-10 flex flex-col items-center gap-10">
	<div class="px-10 py-5 bg-primary text-primary-foreground rounded-2xl w-fit">
		<h2 class="uppercase font-metropolis-bold text-4xl w-fit">About the University and College</h2>
	</div>

	<div
		class="px-16 py-10 bg-gradient-to-r from-secondary to-blue-900 flex gap-10 items-center text-primary-foreground w-full rounded-3xl"
	>
		<img src={umakLogo} alt="UMak logo" />

		<div class="space-y-10">
			<h3 class="text-6xl font-marcellus uppercase">University of Makati</h3>

			<p class="font-metropolis-medium text-base md:text-lg lg:text-2xl">
				The University of Makati is the University of the City of Makati. We serve the children of
				less priviledged citizens of the City so they can actively participate in and competitively
				partake of the City's economic progress. We must never forget who we are, whom we are for,
				and what we have to do for those for whom we are.
			</p>
		</div>
	</div>
</section>

<section class="px-[5%] py-10 flex flex-col items-center gap-10">
	<div class="flex">
		<img src={ccisLogo} alt="CCIS logo" />
		<div class="px-16 py-10 bg-primary rounded-3xl">
			<h2 class="uppercase font-metropolis-bold text-4xl w-fit text-primary-foreground">
				About the College of Computing and Information Sciences
			</h2>
		</div>
	</div>

	<div class="space-y-10">
		<p class="font-metropolis-medium text-2xl">
			The College of Computing and Information Sciences (CCIS) is the leading college in ICT
			education programs of the university by providing competitive, relevant and functional IT
			Curriculum responsive to the needs of the industrial and business organizations. The college
			has of the following functions:
		</p>

		<ul class="list-disc space-y-4 text-xl [&>li>p]:font-metropolis-medium pl-10">
			<li>
				<p>Develop, implement and revise IT Education Programs.</p>
			</li>
			<li>
				<p>
					Subject the IT Education Programs to government recognition and accreditation by
					authorized agencies.
				</p>
			</li>
			<li>
				<p>
					Provide creativity, production and development programs to faculty members and students.
					Engage in Information Technology / Computer Science research.
				</p>
			</li>
			<li>
				<p>
					Promote Information and Communications Technology literacy training through community
					extension services.
				</p>
			</li>
			<li>
				<p>Establish linkages and networking to the industry and other government agencies.</p>
			</li>
			<li>
				<p>Provide administrative services to the stakeholders.</p>
			</li>
			<li>
				<p>Engage in other relevant and sound curricular and extra-curricular endeavors.</p>
			</li>
		</ul>
	</div>
</section>

<Footer />
