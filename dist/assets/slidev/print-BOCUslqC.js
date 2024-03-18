import{d as p,_ as u,y as h,b as a,e as t,x as s,A as r,F as f,Z as v,o as l,$ as g,l as x,g as b}from"../modules/vue-DqM6j7Au.js";import{u as y,h as N,c as m,b as k}from"../index-APqOj1cz.js";import{N as w}from"./NoteDisplay-CbdyjMfP.js";import"../modules/shiki-BjLwEkPr.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=p({__name:"print",setup(M){const{slides:d,total:_}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(r(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(l(!0),a(f,null,v(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(r(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),Z=k(F,[["__file","/home/leon/.asdf/installs/nodejs/21.4.0/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
