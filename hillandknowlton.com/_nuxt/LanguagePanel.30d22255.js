import{d as S,e as C,w as L,u as R,c4 as N,bO as I,j as l,k as o,q as t,be as i,l as d,n as e,bQ as B,s as b,t as v,aF as p,m as V,a3 as $,bP as g,p as T,ce as A,cf as D,c1 as F,ca as j,aV as q,aS as z,_ as E}from"./entry.a5ffe6b6.js";import{u as G}from"./composables.abc3615f.js";import{g as O}from"./global.de8d543b.js";import{u as Q}from"./useGlobalContent.a179bc4d.js";import{r as H}from"./Contentful.13d3140f.js";import"./locale.83ca1a04.js";import"./EntryLink.vue.b1ce39e8.js";const J=c=>(q("data-v-9d54e516"),c=c(),z(),c),K={class:"language-panel__title h3 xl:h4"},M={class:"language-panel__description p5 xl:p4"},U=J(()=>t("hr",{class:"language-panel__rule"},null,-1)),W={class:"language-panel__items"},X={class:"p1 xl:h5"},Y={class:"language-panel__sub-items"},Z=S({__name:"LanguagePanel",async setup(c){let f,h;const w=G(),u=C(()=>O.content);[f,h]=L(()=>Q()),await f,h();const{locale:m}=R(),x=N(),n=I();async function k(r,P,_){g.showLanguagePanel=!1,g.languageRegion=r,m.value=P,await A(),await x.push(_),D({force:!0})}return(r,P)=>{const _=F,y=j;return l(),o("div",{class:p({"language-panel-wrapper":!0,"language-panel-wrapper--open":e(g).showLanguagePanel&&!e(T).inTransition}),"data-lenis-prevent":""},[t("h4",K,i(u.value.languagePanel.title),1),t("p",M,[d(e(B),{document:u.value.languagePanel.descriptionRich,nodeRenderers:e(H)()},null,8,["document","nodeRenderers"])]),U,t("div",W,[(l(!0),o(b,null,v(u.value.languagePanel.options,(a,ee)=>(l(),o("div",{key:a.label,class:p({"language-panel__item":!0,selected:a.office&&e(n).fullPath.includes("office")&&e(n).fullPath.includes(a.office)})},[t("span",X,i(a.label),1),t("ul",Y,[(l(!0),o(b,null,v(a.languages,s=>(l(),o("li",{key:s.code,class:"language-panel__sub-item subtitle1"},[d(y,{type:"Button",class:p(["language-panel__button",{"language-panel__button":!0,selected:s.code===e(m)}]),onClick:ae=>k(a.label,s.code,a.office&&(!e(n).fullPath.includes("office")||e(n).fullPath.includes("office")&&!e(n).fullPath.includes(a.office))?r.localePath(`/office/${a.office}`,s.code):e(w)(s.code))},{default:V(()=>[$(i(s.name)+" ",1),d(_,{name:"arrow-straight"})]),_:2},1032,["class","onClick"])]))),128))])],2))),128))])],2)}}});const re=E(Z,[["__scopeId","data-v-9d54e516"]]);export{re as default};
