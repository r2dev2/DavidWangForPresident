<script>
  import { createEventDispatcher } from 'svelte';
  import TextSlide from './common/TextSlide.svelte';

  let idx = 0;

  const dispatch = createEventDispatcher();

  const endorsements = [
    { name: 'Pramesh Karthikeyan', title: 'FBLA VP Oral and Roleplay', src: './sources/david_prummyendorse.mp4' },
    { name: 'Luke Zhao', title: 'Girlfriend Haver and Top 300 Science Scholar in the nation', src: './sources/david_luke_hotyoungsexy.mp4' },
    { name: 'William Huang', title: 'Creator of Tri-bread Sandwiches and Top 300 Science Scholar in the Nation', src: './sources/david_oozesappeal.mp4' },
    { name: 'Alexander Zhang', title: 'God of Online Science Quizzes and Top 300 Science Scholar in the Nation', src: './sources/david_policiesgood.mp4' },
    { name: 'Kento Nishi', title: 'Crack Addict and Top 300 Science Scholar in the Nation', src: './sources/david_kentoapprob.mp4' },
  ];

  $: if (idx > endorsements.length) {
    dispatch('ended');
  }
</script>


{#if idx == 0}
  <TextSlide on:ended={() => idx++}>
    STEMlords and Entrepreneurs support David Wang!
  </TextSlide>
{:else if idx <= endorsements.length}
  <div class="container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay src={endorsements[idx - 1].src} on:ended={() => idx++} />
    <div class="credentials pos-{1 + (idx - 1) % 4}">
      <h2 class="name">{endorsements[idx - 1].name}</h2>
      <h3 class="title">{endorsements[idx - 1].title}</h3>
    </div>
  </div>
{/if}

<style>
  .container {
    position: relative;
  }

  .credentials {
    --pos: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    padding: 1rem;
    background-color: gold;
    transition: 1s ease-in-out;
  }

  .pos-1, .pos-2 {
    bottom: var(--pos);
  }

  .pos-3, .pos-4 {
    top: var(--pos);
  }

  .pos-1, .pos-4 {
    left: var(--pos);
  }

  .pos-2, .pos-3 {
    right: var(--pos);
  }

  h2, h3 {
    margin: 0;
    color: black;
  }

  video {
    object-fit: fill;
  }
</style>