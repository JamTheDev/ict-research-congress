import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Timeline = {
	date: string;
	description: string;
	icon: IconDefinition;
};

export type Collaborator = {
	icon: string;
	text: string;
	customClass?: string;
	link: string;
};

export type Speaker = {
	name: string;
	email?: string;
	description?: string;
	imageUrl?: string;
	country?: string;
};

export type Route = {
	path: string;
	name: string;
};

export type WhyAttendData = {
	title: string;
	icon: IconDefinition;
	description: string;
};

export type Schedule = {
	startTime: string;
	endTime: string;
	programs: Program[];
};

export type Program = {
	title: string;
	events?: string[];
};
