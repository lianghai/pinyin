<h1>Pinyin <em>How?</em></h1>

<p>Pronunciation respelling of Pinyin syllables</p>

<aside>
  <p>I’m just so sick of the culture that it’s considered polite to apologize for “butchering” a foreign name. And on the other hand, I’m frustrated by how people just don’t know how to teach the pronunciation of their name.</p>
  <p>Languages are different. Spellings are messy. There’s no point expecting someone to correctly pronounce a name without learning from the owner, but the owners of unusual names in a society also need to be enabled to efficiently teach others so it’s more comfortable for them to do so.</p>
  <p>
    Best,<br />
    梁海 <a href="/liang-hai">Liang Hai</a>
  </p>
</aside>

<p>For example:</p>

<ul>
  {#each ["Zhang Yi·lun", "Jia Zhao·hui", "Tian Xiao·wen", "Zhu Ke·hao", "Liang Hai", "Liu Dong·yuan"] as example}
    {@const href = example.replaceAll(/ |·/g, "-").toLowerCase()}
    <li>
      <b>{example.replaceAll("·", "")}</b> → <a {href}>{href}</a>
    </li>
  {/each}
</ul>
