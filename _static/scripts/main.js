"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(e):e.Gumshoe=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0,function(u){function d(e,t,n){n.settings.events&&(n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(n))}function n(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return 0<=t?t:0}function f(e){e&&e.sort(function(e,t){return n(e.content)<n(t.content)?-1:1})}function c(e,t,n){return e=e.getBoundingClientRect(),t="function"==typeof(t=t).offset?parseFloat(t.offset()):parseFloat(t.offset),n?parseInt(e.bottom,10)<(u.innerHeight||document.documentElement.clientHeight):parseInt(e.top,10)<=t}function s(){return Math.ceil(u.innerHeight+u.pageYOffset)>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function m(e,t){var n,o,l=e[e.length-1];if(n=l,o=t,!(!s()||!c(n.content,o,!0)))return l;for(var r=e.length-1;0<=r;r--)if(c(e[r].content,t))return e[r]}function o(e,t){t.nested&&e.parentNode&&((e=e.parentNode.closest("li"))&&(e.classList.remove(t.nestedClass),o(e,t)))}function p(e,t){var n;!e||(n=e.nav.closest("li"))&&(n.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),o(n,t),d("gumshoeDeactivate",n,{link:e.nav,content:e.content,settings:t}))}function h(e,t){!t.nested||(e=e.parentNode.closest("li"))&&(e.classList.add(t.nestedClass),h(e,t))}var v={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0};return function(e,t){var n,l,r,o,c,s={setup:function(){n=document.querySelectorAll(e),l=[],Array.prototype.forEach.call(n,function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));t&&l.push({nav:e,content:t})}),f(l)}};s.detect=function(){var e,t,n,o=m(l,c);o?r&&o.content===r.content||(p(r,c),t=c,!(e=o)||(n=e.nav.closest("li"))&&(n.classList.add(t.navClass),e.content.classList.add(t.contentClass),h(n,t),d("gumshoeActivate",n,{link:e.nav,content:e.content,settings:t})),r=o):r&&(p(r,c),r=null)};function a(){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(s.detect)}function i(){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(function(){f(l),s.detect()})}s.destroy=function(){r&&p(r,c),u.removeEventListener("scroll",a,!1),c.reflow&&u.removeEventListener("resize",i,!1),c=o=r=n=l=null};return c=function(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n}(v,t||{}),s.setup(),s.detect(),u.addEventListener("scroll",a,!1),c.reflow&&u.addEventListener("resize",i,!1),s}});var tocScroll=null,header=null;function scrollHandlerForHeader(){0==Math.floor(header.getBoundingClientRect().top)?header.classList.add("scrolled"):header.classList.remove("scrolled")}function scrollHandlerForTOC(e){null!==tocScroll&&(0==e?tocScroll.scrollTo(0,0):Math.ceil(e)>=Math.floor(document.documentElement.scrollHeight-window.innerHeight)?tocScroll.scrollTo(0,tocScroll.scrollHeight):document.querySelector(".scroll-current"))}function scrollHandler(e){scrollHandlerForHeader(),scrollHandlerForTOC(e)}function setupScrollHandler(){var t,n=!1;window.addEventListener("scroll",function(e){t=window.scrollY,n||(window.requestAnimationFrame(function(){scrollHandler(t),n=!1}),n=!0)}),window.scroll()}function setupScrollSpy(){null!==tocScroll&&new Gumshoe(".toc-tree a",{reflow:!0,recursive:!0,navClass:"scroll-current"})}function toggleTheme(){var e=document.getElementsByTagName("html")[0],t=localStorage.getItem("theme"),n=e.className;"dark"===t?(e.className=n.replace("dark","light"),localStorage.setItem("theme","light")):"light"===t&&(e.className=n.replace("light","dark"),localStorage.setItem("theme","dark")),console.log("Toggled theme!")}function setup(){setupScrollHandler(),setupScrollSpy()}function main(){document.body.parentNode.classList.remove("no-js"),header=document.querySelector("header"),tocScroll=document.querySelector(".toc-scroll"),setup()}document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=main.js.map
