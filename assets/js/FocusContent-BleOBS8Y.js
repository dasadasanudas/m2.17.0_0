const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/Dropdown-DeF9NXyH.js","assets/js/icon-ellipsis-D3jS4u3x.js","assets/js/icon-alert-Cei3Tz55.js","assets/js/localStorage-BThj8CCp.js","assets/js/preload-helper-xKIU3iAw.js","assets/js/string-CbqVM-Zr.js","assets/css/Dropdown-BcLAxJWG.css","assets/js/DropdownOption-BpTqBfU0.js","assets/js/ToastMenuLegacy-CnD9blB_.js","assets/css/ToastMenuLegacy-DzMwE8K6.css"])))=>i.map(i=>d[i]);
import{_ as o}from"./preload-helper-xKIU3iAw.js";import{a as t}from"./allComponentsMounted-C3UsG_cA.js";import{T as s}from"./index-xreAsusa.js";import{c as i}from"./main-BfdXN562.js";import{a as n}from"./reactiveCustomization-D0v-tpvX.js";import{n as e,A as r}from"./icon-alert-Cei3Tz55.js";import{D as c}from"./DashCheckbox-DAZdtujO.js";import{_ as a}from"./icon-edit-CixeXNYx.js";import{_ as p}from"./icon-close-BUGl_M7j.js";import{b as l,c as u}from"./icon-weather-reset-CoyptBb8.js";import"./localStorage-BThj8CCp.js";import"./migrateLegacyUserMessageHandler-aPkGeFs_.js";import"./main-Bw6ngw5x.js";import"./VueBase-DhIJfHAY.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-D8ZiK_2v.js";import"./search-DCqlmJx6.js";import"./SmoothReflow-DOlTFzdt.js";import"./string-CbqVM-Zr.js";import"./BaseIcon-DKpoUDYB.js";import"./arrow-Be8MuPJi.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-ellipsis-D3jS4u3x.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-hide-NFfBhfBx.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-soundwave-CtfxieWt.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DeIn-36G.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";const d=e({name:"FocusContent",components:{DashCheckbox:c,Dropdown:()=>o((()=>import("./Dropdown-DeF9NXyH.js")),__vite__mapDeps([0,1,2,3,4,5,6])),DropdownOption:()=>o((()=>import("./DropdownOption-BpTqBfU0.js")),__vite__mapDeps([7,2,3,4,5])),ToastMenu:()=>o((()=>import("./ToastMenuLegacy-CnD9blB_.js")),__vite__mapDeps([8,2,3,4,5,9])),ThreeColLayout:s},mixins:[t],props:{focus:{type:Object,default:()=>({})},inPomodoro:{type:Boolean,default:!1}},data:()=>({dropdownActive:!1}),unreactive:()=>({centerBelowMetadata:i}),computed:{autofocusLabel(){return(this.autoFocus?"Turn off":"Turn on")+" Top task in center"},autoFocus:()=>n.autoFocus},watch:{focus:{handler(){this.$nextTick((()=>m.trigger("focus-content:updated")))},immediate:!0}},methods:{handleDropdownClick(o){this.toggleDropdown(!1),this.$emit(o)},toggleAutoFocus(){this.toggleDropdown(!1),m.commandManager.execute("todo.toggle.autofocus",null,{sourceApp:"Focus",eventSource:"focus"})},startPomodoroTimer(){this.toggleDropdown(!1),this.$plus?(m.trigger("pomodoro:show"),localStorage.setItem("pomodoro-focus-timer",!0),r.capture("start pomodoro timer click",{feature:"focus",is_paid_event:!0})):m.cmd("modal.open","UPSELL_POMODORO",{eventSource:"focus"})},toggleDropdown(o=!this.dropdownActive){this.dropdownActive=o},complete(){this.$emit("complete")},afterEnter(){m.trigger("focus-content:updated")}}},(function(){var o=this,t=o._self._c;return t("div",{staticClass:"focus-content"},[o.inPomodoro?o._e():t("h3",{staticClass:"focus-title"},[o._v("Today")]),t("transition",{attrs:{name:"fade",mode:"out-in"},on:{"after-enter":o.afterEnter}},[t("three-col-layout",{key:o.focus.focus,staticClass:"focus-row",class:{complete:o.focus.completed},scopedSlots:o._u([{key:"left",fn:function(){return[o._t("nav"),t("dash-checkbox",{attrs:{"data-test":"complete",value:!!o.focus.completed},on:{input:o.complete}})]},proxy:!0},{key:"center",fn:function(){return[t("div",{directives:[{name:"mobile-click",rawName:"v-mobile-click",value:o.toggleDropdown.bind(null,!0),expression:"toggleDropdown.bind(null, true)"}],staticClass:"todays-focus",attrs:{"data-test":"focus-active"},on:{dblclick:function(t){return o.toggleDropdown(!0)}}},[o._v(o._s(o.focus.focus))])]},proxy:!0},{key:"right",fn:function(){return[t(o.$touch?"ToastMenu":"Dropdown",{tag:"component",staticClass:"focus-dropdown",attrs:{"data-test":"dropdown","on-dash":!0,active:o.dropdownActive,"section-title":"Focus Actions"},on:{toggle:o.toggleDropdown}},[o.focus.completed?o._e():t("dropdown-option",{staticClass:"focus-edit",attrs:{name:"Edit","data-test":"edit"},nativeOn:{click:function(t){return o.handleDropdownClick("edit")}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("inline-svg",{staticClass:"dropdown-list-icon icon icon-edit",attrs:{src:a}})]},proxy:!0}],null,!1,4021741150)}),t("dropdown-option",{staticClass:"focus-clear",attrs:{name:"Clear","data-test":"clear"},nativeOn:{click:function(t){return o.handleDropdownClick("archive")}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("inline-svg",{staticClass:"dropdown-list-icon icon icon-delete",attrs:{src:p}})]},proxy:!0}])}),o.focus.completed?t("dropdown-option",{staticClass:"focus-new",attrs:{name:"New","data-test":"new"},nativeOn:{click:function(t){return o.handleDropdownClick("new")}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("inline-svg",{staticClass:"dropdown-list-icon icon icon-new",attrs:{src:p}})]},proxy:!0}],null,!1,500737588)}):o._e(),o.inPomodoro?o._e():t("dropdown-option",{staticClass:"pomodoro-timer",attrs:{"is-plus":!0,name:"Start Pomodoro Timer","data-test":"pomodoro-timer"},nativeOn:{click:function(t){return o.startPomodoroTimer.apply(null,arguments)}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("inline-svg",{staticClass:"dropdown-list-icon icon icon-pomodoro",attrs:{src:l}})]},proxy:!0}],null,!1,3069790782)}),t("dropdown-option",{staticClass:"toggle-autofocus",class:{active:o.autoFocus},attrs:{name:o.autofocusLabel,"data-test":"autofocus","is-plus":!0},nativeOn:{click:function(t){return o.toggleAutoFocus.apply(null,arguments)}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("inline-svg",{staticClass:"dropdown-list-icon icon icon-autofocus",attrs:{src:u}})]},proxy:!0}])})],1)]},proxy:!0}],null,!0)})],1)],1)}),[],!1,null,"16a4e4a8").exports;export{d as default};