!function(t) {
    var n = {};
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        });
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function(n) {
            return t[n];
        }.bind(null, o));
        return r;
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, "a", n), n;
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
    }, e.p = "", e(e.s = 702);
}({
    104: function(t, n) {
        n.f = {}.propertyIsEnumerable;
    },
    112: function(t, n, e) {
        "use strict";
        var r = e(65), o = e(33), i = e(138), u = e(40), a = e(50), c = e(176), s = e(69), f = e(180), l = e(17)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
        };
        t.exports = function(t, n, e, v, h, m, g) {
            c(e, n, v);
            var y, w, b, x = function(t) {
                if (!d && t in O) return O[t];
                switch (t) {
                  case "keys":
                  case "values":
                    return function() {
                        return new e(this, t);
                    };
                }
                return function() {
                    return new e(this, t);
                };
            }, _ = n + " Iterator", S = "values" == h, E = !1, O = t.prototype, k = O[l] || O["@@iterator"] || h && O[h], M = k || x(h), j = h ? S ? x("entries") : M : void 0, P = "Array" == n && O.entries || k;
            if (P && (b = f(P.call(new t))) !== Object.prototype && b.next && (s(b, _, !0), 
            r || "function" == typeof b[l] || u(b, l, p)), S && k && "values" !== k.name && (E = !0, 
            M = function() {
                return k.call(this);
            }), r && !g || !d && !E && O[l] || u(O, l, M), a[n] = M, a[_] = p, h) if (y = {
                values: S ? M : x("values"),
                keys: m ? M : x("keys"),
                entries: j
            }, g) for (w in y) w in O || i(O, w, y[w]); else o(o.P + o.F * (d || E), n, y);
            return y;
        };
    },
    114: function(t, n, e) {
        var r = e(39);
        t.exports = function(t, n) {
            if (!r(t)) return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    115: function(t, n, e) {
        var r = e(58);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    },
    116: function(t, n, e) {
        var r = e(12).document;
        t.exports = r && r.documentElement;
    },
    117: function(t, n, e) {
        var r = e(99), o = e(17)("iterator"), i = e(50);
        t.exports = e(15).getIteratorMethod = function(t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
        };
    },
    118: function(t, n, e) {
        var r = e(34), o = e(62), i = e(17)("species");
        t.exports = function(t, n) {
            var e, u = r(t).constructor;
            return void 0 === u || null == (e = r(u)[i]) ? n : o(e);
        };
    },
    119: function(t, n, e) {
        var r, o, i, u = e(48), a = e(184), c = e(116), s = e(81), f = e(12), l = f.process, d = f.setImmediate, p = f.clearImmediate, v = f.MessageChannel, h = f.Dispatch, m = 0, g = {}, y = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var n = g[t];
                delete g[t], n();
            }
        }, w = function(t) {
            y.call(t.data);
        };
        d && p || (d = function(t) {
            for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
            return g[++m] = function() {
                a("function" == typeof t ? t : Function(t), n);
            }, r(m), m;
        }, p = function(t) {
            delete g[t];
        }, "process" == e(58)(l) ? r = function(t) {
            l.nextTick(u(y, t, 1));
        } : h && h.now ? r = function(t) {
            h.now(u(y, t, 1));
        } : v ? (i = (o = new v).port2, o.port1.onmessage = w, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*");
        }, f.addEventListener("message", w, !1)) : r = "onreadystatechange" in s("script") ? function(t) {
            c.appendChild(s("script")).onreadystatechange = function() {
                c.removeChild(this), y.call(t);
            };
        } : function(t) {
            setTimeout(u(y, t, 1), 0);
        }), t.exports = {
            set: d,
            clear: p
        };
    },
    12: function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
    },
    120: function(t, n) {
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
    121: function(t, n, e) {
        var r = e(34), o = e(39), i = e(86);
        t.exports = function(t, n) {
            if (r(t), o(n) && n.constructor === t) return n;
            var e = i.f(t);
            return (0, e.resolve)(n), e.promise;
        };
    },
    128: function(t, n) {},
    129: function(t, n, e) {
        var r = e(34), o = e(177), i = e(97), u = e(84)("IE_PROTO"), a = function() {}, c = function() {
            var t, n = e(81)("iframe"), r = i.length;
            for (n.style.display = "none", e(116).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), 
            t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--; ) delete c.prototype[i[r]];
            return c();
        };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (a.prototype = r(t), e = new a, a.prototype = null, e[u] = t) : e = c(), 
            void 0 === n ? e : o(e, n);
        };
    },
    131: function(t, n, e) {
        var r = e(48), o = e(132), i = e(133), u = e(34), a = e(94), c = e(117), s = {}, f = {};
        (n = t.exports = function(t, n, e, l, d) {
            var p, v, h, m, g = d ? function() {
                return t;
            } : c(t), y = r(e, l, n ? 2 : 1), w = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (i(g)) {
                for (p = a(t.length); p > w; w++) if ((m = n ? y(u(v = t[w])[0], v[1]) : y(t[w])) === s || m === f) return m;
            } else for (h = g.call(t); !(v = h.next()).done; ) if ((m = o(h, y, v.value, n)) === s || m === f) return m;
        }).BREAK = s, n.RETURN = f;
    },
    132: function(t, n, e) {
        var r = e(34);
        t.exports = function(t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e);
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), n;
            }
        };
    },
    133: function(t, n, e) {
        var r = e(50), o = e(17)("iterator"), i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t);
        };
    },
    134: function(t, n, e) {
        var r = e(17)("iterator"), o = !1;
        try {
            var i = [ 7 ][r]();
            i.return = function() {
                o = !0;
            }, Array.from(i, (function() {
                throw 2;
            }));
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !o) return !1;
            var e = !1;
            try {
                var i = [ 7 ], u = i[r]();
                u.next = function() {
                    return {
                        done: e = !0
                    };
                }, i[r] = function() {
                    return u;
                }, t(i);
            } catch (t) {}
            return e;
        };
    },
    136: function(t, n) {
        n.f = Object.getOwnPropertySymbols;
    },
    137: function(t, n, e) {
        t.exports = !e(42) && !e(57)((function() {
            return 7 != Object.defineProperty(e(81)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        }));
    },
    138: function(t, n, e) {
        t.exports = e(40);
    },
    139: function(t, n, e) {
        var r = e(49), o = e(56), i = e(178)(!1), u = e(84)("IE_PROTO");
        t.exports = function(t, n) {
            var e, a = o(t), c = 0, s = [];
            for (e in a) e != u && r(a, e) && s.push(e);
            for (;n.length > c; ) r(a, e = n[c++]) && (~i(s, e) || s.push(e));
            return s;
        };
    },
    15: function(t, n) {
        var e = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = e);
    },
    168: function(t, n) {
        t.exports = function(t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
            return t;
        };
    },
    169: function(t, n, e) {
        var r = e(40);
        t.exports = function(t, n, e) {
            for (var o in n) e && t[o] ? t[o] = n[o] : r(t, o, n[o]);
            return t;
        };
    },
    17: function(t, n, e) {
        var r = e(96)("wks"), o = e(85), i = e(12).Symbol, u = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t));
        }).store = r;
    },
    170: function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            };
        };
    },
    171: function(t, n, e) {
        "use strict";
        var r = e(12), o = e(15), i = e(41), u = e(42), a = e(17)("species");
        t.exports = function(t) {
            var n = "function" == typeof o[t] ? o[t] : r[t];
            u && n && !n[a] && i.f(n, a, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    174: function(t, n, e) {
        e(128), e(76), e(98), e(183), e(187), e(188), t.exports = e(15).Promise;
    },
    175: function(t, n, e) {
        var r = e(82), o = e(83);
        t.exports = function(t) {
            return function(n, e) {
                var i, u, a = String(o(n)), c = r(e), s = a.length;
                return c < 0 || c >= s ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === s || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536;
            };
        };
    },
    176: function(t, n, e) {
        "use strict";
        var r = e(129), o = e(68), i = e(69), u = {};
        e(40)(u, e(17)("iterator"), (function() {
            return this;
        })), t.exports = function(t, n, e) {
            t.prototype = r(u, {
                next: o(1, e)
            }), i(t, n + " Iterator");
        };
    },
    177: function(t, n, e) {
        var r = e(41), o = e(34), i = e(72);
        t.exports = e(42) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var e, u = i(n), a = u.length, c = 0; a > c; ) r.f(t, e = u[c++], n[e]);
            return t;
        };
    },
    178: function(t, n, e) {
        var r = e(56), o = e(94), i = e(179);
        t.exports = function(t) {
            return function(n, e, u) {
                var a, c = r(n), s = o(c.length), f = i(u, s);
                if (t && e != e) {
                    for (;s > f; ) if ((a = c[f++]) != a) return !0;
                } else for (;s > f; f++) if ((t || f in c) && c[f] === e) return t || f || 0;
                return !t && -1;
            };
        };
    },
    179: function(t, n, e) {
        var r = e(82), o = Math.max, i = Math.min;
        t.exports = function(t, n) {
            return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
        };
    },
    180: function(t, n, e) {
        var r = e(49), o = e(77), i = e(84)("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
        };
    },
    181: function(t, n, e) {
        "use strict";
        var r = e(182), o = e(170), i = e(50), u = e(56);
        t.exports = e(112)(Array, "Array", (function(t, n) {
            this._t = u(t), this._i = 0, this._k = n;
        }), (function() {
            var t = this._t, n = this._k, e = this._i++;
            return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [ e, t[e] ]);
        }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    },
    182: function(t, n) {
        t.exports = function() {};
    },
    183: function(t, n, e) {
        "use strict";
        var r, o, i, u, a = e(65), c = e(12), s = e(48), f = e(99), l = e(33), d = e(39), p = e(62), v = e(168), h = e(131), m = e(118), g = e(119).set, y = e(185)(), w = e(86), b = e(120), x = e(186), _ = e(121), S = c.TypeError, E = c.process, O = E && E.versions, k = O && O.v8 || "", M = c.Promise, j = "process" == f(E), P = function() {}, $ = o = w.f, T = !!function() {
            try {
                var t = M.resolve(1), n = (t.constructor = {})[e(17)("species")] = function(t) {
                    t(P, P);
                };
                return (j || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof n && 0 !== k.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
            } catch (t) {}
        }(), I = function(t) {
            var n;
            return !(!d(t) || "function" != typeof (n = t.then)) && n;
        }, L = function(t, n) {
            if (!t._n) {
                t._n = !0;
                var e = t._c;
                y((function() {
                    for (var r = t._v, o = 1 == t._s, i = 0, u = function(n) {
                        var e, i, u, a = o ? n.ok : n.fail, c = n.resolve, s = n.reject, f = n.domain;
                        try {
                            a ? (o || (2 == t._h && N(t), t._h = 1), !0 === a ? e = r : (f && f.enter(), e = a(r), 
                            f && (f.exit(), u = !0)), e === n.promise ? s(S("Promise-chain cycle")) : (i = I(e)) ? i.call(e, c, s) : c(e)) : s(r);
                        } catch (t) {
                            f && !u && f.exit(), s(t);
                        }
                    }; e.length > i; ) u(e[i++]);
                    t._c = [], t._n = !1, n && !t._h && A(t);
                }));
            }
        }, A = function(t) {
            g.call(c, (function() {
                var n, e, r, o = t._v, i = C(t);
                if (i && (n = b((function() {
                    j ? E.emit("unhandledRejection", o, t) : (e = c.onunhandledrejection) ? e({
                        promise: t,
                        reason: o
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o);
                })), t._h = j || C(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v;
            }));
        }, C = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
        }, N = function(t) {
            g.call(c, (function() {
                var n;
                j ? E.emit("rejectionHandled", t) : (n = c.onrejectionhandled) && n({
                    promise: t,
                    reason: t._v
                });
            }));
        }, R = function(t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), 
            L(n, !0));
        }, W = function(t) {
            var n, e = this;
            if (!e._d) {
                e._d = !0, e = e._w || e;
                try {
                    if (e === t) throw S("Promise can't be resolved itself");
                    (n = I(t)) ? y((function() {
                        var r = {
                            _w: e,
                            _d: !1
                        };
                        try {
                            n.call(t, s(W, r, 1), s(R, r, 1));
                        } catch (t) {
                            R.call(r, t);
                        }
                    })) : (e._v = t, e._s = 1, L(e, !1));
                } catch (t) {
                    R.call({
                        _w: e,
                        _d: !1
                    }, t);
                }
            }
        };
        T || (M = function(t) {
            v(this, M, "Promise", "_h"), p(t), r.call(this);
            try {
                t(s(W, this, 1), s(R, this, 1));
            } catch (t) {
                R.call(this, t);
            }
        }, (r = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }).prototype = e(169)(M.prototype, {
            then: function(t, n) {
                var e = $(m(this, M));
                return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, 
                e.domain = j ? E.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && L(this, !1), 
                e.promise;
            },
            catch: function(t) {
                return this.then(void 0, t);
            }
        }), i = function() {
            var t = new r;
            this.promise = t, this.resolve = s(W, t, 1), this.reject = s(R, t, 1);
        }, w.f = $ = function(t) {
            return t === M || t === u ? new i(t) : o(t);
        }), l(l.G + l.W + l.F * !T, {
            Promise: M
        }), e(69)(M, "Promise"), e(171)("Promise"), u = e(15).Promise, l(l.S + l.F * !T, "Promise", {
            reject: function(t) {
                var n = $(this);
                return (0, n.reject)(t), n.promise;
            }
        }), l(l.S + l.F * (a || !T), "Promise", {
            resolve: function(t) {
                return _(a && this === u ? M : this, t);
            }
        }), l(l.S + l.F * !(T && e(134)((function(t) {
            M.all(t).catch(P);
        }))), "Promise", {
            all: function(t) {
                var n = this, e = $(n), r = e.resolve, o = e.reject, i = b((function() {
                    var e = [], i = 0, u = 1;
                    h(t, !1, (function(t) {
                        var a = i++, c = !1;
                        e.push(void 0), u++, n.resolve(t).then((function(t) {
                            c || (c = !0, e[a] = t, --u || r(e));
                        }), o);
                    })), --u || r(e);
                }));
                return i.e && o(i.v), e.promise;
            },
            race: function(t) {
                var n = this, e = $(n), r = e.reject, o = b((function() {
                    h(t, !1, (function(t) {
                        n.resolve(t).then(e.resolve, r);
                    }));
                }));
                return o.e && r(o.v), e.promise;
            }
        });
    },
    184: function(t, n) {
        t.exports = function(t, n, e) {
            var r = void 0 === e;
            switch (n.length) {
              case 0:
                return r ? t() : t.call(e);

              case 1:
                return r ? t(n[0]) : t.call(e, n[0]);

              case 2:
                return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);

              case 3:
                return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);

              case 4:
                return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
            }
            return t.apply(e, n);
        };
    },
    185: function(t, n, e) {
        var r = e(12), o = e(119).set, i = r.MutationObserver || r.WebKitMutationObserver, u = r.process, a = r.Promise, c = "process" == e(58)(u);
        t.exports = function() {
            var t, n, e, s = function() {
                var r, o;
                for (c && (r = u.domain) && r.exit(); t; ) {
                    o = t.fn, t = t.next;
                    try {
                        o();
                    } catch (r) {
                        throw t ? e() : n = void 0, r;
                    }
                }
                n = void 0, r && r.enter();
            };
            if (c) e = function() {
                u.nextTick(s);
            }; else if (!i || r.navigator && r.navigator.standalone) if (a && a.resolve) {
                var f = a.resolve(void 0);
                e = function() {
                    f.then(s);
                };
            } else e = function() {
                o.call(r, s);
            }; else {
                var l = !0, d = document.createTextNode("");
                new i(s).observe(d, {
                    characterData: !0
                }), e = function() {
                    d.data = l = !l;
                };
            }
            return function(r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                n && (n.next = o), t || (t = o, e()), n = o;
            };
        };
    },
    186: function(t, n, e) {
        var r = e(12).navigator;
        t.exports = r && r.userAgent || "";
    },
    187: function(t, n, e) {
        "use strict";
        var r = e(33), o = e(15), i = e(12), u = e(118), a = e(121);
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var n = u(this, o.Promise || i.Promise), e = "function" == typeof t;
                return this.then(e ? function(e) {
                    return a(n, t()).then((function() {
                        return e;
                    }));
                } : t, e ? function(e) {
                    return a(n, t()).then((function() {
                        throw e;
                    }));
                } : t);
            }
        });
    },
    188: function(t, n, e) {
        "use strict";
        var r = e(33), o = e(86), i = e(120);
        r(r.S, "Promise", {
            try: function(t) {
                var n = o.f(this), e = i(t);
                return (e.e ? n.reject : n.resolve)(e.v), n.promise;
            }
        });
    },
    194: function(t, n, e) {
        n.f = e(17);
    },
    195: function(t, n, e) {
        var r = e(12), o = e(15), i = e(65), u = e(194), a = e(41).f;
        t.exports = function(t) {
            var n = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in n || a(n, t, {
                value: u.f(t)
            });
        };
    },
    196: function(t, n, e) {
        "use strict";
        n.__esModule = !0;
        var r = u(e(256)), o = u(e(257)), i = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t;
        };
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        n.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(t) {
            return void 0 === t ? "undefined" : i(t);
        } : function(t) {
            return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : i(t);
        };
    },
    218: function(t, n, e) {
        t.exports = {
            default: e(219),
            __esModule: !0
        };
    },
    219: function(t, n, e) {
        e(220), t.exports = e(15).Object.assign;
    },
    220: function(t, n, e) {
        var r = e(33);
        r(r.S + r.F, "Object", {
            assign: e(221)
        });
    },
    221: function(t, n, e) {
        "use strict";
        var r = e(72), o = e(136), i = e(104), u = e(77), a = e(115), c = Object.assign;
        t.exports = !c || e(57)((function() {
            var t = {}, n = {}, e = Symbol(), r = "abcdefghijklmnopqrst";
            return t[e] = 7, r.split("").forEach((function(t) {
                n[t] = t;
            })), 7 != c({}, t)[e] || Object.keys(c({}, n)).join("") != r;
        })) ? function(t, n) {
            for (var e = u(t), c = arguments.length, s = 1, f = o.f, l = i.f; c > s; ) for (var d, p = a(arguments[s++]), v = f ? r(p).concat(f(p)) : r(p), h = v.length, m = 0; h > m; ) l.call(p, d = v[m++]) && (e[d] = p[d]);
            return e;
        } : c;
    },
    227: function(t, n, e) {
        var r = e(139), o = e(97).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o);
        };
    },
    252: function(t, n, e) {
        var r = e(85)("meta"), o = e(39), i = e(49), u = e(41).f, a = 0, c = Object.isExtensible || function() {
            return !0;
        }, s = !e(57)((function() {
            return c(Object.preventExtensions({}));
        })), f = function(t) {
            u(t, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            });
        }, l = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, n) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!c(t)) return "F";
                    if (!n) return "E";
                    f(t);
                }
                return t[r].i;
            },
            getWeak: function(t, n) {
                if (!i(t, r)) {
                    if (!c(t)) return !0;
                    if (!n) return !1;
                    f(t);
                }
                return t[r].w;
            },
            onFreeze: function(t) {
                return s && l.NEED && c(t) && !i(t, r) && f(t), t;
            }
        };
    },
    253: function(t, n, e) {
        var r = e(104), o = e(68), i = e(56), u = e(114), a = e(49), c = e(137), s = Object.getOwnPropertyDescriptor;
        n.f = e(42) ? s : function(t, n) {
            if (t = i(t), n = u(n, !0), c) try {
                return s(t, n);
            } catch (t) {}
            if (a(t, n)) return o(!r.f.call(t, n), t[n]);
        };
    },
    255: function(t, n, e) {
        t.exports = {
            default: e(396),
            __esModule: !0
        };
    },
    256: function(t, n, e) {
        t.exports = {
            default: e(399),
            __esModule: !0
        };
    },
    257: function(t, n, e) {
        t.exports = {
            default: e(400),
            __esModule: !0
        };
    },
    258: function(t, n, e) {
        var r = e(58);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t);
        };
    },
    33: function(t, n, e) {
        var r = e(12), o = e(15), i = e(48), u = e(40), a = e(49), c = function(t, n, e) {
            var s, f, l, d = t & c.F, p = t & c.G, v = t & c.S, h = t & c.P, m = t & c.B, g = t & c.W, y = p ? o : o[n] || (o[n] = {}), w = y.prototype, b = p ? r : v ? r[n] : (r[n] || {}).prototype;
            for (s in p && (e = n), e) (f = !d && b && void 0 !== b[s]) && a(y, s) || (l = f ? b[s] : e[s], 
            y[s] = p && "function" != typeof b[s] ? e[s] : m && f ? i(l, r) : g && b[s] == l ? function(t) {
                var n = function(n, e, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t;

                          case 1:
                            return new t(n);

                          case 2:
                            return new t(n, e);
                        }
                        return new t(n, e, r);
                    }
                    return t.apply(this, arguments);
                };
                return n.prototype = t.prototype, n;
            }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((y.virtual || (y.virtual = {}))[s] = l, 
            t & c.R && w && !w[s] && u(w, s, l)));
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
    },
    34: function(t, n, e) {
        var r = e(39);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    39: function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    396: function(t, n, e) {
        e(397), t.exports = e(15).Object.keys;
    },
    397: function(t, n, e) {
        var r = e(77), o = e(72);
        e(398)("keys", (function() {
            return function(t) {
                return o(r(t));
            };
        }));
    },
    398: function(t, n, e) {
        var r = e(33), o = e(15), i = e(57);
        t.exports = function(t, n) {
            var e = (o.Object || {})[t] || Object[t], u = {};
            u[t] = n(e), r(r.S + r.F * i((function() {
                e(1);
            })), "Object", u);
        };
    },
    399: function(t, n, e) {
        e(76), e(98), t.exports = e(194).f("iterator");
    },
    40: function(t, n, e) {
        var r = e(41), o = e(68);
        t.exports = e(42) ? function(t, n, e) {
            return r.f(t, n, o(1, e));
        } : function(t, n, e) {
            return t[n] = e, t;
        };
    },
    400: function(t, n, e) {
        e(401), e(128), e(404), e(405), t.exports = e(15).Symbol;
    },
    401: function(t, n, e) {
        "use strict";
        var r = e(12), o = e(49), i = e(42), u = e(33), a = e(138), c = e(252).KEY, s = e(57), f = e(96), l = e(69), d = e(85), p = e(17), v = e(194), h = e(195), m = e(402), g = e(258), y = e(34), w = e(39), b = e(56), x = e(114), _ = e(68), S = e(129), E = e(403), O = e(253), k = e(41), M = e(72), j = O.f, P = k.f, $ = E.f, T = r.Symbol, I = r.JSON, L = I && I.stringify, A = p("_hidden"), C = p("toPrimitive"), N = {}.propertyIsEnumerable, R = f("symbol-registry"), W = f("symbols"), F = f("op-symbols"), D = Object.prototype, B = "function" == typeof T, H = r.QObject, z = !H || !H.prototype || !H.prototype.findChild, G = i && s((function() {
            return 7 != S(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        })) ? function(t, n, e) {
            var r = j(D, n);
            r && delete D[n], P(t, n, e), r && t !== D && P(D, n, r);
        } : P, V = function(t) {
            var n = W[t] = S(T.prototype);
            return n._k = t, n;
        }, U = B && "symbol" == typeof T.iterator ? function(t) {
            return "symbol" == typeof t;
        } : function(t) {
            return t instanceof T;
        }, Y = function(t, n, e) {
            return t === D && Y(F, n, e), y(t), n = x(n, !0), y(e), o(W, n) ? (e.enumerable ? (o(t, A) && t[A][n] && (t[A][n] = !1), 
            e = S(e, {
                enumerable: _(0, !1)
            })) : (o(t, A) || P(t, A, _(1, {})), t[A][n] = !0), G(t, n, e)) : P(t, n, e);
        }, J = function(t, n) {
            y(t);
            for (var e, r = m(n = b(n)), o = 0, i = r.length; i > o; ) Y(t, e = r[o++], n[e]);
            return t;
        }, Q = function(t) {
            var n = N.call(this, t = x(t, !0));
            return !(this === D && o(W, t) && !o(F, t)) && (!(n || !o(this, t) || !o(W, t) || o(this, A) && this[A][t]) || n);
        }, X = function(t, n) {
            if (t = b(t), n = x(n, !0), t !== D || !o(W, n) || o(F, n)) {
                var e = j(t, n);
                return !e || !o(W, n) || o(t, A) && t[A][n] || (e.enumerable = !0), e;
            }
        }, K = function(t) {
            for (var n, e = $(b(t)), r = [], i = 0; e.length > i; ) o(W, n = e[i++]) || n == A || n == c || r.push(n);
            return r;
        }, q = function(t) {
            for (var n, e = t === D, r = $(e ? F : b(t)), i = [], u = 0; r.length > u; ) !o(W, n = r[u++]) || e && !o(D, n) || i.push(W[n]);
            return i;
        };
        B || (a((T = function() {
            if (this instanceof T) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0), n = function(e) {
                this === D && n.call(F, e), o(this, A) && o(this[A], t) && (this[A][t] = !1), G(this, t, _(1, e));
            };
            return i && z && G(D, t, {
                configurable: !0,
                set: n
            }), V(t);
        }).prototype, "toString", (function() {
            return this._k;
        })), O.f = X, k.f = Y, e(227).f = E.f = K, e(104).f = Q, e(136).f = q, i && !e(65) && a(D, "propertyIsEnumerable", Q, !0), 
        v.f = function(t) {
            return V(p(t));
        }), u(u.G + u.W + u.F * !B, {
            Symbol: T
        });
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt; ) p(Z[tt++]);
        for (var nt = M(p.store), et = 0; nt.length > et; ) h(nt[et++]);
        u(u.S + u.F * !B, "Symbol", {
            for: function(t) {
                return o(R, t += "") ? R[t] : R[t] = T(t);
            },
            keyFor: function(t) {
                if (!U(t)) throw TypeError(t + " is not a symbol!");
                for (var n in R) if (R[n] === t) return n;
            },
            useSetter: function() {
                z = !0;
            },
            useSimple: function() {
                z = !1;
            }
        }), u(u.S + u.F * !B, "Object", {
            create: function(t, n) {
                return void 0 === n ? S(t) : J(S(t), n);
            },
            defineProperty: Y,
            defineProperties: J,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: K,
            getOwnPropertySymbols: q
        }), I && u(u.S + u.F * (!B || s((function() {
            var t = T();
            return "[null]" != L([ t ]) || "{}" != L({
                a: t
            }) || "{}" != L(Object(t));
        }))), "JSON", {
            stringify: function(t) {
                for (var n, e, r = [ t ], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                if (e = n = r[1], (w(n) || void 0 !== t) && !U(t)) return g(n) || (n = function(t, n) {
                    if ("function" == typeof e && (n = e.call(this, t, n)), !U(n)) return n;
                }), r[1] = n, L.apply(I, r);
            }
        }), T.prototype[C] || e(40)(T.prototype, C, T.prototype.valueOf), l(T, "Symbol"), 
        l(Math, "Math", !0), l(r.JSON, "JSON", !0);
    },
    402: function(t, n, e) {
        var r = e(72), o = e(136), i = e(104);
        t.exports = function(t) {
            var n = r(t), e = o.f;
            if (e) for (var u, a = e(t), c = i.f, s = 0; a.length > s; ) c.call(t, u = a[s++]) && n.push(u);
            return n;
        };
    },
    403: function(t, n, e) {
        var r = e(56), o = e(227).f, i = {}.toString, u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return u && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t);
                } catch (t) {
                    return u.slice();
                }
            }(t) : o(r(t));
        };
    },
    404: function(t, n, e) {
        e(195)("asyncIterator");
    },
    405: function(t, n, e) {
        e(195)("observable");
    },
    41: function(t, n, e) {
        var r = e(34), o = e(137), i = e(114), u = Object.defineProperty;
        n.f = e(42) ? Object.defineProperty : function(t, n, e) {
            if (r(t), n = i(n, !0), r(e), o) try {
                return u(t, n, e);
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
        };
    },
    42: function(t, n, e) {
        t.exports = !e(57)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        }));
    },
    48: function(t, n, e) {
        var r = e(62);
        t.exports = function(t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
              case 1:
                return function(e) {
                    return t.call(n, e);
                };

              case 2:
                return function(e, r) {
                    return t.call(n, e, r);
                };

              case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o);
                };
            }
            return function() {
                return t.apply(n, arguments);
            };
        };
    },
    49: function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n);
        };
    },
    50: function(t, n) {
        t.exports = {};
    },
    508: function(t, n, e) {
        t.exports = {
            default: e(509),
            __esModule: !0
        };
    },
    509: function(t, n, e) {
        e(510), t.exports = e(15).Object.setPrototypeOf;
    },
    510: function(t, n, e) {
        var r = e(33);
        r(r.S, "Object", {
            setPrototypeOf: e(511).set
        });
    },
    511: function(t, n, e) {
        var r = e(39), o = e(34), i = function(t, n) {
            if (o(t), !r(n) && null !== n) throw TypeError(n + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, r) {
                try {
                    (r = e(48)(Function.call, e(253).f(Object.prototype, "__proto__").set, 2))(t, []), 
                    n = !(t instanceof Array);
                } catch (t) {
                    n = !0;
                }
                return function(t, e) {
                    return i(t, e), n ? t.__proto__ = e : r(t, e), t;
                };
            }({}, !1) : void 0),
            check: i
        };
    },
    525: function(t, n, e) {
        var r = e(39);
        t.exports = function(t, n) {
            if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t;
        };
    },
    56: function(t, n, e) {
        var r = e(115), o = e(83);
        t.exports = function(t) {
            return r(o(t));
        };
    },
    57: function(t, n) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    58: function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1);
        };
    },
    580: function(t, n, e) {
        "use strict";
        var r = e(41).f, o = e(129), i = e(169), u = e(48), a = e(168), c = e(131), s = e(112), f = e(170), l = e(171), d = e(42), p = e(252).fastKey, v = e(525), h = d ? "_s" : "size", m = function(t, n) {
            var e, r = p(n);
            if ("F" !== r) return t._i[r];
            for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
        t.exports = {
            getConstructor: function(t, n, e, s) {
                var f = t((function(t, r) {
                    a(t, f, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[h] = 0, 
                    null != r && c(r, e, t[s], t);
                }));
                return i(f.prototype, {
                    clear: function() {
                        for (var t = v(this, n), e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), 
                        delete e[r.i];
                        t._f = t._l = void 0, t[h] = 0;
                    },
                    delete: function(t) {
                        var e = v(this, n), r = m(e, t);
                        if (r) {
                            var o = r.n, i = r.p;
                            delete e._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), 
                            e._l == r && (e._l = i), e[h]--;
                        }
                        return !!r;
                    },
                    forEach: function(t) {
                        v(this, n);
                        for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f; ) for (r(e.v, e.k, this); e && e.r; ) e = e.p;
                    },
                    has: function(t) {
                        return !!m(v(this, n), t);
                    }
                }), d && r(f.prototype, "size", {
                    get: function() {
                        return v(this, n)[h];
                    }
                }), f;
            },
            def: function(t, n, e) {
                var r, o, i = m(t, n);
                return i ? i.v = e : (t._l = i = {
                    i: o = p(n, !0),
                    k: n,
                    v: e,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), r && (r.n = i), t[h]++, "F" !== o && (t._i[o] = i)), t;
            },
            getEntry: m,
            setStrong: function(t, n, e) {
                s(t, n, (function(t, e) {
                    this._t = v(t, n), this._k = e, this._l = void 0;
                }), (function() {
                    for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
                    return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [ n.k, n.v ]) : (this._t = void 0, 
                    f(1));
                }), e ? "entries" : "values", !e, !0), l(n);
            }
        };
    },
    581: function(t, n, e) {
        "use strict";
        var r = e(12), o = e(33), i = e(252), u = e(57), a = e(40), c = e(169), s = e(131), f = e(168), l = e(39), d = e(69), p = e(41).f, v = e(706)(0), h = e(42);
        t.exports = function(t, n, e, m, g, y) {
            var w = r[t], b = w, x = g ? "set" : "add", _ = b && b.prototype, S = {};
            return h && "function" == typeof b && (y || _.forEach && !u((function() {
                (new b).entries().next();
            }))) ? (b = n((function(n, e) {
                f(n, b, t, "_c"), n._c = new w, null != e && s(e, g, n[x], n);
            })), v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(t) {
                var n = "add" == t || "set" == t;
                t in _ && (!y || "clear" != t) && a(b.prototype, t, (function(e, r) {
                    if (f(this, b, t), !n && y && !l(e)) return "get" == t && void 0;
                    var o = this._c[t](0 === e ? 0 : e, r);
                    return n ? this : o;
                }));
            })), y || p(b.prototype, "size", {
                get: function() {
                    return this._c.size;
                }
            })) : (b = m.getConstructor(n, t, g, x), c(b.prototype, e), i.NEED = !0), d(b, t), 
            S[t] = b, o(o.G + o.W + o.F, S), y || m.setStrong(b, t, g), b;
        };
    },
    582: function(t, n, e) {
        var r = e(99), o = e(710);
        t.exports = function(t) {
            return function() {
                if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                return o(this);
            };
        };
    },
    583: function(t, n, e) {
        "use strict";
        var r = e(33);
        t.exports = function(t) {
            r(r.S, t, {
                of: function() {
                    for (var t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
                    return new this(n);
                }
            });
        };
    },
    584: function(t, n, e) {
        "use strict";
        var r = e(33), o = e(62), i = e(48), u = e(131);
        t.exports = function(t) {
            r(r.S, t, {
                from: function(t) {
                    var n, e, r, a, c = arguments[1];
                    return o(this), (n = void 0 !== c) && o(c), null == t ? new this : (e = [], n ? (r = 0, 
                    a = i(c, arguments[2], 2), u(t, !1, (function(t) {
                        e.push(a(t, r++));
                    }))) : u(t, !1, e.push, e), new this(e));
                }
            });
        };
    },
    62: function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    65: function(t, n) {
        t.exports = !0;
    },
    68: function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            };
        };
    },
    69: function(t, n, e) {
        var r = e(41).f, o = e(49), i = e(17)("toStringTag");
        t.exports = function(t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            });
        };
    },
    702: function(t, n, e) {
        "use strict";
        var r = f(e(196)), o = f(e(703)), i = f(e(713)), u = f(e(255)), a = f(e(256)), c = f(e(257)), s = f(e(95));
        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        f(e(218)), f(e(719)), f(e(508)), function() {
            var l, d, p, t = !1, n = null;
            function e() {
                return n && "left" === n.position.value ? "var(--sub-sidebar-width)" : "0px";
            }
            function f() {
                return n && "right" === n.position.value ? "var(--sub-sidebar-width)" : "0px";
            }
            function v(t, n, e, r) {
                return new (e || (e = s.default))((function(o, i) {
                    function u(t) {
                        try {
                            c(r.next(t));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(t) {
                        try {
                            c(r.throw(t));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function c(t) {
                        t.done ? o(t.value) : new e((function(n) {
                            n(t.value);
                        })).then(u, a);
                    }
                    c((r = r.apply(t, n || [])).next());
                }));
            }
            function h(t, n) {
                var e, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof c.default && (i[a.default] = function() {
                    return this;
                }), i;
                function s(i) {
                    return function(a) {
                        return function(i) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (;u; ) try {
                                if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 
                                0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;

                                  case 4:
                                    return u.label++, {
                                        value: i[1],
                                        done: !1
                                    };

                                  case 5:
                                    u.label++, r = i[1], i = [ 0 ];
                                    continue;

                                  case 7:
                                    i = u.ops.pop(), u.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        u = 0;
                                        continue;
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        u.label = i[1];
                                        break;
                                    }
                                    if (6 === i[0] && u.label < o[1]) {
                                        u.label = o[1], o = i;
                                        break;
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2], u.ops.push(i);
                                        break;
                                    }
                                    o[2] && u.ops.pop(), u.trys.pop();
                                    continue;
                                }
                                i = n.call(t, u);
                            } catch (t) {
                                i = [ 6, t ], r = 0;
                            } finally {
                                e = o = 0;
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            };
                        }([ i, a ]);
                    };
                }
            }
            function m(t) {
                l = t;
            }
            function g(t) {}
            function y(t) {
                p = t;
            }
            chrome.runtime.sendMessage({
                action: "get_settings"
            }, (function(t) {
                n = t;
            })), chrome.runtime.onMessage.addListener((function(t, e, r) {
                switch (t.action) {
                  case "settings_updated":
                    n = t.settings, ht(), rn(1);
                }
            }));
            var w = $(window), b = ($(document), $("html")), x = {};
            function _(t) {
                x = t;
            }
            var E = !1;
            function O(t) {
                E = t;
            }
            var k = !1;
            chrome.storage.local.get([ "_switch_appFavicons" ], (function(t) {
                t._switch_appFavicons;
            }));
            var M = [], j = [];
            function P(t) {
                M.push(t);
            }
            function T(t) {
                j.push(t);
            }
            function I() {
                j.forEach((function(t) {
                    return t();
                })), j.splice(0, j.length);
            }
            var L = [], A = [];
            function C(t, n) {
                L.push(t), A.push(n);
            }
            function N(t, n) {
                L = L.filter((function(n) {
                    return n !== t;
                })), A = A.filter((function(t) {
                    return t !== n;
                }));
            }
            P((function() {
                return !0;
            }));
            var R = [ 1, 10, 25, 50, 100, 200, 400, 800, 1600, 3200, 5e3 ];
            function W(t, n) {
                void 0 === n && (n = []), 0 !== n.length && setTimeout((function() {
                    t(), W(t, n.slice(1));
                }), n[0]);
            }
            function F(t, n, e) {
                void 0 === n && (n = 1e3);
                var r = null, o = !0;
                return function() {
                    for (var i = this, u = [], a = 0; a < arguments.length; a++) u[a] = arguments[a];
                    if (e && o) return t.apply(this, u), void (o = !1);
                    r || (r = setTimeout((function() {
                        t.apply(i, u), r = null;
                    }), n));
                };
            }
            function D(t, n) {
                void 0 === n && (n = 1e3);
                var e = null;
                return function() {
                    for (var r = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                    clearTimeout(e), e = setTimeout((function() {
                        t.apply(r, o);
                    }), n);
                };
            }
            function B(t, n) {
                return void 0 === n && (n = []), null == t || 0 === n.length ? t : B(t[n[0]], n.slice(1));
            }
            function z(t) {
                var n = t.get(0);
                n && [ "mousedown", "mouseup", "click" ].forEach((function(t) {
                    n.dispatchEvent(new MouseEvent(t, {
                        view: window,
                        bubbles: !0,
                        cancelable: !0,
                        button: 0
                    }));
                }));
            }
            function G(t, n) {
                return void 0 === n && (n = 12e4), v(this, void 0, void 0, (function() {
                    var e;
                    return h(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return (e = $(t)).length > 0 ? [ 2, e ] : [ 4, new s.default((function(r) {
                                var o = n, i = setInterval((function() {
                                    return (o -= 500) < 0 || 0 !== (e = $(t)).length ? (clearInterval(i), r()) : void 0;
                                }), 500);
                            })) ];

                          case 1:
                            return r.sent(), [ 2, e ];
                        }
                    }));
                }));
            }
            function V(t) {
                if (!t) return null;
                if (t.startsWith("chrome://newtab")) return "chrome://newtab";
                if (t.startsWith("chrome://")) return "chrome://";
                var n = (t = function(t) {
                    if (void 0 === t && (t = ""), t.startsWith("chrome-extension://klbibkeccnjlkjkiokjodocebajanakg")) {
                        var n = /uri=([^&]+)/.exec(t);
                        return n ? n[1] : t;
                    }
                    return t;
                }(t)).replace(/^(https?:\/\/)?(www\.)?/, ""), e = function(t) {
                    if (t.includes("google.")) for (var n = [ /^(docs.google.[^.]+\/document)/i, /^(docs.google.[^.]+\/spreadsheets)/i, /^(docs.google.[^.]+\/presentation)/i, /^(docs.google.[^.]+\/drawings)/i, /^(google.[^.]+\/maps)/i, /^(google.[^.]+\/flights)/i ], e = 0; e < n.length; ++e) {
                        var r = n[e].exec(t);
                        if (r) return r[1];
                    }
                }(n);
                if (e) return e;
                var r = function(t) {
                    if (t.includes("onedrive.live.com") || t.includes(".sharepoint.com") || t.includes("office.com") || t.includes("office.live.com")) {
                        var n = {
                            "office.live.com/start/Word.aspx": /^onedrive\.live\.com.*app=Word/i,
                            "office.live.com/start/Excel.aspx": /^onedrive\.live\.com.*app=Excel/i,
                            "office.live.com/start/PowerPoint.aspx": /^onedrive\.live\.com.*app=PowerPoint/i,
                            "onenote.com": /^onedrive\.live\.com\/.*\.one/i,
                            "office.com/launch/word": /^.*\.sharepoint\.com\/:w:/i,
                            "office.com/launch/excel": /^.*\.sharepoint\.com\/:x:/i,
                            "office.com/launch/powerpoint": /^.*\.sharepoint\.com\/:p:/i,
                            "office.com/launch/onenote": /^.*\.sharepoint\.com\/.*\.one/i
                        };
                        return (0, u.default)(n).find((function(e) {
                            return !!t.startsWith(e) || n[e].test(t);
                        }));
                    }
                }(n);
                return r || (function(t) {
                    if (t.startsWith("app.slack.com")) return t.split("/").slice(0, 3).join("/");
                }(n) || n.split("/")[0]);
            }
            function U(t, n) {
                t && chrome.runtime.sendMessage({
                    message: "updateSession",
                    accountId: t,
                    displayName: n
                });
            }
            function Y() {
                chrome.runtime.sendMessage({
                    message: "removeSession"
                });
            }
            function J(t, n) {
                n && chrome.runtime.sendMessage({
                    message: "updateNotifications",
                    notifications: t,
                    accountId: n
                });
            }
            function Q() {
                chrome.runtime.sendMessage({
                    message: "updateTitleNotification"
                });
            }
            function X(t) {
                return void 0 === t && (t = ""), (t = t.replace(",", "").replace(" ", "")) && parseInt(t, 10) || 0;
            }
            var K = 0;
            function q(t, n) {
                if (0 !== t.length) {
                    var e = X(t.text());
                    e !== K && e > 0 && (K = e, J(e, n));
                }
            }
            var Z = D((function(t, n) {
                J(X($(n.find(".screenReaderOnly").get(0)).parent().text().replace(/unread/gi, "")), t);
            }), 500);
            function tt(t) {
                return v(this, void 0, void 0, (function() {
                    var n, e, r, o;
                    return h(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return [ 4, G(B(t, [ "pageLoad" ]), 3e4) ];

                          case 1:
                            return 0 === i.sent().length ? [ 2, Y() ] : (n = B(t, [ "accountIdPosition" ]), 
                            e = B(t, [ "titleSeparator" ]), (r = $("title").text().split(e)).length < n + 1 ? [ 2, Y() ] : (o = r[n].trim()) ? (U(o, o), 
                            function(t, n) {
                                v(this, void 0, void 0, (function() {
                                    var e, r, o;
                                    return h(this, (function(i) {
                                        return e = B(n, [ "inbox" ]), 0 === (r = $(e)).length || (Z(t, r), (o = new MutationObserver((function() {
                                            Z(t, r);
                                        }))).observe(r.get(0), {
                                            subtree: !0,
                                            characterData: !0,
                                            childList: !0
                                        }), T((function() {
                                            return o.disconnect();
                                        }))), [ 2 ];
                                    }));
                                }));
                            }(o, t), [ 2 ]) : [ 2, Y() ]);
                        }
                    }));
                }));
            }
            var nt = D((function(t, n) {
                var e = 0, r = et(n), o = r.navItemQueries, i = r.badgeCountQuery;
                o.split(",").forEach((function(t) {
                    var n = $(t).find(i);
                    0 !== n.length && (e += X(n.text()));
                })), J(e, t);
            }), 500);
            function et(t) {
                return {
                    navItemQueries: B(t, [ "navItems" ]),
                    badgeQuery: B(t, [ "badge" ]),
                    badgeCountQuery: B(t, [ "badgeCount" ])
                };
            }
            function rt(t) {
                return v(this, void 0, void 0, (function() {
                    var n;
                    return h(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return [ 4, G(B(t, [ "teamName" ]), 2e4) ];

                          case 1:
                            return 0 === (n = e.sent()).length || (r = V(location.href), o = "slack.com - " + n.text(), 
                            chrome.runtime.sendMessage({
                                message: "setCustomHostname",
                                hostname: r,
                                displayName: o
                            })), [ 2 ];
                        }
                        var r, o;
                    }));
                }));
            }
            var ot = {
                "facebook.com": {
                    handler: function(t) {
                        return v(this, void 0, void 0, (function() {
                            var n, e, r, o, i;
                            return h(this, (function(u) {
                                switch (u.label) {
                                  case 0:
                                    return [ 4, G(B(t, [ "profile" ]), 2e4) ];

                                  case 1:
                                    return 0 === (n = u.sent()).length ? [ 2, Y() ] : (e = n.attr("href").split("/").slice(-1)[0]) ? (r = B(t, [ "name" ]), 
                                    o = $(r), i = (o.text() ? o.text() + " - " : "") + e, U(e, i), setTimeout((function() {
                                        return Q();
                                    }), 500), [ 2 ]) : [ 2, Y() ];
                                }
                            }));
                        }));
                    }
                },
                "mail.google.com": {
                    handler: function(t) {
                        return v(this, void 0, void 0, (function() {
                            var n, e, r;
                            return h(this, (function(o) {
                                switch (o.label) {
                                  case 0:
                                    location.protocol, location.host, location.pathname, o.label = 1;

                                  case 2:
                                    return e = o.sent(), r = e.data, n = r.getElementsByTagName("title")[0].childNodes[0].nodeValue.match(/[^ ]+@[^ ]+$/)[0], 
                                    [ 3, 4 ];

                                  case 3:
                                    return o.sent(), [ 3, 4 ];

                                  case 4:
                                    return n ? (U(n, n), function(t, n) {
                                        v(this, void 0, void 0, (function() {
                                            var e, r, o;
                                            return h(this, (function(i) {
                                                switch (i.label) {
                                                  case 0:
                                                    return e = B(n, [ "newMessages" ]), q($(e), t), r = new MutationObserver((function(e) {
                                                        var r = e[0].addedNodes;
                                                        if (r && 0 !== r.length) {
                                                            var o = r[0], i = B(n, [ "newMessageRow" ]), u = $(i);
                                                            if ($.contains(o, u.get(0))) {
                                                                var a = B(n, [ "messageCount" ]), c = u.find(a);
                                                                if (0 === c.length) return K = 0, void J(0, t);
                                                                q(c, t);
                                                            }
                                                        }
                                                    })), [ 4, G(B(n, [ "sidebar" ])) ];

                                                  case 1:
                                                    return 0 === (o = i.sent()).length || (r.observe(o.get(0), {
                                                        childList: !0
                                                    }), T((function() {
                                                        return r.disconnect();
                                                    }))), [ 2 ];
                                                }
                                            }));
                                        }));
                                    }(n, t), [ 2 ]) : [ 2, Y() ];
                                }
                            }));
                        }));
                    }
                },
                "outlook.live.com": {
                    handler: tt
                },
                "outlook.office.com": {
                    handler: tt
                },
                "outlook.office365.com": {
                    handler: tt
                },
                "messenger.com": {
                    handler: function(t) {
                        return v(this, void 0, void 0, (function() {
                            var n, e, r, o, i, u;
                            return h(this, (function(a) {
                                switch (a.label) {
                                  case 0:
                                    return [ 4, G(B(t, [ "pageLoad" ]), 2e4) ];

                                  case 1:
                                    return 0 === a.sent().length ? [ 2, Y() ] : (n = B(t, [ "preloadedData" ]), e = d.find(n).text(), 
                                    (r = /"USER_ID":"([^"]*)"/.exec(e)) || (r = /"ACCOUNT_ID":"([^"]*)"/.exec(e)), r ? !(o = r[1]) || o.length < 5 ? [ 2, Y() ] : (i = /"NAME":"([^"]*)"/.exec(e), 
                                    u = i && i[1], U(o, u), setTimeout((function() {
                                        return Q();
                                    }), 500), [ 2 ]) : [ 2, Y() ]);
                                }
                            }));
                        }));
                    }
                },
                "linkedin.com": {
                    handler: function(t) {
                        return v(this, void 0, void 0, (function() {
                            var n, e, r, o, i, u, a, c;
                            return h(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    return [ 4, G(B(t, [ "profileTrigger" ])) ];

                                  case 1:
                                    return 0 === (n = s.sent()).length ? [ 2, Y() ] : (e = B(t, [ "profileDropdown" ]), 
                                    r = $("\n    <style>\n      " + e + " {\n        display: none !important;\n      }\n    </style>\n  "), 
                                    d.append(r), z(n), o = B(t, [ "profileLink" ]), i = $(o), u = i.length > 0 && i.attr("href"), 
                                    z(n), setTimeout((function() {
                                        return r.remove();
                                    }), 500), u && (a = /\/in\/([^/]+)/.exec(u)) ? (U(c = a[1], c), function(t, n) {
                                        nt(t, n), setTimeout((function() {
                                            return Q();
                                        }), 1e3), et(n).navItemQueries.split(",").forEach((function(e) {
                                            var r = $(e);
                                            if (0 !== r.length) {
                                                var o = new MutationObserver((function(e) {
                                                    e.forEach((function(e) {
                                                        var r = et(n).badgeQuery;
                                                        e.addedNodes.forEach((function(e) {
                                                            $(e).is(r) && nt(t, n);
                                                        })), e.removedNodes.forEach((function(e) {
                                                            $(e).is(r) && nt(t, n);
                                                        }));
                                                    }));
                                                }));
                                                o.observe(r.get(0), {
                                                    childList: !0,
                                                    subtree: !0
                                                }), T((function() {
                                                    return o.disconnect();
                                                }));
                                            }
                                        }));
                                    }(c, t), [ 2 ]) : [ 2, Y() ]);
                                }
                            }));
                        }));
                    }
                },
                "youtube.com": {
                    handler: function(t) {
                        return v(this, void 0, void 0, (function() {
                            var n, e, r, o, i;
                            return h(this, (function(u) {
                                switch (u.label) {
                                  case 0:
                                    return [ 4, G(B(t, [ "profileButton" ]), 1e4) ];

                                  case 1:
                                    return 0 === (n = u.sent()).length ? [ 2, Y() ] : (e = B(t, [ "profileDropdown" ]), 
                                    r = $("\n    <style>\n      " + e + " {\n        display: none !important;\n      }\n    </style>\n  "), 
                                    d.append(r), z(n), [ 4, G(B(t, [ "channelName" ]), 5e3) ]);

                                  case 2:
                                    return o = u.sent(), i = o.text(), z(n), setTimeout((function() {
                                        return r.remove();
                                    }), 1e3), i ? (U(i, i), setTimeout((function() {
                                        return Q();
                                    }), 500), [ 2 ]) : [ 2, Y() ];
                                }
                            }));
                        }));
                    }
                }
            };
            function ut() {
                return !!x.dockCollapsed[x.currentTabId];
            }
            function at() {
                return v(this, void 0, void 0, (function() {
                    var t, n, e, r;
                    return h(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return t = V(location.href), (n = function(t) {
                                for (var n = [ "google", "airbnb" ], e = 0; e < n.length; ++e) {
                                    var r = n[e], o = new RegExp(r + "(.[^.]+)$", "i").exec(location.hostname);
                                    if (o) return t.replace("" + r + o[1], r);
                                }
                            }(t)) ? [ 2, n ] : [ 4, ct() ];

                          case 1:
                            return (e = o.sent()) ? [ 2, e ] : (i = {
                                "kayak.com": /\.kayak\.com$/,
                                "slack.com": /\.slack\.com$/,
                                "wikipedia.org": /wikipedia\.org$/,
                                "1password.com": /1password\.com$/,
                                "buffer.com": /buffer\.com$/,
                                docusign: /docusign\.[^\.]+$/,
                                amazon: /amazon\.[^\.]+$/
                            }, (r = (0, u.default)(i).find((function(t) {
                                return i[t].test(location.hostname);
                            }))) ? [ 2, r ] : [ 2, t ]);
                        }
                        var i;
                    }));
                }));
            }
            function ct() {
                return v(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        return /(sharepoint\.com$)|(onedrive\.live\.com$)|(office\.com$)/.test(location.hostname) ? /delve\.office\.com$/.test(location.hostname) ? [ 2, "delve.office.com" ] : [ 2, new s.default((function(t) {
                            $((function() {
                                return /(sharepoint\.com\/:x:)|(onedrive\.live\.com.*app=Excel)/i.test(location.href) ? t("microsoftExcel") : /(sharepoint\.com\/:w:)|(onedrive\.live\.com.*app=Word)/i.test(location.href) ? t("microsoftWord") : /(sharepoint\.com\/:p:)|(onedrive\.live\.com.*app=PowerPoint)/i.test(location.href) ? t("microsoftPowerPoint") : /sharepoint\.com.*\/onedrive.aspx/i.test(location.href) ? t("oneDriveSharepoint") : /onedrive\.live\.com\/edit\.aspx/.test(location.href) ? t("onedrive.live.com/edit.aspx") : t(V(location.href));
                            }));
                        })) ] : [ 2 ];
                    }));
                }));
            }
            function st() {
                return !ut();
            }
            function ft() {
                chrome.runtime.sendMessage({
                    message: "toggleDockCollapsed"
                });
            }
            var dt = "", pt = "", vt = 0;
            function ht() {
                var t = mt(), n = function() {
                    return d.append(t);
                }, e = function() {
                    return t.remove();
                };
                st() && n(), C(n, e), $((function() {
                    if (parseInt(b.css("margin-left"), 10) > 50) return e(), void N(n, e);
                    if (function() {
                        var t = getComputedStyle(document.body);
                        "50px" !== t.marginLeft && (dt = "float: right !important;"), "none" !== t.backgroundImage && (t.backgroundPositionX.startsWith("0") ? pt = "background-position-x: var(--sub-sidebar-width) !important;" : "50%" === t.backgroundPositionX && (pt = "background-position-x: calc(50% + 25px) !important;"));
                    }(), dt || pt) {
                        var r = t;
                        t = mt(), st() && n(), r.remove();
                    }
                    W((function() {
                        if (!((e = gt()) <= 0 || e === vt || (vt = e, 0))) {
                            var e, r = t;
                            t = mt(), st() && n(), r.remove();
                        }
                    }), [ 1e3, 1e3, 2e3 ]);
                }));
            }
            function mt() {
                var t = gt(), r = t ? " - " + t + "px" : "";
                return n.position.value, $("\n    <style>\n      @media screen {\n        body {\n          width: calc(100vw - var(--sub-sidebar-width)" + r + ") !important;\n          min-width: calc(100vw - var(--sub-sidebar-width)" + r + ") !important;\n          box-sizing: border-box !important;\n          margin-left: " + e() + " !important;\n margin-right: " + f() + " !important;\n          float: right !important;\n          " + pt + "\n        }\n      }\n    </style>\n  ");
            }
            function gt() {
                try {
                    var t = window.innerWidth - document.documentElement.clientWidth;
                    if (t > 0 && t <= 30) return t;
                } catch (t) {}
                return 0;
            }
            var yt = new i.default, wt = new i.default, bt = new i.default, xt = new i.default, _t = 1;
            function St() {
                return _t > 99999999 && (_t = 1), _t++;
            }
            var Et = "switch-shift-element-right", Ot = "switch-adjust-element-width", kt = "switch-adjust-floating-right-width", Mt = "switch-adjust-width-normal", jt = "switch-off-screen-element-right", Pt = "switch-resize-disable-transitions", $t = "switch-left-popup-id", Tt = "switch-fixed-left-auto", It = {}, Lt = {}, At = {
                CANVAS: !0,
                EMBED: !0,
                IFRAME: !0,
                IMG: !0,
                INPUT: !0,
                OBJECT: !0,
                VIDEO: !0
            };
            function Ct(t, n) {
                if (t.style.width) return t.style.width;
                var e = t.style.display;
                t.style.display = "none";
                var r = n.getPropertyValue("width");
                if (t.style.display = e, "auto" === r && At[t.tagName]) {
                    var o = t.getAttribute("width");
                    if (o) {
                        if (o.endsWith("%")) return o;
                        var i = parseInt(o, 10);
                        if (i) return i + "px";
                    }
                }
                return r;
            }
            function Nt(t) {
                return !!location.hostname.includes(".slack.com") && t.classList.contains("ReactModal__Overlay");
            }
            function Rt(t, e, r) {
                void 0 === r && (r = {});
                var o = t[0];
                if (!o.getAttribute(Et) && !Nt(o)) {
                    var i = r.bodyStyles, u = r.ignoreOffscreenCheck, a = o.getBoundingClientRect();
                    if ((u || !function(t, n) {
                        var e = bt.get(t);
                        return !!e && (!!e.hasOffscreenTransition || n.right <= 50);
                    }(o, a)) && !function(t) {
                        return t.marginLeft.endsWith("px") && parseInt(t.marginLeft, 10) > 50 && t.marginLeft === t.marginRight;
                    }(e) && !function(t, n) {
                        var e = parseInt(t.style.left.endsWith("px") && t.style.left, 10) || 0, r = t.style.transform, o = /translateX\((.*)\)/.exec(r);
                        o || (o = /translate\((.*),.*\)/.exec(r));
                        var u = e + (parseInt(o && o[1].endsWith("px") && o[1], 10) || 0) >= 50;
                        if (u) {
                            var a = t.previousSibling;
                            if (!a || !a.getBoundingClientRect) return u;
                            if (a.getBoundingClientRect().right - n.left == 50) return !1;
                        }
                        return u;
                    }(o, a)) {
                        var c = i && function(t, n) {
                            return "none" !== n.backgroundImage && t.backgroundImage === n.backgroundImage && t.backgroundPositionX === n.backgroundPositionX;
                        }(e, i), s = St(), f = "calc(" + e.marginLeft + " + var(--sub-sidebar-width))", l = $("\n    <style>\n      [" + Et + '="' + s + '"] {\n        margin-left: ' + f + " !important;\n\n        " + (c ? "\n          background-position-x: 0 !important;\n        " : "") + "\n      }\n    </style>\n  "), p = function() {
                            d.append(l), "left" === n.position.value && o.setAttribute(Et, "" + s);
                        }, v = function() {
                            l.remove(), o.removeAttribute(Et);
                        };
                        st() && p(), C(p, v), It[s] = p, Lt[s] = v;
                    }
                }
            }
            var Wt = {
                "mail.google.com": !0
            };
            function Ft(t, e) {
                if (!Wt[location.hostname]) {
                    var r = t[0];
                    if (!(r.getAttribute(Ot) || r.getAttribute(kt) || Nt(r) || r.getAttribute(jt) || r.getBoundingClientRect().right + window.scrollX + n.subSidebarWidth.value <= window.innerWidth)) {
                        var o = St(), i = "calc(" + Ct(r, e) + " - var(--sub-sidebar-width))", u = $("\n    <style>\n      [" + Ot + '="' + o + '"] {\n        width: ' + i + " !important;\n      }\n    </style>\n  "), a = function() {
                            d.append(u), r.setAttribute(Ot, "" + o);
                        }, c = function() {
                            u.remove(), r.removeAttribute(Ot);
                        };
                        st() && a(), C(a, c), It[o] = a, Lt[o] = c;
                    }
                }
            }
            var Dt = {
                "mail.google.com": !0
            }, Bt = "-6.26129px", Ht = "switch-fixed-positioning-test", zt = "switch-fixed-left-auto-test", Gt = {
                DIV: !0
            };
            function Vt(t) {
                if (0 === t.length) return [];
                var n = {}, e = new o.default, r = new o.default;
                t.forEach((function(t) {
                    var o = yt.has(t) ? yt.get(t).styles : getComputedStyle(t);
                    "50px" === o.left && "0px" === o.right ? r.add(t) : Gt[t.tagName] ? e.add(t) : n[t.tagName] = !0;
                }));
                var i = (0, u.default)(n).join(", "), a = $("\n    <style>\n      " + (i ? "\n        " + i + " {\n          left: " + Bt + ";\n          right: " + Bt + ";\n        }\n      " : "") + "\n\n      ." + Ht + " {\n        left: " + Bt + ";\n        right: " + Bt + ";\n      }\n    </style>\n  "), c = $("\n    <style>\n      ." + zt + " {\n        left: auto !important;\n      }\n    </style>\n  "), s = [], f = window.scrollX;
                return d.prepend(a), l.append(c), t.forEach((function(t, n) {
                    var o = yt.has(t) ? yt.get(t).styles : getComputedStyle(t);
                    if (r.has(t)) s[n] = {
                        left: "auto",
                        right: "auto"
                    }; else {
                        t && t.classList && "function" == typeof t.classList.add && e.has(t) && t.classList.add(Ht);
                        var i = {
                            left: o.left,
                            right: o.right
                        };
                        i.left === Bt && (i.left = "auto"), i.right === Bt && (i.right = "auto"), "auto" !== i.left && (t && t.classList && "function" == typeof t.classList.add && t.classList.add(zt), 
                        "0px" !== o.left && i.left === o.left && (i.left = "auto"), t && t.classList && "function" == typeof t.classList.add && t.classList.remove(zt)), 
                        t && t.classList && "function" == typeof t.classList.add && t.classList.remove(Ht), 
                        s[n] = i;
                    }
                })), a.remove(), c.remove(), f > 0 && window.scrollTo({
                    left: f
                }), s;
            }
            var Ut = {
                static: !0,
                relative: !0,
                sticky: !0
            };
            function Yt(t, n) {
                if (p && p[0] && p[0].contains(t)) return null;
                if (t.classList.contains("ui-tooltip")) return null;
                if (n || (n = getComputedStyle(t)), "none" === n.display) return null;
                if (Ut[n.position]) return parseInt(n.width, 10) !== window.innerWidth || n.display.startsWith("table") || function(t) {
                    var n = t.parentElement;
                    if (!n || "HTML" === n.tagName || "HEAD" === n.tagName) return null;
                    for (;n && "HTML" !== n.tagName; ) {
                        if (wt.has(n) || yt.has(n)) return n;
                        n = n.parentElement;
                    }
                    return null;
                }(t) ? null : {
                    type: "normal",
                    styles: n,
                    $elem: $(t)
                };
                if ("auto" === n.width) return null;
                if (function(t) {
                    if ("mail.google.com" === location.hostname && t.classList.contains("mixmax-sidebar")) return !0;
                }(t)) return null;
                if (function(t) {
                    if (!t.width.endsWith("px") || !t.height.endsWith("px")) return !1;
                    var n = parseInt(t.width, 10), e = parseInt(t.height, 10);
                    return !(n > 200) && n * e <= 25;
                }(n)) return null;
                var e = $(t);
                if ("absolute" === n.position) {
                    var r = function(t) {
                        var n = t.parentElement;
                        if (!n || "HTML" === n.tagName || "HEAD" === n.tagName) return null;
                        for (;n && "HTML" !== n.tagName; ) {
                            var e = getComputedStyle(n);
                            if (Jt[e.position]) return n;
                            n = n.parentElement;
                        }
                        return null;
                    }(t);
                    if (r) {
                        if (!yt.has(r)) return null;
                        var o = getComputedStyle(r);
                        if (parseInt(n.width, 10) <= parseInt(o.width, 10)) return null;
                        yt.set(t, {
                            $elem: e,
                            styles: n,
                            adjustWidthOnly: !0
                        });
                    }
                }
                return {
                    type: "fixedPosition",
                    styles: n,
                    $elem: e
                };
            }
            var Jt = {
                relative: !0,
                absolute: !0,
                fixed: !0,
                sticky: !0
            }, Qt = {
                left: !0,
                transform: !0,
                all: !0
            };
            function Xt(t, n) {
                var e = n.getAttribute(t);
                if (e) {
                    var r = It[e], o = Lt[e];
                    o && (o(), N(r, o), delete It[e], delete Lt[e]), n.removeAttribute(t);
                }
            }
            var Kt = F(qt, 1e3, !0);
            function qt() {
                if (E && st()) {
                    yt.forEach((function(t, n) {
                        var e = t.styles;
                        t.adjustWidthOnly && n.getAttribute(Et) && Xt(Et, n);
                        var r = Yt(n, e);
                        if (!r || "fixedPosition" !== r.type) return Xt(Et, n), Xt(Ot, n), Xt(kt, n), xt.has(n) && (n.removeAttribute($t), 
                        xt.delete(n)), yt.delete(n);
                    })), wt.forEach((function(t, n) {
                        var e = Yt(n, t.styles);
                        if (!e || "normal" !== e.type) return Xt(Mt, n), wt.delete(n);
                    })), bt.forEach((function(t, n) {
                        var e = t.$elem;
                        if (!document.body.contains(n)) return e.off("transitionend"), bt.delete(n);
                        n.getBoundingClientRect().right <= 50 && Xt(Et, n);
                    })), [].slice.call(document.body.getElementsByTagName("*")).forEach((function(t) {
                        if (!wt.has(t) && !yt.has(t)) {
                            var n = Yt(t);
                            if (n) {
                                var e = n.type, r = n.styles, o = n.$elem;
                                "normal" === e ? wt.set(t, {
                                    styles: r,
                                    $elem: o
                                }) : "fixedPosition" === e && yt.set(t, {
                                    styles: r,
                                    $elem: o
                                });
                            }
                        }
                    }));
                    var t = [];
                    yt.forEach((function(n, e) {
                        return t.push(e);
                    }));
                    var n = Vt(t), e = getComputedStyle(document.body);
                    t.forEach((function(t, r) {
                        var i = yt.get(t), u = i.styles, a = i.$elem, c = i.adjustWidthOnly, s = n[r], f = t.getBoundingClientRect();
                        f.right <= 50 && function(t, n) {
                            var e = t[0];
                            if (!bt.has(e)) {
                                var r = n.transitionProperty.split(", "), o = n.transitionDuration.split(", "), i = !!r.find((function(t, n) {
                                    return Qt[t] && parseFloat(o[n]) > 0;
                                }));
                                bt.set(e, {
                                    $elem: t,
                                    styles: n,
                                    hasOffscreenTransition: i
                                }), i && (t.off("transitionend"), t.on("transitionend", (function(e) {
                                    var r = e.originalEvent.propertyName;
                                    if (Qt[r]) {
                                        var o = this.getBoundingClientRect();
                                        o.right <= 50 || o.left >= 40 || Rt(t, n, {
                                            ignoreOffscreenCheck: !0
                                        });
                                    }
                                })));
                            }
                        }(a, u), f.left >= window.innerWidth && a.attr(jt, "true"), c || "absolute" !== u.position && "fixed" !== u.position || "auto" !== s.left && Rt(a, u, {
                            bodyStyles: e
                        }), "auto" === s.left && "0px" === s.right && function(t, n) {
                            var e = t[0];
                            if (!(e.getAttribute(kt) || e.getAttribute(Ot) || e.getAttribute(jt) || Nt(e) || parseInt(n.width, 10) < 300)) {
                                var r = new o.default, i = e.getBoundingClientRect(), u = parseInt(n.height, 10);
                                (function(t, n) {
                                    if (n <= 600) return [ t + .25 * n, t + .5 * n, t + .75 * n ];
                                    for (var e = [], r = 50; r < n; r += 150) e.push(t + r);
                                    return e;
                                })(i.top, u).forEach((function(t) {
                                    var n;
                                    try {
                                        n = document.elementsFromPoint(i.left - 1, t);
                                    } catch (t) {
                                        return;
                                    }
                                    n.forEach((function(t) {
                                        "BODY" !== t.tagName && "HTML" !== t.tagName && r.add(t);
                                    }));
                                }));
                                var a = 0;
                                if (r.forEach((function(t) {
                                    var n = t.getBoundingClientRect().right - i.left;
                                    n >= 5 && n <= 50 && n > a && (a = n);
                                })), a) {
                                    var c = St(), s = "calc(" + Ct(e, n) + " - " + a + "px)", f = $("\n    <style>\n      [" + kt + '="' + c + '"] {\n        width: ' + s + " !important;\n      }\n    </style>\n  "), l = function() {
                                        d.append(f), e.setAttribute(kt, "" + c);
                                    }, p = function() {
                                        f.remove(), e.removeAttribute(kt);
                                    };
                                    st() && l(), C(l, p), It[c] = l, Lt[c] = p;
                                }
                            }
                        }(a, u), ("auto" === s.left || t.getAttribute(Et)) && Ft(a, u);
                    }));
                    var r = [];
                    wt.forEach((function(t, n) {
                        return r.push(n);
                    })), r.forEach((function(t) {
                        var n = wt.get(t), e = n.styles;
                        !function(t, n) {
                            if (!Dt[location.hostname]) {
                                var e = t[0];
                                if (!e.getAttribute(Mt) && !e.getAttribute(Ot)) {
                                    var r = St(), o = "calc(" + Ct(e, n) + " - var(--sub-sidebar-width))", i = $("\n    <style>\n      [" + Mt + '="' + r + '"] {\n        width: ' + o + " !important;\n      }\n    </style>\n  "), u = function() {
                                        d.append(i), e.setAttribute(Mt, "" + r);
                                    }, a = function() {
                                        i.remove(), e.removeAttribute(Mt);
                                    };
                                    st() && u(), C(u, a), It[r] = u, Lt[r] = a;
                                }
                            }
                        }(n.$elem, e);
                    }));
                }
            }
            function Zt() {
                var t = setInterval((function() {
                    if (E && st()) {
                        var t = new o.default, n = new i.default;
                        [ .2 * window.innerHeight, .4 * window.innerHeight, .6 * window.innerHeight, .8 * window.innerHeight ].forEach((function(n) {
                            var e = document.elementFromPoint(51, n);
                            e && t.add(e);
                        })), t.forEach((function(t) {
                            if (!(p && p[0] && p[0].contains(t))) {
                                var e = function(t) {
                                    if (!t) return {};
                                    var n = getComputedStyle(t);
                                    if (tn(t, n)) return {
                                        elem: t,
                                        styles: n
                                    };
                                    var e = t.parentElement;
                                    if (!e || "HTML" === e.tagName || "HEAD" === e.tagName) return {};
                                    for (;e && "BODY" !== e.tagName; ) {
                                        var r = getComputedStyle(e);
                                        if (tn(e, r)) return {
                                            elem: e,
                                            styles: r
                                        };
                                        e = e.parentElement;
                                    }
                                    return {};
                                }(t), r = e.elem, o = e.styles;
                                r && n.set(r, {
                                    styles: o
                                });
                            }
                        })), n.forEach((function(t, n) {
                            var e = t.styles;
                            if (xt.has(n)) {
                                var r = xt.get(n).id;
                                if (n.getAttribute($t) === r) return;
                            }
                            if (!(n.getBoundingClientRect().left >= 40)) {
                                var o = $(n);
                                yt.set(n, {
                                    $elem: o,
                                    styles: e
                                }), Rt(o, e), n.getAttribute(Et) && Ft(o, e);
                                var i = "" + St();
                                n.setAttribute($t, i), xt.set(n, {
                                    id: i
                                });
                            }
                        }));
                    }
                }), 1e3);
                P((function() {
                    return clearInterval(t);
                }));
            }
            function tn(t, n) {
                return !("fixed" !== n.position || t.getAttribute(Tt) || "auto" === Vt([ t ])[0].left && (t.setAttribute(Tt, "true"), 
                1));
            }
            var nn = setInterval((function() {
                E && xt.forEach((function(t, n) {
                    if (!document.body.contains(n)) return xt.delete(n);
                }));
            }), 6e4);
            P((function() {
                return clearInterval(nn);
            }));
            var en = {
                "docs.google/document": !0,
                "docs.google/spreadsheets": !0,
                "google/maps": !0,
                "kayak.com": !0,
                "messenger.com": !0,
                "portal.azure.com": !0,
                "cloud.mongodb.com": !0
            };
            function rn(t) {
                en[t] || $((function() {
                    W((function() {
                        return Kt();
                    }), [ 1, 100, 500, 1e3, 2e3 ]), chrome.runtime.onMessage.addListener((function(t) {
                        "preferencesUpdated" === t.message ? "dockCollapsed" === t.key && st() && setTimeout((function() {
                            return on();
                        }), 100) : ("tabUrlChanged" === t.message || "tabActivated" === t.message) && setTimeout((function() {
                            return on();
                        }), 100);
                    }));
                    var t = D((function() {
                        yt.forEach((function(t, n) {
                            return n.setAttribute(Pt, "true"), setTimeout((function() {
                                n.removeAttribute(Pt);
                            }), 2e3), Xt(Et, n), Xt(Ot, n), Xt(kt, n), yt.delete(n);
                        })), wt.forEach((function(t, n) {
                            return n.setAttribute(Pt, "true"), setTimeout((function() {
                                n.removeAttribute(Pt);
                            }), 2e3), Xt(Mt, n), wt.delete(n);
                        })), qt(), on();
                    }), 1e3);
                    w.on("resize", t);
                    var n = window.scrollY, e = F((function() {
                        window.scrollY !== n && (Kt(), n = window.scrollY);
                    }), 1e3);
                    w.on("scroll", e);
                    var r = window.scrollY, o = D((function() {
                        window.scrollY !== r && (on(), r = window.scrollY);
                    }), 1e3);
                    w.on("scroll", o), P((function() {
                        w.off("resize", t), w.off("scroll", e), w.off("scroll", o);
                    })), Zt();
                }));
            }
            function on() {
                W((function() {
                    return Kt();
                }), [ 1, 1e3, 2e3 ]);
            }
            var un, an = {
                amazon: function() {
                    $((function() {
                        var t = $("\n      <style>\n        html.a-js body,\n        html.a-no-js body,\n        body {\n          margin-left: " + e() + " !important;\n margin-right: " + f() + " !important;\n        }\n      </style>\n    "), n = function() {
                            return l.append(t);
                        };
                        st() && n(), C(n, (function() {
                            return t.remove();
                        }));
                    }));
                },
                "cloud.mongodb.com": function() {
                    var t = $('\n    <style>\n      [data-testid="mongo-header-container"] {\n        width: calc(100vw - 50px) !important;\n        margin-left: 50px !important;\n      }\n\n      [data-testid="side-nav-container"] + div {\n        width: calc(100% - 50px) !important;\n        padding-left: 10px !important;\n      }\n\n      [data-testid="mongo-layout"] {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  '), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "docs.google/document": function() {
                    var t = $("\n    <style>\n      #docs-editor {\n        padding-right: 50px !important;\n      }\n\n      #docs-side-toolbar {\n        right: 50px !important;\n      }\n    </style>\n  "), n = !0, e = function() {
                        if (d.append(t), !n && !k) {
                            var e = $("#viewModeButton");
                            z(e), z(e);
                        }
                    };
                    st() && e(), C(e, (function() {
                        if (t.remove(), !k) {
                            var n = $("#viewModeButton");
                            z(n), z(n);
                        }
                    })), n = !1;
                },
                "docs.google/presentation": function() {
                    var t = $("\n    <style>\n      #punch-explore-widget {\n        right: 50px !important;\n      }\n\n      #docs-editor {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  "), n = !0, e = function() {
                        if (d.append(t), !n && !k) {
                            var e = $("#viewModeButton");
                            z(e), z(e);
                        }
                    };
                    st() && e(), C(e, (function() {
                        if (t.remove(), !k) {
                            var n = $("#viewModeButton");
                            z(n), z(n);
                        }
                    })), n = !1;
                },
                "docs.google/spreadsheets": function() {
                    var t = $('\n    <style>\n      #docs-toolbar-wrapper {\n        box-sizing: content-box !important;\n      }\n\n      #waffle-grid-container {\n        width: calc(100vw - 50px) !important;\n      }\n\n      .input-box[style~="right:"] {\n        margin-right: 50px !important;\n      }\n\n      #grid-bottom-bar {\n        padding-right: 50px !important;\n      }\n    </style>\n  '), n = !0, e = function() {
                        if (d.append(t), !n && !k) {
                            var e = $("#viewModeButton");
                            z(e), z(e);
                        }
                    };
                    st() && e(), C(e, (function() {
                        if (t.remove(), !k) {
                            var n = $("#viewModeButton");
                            z(n), z(n);
                        }
                    })), n = !1;
                },
                docusign: function() {
                    var t = $("\n    <style>\n      .hero-meerkat-home::before {\n        width: calc(100% - 50px) !important;\n      }\n    </style>\n  "), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "facebook.com": function() {
                    var t = $('\n    <style>\n      div[aria-label="Dialog content"] [' + Ot + '] > div:nth-child(2) {\n        width: 350px !important;\n      }\n\n      .uiStreamStory[id] {\n        width: 350px !important;\n      }\n\n      .uiStreamStory[id] > div:first-child {\n        width: 326px !important;\n      }\n\n      #pagelet_bluebar [role="banner"] {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  '), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "google/maps": function() {
                    var t = !location.pathname.includes("/uv"), n = $("\n    <style>\n      " + (t ? ".widget-pane," : "") + "\n      .widget-settings-pane,\n      #loading-pane-div,\n      .widget-homescreen,\n      .widget-minimap {\n        margin-left: 50px !important;\n      }\n\n      #omnibox {\n        margin-left: 58px !important;\n      }\n    </style>\n  "), e = function() {
                        return d.append(n);
                    };
                    st() && e(), C(e, (function() {
                        return n.remove();
                    }));
                },
                "kayak.com": function() {
                    var t = $("\n    <style>\n      #mapViewBodyMapWrapper.js-pinned,\n      .Hotels-Results-HotelRightRail {\n        margin-left: 50px !important;\n      }\n    </style>\n  "), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "mail.google": function() {
                    var t = $("\n    <style>\n      body > div > .nH {\n        padding-right: 50px !important;\n        box-sizing: border-box !important;\n      }\n    </style>\n  "), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "messenger.com": function() {
                    var t = $('\n    <style>\n      .uiLayer [role="presentation"][style] {\n        width: calc(100% - 50px) !important;\n        margin-left: 50px !important;\n      }\n    </style>\n  '), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "myworkday.com": function() {
                    var t = $('\n    <style>\n      div[aria-label="navigation pane"] {\n        width: 334px !important;\n        min-width: 334px !important;\n      }\n    </style>\n  '), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "portal.azure.com": function() {
                    var t = $("\n    <style>\n      #web-container {\n        width: calc(100vw - 50px) !important;\n        left: 50px !important;\n      }\n    </style>\n  "), n = function() {
                        return d.append(t);
                    };
                    st() && n(), C(n, (function() {
                        return t.remove();
                    }));
                },
                "youtube.com": function() {
                    var t, n = $("\n    <style>\n      #masthead {\n        display: block !important;\n      }\n\n      @media (min-width: 1000px) and (max-width: 1749px) {\n        #secondary {\n          width: 352px !important;\n          min-width: 250px !important;\n        }\n      }\n\n      @media (min-width: 1750px) and (max-width: 1800px) {\n        #secondary {\n          width: calc(402px - 1800px + 100vw) !important;\n          min-width: calc(300px - 1800px + 100vw) !important;\n        }\n      }\n\n      @media (max-width: 999px) {\n        #player {\n          margin-left: -24px !important;\n          margin-right: -24px !important;\n        }\n      }\n    </style>\n  "), e = $("\n    <style> #sidebar-wrapper{display: none !important;}  [is-watch-page][switch-shift-element-right] {margin-left: 0px !important;} [is-watch-page][switch-adjust-element-width] {width:100% !important; scrollbar-width: none !important;} \n        [is-watch-page]::-webkit-scrollbar {width: 0;} </style> \n"), r = function() {
                        "/watch" === location.pathname && d.append(n);
                    }, o = function() {
                        n.remove();
                    };
                    st() && r(), C(r, o);
                    var i = function() {
                        if (document.fullscreenElement) return d.append(e), p.addClass("switch-full-screen-dock"), 
                        void ((t = ut()) || ft());
                        e.remove(), p.removeClass("switch-full-screen-dock"), !t && ut() && setTimeout((function() {
                            return ft();
                        }), 500);
                    };
                    document.addEventListener("fullscreenchange", i, !0), P((function() {
                        document.removeEventListener("fullscreenchange", i, !0);
                    })), chrome.runtime.onMessage.addListener((function(t) {
                        "tabUrlChanged" === t.message && setTimeout((function() {
                            st() && (document.fullscreenElement || (o(), r()));
                        }), 100);
                    }));
                }
            };
            !function() {
                v(this, void 0, void 0, (function() {
                    function n() {
                        y($(".app-sidebar-root"));
                    }
                    var e;
                    return h(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, (u = function() {
                                return $(".app-sidebar-root").length > 0 && $("#switch-bottom-menu").length > 0;
                            }, new s.default((function(t) {
                                if (!u()) return t(!0);
                                var n = 10, e = !1;
                                P((function() {
                                    return e = !0;
                                }));
                                var r = setInterval((function() {
                                    return e || --n < 0 ? (clearInterval(r), t(!1)) : u() ? void 0 : (clearInterval(r), 
                                    t(!0));
                                }), 1e3);
                            }))) ];

                          case 1:
                            return o.sent() ? "finance.yahoo.com" !== location.hostname || "/" !== location.pathname ? [ 3, 3 ] : [ 4, new s.default((function(t) {
                                setTimeout((function() {
                                    return t();
                                }), 3e3);
                            })) ] : [ 2 ];

                          case 2:
                            o.sent(), o.label = 3;

                          case 3:
                            return [ 4, new s.default((function(t) {
                                chrome.runtime.onMessage.addListener((function n(e, r, o) {
                                    "runtimeInitializedResult" === e.message && (chrome.runtime.onMessage.removeListener(n), 
                                    clearInterval(un), t());
                                })), un = setInterval((function() {
                                    try {
                                        chrome.runtime.sendMessage({
                                            message: "runtimeInitialized"
                                        });
                                    } catch (t) {
                                        t && !/extension context invalidated/i.test(t.message) || clearInterval(un);
                                    }
                                }), 100), chrome.runtime.sendMessage({
                                    message: "runtimeInitialized"
                                });
                            })) ];

                          case 4:
                            return o.sent(), function() {
                                v(this, void 0, void 0, (function() {
                                    var t;
                                    return h(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return t = g, [ 4, new s.default((function(t) {
                                                chrome.runtime.onMessage.addListener((function n(e, r, o) {
                                                    "getInitialStateResult" === e.message && (chrome.runtime.onMessage.removeListener(n), 
                                                    O(e.isActiveTab), t(e.state));
                                                })), chrome.runtime.sendMessage({
                                                    message: "getInitialState"
                                                });
                                            })) ];

                                          case 1:
                                            return t.apply(void 0, [ n.sent() ]), [ 2 ];
                                        }
                                    }));
                                }));
                            }(), e = _, [ 4, new s.default((function(t) {
                                chrome.runtime.sendMessage({
                                    message: "getInitialPreferences"
                                }, (function(n) {
                                    return t(n);
                                }));
                            })) ];

                          case 5:
                            return e.apply(void 0, [ o.sent() ]), st(), function() {
                                var t = setInterval((function() {
                                    try {
                                        chrome.runtime.sendMessage({
                                            message: "periodicCheckForUpgrade"
                                        }, (function(t) {
                                            O(!!t.checkOverrides);
                                        }));
                                    } catch (n) {
                                        n && !/extension context invalidated/i.test(n.message) || (clearInterval(t), k = !0, 
                                        W((function() {
                                            ut() || A.forEach((function(t) {
                                                return t();
                                            })), M.forEach((function(t) {
                                                return t();
                                            })), I();
                                        }), [ 1, 250, 500 ]));
                                    }
                                }), 2e3);
                            }(), s.default.all([ at(), new s.default((function(t) {
                                chrome.storage.local.get([ "_switch_remoteExclusions", "_switch_remoteOverrides" ], (function(n) {
                                    var e = n._switch_remoteExclusions, o = n._switch_remoteOverrides;
                                    return e && "object" === (void 0 === e ? "undefined" : (0, r.default)(e)) || (e = {}), 
                                    o && "object" === (void 0 === o ? "undefined" : (0, r.default)(o)) || (o = {}), 
                                    t({
                                        exclusions: e,
                                        overrides: o
                                    });
                                }));
                            })), new s.default((function(t, n) {
                                if (d) return t();
                                var e = 0, r = setInterval((function() {
                                    return e > 5e3 ? (clearInterval(r), n({
                                        err: "<head> did not load."
                                    })) : (++e, document.head ? (clearInterval(r), o = $(document.head), d = o, t()) : void 0);
                                    var o;
                                }), 1);
                            })) ]).then((function(t) {
                                var n = t[0], e = t[1];
                                !function(t, n, e) {
                                    v(this, void 0, void 0, (function() {
                                        return h(this, (function(r) {
                                            return location.href.startsWith("chrome-extension") || (ht(), rn(t), an[t] && !n[t] && an[t](), 
                                            e[t] && function(t) {
                                                if (t) {
                                                    t = t.replace(/<\/?style>/gi, "");
                                                    var n = $("<style>" + t + "</style>"), e = function() {
                                                        return d.append(n);
                                                    };
                                                    st() && e(), C(e, (function() {
                                                        return n.remove();
                                                    }));
                                                }
                                            }(e[t])), [ 2 ];
                                        }));
                                    }));
                                }(n, e.exclusions, e.overrides);
                            })), s.default.all([ new s.default((function(t, n) {
                                if (l) return t();
                                var e = 0, r = setInterval((function() {
                                    return e > 5e3 ? (clearInterval(r), n({
                                        err: "<body> did not load."
                                    })) : (++e, document.body ? (clearInterval(r), m($(document.body)), t()) : void 0);
                                }), 1);
                            })) ]).then((function(e) {
                                e[0], n(), P((function() {
                                    p && p.length > 0 && p.remove(), y(null);
                                })), function(t, n) {
                                    void 0 === n && (n = R);
                                    var e = [];
                                    n.forEach((function(n) {
                                        var r = setTimeout((function() {
                                            t() && e.forEach(clearTimeout);
                                        }), n);
                                        e.push(r);
                                    }));
                                }((function() {
                                    t || (n(), t = !0);
                                }), [ 100, 200, 400, 800, 1600, 2500 ]);
                            })), function() {
                                v(this, void 0, void 0, (function() {
                                    var t, n;
                                    return h(this, (function(e) {
                                        switch (e.label) {
                                          case 0:
                                            return I(), t = V(location.href), (n = ot[t] && ot[t].handler) || (n = function(t) {
                                                if (t.startsWith("app.slack.com")) return rt;
                                            }(t)), n ? [ 4, new s.default((function(t) {
                                                chrome.storage.local.get([ "_switch_user" ], (function(n) {
                                                    return t(n._switch_user);
                                                }));
                                            })) ] : [ 2 ];

                                          case 1:
                                            return e.sent(), chrome.runtime.sendMessage({
                                                message: "getRemoteDomainData",
                                                domain: t
                                            }, (function(t) {
                                                return n(t);
                                            })), [ 2 ];
                                        }
                                    }));
                                }));
                            }(), new MutationObserver((function() {
                                l && p && 0 === l.parent().length && l.length > 0 && p.length > 0 && m($("body"));
                            })).observe(b.get(0), {
                                childList: !0
                            }), [ 2 ];
                        }
                        var u;
                    }));
                }));
            }();
        }();
    },
    703: function(t, n, e) {
        t.exports = {
            default: e(704),
            __esModule: !0
        };
    },
    704: function(t, n, e) {
        e(128), e(76), e(98), e(705), e(709), e(711), e(712), t.exports = e(15).Set;
    },
    705: function(t, n, e) {
        "use strict";
        var r = e(580), o = e(525);
        t.exports = e(581)("Set", (function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }), {
            add: function(t) {
                return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t);
            }
        }, r);
    },
    706: function(t, n, e) {
        var r = e(48), o = e(115), i = e(77), u = e(94), a = e(707);
        t.exports = function(t, n) {
            var e = 1 == t, c = 2 == t, s = 3 == t, f = 4 == t, l = 6 == t, d = 5 == t || l, p = n || a;
            return function(n, a, v) {
                for (var h, m, g = i(n), y = o(g), w = r(a, v, 3), b = u(y.length), x = 0, _ = e ? p(n, b) : c ? p(n, 0) : void 0; b > x; x++) if ((d || x in y) && (m = w(h = y[x], x, g), 
                t)) if (e) _[x] = m; else if (m) switch (t) {
                  case 3:
                    return !0;

                  case 5:
                    return h;

                  case 6:
                    return x;

                  case 2:
                    _.push(h);
                } else if (f) return !1;
                return l ? -1 : s || f ? f : _;
            };
        };
    },
    707: function(t, n, e) {
        var r = e(708);
        t.exports = function(t, n) {
            return new (r(t))(n);
        };
    },
    708: function(t, n, e) {
        var r = e(39), o = e(258), i = e(17)("species");
        t.exports = function(t) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0), 
            r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n;
        };
    },
    709: function(t, n, e) {
        var r = e(33);
        r(r.P + r.R, "Set", {
            toJSON: e(582)("Set")
        });
    },
    710: function(t, n, e) {
        var r = e(131);
        t.exports = function(t, n) {
            var e = [];
            return r(t, !1, e.push, e, n), e;
        };
    },
    711: function(t, n, e) {
        e(583)("Set");
    },
    712: function(t, n, e) {
        e(584)("Set");
    },
    713: function(t, n, e) {
        t.exports = {
            default: e(714),
            __esModule: !0
        };
    },
    714: function(t, n, e) {
        e(128), e(76), e(98), e(715), e(716), e(717), e(718), t.exports = e(15).Map;
    },
    715: function(t, n, e) {
        "use strict";
        var r = e(580), o = e(525);
        t.exports = e(581)("Map", (function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }), {
            get: function(t) {
                var n = r.getEntry(o(this, "Map"), t);
                return n && n.v;
            },
            set: function(t, n) {
                return r.def(o(this, "Map"), 0 === t ? 0 : t, n);
            }
        }, r, !0);
    },
    716: function(t, n, e) {
        var r = e(33);
        r(r.P + r.R, "Map", {
            toJSON: e(582)("Map")
        });
    },
    717: function(t, n, e) {
        e(583)("Map");
    },
    718: function(t, n, e) {
        e(584)("Map");
    },
    719: function(t, n, e) {
        t.exports = {
            default: e(720),
            __esModule: !0
        };
    },
    72: function(t, n, e) {
        var r = e(139), o = e(97);
        t.exports = Object.keys || function(t) {
            return r(t, o);
        };
    },
    720: function(t, n, e) {
        e(721);
        var r = e(15).Object;
        t.exports = function(t, n) {
            return r.create(t, n);
        };
    },
    721: function(t, n, e) {
        var r = e(33);
        r(r.S, "Object", {
            create: e(129)
        });
    },
    76: function(t, n, e) {
        "use strict";
        var r = e(175)(!0);
        e(112)(String, "String", (function(t) {
            this._t = String(t), this._i = 0;
        }), (function() {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            });
        }));
    },
    77: function(t, n, e) {
        var r = e(83);
        t.exports = function(t) {
            return Object(r(t));
        };
    },
    81: function(t, n, e) {
        var r = e(39), o = e(12).document, i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {};
        };
    },
    82: function(t, n) {
        var e = Math.ceil, r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t);
        };
    },
    83: function(t, n) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    84: function(t, n, e) {
        var r = e(96)("keys"), o = e(85);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t));
        };
    },
    85: function(t, n) {
        var e = 0, r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
        };
    },
    86: function(t, n, e) {
        "use strict";
        var r = e(62);
        function o(t) {
            var n, e;
            this.promise = new t((function(t, r) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = r;
            })), this.resolve = r(n), this.reject = r(e);
        }
        t.exports.f = function(t) {
            return new o(t);
        };
    },
    94: function(t, n, e) {
        var r = e(82), o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    95: function(t, n, e) {
        t.exports = {
            default: e(174),
            __esModule: !0
        };
    },
    96: function(t, n, e) {
        var r = e(15), o = e(12), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, n) {
            return i[t] || (i[t] = void 0 !== n ? n : {});
        })("versions", []).push({
            version: r.version,
            mode: e(65) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    97: function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    98: function(t, n, e) {
        e(181);
        for (var r = e(12), o = e(40), i = e(50), u = e(17)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
            var s = a[c], f = r[s], l = f && f.prototype;
            l && !l[u] && o(l, u, s), i[s] = i.Array;
        }
    },
    99: function(t, n, e) {
        var r = e(58), o = e(17)("toStringTag"), i = "Arguments" == r(function() {
            return arguments;
        }());
        t.exports = function(t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, n) {
                try {
                    return t[n];
                } catch (t) {}
            }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u;
        };
    }
});