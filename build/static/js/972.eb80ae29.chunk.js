"use strict";(self.webpackChunkuser_app=self.webpackChunkuser_app||[]).push([[972],{101:(e,n,t)=>{t.d(n,{Z:()=>a});t(791);var r=t(184);const s=e=>{let{width:n="16",height:t="16",viewBox:s="0 0 16 16",...o}=e;return(0,r.jsx)("svg",{width:n,height:t,viewBox:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M12.3359 9.46094L8.39844 13.5859C8.28125 13.7031 8.14062 13.75 8 13.75C7.83594 13.75 7.69531 13.7031 7.57812 13.5859L3.64062 9.46094C3.42969 9.22656 3.42969 8.875 3.66406 8.66406C3.875 8.45312 4.25 8.45312 4.46094 8.6875L7.4375 11.8047V3.83594C7.4375 3.50781 7.67188 3.27344 7.97656 3.27344C8.25781 3.27344 8.5625 3.50781 8.5625 3.83594V11.8047L11.5156 8.6875C11.7266 8.45312 12.1016 8.45312 12.3125 8.66406C12.5469 8.875 12.5469 9.22656 12.3359 9.46094Z",fill:"currentColor"})})},o=e=>{let{width:n="16",height:t="16",viewBox:s="0 0 16 16",...o}=e;return(0,r.jsx)("svg",{width:n,height:t,viewBox:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M3.64062 7.5625L7.57812 3.4375C7.69531 3.32031 7.83594 3.27344 8 3.27344C8.14062 3.27344 8.28125 3.32031 8.39844 3.4375L12.3359 7.5625C12.5469 7.79688 12.5469 8.14844 12.3125 8.35938C12.1016 8.57031 11.7266 8.57031 11.5156 8.33594L8.5625 5.21875V13.1875C8.5625 13.5156 8.30469 13.75 8 13.75C7.71875 13.75 7.4375 13.5156 7.4375 13.1875V5.21875L4.46094 8.33594C4.25 8.57031 3.875 8.57031 3.66406 8.35938C3.42969 8.14844 3.42969 7.77344 3.64062 7.5625Z",fill:"currentColor"})})};var l=t(511);const a=e=>{let{data:n,columns:t,onSort:a,sortedField:d,sortOrder:i,actionsContent:c}=e;return(0,r.jsx)(l.y6,{children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map((e=>(0,r.jsxs)("th",{onClick:()=>"actions"!==e.key&&a(e.key),children:[e.label," ",d===e.key&&"actions"!==e.key&&("asc"===i?(0,r.jsx)(o,{}):(0,r.jsx)(s,{}))]},e.key)))})}),(0,r.jsx)("tbody",{children:n.map((e=>(0,r.jsx)("tr",{children:t.map((n=>"actions"===n.key&&c?(0,r.jsx)("td",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:c&&c(e)},n.key):(0,r.jsx)("td",{children:e[n.key]},n.key)))},e.id)))})]})})}},18:(e,n,t)=>{t.d(n,{y:()=>o});var r=t(294),s=t(848);const o=r.Z.create({baseURL:s._n,withCredentials:!0})},972:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(101),s=t(791),o=t(689),l=t(18);const a=()=>{const{userId:e}=(0,o.UO)(),[n,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(null),[d,i]=(0,s.useState)("asc");(0,s.useEffect)((()=>{(async()=>{try{if(!e)return;const{data:n}=await function(e){return(0,l.y)({url:"/posts",method:"GET",params:{userId:e}})}(+e);t(n)}catch(n){console.log("error posts: ",n)}})()}),[e]);return{models:{sortedUserPosts:r?[...n].sort(((e,n)=>{const t=e[r],s=n[r];return t<s?"asc"===d?-1:1:t>s?"asc"===d?1:-1:0})):n,sortedField:r,sortOrder:d},operations:{handleSort:e=>{a(e),i((e=>"asc"===e?"desc":"asc"))}}}};var d=t(511),i=t(848),c=t(184);const h=()=>{const{models:{sortedUserPosts:e,sortedField:n,sortOrder:t},operations:{handleSort:s}}=a();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Dx,{children:"User Posts List"}),e.length>0&&(0,c.jsx)(r.Z,{data:e,columns:i.HA,onSort:s,sortedField:n,sortOrder:t})]})}},511:(e,n,t)=>{t.d(n,{Dx:()=>p,Lq:()=>x,SP:()=>h,wm:()=>u,y6:()=>c});var r,s,o,l,a,d=t(168),i=t(978);const c=i.ZP.div(r||(r=(0,d.Z)(["\n  margin: 20px;\n  font-family: Arial, sans-serif;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n\n    th,\n    td {\n      border: 1px solid #ddd;\n      padding: 8px;\n      text-align: left;\n    }\n\n    th {\n      cursor: pointer;\n      background-color: #f2f2f2;\n    }\n\n    th:hover {\n      background-color: #ddd;\n    }\n\n    th:active {\n      background-color: #c6c6c6;\n    }\n\n    tr:hover {\n      background-color: #f5f5f5;\n    }\n  }\n"]))),h=i.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 25px;\n\n  input {\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: 1px solid #333;\n  }\n"]))),p=i.ZP.h3(o||(o=(0,d.Z)(["\n  text-align: center;\n  font-size: 25px;\n  margin: 15px 0px;\n"]))),x=i.ZP.h3(l||(l=(0,d.Z)(["\n  text-align: center;\n  font-size: 23px;\n  font-style: oblique;\n"]))),u=i.ZP.div(a||(a=(0,d.Z)(["\n  text-align: center;\n  button {\n    background-color: rgb(40, 196, 219, 1);\n    border: none;\n    border-radius: 4px;\n    padding: 10px 25px;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n"])))},848:(e,n,t)=>{t.d(n,{HA:()=>l,Nz:()=>s,_n:()=>r,qq:()=>o});const r="https://jsonplaceholder.typicode.com",s=[{key:"name",label:"Name"},{key:"username",label:"Username"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"actions",label:""}],o=[{key:"id",label:"Id"},{key:"title",label:"Title"}],l=[{key:"id",label:"Id"},{key:"title",label:"Title"},{key:"body",label:"Body"}]}}]);
//# sourceMappingURL=972.eb80ae29.chunk.js.map