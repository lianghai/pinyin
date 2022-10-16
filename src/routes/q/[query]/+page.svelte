<script lang="ts">
  import { syllableToRespelling } from "./data";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Pinyin syllables “{data.syllables.join(" ")}”</h1>

<p>Respelled in <i>Nederlands</i> (Dutch):</p>

<ul>
  {#each data.syllables as syllable}
    <li>
      {syllable}:
      <i>{syllableToRespelling[syllable] ?? "<unknown syllable>"}</i>
    </li>
  {/each}
</ul>
