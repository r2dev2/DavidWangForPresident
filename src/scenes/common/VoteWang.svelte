<script>
  export let mountVote = false;
</script>

<h2 class="vote" class:mounted={mountVote}><span class="red">Vote for</span> <span class="blue">David W</span><span class="red">ang!</span></h2>

<style>
  .vote {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(50rem);
    font-size: 4rem;
    transition: 400ms ease-out;
    background-image: url(../sources/muricanflag.gif);
  }

  .vote.mounted {
    transform: translateX(-50%);
  }

  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>