import{g as t}from"./globalKeyEventManager-2_REwTdI.js";import{u as e}from"./preload-helper-xKIU3iAw.js";import{A as n}from"./AppHeader-qzvUiXuB.js";import{q as i,n as s}from"./icon-alert-Cei3Tz55.js";const a={title:{type:String,default:""},description:{type:String,default:""},confirm:{type:Function,default:()=>{}},confirmText:{type:String,default:"Yes"},cancel:{type:Function,default:()=>{}},cancelText:{type:String,default:"No"},type:{type:String,default:n.Overlay}};const c=s(i({name:"AppConfirmCancel",props:a,emits:["confirm","cancel"],setup:()=>({uniqueId:e()}),mounted(){t.registerEventListener("cancelConfirmNo"+this.uniqueId,"keyup",27,this.cancel),t.registerEventListener("cancelConfirmYes"+this.uniqueId,"keyup",13,this.confirm)},destroyed(){t.removeEventListener("cancelConfirmNo"+this.uniqueId,"keyup",27),t.removeEventListener("cancelConfirmYes"+this.uniqueId,"keyup",13)}}),(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"app-confirm-cancel"},[e("div",{staticClass:"app-confirm-cancel-message"},[e("div",{staticClass:"app-confirm-title"},[t._v(t._s(t.title))]),t.description?e("p",{staticClass:"app-confirm-description"},[t._v(t._s(t.description))]):t._e()]),e("div",{staticClass:"app-confirm-cancel-buttons"},[e("button",{staticClass:"button",attrs:{"data-test":"confirm"},on:{click:()=>t.confirm()}},[t._v(t._s(t.confirmText))]),e("button",{staticClass:"button button-neutral",attrs:{"data-test":"cancel"},on:{click:()=>t.cancel()}},[t._v(t._s(t.cancelText))])])])}),[],!1,null,"f97dd7d9").exports;export{c as A,a};