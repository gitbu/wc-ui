(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{321:function(e,t,a){},341:function(e,t,a){"use strict";var n=a(321);a.n(n).a},349:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{viewCodeStatus:!1}},computed:{viewCodeTxt:function(){return this.viewCodeStatus?"隐藏代码":"显示代码"}},methods:{handleViewCodeStatus:function(){this.viewCodeStatus=!this.viewCodeStatus}}},o=(a(341),a(45)),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"source"},[e._t("source")],2),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.viewCodeStatus,expression:"viewCodeStatus"}],staticClass:"meta"},[e._t("code")],2),e._v(" "),a("div",{staticClass:"code-view-control",on:{click:e.handleViewCodeStatus}},[e._v("\n    "+e._s(e.viewCodeTxt)+"\n  ")])])}),[],!1,null,"522a77ec",null);t.default=i.exports},401:function(e,t,a){"use strict";a.r(t);var n={components:{Container:a(349).default},data:function(){return{jsonData:JSON.stringify(o),path:[],editAble:!1,removeAble:!1,addAble:!1,canDrag:!1,collapsed:1}},computed:{_path:function(){return JSON.stringify(this.path)}},mounted:function(){var e=this;console.log(this.$refs),this.$refs.jsonView.addEventListener("selectNode",(function(t){var a=t.detail;e.path=a}))}},o={shareConfig:{coverImage:"",title:"这是#分享者#的大力推荐",description:"这是#分享者#大力推荐的H5"},title:"未命名场景",pages:[{uuid:"0dabb27c-0fd3-4b6e-b539-3e8ff4d95a90",name:"",elements:[{uuid:"4ff7b22e-1718-4fdd-bf99-b92c2d121174",elName:"qk-text",animations:[{type:"slideInDown",duration:1,infinite:"",interationCount:1,delay:0}],commonStyle:{position:"absolute",width:375,height:40,top:63,left:1},events:[{type:"link",url:"http:www.baidu.com"}],propsValue:{text:"这是一段文字"},valueType:"String",isForm:!1}],commonStyle:{backgroundColor:"rgba(18, 159, 220, 1)",backgroundImage:"",backgroundSize:"cover"}}],author:"5dd759531659195eb93b15e6",created:"2020-05-10T09:24:40.661Z",updated:"2020-05-10T09:24:40.661Z",__v:0},i=n,l=a(45),s=Object(l.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("container",{scopedSlots:e._u([{key:"source",fn:function(){return[a("wc-json-view",{ref:"jsonView",attrs:{datas:e.jsonData,"edit-able":e.editAble,"remove-able":e.removeAble,"add-able":e.addAble,"can-drag":e.canDrag,collapsed:e.collapsed}}),e._v(" "),e.path.length>0?a("div",[e._v("\n        当前节点的路径：(路径是用一个数组表示的)\n        "),a("wc-json-view",{attrs:{datas:e._path,collapsed:2}})],1):e._e(),e._v(" "),a("div",[a("h3",[e._v("设置属性")]),e._v(" "),a("el-checkbox",{model:{value:e.editAble,callback:function(t){e.editAble=t},expression:"editAble"}},[e._v("可编辑")]),e._v(" "),a("el-checkbox",{model:{value:e.addAble,callback:function(t){e.addAble=t},expression:"addAble"}},[e._v("可添加")]),e._v(" "),a("el-checkbox",{model:{value:e.removeAble,callback:function(t){e.removeAble=t},expression:"removeAble"}},[e._v("可删除")]),e._v(" "),a("el-checkbox",{model:{value:e.canDrag,callback:function(t){e.canDrag=t},expression:"canDrag"}},[e._v("可移动")]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("\n          collapsed:\n          "),a("el-select",{attrs:{size:"mini",placeholder:"请选择展开层级"},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},e._l([0,1,2,3,4,5,6,7],(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1)]},proxy:!0},{key:"code",fn:function(){return[a("Content",{attrs:{"slot-key":"code"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=s.exports}}]);