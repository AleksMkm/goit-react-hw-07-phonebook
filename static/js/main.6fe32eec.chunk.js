(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={contact:"Contact_contact__2hr_3",icon:"Contact_icon__114QU",name:"Contact_name__gRl1R",phone:"Contact_phone__djWFH"}},22:function(e,t,n){e.exports={form:"Filter_form__3TAx6",label:"Filter_label__1ZCue",title:"Filter_title__2U5NP",searchField:"Filter_searchField__Mt_xV"}},24:function(e,t,n){e.exports={section:"Section_section__32loS",title:"Section_title__3q6Um",flex:"Section_flex__3kdYe"}},41:function(e,t,n){e.exports={container:"Container_container__2_D6n"}},42:function(e,t,n){e.exports={iconBtn:"IconButton_iconBtn__3XSr4"}},46:function(e,t,n){e.exports={contactList:"ContactList_contactList__2yti9"}},48:function(e,t,n){e.exports={wrapper:"Footer_wrapper__4qHTp"}},81:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"changeFilter",(function(){return m}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return S})),n.d(c,"addContact",(function(){return B})),n.d(c,"deleteContact",(function(){return M}));var a={};n.r(a),n.d(a,"getContacts",(function(){return ie})),n.d(a,"getFilter",(function(){return se})),n.d(a,"getLoadingData",(function(){return ue})),n.d(a,"getError",(function(){return le})),n.d(a,"getFilteredContacts",(function(){return de}));var o=n(2),i=n(0),s=n.n(i),u=n(14),l=n.n(u),d=n(6),b=n(8),j=n(3),f=n(5),p=n(12),m=Object(b.b)("filter/change"),O=n(4),h=n.n(O),x=n(7),_=n(21),v=n.n(_);function g(){return C.apply(this,arguments)}function C(){return(C=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t,number:n},e.next=3,v.a.post("/contacts",r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return w.apply(this,arguments)}function w(){return(w=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.a.defaults.baseURL="http://localhost:4040";var L,k,q,S=Object(b.c)("contacts/fetchContacts",Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),B=Object(b.c)("contacts/addContact",function(){var e=Object(x.a)(h.a.mark((function e(t){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.prev=1,e.next=4,N(n,r);case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),M=Object(b.c)("contacts/deleteContact",function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=F(t),e.abrupt("return",n);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),P=Object(b.d)([],(L={},Object(j.a)(L,S.fulfilled,(function(e,t){return t.payload})),Object(j.a)(L,B.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(f.a)(e),[n])})),Object(j.a)(L,M.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),L)),U=Object(b.d)("",Object(j.a)({},m,(function(e,t){return t.payload}))),Z=Object(b.d)(!1,(k={},Object(j.a)(k,S.pending,(function(){return!0})),Object(j.a)(k,S.fulfilled,(function(){return!1})),Object(j.a)(k,S.rejected,(function(){return!1})),Object(j.a)(k,B.pending,(function(){return!0})),Object(j.a)(k,B.fulfilled,(function(){return!1})),Object(j.a)(k,B.rejected,(function(){return!1})),Object(j.a)(k,M.pending,(function(){return!0})),Object(j.a)(k,M.fulfilled,(function(){return!1})),Object(j.a)(k,M.rejected,(function(){return!1})),k)),A=Object(b.d)(null,(q={},Object(j.a)(q,S.rejected,(function(e,t){return t.payload})),Object(j.a)(q,S.pending,(function(){return null})),Object(j.a)(q,B.rejected,(function(e,t){return t.payload})),Object(j.a)(q,B.pending,(function(){return null})),Object(j.a)(q,M.rejected,(function(e,t){return t.payload})),Object(j.a)(q,M.pending,(function(){return null})),q)),H=Object(p.c)({contacts:P,filter:U,isLoading:Z,error:A}),R=Object(b.a)({reducer:H,devTools:!1}),T=(n(81),n(41)),z=n.n(T);function D(e){var t=e.children;return Object(o.jsx)("div",{className:z.a.container,children:t})}var E=n(43),I=n.n(E),J=n(44),Q=n.n(J),V=n(45),$=n.n(V),W=n(16),X=n.n(W),Y=n(31),G=n(50),K=n(42),ee=n.n(K);function te(e){var t=e.children,n=e.onClick,r=Object(G.a)(e,["children","onClick"]);return Object(o.jsx)("button",Object(Y.a)(Object(Y.a)({type:"button",className:ee.a.iconBtn,onClick:n},r),{},{children:t}))}te.defaultProps={onClick:function(){return null},children:null};var ne=te;var re=function(e){var t=e.id,n=e.name,r=e.phone,c=e.deleteHandler;return Object(o.jsxs)("li",{className:X.a.contact,children:[Object(o.jsxs)("span",{className:X.a.name,children:[Object(o.jsx)(I.a,{className:X.a.icon}),n]}),Object(o.jsxs)("span",{className:X.a.phone,children:[Object(o.jsx)(Q.a,{className:X.a.icon}),r]}),Object(o.jsx)(ne,{onClick:c,"aria-label":"delete contact",children:Object(o.jsx)($.a,{})})]},t)},ce=n(46),ae=n.n(ce),oe=n(23),ie=function(e){return e.contacts},se=function(e){return e.filter},ue=function(e){return e.isLoading},le=function(e){return e.error},de=Object(oe.a)([se,ie],(function(e,t){var n=e.toLowerCase().trim();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))})),be=a.getContacts,je=a.getFilter,fe=a.getFilteredContacts;var pe=function(){var e=Object(d.c)(be),t=Object(d.c)(je),n=Object(d.c)(fe),r=Object(d.b)(),a=t.trim()?n:e;return Object(o.jsx)("ul",{className:ae.a.contactList,children:a.map((function(e){return re({id:e.id,name:e.name,phone:e.number,deleteHandler:function(){return r(c.deleteContact(e.id))}})}))})},me=n(49),Oe=n(9),he=n.n(Oe);var xe=function(){var e=Object(me.a)(),t=e.register,n=e.handleSubmit,r=e.errors,s=e.reset,u=Object(i.useRef)(),l=Object(d.c)(a.getContacts),b=Object(d.b)();return Object(o.jsxs)("form",{className:he.a.form,onSubmit:n((function(e){l.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in Phonebook")):(b(c.addContact({name:e.name.trim(),number:e.number.trim()})),u.current.blur(),s({}))})),children:[Object(o.jsxs)("label",{className:he.a.label,children:[Object(o.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:18,pattern:/^[A-Za-z]+([ A-Za-z]+)*$/}),className:he.a.addField,type:"text",name:"name",placeholder:"name"}),r.name&&"required"===r.name.type&&Object(o.jsx)("p",{className:he.a.error,children:"Name is required"}),r.name&&"minLength"===r.name.type&&Object(o.jsx)("p",{className:he.a.error,children:"Name is too short. Minimum 3 characters."}),r.name&&"maxLength"===r.name.type&&Object(o.jsx)("p",{className:he.a.error,children:"Name is too long. Maximum 18 characters."}),r.name&&"pattern"===r.name.type&&Object(o.jsx)("p",{className:he.a.error,children:"Name can contain only english letters."})]}),Object(o.jsxs)("label",{className:he.a.label,children:[Object(o.jsx)("input",{ref:t({required:!0,maxLength:12,pattern:/^\d+$/}),className:he.a.addField,type:"text",name:"number",placeholder:"xxxx-xx-xx"}),r.number&&"required"===r.number.type&&Object(o.jsx)("p",{className:he.a.error,children:"Number is required"}),r.number&&"pattern"===r.number.type&&Object(o.jsx)("p",{className:he.a.error,children:"Phone number should consist only from numbers."}),r.number&&"maxLength"===r.number.type&&Object(o.jsx)("p",{className:he.a.error,children:"Number is too long. Maximum 12 digits."})]}),Object(o.jsx)("button",{ref:u,className:he.a.btn,type:"submit",children:"Add contact"})]})},_e=n(24),ve=n.n(_e);var ge=function(e){var t=e.title,n=e.children,r=e.flex?ve.a.flex:"";return Object(o.jsxs)("section",{className:ve.a.section+" "+r,children:[Object(o.jsx)("p",{className:ve.a.title,children:t}),n]})},Ce=n(22),Ne=n.n(Ce);var ye=function(){var e=Object(d.c)(a.getFilter),t=Object(d.b)();return Object(o.jsx)("form",{className:Ne.a.form,children:Object(o.jsxs)("label",{className:Ne.a.label,children:[Object(o.jsx)("span",{className:Ne.a.title,children:"Find contacts by name"}),Object(o.jsx)("input",{className:Ne.a.searchField,type:"text",value:e,onChange:function(e){return t(r.changeFilter(e.target.value))}})]})})},Fe=n(47),we=n.n(Fe);var Le=function(){return Object(o.jsx)(we.a,{size:30,margin:10,color:"black",loading:!0})},ke=n(48),qe=n.n(ke);var Se=function(){return Object(o.jsx)("div",{className:qe.a.wrapper,children:"(c) Student project"})};var Be=function(){var e=Object(d.c)(a.getContacts),t=Object(d.c)(a.getLoadingData),n=Object(d.b)();return Object(i.useEffect)((function(){n(c.fetchContacts())}),[]),Object(o.jsxs)(D,{children:[Object(o.jsx)(ge,{title:"Phonebook",flex:!1,children:Object(o.jsx)(xe,{})}),Object(o.jsx)(ge,{title:"Contacts",flex:!0,children:t?Object(o.jsx)(Le,{}):e.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(ye,{}),Object(o.jsx)(pe,{})]}):Object(o.jsx)("div",{children:"Oops. no contacts here! Let's add some data!"})}),Object(o.jsx)(Se,{})]})};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d.a,{store:R,children:Object(o.jsx)(Be,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__3J0eV",label:"ContactForm_label__xTyZq",addField:"ContactForm_addField__QdIdn",btn:"ContactForm_btn__27p5n",error:"ContactForm_error__UbZl2"}}},[[89,1,2]]]);
//# sourceMappingURL=main.6fe32eec.chunk.js.map