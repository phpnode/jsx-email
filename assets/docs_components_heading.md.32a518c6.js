import{_ as a,o as s,c as e,Q as o}from"./chunks/framework.33544f09.js";const u=JSON.parse('{"title":"Heading","description":"A block of heading text.","frontmatter":{"title":"Heading","sidebarTitle":"Heading","description":"A block of heading text.","og:image":"https://react.email/static/covers/heading.png","icon":"h1"},"headers":[],"relativePath":"../../../docs/components/heading.md","filePath":"../../../docs/components/heading.md"}'),n={name:"../../../docs/components/heading.md"},l=o('<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>Install component from your command line.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-06pEO" id="tab-8MFOynx" checked="checked"><label for="tab-8MFOynx">pnpm</label><input type="radio" name="group-06pEO" id="tab-hLr_4Tr"><label for="tab-hLr_4Tr">npm</label><input type="radio" name="group-06pEO" id="tab-vJtAMsW"><label for="tab-vJtAMsW">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add @jsx-email/heading</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add @jsx-email/heading</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add @jsx-email/heading</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add @jsx-email/heading</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add @jsx-email/heading</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add @jsx-email/heading</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Heading</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/heading&#39;</span><span style="color:#E6E6E6;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>\n<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>\n<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Heading</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">as</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;h2&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">Lorem ipsum</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Heading</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#E6E6E6;">  );</span></span>\n<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Heading</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/heading&#39;</span><span style="color:#002339;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>\n<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>\n<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Heading</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">as</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;h2&quot;</span><span style="color:#002339;">&gt;Lorem ipsum&lt;/</span><span style="color:#DC3EB7;">Heading</span><span style="color:#002339;">&gt;</span></span>\n<span class="line"><span style="color:#002339;">  );</span></span>\n<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><h3 id="as" tabindex="-1"><code>as</code> <a class="header-anchor" href="#as" aria-label="Permalink to &quot;`as`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>default=&quot;h1&quot;&gt; Render component as <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code> or <code>h6</code>.</p><h3 id="m" tabindex="-1"><code>m</code> <a class="header-anchor" href="#m" aria-label="Permalink to &quot;`m`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin</code> CSS property.</p><h3 id="mx" tabindex="-1"><code>mx</code> <a class="header-anchor" href="#mx" aria-label="Permalink to &quot;`mx`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-left</code> and <code>margin-right</code> CSS properties.</p><h3 id="my" tabindex="-1"><code>my</code> <a class="header-anchor" href="#my" aria-label="Permalink to &quot;`my`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-top</code> and <code>margin-bottom</code> CSS properties.</p><h3 id="mt" tabindex="-1"><code>mt</code> <a class="header-anchor" href="#mt" aria-label="Permalink to &quot;`mt`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-top</code> CSS property.</p><h3 id="mr" tabindex="-1"><code>mr</code> <a class="header-anchor" href="#mr" aria-label="Permalink to &quot;`mr`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-right</code> CSS property.</p><h3 id="mb" tabindex="-1"><code>mb</code> <a class="header-anchor" href="#mb" aria-label="Permalink to &quot;`mb`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-bottom</code> CSS property.</p><h3 id="ml" tabindex="-1"><code>ml</code> <a class="header-anchor" href="#ml" aria-label="Permalink to &quot;`ml`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: ``<br> Required: <code>false</code></p><p>A shortcut for <code>margin-left</code> CSS property.</p>',31),p=[l];function c(t,r,d,i,h,m){return s(),e("div",null,p)}const g=a(n,[["render",c]]);export{u as __pageData,g as default};
