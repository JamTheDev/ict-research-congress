import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Timeline = {
	date: string;
	description: string;
	icon: IconDefinition;
};

export type Route = {
	path: string;
	name: string;
};
