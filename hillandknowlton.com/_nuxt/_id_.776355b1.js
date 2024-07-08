import R from"./InsightHero.3b5fb7e4.js";import{_ as U}from"./StickyLayer.vue.d25c71c2.js";import K from"./TeamSection.aaf942fc.js";import Y from"./TitleParagraphImage.910d72b0.js";import G from"./NumberTitleParagraph.c7f08569.js";import Q from"./Images.c493a983.js";import j from"./EmbeddedVideo.ff04c2c6.js";import W from"./QuoteWithImage.d1a16889.js";import Z from"./Quote.d4ab7302.js";import J from"./AwardsList.2aee3c3e.js";import X from"./RelatedItems.b64336ca.js";import k from"./ReachOutCta.12892b9b.js";import{d as ee,u as te,w as q,a as ie,b as se,c as ne,r as C,P as A,F as oe,A as ae,g as re,p as I,h as le,i as me,bY as de,j as s,k as y,l as T,m as L,n as u,q as M,s as E,t as z,v as l,x as m,y as ce,bZ as v,_ as pe}from"./entry.a5ffe6b6.js";import{l as B}from"./locale.83ca1a04.js";import{n as ue,g as _e}from"./getReadingTime.820b5db6.js";import{u as fe}from"./useGlobalContent.a179bc4d.js";import{u as ge}from"./usePageTheme.46e6342d.js";import"./backBtn.6ed90b16.js";import"./ImageContentful.28e07224.js";import"./LineByLine.6c421f8e.js";import"./SplitText.a8cce3cb.js";import"./Delay.0741e482.js";import"./global.de8d543b.js";import"./SecondaryIconButton.f501442f.js";import"./InertiaPlugin.04320367.js";import"./TeamCard.e7dc115a.js";import"./MainPanel.8fc08879.js";import"./ProductPanel.efccdd41.js";import"./IconButton.3d0339e3.js";import"./MainPanelTabsNav.9c9f5824.js";import"./MainPanelTabsNavItem.1f25b0af.js";import"./PanelCopy.ced7894a.js";import"./PanelEmbedVideo.73c24324.js";import"./PanelImage.53de468d.js";import"./PanelTeamMember.150f29ad.js";import"./PanelRelated.62669752.js";import"./card4.a5bfd41c.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./TeamMemberPanel.d5408c5e.js";import"./PanelPublications.7f5f7b00.js";import"./PanelPublicationsItem.c621f28c.js";import"./ActionCursor.d6a8aabd.js";import"./InterviewPanel.e178c1a5.js";import"./scroll.91b2c5c9.js";import"./client-only.a5fdf211.js";import"./rich-text-plain-text-renderer.es5.996a2dcf.js";import"./ImagesCarousel.f1497865.js";import"./ImageFullWidth.67ff072c.js";import"./ImagesDouble.0d3abfa0.js";import"./ImageNaturalWidth.b42cbccc.js";function he(f){let a,n=f[0],c=1;for(;c<f.length;){const o=f[c],t=f[c+1];if(c+=2,(o==="optionalAccess"||o==="optionalCall")&&n==null)return;o==="access"||o==="optionalAccess"?(a=n,n=t(n)):(o==="call"||o==="optionalCall")&&(n=t((...g)=>n.call(a,...g)),a=void 0)}return n}const ye={class:"insight"},ve=["id"],we={class:"insight__section"},Te=ee({__name:"[id]",async setup(f){let a,n;const{locale:c}=te();[a,n]=q(()=>fe()),await a,n();const o=ie(),{data:t}=([a,n]=q(async()=>se(`insight_${o.params.id}`,async h=>{try{const i=(await h.getEntries({content_type:"insight","fields.id[in]":o.params.id,include:3,locale:c.value})).items[0].fields,p=new Date(i.publishedDate),x=p.getDate(),D=`${p.toLocaleString("default",{month:"long"})}, ${p.getDate()}${ue(x)}, ${p.getFullYear()}`,r={id:i.id,title:i.title,metaDescription:i.metaDescription,image:i.image,details:[{label:"date",content:D}],sections:i.sections,relatedItems:[],relatedTitle:i.sector.fields.title};i.author.sys.contentType.sys.id==="singleMultipleLocationOfficePage"||i.author.sys.contentType.sys.id==="singleSingleLocationOfficePage"?i.author.fields.id!=="h-and-k-global"&&r.details.push({label:"authorLabel",content:i.author.fields.name}):r.details.push({label:"authorLabel",content:i.author.fields.name}),i.service&&r.details.push({label:"service",content:i.service.fields.name}),i.sector&&r.details.push({label:"sector",content:i.sector.fields.title});try{if(i.sector){const _=await h.getEntries({"sys.contentType.sys.id[in]":"news,caseStudy,insight",links_to_entry:i.sector.sys.id,locale:c.value,limit:10});if(he([_,"optionalAccess",d=>d.items,"access",d=>d.length])){const d=_.items.filter(b=>b.fields.id!==o.params.id);d.length&&(r.relatedItems=d)}}}catch(_){console.log("Problem fetching related data 6",_)}return r.details.push({label:"timeRemaining",content:_e(r).toString()+(B.data.timeRemainingUnit||" ")}),r}catch{ce({message:`Insight not found: ${o.params.id}`,statusCode:404,fatal:!0})}})),a=await a,n(),a);ne({title:t.value.title+" - Hill & Knowlton",meta:[{name:"description",content:t.value.metaDescription||""},{property:"og:image",content:t.value.image?`https:${t.value.image.fields.file.url}?w=1200&h=630`:`${{}.VUE_APP_DOMAIN}/meta.png`},{name:"twitter:image",content:t.value.image?`https:${t.value.image.fields.file.url}?w=1200&h=630`:`${{}.VUE_APP_DOMAIN}/meta.png`},{property:"og:title",content:t.value.title+" - Hill & Knowlton"||""},{property:"og:description",content:t.value.metaDescription||""},{name:"twitter:title",content:t.value.title+" - Hill & Knowlton"||""},{name:"twitter:description",content:t.value.metaDescription||""}]});const g=C();C(new Set);const w=C(),P=()=>{v.label=B.data.insight,v.title=t.value.title,v.showProgress=!0,F()};ge({theme:A.Dark,footer:oe.Internal,footerTheme:ae.Dark}),re(()=>{I.inTransition?le.pageEnterCompleted.on(P):P()}),me(()=>{w.value&&w.value.disconnect(),de()});const F=()=>{w.value=new IntersectionObserver(h=>{window.scrollY!==0&&(h[0].intersectionRatio>0?(I.theme=A.Light,v.showSub=!0):(I.theme=A.Dark,v.showSub=!1))},{threshold:0,rootMargin:"0px 0px -85% 0px"}),g.value&&w.value.observe(g.value)};return(h,S)=>{const i=R,p=U,x=K,D=Y,r=G,_=Q,d=j,b=W,O=Z,V=J,H=X,N=k;return s(),y("main",ye,[T(p,{class:"insight__intro"},{default:L(()=>[T(i,{title:u(t).title,image:u(t).image,details:u(t).details},null,8,["title","image","details"])]),_:1}),M("div",{class:"insight__sections",ref_key:"root",ref:g},[(s(!0),y(E,null,z(u(t).sections,$=>(s(),y("div",{class:"insight__section",key:$.fields.sectionTitle},[(s(!0),y(E,null,z($.fields.blocks,e=>(s(),y("div",{key:e.sys.id,id:e.sys.id},[e.sys.contentType.sys.id==="blockTeamSection"?(s(),l(x,{key:0,title:e.fields.title,teamMembers:e.fields.teamMembers},null,8,["title","teamMembers"])):m("",!0),e.sys.contentType.sys.id==="blockTitleParagraphImage"?(s(),l(D,{key:1,title:e.fields.title,image:e.fields.image,imageCaption:e.fields.imageCaption,content:e.fields.content},null,8,["title","image","imageCaption","content"])):m("",!0),e.sys.contentType.sys.id==="numberTitleParagraph"?(s(),l(r,{key:2,title:e.fields.title,number:e.fields.number,content:e.fields.content,insight:!0},null,8,["title","number","content"])):m("",!0),e.sys.contentType.sys.id==="blockImages"?(s(),l(_,{key:3,type:e.fields.type},null,8,["type"])):m("",!0),e.sys.contentType.sys.id==="blockEmbeddedVideo"?(s(),l(d,{key:4,image:e.fields.thumbnail,url:e.fields.embedUrl},null,8,["image","url"])):m("",!0),e.sys.contentType.sys.id==="blockQuoteWithImage"?(s(),l(b,{key:5,image:e.fields.image,quote:e.fields.quote,author:e.fields.name,position:e.fields.position},null,8,["image","quote","author","position"])):m("",!0),e.sys.contentType.sys.id==="blockQuote"?(s(),l(O,{key:6,quote:e.fields.quote,author:e.fields.name,position:e.fields.position},null,8,["quote","author","position"])):m("",!0),e.sys.contentType.sys.id==="blockAwardsList"?(s(),l(V,{key:7,title:e.fields.title,"gold-title":e.fields.titleGoldAwards,"gold-list":e.fields.gold,"silver-title":e.fields.titleSilverAwards,"silver-list":e.fields.silver,"bronze-title":e.fields.titleBronzeAwards,"bronze-list":e.fields.bronze},null,8,["title","gold-title","gold-list","silver-title","silver-list","bronze-title","bronze-list"])):m("",!0)],8,ve))),128))]))),128)),T(p,{start:"bottom +=75%",class:"insight__section"},{default:L(()=>[u(t).relatedItems.length?(s(),l(H,{key:0,items:u(t).relatedItems,title:u(t).relatedTitle},null,8,["items","title"])):m("",!0),M("div",we,[T(N,{theme:"purple"})])]),_:1})],512)])}}});const vt=pe(Te,[["__scopeId","data-v-64bb838c"]]);export{vt as default};
