<!-- svelte-ignore a11y-media-has-caption -->
<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import HyakPercent from './common/HyakPercent.svelte';

  let filled = false;
  let hasEnded = false;
  let mountSupport = false, mountDesc = false;

  const dispatch = createEventDispatcher();

  const next = () => {
    if (hasEnded) return;
    hasEnded = true;
    setTimeout(() => {
      dispatch('ended');
    }, 1500);
  };

  onMount(() => {
    setTimeout(() => {
      mountSupport = true;
    }, 1000);
  });
</script>

<div class="container">
  <div class="support-counter" class:mounted={mountSupport}>
    <h2>Wang Support Statistics</h2>
    <HyakPercent {filled} --size="20rem" on:transitionend={() => (mountDesc = true)} />
    <div class="desc-container">
      <p class:mounted={mountDesc} on:transitionend={next}>100% of people support David Wang.</p>
    </div>
  </div>
  <video src="./sources/david_benniesupport.mp4" autoplay on:ended={() => (filled = true)} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .support-counter {
    display: flex;
    flex-direction: column;
    width: 0;
    padding: 0;
    transform-origin: left;
    transform: scaleX(0);
    transition: 700ms ease-out;
  }

  .support-counter.mounted {
    transform: none;
    padding: 1rem;
    width: auto;
  }

  h2, p {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
  }

  .desc-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
  }

  p {
    font-size: 2rem;
    width: 15.5rem;
    margin: 0;
    padding: 1rem;
    opacity: 0;
    transform: translateX(100rem);
    transition: 300ms ease-out;
  }

  p.mounted {
    opacity: 1;
    transform: none;
  }

  .support-counter :global(.chart) {
    margin: 0 auto 0 auto;
  }

  video {
    object-fit: fill;
  }
</style>