(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{4262:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,9816)),Promise.resolve().then(n.bind(n,6313)),Promise.resolve().then(n.bind(n,5408)),Promise.resolve().then(n.bind(n,239)),Promise.resolve().then(n.bind(n,3073))},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(231),r=n.n(a)},6463:function(e,t,n){"use strict";var a=n(1169);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}}),n.o(a,"useSearchParams")&&n.d(t,{useSearchParams:function(){return a.useSearchParams}})},6313:function(e,t,n){"use strict";var a=n(7437),r=n(2265),o=n(6463);t.default=e=>{let{slot:t=7469023022}=e,n=(0,o.usePathname)(),s=(0,o.useSearchParams)();return(0,r.useEffect)(()=>{if(window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}},[n,s]),(0,a.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center",margin:"10px 0"},"data-ad-client":"ca-pub-7695470547692086","data-ad-slot":t,"data-ad-format":"auto","data-full-width-responsive":"true"})}},5408:function(e,t,n){"use strict";var a=n(7437),r=n(2265);n(5167);var o=n(1942),s=n(1444);t.default=()=>{let e=(0,s.I0)(),t=(0,s.v9)(e=>e.clickedLink);return(0,r.useEffect)(()=>{e({type:"LINK_CLICK",payload:!0}),document.querySelector("body").addEventListener("click",()=>{e({type:"LINK_CLICK",payload:!1})})},[]),(0,a.jsx)("section",{className:"instruction-container",children:t&&(0,a.jsx)("section",{className:"hand-icon",children:(0,a.jsx)(o._mg,{})})})}},239:function(e,t,n){"use strict";var a=n(7437);n(4475);var r=n(7138),o=n(2265),s=n(3872),i=n(5027);t.default=()=>{let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>t(!1),n=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",n),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",n)}},[]),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:n=>{n.stopPropagation(),t(!e)},children:e?(0,a.jsx)(i.HsN,{size:30}):(0,a.jsx)(s.EgE,{size:30})}),(0,a.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,a.jsx)(r.default,{href:"/",children:"Home"}),(0,a.jsx)(r.default,{href:"/departments",children:"Departments"}),(0,a.jsx)(r.default,{href:"/about",children:"About"}),(0,a.jsx)(r.default,{href:"/contact",children:"Contact"}),(0,a.jsx)(r.default,{href:"/guide-line",children:"How to use?"})]})]})}},3073:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var a=n(7437),r=n(2265),o=n(1444);function s(){let[e,t]=(0,r.useState)(-1),n=(0,o.I0)(),s=e=>{let n=e.toLowerCase(),a=document.querySelectorAll(".searchable"),r=!1;a.forEach((e,a)=>{""!==n&&e.textContent.toLowerCase().includes(n)?(r||(e.scrollIntoView({behavior:"smooth",block:"center"}),t(a),r=!0),e.style.backgroundColor="rgb(0, 255, 162)"):(e.style.color="",e.style.backgroundColor="")})};return(0,r.useEffect)(()=>{n({type:"SET_CURRENT",payload:0}),n({type:"SET_FIRST_GPA",payload:"0.00"}),n({type:"SET_SECOND_GPA",payload:"0.00"}),n({type:"SET_THIRD_GPA",payload:"0.00"}),n({type:"SET_FOURTH_GPA",payload:"0.00"}),n({type:"SUBJECT_FIRST",payload:[]}),n({type:"SUBJECT_SECOND",payload:[]}),n({type:"SUBJECT_THIRD",payload:[]}),n({type:"SUBJECT_FOURTH",payload:[]})},[n]),(0,a.jsx)("input",{type:"text",onChange:e=>s(e.target.value),placeholder:"Search department..."})}},5167:function(){},4475:function(){},9816:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/favicon.3ed3dc2a.ico",height:1745,width:1200,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[802,268,505,240,699,231,780,971,190,744],function(){return e(e.s=4262)}),_N_E=e.O()}]);