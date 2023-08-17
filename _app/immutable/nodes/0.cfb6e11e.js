import{s as J,n as Z,c as X,d as Y,u as ee,g as te,e as se}from"../chunks/scheduler.b0c1c2c3.js";import{S as P,i as Q,g as d,s as H,x as k,h,j as g,y as A,c as x,z as S,f as v,k as t,a as W,A as r,r as ae,u as re,v as le,d as q,t as F,w as ne}from"../chunks/index.5d7b83de.js";import{d as ie,e as G}from"../chunks/singletons.225f4f39.js";const oe=()=>{const n=ie;return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},updated:n.updated}},ue={subscribe(n){return oe().page.subscribe(n)}},ce=""+new URL("../assets/svelte-logo.87df40b8.svg",import.meta.url).href,ve=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function pe(n){let e,l,f=`<a href="https://kit.svelte.dev" class="svelte-1u9z1tp"><img src="${ce}" alt="SvelteKit" class="svelte-1u9z1tp"/></a>`,u,i,o,b,m,p,a,s,c="Home",w,j,$,z,R="About",T,B,L,y,D,C,V=`<a href="https://github.com/sveltejs/kit" class="svelte-1u9z1tp"><img src="${ve}" alt="GitHub" class="svelte-1u9z1tp"/></a>`;return{c(){e=d("header"),l=d("div"),l.innerHTML=f,u=H(),i=d("nav"),o=k("svg"),b=k("path"),m=H(),p=d("ul"),a=d("li"),s=d("a"),s.textContent=c,j=H(),$=d("li"),z=d("a"),z.textContent=R,B=H(),L=k("svg"),y=k("path"),D=H(),C=d("div"),C.innerHTML=V,this.h()},l(E){e=h(E,"HEADER",{class:!0});var _=g(e);l=h(_,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-1jb641n"&&(l.innerHTML=f),u=x(_),i=h(_,"NAV",{class:!0});var M=g(i);o=S(M,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=g(o);b=S(U,"path",{d:!0,class:!0}),g(b).forEach(v),U.forEach(v),m=x(M),p=h(M,"UL",{class:!0});var I=g(p);a=h(I,"LI",{"aria-current":!0,class:!0});var K=g(a);s=h(K,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(s)!=="svelte-1e6p6b9"&&(s.textContent=c),K.forEach(v),j=x(I),$=h(I,"LI",{"aria-current":!0,class:!0});var N=g($);z=h(N,"A",{href:!0,class:!0,"data-svelte-h":!0}),A(z)!=="svelte-2hnrj4"&&(z.textContent=R),N.forEach(v),I.forEach(v),B=x(M),L=S(M,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var O=g(L);y=S(O,"path",{d:!0,class:!0}),g(y).forEach(v),O.forEach(v),M.forEach(v),D=x(_),C=h(_,"DIV",{class:!0,"data-svelte-h":!0}),A(C)!=="svelte-1gilmbv"&&(C.innerHTML=V),_.forEach(v),this.h()},h(){t(l,"class","corner svelte-1u9z1tp"),t(b,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(b,"class","svelte-1u9z1tp"),t(o,"viewBox","0 0 2 3"),t(o,"aria-hidden","true"),t(o,"class","svelte-1u9z1tp"),t(s,"href",G+"/"),t(s,"class","svelte-1u9z1tp"),t(a,"aria-current",w=n[0].url.pathname==="/"?"page":void 0),t(a,"class","svelte-1u9z1tp"),t(z,"href",G+"/about"),t(z,"class","svelte-1u9z1tp"),t($,"aria-current",T=n[0].url.pathname==="/about"?"page":void 0),t($,"class","svelte-1u9z1tp"),t(p,"class","svelte-1u9z1tp"),t(y,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(y,"class","svelte-1u9z1tp"),t(L,"viewBox","0 0 2 3"),t(L,"aria-hidden","true"),t(L,"class","svelte-1u9z1tp"),t(i,"class","svelte-1u9z1tp"),t(C,"class","corner svelte-1u9z1tp"),t(e,"class","svelte-1u9z1tp")},m(E,_){W(E,e,_),r(e,l),r(e,u),r(e,i),r(i,o),r(o,b),r(i,m),r(i,p),r(p,a),r(a,s),r(p,j),r(p,$),r($,z),r(i,B),r(i,L),r(L,y),r(e,D),r(e,C)},p(E,[_]){_&1&&w!==(w=E[0].url.pathname==="/"?"page":void 0)&&t(a,"aria-current",w),_&1&&T!==(T=E[0].url.pathname==="/about"?"page":void 0)&&t($,"aria-current",T)},i:Z,o:Z,d(E){E&&v(e)}}}function de(n,e,l){let f;return X(n,ue,u=>l(0,f=u)),[f]}class he extends P{constructor(e){super(),Q(this,e,de,pe,J,{})}}function fe(n){let e,l,f,u,i,o,b='<p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p>',m;l=new he({});const p=n[1].default,a=Y(p,n,n[0],null);return{c(){e=d("div"),ae(l.$$.fragment),f=H(),u=d("main"),a&&a.c(),i=H(),o=d("footer"),o.innerHTML=b,this.h()},l(s){e=h(s,"DIV",{class:!0});var c=g(e);re(l.$$.fragment,c),f=x(c),u=h(c,"MAIN",{class:!0});var w=g(u);a&&a.l(w),w.forEach(v),i=x(c),o=h(c,"FOOTER",{class:!0,"data-svelte-h":!0}),A(o)!=="svelte-1dlfr5"&&(o.innerHTML=b),c.forEach(v),this.h()},h(){t(u,"class","svelte-8o1gnw"),t(o,"class","svelte-8o1gnw"),t(e,"class","app svelte-8o1gnw")},m(s,c){W(s,e,c),le(l,e,null),r(e,f),r(e,u),a&&a.m(u,null),r(e,i),r(e,o),m=!0},p(s,[c]){a&&a.p&&(!m||c&1)&&ee(a,p,s,s[0],m?se(p,s[0],c,null):te(s[0]),null)},i(s){m||(q(l.$$.fragment,s),q(a,s),m=!0)},o(s){F(l.$$.fragment,s),F(a,s),m=!1},d(s){s&&v(e),ne(l),a&&a.d(s)}}}function _e(n,e,l){let{$$slots:f={},$$scope:u}=e;return n.$$set=i=>{"$$scope"in i&&l(0,u=i.$$scope)},[u,f]}class $e extends P{constructor(e){super(),Q(this,e,_e,fe,J,{})}}export{$e as component};