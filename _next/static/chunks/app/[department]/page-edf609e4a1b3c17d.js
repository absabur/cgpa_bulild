(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{6958:function(e,s,t){Promise.resolve().then(t.bind(t,8803)),Promise.resolve().then(t.bind(t,1715)),Promise.resolve().then(t.bind(t,6490)),Promise.resolve().then(t.bind(t,7493)),Promise.resolve().then(t.bind(t,280)),Promise.resolve().then(t.bind(t,8736))},8803:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(2265),r=t(1444);s.default=e=>{let{index:s,year:t,optionIndex:i}=e,[d,c]=(0,n.useState)(!1),[o,h]=(0,n.useState)(!1),u=(0,r.v9)(e=>e["subjects".concat((0,l.Y7)(t))]);return(0,n.useEffect)(()=>{u.length>0&&(h(u[s].ignore),c(u[s].options[i].disable))},[u]),(0,a.jsx)(a.Fragment,{children:(d||o)&&(0,a.jsx)("div",{className:"disable",children:"Selected Maximum"})})}},1715:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(2265),r=t(1444);let i=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth});s.default=()=>{let{gpaFirst:e,gpaSecond:s,gpaThird:t,gpaFourth:d}=(0,r.v9)(i),[c,o]=(0,n.useState)("F"),[h,u]=(0,n.useState)(0),[x,p]=(0,n.useState)("black"),[g,m]=(0,n.useState)("Result");(0,n.useEffect)(()=>{let a=(0,l.C8)([e,s,t,d]);u(a),v(a)},[e,s,t,d]);let v=e=>{let s,t;e>=3?(s="green",t="1st Class"):e>=2.25?(s="rgb(0, 200, 111)",t="2nd Class"):e>=2?(s="tomato",t="3rd Class"):(s="red",t="Fail"),o(e>=4?"A+":e>=3.75?"A":e>=3.5?"A-":e>=3.25?"B+":e>=3?"B":e>=2.75?"B-":e>=2.5?"C+":e>=2.25?"C":e>=2?"D":"F"),p(s),m(0===e?"Result":t)};return(0,a.jsxs)("div",{id:"result",className:"cgpa final last",style:{position:"static"},children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"20px"},children:"Over-all"}),(0,a.jsx)("div",{className:"circle-outside",style:{background:"conic-gradient(".concat(x," ").concat(360*parseFloat(h)/4,"deg, rgba(0,0,0,0.2) 0)")},children:(0,a.jsxs)("div",{className:"circle-inside",children:[(0,a.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"CGPA: "}),0===h?"0.00":h]}),(0,a.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,a.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"Grade: "}),c]})]})}),(0,a.jsx)("span",{style:{color:x,fontSize:"20px"},children:g})]})}},6490:function(e,s,t){"use strict";var a=t(7437),l=t(2265),n=t(143),r=t(7432),i=t(1444),d=t(5799);s.default=e=>{let{id:s,year:t,handleOption:c,sub:o}=e,[h,u]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1),g=(0,i.v9)(e=>e["subjects".concat((0,d.Y7)(t))]),[m,v]=(0,l.useState)(null),j=(0,i.I0)(),y=e=>{let a;v(e),a="handleGradeOption"===c?(0,d.OZ)(t,s,null===e?null:n.Tb[e-1].value,g.length>0?{...o.subjects,[t]:g}:o.subjects,o.index):(0,d.pE)(t,s,null===e?null:n.Tb[e-1].value,g.length>0?{...o.subjects,[t]:g}:o.subjects,o.index),j({type:"SUBJECT_".concat(t.toUpperCase()),payload:a[t]})};return(0,l.useEffect)(()=>{"handleGradeOption"===c&&g.length>0&&(p(g[o.index].ignore),u(g[o.index].options[o.optionIndex].disable))},[g]),(0,a.jsx)(a.Fragment,{children:!h&&!x&&(0,a.jsx)(a.Fragment,{children:m?(0,a.jsxs)("div",{style:{position:"relative",width:"120px"},children:[(0,a.jsx)("span",{onClick:()=>y(null),className:"cross",children:(0,a.jsx)(r.$iT,{})}),n.Tb[m-1].name]}):n.Tb.map(e=>(0,a.jsx)("div",{className:"grades",onClick:()=>y(e.id),children:e.name},e.id))})})}},7493:function(e,s,t){"use strict";var a=t(7437),l=t(6758),n=t.n(l),r=t(2265),i=t(1942),d=t(7432),c=t(1647),o=t(5799),h=t(9816),u=t(143),x=t(1444);let p=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth,subjectsFirst:e.subjectsFirst,subjectsSecond:e.subjectsSecond,subjectsThird:e.subjectsThird,subjectsFourth:e.subjectsFourth,name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});s.default=e=>{let s,{department:t}=e,{gpaFirst:l,gpaSecond:g,gpaThird:m,gpaFourth:v,subjectsFirst:j,subjectsSecond:y,subjectsThird:f,subjectsFourth:N,name:b,fname:k,mname:S,roll:C,reg:E,session:w}=(0,x.v9)(p),F=(0,x.I0)(),[T,R]=(0,r.useState)(""),[_,z]=(0,r.useState)(!1),A=(0,r.useRef)(null);u.Yd.forEach(e=>{e.path===t&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,r.useEffect)(()=>{_?document.body.style.overflow="hidden":document.body.style.overflow="auto";let e=[l,g,m,v];R((0,o.C8)(e))},[_,l,g,m,v]);let B=e=>{"Enter Your Name"===e.target.value?e.target.value="":F({type:"SET_NAME",payload:e.target.value})},I=e=>{"Enter Father's Name"===e.target.value?e.target.value="":F({type:"SET_F_NAME",payload:e.target.value})},M=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":F({type:"SET_M_NAME",payload:e.target.value})},P=e=>{"Enter Roll"===e.target.value?e.target.value="":F({type:"SET_ROLL",payload:e.target.value})},Y=e=>{"Enter Registration"===e.target.value?e.target.value="":F({type:"SET_REG",payload:e.target.value})},G=e=>{"Enter Session"===e.target.value?e.target.value="":F({type:"SET_SESSION",payload:e.target.value})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,a.jsx)("button",{style:{fontSize:"40px"},onClick:()=>z(!0),children:(0,a.jsx)(i.TvB,{})}),"Download Marksheet"]}),_&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsxs)("div",{className:"inner-modal",children:[(0,a.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,a.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,a.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,a.jsx)("div",{ref:A,id:"marksheet",children:(0,a.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,a.jsxs)("div",{className:"nu-details",children:[(0,a.jsx)("img",{className:"marksheet-logo",src:h.default.src,width:100,alt:"NU"}),(0,a.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,a.jsx)("h2",{style:{fontSize:"35px"},children:"Bachelor Degree Honours Examination"}),(0,a.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,a.jsxs)("div",{className:"personal-details",children:[(0,a.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,a.jsx)("input",{onClick:e=>B(e),onChange:e=>B(e),value:b})]}),(0,a.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,a.jsx)("input",{onClick:e=>I(e),onChange:e=>I(e),value:k})]}),(0,a.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,a.jsx)("input",{onClick:e=>M(e),onChange:e=>M(e),value:S})]}),(0,a.jsxs)("div",{className:"even",children:["Roll:"," ",(0,a.jsx)("input",{onClick:e=>P(e),onChange:e=>P(e),value:C})]}),(0,a.jsxs)("div",{className:"",children:["Registration:"," ",(0,a.jsx)("input",{onClick:e=>Y(e),onChange:e=>Y(e),value:E})]}),(0,a.jsxs)("div",{className:"even",children:["Session:"," ",(0,a.jsx)("input",{onClick:e=>G(e),onChange:e=>G(e),value:w})]}),(0,a.jsxs)("div",{className:"",children:["Subject: ",(0,a.jsx)("span",{children:s})]}),(0,a.jsxs)("div",{className:"even last-row",children:["Result: ",(0,a.jsxs)("span",{children:["CGPA: ",parseFloat(T).toFixed(2)]})]})]}),(0,a.jsxs)("div",{className:"table-marksheet",children:[(0,a.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise Letter Grade"}),(0,a.jsx)("div",{style:{width:"100%",display:"flex",gap:"10px",boxShadow:"0 0 2px 2px black",padding:"10px"},children:[j,y,f,N].map((e,t)=>(0,a.jsxs)("div",{style:{width:"25%",boxShadow:"0 0 2px 2px black",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},className:"year-marksheet",children:[(0,a.jsxs)("h1",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"30px",borderBottom:"2px solid black",backgroundColor:"#eaeaea"},children:[0===t?"First":1===t?"Second":2===t?"Third":"Fourth"," ","Year"]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",style:{width:"60%"},children:"Course Code (Credit)"}),(0,a.jsx)("div",{className:"col grade-marksheet",style:{width:"40%"},children:"Grade (Letter)"})]},s.id),e.map(e=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,a.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,o.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,a.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,o.yQ)(e.grade),")")]})]},e.id)),(0,a.jsxs)("div",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"25px",marginTop:"auto",borderTop:"2px solid black"},children:["GPA:"," ",0===t?l:1===t?g:2===t?m:v]})]},t))})]})]})})}),(0,a.jsxs)("div",{className:"marksheet-buttons",children:[(0,a.jsx)(n(),{trigger:()=>(0,a.jsxs)("button",{onClick:()=>z(!1),children:[(0,a.jsx)(i.aBF,{})," Pdf"]}),content:()=>A.current}),(0,a.jsx)(c.Z,{targetId:"marksheet",year:"Honours"})]}),(0,a.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content",fontSize:"25px"},onClick:()=>z(!1),children:[(0,a.jsx)(d.$iT,{})," Cancel"]})]})})]})}},1647:function(e,s,t){"use strict";var a=t(7437),l=t(5799),n=t(7293),r=t(2265),i=t(1942);s.Z=e=>{let{targetId:s,year:t}=e,[d,c]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>{c(!0);let e=document.getElementById(s);e.style.overflow="visible",(0,n.YM)(e,{cacheBust:!0,quality:1}).then(e=>{let s=document.createElement("a");s.href=e,s.download="Marksheet-".concat((0,l.Y7)(t),"-").concat("Honours"===t?"":"Year",".png"),s.click(),c(!1)}).catch(e=>{console.error("Error taking screenshot:",e),c(!1)})},children:[(0,a.jsx)(i.aBF,{})," Image"]}),d&&(0,a.jsx)("div",{style:{height:"100%",width:"100%",position:"fixed",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"20",top:0,left:0},children:(0,a.jsx)("h1",{style:{fontSize:"35px",color:"white"},children:"Preparing Image..."})})]})}},280:function(e,s,t){"use strict";t.d(s,{default:function(){return m}});var a=t(7437),l=t(1444),n=t(6758),r=t.n(n),i=t(2265),d=t(1942),c=t(7432),o=t(1647),h=t(5799),u=t(9816);t(6648);var x=t(143);let p=e=>({name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});var g=e=>{let s,{year:t,subjects:n,department:g}=e,m=(0,l.v9)(e=>e["gpa".concat((0,h.Y7)(t))]),{name:v,fname:j,mname:y,roll:f,reg:N,session:b}=(0,l.v9)(p),[k,S]=(0,i.useState)(!1),C=(0,i.useRef)(null);x.Yd.forEach(e=>{e.path===g&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,i.useEffect)(()=>{k?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[k]);let E=(0,l.I0)(),w=e=>{"Enter Your Name"===e.target.value?e.target.value="":E({type:"SET_NAME",payload:e.target.value})},F=e=>{"Enter Father's Name"===e.target.value?e.target.value="":E({type:"SET_F_NAME",payload:e.target.value})},T=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":E({type:"SET_M_NAME",payload:e.target.value})},R=e=>{"Enter Roll"===e.target.value?e.target.value="":E({type:"SET_ROLL",payload:e.target.value})},_=e=>{"Enter Registration"===e.target.value?e.target.value="":E({type:"SET_REG",payload:e.target.value})},z=e=>{"Enter Session"===e.target.value?e.target.value="":E({type:"SET_SESSION",payload:e.target.value})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{style:{fontSize:"30px"},onClick:()=>S(!0),children:(0,a.jsx)(d.TvB,{})}),k&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsxs)("div",{className:"inner-modal",children:[(0,a.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,a.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,a.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,a.jsx)("div",{ref:C,id:"marksheet",children:(0,a.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,a.jsxs)("div",{className:"nu-details",children:[(0,a.jsx)("img",{className:"marksheet-logo",src:u.default.src,width:100,alt:"NU"}),(0,a.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,a.jsxs)("h2",{style:{fontSize:"35px"},children:["Honours ",(0,h.Y7)(t)," Year Examination"]}),(0,a.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,a.jsxs)("div",{className:"personal-details",children:[(0,a.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,a.jsx)("input",{onClick:e=>w(e),onChange:e=>w(e),value:v})]}),(0,a.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,a.jsx)("input",{onClick:e=>F(e),onChange:e=>F(e),value:j})]}),(0,a.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,a.jsx)("input",{onClick:e=>T(e),onChange:e=>T(e),value:y})]}),(0,a.jsxs)("div",{className:"even",children:["Roll:"," ",(0,a.jsx)("input",{onClick:e=>R(e),onChange:e=>R(e),value:f})]}),(0,a.jsxs)("div",{className:"",children:["Registration:"," ",(0,a.jsx)("input",{onClick:e=>_(e),onChange:e=>_(e),value:N})]}),(0,a.jsxs)("div",{className:"even",children:["Session:"," ",(0,a.jsx)("input",{onClick:e=>z(e),onChange:e=>z(e),value:b})]}),(0,a.jsxs)("div",{className:"",children:["Subject: ",(0,a.jsx)("span",{children:s})]}),(0,a.jsxs)("div",{className:"even last-row",children:["CGPA: ",(0,a.jsx)("span",{children:parseFloat(m).toFixed(2)})]})]}),(0,a.jsxs)("div",{className:"table-marksheet",children:[(0,a.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise grade"}),(0,a.jsxs)("div",{className:"row heading",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:"Course Code"}),(0,a.jsx)("div",{className:"col subject-marksheet",children:"Course Title"}),(0,a.jsx)("div",{className:"col credit-marksheet",children:"Credit"}),(0,a.jsx)("div",{className:"col grade-head grade-marksheet",children:"Grade (Ltr.)"})]}),n.map((e,s)=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,a.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,a.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,a.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,a.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,a.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,a.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id))]})]})})}),(0,a.jsxs)("div",{className:"marksheet-buttons",children:[(0,a.jsx)(r(),{trigger:()=>(0,a.jsxs)("button",{onClick:()=>S(!1),children:[(0,a.jsx)(d.aBF,{})," Pdf"]}),content:()=>C.current}),(0,a.jsx)(o.Z,{targetId:"marksheet",year:t})]}),(0,a.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content"},onClick:()=>S(!1),children:[(0,a.jsx)(c.$iT,{})," Cancel"]})]})})]})},m=e=>{let{year:s,department:t}=e,n=(0,l.v9)(e=>e["subjects".concat((0,h.Y7)(s))]),r=(0,h.sW)(n,s),i="black",d="Result",c=parseFloat(r).toFixed(2);return"NaN"===c&&(c="0.00"),(0,l.I0)()({type:"SET_".concat(s.toUpperCase(),"_GPA"),payload:c}),c>=3?(i="green",d="1st Class"):c>=2.25?(i="rgb(0, 200, 111)",d="2nd Class"):c>=2?(i="tomato",d="3rd Class"):c<2&&c>0&&(i="red",d="Not Promoted"),(0,a.jsxs)("div",{className:"result",children:[(0,a.jsxs)("div",{children:[s.charAt(0).toUpperCase()+s.slice(1)," Year CGPA:"," ",(0,a.jsxs)("span",{style:{color:i,fontWeight:"700",backgroundColor:"white",borderRadius:"20px",padding:"5px 10px",lineHeight:"20px",margin:"0 5px",fontSize:"30px",border:"1px solid ".concat(i),lineHeight:"20px"},children:[c,(0,a.jsx)("br",{}),d&&(0,a.jsx)("span",{style:{fontSize:"13px",lineHeight:"10px"},children:d})]})]}),(0,a.jsx)(g,{year:s,subjects:n,department:t})]})}},8736:function(e,s,t){"use strict";var a=t(7437),l=t(2265),n=t(1444);s.default=e=>{let{i:s,subjects:t,year:r}=e,i=(0,l.useRef)(null),d=(0,n.I0)();return(0,l.useEffect)(()=>{d({type:"SUBJECT_".concat(r.toUpperCase()),payload:t[r]})},[t,d]),(0,l.useEffect)(()=>{let e=()=>{if(null==i?void 0:i.current){let{top:e}=i.current.getBoundingClientRect();e<=100&&d({type:"SET_CURRENT",payload:s})}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[i,s,d]),(0,a.jsx)("span",{ref:i,className:"".concat(r,"-year")})}}},function(e){e.O(0,[957,950,699,574,780,186,460,971,190,744],function(){return e(e.s=6958)}),_N_E=e.O()}]);