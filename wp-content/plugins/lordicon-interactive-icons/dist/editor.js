!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=wp.components.Icon;function o(e){return JSON.parse(JSON.stringify(e))}function l(e){return null!==e&&"object"==typeof e}function a(e,t){const n=Array.isArray(t)?t:t.split(".");let r=e;for(const e of n){if(!l(r))return!1;if(!(e in r))return!1;r=r[e]}return!0}function c(e,t,n){const r=Array.isArray(t)?t:t.split(".");let o=e;for(const e of r){if(!l(o))return n;if(!(e in o))return n;o=o[e]}return void 0===o?n:o}function i(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function u(e){return Math.round(255*e)}function s(e){return function(e){const t=[];if(!e||!e.layers)return t;for(const[n,r]of Object.entries(e.layers))if(r.nm&&r.nm.toLowerCase().includes("change")&&r.ef)for(const[e,o]of Object.entries(r.ef)){const r="ef.0.v.k",l=`layers.${n}.ef.${e}.${r}`;if(!a(o,r))continue;let i="unkown";if("ADBE Color Control"===o.mn?i="color":"ADBE Slider Control"===o.mn?i="slider":"ADBE Point Control"===o.mn?i="point":"ADBE Checkbox Control"===o.mn&&(i="checkbox"),"unkown"===i)continue;const u=o.nm,s=c(o,r);t.push({name:u,path:l,value:s,type:i})}return t}(e).filter(e=>"color"===e.type).map(e=>{return{name:e.name,color:(t={r:u(e.value[0]),g:u(e.value[1]),b:u(e.value[2])},"#"+i(t.r)+i(t.g)+i(t.b))};var t})}var p,f,m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,l=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d=(p=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})),f=function(){var e=p.apply(this,arguments);return new Promise((function(t,n){return function r(o,l){try{var a=e[o](l),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(c)}("next")}))},function(e){return f.apply(this,arguments)});n(2);var v=wp,y=v.data,h=v.apiFetch,w=v.i18n,b=v.blocks,g=v.blockEditor,E=v.components,C=v.serverSideRender,k=w.__,S=y.withSelect,x=y.registerStore,D=b.registerBlockType,I=g.InspectorControls,A=E.PanelBody,O=E.RangeControl,z=E.ColorPalette,_=E.CardDivider,j=E.ToggleControl,P=E.BaseControl,T=E.CustomSelectControl,B=E.ClipboardButton,R=E.Button,M=E.Card,N=E.CardBody,L=E.TextControl;console.log("components",E);var J={},$=Symbol("Placeholder"),U=[{name:"None",key:"none"},{name:"Click",key:"click"},{name:"Hover",key:"hover"},{name:"Loop",key:"loop"},{name:"Loop on hover",key:"loop-on-hover"},{name:"Morph",key:"morph"},{name:"Morph two way",key:"morph-two-way"}];function V(e,t){var n=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var c=l.value;if(c.key===t)return c}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}}var Y={setIconData:function(e,t,n){return{type:"SET_ICON_DATA",iconData:e,src:t,icon:n}},receiveIconData:function(e,t,n){return{type:"RECEIVE_ICON_DATA",path:e,src:t,icon:n}}};x("lord-icon",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if("SET_ICON_DATA"==t.type){var n=Object.assign({},e);return n.iconData||(n.iconData={}),n.iconData[t.src||t.icon||$]=t.iconData,n}return e},actions:Y,selectors:{receiveIconData:function(e){return e.iconData}},controls:{RECEIVE_ICON_DATA:function(e){if(e.src)return d(e.src);var t=e&&e.icon?"?icon="+(e.icon||""):"";return h({path:e.path+t})}},resolvers:{receiveIconData:regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.receiveIconData("/lord-icon/icon-data",t,n);case 2:return r=e.sent,e.abrupt("return",Y.setIconData(r,t,n));case 4:case"end":return e.stop()}}),e,this)}))}});D("lord-icon/element",{title:k("Lordicon Element"),icon:function(){return wp.element.createElement(r,{icon:function(){return wp.element.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},wp.element.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},wp.element.createElement("path",{d:"M2495 4691 c-70 -18 -128 -61 -171 -129 -19 -29 -34 -55 -34 -57 0\n-3 -11 -22 -23 -43 -13 -20 -35 -57 -49 -82 -14 -25 -76 -133 -138 -240 -140\n-241 -200 -347 -274 -475 -31 -55 -61 -107 -66 -115 -5 -8 -22 -37 -37 -63\nl-27 -48 -420 419 c-232 231 -437 428 -456 437 -19 10 -62 20 -97 23 -113 9\n-211 -47 -261 -147 l-27 -56 1 -1630 1 -1630 28 -75 c31 -85 60 -133 112 -191\n42 -47 131 -109 189 -134 105 -44 77 -43 1838 -41 l1671 2 66 22 c127 42 229\n124 301 243 79 130 73 -23 73 1809 l0 1635 -21 45 c-61 128 -222 187 -351 130\n-34 -15 -148 -123 -463 -439 l-419 -419 -47 82 c-71 124 -75 131 -257 446 -93\n162 -178 309 -187 325 -9 17 -29 50 -43 75 -15 25 -48 83 -74 129 -54 96 -95\n142 -154 171 -44 23 -136 33 -184 21z m-532 -2300 c6 -6 18 -11 27 -11 25 0\n101 -82 121 -131 21 -51 24 -131 8 -180 -17 -50 -75 -116 -122 -141 -54 -28\n-61 -30 -129 -30 -97 0 -178 54 -227 151 -30 58 -24 172 12 228 59 93 134 133\n235 128 35 -2 69 -8 75 -14z m1362 0 c56 -20 113 -77 141 -139 73 -162 -52\n-355 -231 -355 -108 0 -217 80 -246 180 -20 69 -15 126 16 190 57 116 197 170\n320 124z"})))}})},category:"lordicon",keywords:[k("Icon"),k("LordIcon")],attributes:{resize:{type:"boolean",default:!1},restroke:{type:"boolean",default:!1},colorize:{type:"boolean",default:!1},size:{type:"number",default:32},stroke:{type:"number",default:50},delay:{type:"number",default:0},icon:{type:"string",default:""},src:{type:"string",default:""},trigger:{type:"string",default:"none"},colors:{type:"string",default:""}},edit:S((function(e,t){return{iconData:e("lord-icon").receiveIconData(t.attributes.src,t.attributes.icon)}}))((function(e){var t=e.isSelected,n=e.setAttributes,r=(e.className,e.attributes),l=e.iconData,a=r.size,c=r.icon,i=r.src,u=r.resize,p=r.stroke,f=r.restroke,d=r.trigger,v=r.colorize,y=r.colors,h=r.delay,w=null;if(l&&(w=i||c?l[c||i]||null:l[$])){var b=s(w);i||c?J[c||i]=o(b):J[$]=o(b)}var g=[];g=i||c?J[c||i]||[]:J[$]||[];var E=void 0;u&&(E=wp.element.createElement(O,{value:a,onChange:function(e){return n({size:e})},min:16,max:2e3,beforeIcon:"minus",allowReset:!0}));var S=void 0;f&&(S=wp.element.createElement(O,{value:p,onChange:function(e){return n({stroke:e})},min:0,max:100,beforeIcon:"minus",allowReset:!0}));var x=void 0;"loop"!=d&&"loop-on-hover"!=d||(x=wp.element.createElement(L,{label:k("Delay (ms)"),type:"number",value:h,onChange:function(e){return n({delay:Math.max(0,e)})}}));var D=[];v&&g.length&&function(){var e=g.map((function(e){return e.color})),t=g.map((function(e){return{name:k("Original"),color:e.color}})),r=(y||"").split(",").filter(Boolean).map((function(e){var t=e.split(":"),n=m(t,2);return{name:n[0],color:n[1]}})),l=!0,a=!1,c=void 0;try{for(var i,u=r[Symbol.iterator]();!(l=(i=u.next()).done);l=!0){var s=i.value;e.includes(s.color)||(t.push({name:k("Custom"),color:s.color}),e.push(s.color))}}catch(e){a=!0,c=e}finally{try{!l&&u.return&&u.return()}finally{if(a)throw c}}for(var p=function(e){var l=g[e],a=l.name,c=r.length?r[e].color:l.color;D.push(wp.element.createElement(P,{label:a},wp.element.createElement(z,{colors:t,value:c,onChange:function(e){if(e){var t=r.length?r:o(g),a=!0,c=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var p=u.value;p.name.toLowerCase()==l.name.toLowerCase()&&(p.color=e)}}catch(e){c=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(c)throw i}}n({colors:t.length?t.map((function(e){return e.name.toLowerCase()+":"+e.color})).join(","):""})}}})))},f=0;f<g.length;++f)p(f)}();var Y=[];i&&Y.push('src="'+i+'"'),d&&"none"!=d&&Y.push('trigger="'+d+'"'),u&&Y.push('size="'+a+'"'),f&&Y.push('stroke="'+p+'"'),y&&Y.push('colors="'+y+'"'),!h||"loop"!==d&&"loop-on-hover"!=d||Y.push('delay="'+h+'"');var F="[lord-icon "+Y.join(" ")+"][/lord-icon]";return[t&&wp.element.createElement(I,{key:"inspectors"},wp.element.createElement(A,{title:k("Icon")},wp.element.createElement(L,{label:k("URL"),value:i,onChange:function(e){return n({src:e,colors:"",colorize:!1})}}),wp.element.createElement(R,{isPrimary:!0,onClick:function(){var e=wp.media({title:k("Upload or select icon"),multiple:!1,library:{type:["text/plain"]}}).open().on("select",(function(t){var r=e.state().get("selection").first().toJSON().url;n({src:r,colors:"",colorize:!1})}))}},k("Select icon"))),wp.element.createElement(A,{title:k("Editor")},wp.element.createElement(P,{label:k("Trigger")},wp.element.createElement(T,{options:U,value:V(U,d),onChange:function(e){var t=e.selectedItem;return n({delay:0,trigger:t.key})}})),x,wp.element.createElement(_,null),wp.element.createElement(j,{label:k("Size"),checked:u,onChange:function(){return n({resize:!u})}}),E,wp.element.createElement(j,{label:k("Stroke"),checked:f,onChange:function(){return n({restroke:!f})}}),S,wp.element.createElement(j,{label:k("Colors"),checked:v,onChange:function(){return n({colorize:!v,colors:""})}}),D),wp.element.createElement(A,{title:k("Shortcode"),initialOpen:!1},wp.element.createElement("p",null,k("You can use this icon with shortcode as well:")),wp.element.createElement(M,null,wp.element.createElement(N,null,wp.element.createElement("small",null,F))),wp.element.createElement("br",null),wp.element.createElement(B,{isPrimary:!0,variant:"primary",text:F,onCopy:function(){wp.data.dispatch("core/notices").createNotice("info",k("Shortcode copied to clipboard!","block-layouts"),{isDismissible:!0,type:"snackbar"})}},k("Copy shortcode")))),wp.element.createElement(C,{block:"lord-icon/element",attributes:r})]})),save:function(e){return null}})}]);