<script lang="ts">
	import { RegistrationFormHeader } from '$lib/assets/images';
	import * as Form from '$lib/components/ui/form';
	import { Input, type FormInputEvent } from '$lib/components/ui/input';
	import { registerSchema, type RegisterSchema } from '$lib/schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import FormProgress from '$lib/components/forms/form-progress.svelte';
	import { faCheck, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<RegisterSchema>>;

	let loadingToast: string | number;

	const form = superForm(data, {
		validators: zodClient(registerSchema),
		onSubmit: () => {
			loadingToast = toast.loading('Submitting form...', { duration: Number.POSITIVE_INFINITY });
		},
		onResult: ({ result }) => {
			toast.dismiss(loadingToast);

			switch (result.type) {
				case 'success':
					toast.success(result.data?.message);
					break;
				case 'failure':
					toast.error(result.data?.message);
					break;
				case 'error':
					toast.error(result.error);
					break;
				default:
					toast.warning('Unknown action result type.');
					break;
			}
		}
	});

	const { form: formData, enhance } = form;

	function inputImage(e: FormInputEvent<InputEvent>): void {
		$formData.payment_image = e.currentTarget.files?.item(0) as File;
	}
</script>

<div class="bg-white shadow-b-2xl shadow-secondary/25 rounded-xl border border-blue-900/15">
	<!-- <div class="aspect-[1/3] h-72 w-full"> -->
	<img class="rounded-lg object-cover" src={RegistrationFormHeader} alt="" />
	<!-- </div> -->

	<div class="py-5 container">
		<FormProgress
			formItems={['Basic Information', 'Attendee Type', 'Payment Information']}
			formProgressIdx={1}
		/>

		<form method="POST" use:enhance enctype="multipart/form-data">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label class="text-sm md:text-base">Email</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.email}
						class="border-secondary/40 text-sm md:text-base h-auto"
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<div class="flex flex-row *:flex-1 gap-10 mt-5">
				<Form.Field {form} name="first_name">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">First Name</Form.Label>
						<Input
							{...attrs}
							bind:value={$formData.first_name}
							class="border-secondary/40 text-sm md:text-base h-auto"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="last_name">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">Last Name</Form.Label>
						<Input
							{...attrs}
							bind:value={$formData.last_name}
							class="border-secondary/40 text-sm md:text-base h-auto"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="payment_image">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">Payment</Form.Label>
						<Input
							{...attrs}
							on:input={inputImage}
							type="file"
							class="border-secondary/40 text-sm md:text-base h-auto"
						/>
					</Form.Control>
					<Form.Description>Upload a screenshot of your payment.</Form.Description>
					<Form.FieldErrors />
				</Form.Field>
			</div>

			<div class="flex justify-end mt-5">
				<Button
					class="space-x-1 hover:scale-95 transition-all duration-300 ease-in-out border-secondary/50 text-secondary"
					variant="outline"
				>
					<Fa icon={faChevronLeft} />
					<span>Previous</span>
				</Button>

				<Button
					class="bg-gradient-to-r from-primary to-secondary/50 space-x-1 hover:scale-95 hover:bg-right transition-[background-position,transform] duration-300 ease-in-out bg-[length:200%] bg-left"
					on:click={() => toast.loading('Foo')}
				>
					<span>Next</span>
					<Fa icon={faChevronRight} />
				</Button>

				<Form.Button
					type="submit"
					class="bg-gradient-to-r from-primary to-secondary/50 space-x-1 hover:scale-95 hover:bg-right transition-[background-position,transform] duration-300 ease-in-out bg-[length:200%] bg-left"
				>
					<span>Submit</span>
					<Fa icon={faCheck} />
				</Form.Button>
			</div>
		</form>
	</div>
</div>
