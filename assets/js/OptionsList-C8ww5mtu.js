import{u as t}from"./preload-helper-xKIU3iAw.js";import{n as i}from"./icon-alert-Cei3Tz55.js";const e=i({name:"OptionsList",props:{options:{type:Array,required:!0,validator:t=>t.every((t=>"value"in t&&"label"in t))},value:{type:String,required:!0}},unreactive:()=>({uuid:t()})},(function(){var t=this,i=t._self._c;return i("div",{staticClass:"options-list"},t._l(t.options,(function(e,a){return i("div",{key:e.value,staticClass:"options-list-option",on:{click:function(t){t.stopPropagation()}}},[0!==a?i("div",{staticClass:"options-list-divider"}):t._e(),i("input",{attrs:{id:`${t.uuid}-${e.value}`,name:t.uuid,type:"radio"},domProps:{value:e.value,checked:e.value===t.value},on:{change:function(i){return t.$emit("input",e.value)}}}),i("label",{attrs:{for:`${t.uuid}-${e.value}`}},[t._v(" "+t._s(e.label)+" ")])])})),0)}),[],!1,null,"7ba507b2").exports;export{e as O};