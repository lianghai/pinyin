<script>
  import { page } from "$app/stores";
</script>

<header>
  {#if $page.route.id}
    <a href="/">Home</a>
  {:else}
    This is an
    <a href="https://github.com/lianghai/pinyin">open source project</a>
  {/if}
</header>

<slot />

<style>
  :global {
    *,
    ::before,
    ::after {
      box-sizing: border-box;
    }

    html {
      font-size: 20px;
      line-height: 1.5;
      font-family: ui-sans-serif, sans-serif;
      /* “Prevent adjustments of font size after orientation changes in iOS” (https://github.com/sindresorhus/modern-normalize/blob/0c3cb3a7dcf0fb4242a8736127a1d717b704c360/modern-normalize.css#L26): */
      -webkit-text-size-adjust: 100%;
    }

    body {
      width: 36rem;
      /* Leave margins on narrow screens: */
      max-width: 90%;
      margin: 0 auto;
    }

    header {
      text-align: center;
      font-size: smaller;
      font-weight: 500;
      border-bottom: 2px solid black;
      padding: 1rem 0;
    }

    a {
      color: initial;
    }
    a:hover {
      background-color: gold;
    }
  }
</style>
