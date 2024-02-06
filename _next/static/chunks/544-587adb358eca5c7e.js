(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[544], {
    7154: function(t, e, n) {
        "use strict";
        function i(t, e) {
            var n;
            return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)),
            t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]),
            Array.from(t || [])
        }
        n.d(e, {
            I: function() {
                return i
            }
        })
    },
    7933: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return i
            }
        });
        let i = t=>"function" == typeof t
    },
    8203: function(t, e, n) {
        "use strict";
        n.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return r
            }
        });
        var i = function() {}
          , r = function() {}
    },
    8545: function(t, e, n) {
        "use strict";
        var i, r;
        t.exports = (null == (i = n.g.process) ? void 0 : i.env) && "object" == typeof (null == (r = n.g.process) ? void 0 : r.env) ? n.g.process : n(8244)
    },
    8244: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, n, i, r = t.exports = {};
                    function o() {
                        throw Error("setTimeout has not been defined")
                    }
                    function s() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === o || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (n) {
                            try {
                                return e.call(null, t, 0)
                            } catch (n) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" == typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            e = o
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (t) {
                            n = s
                        }
                    }();
                    var l = []
                      , u = !1
                      , h = -1;
                    function c() {
                        u && i && (u = !1,
                        i.length ? l = i.concat(l) : h = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var t = a(c);
                            u = !0;
                            for (var e = l.length; e; ) {
                                for (i = l,
                                l = []; ++h < e; )
                                    i && i[h].run();
                                h = -1,
                                e = l.length
                            }
                            i = null,
                            u = !1,
                            function(t) {
                                if (n === clearTimeout)
                                    return clearTimeout(t);
                                if ((n === s || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    n(t)
                                } catch (e) {
                                    try {
                                        return n.call(null, t)
                                    } catch (e) {
                                        return n.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function p(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function f() {}
                    r.nextTick = function(t) {
                        var e = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                e[n - 1] = arguments[n];
                        l.push(new p(t,e)),
                        1 !== l.length || u || a(d)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = f,
                    r.addListener = f,
                    r.once = f,
                    r.off = f,
                    r.removeListener = f,
                    r.removeAllListeners = f,
                    r.emit = f,
                    r.prependListener = f,
                    r.prependOnceListener = f,
                    r.listeners = function(t) {
                        return []
                    }
                    ,
                    r.binding = function(t) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(t) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function i(t) {
                var r = n[t];
                if (void 0 !== r)
                    return r.exports;
                var o = n[t] = {
                    exports: {}
                }
                  , s = !0;
                try {
                    e[t](o, o.exports, i),
                    s = !1
                } finally {
                    s && delete n[t]
                }
                return o.exports
            }
            i.ab = "//";
            var r = i(229);
            t.exports = r
        }()
    },
    3608: function(t, e, n) {
        "use strict";
        n.d(e, {
            _: function() {
                return r
            }
        });
        var i = n(959);
        let r = (0,
        i.createContext)({
            transformPagePoint: t=>t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    5480: function(t, e, n) {
        "use strict";
        n.d(e, {
            frameData: function() {
                return i
            }
        });
        let i = {
            delta: 0,
            timestamp: 0
        }
    },
    2316: function(t, e, n) {
        "use strict";
        n.d(e, {
            qY: function() {
                return p
            },
            iW: function() {
                return f
            },
            Z_: function() {
                return d
            }
        });
        let i = 1 / 60 * 1e3
          , r = "undefined" != typeof performance ? ()=>performance.now() : ()=>Date.now()
          , o = "undefined" != typeof window ? t=>window.requestAnimationFrame(t) : t=>setTimeout(()=>t(r()), i);
        var s = n(5480);
        let a = !0
          , l = !1
          , u = !1
          , h = ["read", "update", "preRender", "render", "postRender"]
          , c = h.reduce((t,e)=>(t[e] = function(t) {
            let e = []
              , n = []
              , i = 0
              , r = !1
              , o = !1
              , s = new WeakSet
              , a = {
                schedule: (t,o=!1,a=!1)=>{
                    let l = a && r
                      , u = l ? e : n;
                    return o && s.add(t),
                    -1 === u.indexOf(t) && (u.push(t),
                    l && r && (i = e.length)),
                    t
                }
                ,
                cancel: t=>{
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1),
                    s.delete(t)
                }
                ,
                process: l=>{
                    if (r) {
                        o = !0;
                        return
                    }
                    if (r = !0,
                    [e,n] = [n, e],
                    n.length = 0,
                    i = e.length)
                        for (let n = 0; n < i; n++) {
                            let i = e[n];
                            i(l),
                            s.has(i) && (a.schedule(i),
                            t())
                        }
                    r = !1,
                    o && (o = !1,
                    a.process(l))
                }
            };
            return a
        }(()=>l = !0),
        t), {})
          , d = h.reduce((t,e)=>{
            let n = c[e];
            return t[e] = (t,e=!1,i=!1)=>(l || g(),
            n.schedule(t, e, i)),
            t
        }
        , {})
          , p = h.reduce((t,e)=>(t[e] = c[e].cancel,
        t), {})
          , f = h.reduce((t,e)=>(t[e] = ()=>c[e].process(s.frameData),
        t), {})
          , m = t=>c[t].process(s.frameData)
          , v = t=>{
            l = !1,
            s.frameData.delta = a ? i : Math.max(Math.min(t - s.frameData.timestamp, 40), 1),
            s.frameData.timestamp = t,
            u = !0,
            h.forEach(m),
            u = !1,
            l && (a = !1,
            o(v))
        }
          , g = ()=>{
            l = !0,
            a = !0,
            u || o(v)
        }
    },
    5154: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return rm
            }
        });
        var i, r, o, s, a, l = n(959), u = n(3608);
        let h = (0,
        l.createContext)({})
          , c = (0,
        l.createContext)(null);
        var d = n(1121);
        let p = (0,
        l.createContext)({
            strict: !1
        });
        function f(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function m(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function v(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
        function y(t) {
            return v(t.animate) || g.some(e=>m(t[e]))
        }
        function x(t) {
            return !!(y(t) || t.variants)
        }
        function b(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let w = t=>({
            isEnabled: e=>t.some(t=>!!e[t])
        })
          , A = {
            measureLayout: w(["layout", "layoutId", "drag"]),
            animation: w(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: w(["exit"]),
            drag: w(["drag", "dragControls"]),
            focus: w(["whileFocus"]),
            hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: w(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        var T = n(3016)
          , V = n(3512);
        let P = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        }
          , E = 1
          , C = (0,
        l.createContext)({});
        class S extends l.Component {
            getSnapshotBeforeUpdate() {
                let {visualElement: t, props: e} = this.props;
                return t && t.setProps(e),
                null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        let M = (0,
        l.createContext)({})
          , k = Symbol.for("motionComponentSymbol")
          , R = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function D(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (R.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let L = {}
          , B = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , F = new Set(B);
        function j(t, {layout: e, layoutId: n}) {
            return F.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!L[t] || "opacity" === t)
        }
        let I = t=>!!(null == t ? void 0 : t.getVelocity)
          , O = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , $ = (t,e)=>B.indexOf(t) - B.indexOf(e);
        function U(t) {
            return t.startsWith("--")
        }
        let N = (t,e)=>e && "number" == typeof t ? e.transform(t) : t;
        var W = n(7805)
          , Y = n(8979);
        let z = {
            ...W.Rx,
            transform: Math.round
        }
          , H = {
            borderWidth: Y.px,
            borderTopWidth: Y.px,
            borderRightWidth: Y.px,
            borderBottomWidth: Y.px,
            borderLeftWidth: Y.px,
            borderRadius: Y.px,
            radius: Y.px,
            borderTopLeftRadius: Y.px,
            borderTopRightRadius: Y.px,
            borderBottomRightRadius: Y.px,
            borderBottomLeftRadius: Y.px,
            width: Y.px,
            maxWidth: Y.px,
            height: Y.px,
            maxHeight: Y.px,
            size: Y.px,
            top: Y.px,
            right: Y.px,
            bottom: Y.px,
            left: Y.px,
            padding: Y.px,
            paddingTop: Y.px,
            paddingRight: Y.px,
            paddingBottom: Y.px,
            paddingLeft: Y.px,
            margin: Y.px,
            marginTop: Y.px,
            marginRight: Y.px,
            marginBottom: Y.px,
            marginLeft: Y.px,
            rotate: Y.RW,
            rotateX: Y.RW,
            rotateY: Y.RW,
            rotateZ: Y.RW,
            scale: W.bA,
            scaleX: W.bA,
            scaleY: W.bA,
            scaleZ: W.bA,
            skew: Y.RW,
            skewX: Y.RW,
            skewY: Y.RW,
            distance: Y.px,
            translateX: Y.px,
            translateY: Y.px,
            translateZ: Y.px,
            x: Y.px,
            y: Y.px,
            z: Y.px,
            perspective: Y.px,
            transformPerspective: Y.px,
            opacity: W.Fq,
            originX: Y.$C,
            originY: Y.$C,
            originZ: Y.px,
            zIndex: z,
            fillOpacity: W.Fq,
            strokeOpacity: W.Fq,
            numOctaves: z
        };
        function q(t, e, n, i) {
            let {style: r, vars: o, transform: s, transformKeys: a, transformOrigin: l} = t;
            a.length = 0;
            let u = !1
              , h = !1
              , c = !0;
            for (let t in e) {
                let n = e[t];
                if (U(t)) {
                    o[t] = n;
                    continue
                }
                let i = H[t]
                  , d = N(n, i);
                if (F.has(t)) {
                    if (u = !0,
                    s[t] = d,
                    a.push(t),
                    !c)
                        continue;
                    n !== (i.default || 0) && (c = !1)
                } else
                    t.startsWith("origin") ? (h = !0,
                    l[t] = d) : r[t] = d
            }
            if (!e.transform && (u || i ? r.transform = function({transform: t, transformKeys: e}, {enableHardwareAcceleration: n=!0, allowTransformNone: i=!0}, r, o) {
                let s = "";
                for (let n of (e.sort($),
                e))
                    s += `${O[n] || n}(${t[n]}) `;
                return n && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                o ? s = o(t, r ? "" : s) : i && r && (s = "none"),
                s
            }(t, n, c, i) : r.transform && (r.transform = "none")),
            h) {
                let {originX: t="50%", originY: e="50%", originZ: n=0} = l;
                r.transformOrigin = `${t} ${e} ${n}`
            }
        }
        let Z = ()=>({
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
        });
        function _(t, e, n) {
            for (let i in e)
                I(e[i]) || j(i, n) || (t[i] = e[i])
        }
        function X(t, e, n) {
            let i = {}
              , r = function(t, e, n) {
                let i = t.style || {}
                  , r = {};
                return _(r, i, t),
                Object.assign(r, function({transformTemplate: t}, e, n) {
                    return (0,
                    l.useMemo)(()=>{
                        let i = Z();
                        return q(i, e, {
                            enableHardwareAcceleration: !n
                        }, t),
                        Object.assign({}, i.vars, i.style)
                    }
                    , [e])
                }(t, e, n)),
                t.transformValues ? t.transformValues(r) : r
            }(t, e, n);
            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
            r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
            r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
            i.style = r,
            i
        }
        let G = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);
        function K(t) {
            return G.has(t)
        }
        let J = t=>!K(t);
        try {
            (i = require("@emotion/is-prop-valid").default) && (J = t=>t.startsWith("on") ? !K(t) : i(t))
        } catch (t) {}
        function Q(t, e, n) {
            return "string" == typeof t ? t : Y.px.transform(e + n * t)
        }
        let tt = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , te = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tn(t, {attrX: e, attrY: n, originX: i, originY: r, pathLength: o, pathSpacing: s=1, pathOffset: a=0, ...l}, u, h, c) {
            if (q(t, l, u, c),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: d, style: p, dimensions: f} = t;
            d.transform && (f && (p.transform = d.transform),
            delete d.transform),
            f && (void 0 !== i || void 0 !== r || p.transform) && (p.transformOrigin = function(t, e, n) {
                let i = Q(e, t.x, t.width)
                  , r = Q(n, t.y, t.height);
                return `${i} ${r}`
            }(f, void 0 !== i ? i : .5, void 0 !== r ? r : .5)),
            void 0 !== e && (d.x = e),
            void 0 !== n && (d.y = n),
            void 0 !== o && function(t, e, n=1, i=0, r=!0) {
                t.pathLength = 1;
                let o = r ? tt : te;
                t[o.offset] = Y.px.transform(-i);
                let s = Y.px.transform(e)
                  , a = Y.px.transform(n);
                t[o.array] = `${s} ${a}`
            }(d, o, s, a, !1)
        }
        let ti = ()=>({
            ...Z(),
            attrs: {}
        })
          , tr = t=>"string" == typeof t && "svg" === t.toLowerCase();
        function to(t, e, n, i) {
            let r = (0,
            l.useMemo)(()=>{
                let n = ti();
                return tn(n, e, {
                    enableHardwareAcceleration: !1
                }, tr(i), t.transformTemplate),
                {
                    ...n.attrs,
                    style: {
                        ...n.style
                    }
                }
            }
            , [e]);
            if (t.style) {
                let e = {};
                _(e, t.style, t),
                r.style = {
                    ...e,
                    ...r.style
                }
            }
            return r
        }
        let ts = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        function ta(t, {style: e, vars: n}, i, r) {
            for (let o in Object.assign(t.style, e, r && r.getProjectionStyles(i)),
            n)
                t.style.setProperty(o, n[o])
        }
        let tl = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function tu(t, e, n, i) {
            for (let n in ta(t, e, void 0, i),
            e.attrs)
                t.setAttribute(tl.has(n) ? n : ts(n), e.attrs[n])
        }
        function th(t) {
            let {style: e} = t
              , n = {};
            for (let i in e)
                (I(e[i]) || j(i, t)) && (n[i] = e[i]);
            return n
        }
        function tc(t) {
            let e = th(t);
            for (let n in t)
                if (I(t[n])) {
                    let i = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
                    e[i] = t[n]
                }
            return e
        }
        function td(t, e, n, i={}, r={}) {
            return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
            e
        }
        let tp = t=>Array.isArray(t)
          , tf = t=>!!(t && "object" == typeof t && t.mix && t.toValue)
          , tm = t=>tp(t) ? t[t.length - 1] || 0 : t;
        function tv(t) {
            let e = I(t) ? t.get() : t;
            return tf(e) ? e.toValue() : e
        }
        let tg = t=>(e,n)=>{
            let i = (0,
            l.useContext)(h)
              , r = (0,
            l.useContext)(c)
              , o = ()=>(function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, i, r, o) {
                let s = {
                    latestValues: function(t, e, n, i) {
                        let r = {}
                          , o = i(t);
                        for (let t in o)
                            r[t] = tv(o[t]);
                        let {initial: s, animate: a} = t
                          , l = y(t)
                          , u = x(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
                        void 0 === a && (a = e.animate));
                        let h = !!n && !1 === n.initial;
                        h = h || !1 === s;
                        let c = h ? a : s;
                        if (c && "boolean" != typeof c && !v(c)) {
                            let e = Array.isArray(c) ? c : [c];
                            e.forEach(e=>{
                                let n = td(t, e);
                                if (!n)
                                    return;
                                let {transitionEnd: i, transition: o, ...s} = n;
                                for (let t in s) {
                                    let e = s[t];
                                    if (Array.isArray(e)) {
                                        let t = h ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (r[t] = e)
                                }
                                for (let t in i)
                                    r[t] = i[t]
                            }
                            )
                        }
                        return r
                    }(i, r, o, t),
                    renderState: e()
                };
                return n && (s.mount = t=>n(i, t, s)),
                s
            }
            )(t, e, i, r);
            return n ? o() : (0,
            V.h)(o)
        }
          , ty = {
            useVisualState: tg({
                scrapeMotionValuesFromProps: tc,
                createRenderState: ti,
                onMount: (t,e,{renderState: n, latestValues: i})=>{
                    try {
                        n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (t) {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    tn(n, i, {
                        enableHardwareAcceleration: !1
                    }, tr(e.tagName), t.transformTemplate),
                    tu(e, n)
                }
            })
        }
          , tx = {
            useVisualState: tg({
                scrapeMotionValuesFromProps: th,
                createRenderState: Z
            })
        };
        function tb(t, e, n, i={
            passive: !0
        }) {
            return t.addEventListener(e, n, i),
            ()=>t.removeEventListener(e, n)
        }
        function tw(t, e, n, i) {
            (0,
            l.useEffect)(()=>{
                let r = t.current;
                if (n && r)
                    return tb(r, e, n, i)
            }
            , [t, e, n, i])
        }
        function tA(t) {
            return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
        }
        function tT(t) {
            let e = !!t.touches;
            return e
        }
        (r = s || (s = {})).Animate = "animate",
        r.Hover = "whileHover",
        r.Tap = "whileTap",
        r.Drag = "whileDrag",
        r.Focus = "whileFocus",
        r.InView = "whileInView",
        r.Exit = "exit";
        let tV = {
            pageX: 0,
            pageY: 0
        };
        function tP(t, e="page") {
            return {
                point: tT(t) ? function(t, e="page") {
                    let n = t.touches[0] || t.changedTouches[0]
                      , i = n || tV;
                    return {
                        x: i[e + "X"],
                        y: i[e + "Y"]
                    }
                }(t, e) : function(t, e="page") {
                    return {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }(t, e)
            }
        }
        let tE = (t,e=!1)=>{
            let n = e=>t(e, tP(e));
            return e ? t=>{
                let e = t instanceof MouseEvent
                  , i = !e || e && 0 === t.button;
                i && n(t)
            }
            : n
        }
          , tC = ()=>T.j && null === window.onpointerdown
          , tS = ()=>T.j && null === window.ontouchstart
          , tM = ()=>T.j && null === window.onmousedown
          , tk = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , tR = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function tD(t) {
            if (tC())
                ;
            else if (tS())
                return tR[t];
            else if (tM())
                return tk[t];
            return t
        }
        function tL(t, e, n, i) {
            return tb(t, tD(e), tE(n, "pointerdown" === e), i)
        }
        function tB(t, e, n, i) {
            return tw(t, tD(e), n && tE(n, "pointerdown" === e), i)
        }
        function tF(t) {
            let e = null;
            return ()=>null === e && (e = t,
            ()=>{
                e = null
            }
            )
        }
        let tj = tF("dragHorizontal")
          , tI = tF("dragVertical");
        function tO(t) {
            let e = !1;
            if ("y" === t)
                e = tI();
            else if ("x" === t)
                e = tj();
            else {
                let t = tj()
                  , n = tI();
                t && n ? e = ()=>{
                    t(),
                    n()
                }
                : (t && t(),
                n && n())
            }
            return e
        }
        function t$() {
            let t = tO(!0);
            return !t || (t(),
            !1)
        }
        function tU(t, e, n) {
            return (i,r)=>{
                !(!tA(i) || t$()) && (t.animationState && t.animationState.setActive(s.Hover, e),
                n && n(i, r))
            }
        }
        let tN = (t,e)=>!!e && (t === e || tN(t, e.parentElement));
        function tW(t) {
            return (0,
            l.useEffect)(()=>()=>t(), [])
        }
        var tY = n(9348)
          , tz = n(8545);
        let tH = (void 0 === tz || tz.env,
        "production")
          , tq = new Set
          , tZ = new WeakMap
          , t_ = new WeakMap
          , tX = t=>{
            let e = tZ.get(t.target);
            e && e(t)
        }
          , tG = t=>{
            t.forEach(tX)
        }
          , tK = {
            some: 0,
            all: 1
        };
        function tJ(t, e, n, {root: i, margin: r, amount: o="some", once: a}) {
            (0,
            l.useEffect)(()=>{
                if (!t || !n.current)
                    return;
                let l = {
                    root: null == i ? void 0 : i.current,
                    rootMargin: r,
                    threshold: "number" == typeof o ? o : tK[o]
                };
                return function(t, e, n) {
                    let i = function({root: t, ...e}) {
                        let n = t || document;
                        t_.has(n) || t_.set(n, {});
                        let i = t_.get(n)
                          , r = JSON.stringify(e);
                        return i[r] || (i[r] = new IntersectionObserver(tG,{
                            root: t,
                            ...e
                        })),
                        i[r]
                    }(e);
                    return tZ.set(t, n),
                    i.observe(t),
                    ()=>{
                        tZ.delete(t),
                        i.unobserve(t)
                    }
                }(n.current, l, t=>{
                    let {isIntersecting: i} = t;
                    if (e.isInView === i || (e.isInView = i,
                    a && !i && e.hasEnteredView))
                        return;
                    i && (e.hasEnteredView = !0),
                    n.animationState && n.animationState.setActive(s.InView, i);
                    let r = n.getProps()
                      , o = i ? r.onViewportEnter : r.onViewportLeave;
                    o && o(t)
                }
                )
            }
            , [t, i, r, o])
        }
        function tQ(t, e, n, {fallback: i=!0}) {
            (0,
            l.useEffect)(()=>{
                if (t && i) {
                    if ("production" !== tH) {
                        var r, o;
                        r = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.",
                        tq.has(r) || (console.warn(r),
                        o && console.warn(o),
                        tq.add(r))
                    }
                    requestAnimationFrame(()=>{
                        e.hasEnteredView = !0;
                        let {onViewportEnter: t} = n.getProps();
                        t && t(null),
                        n.animationState && n.animationState.setActive(s.InView, !0)
                    }
                    )
                }
            }
            , [t])
        }
        let t0 = t=>e=>(t(e),
        null)
          , t1 = {
            inView: t0(function({visualElement: t, whileInView: e, onViewportEnter: n, onViewportLeave: i, viewport: r={}}) {
                let o = (0,
                l.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , s = !!(e || n || i);
                r.once && o.current.hasEnteredView && (s = !1);
                let a = "undefined" == typeof IntersectionObserver ? tQ : tJ;
                a(s, o.current, t, r)
            }),
            tap: t0(function({onTap: t, onTapStart: e, onTapCancel: n, whileTap: i, visualElement: r}) {
                let o = t || e || n || i
                  , a = (0,
                l.useRef)(!1)
                  , u = (0,
                l.useRef)(null)
                  , h = {
                    passive: !(e || t || n || m)
                };
                function c() {
                    u.current && u.current(),
                    u.current = null
                }
                function d() {
                    return c(),
                    a.current = !1,
                    r.animationState && r.animationState.setActive(s.Tap, !1),
                    !t$()
                }
                function p(e, i) {
                    d() && (tN(r.current, e.target) ? t && t(e, i) : n && n(e, i))
                }
                function f(t, e) {
                    d() && n && n(t, e)
                }
                function m(t, n) {
                    c(),
                    !a.current && (a.current = !0,
                    u.current = (0,
                    tY.z)(tL(window, "pointerup", p, h), tL(window, "pointercancel", f, h)),
                    r.animationState && r.animationState.setActive(s.Tap, !0),
                    e && e(t, n))
                }
                tB(r, "pointerdown", o ? m : void 0, h),
                tW(c)
            }),
            focus: t0(function({whileFocus: t, visualElement: e}) {
                let {animationState: n} = e;
                tw(e, "focus", t ? ()=>{
                    n && n.setActive(s.Focus, !0)
                }
                : void 0),
                tw(e, "blur", t ? ()=>{
                    n && n.setActive(s.Focus, !1)
                }
                : void 0)
            }),
            hover: t0(function({onHoverStart: t, onHoverEnd: e, whileHover: n, visualElement: i}) {
                tB(i, "pointerenter", t || n ? tU(i, !0, t) : void 0, {
                    passive: !t
                }),
                tB(i, "pointerleave", e || n ? tU(i, !1, e) : void 0, {
                    passive: !e
                })
            })
        };
        function t3() {
            let t = (0,
            l.useContext)(c);
            if (null === t)
                return [!0, null];
            let {isPresent: e, onExitComplete: n, register: i} = t
              , r = (0,
            l.useId)();
            return (0,
            l.useEffect)(()=>i(r), []),
            !e && n ? [!1, ()=>n && n(r)] : [!0]
        }
        function t5(t, e) {
            if (!Array.isArray(e))
                return !1;
            let n = e.length;
            if (n !== t.length)
                return !1;
            for (let i = 0; i < n; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        }
        let t2 = t=>/^\-?\d*\.?\d+$/.test(t)
          , t4 = t=>/^0[^.\s]+$/.test(t);
        var t9 = n(2345)
          , t6 = n(1249)
          , t7 = n(3314);
        let t8 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function et(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[i] = n.match(t7.KP) || [];
            if (!i)
                return t;
            let r = n.replace(i, "")
              , o = t8.has(e) ? 1 : 0;
            return i !== n && (o *= 100),
            e + "(" + o + r + ")"
        }
        let ee = /([a-z-]*)\(.*?\)/g
          , en = {
            ...t6.P,
            getAnimatableNone: t=>{
                let e = t.match(ee);
                return e ? e.map(et).join(" ") : t
            }
        };
        var ei = n(6080);
        let er = {
            ...H,
            color: ei.$,
            backgroundColor: ei.$,
            outlineColor: ei.$,
            fill: ei.$,
            stroke: ei.$,
            borderColor: ei.$,
            borderTopColor: ei.$,
            borderRightColor: ei.$,
            borderBottomColor: ei.$,
            borderLeftColor: ei.$,
            filter: en,
            WebkitFilter: en
        }
          , eo = t=>er[t];
        function es(t, e) {
            var n;
            let i = eo(t);
            return i !== en && (i = t6.P),
            null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, e)
        }
        let ea = t=>e=>e.test(t)
          , el = [W.Rx, Y.px, Y.aQ, Y.RW, Y.vw, Y.vh, {
            test: t=>"auto" === t,
            parse: t=>t
        }]
          , eu = t=>el.find(ea(t))
          , eh = [...el, ei.$, t6.P]
          , ec = t=>eh.find(ea(t));
        function ed(t, e, n) {
            let i = t.getProps();
            return td(i, e, void 0 !== n ? n : i.custom, function(t) {
                let e = {};
                return t.values.forEach((t,n)=>e[n] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach((t,n)=>e[n] = t.getVelocity()),
                e
            }(t))
        }
        function ep(t) {
            return !!(I(t) && t.add)
        }
        var ef = n(2316);
        let em = (t,e)=>`${t}: ${e}`
          , ev = "data-" + ts("framerAppearId");
        var eg = n(8203);
        let ey = t=>1e3 * t
          , ex = {
            current: !1
        }
          , eb = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , ew = t=>e=>1 - t(1 - e)
          , eA = t=>t * t
          , eT = ew(eA)
          , eV = eb(eA);
        var eP = n(7367);
        let eE = t=>t
          , eC = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function eS(t, e, n, i) {
            if (t === e && n === i)
                return eE;
            let r = e=>(function(t, e, n, i, r) {
                let o, s;
                let a = 0;
                do
                    (o = eC(s = e + (n - e) / 2, i, r) - t) > 0 ? n = s : e = s;
                while (Math.abs(o) > 1e-7 && ++a < 12);
                return s
            }
            )(e, 0, 1, t, n);
            return t=>0 === t || 1 === t ? t : eC(r(t), e, i)
        }
        let eM = t=>1 - Math.sin(Math.acos(t))
          , ek = ew(eM)
          , eR = eb(ek)
          , eD = eS(.33, 1.53, .69, .99)
          , eL = ew(eD)
          , eB = eb(eL)
          , eF = {
            linear: eE,
            easeIn: eA,
            easeInOut: eV,
            easeOut: eT,
            circIn: eM,
            circInOut: eR,
            circOut: ek,
            backIn: eL,
            backInOut: eB,
            backOut: eD,
            anticipate: t=>(t *= 2) < 1 ? .5 * eL(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , ej = t=>{
            if (Array.isArray(t)) {
                (0,
                eg.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,n,i,r] = t;
                return eS(e, n, i, r)
            }
            return "string" == typeof t ? ((0,
            eg.k)(void 0 !== eF[t], `Invalid easing type '${t}'`),
            eF[t]) : t
        }
          , eI = t=>Array.isArray(t) && "number" != typeof t[0];
        function eO({keyframes: t, ease: e=eV, times: n, duration: i=300}) {
            t = [...t];
            let r = eO[0]
              , o = eI(e) ? e.map(ej) : ej(e)
              , s = {
                done: !1,
                value: r
            }
              , a = (n && n.length === eO.length ? n : function(t) {
                let e = t.length;
                return t.map((t,n)=>0 !== n ? n / (e - 1) : 0)
            }(t)).map(t=>t * i);
            function l() {
                var e;
                return (0,
                eP.s)(a, t, {
                    ease: Array.isArray(o) ? o : (e = t).map(()=>o || eV).splice(0, e.length - 1)
                })
            }
            let u = l();
            return {
                next: t=>(s.value = u(t),
                s.done = t >= i,
                s),
                flipTarget: ()=>{
                    t.reverse(),
                    u = l()
                }
            }
        }
        var e$ = n(5406);
        function eU(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        var eN = n(4114);
        let eW = ["duration", "bounce"]
          , eY = ["stiffness", "damping", "mass"];
        function ez(t, e) {
            return e.some(e=>void 0 !== t[e])
        }
        function eH({keyframes: t, restSpeed: e=2, restDelta: n=.01, ...i}) {
            let r = t[0]
              , o = t[t.length - 1]
              , s = {
                done: !1,
                value: r
            }
              , {stiffness: a, damping: l, mass: u, velocity: h, duration: c, isResolvedFromDuration: d} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!ez(t, eY) && ez(t, eW)) {
                    let n = function({duration: t=800, bounce: e=.25, velocity: n=0, mass: i=1}) {
                        let r, o;
                        (0,
                        eg.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
                        let s = 1 - e;
                        s = (0,
                        e$.u)(.05, 1, s),
                        t = (0,
                        e$.u)(.01, 10, t / 1e3),
                        s < 1 ? (r = e=>{
                            let i = e * s
                              , r = i * t
                              , o = eU(e, s);
                            return .001 - (i - n) / o * Math.exp(-r)
                        }
                        ,
                        o = e=>{
                            let i = e * s
                              , o = i * t
                              , a = Math.pow(s, 2) * Math.pow(e, 2) * t
                              , l = eU(Math.pow(e, 2), s)
                              , u = -r(e) + .001 > 0 ? -1 : 1;
                            return u * ((o * n + n - a) * Math.exp(-o)) / l
                        }
                        ) : (r = e=>{
                            let i = Math.exp(-e * t)
                              , r = (e - n) * t + 1;
                            return -.001 + i * r
                        }
                        ,
                        o = e=>{
                            let i = Math.exp(-e * t)
                              , r = (n - e) * (t * t);
                            return i * r
                        }
                        );
                        let a = 5 / t
                          , l = function(t, e, n) {
                            let i = n;
                            for (let n = 1; n < 12; n++)
                                i -= t(i) / e(i);
                            return i
                        }(r, o, a);
                        if (t *= 1e3,
                        isNaN(l))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(l, 2) * i;
                            return {
                                stiffness: e,
                                damping: 2 * s * Math.sqrt(i * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...n,
                        velocity: 0,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }(i)
              , p = eq
              , f = h ? -(h / 1e3) : 0
              , m = l / (2 * Math.sqrt(a * u));
            function v() {
                let t = o - r
                  , e = Math.sqrt(a / u) / 1e3;
                if (void 0 === n && (n = Math.min(Math.abs(o - r) / 100, .4)),
                m < 1) {
                    let n = eU(e, m);
                    p = i=>{
                        let r = Math.exp(-m * e * i);
                        return o - r * ((f + m * e * t) / n * Math.sin(n * i) + t * Math.cos(n * i))
                    }
                } else if (1 === m)
                    p = n=>o - Math.exp(-e * n) * (t + (f + e * t) * n);
                else {
                    let n = e * Math.sqrt(m * m - 1);
                    p = i=>{
                        let r = Math.exp(-m * e * i)
                          , s = Math.min(n * i, 300);
                        return o - r * ((f + m * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
                    }
                }
            }
            return v(),
            {
                next: t=>{
                    let i = p(t);
                    if (d)
                        s.done = t >= c;
                    else {
                        let r = f;
                        if (0 !== t) {
                            if (m < 1) {
                                let e = Math.max(0, t - 5);
                                r = (0,
                                eN.R)(i - p(e), t - e)
                            } else
                                r = 0
                        }
                        let a = Math.abs(r) <= e
                          , l = Math.abs(o - i) <= n;
                        s.done = a && l
                    }
                    return s.value = s.done ? o : i,
                    s
                }
                ,
                flipTarget: ()=>{
                    f = -f,
                    [r,o] = [o, r],
                    v()
                }
            }
        }
        eH.needsInterpolation = (t,e)=>"string" == typeof t || "string" == typeof e;
        let eq = t=>0
          , eZ = {
            decay: function({keyframes: t=[0], velocity: e=0, power: n=.8, timeConstant: i=350, restDelta: r=.5, modifyTarget: o}) {
                let s = t[0]
                  , a = {
                    done: !1,
                    value: s
                }
                  , l = n * e
                  , u = s + l
                  , h = void 0 === o ? u : o(u);
                return h !== u && (l = h - s),
                {
                    next: t=>{
                        let e = -l * Math.exp(-t / i);
                        return a.done = !(e > r || e < -r),
                        a.value = a.done ? h : h + e,
                        a
                    }
                    ,
                    flipTarget: ()=>{}
                }
            },
            keyframes: eO,
            tween: eO,
            spring: eH
        };
        function e_(t, e, n=0) {
            return t - e - n
        }
        let eX = t=>{
            let e = ({delta: e})=>t(e);
            return {
                start: ()=>ef.Z_.update(e, !0),
                stop: ()=>ef.qY.update(e)
            }
        }
        ;
        function eG({duration: t, driver: e=eX, elapsed: n=0, repeat: i=0, repeatType: r="loop", repeatDelay: o=0, keyframes: s, autoplay: a=!0, onPlay: l, onStop: u, onComplete: h, onRepeat: c, onUpdate: d, type: p="keyframes", ...f}) {
            var m;
            let v, g, y;
            let x = 0
              , b = t
              , w = !1
              , A = !0
              , T = eZ[s.length > 2 ? "keyframes" : p]
              , V = s[0]
              , P = s[s.length - 1];
            (null === (m = T.needsInterpolation) || void 0 === m ? void 0 : m.call(T, V, P)) && (y = (0,
            eP.s)([0, 100], [V, P], {
                clamp: !1
            }),
            s = [0, 100]);
            let E = T({
                ...f,
                duration: t,
                keyframes: s
            });
            return a && (l && l(),
            (v = e(function(t) {
                if (A || (t = -t),
                n += t,
                !w) {
                    let t = E.next(Math.max(0, n));
                    g = t.value,
                    y && (g = y(g)),
                    w = A ? t.done : n <= 0
                }
                if (d && d(g),
                w) {
                    if (0 === x && (b = void 0 !== b ? b : n),
                    x < i) {
                        var e, s;
                        e = n,
                        s = b,
                        (A ? e >= s + o : e <= -o) && (x++,
                        "reverse" === r ? n = function(t, e=0, n=0, i=!0) {
                            return i ? e_(e + -t, e, n) : e - (t - e) + n
                        }(n, b, o, A = x % 2 == 0) : (n = e_(n, b, o),
                        "mirror" === r && E.flipTarget()),
                        w = !1,
                        c && c())
                    } else
                        v.stop(),
                        h && h()
                }
            })).start()),
            {
                stop: ()=>{
                    u && u(),
                    v.stop()
                }
                ,
                sample: t=>E.next(Math.max(0, t))
            }
        }
        let eK = ([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`
          , eJ = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: eK([0, .65, .55, 1]),
            circOut: eK([.55, 0, 1, .45]),
            backIn: eK([.31, .01, .66, -.59]),
            backOut: eK([.33, 1.53, .69, .99])
        };
        function eQ(t, e) {
            let n = performance.now()
              , i = ({timestamp: r})=>{
                let o = r - n;
                o >= e && (ef.qY.read(i),
                t(o - e))
            }
            ;
            return ef.Z_.read(i, !0),
            ()=>ef.qY.read(i)
        }
        var e0 = n(5480);
        let e1 = ()=>({
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        })
          , e3 = t=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , e5 = ()=>({
            type: "keyframes",
            ease: "linear",
            duration: .3
        })
          , e2 = {
            type: "keyframes",
            duration: .8
        }
          , e4 = {
            x: e1,
            y: e1,
            z: e1,
            rotate: e1,
            rotateX: e1,
            rotateY: e1,
            rotateZ: e1,
            scaleX: e3,
            scaleY: e3,
            scale: e3,
            opacity: e5,
            backgroundColor: e5,
            color: e5,
            default: e3
        }
          , e9 = (t,{keyframes: e})=>{
            if (e.length > 2)
                return e2;
            {
                let n = e4[t] || e4.default;
                return n(e[1])
            }
        }
          , e6 = (t,e)=>"zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && t6.P.test(e) && !e.startsWith("url("));
        function e7(t) {
            return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function e8(t) {
            return "number" == typeof t ? 0 : es("", t)
        }
        function nt(t, e) {
            return t[e] || t.default || t
        }
        let ne = {
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate")
        }
          , nn = {}
          , ni = {};
        for (let t in ne)
            ni[t] = ()=>(void 0 === nn[t] && (nn[t] = ne[t]()),
            nn[t]);
        let nr = new Set(["opacity"])
          , no = (t,e,n,i={})=>r=>{
            let o = nt(i, t) || {}
              , s = o.delay || i.delay || 0
              , {elapsed: a=0} = i;
            a -= ey(s);
            let l = function(t, e, n, i) {
                let r = e6(e, n)
                  , o = void 0 !== i.from ? i.from : t.get();
                return ("none" === o && r && "string" == typeof n ? o = es(e, n) : e7(o) && "string" == typeof n ? o = e8(n) : !Array.isArray(n) && e7(n) && "string" == typeof o && (n = e8(o)),
                Array.isArray(n)) ? (null === n[0] && (n[0] = o),
                n) : [o, n]
            }(e, t, n, o)
              , u = l[0]
              , h = l[l.length - 1]
              , c = e6(t, u)
              , d = e6(t, h);
            (0,
            eg.K)(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
            let p = {
                keyframes: l,
                velocity: e.getVelocity(),
                ...o,
                elapsed: a,
                onUpdate: t=>{
                    e.set(t),
                    o.onUpdate && o.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    r(),
                    o.onComplete && o.onComplete()
                }
            };
            if (!c || !d || ex.current || !1 === o.type)
                return function({keyframes: t, elapsed: e, onUpdate: n, onComplete: i}) {
                    let r = ()=>(n && n(t[t.length - 1]),
                    i && i(),
                    ()=>{}
                    );
                    return e ? eQ(r, -e) : r()
                }(p);
            if ("inertia" === o.type) {
                let t = function({keyframes: t, velocity: e=0, min: n, max: i, power: r=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: u, driver: h, onUpdate: c, onComplete: d, onStop: p}) {
                    let f;
                    let m = t[0];
                    function v(t) {
                        return void 0 !== n && t < n || void 0 !== i && t > i
                    }
                    function g(t) {
                        return void 0 === n ? i : void 0 === i ? n : Math.abs(n - t) < Math.abs(i - t) ? n : i
                    }
                    function y(t) {
                        null == f || f.stop(),
                        f = eG({
                            keyframes: [0, 1],
                            velocity: 0,
                            ...t,
                            driver: h,
                            onUpdate: e=>{
                                var n;
                                null == c || c(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            }
                            ,
                            onComplete: d,
                            onStop: p
                        })
                    }
                    function x(t) {
                        y({
                            type: "spring",
                            stiffness: s,
                            damping: a,
                            restDelta: l,
                            ...t
                        })
                    }
                    if (v(m))
                        x({
                            velocity: e,
                            keyframes: [m, g(m)]
                        });
                    else {
                        let t, i, s = r * e + m;
                        void 0 !== u && (s = u(s));
                        let a = g(s)
                          , h = a === n ? -1 : 1;
                        y({
                            type: "decay",
                            keyframes: [m, 0],
                            velocity: e,
                            timeConstant: o,
                            power: r,
                            restDelta: l,
                            modifyTarget: u,
                            onUpdate: v(s) ? n=>{
                                t = i,
                                i = n,
                                e = (0,
                                eN.R)(n - t, e0.frameData.delta),
                                (1 === h && n > a || -1 === h && n < a) && x({
                                    keyframes: [n, a],
                                    velocity: e
                                })
                            }
                            : void 0
                        })
                    }
                    return {
                        stop: ()=>null == f ? void 0 : f.stop()
                    }
                }(p);
                return ()=>t.stop()
            }
            !function({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: r, repeat: o, repeatType: s, repeatDelay: a, from: l, ...u}) {
                return !!Object.keys(u).length
            }(o) && (p = {
                ...p,
                ...e9(t, p)
            }),
            p.duration && (p.duration = ey(p.duration)),
            p.repeatDelay && (p.repeatDelay = ey(p.repeatDelay));
            let f = e.owner
              , m = f && f.current
              , v = ni.waapi() && nr.has(t) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate;
            if (v)
                return function(t, e, {onUpdate: n, onComplete: i, ...r}) {
                    var o;
                    let {keyframes: s, duration: a=.3, elapsed: l=0, ease: u} = r;
                    if ("spring" === r.type || !(!(o = r.ease) || Array.isArray(o) || "string" == typeof o && eJ[o])) {
                        let t = eG(r)
                          , e = {
                            done: !1,
                            value: s[0]
                        }
                          , n = []
                          , i = 0;
                        for (; !e.done; )
                            e = t.sample(i),
                            n.push(e.value),
                            i += 10;
                        s = n,
                        a = i - 10,
                        u = "linear"
                    }
                    let h = function(t, e, n, {delay: i=0, duration: r, repeat: o=0, repeatType: s="loop", ease: a, times: l}={}) {
                        return t.animate({
                            [e]: n,
                            offset: l
                        }, {
                            delay: i,
                            duration: r,
                            easing: function(t) {
                                if (t)
                                    return Array.isArray(t) ? eK(t) : eJ[t]
                            }(a),
                            fill: "both",
                            iterations: o + 1,
                            direction: "reverse" === s ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, s, {
                        ...r,
                        delay: -l,
                        duration: a,
                        ease: u
                    });
                    return h.onfinish = ()=>{
                        t.set(s[s.length - 1]),
                        i && i()
                    }
                    ,
                    ()=>{
                        let {currentTime: e} = h;
                        if (e) {
                            let n = eG(r);
                            t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                        }
                        ef.Z_.update(()=>h.cancel())
                    }
                }(e, t, p);
            {
                let t = eG(p);
                return ()=>t.stop()
            }
        }
        ;
        function ns(t, e, n={}) {
            var i;
            let r = ed(t, e, n.custom)
              , {transition: o=t.getDefaultTransition() || {}} = r || {};
            n.transitionOverride && (o = n.transitionOverride);
            let s = r ? ()=>na(t, r, n) : ()=>Promise.resolve()
              , a = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i=0)=>{
                let {delayChildren: r=0, staggerChildren: s, staggerDirection: a} = o;
                return function(t, e, n=0, i=0, r=1, o) {
                    let s = []
                      , a = (t.variantChildren.size - 1) * i
                      , l = 1 === r ? (t=0)=>t * i : (t=0)=>a - t * i;
                    return Array.from(t.variantChildren).sort(nl).forEach((t,i)=>{
                        s.push(ns(t, e, {
                            ...o,
                            delay: n + l(i)
                        }).then(()=>t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(s)
                }(t, e, r + i, s, a, n)
            }
            : ()=>Promise.resolve()
              , {when: l} = o;
            if (!l)
                return Promise.all([s(), a(n.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [s, a] : [a, s];
                return t().then(e)
            }
        }
        function na(t, e, {delay: n=0, transitionOverride: i, type: r}={}) {
            var o;
            let {transition: s=t.getDefaultTransition(), transitionEnd: a, ...l} = t.makeTargetAnimatable(e)
              , u = t.getValue("willChange");
            i && (s = i);
            let h = []
              , c = r && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[r]);
            for (let e in l) {
                let i = t.getValue(e)
                  , r = l[e];
                if (!i || void 0 === r || c && function({protectedKeys: t, needsAnimating: e}, n) {
                    let i = t.hasOwnProperty(n) && !0 !== e[n];
                    return e[n] = !1,
                    i
                }(c, e))
                    continue;
                let o = {
                    delay: n,
                    elapsed: 0,
                    ...s
                };
                if (t.shouldReduceMotion && F.has(e) && (o = {
                    ...o,
                    type: !1,
                    delay: 0
                }),
                !i.hasAnimated) {
                    let n = t.getProps()[ev];
                    n && (o.elapsed = function(t, e) {
                        let {MotionAppearAnimations: n} = window
                          , i = em(t, F.has(e) ? "transform" : e)
                          , r = n && n.get(i);
                        return r ? (ef.Z_.render(()=>{
                            try {
                                r.cancel(),
                                n.delete(i)
                            } catch (t) {}
                        }
                        ),
                        r.currentTime || 0) : 0
                    }(n, e))
                }
                let a = i.start(no(e, i, r, o));
                ep(u) && (u.add(e),
                a = a.then(()=>u.remove(e))),
                h.push(a)
            }
            return Promise.all(h).then(()=>{
                a && function(t, e) {
                    let n = ed(t, e)
                      , {transitionEnd: i={}, transition: r={}, ...o} = n ? t.makeTargetAnimatable(n, !1) : {};
                    for (let e in o = {
                        ...o,
                        ...i
                    }) {
                        let n = tm(o[e]);
                        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0,
                        t9.B)(n))
                    }
                }(t, a)
            }
            )
        }
        function nl(t, e) {
            return t.sortNodePosition(e)
        }
        let nu = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit]
          , nh = [...nu].reverse()
          , nc = nu.length;
        function nd(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let np = {
            animation: t0(({visualElement: t, animate: e})=>{
                t.animationState || (t.animationState = function(t) {
                    let e = e=>Promise.all(e.map(({animation: e, options: n})=>(function(t, e, n={}) {
                        let i;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e)) {
                            let r = e.map(e=>ns(t, e, n));
                            i = Promise.all(r)
                        } else if ("string" == typeof e)
                            i = ns(t, e, n);
                        else {
                            let r = "function" == typeof e ? ed(t, e, n.custom) : e;
                            i = na(t, r, n)
                        }
                        return i.then(()=>t.notify("AnimationComplete", e))
                    }
                    )(t, e, n)))
                      , n = {
                        [s.Animate]: nd(!0),
                        [s.InView]: nd(),
                        [s.Hover]: nd(),
                        [s.Tap]: nd(),
                        [s.Drag]: nd(),
                        [s.Focus]: nd(),
                        [s.Exit]: nd()
                    }
                      , i = !0
                      , r = (e,n)=>{
                        let i = ed(t, n);
                        if (i) {
                            let {transition: t, transitionEnd: n, ...r} = i;
                            e = {
                                ...e,
                                ...r,
                                ...n
                            }
                        }
                        return e
                    }
                    ;
                    function o(o, s) {
                        let a = t.getProps()
                          , l = t.getVariantContext(!0) || {}
                          , u = []
                          , h = new Set
                          , c = {}
                          , d = 1 / 0;
                        for (let e = 0; e < nc; e++) {
                            var p;
                            let f = nh[e]
                              , g = n[f]
                              , y = void 0 !== a[f] ? a[f] : l[f]
                              , x = m(y)
                              , b = f === s ? g.isActive : null;
                            !1 === b && (d = e);
                            let w = y === l[f] && y !== a[f] && x;
                            if (w && i && t.manuallyAnimateOnMount && (w = !1),
                            g.protectedKeys = {
                                ...c
                            },
                            !g.isActive && null === b || !y && !g.prevProp || v(y) || "boolean" == typeof y)
                                continue;
                            let A = (p = g.prevProp,
                            "string" == typeof y ? y !== p : !!Array.isArray(y) && !t5(y, p))
                              , T = A || f === s && g.isActive && !w && x || e > d && x
                              , V = Array.isArray(y) ? y : [y]
                              , P = V.reduce(r, {});
                            !1 === b && (P = {});
                            let {prevResolvedValues: E={}} = g
                              , C = {
                                ...E,
                                ...P
                            }
                              , S = t=>{
                                T = !0,
                                h.delete(t),
                                g.needsAnimating[t] = !0
                            }
                            ;
                            for (let t in C) {
                                let e = P[t]
                                  , n = E[t];
                                c.hasOwnProperty(t) || (e !== n ? tp(e) && tp(n) ? !t5(e, n) || A ? S(t) : g.protectedKeys[t] = !0 : void 0 !== e ? S(t) : h.add(t) : void 0 !== e && h.has(t) ? S(t) : g.protectedKeys[t] = !0)
                            }
                            g.prevProp = y,
                            g.prevResolvedValues = P,
                            g.isActive && (c = {
                                ...c,
                                ...P
                            }),
                            i && t.blockInitialAnimation && (T = !1),
                            T && !w && u.push(...V.map(t=>({
                                animation: t,
                                options: {
                                    type: f,
                                    ...o
                                }
                            })))
                        }
                        if (h.size) {
                            let e = {};
                            h.forEach(n=>{
                                let i = t.getBaseTarget(n);
                                void 0 !== i && (e[n] = i)
                            }
                            ),
                            u.push({
                                animation: e
                            })
                        }
                        let f = !!u.length;
                        return i && !1 === a.initial && !t.manuallyAnimateOnMount && (f = !1),
                        i = !1,
                        f ? e(u) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, i, r) {
                            var s;
                            if (n[e].isActive === i)
                                return Promise.resolve();
                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t=>{
                                var n;
                                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                            }
                            ),
                            n[e].isActive = i;
                            let a = o(r, e);
                            for (let t in n)
                                n[t].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(n) {
                            e = n(t)
                        },
                        getState: ()=>n
                    }
                }(t)),
                v(e) && (0,
                l.useEffect)(()=>e.subscribe(t), [e])
            }
            ),
            exit: t0(t=>{
                let {custom: e, visualElement: n} = t
                  , [i,r] = t3()
                  , o = (0,
                l.useContext)(c);
                (0,
                l.useEffect)(()=>{
                    n.isPresent = i;
                    let t = n.animationState && n.animationState.setActive(s.Exit, !i, {
                        custom: o && o.custom || e
                    });
                    t && !i && t.then(r)
                }
                , [i])
            }
            )
        }
          , nf = (t,e)=>Math.abs(t - e);
        class nm {
            constructor(t, e, {transformPagePoint: n}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = ()=>{
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = ny(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , n = function(t, e) {
                        let n = nf(t.x, e.x)
                          , i = nf(t.y, e.y);
                        return Math.sqrt(n ** 2 + i ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !n)
                        return;
                    let {point: i} = t
                      , {timestamp: r} = e0.frameData;
                    this.history.push({
                        ...i,
                        timestamp: r
                    });
                    let {onStart: o, onMove: s} = this.handlers;
                    e || (o && o(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    s && s(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    if (this.lastMoveEvent = t,
                    this.lastMoveEventInfo = nv(e, this.transformPagePoint),
                    tA(t) && 0 === t.buttons) {
                        this.handlePointerUp(t, e);
                        return
                    }
                    ef.Z_.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    this.end();
                    let {onEnd: n, onSessionEnd: i} = this.handlers
                      , r = ny(nv(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, r),
                    i && i(t, r)
                }
                ,
                tT(t) && t.touches.length > 1)
                    return;
                this.handlers = e,
                this.transformPagePoint = n;
                let i = tP(t)
                  , r = nv(i, this.transformPagePoint)
                  , {point: o} = r
                  , {timestamp: s} = e0.frameData;
                this.history = [{
                    ...o,
                    timestamp: s
                }];
                let {onSessionStart: a} = e;
                a && a(t, ny(r, this.history)),
                this.removeListeners = (0,
                tY.z)(tL(window, "pointermove", this.handlePointerMove), tL(window, "pointerup", this.handlePointerUp), tL(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                ef.qY.update(this.updatePoint)
            }
        }
        function nv(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function ng(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function ny({point: t}, e) {
            return {
                point: t,
                delta: ng(t, nx(e)),
                offset: ng(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = t.length - 1
                      , i = null
                      , r = nx(t);
                    for (; n >= 0 && (i = t[n],
                    !(r.timestamp - i.timestamp > ey(.1))); )
                        n--;
                    if (!i)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = (r.timestamp - i.timestamp) / 1e3;
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = {
                        x: (r.x - i.x) / o,
                        y: (r.y - i.y) / o
                    };
                    return s.x === 1 / 0 && (s.x = 0),
                    s.y === 1 / 0 && (s.y = 0),
                    s
                }(e, 0)
            }
        }
        function nx(t) {
            return t[t.length - 1]
        }
        var nb = n(9195)
          , nw = n(6578);
        function nA(t) {
            return t.max - t.min
        }
        function nT(t, e=0, n=.01) {
            return Math.abs(t - e) <= n
        }
        function nV(t, e, n, i=.5) {
            t.origin = i,
            t.originPoint = (0,
            nw.C)(e.min, e.max, t.origin),
            t.scale = nA(n) / nA(e),
            (nT(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            nw.C)(n.min, n.max, t.origin) - t.originPoint,
            (nT(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function nP(t, e, n, i) {
            nV(t.x, e.x, n.x, null == i ? void 0 : i.originX),
            nV(t.y, e.y, n.y, null == i ? void 0 : i.originY)
        }
        function nE(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + nA(e)
        }
        function nC(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + nA(e)
        }
        function nS(t, e, n) {
            nC(t.x, e.x, n.x),
            nC(t.y, e.y, n.y)
        }
        function nM(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function nk(t, e) {
            let n = e.min - t.min
              , i = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
            {
                min: n,
                max: i
            }
        }
        function nR(t, e, n) {
            return {
                min: nD(t, e),
                max: nD(t, n)
            }
        }
        function nD(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let nL = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , nB = ()=>({
            x: nL(),
            y: nL()
        })
          , nF = ()=>({
            min: 0,
            max: 0
        })
          , nj = ()=>({
            x: nF(),
            y: nF()
        });
        function nI(t) {
            return [t("x"), t("y")]
        }
        function nO({top: t, left: e, right: n, bottom: i}) {
            return {
                x: {
                    min: e,
                    max: n
                },
                y: {
                    min: t,
                    max: i
                }
            }
        }
        function n$(t) {
            return void 0 === t || 1 === t
        }
        function nU({scale: t, scaleX: e, scaleY: n}) {
            return !n$(t) || !n$(e) || !n$(n)
        }
        function nN(t) {
            return nU(t) || nW(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function nW(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
        }
        function nY(t, e, n, i, r) {
            return void 0 !== r && (t = i + r * (t - i)),
            i + n * (t - i) + e
        }
        function nz(t, e=0, n=1, i, r) {
            t.min = nY(t.min, e, n, i, r),
            t.max = nY(t.max, e, n, i, r)
        }
        function nH(t, {x: e, y: n}) {
            nz(t.x, e.translate, e.scale, e.originPoint),
            nz(t.y, n.translate, n.scale, n.originPoint)
        }
        function nq(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function nZ(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function n_(t, e, [n,i,r]) {
            let o = void 0 !== e[r] ? e[r] : .5
              , s = (0,
            nw.C)(t.min, t.max, o);
            nz(t, e[n], e[i], s, e.scale)
        }
        let nX = ["x", "scaleX", "originX"]
          , nG = ["y", "scaleY", "originY"];
        function nK(t, e) {
            n_(t.x, e, nX),
            n_(t.y, e, nG)
        }
        function nJ(t, e) {
            return nO(function(t, e) {
                if (!e)
                    return t;
                let n = e({
                    x: t.left,
                    y: t.top
                })
                  , i = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: i.y,
                    right: i.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let nQ = new WeakMap;
        class n0 {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = nj(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                !1 !== this.visualElement.isPresent && (this.panSession = new nm(t,{
                    onSessionStart: t=>{
                        this.stopAnimation(),
                        e && this.snapToCursor(tP(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        var n;
                        let {drag: i, dragPropagation: r, onDragStart: o} = this.getProps();
                        (!i || r || (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tO(i),
                        this.openGlobalLock)) && (this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        nI(t=>{
                            var e, n;
                            let i = this.getAxisMotionValue(t).get() || 0;
                            if (Y.aQ.test(i)) {
                                let r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                                if (r) {
                                    let t = nA(r);
                                    i = t * (parseFloat(i) / 100)
                                }
                            }
                            this.originPoint[t] = i
                        }
                        ),
                        null == o || o(t, e),
                        null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(s.Drag, !0))
                    }
                    ,
                    onMove: (t,e)=>{
                        let {dragPropagation: n, dragDirectionLock: i, onDirectionLock: r, onDrag: o} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: s} = e;
                        if (i && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let n = null;
                                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
                                n
                            }(s),
                            null !== this.currentDirection && (null == r || r(this.currentDirection));
                            return
                        }
                        this.updateAxis("x", e.point, s),
                        this.updateAxis("y", e.point, s),
                        this.visualElement.render(),
                        null == o || o(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            stop(t, e) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: i} = e;
                this.startAnimation(i);
                let {onDragEnd: r} = this.getProps();
                null == r || r(t, e)
            }
            cancel() {
                var t, e;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(s.Drag, !1)
            }
            updateAxis(t, e, n) {
                let {drag: i} = this.getProps();
                if (!n || !n1(t, i, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , o = this.originPoint[t] + n[t];
                this.constraints && this.constraints[t] && (o = function(t, {min: e, max: n}, i) {
                    return void 0 !== e && t < e ? t = i ? (0,
                    nw.C)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0,
                    nw.C)(n, t, i.max) : Math.min(t, n)),
                    t
                }(o, this.constraints[t], this.elastic[t])),
                r.set(o)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: n} = this.visualElement.projection || {}
                  , i = this.constraints;
                t && f(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {top: e, left: n, bottom: i, right: r}) {
                    return {
                        x: nM(t.x, n, r),
                        y: nM(t.y, e, i)
                    }
                }(n.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: nR(t, "left", "right"),
                        y: nR(t, "top", "bottom")
                    }
                }(e),
                i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nI(t=>{
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
                if (!e || !f(e))
                    return !1;
                let i = e.current;
                (0,
                eg.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let o = function(t, e, n) {
                    let i = nJ(t, n)
                      , {scroll: r} = e;
                    return r && (nZ(i.x, r.offset.x),
                    nZ(i.y, r.offset.y)),
                    i
                }(i, r.root, this.visualElement.getTransformPagePoint())
                  , s = {
                    x: nk((t = r.layout.layoutBox).x, o.x),
                    y: nk(t.y, o.y)
                };
                if (n) {
                    let t = n(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(s));
                    this.hasMutatedConstraints = !!t,
                    t && (s = nO(t))
                }
                return s
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: n, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
                  , a = this.constraints || {}
                  , l = nI(s=>{
                    if (!n1(s, e, this.currentDirection))
                        return;
                    let l = (null == a ? void 0 : a[s]) || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: n ? t[s] : 0,
                        bounceStiffness: i ? 200 : 1e6,
                        bounceDamping: i ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(s, u)
                }
                );
                return Promise.all(l).then(s)
            }
            startAxisValueAnimation(t, e) {
                let n = this.getAxisMotionValue(t);
                return n.start(no(t, n, 0, e))
            }
            stopAnimation() {
                nI(t=>this.getAxisMotionValue(t).stop())
            }
            getAxisMotionValue(t) {
                var e;
                let n = "_drag" + t.toUpperCase()
                  , i = this.visualElement.getProps()[n];
                return i || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
            }
            snapToCursor(t) {
                nI(e=>{
                    let {drag: n} = this.getProps();
                    if (!n1(e, n, this.currentDirection))
                        return;
                    let {projection: i} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (i && i.layout) {
                        let {min: n, max: o} = i.layout.layoutBox[e];
                        r.set(t[e] - (0,
                        nw.C)(n, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                var t;
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: n} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!f(n) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                nI(t=>{
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let n = e.get();
                        r[t] = function(t, e) {
                            let n = .5
                              , i = nA(t)
                              , r = nA(e);
                            return r > i ? n = (0,
                            nb.Y)(e.min, e.max - i, t.min) : i > r && (n = (0,
                            nb.Y)(t.min, t.max - r, e.min)),
                            (0,
                            e$.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: o} = this.visualElement.getProps();
                this.visualElement.current.style.transform = o ? o({}, "") : "none",
                null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                nI(t=>{
                    if (!n1(t, e, null))
                        return;
                    let n = this.getAxisMotionValue(t)
                      , {min: i, max: o} = this.constraints[t];
                    n.set((0,
                    nw.C)(i, o, r[t]))
                }
                )
            }
            addListeners() {
                var t;
                if (!this.visualElement.current)
                    return;
                nQ.set(this.visualElement, this);
                let e = this.visualElement.current
                  , n = tL(e, "pointerdown", t=>{
                    let {drag: e, dragListener: n=!0} = this.getProps();
                    e && n && this.start(t)
                }
                )
                  , i = ()=>{
                    let {dragConstraints: t} = this.getProps();
                    f(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: r} = this.visualElement
                  , o = r.addEventListener("measure", i);
                r && !r.layout && (null === (t = r.root) || void 0 === t || t.updateScroll(),
                r.updateLayout()),
                i();
                let s = tb(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , a = r.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (nI(e=>{
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate,
                        n.set(n.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    s(),
                    n(),
                    o(),
                    null == a || a()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: o=.35, dragMomentum: s=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: n,
                    dragPropagation: i,
                    dragConstraints: r,
                    dragElastic: o,
                    dragMomentum: s
                }
            }
        }
        function n1(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        let n3 = {
            pan: t0(function({onPan: t, onPanStart: e, onPanEnd: n, onPanSessionStart: i, visualElement: r}) {
                let o = (0,
                l.useRef)(null)
                  , {transformPagePoint: s} = (0,
                l.useContext)(u._)
                  , a = {
                    onSessionStart: i,
                    onStart: e,
                    onMove: t,
                    onEnd: (t,e)=>{
                        o.current = null,
                        n && n(t, e)
                    }
                };
                (0,
                l.useEffect)(()=>{
                    null !== o.current && o.current.updateHandlers(a)
                }
                ),
                tB(r, "pointerdown", (t || e || n || i) && function(t) {
                    o.current = new nm(t,a,{
                        transformPagePoint: s
                    })
                }
                ),
                tW(()=>o.current && o.current.end())
            }),
            drag: t0(function(t) {
                let {dragControls: e, visualElement: n} = t
                  , i = (0,
                V.h)(()=>new n0(n));
                (0,
                l.useEffect)(()=>e && e.subscribe(i), [i, e]),
                (0,
                l.useEffect)(()=>i.addListeners(), [i])
            })
        };
        function n5(t) {
            return "string" == typeof t && t.startsWith("var(--")
        }
        let n2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function n4(t, e, n=1) {
            (0,
            eg.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[i,r] = function(t) {
                let e = n2.exec(t);
                if (!e)
                    return [, ];
                let[,n,i] = e;
                return [n, i]
            }(t);
            if (!i)
                return;
            let o = window.getComputedStyle(e).getPropertyValue(i);
            return o ? o.trim() : n5(r) ? n4(r, e, n + 1) : r
        }
        let n9 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"])
          , n6 = t=>n9.has(t)
          , n7 = t=>Object.keys(t).some(n6)
          , n8 = (t,e)=>{
            t.set(e, !1),
            t.set(e)
        }
          , it = t=>t === W.Rx || t === Y.px;
        (o = a || (a = {})).width = "width",
        o.height = "height",
        o.left = "left",
        o.right = "right",
        o.top = "top",
        o.bottom = "bottom";
        let ie = (t,e)=>parseFloat(t.split(", ")[e])
          , ii = (t,e)=>(n,{transform: i})=>{
            if ("none" === i || !i)
                return 0;
            let r = i.match(/^matrix3d\((.+)\)$/);
            if (r)
                return ie(r[1], e);
            {
                let e = i.match(/^matrix\((.+)\)$/);
                return e ? ie(e[1], t) : 0
            }
        }
          , ir = new Set(["x", "y", "z"])
          , io = B.filter(t=>!ir.has(t))
          , is = {
            width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t,{top: e})=>parseFloat(e),
            left: (t,{left: e})=>parseFloat(e),
            bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
            right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
            x: ii(4, 13),
            y: ii(5, 14)
        }
          , ia = (t,e,n)=>{
            let i = e.measureViewportBox()
              , r = e.current
              , o = getComputedStyle(r)
              , {display: s} = o
              , a = {};
            "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach(t=>{
                a[t] = is[t](i, o)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return n.forEach(n=>{
                let i = e.getValue(n);
                n8(i, a[n]),
                t[n] = is[n](l, o)
            }
            ),
            t
        }
          , il = (t,e,n={},i={})=>{
            e = {
                ...e
            },
            i = {
                ...i
            };
            let r = Object.keys(e).filter(n6)
              , o = []
              , s = !1
              , a = [];
            if (r.forEach(r=>{
                let l;
                let u = t.getValue(r);
                if (!t.hasValue(r))
                    return;
                let h = n[r]
                  , c = eu(h)
                  , d = e[r];
                if (tp(d)) {
                    let t = d.length
                      , e = null === d[0] ? 1 : 0;
                    c = eu(h = d[e]);
                    for (let n = e; n < t; n++)
                        l ? (0,
                        eg.k)(eu(d[n]) === l, "All keyframes must be of the same type") : (l = eu(d[n]),
                        (0,
                        eg.k)(l === c || it(c) && it(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = eu(d);
                if (c !== l) {
                    if (it(c) && it(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === Y.px && (e[r] = d.map(parseFloat))
                    } else
                        (null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (s || (o = function(t) {
                            let e = [];
                            return io.forEach(n=>{
                                let i = t.getValue(n);
                                void 0 !== i && (e.push([n, i.get()]),
                                i.set(n.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        s = !0),
                        a.push(r),
                        i[r] = void 0 !== i[r] ? i[r] : e[r],
                        n8(u, d))
                }
            }
            ),
            !a.length)
                return {
                    target: e,
                    transitionEnd: i
                };
            {
                let n = a.indexOf("height") >= 0 ? window.pageYOffset : null
                  , r = ia(e, t, a);
                return o.length && o.forEach(([e,n])=>{
                    t.getValue(e).set(n)
                }
                ),
                t.render(),
                T.j && null !== n && window.scrollTo({
                    top: n
                }),
                {
                    target: r,
                    transitionEnd: i
                }
            }
        }
          , iu = (t,e,n,i)=>{
            var r, o;
            let s = function(t, {...e}, n) {
                let i = t.current;
                if (!(i instanceof Element))
                    return {
                        target: e,
                        transitionEnd: n
                    };
                for (let r in n && (n = {
                    ...n
                }),
                t.values.forEach(t=>{
                    let e = t.get();
                    if (!n5(e))
                        return;
                    let n = n4(e, i);
                    n && t.set(n)
                }
                ),
                e) {
                    let t = e[r];
                    if (!n5(t))
                        continue;
                    let o = n4(t, i);
                    o && (e[r] = o,
                    n && void 0 === n[r] && (n[r] = t))
                }
                return {
                    target: e,
                    transitionEnd: n
                }
            }(t, e, i);
            return e = s.target,
            i = s.transitionEnd,
            r = e,
            o = i,
            n7(r) ? il(t, r, n, o) : {
                target: r,
                transitionEnd: o
            }
        }
        ;
        var ih = n(4776)
          , ic = n(3943)
          , id = n(9420);
        let ip = Object.keys(A)
          , im = ip.length
          , iv = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class ig {
            constructor({parent: t, props: e, reducedMotionConfig: n, visualState: i}, r={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.isPresent = !0,
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>ef.Z_.render(this.render, !1, !0);
                let {latestValues: o, renderState: s} = i;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = e.initial ? {
                    ...o
                } : {},
                this.renderState = s,
                this.parent = t,
                this.props = e,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = r,
                this.isControllingVariants = y(e),
                this.isVariantNode = x(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: a, ...l} = this.scrapeMotionValuesFromProps(e);
                for (let t in l) {
                    let e = l[t];
                    void 0 !== o[t] && I(e) && (e.set(o[t], !1),
                    ep(a) && a.add(t))
                }
            }
            scrapeMotionValuesFromProps(t) {
                return {}
            }
            mount(t) {
                var e;
                this.current = t,
                this.projection && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)),
                this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
                ic.O.current || (0,
                ih.A)(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ic.n.current),
                this.parent && this.parent.children.add(this),
                this.setProps(this.props)
            }
            unmount() {
                var t, e, n;
                for (let i in null === (t = this.projection) || void 0 === t || t.unmount(),
                ef.qY.update(this.notifyUpdate),
                ef.qY.render(this.render),
                this.valueSubscriptions.forEach(t=>t()),
                null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this),
                null === (n = this.parent) || void 0 === n || n.children.delete(this),
                this.events)
                    this.events[i].clear();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let n = F.has(t)
                  , i = e.on("change", e=>{
                    this.latestValues[t] = e,
                    this.props.onUpdate && ef.Z_.update(this.notifyUpdate, !1, !0),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , r = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, ()=>{
                    i(),
                    r()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures(t, e, n, i, r, o) {
                let s = [];
                "production" !== tH && n && e && (0,
                eg.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                for (let e = 0; e < im; e++) {
                    let n = ip[e]
                      , {isEnabled: i, Component: r} = A[n];
                    i(t) && r && s.push((0,
                    l.createElement)(r, {
                        key: n,
                        ...t,
                        visualElement: this
                    }))
                }
                if (!this.projection && r) {
                    this.projection = new r(i,this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: e, layout: n, drag: s, dragConstraints: a, layoutScroll: l} = t;
                    this.projection.setOptions({
                        layoutId: e,
                        layout: n,
                        alwaysMeasureLayout: !!s || a && f(a),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof n ? n : "both",
                        initialPromotionConfig: o,
                        layoutScroll: l
                    })
                }
                return s
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nj()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            setProps(t) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.props = t;
                for (let e = 0; e < iv.length; e++) {
                    let n = iv[e];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let i = t["on" + n];
                    i && (this.propEventSubscriptions[n] = this.on(n, i))
                }
                this.prevMotionValues = function(t, e, n) {
                    let {willChange: i} = e;
                    for (let r in e) {
                        let o = e[r]
                          , s = n[r];
                        if (I(o))
                            t.addValue(r, o),
                            ep(i) && i.add(r);
                        else if (I(s))
                            t.addValue(r, (0,
                            t9.B)(o, {
                                owner: t
                            })),
                            ep(i) && i.remove(r);
                        else if (s !== o) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                e.hasAnimated || e.set(o)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, (0,
                                t9.B)(void 0 !== e ? e : o))
                            }
                        }
                    }
                    for (let i in n)
                        void 0 === e[i] && t.removeValue(i);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                var e;
                return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                var t;
                return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
            }
            getVariantContext(t=!1) {
                var e, n;
                if (t)
                    return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
                if (!this.isControllingVariants) {
                    let t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let i = {};
                for (let t = 0; t < ix; t++) {
                    let e = iy[t]
                      , n = this.props[e];
                    (m(n) || !1 === n) && (i[e] = n)
                }
                return i
            }
            addVariantChild(t) {
                var e;
                let n = this.getClosestVariantNode();
                if (n)
                    return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                    ()=>n.variantChildren.delete(t)
            }
            addValue(t, e) {
                this.hasValue(t) && this.removeValue(t),
                this.values.set(t, e),
                this.latestValues[t] = e.get(),
                this.bindToMotionValue(t, e)
            }
            removeValue(t) {
                var e;
                this.values.delete(t),
                null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(),
                this.valueSubscriptions.delete(t),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let n = this.values.get(t);
                return void 0 === n && void 0 !== e && (n = (0,
                t9.B)(e, {
                    owner: this
                }),
                this.addValue(t, n)),
                n
            }
            readValue(t) {
                return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: n} = this.props
                  , i = "string" == typeof n || "object" == typeof n ? null === (e = td(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || I(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new id.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                var n;
                null === (n = this.events[t]) || void 0 === n || n.notify(...e)
            }
        }
        let iy = ["initial", ...nu]
          , ix = iy.length;
        class ib extends ig {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                var n;
                return null === (n = t.style) || void 0 === n ? void 0 : n[e]
            }
            removeValueFromRenderState(t, {vars: e, style: n}) {
                delete e[t],
                delete n[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...n}, {transformValues: i}, r) {
                let o = function(t, e, n) {
                    var i;
                    let r = {};
                    for (let o in t) {
                        let t = function(t, e) {
                            if (!e)
                                return;
                            let n = e[t] || e.default || e;
                            return n.from
                        }(o, e);
                        r[o] = void 0 !== t ? t : null === (i = n.getValue(o)) || void 0 === i ? void 0 : i.get()
                    }
                    return r
                }(n, t || {}, this);
                if (i && (e && (e = i(e)),
                n && (n = i(n)),
                o && (o = i(o))),
                r) {
                    !function(t, e, n) {
                        var i, r;
                        let o = Object.keys(e).filter(e=>!t.hasValue(e))
                          , s = o.length;
                        if (s)
                            for (let a = 0; a < s; a++) {
                                let s = o[a]
                                  , l = e[s]
                                  , u = null;
                                Array.isArray(l) && (u = l[0]),
                                null === u && (u = null !== (r = null !== (i = n[s]) && void 0 !== i ? i : t.readValue(s)) && void 0 !== r ? r : e[s]),
                                null != u && ("string" == typeof u && (t2(u) || t4(u)) ? u = parseFloat(u) : !ec(u) && t6.P.test(l) && (u = es(s, l)),
                                t.addValue(s, (0,
                                t9.B)(u, {
                                    owner: t
                                })),
                                void 0 === n[s] && (n[s] = u),
                                null !== u && t.setBaseTarget(s, u))
                            }
                    }(this, n, o);
                    let t = iu(this, n, o, e);
                    e = t.transitionEnd,
                    n = t.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...n
                }
            }
        }
        class iw extends ib {
            readValueFromInstance(t, e) {
                if (F.has(e)) {
                    let t = eo(e);
                    return t && t.default || 0
                }
                {
                    let n = window.getComputedStyle(t)
                      , i = (U(e) ? n.getPropertyValue(e) : n[e]) || 0;
                    return "string" == typeof i ? i.trim() : i
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return nJ(t, e)
            }
            build(t, e, n, i) {
                q(t, e, n, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t) {
                return th(t)
            }
            renderInstance(t, e, n, i) {
                ta(t, e, n, i)
            }
        }
        class iA extends ib {
            constructor() {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                var n;
                return F.has(e) ? (null === (n = eo(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tl.has(e) ? e : ts(e),
                t.getAttribute(e))
            }
            measureInstanceViewportBox() {
                return nj()
            }
            scrapeMotionValuesFromProps(t) {
                return tc(t)
            }
            build(t, e, n, i) {
                tn(t, e, n, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, n, i) {
                tu(t, e, n, i)
            }
            mount(t) {
                this.isSVGTag = tr(t.tagName),
                super.mount(t)
            }
        }
        let iT = (t,e)=>D(t) ? new iA(e,{
            enableHardwareAcceleration: !1
        }) : new iw(e,{
            enableHardwareAcceleration: !0
        });
        function iV(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let iP = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!Y.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let n = iV(t, e.target.x)
                  , i = iV(t, e.target.y);
                return `${n}% ${i}%`
            }
        }
          , iE = "_$css"
          , iC = {
            correct: (t,{treeScale: e, projectionDelta: n})=>{
                let i = t
                  , r = t.includes("var(")
                  , o = [];
                r && (t = t.replace(n2, t=>(o.push(t),
                iE)));
                let s = t6.P.parse(t);
                if (s.length > 5)
                    return i;
                let a = t6.P.createTransformer(t)
                  , l = "number" != typeof s[0] ? 1 : 0
                  , u = n.x.scale * e.x
                  , h = n.y.scale * e.y;
                s[0 + l] /= u,
                s[1 + l] /= h;
                let c = (0,
                nw.C)(u, h, .5);
                "number" == typeof s[2 + l] && (s[2 + l] /= c),
                "number" == typeof s[3 + l] && (s[3 + l] /= c);
                let d = a(s);
                if (r) {
                    let t = 0;
                    d = d.replace(iE, ()=>{
                        let e = o[t];
                        return t++,
                        e
                    }
                    )
                }
                return d
            }
        };
        class iS extends l.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: i} = this.props
                  , {projection: r} = t;
                Object.assign(L, iM),
                r && (e.group && e.group.add(r),
                n && n.register && i && n.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                P.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: n, drag: i, isPresent: r} = this.props
                  , o = n.projection;
                return o && (o.isPresent = r,
                i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? o.promote() : o.relegate() || ef.Z_.postRender(()=>{
                    var t;
                    (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
                  , {projection: i} = t;
                i && (i.scheduleCheckAfterUnmount(),
                (null == e ? void 0 : e.group) && e.group.remove(i),
                (null == n ? void 0 : n.deregister) && n.deregister(i))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                null == t || t()
            }
            render() {
                return null
            }
        }
        let iM = {
            borderRadius: {
                ...iP,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: iP,
            borderTopRightRadius: iP,
            borderBottomLeftRadius: iP,
            borderBottomRightRadius: iP,
            boxShadow: iC
        }
          , ik = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , iR = ik.length
          , iD = t=>"string" == typeof t ? parseFloat(t) : t
          , iL = t=>"number" == typeof t || Y.px.test(t);
        function iB(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let iF = iI(0, .5, ek)
          , ij = iI(.5, .95, eE);
        function iI(t, e, n) {
            return i=>i < t ? 0 : i > e ? 1 : n((0,
            nb.Y)(t, e, i))
        }
        function iO(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function i$(t, e) {
            iO(t.x, e.x),
            iO(t.y, e.y)
        }
        function iU(t, e, n, i, r) {
            return t -= e,
            t = i + 1 / n * (t - i),
            void 0 !== r && (t = i + 1 / r * (t - i)),
            t
        }
        function iN(t, e, [n,i,r], o, s) {
            !function(t, e=0, n=1, i=.5, r, o=t, s=t) {
                if (Y.aQ.test(e)) {
                    e = parseFloat(e);
                    let t = (0,
                    nw.C)(s.min, s.max, e / 100);
                    e = t - s.min
                }
                if ("number" != typeof e)
                    return;
                let a = (0,
                nw.C)(o.min, o.max, i);
                t === o && (a -= e),
                t.min = iU(t.min, e, n, a, r),
                t.max = iU(t.max, e, n, a, r)
            }(t, e[n], e[i], e[r], e.scale, o, s)
        }
        let iW = ["x", "scaleX", "originX"]
          , iY = ["y", "scaleY", "originY"];
        function iz(t, e, n, i) {
            iN(t.x, e, iW, null == n ? void 0 : n.x, null == i ? void 0 : i.x),
            iN(t.y, e, iY, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
        }
        function iH(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function iq(t) {
            return iH(t.x) && iH(t.y)
        }
        function iZ(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }
        function i_(t) {
            return nA(t.x) / nA(t.y)
        }
        var iX = n(7003);
        class iG {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                iX.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                iX.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let n = this.members.findIndex(e=>t === e);
                if (0 === n)
                    return !1;
                for (let t = n; t >= 0; t--) {
                    let n = this.members[t];
                    if (!1 !== n.isPresent) {
                        e = n;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                var n;
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                    let {crossfade: r} = t.options;
                    !1 === r && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t=>{
                    var e, n, i, r, o;
                    null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                    null === (o = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (r = i.options).onExitComplete) || void 0 === o || o.call(r)
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t=>{
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function iK(t, e, n) {
            let i = ""
              , r = t.x.translate / e.x
              , o = t.y.translate / e.y;
            if ((r || o) && (i = `translate3d(${r}px, ${o}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
            n) {
                let {rotate: t, rotateX: e, rotateY: r} = n;
                t && (i += `rotate(${t}deg) `),
                e && (i += `rotateX(${e}deg) `),
                r && (i += `rotateY(${r}deg) `)
            }
            let s = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== s || 1 !== a) && (i += `scale(${s}, ${a})`),
            i || "none"
        }
        let iJ = (t,e)=>t.depth - e.depth;
        class iQ {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                iX.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                iX.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(iJ),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        let i0 = ["", "X", "Y", "Z"]
          , i1 = 0;
        function i3({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: r}) {
            return class {
                constructor(t, n={}, i=null == e ? void 0 : e()) {
                    this.id = i1++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isTransformDirty = !1,
                    this.isProjectionDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        this.nodes.forEach(i4),
                        this.nodes.forEach(rt),
                        this.nodes.forEach(re)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.elementId = t,
                    this.latestValues = n,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new iQ)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new id.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let n = this.eventHandlers.get(t);
                    null == n || n.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                registerPotentialNode(t, e) {
                    this.potentialNodes.set(t, e)
                }
                mount(e, n=!1) {
                    var i;
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: r, layout: o, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    null === (i = this.parent) || void 0 === i || i.children.add(this),
                    this.elementId && this.root.potentialNodes.delete(this.elementId),
                    n && (o || r) && (this.isLayoutDirty = !0),
                    t) {
                        let n;
                        let i = ()=>this.root.updateBlockedByResize = !1;
                        t(e, ()=>{
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = eQ(i, 250),
                            P.hasAnimatedSinceResize && (P.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(i8))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && s && (r || o) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: i})=>{
                        var r, o, a, l, u;
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let h = null !== (o = null !== (r = this.options.transition) && void 0 !== r ? r : s.getDefaultTransition()) && void 0 !== o ? o : ra
                          , {onLayoutAnimationStart: c, onLayoutAnimationComplete: d} = s.getProps()
                          , p = !this.targetLayout || !iZ(this.targetLayout, i) || n
                          , f = !e && n;
                        if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, f);
                            let e = {
                                ...nt(h, "layout"),
                                onPlay: c,
                                onComplete: d
                            };
                            s.shouldReduceMotion && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || 0 !== this.animationProgress || i8(this),
                            this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                        this.targetLayout = i
                    }
                    )
                }
                unmount() {
                    var t, e;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) || void 0 === t || t.remove(this),
                    null === (e = this.parent) || void 0 === e || e.children.delete(this),
                    this.instance = void 0,
                    ef.qY.preRender(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    var t;
                    return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                }
                startUpdate() {
                    var t;
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    null === (t = this.nodes) || void 0 === t || t.forEach(rn),
                    this.animationId++)
                }
                willUpdate(t=!0) {
                    var e, n, i;
                    if (this.root.isUpdateBlocked()) {
                        null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot")
                    }
                    let {layoutId: r, layout: o} = this.options;
                    if (void 0 === r && !o)
                        return;
                    let s = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
                    this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                didUpdate() {
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(i6);
                        return
                    }
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(rl),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(i7),
                    this.nodes.forEach(i5),
                    this.nodes.forEach(i2),
                    this.clearAllSnapshots(),
                    ef.iW.update(),
                    ef.iW.preRender(),
                    ef.iW.render())
                }
                clearAllSnapshots() {
                    this.nodes.forEach(i9),
                    this.sharedNodes.forEach(ri)
                }
                scheduleUpdateProjection() {
                    ef.Z_.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    ef.Z_.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    var t;
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.updateScroll()
                        }
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = nj(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox),
                    null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: i(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    var t;
                    if (!r)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform
                      , n = this.projectionDelta && !iq(this.projectionDelta)
                      , i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate
                      , o = null == i ? void 0 : i(this.latestValues, "")
                      , s = o !== this.prevTransformTemplateValue;
                    e && (n || nN(this.latestValues) || s) && (r(this.instance, o),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let n = this.measurePageBox()
                      , i = this.removeElementScroll(n);
                    return t && (i = this.removeTransform(i)),
                    ru((e = i).x),
                    ru(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: i,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return nj();
                    let e = t.measureViewportBox()
                      , {scroll: n} = this.root;
                    return n && (nZ(e.x, n.offset.x),
                    nZ(e.y, n.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = nj();
                    i$(e, t);
                    for (let n = 0; n < this.path.length; n++) {
                        let i = this.path[n]
                          , {scroll: r, options: o} = i;
                        if (i !== this.root && r && o.layoutScroll) {
                            if (r.isRoot) {
                                i$(e, t);
                                let {scroll: n} = this.root;
                                n && (nZ(e.x, -n.offset.x),
                                nZ(e.y, -n.offset.y))
                            }
                            nZ(e.x, r.offset.x),
                            nZ(e.y, r.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let n = nj();
                    i$(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        !e && i.options.layoutScroll && i.scroll && i !== i.root && nK(n, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }),
                        nN(i.latestValues) && nK(n, i.latestValues)
                    }
                    return nN(this.latestValues) && nK(n, this.latestValues),
                    n
                }
                removeTransform(t) {
                    var e;
                    let n = nj();
                    i$(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !nN(i.latestValues))
                            continue;
                        nU(i.latestValues) && i.updateSnapshot();
                        let r = nj()
                          , o = i.measurePageBox();
                        i$(r, o),
                        iz(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, r)
                    }
                    return nN(this.latestValues) && iz(n, this.latestValues),
                    n
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.isProjectionDirty = !0,
                    this.root.scheduleUpdateProjection()
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                resolveTargetDelta() {
                    var t, e, n, i;
                    let r = this.getLead();
                    if (this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty),
                    !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
                        return;
                    let {layout: o, layoutId: s} = this.options;
                    if (this.layout && (o || s)) {
                        if (!this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout ? (this.relativeParent = t,
                            this.relativeTarget = nj(),
                            this.relativeTargetOrigin = nj(),
                            nS(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            i$(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = nj(),
                        this.targetWithTransforms = nj()),
                        this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)) ? (e = this.target,
                        n = this.relativeTarget,
                        i = this.relativeParent.target,
                        nE(e.x, n.x, i.x),
                        nE(e.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : i$(this.target, this.layout.layoutBox),
                        nH(this.target, this.targetDelta)) : i$(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)) {
                            this.attemptToResolveRelativeTarget = !1;
                            let t = this.getClosestProjectingParent();
                            t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target ? (this.relativeParent = t,
                            this.relativeTarget = nj(),
                            this.relativeTargetOrigin = nj(),
                            nS(this.relativeTargetOrigin, this.target, t.target),
                            i$(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                    }
                }
                getClosestProjectingParent() {
                    if (!(!this.parent || nU(this.parent.latestValues) || nW(this.parent.latestValues)))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                calcProjection() {
                    var t;
                    let {isProjectionDirty: e, isTransformDirty: n} = this;
                    this.isProjectionDirty = this.isTransformDirty = !1;
                    let i = this.getLead()
                      , r = !!this.resumingFrom || this !== i
                      , o = !0;
                    if (e && (o = !1),
                    r && n && (o = !1),
                    o)
                        return;
                    let {layout: s, layoutId: a} = this.options;
                    if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(s || a))
                        return;
                    i$(this.layoutCorrected, this.layout.layoutBox),
                    function(t, e, n, i=!1) {
                        var r, o;
                        let s, a;
                        let l = n.length;
                        if (l) {
                            e.x = e.y = 1;
                            for (let u = 0; u < l; u++)
                                a = (s = n[u]).projectionDelta,
                                (null === (o = null === (r = s.instance) || void 0 === r ? void 0 : r.style) || void 0 === o ? void 0 : o.display) !== "contents" && (i && s.options.layoutScroll && s.scroll && s !== s.root && nK(t, {
                                    x: -s.scroll.offset.x,
                                    y: -s.scroll.offset.y
                                }),
                                a && (e.x *= a.x.scale,
                                e.y *= a.y.scale,
                                nH(t, a)),
                                i && nN(s.latestValues) && nK(t, s.latestValues));
                            e.x = nq(e.x),
                            e.y = nq(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, r);
                    let {target: l} = i;
                    if (!l)
                        return;
                    this.projectionDelta || (this.projectionDelta = nB(),
                    this.projectionDeltaWithTransform = nB());
                    let u = this.treeScale.x
                      , h = this.treeScale.y
                      , c = this.projectionTransform;
                    nP(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = iK(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== c || this.treeScale.x !== u || this.treeScale.y !== h) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l))
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e, n, i;
                    null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                    t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    var n, i;
                    let r = this.snapshot
                      , o = (null == r ? void 0 : r.latestValues) || {}
                      , s = {
                        ...this.latestValues
                    }
                      , a = nB();
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !e;
                    let l = nj()
                      , u = (null == r ? void 0 : r.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source)
                      , h = 1 >= ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0)
                      , c = !!(u && !h && !0 === this.options.crossfade && !this.path.some(rs));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        var n, i, r;
                        let d = e / 1e3;
                        rr(a.x, t.x, d),
                        rr(a.y, t.y, d),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (nS(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        i = this.relativeTarget,
                        r = this.relativeTargetOrigin,
                        ro(i.x, r.x, l.x, d),
                        ro(i.y, r.y, l.y, d)),
                        u && (this.animationValues = s,
                        function(t, e, n, i, r, o) {
                            r ? (t.opacity = (0,
                            nw.C)(0, void 0 !== n.opacity ? n.opacity : 1, iF(i)),
                            t.opacityExit = (0,
                            nw.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ij(i))) : o && (t.opacity = (0,
                            nw.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                            for (let r = 0; r < iR; r++) {
                                let o = `border${ik[r]}Radius`
                                  , s = iB(e, o)
                                  , a = iB(n, o);
                                if (void 0 === s && void 0 === a)
                                    continue;
                                s || (s = 0),
                                a || (a = 0);
                                let l = 0 === s || 0 === a || iL(s) === iL(a);
                                l ? (t[o] = Math.max((0,
                                nw.C)(iD(s), iD(a), i), 0),
                                (Y.aQ.test(a) || Y.aQ.test(s)) && (t[o] += "%")) : t[o] = a
                            }
                            (e.rotate || n.rotate) && (t.rotate = (0,
                            nw.C)(e.rotate || 0, n.rotate || 0, i))
                        }(s, o, this.latestValues, d, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = d
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                startAnimation(t) {
                    var e, n;
                    this.notifyListeners("animationStart"),
                    null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                    this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                    this.pendingAnimation && (ef.qY.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = ef.Z_.update(()=>{
                        P.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, n={}) {
                            let i = I(t) ? t : (0,
                            t9.B)(t);
                            return i.start(no("", i, 1e3, n)),
                            {
                                stop: ()=>i.stop(),
                                isAnimating: ()=>i.isAnimating()
                            }
                        }(0, 0, {
                            ...t,
                            onUpdate: e=>{
                                var n;
                                this.mixTargetDelta(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            }
                            ,
                            onComplete: ()=>{
                                var e;
                                null === (e = t.onComplete) || void 0 === e || e.call(t),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    var t;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    var t;
                    this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: n, layout: i, latestValues: r} = t;
                    if (e && n && i) {
                        if (this !== t && this.layout && i && rh(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                            n = this.target || nj();
                            let e = nA(this.layout.layoutBox.x);
                            n.x.min = t.target.x.min,
                            n.x.max = n.x.min + e;
                            let i = nA(this.layout.layoutBox.y);
                            n.y.min = t.target.y.min,
                            n.y.max = n.y.min + i
                        }
                        i$(e, n),
                        nK(e, r),
                        nP(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    var n, i, r;
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new iG);
                    let o = this.sharedNodes.get(t);
                    o.add(e),
                    e.promote({
                        transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                        preserveFollowOpacity: null === (r = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === r ? void 0 : r.call(i, e)
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
                    let i = this.getStack();
                    i && i.promote(this, n),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: n} = t;
                    if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
                    !e)
                        return;
                    let i = {};
                    for (let e = 0; e < i0.length; e++) {
                        let r = "rotate" + i0[e];
                        n[r] && (i[r] = n[r],
                        t.setStaticValue(r, 0))
                    }
                    for (let e in null == t || t.render(),
                    i)
                        t.setStaticValue(e, i[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, n, i;
                    let r = {};
                    if (!this.instance || this.isSVG)
                        return r;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    r.visibility = "";
                    let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = tv(t.pointerEvents) || "",
                        r.transform = o ? o(this.latestValues, "") : "none",
                        r;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tv(t.pointerEvents) || ""),
                        this.hasProjected && !nN(this.latestValues) && (e.transform = o ? o({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let a = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = iK(this.projectionDeltaWithTransform, this.treeScale, a),
                    o && (r.transform = o(a, r.transform));
                    let {x: l, y: u} = this.projectionDelta;
                    for (let t in r.transformOrigin = `${100 * l.origin}% ${100 * u.origin}% 0`,
                    s.animationValues ? r.opacity = s === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0,
                    L) {
                        if (void 0 === a[t])
                            continue;
                        let {correct: e, applyTo: n} = L[t]
                          , i = e(a[t], s);
                        if (n) {
                            let t = n.length;
                            for (let e = 0; e < t; e++)
                                r[n[e]] = i
                        } else
                            r[t] = i
                    }
                    return this.options.layoutId && (r.pointerEvents = s === this ? tv(t.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(i6),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function i5(t) {
            t.updateLayout()
        }
        function i2(t) {
            var e, n, i;
            let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: i} = t.options
                  , o = r.source !== t.layout.source;
                "size" === i ? nI(t=>{
                    let n = o ? r.measuredBox[t] : r.layoutBox[t]
                      , i = nA(n);
                    n.min = e[t].min,
                    n.max = n.min + i
                }
                ) : rh(i, r.layoutBox, e) && nI(t=>{
                    let n = o ? r.measuredBox[t] : r.layoutBox[t]
                      , i = nA(e[t]);
                    n.max = n.min + i
                }
                );
                let s = nB();
                nP(s, e, r.layoutBox);
                let a = nB();
                o ? nP(a, t.applyTransform(n, !0), r.measuredBox) : nP(a, e, r.layoutBox);
                let l = !iq(s)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: t, layout: i} = n;
                        if (t && i) {
                            let n = nj();
                            nS(n, r.layoutBox, t.layoutBox);
                            let o = nj();
                            nS(o, e, i.layoutBox),
                            iZ(n, o) || (u = !0)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: r,
                    delta: a,
                    layoutDelta: s,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else
                t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
            t.options.transition = void 0
        }
        function i4(t) {
            t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty))
        }
        function i9(t) {
            t.clearSnapshot()
        }
        function i6(t) {
            t.clearMeasurements()
        }
        function i7(t) {
            let {visualElement: e} = t.options;
            (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function i8(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0
        }
        function rt(t) {
            t.resolveTargetDelta()
        }
        function re(t) {
            t.calcProjection()
        }
        function rn(t) {
            t.resetRotation()
        }
        function ri(t) {
            t.removeLeadSnapshot()
        }
        function rr(t, e, n) {
            t.translate = (0,
            nw.C)(e.translate, 0, n),
            t.scale = (0,
            nw.C)(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function ro(t, e, n, i) {
            t.min = (0,
            nw.C)(e.min, n.min, i),
            t.max = (0,
            nw.C)(e.max, n.max, i)
        }
        function rs(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let ra = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function rl(t, e) {
            let n = t.root;
            for (let e = t.path.length - 1; e >= 0; e--)
                if (t.path[e].instance) {
                    n = t.path[e];
                    break
                }
            let i = n && n !== t.root ? n.instance : document
              , r = i.querySelector(`[data-projection-id="${e}"]`);
            r && t.mount(r, !0)
        }
        function ru(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function rh(t, e, n) {
            return "position" === t || "preserve-aspect" === t && !nT(i_(e), i_(n), .2)
        }
        let rc = i3({
            attachResizeListener: (t,e)=>tb(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , rd = {
            current: void 0
        }
          , rp = i3({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!rd.current) {
                    let t = new rc(0,{});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    rd.current = t
                }
                return rd.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>"fixed" === window.getComputedStyle(t).position
        })
          , rf = {
            ...np,
            ...t1,
            ...n3,
            measureLayout: function(t) {
                let[e,n] = t3()
                  , i = (0,
                l.useContext)(C);
                return l.createElement(iS, {
                    ...t,
                    layoutGroup: i,
                    switchLayoutGroup: (0,
                    l.useContext)(M),
                    isPresent: e,
                    safeToRemove: n
                })
            }
        }
          , rm = function(t) {
            function e(e, n={}) {
                return function({preloadedFeatures: t, createVisualElement: e, projectionNodeConstructor: n, useRender: i, useVisualState: r, Component: o}) {
                    t && function(t) {
                        for (let e in t)
                            "projectionNodeConstructor" === e ? A.projectionNodeConstructor = t[e] : A[e].Component = t[e]
                    }(t);
                    let s = (0,
                    l.forwardRef)(function(s, a) {
                        var v;
                        let g = {
                            ...(0,
                            l.useContext)(u._),
                            ...s,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                l.useContext)(C).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        }
                          , {isStatic: x} = g
                          , w = null
                          , k = function(t) {
                            let {initial: e, animate: n} = function(t, e) {
                                if (y(t)) {
                                    let {initial: e, animate: n} = t;
                                    return {
                                        initial: !1 === e || m(e) ? e : void 0,
                                        animate: m(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            l.useContext)(h));
                            return (0,
                            l.useMemo)(()=>({
                                initial: e,
                                animate: n
                            }), [b(e), b(n)])
                        }(s)
                          , R = x ? void 0 : (0,
                        V.h)(()=>{
                            if (P.hasEverUpdated)
                                return E++
                        }
                        )
                          , D = r(s, x);
                        if (!x && T.j) {
                            k.visualElement = function(t, e, n, i) {
                                let r = (0,
                                l.useContext)(h).visualElement
                                  , o = (0,
                                l.useContext)(p)
                                  , s = (0,
                                l.useContext)(c)
                                  , a = (0,
                                l.useContext)(u._).reducedMotion
                                  , f = (0,
                                l.useRef)();
                                i = i || o.renderer,
                                !f.current && i && (f.current = i(t, {
                                    visualState: e,
                                    parent: r,
                                    props: n,
                                    presenceId: s ? s.id : void 0,
                                    blockInitialAnimation: !!s && !1 === s.initial,
                                    reducedMotionConfig: a
                                }));
                                let m = f.current;
                                return (0,
                                d.L)(()=>{
                                    m && m.render()
                                }
                                ),
                                (0,
                                d.L)(()=>{
                                    m && m.animationState && m.animationState.animateChanges()
                                }
                                ),
                                (0,
                                d.L)(()=>()=>m && m.notify("Unmount"), []),
                                m
                            }(o, D, g, e);
                            let i = (0,
                            l.useContext)(p).strict
                              , r = (0,
                            l.useContext)(M);
                            k.visualElement && (w = k.visualElement.loadFeatures(g, i, t, R, n || A.projectionNodeConstructor, r))
                        }
                        return l.createElement(S, {
                            visualElement: k.visualElement,
                            props: g
                        }, w, l.createElement(h.Provider, {
                            value: k
                        }, i(o, s, R, (v = k.visualElement,
                        (0,
                        l.useCallback)(t=>{
                            t && D.mount && D.mount(t),
                            v && (t ? v.mount(t) : v.unmount()),
                            a && ("function" == typeof a ? a(t) : f(a) && (a.current = t))
                        }
                        , [v])), D, x, k.visualElement)))
                    });
                    return s[k] = o,
                    s
                }(t(e, n))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let n = new Map;
            return new Proxy(e,{
                get: (t,i)=>(n.has(i) || n.set(i, e(i)),
                n.get(i))
            })
        }((t,e)=>(function(t, {forwardMotionProps: e=!1}, n, i, r) {
            let o = D(t) ? ty : tx;
            return {
                ...o,
                preloadedFeatures: n,
                useRender: function(t=!1) {
                    return (e,n,i,r,{latestValues: o},s)=>{
                        let a = D(e) ? to : X
                          , u = a(n, o, s, e)
                          , h = function(t, e, n) {
                            let i = {};
                            for (let r in t)
                                (J(r) || !0 === n && K(r) || !e && !K(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                            return i
                        }(n, "string" == typeof e, t)
                          , c = {
                            ...h,
                            ...u,
                            ref: r
                        };
                        return i && (c["data-projection-id"] = i),
                        (0,
                        l.createElement)(e, c)
                    }
                }(e),
                createVisualElement: i,
                projectionNodeConstructor: r,
                Component: t
            }
        }
        )(t, e, rf, iT, rp))
    },
    7003: function(t, e, n) {
        "use strict";
        function i(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function r(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        n.d(e, {
            cl: function() {
                return r
            },
            y4: function() {
                return i
            }
        })
    },
    5406: function(t, e, n) {
        "use strict";
        n.d(e, {
            u: function() {
                return i
            }
        });
        let i = (t,e,n)=>Math.min(Math.max(n, t), e)
    },
    7367: function(t, e, n) {
        "use strict";
        n.d(e, {
            s: function() {
                return V
            }
        });
        var i = n(8203)
          , r = n(6080)
          , o = n(5406)
          , s = n(6578);
        function a(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        var l = n(6307)
          , u = n(1677)
          , h = n(2416);
        let c = (t,e,n)=>{
            let i = t * t;
            return Math.sqrt(Math.max(0, n * (e * e - i) + i))
        }
          , d = [l.$, u.m, h.J]
          , p = t=>d.find(e=>e.test(t));
        function f(t) {
            let e = p(t);
            (0,
            i.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let n = e.parse(t);
            return e === h.J && (n = function({hue: t, saturation: e, lightness: n, alpha: i}) {
                t /= 360,
                n /= 100;
                let r = 0
                  , o = 0
                  , s = 0;
                if (e /= 100) {
                    let i = n < .5 ? n * (1 + e) : n + e - n * e
                      , l = 2 * n - i;
                    r = a(l, i, t + 1 / 3),
                    o = a(l, i, t),
                    s = a(l, i, t - 1 / 3)
                } else
                    r = o = s = n;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * s),
                    alpha: i
                }
            }(n)),
            n
        }
        let m = (t,e)=>{
            let n = f(t)
              , i = f(e)
              , r = {
                ...n
            };
            return t=>(r.red = c(n.red, i.red, t),
            r.green = c(n.green, i.green, t),
            r.blue = c(n.blue, i.blue, t),
            r.alpha = (0,
            s.C)(n.alpha, i.alpha, t),
            u.m.transform(r))
        }
        ;
        var v = n(9348)
          , g = n(1249);
        function y(t, e) {
            return "number" == typeof t ? n=>(0,
            s.C)(t, e, n) : r.$.test(t) ? m(t, e) : w(t, e)
        }
        let x = (t,e)=>{
            let n = [...t]
              , i = n.length
              , r = t.map((t,n)=>y(t, e[n]));
            return t=>{
                for (let e = 0; e < i; e++)
                    n[e] = r[e](t);
                return n
            }
        }
          , b = (t,e)=>{
            let n = {
                ...t,
                ...e
            }
              , i = {};
            for (let r in n)
                void 0 !== t[r] && void 0 !== e[r] && (i[r] = y(t[r], e[r]));
            return t=>{
                for (let e in i)
                    n[e] = i[e](t);
                return n
            }
        }
          , w = (t,e)=>{
            let n = g.P.createTransformer(e)
              , r = (0,
            g.V)(t)
              , o = (0,
            g.V)(e)
              , s = r.numColors === o.numColors && r.numNumbers >= o.numNumbers;
            return s ? (0,
            v.z)(x(r.values, o.values), n) : ((0,
            i.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            n=>`${n > 0 ? e : t}`)
        }
        ;
        var A = n(9195);
        let T = (t,e)=>n=>(0,
        s.C)(t, e, n);
        function V(t, e, {clamp: n=!0, ease: s, mixer: a}={}) {
            let l = t.length;
            (0,
            i.k)(l === e.length, "Both input and output ranges must be the same length"),
            (0,
            i.k)(!s || !Array.isArray(s) || s.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
            t[0] > t[l - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let u = function(t, e, n) {
                let i = []
                  , o = n || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return r.$.test(t) ? m : w;
                    else if (Array.isArray(t))
                        return x;
                    else if ("object" == typeof t)
                        return b;
                    return T
                }(t[0])
                  , s = t.length - 1;
                for (let n = 0; n < s; n++) {
                    let r = o(t[n], t[n + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[n] : e;
                        r = (0,
                        v.z)(t, r)
                    }
                    i.push(r)
                }
                return i
            }(e, s, a)
              , h = u.length
              , c = e=>{
                let n = 0;
                if (h > 1)
                    for (; n < t.length - 2 && !(e < t[n + 1]); n++)
                        ;
                let i = (0,
                A.Y)(t[n], t[n + 1], e);
                return u[n](i)
            }
            ;
            return n ? e=>c((0,
            o.u)(t[0], t[l - 1], e)) : c
        }
    },
    3016: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return i
            }
        });
        let i = "undefined" != typeof document
    },
    6578: function(t, e, n) {
        "use strict";
        n.d(e, {
            C: function() {
                return i
            }
        });
        let i = (t,e,n)=>-n * t + n * e + t
    },
    9348: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return r
            }
        });
        let i = (t,e)=>n=>e(t(n))
          , r = (...t)=>t.reduce(i)
    },
    9195: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return i
            }
        });
        let i = (t,e,n)=>{
            let i = e - t;
            return 0 === i ? 1 : (n - t) / i
        }
    },
    4776: function(t, e, n) {
        "use strict";
        n.d(e, {
            A: function() {
                return o
            }
        });
        var i = n(3016)
          , r = n(3943);
        function o() {
            if (r.O.current = !0,
            i.j) {
                if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)")
                      , e = ()=>r.n.current = t.matches;
                    t.addListener(e),
                    e()
                } else
                    r.n.current = !1
            }
        }
    },
    3943: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return r
            },
            n: function() {
                return i
            }
        });
        let i = {
            current: null
        }
          , r = {
            current: !1
        }
    },
    9420: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return r
            }
        });
        var i = n(7003);
        class r {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                i.y4)(this.subscriptions, t),
                ()=>(0,
                i.cl)(this.subscriptions, t)
            }
            notify(t, e, n) {
                let i = this.subscriptions.length;
                if (i) {
                    if (1 === i)
                        this.subscriptions[0](t, e, n);
                    else
                        for (let r = 0; r < i; r++) {
                            let i = this.subscriptions[r];
                            i && i(t, e, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    3512: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return r
            }
        });
        var i = n(959);
        function r(t) {
            let e = (0,
            i.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    274: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return a
            }
        });
        var i = n(959)
          , r = n(7154)
          , o = n(7933);
        let s = {
            any: 0,
            all: 1
        };
        function a(t, {root: e, margin: n, amount: a, once: l=!1}={}) {
            let[u,h] = (0,
            i.useState)(!1);
            return (0,
            i.useEffect)(()=>{
                if (!t.current || l && u)
                    return;
                let i = {
                    root: e && e.current || void 0,
                    margin: n,
                    amount: "some" === a ? "any" : a
                };
                return function(t, e, {root: n, margin: i, amount: a="any"}={}) {
                    if ("undefined" == typeof IntersectionObserver)
                        return ()=>{}
                        ;
                    let l = (0,
                    r.I)(t)
                      , u = new WeakMap
                      , h = new IntersectionObserver(t=>{
                        t.forEach(t=>{
                            let n = u.get(t.target);
                            if (!!n !== t.isIntersecting) {
                                if (t.isIntersecting) {
                                    let n = e(t);
                                    (0,
                                    o.m)(n) ? u.set(t.target, n) : h.unobserve(t.target)
                                } else
                                    n && (n(t),
                                    u.delete(t.target))
                            }
                        }
                        )
                    }
                    ,{
                        root: n,
                        rootMargin: i,
                        threshold: "number" == typeof a ? a : s[a]
                    });
                    return l.forEach(t=>h.observe(t)),
                    ()=>h.disconnect()
                }(t.current, ()=>(h(!0),
                l ? void 0 : ()=>h(!1)), i)
            }
            , [e, t, n, l]),
            u
        }
    },
    1121: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return o
            }
        });
        var i = n(959)
          , r = n(3016);
        let o = r.j ? i.useLayoutEffect : i.useEffect
    },
    4114: function(t, e, n) {
        "use strict";
        function i(t, e) {
            return e ? t * (1e3 / e) : 0
        }
        n.d(e, {
            R: function() {
                return i
            }
        })
    },
    2345: function(t, e, n) {
        "use strict";
        n.d(e, {
            B: function() {
                return u
            }
        });
        var i = n(5480)
          , r = n(2316)
          , o = n(9420)
          , s = n(4114);
        let a = t=>!isNaN(parseFloat(t));
        class l {
            constructor(t, e={}) {
                this.version = "7.10.3",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    this.prev = this.current,
                    this.current = t;
                    let {delta: n, timestamp: o} = i.frameData;
                    this.lastUpdated !== o && (this.timeDelta = n,
                    this.lastUpdated = o,
                    r.Z_.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = ()=>r.Z_.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t})=>{
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = a(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new o.L),
                this.events[t].add(e)
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t) {
                this.passiveEffect = t
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, n) {
                this.set(e),
                this.prev = t,
                this.timeDelta = n
            }
            get() {
                return this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                return this.canTrackVelocity ? (0,
                s.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e=>{
                    this.hasAnimated = !0,
                    this.stopAnimation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.stopAnimation && (this.stopAnimation(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.stopAnimation
            }
            clearAnimation() {
                this.stopAnimation = null
            }
            destroy() {
                this.clearListeners(),
                this.stop()
            }
        }
        function u(t, e) {
            return new l(t,e)
        }
    },
    6307: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return o
            }
        });
        var i = n(1677)
          , r = n(9379);
        let o = {
            test: (0,
            r.i)("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , i = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                n = t.substring(3, 5),
                i = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                n = t.substring(2, 3),
                i = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                n += n,
                i += i,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(i, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: i.m.transform
        }
    },
    2416: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return a
            }
        });
        var i = n(7805)
          , r = n(8979)
          , o = n(3314)
          , s = n(9379);
        let a = {
            test: (0,
            s.i)("hsl", "hue"),
            parse: (0,
            s.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: s=1})=>"hsla(" + Math.round(t) + ", " + r.aQ.transform((0,
            o.Nw)(e)) + ", " + r.aQ.transform((0,
            o.Nw)(n)) + ", " + (0,
            o.Nw)(i.Fq.transform(s)) + ")"
        }
    },
    6080: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return a
            }
        });
        var i = n(3314)
          , r = n(6307)
          , o = n(2416)
          , s = n(1677);
        let a = {
            test: t=>s.m.test(t) || r.$.test(t) || o.J.test(t),
            parse: t=>s.m.test(t) ? s.m.parse(t) : o.J.test(t) ? o.J.parse(t) : r.$.parse(t),
            transform: t=>(0,
            i.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : o.J.transform(t)
        }
    },
    1677: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return u
            }
        });
        var i = n(5406)
          , r = n(7805)
          , o = n(3314)
          , s = n(9379);
        let a = t=>(0,
        i.u)(0, 255, t)
          , l = {
            ...r.Rx,
            transform: t=>Math.round(a(t))
        }
          , u = {
            test: (0,
            s.i)("rgb", "red"),
            parse: (0,
            s.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: i=1})=>"rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + (0,
            o.Nw)(r.Fq.transform(i)) + ")"
        }
    },
    9379: function(t, e, n) {
        "use strict";
        n.d(e, {
            d: function() {
                return o
            },
            i: function() {
                return r
            }
        });
        var i = n(3314);
        let r = (t,e)=>n=>!!((0,
        i.HD)(n) && i.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
          , o = (t,e,n)=>r=>{
            if (!(0,
            i.HD)(r))
                return r;
            let[o,s,a,l] = r.match(i.KP);
            return {
                [t]: parseFloat(o),
                [e]: parseFloat(s),
                [n]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    1249: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return d
            },
            V: function() {
                return l
            }
        });
        var i = n(6080)
          , r = n(7805)
          , o = n(3314);
        let s = "${c}"
          , a = "${n}";
        function l(t) {
            "number" == typeof t && (t = `${t}`);
            let e = []
              , n = 0
              , l = 0
              , u = t.match(o.dA);
            u && (n = u.length,
            t = t.replace(o.dA, s),
            e.push(...u.map(i.$.parse)));
            let h = t.match(o.KP);
            return h && (l = h.length,
            t = t.replace(o.KP, a),
            e.push(...h.map(r.Rx.parse))),
            {
                values: e,
                numColors: n,
                numNumbers: l,
                tokenised: t
            }
        }
        function u(t) {
            return l(t).values
        }
        function h(t) {
            let {values: e, numColors: n, tokenised: r} = l(t)
              , u = e.length;
            return t=>{
                let e = r;
                for (let r = 0; r < u; r++)
                    e = e.replace(r < n ? s : a, r < n ? i.$.transform(t[r]) : (0,
                    o.Nw)(t[r]));
                return e
            }
        }
        let c = t=>"number" == typeof t ? 0 : t
          , d = {
            test: function(t) {
                var e, n;
                return isNaN(t) && (0,
                o.HD)(t) && ((null === (e = t.match(o.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(o.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: u,
            createTransformer: h,
            getAnimatableNone: function(t) {
                let e = u(t)
                  , n = h(t);
                return n(e.map(c))
            }
        }
    },
    7805: function(t, e, n) {
        "use strict";
        n.d(e, {
            Fq: function() {
                return o
            },
            Rx: function() {
                return r
            },
            bA: function() {
                return s
            }
        });
        var i = n(5406);
        let r = {
            test: t=>"number" == typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , o = {
            ...r,
            transform: t=>(0,
            i.u)(0, 1, t)
        }
          , s = {
            ...r,
            default: 1
        }
    },
    8979: function(t, e, n) {
        "use strict";
        n.d(e, {
            $C: function() {
                return h
            },
            RW: function() {
                return o
            },
            aQ: function() {
                return s
            },
            px: function() {
                return a
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var i = n(3314);
        let r = t=>({
            test: e=>(0,
            i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , o = r("deg")
          , s = r("%")
          , a = r("px")
          , l = r("vh")
          , u = r("vw")
          , h = {
            ...s,
            parse: t=>s.parse(t) / 100,
            transform: t=>s.transform(100 * t)
        }
    },
    3314: function(t, e, n) {
        "use strict";
        n.d(e, {
            HD: function() {
                return a
            },
            KP: function() {
                return r
            },
            Nw: function() {
                return i
            },
            dA: function() {
                return o
            },
            mj: function() {
                return s
            }
        });
        let i = t=>Math.round(1e5 * t) / 1e5
          , r = /(-)?([\d]*\.?[\d])+/g
          , o = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , s = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function a(t) {
            return "string" == typeof t
        }
    }
}]);
