import{d as t,b as s,q as i,r as e,A as r,n as o,V as a}from"./icon-alert-Cei3Tz55.js";import n from"./AppContainer-CuCmPr8M.js";import{S as p}from"./SmoothReflow-DOlTFzdt.js";import{B as c}from"./BaseIcon-DKpoUDYB.js";import{A as l}from"./AppHeaderControl-DmqWUMjw.js";import u,{SubscriptionStatus as d}from"./SubscriptionSummary-Q5jMw6Hb.js";import"./VueBase-DhIJfHAY.js";import"./localStorage-BThj8CCp.js";import"./preload-helper-xKIU3iAw.js";import"./string-CbqVM-Zr.js";import"./showAnyway-IMtKhwyy.js";import"./reactiveCustomization-D0v-tpvX.js";import"./allComponentsMounted-C3UsG_cA.js";import"./index-xreAsusa.js";import"./migrateLegacyUserMessageHandler-aPkGeFs_.js";import"./main-Bw6ngw5x.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-D8ZiK_2v.js";import"./arrow-Be8MuPJi.js";import"./icon-weather-reset-CoyptBb8.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-close-BUGl_M7j.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-edit-CixeXNYx.js";import"./icon-ellipsis-D3jS4u3x.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-hide-NFfBhfBx.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./search-DCqlmJx6.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-soundwave-CtfxieWt.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DeIn-36G.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";const j="plusStatusBanner:trial:dismissed",S="plusStatusBanner:expired:dismissed";var b=(t=>(t.Default="control",t.AddPayment="experimental",t))(b||{});const h={control:"Subscribe to Momentum Plus",experimental:"Add payment method"},y=t("plusStatusBanner",{state:()=>({trialDismissedDate:Number(localStorage.getItem(j)??0),expiredDismissedDate:Number(localStorage.getItem(S)??0)}),getters:{trialVisible(t){const i=u();return i.status===d.TrialingCardless&&i.trialRemainingDays<=2&&!i.hasPaymentMethod&&s.dateDiffIntegerDays(t.trialDismissedDate,Date.now())>=1},expiredVisible(t){const s=u();return[d.ExpiredPlus,d.ExpiredTrial].includes(s.status)&&!t.expiredDismissedDate},bannerVisible(){const t=u();return t.loaded&&!t.loading&&(this.trialVisible||this.expiredVisible)},trialDaysText(){const t=u();return`${t.trialRemainingDays} day${1!==t.trialRemainingDays?"s":""}`}},actions:{dismissTrialBannerForDay(){const t=Date.now();localStorage.setItem(j,String(t)),this.trialDismissedDate=t},dismissExpiredBannerIndefinitely(){const t=Date.now();localStorage.setItem(S,String(t)),this.expiredDismissedDate=t}}}),x=new r({feature:"plus status banner"});const f=o(i({name:"PlusStatusBanner",components:{AppHeaderControl:l,BaseIcon:c,SmoothReflow:p,AppContainer:n},setup:()=>({plusStatusBannerStore:y(),subscriptionSummaryStore:u()}),computed:{ctaTrialButtonExperiment:()=>e.experiments.find((t=>"plus_status_cta_trial_button_experiment"===t.experimentName)),ctaTrialButtonExperimentCopy(){const t=this.ctaTrialButtonExperiment?this.ctaTrialButtonExperiment.variantName:b.Default;return h[t]},expiredStatusCopy(){switch(this.subscriptionSummaryStore.status){case d.ExpiredTrial:return"Your Plus trial has expired";case d.ExpiredPlus:default:return"You've lost access to Plus!"}}},async mounted(){await this.subscriptionSummaryStore.refresh(),m.widgetManager.appReady("plus-status-banner")},methods:{openUpgradeModal(){x.capture("add payment clicked",{type:this.subscriptionSummaryStore.status}),m.cmd("window.account.open.login","subscription?add_card=true")},closeBanner(){x.capture("dismissed",{type:this.subscriptionSummaryStore.status}),this.plusStatusBannerStore.trialVisible?this.plusStatusBannerStore.dismissTrialBannerForDay():this.plusStatusBannerStore.expiredVisible&&this.plusStatusBannerStore.dismissExpiredBannerIndefinitely()}}}),(function(){var t=this,s=t._self._c;return t._self._setupProxy,s("smooth-reflow",{attrs:{disabled:t.plusStatusBannerStore.bannerVisible}},[t.plusStatusBannerStore.bannerVisible?s("app-container",{staticClass:"plus-status-banner dark dark-full",attrs:{"app-name":"plus-status-banner","data-test":"plus-status-banner"}},[t.plusStatusBannerStore.trialVisible?[s("span",{staticClass:"status-title"},[t._v(" "+t._s(t.plusStatusBannerStore.trialDaysText)+" remaining in Plus trial • Don't lose access to Plus! ")]),s("button",{staticClass:"dash-button",attrs:{"data-test":"upgrade"},on:{click:t.openUpgradeModal}},[t._v(t._s(t.ctaTrialButtonExperimentCopy))])]:t.plusStatusBannerStore.expiredVisible?[s("span",{staticClass:"status-title"},[t._v(t._s(t.expiredStatusCopy))]),s("button",{staticClass:"dash-button",attrs:{"data-test":"upgrade"},on:{click:t.openUpgradeModal}},[t._v("Subscribe to access all features")])]:t._e(),s("app-header-control",{attrs:{"data-test":"dismiss"},on:{click:t.closeBanner}},[s("base-icon",{staticClass:"icon close",attrs:{src:"icon-close",size:"11px"}})],1)],2):t._e()],1)}),[],!1,null,"dad697fd").exports,g=document.querySelector(".region.top-bar"),B=document.createElement("div");g&&g.prepend(B),new a({render:t=>t(f)}).$mount(B);