import{a3 as e,M as t,E as a,ap as i,aq as s,d as r,V as d}from"./icon-alert-Cei3Tz55.js";import{u as l}from"./preload-helper-xKIU3iAw.js";import{E as o,d as n,e as u}from"./constants-DNx-NqfY.js";import{a as c}from"./compareObjects-BF7sSNEf.js";class h{constructor(e){this.dataSyncService=e}get(e){this.dataSyncService.get(e)}create(e){return this.dataSyncService.create(e.id,e)}update(e,t){return this.dataSyncService.update(e,t)}delete(e){return this.dataSyncService.delete(e)}}class m{constructor(e){this.dataSyncService=e}get(e){this.dataSyncService.get(e)}create(e){return this.dataSyncService.create(e.id,e)}update(e,t){return this.dataSyncService.update(e,t)}delete(e){return this.dataSyncService.delete(e)}}const p=()=>({siteBlockerGroupsService:new h(new e("siteBlockerGroups",{mode:t.Timestamp,queueKey:"siteBlocker",path:"site-blocker/groups"})),siteBlockerWebsitesService:new m(new e("siteBlockerWebsites",{mode:t.Timestamp,queueKey:"siteBlocker",path:"site-blocker/websites"}))});class f{constructor({id:e=l(),name:t="",order:a,enabled:i=!0,defaultKey:s="",defaultDeleted:r=!1,totalWebsites:d=0}){this.id=e,this.name=t,this.enabled=i,this.defaultKey=s,this.defaultDeleted=r,this.totalWebsites=d,this.order=a}validate(){if(""===this.name)throw new a({message:o.PulseOnly,input:"name-input"})}}class g{constructor({id:e=l(),url:t="",name:a="",order:i,enabled:s=!0,groupId:r,defaultKey:d="",defaultDeleted:o=!1}){this.id=e,this.name=a,this.url=t,this.enabled=s,this.groupId=r,this.defaultKey=d,this.defaultDeleted=o,this.order=i}validate(){if(""===this.name)throw new a({message:o.NameEmpty,input:"name-input"});if(""===this.url)throw new a({message:o.UrlEmpty,input:"url-input"});if(!i(s(this.urlWithReplacedWildcard)))throw new a({message:o.UrlInvalid,input:"url-input"});if(this.url.includes(" "))throw new a({message:o.UrlSpaces,input:"url-input"});if(this.url.includes("/"))throw new a({message:o.UrlPaths,input:"url-input"});const e=this.url.split("").filter((e=>"*"===e)).length;if(e>1||1===e&&!this.url.endsWith(".*"))throw new a({message:o.UrlWildcard,input:"url-input"})}get urlWithReplacedWildcard(){return this.url.replace(".*",".com")}get hostWithWildcard(){const e=new URL(s(this.urlWithReplacedWildcard)).host;return this.url.endsWith(".*")?e.replace(".com",".*"):e}}const w=(e,t)=>Object.values(t).find((t=>t.id===e.groupId||t.defaultKey===e.groupId)),v=(e=p().siteBlockerWebsitesService)=>r("siteBlockerWebsites",{state:()=>({data:{},loaded:!1,loading:!1,activeItem:null}),getters:{getWebsitesByGroup:e=>t=>(e=>{const t=Object.values(e);return Object.values(n).reduce(((e,a)=>(t.some((e=>e.defaultKey===a.defaultKey))||e.push(a),e)),t).filter((e=>!e.defaultDeleted))})(e.data).filter((e=>e.groupId===t.id||e.groupId===t.defaultKey)).sort(((e,t)=>t.order-e.order)).map((e=>new g(e))),activeItemHasChanges(e){if(!e.activeItem)return!1;const t=e.data[e.activeItem.id];return t?Object.keys(c(t,e.activeItem)).length>0:""!==e.activeItem.url||""!==e.activeItem.name},getWebsiteOrDefaultFromId:e=>t=>e.data[t]??n[t]},actions:{clearActiveItem(){this.activeItem=null},newItem(e){this.activeItem||(this.activeItem=new g({groupId:e.id,order:this.getWebsitesByGroup(e).length}))},editItem(e){const t=this.getWebsiteOrDefaultFromId(e);if(!t)throw new a({message:`No Site Blocker website found with id: ${e}`});this.activeItem=new g(t)},refresh(){this.loading||this.loaded||(this.loading=!0,e.get({success:e=>{this.data=Object.fromEntries(e.map((e=>[e.id,e]))),this.loading=!1,this.loaded=!0},failure:()=>{this.loading=!1}}))},async create(t){d.set(this.data,t.id,t);const a=I(),i=w(t,a.data),s=w(t,u);!i&&s&&await a.create({...s}),i?t.groupId=i.id:s&&(t.groupId=s.id),await e.create(t)},async update(t,i){const s=n[t];if(!this.data[t]&&s)return this.create({...s,...i});const r=this.data[t];if(!r)throw new a({message:`No Site Blocker website found with id: ${t}`});d.set(this.data,t,{...r,...i}),await e.update(t,i)},async delete(t){const a=n[t];if(!this.data[t]&&a)return this.update(t,{defaultDeleted:!0});this.data[t]&&(d.delete(this.data,t),await e.delete(t))}}}),y=v(),b=Object.freeze(Object.defineProperty({__proto__:null,default:y,makeSiteBlockerWebsitesStore:v},Symbol.toStringTag,{value:"Module"})),S=(e=p().siteBlockerGroupsService)=>r("siteBlockerGroups",{state:()=>({data:{},loaded:!1,loading:!1,activeItem:null}),getters:{items(e){const t=y();return(e=>{const t=Object.values(e);return Object.values(u).reduce(((e,a)=>(t.some((e=>e.defaultKey===a.defaultKey))||e.push(a),e)),t).filter((e=>!e.defaultDeleted))})(e.data).sort(((e,t)=>t.order-e.order)).map((e=>new f({...e,totalWebsites:t.getWebsitesByGroup(e).length})))},getGroupOrDefaultFromId:e=>t=>e.data[t]??u[t]},actions:{clearActiveItem(){this.activeItem=null},newItem(){this.activeItem||(this.activeItem=new f({order:this.items.length}))},editItem(e){const t=this.getGroupOrDefaultFromId(e);if(!t)throw new a({message:`No Site Blocker group found with id: ${e}`});const i=y();this.activeItem=new f({...t,totalWebsites:i.getWebsitesByGroup(t).length})},refresh(){this.loading||this.loaded||(this.loading=!0,e.get({success:e=>{this.data=Object.fromEntries(e.map((e=>[e.id,e]))),this.loading=!1,this.loaded=!0},failure:()=>{this.loading=!1}}))},async create(t){d.set(this.data,t.id,t),await e.create(t)},async update(t,i){const s=u[t];if(!this.data[t]&&s)return this.create({...s,...i});const r=this.data[t];if(!r)throw new a({message:`No Site Blocker group found with id: ${t}`});d.set(this.data,t,{...r,...i}),await e.update(t,i)},async delete(t){const a=this.getGroupOrDefaultFromId(t);if(!a)return;const i=y();if(await Promise.all([i.getWebsitesByGroup(a).map((e=>i.delete(e.id)))]),a.defaultKey)return this.update(t,{defaultDeleted:!0});d.delete(this.data,t),await e.delete(t)}}}),I=S(),W=Object.freeze(Object.defineProperty({__proto__:null,default:I,makeSiteBlockerGroupsStore:S},Symbol.toStringTag,{value:"Module"}));export{f as S,y as a,W as b,b as s,I as u};