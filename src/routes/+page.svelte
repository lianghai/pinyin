<script>
  const examples = {
    "Zhang Yilun": "zhang-yi-lun",
    "Jia Zhaohui": "jia-zhao-hui",
    "Tian Xiaowen": "tian-xiao-wen",
    "Zhu Kehao": "zhu-ke-hao",
    "Liang Hai": "liang-hai",
  };
</script>

<h1>Pinyin <em>How?</em></h1>

<p>Pronunciation respelling of Pinyin syllables in <em>your language</em>.</p>

<p>For example:</p>

<ul>
  {#each Object.entries(examples) as [name, url]}
    <li>
      <b>{name}</b>
      →
      <a href="q/{url}">q/{url}</a>
    </li>
  {/each}
</ul>
