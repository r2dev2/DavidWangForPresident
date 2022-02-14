<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { davidWangyAudio } from '../store.js';
  import VoteWang from './common/VoteWang.svelte';

  let showCredits = false;

  const dispatch = createEventDispatcher();

  const sleep = ms => new Promise(res => setTimeout(res, ms));

  onMount(() => {
    setTimeout(async () => {
      const duration = 15000;
      let beg = Date.now();
      for (let volume = 1; volume > 0; volume = 1 - (Date.now() - beg) / duration) {
        await sleep(10);
        davidWangyAudio.volume = volume;
      }
      davidWangyAudio.volume = 0;
    }, 10000);
  });

  const pbRate = 0.75;
  let playbackRate = pbRate;
  $: if (playbackRate != pbRate){
    playbackRate = pbRate;
  }
</script>

<div class="container">
  <video src="./sources/david_flagshot.mp4" autoplay muted bind:playbackRate />
  <video src="./sources/david_flagshot.mp4" autoplay muted bind:playbackRate />
  <video src="./sources/david_flagshot.mp4" autoplay muted bind:playbackRate on:ended={() => (showCredits = true)} />
  <VoteWang mountVote />
  <div class="credits" class:mounted={showCredits} on:transitionend={() => dispatch('ended')}>
    <p>Period: 3</p>
    <p>President: David Wang</p>
    <p>Vice President: Nate Flesner</p>
    <p>Song: "David Wangy" by Dylan Rances</p>
    <p>Editor: Ronak Badhe</p>
    <p>Thank you to everyone who endorsed David!</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .credits {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 30rem);
    text-align: center;
    font-size: 2rem;
    color: red;
    transition: 15s linear;
  }

  .credits.mounted {
    transform: translate(-50%, -55rem);
  }
</style>