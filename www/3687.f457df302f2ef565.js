"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(f,d,a)=>{a.r(d),a.d(d,{LoginPageModule:()=>P});var p=a(6814),g=a(95),t=a(9810),r=a(1147),n=a(9212),m=a(8789);const h=[{path:"",component:(()=>{var e;class i{constructor(o,s){this._service=o,this._router=s}Login(){this._service.Login(this.Username,this.Password).subscribe(o=>{o&&o.length>0?(console.log("Login berhasil:",o),this._router.navigate(["/tabs/home"])):console.error("Login gagal:",o?o.message:"Tidak ada respon dari server")},o=>{console.log("Login gagal :",o)})}Lihat(){this._router.navigate(["/tabs/freeuser"])}}return(e=i).\u0275fac=function(o){return new(o||e)(n.Y36(m.s),n.Y36(r.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:24,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"custom-list"],["position","stacked"],["placeholder","Username",3,"ngModel","ngModelChange"],["placeholder","Password","type","Password",3,"ngModel","ngModelChange"],["type","submit","expand","full","shape","round",1,"tambah-button",3,"click"]],template:function(o,s){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"Selamat datang"),n.qZA()()(),n.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),n._uU(8,"login"),n.qZA()()(),n.TgZ(9,"ion-list",4)(10,"ion-item")(11,"ion-label",5),n._uU(12,"Username"),n.qZA(),n.TgZ(13,"ion-input",6),n.NdJ("ngModelChange",function(c){return s.Username=c}),n.qZA()(),n._UZ(14,"br"),n.TgZ(15,"ion-item")(16,"ion-label",5),n._uU(17,"Password"),n.qZA(),n.TgZ(18,"ion-input",7),n.NdJ("ngModelChange",function(c){return s.Password=c}),n.qZA()(),n._UZ(19,"br"),n.TgZ(20,"ion-button",8),n.NdJ("click",function(){return s.Login()}),n._uU(21," Login "),n.qZA(),n.TgZ(22,"ion-button",8),n.NdJ("click",function(){return s.Lihat()}),n._uU(23," Lihat Pengumuman "),n.qZA()()()),2&o&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(9),n.Q6J("ngModel",s.Username),n.xp6(5),n.Q6J("ngModel",s.Password))},dependencies:[g.JJ,g.On,t.YG,t.W2,t.Gu,t.pK,t.Ie,t.Q$,t.q_,t.wd,t.sr,t.j9]}),i})()}];let L=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[r.Bz.forChild(h),r.Bz]}),i})(),P=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.ez,g.u5,t.Pc,L]}),i})()}}]);