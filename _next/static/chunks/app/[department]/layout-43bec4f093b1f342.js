(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{3433:function(e,t,s){Promise.resolve().then(s.bind(s,3172)),Promise.resolve().then(s.bind(s,3844))},7138:function(e,t,s){"use strict";s.d(t,{default:function(){return o.a}});var n=s(231),o=s.n(n)},3172:function(e,t,s){"use strict";var n=s(7437),o=s(5799),r=s(2265),i=s(9824),l=s(1444);let c=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth});t.default=()=>{let[e,t]=(0,r.useState)(0),[s,a]=(0,r.useState)("black"),[d,u]=(0,r.useState)(0),[h,p]=(0,r.useState)(0),[x,f]=(0,r.useState)(0),[v,m]=(0,r.useState)(0),[j,b]=(0,r.useState)("70px"),{gpaFirst:g,gpaSecond:w,gpaThird:y,gpaFourth:k}=(0,l.v9)(c);return(0,r.useEffect)(()=>{let e=[g,w,y,k];u(e[0]),p(e[1]),f(e[2]),m(e[3]);let s=(0,o.C8)(e);t(s),s>=3?a("green"):s>=2.25?a("rgb(0, 200, 111)"):s>=2?a("tomato"):a("red")},[g,w,y,k]),(0,n.jsxs)("div",{className:"bottom-res",children:[(0,n.jsxs)("div",{className:"gpa-all",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"1st Year"}),(0,n.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(d),border:"1px solid ".concat((0,o.Ez)(d))},children:d})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"2nd Year"}),(0,n.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(h),border:"1px solid ".concat((0,o.Ez)(h))},children:h})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"3rd Year"}),(0,n.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(x),border:"1px solid ".concat((0,o.Ez)(x))},children:x})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"4th Year"}),(0,n.jsx)("span",{className:"result-box",style:{color:(0,o.Ez)(v),border:"1px solid ".concat((0,o.Ez)(v))},children:v})]})]}),(0,n.jsxs)("div",{style:{bottom:j},className:"final",children:[(0,n.jsx)("button",{onClick:()=>b("70px"===j?"-40px":"70px"),style:{position:"absolute",top:"-25px",backgroundColor:"white",borderRadius:"5px 5px 0 0",color:"black",padding:"2px 10px",boxShadow:"0 0 5px black",fontSize:"18px"},children:"70px"===j?(0,n.jsx)(i.OId,{}):(0,n.jsx)(i.Vmf,{})}),(0,n.jsx)("div",{onClick:()=>document.querySelector("#result").scrollIntoView({behavior:"smooth",block:"center"}),className:"circle-outside",style:{background:"conic-gradient(".concat(s," ").concat(360*parseFloat(e)/4,"deg, rgba(0,0,0,0.2) 0)"),cursor:"pointer"},children:(0,n.jsxs)("div",{className:"circle-inside",children:[(0,n.jsx)("span",{style:{color:s,fontSize:"25px",fontWeight:700},children:0===e?"0.00":e}),(0,n.jsx)("span",{style:{color:"black",fontSize:"10px"},children:"Overall CGPA"})]})})]})]})}},239:function(e,t,s){"use strict";var n=s(7437);s(4475);var o=s(7138),r=s(2265),i=s(3872),l=s(5027);t.default=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>t(!1),s=()=>t(!1);return window.addEventListener("click",e),window.addEventListener("scroll",s),()=>{window.removeEventListener("click",e),window.removeEventListener("scroll",s)}},[]),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"bar ".concat(e?"rotatef":"rotater"),onClick:s=>{s.stopPropagation(),t(!e)},children:e?(0,n.jsx)(l.HsN,{size:30}):(0,n.jsx)(i.EgE,{size:30})}),(0,n.jsxs)("div",{onClick:()=>t(!1),className:"nav-items ".concat(e?"open-item":"close-items"),children:[(0,n.jsx)(o.default,{href:"/",children:"Home"}),(0,n.jsx)(o.default,{href:"/departments",children:"Departments"}),(0,n.jsx)(o.default,{href:"/about",children:"About"}),(0,n.jsx)(o.default,{href:"/contact",children:"Contact"}),(0,n.jsx)(o.default,{href:"/guide-line",children:"How to use?"})]})]})}},3844:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var n=s(7437),o=s(9816),r=s(7138),i=s(1444),l=s(239),c=s(2265);function a(){return(0,c.useEffect)(()=>{let e=document.querySelector(".third-year");e&&window.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+window.pageYOffset-50})},[]),null}var d=()=>{let e=(0,i.v9)(e=>e.current),t=e=>{let t=document.querySelector(".first-year"),s=document.querySelector(".second-year"),n=document.querySelector(".third-year"),o=document.querySelector(".fourth-year");"first"===e&&window.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+window.pageYOffset-50}),"second"===e&&window.scrollTo({behavior:"smooth",top:s.getBoundingClientRect().top+window.pageYOffset-50}),"third"===e&&window.scrollTo({behavior:"smooth",top:n.getBoundingClientRect().top+window.pageYOffset-50}),"fourth"===e&&window.scrollTo({behavior:"smooth",top:o.getBoundingClientRect().top+window.pageYOffset-50})};return(0,n.jsxs)("div",{className:"nav-parent",children:[(0,n.jsx)(a,{}),(0,n.jsxs)("div",{className:"navbar",children:[(0,n.jsx)(r.default,{href:"/",style:{fontSize:"20px",padding:"5px 0"},children:(0,n.jsx)("img",{src:o.default.src,height:40,alt:"NU"})}),(0,n.jsxs)("div",{className:"nav-links",children:[(0,n.jsx)("div",{onClick:()=>t("first"),className:"nav-link-item ".concat(0===e?"active-year":null),style:{borderRadius:"10px 0 0 10px"},children:"First"}),(0,n.jsx)("div",{onClick:()=>t("second"),className:"nav-link-item ".concat(1===e?"active-year":null),children:"Second"}),(0,n.jsx)("div",{onClick:()=>t("third"),className:"nav-link-item ".concat(2===e?"active-year":null),children:"Third"}),(0,n.jsx)("div",{onClick:()=>t("fourth"),className:"nav-link-item ".concat(3===e?"active-year":null),style:{borderRadius:"0 10px 10px 0",borderRight:"1px solid black"},children:"Fourth"})]}),(0,n.jsx)(l.default,{})]})]})}},4475:function(){}},function(e){e.O(0,[569,505,240,957,950,699,452,231,780,460,971,190,744],function(){return e(e.s=3433)}),_N_E=e.O()}]);