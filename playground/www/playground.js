! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 22)
}([function (e, t) {
    function n(e, t) {
        var n = e[1] || "",
            o = e[3];
        if (!o) return n;
        if (t && "function" == typeof btoa) {
            var i = r(o);
            return [n].concat(o.sources.map(function (e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */"
            })).concat([i]).join("\n")
        }
        return [n].join("\n")
    }

    function r(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r
            }).join("")
        }, t.i = function (e, n) {
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
}, function (e, t, n) {
    function r(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t],
                r = l[n.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) r.parts.push(i(n.parts[o]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                for (var a = [], o = 0; o < n.parts.length; o++) a.push(i(n.parts[o]));
                l[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function o() {
        var e = document.createElement("style");
        return e.type = "text/css", f.appendChild(e), e
    }

    function i(e) {
        var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
        if (r) {
            if (v) return h;
            r.parentNode.removeChild(r)
        }
        if (m) {
            var i = p++;
            r = d || (d = o()), t = a.bind(null, r, i, !1), n = a.bind(null, r, i, !0)
        } else r = o(), t = s.bind(null, r), n = function () {
            r.parentNode.removeChild(r)
        };
        return t(e),
            function (r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                    t(e = r)
                } else n()
            }
    }

    function a(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }

    function s(e, t) {
        var n = t.css,
            r = t.media,
            o = t.sourceMap;
        if (r && e.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var u = n(31),
        l = {},
        f = c && (document.head || document.getElementsByTagName("head")[0]),
        d = null,
        p = 0,
        v = !1,
        h = function () { },
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function (e, t, n) {
        v = n;
        var o = u(e, t);
        return r(o),
            function (t) {
                for (var n = [], i = 0; i < o.length; i++) {
                    var a = o[i],
                        s = l[a.id];
                    s.refs--, n.push(s)
                }
                t ? (o = u(e, t), r(o)) : o = [];
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete l[s.id]
                    }
                }
            }
    };
    var y = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function (e, t) {
    e.exports = function (e, t, n, r, o, i) {
        var a, s = e = e || {},
            c = typeof e.default;
        "object" !== c && "function" !== c || (a = e, s = e.default);
        var u = "function" == typeof s ? s.options : s;
        t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), n && (u.functional = !0), o && (u._scopeId = o);
        var l;
        if (i ? (l = function (e) {
            e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
        }, u._ssrRegister = l) : r && (l = r), l) {
            var f = u.functional,
                d = f ? u.render : u.beforeCreate;
            f ? (u._injectStyles = l, u.render = function (e, t) {
                return l.call(t), d(e, t)
            }) : u.beforeCreate = d ? [].concat(d, l) : [l]
        }
        return {
            esModule: a,
            exports: s,
            options: u
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
        return r
    }), n.d(t, "i", function () {
        return o
    }), n.d(t, "g", function () {
        return i
    }), n.d(t, "b", function () {
        return a
    }), n.d(t, "h", function () {
        return s
    }), n.d(t, "a", function () {
        return c
    }), n.d(t, "c", function () {
        return u
    }), n.d(t, "f", function () {
        return l
    }), n.d(t, "d", function () {
        return f
    });
    var r = "IMAGE_READER",
        o = "VIDEO_READER",
        i = {
            IMAGE_READER: r,
            VIDEO_READER: o
        },
        a = "CANVAS_RENDERER",
        s = {
            HTML_RENDERER: "HTML_RENDERER",
            CANVAS_RENDERER: a
        },
        c = "BRIGHTNESS_FILTER",
        u = "DESATURATE_FILTER",
        l = "INVERSE_FILTER",
        f = {
            BRIGHTNESS_FILTER: c,
            CONTRAST_FILTER: "CONTRAST_FILTER",
            DESATURATE_FILTER: u,
            INVERSE_FILTER: l
        }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o) {
        return r + (o - r) / (n - t) * (e - t)
    }

    function o(e, t, n) {
        var r = n * (e.width << 2) + (t << 2);
        return {
            r: e.data[r],
            g: e.data[r + 1],
            b: e.data[r + 2]
        }
    }

    function i(e) {
        return e > 255 ? 255 : e < 0 ? 0 : e
    }

    function a(e, t) {
        return Array.from(new Array(t - e + 1).keys()).map(function (t) {
            return t + e
        })
    }

    function s(e) {
        return e > 255 ? 255 : e < 0 ? 0 : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mapRange = r, t.getRGB = o, t.trunc = i, t.range = a, t.clampByte = s
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    (function (t) {
        function n(e, t, n) {
            function o(t) {
                var n = h,
                    r = m;
                return h = m = void 0, E = t, g = e.apply(r, n)
            }

            function i(e) {
                return E = e, b = setTimeout(l, t), S ? o(e) : g
            }

            function c(e) {
                var n = e - C,
                    r = e - E,
                    o = t - n;
                return A ? w(o, y - r) : o
            }

            function u(e) {
                var n = e - C,
                    r = e - E;
                return void 0 === C || n >= t || n < 0 || A && r >= y
            }

            function l() {
                var e = x();
                if (u(e)) return f(e);
                b = setTimeout(l, c(e))
            }

            function f(e) {
                return b = void 0, O && h ? o(e) : (h = m = void 0, g)
            }

            function d() {
                void 0 !== b && clearTimeout(b), E = 0, h = C = m = b = void 0
            }

            function p() {
                return void 0 === b ? g : f(x())
            }

            function v() {
                var e = x(),
                    n = u(e);
                if (h = arguments, m = this, C = e, n) {
                    if (void 0 === b) return i(C);
                    if (A) return b = setTimeout(l, t), o(C)
                }
                return void 0 === b && (b = setTimeout(l, t)), g
            }
            var h, m, y, g, b, C, E = 0,
                S = !1,
                A = !1,
                O = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = a(t) || 0, r(n) && (S = !!n.leading, A = "maxWait" in n, y = A ? _(a(n.maxWait) || 0, t) : y, O = "trailing" in n ? !!n.trailing : O), v.cancel = d, v.flush = p, v
        }

        function r(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function o(e) {
            return !!e && "object" == typeof e
        }

        function i(e) {
            return "symbol" == typeof e || o(e) && b.call(e) == u
        }

        function a(e) {
            if ("number" == typeof e) return e;
            if (i(e)) return c;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(l, "");
            var n = d.test(e);
            return n || p.test(e) ? v(e.slice(2), n ? 2 : 8) : f.test(e) ? c : +e
        }
        var s = "Expected a function",
            c = NaN,
            u = "[object Symbol]",
            l = /^\s+|\s+$/g,
            f = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            p = /^0o[0-7]+$/i,
            v = parseInt,
            h = "object" == typeof t && t && t.Object === Object && t,
            m = "object" == typeof self && self && self.Object === Object && self,
            y = h || m || Function("return this")(),
            g = Object.prototype,
            b = g.toString,
            _ = Math.max,
            w = Math.min,
            x = function () {
                return y.Date.now()
            };
        e.exports = n
    }).call(t, n(5))
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n.n(r);
    t.a = {
        props: ["value"],
        data: function () {
            return {
                model: {}
            }
        },
        methods: {
            serialize: function () {
                return Array.isArray(this.model) ? this.model.slice() : Object.assign({}, this.model)
            }
        },
        watch: {
            model: {
                handler: o()(function () {
                    this.$emit("input", this.serialize())
                }, 300),
                deep: !0
            }
        },
        created: function () {
            Array.isArray(this.value) ? this.model = this.value.slice() : this.model = Object.assign({}, this.value)
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(37)
    }
    var o = n(39),
        i = n(40),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(41)
    }
    var o = n(43),
        i = n(44),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        return e._cache = [],
            function (t) {
                return e._cache[t] || (e._cache[t] = e(t))
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SIMPLE_CHARSET = t.ASCII_CHARSET = void 0;
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        a = n(4),
        s = n(78),
        c = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s),
        u = function () {
            function e(t) {
                r(this, e), this.options = Object.assign({}, {
                    charset: l,
                    fontFamily: "Sora&display=swap"//"monospace"
                }, t), this.fontmap = e.buildFont(this.options.charset, {
                    fontFamily: this.options.fontFamily
                }), this.matchChar = o(this.matchChar.bind(this))
            }
            return i(e, [{
                key: "render",
                value: function (e) {
                    return this.processImage(e)
                }
            }, {
                key: "processImage",
                value: function (e) {
                    for (var t = e.data.length, n = void 0; t--;) n = e.data[t], n.char = this.matchChar(n.mono);
                    return e
                }
            }, {
                key: "matchChar",
                value: function (e) {
                    for (var t = {
                        brightness: -1
                    }, n = 0; n < this.fontmap.length; n++) {
                        var r = this.fontmap[n];
                        if (!(Math.abs(e - r.brightness) <= Math.abs(e - t.brightness))) return t.char;
                        t = r
                    }
                    return t.char
                }
            }], [{
                key: "buildFont",
                value: function (e, t) {
                    return (0, c.default)(e, t)
                }
            }]), e
        }();
    t.default = u;
    var l = t.ASCII_CHARSET = (0, a.range)(32, 126).map(function (e) {
        return String.fromCharCode(e)
    });
    t.SIMPLE_CHARSET = [".", ":", "*", "I", "$", "V", "F", "N", "M"]
}, function (e, t, n) {
    "use strict";
    var r = n(12),
        o = n(65),
        i = n(71),
        a = function () {
            function e(e) {
                this._isScalar = !1, e && (this._subscribe = e)
            }
            return e.prototype.lift = function (t) {
                var n = new e;
                return n.source = this, n.operator = t, n
            }, e.prototype.subscribe = function (e, t, n) {
                var r = this.operator,
                    i = o.toSubscriber(e, t, n);
                if (r ? r.call(i, this.source) : i.add(this.source ? this._subscribe(i) : this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                return i
            }, e.prototype._trySubscribe = function (e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    e.syncErrorThrown = !0, e.syncErrorValue = t, e.error(t)
                }
            }, e.prototype.forEach = function (e, t) {
                var n = this;
                if (t || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? t = r.root.Rx.config.Promise : r.root.Promise && (t = r.root.Promise)), !t) throw new Error("no Promise impl found");
                return new t(function (t, r) {
                    var o;
                    o = n.subscribe(function (t) {
                        if (o) try {
                            e(t)
                        } catch (e) {
                            r(e), o.unsubscribe()
                        } else e(t)
                    }, r, t)
                })
            }, e.prototype._subscribe = function (e) {
                return this.source.subscribe(e)
            }, e.prototype[i.observable] = function () {
                return this
            }, e.create = function (t) {
                return new e(t)
            }, e
        }();
    t.Observable = a
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n = "undefined" != typeof window && window,
            r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            o = void 0 !== e && e,
            i = n || o || r;
        t.root = i,
            function () {
                if (!i) throw new Error("RxJS could not find any global context (window, self, global)")
            }()
    }).call(t, n(5))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
        o = n(16),
        i = n(66),
        a = n(18),
        s = n(19),
        c = function (e) {
            function t(n, r, o) {
                switch (e.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                    case 0:
                        this.destination = a.empty;
                        break;
                    case 1:
                        if (!n) {
                            this.destination = a.empty;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof t ? (this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, n));
                            break
                        }
                    default:
                        this.syncErrorThrowable = !0, this.destination = new u(this, n, r, o)
                }
            }
            return r(t, e), t.prototype[s.rxSubscriber] = function () {
                return this
            }, t.create = function (e, n, r) {
                var o = new t(e, n, r);
                return o.syncErrorThrowable = !1, o
            }, t.prototype.next = function (e) {
                this.isStopped || this._next(e)
            }, t.prototype.error = function (e) {
                this.isStopped || (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function () {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
            }, t.prototype._next = function (e) {
                this.destination.next(e)
            }, t.prototype._error = function (e) {
                this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe()
            }, t.prototype._unsubscribeAndRecycle = function () {
                var e = this,
                    t = e._parent,
                    n = e._parents;
                return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = n, this
            }, t
        }(i.Subscription);
    t.Subscriber = c;
    var u = function (e) {
        function t(t, n, r, i) {
            e.call(this), this._parentSubscriber = t;
            var s, c = this;
            o.isFunction(n) ? s = n : n && (s = n.next, r = n.error, i = n.complete, n !== a.empty && (c = Object.create(n), o.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)), c.unsubscribe = this.unsubscribe.bind(this))), this._context = c, this._next = s, this._error = r, this._complete = i
        }
        return r(t, e), t.prototype.next = function (e) {
            if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
            }
        }, t.prototype.error = function (e) {
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._error) t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else {
                    if (!t.syncErrorThrowable) throw this.unsubscribe(), e;
                    t.syncErrorValue = e, t.syncErrorThrown = !0, this.unsubscribe()
                }
            }
        }, t.prototype.complete = function () {
            var e = this;
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                    var n = function () {
                        return e._complete.call(e._context)
                    };
                    t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                } else this.unsubscribe()
            }
        }, t.prototype.__tryOrUnsub = function (e, t) {
            try {
                e.call(this._context, t)
            } catch (e) {
                throw this.unsubscribe(), e
            }
        }, t.prototype.__tryOrSetError = function (e, t, n) {
            try {
                t.call(this._context, n)
            } catch (t) {
                return e.syncErrorValue = t, e.syncErrorThrown = !0, !0
            }
            return !1
        }, t.prototype._unsubscribe = function () {
            var e = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, e.unsubscribe()
        }, t
    }(c)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        i = n(20),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i),
        s = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.width,
                    o = t.height,
                    i = t.colorProcessor,
                    a = t.data,
                    s = void 0 === a ? [] : a,
                    c = t.meta,
                    u = void 0 === c ? {} : c;
                r(this, e), this.width = n, this.height = o, this.data = s, this.meta = u, this.colorProcessor = i
            }
            return o(e, [{
                key: "getAt",
                value: function (e, t) {
                    return this.data[e + this.width * t]
                }
            }, {
                key: "process",
                value: function (e) {
                    var t = this;
                    return this.data.forEach(function (n) {
                        e(n, t.colorProcessor)
                    }), this
                }
            }, {
                key: "toImageData",
                value: function () {
                    for (var e = [], t = void 0, n = 0; n < this.data.length; n++) t = this.data[n], e[e.length] = t.r, e[e.length] = t.g, e[e.length] = t.b, e[e.length] = 255;
                    return new ImageData(new Uint8ClampedArray(e), this.width, this.height)
                }
            }], [{
                key: "fromImageData",
                value: function (t) {
                    for (var n = new Uint32Array(t.data.buffer), r = n.length, o = new Array(r), i = r, s = void 0; i--;) s = n[i], o[i] = {
                        r: 255 & s,
                        g: s >> 8 & 255,
                        b: s >> 16 & 255
                    };
                    return new e({
                        data: o,
                        width: t.width,
                        height: t.height,
                        colorProcessor: a.default
                    })
                }
            }, {
                key: "fromHTMLImageElement",
                value: function (t) {
                    var n = document.createElement("canvas"),
                        r = n.getContext("2d"),
                        o = t.naturalWidth,
                        i = t.naturalHeight;
                    return n.width = o, n.height = i, r.drawImage(t, 0, 0), e.fromImageData(r.getImageData(0, 0, o, i))
                }
            }]), e
        }();
    t.default = s
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        i = n(11);
    n(72), n(74);
    var a = function () {
        function e() {
            r(this, e)
        }
        return o(e, [{
            key: "read",
            value: function () {
                var e = this;
                return i.Observable.create(function (t) {
                    return e.onRead(t), e.onDispose.bind(e)
                })
            }
        }, {
            key: "onRead",
            value: function () { }
        }, {
            key: "onDispose",
            value: function () { }
        }]), e
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return "function" == typeof e
    }
    t.isFunction = r
}, function (e, t, n) {
    "use strict";
    t.errorObject = {
        e: {}
    }
}, function (e, t, n) {
    "use strict";
    t.empty = {
        closed: !0,
        next: function (e) { },
        error: function (e) {
            throw e
        },
        complete: function () { }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(12),
        o = r.root.Symbol;
    t.rxSubscriber = "function" == typeof o && "function" == typeof o.for ? o.for("rxSubscriber") : "@@rxSubscriber", t.$$rxSubscriber = t.rxSubscriber
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4);
    t.default = {
        mul: function (e, t) {
            return e.r = ~~(e.r * t), e.g = ~~(e.g * t), e.b = ~~(e.b * t), this
        },
        add: function (e, t) {
            return e.r += t, e.g += t, e.b += t, this
        },
        addc: function (e, t) {
            var n = t.r,
                r = t.g,
                o = t.b;
            return e.r += n, e.g += r, e.b += o, this
        },
        div: function (e, t) {
            return this.mul(e, 1 / t)
        },
        inverse: function (e) {
            return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this
        },
        getGrayscale: function (e) {
            return ~~((e.r + e.g + e.b) / 3)
        },
        desaturate: function (e) {
            return e.r = e.g = e.b = this.getGrayscale(e), this
        },
        clamp: function (e) {
            return e.r = (0, r.clampByte)(e.r), e.g = (0, r.clampByte)(e.g), e.b = (0, r.clampByte)(e.b), this
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return function (n) {
            return o(n, e, t)
        }
    }

    function o(e, t, n) {
        return e.process(function (e, r) {
            r.mul(e, t).add(e, n).clamp(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, t.linearTransformation = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(23);
    Object(r.a)("#app")
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return Array.isArray(e) ? e : Array.from(e)
    }

    function o(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function s(e) {
        var t = Object.values(L.a),
            n = t[Math.floor(Math.random() * t.length)];
        new h.a({
            el: e,
            render: function (e) {
                return e(m.a, {
                    props: {
                        initialData: n()
                    },
                    on: {
                        updated: c()
                    }
                })
            }
        })
    }

    function c() {
        var e = p(".screen"),
            t = void 0;
        return function (n) {
            t && t.unsubscribe();
            var r = d(n.renderer, e),
                o = f(n.reader),
                i = u(n.preFilters),
                a = u(n.postFilters);
            t = o().map(i()).map(A()(n.aa)).map(a()).map(r()).subscribe()
        }
    }

    function u(e) {
        return function () {
            return v.apply(void 0, a(Object.entries(e).map(l)))
        }
    }

    function l(e) {
        var t, n = N(e, 2),
            r = n[0],
            o = n[1],
            a = o.enabled,
            s = o.value,
            c = function (e) {
                return e
            },
            u = function (e) {
                return a ? e() : c
            };
        return (t = {}, i(t, M.d.INVERSE_FILTER, u($.a)), i(t, M.d.DESATURATE_FILTER, u(k.a)), i(t, M.d.BRIGHTNESS_FILTER, u(function () {
            return P()(s)
        })), i(t, M.d.CONTRAST_FILTER, u(function () {
            return I()(s)
        })), t)[r]
    }

    function f(e) {
        var t, n = e.type,
            r = e.url;
        return (t = {}, i(t, M.g.IMAGE_READER, function () {
            return g.a.fromURL(r)
        }), i(t, M.g.VIDEO_READER, function () {
            return _.a.fromVideoElement(document.querySelector(".preview-video"), {
                autoplay: !0
            })
        }), t)[n]
    }

    function d(e, t) {
        var n, r = e.type,
            a = o(e, ["type"]),
            s = t(r);
        return (n = {}, i(n, M.h.HTML_RENDERER, function () {
            return x()(F({}, a, {
                el: s
            }))
        }), i(n, M.h.CANVAS_RENDERER, function () {
            return E()(F({}, a, {
                el: s
            }))
        }), n)[r]
    }

    function p(e) {
        var t, n = function (e, t) {
            var n = document.createElement(t);
            return e.appendChild(n), n
        },
            r = (t = {}, i(t, M.h.CANVAS_RENDERER, "canvas"), i(t, M.h.HTML_RENDERER, "pre"), t);
        return function (t) {
            var o = document.querySelector(e);
            return o.innerHTML = "", n(o, r[t])
        }
    }

    function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var o = t.reverse(),
            i = r(o),
            a = i[0],
            s = i.slice(1);
        return function () {
            return s.reduce(function (e, t) {
                return t(e)
            }, a.apply(void 0, arguments))
        }
    }
    t.a = s;
    var h = n(24),
        m = n(28),
        y = n(64),
        g = n.n(y),
        b = n(76),
        _ = n.n(b),
        w = n(77),
        x = n.n(w),
        C = n(79),
        E = n.n(C),
        S = n(80),
        A = n.n(S),
        O = n(82),
        $ = n.n(O),
        T = n(83),
        k = n.n(T),
        R = n(84),
        I = n.n(R),
        j = n(85),
        P = n.n(j),
        M = n(3),
        L = n(86),
        F = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        N = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
}, function (e, t, n) {
    "use strict";
    (function (e, n) {
        function r(e) {
            return void 0 === e || null === e
        }

        function o(e) {
            return void 0 !== e && null !== e
        }

        function i(e) {
            return !0 === e
        }

        function a(e) {
            return !1 === e
        }

        function s(e) {
            return "string" == typeof e || "number" == typeof e || "boolean" == typeof e
        }

        function c(e) {
            return null !== e && "object" == typeof e
        }

        function u(e) {
            return "[object Object]" === ni.call(e)
        }

        function l(e) {
            return "[object RegExp]" === ni.call(e)
        }

        function f(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }

        function d(e) {
            return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }

        function p(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }

        function v(e, t) {
            for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
            return t ? function (e) {
                return n[e.toLowerCase()]
            } : function (e) {
                return n[e]
            }
        }

        function h(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }

        function m(e, t) {
            return ii.call(e, t)
        }

        function y(e) {
            var t = Object.create(null);
            return function (n) {
                return t[n] || (t[n] = e(n))
            }
        }

        function g(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length, n
        }

        function b(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
            return r
        }

        function _(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function w(e) {
            for (var t = {}, n = 0; n < e.length; n++) e[n] && _(t, e[n]);
            return t
        }

        function x(e, t, n) { }

        function C(e, t) {
            if (e === t) return !0;
            var n = c(e),
                r = c(t);
            if (!n || !r) return !n && !r && String(e) === String(t);
            try {
                var o = Array.isArray(e),
                    i = Array.isArray(t);
                if (o && i) return e.length === t.length && e.every(function (e, n) {
                    return C(e, t[n])
                });
                if (o || i) return !1;
                var a = Object.keys(e),
                    s = Object.keys(t);
                return a.length === s.length && a.every(function (n) {
                    return C(e[n], t[n])
                })
            } catch (e) {
                return !1
            }
        }

        function E(e, t) {
            for (var n = 0; n < e.length; n++)
                if (C(e[n], t)) return n;
            return -1
        }

        function S(e) {
            var t = !1;
            return function () {
                t || (t = !0, e.apply(this, arguments))
            }
        }

        function A(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }

        function O(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }

        function $(e) {
            if (!yi.test(e)) {
                var t = e.split(".");
                return function (e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }

        function T(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }

        function k(e) {
            Ni.target && Di.push(Ni.target), Ni.target = e
        }

        function R() {
            Ni.target = Di.pop()
        }

        function I(e) {
            return new Hi(void 0, void 0, void 0, String(e))
        }

        function j(e, t) {
            var n = e.componentOptions,
                r = new Hi(e.tag, e.data, e.children, e.text, e.elm, e.context, n, e.asyncFactory);
            return r.ns = e.ns, r.isStatic = e.isStatic, r.key = e.key, r.isComment = e.isComment, r.isCloned = !0, t && (e.children && (r.children = P(e.children, !0)), n && n.children && (n.children = P(n.children, !0))), r
        }

        function P(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) r[o] = j(e[o], t);
            return r
        }

        function M(e, t, n) {
            e.__proto__ = t
        }

        function L(e, t, n) {
            for (var r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                O(e, i, t[i])
            }
        }

        function F(e, t) {
            if (c(e) && !(e instanceof Hi)) {
                var n;
                return m(e, "__ob__") && e.__ob__ instanceof Ji ? n = e.__ob__ : Gi.shouldConvert && !ji() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ji(e)), t && n && n.vmCount++, n
            }
        }

        function N(e, t, n, r, o) {
            var i = new Ni,
                a = Object.getOwnPropertyDescriptor(e, t);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get,
                    c = a && a.set,
                    u = !o && F(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                        var t = s ? s.call(e) : n;
                        return Ni.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && U(t))), t
                    },
                    set: function (t) {
                        var r = s ? s.call(e) : n;
                        t === r || t !== t && r !== r || (c ? c.call(e, t) : n = t, u = !o && F(t), i.notify())
                    }
                })
            }
        }

        function D(e, t, n) {
            if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
            if (t in e && !(t in Object.prototype)) return e[t] = n, n;
            var r = e.__ob__;
            return e._isVue || r && r.vmCount ? n : r ? (N(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
        }

        function H(e, t) {
            if (Array.isArray(e) && f(t)) return void e.splice(t, 1);
            var n = e.__ob__;
            e._isVue || n && n.vmCount || m(e, t) && (delete e[t], n && n.dep.notify())
        }

        function U(e) {
            for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && U(t)
        }

        function V(e, t) {
            if (!t) return e;
            for (var n, r, o, i = Object.keys(t), a = 0; a < i.length; a++) n = i[a], r = e[n], o = t[n], m(e, n) ? u(r) && u(o) && V(r, o) : D(e, n, o);
            return e
        }

        function B(e, t, n) {
            return n ? function () {
                var r = "function" == typeof t ? t.call(n) : t,
                    o = "function" == typeof e ? e.call(n) : e;
                return r ? V(r, o) : o
            } : t ? e ? function () {
                return V("function" == typeof t ? t.call(this) : t, "function" == typeof e ? e.call(this) : e)
            } : t : e
        }

        function z(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }

        function W(e, t, n, r) {
            var o = Object.create(e || null);
            return t ? _(o, t) : o
        }

        function G(e, t) {
            var n = e.props;
            if (n) {
                var r, o, i, a = {};
                if (Array.isArray(n))
                    for (r = n.length; r--;) "string" == typeof (o = n[r]) && (i = si(o), a[i] = {
                        type: null
                    });
                else if (u(n))
                    for (var s in n) o = n[s], i = si(s), a[i] = u(o) ? o : {
                        type: o
                    };
                e.props = a
            }
        }

        function J(e, t) {
            var n = e.inject,
                r = e.inject = {};
            if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r[n[o]] = {
                    from: n[o]
                };
            else if (u(n))
                for (var i in n) {
                    var a = n[i];
                    r[i] = u(a) ? _({
                        from: i
                    }, a) : {
                        from: a
                    }
                }
        }

        function K(e) {
            var t = e.directives;
            if (t)
                for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    })
                }
        }

        function q(e, t, n) {
            function r(r) {
                var o = Ki[r] || Zi;
                c[r] = o(e[r], t[r], n, r)
            }
            "function" == typeof t && (t = t.options), G(t, n), J(t, n), K(t);
            var o = t.extends;
            if (o && (e = q(e, o, n)), t.mixins)
                for (var i = 0, a = t.mixins.length; i < a; i++) e = q(e, t.mixins[i], n);
            var s, c = {};
            for (s in e) r(s);
            for (s in t) m(e, s) || r(s);
            return c
        }

        function X(e, t, n, r) {
            if ("string" == typeof n) {
                var o = e[t];
                if (m(o, n)) return o[n];
                var i = si(n);
                if (m(o, i)) return o[i];
                var a = ci(i);
                if (m(o, a)) return o[a];
                return o[n] || o[i] || o[a]
            }
        }

        function Z(e, t, n, r) {
            var o = t[e],
                i = !m(n, e),
                a = n[e];
            if (ee(Boolean, o.type) && (i && !m(o, "default") ? a = !1 : ee(String, o.type) || "" !== a && a !== li(e) || (a = !0)), void 0 === a) {
                a = Y(r, o, e);
                var s = Gi.shouldConvert;
                Gi.shouldConvert = !0, F(a), Gi.shouldConvert = s
            }
            return a
        }

        function Y(e, t, n) {
            if (m(t, "default")) {
                var r = t.default;
                return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Q(t.type) ? r.call(e) : r
            }
        }

        function Q(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }

        function ee(e, t) {
            if (!Array.isArray(t)) return Q(t) === Q(e);
            for (var n = 0, r = t.length; n < r; n++)
                if (Q(t[n]) === Q(e)) return !0;
            return !1
        }

        function te(e, t, n) {
            if (t)
                for (var r = t; r = r.$parent;) {
                    var o = r.$options.errorCaptured;
                    if (o)
                        for (var i = 0; i < o.length; i++) try {
                            var a = !1 === o[i].call(r, e, t, n);
                            if (a) return
                        } catch (e) {
                            ne(e, r, "errorCaptured hook")
                        }
                }
            ne(e, t, n)
        }

        function ne(e, t, n) {
            if (mi.errorHandler) try {
                return mi.errorHandler.call(null, e, t, n)
            } catch (e) {
                re(e, null, "config.errorHandler")
            }
            re(e, t, n)
        }

        function re(e, t, n) {
            if (!bi && !_i || "undefined" == typeof console) throw e;
            console.error(e)
        }

        function oe() {
            Qi = !1;
            var e = Yi.slice(0);
            Yi.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
        }

        function ie(e) {
            return e._withTask || (e._withTask = function () {
                ea = !0;
                var t = e.apply(null, arguments);
                return ea = !1, t
            })
        }

        function ae(e, t) {
            var n;
            if (Yi.push(function () {
                if (e) try {
                    e.call(t)
                } catch (e) {
                    te(e, t, "nextTick")
                } else n && n(t)
            }), Qi || (Qi = !0, ea ? Xi() : qi()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
                n = e
            })
        }

        function se(e) {
            ce(e, ia), ia.clear()
        }

        function ce(e, t) {
            var n, r, o = Array.isArray(e);
            if ((o || c(e)) && !Object.isFrozen(e)) {
                if (e.__ob__) {
                    var i = e.__ob__.dep.id;
                    if (t.has(i)) return;
                    t.add(i)
                }
                if (o)
                    for (n = e.length; n--;) ce(e[n], t);
                else
                    for (r = Object.keys(e), n = r.length; n--;) ce(e[r[n]], t)
            }
        }

        function ue(e) {
            function t() {
                var e = arguments,
                    n = t.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var r = n.slice(), o = 0; o < r.length; o++) r[o].apply(null, e)
            }
            return t.fns = e, t
        }

        function le(e, t, n, o, i) {
            var a, s, c, u;
            for (a in e) s = e[a], c = t[a], u = aa(a), r(s) || (r(c) ? (r(s.fns) && (s = e[a] = ue(s)), n(u.name, s, u.once, u.capture, u.passive)) : s !== c && (c.fns = s, e[a] = c));
            for (a in t) r(e[a]) && (u = aa(a), o(u.name, t[a], u.capture))
        }

        function fe(e, t, n) {
            function a() {
                n.apply(this, arguments), h(s.fns, a)
            }
            e instanceof Hi && (e = e.data.hook || (e.data.hook = {}));
            var s, c = e[t];
            r(c) ? s = ue([a]) : o(c.fns) && i(c.merged) ? (s = c, s.fns.push(a)) : s = ue([c, a]), s.merged = !0, e[t] = s
        }

        function de(e, t, n) {
            var i = t.options.props;
            if (!r(i)) {
                var a = {},
                    s = e.attrs,
                    c = e.props;
                if (o(s) || o(c))
                    for (var u in i) {
                        var l = li(u);
                        pe(a, c, u, l, !0) || pe(a, s, u, l, !1)
                    }
                return a
            }
        }

        function pe(e, t, n, r, i) {
            if (o(t)) {
                if (m(t, n)) return e[n] = t[n], i || delete t[n], !0;
                if (m(t, r)) return e[n] = t[r], i || delete t[r], !0
            }
            return !1
        }

        function ve(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e
        }

        function he(e) {
            return s(e) ? [I(e)] : Array.isArray(e) ? ye(e) : void 0
        }

        function me(e) {
            return o(e) && o(e.text) && a(e.isComment)
        }

        function ye(e, t) {
            var n, a, c, u, l = [];
            for (n = 0; n < e.length; n++) a = e[n], r(a) || "boolean" == typeof a || (c = l.length - 1, u = l[c], Array.isArray(a) ? a.length > 0 && (a = ye(a, (t || "") + "_" + n), me(a[0]) && me(u) && (l[c] = I(u.text + a[0].text), a.shift()), l.push.apply(l, a)) : s(a) ? me(u) ? l[c] = I(u.text + a) : "" !== a && l.push(I(a)) : me(a) && me(u) ? l[c] = I(u.text + a.text) : (i(e._isVList) && o(a.tag) && r(a.key) && o(t) && (a.key = "__vlist" + t + "_" + n + "__"), l.push(a)));
            return l
        }

        function ge(e, t) {
            return (e.__esModule || Mi && "Module" === e[Symbol.toStringTag]) && (e = e.default), c(e) ? t.extend(e) : e
        }

        function be(e, t, n, r, o) {
            var i = Vi();
            return i.asyncFactory = e, i.asyncMeta = {
                data: t,
                context: n,
                children: r,
                tag: o
            }, i
        }

        function _e(e, t, n) {
            if (i(e.error) && o(e.errorComp)) return e.errorComp;
            if (o(e.resolved)) return e.resolved;
            if (i(e.loading) && o(e.loadingComp)) return e.loadingComp;
            if (!o(e.contexts)) {
                var a = e.contexts = [n],
                    s = !0,
                    u = function () {
                        for (var e = 0, t = a.length; e < t; e++) a[e].$forceUpdate()
                    },
                    l = S(function (n) {
                        e.resolved = ge(n, t), s || u()
                    }),
                    f = S(function (t) {
                        o(e.errorComp) && (e.error = !0, u())
                    }),
                    d = e(l, f);
                return c(d) && ("function" == typeof d.then ? r(e.resolved) && d.then(l, f) : o(d.component) && "function" == typeof d.component.then && (d.component.then(l, f), o(d.error) && (e.errorComp = ge(d.error, t)), o(d.loading) && (e.loadingComp = ge(d.loading, t), 0 === d.delay ? e.loading = !0 : setTimeout(function () {
                    r(e.resolved) && r(e.error) && (e.loading = !0, u())
                }, d.delay || 200)), o(d.timeout) && setTimeout(function () {
                    r(e.resolved) && f(null)
                }, d.timeout))), s = !1, e.loading ? e.loadingComp : e.resolved
            }
            e.contexts.push(n)
        }

        function we(e) {
            return e.isComment && e.asyncFactory
        }

        function xe(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (o(n) && (o(n.componentOptions) || we(n))) return n
                }
        }

        function Ce(e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && Ae(e, t)
        }

        function Ee(e, t, n) {
            n ? oa.$once(e, t) : oa.$on(e, t)
        }

        function Se(e, t) {
            oa.$off(e, t)
        }

        function Ae(e, t, n) {
            oa = e, le(t, n || {}, Ee, Se, e), oa = void 0
        }

        function Oe(e, t) {
            var n = {};
            if (!e) return n;
            for (var r = 0, o = e.length; r < o; r++) {
                var i = e[r],
                    a = i.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.functionalContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(i);
                else {
                    var s = i.data.slot,
                        c = n[s] || (n[s] = []);
                    "template" === i.tag ? c.push.apply(c, i.children) : c.push(i)
                }
            }
            for (var u in n) n[u].every($e) && delete n[u];
            return n
        }

        function $e(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
        }

        function Te(e, t) {
            t = t || {};
            for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? Te(e[n], t) : t[e[n].key] = e[n].fn;
            return t
        }

        function ke(e) {
            var t = e.$options,
                n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
        }

        function Re(e, t, n) {
            e.$el = t, e.$options.render || (e.$options.render = Vi), Le(e, "beforeMount");
            var r;
            return r = function () {
                e._update(e._render(), n)
            }, e._watcher = new ha(e, r, x), n = !1, null == e.$vnode && (e._isMounted = !0, Le(e, "mounted")), e
        }

        function Ie(e, t, n, r, o) {
            var i = !!(o || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== ti);
            if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = o, e.$attrs = r.data && r.data.attrs || ti, e.$listeners = n || ti, t && e.$options.props) {
                Gi.shouldConvert = !1;
                for (var a = e._props, s = e.$options._propKeys || [], c = 0; c < s.length; c++) {
                    var u = s[c];
                    a[u] = Z(u, e.$options.props, t, e)
                }
                Gi.shouldConvert = !0, e.$options.propsData = t
            }
            if (n) {
                var l = e.$options._parentListeners;
                e.$options._parentListeners = n, Ae(e, n, l)
            }
            i && (e.$slots = Oe(o, r.context), e.$forceUpdate())
        }

        function je(e) {
            for (; e && (e = e.$parent);)
                if (e._inactive) return !0;
            return !1
        }

        function Pe(e, t) {
            if (t) {
                if (e._directInactive = !1, je(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) Pe(e.$children[n]);
                Le(e, "activated")
            }
        }

        function Me(e, t) {
            if (!(t && (e._directInactive = !0, je(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++) Me(e.$children[n]);
                Le(e, "deactivated")
            }
        }

        function Le(e, t) {
            var n = e.$options[t];
            if (n)
                for (var r = 0, o = n.length; r < o; r++) try {
                    n[r].call(e)
                } catch (n) {
                    te(n, e, t + " hook")
                }
            e._hasHookEvent && e.$emit("hook:" + t)
        }

        function Fe() {
            pa = ca.length = ua.length = 0, la = {}, fa = da = !1
        }

        function Ne() {
            da = !0;
            var e, t;
            for (ca.sort(function (e, t) {
                return e.id - t.id
            }), pa = 0; pa < ca.length; pa++) e = ca[pa], t = e.id, la[t] = null, e.run();
            var n = ua.slice(),
                r = ca.slice();
            Fe(), Ue(n), De(r), Pi && mi.devtools && Pi.emit("flush")
        }

        function De(e) {
            for (var t = e.length; t--;) {
                var n = e[t],
                    r = n.vm;
                r._watcher === n && r._isMounted && Le(r, "updated")
            }
        }

        function He(e) {
            e._inactive = !1, ua.push(e)
        }

        function Ue(e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Pe(e[t], !0)
        }

        function Ve(e) {
            var t = e.id;
            if (null == la[t]) {
                if (la[t] = !0, da) {
                    for (var n = ca.length - 1; n > pa && ca[n].id > e.id;) n--;
                    ca.splice(n + 1, 0, e)
                } else ca.push(e);
                fa || (fa = !0, ae(Ne))
            }
        }

        function Be(e, t, n) {
            ma.get = function () {
                return this[t][n]
            }, ma.set = function (e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, ma)
        }

        function ze(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && We(e, t.props), t.methods && Ze(e, t.methods), t.data ? Ge(e) : F(e._data = {}, !0), t.computed && Ke(e, t.computed), t.watch && t.watch !== $i && Ye(e, t.watch)
        }

        function We(e, t) {
            var n = e.$options.propsData || {},
                r = e._props = {},
                o = e.$options._propKeys = [],
                i = !e.$parent;
            Gi.shouldConvert = i;
            for (var a in t) ! function (i) {
                o.push(i);
                var a = Z(i, t, n, e);
                N(r, i, a), i in e || Be(e, "_props", i)
            }(a);
            Gi.shouldConvert = !0
        }

        function Ge(e) {
            var t = e.$options.data;
            t = e._data = "function" == typeof t ? Je(t, e) : t || {}, u(t) || (t = {});
            for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--;) {
                var i = n[o];
                r && m(r, i) || A(i) || Be(e, "_data", i)
            }
            F(t, !0)
        }

        function Je(e, t) {
            try {
                return e.call(t, t)
            } catch (e) {
                return te(e, t, "data()"), {}
            }
        }

        function Ke(e, t) {
            var n = e._computedWatchers = Object.create(null),
                r = ji();
            for (var o in t) {
                var i = t[o],
                    a = "function" == typeof i ? i : i.get;
                r || (n[o] = new ha(e, a || x, x, ya)), o in e || qe(e, o, i)
            }
        }

        function qe(e, t, n) {
            var r = !ji();
            "function" == typeof n ? (ma.get = r ? Xe(t) : n, ma.set = x) : (ma.get = n.get ? r && !1 !== n.cache ? Xe(t) : n.get : x, ma.set = n.set ? n.set : x), Object.defineProperty(e, t, ma)
        }

        function Xe(e) {
            return function () {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), Ni.target && t.depend(), t.value
            }
        }

        function Ze(e, t) {
            e.$options.props;
            for (var n in t) e[n] = null == t[n] ? x : g(t[n], e)
        }

        function Ye(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o++) Qe(e, n, r[o]);
                else Qe(e, n, r)
            }
        }

        function Qe(e, t, n, r) {
            return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }

        function et(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }

        function tt(e) {
            var t = nt(e.$options.inject, e);
            t && (Gi.shouldConvert = !1, Object.keys(t).forEach(function (n) {
                N(e, n, t[n])
            }), Gi.shouldConvert = !0)
        }

        function nt(e, t) {
            if (e) {
                for (var n = Object.create(null), r = Mi ? Reflect.ownKeys(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }) : Object.keys(e), o = 0; o < r.length; o++) {
                    for (var i = r[o], a = e[i].from, s = t; s;) {
                        if (s._provided && a in s._provided) {
                            n[i] = s._provided[a];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default" in e[i]) {
                        var c = e[i].default;
                        n[i] = "function" == typeof c ? c.call(t) : c
                    }
                }
                return n
            }
        }

        function rt(e, t) {
            var n, r, i, a, s;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
            else if ("number" == typeof e)
                for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
            else if (c(e))
                for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) s = a[r], n[r] = t(e[s], s, r);
            return o(n) && (n._isVList = !0), n
        }

        function ot(e, t, n, r) {
            var o, i = this.$scopedSlots[e];
            if (i) n = n || {}, r && (n = _(_({}, r), n)), o = i(n) || t;
            else {
                var a = this.$slots[e];
                a && (a._rendered = !0), o = a || t
            }
            var s = n && n.slot;
            return s ? this.$createElement("template", {
                slot: s
            }, o) : o
        }

        function it(e) {
            return X(this.$options, "filters", e, !0) || di
        }

        function at(e, t, n, r) {
            var o = mi.keyCodes[t] || n;
            return o ? Array.isArray(o) ? -1 === o.indexOf(e) : o !== e : r ? li(r) !== t : void 0
        }

        function st(e, t, n, r, o) {
            if (n)
                if (c(n)) {
                    Array.isArray(n) && (n = w(n));
                    var i;
                    for (var a in n) ! function (a) {
                        if ("class" === a || "style" === a || oi(a)) i = e;
                        else {
                            var s = e.attrs && e.attrs.type;
                            i = r || mi.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        if (!(a in i) && (i[a] = n[a], o)) {
                            (e.on || (e.on = {}))["update:" + a] = function (e) {
                                n[a] = e
                            }
                        }
                    }(a)
                } else;
            return e
        }

        function ct(e, t, n) {
            var r = arguments.length < 3,
                o = this.$options.staticRenderFns,
                i = r || n ? this._staticTrees || (this._staticTrees = []) : o.cached || (o.cached = []),
                a = i[e];
            return a && !t ? Array.isArray(a) ? P(a) : j(a) : (a = i[e] = o[e].call(this._renderProxy, null, this), lt(a, "__static__" + e, !1), a)
        }

        function ut(e, t, n) {
            return lt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function lt(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && ft(e[r], t + "_" + r, n);
            else ft(e, t, n)
        }

        function ft(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function dt(e, t) {
            if (t)
                if (u(t)) {
                    var n = e.on = e.on ? _({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r],
                            i = t[r];
                        n[r] = o ? [].concat(o, i) : i
                    }
                } else;
            return e
        }

        function pt(e) {
            e._o = ut, e._n = p, e._s = d, e._l = rt, e._t = ot, e._q = C, e._i = E, e._m = ct, e._f = it, e._k = at, e._b = st, e._v = I, e._e = Vi, e._u = Te, e._g = dt
        }

        function vt(e, t, n, r, o) {
            var a = o.options;
            this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || ti, this.injections = nt(a.inject, r), this.slots = function () {
                return Oe(n, r)
            };
            var s = Object.create(r),
                c = i(a._compiled),
                u = !c;
            c && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || ti), a._scopeId ? this._c = function (e, t, n, o) {
                var i = xt(s, e, t, n, o, u);
                return i && (i.functionalScopeId = a._scopeId, i.functionalContext = r), i
            } : this._c = function (e, t, n, r) {
                return xt(s, e, t, n, r, u)
            }
        }

        function ht(e, t, n, r, i) {
            var a = e.options,
                s = {},
                c = a.props;
            if (o(c))
                for (var u in c) s[u] = Z(u, c, t || ti);
            else o(n.attrs) && mt(s, n.attrs), o(n.props) && mt(s, n.props);
            var l = new vt(n, s, i, r, e),
                f = a.render.call(null, l._c, l);
            return f instanceof Hi && (f.functionalContext = r, f.functionalOptions = a, n.slot && ((f.data || (f.data = {})).slot = n.slot)), f
        }

        function mt(e, t) {
            for (var n in t) e[si(n)] = t[n]
        }

        function yt(e, t, n, a, s) {
            if (!r(e)) {
                var u = n.$options._base;
                if (c(e) && (e = u.extend(e)), "function" == typeof e) {
                    var l;
                    if (r(e.cid) && (l = e, void 0 === (e = _e(l, u, n)))) return be(l, t, n, a, s);
                    t = t || {}, Ot(e), o(t.model) && wt(e.options, t);
                    var f = de(t, e, s);
                    if (i(e.options.functional)) return ht(e, f, t, n, a);
                    var d = t.on;
                    if (t.on = t.nativeOn, i(e.options.abstract)) {
                        var p = t.slot;
                        t = {}, p && (t.slot = p)
                    }
                    bt(t);
                    var v = e.options.name || s;
                    return new Hi("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, n, {
                        Ctor: e,
                        propsData: f,
                        listeners: d,
                        tag: s,
                        children: a
                    }, l)
                }
            }
        }

        function gt(e, t, n, r) {
            var i = e.componentOptions,
                a = {
                    _isComponent: !0,
                    parent: t,
                    propsData: i.propsData,
                    _componentTag: i.tag,
                    _parentVnode: e,
                    _parentListeners: i.listeners,
                    _renderChildren: i.children,
                    _parentElm: n || null,
                    _refElm: r || null
                },
                s = e.data.inlineTemplate;
            return o(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new i.Ctor(a)
        }

        function bt(e) {
            e.hook || (e.hook = {});
            for (var t = 0; t < ba.length; t++) {
                var n = ba[t],
                    r = e.hook[n],
                    o = ga[n];
                e.hook[n] = r ? _t(o, r) : o
            }
        }

        function _t(e, t) {
            return function (n, r, o, i) {
                e(n, r, o, i), t(n, r, o, i)
            }
        }

        function wt(e, t) {
            var n = e.model && e.model.prop || "value",
                r = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[n] = t.model.value;
            var i = t.on || (t.on = {});
            o(i[r]) ? i[r] = [t.model.callback].concat(i[r]) : i[r] = t.model.callback
        }

        function xt(e, t, n, r, o, a) {
            return (Array.isArray(n) || s(n)) && (o = r, r = n, n = void 0), i(a) && (o = wa), Ct(e, t, n, r, o)
        }

        function Ct(e, t, n, r, i) {
            if (o(n) && o(n.__ob__)) return Vi();
            if (o(n) && o(n.is) && (t = n.is), !t) return Vi();
            Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
                default: r[0]
            }, r.length = 0), i === wa ? r = he(r) : i === _a && (r = ve(r));
            var a, s;
            if ("string" == typeof t) {
                var c;
                s = e.$vnode && e.$vnode.ns || mi.getTagNamespace(t), a = mi.isReservedTag(t) ? new Hi(mi.parsePlatformTagName(t), n, r, void 0, void 0, e) : o(c = X(e.$options, "components", t)) ? yt(c, n, e, r, t) : new Hi(t, n, r, void 0, void 0, e)
            } else a = yt(t, n, e, r);
            return o(a) ? (s && Et(a, s), a) : Vi()
        }

        function Et(e, t, n) {
            if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), o(e.children))
                for (var a = 0, s = e.children.length; a < s; a++) {
                    var c = e.children[a];
                    o(c.tag) && (r(c.ns) || i(n)) && Et(c, t, n)
                }
        }

        function St(e) {
            e._vnode = null, e._staticTrees = null;
            var t = e.$options,
                n = e.$vnode = t._parentVnode,
                r = n && n.context;
            e.$slots = Oe(t._renderChildren, r), e.$scopedSlots = ti, e._c = function (t, n, r, o) {
                return xt(e, t, n, r, o, !1)
            }, e.$createElement = function (t, n, r, o) {
                return xt(e, t, n, r, o, !0)
            };
            var o = n && n.data;
            N(e, "$attrs", o && o.attrs || ti, null, !0), N(e, "$listeners", t._parentListeners || ti, null, !0)
        }

        function At(e, t) {
            var n = e.$options = Object.create(e.constructor.options);
            n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
        }

        function Ot(e) {
            var t = e.options;
            if (e.super) {
                var n = Ot(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = $t(e);
                    r && _(e.extendOptions, r), t = e.options = q(n, e.extendOptions), t.name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function $t(e) {
            var t, n = e.options,
                r = e.extendOptions,
                o = e.sealedOptions;
            for (var i in n) n[i] !== o[i] && (t || (t = {}), t[i] = Tt(n[i], r[i], o[i]));
            return t
        }

        function Tt(e, t, n) {
            if (Array.isArray(e)) {
                var r = [];
                n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];
                for (var o = 0; o < e.length; o++)(t.indexOf(e[o]) >= 0 || n.indexOf(e[o]) < 0) && r.push(e[o]);
                return r
            }
            return e
        }

        function kt(e) {
            this._init(e)
        }

        function Rt(e) {
            e.use = function (e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = b(arguments, 1);
                return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
            }
        }

        function It(e) {
            e.mixin = function (e) {
                return this.options = q(this.options, e), this
            }
        }

        function jt(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function (e) {
                e = e || {};
                var n = this,
                    r = n.cid,
                    o = e._Ctor || (e._Ctor = {});
                if (o[r]) return o[r];
                var i = e.name || n.options.name,
                    a = function (e) {
                        this._init(e)
                    };
                return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = q(n.options, e), a.super = n, a.options.props && Pt(a), a.options.computed && Mt(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, vi.forEach(function (e) {
                    a[e] = n[e]
                }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = _({}, a.options), o[r] = a, a
            }
        }

        function Pt(e) {
            var t = e.options.props;
            for (var n in t) Be(e.prototype, "_props", n)
        }

        function Mt(e) {
            var t = e.options.computed;
            for (var n in t) qe(e.prototype, n, t[n])
        }

        function Lt(e) {
            vi.forEach(function (t) {
                e[t] = function (e, n) {
                    return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                }
            })
        }

        function Ft(e) {
            return e && (e.Ctor.options.name || e.tag)
        }

        function Nt(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!l(e) && e.test(t)
        }

        function Dt(e, t) {
            var n = e.cache,
                r = e.keys,
                o = e._vnode;
            for (var i in n) {
                var a = n[i];
                if (a) {
                    var s = Ft(a.componentOptions);
                    s && !t(s) && Ht(n, i, r, o)
                }
            }
        }

        function Ht(e, t, n, r) {
            var o = e[t];
            o && o !== r && o.componentInstance.$destroy(), e[t] = null, h(n, t)
        }

        function Ut(e) {
            for (var t = e.data, n = e, r = e; o(r.componentInstance);) r = r.componentInstance._vnode, r.data && (t = Vt(r.data, t));
            for (; o(n = n.parent);) n.data && (t = Vt(t, n.data));
            return Bt(t.staticClass, t.class)
        }

        function Vt(e, t) {
            return {
                staticClass: zt(e.staticClass, t.staticClass),
                class: o(e.class) ? [e.class, t.class] : t.class
            }
        }

        function Bt(e, t) {
            return o(e) || o(t) ? zt(e, Wt(t)) : ""
        }

        function zt(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }

        function Wt(e) {
            return Array.isArray(e) ? Gt(e) : c(e) ? Jt(e) : "string" == typeof e ? e : ""
        }

        function Gt(e) {
            for (var t, n = "", r = 0, i = e.length; r < i; r++) o(t = Wt(e[r])) && "" !== t && (n && (n += " "), n += t);
            return n
        }

        function Jt(e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
        }

        function Kt(e) {
            return Ga(e) ? "svg" : "math" === e ? "math" : void 0
        }

        function qt(e) {
            if (!bi) return !0;
            if (Ka(e)) return !1;
            if (e = e.toLowerCase(), null != qa[e]) return qa[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? qa[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : qa[e] = /HTMLUnknownElement/.test(t.toString())
        }

        function Xt(e) {
            if ("string" == typeof e) {
                var t = document.querySelector(e);
                return t || document.createElement("div")
            }
            return e
        }

        function Zt(e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }

        function Yt(e, t) {
            return document.createElementNS(za[e], t)
        }

        function Qt(e) {
            return document.createTextNode(e)
        }

        function en(e) {
            return document.createComment(e)
        }

        function tn(e, t, n) {
            e.insertBefore(t, n)
        }

        function nn(e, t) {
            e.removeChild(t)
        }

        function rn(e, t) {
            e.appendChild(t)
        }

        function on(e) {
            return e.parentNode
        }

        function an(e) {
            return e.nextSibling
        }

        function sn(e) {
            return e.tagName
        }

        function cn(e, t) {
            e.textContent = t
        }

        function un(e, t, n) {
            e.setAttribute(t, n)
        }

        function ln(e, t) {
            var n = e.data.ref;
            if (n) {
                var r = e.context,
                    o = e.componentInstance || e.elm,
                    i = r.$refs;
                t ? Array.isArray(i[n]) ? h(i[n], o) : i[n] === o && (i[n] = void 0) : e.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [o] : i[n] = o
            }
        }

        function fn(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && o(e.data) === o(t.data) && dn(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error))
        }

        function dn(e, t) {
            if ("input" !== e.tag) return !0;
            var n, r = o(n = e.data) && o(n = n.attrs) && n.type,
                i = o(n = t.data) && o(n = n.attrs) && n.type;
            return r === i || Xa(r) && Xa(i)
        }

        function pn(e, t, n) {
            var r, i, a = {};
            for (r = t; r <= n; ++r) i = e[r].key, o(i) && (a[i] = r);
            return a
        }

        function vn(e, t) {
            (e.data.directives || t.data.directives) && hn(e, t)
        }

        function hn(e, t) {
            var n, r, o, i = e === Qa,
                a = t === Qa,
                s = mn(e.data.directives, e.context),
                c = mn(t.data.directives, t.context),
                u = [],
                l = [];
            for (n in c) r = s[n], o = c[n], r ? (o.oldValue = r.value, gn(o, "update", t, e), o.def && o.def.componentUpdated && l.push(o)) : (gn(o, "bind", t, e), o.def && o.def.inserted && u.push(o));
            if (u.length) {
                var f = function () {
                    for (var n = 0; n < u.length; n++) gn(u[n], "inserted", t, e)
                };
                i ? fe(t, "insert", f) : f()
            }
            if (l.length && fe(t, "postpatch", function () {
                for (var n = 0; n < l.length; n++) gn(l[n], "componentUpdated", t, e)
            }), !i)
                for (n in s) c[n] || gn(s[n], "unbind", e, e, a)
        }

        function mn(e, t) {
            var n = Object.create(null);
            if (!e) return n;
            var r, o;
            for (r = 0; r < e.length; r++) o = e[r], o.modifiers || (o.modifiers = ns), n[yn(o)] = o, o.def = X(t.$options, "directives", o.name, !0);
            return n
        }

        function yn(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }

        function gn(e, t, n, r, o) {
            var i = e.def && e.def[t];
            if (i) try {
                i(n.elm, e, n, r, o)
            } catch (r) {
                te(r, n.context, "directive " + e.name + " " + t + " hook")
            }
        }

        function bn(e, t) {
            var n = t.componentOptions;
            if (!(o(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
                var i, a, s = t.elm,
                    c = e.data.attrs || {},
                    u = t.data.attrs || {};
                o(u.__ob__) && (u = t.data.attrs = _({}, u));
                for (i in u) a = u[i], c[i] !== a && _n(s, i, a);
                (Ei || Si) && u.value !== c.value && _n(s, "value", u.value);
                for (i in c) r(u[i]) && (Ua(i) ? s.removeAttributeNS(Ha, Va(i)) : Na(i) || s.removeAttribute(i))
            }
        }

        function _n(e, t, n) {
            Da(t) ? Ba(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Na(t) ? e.setAttribute(t, Ba(n) || "false" === n ? "false" : "true") : Ua(t) ? Ba(n) ? e.removeAttributeNS(Ha, Va(t)) : e.setAttributeNS(Ha, t, n) : Ba(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function wn(e, t) {
            var n = t.elm,
                i = t.data,
                a = e.data;
            if (!(r(i.staticClass) && r(i.class) && (r(a) || r(a.staticClass) && r(a.class)))) {
                var s = Ut(t),
                    c = n._transitionClasses;
                o(c) && (s = zt(s, Wt(c))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
            }
        }

        function xn(e) {
            function t() {
                (a || (a = [])).push(e.slice(v, o).trim()), v = o + 1
            }
            var n, r, o, i, a, s = !1,
                c = !1,
                u = !1,
                l = !1,
                f = 0,
                d = 0,
                p = 0,
                v = 0;
            for (o = 0; o < e.length; o++)
                if (r = n, n = e.charCodeAt(o), s) 39 === n && 92 !== r && (s = !1);
                else if (c) 34 === n && 92 !== r && (c = !1);
                else if (u) 96 === n && 92 !== r && (u = !1);
                else if (l) 47 === n && 92 !== r && (l = !1);
                else if (124 !== n || 124 === e.charCodeAt(o + 1) || 124 === e.charCodeAt(o - 1) || f || d || p) {
                    switch (n) {
                        case 34:
                            c = !0;
                            break;
                        case 39:
                            s = !0;
                            break;
                        case 96:
                            u = !0;
                            break;
                        case 40:
                            p++;
                            break;
                        case 41:
                            p--;
                            break;
                        case 91:
                            d++;
                            break;
                        case 93:
                            d--;
                            break;
                        case 123:
                            f++;
                            break;
                        case 125:
                            f--
                    }
                    if (47 === n) {
                        for (var h = o - 1, m = void 0; h >= 0 && " " === (m = e.charAt(h)); h--);
                        m && as.test(m) || (l = !0)
                    }
                } else void 0 === i ? (v = o + 1, i = e.slice(0, o).trim()) : t();
            if (void 0 === i ? i = e.slice(0, o).trim() : 0 !== v && t(), a)
                for (o = 0; o < a.length; o++) i = Cn(i, a[o]);
            return i
        }

        function Cn(e, t) {
            var n = t.indexOf("(");
            return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1)
        }

        function En(e) {
            console.error("[Vue compiler]: " + e)
        }

        function Sn(e, t) {
            return e ? e.map(function (e) {
                return e[t]
            }).filter(function (e) {
                return e
            }) : []
        }

        function An(e, t, n) {
            (e.props || (e.props = [])).push({
                name: t,
                value: n
            })
        }

        function On(e, t, n) {
            (e.attrs || (e.attrs = [])).push({
                name: t,
                value: n
            })
        }

        function $n(e, t, n, r, o, i) {
            (e.directives || (e.directives = [])).push({
                name: t,
                rawName: n,
                value: r,
                arg: o,
                modifiers: i
            })
        }

        function Tn(e, t, n, r, o, i) {
            r = r || ti, r.capture && (delete r.capture, t = "!" + t), r.once && (delete r.once, t = "~" + t), r.passive && (delete r.passive, t = "&" + t), "click" === t && (r.right ? (t = "contextmenu", delete r.right) : r.middle && (t = "mouseup"));
            var a;
            r.native ? (delete r.native, a = e.nativeEvents || (e.nativeEvents = {})) : a = e.events || (e.events = {});
            var s = {
                value: n
            };
            r !== ti && (s.modifiers = r);
            var c = a[t];
            Array.isArray(c) ? o ? c.unshift(s) : c.push(s) : a[t] = c ? o ? [s, c] : [c, s] : s
        }

        function kn(e, t, n) {
            var r = Rn(e, ":" + t) || Rn(e, "v-bind:" + t);
            if (null != r) return xn(r);
            if (!1 !== n) {
                var o = Rn(e, t);
                if (null != o) return JSON.stringify(o)
            }
        }

        function Rn(e, t, n) {
            var r;
            if (null != (r = e.attrsMap[t]))
                for (var o = e.attrsList, i = 0, a = o.length; i < a; i++)
                    if (o[i].name === t) {
                        o.splice(i, 1);
                        break
                    } return n && delete e.attrsMap[t], r
        }

        function In(e, t, n) {
            var r = n || {},
                o = r.number,
                i = r.trim,
                a = "$$v";
            i && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (a = "_n(" + a + ")");
            var s = jn(t, a);
            e.model = {
                value: "(" + t + ")",
                expression: '"' + t + '"',
                callback: "function ($$v) {" + s + "}"
            }
        }

        function jn(e, t) {
            var n = Pn(e);
            return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
        }

        function Pn(e) {
            if (Aa = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < Aa - 1) return Ta = e.lastIndexOf("."), Ta > -1 ? {
                exp: e.slice(0, Ta),
                key: '"' + e.slice(Ta + 1) + '"'
            } : {
                exp: e,
                key: null
            };
            for (Oa = e, Ta = ka = Ra = 0; !Ln();) $a = Mn(), Fn($a) ? Dn($a) : 91 === $a && Nn($a);
            return {
                exp: e.slice(0, ka),
                key: e.slice(ka + 1, Ra)
            }
        }

        function Mn() {
            return Oa.charCodeAt(++Ta)
        }

        function Ln() {
            return Ta >= Aa
        }

        function Fn(e) {
            return 34 === e || 39 === e
        }

        function Nn(e) {
            var t = 1;
            for (ka = Ta; !Ln();)
                if (e = Mn(), Fn(e)) Dn(e);
                else if (91 === e && t++, 93 === e && t--, 0 === t) {
                    Ra = Ta;
                    break
                }
        }

        function Dn(e) {
            for (var t = e; !Ln() && (e = Mn()) !== t;);
        }

        function Hn(e, t, n) {
            Ia = n;
            var r = t.value,
                o = t.modifiers,
                i = e.tag,
                a = e.attrsMap.type;
            if (e.component) return In(e, r, o), !1;
            if ("select" === i) Bn(e, r, o);
            else if ("input" === i && "checkbox" === a) Un(e, r, o);
            else if ("input" === i && "radio" === a) Vn(e, r, o);
            else if ("input" === i || "textarea" === i) zn(e, r, o);
            else if (!mi.isReservedTag(i)) return In(e, r, o), !1;
            return !0
        }

        function Un(e, t, n) {
            var r = n && n.number,
                o = kn(e, "value") || "null",
                i = kn(e, "true-value") || "true",
                a = kn(e, "false-value") || "false";
            An(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")), Tn(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + jn(t, "$$c") + "}", null, !0)
        }

        function Vn(e, t, n) {
            var r = n && n.number,
                o = kn(e, "value") || "null";
            o = r ? "_n(" + o + ")" : o, An(e, "checked", "_q(" + t + "," + o + ")"), Tn(e, "change", jn(t, o), null, !0)
        }

        function Bn(e, t, n) {
            var r = n && n.number,
                o = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})",
                i = "var $$selectedVal = " + o + ";";
            i = i + " " + jn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Tn(e, "change", i, null, !0)
        }

        function zn(e, t, n) {
            var r = e.attrsMap.type,
                o = n || {},
                i = o.lazy,
                a = o.number,
                s = o.trim,
                c = !i && "range" !== r,
                u = i ? "change" : "range" === r ? ss : "input",
                l = "$event.target.value";
            s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
            var f = jn(t, l);
            c && (f = "if($event.target.composing)return;" + f), An(e, "value", "(" + t + ")"), Tn(e, u, f, null, !0), (s || a) && Tn(e, "blur", "$forceUpdate()")
        }

        function Wn(e) {
            if (o(e[ss])) {
                var t = Ci ? "change" : "input";
                e[t] = [].concat(e[ss], e[t] || []), delete e[ss]
            }
            o(e[cs]) && (e.change = [].concat(e[cs], e.change || []), delete e[cs])
        }

        function Gn(e, t, n) {
            var r = ja;
            return function o() {
                null !== e.apply(null, arguments) && Kn(t, o, n, r)
            }
        }

        function Jn(e, t, n, r, o) {
            t = ie(t), n && (t = Gn(t, e, r)), ja.addEventListener(e, t, Ti ? {
                capture: r,
                passive: o
            } : r)
        }

        function Kn(e, t, n, r) {
            (r || ja).removeEventListener(e, t._withTask || t, n)
        }

        function qn(e, t) {
            if (!r(e.data.on) || !r(t.data.on)) {
                var n = t.data.on || {},
                    o = e.data.on || {};
                ja = t.elm, Wn(n), le(n, o, Jn, Kn, t.context), ja = void 0
            }
        }

        function Xn(e, t) {
            if (!r(e.data.domProps) || !r(t.data.domProps)) {
                var n, i, a = t.elm,
                    s = e.data.domProps || {},
                    c = t.data.domProps || {};
                o(c.__ob__) && (c = t.data.domProps = _({}, c));
                for (n in s) r(c[n]) && (a[n] = "");
                for (n in c) {
                    if (i = c[n], "textContent" === n || "innerHTML" === n) {
                        if (t.children && (t.children.length = 0), i === s[n]) continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === n) {
                        a._value = i;
                        var u = r(i) ? "" : String(i);
                        Zn(a, u) && (a.value = u)
                    } else a[n] = i
                }
            }
        }

        function Zn(e, t) {
            return !e.composing && ("OPTION" === e.tagName || Yn(e, t) || Qn(e, t))
        }

        function Yn(e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) { }
            return n && e.value !== t
        }

        function Qn(e, t) {
            var n = e.value,
                r = e._vModifiers;
            return o(r) && r.number ? p(n) !== p(t) : o(r) && r.trim ? n.trim() !== t.trim() : n !== t
        }

        function er(e) {
            var t = tr(e.style);
            return e.staticStyle ? _(e.staticStyle, t) : t
        }

        function tr(e) {
            return Array.isArray(e) ? w(e) : "string" == typeof e ? fs(e) : e
        }

        function nr(e, t) {
            var n, r = {};
            if (t)
                for (var o = e; o.componentInstance;) o = o.componentInstance._vnode, o.data && (n = er(o.data)) && _(r, n);
            (n = er(e.data)) && _(r, n);
            for (var i = e; i = i.parent;) i.data && (n = er(i.data)) && _(r, n);
            return r
        }

        function rr(e, t) {
            var n = t.data,
                i = e.data;
            if (!(r(n.staticStyle) && r(n.style) && r(i.staticStyle) && r(i.style))) {
                var a, s, c = t.elm,
                    u = i.staticStyle,
                    l = i.normalizedStyle || i.style || {},
                    f = u || l,
                    d = tr(t.data.style) || {};
                t.data.normalizedStyle = o(d.__ob__) ? _({}, d) : d;
                var p = nr(t, !0);
                for (s in f) r(p[s]) && vs(c, s, "");
                for (s in p) (a = p[s]) !== f[s] && vs(c, s, null == a ? "" : a)
            }
        }

        function or(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }

        function ir(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                    n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class")
                }
        }

        function ar(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && _(t, gs(e.name || "v")), _(t, e), t
                }
                return "string" == typeof e ? gs(e) : void 0
            }
        }

        function sr(e) {
            As(function () {
                As(e)
            })
        }

        function cr(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t), or(e, t))
        }

        function ur(e, t) {
            e._transitionClasses && h(e._transitionClasses, t), ir(e, t)
        }

        function lr(e, t, n) {
            var r = fr(e, t),
                o = r.type,
                i = r.timeout,
                a = r.propCount;
            if (!o) return n();
            var s = o === _s ? Cs : Ss,
                c = 0,
                u = function () {
                    e.removeEventListener(s, l), n()
                },
                l = function (t) {
                    t.target === e && ++c >= a && u()
                };
            setTimeout(function () {
                c < a && u()
            }, i + 1), e.addEventListener(s, l)
        }

        function fr(e, t) {
            var n, r = window.getComputedStyle(e),
                o = r[xs + "Delay"].split(", "),
                i = r[xs + "Duration"].split(", "),
                a = dr(o, i),
                s = r[Es + "Delay"].split(", "),
                c = r[Es + "Duration"].split(", "),
                u = dr(s, c),
                l = 0,
                f = 0;
            return t === _s ? a > 0 && (n = _s, l = a, f = i.length) : t === ws ? u > 0 && (n = ws, l = u, f = c.length) : (l = Math.max(a, u), n = l > 0 ? a > u ? _s : ws : null, f = n ? n === _s ? i.length : c.length : 0), {
                type: n,
                timeout: l,
                propCount: f,
                hasTransform: n === _s && Os.test(r[xs + "Property"])
            }
        }

        function dr(e, t) {
            for (; e.length < t.length;) e = e.concat(e);
            return Math.max.apply(null, t.map(function (t, n) {
                return pr(t) + pr(e[n])
            }))
        }

        function pr(e) {
            return 1e3 * Number(e.slice(0, -1))
        }

        function vr(e, t) {
            var n = e.elm;
            o(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var i = ar(e.data.transition);
            if (!r(i) && !o(n._enterCb) && 1 === n.nodeType) {
                for (var a = i.css, s = i.type, u = i.enterClass, l = i.enterToClass, f = i.enterActiveClass, d = i.appearClass, v = i.appearToClass, h = i.appearActiveClass, m = i.beforeEnter, y = i.enter, g = i.afterEnter, b = i.enterCancelled, _ = i.beforeAppear, w = i.appear, x = i.afterAppear, C = i.appearCancelled, E = i.duration, A = sa, O = sa.$vnode; O && O.parent;) O = O.parent, A = O.context;
                var $ = !A._isMounted || !e.isRootInsert;
                if (!$ || w || "" === w) {
                    var T = $ && d ? d : u,
                        k = $ && h ? h : f,
                        R = $ && v ? v : l,
                        I = $ ? _ || m : m,
                        j = $ && "function" == typeof w ? w : y,
                        P = $ ? x || g : g,
                        M = $ ? C || b : b,
                        L = p(c(E) ? E.enter : E),
                        F = !1 !== a && !Ei,
                        N = yr(j),
                        D = n._enterCb = S(function () {
                            F && (ur(n, R), ur(n, k)), D.cancelled ? (F && ur(n, T), M && M(n)) : P && P(n), n._enterCb = null
                        });
                    e.data.show || fe(e, "insert", function () {
                        var t = n.parentNode,
                            r = t && t._pending && t._pending[e.key];
                        r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), j && j(n, D)
                    }), I && I(n), F && (cr(n, T), cr(n, k), sr(function () {
                        cr(n, R), ur(n, T), D.cancelled || N || (mr(L) ? setTimeout(D, L) : lr(n, s, D))
                    })), e.data.show && (t && t(), j && j(n, D)), F || N || D()
                }
            }
        }

        function hr(e, t) {
            function n() {
                C.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), v && v(i), _ && (cr(i, l), cr(i, d), sr(function () {
                    cr(i, f), ur(i, l), C.cancelled || w || (mr(x) ? setTimeout(C, x) : lr(i, u, C))
                })), h && h(i, C), _ || w || C())
            }
            var i = e.elm;
            o(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
            var a = ar(e.data.transition);
            if (r(a) || 1 !== i.nodeType) return t();
            if (!o(i._leaveCb)) {
                var s = a.css,
                    u = a.type,
                    l = a.leaveClass,
                    f = a.leaveToClass,
                    d = a.leaveActiveClass,
                    v = a.beforeLeave,
                    h = a.leave,
                    m = a.afterLeave,
                    y = a.leaveCancelled,
                    g = a.delayLeave,
                    b = a.duration,
                    _ = !1 !== s && !Ei,
                    w = yr(h),
                    x = p(c(b) ? b.leave : b),
                    C = i._leaveCb = S(function () {
                        i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (ur(i, f), ur(i, d)), C.cancelled ? (_ && ur(i, l), y && y(i)) : (t(), m && m(i)), i._leaveCb = null
                    });
                g ? g(n) : n()
            }
        }

        function mr(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function yr(e) {
            if (r(e)) return !1;
            var t = e.fns;
            return o(t) ? yr(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }

        function gr(e, t) {
            !0 !== t.data.show && vr(t)
        }

        function br(e, t, n) {
            _r(e, t, n), (Ci || Si) && setTimeout(function () {
                _r(e, t, n)
            }, 0)
        }

        function _r(e, t, n) {
            var r = t.value,
                o = e.multiple;
            if (!o || Array.isArray(r)) {
                for (var i, a, s = 0, c = e.options.length; s < c; s++)
                    if (a = e.options[s], o) i = E(r, xr(a)) > -1, a.selected !== i && (a.selected = i);
                    else if (C(xr(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
                o || (e.selectedIndex = -1)
            }
        }

        function wr(e, t) {
            return t.every(function (t) {
                return !C(t, e)
            })
        }

        function xr(e) {
            return "_value" in e ? e._value : e.value
        }

        function Cr(e) {
            e.target.composing = !0
        }

        function Er(e) {
            e.target.composing && (e.target.composing = !1, Sr(e.target, "input"))
        }

        function Sr(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function Ar(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : Ar(e.componentInstance._vnode)
        }

        function Or(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? Or(xe(t.children)) : e
        }

        function $r(e) {
            var t = {},
                n = e.$options;
            for (var r in n.propsData) t[r] = e[r];
            var o = n._parentListeners;
            for (var i in o) t[si(i)] = o[i];
            return t
        }

        function Tr(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
                props: t.componentOptions.propsData
            })
        }

        function kr(e) {
            for (; e = e.parent;)
                if (e.data.transition) return !0
        }

        function Rr(e, t) {
            return t.key === e.key && t.tag === e.tag
        }

        function Ir(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function jr(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }

        function Pr(e) {
            var t = e.data.pos,
                n = e.data.newPos,
                r = t.left - n.left,
                o = t.top - n.top;
            if (r || o) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
            }
        }

        function Mr(e, t) {
            var n = t ? Bs(t) : Us;
            if (n.test(e)) {
                for (var r, o, i = [], a = n.lastIndex = 0; r = n.exec(e);) {
                    o = r.index, o > a && i.push(JSON.stringify(e.slice(a, o)));
                    var s = xn(r[1].trim());
                    i.push("_s(" + s + ")"), a = o + r[0].length
                }
                return a < e.length && i.push(JSON.stringify(e.slice(a))), i.join("+")
            }
        }

        function Lr(e, t) {
            var n = (t.warn, Rn(e, "class"));
            n && (e.staticClass = JSON.stringify(n));
            var r = kn(e, "class", !1);
            r && (e.classBinding = r)
        }

        function Fr(e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
        }

        function Nr(e, t) {
            var n = (t.warn, Rn(e, "style"));
            if (n) {
                e.staticStyle = JSON.stringify(fs(n))
            }
            var r = kn(e, "style", !1);
            r && (e.styleBinding = r)
        }

        function Dr(e) {
            var t = "";
            return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
        }

        function Hr(e, t) {
            var n = t ? wc : _c;
            return e.replace(n, function (e) {
                return bc[e]
            })
        }

        function Ur(e, t) {
            function n(t) {
                l += t, e = e.substring(t)
            }

            function r(e, n, r) {
                var o, s;
                if (null == n && (n = l), null == r && (r = l), e && (s = e.toLowerCase()), e)
                    for (o = a.length - 1; o >= 0 && a[o].lowerCasedTag !== s; o--);
                else o = 0;
                if (o >= 0) {
                    for (var c = a.length - 1; c >= o; c--) t.end && t.end(a[c].tag, n, r);
                    a.length = o, i = o && a[o - 1].tag
                } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
            }
            for (var o, i, a = [], s = t.expectHTML, c = t.isUnaryTag || fi, u = t.canBeLeftOpenTag || fi, l = 0; e;) {
                if (o = e, i && yc(i)) {
                    var f = 0,
                        d = i.toLowerCase(),
                        p = gc[d] || (gc[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                        v = e.replace(p, function (e, n, r) {
                            return f = r.length, yc(d) || "noscript" === d || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Cc(d, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                        });
                    l += e.length - v.length, e = v, r(d, l - f, l)
                } else {
                    var h = e.indexOf("<");
                    if (0 === h) {
                        if (rc.test(e)) {
                            var m = e.indexOf("--\x3e");
                            if (m >= 0) {
                                t.shouldKeepComment && t.comment(e.substring(4, m)), n(m + 3);
                                continue
                            }
                        }
                        if (oc.test(e)) {
                            var y = e.indexOf("]>");
                            if (y >= 0) {
                                n(y + 2);
                                continue
                            }
                        }
                        var g = e.match(nc);
                        if (g) {
                            n(g[0].length);
                            continue
                        }
                        var b = e.match(tc);
                        if (b) {
                            var _ = l;
                            n(b[0].length), r(b[1], _, l);
                            continue
                        }
                        var w = function () {
                            var t = e.match(Qs);
                            if (t) {
                                var r = {
                                    tagName: t[1],
                                    attrs: [],
                                    start: l
                                };
                                n(t[0].length);
                                for (var o, i; !(o = e.match(ec)) && (i = e.match(Xs));) n(i[0].length), r.attrs.push(i);
                                if (o) return r.unarySlash = o[1], n(o[0].length), r.end = l, r
                            }
                        }();
                        if (w) {
                            ! function (e) {
                                var n = e.tagName,
                                    o = e.unarySlash;
                                s && ("p" === i && qs(n) && r(i), u(n) && i === n && r(n));
                                for (var l = c(n) || !!o, f = e.attrs.length, d = new Array(f), p = 0; p < f; p++) {
                                    var v = e.attrs[p];
                                    ic && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], "" === v[5] && delete v[5]);
                                    var h = v[3] || v[4] || v[5] || "",
                                        m = "a" === n && "href" === v[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                                    d[p] = {
                                        name: v[1],
                                        value: Hr(h, m)
                                    }
                                }
                                l || (a.push({
                                    tag: n,
                                    lowerCasedTag: n.toLowerCase(),
                                    attrs: d
                                }), i = n), t.start && t.start(n, d, l, e.start, e.end)
                            }(w), Cc(i, e) && n(1);
                            continue
                        }
                    }
                    var x = void 0,
                        C = void 0,
                        E = void 0;
                    if (h >= 0) {
                        for (C = e.slice(h); !(tc.test(C) || Qs.test(C) || rc.test(C) || oc.test(C) || (E = C.indexOf("<", 1)) < 0);) h += E, C = e.slice(h);
                        x = e.substring(0, h), n(h)
                    }
                    h < 0 && (x = e, e = ""), t.chars && x && t.chars(x)
                }
                if (e === o) {
                    t.chars && t.chars(e);
                    break
                }
            }
            r()
        }

        function Vr(e, t, n) {
            return {
                type: 1,
                tag: e,
                attrsList: t,
                attrsMap: ao(t),
                parent: n,
                children: []
            }
        }

        function Br(e, t) {
            function n(e) {
                e.pre && (s = !1), fc(e.tag) && (c = !1)
            }
            ac = t.warn || En, fc = t.isPreTag || fi, dc = t.mustUseProp || fi, pc = t.getTagNamespace || fi, cc = Sn(t.modules, "transformNode"), uc = Sn(t.modules, "preTransformNode"), lc = Sn(t.modules, "postTransformNode"), sc = t.delimiters;
            var r, o, i = [],
                a = !1 !== t.preserveWhitespace,
                s = !1,
                c = !1;
            return Ur(e, {
                warn: ac,
                expectHTML: t.expectHTML,
                isUnaryTag: t.isUnaryTag,
                canBeLeftOpenTag: t.canBeLeftOpenTag,
                shouldDecodeNewlines: t.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                shouldKeepComment: t.comments,
                start: function (e, a, u) {
                    var l = o && o.ns || pc(e);
                    Ci && "svg" === l && (a = uo(a));
                    var f = Vr(e, a, o);
                    l && (f.ns = l), co(f) && !ji() && (f.forbidden = !0);
                    for (var d = 0; d < uc.length; d++) f = uc[d](f, t) || f;
                    if (s || (zr(f), f.pre && (s = !0)), fc(f.tag) && (c = !0), s ? Wr(f) : f.processed || (qr(f), Xr(f), eo(f), Gr(f, t)), r ? i.length || r.if && (f.elseif || f.else) && Qr(r, {
                        exp: f.elseif,
                        block: f
                    }) : r = f, o && !f.forbidden)
                        if (f.elseif || f.else) Zr(f, o);
                        else if (f.slotScope) {
                            o.plain = !1;
                            var p = f.slotTarget || '"default"';
                            (o.scopedSlots || (o.scopedSlots = {}))[p] = f
                        } else o.children.push(f), f.parent = o;
                    u ? n(f) : (o = f, i.push(f));
                    for (var v = 0; v < lc.length; v++) lc[v](f, t)
                },
                end: function () {
                    var e = i[i.length - 1],
                        t = e.children[e.children.length - 1];
                    t && 3 === t.type && " " === t.text && !c && e.children.pop(), i.length -= 1, o = i[i.length - 1], n(e)
                },
                chars: function (e) {
                    if (o && (!Ci || "textarea" !== o.tag || o.attrsMap.placeholder !== e)) {
                        var t = o.children;
                        if (e = c || e.trim() ? so(o) ? e : Rc(e) : a && t.length ? " " : "") {
                            var n;
                            !s && " " !== e && (n = Mr(e, sc)) ? t.push({
                                type: 2,
                                expression: n,
                                text: e
                            }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({
                                type: 3,
                                text: e
                            })
                        }
                    }
                },
                comment: function (e) {
                    o.children.push({
                        type: 3,
                        text: e,
                        isComment: !0
                    })
                }
            }), r
        }

        function zr(e) {
            null != Rn(e, "v-pre") && (e.pre = !0)
        }

        function Wr(e) {
            var t = e.attrsList.length;
            if (t)
                for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = {
                    name: e.attrsList[r].name,
                    value: JSON.stringify(e.attrsList[r].value)
                };
            else e.pre || (e.plain = !0)
        }

        function Gr(e, t) {
            Jr(e), e.plain = !e.key && !e.attrsList.length, Kr(e), to(e), no(e);
            for (var n = 0; n < cc.length; n++) e = cc[n](e, t) || e;
            ro(e)
        }

        function Jr(e) {
            var t = kn(e, "key");
            t && (e.key = t)
        }

        function Kr(e) {
            var t = kn(e, "ref");
            t && (e.ref = t, e.refInFor = oo(e))
        }

        function qr(e) {
            var t;
            if (t = Rn(e, "v-for")) {
                var n = t.match(Ac);
                if (!n) return;
                e.for = n[2].trim();
                var r = n[1].trim(),
                    o = r.match(Oc);
                o ? (e.alias = o[1].trim(), e.iterator1 = o[2].trim(), o[3] && (e.iterator2 = o[3].trim())) : e.alias = r
            }
        }

        function Xr(e) {
            var t = Rn(e, "v-if");
            if (t) e.if = t, Qr(e, {
                exp: t,
                block: e
            });
            else {
                null != Rn(e, "v-else") && (e.else = !0);
                var n = Rn(e, "v-else-if");
                n && (e.elseif = n)
            }
        }

        function Zr(e, t) {
            var n = Yr(t.children);
            n && n.if && Qr(n, {
                exp: e.elseif,
                block: e
            })
        }

        function Yr(e) {
            for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop()
            }
        }

        function Qr(e, t) {
            e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
        }

        function eo(e) {
            null != Rn(e, "v-once") && (e.once = !0)
        }

        function to(e) {
            if ("slot" === e.tag) e.slotName = kn(e, "name");
            else {
                var t;
                "template" === e.tag ? (t = Rn(e, "scope"), e.slotScope = t || Rn(e, "slot-scope")) : (t = Rn(e, "slot-scope")) && (e.slotScope = t);
                var n = kn(e, "slot");
                n && (e.slotTarget = '""' === n ? '"default"' : n, "template" === e.tag || e.slotScope || On(e, "slot", n))
            }
        }

        function no(e) {
            var t;
            (t = kn(e, "is")) && (e.component = t), null != Rn(e, "inline-template") && (e.inlineTemplate = !0)
        }

        function ro(e) {
            var t, n, r, o, i, a, s, c = e.attrsList;
            for (t = 0, n = c.length; t < n; t++)
                if (r = o = c[t].name, i = c[t].value, Sc.test(r))
                    if (e.hasBindings = !0, a = io(r), a && (r = r.replace(kc, "")), Tc.test(r)) r = r.replace(Tc, ""), i = xn(i), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = si(r)) && (r = "innerHTML")), a.camel && (r = si(r)), a.sync && Tn(e, "update:" + si(r), jn(i, "$event"))), s || !e.component && dc(e.tag, e.attrsMap.type, r) ? An(e, r, i) : On(e, r, i);
                    else if (Ec.test(r)) r = r.replace(Ec, ""), Tn(e, r, i, a, !1, ac);
                    else {
                        r = r.replace(Sc, "");
                        var u = r.match($c),
                            l = u && u[1];
                        l && (r = r.slice(0, -(l.length + 1))), $n(e, r, o, i, l, a)
                    } else {
                    On(e, r, JSON.stringify(i)), !e.component && "muted" === r && dc(e.tag, e.attrsMap.type, r) && An(e, r, "true")
                }
        }

        function oo(e) {
            for (var t = e; t;) {
                if (void 0 !== t.for) return !0;
                t = t.parent
            }
            return !1
        }

        function io(e) {
            var t = e.match(kc);
            if (t) {
                var n = {};
                return t.forEach(function (e) {
                    n[e.slice(1)] = !0
                }), n
            }
        }

        function ao(e) {
            for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
            return t
        }

        function so(e) {
            return "script" === e.tag || "style" === e.tag
        }

        function co(e) {
            return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
        }

        function uo(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                Ic.test(r.name) || (r.name = r.name.replace(jc, ""), t.push(r))
            }
            return t
        }

        function lo(e, t) {
            if ("input" === e.tag) {
                var n = e.attrsMap;
                if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
                    var r = kn(e, "type"),
                        o = Rn(e, "v-if", !0),
                        i = o ? "&&(" + o + ")" : "",
                        a = null != Rn(e, "v-else", !0),
                        s = Rn(e, "v-else-if", !0),
                        c = fo(e);
                    qr(c), po(c, "type", "checkbox"), Gr(c, t), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + i, Qr(c, {
                        exp: c.if,
                        block: c
                    });
                    var u = fo(e);
                    Rn(u, "v-for", !0), po(u, "type", "radio"), Gr(u, t), Qr(c, {
                        exp: "(" + r + ")==='radio'" + i,
                        block: u
                    });
                    var l = fo(e);
                    return Rn(l, "v-for", !0), po(l, ":type", r), Gr(l, t), Qr(c, {
                        exp: o,
                        block: l
                    }), a ? c.else = !0 : s && (c.elseif = s), c
                }
            }
        }

        function fo(e) {
            return Vr(e.tag, e.attrsList.slice(), e.parent)
        }

        function po(e, t, n) {
            e.attrsMap[t] = n, e.attrsList.push({
                name: t,
                value: n
            })
        }

        function vo(e, t) {
            t.value && An(e, "textContent", "_s(" + t.value + ")")
        }

        function ho(e, t) {
            t.value && An(e, "innerHTML", "_s(" + t.value + ")")
        }

        function mo(e, t) {
            e && (vc = Nc(t.staticKeys || ""), hc = t.isReservedTag || fi, go(e), bo(e, !1))
        }

        function yo(e) {
            return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
        }

        function go(e) {
            if (e.static = _o(e), 1 === e.type) {
                if (!hc(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                for (var t = 0, n = e.children.length; t < n; t++) {
                    var r = e.children[t];
                    go(r), r.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var o = 1, i = e.ifConditions.length; o < i; o++) {
                        var a = e.ifConditions[o].block;
                        go(a), a.static || (e.static = !1)
                    }
            }
        }

        function bo(e, t) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
                if (e.staticRoot = !1, e.children)
                    for (var n = 0, r = e.children.length; n < r; n++) bo(e.children[n], t || !!e.for);
                if (e.ifConditions)
                    for (var o = 1, i = e.ifConditions.length; o < i; o++) bo(e.ifConditions[o].block, t)
            }
        }

        function _o(e) {
            return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || ri(e.tag) || !hc(e.tag) || wo(e) || !Object.keys(e).every(vc))))
        }

        function wo(e) {
            for (; e.parent;) {
                if (e = e.parent, "template" !== e.tag) return !1;
                if (e.for) return !0
            }
            return !1
        }

        function xo(e, t, n) {
            var r = t ? "nativeOn:{" : "on:{";
            for (var o in e) r += '"' + o + '":' + Co(o, e[o]) + ",";
            return r.slice(0, -1) + "}"
        }

        function Co(e, t) {
            if (!t) return "function(){}";
            if (Array.isArray(t)) return "[" + t.map(function (t) {
                return Co(e, t)
            }).join(",") + "]";
            var n = Hc.test(t.value),
                r = Dc.test(t.value);
            if (t.modifiers) {
                var o = "",
                    i = "",
                    a = [];
                for (var s in t.modifiers)
                    if (Bc[s]) i += Bc[s], Uc[s] && a.push(s);
                    else if ("exact" === s) {
                        var c = t.modifiers;
                        i += Vc(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                            return !c[e]
                        }).map(function (e) {
                            return "$event." + e + "Key"
                        }).join("||"))
                    } else a.push(s);
                a.length && (o += Eo(a)), i && (o += i);
                return "function($event){" + o + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}"
            }
            return n || r ? t.value : "function($event){" + t.value + "}"
        }

        function Eo(e) {
            return "if(!('button' in $event)&&" + e.map(So).join("&&") + ")return null;"
        }

        function So(e) {
            var t = parseInt(e, 10);
            if (t) return "$event.keyCode!==" + t;
            var n = Uc[e];
            return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key)"
        }

        function Ao(e, t) {
            e.wrapListeners = function (e) {
                return "_g(" + e + "," + t.value + ")"
            }
        }

        function Oo(e, t) {
            e.wrapData = function (n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
            }
        }

        function $o(e, t) {
            var n = new Wc(t);
            return {
                render: "with(this){return " + (e ? To(e, n) : '_c("div")') + "}",
                staticRenderFns: n.staticRenderFns
            }
        }

        function To(e, t) {
            if (e.staticRoot && !e.staticProcessed) return ko(e, t);
            if (e.once && !e.onceProcessed) return Ro(e, t);
            if (e.for && !e.forProcessed) return Po(e, t);
            if (e.if && !e.ifProcessed) return Io(e, t);
            if ("template" !== e.tag || e.slotTarget) {
                if ("slot" === e.tag) return Jo(e, t);
                var n;
                if (e.component) n = Ko(e.component, e, t);
                else {
                    var r = e.plain ? void 0 : Mo(e, t),
                        o = e.inlineTemplate ? null : Uo(e, t, !0);
                    n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (o ? "," + o : "") + ")"
                }
                for (var i = 0; i < t.transforms.length; i++) n = t.transforms[i](e, n);
                return n
            }
            return Uo(e, t) || "void 0"
        }

        function ko(e, t, n) {
            return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + To(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + "," + (e.staticInFor ? "true" : "false") + "," + (n ? "true" : "false") + ")"
        }

        function Ro(e, t) {
            if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Io(e, t);
            if (e.staticInFor) {
                for (var n = "", r = e.parent; r;) {
                    if (r.for) {
                        n = r.key;
                        break
                    }
                    r = r.parent
                }
                return n ? "_o(" + To(e, t) + "," + t.onceId++ + "," + n + ")" : To(e, t)
            }
            return ko(e, t, !0)
        }

        function Io(e, t, n, r) {
            return e.ifProcessed = !0, jo(e.ifConditions.slice(), t, n, r)
        }

        function jo(e, t, n, r) {
            function o(e) {
                return n ? n(e, t) : e.once ? Ro(e, t) : To(e, t)
            }
            if (!e.length) return r || "_e()";
            var i = e.shift();
            return i.exp ? "(" + i.exp + ")?" + o(i.block) + ":" + jo(e, t, n, r) : "" + o(i.block)
        }

        function Po(e, t, n, r) {
            var o = e.for,
                i = e.alias,
                a = e.iterator1 ? "," + e.iterator1 : "",
                s = e.iterator2 ? "," + e.iterator2 : "";
            return e.forProcessed = !0, (r || "_l") + "((" + o + "),function(" + i + a + s + "){return " + (n || To)(e, t) + "})"
        }

        function Mo(e, t) {
            var n = "{",
                r = Lo(e, t);
            r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
            for (var o = 0; o < t.dataGenFns.length; o++) n += t.dataGenFns[o](e);
            if (e.attrs && (n += "attrs:{" + qo(e.attrs) + "},"), e.props && (n += "domProps:{" + qo(e.props) + "},"), e.events && (n += xo(e.events, !1, t.warn) + ","), e.nativeEvents && (n += xo(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += No(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                var i = Fo(e, t);
                i && (n += i + ",")
            }
            return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
        }

        function Lo(e, t) {
            var n = e.directives;
            if (n) {
                var r, o, i, a, s = "directives:[",
                    c = !1;
                for (r = 0, o = n.length; r < o; r++) {
                    i = n[r], a = !0;
                    var u = t.directives[i.name];
                    u && (a = !!u(e, i, t.warn)), a && (c = !0, s += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                }
                return c ? s.slice(0, -1) + "]" : void 0
            }
        }

        function Fo(e, t) {
            var n = e.children[0];
            if (1 === n.type) {
                var r = $o(n, t.options);
                return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                    return "function(){" + e + "}"
                }).join(",") + "]}"
            }
        }

        function No(e, t) {
            return "scopedSlots:_u([" + Object.keys(e).map(function (n) {
                return Do(n, e[n], t)
            }).join(",") + "])"
        }

        function Do(e, t, n) {
            return t.for && !t.forProcessed ? Ho(e, t, n) : "{key:" + e + ",fn:function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if + "?" + (Uo(t, n) || "undefined") + ":undefined" : Uo(t, n) || "undefined" : To(t, n)) + "}}"
        }

        function Ho(e, t, n) {
            var r = t.for,
                o = t.alias,
                i = t.iterator1 ? "," + t.iterator1 : "",
                a = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, "_l((" + r + "),function(" + o + i + a + "){return " + Do(e, t, n) + "})"
        }

        function Uo(e, t, n, r, o) {
            var i = e.children;
            if (i.length) {
                var a = i[0];
                if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || To)(a, t);
                var s = n ? Vo(i, t.maybeComponent) : 0,
                    c = o || zo;
                return "[" + i.map(function (e) {
                    return c(e, t)
                }).join(",") + "]" + (s ? "," + s : "")
            }
        }

        function Vo(e, t) {
            for (var n = 0, r = 0; r < e.length; r++) {
                var o = e[r];
                if (1 === o.type) {
                    if (Bo(o) || o.ifConditions && o.ifConditions.some(function (e) {
                        return Bo(e.block)
                    })) {
                        n = 2;
                        break
                    } (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
                        return t(e.block)
                    })) && (n = 1)
                }
            }
            return n
        }

        function Bo(e) {
            return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
        }

        function zo(e, t) {
            return 1 === e.type ? To(e, t) : 3 === e.type && e.isComment ? Go(e) : Wo(e)
        }

        function Wo(e) {
            return "_v(" + (2 === e.type ? e.expression : Xo(JSON.stringify(e.text))) + ")"
        }

        function Go(e) {
            return "_e(" + JSON.stringify(e.text) + ")"
        }

        function Jo(e, t) {
            var n = e.slotName || '"default"',
                r = Uo(e, t),
                o = "_t(" + n + (r ? "," + r : ""),
                i = e.attrs && "{" + e.attrs.map(function (e) {
                    return si(e.name) + ":" + e.value
                }).join(",") + "}",
                a = e.attrsMap["v-bind"];
            return !i && !a || r || (o += ",null"), i && (o += "," + i), a && (o += (i ? "" : ",null") + "," + a), o + ")"
        }

        function Ko(e, t, n) {
            var r = t.inlineTemplate ? null : Uo(t, n, !0);
            return "_c(" + e + "," + Mo(t, n) + (r ? "," + r : "") + ")"
        }

        function qo(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                t += '"' + r.name + '":' + Xo(r.value) + ","
            }
            return t.slice(0, -1)
        }

        function Xo(e) {
            return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        function Zo(e, t) {
            try {
                return new Function(e)
            } catch (n) {
                return t.push({
                    err: n,
                    code: e
                }), x
            }
        }

        function Yo(e) {
            var t = Object.create(null);
            return function (n, r, o) {
                r = _({}, r);
                r.warn;
                delete r.warn;
                var i = r.delimiters ? String(r.delimiters) + n : n;
                if (t[i]) return t[i];
                var a = e(n, r),
                    s = {},
                    c = [];
                return s.render = Zo(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (e) {
                    return Zo(e, c)
                }), t[i] = s
            }
        }

        function Qo(e) {
            return mc = mc || document.createElement("div"), mc.innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', mc.innerHTML.indexOf("&#10;") > 0
        }

        function ei(e) {
            if (e.outerHTML) return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML
        }
        /*!
         * Vue.js v2.5.7
         * (c) 2014-2017 Evan You
         * Released under the MIT License.
         */
        var ti = Object.freeze({}),
            ni = Object.prototype.toString,
            ri = v("slot,component", !0),
            oi = v("key,ref,slot,slot-scope,is"),
            ii = Object.prototype.hasOwnProperty,
            ai = /-(\w)/g,
            si = y(function (e) {
                return e.replace(ai, function (e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }),
            ci = y(function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }),
            ui = /\B([A-Z])/g,
            li = y(function (e) {
                return e.replace(ui, "-$1").toLowerCase()
            }),
            fi = function (e, t, n) {
                return !1
            },
            di = function (e) {
                return e
            },
            pi = "data-server-rendered",
            vi = ["component", "directive", "filter"],
            hi = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            mi = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: fi,
                isReservedAttr: fi,
                isUnknownElement: fi,
                getTagNamespace: x,
                parsePlatformTagName: di,
                mustUseProp: fi,
                _lifecycleHooks: hi
            },
            yi = /[^\w.$]/,
            gi = "__proto__" in {},
            bi = "undefined" != typeof window,
            _i = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            wi = _i && WXEnvironment.platform.toLowerCase(),
            xi = bi && window.navigator.userAgent.toLowerCase(),
            Ci = xi && /msie|trident/.test(xi),
            Ei = xi && xi.indexOf("msie 9.0") > 0,
            Si = xi && xi.indexOf("edge/") > 0,
            Ai = xi && xi.indexOf("android") > 0 || "android" === wi,
            Oi = xi && /iphone|ipad|ipod|ios/.test(xi) || "ios" === wi,
            $i = (xi && /chrome\/\d+/.test(xi), {}.watch),
            Ti = !1;
        if (bi) try {
            var ki = {};
            Object.defineProperty(ki, "passive", {
                get: function () {
                    Ti = !0
                }
            }), window.addEventListener("test-passive", null, ki)
        } catch (e) { }
        var Ri, Ii, ji = function () {
            return void 0 === Ri && (Ri = !bi && void 0 !== e && "server" === e.process.env.VUE_ENV), Ri
        },
            Pi = bi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            Mi = "undefined" != typeof Symbol && T(Symbol) && "undefined" != typeof Reflect && T(Reflect.ownKeys);
        Ii = "undefined" != typeof Set && T(Set) ? Set : function () {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function (e) {
                return !0 === this.set[e]
            }, e.prototype.add = function (e) {
                this.set[e] = !0
            }, e.prototype.clear = function () {
                this.set = Object.create(null)
            }, e
        }();
        var Li = x,
            Fi = 0,
            Ni = function () {
                this.id = Fi++, this.subs = []
            };
        Ni.prototype.addSub = function (e) {
            this.subs.push(e)
        }, Ni.prototype.removeSub = function (e) {
            h(this.subs, e)
        }, Ni.prototype.depend = function () {
            Ni.target && Ni.target.addDep(this)
        }, Ni.prototype.notify = function () {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
        }, Ni.target = null;
        var Di = [],
            Hi = function (e, t, n, r, o, i, a, s) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.functionalContext = void 0, this.functionalOptions = void 0, this.functionalScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            Ui = {
                child: {
                    configurable: !0
                }
            };
        Ui.child.get = function () {
            return this.componentInstance
        }, Object.defineProperties(Hi.prototype, Ui);
        var Vi = function (e) {
            void 0 === e && (e = "");
            var t = new Hi;
            return t.text = e, t.isComment = !0, t
        },
            Bi = Array.prototype,
            zi = Object.create(Bi);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
            var t = Bi[e];
            O(zi, e, function () {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var o, i = t.apply(this, n),
                    a = this.__ob__;
                switch (e) {
                    case "push":
                    case "unshift":
                        o = n;
                        break;
                    case "splice":
                        o = n.slice(2)
                }
                return o && a.observeArray(o), a.dep.notify(), i
            })
        });
        var Wi = Object.getOwnPropertyNames(zi),
            Gi = {
                shouldConvert: !0
            },
            Ji = function (e) {
                if (this.value = e, this.dep = new Ni, this.vmCount = 0, O(e, "__ob__", this), Array.isArray(e)) {
                    (gi ? M : L)(e, zi, Wi), this.observeArray(e)
                } else this.walk(e)
            };
        Ji.prototype.walk = function (e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) N(e, t[n], e[t[n]])
        }, Ji.prototype.observeArray = function (e) {
            for (var t = 0, n = e.length; t < n; t++) F(e[t])
        };
        var Ki = mi.optionMergeStrategies;
        Ki.data = function (e, t, n) {
            return n ? B(e, t, n) : t && "function" != typeof t ? e : B(e, t)
        }, hi.forEach(function (e) {
            Ki[e] = z
        }), vi.forEach(function (e) {
            Ki[e + "s"] = W
        }), Ki.watch = function (e, t, n, r) {
            if (e === $i && (e = void 0), t === $i && (t = void 0), !t) return Object.create(e || null);
            if (!e) return t;
            var o = {};
            _(o, e);
            for (var i in t) {
                var a = o[i],
                    s = t[i];
                a && !Array.isArray(a) && (a = [a]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return o
        }, Ki.props = Ki.methods = Ki.inject = Ki.computed = function (e, t, n, r) {
            if (!e) return t;
            var o = Object.create(null);
            return _(o, e), t && _(o, t), o
        }, Ki.provide = B;
        var qi, Xi, Zi = function (e, t) {
            return void 0 === t ? e : t
        },
            Yi = [],
            Qi = !1,
            ea = !1;
        if (void 0 !== n && T(n)) Xi = function () {
            n(oe)
        };
        else if ("undefined" == typeof MessageChannel || !T(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Xi = function () {
            setTimeout(oe, 0)
        };
        else {
            var ta = new MessageChannel,
                na = ta.port2;
            ta.port1.onmessage = oe, Xi = function () {
                na.postMessage(1)
            }
        }
        if ("undefined" != typeof Promise && T(Promise)) {
            var ra = Promise.resolve();
            qi = function () {
                ra.then(oe), Oi && setTimeout(x)
            }
        } else qi = Xi;
        var oa, ia = new Ii,
            aa = y(function (e) {
                var t = "&" === e.charAt(0);
                e = t ? e.slice(1) : e;
                var n = "~" === e.charAt(0);
                e = n ? e.slice(1) : e;
                var r = "!" === e.charAt(0);
                return e = r ? e.slice(1) : e, {
                    name: e,
                    once: n,
                    capture: r,
                    passive: t
                }
            }),
            sa = null,
            ca = [],
            ua = [],
            la = {},
            fa = !1,
            da = !1,
            pa = 0,
            va = 0,
            ha = function (e, t, n, r) {
                this.vm = e, e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++va, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ii, this.newDepIds = new Ii, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = $(t), this.getter || (this.getter = function () { })), this.value = this.lazy ? void 0 : this.get()
            };
        ha.prototype.get = function () {
            k(this);
            var e, t = this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (e) {
                if (!this.user) throw e;
                te(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && se(e), R(), this.cleanupDeps()
            }
            return e
        }, ha.prototype.addDep = function (e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, ha.prototype.cleanupDeps = function () {
            for (var e = this, t = this.deps.length; t--;) {
                var n = e.deps[t];
                e.newDepIds.has(n.id) || n.removeSub(e)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
        }, ha.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ve(this)
        }, ha.prototype.run = function () {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || c(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user) try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        te(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, e, t)
                }
            }
        }, ha.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
        }, ha.prototype.depend = function () {
            for (var e = this, t = this.deps.length; t--;) e.deps[t].depend()
        }, ha.prototype.teardown = function () {
            var e = this;
            if (this.active) {
                this.vm._isBeingDestroyed || h(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
                this.active = !1
            }
        };
        var ma = {
            enumerable: !0,
            configurable: !0,
            get: x,
            set: x
        },
            ya = {
                lazy: !0
            };
        pt(vt.prototype);
        var ga = {
            init: function (e, t, n, r) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    (e.componentInstance = gt(e, sa, n, r)).$mount(t ? e.elm : void 0, t)
                } else if (e.data.keepAlive) {
                    var o = e;
                    ga.prepatch(o, o)
                }
            },
            prepatch: function (e, t) {
                var n = t.componentOptions;
                Ie(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            },
            insert: function (e) {
                var t = e.context,
                    n = e.componentInstance;
                n._isMounted || (n._isMounted = !0, Le(n, "mounted")), e.data.keepAlive && (t._isMounted ? He(n) : Pe(n, !0))
            },
            destroy: function (e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? Me(t, !0) : t.$destroy())
            }
        },
            ba = Object.keys(ga),
            _a = 1,
            wa = 2,
            xa = 0;
        ! function (e) {
            e.prototype._init = function (e) {
                var t = this;
                t._uid = xa++, t._isVue = !0, e && e._isComponent ? At(t, e) : t.$options = q(Ot(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, ke(t), Ce(t), St(t), Le(t, "beforeCreate"), tt(t), ze(t), et(t), Le(t, "created"), t.$options.el && t.$mount(t.$options.el)
            }
        }(kt),
            function (e) {
                var t = {};
                t.get = function () {
                    return this._data
                };
                var n = {};
                n.get = function () {
                    return this._props
                }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = D, e.prototype.$delete = H, e.prototype.$watch = function (e, t, n) {
                    var r = this;
                    if (u(t)) return Qe(r, e, t, n);
                    n = n || {}, n.user = !0;
                    var o = new ha(r, e, t, n);
                    return n.immediate && t.call(r, o.value),
                        function () {
                            o.teardown()
                        }
                }
            }(kt),
            function (e) {
                var t = /^hook:/;
                e.prototype.$on = function (e, n) {
                    var r = this,
                        o = this;
                    if (Array.isArray(e))
                        for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n);
                    else (o._events[e] || (o._events[e] = [])).push(n), t.test(e) && (o._hasHookEvent = !0);
                    return o
                }, e.prototype.$once = function (e, t) {
                    function n() {
                        r.$off(e, n), t.apply(r, arguments)
                    }
                    var r = this;
                    return n.fn = t, r.$on(e, n), r
                }, e.prototype.$off = function (e, t) {
                    var n = this,
                        r = this;
                    if (!arguments.length) return r._events = Object.create(null), r;
                    if (Array.isArray(e)) {
                        for (var o = 0, i = e.length; o < i; o++) n.$off(e[o], t);
                        return r
                    }
                    var a = r._events[e];
                    if (!a) return r;
                    if (!t) return r._events[e] = null, r;
                    if (t)
                        for (var s, c = a.length; c--;)
                            if ((s = a[c]) === t || s.fn === t) {
                                a.splice(c, 1);
                                break
                            } return r
                }, e.prototype.$emit = function (e) {
                    var t = this,
                        n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? b(n) : n;
                        for (var r = b(arguments, 1), o = 0, i = n.length; o < i; o++) try {
                            n[o].apply(t, r)
                        } catch (n) {
                            te(n, t, 'event handler for "' + e + '"')
                        }
                    }
                    return t
                }
            }(kt),
            function (e) {
                e.prototype._update = function (e, t) {
                    var n = this;
                    n._isMounted && Le(n, "beforeUpdate");
                    var r = n.$el,
                        o = n._vnode,
                        i = sa;
                    sa = n, n._vnode = e, o ? n.$el = n.__patch__(o, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), sa = i, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, e.prototype.$forceUpdate = function () {
                    var e = this;
                    e._watcher && e._watcher.update()
                }, e.prototype.$destroy = function () {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Le(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Le(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                    }
                }
            }(kt),
            function (e) {
                pt(e.prototype), e.prototype.$nextTick = function (e) {
                    return ae(e, this)
                }, e.prototype._render = function () {
                    var e = this,
                        t = e.$options,
                        n = t.render,
                        r = t._parentVnode;
                    if (e._isMounted)
                        for (var o in e.$slots) {
                            var i = e.$slots[o];
                            (i._rendered || i[0] && i[0].elm) && (e.$slots[o] = P(i, !0))
                        }
                    e.$scopedSlots = r && r.data.scopedSlots || ti, e.$vnode = r;
                    var a;
                    try {
                        a = n.call(e._renderProxy, e.$createElement)
                    } catch (t) {
                        te(t, e, "render"), a = e._vnode
                    }
                    return a instanceof Hi || (a = Vi()), a.parent = r, a
                }
            }(kt);
        var Ca = [String, RegExp, Array],
            Ea = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: Ca,
                    exclude: Ca,
                    max: [String, Number]
                },
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    var e = this;
                    for (var t in e.cache) Ht(e.cache, t, e.keys)
                },
                watch: {
                    include: function (e) {
                        Dt(this, function (t) {
                            return Nt(e, t)
                        })
                    },
                    exclude: function (e) {
                        Dt(this, function (t) {
                            return !Nt(e, t)
                        })
                    }
                },
                render: function () {
                    var e = this.$slots.default,
                        t = xe(e),
                        n = t && t.componentOptions;
                    if (n) {
                        var r = Ft(n),
                            o = this,
                            i = o.include,
                            a = o.exclude;
                        if (i && (!r || !Nt(i, r)) || a && r && Nt(a, r)) return t;
                        var s = this,
                            c = s.cache,
                            u = s.keys,
                            l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        c[l] ? (t.componentInstance = c[l].componentInstance, h(u, l), u.push(l)) : (c[l] = t, u.push(l), this.max && u.length > parseInt(this.max) && Ht(c, u[0], u, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            },
            Sa = {
                KeepAlive: Ea
            };
        ! function (e) {
            var t = {};
            t.get = function () {
                return mi
            }, Object.defineProperty(e, "config", t), e.util = {
                warn: Li,
                extend: _,
                mergeOptions: q,
                defineReactive: N
            }, e.set = D, e.delete = H, e.nextTick = ae, e.options = Object.create(null), vi.forEach(function (t) {
                e.options[t + "s"] = Object.create(null)
            }), e.options._base = e, _(e.options.components, Sa), Rt(e), It(e), jt(e), Lt(e)
        }(kt), Object.defineProperty(kt.prototype, "$isServer", {
            get: ji
        }), Object.defineProperty(kt.prototype, "$ssrContext", {
            get: function () {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), kt.version = "2.5.7";
        var Aa, Oa, $a, Ta, ka, Ra, Ia, ja, Pa, Ma = v("style,class"),
            La = v("input,textarea,option,select,progress"),
            Fa = function (e, t, n) {
                return "value" === n && La(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
            },
            Na = v("contenteditable,draggable,spellcheck"),
            Da = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Ha = "http://www.w3.org/1999/xlink",
            Ua = function (e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            },
            Va = function (e) {
                return Ua(e) ? e.slice(6, e.length) : ""
            },
            Ba = function (e) {
                return null == e || !1 === e
            },
            za = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Wa = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Ga = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Ja = function (e) {
                return "pre" === e
            },
            Ka = function (e) {
                return Wa(e) || Ga(e)
            },
            qa = Object.create(null),
            Xa = v("text,number,password,search,email,tel,url"),
            Za = Object.freeze({
                createElement: Zt,
                createElementNS: Yt,
                createTextNode: Qt,
                createComment: en,
                insertBefore: tn,
                removeChild: nn,
                appendChild: rn,
                parentNode: on,
                nextSibling: an,
                tagName: sn,
                setTextContent: cn,
                setAttribute: un
            }),
            Ya = {
                create: function (e, t) {
                    ln(t)
                },
                update: function (e, t) {
                    e.data.ref !== t.data.ref && (ln(e, !0), ln(t))
                },
                destroy: function (e) {
                    ln(e, !0)
                }
            },
            Qa = new Hi("", {}, []),
            es = ["create", "activate", "update", "remove", "destroy"],
            ts = {
                create: vn,
                update: vn,
                destroy: function (e) {
                    vn(e, Qa)
                }
            },
            ns = Object.create(null),
            rs = [Ya, ts],
            os = {
                create: bn,
                update: bn
            },
            is = {
                create: wn,
                update: wn
            },
            as = /[\w).+\-_$\]]/,
            ss = "__r",
            cs = "__c",
            us = {
                create: qn,
                update: qn
            },
            ls = {
                create: Xn,
                update: Xn
            },
            fs = y(function (e) {
                var t = {},
                    n = /;(?![^(]*\))/g,
                    r = /:(.+)/;
                return e.split(n).forEach(function (e) {
                    if (e) {
                        var n = e.split(r);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim())
                    }
                }), t
            }),
            ds = /^--/,
            ps = /\s*!important$/,
            vs = function (e, t, n) {
                if (ds.test(t)) e.style.setProperty(t, n);
                else if (ps.test(n)) e.style.setProperty(t, n.replace(ps, ""), "important");
                else {
                    var r = ms(t);
                    if (Array.isArray(n))
                        for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
                    else e.style[r] = n
                }
            },
            hs = ["Webkit", "Moz", "ms"],
            ms = y(function (e) {
                if (Pa = Pa || document.createElement("div").style, "filter" !== (e = si(e)) && e in Pa) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < hs.length; n++) {
                    var r = hs[n] + t;
                    if (r in Pa) return r
                }
            }),
            ys = {
                create: rr,
                update: rr
            },
            gs = y(function (e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }),
            bs = bi && !Ei,
            _s = "transition",
            ws = "animation",
            xs = "transition",
            Cs = "transitionend",
            Es = "animation",
            Ss = "animationend";
        bs && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xs = "WebkitTransition", Cs = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Es = "WebkitAnimation", Ss = "webkitAnimationEnd"));
        var As = bi ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
            return e()
        },
            Os = /\b(transform|all)(,|$)/,
            $s = bi ? {
                create: gr,
                activate: gr,
                remove: function (e, t) {
                    !0 !== e.data.show ? hr(e, t) : t()
                }
            } : {},
            Ts = [os, is, us, ls, ys, $s],
            ks = Ts.concat(rs),
            Rs = function (e) {
                function t(e) {
                    return new Hi(R.tagName(e).toLowerCase(), {}, [], void 0, e)
                }

                function n(e, t) {
                    function n() {
                        0 == --n.listeners && a(e)
                    }
                    return n.listeners = t, n
                }

                function a(e) {
                    var t = R.parentNode(e);
                    o(t) && R.removeChild(t, e)
                }

                function c(e, t, n, r, a) {
                    if (e.isRootInsert = !a, !u(e, t, n, r)) {
                        var s = e.data,
                            c = e.children,
                            l = e.tag;
                        o(l) ? (e.elm = e.ns ? R.createElementNS(e.ns, l) : R.createElement(l, e), y(e), p(e, c, t), o(s) && m(e, t), d(n, e.elm, r)) : i(e.isComment) ? (e.elm = R.createComment(e.text), d(n, e.elm, r)) : (e.elm = R.createTextNode(e.text), d(n, e.elm, r))
                    }
                }

                function u(e, t, n, r) {
                    var a = e.data;
                    if (o(a)) {
                        var s = o(e.componentInstance) && a.keepAlive;
                        if (o(a = a.hook) && o(a = a.init) && a(e, !1, n, r), o(e.componentInstance)) return l(e, t), i(s) && f(e, t, n, r), !0
                    }
                }

                function l(e, t) {
                    o(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, h(e) ? (m(e, t), y(e)) : (ln(e), t.push(e))
                }

                function f(e, t, n, r) {
                    for (var i, a = e; a.componentInstance;)
                        if (a = a.componentInstance._vnode, o(i = a.data) && o(i = i.transition)) {
                            for (i = 0; i < T.activate.length; ++i) T.activate[i](Qa, a);
                            t.push(a);
                            break
                        } d(n, e.elm, r)
                }

                function d(e, t, n) {
                    o(e) && (o(n) ? n.parentNode === e && R.insertBefore(e, t, n) : R.appendChild(e, t))
                }

                function p(e, t, n) {
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; ++r) c(t[r], n, e.elm, null, !0);
                    else s(e.text) && R.appendChild(e.elm, R.createTextNode(e.text))
                }

                function h(e) {
                    for (; e.componentInstance;) e = e.componentInstance._vnode;
                    return o(e.tag)
                }

                function m(e, t) {
                    for (var n = 0; n < T.create.length; ++n) T.create[n](Qa, e);
                    O = e.data.hook, o(O) && (o(O.create) && O.create(Qa, e), o(O.insert) && t.push(e))
                }

                function y(e) {
                    var t;
                    if (o(t = e.functionalScopeId)) R.setAttribute(e.elm, t, "");
                    else
                        for (var n = e; n;) o(t = n.context) && o(t = t.$options._scopeId) && R.setAttribute(e.elm, t, ""), n = n.parent;
                    o(t = sa) && t !== e.context && t !== e.functionalContext && o(t = t.$options._scopeId) && R.setAttribute(e.elm, t, "")
                }

                function g(e, t, n, r, o, i) {
                    for (; r <= o; ++r) c(n[r], i, e, t)
                }

                function b(e) {
                    var t, n, r = e.data;
                    if (o(r))
                        for (o(t = r.hook) && o(t = t.destroy) && t(e), t = 0; t < T.destroy.length; ++t) T.destroy[t](e);
                    if (o(t = e.children))
                        for (n = 0; n < e.children.length; ++n) b(e.children[n])
                }

                function _(e, t, n, r) {
                    for (; n <= r; ++n) {
                        var i = t[n];
                        o(i) && (o(i.tag) ? (w(i), b(i)) : a(i.elm))
                    }
                }

                function w(e, t) {
                    if (o(t) || o(e.data)) {
                        var r, i = T.remove.length + 1;
                        for (o(t) ? t.listeners += i : t = n(e.elm, i), o(r = e.componentInstance) && o(r = r._vnode) && o(r.data) && w(r, t), r = 0; r < T.remove.length; ++r) T.remove[r](e, t);
                        o(r = e.data.hook) && o(r = r.remove) ? r(e, t) : t()
                    } else a(e.elm)
                }

                function x(e, t, n, i, a) {
                    for (var s, u, l, f, d = 0, p = 0, v = t.length - 1, h = t[0], m = t[v], y = n.length - 1, b = n[0], w = n[y], x = !a; d <= v && p <= y;) r(h) ? h = t[++d] : r(m) ? m = t[--v] : fn(h, b) ? (E(h, b, i), h = t[++d], b = n[++p]) : fn(m, w) ? (E(m, w, i), m = t[--v], w = n[--y]) : fn(h, w) ? (E(h, w, i), x && R.insertBefore(e, h.elm, R.nextSibling(m.elm)), h = t[++d], w = n[--y]) : fn(m, b) ? (E(m, b, i), x && R.insertBefore(e, m.elm, h.elm), m = t[--v], b = n[++p]) : (r(s) && (s = pn(t, d, v)), u = o(b.key) ? s[b.key] : C(b, t, d, v), r(u) ? c(b, i, e, h.elm) : (l = t[u], fn(l, b) ? (E(l, b, i), t[u] = void 0, x && R.insertBefore(e, l.elm, h.elm)) : c(b, i, e, h.elm)), b = n[++p]);
                    d > v ? (f = r(n[y + 1]) ? null : n[y + 1].elm, g(e, f, n, p, y, i)) : p > y && _(e, t, d, v)
                }

                function C(e, t, n, r) {
                    for (var i = n; i < r; i++) {
                        var a = t[i];
                        if (o(a) && fn(e, a)) return i
                    }
                }

                function E(e, t, n, a) {
                    if (e !== t) {
                        var s = t.elm = e.elm;
                        if (i(e.isAsyncPlaceholder)) return void (o(t.asyncFactory.resolved) ? A(e.elm, t, n) : t.isAsyncPlaceholder = !0);
                        if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) return void (t.componentInstance = e.componentInstance);
                        var c, u = t.data;
                        o(u) && o(c = u.hook) && o(c = c.prepatch) && c(e, t);
                        var l = e.children,
                            f = t.children;
                        if (o(u) && h(t)) {
                            for (c = 0; c < T.update.length; ++c) T.update[c](e, t);
                            o(c = u.hook) && o(c = c.update) && c(e, t)
                        }
                        r(t.text) ? o(l) && o(f) ? l !== f && x(s, l, f, n, a) : o(f) ? (o(e.text) && R.setTextContent(s, ""), g(s, null, f, 0, f.length - 1, n)) : o(l) ? _(s, l, 0, l.length - 1) : o(e.text) && R.setTextContent(s, "") : e.text !== t.text && R.setTextContent(s, t.text), o(u) && o(c = u.hook) && o(c = c.postpatch) && c(e, t)
                    }
                }

                function S(e, t, n) {
                    if (i(n) && o(e.parent)) e.parent.data.pendingInsert = t;
                    else
                        for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
                }

                function A(e, t, n, r) {
                    var a, s = t.tag,
                        c = t.data,
                        u = t.children;
                    if (r = r || c && c.pre, t.elm = e, i(t.isComment) && o(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                    if (o(c) && (o(a = c.hook) && o(a = a.init) && a(t, !0), o(a = t.componentInstance))) return l(t, n), !0;
                    if (o(s)) {
                        if (o(u))
                            if (e.hasChildNodes())
                                if (o(a = c) && o(a = a.domProps) && o(a = a.innerHTML)) {
                                    if (a !== e.innerHTML) return !1
                                } else {
                                    for (var f = !0, d = e.firstChild, v = 0; v < u.length; v++) {
                                        if (!d || !A(d, u[v], n, r)) {
                                            f = !1;
                                            break
                                        }
                                        d = d.nextSibling
                                    }
                                    if (!f || d) return !1
                                }
                            else p(t, u, n);
                        if (o(c)) {
                            var h = !1;
                            for (var y in c)
                                if (!I(y)) {
                                    h = !0, m(t, n);
                                    break
                                } !h && c.class && se(c.class)
                        }
                    } else e.data !== t.text && (e.data = t.text);
                    return !0
                }
                var O, $, T = {},
                    k = e.modules,
                    R = e.nodeOps;
                for (O = 0; O < es.length; ++O)
                    for (T[es[O]] = [], $ = 0; $ < k.length; ++$) o(k[$][es[O]]) && T[es[O]].push(k[$][es[O]]);
                var I = v("attrs,class,staticClass,staticStyle,key");
                return function (e, n, a, s, u, l) {
                    if (r(n)) return void (o(e) && b(e));
                    var f = !1,
                        d = [];
                    if (r(e)) f = !0, c(n, d, u, l);
                    else {
                        var p = o(e.nodeType);
                        if (!p && fn(e, n)) E(e, n, d, s);
                        else {
                            if (p) {
                                if (1 === e.nodeType && e.hasAttribute(pi) && (e.removeAttribute(pi), a = !0), i(a) && A(e, n, d)) return S(n, d, !0), e;
                                e = t(e)
                            }
                            var v = e.elm,
                                m = R.parentNode(v);
                            if (c(n, d, v._leaveCb ? null : m, R.nextSibling(v)), o(n.parent))
                                for (var y = n.parent, g = h(n); y;) {
                                    for (var w = 0; w < T.destroy.length; ++w) T.destroy[w](y);
                                    if (y.elm = n.elm, g) {
                                        for (var x = 0; x < T.create.length; ++x) T.create[x](Qa, y);
                                        var C = y.data.hook.insert;
                                        if (C.merged)
                                            for (var O = 1; O < C.fns.length; O++) C.fns[O]()
                                    } else ln(y);
                                    y = y.parent
                                }
                            o(m) ? _(m, [e], 0, 0) : o(e.tag) && b(e)
                        }
                    }
                    return S(n, d, f), n.elm
                }
            }({
                nodeOps: Za,
                modules: ks
            });
        Ei && document.addEventListener("selectionchange", function () {
            var e = document.activeElement;
            e && e.vmodel && Sr(e, "input")
        });
        var Is = {
            inserted: function (e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? fe(n, "postpatch", function () {
                    Is.componentUpdated(e, t, n)
                }) : br(e, t, n.context), e._vOptions = [].map.call(e.options, xr)) : ("textarea" === n.tag || Xa(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", Er), Ai || (e.addEventListener("compositionstart", Cr), e.addEventListener("compositionend", Er)), Ei && (e.vmodel = !0)))
            },
            componentUpdated: function (e, t, n) {
                if ("select" === n.tag) {
                    br(e, t, n.context);
                    var r = e._vOptions,
                        o = e._vOptions = [].map.call(e.options, xr);
                    if (o.some(function (e, t) {
                        return !C(e, r[t])
                    })) {
                        (e.multiple ? t.value.some(function (e) {
                            return wr(e, o)
                        }) : t.value !== t.oldValue && wr(t.value, o)) && Sr(e, "change")
                    }
                }
            }
        },
            js = {
                bind: function (e, t, n) {
                    var r = t.value;
                    n = Ar(n);
                    var o = n.data && n.data.transition,
                        i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && o ? (n.data.show = !0, vr(n, function () {
                        e.style.display = i
                    })) : e.style.display = r ? i : "none"
                },
                update: function (e, t, n) {
                    var r = t.value;
                    r !== t.oldValue && (n = Ar(n), n.data && n.data.transition ? (n.data.show = !0, r ? vr(n, function () {
                        e.style.display = e.__vOriginalDisplay
                    }) : hr(n, function () {
                        e.style.display = "none"
                    })) : e.style.display = r ? e.__vOriginalDisplay : "none")
                },
                unbind: function (e, t, n, r, o) {
                    o || (e.style.display = e.__vOriginalDisplay)
                }
            },
            Ps = {
                model: Is,
                show: js
            },
            Ms = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            },
            Ls = {
                name: "transition",
                props: Ms,
                abstract: !0,
                render: function (e) {
                    var t = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(function (e) {
                        return e.tag || we(e)
                    }), n.length)) {
                        var r = this.mode,
                            o = n[0];
                        if (kr(this.$vnode)) return o;
                        var i = Or(o);
                        if (!i) return o;
                        if (this._leaving) return Tr(e, o);
                        var a = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : s(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                        var c = (i.data || (i.data = {})).transition = $r(this),
                            u = this._vnode,
                            l = Or(u);
                        if (i.data.directives && i.data.directives.some(function (e) {
                            return "show" === e.name
                        }) && (i.data.show = !0), l && l.data && !Rr(i, l) && !we(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                            var f = l.data.transition = _({}, c);
                            if ("out-in" === r) return this._leaving = !0, fe(f, "afterLeave", function () {
                                t._leaving = !1, t.$forceUpdate()
                            }), Tr(e, o);
                            if ("in-out" === r) {
                                if (we(i)) return u;
                                var d, p = function () {
                                    d()
                                };
                                fe(c, "afterEnter", p), fe(c, "enterCancelled", p), fe(f, "delayLeave", function (e) {
                                    d = e
                                })
                            }
                        }
                        return o
                    }
                }
            },
            Fs = _({
                tag: String,
                moveClass: String
            }, Ms);
        delete Fs.mode;
        var Ns = {
            props: Fs,
            render: function (e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = $r(this), s = 0; s < o.length; s++) {
                    var c = o[s];
                    if (c.tag)
                        if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) i.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
                        else;
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var d = r[f];
                        d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? u.push(d) : l.push(d)
                    }
                    this.kept = e(t, null, u), this.removed = l
                }
                return e(t, null, i)
            },
            beforeUpdate: function () {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
            },
            updated: function () {
                var e = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(Ir), e.forEach(jr), e.forEach(Pr), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                    if (e.data.moved) {
                        var n = e.elm,
                            r = n.style;
                        cr(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Cs, n._moveCb = function e(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Cs, e), n._moveCb = null, ur(n, t))
                        })
                    }
                }))
            },
            methods: {
                hasMove: function (e, t) {
                    if (!bs) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function (e) {
                        ir(n, e)
                    }), or(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = fr(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        },
            Ds = {
                Transition: Ls,
                TransitionGroup: Ns
            };
        kt.config.mustUseProp = Fa, kt.config.isReservedTag = Ka, kt.config.isReservedAttr = Ma, kt.config.getTagNamespace = Kt, kt.config.isUnknownElement = qt, _(kt.options.directives, Ps), _(kt.options.components, Ds), kt.prototype.__patch__ = bi ? Rs : x, kt.prototype.$mount = function (e, t) {
            return e = e && bi ? Xt(e) : void 0, Re(this, e, t)
        }, kt.nextTick(function () {
            mi.devtools && Pi && Pi.emit("init", kt)
        }, 0);
        var Hs, Us = /\{\{((?:.|\n)+?)\}\}/g,
            Vs = /[-.*+?^${}()|[\]\/\\]/g,
            Bs = y(function (e) {
                var t = e[0].replace(Vs, "\\$&"),
                    n = e[1].replace(Vs, "\\$&");
                return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
            }),
            zs = {
                staticKeys: ["staticClass"],
                transformNode: Lr,
                genData: Fr
            },
            Ws = {
                staticKeys: ["staticStyle"],
                transformNode: Nr,
                genData: Dr
            },
            Gs = {
                decode: function (e) {
                    return Hs = Hs || document.createElement("div"), Hs.innerHTML = e, Hs.textContent
                }
            },
            Js = v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            Ks = v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            qs = v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
            Xs = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
            Zs = "[a-zA-Z_][\\w\\-\\.]*",
            Ys = "((?:" + Zs + "\\:)?" + Zs + ")",
            Qs = new RegExp("^<" + Ys),
            ec = /^\s*(\/?)>/,
            tc = new RegExp("^<\\/" + Ys + "[^>]*>"),
            nc = /^<!DOCTYPE [^>]+>/i,
            rc = /^<!--/,
            oc = /^<!\[/,
            ic = !1;
        "x".replace(/x(.)?/g, function (e, t) {
            ic = "" === t
        });
        var ac, sc, cc, uc, lc, fc, dc, pc, vc, hc, mc, yc = v("script,style,textarea", !0),
            gc = {},
            bc = {
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&amp;": "&",
                "&#10;": "\n",
                "&#9;": "\t"
            },
            _c = /&(?:lt|gt|quot|amp);/g,
            wc = /&(?:lt|gt|quot|amp|#10|#9);/g,
            xc = v("pre,textarea", !0),
            Cc = function (e, t) {
                return e && xc(e) && "\n" === t[0]
            },
            Ec = /^@|^v-on:/,
            Sc = /^v-|^@|^:/,
            Ac = /(.*?)\s+(?:in|of)\s+(.*)/,
            Oc = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
            $c = /:(.*)$/,
            Tc = /^:|^v-bind:/,
            kc = /\.[^.]+/g,
            Rc = y(Gs.decode),
            Ic = /^xmlns:NS\d+/,
            jc = /^NS\d+:/,
            Pc = {
                preTransformNode: lo
            },
            Mc = [zs, Ws, Pc],
            Lc = {
                model: Hn,
                text: vo,
                html: ho
            },
            Fc = {
                expectHTML: !0,
                modules: Mc,
                directives: Lc,
                isPreTag: Ja,
                isUnaryTag: Js,
                mustUseProp: Fa,
                canBeLeftOpenTag: Ks,
                isReservedTag: Ka,
                getTagNamespace: Kt,
                staticKeys: function (e) {
                    return e.reduce(function (e, t) {
                        return e.concat(t.staticKeys || [])
                    }, []).join(",")
                }(Mc)
            },
            Nc = y(yo),
            Dc = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            Hc = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
            Uc = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                up: 38,
                left: 37,
                right: 39,
                down: 40,
                delete: [8, 46]
            },
            Vc = function (e) {
                return "if(" + e + ")return null;"
            },
            Bc = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: Vc("$event.target !== $event.currentTarget"),
                ctrl: Vc("!$event.ctrlKey"),
                shift: Vc("!$event.shiftKey"),
                alt: Vc("!$event.altKey"),
                meta: Vc("!$event.metaKey"),
                left: Vc("'button' in $event && $event.button !== 0"),
                middle: Vc("'button' in $event && $event.button !== 1"),
                right: Vc("'button' in $event && $event.button !== 2")
            },
            zc = {
                on: Ao,
                bind: Oo,
                cloak: x
            },
            Wc = function (e) {
                this.options = e, this.warn = e.warn || En, this.transforms = Sn(e.modules, "transformCode"), this.dataGenFns = Sn(e.modules, "genData"), this.directives = _(_({}, zc), e.directives);
                var t = e.isReservedTag || fi;
                this.maybeComponent = function (e) {
                    return !t(e.tag)
                }, this.onceId = 0, this.staticRenderFns = []
            },
            Gc = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function (e) {
                return function (t) {
                    function n(n, r) {
                        var o = Object.create(t),
                            i = [],
                            a = [];
                        if (o.warn = function (e, t) {
                            (t ? a : i).push(e)
                        }, r) {
                            r.modules && (o.modules = (t.modules || []).concat(r.modules)), r.directives && (o.directives = _(Object.create(t.directives), r.directives));
                            for (var s in r) "modules" !== s && "directives" !== s && (o[s] = r[s])
                        }
                        var c = e(n, o);
                        return c.errors = i, c.tips = a, c
                    }
                    return {
                        compile: n,
                        compileToFunctions: Yo(n)
                    }
                }
            }(function (e, t) {
                var n = Br(e.trim(), t);
                mo(n, t);
                var r = $o(n, t);
                return {
                    ast: n,
                    render: r.render,
                    staticRenderFns: r.staticRenderFns
                }
            })),
            Jc = Gc(Fc),
            Kc = Jc.compileToFunctions,
            qc = !!bi && Qo(!1),
            Xc = !!bi && Qo(!0),
            Zc = y(function (e) {
                var t = Xt(e);
                return t && t.innerHTML
            }),
            Yc = kt.prototype.$mount;
        kt.prototype.$mount = function (e, t) {
            if ((e = e && Xt(e)) === document.body || e === document.documentElement) return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template;
                if (r)
                    if ("string" == typeof r) "#" === r.charAt(0) && (r = Zc(r));
                    else {
                        if (!r.nodeType) return this;
                        r = r.innerHTML
                    }
                else e && (r = ei(e));
                if (r) {
                    var o = Kc(r, {
                        shouldDecodeNewlines: qc,
                        shouldDecodeNewlinesForHref: Xc,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this),
                        i = o.render,
                        a = o.staticRenderFns;
                    n.render = i, n.staticRenderFns = a
                }
            }
            return Yc.call(this, e, t)
        }, kt.compile = Kc, t.a = kt
    }).call(t, n(5), n(25).setImmediate)
}, function (e, t, n) {
    function r(e, t) {
        this._id = e, this._clearFn = t
    }
    var o = Function.prototype.apply;
    t.setTimeout = function () {
        return new r(o.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function () {
        return new r(o.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close()
    }, r.prototype.unref = r.prototype.ref = function () { }, r.prototype.close = function () {
        this._clearFn.call(window, this._id)
    }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout()
        }, t))
    }, n(26), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function (e, t, n) {
    (function (e, t) {
        ! function (e, n) {
            "use strict";

            function r(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var r = {
                    callback: e,
                    args: t
                };
                return u[c] = r, s(c), c++
            }

            function o(e) {
                delete u[e]
            }

            function i(e) {
                var t = e.callback,
                    r = e.args;
                switch (r.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(r[0]);
                        break;
                    case 2:
                        t(r[0], r[1]);
                        break;
                    case 3:
                        t(r[0], r[1], r[2]);
                        break;
                    default:
                        t.apply(n, r)
                }
            }

            function a(e) {
                if (l) setTimeout(a, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        l = !0;
                        try {
                            i(t)
                        } finally {
                            o(e), l = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var s, c = 1,
                    u = {},
                    l = !1,
                    f = e.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function () {
                    s = function (e) {
                        t.nextTick(function () {
                            a(e)
                        })
                    }
                }() : function () {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function () {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? function () {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function (n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function () {
                    var e = new MessageChannel;
                    e.port1.onmessage = function (e) {
                        a(e.data)
                    }, s = function (t) {
                        e.port2.postMessage(t)
                    }
                }() : f && "onreadystatechange" in f.createElement("script") ? function () {
                    var e = f.documentElement;
                    s = function (t) {
                        var n = f.createElement("script");
                        n.onreadystatechange = function () {
                            a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }() : function () {
                    s = function (e) {
                        setTimeout(a, 0, e)
                    }
                }(), d.setImmediate = r, d.clearImmediate = o
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n(5), n(27))
}, function (e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        h && p && (h = !1, p.length ? v = p.concat(v) : m = -1, v.length && s())
    }

    function s() {
        if (!h) {
            var e = o(a);
            h = !0;
            for (var t = v.length; t;) {
                for (p = v, v = []; ++m < t;) p && p[m].run();
                m = -1, t = v.length
            }
            p = null, h = !1, i(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() { }
    var l, f, d = e.exports = {};
    ! function () {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            f = r
        }
    }();
    var p, v = [],
        h = !1,
        m = -1;
    d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        v.push(new c(e, t)), 1 !== v.length || h || o(s)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function (e) {
        return []
    }, d.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function () {
        return "/"
    }, d.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(29)
    }
    var o = n(32),
        i = n(63),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    var r = n(30);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("eee1d622", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, "#app{font-family:Lato,sans-serif;display:flex;align-items:stretch;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;background:#fffaf0}.pipeline{flex:0 0 300px;font-size:14px;padding:15px;overflow:auto}.screen{box-shadow:0 0 5px rgba(0,0,0,.2);border-radius:4px;flex:1 1 auto;margin:15px;overflow:auto;display:flex;position:relative;background:#fff}.screen>*{margin:auto}", ""])
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o],
                a = i[0],
                s = i[1],
                c = i[2],
                u = i[3],
                l = {
                    id: e + ":" + o,
                    css: s,
                    media: c,
                    sourceMap: u
                };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                id: a,
                parts: [l]
            })
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = (n.n(r), n(33)),
        i = n(46),
        a = n(51),
        s = n(56),
        c = (n(3), n(61));
    n.n(c);
    t.a = {
        name: "app",
        props: ["initialData"],
        components: {
            ReaderSelector: o.a,
            AASelector: i.a,
            RendererSelector: a.a,
            FilterSelector: s.a
        },
        data: function () {
            return this.initialData
        },
        methods: {
            notify: function () {
                var e = JSON.parse(JSON.stringify({
                    reader: this.reader,
                    preFilters: this.preFilters,
                    postFilters: this.postFilters,
                    aa: this.aa,
                    renderer: this.renderer
                }));
                this.$emit("updated", e)
            }
        },
        watch: {
            reader: function () {
                this.notify()
            },
            aa: function () {
                this.notify()
            },
            renderer: function () {
                this.notify()
            },
            preFilters: function () {
                this.notify()
            },
            postFilters: function () {
                this.notify()
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(34)
    }
    var o = n(36),
        i = n(45),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    var r = n(35);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("4e622b00", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.reader-selector{background:#ffecb3}.reader-selector .settings-section select{width:100%}.reader-selector .upload-section{text-align:center}.reader-selector .upload-section input[type=file]{margin-top:10px;width:100%}.reader-selector .preview{margin-top:10px;border:1px solid #afafaf;padding:2px;border-radius:2px}.reader-selector .preview-image{width:80%;margin:5px auto 10px;display:block}.reader-selector .preview-video{width:100%}.reader-selector .or-separator{display:block;text-align:center;margin:10px;text-transform:uppercase}.reader-selector .or-separator:after,.reader-selector .or-separator:before{content:"\\2015";margin:5px}', ""])
}, function (e, t, n) {
    "use strict";
    var r = n(3),
        o = n(7),
        i = n(8),
        a = n(9);
    t.a = {
        name: "ReaderSelector",
        props: ["readers", "images", "videos"],
        components: {
            InputRow: i.a,
            PipelineSection: a.a
        },
        mixins: [o.a],
        methods: {
            fileInputChanged: function (e) {
                var t = this,
                    n = e.target.files[0];
                if (n) {
                    var r = new FileReader;
                    r.onload = function (e) {
                        return t.model.url = e.target.result
                    }, r.readAsDataURL(n)
                }
            },
            readerChanged: function (e) {
                var t = e.target.value === r.g.VIDEO_READER ? this.videos : this.images;
                this.model.url = (t[0] || {}).value
            }
        },
        computed: {
            imageReaderSelected: function () {
                return this.model.type === r.g.IMAGE_READER
            },
            videoReaderSelected: function () {
                return this.model.type === r.g.VIDEO_READER
            }
        }
    }
}, function (e, t, n) {
    var r = n(38);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("e2bab84c", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, ".input-row label{height:30px;line-height:30px;display:flex}.input-row-label{flex:0 1 auto;white-space:nowrap}.input-row-content{flex:1 1 auto;margin-left:8px}.input-row-content input[type=color],.input-row-content input[type=number],.input-row-content input[type=text]{width:100%}", ""])
}, function (e, t, n) {
    "use strict";
    t.a = {
        name: "InputRow",
        props: ["title"]
    }
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            staticClass: "input-row"
        }, [n("label", [n("div", {
            staticClass: "input-row-label"
        }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
            staticClass: "input-row-content"
        }, [e._t("default")], 2)])])
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    var r = n(42);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("166112bf", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.selector-header{text-align:center;margin-bottom:4px;font-size:16px;font-weight:500;position:relative}.selector-header select{position:absolute;right:0}.selector-section{box-shadow:0 0 2px 0 hsla(0,0%,48%,.5);border:1px solid #ababab;border-radius:4px;padding:8px;margin-bottom:28px;position:relative}.selector-section .content-wrapper{border-top:1px solid #ababab;padding-top:8px;margin-top:12px}.selector-section .content-wrapper.collapsed{display:none}.selector-section .toggle-btn{position:absolute;left:0;top:4px;width:15px;height:15px;border-radius:2px;cursor:pointer;color:#444;font-size:18px}.selector-section .toggle-btn.collapsed{transform:rotate(180deg)}.selector-section~.selector-section:before{content:"\\27A7";font-size:35px;position:absolute;top:-36px;color:#efefef;left:0;right:0;text-align:center;transform:rotate(90deg);text-shadow:0 0 1px #1b1b1b;pointer-events:none}', ""])
}, function (e, t, n) {
    "use strict";
    t.a = {
        name: "PipelineSection",
        props: ["title"],
        data: function () {
            return {
                isCollapsed: !1
            }
        },
        methods: {
            toggleFoldState: function () {
                this.isCollapsed = !this.isCollapsed
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            staticClass: "selector-section"
        }, [n("div", {
            staticClass: "selector-header"
        }, [n("div", {
            staticClass: "toggle-btn",
            class: {
                collapsed: e.isCollapsed
            },
            on: {
                click: e.toggleFoldState
            }
        }, [e._v("⌃")]), e._v("\n        " + e._s(e.title) + "\n        "), e._t("header")], 2), e._v(" "), n("div", {
            staticClass: "content-wrapper",
            class: {
                collapsed: e.isCollapsed
            }
        }, [e._t("content")], 2)])
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("PipelineSection", {
            staticClass: "reader-selector",
            attrs: {
                title: "Reader"
            }
        }, [
            n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.type,
                    expression: "model.type"
                }],
                attrs: {
                    slot: "header"
                },
                on: {
                    change: [function (t) {
                        var n = Array.prototype.filter.call(t.target.options, function (e) {
                            return e.selected
                        }).map(function (e) {
                            return "_value" in e ? e._value : e.value
                        });
                        e.$set(e.model, "type", t.target.multiple ? n : n[0])
                    }, e.readerChanged]
                },
                slot: "header"
            }, e._l(e.readers, function (t) {
                return n("option", {
                    domProps: {
                        value: t.type
                    }
                }, [e._v("\n            " + e._s(t.name) + "\n        ")])
            })),
            e._v(" "),
            n("template", {
                slot: "content"
            }, [
                e.imageReaderSelected ? n("div", {
                    staticClass: "image-reader-settings settings-section"
                }, [
                    n("InputRow", {
                        attrs: {
                            title: "Select predefined image:"
                        }
                    }, [
                        n("select", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.model.url,
                                expression: "model.url"
                            }],
                            on: {
                                change: function (t) {
                                    var n = Array.prototype.filter.call(t.target.options, function (e) {
                                        return e.selected
                                    }).map(function (e) {
                                        return "_value" in e ? e._value : e.value
                                    });
                                    e.$set(e.model, "url", t.target.multiple ? n : n[0])
                                }
                            }
                        }, e._l(e.images, function (t) {
                            return n("option", {
                                domProps: {
                                    value: t.value
                                }
                            }, [e._v("\n                        " + e._s(t.text) + "\n                    ")])
                        }))
                    ]),
                    e._v(" "),
                    n("div", {
                        staticClass: "or-separator"
                    }, [e._v("or")]),
                    e._v(" "),
                    n("div", {
                        staticClass: "upload-section"
                    }, [e._v("\n                Upload an image:\n                "), n("input", {
                        attrs: {
                            type: "file",
                            accept: "image/*"
                        },
                        on: {
                            change: e.fileInputChanged
                        }
                    })])
                ], 1) : e._e(),
                e._v(" "),
                e.videoReaderSelected ? n("div", {
                    staticClass: "video-reader-settings settings-section"
                }, [
                    n("InputRow", {
                        attrs: {
                            title: "Select predefined video:"
                        }
                    }, [
                        n("select", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.model.url,
                                expression: "model.url"
                            }],
                            on: {
                                change: function (t) {
                                    var n = Array.prototype.filter.call(t.target.options, function (e) {
                                        return e.selected
                                    }).map(function (e) {
                                        return "_value" in e ? e._value : e.value
                                    });
                                    e.$set(e.model, "url", t.target.multiple ? n : n[0])
                                }
                            }
                        }, e._l(e.videos, function (t) {
                            return n("option", {
                                domProps: {
                                    value: t.value
                                }
                            }, [e._v("\n                        " + e._s(t.text) + "\n                    ")])
                        }))
                    ]),
                    e._v(" "),
                    n("div", {
                        staticClass: "or-separator"
                    }, [e._v("or")]),
                    e._v(" "),
                    n("div", {
                        staticClass: "upload-section"
                    }, [e._v("\n                Upload a video:\n                "), n("input", {
                        attrs: {
                            type: "file",
                            accept: "video/*"
                        },
                        on: {
                            change: e.fileInputChanged
                        }
                    })])
                ], 1) : e._e(),
                e._v(" "),
                n("fieldset", {
                    staticClass: "preview"
                }, [
                    n("legend", [e._v("Preview")]),
                    e._v(" "),
                    e.imageReaderSelected ? n("img", {
                        staticClass: "preview-image",
                        attrs: {
                            src: e.model.url
                        }
                    }) : e._e(),
                    e._v(" "),
                    e.videoReaderSelected ? n("video", {
                        staticClass: "preview-video",
                        attrs: {
                            src: e.model.url,
                            controls: ""
                        }
                    }) : e._e()
                ])
            ])
        ], 2)


    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(47)
    }
    var o = n(49),
        i = n(50),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    var r = n(48);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("52f668c2", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, ".aa-selector{background:#ffcdd2}.aa-selector .input-row-label{min-width:60px;text-align:right}", ""])
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = (n.n(r), n(7)),
        i = n(9),
        a = n(8);
    t.a = {
        name: "AASelector",
        mixins: [o.a],
        components: {
            InputRow: a.a,
            PipelineSection: i.a
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("PipelineSection", {
            staticClass: "aa-selector",
            attrs: {
                title: "AA"
            }
        }, [n("template", {
            slot: "content"
        }, [n("InputRow", {
            attrs: {
                title: "Width:"
            }
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model.number",
                value: e.model.width,
                expression: "model.width",
                modifiers: {
                    number: !0
                }
            }],
            attrs: {
                type: "number"
            },
            domProps: {
                value: e.model.width
            },
            on: {
                input: function (t) {
                    t.target.composing || e.$set(e.model, "width", e._n(t.target.value))
                },
                blur: function (t) {
                    e.$forceUpdate()
                }
            }
        })]), e._v(" "), n("InputRow", {
            attrs: {
                title: "Height:"
            }
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model.number",
                value: e.model.height,
                expression: "model.height",
                modifiers: {
                    number: !0
                }
            }],
            attrs: {
                type: "number"
            },
            domProps: {
                value: e.model.height
            },
            on: {
                input: function (t) {
                    t.target.composing || e.$set(e.model, "height", e._n(t.target.value))
                },
                blur: function (t) {
                    e.$forceUpdate()
                }
            }
        })]), e._v(" "), n("InputRow", {
            attrs: {
                title: "Color:"
            }
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.model.colored,
                expression: "model.colored"
            }],
            attrs: {
                type: "checkbox"
            },
            domProps: {
                checked: Array.isArray(e.model.colored) ? e._i(e.model.colored, null) > -1 : e.model.colored
            },
            on: {
                change: function (t) {
                    var n = e.model.colored,
                        r = t.target,
                        o = !!r.checked;
                    if (Array.isArray(n)) {
                        var i = e._i(n, null);
                        r.checked ? i < 0 && (e.model.colored = n.concat([null])) : i > -1 && (e.model.colored = n.slice(0, i).concat(n.slice(i + 1)))
                    } else e.$set(e.model, "colored", o)
                }
            }
        })])], 1)], 2)
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(52)
    }
    var o = n(54),
        i = n(55),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    var r = n(53);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("35bc5070", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, ".renderer-selector{background:#bbdefb}.renderer-selector .input-row-label{min-width:120px;text-align:right}.renderer-selector .input-row-content select{width:100%}.renderer-selector .charset-selector label{height:auto}", ""])
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = (n.n(r), n(8)),
        i = n(9),
        a = n(3),
        s = n(7);
    t.a = {
        name: "RendererSelector",
        props: ["renderers", "fonts", "charsets"],
        components: {
            InputRow: o.a,
            PipelineSection: i.a
        },
        mixins: [s.a],
        data: function () {
            return {
                customSelected: !1
            }
        },
        methods: {
            onCharsetInput: function (e) {
                this.model.charset = e.target.value, this.customSelected = Array.from(e.target.selectedOptions).some(function (e) {
                    return e.hasAttribute("custom")
                })
            }
        },
        computed: {
            canvasSelected: function () {
                return this.model.type === a.h.CANVAS_RENDERER
            },
            charsetLabel: function () {
                return this.customSelected ? " " : this.model.charset
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("PipelineSection", {
            staticClass: "renderer-selector",
            attrs: {
                title: "Renderer"
            }
        }, [n("select", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.model.type,
                expression: "model.type"
            }],
            attrs: {
                slot: "header"
            },
            on: {
                change: function (t) {
                    var n = Array.prototype.filter.call(t.target.options, function (e) {
                        return e.selected
                    }).map(function (e) {
                        return "_value" in e ? e._value : e.value
                    });
                    e.$set(e.model, "type", t.target.multiple ? n : n[0])
                }
            },
            slot: "header"
        }, e._l(e.renderers, function (t) {
            return n("option", {
                domProps: {
                    value: t.type
                }
            }, [e._v("\n            " + e._s(t.name) + "\n        ")])
        })),
        e._v(" "), n("template", {
            slot: "content"
        },
            [n("", /**"InputRow" */ {
                // attrs: {
                //     title: "Background color:"
                // }
            }, [n("", //"input"
                {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.model.background,
                        expression: "model.background"
                    }],
                    // attrs: {
                    //     type: "color"
                    // },
                    // domProps: {
                    //     value: e.model.background
                    // },
                    // on: {
                    //     input: function(t) {
                    //         t.target.composing || e.$set(e.model, "background", t.target.value)
                    //     }
                    // }
                })]), e._v(" "), n("InputRow", {
                    attrs: {
                        title: "Gradient Color:"
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.model.gradient[0],
                        expression: "model.gradient[0]"
                    }],
                    attrs: {
                        type: "color"
                    },
                    domProps: {
                        value: e.model.gradient[0]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.model.gradient, "gradient", t.target.value)
                            console.log("input is ", t);
                        }
                    }
                })]), e._v(" "), n("InputRow", {
                    attrs: {
                        title: "Gradient Color:"
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.model.gradient[1],
                        expression: "model.gradient[1]"
                    }],
                    attrs: {
                        type: "color"
                    },
                    domProps: {
                        value: e.model.gradient[1]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.model.gradient, "gradient", t.target.value)
                            console.log("input is ", t);
                        }
                    }
                })]), e._v(" "), n("InputRow", {
                    attrs: {
                        title: "Gradient Color:"
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.model.gradient[2],
                        expression: "model.gradient[2]"
                    }],
                    attrs: {
                        type: "color"
                    },
                    domProps: {
                        value: e.model.gradient[2]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.model.gradient, "gradient", t.target.value)
                            console.log("input is ", t);
                        }
                    }
                })]),
            e._v(" "), n("InputRow", {
                attrs: {
                    title: "Text Color:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.color,
                    expression: "model.color"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: e.model.color
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "color", t.target.value)
                    }
                }
            })]), e._v(" "), n("InputRow", {
                staticClass: "charset-selector",
                attrs: {
                    title: "Charset:"
                }
            }, [n("select", {
                domProps: {
                    value: this.charsetLabel
                },
                on: {
                    input: this.onCharsetInput
                }
            }, [e._l(e.charsets, function (t) {
                return n("option", {
                    domProps: {
                        value: t.value
                    }
                }, [e._v("\n                    " + e._s(t.title) + "\n                ")])
            }), e._v(" "), n("option", {
                attrs: {
                    value: " ",
                    custom: ""
                }
            }, [e._v("Custom")])], 2), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.charset,
                    expression: "model.charset"
                }],
                attrs: {
                    type: "text",
                    disabled: !e.customSelected
                },
                domProps: {
                    value: e.model.charset
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "charset", t.target.value)
                    }
                }
            })]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Font size:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.model.fontSize,
                    expression: "model.fontSize",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number",
                    step: "0.5"
                },
                domProps: {
                    value: e.model.fontSize
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "fontSize", e._n(t.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Font family:"
                }
            }, [n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.fontFamily,
                    expression: "model.fontFamily"
                }],
                style: {
                    fontFamily: e.model.fontFamily
                },
                on: {
                    change: function (t) {
                        var n = Array.prototype.filter.call(t.target.options, function (e) {
                            return e.selected
                        }).map(function (e) {
                            return "_value" in e ? e._value : e.value
                        });
                        e.$set(e.model, "fontFamily", t.target.multiple ? n : n[0])
                    }
                }
            }, e._l(e.fonts, function (t) {
                return n("option", {
                    style: {
                        fontFamily: t
                    },
                    domProps: {
                        value: t
                    }
                }, [e._v("\n                    " + e._s(t) + "\n                ")])
            }))]), e._v(" "), e.canvasSelected ? [n("InputRow", {
                attrs: {
                    title: "Canvas width:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.model.width,
                    expression: "model.width",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number"
                },
                domProps: {
                    value: e.model.width
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "width", e._n(t.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Canvas height:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.model.height,
                    expression: "model.height",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number"
                },
                domProps: {
                    value: e.model.height
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "height", e._n(t.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Line height:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.model.lineHeight,
                    expression: "model.lineHeight",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number",
                    step: "0.1"
                },
                domProps: {
                    value: e.model.lineHeight
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "lineHeight", e._n(t.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Character width:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.model.charWidth,
                    expression: "model.charWidth",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number",
                    step: "0.1"
                },
                domProps: {
                    value: e.model.charWidth
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.model, "charWidth", e._n(t.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])] : e._e()], 2)], 2)
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        n(57)
    }
    var o = n(59),
        i = n(60),
        a = n(2),
        s = r,
        c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}, function (e, t, n) {
    var r = n(58);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("5b7a8074", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, ".filter-selector{background:#dcedc8}.filter-selector .input-row-label{min-width:45px;text-align:right}.filter-selector .filter-instance{margin-bottom:10px;border:1px solid #afafaf;padding:5px 10px;border-radius:2px}", ""])
}, function (e, t, n) {
    "use strict";
    var r = n(8),
        o = n(7),
        i = n(9);
    t.a = {
        name: "FilterSelector",
        components: {
            InputRow: r.a,
            PipelineSection: i.a
        },
        mixins: [o.a]
    }
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("PipelineSection", {
            staticClass: "filter-selector",
            attrs: {
                title: "Filters"
            }
        }, [n("template", {
            slot: "content"
        }, e._l(e.model, function (t, r) {
            return n("fieldset", {
                staticClass: "filter-instance"
            }, [n("legend", [e._v(e._s(t.title))]), e._v(" "), n("InputRow", {
                attrs: {
                    title: "Active:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.enabled,
                    expression: "filter.enabled"
                }],
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.enabled) ? e._i(t.enabled, null) > -1 : t.enabled
                },
                on: {
                    change: function (n) {
                        var r = t.enabled,
                            o = n.target,
                            i = !!o.checked;
                        if (Array.isArray(r)) {
                            var a = e._i(r, null);
                            o.checked ? a < 0 && (t.enabled = r.concat([null])) : a > -1 && (t.enabled = r.slice(0, a).concat(r.slice(a + 1)))
                        } else e.$set(t, "enabled", i)
                    }
                }
            })]), e._v(" "), "number" === t.widget ? n("InputRow", {
                attrs: {
                    title: "Value:"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: t.value,
                    expression: "filter.value",
                    modifiers: {
                        number: !0
                    }
                }],
                attrs: {
                    type: "number",
                    disabled: !t.enabled
                },
                domProps: {
                    value: t.value
                },
                on: {
                    input: function (n) {
                        n.target.composing || e.$set(t, "value", e._n(n.target.value))
                    },
                    blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })]) : e._e()], 1)
        }))], 2)
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    var r = n(62);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(1)("ddb42700", r, !0)
}, function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, "@import url(https://fonts.googleapis.com/css?family=Sora&display=swap|Danfo|Lato|Inconsolata|Roboto+Mono|Source+Code+Pro|Ubuntu+Mono|Cutive+Mono);", ""]), t.push([e.i, "*{box-sizing:border-box}body,pre{margin:0;padding:0}input:not([type=file]),select{border:1px solid #a1a6af;border-radius:4px;background-color:#fff;height:23px}input:not([type=file]){padding:0 5px;vertical-align:middle;font-size:14px}input:disabled{background:hsla(0,0%,39%,.1)}input:focus,select:focus{border-color:#7b7d82;outline:none}", ""])
}, function (e, t, n) {
    "use strict";
    var r = function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            attrs: {
                id: "app"
            }
        }, [n("div", {
            staticClass: "pipeline"
        }, [n("ReaderSelector", {
            attrs: {
                readers: e.readers,
                images: e.predefinedImages,
                videos: e.predefinedVideos
            },
            model: {
                value: e.reader,
                callback: function (t) {
                    e.reader = t
                },
                expression: "reader"
            }
        }), e._v(" "), n("FilterSelector", {
            model: {
                value: e.preFilters,
                callback: function (t) {
                    e.preFilters = t
                },
                expression: "preFilters"
            }
        }), e._v(" "), n("AASelector", {
            model: {
                value: e.aa,
                callback: function (t) {
                    e.aa = t
                },
                expression: "aa"
            }
        }), e._v(" "), n("FilterSelector", {
            model: {
                value: e.postFilters,
                callback: function (t) {
                    e.postFilters = t
                },
                expression: "postFilters"
            }
        }), e._v(" "), n("RendererSelector", {
            attrs: {
                renderers: e.renderers,
                fonts: e.fonts,
                charsets: e.charsets
            },
            model: {
                value: e.renderer,
                callback: function (t) {
                    e.renderer = t
                },
                expression: "renderer"
            }
        })], 1), e._v(" "), n("div", {
            staticClass: "screen"
        })])
    },
        o = [],
        i = {
            render: r,
            staticRenderFns: o
        };
    t.a = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        u = n(15),
        l = r(u),
        f = n(14),
        d = r(f),
        p = function (e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.url = e, n
            }
            return a(t, e), c(t, [{
                key: "onRead",
                value: function (e) {
                    var t = document.createElement("img");
                    t.crossOrigin = "Anonymous";
                    var n = function () {
                        o(), e.next(d.default.fromHTMLImageElement(t)), e.complete()
                    },
                        r = function (t) {
                            o(), e.error(t)
                        },
                        o = function () {
                            t.removeEventListener("load", n), t.removeEventListener("error", r)
                        };
                    t.addEventListener("load", n), t.addEventListener("error", r), t.complete && t.naturalWidth ? n() : this.url && (t.src = this.url)
                }
            }], [{
                key: "fromURL",
                value: function (e) {
                    return new t(e).read()
                }
            }, {
                key: "fromHTMLImage",
                value: function (e) {
                    return t.fromURL(e.src)
                }
            }]), t
        }(l.default);
    t.default = p
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        if (e) {
            if (e instanceof o.Subscriber) return e;
            if (e[i.rxSubscriber]) return e[i.rxSubscriber]()
        }
        return e || t || n ? new o.Subscriber(e, t, n) : new o.Subscriber(a.empty)
    }
    var o = n(13),
        i = n(19),
        a = n(18);
    t.toSubscriber = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.reduce(function (e, t) {
            return e.concat(t instanceof u.UnsubscriptionError ? t.errors : t)
        }, [])
    }
    var o = n(67),
        i = n(68),
        a = n(16),
        s = n(69),
        c = n(17),
        u = n(70),
        l = function () {
            function e(e) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, e && (this._unsubscribe = e)
            }
            return e.prototype.unsubscribe = function () {
                var e, t = !1;
                if (!this.closed) {
                    var n = this,
                        l = n._parent,
                        f = n._parents,
                        d = n._unsubscribe,
                        p = n._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var v = -1, h = f ? f.length : 0; l;) l.remove(this), l = ++v < h && f[v] || null;
                    if (a.isFunction(d)) {
                        var m = s.tryCatch(d).call(this);
                        m === c.errorObject && (t = !0, e = e || (c.errorObject.e instanceof u.UnsubscriptionError ? r(c.errorObject.e.errors) : [c.errorObject.e]))
                    }
                    if (o.isArray(p))
                        for (v = -1, h = p.length; ++v < h;) {
                            var y = p[v];
                            if (i.isObject(y)) {
                                var m = s.tryCatch(y.unsubscribe).call(y);
                                if (m === c.errorObject) {
                                    t = !0, e = e || [];
                                    var g = c.errorObject.e;
                                    g instanceof u.UnsubscriptionError ? e = e.concat(r(g.errors)) : e.push(g)
                                }
                            }
                        }
                    if (t) throw new u.UnsubscriptionError(e)
                }
            }, e.prototype.add = function (t) {
                if (!t || t === e.EMPTY) return e.EMPTY;
                if (t === this) return this;
                var n = t;
                switch (typeof t) {
                    case "function":
                        n = new e(t);
                    case "object":
                        if (n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if ("function" != typeof n._addParent) {
                            var r = n;
                            n = new e, n._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.")
                }
                return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
            }, e.prototype.remove = function (e) {
                var t = this._subscriptions;
                if (t) {
                    var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                }
            }, e.prototype._addParent = function (e) {
                var t = this,
                    n = t._parent,
                    r = t._parents;
                n && n !== e ? r ? -1 === r.indexOf(e) && r.push(e) : this._parents = [e] : this._parent = e
            }, e.EMPTY = function (e) {
                return e.closed = !0, e
            }(new e), e
        }();
    t.Subscription = l
}, function (e, t, n) {
    "use strict";
    t.isArray = Array.isArray || function (e) {
        return e && "number" == typeof e.length
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return null != e && "object" == typeof e
    }
    t.isObject = r
}, function (e, t, n) {
    "use strict";

    function r() {
        try {
            return i.apply(this, arguments)
        } catch (e) {
            return a.errorObject.e = e, a.errorObject
        }
    }

    function o(e) {
        return i = e, r
    }
    var i, a = n(17);
    t.tryCatch = o
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
        o = function (e) {
            function t(t) {
                e.call(this), this.errors = t;
                var n = Error.call(this, t ? t.length + " errors occurred during unsubscription:\n  " + t.map(function (e, t) {
                    return t + 1 + ") " + e.toString()
                }).join("\n  ") : "");
                this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message
            }
            return r(t, e), t
        }(Error);
    t.UnsubscriptionError = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    var o = n(12);
    t.getSymbolObservable = r, t.observable = r(o.root), t.$$observable = t.observable
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        o = n(73);
    r.Observable.prototype.map = o.map
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return this.lift(new a(e, t))
    }
    var o = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
        i = n(13);
    t.map = r;
    var a = function () {
        function e(e, t) {
            this.project = e, this.thisArg = t
        }
        return e.prototype.call = function (e, t) {
            return t.subscribe(new s(e, this.project, this.thisArg))
        }, e
    }();
    t.MapOperator = a;
    var s = function (e) {
        function t(t, n, r) {
            e.call(this, t), this.project = n, this.count = 0, this.thisArg = r || this
        }
        return o(t, e), t.prototype._next = function (e) {
            var t;
            try {
                t = this.project.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(i.Subscriber)
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        o = n(75);
    r.Observable.prototype.do = o._do, r.Observable.prototype._do = o._do
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return this.lift(new a(e, t, n))
    }
    var o = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
        i = n(13);
    t._do = r;
    var a = function () {
        function e(e, t, n) {
            this.nextOrObserver = e, this.error = t, this.complete = n
        }
        return e.prototype.call = function (e, t) {
            return t.subscribe(new s(e, this.nextOrObserver, this.error, this.complete))
        }, e
    }(),
        s = function (e) {
            function t(t, n, r, o) {
                e.call(this, t);
                var a = new i.Subscriber(n, r, o);
                a.syncErrorThrowable = !0, this.add(a), this.safeSubscriber = a
            }
            return o(t, e), t.prototype._next = function (e) {
                var t = this.safeSubscriber;
                t.next(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.next(e)
            }, t.prototype._error = function (e) {
                var t = this.safeSubscriber;
                t.error(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.error(e)
            }, t.prototype._complete = function () {
                var e = this.safeSubscriber;
                e.complete(), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.complete()
            }, t
        }(i.Subscriber)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : c(t)) && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : c(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s() {
        var e = document.createElement("canvas"),
            t = e.getContext("2d");
        return function (n) {
            var r = n.videoWidth,
                o = n.videoHeight;
            return e.width = r, e.height = o, t.drawImage(n, 0, 0, r, o), t.getImageData(0, 0, r, o)
        }
    }
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        l = n(15),
        f = r(l),
        d = n(14),
        p = r(d),
        v = function (e) {
            function t(e, n, r) {
                o(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.video = e, a.options = Object.assign({}, {
                    autoplay: !1
                }, r), a.video.autoplay = a.options.autoplay, a.captureFrame = n, a
            }
            return a(t, e), u(t, [{
                key: "onRead",
                value: function (e) {
                    var t = this,
                        n = this.video;
                    this.playbackLoop = function () {
                        n.paused || n.ended || (e.next(p.default.fromImageData(t.captureFrame(n))), requestAnimationFrame(t.playbackLoop))
                    }, this.onError = function () {
                        var r = n.src,
                            o = n.error,
                            i = o.code,
                            a = o.message;
                        n.removeEventListener("play", t.playbackLoop), e.error("Error occurred while trying to play " + r + ": : " + i + ", " + a)
                    }, n.addEventListener("error", this.onError), n.addEventListener("play", this.playbackLoop)
                }
            }, {
                key: "onDispose",
                value: function () {
                    this.video.removeEventListener("play", this.playbackLoop), this.video.removeEventListener("error", this.onError)
                }
            }], [{
                key: "fromVideoElement",
                value: function (e, n) {
                    return new t(e, s(), n).read()
                }
            }]), t
        }(f.default);
    t.default = v
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : l(t)) && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : l(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
        var t = new h(e);
        return function (e) {
            return t.render(e)
        }
    }

    function s(e) {
        var t = function (e) {
            var t = e.char;
            return '<span style="color: rgb(' + e.r + ", " + e.g + ", " + e.b + ')">' + t + "</span>"
        },
            n = u(t);
        return function (t) {
            return e.innerHTML = n(t), e
        }
    }

    function c(e) {
        var t = u(function (e) {
            return e.char
        });
        return function (n) {
            return e.textContent = t(n), e
        }
    }

    function u(e) {
        return function (t) {
            for (var n = t.width, r = t.data, o = "", i = n, a = 0, s = r.length; a < s; a++, i--) 0 === i && (o += "\n", i = n), o += e(r[a]);
            return o
        }
    }
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HTMLRenderer = t.SIMPLE_CHARSET = t.ASCII_CHARSET = void 0;
    var f = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        d = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(r)
        },
        p = n(10);
    Object.defineProperty(t, "ASCII_CHARSET", {
        enumerable: !0,
        get: function () {
            return p.ASCII_CHARSET
        }
    }), Object.defineProperty(t, "SIMPLE_CHARSET", {
        enumerable: !0,
        get: function () {
            return p.SIMPLE_CHARSET
        }
    }), t.default = a;
    var v = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(p),
        h = t.HTMLRenderer = function (e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, Object.assign({}, {
                    tagName: "pre",
                    fontSize: 7,
                    background: 'new rbga(0,0,0,0)',
                    color: "#000"
                }, e)));
                return n.el = n.options.el || document.createElement(n.options.tagName), n.el.style.fontSize = n.options.fontSize + "px", n.el.style.fontFamily = n.options.fontFamily, n.el.style.backgroundColor = n.options.background, n
            }
            return i(t, e), f(t, [{
                key: "render",
                value: function (e) {
                    return d(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, e), e.meta.colored || (this.el.style.color = this.options.color), (e.meta.colored ? s(this.el) : c(this.el))(e)
                }
            }]), t
        }(v.default)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = new Array(e.length), r = 255, i = 0, s = 0; s < e.length; s++) {
            var c = e[s],
                u = o(c, t);
            u < r && (r = u), u > i && (i = u), n[s] = {
                char: c,
                brightness: u
            }
        }
        return n.map(function (e) {
            var t = e.char,
                n = e.brightness;
            return {
                char: t,
                brightness: ~~(0, a.mapRange)(n, r, i, 0, 255)
            }
        }).sort(function (e, t) {
            return e.brightness < t.brightness ? -1 : e.brightness > t.brightness ? 1 : 0
        })
    }

    function o(e, t) {
        for (var n = i(e, t), r = n.getContext("2d"), o = r.getImageData(0, 0, n.width, n.height), a = new Uint32Array(o.data.buffer), s = 0, c = a.length, u = void 0, l = void 0, f = void 0, d = void 0; c--;) d = a[c], u = 255 & d, l = d >> 8 & 255, f = d >> 16 & 255, s += (u + l + f) / 3;
        return s /= n.width * n.height
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.fontFamily,
            r = void 0 === n ? "Sora" : n,//"monospace"
            o = s(),
            i = o.canvas,
            a = o.ctx;
        return a.fillStyle = "#fff", a.fillRect(0, 0, i.width, i.height), a.fillStyle = "#000", a.textBaseline = "top", a.textAlign = "left", a.font = "20px " + r, a.fillText(e, 0, 0), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var a = n(4),
        s = function (e) {
            return e._result = null,
                function () {
                    return e._result || (e._result = e())
                }
        }(function () {
            var e = document.createElement("canvas"),
                t = e.getContext("2d", {
                    alpha: !1
                });
            return e.width = 15, e.height = 25, {
                canvas: e,
                ctx: t
            }
        })
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
        var t = new v(e);
        return function (e) {
            return t.render(e)
        }
    }

    function s(e, t) {
        return function (n) {
            for (var r = n.data, o = n.width, i = t.charWidth, a = t.lineHeight, s = void 0, c = void 0, u = void 0, l = r.length; l--;) s = l % o, c = ~~(l / o), u = r[l], e.fillStyle = "rgb(" + u.r + ", " + u.g + ", " + u.b + ")", e.fillText(r[l].char, s * i, c * a)
        }
    }

    function c(e, t) {
        return function (n) {
            var r = n.data,
                o = n.width,
                i = t.lineHeight,
                a = void 0,
                s = "";
            e.fillStyle = t.color;
            for (var c = 0, u = r.length; c < u; c += o) {
                a = ~~(c / o), s = "";
                for (var l = c; l < c + o; l++) s += r[l].char;
                e.fillText(s, 0, a * i)
            }
        }
    }
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CanvasRenderer = t.SIMPLE_CHARSET = t.ASCII_CHARSET = void 0;
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
        f = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(r)
        },
        d = n(10);
    Object.defineProperty(t, "ASCII_CHARSET", {
        enumerable: !0,
        get: function () {
            return d.ASCII_CHARSET
        }
    }), Object.defineProperty(t, "SIMPLE_CHARSET", {
        enumerable: !0,
        get: function () {
            return d.SIMPLE_CHARSET
        }
    }), t.default = a;
    var p = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(d),
        v = t.CanvasRenderer = function (e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, Object.assign({}, {
                    fontSize: 7,
                    lineHeight: 7,
                    charWidth: 4.2,
                    width: 400,
                    height: 300,
                    gradient: ["#B0D4FC", "#FFCCDB", "#FFE2CC"], // sia branding color
                    background: 'rgba(0,0,0,0)',
                    color: "#000"
                }, e)));
                n.el = n.options.el || document.createElement("canvas");
                n.el.width = n.options.width;
                n.el.height = n.options.height;
                n.el.style.backgroundColor = n.options.background;
                n.ctx = n.el.getContext("2d");
                n.ctx.textBaseline = "top";
                n.ctx.textAlign = "start";
                n.ctx.font = n.options.fontSize + "px " + n.options.fontFamily;

                // Create gradient if specified
                if (n.options.gradient) {
                    n.createGradient(n.options.gradient);
                }
                return n;
            }
            return i(t, e), l(t, [{
                key: "render",
                value: function (e) {
                    return f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, e), this.clearCanvas(), (e.meta.colored ? s(this.ctx, this.options) : c(this.ctx, this.options))(e), this.el
                }
            }, {
                key: "clearCanvas",
                value: function () {
                    this.ctx.clearRect(0, 0, this.el.width, this.el.height);
                    if (this.gradient) {
                        this.ctx.fillStyle = this.gradient;
                    } else {
                        this.ctx.fillStyle = this.options.background;
                    }
                    this.ctx.fillRect(0, 0, this.el.width, this.el.height);
                }
            }, {
                key: "createGradient",
                value: function (colors) {
                    const gradient = this.ctx.createLinearGradient(0, 0, this.el.width, this.el.height);
                    colors.forEach((color, index) => {
                        gradient.addColorStop(index / (colors.length - 1), color);
                    });
                    this.gradient = gradient;
                }
            }]), t
        }(p.default);

}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        return function (t) {
            return i(t, e)
        }
    }

    function i(e, t) {
        for (var n = t.width, r = t.height, o = t.colored, i = void 0 !== o && o, c = e.width / n, l = e.height / r, d = 255, p = 0, v = new Array(n * r), h = 0, m = 0; m < r; m++)
            for (var y = 0; y < n; y++) {
                var g = a(e, ~~(y * c), ~~(m * l), c, l);
                g.mono > p && (p = g.mono), g.mono < d && (d = g.mono), v[h++] = g
            }
        var b = new u.default({
            width: n,
            height: r,
            data: v,
            colorProcessor: f.default,
            meta: {
                colored: i
            }
        });
        return s(b, d, p), b
    }

    function a(e, t, n, r, o) {
        for (var i = {
            r: 0,
            g: 0,
            b: 0
        }, a = 0, s = 0; s < o; s++)
            for (var c = 0; c < r; c++) p.default.addc(i, e.getAt(t + c, n + s)), a++;
        return p.default.div(i, a), {
            r: i.r,
            g: i.g,
            b: i.b,
            mono: p.default.getGrayscale(i)
        }
    }

    function s(e, t, n) {
        e.process(function (e) {
            e.mono = ~~(0, v.mapRange)(e.mono, t, n, 0, 255)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o, t.aa = i;
    var c = n(14),
        u = r(c),
        l = n(81),
        f = r(l),
        d = n(20),
        p = r(d),
        v = n(4)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4);
    t.default = {
        mul: function (e, t) {
            return e.mono = ~~(e.mono * t), this
        },
        add: function (e, t) {
            return e.mono += t, this
        },
        div: function (e, t) {
            this.mul(e, 1 / t)
        },
        inverse: function (e) {
            return e.mono = 255 - e.mono, this
        },
        desaturate: function (e) {
            return e.r = e.g = e.b = e.mono, e
        },
        clamp: function (e) {
            return e.mono = (0, r.clampByte)(e.mono), this
        }
    }
}, function (e, t, n) {
    "use strict";

    function r() {
        return function (e) {
            return o(e)
        }
    }

    function o(e) {
        return e.process(function (e, t) {
            t.inverse(e).clamp(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, t.inverse = o
}, function (e, t, n) {
    "use strict";

    function r() {
        return function (e) {
            return o(e)
        }
    }

    function o(e) {
        return e.process(function (e, t) {
            t.desaturate(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, t.desaturate = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return function (t) {
            return o(t, e)
        }
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (0, i.linearTransformation)(e, t, 0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, t.contrast = o;
    var i = n(21)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return function (t) {
            return o(t, e)
        }
    }

    function o(e, t) {
        return (0, a.default)(1, t || 0)(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, t.brightness = o;
    var i = n(21),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i)
}, function (e, t, n) {
    "use strict";
    var r = n(87),
        o = n(3),
        i = n(10),
        a = (n.n(i), Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        });
    t.a = {
        marylin: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.e,
                url: "./assets/marylin.jpg"
            }, e.aa = {
                width: 400,
                height: 120,
                colored: 0
            }, e.postFilters[o.f].enabled = !0, e.renderer.background = "#000", e.renderer.fontFamily = "Sora", e //"Ubuntu Mono", e
        },
        evangeline: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.e,
                url: "./assets/evangeline.jpg"
            }, e.aa = {
                width: 400,
                height: 123,
                colored: !0
            }, e.postFilters[o.f].enabled = !0, e.postFilters[o.c].enabled = !0, e.postFilters[o.a].enabled = !0, e.postFilters[o.a].value = 25, e.renderer.background = "#000", e.renderer.fontFamily = "Ubuntu Mono", e
        },
        monica: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.e,
                url: "./assets/monica.jpg"
            }, e.aa = {
                width: 330,
                height: 117,
                colored: !0
            }, e.postFilters[o.f].enabled = !0, e.renderer.type = o.b, e.renderer.charset = i.SIMPLE_CHARSET.join(""), e.renderer.width = ~~e.aa.width * e.renderer.charWidth, e.renderer.height = ~~e.aa.height * e.renderer.lineHeight, e.renderer.background = "#000", e.renderer.fontFamily = "Ubuntu Mono", e
        },
        mona: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.e,
                url: "./assets/mona.png"
            }, e.aa = {
                width: 170,
                height: 130,
                colored: !1
            }, e.renderer.fontFamily = "Cutive Mono", e.renderer.fontSize = 6, e
        },
        cat: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.i,
                url: "./assets/cat-1280x720.mp4"
            }, e.aa = {
                width: 260,
                height: 80,
                colored: !1
            }, e.renderer.type = o.b, e.renderer.width = 910, e.renderer.height = 560, e.renderer.fontFamily = "Ubuntu Mono", e
        },
        bbb: function () {
            var e = a({}, r.a);
            return e.reader = {
                type: o.i,
                url: "./assets/bbb_720x480.mp4"
            }, e.aa = {
                width: 260,
                height: 85,
                colored: !1
            }, e.renderer.type = o.b, e.renderer.width = 910, e.renderer.height = 600, e.renderer.fontFamily = "Ubuntu Mono", e
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o, i, a = n(3),
        s = n(10);
    n.n(s);
    t.a = {
        readers: [{
            type: a.g.IMAGE_READER,
            name: "Image"
        }, {
            type: a.g.VIDEO_READER,
            name: "Video"
        }],
        renderers: [
            //     {
            //     type: a.h.HTML_RENDERER,
            //     name: "HTML"
            // },
            {
                type: a.h.CANVAS_RENDERER,
                name: "Canvas"
            }],
        predefinedVideos: [{
            value: "./assets/bbb_720x480.mp4",
            text: "Big Buck Bunny 480p"
        }, {
            value: "./assets/Test_052224.mp4",
            text: "Sia Test Mov"
        }],
        predefinedImages: [{
            value: "./assets/wave.jpg",
            text: "Sia Wave"
        }, {
            value: "./assets/mona.png",
            text: "Mona"
        }, {
            value: "./assets/marylin.jpg",
            text: "Marylin"
        }, {
            value: "./assets/lenna.png",
            text: "Lenna"
        }, {
            value: "./assets/evangeline.jpg",
            text: "Evangeline"
        }, {
            value: "./assets/monica.jpg",
            text: "Monica"
        }],
        reader: [{
            type: a.g.IMAGE_READER,
            url: "./assets/marylin.jpg"
        }],
        preFilters: (o = {}, r(o, a.d.INVERSE_FILTER, {
            title: "Inverse",
            widget: "checkbox",
            enabled: !1
        }), r(o, a.d.DESATURATE_FILTER, {
            title: "Desaturate",
            widget: "checkbox",
            enabled: !1
        }), r(o, a.d.BRIGHTNESS_FILTER, {
            title: "Brightness",
            widget: "number",
            enabled: !1,
            value: 0
        }), r(o, a.d.CONTRAST_FILTER, {
            title: "Contrast",
            widget: "number",
            enabled: !1,
            value: 1
        }), o),
        aa: {
            width: 350,
            height: 110,
            colored: !1
        },
        postFilters: (i = {}, r(i, a.d.INVERSE_FILTER, {
            title: "Inverse",
            widget: "checkbox",
            enabled: !1
        }), r(i, a.d.DESATURATE_FILTER, {
            title: "Desaturate",
            widget: "checkbox",
            enabled: !1
        }), r(i, a.d.BRIGHTNESS_FILTER, {
            title: "Brightness",
            widget: "number",
            enabled: !1,
            value: 0
        }), r(i, a.d.CONTRAST_FILTER, {
            title: "Contrast",
            widget: "number",
            enabled: !1,
            value: 1
        }), i),
        renderer: {
            type: a.h.CANVAS_RENDERER,// default for canvas renderer
            // background: "#FFFFFF",
            gradient: ["#B0D4FC", "#FFCCDB", "#FFE2CC"],// sia gradient
            color: "#000000",
            charset: s.ASCII_CHARSET.join(""),
            fontSize: 7,
            fontFamily: "Sora",
            lineHeight: 7,
            charWidth: 4.2,
            width: 1400,
            height: 800
        },
        charsets: [{
            value: s.ASCII_CHARSET.join(""),
            title: "ASCII"
        }, {
            value: s.SIMPLE_CHARSET.join(""),
            title: "Simple"
        }],
        fonts: ["Sora", "Danfo", "Inconsolata", "Ubuntu Mono", "Roboto Mono", "Source Code Pro", "Cutive Mono", "monospace"]
    }
}]);
//# sourceMappingURL=playground.js.map