import React from 'react'

export default function SmoothScroll() {
  return (
    <>
    <script dangerouslySetInnerHTML={{__html: `/**
    * vanilla-smoothie.js v2.2.2
    * https://kimulaco.github.io/vanilla-smoothie/
    * Copyright (c) 2019 kimulaco
    * This software is released under the MIT License.
    */
   
   !(function(t, e) {
     "object" == typeof exports && "undefined" != typeof module
       ? (module.exports = e())
       : "function" == typeof define && define.amd
       ? define(e)
       : ((t = t || self)["vanilla-smoothie"] = e());
   })(this, function() {
     "use strict";
     var t = {
         linear: function(t) {
           return t;
         },
         easeInQuad: function(t) {
           return t * t;
         },
         easeOutQuad: function(t) {
           return t * (2 - t);
         },
         easeInOutQuad: function(t) {
           return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
         },
         easeInCubic: function(t) {
           return t * t * t;
         },
         easeOutCubic: function(t) {
           return --t * t * t + 1;
         },
         easeInOutCubic: function(t) {
           return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
         },
         easeInQuart: function(t) {
           return t * t * t * t;
         },
         easeOutQuart: function(t) {
           return 1 - --t * t * t * t;
         },
         easeInOutQuart: function(t) {
           return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
         },
         easeInQuint: function(t) {
           return t * t * t * t * t;
         },
         easeOutQuint: function(t) {
           return 1 + --t * t * t * t * t;
         },
         easeInOutQuint: function(t) {
           return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
         }
       },
       e = { duration: 500, start: 0 },
       n = function(t, o, i) {
         var r = Date.now() - e.start;
         try {
           t(r);
         } catch (t) {
           i();
         }
         r <= e.duration
           ? requestAnimationFrame(function() {
               n(t, o, i);
             })
           : o();
       },
       o = document.documentElement,
       i = window.history && window.history.pushState ? window.history : null,
       r = new ((function() {
         function r() {
           var t = this;
           (this.cache = { hash: "", easing: "linear", duration: 500, startOffset: 0, endOffset: 0 }),
             (this.getTargetElement = function(t) {
               return "string" == typeof t ? document.querySelector(t) : null;
             }),
             (this.getTargetOffset = function(e) {
               if ("number" == typeof e) return e;
               if ("string" == typeof e) {
                 var n = t.getTargetElement(e);
                 return n ? n.getBoundingClientRect().top + window.pageYOffset : 0;
               }
               return 0;
             }),
             (this.getScrollBottomOffset = function() {
               return (
                 Math.max.apply(null, [
                   document.body.clientHeight,
                   document.body.scrollHeight,
                   o.scrollHeight,
                   o.clientHeight
                 ]) - window.innerHeight
               );
             }),
             window.addEventListener("popstate", function() {
               t.onPopstate(location.hash);
             });
         }
         return (
           (r.prototype.onPopstate = function(t) {}),
           (r.prototype.scrollTo = function(t, o, r) {
             var u = this;
             void 0 === o && (o = {});
             var s = Object.assign({ element: window, easing: "linear", duration: 500, adjust: 0 }, o);
             return this.validateArgvType(t, s, r)
               ? ((this.cache = {
                   hash: "string" == typeof t && "#" === t[0] ? t : "",
                   easing: s.easing || "linear",
                   duration: s.duration || 500,
                   startOffset: s.element.scrollTop || window.pageYOffset,
                   endOffset: this.getTargetOffset(t) + s.adjust
                 }),
                 new Promise(function(o, a) {
                   !(function(t, o, i) {
                     void 0 === i && (i = {});
                     var r = Object.assign(
                       { successCallback: function() {}, failCallback: function() {} },
                       i
                     );
                     (e.start = Date.now()),
                       (e.duration = t),
                       n(
                         o,
                         function() {
                           "function" == typeof r.successCallback && r.successCallback();
                         },
                         function() {
                           "function" == typeof r.failCallback && r.failCallback();
                         }
                       );
                   })(
                     s.duration || 500,
                     function(t) {
                       s.element === window
                         ? window.scroll(0, u.getScrollOffset(t))
                         : (s.element.scrollTop = u.getScrollOffset(t));
                     },
                     {
                       successCallback: function() {
                         var e = u.getTargetElement(t);
                         i && u.cache.hash && i.pushState(null, "", u.cache.hash),
                           e && u.adjustFocus(e),
                           "function" == typeof r && r(),
                           o();
                       },
                       failCallback: function() {
                         a();
                       }
                     }
                   );
                 }))
               : Promise.reject();
           }),
           (r.prototype.scrollTop = function(t, e) {
             return this.scrollTo(0, t, e);
           }),
           (r.prototype.scrollBottom = function(t, e) {
             return this.scrollTo(this.getScrollBottomOffset(), t, e);
           }),
           (r.prototype.validateArgvType = function(t, e, n) {
             var o = !0;
             return (
               /^(string|number)$/.test(typeof t) ||
                 (console.error("target must be of type string or number."), (o = !1)),
               /^(string)$/.test(typeof e.easing) ||
                 (console.error("easing option must be of type string."), (o = !1)),
               /^(number)$/.test(typeof e.duration) ||
                 (console.error("duration option must be of type number."), (o = !1)),
               /^(number)$/.test(typeof e.adjust) ||
                 (console.error("adjust option must be of type number."), (o = !1)),
               /^(undefined|function)$/.test(typeof n) ||
                 (console.error("callback option must be of type function."), (o = !1)),
               o
             );
           }),
           (r.prototype.adjustFocus = function(t) {
             var e = t.getAttribute("tabindex"),
               n = t.style.outline,
               o = function() {
                 e ? t.setAttribute("tabindex", e) : t.removeAttribute("tabindex"),
                   n || (t.style.outline = ""),
                   t.removeEventListener("blur", o);
               };
             e || t.setAttribute("tabindex", "-1"),
               n || (t.style.outline = "none"),
               t.focus(),
               t.addEventListener("blur", o);
           }),
           (r.prototype.getScrollOffset = function(e) {
             return e > this.cache.duration
               ? this.cache.endOffset
               : this.cache.startOffset +
                   (this.cache.endOffset - this.cache.startOffset) *
                     t[this.cache.easing](e / this.cache.duration);
           }),
           r
         );
       })())();
     return "undefined" != typeof window && (window.vanillaSmoothie = r), r;
   });
   `}}/>
    <script
      dangerouslySetInnerHTML={{
        __html: `document.querySelectorAll('.smooth').forEach((anchor) => {
          anchor.addEventListener('click', (event) => {
            vanillaSmoothie.scrollTo(anchor.getAttribute('href'), {
              duration: 500
            })
          })})`,
      }}
    />
    </>
  )
}
