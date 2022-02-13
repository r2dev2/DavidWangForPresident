<script>
  import { createEventDispatcher } from 'svelte';
  import TextSlide from './common/TextSlide.svelte';

  const dispatch = createEventDispatcher();
  const amountGendorse = 8;

  let idx = 0;

  $: if (idx > amountGendorse) {
    dispatch('ended');
  }
</script>

{#if idx == 0}
  <TextSlide on:ended={() => idx++}>
    Normal Students support David Wang!
  </TextSlide>
{:else if idx <= amountGendorse}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video src="./sources/david_gendorse{idx}.mp4" autoplay on:ended={() => idx++} />
{/if}