import{d as m,bN as s,r as t,g,bR as v,aE as w,j as b,v as x,m as S,a$ as h,b2 as B,_ as C}from"./entry.a5ffe6b6.js";import{S as r}from"./SplitText.a8cce3cb.js";import{D as L}from"./Delay.0741e482.js";import{g as W}from"./global.de8d543b.js";const k=m({__name:"LineByLine",props:{debug:{type:Boolean,default:!1},tag:{type:String,default:"div"},overflow:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},delay:{type:Number,default:0},stagger:{type:Number,default:0},animated:{type:Boolean,default:!0}},setup(i){const e=i;s.registerPlugin(r);const l=t(),n=t(),u=t(0),a=t(),d=t(!1),p=t(!1);g(()=>{y(),e.animated&&e.auto&&f()});const y=async()=>{v.windowWidth!==u.value&&(u.value=v.windowWidth,a.value.style.height=null,(l.value||n.value)&&(n.value.revert(),l.value.revert()),await w(),await L(50),l.value=new r(a.value,{type:"lines",linesClass:"split"}),e.overflow&&(n.value=new r(a.value,{type:"lines",linesClass:"split-parent"})),d.value=!0,e.animated&&f())},f=()=>{const o=s.timeline({delay:W.firstLoad?0:e.delay});if(d.value&&!p.value){p.value=!0;const c=s.utils.selector(a.value);o.from([c(".split")],{yPercent:_=>100*(_+1),clearProps:"all",duration:1,stagger:e.stagger,ease:"quart.out"},"start")}return o};return(o,c)=>(b(),x(B(i.tag),{ref_key:"root",ref:a},{default:S(()=>[h(o.$slots,"default",{},void 0,!0)]),_:3},512))}});const E=C(k,[["__scopeId","data-v-1255bc0e"]]);export{E as default};
