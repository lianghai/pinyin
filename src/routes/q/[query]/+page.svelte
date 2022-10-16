<script lang="ts">
  import { locales } from "$lib/data";
  import type { PageData } from "./$types";

  export let data: PageData;

  const localeID = "nl";
  const locale = locales[localeID];
</script>

<h1>Pinyin syllables “{data.syllables.join(" ")}”</h1>

<p>
  … respelled in <a href="../locales#{localeID}"><i>{locale.name}</i></a>:
</p>

<ul>
  {#each data.syllables as syllable}
    <li>
      <b>{syllable}</b>
      →
      <i>{locale.syllableToRespelling[syllable] ?? "<unknown syllable>"}</i>
    </li>
  {/each}
</ul>
