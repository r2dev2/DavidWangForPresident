<script>
  import { tick } from 'svelte';

  /** @type {HTMLVideoElement | undefined} */
  let video;
  let irrEl, mountIrr = false;
  let mountIs = false, mountThe = false, mountNew = false, mountImm = false;
  let hyakEl;
  let mountOne = false, mountZero1 = false, mountZero2 = false, mountPercent = false;
  let currentTime;

  const irrigation = 9.5;
  const immigration = 12.5;
  const hyakpercent = 14;
  const hyakpercentEnd = hyakpercent + 3;
  const americanValues = 17.5;

  const skipTo = async timestamp => {
    if (!video) return;
    await tick();
    currentTime = timestamp;
  };

  $: if (video && currentTime != null) {
    video.playbackRate = .90;
    if (currentTime < 2) skipTo(2);
  }

  $: if (irrEl) {
    setTimeout(() => (mountIrr = true), 30);
  } else {
    mountIrr = mountIs = mountThe = mountNew = mountImm = false;
  }

  $: if (hyakEl) {
    setTimeout(() => (mountOne = true), 30);
  } else {
    mountOne = mountZero1 = mountZero2 = mountPercent = false;
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="./sources/david_whyrunning.mp4" autoplay on:ended bind:currentTime bind:this={video} />
<div class="text-overlay">
  {#if irrigation < currentTime && currentTime < immigration}
    <span bind:this={irrEl} class="irrigation" class:mounted={mountIrr} on:transitionend={() => (mountIs = true)}>Irrigation</span>
    <span class="is" class:mounted={mountIs} on:transitionend={() => (mountThe = true)}>is</span>
    <span class="the" class:mounted={mountThe} on:transitionend={() => (mountNew = true)}>the</span>
    <span class="new" class:mounted={mountNew} on:transitionend={() => (mountImm = true)}>new</span>
    <span class="immigration" class:mounted={mountImm}>Immigration.</span>
  {/if}
  {#if hyakpercent < currentTime && currentTime < hyakpercentEnd}
    <span bind:this={hyakEl} class="one" class:mounted={mountOne} on:transitionend={() => (mountZero1 = true)}>1</span>
    <span class="zero-1" class:mounted={mountZero1} on:transitionend={() => (mountZero2 = true)}>0</span>
    <span class="zero-2" class:mounted={mountZero2} on:transitionend={() => (mountPercent = true)}>0</span>
    <span class="percent" class:mounted={mountPercent}>%</span>
  {/if}
  {#if americanValues < currentTime}
    <img class="murica-flag" src="./sources/muricanflag.gif" alt="murican flag" />
  {/if}
</div>

<style>
  .text-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100vw;
    height: 100vh;
    font-size: 10rem;
    font-weight: bold;
    pointer-events: none;
  }

  .irrigation, .is, .the, .new, .immigration,
  .one, .zero-1, .zero-2, .percent {
    position: absolute;
    transition: 200ms ease-in;
    opacity: 0;
    right: -1rem;
  }

  .new, .immigration {
    bottom: 2rem;
  }

  .mounted {
    opacity: 1;
    transform: translate(var(--transform-dist, 0), var(--vertical-transform, 0))
  }

  .irrigation {
    --transform-dist: -50rem;
    color: blue;
  }

  .is {
    --transform-dist: -35rem;
    color: white;
  }

  .the {
    --transform-dist: -10rem;
    color: white;
  }

  .new {
    --transform-dist: -75.8rem;
    color: red;
  }

  .immigration {
    --transform-dist: -10rem;
    color: red;
    transition-delay: 1000ms;
  }

  .one, .zero-1, .zero-2, .percent {
    --vertical-transform: -50%;
    top: 50vh;
    color: forestgreen;
  }

  .one {
    --transform-dist: -75rem;
  }

  .zero-1 {
    --transform-dist: -70rem;
  }

  .zero-2 {
    --transform-dist: -64rem;
  }

  .percent {
    --transform-dist: -55rem;
  }
</style>