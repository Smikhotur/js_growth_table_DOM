parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".field tbody"),l=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),t=document.querySelector("tr"),c=10,o=2;function i(){var n=t.cloneNode(!0);e.appendChild(n),e.children.length===c&&(l.disabled=!0),d.disabled=!1}function u(){e.lastElementChild.remove(),e.children.length===o&&(d.disabled=!0),l.disabled=!1}function a(){for(var l=e.querySelectorAll("tr"),d=e.querySelectorAll("td"),t=0;t<l.length;t++){var o=d[t].cloneNode(!0);l[t].appendChild(o)}e.children[0].childElementCount===c&&(n.disabled=!0),r.disabled=!1}function h(){for(var l=e.querySelectorAll("tr"),d=0;d<l.length;d++)l[d].removeChild(l[d].children[1]);e.children[0].childElementCount===o&&(r.disabled=!0),n.disabled=!1}l.addEventListener("click",i),d.addEventListener("click",u),n.addEventListener("click",a),r.addEventListener("click",h);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5178e2f5.js.map