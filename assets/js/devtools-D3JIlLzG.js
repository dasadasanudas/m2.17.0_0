const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/focusModeHelpers-CJvjcTIo.js","assets/js/icon-alert-Cei3Tz55.js","assets/js/localStorage-BThj8CCp.js","assets/js/preload-helper-xKIU3iAw.js","assets/js/string-CbqVM-Zr.js","assets/js/index-xreAsusa.js","assets/js/migrateLegacyUserMessageHandler-aPkGeFs_.js","assets/js/main-Bw6ngw5x.js","assets/css/index-C0DDMXTO.css","assets/js/reactiveCustomization-D0v-tpvX.js","assets/js/VueBase-DhIJfHAY.js","assets/js/index-CJJH83pl.js","assets/js/portal-vue.esm-D8ZiK_2v.js","assets/js/PomodoroTimers-BWkB-14p.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./preload-helper-xKIU3iAw.js";import{_ as t}from"./icon-confetti-Dz2LojDe.js";import{f as o}from"./icon-alert-Cei3Tz55.js";import"./localStorage-BThj8CCp.js";import"./string-CbqVM-Zr.js";m.models.DevTools=Backbone.Model.extend({stringDebugDelimiter:"┇",logEnvironment:m.logEnvironment,initialize:function(){setTimeout(_.bind(this.onDashboardReady,this),100),this.forceSafariVersionNotificationCheck=!!localStorage.getItem("notification:safariUpdate:forceVersionCheck"),this.onMainRenderComplete(),this.listenTo(m,"settings:panel:visible",this.onSettingsPanelVisible)},onDashboardReady:function(){this.highlightEnvironment(),this.setDevShortcuts(),this.initDevStates()},onMainRenderComplete:function(){this.autoDisplaySettings(),this.personalAutoSetup()},highlightEnvironment:function(){"staging"===localStorage.getItem("api")&&$("body").addClass("staging"),"true"===localStorage.getItem("local-account")&&$("body").addClass("local-account"),"true"===localStorage.getItem("local-marketing")&&$("body").addClass("local-marketing")},personalAutoSetup:function(){m.devToolsPersonal&&m.devToolsPersonal.autoSetup&&m.devToolsPersonal.autoSetup()},onSettingsPanelVisible:function(){},setDevShortcuts:function(){let e=this;$(document).on("keydown",(function(t){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName&&!0!==document.activeElement.isContentEditable&&(48===t.keyCode?e.displaySettings("general"):49===t.keyCode?e.displaySettings("todo"):50===t.keyCode?e.displaySettings("background-settings"):51===t.keyCode?e.displaySettings("quote-settings"):53===t.keyCode?e.displaySettings("metrics"):54===t.keyCode?e.displaySettings("bookmark-settings"):55!==t.keyCode||t.shiftKey?55===t.keyCode&&t.shiftKey?e.toggleBalanceMode():56===t.keyCode?e.toggleLoggingMEvents():81!==t.keyCode||t.ctrlKey||t.shiftKey?81===t.keyCode&&!t.ctrlKey&&t.shiftKey?e.prevThemeColor():81===t.keyCode&&t.ctrlKey?e.resetTheme():69===t.keyCode?e.toggleSettings():82!==t.keyCode||t.metaKey?89===t.keyCode?e.toggleSettingsTransparency():85!==t.keyCode||!t.ctrlKey||t.altKey||t.shiftKey||t.metaKey?221===t.keyCode?e.toggleFeatureDebug("instrumentation"):220!==t.keyCode||t.ctrlKey||t.altKey||t.shiftKey||t.metaKey?220===t.keyCode&&t.shiftKey?e.toggleFeatureDebug("time"):68!==t.keyCode||t.ctrlKey||t.shiftKey||t.metaKey?83===t.keyCode&&t.ctrlKey&&!t.altKey&&t.shiftKey&&!t.metaKey?e.resetToIntro(!0,!1,!1):83===t.keyCode&&t.ctrlKey&&t.altKey&&t.shiftKey&&!t.metaKey?e.resetToIntro(!0,!0,!0):68!==t.keyCode||t.ctrlKey||!t.shiftKey||t.metaKey?68===t.keyCode&&t.ctrlKey&&t.shiftKey&&!t.metaKey?e.triggerNewDay():76===t.keyCode&&t.ctrlKey&&!t.altKey&&t.shiftKey&&!t.metaKey?e.resetToIntro(!1,!1,!1):76===t.keyCode&&t.ctrlKey&&t.altKey&&t.shiftKey&&!t.metaKey?e.resetToIntro(!1,!0,!0):76===t.keyCode&&t.metaKey&&t.shiftKey?e.logEnvironment():90!==t.keyCode||t.shiftKey?90===t.keyCode&&t.shiftKey?e.toggleClockFormat():88===t.keyCode?e.toggleCssDebug():77!==t.keyCode||t.shiftKey||t.ctrlKey?77===t.keyCode&&t.shiftKey&&!t.ctrlKey&&e.toggleMantras():e.displaySettings("mantra-settings"):e.togglePercentClock():e.prevThemeFont():e.nextThemeFont():e.toggleFeatureDebug("countdown"):e.toggleClockPosition():e.reloadPage():e.nextThemeColor():e.displaySettings("balance"))})),$(document).on("dblclick",(function(t){let o=$(t.target);o.hasClass("settings-nav-item")&&e.updateSettingsSectionAuto(o)}))},autoDisplaySettings:function(){let e=localStorage.devSettingsSectionAuto;if(e){let t=this;setTimeout((function(){t.displaySettings(e,!0)}),100)}},updateSettingsSectionAuto:function(e){let t=e.data("navitem"),o=localStorage.devSettingsSectionAuto,n=[{title:"general",id:"general"},{title:"task",id:"todo"},{title:"photos",id:"background-settings"},{title:"quotes",id:"quote-settings"},{title:"mantras",id:"mantra-settings"},{title:"metrics",id:"metrics"},{title:"links",id:"bookmark-settings"},{title:"balance",id:"balance"}].find((e=>e.id===t));if(void 0===n)return;let i,s,a=n.title;t===o?(i="",a="(none)",s="rgba(255,0,0,0.2)"):(i=t,s="rgba(50,255,50,0.5)"),localStorage.devSettingsSectionAuto=i,this.log("auto display: "+a,7),$(".settings-nav-item").css({background:"none",transition:"background-color 0.2s ease"}),e.css("background",s),setTimeout((function(){e.css("background","none")}),200)},onTimeChange:function(e){m.devTools.log("Time change: "+e.getTimeString(),4)},initDevStates:function(){this.getFeatureDebug("css")&&$("body").addClass("debug"),this.getFeatureDebug("clockPosition")&&this.updateClockPosition()},displaySettings:function(e,t){m.devToolsPersonal&&m.devToolsPersonal.overrideSettingsDisplayShortcuts||(t||this.log("Settings > "+e),m.commandManager.executeAsync("settings.display",null,{section:e}))},nextThemeColor:function(){this.cycleThemeArray(!1,!0)},prevThemeColor:function(){this.cycleThemeArray(!1,!1)},resetTheme:function(){if(!this.isPlusUser())return;m.models.customization.save("themeColour","dark"),m.models.customization.save("themeFont","classic");let e="THEME: dark, FONT 1: classic";return this.log(e),e},toggleSettings:function(){this.log("toggleSettings"),m.trigger("globalEvent:toggleSettings")},reloadPage:function(e){e?(n.log("Reloading page in "+e/1e3+"s…",8),setTimeout((function(){window.location.reload()}),e)):(n.log("Reloading page…",8),window.location.reload())},toggleClockPosition:function(){this.toggleFeatureDebug("clockPosition")?this.updateClockPosition():this.reloadPage(500)},updateClockPosition:function(){let e=document.documentElement.clientHeight;(e+212)/2+30>e-510&&$(".center").css({top:"unset",bottom:"540px",left:0,transform:"unset"})},toggleSettingsTransparency:function(){let e=$(".app");"light"===m.models.customization.get("themeColour")?e.css("background-color","rgb(255, 255, 255)"===e.css("background-color")?"rgba(255, 255, 255, 0.6)":"rgb(255, 255, 255)"):e.css("background-color","rgba(15, 15, 15, 0.925)"===e.css("background-color")?"rgba(15, 15, 15, 0.5)":"rgba(15, 15, 15, 0.925)")},resetToIntro:function(e,t,o){m.utils.clearStorage().finally((()=>{localStorage.removeItem("client_uuid"),e&&localStorage.setItem("api","staging"),t&&localStorage.setItem("local-account","true"),o&&localStorage.setItem("local-marketing","true"),this.reloadPage()}))},toggleLocalSale:function(){localStorage.getItem("sale:force")?localStorage.removeItem("sale:force"):localStorage.setItem("sale:force","true")},toggleFeatureDebug:function(e){if(!e)return console.error("featureName not defined"),!1;let t=this.getDebugKeyName(e),o=m.utils.toggleLocalStorageBool(t);return this.logBool(o,t),o},getFeatureDebug:function(e){let t=this.getDebugKeyName(e);return m.utils.getLocalStorageBool(t)},getDebugKeyName:function(e){return"debug"+m.utils.capitalizeFirstLetter(e)},nextThemeFont:function(){this.cycleThemeArray(!0,!0)},prevThemeFont:function(){this.cycleThemeArray(!0,!1)},triggerNewDay:function(){this.log("trigger newDay event",5),m.trigger("newDay")},toggleCssDebug:function(){let e=this.toggleFeatureDebug("css");$("body").toggleClass("debug",e)},togglePercentClock:function(){m.models.customization.get("percentClock")||m.models.customization.save("percentClock",!0),this.logBool(m.models.customization.get("percentClock"),"percent clock")},toggleClockFormat:function(){m.models.customization.save("hour12clock",!m.models.customization.get("hour12clock")),this.logBool(m.models.customization.get("hour12clock"),"12h clock")},toggleBalanceMode:function(){let e=!m.models.balanceMode.get("enabled");m.models.customization.set("balanceManualToggle",!0),m.models.balanceMode.set("enabled",e),m.models.balanceMode.balanceChanged(),e&&localStorage.setItem("balanceManualToggle",!0),this.logBool(e,"balance")},toggleMantras:function(){m.models.mantraManager.toggleEnabled(m.conditionalFeatures.featureEnabled("plus")),this.logBool(m.models.mantraManager.isEnabled(),"mantras")},resetMantrasToOnboard:function(){m.models.mantraSettings.save("firstMantraActivated",!1),n.log("➜ Mantras have been reset to the onboarding state. Custom mantras (if any) have not been deleted.",4)},cycleThemeArray:function(e,t){if(!this.isPlusUser())return;let o=e?"themeFont":"themeColour",n=e?this.getThemeFonts():this.getThemeColors(),i=t?m.utils.getNextIndex:m.utils.getPrevIndex,s=m.models.customization.get(o),a=i(n,n.indexOf(s)),l=n[a],r=(e?"FONT ":"THEME ")+(a+1)+": "+l;return m.models.customization.save(o,l),this.log(r,8),r},getThemeFonts:function(){return["classic","modern","startup","retro","warehouse","quirky"]},getThemeColors:function(){return["dark","light","custom","photo"]},isPlusUser:function(){let e=!0;return m.conditionalFeatures.featureEnabled("plus")||(console.error("Free user"),e=!1),e},log:function(e,t,o){let n="margin-left: -3px; padding: 3px; border-radius: 1px; color: #111111; ";void 0===t&&(t=0),0===t?n+="background: rgb(255,255,255)":1===t?n+="background: rgb(32,214,141);":2===t?n+="background: rgb(249,155,129);":3===t?n+="background-color: #ecea65;":4===t?n+="background-color: #0cf4ad;":5===t?n+="background-color: #e5d3b8;":6===t?n+="background-color: #f4d06f;":7===t?n+="background-color: #00d8ff;":8===t?n+="background-color: #05a6db;":9===t?n+="background-color: #d8Bfd8;":10===t?n+="background-color: #ff8db4;":11===t?n+="background-color: rgb(235,235,235)":12===t?n+="background-color: rgb(190,190,190)":13===t&&(n+="background-color: rgb(145,145,145)"),void 0===o&&m.devToolsPersonal&&void 0!==m.devToolsPersonal.timestampDigits&&(o=m.devToolsPersonal.timestampDigits),void 0!==o&&(e=this.getTimestamp(new Date,o)+"s ⋅ "+e),console.log("%c"+e,n)},testLog:function(){for(let e=0;e<14;e++)this.log("hello world",e)},getTimestamp:function(e,t){void 0===t&&(t=1);let o=Math.pow(10,t),n=e.getSeconds()+e.getMilliseconds()/1e3,i=parseFloat(Math.round(n*o)/o).toFixed(t);return"."!==i.slice(1,2)&&1!==i.length||(i="0"+i),i},logBool:function(e,t){this.log((t?t+": ":"")+e,e?1:"")},logString:function(e,t,o){if(void 0===e)return void console.warn("logString: `s` is undefined");void 0===t&&(t="-"),void 0===o&&(o=0);let n="  • "+(""+e.length).padStart(2," ")+" • ";this.log(t.padEnd(20," ")+n+this.wrapStringInDelimiter(e),o)},wrapStringInDelimiter:function(e){return this.stringDebugDelimiter+e+this.stringDebugDelimiter},resetLocalStorage:function(e){let t=[];for(let o=0;o<localStorage.length;o++)localStorage.key(o).startsWith(e)&&t.push(localStorage.key(o));t.forEach((function(e){localStorage.removeItem(e)})),window.location.reload()},cssHelper:function(e,t){void 0===t&&(t=3);let o={},n="",i=this,s=e[0];0===t?o=["display","opacity"]:1===t?o=["height","width","margin","padding","display","opacity"]:2===t&&(o=["height","width","margin","padding","border","display","float","opacity","position","top","right","bottom","left"]),$.isEmptyObject(o)||(_.each(o,(function(t){n+=i.cssLogHelper(e,t)+"\n"})),console.log(n)),3===t&&console.log("offset   :",e.offset(),"\nposition :",e.position(),"\nheights  :",{height:e.height(),inner:e.innerHeight(),outer:e.outerHeight()},"\nwidths   :",{width:e.width(),inner:e.innerWidth(),outer:e.width()},"\nscroll   :",{scrollTop:e.scrollTop(),scrollHeight:s.scrollHeight,scrollLeft:e.scrollLeft(),scrollWidth:s.scrollWidth})},cssLogHelper:function(e,t){return t.padEnd(10)+": "+e.css(t)},logDate:function(e,t){let o=("00"+e.getSeconds()).slice(-2)+"."+("000"+e.getMilliseconds()).slice(-3);t&&(o+=" - "+t),this.log(o)},formatDate:function(e,t,o,n){let i=m.utils.twoDigit(e.getDate())+" "+m.utils.getDayName(e,!0)+" "+m.utils.twoDigit(e.getHours())+":"+m.utils.twoDigit(e.getMinutes());return o&&(i=m.utils.twoDigit(e.getMonth()+1)+"-"+i),t&&(i=e.getFullYear()+"-"+i),n&&(i+=":"+m.utils.twoDigit(e.getSeconds())),i},formatMs:function(e){return(e/m.utils.mConst("msPerDay")).toFixed(3)},createDate:function(e,t,o,n){let i,s=new Date;return void 0===e?i=s:(void 0===o&&(o=0),void 0===n&&(n=0),i=new Date(s.getFullYear(),e,t,o,n,0,0,0)),i},todoListPrinter:function(e){let t={};function o(e,t,o){this.Title=e,this.Id=t,this.Order=o}e.itemCollection.models.forEach((function(e,n){let i=e.get("title"),s=e.get("id"),a=e.get("order");t[n]=new o(i,s,a)})),console.table(t)},devCountdownRunTests:function(){this.devCountdownTestDriver(!1,new Date(2018,7,22,15,30,0),new Date(2018,7,25,17,12,44,784)),this.devCountdownTestDriver(!0,new Date(2018,7,22,15,30,0),new Date(2018,7,25,17,12,44,784))},devCountdownTestDriver:function(e,t,o,i){n.log("devCountdownTestDriver",6);let s,a,l,r,g,c=this.collection.models[0],d=[],u=(y=t,(o.valueOf()-y.valueOf())/m.utils.mConst("msPerHour")),h=60*u,f=void 0===i?180:i;var y;c.save("hasHours",e),e||(o=new Date(o.setHours(m.utils.mConst("dateRolloverHour"),0,0,0))),console.log("Start   : "+n.formatDate(t,!0,!0)),console.log("End     : "+n.formatDate(o,!0,!0)+", hasHours: "+(e?"✅":"❌")),console.log("Diff    : "+u+"h");for(let b=0;b<h+f;b++)r=m.utils.dateAdd(t,"minute",b),s=c.formatTime(r,o),a=(s.number+s.unit).padStart(7," ")+"   ",l=[n.formatDate(r,!0,!0),n.formatDate(o,!1,!1),a,JSON.stringify(s.timeData)],d.push(l);n.log("Test results",3);for(let n=0;n<d.length;n++)g=d[n],(0===n||n>0&&d[n-1][2]!==g[2])&&console.log(g);n.log("\n\n")},toggleLoggingMEvents(){let e=this;if(this.loggingMEvents){this.log("stop logging m events!",2),m.off("all");Object.keys(m.models).forEach((e=>{m.models[e].off&&m.models[e].off("all")})),this.loggingMEvents=!1}else{this.log("logging m events!",2),m.on("all",(function(t){e.log("m: "+t,0)}));Object.keys(m.models).forEach((t=>{m.models[t].on&&m.models[t].on("all",(function(o){e.log("m.models."+t+": "+o,0)}))})),this.loggingMEvents=!0}},getPerformancePaintTimes(){let e="mPerformancePaintStats",t={};localStorage.getItem(e)?t=localStorage.getObject(e):(t.firstContentfulPaints=[],t.largestContentfulPaints=[]);let o=e=>e.reduce(((e,t)=>e+t))/e.length;if("PerformanceObserver"in window){new PerformanceObserver((e=>{e.getEntries().forEach((e=>{this.log(`${e.name}: ${e.startTime}`,9),"first-contentful-paint"===e.name&&(t.firstContentfulPaints.push(e.startTime),this.log(`average-${t.firstContentfulPaints.length}-first-contentful-paint: ${o(t.firstContentfulPaints)}`,9))}))})).observe({entryTypes:["paint"]}),new PerformanceObserver((n=>{n.getEntries().forEach((n=>{this.log(`${n.entryType}: ${n.startTime}`,8),t.largestContentfulPaints.push(n.startTime),localStorage.setObject(e,t),this.log(`average-${t.largestContentfulPaints.length}-largest-contentful-paint: ${o(t.largestContentfulPaints)}`,8)}))})).observe({entryTypes:["largest-contentful-paint"]})}},toggleForceSafariVersionCheck(){const e=!this.forceSafariVersionNotificationCheck;e?(m.cmd("notification.safariUpdate.show"),localStorage.setItem("notification:safariUpdate:forceVersionCheck",!0),console.log("Safari v14.0 check forced to succeed.")):(this.resetSafariNotification(),localStorage.removeItem("notification:safariUpdate:forceVersionCheck"),console.log("Safari v14.0 check reset to default behaviour.")),this.forceSafariVersionNotificationCheck=e},resetSafariNotification(){localStorage.removeItem("notification:safariUpdate:dismissedPermanently");const e=m.models.notificationManager.collection.where({name:"safariUpdate"});e&&e.forEach((e=>e.destroy())),m.models.notificationManager.dismissMessage()},triggerFlashMessage(){const e=["You are awesome!","Did you know that bees are bugs?","I sure hope this works…"];m.$e.$emit("flashMessage",{message:e[m.utils.getRandomIntBetween(0,e.length-1)]})},triggerFlashError(){const e=["Oops!","I think we forgot to consider that case.","I'm terribly sorry."];m.$e.$emit("flashMessage",{message:e[m.utils.getRandomIntBetween(0,e.length-1)],error:!0})},triggerConfettiMessage(){m.$e.$emit("flashMessage",{message:"Yahooo!",icon:t,buttons:[{text:"This doesn't do anything",action:()=>{},dismissOnClick:!0,cssClasses:["button-link"]}],closeButtonEnabled:!1,persist:!0,confetti:!0})},tabStashSeedOtherBrowserTestData(){$.ajax({type:"POST",url:m.globals.urlRootApi+"tabs",data:JSON.stringify({id:m.utils.uuidv4(),windows:[{tabsAndGroups:[{type:"Tab",key:1,title:"Add-ons Manager",url:"chrome://newtab/",pinned:!1,index:0},{type:"Tab",key:7,title:"Momentum",url:"https://momentumdash.com",pinned:!1,index:1}],key:3,activeTabKey:7,state:"normal",type:"normal",left:1979,top:12,width:1831,height:1173}],deleted:!1,name:(m.utils.isFirefox()?"chrome":"moz")+" session",activeWindowKey:3,browser:m.utils.isFirefox()?"chrome":"moz",dateCreated:new Date(1682005342175).toISOString()}),success:()=>m.$e.$emit("flashMessage",{message:"session sent to the API"})})},focusModeSetCapacityLimitTally(){(async()=>{const{useFocusModeSessionStore:t}=await e((async()=>{const{useFocusModeSessionStore:e}=await import("./focusModeHelpers-CJvjcTIo.js").then((e=>e.h));return{useFocusModeSessionStore:e}}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));t().update({capacityLimitInfo:{msUsed:354e4,date:(new Date).toISOString().substring(0,10)}}),o.$emit("flashMessage",{message:"Focus mode tally successfully set to 59 minutes"})})()}});const n=m.devTools=new m.models.DevTools;