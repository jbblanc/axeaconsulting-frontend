<script lang="ts">
	export let label: string;
	export let style: string = "primary";
  export let isFullSize: boolean = false;
</script>

<button
	class="rounded-lg py-1.5 px-5 text-base"
	class:btn-primary={style === "primary"}
	class:btn-primary-outline={style === "primary-outline"}
	class:btn-secondary={style === "secondary"}
  class:w-full={isFullSize}
	on:click>
	{label}
</button>
