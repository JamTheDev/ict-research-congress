<script lang="ts">
	import { ictrc5th, ictrc6th, ictrc7th, ictrc8th, ictrc9th, itechy } from '$lib/assets/images';
	import { Footer, Header } from '$lib/components';
	import LazyImage from '$lib/components/lazy-image.svelte';

	const imageUrls: string[] = [
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349316683_230184223067927_1937562621148392686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH_MgCaZAaEW9PKvefrfBO5rmruLe5vRnmuau4t7m9GeQ01OOwFKQjpDyjLXnC9GmEG1OQqYdjm7EQrFo16nsXC&_nc_ohc=SfleJXujPY4AX9AceFM&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfAxomQVQvFjtYU3SD27g-7B_axwFMOt-ej_NdmWNsW3SQ&oe=6603C78E',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349614131_1100120044117808_8567633375186173740_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHxnHXs73BAzStv2bELNTDmzsffyKkt5sXOx9_IqS3mxTaBFgluaALrXG3ZNAkU_OA_4iTfIgpVJ842KvDLUFN6&_nc_ohc=pIzWUhj5gfEAX_WPcrf&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfCpnJ6nDmWv3P47w7k3aXmxNJI2uvpqk25JgYjUsOgLFw&oe=660337DD',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349503393_1451427275668493_3671841364655891927_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEAbjxr_fcLYKtXKFM2aQgDIpgRWsLJzR4imBFawsnNHjXxKkWvrMGP0rIFBRns8HMuCr-u_tgYFO3OFWcRUAhN&_nc_ohc=F1ePekDzv8IAX-ye3Cg&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfAGgw3DHZxXPKKFV7LI0HtDdr-Q6_EmslipRJwrwwrcGw&oe=6603A58F',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349739966_6128238407244268_2477752913056695337_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5XjUdNjxCEhkOPl_OeqDrt3h46zBsZN63eHjrMGxk3tSdgk8_So-H3VjlXg2Qf9hrtPwWOCROiWZMqdthVBvq&_nc_ohc=8hLCkHPqeRoAX9e0cue&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfCf1IdZz2nOuVzaE6Mq7BdsaXJVFdNIlD_yp7xWr2nk0Q&oe=6602730B',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349065519_559463073014645_4179748716142271992_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4EdwKqugBkJHuLCFEHKU76mURNFVFHXDqZRE0VUUdcMo2d_ja0Aak0QnEFYlJAFC-LTKgP-KWkihEO2RG4TKE&_nc_ohc=nZiH1b9LrEcAX_m6XNN&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfATIpCGc2qBwt-sO9od8K-FKa_pgSN3MWHp0iMmhrdi_Q&oe=6602191C',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349012748_268175819075800_3465792276289001069_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGbVrYqMc_rkjm37S-fJ6pl7_dOqtZq7yXv906q1mrvIPdk58-E_6vmkecSNlwHgu9puGSxjvjxJm1ZPdyejFm&_nc_ohc=1GYEjhdQCAUAX-lDvb8&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfCM9a13n_aHZO0KknKgh0bUXzS122gYt1I9C-XtQ6-WLA&oe=6603E8A2',
		'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/349116598_264566722618339_5966779655152713111_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwXJEpCvjBaHayjx6N-lu_o9QLVX4ij3Cj1AtVfiKPcLag7_5OVYOG5KCj3ph7eIdCLXRa4x4B4wc16IF3Bytq&_nc_ohc=PZtsLL8bWzgAX9GoHmC&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfCDCFHZ6bePFM6orcKRSMV63cTYhtVDqg798H67UY_PRQ&oe=6602CEBB',
		ictrc9th,
		ictrc8th,
		ictrc7th,
		ictrc6th,
		ictrc5th,
		itechy
	];
</script>

<Header title="Gallery" />

<section class="px-[5%] py-20 container">
	<!-- <h1 class="font-metropolis-black text-3xl pt-5 text-center">10th ICT Research Congress</h1> -->
	<!-- <div class="w-full bg-gradient-to-l from-primary to-secondary h-1 my-5"></div> -->

	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
		{#each imageUrls as url, idx (idx)}
			<img src={url} alt="Previous ICT Research Congress" class="rounded-md h-full object-cover" />
		{/each}
	</div>
</section>

<Footer />
