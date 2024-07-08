import nt from"./special-transition.37ed9eec.js";import rt from"./HeaderBar.20487fa4.js";import{s as X,_ as lt}from"./MainMenu.c0e08f66.js";import at from"./LanguagePanel.30d22255.js";import ct from"./InternalFooter.6f0dd481.js";import ht from"./OfficeFooter.d057f16d.js";import ut from"./CaseFooter.55686165.js";import pt from"./GlobalFooter.96c12790.js";import dt from"./LandscapeBlocker.06fe6e29.js";import{d as K,c as mt,bN as W,bW as L,p as f,f as I,h as Z,u as gt,e as R,r as Y,c8 as vt,a as ft,g as St,bP as q,j as b,v as x,m as J,l as P,q as G,aF as Q,a$ as _t,k as yt,n as p,x as A,s as wt,bR as g,bZ as C,P as bt,aV as Lt,aS as Tt,bU as Mt,_ as zt}from"./entry.a5ffe6b6.js";import{a as Et}from"./composables.abc3615f.js";import{s as tt,p as Ot,r as Rt}from"./scroll.91b2c5c9.js";import{b as et}from"./user.2945adb1.js";import{g as k}from"./global.de8d543b.js";import{s as xt,h as At}from"./home.bd40bda0.js";import"./MainMenuTrigger.eb2cb16d.js";import"./IconButton.3d0339e3.js";import"./PrimaryButton.109fb532.js";import"./locale.83ca1a04.js";import"./useGlobalContent.a179bc4d.js";import"./card2.f9467506.js";import"./ImageContentful.28e07224.js";import"./card5.024dbc9d.js";import"./SubMenu.a9a69091.js";import"./SecondaryIconButton.f501442f.js";import"./backBtn.6ed90b16.js";import"./card4.a5bfd41c.js";import"./CtaButton.a5174d45.js";import"./Contentful.13d3140f.js";import"./EntryLink.vue.b1ce39e8.js";import"./ActionCursor.d6a8aabd.js";import"./RotatePhoneSvg.899b2a8b.js";const kt=n=>Object.fromEntries(Object.entries(n).filter(([,t])=>t!==void 0)),it=(n,t)=>(e,i)=>(mt(()=>n({...kt(e),...i.attrs},i)),()=>{var o,s;return t?(s=(o=i.slots).default)==null?void 0:s.call(o):null}),st={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Wt=K({name:"Html",inheritAttrs:!1,props:{...st,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:it(n=>({htmlAttrs:n}),!0)}),Ht=K({name:"Body",inheritAttrs:!1,props:{...st,renderPriority:[String,Number]},setup:it(n=>({bodyAttrs:n}),!0)});function $(){return $=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},$.apply(this,arguments)}function D(n,t,e){return Math.max(n,Math.min(t,e))}class Pt{advance(t){var e;if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(o=this.value,s=this.to,(1-(r=1-Math.exp(-60*this.lerp*t)))*o+r*s),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;const l=D(0,this.currentTime/this.duration,1);i=l>=1;const c=i?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var o,s,r;(e=this.onUpdate)==null||e.call(this,this.value,{completed:i}),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:o=1,easing:s=l=>l,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=o,this.easing=s,this.currentTime=0,this.isRunning=!0,this.onUpdate=r}}class Ct{constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,i){const o=function(s,r){let l;return function(){let c=arguments,d=this;clearTimeout(l),l=setTimeout(function(){s.apply(d,c)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(o),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(o),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class ot{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let o=0,s=i.length;o<s;o++)i[o](...e)}on(t,e){var i;return(i=this.events[t])!=null&&i.push(e)||(this.events[t]=[e]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(s=>e!==s)}}destroy(){this.events={}}}class It{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=2,normalizeWheel:o=!1}){this.onTouchStart=s=>{const{clientX:r,clientY:l}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=r,this.touchStart.y=l,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:r,clientY:l}=s.targetTouches?s.targetTouches[0]:s,c=-(r-this.touchStart.x)*this.touchMultiplier,d=-(l-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=r,this.touchStart.y=l,this.lastDelta={x:c,y:d},this.emitter.emit("scroll",{type:"touch",deltaX:c,deltaY:d,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:r,deltaY:l}=s;this.normalizeWheel&&(r=D(-100,r,100),l=D(-100,l,100)),r*=this.wheelMultiplier,l*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:r,deltaY:l,event:s})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.normalizeWheel=o,this.touchStart={x:null,y:null},this.emitter=new ot,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Bt{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,smoothWheel:o=!0,smoothTouch:s=!1,syncTouch:r=!1,syncTouchLerp:l=.1,__iosNoInertiaSyncTouchLerp:c=.4,touchInertiaMultiplier:d=35,duration:S,easing:T=h=>Math.min(1,1.001-Math.pow(2,-10*h)),lerp:u=S&&.1,infinite:v=!1,orientation:M="vertical",gestureOrientation:F="vertical",touchMultiplier:B=1,wheelMultiplier:N=1,normalizeWheel:a=!1,autoResize:z=!0}={}){this.onVirtualScroll=({type:h,inertia:H,deltaX:E,deltaY:_,event:O})=>{if(O.ctrlKey)return;const y=h==="touch",U=h==="wheel";if(this.options.gestureOrientation==="vertical"&&_===0||this.options.gestureOrientation==="horizontal"&&E===0||y&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&_<=0||O.composedPath().find(m=>(m==null||m.hasAttribute==null?void 0:m.hasAttribute("data-lenis-prevent"))||y&&(m==null||m.hasAttribute==null?void 0:m.hasAttribute("data-lenis-prevent-touch"))||U&&(m==null||m.hasAttribute==null?void 0:m.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void O.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&y||this.options.smoothWheel&&U,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();O.preventDefault();let w=_;this.options.gestureOrientation==="both"?w=Math.abs(_)>Math.abs(E)?_:E:this.options.gestureOrientation==="horizontal"&&(w=E);const j=y&&this.options.syncTouch,V=y&&H&&Math.abs(w)>1;V&&(w=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+w,$({programmatic:!1},j&&{lerp:V?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const h=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-h),this.emit()}},window.lenisVersion="1.0.19",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,smoothWheel:o,smoothTouch:s,syncTouch:r,syncTouchLerp:l,__iosNoInertiaSyncTouchLerp:c,touchInertiaMultiplier:d,duration:S,easing:T,lerp:u,infinite:v,gestureOrientation:F,orientation:M,touchMultiplier:B,wheelMultiplier:N,normalizeWheel:a,autoResize:z},this.dimensions=new Ct({wrapper:t,content:e,autoResize:z}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new Pt,this.emitter=new ot,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new It(i,{touchMultiplier:B,wheelMultiplier:N,normalizeWheel:a}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var i;this.emitter.events[t]=(i=this.emitter.events[t])==null?void 0:i.filter(o=>e!==o)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:o=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:l=!s&&this.options.lerp,onComplete:c=null,force:d=!1,programmatic:S=!0}={}){if(!this.isStopped||d){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var T;let u;if(typeof t=="string"?u=document.querySelector(t):(T=t)!=null&&T.nodeType&&(u=t),u){if(this.options.wrapper!==window){const M=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?M.left:M.top}const v=u.getBoundingClientRect();t=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?S&&(this.targetScroll=this.animatedScroll=this.scroll):t=D(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(c==null||c());if(!S){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:r,lerp:l,onUpdate:(u,{completed:v})=>{o&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),S&&(this.targetScroll=u),v&&(o&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,c==null||c()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}W.registerPlugin(L);const Nt=()=>{let n=null;window.scrollTo(0,0),window.history.scrollRestoration="manual",W.defaults({duration:1,ease:"none"}),W.registerPlugin(L),L.clearScrollMemory("manual"),L.defaults({markers:{}.VUE_APP_SHOW_MARKERS==="true"}),n=new Bt({smoothTouch:!1}),n.on("scroll",L.update),W.ticker.lagSmoothing(0),W.ticker.add(e=>{n.raf(e*1e3)}),f.lenis=n;const t=()=>{tt.stop?(f.lenis.stop(),Z.scrollStop.emit({}),console.log("setScrollStatus STOP")):(f.lenis.start(),setTimeout(()=>Z.scrollStart.emit({}),0),console.log("setScrollStatus START"))};return I(()=>tt.stop,t),t(),{lenis:n}};function Ut(n){let t,e=n[0],i=1;for(;i<n.length;){const o=n[i],s=n[i+1];if(i+=2,(o==="optionalAccess"||o==="optionalCall")&&e==null)return;o==="access"||o==="optionalAccess"?(t=e,e=s(e)):(o==="call"||o==="optionalCall")&&(e=s((...r)=>e.call(t,...r)),t=void 0)}return e}const Vt=n=>(Lt("data-v-ce36a3f7"),n=n(),Tt(),n),Dt=["inert"],Ft=Vt(()=>G("div",{class:"app-panels"},null,-1)),jt=K({__name:"default",setup(n){W.registerPlugin(L);const t=Et({identifierAttribute:"id",addSeoAttributes:!0}),{locale:e}=gt();Nt();const i=()=>{q.showLanguagePanel&&(q.showLanguagePanel=!1),C.open&&(C.open=!1,C.searchOpen=!1,C.inspiredOpen=!1)},o=R(()=>At.hideIntro),s=()=>{if(window.OneTrust){const a=window.OneTrust.getGeolocationData();et(a),window.OneTrust.OnConsentChanged(z=>{const h=window.OneTrust.getGeolocationData();et(h)})}},r=R(()=>k.panelOpen),l=R(()=>g.isIpad),c=R(()=>g.isLandscape);I(l,a=>{a?document.body.classList.add("is-ipad"):document.body.classList.remove("is-ipad")},{immediate:!0}),I(c,a=>{a?(document.body.classList.toggle("is-landscape",g.isLandscape),document.body.classList.toggle("is-portrait",!g.isLandscape)):(document.body.classList.toggle("is-landscape",g.isLandscape),document.body.classList.toggle("is-portrait",!g.isLandscape))},{immediate:!0});const d=R(()=>C.open&&!f.inTransition);I(()=>d.value,a=>{if(a){T(),Ot();return}Rt()});const{$contentful:S}=Mt(),T=async()=>{if(X.data&&X.data.length)return;const a=await S.getEntries({"sys.contentType.sys.id[in]":"news,insight,caseStudy,service,sector",limit:1e3,locale:e.value});X.data=a.items},u=Y(!1);I(()=>f.theme,a=>{u.value=a===bt.Light}),Y(null);const v=Y(null),M=()=>{v.value=new MutationObserver((a,z)=>{const h=document.querySelectorAll("access-widget-ui");h&&h.length>0&&(h.forEach(H=>H.setAttribute("data-lenis-prevent","true")),z.disconnect())}),v.value.observe(document.body,{childList:!0,subtree:!0})},F=vt(),B=R(()=>f.rtl),N=ft();return St(()=>{f.rtl=e.value.includes("ar")&&F.currentRoute.value.fullPath.includes("office/"),q.languageRegion=e.value,s(),xt(N.fullPath!=="/"),k.firstLoad=!1,Ut([document,"access",a=>a.fonts,"optionalAccess",a=>a.ready])&&document.fonts.ready.then(()=>{L.refresh()}),M()}),(a,z)=>{const h=nt,H=rt,E=lt,_=at,O=ct,y=ht,U=ut,w=pt,j=dt,V=Ht,m=Wt;return b(),x(m,{lang:p(t).htmlAttrs.lang,dir:p(t).htmlAttrs.dir},{default:J(()=>[P(V,null,{default:J(()=>[G("div",{class:Q(["app",{"is-ipad":l.value,"is-landscape":p(g).isLandscape,"is-portrait":!p(g).isLandscape,rtl:B.value}])},[P(h,{inert:r.value},null,8,["inert"]),P(H,{inert:r.value},null,8,["inert"]),P(E,{inert:r.value},null,8,["inert"]),P(_,{inert:r.value},null,8,["inert"]),G("div",{onClick:i,class:Q({app__inner:!0,"app__inner--open":d.value,"app__inner--light":u.value}),inert:r.value},[_t(a.$slots,"default",{},void 0,!0),o.value?(b(),yt(wt,{key:0},[p(k).content.internalFooter&&p(f).footer==="internal"?(b(),x(O,{key:0})):A("",!0),p(k).content.officeFooter?(b(),x(y,{key:1})):A("",!0),p(k).content.caseFooter?(b(),x(U,{key:2})):A("",!0),p(f).footer!=="none"&&p(k).content.footer?(b(),x(w,{key:3})):A("",!0)],64)):A("",!0)],10,Dt),p(g).isMobile&&p(g).isLandscape&&!p(g).isIpad?(b(),x(j,{key:0})):A("",!0),Ft],2)]),_:3})]),_:3},8,["lang","dir"])}}});const Le=zt(jt,[["__scopeId","data-v-ce36a3f7"]]);export{Le as default};
