webpackJsonp([1],{"4Uwr":function(e,t,n){e.exports=n.p+"static/img/logo.eb7de00.jpg"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("bOdI"),r=n.n(i),s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:n("4Uwr")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(e){n("eRWq")},null,null).exports,d=n("/ocq"),h=n("BO1k"),l=n.n(h),u={name:"HelloWorld",data:function(){return{s_begin:"data",s_end:"code",msg:"",word_list:[],ladder:null}},mounted:function(){this.ladder=new this.Graph,document.onkeydown=this.keyListener},methods:{keyListener:function(e){13===e.keyCode&&document.getElementById("search").click()},run:function(){if(0!==this.word_list.length)if(0!==this.s_begin.length&&0!==this.s_end.length)if(this.s_begin!==this.s_end)if(this.s_begin.length===this.s_end.length){this.ladder.getDictionary(this.word_list);var e=this.ladder.init(this.s_begin,this.s_end);if(0===e.length)if(this.ladder.access(this.s_begin,this.s_end)){this.msg="A ladder from "+this.s_end+" back to "+this.s_begin+":\n";var t=this.ladder.getLadder(this.s_begin,this.s_end),n=!0,i=!1,r=void 0;try{for(var s,a=l()(t);!(n=(s=a.next()).done);n=!0){var o=s.value;this.msg+=o+" "}}catch(e){i=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}}else this.msg="No word ladder found from "+this.s_end+" back to "+this.s_begin+".";else this.msg=e}else this.msg="The two words must be the same length.";else this.msg="The two words must be different.";else this.msg="Have a nice day.";else this.msg="You must select a dictionary file."},fileImport:function(){var e=this,t=document.getElementById("files").files[0],n=new FileReader;n.readAsText(t),n.onload=function(){e.word_list=n.result.split("\n")}},Graph:function(){var e=this;this.word_list_sub=new Array,this.edge=new Array,this.head=new Array,this.dictionary={},this.union_find=new function(){var e=this;this.father=[],this.init=function(t){e.father=new Array(t+1);for(var n=0;n<=t;n++)e.father[n]=n},this.find=function(t){return e.father[t]==t?t:(e.father[t]=e.find(e.father[t]),e.father[t])},this.union=function(t,n){e.father[e.find(t)]=e.find(n)}},this.word_list=[],this.getDictionary=function(t){e.word_list=t},this.init=function(t,n){e.edge.splice(0,e.edge.length),e.dictionary={},e.word_list_sub.splice(0,e.word_list_sub.length);var i=e.word_list.length,r=t.length;e.union_find.init(i),e.head=new Array(i);for(var s=0;s<i;s++)e.head[s]=-1;for(s=0;s<i;s++){var a=e.word_list[s];a.length===r&&(e.word_list_sub.push(new String(a)),e.dictionary[a]=e.word_list_sub.length)}if(console.log(e.dictionary),!e.dictionary[n]||!e.dictionary[t])return"The two words must be found in the dictionary.";for(i=e.word_list_sub.length,s=0;s<i;s++)e.findEdgeToAdd(e.word_list_sub[s],s+1);return""},this.findEdgeToAdd=function(t,n){for(var i=t.length,r=0;r<i;r++)for(var s=0;s<26;s++){var a=String.fromCharCode(97+s);if(String(t[r])!==a){var o=t.substring(0,r)+a+t.substring(r+1,t.length),d=e.dictionary[o];d&&e.addEdge(n,d)}}},this.addEdge=function(t,n){e.union_find.union(t,n),e.edge.push(new function(e,t,n){this.v=e,this.w=t,this.next=n}(n,1,e.head[t])),e.head[t]=e.edge.length-1},this.access=function(t,n){var i=e.dictionary[t],r=e.dictionary[n];return e.union_find.find(i)===e.union_find.find(r)},this.getLadder=function(t,n){var i=new Array,r=e.dictionary[t],s=e.dictionary[n],a=e.spfa(e.word_list_sub.length,r,s);i.push(new String(n));for(var o=a[s];o!=r;o=a[o])i.push(new String(e.word_list_sub[o-1]));return i.push(new String(t)),i},this.spfa=function(t,n,i){var r=t+2,s=new Array;r+=2;for(var a=new Array,o=new Array(r),d=new Array(r),h=0;h<r;h++)d[h]=r,o[h]=!1,s.push(-1);for(a.push(n),d[n]=0,o[n]=!0;0!==a.length;){var l=a.shift();o[l]=!1;for(h=e.head[l];-1!==h;h=e.edge[h].next){var u=e.edge[h].v;d[u]>d[l]+e.edge[h].w&&(d[u]=d[l]+e.edge[h].w,s[u]=l,o[u]||(o[u]=!0,a.push(u)))}}return s}}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("select file")]),e._v(" "),n("input",{attrs:{type:"file",id:"files"},on:{change:e.fileImport}}),n("br"),e._v(" "),n("label",[e._v("first word: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.s_begin,expression:"s_begin"}],attrs:{type:"text"},domProps:{value:e.s_begin},on:{input:function(t){t.target.composing||(e.s_begin=t.target.value)}}}),n("br"),e._v(" "),n("label",[e._v("second word: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.s_end,expression:"s_end"}],attrs:{type:"text"},domProps:{value:e.s_end},on:{input:function(t){t.target.composing||(e.s_end=t.target.value)}}}),n("br"),e._v(" "),n("button",{attrs:{type:"button",id:"search"},on:{click:e.run}},[e._v("search")]),n("br"),e._v(" "),n("h2",[e._v(e._s(e.msg))])])},staticRenderFns:[]};var c=n("VU/8")(u,f,!1,function(e){n("qDFa")},"data-v-129a6a00",null).exports;s.a.use(d.a);var g=new d.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),_=n("mtWM"),v=n.n(_);s.a.config.productionTip=!1;var p=v.a.create(r()({baseURL:"/"},"baseURL","/api/"));s.a.prototype.$http=p,new s.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},eRWq:function(e,t){},qDFa:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2a9f875272bbd1a41169.js.map