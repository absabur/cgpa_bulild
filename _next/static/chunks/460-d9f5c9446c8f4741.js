"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{143:function(e,i,n){n.d(i,{Yd:function(){return c},Tb:function(){return o}}),n(7437);var a=n(1942),t=n(5233),r=n(2655);let o=[{id:1,name:"A+",value:4},{id:2,name:"A",value:3.75},{id:3,name:"A-",value:3.5},{id:4,name:"B+",value:3.25},{id:5,name:"B",value:3},{id:6,name:"B-",value:2.75},{id:7,name:"C+",value:2.5},{id:8,name:"C",value:2.25},{id:9,name:"D",value:2},{id:10,name:"F",value:0}],c=[{id:2501,name:"Accounting",path:"accounting"},{id:3901,name:"Anthropology",path:"anthropology"},{id:1201,name:"Arabic",path:"arabic"},{id:1001,name:"Bangla",path:"bangla"},{id:3001,name:"Botany",path:"botany"},{id:2901,name:"Biochemistry and Molecular Biology",path:"biochemistry-and-molecular-biology"},{id:2801,name:"Chemistry",path:"chemistry"},{id:2201,name:"Economics",path:"economics"},{id:1101,name:"English",path:"english"},{id:4401,name:"Environment Science",path:"environment-science"},{id:2401,name:"Finance And Banking",path:"finance-and-banking"},{id:3201,name:"Geography and Environment",path:"geography-and-environment"},{id:1501,name:"History",path:"history"},{id:3501,name:"Home Economics",path:"home-economics"},{id:1601,name:"Islamic History and Culture",path:"islamic-history-and-culture"},{id:1801,name:"Islamic Studies",path:"islamic-studies"},{id:3801,name:"Library and Information Science",path:"library-and-information-science"},{id:2601,name:"Management",path:"management "},{id:2301,name:"Marketing",path:"marketing"},{id:3701,name:"Mathematics",path:"mathematics"},{id:1701,name:"Philosophy",path:"philosophy"},{id:2701,name:"Physics",path:"physics"},{id:1901,name:"Political Science",path:"political-science"},{id:3401,name:"Psychology",path:"psychology"},{id:1301,name:"Sanskrit",path:"sanskrit"},{id:2101,name:"Social Work",path:"social-work"},{id:2001,name:"Sociology",path:"sociology"},{id:3301,name:"Soil Science",path:"soil-science"},{id:3601,name:"Statistics",path:"statistics"},{id:3101,name:"Zoology",path:"zoology"}];r.rVp,a.R9i,a.ltd,a.NML,t.i7p,a.Hjm},5799:function(e,i,n){function a(e){return e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}n.d(i,{C8:function(){return c},Ez:function(){return d},OZ:function(){return r},Y7:function(){return a},pE:function(){return o},sW:function(){return t},yQ:function(){return l}}),n(143);let t=e=>{let i=0,n=0;return e.forEach(e=>{void 0!==e.grade?(n+=e.credits,i+=e.grade*e.credits):e.options&&!e.ignore&&(e.pair?n+=6*e.allow:e.options.length&&(n+=e.options[0].credits*e.allow),e.options.forEach(e=>{e.selected&&(i+=e.grade*e.credits)}))}),i/n},r=(e,i,n,a,t)=>{let r;let o=a[e][t].options.map(e=>e.id===i?{...e,grade:n,selected:null!==n}:e),c=0,l=0;o.forEach(e=>{e.selected&&(4===e.credits&&c++,2===e.credits&&l++)});let d=a[e][t].allow,s=o.map(e=>({...e,disable:4===e.credits&&c>=d&&!e.selected||2===e.credits&&l>=d&&!e.selected})),m={...a,[e]:a[e].map((e,i)=>i===t?{...e,options:s}:e)};return m[e].forEach((e,i)=>{if("ignore"in e)for(let n of e.options)n.selected&&(r=i)}),r?"ignore"in m[e][r-1]?m[e][r-1].ignore=!0:m[e].length>r+1&&"ignore"in m[e][r+1]&&(m[e][r+1].ignore=!0):m[e]=m[e].map(e=>"ignore"in e?{...e,ignore:!1}:e),m},o=(e,i,n,a)=>{let t=a[e].map(e=>e.id===i?{...e,grade:n}:e);return{...a,[e]:t}},c=e=>{let i=e.filter(e=>parseFloat(e)>=2),n=i.reduce((e,i)=>e+parseFloat(i),0),a=i.length;return a?(n/a).toFixed(2):0},l=e=>{if(4===e)return"A+";if(3.75===e)return"A";if(3.5===e)return"A-";if(3.25===e)return"B+";if(3===e)return"B";if(2.75===e)return"B-";if(2.5===e)return"C+";else if(2.25===e)return"C";else if(2===e)return"D";else return"F"},d=e=>{let i="black",n=parseFloat(e);return n>=3?i="green":n>=2.25?i="rgb(0, 200, 111)":n>=2?i="tomato":n<2&&n>0&&(i="red"),i}},9816:function(e,i,n){n.r(i),i.default={src:"/_next/static/media/favicon.3ed3dc2a.ico",height:1745,width:1200,blurWidth:0,blurHeight:0}}}]);