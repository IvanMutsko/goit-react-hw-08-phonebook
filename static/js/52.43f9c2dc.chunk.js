"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[52],{8052:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(2791),a=n(9434),c=n(4270),s=function(e){return e.filter},o=n(3634),i="Contact_wrapper__K-zLN",u="Contact_text__Wq-3f",l="Contact_button__F+kJb",m=n(184),d=function(e){var t=e.id,n=e.name,r=e.number,c=(0,a.I0)();return(0,m.jsxs)("div",{className:i,children:[(0,m.jsxs)("p",{className:u,children:[n,": ",r]}),(0,m.jsx)("button",{type:"button",className:l,onClick:function(){return c((0,o.GK)(t))},children:"Delete"})]})},_=function(e){return e.contacts.loading},f=function(e){return e.contacts.items},h="ContactList_list__csErn",p=function(){var e=(0,a.v9)(s),t=(0,a.v9)(f),n=t?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):[],r=n.slice().sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n.localeCompare(r)}));return 0===r.length?(0,m.jsx)("p",{children:"Sorry, but you don't have any contacts yet. Add your first contact."}):(0,m.jsx)("ul",{className:h,children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,m.jsx)("li",{children:(0,m.jsx)(d,{name:n,number:r,id:t})},t)}))})},x="ContactForm_form__dhl+T",j="ContactForm_input__Bl93P",v="ContactForm_button__eSwX9",b="ContactForm_text__kqq6l",C=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);return t?"("+t[1]+")-"+t[2]+"-"+t[3]+"-"+t[4]:null},g=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:b,children:"Add new contact"}),(0,m.jsxs)("form",{className:x,onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=r.elements.name.value.trim(),c=r.elements.number.value;if(e.some((function(e){return e.name.toLowerCase().trim()===a.toLowerCase()})))alert("".concat(a," is already in contacts."));else{var s={name:a,number:C(c)};t((0,o.uK)(s)),r.reset()}},children:[(0,m.jsx)("input",{name:"name",className:j,placeholder:"Name",minLength:3}),(0,m.jsx)("input",{name:"number",className:j,placeholder:"096-11-11-111",minLength:10,maxLength:10}),(0,m.jsx)("button",{type:"submit",className:v,children:"Add contact"})]})]})},w=n(1634),N="Filter_input__N7T3z",F="Filter_text__uqQRu",L=function(){var e=(0,a.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:F,children:"Find contacts by name"}),(0,m.jsx)("input",{onInput:function(t){e((0,w.T)(t.target.value.toLowerCase().trim()))},name:"filter",className:N,placeholder:"Start typing a name..."})]})};function y(){var e=(0,a.I0)(),t=(0,a.v9)(_);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsx)(g,{}),(0,m.jsx)("div",{children:t&&"Request in progress..."}),(0,m.jsx)(L,{}),(0,m.jsx)(p,{})]})}}}]);
//# sourceMappingURL=52.43f9c2dc.chunk.js.map