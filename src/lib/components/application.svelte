<script lang="ts">
	// Showing type here to show correlation with prop. 
	type Options = { 
		animal_hair: boolean, 
		odor: boolean 
	};
	// This is for exporting the component props and binding to the parent. 
	// I am setting a fallback value of false for both animal_hair and odor.
	// Notice how I am assigning types to my props here. 
	let { animal_hair = $bindable<boolean>(false), odor = $bindable<boolean>(false) }: Options = $props();
</script>

<div class="flex flex-col max-w-xs space-y-2">
	<label for="animal_hair" class="font-medium text-md"> Is there Animal Hair </label>
	<select id="animal_hair" bind:value={animal_hair}>
		<option value={false}> No </option>
		<option value={true}> Yes </option>
	</select>
	<label for="odor" class="font-medium text-md"> Is there an Odor </label>
	<select id="odor" bind:value={odor}>
		<option value={false}> No </option>
		<option value={true}> Yes </option>
	</select>
</div>
