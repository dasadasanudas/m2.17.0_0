const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/Quote-B5NRX33J.js","assets/js/icon-alert-Cei3Tz55.js","assets/js/localStorage-BThj8CCp.js","assets/js/preload-helper-xKIU3iAw.js","assets/js/string-CbqVM-Zr.js","assets/js/reactiveCustomization-D0v-tpvX.js","assets/js/VueBase-DhIJfHAY.js","assets/js/index-xreAsusa.js","assets/js/migrateLegacyUserMessageHandler-aPkGeFs_.js","assets/js/main-Bw6ngw5x.js","assets/css/index-C0DDMXTO.css","assets/js/index-CJJH83pl.js","assets/js/portal-vue.esm-D8ZiK_2v.js","assets/js/allComponentsMounted-C3UsG_cA.js","assets/js/showAnyway-IMtKhwyy.js","assets/js/BaseDropdownOption--ggIz8bI.js","assets/js/constants-CALDQiUE.js","assets/css/BaseDropdownOption-DAuhx1rJ.css","assets/js/BaseDropdownDivider-BDCJHxgS.js","assets/css/BaseDropdownDivider-D_a21TP7.css","assets/js/BaseDropdown-BnEBcF3g.js","assets/js/BaseDropdownContent-CE_Bs11r.js","assets/js/index-CAmMGhGv.js","assets/css/BaseDropdownContent-BzU7S1Vc.css","assets/js/icon-ellipsis-D3jS4u3x.js","assets/css/BaseDropdown-DOOXxvW0.css","assets/js/icon-heart-v5O7C6eS.js","assets/js/icon-skip-intro-BUi8b3Ak.js","assets/js/icon-x-qUCmf2CW.js","assets/js/icon-cog-BFr_Pva7.js","assets/css/Quote-DPRKltyr.css","assets/js/FocusModeHintsDash-DNcRLufU.js","assets/js/focusModeHelpers-CJvjcTIo.js","assets/js/PomodoroTimers-BWkB-14p.js","assets/css/FocusModeHintsDash-DP4hCF5D.css"])))=>i.map(i=>d[i]);
import"./VueBase-DhIJfHAY.js";import{_ as t}from"./preload-helper-xKIU3iAw.js";import{useFocusModeViewStateStore as e}from"./focusModeViewState-DzdkaS0D.js";import{a as o}from"./allComponentsMounted-C3UsG_cA.js";import{c as s}from"./reactiveCustomization-D0v-tpvX.js";import{n as i,V as r}from"./icon-alert-Cei3Tz55.js";import"./index-xreAsusa.js";import"./localStorage-BThj8CCp.js";import"./migrateLegacyUserMessageHandler-aPkGeFs_.js";import"./main-Bw6ngw5x.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-D8ZiK_2v.js";import"./ViewState-Wts6aMTb.js";import"./focusModeHelpers-CJvjcTIo.js";import"./PomodoroTimers-BWkB-14p.js";import"./string-CbqVM-Zr.js";const n=i({name:"BottomCenter",components:{Quote:()=>t((()=>import("./Quote-B5NRX33J.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])),FocusModeHintsDash:()=>t((()=>import("./FocusModeHintsDash-DNcRLufU.js")),__vite__mapDeps([31,7,3,1,2,4,8,9,10,32,5,6,11,12,33,14,34]))},mixins:[o],setup:()=>({widgetId:"region-bottom-center",focusModeViewStateStore:e()}),computed:{quoteVisible:()=>s.quoteVisible,focusingViewActive(){return this.focusModeViewStateStore.currentlyFocusing}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bottom-center",attrs:{"data-test":"region-bottom-center"}},[e("transition",{attrs:{name:"fade"}},[t.quoteVisible?e("quote"):t._e()],1),e("transition",{attrs:{name:"fade"}},[t.focusingViewActive?e("focus-mode-hints-dash"):t._e()],1)],1)}),[],!1,null,null).exports,m=document.querySelector(".region.bottom-center");m&&new r({render:t=>t(n)}).$mount(m);