<script lang="ts">
	import '../app.postcss';
	import Random from '$lib/components/basic-appointment.svelte';
	import { basic_appointment } from '$lib/consts/appointments';
	import Application from '$lib/components/application.svelte';

	let animal_hair = $state<boolean>(false);
	let odor = $state<boolean>(false);
	let cost = $state<number>(basic_appointment.price);
	let derived_cost = $derived(cost + (animal_hair ? 10 : 0) + (odor ? 5 : 0));

	// This will log the value of animal_hair to the console
	// Only on init & update. 
	$inspect('Animal Hair Value: ', animal_hair);
	// Same thing with derived_cost. 
	$inspect(derived_cost);
	// The only thing that won't update is cost since that value does not change.
	$inspect(cost);
</script>

<section class="m-auto items-center max-w-3xl space-y-3 justify-center">
	<h1 class="text-2xl font-bold text-center my-4">Messin w/ Runes</h1>
	<Random {...basic_appointment} />
	<h2 class="text-xl font-semibold text-center my-4">Application</h2>
	<p><strong> The cost of the car wash is: </strong> {derived_cost}</p>
	<Application bind:animal_hair bind:odor />
</section>
