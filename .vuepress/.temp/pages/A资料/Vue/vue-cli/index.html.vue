<template><div><h1 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli <a href="https://circleci.com/gh/vuejs/vue-cli" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/circleci/project/vuejs/vue-cli/master.svg" alt="Build Status"><ExternalLinkIcon/></a> <a href="https://www.npmjs.com/package/vue-cli" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue-cli.svg" alt="npm package"><ExternalLinkIcon/></a></h1>
<p><strong>⚠️ <code v-pre>vue-cli</code> is deprecated, see the <a href="https://cli.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">new documentation<ExternalLinkIcon/></a>.</strong></p>
<p>A simple CLI for scaffolding Vue.js projects.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<p>Prerequisites: <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> (&gt;=6.x, 8.x preferred), npm version 3+ and <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g vue-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue init <span class="token operator">&lt;</span>template-name<span class="token operator">></span> <span class="token operator">&lt;</span>project-name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue init webpack my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command pulls the template from <a href="https://github.com/vuejs-templates/webpack" target="_blank" rel="noopener noreferrer">vuejs-templates/webpack<ExternalLinkIcon/></a>, prompts for some information, and generates the project at <code v-pre>./my-project/</code>.</p>
<h3 id="vue-build" tabindex="-1"><a class="header-anchor" href="#vue-build" aria-hidden="true">#</a> vue build</h3>
<p>Use vue-cli as a zero-configuration development tool for your Vue apps and component, check out the <RouterLink to="/docs/build.html">docs</RouterLink>.</p>
<h3 id="official-templates" tabindex="-1"><a class="header-anchor" href="#official-templates" aria-hidden="true">#</a> Official Templates</h3>
<p>The purpose of official Vue project templates are to provide opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible. However, these templates are un-opinionated in terms of how you structure your app code and what libraries you use in addition to Vue.js.</p>
<p>All official project templates are repos in the <a href="https://github.com/vuejs-templates" target="_blank" rel="noopener noreferrer">vuejs-templates organization<ExternalLinkIcon/></a>. When a new template is added to the organization, you will be able to run <code v-pre>vue init &lt;template-name&gt; &lt;project-name&gt;</code> to use that template. You can also run <code v-pre>vue list</code> to see all available official templates.</p>
<p>Current available templates include:</p>
<ul>
<li>
<p><a href="https://github.com/vuejs-templates/webpack" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a> - A full-featured Webpack + vue-loader setup with hot reload, linting, testing &amp; css extraction.</p>
</li>
<li>
<p><a href="https://github.com/vuejs-templates/webpack-simple" target="_blank" rel="noopener noreferrer">webpack-simple<ExternalLinkIcon/></a> - A simple Webpack + vue-loader setup for quick prototyping.</p>
</li>
<li>
<p><a href="https://github.com/vuejs-templates/browserify" target="_blank" rel="noopener noreferrer">browserify<ExternalLinkIcon/></a> - A full-featured Browserify + vueify setup with hot-reload, linting &amp; unit testing.</p>
</li>
<li>
<p><a href="https://github.com/vuejs-templates/browserify-simple" target="_blank" rel="noopener noreferrer">browserify-simple<ExternalLinkIcon/></a> - A simple Browserify + vueify setup for quick prototyping.</p>
</li>
<li>
<p><a href="https://github.com/vuejs-templates/pwa" target="_blank" rel="noopener noreferrer">pwa<ExternalLinkIcon/></a> - PWA template for vue-cli based on the webpack template</p>
</li>
<li>
<p><a href="https://github.com/vuejs-templates/simple" target="_blank" rel="noopener noreferrer">simple<ExternalLinkIcon/></a> - The simplest possible Vue setup in a single HTML file</p>
</li>
</ul>
<h3 id="custom-templates" tabindex="-1"><a class="header-anchor" href="#custom-templates" aria-hidden="true">#</a> Custom Templates</h3>
<p>It's unlikely to make everyone happy with the official templates. You can simply fork an official template and then use it via <code v-pre>vue-cli</code> with:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue init username/repo my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where <code v-pre>username/repo</code> is the GitHub repo shorthand for your fork.</p>
<p>The shorthand repo notation is passed to <a href="https://github.com/flipxfx/download-git-repo" target="_blank" rel="noopener noreferrer">download-git-repo<ExternalLinkIcon/></a> so you can also use things like <code v-pre>bitbucket:username/repo</code> for a Bitbucket repo and <code v-pre>username/repo#branch</code> for tags or branches.</p>
<p>If you would like to download from a private repository use the <code v-pre>--clone</code> flag and the cli will use <code v-pre>git clone</code> so your SSH keys are used.</p>
<h3 id="local-templates" tabindex="-1"><a class="header-anchor" href="#local-templates" aria-hidden="true">#</a> Local Templates</h3>
<p>Instead of a GitHub repo, you can also use a template on your local file system:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue init ~/fs/path/to-custom-template my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="writing-custom-templates-from-scratch" tabindex="-1"><a class="header-anchor" href="#writing-custom-templates-from-scratch" aria-hidden="true">#</a> Writing Custom Templates from Scratch</h3>
<ul>
<li>
<p>A template repo <strong>must</strong> have a <code v-pre>template</code> directory that holds the template files.</p>
</li>
<li>
<p>A template repo <strong>may</strong> have a metadata file for the template which can be either a <code v-pre>meta.js</code> or <code v-pre>meta.json</code> file. It can contain the following fields:</p>
<ul>
<li>
<p><code v-pre>prompts</code>: used to collect user options data;</p>
</li>
<li>
<p><code v-pre>filters</code>: used to conditional filter files to render.</p>
</li>
<li>
<p><code v-pre>metalsmith</code>: used to add custom metalsmith plugins in the chain.</p>
</li>
<li>
<p><code v-pre>completeMessage</code>: the message to be displayed to the user when the template has been generated. You can include custom instruction here.</p>
</li>
<li>
<p><code v-pre>complete</code>: Instead of using <code v-pre>completeMessage</code>, you can use a function to run stuffs when the template has been generated.</p>
</li>
</ul>
</li>
</ul>
<h4 id="prompts" tabindex="-1"><a class="header-anchor" href="#prompts" aria-hidden="true">#</a> prompts</h4>
<p>The <code v-pre>prompts</code> field in the metadata file should be an object hash containing prompts for the user. For each entry, the key is the variable name and the value is an <a href="https://github.com/SBoudrias/Inquirer.js/#question" target="_blank" rel="noopener noreferrer">Inquirer.js question object<ExternalLinkIcon/></a>. Example:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"prompts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
      <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Project name"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After all prompts are finished, all files inside <code v-pre>template</code> will be rendered using <a href="http://handlebarsjs.com/" target="_blank" rel="noopener noreferrer">Handlebars<ExternalLinkIcon/></a>, with the prompt results as the data.</p>
