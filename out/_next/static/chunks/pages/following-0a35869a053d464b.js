(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{41152:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/following",function(){return n(44701)}])},44701:function(e,t,n){"use strict";n.r(t);var r=n(34051),i=n.n(r),s=n(85893),u=n(79032),a=n(11996),o=n(50112),c=n(98233),l=n(91142),d=n(13131),f=n(88852),h=n(67294),v=n(11163),g=n(83078),p=n(40326),x=n(48444);function m(e,t,n,r,i,s,u){try{var a=e[s](u),o=a.value}catch(c){return void n(c)}a.done?t(o):Promise.resolve(o).then(r,i)}t.default=function(){var e,t=(0,v.useRouter)(),n=(0,h.useState)(""),r=n[0],w=n[1],b=(0,h.useState)(!1),_=b[0],k=b[1],j=(0,h.useState)(!1),y=j[0],C=j[1],N=(0,h.useState)(""),P=N[0],S=N[1],E=(0,h.useState)(!1),R=E[0],U=E[1],F=(0,g.Nr)(),M=F.Moralis,z=F.web3,L=(F.user,M.web3Library),O=(M.executeFunction,(0,g.Ab)().account),T=function(){var t,n=(t=i().mark((function t(){var n,s,u,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(e){return/\s/.test(e)},k(!0),k(!0),!n(r)){t.next=10;break}return C(!0),S("User name can't contain whitespace"),t.abrupt("return");case 10:if(""!==r){t.next=14;break}return C(!0),S("User name can't be empty"),t.abrupt("return");case 14:return t.prev=14,e=new L.Contract(x.i.n,p.Mt,null===z||void 0===z?void 0:z.getSigner()),t.next=18,null===z||void 0===z?void 0:z.getGasPrice();case 18:return s=t.sent,u=L.utils.hexlify((null===s||void 0===s?void 0:s.mul(120).div(100))||0),t.next=22,e.registerNewUser(r,{gasLimit:L.utils.hexlify(5e5),gasPrice:u});case 22:return a=t.sent,t.next=25,a.wait();case 25:C(!1),k(!1),t.next=35;break;case 29:t.prev=29,t.t0=t.catch(14),k(!1),C(!0),S(t.t0.message),t.t0.data.message&&S(t.t0.data.message);case 35:case"end":return t.stop()}}),t,null,[[14,29]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var s=t.apply(e,n);function u(e){m(s,r,i,u,a,"next",e)}function a(e){m(s,r,i,u,a,"throw",e)}u(void 0)}))});return function(){return n.apply(this,arguments)}}();(0,h.useEffect)((function(){new L.Contract(x.i.n,p.Mt,null===z||void 0===z?void 0:z.getSigner()).isRegistered(O||"").then((function(e){!1===e&&U(!0)})).catch((function(e){console.log(e)}))}),[]);return(0,s.jsx)(u.Z,{title:"test",homePage:!0,children:(0,s.jsx)(a.u,{opened:R,title:"Register",centered:!0,onClose:function(){return t.push("/")},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.x,{size:"sm",children:"Register with the user name to proceed"}),(0,s.jsx)(c.o,{placeholder:"User name",label:"User name",required:!0,disabled:_,error:y&&P,onChange:function(e){return w(e.target.value)},onFocus:function(){return S("")}}),_&&(0,s.jsx)(l.a,{}),(0,s.jsx)(d.Z,{position:"right",children:(0,s.jsx)(f.z,{mt:"sm",onClick:T,loading:_,children:"Register"})})]})})})}}},function(e){e.O(0,[228,955,629,874,461,231,900,774,888,179],(function(){return t=41152,e(e.s=t);var t}));var t=e.O();_N_E=t}]);