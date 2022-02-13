<script>
  let showImmigration = false;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="./sources/david_believeinimmigration.mp4" autoplay on:ended={() => (showImmigration = true)} />
{#if showImmigration}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video class="immigration" src="./sources/david_notimmigration.mp4" autoplay on:ended />
{/if}

<style>
  .immigration {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
</style>