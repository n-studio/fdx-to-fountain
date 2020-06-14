(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/fdx-to-fountain/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("845f");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center flex-col pb-2"},[n("h1",{staticClass:"w-64 mx-auto my-4 text-lg"},[e._v("Finaldraft to Fountain converter")]),n("label",{staticClass:"w-64 flex flex-col items-center px-2 py-3 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white"},[n("svg",{staticClass:"w-6 h-4",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"}})]),n("span",{staticClass:"mt-1 text-base leading-normal"},[e._v("Load screenplay")]),n("input",{ref:"inputFiles",staticClass:"hidden",attrs:{type:"file",name:"inputfile"},on:{change:e.onFileChange}})]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"text-red-600 py-2"},[e._v(" "+e._s(e.error)+" ")]),e.isFileLoaded?n("div",{staticClass:"flex flex-col px-4 my-4"},[n("div",{staticClass:"self-end py-4"},[n("button",{staticClass:"border border-blue-400 hover:bg-blue-600 hover:text-white text-blue-600 py-2 px-4 rounded inline-flex items-center",on:{click:e.download}},[n("svg",{staticClass:"w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"}})]),n("span",[e._v("Download")])])]),n("div",{staticClass:"flex flex-col mx-auto text-sm border-l-2 border-r-2 border-gray-400",staticStyle:{width:"210mm"}},[e._l(e.tokens,(function(t,r){return["dialogue_begin"===t.type?n("br",{key:r}):n("p",{key:r,class:e.cssClass(t)},[e._v(e._s(t.text))])]}))],2)]):e._e()])},a=[],s=(n("b0c0"),n("21a6")),i=n("f503"),l=n("5974");function c(e){return e+".fountain"}var u={name:"App",methods:{cssClass:function(e){switch(e.type){case"scene_heading":return"font-semibold underline px-10";case"action":return"w-full py-1 px-10";case"character":return"self-center leading-3";case"dialogue":return"w-7/12 self-center px-20 leading-2";case"parenthetical":return"w-7/12 self-center px-20 leading-3";case"transition":return"self-end";default:break}},download:function(){var e=new Blob([this.content],{type:"text/plain;charset=utf-8"}),t=c(this.fileName);Object(s["saveAs"])(e,t)},onFileChange:function(){if(this.error="",this.$refs.inputFiles.files.length>0){var e=this.$refs.inputFiles.files[0];this.fileName=e.name;var t=new FileReader,n=this;t.onload=function(e){n.isFileLoaded=!0,Object(i["a"])(e.target.result).then((function(e){n.content=e,Object(l["a"])(n.content,(function(e){n.tokens=e.tokens}))})).catch((function(e){n.error=e,n.isFileLoaded=!1}))},t.readAsText(e)}}},data:function(){return{isFileLoaded:!1,fileName:"No file chosen",error:"",content:"",tokens:[]}}},f=u,d=n("2877"),p=Object(d["a"])(f,o,a,!1,null,null,null),h=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"845f":function(e,t,n){}});
//# sourceMappingURL=app.e104e027.js.map