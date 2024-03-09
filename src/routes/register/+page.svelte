<script lang="ts">
	import { RegisterForm } from '$lib/components/forms';

	export let data;
</script>

<div class="px-[5%] py-40 bg-blue-50 h-full">
	<RegisterForm data={data.form} />
</div>
