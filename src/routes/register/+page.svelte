<script lang="ts">
	import { RegisterForm } from '$lib/components/forms';

	export let data;
</script>

<div class="px-[5%] py-20">
	<RegisterForm data={data.form} />
</div>
