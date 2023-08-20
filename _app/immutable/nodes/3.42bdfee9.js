import{i as Ft,f as Gt,h as at,j as Jt,s as Kt,n as Y,r as Qt}from"../chunks/scheduler.4b895fe1.js";import{p as Rt,t as Wt,b as Xt,d as Yt,S as Zt,i as $t,g as r,s as m,m as x,h as u,x as w,c as k,j as b,n as g,f as o,k as v,a as p,A as c,B as wt,o as Mt,C as te}from"../chunks/index.de1330d1.js";function ee(l,t){const n=t.token={};function e(s,i,K,z){if(t.token!==n)return;t.resolved=z;let C=t.ctx;K!==void 0&&(C=C.slice(),C[K]=z);const B=s&&(t.current=s)(C);let Z=!1;t.block&&(t.blocks?t.blocks.forEach((A,L)=>{L!==i&&A&&(Rt(),Wt(A,1,1,()=>{t.blocks[L]===A&&(t.blocks[L]=null)}),Xt())}):t.block.d(1),B.c(),Yt(B,1),B.m(t.mount(),t.anchor),Z=!0),t.block=B,t.blocks&&(t.blocks[i]=B),Z&&Jt()}if(Ft(l)){const s=Gt();if(l.then(i=>{at(s),e(t.then,1,t.value,i),at(null)},i=>{if(at(s),e(t.catch,2,t.error,i),at(null),!t.hasCatch)throw i}),t.current!==t.pending)return e(t.pending,0),!0}else{if(t.current!==t.then)return e(t.then,1,t.value,l),!0;t.resolved=l}}function le(l,t,n){const e=t.slice(),{resolved:s}=l;l.current===l.then&&(e[l.value]=s),l.current===l.catch&&(e[l.error]=s),l.block.p(e,n)}function zt(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const ne=!0,fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ne},Symbol.toStringTag,{value:"Module"}));function At(l,t,n){const e=l.slice();return e[7]=t[n],e}function se(l){let t,n="else";return{c(){t=r("div"),t.textContent=n},l(e){t=u(e,"DIV",{"data-svelte-h":!0}),w(t)!=="svelte-1oop23"&&(t.textContent=n)},m(e,s){p(e,t,s)},d(e){e&&o(t)}}}function ce(l){let t,n="if bool is true";return{c(){t=r("div"),t.textContent=n},l(e){t=u(e,"DIV",{"data-svelte-h":!0}),w(t)!=="svelte-183vvif"&&(t.textContent=n)},m(e,s){p(e,t,s)},d(e){e&&o(t)}}}function Lt(l){let t,n="empty list is []. it should be iterable";return{c(){t=r("div"),t.textContent=n},l(e){t=u(e,"DIV",{"data-svelte-h":!0}),w(t)!=="svelte-tlrx70"&&(t.textContent=n)},m(e,s){p(e,t,s)},p:Y,d(e){e&&o(t)}}}function qt(l){let t,n=l[7]+"",e;return{c(){t=r("li"),e=x(n)},l(s){t=u(s,"LI",{});var i=b(t);e=g(i,n),i.forEach(o)},m(s,i){p(s,t,i),c(t,e)},p(s,i){i&2&&n!==(n=s[7]+"")&&Mt(e,n)},d(s){s&&o(t)}}}function ae(l){let t=l[6]+"",n;return{c(){n=x(t)},l(e){n=g(e,t)},m(e,s){p(e,n,s)},p:Y,d(e){e&&o(n)}}}function oe(l){let t=l[5]+"",n;return{c(){n=x(t)},l(e){n=g(e,t)},m(e,s){p(e,n,s)},p:Y,d(e){e&&o(n)}}}function re(l){let t;return{c(){t=x("pending...")},l(n){t=g(n,"pending...")},m(n,e){p(n,t,e)},p:Y,d(n){n&&o(t)}}}function ue(l){let t,n="Logic Blocks",e,s,i,K="#if Blocks",z,C,B,Z="{#if bool} ... {:else} ... {/if}",A,L,E,q,ot,$,rt,tt,N,Bt="토글버튼",et,I,M,Ut="#each Blocks",ut,F,it,jt="{#each list as item, index (key)} ... {:else} empty... {/each}",dt,ht,O,U,vt,S,yt="토글버튼",lt,D,G,Tt="#await Blocks",_t,J,ft,Nt="{#await expression} pending... {:then value} value... {:catch error} error... {/await}",bt,pt,H,Q,mt,R,kt,P,Ot="새로고침",xt,St;function Ht(a,d){return a[0]?ce:se}let nt=Ht(l),j=nt(l),y=zt(l[1]),_=[];for(let a=0;a<y.length;a+=1)_[a]=qt(At(l,y,a));let f=null;y.length||(f=Lt());let V={ctx:l,current:null,token:null,hasCatch:!0,pending:re,then:oe,catch:ae,value:5,error:6};return ee(de(ie),V),{c(){t=r("h1"),t.textContent=n,e=m(),s=r("div"),i=r("h1"),i.textContent=K,z=m(),C=r("div"),B=x("Uses "),A=x(Z),L=m(),E=r("div"),q=r("div"),ot=x("bool: "),$=x(l[0]),rt=m(),j.c(),tt=m(),N=r("button"),N.textContent=Bt,et=m(),I=r("div"),M=r("h1"),M.textContent=Ut,ut=m(),F=r("div"),it=x("Uses "),dt=x(jt),ht=m(),O=r("div"),U=r("ul");for(let a=0;a<_.length;a+=1)_[a].c();f&&f.c(),vt=m(),S=r("button"),S.textContent=yt,lt=m(),D=r("div"),G=r("h1"),G.textContent=Tt,_t=m(),J=r("div"),ft=x("Uses "),bt=x(Nt),pt=m(),H=r("div"),Q=r("div"),mt=x(`getName:\r
			`),R=r("span"),V.block.c(),kt=m(),P=r("button"),P.textContent=Ot,this.h()},l(a){t=u(a,"H1",{class:!0,"data-svelte-h":!0}),w(t)!=="svelte-y67wxr"&&(t.textContent=n),e=k(a),s=u(a,"DIV",{class:!0});var d=b(s);i=u(d,"H1",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-15ajvnn"&&(i.textContent=K),z=k(d),C=u(d,"DIV",{class:!0});var h=b(C);B=g(h,"Uses "),A=g(h,Z),h.forEach(o),L=k(d),E=u(d,"DIV",{class:!0});var T=b(E);q=u(T,"DIV",{class:!0});var gt=b(q);ot=g(gt,"bool: "),$=g(gt,l[0]),gt.forEach(o),rt=k(T),j.l(T),tt=k(T),N=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),w(N)!=="svelte-1fkzwyo"&&(N.textContent=Bt),T.forEach(o),d.forEach(o),et=k(a),I=u(a,"DIV",{class:!0});var W=b(I);M=u(W,"H1",{class:!0,"data-svelte-h":!0}),w(M)!=="svelte-ogjboh"&&(M.textContent=Ut),ut=k(W),F=u(W,"DIV",{class:!0});var Ct=b(F);it=g(Ct,"Uses "),dt=g(Ct,jt),Ct.forEach(o),ht=k(W),O=u(W,"DIV",{class:!0});var st=b(O);U=u(st,"UL",{class:!0});var Et=b(U);for(let Vt=0;Vt<_.length;Vt+=1)_[Vt].l(Et);f&&f.l(Et),Et.forEach(o),vt=k(st),S=u(st,"BUTTON",{class:!0,"data-svelte-h":!0}),w(S)!=="svelte-1k5eoyp"&&(S.textContent=yt),st.forEach(o),W.forEach(o),lt=k(a),D=u(a,"DIV",{class:!0});var X=b(D);G=u(X,"H1",{class:!0,"data-svelte-h":!0}),w(G)!=="svelte-t60xou"&&(G.textContent=Tt),_t=k(X),J=u(X,"DIV",{class:!0});var It=b(J);ft=g(It,"Uses "),bt=g(It,Nt),It.forEach(o),pt=k(X),H=u(X,"DIV",{class:!0});var ct=b(H);Q=u(ct,"DIV",{});var Dt=b(Q);mt=g(Dt,`getName:\r
			`),R=u(Dt,"SPAN",{});var Pt=b(R);V.block.l(Pt),Pt.forEach(o),Dt.forEach(o),kt=k(ct),P=u(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),w(P)!=="svelte-gz2p2t"&&(P.textContent=Ot),ct.forEach(o),X.forEach(o),this.h()},h(){v(t,"class","text-lg font-bold"),v(i,"class","text-lg font-bold"),v(C,"class","commentBox svelte-j8ob5n"),v(q,"class","font-bold"),v(N,"class","bg-blue-400 rounded text-white"),v(E,"class","p-5 m-5 border"),v(s,"class","p-5 m-5 border"),v(M,"class","text-lg font-bold"),v(F,"class","commentBox svelte-j8ob5n"),v(U,"class","list-disc"),v(S,"class","bg-blue-400 rounded text-white"),v(O,"class","p-5 m-5 border"),v(I,"class","p-5 m-5 border"),v(G,"class","text-lg font-bold"),v(J,"class","commentBox svelte-j8ob5n"),v(P,"class","bg-blue-400 rounded text-white"),v(H,"class","p-5 m-5 border"),v(D,"class","p-5 m-5 border")},m(a,d){p(a,t,d),p(a,e,d),p(a,s,d),c(s,i),c(s,z),c(s,C),c(C,B),c(C,A),c(s,L),c(s,E),c(E,q),c(q,ot),c(q,$),c(E,rt),j.m(E,null),c(E,tt),c(E,N),p(a,et,d),p(a,I,d),c(I,M),c(I,ut),c(I,F),c(F,it),c(F,dt),c(I,ht),c(I,O),c(O,U);for(let h=0;h<_.length;h+=1)_[h]&&_[h].m(U,null);f&&f.m(U,null),c(O,vt),c(O,S),p(a,lt,d),p(a,D,d),c(D,G),c(D,_t),c(D,J),c(J,ft),c(J,bt),c(D,pt),c(D,H),c(H,Q),c(Q,mt),c(Q,R),V.block.m(R,V.anchor=null),V.mount=()=>R,V.anchor=null,c(H,kt),c(H,P),xt||(St=[wt(N,"click",l[2]),wt(S,"click",l[3]),wt(P,"click",l[4])],xt=!0)},p(a,[d]){if(l=a,d&1&&Mt($,l[0]),nt!==(nt=Ht(l))&&(j.d(1),j=nt(l),j&&(j.c(),j.m(E,tt))),d&2){y=zt(l[1]);let h;for(h=0;h<y.length;h+=1){const T=At(l,y,h);_[h]?_[h].p(T,d):(_[h]=qt(T),_[h].c(),_[h].m(U,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=y.length,!y.length&&f?f.p(l,d):y.length?f&&(f.d(1),f=null):(f=Lt(),f.c(),f.m(U,null))}le(V,l,d)},i:Y,o:Y,d(a){a&&(o(t),o(e),o(s),o(et),o(I),o(lt),o(D)),j.d(),te(_,a),f&&f.d(),V.block.d(),V.token=null,V=null,xt=!1,Qt(St)}}}let ie=!0;async function de(l){return new Promise((t,n)=>{setTimeout(async()=>{l?t("hoodie"):n("error")},1e3)})}function he(l,t,n){let e=!0,s=["apple","banana","carrot"];return[e,s,()=>{n(0,e=!e)},()=>{s&&s.length>1?n(1,s=[]):n(1,s=["apple","banana","carrot"])},async()=>{window.location.reload()}]}class be extends Zt{constructor(t){super(),$t(this,t,he,ue,Kt,{})}}export{be as component,fe as universal};
