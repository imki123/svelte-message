<script lang="ts">
	let bool = true;
	let fruits = ['apple', 'banana', 'carrot'];
	let bool2 = true;
	async function getName(bool2: boolean) {
		return new Promise<string>((resolve, reject) => {
			setTimeout(async () => {
				if (bool2) {
					resolve('hoodie');
				} else {
					reject('error');
				}
			}, 1000);
		});
	}
</script>

<h1 class="text-lg font-bold">Logic Blocks</h1>
<div class="p-5 m-5 border">
	<h1 class="text-lg font-bold">#if Blocks</h1>
	<div class="commentBox">Uses {`{#if bool} ... {:else} ... {/if}`}</div>
	<div class="p-5 m-5 border">
		<div class="font-bold">bool: {bool}</div>
		{#if bool}
			<div>if bool is true</div>
		{:else}
			<div>else</div>
		{/if}
		<button
			class="bg-blue-400 rounded text-white"
			on:click={() => {
				bool = !bool;
			}}>토글버튼</button
		>
	</div>
</div>

<div class="p-5 m-5 border">
	<h1 class="text-lg font-bold">#each Blocks</h1>
	<div class="commentBox">
		Uses {`{#each list as item, index (key)} ... {:else} empty... {/each}`}
	</div>
	<div class="p-5 m-5 border">
		<ul class="list-disc">
			{#each fruits as fruit}
				<li>{fruit}</li>
			{:else}
				<div>empty list is []. it should be iterable</div>
			{/each}
		</ul>
		<button
			class="bg-blue-400 rounded text-white"
			on:click={() => {
				if (fruits && fruits.length > 1) {
					fruits = [];
				} else {
					fruits = ['apple', 'banana', 'carrot'];
				}
			}}>토글버튼</button
		>
	</div>
</div>

<div class="p-5 m-5 border">
	<h1 class="text-lg font-bold">#await Blocks</h1>
	<div class="commentBox">
		Uses {`{#await expression} pending... {:then value} value... {:catch error} error... {/await}`}
	</div>
	<div class="p-5 m-5 border">
		<div>
			getName:
			<span>
				{#await getName(bool2)}
					pending...
				{:then value}
					{value}
				{:catch error}
					{error}
				{/await}
			</span>
		</div>
		<button
			class="bg-blue-400 rounded text-white"
			on:click={async () => {
				window.location.reload();
			}}>새로고침</button
		>
	</div>
</div>

<style lang="postcss">
	.commentBox {
		@apply py-1 px-2 bg-gray-200;
	}
</style>
