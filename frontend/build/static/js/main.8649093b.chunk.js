(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),r=n(37),s=n.n(r),i=(n(44),n(25),n(17)),l=n(6),u=n(12),d=n.n(u),j=n(16),b=n(13),p=n(7),h=n(18),f=(n(26),n(15)),g=n.n(f),O="https://todo-appfullstack.herokuapp.com/api/";function m(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],u=s[1],f=Object(a.useState)(""),m=Object(b.a)(f,2),x=m[0],v=m[1],w=Object(l.f)();var k=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g.a.post("".concat(O,"register/"),{username:n,password:i,password2:x}).catch((function(e){console.log(e)})).then((function(){w.push("/login")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"Login",children:Object(c.jsxs)(p.a,{id:"username",onSubmit:k,children:[Object(c.jsxs)(p.a.Group,{size:"lg",controlId:"username",children:[Object(c.jsx)(p.a.Label,{children:"Username"}),Object(c.jsx)(p.a.Control,{autoFocus:!0,type:"username",value:n,onChange:function(e){return o(e.target.value)}})]}),Object(c.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(c.jsx)(p.a.Label,{children:"Password"}),Object(c.jsx)(p.a.Control,{type:"password",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(c.jsx)(p.a.Label,{children:"Confirm Password"}),Object(c.jsx)(p.a.Control,{type:"password2",value:x,onChange:function(e){return v(e.target.value)}})]}),Object(c.jsx)(h.a,{id:"button",block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&i.length>0),children:"Sign Up"})]})})}function x(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],u=s[1],f=Object(l.f)();var m=document.getElementById("login-request");localStorage.getItem("Token")&&(m.innerHTML="Already logged in as ".concat(localStorage.getItem("User")));var x=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g.a.post("".concat(O,"api-token-auth/"),{username:n,password:i}).then((function(e){var t=e.data.token;localStorage.setItem("Token",t),localStorage.setItem("User",n)})).catch((function(e){console.log(e)})).then((function(){f.push("/")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"Login",children:Object(c.jsxs)(p.a,{onSubmit:x,children:[Object(c.jsxs)(p.a.Group,{size:"lg",controlId:"email",children:[Object(c.jsx)(p.a.Label,{children:"Username"}),Object(c.jsx)(p.a.Control,{autoFocus:!0,type:"username",value:n,onChange:function(e){return o(e.target.value)}})]}),Object(c.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(c.jsx)(p.a.Label,{children:"Password"}),Object(c.jsx)(p.a.Control,{type:"password",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsx)(h.a,{id:"button",block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&i.length>0),children:"Login"})]})})}var v=n(24);var w=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)({id:null,title:"",completed:!1}),s=Object(b.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(!1),p=Object(b.a)(u,2),h=p[0],f=p[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(O),{headers:{Authorization:"Token ".concat(localStorage.getItem("Token"))}}).catch((function(e){console.log(e)}));case 2:t=e.sent,n=t.data,o(n),c=document.getElementById("user-status"),a=document.getElementById("login-request"),localStorage.getItem("Token")&&(c.innerHTML='<a href="/login" class="btn btn-warning">Logout</a>',c.onclick=function(){return localStorage.removeItem("Token")},a.innerHTML="Welcome, ".concat(localStorage.getItem("User")));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="".concat(O,"create/"),1==h&&(n="".concat(O,"update/").concat(i.id,"/"),f(!1)),e.next=5,g()({method:"POST",url:n,data:i,headers:{Authorization:"Token ".concat(localStorage.getItem("Token"))}}).catch((function(e){console.log(e)}));case 5:window.location.reload();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{id:"task-container",children:[Object(c.jsx)("div",{id:"form-wrapper",children:Object(c.jsx)("form",{onSubmit:x,id:"form",children:Object(c.jsxs)("div",{className:"flex-wrapper",children:[Object(c.jsx)("div",{style:{flex:6},children:Object(c.jsx)("input",{onChange:function(e){var t=e.target.value;l(Object(v.a)(Object(v.a)({},i),{},{title:t}))},className:"form-control",id:"title",type:"text",name:"title",value:i.title,placeholder:"Add task"})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"})})]})})}),Object(c.jsx)("div",{id:"list-wrapper",children:n.map((function(e){return Object(c.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(c.jsx)("div",{onClick:function(){return function(e){e.completed=!e.completed;var t="".concat(O,"update/").concat(e.id,"/");g()({url:t,method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("Token"))},data:e}).catch((function(e){console.log(e)})),window.location.reload()}(e)},style:{flex:7},children:e.completed?Object(c.jsx)("strike",{children:e.title}):Object(c.jsx)("span",{children:e.title})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("button",{onClick:function(){return l(e),void f(!0)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("button",{onClick:function(){return t=e,g()({url:"".concat(O,"delete/").concat(t.id,"/"),method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("Token"))}}).catch((function(e){console.log(e)})),void window.location.reload();var t},className:"btn btn-sm btn-outline-dark delete",children:"Delete"})})]},e.id)}))})]})})};var k=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(c.jsx)(l.a,{path:"/signup",exact:!0,component:m}),Object(c.jsx)(l.a,{path:"/login",exact:!0,component:x})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.8649093b.chunk.js.map