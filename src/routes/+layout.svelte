<script>
  import { page } from "$app/stores";
</script>

{#if $page.routeId}
  <header>
    <a href="/">Home</a>
  </header>
{/if}

<slot />
