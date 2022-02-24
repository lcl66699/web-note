import{d as n}from"./app.c39d5b3f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><p>\u5B89\u4E2Avs\u7684\u5C0F\u63D2\u4EF6 \u5B89\u597D\u8F93\u5165rcc \u53EF\u5FEB\u6377\u521B\u5EFA\u7C7B rfc\u5FEB\u901F\u521B\u5EFA\u51FD\u6570</p><h2 id="react\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#react\u4ECB\u7ECD" aria-hidden="true">#</a> React\u4ECB\u7ECD</h2><p>Facebook,React\u4E3B\u8981\u662F\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684JavaScript\xA0\u5E93\uFF0C\u5B9E\u73B0\u5355\u9875\u9762\u5E94\u7528\u3002</p><ul><li>\u5355\u9875\u9762\u5E94\u7528\u548C\u591A\u9875\u9762\u5E94\u7528 <ul><li>\u591A\u9875\u9762\u5E94\u7528:\u9875\u9762\u8DF3\u8F6C\u65F6\u8DF3\u8F6C\u7684\u90FD\u662F\u5B8C\u6574\u7684html\u9875\u9762</li><li>\u5355\u9875\u9762\u5E94\u7528:\u53EA\u67091\u4E2Ahtml\u9875\u9762\uFF0C\u6240\u6709\u5185\u5BB9\u90FD\u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\u5C55\u793A\uFF0C\u901A\u8FC7\u201C\u8DEF\u7531\u201D\u6765\u52A0\u8F7D\u4E0D\u540C\u5185\u5BB9\u3002\u5168\u90E8\u662F\u901A\u8FC7js\u6765\u63A7\u5236\u663E\u793A\u7684\u3002</li></ul></li><li>\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u7F3A\u70B9: <ul><li>\u4F18\u70B9:\u7528\u6237\u4F53\u9A8C\u6BD4\u8F83\u597D\uFF0C\u52A0\u8F7D\u6BD4\u8F83\u6D41\u7545</li><li>\u7F3A\u70B9:\u4E0D\u5229\u4E8Eseo(\u7F51\u7AD9\u4F18\u5316\uFF0C\u80FD\u5F71\u54CD\u641C\u7D22\u6392\u540D)</li></ul></li><li>\u7279\u70B9:\u58F0\u660E\u5F0F\u8BBE\u8BA1(\u91C7\u7528\u58F0\u660E\u8303\u5F0F)\u3001\u9AD8\u6548\u3001\u7075\u6D3B\u3001JSX\u8BED\u6CD5\u3001\u7EC4\u4EF6\u3001\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41 \u521B\u5EFA\u9879\u76EE,\u811A\u624B\u67B6\uFF1A\u4E0B\u8F7D\u522B\u4EBA\u5199\u597D\u7684\u914D\u7F6E <code>npm\xA0i\xA0-g\xA0yarn</code>\u5148\u5B89\u8FD9\u4E2A \u518D\u5B89\u4E0B\u9762\u7684\u66F4\u5FEB</li></ul><p><code>npx\xA0create-react-app\xA0my-app</code></p><p>\u5B89\u88C5\u65F6\u8FD8\u53EF\u4EE5\u5148\u628A\u811A\u624B\u67B6\u4E0B\u8F7D\u597D\uFF0C\u518D\u901A\u8FC7\u811A\u624B\u67B6\u4E0B\u8F7D\u9879\u76EE</p><p><code>npm i -g create - react -app</code><code>create -react- app my- appcreate -react- app my- app</code></p><p>npx:\xA0npm\u4E2D\u7684\u4E2A\u529F\u80FD\uFF0C \xA0\xA0\xA0\xA0npx\u7684\u6267\u884C\u52063\u6B65\uFF0C\u7B2C\u4E00\u6B65:\u4E0B\u8F7D\u811A\u624B\u67B6\uFF0C\u7B2C\u4E8C\u6B65:\xA0\u4F7F\u7528\u811A\u624B\u67B6\u5B89\u88C5\u9879\u76EE\u3002\u7B2C\u4E09\u6B65:\u4E0B\u8F7D\u597D\u9879\u76EE\u540E\u5220\u9664\u811A\u624B\u67B6\u3002</p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><ul><li>\u9879\u76EE\u4F9D\u8D56\u7684\u5305</li><li>pubic\uFF1A\u9759\u6001\u6587\u4EF6</li><li>src\xA0\uFF1A\u524D\u53F0\u6587\u4EF6\u4EE3\u7801\u7684\u6587\u4EF6\u5939 <ul><li>index.js\xA0\u5165\u53E3</li><li>app.js\xA0\u5165\u53E3\u6587\u4EF6\u6E32\u67D3\u7684\u9875\u9762</li><li>App.test.js\u6D4B\u8BD5\u6587\u4EF6\xA0\u4E0D\u7528\u7BA1</li><li>serviceWorker.js\xA0PWA\u914D\u7F6E\u6587\u4EF6\xA0\u4E0D\u7528\u7BA1</li></ul></li><li>.gitignore\xA0git\u4E0A\u4F20\u65F6\u7684\u5FFD\u7565\u914D\u7F6E</li><li>package.json \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0&quot;scripts&quot;:\xA0{ \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0&quot;start&quot;:\xA0&quot;react-scripts\xA0start&quot;,//\u542F\u52A8\u5F00\u53D1\u9636\u6BB5\u670D\u52A1\u5668 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0&quot;build&quot;:\xA0&quot;react-scripts\xA0build&quot;,//\u6253\u5305 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0&quot;test&quot;:\xA0&quot;react-scripts\xA0test&quot;,//\u8FD0\u884C\u6D4B\u8BD5 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0&quot;eject&quot;:\xA0&quot;react-scripts\xA0eject&quot;//\u663E\u793A\u9690\u85CF\u7684\u914D\u7F6E \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0},</li><li>\u8FD0\u884Cnpm\xA0run\xA0eject\xA0\u65F6\uFF0C\xA0\u63D0\u793A:\xA0Are\xA0you\xA0sure\xA0you\xA0want\xA0to\xA0eject?\xA0This\xA0action\xA0is\xA0permanent\xA0.(\u8FD9\u4E2A) <code>npm\xA0run\xA0eject</code> \u8FD0\u884Ceject\u540E\u4F1A\u591A\u51FAconfig\u6587\u4EF6\u5939\u548Cscripts\u6587\u4EF6\u5939 <ul><li>config:\u91CC\u9762\u662Fwebpack\u7684\u914D\u7F6E</li><li>scripts:\u662F\u542F\u52A8\u547D\u4EE4\u7684\u914D\u7F6E</li></ul></li></ul><h2 id="jsx\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#jsx\u8BED\u6CD5" aria-hidden="true">#</a> jsx\u8BED\u6CD5</h2><ol><li>\u5728js\u4E2D\u53EF\u4EE5\u76F4\u63A5\u5199html <ul><li>HTML\u90E8\u5206:\u76F4\u63A5\u5199html\u6807\u7B7E</li><li>JS\u90E8\u5206:\u5199\u5728{}\u5185</li><li>babel\u4F1A\u628Aj\xA0sx\u8F6C\u6210React.\xA0createElement(\xA0)</li><li>React.\xA0createElement()\u65B9\u6CD5\u662F\u521B\u5EFAreact\u5143\u7D20(\u865A\u62DFDOM)\u7684\u65B9\u6CD5</li><li>ReactDOM.\xA0render()\u7684\u7B2C\u4E00\xA0\u4E2A\u53C2\u6570\uFF0C\u9700\u8981\u7684\u5C31\u662Freact\u5143\u7D20</li></ul></li><li>jsx\u7684\u7279\u70B9 <ul><li><p>\u5927\u62EC\u53F7\u4E2D\u5199\u7684js\u8868\u8FBE\u5F0F,\u6CE8\u610F\uFF0C\u5927\u62EC\u53F7\u4E2D\u4E0D\u80FD\u76F4\u63A5\u6E32\u67D3\u5BF9\u8C61\uFF0C\u80FD\u6E32\u67D3\u6570\u7EC4(\u4E0D\u80FD\u6709\u666E\u901A\u5BF9\u8C61)</p></li><li><p>JSX\u5C5E\u6027\uFF1A\u5199\u5728\u6807\u7B7E\u7684\u5C5E\u6027\u4E0A</p><ul><li>\u6539\u540D<code>&lt;div\xA0className=&#39;&#39;&gt;&lt;/div&gt;</code> <code>&lt;label\xA0htmlfor=&#39;&#39;&gt;&lt;/label&gt;</code></li><li>\u6807\u7B7E\u4E0A\u6DFB\u52A0\u884C\u5185\u6837\u5F0F\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F</li><li><code>&lt;div\xA0id={uid} \xA0style={color:&#39;red&#39;,fontSize:&#39;14px&#39;}&gt;&lt;/div&gt;</code></li></ul></li><li><p>react\u5143\u7D20\u662F\u4E0D\u53EF\u53D8\u7684,\u5982\u679C\u9700\u8981\u66F4\u65B0\u9875\u9762\u663E\u793A\uFF0C\u5C31\u9700\u8981\u521B\u5EFA\u65B0\u7684react\u5143\u7D20</p></li></ul></li><li>\u5143\u7D20\u6E32\u67D3 ReactDOM.render(react\u5143\u7D20) react\u5143\u7D20\u5199\u6CD5: <ul><li>\u76F4\u63A5\u4F7F\u7528jsx\u8BED\u6CD5: <code>&lt;div&gt;{uname}&lt;/div&gt;</code></li><li>\u4F7F\u7528 <code>React.\xA0createElement()</code></li></ul></li><li>\u4F7F\u7528\u7EC4\u4EF6<code>&lt;App\xA0/&gt;</code><code>ReactDOM.render(&lt;Home/&gt;,document.getElementById(&#39;root&#39;))</code></li></ol><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><ol><li>\u6982\u5FF5:\u4ECE\u6982\u5FF5\u4E0A\u7C7B\u4F3C\u4E8EJavaScript\xA0\u51FD\u6570\u3002\u5B83\u63A5\u53D7\u4EFB\u610F\u7684\u5165\u53C2(\u5373&quot;props&quot;)\xA0\uFF0C\u5E76\u8FD4\u56DE\u7528\u4E8E\u63CF\u8FF0\u9875\u9762\u5C55\u793A\u5185\u5BB9\u7684React\u5143\u7D20\u3002\u7EC4\u4EF6\u5141\u8BB8\u4F60\u5C06UI\u62C6\u5206\u4E3A\u72EC\u7ACB\u53EF\u590D\u7528\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u7247\u6BB5\u8FDB\u884C\u72EC\u7ACB\u6784\u601D\u3002</li><li>\u521B\u5EFA\u65B9\u5F0F <ul><li>\u51FD\u6570\u5F0F\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>\u51FD\u6570\u7EC4\u4EF6\u4E0D\u7528hook\u8BED\u6CD5\u65F6\uFF0C\u529F\u80FD\u5F31j\uFF0C\u6709hook\u8BED\u6CD5\u540E\xA0\u66FF\u4EE3\u7C7B\u5F62\u5F0F\u7EC4\u4EF6\u3002 <ul><li>\u7C7B\u5F62\u5F0F\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    states<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol><p>\u524D\u671F\u4F7F\u7528\u7C7B\u7EC4\u4EF6\uFF0C\u4F1A\u5B66\u4E60\u7C7B\u7EC4\u4EF6\u4E2D\u7684state,\u751F\u547D\u5468\u671F\u51FD\u6570\u3002\u4E0D\u7BA1\u4EC0\u4E48\u7EC4\u4EF6\xA0\u5FC5\u987B\u5F15\u5165react7</p><h3 id="\u7C7B\u5F62\u5F0F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5F62\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a> \u7C7B\u5F62\u5F0F\u7EC4\u4EF6</h3><h4 id="\u521B\u5EFA\u7EC4\u4EF6rcc" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7EC4\u4EF6rcc" aria-hidden="true">#</a> \u521B\u5EFA\u7EC4\u4EF6rcc</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> 
\u8BF4\u660E\uFF1A
   1. \u7EC4\u4EF6\u540D\u79F0\u9996\u5B57\u6BCD\u8981\u6C42\u5927\u5199
   2. \u9700\u8981\u7EE7\u627FReact.Component\u8FD9\u4E2A\u7C7B
   3. \u5FC5\u987B\u6709\u4E00\u4E2Arender\u51FD\u6570\uFF0Crender\u5FC5\u987Breturn\uFF0Creturn\u540E\u5199\u7684\u662Fjsx\u8BED\u6CD5
