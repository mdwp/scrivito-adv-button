!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("scrivito"),require("react"),require("react-scrollchor")):"function"==typeof define&&define.amd?define(["scrivito","react","react-scrollchor"],t):"object"==typeof exports?exports["scrivito-adv-button"]=t(require("scrivito"),require("react"),require("react-scrollchor")):e["scrivito-adv-button"]=t(e.scrivito,e.react,e["react-scrollchor"])}(window,function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=(n.provideWidgetClass("AdvButtonWidget",{attributes:{target:"link",alignment:["enum",{values:["left","center","right"]}],style:["enum",{values:["btn-primary","btn-secondary","btn-success","btn-danger","btn-warning","btn-info","btn-light","btn-dark","btn-clear"]}],rounded:["enum",{values:["small","large"]}]}}),r(1)),a=r(2),l=r.n(a),i=n.connect(function(e){var t=e.widget,r=t.get("target"),a=t.get("rounded")||"small",i=r&&r.title(),u=["btn"];return u.push(t.get("style")||"btn-primary"),"small"===a?u.push("adv-btn-round"):"large"===a&&u.push("adv-btn-round-lg"),r&&"string"==typeof r.url()?o.createElement(l.a,{to:r.url(),className:u.join(" ")},i,o.createElement("i",{className:"fa fa-angle-down fa-4","aria-hidden":"true"})):o.createElement(n.LinkTag,{to:r,className:u.join(" ")},i,o.createElement("i",{className:"fa fa-angle-right fa-4","aria-hidden":"true"}))});n.provideComponent("AdvButtonWidget",function(e){var t=e.widget,r=t.get("alignment")||"left";return o.createElement("div",{className:"text-".concat(r)},o.createElement(i,{widget:t}))}),n.provideEditingConfig("AdvButtonWidget",{title:"Advanced Button",attributes:{alignment:{title:"Alignment",description:"Default: Left",values:[{value:"left",title:"Left"},{value:"center",title:"Center"},{value:"right",title:"Right"}]},style:{title:"Background color",description:"Default: Primary color",values:[{value:"btn-primary",title:"Primary color"},{value:"btn-secondary",title:"Secondary color"},{value:"btn-success",title:"Success color"},{value:"btn-danger",title:"Danger color"},{value:"btn-warning",title:"Warning color"},{value:"btn-info",title:"Info color"},{value:"btn-light",title:"Light color"},{value:"btn-dark",title:"Dark color"},{value:"btn-clear",title:"Transparent"}]},target:{title:"Target",description:"The target and text of the button. Must start with a hash #, if the target is an anchor on the same page."},rounded:{title:"Rounded corners. Default: Small",description:"Small: 6px rounded corners. Large: 30px rounded corners.",values:[{value:"small",title:"Small"},{value:"large",title:"Large"},{value:"no",title:"No rounded corners"}]}},properties:["target","alignment","style","rounded"],initialContent:{alignment:"left",style:"btn-primary",rounded:"small"}})}])});