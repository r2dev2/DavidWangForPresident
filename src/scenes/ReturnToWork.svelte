<script>
  let currentTime = 0;
  let playbackRate = 1;

  $: if (currentTime > 9.5) {
    playbackRate = 10;
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="./sources/david_hardwork.mp4" autoplay bind:playbackRate bind:currentTime on:ended />