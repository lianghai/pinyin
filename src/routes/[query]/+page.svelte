<script lang="ts">
  let { data } = $props();
</script>

<h1>Pinyin syllables: {data.syllables.join(" ")}</h1>

<ul>
  {#each data.syllables as syllable}
    <li>
      <b>{syllable}</b>
      →
      <i>{data.syllableToRespelling[syllable] ?? "<unknown syllable>"}</i>
    </li>
  {/each}
</ul>
