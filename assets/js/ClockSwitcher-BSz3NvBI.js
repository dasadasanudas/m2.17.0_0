import{T as o}from"./PomodoroTimers-BWkB-14p.js";import{q as t,B as s,n as r}from"./icon-alert-Cei3Tz55.js";import{B as e}from"./BaseDropdown-BnEBcF3g.js";import{B as n}from"./BaseDropdownText-CBFPvlq-.js";import{B as i}from"./BaseDropdownOption--ggIz8bI.js";import{B as c}from"./BaseIcon-DKpoUDYB.js";import{_ as a}from"./switch-EuBTQVVE.js";var p=(o=>(o.Clock="clock",o.Percent="percent",o))(p||{});const d={clock:{id:"clock",label:"Clock",icon:"icon/clock"},percent:{id:"percent",label:"Percent of day",icon:"icon-percent"},[o.CountUp]:{id:o.CountUp,label:"Countup",icon:"icon/countup"},[o.Timer]:{id:o.Timer,label:"Pomodoro",icon:"icon/pomodoro"}};const l=r(t({name:"ClockSwitcher",components:{BaseDropdown:e,BaseDropdownText:n,BaseDropdownOption:i,BaseIcon:c},props:{modeOptions:{type:Array,required:!0}},setup:()=>({dropdown:s()}),methods:{openDropdown(){var o;null==(o=this.dropdown)||o.openDropdown()},closeDropdown(){var o;null==(o=this.dropdown)||o.closeDropdown()}}}),(function(){var o=this,t=o._self._c;return o._self._setupProxy,t("base-dropdown",{ref:"switchToDropdown",staticClass:"clock-switcher",attrs:{"data-test":"switch-to-toggle"},scopedSlots:o._u([{key:"toggle",fn:function(){return[t("div",{staticClass:"icon-wrapper more-toggle"},[t("inline-svg",{staticClass:"icon icon-switcher",attrs:{src:a}})],1)]},proxy:!0}])},[t("base-dropdown-text",{staticClass:"switch-to-heading",attrs:{"is-title":!0}},[o._v("Switch To")]),o._l(o.modeOptions,(function(s){return t("base-dropdown-option",{key:s.id,attrs:{"data-test":s.id.toLowerCase()},on:{click:function(t){return o.$emit("switchTo",s.id)}}},[t("base-icon",{staticClass:"dropdown-icon",attrs:{src:s.icon,size:"13px"}}),t("span",[o._v(o._s(s.label))])],1)}))],2)}),[],!1,null,"0afd05f0").exports;export{l as C,p as a,d as c};