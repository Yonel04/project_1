import{d as a,j as i,k as t,x as s,q as l,aF as c,_ as h}from"./entry.a5ffe6b6.js";const d=["srcset"],n=["srcset"],f=["srcset"],m=["srcset"],u=["src","alt","loading","width","height"],w=a({__name:"ImageContentful",props:{src:{type:String,required:!0},size:{type:Object,required:!0},alt:{type:String,required:!0},srcMobile:{type:String,required:!1},sizeMobile:{type:Object,required:!1},imgClassName:{type:String,default:""},lazy:{type:Boolean,default:!1}},setup(e){return(b,g)=>(i(),t("picture",null,[e.srcMobile?(i(),t("source",{key:0,srcset:`${e.srcMobile}?fm=avif&q=70&w=${e.sizeMobile.width}&h=${e.sizeMobile.height}&fit=pad 1x, ${e.srcMobile}?fm=avif&q=70&w=${e.sizeMobile.width*2}&h=${e.sizeMobile.height*2}&fit=pad 2x`,type:"image/avif",media:"(max-width: 1050px)"},null,8,d)):s("",!0),e.srcMobile?(i(),t("source",{key:1,srcset:`${e.srcMobile}?fm=webp&q=70&w=${e.sizeMobile.width}&h=${e.sizeMobile.height}&fit=pad 1x, ${e.srcMobile}?fm=webp&q=70&w=${e.sizeMobile.width*2}&h=${e.sizeMobile.height*2}&fit=pad 2x`,type:"image/webp",media:"(max-width: 1050px)"},null,8,n)):s("",!0),l("source",{srcset:`${e.src}?fm=avif&q=70&w=${e.size.width}&h=${e.size.height}&fit=fill 1x, ${e.src}?fm=avif&q=70&w=${e.size.width*2}&h=${e.size.height*2}&fit=fill 2x`,type:"image/avif"},null,8,f),l("source",{srcset:`${e.src}?fm=webp&q=70&w=${e.size.width}&h=${e.size.height}&fit=fill 1x, ${e.src}?fm=webp&q=70&w=${e.size.width*2}&h=${e.size.height*2}&fit=fill 2x`,type:"image/webp"},null,8,m),l("img",{class:c(e.imgClassName),src:`${e.src}?q=70&w=${e.size.width}&h=${e.size.height}&fit=fill`,alt:e.alt,loading:e.lazy?"lazy":void 0,width:e.size.width,height:e.size.height},null,10,u)]))}});const $=h(w,[["__scopeId","data-v-53773cbb"]]);export{$ as default};