<h5 id="conditional-prompts" tabindex="-1"><a class="header-anchor" href="#conditional-prompts" aria-hidden="true">#</a> Conditional Prompts</h5>
<p>A prompt can be made conditional by adding a <code v-pre>when</code> field, which should be a JavaScript expression evaluated with data collected from previous prompts. For example:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"prompts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"confirm"</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Use a linter?"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"lintConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"when"</span><span class="token operator">:</span> <span class="token string">"lint"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Pick a lint config"</span><span class="token punctuation">,</span>
      <span class="token property">"choices"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"standard"</span><span class="token punctuation">,</span>
        <span class="token string">"airbnb"</span><span class="token punctuation">,</span>
        <span class="token string">"none"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The prompt for <code v-pre>lintConfig</code> will only be triggered when the user answered yes to the <code v-pre>lint</code> prompt.</p>
<h5 id="pre-registered-handlebars-helpers" tabindex="-1"><a class="header-anchor" href="#pre-registered-handlebars-helpers" aria-hidden="true">#</a> Pre-registered Handlebars Helpers</h5>
<p>Two commonly used Handlebars helpers, <code v-pre>if_eq</code> and <code v-pre>unless_eq</code> are pre-registered:</p>
<div class="language-handlebars ext-handlebars line-numbers-mode"><pre v-pre class="language-handlebars"><code><span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">#if_eq</span> <span class="token variable">lintConfig</span> <span class="token string">"airbnb"</span><span class="token delimiter punctuation">}}</span></span>;<span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">/if_eq</span><span class="token delimiter punctuation">}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="custom-handlebars-helpers" tabindex="-1"><a class="header-anchor" href="#custom-handlebars-helpers" aria-hidden="true">#</a> Custom Handlebars Helpers</h5>
<p>You may want to register additional Handlebars helpers using the <code v-pre>helpers</code> property in the metadata file. The object key is the helper name:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">helpers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">lowercase</span><span class="token operator">:</span> <span class="token parameter">str</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Upon registration, they can be used as follows:</p>
<div class="language-handlebars ext-handlebars line-numbers-mode"><pre v-pre class="language-handlebars"><code><span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span> <span class="token variable">lowercase</span> <span class="token variable">name</span> <span class="token delimiter punctuation">}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="file-filters" tabindex="-1"><a class="header-anchor" href="#file-filters" aria-hidden="true">#</a> File filters</h4>
<p>The <code v-pre>filters</code> field in the metadata file should be an object hash containing file filtering rules. For each entry, the key is a <a href="https://github.com/isaacs/minimatch" target="_blank" rel="noopener noreferrer">minimatch glob pattern<ExternalLinkIcon/></a> and the value is a JavaScript expression evaluated in the context of prompt answers data. Example:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"filters"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test/**/*"</span><span class="token operator">:</span> <span class="token string">"needTests"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Files under <code v-pre>test</code> will only be generated if the user answered yes to the prompt for <code v-pre>needTests</code>.</p>
<p>Note that the <code v-pre>dot</code> option for minimatch is set to <code v-pre>true</code> so glob patterns would also match dotfiles by default.</p>
<h4 id="skip-rendering" tabindex="-1"><a class="header-anchor" href="#skip-rendering" aria-hidden="true">#</a> Skip rendering</h4>
<p>The <code v-pre>skipInterpolation</code> field in the metadata file should be a <a href="https://github.com/isaacs/minimatch" target="_blank" rel="noopener noreferrer">minimatch glob pattern<ExternalLinkIcon/></a>. The files matched should skip rendering. Example:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"skipInterpolation"</span><span class="token operator">:</span> <span class="token string">"src/**/*.vue"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="metalsmith" tabindex="-1"><a class="header-anchor" href="#metalsmith" aria-hidden="true">#</a> Metalsmith</h4>
<p><code v-pre>vue-cli</code> uses <a href="https://github.com/segmentio/metalsmith" target="_blank" rel="noopener noreferrer">metalsmith<ExternalLinkIcon/></a> to generate the project.</p>
<p>You may customize the metalsmith builder created by vue-cli to register custom plugins.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"metalsmith"</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">metalsmith<span class="token punctuation">,</span> opts<span class="token punctuation">,</span> helpers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">customMetalsmithPlugin</span> <span class="token punctuation">(</span><span class="token parameter">files<span class="token punctuation">,</span> metalsmith<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Implement something really custom here.</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> files<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    metalsmith<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>customMetalsmithPlugin<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need to hook metalsmith before questions are asked, you may use an object with <code v-pre>before</code> key.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"metalsmith"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">metalsmith<span class="token punctuation">,</span> opts<span class="token punctuation">,</span> helpers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">after</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">metalsmith<span class="token punctuation">,</span> opts<span class="token punctuation">,</span> helpers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="additional-data-available-in-meta-js-json" tabindex="-1"><a class="header-anchor" href="#additional-data-available-in-meta-js-json" aria-hidden="true">#</a> Additional data available in meta.{js,json}</h4>
<ul>
<li><code v-pre>destDirName</code> - destination directory name</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"completeMessage"</span><span class="token operator">:</span> <span class="token string">"To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>inPlace</code> - generating template into current directory</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"completeMessage"</span><span class="token operator">:</span> <span class="token string">"{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="complete-function" tabindex="-1"><a class="header-anchor" href="#complete-function" aria-hidden="true">#</a> <code v-pre>complete</code> function</h3>
<p>Arguments:</p>
<ul>
<li>
<p><code v-pre>data</code>: the same data you can access in <code v-pre>completeMessage</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token function">complete</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>inPlace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cd </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>destDirName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>helpers</code>: some helpers you can use to log results.</p>
<ul>
<li><code v-pre>chalk</code>: the <code v-pre>chalk</code> module</li>
<li><code v-pre>logger</code>: <a href="/lib/logger.js">the built-in vue-cli logger</a></li>
<li><code v-pre>files</code>: An array of generated files</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token function">complete</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> <span class="token punctuation">{</span>logger<span class="token punctuation">,</span> chalk<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>inPlace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cd </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chalk<span class="token punctuation">.</span><span class="token function">yellow</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>destDirName<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="installing-a-specific-template-version" tabindex="-1"><a class="header-anchor" href="#installing-a-specific-template-version" aria-hidden="true">#</a> Installing a specific template version</h3>
<p><code v-pre>vue-cli</code> uses the tool <a href="https://github.com/flipxfx/download-git-repo" target="_blank" rel="noopener noreferrer"><code v-pre>download-git-repo</code><ExternalLinkIcon/></a> to download the official templates used. The <code v-pre>download-git-repo</code> tool allows you to indicate a specific branch for a given repository by providing the desired branch name after a pound sign (<code v-pre>#</code>).</p>
<p>The format needed for a specific official template is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue init '&lt;template-name>#&lt;branch-name>' &lt;project-name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p>
<p>Installing the <a href="https://github.com/vuejs-templates/webpack-simple/tree/1.0" target="_blank" rel="noopener noreferrer"><code v-pre>1.0</code> branch<ExternalLinkIcon/></a> of the webpack-simple vue template:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue init 'webpack-simple#1.0' mynewproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Note</em>: The surrounding quotes are necessary on zsh shells because of the special meaning of the <code v-pre>#</code> character.</p>
<h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h3>
<p><a href="http://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
</div></template>
