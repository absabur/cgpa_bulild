(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{7752:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,9816)),Promise.resolve().then(r.bind(r,6313)),Promise.resolve().then(r.bind(r,239)),Promise.resolve().then(r.t.bind(r,9033,23))},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},6313:function(e,t,r){"use strict";var n=r(7437),o=r(2265),i=r(6463);t.default=e=>{let{slot:t=7469023022}=e,r=(0,i.usePathname)(),a=(0,i.useSearchParams)(),[s,c]=(0,o.useState)(0),l=()=>{c(new Date().getTime())};return(0,o.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[r,a,s]),(0,n.jsx)("ins",{className:"adsbygoogle",style:{display:"block",height:7469023022==t?"100px":"",margin:"10px 0"},"data-ad-client":"ca-pub-7695470547692086","data-ad-slot":t,"data-ad-format":"auto","data-full-width-responsive":"true"})}},239:function(e,t,r){"use strict";var n=r(7437);r(4475);var o=r(7138),i=r(2265),a=r(3872),s=r(5027);t.default=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>t(!1),r=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",r),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",r)}},[]),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:r=>{r.stopPropagation(),t(!e)},children:e?(0,n.jsx)(s.HsN,{size:30}):(0,n.jsx)(a.EgE,{size:30})}),(0,n.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,n.jsx)(o.default,{href:"/",children:"Home"}),(0,n.jsx)(o.default,{href:"/departments",children:"Departments"}),(0,n.jsx)(o.default,{href:"/about",children:"About"}),(0,n.jsx)(o.default,{href:"/contact",children:"Contact"}),(0,n.jsx)(o.default,{href:"/guide-line",children:"How to use?"})]})]})}},9033:function(){},4475:function(){},9816:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/favicon.3ed3dc2a.ico",height:1745,width:1200,blurWidth:0,blurHeight:0}},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[840,505,240,231,971,190,744],function(){return e(e.s=7752)}),_N_E=e.O()}]);