"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7978],{41024:function(e,t,r){r.d(t,{J:function(){return p},B:function(){return b}});var n=r(59499),o=r(4730),i=r(1279),a=r(29630),c=r(85893),s=["value","symbol","visibleDecimals","compact","percent","symbolsVariant","symbolsColor","roundDown","compactThreshold"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=["","K","M","B","T","P","E","Z","Y"],p=function(e){var t=e.value,r=e.visibleDecimals,n=void 0===r?2:r,o=e.roundDown,a=e.compactThreshold,c=(0,i.hE)(t),s=c.toFixed(0).length;a&&Number(t)<=a&&(s=0);var u=Math.min(Math.floor(s?(s-1)/3:0),d.length-1),l=d[u],p=(0,i.pV)(c,3*u).toNumber();return o&&(p=Math.trunc(Number(p)*Math.pow(10,n))/Math.pow(10,n)),{prefix:new Intl.NumberFormat("en-US",{maximumFractionDigits:n,minimumFractionDigits:n}).format(p),postfix:l}};function f(e){var t=e.value,r=e.visibleDecimals,n=e.roundDown,o=p({value:t,visibleDecimals:r,roundDown:n}),i=o.prefix,a=o.postfix;return(0,c.jsxs)(c.Fragment,{children:[i,a]})}function b(e){var t=e.value,r=e.symbol,n=e.visibleDecimals,i=e.compact,u=e.percent,d=e.symbolsVariant,p=e.symbolsColor,b=e.roundDown,m=e.compactThreshold,v=(0,o.Z)(e,s),y=u?100*Number(t):Number(t),h=null!==n&&void 0!==n?n:0;0===y?h=0:void 0===n&&(h=y>1||u||"USD"===r?2:7);var g=Math.pow(10,-h),x=0!==y&&Math.abs(y)<Math.abs(g),j=x?g:y,O=!1!==i&&(i||y>99999);return b&&!O&&(j=Math.trunc(Number(j)*Math.pow(10,h))/Math.pow(10,h)),(0,c.jsxs)(a.Z,l(l({},v),{},{sx:l({display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative"},v.sx),noWrap:!0,children:[x&&(0,c.jsx)(a.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:p||"text.secondary",children:"<"}),"usd"===(null===r||void 0===r?void 0:r.toLowerCase())&&!u&&(0,c.jsx)(a.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:p||"text.secondary",children:"$"}),O?(0,c.jsx)(f,{value:j,visibleDecimals:h,roundDown:b,compactThreshold:m}):new Intl.NumberFormat("en-US",{maximumFractionDigits:h,minimumFractionDigits:h}).format(j),u&&(0,c.jsx)(a.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:p||"text.secondary",children:"%"}),"usd"!==(null===r||void 0===r?void 0:r.toLowerCase())&&"undefined"!==typeof r&&(0,c.jsx)(a.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:p||"text.secondary",children:r})]}))}},92391:function(e,t,r){r.d(t,{X:function(){return d}});var n=r(59499),o=r(4730),i=r(30120),a=r(29630),c=r(85893),s=["caption","children","captionVariant","captionColor","align"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.caption,r=e.children,n=e.captionVariant,u=void 0===n?"secondary16":n,d=e.captionColor,p=e.align,f=void 0===p?"center":p,b=(0,o.Z)(e,s);return(0,c.jsxs)(i.Z,l(l({},b),{},{sx:l({display:"flex",alignItems:f,justifyContent:"space-between"},b.sx),children:[t&&(0,c.jsx)(a.Z,{component:"div",variant:u,color:d,sx:{mr:2},children:t}),r]}))}},72667:function(e,t,r){r.d(t,{Js:function(){return h},UD:function(){return j},T1:function(){return w}});var n=r(83618),o=r(59499),i=r(4730),a=r(89722),c=r(30120),s=r(60082),u=r(67294),l=r(25043),d=r(85893),p=["symbol","aToken"],f=["symbol","logoURI"],b=["symbols","badgeSymbol"],m=["symbol"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t=e.symbol,r=e.onImageGenerated,n=e.aToken,o=(0,u.useRef)(null),i=(0,u.useRef)(null),a=(0,u.useState)(!0),c=a[0],s=a[1];return(0,u.useEffect)((function(){var e;if(!c&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(n){var t,a,s,u,l=null===(t=o.current)||void 0===t||null===(a=t.contentDocument)||void 0===a||null===(s=a.childNodes)||void 0===s?void 0:s[0],d=l.getAttribute("width"),p=l.getAttribute("height"),f=l.getAttribute("viewBox");l.setAttribute("x",25),l.setAttribute("width",206),l.setAttribute("y",25),l.setAttribute("height",206),f||l.setAttribute("viewBox","0 0 ".concat(d," ").concat(p)),null===(u=i.current)||void 0===u||u.appendChild(l);var b=(new XMLSerializer).serializeToString(i.current);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(b)))))}else{var m,v=(new XMLSerializer).serializeToString(null===(m=o.current)||void 0===m?void 0:m.contentDocument);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))))}}),[c,n]),(0,d.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,d.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(t.toLowerCase(),".svg"),onLoad:function(){return s(!1)}}),n&&(0,d.jsx)(g,{ref:i})]})}var g=(0,u.forwardRef)((function(e,t){var r=e.symbol;return(0,d.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:t,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,d.jsxs)("defs",{id:"defs10",children:[(0,d.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,d.jsx)("stop",{offset:"0",stopColor:"#b6509e",id:"stop2"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#2ebac6",id:"stop4"})]}),(0,d.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,d.jsxs)("g",{id:"Group_29109",children:[(0,d.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),r&&(0,d.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(r.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function x(e){var t=e.symbol,r=e.aToken,n=(0,i.Z)(e,p),o=(0,u.useState)(t.toLowerCase()),c=o[0],s=o[1];return(0,u.useEffect)((function(){s(t.toLowerCase())}),[t]),(0,d.jsx)(a.Z,y(y({},n),{},{sx:y({display:"flex",position:"relative",borderRadius:"50%"},n.sx),children:r?(0,d.jsx)(g,{symbol:c}):(0,d.jsx)("img",{src:"/icons/tokens/".concat(c,".svg"),onError:function(){return s("default")},width:"100%",height:"100%",alt:"".concat(t," icon")})}))}function j(e){var t=e.symbol,r=e.logoURI,n=(0,i.Z)(e,f),o=(0,u.useState)(t.toLowerCase()),c=o[0],s=o[1];return(0,d.jsx)(a.Z,y(y({},n),{},{sx:y({display:"flex",position:"relative",borderRadius:"50%"},n.sx),children:(0,d.jsx)(l.Z,{children:(0,d.jsx)("img",{src:"default"!==c&&r?r:"/icons/tokens/default.svg",width:"100%",height:"100%",alt:"".concat(t," icon"),onError:function(){return s("default")}})})}))}function O(e){var t=e.symbols,r=e.badgeSymbol,n=(0,i.Z)(e,b);return r?(0,d.jsx)(s.Z,{badgeContent:(0,d.jsx)(x,{symbol:r,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:t.map((function(e,t){return(0,u.createElement)(x,y(y({},n),{},{key:e,symbol:e,sx:y({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))}):(0,d.jsx)(c.Z,{sx:{display:"inline-flex",position:"relative"},children:t.map((function(e,t){return(0,u.createElement)(x,y(y({},n),{},{key:e,symbol:e,sx:y({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))})}function w(e){var t=e.symbol,r=(0,i.Z)(e,m),o=t.split("_");if(o.length>1){var a=(0,n.Z)(o),c=a[0],s=a.slice(1);return(0,d.jsx)(O,y(y({},r),{},{symbols:s,badgeSymbol:"/pools/"+c}))}return(0,d.jsx)(x,y({symbol:t},r))}g.displayName="ATokenIcon"},88793:function(e,t,r){r.d(t,{T8:function(){return y},Z5:function(){return h},Mw:function(){return g}});var n=r(75331),o=r(84568).X.tokens,i=o.aave,a=i.TOKEN_STAKING,c=i.TOKEN_ORACLE,s=o.bpt,u=s.TOKEN_STAKING,l=s.TOKEN_ORACLE,d=o.gho,p=d.TOKEN_STAKING,f=d.TOKEN_ORACLE,b=o.bptv2,m=b.TOKEN_STAKING,v=b.TOKEN_ORACLE,y=[a,u,p,m],h=[c,l,f,v];function g(e){switch(e){case n.hj.aave:return 0;case n.hj.bpt:return 1;case n.hj.gho:return 2;case n.hj.bptv2:return 3}}},77912:function(e,t,r){r.d(t,{I:function(){return f}});var n=r(59499),o=r(1279),i=r(36492),a=r(2593),c=r(56371),s=r(31001),u=r(8430),l=r(88793);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t){var r=(0,u.z)().uiStakeDataService;return(0,i.a)({queryFn:function(){return r.getGeneralStakeUIDataHumanized(e,l.T8,l.Z5)},queryKey:s.B.generalStakeUiData(e,l.T8,l.Z5),refetchInterval:s.g,select:function(e){var r=function(e){return e.map((function(e,t){return p(p({},e),{},{maxSlashablePercentageFormatted:(Number(e.maxSlashablePercentage)/1e4).toString(),stakeApyFormatted:(Number(e.stakeApy)/1e4).toString(),stakeTokenPriceUSDFormatted:(0,o.Fv)(e.stakeTokenPriceUSD,8),rewardTokenPriceUSDFormatted:(0,o.Fv)(e.rewardTokenPriceUSD,8),totalSupplyFormatted:(0,o.Fv)(e.stakeTokenTotalSupply,18),totalSupplyUSDFormatted:(0,c.formatUnits)(a.O$.from(e.stakeTokenTotalSupply).mul(e.stakeTokenPriceUSD),26),stakeTokenContract:l.T8[t]})}))}(e.stakeData);return t?[r[(0,l.Mw)(t)]]:r}})}},60265:function(e,t,r){r.d(t,{f:function(){return s}});var n=r(36492),o=r(78371),i=r(31001),a=r(8430),c=r(88793),s=function(e,t){var r=(0,a.z)().uiStakeDataService,s=(0,o.Y)((function(e){return e.account}));return(0,n.a)({queryFn:function(){return r.getUserStakeUIDataHumanized(e,s,c.T8,c.Z5)},queryKey:i.B.userStakeUiData(s,e,c.T8,c.Z5),enabled:!!s,refetchInterval:i.g,select:function(e){return t?[e.stakeUserData[(0,c.Mw)(t)]]:e.stakeUserData}})}}}]);