(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),r=s(30),i=s.n(r),o=(s(41),s(4)),l=s(2),m=(s(42),function(){return Object(c.jsxs)("nav",{className:"navbar bg-dark",children:[Object(c.jsx)("h1",{children:Object(c.jsxs)(o.b,{to:"/",children:[Object(c.jsx)("i",{className:"fas fa-code"})," Kisan Network"]})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/contacts",children:"Contacts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/history",children:"Message History"})})]})]})}),j=function(){return Object(c.jsx)("section",{className:"landing",children:Object(c.jsx)("div",{className:"dark-overlay",children:Object(c.jsxs)("div",{className:"landing-inner",children:[Object(c.jsx)("h1",{className:"x-large",children:"Contact App for Kisan Network"}),Object(c.jsx)("p",{className:"lead",children:"Want to send sms to your friend?"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(o.b,{to:"/contacts",className:"btn btn-primary",children:"Show contacts"}),Object(c.jsx)(o.b,{to:"/history",className:"btn btn-light",children:"Show message history"})]})]})})})},b=function(e){var t=e.contact,s=t.name,a=(t.mobile,t.id);return Object(c.jsxs)("div",{className:"profile bg-light",children:[Object(c.jsx)("h2",{children:s}),Object(c.jsx)(o.b,{to:"/contacts/".concat(a),className:"btn btn-primary contact-btn",children:"View contact"})]})},d=function(){var e=JSON.parse(localStorage.getItem("contactList"));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"large text-primary",children:"Contacts List"}),Object(c.jsx)("div",{className:"profiles",children:e&&e.length>0?e.map((function(e){return Object(c.jsx)(b,{contact:e},e.id)})):Object(c.jsx)("h4",{children:"No contacts found..."})})]})})},h=function(){var e=Object(l.f)().id,t=JSON.parse(localStorage.getItem("contactList")).find((function(t){return t.id===parseInt(e)}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(o.b,{to:"/contacts",className:"btn btn-light",children:"Back To Contacts"}),Object(c.jsx)("div",{className:"profile-grid my-1",children:Object(c.jsxs)("div",{className:"profile-top bg-primary p-2",children:[Object(c.jsx)("h1",{className:"large",children:t.name}),Object(c.jsxs)("p",{className:"lead",children:["Mobile : ",t.mobile]}),Object(c.jsx)(o.b,{to:"/message/".concat(e),className:"btn contact-btn",children:"Send Message"})]})})]})},u=s(20),O=s.n(u),g=s(35),x=s(32),p=s(15),f=s(10),N=s(13),v=s(70),y=s(33),S=s.n(y),w=function(){var e=Object(a.useState)({message:"",mobile:""}),t=Object(N.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)({success:!1,message:"",color:"red"}),i=Object(N.a)(r,2),m=i[0],j=i[1],b=Object(a.useState)(!1),d=Object(N.a)(b,2),h=d[0],u=d[1],y=Object(a.useState)(0),w=Object(N.a)(y,2),T=w[0],k=w[1],C=Object(l.f)().id;Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contactList")).find((function(e){return e.id===parseInt(C)})),t=e.mobile,c=e.name;n(Object(f.a)(Object(f.a)({},s),{},{mobile:t,name:c})),k(function(){for(var e="",t=0;t<6;t++)e+="0123456789"[Math.floor(10*Math.random())];return e}())}),[C]);var M=s.message,K=function(){var e=Object(x.a)(O.a.mark((function e(t){var s,c,a,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("http://localhost:5000/api/message",{message:h?t.message:"Hi, Your OTP is : ".concat(T),mobile:t.mobile},{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache"});case 3:(s=e.sent).data.success?(c=JSON.parse(localStorage.getItem("messageHistory")),a=c||[],r={id:Object(v.a)(),message:h?t.message:"Hi, Your OTP is : ".concat(T),mobile:t.mobile,name:t.name,time:new Date},i=[r].concat(Object(g.a)(a)),localStorage.setItem("messageHistory",JSON.stringify(i)),n(Object(f.a)(Object(f.a)({},t),{},{message:""})),j({success:!0,message:"Message sent successfully!",color:"green"}),setTimeout((function(){j({success:!1,message:""})}),3e3),u(!0)):(console.log("error",s.data),j({success:!0,message:s.data.errors[0],color:"red"}),setTimeout((function(){j({success:!1,message:""})}),3e3)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),j({success:!0,message:"Something went wrong, message not sent!",color:"red"}),setTimeout((function(){j({success:!1,message:""})}),3e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"large text-primary",children:"Type message"}),Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),K(s)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:h,onChange:function(){return u(!h)}})," "," Send Custom Message"]})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("textarea",{name:"message",cols:"30",rows:"4",placeholder:"Type message...",value:h?M:"Hi, Your OTP is ".concat(T),disabled:!h,onChange:function(e){return function(e){n(Object(f.a)(Object(f.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))}(e)}}),m.success&&Object(c.jsx)("span",{style:{color:m.color},children:m.message})]}),Object(c.jsx)("input",{type:"submit",value:"Send",className:"btn btn-primary my-1"}),Object(c.jsx)(o.b,{className:"btn btn-light my-1",to:"/",children:"Go Back To Dashboard"})]})]})},T=s(34),k=s.n(T),C=function(e){var t=e.messageData,s=t.name,a=t.mobile,n=t.time,r=t.message;return Object(c.jsxs)("div",{className:"post bg-white p-1 my-1",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:["To ",s," : ",a]})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"my-1",children:["Message : ",r]}),Object(c.jsxs)("p",{className:"post-date",children:["Messaged on ",Object(c.jsx)(k.a,{format:"YYYY/MM/DD hh:mm a",children:n})]})]})]})},M=function(){var e=localStorage.getItem("messageHistory"),t=JSON.parse(e);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-primary large",children:"Message History"}),Object(c.jsx)("div",{className:"posts",children:t&&t.length>0?t.map((function(e){return Object(c.jsx)(C,{messageData:e},e.id)})):Object(c.jsx)("h2",{children:"No message history"})})]})},K=function(){return localStorage.setItem("contactList",JSON.stringify([{id:1,name:"Prabhat Kumar",mobile:"+918986790869"},{id:2,name:"Kisan Network",mobile:"+919810153260"},{id:3,name:"Shubham Kumar",mobile:"+919403903724"},{id:4,name:"Sachin Kumar",mobile:"+919008810131"},{id:5,name:"Roshan Kumar",mobile:"+918553901920"},{id:6,name:"Rahul Kumar",mobile:"+918986790869"},{id:7,name:"Samir Kumar",mobile:"+919810153260"},{id:8,name:"Kunal Kumar Puri",mobile:"+919403903724"},{id:9,name:"Shiv Kumar",mobile:"+919008810131"},{id:10,name:"Raj Pandey",mobile:"+918553901920"}])),Object(c.jsx)(o.a,{children:Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(c.jsx)(l.a,{exact:!0,path:"/contacts",component:d}),Object(c.jsx)(l.a,{exact:!0,path:"/contacts/:id",component:h}),Object(c.jsx)(l.a,{exact:!0,path:"/message/:id",component:w}),Object(c.jsx)(l.a,{exact:!0,path:"/history",component:M})]})]})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root")),I()}},[[68,1,2]]]);
//# sourceMappingURL=main.3d6299fa.chunk.js.map