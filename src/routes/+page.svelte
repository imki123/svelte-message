<script lang="ts">
	let a = 0;
	let isMouseHolding = false;
	let intervalId: any;

	function startHold(e: MouseEvent & { target: any }) {
		const buttonText = e.target.innerText;
		holdingEvent(buttonText);
	}
	function endHold() {
		clearInterval(intervalId);
	}
	function holdingEvent(buttonText: string, ms = 100) {
		let holdingTime = 11;
		let doubleIntervalId;
		if (buttonText === '+') {
			a++;
		} else if (buttonText === '-') {
			a--;
		} else if (buttonText === 'clear') {
			a = 0;
		}
		intervalId = setInterval(() => {
			holdingTime += 1;
			if (buttonText === '+') {
				a += Math.floor(holdingTime / 10);
			} else if (buttonText === '-') {
				a -= Math.floor(holdingTime / 10);
			}
		}, ms);
	}
</script>

<svelte:head>
	<title>Svelte Counter</title>
	<meta name="description" content="Svelte Counter" />
</svelte:head>

<div class="flex-col w-[300px]">
	<h1
		class="flex justify-center items-center bg-yellow-300 text-center mb-4 h-[40px] font-bold"
	>
		{a}
	</h1>
	<div
		class="flex justify-between gap-4"
		role="none"
		on:mousedown={startHold}
		on:mouseup={endHold}
		on:mouseleave={endHold}
		on:blur={endHold}
	>
		<button class="basicButton grow" type="button">+</button>
		<button class="basicButton grow" type="button">-</button>
		<button class="basicButton grow" type="button">clear</button>
	</div>
</div>

<style lang="postcss">
	.basicButton {
		@apply bg-orange-300 hover:bg-orange-600 active:bg-red-500;
		@apply h-[30px] px-3 text-[20px] font-bold cursor-pointer;
		@apply rounded-[8px] border-0 shadow-sm;
	}
</style>
