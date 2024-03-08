<script lang="ts">
	import { RegistrationFormHeader } from '$lib/assets/images';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { registerSchema, type RegisterSchema } from '$lib/schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import FormProgress from '$lib/components/forms/form-progress.svelte';

	export let data: SuperValidated<Infer<RegisterSchema>>;

	const form = superForm(data, {
		validators: zodClient(registerSchema)
	});

	const { form: formData, enhance } = form;
</script>

<main class="container py-5">

	<div class="aspect-[1/3] h-72 w-full">
		<img class="w-full h-full rounded-lg" src={RegistrationFormHeader} alt="">
	</div>

	<FormProgress formItems={["Basic Information", "Attendee Type", "Payment Information"]} formProgressIdx={1} />
	<form method="POST" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="flex flex-row *:flex-1 gap-10">
			<Form.Field {form} name="first_name">
				<Form.Control let:attrs>
					<Form.Label>First Name</Form.Label>
					<Input {...attrs} bind:value={$formData.first_name} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="last_name">
				<Form.Control let:attrs>
					<Form.Label>Last Name</Form.Label>
					<Input {...attrs} bind:value={$formData.last_name} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<Form.Button>Submit</Form.Button>
	</form>
</main>
