function removeFrame() {
    $(".frame").fadeOut(200), setTimeout(function () {
        $(".frame").remove()
    }, 800)
}

function toggle() {
    $("#ctrl").toggleClass("toggle"), $("#ctrl .link").toggleClass("show")
}

function addFrame(e, t) {
    var n = '<div style="top:{top}px; left:{left}px" class="frame"><a class="close" href="#" target="_self"><i class="iconfont icon-close"></i></a><a class="go" href="{url}" target="_blank"><i class="iconfont icon-external-link"></i></a></div>',
        r = $(t).offset().top, o = $(t).offset().left;
    n = n.replace("{url}", e).replace("{left}", o).replace("{top}", r), $("body").append(n), $("a.close").click(function () {
        return removeFrame(), !1
    }), setTimeout(function () {
        $(".frame").append('<iframe frameborder=0 src="' + e + '"></iframe>')
    }, 1e3)
}

function bg(e, t) {
    var n = "https://earth.studylong.workers.dev";
    void 0 !== t && (n = t), e && (n = n + "?v=" + Math.random(), $("#bg-cover").removeClass("loaded")), e || 0 < $("img.bg").length && $("img.bg").remove();
    var r = new Image;
    r.src = n, r.classList.add("bg"), r.id = "bgc", r.onload = function () {
        $("#bg-cover").before(r), $("#bg-cover").addClass("loaded")
    }
}

function hitokoto() {
    $("p.hitokoto").html("加载中"), $.ajax({
        url: "https://v1.hitokoto.cn/?c=a&encode=json",
        async: !0,
        success: function (e) {
            $("p.hitokoto").html(e.hitokoto + " - " + e.from)
        }
    })
}

function initApp() {
    $(".link.top:not(.no-iframe)").click(function () {
        return "ontouchstart" in document || ($(".link").attr("target", "_self"), addFrame($(this).attr("href"), this), !1)
    }), $(".link").on("touchstart", function () {
        $(this).addClass("hover")
    }), $(".link").on("touchend", function () {
        $(this).removeClass("hover")
    })
}

