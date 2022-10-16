<script>
  import { page } from "$app/stores";
</script>

<header>
  {#if $page.routeId}
    <a href="/">Home</a>
  {:else}
    This is an
    <a href="https://github.com/lianghai/pinyin">open source project</a>
  {/if}
</header>

<slot />
