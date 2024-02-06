(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4632], {
    9288: function (A) {
        A.exports = "/_next/static/videos/de-865b1fc3a6e7856b65accd749ca66bec.mp4"
    },
    8658: function (A) {
        A.exports = "/_next/static/videos/nosetup-v1-a2dd9cc6dbfda6dedcc04ffcbc1a8261.mp4"
    },
    2857: function (A) {
        A.exports = "/_next/static/videos/branchpr-4fefdeb02b80aac373a5556cf60028c3.mp4"
    },
    7322: function (A) {
        A.exports = "/_next/static/videos/branchpr-4fefdeb02b80aac373a5556cf60028c3.mp4"
    },
    9484: function (A) {
        A.exports = "/_next/static/videos/inspector-01ccbd02ee94241773e1ee29b528da7c.mp4"
    },
    3374: function (A) {
        A.exports = "/_next/static/videos/follow-885ad03d4af882007534d2af624c16e9.mp4"
    },
    3100: function (A, e, i) {
        "use strict";
        i.d(e, {
            l: function () {
                return h
            },
            d: function () {
                return m
            }
        });
        var t = i(1527)
            , s = i(6294);
        let n = (0,
            s.zo)("div", {
                position: "relative",
                ".nav": {
                    opacity: 0,
                    transition: "opacity 150ms ease-in-out"
                },
                "&:hover .nav": {
                    opacity: .9,
                    "&:hover": {
                        opacity: 1
                    }
                }
            })
            , o = (0,
                s.zo)("div", {
                    position: "relative",
                    overflowX: "scroll",
                    whiteSpace: "nowrap",
                    scrollSnapType: "x mandatory",
                    overscrollBehaviorX: "contain",
                    webkitOverflowScrolling: "touch",
                    "-ms-overflow-style": "none",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    variants: {
                        mobileBlock: {
                            true: {
                                position: "initial",
                                overflowX: "hidden",
                                whiteSpace: "normal",
                                scrollSnapType: "none",
                                overscrollBehaviorX: "none",
                                webkitOverflowScrolling: "auto",
                                "-ms-overflow-style": "auto",
                                scrollbarWidth: "auto",
                                "&::-webkit-scrollbar": {
                                    display: "auto"
                                },
                                "@md": {
                                    position: "relative",
                                    overflowX: "scroll",
                                    whiteSpace: "nowrap",
                                    scrollSnapType: "x mandatory",
                                    overscrollBehaviorX: "contain",
                                    webkitOverflowScrolling: "touch",
                                    "-ms-overflow-style": "none",
                                    scrollbarWidth: "none",
                                    "&::-webkit-scrollbar": {
                                        display: "none"
                                    }
                                }
                            }
                        }
                    }
                })
            , r = (0,
                s.zo)("div", {
                    verticalAlign: "top",
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    paddingY: "$3",
                    variants: {
                        mobileBlock: {
                            true: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "$3",
                                whiteSpace: "normal",
                                "@md": {
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    whiteSpace: "nowrap"
                                }
                            }
                        }
                    }
                });
        var a = i(6589)
            , l = i(3445);
        let c = A => {
            let { left: e, right: i, onClick: n, inactive: o, navPosition: r } = A;
            return (0,
                t.jsx)("div", {
                    className: "nav ".concat(s.$_),
                    children: (0,
                        t.jsx)(a.aO, {
                            size: "medium",
                            as: "button",
                            solid: !0,
                            "aria-disabled": "true",
                            tabIndex: "-1",
                            css: {
                                position: "absolute",
                                top: r || "50%",
                                left: e ? "$pageMargin" : "auto",
                                right: i ? "$pageMargin" : "auto",
                                zIndex: 9990,
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                opacity: o ? "0" : "1",
                                pointerEvents: o ? "none" : "initial",
                                display: "none",
                                "&:hover": {
                                    color: "$neutral100",
                                    span: {
                                        color: "$foreground100"
                                    }
                                },
                                "@md": {
                                    display: "flex"
                                }
                            },
                            onClick: n,
                            children: e ? (0,
                                t.jsx)(l.OL, {
                                    name: "chevron_left"
                                }) : (0,
                                    t.jsx)(l.OL, {
                                        name: "chevron_right"
                                    })
                        })
                })
        }
            ;
        var d = i(959);
        let h = A => {
            let { children: e, mobileBlock: i, itemsPerScroll: s, navPosition: a, ...l } = A
                , h = (0,
                    d.useRef)()
                , g = (0,
                    d.useRef)()
                , u = (0,
                    d.useRef)()
                , [m, x] = (0,
                    d.useState)(0)
                , [p, f] = (0,
                    d.useState)(0)
                , [w, b] = (0,
                    d.useState)(0)
                , [B, v] = (0,
                    d.useState)(0);
            return (0,
                d.useEffect)(() => {
                    let A = () => {
                        b(u.current.scrollWidth),
                            v(u.current.childElementCount),
                            x(h.current.offsetWidth)
                    }
                        ;
                    return A(),
                        window.addEventListener("resize", A),
                        () => window.removeEventListener("resize", A)
                }
                    , []),
                (0,
                    t.jsxs)(n, {
                        ref: h,
                        ...l,
                        children: [(0,
                            t.jsx)(o, {
                                ref: g,
                                onScroll: A => {
                                    f(A.currentTarget.scrollLeft)
                                }
                                ,
                                mobileBlock: i,
                                children: (0,
                                    t.jsx)(r, {
                                        ref: u,
                                        mobileBlock: i,
                                        children: e
                                    })
                            }), (0,
                                t.jsx)(c, {
                                    onClick: () => {
                                        g.current.scrollTo({
                                            behavior: "smooth",
                                            left: p - w / B * (s || 2)
                                        })
                                    }
                                    ,
                                    inactive: 0 === p,
                                    navPosition: a,
                                    left: !0
                                }), (0,
                                    t.jsx)(c, {
                                        onClick: () => {
                                            g.current.scrollTo({
                                                behavior: "smooth",
                                                left: p + w / B * (s || 2)
                                            })
                                        }
                                        ,
                                        inactive: p >= w - m,
                                        navPosition: a,
                                        right: !0
                                    })]
                    })
        }
            , g = (0,
                s.zo)("div", {
                    display: "inline-block",
                    scrollSnapCoordinate: "left",
                    scrollSnapAlign: "start",
                    whiteSpace: "nowrap",
                    "&:last-child": {
                        ".item": {
                            paddingRight: "calc($3 * 2)"
                        }
                    }
                })
            , u = (0,
                s.zo)("div", {
                    height: "100%",
                    marginRight: "$3",
                    display: "flex",
                    whiteSpace: "initial",
                    transform: "translateX(calc(max($sizes$pageWidth, 100vw) / 2 - 570px))"
                })
            , m = A => {
                let { children: e } = A;
                return (0,
                    t.jsx)(g, {
                        children: (0,
                            t.jsx)(u, {
                                className: "item",
                                children: e
                            })
                    })
            }
    },
    8082: function (A, e, i) {
        "use strict";
        i.d(e, {
            Uo: function () {
                return a
            },
            eK: function () {
                return h
            }
        });
        var t = i(1527)
            , s = i(959)
            , n = i(274)
            , o = i(6294);
        let r = (0,
            o.zo)("div", {
                willChange: "opacity",
                "@reduceMotion": {
                    opacity: "1!important"
                }
            })
            , a = A => {
                let { children: e, delay: i, duration: o, css: a, ...l } = A
                    , c = (0,
                        s.useRef)(null)
                    , d = (0,
                        n.Y)(c, {
                            once: !0
                        });
                return (0,
                    t.jsx)(r, {
                        ref: c,
                        css: {
                            opacity: d ? 1 : 0,
                            transition: "opacity ".concat(o || 1, "s ").concat(i || 0, "s ease-in-out"),
                            ...a
                        },
                        ...l,
                        children: e
                    })
            }
            ;
        var l = i(6589)
            , c = i(5154);
        let d = (0,
            o.zo)("span", {})
            , h = A => {
                let { children: e, delay: i, color: o, ...r } = A
                    , a = (0,
                        s.useRef)(null)
                    , h = (0,
                        n.Y)(a, {
                            once: !0
                        });
                return (0,
                    t.jsx)("div", {
                        className: "text-motion-outline",
                        ref: a,
                        children: (0,
                            t.jsx)(l.xv, {
                                ...r,
                                children: e && e.split("").map((A, e) => (0,
                                    t.jsx)(d, {
                                        as: c.E.span,
                                        style: {
                                            opacity: h ? 1 : 0
                                        },
                                        css: {
                                            "-webkit-text-stroke": "1px ".concat("$colors".concat(o || "$text")),
                                            color: h ? o || "$text" : "transparent",
                                            transition: "opacity 2s ".concat(.03 * e + (i || 0), "s ease-in-out, color 1s ").concat(.4 + .03 * e + (i || 0), "s ease-in-out"),
                                            "@reduceMotion": {
                                                opacity: "1 !important",
                                                color: "".concat("$colors".concat(o || "$text"))
                                            }
                                        },
                                        children: A
                                    }, "text-motion-outline-".concat(e)))
                            })
                    })
            }
            ;
        (0,
            o.zo)("span", {
                willChange: "color"
            }),
            (0,
                o.zo)("div", {
                    willChange: "opacity"
                })
    },
    7107: function (A, e, i) {
        "use strict";
        i.d(e, {
            m4: function () {
                return l
            },
            $0: function () {
                return s
            },
            NZ: function () {
                return a
            }
        });
        var t = i(6294);
        let s = (0,
            t.zo)("section", {
                paddingY: "$4"
            });
        var n = i(1527)
            , o = i(6567)
            , r = i(6589);
        let a = A => {
            let { title: e, subtitle: i, ...t } = A;
            return (0,
                n.jsx)(o.T5, {
                    ...t,
                    children: (0,
                        n.jsx)(o.Jn, {
                            children: (0,
                                n.jsx)(o.$W, {
                                    children: (0,
                                        n.jsxs)(r.kC, {
                                            flexWrap: "wrap",
                                            gap: 1,
                                            children: [(0,
                                                n.jsx)(r.xv, {
                                                    as: "h2",
                                                    size: {
                                                        "@initial": 20,
                                                        "@sm": 32
                                                    },
                                                    children: e
                                                }), (0,
                                                    n.jsx)(r.xv, {
                                                        as: "p",
                                                        size: {
                                                            "@initial": 20,
                                                            "@sm": 32
                                                        },
                                                        css: {
                                                            opacity: .6
                                                        },
                                                        children: i || null
                                                    })]
                                        })
                                })
                        })
                })
        }
            , l = (0,
                t.zo)("div", {
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    padding: "$6",
                    backgroundColor: "$neutral600",
                    borderRadius: 10,
                    outline: "2px solid transparent",
                    transition: "outline 300ms, transform 300ms",
                    "&:hover, &:focus, &:active": {
                        outline: "2px solid $foreground100"
                    }
                })
    },
    3425: function (A, e, i) {
        "use strict";
        i.d(e, {
            l: function () {
                return p
            },
            Q: function () {
                return f
            }
        });
        var t = i(1527)
            , s = i(7107)
            , n = i(8525)
            , o = i.n(n)
            , r = i(6589)
            , a = i(3100)
            , l = i(6294)
            , c = i(3445)
            , d = {
                src: "/_next/static/media/astro.f04506ff.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            }
            , h = {
                src: "/_next/static/media/gatsby.2a541057.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            }
            , g = {
                src: "/_next/static/media/next.76cc1788.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            }
            , u = {
                src: "/_next/static/media/typescript.cfba3274.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            };
        let m = [{
            title: "React + Vite",
            description: "Code your React app powered by Vite.",
            icon: {
                src: "/_next/static/media/react.0821006e.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-vite-react/"
        }, {
            title: "Next.js",
            description: "Next.js project bootstrapped with create-next-app.",
            icon: g,
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-next.js/"
        }, {
            title: "Vue + Vite",
            description: "This template should help get you started developing with Vue 3 in Vite.",
            icon: {
                src: "/_next/static/media/vue.64ba97aa.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-vue"
        }, {
            title: "Angular",
            description: "Experiment with Angular and prototype your web app quickly.",
            icon: {
                src: "/_next/static/media/angular.a1bcd034.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "white",
            link: "/p/sandbox/angular-cli-n61gs"
        }, {
            title: "Nuxt",
            description: "Nuxt project bootstrapped by create-nuxt-app.",
            icon: {
                src: "/_next/static/media/nuxt.f13c394c.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "#00DC82",
            link: "/p/github/codesandbox/codesandbox-template-nuxt/"
        }, {
            title: "SvelteKit",
            description: "SvelteKit project bootstrapped using the Svelte CLI.",
            icon: {
                src: "/_next/static/media/svelte.2dc1262b.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "#FF3E00",
            link: "/p/github/codesandbox/codesandbox-template-svelte-kit"
        }, {
            title: "Remix",
            description: "Remix project bootstrapped from the official template.",
            icon: {
                src: "/_next/static/media/remix.32b46be6.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-remix/"
        }, {
            title: "Gatsby",
            description: "Gatsby project bootstrapped with create-gatsby.",
            icon: h,
            color: "#663399",
            link: "/p/github/codesandbox/codesandbox-template-gatsby/"
        }, {
            title: "Astro Blog",
            description: "Astro starter project to help you quickly code your new blog.",
            icon: d,
            color: "white",
            link: "/p/github/codesandbox/blog-example"
        }, {
            title: "Next.js Commerce",
            description: "All-in-one starter kit for an E-commerce project powered by Next.js.",
            icon: g,
            color: "white",
            link: "/p/github/vercel/commerce/"
        }, {
            title: "Web Image Crawler",
            description: "Web crawler built with Node.js + TS + Cheerio.",
            icon: h,
            color: "white",
            link: "/p/github/codesandbox/Site-Image-Crawler-with-node/"
        }, {
            title: "React TypeScript",
            description: "React and TypeScript example starter project.",
            icon: u,
            color: "white",
            link: "/s/react-typescript-react-ts"
        }, {
            title: "TypeScript",
            description: "Blank TypeScript project.",
            icon: u,
            color: "#007ACC",
            link: "/p/github/codesandbox/codesandbox-template-blank-ts/"
        }, {
            title: "Deno",
            description: "Server starter project based on the Deno runtime.",
            icon: {
                src: "/_next/static/media/deno.e2e7c4ee.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            },
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-deno-server/"
        }, {
            title: "Astro Starter",
            description: "Simple Astro project to help you build a fast, content-focused website.",
            icon: d,
            color: "white",
            link: "/p/github/codesandbox/codesandbox-template-astro/"
        }]
            , x = (0,
                l.zo)(s.m4, {
                    width: 200,
                    padding: "$4",
                    display: "flex",
                    gap: "$3",
                    flexDirection: "column",
                    justifyContent: "center",
                    "@sm": {
                        width: 225
                    }
                })
            , p = () => (0,
                t.jsxs)(a.l, {
                    itemsPerScroll: 5,
                    children: [m && m.map((A, e) => {
                        let { icon: i, title: s, link: n, color: l } = A;
                        return (0,
                            t.jsx)(a.d, {
                                children: (0,
                                    t.jsxs)(x, {
                                        as: "a",
                                        "aria-label": "Create a new project using ".concat(s, " template."),
                                        href: n,
                                        target: "_blank",
                                        radius: 3,
                                        children: [(0,
                                            t.jsx)(o(), {
                                                src: i,
                                                width: 48,
                                                height: 48,
                                                alt: s
                                            }), (0,
                                                t.jsx)(r.xv, {
                                                    size: {
                                                        "@initial": 14,
                                                        "@sm": 16
                                                    },
                                                    lineHeight: "100",
                                                    children: s
                                                })]
                                    })
                            }, "discover-template-".concat(e))
                    }
                    ), (0,
                        t.jsx)(a.d, {
                            children: (0,
                                t.jsx)(x, {
                                    as: "a",
                                    "aria-label": "More templates",
                                    href: "/s/",
                                    radius: 3,
                                    target: "_blank",
                                    css: {
                                        alignItems: "center"
                                    },
                                    children: (0,
                                        t.jsx)(r.aO, {
                                            customColor: "gray",
                                            size: "small",
                                            children: (0,
                                                t.jsx)(c.OL, {
                                                    name: "add"
                                                })
                                        })
                                })
                        })]
                })
            , f = () => (0,
                t.jsxs)(s.$0, {
                    id: "discover-templates",
                    children: [(0,
                        t.jsx)(s.NZ, {
                            title: "Build the next big thing. ",
                            subtitle: "Start with a click."
                        }), (0,
                            t.jsx)(p, {})]
                })
    },
    4632: function (A, e, i) {
        "use strict";
        i.d(e, {
            EL: function () {
                return Ah
            },
            Ug: function () {
                return Ai
            },
            YR: function () {
                return Am
            },
            sv: function () {
                return Comment
            },
            W2: function () {
                return s
            },
            dq: function () {
                return v
            },
            Jq: function () {
                return $
            },
            o1: function () {
                return AC
            },
            Ng: function () {
                return AU
            },
            HM: function () {
                return AW
            },
            FT: function () {
                return AF
            },
            i5: function () {
                return AO
            },
            lN: function () {
                return Ap
            },
            bo: function () {
                return g
            },
            Ny: function () {
                return AA
            },
            _V: function () {
                return Q
            },
            w_: function () {
                return An
            },
            AJ: function () {
                return Av
            },
            QZ: function () {
                return x
            },
            Hl: function () {
                return Z
            },
            H: function () {
                return Al
            }
        });
        var t = i(6294);
        let s = (0,
            t.zo)("section", {
                paddingY: "$8",
                position: "relative",
                "@xl": {
                    paddingY: "$10"
                }
            });
        var n = i(1527)
            , o = i(6589)
            , r = i(6567);
        let a = {
            sandboxes: {
                title: "No setup.",
                subTitle: "One click and start coding.",
                body1: "Start coding instantly without worrying about the configuration.",
                body2: "Our sandboxes have everything you need: dev servers, unit tests, Storybook and other devtools."
            },
            repositories: {
                title: "No setup.",
                subTitle: "One click and start coding.",
                body1: "Get candidates right into coding.",
                body2: "Create self-contained coding challenges based on your codebase or a template. With no time wasted, candidates can focus 100% on coding."
            }
        };
        var l = i(8658)
            , c = i.n(l);
        let d = (0,
            t.zo)("div", {
                backgroundColor: "transparent",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "$2",
                position: "relative",
                zIndex: 100
            })
            , h = A => (0,
                n.jsx)(d, {
                    ...A,
                    children: (0,
                        n.jsx)("video", {
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            style: {
                                width: "100%",
                                height: "auto"
                            },
                            children: (0,
                                n.jsx)("source", {
                                    src: c()
                                })
                        })
                })
            , g = A => {
                let { repositories: e, ...i } = A
                    , t = e ? a.repositories : a.sandboxes
                    , { title: l, subTitle: c, body1: d, body2: g } = t;
                return (0,
                    n.jsx)(s, {
                        css: {
                            position: "relative"
                        },
                        ...i,
                        children: (0,
                            n.jsxs)(r.T5, {
                                display: "flex",
                                gap: {
                                    "@initial": 4,
                                    "@sm": 8
                                },
                                children: [(0,
                                    n.jsxs)(r.Jn, {
                                        align: "end",
                                        css: {
                                            rowGap: "$3"
                                        },
                                        children: [(0,
                                            n.jsx)(r.$W, {
                                                css: {
                                                    "@md": {
                                                        $$col: 7
                                                    }
                                                },
                                                children: (0,
                                                    n.jsxs)(o.xv, {
                                                        as: "h2",
                                                        size: {
                                                            "@initial": 48,
                                                            "@sm": 72,
                                                            "@md": 96
                                                        },
                                                        children: [l, (0,
                                                            n.jsx)("br", {}), (0,
                                                                n.jsx)(o.xv, {
                                                                    as: "span",
                                                                    size: {
                                                                        "@initial": 48,
                                                                        "@sm": 72,
                                                                        "@md": 96
                                                                    },
                                                                    css: {
                                                                        color: "$foreground700"
                                                                    },
                                                                    children: c
                                                                })]
                                                    })
                                            }), (0,
                                                n.jsx)(r.$W, {
                                                    css: {
                                                        "@sm": {
                                                            $$col: 11
                                                        },
                                                        "@md": {
                                                            $$col: 5
                                                        }
                                                    },
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            css: {
                                                                maxWidth: 330
                                                            },
                                                            children: [(0,
                                                                n.jsx)(o.xv, {
                                                                    as: "p",
                                                                    size: {
                                                                        "@initial": 18,
                                                                        "@sm": 20
                                                                    },
                                                                    css: {
                                                                        fontWeight: "$regular"
                                                                    },
                                                                    children: d
                                                                }), (0,
                                                                    n.jsx)(o.xv, {
                                                                        as: "p",
                                                                        size: {
                                                                            "@initial": 18,
                                                                            "@sm": 20
                                                                        },
                                                                        css: {
                                                                            color: "$foreground700",
                                                                            fontWeight: "$regular"
                                                                        },
                                                                        children: g
                                                                    })]
                                                        })
                                                })]
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            children: (0,
                                                n.jsx)(r.$W, {
                                                    children: (0,
                                                        n.jsx)(o.kC, {
                                                            css: {
                                                                position: "relative",
                                                                pointerEvents: "none",
                                                                "&::before": {
                                                                    content: "",
                                                                    size: 1600,
                                                                    position: "absolute",
                                                                    zIndex: 1,
                                                                    top: "50%",
                                                                    left: "50%",
                                                                    transform: "translate(-50%, -50%)",
                                                                    opacity: .2,
                                                                    background: "radial-gradient(circle farthest-side at 50% 50%, $purple700 0%, transparent 100%)"
                                                                }
                                                            },
                                                            children: (0,
                                                                n.jsx)(h, {})
                                                        })
                                                })
                                        })]
                            })
                    })
            }
            ;
        var u = i(8082)
            , m = i(3425);
        let x = () => (0,
            n.jsx)(s, {
                children: (0,
                    n.jsxs)(o.kC, {
                        flow: "column",
                        gap: 6,
                        children: [(0,
                            n.jsx)(r.T5, {
                                children: (0,
                                    n.jsx)(r.Jn, {
                                        as: "section",
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                col: "12",
                                                children: (0,
                                                    n.jsxs)(o.kC, {
                                                        flow: "column",
                                                        align: "center",
                                                        gap: 4,
                                                        children: [(0,
                                                            n.jsxs)(o.xv, {
                                                                as: "h2",
                                                                size: {
                                                                    "@initial": 48,
                                                                    "@sm": 72,
                                                                    "@md": 200
                                                                },
                                                                align: "center",
                                                                css: {
                                                                    maxWidth: 900
                                                                },
                                                                children: [(0,
                                                                    n.jsx)(o.xv, {
                                                                        as: "div",
                                                                        size: {
                                                                            "@initial": 96,
                                                                            "@sm": 288
                                                                        },
                                                                        css: {
                                                                            color: "$lime700"
                                                                        },
                                                                        children: "100+"
                                                                    }), (0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "div",
                                                                            css: {
                                                                                color: "$lime500"
                                                                            },
                                                                            children: "templates"
                                                                        }), (0,
                                                                            n.jsx)(o.xv, {
                                                                                as: "div",
                                                                                css: {
                                                                                    color: "$lime300"
                                                                                },
                                                                                children: "to start."
                                                                            })]
                                                            }), (0,
                                                                n.jsxs)(u.Uo, {
                                                                    children: [(0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "p",
                                                                            size: {
                                                                                "@initial": 18,
                                                                                "@sm": 24
                                                                            },
                                                                            align: "center",
                                                                            css: {
                                                                                color: "$foreground800",
                                                                                maxWidth: 560
                                                                            },
                                                                            children: "Learn and experiment quickly using our templates for the main JavaScript frameworks."
                                                                        }), " "]
                                                                })]
                                                    })
                                            })
                                    })
                            }), (0,
                                n.jsx)(m.l, {})]
                    })
            });
        var p = i(3100)
            , f = i(8525)
            , w = i.n(f)
            , b = i(9288)
            , B = i.n(b);
        let v = () => (0,
            n.jsx)(s, {
                css: {
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                },
                children: (0,
                    n.jsx)(r.T5, {
                        children: (0,
                            n.jsxs)(r.Jn, {
                                align: "center",
                                children: [(0,
                                    n.jsx)(r.$W, {
                                        css: {
                                            "@md": {
                                                $$col: 5
                                            }
                                        },
                                        children: (0,
                                            n.jsxs)(o.kC, {
                                                flow: "column",
                                                gap: 4,
                                                css: {
                                                    "@md": {
                                                        maxWidth: 400
                                                    }
                                                },
                                                children: [(0,
                                                    n.jsx)(o.xv, {
                                                        as: "h2",
                                                        size: {
                                                            "@initial": 24,
                                                            "@sm": 32
                                                        },
                                                        children: "Dependency Picker"
                                                    }), (0,
                                                        n.jsxs)(o.xv, {
                                                            as: "h3",
                                                            size: {
                                                                "@initial": 48,
                                                                "@sm": 72,
                                                                "@md": 96
                                                            },
                                                            children: [(0,
                                                                n.jsx)(o.xv, {
                                                                    css: {
                                                                        color: "$foreground100"
                                                                    },
                                                                    children: "1M+"
                                                                }), " ", (0,
                                                                    n.jsx)("br", {}), (0,
                                                                        n.jsx)(o.xv, {
                                                                            css: {
                                                                                color: "$foreground800"
                                                                            },
                                                                            children: "npm packages waiting for you."
                                                                        })]
                                                        }), (0,
                                                            n.jsx)(o.xv, {
                                                                as: "p",
                                                                size: {
                                                                    "@initial": 18,
                                                                    "@sm": 20
                                                                },
                                                                css: {
                                                                    color: "$foreground800",
                                                                    maxWidth: 540,
                                                                    "@md": {
                                                                        maxWidth: 400
                                                                    }
                                                                },
                                                                children: "Stop using the terminal to do quick tests. Add or update any dependency directly through our interface."
                                                            }), (0,
                                                                n.jsx)(o.rU, {
                                                                    href: "/s",
                                                                    target: "_blank",
                                                                    size: {
                                                                        "@initial": 18,
                                                                        "@sm": 20
                                                                    },
                                                                    color: "lime",
                                                                    iconRight: "chevron_right",
                                                                    children: "Try now"
                                                                })]
                                            })
                                    }), (0,
                                        n.jsx)(r.$W, {
                                            css: {
                                                position: "sticky",
                                                top: 0,
                                                "@md": {
                                                    $$col: 6,
                                                    $$offset: 1
                                                }
                                            },
                                            children: (0,
                                                n.jsx)(o.kC, {
                                                    flow: "column",
                                                    align: "start",
                                                    justify: "center",
                                                    children: (0,
                                                        n.jsx)("video", {
                                                            autoPlay: !0,
                                                            loop: !0,
                                                            muted: !0,
                                                            style: {
                                                                width: "auto",
                                                                height: "75vh",
                                                                borderRadius: 4
                                                            },
                                                            children: (0,
                                                                n.jsx)("source", {
                                                                    src: B()
                                                                })
                                                        })
                                                })
                                        })]
                            })
                    })
            });
        var E = i(3445);
        let j = {
            sandboxes: {
                title: "Many reasons to start now.",
                body: "CodeSandbox is made by developers for developers to deliver a streamlined experience and leave all the boring stuff out of the workflow. Just focus on what you love to do: code your amazing ideas.",
                cta: "Start coding now",
                link: "/s",
                items: [{
                    icon: "draw",
                    color: "#FFE600",
                    title: "Rapid prototyping",
                    description: "Quickly create real, working prototypes. Test ideas earlier and iterate more."
                }, {
                    icon: "code",
                    color: "#F44172",
                    title: "Knowledge sharing",
                    description: "Use code, apps, and templates collectively. Learn from each other and bake-in best practice."
                }, {
                    icon: "quick_phrases",
                    color: "#6FEC5B",
                    title: "Better feedback",
                    description: "Give and get feedback, on code or visuals, right in the editor. Take action and move forward faster."
                }, {
                    customIcon: E.lZ,
                    color: "#FF3D00",
                    title: "Supercharged with npm",
                    description: "Use private packages, or any of the 1M+ public ones, to build powerful apps quickly."
                }, {
                    icon: "bolt",
                    color: "#38F0DA",
                    title: "Optimized for frameworks",
                    description: "Custom environments built specifically for React, Vue, Angular, and many more."
                }, {
                    customIcon: E.Tf,
                    color: "#D9D9D9",
                    title: "Integrated with GitHub",
                    description: "Import and run repos direct from GitHub. Convert your sandbox into a repo to improve your git workflow."
                }]
            },
            repositories: {
                title: "Many reasons to start now.",
                body: "CodeSandbox streamlines your git workflow and saves you hours every week by automating tasks. Import a repo and bring your workflow to a whole new level.",
                cta: "Import a repo",
                link: "/s",
                items: [{
                    icon: "bug_report",
                    color: "#FF3D00",
                    title: "Collaborate with anyone",
                    description: "Collaborate asynchronously using comments or host live sessions to code together and guide anyone through your code. "
                }, {
                    icon: "code",
                    color: "#FFE600",
                    title: "Save hours reviewing PRs",
                    description: "Review PRs in record time with our editable deployment previews."
                }, {
                    icon: "code_blocks",
                    color: "#F44172",
                    title: "Create dev containers",
                    description: "Get your whole dev team using fast, standardized dev environments."
                }, {
                    icon: "devices",
                    color: "#6FEC5B",
                    title: "Code from your iPad",
                    description: "Keep working on the go by using our iOS App."
                }, {
                    customIcon: E.Tf,
                    color: "#D9D9D9",
                    title: "Use our GitHub App",
                    description: "Get a live dev environment for every PR, powered by our powerful microVMs."
                }, {
                    icon: "table",
                    color: "#00B2FF",
                    title: "Brancheable databases",
                    description: "Test schema changes inside a PR without having to roll back or migrate in your own development environment."
                }]
            }
        }
            , Q = A => {
                let { repositories: e } = A
                    , i = e ? j.repositories : j.sandboxes;
                return (0,
                    n.jsxs)(s, {
                        children: [(0,
                            n.jsx)(r.T5, {
                                children: (0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsx)(u.eK, {
                                                        as: "h2",
                                                        size: {
                                                            "@initial": 72,
                                                            "@sm": 200
                                                        },
                                                        css: {
                                                            marginBottom: "$0",
                                                            "@sm": {
                                                                marginBottom: "$5"
                                                            }
                                                        },
                                                        children: i.title
                                                    })
                                            })
                                    })
                            }), (0,
                                n.jsxs)(p.l, {
                                    children: [i && i.items.map((A, e) => {
                                        let { icon: i, color: t, title: s, description: r, customIcon: a } = A;
                                        return (0,
                                            n.jsx)(p.d, {
                                                children: (0,
                                                    n.jsx)(o.Zb, {
                                                        className: "card",
                                                        children: (0,
                                                            n.jsxs)(o.kC, {
                                                                flow: e % 2 == 0 ? "column-reverse" : "column",
                                                                justify: "space-between",
                                                                gap: 4,
                                                                css: {
                                                                    width: 237,
                                                                    height: 402,
                                                                    "@sm": {
                                                                        width: 300,
                                                                        height: 500
                                                                    }
                                                                },
                                                                children: [(0,
                                                                    n.jsxs)(o.aO, {
                                                                        as: "div",
                                                                        size: "large",
                                                                        customColor: t,
                                                                        children: [i && (0,
                                                                            n.jsx)(E.OL, {
                                                                                name: i
                                                                            }), a && (0,
                                                                                n.jsx)(A.customIcon, {})]
                                                                    }), (0,
                                                                        n.jsxs)(o.kC, {
                                                                            flow: "column",
                                                                            gap: 3,
                                                                            children: [(0,
                                                                                n.jsx)(o.xv, {
                                                                                    as: "h3",
                                                                                    size: 16,
                                                                                    css: {
                                                                                        color: "$foreground600"
                                                                                    },
                                                                                    children: s
                                                                                }), (0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "p",
                                                                                        size: 24,
                                                                                        css: {
                                                                                            color: "$foreground300"
                                                                                        },
                                                                                        children: r
                                                                                    })]
                                                                        })]
                                                            })
                                                    })
                                            }, "sandbox-reasons-".concat(e))
                                    }
                                    ), (0,
                                        n.jsx)(p.d, {
                                            children: (0,
                                                n.jsx)(o.Zb, {
                                                    className: "card",
                                                    as: "a",
                                                    href: "/s",
                                                    target: "_blank",
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            justify: "center",
                                                            align: "center",
                                                            gap: 4,
                                                            css: {
                                                                width: 237,
                                                                height: 402,
                                                                "@sm": {
                                                                    width: 300,
                                                                    height: 500
                                                                }
                                                            },
                                                            children: [(0,
                                                                n.jsx)(o.aO, {
                                                                    as: "div",
                                                                    size: "medium",
                                                                    customColor: "$lime700",
                                                                    children: (0,
                                                                        n.jsx)(E.OL, {
                                                                            name: "add"
                                                                        })
                                                                }), (0,
                                                                    n.jsx)(o.rU, {
                                                                        as: "span",
                                                                        size: 16,
                                                                        color: "lime",
                                                                        children: "Start a new project today"
                                                                    })]
                                                        })
                                                })
                                        })]
                                })]
                    })
            }
            ;
        var z = i(4661)
            , y = i.n(z)
            , C = {
                src: "/_next/static/media/screenshot-01.714ba2d2.jpg",
                height: 1300,
                width: 2312,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGVB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAQABPyFw/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFxABAAMAAAAAAAAAAAAAAAAAAQARIf/aAAgBAQABPxC6aSf/2Q==",
                blurWidth: 8,
                blurHeight: 4
            }
            , k = {
                src: "/_next/static/media/screenshot-02.fc580a36.jpg",
                height: 297,
                width: 526,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAABnien/8QAFhAAAwAAAAAAAAAAAAAAAAAABRES/9oACAEBAAEFAh6r/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AVyf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAECAQE/AXWf/8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAAiH/2gAIAQEABj8Cuw8E/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAhUf/aAAgBAQABPyEUDQT/2gAMAwEAAgADAAAAEAf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAwEBPxCD/8QAFxEAAwEAAAAAAAAAAAAAAAAAADGBsf/aAAgBAgEBPxB8w//EABgQAQADAQAAAAAAAAAAAAAAAAEAESFR/9oACAEBAAE/EFHsRQ1r0Z//2Q==",
                blurWidth: 8,
                blurHeight: 5
            }
            , O = {
                src: "/_next/static/media/screenshot-03.04bd5e71.jpg",
                height: 481,
                width: 854,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABmCX/xAAWEAADAAAAAAAAAAAAAAAAAAAFERL/2gAIAQEAAQUCEq//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQMBAT8Ban//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAABBQAAAAAAAAAAAAAAAAABAAIDESH/2gAIAQEABj8CktoOBf/EABcQAAMBAAAAAAAAAAAAAAAAAAABYRH/2gAIAQEAAT8hiyaqf//aAAwDAQACAAMAAAAQA//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EIP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhUf/aAAgBAQABPxBN5shM26Of/9k=",
                blurWidth: 8,
                blurHeight: 5
            }
            , D = {
                src: "/_next/static/media/screenshot-04.4f3fd80a.jpg",
                height: 496,
                width: 884,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGWB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAQABPyFMv//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAQADAQAAAAAAAAAAAAAAAAEAETEh/9oACAEBAAE/EDV7dnQdn//Z",
                blurWidth: 8,
                blurHeight: 4
            };
        let I = (0,
            t.zo)("div", {
                position: "absolute",
                zIndex: 100,
                display: "none",
                "@md": {
                    display: "block"
                }
            })
            , $ = () => (0,
                n.jsx)(s, {
                    css: {
                        overflow: "hidden"
                    },
                    children: (0,
                        n.jsxs)(r.T5, {
                            display: "flex",
                            gap: {
                                "@initial": 5,
                                "@sm": 8
                            },
                            children: [(0,
                                n.jsx)(r.Jn, {
                                    children: (0,
                                        n.jsx)(r.$W, {
                                            children: (0,
                                                n.jsx)(o.kC, {
                                                    flow: "column",
                                                    align: "center",
                                                    gap: 5,
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 3,
                                                            children: [(0,
                                                                n.jsx)(o.xv, {
                                                                    as: "h2",
                                                                    size: {
                                                                        "@initial": 24,
                                                                        "@sm": 32
                                                                    },
                                                                    children: "Discover"
                                                                }), (0,
                                                                    n.jsx)(o.xv, {
                                                                        as: "h3",
                                                                        size: {
                                                                            "@initial": 48,
                                                                            "@sm": 72,
                                                                            "@md": 96,
                                                                            "@lg": 128,
                                                                            "@xl": 144
                                                                        },
                                                                        css: {
                                                                            textAlign: "center",
                                                                            maxWidth: 650,
                                                                            "@lg": {
                                                                                maxWidth: 800
                                                                            },
                                                                            "@xl": {
                                                                                maxWidth: 1e3
                                                                            }
                                                                        },
                                                                        children: "Get inspired with creative sandboxes."
                                                                    })]
                                                        })
                                                })
                                        })
                                }), (0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsxs)(r.$W, {
                                                css: {
                                                    position: "relative"
                                                },
                                                children: [(0,
                                                    n.jsx)(w(), {
                                                        alt: "CodeSandbox",
                                                        src: C,
                                                        width: 1920,
                                                        height: 1080,
                                                        style: {
                                                            width: "100%",
                                                            height: "auto"
                                                        }
                                                    }), (0,
                                                        n.jsx)(I, {
                                                            css: {
                                                                top: -100,
                                                                left: -400,
                                                                width: 526,
                                                                height: 297
                                                            },
                                                            children: (0,
                                                                n.jsx)(w(), {
                                                                    alt: "CodeSandbox",
                                                                    src: k,
                                                                    width: 526,
                                                                    height: 297,
                                                                    style: {
                                                                        width: "100%",
                                                                        height: "auto"
                                                                    }
                                                                })
                                                        }), (0,
                                                            n.jsx)(I, {
                                                                css: {
                                                                    bottom: -400,
                                                                    left: -700,
                                                                    width: 854,
                                                                    height: 481
                                                                },
                                                                children: (0,
                                                                    n.jsx)(w(), {
                                                                        alt: "CodeSandbox",
                                                                        src: O,
                                                                        width: 854,
                                                                        height: 481,
                                                                        style: {
                                                                            width: "100%",
                                                                            height: "auto"
                                                                        }
                                                                    })
                                                            }), (0,
                                                                n.jsx)(I, {
                                                                    css: {
                                                                        bottom: -100,
                                                                        right: -700,
                                                                        width: 884,
                                                                        height: 496
                                                                    },
                                                                    children: (0,
                                                                        n.jsx)(w(), {
                                                                            alt: "CodeSandbox",
                                                                            src: D,
                                                                            width: 884,
                                                                            height: 496,
                                                                            style: {
                                                                                width: "100%",
                                                                                height: "auto"
                                                                            }
                                                                        })
                                                                })]
                                            })
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            children: (0,
                                                n.jsx)(r.$W, {
                                                    children: (0,
                                                        n.jsx)(o.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 5,
                                                            children: (0,
                                                                n.jsxs)(o.kC, {
                                                                    flow: "column",
                                                                    align: "center",
                                                                    gap: 3,
                                                                    children: [(0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "p",
                                                                            size: {
                                                                                "@initial": 18,
                                                                                "@sm": 20
                                                                            },
                                                                            css: {
                                                                                maxWidth: 300,
                                                                                textAlign: "center",
                                                                                color: "$foreground600",
                                                                                "@sm": {
                                                                                    maxWidth: 500
                                                                                }
                                                                            },
                                                                            children: "Like an idea? Take it into your project. It's simple. Click, fork, tweak and keep building."
                                                                        }), (0,
                                                                            n.jsx)(y(), {
                                                                                href: "/discover",
                                                                                children: (0,
                                                                                    n.jsx)(o.rU, {
                                                                                        as: "span",
                                                                                        size: {
                                                                                            "@initial": 18,
                                                                                            "@sm": 20
                                                                                        },
                                                                                        color: "lime",
                                                                                        iconRight: "chevron_right",
                                                                                        children: "Discover new ideas"
                                                                                    })
                                                                            })]
                                                                })
                                                        })
                                                })
                                        })]
                        })
                })
            , W = (0,
                t.zo)("div", {
                    maxWidth: 1440,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    flexWrap: "wrap",
                    gap: "1px",
                    background: "$neutral600",
                    position: "relative",
                    zIndex: 1
                })
            , R = (0,
                t.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "$5",
                    color: "$text",
                    background: "$background",
                    padding: "$6",
                    "@md": {
                        padding: "$10"
                    },
                    variants: {
                        size: {
                            full: {
                                gridColumn: "span 11",
                                "@md": {
                                    gridColumn: "span 11"
                                }
                            },
                            large: {
                                gridColumn: "span 11",
                                "@sm": {
                                    gridColumn: "span 5"
                                },
                                "@md": {
                                    gridColumn: "span 6"
                                }
                            },
                            small: {
                                gridColumn: "span 11",
                                "@sm": {
                                    gridColumn: "span 5"
                                },
                                "@md": {
                                    gridColumn: "span 4"
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        size: "full"
                    }
                })
            , S = (0,
                t.zo)("div", {
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignText: "center",
                    margin: "0 auto",
                    marginTop: "$5",
                    "@md": {
                        marginBottom: "-$6"
                    }
                })
            , M = (0,
                t.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: "$3"
                })
            , T = (0,
                t.zo)("div", {
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column"
                })
            , U = (0,
                t.zo)("div", {
                    size: "$5",
                    borderRadius: "$rounded",
                    position: "relative",
                    overflow: "hidden",
                    "@sm": {
                        size: 40
                    }
                })
            , H = A => {
                let { name: e, title: i, img: t } = A;
                return (0,
                    n.jsxs)(M, {
                        children: [(0,
                            n.jsx)(U, {
                                width: 56,
                                height: 56,
                                src: t,
                                children: (0,
                                    n.jsx)(w(), {
                                        src: t,
                                        alt: e,
                                        fill: !0,
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                            }), (0,
                                n.jsxs)(T, {
                                    children: [(0,
                                        n.jsx)(o.xv, {
                                            as: "div",
                                            size: 14,
                                            fontWeight: "bold",
                                            lineHeight: "140",
                                            children: e
                                        }), (0,
                                            n.jsx)(o.xv, {
                                                as: "div",
                                                size: 14,
                                                css: {
                                                    opacity: .8
                                                },
                                                fontWeight: "regular",
                                                lineHeight: "140",
                                                children: i
                                            })]
                                })]
                    })
            }
            ;
        var F = {
            src: "/_next/static/media/brian.e771626e.jpeg",
            height: 96,
            width: 96,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABiJf/xAAWEAEBAQAAAAAAAAAAAAAAAAAEAhL/2gAIAQEAAQUC2ql//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAXEAEAAwAAAAAAAAAAAAAAAAABABMh/9oACAEBAAY/Ak2wZ//EABkQAAEFAAAAAAAAAAAAAAAAAAEAQVFhgf/aAAgBAQABPyEBeHfKX//aAAwDAQACAAMAAAAQD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBOF//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxBKf//EABgQAQEBAQEAAAAAAAAAAAAAAAERIQCB/9oACAEBAAE/EGmi6oChQ4z5O//Z",
            blurWidth: 8,
            blurHeight: 8
        }
            , P = {
                src: "/_next/static/media/jonnie.e2febe31.jpeg",
                height: 96,
                width: 96,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG0H//EABcQAAMBAAAAAAAAAAAAAAAAAAECAxP/2gAIAQEAAQUCU11//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGhAAAQUBAAAAAAAAAAAAAAAAAgAREhMiMf/aAAgBAQAGPwIsFZJ+L//EABgQAAIDAAAAAAAAAAAAAAAAAAEhAFHR/9oACAEBAAE/ITUAM1U//9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAwEBAAAAAAAAAAAAAAAAAREhMQD/2gAIAQEAAT8QIqlIgeqEHKjzv//Z",
                blurWidth: 8,
                blurHeight: 8
            }
            , L = {
                src: "/_next/static/media/David-Madner.07173435.jpg",
                height: 256,
                width: 256,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABgIf/xAAVEAEBAAAAAAAAAAAAAAAAAAASA//aAAgBAQABBQJGf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AZf/xAAXEAEBAQEAAAAAAAAAAAAAAAABMQAS/9oACAEBAAY/AuyjR3//xAAZEAACAwEAAAAAAAAAAAAAAAARIQABMfD/2gAIAQEAAT8ht/IGDnP/2gAMAwEAAgADAAAAEAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EHsP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QAX//xAAYEAEBAQEBAAAAAAAAAAAAAAABEUEAIf/aAAgBAQABPxBzbWZCQCzHoXv/2Q==",
                blurWidth: 8,
                blurHeight: 8
            }
            , J = {
                src: "/_next/static/media/microsoft.ac423cce.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
            , _ = {
                src: "/_next/static/media/shopify.47138bed.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
            , V = {
                src: "/_next/static/media/atlassian.a69744e2.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
            , N = {
                src: "/_next/static/media/stripe.f9cfc900.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
            , G = {
                src: "/_next/static/media/framer.99c06b60.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            }
            , Y = {
                src: "/_next/static/media/algolia.587bc5ae.svg",
                height: 114,
                width: 194,
                blurWidth: 0,
                blurHeight: 0
            };
        let K = (0,
            t.zo)("div", {
                background: "$background",
                color: "$text",
                borderBottom: "1px solid $neutral600"
            })
            , X = (0,
                t.zo)("div", {
                    width: "50%",
                    position: "relative",
                    "@sm": {
                        width: "calc(100% / 3)"
                    },
                    "@md": {
                        width: "50%"
                    }
                })
            , Z = () => (0,
                n.jsxs)("section", {
                    className: t.Wb,
                    children: [(0,
                        n.jsx)(K, {
                            css: {
                                paddingY: "$8",
                                "@md": {
                                    paddingY: "$10"
                                }
                            },
                            children: (0,
                                n.jsx)(r.T5, {
                                    children: (0,
                                        n.jsx)(r.Jn, {
                                            children: (0,
                                                n.jsx)(r.$W, {
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 3,
                                                            children: [(0,
                                                                n.jsx)(u.Uo, {
                                                                    children: (0,
                                                                        n.jsx)(E.OL, {
                                                                            name: "verified_user",
                                                                            size: {
                                                                                "@initial": 72,
                                                                                "@sm": 96,
                                                                                "@md": 128,
                                                                                "@xl": 200
                                                                            }
                                                                        })
                                                                }), (0,
                                                                    n.jsx)(u.eK, {
                                                                        as: "h2",
                                                                        size: {
                                                                            "@initial": 56,
                                                                            "@sm": 72,
                                                                            "@md": 144,
                                                                            "@lg": 200
                                                                        },
                                                                        align: "center",
                                                                        css: {
                                                                            maxWidth: 650,
                                                                            "@lg": {
                                                                                maxWidth: 1500
                                                                            }
                                                                        },
                                                                        children: "Private, reliable, secure."
                                                                    })]
                                                        })
                                                })
                                        })
                                })
                        }), (0,
                            n.jsx)(K, {
                                id: "testimonials",
                                className: t.Wb,
                                children: (0,
                                    n.jsxs)(W, {
                                        children: [(0,
                                            n.jsxs)(R, {
                                                size: {
                                                    "@initial": "full",
                                                    "@md": "large"
                                                },
                                                children: [(0,
                                                    n.jsx)(o.xv, {
                                                        as: "p",
                                                        size: {
                                                            "@initial": 24,
                                                            "@md": 48
                                                        },
                                                        fontWeight: {
                                                            "@initial": "bold",
                                                            "@md": "regular"
                                                        },
                                                        css: {
                                                            maxWidth: 350,
                                                            "@md": {
                                                                maxWidth: 580
                                                            }
                                                        },
                                                        children: "We don't need a powerful machine for every developer or even give them a long list of setup steps before they can be productive."
                                                    }), (0,
                                                        n.jsx)(H, {
                                                            name: "David Madner",
                                                            title: "Engineering Manager, Adverity",
                                                            img: L
                                                        })]
                                            }), (0,
                                                n.jsxs)(R, {
                                                    size: {
                                                        "@initial": "full",
                                                        "@md": "small"
                                                    },
                                                    css: {
                                                        textAlign: "center",
                                                        alignItems: "center",
                                                        paddingX: "$4",
                                                        "@sm": {
                                                            paddingX: "$9"
                                                        }
                                                    },
                                                    children: [(0,
                                                        n.jsx)(o.xv, {
                                                            size: 14,
                                                            fontWeight: "bold",
                                                            children: "Trusted by thousands of developers and companies."
                                                        }), (0,
                                                            n.jsxs)(S, {
                                                                children: [(0,
                                                                    n.jsx)(X, {
                                                                        children: (0,
                                                                            n.jsx)(w(), {
                                                                                width: 194,
                                                                                height: 114,
                                                                                src: J,
                                                                                alt: "Microsoft",
                                                                                style: {
                                                                                    width: "100%",
                                                                                    height: "auto"
                                                                                }
                                                                            })
                                                                    }), (0,
                                                                        n.jsx)(X, {
                                                                            children: (0,
                                                                                n.jsx)(w(), {
                                                                                    width: 194,
                                                                                    height: 114,
                                                                                    src: _,
                                                                                    alt: "Shopify",
                                                                                    style: {
                                                                                        width: "100%",
                                                                                        height: "auto"
                                                                                    }
                                                                                })
                                                                        }), (0,
                                                                            n.jsx)(X, {
                                                                                children: (0,
                                                                                    n.jsx)(w(), {
                                                                                        width: 194,
                                                                                        height: 114,
                                                                                        src: V,
                                                                                        alt: "Atlassian",
                                                                                        style: {
                                                                                            width: "100%",
                                                                                            height: "auto"
                                                                                        }
                                                                                    })
                                                                            }), (0,
                                                                                n.jsx)(X, {
                                                                                    children: (0,
                                                                                        n.jsx)(w(), {
                                                                                            width: 194,
                                                                                            height: 114,
                                                                                            src: N,
                                                                                            alt: "Stripe",
                                                                                            style: {
                                                                                                width: "100%",
                                                                                                height: "auto"
                                                                                            }
                                                                                        })
                                                                                }), (0,
                                                                                    n.jsx)(X, {
                                                                                        children: (0,
                                                                                            n.jsx)(w(), {
                                                                                                width: 194,
                                                                                                height: 114,
                                                                                                src: G,
                                                                                                alt: "Framer",
                                                                                                style: {
                                                                                                    width: "100%",
                                                                                                    height: "auto"
                                                                                                }
                                                                                            })
                                                                                    }), (0,
                                                                                        n.jsx)(X, {
                                                                                            children: (0,
                                                                                                n.jsx)(w(), {
                                                                                                    width: 194,
                                                                                                    height: 114,
                                                                                                    src: Y,
                                                                                                    alt: "Algolia",
                                                                                                    style: {
                                                                                                        width: "100%",
                                                                                                        height: "auto"
                                                                                                    }
                                                                                                })
                                                                                        })]
                                                            })]
                                                })]
                                    })
                            }), (0,
                                n.jsx)(K, {
                                    id: "testimonials",
                                    className: t.Wb,
                                    children: (0,
                                        n.jsxs)(W, {
                                            children: [(0,
                                                n.jsxs)(R, {
                                                    size: "small",
                                                    css: {
                                                        paddingRight: "$4"
                                                    },
                                                    children: [(0,
                                                        n.jsx)(o.xv, {
                                                            as: "p",
                                                            size: 24,
                                                            fontWeight: "bold",
                                                            children: "It dramatically improved my experience of sharing ideas."
                                                        }), (0,
                                                            n.jsx)(H, {
                                                                name: "Brian Vaughn",
                                                                title: "Software Engineer, React Team",
                                                                img: F
                                                            })]
                                                }), (0,
                                                    n.jsxs)(R, {
                                                        size: "large",
                                                        children: [(0,
                                                            n.jsx)(o.xv, {
                                                                as: "p",
                                                                size: 24,
                                                                fontWeight: "bold",
                                                                css: {
                                                                    maxWidth: 280
                                                                },
                                                                children: "It feels much more like my local environment."
                                                            }), (0,
                                                                n.jsx)(H, {
                                                                    name: "Jonnie Hallman",
                                                                    title: "Designer Developer, Stripe",
                                                                    img: P
                                                                })]
                                                    })]
                                        })
                                })]
                })
            , q = {
                name: "Plug and Play",
                title: "Integrate seamlessly with your dev setup.",
                body: "Get all the benefits of cloud development working flawlessly alongside your current setup.",
                list: [{
                    icon: "devices",
                    title: "Use the editor of your choice",
                    description: "Switch between VS Code and our web editor to keep coding and collaborating without skipping a beat.",
                    links: [{
                        cta: "VS Code Extension",
                        link: "/vscode-extension"
                    }]
                }, {
                    customIcon: E.Tf,
                    title: "GitHub integration",
                    description: "Review PRs in record time and get automatic deployment previews.",
                    links: [{
                        cta: "Install our GitHub App",
                        link: "/docs/learn/integrations/github-app"
                    }]
                }, {
                    customIcon: E._X,
                    title: "Pre-configured environments",
                    description: "We use Dev Containers to pre-configure your environments with all the required tools, libraries and dependencies, so you can skip the setup and start coding.",
                    links: [{
                        cta: "Learn more",
                        link: "/docs/tutorial/getting-started-with-dev-containers"
                    }]
                }]
            }
            , AA = A => {
                let { icon: e, name: i, title: t, body: a, list: l, cta: c, link: d } = q;
                return (0,
                    n.jsx)(s, {
                        ...A,
                        children: (0,
                            n.jsxs)(r.T5, {
                                display: "flex",
                                gap: {
                                    "@initial": 6,
                                    "@sm": 8
                                },
                                children: [(0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsxs)(o.kC, {
                                                        flow: "column",
                                                        gap: 3,
                                                        children: [i && (0,
                                                            n.jsx)(o.xv, {
                                                                as: "h2",
                                                                size: {
                                                                    "@initial": 24,
                                                                    "@sm": 32
                                                                },
                                                                fontWeight: "medium",
                                                                children: i
                                                            }), (0,
                                                                n.jsxs)(o.kC, {
                                                                    flow: "column",
                                                                    gap: 6,
                                                                    children: [(0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "h3",
                                                                            size: {
                                                                                "@initial": 48,
                                                                                "@sm": 72,
                                                                                "@md": 96
                                                                            },
                                                                            css: {
                                                                                maxWidth: 900
                                                                            },
                                                                            children: t
                                                                        }), a && (0,
                                                                            n.jsx)(o.xv, {
                                                                                as: "p",
                                                                                size: {
                                                                                    "@initial": 18,
                                                                                    "@md": 24
                                                                                },
                                                                                css: {
                                                                                    maxWidth: 550,
                                                                                    color: "$foreground600"
                                                                                },
                                                                                children: a
                                                                            })]
                                                                })]
                                                    })
                                            })
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            gap: {
                                                "@initial": 8,
                                                "@md": 0
                                            },
                                            children: l && l.map((A, e) => {
                                                let { icon: i, customIcon: t, title: s, description: a, links: l } = A;
                                                return (0,
                                                    n.jsx)(r.$W, {
                                                        css: {
                                                            "@md": {
                                                                $$col: 4
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsxs)(o.kC, {
                                                                flow: "column",
                                                                gap: 3,
                                                                css: {
                                                                    borderTop: "solid 2px $lime600",
                                                                    paddingTop: "$4"
                                                                },
                                                                children: [i && (0,
                                                                    n.jsx)(E.OL, {
                                                                        name: i,
                                                                        size: 40,
                                                                        css: {
                                                                            color: "$lime600"
                                                                        }
                                                                    }), t && (0,
                                                                        n.jsx)(A.customIcon, {
                                                                            size: 40,
                                                                            css: {
                                                                                color: "$lime600"
                                                                            }
                                                                        }), (0,
                                                                            n.jsxs)(o.kC, {
                                                                                flow: "column",
                                                                                gap: 2,
                                                                                children: [(0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "h4",
                                                                                        size: 24,
                                                                                        fontWeight: "medium",
                                                                                        children: s
                                                                                    }), a && (0,
                                                                                        n.jsx)(o.xv, {
                                                                                            as: "p",
                                                                                            size: {
                                                                                                "@initial": 16,
                                                                                                "@sm": 18
                                                                                            },
                                                                                            css: {
                                                                                                color: "$foreground600"
                                                                                            },
                                                                                            children: a
                                                                                        })]
                                                                            }), (0,
                                                                                n.jsx)(o.kC, {
                                                                                    flow: "column",
                                                                                    gap: 2,
                                                                                    children: l && l.map((A, e) => {
                                                                                        let { cta: i, link: t } = A;
                                                                                        return (0,
                                                                                            n.jsx)(o.rU, {
                                                                                                iconRight: "chevron_right",
                                                                                                size: {
                                                                                                    "@initial": 16,
                                                                                                    "@sm": 18
                                                                                                },
                                                                                                color: "lime",
                                                                                                href: t,
                                                                                                children: i
                                                                                            }, "link-".concat(e))
                                                                                    }
                                                                                    )
                                                                                })]
                                                            })
                                                    }, "plug-and-play-".concat(e))
                                            }
                                            )
                                        })]
                            })
                    })
            }
            , Ae = {
                title: "Built for scale.",
                body: "Create one-off challenges and replicate them with a click to facilitate scale.",
                list: [{
                    icon: "devices",
                    title: "Ephemeral by default",
                    description: "Create one-off challenges that are deleted after interviews."
                }, {
                    customIcon: E.Tf,
                    title: "Flexible permissions",
                    description: "Stay in control of who can access sandboxes with intuitive permissions settings."
                }, {
                    icon: "web_asset",
                    title: "Built for scale",
                    description: "Replicate exercises and create variations in minutes with minimal effort."
                }]
            }
            , Ai = A => {
                let { icon: e, name: i, title: t, body: a, list: l, cta: c, link: d } = Ae;
                return (0,
                    n.jsx)(s, {
                        ...A,
                        children: (0,
                            n.jsxs)(r.T5, {
                                display: "flex",
                                gap: {
                                    "@initial": 6,
                                    "@sm": 8
                                },
                                children: [(0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsxs)(o.kC, {
                                                        flow: "column",
                                                        gap: 4,
                                                        children: [(0,
                                                            n.jsx)(o.xv, {
                                                                as: "h3",
                                                                size: {
                                                                    "@initial": 48,
                                                                    "@sm": 72,
                                                                    "@md": 96,
                                                                    "@lg": 128
                                                                },
                                                                css: {
                                                                    maxWidth: 900
                                                                },
                                                                children: t
                                                            }), a && (0,
                                                                n.jsx)(o.xv, {
                                                                    as: "p",
                                                                    size: {
                                                                        "@initial": 24,
                                                                        "@sm": 32
                                                                    },
                                                                    css: {
                                                                        maxWidth: 600,
                                                                        color: "$foreground600"
                                                                    },
                                                                    children: a
                                                                })]
                                                    })
                                            })
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            children: l && l.map((A, e) => {
                                                let { icon: i, customIcon: t, title: s, description: a, links: l } = A;
                                                return (0,
                                                    n.jsx)(r.$W, {
                                                        css: {
                                                            "@md": {
                                                                $$col: 4
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsxs)(o.kC, {
                                                                flow: "column",
                                                                gap: 3,
                                                                css: {
                                                                    borderTop: "solid 2px $lime600",
                                                                    paddingTop: "$4"
                                                                },
                                                                children: [i && (0,
                                                                    n.jsx)(E.OL, {
                                                                        name: i,
                                                                        size: 40,
                                                                        css: {
                                                                            color: "$lime600"
                                                                        }
                                                                    }), t && (0,
                                                                        n.jsx)(A.customIcon, {
                                                                            size: 40,
                                                                            css: {
                                                                                color: "$lime600"
                                                                            }
                                                                        }), (0,
                                                                            n.jsxs)(o.kC, {
                                                                                flow: "column",
                                                                                gap: 2,
                                                                                children: [(0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "h4",
                                                                                        size: 24,
                                                                                        fontWeight: "medium",
                                                                                        children: s
                                                                                    }), a && (0,
                                                                                        n.jsx)(o.xv, {
                                                                                            as: "p",
                                                                                            size: 18,
                                                                                            css: {
                                                                                                color: "$foreground600"
                                                                                            },
                                                                                            children: a
                                                                                        })]
                                                                            }), (0,
                                                                                n.jsx)(o.kC, {
                                                                                    flow: "column",
                                                                                    gap: 2,
                                                                                    children: l && l.map(A => {
                                                                                        let { cta: e, link: i } = A;
                                                                                        return (0,
                                                                                            n.jsx)(o.rU, {
                                                                                                iconRight: "chevron_right",
                                                                                                size: {
                                                                                                    "@initial": 18,
                                                                                                    "@sm": 20
                                                                                                },
                                                                                                color: "lime",
                                                                                                href: i,
                                                                                                children: e
                                                                                            })
                                                                                    }
                                                                                    )
                                                                                })]
                                                            })
                                                    }, "built-for-scale-".concat(e))
                                            }
                                            )
                                        })]
                            })
                    })
            }
            ;
        var At = {
            src: "/_next/static/media/Screenshot.12f2f284.jpg",
            height: 1168,
            width: 2082,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGVB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAQABPyFw/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARcSH/2gAIAQEAAT8QunSZs//Z",
            blurWidth: 8,
            blurHeight: 4
        };
        let As = (0,
            t.zo)("div", {
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "$2",
                overflow: "hidden",
                position: "relative",
                zIndex: 100
            })
            , An = A => (0,
                n.jsx)(As, {
                    ...A,
                    children: (0,
                        n.jsx)(w(), {
                            src: A.image ? A.image : At,
                            alt: "CodeSandbox",
                            style: {
                                width: "100%",
                                height: "auto"
                            },
                            priority: !0
                        })
                });
        var Ao = i(7361)
            , Ar = {
                src: "/_next/static/media/avatar.1732e9f6.jpg",
                height: 72,
                width: 72,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGcB//EABYQAAMAAAAAAAAAAAAAAAAAAAETFP/aAAgBAQABBQJYj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQADAAAAAAAAAAAAAAAAABEAARL/2gAIAQEABj8CStKz/8QAFxAAAwEAAAAAAAAAAAAAAAAAABFRwf/aAAgBAQABPyHZEUP/2gAMAwEAAgADAAAAEPf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qj//EABgQAQEAAwAAAAAAAAAAAAAAAAERACFB/9oACAEBAAE/EB7Bow1PWf/Z",
                blurWidth: 8,
                blurHeight: 8
            };
        let Comment = A => (0,
            n.jsx)(s, {
                ...A,
                css: {
                    backgroundColor: "$purple800",
                    paddingY: "$8",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "@sm": {
                        minHeight: "100vh"
                    }
                },
                children: (0,
                    n.jsx)(r.T5, {
                        children: (0,
                            n.jsx)(r.Jn, {
                                justify: {
                                    "@initial": "center",
                                    "@md": "start"
                                },
                                children: (0,
                                    n.jsx)(r.$W, {
                                        css: {
                                            "@sm": {
                                                $$col: 9
                                            }
                                        },
                                        children: (0,
                                            n.jsxs)(o.kC, {
                                                flow: "column",
                                                gap: 5,
                                                css: {
                                                    position: "relative"
                                                },
                                                children: [(0,
                                                    n.jsx)(o.xv, {
                                                        size: {
                                                            "@initial": 128,
                                                            "@sm": 288
                                                        },
                                                        css: {
                                                            marginBottom: -50,
                                                            "@sm": {
                                                                position: "relative",
                                                                marginBottom: -150,
                                                                left: -10
                                                            },
                                                            "@md": {
                                                                position: "absolute",
                                                                top: -58,
                                                                left: -140,
                                                                opacity: .1
                                                            }
                                                        },
                                                        children: "“"
                                                    }), (0,
                                                        n.jsx)(o.xv, {
                                                            size: {
                                                                "@initial": 28,
                                                                "@sm": 48
                                                            },
                                                            children: "I looked at a PR, made some changes together, previewed them live and pushed them. All without checking out anything locally. This probably saved me 1 hour right now!"
                                                        }), (0,
                                                            n.jsxs)(o.kC, {
                                                                align: "center",
                                                                gap: 3,
                                                                children: [(0,
                                                                    n.jsx)(o.kC, {
                                                                        css: {
                                                                            borderRadius: "$rounded",
                                                                            overflow: "hidden",
                                                                            border: "solid 2px $lime500"
                                                                        },
                                                                        children: (0,
                                                                            n.jsx)(w(), {
                                                                                width: 32,
                                                                                height: 32,
                                                                                src: Ar,
                                                                                alt: "TkDodo"
                                                                            })
                                                                    }), (0,
                                                                        n.jsxs)(o.xv, {
                                                                            size: {
                                                                                "@initial": 14,
                                                                                "@sm": 24
                                                                            },
                                                                            children: [(0,
                                                                                n.jsx)(o.xv, {
                                                                                    fontWeight: "bold",
                                                                                    children: "TkDodo,"
                                                                                }), " Frontend Tech Lead at Adverity"]
                                                                        })]
                                                            })]
                                            })
                                    })
                            })
                    })
            })
            , Aa = {
                title: "Why CodeSandbox?",
                description: "Millions of developers, designers, product managers and engineering managers love and trust CodeSandbox.",
                list: [{
                    icon: "fact_check",
                    title: "Empowering",
                    description: "We provide everyone with access to powerful microVMs that allow coding anything in the cloud with no limits. Never be restrained by your device."
                }, {
                    icon: "charger",
                    title: "Secure and reliable",
                    description: "Enjoy peace of mind knowing that your private sandboxes will remain private and secure and your repositories will inherit the same privacy you have on GitHub."
                }, {
                    icon: "timer",
                    title: "Open source, always",
                    description: "We will keep open-sourcing cutting-edge technology that empowers other developers to learn, experiment and create a better web for everyone."
                }]
            }
            , Al = A => {
                let { name: e, title: i, body: t, list: a } = Aa;
                return (0,
                    n.jsxs)(s, {
                        ...A,
                        css: {
                            backgroundColor: "$neutral600",
                            minHeight: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [(0,
                            n.jsx)(r.T5, {
                                display: "flex",
                                gap: {
                                    "@initial": 6,
                                    "@sm": 8
                                },
                                full: !0,
                                children: (0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsxs)(o.kC, {
                                                        flow: "column",
                                                        gap: {
                                                            "@initial": 4,
                                                            "@sm": 8
                                                        },
                                                        align: "center",
                                                        css: {
                                                            marginBottom: "$6",
                                                            "@md": {
                                                                marginBottom: "$10"
                                                            }
                                                        },
                                                        children: [(0,
                                                            n.jsx)(Ao.eg, {
                                                                symbol: !0,
                                                                css: {
                                                                    size: 64,
                                                                    "@sm": {
                                                                        size: 144
                                                                    }
                                                                }
                                                            }), (0,
                                                                n.jsxs)(o.kC, {
                                                                    flow: "column",
                                                                    gap: 4,
                                                                    children: [(0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "h2",
                                                                            size: {
                                                                                "@initial": 48,
                                                                                "@sm": 72,
                                                                                "@md": 96,
                                                                                "@lg": 144
                                                                            },
                                                                            align: "center",
                                                                            css: {
                                                                                maxWidth: 900,
                                                                                "@lg": {
                                                                                    maxWidth: "initial"
                                                                                }
                                                                            },
                                                                            children: i
                                                                        }), t && (0,
                                                                            n.jsx)(o.xv, {
                                                                                as: "p",
                                                                                size: {
                                                                                    "@initial": 24,
                                                                                    "@sm": 32
                                                                                },
                                                                                css: {
                                                                                    maxWidth: 750,
                                                                                    color: "$foreground600"
                                                                                },
                                                                                children: t
                                                                            })]
                                                                })]
                                                    })
                                            })
                                    })
                            }), (0,
                                n.jsx)(r.T5, {
                                    children: (0,
                                        n.jsx)(r.Jn, {
                                            gap: {
                                                "@initial": 8,
                                                "@md": 0
                                            },
                                            children: a && a.map((A, e) => {
                                                let { icon: i, customIcon: t, title: s, description: a, links: l } = A;
                                                return (0,
                                                    n.jsx)(r.$W, {
                                                        css: {
                                                            "@md": {
                                                                $$col: 4
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsxs)(o.kC, {
                                                                flow: "column",
                                                                gap: 3,
                                                                css: {
                                                                    borderTop: "solid 2px $lime600",
                                                                    paddingTop: "$4"
                                                                },
                                                                children: [i && (0,
                                                                    n.jsx)(E.OL, {
                                                                        name: i,
                                                                        size: 40,
                                                                        css: {
                                                                            color: "$lime600"
                                                                        }
                                                                    }), t && (0,
                                                                        n.jsx)(A.customIcon, {
                                                                            size: 40,
                                                                            css: {
                                                                                color: "$lime600"
                                                                            }
                                                                        }), (0,
                                                                            n.jsxs)(o.kC, {
                                                                                flow: "column",
                                                                                gap: 2,
                                                                                children: [(0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "h3",
                                                                                        size: 24,
                                                                                        fontWeight: "medium",
                                                                                        children: s
                                                                                    }), a && (0,
                                                                                        n.jsx)(o.xv, {
                                                                                            as: "p",
                                                                                            size: 18,
                                                                                            css: {
                                                                                                color: "$foreground600"
                                                                                            },
                                                                                            children: a
                                                                                        })]
                                                                            }), (0,
                                                                                n.jsx)(o.kC, {
                                                                                    flow: "column",
                                                                                    gap: 2,
                                                                                    children: l && l.map((A, e) => {
                                                                                        let { cta: i, link: t } = A;
                                                                                        return (0,
                                                                                            n.jsx)(o.rU, {
                                                                                                iconRight: "chevron_right",
                                                                                                size: {
                                                                                                    "@initial": 18,
                                                                                                    "@sm": 20
                                                                                                },
                                                                                                color: "lime",
                                                                                                href: t,
                                                                                                children: i
                                                                                            }, "link-".concat(e))
                                                                                    }
                                                                                    )
                                                                                })]
                                                            })
                                                    }, "plug-and-play-".concat(e))
                                            }
                                            )
                                        })
                                })]
                    })
            }
            ;
        var Ac = i(959);
        (0,
            t.zo)(o.xv, {
                width: "100%",
                paddingY: "$4",
                cursor: "pointer",
                color: "$foreground800",
                borderBottom: "1px solid $neutral100",
                transition: "border .6s ease, color 0.3s ease",
                variants: {
                    active: {
                        true: {
                            color: "$foreground300",
                            borderBottom: "1px solid $foreground500"
                        }
                    }
                }
            }),
            (0,
                t.zo)("div", {
                    gridColumn: "1/2",
                    gridRow: "1/2",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    variants: {
                        active: {
                            true: {
                                opacity: 1,
                                transition: "opacity 0.3s ease",
                                pointerEvents: "initial"
                            }
                        }
                    }
                }),
            (0,
                t.zo)("div", {
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    background: "$neutral700"
                });
        var Ad = {
            src: "/_next/static/media/image.4a712740.png",
            height: 1124,
            width: 3586,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEVMaXEICAgAAABlZWIXFxdRVFHW2dT///8cHBwZGRkQEBM2NjYAAAA4ODiqrKgaGhqraqgHAAAADnRSTlMA/H7dC2qvUyy2T/zM2XuBh7oAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY2BgYGBhZWNnYGBg4OLl42NmYuDg5Ofn5mfkAQAGWQClu/rjOQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 3
        };
        let Ah = () => (0,
            n.jsxs)(s, {
                css: {
                    background: "$neutral800",
                    paddingBottom: 0
                },
                children: [(0,
                    n.jsx)(r.T5, {
                        full: !0,
                        children: (0,
                            n.jsx)(r.Jn, {
                                children: (0,
                                    n.jsx)(r.$W, {
                                        children: (0,
                                            n.jsxs)(o.kC, {
                                                flow: "column",
                                                align: "center",
                                                gap: 4,
                                                css: {
                                                    maxWidth: 700,
                                                    textAlign: "center",
                                                    margin: "auto"
                                                },
                                                children: [(0,
                                                    n.jsx)(o.xv, {
                                                        as: "h2",
                                                        size: {
                                                            "@initial": 48,
                                                            "@sm": 72,
                                                            "@md": 96,
                                                            "@lg": 100
                                                        },
                                                        children: "Join the future of building"
                                                    }), (0,
                                                        n.jsx)(o.zx, {
                                                            as: "a",
                                                            href: "/s?utm_source=startcodingcta",
                                                            target: "_blank",
                                                            color: "lime",
                                                            size: "large",
                                                            children: "Start for free"
                                                        }), (0,
                                                            n.jsx)(o.rU, {
                                                                href: "/demo?utm_source=end-page-cta",
                                                                target: "_blank",
                                                                iconRight: "chevron_right",
                                                                color: "lime",
                                                                size: 18,
                                                                children: "Request demo"
                                                            })]
                                            })
                                    })
                            })
                    }), (0,
                        n.jsx)(r.T5, {
                            css: {
                                lineHeight: 0
                            },
                            full: !0,
                            children: (0,
                                n.jsx)(r.Jn, {
                                    children: (0,
                                        n.jsx)(r.$W, {
                                            children: (0,
                                                n.jsx)(w(), {
                                                    alt: "Accelerate your dev workflow.",
                                                    src: Ad,
                                                    style: {
                                                        width: "100%",
                                                        height: "auto"
                                                    }
                                                })
                                        })
                                })
                        })]
            })
            , Ag = {
                icon: "cloud",
                badge: "NEW",
                name: "Devboxes",
                title: "Unleash the power of the cloud.",
                body: "Save 5+ hours per week per developer.",
                list: [{
                    icon: "dns",
                    title: "microVMs",
                    body: "Give every developer a powerful microVM that outperforms any laptop and ensures consistency."
                }, {
                    icon: "code",
                    title: "Code always ready",
                    body: "Open any environment with a click and it will resume in 2 seconds. Cuts onboarding time by 90%."
                }, {
                    icon: "table",
                    title: "Virtually limitless",
                    body: "Use the built-in Docker support to run anything: servers, databases, microservices, and much more."
                }]
            }
            , Au = A => {
                let { data: e, ...i } = A
                    , { icon: a, badge: l, name: c, title: d, body: h, list: g } = e;
                return (0,
                    n.jsx)(s, {
                        className: t.Wb,
                        css: {
                            minHeight: "100vh",
                            display: "flex",
                            alignItems: "center",
                            background: "$lime600",
                            color: "$foreground400",
                            position: "relative",
                            zIndex: 100
                        },
                        ...i,
                        children: (0,
                            n.jsxs)(r.T5, {
                                display: "flex",
                                gap: 4,
                                children: [(0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsxs)(o.kC, {
                                                        flow: "column",
                                                        align: "center",
                                                        gap: 3,
                                                        children: [(0,
                                                            n.jsxs)(o.kC, {
                                                                flow: "column",
                                                                align: "center",
                                                                children: [a && (0,
                                                                    n.jsx)(E.OL, {
                                                                        name: a,
                                                                        size: {
                                                                            "@initial": 72,
                                                                            "@sm": 96,
                                                                            "@md": 128
                                                                        }
                                                                    }), l && (0,
                                                                        n.jsx)(o.Ct, {
                                                                            size: "large",
                                                                            invert: !0,
                                                                            children: l
                                                                        })]
                                                            }), c && (0,
                                                                n.jsx)(o.xv, {
                                                                    as: "h2",
                                                                    size: {
                                                                        "@initial": 24,
                                                                        "@sm": 32
                                                                    },
                                                                    fontWeight: "medium",
                                                                    children: c
                                                                }), (0,
                                                                    n.jsxs)(o.kC, {
                                                                        flow: "column",
                                                                        align: "center",
                                                                        gap: 4,
                                                                        children: [(0,
                                                                            n.jsx)(o.xv, {
                                                                                as: "h3",
                                                                                size: {
                                                                                    "@initial": 48,
                                                                                    "@sm": 72,
                                                                                    "@md": 96,
                                                                                    "@lg": 128,
                                                                                    "@xl": 144
                                                                                },
                                                                                css: {
                                                                                    textAlign: "center",
                                                                                    maxWidth: 650,
                                                                                    "@md": {
                                                                                        maxWidth: 860
                                                                                    },
                                                                                    "@lg": {
                                                                                        maxWidth: "initial"
                                                                                    }
                                                                                },
                                                                                children: d
                                                                            }), h && (0,
                                                                                n.jsx)(o.xv, {
                                                                                    as: "p",
                                                                                    size: {
                                                                                        "@initial": 18,
                                                                                        "@sm": 24
                                                                                    },
                                                                                    css: {
                                                                                        textAlign: "center",
                                                                                        color: "$foreground800"
                                                                                    },
                                                                                    children: h
                                                                                })]
                                                                    })]
                                                    })
                                            })
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            children: g && g.map((A, e) => {
                                                let { icon: i, title: t, body: s } = A;
                                                return (0,
                                                    n.jsx)(r.$W, {
                                                        css: {
                                                            "@md": {
                                                                $$col: 4
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsxs)(o.kC, {
                                                                flow: "column",
                                                                gap: 4,
                                                                align: "center",
                                                                css: {
                                                                    marginTop: "$4",
                                                                    textAlign: "center",
                                                                    "@sm": {
                                                                        marginTop: "$6"
                                                                    }
                                                                },
                                                                children: [(0,
                                                                    n.jsx)(E.aO, {
                                                                        size: "large",
                                                                        customColor: "$foreground300",
                                                                        solid: !0,
                                                                        children: (0,
                                                                            n.jsx)(E.OL, {
                                                                                name: i,
                                                                                css: {
                                                                                    color: "$lime600"
                                                                                }
                                                                            })
                                                                    }), (0,
                                                                        n.jsxs)(o.kC, {
                                                                            flow: "column",
                                                                            gap: 1,
                                                                            align: "center",
                                                                            children: [(0,
                                                                                n.jsx)(o.xv, {
                                                                                    as: "h4",
                                                                                    size: {
                                                                                        "@initial": 18,
                                                                                        "@sm": 24
                                                                                    },
                                                                                    fontWeight: "medium",
                                                                                    children: t
                                                                                }), (0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "p",
                                                                                        size: {
                                                                                            "@initial": 16,
                                                                                            "@sm": 18
                                                                                        },
                                                                                        css: {
                                                                                            maxWidth: 300,
                                                                                            opacity: .75
                                                                                        },
                                                                                        children: s
                                                                                    })]
                                                                        })]
                                                            })
                                                    }, "cloud-sandboxes-".concat(e))
                                            }
                                            )
                                        })]
                            })
                    })
            }
            , Am = () => (0,
                n.jsx)(Au, {
                    data: Ag
                })
            , Ax = {
                icon: "cloud",
                badge: "NEW",
                name: "microVMs",
                title: "Unleash the power of the cloud.",
                body: "Save 5+ hours per week per developer.",
                list: [{
                    icon: "dns",
                    title: "microVMs",
                    body: "Give every developer a powerful microVM that outperforms any laptop and ensures consistency."
                }, {
                    icon: "code",
                    title: "Code always ready",
                    body: "Open any environment with a click and it will resume in 2 seconds. This cuts onboarding time by 90%."
                }, {
                    icon: "table",
                    title: "Virtually limitless",
                    body: "Use the built-in Docker support to run anything: servers, databases, microservices, and much more."
                }]
            }
            , Ap = () => (0,
                n.jsx)(Au, {
                    data: Ax
                });
        (0,
            t.zo)(o.xv, {
                width: "100%",
                paddingY: "$4",
                cursor: "pointer",
                color: "$foreground800",
                borderBottom: "1px solid $neutral100",
                transition: "border .6s ease, color 0.3s ease",
                variants: {
                    active: {
                        true: {
                            color: "$foreground300",
                            borderBottom: "1px solid $foreground500"
                        }
                    }
                }
            });
        let Af = (0,
            t.zo)("div", {
                gridColumn: "1/2",
                gridRow: "1/2",
                opacity: 0,
                transition: "opacity 400ms",
                pointerEvents: "none",
                variants: {
                    active: {
                        true: {
                            opacity: 1,
                            transition: "opacity 400ms 400ms",
                            pointerEvents: "initial"
                        }
                    }
                }
            })
            , Aw = (0,
                t.zo)("div", {
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    textAlign: "right"
                })
            , Ab = A => {
                let { data: e, ...i } = A
                    , { icon: t, name: a, title: l, body: c, cta: d, link: h, items: g } = e
                    , [u, m] = (0,
                        Ac.useState)(0)
                    , x = (0,
                        Ac.useRef)(null);
                function p() {
                    x.current && clearTimeout(x.current)
                }
                return (0,
                    Ac.useEffect)(() => (p(),
                        x.current = setTimeout(() => m(A => A === g.length - 1 ? 0 : A + 1), 1e4),
                        () => {
                            p()
                        }
                    ), [u]),
                    (0,
                        n.jsx)(s, {
                            ...i,
                            children: (0,
                                n.jsxs)(r.T5, {
                                    display: "flex",
                                    gap: {
                                        "@initial": 6,
                                        "@sm": 8,
                                        "@lg": 10
                                    },
                                    children: [(0,
                                        n.jsx)(r.Jn, {
                                            children: (0,
                                                n.jsx)(r.$W, {
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 2,
                                                            children: [(0,
                                                                n.jsx)(E.OL, {
                                                                    name: t,
                                                                    size: {
                                                                        "@initial": 56,
                                                                        "@sm": 72,
                                                                        "@md": 96
                                                                    }
                                                                }), a && (0,
                                                                    n.jsx)(o.xv, {
                                                                        as: "h2",
                                                                        size: {
                                                                            "@initial": 24,
                                                                            "@sm": 32
                                                                        },
                                                                        children: a
                                                                    }), (0,
                                                                        n.jsxs)(o.kC, {
                                                                            flow: "column",
                                                                            align: "center",
                                                                            gap: 6,
                                                                            children: [(0,
                                                                                n.jsx)(o.xv, {
                                                                                    as: a ? "h3" : "h2",
                                                                                    align: "center",
                                                                                    size: {
                                                                                        "@initial": 48,
                                                                                        "@sm": 72,
                                                                                        "@md": 96,
                                                                                        "@lg": 128
                                                                                    },
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: l
                                                                                    }
                                                                                }), c && (0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "p",
                                                                                        align: "center",
                                                                                        size: {
                                                                                            "@initial": 18,
                                                                                            "@sm": 24
                                                                                        },
                                                                                        css: {
                                                                                            maxWidth: 600,
                                                                                            color: "$foreground600"
                                                                                        },
                                                                                        children: c
                                                                                    })]
                                                                        })]
                                                        })
                                                })
                                        }), (0,
                                            n.jsxs)(r.Jn, {
                                                children: [(0,
                                                    n.jsx)(r.$W, {
                                                        css: {
                                                            "@md": {
                                                                $$col: 7
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsx)(o.kC, {
                                                                flow: "column",
                                                                align: "end",
                                                                css: {
                                                                    position: "sticky",
                                                                    top: "10vh"
                                                                },
                                                                children: (0,
                                                                    n.jsx)(o.kC, {
                                                                        flow: "column",
                                                                        align: "start",
                                                                        justify: "center",
                                                                        css: {
                                                                            display: "grid"
                                                                        },
                                                                        children: (0,
                                                                            n.jsx)(Aw, {
                                                                                children: g && g.map((A, e) => {
                                                                                    let { title: i, screenshot: t, video: s } = A;
                                                                                    return (0,
                                                                                        n.jsx)(Af, {
                                                                                            active: u === e,
                                                                                            children: s ? (0,
                                                                                                n.jsx)("video", {
                                                                                                    muted: !0,
                                                                                                    autoPlay: !0,
                                                                                                    loop: !0,
                                                                                                    style: {
                                                                                                        width: "auto",
                                                                                                        height: "75vh"
                                                                                                    },
                                                                                                    children: (0,
                                                                                                        n.jsx)("source", {
                                                                                                            src: t,
                                                                                                            type: "video/mp4"
                                                                                                        })
                                                                                                }) : (0,
                                                                                                    n.jsx)(w(), {
                                                                                                        src: t,
                                                                                                        alt: i,
                                                                                                        style: {
                                                                                                            width: "auto",
                                                                                                            height: "75vh"
                                                                                                        },
                                                                                                        quality: 90
                                                                                                    })
                                                                                        }, "item-".concat(e))
                                                                                }
                                                                                )
                                                                            })
                                                                    })
                                                            })
                                                    }), (0,
                                                        n.jsxs)(r.$W, {
                                                            css: {
                                                                "@md": {
                                                                    $$col: 4,
                                                                    $$offset: 1
                                                                }
                                                            },
                                                            children: [(0,
                                                                n.jsx)(o.kC, {
                                                                    flow: "column",
                                                                    gap: {
                                                                        "@initial": 8,
                                                                        "@md": 7
                                                                    },
                                                                    css: {
                                                                        "@md": {
                                                                            flexDirection: "column"
                                                                        }
                                                                    },
                                                                    children: g && g.map((A, e) => {
                                                                        let { icon: i, customIcon: t, title: s, description: r } = A;
                                                                        return (0,
                                                                            n.jsxs)(o.kC, {
                                                                                flow: "column",
                                                                                gap: 3,
                                                                                tabIndex: "0",
                                                                                "aria-label": s,
                                                                                "aria-describedby": r,
                                                                                role: "button",
                                                                                className: u === e ? "active" : "",
                                                                                css: {
                                                                                    borderTop: "solid 1px $neutral400",
                                                                                    paddingTop: "$4",
                                                                                    cursor: "pointer",
                                                                                    position: "relative",
                                                                                    opacity: .4,
                                                                                    transition: "opacity 300ms ease-out",
                                                                                    "&:before": {
                                                                                        content: "",
                                                                                        position: "absolute",
                                                                                        top: -1,
                                                                                        left: 0,
                                                                                        width: "100%",
                                                                                        height: 2,
                                                                                        transform: "scaleX(0)",
                                                                                        transformOrigin: "left",
                                                                                        backgroundColor: "$lime600"
                                                                                    },
                                                                                    "&.active": {
                                                                                        opacity: 1,
                                                                                        "&:before": {
                                                                                            transform: "scaleX(1)",
                                                                                            transition: "transform ".concat(1e4, "ms ease-in-out")
                                                                                        }
                                                                                    }
                                                                                },
                                                                                onMouseOver: () => m(e),
                                                                                onFocus: () => m(e),
                                                                                children: [i && (0,
                                                                                    n.jsx)(E.OL, {
                                                                                        name: i,
                                                                                        size: 32,
                                                                                        css: {
                                                                                            color: "$lime600"
                                                                                        }
                                                                                    }), t && (0,
                                                                                        n.jsx)(A.customIcon, {
                                                                                            size: 32,
                                                                                            css: {
                                                                                                color: "$lime600"
                                                                                            }
                                                                                        }), (0,
                                                                                            n.jsxs)(o.kC, {
                                                                                                flow: "column",
                                                                                                gap: 2,
                                                                                                children: [(0,
                                                                                                    n.jsx)(o.xv, {
                                                                                                        as: "h4",
                                                                                                        size: {
                                                                                                            "@initial": 18,
                                                                                                            "@md": 24
                                                                                                        },
                                                                                                        fontWeight: "medium",
                                                                                                        children: s
                                                                                                    }), r && (0,
                                                                                                        n.jsx)(o.xv, {
                                                                                                            as: "p",
                                                                                                            size: {
                                                                                                                "@initial": 16,
                                                                                                                "@md": 18
                                                                                                            },
                                                                                                            css: {
                                                                                                                color: "$foreground600"
                                                                                                            },
                                                                                                            children: r
                                                                                                        })]
                                                                                            })]
                                                                            }, "shareable-url-".concat(e))
                                                                    }
                                                                    )
                                                                }, "1j2"), (0,
                                                                    n.jsx)(o.kC, {
                                                                        css: {
                                                                            marginY: "$6"
                                                                        },
                                                                        children: d && (0,
                                                                            n.jsx)(o.rU, {
                                                                                iconRight: "chevron_right",
                                                                                size: {
                                                                                    "@initial": 18,
                                                                                    "@sm": 20
                                                                                },
                                                                                color: "lime",
                                                                                href: h,
                                                                                target: "_blank",
                                                                                children: d
                                                                            })
                                                                    })]
                                                        })]
                                            })]
                                })
                        })
            }
            , AB = {
                icon: "share",
                name: "Shareable URLs",
                title: "Get instant <br/> feedback, the <br/> easy way.",
                body: "",
                items: [{
                    icon: "link",
                    title: "Share a link",
                    description: "Forget sharing screenshots and copy-pasting code snippets. Get instant feedback on your code by sharing the URL of your sandbox with anyone.",
                    screenshot: {
                        src: "/_next/static/media/shareurl.893368b4.png",
                        height: 1601,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUcHB0ZIDB2ugIfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNggABGKA1jMDIiGAAAegAJvJV8ZQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    icon: "ads_click",
                    title: "Share the context",
                    description: "Those opening your sandbox will see your code running along with any tests, Storybook, or tasks you configured. No need to set up anything.",
                    screenshot: {
                        src: "/_next/static/media/context.8f168907.png",
                        height: 1601,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUdHh8YGBgaIC3NGf5sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nD3IsQ0AIAAEIe73H9poYUcg2uaj8OKOOgIfABw+xRC4AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    icon: "group",
                    title: "Powerful collaboration",
                    description: "Get async feedback through comments or host live coding sessions to learn together and guide others through the code.",
                    screenshot: {
                        src: "/_next/static/media/comment.88e38d48.png",
                        height: 1601,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUcHB4dIzKmJTfCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgAANGRhiNhQEAAMAADL38NW0AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }],
                cta: "Get started",
                link: "/s"
            }
            , Av = () => (0,
                n.jsx)(Ab, {
                    data: AB
                });
        var AE = i(7322)
            , Aj = i.n(AE)
            , AQ = i(9484)
            , Az = i.n(AQ);
        let Ay = {
            icon: "rebase_edit",
            name: "",
            title: "Accelerate <br/> your git workflow.",
            body: "Shorten the review cycle with an all-in-one platform for efficient code reviews.",
            items: [{
                icon: "link",
                title: "Every PR and branch is a URL",
                description: "Get a cloud dev environment for every PR that starts in 2 seconds and integrates all code review tooling into a single platform.",
                screenshot: Aj(),
                video: !0
            }, {
                icon: "timer",
                title: "Review code in record time",
                description: "Save hours every week reviewing PRs. See the code, tests and a preview, make any necessary changes, and merge it.",
                screenshot: {
                    src: "/_next/static/media/review.f36965d7.jpg",
                    height: 1992,
                    width: 2920,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGZB//EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAACB/9oACAEBAAY/Ao//xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAQABPyGD/9oADAMBAAIAAwAAABAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBABAQADAAAAAAAAAAAAAAAAAREAMaH/2gAIAQEAAT8QVLDR7n//2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                }
            }, {
                icon: "group",
                title: "Empower the whole team",
                description: "Using accessible tooling such as our inspect tool, anyone can make commit changes with a few clicks.",
                screenshot: Az(),
                video: !0
            }],
            cta: "Import repository",
            link: "/dashboard?import_repo=true&utm_source=landingpage"
        }
            , AC = () => (0,
                n.jsx)(Ab, {
                    data: Ay
                })
            , Ak = {
                customIcon: E.R2,
                title: "Inspect.<br/>Edit.<br/>Commit.",
                body: "Empower designers, managers and marketers to review code and contribute. ",
                items: [{
                    icon: "auto_awesome",
                    title: "Instantly available",
                    description: "With no setup needed, anyone can just open a PR or branch and see your code running alongside a preview.",
                    screenshot: {
                        src: "/_next/static/media/review.4bf0cca5.jpg",
                        height: 1667,
                        width: 2880,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGbB//EABUQAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAEFAof/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAQAGPwKv/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPyEi0Xm//9oADAMBAAIAAwAAABAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERMWH/2gAIAQEAAT8QqyJGH//Z",
                        blurWidth: 8,
                        blurHeight: 5
                    }
                }, {
                    icon: "share",
                    title: "Accessible and shareable",
                    description: "Maximize accessibility with powerful DevTools to debug, preview and comment on your code. Easily do live sessions to share the context.",
                    screenshot: {
                        src: "/_next/static/media/devtool2.796f8489.png",
                        height: 1647,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEUeHh4YGBc1NTZPT08lJSUFBQWPj49dXV5CQkL///+0tLTQ0NCenp6KbVYcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVR4nAXBhwEAIAzDMCcFOuD/e5EA1gIBqrQf0j4dvsA+PXNBckTWBwszAJwvy34cAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5
                    }
                }, {
                    icon: "commit",
                    title: "Everyone can commit",
                    description: "Our editable deployment previews allow everyone to make simple commits and provide valuable, timely feedback.",
                    screenshot: {
                        src: "/_next/static/media/commit3.e9b420e9.png",
                        height: 1647,
                        width: 2880,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUWFRYfHiBVz7OiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAFklEQVR4nGNgQABGRiQOA5wDZoDkGAEAlQAILzVPFAAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5
                    }
                }],
                cta: "Import repository",
                link: "/dashboard?import_repo=true&utm_source=landingpage"
            }
            , AO = () => (0,
                n.jsx)(Ab, {
                    data: Ak
                });
        var AD = i(3374)
            , AI = i.n(AD);
        let A$ = {
            icon: "groups",
            name: "Live Collaboration",
            title: "Learn faster with timely feedback.",
            body: "",
            items: [{
                icon: "link",
                title: "Share a link",
                description: "Need help figuring something out? Just share the link of your sandbox on Stack Overflow, Twitter or with colleagues to get instant feedback on your code.",
                screenshot: {
                    src: "/_next/static/media/shareurl.893368b4.png",
                    height: 1601,
                    width: 2880,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUcHB0ZIDB2ugIfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNggABGKA1jMDIiGAAAegAJvJV8ZQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                }
            }, {
                icon: "ads_click",
                title: "Share the context",
                description: "Anyone opening a link to your sandbox will see your code running along with any tests, Storybook, or tasks you configured.",
                screenshot: {
                    src: "/_next/static/media/context.8f168907.png",
                    height: 1601,
                    width: 2880,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUdHh8YGBgaIC3NGf5sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nD3IsQ0AIAAEIe73H9poYUcg2uaj8OKOOgIfABw+xRC4AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                }
            }, {
                icon: "code",
                title: "Live coding",
                description: "Take learning to the next level by doing live coding sessions. Guide others through the code and learn by building something together.",
                screenshot: AI(),
                video: !0
            }]
        }
            , AW = () => (0,
                n.jsx)(Ab, {
                    data: A$
                });
        var AR = i(2857)
            , AS = i.n(AR);
        E.Tf,
            AS();
        let AM = A => {
            let { data: e, ...i } = A
                , { icon: t, customIcon: a, title: l, body: c, subTitle: d, subBody: h, list: g, cta: u, link: m, image: x } = e;
            return (0,
                n.jsx)(s, {
                    ...i,
                    children: (0,
                        n.jsxs)(r.T5, {
                            children: [(0,
                                n.jsx)(r.Jn, {
                                    children: (0,
                                        n.jsx)(r.$W, {
                                            children: (0,
                                                n.jsxs)(o.kC, {
                                                    flow: "column",
                                                    align: "center",
                                                    gap: 2,
                                                    children: [t && (0,
                                                        n.jsx)(E.OL, {
                                                            size: {
                                                                "@initial": 48,
                                                                "@sm": 72,
                                                                "@md": 96,
                                                                "@lg": 128
                                                            },
                                                            name: t
                                                        }), a && (0,
                                                            n.jsx)(e.customIcon, {
                                                                css: {
                                                                    size: "56px",
                                                                    "@sm": {
                                                                        size: "96px"
                                                                    }
                                                                }
                                                            }), (0,
                                                                n.jsxs)(o.kC, {
                                                                    flow: "column",
                                                                    align: "center",
                                                                    gap: 4,
                                                                    children: [(0,
                                                                        n.jsx)(o.xv, {
                                                                            as: "h2",
                                                                            align: "center",
                                                                            size: {
                                                                                "@initial": 48,
                                                                                "@sm": 72,
                                                                                "@md": 96,
                                                                                "@lg": 128
                                                                            },
                                                                            css: {
                                                                                maxWidth: 900
                                                                            },
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: l
                                                                            }
                                                                        }), c && (0,
                                                                            n.jsx)(o.xv, {
                                                                                as: "p",
                                                                                align: "center",
                                                                                size: {
                                                                                    "@initial": 20,
                                                                                    "@sm": 28
                                                                                },
                                                                                css: {
                                                                                    maxWidth: 650,
                                                                                    color: "$foreground600"
                                                                                },
                                                                                children: c
                                                                            })]
                                                                })]
                                                })
                                        })
                                }), (0,
                                    n.jsx)(r.Jn, {
                                        children: (0,
                                            n.jsx)(r.$W, {
                                                children: (0,
                                                    n.jsx)(o.kC, {
                                                        css: {
                                                            position: "relative",
                                                            pointerEvents: "none",
                                                            "&::before": {
                                                                content: "",
                                                                size: 1600,
                                                                position: "absolute",
                                                                zIndex: 1,
                                                                top: "50%",
                                                                left: "50%",
                                                                transform: "translate(-50%, -50%)",
                                                                opacity: .2,
                                                                background: "radial-gradient(circle farthest-side at 50% 50%, $purple700 0%, transparent 100%)"
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsx)(An, {
                                                                css: {
                                                                    marginY: "$6",
                                                                    "@sm": {
                                                                        marginY: "$8"
                                                                    }
                                                                },
                                                                image: x
                                                            })
                                                    })
                                            })
                                    }), (0,
                                        n.jsx)(r.Jn, {
                                            children: (0,
                                                n.jsx)(r.$W, {
                                                    children: (0,
                                                        n.jsxs)(o.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 2,
                                                            css: {
                                                                marginBottom: "$3",
                                                                "@sm": {
                                                                    marginBottom: "$8"
                                                                }
                                                            },
                                                            children: [d && (0,
                                                                n.jsx)(o.xv, {
                                                                    as: "h2",
                                                                    size: {
                                                                        "@initial": 24,
                                                                        "@sm": 32
                                                                    },
                                                                    align: "center",
                                                                    fontWeight: "medium",
                                                                    css: {
                                                                        maxWidth: 300
                                                                    },
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: d
                                                                    }
                                                                }), h && (0,
                                                                    n.jsx)(o.xv, {
                                                                        as: "p",
                                                                        align: "center",
                                                                        size: {
                                                                            "@initial": 18,
                                                                            "@sm": 20
                                                                        },
                                                                        css: {
                                                                            maxWidth: 500,
                                                                            color: "$foreground600"
                                                                        },
                                                                        children: h
                                                                    })]
                                                        })
                                                })
                                        }), (0,
                                            n.jsx)(r.Jn, {
                                                children: g && g.map((A, e) => {
                                                    let { icon: i, customIcon: t, title: s, description: a } = A;
                                                    return (0,
                                                        n.jsx)(r.$W, {
                                                            css: {
                                                                "@md": {
                                                                    $$col: 4
                                                                }
                                                            },
                                                            children: (0,
                                                                n.jsxs)(o.kC, {
                                                                    flow: "column",
                                                                    gap: 4,
                                                                    align: "center",
                                                                    css: {
                                                                        marginTop: "$4",
                                                                        textAlign: "center"
                                                                    },
                                                                    children: [(0,
                                                                        n.jsxs)(E.aO, {
                                                                            size: "large",
                                                                            customColor: "$purple700",
                                                                            children: [i && (0,
                                                                                n.jsx)(E.OL, {
                                                                                    name: i
                                                                                }), t && (0,
                                                                                    n.jsx)(A.customIcon, {})]
                                                                        }), (0,
                                                                            n.jsxs)(o.kC, {
                                                                                flow: "column",
                                                                                gap: 1,
                                                                                align: "center",
                                                                                children: [(0,
                                                                                    n.jsx)(o.xv, {
                                                                                        as: "h3",
                                                                                        size: {
                                                                                            "@initial": 18,
                                                                                            "@sm": 24
                                                                                        },
                                                                                        fontWeight: "medium",
                                                                                        children: s
                                                                                    }), (0,
                                                                                        n.jsx)(o.xv, {
                                                                                            as: "p",
                                                                                            size: {
                                                                                                "@initial": 16,
                                                                                                "@sm": 18
                                                                                            },
                                                                                            css: {
                                                                                                color: "$foreground600",
                                                                                                maxWidth: 400
                                                                                            },
                                                                                            children: a
                                                                                        })]
                                                                            })]
                                                                })
                                                        }, "feature-list-".concat(e))
                                                }
                                                )
                                            }), (0,
                                                n.jsx)(r.Jn, {
                                                    children: (0,
                                                        n.jsx)(r.$W, {
                                                            children: (0,
                                                                n.jsx)(o.kC, {
                                                                    flow: "column",
                                                                    align: "center",
                                                                    css: {
                                                                        marginTop: "$6",
                                                                        textAlign: "center"
                                                                    },
                                                                    children: u && (0,
                                                                        n.jsx)(o.rU, {
                                                                            iconRight: "chevron_right",
                                                                            size: {
                                                                                "@initial": 18,
                                                                                "@sm": 20
                                                                            },
                                                                            color: "lime",
                                                                            href: m,
                                                                            target: "_blank",
                                                                            children: u
                                                                        })
                                                                })
                                                        })
                                                })]
                        })
                })
        }
            , AT = {
                icon: "code",
                title: "Insightful. Limitless.",
                body: "Get full visibility and control of every coding exercise and analyze reasoning skills.",
                image: {
                    src: "/_next/static/media/hiring.ae037d0c.png",
                    height: 1646,
                    width: 2880,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEUYGBgQEBAHBwc8OTpUVViPj5AFuJnuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nC3EAQoAMAyDQG2y/395FCqHCCp7rldThIZEcWb5AQO4ADRdUQ1IAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                subTitle: "As simple or as complex as you want it.",
                subBody: "",
                list: [{
                    icon: "fact_check",
                    title: "Virtually limitless",
                    description: "Challenge candidates with a self-contained dev environment that can run anything."
                }, {
                    icon: "ads_click",
                    title: "Create live challenges",
                    description: "Easily turn any challenge into a live coding exercise to see how candidates make decisions and solve specific problems."
                }, {
                    icon: "reviews",
                    title: "Accessible reviews",
                    description: "Review submissions faster by adding comments and staying in control of the permissions of each sandbox."
                }],
                cta: "",
                link: ""
            }
            , AU = () => (0,
                n.jsx)(AM, {
                    data: AT
                })
            , AH = {
                icon: "code_blocks",
                title: "A live dev environment for every PR.",
                body: "Get every branch and PR automatically running on a powerful dev environment.",
                image: {
                    src: "/_next/static/media/main.50135d0c.png",
                    height: 1647,
                    width: 2880,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEUbGxslJSUzMzQTExJTVFWWlpZHR0dub28AILC9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nB3HwREAIBDCQAJ32n/HDua1kRqgCGHTD7Y/vHuVYuY8A/MARJs9eC8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                subTitle: "No setup.<br />No waiting.",
                subBody: "",
                list: [{
                    customIcon: E.Tf,
                    title: "CodeSandbox GitHub App",
                    description: "We provision always-running environments for every PR, making it easy for anyone to open it and immediately start reviewing your code, no setup needed."
                }, {
                    icon: "web_asset",
                    title: "Editable deployment previews",
                    description: "By clicking a URL, anyone in your team can preview your code, leave comments, and approve the PR with a click."
                }, {
                    icon: "table",
                    title: "Add databases and servers",
                    description: "Because we run Docker, you can configure your database to run in CodeSandbox. This way, you have a unique database for every pull request and every branch."
                }],
                cta: "Install our GitHub App",
                link: "/docs/learn/integrations/github-app"
            }
            , AF = () => (0,
                n.jsx)(AM, {
                    data: AH
                });
        E.R2
    }
}]);
