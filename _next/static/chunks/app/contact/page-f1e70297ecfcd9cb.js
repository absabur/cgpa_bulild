(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2247:function(e,t,n){Promise.resolve().then(n.bind(n,9804))},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var a=n(231),o=n.n(a)},1364:function(e,t,n){"use strict";var a=n(7437),o=n(2265);t.default=()=>((0,o.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}},[]),(0,a.jsxs)("div",{style:{width:"100%",backgroundColor:"rgba(0,0,0,0.2)",marginBottom:"10px"},children:[(0,a.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7695470547692086",crossOrigin:"anonymous"}),(0,a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7695470547692086","data-ad-slot":"6428070373","data-ad-format":"auto","data-full-width-responsive":"true"})]}))},239:function(e,t,n){"use strict";var a=n(7437);n(4475);var o=n(7138),r=n(2265),s=n(3872),i=n(5027);t.default=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>t(!1),n=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",n),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",n)}},[]),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:n=>{n.stopPropagation(),t(!e)},children:e?(0,a.jsx)(i.HsN,{size:30}):(0,a.jsx)(s.EgE,{size:30})}),(0,a.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,a.jsx)(o.default,{href:"/",children:"Home"}),(0,a.jsx)(o.default,{href:"/departments",children:"Departments"}),(0,a.jsx)(o.default,{href:"/about",children:"About"}),(0,a.jsx)(o.default,{href:"/contact",children:"Contact"}),(0,a.jsx)(o.default,{href:"/guide-line",children:"How to use?"})]})]})}},9804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(7437),o=n(2265),r=function(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var r=t.length;for(n=0;n<r;n++)t[n]&&(a=e(t[n]))&&(o&&(o+=" "),o+=a)}else for(a in t)t[a]&&(o&&(o+=" "),o+=a)}return o}(e))&&(a&&(a+=" "),a+=t);return a};let s=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,l=e=>"function"==typeof e,c=e=>i(e)||l(e)?e:null,u=e=>(0,o.isValidElement)(e)||i(e)||l(e)||s(e);function d(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:s=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p,playToast:f}=e,m=a?"".concat(t,"--").concat(l):t,g=a?"".concat(n,"--").concat(l):n,v=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=a=>{a.target===d.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),r?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:a,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}(e,u,s):u()};p||(c?t():(v.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,i)}}function p(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let f=new Map,m=[],g=new Set,v=e=>g.forEach(t=>t(e)),h=()=>f.size>0;function y(e,t){var n;if(t)return!(null==(n=f.get(t))||!n.isToastActive(e));let a=!1;return f.forEach(t=>{t.isToastActive(e)&&(a=!0)}),a}function b(e,t){u(e)&&(h()||m.push({content:e,options:t}),f.forEach(n=>{n.buildToast(e,t)}))}function E(e,t){f.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function T(e){let{delay:t,isRunning:n,closeToast:a,type:s="default",hide:i,className:c,style:u,controlledProgress:d,progress:p,rtl:f,isIn:m,theme:g}=e,v=i||d&&0===p,h={...u,animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused"};d&&(h.transform="scaleX(".concat(p,")"));let y=r("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":f}),b=l(c)?c({rtl:f,type:s,defaultClassName:y}):r(y,c);return o.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},o.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(g," Toastify__progress-bar--").concat(s)}),o.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:b,style:h,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{m&&a()}}))}let C=1,w=()=>""+C++;function O(e,t){return b(e,t),t.toastId}function j(e,t){return{...t,type:t&&t.type||e,toastId:t&&(i(t.toastId)||s(t.toastId))?t.toastId:w()}}function N(e){return(t,n)=>O(t,j(e,n))}function x(e,t){return O(e,j("default",t))}x.loading=(e,t)=>O(e,j("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),x.promise=function(e,t,n){let a,{pending:o,error:r,success:s}=t;o&&(a=i(o)?x.loading(o,n):x.loading(o.render,{...n,...o}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,o)=>{if(null==t)return void x.dismiss(a);let r={type:e,...c,...n,data:o},s=i(t)?{render:t}:t;return a?x.update(a,{...r,...s}):x(s.render,{...r,...s}),o},d=l(e)?e():e;return d.then(e=>u("success",s,e)).catch(e=>u("error",r,e)),d},x.success=N("success"),x.info=N("info"),x.error=N("error"),x.warning=N("warning"),x.warn=x.warning,x.dark=(e,t)=>O(e,j("default",{theme:"dark",...t})),x.dismiss=function(e){!function(e){var t;if(h()){if(null==e||i(t=e)||s(t))f.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=f.get(e.containerId);t?t.removeToast(e.id):f.forEach(t=>{t.removeToast(e.id)})}}else m=m.filter(t=>null!=e&&t.options.toastId!==e)}(e)},x.clearWaitingQueue=function(e){void 0===e&&(e={}),f.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},x.isActive=y,x.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:a}=t;return null==(n=f.get(a||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:a,content:o}=n,r={delay:100,...a,...t,toastId:t.toastId||e,updateId:w()};r.toastId!==e&&(r.staleId=e);let s=r.render||o;delete r.render,O(s,r)}},x.done=e=>{x.update(e,{progress:1})},x.onChange=function(e){return g.add(e),()=>{g.delete(e)}},x.play=e=>E(!0,e),x.pause=e=>E(!1,e);let _="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,I=e=>{let{theme:t,type:n,isLoading:a,...r}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")"),...r})},P={info:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}},k=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:s,playToast:i}=function(e){var t,n;let[a,r]=(0,o.useState)(!1),[s,i]=(0,o.useState)(!1),l=(0,o.useRef)(null),c=(0,o.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:g}=e;function v(){r(!0)}function h(){r(!1)}function y(t){let n=l.current;c.canDrag&&n&&(c.didMove=!0,a&&h(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),n.style.transform="translate3d(".concat("x"===e.draggableDirection?"".concat(c.delta,"px, var(--y)"):"0, calc(".concat(c.delta,"px + var(--y))"),",0)"),n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",b);let t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=f.get((t={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))||n.setToggle(t.id,t.fn),(0,o.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",v),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",h)}},[e.pauseOnFocusLoss]);let E={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",y),document.addEventListener("pointerup",b);let n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:a,left:o,right:r}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=o&&t.clientX<=r&&t.clientY>=n&&t.clientY<=a?h():v()}};return u&&d&&(E.onMouseEnter=h,e.stacked||(E.onMouseLeave=v)),g&&(E.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:v,pauseToast:h,isRunning:a,preventExitTransition:s,toastRef:l,eventHandlers:E}}(e),{closeButton:c,children:u,autoClose:d,onClick:p,type:m,hideProgressBar:g,closeToast:v,transition:h,position:y,className:b,style:E,bodyClassName:C,bodyStyle:w,progressClassName:O,progressStyle:j,updateId:N,role:x,progress:_,rtl:I,toastId:k,deleteToast:L,isIn:S,isLoading:A,closeOnClick:B,theme:D}=e,M=r("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":B}),z=l(b)?b({rtl:I,position:y,type:m,defaultClassName:M}):r(M,b),H=function(e){let{theme:t,type:n,isLoading:a,icon:r}=e,s=null,i={theme:t,type:n};return!1===r||(l(r)?s=r({...i,isLoading:a}):(0,o.isValidElement)(r)?s=(0,o.cloneElement)(r,i):a?s=P.spinner():n in P&&(s=P[n](i))),s}(e),R=!!_||!d,Y={closeToast:v,type:m,theme:D},W=null;return!1===c||(W=l(c)?c(Y):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,Y):function(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),o.createElement(h,{isIn:S,done:L,position:y,preventExitTransition:n,nodeRef:a,playToast:i},o.createElement("div",{id:k,onClick:p,"data-in":S,className:z,...s,style:E,ref:a},o.createElement("div",{...S&&{role:x},className:l(C)?C({type:m}):r("Toastify__toast-body",C),style:w},null!=H&&o.createElement("div",{className:r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},H),o.createElement("div",null,u)),W,o.createElement(T,{...N&&!R?{key:"pb-".concat(N)}:{},rtl:I,theme:D,delay:d,isRunning:t,isIn:S,closeToast:v,hide:g,type:m,style:j,className:O,controlledProgress:R,progress:_||0})))},L=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},S=d(L("bounce",!0)),A=(d(L("slide",!0)),d(L("zoom")),d(L("flip")),{position:"top-right",transition:S,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function B(e){let t={...A,...e},n=e.stacked,[a,d]=(0,o.useState)(!0),g=(0,o.useRef)(null),{getToastToRender:h,isToastActive:E,count:T}=function(e){let{subscribe:t,getSnapshot:n,setProps:a}=(0,o.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let a=function(e,t,n){let a=1,r=0,d=[],f=[],m=[],g=t,v=new Map,h=new Set,y=()=>{m=Array.from(v.values()),h.forEach(e=>e())},b=e=>{f=null==e?[]:f.filter(t=>t!==e),y()},E=e=>{let{toastId:t,onOpen:a,updateId:r,children:s}=e.props,i=null==r;e.staleId&&v.delete(e.staleId),v.set(t,e),f=[...f,e.props.toastId].filter(t=>t!==e.staleId),y(),n(p(e,i?"added":"updated")),i&&l(a)&&a((0,o.isValidElement)(s)&&s.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach(n=>{null!=t&&t!==n.props.toastId||l(n.toggle)&&n.toggle(e)})},removeToast:b,toasts:v,clearQueue:()=>{r-=d.length,d=[]},buildToast:(t,f)=>{var m,h;if((t=>{let{containerId:n,toastId:a,updateId:o}=t,r=v.has(a)&&null==o;return(n?n!==e:1!==e)||r})(f))return;let{toastId:T,updateId:C,data:w,staleId:O,delay:j}=f,N=()=>{b(T)},x=null==C;x&&r++;let _={...g,style:g.toastStyle,key:a++,...Object.fromEntries(Object.entries(f).filter(e=>{let[t,n]=e;return null!=n})),toastId:T,updateId:C,data:w,closeToast:N,isIn:!1,className:c(f.className||g.toastClassName),bodyClassName:c(f.bodyClassName||g.bodyClassName),progressClassName:c(f.progressClassName||g.progressClassName),autoClose:!f.isLoading&&(m=f.autoClose,h=g.autoClose,!1===m||s(m)&&m>0?m:h),deleteToast(){let e=v.get(T),{onClose:t,children:a}=e.props;l(t)&&t((0,o.isValidElement)(a)&&a.props),n(p(e,"removed")),v.delete(T),--r<0&&(r=0),d.length>0?E(d.shift()):y()}};_.closeButton=g.closeButton,!1===f.closeButton||u(f.closeButton)?_.closeButton=f.closeButton:!0===f.closeButton&&(_.closeButton=!u(g.closeButton)||g.closeButton);let I=t;(0,o.isValidElement)(t)&&!i(t.type)?I=(0,o.cloneElement)(t,{closeToast:N,toastProps:_,data:w}):l(t)&&(I=t({closeToast:N,toastProps:_,data:w}));let P={content:I,props:_,staleId:O};g.limit&&g.limit>0&&r>g.limit&&x?d.push(P):s(j)?setTimeout(()=>{E(P)},j):E(P)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>f.some(t=>t===e),getSnapshot:()=>m}}(t,e,v);f.set(t,a);let r=a.observe(n);return m.forEach(e=>b(e.content,e.options)),m=[],()=>{r(),f.delete(t)}},setProps(e){var n;null==(n=f.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=f.get(t))?void 0:e.getSnapshot()}}}(e)).current;a(e);let r=(0,o.useSyncExternalStore)(t,n,n);return{getToastToRender:function(t){if(!r)return[];let n=new Map;return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},isToastActive:y,count:null==r?void 0:r.length}}(t),{className:C,style:w,rtl:O,containerId:j}=t;function N(){n&&(d(!0),x.play())}return _(()=>{if(n){var e;let n=g.current.querySelectorAll('[data-in="true"]'),o=null==(e=t.position)?void 0:e.includes("top"),r=0,s=0;Array.from(n).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed="".concat(a)),e.dataset.pos||(e.dataset.pos=o?"top":"bot");let n=r*(a?.2:1)+(a?0:12*t);e.style.setProperty("--y","".concat(o?n:-1*n,"px")),e.style.setProperty("--g","".concat(12)),e.style.setProperty("--s",""+(1-(a?s:0))),r+=e.offsetHeight,s+=.025})}},[a,T,n]),o.createElement("div",{ref:g,className:"Toastify",id:j,onMouseEnter:()=>{n&&(d(!1),x.pause())},onMouseLeave:N},h((e,t)=>{let a=t.length?{...w}:{...w,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=r("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":O});return l(C)?C({position:e,rtl:O,defaultClassName:t}):r(t,c(C))}(e),style:a,key:"container-".concat(e)},t.map(e=>{let{content:t,props:a}=e;return o.createElement(k,{...a,stacked:n,collapseAll:N,isIn:E(a.toastId,a.containerId),style:a.style,key:"toast-".concat(a.key)},t)}))}))}n(4193),n(4911);var D=n(239),M=n(7138),z=n(9816),H=n(1364),R=()=>{let[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[s,i]=(0,o.useState)("");return(0,a.jsxs)("div",{className:"contact-body",children:[(0,a.jsx)("div",{className:"nav-parent",children:(0,a.jsxs)("div",{className:"search-bar",children:[(0,a.jsx)(M.default,{href:"/",children:(0,a.jsx)("img",{src:z.default.src,alt:"NU",height:40})}),(0,a.jsx)(D.default,{})]})}),(0,a.jsx)(H.default,{}),(0,a.jsxs)("form",{className:"contact-form",onSubmit:a=>{if(a.preventDefault(),""===e){x.warning("Enter Your Name",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}if(""===n){x.warning("Enter Your Email",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}if(""===s){x.warning("Write some message",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}(async(e,n,a)=>{let o=await fetch("https://abs-hotel-default-rtdb.firebaseio.com/contactmessageportfolio.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:n,message:a})});(await o.json()).name?(x.success("Thank you for contacting us.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),r(""),i(""),t("")):x.error("Somthing Went Wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})(e,n,s)},method:"POST",children:[(0,a.jsx)(B,{}),(0,a.jsx)("p",{className:"form-subtitle",children:"Any suggessions or Want to say something?"}),(0,a.jsxs)("div",{className:"input",children:[(0,a.jsx)("span",{className:"label ".concat(e?"label-active":""),children:"Enter Your Name"}),(0,a.jsx)("input",{type:"text",name:"name",placeholder:"Enter Your Name",onChange:e=>t(e.target.value),value:e})]}),(0,a.jsxs)("div",{className:"input",children:[(0,a.jsx)("span",{className:"label ".concat(n?"label-active":""),children:"Enter Your Email"}),(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Enter Your Email",onChange:e=>r(e.target.value),value:n})]}),(0,a.jsxs)("div",{className:"input",children:[(0,a.jsx)("span",{className:"label ".concat(s?"label-active":""),children:"Type Your Message"}),(0,a.jsx)("textarea",{name:"message",placeholder:"Type Your Message",onChange:e=>i(e.target.value),value:s})]}),(0,a.jsxs)("div",{className:"buttons",children:[(0,a.jsx)("button",{className:"button2",type:"reset",onClick:()=>{r(""),i(""),t("")},children:"Reset"}),(0,a.jsx)("button",{className:"button1",type:"submit",children:"Send Message"})]})]})]})}},4193:function(){},4911:function(){},4475:function(){},9816:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/favicon.3ed3dc2a.ico",height:1745,width:1200,blurWidth:0,blurHeight:0}},1810:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var a=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(o),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var a,o;a=t,o=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>a.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,n)=>a.createElement(t.tag,c({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:o,size:r,title:l}=e,u=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s),d=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==r?a.createElement(r.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[268,505,240,231,971,190,744],function(){return e(e.s=2247)}),_N_E=e.O()}]);