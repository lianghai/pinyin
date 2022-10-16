<script>
  const examples = {
    "Zhang Yilun": "zhang-yi-lun",
    "Jia Zhaohui": "jia-zhao-hui",
    "Tian Xiaowen": "tian-xiao-wen",
    "Zhu Kehao": "zhu-ke-hao",
    "Liang Hai": "liang-hai",
  };
</script>

<h1>Q for query</h1>

<p>For example:</p>

<ul>
  {#each Object.entries(examples) as [name, url]}
    <li>{name}: <a href="q/{url}">q/{url}</a></li>
  {/each}
</ul>
