(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a1ff850"],{8194:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var l=a("b775");function n(e){return Object(l["a"])({url:"/member/list",method:"post",params:e})}function s(e){return Object(l["a"])({url:"/member/commit/",method:"post",params:e})}function i(e){return Object(l["a"])({url:"/member/detail/"+e,method:"post"})}function o(e){return Object(l["a"])({url:"/member/delete/"+e,method:"post"})}function r(e){return Object(l["a"])({url:"/member/drop/"+e,method:"post"})}},e093:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",[a("el-form",{staticClass:"searchForm",attrs:{inline:!0,model:e.select}},[a("el-form-item",{attrs:{label:"请输入微信昵称"}},[a("el-input",{staticClass:"seach",attrs:{placeholder:"请输入微信昵称",size:"small",clearable:""},model:{value:e.select.name,callback:function(t){e.$set(e.select,"name",t)},expression:"select.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"请输入手机号"}},[a("el-input",{staticClass:"seach",attrs:{placeholder:"请输入手机号",maxlength:"11",size:"small",clearable:""},model:{value:e.select.mobile,callback:function(t){e.$set(e.select,"mobile",t)},expression:"select.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"请输入身份证号"}},[a("el-input",{staticClass:"seach",attrs:{placeholder:"请输入身份证号",size:"small",clearable:""},model:{value:e.select.idCard,callback:function(t){e.$set(e.select,"idCard",t)},expression:"select.idCard"}})],1),e._v(" "),a("div",{staticClass:"seachBtn"},[a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(t){return e.currentChange(1)}}}),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:e.restSearch}})],1)],1)],1),e._v(" "),a("div",[a("el-button",{staticClass:"form-btn-diy",attrs:{type:"success",size:"small"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加核销员")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",height:"500",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"微信昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickname)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"微信头像",align:"center","class-name":"b_imgBox"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.imgPath,onerror:"javascript:this.src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560835537905&di=fefc36c4df18783fc167340937ee13e4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F27%2F20160727132507_yP8fe.jpeg'",alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"客户姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"验证手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.mobile)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"身份证号码",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.idCard)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(a){return a.preventDefault(),e.toEdit(t.row.id)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger"},nativeOn:{click:function(a){return a.preventDefault(),e.doDel(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"b_pagebox"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.listSize},on:{"current-change":e.currentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"身份编辑",visible:e.dialogFormVisible,width:"40%","close-on-click-modal":!1},on:{close:e.guanbi,"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"客户姓名"}},[a("el-input",{staticClass:"from_i_12",model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"验证手机号"}},[a("el-input",{staticClass:"from_i_12",model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证号码"}},[a("el-input",{staticClass:"from_i_12",model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)},n=[],s=(a("ac6a"),a("4ec3")),i=a("8194"),o={data:function(){return{dialogVisible:!1,paths:null,dialogFormVisible:!1,form:{id:null,name:null,mobile:null,idCard:null},uploadPath:s["h"],list:null,listLoading:!0,listSize:0,select:{type:2,offset:1,limmit:10,dateTime:null},pathsLoad:[]}},created:function(){this.currentChange(1)},methods:{restSearch:function(){this.select={type:2,offset:1,limmit:10,dateTime:null},this.currentChange(1)},guanbi:function(){this.form={id:null,name:null,mobile:null,idCard:null}},onSubmit:function(){var e=this;this.paths&&(this.form.paths=this.paths.join(",")),Object(i["d"])(this.form).then((function(t){1e4===t.status?(e.$message.success("添加成功"),e.dialogFormVisible=!1,e.currentChange(1)):2e4===t.status&&e.$message.error(t.message)}))},doDel:function(e){var t=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(e).then((function(e){1e4===e.status?(t.currentChange(1),t.$message({type:"success",message:"删除成功!"})):2e4===e.status&&t.$message.error(e.message)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},toEdit:function(e){var t=this;Object(i["c"])(e).then((function(e){1e4===e.status?(t.form=e.data,e.data.paths&&e.data.paths.forEach((function(e){t.paths.push(e.dataPath),t.pathsLoad.push({url:e.dataPath,upUrl:e.dataPath})})),t.dialogFormVisible=!0):2e4===e.status&&t.$message.error(e.message)}))},currentChange:function(e){var t=this;this.listLoading=!0,this.select.offset=e,console.log(this.select),Object(i["e"])(this.select).then((function(e){1e4===e.status?(t.listLoading=!1,t.list=e.data.list,t.listSize=e.data.total):2e4===e.status&&t.$message.error(e.message)}))},handleAvatarSuccess:function(e,t){console.log(e),console.log(t),this.$message.success("上传成功")},beforeUpload:function(e){},uploadFile:function(e){console.log(e);var t=e.file,a=new FormData;a.append("file",t),console.log(JSON.stringify(a))}}},r=o,c=a("2877"),u=Object(c["a"])(r,l,n,!1,null,null,null);t["default"]=u.exports}}]);