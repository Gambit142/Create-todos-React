(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{16:function(e,t,n){e.exports={item:"TodoItem_item__2zZUg",checkbox:"TodoItem_checkbox__6-4Sb",textInput:"TodoItem_textInput__3dW1Y"}},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(22),i=n.n(a),s=n(8),r=n(20),l=n(13),u=n(9),d=n(40),j=n(3),b=n(15),p=n(16),h=n.n(p),x=n(2),O=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),o=n[0],a=n[1],i=e.list,s=i.completed,r=i.id,l=i.title,d=e.deleteTodoProps,j=e.handleChangeProps,p=e.setUpdate,O={},f={};return o?O.display="none":f.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(x.jsxs)("li",{className:h.a.item,children:[Object(x.jsxs)("div",{onDoubleClick:function(){a(!0)},style:O,children:[Object(x.jsx)("input",{type:"checkbox",className:h.a.checkbox,checked:s,onChange:function(){return j(r)}}),Object(x.jsx)("button",{type:"button",onClick:function(){return d(r)},children:Object(x.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(x.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(x.jsx)("input",{type:"text",style:f,className:h.a.textInput,value:l,onChange:function(e){p(e.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},f=function(e){var t=e.todos,n=e.handleChangeProps,c=e.deleteTodoProps,o=e.setUpdate;return Object(x.jsx)("ul",{children:t.map((function(e){return Object(x.jsx)(O,{list:e,handleChangeProps:n,deleteTodoProps:c,setUpdate:o},e.id)}))})},m=function(){return Object(x.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(x.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},g=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),o=n[0],a=n[1],i=e.addTodoProps;return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===o?alert("Please Write Item"):(i(o),a(""))},className:"form-container",children:[Object(x.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o,name:"title",onChange:function(e){a(e.target.value)}}),Object(x.jsx)("button",{type:"button",className:"input-submit",children:Object(x.jsx)(b.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},y=function(){var e=Object(j.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(x.jsxs)("div",{className:"main__content",children:[Object(x.jsx)("h1",{children:n}),Object(x.jsx)("p",{children:c})]})},v=function(){var e=Object(j.g)(),t=e.url,n=e.path;return Object(x.jsxs)("div",{className:"about__content",children:[Object(x.jsxs)("ul",{className:"about__list",children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(x.jsx)(j.a,{path:"".concat(n,"/:slug"),children:Object(x.jsx)(y,{})})]})},N=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"No match for this page"})})},S=n(25),k=n(26),w=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(x.jsxs)("nav",{className:"navBar",children:[Object(x.jsx)("button",{type:"button",onClick:function(){o((function(e){return!e}))},children:n?Object(x.jsx)(S.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(x.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(x.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:e.path,activeClassName:"active-link",exact:!0,onClick:function(){o(!1)},children:e.text})},e.id)}))})]})},T=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"inner",children:[Object(x.jsx)(m,{}),Object(x.jsx)(g,{addTodoProps:function(e){var t={id:Object(d.a)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(x.jsx)(f,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{title:e}):n})))}})]})})}),Object(x.jsx)(j.a,{path:"/about",children:Object(x.jsx)(v,{})}),Object(x.jsx)(j.a,{path:"*",children:Object(x.jsx)(N,{})})]})]})};n(37);i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(T,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ad033948.chunk.js.map