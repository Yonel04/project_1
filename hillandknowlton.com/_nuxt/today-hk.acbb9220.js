import p from"./TodayHkHero.a19bb6cc.js";import d from"./TodayHkMain.2e318d95.js";import{d as _,w as a,b as u,c as f,P as y,F as b,A as h,j as k,k as v,q as r,l,n as i,y as w,_ as T}from"./entry.a5ffe6b6.js";import{u as C}from"./useGlobalContent.a179bc4d.js";import{u as L}from"./usePageTheme.46e6342d.js";import"./LineByLine.6c421f8e.js";import"./SplitText.a8cce3cb.js";import"./Delay.0741e482.js";import"./global.de8d543b.js";import"./TitleMask.2acfb9f4.js";import"./ScrollCta.791b7b36.js";import"./TodayHkCursor.88a7d964.js";import"./rich-text-plain-text-renderer.es5.996a2dcf.js";import"./ImageContentful.28e07224.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./locale.83ca1a04.js";const D={class:"today-hk"},H={class:"today-hk__intro"},g=_({__name:"today-hk",async setup(x){let o,s;[o,s]=a(()=>C()),await o,s();const{data:t}=([o,s]=a(async()=>u("todayHK",async n=>{try{const e=await n.getEntries({content_type:"mainTodayHk",include:3});return{title:e.items[0].fields.title,metaDescription:e.items[0].fields.metaDescription,subtitle:e.items[0].fields.subtitle,descriptionLabel:e.items[0].fields.descriptionLabel,description:e.items[0].fields.description,scrollCTALabel:e.items[0].fields.scrollCTALabel,sections:e.items[0].fields.sections}}catch{w({message:"Today H&K not found",statusCode:404,fatal:!0})}})),o=await o,s(),o);return f({title:t.value.title+" - Hill & Knowlton",meta:[{name:"description",content:t.value.metaDescription||""},{property:"og:title",content:t.value.title+" - Hill & Knowlton"||""},{property:"og:description",content:t.value.metaDescription||""},{name:"twitter:title",content:t.value.title+" - Hill & Knowlton"||""},{name:"twitter:description",content:t.value.metaDescription||""}]}),L({theme:y.Dark,footer:b.Internal,footerTheme:h.Dark}),(n,e)=>{const c=p,m=d;return k(),v("main",D,[r("div",H,[l(c,{title:i(t).title,subtitle:i(t).subtitle,descriptionLabel:i(t).descriptionLabel,description:i(t).description,scrollCTALabel:i(t).scrollCTALabel},null,8,["title","subtitle","descriptionLabel","description","scrollCTALabel"])]),r("div",null,[l(m,{sections:i(t).sections},null,8,["sections"])])])}}});const R=T(g,[["__scopeId","data-v-00def4dc"]]);export{R as default};
