<script>
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let count = 3;
  
  onMount(() => {
    const interval = setInterval(() => {
      count--;
      if (count < 0) {
        clearInterval(interval);
        dispatch('ended');
      }
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="counter-container">
  <span class="count">{count}</span>
</div>

<style>
  .counter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .count {
    font-size: 20rem;
  }
</style>