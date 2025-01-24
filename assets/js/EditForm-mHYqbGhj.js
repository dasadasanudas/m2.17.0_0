import{g as e}from"./globalKeyEventManager-2_REwTdI.js";import{v as t,n as i}from"./icon-alert-Cei3Tz55.js";import{E as s}from"./EditField-DxmQZ6If.js";import{F as a}from"./FormMessage-CGWi8obs.js";import{v as n}from"./viewTransitionHooksMixin-CPPAEiBl.js";import"./localStorage-BThj8CCp.js";import"./preload-helper-xKIU3iAw.js";import"./string-CbqVM-Zr.js";import"./icon-tooltip-CN09iXOB.js";import"./SoftFocus-BUhesXB-.js";import"./FormToggle-BMukwxXO.js";import"./ToggleSwitch-cciEx5Ka.js";const r={maxLength({value:e,arg:i}){if(e.length>i)throw t.MAX_INPUT_LENGTH_EXCEEDED},validUrl({value:e}){if(!m.utils.isValidUrl(m.utils.ensureUrlScheme(e)))throw t.INVALID_URL}};const o=i({name:"EditForm",components:{EditField:s,FormMessage:a},mixins:[n],props:{addButtonText:{type:String,default:"Add"},addButtonLoadingText:{type:String,default:"Adding…"},saveButtonText:{type:String,default:"Save"},saveButtonLoadingText:{type:String,default:"Saving…"},suppressFlashMessages:{type:Boolean,default:!1}},data:()=>({error:"",saving:!1,fieldWarnings:[],componentFieldWarnings:[]}),computed:{collection(){return this.viewManager.collection},adding(){return this.viewManager.adding},fields(){return this.collection.fields},fieldsToRender(){return this.fields.filter((e=>this.shouldRenderField(e,this.editProps)))},buttonText(){return this.saving?this.adding?this.addButtonLoadingText:this.saveButtonLoadingText:this.adding?this.addButtonText:this.saveButtonText},activeItem(){return this.viewManager.activeItem},editProps(){return this.activeItem.editProps}},created(){Object.keys(this.viewManager.editProps).length||this.viewManager.activeItem.copyProperties(),this.clearWarnings(),this.viewManager.$on("showDeleteConf",this.showDeleteConf),e.registerEventListener("editFormEnter","keyup",13,this.saveItem)},destroyed(){e.removeEventListener("editFormEnter","keyup",13),this.viewManager.$off("showDeleteConf",this.showDeleteConf),this.clearWarnings()},methods:{deleteItem(){return this.collection.delete(this.viewManager.activeItem).then((()=>{this.suppressFlashMessages||this.$e.$emit("flashMessage",{message:this.collection.nameCS+" deleted.",icon:this.collection.icon})})).catch((e=>{this.error=this.handleError(e)}))},shouldValidateField(e,t){return e.validate&&!(this.adding?e.editingOnly:e.addingOnly)&&!this.isHiddenInForm(e,t)},shouldRequireField(e,t){return e.required&&!(this.adding?e.editingOnly:e.addingOnly)&&!this.isHiddenInForm(e,t)},emptyCheck(){this.componentFieldWarnings=[];let e=!1;for(let t of this.fields)if(this.shouldRequireField(t,this.editProps)&&m.utils.access(t.required,this.editProps,this.activeItem)){const i=m.utils.access(t.requiredComponentFields,this.editProps);i?i.forEach((i=>{(!this.editProps[t.property][i]||"string"==typeof this.editProps[t.property][i]&&this.editProps[t.property][i].trim().length<=0)&&(e=!0,this.fieldWarnings.push(t.property),this.componentFieldWarnings.push(i))})):(null==this.editProps[t.property]||"string"==typeof this.editProps[t.property]&&this.editProps[t.property].trim().length<=0)&&(e=!0,this.fieldWarnings.push(t.property))}return e},validate(){this.componentFieldWarnings=[];for(let t of this.fields){if(!this.shouldValidateField(t,this.editProps))continue;const i=(e,t,i)=>r[e]({value:t,arg:i}),s=this.editProps[t.property];try{"string"==typeof t.validate?i(t.validate,s):"object"==typeof t.validate&&Object.entries(t.validate).forEach((([e,t])=>i(e,s,t)))}catch(e){return this.error=this.handleError(e),this.fieldWarnings.push(t.property),!1}}return!0},clearWarnings(){this.error="",this.fieldWarnings=[],this.componentFieldWarnings=[]},revertChanges(){var e,t;null==(t=null==(e=this.activeItem)?void 0:e.revertChanges)||t.call(e),this.viewManager.clearItem()},commitChanges(){var e,t;null==(t=null==(e=this.activeItem)?void 0:e.commitChanges)||t.call(e),this.viewManager.clearItem(),this.saving=!1},activeItemHasChanges(){return this.activeItem.getChanges&&0!==this.activeItem.getChanges().length||this.activeItem.getSublinkChanges&&0!==this.viewManager.activeItem.getSublinkChanges().length},autoCapitalizeFields(){this.fields.forEach((e=>{const t=this.editProps[e.property];e.autoCapitalize&&t&&(this.editProps[e.property]=m.utils.capitalizeFirstLetter(t))}))},saveItem(e,t){if(this.clearWarnings(),this.saving||this.emptyCheck()||!this.validate())return;let i=!e&&this.getSaveConfInfo();if(i)return void this.showSaveConf(i);this.activeItem.canSaveAsDraft&&"boolean"==typeof t&&(this.activeItem.editProps.draft=t);let s=this.adding?"add":"update";"update"!==s||this.activeItemHasChanges()?(this.saving=!0,this.collection[s](this.viewManager.activeItem).then((()=>{this.activeItem.refreshAfterSave&&this.collection.refresh(),this.viewManager.showView("default",{doNotBlock:!0,afterLeave:()=>{this.autoCapitalizeFields(),this.commitChanges(),this.clearWarnings(),this.saving=!1}}),this.suppressFlashMessages||this.$e.$emit("flashMessage",{message:this.collection.nameCS+("add"===s?" added.":" saved."),icon:this.collection.icon})})).catch((e=>{this.saving=!1,this.error=this.handleError(e)}))):this.viewManager.showView("default",{doNotBlock:!0,afterLeave:()=>{this.revertChanges(),this.clearWarnings(),this.saving=!1}})},handleError:e=>"string"==typeof e?e:"Network Error"===e.message?t.SERVER_ERROR_NETWORK:e.response&&500===e.response.status?t.SERVER_ERROR_GENERAL:e.message,isHiddenInForm:(e,t)=>m.utils.access(e.hiddenInForm,t),shouldRenderField(e,t){return"hidden"!==e.type&&(!this.isHiddenInForm(e,t)&&(this.adding?!e.editingOnly:!e.addingOnly))},showSaveConf(e){e.onProceed=()=>this.saveItem(!0),e.class=("string"==typeof e.class?e.class+" ":"")+"save-conf",this.viewManager.showConfirmationOverlay(e)},showDeleteConf(){this.viewManager.showConfirmationOverlay({heading:this.activeItem.name?`Delete "${this.activeItem.name}"?`:"Delete?",subheading:"This can't be undone",class:"delete-conf",onProceed:()=>this.deleteItem().then((()=>this.viewManager.showView("default",{doNotBlock:!0})))})},getSaveConfInfo(){let e,t;return this.activeItem.getChanges().forEach((i=>{t=this.fields.find((e=>e.name===i)),t&&t.confirmChange&&(e=t.confirmChange(this.viewManager.activeItem))})),e},showCancelConf(e){this.viewManager.showConfirmationOverlay({heading:"Are you sure you want to cancel?",subheading:"Any changes will be lost.",class:"cancel-conf",onProceed:e,dashboardOverlay:!0})},beforeLeave(e){if(!e)return!this.viewManager.confirmationOverlayActive&&(this.activeItemHasChanges()?new Promise(this.showCancelConf):void 0)}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"edit-form",on:{submit:function(e){e.preventDefault()}}},[e._l(e.fieldsToRender,(function(i,s){return t("edit-field",{key:s,ref:"newProps",refInFor:!0,attrs:{"auto-focus":!s,field:i,"view-manager":e.viewManager,"field-warnings":e.fieldWarnings,"component-field-warnings":e.componentFieldWarnings},on:{"clear-warnings":e.clearWarnings}})})),t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.error?t("form-message",{attrs:{message:e.error,error:!!e.error}}):e._e()],1),t("div",{staticClass:"save-button-container"},[t("button",{staticClass:"button button-primary button-save",attrs:{disabled:e.saving||e.activeItem.disableSave,type:"button","data-test":"submit-button"},on:{click:function(t){return e.saveItem(null,!e.viewManager.activeItem.canSaveAsDraft&&null)}}},[e._v(e._s(e.buttonText))]),e.viewManager.activeItem.canSaveAsDraft?t("button",{staticClass:"button button-save-secondary",attrs:{disabled:e.saving,type:"button","data-test":"submit-button"},on:{click:function(t){return e.saveItem(null,!0)}}},[e._v("Save as draft")]):e._e()])],2)])}),[],!1,null,"d7b3cbf9").exports;export{o as default};