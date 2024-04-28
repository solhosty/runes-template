<script lang="ts">
	import type { Appointment } from '$lib/types';

	let { name, description, price, type }: Appointment = $props();
</script>

<div class="w-72 m-auto h-full bg-gray-100 rounded-lg shadow-lg p-8">
	<h2 class="text-xl font-bold text-brand-primary">{name}</h2>
	<p class="text-gray-600">{description}</p>
	<p class="text-gray-600">${price}</p>
	<p class="text-gray-600">{type}</p>
</div>
