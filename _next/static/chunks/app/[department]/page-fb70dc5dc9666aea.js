(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{9792:function(e,s,t){Promise.resolve().then(t.bind(t,8803)),Promise.resolve().then(t.bind(t,1715)),Promise.resolve().then(t.bind(t,6313)),Promise.resolve().then(t.bind(t,6490)),Promise.resolve().then(t.bind(t,7493)),Promise.resolve().then(t.bind(t,280)),Promise.resolve().then(t.bind(t,8736))},8803:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(2265),r=t(1444);s.default=e=>{let{index:s,year:t,optionIndex:i}=e,[d,c]=(0,n.useState)(!1),[o,h]=(0,n.useState)(!1),u=(0,r.v9)(e=>e["subjects".concat((0,l.Y7)(t))]);return(0,n.useEffect)(()=>{u.length>0&&(h(u[s].ignore),c(u[s].options[i].disable))},[u]),(0,a.jsx)(a.Fragment,{children:(d||o)&&(0,a.jsx)("div",{className:"disable",children:"Selected Maximum"})})}},1715:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(2265),r=t(1444);let i=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth});s.default=()=>{let{gpaFirst:e,gpaSecond:s,gpaThird:t,gpaFourth:d}=(0,r.v9)(i),[c,o]=(0,n.useState)("F"),[h,u]=(0,n.useState)(0),[x,p]=(0,n.useState)("black"),[g,m]=(0,n.useState)("Result");(0,n.useEffect)(()=>{let a=(0,l.C8)([e,s,t,d]);u(a),v(a)},[e,s,t,d]);let v=e=>{let s,t;e>=3?(s="green",t="1st Class"):e>=2.25?(s="rgb(0, 200, 111)",t="2nd Class"):e>=2?(s="tomato",t="3rd Class"):(s="red",t="Fail"),o(e>=4?"A+":e>=3.75?"A":e>=3.5?"A-":e>=3.25?"B+":e>=3?"B":e>=2.75?"B-":e>=2.5?"C+":e>=2.25?"C":e>=2?"D":"F"),p(s),m(0===e?"Result":t)};return(0,a.jsxs)("div",{id:"result",className:"cgpa final last",style:{position:"static"},children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"20px"},children:"Over-all"}),(0,a.jsx)("div",{className:"circle-outside",style:{background:"conic-gradient(".concat(x," ").concat(360*parseFloat(h)/4,"deg, rgba(0,0,0,0.2) 0)")},children:(0,a.jsxs)("div",{className:"circle-inside",children:[(0,a.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"CGPA: "}),0===h?"0.00":h]}),(0,a.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"Grade: "}),c]})]})}),(0,a.jsx)("span",{style:{color:x,fontSize:"20px"},children:g})]})}},6313:function(e,s,t){"use strict";var a=t(7437),l=t(2265),n=t(6463);s.default=e=>{let{slot:s=7469023022}=e,t=(0,n.usePathname)(),r=(0,n.useSearchParams)();return(0,l.useEffect)(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Adsbygoogle script push error:",e)}},[t,r]),(0,a.jsx)("ins",{className:"adsbygoogle",style:{display:"block",margin:"10px 0"},"data-ad-client":"ca-pub-7695470547692086","data-ad-slot":s,"data-ad-format":"auto","data-full-width-responsive":"true"})}},6490:function(e,s,t){"use strict";var a=t(7437),l=t(2265),n=t(143),r=t(7432),i=t(1444),d=t(5799),c=t(5408);s.default=e=>{let{id:s,year:t,handleOption:o,sub:h}=e,[u,x]=(0,l.useState)(!1),[p,g]=(0,l.useState)(!1),m=(0,i.v9)(e=>e["subjects".concat((0,d.Y7)(t))]),[v,j]=(0,l.useState)(null),y=(0,i.I0)(),f=e=>{let a;j(e),a="handleGradeOption"===o?(0,d.OZ)(t,s,null===e?null:n.Tb[e-1].value,m.length>0?{...h.subjects,[t]:m}:h.subjects,h.index):(0,d.pE)(t,s,null===e?null:n.Tb[e-1].value,m.length>0?{...h.subjects,[t]:m}:h.subjects,h.index),y({type:"SUBJECT_".concat(t.toUpperCase()),payload:a[t]})};return(0,l.useEffect)(()=>{"handleGradeOption"===o&&m.length>0&&(g(m[h.index].ignore),x(m[h.index].options[h.optionIndex].disable))},[m]),(0,a.jsx)(a.Fragment,{children:!u&&!p&&(0,a.jsx)(a.Fragment,{children:v?(0,a.jsxs)("div",{style:{position:"relative",width:"120px"},children:[(0,a.jsx)("span",{onClick:()=>f(null),className:"cross",children:(0,a.jsx)(r.$iT,{})}),n.Tb[v-1].name]}):n.Tb.map(e=>(0,a.jsxs)("div",{className:"grades",onClick:()=>f(e.id),style:{position:"relative"},children:["A"==e.name&&1==h.index&&(0,a.jsx)(c.default,{}),e.name]},e.id))})})}},5408:function(e,s,t){"use strict";var a=t(7437),l=t(2265);t(5167);var n=t(1942),r=t(1444);s.default=()=>{let e=(0,r.I0)(),s=(0,r.v9)(e=>e.clickedLink);return(0,l.useEffect)(()=>{e({type:"LINK_CLICK",payload:!0}),document.querySelector("body").addEventListener("click",()=>{e({type:"LINK_CLICK",payload:!1})})},[]),(0,a.jsx)("section",{className:"instruction-container",children:s&&(0,a.jsx)("section",{className:"hand-icon",children:(0,a.jsx)(n._mg,{})})})}},7493:function(e,s,t){"use strict";var a=t(7437),l=t(6758),n=t.n(l),r=t(2265),i=t(1942),d=t(7432),c=t(1647),o=t(5799),h=t(9816),u=t(143),x=t(1444);let p=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth,subjectsFirst:e.subjectsFirst,subjectsSecond:e.subjectsSecond,subjectsThird:e.subjectsThird,subjectsFourth:e.subjectsFourth,name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});s.default=e=>{let s,{department:t}=e,{gpaFirst:l,gpaSecond:g,gpaThird:m,gpaFourth:v,subjectsFirst:j,subjectsSecond:y,subjectsThird:f,subjectsFourth:N,name:b,fname:k,mname:C,roll:S,reg:E,session:w}=(0,x.v9)(p),F=(0,x.I0)(),[T,_]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),z=(0,r.useRef)(null);u.Yd.forEach(e=>{e.path===t&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,r.useEffect)(()=>{R?document.body.style.overflow="hidden":document.body.style.overflow="auto";let e=[l,g,m,v];_((0,o.C8)(e))},[R,l,g,m,v]);let A=e=>{"Enter Your Name"===e.target.value?e.target.value="":F({type:"SET_NAME",payload:e.target.value})},P=e=>{"Enter Father's Name"===e.target.value?e.target.value="":F({type:"SET_F_NAME",payload:e.target.value})},B=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":F({type:"SET_M_NAME",payload:e.target.value})},M=e=>{"Enter Roll"===e.target.value?e.target.value="":F({type:"SET_ROLL",payload:e.target.value})},L=e=>{"Enter Registration"===e.target.value?e.target.value="":F({type:"SET_REG",payload:e.target.value})},Y=e=>{"Enter Session"===e.target.value?e.target.value="":F({type:"SET_SESSION",payload:e.target.value})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,a.jsx)("button",{style:{fontSize:"40px"},onClick:()=>I(!0),children:(0,a.jsx)(i.TvB,{})}),"Download Marksheet"]}),R&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsxs)("div",{className:"inner-modal",children:[(0,a.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,a.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,a.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,a.jsx)("div",{ref:z,id:"marksheet",children:(0,a.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,a.jsxs)("div",{className:"nu-details",children:[(0,a.jsx)("img",{className:"marksheet-logo",src:h.default.src,width:100,alt:"NU"}),(0,a.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,a.jsx)("h2",{style:{fontSize:"35px"},children:"Bachelor Degree Honours Examination"}),(0,a.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,a.jsxs)("div",{className:"personal-details",children:[(0,a.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,a.jsx)("input",{onClick:e=>A(e),onChange:e=>A(e),value:b})]}),(0,a.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,a.jsx)("input",{onClick:e=>P(e),onChange:e=>P(e),value:k})]}),(0,a.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,a.jsx)("input",{onClick:e=>B(e),onChange:e=>B(e),value:C})]}),(0,a.jsxs)("div",{className:"even",children:["Roll:"," ",(0,a.jsx)("input",{onClick:e=>M(e),onChange:e=>M(e),value:S})]}),(0,a.jsxs)("div",{className:"",children:["Registration:"," ",(0,a.jsx)("input",{onClick:e=>L(e),onChange:e=>L(e),value:E})]}),(0,a.jsxs)("div",{className:"even",children:["Session:"," ",(0,a.jsx)("input",{onClick:e=>Y(e),onChange:e=>Y(e),value:w})]}),(0,a.jsxs)("div",{className:"",children:["Subject: ",(0,a.jsx)("span",{children:s})]}),(0,a.jsxs)("div",{className:"even last-row",children:["Result: ",(0,a.jsxs)("span",{children:["CGPA: ",parseFloat(T).toFixed(2)]})]})]}),(0,a.jsxs)("div",{className:"table-marksheet",children:[(0,a.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise Letter Grade"}),(0,a.jsx)("div",{style:{width:"100%",display:"flex",gap:"10px",boxShadow:"0 0 2px 2px black",padding:"10px"},children:[j,y,f,N].map((e,t)=>(0,a.jsxs)("div",{style:{width:"25%",boxShadow:"0 0 2px 2px black",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},className:"year-marksheet",children:[(0,a.jsxs)("h1",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"30px",borderBottom:"2px solid black",backgroundColor:"#eaeaea"},children:[0===t?"First":1===t?"Second":2===t?"Third":"Fourth"," ","Year"]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",style:{width:"60%"},children:"Course Code (Credit)"}),(0,a.jsx)("div",{className:"col grade-marksheet",style:{width:"40%"},children:"Grade (Letter)"})]},s.id),e.map(e=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,a.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,o.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,a.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,o.yQ)(e.grade),")")]})]},e.id)),(0,a.jsxs)("div",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"25px",marginTop:"auto",borderTop:"2px solid black"},children:["GPA:"," ",0===t?l:1===t?g:2===t?m:v]})]},t))})]})]})})}),(0,a.jsxs)("div",{className:"marksheet-buttons",children:[(0,a.jsx)(n(),{trigger:()=>(0,a.jsxs)("button",{onClick:()=>I(!1),children:[(0,a.jsx)(i.aBF,{})," Pdf"]}),content:()=>z.current}),(0,a.jsx)(c.Z,{targetId:"marksheet",year:"Honours"})]}),(0,a.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content",fontSize:"25px"},onClick:()=>I(!1),children:[(0,a.jsx)(d.$iT,{})," Cancel"]})]})})]})}},1647:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(7293),r=t(2265),i=t(1942);s.Z=e=>{let{targetId:s,year:t}=e,[d,c]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>{c(!0);let e=document.getElementById(s);e.style.overflow="visible",(0,n.YM)(e,{cacheBust:!0,quality:1}).then(e=>{let s=document.createElement("a");s.href=e,s.download="Marksheet-".concat((0,l.Y7)(t),"-").concat("Honours"===t?"":"Year",".png"),s.click(),c(!1)}).catch(e=>{console.error("Error taking screenshot:",e),c(!1)})},children:[(0,a.jsx)(i.aBF,{})," Image"]}),d&&(0,a.jsx)("div",{style:{height:"100%",width:"100%",position:"fixed",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"20",top:0,left:0},children:(0,a.jsx)("h1",{style:{fontSize:"35px",color:"white"},children:"Preparing Image..."})})]})}},280:function(e,s,t){"use strict";t.d(s,{default:function(){return m}});var a=t(7437),l=t(1444),n=t(6758),r=t.n(n),i=t(2265),d=t(1942),c=t(7432),o=t(1647),h=t(5799),u=t(9816);t(6648);var x=t(143);let p=e=>({name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});var g=e=>{let s,{year:t,subjects:n,department:g}=e,m=(0,l.v9)(e=>e["gpa".concat((0,h.Y7)(t))]),{name:v,fname:j,mname:y,roll:f,reg:N,session:b}=(0,l.v9)(p),[k,C]=(0,i.useState)(!1),S=(0,i.useRef)(null);x.Yd.forEach(e=>{e.path===g&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,i.useEffect)(()=>{k?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[k]);let E=(0,l.I0)(),w=e=>{"Enter Your Name"===e.target.value?e.target.value="":E({type:"SET_NAME",payload:e.target.value})},F=e=>{"Enter Father's Name"===e.target.value?e.target.value="":E({type:"SET_F_NAME",payload:e.target.value})},T=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":E({type:"SET_M_NAME",payload:e.target.value})},_=e=>{"Enter Roll"===e.target.value?e.target.value="":E({type:"SET_ROLL",payload:e.target.value})},R=e=>{"Enter Registration"===e.target.value?e.target.value="":E({type:"SET_REG",payload:e.target.value})},I=e=>{"Enter Session"===e.target.value?e.target.value="":E({type:"SET_SESSION",payload:e.target.value})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{style:{fontSize:"30px"},onClick:()=>C(!0),children:(0,a.jsx)(d.TvB,{})}),k&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsxs)("div",{className:"inner-modal",children:[(0,a.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,a.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,a.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,a.jsx)("div",{ref:S,id:"marksheet",children:(0,a.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,a.jsxs)("div",{className:"nu-details",children:[(0,a.jsx)("img",{className:"marksheet-logo",src:u.default.src,width:100,alt:"NU"}),(0,a.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,a.jsxs)("h2",{style:{fontSize:"35px"},children:["Honours ",(0,h.Y7)(t)," Year Examination"]}),(0,a.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,a.jsxs)("div",{className:"personal-details",children:[(0,a.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,a.jsx)("input",{onClick:e=>w(e),onChange:e=>w(e),value:v})]}),(0,a.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,a.jsx)("input",{onClick:e=>F(e),onChange:e=>F(e),value:j})]}),(0,a.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,a.jsx)("input",{onClick:e=>T(e),onChange:e=>T(e),value:y})]}),(0,a.jsxs)("div",{className:"even",children:["Roll:"," ",(0,a.jsx)("input",{onClick:e=>_(e),onChange:e=>_(e),value:f})]}),(0,a.jsxs)("div",{className:"",children:["Registration:"," ",(0,a.jsx)("input",{onClick:e=>R(e),onChange:e=>R(e),value:N})]}),(0,a.jsxs)("div",{className:"even",children:["Session:"," ",(0,a.jsx)("input",{onClick:e=>I(e),onChange:e=>I(e),value:b})]}),(0,a.jsxs)("div",{className:"",children:["Subject: ",(0,a.jsx)("span",{children:s})]}),(0,a.jsxs)("div",{className:"even last-row",children:["CGPA: ",(0,a.jsx)("span",{children:parseFloat(m).toFixed(2)})]})]}),(0,a.jsxs)("div",{className:"table-marksheet",children:[(0,a.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise grade"}),(0,a.jsxs)("div",{className:"row heading",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:"Course Code"}),(0,a.jsx)("div",{className:"col subject-marksheet",children:"Course Title"}),(0,a.jsx)("div",{className:"col credit-marksheet",children:"Credit"}),(0,a.jsx)("div",{className:"col grade-head grade-marksheet",children:"Grade (Ltr.)"})]}),n.map((e,s)=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,a.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,a.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,a.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,a.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,a.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,a.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id))]})]})})}),(0,a.jsxs)("div",{className:"marksheet-buttons",children:[(0,a.jsx)(r(),{trigger:()=>(0,a.jsxs)("button",{onClick:()=>C(!1),children:[(0,a.jsx)(d.aBF,{})," Pdf"]}),content:()=>S.current}),(0,a.jsx)(o.Z,{targetId:"marksheet",year:t})]}),(0,a.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content"},onClick:()=>C(!1),children:[(0,a.jsx)(c.$iT,{})," Cancel"]})]})})]})},m=e=>{let{year:s,department:t}=e,n=(0,l.v9)(e=>e["subjects".concat((0,h.Y7)(s))]),r=(0,h.sW)(n,s),i="black",d="Result",c=parseFloat(r).toFixed(2);return"NaN"===c&&(c="0.00"),(0,l.I0)()({type:"SET_".concat(s.toUpperCase(),"_GPA"),payload:c}),c>=3?(i="green",d="1st Class"):c>=2.25?(i="rgb(0, 200, 111)",d="2nd Class"):c>=2?(i="tomato",d="3rd Class"):c<2&&c>0&&(i="red",d="Not Promoted"),(0,a.jsxs)("div",{className:"result",children:[(0,a.jsxs)("div",{children:[s.charAt(0).toUpperCase()+s.slice(1)," Year CGPA:"," ",(0,a.jsxs)("span",{style:{color:i,fontWeight:"700",backgroundColor:"white",borderRadius:"20px",padding:"5px 10px",lineHeight:"20px",margin:"0 5px",fontSize:"30px",border:"1px solid ".concat(i),lineHeight:"20px"},children:[c,(0,a.jsx)("br",{}),d&&(0,a.jsx)("span",{style:{fontSize:"13px",lineHeight:"10px"},children:d})]})]}),(0,a.jsx)(g,{year:s,subjects:n,department:t})]})}},8736:function(e,s,t){"use strict";var a=t(7437),l=t(2265),n=t(1444);s.default=e=>{let{i:s,subjects:t,year:r}=e,i=(0,l.useRef)(null),d=(0,n.I0)();return(0,l.useEffect)(()=>{d({type:"SUBJECT_".concat(r.toUpperCase()),payload:t[r]})},[t,d]),(0,l.useEffect)(()=>{let e=()=>{if(null==i?void 0:i.current){let{top:e}=i.current.getBoundingClientRect();e<=100&&d({type:"SET_CURRENT",payload:s})}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[i,s,d]),(0,a.jsx)("span",{ref:i,className:"".concat(r,"-year")})}},5167:function(){}},function(e){e.O(0,[802,699,957,950,574,780,603,460,971,190,744],function(){return e(e.s=9792)}),_N_E=e.O()}]);