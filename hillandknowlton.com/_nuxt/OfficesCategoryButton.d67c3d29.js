import{a as c}from"./offices.631e8b3c.js";import{d as s,j as a,k as r,q as i,be as t,aF as u,_}from"./entry.a5ffe6b6.js";const l={class:"offices-category-button__label h3 xl:p2d"},d=s({__name:"OfficesCategoryButton",props:{isActive:{type:Boolean,required:!0},id:{type:String,required:!0},label:{type:String,required:!0},count:{type:Number,required:!0}},setup(e){const o=e;function n(){c(o.id)}return(f,p)=>(a(),r("button",{class:u(["offices-category-button",{isActive:e.isActive}]),type:"button",onClick:n},[i("span",l,t(e.label)+" ("+t(e.count)+")",1)],2))}});const b=_(d,[["__scopeId","data-v-189c74dc"]]);export{b as default};
