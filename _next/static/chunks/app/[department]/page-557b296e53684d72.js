(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{7151:function(e,s,a){Promise.resolve().then(a.bind(a,5085)),Promise.resolve().then(a.bind(a,8803)),Promise.resolve().then(a.bind(a,1715)),Promise.resolve().then(a.bind(a,6490)),Promise.resolve().then(a.bind(a,7493)),Promise.resolve().then(a.bind(a,280)),Promise.resolve().then(a.bind(a,8736))},5085:function(e,s,a){"use strict";var t=a(7437),l=a(2265);s.default=()=>((0,l.useEffect)(()=>{let e=setInterval(()=>{if(window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),clearInterval(e)}catch(e){console.error("Adsbygoogle script push error:",e)}},500);return()=>clearInterval(e)},[]),(0,t.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center",margin:"10px 0"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-7695470547692086","data-ad-slot":"7976391118"}))},8803:function(e,s,a){"use strict";var t=a(7437),l=a(5799),n=a(2265),r=a(1444);s.default=e=>{let{index:s,year:a,optionIndex:i}=e,[d,o]=(0,n.useState)(!1),[c,h]=(0,n.useState)(!1),u=(0,r.v9)(e=>e["subjects".concat((0,l.Y7)(a))]);return(0,n.useEffect)(()=>{u.length>0&&(h(u[s].ignore),o(u[s].options[i].disable))},[u]),(0,t.jsx)(t.Fragment,{children:(d||c)&&(0,t.jsx)("div",{className:"disable",children:"Selected Maximum"})})}},1715:function(e,s,a){"use strict";var t=a(7437),l=a(5799),n=a(2265),r=a(1444);let i=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth});s.default=()=>{let{gpaFirst:e,gpaSecond:s,gpaThird:a,gpaFourth:d}=(0,r.v9)(i),[o,c]=(0,n.useState)("F"),[h,u]=(0,n.useState)(0),[x,p]=(0,n.useState)("black"),[g,m]=(0,n.useState)("Result");(0,n.useEffect)(()=>{let t=(0,l.C8)([e,s,a,d]);u(t),v(t)},[e,s,a,d]);let v=e=>{let s,a;e>=3?(s="green",a="1st Class"):e>=2.25?(s="rgb(0, 200, 111)",a="2nd Class"):e>=2?(s="tomato",a="3rd Class"):(s="red",a="Fail"),c(e>=4?"A+":e>=3.75?"A":e>=3.5?"A-":e>=3.25?"B+":e>=3?"B":e>=2.75?"B-":e>=2.5?"C+":e>=2.25?"C":e>=2?"D":"F"),p(s),m(0===e?"Result":a)};return(0,t.jsxs)("div",{id:"result",className:"cgpa final last",style:{position:"static"},children:[(0,t.jsx)("span",{style:{color:"black",fontSize:"20px"},children:"Over-all"}),(0,t.jsx)("div",{className:"circle-outside",style:{background:"conic-gradient(".concat(x," ").concat(360*parseFloat(h)/4,"deg, rgba(0,0,0,0.2) 0)")},children:(0,t.jsxs)("div",{className:"circle-inside",children:[(0,t.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,t.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"CGPA: "}),0===h?"0.00":h]}),(0,t.jsxs)("span",{style:{color:x},className:"final-grade-cpga",children:[(0,t.jsx)("span",{style:{color:"black",fontSize:"18px"},children:"Grade: "}),o]})]})}),(0,t.jsx)("span",{style:{color:x,fontSize:"20px"},children:g})]})}},6490:function(e,s,a){"use strict";var t=a(7437),l=a(2265),n=a(143),r=a(7432),i=a(1444),d=a(5799);s.default=e=>{let{id:s,year:a,handleOption:o,sub:c}=e,[h,u]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1),g=(0,i.v9)(e=>e["subjects".concat((0,d.Y7)(a))]),[m,v]=(0,l.useState)(null),j=(0,i.I0)(),y=e=>{let t;v(e),t="handleGradeOption"===o?(0,d.OZ)(a,s,null===e?null:n.Tb[e-1].value,g.length>0?{...c.subjects,[a]:g}:c.subjects,c.index):(0,d.pE)(a,s,null===e?null:n.Tb[e-1].value,g.length>0?{...c.subjects,[a]:g}:c.subjects,c.index),j({type:"SUBJECT_".concat(a.toUpperCase()),payload:t[a]})};return(0,l.useEffect)(()=>{"handleGradeOption"===o&&g.length>0&&(p(g[c.index].ignore),u(g[c.index].options[c.optionIndex].disable))},[g]),(0,t.jsx)(t.Fragment,{children:!h&&!x&&(0,t.jsx)(t.Fragment,{children:m?(0,t.jsxs)("div",{style:{position:"relative",width:"120px"},children:[(0,t.jsx)("span",{onClick:()=>y(null),className:"cross",children:(0,t.jsx)(r.$iT,{})}),n.Tb[m-1].name]}):n.Tb.map(e=>(0,t.jsx)("div",{className:"grades",onClick:()=>y(e.id),children:e.name},e.id))})})}},7493:function(e,s,a){"use strict";var t=a(7437),l=a(6758),n=a.n(l),r=a(2265),i=a(1942),d=a(7432),o=a(1647),c=a(5799),h=a(9816),u=a(143),x=a(1444);let p=e=>({gpaFirst:e.gpaFirst,gpaSecond:e.gpaSecond,gpaThird:e.gpaThird,gpaFourth:e.gpaFourth,subjectsFirst:e.subjectsFirst,subjectsSecond:e.subjectsSecond,subjectsThird:e.subjectsThird,subjectsFourth:e.subjectsFourth,name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});s.default=e=>{let s,{department:a}=e,{gpaFirst:l,gpaSecond:g,gpaThird:m,gpaFourth:v,subjectsFirst:j,subjectsSecond:y,subjectsThird:f,subjectsFourth:N,name:b,fname:k,mname:S,roll:C,reg:E,session:w}=(0,x.v9)(p),F=(0,x.I0)(),[T,R]=(0,r.useState)(""),[_,z]=(0,r.useState)(!1),A=(0,r.useRef)(null);u.Yd.forEach(e=>{e.path===a&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,r.useEffect)(()=>{_?document.body.style.overflow="hidden":document.body.style.overflow="auto";let e=[l,g,m,v];R((0,c.C8)(e))},[_,l,g,m,v]);let I=e=>{"Enter Your Name"===e.target.value?e.target.value="":F({type:"SET_NAME",payload:e.target.value})},B=e=>{"Enter Father's Name"===e.target.value?e.target.value="":F({type:"SET_F_NAME",payload:e.target.value})},P=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":F({type:"SET_M_NAME",payload:e.target.value})},M=e=>{"Enter Roll"===e.target.value?e.target.value="":F({type:"SET_ROLL",payload:e.target.value})},Y=e=>{"Enter Registration"===e.target.value?e.target.value="":F({type:"SET_REG",payload:e.target.value})},G=e=>{"Enter Session"===e.target.value?e.target.value="":F({type:"SET_SESSION",payload:e.target.value})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)("button",{style:{fontSize:"40px"},onClick:()=>z(!0),children:(0,t.jsx)(i.TvB,{})}),"Download Marksheet"]}),_&&(0,t.jsx)("div",{className:"modal",children:(0,t.jsxs)("div",{className:"inner-modal",children:[(0,t.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,t.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,t.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,t.jsx)("div",{ref:A,id:"marksheet",children:(0,t.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,t.jsxs)("div",{className:"nu-details",children:[(0,t.jsx)("img",{className:"marksheet-logo",src:h.default.src,width:100,alt:"NU"}),(0,t.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,t.jsx)("h2",{style:{fontSize:"35px"},children:"Bachelor Degree Honours Examination"}),(0,t.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,t.jsxs)("div",{className:"personal-details",children:[(0,t.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,t.jsx)("input",{onClick:e=>I(e),onChange:e=>I(e),value:b})]}),(0,t.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,t.jsx)("input",{onClick:e=>B(e),onChange:e=>B(e),value:k})]}),(0,t.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,t.jsx)("input",{onClick:e=>P(e),onChange:e=>P(e),value:S})]}),(0,t.jsxs)("div",{className:"even",children:["Roll:"," ",(0,t.jsx)("input",{onClick:e=>M(e),onChange:e=>M(e),value:C})]}),(0,t.jsxs)("div",{className:"",children:["Registration:"," ",(0,t.jsx)("input",{onClick:e=>Y(e),onChange:e=>Y(e),value:E})]}),(0,t.jsxs)("div",{className:"even",children:["Session:"," ",(0,t.jsx)("input",{onClick:e=>G(e),onChange:e=>G(e),value:w})]}),(0,t.jsxs)("div",{className:"",children:["Subject: ",(0,t.jsx)("span",{children:s})]}),(0,t.jsxs)("div",{className:"even last-row",children:["Result: ",(0,t.jsxs)("span",{children:["CGPA: ",parseFloat(T).toFixed(2)]})]})]}),(0,t.jsxs)("div",{className:"table-marksheet",children:[(0,t.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise Letter Grade"}),(0,t.jsx)("div",{style:{width:"100%",display:"flex",gap:"10px",boxShadow:"0 0 2px 2px black",padding:"10px"},children:[j,y,f,N].map((e,a)=>(0,t.jsxs)("div",{style:{width:"25%",boxShadow:"0 0 2px 2px black",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},className:"year-marksheet",children:[(0,t.jsxs)("h1",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"30px",borderBottom:"2px solid black",backgroundColor:"#eaeaea"},children:[0===a?"First":1===a?"Second":2===a?"Third":"Fourth"," ","Year"]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col code-marksheet",style:{width:"60%"},children:"Course Code (Credit)"}),(0,t.jsx)("div",{className:"col grade-marksheet",style:{width:"40%"},children:"Grade (Letter)"})]},s.id),e.map(e=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,t.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,c.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col code-marksheet",style:{width:"60%"},children:[e.id," (",e.credits,")"]}),(0,t.jsxs)("div",{className:"col grade-marksheet",style:{width:"40%"},children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,c.yQ)(e.grade),")")]})]},e.id)),(0,t.jsxs)("div",{style:{width:"100%",textAlign:"center",padding:"10px",fontSize:"25px",marginTop:"auto",borderTop:"2px solid black"},children:["GPA:"," ",0===a?l:1===a?g:2===a?m:v]})]},a))})]})]})})}),(0,t.jsxs)("div",{className:"marksheet-buttons",children:[(0,t.jsx)(n(),{trigger:()=>(0,t.jsxs)("button",{onClick:()=>z(!1),children:[(0,t.jsx)(i.aBF,{})," Pdf"]}),content:()=>A.current}),(0,t.jsx)(o.Z,{targetId:"marksheet",year:"Honours"})]}),(0,t.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content",fontSize:"25px"},onClick:()=>z(!1),children:[(0,t.jsx)(d.$iT,{})," Cancel"]})]})})]})}},1647:function(e,s,a){"use strict";var t=a(7437),l=a(5799),n=a(7293),r=a(2265),i=a(1942);s.Z=e=>{let{targetId:s,year:a}=e,[d,o]=(0,r.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{onClick:()=>{o(!0);let e=document.getElementById(s);e.style.overflow="visible",(0,n.YM)(e,{cacheBust:!0,quality:1}).then(e=>{let s=document.createElement("a");s.href=e,s.download="Marksheet-".concat((0,l.Y7)(a),"-").concat("Honours"===a?"":"Year",".png"),s.click(),o(!1)}).catch(e=>{console.error("Error taking screenshot:",e),o(!1)})},children:[(0,t.jsx)(i.aBF,{})," Image"]}),d&&(0,t.jsx)("div",{style:{height:"100%",width:"100%",position:"fixed",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"20",top:0,left:0},children:(0,t.jsx)("h1",{style:{fontSize:"35px",color:"white"},children:"Preparing Image..."})})]})}},280:function(e,s,a){"use strict";a.d(s,{default:function(){return m}});var t=a(7437),l=a(1444),n=a(6758),r=a.n(n),i=a(2265),d=a(1942),o=a(7432),c=a(1647),h=a(5799),u=a(9816);a(6648);var x=a(143);let p=e=>({name:e.name,fname:e.fname,mname:e.mname,roll:e.roll,reg:e.reg,session:e.session});var g=e=>{let s,{year:a,subjects:n,department:g}=e,m=(0,l.v9)(e=>e["gpa".concat((0,h.Y7)(a))]),{name:v,fname:j,mname:y,roll:f,reg:N,session:b}=(0,l.v9)(p),[k,S]=(0,i.useState)(!1),C=(0,i.useRef)(null);x.Yd.forEach(e=>{e.path===g&&(s="[".concat(e.id,"] ").concat(e.name))}),(0,i.useEffect)(()=>{k?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[k]);let E=(0,l.I0)(),w=e=>{"Enter Your Name"===e.target.value?e.target.value="":E({type:"SET_NAME",payload:e.target.value})},F=e=>{"Enter Father's Name"===e.target.value?e.target.value="":E({type:"SET_F_NAME",payload:e.target.value})},T=e=>{"Enter Mother's Name"===e.target.value?e.target.value="":E({type:"SET_M_NAME",payload:e.target.value})},R=e=>{"Enter Roll"===e.target.value?e.target.value="":E({type:"SET_ROLL",payload:e.target.value})},_=e=>{"Enter Registration"===e.target.value?e.target.value="":E({type:"SET_REG",payload:e.target.value})},z=e=>{"Enter Session"===e.target.value?e.target.value="":E({type:"SET_SESSION",payload:e.target.value})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{style:{fontSize:"30px"},onClick:()=>S(!0),children:(0,t.jsx)(d.TvB,{})}),k&&(0,t.jsx)("div",{className:"modal",children:(0,t.jsxs)("div",{className:"inner-modal",children:[(0,t.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid black"},children:(0,t.jsx)("span",{style:{fontSize:"35px"},children:"Marksheet Preview"})}),(0,t.jsx)("div",{style:{width:"100%",height:"90%",overflow:"auto"},children:(0,t.jsx)("div",{ref:C,id:"marksheet",children:(0,t.jsxs)("div",{style:{padding:"20px",width:"100%"},children:[(0,t.jsxs)("div",{className:"nu-details",children:[(0,t.jsx)("img",{className:"marksheet-logo",src:u.default.src,width:100,alt:"NU"}),(0,t.jsx)("h1",{style:{fontSize:"40px"},children:"National University, Bangladesh"}),(0,t.jsxs)("h2",{style:{fontSize:"35px"},children:["Honours ",(0,h.Y7)(a)," Year Examination"]}),(0,t.jsx)("h3",{style:{fontSize:"30px"},children:"Result Sheet"})]}),(0,t.jsxs)("div",{className:"personal-details",children:[(0,t.jsxs)("div",{className:"name",children:["Name Of Student:"," ",(0,t.jsx)("input",{onClick:e=>w(e),onChange:e=>w(e),value:v})]}),(0,t.jsxs)("div",{className:"even",children:["Father's Name:"," ",(0,t.jsx)("input",{onClick:e=>F(e),onChange:e=>F(e),value:j})]}),(0,t.jsxs)("div",{className:"",children:["Mother's Name:"," ",(0,t.jsx)("input",{onClick:e=>T(e),onChange:e=>T(e),value:y})]}),(0,t.jsxs)("div",{className:"even",children:["Roll:"," ",(0,t.jsx)("input",{onClick:e=>R(e),onChange:e=>R(e),value:f})]}),(0,t.jsxs)("div",{className:"",children:["Registration:"," ",(0,t.jsx)("input",{onClick:e=>_(e),onChange:e=>_(e),value:N})]}),(0,t.jsxs)("div",{className:"even",children:["Session:"," ",(0,t.jsx)("input",{onClick:e=>z(e),onChange:e=>z(e),value:b})]}),(0,t.jsxs)("div",{className:"",children:["Subject: ",(0,t.jsx)("span",{children:s})]}),(0,t.jsxs)("div",{className:"even last-row",children:["CGPA: ",(0,t.jsx)("span",{children:parseFloat(m).toFixed(2)})]})]}),(0,t.jsxs)("div",{className:"table-marksheet",children:[(0,t.jsx)("h1",{style:{textAlign:"center",fontSize:"30px",padding:"10px",fontWeight:"600"},children:"Course wise grade"}),(0,t.jsxs)("div",{className:"row heading",children:[(0,t.jsx)("div",{className:"col code-marksheet",children:"Course Code"}),(0,t.jsx)("div",{className:"col subject-marksheet",children:"Course Title"}),(0,t.jsx)("div",{className:"col credit-marksheet",children:"Credit"}),(0,t.jsx)("div",{className:"col grade-head grade-marksheet",children:"Grade (Ltr.)"})]}),n.map((e,s)=>e.options&&!e.ignore?e.options.map(e=>{if(!e.disable)return(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,t.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,t.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,t.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&e.grade.toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id)}):e.ignore?void 0:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col code-marksheet",children:e.id}),(0,t.jsx)("div",{className:"col subject-marksheet",children:e.name}),(0,t.jsx)("div",{className:"col credit-marksheet",children:e.credits}),(0,t.jsxs)("div",{className:"col grade-marksheet",children:[null!==e.grade&&parseFloat(e.grade).toFixed(2),null!==e.grade&&" - (".concat((0,h.yQ)(e.grade),")")]})]},e.id))]})]})})}),(0,t.jsxs)("div",{className:"marksheet-buttons",children:[(0,t.jsx)(r(),{trigger:()=>(0,t.jsxs)("button",{onClick:()=>S(!1),children:[(0,t.jsx)(d.aBF,{})," Pdf"]}),content:()=>C.current}),(0,t.jsx)(c.Z,{targetId:"marksheet",year:a})]}),(0,t.jsxs)("button",{style:{display:"flex",gap:"5px",alignItems:"center",padding:"5px 10px",margin:"0 auto 10px auto",backgroundColor:"red",color:"white",borderRadius:"5px",width:"max-content"},onClick:()=>S(!1),children:[(0,t.jsx)(o.$iT,{})," Cancel"]})]})})]})},m=e=>{let{year:s,department:a}=e,n=(0,l.v9)(e=>e["subjects".concat((0,h.Y7)(s))]),r=(0,h.sW)(n,s),i="black",d="Result",o=parseFloat(r).toFixed(2);return"NaN"===o&&(o="0.00"),(0,l.I0)()({type:"SET_".concat(s.toUpperCase(),"_GPA"),payload:o}),o>=3?(i="green",d="1st Class"):o>=2.25?(i="rgb(0, 200, 111)",d="2nd Class"):o>=2?(i="tomato",d="3rd Class"):o<2&&o>0&&(i="red",d="Not Promoted"),(0,t.jsxs)("div",{className:"result",children:[(0,t.jsxs)("div",{children:[s.charAt(0).toUpperCase()+s.slice(1)," Year CGPA:"," ",(0,t.jsxs)("span",{style:{color:i,fontWeight:"700",backgroundColor:"white",borderRadius:"20px",padding:"5px 10px",lineHeight:"20px",margin:"0 5px",fontSize:"30px",border:"1px solid ".concat(i),lineHeight:"20px"},children:[o,(0,t.jsx)("br",{}),d&&(0,t.jsx)("span",{style:{fontSize:"13px",lineHeight:"10px"},children:d})]})]}),(0,t.jsx)(g,{year:s,subjects:n,department:a})]})}},8736:function(e,s,a){"use strict";var t=a(7437),l=a(2265),n=a(1444);s.default=e=>{let{i:s,subjects:a,year:r}=e,i=(0,l.useRef)(null),d=(0,n.I0)();return(0,l.useEffect)(()=>{d({type:"SUBJECT_".concat(r.toUpperCase()),payload:a[r]})},[a,d]),(0,l.useEffect)(()=>{let e=()=>{if(null==i?void 0:i.current){let{top:e}=i.current.getBoundingClientRect();e<=100&&d({type:"SET_CURRENT",payload:s})}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[i,s,d]),(0,t.jsx)("span",{ref:i,className:"".concat(r,"-year")})}}},function(e){e.O(0,[957,950,699,574,780,186,460,971,190,744],function(){return e(e.s=7151)}),_N_E=e.O()}]);