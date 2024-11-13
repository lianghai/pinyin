<script>
  import { localeToData } from "$lib/data";
</script>

<h1>About</h1>

<p>Currently available locales:</p>

<ul>
  {#each Object.entries(localeToData) as [id, { referenceURL, name }]}
    <li {id}>
      <a href={referenceURL}>{name}</a>
    </li>
  {/each}
</ul>
