import{v as e}from"./index-npyN1vTH.js";import{B as t,C as o,f as a,x as i,D as n}from"./FlashMessage-DF--ITHT.js";import"./preload-helper-xKIU3iAw.js";import"./icon-alert-Cei3Tz55.js";import"./localStorage-BThj8CCp.js";import"./string-CbqVM-Zr.js";import"./globalKeyEventManager-2_REwTdI.js";import"./icon-close-BUGl_M7j.js";const s='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class l{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null==t||t.close(),this._emojiShapeDict.delete(e))}draw(e){!function(e){const{context:t,particle:o,radius:a,opacity:i}=e,n=o.emojiData,s=2*a,l=t.globalAlpha;n&&(t.globalAlpha=i,t.drawImage(n,-a,-a,s,s),t.globalAlpha=l)}(e)}async init(i){const n=i.actualOptions;if(!e.find((e=>t(e,n.particles.shape.type))))return;const l=[o(s)],r=e.map((e=>n.particles.shape.options[e])).find((e=>!!e));r&&a(r,(e=>{e.font&&l.push(o(e.font))})),await Promise.all(l)}particleDestroy(e){delete e.emojiData}particleInit(e,t){const o=t.shapeData;if(!(null==o?void 0:o.value))return;const a=i(o.value,t.randomIndexData),l=o.font??s;if(!a)return;const r=`${a}_${l}`,c=this._emojiShapeDict.get(r);if(c)return void(t.emojiData=c);const p=2*n(t.size.value);let m;const f=n(t.size.value);if("undefined"!=typeof OffscreenCanvas){const e=new OffscreenCanvas(p,p),t=e.getContext("2d");if(!t)return;t.font=`400 ${2*f}px ${l}`,t.textBaseline="middle",t.textAlign="center",t.fillText(a,f,f),m=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=p,e.height=p;const t=e.getContext("2d");if(!t)return;t.font=`400 ${2*f}px ${l}`,t.textBaseline="middle",t.textAlign="center",t.fillText(a,f,f),m=e}this._emojiShapeDict.set(r,m),t.emojiData=m}}export{l as EmojiDrawer};