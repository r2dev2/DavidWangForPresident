var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r;function i(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}let u,l="undefined"!=typeof window?t=>requestAnimationFrame(t):t;function d(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function h(){return $(" ")}function v(){return $("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function x(t,e,n){t.classList[n?"add":"remove"](e)}function w(t){u=t}function N(){if(!u)throw new Error("Function called outside component initialization");return u}function k(t){N().$$.on_mount.push(t)}function T(){const t=N();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function z(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const E=[],R=[],C=[],S=[],D=Promise.resolve();let A=!1;function q(){A||(A=!0,D.then(L))}function W(t){C.push(t)}const P=new Set;let V=0;function L(){const t=u;do{for(;V<E.length;){const t=E[V];V++,w(t),j(t.$$)}for(w(null),E.length=0,V=0;R.length;)R.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];P.has(e)||(P.add(e),e())}C.length=0}while(E.length);for(;S.length;)S.pop()();A=!1,P.clear(),w(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const M=new Set;let F;function I(){F={r:0,c:[],p:F}}function H(){F.r||o(F.c),F=F.p}function O(t,e){t&&t.i&&(M.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),F.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function G(t){t&&t.c()}function K(t,n,c,r){const{fragment:i,on_mount:a,on_destroy:u,after_update:l}=t.$$;i&&i.m(n,c),r||W((()=>{const n=a.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(W)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,s,c,r,i,a,l,d=[-1]){const p=u;w(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||p.$$.root};l&&l(f.root);let $=!1;if(f.ctx=c?c(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),$&&function(t,e){-1===t.$$.dirty[0]&&(E.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),$=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();s.intro&&O(e.$$.fragment),K(e,s.target,s.anchor,s.customElement),L()}w(p)}class Z{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let n,o,s;return{c(){n=f("div"),o=f("span"),s=$(e[0]),y(o,"class","count svelte-1s53wbq"),y(n,"class","counter-container svelte-1s53wbq")},m(t,e){p(t,n,e),d(n,o),d(o,s)},p(t,[e]){1&e&&b(s,t[0])},i:t,o:t,d(t){t&&m(n)}}}function J(t,e,n){const o=T();let s=3;return k((()=>{const t=setInterval((()=>{n(0,s--,s),s<0&&(clearInterval(t),o("ended"))}),1e3);return()=>clearInterval(t)})),[s]}function X(t){let e,n,s,c,r,i,a,u,l,d,$;return{c(){e=f("span"),e.textContent="Irrigation",n=h(),s=f("span"),s.textContent="is",c=h(),r=f("span"),r.textContent="the",i=h(),a=f("span"),a.textContent="new",u=h(),l=f("span"),l.textContent="Immigration.",y(e,"class","irrigation svelte-1ici1zd"),x(e,"mounted",t[4]),y(s,"class","is svelte-1ici1zd"),x(s,"mounted",t[5]),y(r,"class","the svelte-1ici1zd"),x(r,"mounted",t[6]),y(a,"class","new svelte-1ici1zd"),x(a,"mounted",t[7]),y(l,"class","immigration svelte-1ici1zd"),x(l,"mounted",t[8])},m(o,m){p(o,e,m),t[17](e),p(o,n,m),p(o,s,m),p(o,c,m),p(o,r,m),p(o,i,m),p(o,a,m),p(o,u,m),p(o,l,m),d||($=[g(e,"transitionend",t[18]),g(s,"transitionend",t[19]),g(r,"transitionend",t[20]),g(a,"transitionend",t[21])],d=!0)},p(t,n){16&n&&x(e,"mounted",t[4]),32&n&&x(s,"mounted",t[5]),64&n&&x(r,"mounted",t[6]),128&n&&x(a,"mounted",t[7]),256&n&&x(l,"mounted",t[8])},d(p){p&&m(e),t[17](null),p&&m(n),p&&m(s),p&&m(c),p&&m(r),p&&m(i),p&&m(a),p&&m(u),p&&m(l),d=!1,o($)}}}function tt(t){let e,n,s,c,r,i,a,u,l;return{c(){e=f("span"),e.textContent="1",n=h(),s=f("span"),s.textContent="0",c=h(),r=f("span"),r.textContent="0",i=h(),a=f("span"),a.textContent="%",y(e,"class","one svelte-1ici1zd"),x(e,"mounted",t[9]),y(s,"class","zero-1 svelte-1ici1zd"),x(s,"mounted",t[10]),y(r,"class","zero-2 svelte-1ici1zd"),x(r,"mounted",t[11]),y(a,"class","percent svelte-1ici1zd"),x(a,"mounted",t[12])},m(o,d){p(o,e,d),t[22](e),p(o,n,d),p(o,s,d),p(o,c,d),p(o,r,d),p(o,i,d),p(o,a,d),u||(l=[g(e,"transitionend",t[23]),g(s,"transitionend",t[24]),g(r,"transitionend",t[25])],u=!0)},p(t,n){512&n&&x(e,"mounted",t[9]),1024&n&&x(s,"mounted",t[10]),2048&n&&x(r,"mounted",t[11]),4096&n&&x(a,"mounted",t[12])},d(d){d&&m(e),t[22](null),d&&m(n),d&&m(s),d&&m(c),d&&m(r),d&&m(i),d&&m(a),u=!1,o(l)}}}function et(t){let e,n;return{c(){e=f("img"),y(e,"class","murica-flag"),i(e.src,n="./sources/muricanflag.gif")||y(e,"src","./sources/muricanflag.gif"),y(e,"alt","murican flag")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function nt(e){let n,s,c,r,a,u,$,v,b,_=!1;function x(){cancelAnimationFrame(c),n.paused||(c=l(x),_=!0),e[15].call(n)}let w=ot<e[3]&&e[3]<st&&X(e),N=ct<e[3]&&e[3]<e[13]&&tt(e),k=rt<e[3]&&et();return{c(){n=f("video"),r=h(),a=f("div"),w&&w.c(),u=h(),N&&N.c(),$=h(),k&&k.c(),i(n.src,s="./sources/david_whyrunning.mp4")||y(n,"src","./sources/david_whyrunning.mp4"),n.autoplay=!0,y(a,"class","text-overlay svelte-1ici1zd")},m(t,o){p(t,n,o),e[16](n),p(t,r,o),p(t,a,o),w&&w.m(a,null),d(a,u),N&&N.m(a,null),d(a,$),k&&k.m(a,null),v||(b=[g(n,"ended",e[14]),g(n,"timeupdate",x)],v=!0)},p(t,[e]){!_&&8&e&&!isNaN(t[3])&&(n.currentTime=t[3]),_=!1,ot<t[3]&&t[3]<st?w?w.p(t,e):(w=X(t),w.c(),w.m(a,u)):w&&(w.d(1),w=null),ct<t[3]&&t[3]<t[13]?N?N.p(t,e):(N=tt(t),N.c(),N.m(a,$)):N&&(N.d(1),N=null),rt<t[3]?k||(k=et(),k.c(),k.m(a,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&m(n),e[16](null),t&&m(r),t&&m(a),w&&w.d(),N&&N.d(),k&&k.d(),v=!1,o(b)}}}const ot=9.5,st=12.5,ct=14,rt=17.5;function it(t,e,n){let o,s,c,r,i=!1,a=!1,u=!1,l=!1,d=!1,p=!1,m=!1,f=!1,$=!1;const h=ct+3,v=async t=>{o&&(await(q(),D),n(3,r=t))};return t.$$.update=()=>{9&t.$$.dirty&&o&&null!=r&&(n(0,o.playbackRate=.9,o),r<2&&v(2)),2&t.$$.dirty&&(s?setTimeout((()=>n(4,i=!0)),30):n(4,i=n(5,a=n(6,u=n(7,l=n(8,d=!1)))))),4&t.$$.dirty&&(c?setTimeout((()=>n(9,p=!0)),30):n(9,p=n(10,m=n(11,f=n(12,$=!1)))))},[o,s,c,r,i,a,u,l,d,p,m,f,$,h,function(e){z.call(this,t,e)},function(){r=this.currentTime,n(3,r)},function(t){R[t?"unshift":"push"]((()=>{o=t,n(0,o),n(3,r)}))},function(t){R[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},()=>n(5,a=!0),()=>n(6,u=!0),()=>n(7,l=!0),()=>n(8,d=!0),function(t){R[t?"unshift":"push"]((()=>{c=t,n(2,c)}))},()=>n(10,m=!0),()=>n(11,f=!0),()=>n(12,$=!0)]}function at(t){let e,n,o,s,c;const r=t[4].default,i=function(t,e,n,o){if(t){const s=a(t,e,n,o);return t[0](s)}}(r,t,t[3],null);return{c(){e=f("div"),n=f("span"),i&&i.c(),y(n,"class","svelte-12wqjgu"),x(n,"show",t[0]),x(n,"fly-left",t[1]),y(e,"class","container svelte-12wqjgu")},m(r,a){p(r,e,a),d(e,n),i&&i.m(n,null),o=!0,s||(c=g(n,"transitionend",t[2]),s=!0)},p(t,[e]){i&&i.p&&(!o||8&e)&&function(t,e,n,o,s,c){if(s){const r=a(e,n,o,c);t.p(r,s)}}(i,r,t,t[3],o?function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(r,t[3],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[3]),null),1&e&&x(n,"show",t[0]),2&e&&x(n,"fly-left",t[1])},i(t){o||(O(i,t),o=!0)},o(t){B(i,t),o=!1},d(t){t&&m(e),i&&i.d(t),s=!1,c()}}}function ut(t,e,n){let{$$slots:o={},$$scope:s}=e;const c=T();let r=!1,i=!1,a=!1;k((()=>{setTimeout((()=>{n(0,r=!0)}),30)}));return t.$$set=t=>{"$$scope"in t&&n(3,s=t.$$scope)},[r,i,()=>{n(1,i=!0),a||(a=!0,setTimeout((()=>{c("ended")}),1800))},s,o]}class lt extends Z{constructor(t){super(),Y(this,t,ut,at,c,{})}}function dt(t){let e;return{c(){e=$("So, what will President Wang support?")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function pt(t){let e,n;return e=new lt({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),e.$on("ended",t[0]),{c(){G(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function mt(t){return[function(e){z.call(this,t,e)}]}function ft(t){let e,n,o,s;return{c(){e=f("video"),y(e,"class","immigration svelte-1o8ucjt"),i(e.src,n="./sources/david_notimmigration.mp4")||y(e,"src","./sources/david_notimmigration.mp4"),e.autoplay=!0},m(n,c){p(n,e,c),o||(s=g(e,"ended",t[1]),o=!0)},d(t){t&&m(e),o=!1,s()}}}function $t(e){let n,o,s,c,r,a,u=e[0]&&ft(e);return{c(){n=f("video"),s=h(),u&&u.c(),c=v(),i(n.src,o="./sources/david_believeinimmigration.mp4")||y(n,"src","./sources/david_believeinimmigration.mp4"),n.autoplay=!0},m(t,o){p(t,n,o),p(t,s,o),u&&u.m(t,o),p(t,c,o),r||(a=g(n,"ended",e[2]),r=!0)},p(t,[e]){t[0]?u||(u=ft(t),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},i:t,o:t,d(t){t&&m(n),t&&m(s),u&&u.d(t),t&&m(c),r=!1,a()}}}function ht(t,e,n){let o=!1;return[o,function(e){z.call(this,t,e)},()=>n(0,o=!0)]}function vt(e){let n,s,c,r,a,u=!1;function d(){cancelAnimationFrame(c),n.paused||(c=l(d),u=!0),e[3].call(n)}return{c(){n=f("video"),i(n.src,s="./sources/david_cleanupmess.mp4")||y(n,"src","./sources/david_cleanupmess.mp4"),n.autoplay=!0},m(t,o){p(t,n,o),isNaN(e[1])||(n.playbackRate=e[1]),r||(a=[g(n,"timeupdate",d),g(n,"ratechange",e[4]),g(n,"ended",e[2])],r=!0)},p(t,[e]){!u&&1&e&&!isNaN(t[0])&&(n.currentTime=t[0]),u=!1,2&e&&!isNaN(t[1])&&(n.playbackRate=t[1])},i:t,o:t,d(t){t&&m(n),r=!1,o(a)}}}function gt(t,e,n){let o,s=1;return t.$$.update=()=>{1&t.$$.dirty&&o>9&&n(1,s=5),1&t.$$.dirty&&o>18&&n(1,s=1),1&t.$$.dirty&&o>19&&n(1,s=5)},[o,s,function(e){z.call(this,t,e)},function(){o=this.currentTime,n(0,o)},function(){s=this.playbackRate,n(1,s),n(0,o)}]}function yt(t){let e,n;return e=new lt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),e.$on("ended",t[2]),{c(){G(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function bt(t){let e,n;return e=new lt({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),e.$on("ended",t[1]),{c(){G(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function _t(t){let e;return{c(){e=$("We conducted a survey.")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function xt(t){let e;return{c(){e=$("Who supports David Wang?")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function wt(t){let e,n,o,s;const c=[bt,yt],r=[];function i(t,e){return t[0]?1:0}return e=i(t),n=r[e]=c[e](t),{c(){n.c(),o=v()},m(t,n){r[e].m(t,n),p(t,o,n),s=!0},p(t,[s]){let a=e;e=i(t),e===a?r[e].p(t,s):(I(),B(r[a],1,1,(()=>{r[a]=null})),H(),n=r[e],n?n.p(t,s):(n=r[e]=c[e](t),n.c()),O(n,1),n.m(o.parentNode,o))},i(t){s||(O(n),s=!0)},o(t){B(n),s=!1},d(t){r[e].d(t),t&&m(o)}}}function Nt(t,e,n){let o=!1;return[o,()=>n(0,o=!0),function(e){z.call(this,t,e)}]}function kt(t){const e=t-1;return e*e*e+1}function Tt(e){let n,o,s=0==e[0]?"Unknown %":`${Math.round(100*e[0]/360)}%`;return{c(){n=f("div"),o=$(s),y(n,"class","chart svelte-9wpmtd"),y(n,"style",e[1])},m(t,e){p(t,n,e),d(n,o)},p(t,[e]){1&e&&s!==(s=0==t[0]?"Unknown %":`${Math.round(100*t[0]/360)}%`)&&b(o,s),2&e&&y(n,"style",t[1])},i:t,o:t,d(t){t&&m(n)}}}function zt(t,e,n){let o,{filled:s=!1}=e,c=0;const r=t=>new Promise((e=>setTimeout(e,t))),i=T();return t.$$set=t=>{"filled"in t&&n(2,s=t.filled)},t.$$.update=()=>{4&t.$$.dirty&&s&&(async()=>{let t=Date.now();for(n(0,c=0);c<358;n(0,c=360*kt((Date.now()-t)/2e3)))await r(10);n(0,c=360),i("transitionend")})(),1&t.$$.dirty&&n(1,o=`--fill-angle: ${c}deg`)},[c,o,s]}class Et extends Z{constructor(t){super(),Y(this,t,zt,Tt,c,{filled:2})}}function Rt(t){let e,n,s,c,r,a,u,l,$,v,b,w,N,k,T;return r=new Et({props:{filled:t[0]}}),r.$on("transitionend",t[4]),{c(){e=f("div"),n=f("div"),s=f("h2"),s.textContent="Wang Support Statistics",c=h(),a=f("div"),G(r.$$.fragment),u=h(),l=f("div"),$=f("p"),$.textContent="100% of people support David Wang.",v=h(),b=f("video"),y(s,"class","svelte-w0vcta"),_(a,"display","contents"),_(a,"--size","20rem"),y($,"class","svelte-w0vcta"),x($,"mounted",t[2]),y(l,"class","desc-container svelte-w0vcta"),y(n,"class","support-counter svelte-w0vcta"),x(n,"mounted",t[1]),i(b.src,w="./sources/david_benniesupport.mp4")||y(b,"src","./sources/david_benniesupport.mp4"),b.autoplay=!0,y(b,"class","svelte-w0vcta"),y(e,"class","container svelte-w0vcta")},m(o,i){p(o,e,i),d(e,n),d(n,s),d(n,c),d(n,a),K(r,a,null),d(n,u),d(n,l),d(l,$),d(e,v),d(e,b),N=!0,k||(T=[g($,"transitionend",t[3]),g(b,"ended",t[5])],k=!0)},p(t,[e]){const o={};1&e&&(o.filled=t[0]),r.$set(o),4&e&&x($,"mounted",t[2]),2&e&&x(n,"mounted",t[1])},i(t){N||(O(r.$$.fragment,t),N=!0)},o(t){B(r.$$.fragment,t),N=!1},d(t){t&&m(e),U(r),k=!1,o(T)}}}function Ct(t,e,n){let o=!1,s=!1,c=!1,r=!1;const i=T();k((()=>{setTimeout((()=>{n(1,c=!0)}),1e3)}));return[o,c,r,()=>{s||(s=!0,setTimeout((()=>{i("ended")}),1500))},()=>n(2,r=!0),()=>n(0,o=!0)]}function St(e){let n,o,s,c;return{c(){n=f("video"),i(n.src,o="./sources/david_gendorse"+e[0]+".mp4")||y(n,"src",o),n.autoplay=!0},m(t,o){p(t,n,o),s||(c=g(n,"ended",e[2]),s=!0)},p(t,e){1&e&&!i(n.src,o="./sources/david_gendorse"+t[0]+".mp4")&&y(n,"src",o)},i:t,o:t,d(t){t&&m(n),s=!1,c()}}}function Dt(t){let e,n;return e=new lt({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("ended",t[1]),{c(){G(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function At(t){let e;return{c(){e=$("Normal Students support David Wang!")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function qt(t){let e,n,o,s;const c=[Dt,St],r=[];function i(t,e){return 0==t[0]?0:t[0]<=Wt?1:-1}return~(e=i(t))&&(n=r[e]=c[e](t)),{c(){n&&n.c(),o=v()},m(t,n){~e&&r[e].m(t,n),p(t,o,n),s=!0},p(t,[s]){let a=e;e=i(t),e===a?~e&&r[e].p(t,s):(n&&(I(),B(r[a],1,1,(()=>{r[a]=null})),H()),~e?(n=r[e],n?n.p(t,s):(n=r[e]=c[e](t),n.c()),O(n,1),n.m(o.parentNode,o)):n=null)},i(t){s||(O(n),s=!0)},o(t){B(n),s=!1},d(t){~e&&r[e].d(t),t&&m(o)}}}const Wt=8;function Pt(t,e,n){const o=T();let s=0;return t.$$.update=()=>{1&t.$$.dirty&&s>Wt&&o("ended")},[s,()=>n(0,s++,s),()=>n(0,s++,s)]}function Vt(e){let n,o,s,c,r,a,u,l,v,_,x,w,N,k=e[1][e[0]-1].name+"",T=e[1][e[0]-1].title+"";return{c(){n=f("div"),o=f("video"),c=h(),r=f("div"),a=f("h2"),u=$(k),l=h(),v=f("h3"),_=$(T),o.autoplay=!0,i(o.src,s=e[1][e[0]-1].src)||y(o,"src",s),y(o,"class","svelte-13ec5pb"),y(a,"class","name svelte-13ec5pb"),y(v,"class","title svelte-13ec5pb"),y(r,"class",x="credentials pos-"+(1+(e[0]-1)%4)+" svelte-13ec5pb"),y(n,"class","container svelte-13ec5pb")},m(t,s){p(t,n,s),d(n,o),d(n,c),d(n,r),d(r,a),d(a,u),d(r,l),d(r,v),d(v,_),w||(N=g(o,"ended",e[3]),w=!0)},p(t,e){1&e&&!i(o.src,s=t[1][t[0]-1].src)&&y(o,"src",s),1&e&&k!==(k=t[1][t[0]-1].name+"")&&b(u,k),1&e&&T!==(T=t[1][t[0]-1].title+"")&&b(_,T),1&e&&x!==(x="credentials pos-"+(1+(t[0]-1)%4)+" svelte-13ec5pb")&&y(r,"class",x)},i:t,o:t,d(t){t&&m(n),w=!1,N()}}}function Lt(t){let e,n;return e=new lt({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("ended",t[2]),{c(){G(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function jt(t){let e;return{c(){e=$("STEMlords and Entrepreneurs support David Wang!")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function Mt(t){let e,n,o,s;const c=[Lt,Vt],r=[];function i(t,e){return 0==t[0]?0:t[0]<=t[1].length?1:-1}return~(e=i(t))&&(n=r[e]=c[e](t)),{c(){n&&n.c(),o=v()},m(t,n){~e&&r[e].m(t,n),p(t,o,n),s=!0},p(t,[s]){let a=e;e=i(t),e===a?~e&&r[e].p(t,s):(n&&(I(),B(r[a],1,1,(()=>{r[a]=null})),H()),~e?(n=r[e],n?n.p(t,s):(n=r[e]=c[e](t),n.c()),O(n,1),n.m(o.parentNode,o)):n=null)},i(t){s||(O(n),s=!0)},o(t){B(n),s=!1},d(t){~e&&r[e].d(t),t&&m(o)}}}function Ft(t,e,n){let o=0;const s=T(),c=[{name:"Pramesh Karthikeyan",title:"FBLA VP Oral and Roleplay",src:"./sources/david_prummyendorse.mp4"},{name:"Luke Zhao",title:"Girlfriend Haver and Top 300 Science Scholar in the nation",src:"./sources/david_luke_hotyoungsexy.mp4"},{name:"William Huang",title:"Creator of Tri-bread Sandwiches and Top 300 Science Scholar in the Nation",src:"./sources/david_oozesappeal.mp4"},{name:"Alexander Zhang",title:"God of Online Science Quizzes and Top 300 Science Scholar in the Nation",src:"./sources/david_policiesgood.mp4"},{name:"Kento Nishi",title:"Crack Addict and Top 300 Science Scholar in the Nation",src:"./sources/david_kentoapprob.mp4"}];return t.$$.update=()=>{1&t.$$.dirty&&o>c.length&&s("ended")},[o,c,()=>n(0,o++,o),()=>n(0,o++,o)]}const It=new Audio("./sources/DAVID_WANGY.m4a");function Ht(e){let n;return{c(){n=f("h2"),n.innerHTML='<span class="red svelte-1iyqbdy">Vote for</span>  <span class="blue svelte-1iyqbdy">David</span>  <span class="red svelte-1iyqbdy">Wang!</span>',y(n,"class","vote svelte-1iyqbdy"),x(n,"mounted",e[0])},m(t,e){p(t,n,e)},p(t,[e]){1&e&&x(n,"mounted",t[0])},i:t,o:t,d(t){t&&m(n)}}}function Ot(t,e,n){let{mountVote:o=!1}=e;return t.$$set=t=>{"mountVote"in t&&n(0,o=t.mountVote)},[o]}class Bt extends Z{constructor(t){super(),Y(this,t,Ot,Ht,c,{mountVote:0})}}function Gt(t){let e,n,s,c,r,a,u;return c=new Bt({props:{mountVote:t[0]}}),{c(){e=f("video"),s=h(),G(c.$$.fragment),i(e.src,n="./sources/david_car.mp4")||y(e,"src","./sources/david_car.mp4"),e.autoplay=!0,e.muted=!0,y(e,"class","svelte-1n1ccy1")},m(n,o){p(n,e,o),isNaN(t[1])||(e.playbackRate=t[1]),p(n,s,o),K(c,n,o),r=!0,a||(u=[g(e,"ended",t[2]),g(e,"ratechange",t[3])],a=!0)},p(t,[n]){2&n&&!isNaN(t[1])&&(e.playbackRate=t[1]);const o={};1&n&&(o.mountVote=t[0]),c.$set(o)},i(t){r||(O(c.$$.fragment,t),r=!0)},o(t){B(c.$$.fragment,t),r=!1},d(t){t&&m(e),t&&m(s),U(c,t),a=!1,o(u)}}}function Kt(t,e,n){let o=!1;k((()=>{It.addEventListener("canplaythrough",(()=>It.play())),It.play(),setTimeout((()=>{n(0,o=!0)}),3e3)}));let s=.75;return[o,s,function(e){z.call(this,t,e)},function(){s=this.playbackRate,n(1,s)}]}function Ut(t){let e,n,s,c,r,a,u,l,$,v,b,_,w,N,k,T;return b=new Bt({props:{mountVote:!0}}),{c(){e=f("div"),n=f("video"),c=h(),r=f("video"),u=h(),l=f("video"),v=h(),G(b.$$.fragment),_=h(),w=f("div"),w.innerHTML="<p>Period: 3</p> \n    <p>President: David Wang</p> \n    <p>Vice President: Nate Flesner</p> \n    <p>Song: &quot;David Wangy&quot; by Dylan Rances</p> \n    <p>Editor: Ronak Badhe</p> \n    <p>Thank you to everyone who endorsed David!</p>",i(n.src,s="./sources/david_flagshot.mp4")||y(n,"src","./sources/david_flagshot.mp4"),n.autoplay=!0,n.muted=!0,i(r.src,a="./sources/david_flagshot.mp4")||y(r,"src","./sources/david_flagshot.mp4"),r.autoplay=!0,r.muted=!0,i(l.src,$="./sources/david_flagshot.mp4")||y(l,"src","./sources/david_flagshot.mp4"),l.autoplay=!0,l.muted=!0,y(w,"class","credits svelte-fbbzve"),x(w,"mounted",t[1]),y(e,"class","container svelte-fbbzve")},m(o,s){p(o,e,s),d(e,n),isNaN(t[0])||(n.playbackRate=t[0]),d(e,c),d(e,r),isNaN(t[0])||(r.playbackRate=t[0]),d(e,u),d(e,l),isNaN(t[0])||(l.playbackRate=t[0]),d(e,v),K(b,e,null),d(e,_),d(e,w),N=!0,k||(T=[g(n,"ratechange",t[3]),g(r,"ratechange",t[4]),g(l,"ratechange",t[5]),g(l,"ended",t[6]),g(w,"transitionend",t[7])],k=!0)},p(t,[e]){1&e&&!isNaN(t[0])&&(n.playbackRate=t[0]),1&e&&!isNaN(t[0])&&(r.playbackRate=t[0]),1&e&&!isNaN(t[0])&&(l.playbackRate=t[0]),2&e&&x(w,"mounted",t[1])},i(t){N||(O(b.$$.fragment,t),N=!0)},o(t){B(b.$$.fragment,t),N=!1},d(t){t&&m(e),U(b),k=!1,o(T)}}}const Yt=.75;function Zt(t,e,n){let o=!1;const s=T(),c=t=>new Promise((e=>setTimeout(e,t)));k((()=>{setTimeout((async()=>{let t=Date.now();for(let e=1;e>0;e=1-(Date.now()-t)/14e3)await c(10),It.volume=e;It.volume=0}),1e4)}));let r=Yt;return t.$$.update=()=>{1&t.$$.dirty&&r!=Yt&&n(0,r=Yt)},[r,o,s,function(){r=this.playbackRate,n(0,r)},function(){r=this.playbackRate,n(0,r)},function(){r=this.playbackRate,n(0,r)},()=>n(1,o=!0),()=>s("ended")]}function Qt(e){let n;return{c(){n=f("div"),n.innerHTML='<p class="svelte-j95qui">The End</p>',y(n,"class","container svelte-j95qui")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}function Jt(t){return k((()=>{It.pause()})),[]}const Xt=[{name:"beginning",component:class extends Z{constructor(t){super(),Y(this,t,J,Q,c,{})}}},{name:"why_run",component:class extends Z{constructor(t){super(),Y(this,t,it,nt,c,{})}}},{name:"what_believe_in_again",component:class extends Z{constructor(t){super(),Y(this,t,mt,pt,c,{})}}},{name:"irrigation_not_immigration",component:class extends Z{constructor(t){super(),Y(this,t,ht,$t,c,{})}}},{name:"clean_up_mess",component:class extends Z{constructor(t){super(),Y(this,t,gt,vt,c,{})}}},{name:"who_supports",component:class extends Z{constructor(t){super(),Y(this,t,Nt,wt,c,{})}}},{name:"bennie_supports",component:class extends Z{constructor(t){super(),Y(this,t,Ct,Rt,c,{})}}},{name:"student_support",component:class extends Z{constructor(t){super(),Y(this,t,Pt,qt,c,{})}}},{name:"stem_biz_support",component:class extends Z{constructor(t){super(),Y(this,t,Ft,Mt,c,{})}}},{name:"david_car",component:class extends Z{constructor(t){super(),Y(this,t,Kt,Gt,c,{})}}},{name:"david_flag",component:class extends Z{constructor(t){super(),Y(this,t,Zt,Ut,c,{})}}},{name:"end",component:class extends Z{constructor(t){super(),Y(this,t,Jt,Qt,c,{})}}}];function te(t){let e,n,o,s;var c=t[1].component;return c&&(o=new c({}),o.$on("ended",t[2])),{c(){e=h(),n=f("main"),o&&G(o.$$.fragment),document.title="David Wang for President"},m(t,c){p(t,e,c),p(t,n,c),o&&K(o,n,null),s=!0},p(t,[e]){if(c!==(c=t[1].component)){if(o){I();const t=o;B(t.$$.fragment,1,0,(()=>{U(t,1)})),H()}c?(o=new c({}),o.$on("ended",t[2]),G(o.$$.fragment),O(o.$$.fragment,1),K(o,n,null)):o=null}},i(t){s||(o&&O(o.$$.fragment,t),s=!0)},o(t){o&&B(o.$$.fragment,t),s=!1},d(t){t&&m(e),t&&m(n),o&&U(o)}}}function ee(t,e,n){let o,s=0;return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=Xt[s]),2&t.$$.dirty&&console.log("[PLAYBACK] scene",o.name)},[s,o,()=>n(0,s++,s)]}const ne=new class extends Z{constructor(t){super(),Y(this,t,ee,te,c,{})}}({target:document.body,props:{}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{ne.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),ne}();
//# sourceMappingURL=bundle.js.map
