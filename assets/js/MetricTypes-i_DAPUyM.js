import{n as t,a0 as e}from"./icon-alert-Cei3Tz55.js";import{v as s}from"./viewTransitionHooksMixin-CPPAEiBl.js";import"./localStorage-BThj8CCp.js";import"./preload-helper-xKIU3iAw.js";import"./string-CbqVM-Zr.js";const i=t({name:"MetricTypes",mixins:[s],unreactive:()=>({metricTypesInfo:e}),data:()=>({selectedType:0}),created(){this.selectedType=this.viewManager.editProps.type||0},methods:{selectType(t){this.selectedType=t},next(){this.viewManager.showView("edit"),this.$set(this.viewManager.editProps,"type",this.selectedType),this.$nextTick(this.focusInput)}}},(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"guide"},[t._v("Choose a type")]),e("ul",{staticClass:"types"},t._l(t.metricTypesInfo,(function(s,i){return e("li",{key:i,staticClass:"type",class:{active:t.selectedType===s.id},attrs:{"data-test":s.title.toLowerCase()+"-type"},on:{click:function(e){return t.selectType(s.id)}}},[t._m(0,!0),e("div",[e("span",{staticClass:"title"},[t._v(t._s(s.label))]),e("span",{staticClass:"description"},[t._v(t._s(s.description))])])])})),0),e("button",{staticClass:"button",attrs:{"data-test":"next"},on:{click:function(e){return t.next()}}},[t._v("Next")])])}),[function(){var t=this._self._c;return t("span",{staticClass:"radio"},[t("span",{staticClass:"radio-circle"}),t("span",{staticClass:"radio-dot"})])}],!1,null,"70964ac5").exports;export{i as default};