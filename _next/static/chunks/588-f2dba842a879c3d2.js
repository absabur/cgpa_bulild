(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return a},isEqualNode:function(){return u}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let u=n[e]||e.toLowerCase();"script"===t&&("async"===u||"defer"===u||"noModule"===u)?o[u]=!!r[e]:o.setAttribute(u,r[e])}let{children:u,dangerouslySetInnerHTML:a}=r;return a?o.innerHTML=a.__html||"":u&&(o.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):""),o}function u(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),a=Number(n.content),i=[];for(let t=0,r=n.previousElementSibling;t<a;t++,r=(null==r?void 0:r.previousElementSibling)||null){var c;(null==r?void 0:null==(c=r.tagName)?void 0:c.toLowerCase())===e&&i.push(r)}let l=t.map(o).filter(e=>{for(let t=0,r=i.length;t<r;t++)if(u(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>r.insertBefore(e,n)),n.content=(a-i.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return h}});let n=r(9920),o=r(1452),u=r(7437),a=n._(r(4887)),i=o._(r(2265)),c=r(6590),l=r(905),s=r(9189),f=new Map,p=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},b=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:u,children:a="",strategy:i="afterInteractive",onError:c,stylesheets:s}=e,b=r||t;if(b&&p.has(b))return;if(f.has(t)){p.add(b),f.get(t).then(n,c);return}let m=()=>{o&&o(),p.add(b)},h=document.createElement("script"),v=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[r,n]of(u?(h.innerHTML=u.__html||"",m()):a?(h.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",m()):t&&(h.src=t,f.set(t,v)),Object.entries(e))){if(void 0===n||d.includes(r))continue;let e=l.DOMAttributeNames[r]||r.toLowerCase();h.setAttribute(e,n)}"worker"===i&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",i),s&&y(s),document.body.appendChild(h)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>b(e))}):b(e)}function h(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function v(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:f,stylesheets:d,...y}=e,{updateScripts:m,scripts:h,getIsSsr:v,appDir:g,nonce:S}=(0,i.useContext)(c.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;E.current||(o&&e&&p.has(e)&&o(),E.current=!0)},[o,t,r]);let O=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!O.current&&("afterInteractive"===l?b(e):"lazyOnload"===l&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>b(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>b(e))})),O.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(m?(h[l]=(h[l]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:f,...y}]),m(h)):v&&v()?p.add(t||r):v&&!v()&&b(e)),g){if(d&&d.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return r?(a.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:S}:{as:"script",nonce:S}),(0,u.jsx)("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,u.jsx)("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===l&&r&&a.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:S}:{as:"script",nonce:S})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6611:function(e,t,r){"use strict";e.exports=r(9060)},3404:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=n.useSyncExternalStore,a=n.useRef,i=n.useEffect,c=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var f=a(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var d=u(e,(f=c(function(){function e(e){if(!i){if(i=!0,u=e,e=n(e),void 0!==s&&p.hasValue){var t=p.value;if(s(t,e))return a=t}return a=e}if(t=a,o(u,e))return t;var r=n(e);return void 0!==s&&s(t,r)?t:(u=e,a=r)}var u,a,i=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,s]))[0],f[1]);return i(function(){p.hasValue=!0,p.value=d},[d]),l(d),d}},7183:function(e,t,r){"use strict";e.exports=r(3404)},5326:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},9060:function(e,t,r){"use strict";var n=Object.create,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,l=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))c.call(e,i)||i===r||o(e,i,{get:()=>t[i],enumerable:!(n=u(t,i))||n.enumerable});return e},s=(e,t,r)=>(r=null!=e?n(i(e)):{},l(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),f={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(f,{Provider:()=>ed,ReactReduxContext:()=>v,batch:()=>ev,connect:()=>ep,createDispatchHook:()=>em,createSelectorHook:()=>P,createStoreHook:()=>ey,shallowEqual:()=>Q,useDispatch:()=>eh,useSelector:()=>_,useStore:()=>eb}),e.exports=l(o({},"__esModule",{value:!0}),f);var p=s(r(2265)),d=r(7183),y=s(r(2265)),b="default"in y?y.default:y,m=Symbol.for("react-redux-context"),h="u">typeof globalThis?globalThis:{},v=function(){if(!b.createContext)return{};let e=h[m]??(h[m]=new Map),t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}(),g=()=>{throw Error("uSES not initialized!")};function S(e=v){return function(){return b.useContext(e)}}var E=S(),O=g,w=(e,t)=>e===t;function P(e=v){let t=e===v?E:S(e),r=(e,r={})=>{let{equalityFn:n=w,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:i,stabilityCheck:c,identityFunctionCheck:l}=t(),s=(b.useRef(!0),b.useCallback({[e.name]:t=>e(t)}[e.name],[e,c,o.stabilityCheck])),f=O(a.addNestedSub,u.getState,i||u.getState,s,n);return b.useDebugValue(f),f};return Object.assign(r,{withTypes:()=>r}),r}var _=P(),x=Symbol.for("react.element"),C=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),k=Symbol.for("react.context"),I=Symbol.for("react.server_context"),R=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),$=Symbol.for("react.lazy");function H(e){return function(t){let r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function D(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}function F(e,t){return function(t,{displayName:r}){let n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=D(e);let o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=D(o),o=n(t,r)),o},n}}function W(e,t){return(r,n)=>{throw Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function z(e,t,r){return{...r,...e,...t}}Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var U={notify(){},get:()=>[]};function V(e,t){let r,n=U,o=0,u=!1;function a(){l.onStateChange&&l.onStateChange()}function i(){let u,i;o++,r||(r=t?t.addNestedSub(a):e.subscribe(a),u=null,i=null,n={clear(){u=null,i=null},notify(){(()=>{let e=u;for(;e;)e.callback(),e=e.next})()},get(){let e=[],t=u;for(;t;)e.push(t),t=t.next;return e},subscribe(e){let t=!0,r=i={callback:e,next:null,prev:i};return r.prev?r.prev.next=r:u=r,function(){t&&null!==u&&(t=!1,r.next?r.next.prev=r.prev:i=r.prev,r.prev?r.prev.next=r.next:u=r.next)}}})}function c(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=U)}let l={addNestedSub:function(e){i();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),c())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:a,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,i())},tryUnsubscribe:function(){u&&(u=!1,c())},getListeners:()=>n};return l}var B="u">typeof window&&"u">typeof window.document&&"u">typeof window.document.createElement,J="u">typeof navigator&&"ReactNative"===navigator.product,K=B||J?b.useLayoutEffect:b.useEffect;function G(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function Q(e,t){if(G(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!G(e[r[n]],t[r[n]]))return!1;return!0}var X={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ee={[R]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[A]:Z};function et(e){return function(e){if("object"==typeof e&&null!==e){let t=e.$$typeof;switch(t){case x:{let r=e.type;switch(r){case M:case N:case j:case q:case L:return r;default:{let e=r&&r.$$typeof;switch(e){case I:case k:case R:case $:case A:case T:return e;default:return t}}}}case C:return t}}}(e)===A?Z:ee[e.$$typeof]||X}var er=Object.defineProperty,en=Object.getOwnPropertyNames,eo=Object.getOwnPropertySymbols,eu=Object.getOwnPropertyDescriptor,ea=Object.getPrototypeOf,ei=Object.prototype;function ec(e,t){if("string"!=typeof t){if(ei){let r=ea(t);r&&r!==ei&&ec(e,r)}let r=en(t);eo&&(r=r.concat(eo(t)));let n=et(e),o=et(t);for(let u=0;u<r.length;++u){let a=r[u];if(!Y[a]&&!(o&&o[a])&&!(n&&n[a])){let r=eu(t,a);try{er(e,a,r)}catch{}}}}return e}var el=g,es=[null,null];function ef(e,t){return e===t}var ep=function(e,t,r,{pure:n,areStatesEqual:o=ef,areOwnPropsEqual:u=Q,areStatePropsEqual:a=Q,areMergedPropsEqual:i=Q,forwardRef:c=!1,context:l=v}={}){let s=e?"function"==typeof e?F(e,"mapStateToProps"):W(e,"mapStateToProps"):H(()=>({})),f=t&&"object"==typeof t?H(e=>(function(e,t){let r={};for(let n in e){let o=e[n];"function"==typeof o&&(r[n]=(...e)=>t(o(...e)))}return r})(t,e)):t?"function"==typeof t?F(t,"mapDispatchToProps"):W(t,"mapDispatchToProps"):H(e=>({dispatch:e})),p=r?"function"==typeof r?function(e,{displayName:t,areMergedPropsEqual:n}){let o=!1,u;return function(e,t,a){let i=r(e,t,a);return o?n(i,u)||(u=i):(o=!0,u=i),u}}:W(r,"mergeProps"):()=>z,d=!!e;return e=>{let t=e.displayName||e.name||"Component",r=`Connect(${t})`,n={shouldHandleStateChanges:d,displayName:r,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:s,initMapDispatchToProps:f,initMergeProps:p,areStatesEqual:o,areStatePropsEqual:a,areOwnPropsEqual:u,areMergedPropsEqual:i};function y(t){var r;let o,[u,a,i]=b.useMemo(()=>{let{reactReduxForwardedRef:e,...r}=t;return[t.context,e,r]},[t]),c=b.useMemo(()=>(u?.Consumer,l),[u,l]),s=b.useContext(c),f=!!t.store&&!!t.store.getState&&!!t.store.dispatch,p=!!s&&!!s.store,y=f?t.store:s.store,m=p?s.getServerState:y.getState,h=b.useMemo(()=>(function(e,{initMapStateToProps:t,initMapDispatchToProps:r,initMergeProps:n,...o}){return function(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:a}){let i=!1,c,l,s,f,p;return function(d,y){let b,m,h,v;return i?(b=!u(y,l),m=!o(d,c,y,l),c=d,l=y,b&&m?(s=e(c,l),t.dependsOnOwnProps&&(f=t(n,l)),p=r(s,f,l)):b?(e.dependsOnOwnProps&&(s=e(c,l)),t.dependsOnOwnProps&&(f=t(n,l)),p=r(s,f,l)):(m&&(v=!a(h=e(c,l),s),s=h,v&&(p=r(s,f,l))),p)):(s=e(c=d,l=y),f=t(n,l),p=r(s,f,l),i=!0,p)}}(t(e,o),r(e,o),n(e,o),e,o)})(y.dispatch,n),[y]),[v,g]=b.useMemo(()=>{if(!d)return es;let e=V(y,f?void 0:s.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[y,f,s]),S=b.useMemo(()=>f?s:{...s,subscription:v},[f,s,v]),E=b.useRef(void 0),O=b.useRef(i),w=b.useRef(void 0),P=b.useRef(!1),_=b.useRef(!1),x=b.useRef(void 0);K(()=>(_.current=!0,()=>{_.current=!1}),[]);let C=b.useMemo(()=>()=>w.current&&i===O.current?w.current:h(y.getState(),i),[y,i]),M=b.useMemo(()=>e=>v?function(e,t,r,n,o,u,a,i,c,l,s){if(!e)return()=>{};let f=!1,p=null,d=()=>{if(f||!i.current)return;let e=t.getState(),r,d;try{r=n(e,o.current)}catch(e){d=e,p=e}d||(p=null),r===u.current?a.current||l():(u.current=r,c.current=r,a.current=!0,s())};return r.onStateChange=d,r.trySubscribe(),d(),()=>{if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}(d,y,v,h,O,E,P,_,w,g,e):()=>{},[v]);r=[O,E,P,i,w,g],K(()=>(function(e,t,r,n,o,u){e.current=n,r.current=!1,o.current&&(o.current=null,u())})(...r),void 0);try{o=el(M,C,m?()=>h(m(),i):C)}catch(e){throw x.current&&(e.message+=`
The error may be correlated with this previous error:
${x.current.stack}

`),e}K(()=>{x.current=void 0,w.current=void 0,E.current=o});let j=b.useMemo(()=>b.createElement(e,{...o,ref:a}),[a,e,o]);return b.useMemo(()=>d?b.createElement(c.Provider,{value:S},j):j,[c,j,S])}let m=b.memo(y);if(m.WrappedComponent=e,m.displayName=y.displayName=r,c){let t=b.forwardRef(function(e,t){return b.createElement(m,{...e,reactReduxForwardedRef:t})});return t.displayName=r,t.WrappedComponent=e,ec(t,e)}return ec(m,e)}},ed=function({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:u="once"}){let a=b.useMemo(()=>{let t=V(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:u}},[e,n,o,u]),i=b.useMemo(()=>e.getState(),[e]);return K(()=>{let{subscription:t}=a;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[a,i]),b.createElement((t||v).Provider,{value:a},r)};function ey(e=v){let t=e===v?E:S(e),r=()=>{let{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var eb=ey();function em(e=v){let t=e===v?eb:ey(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var eh=em(),ev=function(e){e()};O=d.useSyncExternalStoreWithSelector,el=p.useSyncExternalStore},6804:function(e,t,r){"use strict";function n(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}r.d(t,{MT:function(){return i}});var o="function"==typeof Symbol&&Symbol.observable||"@@observable",u=()=>Math.random().toString(36).substring(7).split("").join("."),a={INIT:`@@redux/INIT${u()}`,REPLACE:`@@redux/REPLACE${u()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${u()}`};function i(e,t,r){if("function"!=typeof e)throw Error(n(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw Error(n(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw Error(n(1));return r(i)(e,t)}let u=e,c=t,l=new Map,s=l,f=0,p=!1;function d(){s===l&&(s=new Map,l.forEach((e,t)=>{s.set(t,e)}))}function y(){if(p)throw Error(n(3));return c}function b(e){if("function"!=typeof e)throw Error(n(4));if(p)throw Error(n(5));let t=!0;d();let r=f++;return s.set(r,e),function(){if(t){if(p)throw Error(n(6));t=!1,d(),s.delete(r),l=null}}}function m(e){if(!function(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}(e))throw Error(n(7));if(void 0===e.type)throw Error(n(8));if("string"!=typeof e.type)throw Error(n(17));if(p)throw Error(n(9));try{p=!0,c=u(c,e)}finally{p=!1}return(l=s).forEach(e=>{e()}),e}return m({type:a.INIT}),{dispatch:m,subscribe:b,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw Error(n(10));u=e,m({type:a.REPLACE})},[o]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(n(11));function t(){e.next&&e.next(y())}return t(),{unsubscribe:b(t)}},[o](){return this}}}}}}}]);