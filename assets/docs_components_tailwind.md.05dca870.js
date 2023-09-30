import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.33544f09.js";const D=JSON.parse('{"title":"Tailwind","description":"A React component to wrap emails with Tailwind CSS.","frontmatter":{"title":"Tailwind","sidebarTitle":"Tailwind","description":"A React component to wrap emails with Tailwind CSS.","og:image":"https://react.email/static/covers/tailwind.png","icon":"wind"},"headers":[],"relativePath":"../../../docs/components/tailwind.md","filePath":"../../../docs/components/tailwind.md"}'),p={name:"../../../docs/components/tailwind.md"},o=l(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>Install component from your command line.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5jwot" id="tab-qbKMNBa" checked="checked"><label for="tab-qbKMNBa">pnpm</label><input type="radio" name="group-5jwot" id="tab-oGkBWcZ"><label for="tab-oGkBWcZ">npm</label><input type="radio" name="group-5jwot" id="tab-QkZBphr"><label for="tab-QkZBphr">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add @jsx-email/tailwind</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add @jsx-email/tailwind</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add @jsx-email/tailwind</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add @jsx-email/tailwind</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add @jsx-email/tailwind</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add @jsx-email/tailwind</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component around your email body content.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Tailwind</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/tailwind&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Tailwind</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#9CDCFE;">config</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">extend:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">colors:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">              </span><span style="color:#9CDCFE;">brand:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#007291&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span><span style="color:#569CD6;">}</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#9CDCFE;">className</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bg-brand px-3 py-2 font-medium leading-4 text-white&quot;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Tailwind</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Tailwind</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/tailwind&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Tailwind</span></span>
<span class="line"><span style="color:#002339;">      </span><span style="color:#DF8618;font-style:italic;">config</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{</span></span>
<span class="line"><span style="color:#002339;">        theme: {</span></span>
<span class="line"><span style="color:#002339;">          extend: {</span></span>
<span class="line"><span style="color:#002339;">            colors: {</span></span>
<span class="line"><span style="color:#002339;">              brand: </span><span style="color:#A44185;">&#39;#007291&#39;</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#002339;">            },</span></span>
<span class="line"><span style="color:#002339;">          },</span></span>
<span class="line"><span style="color:#002339;">        },</span></span>
<span class="line"><span style="color:#002339;">      }}</span></span>
<span class="line"><span style="color:#002339;">    &gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Button</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#DF8618;font-style:italic;">className</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;bg-brand px-3 py-2 font-medium leading-4 text-white&quot;</span></span>
<span class="line"><span style="color:#002339;">      &gt;</span></span>
<span class="line"><span style="color:#002339;">        Click me</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Tailwind</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note: Most email clients are style-limited and some styles may not work.</p></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><h3 id="config" tabindex="-1"><code>config</code> <a class="header-anchor" href="#config" aria-label="Permalink to &quot;\`config\`&quot;">​</a></h3><p>Type: <code>object</code><br> Default: \`\`<br> Required: <code>false</code></p><p>Customize the default theme for your project with the available properties in <a href="https://tailwindcss.com/docs/theme" target="_blank" rel="noreferrer">Tailwind docs</a>.</p>`,11),e=[o];function t(c,r,i,y,d,E){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
