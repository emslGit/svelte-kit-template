<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/footer/Footer.svelte";
	import "../app.css";
</script>

<Header />

<h1>Header</h1>

<main class="layout-center">
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex: 1;
		width: 100%;
		max-width: 1024px;
		background-color: white;
	}

	h1 {
		padding: 1em;
	}

	:global .layout-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global .layout-row {
		display: flex;
		flex-direction: row;
	}

	:global .layout-column {
		display: flex;
		flex-direction: column;
	}
</style>
