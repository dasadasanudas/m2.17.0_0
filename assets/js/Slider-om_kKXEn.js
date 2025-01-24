import{g as e}from"./globalKeyEventManager-2_REwTdI.js";import{n as t}from"./icon-alert-Cei3Tz55.js";const i=t({name:"Slider",props:{value:{type:Number,default:0},id:{type:String,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1}},data:()=>({mouseButtonIsDown:!1}),computed:{valuePercent(){return this.value/this.max*100+"%"}},destroyed(){this.blur()},methods:{touchstart(e){this.mouseButtonIsDown=!0,window.addEventListener("touchmove",this.update),window.addEventListener("touchend",this.touchend),this.update(e),this.focus()},touchend(){this.mouseButtonIsDown=!1,window.removeEventListener("touchmove",this.update),window.removeEventListener("touchend",this.touchend)},mousedown(e){0===e.button?(this.mouseButtonIsDown=!0,window.addEventListener("mousemove",this.update),window.addEventListener("mouseup",this.mouseup),this.update(e),this.focus()):this.mouseup(e)},mouseup(){this.mouseButtonIsDown=!1,window.removeEventListener("mousemove",this.update),window.removeEventListener("mouseup",this.mouseup)},update(e){if(this.mouseButtonIsDown){const t=this.$refs.slider.getBoundingClientRect(),i=(e.pageX||e.changedTouches[0].pageX)-t.left;this.updateWithinBounds(i/this.$refs.slider.clientWidth*this.max)}},updateWithinBounds(e){var t;e<this.min&&(e=this.min),e>this.max&&(e=this.max);const i=null==(t=String(this.interval).split(".")[1])?void 0:t.length,s=Math.round(e/this.interval)*this.interval;e=Number(s.toFixed(i)),this.$emit("input",e)},decreaseSliderValue(e){var t;if(!(null==(t=this.$refs.slider)?void 0:t.checkVisibility()))return this.blur();this.updateWithinBounds(this.value-this.interval*(e.shiftKey?10:1))},increaseSliderValue(e){var t;if(!(null==(t=this.$refs.slider)?void 0:t.checkVisibility()))return this.blur();this.updateWithinBounds(this.value+this.interval*(e.shiftKey?10:1))},focus(){const t=e;t.registerEventListener("slider:volume:up"+this.id,"keydown",38,this.increaseSliderValue),t.registerEventListener("slider:volume:down"+this.id,"keydown",37,this.decreaseSliderValue),t.registerEventListener("slider:volume:right"+this.id,"keydown",39,this.increaseSliderValue),t.registerEventListener("slider:volume:left"+this.id,"keydown",40,this.decreaseSliderValue)},blur(){const t=e;t.hasEventListener("slider:volume:up"+this.id,"keydown",38)&&(t.removeEventListener("slider:volume:up"+this.id,"keydown",38),t.removeEventListener("slider:volume:down"+this.id,"keydown",37),t.removeEventListener("slider:volume:right"+this.id,"keydown",39),t.removeEventListener("slider:volume:left"+this.id,"keydown",40))}}},(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.blur,expression:"blur"}],ref:"slider",staticClass:"slider",class:{down:e.mouseButtonIsDown},attrs:{"data-value":e.value},on:{mousedown:e.mousedown,touchstart:e.touchstart,click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"bar off"}),t("div",{staticClass:"bar on",style:{width:e.valuePercent}}),t("div",{staticClass:"dial",style:{left:e.valuePercent}})])}),[],!1,null,"a182fe6e").exports;export{i as S};