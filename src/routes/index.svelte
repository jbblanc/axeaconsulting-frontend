<script lang="ts">
	import Seo from "$components/SEO.svelte";
	import Logo from "$components/Logo.svelte";
</script>

<Seo />
<div class="flex items-center justify-center h-screen w-full bg-brand-blue-light">
	<div class="flex-row">
		<div class="flex justify-center"><div class="w-2/5"><Logo /></div></div>
		<div class="grid md:grid-cols-2 mt-20 mb-12 text-sm uppercase text-gray-500">
			<div
				class="grid items-center justify-items-center md:justify-items-end md:pr-4">
				<div>développement</div>
				<div>web + api + blockchain</div>
			</div>
			<div
				class="grid items-center justify-items-center mt-4 md:justify-items-start md:pl-4">
				formations
			</div>
		</div>
		<div class="flex justify-center">
			<a
				class="btn-primary rounded-lg py-1.5 px-5 text-base"
				href="mailto:contact@axeaconsulting.com">En savoir plus</a>
		</div>
	</div>
</div>
