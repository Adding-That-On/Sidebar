!function(t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
            return t[e];
        }.bind(null, o));
        return r;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 592);
}({
    104: function(t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    112: function(t, e, n) {
        "use strict";
        var r = n(65), o = n(33), i = n(138), c = n(40), u = n(50), s = n(176), a = n(69), f = n(180), l = n(17)("iterator"), p = !([].keys && "next" in [].keys()), h = function() {
            return this;
        };
        t.exports = function(t, e, n, d, v, m, y) {
            s(n, e, d);
            var w, b, g, _ = function(t) {
                if (!p && t in j) return j[t];
                switch (t) {
                  case "keys":
                  case "values":
                    return function() {
                        return new n(this, t);
                    };
                }
                return function() {
                    return new n(this, t);
                };
            }, x = e + " Iterator", S = "values" == v, O = !1, j = t.prototype, P = j[l] || j["@@iterator"] || v && j[v], E = P || _(v), k = v ? S ? _("entries") : E : void 0, L = "Array" == e && j.entries || P;
            if (L && (g = f(L.call(new t))) !== Object.prototype && g.next && (a(g, x, !0), 
            r || "function" == typeof g[l] || c(g, l, h)), S && P && "values" !== P.name && (O = !0, 
            E = function() {
                return P.call(this);
            }), r && !y || !p && !O && j[l] || c(j, l, E), u[e] = E, u[x] = h, v) if (w = {
                values: S ? E : _("values"),
                keys: m ? E : _("keys"),
                entries: k
            }, y) for (b in w) b in j || i(j, b, w[b]); else o(o.P + o.F * (p || O), e, w);
            return w;
        };
    },
    114: function(t, e, n) {
        var r = n(39);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    115: function(t, e, n) {
        var r = n(58);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    },
    116: function(t, e, n) {
        var r = n(12).document;
        t.exports = r && r.documentElement;
    },
    117: function(t, e, n) {
        var r = n(99), o = n(17)("iterator"), i = n(50);
        t.exports = n(15).getIteratorMethod = function(t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
        };
    },
    118: function(t, e, n) {
        var r = n(34), o = n(62), i = n(17)("species");
        t.exports = function(t, e) {
            var n, c = r(t).constructor;
            return void 0 === c || null == (n = r(c)[i]) ? e : o(n);
        };
    },
    119: function(t, e, n) {
        var r, o, i, c = n(48), u = n(184), s = n(116), a = n(81), f = n(12), l = f.process, p = f.setImmediate, h = f.clearImmediate, d = f.MessageChannel, v = f.Dispatch, m = 0, y = {}, w = function() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t], e();
            }
        }, b = function(t) {
            w.call(t.data);
        };
        p && h || (p = function(t) {
            for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
            return y[++m] = function() {
                u("function" == typeof t ? t : Function(t), e);
            }, r(m), m;
        }, h = function(t) {
            delete y[t];
        }, "process" == n(58)(l) ? r = function(t) {
            l.nextTick(c(w, t, 1));
        } : v && v.now ? r = function(t) {
            v.now(c(w, t, 1));
        } : d ? (i = (o = new d).port2, o.port1.onmessage = b, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*");
        }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in a("script") ? function(t) {
            s.appendChild(a("script")).onreadystatechange = function() {
                s.removeChild(this), w.call(t);
            };
        } : function(t) {
            setTimeout(c(w, t, 1), 0);
        }), t.exports = {
            set: p,
            clear: h
        };
    },
    12: function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    },
    120: function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                };
            } catch (t) {
                return {
                    e: !0,
                    v: t
                };
            }
        };
    },
    121: function(t, e, n) {
        var r = n(34), o = n(39), i = n(86);
        t.exports = function(t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    128: function(t, e) {},
    129: function(t, e, n) {
        var r = n(34), o = n(177), i = n(97), c = n(84)("IE_PROTO"), u = function() {}, s = function() {
            var t, e = n(81)("iframe"), r = i.length;
            for (e.style.display = "none", n(116).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), 
            t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--; ) delete s.prototype[i[r]];
            return s();
        };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (u.prototype = r(t), n = new u, u.prototype = null, n[c] = t) : n = s(), 
            void 0 === e ? n : o(n, e);
        };
    },
    131: function(t, e, n) {
        var r = n(48), o = n(132), i = n(133), c = n(34), u = n(94), s = n(117), a = {}, f = {};
        (e = t.exports = function(t, e, n, l, p) {
            var h, d, v, m, y = p ? function() {
                return t;
            } : s(t), w = r(n, l, e ? 2 : 1), b = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (i(y)) {
                for (h = u(t.length); h > b; b++) if ((m = e ? w(c(d = t[b])[0], d[1]) : w(t[b])) === a || m === f) return m;
            } else for (v = y.call(t); !(d = v.next()).done; ) if ((m = o(v, w, d.value, e)) === a || m === f) return m;
        }).BREAK = a, e.RETURN = f;
    },
    132: function(t, e, n) {
        var r = n(34);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e;
            }
        };
    },
    133: function(t, e, n) {
        var r = n(50), o = n(17)("iterator"), i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t);
        };
    },
    134: function(t, e, n) {
        var r = n(17)("iterator"), o = !1;
        try {
            var i = [ 7 ][r]();
            i.return = function() {
                o = !0;
            }, Array.from(i, (function() {
                throw 2;
            }));
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [ 7 ], c = i[r]();
                c.next = function() {
                    return {
                        done: n = !0
                    };
                }, i[r] = function() {
                    return c;
                }, t(i);
            } catch (t) {}
            return n;
        };
    },
    136: function(t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    137: function(t, e, n) {
        t.exports = !n(42) && !n(57)((function() {
            return 7 != Object.defineProperty(n(81)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        }));
    },
    138: function(t, e, n) {
        t.exports = n(40);
    },
    139: function(t, e, n) {
        var r = n(49), o = n(56), i = n(178)(!1), c = n(84)("IE_PROTO");
        t.exports = function(t, e) {
            var n, u = o(t), s = 0, a = [];
            for (n in u) n != c && r(u, n) && a.push(n);
            for (;e.length > s; ) r(u, n = e[s++]) && (~i(a, n) || a.push(n));
            return a;
        };
    },
    15: function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n);
    },
    168: function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t;
        };
    },
    169: function(t, e, n) {
        var r = n(40);
        t.exports = function(t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t;
        };
    },
    17: function(t, e, n) {
        var r = n(96)("wks"), o = n(85), i = n(12).Symbol, c = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t));
        }).store = r;
    },
    170: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            };
        };
    },
    171: function(t, e, n) {
        "use strict";
        var r = n(12), o = n(15), i = n(41), c = n(42), u = n(17)("species");
        t.exports = function(t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            c && e && !e[u] && i.f(e, u, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    174: function(t, e, n) {
        n(128), n(76), n(98), n(183), n(187), n(188), t.exports = n(15).Promise;
    },
    175: function(t, e, n) {
        var r = n(82), o = n(83);
        t.exports = function(t) {
            return function(e, n) {
                var i, c, u = String(o(e)), s = r(n), a = u.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (c = u.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : c - 56320 + (i - 55296 << 10) + 65536;
            };
        };
    },
    176: function(t, e, n) {
        "use strict";
        var r = n(129), o = n(68), i = n(69), c = {};
        n(40)(c, n(17)("iterator"), (function() {
            return this;
        })), t.exports = function(t, e, n) {
            t.prototype = r(c, {
                next: o(1, n)
            }), i(t, e + " Iterator");
        };
    },
    177: function(t, e, n) {
        var r = n(41), o = n(34), i = n(72);
        t.exports = n(42) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, c = i(e), u = c.length, s = 0; u > s; ) r.f(t, n = c[s++], e[n]);
            return t;
        };
    },
    178: function(t, e, n) {
        var r = n(56), o = n(94), i = n(179);
        t.exports = function(t) {
            return function(e, n, c) {
                var u, s = r(e), a = o(s.length), f = i(c, a);
                if (t && n != n) {
                    for (;a > f; ) if ((u = s[f++]) != u) return !0;
                } else for (;a > f; f++) if ((t || f in s) && s[f] === n) return t || f || 0;
                return !t && -1;
            };
        };
    },
    179: function(t, e, n) {
        var r = n(82), o = Math.max, i = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
        };
    },
    180: function(t, e, n) {
        var r = n(49), o = n(77), i = n(84)("IE_PROTO"), c = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
        };
    },
    181: function(t, e, n) {
        "use strict";
        var r = n(182), o = n(170), i = n(50), c = n(56);
        t.exports = n(112)(Array, "Array", (function(t, e) {
            this._t = c(t), this._i = 0, this._k = e;
        }), (function() {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
        }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    },
    182: function(t, e) {
        t.exports = function() {};
    },
    183: function(t, e, n) {
        "use strict";
        var r, o, i, c, u = n(65), s = n(12), a = n(48), f = n(99), l = n(33), p = n(39), h = n(62), d = n(168), v = n(131), m = n(118), y = n(119).set, w = n(185)(), b = n(86), g = n(120), _ = n(186), x = n(121), S = s.TypeError, O = s.process, j = O && O.versions, P = j && j.v8 || "", E = s.Promise, k = "process" == f(O), L = function() {}, M = o = b.f, I = !!function() {
            try {
                var t = E.resolve(1), e = (t.constructor = {})[n(17)("species")] = function(t) {
                    t(L, L);
                };
                return (k || "function" == typeof PromiseRejectionEvent) && t.then(L) instanceof e && 0 !== P.indexOf("6.6") && -1 === _.indexOf("Chrome/66");
            } catch (t) {}
        }(), T = function(t) {
            var e;
            return !(!p(t) || "function" != typeof (e = t.then)) && e;
        }, C = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                w((function() {
                    for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
                        var n, i, c, u = o ? e.ok : e.fail, s = e.resolve, a = e.reject, f = e.domain;
                        try {
                            u ? (o || (2 == t._h && F(t), t._h = 1), !0 === u ? n = r : (f && f.enter(), n = u(r), 
                            f && (f.exit(), c = !0)), n === e.promise ? a(S("Promise-chain cycle")) : (i = T(n)) ? i.call(n, s, a) : s(n)) : a(r);
                        } catch (t) {
                            f && !c && f.exit(), a(t);
                        }
                    }; n.length > i; ) c(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && N(t);
                }));
            }
        }, N = function(t) {
            y.call(s, (function() {
                var e, n, r, o = t._v, i = A(t);
                if (i && (e = g((function() {
                    k ? O.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({
                        promise: t,
                        reason: o
                    }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o);
                })), t._h = k || A(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
            }));
        }, A = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
        }, F = function(t) {
            y.call(s, (function() {
                var e;
                k ? O.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                });
            }));
        }, D = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), 
            C(e, !0));
        }, W = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw S("Promise can't be resolved itself");
                    (e = T(t)) ? w((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, a(W, r, 1), a(D, r, 1));
                        } catch (t) {
                            D.call(r, t);
                        }
                    })) : (n._v = t, n._s = 1, C(n, !1));
                } catch (t) {
                    D.call({
                        _w: n,
                        _d: !1
                    }, t);
                }
            }
        };
        I || (E = function(t) {
            d(this, E, "Promise", "_h"), h(t), r.call(this);
            try {
                t(a(W, this, 1), a(D, this, 1));
            } catch (t) {
                D.call(this, t);
            }
        }, (r = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }).prototype = n(169)(E.prototype, {
            then: function(t, e) {
                var n = M(m(this, E));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
                n.domain = k ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), 
                n.promise;
            },
            catch: function(t) {
                return this.then(void 0, t);
            }
        }), i = function() {
            var t = new r;
            this.promise = t, this.resolve = a(W, t, 1), this.reject = a(D, t, 1);
        }, b.f = M = function(t) {
            return t === E || t === c ? new i(t) : o(t);
        }), l(l.G + l.W + l.F * !I, {
            Promise: E
        }), n(69)(E, "Promise"), n(171)("Promise"), c = n(15).Promise, l(l.S + l.F * !I, "Promise", {
            reject: function(t) {
                var e = M(this);
                return (0, e.reject)(t), e.promise;
            }
        }), l(l.S + l.F * (u || !I), "Promise", {
            resolve: function(t) {
                return x(u && this === c ? E : this, t);
            }
        }), l(l.S + l.F * !(I && n(134)((function(t) {
            E.all(t).catch(L);
        }))), "Promise", {
            all: function(t) {
                var e = this, n = M(e), r = n.resolve, o = n.reject, i = g((function() {
                    var n = [], i = 0, c = 1;
                    v(t, !1, (function(t) {
                        var u = i++, s = !1;
                        n.push(void 0), c++, e.resolve(t).then((function(t) {
                            s || (s = !0, n[u] = t, --c || r(n));
                        }), o);
                    })), --c || r(n);
                }));
                return i.e && o(i.v), n.promise;
            },
            race: function(t) {
                var e = this, n = M(e), r = n.reject, o = g((function() {
                    v(t, !1, (function(t) {
                        e.resolve(t).then(n.resolve, r);
                    }));
                }));
                return o.e && r(o.v), n.promise;
            }
        });
    },
    184: function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
              case 0:
                return r ? t() : t.call(n);

              case 1:
                return r ? t(e[0]) : t.call(n, e[0]);

              case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

              case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

              case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    185: function(t, e, n) {
        var r = n(12), o = n(119).set, i = r.MutationObserver || r.WebKitMutationObserver, c = r.process, u = r.Promise, s = "process" == n(58)(c);
        t.exports = function() {
            var t, e, n, a = function() {
                var r, o;
                for (s && (r = c.domain) && r.exit(); t; ) {
                    o = t.fn, t = t.next;
                    try {
                        o();
                    } catch (r) {
                        throw t ? n() : e = void 0, r;
                    }
                }
                e = void 0, r && r.enter();
            };
            if (s) n = function() {
                c.nextTick(a);
            }; else if (!i || r.navigator && r.navigator.standalone) if (u && u.resolve) {
                var f = u.resolve(void 0);
                n = function() {
                    f.then(a);
                };
            } else n = function() {
                o.call(r, a);
            }; else {
                var l = !0, p = document.createTextNode("");
                new i(a).observe(p, {
                    characterData: !0
                }), n = function() {
                    p.data = l = !l;
                };
            }
            return function(r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = o), t || (t = o, n()), e = o;
            };
        };
    },
    186: function(t, e, n) {
        var r = n(12).navigator;
        t.exports = r && r.userAgent || "";
    },
    187: function(t, e, n) {
        "use strict";
        var r = n(33), o = n(15), i = n(12), c = n(118), u = n(121);
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = c(this, o.Promise || i.Promise), n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return u(e, t()).then((function() {
                        return n;
                    }));
                } : t, n ? function(n) {
                    return u(e, t()).then((function() {
                        throw n;
                    }));
                } : t);
            }
        });
    },
    188: function(t, e, n) {
        "use strict";
        var r = n(33), o = n(86), i = n(120);
        r(r.S, "Promise", {
            try: function(t) {
                var e = o.f(this), n = i(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise;
            }
        });
    },
    194: function(t, e, n) {
        e.f = n(17);
    },
    195: function(t, e, n) {
        var r = n(12), o = n(15), i = n(65), c = n(194), u = n(41).f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || u(e, t, {
                value: c.f(t)
            });
        };
    },
    218: function(t, e, n) {
        t.exports = {
            default: n(219),
            __esModule: !0
        };
    },
    219: function(t, e, n) {
        n(220), t.exports = n(15).Object.assign;
    },
    220: function(t, e, n) {
        var r = n(33);
        r(r.S + r.F, "Object", {
            assign: n(221)
        });
    },
    221: function(t, e, n) {
        "use strict";
        var r = n(72), o = n(136), i = n(104), c = n(77), u = n(115), s = Object.assign;
        t.exports = !s || n(57)((function() {
            var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach((function(t) {
                e[t] = t;
            })), 7 != s({}, t)[n] || Object.keys(s({}, e)).join("") != r;
        })) ? function(t, e) {
            for (var n = c(t), s = arguments.length, a = 1, f = o.f, l = i.f; s > a; ) for (var p, h = u(arguments[a++]), d = f ? r(h).concat(f(h)) : r(h), v = d.length, m = 0; v > m; ) l.call(h, p = d[m++]) && (n[p] = h[p]);
            return n;
        } : s;
    },
    227: function(t, e, n) {
        var r = n(139), o = n(97).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o);
        };
    },
    252: function(t, e, n) {
        var r = n(85)("meta"), o = n(39), i = n(49), c = n(41).f, u = 0, s = Object.isExtensible || function() {
            return !0;
        }, a = !n(57)((function() {
            return s(Object.preventExtensions({}));
        })), f = function(t) {
            c(t, r, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            });
        }, l = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t)) return "F";
                    if (!e) return "E";
                    f(t);
                }
                return t[r].i;
            },
            getWeak: function(t, e) {
                if (!i(t, r)) {
                    if (!s(t)) return !0;
                    if (!e) return !1;
                    f(t);
                }
                return t[r].w;
            },
            onFreeze: function(t) {
                return a && l.NEED && s(t) && !i(t, r) && f(t), t;
            }
        };
    },
    253: function(t, e, n) {
        var r = n(104), o = n(68), i = n(56), c = n(114), u = n(49), s = n(137), a = Object.getOwnPropertyDescriptor;
        e.f = n(42) ? a : function(t, e) {
            if (t = i(t), e = c(e, !0), s) try {
                return a(t, e);
            } catch (t) {}
            if (u(t, e)) return o(!r.f.call(t, e), t[e]);
        };
    },
    255: function(t, e, n) {
        t.exports = {
            default: n(396),
            __esModule: !0
        };
    },
    256: function(t, e, n) {
        t.exports = {
            default: n(399),
            __esModule: !0
        };
    },
    257: function(t, e, n) {
        t.exports = {
            default: n(400),
            __esModule: !0
        };
    },
    258: function(t, e, n) {
        var r = n(58);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t);
        };
    },
    33: function(t, e, n) {
        var r = n(12), o = n(15), i = n(48), c = n(40), u = n(49), s = function(t, e, n) {
            var a, f, l, p = t & s.F, h = t & s.G, d = t & s.S, v = t & s.P, m = t & s.B, y = t & s.W, w = h ? o : o[e] || (o[e] = {}), b = w.prototype, g = h ? r : d ? r[e] : (r[e] || {}).prototype;
            for (a in h && (n = e), n) (f = !p && g && void 0 !== g[a]) && u(w, a) || (l = f ? g[a] : n[a], 
            w[a] = h && "function" != typeof g[a] ? n[a] : m && f ? i(l, r) : y && g[a] == l ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t;

                          case 1:
                            return new t(e);

                          case 2:
                            return new t(e, n);
                        }
                        return new t(e, n, r);
                    }
                    return t.apply(this, arguments);
                };
                return e.prototype = t.prototype, e;
            }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((w.virtual || (w.virtual = {}))[a] = l, 
            t & s.R && b && !b[a] && c(b, a, l)));
        };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s;
    },
    34: function(t, e, n) {
        var r = n(39);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    39: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    396: function(t, e, n) {
        n(397), t.exports = n(15).Object.keys;
    },
    397: function(t, e, n) {
        var r = n(77), o = n(72);
        n(398)("keys", (function() {
            return function(t) {
                return o(r(t));
            };
        }));
    },
    398: function(t, e, n) {
        var r = n(33), o = n(15), i = n(57);
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t], c = {};
            c[t] = e(n), r(r.S + r.F * i((function() {
                n(1);
            })), "Object", c);
        };
    },
    399: function(t, e, n) {
        n(76), n(98), t.exports = n(194).f("iterator");
    },
    40: function(t, e, n) {
        var r = n(41), o = n(68);
        t.exports = n(42) ? function(t, e, n) {
            return r.f(t, e, o(1, n));
        } : function(t, e, n) {
            return t[e] = n, t;
        };
    },
    400: function(t, e, n) {
        n(401), n(128), n(404), n(405), t.exports = n(15).Symbol;
    },
    401: function(t, e, n) {
        "use strict";
        var r = n(12), o = n(49), i = n(42), c = n(33), u = n(138), s = n(252).KEY, a = n(57), f = n(96), l = n(69), p = n(85), h = n(17), d = n(194), v = n(195), m = n(402), y = n(258), w = n(34), b = n(39), g = n(56), _ = n(114), x = n(68), S = n(129), O = n(403), j = n(253), P = n(41), E = n(72), k = j.f, L = P.f, M = O.f, I = r.Symbol, T = r.JSON, C = T && T.stringify, N = h("_hidden"), A = h("toPrimitive"), F = {}.propertyIsEnumerable, D = f("symbol-registry"), W = f("symbols"), R = f("op-symbols"), H = Object.prototype, U = "function" == typeof I, G = r.QObject, B = !G || !G.prototype || !G.prototype.findChild, q = i && a((function() {
            return 7 != S(L({}, "a", {
                get: function() {
                    return L(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        })) ? function(t, e, n) {
            var r = k(H, e);
            r && delete H[e], L(t, e, n), r && t !== H && L(H, e, r);
        } : L, V = function(t) {
            var e = W[t] = S(I.prototype);
            return e._k = t, e;
        }, z = U && "symbol" == typeof I.iterator ? function(t) {
            return "symbol" == typeof t;
        } : function(t) {
            return t instanceof I;
        }, K = function(t, e, n) {
            return t === H && K(R, e, n), w(t), e = _(e, !0), w(n), o(W, e) ? (n.enumerable ? (o(t, N) && t[N][e] && (t[N][e] = !1), 
            n = S(n, {
                enumerable: x(0, !1)
            })) : (o(t, N) || L(t, N, x(1, {})), t[N][e] = !0), q(t, e, n)) : L(t, e, n);
        }, J = function(t, e) {
            w(t);
            for (var n, r = m(e = g(e)), o = 0, i = r.length; i > o; ) K(t, n = r[o++], e[n]);
            return t;
        }, Y = function(t) {
            var e = F.call(this, t = _(t, !0));
            return !(this === H && o(W, t) && !o(R, t)) && (!(e || !o(this, t) || !o(W, t) || o(this, N) && this[N][t]) || e);
        }, Q = function(t, e) {
            if (t = g(t), e = _(e, !0), t !== H || !o(W, e) || o(R, e)) {
                var n = k(t, e);
                return !n || !o(W, e) || o(t, N) && t[N][e] || (n.enumerable = !0), n;
            }
        }, X = function(t) {
            for (var e, n = M(g(t)), r = [], i = 0; n.length > i; ) o(W, e = n[i++]) || e == N || e == s || r.push(e);
            return r;
        }, Z = function(t) {
            for (var e, n = t === H, r = M(n ? R : g(t)), i = [], c = 0; r.length > c; ) !o(W, e = r[c++]) || n && !o(H, e) || i.push(W[e]);
            return i;
        };
        U || (u((I = function() {
            if (this instanceof I) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
                this === H && e.call(R, n), o(this, N) && o(this[N], t) && (this[N][t] = !1), q(this, t, x(1, n));
            };
            return i && B && q(H, t, {
                configurable: !0,
                set: e
            }), V(t);
        }).prototype, "toString", (function() {
            return this._k;
        })), j.f = Q, P.f = K, n(227).f = O.f = X, n(104).f = Y, n(136).f = Z, i && !n(65) && u(H, "propertyIsEnumerable", Y, !0), 
        d.f = function(t) {
            return V(h(t));
        }), c(c.G + c.W + c.F * !U, {
            Symbol: I
        });
        for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; $.length > tt; ) h($[tt++]);
        for (var et = E(h.store), nt = 0; et.length > nt; ) v(et[nt++]);
        c(c.S + c.F * !U, "Symbol", {
            for: function(t) {
                return o(D, t += "") ? D[t] : D[t] = I(t);
            },
            keyFor: function(t) {
                if (!z(t)) throw TypeError(t + " is not a symbol!");
                for (var e in D) if (D[e] === t) return e;
            },
            useSetter: function() {
                B = !0;
            },
            useSimple: function() {
                B = !1;
            }
        }), c(c.S + c.F * !U, "Object", {
            create: function(t, e) {
                return void 0 === e ? S(t) : J(S(t), e);
            },
            defineProperty: K,
            defineProperties: J,
            getOwnPropertyDescriptor: Q,
            getOwnPropertyNames: X,
            getOwnPropertySymbols: Z
        }), T && c(c.S + c.F * (!U || a((function() {
            var t = I();
            return "[null]" != C([ t ]) || "{}" != C({
                a: t
            }) || "{}" != C(Object(t));
        }))), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [ t ], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !z(t)) return y(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e;
                }), r[1] = e, C.apply(T, r);
            }
        }), I.prototype[A] || n(40)(I.prototype, A, I.prototype.valueOf), l(I, "Symbol"), 
        l(Math, "Math", !0), l(r.JSON, "JSON", !0);
    },
    402: function(t, e, n) {
        var r = n(72), o = n(136), i = n(104);
        t.exports = function(t) {
            var e = r(t), n = o.f;
            if (n) for (var c, u = n(t), s = i.f, a = 0; u.length > a; ) s.call(t, c = u[a++]) && e.push(c);
            return e;
        };
    },
    403: function(t, e, n) {
        var r = n(56), o = n(227).f, i = {}.toString, c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return c && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t);
                } catch (t) {
                    return c.slice();
                }
            }(t) : o(r(t));
        };
    },
    404: function(t, e, n) {
        n(195)("asyncIterator");
    },
    405: function(t, e, n) {
        n(195)("observable");
    },
    41: function(t, e, n) {
        var r = n(34), o = n(137), i = n(114), c = Object.defineProperty;
        e.f = n(42) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return c(t, e, n);
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        };
    },
    42: function(t, e, n) {
        t.exports = !n(57)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        }));
    },
    48: function(t, e, n) {
        var r = n(62);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
              case 1:
                return function(n) {
                    return t.call(e, n);
                };

              case 2:
                return function(n, r) {
                    return t.call(e, n, r);
                };

              case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o);
                };
            }
            return function() {
                return t.apply(e, arguments);
            };
        };
    },
    49: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e);
        };
    },
    50: function(t, e) {
        t.exports = {};
    },
    508: function(t, e, n) {
        t.exports = {
            default: n(509),
            __esModule: !0
        };
    },
    509: function(t, e, n) {
        n(510), t.exports = n(15).Object.setPrototypeOf;
    },
    510: function(t, e, n) {
        var r = n(33);
        r(r.S, "Object", {
            setPrototypeOf: n(511).set
        });
    },
    511: function(t, e, n) {
        var r = n(39), o = n(34), i = function(t, e) {
            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                try {
                    (r = n(48)(Function.call, n(253).f(Object.prototype, "__proto__").set, 2))(t, []), 
                    e = !(t instanceof Array);
                } catch (t) {
                    e = !0;
                }
                return function(t, n) {
                    return i(t, n), e ? t.__proto__ = n : r(t, n), t;
                };
            }({}, !1) : void 0),
            check: i
        };
    },
    56: function(t, e, n) {
        var r = n(115), o = n(83);
        t.exports = function(t) {
            return r(o(t));
        };
    },
    57: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    58: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1);
        };
    },
    592: function(t, e, n) {
        "use strict";
        var r = a(n(593)), o = a(n(255)), i = a(n(256)), c = a(n(257)), u = a(n(95)), s = a(n(218));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        a(n(508)), function() {
            var t;
            function e(t, e, n, r) {
                return new (n || (n = u.default))((function(o, i) {
                    function c(t) {
                        try {
                            s(r.next(t));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function u(t) {
                        try {
                            s(r.throw(t));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function s(t) {
                        t.done ? o(t.value) : new n((function(e) {
                            e(t.value);
                        })).then(c, u);
                    }
                    s((r = r.apply(t, e || [])).next());
                }));
            }
            function n(t, e) {
                var n, r, o, u, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof c.default && (u[i.default] = function() {
                    return this;
                }), u;
                function a(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (;s; ) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                                0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;

                                  case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };

                                  case 5:
                                    s.label++, r = i[1], i = [ 0 ];
                                    continue;

                                  case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue;
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break;
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = e.call(t, s);
                            } catch (t) {
                                i = [ 6, t ], r = 0;
                            } finally {
                                n = o = 0;
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            };
                        }([ i, c ]);
                    };
                }
            }
            function a(t) {
                if (!t) return null;
                if (t.startsWith("chrome://newtab")) return "chrome://newtab";
                if (t.startsWith("chrome://")) return "chrome://";
                var e = (t = f(t)).replace(/^(https?:\/\/)?(www\.)?/, ""), n = function(t) {
                    if (t.includes("google.")) for (var e = [ /^(docs.google.[^.]+\/document)/i, /^(docs.google.[^.]+\/spreadsheets)/i, /^(docs.google.[^.]+\/presentation)/i, /^(docs.google.[^.]+\/drawings)/i, /^(google.[^.]+\/maps)/i, /^(google.[^.]+\/flights)/i ], n = 0; n < e.length; ++n) {
                        var r = e[n].exec(t);
                        if (r) return r[1];
                    }
                }(e);
                if (n) return n;
                var r = function(t) {
                    if (t.includes("onedrive.live.com") || t.includes(".sharepoint.com") || t.includes("office.com") || t.includes("office.live.com")) {
                        var e = {
                            "office.live.com/start/Word.aspx": /^onedrive\.live\.com.*app=Word/i,
                            "office.live.com/start/Excel.aspx": /^onedrive\.live\.com.*app=Excel/i,
                            "office.live.com/start/PowerPoint.aspx": /^onedrive\.live\.com.*app=PowerPoint/i,
                            "onenote.com": /^onedrive\.live\.com\/.*\.one/i,
                            "office.com/launch/word": /^.*\.sharepoint\.com\/:w:/i,
                            "office.com/launch/excel": /^.*\.sharepoint\.com\/:x:/i,
                            "office.com/launch/powerpoint": /^.*\.sharepoint\.com\/:p:/i,
                            "office.com/launch/onenote": /^.*\.sharepoint\.com\/.*\.one/i
                        };
                        return (0, o.default)(e).find((function(n) {
                            return !!t.startsWith(n) || e[n].test(t);
                        }));
                    }
                }(e);
                return r || (function(t) {
                    if (t.startsWith("app.slack.com")) return t.split("/").slice(0, 3).join("/");
                }(e) || e.split("/")[0]);
            }
            function f(t) {
                return void 0 === t && (t = ""), t;
            }
            function l(e) {
                t = e;
            }
            function p() {
                return !!t;
            }
            var h = [];
            function d(t) {
                h = t, chrome.storage.local.set({
                    _switch_openedOrder: h
                });
            }
            var v = {};
            function m() {
                return e(this, void 0, void 0, (function() {
                    var t, e, r;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, u.default.all([ new u.default((function(t) {
                                chrome.tabs.query({}, (function(e) {
                                    t(e);
                                }));
                            })), new u.default((function(t) {
                                chrome.storage.local.get([ "_switch_favsListHeight", "_switch_user", "_switch_favsListScroll", "_switch_appsListScroll" ], (function(e) {
                                    t(e);
                                }));
                            })) ]) ];

                          case 1:
                            return t = n.sent(), e = t[0], r = t[1], [ 2, {
                                tabs: e,
                                favsOrder: [],
                                favsListHeight: r._switch_favsListHeight,
                                user: r._switch_user,
                                favsListScroll: r._switch_favsListScroll || 0,
                                appsListScroll: r._switch_appsListScroll || 0
                            } ];
                        }
                    }));
                }));
            }
            function y(t) {
                return new u.default((function(e) {
                    if (t.windowId === chrome.windows.WINDOW_ID_NONE) return e(!1);
                    chrome.windows.get(t.windowId, (function(t) {
                        return chrome.runtime.lastError || !t ? e(!1) : e("popup" === t.type);
                    }));
                }));
            }
            chrome.storage.local.get([ "_switch_openedOrder", "_switch_customHostnames" ], (function(t) {
                h = t._switch_openedOrder || [], v = t._switch_customHostnames || {};
            }));
            var w = {};
            function b(t, e, n, r) {
                w[t] = {
                    hostname: e,
                    accountId: n,
                    displayName: r
                }, _();
            }
            function g(t, e) {
                return w[t] ? w[t].hostname !== e ? null : w[t] : null;
            }
            function _() {
                chrome.storage.local.set({
                    _switch_sessionStore: w
                });
            }
            chrome.storage.local.get([ "_switch_sessionStore" ], (function(t) {
                w = t._switch_sessionStore || {};
            }));
            var x = {
                "chrome://": !0,
                "chrome-extension:": !0
            };
            function S() {
                return e(this, void 0, void 0, (function() {
                    var t, e, i, c, u, s, l, p, y, w;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, m() ];

                          case 1:
                            return t = n.sent(), e = t.tabs, i = t.favsOrder, c = t.favsListHeight, u = t.user, 
                            s = t.favsListScroll, l = t.appsListScroll, p = {}, e.forEach((function(t) {
                                var e = a(t.url), n = function(t) {
                                    if (!t) return null;
                                    var e = function(t) {
                                        return t.includes("://www.") || /sharepoint\.com.*\/Doc\.aspx/i.test(t) || /sharepoint\.com.*OneNote/i.test(t) ? "www." : "";
                                    }(t = f(t));
                                    return t.startsWith("http://") ? "http://" + e : t.startsWith("https://") ? "https://" + e : t.startsWith("file://") ? "file://" + e : null;
                                }(t.url);
                                t.session = g(t.id, e), t.searchHostname = x[e] ? "" : e, p[e] ? p[e].tabs.push(t) : p[e] = {
                                    hostname: e,
                                    urlPrefix: n,
                                    tabs: [ t ]
                                };
                            })), (0, r.default)(p).forEach((function(t) {
                                t.sessions = function(t) {
                                    var e = {};
                                    return t.tabs.forEach((function(t) {
                                        t.session && t.session.accountId && (e[t.session.accountId] = !0);
                                    })), e;
                                }(t);
                            })), y = function(t) {
                                return d(h.filter((function(e) {
                                    return !!t[e.hostname];
                                }))), (0, o.default)(t).forEach((function(e) {
                                    h.find((function(t) {
                                        return t.hostname === e;
                                    })) || h.push({
                                        hostname: e,
                                        urlPrefix: t[e].urlPrefix,
                                        faviconUrl: t[e].faviconUrl
                                    });
                                })), d(h), h;
                            }(p), w = {}, i.forEach((function(t) {
                                var e = t.hostname, n = t.urlPrefix;
                                if (p[e]) return w[e] = p[e], delete p[e], void (y = y.filter((function(t) {
                                    return t.hostname !== e;
                                })));
                                w[e] = {
                                    hostname: e,
                                    urlPrefix: n,
                                    faviconUrl: t.faviconUrl,
                                    tabs: []
                                };
                            })), [ 2, {
                                apps: p,
                                appsOrder: y,
                                favs: w,
                                favsOrder: i,
                                favsListHeight: c,
                                favsListScroll: s,
                                appsListScroll: l,
                                user: u,
                                customHostnames: v
                            } ];
                        }
                    }));
                }));
            }
            var O = {
                showSwitchOnNewTab: !0,
                showSwitchByDefault: !0,
                tabSearchShortcut: !0,
                toggleSidebarShortcut: !0
            }, j = {
                dockCollapsed: {},
                showSwitchByDefault: !0,
                gmailNotifications: {},
                tabSearchShortcut: null,
                toggleSidebarShortcut: null
            };
            function P(t) {
                return (0, s.default)(j, {
                    currentTabId: t.id
                });
            }
            function E(t) {
                return e(this, void 0, void 0, (function() {
                    var e, r;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = t.id, r = t.url, void 0 !== j.dockCollapsed[e] ? [ 2 ] : r ? [ 4, y(t) ] : [ 2 ];

                          case 1:
                            return n.sent() ? (j.dockCollapsed[e] = !0, [ 2, k() ]) : (!1 === j.showSwitchByDefault && (j.dockCollapsed[e] = !0, 
                            k()), [ 2 ]);
                        }
                    }));
                }));
            }
            function k() {
                chrome.storage.local.set({
                    _switch_preferences: j
                });
            }
            function L(t) {
                return e(this, void 0, void 0, (function() {
                    var e, r;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return p() ? [ 4, S() ] : [ 2 ];

                          case 1:
                            return l(e = n.sent()), [ 4, new u.default((function(e) {
                                t ? chrome.tabs.get(t, (function(t) {
                                    return e(t ? [ t ] : []);
                                })) : chrome.tabs.query({
                                    active: !0
                                }, (function(t) {
                                    return e(t);
                                }));
                            })) ];

                          case 2:
                            return 0 === (r = n.sent()).length || r.forEach((function(t) {
                                chrome.tabs.sendMessage(t.id, {
                                    message: "updateState",
                                    state: e
                                });
                            })), [ 2 ];
                        }
                    }));
                }));
            }
            chrome.storage.local.get([ "_switch_preferences" ], (function(t) {
                t._switch_preferences && (j = (0, s.default)(j, t._switch_preferences)), (0, o.default)(j.dockCollapsed).forEach((function(t) {
                    chrome.tabs.get(+t, (function(e) {
                        chrome.runtime.lastError, e || delete j.dockCollapsed[t];
                    }));
                }));
            }));
            var M = {
                getInitialPreferences: function(t, r, o) {
                    return function(t) {
                        return e(this, void 0, void 0, (function() {
                            return n(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4, E(t) ];

                                  case 1:
                                    return e.sent(), [ 2, P(t) ];
                                }
                            }));
                        }));
                    }(r.tab).then((function(t) {
                        return o(t);
                    })), !0;
                },
                getInitialState: function(r, o, i) {
                    var c = this;
                    chrome.windows.get(o.tab.windowId, (function(r) {
                        return e(c, void 0, void 0, (function() {
                            var e;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = !1, chrome.runtime.lastError || (e = r.focused && o.tab.active), [ 4, new u.default((function(t) {
                                        if (p()) return t();
                                        var e = setInterval((function() {
                                            if (p()) return clearInterval(e), t();
                                        }), 1);
                                    })) ];

                                  case 1:
                                    return n.sent(), chrome.tabs.sendMessage(o.tab.id, {
                                        message: "getInitialStateResult",
                                        state: t,
                                        isActiveTab: e
                                    }), [ 2 ];
                                }
                            }));
                        }));
                    }));
                },
                periodicCheckForUpgrade: function(t, e, n) {
                    var r = e.tab;
                    return chrome.windows.get(r.windowId, (function(t) {
                        if (chrome.runtime.lastError) return n({});
                        n({
                            checkOverrides: t.focused && r.active
                        });
                    })), !0;
                },
                removeSession: function(t, e, n) {
                    var r = a(e.tab.url), o = g(e.tab.id, r);
                    b(e.tab.id, r), o && o.accountId && L();
                },
                runtimeInitialized: function(t, e, n) {
                    chrome.tabs.sendMessage(e.tab.id, {
                        message: "runtimeInitializedResult"
                    });
                },
                setAppListOrder: function(t, e, n) {
                    d(t.appListOrder);
                },
                setCustomHostname: function(t) {
                    var e, n;
                    t.hostname && t.displayName && (e = t.hostname, n = t.displayName, v[e] = n, chrome.storage.local.set({
                        _switch_customHostnames: v
                    }));
                },
                setPreference: function(t, r, o) {
                    return e(this, void 0, void 0, (function() {
                        return n(this, (function(e) {
                            switch (e.label) {
                              case 1:
                                if (!e.sent()) return [ 2 ];
                                e.label = 2;

                              case 3:
                                return n = t.key, o = t.value, i = r.tab.id, "dockCollapsed" === n ? j.dockCollapsed[i] = o : j[n] = o, 
                                k(), O[t.key] ? chrome.tabs.query({}, (function(e) {
                                    e.forEach((function(e) {
                                        chrome.tabs.sendMessage(e.id, {
                                            message: "preferencesUpdated",
                                            preferences: P(e),
                                            key: t.key
                                        });
                                    }));
                                })) : chrome.tabs.sendMessage(r.tab.id, {
                                    message: "preferencesUpdated",
                                    preferences: P(r.tab),
                                    key: t.key
                                }), [ 2 ];
                            }
                            var n, o, i;
                        }));
                    }));
                },
                switchTab: function(t, r, o) {
                    !function(t) {
                        e(this, void 0, void 0, (function() {
                            return n(this, (function(e) {
                                return "number" != typeof t ? [ 2 ] : [ 2, new u.default((function(e, n) {
                                    chrome.tabs.get(t, (function(t) {
                                        return t ? (chrome.tabs.update(t.id, {
                                            active: !0
                                        }), chrome.windows.update(t.windowId, {
                                            focused: !0
                                        }), e()) : n(chrome.runtime.lastError);
                                    }));
                                })) ];
                            }));
                        }));
                    }(t.tabId);
                },
                toggleDockCollapsed: function(t, e, n) {
                    chrome.tabs.sendMessage(e.tab.id, {
                        message: "toggleDockCollapsed"
                    });
                },
                updateSession: function(t, e, n) {
                    var r = t.accountId, o = t.displayName, i = a(e.tab.url), c = g(e.tab.id, i);
                    b(e.tab.id, i, r, o), c && c.accountId === r || L();
                }
            };
            chrome.runtime.onMessage.addListener((function(t, e, n) {
                var r = M[t.message];
                return r && r(t, e, n);
            })), chrome.tabs.onCreated.addListener((function(t) {
                j.showSwitchOnNewTab && (t.pendingUrl || "").startsWith("chrome://newtab") && chrome.tabs.update(t.id, {
                    url: "chrome-extension://" + chrome.runtime.id + "/newtab.html"
                });
            })), chrome.tabs.onUpdated.addListener((function(t, e, n) {
                var r = e.url, o = e.status, i = (e.title, a(n.url));
                ("loading" === o || r) && (g(t, i) || b(t, i)), L(), r && chrome.tabs.sendMessage(t, {
                    message: "tabUrlChanged",
                    url: r
                });
            })), chrome.windows.onFocusChanged.addListener((function(t) {
                chrome.tabs.query({
                    active: !0,
                    windowId: t
                }, (function(t) {
                    t[0] && L();
                }));
            })), chrome.tabs.onRemoved.addListener((function(t) {
                !function(t, e) {
                    delete j.dockCollapsed[e], k();
                }(0, t), function(t) {
                    delete w[t], _();
                }(t), L();
            })), chrome.tabs.onActivated.addListener((function(t) {
                var e = t.tabId, n = t.windowId;
                L(), n !== chrome.windows.WINDOW_ID_NONE && chrome.windows.get(n, (function(t) {
                    t.focused && "popup" !== t.type && chrome.tabs.sendMessage(e, {
                        message: "tabActivated"
                    });
                }));
            })), chrome.windows.onFocusChanged.addListener((function(t) {
                t !== chrome.windows.WINDOW_ID_NONE && chrome.windows.get(t, (function(e) {
                    "popup" !== e.type && chrome.tabs.query({
                        windowId: t,
                        active: !0
                    }, (function(t) {
                        t.forEach((function(t) {
                            chrome.tabs.sendMessage(t.id, {
                                message: "tabActivated"
                            });
                        }));
                    }));
                }));
            })), function() {
                e(this, void 0, void 0, (function() {
                    var t, e;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, new u.default((function(t) {
                                chrome.storage.local.get([ "_switch_user" ], (function(e) {
                                    return t(e._switch_user);
                                }));
                            })) ];

                          case 1:
                            return t = n.sent(), [ 4, new u.default((function(t) {
                                chrome.storage.local.get([ "_switch_accessToken" ], (function(e) {
                                    return t(e._switch_accessToken);
                                }));
                            })) ];

                          case 2:
                            if (e = n.sent(), !t || !e) return [ 3, 6 ];
                            n.label = 3;

                          case 6:
                            return S().then(l), chrome.storage.local.remove([ "_switch_favsId", "_switch_favsOrder" ]), 
                            [ 2 ];
                        }
                    }));
                }));
            }();
        }();
    },
    593: function(t, e, n) {
        t.exports = {
            default: n(594),
            __esModule: !0
        };
    },
    594: function(t, e, n) {
        n(595), t.exports = n(15).Object.values;
    },
    595: function(t, e, n) {
        var r = n(33), o = n(596)(!1);
        r(r.S, "Object", {
            values: function(t) {
                return o(t);
            }
        });
    },
    596: function(t, e, n) {
        var r = n(72), o = n(56), i = n(104).f;
        t.exports = function(t) {
            return function(e) {
                for (var n, c = o(e), u = r(c), s = u.length, a = 0, f = []; s > a; ) i.call(c, n = u[a++]) && f.push(t ? [ n, c[n] ] : c[n]);
                return f;
            };
        };
    },
    62: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    65: function(t, e) {
        t.exports = !0;
    },
    68: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            };
        };
    },
    69: function(t, e, n) {
        var r = n(41).f, o = n(49), i = n(17)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            });
        };
    },
    72: function(t, e, n) {
        var r = n(139), o = n(97);
        t.exports = Object.keys || function(t) {
            return r(t, o);
        };
    },
    76: function(t, e, n) {
        "use strict";
        var r = n(175)(!0);
        n(112)(String, "String", (function(t) {
            this._t = String(t), this._i = 0;
        }), (function() {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            });
        }));
    },
    77: function(t, e, n) {
        var r = n(83);
        t.exports = function(t) {
            return Object(r(t));
        };
    },
    81: function(t, e, n) {
        var r = n(39), o = n(12).document, i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {};
        };
    },
    82: function(t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    83: function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    84: function(t, e, n) {
        var r = n(96)("keys"), o = n(85);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t));
        };
    },
    85: function(t, e) {
        var n = 0, r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    },
    86: function(t, e, n) {
        "use strict";
        var r = n(62);
        function o(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r;
            })), this.resolve = r(e), this.reject = r(n);
        }
        t.exports.f = function(t) {
            return new o(t);
        };
    },
    94: function(t, e, n) {
        var r = n(82), o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    95: function(t, e, n) {
        t.exports = {
            default: n(174),
            __esModule: !0
        };
    },
    96: function(t, e, n) {
        var r = n(15), o = n(12), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: r.version,
            mode: n(65) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    97: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    98: function(t, e, n) {
        n(181);
        for (var r = n(12), o = n(40), i = n(50), c = n(17)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
            var a = u[s], f = r[a], l = f && f.prototype;
            l && !l[c] && o(l, c, a), i[a] = i.Array;
        }
    },
    99: function(t, e, n) {
        var r = n(58), o = n(17)("toStringTag"), i = "Arguments" == r(function() {
            return arguments;
        }());
        t.exports = function(t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e];
                } catch (t) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c;
        };
    }
});