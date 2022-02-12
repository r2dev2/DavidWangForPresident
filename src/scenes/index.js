import Beginning from './Beginning.svelte';
import DavidCar from './DavidCar.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof DavidCar}} */
export const scenes = [
  { name: 'beginning', component: Beginning },
  { name: 'david_car', component: DavidCar },
  { name: 'end', component: End }
];