(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5accb849"],{2690:function(A,t,e){},2920:function(A,t,e){},"42d0":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAMAAAAZKoJqAAADAFBMVEUAAAAQKWMmHBpSKSljWpRrY62Ee62MMQicvfetxve8mGe9czHEn27RrHve9//vtVrvvWv/znP//8b///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAjFXdAAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH4wMdBAgUbN3AtwAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABiklEQVQ4jY3VgXKDIAwGYFwzU8ZmXXn/d11+kkDQs+t/N1ePr4AQbMrv5fMj1feSSSTR+jpEIpdU6a4h5N4z35isuMmEQWhEb9BUIWX0tTnABY3N259cc0bz2mVuLYv2ZJ+rfSdHmeu2WZ96HZ+2DdQl4GbjxtGpSVCXgKCSjQ5BSz3I6xxk7OQfaXM7jR2lPtFYGRqPts1P1Glfw6tVaivvKx6udF55203foTB6Pu6ml1IMtNfSJI+Zqu6lnHKW09G5lmhlTi3MJeJJ5lyE7U/PrvokpTdTu6XdpHKqeS6z61r6nWqem3s89sJq/D9srHmBtYoT4VH5i6G4V4jB1tUFNYmhO7ypu0W6c5BPl0llmju9kJjtlSy2PCXMUyVgCTLQ7gbcuySWOfuqs6WvvUyGySWhVz7tkG4R4JCgYrltqBwKKxKGAyR9KxLKW4fD9EaKzgbF77KdId/pKc2Rv5P7a8O72b1I1Onpa9JC2rNWvXzJyPjtiCfncI6n36OvRMtyOurHCPn5/gPEtUn6FbLdwAAAAABJRU5ErkJggg=="},"454f":function(A,t,e){e("46a7");var n=e("584a").Object;A.exports=function(A,t,e){return n.defineProperty(A,t,e)}},"456d":function(A,t,e){var n=e("4bf8"),a=e("0d58");e("5eda")("keys",function(){return function(A){return a(n(A))}})},"46a7":function(A,t,e){var n=e("63b6");n(n.S+n.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"5d56":function(A,t,e){
/*! pagemap v1.3.0 - https://larsjung.de/pagemap/ */
!function(t,e){A.exports=e()}("undefined"!=typeof self&&self,function(){return e={},A.m=t=[function(A,t,e){(function(t){A.exports=function(A,e){function n(A){return"rgba(0,0,0,".concat(A/100,")")}function a(A,t,e,n){return e.split(/\s+/).forEach(function(e){return A[t](e,n)})}function r(A,t,e){return a(A,"addEventListener",t,e)}function i(A,t,e){return a(A,"removeEventListener",t,e)}function o(A,t,e,n){return{x:A,y:t,w:e,h:n}}function s(A,t){var e=1<arguments.length&&void 0!==t?t:{x:0,y:0};return o(A.x-e.x,A.y-e.y,A.w,A.h)}function c(A){var t=A.getBoundingClientRect();return{x:t.left+_.pageXOffset,y:t.top+_.pageYOffset}}function l(A){var t=c(A),e=t.x,n=t.y;return o(e+A.clientLeft,n+A.clientTop,A.clientWidth,A.clientHeight)}function u(A,t){t&&(j.beginPath(),j.rect(A.x,A.y,A.w,A.h),j.fillStyle=t,j.fill())}function d(A){Object.keys(A).forEach(function(t){var e,n=A[t];e=t,Array.from((V||k).querySelectorAll(e)).forEach(function(A){var t,e,a,r;u(s((e=c(t=A),a=e.x,r=e.y,o(a,r,t.offsetWidth,t.offsetHeight)),b),n)})})}function f(){var t,e,n,a,r,i;b=V?(e=c(t=V),n=e.x,a=e.y,o(n+t.clientLeft-t.scrollLeft,a+t.clientTop-t.scrollTop,t.scrollWidth,t.scrollHeight)):o(0,0,O.scrollWidth,O.scrollHeight),y=V?l(V):o(_.pageXOffset,_.pageYOffset,O.clientWidth,O.clientHeight),C=M(b.w,b.h),r=b.w*C,i=b.h*C,A.width=r,A.height=i,A.style.width="".concat(r,"px"),A.style.height="".concat(i,"px"),j.setTransform(1,0,0,1,0,0),j.clearRect(0,0,A.width,A.height),j.scale(C,C),u(s(b,b),S.back),d(S.styles),u(s(y,b),E?S.drag:S.view)}function p(t){t.preventDefault();var e=l(A),n=(t.pageX-e.x)/C-y.w*w,a=(t.pageY-e.y)/C-y.h*x;V?(V.scrollLeft=n,V.scrollTop=a):_.scrollTo(n,a),f()}function v(t){E=!1,A.style.cursor="pointer",P.style.cursor="auto",i(_,"mousemove",p),i(_,"mouseup",v),p(t)}function h(t){E=!0;var e=l(A),n=s(y,b);w=((t.pageX-e.x)/C-n.x)/n.w,x=((t.pageY-e.y)/C-n.y)/n.h,(w<0||1<w||x<0||1<x)&&(x=w=.5),A.style.cursor="crosshair",P.style.cursor="crosshair",r(_,"mousemove",p),r(_,"mouseup",v),p(t)}var g,m,b,y,C,w,x,_=t.window,k=_.document,O=k.documentElement,P=k.querySelector("body"),j=A.getContext("2d"),S=Object.assign({viewport:null,styles:{"header,footer,section,article":n(8),"h1,a":n(10),"h2,h3,h4":n(8)},back:n(2),view:n(5),drag:n(10),interval:null},e),M=(g=A.clientWidth,m=A.clientHeight,function(A,t){return Math.min(g/A,m/t)}),V=S.viewport,E=!1;return A.style.cursor="pointer",r(A,"mousedown",h),r(V||_,"load resize scroll",f),0<S.interval&&setInterval(function(){return f()},S.interval),f(),{redraw:f}}}).call(this,e(1))},function(A,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(A){"object"==typeof window&&(e=window)}A.exports=e}],A.c=e,A.d=function(t,e,n){A.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},A.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},A.t=function(t,e){if(1&e&&(t=A(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)A.d(n,a,function(A){return t[A]}.bind(null,a));return n},A.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return A.d(e,"a",e),e},A.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},A.p="",A(A.s=0);function A(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,A),a.l=!0,a.exports}var t,e})},"5eda":function(A,t,e){var n=e("5ca1"),a=e("8378"),r=e("79e5");A.exports=function(A,t){var e=(a.Object||{})[A]||Object[A],i={};i[A]=t(e),n(n.S+n.F*r(function(){e(1)}),"Object",i)}},"6faa":function(A,t,e){"use strict";var n=e("2690"),a=e.n(n);a.a},"766b":function(A,t,e){"use strict";var n=e("2920"),a=e.n(n);a.a},"7a32":function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("audio",{attrs:{id:"roBGM",loop:"",muted:"","webkit-playsinline":"true",playsinline:"true"}},[e("source",{attrs:{src:A.audioSrc,type:"audio/mpeg"}})])])},a=[],r={props:{nowIndex:{type:String,default:""}},data:function(){return{audioSrc:""}},mounted:function(){this.autoPlayMusic()},methods:{autoPlayMusic:function(){var A=document.getElementById("roBGM");switch(this.nowIndex){case"index":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/08.mp3";break;case"products":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/12.mp3";break;case"aboutRo":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/26.mp3";break;case"login":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/01.mp3";break;case"customer":this.audioSrc="https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/login%402.mp3";break;default:this.audioSrc="";break}var t=A.play();void 0!==t&&t.then(function(){A.pause()}).then(function(){A.play(),A.volume=.2})}}},i=r,o=e("2877"),s=Object(o["a"])(i,n,a,!1,null,null,null);t["a"]=s.exports},"7a38":function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("a",{attrs:{id:"clickTop",href:"#",title:"TOP"}},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"],size:"3x"}})],1)])},a=[],r={data:function(){return{}},mounted:function(){$(function(){$(window).scroll(function(){$(window).scrollTop()>=50?$("#clickTop").fadeIn():$("#clickTop").fadeOut()})}),$("#clickTop").click(function(A){A.preventDefault(),$("html,body").animate({scrollTop:0},500)})}},i=r,o=(e("6faa"),e("2877")),s=Object(o["a"])(i,n,a,!1,null,null,null);t["a"]=s.exports},"81d3":function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"d-none d-lg-block"},[n("button",{attrs:{id:"cashShop"},on:{click:A.openModel}},[n("img",{attrs:{src:e("42d0"),tag:"商城",title:"商城"}})]),n("canvas",{attrs:{id:"map"}}),n("div",{staticClass:"modal fade",attrs:{id:"mallModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[A._m(0),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-1 col-lg-3"},[n("div",{staticClass:"category-list sticky-list"},[n("ul",{staticClass:"list-items"},[n("li",[n("a",{staticClass:"items",class:{active:"全部商品"==A.category.title},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="全部商品",A.getProducts()}}},[A._v("全部")])]),n("li",[n("a",{staticClass:"items",class:{active:"熱門商品"==A.category.title},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="熱門商品",A.getProducts()}}},[A._v("熱門")])]),n("li",[n("a",{staticClass:"items",class:{active:"組合優惠"==A.category.title},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="組合優惠",A.getProducts()}}},[A._v("組合")])]),n("li",[n("a",{staticClass:"items",class:{active:"MVP卡片"==A.category.title},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="MVP卡片",A.getProducts()}}},[A._v("卡片")])]),n("li",[n("a",{staticClass:"items",class:{active:"MVP武器"==A.category.title},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="MVP武器",A.getProducts()}}},[A._v("武器")])]),n("li",[n("a",{staticClass:"items",class:{active:"MVP防具"==A.category},attrs:{href:"#products"},on:{click:function(t){t.preventDefault(),A.category.title="MVP防具",A.getProducts()}}},[A._v("防具")])])])])]),n("div",{staticClass:"col-xl-7 col-md-9"},[n("div",{staticClass:"products"},[n("h3",[A._v(A._s(A.category.title))]),n("ul",{staticClass:"products-list"},A._l(A.getCategory,function(t){return n("li",{key:t.id,staticClass:"products-item"},[n("div",{staticClass:"products-top text-center"},[n("img",{staticClass:"card-img",attrs:{src:t.imageUrl}})]),n("div",{staticClass:"products-content p-2"},[n("div",{staticClass:"mall-title font-weight-bold"},[n("div",{staticClass:"text-ro"},[A._v("  "+A._s(t.title))])]),n("div",{staticClass:"d-flex justify-content-end mall-zeny"},[A._v("售價 "+A._s(t.price)+" P")])]),n("div",{staticClass:"products-footer"},[t.is_enabled?n("a",{staticClass:"btn btn-outline-danger btn-sm btn-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),A.addCart(t.id)}}},[A.loadingID===t.id?n("font-awesome-icon",{attrs:{icon:["fas","spinner"],spin:""}}):A._e(),A._v("手刀搶購")],1):n("a",{staticClass:"btn btn-outline-danger btn-block disabled",attrs:{href:"#"}},[A._v("下次請早")])])])}),0)])]),n("div",{staticClass:"col-xl-4 d-none d-xl-block"},[0!==A.cart.carts.length?n("div",{staticClass:"sticky-list"},[n("table",{staticClass:"table"},[A._m(1),n("tbody",A._l(A.cart.carts,function(t){return n("tr",{key:t.id},[n("td",{staticClass:"align-middle"},[n("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return A.removeCart(t.id)}}},[A.loadingID===t.id?n("font-awesome-icon",{attrs:{icon:["fas","spinner"],spin:""}}):A._e(),A.loadingID!==t.id?n("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}}):A._e()],1)]),n("td",{staticClass:"align-middle"},[A._v(A._s(t.product.title)),t.coupon?n("div",{staticClass:"text-success"},[A._v("已套用優惠券")]):A._e()]),n("td",{staticClass:"align-middle"},[A._v(A._s(t.qty))]),n("td",{staticClass:"align-middle text-right"},[A._v(A._s(A._f("currency")(t.final_total)))])])}),0),n("tfoot",[n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:"3"}},[A._v("總計")]),n("td",{staticClass:"text-right"},[A._v(A._s(A._f("currency")(A.cart.total)))])]),A.cart.final_total!==A.cart.total?n("tr",[n("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[A._v("折扣價")]),n("td",{staticClass:"text-right text-success"},[A._v(A._s(A._f("currency")(A.cart.final_total)))])]):A._e()])]),n("div",{staticClass:"input-group mb-3 input-group-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:A.coupon,expression:"coupon"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:A.coupon},on:{input:function(t){t.target.composing||(A.coupon=t.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){return A.userCoupon()}}},[A._v("套用優惠碼")])])])]):0===A.cart.carts.length?n("div",{staticClass:"sticky-list"},[n("div",{staticClass:"text-center"},[n("font-awesome-icon",{staticClass:"text-ro",attrs:{icon:["fas","shopping-cart"],size:"4x"}}),n("div",{staticClass:"h3 text-ro"},[A._v("oh! 竟然沒東西 !")])],1)]):A._e()])])])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[A._v("關閉")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:A.nextCustomer}},[A._v("前往結帳")])])])])])])},a=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[A._v("商城快速選購")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[A._v("×")])])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("thead",[e("tr",[e("th"),e("th",[A._v("品名")]),e("th",[A._v("數量")]),e("th",[A._v("單價")])])])}],r=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),i=e("2f62"),o=e("5d56"),s=e.n(o);function c(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable})),e.push.apply(e,n)}return e}function l(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach(function(t){Object(r["a"])(A,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))})}return A}var u={data:function(){return{category:{title:"全部商品"},coupon:""}},computed:l({getCategory:function(){var A=this;return A.products.filter(function(t){return"全部商品"===A.category.title?t:t.category===A.category.title})}},Object(i["c"])(["isLoading","loadingID","cart","products"])),created:function(){this.getProducts()},mounted:function(){s()(document.querySelector("#map"))},methods:l(l({getProducts:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("getProducts",A)},addCart:function(A){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addCart",{id:A,qty:t})},openModel:function(){$("#mallModel").modal("show")}},Object(i["b"])(["getCarts"])),{},{userCoupon:function(){this.$store.dispatch("userCoupon",this.coupon)},removeCart:function(A){this.$store.dispatch("removeCart",A)},nextCustomer:function(){$("#mallModel").modal("hide"),this.$router.push("/customer")}})},d=u,f=(e("766b"),e("2877")),p=Object(f["a"])(d,n,a,!1,null,"b60134a0",null);t["a"]=p.exports},"85f2":function(A,t,e){A.exports=e("454f")},"8e6e":function(A,t,e){var n=e("5ca1"),a=e("990b"),r=e("6821"),i=e("11e9"),o=e("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(A){var t,e,n=r(A),s=i.f,c=a(n),l={},u=0;while(c.length>u)e=s(n,t=c[u++]),void 0!==e&&o(l,t,e);return l}})},"990b":function(A,t,e){var n=e("9093"),a=e("2621"),r=e("cb7c"),i=e("7726").Reflect;A.exports=i&&i.ownKeys||function(A){var t=n.f(r(A)),e=a.f;return e?t.concat(e(A)):t}},bd86:function(A,t,e){"use strict";e.d(t,"a",function(){return r});var n=e("85f2"),a=e.n(n);function r(A,t,e){return t in A?a()(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}},f1ae:function(A,t,e){"use strict";var n=e("86cc"),a=e("4630");A.exports=function(A,t,e){t in A?n.f(A,t,a(0,e)):A[t]=e}}}]);
//# sourceMappingURL=chunk-5accb849.a5a7e736.js.map