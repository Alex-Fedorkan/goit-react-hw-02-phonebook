(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(70),o=n.n(i),u=(n(81),n(82),n(46)),s=n(8),b=n(2),l=n(3),d=n(6),m=n(7),j=n(186),h=(n(83),Object(r.createContext)()),O=n(16),f=n(34),x=function(e){var t=e.handleFormSubmit;return Object(a.jsx)(O.d,{initialValues:{name:"",number:""},validationSchema:f.a({name:f.b().required("Required"),number:f.b().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Required")}),onSubmit:t,children:Object(a.jsxs)(O.c,{autoComplete:"off",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)(O.b,{name:"name",type:"text"}),Object(a.jsx)(O.a,{name:"name"}),Object(a.jsx)("label",{htmlFor:"number",children:"Number"}),Object(a.jsx)(O.b,{name:"number",type:"text"}),Object(a.jsx)(O.a,{name:"number"}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})},p=function(e){var t=e.id,n=e.name,r=e.number;return Object(a.jsxs)("li",{children:[n,": ",r,Object(a.jsx)(h.Consumer,{children:function(e){var n=e.deleteContact;return Object(a.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})}})]})},v=function(e){var t=e.contacts;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(a.jsx)(p,{id:t,name:n,number:r},t)}))})},C=function(e){var t=e.value,n=e.handleInputChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:t,onChange:n})]})},g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",deleteContact:function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))}},e.addNewContact=function(t,n){var a=t.name,r=t.number,c=n.setSubmitting,i=n.resetForm;if(e.state.contacts.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts.")),i({name:a,number:r}),void c(!1);e.setState((function(e){var t=[].concat(Object(s.a)(e.contacts),[{id:Object(j.a)(),name:a,number:r}]);return Object(u.a)(Object(u.a)({},e),{},{contacts:t})})),i({name:a,number:r}),c(!1)},e.handleFindInputChange=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h.Provider,{value:this.state,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(x,{handleFormSubmit:this.addNewContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:this.filter,handleInputChange:this.handleFindInputChange}),Object(a.jsx)(v,{contacts:this.getVisibleContacts()})]})})}}]),n}(r.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},82:function(e,t,n){},83:function(e,t,n){}},[[184,1,2]]]);
//# sourceMappingURL=main.240d7137.chunk.js.map