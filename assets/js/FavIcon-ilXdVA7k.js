import{n as a,b as e}from"./icon-alert-Cei3Tz55.js";import{_ as i}from"./BaseIcon-DKpoUDYB.js";const t=a({name:"FavIcon",props:{url:{type:String,default:""}},data(){return{imgLoading:!0,updatedUrl:this.url}},computed:{favicon(){return m.utils.getFavIcon(e.ensureUrlScheme(this.updatedUrl))}},watch:{url(){this.debouncedUrlChange&&clearTimeout(this.debouncedUrlChange),this.debouncedUrlChange=setTimeout((()=>{this.updatedUrl=this.url}),300)}}},(function(){var a=this,e=a._self._c;return e("div",[a.imgLoading?e("inline-svg",{staticClass:"icon-favicon",attrs:{src:i}}):a._e(),e("img",{directives:[{name:"show",rawName:"v-show",value:!a.imgLoading,expression:"!imgLoading"}],staticClass:"icon-favicon",attrs:{src:a.favicon,draggable:"false"},on:{load:function(e){a.imgLoading=!1}}})],1)}),[],!1,null,null).exports;export{t as F};