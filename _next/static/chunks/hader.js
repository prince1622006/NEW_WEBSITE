"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6589], {
    3587: function (e, t, n) {
        n.d(t, {
            l: function () {
                return r
            },
            o: function () {
                return c
            }
        });
        var o = n(6294);
        let r = (0,
            o.zo)("form", {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "$2",
                position: "relative"
            });
        var i = n(1527)
            , a = n(3445);
        let l = (0,
            o.zo)("div", {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "$2",
                position: "relative"
            })
            , s = (0,
                o.zo)("input", {
                    width: "100%",
                    display: "flex",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "$text",
                    fontSize: "$20",
                    padding: "$3 $6",
                    border: "solid 1px $neutral300",
                    borderRadius: "$3",
                    transition: "border .15s",
                    "&::placeholder": {
                        color: "$foreground600",
                        transition: "color .15s"
                    },
                    "&:focus": {
                        border: "solid 1px $foreground800",
                        "&::placeholder": {
                            color: "$neutral500"
                        }
                    }
                })
            , c = e => {
                let { icon: t, ...n } = e;
                return (0,
                    i.jsxs)(l, {
                        children: [t && (0,
                            i.jsx)(a.OL, {
                                name: t,
                                size: 24,
                                css: {
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    left: 0,
                                    padding: "$3",
                                    pointerEvents: "none"
                                }
                            }), (0,
                                i.jsx)(s, {
                                    ...n
                                })]
                    })
            }
    },
    6567: function (e, t, n) {
        n.d(t, {
            $W: function () {
                return a
            },
            T5: function () {
                return r
            },
            Jn: function () {
                return i
            }
        });
        var o = n(6294);
        let r = (0,
            o.zo)("div", {
                width: "100%",
                maxWidth: "$pageWidth",
                marginX: "auto",
                paddingX: "calc($space$gridGap * .5)",
                variants: {
                    full: {
                        true: {
                            maxWidth: "initial"
                        }
                    },
                    flexWrap: {
                        wrap: {
                            flexWrap: "wrap"
                        },
                        nowrap: {
                            flexWrap: "nowrap"
                        },
                        "wrap-reverse": {
                            flexWrap: "wrap-reverse"
                        }
                    },
                    flow: {
                        row: {
                            flexDirection: "row"
                        },
                        column: {
                            flexDirection: "column"
                        },
                        "row-reverse": {
                            flexDirection: "row-reverse"
                        },
                        "column-reverse": {
                            flexDirection: "column-reverse"
                        }
                    },
                    justify: {
                        start: {
                            justifyContent: "flex-start"
                        },
                        center: {
                            justifyContent: "center"
                        },
                        end: {
                            justifyContent: "flex-end"
                        },
                        stretch: {
                            justifyContent: "stretch"
                        },
                        "space-between": {
                            justifyContent: "space-between"
                        }
                    },
                    align: {
                        start: {
                            alignItems: "flex-start"
                        },
                        center: {
                            alignItems: "center"
                        },
                        end: {
                            alignItems: "flex-end"
                        },
                        stretch: {
                            alignItems: "stretch"
                        }
                    },
                    gap: {
                        0: {
                            gap: 0
                        },
                        1: {
                            gap: "$1"
                        },
                        2: {
                            gap: "$2"
                        },
                        3: {
                            gap: "$3"
                        },
                        4: {
                            gap: "$4"
                        },
                        5: {
                            gap: "$5"
                        },
                        6: {
                            gap: "$6"
                        },
                        7: {
                            gap: "$7"
                        },
                        8: {
                            gap: "$8"
                        },
                        9: {
                            gap: "$9"
                        },
                        10: {
                            gap: "$10"
                        }
                    },
                    display: {
                        flex: {
                            display: "flex"
                        }
                    }
                },
                defaultVariants: {
                    flow: "column"
                }
            })
            , i = (0,
                o.zo)("div", {
                    width: "100%",
                    display: "flex",
                    rowGap: "$gridGap",
                    flexWrap: "wrap",
                    alignItems: "stretch",
                    variants: {
                        flexWrap: {
                            wrap: {
                                flexWrap: "wrap"
                            },
                            nowrap: {
                                flexWrap: "nowrap"
                            },
                            "wrap-reverse": {
                                flexWrap: "wrap-reverse"
                            }
                        },
                        flow: {
                            row: {
                                flexDirection: "row"
                            },
                            column: {
                                flexDirection: "column"
                            },
                            "row-reverse": {
                                flexDirection: "row-reverse"
                            },
                            "column-reverse": {
                                flexDirection: "column-reverse"
                            }
                        },
                        justify: {
                            start: {
                                justifyContent: "flex-start"
                            },
                            center: {
                                justifyContent: "center"
                            },
                            end: {
                                justifyContent: "flex-end"
                            },
                            stretch: {
                                justifyContent: "stretch"
                            },
                            "space-between": {
                                justifyContent: "space-between"
                            }
                        },
                        align: {
                            start: {
                                alignItems: "flex-start"
                            },
                            center: {
                                alignItems: "center"
                            },
                            end: {
                                alignItems: "flex-end"
                            },
                            stretch: {
                                alignItems: "stretch"
                            }
                        },
                        gap: {
                            0: {
                                gap: 0
                            },
                            1: {
                                gap: "$1"
                            },
                            2: {
                                gap: "$2"
                            },
                            3: {
                                gap: "$3"
                            },
                            4: {
                                gap: "$4"
                            },
                            5: {
                                gap: "$5"
                            },
                            6: {
                                gap: "$6"
                            },
                            7: {
                                gap: "$7"
                            },
                            8: {
                                gap: "$8"
                            },
                            9: {
                                gap: "$9"
                            },
                            10: {
                                gap: "$10"
                            }
                        },
                        display: {
                            flex: {
                                display: "flex"
                            },
                            inline: {
                                display: "inline-flex"
                            }
                        }
                    }
                })
            , a = (0,
                o.zo)("div", {
                    $$col: 12,
                    $$offset: 0,
                    marginLeft: "calc(100% / 12 * $$offset)",
                    paddingX: "calc($space$gridGap / 2)",
                    flexBasis: "calc(100% / 12 * $$col)",
                    maxWidth: "calc(100% / 12 * $$col)",
                    width: "calc(100% / 12 * $$col)"
                })
    },
    3445: function (e, t, n) {
        n.d(t, {
            _X: function () {
                return w
            },
            O5: function () {
                return u.O
            },
            s1: function () {
                return f.s
            },
            Tf: function () {
                return g.T
            },
            aO: function () {
                return l
            },
            R2: function () {
                return b
            },
            yh: function () {
                return $.y
            },
            HE: function () {
                return z
            },
            OL: function () {
                return c
            },
            lZ: function () {
                return x
            },
            BY: function () {
                return v
            },
            tL: function () {
                return d.t
            },
            _F: function () {
                return p._
            }
        });
        var o = n(1527)
            , r = n(1072)
            , i = n(6294);
        let a = (0,
            i.zo)("div", {
                position: "relative",
                lineHeight: "$100",
                letterSpacing: "$0",
                display: "inline-flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: "0",
                borderRadius: "$rounded",
                transition: "color 300ms",
                backgroundColor: "transparent",
                color: "$foreground400",
                "&::before": {
                    content: "",
                    display: "block",
                    borderRadius: "$rounded",
                    size: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    backgroundColor: "currentColor",
                    opacity: .1,
                    transition: "background-color 300ms,  color 300ms, opacity 300ms"
                },
                "> *": {
                    zIndex: 2
                },
                variants: {
                    solid: {
                        true: {
                            color: "$neutral300",
                            "> *": {
                                color: "$foreground500"
                            },
                            "&::before": {
                                opacity: "1"
                            }
                        }
                    },
                    size: {
                        small: {
                            size: "$space$6",
                            fontSize: "$18",
                            svg: {
                                size: "$space$3"
                            }
                        },
                        medium: {
                            size: "$space$7",
                            fontSize: "$24",
                            svg: {
                                size: "$space$5"
                            }
                        },
                        large: {
                            size: "$space$8",
                            fontSize: "$32",
                            svg: {
                                size: "$space$5"
                            },
                            "@md": {
                                size: "$space$9",
                                fontSize: "$48",
                                svg: {
                                    size: "$space$6"
                                }
                            }
                        }
                    }
                },
                defaultVariants: {
                    size: "medium"
                }
            })
            , l = e => {
                let { customColor: t, as: n, solid: r, css: i, ...l } = e;
                return (0,
                    o.jsx)(a, {
                        as: n,
                        solid: r,
                        css: {
                            color: t && t,
                            cursor: ("button" === n || "a" === n) && "pointer",
                            "&:hover::before": {
                                opacity: ("button" === n || "a" === n) && .2
                            },
                            ...i
                        },
                        ...l
                    })
            }
            , s = (0,
                i.zo)("span", {
                    fontFamily: "'Material Symbols Outlined'",
                    fontWeight: "200",
                    fontStyle: "normal",
                    fontSize: "inherit",
                    display: "inline-block",
                    lineHeight: 1,
                    textTransform: "none",
                    letterSpacing: "normal",
                    wordWrap: "normal",
                    whiteSpace: "nowrap",
                    direction: "ltr",
                    textDecoration: "none",
                    color: "currentColor",
                    fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
                    variants: {
                        size: {
                            8: {
                                fontSize: "$8"
                            },
                            10: {
                                fontSize: "$10"
                            },
                            12: {
                                fontSize: "$12"
                            },
                            14: {
                                fontSize: "$14"
                            },
                            16: {
                                fontSize: "$16"
                            },
                            18: {
                                fontSize: "$18"
                            },
                            20: {
                                fontSize: "$20"
                            },
                            24: {
                                fontSize: "$24"
                            },
                            28: {
                                fontSize: "$28"
                            },
                            32: {
                                fontSize: "$32"
                            },
                            40: {
                                fontSize: "$40"
                            },
                            48: {
                                fontSize: "$48"
                            },
                            56: {
                                fontSize: "$56"
                            },
                            64: {
                                fontSize: "$64"
                            },
                            72: {
                                fontSize: "$72"
                            },
                            80: {
                                fontSize: "$80"
                            },
                            88: {
                                fontSize: "$88"
                            },
                            96: {
                                fontSize: "$96"
                            },
                            128: {
                                fontSize: "$128"
                            },
                            144: {
                                fontSize: "$144"
                            },
                            200: {
                                fontSize: "$200"
                            },
                            240: {
                                fontSize: "$240"
                            },
                            288: {
                                fontSize: "$288"
                            }
                        }
                    }
                })
            , c = e => {
                let { name: t, ...n } = e;
                return (0,
                    o.jsx)(s, {
                        ...n,
                        children: t
                    })
            }
            ;
        var d = n(3475)
            , g = n(1628)
            , u = n(7406)
            , p = n(1033)
            , f = n(2095)
            , $ = n(1923);
        let m = (0,
            i.zo)("path", {
                fill: "currentColor"
            })
            , h = (0,
                i.zo)("svg", {
                    size: "$fontSizes$24",
                    fill: "currentColor",
                    variants: {
                        size: {
                            8: {
                                size: "$fontSizes$8"
                            },
                            10: {
                                size: "$fontSizes$10"
                            },
                            12: {
                                size: "$fontSizes$12"
                            },
                            14: {
                                size: "$fontSizes$14"
                            },
                            16: {
                                size: "$fontSizes$16"
                            },
                            18: {
                                size: "$fontSizes$18"
                            },
                            20: {
                                size: "$fontSizes$20"
                            },
                            24: {
                                size: "$fontSizes$24"
                            },
                            28: {
                                size: "$fontSizes$24"
                            },
                            32: {
                                size: "$fontSizes$32"
                            },
                            40: {
                                size: "$fontSizes$40"
                            },
                            48: {
                                size: "$fontSizes$48"
                            },
                            56: {
                                size: "$fontSizes$56"
                            },
                            64: {
                                size: "$fontSizes$64"
                            },
                            72: {
                                size: "$fontSizes$72"
                            },
                            80: {
                                size: "$fontSizes$80"
                            },
                            88: {
                                size: "$fontSizes$88"
                            },
                            96: {
                                size: "$fontSizes$96"
                            },
                            128: {
                                size: "$fontSizes$128"
                            },
                            144: {
                                size: "$fontSizes$144"
                            },
                            200: {
                                size: "$fontSizes$200"
                            },
                            240: {
                                size: "$fontSizes$240"
                            },
                            288: {
                                size: "$fontSizes$288"
                            }
                        }
                    }
                })
            , x = e => (0,
                o.jsx)(h, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0,
                        o.jsx)(m, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 15H3.00001V10.5H4.50002V15H6.00002V9H0V15ZM7.49998 9V16.5H10.5V15H13.5V9H7.49998ZM12 13.5H10.5V10.5H12V13.5ZM15 15V9H24V15H22.5V10.5H21V15H19.5V10.5H18V15H15Z"
                        })
                })
            , b = e => (0,
                o.jsx)(h, {
                    width: "96",
                    height: "96",
                    viewBox: "0 0 96 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0,
                        o.jsx)(m, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M46.1503 14.544V28.5296L51.0293 28.4774V14.618C59.0583 15.2545 65.9652 18.4652 71.75 24.25C77.7806 30.2806 81.0136 37.5306 81.4492 46H68.5522L68.5 50.879H81.3921C80.7803 58.9136 77.5662 65.8539 71.75 71.7C65.9652 77.5145 59.0583 80.7416 51.0293 81.3814V68.4018L46.1503 68.3496V81.4557C37.6777 81.0462 30.3943 77.7943 24.3 71.7C18.4539 65.8539 15.2234 58.9136 14.6084 50.879L28.68 50.879L28.6278 46H14.5511C14.9889 37.5306 18.2385 30.2806 24.3 24.25C30.3943 18.1868 37.6777 14.9515 46.1503 14.544ZM46.1503 85.9573C41.6304 85.7471 37.3303 84.7613 33.25 83C28.6167 81 24.5833 78.2833 21.15 74.85C17.7167 71.4167 15 67.3833 13 62.75C11.3729 58.9805 10.4077 55.0236 10.1043 50.879H0.5L0.552188 46H10.0488C10.2714 41.4756 11.2551 37.1923 13 33.15C15 28.5167 17.7167 24.5 21.15 21.1C24.5833 17.7 28.6167 15 33.25 13C37.3303 11.2387 41.6304 10.2529 46.1503 10.0427V0.349609L51.0293 0.401797V10.1129C55.1753 10.4256 59.1155 11.388 62.85 13C67.4833 15 71.5 17.7 74.9 21.1C78.3 24.5 81 28.5167 83 33.15C84.7449 37.1923 85.7286 41.4756 85.9512 46H96.6278L96.68 50.879H85.8957C85.5923 55.0236 84.6271 58.9805 83 62.75C81 67.3833 78.3 71.4167 74.9 74.85C71.5 78.2833 67.4833 81 62.85 83C59.1155 84.612 55.1753 85.5744 51.0293 85.8871V96.4774L46.1503 96.5296V85.9573Z",
                            fill: "currentColor"
                        })
                })
            , v = e => (0,
                o.jsxs)("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0,
                        o.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M17.7998 12.5005C14.7622 12.5005 12.2998 14.9629 12.2998 18.0005C12.2998 21.0381 14.7622 23.5005 17.7998 23.5005C20.8373 23.5005 23.2998 21.0381 23.2998 18.0005C23.2998 14.9629 20.8373 12.5005 17.7998 12.5005ZM9.29976 18.0005C9.29976 13.3061 13.1053 9.50049 17.7998 9.50049C22.4942 9.50049 26.2998 13.3061 26.2998 18.0005C26.2998 22.6949 22.4942 26.5005 17.7998 26.5005C13.1053 26.5005 9.29976 22.6949 9.29976 18.0005Z",
                            fill: "currentColor"
                        }), (0,
                            o.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.2424 8.50049C27.2643 8.50049 26.3558 8.77452 25.585 9.24808C24.8791 9.68174 23.9554 9.46108 23.5217 8.75523C23.088 8.04938 23.3087 7.12562 24.0145 6.69196C25.245 5.93602 26.6951 5.50049 28.2424 5.50049C32.6839 5.50049 36.2998 9.08211 36.2998 13.519C36.2998 15.6565 35.4575 17.6001 34.0903 19.0351C33.5189 19.635 32.5694 19.658 31.9696 19.0865C31.3698 18.5151 31.3468 17.5656 31.9182 16.9658C32.7769 16.0645 33.2998 14.8533 33.2998 13.519C33.2998 10.7557 31.0439 8.50049 28.2424 8.50049Z",
                                fill: "currentColor"
                            }), (0,
                                o.jsx)("path", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M18.9998 30.5005C13.2008 30.5005 8.49976 35.2015 8.49976 41.0005C8.49976 41.8289 7.82818 42.5005 6.99976 42.5005C6.17133 42.5005 5.49976 41.8289 5.49976 41.0005C5.49976 33.5446 11.5439 27.5005 18.9998 27.5005C26.4556 27.5005 32.4998 33.5446 32.4998 41.0005C32.4998 41.8289 31.8282 42.5005 30.9998 42.5005C30.1713 42.5005 29.4998 41.8289 29.4998 41.0005C29.4998 35.2015 24.7987 30.5005 18.9998 30.5005Z",
                                    fill: "currentColor"
                                }), (0,
                                    o.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M27.4998 23.0005C27.4998 22.1721 28.1713 21.5005 28.9998 21.5005C36.4556 21.5005 42.4998 27.5446 42.4998 35.0005C42.4998 35.8289 41.8282 36.5005 40.9998 36.5005C40.1713 36.5005 39.4998 35.8289 39.4998 35.0005C39.4998 29.2015 34.7987 24.5005 28.9998 24.5005C28.1713 24.5005 27.4998 23.8289 27.4998 23.0005Z",
                                        fill: "currentColor"
                                    })]
                })
            , z = e => (0,
                o.jsx)("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0,
                        o.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M13.5 14.5162V10.9995C13.5 5.20052 18.201 0.499512 24 0.499512C29.799 0.499512 34.5 5.20052 34.5 10.9995V14.5161C38.4091 14.7733 41.5002 18.0256 41.5002 21.9998V37.9998C41.5002 42.1419 38.1424 45.4998 34.0002 45.4998H14.0002C9.85812 45.4998 6.50024 42.1419 6.50024 37.9998V21.9998C6.50024 18.0257 9.5911 14.7736 13.5 14.5162ZM16.5 10.9995C16.5 6.85738 19.8579 3.49951 24 3.49951C28.1421 3.49951 31.5 6.85738 31.5 10.9995V14.4998H16.5V10.9995ZM9.50024 21.9998C9.50024 19.5145 11.515 17.4998 14.0002 17.4998H34.0002C36.4855 17.4998 38.5002 19.5145 38.5002 21.9998V37.9998C38.5002 40.485 36.4855 42.4998 34.0002 42.4998H14.0002C11.515 42.4998 9.50024 40.485 9.50024 37.9998V21.9998Z",
                            fill: "currentColor"
                        })
                })
            , w = e => {
                let { size: t, css: n, ...i } = e;
                return (0,
                    o.jsx)(r.a, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 48 48",
                        css: {
                            size: t,
                            ...n
                        },
                        ...i,
                        children: (0,
                            o.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M23.2888 0.179293C23.7328 -0.0597644 24.2672 -0.0597644 24.7112 0.179293L44.2112 10.6793C44.697 10.9409 45 11.4482 45 12V36C45 36.5518 44.697 37.0591 44.2112 37.3207L24.7112 47.8207C24.2672 48.0598 23.7328 48.0598 23.2888 47.8207L3.78885 37.3207C3.30299 37.0591 3 36.5518 3 36V12C3 11.4482 3.30299 10.9409 3.78885 10.6793L23.2888 0.179293ZM6 14.5113V35.1041L22.5 43.9887V23.3959L6 14.5113ZM25.5 23.3959V43.9887L42 35.1041V14.5113L25.5 23.3959ZM40.3361 12L24 20.7964L7.66389 12L24 3.20363L40.3361 12Z",
                                fill: "currentColor"
                            })
                    })
            }
    },
    7406: function (e, t, n) {
        n.d(t, {
            O: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            d: "M38.248 10.773a36.352 36.352 0 0 0-8.956-2.77.136.136 0 0 0-.144.067 25.176 25.176 0 0 0-1.115 2.285 33.58 33.58 0 0 0-10.06 0c-.3-.719-.743-1.598-1.132-2.285a.141.141 0 0 0-.144-.068 36.25 36.25 0 0 0-8.956 2.771.128.128 0 0 0-.059.05c-5.704 8.502-7.267 16.794-6.5 24.983a.15.15 0 0 0 .057.102c3.764 2.757 7.41 4.431 10.987 5.54a.143.143 0 0 0 .154-.05 26.006 26.006 0 0 0 2.248-3.647.139.139 0 0 0-.076-.193 24.048 24.048 0 0 1-3.432-1.632.14.14 0 0 1-.014-.233c.23-.173.461-.352.681-.533a.136.136 0 0 1 .143-.02c7.2 3.28 14.996 3.28 22.112 0a.136.136 0 0 1 .144.018c.22.18.451.362.683.535a.14.14 0 0 1-.012.233 22.579 22.579 0 0 1-3.434 1.63.14.14 0 0 0-.074.195 29.201 29.201 0 0 0 2.246 3.645.14.14 0 0 0 .154.053c3.595-1.11 7.24-2.784 11.004-5.54a.141.141 0 0 0 .058-.102c.917-9.467-1.537-17.691-6.506-24.981a.112.112 0 0 0-.057-.053ZM15.703 30.82c-2.168 0-3.954-1.985-3.954-4.423 0-2.439 1.752-4.424 3.954-4.424 2.22 0 3.99 2.003 3.955 4.424 0 2.438-1.752 4.423-3.955 4.423Zm14.62 0c-2.167 0-3.954-1.985-3.954-4.423 0-2.439 1.752-4.424 3.955-4.424 2.22 0 3.989 2.003 3.954 4.424 0 2.438-1.734 4.423-3.954 4.423Z"
                        })
                })
        }
    },
    2095: function (e, t, n) {
        n.d(t, {
            s: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24.1161 5C34.6737 5 43.2322 13.5586 43.2322 24.1161C43.2322 33.6575 36.2417 41.5659 27.103 43L27.103 29.6419H31.5572L32.4048 24.1161L32.4048 24.1161H27.103V20.5303C27.103 20.3413 27.1146 20.1529 27.1395 19.9679C27.3137 18.6731 28.1404 17.545 30.2183 17.545C30.2183 17.545 30.2183 17.545 30.2183 17.545H32.6288V12.8406C32.6288 12.8406 32.6288 12.8406 32.6288 12.8406C32.6288 12.8406 30.4411 12.4672 28.3497 12.4672C26.7122 12.4672 25.2875 12.8394 24.1462 13.5572C22.244 14.7536 21.1292 16.9102 21.1292 19.9046V24.1161H16.2755V29.6419L16.2755 29.6419L21.1292 29.6419V43C11.9905 41.5659 5 33.6575 5 24.1161C5 13.5586 13.5586 5 24.1161 5Z",
                            fill: "black"
                        })
                })
        }
    },
    1628: function (e, t, n) {
        n.d(t, {
            T: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24.0661 4C12.9629 4 4 13.1732 4 24.537C4 33.5733 9.75229 41.2405 17.7788 43.9787C18.8489 44.1156 19.1165 43.568 19.1165 43.0203V39.4606C13.498 40.6928 12.294 36.7223 12.294 36.7223C11.3576 34.3948 10.0198 33.7102 10.0198 33.7102C8.147 32.478 10.1536 32.478 10.1536 32.478C12.1602 32.6149 13.2304 34.5317 13.2304 34.5317C14.9695 37.6807 17.9125 36.7223 19.1165 36.1747C19.2503 34.8055 19.7854 33.984 20.4542 33.4364C16.0397 32.8887 11.3576 31.1089 11.3576 23.3048C11.3576 21.1142 12.1602 19.1974 13.3642 17.8283C13.0967 17.2806 12.4278 15.2269 13.498 12.3517C13.498 12.3517 15.237 11.8041 18.9827 14.4054C20.588 13.9947 22.3271 13.7209 24.0661 13.7209C25.8052 13.7209 27.5443 13.9947 29.1496 14.4054C33.029 11.8041 34.6343 12.3517 34.6343 12.3517C35.7045 15.2269 35.0356 17.2806 34.7681 17.8283C36.1058 19.1974 36.7747 21.1142 36.7747 23.3048C36.7747 31.2458 32.0926 32.8887 27.6781 33.4364C28.3469 34.121 29.0158 35.3532 29.0158 37.27V42.8834C29.0158 43.4311 29.4171 44.1156 30.3535 43.8418C38.38 41.1035 43.9985 33.4364 43.9985 24.4001C44.1323 13.1732 35.1694 4 24.0661 4Z",
                            fill: "currentColor"
                        })
                })
        }
    },
    1923: function (e, t, n) {
        n.d(t, {
            y: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42ZM36.9999 36.9999H31.6577V27.901C31.6577 25.4063 30.7098 24.0122 28.7353 24.0122C26.5872 24.0122 25.4649 25.463 25.4649 27.901V36.9999H20.3166V19.6666H25.4649V22.0014C25.4649 22.0014 27.0129 19.137 30.6912 19.137C34.3677 19.137 36.9999 21.3821 36.9999 26.0255V36.9999ZM14.1746 17.3969C12.4209 17.3969 10.9999 15.9647 10.9999 14.1984C10.9999 12.4321 12.4209 10.9999 14.1746 10.9999C15.9282 10.9999 17.3484 12.4321 17.3484 14.1984C17.3484 15.9647 15.9282 17.3969 14.1746 17.3969ZM11.5162 36.9999H16.8846V19.6666H11.5162V36.9999Z",
                            fill: "black"
                        })
                })
        }
    },
    3475: function (e, t, n) {
        n.d(t, {
            t: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            d: "M44 12.065a16.385 16.385 0 0 1-4.713 1.294 8.241 8.241 0 0 0 3.608-4.547 16.413 16.413 0 0 1-5.211 1.994 8.189 8.189 0 0 0-5.99-2.595c-4.532 0-8.207 3.68-8.207 8.219 0 .644.073 1.272.213 1.873-6.82-.343-12.868-3.615-16.915-8.588a8.19 8.19 0 0 0-1.111 4.132 8.219 8.219 0 0 0 3.65 6.842 8.163 8.163 0 0 1-3.717-1.028v.103a8.222 8.222 0 0 0 6.582 8.06 8.203 8.203 0 0 1-3.706.14c1.045 3.266 4.075 5.642 7.667 5.708a16.448 16.448 0 0 1-10.192 3.52c-.663 0-1.316-.04-1.958-.116a23.201 23.201 0 0 0 12.58 3.693c15.094 0 23.35-12.524 23.35-23.386 0-.356-.009-.71-.025-1.063A16.686 16.686 0 0 0 44 12.065Z",
                            fill: "#fff"
                        })
                })
        }
    },
    1033: function (e, t, n) {
        n.d(t, {
            _: function () {
                return i
            }
        });
        var o = n(1527)
            , r = n(1072);
        let i = e => {
            let { size: t, css: n, ...i } = e;
            return (0,
                o.jsx)(r.a, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    css: {
                        size: t,
                        ...n
                    },
                    ...i,
                    children: (0,
                        o.jsx)(r.L, {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M41.216 8.942a5.513 5.513 0 0 1 3.878 3.878c.942 3.444.906 10.62.906 10.62s0 7.14-.906 10.583a5.513 5.513 0 0 1-3.878 3.878c-3.444.906-17.216.906-17.216.906s-13.736 0-17.216-.942a5.513 5.513 0 0 1-3.878-3.878C2 30.58 2 23.404 2 23.404s0-7.14.906-10.584c.508-1.884 2.03-3.406 3.878-3.914C10.227 8 24 8 24 8s13.773 0 17.216.942ZM31.067 23.404 19.614 30V16.807l11.453 6.597Z",
                            fill: "#fff"
                        })
                })
        }
    },
    1072: function (e, t, n) {
        n.d(t, {
            L: function () {
                return r
            },
            a: function () {
                return i
            }
        });
        var o = n(6294);
        let r = (0,
            o.zo)("path", {
                fill: "currentColor"
            })
            , i = (0,
                o.zo)("svg", {
                    width: "18px",
                    height: "18px",
                    fill: "currentColor"
                })
    },
    6589: function (e, t, n) {
        n.d(t, {
            Ml: function () {
                return K
            },
            qE: function () {
                return et
            },
            Ct: function () {
                return I
            },
            zx: function () {
                return p
            },
            UW: function () {
                return u
            },
            Zb: function () {
                return P
            },
            iz: function () {
                return E
            },
            kC: function () {
                return X
            },
            $_: function () {
                return U
            },
            Fb: function () {
                return d
            },
            h4: function () {
                return R
            },
            aO: function () {
                return V.aO
            },
            oH: function () {
                return en.o
            },
            rU: function () {
                return D
            },
            hK: function () {
                return T
            },
            xv: function () {
                return Text
            }
        });
        var o = n(1527)
            , r = n(7848)
            , i = n.n(r)
            , a = n(4125)
            , l = n(959);
        let s = "CodeBox: Code, Review and Deploy in Record Time"
            , c = "CodeBox is a cloud development platform that empowers developers to code, collaborate and ship projects of any size from any device in record time."
            , d = e => {
                let { title: t, description: n, image: r } = e
                    , d = (0,
                        a.useRouter)()
                    , [g, u] = (0,
                        l.useState)("");
                return (0,
                    l.useEffect)(() => {
                        let e = "".concat(window.location.protocol, "//").concat(window.location.host);
                        u(e)
                    }
                        , [d.pathname]),
                    (0,
                        o.jsxs)(i(), {
                            children: [t ? (0,
                                o.jsxs)(o.Fragment, {
                                    children: [(0,
                                        o.jsx)("title", {
                                            children: t
                                        }), (0,
                                            o.jsx)("meta", {
                                                property: "og:title",
                                                content: t
                                            })]
                                }) : (0,
                                    o.jsxs)(o.Fragment, {
                                        children: [(0,
                                            o.jsx)("title", {
                                                children: s
                                            }), (0,
                                                o.jsx)("meta", {
                                                    property: "og:title",
                                                    content: s
                                                })]
                                    }), n ? (0,
                                        o.jsxs)(o.Fragment, {
                                            children: [(0,
                                                o.jsx)("meta", {
                                                    name: "description",
                                                    content: n
                                                }), (0,
                                                    o.jsx)("meta", {
                                                        property: "og:description",
                                                        content: n
                                                    }), (0,
                                                        o.jsx)("meta", {
                                                            name: "twitter:description",
                                                            content: n
                                                        })]
                                        }) : (0,
                                            o.jsxs)(o.Fragment, {
                                                children: [(0,
                                                    o.jsx)("meta", {
                                                        name: "description",
                                                        content: c
                                                    }), (0,
                                                        o.jsx)("meta", {
                                                            property: "og:description",
                                                            content: c
                                                        }), (0,
                                                            o.jsx)("meta", {
                                                                name: "twitter:description",
                                                                content: c
                                                            })]
                                            }), r ? (0,
                                                o.jsxs)(o.Fragment, {
                                                    children: [(0,
                                                        o.jsx)("meta", {
                                                            property: "og:image",
                                                            content: g + r
                                                        }), (0,
                                                            o.jsx)("meta", {
                                                                name: "twitter:image",
                                                                content: g + r
                                                            })]
                                                }) : (0,
                                                    o.jsxs)(o.Fragment, {
                                                        children: [(0,
                                                            o.jsx)("meta", {
                                                                property: "og:image",
                                                                content: "".concat(g, "/new/images/og.jpg")
                                                            }), (0,
                                                                o.jsx)("meta", {
                                                                    name: "twitter:image",
                                                                    content: "".concat(g, "/new/images/og.jpg")
                                                                })]
                                                    }), (0,
                                                        o.jsx)("meta", {
                                                            property: "og:url",
                                                            content: g
                                                        }), (0,
                                                            o.jsx)("meta", {
                                                                property: "og:locale",
                                                                content: "en_US"
                                                            }), (0,
                                                                o.jsx)("meta", {
                                                                    property: "og:site_name",
                                                                    content: "CodeBox"
                                                                }), (0,
                                                                    o.jsx)("meta", {
                                                                        property: "og:type",
                                                                        content: "website"
                                                                    }), (0,
                                                                        o.jsx)("meta", {
                                                                            name: "twitter:site",
                                                                            content: "@CodeBox"
                                                                        }), (0,
                                                                            o.jsx)("meta", {
                                                                                name: "twitter:card",
                                                                                content: "summary_large_image"
                                                                            })]
                        })
            }
            ;
        var g = n(6294);
        let u = (0,
            g.zo)("div", {
                padding: "$4",
                backgroundColor: "$neutral600",
                display: "block",
                transition: "background-color 300ms",
                whiteSpace: "normal",
                overflow: "hidden",
                position: "relative",
                "& p": {
                    marginTop: 0,
                    marginBottom: 0
                },
                "@sm": {
                    padding: "$2 $4"
                },
                variants: {
                    outline: {
                        true: {
                            outline: "1px solid $neutral500"
                        }
                    },
                    radius: {
                        0: {
                            borderRadius: "$0"
                        },
                        1: {
                            borderRadius: "$1"
                        },
                        2: {
                            borderRadius: "$2"
                        },
                        3: {
                            borderRadius: "$3"
                        }
                    },
                    hover: {
                        true: {
                            "&:hover": {
                                backgroundColor: "$neutral500"
                            }
                        }
                    }
                },
                defaultVariants: {
                    radius: "3",
                    outline: !0
                }
            })
            , p = (0,
                g.zo)("button", {
                    fontFamily: "$default",
                    fontWeight: "$medium",
                    lineHeight: "$100",
                    letterSpacing: "$0",
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: "0px",
                    transition: "background-color 300ms, border-color 300ms, color 300ms",
                    variants: {
                        color: {
                            default: {
                                color: "$foreground600",
                                background: "$neutral600",
                                "&:hover": {
                                    color: "$foreground100",
                                    background: "$neutral400"
                                },
                                "&:active": {
                                    color: "$foreground800",
                                    background: "$neutral700"
                                }
                            },
                            black: {
                                color: "$lime600",
                                background: "$foreground300",
                                "&:hover": {
                                    color: "$foreground100",
                                    background: "$neutral400"
                                },
                                "&:active": {
                                    color: "$foreground800",
                                    background: "$neutral700"
                                }
                            },
                            green: {
                                color: "$neutral100",
                                background: "$green600",
                                borderColor: "$green600",
                                "&:hover": {
                                    color: "$neutral100",
                                    background: "$green400",
                                    borderColor: "$green400"
                                },
                                "&:active": {
                                    color: "$neutral100",
                                    background: "$green700",
                                    borderColor: "$green700"
                                }
                            },
                            lime: {
                                color: "$neutral100",
                                background: "$lime500",
                                borderColor: "$lime500",
                                "&:hover": {
                                    color: "$neutral100",
                                    background: "$lime300",
                                    borderColor: "$lime300"
                                },
                                "&:active": {
                                    color: "$neutral100",
                                    background: "$lime600",
                                    borderColor: "$lime600"
                                }
                            },
                            purple: {
                                color: "$foreground200",
                                background: "$purple800",
                                borderColor: "$purple800",
                                "&:hover": {
                                    color: "$foreground200",
                                    background: "$purple700",
                                    borderColor: "$purple700"
                                },
                                "&:active": {
                                    color: "$foreground200",
                                    background: "$purple800",
                                    borderColor: "$purple800"
                                }
                            },
                            blue: {
                                color: "$foreground200",
                                background: "$blue600",
                                borderColor: "$blue600",
                                "&:hover": {
                                    color: "$foreground200",
                                    background: "$blue600",
                                    borderColor: "$blue600"
                                },
                                "&:active": {
                                    color: "$foreground200",
                                    background: "$blue700",
                                    borderColor: "$blue600"
                                }
                            }
                        },
                        size: {
                            small: {
                                fontSize: "$14",
                                padding: "$2 calc($2 + $1)",
                                gap: "$1",
                                borderRadius: "$1",
                                "@md": {
                                    fontSize: "$12"
                                }
                            },
                            medium: {
                                fontSize: "$14",
                                padding: "$3",
                                gap: "$2",
                                borderRadius: "$2"
                            },
                            large: {
                                fontSize: "$16",
                                padding: "13px $3",
                                gap: "$1",
                                borderRadius: "$2"
                            }
                        },
                        disabled: {
                            true: {
                                opacity: .25,
                                pointerEvents: "none"
                            }
                        },
                        text: {
                            true: {
                                color: "$foreground800",
                                background: "transparent",
                                borderColor: "transparent",
                                "&:hover": {
                                    color: "$foreground600",
                                    background: "$neutral600",
                                    borderColor: "$neutral600"
                                },
                                "&:active": {
                                    color: "$foreground600",
                                    background: "$neutral700",
                                    borderColor: "$neutral700"
                                }
                            }
                        },
                        outline: {
                            true: {
                                borderColor: "$neutral500"
                            }
                        },
                        rounded: {
                            true: {
                                borderRadius: "$rounded"
                            }
                        }
                    },
                    compoundVariants: [{
                        color: "lime",
                        text: !0,
                        css: {
                            color: "$lime500",
                            background: "transparent",
                            borderColor: "transparent",
                            "&:hover": {
                                color: "$lime500",
                                background: "$neutral600",
                                borderColor: "$neutral600"
                            },
                            "&:active": {
                                color: "$lime500",
                                background: "$neutral700",
                                borderColor: "$neutral700"
                            }
                        }
                    }, {
                        color: "purple",
                        text: !0,
                        css: {
                            color: "$purple400",
                            background: "transparent",
                            borderColor: "transparent",
                            "&:hover": {
                                color: "$purple400",
                                background: "$neutral600",
                                borderColor: "$neutral600"
                            },
                            "&:active": {
                                color: "$purple400",
                                background: "$neutral700",
                                borderColor: "$neutral700"
                            }
                        }
                    }],
                    defaultVariants: {
                        color: "default",
                        size: "medium"
                    }
                })
            , f = {
                fontSize: "inherit",
                letterSpacing: "inherit",
                margin: "$0",
                color: "$text",
                variants: {
                    size: {
                        8: {
                            fontSize: "$8",
                            letterSpacing: "$0",
                            lineHeight: "$160",
                            fontWeight: "$regular"
                        },
                        10: {
                            fontSize: "$10",
                            letterSpacing: "$0",
                            lineHeight: "$160",
                            fontWeight: "$regular"
                        },
                        12: {
                            fontSize: "$12",
                            letterSpacing: "$1",
                            lineHeight: "$160",
                            fontWeight: "$regular"
                        },
                        14: {
                            fontSize: "$14",
                            letterSpacing: "$1",
                            lineHeight: "$160",
                            fontWeight: "$regular"
                        },
                        16: {
                            fontSize: "$16",
                            letterSpacing: "$1",
                            lineHeight: "$160",
                            fontWeight: "$regular"
                        },
                        18: {
                            fontSize: "$18",
                            letterSpacing: "$2",
                            lineHeight: "$140",
                            fontWeight: "$regular"
                        },
                        20: {
                            fontSize: "$20",
                            letterSpacing: "$1",
                            lineHeight: "$140",
                            fontWeight: "$regular"
                        },
                        24: {
                            fontSize: "$24",
                            letterSpacing: "$2",
                            lineHeight: "$140",
                            fontWeight: "$regular"
                        },
                        28: {
                            fontSize: "$28",
                            letterSpacing: "$2",
                            lineHeight: "$140",
                            fontWeight: "$regular"
                        },
                        32: {
                            fontSize: "$32",
                            letterSpacing: "$2",
                            fontWeight: "$regular",
                            lineHeight: "$140"
                        },
                        40: {
                            fontSize: "$40",
                            letterSpacing: "$3",
                            lineHeight: "$120",
                            fontWeight: "$medium"
                        },
                        48: {
                            fontSize: "$48",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$110",
                            fontWeight: "$medium"
                        },
                        56: {
                            fontSize: "$56",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        64: {
                            fontSize: "$64",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        72: {
                            fontSize: "$72",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        80: {
                            fontSize: "$80",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        88: {
                            fontSize: "$88",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        96: {
                            fontSize: "$96",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$100",
                            fontWeight: "$medium"
                        },
                        128: {
                            fontSize: "$128",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$90",
                            fontWeight: "$medium"
                        },
                        144: {
                            fontSize: "$144",
                            letterSpacing: "$3",
                            fontFamily: "$display",
                            lineHeight: "$90",
                            fontWeight: "$medium"
                        },
                        200: {
                            fontSize: "$200",
                            letterSpacing: "$4",
                            fontFamily: "$display",
                            lineHeight: "$90",
                            fontWeight: "$medium"
                        },
                        240: {
                            fontSize: "$240",
                            letterSpacing: "$4",
                            fontFamily: "$display",
                            lineHeight: "$90",
                            fontWeight: "$medium"
                        },
                        288: {
                            fontSize: "$288",
                            letterSpacing: "$4",
                            fontFamily: "$display",
                            lineHeight: "$90",
                            fontWeight: "$medium"
                        }
                    },
                    fontFamily: {
                        default: {
                            fontFamily: "$default!important"
                        },
                        display: {
                            fontFamily: "$display!important"
                        }
                    },
                    fontWeight: {
                        light: {
                            fontWeight: "$light!important"
                        },
                        regular: {
                            fontWeight: "$regular!important"
                        },
                        medium: {
                            fontWeight: "$medium!important"
                        },
                        bold: {
                            fontWeight: "$bold!important"
                        }
                    },
                    textTransform: {
                        capitalize: {
                            textTransform: "capitalize"
                        },
                        uppercase: {
                            textTransform: "uppercase"
                        },
                        lowercase: {
                            textTransform: "lowercase"
                        },
                        none: {
                            textTransform: "none"
                        },
                        fullWidth: {
                            textTransform: "full-width"
                        }
                    },
                    align: {
                        left: {
                            textAlign: "left"
                        },
                        center: {
                            textAlign: "center"
                        },
                        right: {
                            textAlign: "right"
                        },
                        justify: {
                            textAlign: "justify"
                        }
                    },
                    lineHeight: {
                        100: {
                            lineHeight: "$100!important"
                        },
                        120: {
                            lineHeight: "$120!important"
                        },
                        140: {
                            lineHeight: "$140!important"
                        },
                        160: {
                            lineHeight: "$160!important"
                        }
                    }
                }
            }
            , $ = e => {
                let t = "object" != typeof e.size ? {
                    "@initial": e.size
                } : e.size
                    , n = [Object.entries(t).map(e => {
                        let [t, n] = e;
                        return "".concat(t, "=").concat(n)
                    }
                    ).join(",")];
                return n
            }
            , Text = e => {
                let t = $(e)
                    , n = (0,
                        l.useMemo)(() => (0,
                            g.zo)("span", {
                                cacheKey: t.join("|"),
                                ...f
                            }), t);
                return l.createElement(n, e)
            }
            ;
        var m = n(7361)
            , h = n(8525)
            , x = n.n(h);
        let b = (0,
            g.zo)("header", {
                position: "relative",
                zIndex: 9999,
                height: "calc($sizes$navHeightMobile * 2)",
                "@md": {
                    height: "$sizes$navHeight"
                }
            })
            , v = (0,
                g.zo)("div", {
                    width: "100%",
                    background: "$neutral600",
                    borderBottom: "1px solid $neutral500",
                    display: "flex",
                    flexDirection: "column",
                    top: "-$spaces$navHeightMobile*2",
                    position: "fixed",
                    zIndex: 99999,
                    transition: ".2s",
                    "@md": {
                        background: "$neutral700",
                        borderBottom: "1px solid $neutral600",
                        top: "-$spaces$navHeight"
                    },
                    variants: {
                        show: {
                            true: {
                                transform: "translateY(0%)"
                            },
                            false: {
                                transform: "translateY(-100%)"
                            }
                        }
                    }
                })
            , z = (0,
                g.zo)("div", {
                    width: "100%",
                    maxWidth: "$sizes$pageWidth",
                    paddingX: 0,
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 99999,
                    variants: {
                        sticky: {
                            true: {
                                position: "sticky",
                                top: 0
                            }
                        }
                    }
                })
            , w = (0,
                g.zo)("div", {
                    height: "$sizes$navHeightMobile",
                    padding: "$3",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "scroll hidden",
                    "@sm": {
                        padding: "$3 $5"
                    },
                    "@md": {
                        height: "$sizes$navHeight",
                        overflow: "visible!important"
                    },
                    "&::-webkit-scrollbar": {
                        width: 0,
                        height: 0
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "transparent"
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "transparent"
                    }
                })
            , C = (0,
                g.zo)("ul", {
                    display: "flex",
                    width: "100%",
                    gap: "$4",
                    margin: 0,
                    padding: 0,
                    justifyContent: "space-between",
                    "li:last-child": {
                        paddingRight: "$4"
                    },
                    "@sm": {
                        gap: "$4",
                        "li:last-child": {
                            paddingRight: 0
                        }
                    }
                })
            , S = (0,
                g.zo)("li", {
                    listStyle: "none",
                    fontSize: "$2",
                    color: "$foreground700",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&:hover": {
                        ".link": {
                            color: "$foreground300!important"
                        }
                    },
                    ".submenu": {
                        visibility: "hidden",
                        transformOrigin: "top left",
                        transform: "scale(.9)",
                        opacity: 0,
                        transition: "opacity .15s .05s, transform .2s, visibility 0s .2s",
                        li: {
                            opacity: 0,
                            transition: "opacity .5s"
                        }
                    },
                    "&:hover": {
                        ".submenu": {
                            visibility: "visible",
                            transform: "scale(1)",
                            opacity: 1,
                            transition: "opacity .1s, transform .2s, visibility 0s",
                            li: {
                                opacity: 1,
                                "&:nth-child(1)": {
                                    transition: "opacity .8s .1s"
                                },
                                "&:nth-child(2)": {
                                    transition: "opacity .7s .2s"
                                },
                                "&:nth-child(3)": {
                                    transition: "opacity .6s .3s"
                                },
                                "&:nth-child(4)": {
                                    transition: "opacity .5s .4s"
                                },
                                "&:nth-child(5)": {
                                    transition: "opacity .4s .5s"
                                },
                                "&:nth-child(6)": {
                                    transition: "opacity .3s .6s"
                                },
                                "&:nth-child(7)": {
                                    transition: "opacity .2s .7s"
                                },
                                "&:nth-child(8)": {
                                    transition: "opacity .1s .8s"
                                }
                            },
                            "@md": {
                                visibility: "flex"
                            }
                        }
                    }
                })
            , j = (0,
                g.zo)("a", {
                    fontSize: "$14",
                    whiteSpace: "nowrap",
                    height: "$sizes$navHeightMobile",
                    display: "flex",
                    alignItems: "center",
                    gap: "$2",
                    color: "$foreground600",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                        color: "$foreground300",
                        textDecoration: "none!important"
                    },
                    "@md": {
                        height: "$sizes$navHeight",
                        fontSize: "$12"
                    },
                    variants: {
                        active: {
                            true: {
                                color: "$foreground100"
                            }
                        }
                    }
                })
            , y = e => {
                let { href: t, target: n } = e
                    , r = (0,
                        a.useRouter)();
                return (0,
                    o.jsx)(j, {
                        className: "link",
                        onClick: e => {
                            "_blank" !== n && (e.preventDefault(),
                                r.push(t))
                        }
                        ,
                        active: "".concat(r.asPath === t),
                        ...e
                    })
            }
            , k = (0,
                g.zo)("div", {
                    size: 24,
                    borderRadius: "$rounded",
                    border: "solid 2px $lime700",
                    overflow: "hidden",
                    boxSizing: "content-box"
                })
            , H = (0,
                g.zo)("ul", {
                    width: 340,
                    position: "absolute",
                    top: "calc($sizes$navHeight + $2)",
                    left: 0,
                    zIndex: 99999,
                    margin: 0,
                    padding: "$3",
                    background: "$neutral600",
                    border: "1px solid $neutral500",
                    borderRadius: "$2",
                    display: "flex",
                    flexDirection: "column",
                    gap: "$2",
                    "&:before": {
                        content: "",
                        position: "absolute",
                        top: "-$4",
                        left: 0,
                        width: "100%",
                        height: "$4"
                    }
                })
            , W = [{
                label: "Features",
                href: "/features"
            }, {
                label: "Use Cases",
                href: "/use-cases",
                submenu: [{
                    icon: "dns",
                    label: "Cloud Development Environments",
                    href: "/cloud-development-environments",
                    description: "Give every developer a 2x faster machine."
                }, {
                    icon: "reviews",
                    label: "Code Reviews",
                    href: "/improve-code-reviews",
                    description: "Review PRs without breaking flow."
                }, {
                    icon: "code_blocks",
                    label: "Code in Sandboxes",
                    href: "/code-in-sandboxes",
                    description: "Prototype your ideas in record time."
                }, {
                    icon: "school",
                    label: "Learn & Experiment",
                    href: "/learn-and-experiment",
                    description: "Try frameworks and experiment new tools."
                }]
            }, {
                label: "Resources",
                href: "/resources",
                submenu: [{
                    icon: "language",
                    label: "Discover",
                    href: "/discover",
                    description: "Find inspiration for your next project."
                }, {
                    icon: "article",
                    label: "Blog",
                    href: "/blog",
                    description: "Read news and insights from our team."
                }, {
                    icon: "diversity_4",
                    label: "Community",
                    href: "https://www.CodeBox.community/",
                    target: "_blank",
                    description: "Engage with other community members."
                }, {
                    icon: "new_releases",
                    label: "Changelog",
                    href: "/changelog",
                    description: "Check out our latest features and fixes."
                }]
            }, {
                label: "Docs",
                href: "/docs",
                target: "_blank"
            }, {
                label: "Support",
                href: "/support"
            }, {
                label: "Enterprise",
                href: "/enterprise"
            }, {
                label: "Pricing",
                href: "/pricing"
            }];
        var F = n(8873)
            , V = n(3445);
        let R = e => {
            let { state: t, user: n } = (0,
                F.S)()
                , r = (0,
                    l.useRef)(null)
                , [i, a] = (0,
                    l.useState)(!0);
            return (0,
                l.useEffect)(() => {
                    window.addEventListener("wheel", function (e) {
                        let t = window.scrollY
                            , n = e.deltaY > 0;
                        a(!(t > 98) || !n)
                    })
                }
                    , [r]),
                (0,
                    o.jsx)(b, {
                        children: (0,
                            o.jsx)(v, {
                                ...e,
                                show: i,
                                ref: r,
                                children: (0,
                                    o.jsxs)(z, {
                                        children: [(0,
                                            o.jsxs)(w, {
                                                children: [(0,
                                                    o.jsx)(y, {
                                                        as: "a",
                                                        href: "/",
                                                        "aria-label": "CodeBox",
                                                        children: (0,
                                                            o.jsxs)(X, {
                                                                align: "center",
                                                                gap: 3,
                                                                children: [(0,
                                                                    o.jsx)(m.eg, {
                                                                        symbol: !0
                                                                    }), (0,
                                                                        o.jsx)(Text, {
                                                                            size: 14,
                                                                            css: {
                                                                                display: "block",
                                                                                color: "$foreground500",
                                                                                "@md": {
                                                                                    display: "none"
                                                                                }
                                                                            },
                                                                            children: "CodeBox"
                                                                        })]
                                                            })
                                                    }), (0,
                                                        o.jsxs)(X, {
                                                            gap: 4,
                                                            align: "center",
                                                            as: "ul",
                                                            children: ["UNAUTHENTICATED" === t && (0,
                                                                o.jsxs)(o.Fragment, {
                                                                    children: [(0,
                                                                        o.jsx)(S, {
                                                                            children: (0,
                                                                                o.jsx)(y, {
                                                                                    as: "a",
                                                                                    href: "/signin?utm_source=landingpage",
                                                                                    target: "_blank",
                                                                                    children: "Sign In"
                                                                                })
                                                                        }), (0,
                                                                            o.jsx)(S, {
                                                                                css: {
                                                                                    alignItems: "center"
                                                                                },
                                                                                children: (0,
                                                                                    o.jsx)(p, {
                                                                                        as: "a",
                                                                                        size: "small",
                                                                                        color: "lime",
                                                                                        target: "_blank",
                                                                                        href: "/s?utm_source=landingpage",
                                                                                        children: "Try for free"
                                                                                    })
                                                                            })]
                                                                }), "AUTHENTICATED" === t && (0,
                                                                    o.jsxs)(o.Fragment, {
                                                                        children: [(0,
                                                                            o.jsx)(S, {
                                                                                children: (0,
                                                                                    o.jsx)(y, {
                                                                                        href: "/demo?utm_source=landingpage",
                                                                                        target: "_blank",
                                                                                        children: "Request demo"
                                                                                    })
                                                                            }), (0,
                                                                                o.jsx)(S, {
                                                                                    children: (0,
                                                                                        o.jsx)(y, {
                                                                                            href: "/dashboard?utm_source=landingpage",
                                                                                            target: "_blank",
                                                                                            children: (0,
                                                                                                o.jsx)(k, {
                                                                                                    children: (0,
                                                                                                        o.jsx)("img", {
                                                                                                            width: 24,
                                                                                                            height: 24,
                                                                                                            src: n.avatar_url,
                                                                                                            alt: n.name
                                                                                                        })
                                                                                                })
                                                                                        })
                                                                                })]
                                                                    })]
                                                        })]
                                            }), (0,
                                                o.jsx)(w, {
                                                    as: "nav",
                                                    css: {
                                                        background: "$neutral700",
                                                        "@md": {
                                                            background: "transparent",
                                                            position: "absolute",
                                                            top: 0,
                                                            left: "$7"
                                                        }
                                                    },
                                                    children: (0,
                                                        o.jsx)(C, {
                                                            children: W && W.map((e, t) => {
                                                                let { label: n, href: r, target: i, submenu: a } = e;
                                                                return (0,
                                                                    o.jsxs)(S, {
                                                                        children: [(0,
                                                                            o.jsx)(y, {
                                                                                href: r,
                                                                                target: i,
                                                                                "tab-index": "1",
                                                                                children: n
                                                                            }), a ? (0,
                                                                                o.jsx)(H, {
                                                                                    className: "submenu",
                                                                                    children: a.map((e, t) => {
                                                                                        let { icon: n, label: r, href: i, target: a, description: l } = e;
                                                                                        return (0,
                                                                                            o.jsx)(S, {
                                                                                                as: "li",
                                                                                                children: (0,
                                                                                                    o.jsxs)(y, {
                                                                                                        href: i,
                                                                                                        target: a,
                                                                                                        className: "link",
                                                                                                        children: [(0,
                                                                                                            o.jsx)(V.OL, {
                                                                                                                name: n,
                                                                                                                size: 32
                                                                                                            }), (0,
                                                                                                                o.jsxs)(Text, {
                                                                                                                    size: 12,
                                                                                                                    lineHeight: 140,
                                                                                                                    css: {
                                                                                                                        color: "inherit"
                                                                                                                    },
                                                                                                                    children: [r, (0,
                                                                                                                        o.jsx)(Text, {
                                                                                                                            as: "div",
                                                                                                                            css: {
                                                                                                                                color: "$foreground800"
                                                                                                                            },
                                                                                                                            children: l
                                                                                                                        })]
                                                                                                                })]
                                                                                                    })
                                                                                            }, "".concat(r, "-submenu-item-").concat(t))
                                                                                    }
                                                                                    )
                                                                                }) : null]
                                                                    }, "menu-item-".concat(t))
                                                            }
                                                            )
                                                        })
                                                })]
                                    })
                            })
                    })
        }
            , M = (0,
                g.zo)("a", {
                    fontSize: "inherit",
                    letterSpacing: "inherit",
                    lineHeight: "$100",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "$1",
                    transition: "color .6s",
                    ".icon": {
                        paddingTop: ".2em"
                    },
                    "&:hover": {
                        span: {
                            textDecoration: "underline"
                        },
                        ".icon": {
                            textDecoration: "none"
                        }
                    },
                    variants: {
                        color: {
                            default: {
                                color: "$foreground600",
                                "&:hover": {
                                    color: "$foreground100"
                                }
                            },
                            dark: {
                                color: "$neutral800",
                                "&:hover": {
                                    color: "$neutral100"
                                }
                            },
                            lime: {
                                color: "$lime600",
                                "&:hover": {
                                    color: "$lime400"
                                }
                            },
                            purple: {
                                color: "$purple800",
                                "&:hover": {
                                    color: "$purple700"
                                }
                            },
                            blue: {
                                color: "$blue500",
                                "&:hover": {
                                    color: "$blue600"
                                }
                            },
                            active: {
                                true: {
                                    opacity: 0
                                }
                            }
                        },
                        size: {
                            8: {
                                fontSize: "$8",
                                letterSpacing: "$0",
                                fontWeight: "$regular"
                            },
                            10: {
                                fontSize: "$10",
                                letterSpacing: "$0",
                                fontWeight: "$regular"
                            },
                            12: {
                                fontSize: "$12",
                                letterSpacing: "$1",
                                fontWeight: "$regular"
                            },
                            14: {
                                fontSize: "$14",
                                letterSpacing: "$1",
                                fontWeight: "$regular"
                            },
                            16: {
                                fontSize: "$16",
                                letterSpacing: "$1",
                                fontWeight: "$regular"
                            },
                            18: {
                                fontSize: "$18",
                                letterSpacing: "$2",
                                fontWeight: "$regular"
                            },
                            20: {
                                fontSize: "$20",
                                letterSpacing: "$2",
                                fontWeight: "$regular"
                            },
                            24: {
                                fontSize: "$24",
                                letterSpacing: "$2",
                                fontWeight: "$regular"
                            },
                            28: {
                                fontSize: "$24",
                                letterSpacing: "$2",
                                fontWeight: "$regular"
                            },
                            32: {
                                fontSize: "$32",
                                letterSpacing: "$3",
                                fontWeight: "$medium"
                            },
                            40: {
                                fontSize: "$40",
                                letterSpacing: "$3",
                                fontWeight: "$medium"
                            },
                            48: {
                                fontSize: "$48",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            56: {
                                fontSize: "$56",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            64: {
                                fontSize: "$64",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            72: {
                                fontSize: "$72",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            80: {
                                fontSize: "$80",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            88: {
                                fontSize: "$88",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            96: {
                                fontSize: "$96",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            128: {
                                fontSize: "$128",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            144: {
                                fontSize: "$144",
                                letterSpacing: "$3",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            200: {
                                fontSize: "$200",
                                letterSpacing: "$4",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            240: {
                                fontSize: "$240",
                                letterSpacing: "$4",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            },
                            288: {
                                fontSize: "$288",
                                letterSpacing: "$4",
                                fontFamily: "$display",
                                fontWeight: "$medium"
                            }
                        },
                        fontFamily: {
                            default: {
                                fontFamily: "$default!important"
                            },
                            display: {
                                fontFamily: "$display!important"
                            }
                        },
                        fontWeight: {
                            light: {
                                fontWeight: "$light!important"
                            },
                            regular: {
                                fontWeight: "$regular!important"
                            },
                            medium: {
                                fontWeight: "$medium!important"
                            },
                            bold: {
                                fontWeight: "$bold!important"
                            }
                        },
                        align: {
                            left: {
                                textAlign: "left"
                            },
                            center: {
                                textAlign: "center"
                            },
                            right: {
                                textAlign: "right"
                            },
                            justify: {
                                textAlign: "justify"
                            }
                        },
                        lineHeight: {
                            100: {
                                lineHeight: "$100!important"
                            },
                            120: {
                                lineHeight: "$120!important"
                            },
                            140: {
                                lineHeight: "$140!important"
                            },
                            160: {
                                lineHeight: "$160!important"
                            }
                        },
                        noHover: {
                            true: {
                                "&:hover": {
                                    "&, *": {
                                        textDecoration: "none!important"
                                    }
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        color: "default"
                    }
                })
            , D = (0,
                l.forwardRef)((e, t) => {
                    let { children: n, iconLeft: r, iconLeftCustom: i, iconRight: a, iconRightCustom: l, noHover: s, ...c } = e;
                    return (0,
                        o.jsxs)(M, {
                            ref: t,
                            noHover: s,
                            "aria-label": n,
                            ...c,
                            children: [r && (0,
                                o.jsx)(V.OL, {
                                    className: "icon",
                                    name: r
                                }), i && (0,
                                    o.jsx)("span", {
                                        className: "icon",
                                        children: i
                                    }), (0,
                                        o.jsxs)("span", {
                                            children: [" ", n, " "]
                                        }), l && (0,
                                            o.jsx)("span", {
                                                className: "icon",
                                                children: l
                                            }), a && (0,
                                                o.jsx)(V.OL, {
                                                    className: "icon",
                                                    name: a
                                                })]
                        })
                }
                );
        D.displayName = "Link";
        let L = (0,
            g.zo)("section", {
                width: "100%",
                background: "$lime700",
                borderBottom: "solid 1px $lime600",
                zIndex: "500",
                textAlign: "center",
                position: "relative",
                display: "none",
                "@md": {
                    textAlign: "left",
                    display: "block"
                }
            })
            , Z = (0,
                g.zo)("div", {
                    maxWidth: "$pageWidth",
                    minHeight: "$navHeight",
                    paddingX: "$pageMargin",
                    marginX: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: "$pageMargin",
                    flexDirection: "column",
                    gap: "$2",
                    "@sm": {
                        paddingY: "initial",
                        flexDirection: "row",
                        gap: 0
                    }
                })
            , T = e => (0,
                o.jsx)
            // (L, {
            //     ...e,
            //     children: (0,
            //         o.jsxs)(Z, {
            //             children: [(0,
            //                 o.jsxs)(X, {
            //                     flow: {
            //                         "@initial": "column",
            //                         "@sm": "row"
            //                     },
            //                     align: "center",
            //                     gap: {
            //                         "@initial": 0,
            //                         "@sm": 2
            //                     },
            //                     children: [(0,
            //                         o.jsx)(I, {
            //                             color: "default",
            //                             children: "New"
            //                         }), " ", (0,
            //                             o.jsx)(Text, {
            //                                 as: "h3",
            //                                 lineHeight: {
            //                                     "@initial": "140",
            //                                     "@sm": "100"
            //                                 },
            //                                 size: 14,
            //                                 css: {
            //                                     color: "$neutral800",
            //                                     marginTop: "$1",
            //                                     "@sm": {
            //                                         marginTop: 0
            //                                     }
            //                                 },
            //                                 // children: "Special launch offer!"
            //                             }), " ", (0,
            //                                 o.jsxs)(Text, {
            //                                     as: "p",
            //                                     lineHeight: {
            //                                         "@initial": "140",
            //                                         "@sm": "100"
            //                                     },


            //                                 })]
            //                 }), (0,
            //                     o.jsxs)(p, {
            //                         css: {
            //                             color: "$lime600",
            //                             background: "$neutral600"
            //                         },
            //                         size: "small",
            //                         as: "a",
            //                         href: "/upgrade?utm_source=stripe",
            //                         target: "_blank",
            //                         children: ["Get Pro", " ", (0,
            //                             o.jsx)("svg", {
            //                                 width: "12",
            //                                 height: "11",
            //                                 viewBox: "0 0 24 25",
            //                                 fill: "none",
            //                                 xmlns: "http://www.w3.org/2000/svg",
            //                                 children: (0,
            //                                     o.jsx)("path", {
            //                                         fillRule: "evenodd",
            //                                         clipRule: "evenodd",
            //                                         d: "M5.96967 1.96967C6.26256 1.67678 6.73744 1.67678 7.03033 1.96967L16.5 11.4393C17.0858 12.0251 17.0858 12.9749 16.5 13.5607L7.03033 23.0303C6.73744 23.3232 6.26256 23.3232 5.96967 23.0303C5.67678 22.7375 5.67678 22.2626 5.96967 21.9697L15.4394 12.5L5.96967 3.03033C5.67678 2.73744 5.67678 2.26256 5.96967 1.96967Z",
            //                                         fill: "currentColor"
            //                                     })
            //                             })]
            //                     })]
            //         })
            // })
            , I = (0,
                g.zo)("span", {
                    borderRadius: "$rounded",
                    lineHeight: "$100",
                    textDecoration: "none!important",
                    display: "block",
                    variants: {
                        color: {
                            default: {
                                color: "$foreground100",
                                background: "$neutral500"
                            },
                            lime: {
                                color: "$neutral100",
                                background: "$lime500"
                            },
                            purple: {
                                color: "$foreground100",
                                background: "$purple800"
                            },
                            blue: {
                                color: "$foreground100",
                                background: "$blue700"
                            },
                            green: {
                                color: "$neutral100",
                                background: "$green500"
                            }
                        },
                        outline: {
                            true: {
                                background: "transparent!important"
                            }
                        },
                        invert: {
                            true: {
                                color: "$neutral600",
                                background: "$foreground500"
                            }
                        },
                        size: {
                            small: {
                                fontSize: "$10",
                                padding: "$1 $2",
                                gap: "4px"
                            },
                            medium: {
                                fontSize: "$12",
                                padding: "$1 $2",
                                gap: "5px"
                            },
                            large: {
                                fontSize: "$14",
                                padding: "$2 $3",
                                gap: "6px"
                            }
                        }
                    },
                    compoundVariants: [{
                        invert: "true",
                        color: "default",
                        css: {
                            color: "$neutral800",
                            background: "$foreground500"
                        }
                    }, {
                        invert: "true",
                        color: "lime",
                        css: {
                            color: "$foreground100",
                            background: "$lime500"
                        }
                    }, {
                        invert: "true",
                        color: "purple",
                        css: {
                            color: "$neutral800",
                            background: "$purple800"
                        }
                    }, {
                        invert: "true",
                        color: "purple",
                        css: {
                            color: "$neutral800",
                            background: "$purple800"
                        }
                    }],
                    defaultVariants: {
                        color: "default",
                        size: "small"
                    }
                })
            , E = (0,
                g.zo)("hr", {
                    width: "100%",
                    height: "1px",
                    border: "unset",
                    margin: 0,
                    background: "$foreground100",
                    opacity: .05
                });
        var _ = n(6567);
        let B = (0,
            g.zo)("ul", {
                display: "flex",
                flexDirection: "column",
                gap: "$3",
                margin: "0",
                padding: "0",
                variants: {
                    legal: {
                        true: {
                            flexDirection: "row",
                            li: {
                                position: "relative",
                                paddingRight: "$3",
                                "&::before": {
                                    content: "",
                                    width: "1px",
                                    height: "100%",
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    background: "$foreground100",
                                    opacity: .1
                                },
                                "&:last-child": {
                                    paddingRight: 0,
                                    "&::before": {
                                        display: "none"
                                    }
                                }
                            }
                        }
                    },
                    social: {
                        true: {
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            "@sm": {
                                justifyContent: "flex-end"
                            }
                        }
                    }
                }
            })
            , A = (0,
                g.zo)("li", {
                    listStyle: "none",
                    fontSize: "$2",
                    color: "$foreground700",
                    display: "flex"
                })
            , N = (0,
                g.zo)("a", {
                    listStyle: "none",
                    fontSize: "$14",
                    color: "$foreground700",
                    transition: "opacity 150ms",
                    display: "inline-flex",
                    alignItems: "center",
                    "&:hover": {
                        color: "$foreground500",
                        path: {
                            fill: "$foreground500"
                        },
                        textDecoration: "underline"
                    },
                    ".hide": {
                        display: "none"
                    },
                    "@sm": {
                        fontSize: "$12"
                    },
                    variants: {
                        social: {
                            true: {
                                opacity: .6,
                                "&:hover": {
                                    opacity: 1,
                                    textDecoration: "underline"
                                }
                            }
                        }
                    }
                })
            , O = e => {
                let { href: t, target: n } = e
                    , r = (0,
                        a.useRouter)();
                return (0,
                    o.jsx)(N, {
                        onClick: e => {
                            "_blank" !== n && (e.preventDefault(),
                                r.push(t))
                        }
                        ,
                        ...e
                    })
            }
            , Y = [{
                label: "Use Cases",
                items: [{
                    label: "Cloud Dev Environments",
                    href: "/cloud-development-environments"
                }, {
                    label: "Code Reviews",
                    href: "/improve-code-reviews"
                }, {
                    label: "Code in Sandboxes",
                    href: "/code-in-sandboxes"
                }, {
                    label: "Learn & Experiment",
                    href: "/learn-and-experiment"
                }, {
                    label: "Coding Exercises",
                    href: "/coding-exercises"
                }, {
                    label: "Instant Feedback",
                    href: "/get-instant-feedback"
                }]
            }, {
                label: "Ecosystem",
                items: [{
                    label: "Features",
                    href: "/features"
                }, {
                    label: "VS Code Extension",
                    href: "/vscode-extension"
                }, {
                    label: "Sandpack",
                    href: "https://sandpack.CodeBox.io/",
                    target: "_blank"
                }, {
                    label: "Status",
                    href: "https://status.CodeBox.io/",
                    target: "_blank"
                }, {
                    label: "Enterprise",
                    href: "/enterprise"
                }, {
                    label: "Pricing",
                    href: "/pricing"
                }]
            }, {
                label: "Explore",
                items: [{
                    label: "Discover",
                    href: "/discover"
                }, {
                    label: "Changelog",
                    href: "/changelog"
                }, {
                    label: "Documentation",
                    href: "/docs/",
                    target: "_blank"
                }, {
                    label: "Blog",
                    href: "/blog"
                }]
            }, {
                label: "Company",
                items: [{
                    label: "About",
                    href: "/company"
                }, {
                    label: "Support",
                    href: "/support"
                }, {
                    label: "Careers",
                    href: "/careers"
                }, {
                    label: "Brand kit",
                    href: "/brand"
                }]
            }]
            , J = [{
                label: "Github",
                component: V.Tf,
                href: "https://github.com/CodeBox/CodeBox-client",
                target: "_blank"
            }, {
                label: "Twitter",
                component: V.tL,
                href: "https://twitter.com/CodeBox",
                target: "_blank"
            }, {
                label: "Discord",
                component: V.O5,
                href: "https://discord.gg/C6vfhW3H6e",
                target: "_blank"
            }, {
                label: "YouTube",
                component: V._F,
                href: "https://www.youtube.com/c/CodeBox",
                target: "_blank"
            }]
            , G = [{
                label: "Terms of Use",
                href: "/legal/terms"
            }, {
                label: "Privacy Policy",
                href: "/legal/privacy"
            }]
            , U = e => (0,
                o.jsxs)(X, {
                    as: "footer",
                    flow: "column",
                    css: {
                        position: "relative",
                        zIndex: 9997,
                        background: "$neutral700"
                    },
                    children: [(0,
                        o.jsx)(E, {}), (0,
                            o.jsxs)(_.T5, {
                                children: [(0,
                                    o.jsxs)(_.Jn, {
                                        as: "nav",
                                        css: {
                                            marginY: "$6",
                                            gap: "$3 0"
                                        },
                                        children: [(0,
                                            o.jsx)(_.$W, {
                                                css: {
                                                    "@md": {
                                                        $$col: 4
                                                    }
                                                },
                                                children: (0,
                                                    o.jsx)(O, {
                                                        href: "/",
                                                        "aria-label": "Go to CodeBox home page",
                                                        children: (0,
                                                            o.jsx)(m.eg, {
                                                                symbol: !0,
                                                                css: {
                                                                    color: "$foreground800"
                                                                }
                                                            })
                                                    })
                                            }), Y && Y.map((e, t) => {
                                                let { label: n, items: r } = e;
                                                return (0,
                                                    o.jsx)(_.$W, {
                                                        css: {
                                                            $$col: 6,
                                                            marginTop: "$4",
                                                            "@sm": {
                                                                $$col: 3
                                                            },
                                                            "@md": {
                                                                $$col: 2,
                                                                marginTop: 0
                                                            }
                                                        },
                                                        children: (0,
                                                            o.jsxs)("div", {
                                                                children: [(0,
                                                                    o.jsx)("label", {
                                                                        children: (0,
                                                                            o.jsx)(Text, {
                                                                                as: "span",
                                                                                size: 12,
                                                                                fontWeight: "medium",
                                                                                css: {
                                                                                    color: "$foreground600",
                                                                                    marginBottom: "$3",
                                                                                    display: "block"
                                                                                },
                                                                                children: n
                                                                            })
                                                                    }), (0,
                                                                        o.jsx)(B, {
                                                                            as: "ul",
                                                                            children: r && r.map((e, n) => {
                                                                                let { label: r, href: i, target: a } = e;
                                                                                return (0,
                                                                                    o.jsx)(A, {
                                                                                        children: (0,
                                                                                            o.jsx)(O, {
                                                                                                href: i,
                                                                                                target: a,
                                                                                                children: r
                                                                                            })
                                                                                    }, "footer-section-title-".concat(t, "-").concat(n))
                                                                            }
                                                                            )
                                                                        })]
                                                            })
                                                    }, "footer-section-title-".concat(t))
                                            }
                                            )]
                                    }), (0,
                                        o.jsx)(_.Jn, {
                                            css: {
                                                paddingY: 0
                                            },
                                            children: (0,
                                                o.jsx)(_.$W, {
                                                    children: (0,
                                                        o.jsx)(E, {})
                                                })
                                        }), (0,
                                            o.jsxs)(_.Jn, {
                                                css: {
                                                    paddingTop: "$5",
                                                    paddingBottom: "$6"
                                                },
                                                children: [(0,
                                                    o.jsxs)(_.$W, {
                                                        css: {
                                                            "@sm": {
                                                                $$col: 6
                                                            }
                                                        },
                                                        children: [(0,
                                                            o.jsxs)(Text, {
                                                                size: 12,
                                                                css: {
                                                                    color: "$foreground700"
                                                                },
                                                                children: ["Copyright \xa9 ", new Date().getFullYear(), " CodeBox B.V. All rights reserved."]
                                                            }), (0,
                                                                o.jsx)("br", {}), (0,
                                                                    o.jsx)(B, {
                                                                        css: {
                                                                            marginTop: "$1"
                                                                        },
                                                                        legal: !0,
                                                                        children: G.map((e, t) => {
                                                                            let { label: n, href: r, target: i } = e;
                                                                            return (0,
                                                                                o.jsx)(A, {
                                                                                    children: (0,
                                                                                        o.jsx)(O, {
                                                                                            href: r,
                                                                                            target: i,
                                                                                            children: n
                                                                                        })
                                                                                }, "legal-item-".concat(t))
                                                                        }
                                                                        )
                                                                    })]
                                                    }), (0,
                                                        o.jsx)(_.$W, {
                                                            css: {
                                                                "@sm": {
                                                                    $$col: 6
                                                                }
                                                            },
                                                            children: (0,
                                                                o.jsx)(B, {
                                                                    social: !0,
                                                                    children: J.map((e, t) => {
                                                                        let { label: n, href: r, target: i } = e;
                                                                        return (0,
                                                                            o.jsx)(A, {
                                                                                children: (0,
                                                                                    o.jsxs)(O, {
                                                                                        href: r,
                                                                                        target: i,
                                                                                        "aria-label": n,
                                                                                        social: !0,
                                                                                        children: [(0,
                                                                                            o.jsx)(e.component, {
                                                                                                size: "16"
                                                                                            }), (0,
                                                                                                o.jsx)("span", {
                                                                                                    className: "hide",
                                                                                                    children: n
                                                                                                })]
                                                                                    })
                                                                            }, "social-item-".concat(t))
                                                                    }
                                                                    )
                                                                })
                                                        })]
                                            })]
                            })]
                });
        (0,
            g.zo)("div", {
                overflow: "hidden",
                position: "relative",
                zIndex: 0,
                width: "100%",
                "&::after": {
                    paddingTop: "56.25%",
                    display: "block",
                    content: ""
                },
                iframe: {
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }
            });
        let P = (0,
            g.zo)("div", {
                padding: "$4",
                backgroundColor: "$neutral600",
                display: "block",
                transition: "background-color 300ms",
                whiteSpace: "normal",
                overflow: "hidden",
                position: "relative",
                "@sm": {
                    padding: "$6"
                },
                variants: {
                    outline: {
                        true: {
                            backgroundColor: "transparent",
                            outline: "1px solid $neutral500"
                        }
                    },
                    radius: {
                        0: {
                            borderRadius: "$0"
                        },
                        1: {
                            borderRadius: "$1"
                        },
                        2: {
                            borderRadius: "$2"
                        },
                        3: {
                            borderRadius: "$3"
                        }
                    },
                    hover: {
                        true: {
                            "&:hover": {
                                backgroundColor: "$neutral500"
                            }
                        }
                    }
                },
                defaultVariants: {
                    radius: "3"
                }
            })
            , X = (0,
                g.zo)("div", {
                    display: "flex",
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    variants: {
                        horizontal: {
                            true: {
                                flexDirection: "row"
                            }
                        },
                        vertical: {
                            true: {
                                flexDirection: "column"
                            }
                        },
                        flexWrap: {
                            wrap: {
                                flexWrap: "wrap"
                            },
                            nowrap: {
                                flexWrap: "nowrap"
                            },
                            "wrap-reverse": {
                                flexWrap: "wrap-reverse"
                            }
                        },
                        flow: {
                            row: {
                                flexDirection: "row"
                            },
                            column: {
                                flexDirection: "column"
                            },
                            "row-reverse": {
                                flexDirection: "row-reverse"
                            },
                            "column-reverse": {
                                flexDirection: "column-reverse"
                            }
                        },
                        justify: {
                            start: {
                                justifyContent: "flex-start"
                            },
                            center: {
                                justifyContent: "center"
                            },
                            end: {
                                justifyContent: "flex-end"
                            },
                            stretch: {
                                justifyContent: "stretch"
                            },
                            "space-between": {
                                justifyContent: "space-between"
                            },
                            "space-around": {
                                justifyContent: "space-around"
                            }
                        },
                        align: {
                            start: {
                                alignItems: "flex-start"
                            },
                            center: {
                                alignItems: "center"
                            },
                            end: {
                                alignItems: "flex-end"
                            },
                            stretch: {
                                alignItems: "stretch"
                            }
                        },
                        gap: {
                            0: {
                                gap: 0
                            },
                            1: {
                                gap: "$1"
                            },
                            2: {
                                gap: "$2"
                            },
                            3: {
                                gap: "$3"
                            },
                            4: {
                                gap: "$4"
                            },
                            5: {
                                gap: "$5"
                            },
                            6: {
                                gap: "$6"
                            },
                            7: {
                                gap: "$7"
                            },
                            8: {
                                gap: "$8"
                            },
                            9: {
                                gap: "$9"
                            },
                            10: {
                                gap: "$10"
                            }
                        },
                        display: {
                            flex: {
                                display: "flex"
                            },
                            inline: {
                                display: "inline-flex"
                            }
                        }
                    }
                });
        (0,
            g.zo)("a", {
                cursor: "pointer",
                lineHeight: 0,
                borderRadius: 10,
                background: "#252525",
                display: "flex",
                transition: "box-shadow 300ms, transform 800ms cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                "&:hover": {
                    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
                    transform: "scale(1.02)"
                }
            }),
            n(2852);
        let q = (0,
            g.zo)("div", {
                marginTop: "$5",
                ".markdown-body": {
                    maxWidth: "100%",
                    fontFamily: "$default",
                    backgroundColor: "transparent",
                    wordWrap: "breakWord",
                    marginBottom: "$6",
                    color: "$foreground500",
                    "tt, code": {
                        fontFamily: 'Native, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        fontVariantLigatures: "common-ligatures",
                        fontFeatureSettings: '"liga", "calt"'
                    },
                    "table tr:nth-child(2n)": {
                        backgroundColor: "transparent"
                    },
                    "> .contains-task-list": {
                        paddingLeft: 0
                    },
                    hr: {
                        border: "none",
                        height: 1,
                        backgroundColor: " $neutral500"
                    },
                    "h1, h2, h3, h4, h5, h6": {
                        fontWeight: "$medium",
                        borderBottom: "none",
                        marginBottom: 0
                    },
                    "h1, h2, h3": {
                        color: "$foreground100",
                        margin: "1em 0 $3!important",
                        padding: "0!important",
                        lineHeight: "$120"
                    },
                    h1: {
                        fontSize: "$48",
                        fontWeight: "$bold",
                        letterSpacing: "$4",
                        marginTop: "$6",
                        "@sm": {
                            fontSize: "$64"
                        }
                    },
                    h2: {
                        fontSize: "$40",
                        fontWeight: "$bold",
                        letterSpacing: "$3",
                        marginTop: "$6",
                        "@sm": {
                            fontSize: "$56"
                        }
                    },
                    h3: {
                        fontSize: "$24",
                        letterSpacing: "$2",
                        marginTop: "$4",
                        "@sm": {
                            fontSize: "$32"
                        }
                    },
                    h4: {
                        fontSize: "$18",
                        letterSpacing: "$2",
                        marginTop: "$4",
                        "@sm": {
                            fontSize: "$24"
                        }
                    },
                    "h5, h6": {
                        fontSize: "$16",
                        letterSpacing: "$1",
                        marginTop: "$3",
                        "@sm": {
                            fontSize: "$18"
                        }
                    },
                    p: {
                        fontSize: "$16",
                        letterSpacing: "$1",
                        lineHeight: "$160",
                        marginY: "$3",
                        "@md": {
                            fontSize: "$18"
                        }
                    },
                    "h2 + p, h3 + p, h4 + p": {
                        marginTop: "$2"
                    },
                    "b, strong": {
                        color: "$foreground100!important"
                    },
                    "ul,li": {
                        fontSize: "$16",
                        lineHeight: "$160",
                        "@md": {
                            fontSize: "$18"
                        }
                    },
                    li: {
                        marginY: "$2"
                    },
                    blockquote: {
                        borderLeft: "solid $neutral200 2px",
                        margin: "$4 $4",
                        padding: "$2 $4",
                        p: {
                            color: "$foreground100!important"
                        },
                        "p span": {
                            display: "block",
                            marginTop: "$3",
                            fontWeight: "normal",
                            color: "$foreground500 !important"
                        }
                    },
                    code: {
                        padding: "4px",
                        borderRadius: 4
                    },
                    "p code, li code": {
                        backgroundColor: "$neutral400",
                        color: "$foreground400",
                        fontSize: "0.85em"
                    },
                    table: {
                        borderSpacing: "0",
                        borderCollapse: "collapse",
                        width: "max-content",
                        maxWidth: "100%",
                        overflow: "auto",
                        marginY: "$6"
                    },
                    "img, video": {
                        borderRadius: "$1",
                        marginY: "$4"
                    },
                    ".image-caption": {
                        textAlign: "center",
                        width: "100%",
                        display: "block",
                        fontSize: "0.7em",
                        color: "var(--color-fg-muted)"
                    },
                    "p:has(img), p:has(video)": {
                        width: "110%",
                        marginLeft: "-5%"
                    },
                    'iframe[title="YouTube video player"]': {
                        width: "100%",
                        minHeight: "auto"
                    },
                    "--shiki-color-text": "#d1d1d1",
                    "--shiki-token-constant": "#79b8ff",
                    "--shiki-token-string": "#ffab70",
                    "--shiki-token-comment": "#6b737c",
                    "--shiki-token-keyword": "#f97583",
                    "--shiki-token-parameter": "#ff9800",
                    "--shiki-token-function": "#b392f0",
                    "--shiki-token-string-expression": "#4bb74a",
                    "--shiki-token-punctuation": "#bbbbbb",
                    "--shiki-token-link": "#ffab70",
                    "--color-fg-default": "#c9d1d9",
                    "--color-fg-muted": "#8b949e",
                    "--color-fg-subtle": "#484f58",
                    "--color-canvas-default": "#151515",
                    "--color-canvas-subtle": "#1c1c1c",
                    "--color-border-default": "#30363d",
                    "--color-border-muted": "#21262d",
                    "--color-neutral-muted": "rgba(110, 118, 129, 0.4)",
                    "--color-accent-fg": "$colors$purple600",
                    "--color-accent-emphasis": "#6e96f8",
                    "--color-attention-subtle": "rgba(187, 128, 9, 0.15)",
                    "--color-danger-fg": "#ed6c6c"
                }
            })
            , K = e => {
                let { children: t, ...n } = e;
                return (0,
                    o.jsx)(q, {
                        ...n,
                        children: (0,
                            o.jsx)("div", {
                                className: "markdown-body",
                                children: t
                            })
                    })
            }
            , Q = [{
                name: "AJ",
                team: "Engineering",
                username: "aj-foster",
                image: "/new/images/avatar/aj.jpg",
                color: "#FF9900"
            }, {
                name: "Alex",
                team: "Engineering",
                username: "alexnm",
                image: "/new/images/avatar/alex.jpg",
                color: "#FFE600"
            }, {
                name: "Bas",
                team: "Founder",
                username: "bazzjuh",
                image: "/new/images/avatar/bas.jpg",
                color: "#38F0DA"
            }, {
                name: "Bogdan",
                team: "Engineering",
                username: "lbogdan",
                image: "/new/images/avatar/bogdan.jpg",
                color: "#00B2FF"
            }, {
                name: "Christian",
                team: "Engineering",
                username: "christianalfoni",
                image: "/new/images/avatar/christian.jpg",
                color: "#F44172"
            }, {
                name: "Danilo",
                team: "Engineering",
                username: "danilowoz",
                image: "/new/images/avatar/danilo.jpg",
                color: "#E3FF73"
            }, {
                name: "Ed",
                team: "Design",
                username: "ed-CodeBox",
                image: "/new/images/avatar/ed.jpg",
                color: "#D497FC"
            }, {
                name: "Farrell",
                team: "Operations",
                username: "farrelltatam",
                image: "/new/images/avatar/farrell.jpg",
                color: "#EF7A7A"
            }, {
                name: "Filipe",
                team: "Marketing",
                username: "filipelima18",
                image: "/new/images/avatar/filipe.jpg",
                color: "#F9D685"
            }, {
                name: "Ioana",
                team: "Engineering",
                username: "ioana-chiorean",
                image: "/new/images/avatar/ioana.jpg",
                color: "#7DA1F9"
            }, {
                name: "Ives",
                team: "Founder",
                username: "CompuIves",
                image: "/new/images/avatar/ives.jpg",
                color: "#A4FAA6"
            }, {
                name: "James",
                team: "Support",
                username: "JamesACS",
                image: "/new/images/avatar/james.jpg",
                color: "#dd763c"
            }, {
                name: "Jasper",
                team: "Engineering",
                username: "DeMoorJasper",
                image: "/new/images/avatar/jasper.jpg",
                color: "#ef7a7a"
            }, {
                name: "Joana",
                team: "Operations",
                username: "JoanaTelker",
                image: "/new/images/avatar/joana.jpg",
                color: "#F8FFDC"
            }, {
                name: "Joji",
                team: "Engineering",
                username: "mojojoji",
                image: "/new/images/avatar/joji.jpg",
                color: "#CAC0FF"
            }, {
                name: "Mihai",
                team: "Engineering",
                username: "Utwo",
                image: "/new/images/avatar/mihai.jpg",
                color: "#EDFFA5"
            }, {
                name: "Necoline",
                team: "Product",
                username: "necoline",
                image: "/new/images/avatar/necoline.jpg",
                color: "#F44172"
            }, {
                name: "Sanne",
                team: "Engineering",
                username: "sannek",
                image: "/new/images/avatar/sanne.jpg",
                color: "#38F0DA"
            }, {
                name: "Stephen",
                team: "Growth",
                username: "stevecsb",
                image: "/new/images/avatar/stephen.jpg",
                color: "#00B2FF"
            }, {
                name: "Tamas",
                team: "Data",
                username: "tromika",
                image: "/new/images/avatar/tamas.jpg",
                color: "#00B2FF"
            }]
            , ee = (0,
                g.zo)("a", {
                    size: "$5",
                    borderRadius: "$rounded",
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "$lime800",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                    "&:not(:first-child)": {
                        marginLeft: "-.5em"
                    },
                    "&:hover": {
                        zIndex: 9999
                    },
                    img: {
                        margin: "0!important"
                    }
                })
            , et = e => {
                let { username: t, all: n, css: r, ...i } = e
                    , a = n ? Q : Q.filter(e => e.username === t);
                return (0,
                    o.jsx)(o.Fragment, {
                        children: a && a.map(e => {
                            let { name: t, team: n, username: a, image: l, color: s } = e;
                            return (0,
                                o.jsx)(ee, {
                                    css: {
                                        borderColor: s,
                                        ...r
                                    },
                                    ...i,
                                    children: (0,
                                        o.jsx)(x(), {
                                            alt: "".concat(t, " - ").concat(n),
                                            title: "".concat(t, " - ").concat(n),
                                            src: l,
                                            fill: !0,
                                            sizes: "50vw",
                                            style: {
                                                objectFit: "cover"
                                            }
                                        })
                                }, a)
                        }
                        )
                    })
            }
            ;
        var en = n(3587)
    },
    7361: function (e, t, n) {
        n.d(t, {
            QR: function () {
                return s
            },
            eg: function () {
                return l
            }
        });
        var o = n(1527)
            , r = n(6294);
        let i = (0,
            r.zo)("svg", {
                fill: "none"
            })
            , a = (0,
                r.zo)("path", {
                    transition: "fill 300ms",
                    variants: {
                        color: {
                            white: {
                                fill: "$foreground100!important"
                            },
                            black: {
                                fill: "$neutral800!important"
                            },
                            lime: {
                                fill: "$lime800!important"
                            },
                            purple: {
                                fill: "$purple800!important"
                            }
                        }
                    }
                })
            , l = e => {
                let { symbol: t, size: n, css: r, ...l } = e;
                return !0 === t ? (0,
                    o.jsx)(i, {
                        css: {
                            size: n || "24px",
                            ...r
                        },
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...l,
                        children: (0,
                            o.jsx)(a, {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z",
                                fill: "currentColor"
                            })
                    }) : (0,
                        o.jsxs)(i, {
                            css: {
                                width: "165px",
                                height: "24px",
                                ...r
                            },
                            viewBox: "0 0 165 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...l,
                            children: [(0,
                                o.jsx)(a, {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z",
                                    fill: "currentColor"
                                }), (0,
                                    o.jsx)(a, {
                                        d: "M43.846 14.113h-2.584c-.375 2.342-1.943 3.69-4.107 3.69-2.871 0-4.748-2.232-4.748-5.79 0-3.512 1.81-5.788 4.593-5.788 2.252 0 3.732 1.326 4.152 3.712h2.583c-.508-3.491-3.312-5.767-6.823-5.767-4.218 0-7.133 3.491-7.133 7.844 0 4.485 2.981 7.843 7.199 7.843 3.511 0 6.338-2.253 6.868-5.744Z",
                                        fill: "currentColor"
                                    }), (0,
                                        o.jsx)(a, {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M55.7 14.113c0-2.983-2.053-5.745-5.41-5.745-3.356 0-5.41 2.762-5.41 5.745s2.054 5.744 5.41 5.744c3.357 0 5.41-2.761 5.41-5.744Zm-8.28 0c0-2.364 1.038-3.955 2.87-3.955 1.855 0 2.893 1.59 2.893 3.955 0 2.342-1.038 3.955-2.892 3.955-1.833 0-2.871-1.613-2.871-3.955ZM65.094 17.316h-.067c-.53 1.525-1.81 2.541-3.489 2.541-3.003 0-4.637-2.651-4.637-5.744s1.7-5.745 4.637-5.745c1.679 0 2.96.994 3.49 2.519h.066V4.391h2.362v15.245h-2.362v-2.32Zm-2.783-7.158c-1.833 0-2.87 1.59-2.87 3.955 0 2.342 1.037 3.955 2.87 3.955 1.855 0 2.87-1.613 2.87-3.955 0-2.364-1.015-3.955-2.87-3.955ZM79.335 16.212H76.93c-.265.884-.884 1.856-2.32 1.856-1.677 0-2.848-1.171-2.958-3.182h7.883c.331-3.844-1.833-6.518-5.123-6.518s-5.167 2.696-5.167 5.745 1.921 5.744 5.211 5.744c2.694 0 4.417-1.458 4.88-3.645Zm-4.924-6.054c1.612 0 2.562 1.149 2.716 2.938h-5.454c.155-1.79 1.126-2.938 2.738-2.938Z",
                                            fill: "currentColor"
                                        }), (0,
                                            o.jsx)(a, {
                                                d: "M88.852 10.865c2.87.663 4.306 2.165 4.306 4.573 0 2.541-2.474 4.42-6.007 4.42-4.04 0-6.227-2.829-6.47-5.59h2.584c.154 1.988 1.766 3.534 3.908 3.534 1.944 0 3.379-.84 3.379-2.253 0-1.237-.928-1.9-2.893-2.364l-2.208-.508c-2.981-.707-4.46-2.1-4.46-4.22 0-2.563 2.517-4.287 5.586-4.287 3.887 0 5.874 2.121 6.139 4.75h-2.584c-.198-1.811-1.722-2.695-3.51-2.695-1.745 0-3.004.751-3.004 2.055 0 1.038.773 1.524 3.025 2.055l2.209.53Z",
                                                fill: "currentColor"
                                            }), (0,
                                                o.jsx)(a, {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M102.446 17.316h.066v2.32h2.363V8.59h-2.363v2.298h-.066c-.53-1.525-1.811-2.519-3.49-2.519-2.936 0-4.636 2.652-4.636 5.745s1.634 5.744 4.637 5.744c1.678 0 2.959-1.016 3.489-2.54Zm-5.587-3.203c0-2.364 1.06-3.955 2.849-3.955 1.788 0 2.892 1.59 2.892 3.955 0 2.342-1.104 3.955-2.892 3.955-1.767 0-2.849-1.613-2.849-3.955Z",
                                                    fill: "currentColor"
                                                }), (0,
                                                    o.jsx)(a, {
                                                        d: "M109.688 13.008v6.628h-2.407V8.59h2.341v2.165h.044c.464-1.546 1.612-2.386 3.224-2.386 2.429 0 3.621 1.657 3.621 4.088v7.18h-2.407v-6.473c0-2.055-.728-2.983-2.208-2.983-1.479 0-2.208 1.016-2.208 2.828Z",
                                                        fill: "currentColor"
                                                    }), (0,
                                                        o.jsx)(a, {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M126.357 17.316h.066v2.32h2.363V4.391h-2.363v6.496h-.066c-.53-1.525-1.811-2.519-3.489-2.519-2.937 0-4.638 2.652-4.638 5.745s1.634 5.744 4.638 5.744c1.678 0 2.959-1.016 3.489-2.54Zm-5.587-3.203c0-2.364 1.038-3.955 2.87-3.955 1.855 0 2.871 1.59 2.871 3.955 0 2.342-1.016 3.955-2.871 3.955-1.832 0-2.87-1.613-2.87-3.955ZM137.11 8.368c2.937 0 4.637 2.652 4.637 5.745s-1.634 5.744-4.637 5.744c-1.679 0-2.959-1.016-3.489-2.54h-.067v2.32h-2.362V4.39h2.362v6.496h.067c.53-1.525 1.81-2.519 3.489-2.519Zm-.773 1.79c-1.855 0-2.871 1.59-2.871 3.955 0 2.342 1.016 3.955 2.871 3.955 1.833 0 2.87-1.613 2.87-3.955 0-2.364-1.037-3.955-2.87-3.955ZM153.78 14.113c0-2.983-2.053-5.745-5.41-5.745-3.356 0-5.41 2.762-5.41 5.745s2.054 5.744 5.41 5.744c3.357 0 5.41-2.761 5.41-5.744Zm-8.281 0c0-2.364 1.038-3.955 2.871-3.955 1.855 0 2.893 1.59 2.893 3.955 0 2.342-1.038 3.955-2.893 3.955-1.833 0-2.871-1.613-2.871-3.955Z",
                                                            fill: "currentColor"
                                                        }), (0,
                                                            o.jsx)(a, {
                                                                d: "m159.169 15.35-2.937 4.286h-2.716l4.24-5.943-3.688-5.104h2.716l2.385 3.447 2.385-3.447h2.694l-3.666 5.082 4.218 5.965h-2.694l-2.937-4.286Z",
                                                                fill: "currentColor"
                                                            })]
                        })
            }
            ;
        (0,
            r.zo)("path", {
                transition: "fill 300ms",
                fill: "$foreground800",
                variants: {
                    color: {
                        white: {
                            fill: "$neutral800!important"
                        },
                        black: {
                            fill: "$foreground800!important"
                        }
                    }
                }
            });
        let s = e => {
            let { color: t, size: n, ...r } = e;
            return (0,
                o.jsxs)(i, {
                    width: n || 24,
                    height: n || 24,
                    viewBox: "0 0 24 25",
                    ...r,
                    children: [(0,
                        o.jsx)("path", {
                            d: "M0 8.448c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.994C3.8.448 5.2.448 8 .448h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.186C24 4.249 24 5.649 24 8.449v8c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.184c-1.07.546-2.47.546-5.27.546H8c-2.8 0-4.2 0-5.27-.546a5 5 0 0 1-2.185-2.185C0 20.648 0 19.248 0 16.448v-8Z",
                            fill: "#161616"
                        }), (0,
                            o.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M5 5.448h14v14H5v-14ZM17.568 6.88v11.137H6.432V6.88h11.136Z",
                                fill: "white"
                            })]
                })
        }
    }
}]);
