(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{g8aa:function(t,e,n){"use strict";n.r(e),n.d(e,"VerificationPageModule",function(){return F});var o=n("ofXK"),i=n("3Pt+"),s=n("tyNb"),r=n("TEn/"),c=n("mrSG"),a=n("fXoL"),l=n("ej43"),p=n("+hHy"),u=n("UbJi"),h=n("I/3d"),d=n("6NWb");function f(t,e){if(1&t){const t=a.Rb();a.Qb(0,"input",3),a.Yb("keydown",function(e){return a.nc(t),a.ac(2).onKeyDown(e)})("keyup",function(n){a.nc(t);const o=e.index;return a.ac(2).onKeyUp(n,o)}),a.Pb()}if(2&t){const t=e.$implicit,n=e.index,o=a.ac(2);a.Eb("otp-input ",o.config.inputClass,""),a.jc("id","otp_",n,"_",o.componentKey,""),a.gc("pattern",o.config.allowNumbersOnly?"\\d*":"")("type",o.inputType)("placeholder",(null==o.config?null:o.config.placeholder)||"")("disabledNumberOnly",!o.config.allowNumbersOnly)("ngStyle",o.config.inputStyles)("formControl",o.otpForm.controls[t])}}function b(t,e){if(1&t&&(a.Qb(0,"div",1),a.rc(1,f,1,11,"input",2),a.bc(2,"keys"),a.Pb()),2&t){const t=a.ac();a.Eb("wrapper ",t.config.containerClass,""),a.ic("id","c_",t.componentKey,""),a.gc("ngStyle",t.config.containerStyles),a.Cb(1),a.gc("ngForOf",a.cc(2,6,null==t.otpForm?null:t.otpForm.controls))}}let g=(()=>{class t{transform(t){return Object.keys(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Mb({name:"keys",type:t,pure:!0}),t})(),m=(()=>{class t{constructor(t){this.keysPipe=t,this.config={length:4},this.onInputChange=new a.o,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)}ngOnInit(){this.otpForm=new i.f({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new i.c);this.otpForm.valueChanges.subscribe(t=>{this.keysPipe.transform(this.otpForm.controls).forEach(t=>{var e=this.otpForm.controls[t].value;e&&e.length>1&&(e.length>=this.config.length?this.setValue(e):this.rebuildValue())})}),this.inputType=this.getInputType()}ngAfterViewInit(){if(!this.config.disableAutoFocus){const t=document.getElementById(`c_${this.componentKey}`);if(t){t.addEventListener("paste",t=>this.handlePaste(t));const e=t.getElementsByClassName("otp-input")[0];e&&e.focus&&e.focus()}}}getControlName(t){return`ctrl_${t}`}ifLeftArrow(t){return this.ifKeyCode(t,37)}ifRightArrow(t){return this.ifKeyCode(t,39)}ifBackspaceOrDelete(t){return"Backspace"===t.key||"Delete"===t.key||this.ifKeyCode(t,8)||this.ifKeyCode(t,46)}ifKeyCode(t,e){return(t.keyCode||t.charCode)==e}onKeyDown(t){if(this.ifKeyCode(t,32))return!1}onKeyUp(t,e){const n=this.appendKey(`otp_${e+1}`),o=this.appendKey("otp_"+(e-1));if(this.ifRightArrow(t))this.setSelected(n);else{if(!this.ifLeftArrow(t))return this.ifBackspaceOrDelete(t)&&!t.target.value?(this.setSelected(o),void this.rebuildValue()):void(t.target.value&&(this.ifValidEntry(t)&&this.setSelected(n),this.rebuildValue()));this.setSelected(o)}}appendKey(t){return`${t}_${this.componentKey}`}setSelected(t){this.focusTo(t);const e=document.getElementById(t);e&&e.setSelectionRange&&setTimeout(()=>{e.setSelectionRange(0,1)},0)}ifValidEntry(t){const e=String.fromCharCode(t.keyCode);return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(e)||this.config.allowKeyCodes&&this.config.allowKeyCodes.includes(t.keyCode)||t.keyCode>=96&&t.keyCode<=105}focusTo(t){const e=document.getElementById(t);e&&e.focus()}setValue(t){if(!this.config.allowNumbersOnly||!isNaN(t))if(this.otpForm.reset(),t){if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((t,e)=>{this.otpForm.get(this.getControlName(e))&&this.otpForm.get(this.getControlName(e)).setValue(t)}),!this.config.disableAutoFocus){const n=document.getElementById(`c_${this.componentKey}`);var e=t.length<this.config.length?t.length:this.config.length-1;let o=n.getElementsByClassName("otp-input")[e];o&&o.focus&&o.focus()}this.rebuildValue()}else this.rebuildValue()}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(e=>{if(this.otpForm.controls[e].value){let n=this.otpForm.controls[e].value,o=n.length>1,i=!this.config.allowNumbersOnly&&this.config.letterCase&&("upper"==this.config.letterCase.toLocaleLowerCase()||"lower"==this.config.letterCase.toLocaleLowerCase());n=n[0];let s=i?"upper"==this.config.letterCase.toLocaleLowerCase()?n.toUpperCase():n.toLowerCase():n;i&&s==n?i=!1:n=s,t+=n,(o||i)&&this.otpForm.controls[e].setValue(n)}}),this.onInputChange.emit(t)}getInputType(){return this.config.isPasswordInput?"password":this.config.allowNumbersOnly?"tel":"text"}handlePaste(t){let e=t.clipboardData||window.clipboardData;if(e)var n=e.getData("Text");t.stopPropagation(),t.preventDefault(),n&&this.setValue(n)}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(g))},t.\u0275cmp=a.Hb({type:t,selectors:[["ng-otp-input"]],inputs:{config:"config"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["numberOnly","","autocomplete","one-time-code",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","class","formControl","id","keydown","keyup",4,"ngFor","ngForOf"],["numberOnly","","autocomplete","one-time-code",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","formControl","id","keydown","keyup"]],template:function(t,e){1&t&&a.rc(0,b,3,8,"div",0),2&t&&a.gc("ngIf",null==e.otpForm?null:e.otpForm.controls)},directives:function(){return[o.j,o.k,o.i,i.a,y,i.o,i.m,i.d]},pipes:function(){return[g]},styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),t})(),y=(()=>{class t{constructor(t,e){this._elRef=t,this._renderer=e}ngOnInit(){this.disabledNumberOnly||this._renderer.setAttribute(this._elRef.nativeElement,"onkeypress","return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0")}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(a.m),a.Nb(a.F))},t.\u0275dir=a.Ib({type:t,selectors:[["","numberOnly",""]],inputs:{disabledNumberOnly:"disabledNumberOnly"}}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({providers:[g],imports:[[o.b,i.h,i.p]]}),t})();var O=n("sYmb");const P=["ngOtpInput"];function w(t,e){if(1&t){const t=a.Rb();a.Qb(0,"ng-otp-input",16,17),a.Yb("onInputChange",function(e){return a.nc(t),a.ac().onOtpChange(e)}),a.Pb()}if(2&t){const t=a.ac();a.gc("config",t.config)}}function v(t,e){1&t&&(a.Qb(0,"div",18),a.Qb(1,"span",19),a.tc(2,"OOPs! Please enter valid OTP."),a.Pb(),a.Pb())}function I(t,e){1&t&&(a.Qb(0,"div",18),a.Qb(1,"span",19),a.tc(2,"Sorry! Entered OTP is not correct. Please try again"),a.Pb(),a.Pb())}let x=(()=>{class t{constructor(t,e,n,o,i,s){this.router=t,this.authtenticationService=e,this.toastController=n,this.appService=o,this.fbauth=i,this.fbstore=s,this.OTP="",this.showOTPInput=!1,this.OTPmessage="APP.VERIFICATION.OTP_MESSAGE",this.showOtpComponent=!0,this.otpVerified=!1,this.errorOtpMsg=!1,this.otpNotVerified=!1,this.config={allowNumbersOnly:!1,length:6,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"50px",height:"50px"}}}ngOnInit(){this.authfbObserver=this.fbauth.authState.subscribe(t=>{t&&this.otpSentToast()}),this.otpSentToast()}otpSentToast(){return Object(c.b)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"OTP Sent.",duration:2e3,position:"bottom",animated:!0,color:"tertiary"})).present()})}otpVerifiedToast(){return Object(c.b)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"OTP Verified.",duration:2e3,position:"bottom",animated:!0,color:"Success"})).present()})}OtpVerification(t){return this.otpVerified=!0,new Promise((e,n)=>{this.authtenticationService.enterVerificationCode(t).then(t=>Object(c.b)(this,void 0,void 0,function*(){console.log(t);const n=t;this.appService.otpVerifiedToast(),e(n),this.fbstore.collection("companys").snapshotChanges().subscribe(t=>{const e=t.filter(t=>t.payload.doc.data().mobileNumber===n.phoneNumber);console.log(e[0].payload.doc.data()),"PAID"===e[0].payload.doc.data().paymentStatus?(console.log("user did pay"),this.router.navigate(["/select-vehicle"])):(console.log("user did not pay"),this.router.navigate(["/payment"]))})})).catch(t=>{this.errorOtpMsg=!1,this.otpNotVerified=!0,n(t.message)})})}onOtpChange(t){this.otp=t,6===this.otp.length&&(this.errorOtpMsg=!1,this.otpVerified=!0)}setVal(t){this.ngOtpInput.setValue(t)}toggleDisable(){this.ngOtpInput.otpForm&&(this.ngOtpInput.otpForm.disabled?this.ngOtpInput.otpForm.enable():this.ngOtpInput.otpForm.disable())}onConfigChange(){this.showOtpComponent=!1,this.otp=null,setTimeout(()=>{this.showOtpComponent=!0},0)}verifyOtp(){if(6===this.otp.length){const t=this.otp.toString();this.OtpVerification(t)}else this.otpNotVerified=!1,this.errorOtpMsg=!0}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(s.g),a.Nb(l.a),a.Nb(r.C),a.Nb(p.a),a.Nb(u.a),a.Nb(h.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-verification"]],viewQuery:function(t,e){if(1&t&&a.xc(P,1),2&t){let t;a.lc(t=a.Zb())&&(e.ngOtpInput=t.first)}},decls:31,vars:22,consts:[[1,"osahan-header-nav","shadow-sm","p-3","d-flex","align-items-center","bg-purple"],[1,"font-weight-normal","mb-0","text-white"],["routerLink","/get-started",1,"text-purple"],["icon","arrow-left",1,"icofont-rounded-left"],["id","content","fullscreen",""],[1,"osahan-index","bg-c","align-items-center","justify-content-center","vh-100","index-page"],[1,"osahan-form","px-3","py-5","text-center","mb-5"],[1,"row","my-3","px-3","pb-2"],[1,"a-o-i","text-muted"],[1,"col","px-1"],["class","\n              form-control\n              otp\n              text-purple\n              form-control-lg\n              text-center\n              pb-0\n              px-0\n            ",3,"config","onInputChange",4,"ngIf"],[1,"a-o-i","text-muted","p-2","mt-2"],["type","submit","name","submit_button",1,"btn","btn-purple","btn-block","osahanbus-btn","mb-4",3,"disabled","click"],[1,"text-muted"],["href","#",1,"ml-2","text-orange"],["class","d-flex justify-content-center pt-3 m-5",4,"ngIf"],[1,"form-control","otp","text-purple","form-control-lg","text-center","pb-0","px-0",3,"config","onInputChange"],["ngOtpInput",""],[1,"d-flex","justify-content-center","pt-3","m-5"],[1,"text-danger"]],template:function(t,e){1&t&&(a.Qb(0,"ion-header"),a.Qb(1,"div",0),a.Qb(2,"h5",1),a.Qb(3,"a",2),a.Ob(4,"fa-icon",3),a.Pb(),a.Qb(5,"ion-title"),a.tc(6),a.bc(7,"translate"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(8,"ion-content",4),a.Qb(9,"div",5),a.Qb(10,"div",6),a.Qb(11,"div",7),a.Qb(12,"p",8),a.tc(13),a.bc(14,"translate"),a.Pb(),a.Qb(15,"div",9),a.rc(16,w,2,1,"ng-otp-input",10),a.Pb(),a.Qb(17,"p",11),a.tc(18),a.bc(19,"translate"),a.Pb(),a.Pb(),a.Qb(20,"button",12),a.Yb("click",function(){return e.verifyOtp()}),a.tc(21),a.bc(22,"translate"),a.Pb(),a.Qb(23,"p",13),a.tc(24),a.bc(25,"translate"),a.Qb(26,"a",14),a.tc(27),a.bc(28,"translate"),a.Pb(),a.Pb(),a.rc(29,v,3,0,"div",15),a.rc(30,I,3,0,"div",15),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.Cb(6),a.uc(a.cc(7,10,"APP.VERIFICATION.TITLE")),a.Cb(7),a.vc(" ",a.cc(14,12,"APP.VERIFICATION.ENTER_VERIFICATION_CODE")," "),a.Cb(3),a.gc("ngIf",e.showOtpComponent),a.Cb(2),a.uc(a.cc(19,14,e.OTPmessage)),a.Cb(2),a.gc("disabled",!e.otpVerified),a.Cb(1),a.vc(" ",a.cc(22,16,"APP.VERIFICATION.BUTTON.VERIFICATION")," "),a.Cb(3),a.vc(" ",a.cc(25,18,"APP.VERIFICATION.TEXT"),""),a.Cb(3),a.uc(a.cc(28,20,"APP.VERIFICATION.BUTTON.RESEND")),a.Cb(2),a.gc("ngIf",e.errorOtpMsg),a.Cb(1),a.gc("ngIf",e.otpNotVerified))},directives:[r.g,s.i,r.z,d.a,r.u,r.e,o.j,m],pipes:[O.c],styles:[".opt[_ngcontent-%COMP%]{border:1px solid #dc3545!important;border-radius:6px;font-size:46px;font-weight:700;padding:0}#verificationModal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px}h1.success-icon[_ngcontent-%COMP%]{font-size:80px!important;color:#5bc550}"]}),t})();const N=[{path:"",component:x}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[s.j.forChild(N)],s.j]}),t})();const V=[o.b,i.h,r.v,s.j.forChild([{path:"",component:x}]),d.c,O.b,C,T],S=[];let F=(()=>{let t=class{};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({providers:S,imports:[V]}),t})()}}]);