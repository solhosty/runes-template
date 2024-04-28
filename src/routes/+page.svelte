<script lang="ts">
	import '../app.postcss';
	import {BasicAppointmentCard, AddedPricing} from '$lib/components';
	import { basic_appointment } from '$lib/consts';

	// This will only update when the value changes.
	let animal_hair = $state<boolean>(false);
	// This will only update when the value changes.
	let odor = $state<boolean>(false);
	// This could be a non-$state variable, but I want to show the difference. 
	// It would better fit a dynamic variable. 
	let cost = $state<number>(basic_appointment.price);
	// Since we need something that is dependent on animal_hair and odor, we will use $derived.
	// This will only update when the values of animal_hair and odor change.
	let derived_cost = $derived(cost + (animal_hair ? 10 : 0) + (odor ? 5 : 0));

	// This will log the value of animal_hair to the console
	// Only on init & update. 
	$inspect('Animal Hair Value: ', animal_hair);
	// Same thing with derived_cost. 
	$inspect('Derived cost: ', derived_cost);
	// The only thing that won't update is cost since that value does not change.
	$inspect('Initial cost: ', cost);
</script>

<section class="m-auto items-center max-w-3xl space-y-3 justify-center">
	<h1 class="text-2xl font-bold text-center my-4">Messin w/ Runes</h1>
	<!-- This will initialize once on load since data remains static -->
	<BasicAppointmentCard {...basic_appointment} />
	<h2 class="text-xl font-semibold text-center my-4">Application Q's</h2>
	<p><strong> The cost of the appointment is: </strong> ${derived_cost}</p>
	<!-- In this method you must bind them, simply passing them in won't work. -->
	<AddedPricing bind:animal_hair bind:odor />
</section>