<script>
  let playbackRate = 1;
  let currentTime;

  $: if (currentTime > 9) {
    playbackRate = 5;
  }
  $: if (currentTime > 18) {
    playbackRate = 1;
  }
  $: if (currentTime > 19) {
    playbackRate = 5;
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="./sources/david_cleanupmess.mp4" autoplay bind:currentTime bind:playbackRate on:ended />