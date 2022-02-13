<script>
  import { cubicOut } from 'svelte/easing';

  export let filled = false;

  let fillAngle = 0;
  let duration = 2000;

  const sleep = ms => new Promise(res => setTimeout(res, ms));

  const fillChart = async () => {
    let beg = Date.now();
    for (fillAngle = 0; fillAngle < 358; fillAngle = cubicOut((Date.now() - beg) / duration) * 360) {
      await sleep(10);
    }
    fillAngle = 360;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border: 1px solid black;
    border-radius: 50%;
    background: conic-gradient(forestgreen var(--fill-angle), yellow 0deg);
  }
</style>