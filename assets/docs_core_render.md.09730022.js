import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"Render","description":"Transform React components into HTML email templates.","frontmatter":{"title":"Render","sidebarTitle":"Render","description":"Transform React components into HTML email templates.","og:image":"https://react.email/static/covers/render.png"},"headers":[],"relativePath":"../../../docs/core/render.md","filePath":"../../../docs/core/render.md"}'),l={name:"../../../docs/core/render.md"},o=e(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">pnpm</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">add</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">@jsx-email/render</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># We recommend pnpm - https://pnpm.io</span></span>
<span class="line"><span style="color:#6A9955;"># But npm and yarn are supported</span></span>
<span class="line"><span style="color:#6A9955;"># npm add @jsx-email/render -D</span></span>
<span class="line"><span style="color:#6A9955;"># yarn add @jsx-email/render -D</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7EB233;">pnpm</span><span style="color:#002339;"> </span><span style="color:#A44185;">add</span><span style="color:#002339;"> </span><span style="color:#A44185;">@jsx-email/render</span><span style="color:#002339;"> </span><span style="color:#174781;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#357B42;font-style:italic;"># We recommend pnpm - https://pnpm.io</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;"># But npm and yarn are supported</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;"># npm add @jsx-email/render -D</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;"># yarn add @jsx-email/render -D</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Convert React components into a HTML string.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">MyTemplate</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;../components/MyTemplate&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">render</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/render&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">html</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">render</span><span style="color:#E6E6E6;">(</span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">MyTemplate</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">firstName</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Bruce&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">lastName</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Wayne&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#808080;">/&gt;</span><span style="color:#E6E6E6;">);</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">MyTemplate</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;../components/MyTemplate&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">render</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/render&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">html</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#7EB233;">render</span><span style="color:#002339;">(&lt;</span><span style="color:#DC3EB7;">MyTemplate</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">firstName</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;Bruce&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">lastName</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;Wayne&quot;</span><span style="color:#002339;"> /&gt;);</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="pretty" tabindex="-1"><code>pretty</code> <a class="header-anchor" href="#pretty" aria-label="Permalink to &quot;\`pretty\`&quot;">​</a></h3><p>Type: <code>boolean</code><br> Default: \`\`<br> Required: <code>false</code></p><p>Beautify HTML output</p><h3 id="plaintext" tabindex="-1"><code>plainText</code> <a class="header-anchor" href="#plaintext" aria-label="Permalink to &quot;\`plainText\`&quot;">​</a></h3><p>Type: <code>boolean</code><br> Default: \`\`<br> Required: <code>false</code></p><p>Generate plain text version</p>`,12),p=[o];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
