!function() {
    "use strict";
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator.throw(value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P((function(resolve) {
                    resolve(result.value);
                })).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    }
    function __generator(thisArg, body) {
        var f, y, t, g, _ = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        };
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return function(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    for (;_; ) try {
                        if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                          case 0:
                          case 1:
                            t = op;
                            break;

                          case 4:
                            return _.label++, {
                                value: op[1],
                                done: !1
                            };

                          case 5:
                            _.label++, y = op[1], op = [ 0 ];
                            continue;

                          case 7:
                            op = _.ops.pop(), _.trys.pop();
                            continue;

                          default:
                            if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                _ = 0;
                                continue;
                            }
                            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (6 === op[0] && _.label < t[1]) {
                                _.label = t[1], t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2], _.ops.push(op);
                                break;
                            }
                            t[2] && _.ops.pop(), _.trys.pop();
                            continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [ 6, e ], y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (5 & op[0]) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: !0
                    };
                }([ n, v ]);
            };
        }
    }
    function getHostname(url) {
        if (!url) return null;
        if (url.startsWith("chrome://newtab")) return "chrome://newtab";
        if (url.startsWith("chrome://")) return "chrome://";
        var hostnameWithPath = (url = getUrl(url)).replace(/^(https?:\/\/)?(www\.)?/, ""), googleHostname = function(hostnameWithPath) {
            if (!hostnameWithPath.includes("google.")) return;
            for (var googleSpecialCases = [ /^(docs.google.[^.]+\/document)/i, /^(docs.google.[^.]+\/spreadsheets)/i, /^(docs.google.[^.]+\/presentation)/i, /^(docs.google.[^.]+\/drawings)/i, /^(google.[^.]+\/maps)/i, /^(google.[^.]+\/flights)/i ], i = 0; i < googleSpecialCases.length; ++i) {
                var result = googleSpecialCases[i].exec(hostnameWithPath);
                if (result) return result[1];
            }
        }(hostnameWithPath);
        if (googleHostname) return googleHostname;
        var microsoftHostname = function(hostnameWithPath) {
            if (!(hostnameWithPath.includes("onedrive.live.com") || hostnameWithPath.includes(".sharepoint.com") || hostnameWithPath.includes("office.com") || hostnameWithPath.includes("office.live.com"))) return;
            var microsoftSpecialCases = {
                "office.live.com/start/Word.aspx": /^onedrive\.live\.com.*app=Word/i,
                "office.live.com/start/Excel.aspx": /^onedrive\.live\.com.*app=Excel/i,
                "office.live.com/start/PowerPoint.aspx": /^onedrive\.live\.com.*app=PowerPoint/i,
                "onenote.com": /^onedrive\.live\.com\/.*\.one/i,
                "office.com/launch/word": /^.*\.sharepoint\.com\/:w:/i,
                "office.com/launch/excel": /^.*\.sharepoint\.com\/:x:/i,
                "office.com/launch/powerpoint": /^.*\.sharepoint\.com\/:p:/i,
                "office.com/launch/onenote": /^.*\.sharepoint\.com\/.*\.one/i
            };
            return Object.keys(microsoftSpecialCases).find((function(hostname) {
                return !!hostnameWithPath.startsWith(hostname) || microsoftSpecialCases[hostname].test(hostnameWithPath);
            }));
        }(hostnameWithPath);
        if (microsoftHostname) return microsoftHostname;
        var slackHostname = function(hostnameWithPath) {
            if (!hostnameWithPath.startsWith("app.slack.com")) return;
            return hostnameWithPath.split("/").slice(0, 3).join("/");
        }(hostnameWithPath);
        return slackHostname || hostnameWithPath.split("/")[0];
    }
    function getUrl(url) {
        if (void 0 === url && (url = ""), url.startsWith("chrome-extension://klbibkeccnjlkjkiokjodocebajanakg")) {
            var match = /uri=([^&]+)/.exec(url);
            return match ? match[1] : url;
        }
        return url;
    }
    var state;
    function setState(_state) {
        state = _state;
    }
    function isInitialized() {
        return !!state;
    }
    var openedOrder = [];
    function setOpenedOrder(_openedOrder) {
        openedOrder = _openedOrder, chrome.storage.local.set({
            _switch_openedOrder: openedOrder
        });
    }
    var customHostnames = {};
    function getAllStateInfo() {
        return __awaiter(this, void 0, void 0, (function() {
            var _a, tabs, storage, favsOrder;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, Promise.all([ new Promise((function(resolve) {
                        chrome.tabs.query({}, (function(tabs) {
                            resolve(tabs);
                        }));
                    })), new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_favsListHeight", "_switch_user", "_switch_favsListScroll", "_switch_appsListScroll" ], (function(result) {
                            resolve(result);
                        }));
                    })) ]) ];

                  case 1:
                    return _a = _b.sent(), tabs = _a[0], storage = _a[1], favsOrder = [], function(user) {
                        return user && "switchProPlan" === user.plan;
                    }(user = storage._switch_user) || function(user) {
                        user && user.trial;
                    }(user), [ 2, {
                        tabs: tabs,
                        favsOrder: favsOrder,
                        favsListHeight: storage._switch_favsListHeight,
                        user: storage._switch_user,
                        favsListScroll: storage._switch_favsListScroll || 0,
                        appsListScroll: storage._switch_appsListScroll || 0
                    } ];
                }
                var user;
            }));
        }));
    }
    function isPopupTab(tab) {
        return new Promise((function(resolve) {
            if (tab.windowId === chrome.windows.WINDOW_ID_NONE) return resolve(!1);
            chrome.windows.get(tab.windowId, (function(win) {
                return chrome.runtime.lastError || !win ? resolve(!1) : resolve("popup" === win.type);
            }));
        }));
    }
    chrome.storage.local.get([ "_switch_openedOrder", "_switch_customHostnames" ], (function(result) {
        openedOrder = result._switch_openedOrder || [], customHostnames = result._switch_customHostnames || {};
    }));
    var sessionStore = {};
    function setSession(tabId, hostname, accountId, displayName) {
        sessionStore[tabId] = {
            hostname: hostname,
            accountId: accountId,
            displayName: displayName
        }, saveToStorage$3();
    }
    function getSession(tabId, hostname) {
        return sessionStore[tabId] ? sessionStore[tabId].hostname !== hostname ? null : sessionStore[tabId] : null;
    }
    function saveToStorage$3() {
        chrome.storage.local.set({
            _switch_sessionStore: sessionStore
        });
    }
    chrome.storage.local.get([ "_switch_sessionStore" ], (function(result) {
        sessionStore = result._switch_sessionStore || {};
    }));
    var excludedSearchHosts = {
        "chrome://": !0,
        "chrome-extension:": !0
    };
    function getState() {
        return __awaiter(this, void 0, void 0, (function() {
            var _a, tabs, favsOrder, favsListHeight, user, favsListScroll, appsListScroll, apps, appsOrder, favs;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, getAllStateInfo() ];

                  case 1:
                    return _a = _b.sent(), tabs = _a.tabs, favsOrder = _a.favsOrder, favsListHeight = _a.favsListHeight, 
                    user = _a.user, favsListScroll = _a.favsListScroll, appsListScroll = _a.appsListScroll, 
                    apps = {}, tabs.forEach((function(tab) {
                        var hostname = getHostname(tab.url), urlPrefix = function(url) {
                            if (!url) return null;
                            var wwwSubdomain = function(url) {
                                return url.includes("://www.") || /sharepoint\.com.*\/Doc\.aspx/i.test(url) || /sharepoint\.com.*OneNote/i.test(url) ? "www." : "";
                            }(url = getUrl(url));
                            return url.startsWith("http://") ? "http://" + wwwSubdomain : url.startsWith("https://") ? "https://" + wwwSubdomain : url.startsWith("file://") ? "file://" + wwwSubdomain : null;
                        }(tab.url);
                        tab.session = getSession(tab.id, hostname), tab.searchHostname = excludedSearchHosts[hostname] ? "" : hostname, 
                        apps[hostname] ? apps[hostname].tabs.push(tab) : apps[hostname] = {
                            hostname: hostname,
                            urlPrefix: urlPrefix,
                            tabs: [ tab ]
                        };
                    })), Object.values(apps).forEach((function(app) {
                        app.sessions = function(app) {
                            var sessions = {};
                            return app.tabs.forEach((function(tab) {
                                tab.session && tab.session.accountId && (sessions[tab.session.accountId] = !0);
                            })), sessions;
                        }(app);
                    })), appsOrder = function(apps) {
                        return setOpenedOrder(openedOrder.filter((function(info) {
                            return !!apps[info.hostname];
                        }))), Object.keys(apps).forEach((function(hostname) {
                            openedOrder.find((function(info) {
                                return info.hostname === hostname;
                            })) || openedOrder.push({
                                hostname: hostname,
                                urlPrefix: apps[hostname].urlPrefix,
                                faviconUrl: apps[hostname].faviconUrl
                            });
                        })), setOpenedOrder(openedOrder), openedOrder;
                    }(apps), favs = {}, favsOrder.forEach((function(info) {
                        var hostname = info.hostname, urlPrefix = info.urlPrefix;
                        if (apps[hostname]) return favs[hostname] = apps[hostname], delete apps[hostname], 
                        void (appsOrder = appsOrder.filter((function(info) {
                            return info.hostname !== hostname;
                        })));
                        favs[hostname] = {
                            hostname: hostname,
                            urlPrefix: urlPrefix,
                            faviconUrl: info.faviconUrl,
                            tabs: []
                        };
                    })), [ 2, {
                        apps: apps,
                        appsOrder: appsOrder,
                        favs: favs,
                        favsOrder: favsOrder,
                        favsListHeight: favsListHeight,
                        favsListScroll: favsListScroll,
                        appsListScroll: appsListScroll,
                        user: user,
                        customHostnames: customHostnames
                    } ];
                }
            }));
        }));
    }
    var globalPreferences = {
        showSwitchOnNewTab: !0,
        showSwitchByDefault: !0,
        tabSearchShortcut: !0,
        toggleSidebarShortcut: !0
    }, preferences = {
        dockCollapsed: {},
        showSwitchByDefault: !0,
        gmailNotifications: {},
        tabSearchShortcut: null,
        toggleSidebarShortcut: null
    };
    function getAllPreferences(tab) {
        return Object.assign(preferences, {
            currentTabId: tab.id
        });
    }
    function setDefaultDockCollapsed(tab) {
        return __awaiter(this, void 0, void 0, (function() {
            var id, url;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return id = tab.id, url = tab.url, void 0 !== preferences.dockCollapsed[id] ? [ 2 ] : url ? [ 4, isPopupTab(tab) ] : [ 2 ];

                  case 1:
                    return _a.sent() ? (preferences.dockCollapsed[id] = !0, [ 2, saveToStorage$4() ]) : (!1 === preferences.showSwitchByDefault && (preferences.dockCollapsed[id] = !0, 
                    saveToStorage$4()), [ 2 ]);
                }
            }));
        }));
    }
    function saveToStorage$4() {
        chrome.storage.local.set({
            _switch_preferences: preferences
        });
    }
    function updateState(tabId) {
        return __awaiter(this, void 0, void 0, (function() {
            var state, tabsToUpdate;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return isInitialized() ? [ 4, getState() ] : [ 2 ];

                  case 1:
                    return setState(state = _a.sent()), [ 4, new Promise((function(resolve) {
                        tabId ? chrome.tabs.get(tabId, (function(tab) {
                            return resolve(tab ? [ tab ] : []);
                        })) : chrome.tabs.query({
                            active: !0
                        }, (function(tabs) {
                            return resolve(tabs);
                        }));
                    })) ];

                  case 2:
                    return 0 === (tabsToUpdate = _a.sent()).length || tabsToUpdate.forEach((function(tab) {
                        chrome.tabs.sendMessage(tab.id, {
                            message: "updateState",
                            state: state
                        });
                    })), [ 2 ];
                }
            }));
        }));
    }
    chrome.storage.local.get([ "_switch_preferences" ], (function(result) {
        result._switch_preferences && (preferences = Object.assign(preferences, result._switch_preferences)), 
        Object.keys(preferences.dockCollapsed).forEach((function(tabId) {
            chrome.tabs.get(+tabId, (function(tab) {
                chrome.runtime.lastError, tab || delete preferences.dockCollapsed[tabId];
            }));
        }));
    }));
    var api = {
        getInitialPreferences: function(request, sender, sendResponse) {
            return function(tab) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, setDefaultDockCollapsed(tab) ];

                          case 1:
                            return _a.sent(), [ 2, getAllPreferences(tab) ];
                        }
                    }));
                }));
            }(sender.tab).then((function(prefs) {
                return sendResponse(prefs);
            })), !0;
        },
        getInitialState: function(request, sender, sendResponse) {
            var _this = this;
            chrome.windows.get(sender.tab.windowId, (function(win) {
                return __awaiter(_this, void 0, void 0, (function() {
                    var isActiveTab;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return isActiveTab = !1, chrome.runtime.lastError || (isActiveTab = win.focused && sender.tab.active), 
                            [ 4, new Promise((function(resolve) {
                                if (isInitialized()) return resolve();
                                var interval = setInterval((function() {
                                    if (isInitialized()) return clearInterval(interval), resolve();
                                }), 1);
                            })) ];

                          case 1:
                            return _a.sent(), chrome.tabs.sendMessage(sender.tab.id, {
                                message: "getInitialStateResult",
                                state: state,
                                isActiveTab: isActiveTab
                            }), [ 2 ];
                        }
                    }));
                }));
            }));
        },
        periodicCheckForUpgrade: function(request, sender, sendResponse) {
            var tab = sender.tab;
            return chrome.windows.get(tab.windowId, (function(win) {
                if (chrome.runtime.lastError) return sendResponse({});
                sendResponse({
                    checkOverrides: win.focused && tab.active
                });
            })), !0;
        },
        removeSession: function(request, sender, sendResponse) {
            var hostname = getHostname(sender.tab.url), session = getSession(sender.tab.id, hostname);
            setSession(sender.tab.id, hostname), session && session.accountId && updateState();
        },
        runtimeInitialized: function(request, sender, sendResponse) {
            chrome.tabs.sendMessage(sender.tab.id, {
                message: "runtimeInitializedResult"
            });
        },
        setAppListOrder: function(request, sender, sendResponse) {
            setOpenedOrder(request.appListOrder);
        },
        setCustomHostname: function(request) {
            var hostname, displayName;
            request.hostname && request.displayName && (hostname = request.hostname, displayName = request.displayName, 
            customHostnames[hostname] = displayName, chrome.storage.local.set({
                _switch_customHostnames: customHostnames
            }));
        },
        setPreference: function(request, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 1:
                        if (!_a.sent()) return [ 2 ];
                        _a.label = 2;

                      case 3:
                        return key = request.key, value = request.value, tabId = sender.tab.id, "dockCollapsed" === key ? preferences.dockCollapsed[tabId] = value : preferences[key] = value, 
                        saveToStorage$4(), globalPreferences[request.key] ? chrome.tabs.query({}, (function(tabs) {
                            tabs.forEach((function(tab) {
                                chrome.tabs.sendMessage(tab.id, {
                                    message: "preferencesUpdated",
                                    preferences: getAllPreferences(tab),
                                    key: request.key
                                });
                            }));
                        })) : chrome.tabs.sendMessage(sender.tab.id, {
                            message: "preferencesUpdated",
                            preferences: getAllPreferences(sender.tab),
                            key: request.key
                        }), [ 2 ];
                    }
                    var key, value, tabId;
                }));
            }));
        },
        switchTab: function(request, sender, sendResponse) {
            !function(tabId) {
                __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        return "number" != typeof tabId ? [ 2 ] : [ 2, new Promise((function(resolve, reject) {
                            chrome.tabs.get(tabId, (function(tab) {
                                return tab ? (chrome.tabs.update(tab.id, {
                                    active: !0
                                }), chrome.windows.update(tab.windowId, {
                                    focused: !0
                                }), resolve()) : reject(chrome.runtime.lastError);
                            }));
                        })) ];
                    }));
                }));
            }(request.tabId);
        },
        toggleDockCollapsed: function(request, sender, sendResponse) {
            chrome.tabs.sendMessage(sender.tab.id, {
                message: "toggleDockCollapsed"
            });
        },
        updateSession: function(request, sender, sendResponse) {
            var accountId = request.accountId, displayName = request.displayName, hostname = getHostname(sender.tab.url), session = getSession(sender.tab.id, hostname);
            setSession(sender.tab.id, hostname, accountId, displayName), session && session.accountId === accountId || updateState();
        }
    };
    chrome.runtime.onMessage.addListener((function(request, sender, sendResponse) {
        var handler = api[request.message];
        return handler && handler(request, sender, sendResponse);
    })), chrome.tabs.onCreated.addListener((function(tab) {
        preferences.showSwitchOnNewTab && ((tab.pendingUrl || "").startsWith("chrome://newtab") && chrome.tabs.update(tab.id, {
            url: "chrome-extension://" + chrome.runtime.id + "/newtab.html"
        }));
    })), chrome.tabs.onUpdated.addListener((function(tabId, changeInfo, tab) {
        var url = changeInfo.url, status = changeInfo.status, hostname = (changeInfo.title, 
        getHostname(tab.url));
        ("loading" === status || url) && (getSession(tabId, hostname) || setSession(tabId, hostname));
        updateState(), url && chrome.tabs.sendMessage(tabId, {
            message: "tabUrlChanged",
            url: url
        });
    })), chrome.windows.onFocusChanged.addListener((function(windowId) {
        chrome.tabs.query({
            active: !0,
            windowId: windowId
        }, (function(tabs) {
            tabs[0] && updateState();
        }));
    })), chrome.tabs.onRemoved.addListener((function(tabId) {
        !function(key, tabId) {
            "dockCollapsed" === key ? delete preferences.dockCollapsed[tabId] : delete preferences[key], 
            saveToStorage$4();
        }("dockCollapsed", tabId), function(tabId) {
            delete sessionStore[tabId], saveToStorage$3();
        }(tabId), updateState();
    })), chrome.tabs.onActivated.addListener((function(activeInfo) {
        var tabId = activeInfo.tabId, windowId = activeInfo.windowId;
        updateState(), windowId !== chrome.windows.WINDOW_ID_NONE && chrome.windows.get(windowId, (function(win) {
            win.focused && "popup" !== win.type && chrome.tabs.sendMessage(tabId, {
                message: "tabActivated"
            });
        }));
    })), chrome.windows.onFocusChanged.addListener((function(windowId) {
        windowId !== chrome.windows.WINDOW_ID_NONE && chrome.windows.get(windowId, (function(win) {
            "popup" !== win.type && chrome.tabs.query({
                windowId: windowId,
                active: !0
            }, (function(tabs) {
                tabs.forEach((function(tab) {
                    chrome.tabs.sendMessage(tab.id, {
                        message: "tabActivated"
                    });
                }));
            }));
        }));
    })), function() {
        __awaiter(this, void 0, void 0, (function() {
            var user, accessToken;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_user" ], (function(result) {
                            return resolve(result._switch_user);
                        }));
                    })) ];

                  case 1:
                    return user = _a.sent(), [ 4, new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_accessToken" ], (function(result) {
                            return resolve(result._switch_accessToken);
                        }));
                    })) ];

                  case 2:
                    if (accessToken = _a.sent(), !user || !accessToken) return [ 3, 6 ];
                    _a.label = 3;

                  case 6:
                    return getState().then(setState), chrome.storage.local.remove([ "_switch_favsId", "_switch_favsOrder" ]), 
                    [ 2 ];
                }
            }));
        }));
    }();
}();