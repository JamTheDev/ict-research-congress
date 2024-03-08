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
}

export type Route = {
	path: string;
	name: string;
};

export interface WhyAttendData {
    title: string
    icon: IconDefinition
}