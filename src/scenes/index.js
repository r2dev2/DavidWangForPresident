import Beginning from './Beginning.svelte';
import WhyRun from './WhyRun.svelte';
import WhatBelieveInAgain from './WhatBelieveInAgain.svelte';
import IrrigationNotImmigration from './IrrigationNotImmigration.svelte';
import WhoSupports from './WhoSupports.svelte';
import BennieApprove from './BennieApprove.svelte';
import StudentSupport from './StudentSupport.svelte';
import DavidCar from './DavidCar.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof DavidCar}} */
export const scenes = [
  // { name: 'beginning', component: Beginning },
  // { name: 'why_run', component: WhyRun },
  // { name: 'what_believe_in_again', component: WhatBelieveInAgain },
  // { name: 'irrigation_not_immigration', component: IrrigationNotImmigration },
  // { name: 'who_supports', component: WhoSupports },
  // { name: 'bennie_supports', component: BennieApprove },
  { name: 'student_support', component: StudentSupport },
  { name: 'david_car', component: DavidCar },
  { name: 'end', component: End }
];