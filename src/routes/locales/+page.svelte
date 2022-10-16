<script>
  import { locales } from "$lib/data";
</script>

<h1>Locales</h1>

<p>Currently available:</p>

<ul>
  {#each Object.entries(locales) as [id, locale]}
    <li {id}>
      <a href={locale.referenceURL}>{locale.name}</a>
    </li>
  {/each}
</ul>
