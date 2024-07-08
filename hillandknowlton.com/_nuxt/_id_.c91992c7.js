import j from"./OfficeHero.79ffb75c.js";import z from"./MultipleOfficeHero.375eebeb.js";import G from"./TeamSection.aaf942fc.js";import Q from"./QuoteWithImage.d1a16889.js";import U from"./ServicesList.86bbc5c6.js";import W from"./ExpandableList.899ea647.js";import Z from"./TitleParagraphImage.910d72b0.js";import J from"./Images.c493a983.js";import X from"./Cities.ef90c7cb.js";import ee from"./RelatedItems.b64336ca.js";import te from"./NumberTitleParagraph.c7f08569.js";import ie from"./TitleParagraph.546f3d2a.js";import{d as se,u as ne,w as q,bO as oe,b as le,c as ae,r as S,P as F,F as ce,A as re,g as de,i as me,h as k,bY as pe,p as H,bZ as g,j as a,k as _,n as s,l as E,x as d,q as ue,s as O,t as B,v as h,y as fe,_ as _e}from"./entry.a5ffe6b6.js";import{u as ye}from"./useGlobalContent.a179bc4d.js";import{u as he}from"./usePageTheme.46e6342d.js";import"./AnimatedClock.20b7c5c6.js";import"./AnimatedClockDigits.d0baf311.js";import"./ImageContentful.28e07224.js";import"./locale.83ca1a04.js";import"./Device.430fdbcd.js";import"./backBtn.6ed90b16.js";import"./Delay.0741e482.js";import"./SecondaryIconButton.f501442f.js";import"./InertiaPlugin.04320367.js";import"./TeamCard.e7dc115a.js";import"./MainPanel.8fc08879.js";import"./ProductPanel.efccdd41.js";import"./IconButton.3d0339e3.js";import"./MainPanelTabsNav.9c9f5824.js";import"./MainPanelTabsNavItem.1f25b0af.js";import"./PanelCopy.ced7894a.js";import"./PanelEmbedVideo.73c24324.js";import"./PanelImage.53de468d.js";import"./PanelTeamMember.150f29ad.js";import"./PanelRelated.62669752.js";import"./card4.a5bfd41c.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./global.de8d543b.js";import"./TeamMemberPanel.d5408c5e.js";import"./PanelPublications.7f5f7b00.js";import"./PanelPublicationsItem.c621f28c.js";import"./ActionCursor.d6a8aabd.js";import"./InterviewPanel.e178c1a5.js";import"./scroll.91b2c5c9.js";import"./client-only.a5fdf211.js";import"./rich-text-plain-text-renderer.es5.996a2dcf.js";import"./ExpandableListItem.9e01eaa7.js";import"./ExpandableIcon.87eebd47.js";import"./ImagesCarousel.f1497865.js";import"./ImageFullWidth.67ff072c.js";import"./ImagesDouble.0d3abfa0.js";import"./ImageNaturalWidth.b42cbccc.js";import"./City.44058f81.js";function R(v,p){return v??p()}function T(v){let p,u=v[0],b=1;for(;b<v.length;){const y=v[b],e=v[b+1];if(b+=2,(y==="optionalAccess"||y==="optionalCall")&&u==null)return;y==="access"||y==="optionalAccess"?(p=u,u=e(u)):(y==="call"||y==="optionalCall")&&(u=e((...C)=>u.call(p,...C)),p=void 0)}return u}const ge={class:"office"},ve={key:0,class:"office__singleIntro"},be={key:1,class:"office__multipleIntro"},Te=["id"],Ce=["id"],xe=se({__name:"[id]",async setup(v){let p,u;const{locale:b}=ne();[p,u]=q(()=>ye()),await p,u();const y=oe(),{data:e}=([p,u]=q(async()=>le(`office_${y.params.id}`,async t=>{try{let l=await t.getEntries({content_type:"singleSingleLocationOfficePage","fields.id[in]":y.params.id,include:4,locale:b.value}),m={},c;if(l.items.length>0){const i=l.items[0].fields;m={type:"single",id:i.id,title:i.city.fields.name,metaDescription:i.metaDescription,city:i.city.fields.name,subtitle:i.subtitle,description:i.description,image:i.city.fields.image,address:i.city.fields.address,location:i.city.fields.location,phone:i.city.fields.phoneNumber,utc:i.city.fields.utc,sections:i.sections,sections2:i.sections2,highlightedLabel:i.highlightedLabel||"Highlighted Case Studies",relatedCases:i.highlightedCaseStudies,relatedLabel:i.relatedLabel||`Related to ${i.city.fields.name} office`}}else if(l=await t.getEntries({content_type:"singleMultipleLocationOfficePage","fields.id[in]":y.params.id,include:4,locale:b.value}),l.items.length>0){const i=l.items[0].fields;m={type:"multiple",id:i.id,name:i.name,title:i.name,metaDescription:i.metaDescription,subtitle:i.subtitle,description:i.description,cities:i.cities,sections:i.sections,sections2:i.sections2,highlightedLabel:i.highlightedLabel||"Highlighted Case Studies",relatedCases:i.highlightedCaseStudies,relatedLabel:i.relatedLabel||`Related to ${i.name} offices`}}let f=[];if(l.items.length>0){const i=await t.getEntries({"sys.contentType.sys.id[in]":"news,caseStudy,insight",links_to_entry:T([l,"access",r=>r.items,"access",r=>r[0],"optionalAccess",r=>r.sys,"optionalAccess",r=>r.id])||null,locale:b.value,limit:50});T([i,"optionalAccess",r=>r.items,"access",r=>r.length])&&(f=i.items.sort((r,A)=>{const P=R(r.fields.date,()=>r.fields.publishedDate),D=R(A.fields.date,()=>A.fields.publishedDate);return new Date(D)-new Date(P)}).slice(0,10))}return{...m,relatedItems:f}}catch(l){console.log("Office not found coucou pages/office",l),fe({message:"Office not found",statusCode:404,fatal:!0})}})),p=await p,u(),p);ae({title:e.value.title+" - Hill & Knowlton"||"",meta:[{name:"description",content:e.value.metaDescription||""},{property:"og:title",content:e.value.title+" - Hill & Knowlton"||""},{property:"og:description",content:e.value.metaDescription||""},{name:"twitter:title",content:e.value.title+" - Hill & Knowlton"||""},{name:"twitter:description",content:e.value.metaDescription||""}]});const C=S(),x=S(new Set);function w(t){x.value.add(t)}const L=S(),I=S();he({theme:F.Dark,footer:ce.Office,footerTheme:re.Dark}),de(()=>{N()}),me(()=>{L.value&&L.value.disconnect(),I.value&&I.value.disconnect(),k.pageEnterCompleted.off(M),pe()});const N=()=>{e.value&&(H.inTransition?k.pageEnterCompleted.on(M):M())},M=()=>{T([e,"access",t=>t.value,"access",t=>t.sections,"optionalAccess",t=>t.length])&&e.value.sections.forEach(t=>{const{id:l}=t.sys,{title:m,sectionTitle:c}=t.fields,f=m||c;!l||!f||g.sections.push({id:l,title:f})}),T([e,"access",t=>t.value,"access",t=>t.relatedCases,"optionalAccess",t=>t.length])&&g.sections.push({id:"relatedCases",title:e.value.highlightedLabel}),T([e,"access",t=>t.value,"access",t=>t.relatedItems,"optionalAccess",t=>t.length])&&g.sections.push({id:"relatedItems",title:e.value.relatedLabel}),T([e,"access",t=>t.value,"access",t=>t.sections2,"optionalAccess",t=>t.length])&&e.value.sections2.forEach(t=>{const{id:l}=t.sys;let m=null;if(T([t,"access",c=>c.fields,"optionalAccess",c=>c.type,"optionalAccess",c=>c.fields])){const{title:c,sectionTitle:f}=t.fields.type.fields;m=c||f}else if(t.fields){const{title:c,sectionTitle:f}=t.fields;m=c||f}!l||!m||g.sections.push({id:l,title:m})}),g.label=e.value.subtitle,g.title=R(e.value.city,()=>e.value.name),L.value=new IntersectionObserver(t=>{window.scrollY!==0&&(t[0].intersectionRatio>0?(H.theme=F.Light,g.showSub=!0):(H.theme=F.Dark,g.showSub=!1))},{threshold:0,rootMargin:"0px 0px -85% 0px"}),I.value=new IntersectionObserver(t=>{for(let l=0,m=t.length;l<m;l++)if(t[l].isIntersecting){x.value.forEach(c=>{c.id===t[l].target.id&&(g.activeSection=c.id)});break}},{threshold:0,rootMargin:"0px 0px -85% 0px"}),C.value&&L.value.observe(C.value),x.value.size>0&&x.value.forEach(t=>I.value.observe(t))};return(t,l)=>{const m=j,c=z,f=G,i=Q,r=U,A=W,P=Z,D=J,K=X,$=ee,V=te,Y=ie;return a(),_("main",ge,[s(e)&&s(e).type==="single"?(a(),_("div",ve,[E(m,{title:s(e).city,subtitle:s(e).subtitle,description:s(e).description,image:s(e).image,address:s(e).address,location:s(e).location,phone:s(e).phone,utc:s(e).utc},null,8,["title","subtitle","description","image","address","location","phone","utc"])])):d("",!0),s(e)&&s(e).type==="multiple"?(a(),_("div",be,[E(c,{subtitle:s(e).subtitle,title:s(e).name,description:s(e).description,images:s(e).cities.map(o=>o.fields.image.fields.file.url)},null,8,["subtitle","title","description","images"])])):d("",!0),ue("div",{class:"office__sections",ref_key:"root",ref:C},[s(e)?(a(!0),_(O,{key:0},B(s(e).sections,o=>(a(),_("div",{class:"office__section",id:o.sys.id,key:o.sys.id,ref_for:!0,ref:w},[(a(!0),_(O,null,B(o.fields.blocks,n=>(a(),_(O,{key:n.sys.id},[n.sys.contentType.sys.id==="blockTeamSection"?(a(),h(f,{key:0,title:n.fields.title,teamMembers:n.fields.teamMembers,"office-id":s(e).id,grayImages:!0},null,8,["title","teamMembers","office-id"])):d("",!0),n.sys.contentType.sys.id==="blockQuoteWithImage"?(a(),h(i,{key:1,image:n.fields.image,quote:n.fields.quote,author:n.fields.name,position:n.fields.position},null,8,["image","quote","author","position"])):d("",!0),n.sys.contentType.sys.id==="blockServicesList"?(a(),h(r,{key:2,title:n.fields.title,description:n.fields.description,ctaTitle:n.fields.ctaTitle,services:n.fields.services},null,8,["title","description","ctaTitle","services"])):d("",!0),n.sys.contentType.sys.id==="blockExpandableList"?(a(),h(A,{key:3,title:n.fields.title,description:n.fields.description,ctaTitle:n.fields.ctaTitle,items:n.fields.items},null,8,["title","description","ctaTitle","items"])):d("",!0),n.sys.contentType.sys.id==="blockTitleParagraphImage"?(a(),h(P,{key:4,title:n.fields.title,image:n.fields.image,imageCaption:n.fields.imageCaption,content:n.fields.content},null,8,["title","image","imageCaption","content"])):d("",!0),n.sys.contentType.sys.id==="blockImages"?(a(),h(D,{key:5,type:n.fields.type},null,8,["type"])):d("",!0),n.sys.contentType.sys.id==="blockCities"?(a(),h(K,{key:6,cities:s(e).cities},null,8,["cities"])):d("",!0)],64))),128))],8,Te))),128)):d("",!0),s(e)&&T([s,"call",o=>o(e),"access",o=>o.relatedCases,"optionalAccess",o=>o.length])?(a(),_("div",{key:1,class:"office__section",id:"relatedCases",ref:w},[E($,{items:s(e).relatedCases,title:s(e).highlightedLabel,"default-display-count":3},null,8,["items","title"])])):d("",!0),s(e)&&s(e).relatedItems.length?(a(),_("div",{key:2,class:"office__section",id:"relatedItems",ref:w},[E($,{items:s(e).relatedItems,title:s(e).relatedLabel,theme:"dark-blue"},null,8,["items","title"])])):d("",!0),(a(!0),_(O,null,B(s(e).sections2,o=>(a(),_("div",{class:"office__section",id:o.sys.id,ref_for:!0,ref:w,key:o.sys.id},[o.sys.contentType.sys.id==="blockImages"?(a(),h(D,{key:0,type:o.fields.type},null,8,["type"])):d("",!0),o.sys.contentType.sys.id==="numberTitleParagraph"?(a(),h(V,{key:1,title:o.fields.title,number:o.fields.number,content:o.fields.content,theme:"dark-blue"},null,8,["title","number","content"])):d("",!0),o.sys.contentType.sys.id==="blockTitleParagraph"?(a(),h(Y,{key:2,title:o.fields.title,content:o.fields.content,cta:o.fields.cta,theme:"dark-blue"},null,8,["title","content","cta"])):d("",!0)],8,Ce))),128))],512)])}}});const wt=_e(xe,[["__scopeId","data-v-2350fcb4"]]);export{wt as default};
