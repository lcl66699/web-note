<template><div><h1 id="vue-build" tabindex="-1"><a class="header-anchor" href="#vue-build" aria-hidden="true">#</a> vue build</h1>
<p><code v-pre>vue build</code> command gives you a zero-configuration development setup, install once and build everywhere.</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li><strong>Not a boilerplate</strong>: run a single command to develop your app</li>
<li><strong>Out of the box</strong>: ES2015, single-file component with hot reloading and custom CSS preprocessors</li>
<li><strong>Customizable</strong>: populate a <code v-pre>~/.vue/webpack.config.js</code> for custom webpack config</li>
<li><strong>Single-file component mode</strong>: simply run <code v-pre>vue build Component.vue</code> and test it out in the browser!</li>
</ul>
<h2 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get started</h2>
<p>Make sure that you've installed <code v-pre>vue-cli</code> with <code v-pre>npm &gt;= 3</code> or <code v-pre>yarn &gt;= 0.7</code>.</p>
<p>Populate an app entry <code v-pre>./index.js</code> in your project:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'h2'</span><span class="token punctuation">,</span> <span class="token string">'hello world'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then run <code v-pre>vue build index.js</code> and go to <code v-pre>http://localhost:4000</code></p>
<p><strong>To build for production (minimized and optimized):</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue build index.js --prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to directly test a component without manually create a Vue instance for it, try:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue build Component.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>How does this work?</summary><br>
When the input file ends with `.vue` extension, we use a [default app entry](/lib/default-entry.es6) to load the given component, otherwise we treat it as a normal webpack entry. For jsx component which ends with `.js` extension, you can enable this behavior manually by adding `--mount`.
</details>
<p><strong>To distribute component:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue build Component.vue --prod --lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will create an optimized bundle in UMD format, and the name of exported library is set to <code v-pre>Component</code>, you can use <code v-pre>--lib [CustomLibraryName]</code> to customize it.</p>
<p>Note that in some cases you may use <a href="https://webpack.js.org/configuration/externals/" target="_blank" rel="noopener noreferrer"><code v-pre>externals</code><ExternalLinkIcon/></a> to exclude some modules from your bundle.</p>
<p><strong>Watch mode:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue build index.js --watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It's similar to <code v-pre>development mode</code> but does not add hot-reloading support and uses a real file system.</p>
<p><strong>For more CLI usages:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vue build -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<p>By default, we use <code v-pre>~/.vue/config.js</code> and <code v-pre>~/.vue/webpack.config.js</code> if they exist.</p>
<p>To use a custom config file, add <code v-pre>--config [file]</code></p>
<p>To use a custom webpack config file, add <code v-pre>--webpack [file]</code></p>
<h3 id="config-js" tabindex="-1"><a class="header-anchor" href="#config-js" aria-hidden="true">#</a> config.js</h3>
<p>You can define CLI options in this file.</p>
<h4 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h4>
<p>Type: <code v-pre>string</code> <code v-pre>Array</code> <code v-pre>Object</code></p>
<p>It's the first argument of <code v-pre>vue build</code> command, eg: <code v-pre>vue build entry.js</code>. You can set it here to omit it in CLI arguments.</p>
<p>The single-component mode (<code v-pre>--mount</code>) will not work if you set <code v-pre>entry</code> to an <code v-pre>Array</code> or <code v-pre>Object</code>.</p>
<ul>
<li><code v-pre>Array</code>: Override <code v-pre>webpackConfig.entry.client</code></li>
<li><code v-pre>Object</code>: Override <code v-pre>webpackConfig.entry</code></li>
<li><code v-pre>string</code>: Added to <code v-pre>webpackConfig.entry.client</code> or used as <code v-pre>webpackConfig.resolve.alias['your-tasteful-component']</code> in single-component mode.</li>
</ul>
<h4 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h4>
<p>Type: <code v-pre>number</code><br>
Default: <code v-pre>4000</code></p>
<p>Port of dev server.</p>
<h4 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h4>
<p>Type: <code v-pre>function</code> <code v-pre>string</code> <code v-pre>object</code></p>
<h5 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h5>
<p><code v-pre>webpack(webpackConfig, options, webpack)</code></p>
<ul>
<li>webpackConfig: current webpack config</li>
<li>options: CLI options (assigned with config.js)</li>
<li>webpack: The <code v-pre>webpack</code> module</li>
</ul>
<p>Return a new webpack config.</p>
<h5 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h5>
<p>Used as the path to webpack config file, eg: <code v-pre>--webpack webpack.config.js</code></p>
<h5 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h5>
<p>Directly use as webpack config.</p>
<p>Note that we use <a href="https://github.com/survivejs/webpack-merge" target="_blank" rel="noopener noreferrer">webpack-merge<ExternalLinkIcon/></a> to merge your webpack config with default webpack config.</p>
<h4 id="autoprefixer" tabindex="-1"><a class="header-anchor" href="#autoprefixer" aria-hidden="true">#</a> autoprefixer</h4>
<p>Type: <code v-pre>object</code></p>
<p>Autoprefixer options, default value:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'ie > 8'</span><span class="token punctuation">,</span> <span class="token string">'last 5 versions'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h4>
<p>Type: <code v-pre>Object</code> <code v-pre>Array</code> <code v-pre>Function</code></p>
<p>PostCSS options, if it's an <code v-pre>Array</code> or <code v-pre>Function</code>, the default value will be override:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>autoprefixer<span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h4>
<p>Type: <code v-pre>Object</code></p>
<p><a href="https://github.com/babel/babel-loader#options" target="_blank" rel="noopener noreferrer">Babel options<ExternalLinkIcon/></a>. You can set <code v-pre>babel.babelrc</code> to false to disable using <code v-pre>.babelrc</code>.</p>
<h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h4>
<p>Type: <code v-pre>Object</code> <code v-pre>Array</code> <code v-pre>boolean</code></p>
<p><a href="https://github.com/ampedandwired/html-webpack-plugin" target="_blank" rel="noopener noreferrer">html-webpack-plugin<ExternalLinkIcon/></a> options, use this option to customize <code v-pre>index.html</code> output, default value:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Vue App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../lib/template.html'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check out the <RouterLink to="/lib/template.html">default template</RouterLink> file we use. To disable generating html file, you can set <code v-pre>html</code> to <code v-pre>false</code>.</p>
<h4 id="filename" tabindex="-1"><a class="header-anchor" href="#filename" aria-hidden="true">#</a> filename</h4>
<p>Set custom filename for <code v-pre>js</code> <code v-pre>css</code> <code v-pre>static</code> files:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token string">'index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">'style.css'</span><span class="token punctuation">,</span>
    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'static/[name].[ext]'</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="disablecompress" tabindex="-1"><a class="header-anchor" href="#disablecompress" aria-hidden="true">#</a> disableCompress</h4>
