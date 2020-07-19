 /* eslint-disable */
 ! function(e, t) {
   "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebChat = t() : e.WebChat = t()
 }(window, (function() {
   return function(e) {
     var t = {};

     function n(r) {
       if (t[r]) return t[r].exports;
       var o = t[r] = {
         i: r,
         l: !1,
         exports: {}
       };
       return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
     }
     return n.m = e, n.c = t, n.d = function(e, t, r) {
       n.o(e, t) || Object.defineProperty(e, t, {
         enumerable: !0,
         get: r
       })
     }, n.r = function(e) {
       "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
       }), Object.defineProperty(e, "__esModule", {
         value: !0
       })
     }, n.t = function(e, t) {
       if (1 & t && (e = n(e)), 8 & t) return e;
       if (4 & t && "object" == typeof e && e && e.__esModule) return e;
       var r = Object.create(null);
       if (n.r(r), Object.defineProperty(r, "default", {
           enumerable: !0,
           value: e
         }), 2 & t && "string" != typeof e)
         for (var o in e) n.d(r, o, function(t) {
           return e[t]
         }.bind(null, o));
       return r
     }, n.n = function(e) {
       var t = e && e.__esModule ? function() {
         return e.default
       } : function() {
         return e
       };
       return n.d(t, "a", t), t
     }, n.o = function(e, t) {
       return Object.prototype.hasOwnProperty.call(e, t)
     }, n.p = "", n(n.s = 42)
   }([function(e, t, n) {
     "use strict";
     e.exports = n(43)
   }, function(e, t, n) {
     e.exports = n(48)()
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.PROP_TYPES = t.NEXT_MESSAGE = t.MESSAGES_TYPES = t.MESSAGE_SENDER = t.SESSION_NAME = void 0;
     var r = i(n(1)),
       o = i(n(18));

     function i(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     t.SESSION_NAME = "chat_session";
     var a = t.MESSAGE_SENDER = {
         CLIENT: "client",
         RESPONSE: "response"
       },
       u = t.MESSAGES_TYPES = {
         TEXT: "text",
         SNIPPET: {
           LINK: "snippet"
         },
         VIDREPLY: {
           VIDEO: "vidreply"
         },
         IMGREPLY: {
           IMAGE: "imgreply"
         },
         QUICK_REPLY: "quickreply",
         CUSTOM_COMPONENT: "component"
       };
     t.NEXT_MESSAGE = "mrbot_next_message", t.PROP_TYPES = {
       MESSAGE: o.default.contains({
         type: r.default.oneOf([u.TEXT, u.QUICK_REPLY, u.SNIPPET.LINK, u.IMGREPLY.IMAGE, u.VIDREPLY.VIDEO]),
         id: r.default.number,
         text: r.default.string,
         sender: r.default.oneOf([a.CLIENT, a.RESPONSE])
       }),
       SNIPPET: o.default.contains({
         type: r.default.oneOf([u.TEXT, u.SNIPPET.LINK]),
         id: r.default.number,
         title: r.default.string,
         link: r.default.string,
         content: r.default.string,
         target: r.default.string,
         sender: r.default.oneOf([a.CLIENT, a.RESPONSE])
       }),
       VIDREPLY: o.default.contains({
         type: r.default.oneOf([u.TEXT, u.VIDREPLY.VIDEO]),
         id: r.default.number,
         title: r.default.string,
         src: r.default.string,
         sender: r.default.oneOf([a.CLIENT, a.RESPONSE])
       }),
       IMGREPLY: o.default.contains({
         type: r.default.oneOf([u.TEXT, u.IMGREPLY.IMAGE]),
         id: r.default.number,
         title: r.default.string,
         src: r.default.string,
         sender: r.default.oneOf([a.CLIENT, a.RESPONSE])
       }),
       QUICK_REPLY: o.default.contains({
         type: r.default.oneOf([u.QUICK_REPLY]),
         id: r.default.number,
         text: r.default.string,
         hint: r.default.string,
         quick_replies: o.default.listOf(r.default.shape({
           title: r.default.string,
           payload: r.default.string
         })),
         sender: r.default.oneOf([a.CLIENT, a.RESPONSE]),
         chooseReply: r.default.func,
         getChosenReply: r.default.func,
         toggleInputDisabled: r.default.func,
         inputState: r.default.bool,
         chosenReply: r.default.string
       })
     }
   }, function(e, t) {
     e.exports = function(e) {
       var t = [];
       return t.toString = function() {
         return this.map((function(t) {
           var n = function(e, t) {
             var n = e[1] || "",
               r = e[3];
             if (!r) return n;
             if (t && "function" == typeof btoa) {
               var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                 i = r.sources.map((function(e) {
                   return "/*# sourceURL=" + r.sourceRoot + e + " */"
                 }));
               return [n].concat(i).concat([o]).join("\n")
             }
             var a;
             return [n].join("\n")
           }(t, e);
           return t[2] ? "@media " + t[2] + "{" + n + "}" : n
         })).join("")
       }, t.i = function(e, n) {
         "string" == typeof e && (e = [
           [null, e, ""]
         ]);
         for (var r = {}, o = 0; o < this.length; o++) {
           var i = this[o][0];
           "number" == typeof i && (r[i] = !0)
         }
         for (o = 0; o < e.length; o++) {
           var a = e[o];
           "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
         }
       }, t
     }
   }, function(e, t, n) {
     var r, o, i = {},
       a = (r = function() {
         return window && document && document.all && !window.atob
       }, function() {
         return void 0 === o && (o = r.apply(this, arguments)), o
       }),
       u = function(e) {
         var t = {};
         return function(n) {
           return void 0 === t[n] && (t[n] = e.call(this, n)), t[n]
         }
       }((function(e) {
         return document.querySelector(e)
       })),
       s = null,
       l = 0,
       c = [],
       f = n(61);

     function p(e, t) {
       for (var n = 0; n < e.length; n++) {
         var r = e[n],
           o = i[r.id];
         if (o) {
           o.refs++;
           for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
           for (; a < r.parts.length; a++) o.parts.push(y(r.parts[a], t))
         } else {
           var u = [];
           for (a = 0; a < r.parts.length; a++) u.push(y(r.parts[a], t));
           i[r.id] = {
             id: r.id,
             refs: 1,
             parts: u
           }
         }
       }
     }

     function d(e, t) {
       for (var n = [], r = {}, o = 0; o < e.length; o++) {
         var i = e[o],
           a = t.base ? i[0] + t.base : i[0],
           u = {
             css: i[1],
             media: i[2],
             sourceMap: i[3]
           };
         r[a] ? r[a].parts.push(u) : n.push(r[a] = {
           id: a,
           parts: [u]
         })
       }
       return n
     }

     function h(e, t) {
       var n = u(e.insertInto);
       if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
       var r = c[c.length - 1];
       if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
       else {
         if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
         n.appendChild(t)
       }
     }

     function m(e) {
       if (null === e.parentNode) return !1;
       e.parentNode.removeChild(e);
       var t = c.indexOf(e);
       t >= 0 && c.splice(t, 1)
     }

     function g(e) {
       var t = document.createElement("style");
       return e.attrs.type = "text/css", v(t, e.attrs), h(e, t), t
     }

     function v(e, t) {
       Object.keys(t).forEach((function(n) {
         e.setAttribute(n, t[n])
       }))
     }

     function y(e, t) {
       var n, r, o, i;
       if (t.transform && e.css) {
         if (!(i = t.transform(e.css))) return function() {};
         e.css = i
       }
       if (t.singleton) {
         var a = l++;
         n = s || (s = g(t)), r = _.bind(null, n, a, !1), o = _.bind(null, n, a, !0)
       } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
         var t = document.createElement("link");
         return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", v(t, e.attrs), h(e, t), t
       }(t), r = S.bind(null, n, t), o = function() {
         m(n), n.href && URL.revokeObjectURL(n.href)
       }) : (n = g(t), r = E.bind(null, n), o = function() {
         m(n)
       });
       return r(e),
         function(t) {
           if (t) {
             if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
             r(e = t)
           } else o()
         }
     }
     e.exports = function(e, t) {
       if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
       (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
       var n = d(e, t);
       return p(n, t),
         function(e) {
           for (var r = [], o = 0; o < n.length; o++) {
             var a = n[o];
             (u = i[a.id]).refs--, r.push(u)
           }
           e && p(d(e, t), t);
           for (o = 0; o < r.length; o++) {
             var u;
             if (0 === (u = r[o]).refs) {
               for (var s = 0; s < u.parts.length; s++) u.parts[s]();
               delete i[u.id]
             }
           }
         }
     };
     var b, w = (b = [], function(e, t) {
       return b[e] = t, b.filter(Boolean).join("\n")
     });

     function _(e, t, n, r) {
       var o = n ? "" : r.css;
       if (e.styleSheet) e.styleSheet.cssText = w(t, o);
       else {
         var i = document.createTextNode(o),
           a = e.childNodes;
         a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
       }
     }

     function E(e, t) {
       var n = t.css,
         r = t.media;
       if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
       else {
         for (; e.firstChild;) e.removeChild(e.firstChild);
         e.appendChild(document.createTextNode(n))
       }
     }

     function S(e, t, n) {
       var r = n.css,
         o = n.sourceMap,
         i = void 0 === t.convertToAbsoluteUrls && o;
       (t.convertToAbsoluteUrls || i) && (r = f(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
       var a = new Blob([r], {
           type: "text/css"
         }),
         u = e.href;
       e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       return o.test("number" == typeof e ? r(e) : e.charAt(0))
     };
     var r = String.fromCharCode,
       o = /\s/
   }, function(e, t) {
     e.exports = function() {
       for (var e = {}, t = 0; t < arguments.length; t++) {
         var r = arguments[t];
         for (var o in r) n.call(r, o) && (e[o] = r[o])
       }
       return e
     };
     var n = Object.prototype.hasOwnProperty
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n, r, o, i, a, u) {
       if (!e) {
         var s;
         if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
         else {
           var l = [n, r, o, i, a, u],
             c = 0;
           (s = new Error(t.replace(/%s/g, (function() {
             return l[c++]
           })))).name = "Invariant Violation"
         }
         throw s.framesToPop = 1, s
       }
     }
   }, function(e, t, n) {
     "use strict";
     n.r(t);
     var r = n(0),
       o = n.n(r),
       i = n(1),
       a = n.n(i),
       u = o.a.createContext(null);
     var s = function(e) {
         e()
       },
       l = {
         notify: function() {}
       };

     function c() {
       var e = s,
         t = [],
         n = [];
       return {
         clear: function() {
           n = null, t = null
         },
         notify: function() {
           var r = t = n;
           e((function() {
             for (var e = 0; e < r.length; e++) r[e]()
           }))
         },
         get: function() {
           return n
         },
         subscribe: function(e) {
           var r = !0;
           return n === t && (n = t.slice()), n.push(e),
             function() {
               r && null !== t && (r = !1, n === t && (n = t.slice()), n.splice(n.indexOf(e), 1))
             }
         }
       }
     }
     var f = function() {
       function e(e, t) {
         this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = l, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
       }
       var t = e.prototype;
       return t.addNestedSub = function(e) {
         return this.trySubscribe(), this.listeners.subscribe(e)
       }, t.notifyNestedSubs = function() {
         this.listeners.notify()
       }, t.handleChangeWrapper = function() {
         this.onStateChange && this.onStateChange()
       }, t.isSubscribed = function() {
         return Boolean(this.unsubscribe)
       }, t.trySubscribe = function() {
         this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = c())
       }, t.tryUnsubscribe = function() {
         this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = l)
       }, e
     }();

     function p(e) {
       var t = e.store,
         n = e.context,
         i = e.children,
         a = Object(r.useMemo)((function() {
           var e = new f(t);
           return e.onStateChange = e.notifyNestedSubs, {
             store: t,
             subscription: e
           }
         }), [t]),
         s = Object(r.useMemo)((function() {
           return t.getState()
         }), [t]);
       Object(r.useEffect)((function() {
         var e = a.subscription;
         return e.trySubscribe(), s !== t.getState() && e.notifyNestedSubs(),
           function() {
             e.tryUnsubscribe(), e.onStateChange = null
           }
       }), [a, s]);
       var l = n || u;
       return o.a.createElement(l.Provider, {
         value: a
       }, i)
     }
     p.propTypes = {
       store: a.a.shape({
         subscribe: a.a.func.isRequired,
         dispatch: a.a.func.isRequired,
         getState: a.a.func.isRequired
       }),
       context: a.a.object,
       children: a.a.any
     };
     var d = p;

     function h() {
       return (h = Object.assign || function(e) {
         for (var t = 1; t < arguments.length; t++) {
           var n = arguments[t];
           for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
       }).apply(this, arguments)
     }

     function m(e, t) {
       if (null == e) return {};
       var n, r, o = {},
         i = Object.keys(e);
       for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
       return o
     }
     var g = n(26),
       v = n.n(g),
       y = n(7),
       b = n.n(y),
       w = n(17),
       _ = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect,
       E = [],
       S = [null, null];

     function k(e, t) {
       var n = e[1];
       return [t.payload, n + 1]
     }
     var x = function() {
       return [null, 0]
     };

     function T(e, t) {
       void 0 === t && (t = {});
       var n = t,
         i = n.getDisplayName,
         a = void 0 === i ? function(e) {
           return "ConnectAdvanced(" + e + ")"
         } : i,
         s = n.methodName,
         l = void 0 === s ? "connectAdvanced" : s,
         c = n.renderCountProp,
         p = void 0 === c ? void 0 : c,
         d = n.shouldHandleStateChanges,
         g = void 0 === d || d,
         y = n.storeKey,
         T = void 0 === y ? "store" : y,
         C = n.withRef,
         O = void 0 !== C && C,
         I = n.forwardRef,
         M = void 0 !== I && I,
         A = n.context,
         P = void 0 === A ? u : A,
         N = m(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
       b()(void 0 === p, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"), b()(!O, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
       b()("store" === T, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
       var j = P;
       return function(t) {
         var n = t.displayName || t.name || "Component",
           i = a(n),
           u = h({}, N, {
             getDisplayName: a,
             methodName: l,
             renderCountProp: p,
             shouldHandleStateChanges: g,
             storeKey: T,
             displayName: i,
             wrappedComponentName: n,
             WrappedComponent: t
           }),
           s = N.pure;
         var c = s ? r.useMemo : function(e) {
           return e()
         };

         function d(n) {
           var a = Object(r.useMemo)((function() {
               var e = n.forwardedRef,
                 t = m(n, ["forwardedRef"]);
               return [n.context, e, t]
             }), [n]),
             s = a[0],
             l = a[1],
             p = a[2],
             d = Object(r.useMemo)((function() {
               return s && s.Consumer && Object(w.isContextConsumer)(o.a.createElement(s.Consumer, null)) ? s : j
             }), [s, j]),
             v = Object(r.useContext)(d),
             y = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch),
             T = Boolean(v) && Boolean(v.store);
           b()(y || T, 'Could not find "store" in the context of "' + i + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + i + " in connect options.");
           var C = y ? n.store : v.store,
             O = Object(r.useMemo)((function() {
               return function(t) {
                 return e(t.dispatch, u)
               }(C)
             }), [C]),
             I = Object(r.useMemo)((function() {
               if (!g) return S;
               var e = new f(C, y ? null : v.subscription),
                 t = e.notifyNestedSubs.bind(e);
               return [e, t]
             }), [C, y, v]),
             M = I[0],
             A = I[1],
             P = Object(r.useMemo)((function() {
               return y ? v : h({}, v, {
                 subscription: M
               })
             }), [y, v, M]),
             N = Object(r.useReducer)(k, E, x),
             D = N[0][0],
             R = N[1];
           if (D && D.error) throw D.error;
           var L = Object(r.useRef)(),
             z = Object(r.useRef)(p),
             U = Object(r.useRef)(),
             B = Object(r.useRef)(!1),
             F = c((function() {
               return U.current && p === z.current ? U.current : O(C.getState(), p)
             }), [C, D, p]);
           _((function() {
             z.current = p, L.current = F, B.current = !1, U.current && (U.current = null, A())
           })), _((function() {
             if (g) {
               var e = !1,
                 t = null,
                 n = function() {
                   if (!e) {
                     var n, r, o = C.getState();
                     try {
                       n = O(o, z.current)
                     } catch (e) {
                       r = e, t = e
                     }
                     r || (t = null), n === L.current ? B.current || A() : (L.current = n, U.current = n, B.current = !0, R({
                       type: "STORE_UPDATED",
                       payload: {
                         error: r
                       }
                     }))
                   }
                 };
               M.onStateChange = n, M.trySubscribe(), n();
               return function() {
                 if (e = !0, M.tryUnsubscribe(), M.onStateChange = null, t) throw t
               }
             }
           }), [C, M, O]);
           var H = Object(r.useMemo)((function() {
             return o.a.createElement(t, h({}, F, {
               ref: l
             }))
           }), [l, t, F]);
           return Object(r.useMemo)((function() {
             return g ? o.a.createElement(d.Provider, {
               value: P
             }, H) : H
           }), [d, H, P])
         }
         var y = s ? o.a.memo(d) : d;
         if (y.WrappedComponent = t, y.displayName = i, M) {
           var C = o.a.forwardRef((function(e, t) {
             return o.a.createElement(y, h({}, e, {
               forwardedRef: t
             }))
           }));
           return C.displayName = i, C.WrappedComponent = t, v()(C, t)
         }
         return v()(y, t)
       }
     }
     var C = Object.prototype.hasOwnProperty;

     function O(e, t) {
       return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
     }

     function I(e, t) {
       if (O(e, t)) return !0;
       if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
       var n = Object.keys(e),
         r = Object.keys(t);
       if (n.length !== r.length) return !1;
       for (var o = 0; o < n.length; o++)
         if (!C.call(t, n[o]) || !O(e[n[o]], t[n[o]])) return !1;
       return !0
     }
     var M = n(25);

     function A(e) {
       return function(t, n) {
         var r = e(t, n);

         function o() {
           return r
         }
         return o.dependsOnOwnProps = !1, o
       }
     }

     function P(e) {
       return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
     }

     function N(e, t) {
       return function(t, n) {
         n.displayName;
         var r = function(e, t) {
           return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
         };
         return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
           r.mapToProps = e, r.dependsOnOwnProps = P(e);
           var o = r(t, n);
           return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = P(o), o = r(t, n)), o
         }, r
       }
     }
     var j = [function(e) {
       return "function" == typeof e ? N(e) : void 0
     }, function(e) {
       return e ? void 0 : A((function(e) {
         return {
           dispatch: e
         }
       }))
     }, function(e) {
       return e && "object" == typeof e ? A((function(t) {
         return Object(M.bindActionCreators)(e, t)
       })) : void 0
     }];
     var D = [function(e) {
       return "function" == typeof e ? N(e) : void 0
     }, function(e) {
       return e ? void 0 : A((function() {
         return {}
       }))
     }];

     function R(e, t, n) {
       return h({}, n, {}, e, {}, t)
     }
     var L = [function(e) {
       return "function" == typeof e ? function(e) {
         return function(t, n) {
           n.displayName;
           var r, o = n.pure,
             i = n.areMergedPropsEqual,
             a = !1;
           return function(t, n, u) {
             var s = e(t, n, u);
             return a ? o && i(s, r) || (r = s) : (a = !0, r = s), r
           }
         }
       }(e) : void 0
     }, function(e) {
       return e ? void 0 : function() {
         return R
       }
     }];

     function z(e, t, n, r) {
       return function(o, i) {
         return n(e(o, i), t(r, i), i)
       }
     }

     function U(e, t, n, r, o) {
       var i, a, u, s, l, c = o.areStatesEqual,
         f = o.areOwnPropsEqual,
         p = o.areStatePropsEqual,
         d = !1;

       function h(o, d) {
         var h, m, g = !f(d, a),
           v = !c(o, i);
         return i = o, a = d, g && v ? (u = e(i, a), t.dependsOnOwnProps && (s = t(r, a)), l = n(u, s, a)) : g ? (e.dependsOnOwnProps && (u = e(i, a)), t.dependsOnOwnProps && (s = t(r, a)), l = n(u, s, a)) : v ? (h = e(i, a), m = !p(h, u), u = h, m && (l = n(u, s, a)), l) : l
       }
       return function(o, c) {
         return d ? h(o, c) : (u = e(i = o, a = c), s = t(r, a), l = n(u, s, a), d = !0, l)
       }
     }

     function B(e, t) {
       var n = t.initMapStateToProps,
         r = t.initMapDispatchToProps,
         o = t.initMergeProps,
         i = m(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
         a = n(e, i),
         u = r(e, i),
         s = o(e, i);
       return (i.pure ? U : z)(a, u, s, e, i)
     }

     function F(e, t, n) {
       for (var r = t.length - 1; r >= 0; r--) {
         var o = t[r](e);
         if (o) return o
       }
       return function(t, r) {
         throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
       }
     }

     function H(e, t) {
       return e === t
     }
     var G, W, V, q, Y, K, Q, Z, $, J, X, ee, te = (V = (W = void 0 === G ? {} : G).connectHOC, q = void 0 === V ? T : V, Y = W.mapStateToPropsFactories, K = void 0 === Y ? D : Y, Q = W.mapDispatchToPropsFactories, Z = void 0 === Q ? j : Q, $ = W.mergePropsFactories, J = void 0 === $ ? L : $, X = W.selectorFactory, ee = void 0 === X ? B : X, function(e, t, n, r) {
       void 0 === r && (r = {});
       var o = r,
         i = o.pure,
         a = void 0 === i || i,
         u = o.areStatesEqual,
         s = void 0 === u ? H : u,
         l = o.areOwnPropsEqual,
         c = void 0 === l ? I : l,
         f = o.areStatePropsEqual,
         p = void 0 === f ? I : f,
         d = o.areMergedPropsEqual,
         g = void 0 === d ? I : d,
         v = m(o, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
         y = F(e, K, "mapStateToProps"),
         b = F(t, Z, "mapDispatchToProps"),
         w = F(n, J, "mergeProps");
       return q(ee, h({
         methodName: "connect",
         getDisplayName: function(e) {
           return "Connect(" + e + ")"
         },
         shouldHandleStateChanges: Boolean(e),
         initMapStateToProps: y,
         initMapDispatchToProps: b,
         initMergeProps: w,
         pure: a,
         areStatesEqual: s,
         areOwnPropsEqual: c,
         areStatePropsEqual: p,
         areMergedPropsEqual: g
       }, v))
     });

     function ne() {
       var e = Object(r.useContext)(u);
       return b()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"), e
     }

     function re(e) {
       void 0 === e && (e = u);
       var t = e === u ? ne : function() {
         return Object(r.useContext)(e)
       };
       return function() {
         return t().store
       }
     }
     var oe = re();

     function ie(e) {
       void 0 === e && (e = u);
       var t = e === u ? oe : re(e);
       return function() {
         return t().dispatch
       }
     }
     var ae = ie(),
       ue = function(e, t) {
         return e === t
       };

     function se(e) {
       void 0 === e && (e = u);
       var t = e === u ? ne : function() {
         return Object(r.useContext)(e)
       };
       return function(e, n) {
         void 0 === n && (n = ue), b()(e, "You must pass a selector to useSelectors");
         var o = t();
         return function(e, t, n, o) {
           var i, a = Object(r.useReducer)((function(e) {
               return e + 1
             }), 0)[1],
             u = Object(r.useMemo)((function() {
               return new f(n, o)
             }), [n, o]),
             s = Object(r.useRef)(),
             l = Object(r.useRef)(),
             c = Object(r.useRef)();
           try {
             i = e !== l.current || s.current ? e(n.getState()) : c.current
           } catch (e) {
             var p = "An error occurred while selecting the store state: " + e.message + ".";
             throw s.current && (p += "\nThe error may be correlated with this previous error:\n" + s.current.stack + "\n\nOriginal stack trace:"), new Error(p)
           }
           return _((function() {
             l.current = e, c.current = i, s.current = void 0
           })), _((function() {
             function e() {
               try {
                 var e = l.current(n.getState());
                 if (t(e, c.current)) return;
                 c.current = e
               } catch (e) {
                 s.current = e
               }
               a({})
             }
             return u.onStateChange = e, u.trySubscribe(), e(),
               function() {
                 return u.tryUnsubscribe()
               }
           }), [n, u]), i
         }(e, n, o.store, o.subscription)
       }
     }
     var le, ce = se(),
       fe = n(13);
     n.d(t, "Provider", (function() {
       return d
     })), n.d(t, "connectAdvanced", (function() {
       return T
     })), n.d(t, "ReactReduxContext", (function() {
       return u
     })), n.d(t, "connect", (function() {
       return te
     })), n.d(t, "batch", (function() {
       return fe.unstable_batchedUpdates
     })), n.d(t, "useDispatch", (function() {
       return ae
     })), n.d(t, "createDispatchHook", (function() {
       return ie
     })), n.d(t, "useSelector", (function() {
       return ce
     })), n.d(t, "createSelectorHook", (function() {
       return se
     })), n.d(t, "useStore", (function() {
       return oe
     })), n.d(t, "createStoreHook", (function() {
       return re
     })), n.d(t, "shallowEqual", (function() {
       return I
     })), le = fe.unstable_batchedUpdates, s = le
   }, function(e, t, n) {
     e.exports = function() {
       "use strict";
       var e = Array.prototype.slice;

       function t(e, t) {
         t && (e.prototype = Object.create(t.prototype)), e.prototype.constructor = e
       }

       function n(e) {
         return a(e) ? e : H(e)
       }

       function r(e) {
         return u(e) ? e : G(e)
       }

       function o(e) {
         return s(e) ? e : W(e)
       }

       function i(e) {
         return a(e) && !l(e) ? e : V(e)
       }

       function a(e) {
         return !(!e || !e[f])
       }

       function u(e) {
         return !(!e || !e[p])
       }

       function s(e) {
         return !(!e || !e[d])
       }

       function l(e) {
         return u(e) || s(e)
       }

       function c(e) {
         return !(!e || !e[h])
       }
       t(r, n), t(o, n), t(i, n), n.isIterable = a, n.isKeyed = u, n.isIndexed = s, n.isAssociative = l, n.isOrdered = c, n.Keyed = r, n.Indexed = o, n.Set = i;
       var f = "@@__IMMUTABLE_ITERABLE__@@",
         p = "@@__IMMUTABLE_KEYED__@@",
         d = "@@__IMMUTABLE_INDEXED__@@",
         h = "@@__IMMUTABLE_ORDERED__@@",
         m = {},
         g = {
           value: !1
         },
         v = {
           value: !1
         };

       function y(e) {
         return e.value = !1, e
       }

       function b(e) {
         e && (e.value = !0)
       }

       function w() {}

       function _(e, t) {
         t = t || 0;
         for (var n = Math.max(0, e.length - t), r = new Array(n), o = 0; o < n; o++) r[o] = e[o + t];
         return r
       }

       function E(e) {
         return void 0 === e.size && (e.size = e.__iterate(k)), e.size
       }

       function S(e, t) {
         if ("number" != typeof t) {
           var n = t >>> 0;
           if ("" + n !== t || 4294967295 === n) return NaN;
           t = n
         }
         return t < 0 ? E(e) + t : t
       }

       function k() {
         return !0
       }

       function x(e, t, n) {
         return (0 === e || void 0 !== n && e <= -n) && (void 0 === t || void 0 !== n && t >= n)
       }

       function T(e, t) {
         return O(e, t, 0)
       }

       function C(e, t) {
         return O(e, t, t)
       }

       function O(e, t, n) {
         return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
       }
       var I, M, A, P = "function" == typeof Symbol && Symbol.iterator,
         N = P || "@@iterator";

       function j(e) {
         this.next = e
       }

       function D(e, t, n, r) {
         var o = 0 === e ? t : 1 === e ? n : [t, n];
         return r ? r.value = o : r = {
           value: o,
           done: !1
         }, r
       }

       function R() {
         return {
           value: void 0,
           done: !0
         }
       }

       function L(e) {
         return !!B(e)
       }

       function z(e) {
         return e && "function" == typeof e.next
       }

       function U(e) {
         var t = B(e);
         return t && t.call(e)
       }

       function B(e) {
         var t = e && (P && e[P] || e["@@iterator"]);
         if ("function" == typeof t) return t
       }

       function F(e) {
         return e && "number" == typeof e.length
       }

       function H(e) {
         return null == e ? $() : a(e) ? e.toSeq() : function(e) {
           var t = ee(e) || "object" == typeof e && new Y(e);
           if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
           return t
         }(e)
       }

       function G(e) {
         return null == e ? $().toKeyedSeq() : a(e) ? u(e) ? e.toSeq() : e.fromEntrySeq() : J(e)
       }

       function W(e) {
         return null == e ? $() : a(e) ? u(e) ? e.entrySeq() : e.toIndexedSeq() : X(e)
       }

       function V(e) {
         return (null == e ? $() : a(e) ? u(e) ? e.entrySeq() : e : X(e)).toSetSeq()
       }

       function q(e) {
         this._array = e, this.size = e.length
       }

       function Y(e) {
         var t = Object.keys(e);
         this._object = e, this._keys = t, this.size = t.length
       }

       function K(e) {
         this._iterable = e, this.size = e.length || e.size
       }

       function Q(e) {
         this._iterator = e, this._iteratorCache = []
       }

       function Z(e) {
         return !(!e || !e["@@__IMMUTABLE_SEQ__@@"])
       }

       function $() {
         return I || (I = new q([]))
       }

       function J(e) {
         var t = Array.isArray(e) ? new q(e).fromEntrySeq() : z(e) ? new Q(e).fromEntrySeq() : L(e) ? new K(e).fromEntrySeq() : "object" == typeof e ? new Y(e) : void 0;
         if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
         return t
       }

       function X(e) {
         var t = ee(e);
         if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
         return t
       }

       function ee(e) {
         return F(e) ? new q(e) : z(e) ? new Q(e) : L(e) ? new K(e) : void 0
       }

       function te(e, t, n, r) {
         var o = e._cache;
         if (o) {
           for (var i = o.length - 1, a = 0; a <= i; a++) {
             var u = o[n ? i - a : a];
             if (!1 === t(u[1], r ? u[0] : a, e)) return a + 1
           }
           return a
         }
         return e.__iterateUncached(t, n)
       }

       function ne(e, t, n, r) {
         var o = e._cache;
         if (o) {
           var i = o.length - 1,
             a = 0;
           return new j((function() {
             var e = o[n ? i - a : a];
             return a++ > i ? {
               value: void 0,
               done: !0
             } : D(t, r ? e[0] : a - 1, e[1])
           }))
         }
         return e.__iteratorUncached(t, n)
       }

       function re(e, t) {
         return t ? function e(t, n, r, o) {
           return Array.isArray(n) ? t.call(o, r, W(n).map((function(r, o) {
             return e(t, r, o, n)
           }))) : ie(n) ? t.call(o, r, G(n).map((function(r, o) {
             return e(t, r, o, n)
           }))) : n
         }(t, e, "", {
           "": e
         }) : oe(e)
       }

       function oe(e) {
         return Array.isArray(e) ? W(e).map(oe).toList() : ie(e) ? G(e).map(oe).toMap() : e
       }

       function ie(e) {
         return e && (e.constructor === Object || void 0 === e.constructor)
       }

       function ae(e, t) {
         if (e === t || e != e && t != t) return !0;
         if (!e || !t) return !1;
         if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
           if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
           if (!e || !t) return !1
         }
         return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
       }

       function ue(e, t) {
         if (e === t) return !0;
         if (!a(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || u(e) !== u(t) || s(e) !== s(t) || c(e) !== c(t)) return !1;
         if (0 === e.size && 0 === t.size) return !0;
         var n = !l(e);
         if (c(e)) {
           var r = e.entries();
           return t.every((function(e, t) {
             var o = r.next().value;
             return o && ae(o[1], e) && (n || ae(o[0], t))
           })) && r.next().done
         }
         var o = !1;
         if (void 0 === e.size)
           if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
           else {
             o = !0;
             var i = e;
             e = t, t = i
           } var f = !0,
           p = t.__iterate((function(t, r) {
             if (n ? !e.has(t) : o ? !ae(t, e.get(r, m)) : !ae(e.get(r, m), t)) return f = !1, !1
           }));
         return f && e.size === p
       }

       function se(e, t) {
         if (!(this instanceof se)) return new se(e, t);
         if (this._value = e, this.size = void 0 === t ? 1 / 0 : Math.max(0, t), 0 === this.size) {
           if (M) return M;
           M = this
         }
       }

       function le(e, t) {
         if (!e) throw new Error(t)
       }

       function ce(e, t, n) {
         if (!(this instanceof ce)) return new ce(e, t, n);
         if (le(0 !== n, "Cannot step a Range by 0"), e = e || 0, void 0 === t && (t = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), t < e && (n = -n), this._start = e, this._end = t, this._step = n, this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1), 0 === this.size) {
           if (A) return A;
           A = this
         }
       }

       function fe() {
         throw TypeError("Abstract")
       }

       function pe() {}

       function de() {}

       function he() {}
       j.prototype.toString = function() {
         return "[Iterator]"
       }, j.KEYS = 0, j.VALUES = 1, j.ENTRIES = 2, j.prototype.inspect = j.prototype.toSource = function() {
         return this.toString()
       }, j.prototype[N] = function() {
         return this
       }, t(H, n), H.of = function() {
         return H(arguments)
       }, H.prototype.toSeq = function() {
         return this
       }, H.prototype.toString = function() {
         return this.__toString("Seq {", "}")
       }, H.prototype.cacheResult = function() {
         return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
       }, H.prototype.__iterate = function(e, t) {
         return te(this, e, t, !0)
       }, H.prototype.__iterator = function(e, t) {
         return ne(this, e, t, !0)
       }, t(G, H), G.prototype.toKeyedSeq = function() {
         return this
       }, t(W, H), W.of = function() {
         return W(arguments)
       }, W.prototype.toIndexedSeq = function() {
         return this
       }, W.prototype.toString = function() {
         return this.__toString("Seq [", "]")
       }, W.prototype.__iterate = function(e, t) {
         return te(this, e, t, !1)
       }, W.prototype.__iterator = function(e, t) {
         return ne(this, e, t, !1)
       }, t(V, H), V.of = function() {
         return V(arguments)
       }, V.prototype.toSetSeq = function() {
         return this
       }, H.isSeq = Z, H.Keyed = G, H.Set = V, H.Indexed = W, H.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, t(q, W), q.prototype.get = function(e, t) {
         return this.has(e) ? this._array[S(this, e)] : t
       }, q.prototype.__iterate = function(e, t) {
         for (var n = this._array, r = n.length - 1, o = 0; o <= r; o++)
           if (!1 === e(n[t ? r - o : o], o, this)) return o + 1;
         return o
       }, q.prototype.__iterator = function(e, t) {
         var n = this._array,
           r = n.length - 1,
           o = 0;
         return new j((function() {
           return o > r ? {
             value: void 0,
             done: !0
           } : D(e, o, n[t ? r - o++ : o++])
         }))
       }, t(Y, G), Y.prototype.get = function(e, t) {
         return void 0 === t || this.has(e) ? this._object[e] : t
       }, Y.prototype.has = function(e) {
         return this._object.hasOwnProperty(e)
       }, Y.prototype.__iterate = function(e, t) {
         for (var n = this._object, r = this._keys, o = r.length - 1, i = 0; i <= o; i++) {
           var a = r[t ? o - i : i];
           if (!1 === e(n[a], a, this)) return i + 1
         }
         return i
       }, Y.prototype.__iterator = function(e, t) {
         var n = this._object,
           r = this._keys,
           o = r.length - 1,
           i = 0;
         return new j((function() {
           var a = r[t ? o - i : i];
           return i++ > o ? {
             value: void 0,
             done: !0
           } : D(e, a, n[a])
         }))
       }, Y.prototype[h] = !0, t(K, W), K.prototype.__iterateUncached = function(e, t) {
         if (t) return this.cacheResult().__iterate(e, t);
         var n = U(this._iterable),
           r = 0;
         if (z(n))
           for (var o; !(o = n.next()).done && !1 !== e(o.value, r++, this););
         return r
       }, K.prototype.__iteratorUncached = function(e, t) {
         if (t) return this.cacheResult().__iterator(e, t);
         var n = U(this._iterable);
         if (!z(n)) return new j(R);
         var r = 0;
         return new j((function() {
           var t = n.next();
           return t.done ? t : D(e, r++, t.value)
         }))
       }, t(Q, W), Q.prototype.__iterateUncached = function(e, t) {
         if (t) return this.cacheResult().__iterate(e, t);
         for (var n, r = this._iterator, o = this._iteratorCache, i = 0; i < o.length;)
           if (!1 === e(o[i], i++, this)) return i;
         for (; !(n = r.next()).done;) {
           var a = n.value;
           if (o[i] = a, !1 === e(a, i++, this)) break
         }
         return i
       }, Q.prototype.__iteratorUncached = function(e, t) {
         if (t) return this.cacheResult().__iterator(e, t);
         var n = this._iterator,
           r = this._iteratorCache,
           o = 0;
         return new j((function() {
           if (o >= r.length) {
             var t = n.next();
             if (t.done) return t;
             r[o] = t.value
           }
           return D(e, o, r[o++])
         }))
       }, t(se, W), se.prototype.toString = function() {
         return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
       }, se.prototype.get = function(e, t) {
         return this.has(e) ? this._value : t
       }, se.prototype.includes = function(e) {
         return ae(this._value, e)
       }, se.prototype.slice = function(e, t) {
         var n = this.size;
         return x(e, t, n) ? this : new se(this._value, C(t, n) - T(e, n))
       }, se.prototype.reverse = function() {
         return this
       }, se.prototype.indexOf = function(e) {
         return ae(this._value, e) ? 0 : -1
       }, se.prototype.lastIndexOf = function(e) {
         return ae(this._value, e) ? this.size : -1
       }, se.prototype.__iterate = function(e, t) {
         for (var n = 0; n < this.size; n++)
           if (!1 === e(this._value, n, this)) return n + 1;
         return n
       }, se.prototype.__iterator = function(e, t) {
         var n = this,
           r = 0;
         return new j((function() {
           return r < n.size ? D(e, r++, n._value) : {
             value: void 0,
             done: !0
           }
         }))
       }, se.prototype.equals = function(e) {
         return e instanceof se ? ae(this._value, e._value) : ue(e)
       }, t(ce, W), ce.prototype.toString = function() {
         return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
       }, ce.prototype.get = function(e, t) {
         return this.has(e) ? this._start + S(this, e) * this._step : t
       }, ce.prototype.includes = function(e) {
         var t = (e - this._start) / this._step;
         return t >= 0 && t < this.size && t === Math.floor(t)
       }, ce.prototype.slice = function(e, t) {
         return x(e, t, this.size) ? this : (e = T(e, this.size), (t = C(t, this.size)) <= e ? new ce(0, 0) : new ce(this.get(e, this._end), this.get(t, this._end), this._step))
       }, ce.prototype.indexOf = function(e) {
         var t = e - this._start;
         if (t % this._step == 0) {
           var n = t / this._step;
           if (n >= 0 && n < this.size) return n
         }
         return -1
       }, ce.prototype.lastIndexOf = function(e) {
         return this.indexOf(e)
       }, ce.prototype.__iterate = function(e, t) {
         for (var n = this.size - 1, r = this._step, o = t ? this._start + n * r : this._start, i = 0; i <= n; i++) {
           if (!1 === e(o, i, this)) return i + 1;
           o += t ? -r : r
         }
         return i
       }, ce.prototype.__iterator = function(e, t) {
         var n = this.size - 1,
           r = this._step,
           o = t ? this._start + n * r : this._start,
           i = 0;
         return new j((function() {
           var a = o;
           return o += t ? -r : r, i > n ? {
             value: void 0,
             done: !0
           } : D(e, i++, a)
         }))
       }, ce.prototype.equals = function(e) {
         return e instanceof ce ? this._start === e._start && this._end === e._end && this._step === e._step : ue(this, e)
       }, t(fe, n), t(pe, fe), t(de, fe), t(he, fe), fe.Keyed = pe, fe.Indexed = de, fe.Set = he;
       var me = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(e, t) {
         var n = 65535 & (e |= 0),
           r = 65535 & (t |= 0);
         return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16 >>> 0) | 0
       };

       function ge(e) {
         return e >>> 1 & 1073741824 | 3221225471 & e
       }

       function ve(e) {
         if (!1 === e || null == e) return 0;
         if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)) return 0;
         if (!0 === e) return 1;
         var t = typeof e;
         if ("number" === t) {
           if (e != e || e === 1 / 0) return 0;
           var n = 0 | e;
           for (n !== e && (n ^= 4294967295 * e); e > 4294967295;) n ^= e /= 4294967295;
           return ge(n)
         }
         if ("string" === t) return e.length > xe ? function(e) {
           var t = Oe[e];
           return void 0 === t && (t = ye(e), Ce === Te && (Ce = 0, Oe = {}), Ce++, Oe[e] = t), t
         }(e) : ye(e);
         if ("function" == typeof e.hashCode) return e.hashCode();
         if ("object" === t) return function(e) {
           var t;
           if (Ee && void 0 !== (t = be.get(e))) return t;
           if (void 0 !== (t = e[ke])) return t;
           if (!_e) {
             if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[ke])) return t;
             if (void 0 !== (t = function(e) {
                 if (e && e.nodeType > 0) switch (e.nodeType) {
                   case 1:
                     return e.uniqueID;
                   case 9:
                     return e.documentElement && e.documentElement.uniqueID
                 }
               }(e))) return t
           }
           if (t = ++Se, 1073741824 & Se && (Se = 0), Ee) be.set(e, t);
           else {
             if (void 0 !== we && !1 === we(e)) throw new Error("Non-extensible objects are not allowed as keys.");
             if (_e) Object.defineProperty(e, ke, {
               enumerable: !1,
               configurable: !1,
               writable: !1,
               value: t
             });
             else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) e.propertyIsEnumerable = function() {
               return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
             }, e.propertyIsEnumerable[ke] = t;
             else {
               if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
               e[ke] = t
             }
           }
           return t
         }(e);
         if ("function" == typeof e.toString) return ye(e.toString());
         throw new Error("Value type " + t + " cannot be hashed.")
       }

       function ye(e) {
         for (var t = 0, n = 0; n < e.length; n++) t = 31 * t + e.charCodeAt(n) | 0;
         return ge(t)
       }
       var be, we = Object.isExtensible,
         _e = function() {
           try {
             return Object.defineProperty({}, "@", {}), !0
           } catch (e) {
             return !1
           }
         }(),
         Ee = "function" == typeof WeakMap;
       Ee && (be = new WeakMap);
       var Se = 0,
         ke = "__immutablehash__";
       "function" == typeof Symbol && (ke = Symbol(ke));
       var xe = 16,
         Te = 255,
         Ce = 0,
         Oe = {};

       function Ie(e) {
         le(e !== 1 / 0, "Cannot perform this action with an infinite size.")
       }

       function Me(e) {
         return null == e ? We() : Ae(e) && !c(e) ? e : We().withMutations((function(t) {
           var n = r(e);
           Ie(n.size), n.forEach((function(e, n) {
             return t.set(n, e)
           }))
         }))
       }

       function Ae(e) {
         return !(!e || !e[Ne])
       }
       t(Me, pe), Me.of = function() {
         var t = e.call(arguments, 0);
         return We().withMutations((function(e) {
           for (var n = 0; n < t.length; n += 2) {
             if (n + 1 >= t.length) throw new Error("Missing value for key: " + t[n]);
             e.set(t[n], t[n + 1])
           }
         }))
       }, Me.prototype.toString = function() {
         return this.__toString("Map {", "}")
       }, Me.prototype.get = function(e, t) {
         return this._root ? this._root.get(0, void 0, e, t) : t
       }, Me.prototype.set = function(e, t) {
         return Ve(this, e, t)
       }, Me.prototype.setIn = function(e, t) {
         return this.updateIn(e, m, (function() {
           return t
         }))
       }, Me.prototype.remove = function(e) {
         return Ve(this, e, m)
       }, Me.prototype.deleteIn = function(e) {
         return this.updateIn(e, (function() {
           return m
         }))
       }, Me.prototype.update = function(e, t, n) {
         return 1 === arguments.length ? e(this) : this.updateIn([e], t, n)
       }, Me.prototype.updateIn = function(e, t, n) {
         n || (n = t, t = void 0);
         var r = function e(t, n, r, o) {
           var i = t === m,
             a = n.next();
           if (a.done) {
             var u = i ? r : t,
               s = o(u);
             return s === u ? t : s
           }
           le(i || t && t.set, "invalid keyPath");
           var l = a.value,
             c = i ? m : t.get(l, m),
             f = e(c, n, r, o);
           return f === c ? t : f === m ? t.remove(l) : (i ? We() : t).set(l, f)
         }(this, Qt(e), t, n);
         return r === m ? void 0 : r
       }, Me.prototype.clear = function() {
         return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : We()
       }, Me.prototype.merge = function() {
         return Qe(this, void 0, arguments)
       }, Me.prototype.mergeWith = function(t) {
         var n = e.call(arguments, 1);
         return Qe(this, t, n)
       }, Me.prototype.mergeIn = function(t) {
         var n = e.call(arguments, 1);
         return this.updateIn(t, We(), (function(e) {
           return "function" == typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1]
         }))
       }, Me.prototype.mergeDeep = function() {
         return Qe(this, Ze, arguments)
       }, Me.prototype.mergeDeepWith = function(t) {
         var n = e.call(arguments, 1);
         return Qe(this, $e(t), n)
       }, Me.prototype.mergeDeepIn = function(t) {
         var n = e.call(arguments, 1);
         return this.updateIn(t, We(), (function(e) {
           return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1]
         }))
       }, Me.prototype.sort = function(e) {
         return _t(zt(this, e))
       }, Me.prototype.sortBy = function(e, t) {
         return _t(zt(this, t, e))
       }, Me.prototype.withMutations = function(e) {
         var t = this.asMutable();
         return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
       }, Me.prototype.asMutable = function() {
         return this.__ownerID ? this : this.__ensureOwner(new w)
       }, Me.prototype.asImmutable = function() {
         return this.__ensureOwner()
       }, Me.prototype.wasAltered = function() {
         return this.__altered
       }, Me.prototype.__iterator = function(e, t) {
         return new Be(this, e, t)
       }, Me.prototype.__iterate = function(e, t) {
         var n = this,
           r = 0;
         return this._root && this._root.iterate((function(t) {
           return r++, e(t[1], t[0], n)
         }), t), r
       }, Me.prototype.__ensureOwner = function(e) {
         return e === this.__ownerID ? this : e ? Ge(this.size, this._root, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
       }, Me.isMap = Ae;
       var Pe, Ne = "@@__IMMUTABLE_MAP__@@",
         je = Me.prototype;

       function De(e, t) {
         this.ownerID = e, this.entries = t
       }

       function Re(e, t, n) {
         this.ownerID = e, this.bitmap = t, this.nodes = n
       }

       function Le(e, t, n) {
         this.ownerID = e, this.count = t, this.nodes = n
       }

       function ze(e, t, n) {
         this.ownerID = e, this.keyHash = t, this.entries = n
       }

       function Ue(e, t, n) {
         this.ownerID = e, this.keyHash = t, this.entry = n
       }

       function Be(e, t, n) {
         this._type = t, this._reverse = n, this._stack = e._root && He(e._root)
       }

       function Fe(e, t) {
         return D(e, t[0], t[1])
       }

       function He(e, t) {
         return {
           node: e,
           index: 0,
           __prev: t
         }
       }

       function Ge(e, t, n, r) {
         var o = Object.create(je);
         return o.size = e, o._root = t, o.__ownerID = n, o.__hash = r, o.__altered = !1, o
       }

       function We() {
         return Pe || (Pe = Ge(0))
       }

       function Ve(e, t, n) {
         var r, o;
         if (e._root) {
           var i = y(g),
             a = y(v);
           if (r = qe(e._root, e.__ownerID, 0, void 0, t, n, i, a), !a.value) return e;
           o = e.size + (i.value ? n === m ? -1 : 1 : 0)
         } else {
           if (n === m) return e;
           o = 1, r = new De(e.__ownerID, [
             [t, n]
           ])
         }
         return e.__ownerID ? (e.size = o, e._root = r, e.__hash = void 0, e.__altered = !0, e) : r ? Ge(o, r) : We()
       }

       function qe(e, t, n, r, o, i, a, u) {
         return e ? e.update(t, n, r, o, i, a, u) : i === m ? e : (b(u), b(a), new Ue(t, r, [o, i]))
       }

       function Ye(e) {
         return e.constructor === Ue || e.constructor === ze
       }

       function Ke(e, t, n, r, o) {
         if (e.keyHash === r) return new ze(t, r, [e.entry, o]);
         var i, a = 31 & (0 === n ? e.keyHash : e.keyHash >>> n),
           u = 31 & (0 === n ? r : r >>> n);
         return new Re(t, 1 << a | 1 << u, a === u ? [Ke(e, t, n + 5, r, o)] : (i = new Ue(t, r, o), a < u ? [e, i] : [i, e]))
       }

       function Qe(e, t, n) {
         for (var o = [], i = 0; i < n.length; i++) {
           var u = n[i],
             s = r(u);
           a(u) || (s = s.map((function(e) {
             return re(e)
           }))), o.push(s)
         }
         return Je(e, t, o)
       }

       function Ze(e, t, n) {
         return e && e.mergeDeep && a(t) ? e.mergeDeep(t) : ae(e, t) ? e : t
       }

       function $e(e) {
         return function(t, n, r) {
           if (t && t.mergeDeepWith && a(n)) return t.mergeDeepWith(e, n);
           var o = e(t, n, r);
           return ae(t, o) ? t : o
         }
       }

       function Je(e, t, n) {
         return 0 === (n = n.filter((function(e) {
           return 0 !== e.size
         }))).length ? e : 0 !== e.size || e.__ownerID || 1 !== n.length ? e.withMutations((function(e) {
           for (var r = t ? function(n, r) {
             e.update(r, m, (function(e) {
               return e === m ? n : t(e, n, r)
             }))
           } : function(t, n) {
             e.set(n, t)
           }, o = 0; o < n.length; o++) n[o].forEach(r)
         })) : e.constructor(n[0])
       }

       function Xe(e) {
         return e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135, e += e >> 8, 127 & (e += e >> 16)
       }

       function et(e, t, n, r) {
         var o = r ? e : _(e);
         return o[t] = n, o
       }
       je[Ne] = !0, je.delete = je.remove, je.removeIn = je.deleteIn, De.prototype.get = function(e, t, n, r) {
         for (var o = this.entries, i = 0, a = o.length; i < a; i++)
           if (ae(n, o[i][0])) return o[i][1];
         return r
       }, De.prototype.update = function(e, t, n, r, o, i, a) {
         for (var u = o === m, s = this.entries, l = 0, c = s.length; l < c && !ae(r, s[l][0]); l++);
         var f = l < c;
         if (f ? s[l][1] === o : u) return this;
         if (b(a), (u || !f) && b(i), !u || 1 !== s.length) {
           if (!f && !u && s.length >= tt) return function(e, t, n, r) {
             e || (e = new w);
             for (var o = new Ue(e, ve(n), [n, r]), i = 0; i < t.length; i++) {
               var a = t[i];
               o = o.update(e, 0, void 0, a[0], a[1])
             }
             return o
           }(e, s, r, o);
           var p = e && e === this.ownerID,
             d = p ? s : _(s);
           return f ? u ? l === c - 1 ? d.pop() : d[l] = d.pop() : d[l] = [r, o] : d.push([r, o]), p ? (this.entries = d, this) : new De(e, d)
         }
       }, Re.prototype.get = function(e, t, n, r) {
         void 0 === t && (t = ve(n));
         var o = 1 << (31 & (0 === e ? t : t >>> e)),
           i = this.bitmap;
         return 0 == (i & o) ? r : this.nodes[Xe(i & o - 1)].get(e + 5, t, n, r)
       }, Re.prototype.update = function(e, t, n, r, o, i, a) {
         void 0 === n && (n = ve(r));
         var u = 31 & (0 === t ? n : n >>> t),
           s = 1 << u,
           l = this.bitmap,
           c = 0 != (l & s);
         if (!c && o === m) return this;
         var f = Xe(l & s - 1),
           p = this.nodes,
           d = c ? p[f] : void 0,
           h = qe(d, e, t + 5, n, r, o, i, a);
         if (h === d) return this;
         if (!c && h && p.length >= nt) return function(e, t, n, r, o) {
           for (var i = 0, a = new Array(32), u = 0; 0 !== n; u++, n >>>= 1) a[u] = 1 & n ? t[i++] : void 0;
           return a[r] = o, new Le(e, i + 1, a)
         }(e, p, l, u, h);
         if (c && !h && 2 === p.length && Ye(p[1 ^ f])) return p[1 ^ f];
         if (c && h && 1 === p.length && Ye(h)) return h;
         var g = e && e === this.ownerID,
           v = c ? h ? l : l ^ s : l | s,
           y = c ? h ? et(p, f, h, g) : function(e, t, n) {
             var r = e.length - 1;
             if (n && t === r) return e.pop(), e;
             for (var o = new Array(r), i = 0, a = 0; a < r; a++) a === t && (i = 1), o[a] = e[a + i];
             return o
           }(p, f, g) : function(e, t, n, r) {
             var o = e.length + 1;
             if (r && t + 1 === o) return e[t] = n, e;
             for (var i = new Array(o), a = 0, u = 0; u < o; u++) u === t ? (i[u] = n, a = -1) : i[u] = e[u + a];
             return i
           }(p, f, h, g);
         return g ? (this.bitmap = v, this.nodes = y, this) : new Re(e, v, y)
       }, Le.prototype.get = function(e, t, n, r) {
         void 0 === t && (t = ve(n));
         var o = 31 & (0 === e ? t : t >>> e),
           i = this.nodes[o];
         return i ? i.get(e + 5, t, n, r) : r
       }, Le.prototype.update = function(e, t, n, r, o, i, a) {
         void 0 === n && (n = ve(r));
         var u = 31 & (0 === t ? n : n >>> t),
           s = o === m,
           l = this.nodes,
           c = l[u];
         if (s && !c) return this;
         var f = qe(c, e, t + 5, n, r, o, i, a);
         if (f === c) return this;
         var p = this.count;
         if (c) {
           if (!f && --p < rt) return function(e, t, n, r) {
             for (var o = 0, i = 0, a = new Array(n), u = 0, s = 1, l = t.length; u < l; u++, s <<= 1) {
               var c = t[u];
               void 0 !== c && u !== r && (o |= s, a[i++] = c)
             }
             return new Re(e, o, a)
           }(e, l, p, u)
         } else p++;
         var d = e && e === this.ownerID,
           h = et(l, u, f, d);
         return d ? (this.count = p, this.nodes = h, this) : new Le(e, p, h)
       }, ze.prototype.get = function(e, t, n, r) {
         for (var o = this.entries, i = 0, a = o.length; i < a; i++)
           if (ae(n, o[i][0])) return o[i][1];
         return r
       }, ze.prototype.update = function(e, t, n, r, o, i, a) {
         void 0 === n && (n = ve(r));
         var u = o === m;
         if (n !== this.keyHash) return u ? this : (b(a), b(i), Ke(this, e, t, n, [r, o]));
         for (var s = this.entries, l = 0, c = s.length; l < c && !ae(r, s[l][0]); l++);
         var f = l < c;
         if (f ? s[l][1] === o : u) return this;
         if (b(a), (u || !f) && b(i), u && 2 === c) return new Ue(e, this.keyHash, s[1 ^ l]);
         var p = e && e === this.ownerID,
           d = p ? s : _(s);
         return f ? u ? l === c - 1 ? d.pop() : d[l] = d.pop() : d[l] = [r, o] : d.push([r, o]), p ? (this.entries = d, this) : new ze(e, this.keyHash, d)
       }, Ue.prototype.get = function(e, t, n, r) {
         return ae(n, this.entry[0]) ? this.entry[1] : r
       }, Ue.prototype.update = function(e, t, n, r, o, i, a) {
         var u = o === m,
           s = ae(r, this.entry[0]);
         return (s ? o === this.entry[1] : u) ? this : (b(a), u ? void b(i) : s ? e && e === this.ownerID ? (this.entry[1] = o, this) : new Ue(e, this.keyHash, [r, o]) : (b(i), Ke(this, e, t, ve(r), [r, o])))
       }, De.prototype.iterate = ze.prototype.iterate = function(e, t) {
         for (var n = this.entries, r = 0, o = n.length - 1; r <= o; r++)
           if (!1 === e(n[t ? o - r : r])) return !1
       }, Re.prototype.iterate = Le.prototype.iterate = function(e, t) {
         for (var n = this.nodes, r = 0, o = n.length - 1; r <= o; r++) {
           var i = n[t ? o - r : r];
           if (i && !1 === i.iterate(e, t)) return !1
         }
       }, Ue.prototype.iterate = function(e, t) {
         return e(this.entry)
       }, t(Be, j), Be.prototype.next = function() {
         for (var e = this._type, t = this._stack; t;) {
           var n, r = t.node,
             o = t.index++;
           if (r.entry) {
             if (0 === o) return Fe(e, r.entry)
           } else if (r.entries) {
             if (o <= (n = r.entries.length - 1)) return Fe(e, r.entries[this._reverse ? n - o : o])
           } else if (o <= (n = r.nodes.length - 1)) {
             var i = r.nodes[this._reverse ? n - o : o];
             if (i) {
               if (i.entry) return Fe(e, i.entry);
               t = this._stack = He(i, t)
             }
             continue
           }
           t = this._stack = this._stack.__prev
         }
         return {
           value: void 0,
           done: !0
         }
       };
       var tt = 8,
         nt = 16,
         rt = 8;

       function ot(e) {
         var t = ht();
         if (null == e) return t;
         if (it(e)) return e;
         var n = o(e),
           r = n.size;
         return 0 === r ? t : (Ie(r), r > 0 && r < 32 ? dt(0, r, 5, null, new st(n.toArray())) : t.withMutations((function(e) {
           e.setSize(r), n.forEach((function(t, n) {
             return e.set(n, t)
           }))
         })))
       }

       function it(e) {
         return !(!e || !e[at])
       }
       t(ot, de), ot.of = function() {
         return this(arguments)
       }, ot.prototype.toString = function() {
         return this.__toString("List [", "]")
       }, ot.prototype.get = function(e, t) {
         if ((e = S(this, e)) >= 0 && e < this.size) {
           var n = vt(this, e += this._origin);
           return n && n.array[31 & e]
         }
         return t
       }, ot.prototype.set = function(e, t) {
         return function(e, t, n) {
           if ((t = S(e, t)) != t) return e;
           if (t >= e.size || t < 0) return e.withMutations((function(e) {
             t < 0 ? yt(e, t).set(0, n) : yt(e, 0, t + 1).set(t, n)
           }));
           t += e._origin;
           var r = e._tail,
             o = e._root,
             i = y(v);
           return t >= wt(e._capacity) ? r = mt(r, e.__ownerID, 0, t, n, i) : o = mt(o, e.__ownerID, e._level, t, n, i), i.value ? e.__ownerID ? (e._root = o, e._tail = r, e.__hash = void 0, e.__altered = !0, e) : dt(e._origin, e._capacity, e._level, o, r) : e
         }(this, e, t)
       }, ot.prototype.remove = function(e) {
         return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
       }, ot.prototype.insert = function(e, t) {
         return this.splice(e, 0, t)
       }, ot.prototype.clear = function() {
         return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : ht()
       }, ot.prototype.push = function() {
         var e = arguments,
           t = this.size;
         return this.withMutations((function(n) {
           yt(n, 0, t + e.length);
           for (var r = 0; r < e.length; r++) n.set(t + r, e[r])
         }))
       }, ot.prototype.pop = function() {
         return yt(this, 0, -1)
       }, ot.prototype.unshift = function() {
         var e = arguments;
         return this.withMutations((function(t) {
           yt(t, -e.length);
           for (var n = 0; n < e.length; n++) t.set(n, e[n])
         }))
       }, ot.prototype.shift = function() {
         return yt(this, 1)
       }, ot.prototype.merge = function() {
         return bt(this, void 0, arguments)
       }, ot.prototype.mergeWith = function(t) {
         var n = e.call(arguments, 1);
         return bt(this, t, n)
       }, ot.prototype.mergeDeep = function() {
         return bt(this, Ze, arguments)
       }, ot.prototype.mergeDeepWith = function(t) {
         var n = e.call(arguments, 1);
         return bt(this, $e(t), n)
       }, ot.prototype.setSize = function(e) {
         return yt(this, 0, e)
       }, ot.prototype.slice = function(e, t) {
         var n = this.size;
         return x(e, t, n) ? this : yt(this, T(e, n), C(t, n))
       }, ot.prototype.__iterator = function(e, t) {
         var n = 0,
           r = pt(this, t);
         return new j((function() {
           var t = r();
           return t === ft ? {
             value: void 0,
             done: !0
           } : D(e, n++, t)
         }))
       }, ot.prototype.__iterate = function(e, t) {
         for (var n, r = 0, o = pt(this, t);
              (n = o()) !== ft && !1 !== e(n, r++, this););
         return r
       }, ot.prototype.__ensureOwner = function(e) {
         return e === this.__ownerID ? this : e ? dt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : (this.__ownerID = e, this)
       }, ot.isList = it;
       var at = "@@__IMMUTABLE_LIST__@@",
         ut = ot.prototype;

       function st(e, t) {
         this.array = e, this.ownerID = t
       }
       ut[at] = !0, ut.delete = ut.remove, ut.setIn = je.setIn, ut.deleteIn = ut.removeIn = je.removeIn, ut.update = je.update, ut.updateIn = je.updateIn, ut.mergeIn = je.mergeIn, ut.mergeDeepIn = je.mergeDeepIn, ut.withMutations = je.withMutations, ut.asMutable = je.asMutable, ut.asImmutable = je.asImmutable, ut.wasAltered = je.wasAltered, st.prototype.removeBefore = function(e, t, n) {
         if (n === t ? 1 << t : 0 === this.array.length) return this;
         var r = n >>> t & 31;
         if (r >= this.array.length) return new st([], e);
         var o, i = 0 === r;
         if (t > 0) {
           var a = this.array[r];
           if ((o = a && a.removeBefore(e, t - 5, n)) === a && i) return this
         }
         if (i && !o) return this;
         var u = gt(this, e);
         if (!i)
           for (var s = 0; s < r; s++) u.array[s] = void 0;
         return o && (u.array[r] = o), u
       }, st.prototype.removeAfter = function(e, t, n) {
         if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
         var r, o = n - 1 >>> t & 31;
         if (o >= this.array.length) return this;
         if (t > 0) {
           var i = this.array[o];
           if ((r = i && i.removeAfter(e, t - 5, n)) === i && o === this.array.length - 1) return this
         }
         var a = gt(this, e);
         return a.array.splice(o + 1), r && (a.array[o] = r), a
       };
       var lt, ct, ft = {};

       function pt(e, t) {
         var n = e._origin,
           r = e._capacity,
           o = wt(r),
           i = e._tail;
         return a(e._root, e._level, 0);

         function a(e, u, s) {
           return 0 === u ? function(e, a) {
             var u = a === o ? i && i.array : e && e.array,
               s = a > n ? 0 : n - a,
               l = r - a;
             return l > 32 && (l = 32),
               function() {
                 if (s === l) return ft;
                 var e = t ? --l : s++;
                 return u && u[e]
               }
           }(e, s) : function(e, o, i) {
             var u, s = e && e.array,
               l = i > n ? 0 : n - i >> o,
               c = 1 + (r - i >> o);
             return c > 32 && (c = 32),
               function() {
                 for (;;) {
                   if (u) {
                     var e = u();
                     if (e !== ft) return e;
                     u = null
                   }
                   if (l === c) return ft;
                   var n = t ? --c : l++;
                   u = a(s && s[n], o - 5, i + (n << o))
                 }
               }
           }(e, u, s)
         }
       }

       function dt(e, t, n, r, o, i, a) {
         var u = Object.create(ut);
         return u.size = t - e, u._origin = e, u._capacity = t, u._level = n, u._root = r, u._tail = o, u.__ownerID = i, u.__hash = a, u.__altered = !1, u
       }

       function ht() {
         return lt || (lt = dt(0, 0, 5))
       }

       function mt(e, t, n, r, o, i) {
         var a, u = r >>> n & 31,
           s = e && u < e.array.length;
         if (!s && void 0 === o) return e;
         if (n > 0) {
           var l = e && e.array[u],
             c = mt(l, t, n - 5, r, o, i);
           return c === l ? e : ((a = gt(e, t)).array[u] = c, a)
         }
         return s && e.array[u] === o ? e : (b(i), a = gt(e, t), void 0 === o && u === a.array.length - 1 ? a.array.pop() : a.array[u] = o, a)
       }

       function gt(e, t) {
         return t && e && t === e.ownerID ? e : new st(e ? e.array.slice() : [], t)
       }

       function vt(e, t) {
         if (t >= wt(e._capacity)) return e._tail;
         if (t < 1 << e._level + 5) {
           for (var n = e._root, r = e._level; n && r > 0;) n = n.array[t >>> r & 31], r -= 5;
           return n
         }
       }

       function yt(e, t, n) {
         void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
         var r = e.__ownerID || new w,
           o = e._origin,
           i = e._capacity,
           a = o + t,
           u = void 0 === n ? i : n < 0 ? i + n : o + n;
         if (a === o && u === i) return e;
         if (a >= u) return e.clear();
         for (var s = e._level, l = e._root, c = 0; a + c < 0;) l = new st(l && l.array.length ? [void 0, l] : [], r), c += 1 << (s += 5);
         c && (a += c, o += c, u += c, i += c);
         for (var f = wt(i), p = wt(u); p >= 1 << s + 5;) l = new st(l && l.array.length ? [l] : [], r), s += 5;
         var d = e._tail,
           h = p < f ? vt(e, u - 1) : p > f ? new st([], r) : d;
         if (d && p > f && a < i && d.array.length) {
           for (var m = l = gt(l, r), g = s; g > 5; g -= 5) {
             var v = f >>> g & 31;
             m = m.array[v] = gt(m.array[v], r)
           }
           m.array[f >>> 5 & 31] = d
         }
         if (u < i && (h = h && h.removeAfter(r, 0, u)), a >= p) a -= p, u -= p, s = 5, l = null, h = h && h.removeBefore(r, 0, a);
         else if (a > o || p < f) {
           for (c = 0; l;) {
             var y = a >>> s & 31;
             if (y !== p >>> s & 31) break;
             y && (c += (1 << s) * y), s -= 5, l = l.array[y]
           }
           l && a > o && (l = l.removeBefore(r, s, a - c)), l && p < f && (l = l.removeAfter(r, s, p - c)), c && (a -= c, u -= c)
         }
         return e.__ownerID ? (e.size = u - a, e._origin = a, e._capacity = u, e._level = s, e._root = l, e._tail = h, e.__hash = void 0, e.__altered = !0, e) : dt(a, u, s, l, h)
       }

       function bt(e, t, n) {
         for (var r = [], i = 0, u = 0; u < n.length; u++) {
           var s = n[u],
             l = o(s);
           l.size > i && (i = l.size), a(s) || (l = l.map((function(e) {
             return re(e)
           }))), r.push(l)
         }
         return i > e.size && (e = e.setSize(i)), Je(e, t, r)
       }

       function wt(e) {
         return e < 32 ? 0 : e - 1 >>> 5 << 5
       }

       function _t(e) {
         return null == e ? kt() : Et(e) ? e : kt().withMutations((function(t) {
           var n = r(e);
           Ie(n.size), n.forEach((function(e, n) {
             return t.set(n, e)
           }))
         }))
       }

       function Et(e) {
         return Ae(e) && c(e)
       }

       function St(e, t, n, r) {
         var o = Object.create(_t.prototype);
         return o.size = e ? e.size : 0, o._map = e, o._list = t, o.__ownerID = n, o.__hash = r, o
       }

       function kt() {
         return ct || (ct = St(We(), ht()))
       }

       function xt(e, t, n) {
         var r, o, i = e._map,
           a = e._list,
           u = i.get(t),
           s = void 0 !== u;
         if (n === m) {
           if (!s) return e;
           a.size >= 32 && a.size >= 2 * i.size ? (r = (o = a.filter((function(e, t) {
             return void 0 !== e && u !== t
           }))).toKeyedSeq().map((function(e) {
             return e[0]
           })).flip().toMap(), e.__ownerID && (r.__ownerID = o.__ownerID = e.__ownerID)) : (r = i.remove(t), o = u === a.size - 1 ? a.pop() : a.set(u, void 0))
         } else if (s) {
           if (n === a.get(u)[1]) return e;
           r = i, o = a.set(u, [t, n])
         } else r = i.set(t, a.size), o = a.set(a.size, [t, n]);
         return e.__ownerID ? (e.size = r.size, e._map = r, e._list = o, e.__hash = void 0, e) : St(r, o)
       }

       function Tt(e, t) {
         this._iter = e, this._useKeys = t, this.size = e.size
       }

       function Ct(e) {
         this._iter = e, this.size = e.size
       }

       function Ot(e) {
         this._iter = e, this.size = e.size
       }

       function It(e) {
         this._iter = e, this.size = e.size
       }

       function Mt(e) {
         var t = qt(e);
         return t._iter = e, t.size = e.size, t.flip = function() {
           return e
         }, t.reverse = function() {
           var t = e.reverse.apply(this);
           return t.flip = function() {
             return e.reverse()
           }, t
         }, t.has = function(t) {
           return e.includes(t)
         }, t.includes = function(t) {
           return e.has(t)
         }, t.cacheResult = Yt, t.__iterateUncached = function(t, n) {
           var r = this;
           return e.__iterate((function(e, n) {
             return !1 !== t(n, e, r)
           }), n)
         }, t.__iteratorUncached = function(t, n) {
           if (2 === t) {
             var r = e.__iterator(t, n);
             return new j((function() {
               var e = r.next();
               if (!e.done) {
                 var t = e.value[0];
                 e.value[0] = e.value[1], e.value[1] = t
               }
               return e
             }))
           }
           return e.__iterator(1 === t ? 0 : 1, n)
         }, t
       }

       function At(e, t, n) {
         var r = qt(e);
         return r.size = e.size, r.has = function(t) {
           return e.has(t)
         }, r.get = function(r, o) {
           var i = e.get(r, m);
           return i === m ? o : t.call(n, i, r, e)
         }, r.__iterateUncached = function(r, o) {
           var i = this;
           return e.__iterate((function(e, o, a) {
             return !1 !== r(t.call(n, e, o, a), o, i)
           }), o)
         }, r.__iteratorUncached = function(r, o) {
           var i = e.__iterator(2, o);
           return new j((function() {
             var o = i.next();
             if (o.done) return o;
             var a = o.value,
               u = a[0];
             return D(r, u, t.call(n, a[1], u, e), o)
           }))
         }, r
       }

       function Pt(e, t) {
         var n = qt(e);
         return n._iter = e, n.size = e.size, n.reverse = function() {
           return e
         }, e.flip && (n.flip = function() {
           var t = Mt(e);
           return t.reverse = function() {
             return e.flip()
           }, t
         }), n.get = function(n, r) {
           return e.get(t ? n : -1 - n, r)
         }, n.has = function(n) {
           return e.has(t ? n : -1 - n)
         }, n.includes = function(t) {
           return e.includes(t)
         }, n.cacheResult = Yt, n.__iterate = function(t, n) {
           var r = this;
           return e.__iterate((function(e, n) {
             return t(e, n, r)
           }), !n)
         }, n.__iterator = function(t, n) {
           return e.__iterator(t, !n)
         }, n
       }

       function Nt(e, t, n, r) {
         var o = qt(e);
         return r && (o.has = function(r) {
           var o = e.get(r, m);
           return o !== m && !!t.call(n, o, r, e)
         }, o.get = function(r, o) {
           var i = e.get(r, m);
           return i !== m && t.call(n, i, r, e) ? i : o
         }), o.__iterateUncached = function(o, i) {
           var a = this,
             u = 0;
           return e.__iterate((function(e, i, s) {
             if (t.call(n, e, i, s)) return u++, o(e, r ? i : u - 1, a)
           }), i), u
         }, o.__iteratorUncached = function(o, i) {
           var a = e.__iterator(2, i),
             u = 0;
           return new j((function() {
             for (;;) {
               var i = a.next();
               if (i.done) return i;
               var s = i.value,
                 l = s[0],
                 c = s[1];
               if (t.call(n, c, l, e)) return D(o, r ? l : u++, c, i)
             }
           }))
         }, o
       }

       function jt(e, t, n, r) {
         var o = e.size;
         if (void 0 !== t && (t |= 0), void 0 !== n && (n === 1 / 0 ? n = o : n |= 0), x(t, n, o)) return e;
         var i = T(t, o),
           a = C(n, o);
         if (i != i || a != a) return jt(e.toSeq().cacheResult(), t, n, r);
         var u, s = a - i;
         s == s && (u = s < 0 ? 0 : s);
         var l = qt(e);
         return l.size = 0 === u ? u : e.size && u || void 0, !r && Z(e) && u >= 0 && (l.get = function(t, n) {
           return (t = S(this, t)) >= 0 && t < u ? e.get(t + i, n) : n
         }), l.__iterateUncached = function(t, n) {
           var o = this;
           if (0 === u) return 0;
           if (n) return this.cacheResult().__iterate(t, n);
           var a = 0,
             s = !0,
             l = 0;
           return e.__iterate((function(e, n) {
             if (!s || !(s = a++ < i)) return l++, !1 !== t(e, r ? n : l - 1, o) && l !== u
           })), l
         }, l.__iteratorUncached = function(t, n) {
           if (0 !== u && n) return this.cacheResult().__iterator(t, n);
           var o = 0 !== u && e.__iterator(t, n),
             a = 0,
             s = 0;
           return new j((function() {
             for (; a++ < i;) o.next();
             if (++s > u) return {
               value: void 0,
               done: !0
             };
             var e = o.next();
             return r || 1 === t ? e : D(t, s - 1, 0 === t ? void 0 : e.value[1], e)
           }))
         }, l
       }

       function Dt(e, t, n, r) {
         var o = qt(e);
         return o.__iterateUncached = function(o, i) {
           var a = this;
           if (i) return this.cacheResult().__iterate(o, i);
           var u = !0,
             s = 0;
           return e.__iterate((function(e, i, l) {
             if (!u || !(u = t.call(n, e, i, l))) return s++, o(e, r ? i : s - 1, a)
           })), s
         }, o.__iteratorUncached = function(o, i) {
           var a = this;
           if (i) return this.cacheResult().__iterator(o, i);
           var u = e.__iterator(2, i),
             s = !0,
             l = 0;
           return new j((function() {
             var e, i, c;
             do {
               if ((e = u.next()).done) return r || 1 === o ? e : D(o, l++, 0 === o ? void 0 : e.value[1], e);
               var f = e.value;
               i = f[0], c = f[1], s && (s = t.call(n, c, i, a))
             } while (s);
             return 2 === o ? e : D(o, i, c, e)
           }))
         }, o
       }

       function Rt(e, t) {
         var n = u(e),
           o = [e].concat(t).map((function(e) {
             return a(e) ? n && (e = r(e)) : e = n ? J(e) : X(Array.isArray(e) ? e : [e]), e
           })).filter((function(e) {
             return 0 !== e.size
           }));
         if (0 === o.length) return e;
         if (1 === o.length) {
           var i = o[0];
           if (i === e || n && u(i) || s(e) && s(i)) return i
         }
         var l = new q(o);
         return n ? l = l.toKeyedSeq() : s(e) || (l = l.toSetSeq()), (l = l.flatten(!0)).size = o.reduce((function(e, t) {
           if (void 0 !== e) {
             var n = t.size;
             if (void 0 !== n) return e + n
           }
         }), 0), l
       }

       function Lt(e, t, n) {
         var r = qt(e);
         return r.__iterateUncached = function(r, o) {
           var i = 0,
             u = !1;
           return function e(s, l) {
             var c = this;
             s.__iterate((function(o, s) {
               return (!t || l < t) && a(o) ? e(o, l + 1) : !1 === r(o, n ? s : i++, c) && (u = !0), !u
             }), o)
           }(e, 0), i
         }, r.__iteratorUncached = function(r, o) {
           var i = e.__iterator(r, o),
             u = [],
             s = 0;
           return new j((function() {
             for (; i;) {
               var e = i.next();
               if (!1 === e.done) {
                 var l = e.value;
                 if (2 === r && (l = l[1]), t && !(u.length < t) || !a(l)) return n ? e : D(r, s++, l, e);
                 u.push(i), i = l.__iterator(r, o)
               } else i = u.pop()
             }
             return {
               value: void 0,
               done: !0
             }
           }))
         }, r
       }

       function zt(e, t, n) {
         t || (t = Kt);
         var r = u(e),
           o = 0,
           i = e.toSeq().map((function(t, r) {
             return [r, t, o++, n ? n(t, r, e) : t]
           })).toArray();
         return i.sort((function(e, n) {
           return t(e[3], n[3]) || e[2] - n[2]
         })).forEach(r ? function(e, t) {
           i[t].length = 2
         } : function(e, t) {
           i[t] = e[1]
         }), r ? G(i) : s(e) ? W(i) : V(i)
       }

       function Ut(e, t, n) {
         if (t || (t = Kt), n) {
           var r = e.toSeq().map((function(t, r) {
             return [t, n(t, r, e)]
           })).reduce((function(e, n) {
             return Bt(t, e[1], n[1]) ? n : e
           }));
           return r && r[0]
         }
         return e.reduce((function(e, n) {
           return Bt(t, e, n) ? n : e
         }))
       }

       function Bt(e, t, n) {
         var r = e(n, t);
         return 0 === r && n !== t && (null == n || n != n) || r > 0
       }

       function Ft(e, t, r) {
         var o = qt(e);
         return o.size = new q(r).map((function(e) {
           return e.size
         })).min(), o.__iterate = function(e, t) {
           for (var n, r = this.__iterator(1, t), o = 0; !(n = r.next()).done && !1 !== e(n.value, o++, this););
           return o
         }, o.__iteratorUncached = function(e, o) {
           var i = r.map((function(e) {
               return e = n(e), U(o ? e.reverse() : e)
             })),
             a = 0,
             u = !1;
           return new j((function() {
             var n;
             return u || (n = i.map((function(e) {
               return e.next()
             })), u = n.some((function(e) {
               return e.done
             }))), u ? {
               value: void 0,
               done: !0
             } : D(e, a++, t.apply(null, n.map((function(e) {
               return e.value
             }))))
           }))
         }, o
       }

       function Ht(e, t) {
         return Z(e) ? t : e.constructor(t)
       }

       function Gt(e) {
         if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
       }

       function Wt(e) {
         return Ie(e.size), E(e)
       }

       function Vt(e) {
         return u(e) ? r : s(e) ? o : i
       }

       function qt(e) {
         return Object.create((u(e) ? G : s(e) ? W : V).prototype)
       }

       function Yt() {
         return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : H.prototype.cacheResult.call(this)
       }

       function Kt(e, t) {
         return e > t ? 1 : e < t ? -1 : 0
       }

       function Qt(e) {
         var t = U(e);
         if (!t) {
           if (!F(e)) throw new TypeError("Expected iterable or array-like: " + e);
           t = U(n(e))
         }
         return t
       }

       function Zt(e, t) {
         var n, r = function(i) {
             if (i instanceof r) return i;
             if (!(this instanceof r)) return new r(i);
             if (!n) {
               n = !0;
               var a = Object.keys(e);
               ! function(e, t) {
                 try {
                   t.forEach(en.bind(void 0, e))
                 } catch (e) {}
               }(o, a), o.size = a.length, o._name = t, o._keys = a, o._defaultValues = e
             }
             this._map = Me(i)
           },
           o = r.prototype = Object.create($t);
         return o.constructor = r, r
       }
       t(_t, Me), _t.of = function() {
         return this(arguments)
       }, _t.prototype.toString = function() {
         return this.__toString("OrderedMap {", "}")
       }, _t.prototype.get = function(e, t) {
         var n = this._map.get(e);
         return void 0 !== n ? this._list.get(n)[1] : t
       }, _t.prototype.clear = function() {
         return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : kt()
       }, _t.prototype.set = function(e, t) {
         return xt(this, e, t)
       }, _t.prototype.remove = function(e) {
         return xt(this, e, m)
       }, _t.prototype.wasAltered = function() {
         return this._map.wasAltered() || this._list.wasAltered()
       }, _t.prototype.__iterate = function(e, t) {
         var n = this;
         return this._list.__iterate((function(t) {
           return t && e(t[1], t[0], n)
         }), t)
       }, _t.prototype.__iterator = function(e, t) {
         return this._list.fromEntrySeq().__iterator(e, t)
       }, _t.prototype.__ensureOwner = function(e) {
         if (e === this.__ownerID) return this;
         var t = this._map.__ensureOwner(e),
           n = this._list.__ensureOwner(e);
         return e ? St(t, n, e, this.__hash) : (this.__ownerID = e, this._map = t, this._list = n, this)
       }, _t.isOrderedMap = Et, _t.prototype[h] = !0, _t.prototype.delete = _t.prototype.remove, t(Tt, G), Tt.prototype.get = function(e, t) {
         return this._iter.get(e, t)
       }, Tt.prototype.has = function(e) {
         return this._iter.has(e)
       }, Tt.prototype.valueSeq = function() {
         return this._iter.valueSeq()
       }, Tt.prototype.reverse = function() {
         var e = this,
           t = Pt(this, !0);
         return this._useKeys || (t.valueSeq = function() {
           return e._iter.toSeq().reverse()
         }), t
       }, Tt.prototype.map = function(e, t) {
         var n = this,
           r = At(this, e, t);
         return this._useKeys || (r.valueSeq = function() {
           return n._iter.toSeq().map(e, t)
         }), r
       }, Tt.prototype.__iterate = function(e, t) {
         var n, r = this;
         return this._iter.__iterate(this._useKeys ? function(t, n) {
           return e(t, n, r)
         } : (n = t ? Wt(this) : 0, function(o) {
           return e(o, t ? --n : n++, r)
         }), t)
       }, Tt.prototype.__iterator = function(e, t) {
         if (this._useKeys) return this._iter.__iterator(e, t);
         var n = this._iter.__iterator(1, t),
           r = t ? Wt(this) : 0;
         return new j((function() {
           var o = n.next();
           return o.done ? o : D(e, t ? --r : r++, o.value, o)
         }))
       }, Tt.prototype[h] = !0, t(Ct, W), Ct.prototype.includes = function(e) {
         return this._iter.includes(e)
       }, Ct.prototype.__iterate = function(e, t) {
         var n = this,
           r = 0;
         return this._iter.__iterate((function(t) {
           return e(t, r++, n)
         }), t)
       }, Ct.prototype.__iterator = function(e, t) {
         var n = this._iter.__iterator(1, t),
           r = 0;
         return new j((function() {
           var t = n.next();
           return t.done ? t : D(e, r++, t.value, t)
         }))
       }, t(Ot, V), Ot.prototype.has = function(e) {
         return this._iter.includes(e)
       }, Ot.prototype.__iterate = function(e, t) {
         var n = this;
         return this._iter.__iterate((function(t) {
           return e(t, t, n)
         }), t)
       }, Ot.prototype.__iterator = function(e, t) {
         var n = this._iter.__iterator(1, t);
         return new j((function() {
           var t = n.next();
           return t.done ? t : D(e, t.value, t.value, t)
         }))
       }, t(It, G), It.prototype.entrySeq = function() {
         return this._iter.toSeq()
       }, It.prototype.__iterate = function(e, t) {
         var n = this;
         return this._iter.__iterate((function(t) {
           if (t) {
             Gt(t);
             var r = a(t);
             return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n)
           }
         }), t)
       }, It.prototype.__iterator = function(e, t) {
         var n = this._iter.__iterator(1, t);
         return new j((function() {
           for (;;) {
             var t = n.next();
             if (t.done) return t;
             var r = t.value;
             if (r) {
               Gt(r);
               var o = a(r);
               return D(e, o ? r.get(0) : r[0], o ? r.get(1) : r[1], t)
             }
           }
         }))
       }, Ct.prototype.cacheResult = Tt.prototype.cacheResult = Ot.prototype.cacheResult = It.prototype.cacheResult = Yt, t(Zt, pe), Zt.prototype.toString = function() {
         return this.__toString(Xt(this) + " {", "}")
       }, Zt.prototype.has = function(e) {
         return this._defaultValues.hasOwnProperty(e)
       }, Zt.prototype.get = function(e, t) {
         if (!this.has(e)) return t;
         var n = this._defaultValues[e];
         return this._map ? this._map.get(e, n) : n
       }, Zt.prototype.clear = function() {
         if (this.__ownerID) return this._map && this._map.clear(), this;
         var e = this.constructor;
         return e._empty || (e._empty = Jt(this, We()))
       }, Zt.prototype.set = function(e, t) {
         if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + Xt(this));
         if (this._map && !this._map.has(e) && t === this._defaultValues[e]) return this;
         var n = this._map && this._map.set(e, t);
         return this.__ownerID || n === this._map ? this : Jt(this, n)
       }, Zt.prototype.remove = function(e) {
         if (!this.has(e)) return this;
         var t = this._map && this._map.remove(e);
         return this.__ownerID || t === this._map ? this : Jt(this, t)
       }, Zt.prototype.wasAltered = function() {
         return this._map.wasAltered()
       }, Zt.prototype.__iterator = function(e, t) {
         var n = this;
         return r(this._defaultValues).map((function(e, t) {
           return n.get(t)
         })).__iterator(e, t)
       }, Zt.prototype.__iterate = function(e, t) {
         var n = this;
         return r(this._defaultValues).map((function(e, t) {
           return n.get(t)
         })).__iterate(e, t)
       }, Zt.prototype.__ensureOwner = function(e) {
         if (e === this.__ownerID) return this;
         var t = this._map && this._map.__ensureOwner(e);
         return e ? Jt(this, t, e) : (this.__ownerID = e, this._map = t, this)
       };
       var $t = Zt.prototype;

       function Jt(e, t, n) {
         var r = Object.create(Object.getPrototypeOf(e));
         return r._map = t, r.__ownerID = n, r
       }

       function Xt(e) {
         return e._name || e.constructor.name || "Record"
       }

       function en(e, t) {
         Object.defineProperty(e, t, {
           get: function() {
             return this.get(t)
           },
           set: function(e) {
             le(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e)
           }
         })
       }

       function tn(e) {
         return null == e ? ln() : nn(e) && !c(e) ? e : ln().withMutations((function(t) {
           var n = i(e);
           Ie(n.size), n.forEach((function(e) {
             return t.add(e)
           }))
         }))
       }

       function nn(e) {
         return !(!e || !e[on])
       }
       $t.delete = $t.remove, $t.deleteIn = $t.removeIn = je.removeIn, $t.merge = je.merge, $t.mergeWith = je.mergeWith, $t.mergeIn = je.mergeIn, $t.mergeDeep = je.mergeDeep, $t.mergeDeepWith = je.mergeDeepWith, $t.mergeDeepIn = je.mergeDeepIn, $t.setIn = je.setIn, $t.update = je.update, $t.updateIn = je.updateIn, $t.withMutations = je.withMutations, $t.asMutable = je.asMutable, $t.asImmutable = je.asImmutable, t(tn, he), tn.of = function() {
         return this(arguments)
       }, tn.fromKeys = function(e) {
         return this(r(e).keySeq())
       }, tn.prototype.toString = function() {
         return this.__toString("Set {", "}")
       }, tn.prototype.has = function(e) {
         return this._map.has(e)
       }, tn.prototype.add = function(e) {
         return un(this, this._map.set(e, !0))
       }, tn.prototype.remove = function(e) {
         return un(this, this._map.remove(e))
       }, tn.prototype.clear = function() {
         return un(this, this._map.clear())
       }, tn.prototype.union = function() {
         var t = e.call(arguments, 0);
         return 0 === (t = t.filter((function(e) {
           return 0 !== e.size
         }))).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations((function(e) {
           for (var n = 0; n < t.length; n++) i(t[n]).forEach((function(t) {
             return e.add(t)
           }))
         })) : this.constructor(t[0])
       }, tn.prototype.intersect = function() {
         var t = e.call(arguments, 0);
         if (0 === t.length) return this;
         t = t.map((function(e) {
           return i(e)
         }));
         var n = this;
         return this.withMutations((function(e) {
           n.forEach((function(n) {
             t.every((function(e) {
               return e.includes(n)
             })) || e.remove(n)
           }))
         }))
       }, tn.prototype.subtract = function() {
         var t = e.call(arguments, 0);
         if (0 === t.length) return this;
         t = t.map((function(e) {
           return i(e)
         }));
         var n = this;
         return this.withMutations((function(e) {
           n.forEach((function(n) {
             t.some((function(e) {
               return e.includes(n)
             })) && e.remove(n)
           }))
         }))
       }, tn.prototype.merge = function() {
         return this.union.apply(this, arguments)
       }, tn.prototype.mergeWith = function(t) {
         var n = e.call(arguments, 1);
         return this.union.apply(this, n)
       }, tn.prototype.sort = function(e) {
         return cn(zt(this, e))
       }, tn.prototype.sortBy = function(e, t) {
         return cn(zt(this, t, e))
       }, tn.prototype.wasAltered = function() {
         return this._map.wasAltered()
       }, tn.prototype.__iterate = function(e, t) {
         var n = this;
         return this._map.__iterate((function(t, r) {
           return e(r, r, n)
         }), t)
       }, tn.prototype.__iterator = function(e, t) {
         return this._map.map((function(e, t) {
           return t
         })).__iterator(e, t)
       }, tn.prototype.__ensureOwner = function(e) {
         if (e === this.__ownerID) return this;
         var t = this._map.__ensureOwner(e);
         return e ? this.__make(t, e) : (this.__ownerID = e, this._map = t, this)
       }, tn.isSet = nn;
       var rn, on = "@@__IMMUTABLE_SET__@@",
         an = tn.prototype;

       function un(e, t) {
         return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
       }

       function sn(e, t) {
         var n = Object.create(an);
         return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
       }

       function ln() {
         return rn || (rn = sn(We()))
       }

       function cn(e) {
         return null == e ? mn() : fn(e) ? e : mn().withMutations((function(t) {
           var n = i(e);
           Ie(n.size), n.forEach((function(e) {
             return t.add(e)
           }))
         }))
       }

       function fn(e) {
         return nn(e) && c(e)
       }
       an[on] = !0, an.delete = an.remove, an.mergeDeep = an.merge, an.mergeDeepWith = an.mergeWith, an.withMutations = je.withMutations, an.asMutable = je.asMutable, an.asImmutable = je.asImmutable, an.__empty = ln, an.__make = sn, t(cn, tn), cn.of = function() {
         return this(arguments)
       }, cn.fromKeys = function(e) {
         return this(r(e).keySeq())
       }, cn.prototype.toString = function() {
         return this.__toString("OrderedSet {", "}")
       }, cn.isOrderedSet = fn;
       var pn, dn = cn.prototype;

       function hn(e, t) {
         var n = Object.create(dn);
         return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
       }

       function mn() {
         return pn || (pn = hn(kt()))
       }

       function gn(e) {
         return null == e ? En() : vn(e) ? e : En().unshiftAll(e)
       }

       function vn(e) {
         return !(!e || !e[bn])
       }
       dn[h] = !0, dn.__empty = mn, dn.__make = hn, t(gn, de), gn.of = function() {
         return this(arguments)
       }, gn.prototype.toString = function() {
         return this.__toString("Stack [", "]")
       }, gn.prototype.get = function(e, t) {
         var n = this._head;
         for (e = S(this, e); n && e--;) n = n.next;
         return n ? n.value : t
       }, gn.prototype.peek = function() {
         return this._head && this._head.value
       }, gn.prototype.push = function() {
         if (0 === arguments.length) return this;
         for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--) t = {
           value: arguments[n],
           next: t
         };
         return this.__ownerID ? (this.size = e, this._head = t, this.__hash = void 0, this.__altered = !0, this) : _n(e, t)
       }, gn.prototype.pushAll = function(e) {
         if (0 === (e = o(e)).size) return this;
         Ie(e.size);
         var t = this.size,
           n = this._head;
         return e.reverse().forEach((function(e) {
           t++, n = {
             value: e,
             next: n
           }
         })), this.__ownerID ? (this.size = t, this._head = n, this.__hash = void 0, this.__altered = !0, this) : _n(t, n)
       }, gn.prototype.pop = function() {
         return this.slice(1)
       }, gn.prototype.unshift = function() {
         return this.push.apply(this, arguments)
       }, gn.prototype.unshiftAll = function(e) {
         return this.pushAll(e)
       }, gn.prototype.shift = function() {
         return this.pop.apply(this, arguments)
       }, gn.prototype.clear = function() {
         return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : En()
       }, gn.prototype.slice = function(e, t) {
         if (x(e, t, this.size)) return this;
         var n = T(e, this.size);
         if (C(t, this.size) !== this.size) return de.prototype.slice.call(this, e, t);
         for (var r = this.size - n, o = this._head; n--;) o = o.next;
         return this.__ownerID ? (this.size = r, this._head = o, this.__hash = void 0, this.__altered = !0, this) : _n(r, o)
       }, gn.prototype.__ensureOwner = function(e) {
         return e === this.__ownerID ? this : e ? _n(this.size, this._head, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
       }, gn.prototype.__iterate = function(e, t) {
         if (t) return this.reverse().__iterate(e);
         for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this);) r = r.next;
         return n
       }, gn.prototype.__iterator = function(e, t) {
         if (t) return this.reverse().__iterator(e);
         var n = 0,
           r = this._head;
         return new j((function() {
           if (r) {
             var t = r.value;
             return r = r.next, D(e, n++, t)
           }
           return {
             value: void 0,
             done: !0
           }
         }))
       }, gn.isStack = vn;
       var yn, bn = "@@__IMMUTABLE_STACK__@@",
         wn = gn.prototype;

       function _n(e, t, n, r) {
         var o = Object.create(wn);
         return o.size = e, o._head = t, o.__ownerID = n, o.__hash = r, o.__altered = !1, o
       }

       function En() {
         return yn || (yn = _n(0))
       }

       function Sn(e, t) {
         var n = function(n) {
           e.prototype[n] = t[n]
         };
         return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e
       }
       wn[bn] = !0, wn.withMutations = je.withMutations, wn.asMutable = je.asMutable, wn.asImmutable = je.asImmutable, wn.wasAltered = je.wasAltered, n.Iterator = j, Sn(n, {
         toArray: function() {
           Ie(this.size);
           var e = new Array(this.size || 0);
           return this.valueSeq().__iterate((function(t, n) {
             e[n] = t
           })), e
         },
         toIndexedSeq: function() {
           return new Ct(this)
         },
         toJS: function() {
           return this.toSeq().map((function(e) {
             return e && "function" == typeof e.toJS ? e.toJS() : e
           })).__toJS()
         },
         toJSON: function() {
           return this.toSeq().map((function(e) {
             return e && "function" == typeof e.toJSON ? e.toJSON() : e
           })).__toJS()
         },
         toKeyedSeq: function() {
           return new Tt(this, !0)
         },
         toMap: function() {
           return Me(this.toKeyedSeq())
         },
         toObject: function() {
           Ie(this.size);
           var e = {};
           return this.__iterate((function(t, n) {
             e[n] = t
           })), e
         },
         toOrderedMap: function() {
           return _t(this.toKeyedSeq())
         },
         toOrderedSet: function() {
           return cn(u(this) ? this.valueSeq() : this)
         },
         toSet: function() {
           return tn(u(this) ? this.valueSeq() : this)
         },
         toSetSeq: function() {
           return new Ot(this)
         },
         toSeq: function() {
           return s(this) ? this.toIndexedSeq() : u(this) ? this.toKeyedSeq() : this.toSetSeq()
         },
         toStack: function() {
           return gn(u(this) ? this.valueSeq() : this)
         },
         toList: function() {
           return ot(u(this) ? this.valueSeq() : this)
         },
         toString: function() {
           return "[Iterable]"
         },
         __toString: function(e, t) {
           return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
         },
         concat: function() {
           var t = e.call(arguments, 0);
           return Ht(this, Rt(this, t))
         },
         includes: function(e) {
           return this.some((function(t) {
             return ae(t, e)
           }))
         },
         entries: function() {
           return this.__iterator(2)
         },
         every: function(e, t) {
           Ie(this.size);
           var n = !0;
           return this.__iterate((function(r, o, i) {
             if (!e.call(t, r, o, i)) return n = !1, !1
           })), n
         },
         filter: function(e, t) {
           return Ht(this, Nt(this, e, t, !0))
         },
         find: function(e, t, n) {
           var r = this.findEntry(e, t);
           return r ? r[1] : n
         },
         forEach: function(e, t) {
           return Ie(this.size), this.__iterate(t ? e.bind(t) : e)
         },
         join: function(e) {
           Ie(this.size), e = void 0 !== e ? "" + e : ",";
           var t = "",
             n = !0;
           return this.__iterate((function(r) {
             n ? n = !1 : t += e, t += null != r ? r.toString() : ""
           })), t
         },
         keys: function() {
           return this.__iterator(0)
         },
         map: function(e, t) {
           return Ht(this, At(this, e, t))
         },
         reduce: function(e, t, n) {
           var r, o;
           return Ie(this.size), arguments.length < 2 ? o = !0 : r = t, this.__iterate((function(t, i, a) {
             o ? (o = !1, r = t) : r = e.call(n, r, t, i, a)
           })), r
         },
         reduceRight: function(e, t, n) {
           var r = this.toKeyedSeq().reverse();
           return r.reduce.apply(r, arguments)
         },
         reverse: function() {
           return Ht(this, Pt(this, !0))
         },
         slice: function(e, t) {
           return Ht(this, jt(this, e, t, !0))
         },
         some: function(e, t) {
           return !this.every(On(e), t)
         },
         sort: function(e) {
           return Ht(this, zt(this, e))
         },
         values: function() {
           return this.__iterator(1)
         },
         butLast: function() {
           return this.slice(0, -1)
         },
         isEmpty: function() {
           return void 0 !== this.size ? 0 === this.size : !this.some((function() {
             return !0
           }))
         },
         count: function(e, t) {
           return E(e ? this.toSeq().filter(e, t) : this)
         },
         countBy: function(e, t) {
           return function(e, t, n) {
             var r = Me().asMutable();
             return e.__iterate((function(o, i) {
               r.update(t.call(n, o, i, e), 0, (function(e) {
                 return e + 1
               }))
             })), r.asImmutable()
           }(this, e, t)
         },
         equals: function(e) {
           return ue(this, e)
         },
         entrySeq: function() {
           var e = this;
           if (e._cache) return new q(e._cache);
           var t = e.toSeq().map(Cn).toIndexedSeq();
           return t.fromEntrySeq = function() {
             return e.toSeq()
           }, t
         },
         filterNot: function(e, t) {
           return this.filter(On(e), t)
         },
         findEntry: function(e, t, n) {
           var r = n;
           return this.__iterate((function(n, o, i) {
             if (e.call(t, n, o, i)) return r = [o, n], !1
           })), r
         },
         findKey: function(e, t) {
           var n = this.findEntry(e, t);
           return n && n[0]
         },
         findLast: function(e, t, n) {
           return this.toKeyedSeq().reverse().find(e, t, n)
         },
         findLastEntry: function(e, t, n) {
           return this.toKeyedSeq().reverse().findEntry(e, t, n)
         },
         findLastKey: function(e, t) {
           return this.toKeyedSeq().reverse().findKey(e, t)
         },
         first: function() {
           return this.find(k)
         },
         flatMap: function(e, t) {
           return Ht(this, function(e, t, n) {
             var r = Vt(e);
             return e.toSeq().map((function(o, i) {
               return r(t.call(n, o, i, e))
             })).flatten(!0)
           }(this, e, t))
         },
         flatten: function(e) {
           return Ht(this, Lt(this, e, !0))
         },
         fromEntrySeq: function() {
           return new It(this)
         },
         get: function(e, t) {
           return this.find((function(t, n) {
             return ae(n, e)
           }), void 0, t)
         },
         getIn: function(e, t) {
           for (var n, r = this, o = Qt(e); !(n = o.next()).done;) {
             var i = n.value;
             if ((r = r && r.get ? r.get(i, m) : m) === m) return t
           }
           return r
         },
         groupBy: function(e, t) {
           return function(e, t, n) {
             var r = u(e),
               o = (c(e) ? _t() : Me()).asMutable();
             e.__iterate((function(i, a) {
               o.update(t.call(n, i, a, e), (function(e) {
                 return (e = e || []).push(r ? [a, i] : i), e
               }))
             }));
             var i = Vt(e);
             return o.map((function(t) {
               return Ht(e, i(t))
             }))
           }(this, e, t)
         },
         has: function(e) {
           return this.get(e, m) !== m
         },
         hasIn: function(e) {
           return this.getIn(e, m) !== m
         },
         isSubset: function(e) {
           return e = "function" == typeof e.includes ? e : n(e), this.every((function(t) {
             return e.includes(t)
           }))
         },
         isSuperset: function(e) {
           return (e = "function" == typeof e.isSubset ? e : n(e)).isSubset(this)
         },
         keyOf: function(e) {
           return this.findKey((function(t) {
             return ae(t, e)
           }))
         },
         keySeq: function() {
           return this.toSeq().map(Tn).toIndexedSeq()
         },
         last: function() {
           return this.toSeq().reverse().first()
         },
         lastKeyOf: function(e) {
           return this.toKeyedSeq().reverse().keyOf(e)
         },
         max: function(e) {
           return Ut(this, e)
         },
         maxBy: function(e, t) {
           return Ut(this, t, e)
         },
         min: function(e) {
           return Ut(this, e ? In(e) : Pn)
         },
         minBy: function(e, t) {
           return Ut(this, t ? In(t) : Pn, e)
         },
         rest: function() {
           return this.slice(1)
         },
         skip: function(e) {
           return this.slice(Math.max(0, e))
         },
         skipLast: function(e) {
           return Ht(this, this.toSeq().reverse().skip(e).reverse())
         },
         skipWhile: function(e, t) {
           return Ht(this, Dt(this, e, t, !0))
         },
         skipUntil: function(e, t) {
           return this.skipWhile(On(e), t)
         },
         sortBy: function(e, t) {
           return Ht(this, zt(this, t, e))
         },
         take: function(e) {
           return this.slice(0, Math.max(0, e))
         },
         takeLast: function(e) {
           return Ht(this, this.toSeq().reverse().take(e).reverse())
         },
         takeWhile: function(e, t) {
           return Ht(this, function(e, t, n) {
             var r = qt(e);
             return r.__iterateUncached = function(r, o) {
               var i = this;
               if (o) return this.cacheResult().__iterate(r, o);
               var a = 0;
               return e.__iterate((function(e, o, u) {
                 return t.call(n, e, o, u) && ++a && r(e, o, i)
               })), a
             }, r.__iteratorUncached = function(r, o) {
               var i = this;
               if (o) return this.cacheResult().__iterator(r, o);
               var a = e.__iterator(2, o),
                 u = !0;
               return new j((function() {
                 if (!u) return {
                   value: void 0,
                   done: !0
                 };
                 var e = a.next();
                 if (e.done) return e;
                 var o = e.value,
                   s = o[0],
                   l = o[1];
                 return t.call(n, l, s, i) ? 2 === r ? e : D(r, s, l, e) : (u = !1, {
                   value: void 0,
                   done: !0
                 })
               }))
             }, r
           }(this, e, t))
         },
         takeUntil: function(e, t) {
           return this.takeWhile(On(e), t)
         },
         valueSeq: function() {
           return this.toIndexedSeq()
         },
         hashCode: function() {
           return this.__hash || (this.__hash = function(e) {
             if (e.size === 1 / 0) return 0;
             var t = c(e),
               n = u(e),
               r = t ? 1 : 0;
             return function(e, t) {
               return t = me(t, 3432918353), t = me(t << 15 | t >>> -15, 461845907), t = me(t << 13 | t >>> -13, 5), t = me((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507), t = ge((t = me(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
             }(e.__iterate(n ? t ? function(e, t) {
               r = 31 * r + Nn(ve(e), ve(t)) | 0
             } : function(e, t) {
               r = r + Nn(ve(e), ve(t)) | 0
             } : t ? function(e) {
               r = 31 * r + ve(e) | 0
             } : function(e) {
               r = r + ve(e) | 0
             }), r)
           }(this))
         }
       });
       var kn = n.prototype;
       kn[f] = !0, kn[N] = kn.values, kn.__toJS = kn.toArray, kn.__toStringMapper = Mn, kn.inspect = kn.toSource = function() {
         return this.toString()
       }, kn.chain = kn.flatMap, kn.contains = kn.includes, Sn(r, {
         flip: function() {
           return Ht(this, Mt(this))
         },
         mapEntries: function(e, t) {
           var n = this,
             r = 0;
           return Ht(this, this.toSeq().map((function(o, i) {
             return e.call(t, [i, o], r++, n)
           })).fromEntrySeq())
         },
         mapKeys: function(e, t) {
           var n = this;
           return Ht(this, this.toSeq().flip().map((function(r, o) {
             return e.call(t, r, o, n)
           })).flip())
         }
       });
       var xn = r.prototype;

       function Tn(e, t) {
         return t
       }

       function Cn(e, t) {
         return [t, e]
       }

       function On(e) {
         return function() {
           return !e.apply(this, arguments)
         }
       }

       function In(e) {
         return function() {
           return -e.apply(this, arguments)
         }
       }

       function Mn(e) {
         return "string" == typeof e ? JSON.stringify(e) : String(e)
       }

       function An() {
         return _(arguments)
       }

       function Pn(e, t) {
         return e < t ? 1 : e > t ? -1 : 0
       }

       function Nn(e, t) {
         return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
       }
       return xn[p] = !0, xn[N] = kn.entries, xn.__toJS = kn.toObject, xn.__toStringMapper = function(e, t) {
         return JSON.stringify(t) + ": " + Mn(e)
       }, Sn(o, {
         toKeyedSeq: function() {
           return new Tt(this, !1)
         },
         filter: function(e, t) {
           return Ht(this, Nt(this, e, t, !1))
         },
         findIndex: function(e, t) {
           var n = this.findEntry(e, t);
           return n ? n[0] : -1
         },
         indexOf: function(e) {
           var t = this.keyOf(e);
           return void 0 === t ? -1 : t
         },
         lastIndexOf: function(e) {
           var t = this.lastKeyOf(e);
           return void 0 === t ? -1 : t
         },
         reverse: function() {
           return Ht(this, Pt(this, !1))
         },
         slice: function(e, t) {
           return Ht(this, jt(this, e, t, !1))
         },
         splice: function(e, t) {
           var n = arguments.length;
           if (t = Math.max(0 | t, 0), 0 === n || 2 === n && !t) return this;
           e = T(e, e < 0 ? this.count() : this.size);
           var r = this.slice(0, e);
           return Ht(this, 1 === n ? r : r.concat(_(arguments, 2), this.slice(e + t)))
         },
         findLastIndex: function(e, t) {
           var n = this.findLastEntry(e, t);
           return n ? n[0] : -1
         },
         first: function() {
           return this.get(0)
         },
         flatten: function(e) {
           return Ht(this, Lt(this, e, !1))
         },
         get: function(e, t) {
           return (e = S(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find((function(t, n) {
             return n === e
           }), void 0, t)
         },
         has: function(e) {
           return (e = S(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
         },
         interpose: function(e) {
           return Ht(this, function(e, t) {
             var n = qt(e);
             return n.size = e.size && 2 * e.size - 1, n.__iterateUncached = function(n, r) {
               var o = this,
                 i = 0;
               return e.__iterate((function(e, r) {
                 return (!i || !1 !== n(t, i++, o)) && !1 !== n(e, i++, o)
               }), r), i
             }, n.__iteratorUncached = function(n, r) {
               var o, i = e.__iterator(1, r),
                 a = 0;
               return new j((function() {
                 return (!o || a % 2) && (o = i.next()).done ? o : a % 2 ? D(n, a++, t) : D(n, a++, o.value, o)
               }))
             }, n
           }(this, e))
         },
         interleave: function() {
           var e = [this].concat(_(arguments)),
             t = Ft(this.toSeq(), W.of, e),
             n = t.flatten(!0);
           return t.size && (n.size = t.size * e.length), Ht(this, n)
         },
         keySeq: function() {
           return ce(0, this.size)
         },
         last: function() {
           return this.get(-1)
         },
         skipWhile: function(e, t) {
           return Ht(this, Dt(this, e, t, !1))
         },
         zip: function() {
           var e = [this].concat(_(arguments));
           return Ht(this, Ft(this, An, e))
         },
         zipWith: function(e) {
           var t = _(arguments);
           return t[0] = this, Ht(this, Ft(this, e, t))
         }
       }), o.prototype[d] = !0, o.prototype[h] = !0, Sn(i, {
         get: function(e, t) {
           return this.has(e) ? e : t
         },
         includes: function(e) {
           return this.has(e)
         },
         keySeq: function() {
           return this.valueSeq()
         }
       }), i.prototype.has = kn.includes, i.prototype.contains = i.prototype.includes, Sn(G, r.prototype), Sn(W, o.prototype), Sn(V, i.prototype), Sn(pe, r.prototype), Sn(de, o.prototype), Sn(he, i.prototype), {
         Iterable: n,
         Seq: H,
         Collection: fe,
         Map: Me,
         OrderedMap: _t,
         List: ot,
         Stack: gn,
         Set: tn,
         OrderedSet: cn,
         Record: Zt,
         Range: ce,
         Repeat: se,
         is: ae,
         fromJS: re
       }
     }()
   }, function(e, t) {
     (t = e.exports = function(e) {
       return e.replace(/^\s*|\s*$/g, "")
     }).left = function(e) {
       return e.replace(/^\s*/, "")
     }, t.right = function(e) {
       return e.replace(/\s*$/, "")
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     t.INITIALIZE = "INITIALIZE", t.CONNECT = "CONNECT", t.DISCONNECT = "DISCONNECT", t.GET_OPEN_STATE = "GET_OPEN_STATE", t.GET_VISIBLE_STATE = "GET_VISIBLE_STATE", t.GET_FULLSCREEN_STATE = "GET_FULLSCREEN_STATE", t.SHOW_CHAT = "SHOW_CHAT", t.HIDE_CHAT = "HIDE_CHAT", t.TOGGLE_CHAT = "TOGGLE_CHAT", t.OPEN_CHAT = "OPEN_CHAT", t.CLOSE_CHAT = "CLOSE_CHAT", t.TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN", t.TOGGLE_INPUT_DISABLED = "TOGGLE_INPUT_DISABLED", t.CHANGE_INPUT_FIELD_HINT = "CHANGE_INOUT_FIELD_HINT", t.ADD_NEW_USER_MESSAGE = "ADD_NEW_USER_MESSAGE", t.EMIT_NEW_USER_MESSAGE = "EMIT_NEW_USER_MESSAGE", t.EMIT_MESSAGE_IF_FIRST = "EMIT_MESSAGE_IF_FIRST", t.ADD_NEW_RESPONSE_MESSAGE = "ADD_NEW_RESPONSE_MESSAGE", t.ADD_NEW_LINK_SNIPPET = "ADD_NEW_LINK_SNIPPET", t.ADD_NEW_VIDEO_VIDREPLY = "ADD_NEW_VIDEO_VIDREPLY", t.ADD_NEW_IMAGE_IMGREPLY = "ADD_NEW_IMAGE_IMGREPLY", t.ADD_COMPONENT_MESSAGE = "ADD_COMPONENT_MESSAGE", t.ADD_QUICK_REPLY = "ADD_QUICK_REPLY", t.SET_QUICK_REPLY = "SET_QUICK_REPLY", t.INSERT_NEW_USER_MESSAGE = "INSERT_NEW_USER_MESSAGE", t.DROP_MESSAGES = "DROP_MESSAGES", t.PULL_SESSION = "PULL_SESSION", t.NEW_UNREAD_MESSAGE = "NEW_UNREAD_MESSAGE", t.TRIGGER_MESSAGE_DELAY = "TRIGGER_MESSAGE_DELAY", t.TRIGGER_TOOLTIP_SENT = "TRIGGER_TOOLTIP_SENT", t.SHOW_TOOLTIP = "SHOW_TOOLTIP", t.CLEAR_METADATA = "CLEAR_METADATA", t.SET_LINK_TARGET = "SET_LINK_TARGET", t.SET_USER_INPUT = "SET_USER_INPUT", t.SET_PAGECHANGE_CALLBACKS = "SET_PAGECHANGE_CALLBACKS", t.SET_DOM_HIGHLIGHT = "SET_DOM_HIGHLIGHT", t.SET_HINT_TEXT = "SET_HINT_TEXT", t.SET_OLD_URL = "SET_OLD_URL", t.EVAL_URL = "EVAL_URL", t.SET_CUSTOM_CSS = "SET_CUSTOM_CSS"
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.storeMetadataTo = t.storeParamsTo = t.storeMessageTo = void 0;
     var r = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
         var n = arguments[t];
         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
       }
       return e
     };
     t.createNewMessage = function(e, t) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.TEXT,
         component: a.Message,
         text: e,
         sender: t,
         showAvatar: t === i.MESSAGE_SENDER.RESPONSE,
         timestamp: (new Date).getTime()
       })
     }, t.createLinkSnippet = function(e, t) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.SNIPPET.LINK,
         component: a.Snippet,
         title: e.title,
         link: e.link,
         content: e.content,
         target: e.target || "_blank",
         sender: t,
         showAvatar: !0,
         timestamp: (new Date).getTime()
       })
     }, t.createVideoSnippet = function(e, t) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.VIDREPLY.VIDEO,
         component: a.Video,
         title: e.title,
         video: e.video,
         sender: t,
         showAvatar: !0,
         timestamp: (new Date).getTime()
       })
     }, t.createImageSnippet = function(e, t) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.IMGREPLY.IMAGE,
         component: a.Image,
         title: e.title,
         image: e.image,
         sender: t,
         showAvatar: !0,
         timestamp: (new Date).getTime()
       })
     }, t.createQuickReply = function(e, t) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.QUICK_REPLY,
         component: a.QuickReply,
         text: e.text,
         hint: e.hint || "Select an option...",
         quick_replies: (0, o.fromJS)(e.quick_replies),
         sender: t,
         showAvatar: !0,
         chosenReply: null,
         timestamp: (new Date).getTime()
       })
     }, t.createComponentMessage = function(e, t, n) {
       return (0, o.Map)({
         type: i.MESSAGES_TYPES.CUSTOM_COMPONENT,
         component: e,
         props: t,
         sender: i.MESSAGE_SENDER.RESPONSE,
         showAvatar: n,
         timestamp: (new Date).getTime()
       })
     }, t.getLocalSession = u, t.storeLocalSession = function(e, t, n) {
       var o = e.getItem(t),
         i = void 0;
       if (o) {
         var a = JSON.parse(o);
         i = r({}, a, {
           session_id: n
         })
       } else i = {
         session_id: n
       };
       e.setItem(t, JSON.stringify(i))
     };
     var o = n(9),
       i = n(2),
       a = n(19);

     function u(e, t) {
       var n = e.getItem(t),
         o = null;
       if (n) {
         var i = JSON.parse(n),
           a = i.conversation ? i.conversation : [],
           u = i.params ? i.params : {},
           s = i.metadata ? i.metadata : {};
         o = r({}, i, {
           conversation: a,
           params: u,
           metadata: s
         })
       }
       return o
     }
     t.storeMessageTo = function(e) {
       return function(t) {
         var n = u(e, i.SESSION_NAME),
           o = r({}, n, {
             conversation: t.toJS(),
             lastUpdate: Date.now()
           });
         return e.setItem(i.SESSION_NAME, JSON.stringify(o)), t
       }
     }, t.storeParamsTo = function(e) {
       return function(t) {
         var n = u(e, i.SESSION_NAME),
           o = r({}, n, {
             params: t.toJS(),
             lastUpdate: Date.now()
           });
         return e.setItem(i.SESSION_NAME, JSON.stringify(o)), t
       }
     }, t.storeMetadataTo = function(e) {
       return function(t) {
         var n = u(e, i.SESSION_NAME),
           o = r({}, n, {
             metadata: t.toJS(),
             lastUpdate: Date.now()
           });
         return e.setItem(i.SESSION_NAME, JSON.stringify(o)), t
       }
     }
   }, function(e, t, n) {
     "use strict";
     ! function e() {
       if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
         0;
         try {
           __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
         } catch (e) {
           console.error(e)
         }
       }
     }(), e.exports = n(44)
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.initialize = function() {
       return {
         type: r.INITIALIZE
       }
     }, t.connectServer = function() {
       return {
         type: r.CONNECT
       }
     }, t.disconnectServer = function() {
       return {
         type: r.DISCONNECT
       }
     }, t.getOpenState = function() {
       return {
         type: r.GET_OPEN_STATE
       }
     }, t.getVisibleState = function() {
       return {
         type: r.GET_VISIBLE_STATE
       }
     }, t.showChat = function() {
       return {
         type: r.SHOW_CHAT
       }
     }, t.hideChat = function() {
       return {
         type: r.HIDE_CHAT
       }
     }, t.toggleChat = function() {
       return {
         type: r.TOGGLE_CHAT
       }
     }, t.openChat = function() {
       return {
         type: r.OPEN_CHAT
       }
     }, t.closeChat = function() {
       return {
         type: r.CLOSE_CHAT
       }
     }, t.toggleFullScreen = function() {
       return {
         type: r.TOGGLE_FULLSCREEN
       }
     }, t.toggleInputDisabled = function() {
       return {
         type: r.TOGGLE_INPUT_DISABLED
       }
     }, t.changeInputFieldHint = function(e) {
       return {
         type: r.CHANGE_INPUT_FIELD_HINT,
         hint: e
       }
     }, t.addUserMessage = function(e) {
       return {
         type: r.ADD_NEW_USER_MESSAGE,
         text: e
       }
     }, t.emitUserMessage = function(e) {
       return {
         type: r.EMIT_NEW_USER_MESSAGE,
         text: e
       }
     }, t.emitMessageIfFirst = function(e) {
       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
       return {
         type: r.EMIT_MESSAGE_IF_FIRST,
         payload: e,
         text: t
       }
     }, t.addResponseMessage = function(e) {
       return {
         type: r.ADD_NEW_RESPONSE_MESSAGE,
         text: e
       }
     }, t.addLinkSnippet = function(e) {
       return {
         type: r.ADD_NEW_LINK_SNIPPET,
         link: e
       }
     }, t.addVideoSnippet = function(e) {
       return {
         type: r.ADD_NEW_VIDEO_VIDREPLY,
         video: e
       }
     }, t.addImageSnippet = function(e) {
       return {
         type: r.ADD_NEW_IMAGE_IMGREPLY,
         image: e
       }
     }, t.addQuickReply = function(e) {
       return {
         type: r.ADD_QUICK_REPLY,
         quickReply: e
       }
     }, t.setQuickReply = function(e, t) {
       return {
         type: r.SET_QUICK_REPLY,
         id: e,
         title: t
       }
     }, t.insertUserMessage = function(e, t) {
       return {
         type: r.INSERT_NEW_USER_MESSAGE,
         index: e,
         text: t
       }
     }, t.renderCustomComponent = function(e, t, n) {
       return {
         type: r.ADD_COMPONENT_MESSAGE,
         component: e,
         props: t,
         showAvatar: n
       }
     }, t.dropMessages = function() {
       return {
         type: r.DROP_MESSAGES
       }
     }, t.pullSession = function() {
       return {
         type: r.PULL_SESSION
       }
     }, t.newUnreadMessage = function() {
       return {
         type: r.NEW_UNREAD_MESSAGE
       }
     }, t.triggerMessageDelayed = function(e) {
       return {
         type: r.TRIGGER_MESSAGE_DELAY,
         messageDelayed: e
       }
     }, t.showTooltip = function(e) {
       return {
         type: r.SHOW_TOOLTIP,
         visible: e
       }
     }, t.triggerTooltipSent = function(e) {
       return {
         type: r.TRIGGER_TOOLTIP_SENT,
         payloadSent: e
       }
     }, t.clearMetadata = function() {
       return {
         type: r.CLEAR_METADATA
       }
     }, t.setLinkTarget = function(e) {
       return {
         type: r.SET_LINK_TARGET,
         target: e
       }
     }, t.setUserInput = function(e) {
       return {
         type: r.SET_USER_INPUT,
         userInputState: e
       }
     }, t.setPageChangeCallbacks = function(e) {
       return {
         type: r.SET_PAGECHANGE_CALLBACKS,
         pageChangeCallbacks: e
       }
     }, t.setDomHighlight = function(e) {
       return {
         type: r.SET_DOM_HIGHLIGHT,
         domHighlight: e
       }
     }, t.hintText = function(e) {
       return {
         type: r.SET_HINT_TEXT,
         hint: e
       }
     }, t.changeOldUrl = function(e) {
       return {
         type: r.SET_OLD_URL,
         url: e
       }
     }, t.evalUrl = function(e) {
       return {
         type: r.EVAL_URL,
         url: e
       }
     }, t.setCustomCss = function(e) {
       return {
         type: r.SET_CUSTOM_CSS,
         customCss: e
       }
     };
     var r = function(e) {
       if (e && e.__esModule) return e;
       var t = {};
       if (null != e)
         for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
       return t.default = e, t
     }(n(11))
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       var t = "string" == typeof e ? e.charCodeAt(0) : e;
       return t >= 48 && t <= 57
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = u;
     var r = n(102),
       o = r.CONTINUE,
       i = r.SKIP,
       a = r.EXIT;

     function u(e, t, n, o) {
       "function" == typeof t && "function" != typeof n && (o = n, n = t, t = null), r(e, t, (function(e, t) {
         var r = t[t.length - 1],
           o = r ? r.children.indexOf(e) : null;
         return n(e, o, r)
       }), o)
     }
     u.CONTINUE = o, u.SKIP = i, u.EXIT = a
   }, function(e, t, n) {
     "use strict";
     e.exports = n(50)
   }, function(e, t, n) {
     "use strict";
     var r = n(9),
       o = {
         listOf: function(e) {
           return s(e, "List", r.List.isList)
         },
         mapOf: function(e, t) {
           return c(e, t, "Map", r.Map.isMap)
         },
         orderedMapOf: function(e, t) {
           return c(e, t, "OrderedMap", r.OrderedMap.isOrderedMap)
         },
         setOf: function(e) {
           return s(e, "Set", r.Set.isSet)
         },
         orderedSetOf: function(e) {
           return s(e, "OrderedSet", r.OrderedSet.isOrderedSet)
         },
         stackOf: function(e) {
           return s(e, "Stack", r.Stack.isStack)
         },
         iterableOf: function(e) {
           return s(e, "Iterable", r.Iterable.isIterable)
         },
         recordOf: function(e) {
           return a((function(t, n, o, a, u) {
             for (var s = arguments.length, l = Array(s > 5 ? s - 5 : 0), c = 5; c < s; c++) l[c - 5] = arguments[c];
             var f = t[n];
             if (!(f instanceof r.Record)) {
               var p = i(f),
                 d = a;
               return new Error("Invalid " + d + " `" + u + "` of type `" + p + "` supplied to `" + o + "`, expected an Immutable.js Record.")
             }
             for (var h in e) {
               var m = e[h];
               if (m) {
                 var g = f.toObject(),
                   v = m.apply(void 0, [g, h, o, a, u + "." + h].concat(l));
                 if (v) return v
               }
             }
           }))
         },
         shape: p,
         contains: p,
         mapContains: function(e) {
           return f(e, "Map", r.Map.isMap)
         },
         list: u("List", r.List.isList),
         map: u("Map", r.Map.isMap),
         orderedMap: u("OrderedMap", r.OrderedMap.isOrderedMap),
         set: u("Set", r.Set.isSet),
         orderedSet: u("OrderedSet", r.OrderedSet.isOrderedSet),
         stack: u("Stack", r.Stack.isStack),
         seq: u("Seq", r.Seq.isSeq),
         record: u("Record", (function(e) {
           return e instanceof r.Record
         })),
         iterable: u("Iterable", r.Iterable.isIterable)
       };

     function i(e) {
       var t = typeof e;
       return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : e instanceof r.Iterable ? "Immutable." + e.toSource().split(" ")[0] : t
     }

     function a(e) {
       function t(t, n, r, o, i, a) {
         for (var u = arguments.length, s = Array(u > 6 ? u - 6 : 0), l = 6; l < u; l++) s[l - 6] = arguments[l];
         if (a = a || r, o = o || "<<anonymous>>", null != n[r]) return e.apply(void 0, [n, r, o, i, a].concat(s));
         var c = i;
         return t ? new Error("Required " + c + " `" + a + "` was not specified in `" + o + "`.") : void 0
       }
       var n = t.bind(null, !1);
       return n.isRequired = t.bind(null, !0), n
     }

     function u(e, t) {
       return a((function(n, r, o, a, u) {
         var s = n[r];
         if (!t(s)) {
           var l = i(s);
           return new Error("Invalid " + a + " `" + u + "` of type `" + l + "` supplied to `" + o + "`, expected `" + e + "`.")
         }
         return null
       }))
     }

     function s(e, t, n) {
       return a((function(r, o, a, u, s) {
         for (var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), f = 5; f < l; f++) c[f - 5] = arguments[f];
         var p = r[o];
         if (!n(p)) {
           var d = u,
             h = i(p);
           return new Error("Invalid " + d + " `" + s + "` of type `" + h + "` supplied to `" + a + "`, expected an Immutable.js " + t + ".")
         }
         if ("function" != typeof e) return new Error("Invalid typeChecker supplied to `" + a + "` for propType `" + s + "`, expected a function.");
         for (var m = p.toArray(), g = 0, v = m.length; g < v; g++) {
           var y = e.apply(void 0, [m, g, a, u, s + "[" + g + "]"].concat(c));
           if (y instanceof Error) return y
         }
       }))
     }

     function l(e) {
       return a((function(t, n, r, o, i) {
         for (var a = arguments.length, u = Array(a > 5 ? a - 5 : 0), s = 5; s < a; s++) u[s - 5] = arguments[s];
         var l = t[n];
         if ("function" != typeof e) return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + r + "` for propType `" + i + "`, expected a function.");
         for (var c = l.keySeq().toArray(), f = 0, p = c.length; f < p; f++) {
           var d = e.apply(void 0, [c, f, r, o, i + " -> key(" + c[f] + ")"].concat(u));
           if (d instanceof Error) return d
         }
       }))
     }

     function c(e, t, n, r) {
       return a((function() {
         for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
         return s(e, n, r).apply(void 0, i) || t && l(t).apply(void 0, i)
       }))
     }

     function f(e) {
       var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
         n = void 0 === arguments[2] ? r.Iterable.isIterable : arguments[2];

       function o(r, o, a, u, s) {
         for (var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), f = 5; f < l; f++) c[f - 5] = arguments[f];
         var p = r[o];
         if (!n(p)) {
           var d = i(p),
             h = u;
           return new Error("Invalid " + h + " `" + s + "` of type `" + d + "` supplied to `" + a + "`, expected an Immutable.js " + t + ".")
         }
         var m = p.toObject();
         for (var g in e) {
           var v = e[g];
           if (v) {
             var y = v.apply(void 0, [m, g, a, u, s + "." + g].concat(c));
             if (y) return y
           }
         }
       }
       return a(o)
     }

     function p(e) {
       return f(e)
     }
     e.exports = o
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.QuickReply = t.Snippet = t.Message = t.Image = t.Video = void 0;
     var r = s(n(63)),
       o = s(n(66)),
       i = s(n(32)),
       a = s(n(155)),
       u = s(n(158));

     function s(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     t.Video = r.default, t.Image = o.default, t.Message = i.default, t.Snippet = a.default, t.QuickReply = u.default
   }, function(e, t, n) {
     "use strict";
     var r = n(91),
       o = n(92),
       i = n(15),
       a = n(93),
       u = n(94),
       s = n(95);
     e.exports = function(e, t) {
       var n, i, a = {};
       t || (t = {});
       for (i in p) n = t[i], a[i] = null == n ? p[i] : n;
       (a.position.indent || a.position.start) && (a.indent = a.position.indent || [], a.position = a.position.start);
       return function(e, t) {
         var n, i, a, p, b, w, _, E, S, k, x, T, C, O, I, M, A, P, N, j = t.additional,
           D = t.nonTerminated,
           R = t.text,
           L = t.reference,
           z = t.warning,
           U = t.textContext,
           B = t.referenceContext,
           F = t.warningContext,
           H = t.position,
           G = t.indent || [],
           W = e.length,
           V = 0,
           q = -1,
           Y = H.column || 1,
           K = H.line || 1,
           Q = "",
           Z = [];
         "string" == typeof j && (j = j.charCodeAt(0));
         M = J(), E = z ? function(e, t) {
           var n = J();
           n.column += t, n.offset += t, z.call(F, v[e], n, e)
         } : f, V--, W++;
         for (; ++V < W;)
           if (10 === b && (Y = G[q] || 1), 38 === (b = e.charCodeAt(V))) {
             if (9 === (_ = e.charCodeAt(V + 1)) || 10 === _ || 12 === _ || 32 === _ || 38 === _ || 60 === _ || _ != _ || j && _ === j) {
               Q += c(b), Y++;
               continue
             }
             for (T = C = V + 1, N = C, 35 === _ ? (N = ++T, 88 === (_ = e.charCodeAt(N)) || 120 === _ ? (O = h, N = ++T) : O = "decimal") : O = d, n = "", x = "", p = "", I = g[O], N--; ++N < W && (_ = e.charCodeAt(N), I(_));) p += c(_), O === d && l.call(r, p) && (n = p, x = r[p]);
             (a = 59 === e.charCodeAt(N)) && (N++, (i = O === d && s(p)) && (n = p, x = i)), P = 1 + N - C, (a || D) && (p ? O === d ? (a && !x ? E(5, 1) : (n !== p && (N = T + n.length, P = 1 + N - T, a = !1), a || (S = n ? 1 : 3, t.attribute ? 61 === (_ = e.charCodeAt(N)) ? (E(S, P), x = null) : u(_) ? x = null : E(S, P) : E(S, P))), w = x) : (a || E(2, P), w = parseInt(p, m[O]), ($ = w) >= 55296 && $ <= 57343 || $ > 1114111 ? (E(7, P), w = c(65533)) : w in o ? (E(6, P), w = o[w]) : (k = "", y(w) && E(6, P), w > 65535 && (k += c((w -= 65536) >>> 10 | 55296), w = 56320 | 1023 & w), w = k + c(w))) : O !== d && E(4, P)), w ? (X(), M = J(), V = N - 1, Y += N - C + 1, Z.push(w), (A = J()).offset++, L && L.call(B, w, {
               start: M,
               end: A
             }, e.slice(C - 1, N)), M = A) : (p = e.slice(C - 1, N), Q += p, Y += p.length, V = N - 1)
           } else 10 === b && (K++, q++, Y = 0), b == b ? (Q += c(b), Y++) : X();
         var $;
         return Z.join("");

         function J() {
           return {
             line: K,
             column: Y,
             offset: V + (H.offset || 0)
           }
         }

         function X() {
           Q && (Z.push(Q), R && R.call(U, Q, {
             start: M,
             end: J()
           }), Q = "")
         }
       }(e, a)
     };
     var l = {}.hasOwnProperty,
       c = String.fromCharCode,
       f = Function.prototype,
       p = {
         warning: null,
         reference: null,
         text: null,
         warningContext: null,
         referenceContext: null,
         textContext: null,
         position: {},
         additional: null,
         attribute: !1,
         nonTerminated: !0
       },
       d = "named",
       h = "hexadecimal",
       m = {
         hexadecimal: 16,
         decimal: 10
       },
       g = {};
     g.named = u, g.decimal = i, g[h] = a;
     var v = {};

     function y(e) {
       return e >= 1 && e <= 8 || 11 === e || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || 65535 == (65535 & e) || 65534 == (65535 & e)
     }
     v[1] = "Named character references must be terminated by a semicolon", v[2] = "Numeric character references must be terminated by a semicolon", v[3] = "Named character references cannot be empty", v[4] = "Numeric character references cannot be empty", v[5] = "Named character references must be known", v[6] = "Numeric character references cannot be disallowed", v[7] = "Numeric character references cannot be outside the permissible Unicode range"
   }, function(e, t, n) {
     "use strict";
     /*!
         * repeat-string <https://github.com/jonschlinkert/repeat-string>
         *
         * Copyright (c) 2014-2015, Jon Schlinkert.
         * Licensed under the MIT License.
         */
     var r, o = "";
     e.exports = function(e, t) {
       if ("string" != typeof e) throw new TypeError("expected a string");
       if (1 === t) return e;
       if (2 === t) return e + e;
       var n = e.length * t;
       if (r !== e || void 0 === r) r = e, o = "";
       else if (o.length >= n) return o.substr(0, n);
       for (; n > o.length && t > 1;) 1 & t && (o += e), t >>= 1, e += e;
       return o = (o += e).substr(0, n)
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       var t = String(e),
         n = t.length;
       for (;
         "\n" === t.charAt(--n););
       return t.slice(0, n + 1)
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n, r) {
       var o, i, a, u, s, l, c = ["pedantic", "commonmark"],
         f = c.length,
         p = e.length,
         d = -1;
       for (; ++d < p;) {
         for (o = e[d], i = o[1] || {}, a = o[0], u = -1, l = !1; ++u < f;)
           if (void 0 !== i[s = c[u]] && i[s] !== n.options[s]) {
             l = !0;
             break
           } if (!l && t[a].apply(n, r)) return !0
       }
       return !1
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(115);
     e.exports = function(e) {
       return r(e).toLowerCase()
     }
   }, function(e, t, n) {
     "use strict";
     n.r(t), n.d(t, "__DO_NOT_USE__ActionTypes", (function() {
       return i
     })), n.d(t, "applyMiddleware", (function() {
       return g
     })), n.d(t, "bindActionCreators", (function() {
       return f
     })), n.d(t, "combineReducers", (function() {
       return l
     })), n.d(t, "compose", (function() {
       return m
     })), n.d(t, "createStore", (function() {
       return u
     }));
     var r = n(27),
       o = function() {
         return Math.random().toString(36).substring(7).split("").join(".")
       },
       i = {
         INIT: "@@redux/INIT" + o(),
         REPLACE: "@@redux/REPLACE" + o(),
         PROBE_UNKNOWN_ACTION: function() {
           return "@@redux/PROBE_UNKNOWN_ACTION" + o()
         }
       };

     function a(e) {
       if ("object" != typeof e || null === e) return !1;
       for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
       return Object.getPrototypeOf(e) === t
     }

     function u(e, t, n) {
       var o;
       if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
       if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
         if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
         return n(u)(e, t)
       }
       if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
       var s = e,
         l = t,
         c = [],
         f = c,
         p = !1;

       function d() {
         f === c && (f = c.slice())
       }

       function h() {
         if (p) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
         return l
       }

       function m(e) {
         if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
         if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
         var t = !0;
         return d(), f.push(e),
           function() {
             if (t) {
               if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
               t = !1, d();
               var n = f.indexOf(e);
               f.splice(n, 1), c = null
             }
           }
       }

       function g(e) {
         if (!a(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
         if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
         if (p) throw new Error("Reducers may not dispatch actions.");
         try {
           p = !0, l = s(l, e)
         } finally {
           p = !1
         }
         for (var t = c = f, n = 0; n < t.length; n++) {
           (0, t[n])()
         }
         return e
       }

       function v(e) {
         if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
         s = e, g({
           type: i.REPLACE
         })
       }

       function y() {
         var e, t = m;
         return (e = {
           subscribe: function(e) {
             if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

             function n() {
               e.next && e.next(h())
             }
             return n(), {
               unsubscribe: t(n)
             }
           }
         })[r.a] = function() {
           return this
         }, e
       }
       return g({
         type: i.INIT
       }), (o = {
         dispatch: g,
         subscribe: m,
         getState: h,
         replaceReducer: v
       })[r.a] = y, o
     }

     function s(e, t) {
       var n = t && t.type;
       return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
     }

     function l(e) {
       for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
         var o = t[r];
         0, "function" == typeof e[o] && (n[o] = e[o])
       }
       var a, u = Object.keys(n);
       try {
         ! function(e) {
           Object.keys(e).forEach((function(t) {
             var n = e[t];
             if (void 0 === n(void 0, {
                 type: i.INIT
               })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
             if (void 0 === n(void 0, {
                 type: i.PROBE_UNKNOWN_ACTION()
               })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
           }))
         }(n)
       } catch (e) {
         a = e
       }
       return function(e, t) {
         if (void 0 === e && (e = {}), a) throw a;
         for (var r = !1, o = {}, i = 0; i < u.length; i++) {
           var l = u[i],
             c = n[l],
             f = e[l],
             p = c(f, t);
           if (void 0 === p) {
             var d = s(l, t);
             throw new Error(d)
           }
           o[l] = p, r = r || p !== f
         }
         return (r = r || u.length !== Object.keys(e).length) ? o : e
       }
     }

     function c(e, t) {
       return function() {
         return t(e.apply(this, arguments))
       }
     }

     function f(e, t) {
       if ("function" == typeof e) return c(e, t);
       if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
       var n = {};
       for (var r in e) {
         var o = e[r];
         "function" == typeof o && (n[r] = c(o, t))
       }
       return n
     }

     function p(e, t, n) {
       return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
       }) : e[t] = n, e
     }

     function d(e, t) {
       var n = Object.keys(e);
       return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
         return Object.getOwnPropertyDescriptor(e, t).enumerable
       }))), n
     }

     function h(e) {
       for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? d(n, !0).forEach((function(t) {
           p(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function(t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
       }
       return e
     }

     function m() {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       return 0 === t.length ? function(e) {
         return e
       } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
         return function() {
           return e(t.apply(void 0, arguments))
         }
       }))
     }

     function g() {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       return function(e) {
         return function() {
           var n = e.apply(void 0, arguments),
             r = function() {
               throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
             },
             o = {
               getState: n.getState,
               dispatch: function() {
                 return r.apply(void 0, arguments)
               }
             },
             i = t.map((function(e) {
               return e(o)
             }));
           return h({}, n, {
             dispatch: r = m.apply(void 0, i)(n.dispatch)
           })
         }
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(17),
       o = {
         childContextTypes: !0,
         contextType: !0,
         contextTypes: !0,
         defaultProps: !0,
         displayName: !0,
         getDefaultProps: !0,
         getDerivedStateFromError: !0,
         getDerivedStateFromProps: !0,
         mixins: !0,
         propTypes: !0,
         type: !0
       },
       i = {
         name: !0,
         length: !0,
         prototype: !0,
         caller: !0,
         callee: !0,
         arguments: !0,
         arity: !0
       },
       a = {
         $$typeof: !0,
         compare: !0,
         defaultProps: !0,
         displayName: !0,
         propTypes: !0,
         type: !0
       },
       u = {};

     function s(e) {
       return r.isMemo(e) ? a : u[e.$$typeof] || o
     }
     u[r.ForwardRef] = {
       $$typeof: !0,
       render: !0,
       defaultProps: !0,
       displayName: !0,
       propTypes: !0
     };
     var l = Object.defineProperty,
       c = Object.getOwnPropertyNames,
       f = Object.getOwnPropertySymbols,
       p = Object.getOwnPropertyDescriptor,
       d = Object.getPrototypeOf,
       h = Object.prototype;
     e.exports = function e(t, n, r) {
       if ("string" != typeof n) {
         if (h) {
           var o = d(n);
           o && o !== h && e(t, o, r)
         }
         var a = c(n);
         f && (a = a.concat(f(n)));
         for (var u = s(t), m = s(n), g = 0; g < a.length; ++g) {
           var v = a[g];
           if (!(i[v] || r && r[v] || m && m[v] || u && u[v])) {
             var y = p(n, v);
             try {
               l(t, v, y)
             } catch (e) {}
           }
         }
       }
       return t
     }
   }, function(e, t, n) {
     "use strict";
     (function(e, r) {
       var o, i = n(41);
       o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
       var a = Object(i.a)(o);
       t.a = a
     }).call(this, n(30), n(51)(e))
   }, function(e, t, n) {
     "use strict";
     /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
     var r = Object.getOwnPropertySymbols,
       o = Object.prototype.hasOwnProperty,
       i = Object.prototype.propertyIsEnumerable;

     function a(e) {
       if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
       return Object(e)
     }
     e.exports = function() {
       try {
         if (!Object.assign) return !1;
         var e = new String("abc");
         if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
         for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
         if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
             return t[e]
           })).join("")) return !1;
         var r = {};
         return "abcdefghijklmnopqrst".split("").forEach((function(e) {
           r[e] = e
         })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
       } catch (e) {
         return !1
       }
     }() ? Object.assign : function(e, t) {
       for (var n, u, s = a(e), l = 1; l < arguments.length; l++) {
         for (var c in n = Object(arguments[l])) o.call(n, c) && (s[c] = n[c]);
         if (r) {
           u = r(n);
           for (var f = 0; f < u.length; f++) i.call(n, u[f]) && (s[u[f]] = n[u[f]])
         }
       }
       return s
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.store = void 0;
     var r = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       o = n(0),
       i = f(o),
       a = f(n(1)),
       u = n(8),
       s = f(n(52)),
       l = n(179),
       c = f(n(183));

     function f(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     var p = t.store = null,
       d = (0, o.forwardRef)((function(e, n) {
         var o = new(function() {
             function e(t, n, r, o, i, a) {
               ! function(e, t) {
                 if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
               }(this, e), this.url = t, this.customData = n, this.protocolOptions = r, this.channelUuid = o, this.host = i, this.onSocketEvent = a, this.socket = null, this.subscribed = null, this.onEvents = [], this.marker = Math.random()
             }
             return r(e, [{
               key: "isInitialized",
               value: function() {
                 return null !== this.socket && "open" == this.socket.state
               }
             }, {
               key: "on",
               value: function(e, t) {
                 this.socket ? this.socket.on(e, t) : this.onEvents.push({
                   event: e,
                   callback: t
                 })
               }
             }, {
               key: "subscribe",
               value: function(e, t) {
                 this.socket.isSubscribed(e) || this.subscribed || (this.subscribed = e, this.socket.subscribe(e).watch(t))
               }
             }, {
               key: "emit",
               value: function(e, t, n) {
                 this.socket && this.socket.emit(e, t, n)
               }
             }, {
               key: "close",
               value: function() {
                 this.socket && this.socket.close()
               }
             }, {
               key: "createSocket",
               value: function() {
                 var e = this,
                   t = {
                     hostname: this.url.replace(/^(https?:|)\/\//, ""),
                     query: {
                       channelUUID: this.channelUuid,
                       hostApi: this.host
                     }
                   };
                 t = Object.assign(t, this.protocolOptions), this.socket = c.default.connect(t), this.onEvents.forEach((function(t) {
                   e.socket.on(t.event, t.callback)
                 })), this.onEvents = [], Object.keys(this.onSocketEvent).forEach((function(t) {
                   e.socket.on(t, e.onSocketEvent[t])
                 }))
               }
             }]), e
           }())(e.socketUrl, e.customData, e.protocolOptions, e.channelUuid, e.host, e.onSocketEvent),
           a = "session" === e.params.storage ? sessionStorage : localStorage;
         return p && o.marker === p.socketRef || (t.store = p = (0, l.initStore)(e.inputTextFieldHint, e.connectingText, o, a, e.docViewer, e.onWidgetEvent), p.socketRef = o.marker), i.default.createElement(u.Provider, {
           store: p
         }, i.default.createElement(s.default, {
           ref: n,
           initPayload: e.initPayload,
           title: e.title,
           subtitle: e.subtitle,
           customData: e.customData,
           handleNewUserMessage: e.handleNewUserMessage,
           profileAvatar: e.profileAvatar,
           showCloseButton: e.showCloseButton,
           showFullScreenButton: e.showFullScreenButton,
           hideWhenNotConnected: e.hideWhenNotConnected,
           connectOn: e.connectOn,
           autoClearCache: e.autoClearCache,
           fullScreenMode: e.fullScreenMode,
           badge: e.badge,
           embedded: e.embedded,
           params: e.params,
           storage: a,
           openLauncherImage: e.openLauncherImage,
           closeImage: e.closeImage,
           customComponent: e.customComponent,
           displayUnreadCount: e.displayUnreadCount,
           socket: o,
           showMessageDate: e.showMessageDate,
           customMessageDelay: e.customMessageDelay,
           tooltipPayload: e.tooltipPayload,
           tooltipDelay: e.tooltipDelay,
           disableTooltips: e.disableTooltips,
           defaultHighlightCss: e.defaultHighlightCss,
           defaultHighlightAnimation: e.defaultHighlightAnimation,
           defaultHighlightClassname: e.defaultHighlightClassname
         }))
       }));
     d.propTypes = {
       initPayload: a.default.string,
       title: a.default.oneOfType([a.default.string, a.default.element]),
       subtitle: a.default.oneOfType([a.default.string, a.default.element]),
       socketUrl: a.default.string.isRequired,
       protocolOptions: a.default.shape({}),
       channelUuid: a.default.string,
       host: a.default.string,
       customData: a.default.shape({}),
       handleNewUserMessage: a.default.func,
       profileAvatar: a.default.string,
       inputTextFieldHint: a.default.string,
       connectingText: a.default.string,
       showCloseButton: a.default.bool,
       showFullScreenButton: a.default.bool,
       hideWhenNotConnected: a.default.bool,
       connectOn: a.default.oneOf(["mount", "open"]),
       autoClearCache: a.default.bool,
       onSocketEvent: a.default.objectOf(a.default.func),
       fullScreenMode: a.default.bool,
       badge: a.default.number,
       embedded: a.default.bool,
       params: a.default.object,
       openLauncherImage: a.default.string,
       closeImage: a.default.string,
       docViewer: a.default.bool,
       customComponent: a.default.func,
       displayUnreadCount: a.default.bool,
       showMessageDate: a.default.oneOfType([a.default.bool, a.default.func]),
       customMessageDelay: a.default.func,
       tooltipPayload: a.default.string,
       tooltipDelay: a.default.number,
       onWidgetEvent: a.default.shape({
         onChatOpen: a.default.func,
         onChatClose: a.default.func,
         onChatVisible: a.default.func,
         onChatHidden: a.default.func
       }),
       disableTooltips: a.default.bool,
       defaultHighlightCss: a.default.string,
       defaultHighlightAnimation: a.default.string
     }, d.defaultProps = {
       title: "Welcome",
       customData: {},
       inputTextFieldHint: "Type a question...",
       connectingText: "Waiting for server...",
       fullScreenMode: !1,
       hideWhenNotConnected: !0,
       autoClearCache: !1,
       connectOn: "mount",
       onSocketEvent: {},
       socketUrl: "https://socket.push.al",
       protocolOptions: {
         secure: !0,
         port: 443
       },
       channelUuid: null,
       host: "https://new.push.al",
       badge: 0,
       embedded: !1,
       params: {
         storage: "local"
       },
       docViewer: !1,
       showCloseButton: !0,
       showFullScreenButton: !1,
       displayUnreadCount: !1,
       showMessageDate: !1,
       customMessageDelay: function(e) {
         var t = 30 * e.length;
         return t > 3e3 && (t = 3e3), t < 800 && (t = 800), t
       },
       tooltipPayload: null,
       tooltipDelay: 500,
       onWidgetEvent: {
         onChatOpen: function() {},
         onChatClose: function() {},
         onChatVisible: function() {},
         onChatHidden: function() {}
       },
       disableTooltips: !1
     }, t.default = d
   }, function(e, t) {
     var n;
     n = function() {
       return this
     }();
     try {
       n = n || new Function("return this")()
     } catch (e) {
       "object" == typeof window && (n = window)
     }
     e.exports = n
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzU3IDM1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzU3IDM1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjbGVhciI+CgkJPHBvbHlnb24gcG9pbnRzPSIzNTcsMzUuNyAzMjEuMywwIDE3OC41LDE0Mi44IDM1LjcsMCAwLDM1LjcgMTQyLjgsMTc4LjUgMCwzMjEuMyAzNS43LDM1NyAxNzguNSwyMTQuMiAzMjEuMywzNTcgMzU3LDMyMS4zICAgICAyMTQuMiwxNzguNSAgICIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       o = n(0),
       i = f(o),
       a = f(n(69)),
       u = n(8),
       s = f(n(1)),
       l = n(2),
       c = f(n(149));

     function f(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }

     function p(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function d(e, t) {
       if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
     n(153);
     var h = function(e) {
       function t() {
         return p(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), r(t, [{
         key: "render",
         value: function() {
           var e = this.props,
             t = e.docViewer,
             n = e.linkTarget,
             r = this.props.message.get("sender"),
             o = this.props.message.get("text"),
             u = this.props.message.get("customCss") && this.props.message.get("customCss").toJS();
           return u && "class" === u.style && (u.css = u.css.replace(/^\./, "")), i.default.createElement("div", {
             className: "response" === r && u && "class" === u.style ? "response " + u.css : r,
             style: {
               cssText: "response" === r && u && "custom" === u.style ? u.css : void 0
             }
           }, i.default.createElement("div", {
             className: "message-text"
           }, "response" === r ? i.default.createElement(a.default, {
             className: "markdown",
             source: o,
             linkTarget: function(e) {
               if (!e.startsWith("mailto") && !e.startsWith("javascript")) return "_blank"
             },
             transformLinkUri: null,
             renderers: {
               link: function(e) {
                 return t ? i.default.createElement(c.default, {
                   src: e.href
                 }, e.children) : i.default.createElement("a", {
                   href: e.href,
                   target: n || "_blank",
                   rel: "noopener noreferrer"
                 }, e.children)
               }
             }
           }) : o))
         }
       }]), t
     }(o.PureComponent);
     h.propTypes = {
       message: l.PROP_TYPES.MESSAGE,
       docViewer: s.default.bool,
       linkTarget: s.default.string
     }, h.defaultTypes = {
       docViewer: !1,
       linkTarget: "_blank"
     };
     t.default = (0, u.connect)((function(e) {
       return {
         linkTarget: e.metadata.get("linkTarget"),
         docViewer: e.behavior.get("docViewer")
       }
     }))(h)
   }, function(e, t) {
     var n, r, o = e.exports = {};

     function i() {
       throw new Error("setTimeout has not been defined")
     }

     function a() {
       throw new Error("clearTimeout has not been defined")
     }

     function u(e) {
       if (n === setTimeout) return setTimeout(e, 0);
       if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
       try {
         return n(e, 0)
       } catch (t) {
         try {
           return n.call(null, e, 0)
         } catch (t) {
           return n.call(this, e, 0)
         }
       }
     }! function() {
       try {
         n = "function" == typeof setTimeout ? setTimeout : i
       } catch (e) {
         n = i
       }
       try {
         r = "function" == typeof clearTimeout ? clearTimeout : a
       } catch (e) {
         r = a
       }
     }();
     var s, l = [],
       c = !1,
       f = -1;

     function p() {
       c && s && (c = !1, s.length ? l = s.concat(l) : f = -1, l.length && d())
     }

     function d() {
       if (!c) {
         var e = u(p);
         c = !0;
         for (var t = l.length; t;) {
           for (s = l, l = []; ++f < t;) s && s[f].run();
           f = -1, t = l.length
         }
         s = null, c = !1,
           function(e) {
             if (r === clearTimeout) return clearTimeout(e);
             if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
             try {
               r(e)
             } catch (t) {
               try {
                 return r.call(null, e)
               } catch (t) {
                 return r.call(this, e)
               }
             }
           }(e)
       }
     }

     function h(e, t) {
       this.fun = e, this.array = t
     }

     function m() {}
     o.nextTick = function(e) {
       var t = new Array(arguments.length - 1);
       if (arguments.length > 1)
         for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
       l.push(new h(e, t)), 1 !== l.length || c || u(d)
     }, h.prototype.run = function() {
       this.fun.apply(null, this.array)
     }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
       return []
     }, o.binding = function(e) {
       throw new Error("process.binding is not supported")
     }, o.cwd = function() {
       return "/"
     }, o.chdir = function(e) {
       throw new Error("process.chdir is not supported")
     }, o.umask = function() {
       return 0
     }
   }, function(e, t, n) {
     (function(e) {
       function n(e, t) {
         for (var n = 0, r = e.length - 1; r >= 0; r--) {
           var o = e[r];
           "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
         }
         if (t)
           for (; n--; n) e.unshift("..");
         return e
       }

       function r(e, t) {
         if (e.filter) return e.filter(t);
         for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
         return n
       }
       t.resolve = function() {
         for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
           var a = i >= 0 ? arguments[i] : e.cwd();
           if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
           a && (t = a + "/" + t, o = "/" === a.charAt(0))
         }
         return (o ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
           return !!e
         })), !o).join("/")) || "."
       }, t.normalize = function(e) {
         var i = t.isAbsolute(e),
           a = "/" === o(e, -1);
         return (e = n(r(e.split("/"), (function(e) {
           return !!e
         })), !i).join("/")) || i || (e = "."), e && a && (e += "/"), (i ? "/" : "") + e
       }, t.isAbsolute = function(e) {
         return "/" === e.charAt(0)
       }, t.join = function() {
         var e = Array.prototype.slice.call(arguments, 0);
         return t.normalize(r(e, (function(e, t) {
           if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
           return e
         })).join("/"))
       }, t.relative = function(e, n) {
         function r(e) {
           for (var t = 0; t < e.length && "" === e[t]; t++);
           for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
           return t > n ? [] : e.slice(t, n - t + 1)
         }
         e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
         for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), u = a, s = 0; s < a; s++)
           if (o[s] !== i[s]) {
             u = s;
             break
           } var l = [];
         for (s = u; s < o.length; s++) l.push("..");
         return (l = l.concat(i.slice(u))).join("/")
       }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
         if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
         for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i)
           if (47 === (t = e.charCodeAt(i))) {
             if (!o) {
               r = i;
               break
             }
           } else o = !1;
         return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
       }, t.basename = function(e, t) {
         var n = function(e) {
           "string" != typeof e && (e += "");
           var t, n = 0,
             r = -1,
             o = !0;
           for (t = e.length - 1; t >= 0; --t)
             if (47 === e.charCodeAt(t)) {
               if (!o) {
                 n = t + 1;
                 break
               }
             } else -1 === r && (o = !1, r = t + 1);
           return -1 === r ? "" : e.slice(n, r)
         }(e);
         return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
       }, t.extname = function(e) {
         "string" != typeof e && (e += "");
         for (var t = -1, n = 0, r = -1, o = !0, i = 0, a = e.length - 1; a >= 0; --a) {
           var u = e.charCodeAt(a);
           if (47 !== u) - 1 === r && (o = !1, r = a + 1), 46 === u ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1);
           else if (!o) {
             n = a + 1;
             break
           }
         }
         return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
       };
       var o = "b" === "ab".substr(-1) ? function(e, t, n) {
         return e.substr(t, n)
       } : function(e, t, n) {
         return t < 0 && (t = e.length + t), e.substr(t, n)
       }
     }).call(this, n(33))
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       var t = "string" == typeof e ? e.charCodeAt(0) : e;
       return t >= 97 && t <= 122 || t >= 65 && t <= 90
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = {
       position: !0,
       gfm: !0,
       commonmark: !1,
       footnotes: !1,
       pedantic: !1,
       blocks: n(99)
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       var t, n = 0,
         o = 0,
         i = e.charAt(n),
         a = {};
       for (; i in r;) o += t = r[i], t > 1 && (o = Math.floor(o / t) * t), a[o] = n, i = e.charAt(++n);
       return {
         indent: o,
         stops: a
       }
     };
     var r = {
       " ": 1,
       "\t": 4
     }
   }, function(e, t, n) {
     "use strict";
     var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
       o = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
     t.openCloseTag = new RegExp("^(?:" + r + "|" + o + ")"), t.tag = new RegExp("^(?:" + r + "|" + o + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       return e.indexOf("<", t)
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       var n = e.indexOf("[", t),
         r = e.indexOf("![", t);
       if (-1 === r) return n;
       return n < r ? n : r
     }
   }, function(e, t, n) {
     "use strict";

     function r(e) {
       var t, n = e.Symbol;
       return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
     }
     n.d(t, "a", (function() {
       return r
     }))
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.dropMessages = t.send = t.isVisible = t.isOpen = t.hide = t.show = t.close = t.open = t.toggle = t.Widget = t.default = void 0;
     var r = a(n(0)),
       o = a(n(13)),
       i = n(47);

     function a(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     var u = {
       init: function(e) {
         o.default.render(r.default.createElement(i.Widget, {
           protocol: e.protocol,
           socketUrl: e.socketUrl,
           protocolOptions: e.protocolOptions,
           channelUuid: e.channelUuid,
           host: e.host,
           initPayload: e.initPayload,
           title: e.title,
           subtitle: e.subtitle,
           customData: e.customData,
           inputTextFieldHint: e.inputTextFieldHint,
           connectingText: e.connectingText,
           profileAvatar: e.profileAvatar,
           showCloseButton: e.showCloseButton,
           showFullScreenButton: e.showFullScreenButton,
           hideWhenNotConnected: e.hideWhenNotConnected,
           autoClearCache: e.autoClearCache,
           connectOn: e.connectOn,
           onSocketEvent: e.onSocketEvent,
           fullScreenMode: e.fullScreenMode,
           badge: e.badge,
           params: e.params,
           embedded: e.embedded,
           openLauncherImage: e.openLauncherImage,
           closeImage: e.closeImage,
           docViewer: e.docViewer,
           displayUnreadCount: e.displayUnreadCount,
           showMessageDate: e.showMessageDate,
           customMessageDelay: e.customMessageDelay,
           tooltipPayload: e.tooltipPayload,
           tooltipDelay: e.tooltipDelay,
           onWidgetEvent: e.onWidgetEvent,
           disableTooltips: e.disableTooltips,
           defaultHighlightCss: e.defaultHighlightCss,
           defaultHighlightAnimation: e.defaultHighlightAnimation,
           defaultHighlightClassname: e.defaultHighlightClassname
         }), document.querySelector(e.selector))
       }
     };
     t.default = u, t.Widget = i.Widget, t.toggle = i.toggleChat, t.open = i.openChat, t.close = i.closeChat, t.show = i.showChat, t.hide = i.hideChat, t.isOpen = i.isOpen, t.isVisible = i.isVisible, t.send = i.send, t.dropMessages=i.dropMessages
   }, function(e, t, n) {
     "use strict";
     /** @license React v16.12.0
      * react.production.min.js
      *
      * Copyright (c) Facebook, Inc. and its affiliates.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE file in the root directory of this source tree.
      */
     var r = n(28),
       o = "function" == typeof Symbol && Symbol.for,
       i = o ? Symbol.for("react.element") : 60103,
       a = o ? Symbol.for("react.portal") : 60106,
       u = o ? Symbol.for("react.fragment") : 60107,
       s = o ? Symbol.for("react.strict_mode") : 60108,
       l = o ? Symbol.for("react.profiler") : 60114,
       c = o ? Symbol.for("react.provider") : 60109,
       f = o ? Symbol.for("react.context") : 60110,
       p = o ? Symbol.for("react.forward_ref") : 60112,
       d = o ? Symbol.for("react.suspense") : 60113;
     o && Symbol.for("react.suspense_list");
     var h = o ? Symbol.for("react.memo") : 60115,
       m = o ? Symbol.for("react.lazy") : 60116;
     o && Symbol.for("react.fundamental"), o && Symbol.for("react.responder"), o && Symbol.for("react.scope");
     var g = "function" == typeof Symbol && Symbol.iterator;

     function v(e) {
       for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
       return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
     }
     var y = {
         isMounted: function() {
           return !1
         },
         enqueueForceUpdate: function() {},
         enqueueReplaceState: function() {},
         enqueueSetState: function() {}
       },
       b = {};

     function w(e, t, n) {
       this.props = e, this.context = t, this.refs = b, this.updater = n || y
     }

     function _() {}

     function E(e, t, n) {
       this.props = e, this.context = t, this.refs = b, this.updater = n || y
     }
     w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
       if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
       this.updater.enqueueSetState(this, e, t, "setState")
     }, w.prototype.forceUpdate = function(e) {
       this.updater.enqueueForceUpdate(this, e, "forceUpdate")
     }, _.prototype = w.prototype;
     var S = E.prototype = new _;
     S.constructor = E, r(S, w.prototype), S.isPureReactComponent = !0;
     var k = {
         current: null
       },
       x = {
         current: null
       },
       T = Object.prototype.hasOwnProperty,
       C = {
         key: !0,
         ref: !0,
         __self: !0,
         __source: !0
       };

     function O(e, t, n) {
       var r, o = {},
         a = null,
         u = null;
       if (null != t)
         for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (a = "" + t.key), t) T.call(t, r) && !C.hasOwnProperty(r) && (o[r] = t[r]);
       var s = arguments.length - 2;
       if (1 === s) o.children = n;
       else if (1 < s) {
         for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
         o.children = l
       }
       if (e && e.defaultProps)
         for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
       return {
         $$typeof: i,
         type: e,
         key: a,
         ref: u,
         props: o,
         _owner: x.current
       }
     }

     function I(e) {
       return "object" == typeof e && null !== e && e.$$typeof === i
     }
     var M = /\/+/g,
       A = [];

     function P(e, t, n, r) {
       if (A.length) {
         var o = A.pop();
         return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
       }
       return {
         result: e,
         keyPrefix: t,
         func: n,
         context: r,
         count: 0
       }
     }

     function N(e) {
       e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > A.length && A.push(e)
     }

     function j(e, t, n) {
       return null == e ? 0 : function e(t, n, r, o) {
         var u = typeof t;
         "undefined" !== u && "boolean" !== u || (t = null);
         var s = !1;
         if (null === t) s = !0;
         else switch (u) {
           case "string":
           case "number":
             s = !0;
             break;
           case "object":
             switch (t.$$typeof) {
               case i:
               case a:
                 s = !0
             }
         }
         if (s) return r(o, t, "" === n ? "." + D(t, 0) : n), 1;
         if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
           for (var l = 0; l < t.length; l++) {
             var c = n + D(u = t[l], l);
             s += e(u, c, r, o)
           } else if (null === t || "object" != typeof t ? c = null : c = "function" == typeof(c = g && t[g] || t["@@iterator"]) ? c : null, "function" == typeof c)
           for (t = c.call(t), l = 0; !(u = t.next()).done;) s += e(u = u.value, c = n + D(u, l++), r, o);
         else if ("object" === u) throw r = "" + t, Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
         return s
       }(e, "", t, n)
     }

     function D(e, t) {
       return "object" == typeof e && null !== e && null != e.key ? function(e) {
         var t = {
           "=": "=0",
           ":": "=2"
         };
         return "$" + ("" + e).replace(/[=:]/g, (function(e) {
           return t[e]
         }))
       }(e.key) : t.toString(36)
     }

     function R(e, t) {
       e.func.call(e.context, t, e.count++)
     }

     function L(e, t, n) {
       var r = e.result,
         o = e.keyPrefix;
       e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, r, n, (function(e) {
         return e
       })) : null != e && (I(e) && (e = function(e, t) {
         return {
           $$typeof: i,
           type: e.type,
           key: t,
           ref: e.ref,
           props: e.props,
           _owner: e._owner
         }
       }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(M, "$&/") + "/") + n)), r.push(e))
     }

     function z(e, t, n, r, o) {
       var i = "";
       null != n && (i = ("" + n).replace(M, "$&/") + "/"), j(e, L, t = P(t, i, r, o)), N(t)
     }

     function U() {
       var e = k.current;
       if (null === e) throw Error(v(321));
       return e
     }
     var B = {
         Children: {
           map: function(e, t, n) {
             if (null == e) return e;
             var r = [];
             return z(e, r, null, t, n), r
           },
           forEach: function(e, t, n) {
             if (null == e) return e;
             j(e, R, t = P(null, null, t, n)), N(t)
           },
           count: function(e) {
             return j(e, (function() {
               return null
             }), null)
           },
           toArray: function(e) {
             var t = [];
             return z(e, t, null, (function(e) {
               return e
             })), t
           },
           only: function(e) {
             if (!I(e)) throw Error(v(143));
             return e
           }
         },
         createRef: function() {
           return {
             current: null
           }
         },
         Component: w,
         PureComponent: E,
         createContext: function(e, t) {
           return void 0 === t && (t = null), (e = {
             $$typeof: f,
             _calculateChangedBits: t,
             _currentValue: e,
             _currentValue2: e,
             _threadCount: 0,
             Provider: null,
             Consumer: null
           }).Provider = {
             $$typeof: c,
             _context: e
           }, e.Consumer = e
         },
         forwardRef: function(e) {
           return {
             $$typeof: p,
             render: e
           }
         },
         lazy: function(e) {
           return {
             $$typeof: m,
             _ctor: e,
             _status: -1,
             _result: null
           }
         },
         memo: function(e, t) {
           return {
             $$typeof: h,
             type: e,
             compare: void 0 === t ? null : t
           }
         },
         useCallback: function(e, t) {
           return U().useCallback(e, t)
         },
         useContext: function(e, t) {
           return U().useContext(e, t)
         },
         useEffect: function(e, t) {
           return U().useEffect(e, t)
         },
         useImperativeHandle: function(e, t, n) {
           return U().useImperativeHandle(e, t, n)
         },
         useDebugValue: function() {},
         useLayoutEffect: function(e, t) {
           return U().useLayoutEffect(e, t)
         },
         useMemo: function(e, t) {
           return U().useMemo(e, t)
         },
         useReducer: function(e, t, n) {
           return U().useReducer(e, t, n)
         },
         useRef: function(e) {
           return U().useRef(e)
         },
         useState: function(e) {
           return U().useState(e)
         },
         Fragment: u,
         Profiler: l,
         StrictMode: s,
         Suspense: d,
         createElement: O,
         cloneElement: function(e, t, n) {
           if (null == e) throw Error(v(267, e));
           var o = r({}, e.props),
             a = e.key,
             u = e.ref,
             s = e._owner;
           if (null != t) {
             if (void 0 !== t.ref && (u = t.ref, s = x.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
             for (c in t) T.call(t, c) && !C.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
           }
           var c = arguments.length - 2;
           if (1 === c) o.children = n;
           else if (1 < c) {
             l = Array(c);
             for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
             o.children = l
           }
           return {
             $$typeof: i,
             type: e.type,
             key: a,
             ref: u,
             props: o,
             _owner: s
           }
         },
         createFactory: function(e) {
           var t = O.bind(null, e);
           return t.type = e, t
         },
         isValidElement: I,
         version: "16.12.0",
         __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
           ReactCurrentDispatcher: k,
           ReactCurrentBatchConfig: {
             suspense: null
           },
           ReactCurrentOwner: x,
           IsSomeRendererActing: {
             current: !1
           },
           assign: r
         }
       },
       F = {
         default: B
       },
       H = F && B || F;
     e.exports = H.default || H
   }, function(e, t, n) {
     "use strict";
     /** @license React v16.12.0
      * react-dom.production.min.js
      *
      * Copyright (c) Facebook, Inc. and its affiliates.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE file in the root directory of this source tree.
      */
     var r = n(0),
       o = n(28),
       i = n(45);

     function a(e) {
       for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
       return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
     }
     if (!r) throw Error(a(227));
     var u = null,
       s = {};

     function l() {
       if (u)
         for (var e in s) {
           var t = s[e],
             n = u.indexOf(e);
           if (!(-1 < n)) throw Error(a(96, e));
           if (!f[n]) {
             if (!t.extractEvents) throw Error(a(97, e));
             for (var r in f[n] = t, n = t.eventTypes) {
               var o = void 0,
                 i = n[r],
                 l = t,
                 d = r;
               if (p.hasOwnProperty(d)) throw Error(a(99, d));
               p[d] = i;
               var h = i.phasedRegistrationNames;
               if (h) {
                 for (o in h) h.hasOwnProperty(o) && c(h[o], l, d);
                 o = !0
               } else i.registrationName ? (c(i.registrationName, l, d), o = !0) : o = !1;
               if (!o) throw Error(a(98, r, e))
             }
           }
         }
     }

     function c(e, t, n) {
       if (d[e]) throw Error(a(100, e));
       d[e] = t, h[e] = t.eventTypes[n].dependencies
     }
     var f = [],
       p = {},
       d = {},
       h = {};

     function m(e, t, n, r, o, i, a, u, s) {
       var l = Array.prototype.slice.call(arguments, 3);
       try {
         t.apply(n, l)
       } catch (e) {
         this.onError(e)
       }
     }
     var g = !1,
       v = null,
       y = !1,
       b = null,
       w = {
         onError: function(e) {
           g = !0, v = e
         }
       };

     function _(e, t, n, r, o, i, a, u, s) {
       g = !1, v = null, m.apply(w, arguments)
     }
     var E = null,
       S = null,
       k = null;

     function x(e, t, n) {
       var r = e.type || "unknown-event";
       e.currentTarget = k(n),
         function(e, t, n, r, o, i, u, s, l) {
           if (_.apply(this, arguments), g) {
             if (!g) throw Error(a(198));
             var c = v;
             g = !1, v = null, y || (y = !0, b = c)
           }
         }(r, t, void 0, e), e.currentTarget = null
     }

     function T(e, t) {
       if (null == t) throw Error(a(30));
       return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
     }

     function C(e, t, n) {
       Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
     }
     var O = null;

     function I(e) {
       if (e) {
         var t = e._dispatchListeners,
           n = e._dispatchInstances;
         if (Array.isArray(t))
           for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) x(e, t[r], n[r]);
         else t && x(e, t, n);
         e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
       }
     }

     function M(e) {
       if (null !== e && (O = T(O, e)), e = O, O = null, e) {
         if (C(e, I), O) throw Error(a(95));
         if (y) throw e = b, y = !1, b = null, e
       }
     }
     var A = {
       injectEventPluginOrder: function(e) {
         if (u) throw Error(a(101));
         u = Array.prototype.slice.call(e), l()
       },
       injectEventPluginsByName: function(e) {
         var t, n = !1;
         for (t in e)
           if (e.hasOwnProperty(t)) {
             var r = e[t];
             if (!s.hasOwnProperty(t) || s[t] !== r) {
               if (s[t]) throw Error(a(102, t));
               s[t] = r, n = !0
             }
           } n && l()
       }
     };

     function P(e, t) {
       var n = e.stateNode;
       if (!n) return null;
       var r = E(n);
       if (!r) return null;
       n = r[t];
       e: switch (t) {
         case "onClick":
         case "onClickCapture":
         case "onDoubleClick":
         case "onDoubleClickCapture":
         case "onMouseDown":
         case "onMouseDownCapture":
         case "onMouseMove":
         case "onMouseMoveCapture":
         case "onMouseUp":
         case "onMouseUpCapture":
           (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
           break e;
         default:
           e = !1
       }
       if (e) return null;
       if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
       return n
     }
     var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
     N.hasOwnProperty("ReactCurrentDispatcher") || (N.ReactCurrentDispatcher = {
       current: null
     }), N.hasOwnProperty("ReactCurrentBatchConfig") || (N.ReactCurrentBatchConfig = {
       suspense: null
     });
     var j = /^(.*)[\\\/]/,
       D = "function" == typeof Symbol && Symbol.for,
       R = D ? Symbol.for("react.element") : 60103,
       L = D ? Symbol.for("react.portal") : 60106,
       z = D ? Symbol.for("react.fragment") : 60107,
       U = D ? Symbol.for("react.strict_mode") : 60108,
       B = D ? Symbol.for("react.profiler") : 60114,
       F = D ? Symbol.for("react.provider") : 60109,
       H = D ? Symbol.for("react.context") : 60110,
       G = D ? Symbol.for("react.concurrent_mode") : 60111,
       W = D ? Symbol.for("react.forward_ref") : 60112,
       V = D ? Symbol.for("react.suspense") : 60113,
       q = D ? Symbol.for("react.suspense_list") : 60120,
       Y = D ? Symbol.for("react.memo") : 60115,
       K = D ? Symbol.for("react.lazy") : 60116;
     D && Symbol.for("react.fundamental"), D && Symbol.for("react.responder"), D && Symbol.for("react.scope");
     var Q = "function" == typeof Symbol && Symbol.iterator;

     function Z(e) {
       return null === e || "object" != typeof e ? null : "function" == typeof(e = Q && e[Q] || e["@@iterator"]) ? e : null
     }

     function $(e) {
       if (null == e) return null;
       if ("function" == typeof e) return e.displayName || e.name || null;
       if ("string" == typeof e) return e;
       switch (e) {
         case z:
           return "Fragment";
         case L:
           return "Portal";
         case B:
           return "Profiler";
         case U:
           return "StrictMode";
         case V:
           return "Suspense";
         case q:
           return "SuspenseList"
       }
       if ("object" == typeof e) switch (e.$$typeof) {
         case H:
           return "Context.Consumer";
         case F:
           return "Context.Provider";
         case W:
           var t = e.render;
           return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
         case Y:
           return $(e.type);
         case K:
           if (e = 1 === e._status ? e._result : null) return $(e)
       }
       return null
     }

     function J(e) {
       var t = "";
       do {
         e: switch (e.tag) {
           case 3:
           case 4:
           case 6:
           case 7:
           case 10:
           case 9:
             var n = "";
             break e;
           default:
             var r = e._debugOwner,
               o = e._debugSource,
               i = $(e.type);
             n = null, r && (n = $(r.type)), r = i, i = "", o ? i = " (at " + o.fileName.replace(j, "") + ":" + o.lineNumber + ")" : n && (i = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + i
         }
         t += n,
           e = e.return
       } while (e);
       return t
     }
     var X = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
       ee = null,
       te = null,
       ne = null;

     function re(e) {
       if (e = S(e)) {
         if ("function" != typeof ee) throw Error(a(280));
         var t = E(e.stateNode);
         ee(e.stateNode, e.type, t)
       }
     }

     function oe(e) {
       te ? ne ? ne.push(e) : ne = [e] : te = e
     }

     function ie() {
       if (te) {
         var e = te,
           t = ne;
         if (ne = te = null, re(e), t)
           for (e = 0; e < t.length; e++) re(t[e])
       }
     }

     function ae(e, t) {
       return e(t)
     }

     function ue(e, t, n, r) {
       return e(t, n, r)
     }

     function se() {}
     var le = ae,
       ce = !1,
       fe = !1;

     function pe() {
       null === te && null === ne || (se(), ie())
     }
     new Map;
     var de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
       he = Object.prototype.hasOwnProperty,
       me = {},
       ge = {};

     function ve(e, t, n, r, o, i) {
       this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i
     }
     var ye = {};
     "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
       ye[e] = new ve(e, 0, !1, e, null, !1)
     })), [
       ["acceptCharset", "accept-charset"],
       ["className", "class"],
       ["htmlFor", "for"],
       ["httpEquiv", "http-equiv"]
     ].forEach((function(e) {
       var t = e[0];
       ye[t] = new ve(t, 1, !1, e[1], null, !1)
     })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
       ye[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1)
     })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
       ye[e] = new ve(e, 2, !1, e, null, !1)
     })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
       ye[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1)
     })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
       ye[e] = new ve(e, 3, !0, e, null, !1)
     })), ["capture", "download"].forEach((function(e) {
       ye[e] = new ve(e, 4, !1, e, null, !1)
     })), ["cols", "rows", "size", "span"].forEach((function(e) {
       ye[e] = new ve(e, 6, !1, e, null, !1)
     })), ["rowSpan", "start"].forEach((function(e) {
       ye[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1)
     }));
     var be = /[\-:]([a-z])/g;

     function we(e) {
       return e[1].toUpperCase()
     }

     function _e(e) {
       switch (typeof e) {
         case "boolean":
         case "number":
         case "object":
         case "string":
         case "undefined":
           return e;
         default:
           return ""
       }
     }

     function Ee(e, t, n, r) {
       var o = ye.hasOwnProperty(t) ? ye[t] : null;
       (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
         if (null == t || function(e, t, n, r) {
             if (null !== n && 0 === n.type) return !1;
             switch (typeof t) {
               case "function":
               case "symbol":
                 return !0;
               case "boolean":
                 return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
               default:
                 return !1
             }
           }(e, t, n, r)) return !0;
         if (r) return !1;
         if (null !== n) switch (n.type) {
           case 3:
             return !t;
           case 4:
             return !1 === t;
           case 5:
             return isNaN(t);
           case 6:
             return isNaN(t) || 1 > t
         }
         return !1
       }(t, n, o, r) && (n = null), r || null === o ? function(e) {
         return !!he.call(ge, e) || !he.call(me, e) && (de.test(e) ? ge[e] = !0 : (me[e] = !0, !1))
       }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
     }

     function Se(e) {
       var t = e.type;
       return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
     }

     function ke(e) {
       e._valueTracker || (e._valueTracker = function(e) {
         var t = Se(e) ? "checked" : "value",
           n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
           r = "" + e[t];
         if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
           var o = n.get,
             i = n.set;
           return Object.defineProperty(e, t, {
             configurable: !0,
             get: function() {
               return o.call(this)
             },
             set: function(e) {
               r = "" + e, i.call(this, e)
             }
           }), Object.defineProperty(e, t, {
             enumerable: n.enumerable
           }), {
             getValue: function() {
               return r
             },
             setValue: function(e) {
               r = "" + e
             },
             stopTracking: function() {
               e._valueTracker = null, delete e[t]
             }
           }
         }
       }(e))
     }

     function xe(e) {
       if (!e) return !1;
       var t = e._valueTracker;
       if (!t) return !0;
       var n = t.getValue(),
         r = "";
       return e && (r = Se(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
     }

     function Te(e, t) {
       var n = t.checked;
       return o({}, t, {
         defaultChecked: void 0,
         defaultValue: void 0,
         value: void 0,
         checked: null != n ? n : e._wrapperState.initialChecked
       })
     }

     function Ce(e, t) {
       var n = null == t.defaultValue ? "" : t.defaultValue,
         r = null != t.checked ? t.checked : t.defaultChecked;
       n = _e(null != t.value ? t.value : n), e._wrapperState = {
         initialChecked: r,
         initialValue: n,
         controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
       }
     }

     function Oe(e, t) {
       null != (t = t.checked) && Ee(e, "checked", t, !1)
     }

     function Ie(e, t) {
       Oe(e, t);
       var n = _e(t.value),
         r = t.type;
       if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
       else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
       t.hasOwnProperty("value") ? Ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ae(e, t.type, _e(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
     }

     function Me(e, t, n) {
       if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
         var r = t.type;
         if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
         t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
       }
       "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
     }

     function Ae(e, t, n) {
       "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
     }

     function Pe(e, t) {
       return e = o({
         children: void 0
       }, t), (t = function(e) {
         var t = "";
         return r.Children.forEach(e, (function(e) {
           null != e && (t += e)
         })), t
       }(t.children)) && (e.children = t), e
     }

     function Ne(e, t, n, r) {
       if (e = e.options, t) {
         t = {};
         for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
         for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
       } else {
         for (n = "" + _e(n), t = null, o = 0; o < e.length; o++) {
           if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
           null !== t || e[o].disabled || (t = e[o])
         }
         null !== t && (t.selected = !0)
       }
     }

     function je(e, t) {
       if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
       return o({}, t, {
         value: void 0,
         defaultValue: void 0,
         children: "" + e._wrapperState.initialValue
       })
     }

     function De(e, t) {
       var n = t.value;
       if (null == n) {
         if (n = t.defaultValue, null != (t = t.children)) {
           if (null != n) throw Error(a(92));
           if (Array.isArray(t)) {
             if (!(1 >= t.length)) throw Error(a(93));
             t = t[0]
           }
           n = t
         }
         null == n && (n = "")
       }
       e._wrapperState = {
         initialValue: _e(n)
       }
     }

     function Re(e, t) {
       var n = _e(t.value),
         r = _e(t.defaultValue);
       null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
     }

     function Le(e) {
       var t = e.textContent;
       t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
     }
     "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
       var t = e.replace(be, we);
       ye[t] = new ve(t, 1, !1, e, null, !1)
     })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
       var t = e.replace(be, we);
       ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
     })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
       var t = e.replace(be, we);
       ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
     })), ["tabIndex", "crossOrigin"].forEach((function(e) {
       ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1)
     })), ye.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
       ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0)
     }));
     var ze = "http://www.w3.org/1999/xhtml",
       Ue = "http://www.w3.org/2000/svg";

     function Be(e) {
       switch (e) {
         case "svg":
           return "http://www.w3.org/2000/svg";
         case "math":
           return "http://www.w3.org/1998/Math/MathML";
         default:
           return "http://www.w3.org/1999/xhtml"
       }
     }

     function Fe(e, t) {
       return null == e || "http://www.w3.org/1999/xhtml" === e ? Be(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
     }
     var He, Ge = function(e) {
       return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
         MSApp.execUnsafeLocalFunction((function() {
           return e(t, n)
         }))
       } : e
     }((function(e, t) {
       if (e.namespaceURI !== Ue || "innerHTML" in e) e.innerHTML = t;
       else {
         for ((He = He || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = He.firstChild; e.firstChild;) e.removeChild(e.firstChild);
         for (; t.firstChild;) e.appendChild(t.firstChild)
       }
     }));

     function We(e, t) {
       if (t) {
         var n = e.firstChild;
         if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
       }
       e.textContent = t
     }

     function Ve(e, t) {
       var n = {};
       return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
     }
     var qe = {
         animationend: Ve("Animation", "AnimationEnd"),
         animationiteration: Ve("Animation", "AnimationIteration"),
         animationstart: Ve("Animation", "AnimationStart"),
         transitionend: Ve("Transition", "TransitionEnd")
       },
       Ye = {},
       Ke = {};

     function Qe(e) {
       if (Ye[e]) return Ye[e];
       if (!qe[e]) return e;
       var t, n = qe[e];
       for (t in n)
         if (n.hasOwnProperty(t) && t in Ke) return Ye[e] = n[t];
       return e
     }
     X && (Ke = document.createElement("div").style, "AnimationEvent" in window || (delete qe.animationend.animation, delete qe.animationiteration.animation, delete qe.animationstart.animation), "TransitionEvent" in window || delete qe.transitionend.transition);
     var Ze = Qe("animationend"),
       $e = Qe("animationiteration"),
       Je = Qe("animationstart"),
       Xe = Qe("transitionend"),
       et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

     function tt(e) {
       var t = e,
         n = e;
       if (e.alternate)
         for (; t.return;) t = t.return;
       else {
         e = t;
         do {
           0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
         } while (e)
       }
       return 3 === t.tag ? n : null
     }

     function nt(e) {
       if (13 === e.tag) {
         var t = e.memoizedState;
         if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
       }
       return null
     }

     function rt(e) {
       if (tt(e) !== e) throw Error(a(188))
     }

     function ot(e) {
       if (!(e = function(e) {
           var t = e.alternate;
           if (!t) {
             if (null === (t = tt(e))) throw Error(a(188));
             return t !== e ? null : e
           }
           for (var n = e, r = t;;) {
             var o = n.return;
             if (null === o) break;
             var i = o.alternate;
             if (null === i) {
               if (null !== (r = o.return)) {
                 n = r;
                 continue
               }
               break
             }
             if (o.child === i.child) {
               for (i = o.child; i;) {
                 if (i === n) return rt(o), e;
                 if (i === r) return rt(o), t;
                 i = i.sibling
               }
               throw Error(a(188))
             }
             if (n.return !== r.return) n = o, r = i;
             else {
               for (var u = !1, s = o.child; s;) {
                 if (s === n) {
                   u = !0, n = o, r = i;
                   break
                 }
                 if (s === r) {
                   u = !0, r = o, n = i;
                   break
                 }
                 s = s.sibling
               }
               if (!u) {
                 for (s = i.child; s;) {
                   if (s === n) {
                     u = !0, n = i, r = o;
                     break
                   }
                   if (s === r) {
                     u = !0, r = i, n = o;
                     break
                   }
                   s = s.sibling
                 }
                 if (!u) throw Error(a(189))
               }
             }
             if (n.alternate !== r) throw Error(a(190))
           }
           if (3 !== n.tag) throw Error(a(188));
           return n.stateNode.current === n ? e : t
         }(e))) return null;
       for (var t = e;;) {
         if (5 === t.tag || 6 === t.tag) return t;
         if (t.child) t.child.return = t, t = t.child;
         else {
           if (t === e) break;
           for (; !t.sibling;) {
             if (!t.return || t.return === e) return null;
             t = t.return
           }
           t.sibling.return = t.return, t = t.sibling
         }
       }
       return null
     }
     var it, at, ut, st = !1,
       lt = [],
       ct = null,
       ft = null,
       pt = null,
       dt = new Map,
       ht = new Map,
       mt = [],
       gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
       vt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

     function yt(e, t, n, r) {
       return {
         blockedOn: e,
         topLevelType: t,
         eventSystemFlags: 32 | n,
         nativeEvent: r
       }
     }

     function bt(e, t) {
       switch (e) {
         case "focus":
         case "blur":
           ct = null;
           break;
         case "dragenter":
         case "dragleave":
           ft = null;
           break;
         case "mouseover":
         case "mouseout":
           pt = null;
           break;
         case "pointerover":
         case "pointerout":
           dt.delete(t.pointerId);
           break;
         case "gotpointercapture":
         case "lostpointercapture":
           ht.delete(t.pointerId)
       }
     }

     function wt(e, t, n, r, o) {
       return null === e || e.nativeEvent !== o ? (e = yt(t, n, r, o), null !== t && (null !== (t = lr(t)) && at(t)), e) : (e.eventSystemFlags |= r, e)
     }

     function _t(e) {
       var t = sr(e.target);
       if (null !== t) {
         var n = tt(t);
         if (null !== n)
           if (13 === (t = n.tag)) {
             if (null !== (t = nt(n))) return e.blockedOn = t, void i.unstable_runWithPriority(e.priority, (function() {
               ut(n)
             }))
           } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
       }
       e.blockedOn = null
     }

     function Et(e) {
       if (null !== e.blockedOn) return !1;
       var t = An(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
       if (null !== t) {
         var n = lr(t);
         return null !== n && at(n), e.blockedOn = t, !1
       }
       return !0
     }

     function St(e, t, n) {
       Et(e) && n.delete(t)
     }

     function kt() {
       for (st = !1; 0 < lt.length;) {
         var e = lt[0];
         if (null !== e.blockedOn) {
           null !== (e = lr(e.blockedOn)) && it(e);
           break
         }
         var t = An(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
         null !== t ? e.blockedOn = t : lt.shift()
       }
       null !== ct && Et(ct) && (ct = null), null !== ft && Et(ft) && (ft = null), null !== pt && Et(pt) && (pt = null), dt.forEach(St), ht.forEach(St)
     }

     function xt(e, t) {
       e.blockedOn === t && (e.blockedOn = null, st || (st = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, kt)))
     }

     function Tt(e) {
       function t(t) {
         return xt(t, e)
       }
       if (0 < lt.length) {
         xt(lt[0], e);
         for (var n = 1; n < lt.length; n++) {
           var r = lt[n];
           r.blockedOn === e && (r.blockedOn = null)
         }
       }
       for (null !== ct && xt(ct, e), null !== ft && xt(ft, e), null !== pt && xt(pt, e), dt.forEach(t), ht.forEach(t), n = 0; n < mt.length; n++)(r = mt[n]).blockedOn === e && (r.blockedOn = null);
       for (; 0 < mt.length && null === (n = mt[0]).blockedOn;) _t(n), null === n.blockedOn && mt.shift()
     }

     function Ct(e) {
       return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
     }

     function Ot(e) {
       do {
         e = e.return
       } while (e && 5 !== e.tag);
       return e || null
     }

     function It(e, t, n) {
       (t = P(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
     }

     function Mt(e) {
       if (e && e.dispatchConfig.phasedRegistrationNames) {
         for (var t = e._targetInst, n = []; t;) n.push(t), t = Ot(t);
         for (t = n.length; 0 < t--;) It(n[t], "captured", e);
         for (t = 0; t < n.length; t++) It(n[t], "bubbled", e)
       }
     }

     function At(e, t, n) {
       e && n && n.dispatchConfig.registrationName && (t = P(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
     }

     function Pt(e) {
       e && e.dispatchConfig.registrationName && At(e._targetInst, null, e)
     }

     function Nt(e) {
       C(e, Mt)
     }

     function jt() {
       return !0
     }

     function Dt() {
       return !1
     }

     function Rt(e, t, n, r) {
       for (var o in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = r : this[o] = n[o]);
       return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? jt : Dt, this.isPropagationStopped = Dt, this
     }

     function Lt(e, t, n, r) {
       if (this.eventPool.length) {
         var o = this.eventPool.pop();
         return this.call(o, e, t, n, r), o
       }
       return new this(e, t, n, r)
     }

     function zt(e) {
       if (!(e instanceof this)) throw Error(a(279));
       e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
     }

     function Ut(e) {
       e.eventPool = [], e.getPooled = Lt, e.release = zt
     }
     o(Rt.prototype, {
       preventDefault: function() {
         this.defaultPrevented = !0;
         var e = this.nativeEvent;
         e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = jt)
       },
       stopPropagation: function() {
         var e = this.nativeEvent;
         e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = jt)
       },
       persist: function() {
         this.isPersistent = jt
       },
       isPersistent: Dt,
       destructor: function() {
         var e, t = this.constructor.Interface;
         for (e in t) this[e] = null;
         this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Dt, this._dispatchInstances = this._dispatchListeners = null
       }
     }), Rt.Interface = {
       type: null,
       target: null,
       currentTarget: function() {
         return null
       },
       eventPhase: null,
       bubbles: null,
       cancelable: null,
       timeStamp: function(e) {
         return e.timeStamp || Date.now()
       },
       defaultPrevented: null,
       isTrusted: null
     }, Rt.extend = function(e) {
       function t() {}

       function n() {
         return r.apply(this, arguments)
       }
       var r = this;
       t.prototype = r.prototype;
       var i = new t;
       return o(i, n.prototype), n.prototype = i, n.prototype.constructor = n, n.Interface = o({}, r.Interface, e), n.extend = r.extend, Ut(n), n
     }, Ut(Rt);
     var Bt = Rt.extend({
         animationName: null,
         elapsedTime: null,
         pseudoElement: null
       }),
       Ft = Rt.extend({
         clipboardData: function(e) {
           return "clipboardData" in e ? e.clipboardData : window.clipboardData
         }
       }),
       Ht = Rt.extend({
         view: null,
         detail: null
       }),
       Gt = Ht.extend({
         relatedTarget: null
       });

     function Wt(e) {
       var t = e.keyCode;
       return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
     }
     var Vt = {
         Esc: "Escape",
         Spacebar: " ",
         Left: "ArrowLeft",
         Up: "ArrowUp",
         Right: "ArrowRight",
         Down: "ArrowDown",
         Del: "Delete",
         Win: "OS",
         Menu: "ContextMenu",
         Apps: "ContextMenu",
         Scroll: "ScrollLock",
         MozPrintableKey: "Unidentified"
       },
       qt = {
         8: "Backspace",
         9: "Tab",
         12: "Clear",
         13: "Enter",
         16: "Shift",
         17: "Control",
         18: "Alt",
         19: "Pause",
         20: "CapsLock",
         27: "Escape",
         32: " ",
         33: "PageUp",
         34: "PageDown",
         35: "End",
         36: "Home",
         37: "ArrowLeft",
         38: "ArrowUp",
         39: "ArrowRight",
         40: "ArrowDown",
         45: "Insert",
         46: "Delete",
         112: "F1",
         113: "F2",
         114: "F3",
         115: "F4",
         116: "F5",
         117: "F6",
         118: "F7",
         119: "F8",
         120: "F9",
         121: "F10",
         122: "F11",
         123: "F12",
         144: "NumLock",
         145: "ScrollLock",
         224: "Meta"
       },
       Yt = {
         Alt: "altKey",
         Control: "ctrlKey",
         Meta: "metaKey",
         Shift: "shiftKey"
       };

     function Kt(e) {
       var t = this.nativeEvent;
       return t.getModifierState ? t.getModifierState(e) : !!(e = Yt[e]) && !!t[e]
     }

     function Qt() {
       return Kt
     }
     for (var Zt = Ht.extend({
       key: function(e) {
         if (e.key) {
           var t = Vt[e.key] || e.key;
           if ("Unidentified" !== t) return t
         }
         return "keypress" === e.type ? 13 === (e = Wt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? qt[e.keyCode] || "Unidentified" : ""
       },
       location: null,
       ctrlKey: null,
       shiftKey: null,
       altKey: null,
       metaKey: null,
       repeat: null,
       locale: null,
       getModifierState: Qt,
       charCode: function(e) {
         return "keypress" === e.type ? Wt(e) : 0
       },
       keyCode: function(e) {
         return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
       },
       which: function(e) {
         return "keypress" === e.type ? Wt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
       }
     }), $t = 0, Jt = 0, Xt = !1, en = !1, tn = Ht.extend({
       screenX: null,
       screenY: null,
       clientX: null,
       clientY: null,
       pageX: null,
       pageY: null,
       ctrlKey: null,
       shiftKey: null,
       altKey: null,
       metaKey: null,
       getModifierState: Qt,
       button: null,
       buttons: null,
       relatedTarget: function(e) {
         return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
       },
       movementX: function(e) {
         if ("movementX" in e) return e.movementX;
         var t = $t;
         return $t = e.screenX, Xt ? "mousemove" === e.type ? e.screenX - t : 0 : (Xt = !0, 0)
       },
       movementY: function(e) {
         if ("movementY" in e) return e.movementY;
         var t = Jt;
         return Jt = e.screenY, en ? "mousemove" === e.type ? e.screenY - t : 0 : (en = !0, 0)
       }
     }), nn = tn.extend({
       pointerId: null,
       width: null,
       height: null,
       pressure: null,
       tangentialPressure: null,
       tiltX: null,
       tiltY: null,
       twist: null,
       pointerType: null,
       isPrimary: null
     }), rn = tn.extend({
       dataTransfer: null
     }), on = Ht.extend({
       touches: null,
       targetTouches: null,
       changedTouches: null,
       altKey: null,
       metaKey: null,
       ctrlKey: null,
       shiftKey: null,
       getModifierState: Qt
     }), an = Rt.extend({
       propertyName: null,
       elapsedTime: null,
       pseudoElement: null
     }), un = tn.extend({
       deltaX: function(e) {
         return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
       },
       deltaY: function(e) {
         return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
       },
       deltaZ: null,
       deltaMode: null
     }), sn = [
       ["blur", "blur", 0],
       ["cancel", "cancel", 0],
       ["click", "click", 0],
       ["close", "close", 0],
       ["contextmenu", "contextMenu", 0],
       ["copy", "copy", 0],
       ["cut", "cut", 0],
       ["auxclick", "auxClick", 0],
       ["dblclick", "doubleClick", 0],
       ["dragend", "dragEnd", 0],
       ["dragstart", "dragStart", 0],
       ["drop", "drop", 0],
       ["focus", "focus", 0],
       ["input", "input", 0],
       ["invalid", "invalid", 0],
       ["keydown", "keyDown", 0],
       ["keypress", "keyPress", 0],
       ["keyup", "keyUp", 0],
       ["mousedown", "mouseDown", 0],
       ["mouseup", "mouseUp", 0],
       ["paste", "paste", 0],
       ["pause", "pause", 0],
       ["play", "play", 0],
       ["pointercancel", "pointerCancel", 0],
       ["pointerdown", "pointerDown", 0],
       ["pointerup", "pointerUp", 0],
       ["ratechange", "rateChange", 0],
       ["reset", "reset", 0],
       ["seeked", "seeked", 0],
       ["submit", "submit", 0],
       ["touchcancel", "touchCancel", 0],
       ["touchend", "touchEnd", 0],
       ["touchstart", "touchStart", 0],
       ["volumechange", "volumeChange", 0],
       ["drag", "drag", 1],
       ["dragenter", "dragEnter", 1],
       ["dragexit", "dragExit", 1],
       ["dragleave", "dragLeave", 1],
       ["dragover", "dragOver", 1],
       ["mousemove", "mouseMove", 1],
       ["mouseout", "mouseOut", 1],
       ["mouseover", "mouseOver", 1],
       ["pointermove", "pointerMove", 1],
       ["pointerout", "pointerOut", 1],
       ["pointerover", "pointerOver", 1],
       ["scroll", "scroll", 1],
       ["toggle", "toggle", 1],
       ["touchmove", "touchMove", 1],
       ["wheel", "wheel", 1],
       ["abort", "abort", 2],
       [Ze, "animationEnd", 2],
       [$e, "animationIteration", 2],
       [Je, "animationStart", 2],
       ["canplay", "canPlay", 2],
       ["canplaythrough", "canPlayThrough", 2],
       ["durationchange", "durationChange", 2],
       ["emptied", "emptied", 2],
       ["encrypted", "encrypted", 2],
       ["ended", "ended", 2],
       ["error", "error", 2],
       ["gotpointercapture", "gotPointerCapture", 2],
       ["load", "load", 2],
       ["loadeddata", "loadedData", 2],
       ["loadedmetadata", "loadedMetadata", 2],
       ["loadstart", "loadStart", 2],
       ["lostpointercapture", "lostPointerCapture", 2],
       ["playing", "playing", 2],
       ["progress", "progress", 2],
       ["seeking", "seeking", 2],
       ["stalled", "stalled", 2],
       ["suspend", "suspend", 2],
       ["timeupdate", "timeUpdate", 2],
       [Xe, "transitionEnd", 2],
       ["waiting", "waiting", 2]
     ], ln = {}, cn = {}, fn = 0; fn < sn.length; fn++) {
       var pn = sn[fn],
         dn = pn[0],
         hn = pn[1],
         mn = pn[2],
         gn = "on" + (hn[0].toUpperCase() + hn.slice(1)),
         vn = {
           phasedRegistrationNames: {
             bubbled: gn,
             captured: gn + "Capture"
           },
           dependencies: [dn],
           eventPriority: mn
         };
       ln[hn] = vn, cn[dn] = vn
     }
     var yn = {
         eventTypes: ln,
         getEventPriority: function(e) {
           return void 0 !== (e = cn[e]) ? e.eventPriority : 2
         },
         extractEvents: function(e, t, n, r) {
           var o = cn[e];
           if (!o) return null;
           switch (e) {
             case "keypress":
               if (0 === Wt(n)) return null;
             case "keydown":
             case "keyup":
               e = Zt;
               break;
             case "blur":
             case "focus":
               e = Gt;
               break;
             case "click":
               if (2 === n.button) return null;
             case "auxclick":
             case "dblclick":
             case "mousedown":
             case "mousemove":
             case "mouseup":
             case "mouseout":
             case "mouseover":
             case "contextmenu":
               e = tn;
               break;
             case "drag":
             case "dragend":
             case "dragenter":
             case "dragexit":
             case "dragleave":
             case "dragover":
             case "dragstart":
             case "drop":
               e = rn;
               break;
             case "touchcancel":
             case "touchend":
             case "touchmove":
             case "touchstart":
               e = on;
               break;
             case Ze:
             case $e:
             case Je:
               e = Bt;
               break;
             case Xe:
               e = an;
               break;
             case "scroll":
               e = Ht;
               break;
             case "wheel":
               e = un;
               break;
             case "copy":
             case "cut":
             case "paste":
               e = Ft;
               break;
             case "gotpointercapture":
             case "lostpointercapture":
             case "pointercancel":
             case "pointerdown":
             case "pointermove":
             case "pointerout":
             case "pointerover":
             case "pointerup":
               e = nn;
               break;
             default:
               e = Rt
           }
           return Nt(t = e.getPooled(o, t, n, r)), t
         }
       },
       bn = i.unstable_UserBlockingPriority,
       wn = i.unstable_runWithPriority,
       _n = yn.getEventPriority,
       En = [];

     function Sn(e) {
       var t = e.targetInst,
         n = t;
       do {
         if (!n) {
           e.ancestors.push(n);
           break
         }
         var r = n;
         if (3 === r.tag) r = r.stateNode.containerInfo;
         else {
           for (; r.return;) r = r.return;
           r = 3 !== r.tag ? null : r.stateNode.containerInfo
         }
         if (!r) break;
         5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = sr(r)
       } while (n);
       for (n = 0; n < e.ancestors.length; n++) {
         t = e.ancestors[n];
         var o = Ct(e.nativeEvent);
         r = e.topLevelType;
         for (var i = e.nativeEvent, a = e.eventSystemFlags, u = null, s = 0; s < f.length; s++) {
           var l = f[s];
           l && (l = l.extractEvents(r, t, i, o, a)) && (u = T(u, l))
         }
         M(u)
       }
     }
     var kn = !0;

     function xn(e, t) {
       Tn(t, e, !1)
     }

     function Tn(e, t, n) {
       switch (_n(t)) {
         case 0:
           var r = Cn.bind(null, t, 1);
           break;
         case 1:
           r = On.bind(null, t, 1);
           break;
         default:
           r = Mn.bind(null, t, 1)
       }
       n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
     }

     function Cn(e, t, n) {
       ce || se();
       var r = Mn,
         o = ce;
       ce = !0;
       try {
         ue(r, e, t, n)
       } finally {
         (ce = o) || pe()
       }
     }

     function On(e, t, n) {
       wn(bn, Mn.bind(null, e, t, n))
     }

     function In(e, t, n, r) {
       if (En.length) {
         var o = En.pop();
         o.topLevelType = e, o.eventSystemFlags = t, o.nativeEvent = n, o.targetInst = r, e = o
       } else e = {
         topLevelType: e,
         eventSystemFlags: t,
         nativeEvent: n,
         targetInst: r,
         ancestors: []
       };
       try {
         if (t = Sn, n = e, fe) t(n, void 0);
         else {
           fe = !0;
           try {
             le(t, n, void 0)
           } finally {
             fe = !1, pe()
           }
         }
       } finally {
         e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, En.length < 10 && En.push(e)
       }
     }

     function Mn(e, t, n) {
       if (kn)
         if (0 < lt.length && -1 < gt.indexOf(e)) e = yt(null, e, t, n), lt.push(e);
         else {
           var r = An(e, t, n);
           null === r ? bt(e, n) : -1 < gt.indexOf(e) ? (e = yt(r, e, t, n), lt.push(e)) : function(e, t, n, r) {
             switch (t) {
               case "focus":
                 return ct = wt(ct, e, t, n, r), !0;
               case "dragenter":
                 return ft = wt(ft, e, t, n, r), !0;
               case "mouseover":
                 return pt = wt(pt, e, t, n, r), !0;
               case "pointerover":
                 var o = r.pointerId;
                 return dt.set(o, wt(dt.get(o) || null, e, t, n, r)), !0;
               case "gotpointercapture":
                 return o = r.pointerId, ht.set(o, wt(ht.get(o) || null, e, t, n, r)), !0
             }
             return !1
           }(r, e, t, n) || (bt(e, n), In(e, t, n, null))
         }
     }

     function An(e, t, n) {
       var r = Ct(n);
       if (null !== (r = sr(r))) {
         var o = tt(r);
         if (null === o) r = null;
         else {
           var i = o.tag;
           if (13 === i) {
             if (null !== (r = nt(o))) return r;
             r = null
           } else if (3 === i) {
             if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
             r = null
           } else o !== r && (r = null)
         }
       }
       return In(e, t, n, r), null
     }

     function Pn(e) {
       if (!X) return !1;
       var t = (e = "on" + e) in document;
       return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
     }
     var Nn = new("function" == typeof WeakMap ? WeakMap : Map);

     function jn(e) {
       var t = Nn.get(e);
       return void 0 === t && (t = new Set, Nn.set(e, t)), t
     }

     function Dn(e, t, n) {
       if (!n.has(e)) {
         switch (e) {
           case "scroll":
             Tn(t, "scroll", !0);
             break;
           case "focus":
           case "blur":
             Tn(t, "focus", !0), Tn(t, "blur", !0), n.add("blur"), n.add("focus");
             break;
           case "cancel":
           case "close":
             Pn(e) && Tn(t, e, !0);
             break;
           case "invalid":
           case "submit":
           case "reset":
             break;
           default:
             -1 === et.indexOf(e) && xn(e, t)
         }
         n.add(e)
       }
     }
     var Rn = {
         animationIterationCount: !0,
         borderImageOutset: !0,
         borderImageSlice: !0,
         borderImageWidth: !0,
         boxFlex: !0,
         boxFlexGroup: !0,
         boxOrdinalGroup: !0,
         columnCount: !0,
         columns: !0,
         flex: !0,
         flexGrow: !0,
         flexPositive: !0,
         flexShrink: !0,
         flexNegative: !0,
         flexOrder: !0,
         gridArea: !0,
         gridRow: !0,
         gridRowEnd: !0,
         gridRowSpan: !0,
         gridRowStart: !0,
         gridColumn: !0,
         gridColumnEnd: !0,
         gridColumnSpan: !0,
         gridColumnStart: !0,
         fontWeight: !0,
         lineClamp: !0,
         lineHeight: !0,
         opacity: !0,
         order: !0,
         orphans: !0,
         tabSize: !0,
         widows: !0,
         zIndex: !0,
         zoom: !0,
         fillOpacity: !0,
         floodOpacity: !0,
         stopOpacity: !0,
         strokeDasharray: !0,
         strokeDashoffset: !0,
         strokeMiterlimit: !0,
         strokeOpacity: !0,
         strokeWidth: !0
       },
       Ln = ["Webkit", "ms", "Moz", "O"];

     function zn(e, t, n) {
       return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px"
     }

     function Un(e, t) {
       for (var n in e = e.style, t)
         if (t.hasOwnProperty(n)) {
           var r = 0 === n.indexOf("--"),
             o = zn(n, t[n], r);
           "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
         }
     }
     Object.keys(Rn).forEach((function(e) {
       Ln.forEach((function(t) {
         t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e]
       }))
     }));
     var Bn = o({
       menuitem: !0
     }, {
       area: !0,
       base: !0,
       br: !0,
       col: !0,
       embed: !0,
       hr: !0,
       img: !0,
       input: !0,
       keygen: !0,
       link: !0,
       meta: !0,
       param: !0,
       source: !0,
       track: !0,
       wbr: !0
     });

     function Fn(e, t) {
       if (t) {
         if (Bn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e, ""));
         if (null != t.dangerouslySetInnerHTML) {
           if (null != t.children) throw Error(a(60));
           if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
         }
         if (null != t.style && "object" != typeof t.style) throw Error(a(62, ""))
       }
     }

     function Hn(e, t) {
       if (-1 === e.indexOf("-")) return "string" == typeof t.is;
       switch (e) {
         case "annotation-xml":
         case "color-profile":
         case "font-face":
         case "font-face-src":
         case "font-face-uri":
         case "font-face-format":
         case "font-face-name":
         case "missing-glyph":
           return !1;
         default:
           return !0
       }
     }

     function Gn(e, t) {
       var n = jn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
       t = h[t];
       for (var r = 0; r < t.length; r++) Dn(t[r], e, n)
     }

     function Wn() {}

     function Vn(e) {
       if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
       try {
         return e.activeElement || e.body
       } catch (t) {
         return e.body
       }
     }

     function qn(e) {
       for (; e && e.firstChild;) e = e.firstChild;
       return e
     }

     function Yn(e, t) {
       var n, r = qn(e);
       for (e = 0; r;) {
         if (3 === r.nodeType) {
           if (n = e + r.textContent.length, e <= t && n >= t) return {
             node: r,
             offset: t - e
           };
           e = n
         }
         e: {
           for (; r;) {
             if (r.nextSibling) {
               r = r.nextSibling;
               break e
             }
             r = r.parentNode
           }
           r = void 0
         }
         r = qn(r)
       }
     }

     function Kn() {
       for (var e = window, t = Vn(); t instanceof e.HTMLIFrameElement;) {
         try {
           var n = "string" == typeof t.contentWindow.location.href
         } catch (e) {
           n = !1
         }
         if (!n) break;
         t = Vn((e = t.contentWindow).document)
       }
       return t
     }

     function Qn(e) {
       var t = e && e.nodeName && e.nodeName.toLowerCase();
       return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
     }
     var Zn = null,
       $n = null;

     function Jn(e, t) {
       switch (e) {
         case "button":
         case "input":
         case "select":
         case "textarea":
           return !!t.autoFocus
       }
       return !1
     }

     function Xn(e, t) {
       return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
     }
     var er = "function" == typeof setTimeout ? setTimeout : void 0,
       tr = "function" == typeof clearTimeout ? clearTimeout : void 0;

     function nr(e) {
       for (; null != e; e = e.nextSibling) {
         var t = e.nodeType;
         if (1 === t || 3 === t) break
       }
       return e
     }

     function rr(e) {
       e = e.previousSibling;
       for (var t = 0; e;) {
         if (8 === e.nodeType) {
           var n = e.data;
           if ("$" === n || "$!" === n || "$?" === n) {
             if (0 === t) return e;
             t--
           } else "/$" === n && t++
         }
         e = e.previousSibling
       }
       return null
     }
     var or = Math.random().toString(36).slice(2),
       ir = "__reactInternalInstance$" + or,
       ar = "__reactEventHandlers$" + or,
       ur = "__reactContainere$" + or;

     function sr(e) {
       var t = e[ir];
       if (t) return t;
       for (var n = e.parentNode; n;) {
         if (t = n[ur] || n[ir]) {
           if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
             for (e = rr(e); null !== e;) {
               if (n = e[ir]) return n;
               e = rr(e)
             }
           return t
         }
         n = (e = n).parentNode
       }
       return null
     }

     function lr(e) {
       return !(e = e[ir] || e[ur]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
     }

     function cr(e) {
       if (5 === e.tag || 6 === e.tag) return e.stateNode;
       throw Error(a(33))
     }

     function fr(e) {
       return e[ar] || null
     }
     var pr = null,
       dr = null,
       hr = null;

     function mr() {
       if (hr) return hr;
       var e, t, n = dr,
         r = n.length,
         o = "value" in pr ? pr.value : pr.textContent,
         i = o.length;
       for (e = 0; e < r && n[e] === o[e]; e++);
       var a = r - e;
       for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
       return hr = o.slice(e, 1 < t ? 1 - t : void 0)
     }
     var gr = Rt.extend({
         data: null
       }),
       vr = Rt.extend({
         data: null
       }),
       yr = [9, 13, 27, 32],
       br = X && "CompositionEvent" in window,
       wr = null;
     X && "documentMode" in document && (wr = document.documentMode);
     var _r = X && "TextEvent" in window && !wr,
       Er = X && (!br || wr && 8 < wr && 11 >= wr),
       Sr = String.fromCharCode(32),
       kr = {
         beforeInput: {
           phasedRegistrationNames: {
             bubbled: "onBeforeInput",
             captured: "onBeforeInputCapture"
           },
           dependencies: ["compositionend", "keypress", "textInput", "paste"]
         },
         compositionEnd: {
           phasedRegistrationNames: {
             bubbled: "onCompositionEnd",
             captured: "onCompositionEndCapture"
           },
           dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
         },
         compositionStart: {
           phasedRegistrationNames: {
             bubbled: "onCompositionStart",
             captured: "onCompositionStartCapture"
           },
           dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
         },
         compositionUpdate: {
           phasedRegistrationNames: {
             bubbled: "onCompositionUpdate",
             captured: "onCompositionUpdateCapture"
           },
           dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
         }
       },
       xr = !1;

     function Tr(e, t) {
       switch (e) {
         case "keyup":
           return -1 !== yr.indexOf(t.keyCode);
         case "keydown":
           return 229 !== t.keyCode;
         case "keypress":
         case "mousedown":
         case "blur":
           return !0;
         default:
           return !1
       }
     }

     function Cr(e) {
       return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
     }
     var Or = !1;
     var Ir = {
         eventTypes: kr,
         extractEvents: function(e, t, n, r) {
           var o;
           if (br) e: {
             switch (e) {
               case "compositionstart":
                 var i = kr.compositionStart;
                 break e;
               case "compositionend":
                 i = kr.compositionEnd;
                 break e;
               case "compositionupdate":
                 i = kr.compositionUpdate;
                 break e
             }
             i = void 0
           }
           else Or ? Tr(e, n) && (i = kr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = kr.compositionStart);
           return i ? (Er && "ko" !== n.locale && (Or || i !== kr.compositionStart ? i === kr.compositionEnd && Or && (o = mr()) : (dr = "value" in (pr = r) ? pr.value : pr.textContent, Or = !0)), i = gr.getPooled(i, t, n, r), o ? i.data = o : null !== (o = Cr(n)) && (i.data = o), Nt(i), o = i) : o = null, (e = _r ? function(e, t) {
             switch (e) {
               case "compositionend":
                 return Cr(t);
               case "keypress":
                 return 32 !== t.which ? null : (xr = !0, Sr);
               case "textInput":
                 return (e = t.data) === Sr && xr ? null : e;
               default:
                 return null
             }
           }(e, n) : function(e, t) {
             if (Or) return "compositionend" === e || !br && Tr(e, t) ? (e = mr(), hr = dr = pr = null, Or = !1, e) : null;
             switch (e) {
               case "paste":
                 return null;
               case "keypress":
                 if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                   if (t.char && 1 < t.char.length) return t.char;
                   if (t.which) return String.fromCharCode(t.which)
                 }
                 return null;
               case "compositionend":
                 return Er && "ko" !== t.locale ? null : t.data;
               default:
                 return null
             }
           }(e, n)) ? ((t = vr.getPooled(kr.beforeInput, t, n, r)).data = e, Nt(t)) : t = null, null === o ? t : null === t ? o : [o, t]
         }
       },
       Mr = {
         color: !0,
         date: !0,
         datetime: !0,
         "datetime-local": !0,
         email: !0,
         month: !0,
         number: !0,
         password: !0,
         range: !0,
         search: !0,
         tel: !0,
         text: !0,
         time: !0,
         url: !0,
         week: !0
       };

     function Ar(e) {
       var t = e && e.nodeName && e.nodeName.toLowerCase();
       return "input" === t ? !!Mr[e.type] : "textarea" === t
     }
     var Pr = {
       change: {
         phasedRegistrationNames: {
           bubbled: "onChange",
           captured: "onChangeCapture"
         },
         dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
       }
     };

     function Nr(e, t, n) {
       return (e = Rt.getPooled(Pr.change, e, t, n)).type = "change", oe(n), Nt(e), e
     }
     var jr = null,
       Dr = null;

     function Rr(e) {
       M(e)
     }

     function Lr(e) {
       if (xe(cr(e))) return e
     }

     function zr(e, t) {
       if ("change" === e) return t
     }
     var Ur = !1;

     function Br() {
       jr && (jr.detachEvent("onpropertychange", Fr), Dr = jr = null)
     }

     function Fr(e) {
       if ("value" === e.propertyName && Lr(Dr))
         if (e = Nr(Dr, e, Ct(e)), ce) M(e);
         else {
           ce = !0;
           try {
             ae(Rr, e)
           } finally {
             ce = !1, pe()
           }
         }
     }

     function Hr(e, t, n) {
       "focus" === e ? (Br(), Dr = n, (jr = t).attachEvent("onpropertychange", Fr)) : "blur" === e && Br()
     }

     function Gr(e) {
       if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Lr(Dr)
     }

     function Wr(e, t) {
       if ("click" === e) return Lr(t)
     }

     function Vr(e, t) {
       if ("input" === e || "change" === e) return Lr(t)
     }
     X && (Ur = Pn("input") && (!document.documentMode || 9 < document.documentMode));
     var qr, Yr = {
         eventTypes: Pr,
         _isInputEventSupported: Ur,
         extractEvents: function(e, t, n, r) {
           var o = t ? cr(t) : window,
             i = o.nodeName && o.nodeName.toLowerCase();
           if ("select" === i || "input" === i && "file" === o.type) var a = zr;
           else if (Ar(o))
             if (Ur) a = Vr;
             else {
               a = Gr;
               var u = Hr
             }
           else(i = o.nodeName) && "input" === i.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (a = Wr);
           if (a && (a = a(e, t))) return Nr(a, n, r);
           u && u(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && Ae(o, "number", o.value)
         }
       },
       Kr = {
         mouseEnter: {
           registrationName: "onMouseEnter",
           dependencies: ["mouseout", "mouseover"]
         },
         mouseLeave: {
           registrationName: "onMouseLeave",
           dependencies: ["mouseout", "mouseover"]
         },
         pointerEnter: {
           registrationName: "onPointerEnter",
           dependencies: ["pointerout", "pointerover"]
         },
         pointerLeave: {
           registrationName: "onPointerLeave",
           dependencies: ["pointerout", "pointerover"]
         }
       },
       Qr = {
         eventTypes: Kr,
         extractEvents: function(e, t, n, r, o) {
           var i = "mouseover" === e || "pointerover" === e,
             a = "mouseout" === e || "pointerout" === e;
           if (i && 0 == (32 & o) && (n.relatedTarget || n.fromElement) || !a && !i) return null;
           if (o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window, a ? (a = t, null !== (t = (t = n.relatedTarget || n.toElement) ? sr(t) : null) && (t !== (i = tt(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null, a === t) return null;
           if ("mouseout" === e || "mouseover" === e) var u = tn,
             s = Kr.mouseLeave,
             l = Kr.mouseEnter,
             c = "mouse";
           else "pointerout" !== e && "pointerover" !== e || (u = nn, s = Kr.pointerLeave, l = Kr.pointerEnter, c = "pointer");
           if (e = null == a ? o : cr(a), o = null == t ? o : cr(t), (s = u.getPooled(s, a, n, r)).type = c + "leave", s.target = e, s.relatedTarget = o, (r = u.getPooled(l, t, n, r)).type = c + "enter", r.target = o, r.relatedTarget = e, c = t, (u = a) && c) e: {
             for (e = c, a = 0, t = l = u; t; t = Ot(t)) a++;
             for (t = 0, o = e; o; o = Ot(o)) t++;
             for (; 0 < a - t;) l = Ot(l),
               a--;
             for (; 0 < t - a;) e = Ot(e),
               t--;
             for (; a--;) {
               if (l === e || l === e.alternate) break e;
               l = Ot(l), e = Ot(e)
             }
             l = null
           }
           else l = null;
           for (e = l, l = []; u && u !== e && (null === (a = u.alternate) || a !== e);) l.push(u), u = Ot(u);
           for (u = []; c && c !== e && (null === (a = c.alternate) || a !== e);) u.push(c), c = Ot(c);
           for (c = 0; c < l.length; c++) At(l[c], "bubbled", s);
           for (c = u.length; 0 < c--;) At(u[c], "captured", r);
           return n === qr ? (qr = null, [s]) : (qr = n, [s, r])
         }
       };
     var Zr = "function" == typeof Object.is ? Object.is : function(e, t) {
         return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
       },
       $r = Object.prototype.hasOwnProperty;

     function Jr(e, t) {
       if (Zr(e, t)) return !0;
       if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
       var n = Object.keys(e),
         r = Object.keys(t);
       if (n.length !== r.length) return !1;
       for (r = 0; r < n.length; r++)
         if (!$r.call(t, n[r]) || !Zr(e[n[r]], t[n[r]])) return !1;
       return !0
     }
     var Xr = X && "documentMode" in document && 11 >= document.documentMode,
       eo = {
         select: {
           phasedRegistrationNames: {
             bubbled: "onSelect",
             captured: "onSelectCapture"
           },
           dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
         }
       },
       to = null,
       no = null,
       ro = null,
       oo = !1;

     function io(e, t) {
       var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
       return oo || null == to || to !== Vn(n) ? null : ("selectionStart" in (n = to) && Qn(n) ? n = {
         start: n.selectionStart,
         end: n.selectionEnd
       } : n = {
         anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
         anchorOffset: n.anchorOffset,
         focusNode: n.focusNode,
         focusOffset: n.focusOffset
       }, ro && Jr(ro, n) ? null : (ro = n, (e = Rt.getPooled(eo.select, no, e, t)).type = "select", e.target = to, Nt(e), e))
     }
     var ao = {
       eventTypes: eo,
       extractEvents: function(e, t, n, r) {
         var o, i = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
         if (!(o = !i)) {
           e: {
             i = jn(i),
               o = h.onSelect;
             for (var a = 0; a < o.length; a++)
               if (!i.has(o[a])) {
                 i = !1;
                 break e
               } i = !0
           }
           o = !i
         }
         if (o) return null;
         switch (i = t ? cr(t) : window, e) {
           case "focus":
             (Ar(i) || "true" === i.contentEditable) && (to = i, no = t, ro = null);
             break;
           case "blur":
             ro = no = to = null;
             break;
           case "mousedown":
             oo = !0;
             break;
           case "contextmenu":
           case "mouseup":
           case "dragend":
             return oo = !1, io(n, r);
           case "selectionchange":
             if (Xr) break;
           case "keydown":
           case "keyup":
             return io(n, r)
         }
         return null
       }
     };
     A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), E = fr, S = lr, k = cr, A.injectEventPluginsByName({
       SimpleEventPlugin: yn,
       EnterLeaveEventPlugin: Qr,
       ChangeEventPlugin: Yr,
       SelectEventPlugin: ao,
       BeforeInputEventPlugin: Ir
     }), new Set;
     var uo = [],
       so = -1;

     function lo(e) {
       0 > so || (e.current = uo[so], uo[so] = null, so--)
     }

     function co(e, t) {
       so++, uo[so] = e.current, e.current = t
     }
     var fo = {},
       po = {
         current: fo
       },
       ho = {
         current: !1
       },
       mo = fo;

     function go(e, t) {
       var n = e.type.contextTypes;
       if (!n) return fo;
       var r = e.stateNode;
       if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
       var o, i = {};
       for (o in n) i[o] = t[o];
       return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
     }

     function vo(e) {
       return null != (e = e.childContextTypes)
     }

     function yo(e) {
       lo(ho), lo(po)
     }

     function bo(e) {
       lo(ho), lo(po)
     }

     function wo(e, t, n) {
       if (po.current !== fo) throw Error(a(168));
       co(po, t), co(ho, n)
     }

     function _o(e, t, n) {
       var r = e.stateNode;
       if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
       for (var i in r = r.getChildContext())
         if (!(i in e)) throw Error(a(108, $(t) || "Unknown", i));
       return o({}, n, {}, r)
     }

     function Eo(e) {
       var t = e.stateNode;
       return t = t && t.__reactInternalMemoizedMergedChildContext || fo, mo = po.current, co(po, t), co(ho, ho.current), !0
     }

     function So(e, t, n) {
       var r = e.stateNode;
       if (!r) throw Error(a(169));
       n ? (t = _o(e, t, mo), r.__reactInternalMemoizedMergedChildContext = t, lo(ho), lo(po), co(po, t)) : lo(ho), co(ho, n)
     }
     var ko = i.unstable_runWithPriority,
       xo = i.unstable_scheduleCallback,
       To = i.unstable_cancelCallback,
       Co = i.unstable_shouldYield,
       Oo = i.unstable_requestPaint,
       Io = i.unstable_now,
       Mo = i.unstable_getCurrentPriorityLevel,
       Ao = i.unstable_ImmediatePriority,
       Po = i.unstable_UserBlockingPriority,
       No = i.unstable_NormalPriority,
       jo = i.unstable_LowPriority,
       Do = i.unstable_IdlePriority,
       Ro = {},
       Lo = void 0 !== Oo ? Oo : function() {},
       zo = null,
       Uo = null,
       Bo = !1,
       Fo = Io(),
       Ho = 1e4 > Fo ? Io : function() {
         return Io() - Fo
       };

     function Go() {
       switch (Mo()) {
         case Ao:
           return 99;
         case Po:
           return 98;
         case No:
           return 97;
         case jo:
           return 96;
         case Do:
           return 95;
         default:
           throw Error(a(332))
       }
     }

     function Wo(e) {
       switch (e) {
         case 99:
           return Ao;
         case 98:
           return Po;
         case 97:
           return No;
         case 96:
           return jo;
         case 95:
           return Do;
         default:
           throw Error(a(332))
       }
     }

     function Vo(e, t) {
       return e = Wo(e), ko(e, t)
     }

     function qo(e, t, n) {
       return e = Wo(e), xo(e, t, n)
     }

     function Yo(e) {
       return null === zo ? (zo = [e], Uo = xo(Ao, Qo)) : zo.push(e), Ro
     }

     function Ko() {
       if (null !== Uo) {
         var e = Uo;
         Uo = null, To(e)
       }
       Qo()
     }

     function Qo() {
       if (!Bo && null !== zo) {
         Bo = !0;
         var e = 0;
         try {
           var t = zo;
           Vo(99, (function() {
             for (; e < t.length; e++) {
               var n = t[e];
               do {
                 n = n(!0)
               } while (null !== n)
             }
           })), zo = null
         } catch (t) {
           throw null !== zo && (zo = zo.slice(e + 1)), xo(Ao, Ko), t
         } finally {
           Bo = !1
         }
       }
     }
     var Zo = 3;

     function $o(e, t, n) {
       return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
     }

     function Jo(e, t) {
       if (e && e.defaultProps)
         for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
       return t
     }
     var Xo = {
         current: null
       },
       ei = null,
       ti = null,
       ni = null;

     function ri() {
       ni = ti = ei = null
     }

     function oi(e, t) {
       var n = e.type._context;
       co(Xo, n._currentValue), n._currentValue = t
     }

     function ii(e) {
       var t = Xo.current;
       lo(Xo), e.type._context._currentValue = t
     }

     function ai(e, t) {
       for (; null !== e;) {
         var n = e.alternate;
         if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
         else {
           if (!(null !== n && n.childExpirationTime < t)) break;
           n.childExpirationTime = t
         }
         e = e.return
       }
     }

     function ui(e, t) {
       ei = e, ni = ti = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Fa = !0), e.firstContext = null)
     }

     function si(e, t) {
       if (ni !== e && !1 !== t && 0 !== t)
         if ("number" == typeof t && 1073741823 !== t || (ni = e, t = 1073741823), t = {
             context: e,
             observedBits: t,
             next: null
           }, null === ti) {
           if (null === ei) throw Error(a(308));
           ti = t, ei.dependencies = {
             expirationTime: 0,
             firstContext: t,
             responders: null
           }
         } else ti = ti.next = t;
       return e._currentValue
     }
     var li = !1;

     function ci(e) {
       return {
         baseState: e,
         firstUpdate: null,
         lastUpdate: null,
         firstCapturedUpdate: null,
         lastCapturedUpdate: null,
         firstEffect: null,
         lastEffect: null,
         firstCapturedEffect: null,
         lastCapturedEffect: null
       }
     }

     function fi(e) {
       return {
         baseState: e.baseState,
         firstUpdate: e.firstUpdate,
         lastUpdate: e.lastUpdate,
         firstCapturedUpdate: null,
         lastCapturedUpdate: null,
         firstEffect: null,
         lastEffect: null,
         firstCapturedEffect: null,
         lastCapturedEffect: null
       }
     }

     function pi(e, t) {
       return {
         expirationTime: e,
         suspenseConfig: t,
         tag: 0,
         payload: null,
         callback: null,
         next: null,
         nextEffect: null
       }
     }

     function di(e, t) {
       null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
     }

     function hi(e, t) {
       var n = e.alternate;
       if (null === n) {
         var r = e.updateQueue,
           o = null;
         null === r && (r = e.updateQueue = ci(e.memoizedState))
       } else r = e.updateQueue, o = n.updateQueue, null === r ? null === o ? (r = e.updateQueue = ci(e.memoizedState), o = n.updateQueue = ci(n.memoizedState)) : r = e.updateQueue = fi(o) : null === o && (o = n.updateQueue = fi(r));
       null === o || r === o ? di(r, t) : null === r.lastUpdate || null === o.lastUpdate ? (di(r, t), di(o, t)) : (di(r, t), o.lastUpdate = t)
     }

     function mi(e, t) {
       var n = e.updateQueue;
       null === (n = null === n ? e.updateQueue = ci(e.memoizedState) : gi(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
     }

     function gi(e, t) {
       var n = e.alternate;
       return null !== n && t === n.updateQueue && (t = e.updateQueue = fi(t)), t
     }

     function vi(e, t, n, r, i, a) {
       switch (n.tag) {
         case 1:
           return "function" == typeof(e = n.payload) ? e.call(a, r, i) : e;
         case 3:
           e.effectTag = -4097 & e.effectTag | 64;
         case 0:
           if (null == (i = "function" == typeof(e = n.payload) ? e.call(a, r, i) : e)) break;
           return o({}, r, i);
         case 2:
           li = !0
       }
       return r
     }

     function yi(e, t, n, r, o) {
       li = !1;
       for (var i = (t = gi(e, t)).baseState, a = null, u = 0, s = t.firstUpdate, l = i; null !== s;) {
         var c = s.expirationTime;
         c < o ? (null === a && (a = s, i = l), u < c && (u = c)) : (fs(c, s.suspenseConfig), l = vi(e, 0, s, l, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = s : (t.lastEffect.nextEffect = s, t.lastEffect = s))), s = s.next
       }
       for (c = null, s = t.firstCapturedUpdate; null !== s;) {
         var f = s.expirationTime;
         f < o ? (null === c && (c = s, null === a && (i = l)), u < f && (u = f)) : (l = vi(e, 0, s, l, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = s : (t.lastCapturedEffect.nextEffect = s, t.lastCapturedEffect = s))), s = s.next
       }
       null === a && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === c && (i = l), t.baseState = i, t.firstUpdate = a, t.firstCapturedUpdate = c, ps(u), e.expirationTime = u, e.memoizedState = l
     }

     function bi(e, t, n) {
       null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), wi(t.firstEffect, n), t.firstEffect = t.lastEffect = null, wi(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
     }

     function wi(e, t) {
       for (; null !== e;) {
         var n = e.callback;
         if (null !== n) {
           e.callback = null;
           var r = t;
           if ("function" != typeof n) throw Error(a(191, n));
           n.call(r)
         }
         e = e.nextEffect
       }
     }
     var _i = N.ReactCurrentBatchConfig,
       Ei = (new r.Component).refs;

     function Si(e, t, n, r) {
       n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
     }
     var ki = {
       isMounted: function(e) {
         return !!(e = e._reactInternalFiber) && tt(e) === e
       },
       enqueueSetState: function(e, t, n) {
         e = e._reactInternalFiber;
         var r = Ju(),
           o = _i.suspense;
         (o = pi(r = Xu(r, e, o), o)).payload = t, null != n && (o.callback = n), hi(e, o), es(e, r)
       },
       enqueueReplaceState: function(e, t, n) {
         e = e._reactInternalFiber;
         var r = Ju(),
           o = _i.suspense;
         (o = pi(r = Xu(r, e, o), o)).tag = 1, o.payload = t, null != n && (o.callback = n), hi(e, o), es(e, r)
       },
       enqueueForceUpdate: function(e, t) {
         e = e._reactInternalFiber;
         var n = Ju(),
           r = _i.suspense;
         (r = pi(n = Xu(n, e, r), r)).tag = 2, null != t && (r.callback = t), hi(e, r), es(e, n)
       }
     };

     function xi(e, t, n, r, o, i, a) {
       return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!Jr(n, r) || !Jr(o, i))
     }

     function Ti(e, t, n) {
       var r = !1,
         o = fo,
         i = t.contextType;
       return "object" == typeof i && null !== i ? i = si(i) : (o = vo(t) ? mo : po.current, i = (r = null != (r = t.contextTypes)) ? go(e, o) : fo), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ki, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
     }

     function Ci(e, t, n, r) {
       e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ki.enqueueReplaceState(t, t.state, null)
     }

     function Oi(e, t, n, r) {
       var o = e.stateNode;
       o.props = n, o.state = e.memoizedState, o.refs = Ei;
       var i = t.contextType;
       "object" == typeof i && null !== i ? o.context = si(i) : (i = vo(t) ? mo : po.current, o.context = go(e, i)), null !== (i = e.updateQueue) && (yi(e, i, n, o, r), o.state = e.memoizedState), "function" == typeof(i = t.getDerivedStateFromProps) && (Si(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && ki.enqueueReplaceState(o, o.state, null), null !== (i = e.updateQueue) && (yi(e, i, n, o, r), o.state = e.memoizedState)), "function" == typeof o.componentDidMount && (e.effectTag |= 4)
     }
     var Ii = Array.isArray;

     function Mi(e, t, n) {
       if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
         if (n._owner) {
           if (n = n._owner) {
             if (1 !== n.tag) throw Error(a(309));
             var r = n.stateNode
           }
           if (!r) throw Error(a(147, e));
           var o = "" + e;
           return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function(e) {
             var t = r.refs;
             t === Ei && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
           })._stringRef = o, t)
         }
         if ("string" != typeof e) throw Error(a(284));
         if (!n._owner) throw Error(a(290, e))
       }
       return e
     }

     function Ai(e, t) {
       if ("textarea" !== e.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
     }

     function Pi(e) {
       function t(t, n) {
         if (e) {
           var r = t.lastEffect;
           null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
         }
       }

       function n(n, r) {
         if (!e) return null;
         for (; null !== r;) t(n, r), r = r.sibling;
         return null
       }

       function r(e, t) {
         for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
         return e
       }

       function o(e, t, n) {
         return (e = Ps(e, t)).index = 0, e.sibling = null, e
       }

       function i(t, n, r) {
         return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
       }

       function u(t) {
         return e && null === t.alternate && (t.effectTag = 2), t
       }

       function s(e, t, n, r) {
         return null === t || 6 !== t.tag ? ((t = Ds(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
       }

       function l(e, t, n, r) {
         return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = Mi(e, t, n), r.return = e, r) : ((r = Ns(n.type, n.key, n.props, null, e.mode, r)).ref = Mi(e, t, n), r.return = e, r)
       }

       function c(e, t, n, r) {
         return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Rs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
       }

       function f(e, t, n, r, i) {
         return null === t || 7 !== t.tag ? ((t = js(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
       }

       function p(e, t, n) {
         if ("string" == typeof t || "number" == typeof t) return (t = Ds("" + t, e.mode, n)).return = e, t;
         if ("object" == typeof t && null !== t) {
           switch (t.$$typeof) {
             case R:
               return (n = Ns(t.type, t.key, t.props, null, e.mode, n)).ref = Mi(e, null, t), n.return = e, n;
             case L:
               return (t = Rs(t, e.mode, n)).return = e, t
           }
           if (Ii(t) || Z(t)) return (t = js(t, e.mode, n, null)).return = e, t;
           Ai(e, t)
         }
         return null
       }

       function d(e, t, n, r) {
         var o = null !== t ? t.key : null;
         if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
         if ("object" == typeof n && null !== n) {
           switch (n.$$typeof) {
             case R:
               return n.key === o ? n.type === z ? f(e, t, n.props.children, r, o) : l(e, t, n, r) : null;
             case L:
               return n.key === o ? c(e, t, n, r) : null
           }
           if (Ii(n) || Z(n)) return null !== o ? null : f(e, t, n, r, null);
           Ai(e, n)
         }
         return null
       }

       function h(e, t, n, r, o) {
         if ("string" == typeof r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, o);
         if ("object" == typeof r && null !== r) {
           switch (r.$$typeof) {
             case R:
               return e = e.get(null === r.key ? n : r.key) || null, r.type === z ? f(t, e, r.props.children, o, r.key) : l(t, e, r, o);
             case L:
               return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
           }
           if (Ii(r) || Z(r)) return f(t, e = e.get(n) || null, r, o, null);
           Ai(t, r)
         }
         return null
       }

       function m(o, a, u, s) {
         for (var l = null, c = null, f = a, m = a = 0, g = null; null !== f && m < u.length; m++) {
           f.index > m ? (g = f, f = null) : g = f.sibling;
           var v = d(o, f, u[m], s);
           if (null === v) {
             null === f && (f = g);
             break
           }
           e && f && null === v.alternate && t(o, f), a = i(v, a, m), null === c ? l = v : c.sibling = v, c = v, f = g
         }
         if (m === u.length) return n(o, f), l;
         if (null === f) {
           for (; m < u.length; m++) null !== (f = p(o, u[m], s)) && (a = i(f, a, m), null === c ? l = f : c.sibling = f, c = f);
           return l
         }
         for (f = r(o, f); m < u.length; m++) null !== (g = h(f, o, m, u[m], s)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), a = i(g, a, m), null === c ? l = g : c.sibling = g, c = g);
         return e && f.forEach((function(e) {
           return t(o, e)
         })), l
       }

       function g(o, u, s, l) {
         var c = Z(s);
         if ("function" != typeof c) throw Error(a(150));
         if (null == (s = c.call(s))) throw Error(a(151));
         for (var f = c = null, m = u, g = u = 0, v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
           m.index > g ? (v = m, m = null) : v = m.sibling;
           var b = d(o, m, y.value, l);
           if (null === b) {
             null === m && (m = v);
             break
           }
           e && m && null === b.alternate && t(o, m), u = i(b, u, g), null === f ? c = b : f.sibling = b, f = b, m = v
         }
         if (y.done) return n(o, m), c;
         if (null === m) {
           for (; !y.done; g++, y = s.next()) null !== (y = p(o, y.value, l)) && (u = i(y, u, g), null === f ? c = y : f.sibling = y, f = y);
           return c
         }
         for (m = r(o, m); !y.done; g++, y = s.next()) null !== (y = h(m, o, g, y.value, l)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), u = i(y, u, g), null === f ? c = y : f.sibling = y, f = y);
         return e && m.forEach((function(e) {
           return t(o, e)
         })), c
       }
       return function(e, r, i, s) {
         var l = "object" == typeof i && null !== i && i.type === z && null === i.key;
         l && (i = i.props.children);
         var c = "object" == typeof i && null !== i;
         if (c) switch (i.$$typeof) {
           case R:
             e: {
               for (c = i.key, l = r; null !== l;) {
                 if (l.key === c) {
                   if (7 === l.tag ? i.type === z : l.elementType === i.type) {
                     n(e, l.sibling), (r = o(l, i.type === z ? i.props.children : i.props)).ref = Mi(e, l, i), r.return = e, e = r;
                     break e
                   }
                   n(e, l);
                   break
                 }
                 t(e, l), l = l.sibling
               }
               i.type === z ? ((r = js(i.props.children, e.mode, s, i.key)).return = e, e = r) : ((s = Ns(i.type, i.key, i.props, null, e.mode, s)).ref = Mi(e, r, i), s.return = e, e = s)
             }
             return u(e);
           case L:
             e: {
               for (l = i.key; null !== r;) {
                 if (r.key === l) {
                   if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                     n(e, r.sibling), (r = o(r, i.children || [])).return = e, e = r;
                     break e
                   }
                   n(e, r);
                   break
                 }
                 t(e, r), r = r.sibling
               }(r = Rs(i, e.mode, s)).return = e,
                 e = r
             }
             return u(e)
         }
         if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, i)).return = e, e = r) : (n(e, r), (r = Ds(i, e.mode, s)).return = e, e = r), u(e);
         if (Ii(i)) return m(e, r, i, s);
         if (Z(i)) return g(e, r, i, s);
         if (c && Ai(e, i), void 0 === i && !l) switch (e.tag) {
           case 1:
           case 0:
             throw e = e.type, Error(a(152, e.displayName || e.name || "Component"))
         }
         return n(e, r)
       }
     }
     var Ni = Pi(!0),
       ji = Pi(!1),
       Di = {},
       Ri = {
         current: Di
       },
       Li = {
         current: Di
       },
       zi = {
         current: Di
       };

     function Ui(e) {
       if (e === Di) throw Error(a(174));
       return e
     }

     function Bi(e, t) {
       co(zi, t), co(Li, e), co(Ri, Di);
       var n = t.nodeType;
       switch (n) {
         case 9:
         case 11:
           t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
           break;
         default:
           t = Fe(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
       }
       lo(Ri), co(Ri, t)
     }

     function Fi(e) {
       lo(Ri), lo(Li), lo(zi)
     }

     function Hi(e) {
       Ui(zi.current);
       var t = Ui(Ri.current),
         n = Fe(t, e.type);
       t !== n && (co(Li, e), co(Ri, n))
     }

     function Gi(e) {
       Li.current === e && (lo(Ri), lo(Li))
     }
     var Wi = {
       current: 0
     };

     function Vi(e) {
       for (var t = e; null !== t;) {
         if (13 === t.tag) {
           var n = t.memoizedState;
           if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
         } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
           if (0 != (64 & t.effectTag)) return t
         } else if (null !== t.child) {
           t.child.return = t, t = t.child;
           continue
         }
         if (t === e) break;
         for (; null === t.sibling;) {
           if (null === t.return || t.return === e) return null;
           t = t.return
         }
         t.sibling.return = t.return, t = t.sibling
       }
       return null
     }

     function qi(e, t) {
       return {
         responder: e,
         props: t
       }
     }
     var Yi = N.ReactCurrentDispatcher,
       Ki = N.ReactCurrentBatchConfig,
       Qi = 0,
       Zi = null,
       $i = null,
       Ji = null,
       Xi = null,
       ea = null,
       ta = null,
       na = 0,
       ra = null,
       oa = 0,
       ia = !1,
       aa = null,
       ua = 0;

     function sa() {
       throw Error(a(321))
     }

     function la(e, t) {
       if (null === t) return !1;
       for (var n = 0; n < t.length && n < e.length; n++)
         if (!Zr(e[n], t[n])) return !1;
       return !0
     }

     function ca(e, t, n, r, o, i) {
       if (Qi = i, Zi = t, Ji = null !== e ? e.memoizedState : null, Yi.current = null === Ji ? Ia : Ma, t = n(r, o), ia) {
         do {
           ia = !1, ua += 1, Ji = null !== e ? e.memoizedState : null, ta = Xi, ra = ea = $i = null, Yi.current = Ma, t = n(r, o)
         } while (ia);
         aa = null, ua = 0
       }
       if (Yi.current = Oa, (e = Zi).memoizedState = Xi, e.expirationTime = na, e.updateQueue = ra, e.effectTag |= oa, e = null !== $i && null !== $i.next, Qi = 0, ta = ea = Xi = Ji = $i = Zi = null, na = 0, ra = null, oa = 0, e) throw Error(a(300));
       return t
     }

     function fa() {
       Yi.current = Oa, Qi = 0, ta = ea = Xi = Ji = $i = Zi = null, na = 0, ra = null, oa = 0, ia = !1, aa = null, ua = 0
     }

     function pa() {
       var e = {
         memoizedState: null,
         baseState: null,
         queue: null,
         baseUpdate: null,
         next: null
       };
       return null === ea ? Xi = ea = e : ea = ea.next = e, ea
     }

     function da() {
       if (null !== ta) ta = (ea = ta).next, Ji = null !== ($i = Ji) ? $i.next : null;
       else {
         if (null === Ji) throw Error(a(310));
         var e = {
           memoizedState: ($i = Ji).memoizedState,
           baseState: $i.baseState,
           queue: $i.queue,
           baseUpdate: $i.baseUpdate,
           next: null
         };
         ea = null === ea ? Xi = e : ea.next = e, Ji = $i.next
       }
       return ea
     }

     function ha(e, t) {
       return "function" == typeof t ? t(e) : t
     }

     function ma(e) {
       var t = da(),
         n = t.queue;
       if (null === n) throw Error(a(311));
       if (n.lastRenderedReducer = e, 0 < ua) {
         var r = n.dispatch;
         if (null !== aa) {
           var o = aa.get(n);
           if (void 0 !== o) {
             aa.delete(n);
             var i = t.memoizedState;
             do {
               i = e(i, o.action), o = o.next
             } while (null !== o);
             return Zr(i, t.memoizedState) || (Fa = !0), t.memoizedState = i, t.baseUpdate === n.last && (t.baseState = i), n.lastRenderedState = i, [i, r]
           }
         }
         return [t.memoizedState, r]
       }
       r = n.last;
       var u = t.baseUpdate;
       if (i = t.baseState, null !== u ? (null !== r && (r.next = null), r = u.next) : r = null !== r ? r.next : null, null !== r) {
         var s = o = null,
           l = r,
           c = !1;
         do {
           var f = l.expirationTime;
           f < Qi ? (c || (c = !0, s = u, o = i), f > na && ps(na = f)) : (fs(f, l.suspenseConfig), i = l.eagerReducer === e ? l.eagerState : e(i, l.action)), u = l, l = l.next
         } while (null !== l && l !== r);
         c || (s = u, o = i), Zr(i, t.memoizedState) || (Fa = !0), t.memoizedState = i, t.baseUpdate = s, t.baseState = o, n.lastRenderedState = i
       }
       return [t.memoizedState, n.dispatch]
     }

     function ga(e) {
       var t = pa();
       return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
         last: null,
         dispatch: null,
         lastRenderedReducer: ha,
         lastRenderedState: e
       }).dispatch = Ca.bind(null, Zi, e), [t.memoizedState, e]
     }

     function va(e) {
       return ma(ha)
     }

     function ya(e, t, n, r) {
       return e = {
         tag: e,
         create: t,
         destroy: n,
         deps: r,
         next: null
       }, null === ra ? (ra = {
         lastEffect: null
       }).lastEffect = e.next = e : null === (t = ra.lastEffect) ? ra.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, ra.lastEffect = e), e
     }

     function ba(e, t, n, r) {
       var o = pa();
       oa |= e, o.memoizedState = ya(t, n, void 0, void 0 === r ? null : r)
     }

     function wa(e, t, n, r) {
       var o = da();
       r = void 0 === r ? null : r;
       var i = void 0;
       if (null !== $i) {
         var a = $i.memoizedState;
         if (i = a.destroy, null !== r && la(r, a.deps)) return void ya(0, n, i, r)
       }
       oa |= e, o.memoizedState = ya(t, n, i, r)
     }

     function _a(e, t) {
       return ba(516, 192, e, t)
     }

     function Ea(e, t) {
       return wa(516, 192, e, t)
     }

     function Sa(e, t) {
       return "function" == typeof t ? (e = e(), t(e), function() {
         t(null)
       }) : null != t ? (e = e(), t.current = e, function() {
         t.current = null
       }) : void 0
     }

     function ka() {}

     function xa(e, t) {
       return pa().memoizedState = [e, void 0 === t ? null : t], e
     }

     function Ta(e, t) {
       var n = da();
       t = void 0 === t ? null : t;
       var r = n.memoizedState;
       return null !== r && null !== t && la(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
     }

     function Ca(e, t, n) {
       if (!(25 > ua)) throw Error(a(301));
       var r = e.alternate;
       if (e === Zi || null !== r && r === Zi)
         if (ia = !0, e = {
             expirationTime: Qi,
             suspenseConfig: null,
             action: n,
             eagerReducer: null,
             eagerState: null,
             next: null
           }, null === aa && (aa = new Map), void 0 === (n = aa.get(t))) aa.set(t, e);
         else {
           for (t = n; null !== t.next;) t = t.next;
           t.next = e
         }
       else {
         var o = Ju(),
           i = _i.suspense;
         i = {
           expirationTime: o = Xu(o, e, i),
           suspenseConfig: i,
           action: n,
           eagerReducer: null,
           eagerState: null,
           next: null
         };
         var u = t.last;
         if (null === u) i.next = i;
         else {
           var s = u.next;
           null !== s && (i.next = s), u.next = i
         }
         if (t.last = i, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
           var l = t.lastRenderedState,
             c = r(l, n);
           if (i.eagerReducer = r, i.eagerState = c, Zr(c, l)) return
         } catch (e) {}
         es(e, o)
       }
     }
     var Oa = {
         readContext: si,
         useCallback: sa,
         useContext: sa,
         useEffect: sa,
         useImperativeHandle: sa,
         useLayoutEffect: sa,
         useMemo: sa,
         useReducer: sa,
         useRef: sa,
         useState: sa,
         useDebugValue: sa,
         useResponder: sa,
         useDeferredValue: sa,
         useTransition: sa
       },
       Ia = {
         readContext: si,
         useCallback: xa,
         useContext: si,
         useEffect: _a,
         useImperativeHandle: function(e, t, n) {
           return n = null != n ? n.concat([e]) : null, ba(4, 36, Sa.bind(null, t, e), n)
         },
         useLayoutEffect: function(e, t) {
           return ba(4, 36, e, t)
         },
         useMemo: function(e, t) {
           var n = pa();
           return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
         },
         useReducer: function(e, t, n) {
           var r = pa();
           return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
             last: null,
             dispatch: null,
             lastRenderedReducer: e,
             lastRenderedState: t
           }).dispatch = Ca.bind(null, Zi, e), [r.memoizedState, e]
         },
         useRef: function(e) {
           return e = {
             current: e
           }, pa().memoizedState = e
         },
         useState: ga,
         useDebugValue: ka,
         useResponder: qi,
         useDeferredValue: function(e, t) {
           var n = ga(e),
             r = n[0],
             o = n[1];
           return _a((function() {
             i.unstable_next((function() {
               var n = Ki.suspense;
               Ki.suspense = void 0 === t ? null : t;
               try {
                 o(e)
               } finally {
                 Ki.suspense = n
               }
             }))
           }), [e, t]), r
         },
         useTransition: function(e) {
           var t = ga(!1),
             n = t[0],
             r = t[1];
           return [xa((function(t) {
             r(!0), i.unstable_next((function() {
               var n = Ki.suspense;
               Ki.suspense = void 0 === e ? null : e;
               try {
                 r(!1), t()
               } finally {
                 Ki.suspense = n
               }
             }))
           }), [e, n]), n]
         }
       },
       Ma = {
         readContext: si,
         useCallback: Ta,
         useContext: si,
         useEffect: Ea,
         useImperativeHandle: function(e, t, n) {
           return n = null != n ? n.concat([e]) : null, wa(4, 36, Sa.bind(null, t, e), n)
         },
         useLayoutEffect: function(e, t) {
           return wa(4, 36, e, t)
         },
         useMemo: function(e, t) {
           var n = da();
           t = void 0 === t ? null : t;
           var r = n.memoizedState;
           return null !== r && null !== t && la(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
         },
         useReducer: ma,
         useRef: function() {
           return da().memoizedState
         },
         useState: va,
         useDebugValue: ka,
         useResponder: qi,
         useDeferredValue: function(e, t) {
           var n = va(),
             r = n[0],
             o = n[1];
           return Ea((function() {
             i.unstable_next((function() {
               var n = Ki.suspense;
               Ki.suspense = void 0 === t ? null : t;
               try {
                 o(e)
               } finally {
                 Ki.suspense = n
               }
             }))
           }), [e, t]), r
         },
         useTransition: function(e) {
           var t = va(),
             n = t[0],
             r = t[1];
           return [Ta((function(t) {
             r(!0), i.unstable_next((function() {
               var n = Ki.suspense;
               Ki.suspense = void 0 === e ? null : e;
               try {
                 r(!1), t()
               } finally {
                 Ki.suspense = n
               }
             }))
           }), [e, n]), n]
         }
       },
       Aa = null,
       Pa = null,
       Na = !1;

     function ja(e, t) {
       var n = Ms(5, null, null, 0);
       n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
     }

     function Da(e, t) {
       switch (e.tag) {
         case 5:
           var n = e.type;
           return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
         case 6:
           return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
         case 13:
         default:
           return !1
       }
     }

     function Ra(e) {
       if (Na) {
         var t = Pa;
         if (t) {
           var n = t;
           if (!Da(e, t)) {
             if (!(t = nr(n.nextSibling)) || !Da(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Na = !1, void(Aa = e);
             ja(Aa, n)
           }
           Aa = e, Pa = nr(t.firstChild)
         } else e.effectTag = -1025 & e.effectTag | 2, Na = !1, Aa = e
       }
     }

     function La(e) {
       for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
       Aa = e
     }

     function za(e) {
       if (e !== Aa) return !1;
       if (!Na) return La(e), Na = !0, !1;
       var t = e.type;
       if (5 !== e.tag || "head" !== t && "body" !== t && !Xn(t, e.memoizedProps))
         for (t = Pa; t;) ja(e, t), t = nr(t.nextSibling);
       if (La(e), 13 === e.tag) {
         if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
         e: {
           for (e = e.nextSibling, t = 0; e;) {
             if (8 === e.nodeType) {
               var n = e.data;
               if ("/$" === n) {
                 if (0 === t) {
                   Pa = nr(e.nextSibling);
                   break e
                 }
                 t--
               } else "$" !== n && "$!" !== n && "$?" !== n || t++
             }
             e = e.nextSibling
           }
           Pa = null
         }
       } else Pa = Aa ? nr(e.stateNode.nextSibling) : null;
       return !0
     }

     function Ua() {
       Pa = Aa = null, Na = !1
     }
     var Ba = N.ReactCurrentOwner,
       Fa = !1;

     function Ha(e, t, n, r) {
       t.child = null === e ? ji(t, null, n, r) : Ni(t, e.child, n, r)
     }

     function Ga(e, t, n, r, o) {
       n = n.render;
       var i = t.ref;
       return ui(t, o), r = ca(e, t, n, r, i, o), null === e || Fa ? (t.effectTag |= 1, Ha(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), iu(e, t, o))
     }

     function Wa(e, t, n, r, o, i) {
       if (null === e) {
         var a = n.type;
         return "function" != typeof a || As(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ns(n.type, null, r, null, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Va(e, t, a, r, o, i))
       }
       return a = e.child, o < i && (o = a.memoizedProps, (n = null !== (n = n.compare) ? n : Jr)(o, r) && e.ref === t.ref) ? iu(e, t, i) : (t.effectTag |= 1, (e = Ps(a, r)).ref = t.ref, e.return = t, t.child = e)
     }

     function Va(e, t, n, r, o, i) {
       return null !== e && Jr(e.memoizedProps, r) && e.ref === t.ref && (Fa = !1, o < i) ? iu(e, t, i) : Ya(e, t, n, r, i)
     }

     function qa(e, t) {
       var n = t.ref;
       (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
     }

     function Ya(e, t, n, r, o) {
       var i = vo(n) ? mo : po.current;
       return i = go(t, i), ui(t, o), n = ca(e, t, n, r, i, o), null === e || Fa ? (t.effectTag |= 1, Ha(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), iu(e, t, o))
     }

     function Ka(e, t, n, r, o) {
       if (vo(n)) {
         var i = !0;
         Eo(t)
       } else i = !1;
       if (ui(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Ti(t, n, r), Oi(t, n, r, o), r = !0;
       else if (null === e) {
         var a = t.stateNode,
           u = t.memoizedProps;
         a.props = u;
         var s = a.context,
           l = n.contextType;
         "object" == typeof l && null !== l ? l = si(l) : l = go(t, l = vo(n) ? mo : po.current);
         var c = n.getDerivedStateFromProps,
           f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
         f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || s !== l) && Ci(t, a, r, l), li = !1;
         var p = t.memoizedState;
         s = a.state = p;
         var d = t.updateQueue;
         null !== d && (yi(t, d, r, a, o), s = t.memoizedState), u !== r || p !== s || ho.current || li ? ("function" == typeof c && (Si(t, n, c, r), s = t.memoizedState), (u = li || xi(t, n, u, r, p, s, l)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = l, r = u) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1)
       } else a = t.stateNode, u = t.memoizedProps, a.props = t.type === t.elementType ? u : Jo(t.type, u), s = a.context, "object" == typeof(l = n.contextType) && null !== l ? l = si(l) : l = go(t, l = vo(n) ? mo : po.current), (f = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || s !== l) && Ci(t, a, r, l), li = !1, s = t.memoizedState, p = a.state = s, null !== (d = t.updateQueue) && (yi(t, d, r, a, o), p = t.memoizedState), u !== r || s !== p || ho.current || li ? ("function" == typeof c && (Si(t, n, c, r), p = t.memoizedState), (c = li || xi(t, n, u, r, s, p, l)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = l, r = c) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), r = !1);
       return Qa(e, t, n, r, i, o)
     }

     function Qa(e, t, n, r, o, i) {
       qa(e, t);
       var a = 0 != (64 & t.effectTag);
       if (!r && !a) return o && So(t, n, !1), iu(e, t, i);
       r = t.stateNode, Ba.current = t;
       var u = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
       return t.effectTag |= 1, null !== e && a ? (t.child = Ni(t, e.child, null, i), t.child = Ni(t, null, u, i)) : Ha(e, t, u, i), t.memoizedState = r.state, o && So(t, n, !0), t.child
     }

     function Za(e) {
       var t = e.stateNode;
       t.pendingContext ? wo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && wo(0, t.context, !1), Bi(e, t.containerInfo)
     }
     var $a, Ja, Xa, eu = {
       dehydrated: null,
       retryTime: 0
     };

     function tu(e, t, n) {
       var r, o = t.mode,
         i = t.pendingProps,
         a = Wi.current,
         u = !1;
       if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)), r ? (u = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1), co(Wi, 1 & a), null === e) {
         if (void 0 !== i.fallback && Ra(t), u) {
           if (u = i.fallback, (i = js(null, o, 0, null)).return = t, 0 == (2 & t.mode))
             for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) e.return = i, e = e.sibling;
           return (n = js(u, o, n, null)).return = t, i.sibling = n, t.memoizedState = eu, t.child = i, n
         }
         return o = i.children, t.memoizedState = null, t.child = ji(t, null, o, n)
       }
       if (null !== e.memoizedState) {
         if (o = (e = e.child).sibling, u) {
           if (i = i.fallback, (n = Ps(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (u = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
             for (n.child = u; null !== u;) u.return = n, u = u.sibling;
           return (o = Ps(o, i, o.expirationTime)).return = t, n.sibling = o, n.childExpirationTime = 0, t.memoizedState = eu, t.child = n, o
         }
         return n = Ni(t, e.child, i.children, n), t.memoizedState = null, t.child = n
       }
       if (e = e.child, u) {
         if (u = i.fallback, (i = js(null, o, 0, null)).return = t, i.child = e, null !== e && (e.return = i), 0 == (2 & t.mode))
           for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) e.return = i, e = e.sibling;
         return (n = js(u, o, n, null)).return = t, i.sibling = n, n.effectTag |= 2, i.childExpirationTime = 0, t.memoizedState = eu, t.child = i, n
       }
       return t.memoizedState = null, t.child = Ni(t, e, i.children, n)
     }

     function nu(e, t) {
       e.expirationTime < t && (e.expirationTime = t);
       var n = e.alternate;
       null !== n && n.expirationTime < t && (n.expirationTime = t), ai(e.return, t)
     }

     function ru(e, t, n, r, o, i) {
       var a = e.memoizedState;
       null === a ? e.memoizedState = {
         isBackwards: t,
         rendering: null,
         last: r,
         tail: n,
         tailExpiration: 0,
         tailMode: o,
         lastEffect: i
       } : (a.isBackwards = t, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = o, a.lastEffect = i)
     }

     function ou(e, t, n) {
       var r = t.pendingProps,
         o = r.revealOrder,
         i = r.tail;
       if (Ha(e, t, r.children, n), 0 != (2 & (r = Wi.current))) r = 1 & r | 2, t.effectTag |= 64;
       else {
         if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
           if (13 === e.tag) null !== e.memoizedState && nu(e, n);
           else if (19 === e.tag) nu(e, n);
           else if (null !== e.child) {
             e.child.return = e, e = e.child;
             continue
           }
           if (e === t) break e;
           for (; null === e.sibling;) {
             if (null === e.return || e.return === t) break e;
             e = e.return
           }
           e.sibling.return = e.return, e = e.sibling
         }
         r &= 1
       }
       if (co(Wi, r), 0 == (2 & t.mode)) t.memoizedState = null;
       else switch (o) {
         case "forwards":
           for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Vi(e) && (o = n), n = n.sibling;
           null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ru(t, !1, o, n, i, t.lastEffect);
           break;
         case "backwards":
           for (n = null, o = t.child, t.child = null; null !== o;) {
             if (null !== (e = o.alternate) && null === Vi(e)) {
               t.child = o;
               break
             }
             e = o.sibling, o.sibling = n, n = o, o = e
           }
           ru(t, !0, n, null, i, t.lastEffect);
           break;
         case "together":
           ru(t, !1, null, null, void 0, t.lastEffect);
           break;
         default:
           t.memoizedState = null
       }
       return t.child
     }

     function iu(e, t, n) {
       null !== e && (t.dependencies = e.dependencies);
       var r = t.expirationTime;
       if (0 !== r && ps(r), t.childExpirationTime < n) return null;
       if (null !== e && t.child !== e.child) throw Error(a(153));
       if (null !== t.child) {
         for (n = Ps(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ps(e, e.pendingProps, e.expirationTime)).return = t;
         n.sibling = null
       }
       return t.child
     }

     function au(e) {
       e.effectTag |= 4
     }

     function uu(e, t) {
       switch (e.tailMode) {
         case "hidden":
           t = e.tail;
           for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
           null === n ? e.tail = null : n.sibling = null;
           break;
         case "collapsed":
           n = e.tail;
           for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
           null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
       }
     }

     function su(e) {
       switch (e.tag) {
         case 1:
           vo(e.type) && yo();
           var t = e.effectTag;
           return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
         case 3:
           if (Fi(), bo(), 0 != (64 & (t = e.effectTag))) throw Error(a(285));
           return e.effectTag = -4097 & t | 64, e;
         case 5:
           return Gi(e), null;
         case 13:
           return lo(Wi), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
         case 19:
           return lo(Wi), null;
         case 4:
           return Fi(), null;
         case 10:
           return ii(e), null;
         default:
           return null
       }
     }

     function lu(e, t) {
       return {
         value: e,
         source: t,
         stack: J(t)
       }
     }
     $a = function(e, t) {
       for (var n = t.child; null !== n;) {
         if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
         else if (4 !== n.tag && null !== n.child) {
           n.child.return = n, n = n.child;
           continue
         }
         if (n === t) break;
         for (; null === n.sibling;) {
           if (null === n.return || n.return === t) return;
           n = n.return
         }
         n.sibling.return = n.return, n = n.sibling
       }
     }, Ja = function(e, t, n, r, i) {
       var a = e.memoizedProps;
       if (a !== r) {
         var u, s, l = t.stateNode;
         switch (Ui(Ri.current), e = null, n) {
           case "input":
             a = Te(l, a), r = Te(l, r), e = [];
             break;
           case "option":
             a = Pe(l, a), r = Pe(l, r), e = [];
             break;
           case "select":
             a = o({}, a, {
               value: void 0
             }), r = o({}, r, {
               value: void 0
             }), e = [];
             break;
           case "textarea":
             a = je(l, a), r = je(l, r), e = [];
             break;
           default:
             "function" != typeof a.onClick && "function" == typeof r.onClick && (l.onclick = Wn)
         }
         for (u in Fn(n, r), n = null, a)
           if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
             if ("style" === u)
               for (s in l = a[u]) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
             else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (d.hasOwnProperty(u) ? e || (e = []) : (e = e || []).push(u, null));
         for (u in r) {
           var c = r[u];
           if (l = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== l && (null != c || null != l))
             if ("style" === u)
               if (l) {
                 for (s in l) !l.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                 for (s in c) c.hasOwnProperty(s) && l[s] !== c[s] && (n || (n = {}), n[s] = c[s])
               } else n || (e || (e = []), e.push(u, n)), n = c;
             else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (e = e || []).push(u, "" + c)) : "children" === u ? l === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (d.hasOwnProperty(u) ? (null != c && Gn(i, u), e || l === c || (e = [])) : (e = e || []).push(u, c))
         }
         n && (e = e || []).push("style", n), i = e, (t.updateQueue = i) && au(t)
       }
     }, Xa = function(e, t, n, r) {
       n !== r && au(t)
     };
     var cu = "function" == typeof WeakSet ? WeakSet : Set;

     function fu(e, t) {
       var n = t.source,
         r = t.stack;
       null === r && null !== n && (r = J(n)), null !== n && $(n.type), t = t.value, null !== e && 1 === e.tag && $(e.type);
       try {
         console.error(t)
       } catch (e) {
         setTimeout((function() {
           throw e
         }))
       }
     }

     function pu(e) {
       var t = e.ref;
       if (null !== t)
         if ("function" == typeof t) try {
           t(null)
         } catch (t) {
           ks(e, t)
         } else t.current = null
     }

     function du(e, t) {
       switch (t.tag) {
         case 0:
         case 11:
         case 15:
           hu(2, 0, t);
           break;
         case 1:
           if (256 & t.effectTag && null !== e) {
             var n = e.memoizedProps,
               r = e.memoizedState;
             t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Jo(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
           }
           break;
         case 3:
         case 5:
         case 6:
         case 4:
         case 17:
           break;
         default:
           throw Error(a(163))
       }
     }

     function hu(e, t, n) {
       if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
         var r = n = n.next;
         do {
           if (0 != (r.tag & e)) {
             var o = r.destroy;
             r.destroy = void 0, void 0 !== o && o()
           }
           0 != (r.tag & t) && (o = r.create, r.destroy = o()), r = r.next
         } while (r !== n)
       }
     }

     function mu(e, t, n) {
       switch ("function" == typeof Os && Os(t), t.tag) {
         case 0:
         case 11:
         case 14:
         case 15:
           if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
             var r = e.next;
             Vo(97 < n ? 97 : n, (function() {
               var e = r;
               do {
                 var n = e.destroy;
                 if (void 0 !== n) {
                   var o = t;
                   try {
                     n()
                   } catch (e) {
                     ks(o, e)
                   }
                 }
                 e = e.next
               } while (e !== r)
             }))
           }
           break;
         case 1:
           pu(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
             try {
               t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
             } catch (t) {
               ks(e, t)
             }
           }(t, n);
           break;
         case 5:
           pu(t);
           break;
         case 4:
           bu(e, t, n)
       }
     }

     function gu(e) {
       var t = e.alternate;
       e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && gu(t)
     }

     function vu(e) {
       return 5 === e.tag || 3 === e.tag || 4 === e.tag
     }

     function yu(e) {
       e: {
         for (var t = e.return; null !== t;) {
           if (vu(t)) {
             var n = t;
             break e
           }
           t = t.return
         }
         throw Error(a(160))
       }
       switch (t = n.stateNode, n.tag) {
         case 5:
           var r = !1;
           break;
         case 3:
         case 4:
           t = t.containerInfo, r = !0;
           break;
         default:
           throw Error(a(161))
       }
       16 & n.effectTag && (We(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
         for (; null === n.sibling;) {
           if (null === n.return || vu(n.return)) {
             n = null;
             break e
           }
           n = n.return
         }
         for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
           if (2 & n.effectTag) continue t;
           if (null === n.child || 4 === n.tag) continue t;
           n.child.return = n, n = n.child
         }
         if (!(2 & n.effectTag)) {
           n = n.stateNode;
           break e
         }
       }
       for (var o = e;;) {
         var i = 5 === o.tag || 6 === o.tag;
         if (i) {
           var u = i ? o.stateNode : o.stateNode.instance;
           if (n)
             if (r) {
               var s = u;
               u = n, 8 === (i = t).nodeType ? i.parentNode.insertBefore(s, u) : i.insertBefore(s, u)
             } else t.insertBefore(u, n);
           else r ? (8 === (s = t).nodeType ? (i = s.parentNode).insertBefore(u, s) : (i = s).appendChild(u), null != (s = s._reactRootContainer) || null !== i.onclick || (i.onclick = Wn)) : t.appendChild(u)
         } else if (4 !== o.tag && null !== o.child) {
           o.child.return = o, o = o.child;
           continue
         }
         if (o === e) break;
         for (; null === o.sibling;) {
           if (null === o.return || o.return === e) return;
           o = o.return
         }
         o.sibling.return = o.return, o = o.sibling
       }
     }

     function bu(e, t, n) {
       for (var r, o, i = t, u = !1;;) {
         if (!u) {
           u = i.return;
           e: for (;;) {
             if (null === u) throw Error(a(160));
             switch (r = u.stateNode, u.tag) {
               case 5:
                 o = !1;
                 break e;
               case 3:
               case 4:
                 r = r.containerInfo, o = !0;
                 break e
             }
             u = u.return
           }
           u = !0
         }
         if (5 === i.tag || 6 === i.tag) {
           e: for (var s = e, l = i, c = n, f = l;;)
             if (mu(s, f, c), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
             else {
               if (f === l) break;
               for (; null === f.sibling;) {
                 if (null === f.return || f.return === l) break e;
                 f = f.return
               }
               f.sibling.return = f.return, f = f.sibling
             }o ? (s = r, l = i.stateNode, 8 === s.nodeType ? s.parentNode.removeChild(l) : s.removeChild(l)) : r.removeChild(i.stateNode)
         }
         else if (4 === i.tag) {
           if (null !== i.child) {
             r = i.stateNode.containerInfo, o = !0, i.child.return = i, i = i.child;
             continue
           }
         } else if (mu(e, i, n), null !== i.child) {
           i.child.return = i, i = i.child;
           continue
         }
         if (i === t) break;
         for (; null === i.sibling;) {
           if (null === i.return || i.return === t) return;
           4 === (i = i.return).tag && (u = !1)
         }
         i.sibling.return = i.return, i = i.sibling
       }
     }

     function wu(e, t) {
       switch (t.tag) {
         case 0:
         case 11:
         case 14:
         case 15:
           hu(4, 8, t);
           break;
         case 1:
           break;
         case 5:
           var n = t.stateNode;
           if (null != n) {
             var r = t.memoizedProps,
               o = null !== e ? e.memoizedProps : r;
             e = t.type;
             var i = t.updateQueue;
             if (t.updateQueue = null, null !== i) {
               for (n[ar] = r, "input" === e && "radio" === r.type && null != r.name && Oe(n, r), Hn(e, o), t = Hn(e, r), o = 0; o < i.length; o += 2) {
                 var u = i[o],
                   s = i[o + 1];
                 "style" === u ? Un(n, s) : "dangerouslySetInnerHTML" === u ? Ge(n, s) : "children" === u ? We(n, s) : Ee(n, u, s, t)
               }
               switch (e) {
                 case "input":
                   Ie(n, r);
                   break;
                 case "textarea":
                   Re(n, r);
                   break;
                 case "select":
                   t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Ne(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Ne(n, !!r.multiple, r.defaultValue, !0) : Ne(n, !!r.multiple, r.multiple ? [] : "", !1))
               }
             }
           }
           break;
         case 6:
           if (null === t.stateNode) throw Error(a(162));
           t.stateNode.nodeValue = t.memoizedProps;
           break;
         case 3:
           (t = t.stateNode).hydrate && (t.hydrate = !1, Tt(t.containerInfo));
           break;
         case 12:
           break;
         case 13:
           if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, Bu = Ho()), null !== n) e: for (e = n;;) {
             if (5 === e.tag) i = e.stateNode, r ? "function" == typeof(i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (i = e.stateNode, o = null != (o = e.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null, i.style.display = zn("display", o));
             else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
             else {
               if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                 (i = e.child.sibling).return = e, e = i;
                 continue
               }
               if (null !== e.child) {
                 e.child.return = e, e = e.child;
                 continue
               }
             }
             if (e === n) break e;
             for (; null === e.sibling;) {
               if (null === e.return || e.return === n) break e;
               e = e.return
             }
             e.sibling.return = e.return, e = e.sibling
           }
           _u(t);
           break;
         case 19:
           _u(t);
           break;
         case 17:
         case 20:
         case 21:
           break;
         default:
           throw Error(a(163))
       }
     }

     function _u(e) {
       var t = e.updateQueue;
       if (null !== t) {
         e.updateQueue = null;
         var n = e.stateNode;
         null === n && (n = e.stateNode = new cu), t.forEach((function(t) {
           var r = Ts.bind(null, e, t);
           n.has(t) || (n.add(t), t.then(r, r))
         }))
       }
     }
     var Eu = "function" == typeof WeakMap ? WeakMap : Map;

     function Su(e, t, n) {
       (n = pi(n, null)).tag = 3, n.payload = {
         element: null
       };
       var r = t.value;
       return n.callback = function() {
         Hu || (Hu = !0, Gu = r), fu(e, t)
       }, n
     }

     function ku(e, t, n) {
       (n = pi(n, null)).tag = 3;
       var r = e.type.getDerivedStateFromError;
       if ("function" == typeof r) {
         var o = t.value;
         n.payload = function() {
           return fu(e, t), r(o)
         }
       }
       var i = e.stateNode;
       return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
         "function" != typeof r && (null === Wu ? Wu = new Set([this]) : Wu.add(this), fu(e, t));
         var n = t.stack;
         this.componentDidCatch(t.value, {
           componentStack: null !== n ? n : ""
         })
       }), n
     }
     var xu, Tu = Math.ceil,
       Cu = N.ReactCurrentDispatcher,
       Ou = N.ReactCurrentOwner,
       Iu = 0,
       Mu = null,
       Au = null,
       Pu = 0,
       Nu = 0,
       ju = null,
       Du = 1073741823,
       Ru = 1073741823,
       Lu = null,
       zu = 0,
       Uu = !1,
       Bu = 0,
       Fu = null,
       Hu = !1,
       Gu = null,
       Wu = null,
       Vu = !1,
       qu = null,
       Yu = 90,
       Ku = null,
       Qu = 0,
       Zu = null,
       $u = 0;

     function Ju() {
       return 0 != (48 & Iu) ? 1073741821 - (Ho() / 10 | 0) : 0 !== $u ? $u : $u = 1073741821 - (Ho() / 10 | 0)
     }

     function Xu(e, t, n) {
       if (0 == (2 & (t = t.mode))) return 1073741823;
       var r = Go();
       if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
       if (0 != (16 & Iu)) return Pu;
       if (null !== n) e = $o(e, 0 | n.timeoutMs || 5e3, 250);
       else switch (r) {
         case 99:
           e = 1073741823;
           break;
         case 98:
           e = $o(e, 150, 100);
           break;
         case 97:
         case 96:
           e = $o(e, 5e3, 250);
           break;
         case 95:
           e = 2;
           break;
         default:
           throw Error(a(326))
       }
       return null !== Mu && e === Pu && --e, e
     }

     function es(e, t) {
       if (50 < Qu) throw Qu = 0, Zu = null, Error(a(185));
       if (null !== (e = ts(e, t))) {
         var n = Go();
         1073741823 === t ? 0 != (8 & Iu) && 0 == (48 & Iu) ? is(e) : (rs(e), 0 === Iu && Ko()) : rs(e), 0 == (4 & Iu) || 98 !== n && 99 !== n || (null === Ku ? Ku = new Map([
           [e, t]
         ]) : (void 0 === (n = Ku.get(e)) || n > t) && Ku.set(e, t))
       }
     }

     function ts(e, t) {
       e.expirationTime < t && (e.expirationTime = t);
       var n = e.alternate;
       null !== n && n.expirationTime < t && (n.expirationTime = t);
       var r = e.return,
         o = null;
       if (null === r && 3 === e.tag) o = e.stateNode;
       else
         for (; null !== r;) {
           if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
             o = r.stateNode;
             break
           }
           r = r.return
         }
       return null !== o && (Mu === o && (ps(t), 4 === Nu && Us(o, Pu)), Bs(o, t)), o
     }

     function ns(e) {
       var t = e.lastExpiredTime;
       return 0 !== t ? t : zs(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
     }

     function rs(e) {
       if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Yo(is.bind(null, e));
       else {
         var t = ns(e),
           n = e.callbackNode;
         if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
         else {
           var r = Ju();
           if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
             var o = e.callbackPriority;
             if (e.callbackExpirationTime === t && o >= r) return;
             n !== Ro && To(n)
           }
           e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Yo(is.bind(null, e)) : qo(r, os.bind(null, e), {
             timeout: 10 * (1073741821 - t) - Ho()
           }), e.callbackNode = t
         }
       }
     }

     function os(e, t) {
       if ($u = 0, t) return Fs(e, t = Ju()), rs(e), null;
       var n = ns(e);
       if (0 !== n) {
         if (t = e.callbackNode, 0 != (48 & Iu)) throw Error(a(327));
         if (_s(), e === Mu && n === Pu || ss(e, n), null !== Au) {
           var r = Iu;
           Iu |= 16;
           for (var o = cs();;) try {
             hs();
             break
           } catch (t) {
             ls(e, t)
           }
           if (ri(), Iu = r, Cu.current = o, 1 === Nu) throw t = ju, ss(e, n), Us(e, n), rs(e), t;
           if (null === Au) switch (o = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = Nu, Mu = null, r) {
             case 0:
             case 1:
               throw Error(a(345));
             case 2:
               Fs(e, 2 < n ? 2 : n);
               break;
             case 3:
               if (Us(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = vs(o)), 1073741823 === Du && 10 < (o = Bu + 500 - Ho())) {
                 if (Uu) {
                   var i = e.lastPingedTime;
                   if (0 === i || i >= n) {
                     e.lastPingedTime = n, ss(e, n);
                     break
                   }
                 }
                 if (0 !== (i = ns(e)) && i !== n) break;
                 if (0 !== r && r !== n) {
                   e.lastPingedTime = r;
                   break
                 }
                 e.timeoutHandle = er(ys.bind(null, e), o);
                 break
               }
               ys(e);
               break;
             case 4:
               if (Us(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = vs(o)), Uu && (0 === (o = e.lastPingedTime) || o >= n)) {
                 e.lastPingedTime = n, ss(e, n);
                 break
               }
               if (0 !== (o = ns(e)) && o !== n) break;
               if (0 !== r && r !== n) {
                 e.lastPingedTime = r;
                 break
               }
               if (1073741823 !== Ru ? r = 10 * (1073741821 - Ru) - Ho() : 1073741823 === Du ? r = 0 : (r = 10 * (1073741821 - Du) - 5e3, 0 > (r = (o = Ho()) - r) && (r = 0), (n = 10 * (1073741821 - n) - o) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Tu(r / 1960)) - r) && (r = n)), 10 < r) {
                 e.timeoutHandle = er(ys.bind(null, e), r);
                 break
               }
               ys(e);
               break;
             case 5:
               if (1073741823 !== Du && null !== Lu) {
                 i = Du;
                 var u = Lu;
                 if (0 >= (r = 0 | u.busyMinDurationMs) ? r = 0 : (o = 0 | u.busyDelayMs, r = (i = Ho() - (10 * (1073741821 - i) - (0 | u.timeoutMs || 5e3))) <= o ? 0 : o + r - i), 10 < r) {
                   Us(e, n), e.timeoutHandle = er(ys.bind(null, e), r);
                   break
                 }
               }
               ys(e);
               break;
             default:
               throw Error(a(329))
           }
           if (rs(e), e.callbackNode === t) return os.bind(null, e)
         }
       }
       return null
     }

     function is(e) {
       var t = e.lastExpiredTime;
       if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) ys(e);
       else {
         if (0 != (48 & Iu)) throw Error(a(327));
         if (_s(), e === Mu && t === Pu || ss(e, t), null !== Au) {
           var n = Iu;
           Iu |= 16;
           for (var r = cs();;) try {
             ds();
             break
           } catch (t) {
             ls(e, t)
           }
           if (ri(), Iu = n, Cu.current = r, 1 === Nu) throw n = ju, ss(e, t), Us(e, t), rs(e), n;
           if (null !== Au) throw Error(a(261));
           e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Mu = null, ys(e), rs(e)
         }
       }
       return null
     }

     function as(e, t) {
       var n = Iu;
       Iu |= 1;
       try {
         return e(t)
       } finally {
         0 === (Iu = n) && Ko()
       }
     }

     function us(e, t) {
       var n = Iu;
       Iu &= -2, Iu |= 8;
       try {
         return e(t)
       } finally {
         0 === (Iu = n) && Ko()
       }
     }

     function ss(e, t) {
       e.finishedWork = null, e.finishedExpirationTime = 0;
       var n = e.timeoutHandle;
       if (-1 !== n && (e.timeoutHandle = -1, tr(n)), null !== Au)
         for (n = Au.return; null !== n;) {
           var r = n;
           switch (r.tag) {
             case 1:
               var o = r.type.childContextTypes;
               null != o && yo();
               break;
             case 3:
               Fi(), bo();
               break;
             case 5:
               Gi(r);
               break;
             case 4:
               Fi();
               break;
             case 13:
             case 19:
               lo(Wi);
               break;
             case 10:
               ii(r)
           }
           n = n.return
         }
       Mu = e, Au = Ps(e.current, null), Pu = t, Nu = 0, ju = null, Ru = Du = 1073741823, Lu = null, zu = 0, Uu = !1
     }

     function ls(e, t) {
       for (;;) {
         try {
           if (ri(), fa(), null === Au || null === Au.return) return Nu = 1, ju = t, null;
           e: {
             var n = e,
               r = Au.return,
               o = Au,
               i = t;
             if (t = Pu, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== i && "object" == typeof i && "function" == typeof i.then) {
               var a = i,
                 u = 0 != (1 & Wi.current),
                 s = r;
               do {
                 var l;
                 if (l = 13 === s.tag) {
                   var c = s.memoizedState;
                   if (null !== c) l = null !== c.dehydrated;
                   else {
                     var f = s.memoizedProps;
                     l = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !u)
                   }
                 }
                 if (l) {
                   var p = s.updateQueue;
                   if (null === p) {
                     var d = new Set;
                     d.add(a), s.updateQueue = d
                   } else p.add(a);
                   if (0 == (2 & s.mode)) {
                     if (s.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag)
                       if (null === o.alternate) o.tag = 17;
                       else {
                         var h = pi(1073741823, null);
                         h.tag = 2, hi(o, h)
                       } o.expirationTime = 1073741823;
                     break e
                   }
                   i = void 0, o = t;
                   var m = n.pingCache;
                   if (null === m ? (m = n.pingCache = new Eu, i = new Set, m.set(a, i)) : void 0 === (i = m.get(a)) && (i = new Set, m.set(a, i)), !i.has(o)) {
                     i.add(o);
                     var g = xs.bind(null, n, a, o);
                     a.then(g, g)
                   }
                   s.effectTag |= 4096, s.expirationTime = t;
                   break e
                 }
                 s = s.return
               } while (null !== s);
               i = Error(($(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + J(o))
             }
             5 !== Nu && (Nu = 2),
               i = lu(i, o),
               s = r;do {
               switch (s.tag) {
                 case 3:
                   a = i, s.effectTag |= 4096, s.expirationTime = t, mi(s, Su(s, a, t));
                   break e;
                 case 1:
                   a = i;
                   var v = s.type,
                     y = s.stateNode;
                   if (0 == (64 & s.effectTag) && ("function" == typeof v.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === Wu || !Wu.has(y)))) {
                     s.effectTag |= 4096, s.expirationTime = t, mi(s, ku(s, a, t));
                     break e
                   }
               }
               s = s.return
             } while (null !== s)
           }
           Au = gs(Au)
         } catch (e) {
           t = e;
           continue
         }
         break
       }
     }

     function cs() {
       var e = Cu.current;
       return Cu.current = Oa, null === e ? Oa : e
     }

     function fs(e, t) {
       e < Du && 2 < e && (Du = e), null !== t && e < Ru && 2 < e && (Ru = e, Lu = t)
     }

     function ps(e) {
       e > zu && (zu = e)
     }

     function ds() {
       for (; null !== Au;) Au = ms(Au)
     }

     function hs() {
       for (; null !== Au && !Co();) Au = ms(Au)
     }

     function ms(e) {
       var t = xu(e.alternate, e, Pu);
       return e.memoizedProps = e.pendingProps, null === t && (t = gs(e)), Ou.current = null, t
     }

     function gs(e) {
       Au = e;
       do {
         var t = Au.alternate;
         if (e = Au.return, 0 == (2048 & Au.effectTag)) {
           e: {
             var n = t,
               r = Pu,
               i = (t = Au).pendingProps;
             switch (t.tag) {
               case 2:
               case 16:
                 break;
               case 15:
               case 0:
                 break;
               case 1:
                 vo(t.type) && yo();
                 break;
               case 3:
                 Fi(), bo(), (i = t.stateNode).pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (null === n || null === n.child) && za(t) && au(t);
                 break;
               case 5:
                 Gi(t), r = Ui(zi.current);
                 var u = t.type;
                 if (null !== n && null != t.stateNode) Ja(n, t, u, i, r), n.ref !== t.ref && (t.effectTag |= 128);
                 else if (i) {
                   var s = Ui(Ri.current);
                   if (za(t)) {
                     var l = (i = t).stateNode;
                     n = i.type;
                     var c = i.memoizedProps,
                       f = r;
                     switch (l[ir] = i, l[ar] = c, u = void 0, r = l, n) {
                       case "iframe":
                       case "object":
                       case "embed":
                         xn("load", r);
                         break;
                       case "video":
                       case "audio":
                         for (l = 0; l < et.length; l++) xn(et[l], r);
                         break;
                       case "source":
                         xn("error", r);
                         break;
                       case "img":
                       case "image":
                       case "link":
                         xn("error", r), xn("load", r);
                         break;
                       case "form":
                         xn("reset", r), xn("submit", r);
                         break;
                       case "details":
                         xn("toggle", r);
                         break;
                       case "input":
                         Ce(r, c), xn("invalid", r), Gn(f, "onChange");
                         break;
                       case "select":
                         r._wrapperState = {
                           wasMultiple: !!c.multiple
                         }, xn("invalid", r), Gn(f, "onChange");
                         break;
                       case "textarea":
                         De(r, c), xn("invalid", r), Gn(f, "onChange")
                     }
                     for (u in Fn(n, c), l = null, c) c.hasOwnProperty(u) && (s = c[u], "children" === u ? "string" == typeof s ? r.textContent !== s && (l = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (l = ["children", "" + s]) : d.hasOwnProperty(u) && null != s && Gn(f, u));
                     switch (n) {
                       case "input":
                         ke(r), Me(r, c, !0);
                         break;
                       case "textarea":
                         ke(r), Le(r);
                         break;
                       case "select":
                       case "option":
                         break;
                       default:
                         "function" == typeof c.onClick && (r.onclick = Wn)
                     }
                     u = l, i.updateQueue = u, (i = null !== u) && au(t)
                   } else {
                     n = t, f = u, c = i, l = 9 === r.nodeType ? r : r.ownerDocument, s === ze && (s = Be(f)), s === ze ? "script" === f ? ((c = l.createElement("div")).innerHTML = "<script><\/script>", l = c.removeChild(c.firstChild)) : "string" == typeof c.is ? l = l.createElement(f, {
                       is: c.is
                     }) : (l = l.createElement(f), "select" === f && (f = l, c.multiple ? f.multiple = !0 : c.size && (f.size = c.size))) : l = l.createElementNS(s, f), (c = l)[ir] = n, c[ar] = i, $a(c, t), t.stateNode = c;
                     var p = r,
                       h = Hn(f = u, n = i);
                     switch (f) {
                       case "iframe":
                       case "object":
                       case "embed":
                         xn("load", c), r = n;
                         break;
                       case "video":
                       case "audio":
                         for (r = 0; r < et.length; r++) xn(et[r], c);
                         r = n;
                         break;
                       case "source":
                         xn("error", c), r = n;
                         break;
                       case "img":
                       case "image":
                       case "link":
                         xn("error", c), xn("load", c), r = n;
                         break;
                       case "form":
                         xn("reset", c), xn("submit", c), r = n;
                         break;
                       case "details":
                         xn("toggle", c), r = n;
                         break;
                       case "input":
                         Ce(c, n), r = Te(c, n), xn("invalid", c), Gn(p, "onChange");
                         break;
                       case "option":
                         r = Pe(c, n);
                         break;
                       case "select":
                         c._wrapperState = {
                           wasMultiple: !!n.multiple
                         }, r = o({}, n, {
                           value: void 0
                         }), xn("invalid", c), Gn(p, "onChange");
                         break;
                       case "textarea":
                         De(c, n), r = je(c, n), xn("invalid", c), Gn(p, "onChange");
                         break;
                       default:
                         r = n
                     }
                     Fn(f, r), l = void 0, s = f;
                     var m = c,
                       g = r;
                     for (l in g)
                       if (g.hasOwnProperty(l)) {
                         var v = g[l];
                         "style" === l ? Un(m, v) : "dangerouslySetInnerHTML" === l ? null != (v = v ? v.__html : void 0) && Ge(m, v) : "children" === l ? "string" == typeof v ? ("textarea" !== s || "" !== v) && We(m, v) : "number" == typeof v && We(m, "" + v) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (d.hasOwnProperty(l) ? null != v && Gn(p, l) : null != v && Ee(m, l, v, h))
                       } switch (f) {
                       case "input":
                         ke(c), Me(c, n, !1);
                         break;
                       case "textarea":
                         ke(c), Le(c);
                         break;
                       case "option":
                         null != n.value && c.setAttribute("value", "" + _e(n.value));
                         break;
                       case "select":
                         (r = c).multiple = !!n.multiple, null != (c = n.value) ? Ne(r, !!n.multiple, c, !1) : null != n.defaultValue && Ne(r, !!n.multiple, n.defaultValue, !0);
                         break;
                       default:
                         "function" == typeof r.onClick && (c.onclick = Wn)
                     }(i = Jn(u, i)) && au(t)
                   }
                   null !== t.ref && (t.effectTag |= 128)
                 } else if (null === t.stateNode) throw Error(a(166));
                 break;
               case 6:
                 if (n && null != t.stateNode) Xa(0, t, n.memoizedProps, i);
                 else {
                   if ("string" != typeof i && null === t.stateNode) throw Error(a(166));
                   r = Ui(zi.current), Ui(Ri.current), za(t) ? (u = (i = t).stateNode, r = i.memoizedProps, u[ir] = i, (i = u.nodeValue !== r) && au(t)) : (u = t, (i = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(i))[ir] = u, t.stateNode = i)
                 }
                 break;
               case 11:
                 break;
               case 13:
                 if (lo(Wi), i = t.memoizedState, 0 != (64 & t.effectTag)) {
                   t.expirationTime = r;
                   break e
                 }
                 i = null !== i, u = !1, null === n ? void 0 !== t.memoizedProps.fallback && za(t) : (u = null !== (r = n.memoizedState), i || null === r || null !== (r = n.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = r, r.nextEffect = c) : (t.firstEffect = t.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), i && !u && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Wi.current) ? 0 === Nu && (Nu = 3) : (0 !== Nu && 3 !== Nu || (Nu = 4), 0 !== zu && null !== Mu && (Us(Mu, Pu), Bs(Mu, zu)))), (i || u) && (t.effectTag |= 4);
                 break;
               case 7:
               case 8:
               case 12:
                 break;
               case 4:
                 Fi();
                 break;
               case 10:
                 ii(t);
                 break;
               case 9:
               case 14:
                 break;
               case 17:
                 vo(t.type) && yo();
                 break;
               case 19:
                 if (lo(Wi), null === (i = t.memoizedState)) break;
                 if (u = 0 != (64 & t.effectTag), null === (c = i.rendering)) {
                   if (u) uu(i, !1);
                   else if (0 !== Nu || null !== n && 0 != (64 & n.effectTag))
                     for (n = t.child; null !== n;) {
                       if (null !== (c = Vi(n))) {
                         for (t.effectTag |= 64, uu(i, !1), null !== (u = c.updateQueue) && (t.updateQueue = u, t.effectTag |= 4), null === i.lastEffect && (t.firstEffect = null), t.lastEffect = i.lastEffect, i = r, u = t.child; null !== u;) n = i, (r = u).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, null === (c = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = c.childExpirationTime, r.expirationTime = c.expirationTime, r.child = c.child, r.memoizedProps = c.memoizedProps, r.memoizedState = c.memoizedState, r.updateQueue = c.updateQueue, n = c.dependencies, r.dependencies = null === n ? null : {
                           expirationTime: n.expirationTime,
                           firstContext: n.firstContext,
                           responders: n.responders
                         }), u = u.sibling;
                         co(Wi, 1 & Wi.current | 2), t = t.child;
                         break e
                       }
                       n = n.sibling
                     }
                 } else {
                   if (!u)
                     if (null !== (n = Vi(c))) {
                       if (t.effectTag |= 64, u = !0, null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), uu(i, !0), null === i.tail && "hidden" === i.tailMode && !c.alternate) {
                         null !== (t = t.lastEffect = i.lastEffect) && (t.nextEffect = null);
                         break
                       }
                     } else Ho() > i.tailExpiration && 1 < r && (t.effectTag |= 64, u = !0, uu(i, !1), t.expirationTime = t.childExpirationTime = r - 1);
                   i.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (r = i.last) ? r.sibling = c : t.child = c, i.last = c)
                 }
                 if (null !== i.tail) {
                   0 === i.tailExpiration && (i.tailExpiration = Ho() + 500), r = i.tail, i.rendering = r, i.tail = r.sibling, i.lastEffect = t.lastEffect, r.sibling = null, i = Wi.current, co(Wi, i = u ? 1 & i | 2 : 1 & i), t = r;
                   break e
                 }
                 break;
               case 20:
               case 21:
                 break;
               default:
                 throw Error(a(156, t.tag))
             }
             t = null
           }
           if (i = Au, 1 === Pu || 1 !== i.childExpirationTime) {
             for (u = 0, r = i.child; null !== r;)(n = r.expirationTime) > u && (u = n), (c = r.childExpirationTime) > u && (u = c), r = r.sibling;
             i.childExpirationTime = u
           }
           if (null !== t) return t;null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Au.firstEffect), null !== Au.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Au.firstEffect), e.lastEffect = Au.lastEffect), 1 < Au.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Au : e.firstEffect = Au, e.lastEffect = Au))
         }
         else {
           if (null !== (t = su(Au))) return t.effectTag &= 2047, t;
           null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
         }
         if (null !== (t = Au.sibling)) return t;
         Au = e
       } while (null !== Au);
       return 0 === Nu && (Nu = 5), null
     }

     function vs(e) {
       var t = e.expirationTime;
       return t > (e = e.childExpirationTime) ? t : e
     }

     function ys(e) {
       var t = Go();
       return Vo(99, bs.bind(null, e, t)), null
     }

     function bs(e, t) {
       do {
         _s()
       } while (null !== qu);
       if (0 != (48 & Iu)) throw Error(a(327));
       var n = e.finishedWork,
         r = e.finishedExpirationTime;
       if (null === n) return null;
       if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(a(177));
       e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
       var o = vs(n);
       if (e.firstPendingTime = o, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Mu && (Au = Mu = null, Pu = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, o = n.firstEffect) : o = n : o = n.firstEffect, null !== o) {
         var i = Iu;
         Iu |= 32, Ou.current = null, Zn = kn;
         var u = Kn();
         if (Qn(u)) {
           if ("selectionStart" in u) var s = {
             start: u.selectionStart,
             end: u.selectionEnd
           };
           else e: {
             var l = (s = (s = u.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
             if (l && 0 !== l.rangeCount) {
               s = l.anchorNode;
               var c = l.anchorOffset,
                 f = l.focusNode;
               l = l.focusOffset;
               try {
                 s.nodeType, f.nodeType
               } catch (e) {
                 s = null;
                 break e
               }
               var p = 0,
                 d = -1,
                 h = -1,
                 m = 0,
                 g = 0,
                 v = u,
                 y = null;
               t: for (;;) {
                 for (var b; v !== s || 0 !== c && 3 !== v.nodeType || (d = p + c), v !== f || 0 !== l && 3 !== v.nodeType || (h = p + l), 3 === v.nodeType && (p += v.nodeValue.length), null !== (b = v.firstChild);) y = v, v = b;
                 for (;;) {
                   if (v === u) break t;
                   if (y === s && ++m === c && (d = p), y === f && ++g === l && (h = p), null !== (b = v.nextSibling)) break;
                   y = (v = y).parentNode
                 }
                 v = b
               }
               s = -1 === d || -1 === h ? null : {
                 start: d,
                 end: h
               }
             } else s = null
           }
           s = s || {
             start: 0,
             end: 0
           }
         } else s = null;
         $n = {
           focusedElem: u,
           selectionRange: s
         }, kn = !1, Fu = o;
         do {
           try {
             ws()
           } catch (e) {
             if (null === Fu) throw Error(a(330));
             ks(Fu, e), Fu = Fu.nextEffect
           }
         } while (null !== Fu);
         Fu = o;
         do {
           try {
             for (u = e, s = t; null !== Fu;) {
               var w = Fu.effectTag;
               if (16 & w && We(Fu.stateNode, ""), 128 & w) {
                 var _ = Fu.alternate;
                 if (null !== _) {
                   var E = _.ref;
                   null !== E && ("function" == typeof E ? E(null) : E.current = null)
                 }
               }
               switch (1038 & w) {
                 case 2:
                   yu(Fu), Fu.effectTag &= -3;
                   break;
                 case 6:
                   yu(Fu), Fu.effectTag &= -3, wu(Fu.alternate, Fu);
                   break;
                 case 1024:
                   Fu.effectTag &= -1025;
                   break;
                 case 1028:
                   Fu.effectTag &= -1025, wu(Fu.alternate, Fu);
                   break;
                 case 4:
                   wu(Fu.alternate, Fu);
                   break;
                 case 8:
                   bu(u, c = Fu, s), gu(c)
               }
               Fu = Fu.nextEffect
             }
           } catch (e) {
             if (null === Fu) throw Error(a(330));
             ks(Fu, e), Fu = Fu.nextEffect
           }
         } while (null !== Fu);
         if (E = $n, _ = Kn(), w = E.focusedElem, s = E.selectionRange, _ !== w && w && w.ownerDocument && function e(t, n) {
             return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
           }(w.ownerDocument.documentElement, w)) {
           null !== s && Qn(w) && (_ = s.start, void 0 === (E = s.end) && (E = _), "selectionStart" in w ? (w.selectionStart = _, w.selectionEnd = Math.min(E, w.value.length)) : (E = (_ = w.ownerDocument || document) && _.defaultView || window).getSelection && (E = E.getSelection(), c = w.textContent.length, u = Math.min(s.start, c), s = void 0 === s.end ? u : Math.min(s.end, c), !E.extend && u > s && (c = s, s = u, u = c), c = Yn(w, u), f = Yn(w, s), c && f && (1 !== E.rangeCount || E.anchorNode !== c.node || E.anchorOffset !== c.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((_ = _.createRange()).setStart(c.node, c.offset), E.removeAllRanges(), u > s ? (E.addRange(_), E.extend(f.node, f.offset)) : (_.setEnd(f.node, f.offset), E.addRange(_))))), _ = [];
           for (E = w; E = E.parentNode;) 1 === E.nodeType && _.push({
             element: E,
             left: E.scrollLeft,
             top: E.scrollTop
           });
           for ("function" == typeof w.focus && w.focus(), w = 0; w < _.length; w++)(E = _[w]).element.scrollLeft = E.left, E.element.scrollTop = E.top
         }
         $n = null, kn = !!Zn, Zn = null, e.current = n, Fu = o;
         do {
           try {
             for (w = r; null !== Fu;) {
               var S = Fu.effectTag;
               if (36 & S) {
                 var k = Fu.alternate;
                 switch (E = w, (_ = Fu).tag) {
                   case 0:
                   case 11:
                   case 15:
                     hu(16, 32, _);
                     break;
                   case 1:
                     var x = _.stateNode;
                     if (4 & _.effectTag)
                       if (null === k) x.componentDidMount();
                       else {
                         var T = _.elementType === _.type ? k.memoizedProps : Jo(_.type, k.memoizedProps);
                         x.componentDidUpdate(T, k.memoizedState, x.__reactInternalSnapshotBeforeUpdate)
                       } var C = _.updateQueue;
                     null !== C && bi(0, C, x);
                     break;
                   case 3:
                     var O = _.updateQueue;
                     if (null !== O) {
                       if (u = null, null !== _.child) switch (_.child.tag) {
                         case 5:
                           u = _.child.stateNode;
                           break;
                         case 1:
                           u = _.child.stateNode
                       }
                       bi(0, O, u)
                     }
                     break;
                   case 5:
                     var I = _.stateNode;
                     null === k && 4 & _.effectTag && Jn(_.type, _.memoizedProps) && I.focus();
                     break;
                   case 6:
                   case 4:
                   case 12:
                     break;
                   case 13:
                     if (null === _.memoizedState) {
                       var M = _.alternate;
                       if (null !== M) {
                         var A = M.memoizedState;
                         if (null !== A) {
                           var P = A.dehydrated;
                           null !== P && Tt(P)
                         }
                       }
                     }
                     break;
                   case 19:
                   case 17:
                   case 20:
                   case 21:
                     break;
                   default:
                     throw Error(a(163))
                 }
               }
               if (128 & S) {
                 _ = void 0;
                 var N = Fu.ref;
                 if (null !== N) {
                   var j = Fu.stateNode;
                   switch (Fu.tag) {
                     case 5:
                       _ = j;
                       break;
                     default:
                       _ = j
                   }
                   "function" == typeof N ? N(_) : N.current = _
                 }
               }
               Fu = Fu.nextEffect
             }
           } catch (e) {
             if (null === Fu) throw Error(a(330));
             ks(Fu, e), Fu = Fu.nextEffect
           }
         } while (null !== Fu);
         Fu = null, Lo(), Iu = i
       } else e.current = n;
       if (Vu) Vu = !1, qu = e, Yu = t;
       else
         for (Fu = o; null !== Fu;) t = Fu.nextEffect, Fu.nextEffect = null, Fu = t;
       if (0 === (t = e.firstPendingTime) && (Wu = null), 1073741823 === t ? e === Zu ? Qu++ : (Qu = 0, Zu = e) : Qu = 0, "function" == typeof Cs && Cs(n.stateNode, r), rs(e), Hu) throw Hu = !1, e = Gu, Gu = null, e;
       return 0 != (8 & Iu) ? null : (Ko(), null)
     }

     function ws() {
       for (; null !== Fu;) {
         var e = Fu.effectTag;
         0 != (256 & e) && du(Fu.alternate, Fu), 0 == (512 & e) || Vu || (Vu = !0, qo(97, (function() {
           return _s(), null
         }))), Fu = Fu.nextEffect
       }
     }

     function _s() {
       if (90 !== Yu) {
         var e = 97 < Yu ? 97 : Yu;
         return Yu = 90, Vo(e, Es)
       }
     }

     function Es() {
       if (null === qu) return !1;
       var e = qu;
       if (qu = null, 0 != (48 & Iu)) throw Error(a(331));
       var t = Iu;
       for (Iu |= 32, e = e.current.firstEffect; null !== e;) {
         try {
           var n = e;
           if (0 != (512 & n.effectTag)) switch (n.tag) {
             case 0:
             case 11:
             case 15:
               hu(128, 0, n), hu(0, 64, n)
           }
         } catch (t) {
           if (null === e) throw Error(a(330));
           ks(e, t)
         }
         n = e.nextEffect, e.nextEffect = null, e = n
       }
       return Iu = t, Ko(), !0
     }

     function Ss(e, t, n) {
       hi(e, t = Su(e, t = lu(n, t), 1073741823)), null !== (e = ts(e, 1073741823)) && rs(e)
     }

     function ks(e, t) {
       if (3 === e.tag) Ss(e, e, t);
       else
         for (var n = e.return; null !== n;) {
           if (3 === n.tag) {
             Ss(n, e, t);
             break
           }
           if (1 === n.tag) {
             var r = n.stateNode;
             if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Wu || !Wu.has(r))) {
               hi(n, e = ku(n, e = lu(t, e), 1073741823)), null !== (n = ts(n, 1073741823)) && rs(n);
               break
             }
           }
           n = n.return
         }
     }

     function xs(e, t, n) {
       var r = e.pingCache;
       null !== r && r.delete(t), Mu === e && Pu === n ? 4 === Nu || 3 === Nu && 1073741823 === Du && Ho() - Bu < 500 ? ss(e, Pu) : Uu = !0 : zs(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), rs(e)))
     }

     function Ts(e, t) {
       var n = e.stateNode;
       null !== n && n.delete(t), 0 === (t = 0) && (t = Xu(t = Ju(), e, null)), null !== (e = ts(e, t)) && rs(e)
     }
     xu = function(e, t, n) {
       var r = t.expirationTime;
       if (null !== e) {
         var o = t.pendingProps;
         if (e.memoizedProps !== o || ho.current) Fa = !0;
         else {
           if (r < n) {
             switch (Fa = !1, t.tag) {
               case 3:
                 Za(t), Ua();
                 break;
               case 5:
                 if (Hi(t), 4 & t.mode && 1 !== n && o.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                 break;
               case 1:
                 vo(t.type) && Eo(t);
                 break;
               case 4:
                 Bi(t, t.stateNode.containerInfo);
                 break;
               case 10:
                 oi(t, t.memoizedProps.value);
                 break;
               case 13:
                 if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? tu(e, t, n) : (co(Wi, 1 & Wi.current), null !== (t = iu(e, t, n)) ? t.sibling : null);
                 co(Wi, 1 & Wi.current);
                 break;
               case 19:
                 if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                   if (r) return ou(e, t, n);
                   t.effectTag |= 64
                 }
                 if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null), co(Wi, Wi.current), !r) return null
             }
             return iu(e, t, n)
           }
           Fa = !1
         }
       } else Fa = !1;
       switch (t.expirationTime = 0, t.tag) {
         case 2:
           if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, o = go(t, po.current), ui(t, n), o = ca(null, t, r, e, o, n), t.effectTag |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
             if (t.tag = 1, fa(), vo(r)) {
               var i = !0;
               Eo(t)
             } else i = !1;
             t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null;
             var u = r.getDerivedStateFromProps;
             "function" == typeof u && Si(t, r, u, e), o.updater = ki, t.stateNode = o, o._reactInternalFiber = t, Oi(t, r, e, n), t = Qa(null, t, r, !0, i, n)
           } else t.tag = 0, Ha(null, t, o, n), t = t.child;
           return t;
         case 16:
           if (o = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
               if (-1 === e._status) {
                 e._status = 0;
                 var t = e._ctor;
                 t = t(), e._result = t, t.then((function(t) {
                   0 === e._status && (t = t.default, e._status = 1, e._result = t)
                 }), (function(t) {
                   0 === e._status && (e._status = 2, e._result = t)
                 }))
               }
             }(o), 1 !== o._status) throw o._result;
           switch (o = o._result, t.type = o, i = t.tag = function(e) {
             if ("function" == typeof e) return As(e) ? 1 : 0;
             if (null != e) {
               if ((e = e.$$typeof) === W) return 11;
               if (e === Y) return 14
             }
             return 2
           }(o), e = Jo(o, e), i) {
             case 0:
               t = Ya(null, t, o, e, n);
               break;
             case 1:
               t = Ka(null, t, o, e, n);
               break;
             case 11:
               t = Ga(null, t, o, e, n);
               break;
             case 14:
               t = Wa(null, t, o, Jo(o.type, e), r, n);
               break;
             default:
               throw Error(a(306, o, ""))
           }
           return t;
         case 0:
           return r = t.type, o = t.pendingProps, Ya(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
         case 1:
           return r = t.type, o = t.pendingProps, Ka(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
         case 3:
           if (Za(t), null === (r = t.updateQueue)) throw Error(a(282));
           if (o = null !== (o = t.memoizedState) ? o.element : null, yi(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === o) Ua(), t = iu(e, t, n);
           else {
             if ((o = t.stateNode.hydrate) && (Pa = nr(t.stateNode.containerInfo.firstChild), Aa = t, o = Na = !0), o)
               for (n = ji(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
             else Ha(e, t, r, n), Ua();
             t = t.child
           }
           return t;
         case 5:
           return Hi(t), null === e && Ra(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, u = o.children, Xn(r, o) ? u = null : null !== i && Xn(r, i) && (t.effectTag |= 16), qa(e, t), 4 & t.mode && 1 !== n && o.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Ha(e, t, u, n), t = t.child), t;
         case 6:
           return null === e && Ra(t), null;
         case 13:
           return tu(e, t, n);
         case 4:
           return Bi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ni(t, null, r, n) : Ha(e, t, r, n), t.child;
         case 11:
           return r = t.type, o = t.pendingProps, Ga(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
         case 7:
           return Ha(e, t, t.pendingProps, n), t.child;
         case 8:
         case 12:
           return Ha(e, t, t.pendingProps.children, n), t.child;
         case 10:
           e: {
             if (r = t.type._context, o = t.pendingProps, u = t.memoizedProps, oi(t, i = o.value), null !== u) {
               var s = u.value;
               if (0 === (i = Zr(s, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, i) : 1073741823))) {
                 if (u.children === o.children && !ho.current) {
                   t = iu(e, t, n);
                   break e
                 }
               } else
                 for (null !== (s = t.child) && (s.return = t); null !== s;) {
                   var l = s.dependencies;
                   if (null !== l) {
                     u = s.child;
                     for (var c = l.firstContext; null !== c;) {
                       if (c.context === r && 0 != (c.observedBits & i)) {
                         1 === s.tag && ((c = pi(n, null)).tag = 2, hi(s, c)), s.expirationTime < n && (s.expirationTime = n), null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n), ai(s.return, n), l.expirationTime < n && (l.expirationTime = n);
                         break
                       }
                       c = c.next
                     }
                   } else u = 10 === s.tag && s.type === t.type ? null : s.child;
                   if (null !== u) u.return = s;
                   else
                     for (u = s; null !== u;) {
                       if (u === t) {
                         u = null;
                         break
                       }
                       if (null !== (s = u.sibling)) {
                         s.return = u.return, u = s;
                         break
                       }
                       u = u.return
                     }
                   s = u
                 }
             }
             Ha(e, t, o.children, n),
               t = t.child
           }
           return t;
         case 9:
           return o = t.type, r = (i = t.pendingProps).children, ui(t, n), r = r(o = si(o, i.unstable_observedBits)), t.effectTag |= 1, Ha(e, t, r, n), t.child;
         case 14:
           return i = Jo(o = t.type, t.pendingProps), Wa(e, t, o, i = Jo(o.type, i), r, n);
         case 15:
           return Va(e, t, t.type, t.pendingProps, r, n);
         case 17:
           return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Jo(r, o), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, vo(r) ? (e = !0, Eo(t)) : e = !1, ui(t, n), Ti(t, r, o), Oi(t, r, o, n), Qa(null, t, r, !0, e, n);
         case 19:
           return ou(e, t, n)
       }
       throw Error(a(156, t.tag))
     };
     var Cs = null,
       Os = null;

     function Is(e, t, n, r) {
       this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
     }

     function Ms(e, t, n, r) {
       return new Is(e, t, n, r)
     }

     function As(e) {
       return !(!(e = e.prototype) || !e.isReactComponent)
     }

     function Ps(e, t) {
       var n = e.alternate;
       return null === n ? ((n = Ms(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
         expirationTime: t.expirationTime,
         firstContext: t.firstContext,
         responders: t.responders
       }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
     }

     function Ns(e, t, n, r, o, i) {
       var u = 2;
       if (r = e, "function" == typeof e) As(e) && (u = 1);
       else if ("string" == typeof e) u = 5;
       else e: switch (e) {
           case z:
             return js(n.children, o, i, t);
           case G:
             u = 8, o |= 7;
             break;
           case U:
             u = 8, o |= 1;
             break;
           case B:
             return (e = Ms(12, n, t, 8 | o)).elementType = B, e.type = B, e.expirationTime = i, e;
           case V:
             return (e = Ms(13, n, t, o)).type = V, e.elementType = V, e.expirationTime = i, e;
           case q:
             return (e = Ms(19, n, t, o)).elementType = q, e.expirationTime = i, e;
           default:
             if ("object" == typeof e && null !== e) switch (e.$$typeof) {
               case F:
                 u = 10;
                 break e;
               case H:
                 u = 9;
                 break e;
               case W:
                 u = 11;
                 break e;
               case Y:
                 u = 14;
                 break e;
               case K:
                 u = 16, r = null;
                 break e
             }
             throw Error(a(130, null == e ? e : typeof e, ""))
         }
       return (t = Ms(u, n, t, o)).elementType = e, t.type = r, t.expirationTime = i, t
     }

     function js(e, t, n, r) {
       return (e = Ms(7, e, r, t)).expirationTime = n, e
     }

     function Ds(e, t, n) {
       return (e = Ms(6, e, null, t)).expirationTime = n, e
     }

     function Rs(e, t, n) {
       return (t = Ms(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
         containerInfo: e.containerInfo,
         pendingChildren: null,
         implementation: e.implementation
       }, t
     }

     function Ls(e, t, n) {
       this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
     }

     function zs(e, t) {
       var n = e.firstSuspendedTime;
       return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
     }

     function Us(e, t) {
       var n = e.firstSuspendedTime,
         r = e.lastSuspendedTime;
       n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
     }

     function Bs(e, t) {
       t > e.firstPendingTime && (e.firstPendingTime = t);
       var n = e.firstSuspendedTime;
       0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
     }

     function Fs(e, t) {
       var n = e.lastExpiredTime;
       (0 === n || n > t) && (e.lastExpiredTime = t)
     }

     function Hs(e, t, n, r) {
       var o = t.current,
         i = Ju(),
         u = _i.suspense;
       i = Xu(i, o, u);
       e: if (n) {
         t: {
           if (tt(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(a(170));
           var s = n;do {
             switch (s.tag) {
               case 3:
                 s = s.stateNode.context;
                 break t;
               case 1:
                 if (vo(s.type)) {
                   s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                   break t
                 }
             }
             s = s.return
           } while (null !== s);
           throw Error(a(171))
         }
         if (1 === n.tag) {
           var l = n.type;
           if (vo(l)) {
             n = _o(n, l, s);
             break e
           }
         }
         n = s
       }
       else n = fo;
       return null === t.context ? t.context = n : t.pendingContext = n, (t = pi(i, u)).payload = {
         element: e
       }, null !== (r = void 0 === r ? null : r) && (t.callback = r), hi(o, t), es(o, i), i
     }

     function Gs(e) {
       if (!(e = e.current).child) return null;
       switch (e.child.tag) {
         case 5:
         default:
           return e.child.stateNode
       }
     }

     function Ws(e, t) {
       null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
     }

     function Vs(e, t) {
       Ws(e, t), (e = e.alternate) && Ws(e, t)
     }

     function qs(e, t, n) {
       var r = new Ls(e, t, n = null != n && !0 === n.hydrate),
         o = Ms(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
       r.current = o, o.stateNode = r, e[ur] = r.current, n && 0 !== t && function(e) {
         var t = jn(e);
         gt.forEach((function(n) {
           Dn(n, e, t)
         })), vt.forEach((function(n) {
           Dn(n, e, t)
         }))
       }(9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
     }

     function Ys(e) {
       return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
     }

     function Ks(e, t, n, r, o) {
       var i = n._reactRootContainer;
       if (i) {
         var a = i._internalRoot;
         if ("function" == typeof o) {
           var u = o;
           o = function() {
             var e = Gs(a);
             u.call(e)
           }
         }
         Hs(t, a, e, o)
       } else {
         if (i = n._reactRootContainer = function(e, t) {
             if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
               for (var n; n = e.lastChild;) e.removeChild(n);
             return new qs(e, 0, t ? {
               hydrate: !0
             } : void 0)
           }(n, r), a = i._internalRoot, "function" == typeof o) {
           var s = o;
           o = function() {
             var e = Gs(a);
             s.call(e)
           }
         }
         us((function() {
           Hs(t, a, e, o)
         }))
       }
       return Gs(a)
     }

     function Qs(e, t, n) {
       var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
       return {
         $$typeof: L,
         key: null == r ? null : "" + r,
         children: e,
         containerInfo: t,
         implementation: n
       }
     }

     function Zs(e, t) {
       var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
       if (!Ys(t)) throw Error(a(200));
       return Qs(e, t, null, n)
     }
     qs.prototype.render = function(e, t) {
       Hs(e, this._internalRoot, null, void 0 === t ? null : t)
     }, qs.prototype.unmount = function(e) {
       var t = this._internalRoot,
         n = void 0 === e ? null : e,
         r = t.containerInfo;
       Hs(null, t, null, (function() {
         r[ur] = null, null !== n && n()
       }))
     }, it = function(e) {
       if (13 === e.tag) {
         var t = $o(Ju(), 150, 100);
         es(e, t), Vs(e, t)
       }
     }, at = function(e) {
       if (13 === e.tag) {
         Ju();
         var t = Zo++;
         es(e, t), Vs(e, t)
       }
     }, ut = function(e) {
       if (13 === e.tag) {
         var t = Ju();
         es(e, t = Xu(t, e, null)), Vs(e, t)
       }
     }, ee = function(e, t, n) {
       switch (t) {
         case "input":
           if (Ie(e, n), t = n.name, "radio" === n.type && null != t) {
             for (n = e; n.parentNode;) n = n.parentNode;
             for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
               var r = n[t];
               if (r !== e && r.form === e.form) {
                 var o = fr(r);
                 if (!o) throw Error(a(90));
                 xe(r), Ie(r, o)
               }
             }
           }
           break;
         case "textarea":
           Re(e, n);
           break;
         case "select":
           null != (t = n.value) && Ne(e, !!n.multiple, t, !1)
       }
     }, ae = as, ue = function(e, t, n, r) {
       var o = Iu;
       Iu |= 4;
       try {
         return Vo(98, e.bind(null, t, n, r))
       } finally {
         0 === (Iu = o) && Ko()
       }
     }, se = function() {
       0 == (49 & Iu) && (function() {
         if (null !== Ku) {
           var e = Ku;
           Ku = null, e.forEach((function(e, t) {
             Fs(t, e), rs(t)
           })), Ko()
         }
       }(), _s())
     }, le = function(e, t) {
       var n = Iu;
       Iu |= 2;
       try {
         return e(t)
       } finally {
         0 === (Iu = n) && Ko()
       }
     };
     var $s, Js, Xs = {
       createPortal: Zs,
       findDOMNode: function(e) {
         if (null == e) return null;
         if (1 === e.nodeType) return e;
         var t = e._reactInternalFiber;
         if (void 0 === t) {
           if ("function" == typeof e.render) throw Error(a(188));
           throw Error(a(268, Object.keys(e)))
         }
         return e = null === (e = ot(t)) ? null : e.stateNode
       },
       hydrate: function(e, t, n) {
         if (!Ys(t)) throw Error(a(200));
         return Ks(null, e, t, !0, n)
       },
       render: function(e, t, n) {
         if (!Ys(t)) throw Error(a(200));
         return Ks(null, e, t, !1, n)
       },
       unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
         if (!Ys(n)) throw Error(a(200));
         if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
         return Ks(e, t, n, !1, r)
       },
       unmountComponentAtNode: function(e) {
         if (!Ys(e)) throw Error(a(40));
         return !!e._reactRootContainer && (us((function() {
           Ks(null, null, e, !1, (function() {
             e._reactRootContainer = null, e[ur] = null
           }))
         })), !0)
       },
       unstable_createPortal: function() {
         return Zs.apply(void 0, arguments)
       },
       unstable_batchedUpdates: as,
       flushSync: function(e, t) {
         if (0 != (48 & Iu)) throw Error(a(187));
         var n = Iu;
         Iu |= 1;
         try {
           return Vo(99, e.bind(null, t))
         } finally {
           Iu = n, Ko()
         }
       },
       __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
         Events: [lr, cr, fr, A.injectEventPluginsByName, p, Nt, function(e) {
           C(e, Pt)
         }, oe, ie, Mn, M, _s, {
           current: !1
         }]
       }
     };
     Js = ($s = {
       findFiberByHostInstance: sr,
       bundleType: 0,
       version: "16.12.0",
       rendererPackageName: "react-dom"
     }).findFiberByHostInstance,
       function(e) {
         if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
         var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
         if (t.isDisabled || !t.supportsFiber) return !0;
         try {
           var n = t.inject(e);
           Cs = function(e) {
             try {
               t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
             } catch (e) {}
           }, Os = function(e) {
             try {
               t.onCommitFiberUnmount(n, e)
             } catch (e) {}
           }
         } catch (e) {}
       }(o({}, $s, {
         overrideHookState: null,
         overrideProps: null,
         setSuspenseHandler: null,
         scheduleUpdate: null,
         currentDispatcherRef: N.ReactCurrentDispatcher,
         findHostInstanceByFiber: function(e) {
           return null === (e = ot(e)) ? null : e.stateNode
         },
         findFiberByHostInstance: function(e) {
           return Js ? Js(e) : null
         },
         findHostInstancesForRefresh: null,
         scheduleRefresh: null,
         scheduleRoot: null,
         setRefreshHandler: null,
         getCurrentFiber: null
       }));
     var el = {
         default: Xs
       },
       tl = el && Xs || el;
     e.exports = tl.default || tl
   }, function(e, t, n) {
     "use strict";
     e.exports = n(46)
   }, function(e, t, n) {
     "use strict";
     /** @license React v0.18.0
      * scheduler.production.min.js
      *
      * Copyright (c) Facebook, Inc. and its affiliates.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE file in the root directory of this source tree.
      */
     var r, o, i, a, u;
     if (Object.defineProperty(t, "__esModule", {
         value: !0
       }), "undefined" == typeof window || "function" != typeof MessageChannel) {
       var s = null,
         l = null,
         c = function() {
           if (null !== s) try {
             var e = t.unstable_now();
             s(!0, e), s = null
           } catch (e) {
             throw setTimeout(c, 0), e
           }
         },
         f = Date.now();
       t.unstable_now = function() {
         return Date.now() - f
       }, r = function(e) {
         null !== s ? setTimeout(r, 0, e) : (s = e, setTimeout(c, 0))
       }, o = function(e, t) {
         l = setTimeout(e, t)
       }, i = function() {
         clearTimeout(l)
       }, a = function() {
         return !1
       }, u = t.unstable_forceFrameRate = function() {}
     } else {
       var p = window.performance,
         d = window.Date,
         h = window.setTimeout,
         m = window.clearTimeout;
       if ("undefined" != typeof console) {
         var g = window.cancelAnimationFrame;
         "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
       }
       if ("object" == typeof p && "function" == typeof p.now) t.unstable_now = function() {
         return p.now()
       };
       else {
         var v = d.now();
         t.unstable_now = function() {
           return d.now() - v
         }
       }
       var y = !1,
         b = null,
         w = -1,
         _ = 5,
         E = 0;
       a = function() {
         return t.unstable_now() >= E
       }, u = function() {}, t.unstable_forceFrameRate = function(e) {
         0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
       };
       var S = new MessageChannel,
         k = S.port2;
       S.port1.onmessage = function() {
         if (null !== b) {
           var e = t.unstable_now();
           E = e + _;
           try {
             b(!0, e) ? k.postMessage(null) : (y = !1, b = null)
           } catch (e) {
             throw k.postMessage(null), e
           }
         } else y = !1
       }, r = function(e) {
         b = e, y || (y = !0, k.postMessage(null))
       }, o = function(e, n) {
         w = h((function() {
           e(t.unstable_now())
         }), n)
       }, i = function() {
         m(w), w = -1
       }
     }

     function x(e, t) {
       var n = e.length;
       e.push(t);
       e: for (;;) {
         var r = Math.floor((n - 1) / 2),
           o = e[r];
         if (!(void 0 !== o && 0 < O(o, t))) break e;
         e[r] = t, e[n] = o, n = r
       }
     }

     function T(e) {
       return void 0 === (e = e[0]) ? null : e
     }

     function C(e) {
       var t = e[0];
       if (void 0 !== t) {
         var n = e.pop();
         if (n !== t) {
           e[0] = n;
           e: for (var r = 0, o = e.length; r < o;) {
             var i = 2 * (r + 1) - 1,
               a = e[i],
               u = i + 1,
               s = e[u];
             if (void 0 !== a && 0 > O(a, n)) void 0 !== s && 0 > O(s, a) ? (e[r] = s, e[u] = n, r = u) : (e[r] = a, e[i] = n, r = i);
             else {
               if (!(void 0 !== s && 0 > O(s, n))) break e;
               e[r] = s, e[u] = n, r = u
             }
           }
         }
         return t
       }
       return null
     }

     function O(e, t) {
       var n = e.sortIndex - t.sortIndex;
       return 0 !== n ? n : e.id - t.id
     }
     var I = [],
       M = [],
       A = 1,
       P = null,
       N = 3,
       j = !1,
       D = !1,
       R = !1;

     function L(e) {
       for (var t = T(M); null !== t;) {
         if (null === t.callback) C(M);
         else {
           if (!(t.startTime <= e)) break;
           C(M), t.sortIndex = t.expirationTime, x(I, t)
         }
         t = T(M)
       }
     }

     function z(e) {
       if (R = !1, L(e), !D)
         if (null !== T(I)) D = !0, r(U);
         else {
           var t = T(M);
           null !== t && o(z, t.startTime - e)
         }
     }

     function U(e, n) {
       D = !1, R && (R = !1, i()), j = !0;
       var r = N;
       try {
         for (L(n), P = T(I); null !== P && (!(P.expirationTime > n) || e && !a());) {
           var u = P.callback;
           if (null !== u) {
             P.callback = null, N = P.priorityLevel;
             var s = u(P.expirationTime <= n);
             n = t.unstable_now(), "function" == typeof s ? P.callback = s : P === T(I) && C(I), L(n)
           } else C(I);
           P = T(I)
         }
         if (null !== P) var l = !0;
         else {
           var c = T(M);
           null !== c && o(z, c.startTime - n), l = !1
         }
         return l
       } finally {
         P = null, N = r, j = !1
       }
     }

     function B(e) {
       switch (e) {
         case 1:
           return -1;
         case 2:
           return 250;
         case 5:
           return 1073741823;
         case 4:
           return 1e4;
         default:
           return 5e3
       }
     }
     var F = u;
     t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
       switch (e) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
           break;
         default:
           e = 3
       }
       var n = N;
       N = e;
       try {
         return t()
       } finally {
         N = n
       }
     }, t.unstable_next = function(e) {
       switch (N) {
         case 1:
         case 2:
         case 3:
           var t = 3;
           break;
         default:
           t = N
       }
       var n = N;
       N = t;
       try {
         return e()
       } finally {
         N = n
       }
     }, t.unstable_scheduleCallback = function(e, n, a) {
       var u = t.unstable_now();
       if ("object" == typeof a && null !== a) {
         var s = a.delay;
         s = "number" == typeof s && 0 < s ? u + s : u, a = "number" == typeof a.timeout ? a.timeout : B(e)
       } else a = B(e), s = u;
       return e = {
         id: A++,
         callback: n,
         priorityLevel: e,
         startTime: s,
         expirationTime: a = s + a,
         sortIndex: -1
       }, s > u ? (e.sortIndex = s, x(M, e), null === T(I) && e === T(M) && (R ? i() : R = !0, o(z, s - u))) : (e.sortIndex = a, x(I, e), D || j || (D = !0, r(U))), e
     }, t.unstable_cancelCallback = function(e) {
       e.callback = null
     }, t.unstable_wrapCallback = function(e) {
       var t = N;
       return function() {
         var n = N;
         N = t;
         try {
           return e.apply(this, arguments)
         } finally {
           N = n
         }
       }
     }, t.unstable_getCurrentPriorityLevel = function() {
       return N
     }, t.unstable_shouldYield = function() {
       var e = t.unstable_now();
       L(e);
       var n = T(I);
       return n !== P && null !== P && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < P.expirationTime || a()
     }, t.unstable_requestPaint = F, t.unstable_continueExecution = function() {
       D || j || (D = !0, r(U))
     }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
       return T(I)
     }, t.unstable_Profiling = null
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.send = t.dropMessages = t.toggleInputDisabled = t.toggleFullScreen = t.hideChat = t.showChat = t.toggleChat = t.closeChat = t.openChat = t.isVisible = t.isOpen = t.renderCustomComponent = t.addQuickReply = t.addImageSnippet = t.addVideoSnippet = t.addLinkSnippet = t.addResponseMessage = t.addUserMessage = t.Widget = void 0;
     var r, o = n(29),
       i = (r = o) && r.__esModule ? r : {
         default: r
       },
       a = n(184);
     t.Widget = i.default, t.addUserMessage = a.addUserMessage, t.addResponseMessage = a.addResponseMessage, t.addLinkSnippet = a.addLinkSnippet, t.addVideoSnippet = a.addVideoSnippet, t.addImageSnippet = a.addImageSnippet, t.addQuickReply = a.addQuickReply, t.renderCustomComponent = a.renderCustomComponent, t.isOpen = a.isOpen, t.isVisible = a.isVisible, t.openChat = a.openChat, t.closeChat = a.closeChat, t.toggleChat = a.toggleChat, t.showChat = a.showChat, t.hideChat = a.hideChat, t.toggleFullScreen = a.toggleFullScreen, t.toggleInputDisabled = a.toggleInputDisabled, t.dropMessages = a.dropMessages, t.send = a.send
   }, function(e, t, n) {
     "use strict";
     var r = n(49);

     function o() {}

     function i() {}
     i.resetWarningCache = o, e.exports = function() {
       function e(e, t, n, o, i, a) {
         if (a !== r) {
           var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
           throw u.name = "Invariant Violation", u
         }
       }

       function t() {
         return e
       }
       e.isRequired = e;
       var n = {
         array: e,
         bool: e,
         func: e,
         number: e,
         object: e,
         string: e,
         symbol: e,
         any: e,
         arrayOf: t,
         element: e,
         elementType: e,
         instanceOf: t,
         node: e,
         objectOf: t,
         oneOf: t,
         oneOfType: t,
         shape: t,
         exact: t,
         checkPropTypes: i,
         resetWarningCache: o
       };
       return n.PropTypes = n, n
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
   }, function(e, t, n) {
     "use strict";
     /** @license React v16.12.0
      * react-is.production.min.js
      *
      * Copyright (c) Facebook, Inc. and its affiliates.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE file in the root directory of this source tree.
      */
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = "function" == typeof Symbol && Symbol.for,
       o = r ? Symbol.for("react.element") : 60103,
       i = r ? Symbol.for("react.portal") : 60106,
       a = r ? Symbol.for("react.fragment") : 60107,
       u = r ? Symbol.for("react.strict_mode") : 60108,
       s = r ? Symbol.for("react.profiler") : 60114,
       l = r ? Symbol.for("react.provider") : 60109,
       c = r ? Symbol.for("react.context") : 60110,
       f = r ? Symbol.for("react.async_mode") : 60111,
       p = r ? Symbol.for("react.concurrent_mode") : 60111,
       d = r ? Symbol.for("react.forward_ref") : 60112,
       h = r ? Symbol.for("react.suspense") : 60113,
       m = r ? Symbol.for("react.suspense_list") : 60120,
       g = r ? Symbol.for("react.memo") : 60115,
       v = r ? Symbol.for("react.lazy") : 60116,
       y = r ? Symbol.for("react.fundamental") : 60117,
       b = r ? Symbol.for("react.responder") : 60118,
       w = r ? Symbol.for("react.scope") : 60119;

     function _(e) {
       if ("object" == typeof e && null !== e) {
         var t = e.$$typeof;
         switch (t) {
           case o:
             switch (e = e.type) {
               case f:
               case p:
               case a:
               case s:
               case u:
               case h:
                 return e;
               default:
                 switch (e = e && e.$$typeof) {
                   case c:
                   case d:
                   case v:
                   case g:
                   case l:
                     return e;
                   default:
                     return t
                 }
             }
           case i:
             return t
         }
       }
     }

     function E(e) {
       return _(e) === p
     }
     t.typeOf = _, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = c, t.ContextProvider = l, t.Element = o, t.ForwardRef = d, t.Fragment = a, t.Lazy = v, t.Memo = g, t.Portal = i, t.Profiler = s, t.StrictMode = u, t.Suspense = h, t.isValidElementType = function(e) {
       return "string" == typeof e || "function" == typeof e || e === a || e === p || e === s || e === u || e === h || e === m || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === g || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w)
     }, t.isAsyncMode = function(e) {
       return E(e) || _(e) === f
     }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
       return _(e) === c
     }, t.isContextProvider = function(e) {
       return _(e) === l
     }, t.isElement = function(e) {
       return "object" == typeof e && null !== e && e.$$typeof === o
     }, t.isForwardRef = function(e) {
       return _(e) === d
     }, t.isFragment = function(e) {
       return _(e) === a
     }, t.isLazy = function(e) {
       return _(e) === v
     }, t.isMemo = function(e) {
       return _(e) === g
     }, t.isPortal = function(e) {
       return _(e) === i
     }, t.isProfiler = function(e) {
       return _(e) === s
     }, t.isStrictMode = function(e) {
       return _(e) === u
     }, t.isSuspense = function(e) {
       return _(e) === h
     }
   }, function(e, t) {
     e.exports = function(e) {
       if (!e.webpackPolyfill) {
         var t = Object.create(e);
         t.children || (t.children = []), Object.defineProperty(t, "loaded", {
           enumerable: !0,
           get: function() {
             return t.l
           }
         }), Object.defineProperty(t, "id", {
           enumerable: !0,
           get: function() {
             return t.i
           }
         }), Object.defineProperty(t, "exports", {
           enumerable: !0
         }), t.webpackPolyfill = 1
       }
       return t
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = Object.assign || function(e) {
         for (var t = 1; t < arguments.length; t++) {
           var n = arguments[t];
           for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
       },
       o = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       i = n(0),
       a = h(i),
       u = n(8),
       s = h(n(1)),
       l = n(14),
       c = n(2),
       f = n(53),
       p = h(n(54)),
       d = n(12);

     function h(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }

     function m(e, t) {
       var n = {};
       for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
       return n
     }
     var g = function(e) {
       function t(e) {
         ! function(e, t) {
           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
         }(this, t);
         var n = function(e, t) {
           if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
           return !t || "object" != typeof t && "function" != typeof t ? e : t
         }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
         return n.messages = [], n.onGoingMessageDelay = !1, n.sendMessage = n.sendMessage.bind(n), n.intervalId = null, n.eventListenerCleaner = function() {}, n
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), o(t, [{
         key: "componentDidMount",
         value: function() {
           var e = this.props,
             t = e.connectOn,
             n = e.autoClearCache,
             r = e.storage,
             o = e.dispatch,
             i = e.defaultHighlightAnimation,
             a = document.createElement("style");
           if (a.innerHTML = i, document.body.appendChild(a), this.intervalId = setInterval((function() {
               return o((0, l.evalUrl)(window.location.href))
             }), 500), "mount" !== t) {
             var u = (0, d.getLocalSession)(r, c.SESSION_NAME),
               s = u ? u.lastUpdate : 0;
             n ? Date.now() - s < 18e5 ? this.initializeWidget() : localStorage.removeItem(c.SESSION_NAME) : (o((0, l.pullSession)()), s && this.initializeWidget())
           } else this.initializeWidget()
         }
       }, {
         key: "componentDidUpdate",
         value: function() {
           var e = this.props,
             t = e.isChatOpen,
             n = e.dispatch,
             r = e.embedded,
             o = e.initialized;
           t && (o || this.initializeWidget(), this.trySendInitPayload()), r && o && (n((0, l.showChat)()), n((0, l.openChat)())), this.applyCustomStyle()
         }
       }, {
         key: "componentWillUnmount",
         value: function() {
           var e = this.props.socket;
           e && e.close(), clearTimeout(this.tooltipTimeout), clearInterval(this.intervalId)
         }
       }, {
         key: "getSessionId",
         value: function() {
           var e = this.props.storage,
             t = (0, d.getLocalSession)(e, c.SESSION_NAME);
           return t ? t.session_id : null
         }
       }, {
         key: "sendMessage",
         value: function(e) {
           var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
             n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "always",
             r = this.props,
             o = r.dispatch,
             i = r.initialized;
           i || (this.initializeWidget(!1), o((0, l.initialize)())), "always" === n ? (o((0, l.emitUserMessage)(e)), "" !== t && o((0, l.addUserMessage)(t))) : "init" === n && o((0, l.emitMessageIfFirst)(e, t))
         }
       }, {
         key: "handleMessageReceived",
         value: function(e) {
           var t = this.props.dispatch;
           this.onGoingMessageDelay ? this.messages.push(e) : (this.onGoingMessageDelay = !0, t((0, l.triggerMessageDelayed)(!0)), this.newMessageTimeout(e))
         }
       }, {
         key: "popLastMessage",
         value: function() {
           var e = this.props.dispatch;
           this.messages.length && (this.onGoingMessageDelay = !0, e((0, l.triggerMessageDelayed)(!0)), this.newMessageTimeout(this.messages.shift()))
         }
       }, {
         key: "newMessageTimeout",
         value: function(e) {
           var t = this,
             n = this.props,
             r = n.dispatch,
             o = n.isChatOpen,
             i = n.customMessageDelay,
             a = n.disableTooltips,
             u = (e.metadata, m(e, ["metadata"]));
           setTimeout((function() {
             t.dispatchMessage(u), o || (r((0, l.newUnreadMessage)()), a || r((0, l.showTooltip)(!0))), r((0, l.triggerMessageDelayed)(!1)), t.onGoingMessageDelay = !1, t.popLastMessage()
           }), i(u.text || ""))
         }
       }, {
         key: "propagateMetadata",
         value: function(e) {
           var t = this.props.dispatch,
             n = e.linkTarget,
             r = e.userInput,
             o = e.pageChangeCallbacks,
             i = e.domHighlight,
             a = e.forceOpen,
             u = e.forceClose,
             s = e.pageEventCallbacks;
           n && t((0, l.setLinkTarget)(n)), r && t((0, l.setUserInput)(r)), o && (t((0, l.changeOldUrl)(window.location.href)), t((0, l.setPageChangeCallbacks)(o))), i && t((0, l.setDomHighlight)(i)), a && t((0, l.openChat)()), u && t((0, l.closeChat)()), s && (this.eventListenerCleaner = this.addCustomsEventListeners(s.pageEvents))
         }
       }, {
         key: "handleBotUtterance",
         value: function(e) {
           var t = this.props.dispatch;
           this.clearCustomStyle(), this.eventListenerCleaner(), t((0, l.clearMetadata)()), e.metadata && this.propagateMetadata(e.metadata);
           var n = r({}, e, {
             text: String(e.text)
           });
           e.metadata && e.metadata.customCss && (n.customCss = e.metadata.customCss), this.handleMessageReceived(n)
         }
       }, {
         key: "addCustomsEventListeners",
         value: function(e) {
           var t = this,
             n = [];
           e.forEach((function(e) {
             var r = e.event,
               o = e.payload,
               i = e.selector,
               a = function() {
                 t.sendMessage(o)
               };
             if (r && o && i) {
               var u = document.querySelectorAll(i);
               u.length > 0 && u.forEach((function(e) {
                 n.push({
                   elem: e,
                   event: r,
                   sendPayload: a
                 }), e.addEventListener(r, a)
               }))
             }
           }));
           return function() {
             n.forEach((function(e) {
               e.elem.removeEventListener(e.event, e.sendPayload)
             }))
           }
         }
       }, {
         key: "clearCustomStyle",
         value: function() {
           var e = this.props,
             t = e.domHighlight,
             n = e.defaultHighlightClassname,
             r = t.toJS() || {};
           r.selector && document.querySelectorAll(r.selector).forEach((function(e) {
             switch (r.style) {
               case "custom":
                 e.setAttribute("style", "");
                 break;
               case "class":
                 e.classList.remove(r.css);
                 break;
               default:
                 "" !== n ? e.classList.remove(n) : e.setAttribute("style", "")
             }
           }))
         }
       }, {
         key: "applyCustomStyle",
         value: function() {
           var e = this.props,
             t = e.domHighlight,
             n = e.defaultHighlightCss,
             r = e.defaultHighlightClassname,
             o = t.toJS() || {};
           o.selector && document.querySelectorAll(o.selector).forEach((function(e) {
             switch (o.style) {
               case "custom":
                 e.setAttribute("style", o.css);
                 break;
               case "class":
                 e.classList.add(o.css);
                 break;
               default:
                 "" !== r ? e.classList.add(r) : e.setAttribute("style", n)
             }
           }))
         }
       }, {
         key: "initializeWidget",
         value: function() {
           var e = this,
             t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
             n = this.props,
             r = n.socket,
             o = n.dispatch,
             i = n.embedded,
             a = n.initialized;
           if (!r.isInitialized()) {
             r.createSocket(), o((0, l.pullSession)());
             var u = this.getSessionId();
             r.on("connect", (function() {
               u ? (e.startConnection(t, u, u), e.subscribeBotMessages(u)) : r.emit("registerUser", {}, (function(n) {
                 var r = void 0,
                   o = JSON.parse(n);
                 o.urn ? (r = o.urn, e.startConnection(t, u, r), e.subscribeBotMessages(r)) : console.error(o)
               }))
             })), r.on("disconnect", (function(e) {
               console.log(e), "io client disconnect" !== e && o((0, l.disconnectServer)())
             }))
           }
           i && a && (o((0, l.showChat)()), o((0, l.openChat)()))
         }
       }, {
         key: "subscribeBotMessages",
         value: function(e) {
           var t = this;
           this.props.socket.subscribe(e, (function(n) {
             if (n.to === e) {
               var r = t.handleMessageData(n);
               t.handleBotUtterance(r)
             }
           }))
         }
       }, {
         key: "handleMessageData",
         value: function(e) {
           var t = {
             text: e.text
           };
           e.quick_replies && e.quick_replies.length > 0 && (t.quick_replies = e.quick_replies.map((function(e) {
             return {
               title: e,
               payload: e
             }
           })));
           var n = (0, f.getAttachmentFromText)(t);
           return n && (t.attachment = n), t
         }
       }, {
         key: "startConnection",
         value: function(e, t, n) {
           var r = this,
             o = this.props,
             i = o.storage,
             a = o.dispatch,
             u = o.connectOn,
             s = o.tooltipPayload,
             f = o.tooltipDelay;
           if (a((0, l.connectServer)()), t !== n)(0, d.storeLocalSession)(i, c.SESSION_NAME, n), a((0, l.pullSession)()), e && this.trySendInitPayload();
           else {
             var p = window.localStorage.getItem(c.NEXT_MESSAGE);
             if (null !== p) {
               var h = JSON.parse(p),
                 m = h.message,
                 g = h.expiry;
               window.localStorage.removeItem(c.NEXT_MESSAGE), (0 === g || g > Date.now()) && (a((0, l.addUserMessage)(m)), a((0, l.emitUserMessage)(m)))
             }
           }
           "mount" === u && s && (this.tooltipTimeout = setTimeout((function() {
             r.trySendTooltipPayload()
           }), parseInt(f, 10)))
         }
       }, {
         key: "trySendInitPayload",
         value: function() {
           var e = this.props,
             t = e.initPayload,
             n = (e.customData, e.socket),
             r = e.initialized,
             o = e.isChatOpen,
             i = e.isChatVisible,
             a = e.embedded,
             u = e.connected,
             s = e.dispatch;
           if (!r && u && (o && i || a)) {
             var c = this.getSessionId();
             if (!c) return;
             console.log("sending init payload", c), n.emit("sendMessageToChannel", {
               text: t,
               userUrn: c
             }), s((0, l.initialize)())
           }
         }
       }, {
         key: "trySendTooltipPayload",
         value: function() {
           var e = this.props,
             t = e.tooltipPayload,
             n = e.socket,
             r = (e.customData, e.connected),
             o = e.isChatOpen,
             i = e.dispatch,
             a = e.tooltipSent;
           if (r && !o && !a.get(t)) {
             var u = this.getSessionId();
             if (!u) return;
             n.emit("sendMessageToChannel", {
               text: t,
               userUrn: u
             }), i((0, l.triggerTooltipSent)(t)), i((0, l.initialize)())
           }
         }
       }, {
         key: "toggleConversation",
         value: function() {
           this.props.dispatch((0, l.showTooltip)(!1)), clearTimeout(this.tooltipTimeout), this.props.dispatch((0, l.toggleChat)())
         }
       }, {
         key: "toggleFullScreen",
         value: function() {
           this.props.dispatch((0, l.toggleFullScreen)())
         }
       }, {
         key: "dispatchMessage",
         value: function(e) {
           if (0 !== Object.keys(e).length) {
             var t = e.customCss,
               n = m(e, ["customCss"]);
             if ((0, f.isText)(n)) this.props.dispatch((0, l.addResponseMessage)(n.text));
             else if ((0, f.isQR)(n)) this.props.dispatch((0, l.addQuickReply)(n));
             else if ((0, f.isSnippet)(n)) {
               var r = n.attachment.payload.elements[0];
               this.props.dispatch((0, l.addLinkSnippet)({
                 title: r.title,
                 content: r.buttons[0].title,
                 link: r.buttons[0].url,
                 target: "_blank"
               }))
             } else if ((0, f.isVideo)(n)) {
               var o = n.attachment.payload;
               this.props.dispatch((0, l.addVideoSnippet)({
                 title: o.title,
                 video: o.src
               }))
             } else if ((0, f.isImage)(n)) {
               var i = n.attachment.payload;
               this.props.dispatch((0, l.addImageSnippet)({
                 title: i.title,
                 image: i.src
               }))
             } else {
               var a = n;
               this.props.customComponent && this.props.dispatch((0, l.renderCustomComponent)(this.props.customComponent, a, !0))
             }
             t && this.props.dispatch((0, l.setCustomCss)(e.customCss))
           }
         }
       }, {
         key: "handleMessageSubmit",
         value: function(e) {
           e.preventDefault();
           var t = e.target.message.value;
           t && (this.props.dispatch((0, l.addUserMessage)(t)), this.props.dispatch((0, l.emitUserMessage)(t))), e.target.message.value = ""
         }
       }, {
         key: "render",
         value: function() {
           var e = this;
           return a.default.createElement(p.default, {
             toggleChat: function() {
               return e.toggleConversation()
             },
             toggleFullScreen: function() {
               return e.toggleFullScreen()
             },
             onSendMessage: function(t) {
               return e.handleMessageSubmit(t)
             },
             title: this.props.title,
             subtitle: this.props.subtitle,
             customData: this.props.customData,
             profileAvatar: this.props.profileAvatar,
             showCloseButton: this.props.showCloseButton,
             showFullScreenButton: this.props.showFullScreenButton,
             hideWhenNotConnected: this.props.hideWhenNotConnected,
             fullScreenMode: this.props.fullScreenMode,
             isChatOpen: this.props.isChatOpen,
             isChatVisible: this.props.isChatVisible,
             badge: this.props.badge,
             embedded: this.props.embedded,
             params: this.props.params,
             openLauncherImage: this.props.openLauncherImage,
             closeImage: this.props.closeImage,
             customComponent: this.props.customComponent,
             displayUnreadCount: this.props.displayUnreadCount,
             showMessageDate: this.props.showMessageDate,
             tooltipPayload: this.props.tooltipPayload
           })
         }
       }]), t
     }(i.Component);
     g.propTypes = {
       title: s.default.oneOfType([s.default.string, s.default.element]),
       customData: s.default.shape({}),
       subtitle: s.default.oneOfType([s.default.string, s.default.element]),
       initPayload: s.default.string,
       profileAvatar: s.default.string,
       showCloseButton: s.default.bool,
       showFullScreenButton: s.default.bool,
       hideWhenNotConnected: s.default.bool,
       connectOn: s.default.oneOf(["mount", "open"]),
       autoClearCache: s.default.bool,
       fullScreenMode: s.default.bool,
       isChatVisible: s.default.bool,
       isChatOpen: s.default.bool,
       badge: s.default.number,
       socket: s.default.shape({}),
       embedded: s.default.bool,
       params: s.default.shape({}),
       connected: s.default.bool,
       initialized: s.default.bool,
       openLauncherImage: s.default.string,
       closeImage: s.default.string,
       customComponent: s.default.func,
       displayUnreadCount: s.default.bool,
       showMessageDate: s.default.oneOfType([s.default.bool, s.default.func]),
       customMessageDelay: s.default.func.isRequired,
       tooltipPayload: s.default.string,
       tooltipSent: s.default.shape({}),
       tooltipDelay: s.default.number.isRequired,
       domHighlight: s.default.shape({}),
       storage: s.default.shape({}),
       disableTooltips: s.default.bool,
       defaultHighlightAnimation: s.default.string,
       defaultHighlightCss: s.default.string,
       defaultHighlightClassname: s.default.string
     }, g.defaultProps = {
       isChatOpen: !1,
       isChatVisible: !0,
       fullScreenMode: !1,
       connectOn: "mount",
       autoClearCache: !1,
       displayUnreadCount: !1,
       tooltipPayload: null,
       oldUrl: "",
       disableTooltips: !1,
       defaultHighlightClassname: "",
       defaultHighlightCss: "animation: 0.5s linear infinite alternate default-botfront-blinker-animation;",
       defaultHighlightAnimation: "@keyframes default-botfront-blinker-animation {\n    from {\n      outline-color: green;\n      outline-style: none;\n    }\n    to {\n      outline-style: solid;\n      outline-color: green;\n    }\n  }"
     }, t.default = (0, u.connect)((function(e) {
       return {
         initialized: e.behavior.get("initialized"),
         connected: e.behavior.get("connected"),
         isChatOpen: e.behavior.get("isChatOpen"),
         isChatVisible: e.behavior.get("isChatVisible"),
         fullScreenMode: e.behavior.get("fullScreenMode"),
         tooltipSent: e.metadata.get("tooltipSent"),
         oldUrl: e.behavior.get("oldUrl"),
         pageChangeCallbacks: e.behavior.get("pageChangeCallbacks"),
         domHighlight: e.metadata.get("domHighlight")
       }
     }), null, null, {
       forwardRef: !0
     })(g)
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.isSnippet = function(e) {
       return Object.keys(e).includes("attachment") && Object.keys(e.attachment).includes("type") && "template" === e.attachment.type && Object.keys(e.attachment).includes("payload") && Object.keys(e.attachment.payload).indexOf("template_type") >= 0 && "generic" === e.attachment.payload.template_type && Object.keys(e.attachment.payload).indexOf("elements") >= 0 && e.attachment.payload.elements.length > 0
     }, t.isVideo = function(e) {
       return Object.keys(e).includes("attachment") && Object.keys(e.attachment).includes("type") && "video" === e.attachment.type
     }, t.isImage = function(e) {
       return Object.keys(e).includes("attachment") && Object.keys(e.attachment).includes("type") && "image" === e.attachment.type
     }, t.isText = a, t.isQR = function(e) {
       return 2 === Object.keys(e).length && Object.keys(e).includes("text") && Object.keys(e).includes("quick_replies")
     }, t.getAttachmentFromText = function(e) {
       if (a(e)) {
         var t = u(r, e.text);
         if (t) return {
           type: "image",
           payload: {
             title: e.text.replace(r, ""),
             src: t
           }
         };
         var n = u(o, e.text);
         if (n) return {
           type: "video",
           payload: {
             title: e.text.replace(o, ""),
             src: n
           }
         };
         var s = u(i, e.text);
         if (s) return function(e, t) {
           return {
             type: "template",
             payload: {
               template_type: "generic",
               elements: [{
                 buttons: [{
                   title: e = e && e.length > 0 ? e : t,
                   url: t
                 }]
               }]
             }
           }
         }(e.text.replace(i, ""), s)
       }
       return
     };
     var r = /(https?:\/\/\S+(?:png|jpe?g|gif)\S*)/,
       o = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/,
       i = /(https?:\/\/[^\s]+)/g;

     function a(e) {
       return 1 === Object.keys(e).length && Object.keys(e).includes("text")
     }

     function u(e, t) {
       var n = t.toString();
       if (n) {
         var r = e.exec(n);
         if (null !== r) return r[0]
       }
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = Object.assign || function(e) {
         for (var t = 1; t < arguments.length; t++) {
           var n = arguments[t];
           for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
       },
       o = l(n(0)),
       i = n(8),
       a = l(n(1)),
       u = l(n(55)),
       s = l(n(169));

     function l(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(177);
     var c = function(e) {
       var t = e.embedded ? ["widget-embedded"] : ["widget-container"];
       e.fullScreenMode && t.push("full-screen");
       var n = void 0 !== e.showCloseButton ? e.showCloseButton : !e.embedded,
         i = e.isChatVisible && !(e.hideWhenNotConnected && !e.connected),
         a = e.isChatOpen || e.embedded;
       return a && !e.embedded && t.push("chat-open"), i ? o.default.createElement("div", {
         className: t.join(" ")
       }, a && o.default.createElement(u.default, r({
         title: e.title,
         subtitle: e.subtitle,
         sendMessage: e.onSendMessage,
         profileAvatar: e.profileAvatar,
         toggleChat: e.toggleChat,
         isChatOpen: e.isChatOpen,
         toggleFullScreen: e.toggleFullScreen,
         fullScreenMode: e.fullScreenMode,
         disabledInput: e.disabledInput,
         params: e.params,
         showFullScreenButton: e.showFullScreenButton
       }, {
         showCloseButton: n
       }, {
         connected: e.connected,
         connectingText: e.connectingText,
         closeImage: e.closeImage,
         customComponent: e.customComponent,
         showMessageDate: e.showMessageDate
       })), !e.embedded && o.default.createElement(s.default, {
         toggle: e.toggleChat,
         isChatOpen: e.isChatOpen,
         badge: e.badge,
         fullScreenMode: e.fullScreenMode,
         openLauncherImage: e.openLauncherImage,
         closeImage: e.closeImage,
         displayUnreadCount: e.displayUnreadCount,
         tooltipPayload: e.tooltipPayload
       })) : null
     };
     c.propTypes = {
       title: a.default.oneOfType([a.default.string, a.default.element]),
       subtitle: a.default.oneOfType([a.default.string, a.default.element]),
       onSendMessage: a.default.func,
       toggleChat: a.default.func,
       toggleFullScreen: a.default.func,
       isChatOpen: a.default.bool,
       isChatVisible: a.default.bool,
       profileAvatar: a.default.string,
       showCloseButton: a.default.bool,
       showFullScreenButton: a.default.bool,
       hideWhenNotConnected: a.default.bool,
       disabledInput: a.default.bool,
       fullScreenMode: a.default.bool,
       badge: a.default.number,
       embedded: a.default.bool,
       params: a.default.object,
       connected: a.default.bool,
       connectingText: a.default.string,
       openLauncherImage: a.default.string,
       closeImage: a.default.string,
       customComponent: a.default.func,
       displayUnreadCount: a.default.bool,
       showMessageDate: a.default.oneOfType([a.default.bool, a.default.func]),
       tooltipPayload: a.default.string
     }, t.default = (0, i.connect)((function(e) {
       return {
         isChatVisible: e.behavior.get("isChatVisible"),
         isChatOpen: e.behavior.get("isChatOpen"),
         disabledInput: e.behavior.get("disabledInput"),
         connected: e.behavior.get("connected"),
         connectingText: e.behavior.get("connectingText")
       }
     }))(c)
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = s(n(0)),
       o = s(n(1)),
       i = s(n(56)),
       a = s(n(62)),
       u = s(n(163));

     function s(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(167);
     var l = function(e) {
       return r.default.createElement("div", {
         className: "conversation-container"
       }, r.default.createElement(i.default, {
         title: e.title,
         subtitle: e.subtitle,
         toggleChat: e.toggleChat,
         toggleFullScreen: e.toggleFullScreen,
         fullScreenMode: e.fullScreenMode,
         showCloseButton: e.showCloseButton,
         showFullScreenButton: e.showFullScreenButton,
         connected: e.connected,
         connectingText: e.connectingText,
         closeImage: e.closeImage,
         profileAvatar: e.profileAvatar
       }), r.default.createElement(a.default, {
         profileAvatar: e.profileAvatar,
         params: e.params,
         customComponent: e.customComponent,
         showMessageDate: e.showMessageDate
       }), r.default.createElement(u.default, {
         sendMessage: e.sendMessage,
         disabledInput: e.disabledInput
       }))
     };
     l.propTypes = {
       title: o.default.oneOfType([o.default.string, o.default.element]),
       subtitle: o.default.oneOfType([o.default.string, o.default.element]),
       sendMessage: o.default.func,
       profileAvatar: o.default.string,
       toggleFullScreen: o.default.func,
       fullScreenMode: o.default.bool,
       toggleChat: o.default.func,
       showCloseButton: o.default.bool,
       showFullScreenButton: o.default.bool,
       disabledInput: o.default.bool,
       params: o.default.object,
       connected: o.default.bool,
       connectingText: o.default.string,
       closeImage: o.default.string,
       customComponent: o.default.func,
       showMessageDate: o.default.oneOfType([o.default.bool, o.default.func])
     }, t.default = l
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = s(n(0)),
       o = s(n(1)),
       i = s(n(31)),
       a = s(n(57)),
       u = s(n(58));

     function s(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(59);
     var l = function(e) {
       var t = e.title,
         n = e.subtitle,
         o = e.fullScreenMode,
         s = e.toggleFullScreen,
         l = e.toggleChat,
         c = e.showCloseButton,
         f = e.showFullScreenButton,
         p = e.connected,
         d = e.connectingText,
         h = e.closeImage,
         m = e.profileAvatar;
       return r.default.createElement("div", {
         className: "header-and-loading"
       }, r.default.createElement("div", {
         className: "header " + (n ? "with-subtitle" : "")
       }, m && r.default.createElement("img", {
         src: m,
         className: "avatar",
         alt: "chat avatar"
       }), r.default.createElement("div", {
         className: "header-buttons"
       }, f && r.default.createElement("button", {
         className: "toggle-fullscreen-button",
         onClick: s,
         "aria-label": "toggle fullscreen"
       }, r.default.createElement("img", {
         className: "toggle-fullscreen " + (o ? "fullScreenExitImage" : "fullScreenImage"),
         src: o ? u.default : a.default,
         alt: "toggle fullscreen"
       })), c && r.default.createElement("button", {
         className: "close-button",
         "aria-label": "close",
         onClick: l
       }, r.default.createElement("img", {
         className: "close " + (h ? "" : "default"),
         src: h || i.default,
         alt: "close"
       }))), r.default.createElement("h4", {
         className: "title " + (m && "with-avatar")
       }, t), n && r.default.createElement("span", {
         className: m && "with-avatar"
       }, n)), !p && r.default.createElement("span", {
         className: "loading"
       }, d))
     };
     l.propTypes = {
       title: o.default.oneOfType([o.default.string, o.default.element]),
       subtitle: o.default.oneOfType([o.default.string, o.default.element]),
       fullScreenMode: o.default.bool,
       toggleFullScreen: o.default.func,
       toggleChat: o.default.func,
       showCloseButton: o.default.bool,
       showFullScreenButton: o.default.bool,
       connected: o.default.bool,
       connectingText: o.default.string,
       closeImage: o.default.string,
       profileAvatar: o.default.string
     }, t.default = l
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM5Ni43OTUgMzk2LjhIMzIwVjQ0OGgxMjhWMzIwaC01MS4yMDV6TTM5Ni44IDExNS4yMDVWMTkySDQ0OFY2NEgzMjB2NTEuMjA1ek0xMTUuMjA1IDExNS4ySDE5MlY2NEg2NHYxMjhoNTEuMjA1ek0xMTUuMiAzOTYuNzk1VjMyMEg2NHYxMjhoMTI4di01MS4yMDV6Ii8+PC9zdmc+"
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTY0IDM3MS4yaDc2Ljc5NVY0NDhIMTkyVjMyMEg2NHY1MS4yem03Ni43OTUtMjMwLjRINjRWMTkyaDEyOFY2NGgtNTEuMjA1djc2Ljh6TTMyMCA0NDhoNTEuMnYtNzYuOEg0NDhWMzIwSDMyMHYxMjh6bTUxLjItMzA3LjJWNjRIMzIwdjEyOGgxMjh2LTUxLjJoLTc2Ljh6Ii8+PC9zdmc+"
   }, function(e, t, n) {
     var r = n(60);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .header{background-color:#2089fb;color:#fff;display:flex;flex-direction:column;justify-content:center;text-align:center;height:55px;font-family:Roboto,serif;position:relative}.conversation-container .header .avatar{height:31px;width:31px;position:absolute;top:12px;left:14px}.conversation-container .header.with-subtitle{height:70px}.conversation-container .header.with-subtitle .avatar{top:20px}.conversation-container .header.with-subtitle .title{top:11px}.conversation-container .header.with-subtitle span{bottom:12px;position:absolute;left:22px}.conversation-container .header.with-subtitle span.with-avatar{left:60px}.conversation-container .title{font-size:20px;margin:0;font-family:Roboto,serif;position:absolute;left:20px}.conversation-container .title.with-avatar{left:58px}.conversation-container .header-buttons{position:absolute;right:10px;display:flex;flex-direction:row}.conversation-container .close-button{display:none}.conversation-container .toggle-fullscreen-button{display:flex;justify-content:center;align-items:center;display:inline-block;background-color:#2089fb;border:0;width:40px;cursor:pointer}.conversation-container .toggle-fullscreen-button:active,.conversation-container .toggle-fullscreen-button:focus,.conversation-container .toggle-fullscreen-button:hover{outline:none}.conversation-container .toggle-fullscreen-button:active::-moz-focus-inner,.conversation-container .toggle-fullscreen-button:focus::-moz-focus-inner,.conversation-container .toggle-fullscreen-button:hover::-moz-focus-inner{border:0}.conversation-container .toggle-fullscreen{width:30px;height:30px;padding-top:3px}.conversation-container .toggle-fullscreen.default{width:20px;height:20px}.conversation-container .toggle-fullscreen.default:active,.conversation-container .toggle-fullscreen.default:focus,.conversation-container .toggle-fullscreen.default:hover{width:24px;height:24px}.conversation-container .toggle-fullscreen:active,.conversation-container .toggle-fullscreen:focus,.conversation-container .toggle-fullscreen:hover{width:34px;height:34px;top:-2px;margin-left:-2px}.conversation-container .loading{background-color:#b5b5b5;color:#fff;display:flex;flex-direction:column;text-align:center;padding:5px 0;font-family:Roboto,serif;font-size:14px}.widget-embedded .header{display:none}.full-screen .header{border-radius:0;flex-shrink:0;position:relative}.full-screen .close-button,.full-screen .toggle-fullscreen-button{display:flex;justify-content:center;align-items:center;display:inline-block;background-color:#2089fb;border:0;width:40px;cursor:pointer}.full-screen .close-button:active,.full-screen .close-button:focus,.full-screen .close-button:hover,.full-screen .toggle-fullscreen-button:active,.full-screen .toggle-fullscreen-button:focus,.full-screen .toggle-fullscreen-button:hover{outline:none}.full-screen .close-button:active::-moz-focus-inner,.full-screen .close-button:focus::-moz-focus-inner,.full-screen .close-button:hover::-moz-focus-inner,.full-screen .toggle-fullscreen-button:active::-moz-focus-inner,.full-screen .toggle-fullscreen-button:focus::-moz-focus-inner,.full-screen .toggle-fullscreen-button:hover::-moz-focus-inner{border:0}.full-screen .close,.full-screen .toggle-fullscreen{width:30px;height:30px;padding-top:3px}.full-screen .close.default,.full-screen .toggle-fullscreen.default{width:20px;height:20px}.full-screen .close.default:active,.full-screen .close.default:focus,.full-screen .close.default:hover,.full-screen .toggle-fullscreen.default:active,.full-screen .toggle-fullscreen.default:focus,.full-screen .toggle-fullscreen.default:hover{width:24px;height:24px}.full-screen .close:active,.full-screen .close:focus,.full-screen .close:hover,.full-screen .toggle-fullscreen:active,.full-screen .toggle-fullscreen:focus,.full-screen .toggle-fullscreen:hover{width:34px;height:34px;top:-2px;margin-left:-2px}.full-screen .loading{border-radius:0;flex-shrink:0;position:relative}@media screen and (max-width:800px){.conversation-container .header{border-radius:0;flex-shrink:0;position:relative}.conversation-container .close-button{display:flex;justify-content:center;align-items:center;display:inline-block;background-color:#2089fb;border:0;width:40px;cursor:pointer}.conversation-container .close-button:active,.conversation-container .close-button:focus,.conversation-container .close-button:hover{outline:none}.conversation-container .close-button:active::-moz-focus-inner,.conversation-container .close-button:focus::-moz-focus-inner,.conversation-container .close-button:hover::-moz-focus-inner{border:0}.conversation-container .close{width:30px;height:30px;padding-top:3px}.conversation-container .close.default{width:20px;height:20px}.conversation-container .close.default:active,.conversation-container .close.default:focus,.conversation-container .close.default:hover{width:24px;height:24px}.conversation-container .close:active,.conversation-container .close:focus,.conversation-container .close:hover{width:34px;height:34px;top:-2px;margin-left:-2px}.conversation-container .toggle-fullscreen,.conversation-container .toggle-fullscreen-button{display:none}.conversation-container .loading{border-radius:0;flex-shrink:0;position:relative}}", ""])
   }, function(e, t) {
     e.exports = function(e) {
       var t = "undefined" != typeof window && window.location;
       if (!t) throw new Error("fixUrls requires window.location");
       if (!e || "string" != typeof e) return e;
       var n = t.protocol + "//" + t.host,
         r = n + t.pathname.replace(/\/[^\/]*$/, "/");
       return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
         var o, i = t.trim().replace(/^"(.*)"$/, (function(e, t) {
           return t
         })).replace(/^'(.*)'$/, (function(e, t) {
           return t
         }));
         return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
       }))
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = Object.assign || function(e) {
         for (var t = 1; t < arguments.length; t++) {
           var n = arguments[t];
           for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
       },
       o = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       i = n(0),
       a = p(i),
       u = p(n(1)),
       s = p(n(18)),
       l = n(8),
       c = n(2),
       f = n(19);

     function p(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }

     function d(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function h(e, t) {
       if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
     n(161);
     var m = function(e) {
         var t = new Date(e);
         return "" + (function(e) {
           var t = new Date;
           return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
         }(t) ? "" : t.toLocaleDateString() + " ") + t.toLocaleTimeString("en-US", {
           timeStyle: "short"
         })
       },
       sum = null,
       pos = function() {
         var e = document.getElementById("messages");
         sum = e.scrollTop;
       },
       g = function() {
         var e = document.getElementById("messages");
         e && (e.scrollTop = sum + 25 || e.scrollHeight);
       },
       v = function(e) {
         function t() {
           var e, n, o;
           d(this, t);
           for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
           return n = o = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), o.getComponentToRender = function(e, t, n) {
             var i = o.props.params,
               u = function() {
                 switch (e.get("type")) {
                   case c.MESSAGES_TYPES.TEXT:
                     return f.Message;
                   case c.MESSAGES_TYPES.SNIPPET.LINK:
                     return f.Snippet;
                   case c.MESSAGES_TYPES.VIDREPLY.VIDEO:
                     return f.Video;
                   case c.MESSAGES_TYPES.IMGREPLY.IMAGE:
                     return f.Image;
                   case c.MESSAGES_TYPES.QUICK_REPLY:
                     return f.QuickReply;
                   case c.MESSAGES_TYPES.CUSTOM_COMPONENT:
                     return (0, l.connect)((function(e) {
                       return {
                         store: e
                       }
                     }), (function(e) {
                       return {
                         dispatch: e
                       }
                     }))(o.props.customComponent);
                   default:
                     return null
                 }
               }();
             return "component" === e.get("type") ? a.default.createElement(u, r({
               id: t
             }, e.get("props"), {
               isLast: n
             })) : a.default.createElement(u, {
               id: t,
               params: i,
               message: e,
               isLast: n
             })
           }, h(o, n)
         }
         return function(e, t) {
           if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
           e.prototype = Object.create(t && t.prototype, {
             constructor: {
               value: e,
               enumerable: !1,
               writable: !0,
               configurable: !0
             }
           }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
         }(t, e), o(t, [{
           key: "componentDidMount",
           value: function() {
             g()
           }
         }, {
           key: "componentWillUpdate",
           value: function() {
             pos()
           }
         }, {
           key: "componentDidUpdate",
           value: function() {
             g()
           }
         }, {
           key: "render",
           value: function() {
             var e = this,
               t = this.props,
               n = t.displayTypingIndication,
               r = t.profileAvatar;
             return a.default.createElement("div", {
               id: "messages",
               className: "messages-container"
             }, function() {
               var t = e.props,
                 n = t.messages,
                 o = t.showMessageDate;
               if (n.isEmpty()) return null;
               var i = [],
                 u = null,
                 s = "function" == typeof o ? o : !0 === o ? m : null,
                 l = function(t, o) {
                   return a.default.createElement("div", {
                     className: "message " + (r && "with-avatar"),
                     key: o
                   }, r && t.get("showAvatar") && a.default.createElement("img", {
                     src: r,
                     className: "avatar",
                     alt: "profile"
                   }), e.getComponentToRender(t, o, o === n.size - 1), function(e) {
                     var t = e.get("timestamp");
                     return s && t && s(e.get("timestamp", e)) ? a.default.createElement("span", {
                       className: "message-date"
                     }, s(e.get("timestamp"), e)) : null
                   }(t))
                 };
               return n.forEach((function(e, t) {
                 null !== u && u.from === e.get("sender") || (null !== u && i.push(u), u = {
                   from: e.get("sender"),
                   messages: []
                 }), u.messages.push(l(e, t))
               })), i.push(u), i.map((function(e, t) {
                 return a.default.createElement("div", {
                   className: "group-message from-" + e.from,
                   key: "group_" + t
                 }, e.messages)
               }))
             }(), n && a.default.createElement("div", {
               className: "message typing-indication " + (r && "with-avatar")
             }, r && a.default.createElement("img", {
               src: r,
               className: "avatar",
               alt: "profile"
             }), a.default.createElement("div", {
               className: "response"
             }, a.default.createElement("div", {
               id: "wave",
               "aria-live": ""
             }, a.default.createElement("p", {
               className: "customText"
             }, "..."), a.default.createElement("span", {
               className: "dot"
             }), a.default.createElement("span", {
               className: "dot"
             }), a.default.createElement("span", {
               className: "dot"
             })))))
           }
         }]), t
       }(i.Component);
     v.propTypes = {
       messages: s.default.listOf(s.default.map),
       profileAvatar: u.default.string,
       customComponent: u.default.func,
       showMessageDate: u.default.oneOfType([u.default.bool, u.default.func]),
       displayTypingIndication: u.default.bool
     }, f.Message.defaultTypes = {
       displayTypingIndication: !1
     }, t.default = (0, l.connect)((function(e) {
       return {
         messages: e.messages,
         displayTypingIndication: e.behavior.get("messageDelayed")
       }
     }))(v)
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r, o = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       i = n(0),
       a = (r = i) && r.__esModule ? r : {
         default: r
       },
       u = n(2);

     function s(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function l(e, t) {
       if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
     n(64);
     var c = function(e) {
       function t() {
         return s(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), o(t, [{
         key: "render",
         value: function() {
           return a.default.createElement("div", {
             className: "video"
           }, a.default.createElement("b", {
             className: "video-title"
           }, this.props.message.get("title")), a.default.createElement("div", {
             className: "video-details"
           }, a.default.createElement("iframe", {
             src: this.props.message.get("video"),
             className: "videoFrame"
           })))
         }
       }]), t
     }(i.PureComponent);
     c.propTypes = {
       message: u.PROP_TYPES.VIDREPLY
     }, t.default = c
   }, function(e, t, n) {
     var r = n(65);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .videoFrame{width:300px;height:200px;margin-top:10px;border:none}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r, o = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       i = n(0),
       a = (r = i) && r.__esModule ? r : {
         default: r
       },
       u = n(2);

     function s(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function l(e, t) {
       if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
     n(67);
     var c = function(e) {
       function t() {
         return s(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), o(t, [{
         key: "render",
         value: function() {
           var e = this.props.params.images,
             t = (e = void 0 === e ? {} : e).dims,
             n = void 0 === t ? {} : t,
             r = n.width,
             o = n.height,
             i = this.props.message.toJS(),
             u = i.title,
             s = i.image,
             l = this.props.message.get("customCss") && this.props.message.get("customCss").toJS();
           return l && "class" === l.style && (l.css = l.css.replace(/^\./, "")), a.default.createElement("div", {
             className: l && "class" === l.style ? "image " + l.css : "image",
             style: {
               cssText: l && "custom" === l.style ? l.css : void 0
             }
           }, a.default.createElement("b", {
             className: "image-title"
           }, u), a.default.createElement("div", {
             className: "image-details",
             style: {
               width: r,
               height: o
             }
           }, a.default.createElement("img", {
             className: "image-frame",
             src: s
           })))
         }
       }]), t
     }(i.PureComponent);
     c.propTypes = {
       message: u.PROP_TYPES.IMGREPLY
     }, c.defaultProps = {
       params: {}
     }, t.default = c
   }, function(e, t, n) {
     var r = n(68);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .image-details{object-fit:scale-down;max-width:100%;margin-top:10px}.conversation-container .image-frame{object-position:0 0;object-fit:cover;width:100%;height:100%;border-radius:15px}", ""])
   }, function(e, t, n) {
     "use strict";

     function r(e) {
       return function(e) {
         if (Array.isArray(e)) {
           for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
           return n
         }
       }(e) || function(e) {
         if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
       }(e) || function() {
         throw new TypeError("Invalid attempt to spread non-iterable instance")
       }()
     }
     var o = n(6),
       i = n(70),
       a = n(83),
       u = n(1),
       s = n(139),
       l = n(141),
       c = n(142),
       f = n(143),
       p = n(144),
       d = n(145),
       h = n(146),
       m = n(147),
       g = n(148),
       v = Object.keys(m),
       y = function(e) {
         var t = e.source || e.children || "",
           n = e.parserOptions;
         if (e.allowedTypes && e.disallowedTypes) throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
         var r = o(m, e.renderers),
           u = [
             [a, n]
           ].concat(e.plugins || []).reduce(b, i()),
           h = u.parse(t),
           y = o(e, {
             renderers: r,
             definitions: d(h)
           }),
           w = function(e) {
             var t = [p, s()],
               n = e.disallowedTypes;
             e.allowedTypes && (n = v.filter((function(t) {
               return "root" !== t && -1 === e.allowedTypes.indexOf(t)
             })));
             var r = e.unwrapDisallowed ? "unwrap" : "remove";
             n && n.length > 0 && t.push(c.ofType(n, r));
             e.allowNode && t.push(c.ifNotMatch(e.allowNode, r));
             var o = !e.escapeHtml && !e.skipHtml,
               i = (e.astPlugins || []).some((function(e) {
                 return (Array.isArray(e) ? e[0] : e).identity === g.HtmlParser
               }));
             o && !i && t.push(l);
             return e.astPlugins ? t.concat(e.astPlugins) : t
           }(e),
           _ = u.runSync(h),
           E = w.reduce((function(e, t) {
             return t(e, y)
           }), _);
         return f(E, y)
       };

     function b(e, t) {
       return Array.isArray(t) ? e.use.apply(e, r(t)) : e.use(t)
     }
     y.defaultProps = {
       renderers: {},
       escapeHtml: !0,
       skipHtml: !1,
       sourcePos: !1,
       rawSourcePos: !1,
       transformLinkUri: h,
       astPlugins: [],
       plugins: [],
       parserOptions: {}
     }, y.propTypes = {
       className: u.string,
       source: u.string,
       children: u.string,
       sourcePos: u.bool,
       rawSourcePos: u.bool,
       escapeHtml: u.bool,
       skipHtml: u.bool,
       allowNode: u.func,
       allowedTypes: u.arrayOf(u.oneOf(v)),
       disallowedTypes: u.arrayOf(u.oneOf(v)),
       transformLinkUri: u.oneOfType([u.func, u.bool]),
       linkTarget: u.oneOfType([u.func, u.string]),
       transformImageUri: u.func,
       astPlugins: u.arrayOf(u.func),
       unwrapDisallowed: u.bool,
       renderers: u.object,
       plugins: u.array,
       parserOptions: u.object
     }, y.types = v, y.renderers = m, y.uriTransformer = h, e.exports = y
   }, function(e, t, n) {
     "use strict";
     var r = n(71),
       o = n(72),
       i = n(73),
       a = n(79),
       u = n(81),
       s = n(82);
     e.exports = function e() {
       var t = [],
         n = a(),
         y = {},
         b = !1,
         w = -1;
       return _.data = function(e, t) {
         if (u(e)) return 2 === arguments.length ? (m("data", b), y[e] = t, _) : c.call(y, e) && y[e] || null;
         if (e) return m("data", b), y = e, _;
         return y
       }, _.freeze = E, _.attachers = t, _.use = function(e) {
         var n;
         if (m("use", b), null == e);
         else if ("function" == typeof e) u.apply(null, arguments);
         else {
           if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
           "length" in e ? a(e) : o(e)
         }
         n && (y.settings = r(y.settings || {}, n));
         return _;

         function o(e) {
           a(e.plugins), e.settings && (n = r(n || {}, e.settings))
         }

         function i(e) {
           if ("function" == typeof e) u(e);
           else {
             if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
             "length" in e ? u.apply(null, e) : o(e)
           }
         }

         function a(e) {
           var t, n;
           if (null == e);
           else {
             if (!("object" == typeof e && "length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
             for (t = e.length, n = -1; ++n < t;) i(e[n])
           }
         }

         function u(e, n) {
           var o = S(e);
           o ? (s(o[1]) && s(n) && (n = r(o[1], n)), o[1] = n) : t.push(l.call(arguments))
         }
       }, _.parse = function(e) {
         var t, n = i(e);
         if (E(), d("parse", t = _.Parser), p(t)) return new t(String(n), n).parse();
         return t(String(n), n)
       }, _.stringify = function(e, t) {
         var n, r = i(t);
         if (E(), h("stringify", n = _.Compiler), g(e), p(n)) return new n(e, r).compile();
         return n(e, r)
       }, _.run = k, _.runSync = function(e, t) {
         var n, r = !1;
         return k(e, t, (function(e, t) {
           r = !0, o(e), n = t
         })), v("runSync", "run", r), n
       }, _.process = x, _.processSync = function(e) {
         var t, n = !1;
         return E(), d("processSync", _.Parser), h("processSync", _.Compiler), x(t = i(e), (function(e) {
           n = !0, o(e)
         })), v("processSync", "process", n), t
       }, _;

       function _() {
         for (var n = e(), o = t.length, i = -1; ++i < o;) n.use.apply(null, t[i]);
         return n.data(r(!0, {}, y)), n
       }

       function E() {
         var e, r, o, i;
         if (b) return _;
         for (; ++w < t.length;) r = (e = t[w])[0], null, !1 !== (o = e[1]) && (!0 === o && (e[1] = void 0), "function" == typeof(i = r.apply(_, e.slice(1))) && n.use(i));
         return b = !0, w = 1 / 0, _
       }

       function S(e) {
         for (var n, r = t.length, o = -1; ++o < r;)
           if ((n = t[o])[0] === e) return n
       }

       function k(e, t, r) {
         if (g(e), E(), r || "function" != typeof t || (r = t, t = null), !r) return new Promise(o);

         function o(o, a) {
           n.run(e, i(t), (function(t, n, i) {
             n = n || e, t ? a(t) : o ? o(n) : r(null, n, i)
           }))
         }
         o(null, r)
       }

       function x(e, t) {
         if (E(), d("process", _.Parser), h("process", _.Compiler), !t) return new Promise(n);

         function n(n, r) {
           var o = i(e);
           f.run(_, {
             file: o
           }, (function(e) {
             e ? r(e) : n ? n(o) : t(null, o)
           }))
         }
         n(null, t)
       }
     }().freeze();
     var l = [].slice,
       c = {}.hasOwnProperty,
       f = a().use((function(e, t) {
         t.tree = e.parse(t.file)
       })).use((function(e, t, n) {
         e.run(t.tree, t.file, (function(e, r, o) {
           e ? n(e) : (t.tree = r, t.file = o, n())
         }))
       })).use((function(e, t) {
         t.file.contents = e.stringify(t.tree, t.file)
       }));

     function p(e) {
       return "function" == typeof e && function(e) {
         var t;
         for (t in e) return !0;
         return !1
       }(e.prototype)
     }

     function d(e, t) {
       if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
     }

     function h(e, t) {
       if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
     }

     function m(e, t) {
       if (t) throw new Error(["Cannot invoke `" + e + "` on a frozen processor.\nCreate a new ", "processor first, by invoking it: use `processor()` instead of ", "`processor`."].join(""))
     }

     function g(e) {
       if (!e || !u(e.type)) throw new Error("Expected node, got `" + e + "`")
     }

     function v(e, t, n) {
       if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
     }
   }, function(e, t, n) {
     "use strict";
     var r = Object.prototype.hasOwnProperty,
       o = Object.prototype.toString,
       i = Object.defineProperty,
       a = Object.getOwnPropertyDescriptor,
       u = function(e) {
         return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === o.call(e)
       },
       s = function(e) {
         if (!e || "[object Object]" !== o.call(e)) return !1;
         var t, n = r.call(e, "constructor"),
           i = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
         if (e.constructor && !n && !i) return !1;
         for (t in e);
         return void 0 === t || r.call(e, t)
       },
       l = function(e, t) {
         i && "__proto__" === t.name ? i(e, t.name, {
           enumerable: !0,
           configurable: !0,
           value: t.newValue,
           writable: !0
         }) : e[t.name] = t.newValue
       },
       c = function(e, t) {
         if ("__proto__" === t) {
           if (!r.call(e, t)) return;
           if (a) return a(e, t).value
         }
         return e[t]
       };
     e.exports = function e() {
       var t, n, r, o, i, a, f = arguments[0],
         p = 1,
         d = arguments.length,
         h = !1;
       for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p)
         if (null != (t = arguments[p]))
           for (n in t) r = c(f, n), f !== (o = c(t, n)) && (h && o && (s(o) || (i = u(o))) ? (i ? (i = !1, a = r && u(r) ? r : []) : a = r && s(r) ? r : {}, l(f, {
             name: n,
             newValue: e(h, a, o)
           })) : void 0 !== o && l(f, {
             name: n,
             newValue: o
           }));
       return f
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       if (e) throw e
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(74),
       o = n(76);
     e.exports = o;
     var i = o.prototype;

     function a(e, t, n) {
       var o = this.path,
         i = new r(e, t, n);
       return o && (i.name = o + ":" + i.name, i.file = o), i.fatal = !1, this.messages.push(i), i
     }
     i.message = a, i.info = function() {
       var e = this.message.apply(this, arguments);
       return e.fatal = null, e
     }, i.fail = function() {
       var e = this.message.apply(this, arguments);
       throw e.fatal = !0, e
     }, i.warn = a
   }, function(e, t, n) {
     "use strict";
     var r = n(75);

     function o() {}
     e.exports = a, o.prototype = Error.prototype, a.prototype = new o;
     var i = a.prototype;

     function a(e, t, n) {
       var o, i, a;
       "string" == typeof t && (n = t, t = null), o = function(e) {
         var t, n = [null, null];
         "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
         return n
       }(n), i = r(t) || "1:1", a = {
         start: {
           line: null,
           column: null
         },
         end: {
           line: null,
           column: null
         }
       }, t && t.position && (t = t.position), t && (t.start ? (a = t, t = t.start) : a.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = i, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = a, this.source = o[0], this.ruleId = o[1]
     }
     i.file = "", i.name = "", i.reason = "", i.message = "", i.stack = "", i.fatal = null, i.column = null, i.line = null
   }, function(e, t, n) {
     "use strict";
     var r = {}.hasOwnProperty;

     function o(e) {
       return e && "object" == typeof e || (e = {}), a(e.line) + ":" + a(e.column)
     }

     function i(e) {
       return e && "object" == typeof e || (e = {}), o(e.start) + "-" + o(e.end)
     }

     function a(e) {
       return e && "number" == typeof e ? e : 1
     }
     e.exports = function(e) {
       if (!e || "object" != typeof e) return null;
       if (r.call(e, "position") || r.call(e, "type")) return i(e.position);
       if (r.call(e, "start") || r.call(e, "end")) return i(e);
       if (r.call(e, "line") || r.call(e, "column")) return o(e);
       return null
     }
   }, function(e, t, n) {
     "use strict";
     (function(t) {
       var r = n(34),
         o = n(77),
         i = n(78);
       e.exports = l;
       var a = {}.hasOwnProperty,
         u = l.prototype;
       u.toString = function(e) {
         var t = this.contents || "";
         return i(t) ? t.toString(e) : String(t)
       };
       var s = ["history", "path", "basename", "stem", "extname", "dirname"];

       function l(e) {
         var n, r, o;
         if (e) {
           if ("string" == typeof e || i(e)) e = {
             contents: e
           };
           else if ("message" in e && "messages" in e) return e
         } else e = {};
         if (!(this instanceof l)) return new l(e);
         for (this.data = {}, this.messages = [], this.history = [], this.cwd = t.cwd(), r = -1, o = s.length; ++r < o;) n = s[r], a.call(e, n) && (this[n] = e[n]);
         for (n in e) - 1 === s.indexOf(n) && (this[n] = e[n])
       }

       function c(e, t) {
         if (-1 !== e.indexOf(r.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
       }

       function f(e, t) {
         if (!e) throw new Error("`" + t + "` cannot be empty")
       }

       function p(e, t) {
         if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
       }
       Object.defineProperty(u, "path", {
         get: function() {
           return this.history[this.history.length - 1]
         },
         set: function(e) {
           f(e, "path"), e !== this.path && this.history.push(e)
         }
       }), Object.defineProperty(u, "dirname", {
         get: function() {
           return "string" == typeof this.path ? r.dirname(this.path) : void 0
         },
         set: function(e) {
           p(this.path, "dirname"), this.path = r.join(e || "", this.basename)
         }
       }), Object.defineProperty(u, "basename", {
         get: function() {
           return "string" == typeof this.path ? r.basename(this.path) : void 0
         },
         set: function(e) {
           f(e, "basename"), c(e, "basename"), this.path = r.join(this.dirname || "", e)
         }
       }), Object.defineProperty(u, "extname", {
         get: function() {
           return "string" == typeof this.path ? r.extname(this.path) : void 0
         },
         set: function(e) {
           var t = e || "";
           if (c(t, "extname"), p(this.path, "extname"), t) {
             if ("." !== t.charAt(0)) throw new Error("`extname` must start with `.`");
             if (-1 !== t.indexOf(".", 1)) throw new Error("`extname` cannot contain multiple dots")
           }
           this.path = o(this.path, t)
         }
       }), Object.defineProperty(u, "stem", {
         get: function() {
           return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
         },
         set: function(e) {
           f(e, "stem"), c(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
         }
       })
     }).call(this, n(33))
   }, function(e, t, n) {
     "use strict";
     var r = n(34);
     e.exports = function(e, t) {
       if ("string" != typeof e) return e;
       if (0 === e.length) return e;
       var n = r.basename(e, r.extname(e)) + t;
       return r.join(r.dirname(e), n)
     }
   }, function(e, t) {
     function n(e) {
       return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
     }
     /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
     e.exports = function(e) {
       return null != e && (n(e) || function(e) {
         return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
       }(e) || !!e._isBuffer)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(80);
     e.exports = i, i.wrap = r;
     var o = [].slice;

     function i() {
       var e = [],
         t = {
           run: function() {
             var t = -1,
               n = o.call(arguments, 0, -1),
               i = arguments[arguments.length - 1];
             if ("function" != typeof i) throw new Error("Expected function as last argument, not " + i);

             function a(u) {
               var s = e[++t],
                 l = o.call(arguments, 0),
                 c = l.slice(1),
                 f = n.length,
                 p = -1;
               if (u) i(u);
               else {
                 for (; ++p < f;) null !== c[p] && void 0 !== c[p] || (c[p] = n[p]);
                 n = c, s ? r(s, a).apply(null, n) : i.apply(null, [null].concat(n))
               }
             }
             a.apply(null, [null].concat(n))
           },
           use: function(n) {
             if ("function" != typeof n) throw new Error("Expected `fn` to be a function, not " + n);
             return e.push(n), t
           }
         };
       return t
     }
   }, function(e, t, n) {
     "use strict";
     var r = [].slice;
     e.exports = function(e, t) {
       var n;
       return function() {
         var t, a = r.call(arguments, 0),
           u = e.length > a.length;
         u && a.push(o);
         try {
           t = e.apply(null, a)
         } catch (e) {
           if (u && n) throw e;
           return o(e)
         }
         u || (t && "function" == typeof t.then ? t.then(i, o) : t instanceof Error ? o(t) : i(t))
       };

       function o() {
         n || (n = !0, t.apply(null, arguments))
       }

       function i(e) {
         o(null, e)
       }
     }
   }, function(e, t) {
     var n = Object.prototype.toString;
     e.exports = function(e) {
       return "[object String]" === n.call(e)
     }
   }, function(e, t, n) {
     "use strict";
     var r = Object.prototype.toString;
     e.exports = function(e) {
       var t;
       return "[object Object]" === r.call(e) && (null === (t = Object.getPrototypeOf(e)) || t === Object.getPrototypeOf({}))
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(84),
       o = n(6),
       i = n(86);

     function a(e) {
       var t = r(i);
       t.prototype.options = o(t.prototype.options, this.data("settings"), e), this.Parser = t
     }
     e.exports = a, a.Parser = i
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(85);
     e.exports = function(e) {
       var t, n, i;
       for (n in o(u, e), o(a, u), t = u.prototype)(i = t[n]) && "object" == typeof i && (t[n] = "concat" in i ? i.concat() : r(i));
       return u;

       function a(t) {
         return e.apply(this, t)
       }

       function u() {
         return this instanceof u ? e.apply(this, arguments) : new a(arguments)
       }
     }
   }, function(e, t) {
     "function" == typeof Object.create ? e.exports = function(e, t) {
       t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
         constructor: {
           value: e,
           enumerable: !1,
           writable: !0,
           configurable: !0
         }
       }))
     } : e.exports = function(e, t) {
       if (t) {
         e.super_ = t;
         var n = function() {};
         n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(87),
       i = n(88),
       a = n(89),
       u = n(90),
       s = n(96);

     function l(e, t) {
       this.file = t, this.offset = {}, this.options = r(this.options), this.setOptions({}), this.inList = !1, this.inBlock = !1, this.inLink = !1, this.atStart = !0, this.toOffset = i(t).toOffset, this.unescape = a(this, "escape"), this.decode = u(this)
     }
     e.exports = l;
     var c = l.prototype;

     function f(e) {
       var t, n = [];
       for (t in e) n.push(t);
       return n
     }
     c.setOptions = n(97), c.parse = n(100), c.options = n(36), c.exitStart = o("atStart", !0), c.enterList = o("inList", !1), c.enterLink = o("inLink", !1), c.enterBlock = o("inBlock", !1), c.interruptParagraph = [
       ["thematicBreak"],
       ["atxHeading"],
       ["fencedCode"],
       ["blockquote"],
       ["html"],
       ["setextHeading", {
         commonmark: !1
       }],
       ["definition", {
         commonmark: !1
       }],
       ["footnote", {
         commonmark: !1
       }]
     ], c.interruptList = [
       ["atxHeading", {
         pedantic: !1
       }],
       ["fencedCode", {
         pedantic: !1
       }],
       ["thematicBreak", {
         pedantic: !1
       }],
       ["definition", {
         commonmark: !1
       }],
       ["footnote", {
         commonmark: !1
       }]
     ], c.interruptBlockquote = [
       ["indentedCode", {
         commonmark: !0
       }],
       ["fencedCode", {
         commonmark: !0
       }],
       ["atxHeading", {
         commonmark: !0
       }],
       ["setextHeading", {
         commonmark: !0
       }],
       ["thematicBreak", {
         commonmark: !0
       }],
       ["html", {
         commonmark: !0
       }],
       ["list", {
         commonmark: !0
       }],
       ["definition", {
         commonmark: !1
       }],
       ["footnote", {
         commonmark: !1
       }]
     ], c.blockTokenizers = {
       newline: n(104),
       indentedCode: n(105),
       fencedCode: n(106),
       blockquote: n(107),
       atxHeading: n(108),
       thematicBreak: n(109),
       list: n(110),
       setextHeading: n(112),
       html: n(113),
       footnote: n(114),
       definition: n(116),
       table: n(117),
       paragraph: n(118)
     }, c.inlineTokenizers = {
       escape: n(119),
       autoLink: n(121),
       url: n(122),
       html: n(124),
       link: n(125),
       reference: n(126),
       strong: n(127),
       emphasis: n(129),
       deletion: n(132),
       code: n(134),
       break: n(136),
       text: n(138)
     }, c.blockMethods = f(c.blockTokenizers), c.inlineMethods = f(c.inlineTokenizers), c.tokenizeBlock = s("block"), c.tokenizeInline = s("inline"), c.tokenizeFactory = s
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       return function() {
         var r = n || this,
           o = r[e];
         return r[e] = !t,
           function() {
             r[e] = o
           }
       }
     }
   }, function(e, t, n) {
     "use strict";

     function r(e) {
       return function(t) {
         var n = -1,
           r = e.length;
         if (t < 0) return {};
         for (; ++n < r;)
           if (e[n] > t) return {
             line: n + 1,
             column: t - (e[n - 1] || 0) + 1,
             offset: t
           };
         return {}
       }
     }

     function o(e) {
       return function(t) {
         var n = t && t.line,
           r = t && t.column;
         if (!isNaN(n) && !isNaN(r) && n - 1 in e) return (e[n - 2] || 0) + r - 1 || 0;
         return -1
       }
     }
     e.exports = function(e) {
       var t = function(e) {
         var t = [],
           n = e.indexOf("\n");
         for (; - 1 !== n;) t.push(n + 1), n = e.indexOf("\n", n + 1);
         return t.push(e.length + 1), t
       }(String(e));
       return {
         toPosition: r(t),
         toOffset: o(t)
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       return function(n) {
         var r, o = 0,
           i = n.indexOf("\\"),
           a = e[t],
           u = [];
         for (; - 1 !== i;) u.push(n.slice(o, i)), o = i + 1, (r = n.charAt(o)) && -1 !== a.indexOf(r) || u.push("\\"), i = n.indexOf("\\", o);
         return u.push(n.slice(o)), u.join("")
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(20);
     e.exports = function(e) {
       return i.raw = function(e, i, a) {
         return o(e, r(a, {
           position: t(i),
           warning: n
         }))
       }, i;

       function t(t) {
         for (var n = e.offset, r = t.line, o = []; ++r && r in n;) o.push((n[r] || 0) + 1);
         return {
           start: t,
           indent: o
         }
       }

       function n(t, n, r) {
         3 !== r && e.file.message(t, n)
       }

       function i(r, i, a) {
         o(r, {
           position: t(i),
           warning: n,
           text: a,
           reference: a,
           textContext: e,
           referenceContext: e
         })
       }
     }
   }, function(e) {
     e.exports = JSON.parse('{"AElig":"Ã†","AMP":"&","Aacute":"Ã","Acirc":"Ã‚","Agrave":"Ã€","Aring":"Ã…","Atilde":"Ãƒ","Auml":"Ã„","COPY":"Â©","Ccedil":"Ã‡","ETH":"Ã","Eacute":"Ã‰","Ecirc":"ÃŠ","Egrave":"Ãˆ","Euml":"Ã‹","GT":">","Iacute":"Ã","Icirc":"ÃŽ","Igrave":"ÃŒ","Iuml":"Ã","LT":"<","Ntilde":"Ã‘","Oacute":"Ã“","Ocirc":"Ã”","Ograve":"Ã’","Oslash":"Ã˜","Otilde":"Ã•","Ouml":"Ã–","QUOT":"\\"","REG":"Â®","THORN":"Ãž","Uacute":"Ãš","Ucirc":"Ã›","Ugrave":"Ã™","Uuml":"Ãœ","Yacute":"Ã","aacute":"Ã¡","acirc":"Ã¢","acute":"Â´","aelig":"Ã¦","agrave":"Ã ","amp":"&","aring":"Ã¥","atilde":"Ã£","auml":"Ã¤","brvbar":"Â¦","ccedil":"Ã§","cedil":"Â¸","cent":"Â¢","copy":"Â©","curren":"Â¤","deg":"Â°","divide":"Ã·","eacute":"Ã©","ecirc":"Ãª","egrave":"Ã¨","eth":"Ã°","euml":"Ã«","frac12":"Â½","frac14":"Â¼","frac34":"Â¾","gt":">","iacute":"Ã­","icirc":"Ã®","iexcl":"Â¡","igrave":"Ã¬","iquest":"Â¿","iuml":"Ã¯","laquo":"Â«","lt":"<","macr":"Â¯","micro":"Âµ","middot":"Â·","nbsp":"Â ","not":"Â¬","ntilde":"Ã±","oacute":"Ã³","ocirc":"Ã´","ograve":"Ã²","ordf":"Âª","ordm":"Âº","oslash":"Ã¸","otilde":"Ãµ","ouml":"Ã¶","para":"Â¶","plusmn":"Â±","pound":"Â£","quot":"\\"","raquo":"Â»","reg":"Â®","sect":"Â§","shy":"Â­","sup1":"Â¹","sup2":"Â²","sup3":"Â³","szlig":"ÃŸ","thorn":"Ã¾","times":"Ã—","uacute":"Ãº","ucirc":"Ã»","ugrave":"Ã¹","uml":"Â¨","uuml":"Ã¼","yacute":"Ã½","yen":"Â¥","yuml":"Ã¿"}')
   }, function(e) {
     e.exports = JSON.parse('{"0":"ï¿½","128":"â‚¬","130":"â€š","131":"Æ’","132":"â€ž","133":"â€¦","134":"â€ ","135":"â€¡","136":"Ë†","137":"â€°","138":"Å ","139":"â€¹","140":"Å’","142":"Å½","145":"â€˜","146":"â€™","147":"â€œ","148":"â€","149":"â€¢","150":"â€“","151":"â€”","152":"Ëœ","153":"â„¢","154":"Å¡","155":"â€º","156":"Å“","158":"Å¾","159":"Å¸"}')
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       var t = "string" == typeof e ? e.charCodeAt(0) : e;
       return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(35),
       o = n(15);
     e.exports = function(e) {
       return r(e) || o(e)
     }
   }, function(e, t, n) {
     "use strict";
     var r;
     e.exports = function(e) {
       var t, n = "&" + e + ";";
       if ((r = r || document.createElement("i")).innerHTML = n, 59 === (t = r.textContent).charCodeAt(t.length - 1) && "semi" !== e) return !1;
       return t !== n && t
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       return function(t, n) {
         var i, a, u, s, l, c, f = this,
           p = f.offset,
           d = [],
           h = f[e + "Methods"],
           m = f[e + "Tokenizers"],
           g = n.line,
           v = n.column;
         if (!t) return d;
         _.now = b, _.file = f.file, y("");
         for (; t;) {
           for (i = -1, a = h.length, l = !1; ++i < a && (s = h[i], !(u = m[s]) || u.onlyAtStart && !f.atStart || u.notInList && f.inList || u.notInBlock && f.inBlock || u.notInLink && f.inLink || (c = t.length, u.apply(f, [_, t]), !(l = c !== t.length))););
           l || f.file.fail(new Error("Infinite loop"), _.now())
         }
         return f.eof = b(), d;

         function y(e) {
           for (var t = -1, n = e.indexOf("\n"); - 1 !== n;) g++, t = n, n = e.indexOf("\n", n + 1); - 1 === t ? v += e.length : v = e.length - t, g in p && (-1 !== t ? v += p[g] : v <= p[g] && (v = p[g] + 1))
         }

         function b() {
           var e = {
             line: g,
             column: v
           };
           return e.offset = f.toOffset(e), e
         }

         function w(e) {
           this.start = e, this.end = b()
         }

         function _(e) {
           var n, i = function() {
               var e = [],
                 t = g + 1;
               return function() {
                 for (var n = g + 1; t < n;) e.push((p[t] || 0) + 1), t++;
                 return e
               }
             }(),
             a = (n = b(), function(e, t) {
               var r = e.position,
                 o = r ? r.start : n,
                 i = [],
                 a = r && r.end.line,
                 u = n.line;
               if (e.position = new w(o), r && t && r.indent) {
                 if (i = r.indent, a < u) {
                   for (; ++a < u;) i.push((p[a] || 0) + 1);
                   i.push(n.column)
                 }
                 t = i.concat(t)
               }
               return e.position.indent = t || [], e
             }),
             u = b();
           return function(e) {
             t.substring(0, e.length) !== e && f.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"), b())
           }(e), s.reset = l, l.test = c, s.test = c, t = t.substring(e.length), y(e), i = i(), s;

           function s(e, t) {
             return a(function(e, t) {
               var n = t ? t.children : d,
                 i = n[n.length - 1];
               return i && e.type === i.type && e.type in r && o(i) && o(e) && (e = r[e.type].call(f, i, e)), e !== i && n.push(e), f.atStart && 0 !== d.length && f.exitStart(), e
             }(a(e), t), i)
           }

           function l() {
             var n = s.apply(null, arguments);
             return g = u.line, v = u.column, t = e + t, n
           }

           function c() {
             var n = a({});
             return g = u.line, v = u.column, t = e + t, n.position
           }
         }
       }
     };
     var r = {
       text: function(e, t) {
         return e.value += t.value, e
       },
       blockquote: function(e, t) {
         if (this.options.commonmark) return t;
         return e.children = e.children.concat(t.children), e
       }
     };

     function o(e) {
       var t, n;
       return "text" !== e.type || !e.position || (t = e.position.start, n = e.position.end, t.line !== n.line || n.column - t.column === e.value.length)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(98),
       i = n(36);
     e.exports = function(e) {
       var t, n, a = this.options;
       if (null == e) e = {};
       else {
         if ("object" != typeof e) throw new Error("Invalid value `" + e + "` for setting `options`");
         e = r(e)
       }
       for (t in i) {
         if (null == (n = e[t]) && (n = a[t]), "blocks" !== t && "boolean" != typeof n || "blocks" === t && "object" != typeof n) throw new Error("Invalid value `" + n + "` for setting `options." + t + "`");
         e[t] = n
       }
       return this.options = e, this.escape = o(e), this
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = a;
     var r = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"],
       o = r.concat(["~", "|"]),
       i = o.concat(["\n", '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);

     function a(e) {
       var t = e || {};
       return t.commonmark ? i : t.gfm ? o : r
     }
     a.default = r, a.gfm = o, a.commonmark = i
   }, function(e) {
     e.exports = JSON.parse('["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]')
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(101);
     e.exports = function() {
       var e, t = String(this.file),
         n = {
           line: 1,
           column: 1,
           offset: 0
         },
         a = r(n);
       65279 === (t = t.replace(i, "\n")).charCodeAt(0) && (t = t.slice(1), a.column++, a.offset++);
       e = {
         type: "root",
         children: this.tokenizeBlock(t, a),
         position: {
           start: n,
           end: this.eof || r(n)
         }
       }, this.options.position || o(e, !0);
       return e
     };
     var i = /\r\n|\r/g
   }, function(e, t, n) {
     "use strict";
     var r = n(16);

     function o(e) {
       delete e.position
     }

     function i(e) {
       e.position = void 0
     }
     e.exports = function(e, t) {
       return r(e, t ? o : i), e
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = o;
     var r = n(103);

     function o(e, t, n, o) {
       var a;

       function u(e, r, s) {
         var l, c = [];
         return (t && !a(e, r, s[s.length - 1] || null) || !1 !== (c = i(n(e, s)))[0]) && e.children && "skip" !== c[0] && !1 === (l = i(function(e, t) {
           var n, r = o ? -1 : 1,
             i = (o ? e.length : -1) + r;
           for (; i > -1 && i < e.length;) {
             if (!1 === (n = u(e[i], i, t))[0]) return n;
             i = "number" == typeof n[1] ? n[1] : i + r
           }
         }(e.children, s.concat(e))))[0] ? l : c
       }
       "function" == typeof t && "function" != typeof n && (o = n, n = t, t = null), a = r(t), u(e, null, [])
     }

     function i(e) {
       return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [!0, e] : [e]
     }
     o.CONTINUE = !0, o.SKIP = "skip", o.EXIT = !1
   }, function(e, t, n) {
     "use strict";

     function r(e) {
       if ("string" == typeof e) return function(e) {
         return function(t) {
           return Boolean(t && t.type === e)
         }
       }(e);
       if (null == e) return a;
       if ("object" == typeof e) return ("length" in e ? i : o)(e);
       if ("function" == typeof e) return e;
       throw new Error("Expected function, string, or object as test")
     }

     function o(e) {
       return function(t) {
         var n;
         for (n in e)
           if (t[n] !== e[n]) return !1;
         return !0
       }
     }

     function i(e) {
       var t = function(e) {
           for (var t = [], n = e.length, o = -1; ++o < n;) t[o] = r(e[o]);
           return t
         }(e),
         n = t.length;
       return function() {
         var e = -1;
         for (; ++e < n;)
           if (t[e].apply(this, arguments)) return !0;
         return !1
       }
     }

     function a() {
       return !0
     }
     e.exports = r
   }, function(e, t, n) {
     "use strict";
     var r = n(5);
     e.exports = function(e, t, n) {
       var o, i, a, u, s = t.charAt(0);
       if ("\n" !== s) return;
       if (n) return !0;
       u = 1, o = t.length, i = s, a = "";
       for (; u < o && (s = t.charAt(u), r(s));) a += s, "\n" === s && (i += a, a = ""), u++;
       e(i)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(21),
       o = n(22);
     e.exports = function(e, t, n) {
       var r, a, u, s = -1,
         l = t.length,
         c = "",
         f = "",
         p = "",
         d = "";
       for (; ++s < l;)
         if (r = t.charAt(s), u)
           if (u = !1, c += p, f += d, p = "", d = "", "\n" === r) p = r, d = r;
           else
             for (c += r, f += r; ++s < l;) {
               if (!(r = t.charAt(s)) || "\n" === r) {
                 d = r, p = r;
                 break
               }
               c += r, f += r
             } else if (" " === r && t.charAt(s + 1) === r && t.charAt(s + 2) === r && t.charAt(s + 3) === r) p += i, s += 3, u = !0;
         else if ("\t" === r) p += r, u = !0;
         else {
           for (a = "";
                "\t" === r || " " === r;) a += r, r = t.charAt(++s);
           if ("\n" !== r) break;
           p += a + r, d += r
         }
       if (f) return !!n || e(c)({
         type: "code",
         lang: null,
         value: o(f)
       })
     };
     var i = r(" ", 4)
   }, function(e, t, n) {
     "use strict";
     var r = n(22);
     e.exports = function(e, t, n) {
       var o, i, a, u, s, l, c, f, p, d, h, m = this.options,
         g = t.length + 1,
         v = 0,
         y = "";
       if (!m.gfm) return;
       for (; v < g && (" " === (a = t.charAt(v)) || "\t" === a);) y += a, v++;
       if (d = v, "~" !== (a = t.charAt(v)) && "`" !== a) return;
       v++, i = a, o = 1, y += a;
       for (; v < g && (a = t.charAt(v)) === i;) y += a, o++, v++;
       if (o < 3) return;
       for (; v < g && (" " === (a = t.charAt(v)) || "\t" === a);) y += a, v++;
       u = "", s = "";
       for (; v < g && "\n" !== (a = t.charAt(v)) && "~" !== a && "`" !== a;) " " === a || "\t" === a ? s += a : (u += s + a, s = ""), v++;
       if ((a = t.charAt(v)) && "\n" !== a) return;
       if (n) return !0;
       (h = e.now()).column += y.length, h.offset += y.length, y += u, u = this.decode.raw(this.unescape(u), h), s && (y += s);
       s = "", f = "", p = "", l = "", c = "";
       for (; v < g;)
         if (a = t.charAt(v), l += f, c += p, f = "", p = "", "\n" === a) {
           for (l ? (f += a, p += a) : y += a, s = "", v++; v < g && " " === (a = t.charAt(v));) s += a, v++;
           if (f += s, p += s.slice(d), !(s.length >= 4)) {
             for (s = ""; v < g && (a = t.charAt(v)) === i;) s += a, v++;
             if (f += s, p += s, !(s.length < o)) {
               for (s = ""; v < g && (" " === (a = t.charAt(v)) || "\t" === a);) f += a, p += a, v++;
               if (!a || "\n" === a) break
             }
           }
         } else l += a, p += a, v++;
       return e(y += l + f)({
         type: "code",
         lang: u || null,
         value: r(c)
       })
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(23);
     e.exports = function(e, t, n) {
       var i, a, u, s, l, c, f, p, d, h = this.offset,
         m = this.blockTokenizers,
         g = this.interruptBlockquote,
         v = e.now(),
         y = v.line,
         b = t.length,
         w = [],
         _ = [],
         E = [],
         S = 0;
       for (; S < b && (" " === (a = t.charAt(S)) || "\t" === a);) S++;
       if (">" !== t.charAt(S)) return;
       if (n) return !0;
       S = 0;
       for (; S < b;) {
         for (s = t.indexOf("\n", S), f = S, p = !1, -1 === s && (s = b); S < b && (" " === (a = t.charAt(S)) || "\t" === a);) S++;
         if (">" === t.charAt(S) ? (S++, p = !0, " " === t.charAt(S) && S++) : S = f, l = t.slice(S, s), !p && !r(l)) {
           S = f;
           break
         }
         if (!p && (u = t.slice(S), o(g, m, this, [e, u, !0]))) break;
         c = f === S ? l : t.slice(f, s), E.push(S - f), w.push(c), _.push(l), S = s + 1
       }
       S = -1, b = E.length, i = e(w.join("\n"));
       for (; ++S < b;) h[y] = (h[y] || 0) + E[S], y++;
       return d = this.enterBlock(), _ = this.tokenizeBlock(_.join("\n"), v), d(), i({
         type: "blockquote",
         children: _
       })
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       var r, o, i, a = this.options,
         u = t.length + 1,
         s = -1,
         l = e.now(),
         c = "",
         f = "";
       for (; ++s < u;) {
         if (" " !== (r = t.charAt(s)) && "\t" !== r) {
           s--;
           break
         }
         c += r
       }
       i = 0;
       for (; ++s <= u;) {
         if ("#" !== (r = t.charAt(s))) {
           s--;
           break
         }
         c += r, i++
       }
       if (i > 6) return;
       if (!i || !a.pedantic && "#" === t.charAt(s + 1)) return;
       u = t.length + 1, o = "";
       for (; ++s < u;) {
         if (" " !== (r = t.charAt(s)) && "\t" !== r) {
           s--;
           break
         }
         o += r
       }
       if (!a.pedantic && 0 === o.length && r && "\n" !== r) return;
       if (n) return !0;
       c += o, o = "", f = "";
       for (; ++s < u && (r = t.charAt(s)) && "\n" !== r;)
         if (" " === r || "\t" === r || "#" === r) {
           for (;
             " " === r || "\t" === r;) o += r, r = t.charAt(++s);
           for (;
             "#" === r;) o += r, r = t.charAt(++s);
           for (;
             " " === r || "\t" === r;) o += r, r = t.charAt(++s);
           s--
         } else f += o + r, o = "";
       return l.column += c.length, l.offset += c.length, e(c += f + o)({
         type: "heading",
         depth: i,
         children: this.tokenizeInline(f, l)
       })
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       var r, o, i, a, u = -1,
         s = t.length + 1,
         l = "";
       for (; ++u < s && ("\t" === (r = t.charAt(u)) || " " === r);) l += r;
       if ("*" !== r && "-" !== r && "_" !== r) return;
       o = r, l += r, i = 1, a = "";
       for (; ++u < s;)
         if ((r = t.charAt(u)) === o) i++, l += a + o, a = "";
         else {
           if (" " !== r) return i >= 3 && (!r || "\n" === r) ? (l += a, !!n || e(l)({
             type: "thematicBreak"
           })) : void 0;
           a += r
         }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(21),
       i = n(15),
       a = n(37),
       u = n(111),
       s = n(23);
     e.exports = function(e, t, n) {
       var o, a, u, l, c, f, p, d, y, b, w, _, E, S, k, x, T, C, O, I, M, A, P, N, j = this.options.commonmark,
         D = this.options.pedantic,
         R = this.blockTokenizers,
         L = this.interruptList,
         z = 0,
         U = t.length,
         B = null,
         F = 0;
       for (; z < U;) {
         if ("\t" === (l = t.charAt(z))) F += 4 - F % 4;
         else {
           if (" " !== l) break;
           F++
         }
         z++
       }
       if (F >= 4) return;
       if (l = t.charAt(z), o = j ? g : m, !0 === h[l]) c = l, u = !1;
       else {
         for (u = !0, a = ""; z < U && (l = t.charAt(z), i(l));) a += l, z++;
         if (l = t.charAt(z), !a || !0 !== o[l]) return;
         B = parseInt(a, 10), c = l
       }
       if (" " !== (l = t.charAt(++z)) && "\t" !== l) return;
       if (n) return !0;
       z = 0, S = [], k = [], x = [];
       for (; z < U;) {
         for (f = t.indexOf("\n", z), p = z, d = !1, N = !1, -1 === f && (f = U), P = z + 4, F = 0; z < U;) {
           if ("\t" === (l = t.charAt(z))) F += 4 - F % 4;
           else {
             if (" " !== l) break;
             F++
           }
           z++
         }
         if (F >= 4 && (N = !0), T && F >= T.indent && (N = !0), l = t.charAt(z), y = null, !N) {
           if (!0 === h[l]) y = l, z++, F++;
           else {
             for (a = ""; z < U && (l = t.charAt(z), i(l));) a += l, z++;
             l = t.charAt(z), z++, a && !0 === o[l] && (y = l, F += a.length + 1)
           }
           if (y)
             if ("\t" === (l = t.charAt(z))) F += 4 - F % 4, z++;
             else if (" " === l) {
               for (P = z + 4; z < P && " " === t.charAt(z);) z++, F++;
               z === P && " " === t.charAt(z) && (z -= 3, F -= 3)
             } else "\n" !== l && "" !== l && (y = null)
         }
         if (y) {
           if (!D && c !== y) break;
           d = !0
         } else j || N || " " !== t.charAt(p) ? j && T && (N = F >= T.indent || F > 4) : N = !0, d = !1, z = p;
         if (w = t.slice(p, f), b = p === z ? w : t.slice(z, f), ("*" === y || "_" === y || "-" === y) && R.thematicBreak.call(this, e, w, !0)) break;
         if (_ = E, E = !r(b).length, N && T) T.value = T.value.concat(x, w), k = k.concat(x, w), x = [];
         else if (d) 0 !== x.length && (T.value.push(""), T.trail = x.concat()), T = {
           value: [w],
           indent: F,
           trail: []
         }, S.push(T), k = k.concat(x, w), x = [];
         else if (E) {
           if (_) break;
           x.push(w)
         } else {
           if (_) break;
           if (s(L, R, this, [e, w, !0])) break;
           T.value = T.value.concat(x, w), k = k.concat(x, w), x = []
         }
         z = f + 1
       }
       M = e(k.join("\n")).reset({
         type: "list",
         ordered: u,
         start: B,
         loose: null,
         children: []
       }), C = this.enterList(), O = this.enterBlock(), I = !1, z = -1, U = S.length;
       for (; ++z < U;) T = S[z].value.join("\n"), A = e.now(), (T = e(T)(v(this, T, A), M)).loose && (I = !0), T = S[z].trail.join("\n"), z !== U - 1 && (T += "\n"), e(T);
       return C(), O(), M.loose = I, M
     };
     var l = /\n\n(?!\s*$)/,
       c = /^\[([ \t]|x|X)][ \t]/,
       f = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
       p = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
       d = /^( {1,4}|\t)?/gm,
       h = {
         "*": !0,
         "+": !0,
         "-": !0
       },
       m = {
         ".": !0
       },
       g = {};

     function v(e, t, n) {
       var r, o, i = e.offset,
         a = e.options.pedantic ? y : b,
         u = null;
       return t = a.apply(null, arguments), e.options.gfm && (r = t.match(c)) && (o = r[0].length, u = "x" === r[1].toLowerCase(), i[n.line] += o, t = t.slice(o)), {
         type: "listItem",
         loose: l.test(t) || "\n" === t.charAt(t.length - 1),
         checked: u,
         children: e.tokenizeBlock(t, n)
       }
     }

     function y(e, t, n) {
       var r = e.offset,
         o = n.line;
       return t = t.replace(p, i), o = n.line, t.replace(d, i);

       function i(e) {
         return r[o] = (r[o] || 0) + e.length, o++, ""
       }
     }

     function b(e, t, n) {
       var r, i, s, l, c, p, d, h = e.offset,
         m = n.line;
       for (l = (t = t.replace(f, (function(e, t, n, a, u) {
         i = t + n + a, s = u, Number(n) < 10 && i.length % 2 == 1 && (n = " " + n);
         return (r = t + o(" ", n.length) + a) + s
       }))).split("\n"), (c = u(t, a(r).indent).split("\n"))[0] = s, h[m] = (h[m] || 0) + i.length, m++, p = 0, d = l.length; ++p < d;) h[m] = (h[m] || 0) + l[p].length - c[p].length, m++;
       return c.join("\n")
     }
     g["."] = !0, g[")"] = !0
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(21),
       i = n(37);
     e.exports = function(e, t) {
       var n, a, u, s, l = e.split("\n"),
         c = l.length + 1,
         f = 1 / 0,
         p = [];
       l.unshift(o(" ", t) + "!");
       for (; c--;)
         if (a = i(l[c]), p[c] = a.stops, 0 !== r(l[c]).length) {
           if (!a.indent) {
             f = 1 / 0;
             break
           }
           a.indent > 0 && a.indent < f && (f = a.indent)
         } if (f !== 1 / 0)
         for (c = l.length; c--;) {
           for (u = p[c], n = f; n && !(n in u);) n--;
           s = 0 !== r(l[c]).length && f && n !== f ? "\t" : "", l[c] = s + l[c].slice(n in u ? u[n] + 1 : 0)
         }
       return l.shift(), l.join("\n")
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       var o, i, a, u, s, l = e.now(),
         c = t.length,
         f = -1,
         p = "";
       for (; ++f < c;) {
         if (" " !== (a = t.charAt(f)) || f >= 3) {
           f--;
           break
         }
         p += a
       }
       o = "", i = "";
       for (; ++f < c;) {
         if ("\n" === (a = t.charAt(f))) {
           f--;
           break
         }
         " " === a || "\t" === a ? i += a : (o += i + a, i = "")
       }
       if (l.column += p.length, l.offset += p.length, p += o + i, a = t.charAt(++f), u = t.charAt(++f), "\n" !== a || !r[u]) return;
       p += a, i = u, s = r[u];
       for (; ++f < c;) {
         if ((a = t.charAt(f)) !== u) {
           if ("\n" !== a) return;
           f--;
           break
         }
         i += a
       }
       if (n) return !0;
       return e(p + i)({
         type: "heading",
         depth: s,
         children: this.tokenizeInline(o, l)
       })
     };
     var r = {};
     r["="] = 1, r["-"] = 2
   }, function(e, t, n) {
     "use strict";
     var r = n(38).openCloseTag;
     e.exports = function(e, t, n) {
       var o, i, a, u, s, l, c, f = this.options.blocks,
         p = t.length,
         d = 0,
         h = [
           [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
           [/^<!--/, /-->/, !0],
           [/^<\?/, /\?>/, !0],
           [/^<![A-Za-z]/, />/, !0],
           [/^<!\[CDATA\[/, /\]\]>/, !0],
           [new RegExp("^</?(" + f.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
           [new RegExp(r.source + "\\s*$"), /^$/, !1]
         ];
       for (; d < p && ("\t" === (u = t.charAt(d)) || " " === u);) d++;
       if ("<" !== t.charAt(d)) return;
       o = -1 === (o = t.indexOf("\n", d + 1)) ? p : o, i = t.slice(d, o), a = -1, s = h.length;
       for (; ++a < s;)
         if (h[a][0].test(i)) {
           l = h[a];
           break
         } if (!l) return;
       if (n) return l[2];
       if (d = o, !l[1].test(i))
         for (; d < p;) {
           if (o = -1 === (o = t.indexOf("\n", d + 1)) ? p : o, i = t.slice(d + 1, o), l[1].test(i)) {
             i && (d = o);
             break
           }
           d = o
         }
       return c = t.slice(0, d), e(c)({
         type: "html",
         value: c
       })
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(24);
     e.exports = a, a.notInList = !0, a.notInBlock = !0;
     var i = /^( {4}|\t)?/gm;

     function a(e, t, n) {
       var a, u, s, l, c, f, p, d, h, m, g, v, y = this.offset;
       if (this.options.footnotes) {
         for (a = 0, u = t.length, s = "", l = e.now(), c = l.line; a < u && (h = t.charAt(a), r(h));) s += h, a++;
         if ("[" === t.charAt(a) && "^" === t.charAt(a + 1)) {
           for (a = (s += "[^").length, p = ""; a < u && "]" !== (h = t.charAt(a));) "\\" === h && (p += h, a++, h = t.charAt(a)), p += h, a++;
           if (p && "]" === t.charAt(a) && ":" === t.charAt(a + 1)) {
             if (n) return !0;
             for (m = o(p), a = (s += p + "]:").length; a < u && ("\t" === (h = t.charAt(a)) || " " === h);) s += h, a++;
             for (l.column += s.length, l.offset += s.length, p = "", f = "", d = ""; a < u;) {
               if ("\n" === (h = t.charAt(a))) {
                 for (d = h, a++; a < u && "\n" === (h = t.charAt(a));) d += h, a++;
                 for (p += d, d = ""; a < u && " " === (h = t.charAt(a));) d += h, a++;
                 if (0 === d.length) break;
                 p += d
               }
               p && (f += p, p = ""), f += h, a++
             }
             return s += f, f = f.replace(i, (function(e) {
               return y[c] = (y[c] || 0) + e.length, c++, ""
             })), g = e(s), v = this.enterBlock(), f = this.tokenizeBlock(f, l), v(), g({
               type: "footnoteDefinition",
               identifier: m,
               children: f
             })
           }
         }
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       return String(e).replace(/\s+/g, " ")
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(24);
     e.exports = i, i.notInList = !0, i.notInBlock = !0;

     function i(e, t, n) {
       for (var r, i, s, l, c, f, p, d, h = this.options.commonmark, m = 0, g = t.length, v = ""; m < g && (" " === (l = t.charAt(m)) || "\t" === l);) v += l, m++;
       if ("[" === (l = t.charAt(m))) {
         for (m++, v += l, s = ""; m < g && "]" !== (l = t.charAt(m));) "\\" === l && (s += l, m++, l = t.charAt(m)), s += l, m++;
         if (s && "]" === t.charAt(m) && ":" === t.charAt(m + 1)) {
           for (f = s, m = (v += s + "]:").length, s = ""; m < g && ("\t" === (l = t.charAt(m)) || " " === l || "\n" === l);) v += l, m++;
           if (s = "", r = v, "<" === (l = t.charAt(m))) {
             for (m++; m < g && a(l = t.charAt(m));) s += l, m++;
             if ((l = t.charAt(m)) === a.delimiter) v += "<" + s + l, m++;
             else {
               if (h) return;
               m -= s.length + 1, s = ""
             }
           }
           if (!s) {
             for (; m < g && u(l = t.charAt(m));) s += l, m++;
             v += s
           }
           if (s) {
             for (p = s, s = ""; m < g && ("\t" === (l = t.charAt(m)) || " " === l || "\n" === l);) s += l, m++;
             if (c = null, '"' === (l = t.charAt(m)) ? c = '"' : "'" === l ? c = "'" : "(" === l && (c = ")"), c) {
               if (!s) return;
               for (m = (v += s + l).length, s = ""; m < g && (l = t.charAt(m)) !== c;) {
                 if ("\n" === l) {
                   if (m++, "\n" === (l = t.charAt(m)) || l === c) return;
                   s += "\n"
                 }
                 s += l, m++
               }
               if ((l = t.charAt(m)) !== c) return;
               i = v, v += s + l, m++, d = s, s = ""
             } else s = "", m = v.length;
             for (; m < g && ("\t" === (l = t.charAt(m)) || " " === l);) v += l, m++;
             return (l = t.charAt(m)) && "\n" !== l ? void 0 : !!n || (r = e(r).test().end, p = this.decode.raw(this.unescape(p), r, {
               nonTerminated: !1
             }), d && (i = e(i).test().end, d = this.decode.raw(this.unescape(d), i)), e(v)({
               type: "definition",
               identifier: o(f),
               title: d || null,
               url: p
             }))
           }
         }
       }
     }

     function a(e) {
       return ">" !== e && "[" !== e && "]" !== e
     }

     function u(e) {
       return "[" !== e && "]" !== e && !r(e)
     }
     a.delimiter = ">"
   }, function(e, t, n) {
     "use strict";
     var r = n(5);
     e.exports = function(e, t, n) {
       var o, i, a, u, s, l, c, f, p, d, h, m, g, v, y, b, w, _, E, S, k, x, T, C;
       if (!this.options.gfm) return;
       o = 0, _ = 0, l = t.length + 1, c = [];
       for (; o < l;) {
         if (x = t.indexOf("\n", o), T = t.indexOf("|", o + 1), -1 === x && (x = t.length), -1 === T || T > x) {
           if (_ < 2) return;
           break
         }
         c.push(t.slice(o, x)), _++, o = x + 1
       }
       u = c.join("\n"), i = c.splice(1, 1)[0] || [], o = 0, l = i.length, _--, a = !1, h = [];
       for (; o < l;) {
         if ("|" === (p = i.charAt(o))) {
           if (d = null, !1 === a) {
             if (!1 === C) return
           } else h.push(a), a = !1;
           C = !1
         } else if ("-" === p) d = !0, a = a || null;
         else if (":" === p) a = "left" === a ? "center" : d && null === a ? "right" : "left";
         else if (!r(p)) return;
         o++
       }!1 !== a && h.push(a);
       if (h.length < 1) return;
       if (n) return !0;
       w = -1, S = [], k = e(u).reset({
         type: "table",
         align: h,
         children: S
       });
       for (; ++w < _;) {
         for (E = c[w], s = {
           type: "tableRow",
           children: []
         }, w && e("\n"), e(E).reset(s, k), l = E.length + 1, o = 0, f = "", m = "", g = !0, v = null, y = null; o < l;)
           if ("\t" !== (p = E.charAt(o)) && " " !== p) {
             if ("" === p || "|" === p)
               if (g) e(p);
               else {
                 if (p && y) {
                   f += p, o++;
                   continue
                 }!m && !p || g || (u = m, f.length > 1 && (p ? (u += f.slice(0, f.length - 1), f = f.charAt(f.length - 1)) : (u += f, f = "")), b = e.now(), e(u)({
                   type: "tableCell",
                   children: this.tokenizeInline(m, b)
                 }, s)), e(f + p), f = "", m = ""
               }
             else if (f && (m += f, f = ""), m += p, "\\" === p && o !== l - 2 && (m += E.charAt(o + 1), o++), "`" === p) {
               for (v = 1; E.charAt(o + 1) === p;) m += p, o++, v++;
               y ? v >= y && (y = 0) : y = v
             }
             g = !1, o++
           } else m ? f += p : e(p), o++;
         w || e("\n" + i)
       }
       return k
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(15),
       i = n(22),
       a = n(23);
     e.exports = function(e, t, n) {
       var u, s, l, c, f, p = this.options,
         d = p.commonmark,
         h = p.gfm,
         m = this.blockTokenizers,
         g = this.interruptParagraph,
         v = t.indexOf("\n"),
         y = t.length;
       for (; v < y;) {
         if (-1 === v) {
           v = y;
           break
         }
         if ("\n" === t.charAt(v + 1)) break;
         if (d) {
           for (c = 0, u = v + 1; u < y;) {
             if ("\t" === (l = t.charAt(u))) {
               c = 4;
               break
             }
             if (" " !== l) break;
             c++, u++
           }
           if (c >= 4) {
             v = t.indexOf("\n", v + 1);
             continue
           }
         }
         if (s = t.slice(v + 1), a(g, m, this, [e, s, !0])) break;
         if (m.list.call(this, e, s, !0) && (this.inList || d || h && !o(r.left(s).charAt(0)))) break;
         if (u = v, -1 !== (v = t.indexOf("\n", v + 1)) && "" === r(t.slice(u, v))) {
           v = u;
           break
         }
       }
       if (s = t.slice(0, v), "" === r(s)) return e(s), null;
       if (n) return !0;
       return f = e.now(), s = i(s), e(s)({
         type: "paragraph",
         children: this.tokenizeInline(s, f)
       })
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(120);

     function o(e, t, n) {
       var r, o;
       if ("\\" === t.charAt(0) && (r = t.charAt(1), -1 !== this.escape.indexOf(r))) return !!n || (o = "\n" === r ? {
         type: "break"
       } : {
         type: "text",
         value: r
       }, e("\\" + r)(o))
     }
     e.exports = o, o.locator = r
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       return e.indexOf("\\", t)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(20),
       i = n(39);
     e.exports = u, u.locator = i, u.notInLink = !0;
     var a = "mailto:".length;

     function u(e, t, n) {
       var i, u, s, l, c, f, p, d, h, m, g;
       if ("<" === t.charAt(0)) {
         for (this, i = "", u = t.length, s = 0, l = "", f = !1, p = "", s++, i = "<"; s < u && (c = t.charAt(s), !(r(c) || ">" === c || "@" === c || ":" === c && "/" === t.charAt(s + 1)));) l += c, s++;
         if (l) {
           if (p += l, l = "", p += c = t.charAt(s), s++, "@" === c) f = !0;
           else {
             if (":" !== c || "/" !== t.charAt(s + 1)) return;
             p += "/", s++
           }
           for (; s < u && (c = t.charAt(s), !r(c) && ">" !== c);) l += c, s++;
           if (c = t.charAt(s), l && ">" === c) return !!n || (h = p += l, i += p + c, (d = e.now()).column++, d.offset++, f && ("mailto:" === p.slice(0, a).toLowerCase() ? (h = h.substr(a), d.column += a, d.offset += a) : p = "mailto:" + p), m = this.inlineTokenizers, this.inlineTokenizers = {
             text: m.text
           }, g = this.enterLink(), h = this.tokenizeInline(h, d), this.inlineTokenizers = m, g(), e(i)({
             type: "link",
             title: null,
             url: o(p, {
               nonTerminated: !1
             }),
             children: h
           }))
         }
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(20),
       o = n(5),
       i = n(123);
     e.exports = s, s.locator = i, s.notInLink = !0;
     var a = ["http://", "https://", "mailto:"],
       u = a.length;

     function s(e, t, n) {
       var i, s, l, c, f, p, d, h, m, g, v, y;
       if (this.options.gfm) {
         for (i = "", c = -1, h = u; ++c < h;)
           if (p = a[c], (d = t.slice(0, p.length)).toLowerCase() === p) {
             i = d;
             break
           } if (i) {
           for (c = i.length, h = t.length, m = "", g = 0; c < h && (l = t.charAt(c), !o(l) && "<" !== l) && ("." !== l && "," !== l && ":" !== l && ";" !== l && '"' !== l && "'" !== l && ")" !== l && "]" !== l || (v = t.charAt(c + 1)) && !o(v)) && ("(" !== l && "[" !== l || g++, ")" !== l && "]" !== l || !(--g < 0));) m += l, c++;
           if (m) {
             if (s = i += m, "mailto:" === p) {
               if (-1 === (f = m.indexOf("@")) || f === h - 1) return;
               s = s.substr("mailto:".length)
             }
             return !!n || (y = this.enterLink(), s = this.tokenizeInline(s, e.now()), y(), e(i)({
               type: "link",
               title: null,
               url: r(i, {
                 nonTerminated: !1
               }),
               children: s
             }))
           }
         }
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       var n, o = r.length,
         i = -1,
         a = -1;
       if (!this.options.gfm) return -1;
       for (; ++i < o;) - 1 !== (n = e.indexOf(r[i], t)) && (n < a || -1 === a) && (a = n);
       return a
     };
     var r = ["https://", "http://", "mailto:"]
   }, function(e, t, n) {
     "use strict";
     var r = n(35),
       o = n(39),
       i = n(38).tag;
     e.exports = s, s.locator = o;
     var a = /^<a /i,
       u = /^<\/a>/i;

     function s(e, t, n) {
       var o, s, l = t.length;
       if (!("<" !== t.charAt(0) || l < 3) && (o = t.charAt(1), (r(o) || "?" === o || "!" === o || "/" === o) && (s = t.match(i)))) return !!n || (s = s[0], !this.inLink && a.test(s) ? this.inLink = !0 : this.inLink && u.test(s) && (this.inLink = !1), e(s)({
         type: "html",
         value: s
       }))
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(40);
     e.exports = s, s.locator = o;
     var i = {}.hasOwnProperty,
       a = {
         '"': '"',
         "'": "'"
       },
       u = {};

     function s(e, t, n) {
       var o, s, l, c, f, p, d, h, m, g, v, y, b, w, _, E, S, k, x, T = "",
         C = 0,
         O = t.charAt(0),
         I = this.options.pedantic,
         M = this.options.commonmark,
         A = this.options.gfm;
       if ("!" === O && (m = !0, T = O, O = t.charAt(++C)), "[" === O && (m || !this.inLink)) {
         for (T += O, _ = "", C++, y = t.length, w = 0, (S = e.now()).column += C, S.offset += C; C < y;) {
           if (p = O = t.charAt(C), "`" === O) {
             for (s = 1;
                  "`" === t.charAt(C + 1);) p += O, C++, s++;
             l ? s >= l && (l = 0) : l = s
           } else if ("\\" === O) C++, p += t.charAt(C);
           else if (l && !A || "[" !== O) {
             if ((!l || A) && "]" === O) {
               if (!w) {
                 if (!I)
                   for (; C < y && (O = t.charAt(C + 1), r(O));) p += O, C++;
                 if ("(" !== t.charAt(C + 1)) return;
                 p += "(", o = !0, C++;
                 break
               }
               w--
             }
           } else w++;
           _ += p, p = "", C++
         }
         if (o) {
           for (g = _, T += _ + p, C++; C < y && (O = t.charAt(C), r(O));) T += O, C++;
           if (O = t.charAt(C), h = M ? u : a, _ = "", c = T, "<" === O) {
             for (C++, c += "<"; C < y && ">" !== (O = t.charAt(C));) {
               if (M && "\n" === O) return;
               _ += O, C++
             }
             if (">" !== t.charAt(C)) return;
             T += "<" + _ + ">", E = _, C++
           } else {
             for (O = null, p = ""; C < y && (O = t.charAt(C), !p || !i.call(h, O));) {
               if (r(O)) {
                 if (!I) break;
                 p += O
               } else {
                 if ("(" === O) w++;
                 else if (")" === O) {
                   if (0 === w) break;
                   w--
                 }
                 _ += p, p = "", "\\" === O && (_ += "\\", O = t.charAt(++C)), _ += O
               }
               C++
             }
             E = _, C = (T += _).length
           }
           for (_ = ""; C < y && (O = t.charAt(C), r(O));) _ += O, C++;
           if (O = t.charAt(C), T += _, _ && i.call(h, O))
             if (C++, T += O, _ = "", v = h[O], f = T, M) {
               for (; C < y && (O = t.charAt(C)) !== v;) "\\" === O && (_ += "\\", O = t.charAt(++C)), C++, _ += O;
               if ((O = t.charAt(C)) !== v) return;
               for (b = _, T += _ + O, C++; C < y && (O = t.charAt(C), r(O));) T += O, C++
             } else
               for (p = ""; C < y;) {
                 if ((O = t.charAt(C)) === v) d && (_ += v + p, p = ""), d = !0;
                 else if (d) {
                   if (")" === O) {
                     T += _ + v + p, b = _;
                     break
                   }
                   r(O) ? p += O : (_ += v + p + O, p = "", d = !1)
                 } else _ += O;
                 C++
               }
           if (")" === t.charAt(C)) return !!n || (T += ")", E = this.decode.raw(this.unescape(E), e(c).test().end, {
             nonTerminated: !1
           }), b && (f = e(f).test().end, b = this.decode.raw(this.unescape(b), f)), x = {
             type: m ? "image" : "link",
             title: b || null,
             url: E
           }, m ? x.alt = this.decode.raw(this.unescape(g), S) || null : (k = this.enterLink(), x.children = this.tokenizeInline(g, S), k()), e(T)(x))
         }
       }
     }
     u['"'] = '"', u["'"] = "'", u["("] = ")"
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(40),
       i = n(24);
     e.exports = a, a.locator = o;

     function a(e, t, n) {
       var o, a, u, s, l, c, f, p, d = t.charAt(0),
         h = 0,
         m = t.length,
         g = "",
         v = "",
         y = "link",
         b = "shortcut";
       if ("!" === d && (y = "image", v = d, d = t.charAt(++h)), "[" === d) {
         if (h++, v += d, c = "", this.options.footnotes && "^" === t.charAt(h)) {
           if ("image" === y) return;
           v += "^", h++, y = "footnote"
         }
         for (p = 0; h < m;) {
           if ("[" === (d = t.charAt(h))) f = !0, p++;
           else if ("]" === d) {
             if (!p) break;
             p--
           }
           "\\" === d && (c += "\\", d = t.charAt(++h)), c += d, h++
         }
         if (g = c, o = c, "]" === (d = t.charAt(h))) {
           for (h++, g += d, c = ""; h < m && (d = t.charAt(h), r(d));) c += d, h++;
           if (d = t.charAt(h), "footnote" !== y && "[" === d) {
             for (a = "", c += d, h++; h < m && "[" !== (d = t.charAt(h)) && "]" !== d;) "\\" === d && (a += "\\", d = t.charAt(++h)), a += d, h++;
             "]" === (d = t.charAt(h)) ? (b = a ? "full" : "collapsed", c += a + d, h++) : a = "", g += c, c = ""
           } else {
             if (!o) return;
             a = o
           }
           if ("full" === b || !f) return g = v + g, "link" === y && this.inLink ? null : !!n || ("footnote" === y && -1 !== o.indexOf(" ") ? e(g)({
             type: "footnote",
             children: this.tokenizeInline(o, e.now())
           }) : ((u = e.now()).column += v.length, u.offset += v.length, s = {
             type: y + "Reference",
             identifier: i(a = "full" === b ? a : o)
           }, "link" !== y && "image" !== y || (s.referenceType = b), "link" === y ? (l = this.enterLink(), s.children = this.tokenizeInline(o, u), l()) : "image" === y && (s.alt = this.decode.raw(this.unescape(o), u) || null), e(g)(s)))
         }
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(5),
       i = n(128);
     e.exports = a, a.locator = i;

     function a(e, t, n) {
       var i, a, u, s, l, c, f, p = 0,
         d = t.charAt(p);
       if (!("*" !== d && "_" !== d || t.charAt(++p) !== d || (a = this.options.pedantic, l = (u = d) + u, c = t.length, p++, s = "", d = "", a && o(t.charAt(p)))))
         for (; p < c;) {
           if (f = d, !((d = t.charAt(p)) !== u || t.charAt(p + 1) !== u || a && o(f)) && (d = t.charAt(p + 2)) !== u) {
             if (!r(s)) return;
             return !!n || ((i = e.now()).column += 2, i.offset += 2, e(l + s + l)({
               type: "strong",
               children: this.tokenizeInline(s, i)
             }))
           }
           a || "\\" !== d || (s += d, d = t.charAt(++p)), s += d, p++
         }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       var n = e.indexOf("**", t),
         r = e.indexOf("__", t);
       if (-1 === r) return n;
       if (-1 === n) return r;
       return r < n ? r : n
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(10),
       o = n(130),
       i = n(5),
       a = n(131);
     e.exports = u, u.locator = a;

     function u(e, t, n) {
       var a, u, s, l, c, f, p, d = 0,
         h = t.charAt(d);
       if (!("*" !== h && "_" !== h || (u = this.options.pedantic, c = h, s = h, f = t.length, d++, l = "", h = "", u && i(t.charAt(d)))))
         for (; d < f;) {
           if (p = h, !((h = t.charAt(d)) !== s || u && i(p))) {
             if ((h = t.charAt(++d)) !== s) {
               if (!r(l) || p === s) return;
               if (!u && "_" === s && o(h)) {
                 l += s;
                 continue
               }
               return !!n || ((a = e.now()).column++, a.offset++, e(c + l + s)({
                 type: "emphasis",
                 children: this.tokenizeInline(l, a)
               }))
             }
             l += s
           }
           u || "\\" !== h || (l += h, h = t.charAt(++d)), l += h, d++
         }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e) {
       return o.test("number" == typeof e ? r(e) : e.charAt(0))
     };
     var r = String.fromCharCode,
       o = /\w/
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       var n = e.indexOf("*", t),
         r = e.indexOf("_", t);
       if (-1 === r) return n;
       if (-1 === n) return r;
       return r < n ? r : n
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(133);
     e.exports = i, i.locator = o;

     function i(e, t, n) {
       var o, i, a, u = "",
         s = "",
         l = "",
         c = "";
       if (this.options.gfm && "~" === t.charAt(0) && "~" === t.charAt(1) && !r(t.charAt(2)))
         for (o = 1, i = t.length, (a = e.now()).column += 2, a.offset += 2; ++o < i;) {
           if (!("~" !== (u = t.charAt(o)) || "~" !== s || l && r(l))) return !!n || e("~~" + c + "~~")({
             type: "delete",
             children: this.tokenizeInline(c, a)
           });
           c += s, l = s, s = u
         }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       return e.indexOf("~~", t)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(5),
       o = n(135);
     e.exports = i, i.locator = o;

     function i(e, t, n) {
       for (var o, i, a, u, s, l, c, f, p = t.length, d = 0, h = "", m = ""; d < p && "`" === t.charAt(d);) h += "`", d++;
       if (h) {
         for (s = h, u = d, h = "", f = t.charAt(d), a = 0; d < p;) {
           if (l = f, f = t.charAt(d + 1), "`" === l ? (a++, m += l) : (a = 0, h += l), a && "`" !== f) {
             if (a === u) {
               s += h + m, c = !0;
               break
             }
             h += m, m = ""
           }
           d++
         }
         if (!c) {
           if (u % 2 != 0) return;
           h = ""
         }
         if (n) return !0;
         for (o = "", i = "", p = h.length, d = -1; ++d < p;) l = h.charAt(d), r(l) ? i += l : (i && (o && (o += i), i = ""), o += l);
         return e(s)({
           type: "inlineCode",
           value: o
         })
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       return e.indexOf("`", t)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(137);
     e.exports = o, o.locator = r;

     function o(e, t, n) {
       for (var r, o = t.length, i = -1, a = ""; ++i < o;) {
         if ("\n" === (r = t.charAt(i))) {
           if (i < 2) return;
           return !!n || e(a += r)({
             type: "break"
           })
         }
         if (" " !== r) return;
         a += r
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t) {
       var n = e.indexOf("\n", t);
       for (; n > t && " " === e.charAt(n - 1);) n--;
       return n
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       var r, o, i, a, u, s, l, c, f, p;
       if (n) return !0;
       r = this.inlineMethods, a = r.length, o = this.inlineTokenizers, i = -1, f = t.length;
       for (; ++i < a;) "text" !== (c = r[i]) && o[c] && ((l = o[c].locator) || e.file.fail("Missing locator: `" + c + "`"), -1 !== (s = l.call(this, t, 1)) && s < f && (f = s));
       u = t.slice(0, f), p = e.now(), this.decode(u, p, (function(t, n, r) {
         e(r || t)({
           type: "text",
           value: t
         })
       }))
     }
   }, function(e, t, n) {
     var r = n(140);
     e.exports = function() {
       return function(e) {
         return r(e, "list", (function(e, t) {
           var n, r, o = 0;
           for (n = 0, r = t.length; n < r; n++) "list" === t[n].type && (o += 1);
           for (n = 0, r = e.children.length; n < r; n++) {
             var i = e.children[n];
             i.index = n, i.ordered = e.ordered
           }
           e.depth = o
         })), e
       }
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function(e, t, n) {
       var r = [];
       "function" == typeof t && (n = t, t = null);

       function o(e) {
         var i;
         return t && e.type !== t || (i = n(e, r.concat())), e.children && !1 !== i ? function(e, t) {
           var n, i = e.length,
             a = -1;
           r.push(t);
           for (; ++a < i;)
             if ((n = e[a]) && !1 === o(n)) return !1;
           return r.pop(), !0
         }(e.children, e) : i
       }
       o(e)
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(16),
       o = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
       i = /^<(\/?)([a-z]+)\s*>$/;
     e.exports = function(e) {
       var t, n;
       return r(e, "html", (function(e, r, a) {
         n !== a && (t = [], n = a);
         var u = function(e) {
           var t = e.value.match(o);
           return !!t && t[1]
         }(e);
         if (u) return a.children.splice(r, 1, {
           type: "virtualHtml",
           tag: u,
           position: e.position
         }), !0;
         var s = function(e, t) {
           var n = e.value.match(i);
           return !!n && {
             tag: n[2],
             opening: !n[1],
             node: e
           }
         }(e);
         if (!s) return !0;
         var l = function(e, t) {
           var n = e.length;
           for (; n--;)
             if (e[n].tag === t) return e.splice(n, 1)[0];
           return !1
         }(t, s.tag);
         return l ? a.children.splice(r, 0, function(e, t, n) {
           var r = n.children.indexOf(e.node),
             o = n.children.indexOf(t.node),
             i = n.children.splice(r, o - r + 1).slice(1, -1);
           return {
             type: "virtualHtml",
             children: i,
             tag: e.tag,
             position: {
               start: e.node.position.start,
               end: t.node.position.end,
               indent: []
             }
           }
         }(s, l, a)) : s.opening || t.push(s), !0
       }), !0), e
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(16);

     function o(e, t, n, r) {
       if ("remove" === r) n.children.splice(t, 1);
       else if ("unwrap" === r) {
         var o = [t, 1];
         e.children && (o = o.concat(e.children)), Array.prototype.splice.apply(n.children, o)
       }
     }
     t.ofType = function(e, t) {
       return function(t) {
         return e.forEach((function(e) {
           return r(t, e, n, !0)
         })), t
       };

       function n(e, n, r) {
         r && o(e, n, r, t)
       }
     }, t.ifNotMatch = function(e, t) {
       return function(e) {
         return r(e, n, !0), e
       };

       function n(n, r, i) {
         i && !e(n, r, i) && o(n, r, i, t)
       }
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(0),
       o = n(6),
       i = n(17),
       a = {
         start: {
           line: 1,
           column: 1,
           offset: 0
         },
         end: {
           line: 1,
           column: 1,
           offset: 0
         }
       };

     function u(e, t) {
       var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
         o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
         l = t.renderers[e.type];
       void 0 === e.position && (e.position = n.node && n.node.position || a);
       var c = e.position.start,
         f = [e.type, c.line, c.column, o].join("-");
       if (!i.isValidElementType(l)) throw new Error("Renderer for type `".concat(e.type, "` not defined or is not renderable"));
       var p = s(e, f, t, l, n, o);
       return r.createElement(l, p, p.children || d() || void 0);

       function d() {
         return e.children && e.children.map((function(n, r) {
           return u(n, t, {
             node: e,
             props: p
           }, r)
         }))
       }
     }

     function s(e, t, n, i, a, s) {
       var c, f = {
           key: t
         },
         p = "string" == typeof i;
       n.sourcePos && e.position && (f["data-sourcepos"] = [(c = e.position).start.line, ":", c.start.column, "-", c.end.line, ":", c.end.column].map(String).join("")), n.rawSourcePos && !p && (f.sourcePosition = e.position), n.includeNodeIndex && a.node && a.node.children && !p && (f.index = a.node.children.indexOf(e), f.parentChildCount = a.node.children.length);
       var d = null !== e.identifier && void 0 !== e.identifier ? n.definitions[e.identifier] || {} : null;
       switch (e.type) {
         case "root":
           l(f, {
             className: n.className
           });
           break;
         case "text":
           f.nodeKey = t, f.children = e.value;
           break;
         case "heading":
           f.level = e.depth;
           break;
         case "list":
           f.start = e.start, f.ordered = e.ordered, f.tight = !e.loose, f.depth = e.depth;
           break;
         case "listItem":
           f.checked = e.checked, f.tight = !e.loose, f.ordered = e.ordered, f.index = e.index, f.children = function(e, t) {
             if (e.loose) return e.children;
             if (t.node && e.index > 0 && t.node.children[e.index - 1].loose) return e.children;
             return function(e) {
               return e.children.reduce((function(e, t) {
                 return e.concat("paragraph" === t.type ? t.children || [] : [t])
               }), [])
             }(e)
           }(e, a).map((function(t, r) {
             return u(t, n, {
               node: e,
               props: f
             }, r)
           }));
           break;
         case "definition":
           l(f, {
             identifier: e.identifier,
             title: e.title,
             url: e.url
           });
           break;
         case "code":
           l(f, {
             language: e.lang && e.lang.split(/\s/, 1)[0]
           });
           break;
         case "inlineCode":
           f.children = e.value, f.inline = !0;
           break;
         case "link":
           l(f, {
             title: e.title || void 0,
             target: "function" == typeof n.linkTarget ? n.linkTarget(e.url, e.children, e.title) : n.linkTarget,
             href: n.transformLinkUri ? n.transformLinkUri(e.url, e.children, e.title) : e.url
           });
           break;
         case "image":
           l(f, {
             alt: e.alt || void 0,
             title: e.title || void 0,
             src: n.transformImageUri ? n.transformImageUri(e.url, e.children, e.title, e.alt) : e.url
           });
           break;
         case "linkReference":
           l(f, o(d, {
             href: n.transformLinkUri ? n.transformLinkUri(d.href) : d.href
           }));
           break;
         case "imageReference":
           l(f, {
             src: n.transformImageUri && d.href ? n.transformImageUri(d.href, e.children, d.title, e.alt) : d.href,
             title: d.title || void 0,
             alt: e.alt || void 0
           });
           break;
         case "table":
         case "tableHead":
         case "tableBody":
           f.columnAlignment = e.align;
           break;
         case "tableRow":
           f.isHeader = "tableHead" === a.node.type, f.columnAlignment = a.props.columnAlignment;
           break;
         case "tableCell":
           l(f, {
             isHeader: a.props.isHeader,
             align: a.props.columnAlignment[s]
           });
           break;
         case "virtualHtml":
           f.tag = e.tag;
           break;
         case "html":
           f.isBlock = e.position.start.line !== e.position.end.line, f.escapeHtml = n.escapeHtml, f.skipHtml = n.skipHtml;
           break;
         case "parsedHtml":
           var h;
           e.children && (h = e.children.map((function(t, r) {
             return u(t, n, {
               node: e,
               props: f
             }, r)
           }))), f.escapeHtml = n.escapeHtml, f.skipHtml = n.skipHtml, f.element = function(e, t) {
             var n = e.element;
             if (Array.isArray(n)) {
               var o = r.Fragment || "div";
               return r.createElement(o, null, n)
             }
             if (n.props.children || t) {
               var i = r.Children.toArray(n.props.children).concat(t);
               return r.cloneElement(n, null, i)
             }
             return r.cloneElement(n, null)
           }(e, h);
           break;
         default:
           l(f, o(e, {
             type: void 0,
             position: void 0,
             children: void 0
           }))
       }
       return !p && e.value && (f.value = e.value), f
     }

     function l(e, t) {
       for (var n in t) void 0 !== t[n] && (e[n] = t[n])
     }
     e.exports = u
   }, function(e, t, n) {
     "use strict";
     var r = n(16);

     function o(e) {
       var t = e.children;
       e.children = [{
         type: "tableHead",
         align: e.align,
         children: [t[0]],
         position: t[0].position
       }], t.length > 1 && e.children.push({
         type: "tableBody",
         align: e.align,
         children: t.slice(1),
         position: {
           start: t[1].position.start,
           end: t[t.length - 1].position.end
         }
       })
     }
     e.exports = function(e) {
       return r(e, "table", o), e
     }
   }, function(e, t, n) {
     "use strict";
     e.exports = function e(t) {
       var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
       return (t.children || []).reduce((function(t, n) {
         return "definition" === n.type && (t[n.identifier] = {
           href: n.url,
           title: n.title
         }), e(n, t)
       }), n)
     }
   }, function(e, t, n) {
     "use strict";
     var r = ["http", "https", "mailto", "tel"];
     e.exports = function(e) {
       var t = (e || "").trim(),
         n = t.charAt(0);
       if ("#" === n || "/" === n) return t;
       var o = t.indexOf(":");
       if (-1 === o) return t;
       for (var i = r.length, a = -1; ++a < i;) {
         var u = r[a];
         if (o === u.length && t.slice(0, u.length).toLowerCase() === u) return t
       }
       return -1 !== (a = t.indexOf("?")) && o > a ? t : -1 !== (a = t.indexOf("#")) && o > a ? t : "javascript:void(0)"
     }
   }, function(e, t, n) {
     "use strict";
     var r = n(6),
       o = n(0),
       i = parseInt((o.version || "16").slice(0, 2), 10) >= 16,
       a = o.createElement;

     function u(e, t) {
       return a(e, s(t), t.children)
     }

     function s(e) {
       return e["data-sourcepos"] ? {
         "data-sourcepos": e["data-sourcepos"]
       } : {}
     }
     e.exports = {
       break: "br",
       paragraph: "p",
       emphasis: "em",
       strong: "strong",
       thematicBreak: "hr",
       blockquote: "blockquote",
       delete: "del",
       link: "a",
       image: "img",
       linkReference: "a",
       imageReference: "img",
       table: u.bind(null, "table"),
       tableHead: u.bind(null, "thead"),
       tableBody: u.bind(null, "tbody"),
       tableRow: u.bind(null, "tr"),
       tableCell: function(e) {
         var t = e.align ? {
             textAlign: e.align
           } : void 0,
           n = s(e);
         return a(e.isHeader ? "th" : "td", t ? r({
           style: t
         }, n) : n, e.children)
       },
       root: function(e) {
         var t = !e.className,
           n = t && o.Fragment || "div";
         return a(n, t ? null : e, e.children)
       },
       text: function(e) {
         return i ? e.children : a("span", null, e.children)
       },
       list: function(e) {
         var t = s(e);
         null !== e.start && 1 !== e.start && void 0 !== e.start && (t.start = e.start.toString());
         return a(e.ordered ? "ol" : "ul", t, e.children)
       },
       listItem: function(e) {
         var t = null;
         if (null !== e.checked && void 0 !== e.checked) {
           var n = e.checked;
           t = a("input", {
             type: "checkbox",
             checked: n,
             readOnly: !0
           })
         }
         return a("li", s(e), t, e.children)
       },
       definition: function() {
         return null
       },
       heading: function(e) {
         return a("h".concat(e.level), s(e), e.children)
       },
       inlineCode: function(e) {
         return a("code", s(e), e.children)
       },
       code: function(e) {
         var t = e.language && "language-".concat(e.language),
           n = a("code", t ? {
             className: t
           } : null, e.value);
         return a("pre", s(e), n)
       },
       html: function(e) {
         if (e.skipHtml) return null;
         var t = e.isBlock ? "div" : "span";
         if (e.escapeHtml) {
           var n = o.Fragment || t;
           return a(n, null, e.value)
         }
         var r = {
           dangerouslySetInnerHTML: {
             __html: e.value
           }
         };
         return a(t, r)
       },
       virtualHtml: function(e) {
         return a(e.tag, s(e), e.children)
       },
       parsedHtml: function(e) {
         return e["data-sourcepos"] ? o.cloneElement(e.element, {
           "data-sourcepos": e["data-sourcepos"]
         }) : e.element
       }
     }
   }, function(e, t, n) {
     "use strict";
     t.HtmlParser = "undefined" == typeof Symbol ? "__RMD_HTML_PARSER__" : Symbol("__RMD_HTML_PARSER__")
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       o = n(0),
       i = s(o),
       a = s(n(1)),
       u = s(n(150));

     function s(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(151);
     var l = function(e) {
       function t() {
         ! function(e, t) {
           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
         }(this, t);
         var e = function(e, t) {
           if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
           return !t || "object" != typeof t && "function" != typeof t ? e : t
         }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
         return e.iframeLoaded = e.iframeLoaded.bind(e), e.updateIframeSrc = e.updateIframeSrc.bind(e), e.handleOpenModal = e.handleOpenModal.bind(e), e.handleCloseModal = e.handleCloseModal.bind(e), e.state = {
           openedModal: !1,
           iFrameLoading: !0
         }, e
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), r(t, [{
         key: "getIframeLink",
         value: function() {
           return "https://docs.google.com/viewer?url=" + this.props.src + "&embedded=true"
         }
       }, {
         key: "iframeLoaded",
         value: function() {
           clearInterval(this.iframeTimeoutId), this.setState({
             iFrameLoading: !1
           })
         }
       }, {
         key: "bindActions",
         value: function() {
           this.iframeLoaded = this.iframeLoaded.bind(this)
         }
       }, {
         key: "updateIframeSrc",
         value: function() {
           this.iframe ? this.iframe.src = this.getIframeLink() : clearInterval(this.iframeTimeoutId)
         }
       }, {
         key: "handleOpenModal",
         value: function() {
           this.setState({
             openedModal: !0
           }), this.iframeTimeoutId = setInterval(this.updateIframeSrc, 4e3)
         }
       }, {
         key: "handleCloseModal",
         value: function() {
           this.setState({
             openedModal: !1,
             iFrameLoading: !0
           })
         }
       }, {
         key: "render",
         value: function() {
           var e = this,
             t = this.getIframeLink();
           return i.default.createElement("span", null, i.default.createElement("button", {
             onClick: this.handleOpenModal,
             className: "doc-viewer-open-modal-link"
           }, this.props.children), this.state.openedModal && i.default.createElement(u.default, null, i.default.createElement("div", {
             className: "doc-viewer-modal-fade",
             "aria-hidden": "true",
             onClick: this.handleCloseModal
           }), i.default.createElement("div", {
             className: "doc-viewer-modal"
           }, i.default.createElement("div", {
             className: "doc-viewer-modal-body"
           }, this.state.iFrameLoading && i.default.createElement("div", {
             className: "doc-viewer-spinner"
           }), i.default.createElement("iframe", {
             src: t,
             title: "viewer",
             className: "doc-viewer-modal-iframe",
             onLoad: this.iframeLoaded,
             onError: this.updateIframeSrc,
             ref: function(t) {
               e.iframe = t
             }
           })), i.default.createElement("div", {
             className: "doc-viewer-modal-footer"
           }, i.default.createElement("button", {
             type: "button",
             className: "doc-viewer-close-modal",
             onClick: this.handleCloseModal
           }, "X")))))
         }
       }]), t
     }(o.Component);
     l.propTypes = {
       src: a.default.string.isRequired
     }, t.default = l
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       o = a(n(0)),
       i = a(n(13));

     function a(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     var u = function(e) {
       function t() {
         ! function(e, t) {
           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
         }(this, t);
         var e = function(e, t) {
           if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
           return !t || "object" != typeof t && "function" != typeof t ? e : t
         }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
         return e.portalElement = null, e
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), r(t, [{
         key: "componentDidMount",
         value: function() {
           var e = document.createElement("div");
           document.body.appendChild(e), this.portalElement = e, this.componentDidUpdate()
         }
       }, {
         key: "componentDidUpdate",
         value: function() {
           i.default.render(o.default.createElement("div", null, this.props.children), this.portalElement)
         }
       }, {
         key: "componentWillUnmount",
         value: function() {
           document.body.removeChild(this.portalElement)
         }
       }, {
         key: "render",
         value: function() {
           return null
         }
       }]), t
     }(o.default.Component);
     t.default = u
   }, function(e, t, n) {
     var r = n(152);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (e.exports = n(3)(!1)).push([e.i, '.doc-viewer-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:20041997;display:block}.doc-viewer-modal-body{overflow-y:auto;border-radius:5px;width:80vw;max-width:900px;position:relative;height:90vh;top:0;background:#fff;animation:doc-viewer-slide-down .2s ease}.doc-viewer-open-modal-link{color:#2089fb;text-decoration:underline;cursor:pointer;display:inline;background:none!important;border:none;padding:0!important;font:inherit}.doc-viewer-modal-iframe{height:100%;width:100%;border:none}.doc-viewer-modal-fade{opacity:.5;position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background-color:#000;animation:appear .2s ease}.doc-viewer-modal-footer{flex:0 0 auto;border:none;text-align:center;margin-top:2vh}.doc-viewer-close-modal{border-radius:50%;background:#89919b;color:#fff;font-size:15px;width:45px;height:45px;padding:0;text-align:center;cursor:pointer;touch-action:manipulation;border:1px solid transparent;font-weight:100}.doc-viewer-spinner{display:inline-block;width:64px;height:64px;position:fixed;top:50%;left:50%;transform:translate(-32px,-32px);animation:appear .6s ease-in}.doc-viewer-spinner:after{content:" ";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #2089fb;border-color:#2089fb transparent;will-change:transform;animation:doc-viewer-spinner 1.2s linear infinite}@keyframes doc-viewer-spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes appear{0%{opacity:0}to{opacity:.5}}@keyframes doc-viewer-slide-down{0%{opacity:0;transform:translateY(-100px)}to{opacity:1;transform:translateY(0)}}', ""])
   }, function(e, t, n) {
     var r = n(154);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .message{margin:10px;display:flex;font-size:1em;line-height:1.5;font-family:Roboto,serif}.conversation-container .message .markdown p{margin:0}.conversation-container .client{background-color:#2089fb;color:#fff;border-radius:15px;padding:11px 15px;text-align:left;font-family:Roboto,serif;margin-left:auto;overflow-wrap:break-word}.conversation-container .client a{color:#35cce6}.conversation-container .response{background-color:#f4f7f9;color:#000;border-radius:0 15px 15px 15px;padding:11px 15px;text-align:left;font-family:Roboto,serif;overflow-wrap:break-word}.conversation-container .message-text{margin:0}.conversation-container .message-text .markdown p{margin-bottom:1em}.conversation-container .message-text .markdown p:last-child{margin-bottom:0}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r, o = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       i = n(0),
       a = (r = i) && r.__esModule ? r : {
         default: r
       },
       u = n(2);

     function s(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function l(e, t) {
       if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
     n(156);
     var c = function(e) {
       function t() {
         return s(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), o(t, [{
         key: "render",
         value: function() {
           return a.default.createElement("div", {
             className: "snippet"
           }, a.default.createElement("b", {
             className: "snippet-title"
           }, this.props.message.get("title")), a.default.createElement("div", {
             className: "snippet-details"
           }, a.default.createElement("a", {
             href: this.props.message.get("link"),
             target: this.props.message.get("target"),
             className: "link"
           }, this.props.message.get("content"))))
         }
       }]), t
     }(i.PureComponent);
     c.propTypes = {
       message: u.PROP_TYPES.SNIPPET
     }, t.default = c
   }, function(e, t, n) {
     var r = n(157);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .snippet{background-color:#f4f7f9;color:#000;border-radius:15px;padding:11px 15px;text-align:left;font-family:Roboto,serif}.conversation-container .snippet-title{margin:0}.conversation-container .snippet-details{border-left:2px solid #35e65d;margin-top:5px;padding-left:10px}.conversation-container .link{font-family:Roboto,serif}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var r = t[n];
             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
           }
         }
         return function(t, n, r) {
           return n && e(t.prototype, n), r && e(t, r), t
         }
       }(),
       o = n(0),
       i = f(o),
       a = n(8),
       u = f(n(1)),
       s = n(2),
       l = n(14),
       c = f(n(32));

     function f(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(159);
     var p = function(e) {
       function t(e) {
         ! function(e, t) {
           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
         }(this, t);
         var n = function(e, t) {
           if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
           return !t || "object" != typeof t && "function" != typeof t ? e : t
         }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
         n.handleClick = n.handleClick.bind(n);
         var r = n.props,
           o = r.message,
           i = r.getChosenReply,
           a = (r.inputState, r.id);
         o.get("hint"), i(a);
         return n
       }
       return function(e, t) {
         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
         e.prototype = Object.create(t && t.prototype, {
           constructor: {
             value: e,
             enumerable: !1,
             writable: !0,
             configurable: !0
           }
         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, e), r(t, [{
         key: "handleClick",
         value: function(e) {
           var t = this.props,
             n = t.chooseReply,
             r = t.id;
           n(e.get("payload"), e.get("title"), r)
         }
       }, {
         key: "render",
         value: function() {
           var e = this,
             t = this.props,
             n = t.message,
             r = t.getChosenReply,
             o = t.isLast,
             a = t.id,
             u = t.linkTarget;
           return r(a) ? i.default.createElement(c.default, {
             message: n
           }) : i.default.createElement("div", {
             className: "quickReplies-container"
           }, i.default.createElement(c.default, {
             message: n
           }), o && i.default.createElement("div", {
             className: "replies"
           }, n.get("quick_replies").map((function(t, n) {
             return "web_url" === t.get("type") ? i.default.createElement("a", {
               key: n,
               href: t.get("url"),
               target: u || "_blank",
               rel: "noopener noreferrer",
               className: "reply"
             }, t.get("title")) : i.default.createElement("div", {
               key: n,
               className: "reply",
               onClick: function() {
                 return e.handleClick(t)
               }
             }, t.get("title"))
           }))))
         }
       }]), t
     }(o.PureComponent);
     p.propTypes = {
       getChosenReply: u.default.func,
       chooseReply: u.default.func,
       id: u.default.number,
       isLast: u.default.bool,
       message: s.PROP_TYPES.QUICK_REPLY,
       linkTarget: u.default.string
     }, t.default = (0, a.connect)((function(e) {
       return {
         getChosenReply: function(t) {
           return e.messages.get(t).get("chosenReply")
         },
         inputState: e.behavior.get("disabledInput"),
         linkTarget: e.metadata.get("linkTarget")
       }
     }), (function(e) {
       return {
         toggleInputDisabled: function() {
           return e((0, l.toggleInputDisabled)())
         },
         changeInputFieldHint: function(t) {
           return e((0, l.changeInputFieldHint)(t))
         },
         chooseReply: function(t, n, r) {
           e((0, l.setQuickReply)(r, n)), e((0, l.addUserMessage)(n)), e((0, l.emitUserMessage)(t))
         }
       }
     }))(p)
   }, function(e, t, n) {
     var r = n(160);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".conversation-container .replies{margin:10px;display:flex;flex-wrap:wrap;overflow:auto;font-size:1em;font-family:Roboto,serif}.conversation-container .reply{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border:1px solid #004A99;border-radius:5px;color:#004A99;padding:8px;min-height:1.7em;text-align:center;font-family:Roboto,serif;cursor:pointer;margin:.25em}.conversation-container .response{background-color:#f4f7f9;color:#000;border-radius:0 15px 15px 15px;padding:11px 15px;text-align:left;font-family:Roboto,serif}.conversation-container .avatar{width:17px;height:17px;border-radius:100%;margin-right:6px;position:relative;bottom:5px}", ""])
   }, function(e, t, n) {
     var r = n(162);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, ".group-message.from-client span.message-date{text-align:right;flex-basis:100%;margin-left:0;margin-right:4px;margin-top:5px;font-size:11px;color:#a4a7ab}.group-message.from-response span.message-date{text-align:left;flex-basis:100%;margin-left:7px;margin-top:5px;font-size:11px;color:#a4a7ab}.group-message.from-response .message:first-child:not(:only-child){margin-bottom:2px}.group-message.from-response .message:first-child:not(:only-child) .response{border-radius:0 15px 15px 0}.group-message.from-response .message:not(:first-child):not(:last-child):not(:last-child){margin-top:2px;margin-bottom:2px}.group-message.from-response .message:not(:first-child):not(:last-child):not(:last-child) .response{border-radius:0 15px 15px 0}.group-message.from-response .message:not(:first-child):not(:only-child) .avatar{display:none}.group-message.from-response .message:not(:first-child):not(:only-child).with-avatar{margin-left:33px}.group-message.from-response .message:last-child:not(:only-child){margin-top:2px}.message.typing-indication .response{height:16px}.messages-container{background-color:#fff;height:50vh;max-height:425px;overflow-y:auto;padding-top:10px}.widget-embedded .messages-container{height:100%;max-height:100%}.full-screen .messages-container{height:100%;max-height:none}@media screen and (max-width:800px){.messages-container{height:100%;max-height:none}}div#wave{position:relative;text-align:center;width:25px;height:13px;margin-left:auto;margin-right:auto}div#wave .customText{display:none;color:#939393}div#wave .customText,div#wave .dot{animation:wave 1.6s linear infinite}div#wave .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:3px;background:#939393}div#wave .dot:nth-child(2){animation-delay:-1.4s}div#wave .dot:nth-child(3){animation-delay:-1.2s}@keyframes wave{0%,60%,to{transform:none}30%{transform:translateY(-5px)}}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = u(n(0)),
       o = u(n(1)),
       i = n(8),
       a = u(n(164));

     function u(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(165);
     var s = function(e) {
       var t = e.sendMessage,
         n = e.inputTextFieldHint,
         o = e.disabledInput,
         i = e.userInput;
       return "hide" === i ? r.default.createElement("div", null) : r.default.createElement("form", {
         className: "sender",
         onSubmit: t
       }, r.default.createElement("input", {
         type: "text",
         className: "new-message",
         name: "message",
         placeholder: n,
         disabled: o || "disable" === i,
         autoFocus: !0,
         autoComplete: "off",
         "aria-label": n
       }), r.default.createElement("button", {
         type: "submit",
         className: "send",
         "aria-label": "Send"
       }, r.default.createElement("img", {
         src: a.default,
         className: "send-icon",
         alt: "send"
       })))
     };
     s.propTypes = {
       sendMessage: o.default.func,
       inputTextFieldHint: o.default.string,
       disabledInput: o.default.bool,
       userInput: o.default.string
     }, t.default = (0, i.connect)((function(e) {
       return {
         inputTextFieldHint: e.behavior.get("inputTextFieldHint"),
         userInput: e.metadata.get("userInput")
       }
     }))(s)
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTM1LjUgNTM1LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzNS41IDUzNS41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9InNlbmQiPgoJCTxwb2x5Z29uIHBvaW50cz0iMCw0OTcuMjUgNTM1LjUsMjY3Ljc1IDAsMzguMjUgMCwyMTYuNzUgMzgyLjUsMjY3Ljc1IDAsMzE4Ljc1ICAgIiBmaWxsPSIjY2JjYmNiIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
   }, function(e, t, n) {
     var r = n(166);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (e.exports = n(3)(!1)).push([e.i, ".conversation-container .sender{align-items:center;display:flex;background-color:#f4f7f9;height:45px;padding:5px;margin-bottom:0}.conversation-container .new-message{font-size:.9em;width:100%;border:0;background-color:#f4f7f9;height:30px;padding-left:15px}.conversation-container .new-message:focus{outline:none}.conversation-container .send{background:#f4f7f9;border:0}.conversation-container .send .send-icon{height:25px}@media screen and (max-width:800px){.conversation-container .sender{border-radius:0;flex-shrink:0}}.widget-embedded .sender{flex:0,0,auto;height:60px}", ""])
   }, function(e, t, n) {
     var r = n(168);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, "@-webkit-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-webkit-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-moz-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@-moz-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.conversation-container{-webkit-animation-delay:0;-webkit-animation-duration:.5s;-webkit-animation-name:slide-in;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:.5s;-moz-animation-name:slide-in;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:.5s;animation-name:slide-in;animation-fill-mode:forwards;border-radius:10px;box-shadow:0 2px 10px 1px #b5b5b5;overflow:hidden;width:370px}.slide-out{-webkit-animation-delay:0;-webkit-animation-duration:.5s;-webkit-animation-name:slide-out;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:.5s;-moz-animation-name:slide-out;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:.5s;animation-name:slide-out;animation-fill-mode:forwards}.widget-embedded .conversation-container{-webkit-animation-delay:0;-webkit-animation-duration:0s;-webkit-animation-name:slide-in;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:0s;-moz-animation-name:slide-in;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:0s;animation-name:slide-in;animation-fill-mode:forwards;display:flex;flex-direction:column;height:100%;width:100%;border-radius:0;overflow:unset}.widget-embedded .slide-out{-webkit-animation-delay:0;-webkit-animation-duration:0s;-webkit-animation-name:slide-out;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:0s;-moz-animation-name:slide-out;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:0s;animation-name:slide-out;animation-fill-mode:forwards}.full-screen .conversation-container{display:flex;flex-direction:column;height:100%;width:100%;border-radius:0}@media screen and (max-width:800px){.conversation-container{display:flex;flex-direction:column;height:100%;width:100%;border-radius:0}}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = m(n(0)),
       o = m(n(1)),
       i = n(8),
       a = n(9),
       u = m(n(18)),
       s = n(2),
       l = n(19),
       c = n(14),
       f = m(n(170)),
       p = m(n(171)),
       d = m(n(31)),
       h = m(n(172));

     function m(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(175);
     var g = function(e) {
       var t = e.toggle,
         n = e.isChatOpen,
         o = e.badge,
         i = e.fullScreenMode,
         a = e.openLauncherImage,
         u = e.closeImage,
         c = e.unreadCount,
         m = e.displayUnreadCount,
         g = e.showTooltip,
         v = e.lastMessage,
         y = e.closeTooltip,
         b = ["launcher"];
       n && b.push("hide-sm"), i && b.push("full-screen" + (n ? "  hide" : ""));
       var w = function() {
         return r.default.createElement("div", {
           className: "tooltip-body"
         }, r.default.createElement("div", {
           className: "tooltip-close"
         }, r.default.createElement("button", {
           onClick: function(e) {
             e.stopPropagation(), y()
           }
         }, r.default.createElement("img", {
           src: p.default,
           alt: "close"
         }))), r.default.createElement("div", {
           className: "tooltip-response"
         }, (e = v, t = function() {
           switch (e.get("type")) {
             case s.MESSAGES_TYPES.TEXT:
               return l.Message;
             case s.MESSAGES_TYPES.IMGREPLY.IMAGE:
               return l.Image;
             case s.MESSAGES_TYPES.QUICK_REPLY:
               return l.QuickReply;
             default:
               return null
           }
         }(), r.default.createElement(t, {
           id: -1,
           params: {},
           message: e,
           isLast: !0
         }))), r.default.createElement("div", {
           className: "tooltip-decoration"
         }));
         var e, t
       };
       return r.default.createElement("button", {
         type: "button",
         className: b.join(" "),
         onClick: t,
         "aria-label": "open bot"
       }, r.default.createElement(h.default, {
         badge: o
       }), n ? r.default.createElement("img", {
         src: u || d.default,
         className: "close-launcher " + (u ? "" : "default"),
         alt: ""
       }) : r.default.createElement("div", {
         className: "open-launcher__container"
       }, c > 0 && m && r.default.createElement("div", {
         className: "unread-count-pastille"
       }, c), r.default.createElement("img", {
         src: a || f.default,
         className: "open-launcher",
         alt: "Bot"
       }), g && w()))
     };
     g.propTypes = {
       toggle: o.default.func,
       isChatOpen: o.default.bool,
       badge: o.default.number,
       fullScreenMode: o.default.bool,
       openLauncherImage: o.default.string,
       closeImage: o.default.string,
       unreadCount: o.default.number,
       displayUnreadCount: o.default.bool,
       showTooltip: o.default.bool,
       lastMessage: u.default.map
     };
     t.default = (0, i.connect)((function(e) {
       return {
         lastMessage: e.messages.get(-1) || new a.Map,
         unreadCount: e.behavior.get("unreadCount") || 0,
         showTooltip: e.metadata.get("showTooltip"),
         linkTarget: e.metadata.get("linkTarget")
       }
     }), (function(e) {
       return {
         closeTooltip: function() {
           return e((0, c.showTooltip)(!1))
         }
       }
     }))(g)
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNzMyMzA0IDAgMCAwLjczMjMwNCA2OC41MzAzIDEyNC4yNTQpIj48cGF0aCBkPSJNNDQ4LDBINjRDMjguNzA0LDAsMCwyOC43MDQsMCw2NHYyODhjMCwzNS4yOTYsMjguNzA0LDY0LDY0LDY0aDMydjgwICBjMCw2LjIwOCwzLjU4NCwxMS44NzIsOS4yMTYsMTQuNDk2YzIuMTQ0LDAuOTkyLDQuNDgsMS41MDQsNi43ODQsMS41MDRjMy42OCwwLDcuMzI4LTEuMjgsMTAuMjQtMy43MTJMMjMyLjk5Miw0MTZINDQ4ICBjMzUuMjk2LDAsNjQtMjguNzA0LDY0LTY0VjY0QzUxMiwyOC43MDQsNDgzLjI5NiwwLDQ0OCwweiIgZGF0YS1vcmlnaW5hbD0iIzIxOTZGMyIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzIxOTZGMyIgZmlsbD0iI0Y2RjZGNiIvPjwvZz4gPC9zdmc+Cg=="
   }, function(e, t) {
     e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzU3IDM1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzU3IDM1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjbGVhci1ncmV5Ij4KCQk8cG9seWdvbiBwb2ludHM9IjM1NywzNS43IDMyMS4zLDAgMTc4LjUsMTQyLjggMzUuNywwIDAsMzUuNyAxNDIuOCwxNzguNSAwLDMyMS4zIDM1LjcsMzU3IDE3OC41LDIxNC4yIDMyMS4zLDM1NyAzNTcsMzIxLjMgICAgIDIxNC4yLDE3OC41ICAgIiBmaWxsPSIjYWFhYWFhIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = i(n(0)),
       o = i(n(1));

     function i(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     n(173);
     var a = function(e) {
       var t = e.badge;
       return t > 0 && r.default.createElement("span", {
         className: "badge"
       }, t)
     };
     a.propTypes = {
       badge: o.default.number
     }, t.default = a
   }, function(e, t, n) {
     var r = n(174);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (e.exports = n(3)(!1)).push([e.i, ".launcher .badge{position:fixed;top:-10px;right:-5px;background-color:red;color:#fff;width:25px;height:25px;text-align:center;line-height:25px;border-radius:50%}", ""])
   }, function(e, t, n) {
     var r = n(176);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, "@-webkit-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-webkit-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-moz-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@-moz-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.launcher{-webkit-animation-delay:0;-webkit-animation-duration:.5s;-webkit-animation-name:slide-in;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:.5s;-moz-animation-name:slide-in;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:.5s;animation-name:slide-in;animation-fill-mode:forwards;display:flex;align-items:center;justify-content:center;background-color:#2089fb;border:0;border-radius:50%;box-shadow:0 2px 10px 1px #b5b5b5;height:60px;margin-top:10px;width:60px}.launcher:focus{outline:none}.launcher.hide{display:none}.launcher.full-screen{margin:0 20px 20px 0}.launcher img{width:100%;height:100%;object-fit:contain}.launcher .unread-count-pastille{background-color:#e41c23;color:#fff;border-radius:50%;width:15px;height:15px;position:absolute;top:0;right:0;font-weight:700}.launcher .tooltip-body{background-color:#fff;border-radius:8px;position:absolute;right:78px;bottom:12px;box-shadow:1px 0 13px 3px rgba(0,0,0,.15);width:280px;font-size:1.4em;padding:0 8px;line-height:1.4em;animation:slideUp .3s ease-in-out;transition:all .2s ease-in-out;max-width:50vw}.launcher .tooltip-body:hover{background-color:#fafafa;transform:translateY(-2px);cursor:pointer}.launcher .tooltip-body:hover .tooltip-decoration{background:#fafafa}.launcher .tooltip-body .image-details{object-fit:scale-down;max-width:100%;margin-top:8px;margin-bottom:2px}.launcher .tooltip-body .replies{margin:10px;display:flex;flex-wrap:wrap;overflow:auto;font-size:1em;font-family:Roboto,serif;justify-content:center;margin-left:10px}.launcher .tooltip-body .reply{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border:1px solid #2089fb;border-radius:15px;color:#2089fb;padding:8px;min-height:1.7em;text-align:center;font-family:Roboto,serif;cursor:pointer;margin:.25em}.launcher .tooltip-body .response{text-align:center;margin-left:10px;margin-right:10px}.launcher .tooltip-body .image-frame{object-position:0 0;object-fit:cover;width:100%;height:100%;border-radius:9px}.launcher .tooltip-decoration{position:absolute;bottom:12px;right:-6px;background:#fff;height:12px;width:12px;transition:all .2s ease-in-out;clip-path:polygon(100% 50%,50% 0,50% 100%)}.launcher .tooltip-response{margin-top:1.5rem}.launcher .tooltip-close{position:absolute;top:2px;right:10px;color:red;height:15px;width:15px;transition:all .2s ease-in-out}.launcher .tooltip-close button{cursor:pointer;border:none;padding:0}@keyframes slideUp{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.open-launcher{-webkit-animation-delay:0;-webkit-animation-duration:.5s;-webkit-animation-name:rotation-rl;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:.5s;-moz-animation-name:rotation-rl;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:.5s;animation-name:rotation-rl;animation-fill-mode:forwards}.close-launcher{-webkit-animation-delay:0;-webkit-animation-duration:.5s;-webkit-animation-name:rotation-lr;-webkit-animation-fill-mode:forwards;-moz-animation-delay:0;-moz-animation-duration:.5s;-moz-animation-name:rotation-lr;-moz-animation-fill-mode:forwards;animation-delay:0;animation-duration:.5s;animation-name:rotation-lr;animation-fill-mode:forwards}.close-launcher.default{width:20px!important}@media screen and (max-width:800px){.launcher{margin:0 20px 20px 0}.hide-sm{display:none}}", ""])
   }, function(e, t, n) {
     var r = n(178);
     "string" == typeof r && (r = [
       [e.i, r, ""]
     ]);
     var o = {
       transform: void 0
     };
     n(4)(r, o);
     r.locals && (e.exports = r.locals)
   }, function(e, t, n) {
     (t = e.exports = n(3)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]), t.push([e.i, "@-webkit-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@keyframes rotation-lr{0%{transform:rotate(-90deg)}to{transform:rotate(0)}}@-webkit-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-moz-keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@keyframes rotation-rl{0%{transform:rotate(90deg)}to{transform:rotate(0)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-moz-keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@-moz-keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.widget-container{bottom:0;display:flex;flex-direction:column;margin:0 20px 20px 0;position:fixed;right:0;width:auto;z-index:9999;align-items:flex-end;justify-content:flex-end}.widget-container.full-screen.chat-open{height:100%;margin:0;max-width:none;width:100%}.widget-container p{margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}.widget-embedded{box-sizing:border-box;width:100%;height:100%;position:absolute;left:0;right:0;margin:0;z-index:1;display:flex;flex-direction:column}@media screen and (max-width:800px){.widget-container.chat-open{height:100%;margin:0;max-width:none;width:100%}}", ""])
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.initStore = void 0;
     var r = n(25),
       o = n(2),
       i = c(n(180)),
       a = c(n(181)),
       u = c(n(182)),
       s = n(12),
       l = function(e) {
         if (e && e.__esModule) return e;
         var t = {};
         if (null != e)
           for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
         return t.default = e, t
       }(n(11));

     function c(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     var f = function(e) {
         return e.replace(/https?:\/\/(([A-Za-z0-9-])+(\.?))+[a-z]+(:[0-9]+)?/, "").replace(/\/$|\/(?=\?)/, "")
       },
       p = function(e) {
         return e.replace(/\?.+$/, "")
       };
     t.initStore = function(e, t, n, c) {
       var d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
         h = arguments[5],
         m = function(e) {
           return function(t) {
             return function(r) {
               var i = (0, s.getLocalSession)(c, o.SESSION_NAME) ? (0, s.getLocalSession)(c, o.SESSION_NAME).session_id : null;
               switch (r.type) {
                 case l.EMIT_NEW_USER_MESSAGE:
                   n.emit("sendMessageToChannel", {
                     text: r.text,
                     userUrn: i
                   });
                   break;
                 case l.EMIT_MESSAGE_IF_FIRST:
                   0 === e.getState().messages.size && n.emit("sendMessageToChannel", {
                     text: r.text,
                     userUrn: i
                   });
                   break;
                 case l.GET_OPEN_STATE:
                   return e.getState().behavior.get("isChatOpen");
                 case l.GET_VISIBLE_STATE:
                   return e.getState().behavior.get("isChatVisible");
                 case l.GET_FULLSCREEN_STATE:
                   return e.getState().behavior.get("fullScreenMode");
                 case l.EVAL_URL:
                   var a = e.getState().behavior.get("pageChangeCallbacks"),
                     u = a ? a.toJS() : {},
                     d = r.url,
                     h = function(e) {
                       n.emit("sendMessageToChannel", {
                         text: e,
                         userUrn: i
                       })
                     };
                   if (!u.pageChanges) break;
                   if (e.getState().behavior.get("oldUrl") !== d) {
                     var m = u.pageChanges,
                       g = u.errorIntent;
                     m.some((function(e) {
                       if (!e.regex) {
                         var t = f(d),
                           n = f(e.url);
                         return n.match(/\?.+$/) || (t = p(t), n = p(n)), t === n && (h(e.callbackIntent), !0)
                       }
                       if (d.match(e.url)) return h(e.callbackIntent), !0
                     })) || h(g)
                   }
               }
               t(r)
             }
           }
         },
         g = (0, r.combineReducers)({
           behavior: (0, i.default)(e, t, c, d, h),
           messages: (0, a.default)(c),
           metadata: (0, u.default)(c)
         }),
         v = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || r.compose;
       return (0, r.createStore)(g, v((0, r.applyMiddleware)(m)))
     }
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
         var n = arguments[t];
         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
       }
       return e
     };
     t.default = function(e, t, n) {
       var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
         l = arguments[4],
         c = (0, o.Map)({
           connected: !1,
           initialized: !1,
           isChatVisible: !0,
           isChatOpen: !1,
           disabledInput: !0,
           docViewer: s,
           inputTextFieldHint: e,
           connectingText: t,
           unreadCount: 0,
           messageDelayed: !1,
           oldUrl: "",
           pageChangeCallbacks: (0, o.Map)()
         });
       return function() {
         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
           t = arguments[1],
           s = (0, u.storeParamsTo)(n);
         switch (t.type) {
           case a.SHOW_CHAT:
             return l.onChatVisible && l.onChatVisible(), s(e.update("isChatVisible", (function() {
               return !0
             })));
           case a.HIDE_CHAT:
             return l.onChatHidden && l.onChatHidden(), s(e.update("isChatVisible", (function() {
               return !1
             })));
           case a.TOGGLE_CHAT:
             return e.get("isChatOpen", !1) && l.onChatClose ? l.onChatClose() : l.onChatOpen && l.onChatOpen(), s(e.update("isChatOpen", (function(e) {
               return !e
             })).set("unreadCount", 0));
           case a.OPEN_CHAT:
             return l.onChatOpen && l.onChatOpen(), s(e.update("isChatOpen", (function() {
               return !0
             })).set("unreadCount", 0));
           case a.CLOSE_CHAT:
             return l.onChatClose && l.onChatClose(), s(e.update("isChatOpen", (function() {
               return !1
             })));
           case a.TOGGLE_FULLSCREEN:
             return l.onChatFullScreen && l.onChatFullScreen(), s(e.update("fullScreenMode", (function(e) {
               return !e
             })));
           case a.TOGGLE_INPUT_DISABLED:
             return s(e.update("disabledInput", (function(e) {
               return !e
             })));
           case a.CHANGE_INPUT_FIELD_HINT:
             return s(e.set("inputTextFieldHint", t.hint));
           case a.CONNECT:
             return s(e.set("connected", !0).set("disabledInput", !1));
           case a.DISCONNECT:
             return s(e.set("connected", !1).set("disabledInput", !0));
           case a.INITIALIZE:
             return s(e.set("initialized", !0));
           case a.NEW_UNREAD_MESSAGE:
             return s(e.set("unreadCount", e.get("unreadCount", 0) + 1));
           case a.TRIGGER_MESSAGE_DELAY:
             return s(e.set("messageDelayed", t.messageDelayed));
           case a.SET_OLD_URL:
             return s(e.set("oldUrl", t.url));
           case a.SET_PAGECHANGE_CALLBACKS:
             return s(e.set("pageChangeCallbacks", (0, o.fromJS)(t.pageChangeCallbacks)));
           case a.EVAL_URL:
             var f = t.url,
               p = e.get("pageChangeCallbacks"),
               d = p ? p.toJS() : {};
             return d.pageChanges && e.get("oldUrl") !== f ? s(e.set("oldUrl", f).set("pageChangeCallbacks", (0, o.Map)())) : e;
           case a.PULL_SESSION:
             var h = (0, u.getLocalSession)(n, i.SESSION_NAME),
               m = e.get("connected"),
               g = e.get("messageDelayed");
             return h && h.params ? (0, o.fromJS)(r({}, h.params, {
               connected: m,
               messageDelayed: g
             })) : e;
           default:
             return e
         }
       }
     };
     var o = n(9),
       i = n(2),
       a = function(e) {
         if (e && e.__esModule) return e;
         var t = {};
         if (null != e)
           for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
         return t.default = e, t
       }(n(11)),
       u = n(12)
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.default = function(e) {
       var t = (0, r.List)([]);
       return function() {
         var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
           u = arguments[1],
           s = (0, i.storeMessageTo)(e);
         switch (u.type) {
           case a.ADD_NEW_USER_MESSAGE:
             return s(n.push((0, i.createNewMessage)(u.text, o.MESSAGE_SENDER.CLIENT)));
           case a.ADD_NEW_RESPONSE_MESSAGE:
             return s(n.push((0, i.createNewMessage)(u.text, o.MESSAGE_SENDER.RESPONSE)));
           case a.ADD_NEW_LINK_SNIPPET:
             return s(n.push((0, i.createLinkSnippet)(u.link, o.MESSAGE_SENDER.RESPONSE)));
           case a.ADD_NEW_VIDEO_VIDREPLY:
             return s(n.push((0, i.createVideoSnippet)(u.video, o.MESSAGE_SENDER.RESPONSE)));
           case a.ADD_NEW_IMAGE_IMGREPLY:
             return s(n.push((0, i.createImageSnippet)(u.image, o.MESSAGE_SENDER.RESPONSE)));
           case a.ADD_QUICK_REPLY:
             return s(n.push((0, i.createQuickReply)(u.quickReply, o.MESSAGE_SENDER.RESPONSE)));
           case a.ADD_COMPONENT_MESSAGE:
             return s(n.push((0, i.createComponentMessage)(u.component, u.props, u.showAvatar)));
           case a.SET_QUICK_REPLY:
             return s(n.setIn([u.id, "chosenReply"], u.title));
           case a.INSERT_NEW_USER_MESSAGE:
             return s(n.insert(u.index, (0, i.createNewMessage)(u.text, o.MESSAGE_SENDER.CLIENT)));
           case a.DROP_MESSAGES:
             return s(t);
           case a.EMIT_MESSAGE_IF_FIRST:
             return 0 === n.size && u.text ? s(n.push((0, i.createNewMessage)(u.text, o.MESSAGE_SENDER.CLIENT))) : n;
           case a.SET_CUSTOM_CSS:
             return s(n.update(n.size - 1, (function(e) {
               return e.set("customCss", (0, r.fromJS)(u.customCss))
             })));
           case a.PULL_SESSION:
             var l = (0, i.getLocalSession)(e, o.SESSION_NAME);
             return l ? (0, r.fromJS)(l.conversation) : n;
           default:
             return n
         }
       }
     };
     var r = n(9),
       o = n(2),
       i = n(12),
       a = function(e) {
         if (e && e.__esModule) return e;
         var t = {};
         if (null != e)
           for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
         return t.default = e, t
       }(n(11))
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var r = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
         var n = arguments[t];
         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
       }
       return e
     };
     t.default = function(e) {
       var t = (0, i.Map)({
           linkTarget: "",
           userInput: "",
           domHighlight: (0, i.Map)(),
           hintText: "",
           showTooltip: !1
         }),
         n = (0, i.Map)({
           tooltipSent: (0, i.Map)()
         }).merge(t);
       return function() {
         var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
           l = arguments[1],
           c = (0, u.storeMetadataTo)(e);
         switch (l.type) {
           case a.CLEAR_METADATA:
             return c(s.merge(t));
           case a.SET_LINK_TARGET:
             return c(s.set("linkTarget", l.target));
           case a.SET_USER_INPUT:
             return c(s.set("userInput", l.userInputState));
           case a.TRIGGER_TOOLTIP_SENT:
             return c(s.set("tooltipSent", s.get("tooltipSent").set(l.payloadSent, !0)));
           case a.SHOW_TOOLTIP:
             return c(s.set("showTooltip", l.visible));
           case a.SET_DOM_HIGHLIGHT:
             return c(s.set("domHighlight", (0, i.fromJS)(l.domHighlight)));
           case a.SET_HINT_TEXT:
             return c(s.set("hintText", l.hint));
           case a.PULL_SESSION:
             var f = (0, u.getLocalSession)(e, o.SESSION_NAME);
             return f && f.metadata ? (0, i.fromJS)(r({}, s.toJS(), f.metadata)) : s;
           default:
             return s
         }
       }
     };
     var o = n(2),
       i = n(9),
       a = function(e) {
         if (e && e.__esModule) return e;
         var t = {};
         if (null != e)
           for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
         return t.default = e, t
       }(n(11)),
       u = n(12)
   }, function(e, t, n) {
     "use strict";
     (function(n) {
       var r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
         return typeof e
       } : function(e) {
         return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
       };
       ! function(n) {
         "object" == a(t) && void 0 !== e ? e.exports = n() : (o = [], void 0 === (i = "function" == typeof(r = n) ? r.apply(t, o) : r) || (e.exports = i))
       }((function() {
         return function e(t, n, r) {
           function o(a, u) {
             if (!n[a]) {
               if (!t[a]) {
                 if (i) return i(a, !0);
                 var s = new Error("Cannot find module '" + a + "'");
                 throw s.code = "MODULE_NOT_FOUND", s
               }
               var l = n[a] = {
                 exports: {}
               };
               t[a][0].call(l.exports, (function(e) {
                 return o(t[a][1][e] || e)
               }), l, l.exports, e, t, n, r)
             }
             return n[a].exports
           }
           for (var i = !1, a = 0; a < r.length; a++) o(r[a]);
           return o
         }({
           1: [function(e, t) {
             var n = e("component-emitter"),
               r = function(e, t, r) {
                 n.call(this), this.PENDING = "pending", this.SUBSCRIBED = "subscribed", this.UNSUBSCRIBED = "unsubscribed", this.name = e, this.state = this.UNSUBSCRIBED, this.client = t, this.options = r || {}, this.setOptions(this.options)
               };
             (r.prototype = Object.create(n.prototype)).setOptions = function(e) {
               e || (e = {}), this.waitForAuth = e.waitForAuth || !1, this.batch = e.batch || !1, void 0 !== e.data && (this.data = e.data)
             }, r.prototype.getState = function() {
               return this.state
             }, r.prototype.subscribe = function(e) {
               this.client.subscribe(this.name, e)
             }, r.prototype.unsubscribe = function() {
               this.client.unsubscribe(this.name)
             }, r.prototype.isSubscribed = function(e) {
               return this.client.isSubscribed(this.name, e)
             }, r.prototype.publish = function(e, t) {
               this.client.publish(this.name, e, t)
             }, r.prototype.watch = function(e) {
               this.client.watch(this.name, e)
             }, r.prototype.unwatch = function(e) {
               this.client.unwatch(this.name, e)
             }, r.prototype.watchers = function() {
               return this.client.watchers(this.name)
             }, r.prototype.destroy = function() {
               this.client.destroyChannel(this.name)
             }, t.exports.SCChannel = r
           }, {
             "component-emitter": 2
           }],
           2: [function(e, t) {
             function n(e) {
               if (e) return function(e) {
                 for (var t in n.prototype) e[t] = n.prototype[t];
                 return e
               }(e)
             }
             void 0 !== t && (t.exports = n), n.prototype.on = n.prototype.addEventListener = function(e, t) {
               return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
             }, n.prototype.once = function(e, t) {
               function n() {
                 this.off(e, n), t.apply(this, arguments)
               }
               return n.fn = t, this.on(e, n), this
             }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
               if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
               var n = this._callbacks["$" + e];
               if (!n) return this;
               if (1 == arguments.length) return delete this._callbacks["$" + e], this;
               for (var r, o = 0; o < n.length; o++)
                 if ((r = n[o]) === t || r.fn === t) {
                   n.splice(o, 1);
                   break
                 } return this
             }, n.prototype.emit = function(e) {
               this._callbacks = this._callbacks || {};
               var t = [].slice.call(arguments, 1),
                 n = this._callbacks["$" + e];
               if (n)
                 for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
               return this
             }, n.prototype.listeners = function(e) {
               return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
             }, n.prototype.hasListeners = function(e) {
               return !!this.listeners(e).length
             }
           }, {}],
           3: [function(e, t) {
             var n = e("./lib/scsocket"),
               r = e("./lib/scsocketcreator");
             t.exports.SCSocketCreator = r, t.exports.SCSocket = n, t.exports.Emitter = e("component-emitter"), t.exports.connect = function(e) {
               return r.connect(e)
             }, t.exports.destroy = function(e) {
               return r.destroy(e)
             }, t.exports.connections = r.connections, t.exports.version = "9.0.0"
           }, {
             "./lib/scsocket": 6,
             "./lib/scsocketcreator": 7,
             "component-emitter": 14
           }],
           4: [function(e, t) {
             (function(e) {
               var n = function() {
                 this._internalStorage = {}, this.isLocalStorageEnabled = this._checkLocalStorageEnabled()
               };
               n.prototype._checkLocalStorageEnabled = function() {
                 var t;
                 try {
                   e.localStorage, e.localStorage.setItem("__scLocalStorageTest", 1), e.localStorage.removeItem("__scLocalStorageTest")
                 } catch (e) {
                   t = e
                 }
                 return !t
               }, n.prototype.saveToken = function(t, n, r, o) {
                 this.isLocalStorageEnabled && e.localStorage ? e.localStorage.setItem(t, n) : this._internalStorage[t] = n, o && o(null, n)
               }, n.prototype.removeToken = function(t, n) {
                 var r;
                 this.loadToken(t, (function(e, t) {
                   r = t
                 })), this.isLocalStorageEnabled && e.localStorage ? e.localStorage.removeItem(t) : delete this._internalStorage[t], n && n(null, r)
               }, n.prototype.loadToken = function(t, n) {
                 n(null, this.isLocalStorageEnabled && e.localStorage ? e.localStorage.getItem(t) : this._internalStorage[t] || null)
               }, t.exports.AuthEngine = n
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
           }, {}],
           5: [function(e, t) {
             var n = e("sc-errors"),
               r = n.InvalidActionError,
               o = function(e, t) {
                 this.socket = e, this.id = t, this.sent = !1
               };
             o.prototype._respond = function(e) {
               if (this.sent) throw new r("Response " + this.id + " has already been sent");
               this.sent = !0, this.socket.send(this.socket.encode(e))
             }, o.prototype.end = function(e) {
               if (this.id) {
                 var t = {
                   rid: this.id
                 };
                 void 0 !== e && (t.data = e), this._respond(t)
               }
             }, o.prototype.error = function(e, t) {
               if (this.id) {
                 var r = n.dehydrateError(e),
                   o = {
                     rid: this.id,
                     error: r
                   };
                 void 0 !== t && (o.data = t), this._respond(o)
               }
             }, o.prototype.callback = function(e, t) {
               e ? this.error(e, t) : this.end(t)
             }, t.exports.Response = o
           }, {
             "sc-errors": 22
           }],
           6: [function(e, t) {
             (function(n, r) {
               var o = e("component-emitter"),
                 i = e("sc-channel").SCChannel;
               e("./response").Response;
               var a = e("./auth").AuthEngine,
                 u = e("sc-formatter"),
                 s = e("./sctransport").SCTransport,
                 l = e("querystring"),
                 c = e("linked-list"),
                 f = e("base-64"),
                 p = e("clone"),
                 d = e("sc-errors"),
                 h = d.InvalidArgumentsError,
                 m = d.InvalidMessageError,
                 g = d.SocketProtocolError,
                 v = d.TimeoutError,
                 y = d.BadConnectionError,
                 b = "undefined" != typeof window,
                 w = function(e) {
                   var t = this;
                   o.call(this), this.id = null, this.state = this.CLOSED, this.authState = this.UNAUTHENTICATED, this.signedAuthToken = null, this.authToken = null, this.pendingReconnect = !1, this.pendingReconnectTimeout = null, this.preparingPendingSubscriptions = !1, this.connectTimeout = e.connectTimeout, this.ackTimeout = e.ackTimeout, this.channelPrefix = e.channelPrefix || null, this.disconnectOnUnload = null == e.disconnectOnUnload || e.disconnectOnUnload, this.authTokenName = e.authTokenName, this.pingTimeout = this.ackTimeout;
                   var r = Math.pow(2, 31) - 1,
                     i = function(e) {
                       if (t[e] > r) throw new h("The " + e + " value provided exceeded the maximum amount allowed")
                     };
                   if (i("connectTimeout"), i("ackTimeout"), i("pingTimeout"), this._localEvents = {
                       connect: 1,
                       connectAbort: 1,
                       close: 1,
                       disconnect: 1,
                       message: 1,
                       error: 1,
                       raw: 1,
                       fail: 1,
                       kickOut: 1,
                       subscribe: 1,
                       unsubscribe: 1,
                       subscribeStateChange: 1,
                       authStateChange: 1,
                       authenticate: 1,
                       deauthenticate: 1,
                       removeAuthToken: 1,
                       subscribeRequest: 1
                     }, this.connectAttempts = 0, this._emitBuffer = new c, this.channels = {}, this.options = e, this._cid = 1, this.options.callIdGenerator = function() {
                       return t._cid++
                     }, this.options.autoReconnect) {
                     null == this.options.autoReconnectOptions && (this.options.autoReconnectOptions = {});
                     var s = this.options.autoReconnectOptions;
                     null == s.initialDelay && (s.initialDelay = 1e4), null == s.randomness && (s.randomness = 1e4), null == s.multiplier && (s.multiplier = 1.5), null == s.maxDelay && (s.maxDelay = 6e4)
                   }
                   null == this.options.subscriptionRetryOptions && (this.options.subscriptionRetryOptions = {}), this.options.authEngine ? this.auth = this.options.authEngine : this.auth = new a, this.options.codecEngine ? this.codec = this.options.codecEngine : this.codec = u, this.options.path = this.options.path.replace(/\/$/, "") + "/", this.options.query = e.query || {}, "string" == typeof this.options.query && (this.options.query = l.parse(this.options.query)), this.options.autoConnect && this.connect(), this._channelEmitter = new o, b && this.disconnectOnUnload && n.addEventListener && (this._unloadHandler = function() {
                     t.disconnect()
                   }, n.addEventListener("beforeunload", this._unloadHandler, !1))
                 };
               w.prototype = Object.create(o.prototype), w.CONNECTING = w.prototype.CONNECTING = s.prototype.CONNECTING, w.OPEN = w.prototype.OPEN = s.prototype.OPEN, w.CLOSED = w.prototype.CLOSED = s.prototype.CLOSED, w.AUTHENTICATED = w.prototype.AUTHENTICATED = "authenticated", w.UNAUTHENTICATED = w.prototype.UNAUTHENTICATED = "unauthenticated", w.PENDING = w.prototype.PENDING = "pending", w.ignoreStatuses = d.socketProtocolIgnoreStatuses, w.errorStatuses = d.socketProtocolErrorStatuses, w.prototype._privateEventHandlerMap = {
                 "#publish": function(e) {
                   var t = this._undecorateChannelName(e.channel);
                   this.isSubscribed(t, !0) && this._channelEmitter.emit(t, e.data)
                 },
                 "#kickOut": function(e) {
                   var t = this._undecorateChannelName(e.channel),
                     n = this.channels[t];
                   n && (o.prototype.emit.call(this, "kickOut", e.message, t), n.emit("kickOut", e.message, t), this._triggerChannelUnsubscribe(n))
                 },
                 "#setAuthToken": function(e, t) {
                   var n = this;
                   if (e) {
                     this.auth.saveToken(this.authTokenName, e.token, {}, (function(r) {
                       r ? (t.error(r), n._onSCError(r)) : (n._changeToAuthenticatedState(e.token), t.end())
                     }))
                   } else t.error(new m("No token data provided by #setAuthToken event"))
                 },
                 "#removeAuthToken": function(e, t) {
                   var n = this;
                   this.auth.removeToken(this.authTokenName, (function(e, r) {
                     e ? (t.error(e), n._onSCError(e)) : (o.prototype.emit.call(n, "removeAuthToken", r), n._changeToUnauthenticatedStateAndClearTokens(), t.end())
                   }))
                 },
                 "#disconnect": function(e) {
                   this.transport.close(e.code, e.data)
                 }
               }, w.prototype.getState = function() {
                 return this.state
               }, w.prototype.getBytesReceived = function() {
                 return this.transport.getBytesReceived()
               }, w.prototype.deauthenticate = function(e) {
                 var t = this;
                 this.auth.removeToken(this.authTokenName, (function(n, r) {
                   n ? t._onSCError(n) : (o.prototype.emit.call(t, "removeAuthToken", r), t.state != t.CLOSED && t.emit("#removeAuthToken"), t._changeToUnauthenticatedStateAndClearTokens()), e && e(n)
                 }))
               }, w.prototype.connect = w.prototype.open = function() {
                 var e = this;
                 this.state == this.CLOSED && (this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef), this.state = this.CONNECTING, o.prototype.emit.call(this, "connecting"), this.transport && this.transport.off(), this.transport = new s(this.auth, this.codec, this.options), this.transport.on("open", (function(t) {
                   e.state = e.OPEN, e._onSCOpen(t)
                 })), this.transport.on("error", (function(t) {
                   e._onSCError(t)
                 })), this.transport.on("close", (function(t, n) {
                   e.state = e.CLOSED, e._onSCClose(t, n)
                 })), this.transport.on("openAbort", (function(t, n) {
                   e.state = e.CLOSED, e._onSCClose(t, n, !0)
                 })), this.transport.on("event", (function(t, n, r) {
                   e._onSCEvent(t, n, r)
                 })))
               }, w.prototype.reconnect = function() {
                 this.disconnect(), this.connect()
               }, w.prototype.disconnect = function(e, t) {
                 if ("number" != typeof(e = e || 1e3)) throw new h("If specified, the code argument must be a number");
                 this.state == this.OPEN || this.state == this.CONNECTING ? this.transport.close(e, t) : (this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef))
               }, w.prototype.destroy = function() {
                 this._unloadHandler && n.removeEventListener("beforeunload", this._unloadHandler, !1), this.disconnect()
               }, w.prototype._changeToUnauthenticatedStateAndClearTokens = function() {
                 if (this.authState != this.UNAUTHENTICATED) {
                   var e = this.authState;
                   this.authState = this.UNAUTHENTICATED, this.signedAuthToken = null, this.authToken = null;
                   var t = {
                     oldState: e,
                     newState: this.authState
                   };
                   o.prototype.emit.call(this, "authStateChange", t), e == this.AUTHENTICATED && o.prototype.emit.call(this, "deauthenticate"), o.prototype.emit.call(this, "authTokenChange", this.signedAuthToken)
                 }
               }, w.prototype._changeToAuthenticatedState = function(e) {
                 if (this.signedAuthToken = e, this.authToken = this._extractAuthTokenData(e), this.authState != this.AUTHENTICATED) {
                   var t = this.authState;
                   this.authState = this.AUTHENTICATED;
                   var n = {
                     oldState: t,
                     newState: this.authState,
                     signedAuthToken: e,
                     authToken: this.authToken
                   };
                   this.preparingPendingSubscriptions || this.processPendingSubscriptions(), o.prototype.emit.call(this, "authStateChange", n), o.prototype.emit.call(this, "authenticate", e)
                 }
                 o.prototype.emit.call(this, "authTokenChange", e)
               }, w.prototype.decodeBase64 = function(e) {
                 return void 0 === r ? n.atob ? n.atob(e) : f.decode(e) : new r(e, "base64").toString("utf8")
               }, w.prototype.encodeBase64 = function(e) {
                 return void 0 === r ? n.btoa ? n.btoa(e) : f.encode(e) : new r(e, "utf8").toString("base64")
               }, w.prototype._extractAuthTokenData = function(e) {
                 var t = (e || "").split(".")[1];
                 if (null != t) {
                   var n = t;
                   try {
                     return n = this.decodeBase64(n), JSON.parse(n)
                   } catch (e) {
                     return n
                   }
                 }
                 return null
               }, w.prototype.getAuthToken = function() {
                 return this.authToken
               }, w.prototype.getSignedAuthToken = function() {
                 return this.signedAuthToken
               }, w.prototype.authenticate = function(e, t) {
                 var n = this;
                 this.emit("#authenticate", e, (function(r, o) {
                   o && null != o.isAuthenticated ? o.authError && (o.authError = d.hydrateError(o.authError)) : o = {
                     isAuthenticated: n.authState,
                     authError: null
                   }, r ? ("BadConnectionError" != r.name && "TimeoutError" != r.name && n._changeToUnauthenticatedStateAndClearTokens(), t && t(r, o)) : n.auth.saveToken(n.authTokenName, e, {}, (function(r) {
                     r && n._onSCError(r), o.isAuthenticated ? n._changeToAuthenticatedState(e) : n._changeToUnauthenticatedStateAndClearTokens(), t && t(r, o)
                   }))
                 }))
               }, w.prototype._tryReconnect = function(e) {
                 var t, n = this,
                   r = this.connectAttempts++,
                   o = this.options.autoReconnectOptions;
                 if (null == e || r > 0) {
                   var i = Math.round(o.initialDelay + (o.randomness || 0) * Math.random());
                   t = Math.round(i * Math.pow(o.multiplier, r))
                 } else t = e;
                 t > o.maxDelay && (t = o.maxDelay), clearTimeout(this._reconnectTimeoutRef), this.pendingReconnect = !0, this.pendingReconnectTimeout = t, this._reconnectTimeoutRef = setTimeout((function() {
                   n.connect()
                 }), t)
               }, w.prototype._onSCOpen = function(e) {
                 var t = this;
                 this.preparingPendingSubscriptions = !0, e ? (this.id = e.id, this.pingTimeout = e.pingTimeout, this.transport.pingTimeout = this.pingTimeout, e.isAuthenticated ? this._changeToAuthenticatedState(e.authToken) : this._changeToUnauthenticatedStateAndClearTokens()) : this._changeToUnauthenticatedStateAndClearTokens(), this.connectAttempts = 0, this.options.autoSubscribeOnConnect && this.processPendingSubscriptions(), o.prototype.emit.call(this, "connect", e, (function() {
                   t.processPendingSubscriptions()
                 })), this._flushEmitBuffer()
               }, w.prototype._onSCError = function(e) {
                 var t = this;
                 setTimeout((function() {
                   if (t.listeners("error").length < 1) throw e;
                   o.prototype.emit.call(t, "error", e)
                 }), 0)
               }, w.prototype._suspendSubscriptions = function() {
                 var e, t;
                 for (var n in this.channels) this.channels.hasOwnProperty(n) && (t = (e = this.channels[n]).state == e.SUBSCRIBED || e.state == e.PENDING ? e.PENDING : e.UNSUBSCRIBED, this._triggerChannelUnsubscribe(e, t))
               }, w.prototype._abortAllPendingEventsDueToBadConnection = function(e) {
                 for (var t, n = this._emitBuffer.head; n;) {
                   t = n.next;
                   var r = n.data;
                   clearTimeout(r.timeout), delete r.timeout, n.detach(), n = t;
                   var o = r.callback;
                   if (o) {
                     delete r.callback;
                     var i = "Event '" + r.event + "' was aborted due to a bad connection",
                       a = new y(i, e);
                     o.call(r, a, r)
                   }
                 }
               }, w.prototype._onSCClose = function(e, t, n) {
                 var r = this;
                 if (this.id = null, this.transport && this.transport.off(), this.pendingReconnect = !1, this.pendingReconnectTimeout = null, clearTimeout(this._reconnectTimeoutRef), this._suspendSubscriptions(), this._abortAllPendingEventsDueToBadConnection(n ? "connectAbort" : "disconnect"), this.options.autoReconnect && (4e3 == e || 4001 == e || 1005 == e ? this._tryReconnect(0) : 1e3 != e && e < 4500 && this._tryReconnect()), n ? o.prototype.emit.call(r, "connectAbort", e, t) : o.prototype.emit.call(r, "disconnect", e, t), o.prototype.emit.call(r, "close", e, t), !w.ignoreStatuses[e]) {
                   var i;
                   i = t ? "Socket connection failed: " + t : "Socket connection failed for unknown reasons";
                   var a = new g(w.errorStatuses[e] || i, e);
                   this._onSCError(a)
                 }
               }, w.prototype._onSCEvent = function(e, t, n) {
                 var r = this._privateEventHandlerMap[e];
                 r ? r.call(this, t, n) : o.prototype.emit.call(this, e, t, (function() {
                   n && n.callback.apply(n, arguments)
                 }))
               }, w.prototype.decode = function(e) {
                 return this.transport.decode(e)
               }, w.prototype.encode = function(e) {
                 return this.transport.encode(e)
               }, w.prototype._flushEmitBuffer = function() {
                 for (var e, t = this._emitBuffer.head; t;) {
                   e = t.next;
                   var n = t.data;
                   t.detach(), this.transport.emitObject(n), t = e
                 }
               }, w.prototype._handleEventAckTimeout = function(e, t) {
                 t && t.detach(), delete e.timeout;
                 var n = e.callback;
                 if (n) {
                   delete e.callback;
                   var r = new v("Event response for '" + e.event + "' timed out");
                   n.call(e, r, e)
                 }
               }, w.prototype._emit = function(e, t, n) {
                 var r = this;
                 this.state == this.CLOSED && this.connect();
                 var o = {
                     event: e,
                     callback: n
                   },
                   i = new c.Item;
                 this.options.cloneData ? o.data = p(t) : o.data = t, i.data = o, o.timeout = setTimeout((function() {
                   r._handleEventAckTimeout(o, i)
                 }), this.ackTimeout), this._emitBuffer.append(i), this.state == this.OPEN && this._flushEmitBuffer()
               }, w.prototype.send = function(e) {
                 this.transport.send(e)
               }, w.prototype.emit = function(e, t, n) {
                 null == this._localEvents[e] ? this._emit(e, t, n) : o.prototype.emit.call(this, e, t)
               }, w.prototype.publish = function(e, t, n) {
                 var r = {
                   channel: this._decorateChannelName(e),
                   data: t
                 };
                 this.emit("#publish", r, n)
               }, w.prototype._triggerChannelSubscribe = function(e, t) {
                 var n = e.name;
                 if (e.state != e.SUBSCRIBED) {
                   var r = e.state;
                   e.state = e.SUBSCRIBED;
                   var i = {
                     channel: n,
                     oldState: r,
                     newState: e.state,
                     subscriptionOptions: t
                   };
                   e.emit("subscribeStateChange", i), e.emit("subscribe", n, t), o.prototype.emit.call(this, "subscribeStateChange", i), o.prototype.emit.call(this, "subscribe", n, t)
                 }
               }, w.prototype._triggerChannelSubscribeFail = function(e, t, n) {
                 var r = t.name,
                   i = !t.waitForAuth || this.authState == this.AUTHENTICATED;
                 t.state != t.UNSUBSCRIBED && i && (t.state = t.UNSUBSCRIBED, t.emit("subscribeFail", e, r, n), o.prototype.emit.call(this, "subscribeFail", e, r, n))
               }, w.prototype._cancelPendingSubscribeCallback = function(e) {
                 null != e._pendingSubscriptionCid && (this.transport.cancelPendingResponse(e._pendingSubscriptionCid), delete e._pendingSubscriptionCid)
               }, w.prototype._decorateChannelName = function(e) {
                 return this.channelPrefix && (e = this.channelPrefix + e), e
               }, w.prototype._undecorateChannelName = function(e) {
                 return this.channelPrefix && 0 == e.indexOf(this.channelPrefix) ? e.replace(this.channelPrefix, "") : e
               }, w.prototype._trySubscribe = function(e) {
                 var t = this,
                   n = !e.waitForAuth || this.authState == this.AUTHENTICATED;
                 if (this.state == this.OPEN && !this.preparingPendingSubscriptions && null == e._pendingSubscriptionCid && n) {
                   var r = {
                       noTimeout: !0
                     },
                     i = {
                       channel: this._decorateChannelName(e.name)
                     };
                   e.waitForAuth && (r.waitForAuth = !0, i.waitForAuth = r.waitForAuth), e.data && (i.data = e.data), e.batch && (r.batch = !0, i.batch = !0), e._pendingSubscriptionCid = this.transport.emit("#subscribe", i, r, (function(n) {
                     delete e._pendingSubscriptionCid, n ? t._triggerChannelSubscribeFail(n, e, i) : t._triggerChannelSubscribe(e, i)
                   })), o.prototype.emit.call(this, "subscribeRequest", e.name, i)
                 }
               }, w.prototype.subscribe = function(e, t) {
                 var n = this.channels[e];
                 return n ? t && n.setOptions(t) : (n = new i(e, this, t), this.channels[e] = n), n.state == n.UNSUBSCRIBED && (n.state = n.PENDING, this._trySubscribe(n)), n
               }, w.prototype._triggerChannelUnsubscribe = function(e, t) {
                 var n = e.name,
                   r = e.state;
                 if (e.state = t || e.UNSUBSCRIBED, this._cancelPendingSubscribeCallback(e), r == e.SUBSCRIBED) {
                   var i = {
                     channel: n,
                     oldState: r,
                     newState: e.state
                   };
                   e.emit("subscribeStateChange", i), e.emit("unsubscribe", n), o.prototype.emit.call(this, "subscribeStateChange", i), o.prototype.emit.call(this, "unsubscribe", n)
                 }
               }, w.prototype._tryUnsubscribe = function(e) {
                 if (this.state == this.OPEN) {
                   var t = {
                     noTimeout: !0
                   };
                   e.batch && (t.batch = !0), this._cancelPendingSubscribeCallback(e);
                   var n = this._decorateChannelName(e.name);
                   this.transport.emit("#unsubscribe", n, t)
                 }
               }, w.prototype.unsubscribe = function(e) {
                 var t = this.channels[e];
                 t && t.state != t.UNSUBSCRIBED && (this._triggerChannelUnsubscribe(t), this._tryUnsubscribe(t))
               }, w.prototype.channel = function(e, t) {
                 var n = this.channels[e];
                 return n || (n = new i(e, this, t), this.channels[e] = n), n
               }, w.prototype.destroyChannel = function(e) {
                 var t = this.channels[e];
                 t.unwatch(), t.unsubscribe(), delete this.channels[e]
               }, w.prototype.subscriptions = function(e) {
                 var t, n = [];
                 for (var r in this.channels) this.channels.hasOwnProperty(r) && (t = this.channels[r], (e ? t && (t.state == t.SUBSCRIBED || t.state == t.PENDING) : t && t.state == t.SUBSCRIBED) && n.push(r));
                 return n
               }, w.prototype.isSubscribed = function(e, t) {
                 var n = this.channels[e];
                 return t ? !!n && (n.state == n.SUBSCRIBED || n.state == n.PENDING) : !!n && n.state == n.SUBSCRIBED
               }, w.prototype.processPendingSubscriptions = function() {
                 var e = this;
                 this.preparingPendingSubscriptions = !1;
                 var t = [];
                 for (var n in this.channels)
                   if (this.channels.hasOwnProperty(n)) {
                     var r = this.channels[n];
                     r.state == r.PENDING && t.push(r)
                   } t.sort((function(e, t) {
                   var n = e.priority || 0,
                     r = t.priority || 0;
                   return n > r ? -1 : n < r ? 1 : 0
                 })), t.forEach((function(t) {
                   e._trySubscribe(t)
                 }))
               }, w.prototype.watch = function(e, t) {
                 if ("function" != typeof t) throw new h("No handler function was provided");
                 this._channelEmitter.on(e, t)
               }, w.prototype.unwatch = function(e, t) {
                 t ? this._channelEmitter.removeListener(e, t) : this._channelEmitter.removeAllListeners(e)
               }, w.prototype.watchers = function(e) {
                 return this._channelEmitter.listeners(e)
               }, t.exports = w
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
           }, {
             "./auth": 4,
             "./response": 5,
             "./sctransport": 8,
             "base-64": 10,
             buffer: 12,
             clone: 13,
             "component-emitter": 14,
             "linked-list": 17,
             querystring: 20,
             "sc-channel": 1,
             "sc-errors": 22,
             "sc-formatter": 23
           }],
           7: [function(e, t) {
             (function(n) {
               function r(e) {
                 var t = e.secure ? "https://" : "http://",
                   n = "";
                 if (e.query)
                   if ("string" == typeof e.query) n = e.query;
                   else {
                     var r = [],
                       o = e.query;
                     for (var i in o) o.hasOwnProperty(i) && r.push(i + "=" + o[i]);
                     r.length && (n = "?" + r.join("&"))
                   } return t + (e.host ? e.host : e.hostname + ":" + e.port) + e.path + n
               }

               function o() {
                 return n.location && "https:" == location.protocol
               }

               function i(e, t) {
                 var r = null == e.secure ? t : e.secure;
                 return e.port || (n.location && location.port ? location.port : r ? 443 : 80)
               }
               var a = e("./scsocket"),
                 u = e("sc-errors").InvalidArgumentsError,
                 s = {};
               t.exports = {
                 connect: function(e) {
                   if ((e = e || {}).host && e.port) throw new u("The host option should already include the port number in the format hostname:port - Because of this, the host and port options cannot be specified together; use the hostname option instead");
                   var t = o(),
                     l = {
                       port: i(e, t),
                       hostname: n.location && location.hostname,
                       path: "/socketcluster/",
                       secure: t,
                       autoConnect: !0,
                       autoReconnect: !0,
                       autoSubscribeOnConnect: !0,
                       connectTimeout: 2e4,
                       ackTimeout: 1e4,
                       timestampRequests: !1,
                       timestampParam: "t",
                       authEngine: null,
                       authTokenName: "socketCluster.authToken",
                       binaryType: "arraybuffer",
                       multiplex: !0,
                       pubSubBatchDuration: null,
                       cloneData: !1
                     };
                   for (var c in e) e.hasOwnProperty(c) && (l[c] = e[c]);
                   var f = r(l);
                   return !1 === l.multiplex ? new a(l) : (s[f] ? s[f].connect() : s[f] = new a(l), s[f])
                 },
                 destroy: function(e) {
                   e = e || {};
                   var t = o(),
                     a = {
                       port: i(e, t),
                       hostname: n.location && location.hostname,
                       path: "/socketcluster/",
                       secure: t
                     };
                   for (var u in e) e.hasOwnProperty(u) && (a[u] = e[u]);
                   var l = r(a),
                     c = s[l];
                   c && c.destroy(), delete s[l]
                 },
                 connections: s
               }
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
           }, {
             "./scsocket": 6,
             "sc-errors": 22
           }],
           8: [function(e, t) {
             (function(n) {
               var r, o, i = e("component-emitter"),
                 a = e("./response").Response,
                 u = e("querystring");
               n.WebSocket ? (r = n.WebSocket, o = function(e) {
                 return new r(e)
               }) : (r = e("ws"), o = function(e, t) {
                 return new r(e, null, t)
               });
               var s = e("sc-errors"),
                 l = s.TimeoutError,
                 c = s.BadConnectionError,
                 f = function(e, t, n) {
                   this.state = this.CLOSED, this.auth = e, this.codec = t, this.options = n, this.connectTimeout = n.connectTimeout, this.pingTimeout = n.ackTimeout, this.callIdGenerator = n.callIdGenerator, this.authTokenName = n.authTokenName, this._pingTimeoutTicker = null, this._callbackMap = {}, this._batchSendList = [], this.open()
                 };
               f.prototype = Object.create(i.prototype), f.CONNECTING = f.prototype.CONNECTING = "connecting", f.OPEN = f.prototype.OPEN = "open", f.CLOSED = f.prototype.CLOSED = "closed", f.prototype.uri = function() {
                 var e, t = this.options.query || {},
                   n = this.options.secure ? "wss" : "ws";
                 if (this.options.timestampRequests && (t[this.options.timestampParam] = (new Date).getTime()), (t = u.encode(t)).length && (t = "?" + t), this.options.host) e = this.options.host;
                 else {
                   var r = "";
                   this.options.port && ("wss" == n && 443 != this.options.port || "ws" == n && 80 != this.options.port) && (r = ":" + this.options.port), e = this.options.hostname + r
                 }
                 return n + "://" + e + this.options.path + t
               }, f.prototype.open = function() {
                 var e = this;
                 this.state = this.CONNECTING;
                 var t = this.uri(),
                   n = o(t, this.options);
                 n.binaryType = this.options.binaryType, this.socket = n, n.onopen = function() {
                   e._onOpen()
                 }, n.onclose = function(t) {
                   var n;
                   n = null == t.code ? 1005 : t.code, e._onClose(n, t.reason)
                 }, n.onmessage = function(t) {
                   e._onMessage(t.data)
                 }, n.onerror = function() {
                   e.state === e.CONNECTING && e._onClose(1006)
                 }, this._connectTimeoutRef = setTimeout((function() {
                   e._onClose(4007), e.socket.close(4007)
                 }), this.connectTimeout)
               }, f.prototype._onOpen = function() {
                 var e = this;
                 clearTimeout(this._connectTimeoutRef), this._resetPingTimeout(), this._handshake((function(t, n) {
                   t ? (e._onError(t), e._onClose(4003), e.socket.close(4003)) : (e.state = e.OPEN, i.prototype.emit.call(e, "open", n), e._resetPingTimeout())
                 }))
               }, f.prototype._handshake = function(e) {
                 var t = this;
                 this.auth.loadToken(this.authTokenName, (function(n, r) {
                   n ? e(n) : t.emit("#handshake", {
                     authToken: r
                   }, {
                     force: !0
                   }, (function(t, n) {
                     n && (n.authToken = r, n.authError && (n.authError = s.hydrateError(n.authError))), e(t, n)
                   }))
                 }))
               }, f.prototype._abortAllPendingEventsDueToBadConnection = function(e) {
                 for (var t in this._callbackMap)
                   if (this._callbackMap.hasOwnProperty(t)) {
                     var n = this._callbackMap[t];
                     delete this._callbackMap[t], clearTimeout(n.timeout), delete n.timeout;
                     var r = "Event '" + n.event + "' was aborted due to a bad connection",
                       o = new c(r, e),
                       i = n.callback;
                     delete n.callback, i.call(n, o, n)
                   }
               }, f.prototype._onClose = function(e, t) {
                 delete this.socket.onopen, delete this.socket.onclose, delete this.socket.onmessage, delete this.socket.onerror, clearTimeout(this._connectTimeoutRef), this.state == this.OPEN ? (this.state = this.CLOSED, i.prototype.emit.call(this, "close", e, t), this._abortAllPendingEventsDueToBadConnection("disconnect")) : this.state == this.CONNECTING && (this.state = this.CLOSED, i.prototype.emit.call(this, "openAbort", e, t), this._abortAllPendingEventsDueToBadConnection("connectAbort"))
               }, f.prototype._handleEventObject = function(e, t) {
                 if (e && null != e.event) {
                   var n = new a(this, e.cid);
                   i.prototype.emit.call(this, "event", e.event, e.data, n)
                 } else if (e && null != e.rid) {
                   var r = this._callbackMap[e.rid];
                   if (r && (clearTimeout(r.timeout), delete r.timeout, delete this._callbackMap[e.rid], r.callback)) {
                     var o = s.hydrateError(e.error);
                     r.callback(o, e.data)
                   }
                 } else i.prototype.emit.call(this, "event", "raw", t)
               }, f.prototype._onMessage = function(e) {
                 i.prototype.emit.call(this, "event", "message", e);
                 var t = this.decode(e);
                 if ("#1" == t) this._resetPingTimeout(), this.socket.readyState == this.socket.OPEN && this.sendObject("#2");
                 else if (Array.isArray(t))
                   for (var n = t.length, r = 0; r < n; r++) this._handleEventObject(t[r], e);
                 else this._handleEventObject(t, e)
               }, f.prototype._onError = function(e) {
                 i.prototype.emit.call(this, "error", e)
               }, f.prototype._resetPingTimeout = function() {
                 var e = this;
                 (new Date).getTime(), clearTimeout(this._pingTimeoutTicker), this._pingTimeoutTicker = setTimeout((function() {
                   e._onClose(4e3), e.socket.close(4e3)
                 }), this.pingTimeout)
               }, f.prototype.getBytesReceived = function() {
                 return this.socket.bytesReceived
               }, f.prototype.close = function(e, t) {
                 if (e = e || 1e3, this.state == this.OPEN) {
                   var n = {
                     code: e,
                     data: t
                   };
                   this.emit("#disconnect", n), this._onClose(e, t), this.socket.close(e)
                 } else this.state == this.CONNECTING && (this._onClose(e, t), this.socket.close(e))
               }, f.prototype.emitObject = function(e, t) {
                 var n = {
                   event: e.event,
                   data: e.data
                 };
                 return e.callback && (n.cid = e.cid = this.callIdGenerator(), this._callbackMap[e.cid] = e), this.sendObject(n, t), e.cid || null
               }, f.prototype._handleEventAckTimeout = function(e) {
                 e.cid && delete this._callbackMap[e.cid], delete e.timeout;
                 var t = e.callback;
                 if (t) {
                   delete e.callback;
                   var n = new l("Event response for '" + e.event + "' timed out");
                   t.call(e, n, e)
                 }
               }, f.prototype.emit = function(e, t, n, r) {
                 var o, i, a = this;
                 r ? (i = n, o = r) : n instanceof Function ? (i = {}, o = n) : i = n;
                 var u = {
                   event: e,
                   data: t,
                   callback: o
                 };
                 o && !i.noTimeout && (u.timeout = setTimeout((function() {
                   a._handleEventAckTimeout(u)
                 }), this.options.ackTimeout));
                 var s = null;
                 return (this.state == this.OPEN || i.force) && (s = this.emitObject(u, i)), s
               }, f.prototype.cancelPendingResponse = function(e) {
                 delete this._callbackMap[e]
               }, f.prototype.decode = function(e) {
                 return this.codec.decode(e)
               }, f.prototype.encode = function(e) {
                 return this.codec.encode(e)
               }, f.prototype.send = function(e) {
                 this.socket.readyState != this.socket.OPEN ? this._onClose(1005) : this.socket.send(e)
               }, f.prototype.serializeObject = function(e) {
                 var t, n;
                 try {
                   t = this.encode(e)
                 } catch (e) {
                   n = e, this._onError(n)
                 }
                 return n ? null : t
               }, f.prototype.sendObjectBatch = function(e) {
                 var t = this;
                 this._batchSendList.push(e), this._batchTimeout || (this._batchTimeout = setTimeout((function() {
                   if (delete t._batchTimeout, t._batchSendList.length) {
                     var e = t.serializeObject(t._batchSendList);
                     null != e && t.send(e), t._batchSendList = []
                   }
                 }), this.options.pubSubBatchDuration || 0))
               }, f.prototype.sendObjectSingle = function(e) {
                 var t = this.serializeObject(e);
                 null != t && this.send(t)
               }, f.prototype.sendObject = function(e, t) {
                 t && t.batch ? this.sendObjectBatch(e) : this.sendObjectSingle(e)
               }, t.exports.SCTransport = f
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
           }, {
             "./response": 5,
             "component-emitter": 14,
             querystring: 20,
             "sc-errors": 22,
             ws: 9
           }],
           9: [function(e, t) {
             function n(e, t) {
               return t ? new o(e, t) : new o(e)
             }
             var r, o = (r = "undefined" != typeof WorkerGlobalScope ? self : "undefined" != typeof window && window || function() {
               return this
             }()).WebSocket || r.MozWebSocket;
             o && (n.prototype = o.prototype), t.exports = o ? n : null
           }, {}],
           10: [function(e, t, r) {
             (function(e) {
               ! function(n) {
                 var o = "object" == (void 0 === r ? "undefined" : a(r)) && r,
                   i = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.exports == o && t,
                   u = "object" == (void 0 === e ? "undefined" : a(e)) && e;
                 u.global !== u && u.window !== u || (n = u);
                 var s = function(e) {
                   this.message = e
                 };
                 (s.prototype = new Error).name = "InvalidCharacterError";
                 var l = function(e) {
                     throw new s(e)
                   },
                   c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                   f = /[\t\n\f\r ]/g,
                   p = {
                     encode: function(e) {
                       e = String(e), /[^\0-\xFF]/.test(e) && l("The string to be encoded contains characters outside of the Latin1 range.");
                       for (var t, n, r, o, i = e.length % 3, a = "", u = -1, s = e.length - i; ++u < s;) t = e.charCodeAt(u) << 16, n = e.charCodeAt(++u) << 8, r = e.charCodeAt(++u), a += c.charAt((o = t + n + r) >> 18 & 63) + c.charAt(o >> 12 & 63) + c.charAt(o >> 6 & 63) + c.charAt(63 & o);
                       return 2 == i ? (t = e.charCodeAt(u) << 8, n = e.charCodeAt(++u), a += c.charAt((o = t + n) >> 10) + c.charAt(o >> 4 & 63) + c.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(u), a += c.charAt(o >> 2) + c.charAt(o << 4 & 63) + "=="), a
                     },
                     decode: function(e) {
                       var t = (e = String(e).replace(f, "")).length;
                       t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && l("Invalid character: the string to be decoded is not correctly encoded.");
                       for (var n, r, o = 0, i = "", a = -1; ++a < t;) r = c.indexOf(e.charAt(a)), n = o % 4 ? 64 * n + r : r, o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                       return i
                     },
                     version: "0.1.0"
                   };
                 if (o && !o.nodeType)
                   if (i) i.exports = p;
                   else
                     for (var d in p) p.hasOwnProperty(d) && (o[d] = p[d]);
                 else n.base64 = p
               }(this)
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
           }, {}],
           11: [function(e, t, n) {
             function r(e) {
               var t = e.length;
               if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
               return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
             }

             function o(e) {
               return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
             }

             function i(e, t, n) {
               for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(o(r));
               return i.join("")
             }
             n.byteLength = function(e) {
               return 3 * e.length / 4 - r(e)
             }, n.toByteArray = function(e) {
               var t, n, o, i, a, l = e.length;
               i = r(e), a = new s(3 * l / 4 - i), n = i > 0 ? l - 4 : l;
               var c = 0;
               for (t = 0; t < n; t += 4) o = u[e.charCodeAt(t)] << 18 | u[e.charCodeAt(t + 1)] << 12 | u[e.charCodeAt(t + 2)] << 6 | u[e.charCodeAt(t + 3)], a[c++] = o >> 16 & 255, a[c++] = o >> 8 & 255, a[c++] = 255 & o;
               return 2 === i ? (o = u[e.charCodeAt(t)] << 2 | u[e.charCodeAt(t + 1)] >> 4, a[c++] = 255 & o) : 1 === i && (o = u[e.charCodeAt(t)] << 10 | u[e.charCodeAt(t + 1)] << 4 | u[e.charCodeAt(t + 2)] >> 2, a[c++] = o >> 8 & 255, a[c++] = 255 & o), a
             }, n.fromByteArray = function(e) {
               for (var t, n = e.length, r = n % 3, o = "", u = [], s = 0, l = n - r; s < l; s += 16383) u.push(i(e, s, s + 16383 > l ? l : s + 16383));
               return 1 === r ? (t = e[n - 1], o += a[t >> 2], o += a[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += a[t >> 10], o += a[t >> 4 & 63], o += a[t << 2 & 63], o += "="), u.push(o), u.join("")
             };
             for (var a = [], u = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, f = l.length; c < f; ++c) a[c] = l[c], u[l.charCodeAt(c)] = c;
             u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63
           }, {}],
           12: [function(e, t, n) {
             function r(e) {
               if (e > F) throw new RangeError("Invalid typed array length");
               var t = new Uint8Array(e);
               return t.__proto__ = o.prototype, t
             }

             function o(e, t, n) {
               if ("number" == typeof e) {
                 if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                 return u(e)
               }
               return i(e, t, n)
             }

             function i(e, t, n) {
               if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
               return R(e) ? function(e, t, n) {
                 if (t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
                 if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
                 var r;
                 return (r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)).__proto__ = o.prototype, r
               }(e, t, n) : "string" == typeof e ? function(e, t) {
                 if ("string" == typeof t && "" !== t || (t = "utf8"), !o.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
                 var n = 0 | c(e, t),
                   i = r(n),
                   a = i.write(e, t);
                 return a !== n && (i = i.slice(0, a)), i
               }(e, t) : function(e) {
                 if (o.isBuffer(e)) {
                   var t = 0 | l(e.length),
                     n = r(t);
                   return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
                 }
                 if (e) {
                   if (L(e) || "length" in e) return "number" != typeof e.length || z(e.length) ? r(0) : s(e);
                   if ("Buffer" === e.type && Array.isArray(e.data)) return s(e.data)
                 }
                 throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
               }(e)
             }

             function a(e) {
               if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
               if (e < 0) throw new RangeError('"size" argument must not be negative')
             }

             function u(e) {
               return a(e), r(e < 0 ? 0 : 0 | l(e))
             }

             function s(e) {
               for (var t = e.length < 0 ? 0 : 0 | l(e.length), n = r(t), o = 0; o < t; o += 1) n[o] = 255 & e[o];
               return n
             }

             function l(e) {
               if (e >= F) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + F.toString(16) + " bytes");
               return 0 | e
             }

             function c(e, t) {
               if (o.isBuffer(e)) return e.length;
               if (L(e) || R(e)) return e.byteLength;
               "string" != typeof e && (e = "" + e);
               var n = e.length;
               if (0 === n) return 0;
               for (var r = !1;;) switch (t) {
                 case "ascii":
                 case "latin1":
                 case "binary":
                   return n;
                 case "utf8":
                 case "utf-8":
                 case void 0:
                   return N(e).length;
                 case "ucs2":
                 case "ucs-2":
                 case "utf16le":
                 case "utf-16le":
                   return 2 * n;
                 case "hex":
                   return n >>> 1;
                 case "base64":
                   return j(e).length;
                 default:
                   if (r) return N(e).length;
                   t = ("" + t).toLowerCase(), r = !0
               }
             }

             function f(e, t, n) {
               var r = !1;
               if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
               if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
               if ((n >>>= 0) <= (t >>>= 0)) return "";
               for (e || (e = "utf8");;) switch (e) {
                 case "hex":
                   return x(this, t, n);
                 case "utf8":
                 case "utf-8":
                   return E(this, t, n);
                 case "ascii":
                   return S(this, t, n);
                 case "latin1":
                 case "binary":
                   return k(this, t, n);
                 case "base64":
                   return _(this, t, n);
                 case "ucs2":
                 case "ucs-2":
                 case "utf16le":
                 case "utf-16le":
                   return T(this, t, n);
                 default:
                   if (r) throw new TypeError("Unknown encoding: " + e);
                   e = (e + "").toLowerCase(), r = !0
               }
             }

             function p(e, t, n) {
               var r = e[t];
               e[t] = e[n], e[n] = r
             }

             function d(e, t, n, r, i) {
               if (0 === e.length) return -1;
               if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), z(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                 if (i) return -1;
                 n = e.length - 1
               } else if (n < 0) {
                 if (!i) return -1;
                 n = 0
               }
               if ("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)) return 0 === t.length ? -1 : h(e, t, n, r, i);
               if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : h(e, [t], n, r, i);
               throw new TypeError("val must be string, number or Buffer")
             }

             function h(e, t, n, r, o) {
               function i(e, t) {
                 return 1 === u ? e[t] : e.readUInt16BE(t * u)
               }
               var a, u = 1,
                 s = e.length,
                 l = t.length;
               if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                 if (e.length < 2 || t.length < 2) return -1;
                 u = 2, s /= 2, l /= 2, n /= 2
               }
               if (o) {
                 var c = -1;
                 for (a = n; a < s; a++)
                   if (i(e, a) === i(t, -1 === c ? 0 : a - c)) {
                     if (-1 === c && (c = a), a - c + 1 === l) return c * u
                   } else -1 !== c && (a -= a - c), c = -1
               } else
                 for (n + l > s && (n = s - l), a = n; a >= 0; a--) {
                   for (var f = !0, p = 0; p < l; p++)
                     if (i(e, a + p) !== i(t, p)) {
                       f = !1;
                       break
                     } if (f) return a
                 }
               return -1
             }

             function m(e, t, n, r) {
               n = Number(n) || 0;
               var o = e.length - n;
               r ? (r = Number(r)) > o && (r = o) : r = o;
               var i = t.length;
               if (i % 2 != 0) throw new TypeError("Invalid hex string");
               r > i / 2 && (r = i / 2);
               for (var a = 0; a < r; ++a) {
                 var u = parseInt(t.substr(2 * a, 2), 16);
                 if (z(u)) return a;
                 e[n + a] = u
               }
               return a
             }

             function g(e, t, n, r) {
               return D(N(t, e.length - n), e, n, r)
             }

             function v(e, t, n, r) {
               return D(function(e) {
                 for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                 return t
               }(t), e, n, r)
             }

             function y(e, t, n, r) {
               return v(e, t, n, r)
             }

             function b(e, t, n, r) {
               return D(j(t), e, n, r)
             }

             function w(e, t, n, r) {
               return D(function(e, t) {
                 for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                 return i
               }(t, e.length - n), e, n, r)
             }

             function _(e, t, n) {
               return 0 === t && n === e.length ? U.fromByteArray(e) : U.fromByteArray(e.slice(t, n))
             }

             function E(e, t, n) {
               n = Math.min(e.length, n);
               for (var r = [], o = t; o < n;) {
                 var i, a, u, s, l = e[o],
                   c = null,
                   f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                 if (o + f <= n) switch (f) {
                   case 1:
                     l < 128 && (c = l);
                     break;
                   case 2:
                     128 == (192 & (i = e[o + 1])) && (s = (31 & l) << 6 | 63 & i) > 127 && (c = s);
                     break;
                   case 3:
                     i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (s = (15 & l) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (c = s);
                     break;
                   case 4:
                     i = e[o + 1], a = e[o + 2], u = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & u) && (s = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u) > 65535 && s < 1114112 && (c = s)
                 }
                 null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += f
               }
               return function(e) {
                 var t = e.length;
                 if (t <= H) return String.fromCharCode.apply(String, e);
                 for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += H));
                 return n
               }(r)
             }

             function S(e, t, n) {
               var r = "";
               n = Math.min(e.length, n);
               for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
               return r
             }

             function k(e, t, n) {
               var r = "";
               n = Math.min(e.length, n);
               for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
               return r
             }

             function x(e, t, n) {
               var r = e.length;
               (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
               for (var o = "", i = t; i < n; ++i) o += P(e[i]);
               return o
             }

             function T(e, t, n) {
               for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
               return o
             }

             function C(e, t, n) {
               if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
               if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
             }

             function O(e, t, n, r, i, a) {
               if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
               if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
               if (n + r > e.length) throw new RangeError("Index out of range")
             }

             function I(e, t, n, r) {
               if (n + r > e.length) throw new RangeError("Index out of range");
               if (n < 0) throw new RangeError("Index out of range")
             }

             function M(e, t, n, r, o) {
               return t = +t, n >>>= 0, o || I(e, 0, n, 4), B.write(e, t, n, r, 23, 4), n + 4
             }

             function A(e, t, n, r, o) {
               return t = +t, n >>>= 0, o || I(e, 0, n, 8), B.write(e, t, n, r, 52, 8), n + 8
             }

             function P(e) {
               return e < 16 ? "0" + e.toString(16) : e.toString(16)
             }

             function N(e, t) {
               t = t || 1 / 0;
               for (var n, r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                 if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                   if (!o) {
                     if (n > 56319) {
                       (t -= 3) > -1 && i.push(239, 191, 189);
                       continue
                     }
                     if (a + 1 === r) {
                       (t -= 3) > -1 && i.push(239, 191, 189);
                       continue
                     }
                     o = n;
                     continue
                   }
                   if (n < 56320) {
                     (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                     continue
                   }
                   n = 65536 + (o - 55296 << 10 | n - 56320)
                 } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                 if (o = null, n < 128) {
                   if ((t -= 1) < 0) break;
                   i.push(n)
                 } else if (n < 2048) {
                   if ((t -= 2) < 0) break;
                   i.push(n >> 6 | 192, 63 & n | 128)
                 } else if (n < 65536) {
                   if ((t -= 3) < 0) break;
                   i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                 } else {
                   if (!(n < 1114112)) throw new Error("Invalid code point");
                   if ((t -= 4) < 0) break;
                   i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                 }
               }
               return i
             }

             function j(e) {
               return U.toByteArray(function(e) {
                 if ((e = e.trim().replace(G, "")).length < 2) return "";
                 for (; e.length % 4 != 0;) e += "=";
                 return e
               }(e))
             }

             function D(e, t, n, r) {
               for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
               return o
             }

             function R(e) {
               return e instanceof ArrayBuffer || null != e && null != e.constructor && "ArrayBuffer" === e.constructor.name && "number" == typeof e.byteLength
             }

             function L(e) {
               return "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)
             }

             function z(e) {
               return e != e
             }
             var U = e("base64-js"),
               B = e("ieee754");
             n.Buffer = o, n.SlowBuffer = function(e) {
               return +e != e && (e = 0), o.alloc(+e)
             }, n.INSPECT_MAX_BYTES = 50;
             var F = 2147483647;
             n.kMaxLength = F, o.TYPED_ARRAY_SUPPORT = function() {
               try {
                 var e = new Uint8Array(1);
                 return e.__proto__ = {
                   __proto__: Uint8Array.prototype,
                   foo: function() {
                     return 42
                   }
                 }, 42 === e.foo()
               } catch (e) {
                 return !1
               }
             }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
               value: null,
               configurable: !0,
               enumerable: !1,
               writable: !1
             }), o.poolSize = 8192, o.from = function(e, t, n) {
               return i(e, t, n)
             }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(e, t, n) {
               return function(e, t, n) {
                 return a(e), e <= 0 ? r(e) : void 0 !== t ? "string" == typeof n ? r(e).fill(t, n) : r(e).fill(t) : r(e)
               }(e, t, n)
             }, o.allocUnsafe = function(e) {
               return u(e)
             }, o.allocUnsafeSlow = function(e) {
               return u(e)
             }, o.isBuffer = function(e) {
               return null != e && !0 === e._isBuffer
             }, o.compare = function(e, t) {
               if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
               if (e === t) return 0;
               for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
                 if (e[i] !== t[i]) {
                   n = e[i], r = t[i];
                   break
                 } return n < r ? -1 : r < n ? 1 : 0
             }, o.isEncoding = function(e) {
               switch (String(e).toLowerCase()) {
                 case "hex":
                 case "utf8":
                 case "utf-8":
                 case "ascii":
                 case "latin1":
                 case "binary":
                 case "base64":
                 case "ucs2":
                 case "ucs-2":
                 case "utf16le":
                 case "utf-16le":
                   return !0;
                 default:
                   return !1
               }
             }, o.concat = function(e, t) {
               if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
               if (0 === e.length) return o.alloc(0);
               var n;
               if (void 0 === t)
                 for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
               var r = o.allocUnsafe(t),
                 i = 0;
               for (n = 0; n < e.length; ++n) {
                 var a = e[n];
                 if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                 a.copy(r, i), i += a.length
               }
               return r
             }, o.byteLength = c, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
               var e = this.length;
               if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
               for (var t = 0; t < e; t += 2) p(this, t, t + 1);
               return this
             }, o.prototype.swap32 = function() {
               var e = this.length;
               if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
               for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
               return this
             }, o.prototype.swap64 = function() {
               var e = this.length;
               if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
               for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
               return this
             }, o.prototype.toString = function() {
               var e = this.length;
               return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : f.apply(this, arguments)
             }, o.prototype.equals = function(e) {
               if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
               return this === e || 0 === o.compare(this, e)
             }, o.prototype.inspect = function() {
               var e = "",
                 t = n.INSPECT_MAX_BYTES;
               return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
             }, o.prototype.compare = function(e, t, n, r, i) {
               if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
               if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
               if (r >= i && t >= n) return 0;
               if (r >= i) return -1;
               if (t >= n) return 1;
               if (this === e) return 0;
               for (var a = (i >>>= 0) - (r >>>= 0), u = (n >>>= 0) - (t >>>= 0), s = Math.min(a, u), l = this.slice(r, i), c = e.slice(t, n), f = 0; f < s; ++f)
                 if (l[f] !== c[f]) {
                   a = l[f], u = c[f];
                   break
                 } return a < u ? -1 : u < a ? 1 : 0
             }, o.prototype.includes = function(e, t, n) {
               return -1 !== this.indexOf(e, t, n)
             }, o.prototype.indexOf = function(e, t, n) {
               return d(this, e, t, n, !0)
             }, o.prototype.lastIndexOf = function(e, t, n) {
               return d(this, e, t, n, !1)
             }, o.prototype.write = function(e, t, n, r) {
               if (void 0 === t) r = "utf8", n = this.length, t = 0;
               else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
               else {
                 if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                 t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
               }
               var o = this.length - t;
               if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
               r || (r = "utf8");
               for (var i = !1;;) switch (r) {
                 case "hex":
                   return m(this, e, t, n);
                 case "utf8":
                 case "utf-8":
                   return g(this, e, t, n);
                 case "ascii":
                   return v(this, e, t, n);
                 case "latin1":
                 case "binary":
                   return y(this, e, t, n);
                 case "base64":
                   return b(this, e, t, n);
                 case "ucs2":
                 case "ucs-2":
                 case "utf16le":
                 case "utf-16le":
                   return w(this, e, t, n);
                 default:
                   if (i) throw new TypeError("Unknown encoding: " + r);
                   r = ("" + r).toLowerCase(), i = !0
               }
             }, o.prototype.toJSON = function() {
               return {
                 type: "Buffer",
                 data: Array.prototype.slice.call(this._arr || this, 0)
               }
             };
             var H = 4096;
             o.prototype.slice = function(e, t) {
               var n = this.length;
               (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
               var r = this.subarray(e, t);
               return r.__proto__ = o.prototype, r
             }, o.prototype.readUIntLE = function(e, t, n) {
               e >>>= 0, t >>>= 0, n || C(e, t, this.length);
               for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
               return r
             }, o.prototype.readUIntBE = function(e, t, n) {
               e >>>= 0, t >>>= 0, n || C(e, t, this.length);
               for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
               return r
             }, o.prototype.readUInt8 = function(e, t) {
               return e >>>= 0, t || C(e, 1, this.length), this[e]
             }, o.prototype.readUInt16LE = function(e, t) {
               return e >>>= 0, t || C(e, 2, this.length), this[e] | this[e + 1] << 8
             }, o.prototype.readUInt16BE = function(e, t) {
               return e >>>= 0, t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
             }, o.prototype.readUInt32LE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
             }, o.prototype.readUInt32BE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
             }, o.prototype.readIntLE = function(e, t, n) {
               e >>>= 0, t >>>= 0, n || C(e, t, this.length);
               for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
               return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
             }, o.prototype.readIntBE = function(e, t, n) {
               e >>>= 0, t >>>= 0, n || C(e, t, this.length);
               for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
               return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
             }, o.prototype.readInt8 = function(e, t) {
               return e >>>= 0, t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
             }, o.prototype.readInt16LE = function(e, t) {
               e >>>= 0, t || C(e, 2, this.length);
               var n = this[e] | this[e + 1] << 8;
               return 32768 & n ? 4294901760 | n : n
             }, o.prototype.readInt16BE = function(e, t) {
               e >>>= 0, t || C(e, 2, this.length);
               var n = this[e + 1] | this[e] << 8;
               return 32768 & n ? 4294901760 | n : n
             }, o.prototype.readInt32LE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
             }, o.prototype.readInt32BE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
             }, o.prototype.readFloatLE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), B.read(this, e, !0, 23, 4)
             }, o.prototype.readFloatBE = function(e, t) {
               return e >>>= 0, t || C(e, 4, this.length), B.read(this, e, !1, 23, 4)
             }, o.prototype.readDoubleLE = function(e, t) {
               return e >>>= 0, t || C(e, 8, this.length), B.read(this, e, !0, 52, 8)
             }, o.prototype.readDoubleBE = function(e, t) {
               return e >>>= 0, t || C(e, 8, this.length), B.read(this, e, !1, 52, 8)
             }, o.prototype.writeUIntLE = function(e, t, n, r) {
               e = +e, t >>>= 0, n >>>= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
               var o = 1,
                 i = 0;
               for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
               return t + n
             }, o.prototype.writeUIntBE = function(e, t, n, r) {
               e = +e, t >>>= 0, n >>>= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
               var o = n - 1,
                 i = 1;
               for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
               return t + n
             }, o.prototype.writeUInt8 = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
             }, o.prototype.writeUInt16LE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
             }, o.prototype.writeUInt16BE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
             }, o.prototype.writeUInt32LE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
             }, o.prototype.writeUInt32BE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
             }, o.prototype.writeIntLE = function(e, t, n, r) {
               if (e = +e, t >>>= 0, !r) {
                 var o = Math.pow(2, 8 * n - 1);
                 O(this, e, t, n, o - 1, -o)
               }
               var i = 0,
                 a = 1,
                 u = 0;
               for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + i - 1] && (u = 1), this[t + i] = (e / a >> 0) - u & 255;
               return t + n
             }, o.prototype.writeIntBE = function(e, t, n, r) {
               if (e = +e, t >>>= 0, !r) {
                 var o = Math.pow(2, 8 * n - 1);
                 O(this, e, t, n, o - 1, -o)
               }
               var i = n - 1,
                 a = 1,
                 u = 0;
               for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + i + 1] && (u = 1), this[t + i] = (e / a >> 0) - u & 255;
               return t + n
             }, o.prototype.writeInt8 = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
             }, o.prototype.writeInt16LE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
             }, o.prototype.writeInt16BE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
             }, o.prototype.writeInt32LE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
             }, o.prototype.writeInt32BE = function(e, t, n) {
               return e = +e, t >>>= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
             }, o.prototype.writeFloatLE = function(e, t, n) {
               return M(this, e, t, !0, n)
             }, o.prototype.writeFloatBE = function(e, t, n) {
               return M(this, e, t, !1, n)
             }, o.prototype.writeDoubleLE = function(e, t, n) {
               return A(this, e, t, !0, n)
             }, o.prototype.writeDoubleBE = function(e, t, n) {
               return A(this, e, t, !1, n)
             }, o.prototype.copy = function(e, t, n, r) {
               if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
               if (0 === e.length || 0 === this.length) return 0;
               if (t < 0) throw new RangeError("targetStart out of bounds");
               if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
               if (r < 0) throw new RangeError("sourceEnd out of bounds");
               r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
               var o, i = r - n;
               if (this === e && n < t && t < r)
                 for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
               else if (i < 1e3)
                 for (o = 0; o < i; ++o) e[o + t] = this[o + n];
               else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
               return i
             }, o.prototype.fill = function(e, t, n, r) {
               if ("string" == typeof e) {
                 if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                   var i = e.charCodeAt(0);
                   i < 256 && (e = i)
                 }
                 if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                 if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
               } else "number" == typeof e && (e &= 255);
               if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
               if (n <= t) return this;
               var a;
               if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                 for (a = t; a < n; ++a) this[a] = e;
               else {
                 var u = o.isBuffer(e) ? e : new o(e, r),
                   s = u.length;
                 for (a = 0; a < n - t; ++a) this[a + t] = u[a % s]
               }
               return this
             };
             var G = /[^+\/0-9A-Za-z-_]/g
           }, {
             "base64-js": 11,
             ieee754: 15
           }],
           13: [function(e, t) {
             (function(e) {
               var n = function() {
                 function t(e, t) {
                   return null != t && e instanceof t
                 }

                 function n(r, l, c, f, p) {
                   "object" == (void 0 === l ? "undefined" : a(l)) && (c = l.depth, f = l.prototype, p = l.includeNonEnumerable, l = l.circular);
                   var d = [],
                     h = [];
                   return void 0 === l && (l = !0), void 0 === c && (c = 1 / 0),
                     function r(c, m) {
                       if (null === c) return null;
                       if (0 === m) return c;
                       var g, v;
                       if ("object" != (void 0 === c ? "undefined" : a(c))) return c;
                       if (t(c, i)) g = new i;
                       else if (t(c, u)) g = new u;
                       else if (t(c, s)) g = new s((function(e, t) {
                         c.then((function(t) {
                           e(r(t, m - 1))
                         }), (function(e) {
                           t(r(e, m - 1))
                         }))
                       }));
                       else if (n.__isArray(c)) g = [];
                       else if (n.__isRegExp(c)) g = new RegExp(c.source, o(c)), c.lastIndex && (g.lastIndex = c.lastIndex);
                       else if (n.__isDate(c)) g = new Date(c.getTime());
                       else {
                         if (void 0 !== e && e.isBuffer(c)) return g = new e(c.length), c.copy(g), g;
                         t(c, Error) ? g = Object.create(c) : void 0 === f ? (v = Object.getPrototypeOf(c), g = Object.create(v)) : (g = Object.create(f), v = f)
                       }
                       if (l) {
                         var y = d.indexOf(c);
                         if (-1 != y) return h[y];
                         d.push(c), h.push(g)
                       }
                       for (var b in t(c, i) && c.forEach((function(e, t) {
                         var n = r(t, m - 1),
                           o = r(e, m - 1);
                         g.set(n, o)
                       })), t(c, u) && c.forEach((function(e) {
                         var t = r(e, m - 1);
                         g.add(t)
                       })), c) {
                         var w;
                         v && (w = Object.getOwnPropertyDescriptor(v, b)), w && null == w.set || (g[b] = r(c[b], m - 1))
                       }
                       if (Object.getOwnPropertySymbols) {
                         var _ = Object.getOwnPropertySymbols(c);
                         for (b = 0; b < _.length; b++) {
                           var E = _[b];
                           (!(k = Object.getOwnPropertyDescriptor(c, E)) || k.enumerable || p) && (g[E] = r(c[E], m - 1), k.enumerable || Object.defineProperty(g, E, {
                             enumerable: !1
                           }))
                         }
                       }
                       if (p) {
                         var S = Object.getOwnPropertyNames(c);
                         for (b = 0; b < S.length; b++) {
                           var k, x = S[b];
                           (k = Object.getOwnPropertyDescriptor(c, x)) && k.enumerable || (g[x] = r(c[x], m - 1), Object.defineProperty(g, x, {
                             enumerable: !1
                           }))
                         }
                       }
                       return g
                     }(r, c)
                 }

                 function r(e) {
                   return Object.prototype.toString.call(e)
                 }

                 function o(e) {
                   var t = "";
                   return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
                 }
                 var i, u, s;
                 try {
                   i = Map
                 } catch (e) {
                   i = function() {}
                 }
                 try {
                   u = Set
                 } catch (e) {
                   u = function() {}
                 }
                 try {
                   s = Promise
                 } catch (e) {
                   s = function() {}
                 }
                 return n.clonePrototype = function(e) {
                   if (null === e) return null;
                   var t = function() {};
                   return t.prototype = e, new t
                 }, n.__objToStr = r, n.__isDate = function(e) {
                   return "object" == (void 0 === e ? "undefined" : a(e)) && "[object Date]" === r(e)
                 }, n.__isArray = function(e) {
                   return "object" == (void 0 === e ? "undefined" : a(e)) && "[object Array]" === r(e)
                 }, n.__isRegExp = function(e) {
                   return "object" == (void 0 === e ? "undefined" : a(e)) && "[object RegExp]" === r(e)
                 }, n.__getRegExpFlags = o, n
               }();
               "object" == (void 0 === t ? "undefined" : a(t)) && t.exports && (t.exports = n)
             }).call(this, e("buffer").Buffer)
           }, {
             buffer: 12
           }],
           14: [function(e, t, n) {
             arguments[4][2][0].apply(n, arguments)
           }, {
             dup: 2
           }],
           15: [function(e, t, n) {
             n.read = function(e, t, n, r, o) {
               var i, a, u = 8 * o - r - 1,
                 s = (1 << u) - 1,
                 l = s >> 1,
                 c = -7,
                 f = n ? o - 1 : 0,
                 p = n ? -1 : 1,
                 d = e[t + f];
               for (f += p, i = d & (1 << -c) - 1, d >>= -c, c += u; c > 0; i = 256 * i + e[t + f], f += p, c -= 8);
               for (a = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; a = 256 * a + e[t + f], f += p, c -= 8);
               if (0 === i) i = 1 - l;
               else {
                 if (i === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                 a += Math.pow(2, r), i -= l
               }
               return (d ? -1 : 1) * a * Math.pow(2, i - r)
             }, n.write = function(e, t, n, r, o, i) {
               var a, u, s, l = 8 * i - o - 1,
                 c = (1 << l) - 1,
                 f = c >> 1,
                 p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                 d = r ? 0 : i - 1,
                 h = r ? 1 : -1,
                 m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
               for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + f >= 1 ? p / s : p * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= c ? (u = 0, a = c) : a + f >= 1 ? (u = (t * s - 1) * Math.pow(2, o), a += f) : (u = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + d] = 255 & u, d += h, u /= 256, o -= 8);
               for (a = a << o | u, l += o; l > 0; e[n + d] = 255 & a, d += h, a /= 256, l -= 8);
               e[n + d - h] |= 128 * m
             }
           }, {}],
           16: [function(e, t) {
             function n() {
               if (arguments.length) return n.from(arguments)
             }

             function r() {}
             var o = "An argument without append, prepend, or detach methods was given to `List",
               i = n.prototype;
             n.of = function() {
               return n.from.call(this, arguments)
             }, n.from = function(e) {
               var t, n, r, o = new this;
               if (e && (t = e.length))
                 for (n = -1; ++n < t;) null !== (r = e[n]) && void 0 !== r && o.append(r);
               return o
             }, i.head = null, i.tail = null, i.toArray = function() {
               for (var e = this.head, t = []; e;) t.push(e), e = e.next;
               return t
             }, i.prepend = function(e) {
               if (!e) return !1;
               if (!e.append || !e.prepend || !e.detach) throw new Error(o + "#prepend`.");
               var t, n;
               return (n = (t = this).head) ? n.prepend(e) : (e.detach(), e.list = t, t.head = e, e)
             }, i.append = function(e) {
               if (!e) return !1;
               if (!e.append || !e.prepend || !e.detach) throw new Error(o + "#append`.");
               var t, n, r;
               return (r = (t = this).tail) ? r.append(e) : (n = t.head) ? n.append(e) : (e.detach(), e.list = t, t.head = e, e)
             }, n.Item = r;
             var a = r.prototype;
             a.next = null, a.prev = null, a.list = null, a.detach = function() {
               var e = this,
                 t = e.list,
                 n = e.prev,
                 r = e.next;
               return t ? (t.tail === e && (t.tail = n), t.head === e && (t.head = r), t.tail === t.head && (t.tail = null), n && (n.next = r), r && (r.prev = n), e.prev = e.next = e.list = null, e) : e
             }, a.prepend = function(e) {
               if (!(e && e.append && e.prepend && e.detach)) throw new Error(o + "Item#prepend`.");
               var t = this,
                 n = t.list,
                 r = t.prev;
               return !!n && (e.detach(), r && (e.prev = r, r.next = e), e.next = t, e.list = n, t.prev = e, t === n.head && (n.head = e), n.tail || (n.tail = t), e)
             }, a.append = function(e) {
               if (!(e && e.append && e.prepend && e.detach)) throw new Error(o + "Item#append`.");
               var t = this,
                 n = t.list,
                 r = t.next;
               return !!n && (e.detach(), r && (e.next = r, r.prev = e), e.prev = t, e.list = n, t.next = e, t !== n.tail && n.tail || (n.tail = e), e)
             }, t.exports = n
           }, {}],
           17: [function(e, t) {
             t.exports = e("./_source/linked-list.js")
           }, {
             "./_source/linked-list.js": 16
           }],
           18: [function(e, t) {
             function n(e, t) {
               return Object.prototype.hasOwnProperty.call(e, t)
             }
             t.exports = function(e, t, o, i) {
               t = t || "&", o = o || "=";
               var a = {};
               if ("string" != typeof e || 0 === e.length) return a;
               var u = /\+/g;
               e = e.split(t);
               var s = 1e3;
               i && "number" == typeof i.maxKeys && (s = i.maxKeys);
               var l = e.length;
               s > 0 && l > s && (l = s);
               for (var c = 0; c < l; ++c) {
                 var f, p, d, h, m = e[c].replace(u, "%20"),
                   g = m.indexOf(o);
                 g >= 0 ? (f = m.substr(0, g), p = m.substr(g + 1)) : (f = m, p = ""), d = decodeURIComponent(f), h = decodeURIComponent(p), n(a, d) ? r(a[d]) ? a[d].push(h) : a[d] = [a[d], h] : a[d] = h
               }
               return a
             };
             var r = Array.isArray || function(e) {
               return "[object Array]" === Object.prototype.toString.call(e)
             }
           }, {}],
           19: [function(e, t) {
             function n(e, t) {
               if (e.map) return e.map(t);
               for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
               return n
             }
             var r = function(e) {
               switch (void 0 === e ? "undefined" : a(e)) {
                 case "string":
                   return e;
                 case "boolean":
                   return e ? "true" : "false";
                 case "number":
                   return isFinite(e) ? e : "";
                 default:
                   return ""
               }
             };
             t.exports = function(e, t, u, s) {
               return t = t || "&", u = u || "=", null === e && (e = void 0), "object" == (void 0 === e ? "undefined" : a(e)) ? n(i(e), (function(i) {
                 var a = encodeURIComponent(r(i)) + u;
                 return o(e[i]) ? n(e[i], (function(e) {
                   return a + encodeURIComponent(r(e))
                 })).join(t) : a + encodeURIComponent(r(e[i]))
               })).join(t) : s ? encodeURIComponent(r(s)) + u + encodeURIComponent(r(e)) : ""
             };
             var o = Array.isArray || function(e) {
                 return "[object Array]" === Object.prototype.toString.call(e)
               },
               i = Object.keys || function(e) {
                 var t = [];
                 for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                 return t
               }
           }, {}],
           20: [function(e, t, n) {
             n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
           }, {
             "./decode": 18,
             "./encode": 19
           }],
           21: [function(e, t) {
             t.exports = function(e) {
               var t = [],
                 n = [];
               return function e(r, o) {
                 var i, u, s;
                 if (!("object" != (void 0 === r ? "undefined" : a(r)) || null === r || r instanceof Boolean || r instanceof Date || r instanceof Number || r instanceof RegExp || r instanceof String)) {
                   for (i = 0; i < t.length; i += 1)
                     if (t[i] === r) return {
                       $ref: n[i]
                     };
                   if (t.push(r), n.push(o), "[object Array]" === Object.prototype.toString.apply(r))
                     for (s = [], i = 0; i < r.length; i += 1) s[i] = e(r[i], o + "[" + i + "]");
                   else
                     for (u in s = {}, r) Object.prototype.hasOwnProperty.call(r, u) && (s[u] = e(r[u], o + "[" + JSON.stringify(u) + "]"));
                   return s
                 }
                 return r
               }(e, "$")
             }
           }, {}],
           22: [function(e, t) {
             function n(e, t) {
               this.name = "AuthTokenExpiredError", this.message = e, this.expiry = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function r(e) {
               this.name = "AuthTokenInvalidError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function o(e, t) {
               this.name = "AuthTokenNotBeforeError", this.message = e, this.date = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function i(e) {
               this.name = "AuthTokenError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function u(e, t) {
               this.name = "SilentMiddlewareBlockedError", this.message = e, this.type = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function s(e) {
               this.name = "InvalidActionError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function l(e) {
               this.name = "InvalidArgumentsError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function c(e) {
               this.name = "InvalidOptionsError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function f(e) {
               this.name = "InvalidMessageError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function p(e, t) {
               this.name = "SocketProtocolError", this.message = e, this.code = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function d(e) {
               this.name = "ServerProtocolError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function h(e) {
               this.name = "HTTPServerError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function m(e) {
               this.name = "ResourceLimitError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function g(e) {
               this.name = "TimeoutError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function v(e, t) {
               this.name = "BadConnectionError", this.message = e, this.type = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function y(e) {
               this.name = "BrokerError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function b(e, t) {
               this.name = "ProcessExitError", this.message = e, this.code = t, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }

             function w(e) {
               this.name = "UnknownError", this.message = e, Error.captureStackTrace && !E ? Error.captureStackTrace(this, arguments.callee) : this.stack = (new Error).stack
             }
             var _ = e("./decycle"),
               E = function() {
                 return !this
               }();
             n.prototype = Object.create(Error.prototype), r.prototype = Object.create(Error.prototype), o.prototype = Object.create(Error.prototype), i.prototype = Object.create(Error.prototype), u.prototype = Object.create(Error.prototype), s.prototype = Object.create(Error.prototype), l.prototype = Object.create(Error.prototype), c.prototype = Object.create(Error.prototype), f.prototype = Object.create(Error.prototype), p.prototype = Object.create(Error.prototype), d.prototype = Object.create(Error.prototype), h.prototype = Object.create(Error.prototype), m.prototype = Object.create(Error.prototype), g.prototype = Object.create(Error.prototype), v.prototype = Object.create(Error.prototype), y.prototype = Object.create(Error.prototype), b.prototype = Object.create(Error.prototype), w.prototype = Object.create(Error.prototype), t.exports = {
               AuthTokenExpiredError: n,
               AuthTokenInvalidError: r,
               AuthTokenNotBeforeError: o,
               AuthTokenError: i,
               SilentMiddlewareBlockedError: u,
               InvalidActionError: s,
               InvalidArgumentsError: l,
               InvalidOptionsError: c,
               InvalidMessageError: f,
               SocketProtocolError: p,
               ServerProtocolError: d,
               HTTPServerError: h,
               ResourceLimitError: m,
               TimeoutError: g,
               BadConnectionError: v,
               BrokerError: y,
               ProcessExitError: b,
               UnknownError: w
             }, t.exports.socketProtocolErrorStatuses = {
               1001: "Socket was disconnected",
               1002: "A WebSocket protocol error was encountered",
               1003: "Server terminated socket because it received invalid data",
               1005: "Socket closed without status code",
               1006: "Socket hung up",
               1007: "Message format was incorrect",
               1008: "Encountered a policy violation",
               1009: "Message was too big to process",
               1010: "Client ended the connection because the server did not comply with extension requirements",
               1011: "Server encountered an unexpected fatal condition",
               4e3: "Server ping timed out",
               4001: "Client pong timed out",
               4002: "Server failed to sign auth token",
               4003: "Failed to complete handshake",
               4004: "Client failed to save auth token",
               4005: "Did not receive #handshake from client before timeout",
               4006: "Failed to bind socket to message broker",
               4007: "Client connection establishment timed out"
             }, t.exports.socketProtocolIgnoreStatuses = {
               1e3: "Socket closed normally",
               1001: "Socket hung up"
             };
             var S = {
               domain: 1,
               domainEmitter: 1,
               domainThrown: 1
             };
             t.exports.dehydrateError = function(e, t) {
               var n;
               if (e && "object" == (void 0 === e ? "undefined" : a(e)))
                 for (var r in n = {
                   message: e.message
                 }, t && (n.stack = e.stack), e) S[r] || (n[r] = e[r]);
               else n = "function" == typeof e ? "[function " + (e.name || "anonymous") + "]" : e;
               return _(n)
             }, t.exports.hydrateError = function(e) {
               var t = null;
               if (null != e)
                 if ("object" == (void 0 === e ? "undefined" : a(e)))
                   for (var n in t = new Error(e.message), e) e.hasOwnProperty(n) && (t[n] = e[n]);
                 else t = e;
               return t
             }, t.exports.decycle = _
           }, {
             "./decycle": 21
           }],
           23: [function(e, t) {
             (function(e) {
               var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                 r = function(e) {
                   for (var t = new Uint8Array(e), r = t.length, o = "", i = 0; i < r; i += 3) o += n[t[i] >> 2], o += n[(3 & t[i]) << 4 | t[i + 1] >> 4], o += n[(15 & t[i + 1]) << 2 | t[i + 2] >> 6], o += n[63 & t[i + 2]];
                   return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                 },
                 o = function(t, n) {
                   if (e.ArrayBuffer && n instanceof e.ArrayBuffer) return {
                     base64: !0,
                     data: r(n)
                   };
                   if (e.Buffer) {
                     if (n instanceof e.Buffer) return {
                       base64: !0,
                       data: n.toString("base64")
                     };
                     var o;
                     if (n && "Buffer" === n.type && Array.isArray(n.data)) return o = e.Buffer.from ? e.Buffer.from(n.data) : new e.Buffer(n.data), {
                       base64: !0,
                       data: o.toString("base64")
                     }
                   }
                   return n
                 };
               t.exports.decode = function(e) {
                 if (null == e) return null;
                 if ("#1" === e || "#2" === e) return e;
                 var t = e.toString();
                 try {
                   return JSON.parse(t)
                 } catch (e) {}
                 return t
               }, t.exports.encode = function(e) {
                 return "#1" === e || "#2" === e ? e : JSON.stringify(e, o)
               }
             }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
           }, {}]
         }, {}, [3])(3)
       }))
     }).call(this, n(30))
   }, function(e, t, n) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     }), t.isOpen = function() {
       return r.store.dispatch(o.getOpenState())
     }, t.isVisible = function() {
       return r.store.dispatch(o.getVisibleState())
     }, t.initialize = function() {
       r.store.dispatch(o.initialize())
     }, t.connect = function() {
       r.store.dispatch(o.connect())
     }, t.disconnect = function() {
       r.store.dispatch(o.disconnect())
     }, t.addUserMessage = function(e) {
       r.store.dispatch(o.addUserMessage(e))
     }, t.emitUserMessage = function(e) {
       r.store.dispatch(o.emitUserMessage(e))
     }, t.addResponseMessage = function(e) {
       r.store.dispatch(o.addResponseMessage(e))
     }, t.addLinkSnippet = function(e) {
       r.store.dispatch(o.addLinkSnippet(e))
     }, t.addVideoSnippet = function(e) {
       r.store.dispatch(o.addVideoSnippet(e))
     }, t.addImageSnippet = function(e) {
       r.store.dispatch(o.addImageSnippet(e))
     }, t.addQuickReply = function(e) {
       r.store.dispatch(o.addQuickReply(e))
     }, t.setQuickReply = function(e, t) {
       r.store.dispatch(o.setQuickReply(e, t))
     }, t.insertUserMessage = function(e, t) {
       r.store.dispatch(o.insertUserMessage(e, t))
     }, t.renderCustomComponent = function(e, t) {
       var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
       r.store.dispatch(o.renderCustomComponent(e, t, n))
     }, t.openChat = function() {
       r.store.dispatch(o.openChat())
     }, t.closeChat = function() {
       r.store.dispatch(o.closeChat())
     }, t.toggleChat = function() {
       r.store.dispatch(o.toggleChat())
     }, t.showChat = function() {
       r.store.dispatch(o.showChat())
     }, t.hideChat = function() {
       r.store.dispatch(o.hideChat())
     }, t.toggleFullScreen = function() {
       r.store.dispatch(o.toggleFullScreen())
     }, t.toggleInputDisabled = function() {
       r.store.dispatch(o.toggleInputDisabled())
     }, t.changeInputFieldHint = function(e) {
       r.store.dispatch(o.changeInputFieldHint(e))
     }, t.dropMessages = function() {
       r.store.dispatch(o.dropMessages())
     }, t.pullSession = function() {
       r.store.dispatch(o.pullSession())
     }, t.newUnreadMessage = function() {
       r.store.dispatch(o.newUnreadMessage())
     }, t.send = function(e) {
       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
         n = arguments[2];
       if (n) return n.dispatch(o.emitUserMessage(e)), void("" !== t && n.dispatch(o.addUserMessage(t)));
       r.store.dispatch(o.emitUserMessage(e)), "" !== t && r.store.dispatch(o.addUserMessage(t))
     };
     var r = n(29),
       o = function(e) {
         if (e && e.__esModule) return e;
         var t = {};
         if (null != e)
           for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
         return t.default = e, t
       }(n(14))
   }])
 }));
