<!-- svelte-ignore a11y-media-has-caption -->
<script>
  import HyakPercent from './common/HyakPercent.svelte';

  let filled = false;
</script>

<div class="container">
  <div class="support-counter">
    <HyakPercent {filled} />
  </div>
  <video src="./sources/david_benniesupport.mp4" autoplay on:ended={() => (filled = true)} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .support-counter {
    flex-shrink: 0;
  }

  video {
    object-fit: fill;
  }
</style>