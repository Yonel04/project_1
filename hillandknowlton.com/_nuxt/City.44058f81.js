import{d as u,e as y,g as p,aJ as h,j as t,k as s,q as c,x as a,be as i,l,n as r,bQ as f,c1 as g,_ as k}from"./entry.a5ffe6b6.js";import{l as v}from"./locale.83ca1a04.js";import{i as x}from"./Device.430fdbcd.js";const b={class:"city"},C={key:0,class:"city__visual"},S=["src","alt"],$={key:1,class:"city__title p2 xl:h5"},j={class:"p5 xl:subtitle1"},q={key:0,class:"city__address"},w={key:1,class:"city__phone"},B=["href"],O=u({__name:"City",props:{name:{type:String,required:!0},image:{type:Object,required:!0},address:{type:Object},location:{type:Object},phone:{type:String}},setup(e){const d=e,_=y(()=>{if(!d.location)return"";const{lat:o,lon:n}=d.location;return x()?`maps://maps.google.com/maps?daddr=${o},${n}`:`https://www.google.com/maps?daddr=${o},${n}`});return p(()=>{}),h(()=>{}),(o,n)=>{const m=g;return t(),s("div",b,[e.image?(t(),s("div",C,[c("img",{class:"city__visual__image",src:e.image.fields.file.url+"?fm=webp&q=70",alt:e.image.fields.description,loading:"lazy"},null,8,S)])):a("",!0),e.name?(t(),s("h3",$,i(e.name),1)):a("",!0),c("address",j,[e.address?(t(),s("div",q,[l(r(f),{document:e.address},null,8,["document"])])):a("",!0),e.phone?(t(),s("p",w,i(e.phone),1)):a("",!0),e.location?(t(),s("a",{key:2,class:"city__mapLink p3 xl:subtitle1",href:_.value,target:"_blank"},[l(m,{name:"location"}),c("span",null,i(r(v).data.directionCta),1)],8,B)):a("",!0)])])}}});const L=k(O,[["__scopeId","data-v-828512dd"]]);export{L as default};
