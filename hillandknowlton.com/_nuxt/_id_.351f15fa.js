import{_ as L,u as P,a as E,w as I,P as H,F as V,A as B,c as M,r as N,k as s,l as m,m as S,n as r,q as l,a3 as w,be as f,s as h,t as k,b as O,c0 as $,j as i,x as A,aV as K,aS as R,y as j,c1 as q}from"./entry.a5ffe6b6.js";import G from"./TeamCard.e7dc115a.js";import z from"./ActionCursor.d6a8aabd.js";import{l as x}from"./locale.83ca1a04.js";import{u as J}from"./useGlobalContent.a179bc4d.js";import{u as Q}from"./usePageTheme.46e6342d.js";import"./ImageContentful.28e07224.js";import"./MainPanel.8fc08879.js";import"./ProductPanel.efccdd41.js";import"./IconButton.3d0339e3.js";import"./MainPanelTabsNav.9c9f5824.js";import"./InertiaPlugin.04320367.js";import"./MainPanelTabsNavItem.1f25b0af.js";import"./PanelCopy.ced7894a.js";import"./PanelEmbedVideo.73c24324.js";import"./PanelImage.53de468d.js";import"./PanelTeamMember.150f29ad.js";import"./PanelRelated.62669752.js";import"./card4.a5bfd41c.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./global.de8d543b.js";import"./TeamMemberPanel.d5408c5e.js";import"./PanelPublications.7f5f7b00.js";import"./PanelPublicationsItem.c621f28c.js";import"./InterviewPanel.e178c1a5.js";import"./scroll.91b2c5c9.js";import"./client-only.a5fdf211.js";const U=p=>(K("data-v-a1d667c0"),p=p(),R(),p),W={class:"leadership"},X={class:"back-btn-icon"},Y={class:"subtitle1"},Z={class:"leadership-title h1 xl:h1d"},ee=U(()=>l("br",null,null,-1)),te=["id"],oe=["id"],se={class:"leadership-team"},ie={class:"leadership-card"},ae={__name:"[id]",async setup(p){let a,_;const{locale:b}=P(),g=E();[a,_]=I(()=>J()),await a,_(),Q({theme:H.Light,footer:V.Internal,footerTheme:B.Dark});const{data:e}=([a,_]=I(async()=>O(`office_leadership_${g.params.id}`,async c=>{try{let o=await c.getEntries({content_type:"singleSingleLocationOfficePage","fields.id[in]":g.params.id,include:4,locale:b.value}),n={},T;if(o.items.length>0){const t=o.items[0].fields;n={type:"single",id:t.id,name:t.name,sections:t.sections}}else if(o=await c.getEntries({content_type:"singleMultipleLocationOfficePage","fields.id[in]":g.params.id,include:4,locale:b.value}),o.items.length>0){const t=o.items[0].fields;n={type:"multiple",id:t.id,name:t.name,sections:t.sections}}return{...n}}catch(o){console.log("Office not found",o),j({message:"Office not found page/office/leadership",statusCode:404,fatal:!0})}})),a=await a,_(),a);M({title:e.value.name+" - Hill & Knowlton"||"",meta:[{name:"description",content:e.value.metaDescription||""},{property:"og:title",content:e.value.title+" - Hill & Knowlton"||""},{property:"og:description",content:e.value.metaDescription||""},{name:"twitter:title",content:e.value.title+" - Hill & Knowlton"||""},{name:"twitter:description",content:e.value.metaDescription||""}]});const v=N(!1);function D(){v.value=!0}function F(){v.value=!1}return(c,o)=>{const n=q,T=$,t=G,C=z;return i(),s("div",W,[m(T,{to:c.localePath(`/office/${r(e).id}`),class:"back-btn"},{default:S(()=>[l("div",X,[m(n,{name:"chevron"})]),l("span",Y,f(r(x).data.back),1)]),_:1},8,["to"]),l("h1",Z,[w(f(r(x).data.leadershipInThe)+" ",1),ee,w(" "+f(r(e).name),1)]),(i(!0),s(h,null,k(r(e).sections,y=>(i(),s("div",{class:"office__section",id:y.fields.sectionTitle,key:y.sys.id},[(i(!0),s(h,null,k(y.fields.blocks,u=>(i(),s(h,{key:u.sys.id},[u.sys.contentType.sys.id==="blockTeamSection"?(i(),s("div",{key:0,id:u.sys.id,ref_for:!0,ref:c.myAddRefFunction},[l("div",se,[(i(!0),s(h,null,k(u.fields.teamMembers,(d,ne)=>(i(),s("div",ie,[m(t,{image:d.fields.image,id:d.fields.id,position:d.fields.position,name:d.fields.name,teamMember:d,grayImage:!0,onMouseenter:D,onMouseleave:F},null,8,["image","id","position","name","teamMember"])]))),256))])],8,oe)):A("",!0)],64))),128))],8,te))),128)),m(C,{show:v.value,theme:"dark-blue"},{default:S(()=>[l("span",null,f(r(x).data.readBio),1),w(),m(n,{name:"arrow"})]),_:1},8,["show"])])}}},Be=L(ae,[["__scopeId","data-v-a1d667c0"]]);export{Be as default};
