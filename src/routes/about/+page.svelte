<script>
  import { localeToData } from "$lib/data";
</script>

<h1>About</h1>

<p>Currently available <a href="https://en.wikipedia.org/wiki/Locale_(computer_software)">locales</a>:</p>

<ul>
  {#each Object.entries(localeToData) as [id, { referenceURL, name }]}
    <li {id}>
      <a href={referenceURL}>{name}</a>
    </li>
  {/each}
</ul>
