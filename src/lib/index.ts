import {
	faCalendarCheck,
	faClock,
	faFileCircleCheck,
	faFileZipper
} from '@fortawesome/free-solid-svg-icons';
import type { Route, Timeline } from './types';

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
