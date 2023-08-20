<script>
	import '../app.css';
	import github_mark from '$lib/images/github-mark.png';
	import { base } from '$app/paths';
</script>

<header class="flex justify-end gap-5 text-lg font-bold">
	<a href="{base}/">home</a>
	<a href="{base}/counter">counter</a>
</header>

<slot />

<div class="fixed bottom-4 right-4">
	<a href="https://github.com/imki123/svelte-message" target="_blank"
		><img alt="imki123_github" src={github_mark} class="w-6 h-6" /></a
	>
</div>
