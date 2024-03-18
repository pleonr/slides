function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-ZW6arJIb.js","assets/modules/unplugin-icons-DHJ9mzV3.js","assets/modules/vue-DqM6j7Au.js","assets/modules/shiki-BjLwEkPr.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CayZTk0P.js","assets/index-CydXal7A.js","assets/index-DWlJ9m8J.css","assets/slidev/bottom-DoSZI09d.js","assets/bottom-CSaYzZ2h.css","assets/slidev/title-renderer-DnZoXIx-.js","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-CrJXB5kB.js","assets/slidev/context-CiTY-3FF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Ot,y as A,ab as L,ac as K,U as Pt,D as ge,ad as Dt,d as X,ae as jt,C as st,_ as Ft,Y as Vt,b,e as N,f as le,h as ce,i as j,o as p,a7 as Fe,x as Q,F as H,Z as we,A as u,l as w,$ as Ee,a6 as Bt,af as Gt,c as C,g as x,a8 as Kt,k as R,ag as nt,M as Ie,r as Wt,ah as zt,ai as Ht,a1 as ot,aj as it,j as he,ak as Ut,N as Yt,m as Qt,al as Xt}from"../modules/vue-DqM6j7Au.js";import{u as se,l as Jt,t as Re,f as ke,a as be,s as Zt,c as re,g as qt,b as U,m as ze,_ as rt,n as es,o as He,d as ts,C as ss,q as Ue,k as xe,r as Ye}from"../index-CydXal7A.js";import{u as Ve,D as ns}from"./DrawingPreview-CayZTk0P.js";import{b as G,t as Ae,m as q,n as at,o as lt,q as os,r as is,u as rs,v as ct,k as Se,x as Le,s as fe,p as as,y as ls,f as Qe,z as ae,w as Me,S as ut,g as dt,G as cs,a as us}from"./bottom-DoSZI09d.js";import{e as ds,f as hs,g as fs,h as ps,i as vs,j as _s,k as ms,l as ht,m as gs,n as ys,o as ws,p as ks,q as bs,r as xs,s as Ss,t as Ms,u as $s,v as Cs}from"../modules/unplugin-icons-DHJ9mzV3.js";import{T as Es}from"./title-renderer-DnZoXIx-.js";import{t as Is}from"../modules/shiki-BjLwEkPr.js";function yo(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:i}=Ve(),r=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){i.value||(r.value=Ot())},onSwipeEnd(){if(!r.value||i.value)return;const d=Math.abs(l.value),h=Math.abs(c.value);d/window.innerWidth>.3||d>75?a.value==="left"?e():n():(h/window.innerHeight>.4||h>200)&&(a.value==="down"?o():s())}})}const _e=D(1),me=A(()=>Jt.value.length),P=D(0),Be=D(0);function Rs(){P.value>_e.value&&(P.value-=1)}function As(){P.value<me.value&&(P.value+=1)}function Ls(){if(P.value>_e.value){let t=P.value-Be.value;t<_e.value&&(t=_e.value),P.value=t}}function Ns(){if(P.value<me.value){let t=P.value+Be.value;t>me.value&&(t=me.value),P.value=t}}const Ts=[];function Os(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:i,prevSlide:r}=se(),{drawingEnabled:a}=Ve(),{escape:l,space:c,shift:d,left:h,right:f,up:v,down:k,enter:g,d:M,g:S,o:I,"`":y}=at,T={next:n,prev:i,nextSlide:o,prevSlide:r,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Re,toggleOverview:Ae,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>G.value=!1,showGotoDialog:()=>q.value=!q.value};let _=[{name:"next_space",key:L(c,K(d)),fn:n,autoRepeat:!0},{name:"prev_space",key:L(c,d),fn:i,autoRepeat:!0},{name:"next_right",key:L(f,K(d),K(G)),fn:n,autoRepeat:!0},{name:"prev_left",key:L(h,K(d),K(G)),fn:i,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:i,autoRepeat:!0},{name:"next_down",key:L(k,K(G)),fn:o,autoRepeat:!0},{name:"prev_up",key:L(v,K(G)),fn:()=>r(!1),autoRepeat:!0},{name:"next_shift",key:L(f,d),fn:o,autoRepeat:!0},{name:"prev_shift",key:L(h,d),fn:()=>r(!1),autoRepeat:!0},{name:"toggle_dark",key:L(M,K(a)),fn:Re},{name:"toggle_overview",key:L(Pt(I,y),K(a)),fn:Ae},{name:"hide_overview",key:L(l,K(a)),fn:()=>G.value=!1},{name:"goto",key:L(S,K(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:L(f,G),fn:As},{name:"prev_overview",key:L(h,G),fn:Rs},{name:"up_overview",key:L(v,G),fn:Ls},{name:"down_overview",key:L(k,G),fn:Ns},{name:"goto_from_overview",key:L(g,G),fn:()=>{t(P.value),G.value=!1}}];const O=new Set(_.map($=>$.name));for(const $ of Ts){const V=$(T,_);_=_.concat(V)}if(_.filter($=>$.name&&O.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return _}const ft=L(K(rs),K(is),os);function Ps(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=L(t,ft);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}s&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return ge(n,r,{flush:"sync"})}function Ds(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function wo(){const t=Os();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Ps(s.key,s.fn,s.autoRepeat)}),Ds("f",()=>ct.toggle())}const js=X({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),i=jt(o),r=A(()=>e.width?e.width:i.width.value),a=A(()=>e.width?e.width/ke.value:i.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const l=A(()=>r.value/a.value),c=A(()=>e.scale&&!n.value?e.scale:l.value<ke.value?r.value/be.value:a.value*ke.value/be.value),d=A(()=>({height:`${Zt.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),h=A(()=>({"select-none":!re.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Ft(A(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),Vt(qt,c),(f,v)=>(p(),b("div",{id:"slide-container",ref_key:"root",ref:o,class:j(["slidev-slides-container",h.value])},[N("div",{id:"slide-content",class:"slidev-slide-content",style:ce(d.value)},[le(f.$slots,"default")],4),le(f.$slots,"controls")],2))}}),Fs=U(js,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Vs={class:"select-list"},Bs={class:"title"},Gs={class:"items"},Ks=["onClick"],Ws=X({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Fe(t,"modelValue",e,{passive:!0});return(i,r)=>{const a=ds;return p(),b("div",Vs,[N("div",Bs,Q(t.title),1),N("div",Gs,[(p(!0),b(H,null,we(t.items,l=>(p(),b("div",{key:l.value,class:j(["item",{active:u(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[w(a,{class:j(["text-green-500",{"opacity-0":u(o)!==l.value}])},null,8,["class"]),Ee(" "+Q(l.display||l.value),1)],10,Ks))),128))])])}}}),zs=U(Ws,[["__scopeId","data-v-e5719a66"],["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SelectList.vue"]]),Hs={class:"text-sm"},Us=X({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(p(),b("div",Hs,[w(zs,{modelValue:u(Se),"onUpdate:modelValue":n[0]||(n[0]=o=>Bt(Se)?Se.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Ys=U(Us,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Settings.vue"]]),Qs={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Xs=X({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Fe(t,"modelValue",e,{passive:!0}),i=D();return Gt(i,()=>{o.value=!1}),(r,a)=>(p(),b("div",{ref_key:"el",ref:i,class:"flex relative"},[N("button",{class:j({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!u(o))},[le(r.$slots,"button",{class:j({disabled:t.disabled})})],2),(p(),C(Kt,null,[u(o)?(p(),b("div",Qs,[le(r.$slots,"menu")])):x("v-if",!0)],1024))],512))}}),Js=U(Xs,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/MenuButton.vue"]]),Zs={},qs={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function en(t,e){return p(),b("div",qs)}const pe=U(Zs,[["render",en],["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),tn={class:"sr-only"},sn=X({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(p(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[N("span",tn,Q(e.title),1),le(e.$slots,"default",{},()=>[N("div",{class:j(e.icon)},null,2)])]),_:3},8,["title"]))}}),z=U(sn,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/IconButton.vue"]]),nn={render(){return[]}},on={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},rn={class:"my-auto"},an={class:"opacity-50"},ln=X({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:i,isEmbedded:r,isPresenter:a,isPresenterAvailable:l,next:c,prev:d,total:h}=se(),{brush:f,drawingEnabled:v}=Ve(),k=Le.smaller("md"),{isFullscreen:g,toggle:M}=ct,S=A(()=>s.value.query.password),I=A(()=>S.value?`?password=${S.value}`:""),y=A(()=>`${ze(n.value,!0)}${I.value}`),T=A(()=>`${ze(n.value,!1)}${I.value}`),_=D();function O(){_.value&&ae.value&&_.value.contains(ae.value)&&ae.value.blur()}const E=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),V=Ie();return rt(()=>import("./DrawingControls-ZW6arJIb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(ie=>V.value=ie.default),(ie,F)=>{const Z=hs,Ke=fs,B=ps,ne=vs,ue=ks,xt=_s,St=ms,Mt=ht,$t=gs,Ct=ys,Et=bs,We=Wt("RouterLink"),It=xs,Rt=Ss,At=Ms,Lt=$s,Nt=ws;return p(),b("nav",{ref_key:"root",ref:_,class:"flex flex-col"},[N("div",{class:j(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:O},[u(r)?x("v-if",!0):(p(),C(z,{key:0,title:u(g)?"Close fullscreen":"Enter fullscreen",onClick:u(M)},{default:R(()=>[u(g)?(p(),C(Z,{key:0})):(p(),C(Ke,{key:1}))]),_:1},8,["title","onClick"])),w(z,{class:j({disabled:!u(i)}),title:"Go to previous slide",onClick:u(d)},{default:R(()=>[w(B)]),_:1},8,["class","onClick"]),w(z,{class:j({disabled:!u(o)}),title:"Go to next slide",onClick:u(c)},{default:R(()=>[w(ne)]),_:1},8,["class","onClick"]),u(r)?x("v-if",!0):(p(),C(z,{key:1,title:"Show slide overview",onClick:F[0]||(F[0]=de=>u(Ae)())},{default:R(()=>[w(ue)]),_:1})),u(es)?x("v-if",!0):(p(),C(z,{key:2,title:u(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:F[1]||(F[1]=de=>u(Re)())},{default:R(()=>[u(He)?(p(),C(xt,{key:0})):(p(),C(St,{key:1}))]),_:1},8,["title"])),w(pe),u(r)?x("v-if",!0):(p(),b(H,{key:3},[!u(a)&&!u(k)&&$.value?(p(),b(H,{key:0},[w(u($)),w(pe)],64)):x("v-if",!0),u(a)?(p(),C(z,{key:1,title:u(fe)?"Hide presenter cursor":"Show presenter cursor",onClick:F[2]||(F[2]=de=>fe.value=!u(fe))},{default:R(()=>[u(fe)?(p(),C(Mt,{key:0})):(p(),C($t,{key:1}))]),_:1},8,["title"])):x("v-if",!0)],64)),(!u(re).drawings.presenterOnly||u(a))&&!u(r)?(p(),b(H,{key:4},[w(z,{class:"relative",title:u(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:F[3]||(F[3]=de=>v.value=!u(v))},{default:R(()=>[w(Ct),u(v)?(p(),b("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ce({background:u(f).color})},null,4)):x("v-if",!0)]),_:1},8,["title"]),w(pe)],64)):x("v-if",!0),u(r)?x("v-if",!0):(p(),b(H,{key:5},[u(a)?(p(),C(We,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[w(Et)]),_:1},8,["to"])):x("v-if",!0),u(l)?(p(),C(We,{key:1,to:y.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[w(It)]),_:1},8,["to"])):x("v-if",!0),x("v-if",!0),u(a)?(p(),C(z,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:u(ls)},{default:R(()=>[w(Rt),Ee(" "+Q(u(as)),1)]),_:1},8,["onClick"])):x("v-if",!0)],64)),(p(),b(H,{key:6},[u(re).download?(p(),C(z,{key:0,title:"Download as PDF",onClick:u(lt)},{default:R(()=>[w(At)]),_:1},8,["onClick"])):x("v-if",!0)],64)),!u(a)&&u(re).info&&!u(r)?(p(),C(z,{key:7,title:"Show info",onClick:F[5]||(F[5]=de=>Qe.value=!u(Qe))},{default:R(()=>[w(Lt)]),_:1})):x("v-if",!0),!u(a)&&!u(r)?(p(),C(Js,{key:8},{button:R(()=>[w(z,{title:"Adjust settings"},{default:R(()=>[w(Nt)]),_:1})]),menu:R(()=>[w(Ys)]),_:1})):x("v-if",!0),u(r)?x("v-if",!0):(p(),C(pe,{key:9})),N("div",on,[N("div",rn,[Ee(Q(u(n))+" ",1),N("span",an,"/ "+Q(u(h)),1)])]),w(u(nn))],34)],512)}}}),ko=U(ln,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NavControls.vue"]]),cn=["onClick"],un={class:"text-green font-bold"},dn={class:"opacity-50"},hn={key:1,class:"opacity-50"},fn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,pn=X({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Fe(t,"modelValue",e),{currentSlideNo:i,go:r,slides:a}=se();function l(){o.value=!1}function c(M){r(M),l()}function d(M){return M===P.value}const h=Le.smaller("xs"),f=Le.smaller("sm"),v=A(()=>h.value?Me.width.value-$e:f.value?(Me.width.value-$e-Xe)/2:300),k=A(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),g=D("");return zt("keypress",M=>{if(!G.value){g.value="";return}if(M.key==="Enter"){M.preventDefault(),g.value?(c(+g.value),g.value=""):c(P.value);return}const S=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(S)){g.value="";return}if(!g.value&&S===0)return;if(g.value+=String(S),+g.value>=a.value.length){g.value="";return}const I=a.value.findIndex(y=>`/${y.no}`===g.value);I!==-1&&(P.value=I+1),+g.value*10>a.value.length&&(c(+g.value),g.value="")}),st(()=>{P.value=i.value,Be.value=k.value}),(M,S)=>{const I=Cs;return p(),b(H,null,[w(Ht,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(N("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:S[0]||(S[0]=y=>l())},[N("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ce(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(p(!0),b(H,null,we(u(a),(y,T)=>(p(),b("div",{key:y.no,class:"relative"},[N("div",{class:j(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",d(T+1)||u(P)===T+1?"border-primary":"border-main"]),onClick:_=>c(y.no)},[(p(),C(Fs,{key:y.no,width:v.value,class:"pointer-events-none"},{default:R(()=>[y!=null&&y.component?(p(),C(ut,{key:0,is:y.component,"clicks-context":u(ts)(y,u(ss)),class:j(u(dt)(y)),route:y,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):x("v-if",!0),w(ns,{page:y.no},null,8,["page"])]),_:2},1032,["width"]))],10,cn),N("div",{class:"absolute top-0",style:ce(`left: ${v.value+5}px`)},[g.value&&String(T+1).startsWith(g.value)?(p(),b(H,{key:0},[N("span",un,Q(g.value),1),N("span",dn,Q(String(T+1).slice(g.value.length)),1)],64)):(p(),b("span",hn,Q(T+1),1))],4)]))),128))],4)],512),[[it,u(o)]])]),_:1}),u(o)?(p(),b("div",fn,[w(z,{title:"Close",class:"text-2xl",onClick:l},{default:R(()=>[w(I)]),_:1}),x("v-if",!0)])):x("v-if",!0)],64)}}}),bo=U(pn,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):_t(t)==="[object Array]"}const vn=1/0;function _n(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-vn?"-0":e}function mn(t){return t==null?"":_n(t)}function Y(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function gn(t){return t===!0||t===!1||yn(t)&&_t(t)=="[object Boolean]"}function vt(t){return typeof t=="object"}function yn(t){return vt(t)&&t!==null}function W(t){return t!=null}function Ce(t){return!t.trim().length}function _t(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const wn="Incorrect 'index' type",kn=t=>`Invalid value for key ${t}`,bn=t=>`Pattern length exceeds max of ${t}.`,xn=t=>`Missing ${t} property in key`,Sn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Mn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=mt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mt(t){let e=null,s=null,n=null,o=1,i=null;if(Y(t)||J(t))n=t,e=Ze(t),s=Ne(t);else{if(!Je.call(t,"name"))throw new Error(xn("name"));const r=t.name;if(n=r,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(Sn(r));e=Ze(r),s=Ne(r),i=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:i}}function Ze(t){return J(t)?t:t.split(".")}function Ne(t){return J(t)?t.join("."):t}function $n(t,e){let s=[],n=!1;const o=(i,r,a)=>{if(W(i))if(!r[a])s.push(i);else{let l=r[a];const c=i[l];if(!W(c))return;if(a===r.length-1&&(Y(c)||pt(c)||gn(c)))s.push(mn(c));else if(J(c)){n=!0;for(let d=0,h=c.length;d<h;d+=1)o(c[d],r,a+1)}else r.length&&o(c,r,a+1)}};return o(t,Y(e)?e.split("."):e,0),n?s:s[0]}const Cn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},En={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},In={location:0,threshold:.6,distance:100},Rn={useExtendedSearch:!1,getFn:$n,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...En,...Cn,...In,...Rn};const An=/[^ ]+/g;function Ln(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(An).length;if(s.has(i))return s.get(i);const r=1/Math.pow(i,.5*t),a=parseFloat(Math.round(r*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class Ge{constructor({getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){this.norm=Ln(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Y(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Y(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!W(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(W(r)){if(J(r)){let a=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:c,value:d}=l.pop();if(W(d))if(Y(d)&&!Ce(d)){let h={v:d,i:c,n:this.norm.get(d)};a.push(h)}else J(d)&&d.forEach((h,f)=>{l.push({nestedArrIndex:f,value:h})})}n.$[i]=a}else if(Y(r)&&!Ce(r)){let a={v:r,n:this.norm.get(r)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function gt(t,e,{getFn:s=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const o=new Ge({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(mt)),o.setSources(e),o.create(),o}function Nn(t,{getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){const{keys:n,records:o}=t,i=new Ge({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(o),i}function ve(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=m.distance,ignoreLocation:i=m.ignoreLocation}={}){const r=e/t.length;if(i)return r;const a=Math.abs(n-s);return o?r+a/o:a?1:r}function Tn(t=[],e=m.minMatchCharLength){let s=[],n=-1,o=-1,i=0;for(let r=t.length;i<r;i+=1){let a=t[i];a&&n===-1?n=i:!a&&n!==-1&&(o=i-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const te=32;function On(t,e,s,{location:n=m.location,distance:o=m.distance,threshold:i=m.threshold,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:l=m.includeMatches,ignoreLocation:c=m.ignoreLocation}={}){if(e.length>te)throw new Error(bn(te));const d=e.length,h=t.length,f=Math.max(0,Math.min(n,h));let v=i,k=f;const g=a>1||l,M=g?Array(h):[];let S;for(;(S=t.indexOf(e,k))>-1;){let E=ve(e,{currentLocation:S,expectedLocation:f,distance:o,ignoreLocation:c});if(v=Math.min(E,v),k=S+d,g){let $=0;for(;$<d;)M[S+$]=1,$+=1}}k=-1;let I=[],y=1,T=d+h;const _=1<<d-1;for(let E=0;E<d;E+=1){let $=0,V=T;for(;$<V;)ve(e,{errors:E,currentLocation:f+V,expectedLocation:f,distance:o,ignoreLocation:c})<=v?$=V:T=V,V=Math.floor((T-$)/2+$);T=V;let ie=Math.max(1,f-V+1),F=r?h:Math.min(f+V,h)+d,Z=Array(F+2);Z[F+1]=(1<<E)-1;for(let B=F;B>=ie;B-=1){let ne=B-1,ue=s[t.charAt(ne)];if(g&&(M[ne]=+!!ue),Z[B]=(Z[B+1]<<1|1)&ue,E&&(Z[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),Z[B]&_&&(y=ve(e,{errors:E,currentLocation:ne,expectedLocation:f,distance:o,ignoreLocation:c}),y<=v)){if(v=y,k=ne,k<=f)break;ie=Math.max(1,2*f-k)}}if(ve(e,{errors:E+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:c})>v)break;I=Z}const O={isMatch:k>=0,score:Math.max(.001,y)};if(g){const E=Tn(M,a);E.length?l&&(O.indices=E):O.isMatch=!1}return O}function Pn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:i=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,v)=>{this.chunks.push({pattern:f,alphabet:Pn(f),startIndex:v})},h=this.pattern.length;if(h>te){let f=0;const v=h%te,k=h-v;for(;f<k;)d(this.pattern.substr(f,te),f),f+=te;if(v){const g=h-te;d(this.pattern.substr(g),g)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let k={isMatch:!0,score:0};return n&&(k.indices=[[0,e.length-1]]),k}const{location:o,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let d=[],h=0,f=!1;this.chunks.forEach(({pattern:k,alphabet:g,startIndex:M})=>{const{isMatch:S,score:I,indices:y}=On(e,k,g,{location:o+M,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});S&&(f=!0),h+=I,S&&y&&(d=[...d,...y])});let v={isMatch:f,score:f?h/this.chunks.length:1};return f&&n&&(v.indices=d),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Dn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Fn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Vn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Gn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class wt extends ee{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:i=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class kt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,o.push([n,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const Te=[Dn,kt,Fn,Vn,Gn,Bn,jn,wt],et=Te.length,Kn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Wn="|";function zn(t,e={}){return t.split(Wn).map(s=>{let n=s.trim().split(Kn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const a=n[i];let l=!1,c=-1;for(;!l&&++c<et;){const d=Te[c];let h=d.isMultiMatch(a);h&&(o.push(new d(h,e)),l=!0)}if(!l)for(c=-1;++c<et;){const d=Te[c];let h=d.isSingleMatch(a);if(h){o.push(new d(h,e));break}}}return o})}const Hn=new Set([wt.type,kt.type]);class Un{constructor(e,{isCaseSensitive:s=m.isCaseSensitive,includeMatches:n=m.includeMatches,minMatchCharLength:o=m.minMatchCharLength,ignoreLocation:i=m.ignoreLocation,findAllMatches:r=m.findAllMatches,location:a=m.location,threshold:l=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=zn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const d=s[l];r.length=0,i=0;for(let h=0,f=d.length;h<f;h+=1){const v=d[h],{isMatch:k,indices:g,score:M}=v.search(e);if(k){if(i+=1,a+=M,n){const S=v.constructor.type;Hn.has(S)?r=[...r,...g]:r.push(g)}}else{a=0,i=0,r.length=0;break}}if(i){let h={isMatch:!0,score:a/i};return n&&(h.indices=r),h}}return{isMatch:!1,score:1}}}const Oe=[];function Yn(...t){Oe.push(...t)}function Pe(t,e){for(let s=0,n=Oe.length;s<n;s+=1){let o=Oe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},je=t=>!!(t[ye.AND]||t[ye.OR]),Qn=t=>!!t[De.PATH],Xn=t=>!J(t)&&vt(t)&&!je(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let i=Object.keys(o);const r=Qn(o);if(!r&&i.length>1&&!je(o))return n(tt(o));if(Xn(o)){const l=r?o[De.PATH]:i[0],c=r?o[De.PATTERN]:o[l];if(!Y(c))throw new Error(kn(l));const d={keyId:Ne(l),pattern:c};return s&&(d.searcher=Pe(c,e)),d}let a={children:[],operator:i[0]};return i.forEach(l=>{const c=o[l];J(c)&&c.forEach(d=>{a.children.push(n(d))})}),a};return je(t)||(t=tt(t)),n(t)}function Jn(t,{ignoreFieldNorm:e=m.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:i,score:r})=>{const a=o?o.weight:null;n*=Math.pow(r===0&&a?Number.EPSILON:r,(a||1)*(e?1:i))}),s.score=n})}function Zn(t,e){const s=t.matches;e.matches=[],W(s)&&s.forEach(n=>{if(!W(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function qn(t,e){e.score=t.score}function eo(t,e,{includeMatches:s=m.includeMatches,includeScore:n=m.includeScore}={}){const o=[];return s&&o.push(Zn),n&&o.push(qn),t.map(i=>{const{idx:r}=i,a={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(i,a)}),a})}class oe{constructor(e,s={},n){this.options={...m,...s},this.options.useExtendedSearch,this._keyStore=new Mn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ge))throw new Error(wn);this._myIndex=s||gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let l=Y(e)?Y(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Jn(l,{ignoreFieldNorm:a}),i&&l.sort(r),pt(s)&&s>-1&&(l=l.slice(0,s)),eo(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:a})=>{if(!W(i))return;const{isMatch:l,score:c,indices:d}=s.searchIn(i);l&&o.push({item:i,idx:r,matches:[{score:c,value:i,norm:a,indices:d}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:f}=a,v=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:f});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const d=[];for(let h=0,f=a.children.length;h<f;h+=1){const v=a.children[h],k=n(v,l,c);if(k.length)d.push(...k);else if(a.operator===ye.AND)return[]}return d},o=this._myIndex.records,i={},r=[];return o.forEach(({$:a,i:l})=>{if(W(a)){let c=n(s,a,l);c.length&&(i[l]||(i[l]={idx:l,item:a,matches:[]},r.push(i[l])),c.forEach(({matches:d})=>{i[l].matches.push(...d)}))}}),r}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:a})=>{if(!W(r))return;let l=[];n.forEach((c,d)=>{l.push(...this._findMatches({key:c,value:r[d],searcher:s}))}),l.length&&i.push({idx:a,item:r,matches:l})}),i}_findMatches({key:e,value:s,searcher:n}){if(!W(s))return[];let o=[];if(J(s))s.forEach(({v:i,i:r,n:a})=>{if(!W(i))return;const{isMatch:l,score:c,indices:d}=n.searchIn(i);l&&o.push({score:c,key:e,value:i,idx:r,norm:a,indices:d})});else{const{v:i,n:r}=s,{isMatch:a,score:l,indices:c}=n.searchIn(i);a&&o.push({score:l,key:e,value:i,norm:r,indices:c})}return o}}oe.version="7.0.0";oe.createIndex=gt;oe.parseIndex=Nn;oe.config=m;oe.parseQuery=bt;Yn(Un);const to={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},so=["value","disabled"],no=["border","onClick"],oo={"w-4":"","text-right":"",op50:"","text-sm":""},io=X({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),i=D(""),r=D(0),{go:a,slides:l}=se();function c(_){return _!=null}const d=A(()=>new oe(l.value.map(_=>{var O;return(O=_.meta)==null?void 0:O.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=A(()=>i.value.startsWith("/")?i.value.substring(1):i.value),f=A(()=>d.value.search(h.value).map(_=>_.item)),v=A(()=>!!f.value.length);function k(){if(v.value){const _=f.value.at(r.value||0);_&&a(_.no)}g()}function g(){i.value="",q.value=!1}function M(_){_.preventDefault(),r.value++,r.value>=f.value.length&&(r.value=0),I()}function S(_){_.preventDefault(),r.value--,r.value<=-2&&(r.value=f.value.length-1),I()}function I(){var O;const _=(O=o.value)==null?void 0:O[r.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function y(_){r.value=0,i.value=_.target.value}function T(_){a(_),g()}return ge(q,async _=>{var O;_?(i.value="",r.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(O=s.value)==null||O.blur()}),ge(ae,()=>{var _;(_=e.value)!=null&&_.contains(ae.value)||g()}),(_,O)=>(p(),b("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:j(["fixed right-5 transition-all",u(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[N("div",to,[N("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:i.value,type:"text",disabled:!u(q),class:j(["outline-none bg-transparent",{"text-red-400":!v.value&&i.value}]),placeholder:"Goto...",onKeydown:[he(k,["enter"]),he(g,["escape"]),he(M,["down"]),he(S,["up"])],onInput:y},null,42,so)]),f.value.length>0?(p(),b("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(p(!0),b(H,null,we(f.value,(E,$)=>(p(),b("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:j(r.value===$?"bg-active op100":"op80"),onClick:Ut(V=>T(E.no),["stop","prevent"])},[N("div",oo,Q(E.no),1),w(u(Es),{no:E.no},null,8,["no"])],10,no))),128))],512)):x("v-if",!0)],2))}}),xo=U(io,[["__scopeId","data-v-b19702e3"],["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Goto.vue"]]);function ro(){const t=Yt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((i,r)=>{var g,M,S,I;const a=(g=Ue(r.params.no))==null?void 0:g.meta,l=(M=Ue(i.params.no))==null?void 0:M.meta,c=(S=a==null?void 0:a.slide)==null?void 0:S.no,d=(I=l==null?void 0:l.slide)==null?void 0:I.no;if((c!=null&&d!=null&&((c<d?a==null?void 0:a.transition:l==null?void 0:l.transition)??re.transition))!=="view-transition"){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const f=new Promise((y,T)=>{s=y,n=T});let v;const k=new Promise(y=>v=y);return setTimeout(()=>{document.startViewTransition(()=>(v(),f))},50),k}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const ao={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},lo=X({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return u(xe).cursor?(p(),b("div",ao,[w(n,{class:"absolute",style:ce({left:`${u(xe).cursor.x}%`,top:`${u(xe).cursor.y}%`})},null,8,["style"])])):x("v-if",!0)}}}),co=U(lo,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),uo=X({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:i,slides:r}=se();ge(e,()=>{var h,f;(h=e.value)!=null&&h.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(f=i.value)!=null&&f.meta&&i.value.meta.preload!==!1&&(i.value.meta.__preloaded=!0)},{immediate:!0});const a=ro(),l=Ie();rt(()=>import("./DrawingLayer-CrJXB5kB.js"),__vite__mapDeps([12,2,13,6,3,4,7,5,8,9])).then(h=>l.value=h.default);const c=A(()=>r.value.filter(h=>{var f;return((f=h.meta)==null?void 0:f.__preloaded)||h===e.value}));function d(){Ye.value=!0,Is()}return(h,f)=>(p(),b(H,null,[x(" Global Bottom "),w(u(cs)),x(" Slides "),(p(),C(nt(u(a)?"div":Xt),Qt(u(Ye)?{}:u(s),{id:"slideshow",tag:"div",onAfterLeave:d}),{default:R(()=>[(p(!0),b(H,null,we(c.value,v=>ot((p(),b("div",{key:v.no},[w(ut,{is:v.component,"clicks-context":u(n)(v),class:j([u(dt)(v),"overflow-hidden"]),route:v,"render-context":h.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[it,v===u(e)]])),128))]),_:1},16)),x(" Global Top "),w(u(us)),l.value?(p(),C(u(l),{key:0})):x("v-if",!0),u(o)?x("v-if",!0):(p(),C(co,{key:1}))],64))}}),So=U(uo,[["__scopeId","data-v-20e3fe35"],["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{xo as G,z as I,ko as N,bo as Q,Fs as S,pe as V,So as a,wo as r,yo as u};
