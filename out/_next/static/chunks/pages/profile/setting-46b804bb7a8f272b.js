(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{5266:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/setting",function(){return n(64733)}])},64733:function(e,r,n){"use strict";n.r(r);var t=n(34051),i=n.n(t),o=n(85893),s=n(79032),a=n(41664),l=n(3857),c=n(88852),u=n(53341),d=n(13131),f=n(50112),p=n(57558),h=n(41181),v=n(98233),g=n(98260),m=n(80471),x=n(83078),j=n(76655),w=n(22167),y=n(47516),b=n(67294),k=n(74922);function _(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function A(e,r,n,t,i,o,s){try{var a=e[o](s),l=a.value}catch(c){return void n(c)}a.done?r(l):Promise.resolve(l).then(t,i)}function S(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function s(e){A(o,t,i,s,a,"next",e)}function a(e){A(o,t,i,s,a,"throw",e)}s(void 0)}))}}function C(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return _(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=function(e){return new Promise((function(r,n){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return r(t.result)},t.onerror=function(e){return n(e)}}))};r.default=function(){var e,r=(0,l.rZ)(),n=(0,x.Nr)(),t=n.Moralis,_=n.user,A=n.setUserData,U=n.isUserUpdating,z=n.isInitialized,D=n.refetchUserData,N=(0,b.useState)({image:"",file:void 0}),P=N[0],E=N[1],O=(0,b.useState)(""),I=O[0],M=O[1],T=(0,x.Oc)("NewUser",(function(e){return e.equalTo("userAddress",null===_||void 0===_?void 0:_.get("ethAddress")).limit(1)}),[null===_||void 0===_?void 0:_.get("ethAddress")],{live:!0}),q=T.data;T.error,T.isLoading,T.isFetching,T.fetch;return(0,o.jsxs)(s.Z,{title:"test",homePage:!1,children:[(0,o.jsx)(a.default,{href:"/",passHref:!0,children:(0,o.jsx)(c.z,{variant:"outline",children:"Back"})}),(0,o.jsxs)(u.Z,{p:"lg",style:{backgroundColor:r.colors.dark[9],border:"1px solid",borderColor:r.colors.gray[7]},radius:"lg",mt:"sm",children:[(0,o.jsx)(d.Z,{position:"apart",align:"center",mb:"sm",children:(0,o.jsx)(f.x,{size:"lg",weight:"bold",align:"center",children:"Setting"})}),(0,o.jsx)(d.Z,{position:"center",align:"flex-start",children:(0,o.jsxs)(d.Z,{position:"center",direction:"column",children:[(0,o.jsx)(p.q,{radius:"lg",color:"dark",mb:"sm",src:P.image||(null===_||void 0===_?void 0:_.get("profilePic").url()),size:80,children:(0,o.jsx)(m.Mdg,{size:"100%"})}),(0,o.jsx)(h.D,{order:5,children:null===(e=q[0])||void 0===e?void 0:e.get("userName")}),(0,o.jsx)(f.x,{size:"sm",children:(null===_||void 0===_?void 0:_.get("description"))||"Default description"})]})}),(0,o.jsx)(d.Z,{position:"center",mt:"sm",children:(0,o.jsx)(v.o,{placeholder:"",label:"Set Description",required:!0,onChange:function(e){return M(e.target.value)},defaultValue:(null===_||void 0===_?void 0:_.get("description"))||"Default description"})}),(0,o.jsx)(d.Z,{position:"center",mt:"sm",children:(0,o.jsx)(j.f,{onDrop:function(){var e=S(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r[0]);case 2:n=e.sent,E({image:n,file:r[0]});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),onReject:function(e){return console.log("rejected files",e)},accept:C(w.d1),style:{height:"80px",display:"flex",justifyContent:"center"},children:function(e){return(0,o.jsxs)(g.M,{children:[(0,o.jsx)(y.Zw4,{size:"80%"}),"Upload the new profile picture"]})}})}),(0,o.jsx)(d.Z,{position:"center",mt:"sm",children:(0,o.jsx)(c.z,{variant:"outline",loading:U,onClick:S(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=11;break}return e.next=3,A({description:I});case 3:if(void 0===P.file){e.next=8;break}return r=new t.File(P.file.name,P.file),null===_||void 0===_||_.set("profilePic",r),e.next=8,null===_||void 0===_?void 0:_.save();case 8:(0,k.c0)({title:"Success",message:"User data updated",autoClose:2500,disallowClose:!0,color:"green"}),D(),E({image:"",file:void 0});case 11:case"end":return e.stop()}}),e)}))),children:"Save"})})]})]})}}},function(e){e.O(0,[228,955,629,874,461,231,2,900,774,888,179],(function(){return r=5266,e(e.s=r);var r}));var r=e.O();_N_E=r}]);