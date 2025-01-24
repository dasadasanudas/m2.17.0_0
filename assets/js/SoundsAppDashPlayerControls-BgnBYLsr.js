import{q as t,n as o,a5 as e,T as i}from"./icon-alert-Cei3Tz55.js";import{B as s}from"./BaseIcon-DKpoUDYB.js";import{S as a}from"./SmoothReflow-DOlTFzdt.js";import{u as r,S as p,a as n}from"./state-Te6231FT.js";import{u as l}from"./soundsPlayer-CXHWl8nc.js";import{S as c,a as u}from"./SoundsAudioCover-Bf4yN6z4.js";import{S as d}from"./Slider-om_kKXEn.js";import"./localStorage-BThj8CCp.js";import"./preload-helper-xKIU3iAw.js";import"./string-CbqVM-Zr.js";import"./arrow-Be8MuPJi.js";import"./icon-weather-reset-CoyptBb8.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-close-BUGl_M7j.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-edit-CixeXNYx.js";import"./icon-ellipsis-D3jS4u3x.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-hide-NFfBhfBx.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./search-DCqlmJx6.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-soundwave-CtfxieWt.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DeIn-36G.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";import"./allComponentsMounted-C3UsG_cA.js";import"./ViewState-Wts6aMTb.js";import"./main-Bw6ngw5x.js";import"./index-xreAsusa.js";import"./migrateLegacyUserMessageHandler-aPkGeFs_.js";import"./IframeMessenger-CZMsBVeI.js";import"./focusModeHelpers-CJvjcTIo.js";import"./reactiveCustomization-D0v-tpvX.js";import"./VueBase-DhIJfHAY.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-D8ZiK_2v.js";import"./PomodoroTimers-BWkB-14p.js";import"./focusModeViewState-DzdkaS0D.js";import"./pomodoroCompleted-CChcDNoN.js";import"./loginHelpers-CQ1ZDpQp.js";import"./authService-piMSfLVB.js";import"./customization-C9MvloB8.js";import"./globalKeyEventManager-2_REwTdI.js";const j=t({name:"SoundsVolumeIndicator",components:{BaseIcon:s},emits:["click"],setup:()=>({playerStore:l()}),computed:{icon(){const t=this.playerStore.muted?0:this.playerStore.globalVolume;return`icon/sounds/volume/volume${0===t?"-x":t<.33?"":t<.66?"-1":"-2"}`}},methods:{toggleMuted(){const t=0===this.playerStore.globalVolume?1:this.playerStore.globalVolume;this.playerStore.setGlobalVolume(t,!this.playerStore.muted)}}});const v=o(t({name:"SoundsAppDashPlayerControls",components:{BaseIcon:s,SoundsVolumeIndicator:o(j,(function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",{staticClass:"sounds-volume-indicator",on:{click:function(o){return o.stopPropagation(),t.toggleMuted.apply(null,arguments)}}},[o("base-icon",{attrs:{src:t.icon,size:"1rem"}})],1)}),[],!1,null,"8ed610f3").exports,Slider:d,SoundsPlayButton:c,SmoothReflow:a,SoundsAudioCover:u},setup:()=>({viewStateStore:r(),playerStore:l(),capture:e("capture"),globalVolumeAnalyticsCaptureTimeout:void 0,SoundsDataType:p}),computed:{activeItem(){return this.playerStore.activeItem},activeTabId(){return this.playerStore.activeTabId},activeItemViewVisible(){return this.viewStateStore.popupActive&&this.viewStateStore.activeViewId===n.Item},volume:{get(){return this.playerStore.muted?0:this.playerStore.globalVolume},set(t){this.playerStore.setGlobalVolume(t,0===t),clearTimeout(this.globalVolumeAnalyticsCaptureTimeout),this.globalVolumeAnalyticsCaptureTimeout=setTimeout((()=>{var o,e,i,s;null==(s=this.capture)||s.call(this,"sounds global volume update",{volume:t,id:null==(o=this.activeItem)?void 0:o.id,type:null==(e=this.activeItem)?void 0:e.type,title:null==(i=this.activeItem)?void 0:i.title})}),300)}}},watch:{async activeTabId(t,o){t!==i&&""!==o&&(await this.viewStateStore.setActiveView(n.Library),this.viewStateStore.activeViewItemId="")}},mounted(){m.on("globalEvent:spacebar",this.togglePaused)},destroyed(){m.off("globalEvent:spacebar",this.togglePaused)},methods:{async togglePaused(){var t;this.activeItem&&(await this.playerStore.toggleActiveItemPaused(),null==(t=this.capture)||t.call(this,"sounds paused toggle",{id:this.activeItem.id,type:this.activeItem.type,title:this.activeItem.title,paused:this.playerStore.paused}))},async openActiveItemView(){this.playerStore.activeItem&&!this.activeItemViewVisible&&(this.viewStateStore.activeViewItemId=this.playerStore.activeItem.id,await this.viewStateStore.setActiveView(n.Item),await this.viewStateStore.togglePopup(!0))},skip(){this.playerStore.skip()}}}),(function(){var t=this,o=t._self._c;return t._self._setupProxy,o("transition",{attrs:{name:"fade-fast",duration:200}},[t.activeItem?o("div",{staticClass:"sounds-app-dash-player-controls",class:{visible:t.viewStateStore.popupActive}},[o("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[o("sounds-audio-cover",{key:t.activeItem.id,attrs:{"icon-with-thumbnail":!1,icon:t.activeItem.icon??"",type:t.activeItem.type,"thumbnail-url":t.activeItem.thumbnailSrc,size:"34px"}})],1),o("sounds-play-button",{attrs:{id:t.activeItem.id,paused:t.playerStore.paused,loading:t.playerStore.loadingActiveItemPlayer,size:"var(--spacing-6)","data-test":"sounds-play-pause","data-paused":t.playerStore.paused?"true":"false"},on:{click:function(o){return o.stopPropagation(),t.togglePaused.apply(null,arguments)}}}),o("smooth-reflow",{staticClass:"controls-reflow",attrs:{name:"fade-fast",mode:"out-in",width:!0,height:!1,duration:125}},[o("div",{staticClass:"controls-overflow"},[t.activeItem.type===t.SoundsDataType.Spotify?o("div",{staticClass:"icon-wrapper skip-icon",on:{click:function(o){return o.stopPropagation(),t.skip.apply(null,arguments)}}},[o("base-icon",{attrs:{"data-test":"dash-sounds-skip",src:"icon/media/skip-forward",size:"1rem"}})],1):t._e(),t.activeItem.type!==t.SoundsDataType.Spotify?o("div",{staticClass:"volume-content"},[o("sounds-volume-indicator"),o("slider",{attrs:{id:"globalSoundsVolume","data-test":"dash-sounds-volume-slider",min:0,max:1,interval:.05},model:{value:t.volume,callback:function(o){t.volume=o},expression:"volume"}})],1):t._e(),t.activeItem.type!==t.SoundsDataType.Soundscapes||t.activeItemViewVisible?t._e():o("div",{staticClass:"icon-wrapper edit-item-icon",on:{click:function(o){return o.stopPropagation(),t.openActiveItemView.apply(null,arguments)}}},[o("base-icon",{attrs:{"data-test":"dash-sounds-adjust-tracks",src:"icon/apps/settings",size:"1rem"}})],1)])])],1):t._e()])}),[],!1,null,"414bdac3").exports;export{v as default};