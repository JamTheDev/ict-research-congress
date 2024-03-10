<script lang="ts">
	import { logo1 } from '$lib/assets/images';
	import { cn } from '$lib/utils';

	export let className: string;

	export { className as class };
</script>

<div
	class={cn(
		'aspect-[3/1] max-w-[25%] px-10 rounded-3xl grid place-items-center w-fit h-fit bg-gradient-to-t from-[#2D5C8B] to-[#004298]',
		className
	)}
>
	<img class="aspect-[3/1]" src={logo1} alt="ICT Research Congress Logo" />
</div>
