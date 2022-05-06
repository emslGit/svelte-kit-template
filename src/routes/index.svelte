<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let whatToDo: string;
	let state: string = "loaded";

	function fetchData(): void {
		state = "loading";
		fetch("https://www.boredapi.com/api/activity")
			.then((response) => response.json())
			.then((data) => (whatToDo = data.activity))
			.catch((e) => console.log(e))
			.finally(() => (state = "loaded"));
	}
</script>

<svelte:head>
	<title>Bored?</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="layout-center">
	{#if state == "loading"}
		<h1>Loading...</h1>
	{:else}
		<h1>{whatToDo || "Press this button if you're bored"}.</h1>
		<button on:click={() => fetchData()}>Press</button>
	{/if}
</section>

<style>
	section {
		flex-direction: column;
		flex: 1;
		padding: 2em;
	}

	button {
		padding: 0.5em 1em;
	}
</style>
