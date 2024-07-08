import h from"./InternalFooter.6f0dd481.js";import w from"./ImageContentful.28e07224.js";import{d as v,bN as _,bW as y,u as S,w as b,c5 as x,r as p,g as E,h as f,i as C,bR as k,j as z,k as A,q as d,l as g,a as F,y as B,_ as M}from"./entry.a5ffe6b6.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./global.de8d543b.js";function P(l){let s,e=l[0],r=1;for(;r<l.length;){const o=l[r],u=l[r+1];if(r+=2,(o==="optionalAccess"||o==="optionalCall")&&e==null)return;o==="access"||o==="optionalAccess"?(s=e,e=u(e)):(o==="call"||o==="optionalCall")&&(e=u((...a)=>e.call(s,...a)),s=void 0)}return e}const T={class:"show-footer--content"},q={class:"footer-container grid"},N={class:"xl:col-start-2 xl:col-span-14"},R={class:"footer-img"},V=1,W=v({__name:"ShowFooter",props:{image:{type:String}},async setup(l){let s,e;typeof window<"u"&&_.registerPlugin(y);const{locale:r}=S();[s,e]=b(async()=>x("navigation",async({$contentful:n,$previewContentful:i})=>{try{return{internalFooter:(await(F().query.preview=="true"?i:n).getEntries({content_type:"global",limit:1,include:5,locale:r.value})).items[0].fields.internalFooter.fields}}catch{B({message:"Show Footer not found",statusCode:404,fatal:!0})}})),s=await s,e(),p(!1),E(()=>{f.pageEnter.on(c),f.resize.on(c),c()}),C(()=>{u(!1),f.pageEnter.off(c),f.resize.off(c)});let o=[];const u=(n=!0)=>{o.forEach(i=>{n&&_.utils.selector(a.value),P([i,"access",t=>t.scrollTrigger,"optionalAccess",t=>t.kill,"call",t=>t(n)]),i.kill()}),o=[]},a=p(),c=()=>{const n=k.windowWidth*V*.1,i=_.utils.selector(a.value);_.timeline({scrollTrigger:{trigger:a.value.querySelector(".show-footer--content"),start:"top 80%",end:"bottom top",scrub:!0}}).fromTo(i(".footer-img img"),{y:n},{y:-n,ease:"none"})};return(n,i)=>{const t=h,m=w;return z(),A("div",{class:"show-footer",ref_key:"root",ref:a},[d("div",T,[g(t,{theme:"blue"}),d("div",q,[d("div",N,[d("div",R,[g(m,{src:l.image.fields.file.url,size:{width:1080,height:608},srcMobile:l.image.fields.file.url,sizeMobile:{width:512,height:304},alt:"footer",lazy:!1},null,8,["src","srcMobile"])])])])])],512)}}});const J=M(W,[["__scopeId","data-v-e90c571a"]]);export{J as default};
