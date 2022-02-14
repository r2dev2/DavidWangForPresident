<script>
  import { onMount } from 'svelte';
  import { davidWangyAudio } from '../store.js';

  onMount(() => {
    if (1) return;
    davidWangyAudio.addEventListener('canplaythrough', () => davidWangyAudio.play());
    davidWangyAudio.play();
  });
</script>

<video src="./sources/david_car.mp4" autoplay muted on:ended />