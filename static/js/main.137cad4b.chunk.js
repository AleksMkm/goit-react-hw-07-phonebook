(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={contact:"Contact_contact__2m4yp",icon:"Contact_icon__3wKFx",name:"Contact_name__3yNLi",phone:"Contact_phone__3L8gi",btn:"Contact_btn__35Hjs"}},22:function(e,t,n){e.exports={form:"Filter_form__3EnQb",title:"Filter_title__1clwp",searchField:"Filter_searchField__1tli9"}},30:function(e,t,n){e.exports={section:"Section_section__3n2rE",title:"Section_title__10vwg"}},40:function(e,t,n){e.exports={container:"Container_container__34be5"}},41:function(e,t,n){e.exports={iconBtn:"IconButton_iconBtn__3vgG8"}},45:function(e,t,n){e.exports={contactList:"ContactList_contactList__1byq6"}},78:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),o=n(14),s=n.n(o),i=n(6),l=n(10),u=n(7),b=n(4),j=n(12),m=Object(l.b)("filter/change"),d=n(3),p=n.n(d),f=n(5),h=n(20),O=n.n(h);function x(){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(t,n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t,number:n},e.next=3,O.a.post("/contacts",r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.a.defaults.baseURL="http://localhost:4040";var g,w=Object(l.c)("contacts/fetchContacts",Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),k=Object(l.c)("contacts/addContact",function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.prev=1,e.next=4,v(n,r);case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),F=Object(l.c)("contacts/deleteContact",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=N(t),e.abrupt("return",n);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),L=Object(l.d)([],(g={},Object(u.a)(g,w.fulfilled,(function(e,t){return t.payload})),Object(u.a)(g,k.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(u.a)(g,F.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),g)),q=Object(l.d)("",Object(u.a)({},m,(function(e,t){return t.payload}))),B=Object(j.c)({contacts:L,filter:q}),E=Object(l.a)({reducer:B,devTools:!1}),P=(n(78),n(40)),S=n.n(P);function A(e){var t=e.children;return Object(r.jsx)("div",{className:S.a.container,children:t})}var H=n(42),M=n.n(H),R=n(43),I=n.n(R),z=n(44),J=n.n(z),T=n(16),Z=n.n(T),$=n(29),D=n(47),G=n(41),K=n.n(G);function Q(e){var t=e.children,n=e.onClick,c=Object(D.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object($.a)(Object($.a)({type:"button",className:K.a.iconBtn,onClick:n},c),{},{children:t}))}Q.defaultProps={onClick:function(){return null},children:null};var U=Q;var V=function(e){var t=e.id,n=e.name,c=e.phone,a=e.deleteHandler;return Object(r.jsxs)("li",{className:Z.a.contact,children:[Object(r.jsxs)("span",{className:Z.a.name,children:[Object(r.jsx)(M.a,{className:Z.a.icon}),n]}),Object(r.jsxs)("span",{className:Z.a.phone,children:[Object(r.jsx)(I.a,{className:Z.a.icon}),c]}),Object(r.jsx)(U,{onClick:a,"aria-label":"delete contact",children:Object(r.jsx)(J.a,{})})]},t)},Y=n(45),W=n.n(Y),X=n(21),ee=function(e){return e.contacts},te=function(e){return e.filter},ne=Object(X.a)([te,ee],(function(e,t){var n=e.toLowerCase().trim();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}));var re=function(){var e=Object(i.c)(ee),t=Object(i.c)(te),n=Object(i.c)(ne),c=Object(i.b)(),a=t.trim()?n:e;return Object(r.jsx)("ul",{className:W.a.contactList,children:a.map((function(e){return V({id:e.id,name:e.name,phone:e.number,deleteHandler:function(){return c(F(e.id))}})}))})},ce=n(46),ae=n(9),oe=n.n(ae);var se=function(){var e=Object(ce.a)(),t=e.register,n=e.handleSubmit,a=e.errors,o=e.reset,s=Object(c.useRef)(),l=Object(i.c)(ee),u=Object(i.b)();return Object(r.jsxs)("form",{className:oe.a.form,onSubmit:n((function(e){l.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in Phonebook")):(console.log(e.name),console.log(e.number.trim()),u(k({name:e.name.trim(),number:e.number.trim()})),s.current.blur(),o({}))})),children:[Object(r.jsxs)("label",{className:oe.a.label,children:[Object(r.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:18,pattern:/^[A-Za-z]+([ A-Za-z]+)*$/}),className:oe.a.addField,type:"text",name:"name",placeholder:"name"}),a.name&&"required"===a.name.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Name is required"}),a.name&&"minLength"===a.name.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Name is too short. Minimum 3 characters required."}),a.name&&"maxLength"===a.name.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Name is too long. Maximum 18 characters allowed."}),a.name&&"pattern"===a.name.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Name can contain only english letters."})]}),Object(r.jsxs)("label",{className:oe.a.label,children:[Object(r.jsx)("input",{ref:t({required:!0,pattern:/^\d+$/}),className:oe.a.addField,type:"text",name:"number",placeholder:"xxxx-xx-xx"}),a.number&&"required"===a.number.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Number is required"}),a.number&&"pattern"===a.number.type&&Object(r.jsx)("p",{className:oe.a.error,children:"Phone number should consist only from numbers."})]}),Object(r.jsx)("button",{ref:s,className:oe.a.btn,type:"submit",children:"Add contact"})]})},ie=n(30),le=n.n(ie);var ue=function(e){var t=e.title,n=e.children;return Object(r.jsxs)("section",{className:le.a.section,children:[Object(r.jsx)("p",{className:le.a.title,children:t}),n]})},be=n(22),je=n.n(be);var me=function(){var e=Object(i.c)(te),t=Object(i.b)();return Object(r.jsx)("form",{className:je.a.form,children:Object(r.jsxs)("label",{children:[Object(r.jsx)("span",{className:je.a.title,children:"Find contacts by name"}),Object(r.jsx)("input",{className:je.a.searchField,type:"text",value:e,onChange:function(e){return t(m(e.target.value))}})]})})};var de=function(){var e=Object(i.c)(ee),t=Object(i.b)(),n=Object(c.createRef)(!0);return console.log(t),Object(c.useEffect)((function(){n&&t(w())})),Object(r.jsxs)(A,{children:[Object(r.jsx)(ue,{title:"Phonebook",children:Object(r.jsx)(se,{})}),Object(r.jsx)(ue,{title:"Contacts",children:e.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(me,{}),Object(r.jsx)(re,{})]}):Object(r.jsx)("div",{children:"Oops. no contacts here! Let's add some data!"})})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(i.a,{store:E,children:Object(r.jsx)(de,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__YfRAB",addField:"ContactForm_addField__2Hmk7",btn:"ContactForm_btn__2MVEt",label:"ContactForm_label__PEI7n",error:"ContactForm_error__33TDB"}}},[[81,1,2]]]);
//# sourceMappingURL=main.137cad4b.chunk.js.map