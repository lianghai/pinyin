<script>
  const examples = [
    "Zhang Yi·lun",
    "Jia Zhao·hui",
    "Tian Xiao·wen",
    "Zhu Ke·hao",
    "Liang Hai",
    "Liu Dong·yuan",
  ];
</script>

<h1>Pinyin <em>How?</em></h1>

<p>
  Pronunciation respelling of Pinyin syllables in
  <a href="locales">your language</a>.
</p>

<p>For example:</p>

<ul>
  {#each examples as example}
    {@const url = "q/" + example.replaceAll(/ |·/g, "-").toLowerCase()}
    <li>
      <b>{example.replaceAll("·", "")}</b>
      →
      <a href={url}>{url}</a>
    </li>
  {/each}
</ul>
