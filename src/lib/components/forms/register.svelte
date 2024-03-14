<script lang="ts">
	import { RegistrationFormHeader } from '$lib/assets/images';
	import * as Form from '$lib/components/ui/form';
	import { Input, type FormInputEvent } from '$lib/components/ui/input';
	import { registerSchema, type RegisterSchema } from '$lib/schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import FormProgress from '$lib/components/forms/form-progress.svelte';
	import { faCheck, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { Label } from '../ui/label';
	import type { Author } from '$lib/types/register';
	import { Separator } from '../ui/separator';

	export let data: SuperValidated<Infer<RegisterSchema>>;

	let loadingToast: string | number;
	let rightsToPrivacy: boolean = false;
	let consent: boolean = false;

	const form = superForm(data, {
		dataType: 'json',
		validators: zodClient(registerSchema),
		onSubmit: () => {
			loadingToast = toast.loading('Submitting form...', { duration: Number.POSITIVE_INFINITY });
		},
		resetForm: false,
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

	const { form: formData, enhance, constraints, errors } = form;

	function inputImage(e: FormInputEvent<InputEvent>): void {
		$formData.receipt_image = e.currentTarget.files?.item(0) as File;
	}

	const author: Author = {
		first_name: '',
		last_name: ''
	};

	const authors: Author[] = Array(6).fill({ ...author });

	$formData.authors = authors;
</script>

<div
	class="bg-white shadow-b-2xl shadow-secondary/25 rounded-xl border border-blue-900/15 max-w-5xl mx-auto"
>
	<!-- <div class="aspect-[1/3] h-72 w-full"> -->
	<img class="rounded-lg object-cover" src={RegistrationFormHeader} alt="" />
	<!-- </div> -->

	<div class="py-5 container">
		<!-- <FormProgress -->
		<!-- 	formItems={['Basic Information', 'Attendee Type', 'Payment Information']} -->
		<!-- 	formProgressIdx={1} -->
		<!-- /> -->

		<form method="POST" use:enhance enctype="multipart/form-data" class="space-y-10">
			<div class="space-y-4">
				{#each $formData.authors as author, i (i)}
					{@const error = $errors?.authors?.[i]}

					<div>
						<Label class="text-sm md:text-base">Author {i + 1}</Label>

						<div class="flex gap-2">
							<div class="space-y-2 flex-1">
								<Input
									{...$constraints.authors?.first_name}
									bind:value={author.first_name}
									class="border-secondary/40 text-sm md:text-base h-auto"
								/>

								<p class="text-[0.8rem] text-muted-foreground">
									First Name
									<span class="text-destructive">*</span>
								</p>

								{#if error?.first_name}
									<p class="text-[0.8rem] font-medium text-destructive">
										{error?.first_name}
									</p>
								{/if}
							</div>

							<div class="space-y-2 flex-1">
								<Input
									{...$constraints.authors?.middle_name}
									bind:value={author.middle_name}
									class="border-secondary/40 text-sm md:text-base h-auto"
								/>

								<p class="text-[0.8rem] text-muted-foreground">Middle Name</p>

								{#if error?.middle_name}
									<p class="text-[0.8rem] font-medium text-destructive">
										{error?.middle_name}
									</p>
								{/if}
							</div>

							<div class="space-y-2 flex-1">
								<Input
									{...$constraints.authors?.last_name}
									bind:value={author.last_name}
									class="border-secondary/40 text-sm md:text-base h-auto"
								/>

								<p class="text-[0.8rem] text-muted-foreground">
									Last Name

									<span class="text-destructive">*</span>
								</p>

								{#if error?.last_name}
									<p class="text-[0.8rem] font-medium text-destructive">
										{error?.last_name}
									</p>
								{/if}
							</div>
						</div>
					</div>
				{/each}

				<div class="space-y-2">
					<Label class="text-sm md:text-base">Presenter</Label>

					<div class="flex gap-2">
						<div class="space-y-2 flex-1">
							<Input
								{...$constraints.presenter?.first_name}
								bind:value={$formData.presenter.first_name}
								class="border-secondary/40 text-sm md:text-base h-auto"
							/>

							<p class="text-[0.8rem] text-muted-foreground">
								First Name
								<span class="text-destructive">*</span>
							</p>

							{#if $errors.presenter?.first_name}
								<p class="text-[0.8rem] font-medium text-destructive">
									{$errors.presenter?.first_name}
								</p>
							{/if}
						</div>

						<div class="space-y-2 flex-1">
							<Input
								{...$constraints.presenter?.middle_name}
								bind:value={$formData.presenter.middle_name}
								class="border-secondary/40 text-sm md:text-base h-auto"
							/>

							<p class="text-[0.8rem] text-muted-foreground">Middle Name</p>

							{#if $errors.presenter?.middle_name}
								<p class="text-[0.8rem] font-medium text-destructive">
									{$errors.presenter?.middle_name}
								</p>
							{/if}
						</div>

						<div class="space-y-2 flex-1">
							<Input
								{...$constraints.presenter?.last_name}
								bind:value={$formData.presenter.last_name}
								class="border-secondary/40 text-sm md:text-base h-auto"
							/>

							<p class="text-[0.8rem] text-muted-foreground">
								Last Name
								<span class="text-destructive">*</span>
							</p>

							{#if $errors.presenter?.last_name}
								<p class="text-[0.8rem] font-medium text-destructive">
									{$errors.presenter?.last_name}
								</p>
							{/if}
						</div>
					</div>

					<div class="flex gap-2">
						<div class="space-y-2 flex-1">
							<Input
								{...$constraints.presenter?.email}
								bind:value={$formData.presenter.email}
								class="border-secondary/40 text-sm md:text-base h-auto"
							/>

							<p class="text-[0.8rem] text-muted-foreground">
								Email
								<span class="text-destructive">*</span>
							</p>

							{#if $errors.presenter?.email}
								<p class="text-[0.8rem] font-medium text-destructive">
									{$errors.presenter?.email}
								</p>
							{/if}
						</div>

						<div class="space-y-2 flex-1">
							<Input
								{...$constraints.presenter?.contact_number}
								type="tel"
								bind:value={$formData.presenter.contact_number}
								class="border-secondary/40 text-sm md:text-base h-auto"
							/>

							<p class="text-[0.8rem] text-muted-foreground">
								Contact Number
								<span class="text-destructive">*</span>
							</p>

							{#if $errors.presenter?.contact_number}
								<p class="text-[0.8rem] font-medium text-destructive">
									{$errors.presenter?.contact_number}
								</p>
							{/if}
						</div>
					</div>
				</div>

				<Separator />

				<Form.Field {form} name="paper_title">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">
							Title of Research Paper

							<span class="text-destructive">*</span>
						</Form.Label>
						<Input
							{...attrs}
							class="border-secondary/40 text-sm md:text-base h-auto"
							bind:value={$formData.paper_title}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="affiliation">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">
							Affiliation / School

							<span class="text-destructive">*</span>
						</Form.Label>
						<Input
							{...attrs}
							class="border-secondary/40 text-sm md:text-base h-auto"
							bind:value={$formData.affiliation}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="payment_mode">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">
							Mode of Payment

							<span class="text-destructive">*</span>
						</Form.Label>
						<Input
							{...attrs}
							class="border-secondary/40 text-sm md:text-base h-auto"
							bind:value={$formData.payment_mode}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="receipt_image">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">
							Proof of Receipt

							<span class="text-destructive">*</span>
						</Form.Label>
						<Input
							{...attrs}
							on:input={inputImage}
							type="file"
							class="border-secondary/40 text-sm md:text-base h-auto"
						/>
					</Form.Control>
					<Form.Description>Upload a screenshot of your payment receipt.</Form.Description>
					<Form.FieldErrors />
				</Form.Field>

				<Separator />

				<div class="space-y-2">
					<Label class="text-sm md:text-base font-metropolis-bold">Rights to Privacy</Label>

					<p>
						As provided by the Act, you may object to the processing of your personal data, request
						to access your personal information, and/or have it corrected, erased, or blocked on
						reasonable grounds. For the details of your rights as a data subject, you can get in
						touch with our Data Privacy Officer at

						<a
							href="mailto:dprms@umak.edu.ph"
							class="underline text-primary font-metropolis-semibold">dprms@umak.edu.ph</a
						>

						or at National Privacy Commission at

						<a
							href="https://privacy.gov.ph/"
							class="underline text-primary font-metropolis-semibold"
							target="_blank"
							rel="noreferrer">https://privacy.gov.ph/</a
						>. For corrections or changes in the information you will submit, please contact

						<a
							href="mailto:ictintlresearchcongress@gmail.com"
							class="underline text-primary font-metropolis-semibold"
							>ictintlresearchcongress@gmail.com</a
						>.

						<br />
						<br />

						DPRMS-UMak & CCIS-UMak will consider your request and reserves the right to deal with
						the matter in accordance with the law.
					</p>

					<br />

					<button
						on:click={() => (rightsToPrivacy = !rightsToPrivacy)}
						class="flex gap-2 items-center"
						type="button"
					>
						<div
							class={`w-5 h-5 rounded-full border-2 border-primary ${rightsToPrivacy ? 'bg-primary' : 'bg-none'}`}
						></div>

						<span class="text-sm md:text-base"> Agree </span>
					</button>
				</div>

				<Separator />

				<div class="space-y-2">
					<Label class="text-sm md:text-base font-metropolis-bold">Consent</Label>

					<p>
						Please confirm regarding the processing of your data in relation to the ICT Research
						Congress.
					</p>

					<br />

					<button
						on:click={() => (consent = !consent)}
						class="flex gap-2 items-center"
						type="button"
					>
						<div
							class={`w-5 h-5 rounded-full border-2 border-primary ${consent ? 'bg-primary' : 'bg-none'}`}
						></div>

						<p class="text-sm md:text-base">
							Yes, I give my consent to CCIS-UMak to gather and process my personal information and
							documents for this event.
						</p>
					</button>
				</div>
			</div>

			<div class="flex justify-end mt-20">
				<!-- <Button -->
				<!-- 	class="space-x-1 hover:scale-95 transition-all duration-300 ease-in-out border-secondary/50 text-secondary" -->
				<!-- 	variant="outline" -->
				<!-- > -->
				<!-- 	<Fa icon={faChevronLeft} /> -->
				<!-- 	<span>Previous</span> -->
				<!-- </Button> -->
				<!---->
				<!-- <Button -->
				<!-- 	class="bg-gradient-to-r from-primary to-secondary/50 space-x-1 hover:scale-95 hover:bg-right transition-[background-position,transform] duration-300 ease-in-out bg-[length:200%] bg-left" -->
				<!-- 	on:click={() => toast.loading('Foo')} -->
				<!-- > -->
				<!-- 	<span>Next</span> -->
				<!-- 	<Fa icon={faChevronRight} /> -->
				<!-- </Button> -->

				<Form.Button
					type="submit"
					class="bg-gradient-to-r from-primary to-secondary/50 space-x-1 hover:scale-95 hover:bg-right transition-[background-position,transform] duration-300 ease-in-out bg-[length:200%] bg-left"
					disabled={!rightsToPrivacy || !consent}
				>
					<span>Submit</span>
					<Fa icon={faCheck} />
				</Form.Button>
			</div>
		</form>
	</div>
</div>
