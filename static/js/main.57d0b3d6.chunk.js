(this.webpackJsonpNFTAuction=this.webpackJsonpNFTAuction||[]).push([[0],{219:function(e,t,n){},220:function(e,t,n){},238:function(e,t){},240:function(e,t){},242:function(e,t){},246:function(e,t){},273:function(e,t){},275:function(e,t){},290:function(e,t){},292:function(e,t){},323:function(e,t){},325:function(e,t){},415:function(e,t){},416:function(e,t){},513:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(208),r=n.n(s),c=(n(219),n(220),n(11)),o=n.n(c),u=n(19),l=n(12),p=n(2),d=function(e){var t=e.text,n=e.white,a=void 0!==n&&n,i=e.modal,s=void 0!==i&&i,r=e.onClick,c=e.padding,o=void 0!==c&&c,u=e.alert,l=void 0!==u&&u,d=e.header,y=void 0!==d&&d,b=e.green,m=void 0!==b&&b,j=e.auction,f=a?"text-gray-900 bg-white":l?"text-white bg-red-600":m?"text-white bg-green-600":void 0!==j&&j?"text-white bg-purple-600":"text-white bg-purple-900";return Object(p.jsx)("button",{className:"font-medium  text-sm lg:text-base rounded-button shadow-button ".concat(f," ").concat(s?"w-full lg:text-base":"px-3 lg:px-6"," \n            ").concat(o?"mb-10":"","\n            ").concat(y?"py-1":"py-3","\n            "),onClick:r,children:t})},y=n(26),b=new(n(212).a)({supportedChainIds:[3]}),m=function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=(t[0],t[1],Object(y.b)()),i=n.active,s=n.account,r=n.activate;function c(){return(c=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(b);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(p.jsx)("header",{className:"bg-purple-400 sticky top-0 z-10 h-15",children:Object(p.jsxs)("div",{className:"container mx-auto px-4 lg:px-2 py-3 flex justify-between items-center",children:[Object(p.jsx)("span",{className:"text-2xl font-bold cursor-pointer text-purple",children:Object(p.jsx)("b",{children:"NFT Auction"})}),i?Object(p.jsx)("b",{className:"text-black font-small font-bolder text-sm",children:s}):Object(p.jsx)(d,{text:"Wallet",onClick:function(){return c.apply(this,arguments)},header:!0})]})})},j=n(209),f=Object(j.a)((function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(void 0),r=Object(l.a)(s,2);return{account:n,setAccount:i,contract:r[0],setContract:r[1]}})),x=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,i){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new Array,e.next=3,i.eth.getAccounts();case 3:return r=e.sent,e.next=6,t.methods.getTokenMetaList().call({from:r[0]},(function(e,t){e?console.log("An error occured",e):t.forEach((function(e){e.uri&&s.push({id:e.tokenId,image:e.uri,isOwner:r[0]===e.owner,isAuction:!1})}))}));case 6:return e.next=8,n.methods.getAuctionDetailList().call({from:r[0]},(function(e,t){e?console.log("An error occured",e):t.forEach((function(e){s.push({id:e.auctionId,isOwner:r[0]===e.owner,image:"https://www.miamioh.edu/_files/images/news/2019/06/auction-sign.jpg",minBid:e.startingBid,isAuction:!0})}))}));case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),v=n(15),g=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,i){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.eth.getAccounts();case 3:s=e.sent,t.methods.buy(a).send({from:s[0],value:5e15},(function(e,t){e?console.log("An error occured",e):console.log(t)})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,i){return e.apply(this,arguments)}}(),O=function(e){var t=e.name,n=e.unit,a=void 0===n?"":n,i=e.value,s=void 0===i?"":i,r=e.setValue,c=e.type,o=void 0===c?"text":c,u=e.placeHolder,l=e.disabled;return Object(p.jsxs)("div",{className:"",children:[Object(p.jsxs)("div",{className:"flex justify-between items-center py-2 text-xs tracking-wide uppercase",children:[Object(p.jsx)("h4",{className:"font-semibold text-gray-500",children:t}),Object(p.jsx)("p",{className:"font-medium text-gray-400",children:a})]}),Object(p.jsx)("input",{className:"w-full h-10 mb-6 border-2 border-gray-300 focus:border-gray-900 rounded-button outline-none text-gray-900 lg:text-lg px-4 py-3",placeholder:u||t,type:"text",inputMode:"number"===o?"decimal":"text",min:"number"===o?1:void 0,value:s,onChange:function(e){return r(e.target.value)},disabled:!!l})]})},h="0xf65f5728082c640f781f48Eecb113fcF58A51421",w="0xb3CDAe7968c947162E2C22B7B91859C573c0f8aE",T=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMetaList",outputs:[{components:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"},{internalType:"address",name:"owner",type:"address"}],internalType:"struct SkyScrapperNFT.NFTMeta[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],k=[{inputs:[{internalType:"address",name:"_nft",type:"address"},{internalType:"uint256",name:"_nftId",type:"uint256"},{internalType:"uint256",name:"_startingBid",type:"uint256"}],name:"createNewAuction",outputs:[{internalType:"address",name:"newContract",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctionDetailList",outputs:[{internalType:"address",name:"nftAddr",type:"address"},{internalType:"uint256",name:"nftId",type:"uint256"},{internalType:"uint256",name:"auctionId",type:"uint256"},{internalType:"uint256",name:"startingBid",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getAuctionAddress",outputs:[{internalType:"address",name:"contractAddress",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAuctionDetailList",outputs:[{components:[{internalType:"address",name:"nftAddr",type:"address"},{internalType:"uint256",name:"nftId",type:"uint256"},{internalType:"uint256",name:"auctionId",type:"uint256"},{internalType:"uint256",name:"startingBid",type:"uint256"}],internalType:"struct NFTAuctionFactory.AuctionDetails[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalAuctionsCount",outputs:[{internalType:"uint256",name:"contractCount",type:"uint256"}],stateMutability:"view",type:"function"}],N=n(27),M=n.n(N),C=function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(void 0),r=Object(l.a)(s,2),c=(r[0],r[1]),b=Object(a.useState)(void 0),m=Object(l.a)(b,2),j=m[0],N=m[1],C=Object(v.h)().id,A=Object(v.g)(),S=(f.useContainer().contract,Object(y.b)()),I=S.library,L=S.active,F=S.account;Object(a.useEffect)((function(){L&&Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new M.a(I),c(t),n=new I.eth.Contract(T,h,F),a=new I.eth.Contract(k,w,F),x(n,a,F,t).then((function(e){var t,n=null===(t=e.filter((function(e){return e.id===C})))||void 0===t?void 0:t[0];n||A.push("/listings"),i(n)}));case 5:case"end":return e.stop()}}),e)})))()}),[L]);return Object(p.jsx)(p.Fragment,{children:n?Object(p.jsxs)("div",{className:"container mx-auto px-4 lg:px-2 pb-20",children:[Object(p.jsx)("div",{className:"pt-20 pb-10",children:Object(p.jsx)("h1",{className:"text-gray-900 text-3xl font-medium"})}),Object(p.jsxs)("div",{className:"grid lg:grid-cols-3 gap-12 relative",children:[Object(p.jsx)("div",{className:"order-2 lg:order-none lg:col-span-2",children:Object(p.jsx)("img",{className:"rounded-xl bg-gray-100",src:n.image})}),Object(p.jsx)("div",{className:"order-1",children:Object(p.jsxs)("div",{className:"sticky top-32 p-6 rounded-xl border-2 w-full",children:[Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O,{name:"Bid Amount",value:j,type:"text",setValue:N,disabled:!0,unit:"ETH"})}),Object(p.jsx)(d,{modal:!0,onClick:function(){var e=new M.a(I),t=new I.eth.Contract(T,h,F);g(t,e,n.id,n.price)},text:"Bid"})]})})]})]}):L?Object(p.jsx)("p",{className:"pt-20 text-xl text-center",children:"Loading"}):Object(p.jsx)("p",{className:"pt-20 text-xl text-center",children:"Please connect ZilPay"})})},A=n(71),S=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,i,s,r,c){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.eth.getAccounts();case 2:return u=e.sent,e.next=5,t.methods.safeMint(u[0],n).send({from:u[0]},(function(e,t){e?console.log("An error occured",e):console.log(t)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,i,s,r,c){return e.apply(this,arguments)}}(),I=function(e){var t=e.title,n=e.children,i=e.setVisible,s=e.visible,r=e.buttonText,c=e.onClick;return Object(a.useEffect)((function(){document.onkeydown=function(e){"Enter"===e.key&&(e.preventDefault(),c())}}),[]),Object(p.jsx)("div",{className:"w-screen h-screen bg-black bg-opacity-25 fixed top-0 left-0 z-20 transition-all",style:s?{opacity:1,visibility:"visible",transform:"translateY(0)"}:{opacity:0,visibility:"hidden",transform:"translateY(30px)"},onClick:function(){return i(!1)},children:Object(p.jsx)("div",{className:"w-full h-full flex justify-center items-center px-4 lg:px-2 py-2",children:Object(p.jsxs)("div",{className:"w-full lg:w-1/3 bg-white shadow-xl rounded-2xl max-h-full flex flex-col",onClick:function(e){return e.stopPropagation()},children:[Object(p.jsxs)("div",{className:"flex justify-between items-center p-8",children:[Object(p.jsx)("p",{className:"text-xl font-bold text-gray-900",children:t}),Object(p.jsx)("button",{className:"p-1 rounded hover:bg-gray-100 transition-colors -mr-1",onClick:function(){return i(!1)},children:Object(p.jsx)("svg",{className:"w-6 h-6 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),Object(p.jsx)("div",{className:"w-full px-8 pt-0 overflow-y-scroll flex-grow",children:n}),Object(p.jsx)("div",{className:"p-8",children:Object(p.jsx)(d,{modal:!0,text:r,onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){c(),i(!1)}))})})]})})})},L=function(e){var t=e.showCreateListing,n=e.setShowCreateListing,i=Object(a.useState)(void 0),s=Object(l.a)(i,2),r=s[0],c=s[1],o=Object(a.useState)("1"),u=Object(l.a)(o,2),d=u[0],b=u[1],m=Object(a.useState)("0"),j=Object(l.a)(m,2),f=j[0],x=j[1],v=Object(a.useState)("0"),g=Object(l.a)(v,2),w=g[0],k=g[1],N=Object(y.b)(),C=N.library,A=(N.active,N.account);return Object(a.useEffect)((function(){c(void 0),b("1"),x("0"),k("0")}),[t]),Object(p.jsx)(I,{title:"Mint Your Sky Scrapper NFT",visible:t,setVisible:n,buttonText:"Mint!",onClick:function(){if(r){var e=new M.a(C),t=new C.eth.Contract(T,h);S(t,r,d,f,w,A,e)}},children:Object(p.jsx)(O,{name:"Image URL",value:r,type:"text",setValue:c})})},F=function(e){e.name;var t=e.image,n=e.onClick,a=e.minBid;return Object(p.jsxs)("div",{className:"w-full cursor-pointer",onClick:n,children:[Object(p.jsx)("div",{className:"w-full h-64 mb-2 bg-gray-100 flex justify-end items-start p-2",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover"}}),Object(p.jsxs)("p",{className:"text-gray-900 font-semibold",children:["Min Bid : ",a," ETH",Object(p.jsx)("span",{className:"text-gray-600 font-light"})]})]})},B=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.eth.getAccounts();case 3:return i=e.sent,e.next=6,t.methods.burn(a).send({from:i[0]},(function(e,t){e?console.log("An error occured",e):console.log(t)}));case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,i,s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(parseInt(i||"")*Math.pow(10,12)).toString();case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,i,s){return e.apply(this,arguments)}}(),V=n(61),D=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,i){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.eth.getAccounts();case 3:s=e.sent,console.log(h),t.methods.createNewAuction(h,a,i).send({from:s[0]},(function(e,t){e?V.b.error(e.message):V.b.success("Auction creation submitted!")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),V.b.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a,i){return e.apply(this,arguments)}}(),P=function(e){var t=e.showManageListing,n=e.setShowManageListing,i=e.modalListing,s=i.id,r=(i.accumulated_rent,Object(a.useState)(void 0)),c=Object(l.a)(r,2),o=c[0],u=c[1],b=Object(a.useState)(void 0),m=Object(l.a)(b,2),j=m[0],f=m[1],x=Object(a.useState)(void 0),v=Object(l.a)(x,2),g=v[0],N=v[1],C=Object(a.useState)(void 0),A=Object(l.a)(C,2),S=A[0],L=A[1],F=Object(a.useState)(void 0),V=Object(l.a)(F,2),P=V[0],_=V[1],U=Object(a.useState)(void 0),z=Object(l.a)(U,2),Y=(z[0],z[1],Object(y.b)()),H=Y.library,R=(Y.active,Y.account);Object(a.useEffect)((function(){f(i.price),N(i.image);var e=new M.a(H);L(e);var t=new H.eth.Contract(T,h,R);_(t)}),[t]);var J=function(){B(P,S,s),n(!1)};return Object(p.jsxs)(I,{title:"Manage",visible:t,setVisible:n,buttonText:"Update Listing",onClick:function(){s&&j&&g&&E(P,S,s,j,g)},children:[Object(p.jsx)(O,{name:"Image URL",value:g,type:"text",setValue:N,disabled:!0}),Object(p.jsxs)("div",{className:"flex grid md:grid-rows-1",children:[Object(p.jsx)("h4",{className:"text-sm font-semibold text-gray-500 tracking-wide uppercase py-4",children:"Auction"}),Object(p.jsx)(O,{name:"Minimum Bid",value:o,type:"string",setValue:u}),Object(p.jsxs)("div",{className:"flex grid md:grid-cols-3 gap-7",children:[Object(p.jsx)(d,{text:"Setup Auction",onClick:function(){var e=new M.a(H),t=new H.eth.Contract(k,w,R);D(t,e,s,o),n(!1)},auction:!0,padding:!0,modal:!0}),Object(p.jsx)(d,{text:"Start Auction",onClick:J,auction:!0,padding:!0,modal:!0}),Object(p.jsx)(d,{text:"End Auction",onClick:J,auction:!0,padding:!0,modal:!0})]})]}),Object(p.jsx)(p.Fragment,{})]})},_=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)(!1),c=Object(l.a)(r,2),o=c[0],u=c[1],b=Object(a.useState)(void 0),m=Object(l.a)(b,2),j=m[0],g=m[1],O=Object(a.useState)(void 0),N=Object(l.a)(O,2),C=N[0],S=N[1],I=Object(v.g)(),B=(f.useContainer().contract,Object(y.b)()),E=B.library,V=B.active,D=B.account,_=null===C||void 0===C?void 0:C.filter((function(e){return e.isOwner})),U=(null===C||void 0===C||C.filter((function(e){return!e.isOwner})),null===C||void 0===C?void 0:C.filter((function(e){return e.isAuction})));return Object(a.useEffect)((function(){if(V){var e=new M.a(E),t=new E.eth.Contract(T,h,D),n=new E.eth.Contract(k,w,D);x(t,n,D,e).then((function(e){S(e)})),console.log("set")}}),[V,D]),Object(p.jsxs)("div",{className:"container mx-auto px-4 lg:px-2 pb-10",children:[Object(p.jsx)("div",{className:"pt-10 pb-5 flex justify-between items-center",children:Object(p.jsx)("h1",{className:"text-gray-900 text-2xl font-medium",children:"Aunctioned Listing"})}),C?Object(p.jsxs)(p.Fragment,{children:[U.length>0?Object(p.jsx)("div",{className:"grid md:grid-cols-4 gap-7",children:U.map((function(e,t){return Object(p.jsx)(F,Object(A.a)(Object(A.a)({},e),{},{onClick:function(){I.push("/listing/".concat(e.id))}}))}))}):Object(p.jsx)("p",{className:"text-xl text-center",children:"No listings"}),Object(p.jsxs)("div",{className:"pt-16 pb-5 flex justify-between items-center",children:[Object(p.jsx)("h1",{className:"text-gray-900 text-2xl font-medium",children:"Your Tokens"}),Object(p.jsx)("div",{className:"flex items-center space-between",children:Object(p.jsx)(d,{text:"Create a token",onClick:function(){return s(!0)}})})]}),_.length>0?Object(p.jsx)("div",{className:"grid md:grid-cols-5 gap-6",children:_.map((function(e,t){return Object(p.jsx)(F,Object(A.a)(Object(A.a)({},e),{},{onClick:function(){g(e),u(!0)}}))}))}):Object(p.jsx)("p",{className:"text-xl text-center",children:"No listings"})]}):Object(p.jsx)("p",{className:"text-xl text-center text-purple",children:"Connect wallet to proceed"}),Object(p.jsx)(L,{showCreateListing:i,setShowCreateListing:s}),j&&Object(p.jsx)(P,{modalListing:j,showManageListing:o,setShowManageListing:u})]})},U=n(119),z=function(){f.useContainer().setContract;return Object(p.jsx)(y.a,{getLibrary:function(e){return new M.a(e)},children:Object(p.jsxs)("div",{className:"rentonzilliqa",children:[Object(p.jsx)(m,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(U.a,{children:Object(p.jsx)("main",{children:Object(p.jsxs)(v.d,{children:[Object(p.jsx)(v.b,{path:"/",exact:!0,children:Object(p.jsx)(v.a,{to:"/listings"})}),Object(p.jsx)(v.b,{path:"/listings",children:Object(p.jsx)(_,{})}),Object(p.jsx)(v.b,{path:"/listing/:id",children:Object(p.jsx)(C,{})}),Object(p.jsx)(v.a,{to:"/listings"})]})})}),Object(p.jsx)(V.a,{toastOptions:{success:{duration:6e3},error:{duration:8e3},loading:{duration:13e4}}})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,517)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(f.Provider,{children:Object(p.jsx)(z,{})})}),document.getElementById("root")),Y()}},[[513,1,2]]]);
//# sourceMappingURL=main.57d0b3d6.chunk.js.map