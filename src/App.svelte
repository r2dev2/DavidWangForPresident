<script>
  import { scenes } from './scenes';

  let sceneIndex = 0;

  $: scene = scenes[sceneIndex];
  $: console.log('[PLAYBACK] scene', scene.name);
</script>

<svelte:head>
  <title>David Wang for President</title>
</svelte:head>

<main>
  <svelte:component this={scene.component} on:ended={() => sceneIndex++} />
</main>

<style>
  :global(body) {
    padding: 0;
    overflow: hidden;
  }

  :global(video:not(.custom-size)) {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>
