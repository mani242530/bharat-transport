(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{SDiC:function(t,n,i){"use strict";i.r(n),i.d(n,"ListingDetailPageModule",function(){return y});var b=i("ofXK"),e=i("3Pt+"),o=i("tyNb"),c=i("TEn/"),a=i("mrSG"),s=i("fXoL"),r=i("2g2N"),l=i("I/3d"),d=i("6NWb"),m=i("HWWf"),P=i("sYmb");function p(t,n){if(1&t&&(s.Qb(0,"div"),s.Qb(1,"p",28),s.tc(2),s.Pb(),s.Pb()),2&t){const t=s.ac(3);s.Cb(2),s.vc(" ",t.company.landlineNumber," ")}}function g(t,n){1&t&&(s.Qb(0,"p",28),s.tc(1,"N/A"),s.Pb())}function u(t,n){if(1&t&&(s.Qb(0,"ion-item-sliding"),s.Qb(1,"ion-grid"),s.Qb(2,"ion-row"),s.Qb(3,"ion-col",12),s.Qb(4,"div",13),s.Qb(5,"div",14),s.Qb(6,"div",15),s.Ob(7,"ngx-avatar",16),s.Qb(8,"div",17),s.Qb(9,"ion-label"),s.Qb(10,"h3",18),s.tc(11),s.Pb(),s.Pb(),s.Qb(12,"div",19),s.Qb(13,"div",20),s.Qb(14,"p",21),s.Ob(15,"fa-icon",22),s.Qb(16,"span",23),s.tc(17),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(18,"div",24),s.Qb(19,"div",25),s.Qb(20,"ion-label"),s.Qb(21,"h3",26),s.tc(22),s.bc(23,"translate"),s.Pb(),s.Pb(),s.Qb(24,"p",27),s.tc(25," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "),s.Pb(),s.Pb(),s.Pb(),s.Qb(26,"div",24),s.Qb(27,"div",25),s.Qb(28,"ion-label"),s.Qb(29,"h3",26),s.tc(30),s.bc(31,"translate"),s.Pb(),s.Pb(),s.Qb(32,"p",28),s.tc(33),s.Pb(),s.Pb(),s.Pb(),s.Qb(34,"div",24),s.Qb(35,"div",25),s.Qb(36,"ion-label"),s.Qb(37,"h3",26),s.tc(38),s.bc(39,"translate"),s.Pb(),s.Pb(),s.Qb(40,"p",29),s.tc(41),s.Pb(),s.Pb(),s.Pb(),s.Qb(42,"div",24),s.Qb(43,"div",25),s.Qb(44,"ion-label"),s.Qb(45,"h3",26),s.tc(46),s.bc(47,"translate"),s.Pb(),s.Pb(),s.Qb(48,"p",28),s.tc(49),s.Pb(),s.Pb(),s.Pb(),s.Qb(50,"div",24),s.Qb(51,"div",25),s.Qb(52,"ion-label"),s.Qb(53,"h3",26),s.tc(54),s.bc(55,"translate"),s.Pb(),s.Pb(),s.rc(56,p,3,1,"div",30),s.rc(57,g,2,0,"ng-template",null,31,s.sc),s.Pb(),s.Pb(),s.Pb(),s.Qb(59,"div",32),s.Qb(60,"a",33),s.tc(61),s.bc(62,"translate"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t){const t=s.mc(58),n=s.ac(2);s.Cb(7),s.jc("name","",n.company.firstName," ",n.company.lastName,""),s.gc("round",!1),s.Cb(4),s.wc(" ",n.company.firstName," ",n.company.lastName," "),s.Cb(6),s.uc(n.company.location),s.Cb(5),s.wc(" ",s.cc(23,18,"APP.LISTING_DETAILS.ABOUT")," ",n.company.companyName," "),s.Cb(8),s.vc(" ",s.cc(31,20,"APP.LISTING_DETAILS.LABEL.FIRM_ACTIVITY")," "),s.Cb(3),s.vc(" ",n.company.firmActivity," "),s.Cb(5),s.vc(" ",s.cc(39,22,"APP.LISTING_DETAILS.LABEL.SERVICE_PROVIDING")," "),s.Cb(3),s.vc(" ",n.serviceProviding," "),s.Cb(5),s.vc(" ",s.cc(47,24,"APP.LISTING_DETAILS.LABEL.MOBILE_NUMBER")," "),s.Cb(3),s.vc(" ",n.company.mobileNumber," "),s.Cb(5),s.vc(" ",s.cc(55,26,"APP.LISTING_DETAILS.LABEL.LANDLINE_NUMBER")," "),s.Cb(2),s.gc("ngIf",""!==n.company.landlineNumber)("ngIfElse",t),s.Cb(5),s.uc(s.cc(62,28,"APP.LISTING_DETAILS.BUTTON.CALL_NOW"))}}function f(t,n){if(1&t&&(s.Qb(0,"ion-list",10),s.rc(1,u,63,30,"ion-item-sliding",11),s.Pb()),2&t){const t=s.ac();s.Cb(1),s.gc("ngIf",t.company)}}function Q(t,n){1&t&&(s.Qb(0,"ion-list",10),s.Qb(1,"ion-item-sliding"),s.Qb(2,"ion-item",10),s.Qb(3,"ion-label"),s.Qb(4,"h3"),s.Ob(5,"ion-skeleton-text",34),s.Pb(),s.Qb(6,"p"),s.Ob(7,"ion-skeleton-text",35),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb())}let h=(()=>{class t{constructor(t,n,i,b){this.activatedRoute=t,this.toastservice=n,this.ngroute=i,this.fbstore=b,this.isLoading=!0,this.paramId=this.activatedRoute.snapshot.paramMap.get("id")}ngOnInit(){this.getProduct(this.paramId)}getProduct(t){return Object(a.b)(this,void 0,void 0,function*(){try{yield this.fbstore.doc("companys/"+t).valueChanges().subscribe(t=>{this.isLoading=!1,t?(this.serviceProviding=t.serviceProviding.toString().split(",").join("\n"),this.company=t):this.ngroute.navigate(["/listing"])})}catch(n){this.toastservice.showToast(n.message,2e3)}})}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(s.Nb(o.a),s.Nb(r.a),s.Nb(o.g),s.Nb(l.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-listing"]],decls:16,vars:6,consts:[[1,"osahan-header-nav","shadow-sm","p-3","d-flex","align-items-center","bg-purple"],[1,"font-weight-normal","mb-0","text-white"],["routerLink","/listing",1,"text-purple"],["icon","arrow-left",1,"icofont-rounded-left"],[1,"ml-auto","d-flex","align-items-center"],["size","50",3,"name"],["slot","end"],["icon","bars",1,"icofont-navigation-menu"],["id","content","fullscreen",""],["lines","none",4,"ngIf"],["lines","none"],[4,"ngIf"],["size","12"],[1,"Bus-Details","padding-bt"],[1,"list_item","m-0","bg-white"],[1,"px-2","py-3","tic-div","border-bottom","d-flex"],["size","40","initialsSize","2","cornerRadius","4",3,"round","name"],[1,"w-100","margin-left-15"],[1,"my-1","l-hght-18","font-weight-bold"],[1,"start-rating","f-10"],[1,"d-flex","mt-1"],[1,"m-0"],["icon","map-marker-alt",1,"map-marker-alt"],[1,"small"],[1,"bus-details","pt-2","pb-0","px-2"],["id","info",1,"info"],[1,"font-weight-normal","mb-1"],[1,"text-muted","small"],[1,"text-muted"],[1,"text-muted",2,"white-space","pre-line"],[4,"ngIf","ngIfElse"],["other_content",""],[1,"osahan-fotter","fixed-bottom","px-3"],[1,"btn","btn-purple","btn-block","osahanbus-btn"],["animated","",2,"width","30%"],["animated","",2,"width","75%"]],template:function(t,n){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"div",0),s.Qb(2,"h5",1),s.Qb(3,"a",2),s.Ob(4,"fa-icon",3),s.Pb(),s.Qb(5,"ion-title"),s.tc(6),s.bc(7,"translate"),s.Pb(),s.Pb(),s.Qb(8,"div",4),s.Ob(9,"ngx-avatar",5),s.Qb(10,"ion-buttons",6),s.Qb(11,"ion-menu-button"),s.Ob(12,"fa-icon",7),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(13,"ion-content",8),s.rc(14,f,2,1,"ion-list",9),s.rc(15,Q,8,0,"ion-list",9),s.Pb()),2&t&&(s.Cb(6),s.uc(s.cc(7,4,"APP.LISTING_DETAILS.TITLE")),s.Cb(3),s.hc("name",n.userName),s.Cb(5),s.gc("ngIf",!n.isLoading),s.Cb(1),s.gc("ngIf",n.isLoading))},directives:[c.g,o.i,c.z,d.a,c.u,m.a,c.c,c.n,c.e,b.j,c.l,c.j,c.f,c.q,c.d,c.k,c.i,c.t],pipes:[P.c],styles:[".google-btn[_ngcontent-%COMP%]{border-color:#507cc0;color:#507cc0!important}.fb-btn[_ngcontent-%COMP%], .google-btn[_ngcontent-%COMP%]{background-color:#fff}.fb-btn[_ngcontent-%COMP%]{border-color:#df4930;color:#df4930!important}.sign-or[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:130px;border-top:1px solid #dee2e6}"]}),t})();const v=[{path:"",component:h}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[o.j.forChild(v)],o.j]}),t})();const L=[b.b,e.h,c.v,o.j.forChild([{path:":id",component:h}]),d.c,m.b,I,P.b],C=[];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({providers:C,imports:[L]}),t})()}}]);