<p>Type: <code v-pre>boolean</code></p>
<p>In production mode, all generated files will be compressed and produce sourcemaps file. You can use <code v-pre>--disableCompress</code> to disable this behavior.</p>
<h4 id="hmrentries" tabindex="-1"><a class="header-anchor" href="#hmrentries" aria-hidden="true">#</a> hmrEntries</h4>
<p>Type: <code v-pre>Array</code><br>
Default: <code v-pre>['client']</code></p>
<p>Add <code v-pre>webpack-hot-middleware</code> HMR client to specific webpack entries. By default your app is loaded in <code v-pre>client</code> entry, so we insert it here.</p>
<h4 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h4>
<p>Type: <code v-pre>string</code>, <code v-pre>Object</code></p>
<p>To tell the development server to serve any <code v-pre>/api/*</code> request to your API server in development, use the <code v-pre>proxy</code> options:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080/api'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way, when you fetch <code v-pre>/api/todos</code> in your Vue app, the development server will proxy your request to <code v-pre>http://localhost:8080/api/todos</code>.</p>
<p>We use <a href="https://github.com/chimurai/http-proxy-middleware" target="_blank" rel="noopener noreferrer">http-proxy-middleware<ExternalLinkIcon/></a> under the hood, so the <code v-pre>proxy</code> option can also be an object:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'/api/foo'</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080/api'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'/api/fake-data'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://jsonplaceholder.typicode.com'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'^/api/fake-data'</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Keep in mind that proxy only has effect in development.</p>
<h4 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h4>
<p>Type: <code v-pre>function</code></p>
<p>Perform some custom logic to development server:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'This is the API'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="run-webpackconfig-options" tabindex="-1"><a class="header-anchor" href="#run-webpackconfig-options" aria-hidden="true">#</a> run(webpackConfig, options)</h4>
<p>Type: <code v-pre>function</code></p>
<p>You can use a custom <code v-pre>run</code> function to perform your own build process instead of the default one. For example, run karma with the processed webpack config:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'karma'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Server

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">webpackConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">webpack</span><span class="token operator">:</span> webpackConfig<span class="token punctuation">,</span>
      <span class="token comment">// other karma options...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">exitCode</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Karma has exited with '</span> <span class="token operator">+</span> exitCode<span class="token punctuation">)</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>exitCode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-config-js" tabindex="-1"><a class="header-anchor" href="#webpack-config-js" aria-hidden="true">#</a> webpack.config.js</h3>
<p>All the webpack options are available here.</p>
<h2 id="recipes" tabindex="-1"><a class="header-anchor" href="#recipes" aria-hidden="true">#</a> Recipes</h2>
<h3 id="custom-css-preprocessors" tabindex="-1"><a class="header-anchor" href="#custom-css-preprocessors" aria-hidden="true">#</a> Custom CSS preprocessors</h3>
<p>CSS preprocessors (and CSS extraction) work out of the box, install relevant loaders and you're all set! For example, add <code v-pre>sass</code> support:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i -D node-sass sass-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Since all CSS will be piped through <code v-pre>postcss-loader</code>, <code v-pre>autoprefixer</code> and <code v-pre>postcss</code> options will always work no matter what CSS preprocessors you're using.</p>
<h3 id="custom-babel-config" tabindex="-1"><a class="header-anchor" href="#custom-babel-config" aria-hidden="true">#</a> Custom babel config</h3>
<p>By default we only use a single babel preset: <a href="https://github.com/egoist/babel-preset-vue-app" target="_blank" rel="noopener noreferrer">babel-preset-vue-app<ExternalLinkIcon/></a> which includes following features:</p>
<ul>
<li>ES2015/2016/2017 and Stage-2 features</li>
<li>Transform <code v-pre>async/await</code> and <code v-pre>generator</code></li>
<li>Transform Vue JSX</li>
</ul>
<p>You can set <code v-pre>babel</code> option in config file or populate a <code v-pre>.babelrc</code> in project root directory to override it.</p>
<h3 id="copy-static-files" tabindex="-1"><a class="header-anchor" href="#copy-static-files" aria-hidden="true">#</a> Copy static files</h3>
<p>Everything in <code v-pre>./static</code> folder will be copied to dist folder, for example: <code v-pre>static/favicon.ico</code> will be copied to <code v-pre>dist/favicon.ico</code>.</p>
</div></template>
