"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[52],{8052:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(2791),a=n(9434),s=n(4270),c=function(e){return e.filter},o=n(3634),i="Contact_wrapper__K-zLN",u="Contact_text__Wq-3f",l="Contact_button__F+kJb",m=n(184),d=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)();return(0,m.jsxs)("div",{className:i,children:[(0,m.jsxs)("p",{className:u,children:[n,": ",r]}),(0,m.jsx)("button",{type:"button",className:l,onClick:function(){return s((0,o.GK)(t))},children:"Delete"})]})},_=function(e){return e.contacts.loading},f=function(e){return e.contacts.items},h="ContactList_list__csErn",p=function(){var e=(0,a.v9)(c),t=(0,a.v9)(f),n=t?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):[],r=n.slice().sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n.localeCompare(r)}));return 0===r.length?(0,m.jsx)("p",{children:"Sorry, but you don't have any contacts yet. Add your first contact."}):(0,m.jsx)("ul",{className:h,children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,m.jsx)("li",{children:(0,m.jsx)(d,{name:n,number:r,id:t})},t)}))})},x="ContactForm_form__dhl+T",v="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9",b="ContactForm_text__kqq6l",C=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);return t?"("+t[1]+")-"+t[2]+"-"+t[3]+"-"+t[4]:null},g=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:b,children:"Add new contact"}),(0,m.jsxs)("form",{className:x,onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=r.elements.name.value.trim(),s=r.elements.number.value,c=""===a,i=/^\d+$/.test(s)&&10===s.length;if(c)alert("You have an empty field for name");else if(i)if(e.some((function(e){return e.name.toLowerCase().trim()===a.toLowerCase()})))alert("".concat(a," is already in contacts."));else{var u={name:a,number:C(s)};t((0,o.uK)(u)),r.reset()}else alert("Invalid phone number. Please enter a 10-digit number")},children:[(0,m.jsx)("input",{name:"name",className:v,placeholder:"Name"}),(0,m.jsx)("input",{name:"number",className:v,placeholder:"096-11-11-111"}),(0,m.jsx)("button",{type:"submit",className:j,children:"Add contact"})]})]})},w=n(1634),N="Filter_input__N7T3z",y="Filter_text__uqQRu",F=function(){var e=(0,a.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:y,children:"Find contacts by name"}),(0,m.jsx)("input",{onInput:function(t){e((0,w.T)(t.target.value.toLowerCase().trim()))},name:"filter",className:N,placeholder:"Start typing a name..."})]})};function k(){var e=(0,a.I0)(),t=(0,a.v9)(_);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsx)(g,{}),(0,m.jsx)("div",{children:t&&"Request in progress..."}),(0,m.jsx)(F,{}),(0,m.jsx)(p,{})]})}}}]);
//# sourceMappingURL=52.600a66cc.chunk.js.map