(function(t){function e(e){for(var i,l,s=e[0],o=e[1],c=e[2],u=0,p=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},r=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1546:function(t,e,a){},3170:function(t,e,a){},"3cd63":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("be4f"),a("450d");var i=a("896a"),n=a.n(i),r=(a("e3ea"),a("7bc3")),l=a.n(r),s=(a("6611"),a("e772")),o=a.n(s),c=(a("1f1a"),a("4e4b")),d=a.n(c),u=(a("6b30"),a("c284")),p=a.n(u),f=(a("fd71"),a("a447")),g=a.n(f),m=(a("5466"),a("ecdf")),v=a.n(m),b=(a("e612"),a("dd87")),h=a.n(b),_=(a("38a0"),a("ad41")),x=a.n(_),y=(a("075a"),a("72aa")),w=a.n(y),S=(a("1951"),a("eedf")),j=a.n(S),C=(a("acb6"),a("c673")),k=a.n(C),L=(a("b8e0"),a("a4c4")),O=a.n(L),T=(a("a7cc"),a("df33")),$=a.n(T),N=(a("46a1"),a("e5f2")),R=a.n(N),A=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-content")],1)},U=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Content"}},[a("el-dialog",{attrs:{title:"AI预测中",visible:t.dialogTableVisible,"show-close":!1,"close-on-press-escape":!1,"append-to-body":!0,"close-on-click-modal":!1,center:!0},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-progress",{attrs:{percentage:t.percentage}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t._v("请耐心等待约3秒钟")])],1),a("div",{attrs:{id:"CT"}},[a("div",{attrs:{id:"CT_image"}},[t._m(0),a("div",{staticStyle:{display:"inline-flex","margin-top":"15px","justify-content":"flex-start"}},[a("div",[a("el-image",{staticClass:"image_mini",staticStyle:{"border-radius":"5px 5px 0 0","margin-top":"2px"},attrs:{src:t.mini_url}}),t._m(1)],1),a("el-card",{staticClass:"box-card",staticStyle:{"border-radius":"8px",width:"800px",height:"372px","margin-bottom":"-30px","background-color":"beige",display:"flex","justify-content":"space-around"},attrs:{id:"CT_image_1"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[a("div",{staticClass:"demo-image__preview1"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"上传图片中","element-loading-spinner":"el-icon-loading"}},[a("el-image",{staticClass:"image_1",staticStyle:{"border-radius":"3px 3px 0 0"},attrs:{src:t.url_1,"preview-src-list":t.srcList}},[a("div",{attrs:{slot:"error"},slot:"error"},[a("div",{staticClass:"error",attrs:{slot:"placeholder"},slot:"placeholder"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showbutton,expression:"showbutton"}],staticClass:"download_bt",attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.true_upload}},[t._v("\n                    上传图像\n                    "),a("input",{ref:"upload",staticStyle:{display:"none"},attrs:{name:"file",type:"file"},on:{change:t.update}})])],1)])])],1),a("div",{staticClass:"img_info_1",staticStyle:{"border-radius":"0 0 5px 5px"}},[a("span",{staticStyle:{color:"white","letter-spacing":"6px"}},[t._v("原始图像")])])]),a("div",{staticClass:"demo-image__preview2",staticStyle:{"margin-left":"80px"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"处理中,请耐心等待","element-loading-spinner":"el-icon-loading"}},[a("el-image",{staticClass:"image_1",staticStyle:{"border-radius":"3px 3px 0 0"},attrs:{src:t.url_2,"preview-src-list":t.srcList1}},[a("div",{attrs:{slot:"error"},slot:"error"},[a("div",{staticClass:"error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(t._s(t.wait_return))])])])],1),a("div",{staticClass:"img_info_1",staticStyle:{"border-radius":"0 0 5px 5px"}},[a("span",{staticStyle:{color:"white","letter-spacing":"4px"}},[t._v("检测结果")])])])]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("label",{staticStyle:{"margin-top":"15px",color:"#21b3b9","font-size":"16px","font-weight":"bold"}},[t._v("请选择蚕龄：")]),a("el-select",{staticStyle:{"margin-top":"15px",width:"180px"},attrs:{placeholder:"请选择蚕龄"},model:{value:t.selectedAge,callback:function(e){t.selectedAge=e},expression:"selectedAge"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])],1)]),a("div",{staticStyle:{display:"flex","justify-content":"flex-start"},attrs:{id:"info_patient"}},[a("div",[a("div",{staticClass:"clearfix unify",staticStyle:{"margin-top":"5px","margin-bottom":"10px","margin-right":"auto","margin-left":"230px"},attrs:{slot:"header"},slot:"header"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.showbutton,expression:"!showbutton"}],staticClass:"download_bt",staticStyle:{"margin-left":"3px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.true_upload2}},[t._v("\n                重新选择图像\n              "),a("input",{ref:"upload2",staticStyle:{display:"none"},attrs:{name:"file",type:"file"},on:{change:t.update}})]),a("el-link",{staticClass:"right",staticStyle:{"font-size":"16px","font-weight":"bold"},attrs:{target:"block",type:"primary",href:"http://ssdlab.cn:8888/down/0tQSNHhTa1rw"}},[t._v("测试样本下载")])],1),a("el-tabs",{staticClass:"unify add-border",staticStyle:{"padding-left":"20px","padding-right":"20px","padding-top":"20px","background-color":"beige","margin-top":"0px","margin-bottom":"0px","margin-right":"0px","margin-left":"230px"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"检测到的目标",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"unify",staticStyle:{width:"750px","text-align":"center","margin-bottom":"20px","margin-right":"470px"},attrs:{data:t.feature_list,height:"300",border:"",stripe:"","element-loading-text":"数据正在处理中，请耐心等待","element-loading-spinner":"el-icon-loading",lazy:""}},[a("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"概率",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[2]))])]}}])}),a("el-table-column",{attrs:{label:"类别",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[0]))])]}}])}),a("el-table-column",{attrs:{label:"措施",width:"400px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{width:"325px","text-align":"initial"}},[a("span",[t._v(t._s(e.row[1]))])])]}}])})],1)],1)],1)],1)]),a("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","margin-left":"230px","margin-top":"30px",width:"800px"}},[t._m(2),a("br"),a("div",{staticStyle:{width:"400px"}},[a("el-image",{staticStyle:{height:"180px",background:"#ffffff","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)","border-radius":"5px 5px 0 0","margin-top":"2px"},attrs:{src:t.overview_url}}),t._m(3)],1),t._m(4)]),a("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","margin-left":"230px","margin-top":"30px",width:"800px"}},[a("el-divider",{staticStyle:{"background-color":"#E4E7ED",width:"100%",height:"2px","margin-bottom":"0px"}}),t._m(5)],1)])],1)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"800px","background-color":"#1cabae","border-radius":"6px","margin-top":"0px","margin-bottom":"0px","margin-right":"auto","margin-left":"230px"},attrs:{id:"Header"}},[a("div",{attrs:{id:"word"}},[a("h1",[a("span",{staticStyle:{color:"azure"}},[t._v("桑蚕疾病监测")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img_info_mini",staticStyle:{"border-radius":"0 0 5px 5px"}},[a("span",{staticStyle:{color:"white","letter-spacing":"6px"}},[t._v("小程序二维码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("span",[t._v("\n                      我国桑蚕产业已经有了5500年的历史,一直是世界上茧丝出口大国。自从上世纪70年代，我国的蚕茧产量超过日本后，一直是世界上最大的蚕茧出口国。在改革开放后,国际政策的变化桑蚕产业持续发展现已成为某些地域重要的经济支柱，成为了落实脱贫攻坚和乡村振兴举措。近年来，蚕桑丝绸产业在技术进步、结构调整和品牌建设等方面取得了积极进展。根据蚕桑主产省（区、市）生产主管部门对春季蚕桑生产统计及年末对部分主产省的初步调查统计，2020年全国桑园面积1231万亩（含生态桑），发种量1662万张，桑蚕茧产量达到了68.6万吨，蚕茧和生丝产量占全球80%以上。"),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img_info_overview",staticStyle:{"border-radius":"0 0 5px 5px","word-break":"keep-all"}},[a("span",{staticStyle:{color:"white","letter-spacing":"6px"}},[t._v("图1 桑蚕疾病监测与防治智慧服务系统")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v("\n                    为了进一步落实国家和重庆市在蚕桑丝绸产业发展指导思想，推进蚕桑丝绸产业高质量发展，满足人民美好生活需要、带动相关产业发展、助推乡村振兴及脱贫攻坚，在规模化的工厂化养蚕背景下，研究如何利用人工智能（机器学习算法）相关信息技术，分析利用桑蚕疾病诊断与防治专家知识的大数据，构建如图1所示的桑蚕疾病监测与防治智慧服务系统，促进蚕桑养殖产业的大规模发展就显得尤为重要。\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("p",{staticStyle:{color:"#969a9c","font-size":"16px"}},[t._v("Copyright ©️ 2022-2023 ssdlab.cn All Rights Reserved")]),a("p",{staticStyle:{color:"#969a9c","font-size":"16px"}},[t._v(" 渝ICP备2022001104号")])])}],I=(a("ac6a"),a("456d"),a("7f7f"),a("7618")),D=(a("a481"),a("bc3a")),G=a.n(D),V={name:"Content",data:function(){return{server_url:"http://cxy.ssdlab.cn/",activeName:"first",active:0,centerDialogVisible:!0,mini_url:"http://ssdlab.cn:8888/down/2Q4PmS3SduS2",overview_url:"http://ssdlab.cn:8888/down/c9WJ3Gw9rzyI",url_1:"",url_2:"",textarea:"",srcList:[],srcList1:[],feature_list:[],feature_list_1:[],feat_list:[],url:"",visible:!1,wait_return:"等待上传",wait_upload:"等待上传",loading:!1,table:!1,isNav:!1,showbutton:!0,percentage:0,fullscreenLoading:!1,opacitys:{opacity:0},dialogTableVisible:!1,options:[{value:0,label:"三龄"},{value:1,label:"四龄"},{value:2,label:"五龄"}],selectedAge:0}},created:function(){document.title="桑蚕疾病监测"},methods:{true_upload:function(){this.$refs.upload.click()},true_upload2:function(){this.$refs.upload2.click()},next:function(){this.active++},getObjectURL:function(t){var e=null;return void 0!=window.createObjcectURL?e=window.createOjcectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},httpReplace:function(t){return t.replace("s","")},update:function(t){var e=this,a=t.target.files[0];if("object"===Object(I["a"])(a)){this.percentage=0,this.dialogTableVisible=!0,this.url_1="",this.url_2="",this.srcList=[],this.srcList1=[],this.wait_return="",this.wait_upload="",this.feature_list=[],this.feat_list=[],this.fullscreenLoading=!0,this.loading=!0,this.showbutton=!1,this.url_1=this.$options.methods.getObjectURL(a);var i=new FormData;i.append("file",a,a.name);var n=a.name.substr(a.name.lastIndexOf(".")+1);if(-1===["png","jpg","jpeg"].indexOf(n.toLowerCase()))return alert("只能上传jpg,jpeg,png格式的图片！"),void location.reload();var r=setInterval(function(){e.myFunc()},30),l={headers:{"Content-Type":"multipart/form-data"}};G.a.post(this.server_url+"/upload?age="+this.selectedAge,i,l).then(function(t){200!=t.status&&alert("请重新上传，图片格式错误或服务器内部错误！"),1!=t.data.status&&alert(t.data.msg),e.percentage=100,clearInterval(r),e.srcList.push(e.url_1),e.url_2=e.httpReplace(t.data.draw_url),e.srcList1.push(e.url_2),e.fullscreenLoading=!1,e.loading=!1,e.feat_list=Object.keys(t.data.image_info);for(var a=0;a<e.feat_list.length;a++)t.data.image_info[e.feat_list[a]][2]=e.feat_list[a],e.feature_list.push(t.data.image_info[e.feat_list[a]]);e.feature_list_1=e.feature_list[0],e.dialogTableVisible=!1,e.percentage=0,e.notice1()})}},myFunc:function(){this.percentage+33<99?this.percentage=this.percentage+33:this.percentage=99},drawChart:function(){},notice1:function(){this.$notify({title:"预测成功",message:"点击图片可以查看大图",duration:2e3,type:"success"})}},mounted:function(){this.drawChart()}},M=V,F=(a("b318"),a("67d9"),a("2877")),J=Object(F["a"])(M,P,z,!1,null,"634b0493",null),H=J.exports,Q={data:function(){return{}},components:{"app-content":H},methods:{}},W=Q,q=Object(F["a"])(W,E,U,!1,null,null,null),B=q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"img"}},[a("app-img")],1)},X=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"Date",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"Name",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"Address"}}),a("el-table-column",{attrs:{prop:"img",label:"图片",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{attrs:{src:t.row.img}})]}}])})],1)},Z=[];const tt=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",img:"/image/cover1.png"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",img:"/image/cover2.png"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",img:"/image/cover2.png"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",img:"/image/cover1.png"}];var et={name:"showpicture",data(){return{tableData:tt}}},at=et,it=Object(F["a"])(at,Y,Z,!1,null,"4f35c354",null),nt=it.exports,rt={data:function(){return{}},components:{"app-img":nt},methods:{}},lt=rt,st=Object(F["a"])(lt,K,X,!1,null,null,null),ot=st.exports,ct=a("8c4f"),dt=a("313e"),ut=a.n(dt);a("7d05"),a("3cd63");A["default"].prototype.$echarts=ut.a,A["default"].prototype.$notify=R.a,A["default"].use($.a),A["default"].use(O.a),A["default"].use(k.a),A["default"].use(j.a),A["default"].use(w.a),A["default"].use(x.a),A["default"].use(h.a),A["default"].use(v.a),A["default"].use(g.a),A["default"].use(p.a),A["default"].use(d.a),A["default"].use(o.a),A["default"].use(l.a),A["default"].use(n.a),A["default"].config.productionTip=!1,A["default"].use(ct["a"]),A["default"].prototype.$http=G.a;var pt=new ct["a"]({routes:[],mode:"history"});A["default"].component("App",B),A["default"].component("IMG",ot),new A["default"]({el:"#app",router:pt,render:function(t){return t(B)}})},"67d9":function(t,e,a){"use strict";var i=a("1546"),n=a.n(i);n.a},"7d05":function(t,e,a){},b318:function(t,e,a){"use strict";var i=a("3170"),n=a.n(i);n.a}});
//# sourceMappingURL=app.31aa2b1b.js.map