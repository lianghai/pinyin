<script lang="ts">
  import { locales } from "$lib/data";
  import type { PageData } from "./$types";

  export let data: PageData;

  const locale = locales["nl"];
</script>

<h1>Pinyin syllables “{data.syllables.join(" ")}”</h1>

<p>… respelled in <i>{locale.name}</i>:</p>

<ul>
  {#each data.syllables as syllable}
    <li>
      <b>{syllable}</b>
      →
      <i>{locale.syllableToRespelling[syllable] ?? "<unknown syllable>"}</i>
    </li>
  {/each}
</ul>
