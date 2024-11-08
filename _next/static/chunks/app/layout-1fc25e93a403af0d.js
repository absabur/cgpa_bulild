(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{499:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,5326,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,3067))},6611:function(e,t,r){"use strict";e.exports=r(9060)},3404:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=n.useSyncExternalStore,a=n.useRef,c=n.useEffect,s=n.useMemo,i=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,l){var f=a(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var d=u(e,(f=s(function(){function e(e){if(!c){if(c=!0,u=e,e=n(e),void 0!==l&&p.hasValue){var t=p.value;if(l(t,e))return a=t}return a=e}if(t=a,o(u,e))return t;var r=n(e);return void 0!==l&&l(t,r)?t:(u=e,a=r)}var u,a,c=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,n,l]))[0],f[1]);return c(function(){p.hasValue=!0,p.value=d},[d]),i(d),d}},7183:function(e,t,r){"use strict";e.exports=r(3404)},3067:function(e,t,r){"use strict";r.d(t,{StoreProvider:function(){return a}});var n=r(7437);let{Provider:o}=r(6611),{store:u}=r(3121),a=e=>{let{children:t}=e;return(0,n.jsx)(o,{store:u,children:t})}},3121:function(e,t,r){"use strict";function n(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}r.r(t),r.d(t,{store:function(){return s}});var o="function"==typeof Symbol&&Symbol.observable||"@@observable",u=()=>Math.random().toString(36).substring(7).split("").join("."),a={INIT:`@@redux/INIT${u()}`,REPLACE:`@@redux/REPLACE${u()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${u()}`};let c={subjectsFirst:[],subjectsSecond:[],subjectsThird:[],subjectsFourth:[],gpaFirst:0,gpaSecond:0,gpaThird:0,gpaFourth:0,cgpa:0,current:null,name:"Enter Your Name",fname:"Enter Father's Name",mname:"Enter Mother's Name",roll:"Enter Roll",reg:"Enter Registration",session:"Enter Session"},s=function e(t,r,u){if("function"!=typeof t)throw Error(n(2));if("function"==typeof r&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw Error(n(0));if("function"==typeof r&&void 0===u&&(u=r,r=void 0),void 0!==u){if("function"!=typeof u)throw Error(n(1));return u(e)(t,r)}let c=t,s=r,i=new Map,l=i,f=0,p=!1;function d(){l===i&&(l=new Map,i.forEach((e,t)=>{l.set(t,e)}))}function y(){if(p)throw Error(n(3));return s}function b(e){if("function"!=typeof e)throw Error(n(4));if(p)throw Error(n(5));let t=!0;d();let r=f++;return l.set(r,e),function(){if(t){if(p)throw Error(n(6));t=!1,d(),l.delete(r),i=null}}}function m(e){if(!function(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}(e))throw Error(n(7));if(void 0===e.type)throw Error(n(8));if("string"!=typeof e.type)throw Error(n(17));if(p)throw Error(n(9));try{p=!0,s=c(s,e)}finally{p=!1}return(i=l).forEach(e=>{e()}),e}return m({type:a.INIT}),{dispatch:m,subscribe:b,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw Error(n(10));c=e,m({type:a.REPLACE})},[o]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(n(11));function t(){e.next&&e.next(y())}return t(),{unsubscribe:b(t)}},[o](){return this}}}}}(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT":return{...e,current:t.payload};case"SET_FIRST_GPA":return{...e,gpaFirst:t.payload};case"SET_SECOND_GPA":return{...e,gpaSecond:t.payload};case"SET_THIRD_GPA":return{...e,gpaThird:t.payload};case"SET_FOURTH_GPA":return{...e,gpaFourth:t.payload};case"SUBJECT_FIRST":return{...e,subjectsFirst:t.payload};case"SUBJECT_SECOND":return{...e,subjectsSecond:t.payload};case"SUBJECT_THIRD":return{...e,subjectsThird:t.payload};case"SUBJECT_FOURTH":return{...e,subjectsFourth:t.payload};case"SET_NAME":return{...e,name:t.payload};case"SET_F_NAME":return{...e,fname:t.payload};case"SET_M_NAME":return{...e,mname:t.payload};case"SET_ROLL":return{...e,roll:t.payload};case"SET_REG":return{...e,reg:t.payload};case"SET_SESSION":return{...e,session:t.payload};default:return e}})},3054:function(){},5326:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},9060:function(e,t,r){"use strict";var n=Object.create,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let c of a(t))s.call(e,c)||c===r||o(e,c,{get:()=>t[c],enumerable:!(n=u(t,c))||n.enumerable});return e},l=(e,t,r)=>(r=null!=e?n(c(e)):{},i(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),f={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(f,{Provider:()=>ed,ReactReduxContext:()=>h,batch:()=>eh,connect:()=>ep,createDispatchHook:()=>em,createSelectorHook:()=>w,createStoreHook:()=>ey,shallowEqual:()=>Y,useDispatch:()=>eS,useSelector:()=>T,useStore:()=>eb}),e.exports=i(o({},"__esModule",{value:!0}),f);var p=l(r(2265)),d=r(7183),y=l(r(2265)),b="default"in y?y.default:y,m=Symbol.for("react-redux-context"),S="u">typeof globalThis?globalThis:{},h=function(){if(!b.createContext)return{};let e=S[m]??(S[m]=new Map),t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}(),v=()=>{throw Error("uSES not initialized!")};function g(e=h){return function(){return b.useContext(e)}}var E=g(),O=v,P=(e,t)=>e===t;function w(e=h){let t=e===h?E:g(e),r=(e,r={})=>{let{equalityFn:n=P,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:c,stabilityCheck:s,identityFunctionCheck:i}=t(),l=(b.useRef(!0),b.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,o.stabilityCheck])),f=O(a.addNestedSub,u.getState,c||u.getState,l,n);return b.useDebugValue(f),f};return Object.assign(r,{withTypes:()=>r}),r}var T=w(),_=Symbol.for("react.element"),N=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),M=Symbol.for("react.context"),F=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy");function A(e){return function(t){let r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function U(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}function H(e,t){return function(t,{displayName:r}){let n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=U(e);let o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=U(o),o=n(t,r)),o},n}}function W(e,t){return(r,n)=>{throw Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function L(e,t,r){return{...r,...e,...t}}Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var B={notify(){},get:()=>[]};function G(e,t){let r,n=B,o=0,u=!1;function a(){i.onStateChange&&i.onStateChange()}function c(){let u,c;o++,r||(r=t?t.addNestedSub(a):e.subscribe(a),u=null,c=null,n={clear(){u=null,c=null},notify(){(()=>{let e=u;for(;e;)e.callback(),e=e.next})()},get(){let e=[],t=u;for(;t;)e.push(t),t=t.next;return e},subscribe(e){let t=!0,r=c={callback:e,next:null,prev:c};return r.prev?r.prev.next=r:u=r,function(){t&&null!==u&&(t=!1,r.next?r.next.prev=r.prev:c=r.prev,r.prev?r.prev.next=r.next:u=r.next)}}})}function s(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=B)}let i={addNestedSub:function(e){c();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),s())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:a,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,c())},tryUnsubscribe:function(){u&&(u=!1,s())},getListeners:()=>n};return i}var V="u">typeof window&&"u">typeof window.document&&"u">typeof window.document.createElement,J="u">typeof navigator&&"ReactNative"===navigator.product,z=V||J?b.useLayoutEffect:b.useEffect;function K(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function Y(e,t){if(K(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!K(e[r[n]],t[r[n]]))return!1;return!0}var Q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ee={[k]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[I]:Z};function et(e){return function(e){if("object"==typeof e&&null!==e){let t=e.$$typeof;switch(t){case _:{let r=e.type;switch(r){case C:case j:case x:case $:case D:return r;default:{let e=r&&r.$$typeof;switch(e){case F:case M:case k:case q:case I:case R:return e;default:return t}}}}case N:return t}}}(e)===I?Z:ee[e.$$typeof]||Q}var er=Object.defineProperty,en=Object.getOwnPropertyNames,eo=Object.getOwnPropertySymbols,eu=Object.getOwnPropertyDescriptor,ea=Object.getPrototypeOf,ec=Object.prototype;function es(e,t){if("string"!=typeof t){if(ec){let r=ea(t);r&&r!==ec&&es(e,r)}let r=en(t);eo&&(r=r.concat(eo(t)));let n=et(e),o=et(t);for(let u=0;u<r.length;++u){let a=r[u];if(!X[a]&&!(o&&o[a])&&!(n&&n[a])){let r=eu(t,a);try{er(e,a,r)}catch{}}}}return e}var ei=v,el=[null,null];function ef(e,t){return e===t}var ep=function(e,t,r,{pure:n,areStatesEqual:o=ef,areOwnPropsEqual:u=Y,areStatePropsEqual:a=Y,areMergedPropsEqual:c=Y,forwardRef:s=!1,context:i=h}={}){let l=e?"function"==typeof e?H(e,"mapStateToProps"):W(e,"mapStateToProps"):A(()=>({})),f=t&&"object"==typeof t?A(e=>(function(e,t){let r={};for(let n in e){let o=e[n];"function"==typeof o&&(r[n]=(...e)=>t(o(...e)))}return r})(t,e)):t?"function"==typeof t?H(t,"mapDispatchToProps"):W(t,"mapDispatchToProps"):A(e=>({dispatch:e})),p=r?"function"==typeof r?function(e,{displayName:t,areMergedPropsEqual:n}){let o=!1,u;return function(e,t,a){let c=r(e,t,a);return o?n(c,u)||(u=c):(o=!0,u=c),u}}:W(r,"mergeProps"):()=>L,d=!!e;return e=>{let t=e.displayName||e.name||"Component",r=`Connect(${t})`,n={shouldHandleStateChanges:d,displayName:r,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:l,initMapDispatchToProps:f,initMergeProps:p,areStatesEqual:o,areStatePropsEqual:a,areOwnPropsEqual:u,areMergedPropsEqual:c};function y(t){var r;let o,[u,a,c]=b.useMemo(()=>{let{reactReduxForwardedRef:e,...r}=t;return[t.context,e,r]},[t]),s=b.useMemo(()=>(u?.Consumer,i),[u,i]),l=b.useContext(s),f=!!t.store&&!!t.store.getState&&!!t.store.dispatch,p=!!l&&!!l.store,y=f?t.store:l.store,m=p?l.getServerState:y.getState,S=b.useMemo(()=>(function(e,{initMapStateToProps:t,initMapDispatchToProps:r,initMergeProps:n,...o}){return function(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:a}){let c=!1,s,i,l,f,p;return function(d,y){let b,m,S,h;return c?(b=!u(y,i),m=!o(d,s,y,i),s=d,i=y,b&&m?(l=e(s,i),t.dependsOnOwnProps&&(f=t(n,i)),p=r(l,f,i)):b?(e.dependsOnOwnProps&&(l=e(s,i)),t.dependsOnOwnProps&&(f=t(n,i)),p=r(l,f,i)):(m&&(h=!a(S=e(s,i),l),l=S,h&&(p=r(l,f,i))),p)):(l=e(s=d,i=y),f=t(n,i),p=r(l,f,i),c=!0,p)}}(t(e,o),r(e,o),n(e,o),e,o)})(y.dispatch,n),[y]),[h,v]=b.useMemo(()=>{if(!d)return el;let e=G(y,f?void 0:l.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[y,f,l]),g=b.useMemo(()=>f?l:{...l,subscription:h},[f,l,h]),E=b.useRef(void 0),O=b.useRef(c),P=b.useRef(void 0),w=b.useRef(!1),T=b.useRef(!1),_=b.useRef(void 0);z(()=>(T.current=!0,()=>{T.current=!1}),[]);let N=b.useMemo(()=>()=>P.current&&c===O.current?P.current:S(y.getState(),c),[y,c]),C=b.useMemo(()=>e=>h?function(e,t,r,n,o,u,a,c,s,i,l){if(!e)return()=>{};let f=!1,p=null,d=()=>{if(f||!c.current)return;let e=t.getState(),r,d;try{r=n(e,o.current)}catch(e){d=e,p=e}d||(p=null),r===u.current?a.current||i():(u.current=r,s.current=r,a.current=!0,l())};return r.onStateChange=d,r.trySubscribe(),d(),()=>{if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}(d,y,h,S,O,E,w,T,P,v,e):()=>{},[h]);r=[O,E,w,c,P,v],z(()=>(function(e,t,r,n,o,u){e.current=n,r.current=!1,o.current&&(o.current=null,u())})(...r),void 0);try{o=ei(C,N,m?()=>S(m(),c):N)}catch(e){throw _.current&&(e.message+=`
The error may be correlated with this previous error:
${_.current.stack}

`),e}z(()=>{_.current=void 0,P.current=void 0,E.current=o});let x=b.useMemo(()=>b.createElement(e,{...o,ref:a}),[a,e,o]);return b.useMemo(()=>d?b.createElement(s.Provider,{value:g},x):x,[s,x,g])}let m=b.memo(y);if(m.WrappedComponent=e,m.displayName=y.displayName=r,s){let t=b.forwardRef(function(e,t){return b.createElement(m,{...e,reactReduxForwardedRef:t})});return t.displayName=r,t.WrappedComponent=e,es(t,e)}return es(m,e)}},ed=function({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:u="once"}){let a=b.useMemo(()=>{let t=G(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:u}},[e,n,o,u]),c=b.useMemo(()=>e.getState(),[e]);return z(()=>{let{subscription:t}=a;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),c!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[a,c]),b.createElement((t||h).Provider,{value:a},r)};function ey(e=h){let t=e===h?E:g(e),r=()=>{let{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var eb=ey();function em(e=h){let t=e===h?eb:ey(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var eS=em(),eh=function(e){e()};O=d.useSyncExternalStoreWithSelector,ei=p.useSyncExternalStore}},function(e){e.O(0,[370,231,971,190,744],function(){return e(e.s=499)}),_N_E=e.O()}]);