#### \u5BFC\u51FA\u7EC4\u4EF6
    </span><span class="token template-punctuation string">\`</span></span><span class="token keyword">export</span> <span class="token punctuation">{</span>Home<span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    </span><span class="token template-punctuation string">\`</span></span><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
#### \u5BFC\u5165\u7EC4\u4EF6
    </span><span class="token template-punctuation string">\`</span></span><span class="token keyword">import</span> <span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    </span><span class="token template-punctuation string">\`</span></span><span class="token keyword">import</span> AppHome <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
#### \u4F7F\u7528\u7EC4\u4EF6,\u5F53\u6210\u6807\u7B7E\u4F7F\u7528
    </span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    </span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span>Home<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Home<span class="token operator">&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
### \u7EC4\u4EF6\u590D\u7528
\u628A\u9875\u9762\u4E2D\u7684\u67D0\u4E00\u5757UI\u62C6\u5206\u51FA\u53BB\uFF0C\u505A\u6210\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5728\u539F\u6765\u7684\u4F4D\u7F6E\u8C03\u7528\u7EC4\u4EF6\u5373\u53EF\u3002
## props
- \u5F53React\u5143\u7D20\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5B83\u4F1A\u5C06JSX \u6240\u63A5\u6536\u7684\u5C5E\u6027(attributes) \u8F6C\u6362\u4E3A\u5355\u4E2A\u5BF9\u8C61\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u88AB\u79F0\u4E4B\u4E3A\u201Cprops\u201D\u3002
- \u8C03\u7528\u7EC4\u4EF6\u65F6\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u7684\u5F62\u5F0F\u5B9A\u4E49\u4F20\u9012\u6570\u636E
</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span>Item data<span class="token operator">=</span><span class="token string">&#39;string&#39;</span> arr<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span>  <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span>Item picurl<span class="token operator">=</span><span class="token punctuation">{</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>picurl<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token punctuation">{</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
\u5728Item\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7props\u5BF9\u8C61\uFF0C\u83B7\u53D6\u5230\u7528\u6237\u8C03\u7528\u7EC4\u4EF6\u65F6\u4F20\u5165\u7684\u6570\u636E

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>js
<span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// {data:&#39;string &#39; ,arr:[1,2,3,4]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u591A\u4E2A\u7EC4\u4EF6\u8C03\u7528\u5B9A\u4E49\u7684\u5C5E\u6027\u540D\u8981\u4E00\u81F4\u3002</li><li>\u53EF\u4EE5\u4F7F\u7528\xA0...\xA0\u6269\u5C55\u8FD0\u7B97\u7B26</li><li>\u8FD8\u53EF\u4EE5\u904D\u5386\u65F6\u4F20\u9012\u6570\u636E</li><li>props\u662F\u53EA\u8BFB\u5C5E\u6027</li></ul><h2 id="jsx\u4E2D\u7684\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#jsx\u4E2D\u7684\u5FAA\u73AF" aria-hidden="true">#</a> JSX\u4E2D\u7684\u5FAA\u73AF</h2><p>\u4E0D\u80FD\u4F7F\u7528for\u5FAA\u73AF,\u4F7F\u7528map()\u65B9\u6CD5\u904D\u5386\u5BF9\u8C61\u6216\u6570\u7EC4 <code>arr/obj.map(function(item,index){ return\xA0item })</code></p><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2><ul><li>state\u662F\u5B9A\u4E49\u7EC4\u4EF6\u5185\u90E8\u81EA\u5DF1\u4F7F\u7528\u7684\u6570\u636E</li><li>\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6709\u4E24\u79CD\u5B9A\u4E49\u65B9\u5F0F <ul><li>\u7B2C\u4E00\u79CD\uFF1A\u5728constructor\u65B9\u6CD5\u4E2D\u5B9A\u4E49</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
                    count<span class="token operator">:</span><span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u7B2C\u4E8C\u79CD\uFF1A\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5B9A\u4E49</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>            state <span class="token operator">=</span> <span class="token punctuation">{</span>
                count<span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>\u4F7F\u7528state\u6570\u636E <code>this.state.xx</code></li><li>\u4FEE\u6539state\u6570\u636E,\u5FC5\u987B\uFF01this.setState()\u65B9\u6CD5 <ul><li>\u7528\u6CD51\uFF1A\u5BF9\u8C61\u5F62\u5F0F\u7684<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span> state <span class="token punctuation">.</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>\u7528\u6CD52\uFF1A\u51FD\u6570\u5F62\u5F0F\u7684<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li><li>this.setState()\u65B9\u6CD5\u6709\u6279\u91CF\u66F4\u65B0\u529F\u80FD</li></ul><p><code>this.setState({count:this.state.count+1})</code></p><ul><li>this.setState()\u65B9\u6CD5\xA0\u53EF\u80FD\u662F\u5F02\u6B65\u7684</li></ul><p><code>this.setState({},()=&gt;{})</code></p><p>\u4EC0\u4E48\u65F6\u5019\u662F\u5F02\u6B65\u7684\uFF1A\u4E0D\u653E\u5728\u5176\u4ED6\u5B8F\u4EFB\u52A1\u6216\u5FAE\u4EFB\u52A1\u4E2D \u5F53setState\u76F4\u63A5\u653E\u5728\u4E8B\u4EF6\u7684\u5B8F\u4EFB\u52A1\u4E2D\u6267\u884C\u65F6\uFF0C\u662F\u5F02\u6B65\u7684</p><p>\u4EC0\u4E48\u65F6\u5019\u662F\u540C\u6B65\u7684\uFF1AsetState\u53C8\u88AB\u653E\u5728\u522B\u7684\u5B8F\u4EFB\u52A1\u4E2D,\u6216\u8005\u5176\u4ED6\u7684\u5FAE\u4EFB\u52A1\u4E2D</p><p>-\xA0setState\u7684\u51FD\u6570\u5F62\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u51FD\u6570\u4E2D\u6709\u4E00\u4E2A\u53C2\u6570state,\u8FD9\u4E2Astate\u662F\u8C01?</p><p>state\u662F\u4E0A\u4E00\u6B21\u64CD\u4F5C\u5B8Cstate\u7684\u7ED3\u679C(\u6C38\u8FDC\u662F\u6700\u65B0\u7684\u6570\u636E) \u52A0this\u4E0D\u7D2F\u52A0,\u7B97\u6700\u540E\u4E00\u4E2A;\u4E0D\u52A0this\u7684\u8BDD,\u5C31\u7D2F\u52A0\u52A0\u7684\u591A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">++</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u51FD\u6570</h2><p>\u53C8\u53EB\u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u7EC4\u4EF6\u8FD0\u884C\u7684\u8FC7\u7A0B\u4F1A\u5728\u67D0\u4E9B\u6307\u5B9A\u7684\u6761\u4EF6\u4E0B\u81EA\u52A8\u89E6\u53D1\u6267\u884C\u3002 \u7EC4\u4EF6\u6709\u4E09\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u4E00\u751F\u53EA\u89E6\u53D1\u4E00\u6B21\uFF1A</p><ul><li>componentWillMount</li><li>componentDidMount</li><li>componentWillUnMount</li></ul><h3 id="\u751F\u547D\u5468\u671F\u51FD\u6570\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u51FD\u6570\u4F5C\u7528" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u51FD\u6570\u4F5C\u7528</h3><ul><li>componentWillMount\xA0\u7EC4\u4EF6\u6E32\u67D3\u524D\uFF0C\u53EF\u80FD\u4F1A\u653E\u7F51\u7EDC\u8BF7\u6C42(\u4E0D\u592A\u5EFA\u8BAE)</li><li>componentDidMount\xA0\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\uFF0C\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5168\u5C40\u4E8B\u4EF6\u7ED1\u5B9A</li><li>shouldComponentUpdate(){return\xA0false;} \u662F\u5426\u5141\u8BB8\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u4F18\u5316\u4F7F\u7528</li><li>componentWillUpdate(){} \u66F4\u65B0\u524D\uFF0C\u4E00\u822C\u4E0D\u505A\u4EFB\u4F55\u5904\u7406 -\xA0componentDidUpdate(){} \u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210\uFF0C\u65B0\u7F51\u7EDC\u8BF7\u6C42 -\xA0componentWillReceiveProps(){}props\u6539\u53D8\u4E86\xA0\u63A5\u6536\u65B0\u7684props\uFF0C\u4E00\u822C\u4E0D\u505A\u4EFB\u4F55\u5904\u7406</li><li>componentWillUnmount(){} \u7EC4\u4EF6\u9500\u6BC1\u524D\uFF0C\u628A\u5168\u5C40\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u3001\u7F51\u7EDC\u8BF7\u6C42\u7B49\u6709\u526F\u4F5C\u7528\u7684\u5168\u90E8\u6E05\u9664</li></ul><h3 id="\u4E8B\u4EF6\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a> \u4E8B\u4EF6\u7CFB\u7EDF</h3><ul><li>react\u4E2D\u81EA\u5DF1\u91CD\u65B0\u5B9A\u4E49\u4E8B\u4EF6\u7CFB\u7EDF\uFF0Creact\u7ED1\u5B9A\u4E8B\u4EF6\u4E0D\u9700\u8981\u83B7\u53D6\u5230DOM\u5143\u7D20\uFF0C\u800C\u662F\u628A\u4E8B\u4EF6\u7ED1\u5B9A\u5B9A\u4E49\u5728\u865B\u62DFDOM\u4E0A\u4E86</li><li>\u8BED\u6CD5: <code>&lt;div\xA0on+\u4E8B\u4EF6\u540D={EventFunction}&gt;&lt;/div&gt;</code> \u8BF4\u660E\uFF1A</li></ul><ol><li>js\u7684\u4E8B\u4EF6\uFF0C\u9A7C\u5CF0\u547D\u540D\u6CD5</li><li>EventFunction:\u5BF9\u5E94\u7684\u4E8B\u4EF6\u529F\u80FD\uFF0C\u7F16\u5199\u7684\u5F62\u5F0F <ol><li>\u76F4\u63A5\u5B9A\u4E49\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570</li><li>\u53EF\u4EE5\u5B9A\u4E49\u51FD\u6570 \u5982\u679C\u662F\u7C7B\u5F62\u5F0F\u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528this.clickme,\xA0clickme\u51FD\u6570\u5B9A\u4E49\u5728\u7C7B\u4E2D</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">clickme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickme<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    }
}
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ol><h3 id="this\u6307\u5411\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#this\u6307\u5411\u95EE\u9898" aria-hidden="true">#</a> this\u6307\u5411\u95EE\u9898</h3><p>\u5728react\u4E2D\uFF0C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4E2Dthis\u9ED8\u8BA4\u662F\u6307\u5411undefined\u7684\u3002</p><ul><li>\u5728react\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\uFF0Cthis\u6307\u5411\u5F53\u524D\u7EC4\u4EF6</li><li>\u5728react class\u5B9A\u4E49\u7684\u7EC4\u4EF6\u4E2D\uFF0Cconstructor\u6784\u9020\u65B9\u6CD5\u4E2D\u9700\u8981\u901A\u8FC7\u8C03\u7528super()\u65B9\u6CD5\u751F\u6210this\uFF0C\u8FD9\u65F6 this\u6307\u5411\u5F53\u524D\u7EC4\u4EF6\uFF1B\u5426\u5219\u4E0D\u5B58\u5728this\uFF0C\u4F7F\u7528\u4F1A\u62A5\u9519\u3002</li><li>\u5728react \u7EC4\u4EF6\u4E2D\uFF0C\u81EA\u5B9A\u4E49function\u51FD\u6570\u4E2Dthis\u9ED8\u8BA4\u6307\u5411undefined\uFF09</li></ul><p>\u5982\u679C\u60F3\u8BA9this\u6307\u5411\u5F53\u524D\u7EC4\u4EF6\xA0\xA0\xA0\xA0I</p><ul><li>\u65B9\u6CD51:\u4F7F\u7528bind,\u6539\u53D8this\u6307\u5411</li><li>\u65B9\u6CD52\uFF1A\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</li><li>\u65B9\u6CD53\uFF1A\u5728constructor\u6784\u9020\u65B9\u6CD5\u4E2D\u901A\u8FC7bind\u7ED1\u5B9Athis</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickme <span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token function">constructor</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>clickme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickme</span> <span class="token punctuation">.</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u5F53\u51FD\u6570\u8C03\u7528\u65F6\u6CA1\u6709\u4F20\u53C2\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u65B9\u6CD53(constructor\u4E2D\u7ED1\u5B9A) \u5982\u679C\u51FD\u6570\u8C03\u7528\u65F6\u9700\u8981\u4F20\u53C2\uFF0C\u4F7F\u7528\u76F4\u63A5bind\u7ED1\u5B9A\u66F4\u591A\u4E00\u4E9B</p><h3 id="\u4E8B\u4EF6\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5BF9\u8C61" aria-hidden="true">#</a> \u4E8B\u4EF6\u5BF9\u8C61</h3><ul><li>\u4E8B\u4EF6\u5BF9\u8C61\u4E0D\u9700\u8981\u4F20\u9012\uFF0C\u76F4\u63A5\u8C03\u7528\u5C31\u884C\uFF0C\u628A\u4E8B\u4EF6\u5BF9\u8C61\u65B9\u6CD5\u51FD\u6570\u5F62\u53C2\u7684\u6700\u540Ey\u4E00\u4E2A\u4F4D\u7F6E</li><li>\u83B7\u53D6\u5750\u6807\u4FE1\u606F <code>event.pagex / event . pageY</code>\u83B7\u53D6\u4E8B\u4EF6\u89E6\u53D1\u8005\xA0\xA0 <code>e.preventDefault()</code>\u963B\u6B62\u5192\u6CE1 <code>e.stopPropagation()</code> \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</li></ul><h3 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h3><ul><li>form\u6807\u7B7E <code>&lt;form\xA0action=\xA0&#39;http://xx/xx.php/xx.\xA0jsp/xx.asp&#39;\xA0method=\xA0&#39;get\xA0post&#39;\xA0&gt;&lt;/\xA0form&gt;</code></li><li>ajax:\u4E0D\u5237\u65B0\u9875\u9762\uFF0C\u80FD\u5B9E\u73B0\u9875\u9762\u7684\u5C40\u90E8\u66F4\u65B0\uFF0C\u6709ajax\u540Eform\u7528\u7684\u5F88\u5C11\u4E86</li><li>\u8868\u5355:\u6536\u96C6\u7528\u6237\u8F93\u5165\u7684\u4FE1\u606F <ul><li><p>\u7B2C\u4E00\u79CD\u6536\u96C6\u4FE1\u606F\u7684\u5F62\u5F0F\uFF1A\u53D7\u63A7\u7EC4\u4EF6</p><p>\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u8868\u5355\u6570\u636E\u7684\u663E\u793A\u548C\u66F4\u6539\u6709react\u63A7\u5236\uFF0C\u5177\u4F53\u662F\u7531react\u7684state\u7684\u63A7\u5236\u3002\u4F7F\xA0React\xA0\u7684\xA0state\xA0\u6210\u4E3A\u201C\u552F\u4E00\u6570\u636E\u6E90\u201D\u3002 <code>&lt;input\xA0value={this.state.user}\xA0onChange={(e)=&gt;this.setState({user:e.currentTarget.vale})}\xA0/&gt;</code> \u7279\u6B8A\u7684\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u5355\u9009\u6309\u94AE,\u591A\u9009\u6309\u94AE</p><ul><li>value\u5C5E\u6027\u503C\u4E0D\u80FD\u6539\u53D8</li><li>onChange\u4E8B\u4EF6\u53EA\u6709\u5728\u9009\u4E2D\u65F6\u89E6\u53D1</li></ul></li><li><p>\u7B2C\u4E8C\u79CD\u6536\u96C6\u4FE1\u606F\u7684\u5F62\u5F0F\uFF1A\u975E\u53D7\u63A7\u7EC4\u4EF6 \u5141\u8BB8\u7528\u6237\u83B7\u53D6\u5230\u539F\u751FDOM\uFF0C\u81EA\u5DF1\u6765\u64CD\u4F5C\u6570\u636E</p><ul><li>\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\u83B7\u53D6input\u4E2D\u503C <ul><li>\u521B\u5EFAref\xA0\uFF1A\xA0React.createRef()</li><li>\u628A\u521B\u5EFAref\u6DFB\u52A0\u5230\u6807\u7B7E\u4E0A\uFF0C\u4F7F\u7528ref\u5C5E\u6027 ref={this.mref}</li><li>\u83B7\u53D6DOM\uFF0Cthis.myref.current</li></ul></li></ul></li></ul></li></ul><h2 id="\u72B6\u6001\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u63D0\u5347" aria-hidden="true">#</a> \u72B6\u6001\u63D0\u5347</h2><ol><li>\u6570\u636E\u7684\u4F20\u9012\u65B9\u5411\uFF1A \u7236\u7EA7\u5411\u5B50\u7EA7\u4F20\u9012\uFF0C\u4F7F\u7528props \u5B50\u7EA7\u5411\u7236\u7EA7\u4F20\u9012\uFF0C\u72B6\u6001\u63D0\u5347</li><li>\u7528\u6CD5 <ol><li>\u8BA9\u7236\u7EA7\u5411\u5B50\u7EA7\u4F20\u9012\u4E00\u4E2A\u51FD\u6570 <code>&lt;Son\xA0user=\xA0getSonDate={this.getSonDate.bind(this)}/&gt;</code></li><li>\u5728\u5B50\u7EA7\u7EC4\u4EF6\u4E2D\u8C03\u7528\u4F20\u9012\u6765\u7684\u8FD9\u4E2A\u65B9\u6CD5 <code>this.props.getSonDate(this.state.user)</code></li><li>\u5728\u5B50\u7EA7\u7EC4\u4EF6\u4E2D\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u65F6\u53EF\u4EE5\u4F20\u9012\u5B9E\u53C2 <code>this.setState({list:cs})</code></li><li>\u5728\u7236\u7EA7\u51FD\u6570\u4E2D\u63A5\u6536\u6570\u636E</li></ol></li></ol><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> \u7EC4\u5408</span>
    1. \u6709\u4E9B\u7EC4\u4EF6\u65E0\u6CD5\u63D0\u524D\u77E5\u6653\u5B83\u4EEC\u5B50\u7EC4\u4EF6\u7684\u5177\u4F53\u5185\u5BB9\u3002\u5728Sidebar (\u4FA7\u8FB9\u680F)\u548CDialog (\u5BF9\u8BDD\u6846)\u7B49\u5C55\u73B0\u901A\u7528\u5BB9\u5668(box)\u7684\u7EC4\u4EF6\u4E2D\u7279\u522B\u5BB9\u6613\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u3002\u6211\u4EEC\u5EFA\u8BAE\u8FD9\u4E9B\u7EC4\u4EF6\u4F7F\u7528\u4E00\u4E2A\u7279\u6B8A\u7684childrenprop\u4F86\u5C06\u4ED6\u4EEC\u7684\u5B50\u7EC4\u4EF6\u4F20\u9012\u5230\u6E32\u67D3\u7ED3\u679C\u4E2D
    2. \u7528\u6CD5:
        1. \u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7279\u6B8A\u7684children prop\u5C5E\u6027
 					{this.props.children}
        2. \u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u4F5C\u4E3A\u53CC\u6807\u7B7E\u4F7F\u7528\uFF0C\u5728\u53CC\u6807\u7B7E\u5185\u90E8\u5B9A\u4E49\u5177\u4F53\u5185\u5BB9
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TopBar</span><span class="token punctuation">&gt;</span></span>
        					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TopBar</span><span class="token punctuation">&gt;</span></span>
        3. \u5B9A\u4E49\u7EC4\u4EF6\u65F6\u4F7F\u7528childrenprop\u7684\u4F4D\u7F6E\u5C31\u80FD\u663E\u793A\u53CC\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9
    3. React.createElement(type,options,children)
        type :\u6807\u7B7E\u7C7B\u578B
        options:\u5C5E\u6027\u96C6\u5408
        children:\u5B50\u7EA7\u5143\u7D20
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>odiv<span class="token punctuation">&#39;</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>box<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>ddd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        React.createElements(&#39;div&#39;,{id=&#39;odiv&#39;, className=&#39;box&#39;},React.createElements(&#39;span&#39;,{},&#39;ddd&#39;))
3. props\u7C7B\u578B\u9A8C\u8BC1
    1. PropTypes\u7C7B\u578B\u68C0\u6D4B:\u7236\u7EA7\u5411\u5B50\u7EA7\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u662F\u5426\u662F\u5B50\u7EA7\u8981\u6C42\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u4E0D\u662FPropTypes\u4F1A\u62A5\u8B66\u544A\u3002
    2. \u4F7F\u7528\u6B65\u9AA4
        1. \u5F15\u5165\u9A8C\u8BC1\u5305
            import PropTypes from &#39;prop-types&#39; ;
        2. \u5B9A\u4E49\u9700\u8981\u9A8C\u8BC1\u7684prop\u5C5E\u6027
            \u7C7B\u7EC4\u4EF6\u4E2D\u7528\u6CD5\uFF1A
            \u7EC4\u4EF6\u540D.propTypes={
                count:propTypes.string //\u9A8C\u8BC1\u5355\u4E2A\u7C7B\u578B
                msg\uFF1ApropTypes.oneOfType([//\u9A8C\u8BC1\u591A\u79CD\u7C7B\u578B
                    propTypes.number,
                    propTypes.string
                ]),
                vnode:propTypes.element.isRequired//\u9A8C\u8BC1\u5FC5\u987B\u9879
            }
            \u7B2C\u4E8C\u79CD\u5199\u6CD5\uFF1A
                static propTypes ={}
    3. \u7ED9props\u5B9A\u4E49\u9ED8\u8BA4\u503C
            \u7C7B\u540D.defaultProps={
                msg:&#39;hello&#39;,
                obj:{}
            }
    4. \u6267\u884C\u987A\u5E8F
        \u9ED8\u8BA4\u503C\u6BD4\u9A8C\u8BC1\u6267\u884C\u7684\u65E9

4. fetch\u7F51\u7EDC\u8BF7\u6C42
    1. \u4ECB\u7ECD:
        1. \u662Fes6\u4E2D\u63D0\u4F9B\u7684\u4E00\u79CD\u65B0\u7684\u7F51\u7EDC\u8BF7\u6C42\u65B9\u5F0F\u3002Fetch API \u63D0\u4F9B\u4E86\u4E00\u4E2AJavaScript\u63A5\u53E3\uFF0C\u7528\u4E8E\u8BBF\u95EE\u548C\u64CD\u7EB5HTTP\u7BA1\u9053\u7684\u90E8\u5206\uFF0C\u4E0D\u662Fajax \u4E86\u3002
        2. fetch\u65B9\u6CD5\u662F\u4E00\u4E2A\u5168\u5C40\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4EFB\u610F\u4F4D\u7F6E\u4F7F\u7528
        3. fetch()\u8FD4\u56DE\u7684Promise \uFF0C\u4F7F\u7528. then( )\u83B7\u53D6\u8BF7\u6C42\u6210\u529F\u7684\u7ED3\u679C,\u4F7F\u7528. catch\u6355\u83B7\u9519\u8BEF\u4FE1\u606F
        4. \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cfetch\u4E0D\u4F1A\u4ECE\u670D\u52A1\u7AEF\u53D1\u9001\u6216\u63A5\u6536\u4EFB\u4F55cookies, \u8981\u53D1\u9001cookies,\u5FC5\u987B\u8BBE\u7F6Ecredentials \u9009\u9879\uFF0Ccredentials\u7684\u9ED8\u8BA4\u503C\u662F same-origin
    2. \u8BED\u6CD5
        fetch(url,{
            method:&#39;&#39;get/post&#39;,//\u9ED8\u8BA4get
            body:data,//\u643A\u5E26\u7684\u662Fpost\u6570\u636E
            params:data//\u643A\u5E26\u7684\u662Fget\u6570\u636E
            header:{//\u914D\u7F6E\u8BF7\u6C42\u5934
                &#39;Content-Type&#39;:&#39;application/x-www-form-urlencoded&#39; 
//post\u4EE5form data\u5F62\u5F0F\u4F20\u9012\u6570\u636E
            },
            credentials:&#39;same-origin&#39;, //\u662F\u5426\u5141\u8BB8\u643A\u5E26cookie\u6570\u636E(include\u53EF\u643A\u5E26)
        })
    3. \u8FD4\u56DE\u503C\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u7684\u7ED3\u679C \u901A\u8FC7promise.then\u65B9\u6CD5\u63A5\u6536\u7684
        \u4E0D\u53EF\u76F4\u63A5\u7528\uFF0Cfetch\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u89E3\u6790\u65B9\u6CD5
        .blob() \u628A\u7ED3\u679C\u89E3\u6790\u4E8C\u8FDB\u5236
        .text() \u628A\u7ED3\u679C\u89E3\u6790\u5B57\u7B26\u4E32
        .json() \u628A\u7ED3\u679C\u89E3\u6790json\u5BF9\u8C61
then(data=&gt;data. json())
then( data=&gt;{ console . log(data)})
        \u89E3\u6790\u540E\u7684json\u5BF9\u8C61\u683C\u5F0F\uFF1Akey\uFF1Avalue
            {
                data\uFF1A{}//\u771F\u5B9E\u8BF7\u6C42\u7ED3\u679C
                status\uFF1A200\uFF0C
                header\uFF1A{}
            }
    4. \u8BF7\u6C42\u643A\u5E26\u6570\u636E
       1. get
            1. \u95EE\u53F7\u643A\u5E26\u6570\u636E
                \u643A\u5E26\u5F62\u5F0F\uFF1Aurl?key=value&amp;key=value
            2. restful\u6570\u636E
                \u643A\u5E26\u5F62\u5F0F\uFF1Aurl/value/value2
                \u8981\u6C42\u540E\u53F0\u8BC6\u522B\u54EA\u4E9B\u662F\u8DEF\u5F84\uFF0C\u54EA\u4E9B\u662F\u6570\u636E
        2. post
            1. \u9700\u8981\u52A0\u8BF7\u6C42\u5934header\uFF0Cmethod
            2. \u4F20\u9012\u7684\u6570\u636E\u9700\u8981\u653E\u5728body\u4E0A\uFF0C\u800C\u4E14\u662F&#39;key=value&amp;key=value&#39; \u7684\u5B57\u7B26\u4E32
    5. \u8DE8\u57DF\u89E3\u51B3
        1. cors : \u540E\u53F0\u914D\u7F6E\uFF0C\u524D\u53F0\u4E0D\u9700\u8981\u7BA1
        2. jsonp : \u4F7F\u7528 fetch-jsonp\u63D2\u4EF6
            1. \u4E0B\u8F7D\u5B89\u88C5 npm i fetch-jsonp
            2. \u5F15\u5165\u63D2\u4EF6
            3. \u4F7F\u7528\u63D2\u4EF6\u8BF7\u6C42
    		 getJsonp(){
       			 fetchJsonp(&#39;http://localhost:5000/kuayu&#39;)
       			 .then(data=&gt;data.json())
       			 .then(data=&gt;console.log(data))
				}

        3. \u4EE3\u7406
            1. \u5728package.json\u4E2D\u5199
&quot;proxy&quot;: &quot;http://localhost:5000&quot;

                1. package.json\u4E2D\u6709\u4E00\u4E2A\u5B57\u6BB5\uFF1Aproxy,\u8FD9\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u4EE3\u7406
                2. \u91CD\u542F\u524D\u53F0\u670D\u52A1
                3. \u524D\u53F0\u8C03\u7528\u63A5\u53E3\u65F6\u53EA\u9700\u8981\u5199\u63A5\u53E3\u540D\u79F0\uFF0C\u4E0D\u5199\u4EE3\u7406\u5730\u5740
            2. \u4F7F\u7528http-proxy-middleware\u4E2D\u95F4\u4EF6
                1. \u4E0B\u8F7D\u5B89\u88C5\uFF1A npm i http-proxy-middleware
                2. \u5728src\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2AsetupProxy.js\u6587\u4EF6
                3. \u7F16\u5199\u914D\u7F6E
let {createProxyMiddleware} = require(&#39;http-proxy-middleware&#39;);
module.exports =function(app){
app.use(createProxyMiddleware(&#39;/inex&#39;,{
target:&#39;https://3g.163.com//touch/reconstruct/article/list&#39;,
changeOrigin:true,
pathRewrite:{
&#39;/inex&#39;:&#39;&#39;
}
}))
}

4. \u7F51\u7EDC\u8BF7\u6C42\u65F6\uFF1A/inex/\u63A5\u53E3\u540D\u79F0

DAY 4
<span class="token title important"><span class="token punctuation">#</span> router \u8DEF\u7531</span>
1. \u8DEF\u7531\u4ECB\u7ECD:react\u4E3B\u8981\u5B9E\u73B0\u5355\u9875\u9762\u5E94\u7528\uFF0C\u4E5F\u6709\u5207\u6362\u5185\u5BB9\u663E\u793A\u7684\u9700\u6C42\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u8DEF\u5F84\u52A0\u8F7D\u4E0D\u540C\u7684\u5185\u5BB9\u7684\u529F\u80FD\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u53EB\u8DEF\u7531
    \u8DEF\u7531\u5E38\u7528\u7684\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u6CD5:
        1. hash\u8DEF\u7531\uFF0C\u6839\u636E\u8DEF\u5F84\u4E2D\u7684hash\u503C\u6765\u51B3\u5B9A\u663E\u793A\u9875\u9762
        2. history\u8DEF\u7531\uFF1A\u4F7F\u7528h5\u4E2D\u7684history\u5BF9\u8C61
2. \u5B89\u88C5:
    npm i -S react-router-dom
3. \u914D\u7F6E
    1. \u5148\u51B3\u5B9A\u4F7F\u7528\u54EA\u79CD\u8DEF\u7531\u6A21\u5F0F(hash,history)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HashRouter</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HashRouter</span><span class="token punctuation">&gt;</span></span>  #
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserRouter</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BrowserRouter</span><span class="token punctuation">&gt;</span></span> //
        \u63D0\u4F9B\u4E86\u4E00\u4E2A\u8DEF\u7531\u5BB9\u5668,\u5728\u5BB9\u5668\u4E2D\u5B9A\u4E49\u5177\u4F53
        \u8DEF\u7531\uFF0C\u90A3\u4E48\u5B9A\u4E49\u7684\u8DEF\u7531\u5C31\u4F1A\u6309\u7167\u51B3\u5B9A\u597D\u7684\u8DEF\u7531\u6A21\u5F0F\u6765\u663E\u793A\u3002
    2. \u5B9A\u4E49\u5177\u4F53\u7684\u8DEF\u7531
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/about<span class="token punctuation">&#39;</span></span> <span class="token attr-name">compoent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{about}/</span><span class="token punctuation">&gt;</span></span>
        path:\u662F\u8DEF\u5F84\uFF0C\u4F1A\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u663E\u793A
        component\uFF1A\u8981\u52A0\u8F7D\u7684\u9875\u9762
        exact\uFF1A\u7CBE\u51C6\u5339\u914D
    3. Route\u7684\u7279\u70B9:\u8D2A\u5A6A\u5339\u914D
        \u4E0D\u60F3\u8D2A\u5A6A\uFF0C\u60F3\u4E00\u6B21\u52A0\u8F7D\u4E00\u4E2A\u8DEF\u7531\uFF0C\u5B9E\u73B0\u65B9\u5F0F2\u79CD:
        1. exact\u7CBE\u51C6\u5339\u914D
        2. react-router-rom\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6807\u7B7E,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span><span class="token punctuation">&gt;</span></span>,\u4F5C\u7528\u662F\u663E\u793A\u5339\u914D\u5230\u7684\u7B2C\u4E00\u4E2APath
    4. Link\u6807\u7B7E\uFF0C\u5BFC\u822A
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span></span> <span class="token attr-name">exact</span> <span class="token punctuation">/&gt;</span></span>\u53BB\u54EA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
    5. \u52A8\u6001\u8DEF\u7531
        1. \u5B9A\u4E49\u8DEF\u7531\u65F6\uFF0C\u89C4\u5B9A\u54EA\u4E9B\u90E8\u5206\u662F\u52A8\u6001\u7684\uFF0C\u5982\u679C\u662F\u52A8\u6001\u9700\u8981\u4F7F\u7528:variable \u5F62\u5F0F\u5B9A\u4E49
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&#39;</span>/detail/:newsid<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Detail}</span><span class="token punctuation">&gt;</span></span>
        2. \u8DF3\u8F6C\u65F6(Link),\u9700\u8981\u7ED9\u52A8\u6001\u53C2\u52A0\u5177\u4F53\u7684\u6570\u636E
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/detail/1<span class="token punctuation">&#39;</span></span>  <span class="token punctuation">/&gt;</span></span>\u53BB\u54EA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
&lt;Link to={ /detail/\${id}^ }&gt;\u8BE6\u60C5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>L</span> <span class="token attr-name">ink</span><span class="token punctuation">&gt;</span></span>
&lt;Link to={{ 
pathpame: /detail/\${id} |
}}&gt;
\u904D\u5386
{this.state.arr.map((ele,index)=&gt;(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{index}</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{\`/detail/\${ele.id}\`}</span><span class="token punctuation">&gt;</span></span>{ele.user}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>))}
        3. \u5728\u8DF3\u8F6C\u540E\u7684\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5230\u52A8\u6001\u8DEF\u7531\u7684\u5177\u4F53\u53C2\u6570\u503C
            \u4ECEprops.match.params\u8FD9\u4E2A\u5BF9\u8C61\u83B7\u53D6

    6. Route\u52A0\u8F7D\u7684\u7EC4\u4EF6\u7684props.\u4E0A\u4F1A\u81EA\u52A8\u591A3\u4E2A\u5BF9\u8C61(history,match,loaction)
        history:h5\u7684history\u5BF9\u8C61\uFF0C\u91CC\u9762\u6709push, goBack\u7B49\u5E38\u7528\u6D4F\u89C8\u5668\u7684\u64CD\u4F5C\u65B9\u6CD5
        locatin:\u7ECF\u8FC7\u5C01\u88C5\u7684\u6D4F\u89C8\u5668\u7684loaction\u5BF9\u8C61
        match\uFF1A\u63A5\u53D7\u8DEF\u7531\u53C2\u6570\u7684
    7. \u8DEF\u7531\u5D4C\u5957
        1. \u8DEF\u7531\u5230\u7684\u9875\u9762\u4E2D\u53C8\u6709\u5176\u4ED6\u7684\u8DEF\u7531
        2. \u5E38\u89C1\u7684\u4E8C\u5C42\u5D4C\u5957\uFF0C\u591A\u5C42\u5D4C\u5957
            1. \u4E24\u5C42\u5D4C\u5957
                \u5916\u5C42\u628A\u7EC4\u4EF6\u4F5C\u4E3A\u8DEF\u7531\u6807\u7B7E\u7528\uFF0C\u5728\u7EC4\u4EF6\u7684\u5C5E\u6027\u4E0A\u4F7F\u7528path\u5C5E\u6027\uFF0C\u6765\u5B9A\u4E49\u8DEF\u5F84\u5185\u5C42\u88AB\u5D4C\u5957\u7684\u7EC4\u4EF6\u4F7F\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span><span class="token punctuation">&gt;</span></span>\u6765\u5B9A\u4E49
                \u5728\u5916\u5C42\u7EC4\u4EF6\u5185\u90E8\u9700\u8981\u4F7F\u7528props. children\u6765\u663E\u793A\u5B50\u7EA7\u8DEF\u7531
                \u6CE8\u610F:\u5185\u5C42\u8DEF\u7531\u8DEF\u5F84\u8981\u628A\u7236\u7EA7\u7684\u8DEF\u5F84\u5E26\u4E0A
  APP.js\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Kemu</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/keyi<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Keyi}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Keer<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Keer}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesan<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Kesan}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesi<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Kesi}/</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Kemu</span><span class="token punctuation">&gt;</span></span>

Kemu.js
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u9A7E\u7167\u8003\u8BD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/keyi<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u79D1111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
          		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Keer<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u79D1222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
          		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesan<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u79D1333<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
          		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesi<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u79D1444<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                    {this.props.children}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            2. \u591A\u5C42\u5D4C\u5957
                1. \u4E0D\u80FD\u628A\u7EC4\u4EF6\u4F5C\u4E3A\u6807\u7B7E\u4F7F\u7528\u4E86
                2. \u5B9A\u4E49\u5728\u7EC4\u4EF6\u5185\u90E8\uFF0C\u5728\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span><span class="token punctuation">&gt;</span></span>\u6765\u5B9A\u4E49\u8DEF\u7531
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span><span class="token punctuation">&gt;</span></span>\u5B9A\u4E49\u5BFC\u822A
function Keer(props) {
  return (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u79D1\u4E8C
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Keer/Daoche<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Daoche}/</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Keer/Daoche<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u5012\u8F66<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>)
}

    8. \u8DEF\u7531\u91CD\u5B9A\u5411
        1. \u5F15\u5165\u6807\u7B7E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span><span class="token punctuation">/&gt;</span></span>
        2. \u7528\u6CD5
            1. &lt;Route path=&#39; /a&#39; render={()=&gt;{<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/b<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>}}&gt;
            2. \u76F4\u63A5\u4F5C\u4E3A\u6807\u7B7E\u4F7F\u7528
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/c<span class="token punctuation">&#39;</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
            3. \u5728Route\u53CC\u6807\u7B7E\u5185\u4F7F\u7528
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&#39;</span>/v<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span> <span class="token punctuation">&gt;</span></span>
    9. \u8DEF\u7531\u9AD8\u4EAE
        1. \u5F15\u5165NavLink\u6807\u7B7E
        2. \u8FD9\u4E2A\u6807\u7B7E\u5728\u88AB\u9009\u4E2D\u65F6\uFF0C\u80FD\u81EA\u52A8\u6DFB\u52A0\u7C7B\u540D
        3. \u81EA\u5DF1\u6DFB\u52A0css\u6837\u5F0F
    10. \u7F16\u7A0B\u5F0F\u5BFC\u822A
        - \u5C31\u662F\u4F7F\u7528history\u7684\u5BFC\u822A\u529F\u80FD\u5B9E\u73B0\u7684
        - history.push() //\u6B63\u5E38\u7684\u5BFC\u822A\uFF0C\u4F1A\u628A\u8FD9\u5C42\u8DEF\u5F84\u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D
        - history.replace() //\u66FF\u6362\u5BFC\u822A
        - history.goBack() //\u8FD4\u56DE\u4E0A\u4E00\u5C42\u8DEF\u5F84
        - history.go(number) //\u524D\u8FDB\u6216\u540E\u9000
    11. withRouter()
        - \u6709\u4E9B\u9875\u9762\u8BBF\u95EE\u4E0D\u5230\uFF0C\u5982\u679C\u60F3\u5728\u8FD9\u79CD\u9875\u9762\u4F7F\u7528\u7F16\u7A0B\u5F0F\u5BFC\u822A
        - withRouter\u662Freact-router \u63D0\u4F9B\u7684\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u8C03\u7528\u65F6\u628A\u4E0D\u80FD\u8BBF\u95EE
        history\u5BF9\u8C61\u7684\u7EC4\u4EF6\u653E\u5728\u5B9E\u7239\u4F4D\u7F6E\u4E0A\uFF0C\u5C31\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u65B0\u7EC4\u4EF6\u5C31\u5177\u5907\u4E86history ,loaction\uFF0Cmatch\u5BF9\u8C61
import {withRouter} from &#39;react-router&#39;//\u5F15\u5165
let Newkemu=withRouter(kemu)//\u5F15\u7528
export default Newkemu //\u5BFC\u51FA

        - \u9664\u4E86withRouter,\u8FD8\u53EF\u4EE5\u901A\u8FC7props\u4F20\u53C2\u5F62\u5F0F\u7531\u7236\u7EA7\u4F20\u9012\u4E0B\u6765

<span class="token title important"><span class="token punctuation">#</span> antd</span>
- antd \u662F\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u8981\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1
- \u4F7F\u7528
    1. \u5B89\u88C5\uFF1Anpm install antd --save
    2. \u5F15\u5165
        1. \u5168\u90E8\u5F15\u5165css
            \u4F18\u70B9\uFF1A\u4E0D\u9700\u8981\u8003\u8651css\u95EE\u9898\uFF0C\u5F15\u5165\u4EFB\u4F55\u7EC4\u4EF6\u90FD\u6709css
            \u7F3A\u70B9\uFF1A\u6709\u5F88\u591Acss\u7528\u4E0D\u5230
            import &#39;antd/dist/antd.css&#39;
        2. \u6309\u9700\u5F15\u5165
             \u7528\u54EA\u4E2A\u7EC4\u4EF6\uFF0C\u5C31\u52A8\u6001\u7684\u6DFB\u52A0\u8FD9\u4E2A\u7EC4\u4EF6\u9700\u8981\u7684css
                \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1Acraco\u5E93
                \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A

Day5
<span class="token title important"><span class="token punctuation">#</span> \u914D\u7F6Eless</span>
- \u4F7F\u7528create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u652F\u6301less\u3002\u5982\u679C\u60F3\u5728\u9879\u76EE\u4E2D\u4F7F\u7528less\u5C31\u9700\u8981\u81EA\u5DF1\u914D\u7F6E
- \u5E38\u7528\u7684\u65B9\u6CD5\uFF1A
    0. \u9996\u5148\u4E0B\u8F7D less \u548C less-loader 
    1. \u76F4\u63A5\u4FEE\u6539webpack\u7684\u914D\u7F6E
        1. \u8FD0\u884C npm run eject \uFF1A \u628Awebpack\u7684\u914D\u7F6E\u6587\u4EF6\u663E\u793A\u51FA\u6765
        2. \u5728webpack.config.js\u4E2D\u8FDB\u884C\u4FEE\u6539
            1. \u5148\u641C\u7D22rules\uFF0C\u76F4\u63A5\u81EA\u5DF1\u6DFB\u52A0loader\u914D\u7F6E
                {
                    test:/\\.less/,
                    use:[&#39;style-loader&#39;,&#39;css-loader&#39;,&#39;less-loader&#39;]
                }
            2. \u53C2\u7167sass\u7684\u914D\u7F6E\uFF0C\u641C\u7D22sass
                \u590D\u5236sass\u7684\u914D\u7F6E\uFF0C\u628A\u5176\u4E2D\u7684sass\u4FEE\u6539\u4E3Aless
    2. \u4F7F\u7528\u4E2D\u95F4\u4EF6
        1. craco\u5E93\uFF0C@craco/less\u63D2\u4EF6
        2. customize-cra react-app-rewired\u5E93

2. mock
    1. \u4F5C\u7528\uFF1A\u751F\u6210\u968F\u673A\u6570\u636E\uFF0C\u62E6\u622A Ajax \u8BF7\u6C42
    2. \u4F18\u70B9\uFF1A
        \u524D\u540E\u7AEF\u5206\u79BB   \u5F00\u53D1\u65E0\u4FB5\u5165
    3. \u5B89\u88C5\u53CA\u4F7F\u7528
        npm install mockjs
    4. \u6570\u636E\u6A21\u677F\u5B9A\u4E49\u89C4\u8303\uFF1A
        \u6570\u636E\u6A21\u677F\u4E2D\u7684\u6BCF\u4E2A\u5C5E\u6027\u7531 3 \u90E8\u5206\u6784\u6210\uFF1A\u5C5E\u6027\u540D(name)\u3001\u751F\u6210\u89C4\u5219(rule)\u3001\u5C5E\u6027\u503C(value)
        \u8BED\u6CD5\uFF1A&#39;name|rule&#39;: value
        \u751F\u6210\u89C4\u5219 \u6709 7 \u79CD\u683C\u5F0F\uFF1A
        &#39;name|min-max&#39;: value
        &#39;name|count&#39;: value
        &#39;name|min-max.dmin-dmax&#39;: value
        &#39;name|min-max.dcount&#39;: value
        &#39;name|count.dmin-dmax&#39;: value
        &#39;name|count.dcount&#39;: value
        &#39;name|+step&#39;: value
    5. \u6570\u636E\u5360\u4F4D\u7B26\u5B9A\u4E49\u89C4\u8303\uFF1A
        \u5360\u4F4D\u7B26 \u53EA\u662F\u5728\u5C5E\u6027\u503C\u5B57\u7B26\u4E32\u4E2D\u5360\u4E2A\u4F4D\u7F6E\uFF0C\u5E76\u4E0D\u51FA\u73B0\u5728\u6700\u7EC8\u7684\u5C5E\u6027\u503C\u4E2D
        \u8BED\u6CD5\uFF1A@\u5360\u4F4D\u7B26 cname
        @\u5360\u4F4D\u7B26(\u53C2\u6570 [, \u53C2\u6570])
        \u6CE8\u610F\uFF1A
        1.\u7528 @ \u6765\u6807\u8BC6\u5176\u540E\u7684\u5B57\u7B26\u4E32\u662F \u5360\u4F4D\u7B26\u3002
        2.\u5360\u4F4D\u7B26 \u5F15\u7528\u7684\u662F Mock.Random \u4E2D\u7684\u65B9\u6CD5
        3.\u901A\u8FC7 Mock.Random.extend() \u6765\u6269\u5C55\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26\u3002
        4.\u5360\u4F4D\u7B26 \u4E5F\u53EF\u4EE5\u5F15\u7528 \u6570\u636E\u6A21\u677F \u4E2D\u7684\u5C5E\u6027\u3002
        5.\u5360\u4F4D\u7B26 \u4F1A\u4F18\u5148\u5F15\u7528 \u6570\u636E\u6A21\u677F \u4E2D\u7684\u5C5E\u6027\u3002
        6.\u5360\u4F4D\u7B26 \u652F\u6301 \u76F8\u5BF9\u8DEF\u5F84 \u548C \u7EDD\u5BF9\u8DEF\u5F84
    6. \u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42
        Mock.mock(url,type,template)
3. \u5C0F\u9879\u76EE



Day6
1. 
2.
 \u4F5C\u7528\uFF1A\u53EF\u4EE5\u4E0D\u901A\u8FC7props\u4E00\u5C42\u4E00\u5C42\u7684\u4F20\u9012\u6570\u636E\uFF0C\u901A\u8FC7Provider\u63D0\u4F9B\u6570\u636E\uFF0C\u5728\u7EC4\u4EF6\u6811\u4E4B\u95F4\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u6570\u636E\u3002
    1. \u6570\u636E\u4F20\u9012\u65B9\u5411\u6709\u7236\u4F20\u5B50 (props),\u5B50\u4F20\u7236 (\u4E8B\u4EF6)
        \u8FD9\u4E24\u79CD\u5F62\u5F0F\u90FD\u9700\u8981\u4E00\u5C42\u4E00\u5C42\u7684\u4F20\u9012
    2. \u4F5C\u7528\uFF1AContext \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65E0\u9700\u4E3A\u6BCF\u5C42\u7EC4\u4EF6\u624B\u52A8\u6DFB\u52A0 props\uFF0C\u5C31\u80FD\u5728\u7EC4\u4EF6\u6811\u95F4\u8FDB\u884C\u6570\u636E\u4F20\u9012\u7684\u65B9\u6CD5
    3. \u4F7F\u7528
        1. \u521B\u5EFAContext.js
            import React from &#39;react&#39;
              const Mycontext=React.createContext()
export default Mycontext

        2. Mycontext.Provider : \u63D0\u4F9B\u6570\u636E
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Provider</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{}</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Provider</span><span class="token punctuation">&gt;</span></span>
        3. Mycontext.Consumer : \u83B7\u53D6\u6570\u636E
             render() {
        return (
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
               {(value)=&gt;{
                   console.log(value);
                   return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                       item
                       {value.sun}
                       {value.pp}
                   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
               }}
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
        )
}

        4. Class.contextType:\u83B7\u53D6\u6570\u636E
            Class.contextType = Mycontext;//\u5199\u5728\u6700\u4E0B
            \u5728\u7EC4\u4EF6\u5185\u53EF\u4EE5\u4F7F\u7528context\u5C5E\u6027\u83B7\u53D6\u7684\u6570\u636E 
        5. static contextType\uFF1A\u83B7\u53D6\u6570\u636E
            static contextType = Mycontext;//\u5728render\u7684\u4E0A\u4E00\u884C
            \u5728\u7EC4\u4EF6\u5185\u53EF\u4EE5\u4F7F\u7528context\u5C5E\u6027\u83B7\u53D6\u7684\u6570\u636E
        6. contextType,Consumer \u533A\u522B
            contextType \u8C03\u7528\u591A\u6B21\u65F6\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6B21\u751F\u6548
            Consumer \u8C03\u7528\u591A\u6B21\uFF0C\u6570\u636E\u4E0D\u8986\u76D6



2. \u9519\u8BEF\u8FB9\u754C
    1. react\u4E2D\u4E00\u4E2A\u9875\u9762\u4E2D\u53EF\u80FD\u6709\u5F88\u591A\u7EC4\u4EF6\uFF0C\u53EA\u8981\u5176\u4E2D\u6709\u4E00\u4E2A\u7EC4\u4EF6\u8FD0\u884C\u51FA\u9519\uFF0Creact\u4F1A\u628A\u9875\u9762\u4E2D\u6240\u6709\u7EC4\u4EF6\u5168\u5378\u8F7D\u6389\uFF0C\u663E\u793A\u7A7A\u767D\u5C4F\u5E55
    2. \u9519\u8BEF\u8FB9\u754C:\u5F53React\u8FD0\u884C\u4E2D\u6709\u9519\u8BEF\u65F6\uFF0C\u8FD9\u65F6\u663E\u793A\u4E00\u4E2A\u5907\u7528\u7684\u9875\u9762\uFF0C\u4E0D\u663E\u793A\u767D\u5C4F\uFF0C\u8FD8\u53EF\u4EE5\u628A\u62A5\u9519\u4FE1\u606F\u53D1\u9001\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E
    3. \u7528\u6CD5\uFF1A
         \u9519\u8BEF\u8FB9\u754C\u4E5F\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5B9A\u4E49\u597D\u540E\u5305\u88F9\u5176\u4ED6\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u5FC5\u987B\u662Fclass\u5B9A\u4E49\u7684\uFF0C\u540C\u65F6\u8FD9\u4E2A\u7EC4\u4EF6\u4E2D\u5FC5\u987B\u6709\u4EE5\u4E0B\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u7684\u81F3\u5C11\u4E00\u4E2A
             static getDerivedStateFromError(){
       		 return {iserror:true}
   				 }
        \u6E32\u67D3\u5907\u7528 UI
            componentDidCatch(...rest){
        console.log(rest);
}
        \u6253\u5370\u9519\u8BEF\u4FE1\u606F\uFF0C\u53EF\u4EE5\u628A\u9519\u8BEF\u4FE1\u606F\u53D1\u9001\u5230\u6307\u5B9A\u4F4D\u7F6E
render() {
        if(this.state.iserror){
            return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u7EC4\u4EF6\u62A5\u9519\u4E86<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        }
        return (
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                {this.props.children}           
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        )  
}

Day7
<span class="token title important"><span class="token punctuation">#</span> Refs \u8F6C\u53D1</span>
1. ref\u662F\u4EC0\u4E48\uFF1F\u5141\u8BB8\u7528\u6237\u83B7\u53D6\u5230\u539F\u751FDOM
2. ref\u653E\u5728\u7EC4\u4EF6\u4E0A\uFF0C\u8FD9\u65F6current\u7684\u503C\u662F\u8C01\uFF1F
    \u5C31\u662F\u8FD9\u4E2A\u7EC4\u4EF6
3. ref\u653E\u5728\u7EC4\u4EF6\u4E0A\u65F6\uFF0C\u6211\u60F3\u83B7\u53D6\u7684\u662F\u8FD9\u4E2A\u7EC4\u4EF6\u5185\u90E8\u7684\u67D0\u4E2ADOM\u5143\u7D20
- react\u4E2D\u7EC4\u4EF6\u4E0A\u4F7F\u7528ref\u5C5E\u6027\u65F6\uFF0Creact\u4F1A\u628Aref\u4ECEprops\u4E2D\u5220\u9664\uFF0C\u6839\u672C\u4E0D\u4F1A\u4F20\u9012\u5230\u7EC4\u4EF6\u5185\u90E8\u3002
- refs\u8F6C\u53D1\u5C31\u662F\u89E3\u51B3\u4E0A\u9762\u8FD9\u4E2A\u95EE\u9898\u7684
4. \u7528\u6CD5\uFF1A
    1. \u521B\u5EFAref \u5728\u7236\u7C7B
      constructor(){
        super()
        this.ref1=React.createRef()
}
    \u5728\u7236\u7C7B\u53EF\u4EE5\u901A\u8FC7\u4E8B\u4EF6\u8F93\u51FA
     console.log(this.ref1.current);
    \u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u4F20\u8FC7\u53BBref <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sonref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{this.ref1}</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>2006<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span> 
    2. \u4F7F\u7528forwardRef\u6765\u521B\u5EFA\u7EC4\u4EF6
       let Son=React.forwardRef((props,ref)=&gt;{
        return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{ref}</span><span class="token punctuation">&gt;</span></span>son\u4E2D\u7684div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
})
export default Son
<span class="token title important"><span class="token punctuation">#</span> Fragments</span>
1. Fragments \u5141\u8BB8\u4F60\u5C06\u5B50\u5217\u8868\u5206\u7EC4\uFF0C\u800C\u65E0\u9700\u5411 DOM \u6DFB\u52A0\u989D\u5916\u8282\u70B9\u3002
2. \u8BED\u6CD5\uFF1A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">&gt;</span></span>
\u7B80\u5199\u8BED\u6CD5\uFF1A &lt;&gt;...&lt;/&gt;

<span class="token title important"><span class="token punctuation">#</span> \u9AD8\u9636\u7EC4\u4EF6</span>
- \u9AD8\u9636\u7EC4\u4EF6\uFF08HOC\uFF09\u662F React \u4E2D\u7528\u4E8E\u590D\u7528\u7EC4\u4EF6\u903B\u8F91\u7684\u4E00\u79CD\u9AD8\u7EA7\u6280\u5DE7\u3002HOC \u81EA\u8EAB\u4E0D\u662F React API \u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u662F\u4E00\u79CD\u57FA\u4E8E React \u7684\u7EC4\u5408\u7279\u6027\u800C\u5F62\u6210\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C \u9AD8\u9636\u7EC4\u4EF6\u672C\u8EAB\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7EC4\u4EF6
  \u9AD8\u9636\u7EC4\u4EF6\u662F\u53C2\u6570\u4E3A\u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u65B0\u7EC4\u4EF6\u7684\u51FD\u6570
  \u4EE3\u7801\u5982\u4E0B

//     // React\u7684api, React.createElement(\u6807\u7B7E,{\u5C5E\u6027},children)
//     // React\u7684api, React.cloneElement(react\u5143\u7D20,{\u5C5E\u6027},children)
//     // React\u7684api, React.Children.map()

<span class="token title important"><span class="token punctuation">#</span> \u6027\u80FD\u4F18\u5316</span>
- shouldComponentUpdate(nextProps,nextState)
this.props\u4EE3\u8868\u8001\u72B6\u6001\uFF0CnextProps\u4EE3\u8868\u65B0\u72B6\u6001
\u662F\u5426\u5141\u8BB8\u7EC4\u4EF6\u66F4\u65B0
- PureComponent \uFF08export default class Son2 extends PureComponent\uFF09
PureComponent\u6765\u5B9A\u4E49\u7C7B\u5F62\u5F0F\u7EC4\u4EF6\uFF0C\u53EA\u6709\u5F53props\u6216state\u53D1\u751F\u6539\u53D8\u65F6\u624D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0

- ComponentWillUnmount \u7EC4\u4EF6\u6CE8\u9500
  // \u7EC4\u4EF6\u9500\u6BC1\u524D\uFF0C\u628A\u5168\u5C40\u7684\u4E8B\u4EF6\u5220\u9664\u4E86 \u6BD4\u5982
        window.removeEventListener(&#39;scroll&#39;,this.myscroll);
        clearTimeout(this.state.timer);
- ComponentDidUpdate(prevProps,prevState)
 \u9632\u6B62\u6B7B\u5FAA\u73AF \u53EF\u4EE5\u52A0\u6761\u4EF6\u5224\u65AD

<span class="token title important"><span class="token punctuation">#</span> Render Props</span>
- \u672F\u8BED \u201Crender prop\u201D \u662F\u6307\u4E00\u79CD\u5728 React \u7EC4\u4EF6\u4E4B\u95F4\u4F7F\u7528\u4E00\u4E2A\u503C\u4E3A\u51FD\u6570\u7684 prop \u5171\u4EAB\u4EE3\u7801\u7684\u7B80\u5355\u6280\u672F\uFF0C\u4E00\u4E9B\u7EC4\u4EF6\u5411\u5916\u63D0\u4F9B\u6570\u636E\uFF0C\u4E0D\u628A\u9700\u8981\u6570\u636E\u7684\u7EC4\u4EF6\u786C\u7F16\u7A0B\u5230\u8FD9\u4E2A\u7EC4\u4EF6\u5185\u90E8\uFF0C\u901A\u8FC7\u8C03\u7528props.\u4E0A
\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u628A\u6570\u636E\u63D0\u4F9B\u5904\u7406
<span class="token list punctuation">-</span> \u8BED\u6CD5
Data.jsx\u63D0\u4F9B\u6570\u636E\u7684\u7EC4\u4EF6
class Data extends Component {
state ={count:1}
render(){
return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{this . props. render (this. state)}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
}
}
\u5728\u516C\u5171app.js\uFF0C\u7B49\u4E8E\u628Astate\u4F20\u7ED9son
 &lt;Data render={(state)=&gt;{
        console.log(&#39;ap&#39;,state);
          return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son1</span> <span class="token attr-name">state</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{state}/</span><span class="token punctuation">&gt;</span></span>
      }}/&gt;  
Son.jsx\u5728\u901A\u8FC7this.props\u63A5\u6570\u636E

<span class="token title important"><span class="token punctuation">#</span> \u61D2\u52A0\u8F7D</span>
- \u5F53\u7EC4\u4EF6\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u5230\u4E86\uFF0C\u518D\u52A8\u6001\u52A0\u8F7D\u8FD9\u4E2A\u7EC4\u4EF6
- \u4F7F\u7528\uFF1A
let About = React.lazy(()=&gt;import(&#39;./About&#39;));
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span> <span class="token attr-name">fallback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{&lt;Loading</span> <span class="token punctuation">/&gt;</span></span>}&gt;
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>About</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">&gt;</span></span>

Day8
<span class="token title important"><span class="token punctuation">#</span> hooks hook\u4F5C\u7528\uFF1A\u8BA9\u51FD\u6570\u5F0F\u7EC4\u4EF6\u80FD\u4F7F\u7528state\u548C\u751F\u547D\u5468\u671F</span>
1. \u4ECB\u7ECD\uFF1AHook \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 class \u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 state \u4EE5\u53CA\u5176\u4ED6\u7684 React \u7279\u6027\u3002 rfc\u5FEB\u901F\u521B\u5EFA
    hook\u662F\u7ED9\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\u7684\uFF0Chook\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u4E0D\u80FD\u5728class\u7EC4\u4EF6\u4E2D\u4F7F\u7528
    \u6CA1\u6709\u7834\u574F\u6027\u6539\u52A8\uFF0C100%\u5411\u540E\u517C\u5BB9\uFF0Creact\u7248\u672C\u5927\u4E8E16.8\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528Hook
2. State Hook
    1. \u8BED\u6CD5\uFF1A
        import React,{useState} from &#39;react&#39;
        const [count, setCount] = useState(0);
    2. \u8C03\u7528
        \u76F4\u63A5\u4F7F\u7528\u53D8\u91CF\u540D count
    3. \u4FEE\u6539
        \u8C03\u7528setCount\u65B9\u6CD5
            <span class="token comment">&lt;!-- \u7B2C\u4E00\u79CD\u7528\u6CD5\uFF1A\u5728\u8001\u72B6\u6001\u4E0A\u4FEE\u6539 --&gt;</span>
            setCount((count)=&gt;{
                //count\u662F\u8001\u7684\u72B6\u6001
                return count + 5//\u6CA1\u6709\u6279\u91CF\u66F4\u65B0
            })
            <span class="token comment">&lt;!-- \u7B2C\u4E8C\u79CD\u7528\u6CD5\uFF1A\u8BBE\u7F6E\u6210\u56FA\u5B9A\u503C --&gt;</span>
            setCount(2)
            <span class="token comment">&lt;!-- \u7B2C\u4E09\u79CD\u7528\u6CD5\uFF1A --&gt;</span>
            setCount(count+2) //\u6709\u6279\u91CF\u66F4\u65B0\u529F\u80FD
    4. \u662F\u5426\u662F\u6279\u91CF\u66F4\u65B0
        setCount(count=&gt;count+1):\u4E0D\u6279\u91CF\u66F4\u65B0\uFF0C\u5199\u51E0\u4E2A\u5C31\u6267\u884C\u51E0\u6B21
    5. \u662F\u5426\u662F\u5F02\u6B65
        \u5728\u975E\u5176\u4ED6\u5B8F\u4EFB\u52A1\u6216\u5FAE\u4EFB\u52A1\u4E2D\u65F6\u662F\u5F02\u6B65\u7684\uFF0C \u5426\u5219\u540C\u6B65\u6267\u884C\u7684

2. Effect Hook
    1. useEffect \u662F\u7ED9\u51FD\u6570\u7EC4\u4EF6\u63D0\u4F9B &quot;\u751F\u547D\u5468\u671F&quot; \u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u76F8\u5F53\u4E8E\u67093\u4E2A\u751F\u547D\u5468\u671F
    2. \u8BED\u6CD5\uFF1A
        1. \u5F15\u5165
            import React,{useEffect} from &#39;react&#39;
        2. \u4F7F\u7528\uFF1A
            useEffect(()=&gt;{
                ...
                return ()=&gt;{}
            },[])
            1. \u7B2C\u4E00\u4E2A\u53C2\u6570\u4F4D\u7F6E\u662F\u51FD\u6570\uFF0C\u4F5C\u7528\u76F8\u5F53\u4E8EcomponentDidMount\u548CcomponentDidUpdate
            2. \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F4D\u7F6E\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u53EF\u9009\u7684\u3002\u8FD9\u4E2A\u6570\u7EC4\u662F\u5BF9componentDidUpdate\u4F18\u5316\u4F7F\u7528\u7684
                1. \u4E0D\u5199\u7B2C\u4E8C\u4E2A\u53C2\u6570\u65F6\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F4D\u7F6E\u7684\u51FD\u6570\uFF0C\u5728\u7EC4\u4EF6\u66F4\u65B0\u65F6\u4F1A\u91CD\u65B0\u6267\u884C
                2. \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F4D\u7F6E\u5199\u7A7A\u6570\u7EC4([])\uFF1A\u7981\u6B62ComponentDidUpdate\u6267\u884C
                3. \u7B2C\u4E8C\u6B21\u53C2\u6570\u4F4D\u7F6E\u6570\u7EC4\u4E2D\u6709\u503C\uFF1A\u53EA\u6709\u6570\u7EC4\u4E2D\u7684\u53C2\u6570\u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u624D\u80FD\u6267\u884CComponentDidUpdate
            3. \u7B2C\u4E00\u4E2A\u53C2\u6570\u4F4D\u7F6E\u7684\u51FD\u6570\u4E2D\u7684\u8FD4\u56DE\u503C(return) : \u76F8\u5F53\u4E8EcomponentWillUnmount\uFF0Ceffect \u7684\u6E05\u9664\u9636\u6BB5\u5728\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u65F6\u90FD\u4F1A\u6267\u884C\uFF0C\u800C\u4E0D\u662F\u53EA\u5728\u5378\u8F7D\u7EC4\u4EF6\u7684\u65F6\u5019\u6267\u884C\u4E00\u6B21\u3002\u8FD9\u4E2A\u8BBE\u8BA1\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA bug \u66F4\u5C11\u7684\u7EC4\u4EF6\u3002

3. Context Hook
- \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528Context\u7684hook
- \u8BED\u6CD5\uFF1A
        \u8FD9\u662F\u83B7\u53D6\u6570\u636E const value = useContext(MyContext);
        \u63D0\u4F9B\u6570\u636E\uFF1AContext.Provider
useContext
    1. \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u83B7\u53D6Context\u63D0\u4F9B\u7684\u6570\u636E
    2. \u7528\u6CD5\uFF1A
        1. \u521B\u5EFAContext,\u63D0\u4F9B\u6570\u636E
            Let Mycontext = React.createContext() //\u5199\u5728export\u524D\u9762
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Provider</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{{}}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Provider</span><span class="token punctuation">&gt;</span></span>
export {Mycontext}
        2. \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u8C03\u7528useContext\u83B7\u53D6\u6570\u636E
            function Son(){
                let value = useContext(Mycontext);
            }
        3. \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528Consumer\u83B7\u53D6\u6570\u636E
            function Son (){
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
                {
                   (value)=&gt;{
                        console.log(value);
                        
                    }
                }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
            }

4. Hook \u89C4\u5219
    1. \u53EA\u5728\u6700\u9876\u5C42\u4F7F\u7528 Hook,\u4E0D\u8981\u5728\u5FAA\u73AF\uFF0C\u6761\u4EF6\u6216\u5D4C\u5957\u51FD\u6570\u4E2D\u8C03\u7528 Hook
    2. \u53EA\u5728 React \u51FD\u6570\u4E2D\u8C03\u7528 Hook
Day9
<span class="token title important"><span class="token punctuation">#</span> \u65B0\u77E5\u8BC6\u70B9</span>
1.  useReducer \u662F\u529F\u80FD\u66F4\u5F3A\u5927\u7684&quot;useState&quot;
    1. \u8BED\u6CD5:
        const [state, dispatch] = useReducer(reducer, initialArg, init)
        2. dispatch\uFF1A\u662FuseReducer\u4EA7\u751F\u7684\u4E00\u4E2A\u64CD\u4F5C\u65B9\u6CD5
            dispatch\u6267\u884C\u65F6\u9700\u8981\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61 {type:&#39;ADD&#39;,payload:&#39;data&#39;}
        3. reducer\uFF1A\u63D0\u4F9B\u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u7684\u65B9\u6848
            function reducer(state,action){
                switch(action.type){
                    case &#39;ADD&#39;:
                        state = state + 1;
                        return state;
                    default:
                        return state;
                }
            }
    3. \u4F7F\u7528\uFF1A
        \u76F4\u63A5\u8C03\u7528\u53D8\u91CF\u540D
    4. \u4FEE\u6539\uFF1A
        \u8C03\u7528dispatch\u65B9\u6CD5

<span class="token title important"><span class="token punctuation">#</span> \u6CE8\u610F\uFF1A&lt;React.StrictMode&gt;\u4E25\u683C\u6A21\u5F0F</span>
- \u68C0\u6D4B\u610F\u5916\u7684\u526F\u4F5C\u7528
    \u4E25\u683C\u6A21\u5F0F\u4E0D\u80FD\u81EA\u52A8\u68C0\u6D4B\u5230\u4F60\u7684\u526F\u4F5C\u7528\uFF0C\u4F46\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u53D1\u73B0\u5B83\u4EEC\uFF0C\u4F7F\u5B83\u4EEC\u66F4\u5177\u786E\u5B9A\u6027\u3002\u901A\u8FC7\u6545\u610F\u91CD\u590D\u8C03\u7528\u4EE5\u4E0B\u51FD\u6570\u6765\u5B9E\u73B0\u7684\u8BE5\u64CD\u4F5C\uFF1A
    class \u7EC4\u4EF6\u7684 constructor\uFF0Crender \u4EE5\u53CA shouldComponentUpdate \u65B9\u6CD5
    class \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5 getDerivedStateFromProps
    \u51FD\u6570\u7EC4\u4EF6\u4F53
    \u72B6\u6001\u66F4\u65B0\u51FD\u6570 (\u5373 setState \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF09
    \u51FD\u6570\u7EC4\u4EF6\u901A\u8FC7\u4F7F\u7528 useState\uFF0CuseMemo \u6216\u8005 useReducer
\u8FD9\u4EC5\u9002\u7528\u4E8E\u5F00\u53D1\u6A21\u5F0F\u3002\u751F\u4EA7\u6A21\u5F0F\u4E0B\u751F\u547D\u5468\u671F\u4E0D\u4F1A\u88AB\u8C03\u7528\u4E24\u6B21\u3002

2. useMemo
    1. \u628A\u201C\u521B\u5EFA\u201D\u51FD\u6570\u548C\u4F9D\u8D56\u9879\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 useMemo\uFF0C\u5B83\u4EC5\u4F1A\u5728\u67D0\u4E2A\u4F9D\u8D56\u9879\u6539\u53D8\u65F6\u624D\u91CD\u65B0\u8BA1\u7B97 memoized \u503C\u3002\u8FD9\u79CD\u4F18\u5316\u6709\u52A9\u4E8E\u907F\u514D\u5728\u6BCF\u6B21\u6E32\u67D3\u65F6\u90FD\u8FDB\u884C\u9AD8\u5F00\u9500\u7684\u8BA1\u7B97
    2. const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);

3. useRef
    1. useRef \u8FD4\u56DE\u4E00\u4E2A\u53EF\u53D8\u7684 ref \u5BF9\u8C61\uFF0C\u5176 .current \u5C5E\u6027\u88AB\u521D\u59CB\u5316\u4E3A\u4F20\u5165\u7684\u53C2\u6570\uFF08initialValue\uFF09\u3002\u8FD4\u56DE\u7684 ref \u5BF9\u8C61\u5728\u7EC4\u4EF6\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u5185\u4FDD\u6301\u4E0D\u53D8\u3002
    2. \u7528\u6CD5\uFF1A
         1. \u521B\u5EFAref
		2. \u8BED\u6CD5\uFF1Aconst myref = useRef()
		3. \u4F7F\u7528
        		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{myref}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		4. refs\u8F6C\u53D1
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{myref}</span> <span class="token punctuation">/&gt;</span></span>
        Son\u7EC4\u4EF6\u521B\u5EFA\u65F6\uFF0C\u9700\u8981\u4F7F\u7528 React.forwardRef()\u521B\u5EFA
            React.forwardRef((props,ref)=&gt;{
                return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{ref}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            })


4. \u81EA\u5B9A\u4E49hook
    1. \u63D0\u53D6\u7EC4\u4EF6\u4E2D\u7684\u4E1A\u52A1\u903B\u8F91
    2. \u8BED\u6CD5\uFF1A
        \u5FC5\u987B\u4EE5 &#39;use&#39; \u5F00\u5934\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6Ehook
        function useXx(){
            const [list,setList] = useState([]);
            useEffect(()=&gt;{
            },[])
            return list
        }
    3. \u4F7F\u7528\uFF1A
        \u5728\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u8C03\u7528\u5373\u53EF
        \u6CE8\u610F\uFF1A1. \u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528
              2. \u4E0D\u80FD\u653E\u5728 if,for,\u666E\u901A\u51FD\u6570\u4E2D\u8C03\u7528



Day10 redux
1. \u5728react\u4E2D\u6570\u636E\u4F20\u9012\u65B9\u5F0F\u6709\u51E0\u79CD?
    1. \u7236\u4F20\u5B50\uFF1A props
    2. \u5B50\u4F20\u7236\uFF1A \u4F7F\u7528\u4E8B\u4EF6
    3. Context\uFF1A\u63D0\u4F9B\u516C\u5171\u6570\u636E

2. Context\u7684\u7F3A\u70B9\uFF1A
    1. \u516C\u5171\u6570\u636E\u7279\u522B\u591A
    2. \u7EC4\u4EF6\u4E5F\u7279\u522B\u591A\u65F6
    \u5F53\u4E0A\u9762\u4E24\u79CD\u60C5\u51B5\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u6700\u597D\u628AContext\u5B9A\u4E49\u5728App.js\u7EC4\u4EF6\u4E0A
    \u4F46\u662F\u90FD\u5B9A\u4E49App.js\u4E0A\uFF0C\u4F1A\u9020\u6210App.js\u7EC4\u4EF6\u4E0A\u591A\u5F88\u591A\u5BF9App\u7EC4\u4EF6\u6765\u8BF4\u6CA1\u7528\u7684\u6570\u636E
    \u6240\u4EE5\u4F1A\u6709\u9700\u6C42\uFF1A\u628A\u516C\u5171\u6570\u636E\u63D0\u53D6\u51FA\u53BB\uFF0C\u5355\u72EC\u653E\u5728\u4E00\u4E2A\u5B58\u50A8\u7A7A\u95F4\u4E2D\uFF0C\u4F7F\u7528\u6570\u636E\u65F6\u5C31\u4ECE\u8FD9\u4E2A\u7A7A\u95F4\u4E2D\u53D6\uFF0C\u4FEE\u6539\u65F6\u5C31\u4FEE\u6539\u8FD9\u4E2A\u7A7A\u95F4\u4E2D\u7684\u6570\u636E\u3002
3. redux
    1. \u4F5C\u7528\uFF1A\u628A\u516C\u5171\u6570\u636E\u63D0\u53D6\u51FA\u53BB\uFF0C\u5355\u72EC\u653E\u5728\u4E00\u4E2A\u5B58\u50A8\u7A7A\u95F4\u4E2D\uFF0C\u4F7F\u7528\u6570\u636E\u65F6\u5C31\u4ECE\u8FD9\u4E2A\u7A7A\u95F4\u4E2D\u53D6\uFF0C\u4FEE\u6539\u65F6\u5C31\u4FEE\u6539\u8FD9\u4E2A\u7A7A\u95F4\u4E2D\u7684\u6570\u636E\u3002\u5BF9\u6570\u636E\u64CD\u4F5C\u65F6\uFF0Credux\u63D0\u4F9B\u7684\u5BF9\u5E94\u7684\u65B9\u6CD5
    2. \u5B89\u88C5\uFF1Anpm install --save redux
       \u8C03\u8BD5\u5DE5\u5177\uFF1Anpm install --save-dev redux-devtools
    3. \u4E09\u5927\u539F\u5219
        1.\u5355\u4E00\u6570\u636E\u6E90
            \u6574\u4E2A\u5E94\u7528\u7684 state \u88AB\u50A8\u5B58\u5728\u4E00\u68F5object tree\u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2A object tree \u53EA\u5B58\u5728\u4E8E\u552F\u4E00\u4E00\u4E2A store \u4E2D\u3002
        2.\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539
            \u5982\u4F55\u6539\u53D8 state tree \uFF0C\u4F60\u9700\u8981\u7F16\u5199 reducers\u3002\u5B83\u63A5\u6536\u5148\u524D\u7684 state \u548C action\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684 state
        3.State \u662F\u53EA\u8BFB\u7684
       \u552F\u4E00\u6539\u53D8 state \u7684\u65B9\u6CD5\u5C31\u662F\u89E6\u53D1 action\uFF0Caction \u662F\u4E00\u4E2A\u7528\u4E8E\u63CF\u8FF0\u5DF2\u53D1\u751F\u4E8B\u4EF6\u7684\u666E\u901A\u5BF9\u8C61\u3002\u6267\u884C\u4E0A\u9762\u7EAF\u51FD\u6570\u3002

    4. \u6838\u5FC3 store 
        1. store\u662F\u5B58\u50A8\u6570\u636E\u7684\u7A7A\u95F4
        2. \u521B\u5EFA\u5B58\u50A8\u7A7A\u95F4\u8BED\u6CD5\uFF1A
            import {createStore} from &#39;redux&#39;
            const store = createStore(reducer,init)
        3. store\u4E0A\u4F1A\u63D0\u4F9B\u64CD\u4F5C\u6570\u636E\u7684\u65B9\u6CD5
            1. \u83B7\u53D6\u6570\u636E getState()
            2. \u4FEE\u6539\u6570\u636E dispatch()
            3. \u76D1\u542C\u65B9\u6CD5 subscribe()

    5. \u6838\u5FC32 reducer
        1. reducer \u63D0\u4F9B\u53EF\u9884\u6D4B\u5316\u7684\u72B6\u6001\u7BA1\u7406
        2. reducer \u5FC5\u987B\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570
            function reducer(state,action){
                switch(action.type){
                    case &#39;ADD&#39;:
                        state = state + 1;
                        return state;
                    default:
                        return state
                }
            }
        3. \u8FD9\u4E2Areducer\u662F\u653E\u5728 createStore \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F4D\u7F6E

    6. \u6838\u5FC33 action
        1. \u5BF9store\u6570\u636E\u7684\u5177\u4F53\u64CD\u4F5C
        2. \u683C\u5F0F\uFF1A
            1. \u5BF9\u8C61\u5F62\u5F0F
                {
                    type:&#39;ADD&#39;,
                    payload:&#39;xxxxx&#39;
                }
            2. \u51FD\u6570\u5F62\u5F0F
                function XX(yy){
                    return {
                        type:&#39;ADD&#39;,
                        payload:yy
                    }
                }
        3. action\u4E5F\u5FC5\u987B\u662F\u6CA1\u6709\u526F\u4F5C\u7528\u7684(\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5B9A\u65F6\u5668)
        4. \u89E6\u53D1action\u6267\u884C\uFF1A
            \u8C03\u7528store\u4E0A\u7684dispatch\u65B9\u6CD5\uFF0C\u628Aaction\u653E\u5728dispatch\u4E2D

    7. reducers\u5408\u5E76
        1. \u5982\u679C\u4E00\u4E2Astore\u4E2D\u8981\u5B58\u50A8\u591A\u4E2A\u516C\u5171\u6570\u636E\uFF0C\u8FD9\u4E9B\u516C\u5171\u6570\u636E\u7684\u64CD\u4F5C\u53C8\u662F\u4E0D\u4E00\u6837\u7684
        2. \u9700\u8981\u521B\u5EFA\u591A\u4E2Areducer,\u6BCF\u4E2Areducer\u4E2D\u90FD\u4FDD\u5B58\u76F8\u5173\u7684\u4E00\u7EC4\u6570\u636E
        3. createStore(reducer)\u4E2D\u53EA\u6709\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F4D\u7F6E\u662F\u653Ereducer\u7684\uFF0C\u800C\u4E14\u53EA\u80FD\u653E\u4E00\u4E2A
        4. redux\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5\uFF0CcombineReducers \uFF0C\u4F5C\u7528\u5C31\u662F\u628A\u591A\u4E2Areducer\u5408\u5E76\u6210\u4E00\u4E2A
        5. combineReducers\u8BED\u6CD5\uFF1A
            import {combineReducers} from &#39;redux&#39;
            const all = combineReducers({
                reducer1:reducer1,
                reducerA
            })
            \u8FD4\u56DE\u503C\uFF1Aall \uFF0C\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570
        6. \u628A\u5408\u5E76\u540E\u7684all\u653E\u5230 createStore(all),
            1. store\u4E2D\u5C31\u6709\u591A\u4E2Areducer\u4E2D\u7684\u6570\u636E\u4E86
            2. store.dispatch()\u80FD\u89E6\u53D1\u6240\u6709reducer\u4E2D\u7684\u529F\u80FD
    8. \u652F\u6301\u5F02\u6B65action
        1. \u9700\u8981\u4F7F\u7528\u4E2D\u95F4\u4EF6 \uFF1A redux-thunk
        2. \u5B89\u88C5\uFF1Anpm i redux-thunk -S
        3. \u914D\u7F6Estore\u652F\u6301\u4E2D\u95F4\u4EF6
            import {applyMiddle} from &#39;redux&#39;
            import thunk from &#39;redux-thunk&#39;
            createStore(reducer,applyMiddle(thunk))
        4. \u5B9A\u4E49\u5F02\u6B65action
            const yibu=(url,data)=&gt;(dispatch, getState)=&gt;{
                fetch(url).then(data=&gt;data.json()).then(data=&gt;{
                    dispatch({
                        type:&#39;ADD&#39;,
                        payload:data
                    })
                })
            }
        
        5. \u6267\u884C\u5F02\u6B65action
            dispatch(yibu())
        
    9. compose
        1. \u5408\u5E76applyMiddleware\u548C\u5176\u4ED6\u7684\u529F\u80FD
        2. \u8BA9\u6D4F\u89C8\u5668\u63D2\u4EF6\u548C\u4E2D\u95F4\u4EF6\u540C\u65F6\u5DE5\u4F5C
const store = createStore(all,window.<span class="token bold"><span class="token punctuation">__</span><span class="token content">REDUX_DEVTOOLS_EXTENSION</span><span class="token punctuation">__</span></span> &amp;&amp; window.<span class="token bold"><span class="token punctuation">__</span><span class="token content">REDUX_DEVTOOLS_EXTENSION</span><span class="token punctuation">__</span></span>())
         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
 const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,logger)));

3. react\u5173\u8054redux
    1. \u5B89\u88C5\u4E00\u4E2A\u5E93\uFF0Creact-redux
        npm i react-redux -S
    2. \u4F7F\u7528 react-redux \u628Areact\u9879\u76EE\u548Credux\u5173\u8054\u8D77\u6765
        import {Provider } from &#39;react-redux&#39;
        import store from &#39;redux3.js&#39;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">store</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{store}</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">&gt;</span></span>
    3. \u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528redux\u6570\u636E
        import {connect} from &#39;react-redux&#39;//\u5F15\u5165\u9AD8\u9636\u7EC4\u4EF6
        export default connect(mapStateToProps,mapDispatchToprops)(Son)
Connect\u91CC\u9762\u662F\u4E24\u4E2A\u51FD\u6570\u53EF\u5B9A\u4E49
      1. \u628Astore\u7684\u5B58\u50A8\u7684\u6570\u636E\u653E\u5230\u7EC4\u4EF6\u7684props\u4E0A
         function mapStateToProps(state){
 	 	console.log(&#39;son&#39;,state); 
 		return {user:state}
}
2.\u628Astore\u4E0A\u7684dispatch\u65B9\u6CD5\u7ED9\u7EC4\u4EF6\u4F7F\u7528
function mapDispatchToprops(dispatch){
    return {
        changeuser:(data)=&gt;dispatch({
            type:&#39;ADD&#39;,
            payload:&#39;\u82B1\u91CC\u80E1\u54E8&#39;
        }),
        deldel:(data)=&gt;dispatch({
            type:&#39;DEL&#39;

        })
}
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br></div></div><p></p>`,57);function e(t,l){return p}var o=s(a,[["render",e]]);export{o as default};
