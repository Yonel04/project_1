import _ from"./ImageContentful.28e07224.js";import{d,j as a,k as i,q as t,l as n,be as s,m as u,a3 as b,x as l,ca as p,c1 as h,aV as f,aS as x,_ as g}from"./entry.a5ffe6b6.js";const o=e=>(f("data-v-b4f7be81"),e=e(),x(),e),k={class:"panel-team-member grid-m xl:no-grid"},y={class:"panel-team-member__image-container col-start-2 col-end-5 xl:col-start-1 xl:col-end-2 xl:row-start-1"},w={class:"panel-team-member__main-container col-start-5 col-end-12 xl:col-start-2 xl:col-end-5 xl:row-start-1"},v={class:"panel-team-member__name h3 xl:h4"},S={class:"panel-team-member__position uppercase p5 xl:subtitle1"},q={class:"panel-team-member__infos-container col-start-2 col-end-12 xl:col-start-2 xl:col-end-5 xl:row-start-1"},M={key:0,class:"panel-team-member__email-container"},N=o(()=>t("p",{class:"panel-team-member__email-label p5 xl:subtitle1"},"Email",-1)),V={key:1,class:"panel-team-member__socials"},C=["href"],I=o(()=>t("span",null,"Twitter",-1)),T=["href"],$=o(()=>t("span",null,"Linkedin",-1)),z=d({__name:"PanelTeamMember",props:{name:{type:String,required:!0},image:{type:Object,required:!0},position:{type:String,required:!0},email:{type:String,required:!1},twitter:{type:String,required:!1},linkedin:{type:String,required:!1}},setup(e){return(B,j)=>{const m=_,r=p,c=h;return a(),i("div",k,[t("div",y,[n(m,{imgClassName:"panel-team-member__image",src:e.image.fields.file.url,size:{width:400,height:400},srcMobile:e.image.fields.file.url,sizeMobile:{width:300,height:300},alt:e.image.fields.description,lazy:!0},null,8,["src","srcMobile","alt"])]),t("div",w,[t("h3",v,s(e.name),1),t("p",S,s(e.position),1)]),t("div",q,[e.email?(a(),i("div",M,[N,n(r,{type:"Link",href:`mailto:${e.email}`,class:"panel-team-member__email p2 xl:p4"},{default:u(()=>[b(s(e.email),1)]),_:1},8,["href"])])):l("",!0),e.twitter||e.linkedin?(a(),i("div",V,[e.twitter?(a(),i("a",{key:0,class:"panel-team-member__social p2 xl:subtitle1",href:e.twitter,target:"_blank"},[n(c,{name:"twitter",outline:!0}),I],8,C)):l("",!0),e.linkedin?(a(),i("a",{key:1,class:"panel-team-member__social p2 xl:subtitle1",href:e.linkedin,target:"_blank"},[n(c,{name:"linkedin",outline:!0}),$],8,T)):l("",!0)])):l("",!0)])])}}});const P=g(z,[["__scopeId","data-v-b4f7be81"]]);export{P as default};
