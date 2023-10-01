import{_ as p,o as e,c as t,k as s,a as o,t as n,Q as l}from"./chunks/framework.fd95ed2e.js";const L=JSON.parse('{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","frontmatter":{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","slug":"button"},"headers":[],"relativePath":"../../../docs/components/button.md","filePath":"../../../docs/components/button.md"}'),c={name:"../../../docs/components/button.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[o("Semantics: Quite often in the email world we talk about buttons when we actually mean links. Behind the scenes this component is a "),s("code",null,"<a>"),o(" element which is styled like a "),s("code",null,"<button>"),o(" element.")])],-1),d=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),E=s("p",null,"Install component from your command line.",-1),h={class:"vp-code-group vp-adaptive-theme"},u=l('<div class="tabs"><input type="radio" name="group-Ur1xk" id="tab-5ScS225" checked="checked"><label for="tab-5ScS225">pnpm</label><input type="radio" name="group-Ur1xk" id="tab-rjYQSZF"><label for="tab-rjYQSZF">npm</label><input type="radio" name="group-Ur1xk" id="tab-0epN9qp"><label for="tab-0epN9qp">yarn</label></div>',1),m={class:"blocks"},_={class:"language-console vp-adaptive-theme active"},C=s("button",{title:"Copy Code",class:"copy"},null,-1),D=s("span",{class:"lang"},"console",-1),g={class:"shiki slack-dark vp-code-dark"},k={class:"line"},v={style:{color:"#E6E6E6"}},b={class:"shiki slack-ochin vp-code-light"},f={class:"line"},B={style:{color:"#002339"}},F={class:"language-console vp-adaptive-theme"},P=s("button",{title:"Copy Code",class:"copy"},null,-1),x=s("span",{class:"lang"},"console",-1),A={class:"shiki slack-dark vp-code-dark"},S={class:"line"},T={style:{color:"#E6E6E6"}},$={class:"shiki slack-ochin vp-code-light"},j={class:"line"},q={style:{color:"#002339"}},I={class:"language-console vp-adaptive-theme"},R=s("button",{title:"Copy Code",class:"copy"},null,-1),w=s("span",{class:"lang"},"console",-1),N={class:"shiki slack-dark vp-code-dark"},V={class:"line"},X={style:{color:"#E6E6E6"}},Y={class:"shiki slack-ochin vp-code-light"},U={class:"line"},Q={style:{color:"#002339"}},J=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">      Click me</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#6A9955;">// extends primitive props from &lt;a&gt; tag</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">RootProps</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">React</span><span style="color:#E6E6E6;">.</span><span style="color:#4EC9B0;">ComponentPropsWithoutRef</span><span style="color:#E6E6E6;">&lt;</span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#E6E6E6;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">interface</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">ButtonProps</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">extends</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">RootProps</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">pX</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">number</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">pY</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">number</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#357B42;font-style:italic;">// extends primitive props from &lt;a&gt; tag</span></span>
<span class="line"><span style="color:#0991B6;">type</span><span style="color:#002339;"> </span><span style="color:#0444AC;">RootProps</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#0444AC;">React</span><span style="color:#002339;">.</span><span style="color:#0444AC;">ComponentPropsWithoutRef</span><span style="color:#002339;">&lt;</span><span style="color:#A44185;">&#39;a&#39;</span><span style="color:#002339;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B30D0;">export</span><span style="color:#002339;"> </span><span style="color:#0991B6;">interface</span><span style="color:#002339;"> </span><span style="color:#0444AC;">ButtonProps</span><span style="color:#002339;"> </span><span style="color:#DA5221;">extends</span><span style="color:#002339;"> </span><span style="color:#B02767;">RootProps</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">pX</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">number</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">pY</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">number</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">href: </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">href: </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>The url to navigate to when the button is clicked.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">target</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>Specifies the value of the <code>&quot;target&quot;</code> attribute for the button <code>target</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">pX</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">number</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">pX</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">number</span><span style="color:#002339;">;</span></span></code></pre></div><p>The horizontal padding applied to the button.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">pY</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">number</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">pY</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">number</span><span style="color:#002339;">;</span></span></code></pre></div><p>The vertical padding applied to the button.</p><p>In addition to the custom props above, this component expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;a&#39;&gt;</code>.</p>`,14);function W(a,Z,z,O,G,H){return e(),t("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),y,d,E,s("div",h,[u,s("div",m,[s("div",_,[C,D,s("pre",g,[s("code",null,[s("span",k,[s("span",v,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",b,[s("code",null,[s("span",f,[s("span",B,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",F,[P,x,s("pre",A,[s("code",null,[s("span",S,[s("span",T,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",$,[s("code",null,[s("span",j,[s("span",q,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",I,[R,w,s("pre",N,[s("code",null,[s("span",V,[s("span",X,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",Y,[s("code",null,[s("span",U,[s("span",Q,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])])])])]),J])}const M=p(c,[["render",W]]);export{L as __pageData,M as default};
