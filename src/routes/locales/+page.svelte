<script>
  import { locales } from "$lib/data";
</script>

<h1>Locales</h1>

<p>Currently available:</p>

<ul>
  {#each Object.values(locales) as locale}
    <li>
      <a href={locale.referenceURL}>{locale.name}</a>
    </li>
  {/each}
</ul>
