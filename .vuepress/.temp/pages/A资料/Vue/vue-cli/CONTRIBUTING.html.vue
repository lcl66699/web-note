<template><div><h1 id="vue-cli-contributing-guide" tabindex="-1"><a class="header-anchor" href="#vue-cli-contributing-guide" aria-hidden="true">#</a> vue-cli contributing guide</h1>
<h2 id="issue-reporting-guidelines" tabindex="-1"><a class="header-anchor" href="#issue-reporting-guidelines" aria-hidden="true">#</a> Issue Reporting Guidelines</h2>
<ul>
<li>
<p>First identify where error is coming from. If it's occuring while running <code v-pre>vue</code> command then issue is indeed on
<code v-pre>vue-cli</code> so please report it here. If error appears when you run one of <code v-pre>npm run</code> scripts, problem originates
from a template you're using, <a href="https://github.com/vuejs-templates" target="_blank" rel="noopener noreferrer">maybe one of the official ones<ExternalLinkIcon/></a>. If so, please
open an issue on a template repository.</p>
</li>
<li>
<p>Try to search for your issue, it may have already been answered or even fixed in the development branch.</p>
</li>
</ul>
<h2 id="development-setup" tabindex="-1"><a class="header-anchor" href="#development-setup" aria-hidden="true">#</a> Development Setup</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
bin/vue init <span class="token operator">&lt;</span>path-to-github-repo OR path-to-local-dir<span class="token operator">></span>
bin/vue list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
