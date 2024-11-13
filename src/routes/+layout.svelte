<script>
  import { page } from "$app/stores";

  let { children } = $props();
</script>

<header>
  {#if $page.route.id != "/"}
    <a href="/">Home</a>
  {:else}
    See also the <a href="https://github.com/lianghai/pinyin">source repo</a>
  {/if}
</header>

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

    header {
      padding-top: 0.5rem;
    }

    h1 {
      margin-top: 0;
    }

    a {
      color: initial;
    }
    a:hover {
      text-decoration: none;
    }
  }
</style>
