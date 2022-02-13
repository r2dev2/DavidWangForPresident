<script>
  import { onMount } from 'svelte';
  import { davidWangyAudio } from '../store.js';

  onMount(() => {
    // davidWangyAudio.addEventListener('canplaythrough', () => davidWangyAudio.play());
  });
</script>

<video src="./sources/david_car.mp4" autoplay muted on:ended />