<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/footer/Footer.svelte";
	import "../app.css";
</script>

<Header />

<h1>Heading</h1>

<main>
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

	:global .layout-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 480px) {
	}
</style>
