<h1>Pinyin <em>How?</em></h1>

<p>
  Pronunciation respelling of Pinyin syllables in
  <a href="about">your language</a>.
</p>

<p>For example:</p>

<ul>
  {#each ["Zhang Yi·lun", "Jia Zhao·hui", "Tian Xiao·wen", "Zhu Ke·hao", "Liang Hai", "Liu Dong·yuan"] as example}
    {@const href = example.replaceAll(/ |·/g, "-").toLowerCase()}
    <li>
      <b>{example.replaceAll("·", "")}</b> → <a {href}>{href}</a>
    </li>
  {/each}
</ul>
