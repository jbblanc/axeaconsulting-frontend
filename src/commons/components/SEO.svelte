<script lang="ts">
	export let title = "Axea Consulting - Développement Blockchain + Api + Web, Formation";
	export let description =
		"Axea Consulting vous accompagne dans vos projets de développement Blockchain, Web et Api, avec une stack basée sur svelte, nestjs et ethereum";
	export let url = "https://www.axeaconsulting.com";
	export let image = "https://www.axeaconsulting.com/og/logo-600.png";
	export let imageType = "image/png";
	export let type = "website";
	export let locale = "fr_FR";
	export let localeAlternate = "en_US"; //ex: en_US
	export let twitterAccount = null; //ex: @bobby_12
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	{#if imageType}
		<meta property="og:image:type" content={imageType} />
	{/if}
	<meta property="og:locale" content={locale} />
	{#if localeAlternate}
		<meta property="og:locale:alternate" content={localeAlternate} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	{#if twitterAccount}
		<meta property="twitter:site" content={twitterAccount} />
	{/if}
</svelte:head>
