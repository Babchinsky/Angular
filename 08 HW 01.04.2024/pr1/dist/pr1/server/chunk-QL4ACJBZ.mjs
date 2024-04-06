import './polyfills.server.mjs';
import{A as fe,B as O,C as P,D as k,E as T,F as a,G as s,H as C,I as j,J as p,K as _,L as l,M as f,N as me,O as K,P as Oe,Q as Pe,R as S,S as x,U as ke,_ as ge,a as Fe,aa as Te,b as we,ba as G,c as Ie,ca as je,d as Z,da as Ge,e as Y,ea as Be,f as X,fa as Re,g as D,h as b,i as Se,ia as Ue,j as $,k as h,l as M,m as y,ma as He,n as de,na as Le,o as A,p as E,q as xe,qa as B,r as Ne,ra as $e,s as he,t as F,u as d,v as c,w as pe,x as w,y as N,z as I}from"./chunk-3RHPTLMW.mjs";import{a as v,b as V}from"./chunk-VVCT4QZE.mjs";var St=()=>["/"],We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-top-bar"]],decls:8,vars:2,consts:[[3,"routerLink"],["routerLink","/cart",1,"button","fancy-button"],[1,"material-icons"],["height","24","viewBox","0 -960 960 960","width","24"],["d","M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"]],template:function(r,o){r&1&&(a(0,"a",0)(1,"h1"),l(2,"My Store"),s()(),a(3,"a",1)(4,"em",2),xe(),a(5,"svg",3),C(6,"path",4),s()(),l(7,` Checkout
`),s()),r&2&&I("routerLink",Oe(1,St))},dependencies:[B]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(){this.title="Store"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(r,o){r&1&&(C(0,"app-top-bar"),a(1,"div",0),C(2,"router-outlet"),s())},dependencies:[Le,We]});let t=e;return t})();var ee=[{id:1,name:"Phone XL",price:799,description:"A large phone with one of the best screens"},{id:2,name:"Phone Mini",price:699,description:"A great phone with one of the best cameras"},{id:3,name:"Phone Standard",price:299,description:""}];function Nt(t,e){if(t&1){let n=j();a(0,"button",1),p("click",function(){A(n);let r=_();return E(r.notify.emit())}),l(1,"Notify Me"),s()}}var qe=(()=>{let e=class e{constructor(){this.notify=new F}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-product-alerts"]],inputs:{product:"product"},outputs:{notify:"notify"},decls:1,vars:1,consts:[["type","button"],["type","button",3,"click"]],template:function(r,o){r&1&&N(0,Nt,2,0,"button",0),r&2&&O(0,o.product&&o.product.price>700?0:-1)}});let t=e;return t})();var Pt=t=>["/products",t];function kt(t,e){if(t&1&&(a(0,"p"),l(1),s()),t&2){let n=_().$implicit;d(),me("Description: ",n.description,"")}}function Tt(t,e){if(t&1){let n=j();a(0,"h3")(1,"a",0),l(2),s()(),N(3,kt,2,1,"p"),a(4,"button",1),p("click",function(){A(n);let r=_();return E(r.share())}),l(5," Share "),s(),a(6,"app-product-alerts",2),p("notify",function(){A(n);let r=_();return E(r.onNotify())}),s()}if(t&2){let n=e.$implicit;d(),I("title",n.name+" details")("routerLink",Pe(5,Pt,n.id)),d(),me(" ",n.name," "),d(),O(3,n.description?3:-1),d(3),I("product",n)}}var ze=(()=>{let e=class e{constructor(){this.products=[...ee]}share(){window.alert("The product has been shared!")}onNotify(){window.alert("You will be notified when the product goes on sale")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-product-list"]],decls:4,vars:0,consts:[[3,"title","routerLink"],["type","button",3,"click"],[3,"notify","product"]],template:function(r,o){r&1&&(a(0,"h2"),l(1,"Products"),s(),k(2,Tt,7,7,null,null,P)),r&2&&(d(2),T(o.products))},dependencies:[B,qe]});let t=e;return t})();var R=(()=>{let e=class e{constructor(i){this.http=i,this.items=[]}addToCart(i){this.items.push(i)}getItems(){return this.items}clearCart(){return this.items=[],this.items}getShippingPrices(){return this.http.get("/assets/shipping.json")}};e.\u0275fac=function(r){return new(r||e)(Se(je))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function jt(t,e){if(t&1){let n=j();a(0,"div")(1,"h3"),l(2),s(),a(3,"h4"),l(4),S(5,"currency"),s(),a(6,"p"),l(7),s(),a(8,"button",0),p("click",function(){A(n);let r=_();return E(r.addToCart(r.product))}),l(9," Buy"),s()()}if(t&2){let n=_();d(2),f(n.product.name),d(2),f(x(5,3,n.product.price)),d(3),f(n.product.description)}}var Ye=(()=>{let e=class e{constructor(i,r){this.route=i,this.cartService=r}addToCart(i){this.cartService.addToCart(i),window.alert("Your product has been added to the cart!")}ngOnInit(){let i=this.route.snapshot.paramMap,r=Number(i.get("productId"));this.product=ee.find(o=>o.id===r)}};e.\u0275fac=function(r){return new(r||e)(c(He),c(R))},e.\u0275cmp=h({type:e,selectors:[["app-product-details"]],decls:3,vars:1,consts:[["type","button",3,"click"]],template:function(r,o){r&1&&(a(0,"h2"),l(1,"Product Details"),s(),N(2,jt,10,5,"div")),r&2&&(d(2),O(2,o.product?2:-1))},dependencies:[G]});let t=e;return t})();var rt=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(c(pe),c(he))},e.\u0275dir=y({type:e});let t=e;return t})(),Gt=(()=>{let e=class e extends rt{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ne(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[w]});let t=e;return t})(),ot=new b("");var Bt={provide:ot,useExisting:Y(()=>ue),multi:!0};function Rt(){let t=ge()?ge().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ut=new b(""),ue=(()=>{let e=class e extends rt{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Rt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(c(pe),c(he),c(Ut,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(g){return o._handleInput(g.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(g){return o._compositionEnd(g.target.value)})},features:[K([Bt]),w]});let t=e;return t})();var st=new b(""),at=new b("");function lt(t){return t!=null}function ut(t){return ke(t)?Fe(t):t}function ct(t){let e={};return t.forEach(n=>{e=n!=null?v(v({},e),n):e}),Object.keys(e).length===0?null:e}function dt(t,e){return e.map(n=>n(t))}function Ht(t){return!t.validate}function ht(t){return t.map(e=>Ht(e)?e:n=>e.validate(n))}function Lt(t){if(!t)return null;let e=t.filter(lt);return e.length==0?null:function(n){return ct(dt(n,e))}}function pt(t){return t!=null?Lt(ht(t)):null}function $t(t){if(!t)return null;let e=t.filter(lt);return e.length==0?null:function(n){let i=dt(n,e).map(ut);return Ie(i).pipe(we(ct))}}function ft(t){return t!=null?$t(ht(t)):null}function Xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function mt(t){return t._rawValidators}function gt(t){return t._rawAsyncValidators}function ye(t){return t?Array.isArray(t)?t:[t]:[]}function ne(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ke(t,e){let n=ye(e);return ye(t).forEach(r=>{ne(n,r)||n.push(r)}),n}function Je(t,e){return ye(e).filter(n=>!ne(t,n))}var re=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=pt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},H=class extends re{get formDirective(){return null}get path(){return null}},z=class extends re{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},oe=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Wt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qi=V(v({},Wt),{"[class.ng-submitted]":"isSubmitted"}),vt=(()=>{let e=class e extends oe{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(c(z,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[w]});let t=e;return t})(),yt=(()=>{let e=class e extends oe{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(c(H,10))},e.\u0275dir=y({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[w]});let t=e;return t})();var W="VALID",te="INVALID",U="PENDING",q="DISABLED";function Ve(t){return(ce(t)?t.validators:t)||null}function qt(t){return Array.isArray(t)?pt(t):t||null}function De(t,e){return(ce(e)?e.asyncValidators:t)||null}function zt(t){return Array.isArray(t)?ft(t):t||null}function ce(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function _t(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new Z(1e3,"");if(!i[n])throw new Z(1001,"")}function Ct(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new Z(1002,"")})}var L=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===W}get invalid(){return this.status===te}get pending(){return this.status==U}get disabled(){return this.status===q}get enabled(){return this.status!==q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Je(e,this._rawAsyncValidators))}hasValidator(e){return ne(this._rawValidators,e)}hasAsyncValidator(e){return ne(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=U,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=q,this.errors=null,this._forEachChild(i=>{i.disable(V(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=W,this._forEachChild(i=>{i.enable(V(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===W||this.status===U)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?q:W}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=U,this._hasOwnPendingAsyncValidator=!0;let n=ut(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?q:this.errors?te:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(U)?U:this._anyControlsHaveStatus(te)?te:W}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ce(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=qt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=zt(this._rawAsyncValidators)}},se=class extends L{constructor(e,n,i){super(Ve(n),De(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ct(this,!0,e),Object.keys(e).forEach(i=>{_t(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var _e=class extends se{};var Vt=new b("CallSetDisabledState",{providedIn:"root",factory:()=>be}),be="always";function Zt(t,e){return[...e.path,t]}function Qe(t,e,n=be){Me(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Xt(t,e),Jt(t,e),Kt(t,e),Yt(t,e)}function et(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),le(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ae(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Yt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Me(t,e){let n=mt(t);e.validator!==null?t.setValidators(Xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=gt(t);e.asyncValidator!==null?t.setAsyncValidators(Xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ae(e._rawValidators,r),ae(e._rawAsyncValidators,r)}function le(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=mt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=gt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return ae(e._rawValidators,i),ae(e._rawAsyncValidators,i),n}function Xt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Dt(t,e)})}function Kt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Dt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Dt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Jt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Qt(t,e){t==null,Me(t,e)}function ei(t,e){return le(t,e)}function ti(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ii(t){return Object.getPrototypeOf(t.constructor)===Gt}function ni(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ri(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===ue?n=o:ii(o)?i=o:r=o}),r||i||n||null}function oi(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function tt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function it(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ie=class extends L{constructor(e=null,n,i){super(Ve(n),De(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ce(n)&&(n.nonNullable||n.initialValueIsDefault)&&(it(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){tt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){tt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){it(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var si=t=>t instanceof ie;var bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Mt=new b("");var ai={provide:H,useExisting:Y(()=>Ae)},Ae=(()=>{let e=class e extends H{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(le(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Qe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){et(i.control||null,i,!1),oi(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,ni(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(et(r||null,i),si(o)&&(Qe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Qt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&ei(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Me(this.form,this),this._oldForm&&le(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(c(st,10),c(at,10),c(Vt,8))},e.\u0275dir=y({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&p("submit",function(g){return o.onSubmit(g)})("reset",function(){return o.onReset()})},inputs:{form:[$.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[K([ai]),w,de]});let t=e;return t})();var li={provide:z,useExisting:Y(()=>Ee)},Ee=(()=>{let e=class e extends z{set isDisabled(i){}constructor(i,r,o,u,g){super(),this._ngModelWarningConfig=g,this._added=!1,this.name=null,this.update=new F,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ri(this,u)}ngOnChanges(i){this._added||this._setUpControl(),ti(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Zt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(c(H,13),c(st,10),c(at,10),c(ot,10),c(Mt,8))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""]],inputs:{name:[$.None,"formControlName","name"],isDisabled:[$.None,"disabled","isDisabled"],model:[$.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[K([li]),w,de]});let t=e;return t})();var ui=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=D({});let t=e;return t})(),Ce=class extends L{constructor(e,n,i){super(Ve(n),De(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Ct(this,!1,e),e.forEach((i,r)=>{_t(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function nt(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var At=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),u={};return nt(r)?u=r:r!==null&&(u.validators=r.validator,u.asyncValidators=r.asyncValidator),new se(o,u)}record(i,r=null){let o=this._reduceControls(i);return new _e(o,r)}control(i,r,o){let u={};return this.useNonNullable?(nt(r)?u=r:(u.validators=r,u.asyncValidators=o),new ie(i,V(v({},u),{nonNullable:!0}))):new ie(i,r,o)}array(i,r,o){let u=i.map(g=>this._createControl(g));return new Ce(u,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof ie)return i;if(i instanceof L)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,u=i.length>2?i[2]:null;return this.control(r,o,u)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Et=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Mt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Vt,useValue:i.callSetDisabledState??be}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=D({imports:[ui]});let t=e;return t})();function di(t,e){if(t&1&&(a(0,"div",1)(1,"span"),l(2),s(),a(3,"span"),l(4),S(5,"currency"),s()()),t&2){let n=e.$implicit;d(2),f(n.name),d(2),f(x(5,2,n.price))}}var Ft=(()=>{let e=class e{constructor(i,r){this.cartService=i,this.formBuilder=r,this.items=this.cartService.getItems(),this.checkoutForm=this.formBuilder.group({name:"",address:""})}onSubmit(){this.items=this.cartService.clearCart(),console.warn("Your order has been submitted",this.checkoutForm.value),this.checkoutForm.reset()}};e.\u0275fac=function(r){return new(r||e)(c(R),c(At))},e.\u0275cmp=h({type:e,selectors:[["app-cart"]],decls:18,vars:1,consts:[["routerLink","/shipping"],[1,"cart-item"],[3,"ngSubmit","formGroup"],["for","name"],["id","name","type","text","formControlName","name"],["for","address"],["id","address","type","text","formControlName","address"],["type","submit",1,"button"]],template:function(r,o){r&1&&(a(0,"h3"),l(1,"Cart"),s(),a(2,"p")(3,"a",0),l(4,"Shipping Prices"),s()(),k(5,di,6,4,"div",1,P),a(7,"form",2),p("ngSubmit",function(){return o.onSubmit()}),a(8,"div")(9,"label",3),l(10,"Name"),s(),C(11,"input",4),s(),a(12,"div")(13,"label",5),l(14," Address "),s(),C(15,"input",6),s(),a(16,"button",7),l(17,"Purchase"),s()()),r&2&&(d(5),T(o.items),d(2),I("formGroup",o.checkoutForm))},dependencies:[bt,ue,vt,yt,Ae,Ee,B,G]});let t=e;return t})();function hi(t,e){if(t&1&&(a(0,"div",0)(1,"span"),l(2),s(),a(3,"span"),l(4),S(5,"currency"),s()()),t&2){let n=e.$implicit;d(2),f(n.type),d(2),f(x(5,2,n.price))}}var wt=(()=>{let e=class e{constructor(i){this.cartService=i}ngOnInit(){this.shippingCosts=this.cartService.getShippingPrices()}};e.\u0275fac=function(r){return new(r||e)(c(R))},e.\u0275cmp=h({type:e,selectors:[["app-shipping"]],decls:5,vars:2,consts:[[1,"shipping-item"]],template:function(r,o){r&1&&(a(0,"h3"),l(1,"Shipping Prices"),s(),k(2,hi,6,4,"div",0,P),S(4,"async")),r&2&&(d(2),T(x(4,0,o.shippingCosts)))},dependencies:[Te,G]});let t=e;return t})();var It=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e,bootstrap:[Q]}),e.\u0275inj=D({providers:[Re()],imports:[Be,Ge,Et,$e.forRoot([{path:"",component:ze},{path:"products/:productId",component:Ye},{path:"cart",component:Ft},{path:"shipping",component:wt}])]});let t=e;return t})();var pi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e,bootstrap:[Q]}),e.\u0275inj=D({imports:[It,Ue]});let t=e;return t})();export{pi as a};