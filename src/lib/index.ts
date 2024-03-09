import {
	faCalendarCheck,
	faClock,
	faFileCircleCheck,
	faFileZipper,
	faGlobe
} from '@fortawesome/free-solid-svg-icons';
import type { Collaborator, Route, Speaker, Timeline, WhyAttendData } from './types';
import { CURLogo, IJCSR, UniversitasLogo } from './assets/images';

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
		icon: faHandshake
	},

	{
		title: 'Unique Resource Speakers',
		icon: faMicrophone
	},

	{
		title: 'Innovative Learning',
		icon: faLightbulb
	},

	{
		title: 'Global Reach',
		icon: faGlobe
	},

	{
		title: 'Impactful Researches',
		icon: faUserGear
	},

	{
		title: 'Discover new Tech',
		icon: faWrench
	}
];

export const SPEAKERS: Speaker[] = [
	{
		name: 'Hello World',
		imageUrl: 'https://dudewipes.com/cdn/shop/articles/gigachad.jpg?v=1667928905&width=2048',
		description: 'Insert short description or biography here.'
	},
	{
		name: 'Hello World',
		imageUrl:
			'https://static.wikia.nocookie.net/naruto-onepiece-fairytail/images/5/50/Roronoa_Zoro.png',
		description: 'Insert short description or biography here.'
	},
	{
		name: 'Hello World',
		imageUrl:
			'https://wegotthiscovered.com/wp-content/uploads/2023/09/frieren-beyond-journeys-end.jpg',
		description: 'Insert short description or biography here.'
	},
	{
		name: 'Hello World',
		imageUrl:
			'https://koreajoongangdaily.joins.com/data/photo/2023/04/11/0cc7763c-159d-4540-aa0c-8309c7ac7899.jpg',
		description: 'Insert short description or biography here.'
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
		date: 'Mar. 11, 2024',
		description: 'Start of Paper Submission.',
		icon: faFileCircleCheck
	},

	{
		date: 'Apr. 7, 2024',
		description: 'Deadline of Paper Submission.',
		icon: faFileZipper
	},
	{
		date: 'Apr. 28, 2024',
		description: 'Deadline of Registration.',
		icon: faClock
	},
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