!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], k = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, o = t.indexOf, n = {},
        i = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), m = {}, y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, x = function (e) {
            return null != e && e === e.window
        }, c = {type: !0, src: !0, noModule: !0};

    function b(e, t, n) {
        var r, o = (t = t || k).createElement("script");
        if (o.text = e, n) for (r in c) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }

    var E = function (e, t) {
        return new E.fn.init(e, t)
    }, f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    E.fn = E.prototype = {
        jquery: "3.3.1", constructor: E, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return E.each(this, e)
        }, map: function (n) {
            return this.pushStack(E.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, E.extend = E.fn.extend = function () {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (o = Array.isArray(r))) ? (i = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && E.isPlainObject(n) ? n : {}, a[t] = E.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e) || (t = r(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            b(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(f, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        }, map: function (e, t, n) {
            var r, o, i = 0, a = [];
            if (p(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return g.apply([], a)
        }, guid: 1, support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, i, o, h, f, g, w, u, l, T, C, a, k, v, s, c, m, E = "sizzle" + 1 * new Date, y = n.document, S = 0,
            r = 0, p = ae(), x = ae(), D = ae(), N = function (e, t) {
                return e === t && (l = !0), 0
            }, j = {}.hasOwnProperty, t = [], A = t.pop, q = t.push, L = t.push, H = t.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            I = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"), F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"), _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"), X = new RegExp(I),
            U = new RegExp("^" + M + "$"), V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                T()
            }, oe = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(t = H.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (n) {
            L = {
                apply: t.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, r) {
            var o, i, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, k)) {
                if (11 !== p && (u = J.exec(e))) if (o = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(o))) return n;
                        if (a.id === o) return n.push(a), n
                    } else if (f && (a = f.getElementById(o)) && m(t, a) && a.id === o) return n.push(a), n
                } else {
                    if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(o)), n
                }
                if (d.qsa && !D[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = E), i = (l = h(e)).length; i--;) l[i] = "#" + s + " " + me(l[i]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return L.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                    } finally {
                        s === E && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, r)
        }

        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[E] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(a) {
            return se(function (i) {
                return i = +i, se(function (e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in d = ie.support = {}, o = ie.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, T = ie.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : y;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, k = !o(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ue(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function (e) {
                return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(Z, ee);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                        for (o = t.getElementsByName(e), r = 0; i = o[r++];) if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" !== e) return i;
                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                return r
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + E + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), m = t || Q.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, N = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && m(y, e) ? -1 : t === C || t.ownerDocument === y && m(y, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i) return e === C ? -1 : t === C ? 1 : o ? -1 : i ? 1 : u ? O(u, e) - O(u, t) : 0;
                if (o === i) return ce(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? ce(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
            }), C
        }, ie.matches = function (e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && k && !D[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < ie(t, C, null, [e]).length
        }, ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), m(e, t)
        }, ie.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
            return void 0 !== r ? r : d.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, ie.escape = function (e) {
            return (e + "").replace(te, ne)
        }, ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function (e) {
            var t, n = [], r = 0, o = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(N), l) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
        }, i = ie.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[r++];) n += i(t);
            return n
        }, (b = ie.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, o) {
                    return function (e) {
                        var t = ie.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var m = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, o, i, a, s, u, l = m !== y ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (m) {
                                for (; l;) {
                                    for (a = e; a = a[l];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                for (d = (s = (r = (o = (i = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();) if (1 === a.nodeType && ++d && a === e) {
                                    o[h] = [S, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (o = (i = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((o = (i = a[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [S, d]), a !== e));) ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, i) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return a[E] ? a(i) : 1 < a.length ? (t = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                        for (var n, r = a(e, i), o = r.length; o--;) e[n = O(e, r[o])] = !(t[n] = r[o])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: se(function (e) {
                    var r = [], o = [], s = f(e.replace(F, "$1"));
                    return s[E] ? se(function (e, t, n, r) {
                        for (var o, i = s(e, null, r, []), a = e.length; a--;) (o = i[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                    }
                }), has: se(function (t) {
                    return function (e) {
                        return 0 < ie(t, e).length
                    }
                }), contains: se(function (t) {
                    return t = t.replace(Z, ee), function (e) {
                        return -1 < (e.textContent || e.innerText || i(e)).indexOf(t)
                    }
                }), lang: se(function (n) {
                    return U.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = fe(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = pe(e);

        function ve() {
        }

        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, o, i, a = [S, p];
                if (n) {
                    for (; e = e[u];) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else for (; e = e[u];) if (1 === e.nodeType || f) if (o = (i = e[E] || (e[E] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = o[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                    if ((o[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function xe(o) {
            return 1 < o.length ? function (e, t, n) {
                for (var r = o.length; r--;) if (!o[r](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function be(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
            return a
        }

        function we(d, h, g, v, m, e) {
            return v && !v[E] && (v = we(v)), m && !m[E] && (m = we(m, e)), se(function (e, t, n, r) {
                var o, i, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) for (o = be(p, u), v(o, [], n, r), i = o.length; i--;) (a = o[i]) && (p[u[i]] = !(f[u[i]] = a));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (o = [], i = p.length; i--;) (a = p[i]) && o.push(f[i] = a);
                            m(null, p = [], o, r)
                        }
                        for (i = p.length; i--;) (a = p[i]) && -1 < (o = m ? O(e, a) : s[i]) && (e[o] = !(t[o] = a))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : L.apply(t, p)
            })
        }

        function Te(e) {
            for (var o, t, n, r = e.length, i = b.relative[e[0].type], a = i || b.relative[" "], s = i ? 1 : 0, u = ye(function (e) {
                return e === o
            }, a, !0), l = ye(function (e) {
                return -1 < O(o, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !i && (n || t !== w) || ((o = t).nodeType ? u(e, t, n) : l(e, t, n));
                return o = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [ye(xe(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                    for (n = ++s; n < r && !b.relative[e[n].type]; n++) ;
                    return we(1 < s && xe(c), 1 < s && me(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(F, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && me(e))
                }
                c.push(t)
            }
            return xe(c)
        }

        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, h = ie.tokenize = function (e, t) {
            var n, r, o, i, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (i in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(F, " ")
                }), a = a.slice(n.length)), b.filter) !(r = V[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: i,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : x(e, s).slice(0)
        }, f = ie.compile = function (e, t) {
            var n, v, m, y, x, r, o = [], i = [], a = D[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;) (a = Te(t[n]))[E] ? o.push(a) : i.push(a);
                (a = D(e, (v = i, m = o, y = 0 < m.length, x = 0 < v.length, r = function (e, t, n, r, o) {
                    var i, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", o),
                        h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (o && (w = t === C || t || o); l !== g && null != (i = d[l]); l++) {
                        if (x && i) {
                            for (a = 0, t || i.ownerDocument === C || (T(i), n = !k); s = v[a++];) if (s(i, t || C, n)) {
                                r.push(i);
                                break
                            }
                            o && (S = h)
                        }
                        y && ((i = !s && i) && u--, e && c.push(i))
                    }
                    if (u += l, y && l !== u) {
                        for (a = 0; s = m[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = A.call(r));
                            f = be(f)
                        }
                        L.apply(r, f), o && !e && 0 < f.length && 1 < u + m.length && ie.uniqueSort(r)
                    }
                    return o && (S = h, w = p), c
                }, y ? se(r) : r))).selector = e
            }
            return a
        }, g = ie.select = function (e, t, n, r) {
            var o, i, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && k && b.relative[i[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(i[0].type) && ge(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && me(i))) return L.apply(n, r), n;
                    break
                }
            }
            return (l || f(e, c))(r, t, !k, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(N).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le($, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
    var h = function (e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && E(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, S = E.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return y(n) ? E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function (e) {
            return -1 < o.call(n, e) !== r
        }) : E.filter(n, e, r)
    }

    E.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function (e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < r; t++) if (E.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, o[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && S.test(e) ? E(e) : e || [], !1).length
        }
    });
    var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || A, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), N.test(r[1]) && E.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (o = k.getElementById(r[2])) && (this[0] = o, this.length = 1), this
    }).prototype = E.fn, A = E(k);
    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    E.fn.extend({
        has: function (e) {
            var t = E(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && E(e);
            if (!S.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                i.push(n);
                break
            }
            return this.pushStack(1 < i.length ? E.uniqueSort(i) : i)
        }, index: function (e) {
            return e ? "string" == typeof e ? o.call(E(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function (r, o) {
        E.fn[r] = function (e, t) {
            var n = E.map(this, o, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var $ = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function R(e, t, n, r) {
        var o;
        try {
            e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    E.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match($) || [], function (e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var o, t, i, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, i = o = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
            r.memory || (t = !1), o = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !o && (l = s.length - 1, u.push(t)), function n(e) {
                    E.each(e, function (e, t) {
                        y(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !o && c()), this
            }, remove: function () {
                return E.each(arguments, function (e, t) {
                    for (var n; -1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || o || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return f
    }, E.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                o = "pending", a = {
                    state: function () {
                        return o
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var o = arguments;
                        return E.Deferred(function (r) {
                            E.each(i, function (e, t) {
                                var n = y(o[t[4]]) && o[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(o, i, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(o < u)) {
                                        if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, l(u, i, P, s), l(u, i, M, s)) : (u++, t.call(e, l(u, i, P, s), l(u, i, M, s), l(u, i, P, i.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== M && (n = void 0, r = [e]), i.rejectWith(n, r))
                                    }
                                };
                                o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return E.Deferred(function (e) {
                            i[0][3].add(l(0, e, y(r) ? r : P, e.notifyWith)), i[1][3].add(l(0, e, y(t) ? t : P)), i[2][3].add(l(0, e, y(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? E.extend(e, a) : a
                    }
                }, s = {};
            return E.each(i, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), o = s.call(arguments), i = E.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || i.resolveWith(r, o)
                }
            };
            if (n <= 1 && (R(e, i.done(a(t)).resolve, i.reject, !n), "pending" === i.state() || y(o[t] && o[t].then))) return i.then();
            for (; t--;) R(o[t], a(t), i.reject);
            return i.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && I.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var W = E.Deferred();

    function F() {
        k.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), E.ready()
    }

    E.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(k, [E]))
        }
    }), E.ready.then = W.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
    var B = function (e, t, n, r, o, i, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in o = !0, n) B(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, y(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
            return l.call(E(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(_, "ms-").replace(z, X)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = E.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[U(t)] = n; else for (r in t) o[U(r)] = t[r];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match($) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    E.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function (n, e) {
            var t, r, o, i = this[0], a = i && i.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : B(this, function (e) {
                var t;
                if (i && void 0 === e) {
                    if (void 0 !== (t = Q.get(i, n))) return t;
                    if (void 0 !== (t = Z(i, n))) return t
                } else this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Q.get(i), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), Z(i, r, o[r]));
                Y.set(i, "hasDataAttrs", !0)
            }
            return o
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), E.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t), r = n.length, o = n.shift(), i = E._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                E.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                E.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, o = E.Deferred(), i = this, a = this.length, s = function () {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Y.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && E.contains(e.ownerDocument, e) && "none" === E.css(e, "display")
        }, oe = function (e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
            return o
        };

    function ie(e, t, n, r) {
        var o, i, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return E.css(e, t, "")
            }, u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) E.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }

    var ae = {};

    function se(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++) (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = Y.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && re(r) && (o[i] = (f = l = u = void 0, l = (s = r).ownerDocument, c = s.nodeName, (f = ae[c]) || (u = l.body.appendChild(l.createElement(c)), f = E.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), ae[c] = f)))) : "none" !== n && (o[i] = "none", Y.set(r, "display", n)));
        var s, u, l, c, f;
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e
    }

    E.fn.extend({
        show: function () {
            return se(this, !0)
        }, hide: function () {
            return se(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                re(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i, le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ce = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? E.merge([e], n) : n
    }

    function de(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var he, ge, ve = /<|&#?\w+;/;

    function me(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === w(i)) E.merge(p, i.nodeType ? [i] : i); else if (ve.test(i)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (le.exec(i) || ["", ""])[1].toLowerCase(), u = fe[s] || fe._default, a.innerHTML = u[1] + E.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(i));
        for (f.textContent = "", d = 0; i = p[d++];) if (r && -1 < E.inArray(i, r)) o && o.push(i); else if (l = E.contains(i.ownerDocument, i), a = pe(f.appendChild(i), "script"), l && de(a), n) for (c = 0; i = a[c++];) ce.test(i.type || "") && n.push(i);
        return f
    }

    he = k.createDocumentFragment().appendChild(k.createElement("div")), (ge = k.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var ye = k.documentElement, xe = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ce() {
        return !1
    }

    function ke() {
        try {
            return k.activeElement
        } catch (e) {
        }
    }

    function Ee(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ce; else if (!o) return e;
        return 1 === i && (a = o, (o = function (e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
            E.event.add(this, t, o, r, n)
        })
    }

    E.event = {
        global: {}, add: function (t, e, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (v) for (n.handler && (n = (i = n).handler, o = i.selector), o && E.find.matchesSelector(ye, o), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
                return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match($) || [""]).length; l--;) d = g = (s = we.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && E.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
        }, remove: function (e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match($) || [""]).length; l--;) if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, o, i, a, s = E.event.fix(e), u = new Array(arguments.length),
                l = (Y.get(this, "events") || {})[s.type] || [], c = E.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = E.event.handlers.call(this, s, l), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((E.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < E(o, this).index(l) : E.find(o, this, null, [l]).length), a[o] && i.push(r);
                i.length && s.push({elem: l, handlers: i})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: y(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[E.expando] ? e : new E.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ke() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ke() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return D(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        E.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), E.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
                E.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (i = Y.access(e), a = Y.set(t, i), l = i.events)) for (o in delete a.handle, a.events = {}, l) for (n = 0, r = l[o].length; n < r; n++) E.event.add(t, o, l[o][n]);
            Q.hasData(e) && (s = Q.access(e), u = E.extend({}, s), Q.set(t, u))
        }
    }

    function Oe(n, r, o, i) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = y(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && Ne.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Oe(t, r, o, i)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (s = (a = E.map(pe(e, "script"), qe)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, pe(u, "script"))), o.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], ce.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && E._evalUrl(u.src) : b(u.textContent.replace(je, ""), l, u))
        }
        return n
    }

    function $e(e, t, n) {
        for (var r, o = t ? E.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || E.cleanData(pe(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && de(pe(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    E.extend({
        htmlPrefilter: function (e) {
            return e.replace(Se, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(!0), f = E.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = pe(c), r = 0, o = (i = pe(e)).length; r < o; r++) s = i[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && ue.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (i = i || pe(e), a = a || pe(c), r = 0, o = i.length; r < o; r++) He(i[r], a[r]); else He(e, c);
            return 0 < (a = pe(c, "script")).length && de(a, !f && pe(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, o = E.event.special, i = 0; void 0 !== (n = e[i]); i++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) o[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), E.fn.extend({
        detach: function (e) {
            return $e(this, e, !0)
        }, remove: function (e) {
            return $e(this, e)
        }, text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Oe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Oe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Oe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Oe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(pe(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t)
            })
        }, html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Oe(this, arguments, function (e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        E.fn[e] = function (e) {
            for (var t, n = [], r = E(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), E(r[i])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Me = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Re = new RegExp(ne.join("|"), "i");

    function Ie(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || Me(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || E.contains(e.ownerDocument, e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Re.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function We(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", i = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", ye.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, o, i, a, s = k.createElement("div"), u = k.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(m, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), i
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), a
            }, scrollboxSize: function () {
                return e(), o
            }
        }))
    }();
    var Fe = /^(none|table(?!-c[ea]).+)/, Be = /^--/,
        _e = {position: "absolute", visibility: "hidden", display: "block"},
        ze = {letterSpacing: "0", fontWeight: "400"}, Xe = ["Webkit", "Moz", "ms"], Ue = k.createElement("div").style;

    function Ve(e) {
        var t = E.cssProps[e];
        return t || (t = E.cssProps[e] = function (e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;) if ((e = Xe[n] + t) in Ue) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, o)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, o))) : (u += E.css(e, "padding" + ne[a], !0, o), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, o) : s += E.css(e, "border" + ne[a] + "Width", !0, o));
        return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))), u
    }

    function Qe(e, t, n) {
        var r = Me(e), o = Ie(e, t, r), i = "border-box" === E.css(e, "boxSizing", !1, r), a = i;
        if (Pe.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return a = a && (m.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === E.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Ye(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
    }

    function Je(e, t, n, r, o) {
        return new Je.prototype.init(e, t, n, r, o)
    }

    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ie(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = U(t), u = Be.test(t), l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" == (i = typeof n) && (o = te.exec(n)) && o[1] && (n = ie(e, t, o), i = "number"), null != n && n == n && ("number" === i && (n += o && o[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var o, i, a, s = U(t);
            return Be.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ie(e, t, r)), "normal" === o && t in ze && (o = ze[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), E.each(["height", "width"], function (e, s) {
        E.cssHooks[s] = {
            get: function (e, t, n) {
                if (t) return !Fe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, s, n) : oe(e, _e, function () {
                    return Qe(e, s, n)
                })
            }, set: function (e, t, n) {
                var r, o = Me(e), i = "border-box" === E.css(e, "boxSizing", !1, o), a = n && Ye(e, s, n, i, o);
                return i && m.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - Ye(e, s, "border", !1, o) - .5)), a && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), Ge(0, t, a)
            }
        }
    }), E.cssHooks.marginLeft = We(m.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({margin: "", padding: "", border: "Width"}, function (o, i) {
        E.cssHooks[o + i] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== o && (E.cssHooks[o + i].set = Ge)
    }), E.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), o = t.length; a < o; a++) i[t[a]] = E.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = Je).prototype = {
        constructor: Je, init: function (e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (E.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, E.fx = Je.prototype.init, E.fx.step = {};
    var Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

    function ot() {
        Ze && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, E.fx.interval), E.fx.tick())
    }

    function it() {
        return C.setTimeout(function () {
            Ke = void 0
        }), Ke = Date.now()
    }

    function at(e, t) {
        var n, r = 0, o = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ne[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function st(e, t, n) {
        for (var r, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r
    }

    function ut(i, e, t) {
        var n, a, r = 0, o = ut.prefilters.length, s = E.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = Ke || it(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, o = l.tweens.length; r < o; r++) l.tweens[r].run(n);
            return s.notifyWith(i, [l, n, t]), n < 1 && o ? t : (o || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1)
        }, l = s.promise({
            elem: i,
            props: E.extend({}, e),
            opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ke || it(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = E.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this
            }
        }), c = l.props;
        for (function (e, t) {
            var n, r, o, i, a;
            for (n in e) if (o = t[r = U(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o
        }(c, l.opts.specialEasing); r < o; r++) if (n = ut.prefilters[r].call(l, i, c, l.opts)) return y(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, st, l), y(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    E.Animation = E.extend(ut, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ie(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match($)).length; r < o; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && re(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (o = t[r], nt.test(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || E.style(e, r)
            }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (se([e], !0), l = e.style.display || l, c = E.css(e, "display"), se([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {display: l}), i && (v.hidden = !g), g && se([e], !0), p.done(function () {
                for (r in g || se([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
            })), u = st(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }), E.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            y(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(re).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var o = E.isEmptyObject(t), i = E.speed(e, n, r), a = function () {
                var e = ut(this, E.extend({}, t), i);
                (o || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        }, stop: function (o, e, i) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof o && (i = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0, t = null != o && o + "queueHooks", n = E.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && rt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                !e && i || E.dequeue(this, o)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], o = E.timers, i = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (e, r) {
        var o = E.fn[r];
        E.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(at(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        E.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function () {
        var e, t = 0, n = E.timers;
        for (Ke = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), Ke = void 0
    }, E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        Ze || (Ze = !0, ot())
    }, E.fx.stop = function () {
        Ze = null
    }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, et = k.createElement("input"), tt = k.createElement("select").appendChild(k.createElement("option")), et.type = "checkbox", m.checkOn = "" !== et.value, m.optSelected = tt.selected, (et = k.createElement("input")).value = "t", et.type = "radio", m.radioValue = "t" === et.value;
    var lt, ct = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!m.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, o = t && t.match($);
            if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n)
        }
    }), lt = {
        set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ct[t] || E.find.attr;
        ct[t] = function (e, t, n) {
            var r, o, i = t.toLowerCase();
            return n || (o = ct[i], ct[i] = r, r = null != a(e, t, n) ? i : null, ct[i] = o), r
        }
    });
    var ft = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match($) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
    }

    E.fn.extend({
        prop: function (e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), m.optSelected || (E.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (t) {
            var e, n, r, o, i, a, s, u = 0;
            if (y(t)) return this.each(function (e) {
                E(this).addClass(t.call(this, e, ht(this)))
            });
            if ((e = gt(t)).length) for (; n = this[u++];) if (o = ht(n), r = 1 === n.nodeType && " " + dt(o) + " ") {
                for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                o !== (s = dt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, o, i, a, s, u = 0;
            if (y(t)) return this.each(function (e) {
                E(this).removeClass(t.call(this, e, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = gt(t)).length) for (; n = this[u++];) if (o = ht(n), r = 1 === n.nodeType && " " + dt(o) + " ") {
                for (a = 0; i = e[a++];) for (; -1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                o !== (s = dt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (o, t) {
            var i = typeof o, a = "string" === i || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function (e) {
                E(this).toggleClass(o.call(this, e, ht(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) for (t = 0, n = E(this), r = gt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== o && "boolean" !== i || ((e = ht(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Y.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + dt(ht(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    E.fn.extend({
        val: function (n) {
            var r, e, o, t = this[0];
            return arguments.length ? (o = y(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : dt(E.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                        if (t = E(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, o = e.options, i = E.makeArray(t), a = o.length; a--;) ((r = o[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, m.checkOn || (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/, yt = function (e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function (e, t, n, r) {
            var o, i, a, s, u, l, c, f, p = [n || k], d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (i = f = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (i = i.parentNode); i; i = i.parentNode) p.push(i), a = i;
                    a === (n.ownerDocument || k) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (o = 0; (i = p[o++]) && !e.isPropagationStopped();) f = i, e.type = 1 < o ? s : c.bindType || d, (l = (Y.get(i, "events") || {})[e.type] && Y.get(i, "handle")) && l.apply(i, t), (l = u && i[u]) && l.apply && V(i) && (e.result = l.apply(i, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && y(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, yt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, yt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = E.extend(new E.Event, n, {type: e, isSimulated: !0});
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                E.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), m.focusin || E.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var o = function (e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = Y.access(e, r);
                t || e.addEventListener(n, o, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, o, !0), Y.remove(e, r))
            }
        }
    });
    var xt = C.location, bt = Date.now(), wt = /\?/;
    E.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var Tt = /\[\]$/, Ct = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;

    function St(n, e, r, o) {
        var t;
        if (Array.isArray(e)) E.each(e, function (e, t) {
            r || Tt.test(n) ? o(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
        }); else if (r || "object" !== w(e)) o(n, e); else for (t in e) St(n + "[" + t + "]", e[t], r, o)
    }

    E.param = function (e, t) {
        var n, r = [], o = function (e, t) {
            var n = y(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e) St(n, e[n], t, o);
        return r.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Et.test(this.nodeName) && !kt.test(e) && (this.checked || !ue.test(e))
            }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                    return {name: t.name, value: e.replace(Ct, "\r\n")}
                }) : {name: t.name, value: n.replace(Ct, "\r\n")}
            }).get()
        }
    });
    var Dt = /%20/g, Nt = /#.*$/, jt = /([?&])_=[^&]*/, At = /^(.*?):[ \t]*([^\r\n]*)$/gm, qt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//, Ht = {}, Ot = {}, $t = "*/".concat("*"), Pt = k.createElement("a");

    function Mt(i) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, o = e.toLowerCase().match($) || [];
            if (y(t)) for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }

    function Rt(t, o, i, a) {
        var s = {}, u = t === Ot;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function (e, t) {
                var n = t(o, i, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (o.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(o.dataTypes[0]) || !s["*"] && l("*")
    }

    function It(e, t) {
        var n, r, o = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }

    Pt.href = xt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? It(It(e, E.ajaxSettings), t) : It(E.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(Ht),
        ajaxTransport: Mt(Ot),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, o, i, v = E.ajaxSetup({}, t), m = v.context || v,
                y = v.context && (m.nodeType || m.jquery) ? E(m) : E.event, x = E.Deferred(),
                b = E.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) for (n = {}; t = At.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || xt.href) + "").replace(Lt, xt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match($) || [""], null == v.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Pt.protocol + "//" + Pt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = E.param(v.data, v.traditional)), Rt(Ht, v, t, T), h) return T;
            for (o in (g = E.event && v.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !qt.test(v.type), f = v.url.replace(Nt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Dt, "+")) : (i = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (wt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(jt, "$1"), i = (wt.test(f) ? "&" : "?") + "_=" + bt++ + i), v.url = f + i), v.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Rt(Ot, v, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var o, i, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (o in s) if (s[o] && s[o].test(r)) {
                        u.unshift(o);
                        break
                    }
                    if (u[0] in n) i = u[0]; else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i]
                }(v, T, n)), s = function (e, t, n, r) {
                    var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i])) for (o in l) if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + i}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, o), o ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, i = s.data, o = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", o ? x.resolveWith(m, [i, l, T]) : x.rejectWith(m, [T, l, a]), T.statusCode(w), w = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [T, v, o ? i : a]), b.fireWith(m, [T, l]), g && (y.trigger("ajaxComplete", [T, v]), --E.active || E.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function (e, o) {
        E[o] = function (e, t, n, r) {
            return y(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function (e) {
        return E.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, E.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return y(n) ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = E(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = y(t);
            return this.each(function (e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Wt = {0: 200, 1223: 204}, Ft = E.ajaxSettings.xhr();
    m.cors = !!Ft && "withCredentials" in Ft, m.ajax = Ft = !!Ft, E.ajaxTransport(function (o) {
        var i, a;
        if (m.cors || Ft && !o.crossDomain) return {
            send: function (e, t) {
                var n, r = o.xhr();
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                i = function (e) {
                    return function () {
                        i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Wt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        i && a()
                    })
                }, i = i("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (i) throw e
                }
            }, abort: function () {
                i && i()
            }
        }
    }), E.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function (n) {
        var r, o;
        if (n.crossDomain) return {
            send: function (e, t) {
                r = E("<script>").prop({charset: n.scriptCharset, src: n.url}).on("load error", o = function (e) {
                    r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(r[0])
            }, abort: function () {
                o && o()
            }
        }
    });
    var Bt, _t = [], zt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = _t.pop() || E.expando + "_" + bt++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, o, i,
            a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(zt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return i || E.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = C[r], C[r] = function () {
            i = arguments
        }, n.always(function () {
            void 0 === o ? E(C).removeProp(r) : C[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, _t.push(r)), i && y(o) && o(i[0]), i = o = void 0
        }), "script"
    }), m.createHTMLDocument = ((Bt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), E.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(r)) : t = k), i = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = me([e], t, i), i && i.length && E(i).remove(), E.merge([], o.childNodes)));
        var r, o, i
    }, E.fn.load = function (e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return -1 < s && (r = dt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function (e, t, n) {
            var r, o, i, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), i = E.css(e, "top"), u = E.css(e, "left"), o = ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(i) || 0, parseFloat(u) || 0), y(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], o = {top: 0, left: 0};
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - E.css(r, "marginTop", !0),
                    left: t.left - o.left - E.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, o) {
        var i = "pageYOffset" === o;
        E.fn[t] = function (e) {
            return B(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = We(m.pixelPosition, function (e, t) {
            if (t) return t = Ie(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({Height: "height", Width: "width"}, function (a, s) {
        E.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, i) {
            E.fn[i] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    o = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        E.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), E.proxy = function (e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (o = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, o
    }, E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = D, E.isFunction = y, E.isWindow = x, E.camelCase = U, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Xt = C.jQuery, Ut = C.$;
    return E.noConflict = function (e) {
        return C.$ === E && (C.$ = Ut), e && C.jQuery === E && (C.jQuery = Xt), E
    }, e || (C.jQuery = C.$ = E), E
}), $(document).ready(function () {
    initApp(), "ontouchstart" in document || setTimeout(function () {
    }, 500)
});