(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{4262:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,9816)),Promise.resolve().then(n.bind(n,6313)),Promise.resolve().then(n.bind(n,5408)),Promise.resolve().then(n.bind(n,239)),Promise.resolve().then(n.bind(n,3073))},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(231),o=n.n(r)},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},6313:function(e,t,n){"use strict";var r=n(7437),o=n(2265),s=n(6463);t.default=e=>{let{children:t}=e,n=(0,s.usePathname)(),a=(0,s.useSearchParams)();return(0,o.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}},[n,a]),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.1)",color:"rgba(255,255,255,0.9)",fontSize:"14px"},children:"Advertisement"}),t]})}},5408:function(e,t,n){"use strict";var r=n(7437),o=n(2265);n(3916);var s=n(1942),a=n(1444);t.default=()=>{let e=(0,a.I0)(),t=(0,a.v9)(e=>e.clickedLink);return(0,o.useEffect)(()=>{e({type:"LINK_CLICK",payload:!0}),document.querySelector("body").addEventListener("click",()=>{e({type:"LINK_CLICK",payload:!1})})},[]),(0,r.jsx)("section",{className:"instruction-container",children:t&&(0,r.jsx)("section",{className:"hand-icon",children:(0,r.jsx)(s._mg,{})})})}},239:function(e,t,n){"use strict";var r=n(7437);n(4475);var o=n(7138),s=n(2265),a=n(3872),i=n(5027);t.default=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>t(!1),n=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",n),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",n)}},[]),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:n=>{n.stopPropagation(),t(!e)},children:e?(0,r.jsx)(i.HsN,{size:30}):(0,r.jsx)(a.EgE,{size:30})}),(0,r.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,r.jsx)(o.default,{href:"/",children:"Home"}),(0,r.jsx)(o.default,{href:"/departments",children:"Departments"}),(0,r.jsx)(o.default,{href:"/about",children:"About"}),(0,r.jsx)(o.default,{href:"/contact",children:"Contact"}),(0,r.jsx)(o.default,{href:"/guide-line",children:"How to use?"})]})]})}},3073:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(7437),o=n(2265),s=n(1444);function a(){let[e,t]=(0,o.useState)(-1),n=(0,s.I0)(),a=e=>{let n=e.toLowerCase(),r=document.querySelectorAll(".searchable"),o=!1;r.forEach((e,r)=>{""!==n&&e.textContent.toLowerCase().includes(n)?(o||(e.scrollIntoView({behavior:"smooth",block:"center"}),t(r),o=!0),e.style.backgroundColor="rgb(0, 255, 162)"):(e.style.color="",e.style.backgroundColor="")})};return(0,o.useEffect)(()=>{n({type:"SET_CURRENT",payload:0}),n({type:"SET_FIRST_GPA",payload:"0.00"}),n({type:"SET_SECOND_GPA",payload:"0.00"}),n({type:"SET_THIRD_GPA",payload:"0.00"}),n({type:"SET_FOURTH_GPA",payload:"0.00"}),n({type:"SUBJECT_FIRST",payload:[]}),n({type:"SUBJECT_SECOND",payload:[]}),n({type:"SUBJECT_THIRD",payload:[]}),n({type:"SUBJECT_FOURTH",payload:[]})},[n]),(0,r.jsx)("input",{type:"text",onChange:e=>a(e.target.value),placeholder:"Search department..."})}},3916:function(){},4475:function(){},9816:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/favicon.3ed3dc2a.ico",height:1745,width:1200,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[124,505,240,699,231,780,971,190,744],function(){return e(e.s=4262)}),_N_E=e.O()}]);