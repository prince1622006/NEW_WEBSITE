(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4661], {
    7299: function(e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            PrefetchKind: function() {
                return n
            },
            ACTION_REFRESH: function() {
                return o
            },
            ACTION_NAVIGATE: function() {
                return u
            },
            ACTION_RESTORE: function() {
                return l
            },
            ACTION_SERVER_PATCH: function() {
                return f
            },
            ACTION_PREFETCH: function() {
                return a
            },
            ACTION_FAST_REFRESH: function() {
                return c
            },
            ACTION_SERVER_ACTION: function() {
                return i
            },
            isThenable: function() {
                return s
            }
        });
        let o = "refresh"
          , u = "navigate"
          , l = "restore"
          , f = "server-patch"
          , a = "prefetch"
          , c = "fast-refresh"
          , i = "server-action";
        function s(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        (r = n || (n = {})).AUTO = "auto",
        r.FULL = "full",
        r.TEMPORARY = "temporary",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6286: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(5526),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    255: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return g
            }
        });
        let r = n(1351)
          , o = r._(n(959))
          , u = n(3504)
          , l = n(2086)
          , f = n(6537)
          , a = n(6425)
          , c = n(8709)
          , i = n(3571)
          , s = n(7463)
          , d = n(5616)
          , p = n(6286)
          , y = n(2085)
          , b = n(7299)
          , h = new Set;
        function v(e, t, n, r, o, u) {
            if (!u && !(0,
            l.isLocalURL)(t))
                return;
            if (!r.bypassPrefetchedCheck) {
                let o = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                  , u = t + "%" + n + "%" + o;
                if (h.has(u))
                    return;
                h.add(u)
            }
            let f = u ? e.prefetch(t, o) : e.prefetch(t, n, r);
            Promise.resolve(f).catch(e=>{}
            )
        }
        function _(e) {
            return "string" == typeof e ? e : (0,
            f.formatUrl)(e)
        }
        let O = o.default.forwardRef(function(e, t) {
            let n, r;
            let {href: f, as: h, children: O, prefetch: g=null, passHref: C, replace: E, shallow: P, scroll: T, locale: j, onClick: m, onMouseEnter: M, onTouchStart: R, legacyBehavior: A=!1, ...k} = e;
            n = O,
            A && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
            let I = o.default.useContext(i.RouterContext)
              , L = o.default.useContext(s.AppRouterContext)
              , S = null != I ? I : L
              , N = !I
              , x = !1 !== g
              , U = null === g ? b.PrefetchKind.AUTO : b.PrefetchKind.FULL
              , {href: w, as: K} = o.default.useMemo(()=>{
                if (!I) {
                    let e = _(f);
                    return {
                        href: e,
                        as: h ? _(h) : e
                    }
                }
                let[e,t] = (0,
                u.resolveHref)(I, f, !0);
                return {
                    href: e,
                    as: h ? (0,
                    u.resolveHref)(I, h) : t || e
                }
            }
            , [I, f, h])
              , F = o.default.useRef(w)
              , H = o.default.useRef(K);
            A && (r = o.default.Children.only(n));
            let D = A ? r && "object" == typeof r && r.ref : t
              , [V,q,z] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , B = o.default.useCallback(e=>{
                (H.current !== K || F.current !== w) && (z(),
                H.current = K,
                F.current = w),
                V(e),
                D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
            }
            , [K, D, w, z, V]);
            o.default.useEffect(()=>{
                S && q && x && v(S, w, K, {
                    locale: j
                }, {
                    kind: U
                }, N)
            }
            , [K, w, q, j, x, null == I ? void 0 : I.locale, S, N, U]);
            let G = {
                ref: B,
                onClick(e) {
                    A || "function" != typeof m || m(e),
                    A && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    S && !e.defaultPrevented && function(e, t, n, r, u, f, a, c, i) {
                        let {nodeName: s} = e.currentTarget
                          , d = "A" === s.toUpperCase();
                        if (d && (function(e) {
                            let t = e.currentTarget
                              , n = t.getAttribute("target");
                            return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !i && !(0,
                        l.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let p = ()=>{
                            let e = null == a || a;
                            "beforePopState"in t ? t[u ? "replace" : "push"](n, r, {
                                shallow: f,
                                locale: c,
                                scroll: e
                            }) : t[u ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        i ? o.default.startTransition(p) : p()
                    }(e, S, w, K, E, P, T, j, N)
                },
                onMouseEnter(e) {
                    A || "function" != typeof M || M(e),
                    A && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    S && (x || !N) && v(S, w, K, {
                        locale: j,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, N)
                },
                onTouchStart(e) {
                    A || "function" != typeof R || R(e),
                    A && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    S && (x || !N) && v(S, w, K, {
                        locale: j,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, N)
                }
            };
            if ((0,
            a.isAbsoluteUrl)(K))
                G.href = K;
            else if (!A || C || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== j ? j : null == I ? void 0 : I.locale
                  , t = (null == I ? void 0 : I.isLocaleDomain) && (0,
                p.getDomainLocale)(K, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                G.href = t || (0,
                y.addBasePath)((0,
                c.addLocale)(K, e, null == I ? void 0 : I.defaultLocale))
            }
            return A ? o.default.cloneElement(r, G) : o.default.createElement("a", {
                ...k,
                ...G
            }, n)
        })
          , g = O;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5616: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = n(959)
          , o = n(6031)
          , u = "function" == typeof IntersectionObserver
          , l = new Map
          , f = [];
        function a(e) {
            let {rootRef: t, rootMargin: n, disabled: a} = e
              , c = a || !u
              , [i,s] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(e=>{
                d.current = e
            }
            , []);
            (0,
            r.useEffect)(()=>{
                if (u) {
                    if (c || i)
                        return;
                    let e = d.current;
                    if (e && e.tagName) {
                        let r = function(e, t, n) {
                            let {id: r, observer: o, elements: u} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = f.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r)))
                                    return t;
                                let o = new Map
                                  , u = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: u,
                                    elements: o
                                },
                                f.push(n),
                                l.set(n, t),
                                t
                            }(n);
                            return u.set(e, t),
                            o.observe(e),
                            function() {
                                if (u.delete(e),
                                o.unobserve(e),
                                0 === u.size) {
                                    o.disconnect(),
                                    l.delete(r);
                                    let e = f.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    e > -1 && f.splice(e, 1)
                                }
                            }
                        }(e, e=>e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!i) {
                    let e = (0,
                    o.requestIdleCallback)(()=>s(!0));
                    return ()=>(0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [c, n, t, i, d.current]);
            let y = (0,
            r.useCallback)(()=>{
                s(!1)
            }
            , []);
            return [p, i, y]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    4661: function(e, t, n) {
        e.exports = n(255)
    }
}]);
