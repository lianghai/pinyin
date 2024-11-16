<script>
  import { page } from "$app/stores";

  let { children } = $props();
</script>

<svelte:head>
  <title>Pinyin How?</title>
</svelte:head>

<p>
  {#if $page.route.id != "/"}
    <a href="/">Home</a>
  {:else}
    See also the <a href="https://github.com/lianghai/pinyin">source repo</a>
  {/if}
</p>

{@render children()}

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
      -webkit-text-size-adjust: 100%; /* "Prevent adjustments of font size after orientation changes in iOS" (https://github.com/sindresorhus/modern-normalize/blob/0c3cb3a7dcf0fb4242a8736127a1d717b704c360/modern-normalize.css#L26): */
    }

    body {
      width: 36rem;
      /* Leave margins on narrow screens: */
      max-width: 90%;
      margin: 0 auto;
    }

    h1 {
      margin: 1rem 0;
    }

    aside {
      overflow-y: hidden;
      margin: 1em 0;
      background-color: whitesmoke;
      padding: 0 1em;
    }

    a {
      color: initial;
    }
    a:hover {
      text-decoration: none;
    }
  }
</style>
