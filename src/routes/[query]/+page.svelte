<script lang="ts">
  let { data } = $props();
</script>

<h1>Pinyin syllables “{data.syllables.join(" ")}”</h1>

<p>
  … respelled in <a href="/about#{data.locale}"><i>{data.data.name}</i></a>:
</p>

<ul>
  {#each data.syllables as syllable}
    <li>
      <b>{syllable}</b>
      →
      <i>{data.data.syllableToRespelling[syllable] ?? "<unknown syllable>"}</i>
    </li>
  {/each}
</ul>
