import f from"./ImageContentful.28e07224.js";import{d as m,e as g,j as t,v as l,m as h,q as a,aF as c,x as n,k as r,s as y,t as p,be as s,ca as b,_ as q}from"./entry.a5ffe6b6.js";const k={key:1,class:"card__tags"},x={class:"card__content"},v={class:"card__subtitle subtitle1"},w={class:"card__title h4"},S={class:"card__author subtitle1"},z=m({__name:"card1",props:{image:{type:String,required:!0,default:"http://placekitten.com/1000/1000"},title:{type:String,required:!0,default:"Title"},subtitle:{type:String,required:!1,default:"Subtitle"},typeId:{type:String,required:!1},author:{type:String,required:!1,default:"By H&K Global"},squarer:{type:Boolean,required:!1,default:!1},tags:{type:Array,required:!1,default:void 0}},setup(e){const d=e,o=g(()=>d.typeId==="news");return(B,C)=>{const u=f,_=b;return t(),l(_,{class:"card"},{default:h(()=>[a("div",{class:c(["card__media",{"card__media--squarer":e.squarer,"card__media--news":o.value}])},[e.image.fields?(t(),l(u,{key:0,src:e.image.fields.file.url,size:{width:594,height:e.squarer?475:330},srcMobile:e.image.fields.file.url,sizeMobile:{width:311,height:e.squarer?249:183},alt:e.image.fields.description,lazy:!0},null,8,["src","size","srcMobile","sizeMobile","alt"])):n("",!0),e.tags?(t(),r("ul",k,[(t(!0),r(y,null,p(e.tags,i=>(t(),r("li",{key:i,class:c(["card__tag uppercase p5 xl:p5",[`${i.toLowerCase()}`]])},s(i),3))),128))])):n("",!0)],2),a("div",x,[a("span",v,s(e.subtitle),1),a("h3",w,s(e.title),1),a("span",S,s(e.author),1)])]),_:1})}}});const N=q(z,[["__scopeId","data-v-331e3eff"]]);export{N as default};
