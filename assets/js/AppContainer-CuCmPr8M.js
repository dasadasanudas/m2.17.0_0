import{s as t}from"./showAnyway-IMtKhwyy.js";import{c as e}from"./reactiveCustomization-D0v-tpvX.js";import{a}from"./allComponentsMounted-C3UsG_cA.js";import{n as s,r as i}from"./icon-alert-Cei3Tz55.js";import"./VueBase-DhIJfHAY.js";import"./index-xreAsusa.js";import"./preload-helper-xKIU3iAw.js";import"./localStorage-BThj8CCp.js";import"./migrateLegacyUserMessageHandler-aPkGeFs_.js";import"./main-Bw6ngw5x.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-D8ZiK_2v.js";import"./string-CbqVM-Zr.js";const o=s({name:"AppContainer",mixins:[a],props:{appName:{type:String,required:!0},overlay:{type:Boolean,default:!1},visibleSetting:{type:String,default:""},hotkey:{type:String,default:""}},computed:{showAnyway(){return t.includes(this.appName)},appVisible(){return!this.visibleSetting||e[this.visibleSetting]},disableTransition:()=>i.disableAppTransitions},created(){this.hotkey&&m.on("globalEvent:key:"+this.hotkey.toUpperCase(),this.toggleApp)},destroyed(){this.hotkey&&m.off("globalEvent:key:"+this.hotkey.toUpperCase(),this.toggleApp)},methods:{toggleApp(t){this.$emit("toggle",t)}}},(function(){var t=this,e=t._self._c;return e("transition",{attrs:{appear:"",name:"fade",duration:t.disableTransition?0:void 0}},[t.appVisible?e("div",{staticClass:"app-container",class:[t.appName,{"show-anyway":t.showAnyway}],attrs:{"data-show-anyway":t.appName}},[t._t("default"),e("transition",{attrs:{name:"fade",duration:"150"}},[t.overlay?e("div",{staticClass:"touch-overlay",on:{click:t.toggleApp}}):t._e()])],2):t._e()])}),[],!1,null,null).exports;export{o as default};