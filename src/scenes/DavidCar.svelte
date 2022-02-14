<script>
  import { onMount } from 'svelte';
  import { davidWangyAudio } from '../store.js';
  import VoteWang from './common/VoteWang.svelte';

  let mountVote = false;

  onMount(() => {
    davidWangyAudio.addEventListener('canplaythrough', () => davidWangyAudio.play());
    davidWangyAudio.play();
    setTimeout(() => {
      mountVote = true;
    }, 3000);
  });

  let playbackRate = 0.75;
</script>

<video src="./sources/david_car.mp4" autoplay muted on:ended bind:playbackRate />
<VoteWang {mountVote} />

<style>
  video {
    transform-origin: bottom left;
    transform: scale(1.15);
  }
</style>