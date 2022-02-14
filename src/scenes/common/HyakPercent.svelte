<script>
  import { createEventDispatcher } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  export let filled = false;

  let fillAngle = 0;
  let duration = 2000;

  const sleep = ms => new Promise(res => setTimeout(res, ms));
  const dispatch = createEventDispatcher();

  const fillChart = async () => {
    let beg = Date.now();
    for (fillAngle = 0; fillAngle < 358; fillAngle = cubicOut((Date.now() - beg) / duration) * 360) {
      await sleep(10);
    }
    fillAngle = 360;
    dispatch('transitionend');
  };

  $: if (filled) {
    fillChart();
  }

  $: style = `--fill-angle: ${fillAngle}deg`;
</script>

<div class="chart" {style}>
  {fillAngle == 0 ? 'Unknown %' : `${Math.round(fillAngle * 100 / 360)}%`}
</div>

<style>
  .chart {
    font-size: calc(var(--size, 10rem) / 6);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size, 10rem);
    height: var(--size, 10rem);
    border: 3px solid black;
    border-radius: 50%;
    background: conic-gradient(forestgreen var(--fill-angle), yellow 0deg);
  }
</style>