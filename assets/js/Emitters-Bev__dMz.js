const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/EmittersPlugin-IxB4AWPS.js","assets/js/preload-helper-xKIU3iAw.js","assets/js/FlashMessage-DF--ITHT.js","assets/js/icon-alert-Cei3Tz55.js","assets/js/localStorage-BThj8CCp.js","assets/js/string-CbqVM-Zr.js","assets/js/globalKeyEventManager-2_REwTdI.js","assets/js/icon-close-BUGl_M7j.js","assets/css/FlashMessage-nc7yvAAd.css","assets/js/AnimatableColor-D0W5p17Q.js","assets/js/AnimationOptions-D3vCWNSD.js","assets/js/OptionsColor-DKDdDyh2.js","assets/js/EmitterInstance-CrR4PlH3.js"])))=>i.map(i=>d[i]);
import{_ as t}from"./preload-helper-xKIU3iAw.js";import{b as e,a as i,c as s,d as a,f as r}from"./FlashMessage-DF--ITHT.js";import"./icon-alert-Cei3Tz55.js";import"./localStorage-BThj8CCp.js";import"./string-CbqVM-Zr.js";import"./globalKeyEventManager-2_REwTdI.js";import"./icon-close-BUGl_M7j.js";class n{constructor(t,i){this.container=i,this._engine=t,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]};i.getEmitter=t=>void 0===t||e(t)?this.array[t??0]:this.array.find((e=>e.name===t)),i.addEmitter=async(t,e)=>this.addEmitter(t,e),i.removeEmitter=t=>{const e=i.getEmitter(t);e&&this.removeEmitter(e)},i.playEmitter=t=>{const e=i.getEmitter(t);e&&e.externalPlay()},i.pauseEmitter=t=>{const e=i.getEmitter(t);e&&e.externalPause()}}async addEmitter(e,i){const{Emitter:s}=await t((async()=>{const{Emitter:t}=await import("./EmittersPlugin-IxB4AWPS.js").then((t=>t.b));return{Emitter:t}}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),{EmitterInstance:a}=await t((async()=>{const{EmitterInstance:t}=await import("./EmitterInstance-CrR4PlH3.js");return{EmitterInstance:t}}),__vite__mapDeps([12,0,1,2,3,4,5,6,7,8,9,10,11])),r=new s;r.load(e);const n=new a(this._engine,this,this.container,r,i);return await n.init(),this.array.push(n),n}handleClickMode(t){const e=this.emitters,n=this.interactivityEmitters;if("emitter"!==t)return;let o;if(n&&i(n.value)){const t=0;if(n.value.length>t&&n.random.enable){o=[];const t=[];for(let e=0;e<n.random.count;e++){const i=s(n.value);t.includes(i)&&t.length<n.value.length?e--:(t.push(i),o.push(a(n.value,i)))}}else o=n.value}else o=null==n?void 0:n.value;const m=o??e,c=this.container.interactivity.mouse.clickPosition;r(m,(async t=>{await this.addEmitter(t,c)}))}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,this.emitters)if(i(this.emitters))for(const t of this.emitters)await this.addEmitter(t);else await this.addEmitter(this.emitters)}pause(){for(const t of this.array)t.pause()}play(){for(const t of this.array)t.play()}removeEmitter(t){const e=this.array.indexOf(t);e>=0&&this.array.splice(e,1)}resize(){for(const t of this.array)t.resize()}stop(){this.array=[]}update(t){for(const e of this.array)e.update(t)}}export{n as Emitters};