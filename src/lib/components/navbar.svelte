<script lang="ts">
	import { logo1 } from '$lib/assets/images';
	import { Button, buttonVariants } from '$lib/components/ui/button';
</script>

<nav
	class="fixed top-0 left-0 h-20 z-[500] flex w-full bg-gradient-to-b from-primary px-[5%] py-5 justify-between"
>
	<img src={logo1} alt="ICT Research Congress" />

	<div class="flex items-center gap-10">
		<a href="/about" class="uppercase text-primary-foreground">About</a>
		<a href="/faq" class="uppercase text-primary-foreground">FAQ</a>
		<a href="/mechanics" class="uppercase text-primary-foreground">Mechanics</a>
	</div>

	<a
		href="/call-for-papers"
		class={buttonVariants({
			variant: 'ghost',
			class: 'uppercase bg-black rounded-full text-primary-foreground'
		})}
	>
		Call for Papers
	</a>
</nav>
