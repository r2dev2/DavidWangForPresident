<script>
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let showText = false;
  let flyLeft = false;
  let hasEnded = false;

  onMount(() => {
    setTimeout(() => {
      showText = true;
    }, 30);
  });

  const handleTransitionEnd = () => {
    flyLeft = true;
    if (hasEnded) return;
    hasEnded = true;
    setTimeout(() => {
      dispatch('ended');
    }, 1800);
  };
</script>

<div class="container">
  <span class:show={showText} class:fly-left={flyLeft} on:transitionend={handleTransitionEnd}><slot /></span>
</div>

<style>
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
  }

  span {
    text-align: center;
    opacity: 1;
    transition: 300ms ease-in;
  }

  span:not(.show) {
    opacity: 0;
    transform: translateX(100rem);
  }

  span.fly-left {
    transition-delay: 1.5s;
    transform: translateX(-100rem);
  }
</style>