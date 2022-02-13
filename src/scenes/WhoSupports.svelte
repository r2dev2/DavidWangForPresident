<script>
  import TextSlide from './common/TextSlide.svelte';

  let survey = false;
</script>

{#if !survey}
  <TextSlide on:ended={() => (survey = true)}>
    Who supports David Wang?
  </TextSlide>
{:else}
  <TextSlide on:ended>
    We conducted a survey.
  </TextSlide>
{/if}