<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { status, Status } from "../app.store";
	import { fetchData } from "../api/dummyApi";
	let data: Object | null;

	async function handleClick(): Promise<void> {
		await fetchData().then((_data: Object | null) => {
			data = _data;
		});
	}
</script>

<svelte:head>
	<title>Title</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="layout-center">
	{#if $status == Status.INITIAL}
		<h2>Content.</h2>
	{:else if $status == Status.LOADING}
		<h2 class="loading">Loading...</h2>
	{:else if $status == Status.SUCCESS}
		<h2>{data || "No data found"}.</h2>
	{:else}
		<h2 class="failed">Something went wrong.</h2>
	{/if}

	{#if $status == Status.INITIAL || $status == Status.SUCCESS}
		<button on:click={() => handleClick()}>Press</button>
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
