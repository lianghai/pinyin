<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<ul>
  {#each data.syllables as syllable}
    <li>{syllable}</li>
  {/each}
</ul>
