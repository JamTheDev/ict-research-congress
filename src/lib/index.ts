import {
	faCalendarCheck,
	faClock,
	faFileCircleCheck,
	faFileZipper,
	faGlobe
} from '@fortawesome/free-solid-svg-icons';
import type { Collaborator, Route, Speaker, Timeline, WhyAttendData } from './types';
import {
	CURLogo,
	IJCSR,
	UniversitasLogo,
	francis,
	monaTaman,
	muthmainnah,
	princeEdike
} from './assets/images';

import {
	faHandshake,
	faLightbulb,
	faMicrophone,
	faUserGear,
	faWrench
} from '@fortawesome/free-solid-svg-icons';

export const WHY_ATTEND: Array<WhyAttendData> = [
	{
		title: 'Networking Opportunities',
		icon: faHandshake,
		description: "Network with like-minded people"
	},

	{
		title: 'Unique Resource Speakers',
		icon: faMicrophone,
		description: "Learn from Unique Speakers"

	},

	{
		title: 'Innovative Learning',
		icon: faLightbulb,
		description: "Innovative and Impactful Learning",
	},

	{
		title: 'Global Reach',
		icon: faGlobe,
		description: "International Reach of Research",

	},

	{
		title: 'Impactful Researches',
		icon: faUserGear,
		description: "Impactful Studies for CS/IT",

	},

	{
		title: 'Discover new Tech',
		icon: faWrench,
		description: "Learn new Technologies",

	}
];

export const SPEAKERS: Speaker[] = [
	{
		name: 'Dr. Mona Taman',
		imageUrl: monaTaman,
		description:
			'Deputy Chairman of the Future Leader International Group Professor of Educational Technology and E-learning, Egypt',
		email: 'monataman32@gmail.com'
	},
	{
		name: 'Prince C. Edike, Phd.',
		imageUrl: princeEdike,
		description: 'Geoscientist and Environmental Management Expert',
		email: 'britprinx@gmail.com'
	},
	{
		name: 'Dr. Muthmainnah',
		imageUrl: muthmainnah,
		description:
			'Assistant Professor at Universitas Al Asyariah Mandar in West Sulawesi, Indonesia',
		email: 'muthmainnahunasman@gmail.com'
	},
	{
		name: 'Dr. Francis F. Balahadia',
		imageUrl: francis,
		description:
			'Dean, College of Computer Studies on Laguna State Polytechnic University - Siniloan Campus',
		email: 'francis.balahadia@lspu.edu.ph'
	}
];

export const COLLABORATORS: Collaborator[] = [
	{
		icon: CURLogo,
		text: 'UMak Center for University Research',
		link: 'https://umak.edu.ph/centers/research'
	},

	{
		icon: UniversitasLogo,
		text: 'UMak Universitas',
		link: 'https://journals.umak.edu.ph'
	},
	{
		icon: IJCSR,
		text: 'International Journal of Computing Sciences Research',
		link: 'https://stepacademic.net/ijcsr'
	}
];

export const TIMELINE: Timeline[] = [
	{
		date: 'Mar. 13, 2024',
		description: 'Start of Paper Submission.',
		icon: faFileCircleCheck
	},

	{
		date: 'Apr. 27, 2024',
		description: 'Deadline of Paper Submission.',
		// icon: faFileZipper,
		icon: faClock
	},
	// {
	// 	date: 'Apr. 28, 2024',
	// 	description: 'Deadline of Registration.',
	// 	icon: faClock
	// },
	{
		date: 'May 10, 2024',
		description: '11th ICT Research Congress.',
		icon: faCalendarCheck
	}
];

export const ROUTES: Route[] = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/mechanics',
		name: 'Mechanics'
	},
	{
		path: '/gallery',
		name: 'Gallery'
	},
	{
		path: '/about',
		name: 'About'
	}
];
