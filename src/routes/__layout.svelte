<script lang="ts">
	import "../app.css";

	import { media } from "$stores/media";

	let windowWidth: number;
	//let siteReady: boolean = false;

	//import { VITE_ENV } from "env";

	$: if (windowWidth) media.up(windowWidth);

	/*setTimeout(() => {
		siteReady = true;
	}, 360);*/

</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.png" crossorigin="use-credentials" />
</svelte:head>

<slot />

