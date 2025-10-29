const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DIcisieV.js","./CF4aWK5u.js","./DVJ4VhfN.js","./index.GAxeQsMf.css","./DKnZkw71.js","./cg4Pu8pb.js","./code-of-conduct.Dz-qJPU8.css","./BIr29JCl.js","./uZNKfEBj.js","./default.CNiAERqS.css","./UrGo2kbG.js","./Ec2mZwbq.js","./error-404.DqZyKpgk.css","./Dd4KWVQX.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},fi=[],Gn=()=>{},d1=()=>!1,Sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vd=t=>t.startsWith("onUpdate:"),yt=Object.assign,Ed=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vb=Object.prototype.hasOwnProperty,Me=(t,e)=>Vb.call(t,e),ue=Array.isArray,di=t=>Yi(t)==="[object Map]",p1=t=>Yi(t)==="[object Set]",fg=t=>Yi(t)==="[object Date]",Fb=t=>Yi(t)==="[object RegExp]",fe=t=>typeof t=="function",Be=t=>typeof t=="string",Sn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",m1=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),g1=Object.prototype.toString,Yi=t=>g1.call(t),Ub=t=>Yi(t).slice(8,-1),_1=t=>Yi(t)==="[object Object]",wd=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Bb=/-\w/g,yn=Vc(t=>t.replace(Bb,e=>e.slice(1).toUpperCase())),jb=/\B([A-Z])/g,ss=Vc(t=>t.replace(jb,"-$1").toLowerCase()),Fc=Vc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vu=Vc(t=>t?`on${Fc(t)}`:""),Hr=(t,e)=>!Object.is(t,e),mi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},y1=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Dh=t=>{const e=parseFloat(t);return isNaN(e)?t:e},v1=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let dg;const Uc=()=>dg||(dg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pa(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?qb(r):Pa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ve(t))return t}const Hb=/;(?![^(]*\))/g,$b=/:([^]+)/,zb=/\/\*[^]*?\*\//g;function qb(t){const e={};return t.replace(zb,"").split(Hb).forEach(n=>{if(n){const r=n.split($b);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wb(t){if(!t)return"";if(Be(t))return t;let e="";for(const n in t){const r=t[n];if(Be(r)||typeof r=="number"){const s=n.startsWith("--")?n:ss(n);e+=`${s}:${r};`}}return e}function ka(t){let e="";if(Be(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=ka(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Gb(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Be(e)&&(t.class=ka(e)),n&&(t.style=Pa(n)),t}const E1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kb=Ki(E1),pg=Ki(E1+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Td(t){return!!t||t===""}const Yb=Ki("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),Qb=Ki("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function Xb(t){if(t==null)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"}const Jb=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function Zb(t,e){return t.replace(Jb,n=>`\\${n}`)}function eI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Hl(t[r],e[r]);return n}function Hl(t,e){if(t===e)return!0;let n=fg(t),r=fg(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?eI(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Hl(t[o],e[o]))return!1}}return String(t)===String(e)}const w1=t=>!!(t&&t.__v_isRef===!0),tI=t=>Be(t)?t:t==null?"":ue(t)||Ve(t)&&(t.toString===g1||!fe(t.toString))?w1(t)?tI(t.value):JSON.stringify(t,T1,2):String(t),T1=(t,e)=>w1(e)?T1(t,e.value):di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Fu(r,i)+" =>"]=s,n),{})}:p1(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fu(n))}:Sn(e)?Fu(e):Ve(e)&&!ue(e)&&!_1(e)?String(e):e,Fu=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};function nI(t){return t==null?"initial":typeof t=="string"?t===""?" ":t:String(t)}/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class b1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function rI(t){return new b1(t)}function bd(){return Vt}function sI(t,e=!1){Vt&&Vt.cleanups.push(t)}let $e;const Uu=new WeakSet;class I1{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uu.has(this)&&(Uu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||C1(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mg(this),R1(this);const e=$e,n=Cn;$e=this,Cn=!0;try{return this.fn()}finally{S1(this),$e=e,Cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cd(e);this.deps=this.depsTail=void 0,mg(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lh(this)&&this.run()}get dirty(){return Lh(this)}}let A1=0,$o,zo;function C1(t,e=!1){if(t.flags|=8,e){t.next=zo,zo=t;return}t.next=$o,$o=t}function Id(){A1++}function Ad(){if(--A1>0)return;if(zo){let e=zo;for(zo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$o;){let e=$o;for($o=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function R1(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function S1(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Cd(r),iI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Lh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(P1(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function P1(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ca)||(t.globalVersion=ca,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lh(t))))return;t.flags|=2;const e=t.dep,n=$e,r=Cn;$e=t,Cn=!0;try{R1(t);const s=t.fn(t._value);(e.version===0||Hr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,Cn=r,S1(t),t.flags&=-3}}function Cd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Cd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Cn=!0;const k1=[];function Yn(){k1.push(Cn),Cn=!1}function Qn(){const t=k1.pop();Cn=t===void 0?!0:t}function mg(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let ca=0;class oI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$e||!Cn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new oI($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,N1(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,ca++,this.notify(e)}notify(e){Id();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ad()}}}function N1(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)N1(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $l=new WeakMap,Ss=Symbol(""),Vh=Symbol(""),ua=Symbol("");function Ut(t,e,n){if(Cn&&$e){let r=$l.get(t);r||$l.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Rd),s.map=r,s.key=n),s.track()}}function cr(t,e,n,r,s,i){const o=$l.get(t);if(!o){ca++;return}const a=l=>{l&&l.trigger()};if(Id(),e==="clear")o.forEach(a);else{const l=ue(t),u=l&&wd(n);if(l&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===ua||!Sn(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ua)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ss)),di(t)&&a(o.get(Vh)));break;case"delete":l||(a(o.get(Ss)),di(t)&&a(o.get(Vh)));break;case"set":di(t)&&a(o.get(Ss));break}}Ad()}function aI(t,e){const n=$l.get(t);return n&&n.get(e)}function ni(t){const e=be(t);return e===t?e:(Ut(e,"iterate",ua),_n(t)?e:e.map(It))}function Bc(t){return Ut(t=be(t),"iterate",ua),t}const lI={__proto__:null,[Symbol.iterator](){return Bu(this,Symbol.iterator,It)},concat(...t){return ni(this).concat(...t.map(e=>ue(e)?ni(e):e))},entries(){return Bu(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return sr(this,"every",t,e,void 0,arguments)},filter(t,e){return sr(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return sr(this,"find",t,e,It,arguments)},findIndex(t,e){return sr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return sr(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return sr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return sr(this,"forEach",t,e,void 0,arguments)},includes(...t){return ju(this,"includes",t)},indexOf(...t){return ju(this,"indexOf",t)},join(t){return ni(this).join(t)},lastIndexOf(...t){return ju(this,"lastIndexOf",t)},map(t,e){return sr(this,"map",t,e,void 0,arguments)},pop(){return bo(this,"pop")},push(...t){return bo(this,"push",t)},reduce(t,...e){return gg(this,"reduce",t,e)},reduceRight(t,...e){return gg(this,"reduceRight",t,e)},shift(){return bo(this,"shift")},some(t,e){return sr(this,"some",t,e,void 0,arguments)},splice(...t){return bo(this,"splice",t)},toReversed(){return ni(this).toReversed()},toSorted(t){return ni(this).toSorted(t)},toSpliced(...t){return ni(this).toSpliced(...t)},unshift(...t){return bo(this,"unshift",t)},values(){return Bu(this,"values",It)}};function Bu(t,e,n){const r=Bc(t),s=r[e]();return r!==t&&!_n(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const cI=Array.prototype;function sr(t,e,n,r,s,i){const o=Bc(t),a=o!==t&&!_n(t),l=o[e];if(l!==cI[e]){const f=l.apply(t,i);return a?It(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,It(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function gg(t,e,n,r){const s=Bc(t);let i=n;return s!==t&&(_n(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,It(a),l,t)}),s[e](i,...r)}function ju(t,e,n){const r=be(t);Ut(r,"iterate",ua);const s=r[e](...n);return(s===-1||s===!1)&&kd(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function bo(t,e,n=[]){Yn(),Id();const r=be(t)[e].apply(t,n);return Ad(),Qn(),r}const uI=Ki("__proto__,__v_isRef,__isVue"),x1=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function hI(t){Sn(t)||(t=String(t));const e=be(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class O1{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wI:V1:i?L1:D1).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=lI[n]))return l;if(n==="hasOwnProperty")return hI}const a=Reflect.get(e,n,st(e)?e:r);if((Sn(n)?x1.has(n):uI(n))||(s||Ut(e,"get",n),i))return a;if(st(a)){const l=o&&wd(n)?a:a.value;return s&&Ve(l)?Uh(l):l}return Ve(a)?s?Uh(a):is(a):a}}class M1 extends O1{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=pr(i);if(!_n(r)&&!pr(r)&&(i=be(i),r=be(r)),!ue(e)&&st(i)&&!st(r))return l||(i.value=r),!0}const o=ue(e)&&wd(n)?Number(n)<e.length:Me(e,n),a=Reflect.set(e,n,r,st(e)?e:s);return e===be(s)&&(o?Hr(r,i)&&cr(e,"set",n,r):cr(e,"add",n,r)),a}deleteProperty(e,n){const r=Me(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!x1.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",ue(e)?"length":Ss),Reflect.ownKeys(e)}}class fI extends O1{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dI=new M1,pI=new fI,mI=new M1(!0);const Fh=t=>t,cl=t=>Reflect.getPrototypeOf(t);function gI(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=di(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Fh:e?zl:It;return!e&&Ut(i,"iterate",l?Vh:Ss),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function ul(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _I(t,e){const n={get(s){const i=this.__v_raw,o=be(i),a=be(s);t||(Hr(s,a)&&Ut(o,"get",s),Ut(o,"get",a));const{has:l}=cl(o),u=e?Fh:t?zl:It;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ut(be(s),"iterate",Ss),s.size},has(s){const i=this.__v_raw,o=be(i),a=be(s);return t||(Hr(s,a)&&Ut(o,"has",s),Ut(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=be(a),u=e?Fh:t?zl:It;return!t&&Ut(l,"iterate",Ss),a.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return yt(n,t?{add:ul("add"),set:ul("set"),delete:ul("delete"),clear:ul("clear")}:{add(s){!e&&!_n(s)&&!pr(s)&&(s=be(s));const i=be(this);return cl(i).has.call(i,s)||(i.add(s),cr(i,"add",s,s)),this},set(s,i){!e&&!_n(i)&&!pr(i)&&(i=be(i));const o=be(this),{has:a,get:l}=cl(o);let u=a.call(o,s);u||(s=be(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Hr(i,h)&&cr(o,"set",s,i):cr(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:a}=cl(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&cr(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&cr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gI(s,t,e)}),n}function Sd(t,e){const n=_I(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Me(n,s)&&s in r?n:r,s,i)}const yI={get:Sd(!1,!1)},vI={get:Sd(!1,!0)},EI={get:Sd(!0,!1)};const D1=new WeakMap,L1=new WeakMap,V1=new WeakMap,wI=new WeakMap;function TI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bI(t){return t.__v_skip||!Object.isExtensible(t)?0:TI(Ub(t))}function is(t){return pr(t)?t:Pd(t,!1,dI,yI,D1)}function jn(t){return Pd(t,!1,mI,vI,L1)}function Uh(t){return Pd(t,!0,pI,EI,V1)}function Pd(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=bI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function gi(t){return pr(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function kd(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function II(t){return!Me(t,"__v_skip")&&Object.isExtensible(t)&&y1(t,"__v_skip",!0),t}const It=t=>Ve(t)?is(t):t,zl=t=>Ve(t)?Uh(t):t;function st(t){return t?t.__v_isRef===!0:!1}function tn(t){return F1(t,!1)}function Ms(t){return F1(t,!0)}function F1(t,e){return st(t)?t:new AI(t,e)}class AI{constructor(e,n){this.dep=new Rd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||_n(e)||pr(e);e=r?e:be(e),Hr(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function We(t){return st(t)?t.value:t}function Vn(t){return fe(t)?t():We(t)}const CI={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function U1(t){return gi(t)?t:new Proxy(t,CI)}class RI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return aI(be(this._object),this._key)}}class SI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function PI(t,e,n){return st(t)?t:fe(t)?new SI(t):Ve(t)&&arguments.length>1?kI(t,e,n):tn(t)}function kI(t,e,n){const r=t[e];return st(r)?r:new RI(t,e,n)}class NI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return C1(this,!0),!0}get value(){const e=this.dep.track();return P1(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xI(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new NI(r,s,n)}const hl={},ql=new WeakMap;let _s;function OI(t,e=!1,n=_s){if(n){let r=ql.get(n);r||ql.set(n,r=[]),r.push(t)}}function MI(t,e,n=He){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=A=>s?A:_n(A)||s===!1||s===0?ur(A,1):ur(A);let h,f,p,m,_=!1,T=!1;if(st(t)?(f=()=>t.value,_=_n(t)):gi(t)?(f=()=>u(t),_=!0):ue(t)?(T=!0,_=t.some(A=>gi(A)||_n(A)),f=()=>t.map(A=>{if(st(A))return A.value;if(gi(A))return u(A);if(fe(A))return l?l(A,2):A()})):fe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(p){Yn();try{p()}finally{Qn()}}const A=_s;_s=h;try{return l?l(t,3,[m]):t(m)}finally{_s=A}}:f=Gn,e&&s){const A=f,M=s===!0?1/0:s;f=()=>ur(A(),M)}const k=bd(),N=()=>{h.stop(),k&&k.active&&Ed(k.effects,h)};if(i&&e){const A=e;e=(...M)=>{A(...M),N()}}let S=T?new Array(t.length).fill(hl):hl;const y=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const M=h.run();if(s||_||(T?M.some((V,b)=>Hr(V,S[b])):Hr(M,S))){p&&p();const V=_s;_s=h;try{const b=[M,S===hl?void 0:T&&S[0]===hl?[]:S,m];S=M,l?l(e,3,b):e(...b)}finally{_s=V}}}else h.run()};return a&&a(y),h=new I1(f),h.scheduler=o?()=>o(y,!1):y,m=A=>OI(A,!1,h),p=h.onStop=()=>{const A=ql.get(h);if(A){if(l)l(A,4);else for(const M of A)M();ql.delete(h)}},e?r?y(!0):S=h.run():o?o(y.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function ur(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,st(t))ur(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)ur(t[r],e,n);else if(p1(t)||di(t))t.forEach(r=>{ur(r,e,n)});else if(_1(t)){for(const r in t)ur(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ur(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qo=[];let Hu=!1;function Mr(t,...e){if(Hu)return;Hu=!0,Yn();const n=qo.length?qo[qo.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=DI();if(r)Qi(r,n,11,[t+e.map(i=>{var o,a;return(a=(o=i.toString)==null?void 0:o.call(i))!=null?a:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${Lv(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...LI(s)),console.warn(...i)}Qn(),Hu=!1}function DI(){let t=qo[qo.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function LI(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...VI(n))}),e}function VI({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${Lv(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...FI(t.props),i]:[s+i]}function FI(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...B1(r,t[r]))}),n.length>3&&e.push(" ..."),e}function B1(t,e,n){return Be(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:st(e)?(e=B1(t,be(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):fe(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=be(e),n?e:[`${t}=`,e])}function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Xi(s,e,n)}}function Pn(t,e,n,r){if(fe(t)){const s=Qi(t,e,n,r);return s&&m1(s)&&s.catch(i=>{Xi(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Pn(t[i],e,n,r));return s}}function Xi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||He;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,l,u)===!1)return}a=a.parent}if(i){Yn(),Qi(i,null,10,[t,l,u]),Qn();return}}UI(t,n,s,r,o)}function UI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Xt=[];let Ln=-1;const _i=[];let Dr=null,si=0;const j1=Promise.resolve();let Wl=null;function Ni(t){const e=Wl||j1;return t?e.then(this?t.bind(this):t):e}function BI(t){let e=Ln+1,n=Xt.length;for(;e<n;){const r=e+n>>>1,s=Xt[r],i=ha(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nd(t){if(!(t.flags&1)){const e=ha(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=ha(n)?Xt.push(t):Xt.splice(BI(e),0,t),t.flags|=1,H1()}}function H1(){Wl||(Wl=j1.then($1))}function Bh(t){ue(t)?_i.push(...t):Dr&&t.id===-1?Dr.splice(si+1,0,t):t.flags&1||(_i.push(t),t.flags|=1),H1()}function _g(t,e,n=Ln+1){for(;n<Xt.length;n++){const r=Xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gl(t){if(_i.length){const e=[...new Set(_i)].sort((n,r)=>ha(n)-ha(r));if(_i.length=0,Dr){Dr.push(...e);return}for(Dr=e,si=0;si<Dr.length;si++){const n=Dr[si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dr=null,si=0}}const ha=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $1(t){try{for(Ln=0;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&(e.flags&=-2)}Ln=-1,Xt.length=0,Gl(),Wl=null,(Xt.length||_i.length)&&$1()}}let St=null,z1=null;function Kl(t){const e=St;return St=t,z1=t&&t.type.__scopeId||null,e}function xd(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zl(-1);const i=Kl(e);let o;try{o=t(...s)}finally{Kl(i),r._d&&Zl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function y7(t,e){if(St===null)return t;const n=zc(St),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=He]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&ur(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Yn(),Pn(l,n,8,[t.el,a,t,e]),Qn())}}const jI=Symbol("_vte"),q1=t=>t.__isTeleport,lr=Symbol("_leaveCb"),fl=Symbol("_enterCb");function HI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Md(()=>{t.isMounted=!0}),xa(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],W1={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},G1=t=>{const e=t.subTree;return e.component?G1(e.component):e},$I={name:"BaseTransition",props:W1,setup(t,{slots:e}){const n=os(),r=HI();return()=>{const s=e.default&&Q1(e.default(),!0);if(!s||!s.length)return;const i=K1(s),o=be(t),{mode:a}=o;if(r.isLeaving)return $u(i);const l=yg(i);if(!l)return $u(i);let u=jh(l,o,r,n,f=>u=f);l.type!==at&&xi(l,u);let h=n.subTree&&yg(n.subTree);if(h&&h.type!==at&&!Tn(h,l)&&G1(n).type!==at){let f=jh(h,o,r,n);if(xi(h,f),a==="out-in"&&l.type!==at)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},$u(i);a==="in-out"&&l.type!==at?f.delayLeave=(p,m,_)=>{const T=Y1(r,h);T[String(h.key)]=h,p[lr]=()=>{m(),p[lr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function K1(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==at){e=n;break}}return e}const zI=$I;function Y1(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function jh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:k,onAppear:N,onAfterAppear:S,onAppearCancelled:y}=e,A=String(t.key),M=Y1(n,t),V=(w,C)=>{w&&Pn(w,r,9,C)},b=(w,C)=>{const x=C[1];V(w,C),ue(w)?w.every(P=>P.length<=1)&&x():w.length<=1&&x()},E={mode:o,persisted:a,beforeEnter(w){let C=l;if(!n.isMounted)if(i)C=k||l;else return;w[lr]&&w[lr](!0);const x=M[A];x&&Tn(t,x)&&x.el[lr]&&x.el[lr](),V(C,[w])},enter(w){let C=u,x=h,P=f;if(!n.isMounted)if(i)C=N||u,x=S||h,P=y||f;else return;let I=!1;const pe=w[fl]=ve=>{I||(I=!0,ve?V(P,[w]):V(x,[w]),E.delayedLeave&&E.delayedLeave(),w[fl]=void 0)};C?b(C,[w,pe]):pe()},leave(w,C){const x=String(t.key);if(w[fl]&&w[fl](!0),n.isUnmounting)return C();V(p,[w]);let P=!1;const I=w[lr]=pe=>{P||(P=!0,C(),pe?V(T,[w]):V(_,[w]),w[lr]=void 0,M[x]===t&&delete M[x])};M[x]=t,m?b(m,[w,I]):I()},clone(w){const C=jh(w,e,n,r,s);return s&&s(C),C}};return E}function $u(t){if(Na(t))return t=mr(t),t.children=null,t}function yg(t){if(!Na(t))return q1(t.type)&&t.children?K1(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Q1(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===At?(o.patchFlag&128&&s++,r=r.concat(Q1(o.children,e,a))):(e||o.type!==at)&&r.push(a!=null?mr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Er(t,e){return fe(t)?yt({name:t.name},e,{setup:t}):t}function Od(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Yl=new WeakMap;function yi(t,e,n,r,s=!1){if(ue(t)){t.forEach((_,T)=>yi(_,e&&(ue(e)?e[T]:e),n,r,s));return}if($r(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?zc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===He?a.refs={}:a.refs,f=a.setupState,p=be(f),m=f===He?d1:_=>Me(p,_);if(u!=null&&u!==l){if(vg(e),Be(u))h[u]=null,m(u)&&(f[u]=null);else if(st(u)){u.value=null;const _=e;_.k&&(h[_.k]=null)}}if(fe(l))Qi(l,a,12,[o,h]);else{const _=Be(l),T=st(l);if(_||T){const k=()=>{if(t.f){const N=_?m(l)?f[l]:h[l]:l.value;if(s)ue(N)&&Ed(N,i);else if(ue(N))N.includes(i)||N.push(i);else if(_)h[l]=[i],m(l)&&(f[l]=h[l]);else{const S=[i];l.value=S,t.k&&(h[t.k]=S)}}else _?(h[l]=o,m(l)&&(f[l]=o)):T&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const N=()=>{k(),Yl.delete(t)};N.id=-1,Yl.set(t,N),Tt(N,n)}else vg(t),k()}}}function vg(t){const e=Yl.get(t);e&&(e.flags|=8,Yl.delete(t))}let Eg=!1;const fs=()=>{Eg||(console.error("Hydration completed but contains mismatches."),Eg=!0)},qI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",WI=t=>t.namespaceURI.includes("MathML"),dl=t=>{if(t.nodeType===1){if(qI(t))return"svg";if(WI(t))return"mathml"}},ws=t=>t.nodeType===8;function GI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(y,A)=>{if(!A.hasChildNodes()){Mr("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,y,A),Gl(),A._vnode=y;return}f(A.firstChild,y,null,null,null),Gl(),A._vnode=y},f=(y,A,M,V,b,E=!1)=>{E=E||!!A.dynamicChildren;const w=ws(y)&&y.data==="[",C=()=>T(y,A,M,V,b,w),{type:x,ref:P,shapeFlag:I,patchFlag:pe}=A;let ve=y.nodeType;A.el=y,pe===-2&&(E=!1,A.dynamicChildren=null);let re=null;switch(x){case ks:ve!==3?A.children===""?(l(A.el=s(""),o(y),y),re=y):re=C():(y.data!==A.children&&(Mr("Hydration text mismatch in",y.parentNode,`
  - rendered on server: ${JSON.stringify(y.data)}
  - expected on client: ${JSON.stringify(A.children)}`),fs(),y.data=A.children),re=i(y));break;case at:S(y)?(re=i(y),N(A.el=y.content.firstChild,y,M)):ve!==8||w?re=C():re=i(y);break;case Go:if(w&&(y=i(y),ve=y.nodeType),ve===1||ve===3){re=y;const me=!A.children.length;for(let te=0;te<A.staticCount;te++)me&&(A.children+=re.nodeType===1?re.outerHTML:re.data),te===A.staticCount-1&&(A.anchor=re),re=i(re);return w?i(re):re}else C();break;case At:w?re=_(y,A,M,V,b,E):re=C();break;default:if(I&1)(ve!==1||A.type.toLowerCase()!==y.tagName.toLowerCase())&&!S(y)?re=C():re=p(y,A,M,V,b,E);else if(I&6){A.slotScopeIds=b;const me=o(y);if(w?re=k(y):ws(y)&&y.data==="teleport start"?re=k(y,y.data,"teleport end"):re=i(y),e(A,me,null,M,V,dl(me),E),$r(A)&&!A.type.__asyncResolved){let te;w?(te=Ze(At),te.anchor=re?re.previousSibling:me.lastChild):te=y.nodeType===3?xv(""):Ze("div"),te.el=y,A.component.subTree=te}}else I&64?ve!==8?re=C():re=A.type.hydrate(y,A,M,V,b,E,t,m):I&128?re=A.type.hydrate(y,A,M,V,dl(o(y)),b,E,t,f):Mr("Invalid HostVNode type:",x,`(${typeof x})`)}return P!=null&&yi(P,null,V,A),re},p=(y,A,M,V,b,E)=>{E=E||!!A.dynamicChildren;const{type:w,props:C,patchFlag:x,shapeFlag:P,dirs:I,transition:pe}=A,ve=w==="input"||w==="option";if(ve||x!==-1){I&&Fn(A,null,M,"created");let re=!1;if(S(y)){re=Ev(null,pe)&&M&&M.vnode.props&&M.vnode.props.appear;const te=y.content.firstChild;if(re){const Le=te.getAttribute("class");Le&&(te.$cls=Le),pe.beforeEnter(te)}N(te,y,M),A.el=y=te}if(P&16&&!(C&&(C.innerHTML||C.textContent))){let te=m(y.firstChild,A,y,M,V,b,E),Le=!1;for(;te;){xo(y,1)||(Le||(Mr("Hydration children mismatch on",y,`
Server rendered element contains more child nodes than client vdom.`),Le=!0),fs());const Wt=te;te=te.nextSibling,a(Wt)}}else if(P&8){let te=A.children;te[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(te=te.slice(1)),y.textContent!==te&&(xo(y,0)||(Mr("Hydration text content mismatch on",y,`
  - rendered on server: ${y.textContent}
  - expected on client: ${A.children}`),fs()),y.textContent=A.children)}if(C){const te=y.tagName.includes("-");for(const Le in C)!(I&&I.some(Wt=>Wt.dir.created))&&KI(y,Le,C[Le],A,M)&&fs(),(ve&&(Le.endsWith("value")||Le==="indeterminate")||Sa(Le)&&!pi(Le)||Le[0]==="."||te)&&r(y,Le,null,C[Le],void 0,M)}let me;(me=C&&C.onVnodeBeforeMount)&&Zt(me,M,A),I&&Fn(A,null,M,"beforeMount"),((me=C&&C.onVnodeMounted)||I||re)&&Cv(()=>{me&&Zt(me,M,A),re&&pe.enter(y),I&&Fn(A,null,M,"mounted")},V)}return y.nextSibling},m=(y,A,M,V,b,E,w)=>{w=w||!!A.dynamicChildren;const C=A.children,x=C.length;let P=!1;for(let I=0;I<x;I++){const pe=w?C[I]:C[I]=on(C[I]),ve=pe.type===ks;y?(ve&&!w&&I+1<x&&on(C[I+1]).type===ks&&(l(s(y.data.slice(pe.children.length)),M,i(y)),y.data=pe.children),y=f(y,pe,V,b,E,w)):ve&&!pe.children?l(pe.el=s(""),M):(xo(M,1)||(P||(Mr("Hydration children mismatch on",M,`
Server rendered element contains fewer child nodes than client vdom.`),P=!0),fs()),n(null,pe,M,null,V,b,dl(M),E))}return y},_=(y,A,M,V,b,E)=>{const{slotScopeIds:w}=A;w&&(b=b?b.concat(w):w);const C=o(y),x=m(i(y),A,C,M,V,b,E);return x&&ws(x)&&x.data==="]"?i(A.anchor=x):(fs(),l(A.anchor=u("]"),C,x),x)},T=(y,A,M,V,b,E)=>{if(xo(y.parentElement,1)||(Mr(`Hydration node mismatch:
- rendered on server:`,y,y.nodeType===3?"(text)":ws(y)&&y.data==="["?"(start of fragment)":"",`
- expected on client:`,A.type),fs()),A.el=null,E){const x=k(y);for(;;){const P=i(y);if(P&&P!==x)a(P);else break}}const w=i(y),C=o(y);return a(y),n(null,A,C,w,M,V,dl(C),b),M&&(M.vnode.el=A.el,$c(M,A.el)),w},k=(y,A="[",M="]")=>{let V=0;for(;y;)if(y=i(y),y&&ws(y)&&(y.data===A&&V++,y.data===M)){if(V===0)return i(y);V--}return y},N=(y,A,M)=>{const V=A.parentNode;V&&V.replaceChild(y,A);let b=M;for(;b;)b.vnode.el===A&&(b.vnode.el=b.subTree.el=y),b=b.parent},S=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[h,f]}function KI(t,e,n,r,s){let i,o,a,l;if(e==="class")t.$cls?(a=t.$cls,delete t.$cls):a=t.getAttribute("class"),l=ka(n),YI(wg(a||""),wg(l))||(i=2,o="class");else if(e==="style"){a=t.getAttribute("style")||"",l=Be(n)?n:Wb(Pa(n));const u=Tg(a),h=Tg(l);if(r.dirs)for(const{dir:f,value:p}of r.dirs)f.name==="show"&&!p&&h.set("display","none");s&&X1(s,r,h),QI(u,h)||(i=3,o="style")}else(t instanceof SVGElement&&Qb(e)||t instanceof HTMLElement&&(pg(e)||Yb(e)))&&(pg(e)?(a=t.hasAttribute(e),l=Td(n)):n==null?(a=t.hasAttribute(e),l=!1):(t.hasAttribute(e)?a=t.getAttribute(e):e==="value"&&t.tagName==="TEXTAREA"?a=t.value:a=!1,l=Xb(n)?String(n):!1),a!==l&&(i=4,o=e));if(i!=null&&!xo(t,i)){const u=p=>p===!1?"(not rendered)":`${o}="${p}"`,h=`Hydration ${J1[i]} mismatch on`,f=`
  - rendered on server: ${u(a)}
  - expected on client: ${u(l)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;return Mr(h,t,f),!0}return!1}function wg(t){return new Set(t.trim().split(/\s+/))}function YI(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function Tg(t){const e=new Map;for(const n of t.split(";")){let[r,s]=n.split(":");r=r.trim(),s=s&&s.trim(),r&&s&&e.set(r,s)}return e}function QI(t,e){if(t.size!==e.size)return!1;for(const[n,r]of t)if(r!==e.get(n))return!1;return!0}function X1(t,e,n){const r=t.subTree;if(t.getCssVars&&(e===r||r&&r.type===At&&r.children.includes(e))){const s=t.getCssVars();for(const i in s){const o=nI(s[i]);n.set(`--${Zb(i)}`,o)}}e===r&&t.parent&&X1(t.parent,t.vnode,n)}const bg="data-allow-mismatch",J1={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function xo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(bg);)t=t.parentElement;const n=t&&t.getAttribute(bg);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(J1[e])}}Uc().requestIdleCallback;Uc().cancelIdleCallback;function XI(t,e){if(ws(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ws(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const $r=t=>!!t.type.__asyncLoader;function Hh(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,f=0;const p=()=>(f++,u=null,m()),m=()=>{let _;return u||(_=u=e().catch(T=>{if(T=T instanceof Error?T:new Error(String(T)),l)return new Promise((k,N)=>{l(T,()=>k(p()),()=>N(T),f+1)});throw T}).then(T=>_!==u&&u?u:(T&&(T.__esModule||T[Symbol.toStringTag]==="Module")&&(T=T.default),h=T,T)))};return Er({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(_,T,k){let N=!1;(T.bu||(T.bu=[])).push(()=>N=!0);const S=()=>{N||k()},y=i?()=>{const A=i(S,M=>XI(_,M));A&&(T.bum||(T.bum=[])).push(A)}:S;h?y():m().then(()=>!T.isUnmounted&&y())},get __asyncResolved(){return h},setup(){const _=Ct;if(Od(_),h)return()=>zu(h,_);const T=y=>{u=null,Xi(y,_,13,!r)};if(a&&_.suspense||Mi)return m().then(y=>()=>zu(y,_)).catch(y=>(T(y),()=>r?Ze(r,{error:y}):null));const k=tn(!1),N=tn(),S=tn(!!s);return s&&setTimeout(()=>{S.value=!1},s),o!=null&&setTimeout(()=>{if(!k.value&&!N.value){const y=new Error(`Async component timed out after ${o}ms.`);T(y),N.value=y}},o),m().then(()=>{k.value=!0,_.parent&&Na(_.parent.vnode)&&_.parent.update()}).catch(y=>{T(y),N.value=y}),()=>{if(k.value&&h)return zu(h,_);if(N.value&&r)return Ze(r,{error:N.value});if(n&&!S.value)return Ze(n)}}})}function zu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ze(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Na=t=>t.type.__isKeepAlive,JI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=os(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:f}}}=r,p=f("div");r.activate=(S,y,A,M,V)=>{const b=S.component;u(S,y,A,0,a),l(b.vnode,S,y,A,b,a,M,S.slotScopeIds,V),Tt(()=>{b.isDeactivated=!1,b.a&&mi(b.a);const E=S.props&&S.props.onVnodeMounted;E&&Zt(E,b.parent,S)},a)},r.deactivate=S=>{const y=S.component;Xl(y.m),Xl(y.a),u(S,p,null,1,a),Tt(()=>{y.da&&mi(y.da);const A=S.props&&S.props.onVnodeUnmounted;A&&Zt(A,y.parent,S),y.isDeactivated=!0},a)};function m(S){qu(S),h(S,n,a,!0)}function _(S){s.forEach((y,A)=>{const M=tc(y.type);M&&!S(M)&&T(A)})}function T(S){const y=s.get(S);y&&(!o||!Tn(y,o))?m(y):o&&qu(o),s.delete(S),i.delete(S)}qr(()=>[t.include,t.exclude],([S,y])=>{S&&_(A=>Oo(S,A)),y&&_(A=>!Oo(y,A))},{flush:"post",deep:!0});let k=null;const N=()=>{k!=null&&(Jl(n.subTree.type)?Tt(()=>{s.set(k,pl(n.subTree))},n.subTree.suspense):s.set(k,pl(n.subTree)))};return Md(N),nv(N),xa(()=>{s.forEach(S=>{const{subTree:y,suspense:A}=n,M=pl(y);if(S.type===M.type&&S.key===M.key){qu(M);const V=M.component.da;V&&Tt(V,A);return}m(S)})}),()=>{if(k=null,!e.default)return o=null;const S=e.default(),y=S[0];if(S.length>1)return o=null,S;if(!Ds(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let A=pl(y);if(A.type===at)return o=null,A;const M=A.type,V=tc($r(A)?A.type.__asyncResolved||{}:M),{include:b,exclude:E,max:w}=t;if(b&&(!V||!Oo(b,V))||E&&V&&Oo(E,V))return A.shapeFlag&=-257,o=A,y;const C=A.key==null?M:A.key,x=s.get(C);return A.el&&(A=mr(A),y.shapeFlag&128&&(y.ssContent=A)),k=C,x?(A.el=x.el,A.component=x.component,A.transition&&xi(A,A.transition),A.shapeFlag|=512,i.delete(C),i.add(C)):(i.add(C),w&&i.size>parseInt(w,10)&&T(i.values().next().value)),A.shapeFlag|=256,o=A,Jl(y.type)?y:A}}},ZI=JI;function Oo(t,e){return ue(t)?t.some(n=>Oo(n,e)):Be(t)?t.split(",").includes(e):Fb(t)?(t.lastIndex=0,t.test(e)):!1}function Z1(t,e){tv(t,"a",e)}function ev(t,e){tv(t,"da",e)}function tv(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&eA(r,e,n,s),s=s.parent}}function eA(t,e,n,r){const s=jc(e,t,r,!0);rv(()=>{Ed(r[e],s)},n)}function qu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function pl(t){return t.shapeFlag&128?t.ssContent:t}function jc(t,e,n=Ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const a=Oa(n),l=Pn(e,n,t,o);return a(),Qn(),l});return r?s.unshift(i):s.push(i),i}}const wr=t=>(e,n=Ct)=>{(!Mi||t==="sp")&&jc(t,(...r)=>e(...r),n)},tA=wr("bm"),Md=wr("m"),nA=wr("bu"),nv=wr("u"),xa=wr("bum"),rv=wr("um"),sv=wr("sp"),rA=wr("rtg"),sA=wr("rtc");function iv(t,e=Ct){jc("ec",t,e)}const Dd="components",iA="directives";function v7(t,e){return Ld(Dd,t,!0,e)||t}const ov=Symbol.for("v-ndc");function oA(t){return Be(t)?Ld(Dd,t,!1)||t:t||ov}function E7(t){return Ld(iA,t)}function Ld(t,e,n=!0,r=!1){const s=St||Ct;if(s){const i=s.type;if(t===Dd){const a=tc(i,!1);if(a&&(a===e||a===yn(e)||a===Fc(yn(e))))return i}const o=Ig(s[t]||i[t],e)||Ig(s.appContext[t],e);return!o&&r?i:o}}function Ig(t,e){return t&&(t[e]||t[yn(e)]||t[Fc(yn(e))])}function w7(t,e,n,r){let s;const i=n,o=ue(t);if(o||Be(t)){const a=o&&gi(t);let l=!1,u=!1;a&&(l=!_n(t),u=pr(t),t=Bc(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?u?zl(It(t[h])):It(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function T7(t,e,n={},r,s){if(St.ce||St.parent&&$r(St.parent)&&St.parent.ce){const u=Object.keys(n).length>0;return mn(),Un(At,null,[Ze("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),mn();const o=i&&av(i(n)),a=n.key||o&&o.key,l=Un(At,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function av(t){return t.some(e=>Ds(e)?!(e.type===at||e.type===At&&!av(e.children)):!0)?t:null}const $h=t=>t?Mv(t)?zc(t):$h(t.parent):null,Wo=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$h(t.parent),$root:t=>$h(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cv(t),$forceUpdate:t=>t.f||(t.f=()=>{Nd(t.update)}),$nextTick:t=>t.n||(t.n=Ni.bind(t.proxy)),$watch:t=>RA.bind(t)}),Wu=(t,e)=>t!==He&&!t.__isScriptSetup&&Me(t,e),aA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wu(r,e))return o[e]=1,r[e];if(s!==He&&Me(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Me(u,e))return o[e]=3,i[e];if(n!==He&&Me(n,e))return o[e]=4,n[e];zh&&(o[e]=0)}}const h=Wo[e];let f,p;if(h)return e==="$attrs"&&Ut(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==He&&Me(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Me(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wu(s,e)?(s[e]=n,!0):r!==He&&Me(r,e)?(r[e]=n,!0):Me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let l,u;return!!(n[a]||t!==He&&a[0]!=="$"&&Me(t,a)||Wu(e,a)||(l=i[0])&&Me(l,a)||Me(r,a)||Me(Wo,a)||Me(s.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ag(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zh=!0;function lA(t){const e=cv(t),n=t.proxy,r=t.ctx;zh=!1,e.beforeCreate&&Cg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:_,activated:T,deactivated:k,beforeDestroy:N,beforeUnmount:S,destroyed:y,unmounted:A,render:M,renderTracked:V,renderTriggered:b,errorCaptured:E,serverPrefetch:w,expose:C,inheritAttrs:x,components:P,directives:I,filters:pe}=e;if(u&&cA(u,r,null),o)for(const me in o){const te=o[me];fe(te)&&(r[me]=te.bind(n))}if(s){const me=s.call(n,n);Ve(me)&&(t.data=is(me))}if(zh=!0,i)for(const me in i){const te=i[me],Le=fe(te)?te.bind(n,n):fe(te.get)?te.get.bind(n,n):Gn,Wt=!fe(te)&&fe(te.set)?te.set.bind(n):Gn,hn=mt({get:Le,set:Wt});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>hn.value,set:Qe=>hn.value=Qe})}if(a)for(const me in a)lv(a[me],r,n,me);if(l){const me=fe(l)?l.call(n):l;Reflect.ownKeys(me).forEach(te=>{zr(te,me[te])})}h&&Cg(h,t,"c");function re(me,te){ue(te)?te.forEach(Le=>me(Le.bind(n))):te&&me(te.bind(n))}if(re(tA,f),re(Md,p),re(nA,m),re(nv,_),re(Z1,T),re(ev,k),re(iv,E),re(sA,V),re(rA,b),re(xa,S),re(rv,A),re(sv,w),ue(C))if(C.length){const me=t.exposed||(t.exposed={});C.forEach(te=>{Object.defineProperty(me,te,{get:()=>n[te],set:Le=>n[te]=Le,enumerable:!0})})}else t.exposed||(t.exposed={});M&&t.render===Gn&&(t.render=M),x!=null&&(t.inheritAttrs=x),P&&(t.components=P),I&&(t.directives=I),w&&Od(t)}function cA(t,e,n=Gn){ue(t)&&(t=qh(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),st(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cg(t,e,n){Pn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lv(t,e,n,r){let s=r.includes(".")?bv(n,r):()=>n[r];if(Be(t)){const i=e[t];fe(i)&&qr(s,i)}else if(fe(t))qr(s,t.bind(n));else if(Ve(t))if(ue(t))t.forEach(i=>lv(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&qr(s,i,t)}}function cv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ql(l,u,o,!0)),Ql(l,e,o)),Ve(e)&&i.set(e,l),l}function Ql(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ql(t,i,n,!0),s&&s.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uA={data:Rg,props:Sg,emits:Sg,methods:Mo,computed:Mo,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Mo,directives:Mo,watch:fA,provide:Rg,inject:hA};function Rg(t,e){return e?t?function(){return yt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function hA(t,e){return Mo(qh(t),qh(e))}function qh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mo(t,e){return t?yt(Object.create(null),t,e):e}function Sg(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:yt(Object.create(null),Ag(t),Ag(e??{})):e}function fA(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=Yt(t[r],e[r]);return n}function uv(){return{app:null,config:{isNativeTag:d1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dA=0;function pA(t,e){return function(r,s=null){fe(r)||(r=yt({},r)),s!=null&&!Ve(s)&&(s=null);const i=uv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:dA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ZA,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!l){const m=u._ceVNode||Ze(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,zc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Pn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Ps;Ps=u;try{return h()}finally{Ps=f}}};return u}}let Ps=null;function zr(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function _t(t,e,n=!1){const r=os();if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Vd(){return!!(os()||Ps)}const hv={},fv=()=>Object.create(hv),dv=t=>Object.getPrototypeOf(t)===hv;function mA(t,e,n,r=!1){const s={},i=fv();t.propsDefaults=Object.create(null),pv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(Hc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Me(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const _=yn(p);s[_]=Wh(l,a,_,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{pv(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!Me(e,f)&&((h=ss(f))===f||!Me(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Wh(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Me(e,f))&&(delete i[f],u=!0)}u&&cr(t.attrs,"set","")}function pv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pi(l))continue;const u=e[l];let h;s&&Me(s,h=yn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Hc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=a||He;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Wh(s,l,f,u[f],t,!Me(u,f))}}return o}function Wh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Oa(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ss(n))&&(r=!0))}return r}const _A=new WeakMap;function mv(t,e,n=!1){const r=n?_A:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!fe(t)){const h=f=>{l=!0;const[p,m]=mv(f,e,!0);yt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ve(t)&&r.set(t,fi),fi;if(ue(i))for(let h=0;h<i.length;h++){const f=yn(i[h]);Pg(f)&&(o[f]=He)}else if(i)for(const h in i){const f=yn(h);if(Pg(f)){const p=i[h],m=o[f]=ue(p)||fe(p)?{type:p}:yt({},p),_=m.type;let T=!1,k=!0;if(ue(_))for(let N=0;N<_.length;++N){const S=_[N],y=fe(S)&&S.name;if(y==="Boolean"){T=!0;break}else y==="String"&&(k=!1)}else T=fe(_)&&_.name==="Boolean";m[0]=T,m[1]=k,(T||Me(m,"default"))&&a.push(f)}}const u=[o,a];return Ve(t)&&r.set(t,u),u}function Pg(t){return t[0]!=="$"&&!pi(t)}const Fd=t=>t==="_"||t==="_ctx"||t==="$stable",Ud=t=>ue(t)?t.map(on):[on(t)],yA=(t,e,n)=>{if(e._n)return e;const r=xd((...s)=>Ud(e(...s)),n);return r._c=!1,r},gv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fd(s))continue;const i=t[s];if(fe(i))e[s]=yA(s,i,r);else if(i!=null){const o=Ud(i);e[s]=()=>o}}},_v=(t,e)=>{const n=Ud(e);t.slots.default=()=>n},yv=(t,e,n)=>{for(const r in e)(n||!Fd(r))&&(t[r]=e[r])},vA=(t,e,n)=>{const r=t.slots=fv();if(t.vnode.shapeFlag&32){const s=e._;s?(yv(r,e,n),n&&y1(r,"_",s,!0)):gv(e,r)}else e&&_v(t,e)},EA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=He;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:yv(s,e,n):(i=!e.$stable,gv(e,s)),o=e}else e&&(_v(t,e),o={default:1});if(i)for(const a in s)!Fd(a)&&o[a]==null&&delete s[a]},Tt=Cv;function wA(t){return vv(t)}function TA(t){return vv(t,GI)}function vv(t,e){const n=Uc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Gn,insertStaticContent:_}=t,T=(R,O,L,j=null,U=null,H=null,Q=void 0,K=null,G=!!O.dynamicChildren)=>{if(R===O)return;R&&!Tn(R,O)&&(j=B(R),Qe(R,U,H,!0),R=null),O.patchFlag===-2&&(G=!1,O.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:Z}=O;switch(z){case ks:k(R,O,L,j);break;case at:N(R,O,L,j);break;case Go:R==null&&S(O,L,j,Q);break;case At:P(R,O,L,j,U,H,Q,K,G);break;default:Z&1?M(R,O,L,j,U,H,Q,K,G):Z&6?I(R,O,L,j,U,H,Q,K,G):(Z&64||Z&128)&&z.process(R,O,L,j,U,H,Q,K,G,oe)}ce!=null&&U?yi(ce,R&&R.ref,H,O||R,!O):ce==null&&R&&R.ref!=null&&yi(R.ref,null,H,R,!0)},k=(R,O,L,j)=>{if(R==null)r(O.el=a(O.children),L,j);else{const U=O.el=R.el;O.children!==R.children&&u(U,O.children)}},N=(R,O,L,j)=>{R==null?r(O.el=l(O.children||""),L,j):O.el=R.el},S=(R,O,L,j)=>{[R.el,R.anchor]=_(R.children,O,L,j,R.el,R.anchor)},y=({el:R,anchor:O},L,j)=>{let U;for(;R&&R!==O;)U=p(R),r(R,L,j),R=U;r(O,L,j)},A=({el:R,anchor:O})=>{let L;for(;R&&R!==O;)L=p(R),s(R),R=L;s(O)},M=(R,O,L,j,U,H,Q,K,G)=>{O.type==="svg"?Q="svg":O.type==="math"&&(Q="mathml"),R==null?V(O,L,j,U,H,Q,K,G):w(R,O,U,H,Q,K,G)},V=(R,O,L,j,U,H,Q,K)=>{let G,z;const{props:ce,shapeFlag:Z,transition:ae,dirs:se}=R;if(G=R.el=o(R.type,H,ce&&ce.is,ce),Z&8?h(G,R.children):Z&16&&E(R.children,G,null,j,U,Gu(R,H),Q,K),se&&Fn(R,null,j,"created"),b(G,R,R.scopeId,Q,j),ce){for(const ke in ce)ke!=="value"&&!pi(ke)&&i(G,ke,null,ce[ke],H,j);"value"in ce&&i(G,"value",null,ce.value,H),(z=ce.onVnodeBeforeMount)&&Zt(z,j,R)}se&&Fn(R,null,j,"beforeMount");const he=Ev(U,ae);he&&ae.beforeEnter(G),r(G,O,L),((z=ce&&ce.onVnodeMounted)||he||se)&&Tt(()=>{z&&Zt(z,j,R),he&&ae.enter(G),se&&Fn(R,null,j,"mounted")},U)},b=(R,O,L,j,U)=>{if(L&&m(R,L),j)for(let H=0;H<j.length;H++)m(R,j[H]);if(U){let H=U.subTree;if(O===H||Jl(H.type)&&(H.ssContent===O||H.ssFallback===O)){const Q=U.vnode;b(R,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},E=(R,O,L,j,U,H,Q,K,G=0)=>{for(let z=G;z<R.length;z++){const ce=R[z]=K?Lr(R[z]):on(R[z]);T(null,ce,O,L,j,U,H,Q,K)}},w=(R,O,L,j,U,H,Q)=>{const K=O.el=R.el;let{patchFlag:G,dynamicChildren:z,dirs:ce}=O;G|=R.patchFlag&16;const Z=R.props||He,ae=O.props||He;let se;if(L&&ds(L,!1),(se=ae.onVnodeBeforeUpdate)&&Zt(se,L,O,R),ce&&Fn(O,R,L,"beforeUpdate"),L&&ds(L,!0),(Z.innerHTML&&ae.innerHTML==null||Z.textContent&&ae.textContent==null)&&h(K,""),z?C(R.dynamicChildren,z,K,L,j,Gu(O,U),H):Q||te(R,O,K,null,L,j,Gu(O,U),H,!1),G>0){if(G&16)x(K,Z,ae,L,U);else if(G&2&&Z.class!==ae.class&&i(K,"class",null,ae.class,U),G&4&&i(K,"style",Z.style,ae.style,U),G&8){const he=O.dynamicProps;for(let ke=0;ke<he.length;ke++){const Se=he[ke],vt=Z[Se],ft=ae[Se];(ft!==vt||Se==="value")&&i(K,Se,vt,ft,U,L)}}G&1&&R.children!==O.children&&h(K,O.children)}else!Q&&z==null&&x(K,Z,ae,L,U);((se=ae.onVnodeUpdated)||ce)&&Tt(()=>{se&&Zt(se,L,O,R),ce&&Fn(O,R,L,"updated")},j)},C=(R,O,L,j,U,H,Q)=>{for(let K=0;K<O.length;K++){const G=R[K],z=O[K],ce=G.el&&(G.type===At||!Tn(G,z)||G.shapeFlag&198)?f(G.el):L;T(G,z,ce,null,j,U,H,Q,!0)}},x=(R,O,L,j,U)=>{if(O!==L){if(O!==He)for(const H in O)!pi(H)&&!(H in L)&&i(R,H,O[H],null,U,j);for(const H in L){if(pi(H))continue;const Q=L[H],K=O[H];Q!==K&&H!=="value"&&i(R,H,K,Q,U,j)}"value"in L&&i(R,"value",O.value,L.value,U)}},P=(R,O,L,j,U,H,Q,K,G)=>{const z=O.el=R?R.el:a(""),ce=O.anchor=R?R.anchor:a("");let{patchFlag:Z,dynamicChildren:ae,slotScopeIds:se}=O;se&&(K=K?K.concat(se):se),R==null?(r(z,L,j),r(ce,L,j),E(O.children||[],L,ce,U,H,Q,K,G)):Z>0&&Z&64&&ae&&R.dynamicChildren?(C(R.dynamicChildren,ae,L,U,H,Q,K),(O.key!=null||U&&O===U.subTree)&&wv(R,O,!0)):te(R,O,L,ce,U,H,Q,K,G)},I=(R,O,L,j,U,H,Q,K,G)=>{O.slotScopeIds=K,R==null?O.shapeFlag&512?U.ctx.activate(O,L,j,Q,G):pe(O,L,j,U,H,Q,G):ve(R,O,G)},pe=(R,O,L,j,U,H,Q)=>{const K=R.component=qA(R,j,U);if(Na(R)&&(K.ctx.renderer=oe),WA(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,re,Q),!R.el){const G=K.subTree=Ze(at);N(null,G,O,L),R.placeholder=G.el}}else re(K,R,O,L,U,H,Q)},ve=(R,O,L)=>{const j=O.component=R.component;if(MA(R,O,L))if(j.asyncDep&&!j.asyncResolved){me(j,O,L);return}else j.next=O,j.update();else O.el=R.el,j.vnode=O},re=(R,O,L,j,U,H,Q)=>{const K=()=>{if(R.isMounted){let{next:Z,bu:ae,u:se,parent:he,vnode:ke}=R;{const xt=Tv(R);if(xt){Z&&(Z.el=ke.el,me(R,Z,Q)),xt.asyncDep.then(()=>{R.isUnmounted||K()});return}}let Se=Z,vt;ds(R,!1),Z?(Z.el=ke.el,me(R,Z,Q)):Z=ke,ae&&mi(ae),(vt=Z.props&&Z.props.onVnodeBeforeUpdate)&&Zt(vt,he,Z,ke),ds(R,!0);const ft=Ku(R),Et=R.subTree;R.subTree=ft,T(Et,ft,f(Et.el),B(Et),R,U,H),Z.el=ft.el,Se===null&&$c(R,ft.el),se&&Tt(se,U),(vt=Z.props&&Z.props.onVnodeUpdated)&&Tt(()=>Zt(vt,he,Z,ke),U)}else{let Z;const{el:ae,props:se}=O,{bm:he,m:ke,parent:Se,root:vt,type:ft}=R,Et=$r(O);if(ds(R,!1),he&&mi(he),!Et&&(Z=se&&se.onVnodeBeforeMount)&&Zt(Z,Se,O),ds(R,!0),ae&&Fe){const xt=()=>{R.subTree=Ku(R),Fe(ae,R.subTree,R,U,null)};Et&&ft.__asyncHydrate?ft.__asyncHydrate(ae,R,xt):xt()}else{vt.ce&&vt.ce._def.shadowRoot!==!1&&vt.ce._injectChildStyle(ft);const xt=R.subTree=Ku(R);T(null,xt,L,j,R,U,H),O.el=xt.el}if(ke&&Tt(ke,U),!Et&&(Z=se&&se.onVnodeMounted)){const xt=O;Tt(()=>Zt(Z,Se,xt),U)}(O.shapeFlag&256||Se&&$r(Se.vnode)&&Se.vnode.shapeFlag&256)&&R.a&&Tt(R.a,U),R.isMounted=!0,O=L=j=null}};R.scope.on();const G=R.effect=new I1(K);R.scope.off();const z=R.update=G.run.bind(G),ce=R.job=G.runIfDirty.bind(G);ce.i=R,ce.id=R.uid,G.scheduler=()=>Nd(ce),ds(R,!0),z()},me=(R,O,L)=>{O.component=R;const j=R.vnode.props;R.vnode=O,R.next=null,gA(R,O.props,j,L),EA(R,O.children,L),Yn(),_g(R),Qn()},te=(R,O,L,j,U,H,Q,K,G=!1)=>{const z=R&&R.children,ce=R?R.shapeFlag:0,Z=O.children,{patchFlag:ae,shapeFlag:se}=O;if(ae>0){if(ae&128){Wt(z,Z,L,j,U,H,Q,K,G);return}else if(ae&256){Le(z,Z,L,j,U,H,Q,K,G);return}}se&8?(ce&16&&Jt(z,U,H),Z!==z&&h(L,Z)):ce&16?se&16?Wt(z,Z,L,j,U,H,Q,K,G):Jt(z,U,H,!0):(ce&8&&h(L,""),se&16&&E(Z,L,j,U,H,Q,K,G))},Le=(R,O,L,j,U,H,Q,K,G)=>{R=R||fi,O=O||fi;const z=R.length,ce=O.length,Z=Math.min(z,ce);let ae;for(ae=0;ae<Z;ae++){const se=O[ae]=G?Lr(O[ae]):on(O[ae]);T(R[ae],se,L,null,U,H,Q,K,G)}z>ce?Jt(R,U,H,!0,!1,Z):E(O,L,j,U,H,Q,K,G,Z)},Wt=(R,O,L,j,U,H,Q,K,G)=>{let z=0;const ce=O.length;let Z=R.length-1,ae=ce-1;for(;z<=Z&&z<=ae;){const se=R[z],he=O[z]=G?Lr(O[z]):on(O[z]);if(Tn(se,he))T(se,he,L,null,U,H,Q,K,G);else break;z++}for(;z<=Z&&z<=ae;){const se=R[Z],he=O[ae]=G?Lr(O[ae]):on(O[ae]);if(Tn(se,he))T(se,he,L,null,U,H,Q,K,G);else break;Z--,ae--}if(z>Z){if(z<=ae){const se=ae+1,he=se<ce?O[se].el:j;for(;z<=ae;)T(null,O[z]=G?Lr(O[z]):on(O[z]),L,he,U,H,Q,K,G),z++}}else if(z>ae)for(;z<=Z;)Qe(R[z],U,H,!0),z++;else{const se=z,he=z,ke=new Map;for(z=he;z<=ae;z++){const Gt=O[z]=G?Lr(O[z]):on(O[z]);Gt.key!=null&&ke.set(Gt.key,z)}let Se,vt=0;const ft=ae-he+1;let Et=!1,xt=0;const Cr=new Array(ft);for(z=0;z<ft;z++)Cr[z]=0;for(z=se;z<=Z;z++){const Gt=R[z];if(vt>=ft){Qe(Gt,U,H,!0);continue}let fn;if(Gt.key!=null)fn=ke.get(Gt.key);else for(Se=he;Se<=ae;Se++)if(Cr[Se-he]===0&&Tn(Gt,O[Se])){fn=Se;break}fn===void 0?Qe(Gt,U,H,!0):(Cr[fn-he]=z+1,fn>=xt?xt=fn:Et=!0,T(Gt,O[fn],L,null,U,H,Q,K,G),vt++)}const Qs=Et?bA(Cr):fi;for(Se=Qs.length-1,z=ft-1;z>=0;z--){const Gt=he+z,fn=O[Gt],Xs=O[Gt+1],co=Gt+1<ce?Xs.el||Xs.placeholder:j;Cr[z]===0?T(null,fn,L,co,U,H,Q,K,G):Et&&(Se<0||z!==Qs[Se]?hn(fn,L,co,2):Se--)}}},hn=(R,O,L,j,U=null)=>{const{el:H,type:Q,transition:K,children:G,shapeFlag:z}=R;if(z&6){hn(R.component.subTree,O,L,j);return}if(z&128){R.suspense.move(O,L,j);return}if(z&64){Q.move(R,O,L,oe);return}if(Q===At){r(H,O,L);for(let Z=0;Z<G.length;Z++)hn(G[Z],O,L,j);r(R.anchor,O,L);return}if(Q===Go){y(R,O,L);return}if(j!==2&&z&1&&K)if(j===0)K.beforeEnter(H),r(H,O,L),Tt(()=>K.enter(H),U);else{const{leave:Z,delayLeave:ae,afterLeave:se}=K,he=()=>{R.ctx.isUnmounted?s(H):r(H,O,L)},ke=()=>{H._isLeaving&&H[lr](!0),Z(H,()=>{he(),se&&se()})};ae?ae(H,he,ke):ke()}else r(H,O,L)},Qe=(R,O,L,j=!1,U=!1)=>{const{type:H,props:Q,ref:K,children:G,dynamicChildren:z,shapeFlag:ce,patchFlag:Z,dirs:ae,cacheIndex:se}=R;if(Z===-2&&(U=!1),K!=null&&(Yn(),yi(K,null,L,R,!0),Qn()),se!=null&&(O.renderCache[se]=void 0),ce&256){O.ctx.deactivate(R);return}const he=ce&1&&ae,ke=!$r(R);let Se;if(ke&&(Se=Q&&Q.onVnodeBeforeUnmount)&&Zt(Se,O,R),ce&6)nn(R.component,L,j);else{if(ce&128){R.suspense.unmount(L,j);return}he&&Fn(R,null,O,"beforeUnmount"),ce&64?R.type.remove(R,O,L,oe,j):z&&!z.hasOnce&&(H!==At||Z>0&&Z&64)?Jt(z,O,L,!1,!0):(H===At&&Z&384||!U&&ce&16)&&Jt(G,O,L),j&&Xe(R)}(ke&&(Se=Q&&Q.onVnodeUnmounted)||he)&&Tt(()=>{Se&&Zt(Se,O,R),he&&Fn(R,null,O,"unmounted")},L)},Xe=R=>{const{type:O,el:L,anchor:j,transition:U}=R;if(O===At){Ar(L,j);return}if(O===Go){A(R);return}const H=()=>{s(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(R.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,G=()=>Q(L,H);K?K(R.el,H,G):G()}else H()},Ar=(R,O)=>{let L;for(;R!==O;)L=p(R),s(R),R=L;s(O)},nn=(R,O,L)=>{const{bum:j,scope:U,job:H,subTree:Q,um:K,m:G,a:z}=R;Xl(G),Xl(z),j&&mi(j),U.stop(),H&&(H.flags|=8,Qe(Q,R,O,L)),K&&Tt(K,O),Tt(()=>{R.isUnmounted=!0},O)},Jt=(R,O,L,j=!1,U=!1,H=0)=>{for(let Q=H;Q<R.length;Q++)Qe(R[Q],O,L,j,U)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const O=p(R.anchor||R.el),L=O&&O[jI];return L?p(L):O};let ee=!1;const J=(R,O,L)=>{R==null?O._vnode&&Qe(O._vnode,null,null,!0):T(O._vnode||null,R,O,null,null,null,L),O._vnode=R,ee||(ee=!0,_g(),Gl(),ee=!1)},oe={p:T,um:Qe,m:hn,r:Xe,mt:pe,mc:E,pc:te,pbc:C,n:B,o:t};let _e,Fe;return e&&([_e,Fe]=e(oe)),{render:J,hydrate:_e,createApp:pA(J,_e)}}function Gu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ev(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wv(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&wv(o,a)),a.type===ks&&a.patchFlag!==-1&&(a.el=o.el),a.type===at&&!a.el&&(a.el=o.el)}}function bA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tv(e)}function Xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const IA=Symbol.for("v-scx"),AA=()=>_t(IA);function CA(t,e){return Bd(t,null,e)}function qr(t,e,n){return Bd(t,e,n)}function Bd(t,e,n=He){const{immediate:r,deep:s,flush:i,once:o}=n,a=yt({},n),l=e&&r||!e&&i!=="post";let u;if(Mi){if(i==="sync"){const m=AA();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Gn,m.resume=Gn,m.pause=Gn,m}}const h=Ct;a.call=(m,_,T)=>Pn(m,h,_,T);let f=!1;i==="post"?a.scheduler=m=>{Tt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,_)=>{_?m():Nd(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=MI(t,e,a);return Mi&&(u?u.push(p):l&&p()),p}function RA(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?bv(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Oa(this),a=Bd(s,i.bind(r),n);return o(),a}function bv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const SA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${ss(e)}Modifiers`];function PA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let s=n;const i=e.startsWith("update:"),o=i&&SA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Be(h)?h.trim():h)),o.number&&(s=n.map(Dh)));let a,l=r[a=Vu(e)]||r[a=Vu(yn(e))];!l&&i&&(l=r[a=Vu(ss(e))]),l&&Pn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(u,t,6,s)}}const kA=new WeakMap;function Iv(t,e,n=!1){const r=n?kA:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!fe(t)){const l=u=>{const h=Iv(u,e,!0);h&&(a=!0,yt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ve(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):yt(o,i),Ve(t)&&r.set(t,o),o)}function Hc(t,e){return!t||!Sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Me(t,e[0].toLowerCase()+e.slice(1))||Me(t,ss(e))||Me(t,e))}function Ku(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:_,inheritAttrs:T}=t,k=Kl(t);let N,S;try{if(n.shapeFlag&4){const A=s||r,M=A;N=on(u.call(M,A,h,f,m,p,_)),S=a}else{const A=e;N=on(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),S=e.props?a:xA(a)}}catch(A){Ko.length=0,Xi(A,t,1),N=Ze(at)}let y=N;if(S&&T!==!1){const A=Object.keys(S),{shapeFlag:M}=y;A.length&&M&7&&(i&&A.some(vd)&&(S=OA(S,i)),y=mr(y,S,!1,!0))}return n.dirs&&(y=mr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&xi(y,n.transition),N=y,Kl(k),N}function NA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ds(s)){if(s.type!==at||s.children==="v-if"){if(n)return;n=s}}else return}return n}const xA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sa(n))&&((e||(e={}))[n]=t[n]);return e},OA=(t,e)=>{const n={};for(const r in t)(!vd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function MA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kg(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!Hc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kg(r,o,u):!0:!!o;return!1}function kg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hc(n,i))return!0}return!1}function $c({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jl=t=>t.__isSuspense;let Gh=0;const DA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)LA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}VA(t,e,n,r,s,o,a,l,u)}},hydrate:FA,normalize:UA},jd=DA;function fa(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function LA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,f=h("div"),p=t.suspense=Av(t,s,r,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(fa(t,"onPending"),fa(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),vi(p,t.ssFallback)):p.resolve(!1,!0)}function VA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:_,pendingBranch:T,isInFallback:k,isHydrating:N}=f;if(T)f.pendingBranch=p,Tn(T,p)?(l(T,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():k&&(N||(l(_,m,n,r,s,null,i,o,a),vi(f,m)))):(f.pendingId=Gh++,N?(f.isHydrating=!1,f.activeBranch=T):u(T,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),k?(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(_,m,n,r,s,null,i,o,a),vi(f,m))):_&&Tn(_,p)?(l(_,p,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&Tn(_,p))l(_,p,n,r,s,f,i,o,a),vi(f,p);else if(fa(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=Gh++,l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:y}=f;S>0?setTimeout(()=>{f.pendingId===y&&f.fallback(m)},S):S===0&&f.fallback(m)}}function Av(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:f,m:p,um:m,n:_,o:{parentNode:T,remove:k}}=u;let N;const S=BA(t);S&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const y=t.props?v1(t.props.timeout):void 0,A=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Gh++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:E,activeBranch:w,pendingBranch:C,pendingId:x,effects:P,parentComponent:I,container:pe}=M;let ve=!1;M.isHydrating?M.isHydrating=!1:V||(ve=w&&C.transition&&C.transition.mode==="out-in",ve&&(w.transition.afterLeave=()=>{x===M.pendingId&&(p(C,pe,i===A?_(w):i,0),Bh(P))}),w&&(T(w.el)===pe&&(i=_(w)),m(w,I,M,!0)),ve||p(C,pe,i,0)),vi(M,C),M.pendingBranch=null,M.isInFallback=!1;let re=M.parent,me=!1;for(;re;){if(re.pendingBranch){re.effects.push(...P),me=!0;break}re=re.parent}!me&&!ve&&Bh(P),M.effects=[],S&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),fa(E,"onResolve")},fallback(V){if(!M.pendingBranch)return;const{vnode:b,activeBranch:E,parentComponent:w,container:C,namespace:x}=M;fa(b,"onFallback");const P=_(E),I=()=>{M.isInFallback&&(f(null,V,C,P,w,null,x,a,l),vi(M,V))},pe=V.transition&&V.transition.mode==="out-in";pe&&(E.transition.afterLeave=I),M.isInFallback=!0,m(E,w,null,!0),pe||I()},move(V,b,E){M.activeBranch&&p(M.activeBranch,V,b,E),M.container=V},next(){return M.activeBranch&&_(M.activeBranch)},registerDep(V,b,E){const w=!!M.pendingBranch;w&&M.deps++;const C=V.vnode.el;V.asyncDep.catch(x=>{Xi(x,V,0)}).then(x=>{if(V.isUnmounted||M.isUnmounted||M.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:P}=V;Yh(V,x),C&&(P.el=C);const I=!C&&V.subTree.el;b(V,P,T(C||V.subTree.el),C?null:_(V.subTree),M,o,E),I&&k(I),$c(V,P.el),w&&--M.deps===0&&M.resolve()})},unmount(V,b){M.isUnmounted=!0,M.activeBranch&&m(M.activeBranch,n,V,b),M.pendingBranch&&m(M.pendingBranch,n,V,b)}};return M}function FA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Av(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function UA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Ng(r?n.default:n),t.ssFallback=r?Ng(n.fallback):Ze(at)}function Ng(t){let e;if(fe(t)){const n=Oi&&t._c;n&&(t._d=!1,mn()),t=t(),n&&(t._d=!0,e=en,Rv())}return ue(t)&&(t=NA(t)),t=on(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Cv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Bh(t)}function vi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,$c(r,s))}function BA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const At=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Ko=[];let en=null;function mn(t=!1){Ko.push(en=t?null:[])}function Rv(){Ko.pop(),en=Ko[Ko.length-1]||null}let Oi=1;function Zl(t,e=!1){Oi+=t,t<0&&en&&e&&(en.hasOnce=!0)}function Sv(t){return t.dynamicChildren=Oi>0?en||fi:null,Rv(),Oi>0&&en&&en.push(t),t}function jA(t,e,n,r,s,i){return Sv(kv(t,e,n,r,s,i,!0))}function Un(t,e,n,r,s){return Sv(Ze(t,e,n,r,s,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function Tn(t,e){return t.type===e.type&&t.key===e.key}const Pv=({key:t})=>t??null,Pl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||st(t)||fe(t)?{i:St,r:t,k:e,f:!!n}:t:null);function kv(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pv(e),ref:e&&Pl(e),scopeId:z1,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return a?(Hd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Oi>0&&!o&&en&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&en.push(l),l}const Ze=HA;function HA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ov)&&(t=at),Ds(t)){const a=mr(t,e,!0);return n&&Hd(a,n),Oi>0&&!i&&en&&(a.shapeFlag&6?en[en.indexOf(t)]=a:en.push(a)),a.patchFlag=-2,a}if(JA(t)&&(t=t.__vccOpts),e){e=Nv(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=ka(a)),Ve(l)&&(kd(l)&&!ue(l)&&(l=yt({},l)),e.style=Pa(l))}const o=Be(t)?1:Jl(t)?128:q1(t)?64:Ve(t)?4:fe(t)?2:0;return kv(t,e,n,r,s,o,i,!0)}function Nv(t){return t?kd(t)||dv(t)?yt({},t):t:null}function mr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Ov(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Pv(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Pl(e)):[i,Pl(e)]:Pl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&xi(h,l.clone(h)),h}function xv(t=" ",e=0){return Ze(ks,null,t,e)}function b7(t,e){const n=Ze(Go,null,t);return n.staticCount=e,n}function I7(t="",e=!1){return e?(mn(),Un(at,null,t)):Ze(at,null,t)}function on(t){return t==null||typeof t=="boolean"?Ze(at):ue(t)?Ze(At,null,t.slice()):Ds(t)?Lr(t):Ze(ks,null,String(t))}function Lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function Hd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!dv(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ov(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ka([e.class,r.class]));else if(s==="style")e.style=Pa([e.style,r.style]);else if(Sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){Pn(t,e,7,[n,r])}const $A=uv();let zA=0;function qA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$A,i={uid:zA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new b1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mv(r,s),emitsOptions:Iv(r,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=PA.bind(null,i),t.ce&&t.ce(i),i}let Ct=null;const os=()=>Ct||St;let ec,Kh;{const t=Uc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ec=e("__VUE_INSTANCE_SETTERS__",n=>Ct=n),Kh=e("__VUE_SSR_SETTERS__",n=>Mi=n)}const Oa=t=>{const e=Ct;return ec(t),t.scope.on(),()=>{t.scope.off(),ec(e)}},xg=()=>{Ct&&Ct.scope.off(),ec(null)};function Mv(t){return t.vnode.shapeFlag&4}let Mi=!1;function WA(t,e=!1,n=!1){e&&Kh(e);const{props:r,children:s}=t.vnode,i=Mv(t);mA(t,r,i,e),vA(t,s,n||e);const o=i?GA(t,e):void 0;return e&&Kh(!1),o}function GA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,aA);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?YA(t):null,i=Oa(t),o=Qi(r,t,0,[t.props,s]),a=m1(o);if(Qn(),i(),(a||t.sp)&&!$r(t)&&Od(t),a){if(o.then(xg,xg),e)return o.then(l=>{Yh(t,l)}).catch(l=>{Xi(l,t,0)});t.asyncDep=o}else Yh(t,o)}else Dv(t)}function Yh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=U1(e)),Dv(t)}function Dv(t,e,n){const r=t.type;t.render||(t.render=r.render||Gn);{const s=Oa(t);Yn();try{lA(t)}finally{Qn(),s()}}}const KA={get(t,e){return Ut(t,"get",""),t[e]}};function YA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,KA),slots:t.slots,emit:t.emit,expose:e}}function zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(U1(II(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wo)return Wo[n](t)},has(e,n){return n in e||n in Wo}})):t.proxy}const QA=/(?:^|[-_])\w/g,XA=t=>t.replace(QA,e=>e.toUpperCase()).replace(/[-_]/g,"");function tc(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Lv(t,e,n=!1){let r=tc(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?XA(r):n?"App":"Anonymous"}function JA(t){return fe(t)&&"__vccOpts"in t}const mt=(t,e)=>xI(t,e,Mi);function Pt(t,e,n){try{Zl(-1);const r=arguments.length;return r===2?Ve(e)&&!ue(e)?Ds(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ds(n)&&(n=[n]),Ze(t,e,n))}finally{Zl(1)}}const ZA="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qh;const Og=typeof window<"u"&&window.trustedTypes;if(Og)try{Qh=Og.createPolicy("vue",{createHTML:t=>t})}catch{}const Vv=Qh?t=>Qh.createHTML(t):t=>t,eC="http://www.w3.org/2000/svg",tC="http://www.w3.org/1998/Math/MathML",ar=typeof document<"u"?document:null,Mg=ar&&ar.createElement("template"),nC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ar.createElementNS(eC,t):e==="mathml"?ar.createElementNS(tC,t):n?ar.createElement(t,{is:n}):ar.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mg.innerHTML=Vv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Mg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kr="transition",Io="animation",da=Symbol("_vtc"),Fv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rC=yt({},W1,Fv),sC=t=>(t.displayName="Transition",t.props=rC,t),iC=sC((t,{slots:e})=>Pt(zI,oC(t),e)),ps=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Dg=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function oC(t){const e={};for(const P in t)P in Fv||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=aC(s),T=_&&_[0],k=_&&_[1],{onBeforeEnter:N,onEnter:S,onEnterCancelled:y,onLeave:A,onLeaveCancelled:M,onBeforeAppear:V=N,onAppear:b=S,onAppearCancelled:E=y}=e,w=(P,I,pe,ve)=>{P._enterCancelled=ve,ms(P,I?h:a),ms(P,I?u:o),pe&&pe()},C=(P,I)=>{P._isLeaving=!1,ms(P,f),ms(P,m),ms(P,p),I&&I()},x=P=>(I,pe)=>{const ve=P?b:S,re=()=>w(I,P,pe);ps(ve,[I,re]),Lg(()=>{ms(I,P?l:i),ir(I,P?h:a),Dg(ve)||Vg(I,r,T,re)})};return yt(e,{onBeforeEnter(P){ps(N,[P]),ir(P,i),ir(P,o)},onBeforeAppear(P){ps(V,[P]),ir(P,l),ir(P,u)},onEnter:x(!1),onAppear:x(!0),onLeave(P,I){P._isLeaving=!0;const pe=()=>C(P,I);ir(P,f),P._enterCancelled?(ir(P,p),Bg(P)):(Bg(P),ir(P,p)),Lg(()=>{P._isLeaving&&(ms(P,f),ir(P,m),Dg(A)||Vg(P,r,k,pe))}),ps(A,[P,pe])},onEnterCancelled(P){w(P,!1,void 0,!0),ps(y,[P])},onAppearCancelled(P){w(P,!0,void 0,!0),ps(E,[P])},onLeaveCancelled(P){C(P),ps(M,[P])}})}function aC(t){if(t==null)return null;if(Ve(t))return[Yu(t.enter),Yu(t.leave)];{const e=Yu(t);return[e,e]}}function Yu(t){return v1(t)}function ir(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[da]||(t[da]=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[da];n&&(n.delete(e),n.size||(t[da]=void 0))}function Lg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lC=0;function Vg(t,e,n,r){const s=t._endId=++lC,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=cC(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function cC(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${kr}Delay`),i=r(`${kr}Duration`),o=Fg(s,i),a=r(`${Io}Delay`),l=r(`${Io}Duration`),u=Fg(a,l);let h=null,f=0,p=0;e===kr?o>0&&(h=kr,f=o,p=i.length):e===Io?u>0&&(h=Io,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?kr:Io:null,p=h?h===kr?i.length:l.length:0);const m=h===kr&&/\b(?:transform|all)(?:,|$)/.test(r(`${kr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:m}}function Fg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ug(n)+Ug(t[r])))}function Ug(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bg(t){return(t?t.ownerDocument:document).body.offsetHeight}function uC(t,e,n){const r=t[da];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jg=Symbol("_vod"),hC=Symbol("_vsh"),fC=Symbol(""),dC=/(?:^|;)\s*display\s*:/;function pC(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&kl(r,a,"")}else for(const o in e)n[o]==null&&kl(r,o,"");for(const o in n)o==="display"&&(i=!0),kl(r,o,n[o])}else if(s){if(e!==n){const o=r[fC];o&&(n+=";"+o),r.cssText=n,i=dC.test(n)}}else e&&t.removeAttribute("style");jg in t&&(t[jg]=i?r.display:"",t[hC]&&(r.display="none"))}const Hg=/\s*!important$/;function kl(t,e,n){if(ue(n))n.forEach(r=>kl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mC(t,e);Hg.test(n)?t.setProperty(ss(r),n.replace(Hg,""),"important"):t[r]=n}}const $g=["Webkit","Moz","ms"],Qu={};function mC(t,e){const n=Qu[e];if(n)return n;let r=yn(e);if(r!=="filter"&&r in t)return Qu[e]=r;r=Fc(r);for(let s=0;s<$g.length;s++){const i=$g[s]+r;if(i in t)return Qu[e]=i}return e}const zg="http://www.w3.org/1999/xlink";function qg(t,e,n,r,s,i=Kb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zg,e.slice(6,e.length)):t.setAttributeNS(zg,e,n):n==null||i&&!Td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function Wg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Td(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ts(t,e,n,r){t.addEventListener(e,n,r)}function gC(t,e,n,r){t.removeEventListener(e,n,r)}const Gg=Symbol("_vei");function _C(t,e,n,r,s=null){const i=t[Gg]||(t[Gg]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=yC(e);if(r){const u=i[e]=wC(r,s);Ts(t,a,u,l)}else o&&(gC(t,a,o,l),i[e]=void 0)}}const Kg=/(?:Once|Passive|Capture)$/;function yC(t){let e;if(Kg.test(t)){e={};let r;for(;r=t.match(Kg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let Xu=0;const vC=Promise.resolve(),EC=()=>Xu||(vC.then(()=>Xu=0),Xu=Date.now());function wC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pn(TC(r,n.value),e,5,[r])};return n.value=t,n.attached=EC(),n}function TC(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bC=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uC(t,r,o):e==="style"?pC(t,n,r):Sa(e)?vd(e)||_C(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IC(t,e,r,o))?(Wg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qg(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Wg(t,yn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qg(t,e,r,o))};function IC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yg(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yg(e)&&Be(n)?!1:e in t}const nc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>mi(e,n):e};function AC(t){t.target.composing=!0}function Qg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ei=Symbol("_assign"),A7={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ei]=nc(s);const i=r||s.props&&s.props.type==="number";Ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dh(a)),t[Ei](a)}),n&&Ts(t,"change",()=>{t.value=t.value.trim()}),e||(Ts(t,"compositionstart",AC),Ts(t,"compositionend",Qg),Ts(t,"change",Qg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ei]=nc(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Dh(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},C7={created(t,{value:e},n){t.checked=Hl(e,n.props.value),t[Ei]=nc(n),Ts(t,"change",()=>{t[Ei](CC(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ei]=nc(r),e!==n&&(t.checked=Hl(e,r.props.value))}};function CC(t){return"_value"in t?t._value:t.value}const RC=["ctrl","shift","alt","meta"],SC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>RC.some(n=>t[`${n}Key`]&&!e.includes(n))},R7=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const a=SC[e[o]];if(a&&a(s,e))return}return t(s,...i)}))},Uv=yt({patchProp:bC},nC);let Yo,Xg=!1;function PC(){return Yo||(Yo=wA(Uv))}function kC(){return Yo=Xg?Yo:TA(Uv),Xg=!0,Yo}const NC=((...t)=>{const e=PC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Bv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e}),xC=((...t)=>{const e=kC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jv(r);if(s)return n(s,!0,Bv(s))},e});function Bv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jv(t){return Be(t)?document.querySelector(t):t}const OC=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,MC=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,DC=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function LC(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){VC(t);return}return e}function VC(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function rc(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!DC.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(OC.test(t)||MC.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,LC)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const FC=/#/g,UC=/&/g,BC=/\//g,jC=/=/g,$d=/\+/g,HC=/%5e/gi,$C=/%60/gi,zC=/%7c/gi,qC=/%20/gi;function WC(t){return encodeURI(""+t).replace(zC,"|")}function Xh(t){return WC(typeof t=="string"?t:JSON.stringify(t)).replace($d,"%2B").replace(qC,"+").replace(FC,"%23").replace(UC,"%26").replace($C,"`").replace(HC,"^").replace(BC,"%2F")}function Ju(t){return Xh(t).replace(jC,"%3D")}function sc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function GC(t){return sc(t.replace($d," "))}function KC(t){return sc(t.replace($d," "))}function Hv(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=GC(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=KC(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function YC(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ju(t)}=${Xh(n)}`).join("&"):`${Ju(t)}=${Xh(e)}`:Ju(t)}function QC(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>YC(e,t[e])).filter(Boolean).join("&")}const XC=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,JC=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,ZC=/^([/\\]\s*){2,}[^/\\]/,eR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,tR=/\/$|\/\?|\/#/,nR=/^\.?\//;function Ws(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?XC.test(t):JC.test(t)||(e.acceptRelative?ZC.test(t):!1)}function rR(t){return!!t&&eR.test(t)}function Jh(t="",e){return e?tR.test(t):t.endsWith("/")}function ic(t="",e){if(!e)return(Jh(t)?t.slice(0,-1):t)||"/";if(!Jh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function sR(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Jh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function iR(t,e){if(zv(e)||Ws(t))return t;const n=ic(e);return t.startsWith(n)?t:zd(n,t)}function Jg(t,e){if(zv(e))return t;const n=ic(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function $v(t,e){const n=Gv(t),r={...Hv(n.search),...e};return n.search=QC(r),lR(n)}function zv(t){return!t||t==="/"}function oR(t){return t&&t!=="/"}function zd(t,...e){let n=t||"";for(const r of e.filter(s=>oR(s)))if(n){const s=r.replace(nR,"");n=sR(n)+s}else n=r;return n}function qv(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(r.length===1&&Ws(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+l;continue}r.push(l),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function aR(t,e){return sc(ic(t))===sc(ic(e))}const Wv=Symbol.for("ufo:protocolRelative");function Gv(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!Ws(t,{acceptRelative:!0}))return Zg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Zg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Wv]:!r}}function Zg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function lR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Wv]?(t.protocol||"")+"//":"")+s+i+e+n+r}class cR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function uR(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new cR(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const hR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function e_(t="GET"){return hR.has(t.toUpperCase())}function fR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const dR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),pR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return pR.test(e)?"json":dR.has(e)||e.startsWith("text/")?"text":"blob"}function gR(t,e,n,r){const s=_R(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function _R(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ml(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const yR=new Set([408,409,425,429,500,502,503,504]),vR=new Set([101,204,205,304]);function Kv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=e_(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):yR.has(f))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=uR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:gR(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await ml(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=iR(h.request,h.options.baseURL)),h.options.query&&(h.request=$v(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&e_(h.options.method)&&(fR(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const m=new r;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,m.abort(_)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await ml(h,h.options.onRequestError),await s(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!vR.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||mR(h.response.headers.get("content-type")||"");switch(m){case"json":{const _=await h.response.text(),T=h.options.parseResponse||rc;h.response._data=T(_);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await ml(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await ml(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Kv({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const oc=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),ER=oc.fetch?(...t)=>oc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),wR=oc.Headers,TR=oc.AbortController,bR=Kv({fetch:ER,Headers:wR,AbortController:TR}),IR=bR,AR=()=>window?.__NUXT__?.config||{},qd=()=>AR().app,CR=()=>qd().baseURL,RR=()=>qd().buildAssetsDir,Wd=(...t)=>qv(Yv(),RR(),...t),Yv=(...t)=>{const e=qd(),n=e.cdnURL||e.baseURL;return t.length?qv(n,...t):n};globalThis.__buildAssetsURL=Wd,globalThis.__publicAssetsURL=Yv;globalThis.$fetch||(globalThis.$fetch=IR.create({baseURL:CR()}));"global"in globalThis||(globalThis.global=globalThis);function Zh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Zh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const SR={run:t=>t()},PR=()=>SR,Qv=typeof console.createTask<"u"?console.createTask:PR;function kR(t,e){const n=e.shift(),r=Qv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function NR(t,e){const n=e.shift(),r=Qv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Zu(t,e){for(const n of[...t])n(e)}class xR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Zh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Zh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(kR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(NR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Zu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Zu(this._after,s)}):(this._after&&s&&Zu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Xv(){return new xR}const t_=typeof window<"u";function OR(t,e={}){const n={inspect:t_,group:t_,filter:()=>!0,...e},r=n.filter,s=typeof r=="string"?h=>h.startsWith(r):r,i=n.tag?`[${n.tag}] `:"",o=h=>i+h.name+"".padEnd(h._id,"\0"),a={},l=t.beforeEach(h=>{s!==void 0&&!s(h.name)||(a[h.name]=a[h.name]||0,h._id=a[h.name]++,console.time(o(h)))}),u=t.afterEach(h=>{s!==void 0&&!s(h.name)||(n.group&&console.groupCollapsed(h.name),n.inspect?console.timeLog(o(h),h.args):console.timeEnd(o(h)),n.group&&console.groupEnd(),a[h.name]--)});return{close:()=>{l(),u()}}}function MR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;ef.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{ef.delete(u)}}}}function DR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=MR({...t,...r})),e[n]}}}const ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},n_="__unctx__",LR=ac[n_]||(ac[n_]=DR()),VR=(t,e={})=>LR.get(t,e),r_="__unctx_async_handlers__",ef=ac[r_]||(ac[r_]=new Set);function wi(t){const e=[];for(const s of ef){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const FR=!1,s_=!1,UR=!1,S7={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},BR=null,jR="#__nuxt",Jv="nuxt-app",i_=36e5,HR="vite:preloadError";function Zv(t=Jv){return VR(t,{asyncContext:!1})}const $R="__nuxt_plugin";function zR(t){let e=0;const n={_id:t.id||Jv||"nuxt-app",_scope:rI(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.19.3"},get vue(){return n.vueApp.version}},payload:jn({...t.ssrContext?.payload||{},data:jn({}),state:is({}),once:new Set,_errors:jn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!bd()?n._scope.run(()=>o_(n,s)):o_(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:jn({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=Xv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;gl(n,o,i),gl(n.vueApp.config.globalProperties,o,i)},gl(n.vueApp,"$nuxt",n),gl(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(HR,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=ht;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function qR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function WR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function GR(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(l){const u=l.dependsOn?.filter(h=>e.some(f=>f._name===h)&&!n.has(h))??[];if(u.length>0)r.push([new Set(u),l]);else{const h=WR(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([f,p])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(p)))})))}).catch(f=>{if(!l.parallel&&!t.payload.error)throw f;i||=f});l.parallel?s.push(h):await h}}for(const l of e)qR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i)throw t.payload.error||i}function En(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[$R]:!0,_name:e})}function o_(t,e,n){const r=()=>e();return Zv(t._id).set(t),t.vueApp.runWithContext(r)}function KR(t){let e;return Vd()&&(e=os()?.appContext.app.$nuxt),e||=Zv(t).tryUse(),e||null}function ht(t){const e=KR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function qc(t){return ht().$config}function gl(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function YR(t,e){return{ctx:{table:t},matchAll:n=>t2(n,t)}}function e2(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,e2(s)])):new Map(Object.entries(t[n]));return e}function QR(t){return YR(e2(t))}function t2(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of a_(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of a_(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...t2(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function a_(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function eh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function tf(t,e,n=".",r){if(!eh(e))return tf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:eh(o)&&eh(s[i])?s[i]=tf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function XR(t){return(...e)=>e.reduce((n,r)=>tf(n,r,"",t),{})}const n2=XR();function JR(t,e){try{return e in t}catch{return!1}}class l_ extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:nf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=r2(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function ZR(t){if(typeof t=="string")return new l_(t);if(eS(t))return t;const e=new l_(t.message??t.statusMessage??"",{cause:t.cause||t});if(JR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=nf(t.statusCode,e.statusCode):t.status&&(e.statusCode=nf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;r2(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function eS(t){return t?.constructor?.__h3_error__===!0}const tS=/[^\u0009\u0020-\u007E]/g;function r2(t=""){return t.replace(tS,"")}function nf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const s2=Symbol("layout-meta"),Ls=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const cn=()=>ht()?.$router,Wc=()=>Vd()?_t(Ls,ht()._route):ht()._route;const nS=()=>{try{if(ht()._processingMiddleware)return!0}catch{return!1}return!1},P7=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?rS(t):cn().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=[];for(const[f,p]of Object.entries(u))p!==void 0&&h.push(`${f.toLowerCase()}=${p}`);return open(n,l,h.join(", ")),Promise.resolve()}const r=Ws(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&rR(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=nS();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:h}=Gv(t);return{path:l,...u&&{query:Hv(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=cn(),a=ht();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function rS(t){return $v(t.path||"",t.query||{})+(t.hash||"")}const i2="__nuxt_error",Gc=()=>PI(ht().payload,"error"),ys=t=>{const e=Ns(t);try{const n=Gc();ht().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},sS=async(t={})=>{const e=ht(),n=Gc();e.callHook("app:error:cleared",t),t.redirect&&await cn().replace(t.redirect),n.value=BR},o2=t=>!!t&&typeof t=="object"&&i2 in t,Ns=t=>{const e=ZR(t);return Object.defineProperty(e,i2,{value:!0,configurable:!1,writable:!1}),e};function iS(t){const e=aS(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const oS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function aS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=oS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const lS=-1,cS=-2,uS=-3,hS=-4,fS=-5,dS=-6;function pS(t,e){return mS(JSON.parse(t),e)}function mS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===lS)return;if(i===uS)return NaN;if(i===hS)return 1/0;if(i===fS)return-1/0;if(i===dS)return-0;if(o||typeof i!="number")throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e?.[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<a.length;m+=1)h.add(s(a[m]));break;case"Map":const f=new Map;r[i]=f;for(let m=1;m<a.length;m+=2)f.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],_=new m(s(a[1]));r[i]=a[2]!==void 0?_.subarray(a[2],a[3]):_;break}case"ArrayBuffer":{const m=a[1],_=iS(m);r[i]=_;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const m=l.slice(9);r[i]=Temporal[m].from(a[1]);break}case"URL":{const m=new URL(a[1]);r[i]=m;break}case"URLSearchParams":{const m=new URLSearchParams(a[1]);r[i]=m;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==cS&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const gS=new Set(["link","style","script","noscript"]),_S=new Set(["title","titleTemplate","script","style","noscript"]),c_=new Set(["base","meta","link","style","script","noscript"]),yS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),vS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ES=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),wS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),TS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const bS=["name","property","http-equiv"],IS=new Set(["viewport","description","keywords","robots"]);function a2(t){const e=t.split(":");return e.length?TS.has(e[1]):!1}function rf(t){const{props:e,tag:n}=t;if(vS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of bS)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=IS.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(_S.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function u_(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function lc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>lc(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=lc(s[o],e,o);return i}return s}function AS(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function l2(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=AS(n,r);return}if(ES.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t):t}function CS(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=l2({tag:t,props:{}},n);return r.key&&gS.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function RS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=lc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(CS(s,o))}),r.flat()}const sf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,h_={base:-10,title:10},SS={critical:-8,high:-1,low:2},f_={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},PS=/@import/,Ao=t=>t===""||t===!0;function kS(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=SS[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:f_;if(e.tag in h_)n=h_[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=f_.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Ao(e.props.async)?n=s.script.async:e.props.src&&!Ao(e.props.defer)&&!Ao(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:Ao(e.props.defer)&&e.props.src&&!Ao(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&PS.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function d_(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function NS(t={}){const e=Xv();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>d_(o,a),push(a,l){const u={...l||{}};delete u.head;const h=u._index??o._entryCount++,f={_i:h,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(h),e.callHook("entries:updated",o)},dispose(){r.delete(h)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(f.input=m,r.set(h,f),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const _={tags:RS(m.input,t.propResolvers||[]).map(T=>Object.assign(T,m.options)),entry:m};await e.callHook("entries:normalize",_),m._tags=_.tags.map((T,k)=>(T._w=kS(o,T),T._p=(m._i<<10)+k,T._d=rf(T),T))}}let l=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(sf).reduce((p,m)=>{const _=String(m._d||m._p);if(!p.has(_))return p.set(_,m);const T=p.get(_);if((m?.tagDuplicateStrategy||(wS.has(m.tag)?"merge":null)||(m.key&&m.key===T.key?"merge":null))==="merge"){const N={...T.props};Object.entries(m.props).forEach(([S,y])=>N[S]=S==="style"?new Map([...T.props.style||new Map,...y]):S==="class"?new Set([...T.props.class||new Set,...y]):y),p.set(_,{...m,props:N})}else m._p>>10===T._p>>10&&m.tag==="meta"&&a2(_)?(p.set(_,Object.assign([...Array.isArray(T)?T:[T],m],m)),l=!0):(m._w===T._w?m._p>T._p:m?._w<T?._w)&&p.set(_,m);return p},a.tagMap);const u=a.tagMap.get("title"),h=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,h){const p=h?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(h.tag="title",h.textContent=m)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(sf)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const p of a.tags){const{innerHTML:m,tag:_,props:T}=p;if(yS.has(_)&&!(Object.keys(T).length===0&&!p.innerHTML&&!p.textContent)&&!(_==="meta"&&!T.content&&!T["http-equiv"]&&!T.charset)){if(_==="script"&&m){if(T.type?.endsWith("json")){const k=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=k.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${_}`,"g"),`<\\/${_}`));p._d=rf(p)}f.push(p)}}return f},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>d_(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const th="%separator";function xS(t,e,n=!1){let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");r=t[e.substring(0,s)]?.[e.substring(s+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function _l(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(th);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===th||!i.includes(a))return a;const l=xS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t=t.split(th).map(a=>a.trim()).filter(a=>a!=="").join(n?` ${n} `:" ")),t}const p_=t=>t.includes(":key")?t:t.split(":").join(":key:"),OS={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=p_(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=p_(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(sf))}}},MS={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function of(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>of(n)));if(t?.constructor===Object){const n={};for(const r of Object.keys(t))n[r]=await of(t[r]);return n}return t}const DS={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(of(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},LS={meta:"content",link:"href",htmlAttrs:"lang"},VS=["innerHTML","textContent"],FS=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(r=>r.tag==="templateParams"&&r.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const r=e.get("templateParams")?.props||{},s=r.separator||"|";delete r.separator,r.pageTitle=_l(r.pageTitle||t._title||"",r,s);for(const i of n){if(i.processTemplateParams===!1)continue;const o=LS[i.tag];if(o&&typeof i.props[o]=="string")i.props[o]=_l(i.props[o],r,s);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const a of VS)typeof i[a]=="string"&&(i[a]=_l(i[a],r,s,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=_l(n.textContent,t._templateParams,t._separator))}}}),US=(t,e)=>st(e)?Vn(e):e,c2="usehead";function BS(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(c2,t)}}.install}function jS(){if(Vd()){const t=_t(c2);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function k7(t,e={}){const n=e.head||jS();return n.ssr?n.push(t||{},e):HS(n,t,e)}function HS(t,e,n={}){const r=tn(!1);let s;return CA(()=>{const o=r.value?{}:lc(e,US);s?s.patch(o):s=t.push(o,n)}),os()&&(xa(()=>{s.dispose()}),ev(()=>{r.value=!0}),Z1(()=>{r.value=!1})),s}const $S="modulepreload",zS=function(t,e){return new URL(t,e).href},m_={},Ti=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=u(n.map(h=>{if(h=zS(h,r),h in m_)return;m_[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(r)for(let _=o.length-1;_>=0;_--){const T=o[_];if(T.href===h&&(!f||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":$S,f||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,T)=>{m.addEventListener("load",_),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Nl,xl;function qS(){return Nl=$fetch(Wd(`builds/meta/${qc().app.buildId}.json`),{responseType:"json"}),Nl.then(t=>{xl=QR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Nl}function Kc(){return Nl||qS()}async function Gd(t){const e=typeof t=="string"?t:t.path;if(await Kc(),!xl)return console.error("[nuxt] Error creating app manifest matcher.",xl),{};try{return n2({},...xl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function g_(t,e={}){if(!await h2(t))return null;const r=await GS(t,e);return await u2(r)||null}const WS="_payload.json";async function GS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Ws(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=qc(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await h2(t)?i:r.app.baseURL;return zd(o,n.pathname,WS+(s?`?${s}`:""))}async function u2(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(f2));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function h2(t=Wc().path){const e=ht();return t=t.replace(/\/$/,""),(await Kc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Gd({path:t});return!!r.prerender&&!r.redirect})}let gs=null;async function KS(){if(gs)return gs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await f2(t.textContent||""),n=t.dataset.src?await u2(t.dataset.src):void 0;return gs={...e,...n,...window.__NUXT__},gs.config?.public&&(gs.config.public=is(gs.config.public)),gs}async function f2(t){return await pS(t,ht()._payloadRevivers)}function YS(t,e){ht()._payloadRevivers[t]=e}const QS=[["NuxtError",t=>Ns(t)],["EmptyShallowRef",t=>Ms(t==="_"?void 0:t==="0n"?BigInt(0):rc(t))],["EmptyRef",t=>tn(t==="_"?void 0:t==="0n"?BigInt(0):rc(t))],["ShallowRef",t=>Ms(t)],["ShallowReactive",t=>jn(t)],["Ref",t=>tn(t)],["Reactive",t=>is(t)]],XS=En({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of QS)YS(r,s);Object.assign(t.payload,([e,n]=wi(()=>t.runWithContext(KS)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Kd(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(_=>{m(_.map(T=>{const k=i.get(T._d)||0,N={tag:T,id:(k?`${T._d}:${k}`:T._d)||u_(T),shouldRender:!0};return T._d&&a2(T._d)&&i.set(T._d,k+1),N}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const _=n[m]?.children;for(const T of _){const k=T.tagName.toLowerCase();if(!c_.has(k))continue;const N=l2({tag:k,props:{}},{innerHTML:T.innerHTML,...T.getAttributeNames().reduce((S,y)=>(S[y]=T.getAttribute(y),S),{})||{}});if(N.key=T.getAttribute("data-hid")||void 0,N._d=rf(N)||u_(N),a.elMap.has(N._d)){let S=1,y=N._d;for(;a.elMap.has(y);)y=`${N._d}:${S++}`;a.elMap.set(y,T)}else a.elMap.set(N._d,T)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(m,_,T){const k=`${m}:${_}`;a.sideEffects[k]=T,delete a.pendingSideEffects[k]}function u({id:m,$el:_,tag:T}){const k=T.tag.endsWith("Attrs");a.elMap.set(m,_),k||(T.textContent&&T.textContent!==_.textContent&&(_.textContent=T.textContent),T.innerHTML&&T.innerHTML!==_.innerHTML&&(_.innerHTML=T.innerHTML),l(m,"el",()=>{_?.remove(),a.elMap.delete(m)}));for(const N in T.props){if(!Object.prototype.hasOwnProperty.call(T.props,N))continue;const S=T.props[N];if(N.startsWith("on")&&typeof S=="function"){const A=_?.dataset;if(A&&A[`${N}fired`]){const M=N.slice(0,-5);S.call(_,new Event(M.substring(2)))}_.getAttribute(`data-${N}`)!==""&&((T.tag==="bodyAttrs"?n.defaultView:_).addEventListener(N.substring(2),S.bind(_)),_.setAttribute(`data-${N}`,""));continue}const y=`attr:${N}`;if(N==="class"){if(!S)continue;for(const A of S)k&&l(m,`${y}:${A}`,()=>_.classList.remove(A)),!_.classList.contains(A)&&_.classList.add(A)}else if(N==="style"){if(!S)continue;for(const[A,M]of S)l(m,`${y}:${A}`,()=>{_.style.removeProperty(A)}),_.style.setProperty(A,M)}else S!==!1&&S!==null&&(_.getAttribute(N)!==S&&_.setAttribute(N,S===!0?"":String(S)),k&&l(m,y,()=>_.removeAttribute(N)))}}const h=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:_,shouldRender:T,id:k}=m;if(T){if(_.tag==="title"){n.title=_.textContent,l("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(k),m.$el?u(m):c_.has(_.tag)&&h.push(m)}}for(const m of h){const _=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),f[_]=f[_]||n.createDocumentFragment(),f[_].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function JS(t={}){const e=t.domOptions?.render||Kd;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return NS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function ZS(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function e4(t={}){const e=JS({domOptions:{render:ZS(()=>Kd(e),n=>setTimeout(n,0))},...t});return e.install=BS(e),e}const t4={disableDefaults:!0,disableCapoSorting:!1,plugins:[MS,DS,FS,OS]},n4=En({name:"nuxt:head",enforce:"pre",setup(t){const e=e4(t4);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Kd(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ii=typeof document<"u";function d2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function r4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&d2(t.default)}const Oe=Object.assign;function nh(t,e){const n={};for(const r in e){const s=e[r];n[r]=kn(s)?s.map(t):t(s)}return n}const Qo=()=>{},kn=Array.isArray;function __(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const p2=/#/g,s4=/&/g,i4=/\//g,o4=/=/g,a4=/\?/g,m2=/\+/g,l4=/%5B/g,c4=/%5D/g,g2=/%5E/g,u4=/%60/g,_2=/%7B/g,h4=/%7C/g,y2=/%7D/g,f4=/%20/g;function Yd(t){return t==null?"":encodeURI(""+t).replace(h4,"|").replace(l4,"[").replace(c4,"]")}function d4(t){return Yd(t).replace(_2,"{").replace(y2,"}").replace(g2,"^")}function af(t){return Yd(t).replace(m2,"%2B").replace(f4,"+").replace(p2,"%23").replace(s4,"%26").replace(u4,"`").replace(_2,"{").replace(y2,"}").replace(g2,"^")}function p4(t){return af(t).replace(o4,"%3D")}function m4(t){return Yd(t).replace(p2,"%23").replace(a4,"%3F")}function g4(t){return m4(t).replace(i4,"%2F")}function pa(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const _4=/\/$/,y4=t=>t.replace(_4,"");function rh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,a>0?a:e.length),s=t(i)),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=T4(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:pa(o)}}function v4(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function y_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function E4(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Di(e.matched[r],n.matched[s])&&v2(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v2(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w4(t[n],e[n]))return!1;return!0}function w4(t,e){return kn(t)?v_(t,e):kn(e)?v_(e,t):t===e}function v_(t,e){return kn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function T4(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lf=(function(t){return t.pop="pop",t.push="push",t})({}),sh=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function b4(t){if(!t)if(ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),y4(t)}const I4=/^[^#]+#/;function A4(t,e){return t.replace(I4,"#")+e}function C4(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yc=()=>({left:window.scrollX,top:window.scrollY});function R4(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=C4(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function E_(t,e){return(history.state?history.state.position-e:-1)+t}const cf=new Map;function S4(t,e){cf.set(t,e)}function P4(t){const e=cf.get(t);return cf.delete(t),e}function k4(t){return typeof t=="string"||t&&typeof t=="object"}function E2(t){return typeof t=="string"||typeof t=="symbol"}let tt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const w2=Symbol("");tt.MATCHER_NOT_FOUND+"",tt.NAVIGATION_GUARD_REDIRECT+"",tt.NAVIGATION_ABORTED+"",tt.NAVIGATION_CANCELLED+"",tt.NAVIGATION_DUPLICATED+"";function Li(t,e){return Oe(new Error,{type:t,[w2]:!0},e)}function or(t,e){return t instanceof Error&&w2 in t&&(e==null||!!(t.type&e))}const N4=["params","query","hash"];function x4(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of N4)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function O4(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(m2," "),i=s.indexOf("="),o=pa(i<0?s:s.slice(0,i)),a=i<0?null:pa(s.slice(i+1));if(o in e){let l=e[o];kn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function w_(t){let e="";for(let n in t){const r=t[n];if(n=p4(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(kn(r)?r.map(s=>s&&af(s)):[r&&af(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function M4(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=kn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const D4=Symbol(""),T_=Symbol(""),Qd=Symbol(""),Xd=Symbol(""),uf=Symbol("");function Co(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Li(tt.NAVIGATION_ABORTED,{from:n,to:e})):p instanceof Error?l(p):k4(p)?l(Li(tt.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function ih(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(d2(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Vr(u,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=r4(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Vr(p,n,r,o,a,s)()}))}}return i}function L4(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Di(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Di(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let V4=()=>location.protocol+"//"+location.host;function T2(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),y_(a,"")}return y_(n,t)+r+s}function F4(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=T2(t,location),_=n.value,T=e.value;let k=0;if(p){if(n.value=m,e.value=p,o&&o===_){o=null;return}k=T?p.position-T.position:0}else r(m);s.forEach(N=>{N(n.value,_,{delta:k,type:lf.pop,direction:k?k>0?sh.forward:sh.back:sh.unknown})})};function l(){o=n.value}function u(p){s.push(p);const m=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(m),m}function h(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Oe({},p.state,{scroll:Yc()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:f}}function b_(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yc():null}}function U4(t){const{history:e,location:n}=window,r={value:T2(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:V4()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){i(l,Oe({},e.state,b_(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Yc()});i(h.current,h,!0),i(l,Oe({},b_(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function B4(t){t=b4(t);const e=U4(t),n=F4(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:A4.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let bs=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var ct=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(ct||{});const j4={type:bs.Static,value:""},H4=/[a-zA-Z0-9_]/;function $4(t){if(!t)return[[]];if(t==="/")return[[j4]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ct.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===ct.Static?i.push({type:bs.Static,value:u}):n===ct.Param||n===ct.ParamRegExp||n===ct.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:bs.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==ct.ParamRegExp){r=n,n=ct.EscapeNext;continue}switch(n){case ct.Static:l==="/"?(u&&f(),o()):l===":"?(f(),n=ct.Param):p();break;case ct.EscapeNext:p(),n=r;break;case ct.Param:l==="("?n=ct.ParamRegExp:H4.test(l)?p():(f(),n=ct.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ct.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=ct.ParamRegExpEnd:h+=l;break;case ct.ParamRegExpEnd:f(),n=ct.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===ct.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const I_="[^/]+?",z4={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Qt||{});const q4=/[.+*?^${}()[\]/\\]/g;function W4(t,e){const n=Oe({},z4,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[Qt.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=Qt.Segment+(n.sensitive?Qt.BonusCaseSensitive:0);if(p.type===bs.Static)f||(s+="/"),s+=p.value.replace(q4,"\\$&"),m+=Qt.Static;else if(p.type===bs.Param){const{value:_,repeatable:T,optional:k,regexp:N}=p;i.push({name:_,repeatable:T,optional:k});const S=N||I_;if(S!==I_){m+=Qt.BonusCustomRegExp;try{`${S}`}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+A.message)}}let y=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(y=k&&u.length<2?`(?:/${y})`:"/"+y),k&&(y+="?"),s+=y,m+=Qt.Dynamic,k&&(m+=Qt.BonusOptional),T&&(m+=Qt.BonusRepeatable),S===".*"&&(m+=Qt.BonusWildcard)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Qt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",_=i[p-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===bs.Static)h+=m.value;else if(m.type===bs.Param){const{value:_,repeatable:T,optional:k}=m,N=_ in u?u[_]:"";if(kn(N)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=kn(N)?N.join("/"):N;if(!S)if(k)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function G4(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Qt.Static+Qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function b2(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=G4(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(A_(r))return 1;if(A_(s))return-1}return s.length-r.length}function A_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const K4={strict:!1,end:!0,sensitive:!1};function Y4(t,e,n){const r=W4($4(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Q4(t,e){const n=[],r=new Map;e=__(K4,e);function s(f){return r.get(f)}function i(f,p,m){const _=!m,T=R_(f);T.aliasOf=m&&m.record;const k=__(e,f),N=[T];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of A)N.push(R_(Oe({},T,{components:m?m.record.components:T.components,path:M,aliasOf:m?m.record:T})))}let S,y;for(const A of N){const{path:M}=A;if(p&&M[0]!=="/"){const V=p.record.path,b=V[V.length-1]==="/"?"":"/";A.path=p.record.path+(M&&b+M)}if(S=Y4(A,p,k),m?m.alias.push(S):(y=y||S,y!==S&&y.alias.push(S),_&&f.name&&!S_(S)&&o(f.name)),I2(S)&&l(S),T.children){const V=T.children;for(let b=0;b<V.length;b++)i(V[b],S,m&&m.children[b])}m=m||S}return y?()=>{o(y)}:Qo}function o(f){if(E2(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=Z4(f,n);n.splice(p,0,f),f.record.name&&!S_(f)&&r.set(f.record.name,f)}function u(f,p){let m,_={},T,k;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Li(tt.MATCHER_NOT_FOUND,{location:f});k=m.record.name,_=Oe(C_(p.params,m.keys.filter(y=>!y.optional).concat(m.parent?m.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&C_(f.params,m.keys.map(y=>y.name))),T=m.stringify(_)}else if(f.path!=null)T=f.path,m=n.find(y=>y.re.test(T)),m&&(_=m.parse(T),k=m.record.name);else{if(m=p.name?r.get(p.name):n.find(y=>y.re.test(p.path)),!m)throw Li(tt.MATCHER_NOT_FOUND,{location:f,currentLocation:p});k=m.record.name,_=Oe({},p.params,f.params),T=m.stringify(_)}const N=[];let S=m;for(;S;)N.unshift(S.record),S=S.parent;return{name:k,path:T,params:_,matched:N,meta:J4(N)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function C_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function R_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:X4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function X4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function S_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function J4(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Z4(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;b2(t,e[i])<0?r=i:n=i+1}const s=eP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function eP(t){let e=t;for(;e=e.parent;)if(I2(e)&&b2(t,e)===0)return e}function I2({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function P_(t){const e=_t(Qd),n=_t(Xd),r=mt(()=>{const l=We(t.to);return e.resolve(l)}),s=mt(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Di.bind(null,h));if(p>-1)return p;const m=k_(l[u-2]);return u>1&&k_(h)===m&&f[f.length-1].path!==m?f.findIndex(Di.bind(null,l[u-2])):p}),i=mt(()=>s.value>-1&&iP(n.params,r.value.params)),o=mt(()=>s.value>-1&&s.value===n.matched.length-1&&v2(n.params,r.value.params));function a(l={}){if(sP(l)){const u=e[We(t.replace)?"replace":"push"](We(t.to)).catch(Qo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function tP(t){return t.length===1?t[0]:t}const nP=Er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:P_,setup(t,{slots:e}){const n=is(P_(t)),{options:r}=_t(Qd),s=mt(()=>({[N_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[N_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&tP(e.default(n));return t.custom?i:Pt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rP=nP;function sP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!kn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function k_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const N_=(t,e,n)=>t??e??n,oP=Er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_t(uf),s=mt(()=>t.route||r.value),i=_t(T_,0),o=mt(()=>{let u=We(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=mt(()=>s.value.matched[o.value]);zr(T_,mt(()=>o.value+1)),zr(D4,a),zr(uf,s);const l=tn();return qr(()=>[l.value,a.value,t.name],([u,h,f],[p,m,_])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Di(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return x_(n.default,{Component:p,route:u});const m=f.props[h],_=m?m===!0?u.params:typeof m=="function"?m(u):m:null,k=Pt(p,Oe({},_,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return x_(n.default,{Component:k,route:u})||k}}});function x_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const A2=oP;function aP(t){const e=Q4(t.routes,t),n=t.parseQuery||O4,r=t.stringifyQuery||w_,s=t.history,i=Co(),o=Co(),a=Co(),l=Ms(pn);let u=pn;ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=nh.bind(null,B=>""+B),f=nh.bind(null,g4),p=nh.bind(null,pa);function m(B,ee){let J,oe;return E2(B)?(J=e.getRecordMatcher(B),oe=ee):oe=B,e.addRoute(oe,J)}function _(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function T(){return e.getRoutes().map(B=>B.record)}function k(B){return!!e.getRecordMatcher(B)}function N(B,ee){if(ee=Oe({},ee||l.value),typeof B=="string"){const O=rh(n,B,ee.path),L=e.resolve({path:O.path},ee),j=s.createHref(O.fullPath);return Oe(O,L,{params:p(L.params),hash:pa(O.hash),redirectedFrom:void 0,href:j})}let J;if(B.path!=null)J=Oe({},B,{path:rh(n,B.path,ee.path).path});else{const O=Oe({},B.params);for(const L in O)O[L]==null&&delete O[L];J=Oe({},B,{params:f(O)}),ee.params=f(ee.params)}const oe=e.resolve(J,ee),_e=B.hash||"";oe.params=h(p(oe.params));const Fe=v4(r,Oe({},B,{hash:d4(_e),path:oe.path})),R=s.createHref(Fe);return Oe({fullPath:Fe,hash:_e,query:r===w_?M4(B.query):B.query||{}},oe,{redirectedFrom:void 0,href:R})}function S(B){return typeof B=="string"?rh(n,B,l.value.path):Oe({},B)}function y(B,ee){if(u!==B)return Li(tt.NAVIGATION_CANCELLED,{from:ee,to:B})}function A(B){return b(B)}function M(B){return A(Oe(S(B),{replace:!0}))}function V(B,ee){const J=B.matched[B.matched.length-1];if(J&&J.redirect){const{redirect:oe}=J;let _e=typeof oe=="function"?oe(B,ee):oe;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=S(_e):{path:_e},_e.params={}),Oe({query:B.query,hash:B.hash,params:_e.path!=null?{}:B.params},_e)}}function b(B,ee){const J=u=N(B),oe=l.value,_e=B.state,Fe=B.force,R=B.replace===!0,O=V(J,oe);if(O)return b(Oe(S(O),{state:typeof O=="object"?Oe({},_e,O.state):_e,force:Fe,replace:R}),ee||J);const L=J;L.redirectedFrom=ee;let j;return!Fe&&E4(r,oe,J)&&(j=Li(tt.NAVIGATION_DUPLICATED,{to:L,from:oe}),hn(oe,oe,!0,!1)),(j?Promise.resolve(j):C(L,oe)).catch(U=>or(U)?or(U,tt.NAVIGATION_GUARD_REDIRECT)?U:Wt(U):te(U,L,oe)).then(U=>{if(U){if(or(U,tt.NAVIGATION_GUARD_REDIRECT))return b(Oe({replace:R},S(U.to),{state:typeof U.to=="object"?Oe({},_e,U.to.state):_e,force:Fe}),ee||L)}else U=P(L,oe,!0,R,_e);return x(L,oe,U),U})}function E(B,ee){const J=y(B,ee);return J?Promise.reject(J):Promise.resolve()}function w(B){const ee=Ar.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function C(B,ee){let J;const[oe,_e,Fe]=L4(B,ee);J=ih(oe.reverse(),"beforeRouteLeave",B,ee);for(const O of oe)O.leaveGuards.forEach(L=>{J.push(Vr(L,B,ee))});const R=E.bind(null,B,ee);return J.push(R),Jt(J).then(()=>{J=[];for(const O of i.list())J.push(Vr(O,B,ee));return J.push(R),Jt(J)}).then(()=>{J=ih(_e,"beforeRouteUpdate",B,ee);for(const O of _e)O.updateGuards.forEach(L=>{J.push(Vr(L,B,ee))});return J.push(R),Jt(J)}).then(()=>{J=[];for(const O of Fe)if(O.beforeEnter)if(kn(O.beforeEnter))for(const L of O.beforeEnter)J.push(Vr(L,B,ee));else J.push(Vr(O.beforeEnter,B,ee));return J.push(R),Jt(J)}).then(()=>(B.matched.forEach(O=>O.enterCallbacks={}),J=ih(Fe,"beforeRouteEnter",B,ee,w),J.push(R),Jt(J))).then(()=>{J=[];for(const O of o.list())J.push(Vr(O,B,ee));return J.push(R),Jt(J)}).catch(O=>or(O,tt.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function x(B,ee,J){a.list().forEach(oe=>w(()=>oe(B,ee,J)))}function P(B,ee,J,oe,_e){const Fe=y(B,ee);if(Fe)return Fe;const R=ee===pn,O=ii?history.state:{};J&&(oe||R?s.replace(B.fullPath,Oe({scroll:R&&O&&O.scroll},_e)):s.push(B.fullPath,_e)),l.value=B,hn(B,ee,J,R),Wt()}let I;function pe(){I||(I=s.listen((B,ee,J)=>{if(!nn.listening)return;const oe=N(B),_e=V(oe,nn.currentRoute.value);if(_e){b(Oe(_e,{replace:!0,force:!0}),oe).catch(Qo);return}u=oe;const Fe=l.value;ii&&S4(E_(Fe.fullPath,J.delta),Yc()),C(oe,Fe).catch(R=>or(R,tt.NAVIGATION_ABORTED|tt.NAVIGATION_CANCELLED)?R:or(R,tt.NAVIGATION_GUARD_REDIRECT)?(b(Oe(S(R.to),{force:!0}),oe).then(O=>{or(O,tt.NAVIGATION_ABORTED|tt.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===lf.pop&&s.go(-1,!1)}).catch(Qo),Promise.reject()):(J.delta&&s.go(-J.delta,!1),te(R,oe,Fe))).then(R=>{R=R||P(oe,Fe,!1),R&&(J.delta&&!or(R,tt.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===lf.pop&&or(R,tt.NAVIGATION_ABORTED|tt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),x(oe,Fe,R)}).catch(Qo)}))}let ve=Co(),re=Co(),me;function te(B,ee,J){Wt(B);const oe=re.list();return oe.length?oe.forEach(_e=>_e(B,ee,J)):console.error(B),Promise.reject(B)}function Le(){return me&&l.value!==pn?Promise.resolve():new Promise((B,ee)=>{ve.add([B,ee])})}function Wt(B){return me||(me=!B,pe(),ve.list().forEach(([ee,J])=>B?J(B):ee()),ve.reset()),B}function hn(B,ee,J,oe){const{scrollBehavior:_e}=t;if(!ii||!_e)return Promise.resolve();const Fe=!J&&P4(E_(B.fullPath,0))||(oe||!J)&&history.state&&history.state.scroll||null;return Ni().then(()=>_e(B,ee,Fe)).then(R=>R&&R4(R)).catch(R=>te(R,B,ee))}const Qe=B=>s.go(B);let Xe;const Ar=new Set,nn={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:T,resolve:N,options:t,push:A,replace:M,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:Le,install(B){B.component("RouterLink",rP),B.component("RouterView",A2),B.config.globalProperties.$router=nn,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),ii&&!Xe&&l.value===pn&&(Xe=!0,A(s.location).catch(oe=>{}));const ee={};for(const oe in pn)Object.defineProperty(ee,oe,{get:()=>l.value[oe],enumerable:!0});B.provide(Qd,nn),B.provide(Xd,jn(ee)),B.provide(uf,l);const J=B.unmount;Ar.add(B),B.unmount=function(){Ar.delete(B),Ar.size<1&&(u=pn,I&&I(),I=null,l.value=pn,Xe=!1,me=!1),J()}}};function Jt(B){return B.reduce((ee,J)=>ee.then(()=>w(J)),Promise.resolve())}return nn}function C2(t){return _t(Xd)}const lP=/(:\w+)\([^)]+\)/g,cP=/(:\w+)[?+*]/g,uP=/:\w+/g,hP=(t,e)=>e.path.replace(lP,"$1").replace(cP,"$1").replace(uP,n=>t.params[n.slice(1)]?.toString()||""),hf=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&hP(t.route,n));return typeof r=="function"?r(t.route):r},fP=(t,e)=>({default:()=>t?Pt(ZI,t===!0?{}:t,e):e});function Jd(t){return Array.isArray(t)?t:[t]}const oh=[{name:"index",path:"/",component:()=>Ti(()=>import("./DIcisieV.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"code-of-conduct",path:"/code-of-conduct",component:()=>Ti(()=>import("./DKnZkw71.js"),__vite__mapDeps([4,5,6]),import.meta.url)},{name:"sponsors-signup",path:"/sponsors-signup",component:()=>Ti(()=>import("./BIr29JCl.js"),__vite__mapDeps([7,5,2]),import.meta.url)}],R2=(t,e)=>({default:()=>t?Pt(iC,t===!0?{}:t,e):e.default?.()}),dP=/(:\w+)\([^)]+\)/g,pP=/(:\w+)[?+*]/g,mP=/:\w+/g;function O_(t){const e=t?.meta.key??t.path.replace(dP,"$1").replace(pP,"$1").replace(mP,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function gP(t,e){return t===e||e===pn?!1:O_(t)!==O_(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}const _P={scrollBehavior(t,e,n){const r=ht(),s=cn().options?.scrollBehaviorType??"auto";if(t.path.replace(/\/$/,"")===e.path.replace(/\/$/,""))return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:S2(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===pn){a(M_(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(M_(t,e,n,s)))})})}};function S2(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function M_(t,e,n,r){if(n)return n;const s=gP(t,e);return t.hash?{el:t.hash,top:S2(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const yP={hashMode:!1,scrollBehaviorType:"auto"},Nr={...yP,..._P},vP=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=wi(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=Ns({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},EP=async t=>{let e,n;const r=([e,n]=wi(()=>Gd({path:t.path})),e=await e,n(),e);if(r.redirect)return Ws(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},wP=[vP,EP],ff={};function TP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Jg(h,"")}const a=Jg(r,t),l=!n||aR(a,n)?a:n;return l+(l.includes("?")?"":s)+i}const bP=En({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=qc().app.baseURL;const s=Nr.history?.(r)??B4(r),i=Nr.routes?([e,n]=wi(()=>Nr.routes(oh)),e=await e,n(),e??oh):oh;let o;const a=aP({...Nr,scrollBehavior:(k,N,S)=>{if(N===pn){o=S;return}if(Nr.scrollBehavior){if(a.options.scrollBehavior=Nr.scrollBehavior,"scrollRestoration"in window.history){const y=a.beforeEach(()=>{y(),window.history.scrollRestoration="manual"})}return Nr.scrollBehavior(k,pn,o||S)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Ms(a.currentRoute.value);a.afterEach((k,N)=>{l.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=TP(r,window.location,t.payload.path),h=Ms(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((k,N)=>{k.matched[k.matched.length-1]?.components?.default===N.matched[N.matched.length-1]?.components?.default&&f()});const p={};for(const k in h.value)Object.defineProperty(p,k,{get:()=>h.value[k],enumerable:!0});t._route=jn(p),t._middleware||={global:[],named:{}};const m=Gc();a.afterEach(async(k,N,S)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(sS),S&&await t.callHook("page:loading:end")});try{[e,n]=wi(()=>a.isReady()),await e,n()}catch(k){[e,n]=wi(()=>t.runWithContext(()=>ys(k))),await e,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const T=t.payload.state._layout;return a.beforeEach(async(k,N)=>{await t.callHook("page:loading:start"),k.meta=is(k.meta),t.isHydrating&&T&&!pr(k.meta.layout)&&(k.meta.layout=T),t._processingMiddleware=!0;{const S=new Set([...wP,...t._middleware.global]);for(const y of k.matched){const A=y.meta.middleware;if(A)for(const M of Jd(A))S.add(M)}{const y=await t.runWithContext(()=>Gd({path:k.path}));if(y.appMiddleware)for(const A in y.appMiddleware)y.appMiddleware[A]?S.add(A):S.delete(A)}for(const y of S){const A=typeof y=="string"?t._middleware.named[y]||await ff[y]?.().then(M=>M.default||M):y;if(!A)throw new Error(`Unknown route middleware: '${y}'.`);try{const M=await t.runWithContext(()=>A(k,N));if(!t.payload.serverRendered&&t.isHydrating&&(M===!1||M instanceof Error)){const V=M||Ns({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ys(V)),!1}if(M===!0)continue;if(M===!1)return M;if(M)return o2(M)&&M.fatal&&await t.runWithContext(()=>ys(M)),M}catch(M){const V=Ns(M);return V.fatal&&await t.runWithContext(()=>ys(V)),V}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(k=>{if(k.matched.length===0)return t.runWithContext(()=>ys(Ns({statusCode:404,fatal:!1,statusMessage:`Page not found: ${k.fullPath}`,data:{path:k.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=Nr.scrollBehavior}catch(k){await t.runWithContext(()=>ys(k))}}),{provide:{router:a}}}}),IP=En({name:"nuxt:debug:hooks",enforce:"pre",setup(t){OR(t.hooks,{tag:"nuxt-app"})}}),D_=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),N7=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Zd=t=>{const e=ht();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{D_(()=>t())}):D_(()=>t())},AP=En({name:"nuxt:payload",setup(t){const e=new Set;cn().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await g_(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Zd(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await g_(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Kc,1e3)})}}),CP=En(()=>{const t=cn();Zd(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),RP=En(t=>{let e;async function n(){let r;try{r=await Kc()}catch(s){const i=s;if(!("status"in i&&(i.status===404||i.status===403)))throw i}e&&clearTimeout(e),e=setTimeout(n,i_);try{const s=await $fetch(Wd("builds/latest.json")+`?${Date.now()}`);s.id!==r?.id&&(t.hooks.callHook("app:manifest:update",s),e&&clearTimeout(e))}catch{}}Zd(()=>{e=setTimeout(n,i_)})});function SP(t={}){const e=t.path||window.location.pathname;let n={};try{n=rc(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ht().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const PP=En({name:"nuxt:chunk-reload",setup(t){const e=cn(),n=qc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=zd(n.app.baseURL,i.fullPath);SP({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),kP=En({name:"nuxt:global-components"}),Fr={default:Hh(()=>Ti(()=>import("./uZNKfEBj.js"),__vite__mapDeps([8,1,9]),import.meta.url).then(t=>t.default||t))};function NP(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function xP(t,e=cn()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>xP(t,e));e._routePreloaded.add(n);for(const i of r){const o=i.components?.default;if(typeof o!="function")continue;const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const OP=En({name:"nuxt:prefetch",setup(t){const e=cn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof Fr[r]=="function"&&await Fr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Ws(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Jd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof ff[o]=="function"&&ff[o]();typeof s=="string"&&s in Fr&&NP(Fr[s])})}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function MP(t,e,n){return(e=LP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L_(Object(n),!0).forEach(function(r){MP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function DP(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LP(t){var e=DP(t,"string");return typeof e=="symbol"?e:e+""}const V_=()=>{};let ep={},P2={},k2=null,N2={mark:V_,measure:V_};try{typeof window<"u"&&(ep=window),typeof document<"u"&&(P2=document),typeof MutationObserver<"u"&&(k2=MutationObserver),typeof performance<"u"&&(N2=performance)}catch{}const{userAgent:F_=""}=ep.navigator||{},Xr=ep,Ke=P2,U_=k2,yl=N2;Xr.document;const Tr=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function",x2=~F_.indexOf("MSIE")||~F_.indexOf("Trident/");var VP=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,FP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,O2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},UP={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},M2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],qt="classic",Qc="duotone",BP="sharp",jP="sharp-duotone",D2=[qt,Qc,BP,jP],HP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$P={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},zP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),qP={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},WP=["fak","fa-kit","fakd","fa-kit-duotone"],B_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},GP=["kit"],KP={kit:{"fa-kit":"fak"}},YP=["fak","fakd"],QP={kit:{fak:"fa-kit"}},j_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},XP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],JP=["fak","fa-kit","fakd","fa-kit-duotone"],ZP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},e6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},t6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},df={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},n6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...XP,...n6],r6=["solid","regular","light","thin","duotone","brands"],L2=[1,2,3,4,5,6,7,8,9,10],s6=L2.concat([11,12,13,14,15,16,17,18,19,20]),i6=[...Object.keys(t6),...r6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vl.GROUP,vl.SWAP_OPACITY,vl.PRIMARY,vl.SECONDARY].concat(L2.map(t=>"".concat(t,"x"))).concat(s6.map(t=>"w-".concat(t))),o6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const gr="___FONT_AWESOME___",mf=16,V2="fa",F2="svg-inline--fa",Vs="data-fa-i2svg",gf="data-fa-pseudo-element",a6="data-fa-pseudo-element-pending",tp="data-prefix",np="data-icon",H_="fontawesome-i2svg",l6="async",c6=["HTML","HEAD","STYLE","SCRIPT"],U2=(()=>{try{return!0}catch{return!1}})();function Ma(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qt]}})}const B2=q({},O2);B2[qt]=q(q(q(q({},{"fa-duotone":"duotone"}),O2[qt]),B_.kit),B_["kit-duotone"]);const u6=Ma(B2),_f=q({},qP);_f[qt]=q(q(q(q({},{duotone:"fad"}),_f[qt]),j_.kit),j_["kit-duotone"]);const $_=Ma(_f),yf=q({},df);yf[qt]=q(q({},yf[qt]),QP.kit);const rp=Ma(yf),vf=q({},e6);vf[qt]=q(q({},vf[qt]),KP.kit);Ma(vf);const h6=VP,j2="fa-layers-text",f6=FP,d6=q({},HP);Ma(d6);const p6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ah=UP,m6=[...GP,...i6],Xo=Xr.FontAwesomeConfig||{};function g6(t){var e=Ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ke&&typeof Ke.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=_6(g6(n));s!=null&&(Xo[r]=s)});const H2={styleDefault:"solid",familyDefault:qt,cssPrefix:V2,replacementClass:F2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xo.familyPrefix&&(Xo.cssPrefix=Xo.familyPrefix);const Vi=q(q({},H2),Xo);Vi.autoReplaceSvg||(Vi.observeMutations=!1);const le={};Object.keys(H2).forEach(t=>{Object.defineProperty(le,t,{enumerable:!0,set:function(e){Vi[t]=e,Jo.forEach(n=>n(le))},get:function(){return Vi[t]}})});Object.defineProperty(le,"familyPrefix",{enumerable:!0,set:function(t){Vi.cssPrefix=t,Jo.forEach(e=>e(le))},get:function(){return Vi.cssPrefix}});Xr.FontAwesomeConfig=le;const Jo=[];function y6(t){return Jo.push(t),()=>{Jo.splice(Jo.indexOf(t),1)}}const xr=mf,Hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v6(t){if(!t||!Tr)return;const e=Ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ke.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ke.head.insertBefore(e,r),t}const E6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ma(){let t=12,e="";for(;t-- >0;)e+=E6[Math.random()*62|0];return e}function Ji(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sp(t){return t.classList?Ji(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function $2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w6(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat($2(t[n]),'" '),"").trim()}function Xc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ip(t){return t.size!==Hn.size||t.x!==Hn.x||t.y!==Hn.y||t.rotate!==Hn.rotate||t.flipX||t.flipY}function T6(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function b6(t){let{transform:e,width:n=mf,height:r=mf,startCentered:s=!1}=t,i="";return s&&x2?i+="translate(".concat(e.x/xr-n/2,"em, ").concat(e.y/xr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/xr,"em), calc(-50% + ").concat(e.y/xr,"em)) "):i+="translate(".concat(e.x/xr,"em, ").concat(e.y/xr,"em) "),i+="scale(".concat(e.size/xr*(e.flipX?-1:1),", ").concat(e.size/xr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var I6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function z2(){const t=V2,e=F2,n=le.cssPrefix,r=le.replacementClass;let s=I6;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let z_=!1;function lh(){le.autoAddCss&&!z_&&(v6(z2()),z_=!0)}var A6={mixout(){return{dom:{css:z2,insertCss:lh}}},hooks(){return{beforeDOMElementCreation(){lh()},beforeI2svg(){lh()}}}};const _r=Xr||{};_r[gr]||(_r[gr]={});_r[gr].styles||(_r[gr].styles={});_r[gr].hooks||(_r[gr].hooks={});_r[gr].shims||(_r[gr].shims=[]);var $n=_r[gr];const q2=[],W2=function(){Ke.removeEventListener("DOMContentLoaded",W2),cc=1,q2.map(t=>t())};let cc=!1;Tr&&(cc=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),cc||Ke.addEventListener("DOMContentLoaded",W2));function C6(t){Tr&&(cc?setTimeout(t,0):q2.push(t))}function Da(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?$2(t):"<".concat(e," ").concat(w6(n),">").concat(r.map(Da).join(""),"</").concat(e,">")}function q_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ch=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function R6(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ef(t){const e=R6(t);return e.length===1?e[0].toString(16):null}function S6(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function W_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function wf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=W_(e);typeof $n.hooks.addPack=="function"&&!r?$n.hooks.addPack(t,W_(e)):$n.styles[t]=q(q({},$n.styles[t]||{}),s),t==="fas"&&wf("fa",e)}const{styles:ga,shims:P6}=$n,G2=Object.keys(rp),k6=G2.reduce((t,e)=>(t[e]=Object.keys(rp[e]),t),{});let op=null,K2={},Y2={},Q2={},X2={},J2={};function N6(t){return~m6.indexOf(t)}function x6(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!N6(s)?s:null}const Z2=()=>{const t=r=>ch(ga,(s,i,o)=>(s[o]=ch(i,r,{}),s),{});K2=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Y2=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),J2=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ga||le.autoFetchSvg,n=ch(P6,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Q2=n.names,X2=n.unicodes,op=Jc(le.styleDefault,{family:le.familyDefault})};y6(t=>{op=Jc(t.styleDefault,{family:le.familyDefault})});Z2();function ap(t,e){return(K2[t]||{})[e]}function O6(t,e){return(Y2[t]||{})[e]}function Is(t,e){return(J2[t]||{})[e]}function eE(t){return Q2[t]||{prefix:null,iconName:null}}function M6(t){const e=X2[t],n=ap("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jr(){return op}const tE=()=>({prefix:null,iconName:null,rest:[]});function D6(t){let e=qt;const n=G2.reduce((r,s)=>(r[s]="".concat(le.cssPrefix,"-").concat(s),r),{});return D2.forEach(r=>{(t.includes(n[r])||t.some(s=>k6[r].includes(s)))&&(e=r)}),e}function Jc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qt}=e,r=u6[n][t];if(n===Qc&&!t)return"fad";const s=$_[n][t]||$_[n][r],i=t in $n.styles?t:null;return s||i||null}function L6(t){let e=[],n=null;return t.forEach(r=>{const s=x6(le.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function G_(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Zc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=pf.concat(JP),i=G_(t.filter(f=>s.includes(f))),o=G_(t.filter(f=>!pf.includes(f))),a=i.filter(f=>(r=f,!M2.includes(f))),[l=null]=a,u=D6(i),h=q(q({},L6(o)),{},{prefix:Jc(l,{family:u})});return q(q(q({},h),B6({values:t,family:u,styles:ga,config:le,canonical:h,givenPrefix:r})),V6(n,r,h))}function V6(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?eE(s):{},o=Is(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ga.far&&ga.fas&&!le.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const F6=D2.filter(t=>t!==qt||t!==Qc),U6=Object.keys(df).filter(t=>t!==qt).map(t=>Object.keys(df[t])).flat();function B6(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Qc,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&F6.includes(n)&&(Object.keys(i).find(p=>U6.includes(p))||o.autoFetchSvg)){const p=zP.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Is(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Jr()||"fas"),r}class j6{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=q(q({},this.definitions[i]||{}),s[i]),wf(i,s[i]);const o=rp[qt][i];o&&wf(o,s[i]),Z2()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let K_=[],ci={};const bi={},H6=Object.keys(bi);function $6(t,e){let{mixoutsTo:n}=e;return K_=t,ci={},Object.keys(bi).forEach(r=>{H6.indexOf(r)===-1&&delete bi[r]}),K_.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ci[o]||(ci[o]=[]),ci[o].push(i[o])})}r.provides&&r.provides(bi)}),n}function Tf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ci[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Fs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ci[t]||[]).forEach(i=>{i.apply(null,n)})}function Zr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return bi[t]?bi[t].apply(null,e):void 0}function bf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Jr();if(e)return e=Is(n,e)||e,q_(nE.definitions,n,e)||q_($n.styles,n,e)}const nE=new j6,z6=()=>{le.autoReplaceSvg=!1,le.observeMutations=!1,Fs("noAuto")},q6={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tr?(Fs("beforeI2svg",t),Zr("pseudoElements2svg",t),Zr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;le.autoReplaceSvg===!1&&(le.autoReplaceSvg=!0),le.observeMutations=!0,C6(()=>{G6({autoReplaceSvgRoot:e}),Fs("watch",t)})}},W6={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Is(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Jc(t[0]);return{prefix:n,iconName:Is(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(le.cssPrefix,"-"))>-1||t.match(h6))){const e=Zc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Jr(),iconName:Is(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Jr();return{prefix:e,iconName:Is(e,t)||t}}}},un={noAuto:z6,config:le,dom:q6,parse:W6,library:nE,findIconDefinition:bf,toHtml:Da},G6=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ke}=t;(Object.keys($n.styles).length>0||le.autoFetchSvg)&&Tr&&le.autoReplaceSvg&&un.dom.i2svg({node:e})};function eu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Da(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Tr)return;const n=Ke.createElement("div");return n.innerHTML=t.html,n.children}}),t}function K6(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(ip(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=Xc(q(q({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Y6(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(le.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},s),{},{id:o}),children:r}]}]}function lp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:f=!1}=t,{width:p,height:m}=n.found?n:e,_=YP.includes(r),T=[le.replacementClass,s?"".concat(le.cssPrefix,"-").concat(s):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let k={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:T,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(m)})};const N=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/m*16*.0625,"em")}:{};f&&(k.attributes[Vs]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ma())},children:[a]}),delete k.attributes.title);const S=q(q({},k),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:q(q({},N),h.styles)}),{children:y,attributes:A}=n.found&&e.found?Zr("generateAbstractMask",S)||{children:[],attributes:{}}:Zr("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=y,S.attributes=A,o?Y6(S):K6(S)}function Y_(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=q(q(q({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Vs]="");const u=q({},o.styles);ip(s)&&(u.transform=b6({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Xc(u);h.length>0&&(l.style=h);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function Q6(t){const{content:e,title:n,extra:r}=t,s=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:uh}=$n;function If(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(le.cssPrefix,"-").concat(ah.GROUP)},children:[{tag:"path",attributes:{class:"".concat(le.cssPrefix,"-").concat(ah.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(le.cssPrefix,"-").concat(ah.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const X6={found:!1,width:512,height:512};function J6(t,e){!U2&&!le.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Af(t,e){let n=e;return e==="fa"&&le.styleDefault!==null&&(e=Jr()),new Promise((r,s)=>{if(n==="fa"){const i=eE(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&uh[e]&&uh[e][t]){const i=uh[e][t];return r(If(i))}J6(t,e),r(q(q({},X6),{},{icon:le.showMissingIcons&&t?Zr("missingIconAbstract")||{}:{}}))})}const Q_=()=>{},Cf=le.measurePerformance&&yl&&yl.mark&&yl.measure?yl:{mark:Q_,measure:Q_},Do='FA "6.7.2"',Z6=t=>(Cf.mark("".concat(Do," ").concat(t," begins")),()=>rE(t)),rE=t=>{Cf.mark("".concat(Do," ").concat(t," ends")),Cf.measure("".concat(Do," ").concat(t),"".concat(Do," ").concat(t," begins"),"".concat(Do," ").concat(t," ends"))};var cp={begin:Z6,end:rE};const Ol=()=>{};function X_(t){return typeof(t.getAttribute?t.getAttribute(Vs):null)=="string"}function e3(t){const e=t.getAttribute?t.getAttribute(tp):null,n=t.getAttribute?t.getAttribute(np):null;return e&&n}function t3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(le.replacementClass)}function n3(){return le.autoReplaceSvg===!0?Ml.replace:Ml[le.autoReplaceSvg]||Ml.replace}function r3(t){return Ke.createElementNS("http://www.w3.org/2000/svg",t)}function s3(t){return Ke.createElement(t)}function sE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?r3:s3}=e;if(typeof t=="string")return Ke.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(sE(i,{ceFn:n}))}),r}function i3(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ml={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sE(n),e)}),e.getAttribute(Vs)===null&&le.keepOriginalSource){let n=Ke.createComment(i3(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~sp(e).indexOf(le.replacementClass))return Ml.replace(t);const r=new RegExp("".concat(le.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===le.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Da(i)).join(`
`);e.setAttribute(Vs,""),e.innerHTML=s}};function J_(t){t()}function iE(t,e){const n=typeof e=="function"?e:Ol;if(t.length===0)n();else{let r=J_;le.mutateApproach===l6&&(r=Xr.requestAnimationFrame||J_),r(()=>{const s=n3(),i=cp.begin("mutate");t.map(s),i(),n()})}}let up=!1;function oE(){up=!0}function Rf(){up=!1}let uc=null;function Z_(t){if(!U_||!le.observeMutations)return;const{treeCallback:e=Ol,nodeCallback:n=Ol,pseudoElementsCallback:r=Ol,observeMutationsRoot:s=Ke}=t;uc=new U_(i=>{if(up)return;const o=Jr();Ji(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!X_(a.addedNodes[0])&&(le.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&le.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&X_(a.target)&&~p6.indexOf(a.attributeName))if(a.attributeName==="class"&&e3(a.target)){const{prefix:l,iconName:u}=Zc(sp(a.target));a.target.setAttribute(tp,l||o),u&&a.target.setAttribute(np,u)}else t3(a.target)&&n(a.target)})}),Tr&&uc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function o3(){uc&&uc.disconnect()}function a3(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function l3(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Zc(sp(t));return s.prefix||(s.prefix=Jr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=O6(s.prefix,t.innerText)||ap(s.prefix,Ef(t.innerText))),!s.iconName&&le.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function c3(t){const e=Ji(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return le.autoA11y&&(n?e["aria-labelledby"]="".concat(le.replacementClass,"-title-").concat(r||ma()):(e["aria-hidden"]="true",e.focusable="false")),e}function u3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=l3(t),i=c3(t),o=Tf("parseNodeAttributes",{},t);let a=e.styleParser?a3(t):[];return q({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:h3}=$n;function aE(t){const e=le.autoReplaceSvg==="nest"?ey(t,{styleParser:!1}):ey(t);return~e.extra.classes.indexOf(j2)?Zr("generateLayersText",t,e):Zr("generateSvgReplacementMutation",t,e)}function f3(){return[...WP,...pf]}function ty(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tr)return Promise.resolve();const n=Ke.documentElement.classList,r=h=>n.add("".concat(H_,"-").concat(h)),s=h=>n.remove("".concat(H_,"-").concat(h)),i=le.autoFetchSvg?f3():M2.concat(Object.keys(h3));i.includes("fa")||i.push("fa");const o=[".".concat(j2,":not([").concat(Vs,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Vs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ji(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=cp.begin("onTree"),u=a.reduce((h,f)=>{try{const p=aE(f);p&&h.push(p)}catch(p){U2||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(u).then(p=>{iE(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),f(p)})})}function d3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aE(t).then(n=>{n&&iE([n],e)})}function p3(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:bf(s||{})),t(r,q(q({},n),{},{mask:s}))}}const m3=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Hn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:m}=t;return eu(q({type:"icon"},t),()=>(Fs("beforeDOMElementCreation",{iconDefinition:t,params:e}),le.autoA11y&&(o?u["aria-labelledby"]="".concat(le.replacementClass,"-title-").concat(a||ma()):(u["aria-hidden"]="true",u.focusable="false")),lp({icons:{main:If(m),mask:s?If(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:q(q({},Hn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var g3={mixout(){return{icon:p3(m3)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ty,t.nodeCallback=d3,t}}},provides(t){t.i2svg=function(e){const{node:n=Ke,callback:r=()=>{}}=e;return ty(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:f}=n;return new Promise((p,m)=>{Promise.all([Af(r,o),u.iconName?Af(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[T,k]=_;p([e,lp({icons:{main:T,mask:k},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Xc(o);a.length>0&&(r.style=a);let l;return ip(i)&&(l=Zr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},_3={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return eu({type:"layer"},()=>{Fs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(le.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},y3={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return eu({type:"counter",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),Q6({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(le.cssPrefix,"-layers-counter"),...r]}})))}}}},v3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Hn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return eu({type:"text",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),Y_({content:t,transform:q(q({},Hn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(le.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(x2){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return le.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Y_({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const E3=new RegExp('"',"ug"),ny=[1105920,1112319],ry=q(q(q(q({},{FontAwesome:{normal:"fas",400:"fas"}}),$P),o6),ZP),Sf=Object.keys(ry).reduce((t,e)=>(t[e.toLowerCase()]=ry[e],t),{}),w3=Object.keys(Sf).reduce((t,e)=>{const n=Sf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function T3(t){const e=t.replace(E3,""),n=S6(e,0),r=n>=ny[0]&&n<=ny[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ef(s?e[0]:e),isSecondary:r||s}}function b3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Sf[n]||{})[s]||w3[n]}function sy(t,e){const n="".concat(a6).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ji(t.children).filter(p=>p.getAttribute(gf)===e)[0],a=Xr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(f6),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let m=b3(l,h);const{value:_,isSecondary:T}=T3(p),k=u[0].startsWith("FontAwesome");let N=ap(m,_),S=N;if(k){const y=M6(_);y.iconName&&y.prefix&&(N=y.iconName,m=y.prefix)}if(N&&!T&&(!o||o.getAttribute(tp)!==m||o.getAttribute(np)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const y=u3(),{extra:A}=y;A.attributes[gf]=e,Af(N,m).then(M=>{const V=lp(q(q({},y),{},{icons:{main:M,mask:tE()},prefix:m,iconName:S,extra:A,watchable:!0})),b=Ke.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(E=>Da(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function I3(t){return Promise.all([sy(t,"::before"),sy(t,"::after")])}function A3(t){return t.parentNode!==document.head&&!~c6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function iy(t){if(Tr)return new Promise((e,n)=>{const r=Ji(t.querySelectorAll("*")).filter(A3).map(I3),s=cp.begin("searchPseudoElements");oE(),Promise.all(r).then(()=>{s(),Rf(),e()}).catch(()=>{s(),Rf(),n()})})}var C3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=iy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ke}=e;le.searchPseudoElements&&iy(n)}}};let oy=!1;var R3={mixout(){return{dom:{unwatch(){oE(),oy=!0}}}},hooks(){return{bootstrap(){Z_(Tf("mutationObserverCallbacks",{}))},noAuto(){o3()},watch(t){const{observeMutationsRoot:e}=t;oy?Rf():Z_(Tf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ay=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var S3={mixout(){return{parse:{transform:t=>ay(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ay(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:q({},p.outer),children:[{tag:"g",attributes:q({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:q(q({},n.icon.attributes),p.path)}]}]}}}};const hh={x:0,y:0,width:"100%",height:"100%"};function ly(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function P3(t){return t.tag==="g"?t.children:[t]}var k3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Zc(n.split(" ").map(s=>s.trim())):tE();return r.prefix||(r.prefix=Jr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:f}=i,p=T6({transform:a,containerWidth:h,iconWidth:l}),m={tag:"rect",attributes:q(q({},hh),{},{fill:"white"})},_=u.children?{children:u.children.map(ly)}:{},T={tag:"g",attributes:q({},p.inner),children:[ly(q({tag:u.tag,attributes:q(q({},u.attributes),p.path)},_))]},k={tag:"g",attributes:q({},p.outer),children:[T]},N="mask-".concat(o||ma()),S="clip-".concat(o||ma()),y={tag:"mask",attributes:q(q({},hh),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,k]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:P3(f)},y]};return n.push(A,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},hh)}),{children:n,attributes:r}}}},N3={provides(t){let e=!1;Xr.matchMedia&&(e=Xr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:q(q({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=q(q({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:q(q({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:q(q({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:q(q({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:q(q({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},x3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},O3=[A6,g3,_3,y3,v3,C3,R3,S3,k3,N3,x3];$6(O3,{mixoutsTo:un});un.noAuto;un.config;const hp=un.library;un.dom;const Pf=un.parse;un.findIconDefinition;un.toHtml;const M3=un.icon;un.layer;un.text;un.counter;function Lt(t,e,n){return(e=F3(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function hr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cy(Object(n),!0).forEach(function(r){Lt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):cy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function D3(t,e){if(t==null)return{};var n,r,s=L3(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function L3(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function V3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function F3(t){var e=V3(t,"string");return typeof e=="symbol"?e:e+""}function hc(t){"@babel/helpers - typeof";return hc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hc(t)}function fh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lt({},t,e):{}}function U3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Lt(Lt(Lt(Lt(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var B3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lE={exports:{}};(function(t){(function(e){var n=function(N,S,y){if(!u(S)||f(S)||p(S)||m(S)||l(S))return S;var A,M=0,V=0;if(h(S))for(A=[],V=S.length;M<V;M++)A.push(n(N,S[M],y));else{A={};for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(A[N(b,y)]=n(N,S[b],y))}return A},r=function(N,S){S=S||{};var y=S.separator||"_",A=S.split||/(?=[A-Z])/;return N.split(A).join(y)},s=function(N){return _(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(S,y){return y?y.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var S=s(N);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(N,S){return r(N,S).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},f=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},m=function(N){return a.call(N)=="[object Boolean]"},_=function(N){return N=N-0,N===N},T=function(N,S){var y=S&&"process"in S?S.process:S;return typeof y!="function"?N:function(A,M){return y(A,N,M)}},k={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,S){return n(T(s,S),N)},decamelizeKeys:function(N,S){return n(T(o,S),N,S)},pascalizeKeys:function(N,S){return n(T(i,S),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(B3)})(lE);var j3=lE.exports,H3=["class","style"];function $3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=j3.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function z3(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function cE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return cE(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=z3(h);break;case"style":l.style=$3(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=D3(n,H3);return Pt(t.tag,hr(hr(hr({},e),{},{class:s.class,style:hr(hr({},s.style),o)},s.attrs),a),r)}var uE=!1;try{uE=!0}catch{}function q3(){if(!uE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function uy(t){if(t&&hc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pf.icon)return Pf.icon(t);if(t===null)return null;if(hc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var W3=Er({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=mt(function(){return uy(e.icon)}),i=mt(function(){return fh("classes",U3(e))}),o=mt(function(){return fh("transform",typeof e.transform=="string"?Pf.transform(e.transform):e.transform)}),a=mt(function(){return fh("mask",uy(e.mask))}),l=mt(function(){var h=hr(hr(hr(hr({},i.value),o.value),a.value),{},{symbol:e.symbol,maskId:e.maskId});return h.title=e.title,h.titleId=e.titleId,M3(s.value,h)});qr(l,function(h){if(!h)return q3("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=mt(function(){return l.value?cE(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const G3={prefix:"far",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"]},K3=G3,Y3={prefix:"far",iconName:"face-grin-beam-sweat",icon:[512,512,[128517,"grin-beam-sweat"],"f583","M476.8 126.3C497.1 120.8 512 102.7 512 81c0-20-28.6-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0c-9.5 12.6-27.1 37.2-36 57.5c-.3 .7-.6 1.4-.9 2.1C417.8 69.7 416 76 416 81c0 26 21.5 47 48 47c4.4 0 8.7-.6 12.8-1.7zM395.4 41.2C355.3 15.2 307.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-35.8-7.3-69.9-20.6-100.8c-8.6 3.1-17.8 4.8-27.4 4.8c-8.9 0-17.6-1.5-25.7-4.2C454.7 185.5 464 219.7 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256S141.1 48 256 48c48.7 0 93.4 16.7 128.9 44.7c-.6-3.8-.9-7.7-.9-11.7c0-11.4 3.8-22.4 7.1-30.5c1.3-3.1 2.7-6.2 4.3-9.3zM375 336.5c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5zM217.6 228.8s0 0 0 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 188.4 120 206.1 120 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0zm160 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 188.4 280 206.1 280 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0c0 0 0 0 0 0z"]},Q3=Y3,X3={prefix:"far",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const J3={prefix:"fas",iconName:"table",icon:[512,512,[],"f0ce","M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},Z3={prefix:"fas",iconName:"unlock-keyhole",icon:[448,512,["unlock-alt"],"f13e","M224 64c-44.2 0-80 35.8-80 80l0 48 240 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0 0-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0z"]},ek=Z3,tk={prefix:"fas",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"]},nk={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},rk={prefix:"fas",iconName:"school",icon:[640,512,[127979],"f549","M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z"]},sk={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ik={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},ok={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},ak=ok,lk={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},ck=lk,uk={prefix:"fas",iconName:"hand-holding-heart",icon:[576,512,[],"f4be","M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"]},hk={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},fk={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"]},dk={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},pk={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},mk=pk,gk={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},_k=gk,yk={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},vk={prefix:"fas",iconName:"landmark",icon:[512,512,[127963],"f66f","M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]},Ek={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},wk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Tk=wk,bk={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Ik={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},Ak=Ik,Ck={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Rk={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Sk=Rk,Pk={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"]},kk={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Nk=kk,xk={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Ok={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Mk=Ok;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Dk={prefix:"fab",iconName:"square-js",icon:[448,512,["js-square"],"f3b9","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"]},Lk=Dk,Vk={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]},Fk={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Uk={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},Bk={prefix:"fab",iconName:"free-code-camp",icon:[576,512,[],"f2c5","M97.22,96.21c10.36-10.65,16-17.12,16-21.9,0-2.76-1.92-5.51-3.83-7.42A14.81,14.81,0,0,0,101,64.05c-8.48,0-20.92,8.79-35.84,25.69C23.68,137,2.51,182.81,3.37,250.34s17.47,117,54.06,161.87C76.22,435.86,90.62,448,100.9,448a13.55,13.55,0,0,0,8.37-3.84c1.91-2.76,3.81-5.63,3.81-8.38,0-5.63-3.86-12.2-13.2-20.55-44.45-42.33-67.32-97-67.48-165C32.25,188.8,54,137.83,97.22,96.21ZM239.47,420.07c.58.37.91.55.91.55Zm93.79.55.17-.13C333.24,420.62,333.17,420.67,333.26,420.62Zm3.13-158.18c-16.24-4.15,50.41-82.89-68.05-177.17,0,0,15.54,49.38-62.83,159.57-74.27,104.35,23.46,168.73,34,175.23-6.73-4.35-47.4-35.7,9.55-128.64,11-18.3,25.53-34.87,43.5-72.16,0,0,15.91,22.45,7.6,71.13C287.7,364,354,342.91,355,343.94c22.75,26.78-17.72,73.51-21.58,76.55,5.49-3.65,117.71-78,33-188.1C360.43,238.4,352.62,266.59,336.39,262.44ZM510.88,89.69C496,72.79,483.52,64,475,64a14.81,14.81,0,0,0-8.39,2.84c-1.91,1.91-3.83,4.66-3.83,7.42,0,4.78,5.6,11.26,16,21.9,43.23,41.61,65,92.59,64.82,154.06-.16,68-23,122.63-67.48,165-9.34,8.35-13.18,14.92-13.2,20.55,0,2.75,1.9,5.62,3.81,8.38A13.61,13.61,0,0,0,475.1,448c10.28,0,24.68-12.13,43.47-35.79,36.59-44.85,53.14-94.38,54.06-161.87S552.32,137,510.88,89.69Z"]},jk={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Hk={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},$k={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},zk={prefix:"fab",iconName:"slack",icon:[448,512,[62447,"slack-hash"],"f198","M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"]},qk={prefix:"fab",iconName:"wordpress-simple",icon:[512,512,[],"f411","M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"]};hp.add(K3,Q3,X3);hp.add(bk,sk,dk,fk,hk,Mk,Nk,yk,mk,uk,Tk,tk,vk,Ek,xk,Ck,Pk,rk,ik,ck,J3,_k,Sk,ek,Ak,ak,nk);hp.add(Fk,Bk,jk,Uk,Vk,Lk,zk,$k,qk,Hk);const Wk=En(t=>{t.vueApp.component("FontAwesomeIcon",W3)}),Gk=()=>{},Kk=()=>{};var hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(t,e){if(!t)throw Zi(e)},Zi=function(t){return new Error("Firebase Database ("+hE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),r.push(n[h],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new Qk;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dE=function(t){const e=fE(t);return tu.encodeByteArray(e,!0)},fc=function(t){return dE(t).replace(/\./g,"")},dc=function(t){try{return tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return pE(void 0,t)}function pE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jk(n)||(t[n]=pE(t[n],e[n]));return t}function Jk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=()=>Zk().__FIREBASE_DEFAULTS__,tN=()=>{if(typeof process>"u"||typeof hy>"u")return;const t=hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dc(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return eN()||tN()||nN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rN=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sN=t=>{const e=rN(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mE=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config},iN=t=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fc(JSON.stringify(n)),fc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nn())}function aN(){var t;const e=(t=nu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uN(){return hE.NODE_ADMIN===!0}function hN(){return!aN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function fN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="FirebaseError";class br extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dN,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pN(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new br(s,a,r)}}function pN(t,e){return t.replace(mN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return JSON.parse(t)}function Rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=ya(dc(i[0])||""),n=ya(dc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},gN=function(t){const e=yE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_N=function(t){const e=yE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function kf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dy(i)&&dy(o)){if(!kf(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function vN(t,e){const n=new EN(t,e);return n.subscribe.bind(n)}class EN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dh),s.error===void 0&&(s.error=dh),s.complete===void 0&&(s.complete=dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}function TN(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,X(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ru=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CN(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AN(t){return t===vs?void 0:t}function CN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const SN={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},PN=Ee.INFO,kN={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},NN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=PN,this._logHandler=NN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const xN=(t,e)=>e.some(n=>t instanceof n);let py,my;function ON(){return py||(py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MN(){return my||(my=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Nf=new WeakMap,EE=new WeakMap,ph=new WeakMap,pp=new WeakMap;function DN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function LN(t){if(Nf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nf.set(t,e)}let xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VN(t){xf=t(xf)}function FN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mh(this),e,...n);return EE.set(r,e.sort?e.sort():[e]),Wr(r)}:MN().includes(t)?function(...e){return t.apply(mh(this),e),Wr(vE.get(this))}:function(...e){return Wr(t.apply(mh(this),e))}}function UN(t){return typeof t=="function"?FN(t):(t instanceof IDBTransaction&&LN(t),xN(t,ON())?new Proxy(t,xf):t)}function Wr(t){if(t instanceof IDBRequest)return DN(t);if(ph.has(t))return ph.get(t);const e=UN(t);return e!==t&&(ph.set(t,e),pp.set(e,t)),e}const mh=t=>pp.get(t);function BN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jN=["get","getKey","getAll","getAllKeys","count"],HN=["put","add","delete","clear"],gh=new Map;function gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gh.get(e))return gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jN.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return gh.set(e,i),i}VN(t=>({...t,get:(e,n,r)=>gy(e,n)||t.get(e,n,r),has:(e,n)=>!!gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zN(t){const e=t.getComponent();return e?.type==="VERSION"}const Of="@firebase/app",_y="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new La("@firebase/app"),qN="@firebase/app-compat",WN="@firebase/analytics-compat",GN="@firebase/analytics",KN="@firebase/app-check-compat",YN="@firebase/app-check",QN="@firebase/auth",XN="@firebase/auth-compat",JN="@firebase/database",ZN="@firebase/data-connect",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",sx="@firebase/installations-compat",ix="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",lx="@firebase/performance-compat",cx="@firebase/remote-config",ux="@firebase/remote-config-compat",hx="@firebase/storage",fx="@firebase/storage-compat",dx="@firebase/firestore",px="@firebase/vertexai-preview",mx="@firebase/firestore-compat",gx="firebase",_x="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="[DEFAULT]",yx={[Of]:"fire-core",[qN]:"fire-core-compat",[GN]:"fire-analytics",[WN]:"fire-analytics-compat",[YN]:"fire-app-check",[KN]:"fire-app-check-compat",[QN]:"fire-auth",[XN]:"fire-auth-compat",[JN]:"fire-rtdb",[ZN]:"fire-data-connect",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[sx]:"fire-iid-compat",[ix]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[lx]:"fire-perf-compat",[cx]:"fire-rc",[ux]:"fire-rc-compat",[hx]:"fire-gcs",[fx]:"fire-gcs-compat",[dx]:"fire-fst",[mx]:"fire-fst-compat",[px]:"fire-vertex","fire-js":"fire-js",[gx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map,vx=new Map,Df=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(Df.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Df.set(e,t);for(const n of mc.values())yy(n,t);for(const n of vx.values())yy(n,t);return!0}function Ex(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lo(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new eo("app","Firebase",wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=_x;function bx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=mE()),!n)throw Gr.create("no-options");const i=mc.get(s);if(i){if(kf(n,i.options)&&kf(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new RN(s);for(const l of Df.values())o.addComponent(l);const a=new Tx(n,r,o);return mc.set(s,a),a}function wE(t=Mf){const e=mc.get(t);if(!e&&t===Mf&&mE())return bx();if(!e)throw Gr.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=yx[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}Jn(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="firebase-heartbeat-database",Ax=1,va="firebase-heartbeat-store";let _h=null;function TE(){return _h||(_h=BN(Ix,Ax,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),_h}async function Cx(t){try{const n=(await TE()).transaction(va),r=await n.objectStore(va).get(bE(t));return await n.done,r}catch(e){if(e instanceof br)yr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e?.message});yr.warn(n.message)}}}async function vy(t,e){try{const r=(await TE()).transaction(va,"readwrite");await r.objectStore(va).put(e,bE(t)),await r.done}catch(n){if(n instanceof br)yr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n?.message});yr.warn(r.message)}}}function bE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=1024,Sx=720*60*60*1e3;class Px{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ey();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ey(),{heartbeatsToSend:r,unsentEntries:s}=kx(this._heartbeatsCache.heartbeats),i=fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yr.warn(n),""}}}function Ey(){return new Date().toISOString().substring(0,10)}function kx(t,e=Rx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?fN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wy(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){Jn(new xn("platform-logger",e=>new $N(e),"PRIVATE")),Jn(new xn("heartbeat",e=>new Px(e),"PRIVATE")),an(Of,_y,t),an(Of,_y,"esm2017"),an("fire-js","")}xx("");function IE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function AE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ox=AE,CE=new eo("auth","Firebase",AE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new La("@firebase/auth");function Mx(t,...e){gc.logLevel<=Ee.WARN&&gc.warn(`Auth (${to}): ${t}`,...e)}function Dl(t,...e){gc.logLevel<=Ee.ERROR&&gc.error(`Auth (${to}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,...e){throw mp(t,...e)}function RE(t,...e){return mp(t,...e)}function SE(t,e,n){const r=Object.assign(Object.assign({},Ox()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Ll(t){return SE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CE.create(t,...e)}function xe(t,e,...n){if(!t)throw mp(e,...n)}function Zo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function _c(t,e){t||Zo(e)}function Dx(){return by()==="http:"||by()==="https:"}function by(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dx()||cN()||"connection"in navigator)?navigator.onLine:!0}function Vx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,_c(n>e,"Short delay should be less than long delay!"),this.isMobile=fp()||gE()}get(){return Lx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t,e){_c(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=new Va(3e4,6e4);function kE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function su(t,e,n,r,s={}){return NE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=dp(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return lN()||(u.referrerPolicy="no-referrer"),PE.fetch()(xE(t,t.config.apiHost,n,a),u)})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ux),e);try{const s=new jx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw El(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw SE(t,h,u);Ty(t,h)}}catch(s){if(s instanceof br)throw s;Ty(t,"network-request-failed",{message:String(s)})}}function xE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fx(t.config,s):`${t.config.apiScheme}://${s}`}class jx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(RE(this.auth,"network-request-failed")),Bx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=RE(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e){return su(t,"POST","/v1/accounts:delete",e)}async function OE(t,e){return su(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $x(t,e=!1){const n=Xn(t),r=await n.getIdToken(e),s=ME(r);xe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ea(yh(s.auth_time)),issuedAtTime:ea(yh(s.iat)),expirationTime:ea(yh(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function yh(t){return Number(t)*1e3}function ME(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=dc(n);return s?JSON.parse(s):(Dl("Failed to decode base64 JWT payload"),null)}catch(s){return Dl("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Iy(t){const e=ME(t);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof br&&zx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ea(this.lastLoginAt),this.creationTime=ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Lf(t,OE(n,{idToken:r}));xe(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],a=Gx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Wx(t){const e=Xn(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=IE(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e){const n=await NE(t,{},async()=>{const r=dp({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=xE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yx(t,e){return su(t,"POST","/v2/accounts:revokeToken",kE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const n=Iy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ii;return r&&(xe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(xe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(xe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return Zo("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){xe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=IE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Lf(this,this.stsTokenManager.getToken(this.auth,e));return xe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $x(this,e)}reload(){return Wx(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lo(this.auth.app))return Promise.reject(Ll(this.auth));const e=await this.getIdToken();return await Lf(this,Hx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:A,isAnonymous:M,providerData:V,stsTokenManager:b}=n;xe(y&&b,e,"internal-error");const E=Ii.fromJSON(this.name,b);xe(typeof y=="string",e,"internal-error"),Or(f,e.name),Or(p,e.name),xe(typeof A=="boolean",e,"internal-error"),xe(typeof M=="boolean",e,"internal-error"),Or(m,e.name),Or(_,e.name),Or(T,e.name),Or(k,e.name),Or(N,e.name),Or(S,e.name);const w=new Ur({uid:y,auth:e,email:p,emailVerified:A,displayName:f,isAnonymous:M,photoURL:_,phoneNumber:m,tenantId:T,stsTokenManager:E,createdAt:N,lastLoginAt:S});return V&&Array.isArray(V)&&(w.providerData=V.map(C=>Object.assign({},C))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ii;s.updateFromServerResponse(n);const i=new Ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];xe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?DE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ii;a.updateFromIdToken(r);const l=new Ur({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;function As(t){_c(t instanceof Function,"Expected a class definition");let e=Ay.get(t);return e?(_c(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ay.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LE.type="NONE";const Cy=LE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vh(this.userKey,s.apiKey,i),this.fullPersistenceKey=vh("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(As(Cy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||As(Cy);const o=vh(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Ur._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ai(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ai(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tO(e))return"Blackberry";if(nO(e))return"Webos";if(Xx(e))return"Safari";if((e.includes("chrome/")||Jx(e))&&!e.includes("edge/"))return"Chrome";if(eO(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Qx(t=Nn()){return/firefox\//i.test(t)}function Xx(t=Nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jx(t=Nn()){return/crios\//i.test(t)}function Zx(t=Nn()){return/iemobile/i.test(t)}function eO(t=Nn()){return/android/i.test(t)}function tO(t=Nn()){return/blackberry/i.test(t)}function nO(t=Nn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=Ry(Nn());break;case"Worker":n=`${Ry(Nn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t,e={}){return su(t,"GET","/v2/passwordPolicy",kE(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=6;class oO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sy(this),this.idTokenSubscription=new Sy(this),this.beforeStateQueue=new rO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=As(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await OE(this,{idToken:e}),r=await Ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lo(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lo(this.app))return Promise.reject(Ll(this));const n=e?Xn(e):null;return n&&xe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lo(this.app)?Promise.reject(Ll(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lo(this.app)?Promise.reject(Ll(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(As(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sO(this),n=new oO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&As(e)||this._popupRedirectResolver;xe(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[As(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Mx(`Error while retrieving App Check token: ${n.error}`),n?.token}}function lO(t){return Xn(t)}class Sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=vN(n=>this.observer=n)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cO(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(As);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}new Va(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Va(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Va(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Va(5e3,15e3);var Py="@firebase/auth",ky="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fO(t){Jn(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;xe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},u=new aO(r,s,i,l);return cO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new xn("auth-internal",e=>{const n=lO(e.getProvider("auth").getImmediate());return(r=>new uO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Py,ky,hO(t)),an(Py,ky,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=300;iN("authIdTokenMaxAge");fO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new Map,mO={activated:!1,tokenObservers:[]};function On(t){return pO.get(t)||Object.assign({},mO)}const Ny={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new _a,this.pending.promise.catch(n=>{}),await _O(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new _a,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function _O(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},vc=new eo("appCheck","AppCheck",yO);function FE(t){if(!On(t).activated)throw vc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="firebase-app-check-database",EO=1,Ff="firebase-app-check-store";let wl=null;function wO(){return wl||(wl=new Promise((t,e)=>{try{const n=indexedDB.open(vO,EO);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(vc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Ff,{keyPath:"compositeKey"})}}}catch(n){e(vc.create("storage-open",{originalErrorMessage:n?.message}))}}),wl)}function TO(t,e){return bO(IO(t),e)}async function bO(t,e){const r=(await wO()).transaction(Ff,"readwrite"),i=r.objectStore(Ff).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(vc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function IO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new La("@firebase/app-check");function xy(t,e){return _E()?TO(t,e).catch(n=>{Uf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO={error:"UNKNOWN_ERROR"};function CO(t){return tu.encodeString(JSON.stringify(t),!1)}async function Bf(t,e=!1){const n=t.app;FE(n);const r=On(n);let s=r.token,i;if(s&&!Vo(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Vo(l)?s=l:await xy(n,void 0))}if(!e&&s&&Vo(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await On(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Uf.warn(l.message):Uf.error(l),i=l}let a;return s?i?Vo(s)?a={token:s.token,internalError:i}:a=My(i):(a={token:s.token},r.token=s,await xy(n,s)):a=My(i),o&&kO(n,a),a}async function RO(t){const e=t.app;FE(e);const{provider:n}=On(e);{const{token:r}=await n.getToken();return{token:r}}}function SO(t,e,n,r){const{app:s}=t,i=On(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Vo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Oy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Oy(t))}function UE(t,e){const n=On(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Oy(t){const{app:e}=t,n=On(e);let r=n.tokenRefresher;r||(r=PO(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function PO(t){const{app:e}=t;return new gO(async()=>{const n=On(e);let r;if(n.token?r=await Bf(t,!0):r=await Bf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=On(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-300*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Ny.RETRIAL_MIN_WAIT,Ny.RETRIAL_MAX_WAIT)}function kO(t,e){const n=On(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Vo(t){return t.expireTimeMillis-Date.now()>0}function My(t){return{token:CO(AO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=On(this.app);for(const n of e)UE(this.app,n.next);return Promise.resolve()}}function xO(t,e){return new NO(t,e)}function OO(t){return{getToken:e=>Bf(t,e),getLimitedUseToken:()=>RO(t),addTokenListener:e=>SO(t,"INTERNAL",e),removeTokenListener:e=>UE(t.app,e)}}const MO="@firebase/app-check",DO="0.8.8",LO="app-check",Dy="app-check-internal";function VO(){Jn(new xn(LO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return xO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Dy).initialize()})),Jn(new xn(Dy,t=>{const e=t.getProvider("app-check").getImmediate();return OO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),an(MO,DO)}VO();var FO="firebase",UO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(FO,UO,"app");const BE=Symbol("firebaseApp");function jE(t){return os()&&_t(BE,null)||wE(t)}const zn=()=>{};function gp(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function BO(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function Gs(t){return!!t&&typeof t=="object"}const jO=Object.prototype;function HO(t){return Gs(t)&&Object.getPrototypeOf(t)===jO}function _p(t){return Gs(t)&&t.type==="document"}function $O(t){return Gs(t)&&t.type==="collection"}function zO(t){return _p(t)||$O(t)}function qO(t){return Gs(t)&&t.type==="query"}function WO(t){return Gs(t)&&"ref"in t}function GO(t){return Gs(t)&&typeof t.bucket=="string"}function KO(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const YO=Symbol.for("v-scx");function QO(){return!!_t(YO,0)}var Ly={};const Vy="@firebase/database",Fy="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HE="";function XO(t){HE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ir(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JO(e)}}catch{}return new ZO},Cs=$E("localStorage"),e5=$E("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new La("@firebase/database"),t5=(function(){let t=1;return function(){return t++}})(),zE=function(t){const e=bN(t),n=new yN;n.update(e);const r=n.digest();return tu.encodeByteArray(r)},Fa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fa.apply(null,r):typeof r=="object"?e+=Rt(r):e+=r,e+=" "}return e};let ta=null,Uy=!0;const n5=function(t,e){X(!0,"Can't turn on custom loggers persistently."),Ci.logLevel=Ee.VERBOSE,ta=Ci.log.bind(Ci)},Bt=function(...t){if(Uy===!0&&(Uy=!1,ta===null&&e5.get("logging_enabled")===!0&&n5()),ta){const e=Fa.apply(null,t);ta(e)}},Ua=function(t){return function(...e){Bt(t,...e)}},jf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fa(...t);Ci.error(e)},Us=function(...t){const e=`FIREBASE FATAL ERROR: ${Fa(...t)}`;throw Ci.error(e),new Error(e)},ln=function(...t){const e="FIREBASE WARNING: "+Fa(...t);Ci.warn(e)},r5=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},s5=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ui="[MIN_NAME]",Bs="[MAX_NAME]",no=function(t,e){if(t===e)return 0;if(t===Ui||e===Bs)return-1;if(e===Ui||t===Bs)return 1;{const n=By(t),r=By(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},i5=function(t,e){return t===e?0:t<e?-1:1},Ro=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Rt(e))},yp=function(t){if(typeof t!="object"||t===null)return Rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Rt(e[r]),n+=":",n+=yp(t[e[r]]);return n+="}",n},WE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function vn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const GE=function(t){X(!qE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},o5=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},a5=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},l5=new RegExp("^-?(0*)\\d{1,10}$"),c5=-2147483648,u5=2147483647,By=function(t){if(l5.test(t)){const e=Number(t);if(e>=c5&&e<=u5)return e}return null},Ba=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ln("Exception was thrown by user callback.",n),e},Math.floor(0))}},h5=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},na=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ln(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ln(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="5",KE="v",YE="s",QE="r",XE="f",JE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ZE="ls",ew="p",Hf="ac",tw="websocket",nw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function m5(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rw(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let r;if(e===tw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);m5(t)&&(n.ns=t.namespace);const s=[];return vn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(){this.counters_={}}incrementCounter(e,n=1){Ir(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={},wh={};function Ep(t){const e=t.toString();return Eh[e]||(Eh[e]=new g5),Eh[e]}function _5(t,e){const n=t.toString();return wh[n]||(wh[n]=e()),wh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ba(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="start",v5="close",E5="pLPCommand",w5="pRTLPCB",sw="id",iw="pw",ow="ser",T5="cb",b5="seg",I5="ts",A5="d",C5="dframe",aw=1870,lw=30,R5=aw-lw,S5=25e3,P5=3e4;class ui{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=Ep(n),this.urlFn=l=>(this.appCheckToken&&(l[Hf]=this.appCheckToken),rw(n,nw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new y5(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(P5)),s5(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wp((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jy)this.id=a,this.password=l;else if(o===v5)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[jy]="t",r[ow]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[T5]=this.scriptTagHolder.uniqueCallbackIdentifier),r[KE]=vp,this.transportSessionId&&(r[YE]=this.transportSessionId),this.lastSessionId&&(r[ZE]=this.lastSessionId),this.applicationId&&(r[ew]=this.applicationId),this.appCheckToken&&(r[Hf]=this.appCheckToken),typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(r[QE]=XE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!o5()&&!a5()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dE(n),s=WE(r,R5);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[C5]="t",r[sw]=e,r[iw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=t5(),window[E5+this.uniqueCallbackIdentifier]=e,window[w5+this.uniqueCallbackIdentifier]=n,this.myIFrame=wp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Bt("frame writing exception"),a.stack&&Bt(a.stack),Bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sw]=this.myID,e[iw]=this.myPW,e[ow]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lw+r.length<=aw;){const o=this.pendingSegs.shift();r=r+"&"+b5+s+"="+o.seg+"&"+I5+s+"="+o.ts+"&"+A5+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(S5)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5=16384,N5=45e3;let Ec=null;typeof MozWebSocket<"u"?Ec=MozWebSocket:typeof WebSocket<"u"&&(Ec=WebSocket);class bn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=Ep(n),this.connURL=bn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[KE]=vp,typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(o[QE]=XE),n&&(o[YE]=n),r&&(o[ZE]=r),s&&(o[Hf]=s),i&&(o[ew]=i),rw(e,tw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let r;uN(),this.mySock=new Ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ec!==null&&!bn.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=WE(n,k5);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(N5))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bn.responsesRequiredToBeHealthy=2;bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bn&&bn.isAvailable();let r=n&&!bn.previouslyFailed();if(e.webSocketOnly&&(n||ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bn];else{const s=this.transports_=[];for(const i of Ea.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ea.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5=6e4,O5=5e3,M5=10*1024,D5=100*1024,Th="t",Hy="d",L5="s",$y="r",V5="e",zy="o",qy="a",Wy="n",Gy="p",F5="h";class U5{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new Ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=na(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D5?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>M5?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Th in e){const n=e[Th];n===qy?this.upgradeIfSecondaryHealthy_():n===$y?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ro("t",e),r=Ro("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ro("t",e),r=Ro("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ro(Th,e);if(Hy in e){const r=e[Hy];if(n===F5){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Wy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===L5?this.onConnectionShutdown_(r):n===$y?this.onReset_(r):n===V5?jf("Server Error: "+r):n===zy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vp!==r&&ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),na(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(x5))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):na(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O5))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends uw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wc}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=32,Yy=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new Ye("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function es(t){return t.pieces_.length-t.pieceNum_}function Ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function hw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function B5(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function gt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ye(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function gn(t,e){const n=Ie(t),r=Ie(e);if(n===null)return e;if(n===r)return gn(Ge(t),Ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pw(t,e){if(es(t)!==es(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function In(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(es(t)>es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class j5{constructor(e,n){this.errorPrefix_=n,this.parts_=fw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ru(this.parts_[r]);mw(this)}}function H5(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ru(e),mw(t)}function $5(t){const e=t.parts_.pop();t.byteLength_-=ru(e),t.parts_.length>0&&(t.byteLength_-=1)}function mw(t){if(t.byteLength_>Yy)throw new Error(t.errorPrefix_+"has a key path longer than "+Yy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ky)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ky+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends uw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Tp}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=1e3,z5=300*1e3,Qy=30*1e3,q5=1.3,W5=3e4,G5="server_kill",Xy=3;class dr extends cw{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dr.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=So,this.maxReconnectDelay_=z5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Rt(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new _a,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;dr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ir(e,"w")){const r=Fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_N(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jf("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W5&&(this.reconnectDelay_=So),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+dr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new U5(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{ln(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(G5)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ln(f),l())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fy(this.interruptReasons_)&&(this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>yp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ye(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xy&&(this.reconnectDelay_=Qy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+HE.replace(/\./g,"-")]=1,fp()?e["framework.cordova"]=1:gE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wc.getInstance().currentlyOnline();return fy(this.interruptReasons_)&&e}}dr.nextPersistentConnectionId_=0;dr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(Ui,e),s=new Ae(Ui,n);return this.compare(r,s)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class gw extends iu{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return no(e.name,n.name)}isDefinedOn(e){throw Zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Bs,Tl)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,Tl)}toString(){return".key"}}const Ri=new gw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},sn=class Fo{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Fo.RED,this.left=s??qn.EMPTY_NODE,this.right=i??qn.EMPTY_NODE}copy(e,n,r,s,i){return new Fo(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return qn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};sn.RED=!0;sn.BLACK=!1;class K5{copy(e,n,r,s,i){return this}insert(e,n,r){return new sn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let qn=class Vl{constructor(e,n=Vl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,sn.BLACK,null,null))}remove(e){return new Vl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bl(this.root_,null,this.comparator_,!0,e)}};qn.EMPTY_NODE=new K5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y5(t,e){return no(t.name,e.name)}function bp(t,e){return no(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;function Q5(t){$f=t}const _w=function(t){return typeof t=="number"?"number:"+GE(t):"string:"+t},yw=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ir(e,".sv"),"Priority must be a string or number.")}else X(t===$f||t.isEmpty(),"priority of unexpected type.");X(t===$f||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jy;class dt{constructor(e,n=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yw(this.priorityNode_)}static set __childrenNodeConstructor(e){Jy=e}static get __childrenNodeConstructor(){return Jy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Ie(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_w(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=GE(this.value_):e+=this.value_,this.lazyHash_=zE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=dt.VALUE_TYPE_ORDER.indexOf(n),i=dt.VALUE_TYPE_ORDER.indexOf(r);return X(s>=0,"Unknown leaf type: "+n),X(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vw,Ew;function X5(t){vw=t}function J5(t){Ew=t}class Z5 extends iu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?no(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Bs,new dt("[PRIORITY-POST]",Ew))}makePost(e,n){const r=vw(e);return new Ae(n,new dt("[PRIORITY-POST]",r))}toString(){return".priority"}}const zt=new Z5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=Math.log(2);class tM{constructor(e){const n=i=>parseInt(Math.log(i)/eM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tc=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let f,p;if(h===0)return null;if(h===1)return f=t[l],p=n?n(f):f,new sn(p,f.node,sn.BLACK,null,null);{const m=parseInt(h/2,10)+l,_=s(l,m),T=s(m+1,u);return f=t[m],p=n?n(f):f,new sn(p,f.node,sn.BLACK,_,T)}},i=function(l){let u=null,h=null,f=t.length;const p=function(_,T){const k=f-_,N=f;f-=_;const S=s(k+1,N),y=t[k],A=n?n(y):y;m(new sn(A,y.node,T,null,S))},m=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const T=l.nextBitIsOne(),k=Math.pow(2,l.count-(_+1));T?p(k,sn.BLACK):(p(k,sn.BLACK),p(k,sn.RED))}return h},o=new tM(t.length),a=i(o);return new qn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh;const ri={};class fr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return X(ri&&zt,"ChildrenNode.ts has not been loaded"),bh=bh||new fr({".priority":ri},{".priority":zt}),bh}get(e){const n=Fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qn?n:null}hasIndex(e){return Ir(this.indexSet_,e.toString())}addIndex(e,n){X(e!==Ri,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Tc(r,e.getCompare()):a=ri;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new fr(h,u)}addToIndexes(e,n){const r=pc(this.indexes_,(s,i)=>{const o=Fi(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),s===ri)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Tc(a,o.getCompare())}else return ri;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ae(e.name,a))),l.insert(e,e.node)}});return new fr(r,this.indexSet_)}removeFromIndexes(e,n){const r=pc(this.indexes_,s=>{if(s===ri)return s;{const i=n.get(e.name);return i?s.remove(new Ae(e.name,i)):s}});return new fr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class De{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yw(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Po||(Po=new De(new qn(bp),null,fr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Po}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Po:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Po:this.priorityNode_;return new De(s,o,i)}}updateChild(e,n){const r=Ie(e);if(r===null)return n;{X(Ie(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ge(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(zt,(o,a)=>{n[o]=a.val(e),r++,i&&De.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_w(this.getPriority().val())+":"),this.forEachChild(zt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":zE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ja?-1:0}withIndex(e){if(e===Ri||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ri||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(zt),s=n.getIterator(zt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ri?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nM extends De{constructor(){super(new qn(bp),De.EMPTY_NODE,fr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const ja=new nM;Object.defineProperties(Ae,{MIN:{value:new Ae(Ui,De.EMPTY_NODE)},MAX:{value:new Ae(Bs,ja)}});gw.__EMPTY_NODE=De.EMPTY_NODE;dt.__childrenNodeConstructor=De;Q5(ja);J5(ja);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=!0;function jt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new dt(n,jt(e))}if(!(t instanceof Array)&&rM){const n=[];let r=!1;if(vn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=jt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ae(o,l)))}}),n.length===0)return De.EMPTY_NODE;const i=Tc(n,Y5,o=>o.name,bp);if(r){const o=Tc(n,zt.getCompare());return new De(i,jt(e),new fr({".priority":o},{".priority":zt}))}else return new De(i,jt(e),fr.Default)}else{let n=De.EMPTY_NODE;return vn(t,(r,s)=>{if(Ir(t,r)&&r.substring(0,1)!=="."){const i=jt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(jt(e))}}X5(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM extends iu{constructor(e){super(),this.indexPath_=e,X(!we(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?no(e.name,n.name):i}makePost(e,n){const r=jt(e),s=De.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,s)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,ja);return new Ae(Bs,e)}toString(){return fw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM extends iu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?no(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=jt(e);return new Ae(n,r)}toString(){return".value"}}const oM=new iM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t){return{type:"value",snapshotNode:t}}function lM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ui}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){const e=new Ip;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function e0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===zt?n="$priority":t.index_===oM?n="$value":t.index_===Ri?n="$key":(X(t.index_ instanceof sM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function t0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==zt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends cw{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bc.getListenId_(e,r),a={};this.listens_[o]=a;const l=e0(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),Fi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=bc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=e0(e._queryParams),r=e._path.toString(),s=new _a;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dp(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ya(a.responseText)}catch{ln("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ln("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){return{value:null,children:new Map}}function ww(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ie(e);t.children.has(r)||t.children.set(r,Ic());const s=t.children.get(r);e=Ge(e),ww(s,e,n)}}function zf(t,e,n){t.value!==null?n(e,t.value):fM(t,(r,s)=>{const i=new Ye(e.toString()+"/"+r);zf(s,i,n)})}function fM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&vn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=10*1e3,pM=30*1e3,mM=300*1e3;class gM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dM(e);const r=n0+(pM-n0)*Math.random();na(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;vn(e,(s,i)=>{i>0&&Ir(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),na(this.reportStats_.bind(this),Math.floor(Math.random()*2*mM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wn||(Wn={}));function Tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Iw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Wn.ACK_USER_WRITE,this.source=Tw()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new Ac(Ue(),n,this.revert)}}else return X(Ie(this.path)===e,"operationForChild called for unrelated child."),new Ac(Ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Wn.OVERWRITE}operationForChild(e){return we(this.path)?new js(this.source,Ue(),this.snap.getImmediateChild(e)):new js(this.source,Ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Wn.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new js(this.source,Ue(),n.value):new wa(this.source,Ue(),n)}else return X(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wa(this.source,Ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function _M(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(uM(o.childName,o.snapshotNode))}),ko(t,s,"child_removed",e,r,n),ko(t,s,"child_added",e,r,n),ko(t,s,"child_moved",i,r,n),ko(t,s,"child_changed",e,r,n),ko(t,s,"value",e,r,n),s}function ko(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>vM(t,a,l)),o.forEach(a=>{const l=yM(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function yM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vM(t,e,n){if(e.childName==null||n.childName==null)throw Zi("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),s=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e){return{eventCache:t,serverCache:e}}function ra(t,e,n,r){return Aw(new Ap(e,n,r),t.serverCache)}function Cw(t,e,n,r){return Aw(t.eventCache,new Ap(e,n,r))}function qf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih;const EM=()=>(Ih||(Ih=new qn(i5)),Ih);class qe{constructor(e,n=EM()){this.value=e,this.children=n}static fromObject(e){let n=new qe(null);return vn(e,(r,s)=>{n=n.set(new Ye(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(we(e))return null;{const r=Ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ge(e),n);return i!=null?{path:gt(new Ye(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Ie(e),r=this.children.get(n);return r!==null?r.subtree(Ge(e)):new qe(null)}}set(e,n){if(we(e))return new qe(n,this.children);{const r=Ie(e),i=(this.children.get(r)||new qe(null)).set(Ge(e),n),o=this.children.insert(r,i);return new qe(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Ie(e),r=this.children.get(n);if(r){const s=r.remove(Ge(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new qe(null):new qe(this.value,i)}else return this}}get(e){if(we(e))return this.value;{const n=Ie(e),r=this.children.get(n);return r?r.get(Ge(e)):null}}setTree(e,n){if(we(e))return n;{const r=Ie(e),i=(this.children.get(r)||new qe(null)).setTree(Ge(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new qe(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(gt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(we(e))return null;{const i=Ie(e),o=this.children.get(i);return o?o.findOnPath_(Ge(e),gt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,r){if(we(e))return this;{this.value&&r(n,this.value);const s=Ie(e),i=this.children.get(s);return i?i.foreachOnPath_(Ge(e),gt(n,s),r):new qe(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(gt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new qe(null))}}function sa(t,e,n){if(we(e))return new Rn(new qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=gn(s,e);return i=i.updateChild(o,n),new Rn(t.writeTree_.set(s,i))}else{const s=new qe(n),i=t.writeTree_.setTree(e,s);return new Rn(i)}}}function r0(t,e,n){let r=t;return vn(n,(s,i)=>{r=sa(r,gt(e,s),i)}),r}function s0(t,e){if(we(e))return Rn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new Rn(n)}}function Wf(t,e){return Ks(t,e)!=null}function Ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gn(n.path,e)):null}function i0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(zt,(r,s)=>{e.push(new Ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ae(r,s.value))}),e}function Kr(t,e){if(we(e))return t;{const n=Ks(t,e);return n!=null?new Rn(new qe(n)):new Rn(t.writeTree_.subtree(e))}}function Gf(t){return t.writeTree_.isEmpty()}function Bi(t,e){return Rw(Ue(),t.writeTree_,e)}function Rw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Rw(gt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(gt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){return Ow(e,t)}function wM(t,e,n,r,s){X(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=sa(t.visibleWrites,e,n)),t.lastWriteId=r}function TM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function bM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&IM(a,r.path)?s=!1:In(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return AM(t),!0;if(r.snap)t.visibleWrites=s0(t.visibleWrites,r.path);else{const a=r.children;vn(a,l=>{t.visibleWrites=s0(t.visibleWrites,gt(r.path,l))})}return!0}else return!1}function IM(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(gt(t.path,n),e))return!0;return!1}function AM(t){t.visibleWrites=Pw(t.allWrites,CM,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function CM(t){return t.visible}function Pw(t,e,n){let r=Rn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)In(n,o)?(a=gn(n,o),r=sa(r,a,i.snap)):In(o,n)&&(a=gn(o,n),r=sa(r,Ue(),i.snap.getChild(a)));else if(i.children){if(In(n,o))a=gn(n,o),r=r0(r,a,i.children);else if(In(o,n))if(a=gn(o,n),we(a))r=r0(r,Ue(),i.children);else{const l=Fi(i.children,Ie(a));if(l){const u=l.getChild(Ge(a));r=sa(r,Ue(),u)}}}else throw Zi("WriteRecord should have .snap or .children")}}return r}function kw(t,e,n,r,s){if(!r&&!s){const i=Ks(t.visibleWrites,e);if(i!=null)return i;{const o=Kr(t.visibleWrites,e);if(Gf(o))return n;if(n==null&&!Wf(o,Ue()))return null;{const a=n||De.EMPTY_NODE;return Bi(o,a)}}}else{const i=Kr(t.visibleWrites,e);if(!s&&Gf(i))return n;if(!s&&n==null&&!Wf(i,Ue()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(In(u.path,e)||In(e,u.path))},a=Pw(t.allWrites,o,e),l=n||De.EMPTY_NODE;return Bi(a,l)}}}function RM(t,e,n){let r=De.EMPTY_NODE;const s=Ks(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(zt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Kr(t.visibleWrites,e);return n.forEachChild(zt,(o,a)=>{const l=Bi(Kr(i,new Ye(o)),a);r=r.updateImmediateChild(o,l)}),i0(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Kr(t.visibleWrites,e);return i0(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function SM(t,e,n,r,s){X(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=gt(e,n);if(Wf(t.visibleWrites,i))return null;{const o=Kr(t.visibleWrites,i);return Gf(o)?s.getChild(n):Bi(o,s.getChild(n))}}function PM(t,e,n,r){const s=gt(e,n),i=Ks(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Kr(t.visibleWrites,s);return Bi(o,r.getNode().getImmediateChild(n))}else return null}function kM(t,e){return Ks(t.visibleWrites,e)}function NM(t,e,n,r,s,i,o){let a;const l=Kr(t.visibleWrites,e),u=Ks(l,Ue());if(u!=null)a=u;else if(n!=null)a=Bi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&h.length<s;)f(m,r)!==0&&h.push(m),m=p.getNext();return h}else return[]}function xM(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function Kf(t,e,n,r){return kw(t.writeTree,t.treePath,e,n,r)}function Nw(t,e){return RM(t.writeTree,t.treePath,e)}function o0(t,e,n,r){return SM(t.writeTree,t.treePath,e,n,r)}function Cc(t,e){return kM(t.writeTree,gt(t.treePath,e))}function OM(t,e,n,r,s,i){return NM(t.writeTree,t.treePath,e,n,r,s,i)}function Cp(t,e,n){return PM(t.writeTree,t.treePath,e,n)}function xw(t,e){return Ow(gt(t.treePath,e),t.writeTree)}function Ow(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Zy(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,cM(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,lM(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Zy(r,e.snapshotNode,s.oldSnap));else throw Zi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Mw=new DM;class Rp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ap(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hs(this.viewCache_),i=OM(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function LM(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VM(t,e,n,r,s){const i=new MM;let o,a;if(n.type===Wn.OVERWRITE){const u=n;u.source.fromUser?o=Yf(t,e,u.path,u.snap,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!we(u.path),o=Rc(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Wn.MERGE){const u=n;u.source.fromUser?o=UM(t,e,u.path,u.children,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Qf(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Wn.ACK_USER_WRITE){const u=n;u.revert?o=HM(t,e,u.path,r,s,i):o=BM(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Wn.LISTEN_COMPLETE)o=jM(t,e,n.path,r,i);else throw Zi("Unknown operation type: "+n.type);const l=i.getChanges();return FM(e,o,l),{viewCache:o,changes:l}}function FM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=qf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(aM(qf(e)))}}function Dw(t,e,n,r,s,i){const o=e.eventCache;if(Cc(r,n)!=null)return e;{let a,l;if(we(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Hs(e),h=u instanceof De?u:De.EMPTY_NODE,f=Nw(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Kf(r,Hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ie(n);if(u===".priority"){X(es(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=o0(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ge(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=o0(r,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=Cp(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return ra(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function Rc(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(we(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),m,null)}else{const m=Ie(n);if(!l.isCompleteForPath(n)&&es(n)>1)return e;const _=Ge(n),k=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=h.updatePriority(l.getNode(),k):u=h.updateChild(l.getNode(),m,k,_,Mw,null)}const f=Cw(e,u,l.isFullyInitialized()||we(n),h.filtersNodes()),p=new Rp(s,f,i);return Dw(t,f,n,s,p,a)}function Yf(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new Rp(s,e,i);if(we(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ra(e,u,!0,t.filter.filtersNodes());else{const f=Ie(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ra(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ge(n),m=a.getNode().getImmediateChild(f);let _;if(we(p))_=r;else{const T=h.getCompleteChild(f);T!=null?hw(p)===".priority"&&T.getChild(dw(p)).isEmpty()?_=T:_=T.updateChild(p,r):_=De.EMPTY_NODE}if(m.equals(_))l=e;else{const T=t.filter.updateChild(a.getNode(),f,_,p,h,o);l=ra(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function a0(t,e){return t.eventCache.isCompleteForChild(e)}function UM(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=gt(n,l);a0(e,Ie(h))&&(a=Yf(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=gt(n,l);a0(e,Ie(h))||(a=Yf(t,a,h,u,s,i,o))}),a}function l0(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Qf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;we(n)?u=r:u=new qe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=l0(t,m,p);l=Rc(t,l,new Ye(f),_,s,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),T=l0(t,_,p);l=Rc(t,l,new Ye(f),T,s,i,o,a)}}),l}function BM(t,e,n,r,s,i,o){if(Cc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(we(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(we(n)){let u=new qe(null);return l.getNode().forEachChild(Ri,(h,f)=>{u=u.set(new Ye(h),f)}),Qf(t,e,n,u,s,i,a,o)}else return e}else{let u=new qe(null);return r.foreach((h,f)=>{const p=gt(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),Qf(t,e,n,u,s,i,a,o)}}function jM(t,e,n,r,s){const i=e.serverCache,o=Cw(e,i.getNode(),i.isFullyInitialized()||we(n),i.isFiltered());return Dw(t,o,n,r,Mw,s)}function HM(t,e,n,r,s,i){let o;if(Cc(r,n)!=null)return e;{const a=new Rp(r,e,s),l=e.eventCache.getNode();let u;if(we(n)||Ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Kf(r,Hs(e));else{const f=e.serverCache.getNode();X(f instanceof De,"serverChildren would be complete if leaf node"),h=Nw(r,f)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Ie(n);let f=Cp(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,Ge(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,De.EMPTY_NODE,Ge(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kf(r,Hs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Cc(r,Ue())!=null,ra(e,u,o,t.filter.filtersNodes())}}function $M(t,e){const n=Hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function c0(t,e,n,r){e.type===Wn.MERGE&&e.source.queryId!==null&&(X(Hs(t.viewCache_),"We should always have a full cache before handling merges"),X(qf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=VM(t.processor_,s,e,n,r);return LM(t.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,zM(t,i.changes,i.viewCache.eventCache.getNode())}function zM(t,e,n,r){const s=t.eventRegistrations_;return _M(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u0;function qM(t){X(!u0,"__referenceConstructor has already been defined"),u0=t}function Sp(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return X(i!=null,"SyncTree gave us an op for an invalid query."),c0(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(c0(o,e,n,r));return i}}function Pp(t,e){let n=null;for(const r of t.views.values())n=n||$M(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0;function WM(t){X(!h0,"__referenceConstructor has already been defined"),h0=t}class f0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=xM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function GM(t,e,n,r,s){return wM(t.pendingWriteTree_,e,n,r,s),s?au(t,new js(Tw(),e,n)):[]}function hi(t,e,n=!1){const r=TM(t.pendingWriteTree_,e);if(bM(t.pendingWriteTree_,e)){let i=new qe(null);return r.snap!=null?i=i.set(Ue(),!0):vn(r.children,o=>{i=i.set(new Ye(o),!0)}),au(t,new Ac(r.path,i,n))}else return[]}function ou(t,e,n){return au(t,new js(bw(),e,n))}function KM(t,e,n){const r=qe.fromObject(n);return au(t,new wa(bw(),e,r))}function YM(t,e,n,r){const s=Uw(t,r);if(s!=null){const i=Bw(s),o=i.path,a=i.queryId,l=gn(o,e),u=new js(Iw(a),l,n);return jw(t,o,u)}else return[]}function QM(t,e,n,r){const s=Uw(t,r);if(s){const i=Bw(s),o=i.path,a=i.queryId,l=gn(o,e),u=qe.fromObject(n),h=new wa(Iw(a),l,u);return jw(t,o,h)}else return[]}function Lw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=gn(o,e),u=Pp(a,l);if(u)return u});return kw(s,e,i,n,!0)}function au(t,e){return Vw(e,t.syncPointTree_,null,Sw(t.pendingWriteTree_,Ue()))}function Vw(t,e,n,r){if(we(t.path))return Fw(t,e,n,r);{const s=e.get(Ue());n==null&&s!=null&&(n=Pp(s,Ue()));let i=[];const o=Ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=xw(r,o);i=i.concat(Vw(a,l,u,h))}return s&&(i=i.concat(Sp(s,t,r,n))),i}}function Fw(t,e,n,r){const s=e.get(Ue());n==null&&s!=null&&(n=Pp(s,Ue()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=xw(r,o),h=t.operationForChild(o);h&&(i=i.concat(Fw(h,a,l,u)))}),s&&(i=i.concat(Sp(s,t,r,n))),i}function Uw(t,e){return t.tagToQueryMap.get(e)}function Bw(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function jw(t,e,n){const r=t.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const s=Sw(t.pendingWriteTree_,e);return Sp(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kp(n)}node(){return this.node_}}class Np{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=gt(this.path_,e);return new Np(this.syncTree_,n)}node(){return Lw(this.syncTree_,this.path_)}}const XM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d0=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZM(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},ZM=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const s=e.node();if(X(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},eD=function(t,e,n,r){return xp(e,new Np(n,t),r)},tD=function(t,e,n){return xp(t,new kp(e),n)};function xp(t,e,n){const r=t.getPriority().val(),s=d0(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=d0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new dt(a,jt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new dt(s))),o.forEachChild(zt,(a,l)=>{const u=xp(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mp(t,e){let n=e instanceof Ye?e:new Ye(e),r=t,s=Ie(n);for(;s!==null;){const i=Fi(r.node.children,s)||{children:{},childCount:0};r=new Op(s,r,i),n=Ge(n),s=Ie(n)}return r}function ro(t){return t.node.value}function Hw(t,e){t.node.value=e,Xf(t)}function $w(t){return t.node.childCount>0}function nD(t){return ro(t)===void 0&&!$w(t)}function lu(t,e){vn(t.node.children,(n,r)=>{e(new Op(n,t,r))})}function zw(t,e,n,r){n&&e(t),lu(t,s=>{zw(s,e,!0)})}function rD(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ha(t){return new Ye(t.parent===null?t.name:Ha(t.parent)+"/"+t.name)}function Xf(t){t.parent!==null&&sD(t.parent,t.name,t)}function sD(t,e,n){const r=nD(n),s=Ir(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Xf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Xf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/[\[\].#$\/\u0000-\u001F\u007F]/,oD=/[\[\].#$\u0000-\u001F\u007F]/,Ah=10*1024*1024,qw=function(t){return typeof t=="string"&&t.length!==0&&!iD.test(t)},aD=function(t){return typeof t=="string"&&t.length!==0&&!oD.test(t)},lD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),aD(t)},Ww=function(t,e,n){const r=n instanceof Ye?new j5(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(r));if(typeof e=="function")throw new Error(t+"contains a function "+Es(r)+" with contents = "+e.toString());if(qE(e))throw new Error(t+"contains "+e.toString()+" "+Es(r));if(typeof e=="string"&&e.length>Ah/3&&ru(e)>Ah)throw new Error(t+"contains a string greater than "+Ah+" utf8 bytes "+Es(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(vn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!qw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);H5(r,o),Ww(t,a,r),$5(r)}),s&&i)throw new Error(t+' contains ".value" child '+Es(r)+" in addition to actual children.")}},cD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lD(n))throw new Error(TN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hD(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!pw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ys(t,e,n){hD(t,n),fD(t,r=>In(r,e)||In(e,r))}function fD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(dD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ta&&Bt("event: "+n.toString()),Ba(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="repo_interrupt",mD=25;class gD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ic(),this.transactionQueueTree_=new Op,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _D(t,e,n){if(t.stats_=Ep(t.repoInfo_),t.forceRestClient_||h5())t.server_=new bc(t.repoInfo_,(r,s,i,o)=>{p0(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>m0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dr(t.repoInfo_,e,(r,s,i,o)=>{p0(t,r,s,i,o)},r=>{m0(t,r)},r=>{vD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_5(t.repoInfo_,()=>new gM(t.stats_,t.server_)),t.infoData_=new hM,t.infoSyncTree_=new f0({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ou(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dp(t,"connected",!1),t.serverSyncTree_=new f0({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Ys(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function yD(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gw(t){return XM({timestamp:yD(t)})}function p0(t,e,n,r,s){t.dataUpdateCount++;const i=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=pc(n,u=>jt(u));o=QM(t.serverSyncTree_,i,l,s)}else{const l=jt(n);o=YM(t.serverSyncTree_,i,l,s)}else if(r){const l=pc(n,u=>jt(u));o=KM(t.serverSyncTree_,i,l)}else{const l=jt(n);o=ou(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Vp(t,i)),Ys(t.eventQueue_,a,o)}function m0(t,e){Dp(t,"connected",e),e===!1&&wD(t)}function vD(t,e){vn(e,(n,r)=>{Dp(t,n,r)})}function Dp(t,e,n){const r=new Ye("/.info/"+e),s=jt(n);t.infoData_.updateSnapshot(r,s);const i=ou(t.infoSyncTree_,r,s);Ys(t.eventQueue_,r,i)}function ED(t){return t.nextWriteId_++}function wD(t){Kw(t,"onDisconnectEvents");const e=Gw(t),n=Ic();zf(t.onDisconnect_,Ue(),(s,i)=>{const o=eD(s,i,t.serverSyncTree_,e);ww(n,s,o)});let r=[];zf(n,Ue(),(s,i)=>{r=r.concat(ou(t.serverSyncTree_,s,i));const o=AD(t,s);Vp(t,o)}),t.onDisconnect_=Ic(),Ys(t.eventQueue_,Ue(),r)}function TD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pD)}function Kw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Bt(n,...e)}function Yw(t,e,n){return Lw(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function Lp(t,e=t.transactionQueueTree_){if(e||cu(t,e),ro(e)){const n=Xw(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&bD(t,Ha(e),n)}else $w(e)&&lu(e,n=>{Lp(t,n)})}function bD(t,e,n){const r=n.map(u=>u.currentWriteId),s=Yw(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=gn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Kw(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(hi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();cu(t,Mp(t.transactionQueueTree_,e)),Lp(t,t.transactionQueueTree_),Ys(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Ba(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ln("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Vp(t,e)}},o)}function Vp(t,e){const n=Qw(t,e),r=Ha(n),s=Xw(t,n);return ID(t,s,r),r}function ID(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=gn(n,l.path);let h=!1,f;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mD)h=!0,f="maxretry",s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else{const p=Yw(t,l.path,o);l.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){Ww("transaction failed: Data returned ",m,l.path);let _=jt(m);typeof m=="object"&&m!=null&&Ir(m,".priority")||(_=_.updatePriority(p.getPriority()));const k=l.currentWriteId,N=Gw(t),S=tD(_,p,N);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=ED(t),o.splice(o.indexOf(k),1),s=s.concat(GM(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(hi(t.serverSyncTree_,k,!0))}else h=!0,f="nodata",s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0))}Ys(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}cu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ba(r[a]);Lp(t,t.transactionQueueTree_)}function Qw(t,e){let n,r=t.transactionQueueTree_;for(n=Ie(e);n!==null&&ro(r)===void 0;)r=Mp(r,n),e=Ge(e),n=Ie(e);return r}function Xw(t,e){const n=[];return Jw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Jw(t,e,n){const r=ro(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);lu(e,s=>{Jw(t,s,n)})}function cu(t,e){const n=ro(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Hw(e,n.length>0?n:void 0)}lu(e,r=>{cu(t,r)})}function AD(t,e){const n=Ha(Qw(t,e)),r=Mp(t.transactionQueueTree_,e);return rD(r,s=>{Ch(t,s)}),Ch(t,r),zw(r,s=>{Ch(t,s)}),n}function Ch(t,e){const n=ro(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Hw(e,void 0):n.length=i+1,Ys(t.eventQueue_,Ha(e),s);for(let o=0;o<r.length;o++)Ba(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function RD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ln(`Invalid query segment '${n}' in query '${t}'`)}return e}const g0=function(t,e){const n=SD(t),r=n.namespace;n.domain==="firebase.com"&&Us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||r5();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new p5(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ye(n.pathString)}},SD=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=CD(t.substring(h,f)));const p=RD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return we(this._path)?null:hw(this._path)}get ref(){return new so(this._repo,this._path)}get _queryIdentifier(){const e=t0(this._queryParams),n=yp(e);return n==="{}"?"default":n}get _queryObject(){return t0(this._queryParams)}isEqual(e){if(e=Xn(e),!(e instanceof Fp))return!1;const n=this._repo===e._repo,r=pw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+B5(this._path)}}class so extends Fp{constructor(e,n){super(e,n,new Ip,!1)}get parent(){const e=dw(this._path);return e===null?null:new so(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}qM(so);WM(so);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="FIREBASE_DATABASE_EMULATOR_HOST",Jf={};let kD=!1;function ND(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=g0(i,s),a=o.repoInfo,l;typeof process<"u"&&Ly&&(l=Ly[PD]),l?(i=`http://${l}?ns=${a.namespace}`,o=g0(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new d5(t.name,t.options,e);cD("Invalid Firebase Database URL",o),we(o.path)||Us("Database URL must point to the root of a Firebase Database (not including a child path).");const h=OD(a,t,u,new f5(t.name,n));return new MD(h,t)}function xD(t,e){const n=Jf[e];(!n||n[t.key]!==t)&&Us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TD(t),delete n[t.key]}function OD(t,e,n,r){let s=Jf[e.name];s||(s={},Jf[e.name]=s);let i=s[t.toURLString()];return i&&Us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new gD(t,kD,n,r),s[t.toURLString()]=i,i}class MD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_D(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new so(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Us("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){XO(to),Jn(new xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ND(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),an(Vy,Fy,t),an(Vy,Fy,"esm2017")}dr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DD();var _0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs,Zw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function w(){}w.prototype=E.prototype,b.D=E.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(C,x,P){for(var I=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)I[pe-2]=arguments[pe];return E.prototype[x].apply(C,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,w){w||(w=0);var C=Array(16);if(typeof E=="string")for(var x=0;16>x;++x)C[x]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(x=0;16>x;++x)C[x]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=b.g[0],w=b.g[1],x=b.g[2];var P=b.g[3],I=E+(P^w&(x^P))+C[0]+3614090360&4294967295;E=w+(I<<7&4294967295|I>>>25),I=P+(x^E&(w^x))+C[1]+3905402710&4294967295,P=E+(I<<12&4294967295|I>>>20),I=x+(w^P&(E^w))+C[2]+606105819&4294967295,x=P+(I<<17&4294967295|I>>>15),I=w+(E^x&(P^E))+C[3]+3250441966&4294967295,w=x+(I<<22&4294967295|I>>>10),I=E+(P^w&(x^P))+C[4]+4118548399&4294967295,E=w+(I<<7&4294967295|I>>>25),I=P+(x^E&(w^x))+C[5]+1200080426&4294967295,P=E+(I<<12&4294967295|I>>>20),I=x+(w^P&(E^w))+C[6]+2821735955&4294967295,x=P+(I<<17&4294967295|I>>>15),I=w+(E^x&(P^E))+C[7]+4249261313&4294967295,w=x+(I<<22&4294967295|I>>>10),I=E+(P^w&(x^P))+C[8]+1770035416&4294967295,E=w+(I<<7&4294967295|I>>>25),I=P+(x^E&(w^x))+C[9]+2336552879&4294967295,P=E+(I<<12&4294967295|I>>>20),I=x+(w^P&(E^w))+C[10]+4294925233&4294967295,x=P+(I<<17&4294967295|I>>>15),I=w+(E^x&(P^E))+C[11]+2304563134&4294967295,w=x+(I<<22&4294967295|I>>>10),I=E+(P^w&(x^P))+C[12]+1804603682&4294967295,E=w+(I<<7&4294967295|I>>>25),I=P+(x^E&(w^x))+C[13]+4254626195&4294967295,P=E+(I<<12&4294967295|I>>>20),I=x+(w^P&(E^w))+C[14]+2792965006&4294967295,x=P+(I<<17&4294967295|I>>>15),I=w+(E^x&(P^E))+C[15]+1236535329&4294967295,w=x+(I<<22&4294967295|I>>>10),I=E+(x^P&(w^x))+C[1]+4129170786&4294967295,E=w+(I<<5&4294967295|I>>>27),I=P+(w^x&(E^w))+C[6]+3225465664&4294967295,P=E+(I<<9&4294967295|I>>>23),I=x+(E^w&(P^E))+C[11]+643717713&4294967295,x=P+(I<<14&4294967295|I>>>18),I=w+(P^E&(x^P))+C[0]+3921069994&4294967295,w=x+(I<<20&4294967295|I>>>12),I=E+(x^P&(w^x))+C[5]+3593408605&4294967295,E=w+(I<<5&4294967295|I>>>27),I=P+(w^x&(E^w))+C[10]+38016083&4294967295,P=E+(I<<9&4294967295|I>>>23),I=x+(E^w&(P^E))+C[15]+3634488961&4294967295,x=P+(I<<14&4294967295|I>>>18),I=w+(P^E&(x^P))+C[4]+3889429448&4294967295,w=x+(I<<20&4294967295|I>>>12),I=E+(x^P&(w^x))+C[9]+568446438&4294967295,E=w+(I<<5&4294967295|I>>>27),I=P+(w^x&(E^w))+C[14]+3275163606&4294967295,P=E+(I<<9&4294967295|I>>>23),I=x+(E^w&(P^E))+C[3]+4107603335&4294967295,x=P+(I<<14&4294967295|I>>>18),I=w+(P^E&(x^P))+C[8]+1163531501&4294967295,w=x+(I<<20&4294967295|I>>>12),I=E+(x^P&(w^x))+C[13]+2850285829&4294967295,E=w+(I<<5&4294967295|I>>>27),I=P+(w^x&(E^w))+C[2]+4243563512&4294967295,P=E+(I<<9&4294967295|I>>>23),I=x+(E^w&(P^E))+C[7]+1735328473&4294967295,x=P+(I<<14&4294967295|I>>>18),I=w+(P^E&(x^P))+C[12]+2368359562&4294967295,w=x+(I<<20&4294967295|I>>>12),I=E+(w^x^P)+C[5]+4294588738&4294967295,E=w+(I<<4&4294967295|I>>>28),I=P+(E^w^x)+C[8]+2272392833&4294967295,P=E+(I<<11&4294967295|I>>>21),I=x+(P^E^w)+C[11]+1839030562&4294967295,x=P+(I<<16&4294967295|I>>>16),I=w+(x^P^E)+C[14]+4259657740&4294967295,w=x+(I<<23&4294967295|I>>>9),I=E+(w^x^P)+C[1]+2763975236&4294967295,E=w+(I<<4&4294967295|I>>>28),I=P+(E^w^x)+C[4]+1272893353&4294967295,P=E+(I<<11&4294967295|I>>>21),I=x+(P^E^w)+C[7]+4139469664&4294967295,x=P+(I<<16&4294967295|I>>>16),I=w+(x^P^E)+C[10]+3200236656&4294967295,w=x+(I<<23&4294967295|I>>>9),I=E+(w^x^P)+C[13]+681279174&4294967295,E=w+(I<<4&4294967295|I>>>28),I=P+(E^w^x)+C[0]+3936430074&4294967295,P=E+(I<<11&4294967295|I>>>21),I=x+(P^E^w)+C[3]+3572445317&4294967295,x=P+(I<<16&4294967295|I>>>16),I=w+(x^P^E)+C[6]+76029189&4294967295,w=x+(I<<23&4294967295|I>>>9),I=E+(w^x^P)+C[9]+3654602809&4294967295,E=w+(I<<4&4294967295|I>>>28),I=P+(E^w^x)+C[12]+3873151461&4294967295,P=E+(I<<11&4294967295|I>>>21),I=x+(P^E^w)+C[15]+530742520&4294967295,x=P+(I<<16&4294967295|I>>>16),I=w+(x^P^E)+C[2]+3299628645&4294967295,w=x+(I<<23&4294967295|I>>>9),I=E+(x^(w|~P))+C[0]+4096336452&4294967295,E=w+(I<<6&4294967295|I>>>26),I=P+(w^(E|~x))+C[7]+1126891415&4294967295,P=E+(I<<10&4294967295|I>>>22),I=x+(E^(P|~w))+C[14]+2878612391&4294967295,x=P+(I<<15&4294967295|I>>>17),I=w+(P^(x|~E))+C[5]+4237533241&4294967295,w=x+(I<<21&4294967295|I>>>11),I=E+(x^(w|~P))+C[12]+1700485571&4294967295,E=w+(I<<6&4294967295|I>>>26),I=P+(w^(E|~x))+C[3]+2399980690&4294967295,P=E+(I<<10&4294967295|I>>>22),I=x+(E^(P|~w))+C[10]+4293915773&4294967295,x=P+(I<<15&4294967295|I>>>17),I=w+(P^(x|~E))+C[1]+2240044497&4294967295,w=x+(I<<21&4294967295|I>>>11),I=E+(x^(w|~P))+C[8]+1873313359&4294967295,E=w+(I<<6&4294967295|I>>>26),I=P+(w^(E|~x))+C[15]+4264355552&4294967295,P=E+(I<<10&4294967295|I>>>22),I=x+(E^(P|~w))+C[6]+2734768916&4294967295,x=P+(I<<15&4294967295|I>>>17),I=w+(P^(x|~E))+C[13]+1309151649&4294967295,w=x+(I<<21&4294967295|I>>>11),I=E+(x^(w|~P))+C[4]+4149444226&4294967295,E=w+(I<<6&4294967295|I>>>26),I=P+(w^(E|~x))+C[11]+3174756917&4294967295,P=E+(I<<10&4294967295|I>>>22),I=x+(E^(P|~w))+C[2]+718787259&4294967295,x=P+(I<<15&4294967295|I>>>17),I=w+(P^(x|~E))+C[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+x&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var w=E-this.blockSize,C=this.B,x=this.h,P=0;P<E;){if(x==0)for(;P<=w;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<E;)if(C[x++]=b.charCodeAt(P++),x==this.blockSize){s(this,C),x=0;break}}else for(;P<E;)if(C[x++]=b[P++],x==this.blockSize){s(this,C),x=0;break}}this.h=x,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var w=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=w&255,w/=256;for(this.u(b),b=Array(16),E=w=0;4>E;++E)for(var C=0;32>C;C+=8)b[w++]=this.g[E]>>>C&255;return b};function i(b,E){var w=a;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=E(b)}function o(b,E){this.h=E;for(var w=[],C=!0,x=b.length-1;0<=x;x--){var P=b[x]|0;C&&P==E||(w[x]=P,C=!1)}this.g=w}var a={};function l(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return k(u(-b));for(var E=[],w=1,C=0;b>=w;C++)E[C]=b/w|0,w*=4294967296;return new o(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return k(h(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(E,8)),C=f,x=0;x<b.length;x+=8){var P=Math.min(8,b.length-x),I=parseInt(b.substring(x,x+P),E);8>P?(P=u(Math.pow(E,P)),C=C.j(P).add(u(I))):(C=C.j(w),C=C.add(u(I)))}return C}var f=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(T(this))return-k(this).m();for(var b=0,E=1,w=0;w<this.g.length;w++){var C=this.i(w);b+=(0<=C?C:4294967296+C)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(_(this))return"0";if(T(this))return"-"+k(this).toString(b);for(var E=u(Math.pow(b,6)),w=this,C="";;){var x=A(w,E).g;w=N(w,x.j(E));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=x,_(w))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function _(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function T(b){return b.h==-1}t.l=function(b){return b=N(this,b),T(b)?-1:_(b)?0:1};function k(b){for(var E=b.g.length,w=[],C=0;C<E;C++)w[C]=~b.g[C];return new o(w,~b.h).add(p)}t.abs=function(){return T(this)?k(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],C=0,x=0;x<=E;x++){var P=C+(this.i(x)&65535)+(b.i(x)&65535),I=(P>>>16)+(this.i(x)>>>16)+(b.i(x)>>>16);C=I>>>16,P&=65535,I&=65535,w[x]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function N(b,E){return b.add(k(E))}t.j=function(b){if(_(this)||_(b))return f;if(T(this))return T(b)?k(this).j(k(b)):k(k(this).j(b));if(T(b))return k(this.j(k(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,w=[],C=0;C<2*E;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<b.g.length;x++){var P=this.i(C)>>>16,I=this.i(C)&65535,pe=b.i(x)>>>16,ve=b.i(x)&65535;w[2*C+2*x]+=I*ve,S(w,2*C+2*x),w[2*C+2*x+1]+=P*ve,S(w,2*C+2*x+1),w[2*C+2*x+1]+=I*pe,S(w,2*C+2*x+1),w[2*C+2*x+2]+=P*pe,S(w,2*C+2*x+2)}for(C=0;C<E;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=E;C<2*E;C++)w[C]=0;return new o(w,0)};function S(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function y(b,E){this.g=b,this.h=E}function A(b,E){if(_(E))throw Error("division by zero");if(_(b))return new y(f,f);if(T(b))return E=A(k(b),E),new y(k(E.g),k(E.h));if(T(E))return E=A(b,k(E)),new y(k(E.g),E.h);if(30<b.g.length){if(T(b)||T(E))throw Error("slowDivide_ only works with positive integers.");for(var w=p,C=E;0>=C.l(b);)w=M(w),C=M(C);var x=V(w,1),P=V(C,1);for(C=V(C,2),w=V(w,2);!_(C);){var I=P.add(C);0>=I.l(b)&&(x=x.add(w),P=I),C=V(C,1),w=V(w,1)}return E=N(b,x.j(E)),new y(x,E)}for(x=f;0<=b.l(E);){for(w=Math.max(1,Math.floor(b.m()/E.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=u(w),I=P.j(E);T(I)||0<I.l(b);)w-=C,P=u(w),I=P.j(E);_(P)&&(P=p),x=x.add(P),b=N(b,I)}return new y(x,b)}t.A=function(b){return A(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],C=0;C<E;C++)w[C]=this.i(C)&b.i(C);return new o(w,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],C=0;C<E;C++)w[C]=this.i(C)|b.i(C);return new o(w,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],C=0;C<E;C++)w[C]=this.i(C)^b.i(C);return new o(w,this.h^b.h)};function M(b){for(var E=b.g.length+1,w=[],C=0;C<E;C++)w[C]=b.i(C)<<1|b.i(C-1)>>>31;return new o(w,b.h)}function V(b,E){var w=E>>5;E%=32;for(var C=b.g.length-w,x=[],P=0;P<C;P++)x[P]=0<E?b.i(P+w)>>>E|b.i(P+w+1)<<32-E:b.i(P+w);return new o(x,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xs=o}).apply(typeof _0<"u"?_0:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eT,Uo,tT,Fl,Zf,nT,rT,sT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,g){return c==Array.prototype||c==Object.prototype||(c[d]=g.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var d=0;d<c.length;++d){var g=c[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],d=d(v),d!=v&&d!=null&&e(g,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var g=0,v=!1,D={next:function(){if(!v&&g<c.length){var F=g++;return{value:d(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,g){return c.call.apply(c.bind,arguments)}function f(c,d,g){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),c.apply(d,D)}}return function(){return c.apply(d,arguments)}}function p(c,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(c,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function _(c,d){function g(){}g.prototype=d.prototype,c.aa=d.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(v,D,F){for(var Y=Array(arguments.length-2),je=2;je<arguments.length;je++)Y[je-2]=arguments[je];return d.prototype[D].apply(v,Y)}}function T(c){const d=c.length;if(0<d){const g=Array(d);for(let v=0;v<d;v++)g[v]=c[v];return g}return[]}function k(c,d){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(l(v)){const D=c.length||0,F=v.length||0;c.length=D+F;for(let Y=0;Y<F;Y++)c[D+Y]=v[Y]}else c.push(v)}}class N{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function S(c){return/^[\s\xa0]*$/.test(c)}function y(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function A(c){return A[" "](c),c}A[" "]=function(){};var M=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function V(c,d,g){for(const v in c)d.call(g,c[v],v,c)}function b(c,d){for(const g in c)d.call(void 0,c[g],g,c)}function E(c){const d={};for(const g in c)d[g]=c[g];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,d){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let F=0;F<w.length;F++)g=w[F],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function x(c){var d=1;c=c.split(":");const g=[];for(;0<d&&c.length;)g.push(c.shift()),d--;return c.length&&g.push(c.join(":")),g}function P(c){a.setTimeout(()=>{throw c},0)}function I(){var c=Le;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class pe{constructor(){this.h=this.g=null}add(d,g){const v=ve.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var ve=new N(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let me,te=!1,Le=new pe,Wt=()=>{const c=a.Promise.resolve(void 0);me=()=>{c.then(hn)}};var hn=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(g){P(g)}var d=ve;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}te=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var Ar=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return c})();function nn(c,d){if(Xe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(M){e:{try{A(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=c.fromElement:g=="mouseout"&&(d=c.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Jt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&nn.aa.h.call(this)}}_(nn,Xe);var Jt={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(c,d,g,v,D){this.listener=c,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=D,this.key=++ee,this.da=this.fa=!1}function oe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _e(c){this.src=c,this.g={},this.h=0}_e.prototype.add=function(c,d,g,v,D){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Y=R(c,d,v,D);return-1<Y?(d=c[Y],g||(d.fa=!1)):(d=new J(d,this.src,F,!!v,D),d.fa=g,c.push(d)),d};function Fe(c,d){var g=d.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=D)&&Array.prototype.splice.call(v,D,1),F&&(oe(d),c.g[g].length==0&&(delete c.g[g],c.h--))}}function R(c,d,g,v){for(var D=0;D<c.length;++D){var F=c[D];if(!F.da&&F.listener==d&&F.capture==!!g&&F.ha==v)return D}return-1}var O="closure_lm_"+(1e6*Math.random()|0),L={};function j(c,d,g,v,D){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(c,d[F],g,v,D);return null}return g=ae(g),c&&c[B]?c.K(d,g,u(v)?!!v.capture:!1,D):U(c,d,g,!1,v,D)}function U(c,d,g,v,D,F){if(!d)throw Error("Invalid event type");var Y=u(D)?!!D.capture:!!D,je=ce(c);if(je||(c[O]=je=new _e(c)),g=je.add(d,g,v,Y,F),g.proxy)return g;if(v=H(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)Ar||(D=Y),D===void 0&&(D=!1),c.addEventListener(d.toString(),v,D);else if(c.attachEvent)c.attachEvent(G(d.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function H(){function c(g){return d.call(c.src,c.listener,g)}const d=z;return c}function Q(c,d,g,v,D){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(c,d[F],g,v,D);else v=u(v)?!!v.capture:!!v,g=ae(g),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],g=R(F,g,v,D),-1<g&&(oe(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=ce(c))&&(d=c.g[d.toString()],c=-1,d&&(c=R(d,g,v,D)),(g=-1<c?d[c]:null)&&K(g))}function K(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])Fe(d.i,c);else{var g=c.type,v=c.proxy;d.removeEventListener?d.removeEventListener(g,v,c.capture):d.detachEvent?d.detachEvent(G(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=ce(d))?(Fe(g,c),g.h==0&&(g.src=null,d[O]=null)):oe(c)}}}function G(c){return c in L?L[c]:L[c]="on"+c}function z(c,d){if(c.da)c=!0;else{d=new nn(d,this);var g=c.listener,v=c.ha||c.src;c.fa&&K(c),c=g.call(v,d)}return c}function ce(c){return c=c[O],c instanceof _e?c:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(c){return typeof c=="function"?c:(c[Z]||(c[Z]=function(d){return c.handleEvent(d)}),c[Z])}function se(){Qe.call(this),this.i=new _e(this),this.M=this,this.F=null}_(se,Qe),se.prototype[B]=!0,se.prototype.removeEventListener=function(c,d,g,v){Q(this,c,d,g,v)};function he(c,d){var g,v=c.F;if(v)for(g=[];v;v=v.F)g.push(v);if(c=c.M,v=d.type||d,typeof d=="string")d=new Xe(d,c);else if(d instanceof Xe)d.target=d.target||c;else{var D=d;d=new Xe(v,c),C(d,D)}if(D=!0,g)for(var F=g.length-1;0<=F;F--){var Y=d.g=g[F];D=ke(Y,v,!0,d)&&D}if(Y=d.g=c,D=ke(Y,v,!0,d)&&D,D=ke(Y,v,!1,d)&&D,g)for(F=0;F<g.length;F++)Y=d.g=g[F],D=ke(Y,v,!1,d)&&D}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var g=c.g[d],v=0;v<g.length;v++)oe(g[v]);delete c.g[d],c.h--}}this.F=null},se.prototype.K=function(c,d,g,v){return this.i.add(String(c),d,!1,g,v)},se.prototype.L=function(c,d,g,v){return this.i.add(String(c),d,!0,g,v)};function ke(c,d,g,v){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,F=0;F<d.length;++F){var Y=d[F];if(Y&&!Y.da&&Y.capture==g){var je=Y.listener,wt=Y.ha||Y.src;Y.fa&&Fe(c.i,Y),D=je.call(wt,v)!==!1&&D}}return D&&!v.defaultPrevented}function Se(c,d,g){if(typeof c=="function")g&&(c=p(c,g));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function vt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,vt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class ft extends Qe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(c){Qe.call(this),this.h=c,this.g={}}_(Et,Qe);var xt=[];function Cr(c){V(c.g,function(d,g){this.g.hasOwnProperty(g)&&K(d)},c),c.g={}}Et.prototype.N=function(){Et.aa.N.call(this),Cr(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qs=a.JSON.stringify,Gt=a.JSON.parse,fn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Xs(){}Xs.prototype.h=null;function co(c){return c.h||(c.h=c.i())}function Tm(){}var uo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bu(){Xe.call(this,"d")}_(bu,Xe);function Iu(){Xe.call(this,"c")}_(Iu,Xe);var ls={},bm=null;function Ka(){return bm=bm||new se}ls.La="serverreachability";function Im(c){Xe.call(this,ls.La,c)}_(Im,Xe);function ho(c){const d=Ka();he(d,new Im(d))}ls.STAT_EVENT="statevent";function Am(c,d){Xe.call(this,ls.STAT_EVENT,c),this.stat=d}_(Am,Xe);function Kt(c){const d=Ka();he(d,new Am(d,c))}ls.Ma="timingevent";function Cm(c,d){Xe.call(this,ls.Ma,c),this.size=d}_(Cm,Xe);function fo(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function po(){this.g=!0}po.prototype.xa=function(){this.g=!1};function pb(c,d,g,v,D,F){c.info(function(){if(c.g)if(F)for(var Y="",je=F.split("&"),wt=0;wt<je.length;wt++){var Pe=je[wt].split("=");if(1<Pe.length){var Ot=Pe[0];Pe=Pe[1];var Mt=Ot.split("_");Y=2<=Mt.length&&Mt[1]=="type"?Y+(Ot+"="+Pe+"&"):Y+(Ot+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+d+`
`+g+`
`+Y})}function mb(c,d,g,v,D,F,Y){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+d+`
`+g+`
`+F+" "+Y})}function Js(c,d,g,v){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+_b(c,g)+(v?" "+v:"")})}function gb(c,d){c.info(function(){return"TIMEOUT: "+d})}po.prototype.info=function(){};function _b(c,d){if(!c.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var v=g[c];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<D.length;Y++)D[Y]=""}}}}return Qs(g)}catch{return d}}var Ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Au;function Qa(){}_(Qa,Xs),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},Au=new Qa;function Rr(c,d,g,v){this.j=c,this.i=d,this.l=g,this.R=v||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sm}function Sm(){this.i=null,this.g="",this.h=!1}var Pm={},Cu={};function Ru(c,d,g){c.L=1,c.v=el(nr(d)),c.m=g,c.P=!0,km(c,null)}function km(c,d){c.F=Date.now(),Xa(c),c.A=nr(c.v);var g=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),zm(g.i,"t",v),c.C=0,g=c.j.J,c.h=new Sm,c.g=lg(c.j,g?d:null,!c.m),0<c.O&&(c.M=new ft(p(c.Y,c,c.g),c.O)),d=c.U,g=c.g,v=c.ca;var D="readystatechange";Array.isArray(D)||(D&&(xt[0]=D.toString()),D=xt);for(var F=0;F<D.length;F++){var Y=j(g,D[F],v||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),ho(),pb(c.i,c.u,c.A,c.l,c.R,c.m)}Rr.prototype.ca=function(c){c=c.target;const d=this.M;d&&rr(c)==3?d.j():this.Y(c)},Rr.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=rr(this.g);var d=this.g.Ba();const ti=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Xm(this.g)))){this.J||Mt!=4||d==7||(d==8||0>=ti?ho(3):ho(2)),Su(this);var g=this.g.Z();this.X=g;t:if(Nm(this)){var v=Xm(this.g);c="";var D=v.length,F=rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),mo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,c+=this.h.i.decode(v[d],{stream:!(F&&d==D-1)});v.length=0,this.h.g+=c,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,mb(this.i,this.u,this.A,this.l,this.R,Mt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var je,wt=this.g;if((je=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(je)){var Pe=je;break t}}Pe=null}if(g=Pe)Js(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pu(this,g);else{this.o=!1,this.s=3,Kt(12),cs(this),mo(this);break e}}if(this.P){g=!0;let wn;for(;!this.J&&this.C<Y.length;)if(wn=yb(this,Y),wn==Cu){Mt==4&&(this.s=4,Kt(14),g=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Pm){this.s=4,Kt(15),Js(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else Js(this.i,this.l,wn,null),Pu(this,wn);if(Nm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||Y.length!=0||this.h.h||(this.s=1,Kt(16),g=!1),this.o=this.o&&g,!g)Js(this.i,this.l,Y,"[Invalid Chunked Response]"),cs(this),mo(this);else if(0<Y.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Du(Ot),Ot.M=!0,Kt(11))}}else Js(this.i,this.l,Y,null),Pu(this,Y);Mt==4&&cs(this),this.o&&!this.J&&(Mt==4?sg(this.j,this):(this.o=!1,Xa(this)))}else Db(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),cs(this),mo(this)}}}catch{}finally{}};function Nm(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function yb(c,d){var g=c.C,v=d.indexOf(`
`,g);return v==-1?Cu:(g=Number(d.substring(g,v)),isNaN(g)?Pm:(v+=1,v+g>d.length?Cu:(d=d.slice(v,v+g),c.C=v+g,d)))}Rr.prototype.cancel=function(){this.J=!0,cs(this)};function Xa(c){c.S=Date.now()+c.I,xm(c,c.I)}function xm(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=fo(p(c.ba,c),d)}function Su(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Rr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(gb(this.i,this.A),this.L!=2&&(ho(),Kt(17)),cs(this),this.s=2,mo(this)):xm(this,this.S-c)};function mo(c){c.j.G==0||c.J||sg(c.j,c)}function cs(c){Su(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Cr(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Pu(c,d){try{var g=c.j;if(g.G!=0&&(g.g==c||ku(g.h,c))){if(!c.K&&ku(g.h,c)&&g.G==3){try{var v=g.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)ol(g),sl(g);else break e;Mu(g),Kt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=fo(p(g.Za,g),6e3));if(1>=Dm(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hs(g,11)}else if((c.K||g.g==c)&&ol(g),!S(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let Pe=D[d];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const Ot=Pe[3];Ot!=null&&(g.la=Ot,g.j.info("VER="+g.la));const Mt=Pe[4];Mt!=null&&(g.Aa=Mt,g.j.info("SVER="+g.Aa));const ti=Pe[5];ti!=null&&typeof ti=="number"&&0<ti&&(v=1.5*ti,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const wn=c.g;if(wn){const ll=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ll){var F=v.h;F.g||ll.indexOf("spdy")==-1&&ll.indexOf("quic")==-1&&ll.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Nu(F,F.h),F.h=null))}if(v.D){const Lu=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lu&&(v.ya=Lu,ze(v.I,v.D,Lu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var Y=c;if(v.qa=ag(v,v.J?v.ia:null,v.W),Y.K){Lm(v.h,Y);var je=Y,wt=v.L;wt&&(je.I=wt),je.B&&(Su(je),Xa(je)),v.g=Y}else ng(v);0<g.i.length&&il(g)}else Pe[0]!="stop"&&Pe[0]!="close"||hs(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?hs(g,7):Ou(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}ho(4)}catch{}}var vb=class{constructor(c,d){this.g=c,this.map=d}};function Om(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mm(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Dm(c){return c.h?1:c.g?c.g.size:0}function ku(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Nu(c,d){c.g?c.g.add(d):c.h=d}function Lm(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Om.prototype.cancel=function(){if(this.i=Vm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Vm(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const g of c.g.values())d=d.concat(g.D);return d}return T(c.i)}function Eb(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],g=c.length,v=0;v<g;v++)d.push(c[v]);return d}d=[],g=0;for(v in c)d[g++]=c[v];return d}function wb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var g=0;g<c;g++)d.push(g);return d}d=[],g=0;for(const v in c)d[g++]=v;return d}}}function Fm(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var g=wb(c),v=Eb(c),D=v.length,F=0;F<D;F++)d.call(void 0,v[F],g&&g[F],c)}var Um=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tb(c,d){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var v=c[g].indexOf("="),D=null;if(0<=v){var F=c[g].substring(0,v);D=c[g].substring(v+1)}else F=c[g];d(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function us(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof us){this.h=c.h,Ja(this,c.j),this.o=c.o,this.g=c.g,Za(this,c.s),this.l=c.l;var d=c.i,g=new yo;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Bm(this,g),this.m=c.m}else c&&(d=String(c).match(Um))?(this.h=!1,Ja(this,d[1]||"",!0),this.o=go(d[2]||""),this.g=go(d[3]||"",!0),Za(this,d[4]),this.l=go(d[5]||"",!0),Bm(this,d[6]||"",!0),this.m=go(d[7]||"")):(this.h=!1,this.i=new yo(null,this.h))}us.prototype.toString=function(){var c=[],d=this.j;d&&c.push(_o(d,jm,!0),":");var g=this.g;return(g||d=="file")&&(c.push("//"),(d=this.o)&&c.push(_o(d,jm,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(_o(g,g.charAt(0)=="/"?Ab:Ib,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",_o(g,Rb)),c.join("")};function nr(c){return new us(c)}function Ja(c,d,g){c.j=g?go(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Za(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Bm(c,d,g){d instanceof yo?(c.i=d,Sb(c.i,c.h)):(g||(d=_o(d,Cb)),c.i=new yo(d,c.h))}function ze(c,d,g){c.i.set(d,g)}function el(c){return ze(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function go(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function _o(c,d,g){return typeof c=="string"?(c=encodeURI(c).replace(d,bb),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function bb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jm=/[#\/\?@]/g,Ib=/[#\?:]/g,Ab=/[#\?]/g,Cb=/[#\?@]/g,Rb=/#/g;function yo(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Sr(c){c.g||(c.g=new Map,c.h=0,c.i&&Tb(c.i,function(d,g){c.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=yo.prototype,t.add=function(c,d){Sr(this),this.i=null,c=Zs(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(d),this.h+=1,this};function Hm(c,d){Sr(c),d=Zs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function $m(c,d){return Sr(c),d=Zs(c,d),c.g.has(d)}t.forEach=function(c,d){Sr(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(d,D,v,this)},this)},this)},t.na=function(){Sr(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let v=0;v<d.length;v++){const D=c[v];for(let F=0;F<D.length;F++)g.push(d[v])}return g},t.V=function(c){Sr(this);let d=[];if(typeof c=="string")$m(this,c)&&(d=d.concat(this.g.get(Zs(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)d=d.concat(c[g])}return d},t.set=function(c,d){return Sr(this),this.i=null,c=Zs(this,c),$m(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function zm(c,d,g){Hm(c,d),0<g.length&&(c.i=null,c.g.set(Zs(c,d),T(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var v=d[g];const F=encodeURIComponent(String(v)),Y=this.V(v);for(v=0;v<Y.length;v++){var D=F;Y[v]!==""&&(D+="="+encodeURIComponent(String(Y[v]))),c.push(D)}}return this.i=c.join("&")};function Zs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function Sb(c,d){d&&!c.j&&(Sr(c),c.i=null,c.g.forEach(function(g,v){var D=v.toLowerCase();v!=D&&(Hm(this,v),zm(this,D,g))},c)),c.j=d}function Pb(c,d){const g=new po;if(a.Image){const v=new Image;v.onload=m(Pr,g,"TestLoadImage: loaded",!0,d,v),v.onerror=m(Pr,g,"TestLoadImage: error",!1,d,v),v.onabort=m(Pr,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=m(Pr,g,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else d(!1)}function kb(c,d){const g=new po,v=new AbortController,D=setTimeout(()=>{v.abort(),Pr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(D),F.ok?Pr(g,"TestPingServer: ok",!0,d):Pr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Pr(g,"TestPingServer: error",!1,d)})}function Pr(c,d,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function Nb(){this.g=new fn}function xb(c,d,g){const v=g||"";try{Fm(c,function(D,F){let Y=D;u(D)&&(Y=Qs(D)),d.push(v+F+"="+encodeURIComponent(Y))})}catch(D){throw d.push(v+"type="+encodeURIComponent("_badmap")),D}}function tl(c){this.l=c.Ub||null,this.j=c.eb||!1}_(tl,Xs),tl.prototype.g=function(){return new nl(this.l,this.j)},tl.prototype.i=(function(c){return function(){return c}})({});function nl(c,d){se.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(nl,se),t=nl.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Eo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?vo(this):Eo(this),this.readyState==3&&qm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,vo(this))},t.Qa=function(c){this.g&&(this.response=c,vo(this))},t.ga=function(){this.g&&vo(this)};function vo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Eo(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=d.next();return c.join(`\r
`)};function Eo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wm(c){let d="";return V(c,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function xu(c,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=Wm(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):ze(c,d,g))}function et(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(et,se);var Ob=/^https?$/i,Mb=["POST","PUT"];t=et.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Au.g(),this.v=this.o?co(this.o):co(Au),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){Gm(this,F);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())g.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Mb,d,void 0))||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of g)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qm(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Gm(this,F)}};function Gm(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Km(c),rl(c)}function Km(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ym(this):this.bb())},t.bb=function(){Ym(this)};function Ym(c){if(c.h&&typeof o<"u"&&(!c.v[1]||rr(c)!=4||c.Z()!=2)){if(c.u&&rr(c)==4)Se(c.Ea,0,c);else if(he(c,"readystatechange"),rr(c)==4){c.h=!1;try{const Y=c.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=Y===0){var D=String(c.D).match(Um)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!Ob.test(D?D.toLowerCase():"")}g=v}if(g)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<rr(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Km(c)}}finally{rl(c)}}}}function rl(c,d){if(c.g){Qm(c);const g=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||he(c,"ready");try{g.onreadystatechange=v}catch{}}}function Qm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function rr(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Gt(d)}};function Xm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Db(c){const d={};c=(c.g&&2<=rr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(S(c[v]))continue;var g=x(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=d[D]||[];d[D]=F,F.push(g)}b(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wo(c,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||d}function Jm(c){this.Aa=0,this.i=[],this.j=new po,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wo("baseRetryDelayMs",5e3,c),this.cb=wo("retryDelaySeedMs",1e4,c),this.Wa=wo("forwardChannelMaxRetries",2,c),this.wa=wo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Om(c&&c.concurrentRequestLimit),this.Da=new Nb,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jm.prototype,t.la=8,t.G=1,t.connect=function(c,d,g,v){Kt(0),this.W=c,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=ag(this,null,this.W),il(this)};function Ou(c){if(Zm(c),c.G==3){var d=c.U++,g=nr(c.I);if(ze(g,"SID",c.K),ze(g,"RID",d),ze(g,"TYPE","terminate"),To(c,g),d=new Rr(c,c.j,d),d.L=2,d.v=el(nr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=lg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Xa(d)}og(c)}function sl(c){c.g&&(Du(c),c.g.cancel(),c.g=null)}function Zm(c){sl(c),c.u&&(a.clearTimeout(c.u),c.u=null),ol(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function il(c){if(!Mm(c.h)&&!c.s){c.s=!0;var d=c.Ga;me||Wt(),te||(me(),te=!0),Le.add(d,c),c.B=0}}function Lb(c,d){return Dm(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=fo(p(c.Ga,c,d),ig(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const D=new Rr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=E(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=tg(this,D,d),g=nr(this.I),ze(g,"RID",c),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),To(this,g),F&&(this.O?d="headers="+encodeURIComponent(String(Wm(F)))+"&"+d:this.m&&xu(g,this.m,F)),Nu(this.h,D),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",d),ze(g,"SID","null"),D.T=!0,Ru(D,g,null)):Ru(D,g,d),this.G=2}}else this.G==3&&(c?eg(this,c):this.i.length==0||Mm(this.h)||eg(this))};function eg(c,d){var g;d?g=d.l:g=c.U++;const v=nr(c.I);ze(v,"SID",c.K),ze(v,"RID",g),ze(v,"AID",c.T),To(c,v),c.m&&c.o&&xu(v,c.m,c.o),g=new Rr(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),d&&(c.i=d.D.concat(c.i)),d=tg(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Nu(c.h,g),Ru(g,v,d)}function To(c,d){c.H&&V(c.H,function(g,v){ze(d,v,g)}),c.l&&Fm({},function(g,v){ze(d,v,g)})}function tg(c,d,g){g=Math.min(c.i.length,g);var v=c.l?p(c.l.Na,c.l,c):null;e:{var D=c.i;let F=-1;for(;;){const Y=["count="+g];F==-1?0<g?(F=D[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let je=!0;for(let wt=0;wt<g;wt++){let Pe=D[wt].g;const Ot=D[wt].map;if(Pe-=F,0>Pe)F=Math.max(0,D[wt].g-100),je=!1;else try{xb(Ot,Y,"req"+Pe+"_")}catch{v&&v(Ot)}}if(je){v=Y.join("&");break e}}}return c=c.i.splice(0,g),d.D=c,v}function ng(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;me||Wt(),te||(me(),te=!0),Le.add(d,c),c.v=0}}function Mu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=fo(p(c.Fa,c),ig(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,rg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=fo(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kt(10),sl(this),rg(this))};function Du(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function rg(c){c.g=new Rr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=nr(c.qa);ze(d,"RID","rpc"),ze(d,"SID",c.K),ze(d,"AID",c.T),ze(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&ze(d,"TO",c.ja),ze(d,"TYPE","xmlhttp"),To(c,d),c.m&&c.o&&xu(d,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=el(nr(d)),g.m=null,g.P=!0,km(g,c)}t.Za=function(){this.C!=null&&(this.C=null,sl(this),Mu(this),Kt(19))};function ol(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function sg(c,d){var g=null;if(c.g==d){ol(c),Du(c),c.g=null;var v=2}else if(ku(c.h,d))g=d.D,Lm(c.h,d),v=1;else return;if(c.G!=0){if(d.o)if(v==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=c.B;v=Ka(),he(v,new Cm(v,g)),il(c)}else ng(c);else if(D=d.s,D==3||D==0&&0<d.X||!(v==1&&Lb(c,d)||v==2&&Mu(c)))switch(g&&0<g.length&&(d=c.h,d.i=d.i.concat(g)),D){case 1:hs(c,5);break;case 4:hs(c,10);break;case 3:hs(c,6);break;default:hs(c,2)}}}function ig(c,d){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*d}function hs(c,d){if(c.j.info("Error code "+d),d==2){var g=p(c.fb,c),v=c.Xa;const D=!v;v=new us(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ja(v,"https"),el(v),D?Pb(v.toString(),g):kb(v.toString(),g)}else Kt(2);c.G=0,c.l&&c.l.sa(d),og(c),Zm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))};function og(c){if(c.G=0,c.ka=[],c.l){const d=Vm(c.h);(d.length!=0||c.i.length!=0)&&(k(c.ka,d),k(c.ka,c.i),c.h.i.length=0,T(c.i),c.i.length=0),c.l.ra()}}function ag(c,d,g){var v=g instanceof us?nr(g):new us(g);if(v.g!="")d&&(v.g=d+"."+v.g),Za(v,v.s);else{var D=a.location;v=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var F=new us(null);v&&Ja(F,v),d&&(F.g=d),D&&Za(F,D),g&&(F.l=g),v=F}return g=c.D,d=c.ya,g&&d&&ze(v,g,d),ze(v,"VER",c.la),To(c,v),v}function lg(c,d,g){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new et(new tl({eb:g})):new et(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cg(){}t=cg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function al(){}al.prototype.g=function(c,d){return new rn(c,d)};function rn(c,d){se.call(this),this.g=new Jm(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!S(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new ei(this)}_(rn,se),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Ou(this.g)},rn.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=Qs(c),c=g);d.i.push(new vb(d.Ya++,c)),d.G==3&&il(d)},rn.prototype.N=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,rn.aa.N.call(this)};function ug(c){bu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const g in d){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}_(ug,bu);function hg(){Iu.call(this),this.status=1}_(hg,Iu);function ei(c){this.g=c}_(ei,cg),ei.prototype.ua=function(){he(this.g,"a")},ei.prototype.ta=function(c){he(this.g,new ug(c))},ei.prototype.sa=function(c){he(this.g,new hg)},ei.prototype.ra=function(){he(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,sT=function(){return new al},rT=function(){return Ka()},nT=ls,Zf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ya.NO_ERROR=0,Ya.TIMEOUT=8,Ya.HTTP_ERROR=6,Fl=Ya,Rm.COMPLETE="complete",tT=Rm,Tm.EventType=uo,uo.OPEN="a",uo.CLOSE="b",uo.ERROR="c",uo.MESSAGE="d",se.prototype.listen=se.prototype.K,Uo=Tm,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,eT=et}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const y0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new La("@firebase/firestore");function No(){return $s.logLevel}function ie(t,...e){if($s.logLevel<=Ee.DEBUG){const n=e.map(Up);$s.debug(`Firestore (${io}): ${t}`,...n)}}function vr(t,...e){if($s.logLevel<=Ee.ERROR){const n=e.map(Up);$s.error(`Firestore (${io}): ${t}`,...n)}}function ji(t,...e){if($s.logLevel<=Ee.WARN){const n=e.map(Up);$s.warn(`Firestore (${io}): ${t}`,...n)}}function Up(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function nt(t,e){t||ye()}function Ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends br{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ft.UNAUTHENTICATED)))}shutdown(){}}class VD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class FD{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){nt(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new iT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string"),new Ft(e)}}class UD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable((()=>n(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){nt(this.o===void 0);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(nt(typeof n.token=="string"),this.R=n.token,new jD(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$D(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ut(0,0))}static max(){return new ge(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Je extends Ta{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Je(n)}static emptyPath(){return new Je([])}}const qD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Ta{construct(e,n,r){return new $t(e,n,r)}static isValidIdentifier(e){return qD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Je.fromString(e))}static fromName(e){return new de(Je.fromString(e).popFirst(5))}static empty(){return new de(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Je(e.slice()))}}function WD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ts(s,de.empty(),e)}function GD(t){return new ts(t.readTime,t.key,-1)}class ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ts(ge.min(),de.empty(),-1)}static max(){return new ts(ge.max(),de.empty(),-1)}}function KD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==YD)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,r)=>{n(e)}))}static reject(e){return new $(((n,r)=>{r(e)}))}static waitFor(e){return new $(((n,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next((s=>s?$.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new $(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((h=>{o[u]=h,++a,a===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new $(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function XD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jp.oe=-1;function uu(t){return t==null}function Sc(t){return t===0&&1/t==-1/0}function JD(t){return typeof t=="number"&&Number.isInteger(t)&&!Sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function za(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,r,s,i){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E0(this.data.getIterator())}getIteratorFrom(e){return new E0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class E0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new Br([])}unionWith(e){let n=new kt($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Br(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new aT("Invalid base64 string: "+i):i}})(e);return new Nt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const ZD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(nt(!!t),typeof t=="string"){let e=0;const n=ZD.exec(t);if(nt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $p(t){const e=t.mapValue.fields.__previous_value__;return Hp(e)?$p(e):e}function ba(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={mapValue:{}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hp(t)?4:n9(t)?9007199254740991:t9(t)?10:11:ye()}function Zn(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ba(t).isEqual(ba(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ns(s.timestampValue),a=ns(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return zs(s.bytesValue).isEqual(zs(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),a=rt(i.doubleValue);return o===a?Sc(o)===Sc(a):isNaN(o)&&isNaN(a)}return!1})(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(v0(o)!==v0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zn(o[l],a[l])))return!1;return!0})(t,e);default:return ye()}}function Aa(t,e){return(t.values||[]).find((n=>Zn(n,e)))!==void 0}function $i(t,e){if(t===e)return 0;const n=qs(t),r=qs(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=rt(i.integerValue||i.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return w0(t.timestampValue,e.timestampValue);case 4:return w0(ba(t),ba(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return(function(i,o){const a=zs(i),l=zs(o);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ne(a[u],l[u]);if(h!==0)return h}return Ne(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Ne(rt(i.latitude),rt(o.latitude));return a!==0?a:Ne(rt(i.longitude),rt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return T0(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var a,l,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=Ne(((u=m?.values)===null||u===void 0?void 0:u.length)||0,((h=_?.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:T0(m,_)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Cl.mapValue&&o===Cl.mapValue)return 0;if(i===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=Ne(l[f],h[f]);if(p!==0)return p;const m=$i(a[l[f]],u[h[f]]);if(m!==0)return m}return Ne(l.length,h.length)})(t.mapValue,e.mapValue);default:throw ye()}}function w0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=ns(t),r=ns(e),s=Ne(n.seconds,r.seconds);return s!==0?s:Ne(n.nanos,r.nanos)}function T0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$i(n[s],r[s]);if(i)return i}return Ne(n.length,r.length)}function zi(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ns(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return zs(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return de.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ed(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ed(n.fields[o])}`;return s+"}"})(t.mapValue):ye()}function b0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function td(t){return!!t&&"integerValue"in t}function zp(t){return!!t&&"arrayValue"in t}function I0(t){return!!t&&"nullValue"in t}function A0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rh(t){return!!t&&"mapValue"in t}function t9(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return za(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ia(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n9(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ia(n)}setAll(e){let n=$t.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ia(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Rh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Rh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){za(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Bn(ia(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,ge.min(),ge.min(),ge.min(),Bn.empty(),0)}static newFoundDocument(e,n,r,s){return new Ht(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Ht(e,2,n,ge.min(),ge.min(),Bn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,ge.min(),ge.min(),Bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.position=e,this.inclusive=n}}function C0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function R0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function r9(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{}class lt extends lT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i9(e,n,r):n==="array-contains"?new l9(e,r):n==="in"?new c9(e,r):n==="not-in"?new u9(e,r):n==="array-contains-any"?new h9(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o9(e,r):new a9(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends lT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return cT(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cT(t){return t.op==="and"}function uT(t){return s9(t)&&cT(t)}function s9(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function nd(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+zi(t.value);if(uT(t))return t.filters.map((e=>nd(e))).join(",");{const e=t.filters.map((n=>nd(n))).join(",");return`${t.op}(${e})`}}function hT(t,e){return t instanceof lt?(function(r,s){return s instanceof lt&&r.op===s.op&&r.field.isEqual(s.field)&&Zn(r.value,s.value)})(t,e):t instanceof Mn?(function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&hT(o,s.filters[a])),!0):!1})(t,e):void ye()}function fT(t){return t instanceof lt?(function(n){return`${n.field.canonicalString()} ${n.op} ${zi(n.value)}`})(t):t instanceof Mn?(function(n){return n.op.toString()+" {"+n.getFilters().map(fT).join(" ,")+"}"})(t):"Filter"}class i9 extends lt{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class o9 extends lt{constructor(e,n){super(e,"in",n),this.keys=dT("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class a9 extends lt{constructor(e,n){super(e,"not-in",n),this.keys=dT("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function dT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>de.fromName(r.referenceValue)))}class l9 extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zp(n)&&Aa(n.arrayValue,this.value)}}class c9 extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class u9 extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class h9 extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Aa(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function S0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new f9(t,e,n,r,s,i,o)}function qp(t){const e=Ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>nd(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>zi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>zi(r))).join(",")),e.ue=n}return e.ue}function Wp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r9(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R0(t.startAt,e.startAt)&&R0(t.endAt,e.endAt)}function rd(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d9(t,e,n,r,s,i,o,a){return new oo(t,e,n,r,s,i,o,a)}function hu(t){return new oo(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pT(t){return t.collectionGroup!==null}function oa(t){const e=Ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new kt($t.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ca(i,r))})),n.has($t.keyField().canonicalString())||e.ce.push(new Ca($t.keyField(),r))}return e.ce}function Kn(t){const e=Ce(t);return e.le||(e.le=p9(e,oa(t))),e.le}function p9(t,e){if(t.limitType==="F")return S0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ca(s.field,i)}));const n=t.endAt?new Pc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pc(t.startAt.position,t.startAt.inclusive):null;return S0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e){const n=t.filters.concat([e]);return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function id(t,e,n){return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return Wp(Kn(t),Kn(e))&&t.limitType===e.limitType}function mT(t){return`${qp(Kn(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>fT(s))).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>zi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>zi(s))).join(",")),`Target(${r})`})(Kn(t))}; limitType=${t.limitType})`}function du(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of oa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,l){const u=C0(o,a,l);return o.inclusive?u<=0:u<0})(r.startAt,oa(r),s)||r.endAt&&!(function(o,a,l){const u=C0(o,a,l);return o.inclusive?u>=0:u>0})(r.endAt,oa(r),s))})(t,e)}function m9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gT(t){return(e,n)=>{let r=!1;for(const s of oa(t)){const i=g9(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function g9(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?$i(l,u):ye()})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){za(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return oT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _9=new it(de.comparator);function rs(){return _9}const _T=new it(de.comparator);function Bo(...t){let e=_T;for(const n of t)e=e.insert(n.key,n);return e}function y9(t){let e=_T;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Rs(){return aa()}function yT(){return aa()}function aa(){return new ao((t=>t.toString()),((t,e)=>t.isEqual(e)))}const v9=new kt(de.comparator);function Re(...t){let e=v9;for(const n of t)e=e.add(n);return e}const E9=new kt(Ne);function w9(){return E9}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function vT(t){return{integerValue:""+t}}function T9(t,e){return JD(e)?vT(e):Gp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this._=void 0}}function b9(t,e,n){return t instanceof od?(function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hp(i)&&(i=$p(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}})(n,e):t instanceof kc?ET(t,e):t instanceof Nc?wT(t,e):(function(s,i){const o=A9(s,i),a=k0(o)+k0(s.Pe);return td(o)&&td(s.Pe)?vT(a):Gp(s.serializer,a)})(t,e)}function I9(t,e,n){return t instanceof kc?ET(t,e):t instanceof Nc?wT(t,e):n}function A9(t,e){return t instanceof ad?(function(r){return td(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class od extends pu{}class kc extends pu{constructor(e){super(),this.elements=e}}function ET(t,e){const n=TT(e);for(const r of t.elements)n.some((s=>Zn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Nc extends pu{constructor(e){super(),this.elements=e}}function wT(t,e){let n=TT(e);for(const r of t.elements)n=n.filter((s=>!Zn(s,r)));return{arrayValue:{values:n}}}class ad extends pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function k0(t){return rt(t.integerValue||t.doubleValue)}function TT(t){return zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function C9(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof kc&&s instanceof kc||r instanceof Nc&&s instanceof Nc?Hi(r.elements,s.elements,Zn):r instanceof ad&&s instanceof ad?Zn(r.Pe,s.Pe):r instanceof od&&s instanceof od})(t.transform,e.transform)}class Os{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Os}static exists(e){return new Os(void 0,e)}static updateTime(e){return new Os(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kp{}function bT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S9(t.key,Os.none()):new Yp(t.key,t.data,Os.none());{const n=t.data,r=Bn.empty();let s=new kt($t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mu(t.key,r,new Br(s.toArray()),Os.none())}}function R9(t,e,n){t instanceof Yp?(function(s,i,o){const a=s.value.clone(),l=x0(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(t,e,n):t instanceof mu?(function(s,i,o){if(!Ul(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=x0(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(IT(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function la(t,e,n,r){return t instanceof Yp?(function(i,o,a,l){if(!Ul(i.precondition,o))return a;const u=i.value.clone(),h=O0(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof mu?(function(i,o,a,l){if(!Ul(i.precondition,o))return a;const u=O0(i.fieldTransforms,l,o),h=o.data;return h.setAll(IT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(t,e,n,r):(function(i,o,a){return Ul(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(t,e,n)}function N0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hi(r,s,((i,o)=>C9(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yp extends Kp{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mu extends Kp{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function IT(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function x0(t,e,n){const r=new Map;nt(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,I9(o,a,n[s]))}return r}function O0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,b9(i,o,e))}return r}class S9 extends Kp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R9(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=bT(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,((n,r)=>N0(n,r)))&&Hi(this.baseMutations,e.baseMutations,((n,r)=>N0(n,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k9{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Te;function AT(t){if(t===void 0)return vr("GRPC error has no .code"),W.UNKNOWN;switch(t){case ot.OK:return W.OK;case ot.CANCELLED:return W.CANCELLED;case ot.UNKNOWN:return W.UNKNOWN;case ot.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ot.INTERNAL:return W.INTERNAL;case ot.UNAVAILABLE:return W.UNAVAILABLE;case ot.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ot.NOT_FOUND:return W.NOT_FOUND;case ot.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ot.ABORTED:return W.ABORTED;case ot.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ot.DATA_LOSS:return W.DATA_LOSS;default:return ye()}}(Te=ot||(ot={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O9=new xs([4294967295,4294967295],0);function M0(t){const e=x9().encode(t),n=new Zw;return n.update(e),new Uint8Array(n.digest())}function D0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xs([n,r],0),new xs([s,i],0)]}class Qp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=xs.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(xs.fromNumber(r)));return s.compare(O9)===1&&(s=new xs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=M0(e),[r,s]=D0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qp(i,s,n);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.Ie===0)return;const n=M0(e),[r,s]=D0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(ge.min(),s,new it(Ne),rs(),Re())}}class qa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qa(r,n,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class CT{constructor(e,n){this.targetId=e,this.me=n}}class RT{constructor(e,n,r=Nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class L0{constructor(){this.fe=0,this.ge=F0(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),n=Re(),r=Re();return this.ge.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye()}})),new qa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=F0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class M9{constructor(e){this.Le=e,this.Be=new Map,this.ke=rs(),this.qe=V0(),this.Qe=new it(Ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,(n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ye()}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach(((r,s)=>{this.ze(s)&&n(s)}))}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(rd(i))if(r===0){const o=new de(i.path);this.Ue(n,o,Ht.newNoDocument(o,ge.min()))}else nt(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=zs(r).toUint8Array()}catch(l){if(l instanceof aT)return ji("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Qp(o,s,i)}catch(l){return ji(l instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)})),s}rt(e){const n=new Map;this.Be.forEach(((i,o)=>{const a=this.Je(o);if(a){if(i.current&&rd(a.target)){const l=new de(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ht.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}}));let r=Re();this.qe.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.ke.forEach(((i,o)=>o.setReadTime(e)));const s=new gu(e,n,this.Qe,this.ke,r);return this.ke=rs(),this.qe=V0(),this.Qe=new it(Ne),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new L0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(Ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L0),this.Le.getRemoteKeysForTarget(e).forEach((n=>{this.Ue(e,n,null)}))}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function V0(){return new it(de.comparator)}function F0(){return new it(de.comparator)}const D9={asc:"ASCENDING",desc:"DESCENDING"},L9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V9={and:"AND",or:"OR"};class F9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ld(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function cd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ST(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Si(t){return nt(!!t),ge.fromTimestamp((function(n){const r=ns(n);return new ut(r.seconds,r.nanos)})(t))}function PT(t,e){return ud(t,e).canonicalString()}function ud(t,e){const n=(function(s){return new Je(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function kT(t){const e=Je.fromString(t);return nt(DT(e)),e}function Sh(t,e){const n=kT(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(xT(n))}function NT(t,e){return PT(t.databaseId,e)}function U9(t){const e=kT(t);return e.length===4?Je.emptyPath():xT(e)}function U0(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xT(t){return nt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function B9(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye()})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(nt(h===void 0||typeof h=="string"),Nt.fromBase64String(h||"")):(nt(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Nt.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?W.UNKNOWN:AT(u.code);return new ne(h,u.message||"")})(o);n=new RT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sh(t,r.document.name),i=Si(r.document.updateTime),o=r.document.createTime?Si(r.document.createTime):ge.min(),a=new Bn({mapValue:{fields:r.document.fields}}),l=Ht.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Bl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sh(t,r.document),i=r.readTime?Si(r.readTime):ge.min(),o=Ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Bl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sh(t,r.document),i=r.removedTargetIds||[];n=new Bl([],i,s,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new N9(s,i),a=r.targetId;n=new CT(a,o)}}return n}function j9(t,e){return{documents:[NT(t,e.path)]}}function H9(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NT(t,s);const i=(function(u){if(u.length!==0)return MT(Mn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:ai(p.field),direction:q9(p.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ld(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{_t:n,parent:s}}function $9(t){let e=U9(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){nt(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(f){const p=OT(f);return p instanceof Mn&&uT(p)?p.getFilters():[p]})(n.where));let o=[];n.orderBy&&(o=(function(f){return f.map((p=>(function(_){return new Ca(li(_.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(_.direction))})(p)))})(n.orderBy));let a=null;n.limit&&(a=(function(f){let p;return p=typeof f=="object"?f.value:f,uu(p)?null:p})(n.limit));let l=null;n.startAt&&(l=(function(f){const p=!!f.before,m=f.values||[];return new Pc(m,p)})(n.startAt));let u=null;return n.endAt&&(u=(function(f){const p=!f.before,m=f.values||[];return new Pc(m,p)})(n.endAt)),d9(e,s,o,i,a,"F",l,u)}function z9(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OT(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=li(n.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(n.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ye()}})(t):t.fieldFilter!==void 0?(function(n){return lt.create(li(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Mn.create(n.compositeFilter.filters.map((r=>OT(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye()}})(n.compositeFilter.op))})(t):ye()}function q9(t){return D9[t]}function W9(t){return L9[t]}function G9(t){return V9[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return $t.fromServerFormat(t.fieldPath)}function MT(t){return t instanceof lt?(function(n){if(n.op==="=="){if(A0(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(I0(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A0(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(I0(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:W9(n.op),value:n.value}}})(t):t instanceof Mn?(function(n){const r=n.getFilters().map((s=>MT(s)));return r.length===1?r[0]:{compositeFilter:{op:G9(n.op),filters:r}}})(t):ye()}function DT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=Nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e){this.ct=e}}function Y9(t){const e=$9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(){this.un=new X9}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ts.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class X9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new kt(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qi(0)}static kn(){return new qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J9{constructor(){this.changes=new ao((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&la(r.mutation,s,Br.empty(),ut.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Re()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Re()){const s=Rs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Bo();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Rs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Re())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{n.set(o,a)}))}))}computeViews(e,n,r,s){let i=rs();const o=aa(),a=(function(){return aa()})();return n.forEach(((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof mu)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),la(h.mutation,u,h.mutation.getFieldMask(),ut.now())):o.set(u.key,Br.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>{var f;return a.set(u,new Z9(h,(f=o.get(u))!==null&&f!==void 0?f:null))})),a)))}recalculateAndSaveOverlays(e,n){const r=aa();let s=new it(((o,a)=>o-a)),i=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Br.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||Re()).add(l);s=s.insert(a.batchId,f)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=yT();h.forEach((p=>{if(!i.has(p)){const m=bT(n.get(p),r.get(p));m!==null&&f.set(p,m),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Rs());let a=-1,l=i;return o.next((u=>$.forEach(u,((h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Re()))).next((h=>({batchId:a,changes:y9(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next((r=>{let s=Bo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bo();return this.indexManager.getCollectionParents(e,i).next((a=>$.forEach(a,(l=>{const u=(function(f,p){return new oo(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((f,p)=>{o=o.insert(f,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ht.newInvalidDocument(h)))}));let a=Bo();return o.forEach(((l,u)=>{const h=i.get(l);h!==void 0&&la(h.mutation,u,Br.empty(),ut.now()),du(n,u)&&(a=a.insert(l,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Si(s.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,(function(s){return{name:s.name,query:Y9(s.bundledQuery),readTime:Si(s.readTime)}})(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.overlays=new it(de.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rs();return $.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.ht(e,n,i)})),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Rs(),i=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new it(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Rs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Rs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=s)););return $.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new k9(n,r));let i=this.Ir.get(n);i===void 0&&(i=Re(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.Tr=new kt(pt.Er),this.dr=new kt(pt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Vr(new pt(e,n))}mr(e,n){e.forEach((r=>this.removeReference(r,n)))}gr(e){const n=new de(new Je([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.dr.forEachInRange([r,s],(o=>{this.Vr(o),i.push(o.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new de(new Je([])),r=new pt(n,e),s=new pt(n,e+1);let i=Re();return this.dr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new pt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return de.comparator(e.key,n.key)||Ne(e.wr,n.wr)}static Ar(e,n){return Ne(e.wr,n.wr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new kt(pt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new P9(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],(o=>{const a=this.Dr(o.wr);i.push(a)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(Ne);return n.forEach((s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],(a=>{r=r.add(a.wr)}))})),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new pt(new de(i),0);let a=new kt(Ne);return this.br.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)}),o),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach((r=>{const s=this.Dr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){nt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,(s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,n){const r=new pt(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.Mr=e,this.docs=(function(){return new it(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=rs();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))})),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=rs();const o=n.path,a=new de(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KD(GD(h),r)<=0||(s.has(h.key)||du(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye()}Or(e,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new oL(this)}getSize(e){return $.resolve(this.size)}}class oL extends J9{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)})),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.persistence=e,this.Nr=new ao((n=>qp(n)),Wp),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xp,this.targetCount=0,this.kr=qi.Bn()}forEachTarget(e,n){return this.Nr.forEach(((r,s)=>n(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach(((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jp(0),this.Kr=!1,this.Kr=!0,this.$r=new rL,this.referenceDelegate=e(this),this.Ur=new aL(this),this.indexManager=new Q9,this.remoteDocumentCache=(function(s){return new iL(s)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new K9(n),this.Gr=new tL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new cL(this.Qr.next());return this.referenceDelegate.zr(),r(s).next((i=>this.referenceDelegate.jr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Hr(e,n){return $.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,n))))}}class cL extends QD{constructor(e){super(),this.currentSequenceNumber=e}}class Jp{constructor(e){this.persistence=e,this.Jr=new Xp,this.Yr=null}static Zr(e){return new Jp(e)}get Xr(){if(this.Yr)return this.Yr;throw ye()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach((s=>this.Xr.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.Xr.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,(r=>{const s=de.fromPath(r);return this.ei(e,s).next((i=>{i||n.removeEntry(s,ge.min())}))})).next((()=>(this.Yr=null,n.apply(e))))}updateLimboDocument(e,n){return this.ei(e,n).next((r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())}))}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Re(),s=Re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return hN()?8:XD(Nn())>0?6:4})()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Zi(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new uL;return this.Xi(e,n,o).next((a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)}))})).next((()=>i.result))}es(e,n,r,s){return r.documentReadCount<this.ji?(No()<=Ee.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(No()<=Ee.DEBUG&&ie("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(No()<=Ee.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):$.resolve())}Yi(e,n){if(P0(n))return $.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=id(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Re(...i);return this.Ji.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,id(n,null,"F")):this.rs(e,u,n,l)}))))})))))}Zi(e,n,r,s){return P0(n)||s.isEqual(ge.min())?$.resolve(null):this.Ji.getDocuments(e,r).next((i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(No()<=Ee.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),oi(n)),this.rs(e,o,n,WD(s,-1)).next((a=>a)))}))}ts(e,n){let r=new kt(gT(e));return n.forEach(((s,i)=>{du(e,i)&&(r=r.add(i))})),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return No()<=Ee.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",oi(n)),this.Ji.getDocumentsMatchingQuery(e,n,ts.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new it(Ne),this._s=new ao((i=>qp(i)),Wp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.os)))}}function dL(t,e,n,r){return new fL(t,e,n,r)}async function LT(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let l=Re();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next((u=>({hs:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function VT(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Ur.getLastRemoteSnapshotVersion(n)))}function pL(t,e){const n=Ce(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach(((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next((()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f))));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Nt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(f,m),(function(T,k,N){return T.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(p,m,h)&&a.push(n.Ur.updateTargetData(i,m))}));let l=rs(),u=Re();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(mL(i,o,e.documentUpdates).next((h=>{l=h.Ps,u=h.Is}))),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next((f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(h)}return $.waitFor(a).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.os=s,i)))}function mL(t,e,n){let r=Re(),s=Re();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=rs();return n.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ie("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Ps:o,Is:s}}))}function gL(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Ur.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next((o=>(s=new jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r}))}async function hd(t,e,n){const r=Ce(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$a(o))throw o;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function B0(t,e,n){const r=Ce(t);let s=ge.min(),i=Re();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const f=Ce(l),p=f._s.get(h);return p!==void 0?$.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)})(r,o,Kn(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Re()))).next((a=>(_L(r,m9(e),a),{documents:a,Ts:i})))))}function _L(t,e,n){let r=t.us.get(e)||ge.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.us.set(e,r)}class j0{constructor(){this.activeTargetIds=w9()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yL{constructor(){this.so=new j0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new j0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl=null;function Ph(){return Rl===null?Rl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rl++,"0x"+Rl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class TL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Ph(),l=this.xo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then((h=>(ie("RestConnection",`Received RPC '${n}' ${a}: `,h),h)),(h=>{throw ji("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h}))}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+io})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((i,o)=>n[o]=i)),s&&s.headers.forEach(((i,o)=>n[o]=i))}xo(n,r){const s=EL[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ph();return new Promise(((o,a)=>{const l=new eT;l.setWithCredentials(!0),l.listenOnce(tT.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Fl.NO_ERROR:const h=l.getResponseJson();ie(Dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Fl.TIMEOUT:ie(Dt,`RPC '${e}' ${i} timed out`),a(new ne(W.DEADLINE_EXCEEDED,"Request time out"));break;case Fl.HTTP_ERROR:const f=l.getStatus();if(ie(Dt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p?.error;if(m&&m.status&&m.message){const _=(function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(N)>=0?N:W.UNKNOWN})(m.status);a(new ne(_,m.message))}else a(new ne(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(W.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ie(Dt,`RPC '${e}' ${i} completed.`)}}));const u=JSON.stringify(s);ie(Dt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)}))}Bo(e,n,r){const s=Ph(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sT(),a=rT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ie(Dt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,m=!1;const _=new wL({Io:k=>{m?ie(Dt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(ie(Dt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),ie(Dt,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},To:()=>f.close()}),T=(k,N,S)=>{k.listen(N,(y=>{try{S(y)}catch(A){setTimeout((()=>{throw A}),0)}}))};return T(f,Uo.EventType.OPEN,(()=>{m||(ie(Dt,`RPC '${e}' stream ${s} transport opened.`),_.yo())})),T(f,Uo.EventType.CLOSE,(()=>{m||(m=!0,ie(Dt,`RPC '${e}' stream ${s} transport closed`),_.So())})),T(f,Uo.EventType.ERROR,(k=>{m||(m=!0,ji(Dt,`RPC '${e}' stream ${s} transport errored:`,k),_.So(new ne(W.UNAVAILABLE,"The operation could not be completed")))})),T(f,Uo.EventType.MESSAGE,(k=>{var N;if(!m){const S=k.data[0];nt(!!S);const y=S,A=y.error||((N=y[0])===null||N===void 0?void 0:N.error);if(A){ie(Dt,`RPC '${e}' stream ${s} received error:`,A);const M=A.status;let V=(function(w){const C=ot[w];if(C!==void 0)return AT(C)})(M),b=A.message;V===void 0&&(V=W.INTERNAL,b="Unknown error status: "+M+" with message "+A.message),m=!0,_.So(new ne(V,b)),f.close()}else ie(Dt,`RPC '${e}' stream ${s} received:`,S),_.bo(S)}})),T(a,nT.STAT_EVENT,(k=>{k.stat===Zf.PROXY?ie(Dt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Zf.NOPROXY&&ie(Dt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{_.wo()}),0),_}}function kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){return new F9(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Yo===n&&this.P_(r,s)}),(r=>{e((()=>{const s=new ne(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)}))}))}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{r((()=>this.I_(s)))})),this.stream.onMessage((s=>{r((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget((()=>this.Yo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class IL extends bL{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=B9(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Si(o.readTime):ge.min()})(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=U0(this.serializer),n.addTarget=(function(i,o){let a;const l=o.target;if(a=rd(l)?{documents:j9(i,l)}:{query:H9(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ST(i,o.resumeToken);const u=ld(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=cd(i,o.snapshotVersion.toTimestamp());const u=ld(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const r=z9(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=U0(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Mo(e,ud(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(W.UNKNOWN,i.toString())}))}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Lo(e,ud(n,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(W.UNKNOWN,o.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class CL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vr(n),this.D_=!1):ie("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((o=>{r.enqueueAndForget((async()=>{Ga(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await(async function(l){const u=Ce(l);u.L_.add(4),await Wa(u),u.q_.set("Unknown"),u.L_.delete(4),await yu(u)})(this))}))})),this.q_=new CL(r,s)}}async function yu(t){if(Ga(t))for(const e of t.B_)await e(!0)}async function Wa(t){for(const e of t.B_)await e(!1)}function UT(t,e){const n=Ce(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),rm(n)?nm(n):lo(n).r_()&&tm(n,e))}function em(t,e){const n=Ce(t),r=lo(n);n.N_.delete(e),r.r_()&&BT(n,e),n.N_.size===0&&(r.r_()?r.o_():Ga(n)&&n.q_.set("Unknown"))}function tm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function BT(t,e){t.Q_.xe(e),lo(t).R_(e)}function nm(t){t.Q_=new M9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function rm(t){return Ga(t)&&!lo(t).n_()&&t.N_.size>0}function Ga(t){return Ce(t).L_.size===0}function jT(t){t.Q_=void 0}async function SL(t){t.q_.set("Online")}async function PL(t){t.N_.forEach(((e,n)=>{tm(t,e)}))}async function kL(t,e){jT(t),rm(t)?(t.q_.M_(e),nm(t)):t.q_.set("Unknown")}async function NL(t,e,n){if(t.q_.set("Online"),e instanceof RT&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))})(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $0(t,r)}else if(e instanceof Bl?t.Q_.Ke(e):e instanceof CT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await VT(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Nt.EMPTY_BYTE_STRING,h.snapshotVersion)),BT(i,l);const f=new jr(h.target,l,u,h.sequenceNumber);tm(i,f)})),i.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await $0(t,r)}}async function $0(t,e,n){if(!$a(e))throw e;t.L_.add(1),await Wa(t),t.q_.set("Offline"),n||(n=()=>VT(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yu(t)}))}async function z0(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=Ga(n);n.L_.add(3),await Wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yu(n)}async function xL(t,e){const n=Ce(t);e?(n.L_.delete(2),await yu(n)):e||(n.L_.add(2),await Wa(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=(function(n,r,s){const i=Ce(n);return i.w_(),new IL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Eo:SL.bind(null,t),Ro:PL.bind(null,t),mo:kL.bind(null,t),d_:NL.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),rm(t)?nm(t):t.q_.set("Unknown")):(await t.K_.stop(),jT(t))}))),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new sm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function HT(t,e){if(vr("AsyncQueue",`${e}: ${t}`),$a(t))return new ne(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Bo(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new Pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.W_=new it(de.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ye():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Wi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((a=>{o.push({type:0,doc:a})})),new Wi(e,n,Pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class ML{constructor(){this.queries=W0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Ce(n),i=s.queries;s.queries=W0(),i.forEach(((o,a)=>{for(const l of a.j_)l.onError(r)}))})(this,new ne(W.ABORTED,"Firestore shutting down"))}}function W0(){return new ao((t=>mT(t)),fu)}async function im(t,e){const n=Ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new OL,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=HT(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&am(n)}async function om(t,e){const n=Ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DL(t,e){const n=Ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&am(n)}function LL(t,e,n){const r=Ce(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function am(t){t.Y_.forEach((e=>{e.next()}))}var fd,G0;(G0=fd||(fd={})).ea="default",G0.Cache="cache";class lm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.key=e}}class zT{constructor(e){this.key=e}}class VL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=gT(e),this.Ra=new Pi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new q0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,f)=>{const p=s.get(h),m=du(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;p&&m?p.data.isEqual(m.data)?_!==T&&(r.track({type:3,doc:m}),k=!0):this.ga(p,m)||(r.track({type:2,doc:m}),k=!0,(l&&this.Aa(m,l)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),k=!0):p&&!m&&(r.track({type:1,doc:p}),k=!0,(l||u)&&(a=!0)),k&&(m?(o=o.add(m),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort(((h,f)=>(function(m,_){const T=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return T(m)-T(_)})(h.type,f.type)||this.Aa(h.doc,f.doc))),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Wi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new q0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((n=>this.Ta=this.Ta.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ta=this.Ta.delete(n))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const n=[];return e.forEach((r=>{this.da.has(r)||n.push(new zT(r))})),this.da.forEach((r=>{e.has(r)||n.push(new $T(r))})),n}ba(e){this.Ta=e.Ts,this.da=Re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Wi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class FL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UL{constructor(e){this.key=e,this.va=!1}}class BL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ao((a=>mT(a)),fu),this.Ma=new Map,this.xa=new Set,this.Oa=new it(de.comparator),this.Na=new Map,this.La=new Xp,this.Ba={},this.ka=new Map,this.qa=qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jL(t,e,n=!0){const r=YT(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await qT(r,e,n,!0),s}async function HL(t,e){const n=YT(t);await qT(n,e,!0,!1)}async function qT(t,e,n,r){const s=await gL(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await $L(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&UT(t.remoteStore,s),a}async function $L(t,e,n,r,s){t.Ka=(f,p,m)=>(async function(T,k,N,S){let y=k.view.ma(N);y.ns&&(y=await B0(T.localStore,k.query,!1).then((({documents:b})=>k.view.ma(b,y))));const A=S&&S.targetChanges.get(k.targetId),M=S&&S.targetMismatches.get(k.targetId)!=null,V=k.view.applyChanges(y,T.isPrimaryClient,A,M);return Y0(T,k.targetId,V.wa),V.snapshot})(t,f,p,m);const i=await B0(t.localStore,e,!0),o=new VL(e,i.Ts),a=o.ma(i.documents),l=qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);Y0(t,n,u.wa);const h=new FL(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function zL(t,e,n){const r=Ce(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((o=>!fu(o,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hd(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&em(r.remoteStore,s.targetId),dd(r,s.targetId)})).catch(Bp)):(dd(r,s.targetId),await hd(r.localStore,s.targetId,!0))}async function qL(t,e){const n=Ce(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),em(n.remoteStore,r.targetId))}async function WT(t,e){const n=Ce(t);try{const r=await pL(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Na.get(i);o&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?nt(o.va):s.removedDocuments.size>0&&(nt(o.va),o.va=!1))})),await KT(n,r,e)}catch(r){await Bp(r)}}function K0(t,e,n){const r=Ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach(((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=Ce(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)})),u&&am(l)})(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WL(t,e,n){const r=Ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new it(de.comparator);o=o.insert(i,Ht.newNoDocument(i,ge.min()));const a=Re().add(i),l=new gu(ge.min(),new Map,new it(Ne),o,a);await WT(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),cm(r)}else await hd(r.localStore,e,!1).then((()=>dd(r,e,n))).catch(Bp)}function dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((r=>{t.La.containsKey(r)||GT(t,r)}))}function GT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(em(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),cm(t))}function Y0(t,e,n){for(const r of n)r instanceof $T?(t.La.addReference(r.key,e),GL(t,r)):r instanceof zT?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||GT(t,r.key)):ye()}function GL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.xa.add(r),cm(t))}function cm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new de(Je.fromString(e)),r=t.qa.next();t.Na.set(r,new UL(n)),t.Oa=t.Oa.insert(n,r),UT(t.remoteStore,new jr(Kn(hu(n.path)),r,"TargetPurposeLimboResolution",jp.oe))}}async function KT(t,e,n){const r=Ce(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((a,l)=>{o.push(r.Ka(l,e,n).then((u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Zp.Wi(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Ca.d_(s),await(async function(l,u){const h=Ce(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>$.forEach(u,(p=>$.forEach(p.$i,(m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m))).next((()=>$.forEach(p.Ui,(m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))))))}catch(f){if(!$a(f))throw f;ie("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.os.get(p),_=m.snapshotVersion,T=m.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,T)}}})(r.localStore,i))}async function KL(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await LT(n.localStore,e);n.currentUser=e,(function(i,o){i.ka.forEach((a=>{a.forEach((l=>{l.reject(new ne(W.CANCELLED,o))}))})),i.ka.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await KT(n,r.hs)}}function YL(t,e){const n=Ce(t),r=n.Na.get(e);if(r&&r.va)return Re().add(r.key);{let s=Re();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function YT(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WL.bind(null,e),e.Ca.d_=DL.bind(null,e.eventManager),e.Ca.$a=LL.bind(null,e.eventManager),e}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_u(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dL(this.persistence,new hL,e.initialUser,this.serializer)}Ga(e){return new lL(Jp.Zr,this.serializer)}Wa(e){return new yL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KL.bind(null,this.syncEngine),await xL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ML})()}createDatastore(e){const n=_u(e.databaseInfo.databaseId),r=(function(i){return new TL(i)})(e.databaseInfo);return(function(i,o,a,l){return new AL(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,a){return new RL(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>K0(this.syncEngine,n,0)),(function(){return H0.D()?new H0:new vL})())}createSyncEngine(e,n){return(function(s,i,o,a,l,u,h){const f=new BL(s,i,o,a,l,u);return h&&(f.Qa=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ce(s);ie("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Wa(i),i.k_.shutdown(),i.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pd.provider={build:()=>new pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ft.UNAUTHENTICATED,this.clientId=zD.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ie("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ie("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=HT(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await LT(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XL(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>z0(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>z0(e.remoteStore,s))),t._onlineComponents=e}async function XL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===W.FAILED_PRECONDITION||s.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await Nh(t,new xc)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await Nh(t,new xc);return t._offlineComponents}async function JL(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Q0(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Q0(t,new pd))),t._onlineComponents}async function Oc(t){const e=await JL(t),n=e.eventManager;return n.onListen=jL.bind(null,e.syncEngine),n.onUnlisten=zL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qL.bind(null,e.syncEngine),n}function ZL(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new um({next:p=>{h.Za(),o.enqueueAndForget((()=>om(i,f)));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new ne(W.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new ne(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new lm(hu(a.path),h,{includeMetadataChanges:!0,_a:!0});return im(i,f)})(await Oc(t),t.asyncQueue,e,n,r))),r.promise}function e8(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new um({next:p=>{h.Za(),o.enqueueAndForget((()=>om(i,f))),p.fromCache&&l.source==="server"?u.reject(new ne(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new lm(a,h,{includeMetadataChanges:!0,_a:!0});return im(i,f)})(await Oc(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(t,e,n){if(!n)throw new ne(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n8(t,e,n,r){if(e===!0&&r===!0)throw new ne(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J0(t){if(de.isDocumentKey(t))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function Qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new ne(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hm{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z0(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new LD;switch(r.type){case"firstParty":return new BD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=X0.get(n);r&&(ie("ComponentProvider","Removing Datastore"),X0.delete(n),r.terminate())})(this),Promise.resolve()}}function r8(t,e,n,r={}){var s;const i=(t=Qr(t,hm))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=oN(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(u)}t._authCredentials=new VD(new iT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new as(this.firestore,e,this._query)}}class Dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dn(this.firestore,e,this._key)}}class ki extends as{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dn(this.firestore,null,new de(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function L7(t,e,...n){if(t=Xn(t),t8("collection","path",e),t instanceof hm){const r=Je.fromString(e,...n);return J0(r),new ki(t,null,r)}{if(!(t instanceof Dn||t instanceof ki))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return J0(r),new ki(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new FT(this,"async_queue_retry"),this.Vu=()=>{const r=kh();r&&ie("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const n=new Yr;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$a(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const n=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const s=(function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a})(r);throw vr("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.du=!1,r))))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=sm.createAndSchedule(this,e,n,r,(i=>this.yu(i)));return this.Tu.push(s),s}fu(){this.Eu&&ye()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function t1(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Ra extends hm{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new e1,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e1(e),this._firestoreClient=void 0,await e}}}function V7(t,e){const n=typeof t=="object"?t:wE(),r=typeof t=="string"?t:"(default)",s=Ex(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sN("firestore");i&&r8(s,...i)}return s}function fm(t){if(t._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||s8(t),t._firestoreClient}function s8(t){var e,n,r;const s=t._freezeSettings(),i=(function(a,l,u,h){return new e9(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,QT(h.experimentalLongPollingOptions),h.useFetchStreams)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new QL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Nt.fromBase64String(e))}catch(n){throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i8=/^__.*__$/;function ZT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class pm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return md(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ZT(this.Cu)&&i8.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class o8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_u(e)}Qu(e,n,r,s=!1){return new pm({Cu:e,methodName:n,qu:r,path:$t.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function a8(t){const e=t._freezeSettings(),n=_u(t._databaseId);return new o8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l8(t,e,n,r=!1){return mm(n,t.Qu(r?4:3,e))}function mm(t,e){if(eb(t=Xn(t)))return u8("Unsupported field value:",e,t),c8(t,e);if(t instanceof JT)return(function(r,s){if(!ZT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const a of r){let l=mm(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Xn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T9(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ut.fromDate(r);return{timestampValue:cd(s.serializer,i)}}if(r instanceof ut){const i=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cd(s.serializer,i)}}if(r instanceof Eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gi)return{bytesValue:ST(s.serializer,r._byteString)};if(r instanceof Dn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:PT(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dm)return(function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Gp(a.serializer,l)}))}}}}}})(r,s);throw s.Bu(`Unsupported field value: ${vu(r)}`)})(t,e)}function c8(t,e){const n={};return oT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):za(t,((r,s)=>{const i=mm(s,e.Mu(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function eb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Eu||t instanceof Gi||t instanceof Dn||t instanceof JT||t instanceof dm)}function u8(t,e,n){if(!eb(n)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(n)){const r=vu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}const h8=new RegExp("[~\\*/\\[\\]]");function f8(t,e,n){if(e.search(h8)>=0)throw md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new XT(...e.split("."))._internalPath}catch{throw md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function md(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(W.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d8 extends tb{data(){return super.data()}}function wu(t,e){return typeof e=="string"?f8(t,e):e instanceof XT?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{}class rb extends gm{}function F7(t,e,...n){let r=[];e instanceof gm&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof _m)).length,a=i.filter((l=>l instanceof Tu)).length;if(o>1||o>0&&a>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Tu extends rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tu(e,n,r)}_apply(e){const n=this._parse(e);return sb(e._query,n),new as(e.firestore,e.converter,sd(e._query,n))}_parse(e){const n=a8(e.firestore);return(function(i,o,a,l,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){r1(f,h);const m=[];for(const _ of f)m.push(n1(l,i,_));p={arrayValue:{values:m}}}else p=n1(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||r1(f,h),p=l8(a,o,f,h==="in"||h==="not-in");return lt.create(u,h,p)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function U7(t,e,n){const r=e,s=wu("where",t);return Tu._create(s,r,n)}class _m extends gm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _m(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)sb(o,l),o=sd(o,l)})(e._query,n),new as(e.firestore,e.converter,sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ym extends rb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ym(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ca(i,o)})(e._query,this._field,this._direction);return new as(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new oo(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function B7(t,e="asc"){const n=e,r=wu("orderBy",t);return ym._create(r,n)}function n1(t,e,n){if(typeof(n=Xn(n))=="string"){if(n==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pT(e)&&n.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Je.fromString(n));if(!de.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return b0(t,new de(r))}if(n instanceof Dn)return b0(t,n._key);throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vu(n)}.`)}function r1(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sb(t,e){const n=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class p8{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return za(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>rt(o.doubleValue)));return new dm(i)}convertGeoPoint(e){return new Eu(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$p(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ba(e));default:return null}}convertTimestamp(e){const n=ns(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);nt(DT(r));const s=new Ia(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||vr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ib extends tb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jl extends ib{data(e={}){return super.data(e)}}class ob{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ho(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new jl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new jl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:m8(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){t=Qr(t,Dn);const e=Qr(t.firestore,Ra);return ZL(fm(e),t._key).then((n=>lb(e,t,n)))}class vm extends p8{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dn(this.firestore,null,n)}}function g8(t){t=Qr(t,as);const e=Qr(t.firestore,Ra),n=fm(e),r=new vm(e);return nb(t._query),e8(n,t._query).then((s=>new ob(e,r,t,s)))}function Em(t,...e){var n,r,s;t=Xn(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||t1(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(t1(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let l,u,h;if(t instanceof Dn)u=Qr(t.firestore,Ra),h=hu(t._key.path),l={next:f=>{e[o]&&e[o](lb(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Qr(t,as);u=Qr(f.firestore,Ra),h=f._query;const p=new vm(u);l={next:m=>{e[o]&&e[o](new ob(u,p,f,m))},error:e[o+1],complete:e[o+2]},nb(t._query)}return(function(p,m,_,T){const k=new um(T),N=new lm(m,k,_);return p.asyncQueue.enqueueAndForget((async()=>im(await Oc(p),N))),()=>{k.Za(),p.asyncQueue.enqueueAndForget((async()=>om(await Oc(p),N)))}})(fm(u),h,a,l)}function lb(t,e,n){const r=n.docs.get(e._key),s=new vm(t);return new ib(t,s,e._key,r,new Ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){io=s})(to),Jn(new xn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ra(new FD(r.getProvider("auth-internal")),new HD(r.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(u.options.projectId,h)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),an(y0,"4.7.3",e),an(y0,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="firebasestorage.googleapis.com",_8="storageBucket",y8=120*1e3,v8=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends br{constructor(e,n,r=0){super(xh(e),`Firebase Storage: ${n} (${xh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var er;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(er||(er={}));function xh(t){return"storage/"+t}function E8(){const t="An unknown error occurred, please check the error payload for server response.";return new tr(er.UNKNOWN,t)}function w8(){return new tr(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T8(){return new tr(er.CANCELED,"User canceled the upload/download.")}function b8(t){return new tr(er.INVALID_URL,"Invalid URL '"+t+"'.")}function I8(t){return new tr(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s1(t){return new tr(er.INVALID_ARGUMENT,t)}function ub(){return new tr(er.APP_DELETED,"The Firebase app was deleted.")}function A8(t){return new tr(er.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=An.makeFromUrl(e,n)}catch{return new An(e,"")}if(r.path==="")return r;throw I8(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},T=n===cb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",N=new RegExp(`^https?://${T}/${s}/${k}`,"i"),y=[{regex:a,indices:l,postModify:i},{regex:m,indices:_,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<y.length;A++){const M=y[A],V=M.regex.exec(e);if(V){const b=V[M.indices.bucket];let E=V[M.indices.path];E||(E=""),r=new An(b,E),M.postModify(r);break}}if(r==null)throw b8(e);return r}}class C8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R8(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...k){u||(u=!0,e.apply(null,k))}function f(k){s=setTimeout(()=>{s=null,t(m,l())},k)}function p(){i&&clearTimeout(i)}function m(k,...N){if(u){p();return}if(k){p(),h.call(null,k,...N);return}if(l()||o){p(),h.call(null,k,...N);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,f(y)}let _=!1;function T(k){_||(_=!0,p(),!u&&(s!==null?(k||(a=2),clearTimeout(s),f(0)):k||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function S8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P8(t){return t!==void 0}function i1(t,e,n,r){if(r<e)throw s1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw s1(`Invalid value for '${t}'. Expected ${n} or less.`)}function k8(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x8{constructor(e,n,r,s,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Mc.NO_ERROR,l=i.getStatus();if(!a||N8(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Mc.ABORT;r(!1,new Sl(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Sl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());P8(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=E8();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ub():T8();o(l)}else{const l=w8();o(l)}};this.canceled_?n(!1,new Sl(!1,null,!0)):this.backoffId_=R8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function O8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function M8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function D8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function L8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function V8(t,e,n,r,s,i,o=!0){const a=k8(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return D8(u,e),O8(u,n),M8(u,i),L8(u,r),new x8(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U8(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this._service=e,n instanceof An?this._location=n:this._location=An.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dc(e,n)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U8(this._location.path)}get storage(){return this._service}get parent(){const e=F8(this._location.path);if(e===null)return null;const n=new An(this._location.bucket,e);return new Dc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A8(e)}}function o1(t,e){const n=e?.[_8];return n==null?null:An.makeFromBucketSpec(n,t)}class B8{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=cb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=y8,this._maxUploadRetryTime=v8,this._requests=new Set,s!=null?this._bucket=An.makeFromBucketSpec(s,this._host):this._bucket=o1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=o1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){i1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){i1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new C8(ub());{const o=V8(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const a1="@firebase/storage",l1="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j8="storage";function H8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new B8(n,r,s,e,to)}function $8(){Jn(new xn(j8,H8,"PUBLIC").setMultipleInstances(!0)),an(a1,l1,""),an(a1,l1,"esm2017")}$8();const Oh=new WeakMap;function hb(t,e){return Oh.has(e)||Oh.set(e,{f:{},r:{},s:{},u:{}}),Oh.get(e)}function z8(t,e,n,r){if(!t)return n;const[s,i]=fb(t);if(!s)return n;const o=hb(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function q8(t,e,n,r){if(!t)return;const[s,i]=fb(t);if(!s)return;const o=hb(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(zn),a}function fb(t){return zO(t)||qO(t)?["f",t.path]:WO(t)?["r",t.toString()]:GO(t)?["s",t.toString()]:[]}const Mh=new WeakMap;function W8(t,e,n){const r=jE();Mh.has(r)||Mh.set(r,new Map);const s=Mh.get(r),i=q8(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):zn}const G8={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function gd(t,e,n,r){if(!HO(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[f,p]=h;Object.getOwnPropertyNames(a).forEach(m=>{const _=Object.getOwnPropertyDescriptor(a,m);_&&!_.enumerable&&Object.defineProperty(f,m,_)});for(const m in a){const _=a[m];if(_==null||_ instanceof Date||_ instanceof ut||_ instanceof Eu)f[m]=_;else if(_p(_)){const T=u+m;f[m]=T in n?l[m]:_.path,p[T]=_.converter?_:_.withConverter(r.converter)}else if(Array.isArray(_)){f[m]=Array(_.length);for(let T=0;T<_.length;T++){const k=_[T];k&&k.path in i&&(f[m][T]=i[k.path])}o(_,l[m]||f[m],u+m+".",[f[m],p])}else Gs(_)?(f[m]={},o(_,l[m],u+m+".",[f[m],p])):f[m]=_}}return o(t,e,"",s),s}const wm={reset:!1,wait:!0,maxRefDepth:2,converter:G8,snapshotOptions:{serverTimestamps:"estimate"}};function Lc(t){for(const e in t)t[e].unsub()}function _d(t,e,n,r,s,i,o,a,l){const[u,h]=gd(r.data(t.snapshotOptions),gp(e,n),s,t);i.set(e,n,u),yd(t,e,n,s,h,i,o,a,l)}function K8({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let u=zn;return a.once?ab(t).then(h=>{h.exists()?_d(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):u=Em(t,h=>{h.exists()?_d(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{u(),Lc(l)}}function yd(t,e,n,r,s,i,o,a,l){const u=Object.keys(s);if(Object.keys(r).filter(T=>u.indexOf(T)<0).forEach(T=>{r[T].unsub(),delete r[T]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const p=u.length,m=Object.create(null);function _(T){T in m&&++f>=p&&a(n)}u.forEach(T=>{const k=r[T],N=s[T],S=`${n}.${T}`;if(m[S]=!0,k)if(k.path!==N.path)k.unsub();else return;r[T]={data:()=>gp(e,S),unsub:K8({ref:N,target:e,path:S,depth:o,ops:i,resolve:_.bind(null,S),reject:l},t),path:N.path}})}function Y8(t,e,n,r,s,i){const o=Object.assign({},wm,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,f="value";let p=tn(u?[]:t.value);u||n.set(t,f,[]);const m=r;let _,T=zn;const k=[],N={added:({newIndex:y,doc:A})=>{k.splice(y,0,Object.create(null));const M=k[y],[V,b]=gd(A.data(l),void 0,M,o);n.add(Vn(p),y,V),yd(o,p,`${f}.${y}`,M,b,n,0,r.bind(null,A),s)},modified:({oldIndex:y,newIndex:A,doc:M})=>{const V=Vn(p),b=k[y],E=V[y],[w,C]=gd(M.data(l),E,b,o);k.splice(A,0,b),n.remove(V,y),n.add(V,A,w),yd(o,p,`${f}.${A}`,b,C,n,0,r,s)},removed:({oldIndex:y})=>{const A=Vn(p);n.remove(A,y),Lc(k.splice(y,1)[0])}};function S(y){const A=y.docChanges(a);if(!_&&A.length){_=!0;let M=0;const V=A.length,b=Object.create(null);for(let E=0;E<V;E++)b[A[E].doc.id]=!0;r=E=>{E&&E.id in b&&++M>=V&&(u&&(n.set(t,f,Vn(p)),p=t),m(Vn(p)),r=zn)}}A.forEach(M=>{N[M.type](M)}),A.length||(u&&(n.set(t,f,Vn(p)),p=t),r(Vn(p)))}return h?g8(e).then(S).catch(s):T=Em(e,S,s),y=>{if(T(),y){const A=typeof y=="function"?y():[];n.set(t,f,A)}k.forEach(Lc)}}function Q8(t,e,n,r,s,i){const o=Object.assign({},wm,i),a="value",l=Object.create(null);r=KO(r,()=>gp(t,a));let u=zn;function h(f){f.exists()?_d(o,t,a,f,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?ab(e).then(h).catch(s):u=Em(e,h,s),f=>{if(u(),f){const p=typeof f=="function"?f():null;n.set(t,a,p)}Lc(l)}}const c1=Symbol();function X8(t,e){let n=zn;const r=Object.assign({},wm,e),s=Vn(t),i=r.target||tn();QO()&&(r.once=!0);const o=z8(s,r.ssrKey,c1,jE()),a=o!==c1;a&&(i.value=o);let l=!a;const u=tn(!1),h=tn(),f=Ms(),p=bd();let m=zn;function _(){let N=Vn(t);const S=new Promise((y,A)=>{if(n(r.reset),!N)return n=zn,y(null);u.value=l,l=!0,N.converter||(N=N.withConverter(r.converter)),n=(_p(N)?Q8:Y8)(i,N,J8,y,A,r)}).catch(y=>(f.value===S&&(h.value=y),Promise.reject(y))).finally(()=>{f.value===S&&(u.value=!1)});f.value=S}let T=zn;(st(t)||typeof t=="function")&&(T=qr(t,_)),_(),s&&(m=W8(f.value,s,r.ssrKey)),os()&&sv(()=>f.value),p&&sI(k);function k(N=r.reset){T(),m(),n(N)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>k}})}const J8={set:(t,e,n)=>BO(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function j7(t,e){return X8(t,{target:tn([]),...e})}function Z8(t,{firebaseApp:e,modules:n=[]}){t.provide(BE,e);for(const r of n)r(e,t)}const e7=En(t=>{t.vueApp.use(Z8)}),t7=[XS,n4,bP,IP,AP,CP,RP,PP,kP,OP,Wk,Gk,Kk,e7],db=(t="RouteProvider")=>Er({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return zr(Ls,jn(s)),()=>e.vnode?Pt(e.vnode,{ref:e.vnodeRef}):e.vnode}}),n7=db(),u1=new WeakMap,r7=Er({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=ht(),i=tn(),o=_t(Ls,null);let a;r({pageRef:i});const l=_t(s2,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);cn().beforeEach(p)}t.pageKey&&qr(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let f=!1;{const p=cn().beforeResolve(()=>{f=!1});xa(()=>{p()})}return()=>Pt(A2,{name:t.name,route:t.route,...e},{default:p=>{const m=i7(o,p.route,p.Component),_=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!_)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(m&&o&&(!l||l?.isCurrent(o)))return _?u:null;const T=hf(p,t.pageKey),k=o7(o,p.route,p.Component);!s.isHydrating&&a===T&&!k&&Ni(()=>{f=!0,s.callHook("page:loading:end")}),a=T;const N=!!(t.transition??p.route.meta.pageTransition??s_),S=N&&s7([t.transition,p.route.meta.pageTransition,s_,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),y=t.keepalive??p.route.meta.keepalive??UR;return u=R2(N&&S,fP(y,Pt(jd,{suspensible:!0,onPending:()=>{N&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Ni(()=>s.callHook("page:finish",p.Component).then(()=>{if(delete s._runningTransition,!f&&!k)return f=!0,s.callHook("page:loading:end")}).finally(h))}},{default:()=>{const A={key:T||void 0,vnode:n.default?a7(n.default,p):p.Component,route:p.route,renderKey:T||void 0,trackRootNodes:N,vnodeRef:i};if(!y)return Pt(n7,A);const M=p.Component.type,V=M;let b=u1.get(V);return b||(b=db(M.name||M.__name),u1.set(V,b)),Pt(b,A)}}))).default(),u}})}});function s7(t){const e=[];for(const n of t)n&&e.push({...n,onAfterLeave:n.onAfterLeave?Jd(n.onAfterLeave):void 0});return n2(...e)}function i7(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&hf({route:e,Component:n})!==hf({route:t,Component:n})}function o7(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function a7(t,e){const n=t(e);return n.length===1?Pt(n[0]):Pt(At,void 0,n)}const l7=Er({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Pt(Fr[t.name],t.layoutProps,e.slots)}}),c7={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},u7=Er({name:"NuxtLayout",inheritAttrs:!1,props:c7,setup(t,e){const n=ht(),r=_t(Ls),i=!r||r===Wc()?C2():r,o=mt(()=>{let h=We(t.name)??i?.meta.layout??"default";return h&&!(h in Fr)&&t.fallback&&(h=We(t.fallback)),h}),a=Ms();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",l);cn().beforeEach(h)}let u;return()=>{const h=o.value&&o.value in Fr,f=i?.meta.layoutTransition??FR,p=u;return u=o.value,R2(h&&f,{default:()=>Pt(jd,{suspensible:!0,onResolve:()=>{Ni(l)}},{default:()=>Pt(h7,{layoutProps:Ov(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!f},e.slots)})}).default()}}}),h7=Er({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&zr(s2,{isCurrent:i=>n===(i.meta.layout??"default")});const r=_t(Ls);if(r&&r===Wc()){const i=C2(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}zr(Ls,jn(o))}return()=>!n||typeof n=="string"&&!(n in Fr)?e.slots.default?.():Pt(l7,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),f7=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},d7={};function p7(t,e){const n=r7,r=u7;return mn(),Un(r,null,{default:xd(()=>[Ze(n)]),_:1})}const m7=f7(d7,[["render",p7]]),g7={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?Hh(()=>Ti(()=>import("./UrGo2kbG.js"),__vite__mapDeps([10,11,12]),import.meta.url)):Hh(()=>Ti(()=>import("./Dd4KWVQX.js"),__vite__mapDeps([13,11,14]),import.meta.url));return(f,p)=>(mn(),Un(We(h),Gb(Nv({statusCode:We(r),statusMessage:We(i),description:We(o),stack:We(a)})),null,16))}},_7={key:0},h1={__name:"nuxt-root",setup(t){const e=()=>null,n=ht(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);cn().beforeEach(u)}const s=!1;zr(Ls,Wc()),n.hooks.callHookWith(u=>u.map(h=>h()),"vue:setup");const i=Gc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;iv((u,h,f)=>{if(n.hooks.callHook("vue:error",u,h,f).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(o2(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>ys(u)),!1});const l=!1;return(u,h)=>(mn(),Un(jd,{onResolve:We(r)},{default:xd(()=>[We(o)?(mn(),jA("div",_7)):We(i)?(mn(),Un(We(g7),{key:1,error:We(i)},null,8,["error"])):We(l)?(mn(),Un(We(e),{key:2,context:We(l)},null,8,["context"])):We(s)?(mn(),Un(oA(We(s)),{key:3})):(mn(),Un(We(m7),{key:4}))]),_:1},8,["onResolve"]))}};let f1;{let t;f1=async function(){if(t)return t;const r=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?xC(h1):NC(h1),s=zR({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=Ns(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await GR(s,t7)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(jR),await s.hooks.callHook("app:mounted",r),await Ni()}catch(o){i(o)}return r},t=f1().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{A7 as $,tI as A,Ze as B,xd as C,xv as D,k7 as E,KR as F,Vd as G,_t as H,c2 as I,Un as J,ka as K,V7 as L,bx as M,F7 as N,B7 as O,U7 as P,L7 as Q,j7 as R,At as S,w7 as T,I7 as U,We as V,E7 as W,y7 as X,iC as Y,R7 as Z,f7 as _,ht as a,b7 as a0,C7 as a1,T7 as a2,Zd as b,D_ as c,Er as d,xa as e,N7 as f,v7 as g,Pt as h,rS as i,xP as j,mt as k,Ws as l,zd as m,qc as n,Md as o,Hv as p,P7 as q,tn as r,Ms as s,ic as t,cn as u,S7 as v,sR as w,jA as x,mn as y,kv as z};
