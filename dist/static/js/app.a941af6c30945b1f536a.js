webpackJsonp([1],{"9njP":function(t,a){},IflE:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},n,!1,function(t){e("gsu9")},null,null).exports,r=e("/ocq"),o=e("mtWM"),u=e.n(o),l={data:function(){return{email:void 0,senha:void 0,msg:void 0}},methods:{adiciona:function(){var t=this;u.a.post("https://tap-api-tads.herokuapp.com/usuario",{email:t.email,senha:t.senha}).then(function(a){200===a.data.status?t.msg="Cadastrado!":t.msg="Ops, tivemos um problema, tente novamente",console.log(a)}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"input-group mb-3"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.senha},on:{input:function(a){a.target.composing||(t.senha=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},on:{click:function(a){return t.adiciona()}}},[t._v("Adiciona")]),t._v(" "),e("div",{staticClass:"col-md-12",staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.msg))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[this._v("Email")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[this._v("Senha")])])}]};var p=e("VU/8")(l,c,!1,function(t){e("IflE")},"data-v-765b7a96",null).exports,d={data:function(){return{email:void 0,msg:void 0}},methods:{verifica:function(){var t=this;u.a.get("https://tap-api-tads.herokuapp.com/usuario/"+t.email).then(function(a){t.msg=a.data.mensagem}).catch(function(t){console.log(t)})}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"input-group mb-3"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},on:{click:function(a){return t.verifica()}}},[t._v("Verifica")]),t._v(" "),e("div",{staticClass:"col-md-12",staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.msg))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[this._v("Email")])])}]},v=e("VU/8")(d,m,!1,null,null,null).exports,f={data:function(){return{email:void 0,senha:void 0}},methods:{adiciona:function(){u.a.post("https://tap-api-tads.herokuapp.com/gerartoken",{email:this.email,senha:this.senha}).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"input-group mb-3"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.senha},on:{input:function(a){a.target.composing||(t.senha=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},on:{click:function(a){return t.adiciona()}}},[t._v("Login")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[this._v("Email")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[this._v("Senha")])])}]};var h=e("VU/8")(f,g,!1,function(t){e("9njP")},"data-v-43039c22",null).exports;i.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"adm",component:p},{path:"/verifica",name:"verifica",component:v},{path:"/login",name:"login",component:h}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},gsu9:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.a941af6c30945b1f536a.js.map