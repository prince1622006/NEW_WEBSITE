(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1837], {
    5915: function (A, e, t) {
        "use strict";
        t.d(e, {
            O: function () {
                return d
            }
        });
        var n = t(1527)
            , i = t(6589)
            , a = t(6567)
            , r = t(959)
            , o = t(5141)
            , s = t(9251)
            , l = t(2277);
        let d = A => {
            let { onlyStats: e } = A;
            return (0,
                n.jsxs)("section", {
                    children: [!e && (0,
                        n.jsx)(s.H, {
                            dark: !0
                        }), (0,
                            n.jsx)(a.T5, {
                                css: {
                                    $sizes$pageWidth: "1600px",
                                    paddingBottom: "$8"
                                },
                                children: (0,
                                    n.jsx)(a.Jn, {
                                        children: l.k.testimonials.stats.map((A, t) => {
                                            let { number: r, symbol: o, title: s, decimal: l } = A;
                                            return (0,
                                                n.jsx)(a.$W, {
                                                    css: {
                                                        "@sm": {
                                                            $$col: 6
                                                        },
                                                        "@md": {
                                                            $$col: 3
                                                        }
                                                    },
                                                    children: (0,
                                                        n.jsxs)(i.kC, {
                                                            flow: "column",
                                                            gap: 2,
                                                            css: {
                                                                marginTop: "$4",
                                                                borderTop: e && 0 === t ? void 0 : "4px solid $neutral500",
                                                                paddingTop: "$4",
                                                                "@md": {
                                                                    borderTop: "4px solid $neutral500"
                                                                },
                                                                "@sm": {
                                                                    marginTop: "$6"
                                                                }
                                                            },
                                                            children: [(0,
                                                                n.jsx)(c, {
                                                                    data: r,
                                                                    symbol: o,
                                                                    decimal: l,
                                                                    delay: 500 * t
                                                                }), (0,
                                                                    n.jsx)(i.xv, {
                                                                        size: {
                                                                            "@initial": 24,
                                                                            "@sm": 20,
                                                                            "@lg": 32
                                                                        },
                                                                        children: s
                                                                    })]
                                                        })
                                                }, t)
                                        }
                                        )
                                    })
                            })]
                })
        }
            , c = A => {
                let { data: e, symbol: t, delay: a, decimal: s = 0 } = A
                    , [l, d] = (0,
                        r.useState)(!1)
                    , c = (0,
                        r.useRef)(null)
                    , [u, g] = (0,
                        r.useState)(!1)
                    , { value: h } = (0,
                        o.$)({
                            isCounting: l,
                            start: 0,
                            thousandsSeparator: ",",
                            end: e,
                            duration: 1.6,
                            easing: "easeOutCubic",
                            decimalPlaces: u ? 0 : s,
                            onUpdate: A => {
                                s && Number(A) === e && g(!0)
                            }
                        });
                return (0,
                    r.useEffect)(() => {
                        let A = new IntersectionObserver(A => {
                            let [{ isIntersecting: e }] = A;
                            e && setTimeout(() => {
                                d(!0)
                            }
                                , [a])
                        }
                            , {
                                rootMargin: "0px 0px -10% 0px",
                                threshold: .1
                            });
                        return A.observe(c.current),
                            () => {
                                A.disconnect()
                            }
                    }
                        , []),
                    (0,
                        n.jsx)("div", {
                            ref: c,
                            children: (0,
                                n.jsxs)(i.xv, {
                                    ref: c,
                                    as: "h4",
                                    size: {
                                        "@initial": 48,
                                        "@sm": 56,
                                        "@lg": 64
                                    },
                                    css: {
                                        fontVariantNumeric: "tabular-nums"
                                    },
                                    fontWeight: "medium",
                                    children: [h, t]
                                })
                        })
            }
    },
    1097: function (A, e, t) {
        "use strict";
        t.d(e, {
            z: function () {
                return h
            }
        });
        var n = t(1527)
            , i = t(6294)
            , a = t(6589)
            , r = t(6567)
            , o = t(3445)
            , s = t(5141)
            , l = t(959)
            , d = t(4661)
            , c = t.n(d)
            , u = t(947)
            , g = t(2277);
        let h = () => (0,
            n.jsx)(u.$, {
                className: i.Wb,
                css: {
                    display: "flex",
                    alignItems: "center",
                    background: "$lime600",
                    color: "$foreground400"
                },
                children: (0,
                    n.jsxs)(r.T5, {
                        display: "flex",
                        gap: 4,
                        children: [(0,
                            n.jsx)(r.Jn, {
                                children: (0,
                                    n.jsx)(r.$W, {
                                        children: (0,
                                            n.jsxs)(a.kC, {
                                                flow: "column",
                                                align: "center",
                                                gap: 3,
                                                children: [(0,
                                                    n.jsxs)(a.kC, {
                                                        flow: "column",
                                                        align: "center",
                                                        children: [(0,
                                                            n.jsx)(o.OL, {
                                                                name: "cloud",
                                                                size: {
                                                                    "@initial": 72,
                                                                    "@sm": 96,
                                                                    "@md": 128
                                                                }
                                                            }), " "]
                                                    }), (0,
                                                        n.jsx)(a.kC, {
                                                            flow: "column",
                                                            align: "center",
                                                            gap: 4,
                                                            children: (0,
                                                                n.jsx)(a.xv, {
                                                                    as: "h2",
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
                                                                    children: g.k.greenSection.title
                                                                })
                                                        })]
                                            })
                                    })
                            }), (0,
                                n.jsx)(r.Jn, {
                                    children: g.k.greenSection.list.map((A, e) => {
                                        let { body: t, subTitle: i, number: o, symbol: s } = A;
                                        return (0,
                                            n.jsx)(r.$W, {
                                                css: {
                                                    "@md": {
                                                        $$col: 4,
                                                        $space$gridGap: "64px"
                                                    }
                                                },
                                                children: (0,
                                                    n.jsx)(a.kC, {
                                                        flow: "column",
                                                        gap: 4,
                                                        css: {
                                                            marginTop: "$4",
                                                            borderTop: "4px solid",
                                                            paddingTop: "$4",
                                                            "@sm": {
                                                                marginTop: "$6"
                                                            }
                                                        },
                                                        children: (0,
                                                            n.jsxs)(a.kC, {
                                                                flow: "column",
                                                                gap: 1,
                                                                children: [(0,
                                                                    n.jsx)(m, {
                                                                        data: o,
                                                                        delay: 500 * e,
                                                                        children: s
                                                                    }), (0,
                                                                        n.jsx)(a.xv, {
                                                                            as: "h4",
                                                                            size: {
                                                                                "@initial": 18,
                                                                                "@sm": 24
                                                                            },
                                                                            fontWeight: "medium",
                                                                            children: i
                                                                        }), (0,
                                                                            n.jsx)(a.xv, {
                                                                                dangerouslySetInnerHTML: {
                                                                                    __html: t
                                                                                },
                                                                                as: "p",
                                                                                size: {
                                                                                    "@initial": 16,
                                                                                    "@sm": 18
                                                                                },
                                                                                css: {
                                                                                    maxWidth: 300,
                                                                                    opacity: .75,
                                                                                    a: {
                                                                                        textDecoration: "underline",
                                                                                        "&:hover": {
                                                                                            textDecoration: "none"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            })]
                                                            })
                                                    })
                                            }, "cloud-sandboxes-".concat(e))
                                    }
                                    )
                                }), (0,
                                    n.jsx)(a.kC, {
                                        justify: "center",
                                        css: {
                                            paddingTop: "$8"
                                        },
                                        children: (0,
                                            n.jsxs)(a.zx, {
                                                color: "black",
                                                css: {
                                                    fontSize: 18
                                                },
                                                href: "/cloud-development-environments",
                                                target: "_blank",
                                                as: c(),
                                                children: ["Learn more about CDEs", " ", (0,
                                                    n.jsx)("svg", {
                                                        width: "24",
                                                        height: "25",
                                                        viewBox: "0 0 24 25",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0,
                                                            n.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M5.96967 1.96967C6.26256 1.67678 6.73744 1.67678 7.03033 1.96967L16.5 11.4393C17.0858 12.0251 17.0858 12.9749 16.5 13.5607L7.03033 23.0303C6.73744 23.3232 6.26256 23.3232 5.96967 23.0303C5.67678 22.7375 5.67678 22.2626 5.96967 21.9697L15.4394 12.5L5.96967 3.03033C5.67678 2.73744 5.67678 2.26256 5.96967 1.96967Z",
                                                                fill: "currentColor"
                                                            })
                                                    })]
                                            })
                                    })]
                    })
            })
            , m = A => {
                let { data: e, children: t, delay: i } = A
                    , [r, o] = (0,
                        l.useState)(!1)
                    , d = (0,
                        l.useRef)(null)
                    , { value: c } = (0,
                        s.$)({
                            isCounting: r,
                            start: 0,
                            end: e,
                            duration: 1.6,
                            easing: "easeOutCubic"
                        });
                return (0,
                    l.useEffect)(() => {
                        let A = new IntersectionObserver(A => {
                            let [{ isIntersecting: e }] = A;
                            e && setTimeout(() => {
                                o(!0)
                            }
                                , [i])
                        }
                            , {
                                rootMargin: "0px 0px -30% 0px",
                                threshold: .3
                            });
                        return A.observe(d.current),
                            () => {
                                A.disconnect()
                            }
                    }
                        , []),
                    (0,
                        n.jsx)("div", {
                            ref: d,
                            children: (0,
                                n.jsxs)(a.xv, {
                                    ref: d,
                                    as: "h4",
                                    size: {
                                        "@initial": 88,
                                        "@sm": 128
                                    },
                                    css: {
                                        fontVariantNumeric: "tabular-nums"
                                    },
                                    fontWeight: "medium",
                                    children: [c, t]
                                })
                        })
            }
    },
    8692: function (A, e, t) {
        "use strict";
        t.d(e, {
            x: function () {
                return c
            }
        });
        var n = t(1527)
            , i = t(8525)
            , a = t.n(i)
            , r = t(8253)
            , o = t(6294)
            , s = t(6589)
            , l = t(2277);
        let d = [{
            src: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=640&q=75",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEUkJCQmJiZMaXEnJydVVVUrKysoKCiQtyiaAAAAB3RSTlM5QwANqyMmqrDq2wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5JREFUeJxjYIICBlYWBgYGBmYmBjYWRkZGEAMmBQAEsQBBm2WxdAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/microsoft.73a237e1.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEUjIyMkJCRMaXElJSUjIyNQt3NhAAAABXRSTlMxHgBYh+9SdvQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2CCAgZmFgYGRgZGCIMBxIBJAQAD+AA2PoUdBQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/intel.8f37f35e.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEVMaXEkJCQnJycjIyMjIyMiIiIpKSk4CfoMAAAAB3RSTlMAQhNnMlklkddgcwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABlJREFUeJxjYIADNkZGRiYQg4WVmRnMgAIAAh0AHRnmjewAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/nvidia.cd0e3efe.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEVMaXEiIiIkJCQiIiIkJCR0mbbLAAAABXRSTlMATzowB2nCjcwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVHicY2CAA0ZGZiZmFiiDCcSAAgAB/AAcv2XfegAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/atlassian.6951c1d4.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUkJCRMaXEAAAAli1OeAAAAA3RSTlMuAAImq84YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNghAIGKIAzmBhgUgABawAU46hjGwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/uber.c72e37e8.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEVMaXEAAAAAAAA+fnncAAAAA3RSTlMANUFZnHduAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgQAAmRkYogwnKgAAAAMgACr4rnVcAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/stripe.b63b30d6.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEVMaXEjIyMjIyMmJiYiIiIkJCS83l+4AAAABnRSTlMAZ1kaHhwiQKnSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGNggANWJkZGZhCDhYkJwoACAAHoABnR68NhAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/zendesk.9554db3d.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEUVDAwSEgsUFAoWEwsaFA0VFA0y9lyjAAAABnRSTlMBFjFcJphaYWZUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgYGBgZIAAFlYoi4mZCcJgZASJAAABngAWw/RliQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/adobe.eb5d0979.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEVMaXElJSUlJSUiIiIjIyMoKCgD5RwTAAAABnRSTlMAOi0hTgyJrNIiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggAFmFkZmRiYGBgZWFiYmRkZWuAQDAAKSACNpUWthAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 4
        }, {
            src: "/_next/static/media/shopify.a92c5be1.png",
            height: 140,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEVMaXEhISFLS0soKCgnJyckJCSxl+rMAAAABnRSTlMAKXNPQDPvkqF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNggAMmFkZWRjCDmYWZFSHOAAACOAAfJ4Z0IQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }]
            , c = A => {
                let { minimal: e } = A;
                return (0,
                    n.jsxs)(u, {
                        css: {
                            padding: e ? "20px 0" : "40px 0"
                        },
                        className: o.Wb,
                        vertical: !0,
                        children: [!e && (0,
                            n.jsx)(s.xv, {
                                as: "p",
                                size: {
                                    "@initial": 18,
                                    "@sm": 28
                                },
                                children: l.k.logos.title
                            }), (0,
                                n.jsx)(r.Z, {
                                    gradient: !1,
                                    children: [...d, ...d].map((A, e) => (0,
                                        n.jsx)(a(), {
                                            src: A
                                        }, e))
                                }), !e && (0,
                                    n.jsx)(s.xv, {
                                        as: "p",
                                        size: {
                                            "@initial": 18,
                                            "@sm": 28
                                        },
                                        children: l.k.logos.description
                                    })]
                    })
            }
            , u = (0,
                o.zo)("section", {
                    textAlign: "center",
                    background: "$neutral800",
                    padding: "40px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "$2",
                    img: {
                        height: 100,
                        width: "auto"
                    },
                    "@sm": {
                        gap: "$4",
                        padding: "80px 0"
                    }
                })
    },
    947: function (A, e, t) {
        "use strict";
        t.d(e, {
            $: function () {
                return i
            }
        }),
            t(6589);
        var n = t(6294);
        let i = (0,
            n.zo)("section", {
                background: "$neutral800",
                padding: "$8 0",
                "@sm": {
                    padding: "calc($8 + $6) 0"
                }
            })
    },
    2277: function (A, e, t) {
        "use strict";
        t.d(e, {
            k: function () {
                return i
            }
        });
        let n = {
            text: "Talk to Sales",
            href: "https://webforms.pipedrive.com/f/72gS7iXoP8qjL8Ku9HZQcN5UKpUpZkgKRCjhbqREjCOYyBgzrCKCr7Mys5AyczOHBN"
        }
            , i = {
                hero: {
                    title: "Build code like the world's top-performing teams",
                    description: "Centralize your engineering workflows in a single cloud development environment to help your teams launch apps 10x faster.",
                    preCta: "Private beta now open",
                    cta: n
                },
                logos: {
                    title: "CodeBox is used by",
                    description: "...and 20,000 of the world’s leading engineering teams."
                },
                greenSection: {
                    title: "Meet a CDE that makes an impact",
                    list: [{
                        title: "5+",
                        number: 5,
                        symbol: "+",
                        subTitle: "hours saved",
                        body: "per developer, per week"
                    }, {
                        number: 90,
                        symbol: "%",
                        subTitle: "reduction",
                        body: "in dev onboarding time"
                    }, {
                        number: 60,
                        symbol: "%",
                        body: "of cloud workloads will be built and deployed using CDEs by 2026, <a href='https://www.gartner.com/en/newsroom/press-releases/2023-08-16-gartner-places-generative-ai-on-the-peak-of-inflated-expectations-on-the-2023-hype-cycle-for-emerging-technologies' target='_blank'>according to Gartner</a>"
                    }
                ]
                },
                infrastructure: {
                    title: "Infrastructure that scales with your business",
                    data: [{
                        title: "Powerful machines in an instant",
                        description: "Remove bottlenecks by provisioning 2x faster machines for every developer and adding additional resources as needed."
                    }, {
                        title: "Unlimited API",
                        description: "Create and provision environments in real time by connecting your environments to your workflows."
                    }, {
                        title: "AI-powered live collaboration",
                        description: "Foster collaboration with shared environments so you remove silos in your development cycle and provide the ability for your teams to do paired programming via live collaboration in the same environment."
                    }, {
                        title: "Integrated into your workflow",
                        description: "CodeBox Enterprise integrates seamlessly into your software toolchain and processes in a fraction of the time."
                    }]
                },
                environments: {
                    title: "Choose the environment that fits your company",
                    envTypes: [{
                        icon: "Cloud",
                        color: "$lime600",
                        title: "Enterprise Cloud",
                        description: "Faster VMs to choose from our enterprise clusters.",
                        specs: "Up to 32 cores\nUp to 64 GB RAM"
                    }, {
                        icon: "Lock",
                        color: "$purple500",
                        title: "Private Cloud",
                        description: "Access your own dedicated cloud instance and cluster, managed and hosted by CodeBox.",
                        specs: "Up to 64 cores\nUp to 128 GB RAM"
                    }, {
                        icon: "Home",
                        color: "$blue300",
                        title: "Managed On-Premise",
                        description: "Run CodeBox on your own infrastructure and we will manage it from our side.",
                        specs: "Custom cores\nCustom RAM"
                    }],
                    list: ["Maintained and supported by CodeBox at no extra cost", "Choose where we host your data (US, APAC or EMEA)", "IP Locking - make sure only the right people in the right places access your code", "Unlimited storage"]
                },
                secure: {
                    title: "Dependable and secure",
                    list: [{
                        icon: "Lock",
                        title: "Secure environments to code",
                        description: "CodeBox ensures the privacy and security of your code, with flexible permissions, access control, security monitoring, private npm, and more."
                    }, {
                        icon: "Schedule",
                        title: "99.9% uptime guarantee",
                        description: "Available up to 99.9% of the time and provides peace of mind your team can code anywhere at any time, even when they go offline."
                    }, {
                        icon: "Person",
                        title: "SSO (Single Sign-On)",
                        description: "Simplify and unify team access with one set of credentials from Active Directory to Okta."
                    }, {
                        icon: "Info",
                        title: "SOC2 Type II compliance coming soon",
                        description: "CodeBox expects to receive certification by early 2024."
                    }]
                },
                support: {
                    title: "Fast, dedicated support",
                    list: [{
                        icon: "Favorite",
                        title: "Dedicated support",
                        description: "Always available to assist with issues and onboarding your teams with dedicated Slack channels and support when you need it."
                    }, {
                        icon: "Language",
                        title: "Extensive CDE community",
                        description: "Learn, collaborate and get inspired by our community of 4 million+ developers building the big next thing on CodeBox."
                    }, {
                        icon: "Group",
                        title: "Predictable team-based billing",
                        description: "Designed with team collaboration in mind, you can invite your entire team at no extra cost and control your spending with our crediting system."
                    }]
                },
                testimonials: {
                    stats: [{
                        number: 4,
                        symbol: " million+",
                        title: "users"
                    }, {
                        number: 1e4,
                        symbol: "+",
                        title: "repositories connected"
                    }, {
                        number: 2e4,
                        symbol: "+",
                        title: "organizations"
                    }, {
                        number: 1,
                        symbol: " billion+",
                        decimal: 1,
                        title: "lines of code written"
                    }]
                },
                faq: {
                    title: "Frequently asked questions",
                    data: [{
                        question: "I’m an individual developer—should I get Enterprise?",
                        answer: "While we don’t have any rules preventing individuals from taking out Enterprise plans, our Pro plan is designed to be a better fit for individuals and smaller teams. You can find more details on our pricing page."
                    }, {
                        question: "Can I host CodeBox in my own environment?",
                        answer: "Yes, our new Enterprise CDE is introducing the option to have a managed on-premise solution. This will allow you to run CodeBox on your own infrastructure so you can customize the virtual machine specifications to your own requirements while avoiding the need for an internal team to manage the CodeBox implementation. We will take care of that from our side."
                    }, {
                        question: "What types of VMs will I be able to choose from?",
                        answer: "Depending on your package and needs, we intend to offer 6 different VM hardware combinations to fit most, if not all developer requirements:\n        Nano — 2 VM cores + 4 GB RAM\n        Micro — 4 VM cores + 8 GB RAM\n        Small — 8 VM cores + 16 GB RAM\n        Medium — 16 VM cores + 32 GB RAM\n        Large — 32 VM cores + 64 GB RAM\n        X-Large (Private cloud only) — 64 VM cores + 128 GB RAM"
                    }, {
                        question: "How much storage do your VMs have?",
                        answer: "All VMs come with 50 GB storage as a minimum."
                    }, {
                        question: "How does CodeBox spin up a project in 2 seconds?",
                        answer: "This happens as a result of our memory snapshotting technology that works similarly in principle to how laptops wake up after being left idle for a period of time. Our VMs can hibernate and resume exactly where they left off within 2 seconds.\n        \n        We automatically create a VM for every branch in a repository. We then run the dev servers and snapshot it so you’ll have a fast experience whenever you open a branch.\n        \n        The first time you import a project to CodeBox, it will take longer to start as the VM will have to go through the start-up steps for the project. After that though every subsequent start will resume from the VM memory which takes 2 seconds on average, creating a real-world experience for you and your team where you will be able to spin up an environment in 2 seconds on a daily basis."
                    }]
                },
                footer: {
                    title: "Join the future of building",
                    description: "Empower your teams to ship faster.",
                    cta: n
                }
            }
    },
    9251: function (A, e, t) {
        "use strict";
        t.d(e, {
            H: function () {
                return g
            }
        });
        var n = t(1527)
            , i = t(8525)
            , a = t.n(i)
            , r = t(6589);
        let o = {
            line1: [{
                phrase: "Its dramatically improved my experience of sharing ideas.",
                name: "Brian Vaughn",
                title: "Software Engineer, React Team",
                avatar: {
                    src: "/_next/static/media/brian.1d5e2de9.jpg",
                    height: 96,
                    width: 96,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABiJf/xAAWEAEBAQAAAAAAAAAAAAAAAAAEAhL/2gAIAQEAAQUC2ql//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAXEAEAAwAAAAAAAAAAAAAAAAABABMh/9oACAEBAAY/Ak2wZ//EABkQAAEFAAAAAAAAAAAAAAAAAAEAQVFhgf/aAAgBAQABPyEBeHfKX//aAAwDAQACAAMAAAAQD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBOF//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxBKf//EABgQAQEAAwAAAAAAAAAAAAAAAAERACGB/9oACAEBAAE/EGmi1UBQodM8mf/Z",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                phrase: "It feels much more like my local environment.",
                name: "Jonnie Hallman",
                title: "Designer Developer, Stripe",
                avatar: {
                    src: "/_next/static/media/jonnie.debf7c8e.jpg",
                    height: 96,
                    width: 96,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG4H//EABYQAQEBAAAAAAAAAAAAAAAAAAEDAv/aAAgBAQABBQLLVr//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAaEAABBQEAAAAAAAAAAAAAAAACABESEyIx/9oACAEBAAY/AiwVkn4v/8QAGBAAAgMAAAAAAAAAAAAAAAAAACEBUdH/2gAIAQEAAT8hVBBmqP/aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAMBAQAAAAAAAAAAAAAAAAERITEA/9oACAEBAAE/ECCpSIHqhByo87//2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                phrase: "We don't need a powerful machine for every developer or even give them a long list of setup steps before they can be productive.",
                name: "David Madner",
                title: "Engineering Manager, Adverity",
                avatar: {
                    src: "/_next/static/media/David-Madner.07173435.jpg",
                    height: 256,
                    width: 256,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABgIf/xAAVEAEBAAAAAAAAAAAAAAAAAAASA//aAAgBAQABBQJGf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AZf/xAAXEAEBAQEAAAAAAAAAAAAAAAABMQAS/9oACAEBAAY/AuyjR3//xAAZEAACAwEAAAAAAAAAAAAAAAARIQABMfD/2gAIAQEAAT8ht/IGDnP/2gAMAwEAAgADAAAAEAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EHsP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QAX//xAAYEAEBAQEBAAAAAAAAAAAAAAABEUEAIf/aAAgBAQABPxBzbWZCQCzHoXv/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                phrase: "The most interesting part of CodeBox is just how perfectly it makes coding in the cloud just work.",
                name: "Leo Petrucci",
                title: "Designer / UI Engineer",
                avatar: {
                    src: "/_next/static/media/leo-petrucci.3b6867e8.jpg",
                    height: 198,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAABnhX/AP/EABUQAQEAAAAAAAAAAAAAAAAAAAID/9oACAEBAAEFAlBgf//EABgRAAIDAAAAAAAAAAAAAAAAAAECAAMR/9oACAEDAQE/ARQrDZ//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwEb/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAECI0H/2gAIAQEABj8Ck07MP//EABkQAQACAwAAAAAAAAAAAAAAAAEAMREhsf/aAAgBAQABPyFPDmaNl8n/2gAMAwEAAgADAAAAEPf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QCLb/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QYMv/xAAZEAEAAgMAAAAAAAAAAAAAAAABACERMVH/2gAIAQEAAT8QVzMSpLB1Fpn/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }],
            line2: [{
                phrase: "It's a great experience and I miss some of its features when developing in VS Code.",
                name: "Edwin Webb",
                title: "Senior Software Engineer",
                avatar: {
                    src: "/_next/static/media/edwin-webb.c3751f06.jpg",
                    height: 198,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGQaf/EABUQAQEAAAAAAAAAAAAAAAAAAAED/9oACAEBAAEFAkkQ/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAYEAACAwAAAAAAAAAAAAAAAAABEgARof/aAAgBAQAGPwJ6DA7P/8QAGRAAAQUAAAAAAAAAAAAAAAAAAQARITFx/9oACAEBAAE/IRFgJIvS/9oADAMBAAIAAwAAABAH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxB8h//EABYRAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAgEBPxBIf//EABoQAQABBQAAAAAAAAAAAAAAABEBACExQWH/2gAIAQEAAT8QlCSHSm0nBrlf/9k=",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                phrase: "The new CodeBox is the first online editor I can see myself using to build a full project.",
                name: "Matthew Phillips",
                title: "Co-creator of Astro",
                avatar: {
                    src: "/_next/static/media/matthew-phillips.19ff74ac.jpg",
                    height: 198,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABjB0//8QAFhABAQEAAAAAAAAAAAAAAAAAAwEC/9oACAEBAAEFAhS6b//EABcRAQADAAAAAAAAAAAAAAAAAAIAAxH/2gAIAQMBAT8Bpayf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AXp//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAIRcv/aAAgBAQAGPwKu+af/xAAXEAADAQAAAAAAAAAAAAAAAAAAAVFh/9oACAEBAAE/IXPHY//aAAwDAQACAAMAAAAQ9//EABcRAAMBAAAAAAAAAAAAAAAAAAARIUH/2gAIAQMBAT8Qe3T/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QIDL/xAAaEAEAAwADAAAAAAAAAAAAAAABESExAEFR/9oACAEBAAE/ECPwrF7rZgFa+8//2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }, {
                phrase: "It's such a huge productivity boost.",
                name: "Dominik",
                title: "Frontend Tech Lead at Adverity",
                avatar: {
                    src: "/_next/static/media/dominik.548c1515.jpg",
                    height: 198,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABgij/xAAVEAEBAAAAAAAAAAAAAAAAAAATJP/aAAgBAQABBQI4f//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AVv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGP/8QAFxABAAMAAAAAAAAAAAAAAAAAEQABEv/aAAgBAQAGPwIK0rP/xAAYEAACAwAAAAAAAAAAAAAAAAABEQAxof/aAAgBAQABPyECdFEqn//aAAwDAQACAAMAAAAQ9//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EKP/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxAJf//EABgQAQEAAwAAAAAAAAAAAAAAABEBAFGh/9oACAEBAAE/EEyEmKtg45//2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                }
            }]
        };
        var s = t(8253)
            , l = t(6294);
        let d = (0,
            l.zo)("div", {
                background: "$neutral800",
                clip: "rect(0, 0, 0, 0)",
                clipPath: "inset(0)",
                overflow: "hidden",
                position: "relative",
                paddingY: "$3",
                "@reduceMotion": {
                    "*": {
                        "--duration": "0s!important"
                    }
                }
            })
            , c = (0,
                l.zo)("div", {
                    padding: "$2",
                    "@sm": {
                        padding: "$3"
                    },
                    "&:nth-child(1)": {
                        ".card": {
                            background: "$lime800"
                        }
                    },
                    "&:nth-child(2)": {
                        ".card": {
                            background: "$lime600"
                        }
                    },
                    "&:nth-child(3)": {
                        ".card": {
                            background: "$lime400"
                        }
                    },
                    "&:nth-child(4)": {
                        ".card": {
                            background: "$lime200"
                        }
                    },
                    "&:nth-child(5)": {
                        ".card": {
                            background: "$lime700"
                        }
                    },
                    "&:nth-child(6)": {
                        ".card": {
                            background: "$lime500"
                        }
                    },
                    "&:nth-child(7)": {
                        ".card": {
                            background: "$lime300"
                        }
                    },
                    "&:nth-child(8)": {
                        ".card": {
                            background: "$lime100"
                        }
                    },
                    "&:nth-child(9)": {
                        ".card": {
                            background: "$lime800"
                        }
                    },
                    "&:nth-child(10)": {
                        ".card": {
                            background: "$lime600"
                        }
                    },
                    "&:nth-child(11)": {
                        ".card": {
                            background: "$lime400"
                        }
                    },
                    "&:nth-child(12)": {
                        ".card": {
                            background: "$lime200"
                        }
                    }
                })
            , u = A => {
                let { data: e, speed: t, direction: i } = A;
                return (0,
                    n.jsx)(s.Z, {
                        gradient: !1,
                        speed: t,
                        direction: i,
                        pauseOnClick: !0,
                        children: e.map((A, e) => {
                            let { name: t, title: i, phrase: o, avatar: s } = A;
                            return (0,
                                n.jsx)(c, {
                                    css: {
                                        height: "100%"
                                    },
                                    children: (0,
                                        n.jsxs)(r.kC, {
                                            flow: "column",
                                            justify: "space-between",
                                            gap: {
                                                "@initial": 3,
                                                "@sm": 5
                                            },
                                            className: "card",
                                            css: {
                                                width: 300,
                                                height: "100%",
                                                padding: "$6",
                                                borderRadius: 10,
                                                "@sm": {
                                                    width: 500
                                                },
                                                "@lg": {
                                                    width: 600,
                                                    padding: "$8"
                                                }
                                            },
                                            children: [(0,
                                                n.jsx)(r.xv, {
                                                    as: "p",
                                                    size: {
                                                        "@initial": 20,
                                                        "@md": 28,
                                                        "@lg": 32
                                                    },
                                                    fontWeight: "medium",
                                                    css: {
                                                        color: "$black800",
                                                        fontSize: o.length > 80 ? "1.4em" : null
                                                    },
                                                    children: o
                                                }), (0,
                                                    n.jsxs)(r.kC, {
                                                        align: {
                                                            "@initial": "start",
                                                            "@sm": "center"
                                                        },
                                                        justify: "start",
                                                        gap: 3,
                                                        children: [(0,
                                                            n.jsx)(r.kC, {
                                                                css: {
                                                                    borderRadius: "$rounded",
                                                                    overflow: "hidden",
                                                                    size: 48,
                                                                    aspectRatio: "1/1",
                                                                    flexShrink: 0
                                                                },
                                                                children: (0,
                                                                    n.jsx)(a(), {
                                                                        width: 48,
                                                                        height: 48,
                                                                        src: s,
                                                                        alt: t
                                                                    })
                                                            }), (0,
                                                                n.jsxs)(r.kC, {
                                                                    flow: "column",
                                                                    gap: 1,
                                                                    children: [(0,
                                                                        n.jsx)(r.xv, {
                                                                            as: "span",
                                                                            lineHeight: "100",
                                                                            size: {
                                                                                "@initial": 14,
                                                                                "@sm": 16
                                                                            },
                                                                            css: {
                                                                                color: "$black800"
                                                                            },
                                                                            children: t
                                                                        }), (0,
                                                                            n.jsx)(r.xv, {
                                                                                as: "span",
                                                                                lineHeight: "100",
                                                                                size: {
                                                                                    "@initial": 14,
                                                                                    "@sm": 16
                                                                                },
                                                                                css: {
                                                                                    color: "$black800",
                                                                                    opacity: .5
                                                                                },
                                                                                children: i
                                                                            })]
                                                                })]
                                                    })]
                                        })
                                }, "testimonials-marquee-item-".concat(e))
                        }
                        )
                    })
            }
            , g = A => {
                let { dark: e } = A;
                return (0,
                    n.jsx)(d, {
                        className: e ? void 0 : l.Wb,
                        css: {
                            ".rfm-child": {
                                height: 370
                            },
                            "@md": {
                                ".rfm-child": {
                                    height: 350
                                }
                            }
                        },
                        children: (0,
                            n.jsxs)("div", {
                                children: [(0,
                                    n.jsx)(u, {
                                        data: o.line1,
                                        speed: 20,
                                        direction: "left",
                                        reverse: !0
                                    }), (0,
                                        n.jsx)(u, {
                                            data: o.line2,
                                            speed: 30,
                                            direction: "left"
                                        })]
                            })
                    })
            }
    },
    8253: function (A, e, t) {
        var n = t(959)
            , i = n && "object" == typeof n && "default" in n ? n : {
                default: n
            };
        !function (A) {
            if (!A || "undefined" == typeof window)
                return;
            let e = document.createElement("style");
            e.setAttribute("type", "text/css"),
                e.innerHTML = A,
                document.head.appendChild(e)
        }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
        let a = n.forwardRef(function ({ style: A = {}, className: e = "", autoFill: t = !1, play: a = !0, pauseOnHover: r = !1, pauseOnClick: o = !1, direction: s = "left", speed: l = 50, delay: d = 0, loop: c = 0, gradient: u = !1, gradientColor: g = "white", gradientWidth: h = 200, onFinish: m, onCycleComplete: E, onMount: p, children: f }, B) {
            let [w, b] = n.useState(0)
                , [C, x] = n.useState(0)
                , [Q, v] = n.useState(1)
                , [y, I] = n.useState(!1)
                , O = n.useRef(null)
                , M = B || O
                , z = n.useRef(null)
                , R = n.useCallback(() => {
                    if (z.current && M.current) {
                        let A = M.current.getBoundingClientRect()
                            , e = z.current.getBoundingClientRect()
                            , n = A.width
                            , i = e.width;
                        ("up" === s || "down" === s) && (n = A.height,
                            i = e.height),
                            t && n && i ? v(i < n ? Math.ceil(n / i) : 1) : v(1),
                            b(n),
                            x(i)
                    }
                }
                    , [t, M, s]);
            n.useEffect(() => {
                if (y && (R(),
                    z.current && M.current)) {
                    let A = new ResizeObserver(() => R());
                    return A.observe(M.current),
                        A.observe(z.current),
                        () => {
                            A && A.disconnect()
                        }
                }
            }
                , [R, M, y]),
                n.useEffect(() => {
                    R()
                }
                    , [R, f]),
                n.useEffect(() => {
                    I(!0)
                }
                    , []),
                n.useEffect(() => {
                    "function" == typeof p && p()
                }
                    , []);
            let D = n.useMemo(() => t ? C * Q / l : C < w ? w / l : C / l, [t, w, C, Q, l])
                , S = n.useMemo(() => Object.assign(Object.assign({}, A), {
                    "--pause-on-hover": !a || r ? "paused" : "running",
                    "--pause-on-click": !a || r && !o || o ? "paused" : "running",
                    "--width": "up" === s || "down" === s ? "100vh" : "100%",
                    "--transform": "up" === s ? "rotate(-90deg)" : "down" === s ? "rotate(90deg)" : "none"
                }), [A, a, r, o, s])
                , k = n.useMemo(() => ({
                    "--gradient-color": g,
                    "--gradient-width": "number" == typeof h ? `${h}px` : h
                }), [g, h])
                , j = n.useMemo(() => ({
                    "--play": a ? "running" : "paused",
                    "--direction": "left" === s ? "normal" : "reverse",
                    "--duration": `${D}s`,
                    "--delay": `${d}s`,
                    "--iteration-count": c ? `${c}` : "infinite",
                    "--min-width": t ? "auto" : "100%"
                }), [a, s, D, d, c, t])
                , U = n.useMemo(() => ({
                    "--transform": "up" === s ? "rotate(90deg)" : "down" === s ? "rotate(-90deg)" : "none"
                }), [s])
                , V = n.useCallback(A => [...Array(Number.isFinite(A) && A >= 0 ? A : 0)].map((A, e) => i.default.createElement(n.Fragment, {
                    key: e
                }, n.Children.map(f, A => i.default.createElement("div", {
                    style: U,
                    className: "rfm-child"
                }, A)))), [U, f]);
            return y ? i.default.createElement("div", {
                ref: M,
                style: S,
                className: "rfm-marquee-container " + e
            }, u && i.default.createElement("div", {
                style: k,
                className: "rfm-overlay"
            }), i.default.createElement("div", {
                className: "rfm-marquee",
                style: j,
                onAnimationIteration: E,
                onAnimationEnd: m
            }, i.default.createElement("div", {
                className: "rfm-initial-child-container",
                ref: z
            }, n.Children.map(f, A => i.default.createElement("div", {
                style: U,
                className: "rfm-child"
            }, A))), V(Q - 1)), i.default.createElement("div", {
                className: "rfm-marquee",
                style: j
            }, V(Q))) : null
        });
        e.Z = a
    },
    5141: function (A, e, t) {
        "use strict";
        t.d(e, {
            $: function () {
                return C
            }
        });
        var n = t(959)
            , i = (Object.prototype.hasOwnProperty,
                Object.prototype.propertyIsEnumerable,
                Object.defineProperty)
            , a = Object.defineProperties
            , r = Object.getOwnPropertyDescriptors
            , o = Object.getOwnPropertySymbols
            , s = Object.prototype.hasOwnProperty
            , l = Object.prototype.propertyIsEnumerable
            , d = (A, e, t) => e in A ? i(A, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
            }) : A[e] = t
            , c = (A, e) => {
                for (var t in e || (e = {}))
                    s.call(e, t) && d(A, t, e[t]);
                if (o)
                    for (var t of o(e))
                        l.call(e, t) && d(A, t, e[t]);
                return A
            }
            , u = (A, e) => a(A, r(e))
            , g = "undefined" == typeof window ? n.useEffect : n.useLayoutEffect
            , h = ({ isPlaying: A, duration: e, startAt: t = 0, updateInterval: i = 0, onComplete: a, onUpdate: r }) => {
                let [o, s] = (0,
                    n.useState)(t)
                    , l = (0,
                        n.useRef)(-1e3 * t)
                    , d = (0,
                        n.useRef)(null)
                    , h = (0,
                        n.useRef)(null)
                    , m = (0,
                        n.useRef)(null)
                    , E = (0,
                        n.useRef)({
                            elapsedTimeRef: 0,
                            startAtRef: t,
                            durationRef: e,
                            updateIntervalRef: i
                        });
                E.current = u(c({}, E.current), {
                    durationRef: e,
                    updateIntervalRef: i
                });
                let p = A => {
                    let e = A / 1e3;
                    if (null === h.current) {
                        h.current = e,
                            d.current = requestAnimationFrame(p);
                        return
                    }
                    let { durationRef: t, elapsedTimeRef: n, updateIntervalRef: i, startAtRef: a } = E.current
                        , r = n + (e - h.current);
                    h.current = e,
                        E.current = u(c({}, E.current), {
                            elapsedTimeRef: r
                        });
                    let o = a + (0 === i ? r : (r / i | 0) * i)
                        , l = a + r
                        , g = "number" == typeof t && l >= t;
                    s(g ? t : o),
                        g || (d.current = requestAnimationFrame(p))
                }
                    , f = () => {
                        d.current && cancelAnimationFrame(d.current),
                            m.current && clearTimeout(m.current),
                            h.current = null
                    }
                    , B = (0,
                        n.useCallback)(e => {
                            let n = "number" == typeof e ? e : t;
                            f(),
                                E.current = u(c({}, E.current), {
                                    elapsedTimeRef: 0,
                                    startAtRef: n
                                }),
                                s(n),
                                A && (d.current = requestAnimationFrame(p))
                        }
                            , [A, t]);
                return g(() => {
                    if (null == r || r(o),
                        e && o >= e) {
                        l.current += 1e3 * e;
                        let { shouldRepeat: A = !1, delay: t = 0, newStartAt: n } = (null == a ? void 0 : a(l.current / 1e3)) || {};
                        A && (m.current = setTimeout(() => B(n), 1e3 * t))
                    }
                }
                    , [o, e]),
                    g(() => (A && (d.current = requestAnimationFrame(p)),
                        f), [A]),
                {
                    elapsedTime: o,
                    reset: B
                }
            }
            , m = {
                easeInCubic: (A, e, t, n) => t * (A /= n) * A * A + e,
                easeOutCubic: (A, e, t, n) => (A /= n,
                    t * (--A * A * A + 1) + e),
                linear: (A, e, t, n) => t * A / n + e
            }
            , E = m.easeOutCubic
            , p = A => "function" == typeof A ? A : m[A]
            , f = (A, e) => {
                if ("number" == typeof A)
                    return "number" == typeof e ? e : 2
            }
            , B = (A, e) => A.replace(/\B(?=(\d{3})+(?!\d))/g, e)
            , w = A => (A.toString().split(".")[1] || "").length
            , b = (A, e) => {
                let t = w(A)
                    , n = w(e || 1);
                return t >= n ? t : n
            }
            , C = ({ isCounting: A = !1, start: e = 0, end: t, duration: n, decimalPlaces: i = b(e, t), decimalSeparator: a = ".", thousandsSeparator: r = "", onComplete: o, easing: s = E, formatter: l, updateInterval: d, onUpdate: c }) => {
                let u = f(t, n)
                    , g = A => {
                        let n;
                        if (n = 0 === u && "number" == typeof t ? t : "number" == typeof t && "number" == typeof u ? p(s)(A < u ? A : u, e, t - e, u) : e + A,
                            "function" == typeof l)
                            return l(n);
                        if (0 === i)
                            return B(Math.round(n).toString(), r);
                        let [o, d] = n.toFixed(i).split(".");
                        return `${B(o, r)}${a}${d}`
                    }
                    , { elapsedTime: m, reset: w } = h({
                        isPlaying: A,
                        duration: u,
                        onComplete: o,
                        updateInterval: d,
                        onUpdate: "function" == typeof c ? A => c(g(A)) : void 0
                    });
                return {
                    value: g(m),
                    reset: w
                }
            }
    }
}]);
