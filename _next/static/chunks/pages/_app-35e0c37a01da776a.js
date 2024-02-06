(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    7575: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(4343)
        }
        ])
    },
    8873: function (e, t, n) {
        "use strict";
        n.d(t, {
            S: function () {
                return a
            },
            d: function () {
                return u
            }
        });
        var r = n(1527)
            , i = n(959);
        let o = {
            state: "UNAUTHENTICATED",
            user: {
                avatar_url: "/new/images/projects-page/avatars/user1.jpg",
                name: "Marco",
                username: "marco"
            }
        }
            , s = (0,
                i.createContext)(o)
            , a = () => (0,
                i.useContext)(s)
            , u = e => {
                let { children: t } = e
                    , [n, a] = (0,
                        i.useState)(o);
                return (0,
                    i.useEffect)(() => {
                        fetch("/api/v1/users/current", {
                            credentials: "include"
                        }).then(e => e.json()).then(e => {
                            e.data && a({
                                state: "AUTHENTICATED",
                                user: e.data
                            })
                        }
                        ).catch(e => {
                            "?user=test" === window.location.search && a({
                                state: "AUTHENTICATED",
                                user: {
                                    avatar_url: "https://avatars1.githubusercontent.com/u/4838076?v=4",
                                    beta_access: !0,
                                    name: "Danilo Woznica",
                                    provider: "github",
                                    send_survey: !1,
                                    username: "danilowoz"
                                }
                            })
                        }
                        )
                    }
                        , []),
                    (0,
                        r.jsx)(s.Provider, {
                            value: n,
                            children: t
                        })
            }
    },
    4343: function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, {
                default: function () {
                    return tI
                }
            });
        var r, i, o, s, a, u, l, c, d, p, f, h = n(1527), g = n(6294);
        let v = (0,
            g.zY)({
                "@font-face": {
                    fontFamily: "TWK Everett",
                    fontWeight: 500,
                    src: '\n    url("/new/fonts/TWKEverett-Medium-web.woff2") format("woff2"),\n     url("/new/fonts/TWKEverett-Medium-web.woff") format("woff"),\n     url("/new/fonts/TWKEverett-Medium-web.ttf") format("ttf")\n     ',
                    fontDisplay: "swap"
                },
                ".material-symbols-outlined": {
                    fontSize: "inherit!important",
                    fontWeight: "200!important"
                },
                "html, body": {
                    background: "$background",
                    color: "$text",
                    padding: 0,
                    margin: 0,
                    fontFamily: "$default",
                    "-webkit-font-smoothing": "antialiased",
                    fontDisplay: "swap"
                },
                html: {
                    fontSize: "10px"
                },
                body: {
                    fontSize: "1.6rem"
                },
                a: {
                    color: "inherit",
                    textDecoration: "none"
                },
                "*": {
                    boxSizing: "border-box"
                },
                ".show-mobile": {
                    "@md": {
                        display: "none"
                    }
                },
                ".hide-mobile": {
                    display: "none",
                    "@md": {
                        display: "block"
                    }
                }
            });
        var y = n(959)
            , m = function (e, t) {
                return (m = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function (e, t) {
                    e.__proto__ = t
                }
                    || function (e, t) {
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                )(e, t)
            };
        function b(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            m(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                    new n)
        }
        var S = function () {
            return (S = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        };
        function I(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n
        }
        function w(e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            )
        }
        function k(e, t) {
            var n, r, i, o, s = {
                label: 0,
                sent: function () {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }
                ),
                o;
            function a(a) {
                return function (u) {
                    return function (a) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; o && (o = 0,
                            a[0] && (s = 0)),
                            s;)
                            try {
                                if (n = 1,
                                    r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, a[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (a = [2 & a[0], i.value]),
                                a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                            r = a[1],
                                            a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(),
                                            s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1],
                                                i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2],
                                                s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(),
                                            s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e],
                                    r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        }
        function E(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
                , n = t && e[t]
                , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function () {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function _(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, i, o = n.call(e), s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                    s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s
        }
        function x(e, t, n) {
            if (n || 2 == arguments.length)
                for (var r, i = 0, o = t.length; i < o; i++)
                    !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        "function" == typeof SuppressedError && SuppressedError,
            (r = l || (l = {}))[r.None = 0] = "None",
            r[r.Error = 1] = "Error",
            r[r.Warn = 2] = "Warn",
            r[r.Verbose = 3] = "Verbose",
            r[r.Debug = 4] = "Debug";
        var T = function (e) {
            return function () {
                var t = S({}, e.config);
                return {
                    logger: t.loggerProvider,
                    logLevel: t.logLevel
                }
            }
        }
            , P = function (e, t) {
                var n, r;
                t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
                try {
                    for (var i = E(t.split(".")), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        if (!(s in e))
                            return;
                        e = e[s]
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                return e
            }
            , O = function (e, t) {
                return function () {
                    var n, r, i = {};
                    try {
                        for (var o = E(t), s = o.next(); !s.done; s = o.next()) {
                            var a = s.value;
                            i[a] = P(e, a)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return i
                }
            }
            , R = function (e, t, n, r, i) {
                return void 0 === i && (i = null),
                    function () {
                        for (var o = [], s = 0; s < arguments.length; s++)
                            o[s] = arguments[s];
                        var a = n()
                            , u = a.logger
                            , c = a.logLevel;
                        if (c && c < l.Debug || !c || !u)
                            return e.apply(i, o);
                        var d = {
                            type: "invoke public method",
                            name: t,
                            args: o,
                            stacktrace: (Error().stack || "").split("\n").slice(3).map(function (e) {
                                return e.trim()
                            }),
                            time: {
                                start: new Date().toISOString()
                            },
                            states: {}
                        };
                        r && d.states && (d.states.before = r());
                        var p = e.apply(i, o);
                        return p && p.promise ? p.promise.then(function () {
                            r && d.states && (d.states.after = r()),
                                d.time && (d.time.end = new Date().toISOString()),
                                u.debug(JSON.stringify(d, null, 2))
                        }) : (r && d.states && (d.states.after = r()),
                            d.time && (d.time.end = new Date().toISOString()),
                            u.debug(JSON.stringify(d, null, 2))),
                            p
                    }
            }
            , F = function (e) {
                return {
                    promise: e || Promise.resolve()
                }
            };
        (i = c || (c = {})).Unknown = "unknown",
            i.Skipped = "skipped",
            i.Success = "success",
            i.RateLimit = "rate_limit",
            i.PayloadTooLarge = "payload_too_large",
            i.Invalid = "invalid",
            i.Failed = "failed",
            i.Timeout = "Timeout",
            i.SystemError = "SystemError";
        var D = "".concat("AMP", "_unsent")
            , A = "https://api2.amplitude.com/2/httpapi"
            , C = function (e, t) {
                var n = Math.max(t, 1);
                return e.reduce(function (e, t, r) {
                    var i = Math.floor(r / n);
                    return e[i] || (e[i] = []),
                        e[i].push(t),
                        e
                }, [])
            }
            , B = function (e, t, n) {
                return void 0 === t && (t = 0),
                    void 0 === n && (n = c.Unknown),
                {
                    event: e,
                    code: t,
                    message: n
                }
            }
            , $ = "Amplitude Logger "
            , j = function () {
                function e() {
                    this.logLevel = l.None
                }
                return e.prototype.disable = function () {
                    this.logLevel = l.None
                }
                    ,
                    e.prototype.enable = function (e) {
                        void 0 === e && (e = l.Warn),
                            this.logLevel = e
                    }
                    ,
                    e.prototype.log = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this.logLevel < l.Verbose || console.log("".concat($, "[Log]: ").concat(e.join(" ")))
                    }
                    ,
                    e.prototype.warn = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this.logLevel < l.Warn || console.warn("".concat($, "[Warn]: ").concat(e.join(" ")))
                    }
                    ,
                    e.prototype.error = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this.logLevel < l.Error || console.error("".concat($, "[Error]: ").concat(e.join(" ")))
                    }
                    ,
                    e.prototype.debug = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this.logLevel < l.Debug || console.log("".concat($, "[Debug]: ").concat(e.join(" ")))
                    }
                    ,
                    e
            }()
            , N = function () {
                return {
                    flushMaxRetries: 12,
                    flushQueueSize: 200,
                    flushIntervalMillis: 1e4,
                    instanceName: "$default_instance",
                    logLevel: l.Warn,
                    loggerProvider: new j,
                    optOut: !1,
                    serverUrl: A,
                    serverZone: "US",
                    useBatch: !1
                }
            }
            , L = function () {
                function e(e) {
                    this._optOut = !1;
                    var t, n, r, i, o = N();
                    this.apiKey = e.apiKey,
                        this.flushIntervalMillis = null !== (t = e.flushIntervalMillis) && void 0 !== t ? t : o.flushIntervalMillis,
                        this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries,
                        this.flushQueueSize = e.flushQueueSize || o.flushQueueSize,
                        this.instanceName = e.instanceName || o.instanceName,
                        this.loggerProvider = e.loggerProvider || o.loggerProvider,
                        this.logLevel = null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel,
                        this.minIdLength = e.minIdLength,
                        this.plan = e.plan,
                        this.ingestionMetadata = e.ingestionMetadata,
                        this.optOut = null !== (r = e.optOut) && void 0 !== r ? r : o.optOut,
                        this.serverUrl = e.serverUrl,
                        this.serverZone = e.serverZone || o.serverZone,
                        this.storageProvider = e.storageProvider,
                        this.transportProvider = e.transportProvider,
                        this.useBatch = null !== (i = e.useBatch) && void 0 !== i ? i : o.useBatch,
                        this.loggerProvider.enable(this.logLevel);
                    var s = M(e.serverUrl, e.serverZone, e.useBatch);
                    this.serverZone = s.serverZone,
                        this.serverUrl = s.serverUrl
                }
                return Object.defineProperty(e.prototype, "optOut", {
                    get: function () {
                        return this._optOut
                    },
                    set: function (e) {
                        this._optOut = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                    e
            }()
            , M = function (e, t, n) {
                if (void 0 === e && (e = ""),
                    void 0 === t && (t = N().serverZone),
                    void 0 === n && (n = N().useBatch),
                    e)
                    return {
                        serverUrl: e,
                        serverZone: void 0
                    };
                var r, i = ["US", "EU"].includes(t) ? t : N().serverZone;
                return {
                    serverZone: i,
                    serverUrl: (r = n,
                        "EU" === i ? r ? "https://api.eu.amplitude.com/batch" : "https://api.eu.amplitude.com/2/httpapi" : r ? "https://api2.amplitude.com/batch" : A)
                }
            };
        function U(e) {
            var t = "";
            try {
                "body" in e && (t = JSON.stringify(e.body, null, 2))
            } catch (e) { }
            return t
        }
        var z = function () {
            function e() {
                this.name = "amplitude",
                    this.type = "destination",
                    this.retryTimeout = 1e3,
                    this.throttleTimeout = 3e4,
                    this.storageKey = "",
                    this.scheduled = null,
                    this.queue = []
            }
            return e.prototype.setup = function (e) {
                var t;
                return w(this, void 0, void 0, function () {
                    var n, r = this;
                    return k(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return this.config = e,
                                    this.storageKey = "".concat(D, "_").concat(this.config.apiKey.substring(0, 10)),
                                    [4, null === (t = this.config.storageProvider) || void 0 === t ? void 0 : t.get(this.storageKey)];
                            case 1:
                                return n = i.sent(),
                                    this.saveEvents(),
                                    n && n.length > 0 && Promise.all(n.map(function (e) {
                                        return r.execute(e)
                                    })).catch(),
                                    [2, Promise.resolve(void 0)]
                        }
                    })
                })
            }
                ,
                e.prototype.execute = function (e) {
                    var t = this;
                    return new Promise(function (n) {
                        t.addToQueue({
                            event: e,
                            attempts: 0,
                            callback: function (e) {
                                return n(e)
                            },
                            timeout: 0
                        })
                    }
                    )
                }
                ,
                e.prototype.addToQueue = function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    t.filter(function (t) {
                        return t.attempts < e.config.flushMaxRetries ? (t.attempts += 1,
                            !0) : (e.fulfillRequest([t], 500, "Event rejected due to exceeded retry count"),
                                !1)
                    }).forEach(function (t) {
                        if (e.queue = e.queue.concat(t),
                            0 === t.timeout) {
                            e.schedule(e.config.flushIntervalMillis);
                            return
                        }
                        setTimeout(function () {
                            t.timeout = 0,
                                e.schedule(0)
                        }, t.timeout)
                    }),
                        this.saveEvents()
                }
                ,
                e.prototype.schedule = function (e) {
                    var t = this;
                    this.scheduled || (this.scheduled = setTimeout(function () {
                        t.flush(!0).then(function () {
                            t.queue.length > 0 && t.schedule(e)
                        })
                    }, e))
                }
                ,
                e.prototype.flush = function (e) {
                    return void 0 === e && (e = !1),
                        w(this, void 0, void 0, function () {
                            var t, n, r = this;
                            return k(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return t = [],
                                            n = [],
                                            this.queue.forEach(function (e) {
                                                return 0 === e.timeout ? t.push(e) : n.push(e)
                                            }),
                                            this.queue = n,
                                            this.scheduled && (clearTimeout(this.scheduled),
                                                this.scheduled = null),
                                            [4, Promise.all(C(t, this.config.flushQueueSize).map(function (t) {
                                                return r.send(t, e)
                                            }))];
                                    case 1:
                                        return i.sent(),
                                            [2]
                                }
                            })
                        })
                }
                ,
                e.prototype.send = function (e, t) {
                    return void 0 === t && (t = !0),
                        w(this, void 0, void 0, function () {
                            var n, r, i, o;
                            return k(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.config.apiKey)
                                            return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                        n = {
                                            api_key: this.config.apiKey,
                                            events: e.map(function (e) {
                                                var t = e.event;
                                                return t.extra,
                                                    I(t, ["extra"])
                                            }),
                                            options: {
                                                min_id_length: this.config.minIdLength
                                            },
                                            client_upload_time: new Date().toISOString()
                                        },
                                            s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]),
                                            r = M(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl,
                                            [4, this.config.transportProvider.send(r, n)];
                                    case 2:
                                        if (null === (i = s.sent()))
                                            return this.fulfillRequest(e, 0, "Unexpected error occurred"),
                                                [2];
                                        if (!t)
                                            return "body" in i ? this.fulfillRequest(e, i.statusCode, "".concat(i.status, ": ").concat(U(i))) : this.fulfillRequest(e, i.statusCode, i.status),
                                                [2];
                                        return this.handleResponse(i, e),
                                            [3, 4];
                                    case 3:
                                        var a;
                                        return o = (a = s.sent()) instanceof Error ? a.message : String(a),
                                            this.config.loggerProvider.error(o),
                                            this.fulfillRequest(e, 0, o),
                                            [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                }
                ,
                e.prototype.handleResponse = function (e, t) {
                    var n = e.status;
                    switch (n) {
                        case c.Success:
                            this.handleSuccessResponse(e, t);
                            break;
                        case c.Invalid:
                            this.handleInvalidResponse(e, t);
                            break;
                        case c.PayloadTooLarge:
                            this.handlePayloadTooLargeResponse(e, t);
                            break;
                        case c.RateLimit:
                            this.handleRateLimitResponse(e, t);
                            break;
                        default:
                            this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(n, "' provided for ").concat(t.length, ' events"}')),
                                this.handleOtherResponse(t)
                    }
                }
                ,
                e.prototype.handleSuccessResponse = function (e, t) {
                    this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
                }
                ,
                e.prototype.handleInvalidResponse = function (e, t) {
                    var n = this;
                    if (e.body.missingField || e.body.error.startsWith("Invalid API key")) {
                        this.fulfillRequest(t, e.statusCode, e.body.error);
                        return
                    }
                    var r = x(x(x(x([], _(Object.values(e.body.eventsWithInvalidFields)), !1), _(Object.values(e.body.eventsWithMissingFields)), !1), _(Object.values(e.body.eventsWithInvalidIdLengths)), !1), _(e.body.silencedEvents), !1).flat()
                        , i = new Set(r)
                        , o = t.filter(function (t, r) {
                            if (i.has(r)) {
                                n.fulfillRequest([t], e.statusCode, e.body.error);
                                return
                            }
                            return !0
                        });
                    o.length > 0 && this.config.loggerProvider.warn(U(e)),
                        this.addToQueue.apply(this, x([], _(o), !1))
                }
                ,
                e.prototype.handlePayloadTooLargeResponse = function (e, t) {
                    if (1 === t.length) {
                        this.fulfillRequest(t, e.statusCode, e.body.error);
                        return
                    }
                    this.config.loggerProvider.warn(U(e)),
                        this.config.flushQueueSize /= 2,
                        this.addToQueue.apply(this, x([], _(t), !1))
                }
                ,
                e.prototype.handleRateLimitResponse = function (e, t) {
                    var n = this
                        , r = Object.keys(e.body.exceededDailyQuotaUsers)
                        , i = Object.keys(e.body.exceededDailyQuotaDevices)
                        , o = e.body.throttledEvents
                        , s = new Set(r)
                        , a = new Set(i)
                        , u = new Set(o)
                        , l = t.filter(function (t, r) {
                            if (t.event.user_id && s.has(t.event.user_id) || t.event.device_id && a.has(t.event.device_id)) {
                                n.fulfillRequest([t], e.statusCode, e.body.error);
                                return
                            }
                            return u.has(r) && (t.timeout = n.throttleTimeout),
                                !0
                        });
                    l.length > 0 && this.config.loggerProvider.warn(U(e)),
                        this.addToQueue.apply(this, x([], _(l), !1))
                }
                ,
                e.prototype.handleOtherResponse = function (e) {
                    var t = this;
                    this.addToQueue.apply(this, x([], _(e.map(function (e) {
                        return e.timeout = e.attempts * t.retryTimeout,
                            e
                    })), !1))
                }
                ,
                e.prototype.fulfillRequest = function (e, t, n) {
                    this.saveEvents(),
                        e.forEach(function (e) {
                            return e.callback(B(e.event, t, n))
                        })
                }
                ,
                e.prototype.saveEvents = function () {
                    if (this.config.storageProvider) {
                        var e = Array.from(this.queue.map(function (e) {
                            return e.event
                        }));
                        this.config.storageProvider.set(this.storageKey, e)
                    }
                }
                ,
                e
        }()
            , W = function (e) {
                return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, W)
            };
        (o = d || (d = {})).SET = "$set",
            o.SET_ONCE = "$setOnce",
            o.ADD = "$add",
            o.APPEND = "$append",
            o.PREPEND = "$prepend",
            o.REMOVE = "$remove",
            o.PREINSERT = "$preInsert",
            o.POSTINSERT = "$postInsert",
            o.UNSET = "$unset",
            o.CLEAR_ALL = "$clearAll",
            (s = p || (p = {})).REVENUE_PRODUCT_ID = "$productId",
            s.REVENUE_QUANTITY = "$quantity",
            s.REVENUE_PRICE = "$price",
            s.REVENUE_TYPE = "$revenueType",
            s.REVENUE = "$revenue",
            (a = f || (f = {})).IDENTIFY = "$identify",
            a.GROUP_IDENTIFY = "$groupidentify",
            a.REVENUE = "revenue_amount";
        var q = function (e) {
            if (Object.keys(e).length > 1e3)
                return !1;
            for (var t in e) {
                var n = e[t];
                if (!V(t, n))
                    return !1
            }
            return !0
        }
            , V = function (e, t) {
                var n, r;
                if ("string" != typeof e)
                    return !1;
                if (Array.isArray(t)) {
                    var i = !0;
                    try {
                        for (var o = E(t), s = o.next(); !s.done; s = o.next()) {
                            var a = s.value;
                            if (Array.isArray(a))
                                return !1;
                            if ("object" == typeof a)
                                i = i && q(a);
                            else if (!["number", "string"].includes(typeof a))
                                return !1;
                            if (!i)
                                return !1
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                } else if (null == t)
                    return !1;
                else if ("object" == typeof t)
                    return q(t);
                else if (!["number", "string", "boolean"].includes(typeof t))
                    return !1;
                return !0
            }
            , K = function () {
                function e() {
                    this._propertySet = new Set,
                        this._properties = {}
                }
                return e.prototype.getUserProperties = function () {
                    return S({}, this._properties)
                }
                    ,
                    e.prototype.set = function (e, t) {
                        return this._safeSet(d.SET, e, t),
                            this
                    }
                    ,
                    e.prototype.setOnce = function (e, t) {
                        return this._safeSet(d.SET_ONCE, e, t),
                            this
                    }
                    ,
                    e.prototype.append = function (e, t) {
                        return this._safeSet(d.APPEND, e, t),
                            this
                    }
                    ,
                    e.prototype.prepend = function (e, t) {
                        return this._safeSet(d.PREPEND, e, t),
                            this
                    }
                    ,
                    e.prototype.postInsert = function (e, t) {
                        return this._safeSet(d.POSTINSERT, e, t),
                            this
                    }
                    ,
                    e.prototype.preInsert = function (e, t) {
                        return this._safeSet(d.PREINSERT, e, t),
                            this
                    }
                    ,
                    e.prototype.remove = function (e, t) {
                        return this._safeSet(d.REMOVE, e, t),
                            this
                    }
                    ,
                    e.prototype.add = function (e, t) {
                        return this._safeSet(d.ADD, e, t),
                            this
                    }
                    ,
                    e.prototype.unset = function (e) {
                        return this._safeSet(d.UNSET, e, "-"),
                            this
                    }
                    ,
                    e.prototype.clearAll = function () {
                        return this._properties = {},
                            this._properties[d.CLEAR_ALL] = "-",
                            this
                    }
                    ,
                    e.prototype._safeSet = function (e, t, n) {
                        if (this._validate(e, t, n)) {
                            var r = this._properties[e];
                            return void 0 === r && (r = {},
                                this._properties[e] = r),
                                r[t] = n,
                                this._propertySet.add(t),
                                !0
                        }
                        return !1
                    }
                    ,
                    e.prototype._validate = function (e, t, n) {
                        return !(void 0 !== this._properties[d.CLEAR_ALL] || this._propertySet.has(t)) && (e === d.ADD ? "number" == typeof n : e === d.UNSET || e === d.REMOVE || V(t, n))
                    }
                    ,
                    e
            }()
            , H = function () {
                function e() {
                    this.productId = "",
                        this.quantity = 1,
                        this.price = 0
                }
                return e.prototype.setProductId = function (e) {
                    return this.productId = e,
                        this
                }
                    ,
                    e.prototype.setQuantity = function (e) {
                        return e > 0 && (this.quantity = e),
                            this
                    }
                    ,
                    e.prototype.setPrice = function (e) {
                        return this.price = e,
                            this
                    }
                    ,
                    e.prototype.setRevenueType = function (e) {
                        return this.revenueType = e,
                            this
                    }
                    ,
                    e.prototype.setRevenue = function (e) {
                        return this.revenue = e,
                            this
                    }
                    ,
                    e.prototype.setEventProperties = function (e) {
                        return q(e) && (this.properties = e),
                            this
                    }
                    ,
                    e.prototype.getEventProperties = function () {
                        var e = this.properties ? S({}, this.properties) : {};
                        return e[p.REVENUE_PRODUCT_ID] = this.productId,
                            e[p.REVENUE_QUANTITY] = this.quantity,
                            e[p.REVENUE_PRICE] = this.price,
                            e[p.REVENUE_TYPE] = this.revenueType,
                            e[p.REVENUE] = this.revenue,
                            e
                    }
                    ,
                    e
            }()
            , Q = function () {
                function e(e) {
                    this.client = e,
                        this.queue = [],
                        this.applying = !1,
                        this.plugins = []
                }
                return e.prototype.register = function (e, t) {
                    var n, r, i;
                    return w(this, void 0, void 0, function () {
                        return k(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return e.name = null !== (n = e.name) && void 0 !== n ? n : W(),
                                        e.type = null !== (r = e.type) && void 0 !== r ? r : "enrichment",
                                        [4, null === (i = e.setup) || void 0 === i ? void 0 : i.call(e, t, this.client)];
                                case 1:
                                    return o.sent(),
                                        this.plugins.push(e),
                                        [2]
                            }
                        })
                    })
                }
                    ,
                    e.prototype.deregister = function (e) {
                        var t;
                        return w(this, void 0, void 0, function () {
                            var n, r;
                            return k(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.plugins.findIndex(function (t) {
                                            return t.name === e
                                        }),
                                            r = this.plugins[n],
                                            this.plugins.splice(n, 1),
                                            [4, null === (t = r.teardown) || void 0 === t ? void 0 : t.call(r)];
                                    case 1:
                                        return i.sent(),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.reset = function (e) {
                        this.applying = !1,
                            this.plugins.map(function (e) {
                                var t;
                                return null === (t = e.teardown) || void 0 === t ? void 0 : t.call(e)
                            }),
                            this.plugins = [],
                            this.client = e
                    }
                    ,
                    e.prototype.push = function (e) {
                        var t = this;
                        return new Promise(function (n) {
                            t.queue.push([e, n]),
                                t.scheduleApply(0)
                        }
                        )
                    }
                    ,
                    e.prototype.scheduleApply = function (e) {
                        var t = this;
                        this.applying || (this.applying = !0,
                            setTimeout(function () {
                                t.apply(t.queue.shift()).then(function () {
                                    t.applying = !1,
                                        t.queue.length > 0 && t.scheduleApply(0)
                                })
                            }, e))
                    }
                    ,
                    e.prototype.apply = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t, n, r, i, o, s, a, u, l, c, d, p, f, h;
                            return k(this, function (g) {
                                switch (g.label) {
                                    case 0:
                                        if (!e)
                                            return [2];
                                        t = _(e, 1)[0],
                                            n = _(e, 2)[1],
                                            r = this.plugins.filter(function (e) {
                                                return "before" === e.type
                                            }),
                                            g.label = 1;
                                    case 1:
                                        g.trys.push([1, 6, 7, 8]),
                                            o = (i = E(r)).next(),
                                            g.label = 2;
                                    case 2:
                                        if (o.done)
                                            return [3, 5];
                                        if (!(s = o.value).execute)
                                            return [3, 4];
                                        return [4, s.execute(S({}, t))];
                                    case 3:
                                        if (null === (a = g.sent()))
                                            return n({
                                                event: t,
                                                code: 0,
                                                message: ""
                                            }),
                                                [2];
                                        t = a,
                                            g.label = 4;
                                    case 4:
                                        return o = i.next(),
                                            [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return d = {
                                            error: g.sent()
                                        },
                                            [3, 8];
                                    case 7:
                                        try {
                                            o && !o.done && (p = i.return) && p.call(i)
                                        } finally {
                                            if (d)
                                                throw d.error
                                        }
                                        return [7];
                                    case 8:
                                        u = this.plugins.filter(function (e) {
                                            return "enrichment" === e.type || void 0 === e.type
                                        }),
                                            g.label = 9;
                                    case 9:
                                        g.trys.push([9, 14, 15, 16]),
                                            c = (l = E(u)).next(),
                                            g.label = 10;
                                    case 10:
                                        if (c.done)
                                            return [3, 13];
                                        if (!(s = c.value).execute)
                                            return [3, 12];
                                        return [4, s.execute(S({}, t))];
                                    case 11:
                                        if (null === (a = g.sent()))
                                            return n({
                                                event: t,
                                                code: 0,
                                                message: ""
                                            }),
                                                [2];
                                        t = a,
                                            g.label = 12;
                                    case 12:
                                        return c = l.next(),
                                            [3, 10];
                                    case 13:
                                        return [3, 16];
                                    case 14:
                                        return f = {
                                            error: g.sent()
                                        },
                                            [3, 16];
                                    case 15:
                                        try {
                                            c && !c.done && (h = l.return) && h.call(l)
                                        } finally {
                                            if (f)
                                                throw f.error
                                        }
                                        return [7];
                                    case 16:
                                        return Promise.all(this.plugins.filter(function (e) {
                                            return "destination" === e.type
                                        }).map(function (e) {
                                            var n = S({}, t);
                                            return e.execute(n).catch(function (e) {
                                                return B(n, 0, String(e))
                                            })
                                        })).then(function (e) {
                                            var r = _(e, 1)[0] || B(t, 100, "Event not tracked, no destination plugins on the instance");
                                            n(r)
                                        }),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.flush = function () {
                        return w(this, void 0, void 0, function () {
                            var e, t = this;
                            return k(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.queue,
                                            this.queue = [],
                                            [4, Promise.all(e.map(function (e) {
                                                return t.apply(e)
                                            }))];
                                    case 1:
                                        return n.sent(),
                                            [4, Promise.all(this.plugins.filter(function (e) {
                                                return "destination" === e.type
                                            }).map(function (e) {
                                                return e.flush && e.flush()
                                            }))];
                                    case 2:
                                        return n.sent(),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e
            }()
            , Y = function (e, t) {
                return S(S({}, t), {
                    event_type: f.IDENTIFY,
                    user_properties: e.getUserProperties()
                })
            }
            , J = function (e, t, n, r) {
                var i;
                return S(S({}, r), {
                    event_type: f.GROUP_IDENTIFY,
                    group_properties: n.getUserProperties(),
                    groups: ((i = {})[e] = t,
                        i)
                })
            }
            , G = function (e, t, n) {
                var r, i = new K;
                return i.set(e, t),
                    S(S({}, n), {
                        event_type: f.IDENTIFY,
                        user_properties: i.getUserProperties(),
                        groups: ((r = {})[e] = t,
                            r)
                    })
            }
            , Z = function () {
                function e(e) {
                    void 0 === e && (e = "$default"),
                        this.initializing = !1,
                        this.q = [],
                        this.dispatchQ = [],
                        this.logEvent = this.track.bind(this),
                        this.timeline = new Q(this),
                        this.name = e
                }
                return e.prototype._init = function (e) {
                    return w(this, void 0, void 0, function () {
                        return k(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.config = e,
                                        this.timeline.reset(this),
                                        [4, this.runQueuedFunctions("q")];
                                case 1:
                                    return t.sent(),
                                        [2]
                            }
                        })
                    })
                }
                    ,
                    e.prototype.runQueuedFunctions = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t, n, r, i, o;
                            return k(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        t = this[e],
                                            this[e] = [],
                                            s.label = 1;
                                    case 1:
                                        s.trys.push([1, 6, 7, 8]),
                                            r = (n = E(t)).next(),
                                            s.label = 2;
                                    case 2:
                                        if (r.done)
                                            return [3, 5];
                                        return [4, (0,
                                            r.value)()];
                                    case 3:
                                        s.sent(),
                                            s.label = 4;
                                    case 4:
                                        return r = n.next(),
                                            [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return i = {
                                            error: s.sent()
                                        },
                                            [3, 8];
                                    case 7:
                                        try {
                                            r && !r.done && (o = n.return) && o.call(n)
                                        } finally {
                                            if (i)
                                                throw i.error
                                        }
                                        return [7];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.track = function (e, t, n) {
                        var r = S(S(S({}, "string" == typeof e ? {
                            event_type: e
                        } : e), n), t && {
                            event_properties: t
                        });
                        return F(this.dispatch(r))
                    }
                    ,
                    e.prototype.identify = function (e, t) {
                        var n = Y(e, t);
                        return F(this.dispatch(n))
                    }
                    ,
                    e.prototype.groupIdentify = function (e, t, n, r) {
                        var i = J(e, t, n, r);
                        return F(this.dispatch(i))
                    }
                    ,
                    e.prototype.setGroup = function (e, t, n) {
                        var r = G(e, t, n);
                        return F(this.dispatch(r))
                    }
                    ,
                    e.prototype.revenue = function (e, t) {
                        var n = S(S({}, t), {
                            event_type: f.REVENUE,
                            event_properties: e.getEventProperties()
                        });
                        return F(this.dispatch(n))
                    }
                    ,
                    e.prototype.add = function (e) {
                        return this.config ? F(this.timeline.register(e, this.config)) : (this.q.push(this.add.bind(this, e)),
                            F())
                    }
                    ,
                    e.prototype.remove = function (e) {
                        return this.config ? F(this.timeline.deregister(e)) : (this.q.push(this.remove.bind(this, e)),
                            F())
                    }
                    ,
                    e.prototype.dispatchWithCallback = function (e, t) {
                        if (!this.config)
                            return t(B(e, 0, "Client not initialized"));
                        this.process(e).then(t)
                    }
                    ,
                    e.prototype.dispatch = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t = this;
                            return k(this, function (n) {
                                return this.config ? [2, this.process(e)] : [2, new Promise(function (n) {
                                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                                }
                                )]
                            })
                        })
                    }
                    ,
                    e.prototype.process = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t, n;
                            return k(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        if (r.trys.push([0, 2, , 3]),
                                            this.config.optOut)
                                            return [2, B(e, 0, "Event skipped due to optOut config")];
                                        return [4, this.timeline.push(e)];
                                    case 1:
                                        return 200 === (t = r.sent()).code ? this.config.loggerProvider.log(t.message) : 100 === t.code ? this.config.loggerProvider.warn(t.message) : this.config.loggerProvider.error(t.message),
                                            [2, t];
                                    case 2:
                                        return n = String(r.sent()),
                                            this.config.loggerProvider.error(n),
                                            [2, t = B(e, 0, n)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.setOptOut = function (e) {
                        if (!this.config) {
                            this.q.push(this.setOptOut.bind(this, !!e));
                            return
                        }
                        this.config.optOut = !!e
                    }
                    ,
                    e.prototype.flush = function () {
                        return F(this.timeline.flush())
                    }
                    ,
                    e
            }()
            , X = function () {
                function e() { }
                return e.prototype.getApplicationContext = function () {
                    return {
                        versionName: this.versionName,
                        language: ee(),
                        platform: "Web",
                        os: void 0,
                        deviceModel: void 0
                    }
                }
                    ,
                    e
            }()
            , ee = function () {
                return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
            }
            , et = function () {
                function e() {
                    this.queue = []
                }
                return e.prototype.logEvent = function (e) {
                    this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                }
                    ,
                    e.prototype.setEventReceiver = function (e) {
                        this.receiver = e,
                            this.queue.length > 0 && (this.queue.forEach(function (t) {
                                e(t)
                            }),
                                this.queue = [])
                    }
                    ,
                    e
            }()
            , en = function () {
                return (en = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ).apply(this, arguments)
            }
            , er = function (e, t) {
                var n = typeof e;
                if (n !== typeof t)
                    return !1;
                for (var r = 0, i = ["string", "number", "boolean", "undefined"]; r < i.length; r++)
                    if (i[r] === n)
                        return e === t;
                if (null == e && null == t)
                    return !0;
                if (null == e || null == t || e.length !== t.length)
                    return !1;
                var o = Array.isArray(e)
                    , s = Array.isArray(t);
                if (o !== s)
                    return !1;
                if (o && s) {
                    for (var a = 0; a < e.length; a++)
                        if (!er(e[a], t[a]))
                            return !1
                } else {
                    if (!er(Object.keys(e).sort(), Object.keys(t).sort()))
                        return !1;
                    var u = !0;
                    return Object.keys(e).forEach(function (n) {
                        er(e[n], t[n]) || (u = !1)
                    }),
                        u
                }
                return !0
            };
        Object.entries || (Object.entries = function (e) {
            for (var t = Object.keys(e), n = t.length, r = Array(n); n--;)
                r[n] = [t[n], e[t[n]]];
            return r
        }
        );
        var ei = function () {
            function e() {
                this.identity = {
                    userProperties: {}
                },
                    this.listeners = new Set
            }
            return e.prototype.editIdentity = function () {
                var e = this
                    , t = en({}, this.identity.userProperties)
                    , n = en(en({}, this.identity), {
                        userProperties: t
                    });
                return {
                    setUserId: function (e) {
                        return n.userId = e,
                            this
                    },
                    setDeviceId: function (e) {
                        return n.deviceId = e,
                            this
                    },
                    setUserProperties: function (e) {
                        return n.userProperties = e,
                            this
                    },
                    setOptOut: function (e) {
                        return n.optOut = e,
                            this
                    },
                    updateUserProperties: function (e) {
                        for (var t = n.userProperties || {}, r = 0, i = Object.entries(e); r < i.length; r++) {
                            var o = i[r]
                                , s = o[0]
                                , a = o[1];
                            switch (s) {
                                case "$set":
                                    for (var u = 0, l = Object.entries(a); u < l.length; u++) {
                                        var c = l[u]
                                            , d = c[0]
                                            , p = c[1];
                                        t[d] = p
                                    }
                                    break;
                                case "$unset":
                                    for (var f = 0, h = Object.keys(a); f < h.length; f++) {
                                        var d = h[f];
                                        delete t[d]
                                    }
                                    break;
                                case "$clearAll":
                                    t = {}
                            }
                        }
                        return n.userProperties = t,
                            this
                    },
                    commit: function () {
                        return e.setIdentity(n),
                            this
                    }
                }
            }
                ,
                e.prototype.getIdentity = function () {
                    return en({}, this.identity)
                }
                ,
                e.prototype.setIdentity = function (e) {
                    var t = en({}, this.identity);
                    this.identity = en({}, e),
                        er(t, this.identity) || this.listeners.forEach(function (t) {
                            t(e)
                        })
                }
                ,
                e.prototype.addIdentityListener = function (e) {
                    this.listeners.add(e)
                }
                ,
                e.prototype.removeIdentityListener = function (e) {
                    this.listeners.delete(e)
                }
                ,
                e
        }()
            , eo = "undefined" != typeof globalThis ? globalThis : void 0 !== n.g ? n.g : self
            , es = function () {
                function e() {
                    this.identityStore = new ei,
                        this.eventBridge = new et,
                        this.applicationContextProvider = new X
                }
                return e.getInstance = function (t) {
                    return eo.analyticsConnectorInstances || (eo.analyticsConnectorInstances = {}),
                        eo.analyticsConnectorInstances[t] || (eo.analyticsConnectorInstances[t] = new e),
                        eo.analyticsConnectorInstances[t]
                }
                    ,
                    e
            }()
            , ea = function (e) {
                return void 0 === e && (e = "$default_instance"),
                    es.getInstance(e)
            }
            , eu = function (e, t) {
                ea(t).identityStore.editIdentity().setUserId(e).commit()
            }
            , el = function (e, t) {
                ea(t).identityStore.editIdentity().setDeviceId(e).commit()
            }
            , ec = function () {
                function e() {
                    this.name = "identity",
                        this.type = "before",
                        this.identityStore = ea().identityStore
                }
                return e.prototype.execute = function (e) {
                    return w(this, void 0, void 0, function () {
                        var t;
                        return k(this, function (n) {
                            return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(),
                                [2, e]
                        })
                    })
                }
                    ,
                    e.prototype.setup = function (e) {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (t) {
                                return e.instanceName && (this.identityStore = ea(e.instanceName).identityStore),
                                    [2]
                            })
                        })
                    }
                    ,
                    e
            }()
            , ed = function (e, t) {
                return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1
            }
            , ep = function (e) {
                return ed(e, "attribution")
            }
            , ef = function (e) {
                var t, n = function () {
                    return !1
                }, r = void 0;
                return ed(e.defaultTracking, "pageViews") && (n = void 0,
                    t = void 0,
                    e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (n = e.defaultTracking.pageViews.trackOn),
                        "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges),
                        "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))),
                {
                    trackOn: n,
                    trackHistoryChanges: r,
                    eventType: t
                }
            }
            , eh = function (e, t) {
                return void 0 === t && (t = Date.now()),
                    Date.now() - t > e
            }
            , eg = function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                        , i = r.name
                        , o = r.args
                        , s = r.resolve
                        , a = e && e[i];
                    if ("function" == typeof a) {
                        var u = a.apply(e, o);
                        "function" == typeof s && s(null == u ? void 0 : u.promise)
                    }
                }
                return e
            }
            , ev = function (e) {
                return e && void 0 !== e._q
            }
            , ey = function () {
                if ("undefined" == typeof navigator)
                    return "";
                var e, t, n, r, i = navigator.userLanguage;
                return null !== (r = null !== (n = null !== (t = null === (e = navigator.languages) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : navigator.language) && void 0 !== n ? n : i) && void 0 !== r ? r : ""
            }
            , em = function () {
                function e() {
                    this.name = "@amplitude/plugin-context-browser",
                        this.type = "before",
                        this.library = "amplitude-ts/".concat("2.3.5"),
                        "undefined" != typeof navigator && (this.userAgent = navigator.userAgent)
                }
                return e.prototype.setup = function (e) {
                    return this.config = e,
                        Promise.resolve(void 0)
                }
                    ,
                    e.prototype.execute = function (e) {
                        var t, n;
                        return w(this, void 0, void 0, function () {
                            var r, i, o;
                            return k(this, function (s) {
                                return r = new Date().getTime(),
                                    i = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1,
                                    o = null !== (n = e.event_id) && void 0 !== n ? n : i + 1,
                                    this.config.lastEventId = o,
                                    e.time || (this.config.lastEventTime = r),
                                    [2, S(S(S(S(S(S(S(S({
                                        user_id: this.config.userId,
                                        device_id: this.config.deviceId,
                                        session_id: this.config.sessionId,
                                        time: r
                                    }, this.config.appVersion && {
                                        app_version: this.config.appVersion
                                    }), this.config.trackingOptions.platform && {
                                        platform: "Web"
                                    }), this.config.trackingOptions.language && {
                                        language: ey()
                                    }), this.config.trackingOptions.ipAddress && {
                                        ip: "$remote"
                                    }), {
                                        insert_id: W(),
                                        partner_id: this.config.partnerId,
                                        plan: this.config.plan
                                    }), this.config.ingestionMetadata && {
                                        ingestion_metadata: {
                                            source_name: this.config.ingestionMetadata.sourceName,
                                            source_version: this.config.ingestionMetadata.sourceVersion
                                        }
                                    }), e), {
                                        event_id: o,
                                        library: this.library,
                                        user_agent: this.userAgent
                                    })]
                            })
                        })
                    }
                    ,
                    e
            }()
            , eb = function () {
                function e() {
                    this.memoryStorage = new Map
                }
                return e.prototype.isEnabled = function () {
                    return w(this, void 0, void 0, function () {
                        return k(this, function (e) {
                            return [2, !0]
                        })
                    })
                }
                    ,
                    e.prototype.get = function (e) {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (t) {
                                return [2, this.memoryStorage.get(e)]
                            })
                        })
                    }
                    ,
                    e.prototype.getRaw = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t;
                            return k(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.set = function (e, t) {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (n) {
                                return this.memoryStorage.set(e, t),
                                    [2]
                            })
                        })
                    }
                    ,
                    e.prototype.remove = function (e) {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (t) {
                                return this.memoryStorage.delete(e),
                                    [2]
                            })
                        })
                    }
                    ,
                    e.prototype.reset = function () {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (e) {
                                return this.memoryStorage.clear(),
                                    [2]
                            })
                        })
                    }
                    ,
                    e
            }()
            , eS = function (e, t, n) {
                return void 0 === t && (t = ""),
                    void 0 === n && (n = 10),
                    ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
            }
            , eI = function () {
                return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== n.g ? n.g : void 0
            }
            , ew = function () {
                var e, t = eI();
                return (null === (e = null == t ? void 0 : t.location) || void 0 === e ? void 0 : e.search) ? t.location.search.substring(1).split("&").filter(Boolean).reduce(function (e, t) {
                    var n = t.split("=", 2)
                        , r = ek(n[0])
                        , i = ek(n[1]);
                    return i && (e[r] = i),
                        e
                }, {}) : {}
            }
            , ek = function (e) {
                void 0 === e && (e = "");
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return ""
                }
            }
            , eE = function () {
                function e(e) {
                    this.options = S({}, e)
                }
                return e.prototype.isEnabled = function () {
                    return w(this, void 0, void 0, function () {
                        var t, n;
                        return k(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    if (!eI())
                                        return [2, !1];
                                    e.testValue = String(Date.now()),
                                        t = new e(this.options),
                                        n = "AMP_TEST",
                                        r.label = 1;
                                case 1:
                                    return r.trys.push([1, 4, 5, 7]),
                                        [4, t.set(n, e.testValue)];
                                case 2:
                                    return r.sent(),
                                        [4, t.get(n)];
                                case 3:
                                    return [2, r.sent() === e.testValue];
                                case 4:
                                    return r.sent(),
                                        [2, !1];
                                case 5:
                                    return [4, t.remove(n)];
                                case 6:
                                    return r.sent(),
                                        [7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }
                    ,
                    e.prototype.get = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t;
                            return k(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent()))
                                            return [2, void 0];
                                        try {
                                            try {
                                                t = decodeURIComponent(atob(t))
                                            } catch (e) { }
                                            return [2, JSON.parse(t)]
                                        } catch (e) {
                                            return [2, void 0]
                                        }
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.getRaw = function (e) {
                        var t, n;
                        return w(this, void 0, void 0, function () {
                            var r, i;
                            return k(this, function (o) {
                                return (i = (null !== (n = null === (t = null == (r = eI()) ? void 0 : r.document) || void 0 === t ? void 0 : t.cookie.split("; ")) && void 0 !== n ? n : []).find(function (t) {
                                    return 0 === t.indexOf(e + "=")
                                })) ? [2, i.substring(e.length + 1)] : [2, void 0]
                            })
                        })
                    }
                    ,
                    e.prototype.set = function (e, t) {
                        var n;
                        return w(this, void 0, void 0, function () {
                            var r, i, o, s, a, u;
                            return k(this, function (l) {
                                try {
                                    r = null !== (n = this.options.expirationDays) && void 0 !== n ? n : 0,
                                        i = null !== t ? r : -1,
                                        o = void 0,
                                        i && ((s = new Date).setTime(s.getTime() + 864e5 * i),
                                            o = s),
                                        a = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))),
                                        o && (a += "; expires=".concat(o.toUTCString())),
                                        a += "; path=/",
                                        this.options.domain && (a += "; domain=".concat(this.options.domain)),
                                        this.options.secure && (a += "; Secure"),
                                        this.options.sameSite && (a += "; SameSite=".concat(this.options.sameSite)),
                                        (u = eI()) && (u.document.cookie = a)
                                } catch (e) { }
                                return [2]
                            })
                        })
                    }
                    ,
                    e.prototype.remove = function (e) {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.set(e, null)];
                                    case 1:
                                        return t.sent(),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.reset = function () {
                        return w(this, void 0, void 0, function () {
                            return k(this, function (e) {
                                return [2]
                            })
                        })
                    }
                    ,
                    e
            }()
            , e_ = function () {
                function e() { }
                return e.prototype.send = function (e, t) {
                    return Promise.resolve(null)
                }
                    ,
                    e.prototype.buildResponse = function (e) {
                        if ("object" != typeof e)
                            return null;
                        var t, n, r, i, o, s, a, u, l, d, p, f, h, g, v, y, m, b, S, I, w, k, E = e.code || 0, _ = this.buildStatus(E);
                        switch (_) {
                            case c.Success:
                                return {
                                    status: _,
                                    statusCode: E,
                                    body: {
                                        eventsIngested: null !== (t = e.events_ingested) && void 0 !== t ? t : 0,
                                        payloadSizeBytes: null !== (n = e.payload_size_bytes) && void 0 !== n ? n : 0,
                                        serverUploadTime: null !== (r = e.server_upload_time) && void 0 !== r ? r : 0
                                    }
                                };
                            case c.Invalid:
                                return {
                                    status: _,
                                    statusCode: E,
                                    body: {
                                        error: null !== (i = e.error) && void 0 !== i ? i : "",
                                        missingField: null !== (o = e.missing_field) && void 0 !== o ? o : "",
                                        eventsWithInvalidFields: null !== (s = e.events_with_invalid_fields) && void 0 !== s ? s : {},
                                        eventsWithMissingFields: null !== (a = e.events_with_missing_fields) && void 0 !== a ? a : {},
                                        eventsWithInvalidIdLengths: null !== (u = e.events_with_invalid_id_lengths) && void 0 !== u ? u : {},
                                        epsThreshold: null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                                        exceededDailyQuotaDevices: null !== (d = e.exceeded_daily_quota_devices) && void 0 !== d ? d : {},
                                        silencedDevices: null !== (p = e.silenced_devices) && void 0 !== p ? p : [],
                                        silencedEvents: null !== (f = e.silenced_events) && void 0 !== f ? f : [],
                                        throttledDevices: null !== (h = e.throttled_devices) && void 0 !== h ? h : {},
                                        throttledEvents: null !== (g = e.throttled_events) && void 0 !== g ? g : []
                                    }
                                };
                            case c.PayloadTooLarge:
                                return {
                                    status: _,
                                    statusCode: E,
                                    body: {
                                        error: null !== (v = e.error) && void 0 !== v ? v : ""
                                    }
                                };
                            case c.RateLimit:
                                return {
                                    status: _,
                                    statusCode: E,
                                    body: {
                                        error: null !== (y = e.error) && void 0 !== y ? y : "",
                                        epsThreshold: null !== (m = e.eps_threshold) && void 0 !== m ? m : 0,
                                        throttledDevices: null !== (b = e.throttled_devices) && void 0 !== b ? b : {},
                                        throttledUsers: null !== (S = e.throttled_users) && void 0 !== S ? S : {},
                                        exceededDailyQuotaDevices: null !== (I = e.exceeded_daily_quota_devices) && void 0 !== I ? I : {},
                                        exceededDailyQuotaUsers: null !== (w = e.exceeded_daily_quota_users) && void 0 !== w ? w : {},
                                        throttledEvents: null !== (k = e.throttled_events) && void 0 !== k ? k : []
                                    }
                                };
                            case c.Timeout:
                            default:
                                return {
                                    status: _,
                                    statusCode: E
                                }
                        }
                    }
                    ,
                    e.prototype.buildStatus = function (e) {
                        return e >= 200 && e < 300 ? c.Success : 429 === e ? c.RateLimit : 413 === e ? c.PayloadTooLarge : 408 === e ? c.Timeout : e >= 400 && e < 500 ? c.Invalid : e >= 500 ? c.Failed : c.Unknown
                    }
                    ,
                    e
            }()
            , ex = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return b(t, e),
                    t.prototype.send = function (e, t) {
                        return w(this, void 0, void 0, function () {
                            var n, r;
                            return k(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        if ("undefined" == typeof fetch)
                                            throw Error("FetchTransport is not supported");
                                        return n = {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "*/*"
                                            },
                                            body: JSON.stringify(t),
                                            method: "POST"
                                        },
                                            [4, fetch(e, n)];
                                    case 1:
                                        return [4, i.sent().json()];
                                    case 2:
                                        return r = i.sent(),
                                            [2, this.buildResponse(r)]
                                }
                            })
                        })
                    }
                    ,
                    t
            }(e_)
            , eT = function () {
                function e(e) {
                    this.storage = e
                }
                return e.prototype.isEnabled = function () {
                    return w(this, void 0, void 0, function () {
                        var t, n, r;
                        return k(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.storage)
                                        return [2, !1];
                                    t = String(Date.now()),
                                        n = new e(this.storage),
                                        r = "AMP_TEST",
                                        i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 7]),
                                        [4, n.set(r, t)];
                                case 2:
                                    return i.sent(),
                                        [4, n.get(r)];
                                case 3:
                                    return [2, i.sent() === t];
                                case 4:
                                    return i.sent(),
                                        [2, !1];
                                case 5:
                                    return [4, n.remove(r)];
                                case 6:
                                    return i.sent(),
                                        [7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }
                    ,
                    e.prototype.get = function (e) {
                        return w(this, void 0, void 0, function () {
                            var t;
                            return k(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]),
                                            [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent()))
                                            return [2, void 0];
                                        return [2, JSON.parse(t)];
                                    case 2:
                                        return n.sent(),
                                            console.error("[Amplitude] Error: Could not get value from storage"),
                                            [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.getRaw = function (e) {
                        var t;
                        return w(this, void 0, void 0, function () {
                            return k(this, function (n) {
                                return [2, (null === (t = this.storage) || void 0 === t ? void 0 : t.getItem(e)) || void 0]
                            })
                        })
                    }
                    ,
                    e.prototype.set = function (e, t) {
                        var n;
                        return w(this, void 0, void 0, function () {
                            return k(this, function (r) {
                                try {
                                    null === (n = this.storage) || void 0 === n || n.setItem(e, JSON.stringify(t))
                                } catch (e) { }
                                return [2]
                            })
                        })
                    }
                    ,
                    e.prototype.remove = function (e) {
                        var t;
                        return w(this, void 0, void 0, function () {
                            return k(this, function (n) {
                                try {
                                    null === (t = this.storage) || void 0 === t || t.removeItem(e)
                                } catch (e) { }
                                return [2]
                            })
                        })
                    }
                    ,
                    e.prototype.reset = function () {
                        var e;
                        return w(this, void 0, void 0, function () {
                            return k(this, function (t) {
                                try {
                                    null === (e = this.storage) || void 0 === e || e.clear()
                                } catch (e) { }
                                return [2]
                            })
                        })
                    }
                    ,
                    e
            }()
            , eP = function (e) {
                function t(t) {
                    var n, r = this;
                    return (r = e.call(this, null === (n = eI()) || void 0 === n ? void 0 : n.localStorage) || this).loggerProvider = null == t ? void 0 : t.loggerProvider,
                        r
                }
                return b(t, e),
                    t.prototype.set = function (t, n) {
                        var r;
                        return w(this, void 0, void 0, function () {
                            var i;
                            return k(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        if (!(Array.isArray(n) && n.length > 1e3))
                                            return [3, 2];
                                        return i = n.length - 1e3,
                                            [4, e.prototype.set.call(this, t, n.slice(0, 1e3))];
                                    case 1:
                                        return o.sent(),
                                            null === (r = this.loggerProvider) || void 0 === r || r.error("Failed to save ".concat(i, " events because the queue length exceeded ").concat(1e3, ".")),
                                            [3, 4];
                                    case 2:
                                        return [4, e.prototype.set.call(this, t, n)];
                                    case 3:
                                        o.sent(),
                                            o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    t
            }(eT)
            , eO = function (e) {
                function t() {
                    var t;
                    return e.call(this, null === (t = eI()) || void 0 === t ? void 0 : t.sessionStorage) || this
                }
                return b(t, e),
                    t
            }(eT)
            , eR = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        done: 4
                    },
                        t
                }
                return b(t, e),
                    t.prototype.send = function (e, t) {
                        return w(this, void 0, void 0, function () {
                            var n = this;
                            return k(this, function (r) {
                                return [2, new Promise(function (r, i) {
                                    "undefined" == typeof XMLHttpRequest && i(Error("XHRTransport is not supported."));
                                    var o = new XMLHttpRequest;
                                    o.open("POST", e, !0),
                                        o.onreadystatechange = function () {
                                            if (o.readyState === n.state.done)
                                                try {
                                                    var e = o.responseText
                                                        , t = JSON.parse(e)
                                                        , s = n.buildResponse(t);
                                                    r(s)
                                                } catch (e) {
                                                    i(e)
                                                }
                                        }
                                        ,
                                        o.setRequestHeader("Content-Type", "application/json"),
                                        o.setRequestHeader("Accept", "*/*"),
                                        o.send(JSON.stringify(t))
                                }
                                )]
                            })
                        })
                    }
                    ,
                    t
            }(e_)
            , eF = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return b(t, e),
                    t.prototype.send = function (e, t) {
                        return w(this, void 0, void 0, function () {
                            var n = this;
                            return k(this, function (r) {
                                return [2, new Promise(function (r, i) {
                                    var o = eI();
                                    if (!(null == o ? void 0 : o.navigator.sendBeacon))
                                        throw Error("SendBeaconTransport is not supported");
                                    try {
                                        var s = JSON.stringify(t);
                                        if (o.navigator.sendBeacon(e, JSON.stringify(t)))
                                            return r(n.buildResponse({
                                                code: 200,
                                                events_ingested: t.events.length,
                                                payload_size_bytes: s.length,
                                                server_upload_time: Date.now()
                                            }));
                                        return r(n.buildResponse({
                                            code: 500
                                        }))
                                    } catch (e) {
                                        i(e)
                                    }
                                }
                                )]
                            })
                        })
                    }
                    ,
                    t
            }(e_)
            , eD = function (e) {
                var t = parseInt(e, 32);
                if (!isNaN(t))
                    return t
            }
            , eA = function (e) {
                if (atob && escape && e)
                    try {
                        return decodeURIComponent(escape(atob(e)))
                    } catch (e) {
                        return
                    }
            }
            , eC = "[Amplitude]"
            , eB = "".concat(eC, " Form Started")
            , e$ = "".concat(eC, " Form Submitted")
            , ej = "".concat(eC, " File Downloaded")
            , eN = "session_start"
            , eL = "session_end"
            , eM = "".concat(eC, " File Extension")
            , eU = "".concat(eC, " File Name")
            , ez = "".concat(eC, " Link ID")
            , eW = "".concat(eC, " Link Text")
            , eq = "".concat(eC, " Link URL")
            , eV = "".concat(eC, " Form ID")
            , eK = "".concat(eC, " Form Name")
            , eH = "".concat(eC, " Form Destination")
            , eQ = "cookie"
            , eY = function (e) {
                function t(t, n, r, i, o, s, a, u, c, d, p, f, h, g, v, y, m, b, S, I, w, k, E, _, x, T, P, O, R) {
                    void 0 === r && (r = new eb),
                        void 0 === i && (i = {
                            domain: "",
                            expiration: 365,
                            sameSite: "Lax",
                            secure: !1,
                            upgrade: !0
                        }),
                        void 0 === a && (a = 1e3),
                        void 0 === u && (u = 5),
                        void 0 === c && (c = 30),
                        void 0 === d && (d = eQ),
                        void 0 === v && (v = new j),
                        void 0 === y && (y = l.Warn),
                        void 0 === b && (b = !1),
                        void 0 === w && (w = ""),
                        void 0 === k && (k = "US"),
                        void 0 === _ && (_ = 18e5),
                        void 0 === x && (x = new eP({
                            loggerProvider: v
                        })),
                        void 0 === T && (T = {
                            ipAddress: !0,
                            language: !0,
                            platform: !0
                        }),
                        void 0 === P && (P = "fetch"),
                        void 0 === O && (O = !1);
                    var F = e.call(this, {
                        apiKey: t,
                        storageProvider: x,
                        transportProvider: eG(P)
                    }) || this;
                    return F.apiKey = t,
                        F.appVersion = n,
                        F.cookieOptions = i,
                        F.defaultTracking = o,
                        F.flushIntervalMillis = a,
                        F.flushMaxRetries = u,
                        F.flushQueueSize = c,
                        F.identityStorage = d,
                        F.ingestionMetadata = p,
                        F.instanceName = f,
                        F.loggerProvider = v,
                        F.logLevel = y,
                        F.minIdLength = m,
                        F.partnerId = S,
                        F.plan = I,
                        F.serverUrl = w,
                        F.serverZone = k,
                        F.sessionTimeout = _,
                        F.storageProvider = x,
                        F.trackingOptions = T,
                        F.transport = P,
                        F.useBatch = O,
                        F._optOut = !1,
                        F._cookieStorage = r,
                        F.deviceId = s,
                        F.lastEventId = h,
                        F.lastEventTime = g,
                        F.optOut = b,
                        F.sessionId = E,
                        F.userId = R,
                        F.loggerProvider.enable(F.logLevel),
                        F
                }
                return b(t, e),
                    Object.defineProperty(t.prototype, "cookieStorage", {
                        get: function () {
                            return this._cookieStorage
                        },
                        set: function (e) {
                            this._cookieStorage !== e && (this._cookieStorage = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "deviceId", {
                        get: function () {
                            return this._deviceId
                        },
                        set: function (e) {
                            this._deviceId !== e && (this._deviceId = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "userId", {
                        get: function () {
                            return this._userId
                        },
                        set: function (e) {
                            this._userId !== e && (this._userId = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "sessionId", {
                        get: function () {
                            return this._sessionId
                        },
                        set: function (e) {
                            this._sessionId !== e && (this._sessionId = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "optOut", {
                        get: function () {
                            return this._optOut
                        },
                        set: function (e) {
                            this._optOut !== e && (this._optOut = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "lastEventTime", {
                        get: function () {
                            return this._lastEventTime
                        },
                        set: function (e) {
                            this._lastEventTime !== e && (this._lastEventTime = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "lastEventId", {
                        get: function () {
                            return this._lastEventId
                        },
                        set: function (e) {
                            this._lastEventId !== e && (this._lastEventId = e,
                                this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    t.prototype.updateStorage = function () {
                        var e = {
                            deviceId: this._deviceId,
                            userId: this._userId,
                            sessionId: this._sessionId,
                            optOut: this._optOut,
                            lastEventTime: this._lastEventTime,
                            lastEventId: this._lastEventId
                        };
                        this.cookieStorage.set(eS(this.apiKey), e)
                    }
                    ,
                    t
            }(L)
            , eJ = function (e, t) {
                switch (void 0 === e && (e = eQ),
                void 0 === t && (t = {}),
                e) {
                    case "localStorage":
                        return new eP;
                    case "sessionStorage":
                        return new eO;
                    case "none":
                        return new eb;
                    default:
                        return new eE(S(S({}, t), {
                            expirationDays: t.expiration
                        }))
                }
            }
            , eG = function (e) {
                return "xhr" === e ? new eR : "beacon" === e ? new eF : new ex
            }
            , eZ = "dclid"
            , eX = "fbclid"
            , e0 = "gbraid"
            , e1 = "gclid"
            , e2 = "ko_click_id"
            , e4 = "li_fat_id"
            , e3 = "msclkid"
            , e5 = "rtd_cid"
            , e6 = "ttclid"
            , e8 = "twclid"
            , e7 = "wbraid"
            , e9 = {
                utm_campaign: void 0,
                utm_content: void 0,
                utm_id: void 0,
                utm_medium: void 0,
                utm_source: void 0,
                utm_term: void 0,
                referrer: void 0,
                referring_domain: void 0,
                dclid: void 0,
                gbraid: void 0,
                gclid: void 0,
                fbclid: void 0,
                ko_click_id: void 0,
                li_fat_id: void 0,
                msclkid: void 0,
                rtd_cid: void 0,
                ttclid: void 0,
                twclid: void 0,
                wbraid: void 0
            }
            , te = function () {
                function e() { }
                return e.prototype.parse = function () {
                    return w(this, void 0, void 0, function () {
                        return k(this, function (e) {
                            return [2, S(S(S(S({}, e9), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                        })
                    })
                }
                    ,
                    e.prototype.getUtmParam = function () {
                        var e = ew();
                        return {
                            utm_campaign: e.utm_campaign,
                            utm_content: e.utm_content,
                            utm_id: e.utm_id,
                            utm_medium: e.utm_medium,
                            utm_source: e.utm_source,
                            utm_term: e.utm_term
                        }
                    }
                    ,
                    e.prototype.getReferrer = function () {
                        var e, t, n = {
                            referrer: void 0,
                            referring_domain: void 0
                        };
                        try {
                            n.referrer = document.referrer || void 0,
                                n.referring_domain = null !== (t = null === (e = n.referrer) || void 0 === e ? void 0 : e.split("/")[2]) && void 0 !== t ? t : void 0
                        } catch (e) { }
                        return n
                    }
                    ,
                    e.prototype.getClickIds = function () {
                        var e, t = ew();
                        return (e = {})[eZ] = t[eZ],
                            e[eX] = t[eX],
                            e[e0] = t[e0],
                            e[e1] = t[e1],
                            e[e2] = t[e2],
                            e[e4] = t[e4],
                            e[e3] = t[e3],
                            e[e5] = t[e5],
                            e[e6] = t[e6],
                            e[e8] = t[e8],
                            e[e7] = t[e7],
                            e
                    }
                    ,
                    e
            }()
            , tt = function (e) {
                var t = e.split(".");
                return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
            }
            , tn = function (e, t, n, r) {
                void 0 === r && (r = !0),
                    e.referrer;
                var i = e.referring_domain
                    , o = I(e, ["referrer", "referring_domain"])
                    , s = t || {}
                    , a = (s.referrer,
                        s.referring_domain)
                    , u = I(s, ["referrer", "referring_domain"]);
                if (tr(n.excludeReferrers, e.referring_domain) || !r && Object.values(e).every(function (e) {
                    return !e
                }) && t)
                    return !1;
                var l = JSON.stringify(o) !== JSON.stringify(u)
                    , c = tt(i || "") !== tt(a || "");
                return !t || l || c
            }
            , tr = function (e, t) {
                return void 0 === e && (e = []),
                    void 0 === t && (t = ""),
                    e.some(function (e) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    })
            }
            , ti = function (e) {
                var t = e;
                return t ? (t.startsWith(".") && (t = t.substring(1)),
                    [new RegExp("".concat(t.replace(".", "\\."), "$"))]) : []
            }
            , to = function (e) {
                var t = this;
                return void 0 === e && (e = {}),
                {
                    name: "@amplitude/plugin-web-attribution-browser",
                    type: "before",
                    setup: function (t, n) {
                        var r;
                        return w(this, void 0, void 0, function () {
                            var i, o, s, a, u, l, c, d;
                            return k(this, function (p) {
                                var f, h, g;
                                switch (p.label) {
                                    case 0:
                                        return i = S({
                                            initialEmptyValue: "EMPTY",
                                            resetSessionOnNewCampaign: !1,
                                            excludeReferrers: ti(null === (r = t.cookieOptions) || void 0 === r ? void 0 : r.domain)
                                        }, e),
                                            t.loggerProvider.log("Installing @amplitude/plugin-web-attribution-browser."),
                                            o = t.cookieStorage,
                                            f = t.apiKey,
                                            void 0 === h && (h = 10),
                                            s = ["AMP", "MKTG", f.substring(0, h)].filter(Boolean).join("_"),
                                            [4, Promise.all([new te().parse(), o.get(s)])];
                                    case 1:
                                        return u = (a = _.apply(void 0, [p.sent(), 2]))[0],
                                            l = a[1],
                                            c = eh(t.sessionTimeout, t.lastEventTime),
                                            tn(u, l, i, c) && (i.resetSessionOnNewCampaign && (n.setSessionId(Date.now()),
                                                t.loggerProvider.log("Created a new session for new campaign.")),
                                                t.loggerProvider.log("Tracking attribution."),
                                                g = i,
                                                d = Y(Object.entries(S(S({}, e9), u)).reduce(function (e, t) {
                                                    var n, r = _(t, 2), i = r[0], o = r[1];
                                                    return (e.setOnce("initial_".concat(i), null !== (n = null != o ? o : g.initialEmptyValue) && void 0 !== n ? n : "EMPTY"),
                                                        o) ? e.set(i, o) : e.unset(i)
                                                }, new K)),
                                                n.track(d),
                                                o.set(s, u)),
                                            [2]
                                }
                            })
                        })
                    },
                    execute: function (e) {
                        return w(t, void 0, void 0, function () {
                            return k(this, function (t) {
                                return [2, e]
                            })
                        })
                    }
                }
            }
            , ts = function (e) {
                var t = {};
                for (var n in e) {
                    var r = e[n];
                    r && (t[n] = r)
                }
                return t
            }
            , ta = function (e) {
                void 0 === e && (e = {});
                var t, n, r = eI(), i = void 0, o = function () {
                    return w(void 0, void 0, void 0, function () {
                        var t, n, r;
                        return k(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    return n = {
                                        event_type: null !== (r = e.eventType) && void 0 !== r ? r : "[Amplitude] Page Viewed"
                                    },
                                        t = [{}],
                                        [4, tu()];
                                case 1:
                                    return [2, (n.event_properties = S.apply(void 0, [S.apply(void 0, t.concat([i.sent()])), {
                                        "[Amplitude] Page Domain": "undefined" != typeof location && location.hostname || "",
                                        "[Amplitude] Page Location": "undefined" != typeof location && location.href || "",
                                        "[Amplitude] Page Path": "undefined" != typeof location && location.pathname || "",
                                        "[Amplitude] Page Title": "undefined" != typeof document && document.title || "",
                                        "[Amplitude] Page URL": "undefined" != typeof location && location.href.split("?")[0] || ""
                                    }]),
                                        n)]
                            }
                        })
                    })
                }, s = function () {
                    return void 0 === e.trackOn || "function" == typeof e.trackOn && e.trackOn()
                }, a = "undefined" != typeof location ? location.href : null, u = function () {
                    return w(void 0, void 0, void 0, function () {
                        var n, r, u, l;
                        return k(this, function (c) {
                            switch (c.label) {
                                case 0:
                                    if (n = location.href,
                                        r = tc(e.trackHistoryChanges, n, a || "") && s(),
                                        a = n,
                                        !r)
                                        return [3, 4];
                                    if (null == i || i.log("Tracking page view event"),
                                        null != t)
                                        return [3, 1];
                                    return [3, 3];
                                case 1:
                                    return l = (u = t).track,
                                        [4, o()];
                                case 2:
                                    l.apply(u, [c.sent()]),
                                        c.label = 3;
                                case 3:
                                    c.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, l = function () {
                    u()
                };
                return {
                    name: "@amplitude/plugin-page-view-tracking-browser",
                    type: "enrichment",
                    setup: function (e, a) {
                        return w(void 0, void 0, void 0, function () {
                            var c, d;
                            return k(this, function (p) {
                                switch (p.label) {
                                    case 0:
                                        if (t = a,
                                            (i = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"),
                                            r && (r.addEventListener("popstate", l),
                                                n = r.history.pushState,
                                                r.history.pushState = new Proxy(r.history.pushState, {
                                                    apply: function (e, t, n) {
                                                        var r = _(n, 3)
                                                            , i = r[0]
                                                            , o = r[1]
                                                            , s = r[2];
                                                        e.apply(t, [i, o, s]),
                                                            u()
                                                    }
                                                })),
                                            !s())
                                            return [3, 2];
                                        return i.log("Tracking page view event"),
                                            d = (c = t).track,
                                            [4, o()];
                                    case 1:
                                        d.apply(c, [p.sent()]),
                                            p.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    },
                    execute: function (t) {
                        return w(void 0, void 0, void 0, function () {
                            var n;
                            return k(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        if (!("attribution" === e.trackOn && tl(t)))
                                            return [3, 2];
                                        return null == i || i.log("Enriching campaign event to page view event with campaign parameters"),
                                            [4, o()];
                                    case 1:
                                        n = r.sent(),
                                            t.event_type = n.event_type,
                                            t.event_properties = S(S({}, t.event_properties), n.event_properties),
                                            r.label = 2;
                                    case 2:
                                        return [2, t]
                                }
                            })
                        })
                    },
                    teardown: function () {
                        return w(void 0, void 0, void 0, function () {
                            return k(this, function (e) {
                                return r && (r.removeEventListener("popstate", l),
                                    n && (r.history.pushState = n)),
                                    [2]
                            })
                        })
                    }
                }
            }
            , tu = function () {
                return w(void 0, void 0, void 0, function () {
                    var e;
                    return k(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = ts,
                                    [4, new te().parse()];
                            case 1:
                                return [2, e.apply(void 0, [t.sent()])]
                        }
                    })
                })
            }
            , tl = function (e) {
                if ("$identify" === e.event_type && e.user_properties) {
                    var t = e.user_properties
                        , n = t[d.SET] || {}
                        , r = t[d.UNSET] || {}
                        , i = x(x([], _(Object.keys(n)), !1), _(Object.keys(r)), !1);
                    return Object.keys(e9).every(function (e) {
                        return i.includes(e)
                    })
                }
                return !1
            }
            , tc = function (e, t, n) {
                return "pathOnly" === e ? t.split("?")[0] !== n.split("?")[0] : t !== n
            }
            , td = function () {
                var e, t = [], n = function (e, n, r) {
                    e.addEventListener(n, r),
                        t.push({
                            element: e,
                            type: n,
                            handler: r
                        })
                }, r = function () {
                    t.forEach(function (e) {
                        var t = e.element
                            , n = e.type
                            , r = e.handler;
                        null == t || t.removeEventListener(n, r)
                    }),
                        t = []
                };
                return {
                    name: "@amplitude/plugin-form-interaction-tracking-browser",
                    type: "enrichment",
                    setup: function (t, r) {
                        return w(void 0, void 0, void 0, function () {
                            var i;
                            return k(this, function (o) {
                                return r ? "undefined" == typeof document || (i = function (e) {
                                    var t = !1;
                                    n(e, "change", function () {
                                        var n;
                                        t || r.track(eB, ((n = {})[eV] = e.id,
                                            n[eK] = tp(e.name),
                                            n[eH] = e.action,
                                            n)),
                                            t = !0
                                    }),
                                        n(e, "submit", function () {
                                            var n, i;
                                            t || r.track(eB, ((n = {})[eV] = e.id,
                                                n[eK] = tp(e.name),
                                                n[eH] = e.action,
                                                n)),
                                                r.track(e$, ((i = {})[eV] = e.id,
                                                    i[eK] = tp(e.name),
                                                    i[eH] = e.action,
                                                    i)),
                                                t = !1
                                        })
                                }
                                    ,
                                    Array.from(document.getElementsByTagName("form")).forEach(i),
                                    "undefined" != typeof MutationObserver && (e = new MutationObserver(function (e) {
                                        e.forEach(function (e) {
                                            e.addedNodes.forEach(function (e) {
                                                "FORM" === e.nodeName && i(e),
                                                    "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("form")).map(i)
                                            })
                                        })
                                    }
                                    )).observe(document.body, {
                                        subtree: !0,
                                        childList: !0
                                    })) : t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."),
                                    [2]
                            })
                        })
                    },
                    execute: function (e) {
                        return w(void 0, void 0, void 0, function () {
                            return k(this, function (t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function () {
                        return w(void 0, void 0, void 0, function () {
                            return k(this, function (t) {
                                return null == e || e.disconnect(),
                                    r(),
                                    [2]
                            })
                        })
                    }
                }
            }
            , tp = function (e) {
                if ("string" == typeof e)
                    return e
            }
            , tf = function () {
                var e, t = [], n = function (e, n, r) {
                    e.addEventListener(n, r),
                        t.push({
                            element: e,
                            type: n,
                            handler: r
                        })
                }, r = function () {
                    t.forEach(function (e) {
                        var t = e.element
                            , n = e.type
                            , r = e.handler;
                        null == t || t.removeEventListener(n, r)
                    }),
                        t = []
                };
                return {
                    name: "@amplitude/plugin-file-download-tracking-browser",
                    type: "enrichment",
                    setup: function (t, r) {
                        return w(void 0, void 0, void 0, function () {
                            var i, o;
                            return k(this, function (s) {
                                return r ? "undefined" == typeof document || (i = function (e) {
                                    try {
                                        t = new URL(e.href, window.location.href)
                                    } catch (e) {
                                        return
                                    }
                                    var t, i = o.exec(t.href), s = null == i ? void 0 : i[1];
                                    s && n(e, "click", function () {
                                        var n;
                                        s && r.track(ej, ((n = {})[eM] = s,
                                            n[eU] = t.pathname,
                                            n[ez] = e.id,
                                            n[eW] = e.text,
                                            n[eq] = e.href,
                                            n))
                                    })
                                }
                                    ,
                                    o = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/,
                                    Array.from(document.getElementsByTagName("a")).forEach(i),
                                    "undefined" != typeof MutationObserver && (e = new MutationObserver(function (e) {
                                        e.forEach(function (e) {
                                            e.addedNodes.forEach(function (e) {
                                                "A" === e.nodeName && i(e),
                                                    "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("a")).map(i)
                                            })
                                        })
                                    }
                                    )).observe(document.body, {
                                        subtree: !0,
                                        childList: !0
                                    })) : t.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."),
                                    [2]
                            })
                        })
                    },
                    execute: function (e) {
                        return w(void 0, void 0, void 0, function () {
                            return k(this, function (t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function () {
                        return w(void 0, void 0, void 0, function () {
                            return k(this, function (t) {
                                return null == e || e.disconnect(),
                                    r(),
                                    [2]
                            })
                        })
                    }
                }
            }
            , th = !1
            , tg = function (e) {
                th || void 0 !== e.defaultTracking || (e.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."),
                    th = !0)
            }
            , tv = {
                init: R((u = new (function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return b(t, e),
                        t.prototype.init = function (e, t, n) {
                            var r, i;
                            return void 0 === e && (e = ""),
                                arguments.length > 2 ? (r = t,
                                    i = n) : "string" == typeof t ? (r = t,
                                        i = void 0) : (r = null == t ? void 0 : t.userId,
                                            i = t),
                                F(this._init(S(S({}, i), {
                                    userId: r,
                                    apiKey: e
                                })))
                        }
                        ,
                        t.prototype._init = function (t) {
                            var n, r;
                            return w(this, void 0, void 0, function () {
                                var i, o, s, a = this;
                                return k(this, function (u) {
                                    var l, c, d, p;
                                    switch (u.label) {
                                        case 0:
                                            if (this.initializing)
                                                return [2];
                                            return this.initializing = !0,
                                                [4, (l = t.apiKey,
                                                    c = t,
                                                    d = this,
                                                    void 0 === c && (c = {}),
                                                    w(void 0, void 0, void 0, function () {
                                                        var e, t, n, r, i, o, s, a, u, p, f, h, g, v, y, m, b, I, E, x, T, P, O, R, F, D, A, C, B, $, j, N, L, M, U, z, q, V, K;
                                                        return k(this, function (H) {
                                                            var Q, Y, J;
                                                            switch (H.label) {
                                                                case 0:
                                                                    if (e = c.identityStorage || eQ,
                                                                        m = {},
                                                                        !(e !== eQ))
                                                                        return [3, 1];
                                                                    return n = "",
                                                                        [3, 5];
                                                                case 1:
                                                                    if (!(null !== (I = null === (b = c.cookieOptions) || void 0 === b ? void 0 : b.domain) && void 0 !== I))
                                                                        return [3, 2];
                                                                    return r = I,
                                                                        [3, 4];
                                                                case 2:
                                                                    return [4, w(void 0, void 0, void 0, function () {
                                                                        var e, t, n, r, i, o;
                                                                        return k(this, function (s) {
                                                                            switch (s.label) {
                                                                                case 0:
                                                                                    return [4, new eE().isEnabled()];
                                                                                case 1:
                                                                                    if (!s.sent() || !Q && "undefined" == typeof location)
                                                                                        return [2, ""];
                                                                                    for (e = (null != Q ? Q : location.hostname).split("."),
                                                                                        t = [],
                                                                                        n = "AMP_TLDTEST",
                                                                                        r = e.length - 2; r >= 0; --r)
                                                                                        t.push(e.slice(r).join("."));
                                                                                    r = 0,
                                                                                        s.label = 2;
                                                                                case 2:
                                                                                    if (!(r < t.length))
                                                                                        return [3, 7];
                                                                                    return [4, (o = new eE({
                                                                                        domain: "." + (i = t[r])
                                                                                    })).set(n, 1)];
                                                                                case 3:
                                                                                    return s.sent(),
                                                                                        [4, o.get(n)];
                                                                                case 4:
                                                                                    if (!s.sent())
                                                                                        return [3, 6];
                                                                                    return [4, o.remove(n)];
                                                                                case 5:
                                                                                    return s.sent(),
                                                                                        [2, "." + i];
                                                                                case 6:
                                                                                    return r++,
                                                                                        [3, 2];
                                                                                case 7:
                                                                                    return [2, ""]
                                                                            }
                                                                        })
                                                                    })];
                                                                case 3:
                                                                    r = H.sent(),
                                                                        H.label = 4;
                                                                case 4:
                                                                    n = r,
                                                                        H.label = 5;
                                                                case 5:
                                                                    return t = S.apply(void 0, [(m.domain = n,
                                                                        m.expiration = 365,
                                                                        m.sameSite = "Lax",
                                                                        m.secure = !1,
                                                                        m.upgrade = !0,
                                                                        m), c.cookieOptions]),
                                                                        [4, (Y = i = eJ(c.identityStorage, t),
                                                                            void 0 === (J = null === (x = null === (E = c.cookieOptions) || void 0 === E ? void 0 : E.upgrade) || void 0 === x || x) && (J = !0),
                                                                            w(void 0, void 0, void 0, function () {
                                                                                var e, t, n, r, i, o, s, a, u;
                                                                                return k(this, function (c) {
                                                                                    switch (c.label) {
                                                                                        case 0:
                                                                                            return e = "".concat("amp", "_").concat(l.substring(0, 6)),
                                                                                                [4, Y.getRaw(e)];
                                                                                        case 1:
                                                                                            if (!(t = c.sent()))
                                                                                                return [2, {
                                                                                                    optOut: !1
                                                                                                }];
                                                                                            if (!J)
                                                                                                return [3, 3];
                                                                                            return [4, Y.remove(e)];
                                                                                        case 2:
                                                                                            c.sent(),
                                                                                                c.label = 3;
                                                                                        case 3:
                                                                                            return r = (n = _(t.split("."), 6))[0],
                                                                                                i = n[1],
                                                                                                o = n[2],
                                                                                                s = n[3],
                                                                                                a = n[4],
                                                                                                u = n[5],
                                                                                                [2, {
                                                                                                    deviceId: r,
                                                                                                    userId: eA(i),
                                                                                                    sessionId: eD(s),
                                                                                                    lastEventId: eD(u),
                                                                                                    lastEventTime: eD(a),
                                                                                                    optOut: !!o
                                                                                                }]
                                                                                    }
                                                                                })
                                                                            }))];
                                                                case 6:
                                                                    return o = H.sent(),
                                                                        [4, i.get(eS(l))];
                                                                case 7:
                                                                    return s = H.sent(),
                                                                        a = ew(),
                                                                        u = null !== (R = null !== (O = null !== (P = null !== (T = c.deviceId) && void 0 !== T ? T : a.deviceId) && void 0 !== P ? P : null == s ? void 0 : s.deviceId) && void 0 !== O ? O : o.deviceId) && void 0 !== R ? R : W(),
                                                                        p = null !== (F = null == s ? void 0 : s.lastEventId) && void 0 !== F ? F : o.lastEventId,
                                                                        f = null !== (D = null == s ? void 0 : s.lastEventTime) && void 0 !== D ? D : o.lastEventTime,
                                                                        h = null !== (C = null !== (A = c.optOut) && void 0 !== A ? A : null == s ? void 0 : s.optOut) && void 0 !== C ? C : o.optOut,
                                                                        g = null !== (B = null == s ? void 0 : s.sessionId) && void 0 !== B ? B : o.sessionId,
                                                                        v = null !== (j = null !== ($ = c.userId) && void 0 !== $ ? $ : null == s ? void 0 : s.userId) && void 0 !== j ? j : o.userId,
                                                                        d.previousSessionDeviceId = null !== (N = null == s ? void 0 : s.deviceId) && void 0 !== N ? N : o.deviceId,
                                                                        d.previousSessionUserId = null !== (L = null == s ? void 0 : s.userId) && void 0 !== L ? L : o.userId,
                                                                        y = {
                                                                            ipAddress: null === (U = null === (M = c.trackingOptions) || void 0 === M ? void 0 : M.ipAddress) || void 0 === U || U,
                                                                            language: null === (q = null === (z = c.trackingOptions) || void 0 === z ? void 0 : z.language) || void 0 === q || q,
                                                                            platform: null === (K = null === (V = c.trackingOptions) || void 0 === V ? void 0 : V.platform) || void 0 === K || K
                                                                        },
                                                                        [2, new eY(l, c.appVersion, i, t, c.defaultTracking, u, c.flushIntervalMillis, c.flushMaxRetries, c.flushQueueSize, e, c.ingestionMetadata, c.instanceName, p, f, c.loggerProvider, c.logLevel, c.minIdLength, h, c.partnerId, c.plan, c.serverUrl, c.serverZone, g, c.sessionTimeout, c.storageProvider, y, c.transport, c.useBatch, v)]
                                                            }
                                                        })
                                                    }))];
                                        case 1:
                                            return i = u.sent(),
                                                [4, e.prototype._init.call(this, i)];
                                        case 2:
                                            return u.sent(),
                                                this.setSessionId(null !== (r = null !== (n = t.sessionId) && void 0 !== n ? n : this.config.sessionId) && void 0 !== r ? r : Date.now()),
                                                (o = ea(t.instanceName)).identityStore.setIdentity({
                                                    userId: this.config.userId,
                                                    deviceId: this.config.deviceId
                                                }),
                                                [4, this.add(new z).promise];
                                        case 3:
                                            return u.sent(),
                                                [4, this.add(new em).promise];
                                        case 4:
                                            return u.sent(),
                                                [4, this.add(new ec).promise];
                                        case 5:
                                            if (u.sent(),
                                                tg(this.config),
                                                !ed(this.config.defaultTracking, "fileDownloads"))
                                                return [3, 7];
                                            return [4, this.add(tf()).promise];
                                        case 6:
                                            u.sent(),
                                                u.label = 7;
                                        case 7:
                                            if (!ed(this.config.defaultTracking, "formInteractions"))
                                                return [3, 9];
                                            return [4, this.add(td()).promise];
                                        case 8:
                                            u.sent(),
                                                u.label = 9;
                                        case 9:
                                            if (!ep(this.config.defaultTracking))
                                                return [3, 11];
                                            return s = to(ep((p = this.config).defaultTracking) && p.defaultTracking && "object" == typeof p.defaultTracking && p.defaultTracking.attribution && "object" == typeof p.defaultTracking.attribution ? S({}, p.defaultTracking.attribution) : {}),
                                                [4, this.add(s).promise];
                                        case 10:
                                            u.sent(),
                                                u.label = 11;
                                        case 11:
                                            return [4, this.add(ta(ef(this.config))).promise];
                                        case 12:
                                            return u.sent(),
                                                this.initializing = !1,
                                                [4, this.runQueuedFunctions("dispatchQ")];
                                        case 13:
                                            return u.sent(),
                                                o.eventBridge.setEventReceiver(function (e) {
                                                    a.track(e.eventType, e.eventProperties)
                                                }),
                                                [2]
                                    }
                                })
                            })
                        }
                        ,
                        t.prototype.getUserId = function () {
                            var e;
                            return null === (e = this.config) || void 0 === e ? void 0 : e.userId
                        }
                        ,
                        t.prototype.setUserId = function (e) {
                            if (!this.config) {
                                this.q.push(this.setUserId.bind(this, e));
                                return
                            }
                            (e !== this.config.userId || void 0 === e) && (this.config.userId = e,
                                eu(e, this.config.instanceName))
                        }
                        ,
                        t.prototype.getDeviceId = function () {
                            var e;
                            return null === (e = this.config) || void 0 === e ? void 0 : e.deviceId
                        }
                        ,
                        t.prototype.setDeviceId = function (e) {
                            if (!this.config) {
                                this.q.push(this.setDeviceId.bind(this, e));
                                return
                            }
                            this.config.deviceId = e,
                                el(e, this.config.instanceName)
                        }
                        ,
                        t.prototype.reset = function () {
                            this.setDeviceId(W()),
                                this.setUserId(void 0)
                        }
                        ,
                        t.prototype.getSessionId = function () {
                            var e;
                            return null === (e = this.config) || void 0 === e ? void 0 : e.sessionId
                        }
                        ,
                        t.prototype.setSessionId = function (e) {
                            if (!this.config) {
                                this.q.push(this.setSessionId.bind(this, e));
                                return
                            }
                            if (e !== this.config.sessionId) {
                                var t, n = this.getSessionId(), r = this.config.lastEventTime, i = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1;
                                this.config.sessionId = e,
                                    this.config.lastEventTime = void 0,
                                    ed(this.config.defaultTracking, "sessions") && (n && r && this.track(eL, void 0, {
                                        device_id: this.previousSessionDeviceId,
                                        event_id: ++i,
                                        session_id: n,
                                        time: r + 1,
                                        user_id: this.previousSessionUserId
                                    }),
                                        this.config.lastEventTime = this.config.sessionId,
                                        this.track(eN, void 0, {
                                            event_id: ++i,
                                            session_id: this.config.sessionId,
                                            time: this.config.lastEventTime
                                        })),
                                    this.previousSessionDeviceId = this.config.deviceId,
                                    this.previousSessionUserId = this.config.userId
                            }
                        }
                        ,
                        t.prototype.extendSession = function () {
                            if (!this.config) {
                                this.q.push(this.extendSession.bind(this));
                                return
                            }
                            this.config.lastEventTime = Date.now()
                        }
                        ,
                        t.prototype.setTransport = function (e) {
                            if (!this.config) {
                                this.q.push(this.setTransport.bind(this, e));
                                return
                            }
                            this.config.transportProvider = eG(e)
                        }
                        ,
                        t.prototype.identify = function (t, n) {
                            if (ev(t)) {
                                var r = t._q;
                                t._q = [],
                                    t = eg(new K, r)
                            }
                            return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
                                (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id),
                                e.prototype.identify.call(this, t, n)
                        }
                        ,
                        t.prototype.groupIdentify = function (t, n, r, i) {
                            if (ev(r)) {
                                var o = r._q;
                                r._q = [],
                                    r = eg(new K, o)
                            }
                            return e.prototype.groupIdentify.call(this, t, n, r, i)
                        }
                        ,
                        t.prototype.revenue = function (t, n) {
                            if (ev(t)) {
                                var r = t._q;
                                t._q = [],
                                    t = eg(new H, r)
                            }
                            return e.prototype.revenue.call(this, t, n)
                        }
                        ,
                        t.prototype.process = function (t) {
                            return w(this, void 0, void 0, function () {
                                var n, r;
                                return k(this, function (i) {
                                    return n = Date.now(),
                                        r = eh(this.config.sessionTimeout, this.config.lastEventTime),
                                        t.event_type !== eN && t.event_type !== eL && (!t.session_id || t.session_id === this.getSessionId()) && r && this.setSessionId(n),
                                        [2, e.prototype.process.call(this, t)]
                                })
                            })
                        }
                        ,
                        t
                }(Z))).init.bind(u), "init", T(u), O(u, ["config"])),
                add: R(u.add.bind(u), "add", T(u), O(u, ["config.apiKey", "timeline.plugins"])),
                remove: R(u.remove.bind(u), "remove", T(u), O(u, ["config.apiKey", "timeline.plugins"])),
                track: R(u.track.bind(u), "track", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                logEvent: R(u.logEvent.bind(u), "logEvent", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                identify: R(u.identify.bind(u), "identify", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                groupIdentify: R(u.groupIdentify.bind(u), "groupIdentify", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                setGroup: R(u.setGroup.bind(u), "setGroup", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                revenue: R(u.revenue.bind(u), "revenue", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                flush: R(u.flush.bind(u), "flush", T(u), O(u, ["config.apiKey", "timeline.queue.length"])),
                getUserId: R(u.getUserId.bind(u), "getUserId", T(u), O(u, ["config", "config.userId"])),
                setUserId: R(u.setUserId.bind(u), "setUserId", T(u), O(u, ["config", "config.userId"])),
                getDeviceId: R(u.getDeviceId.bind(u), "getDeviceId", T(u), O(u, ["config", "config.deviceId"])),
                setDeviceId: R(u.setDeviceId.bind(u), "setDeviceId", T(u), O(u, ["config", "config.deviceId"])),
                reset: R(u.reset.bind(u), "reset", T(u), O(u, ["config", "config.userId", "config.deviceId"])),
                getSessionId: R(u.getSessionId.bind(u), "getSessionId", T(u), O(u, ["config"])),
                setSessionId: R(u.setSessionId.bind(u), "setSessionId", T(u), O(u, ["config"])),
                extendSession: R(u.extendSession.bind(u), "extendSession", T(u), O(u, ["config"])),
                setOptOut: R(u.setOptOut.bind(u), "setOptOut", T(u), O(u, ["config"])),
                setTransport: R(u.setTransport.bind(u), "setTransport", T(u), O(u, ["config"]))
            };
        tv.add,
            tv.extendSession,
            tv.flush,
            tv.getDeviceId,
            tv.getSessionId,
            tv.getUserId,
            tv.groupIdentify,
            tv.identify;
        var ty = tv.init
            , tm = (tv.logEvent,
                tv.remove,
                tv.reset,
                tv.revenue,
                tv.setDeviceId,
                tv.setGroup,
                tv.setOptOut,
                tv.setSessionId,
                tv.setTransport,
                tv.setUserId,
                tv.track)
            , tb = n(4125)
            , tS = n(8873)
            , tI = function (e) {
                let { Component: t, pageProps: n } = e
                    , r = (0,
                        tb.useRouter)()
                    , [i, o] = (0,
                        y.useState)(!1);
                return ty("a205ed9b06a7baf5a594bdd30293aa80", void 0, {
                    serverUrl: "https://stats.CodeBox.io/2/httpapi",
                    defaultTracking: !0,
                    includeReferrer: !0,
                    flushIntervalMillis: 3e3,
                    attribution: {
                        trackNewCampaigns: !1
                    }
                }),
                    (0,
                        y.useEffect)(() => {
                            if (!i) {
                                let e = {
                                    source: "homepage",
                                    path: r.asPath
                                };
                                tm("pageview", e),
                                    o(!0)
                            }
                        }
                            , [r]),
                    (0,
                        y.useEffect)(() => {
                            let e = e => {
                                tm("pageview", {
                                    source: "homepage",
                                    path: e
                                })
                            }
                                ;
                            return r.events.on("routeChangeComplete", e),
                                () => {
                                    r.events.off("routeChangeComplete", e)
                                }
                        }
                            , []),
                    v(),
                    (0,
                        y.useEffect)(() => {
                            let e = window.matchMedia("(prefers-reduced-motion: reduce)");
                            e.addEventListener("change", () => {
                                window.scrollTo(0, 0),
                                    window.location.reload()
                            }
                            )
                        }
                            , []),
                    (0,
                        h.jsx)(h.Fragment, {
                            children: (0,
                                h.jsx)(tS.d, {
                                    children: (0,
                                        h.jsx)(t, {
                                            ...n
                                        })
                                })
                        })
            }
    },
    6294: function (e, t, n) {
        "use strict";
        n.d(t, {
            $_: function () {
                return ec
            },
            zY: function () {
                return es
            },
            Wb: function () {
                return el
            },
            zo: function () {
                return ea
            }
        });
        var r, i = n(959), o = "colors", s = "sizes", a = "space", u = {
            gap: a,
            gridGap: a,
            columnGap: a,
            gridColumnGap: a,
            rowGap: a,
            gridRowGap: a,
            inset: a,
            insetBlock: a,
            insetBlockEnd: a,
            insetBlockStart: a,
            insetInline: a,
            insetInlineEnd: a,
            insetInlineStart: a,
            margin: a,
            marginTop: a,
            marginRight: a,
            marginBottom: a,
            marginLeft: a,
            marginBlock: a,
            marginBlockEnd: a,
            marginBlockStart: a,
            marginInline: a,
            marginInlineEnd: a,
            marginInlineStart: a,
            padding: a,
            paddingTop: a,
            paddingRight: a,
            paddingBottom: a,
            paddingLeft: a,
            paddingBlock: a,
            paddingBlockEnd: a,
            paddingBlockStart: a,
            paddingInline: a,
            paddingInlineEnd: a,
            paddingInlineStart: a,
            top: a,
            right: a,
            bottom: a,
            left: a,
            scrollMargin: a,
            scrollMarginTop: a,
            scrollMarginRight: a,
            scrollMarginBottom: a,
            scrollMarginLeft: a,
            scrollMarginX: a,
            scrollMarginY: a,
            scrollMarginBlock: a,
            scrollMarginBlockEnd: a,
            scrollMarginBlockStart: a,
            scrollMarginInline: a,
            scrollMarginInlineEnd: a,
            scrollMarginInlineStart: a,
            scrollPadding: a,
            scrollPaddingTop: a,
            scrollPaddingRight: a,
            scrollPaddingBottom: a,
            scrollPaddingLeft: a,
            scrollPaddingX: a,
            scrollPaddingY: a,
            scrollPaddingBlock: a,
            scrollPaddingBlockEnd: a,
            scrollPaddingBlockStart: a,
            scrollPaddingInline: a,
            scrollPaddingInlineEnd: a,
            scrollPaddingInlineStart: a,
            fontSize: "fontSizes",
            background: o,
            backgroundColor: o,
            backgroundImage: o,
            borderImage: o,
            border: o,
            borderBlock: o,
            borderBlockEnd: o,
            borderBlockStart: o,
            borderBottom: o,
            borderBottomColor: o,
            borderColor: o,
            borderInline: o,
            borderInlineEnd: o,
            borderInlineStart: o,
            borderLeft: o,
            borderLeftColor: o,
            borderRight: o,
            borderRightColor: o,
            borderTop: o,
            borderTopColor: o,
            caretColor: o,
            color: o,
            columnRuleColor: o,
            fill: o,
            outline: o,
            outlineColor: o,
            stroke: o,
            textDecorationColor: o,
            fontFamily: "fonts",
            fontWeight: "fontWeights",
            lineHeight: "lineHeights",
            letterSpacing: "letterSpacings",
            blockSize: s,
            minBlockSize: s,
            maxBlockSize: s,
            inlineSize: s,
            minInlineSize: s,
            maxInlineSize: s,
            width: s,
            minWidth: s,
            maxWidth: s,
            height: s,
            minHeight: s,
            maxHeight: s,
            flexBasis: s,
            gridTemplateColumns: s,
            gridTemplateRows: s,
            borderWidth: "borderWidths",
            borderTopWidth: "borderWidths",
            borderRightWidth: "borderWidths",
            borderBottomWidth: "borderWidths",
            borderLeftWidth: "borderWidths",
            borderStyle: "borderStyles",
            borderTopStyle: "borderStyles",
            borderRightStyle: "borderStyles",
            borderBottomStyle: "borderStyles",
            borderLeftStyle: "borderStyles",
            borderRadius: "radii",
            borderTopLeftRadius: "radii",
            borderTopRightRadius: "radii",
            borderBottomRightRadius: "radii",
            borderBottomLeftRadius: "radii",
            boxShadow: "shadows",
            textShadow: "shadows",
            transition: "transitions",
            zIndex: "zIndices"
        }, l = (e, t) => "function" == typeof t ? {
            "()": Function.prototype.toString.call(t)
        } : t, c = () => {
            let e = Object.create(null);
            return (t, n, ...r) => {
                let i = JSON.stringify(t, l);
                return i in e ? e[i] : e[i] = n(t, ...r)
            }
        }
            , d = Symbol.for("sxs.internal"), p = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), f = e => {
                for (let t in e)
                    return !0;
                return !1
            }
            , { hasOwnProperty: h } = Object.prototype, g = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()), v = /\s+(?![^()]*\))/, y = e => t => e(..."string" == typeof t ? String(t).split(v) : [t]), m = {
                appearance: e => ({
                    WebkitAppearance: e,
                    appearance: e
                }),
                backfaceVisibility: e => ({
                    WebkitBackfaceVisibility: e,
                    backfaceVisibility: e
                }),
                backdropFilter: e => ({
                    WebkitBackdropFilter: e,
                    backdropFilter: e
                }),
                backgroundClip: e => ({
                    WebkitBackgroundClip: e,
                    backgroundClip: e
                }),
                boxDecorationBreak: e => ({
                    WebkitBoxDecorationBreak: e,
                    boxDecorationBreak: e
                }),
                clipPath: e => ({
                    WebkitClipPath: e,
                    clipPath: e
                }),
                content: e => ({
                    content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
                }),
                hyphens: e => ({
                    WebkitHyphens: e,
                    hyphens: e
                }),
                maskImage: e => ({
                    WebkitMaskImage: e,
                    maskImage: e
                }),
                maskSize: e => ({
                    WebkitMaskSize: e,
                    maskSize: e
                }),
                tabSize: e => ({
                    MozTabSize: e,
                    tabSize: e
                }),
                textSizeAdjust: e => ({
                    WebkitTextSizeAdjust: e,
                    textSizeAdjust: e
                }),
                userSelect: e => ({
                    WebkitUserSelect: e,
                    userSelect: e
                }),
                marginBlock: y((e, t) => ({
                    marginBlockStart: e,
                    marginBlockEnd: t || e
                })),
                marginInline: y((e, t) => ({
                    marginInlineStart: e,
                    marginInlineEnd: t || e
                })),
                maxSize: y((e, t) => ({
                    maxBlockSize: e,
                    maxInlineSize: t || e
                })),
                minSize: y((e, t) => ({
                    minBlockSize: e,
                    minInlineSize: t || e
                })),
                paddingBlock: y((e, t) => ({
                    paddingBlockStart: e,
                    paddingBlockEnd: t || e
                })),
                paddingInline: y((e, t) => ({
                    paddingInlineStart: e,
                    paddingInlineEnd: t || e
                }))
            }, b = /([\d.]+)([^]*)/, S = (e, t) => e.length ? e.reduce((e, n) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(e) ? `:is(${n})` : n) : n + " " + e)),
                e), []) : t, I = (e, t) => e in w && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, r, i) => n + ("stretch" === r ? `-moz-available${i};${g(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${g(e)}:${n}fit-content`) + i) : String(t), w = {
                    blockSize: 1,
                    height: 1,
                    inlineSize: 1,
                    maxBlockSize: 1,
                    maxHeight: 1,
                    maxInlineSize: 1,
                    maxWidth: 1,
                    minBlockSize: 1,
                    minHeight: 1,
                    minInlineSize: 1,
                    minWidth: 1,
                    width: 1
                }, k = e => e ? e + "-" : "", E = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, r, i, o, s) => "$" == o == !!i ? e : (r || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? k(t) + (s.includes("$") ? "" : k(n)) + s.replace(/\$/g, "-") : s) + ")" + (r || "--" == o ? "*" + (r || "") + (i || "1") + ")" : "")), _ = /\s*,\s*(?![^()]*\))/, x = Object.prototype.toString, T = (e, t, n, r, i) => {
                    let o, s, a;
                    let u = (e, t, n) => {
                        let l, c;
                        let d = e => {
                            var p;
                            for (l in e) {
                                let f = 64 === l.charCodeAt(0)
                                    , h = f && Array.isArray(e[l]) ? e[l] : [e[l]];
                                for (c of h) {
                                    let e = /[A-Z]/.test(p = l) ? p : p.replace(/-[^]/g, e => e[1].toUpperCase())
                                        , h = "object" == typeof c && c && c.toString === x && (!r.utils[e] || !t.length);
                                    if (e in r.utils && !h) {
                                        let t = r.utils[e];
                                        if (t !== s) {
                                            s = t,
                                                d(t(c)),
                                                s = null;
                                            continue
                                        }
                                    } else if (e in m) {
                                        let t = m[e];
                                        if (t !== a) {
                                            a = t,
                                                d(t(c)),
                                                a = null;
                                            continue
                                        }
                                    }
                                    if (f && (l = (l.slice(1) in r.media ? "@media " + r.media[l.slice(1)] : l).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, n, r, i, o) => {
                                        let s = b.test(t)
                                            , a = .0625 * (s ? -1 : 1)
                                            , [u, l] = s ? [r, t] : [t, r];
                                        return "(" + ("=" === n[0] ? "" : ">" === n[0] === s ? "max-" : "min-") + u + ":" + ("=" !== n[0] && 1 === n.length ? l.replace(b, (e, t, r) => Number(t) + a * (">" === n ? 1 : -1) + r) : l) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + u + ":" + (1 === i.length ? o.replace(b, (e, t, n) => Number(t) + a * (">" === i ? -1 : 1) + n) : o) : "") + ")"
                                    }
                                    )),
                                        h) {
                                        let e = f ? n.concat(l) : [...n]
                                            , r = f ? [...t] : S(t, l.split(_));
                                        void 0 !== o && i(P(...o)),
                                            o = void 0,
                                            u(c, r, e)
                                    } else
                                        void 0 === o && (o = [[], t, n]),
                                            l = f || 36 !== l.charCodeAt(0) ? l : `--${k(r.prefix)}${l.slice(1).replace(/\$/g, "-")}`,
                                            c = h ? c : "number" == typeof c ? c && e in O ? String(c) + "px" : String(c) : E(I(e, null == c ? "" : c), r.prefix, r.themeMap[e]),
                                            o[0].push(`${f ? `${l} ` : `${g(l)}:`}${c}`)
                                }
                            }
                        }
                            ;
                        d(e),
                            void 0 !== o && i(P(...o)),
                            o = void 0
                    }
                        ;
                    u(e, t, n)
                }
            , P = (e, t, n) => `${n.map(e => `${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, O = {
                animationDelay: 1,
                animationDuration: 1,
                backgroundSize: 1,
                blockSize: 1,
                border: 1,
                borderBlock: 1,
                borderBlockEnd: 1,
                borderBlockEndWidth: 1,
                borderBlockStart: 1,
                borderBlockStartWidth: 1,
                borderBlockWidth: 1,
                borderBottom: 1,
                borderBottomLeftRadius: 1,
                borderBottomRightRadius: 1,
                borderBottomWidth: 1,
                borderEndEndRadius: 1,
                borderEndStartRadius: 1,
                borderInlineEnd: 1,
                borderInlineEndWidth: 1,
                borderInlineStart: 1,
                borderInlineStartWidth: 1,
                borderInlineWidth: 1,
                borderLeft: 1,
                borderLeftWidth: 1,
                borderRadius: 1,
                borderRight: 1,
                borderRightWidth: 1,
                borderSpacing: 1,
                borderStartEndRadius: 1,
                borderStartStartRadius: 1,
                borderTop: 1,
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
                borderTopWidth: 1,
                borderWidth: 1,
                bottom: 1,
                columnGap: 1,
                columnRule: 1,
                columnRuleWidth: 1,
                columnWidth: 1,
                containIntrinsicSize: 1,
                flexBasis: 1,
                fontSize: 1,
                gap: 1,
                gridAutoColumns: 1,
                gridAutoRows: 1,
                gridTemplateColumns: 1,
                gridTemplateRows: 1,
                height: 1,
                inlineSize: 1,
                inset: 1,
                insetBlock: 1,
                insetBlockEnd: 1,
                insetBlockStart: 1,
                insetInline: 1,
                insetInlineEnd: 1,
                insetInlineStart: 1,
                left: 1,
                letterSpacing: 1,
                margin: 1,
                marginBlock: 1,
                marginBlockEnd: 1,
                marginBlockStart: 1,
                marginBottom: 1,
                marginInline: 1,
                marginInlineEnd: 1,
                marginInlineStart: 1,
                marginLeft: 1,
                marginRight: 1,
                marginTop: 1,
                maxBlockSize: 1,
                maxHeight: 1,
                maxInlineSize: 1,
                maxWidth: 1,
                minBlockSize: 1,
                minHeight: 1,
                minInlineSize: 1,
                minWidth: 1,
                offsetDistance: 1,
                offsetRotate: 1,
                outline: 1,
                outlineOffset: 1,
                outlineWidth: 1,
                overflowClipMargin: 1,
                padding: 1,
                paddingBlock: 1,
                paddingBlockEnd: 1,
                paddingBlockStart: 1,
                paddingBottom: 1,
                paddingInline: 1,
                paddingInlineEnd: 1,
                paddingInlineStart: 1,
                paddingLeft: 1,
                paddingRight: 1,
                paddingTop: 1,
                perspective: 1,
                right: 1,
                rowGap: 1,
                scrollMargin: 1,
                scrollMarginBlock: 1,
                scrollMarginBlockEnd: 1,
                scrollMarginBlockStart: 1,
                scrollMarginBottom: 1,
                scrollMarginInline: 1,
                scrollMarginInlineEnd: 1,
                scrollMarginInlineStart: 1,
                scrollMarginLeft: 1,
                scrollMarginRight: 1,
                scrollMarginTop: 1,
                scrollPadding: 1,
                scrollPaddingBlock: 1,
                scrollPaddingBlockEnd: 1,
                scrollPaddingBlockStart: 1,
                scrollPaddingBottom: 1,
                scrollPaddingInline: 1,
                scrollPaddingInlineEnd: 1,
                scrollPaddingInlineStart: 1,
                scrollPaddingLeft: 1,
                scrollPaddingRight: 1,
                scrollPaddingTop: 1,
                shapeMargin: 1,
                textDecoration: 1,
                textDecorationThickness: 1,
                textIndent: 1,
                textUnderlineOffset: 1,
                top: 1,
                transitionDelay: 1,
                transitionDuration: 1,
                verticalAlign: 1,
                width: 1,
                wordSpacing: 1
            }, R = e => String.fromCharCode(e + (e > 25 ? 39 : 97)), F = e => (e => {
                let t, n = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0)
                    n = R(t % 52) + n;
                return R(t % 52) + n
            }
            )(((e, t) => {
                let n = t.length;
                for (; n;)
                    e = 33 * e ^ t.charCodeAt(--n);
                return e
            }
            )(5381, JSON.stringify(e)) >>> 0), D = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], A = e => {
                if (e.href && !e.href.startsWith(location.origin))
                    return !1;
                try {
                    return !!e.cssRules
                } catch (e) {
                    return !1
                }
            }
            , C = e => {
                let t;
                let n = () => {
                    let { cssRules: e } = t.sheet;
                    return [].map.call(e, (n, r) => {
                        let { cssText: i } = n
                            , o = "";
                        if (i.startsWith("--sxs"))
                            return "";
                        if (e[r - 1] && (o = e[r - 1].cssText).startsWith("--sxs")) {
                            if (!n.cssRules.length)
                                return "";
                            for (let e in t.rules)
                                if (t.rules[e].group === n)
                                    return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;
                            return n.cssRules.length ? `${o}${i}` : ""
                        }
                        return i
                    }
                    ).join("")
                }
                    , r = () => {
                        if (t) {
                            let { rules: e, sheet: n } = t;
                            if (!n.deleteRule) {
                                for (; 3 === Object(Object(n.cssRules)[0]).type;)
                                    n.cssRules.splice(0, 1);
                                n.cssRules = []
                            }
                            for (let t in e)
                                delete e[t]
                        }
                        let i = Object(e).styleSheets || [];
                        for (let e of i)
                            if (A(e)) {
                                for (let i = 0, o = e.cssRules; o[i]; ++i) {
                                    let s = Object(o[i]);
                                    if (1 !== s.type)
                                        continue;
                                    let a = Object(o[i + 1]);
                                    if (4 !== a.type)
                                        continue;
                                    ++i;
                                    let { cssText: u } = s;
                                    if (!u.startsWith("--sxs"))
                                        continue;
                                    let l = u.slice(14, -3).trim().split(/\s+/)
                                        , c = D[l[0]];
                                    c && (t || (t = {
                                        sheet: e,
                                        reset: r,
                                        rules: {},
                                        toString: n
                                    }),
                                        t.rules[c] = {
                                            group: a,
                                            index: i,
                                            cache: new Set(l)
                                        })
                                }
                                if (t)
                                    break
                            }
                        if (!t) {
                            let i = (e, t) => ({
                                type: t,
                                cssRules: [],
                                insertRule(e, t) {
                                    this.cssRules.splice(t, 0, i(e, {
                                        import: 3,
                                        undefined: 1
                                    }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4))
                                },
                                get cssText() {
                                    return "@media{}" === e ? `@media{${[].map.call(this.cssRules, e => e.cssText).join("")}}` : e
                                }
                            });
                            t = {
                                sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
                                rules: {},
                                reset: r,
                                toString: n
                            }
                        }
                        let { sheet: o, rules: s } = t;
                        for (let e = D.length - 1; e >= 0; --e) {
                            let t = D[e];
                            if (!s[t]) {
                                let n = D[e + 1]
                                    , r = s[n] ? s[n].index : o.cssRules.length;
                                o.insertRule("@media{}", r),
                                    o.insertRule(`--sxs{--sxs:${e}}`, r),
                                    s[t] = {
                                        group: o.cssRules[r + 1],
                                        index: r,
                                        cache: new Set([e])
                                    }
                            }
                            B(s[t])
                        }
                    }
                    ;
                return r(),
                    t
            }
            , B = e => {
                let t = e.group
                    , n = t.cssRules.length;
                e.apply = e => {
                    try {
                        t.insertRule(e, n),
                            ++n
                    } catch (e) { }
                }
            }
            , $ = Symbol(), j = c(), N = (e, t) => j(e, () => (...n) => {
                let r = {
                    type: null,
                    composers: new Set
                };
                for (let t of n)
                    if (null != t) {
                        if (t[d])
                            for (let e of (null == r.type && (r.type = t[d].type),
                                t[d].composers))
                                r.composers.add(e);
                        else
                            t.constructor !== Object || t.$$typeof ? null == r.type && (r.type = t) : r.composers.add(L(t, e))
                    }
                return null == r.type && (r.type = "span"),
                    r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
                    M(e, r, t)
            }
            ), L = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, i) => {
                let o = `${k(i.prefix)}c-${F(r)}`
                    , s = []
                    , a = []
                    , u = Object.create(null)
                    , l = [];
                for (let e in n)
                    u[e] = String(n[e]);
                if ("object" == typeof e && e)
                    for (let t in e) {
                        h.call(u, t) || (u[t] = "undefined");
                        let n = e[t];
                        for (let e in n) {
                            let r = {
                                [t]: String(e)
                            };
                            "undefined" === String(e) && l.push(t);
                            let i = n[e]
                                , o = [r, i, !f(i)];
                            s.push(o)
                        }
                    }
                if ("object" == typeof t && t)
                    for (let e of t) {
                        let { css: t, ...n } = e;
                        for (let e in t = "object" == typeof t && t || {},
                            n)
                            n[e] = String(n[e]);
                        let r = [n, t, !f(t)];
                        a.push(r)
                    }
                return [o, r, s, a, u, l]
            }
            , M = (e, t, n) => {
                let [r, i, o, s] = U(t.composers)
                    , a = "function" == typeof t.type || t.type.$$typeof ? (e => {
                        function t() {
                            for (let n = 0; n < t[$].length; n++) {
                                let [r, i] = t[$][n];
                                e.rules[r].apply(i)
                            }
                            return t[$] = [],
                                null
                        }
                        return t[$] = [],
                            t.rules = {},
                            D.forEach(e => t.rules[e] = {
                                apply: n => t[$].push([e, n])
                            }),
                            t
                    }
                    )(n) : null
                    , u = (a || n).rules
                    , l = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`
                    , c = c => {
                        c = "object" == typeof c && c || W;
                        let { css: d, ...p } = c
                            , f = {};
                        for (let e in o)
                            if (delete p[e],
                                e in c) {
                                let t = c[e];
                                "object" == typeof t && t ? f[e] = {
                                    "@initial": o[e],
                                    ...t
                                } : (t = String(t),
                                    f[e] = "undefined" !== t || s.has(e) ? t : o[e])
                            } else
                                f[e] = o[e];
                        let h = new Set([...i]);
                        for (let [r, i, o, s] of t.composers) {
                            n.rules.styled.cache.has(r) || (n.rules.styled.cache.add(r),
                                T(i, [`.${r}`], [], e, e => {
                                    u.styled.apply(e)
                                }
                                ));
                            let t = z(o, f, e.media)
                                , a = z(s, f, e.media, !0);
                            for (let i of t)
                                if (void 0 !== i)
                                    for (let [t, o, s] of i) {
                                        let i = `${r}-${F(o)}-${t}`;
                                        h.add(i);
                                        let a = (s ? n.rules.resonevar : n.rules.onevar).cache
                                            , l = s ? u.resonevar : u.onevar;
                                        a.has(i) || (a.add(i),
                                            T(o, [`.${i}`], [], e, e => {
                                                l.apply(e)
                                            }
                                            ))
                                    }
                            for (let t of a)
                                if (void 0 !== t)
                                    for (let [i, o] of t) {
                                        let t = `${r}-${F(o)}-${i}`;
                                        h.add(t),
                                            n.rules.allvar.cache.has(t) || (n.rules.allvar.cache.add(t),
                                                T(o, [`.${t}`], [], e, e => {
                                                    u.allvar.apply(e)
                                                }
                                                ))
                                    }
                        }
                        if ("object" == typeof d && d) {
                            let t = `${r}-i${F(d)}-css`;
                            h.add(t),
                                n.rules.inline.cache.has(t) || (n.rules.inline.cache.add(t),
                                    T(d, [`.${t}`], [], e, e => {
                                        u.inline.apply(e)
                                    }
                                    ))
                        }
                        for (let e of String(c.className || "").trim().split(/\s+/))
                            e && h.add(e);
                        let g = p.className = [...h].join(" ");
                        return {
                            type: t.type,
                            className: g,
                            selector: l,
                            props: p,
                            toString: () => g,
                            deferredInjector: a
                        }
                    }
                    ;
                return p(c, {
                    className: r,
                    selector: l,
                    [d]: t,
                    toString: () => (n.rules.styled.cache.has(r) || c(),
                        r)
                })
            }
            , U = e => {
                let t = ""
                    , n = []
                    , r = {}
                    , i = [];
                for (let [o, , , , s, a] of e)
                    for (let e in "" === t && (t = o),
                        n.push(o),
                        i.push(...a),
                        s) {
                        let t = s[e];
                        (void 0 === r[e] || "undefined" !== t || a.includes(t)) && (r[e] = t)
                    }
                return [t, n, r, new Set(i)]
            }
            , z = (e, t, n, r) => {
                let i = [];
                e: for (let [o, s, a] of e) {
                    if (a)
                        continue;
                    let e, u = 0, l = !1;
                    for (e in o) {
                        let r = o[e]
                            , i = t[e];
                        if (i !== r) {
                            if ("object" != typeof i || !i)
                                continue e;
                            {
                                let e, t, o = 0;
                                for (let s in i) {
                                    if (r === String(i[s])) {
                                        if ("@initial" !== s) {
                                            let e = s.slice(1);
                                            (t = t || []).push(e in n ? n[e] : s.replace(/^@media ?/, "")),
                                                l = !0
                                        }
                                        u += o,
                                            e = !0
                                    }
                                    ++o
                                }
                                if (t && t.length && (s = {
                                    ["@media " + t.join(", ")]: s
                                }),
                                    !e)
                                    continue e
                            }
                        }
                    }
                    (i[u] = i[u] || []).push([r ? "cv" : `${e}-${o[e]}`, s, l])
                }
                return i
            }
            , W = {}, q = c(), V = (e, t) => q(e, () => (...n) => {
                let r = () => {
                    for (let r of n) {
                        let n = F(r = "object" == typeof r && r || {});
                        if (!t.rules.global.cache.has(n)) {
                            if (t.rules.global.cache.add(n),
                                "@import" in r) {
                                let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                                for (let n of [].concat(r["@import"]))
                                    n = n.includes('"') || n.includes("'") ? n : `"${n}"`,
                                        t.sheet.insertRule(`@import ${n};`, e++);
                                delete r["@import"]
                            }
                            T(r, [], [], e, e => {
                                t.rules.global.apply(e)
                            }
                            )
                        }
                    }
                    return ""
                }
                    ;
                return p(r, {
                    toString: r
                })
            }
            ), K = c(), H = (e, t) => K(e, () => n => {
                let r = `${k(e.prefix)}k-${F(n)}`
                    , i = () => {
                        if (!t.rules.global.cache.has(r)) {
                            t.rules.global.cache.add(r);
                            let i = [];
                            T(n, [], [], e, e => i.push(e));
                            let o = `@keyframes ${r}{${i.join("")}}`;
                            t.rules.global.apply(o)
                        }
                        return r
                    }
                    ;
                return p(i, {
                    get name() {
                        return i()
                    },
                    toString: i
                })
            }
            ), Q = class {
                constructor(e, t, n, r) {
                    this.token = null == e ? "" : String(e),
                        this.value = null == t ? "" : String(t),
                        this.scale = null == n ? "" : String(n),
                        this.prefix = null == r ? "" : String(r)
                }
                get computedValue() {
                    return "var(" + this.variable + ")"
                }
                get variable() {
                    return "--" + k(this.prefix) + k(this.scale) + this.token
                }
                toString() {
                    return this.computedValue
                }
            }
            , Y = c(), J = (e, t) => Y(e, () => (n, r) => {
                r = "object" == typeof n && n || Object(r);
                let i = `.${n = (n = "string" == typeof n ? n : "") || `${k(e.prefix)}t-${F(r)}`}`
                    , o = {}
                    , s = [];
                for (let t in r)
                    for (let n in o[t] = {},
                        r[t]) {
                        let i = `--${k(e.prefix)}${t}-${n}`
                            , a = E(String(r[t][n]), e.prefix, t);
                        o[t][n] = new Q(n, a, t, e.prefix),
                            s.push(`${i}:${a}`)
                    }
                let a = () => {
                    if (s.length && !t.rules.themed.cache.has(n)) {
                        t.rules.themed.cache.add(n);
                        let i = `${r === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
                        t.rules.themed.apply(i)
                    }
                    return n
                }
                    ;
                return {
                    ...o,
                    get className() {
                        return a()
                    },
                    selector: i,
                    toString: a
                }
            }
            ), G = c(), Z = c(), X = e => {
                let t = (e => {
                    let t = !1
                        , n = G(e, e => {
                            t = !0;
                            let n = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : ""
                                , r = "object" == typeof e.media && e.media || {}
                                , i = "object" == typeof e.root ? e.root || null : globalThis.document || null
                                , o = "object" == typeof e.theme && e.theme || {}
                                , s = {
                                    prefix: n,
                                    media: r,
                                    theme: o,
                                    themeMap: "object" == typeof e.themeMap && e.themeMap || {
                                        ...u
                                    },
                                    utils: "object" == typeof e.utils && e.utils || {}
                                }
                                , a = C(i)
                                , l = {
                                    css: N(s, a),
                                    globalCss: V(s, a),
                                    keyframes: H(s, a),
                                    createTheme: J(s, a),
                                    reset() {
                                        a.reset(),
                                            l.theme.toString()
                                    },
                                    theme: {},
                                    sheet: a,
                                    config: s,
                                    prefix: n,
                                    getCssText: a.toString,
                                    toString: a.toString
                                };
                            return String(l.theme = l.createTheme(o)),
                                l
                        }
                        );
                    return t || n.reset(),
                        n
                }
                )(e);
                return t.styled = (({ config: e, sheet: t }) => Z(e, () => {
                    let n = N(e, t);
                    return (...e) => {
                        let t = n(...e)
                            , r = t[d].type
                            , o = i.forwardRef((e, n) => {
                                let o = e && e.as || r
                                    , { props: s, deferredInjector: a } = t(e);
                                return delete s.as,
                                    s.ref = n,
                                    a ? i.createElement(i.Fragment, null, i.createElement(o, s), i.createElement(a, null)) : i.createElement(o, s)
                            }
                            );
                        return o.className = t.className,
                            o.displayName = `Styled.${r.displayName || r.name || r}`,
                            o.selector = t.selector,
                            o.toString = () => t.selector,
                            o[d] = t[d],
                            o
                    }
                }
                ))(t),
                    t
            }
            , ee = () => r || (r = X()), et = (...e) => ee().createTheme(...e);
        let en = {
            neutral: {
                black: {
                    800: "#0E0E0E",
                    700: "#161616",
                    600: "#1D1D1D",
                    500: "#252525",
                    400: "#292929",
                    300: "#2D2D2D",
                    200: "#303030",
                    100: "#343434"
                },
                gray: {
                    800: "#666666",
                    700: "#858585",
                    600: "#A3A3A3",
                    500: "#C2C2C2",
                    400: "#D1D1D1",
                    300: "#E0E0E0",
                    200: "#F0F0F0",
                    100: "#FFFFFF"
                }
            },
            branding: {
                lime: {
                    800: "#D6FB41",
                    700: "#DCFF50",
                    600: "#E3FF73",
                    500: "#EAFF96",
                    400: "#F1FFB9",
                    300: "#F5FFCB",
                    200: "#F8FFDC",
                    100: "#FCFFEE"
                },
                purple: {
                    800: "#644ED7",
                    700: "#7B61FF",
                    600: "#9581FF",
                    500: "#B0A0FF",
                    400: "#CAC0FF",
                    300: "#D7D0FF",
                    200: "#E5DFFF",
                    100: "#F2EFFF"
                },
                blue: {
                    800: "#054491",
                    700: "#075AC1",
                    600: "#0971F1",
                    500: "#3A8DF4",
                    400: "#6BAAF7",
                    300: "#9DC6F9",
                    200: "#B5D4FB",
                    100: "#CEE3FC"
                },
                vscode: {
                    800: "#007ACC",
                    700: "#0098FF",
                    600: "#33ADFF",
                    500: "#66C1FF",
                    400: "#99D6FF",
                    300: "#B3E0FF",
                    200: "#CCEAFF",
                    100: "#E6F5FF"
                }
            },
            red: {
                800: "#EB5E5E",
                700: "#ED6C6C",
                600: "#EF7A7A",
                500: "#F08787",
                400: "#F29595",
                300: "#F39C9C",
                200: "#F3A2A2",
                100: "#F5B0B0"
            },
            green: {
                800: "#5AC249",
                700: "#6FEC5B",
                600: "#8CF07C",
                500: "#A9F49D",
                400: "#C5F7BD",
                300: "#D4F9CE",
                200: "#E2FBDE",
                100: "#F1FDEF"
            },
            orange: {
                800: "#EC775B",
                700: "#EE8269",
                600: "#F08D77",
                500: "#F19985",
                400: "#F3A492",
                300: "#F4AA99",
                200: "#F4B0A0",
                100: "#F6BBAE"
            },
            yellow: {
                800: "#D0AA52",
                700: "#F7CC66",
                600: "#F9D685",
                500: "#FAE0A3",
                400: "#FCEBC2",
                300: "#FDF0D1",
                200: "#FDF5E0",
                100: "#FFFFFF"
            }
        }
            , er = {
                neutral800: en.neutral.gray[100],
                neutral700: en.neutral.gray[200],
                neutral600: en.neutral.gray[300],
                neutral500: en.neutral.gray[400],
                neutral400: en.neutral.gray[500],
                neutral300: en.neutral.gray[600],
                neutral200: en.neutral.gray[700],
                neutral100: en.neutral.gray[800],
                foreground800: en.neutral.black[100],
                foreground700: en.neutral.black[200],
                foreground600: en.neutral.black[300],
                foreground500: en.neutral.black[400],
                foreground400: en.neutral.black[500],
                foreground300: en.neutral.black[600],
                foreground200: en.neutral.black[700],
                foreground100: en.neutral.black[800],
                background: "$neutral800",
                text: "$foreground300",
                link: "$purple800"
            }
            , ei = {
                neutral800: en.neutral.black[800],
                neutral700: en.neutral.black[700],
                neutral600: en.neutral.black[600],
                neutral500: en.neutral.black[500],
                neutral400: en.neutral.black[400],
                neutral300: en.neutral.black[300],
                neutral200: en.neutral.black[200],
                neutral100: en.neutral.black[100],
                foreground800: en.neutral.gray[800],
                foreground700: en.neutral.gray[700],
                foreground600: en.neutral.gray[600],
                foreground500: en.neutral.gray[500],
                foreground400: en.neutral.gray[400],
                foreground300: en.neutral.gray[300],
                foreground200: en.neutral.gray[200],
                foreground100: en.neutral.gray[100],
                black800: en.neutral.black[800],
                black700: en.neutral.black[700],
                black600: en.neutral.black[600],
                black500: en.neutral.black[500],
                black400: en.neutral.black[400],
                black300: en.neutral.black[300],
                black200: en.neutral.black[200],
                black100: en.neutral.black[100],
                lime800: en.branding.lime[800],
                lime700: en.branding.lime[700],
                lime600: en.branding.lime[600],
                lime500: en.branding.lime[500],
                lime400: en.branding.lime[400],
                lime300: en.branding.lime[300],
                lime200: en.branding.lime[200],
                lime100: en.branding.lime[100],
                purple800: en.branding.purple[800],
                purple700: en.branding.purple[700],
                purple600: en.branding.purple[600],
                purple500: en.branding.purple[500],
                purple400: en.branding.purple[400],
                purple300: en.branding.purple[300],
                purple200: en.branding.purple[200],
                purple100: en.branding.purple[100],
                vscode800: en.branding.vscode[800],
                vscode700: en.branding.vscode[700],
                vscode600: en.branding.vscode[600],
                vscode500: en.branding.vscode[500],
                vscode400: en.branding.vscode[400],
                vscode300: en.branding.vscode[300],
                vscode200: en.branding.vscode[200],
                vscode100: en.branding.vscode[100],
                red800: en.red[800],
                red700: en.red[700],
                red600: en.red[600],
                red500: en.red[500],
                red400: en.red[400],
                red300: en.red[300],
                red200: en.red[200],
                red100: en.red[100],
                green800: en.green[800],
                green700: en.green[700],
                green600: en.green[600],
                green500: en.green[500],
                green400: en.green[400],
                green300: en.green[300],
                green200: en.green[200],
                green100: en.green[100],
                orange800: en.orange[800],
                orange700: en.orange[700],
                orange600: en.orange[600],
                orange500: en.orange[500],
                orange400: en.orange[400],
                orange300: en.orange[300],
                orange200: en.orange[200],
                orange100: en.orange[100],
                blue800: en.branding.blue[800],
                blue700: en.branding.blue[700],
                blue600: en.branding.blue[600],
                blue500: en.branding.blue[500],
                blue400: en.branding.blue[400],
                blue300: en.branding.blue[300],
                blue200: en.branding.blue[200],
                blue100: en.branding.blue[100],
                yellow800: en.yellow[800],
                yellow700: en.yellow[700],
                yellow600: en.yellow[600],
                yellow500: en.yellow[500],
                yellow400: en.yellow[400],
                yellow300: en.yellow[300],
                yellow200: en.yellow[200],
                yellow100: en.yellow[100],
                background: "$neutral800",
                text: "$foreground200",
                link: "$lime600"
            }
            , { getCssText: eo, globalCss: es, styled: ea, css: eu } = X({
                media: {
                    reduceMotion: "(prefers-reduced-motion)",
                    xl: "(min-width: 1921px)",
                    lg: "(min-width: 1441px)",
                    md: "(min-width: 1068px)",
                    sm: "(min-width: 734px)",
                    xs: "(min-width: 420px)"
                },
                theme: {
                    colors: ei,
                    sizes: {
                        pageWidth: "1200px",
                        pageWidthMedium: "820px",
                        navHeight: "48px",
                        navHeightMobile: "56px",
                        0: "0px",
                        1: "4px",
                        2: "8px",
                        3: "16px",
                        4: "24px",
                        5: "32px",
                        6: "48px",
                        7: "64px",
                        8: "80px",
                        9: "104px",
                        10: "152px",
                        11: "200px",
                        12: "240px"
                    },
                    space: {
                        0: "0px",
                        1: "4px",
                        2: "8px",
                        3: "16px",
                        4: "24px",
                        5: "32px",
                        6: "48px",
                        7: "64px",
                        8: "80px",
                        9: "104px",
                        10: "152px",
                        11: "200px",
                        12: "208px",
                        gridGap: "32px",
                        pageMargin: "32px"
                    },
                    fontSizes: {
                        8: "8px",
                        10: "10px",
                        12: "12px",
                        14: "14px",
                        16: "16px",
                        18: "18px",
                        20: "20px",
                        24: "24px",
                        28: "28px",
                        32: "32px",
                        40: "40px",
                        48: "48px",
                        56: "56px",
                        64: "64px",
                        72: "72px",
                        80: "80px",
                        88: "88px",
                        96: "96px",
                        128: "128px",
                        144: "144px",
                        180: "180px",
                        200: "200px",
                        240: "240px",
                        288: "288px"
                    },
                    fonts: {
                        display: "TWK Everett, Inter, 'Hevetica Neue', Helvetica, apple-system, sans-serif",
                        default: "Inter, 'Hevetica Neue', Helvetica, apple-system, sans-serif"
                    },
                    fontWeights: {
                        light: "300",
                        regular: "400",
                        medium: "500",
                        bold: "600"
                    },
                    letterSpacings: {
                        0: "0em",
                        1: "-0.0125em",
                        2: "-0.025em",
                        3: "-0.05em",
                        4: "-0.075em"
                    },
                    radii: {
                        0: "0px",
                        1: "4px",
                        2: "6px",
                        3: "8px",
                        rounded: "9999px"
                    },
                    lineHeights: {
                        90: "90%",
                        100: "100%",
                        110: "110%",
                        120: "120%",
                        140: "140%",
                        160: "160%"
                    }
                },
                utils: {
                    marginX: e => ({
                        marginLeft: e,
                        marginRight: e
                    }),
                    marginY: e => ({
                        marginTop: e,
                        marginBottom: e
                    }),
                    paddingX: e => ({
                        paddingLeft: e,
                        paddingRight: e
                    }),
                    paddingY: e => ({
                        paddingTop: e,
                        paddingBottom: e
                    }),
                    borderX: e => ({
                        borderLeft: e,
                        borderRight: e
                    }),
                    borderY: e => ({
                        borderTop: e,
                        borderBottom: e
                    }),
                    x: e => ({
                        transform: "translateX(" + e + ")"
                    }),
                    y: e => ({
                        transform: "translateY(" + e + ")"
                    }),
                    size: e => ({
                        width: e,
                        height: e
                    }),
                    br: e => ({
                        borderRadius: e
                    })
                }
            })
            , el = et({
                colors: er
            })
            , ec = et({
                colors: ei
            })
    },
    4125: function (e, t, n) {
        e.exports = n(1210)
    }
}, function (e) {
    var t = function (t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], function () {
        return t(7575),
            t(1210)
    }),
        _N_E = e.O()
}
]);
