function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as n,am as T,an as b,ao as k,y as v,ap as j,aq as z,Q as a,S as h,R as F,ar as A,d as p,a3 as S,o as g,b as _,F as E,g as L,e as y,Y as r,as as w,c as B,h as P,i as O,ag as $,A as N,at as R,v as D}from"../modules/vue-DqM6j7Au.js";import{f as M,_ as q,c,b as x,v as I,w as V,x as W,y as G,z as K}from"../index-CydXal7A.js";const te=n(!1),ae=n(!1),ne=n(!1),U=n(!1),oe=n(!0),ie=T({xs:460,...A}),C=b(),le=k(),re=v(()=>C.height.value-C.width.value/M.value>120),ce=j(h?document.body:null),m=z(),de=v(()=>{var s,e;return["INPUT","TEXTAREA"].includes(((s=m.value)==null?void 0:s.tagName)||"")||((e=m.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),ue=v(()=>{var s;return["BUTTON","A"].includes(((s=m.value)==null?void 0:s.tagName)||"")});a("slidev-camera","default",{listenToStorageChanges:!1});a("slidev-mic","default",{listenToStorageChanges:!1});const fe=a("slidev-scale",0),ve=a("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),pe=a("slidev-show-editor",!1,{listenToStorageChanges:!1}),ge=a("slidev-editor-vertical",!1,{listenToStorageChanges:!1});a("slidev-editor-width",h?window.innerWidth*.4:318,{listenToStorageChanges:!1});a("slidev-editor-height",h?window.innerHeight*.4:300,{listenToStorageChanges:!1});const f=a("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),u=a("slidev-presenter-layout",1,{listenToStorageChanges:!1});function me(){u.value=u.value+1,u.value>2&&(u.value=1)}function he(){f.value=Math.min(2,f.value+.1)}function _e(){f.value=Math.max(.5,f.value-.1)}const we=F(U);function Ce(s,e=""){var t,o;const i=["slidev-page",e],l=(o=(t=s==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:o.no;return l!=null&&i.push(`slidev-page-${l}`),i.filter(Boolean).join(" ")}async function Se(){const{saveAs:s}=await q(()=>import("../modules/file-saver-EUMWMpoS.js").then(e=>e.F),__vite__mapDeps([]));s(typeof c.download=="string"?c.download:c.exportFilename?`${c.exportFilename}.pdf`:"/talks/brief-history-web/slidev-exported.pdf",`${c.title}.pdf`)}const H={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},Q=y("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),X=y("div",null,"Loading slide...",-1),Y=p({__name:"SlideLoading",setup(s){const e=n(!1);return S(()=>{setTimeout(()=>{e.value=!0},200)}),(i,l)=>(g(),_("div",H,[e.value?(g(),_(E,{key:0},[Q,X],64)):L("v-if",!0)]))}}),J=x(Y,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideLoading.vue"]]),Z=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(s){const e=s;r(I,e.route),r(V,n(e.route.no)),r(W,n(e.renderContext)),r(G,w(e,"active")),r(K,w(e,"clicksContext"));const i=v(()=>{var o,d;const t=((d=(o=e.route.meta)==null?void 0:o.slide)==null?void 0:d.frontmatter.zoom)??1;return t===1?void 0:{width:`${100/t}%`,height:`${100/t}%`,transformOrigin:"top left",transform:`scale(${t})`}}),l=R({loader:async()=>{const t=await e.is();return p({setup(o,{attrs:d}){return S(()=>{e.clicksContext.onMounted()}),()=>D(t.default,d)}})},delay:300,loadingComponent:J});return(t,o)=>(g(),B($(N(l)),{style:P(i.value),class:O({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","class"]))}}),ye=x(Z,[["__scopeId","data-v-0cdac9f7"],["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),xe={render(){return[]}},Te={render(){return[]}};export{Te as G,ye as S,xe as a,U as b,f as c,_e as d,te as e,ae as f,Ce as g,re as h,he as i,pe as j,fe as k,ge as l,ne as m,le as n,Se as o,u as p,oe as q,ue as r,ve as s,we as t,de as u,ce as v,C as w,ie as x,me as y,m as z};
