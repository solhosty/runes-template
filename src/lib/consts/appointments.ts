import type { Appointment } from '$lib/types';

// Keeping static const from clouding other code. 
const basic_appointment: Appointment = {
	name: 'Car Wash',
	description: 'We wash your car',
	price: 20,
	type: 'Basic'
};

export { basic_appointment };
