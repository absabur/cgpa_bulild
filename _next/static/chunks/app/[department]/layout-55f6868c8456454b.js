(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{7179:function(e,t,s){Promise.resolve().then(s.bind(s,3172)),Promise.resolve().then(s.bind(s,6313)),Promise.resolve().then(s.bind(s,9765))},7138:function(e,t,s){"use strict";s.d(t,{default:function(){return o.a}});var r=s(231),o=s.n(r)},6463:function(e,t,s){"use strict";var r=s(1169);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}})},3172:function(e,t,s){"use strict";var r=s(7437),o=s(5799),n=s(2265),i=s(9824),a=s(1444);let c=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth});t.default=()=>{let[e,t]=(0,n.useState)(0),[s,l]=(0,n.useState)("black"),[d,u]=(0,n.useState)(0),[h,p]=(0,n.useState)(0),[x,f]=(0,n.useState)(0),[m,v]=(0,n.useState)(0),[g,b]=(0,n.useState)("70px"),{gpaFirst:j,gpaSecond:w,gpaThird:y,gpaFourth:k}=(0,a.v9)(c);return(0,n.useEffect)(()=>{let e=[j,w,y,k];u(e[0]),p(e[1]),f(e[2]),v(e[3]);let s=(0,o.C8)(e);t(s),s>=3?l("green"):s>=2.25?l("rgb(0, 200, 111)"):s>=2?l("tomato"):l("red")},[j,w,y,k]),(0,r.jsxs)("div",{className:"bottom-res",children:[(0,r.jsxs)("div",{className:"gpa-all",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"1st Year"}),(0,r.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(d),border:"1px solid ".concat((0,o.Ez)(d))},children:d})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"2nd Year"}),(0,r.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(h),border:"1px solid ".concat((0,o.Ez)(h))},children:h})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"3rd Year"}),(0,r.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(x),border:"1px solid ".concat((0,o.Ez)(x))},children:x})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"4th Year"}),(0,r.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(m),border:"1px solid ".concat((0,o.Ez)(m))},children:m})]})]}),(0,r.jsxs)("div",{style:{bottom:g},className:"final",children:[(0,r.jsx)("button",{onClick:()=>b("70px"===g?"-40px":"70px"),style:{position:"absolute",top:"-25px",backgroundColor:"white",borderRadius:"5px 5px 0 0",color:"black",padding:"2px 10px",boxShadow:"0 0 5px black",fontSize:"18px"},children:"70px"===g?(0,r.jsx)(i.OId,{}):(0,r.jsx)(i.Vmf,{})}),(0,r.jsx)("div",{onClick:()=>document.querySelector("#result").scrollIntoView({behavior:"smooth",block:"center"}),className:"circle-outside",style:{background:"conic-gradient(".concat(s," ").concat(360*parseFloat(e)/4,"deg, rgba(0,0,0,0.2) 0)"),cursor:"pointer"},children:(0,r.jsxs)("div",{className:"circle-inside",children:[(0,r.jsx)("span",{style:{color:s,fontSize:"25px",fontWeight:700},children:0===e?"0.00":e}),(0,r.jsx)("span",{style:{color:"black",fontSize:"10px"},children:"Overall CGPA"})]})})]})]})}},6313:function(e,t,s){"use strict";s.r(t);var r=s(7437),o=s(2265),n=s(6463);t.default=e=>{let{children:t}=e,s=(0,n.usePathname)(),i=(0,n.useSearchParams)();return(0,o.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}},[s,i]),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.1)",color:"rgba(255,255,255,0.9)",fontSize:"14px"},children:"Advertisement"}),t]})}},239:function(e,t,s){"use strict";var r=s(7437);s(4475);var o=s(7138),n=s(2265),i=s(3872),a=s(5027);t.default=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>t(!1),s=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",s),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",s)}},[]),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:s=>{s.stopPropagation(),t(!e)},children:e?(0,r.jsx)(a.HsN,{size:30}):(0,r.jsx)(i.EgE,{size:30})}),(0,r.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,r.jsx)(o.default,{href:"/",children:"Home"}),(0,r.jsx)(o.default,{href:"/departments",children:"Departments"}),(0,r.jsx)(o.default,{href:"/about",children:"About"}),(0,r.jsx)(o.default,{href:"/contact",children:"Contact"}),(0,r.jsx)(o.default,{href:"/guide-line",children:"How to use?"})]})]})}},9765:function(e,t,s){"use strict";var r=s(7437),o=s(9816),n=s(7138),i=s(1444),a=s(239),c=s(2265);t.default=()=>{let e=(0,i.v9)(e=>e.current),t=e=>{let t=document.querySelector(".first-year"),s=document.querySelector(".second-year"),r=document.querySelector(".third-year"),o=document.querySelector(".fourth-year");"first"===e&&window.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+window.pageYOffset-50}),"second"===e&&window.scrollTo({behavior:"smooth",top:s.getBoundingClientRect().top+window.pageYOffset-50}),"third"===e&&window.scrollTo({behavior:"smooth",top:r.getBoundingClientRect().top+window.pageYOffset-50}),"fourth"===e&&window.scrollTo({behavior:"smooth",top:o.getBoundingClientRect().top+window.pageYOffset-50})};return(0,c.useEffect)(()=>{setTimeout(()=>{let e=document.querySelector(".fourth-year");e&&window.scrollTo({top:e.getBoundingClientRect().top+window.scrollY-50,behavior:"smooth"})},1e3)},[]),(0,r.jsx)("div",{className:"nav-parent",children:(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsx)(n.default,{href:"/",style:{fontSize:"20px",padding:"5px 0"},children:(0,r.jsx)("img",{src:o.default.src,height:40,alt:"NU"})}),(0,r.jsxs)("div",{className:"nav-links",children:[(0,r.jsx)("div",{onClick:()=>t("first"),className:"nav-link-item ".concat(0===e?"active-year":null),style:{borderRadius:"10px 0 0 10px"},children:"First"}),(0,r.jsx)("div",{onClick:()=>t("second"),className:"nav-link-item ".concat(1===e?"active-year":null),children:"Second"}),(0,r.jsx)("div",{onClick:()=>t("third"),className:"nav-link-item ".concat(2===e?"active-year":null),children:"Third"}),(0,r.jsx)("div",{onClick:()=>t("fourth"),className:"nav-link-item ".concat(3===e?"active-year":null),style:{borderRadius:"0 10px 10px 0",borderRight:"1px solid black"},children:"Fourth"})]}),(0,r.jsx)(a.default,{})]})})}},4475:function(){}},function(e){e.O(0,[268,505,240,699,957,950,452,231,780,460,971,190,744],function(){return e(e.s=7179)}),_N_E=e.O()}]);