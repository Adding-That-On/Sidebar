!function() {
    "use strict";
    var dockMounted = !1;
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
    var $body, $head, $dockWrapper;
    function setBody(_$body) {
        $body = _$body;
    }
    function setState(_state) {
        _state;
    }
    function setDockWrapper(_$dockWrapper) {
        $dockWrapper = _$dockWrapper;
    }
    var $window = $(window), $html = ($(document), $("html")), preferences = {};
    function setPreferences(_preferences) {
        preferences = _preferences;
    }
    var checkOverrides = !1;
    function setCheckOverrides(_checkOverrides) {
        checkOverrides = _checkOverrides;
    }
    var isCleaningUp = !1;
    chrome.storage.local.get([ "_switch_appFavicons" ], (function(result) {
        result._switch_appFavicons || {};
    }));
    var module;
    (function(module) {
        /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
        !function() {
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
                for (var classes = [], i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (arg) {
                        var argType = typeof arg;
                        if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg) && arg.length) {
                            var inner = classNames.apply(null, arg);
                            inner && classes.push(inner);
                        } else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                    }
                }
                return classes.join(" ");
            }
            module.exports ? (classNames.default = classNames, module.exports = classNames) : window.classNames = classNames;
        }();
    })(module = {
        exports: {}
    }, module.exports);
    var cleanupFunctions = [], sessionCleanupFunctions = [];
    function addCleanupFunction(f) {
        cleanupFunctions.push(f);
    }
    function addSessionCleanupFunction(f) {
        sessionCleanupFunctions.push(f);
    }
    function cleanUpSessions() {
        sessionCleanupFunctions.forEach((function(f) {
            return f();
        })), sessionCleanupFunctions.splice(0, sessionCleanupFunctions.length);
    }
    var overrides = [], reverseOverrides = [];
    function addOverrides(override, reverse) {
        overrides.push(override), reverseOverrides.push(reverse);
    }
    function removeOverrides(override, reverse) {
        overrides = overrides.filter((function(f) {
            return f !== override;
        })), reverseOverrides = reverseOverrides.filter((function(f) {
            return f !== reverse;
        }));
    }
    addCleanupFunction((function() {
        return !0;
    }));
    var defaultTimes = [ 1, 10, 25, 50, 100, 200, 400, 800, 1600, 3200, 5e3 ];
    function runInSuccession(func, times) {
        void 0 === times && (times = []), 0 !== times.length && setTimeout((function() {
            func(), runInSuccession(func, times.slice(1));
        }), times[0]);
    }
    function throttle(func, throttleTime, immediate) {
        void 0 === throttleTime && (throttleTime = 1e3);
        var timeout = null, firstCall = !0;
        return function() {
            for (var _this = this, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            if (immediate && firstCall) return func.apply(this, args), void (firstCall = !1);
            timeout || (timeout = setTimeout((function() {
                func.apply(_this, args), timeout = null;
            }), throttleTime));
        };
    }
    function debounce(func, debounceTime) {
        void 0 === debounceTime && (debounceTime = 1e3);
        var timeout = null;
        return function() {
            for (var _this = this, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            clearTimeout(timeout), timeout = setTimeout((function() {
                func.apply(_this, args);
            }), debounceTime);
        };
    }
    function deepProp(obj, props) {
        return void 0 === props && (props = []), null == obj || 0 === props.length ? obj : deepProp(obj[props[0]], props.slice(1));
    }
    function waitForHead() {
        return new Promise((function(resolve, reject) {
            if ($head) return resolve();
            var count = 0, interval = setInterval((function() {
                return count > 5e3 ? (clearInterval(interval), reject({
                    err: "<head> did not load."
                })) : (++count, document.head ? (clearInterval(interval), _$head = $(document.head), 
                $head = _$head, resolve()) : void 0);
                var _$head;
            }), 1);
        }));
    }
    function clickElement($elem) {
        var elem = $elem.get(0);
        elem && [ "mousedown", "mouseup", "click" ].forEach((function(event) {
            elem.dispatchEvent(new MouseEvent(event, {
                view: window,
                bubbles: !0,
                cancelable: !0,
                button: 0
            }));
        }));
    }
    function waitForElement(query, timeout) {
        return void 0 === timeout && (timeout = 12e4), __awaiter(this, void 0, void 0, (function() {
            var $result;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return ($result = $(query)).length > 0 ? [ 2, $result ] : [ 4, new Promise((function(resolve) {
                        var maxInterval = timeout, interval = setInterval((function() {
                            return (maxInterval -= 500) < 0 || 0 !== ($result = $(query)).length ? (clearInterval(interval), 
                            resolve()) : void 0;
                        }), 500);
                    })) ];

                  case 1:
                    return _a.sent(), [ 2, $result ];
                }
            }));
        }));
    }
    function getHostname(url) {
        if (!url) return null;
        if (url.startsWith("chrome://newtab")) return "chrome://newtab";
        if (url.startsWith("chrome://")) return "chrome://";
        var hostnameWithPath = (url = function(url) {
            void 0 === url && (url = "");
            if (url.startsWith("chrome-extension://klbibkeccnjlkjkiokjodocebajanakg")) {
                var match = /uri=([^&]+)/.exec(url);
                return match ? match[1] : url;
            }
            return url;
        }(url)).replace(/^(https?:\/\/)?(www\.)?/, ""), googleHostname = function(hostnameWithPath) {
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
    function updateSession(accountId, displayName) {
        accountId && chrome.runtime.sendMessage({
            message: "updateSession",
            accountId: accountId,
            displayName: displayName
        });
    }
    function removeSession() {
        chrome.runtime.sendMessage({
            message: "removeSession"
        });
    }
    function updateNotifications(notifications, accountId) {
        accountId && chrome.runtime.sendMessage({
            message: "updateNotifications",
            notifications: notifications,
            accountId: accountId
        });
    }
    function updateTitleNotification() {
        chrome.runtime.sendMessage({
            message: "updateTitleNotification"
        });
    }
    function getNotificationsNumber(notifications) {
        return void 0 === notifications && (notifications = ""), (notifications = notifications.replace(",", "").replace(" ", "")) && parseInt(notifications, 10) || 0;
    }
    var prevNotifications = 0;
    function loadNewNotifications($elem, accountId) {
        if (0 !== $elem.length) {
            var newNotifications = getNotificationsNumber($elem.text());
            newNotifications !== prevNotifications && newNotifications > 0 && (prevNotifications = newNotifications, 
            updateNotifications(newNotifications, accountId));
        }
    }
    var queryNotifications = debounce((function(accountId, $inbox) {
        updateNotifications(getNotificationsNumber($($inbox.find(".screenReaderOnly").get(0)).parent().text().replace(/unread/gi, "")), accountId);
    }), 500);
    function outlookSession(remoteData) {
        return __awaiter(this, void 0, void 0, (function() {
            var accountIdPosition, titleSeparator, titles, accountId;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, waitForElement(deepProp(remoteData, [ "pageLoad" ]), 3e4) ];

                  case 1:
                    return 0 === _a.sent().length ? [ 2, removeSession() ] : (accountIdPosition = deepProp(remoteData, [ "accountIdPosition" ]), 
                    titleSeparator = deepProp(remoteData, [ "titleSeparator" ]), (titles = $("title").text().split(titleSeparator)).length < accountIdPosition + 1 ? [ 2, removeSession() ] : (accountId = titles[accountIdPosition].trim()) ? (updateSession(accountId, accountId), 
                    function(accountId, remoteData) {
                        __awaiter(this, void 0, void 0, (function() {
                            var inboxQuery, $inbox, observer;
                            return __generator(this, (function(_a) {
                                return inboxQuery = deepProp(remoteData, [ "inbox" ]), 0 === ($inbox = $(inboxQuery)).length || (queryNotifications(accountId, $inbox), 
                                (observer = new MutationObserver((function() {
                                    queryNotifications(accountId, $inbox);
                                }))).observe($inbox.get(0), {
                                    subtree: !0,
                                    characterData: !0,
                                    childList: !0
                                }), addSessionCleanupFunction((function() {
                                    return observer.disconnect();
                                }))), [ 2 ];
                            }));
                        }));
                    }(accountId, remoteData), [ 2 ]) : [ 2, removeSession() ]);
                }
            }));
        }));
    }
    var queryAllNotifications = debounce((function(accountId, remoteData) {
        var notifications = 0, _a = getQueries(remoteData), navItemQueries = _a.navItemQueries, badgeCountQuery = _a.badgeCountQuery;
        navItemQueries.split(",").forEach((function(query) {
            var $badge = $(query).find(badgeCountQuery);
            0 !== $badge.length && (notifications += getNotificationsNumber($badge.text()));
        })), updateNotifications(notifications, accountId);
    }), 500);
    function getQueries(remoteData) {
        return {
            navItemQueries: deepProp(remoteData, [ "navItems" ]),
            badgeQuery: deepProp(remoteData, [ "badge" ]),
            badgeCountQuery: deepProp(remoteData, [ "badgeCount" ])
        };
    }
    function slackSession(remoteData) {
        return __awaiter(this, void 0, void 0, (function() {
            var $teamName;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, waitForElement(deepProp(remoteData, [ "teamName" ]), 2e4) ];

                  case 1:
                    return 0 === ($teamName = _a.sent()).length || (hostname = getHostname(location.href), 
                    displayName = "slack.com - " + $teamName.text(), chrome.runtime.sendMessage({
                        message: "setCustomHostname",
                        hostname: hostname,
                        displayName: displayName
                    })), [ 2 ];
                }
                var hostname, displayName;
            }));
        }));
    }
    var sessionHandlers = {
        "facebook.com": {
            handler: function(remoteData) {
                return __awaiter(this, void 0, void 0, (function() {
                    var $profile, accountId, nameQuery, $name, displayName;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, waitForElement(deepProp(remoteData, [ "profile" ]), 2e4) ];

                          case 1:
                            return 0 === ($profile = _a.sent()).length ? [ 2, removeSession() ] : (accountId = $profile.attr("href").split("/").slice(-1)[0]) ? (nameQuery = deepProp(remoteData, [ "name" ]), 
                            $name = $(nameQuery), displayName = ($name.text() ? $name.text() + " - " : "") + accountId, 
                            updateSession(accountId, displayName), setTimeout((function() {
                                return updateTitleNotification();
                            }), 500), [ 2 ]) : [ 2, removeSession() ];
                        }
                    }));
                }));
            }
        },
        "mail.google.com": {
            handler: function(remoteData) {
                return __awaiter(this, void 0, void 0, (function() {
                    var email, res, xml;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            location.protocol + "//" + location.host + location.pathname + "feed/atom", _a.label = 1;

                          case 2:
                            return res = _a.sent(), xml = res.data, email = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue.match(/[^ ]+@[^ ]+$/)[0], 
                            [ 3, 4 ];

                          case 3:
                            return _a.sent(), [ 3, 4 ];

                          case 4:
                            return email ? (updateSession(email, email), function(accountId, remoteData) {
                                __awaiter(this, void 0, void 0, (function() {
                                    var newMessagesQuery, observer, $sidebar;
                                    return __generator(this, (function(_a) {
                                        switch (_a.label) {
                                          case 0:
                                            return newMessagesQuery = deepProp(remoteData, [ "newMessages" ]), loadNewNotifications($(newMessagesQuery), accountId), 
                                            observer = new MutationObserver((function(mutations) {
                                                var addedNodes = mutations[0].addedNodes;
                                                if (addedNodes && 0 !== addedNodes.length) {
                                                    var addedNode = addedNodes[0], newMessageRowQuery = deepProp(remoteData, [ "newMessageRow" ]), $newMessageRow = $(newMessageRowQuery);
                                                    if ($.contains(addedNode, $newMessageRow.get(0))) {
                                                        var messageCountQuery = deepProp(remoteData, [ "messageCount" ]), $newMessageCount = $newMessageRow.find(messageCountQuery);
                                                        if (0 === $newMessageCount.length) return prevNotifications = 0, void updateNotifications(0, accountId);
                                                        loadNewNotifications($newMessageCount, accountId);
                                                    }
                                                }
                                            })), [ 4, waitForElement(deepProp(remoteData, [ "sidebar" ])) ];

                                          case 1:
                                            return 0 === ($sidebar = _a.sent()).length || (observer.observe($sidebar.get(0), {
                                                childList: !0
                                            }), addSessionCleanupFunction((function() {
                                                return observer.disconnect();
                                            }))), [ 2 ];
                                        }
                                    }));
                                }));
                            }(email, remoteData), [ 2 ]) : [ 2, removeSession() ];
                        }
                    }));
                }));
            }
        },
        "outlook.live.com": {
            handler: outlookSession
        },
        "outlook.office.com": {
            handler: outlookSession
        },
        "outlook.office365.com": {
            handler: outlookSession
        },
        "messenger.com": {
            handler: function(remoteData) {
                return __awaiter(this, void 0, void 0, (function() {
                    var preloadedDataQuery, preloadedData, match, accountId, nameMatch, displayName;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, waitForElement(deepProp(remoteData, [ "pageLoad" ]), 2e4) ];

                          case 1:
                            return 0 === _a.sent().length ? [ 2, removeSession() ] : (preloadedDataQuery = deepProp(remoteData, [ "preloadedData" ]), 
                            preloadedData = $head.find(preloadedDataQuery).text(), (match = /"USER_ID":"([^"]*)"/.exec(preloadedData)) || (match = /"ACCOUNT_ID":"([^"]*)"/.exec(preloadedData)), 
                            match ? !(accountId = match[1]) || accountId.length < 5 ? [ 2, removeSession() ] : (nameMatch = /"NAME":"([^"]*)"/.exec(preloadedData), 
                            displayName = nameMatch && nameMatch[1], updateSession(accountId, displayName), 
                            setTimeout((function() {
                                return updateTitleNotification();
                            }), 500), [ 2 ]) : [ 2, removeSession() ]);
                        }
                    }));
                }));
            }
        },
        "linkedin.com": {
            handler: function(remoteData) {
                return __awaiter(this, void 0, void 0, (function() {
                    var $profile, dropdownQuery, $styles, profileLinkQuery, $profileLink, profileHref, match, accountId;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, waitForElement(deepProp(remoteData, [ "profileTrigger" ])) ];

                          case 1:
                            return 0 === ($profile = _a.sent()).length ? [ 2, removeSession() ] : (dropdownQuery = deepProp(remoteData, [ "profileDropdown" ]), 
                            $styles = $("\n    <style>\n      " + dropdownQuery + " {\n        display: none !important;\n      }\n    </style>\n  "), 
                            $head.append($styles), clickElement($profile), profileLinkQuery = deepProp(remoteData, [ "profileLink" ]), 
                            $profileLink = $(profileLinkQuery), profileHref = $profileLink.length > 0 && $profileLink.attr("href"), 
                            clickElement($profile), setTimeout((function() {
                                return $styles.remove();
                            }), 500), profileHref && (match = /\/in\/([^/]+)/.exec(profileHref)) ? (updateSession(accountId = match[1], accountId), 
                            function(accountId, remoteData) {
                                queryAllNotifications(accountId, remoteData), setTimeout((function() {
                                    return updateTitleNotification();
                                }), 1e3), getQueries(remoteData).navItemQueries.split(",").forEach((function(query) {
                                    var $elem = $(query);
                                    if (0 !== $elem.length) {
                                        var observer = new MutationObserver((function(mutations) {
                                            mutations.forEach((function(mutation) {
                                                var badgeQuery = getQueries(remoteData).badgeQuery;
                                                mutation.addedNodes.forEach((function(addedNode) {
                                                    $(addedNode).is(badgeQuery) && queryAllNotifications(accountId, remoteData);
                                                })), mutation.removedNodes.forEach((function(removedNode) {
                                                    $(removedNode).is(badgeQuery) && queryAllNotifications(accountId, remoteData);
                                                }));
                                            }));
                                        }));
                                        observer.observe($elem.get(0), {
                                            childList: !0,
                                            subtree: !0
                                        }), addSessionCleanupFunction((function() {
                                            return observer.disconnect();
                                        }));
                                    }
                                }));
                            }(accountId, remoteData), [ 2 ]) : [ 2, removeSession() ]);
                        }
                    }));
                }));
            }
        },
        "youtube.com": {
            handler: function(remoteData) {
                return __awaiter(this, void 0, void 0, (function() {
                    var $profileButton, dropdownQuery, $styles, $channelName, accountId;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, waitForElement(deepProp(remoteData, [ "profileButton" ]), 1e4) ];

                          case 1:
                            return 0 === ($profileButton = _a.sent()).length ? [ 2, removeSession() ] : (dropdownQuery = deepProp(remoteData, [ "profileDropdown" ]), 
                            $styles = $("\n    <style>\n      " + dropdownQuery + " {\n        display: none !important;\n      }\n    </style>\n  "), 
                            $head.append($styles), clickElement($profileButton), [ 4, waitForElement(deepProp(remoteData, [ "channelName" ]), 5e3) ]);

                          case 2:
                            return $channelName = _a.sent(), accountId = $channelName.text(), clickElement($profileButton), 
                            setTimeout((function() {
                                return $styles.remove();
                            }), 1e3), accountId ? (updateSession(accountId, accountId), setTimeout((function() {
                                return updateTitleNotification();
                            }), 500), [ 2 ]) : [ 2, removeSession() ];
                        }
                    }));
                }));
            }
        }
    };
    function initSessions() {
        return __awaiter(this, void 0, void 0, (function() {
            var hostname, handler;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return cleanUpSessions(), hostname = getHostname(location.href), (handler = sessionHandlers[hostname] && sessionHandlers[hostname].handler) || (handler = function(hostname) {
                        if (hostname.startsWith("app.slack.com")) return slackSession;
                    }(hostname)), handler ? [ 4, new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_user" ], (function(result) {
                            return resolve(result._switch_user);
                        }));
                    })) ] : [ 2 ];

                  case 1:
                    return function(user) {
                        return function(user) {
                            return user && "switchProPlan" === user.plan;
                        }(user) || function(user) {
                            return user && "switchProTrial" === user.trial;
                        }(user);
                    }(_a.sent()) ? (chrome.runtime.sendMessage({
                        message: "getRemoteDomainData",
                        domain: hostname
                    }, (function(remoteData) {
                        return handler(remoteData);
                    })), [ 2 ]) : [ 2 ];
                }
            }));
        }));
    }
    function isDockCollapsed() {
        return !!preferences.dockCollapsed[preferences.currentTabId];
    }
    function getOverrideId() {
        return __awaiter(this, void 0, void 0, (function() {
            var hostname, internationalId, microsoftOverrideId, regexId;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return hostname = getHostname(location.href), (internationalId = function(hostname) {
                        for (var domains = [ "google", "airbnb" ], i = 0; i < domains.length; ++i) {
                            var domain = domains[i], match = new RegExp(domain + "(.[^.]+)$", "i").exec(location.hostname);
                            if (match) return hostname.replace("" + domain + match[1], domain);
                        }
                    }(hostname)) ? [ 2, internationalId ] : [ 4, getMicrosoftOverrideId() ];

                  case 1:
                    return (microsoftOverrideId = _a.sent()) ? [ 2, microsoftOverrideId ] : (regex = {
                        "kayak.com": /\.kayak\.com$/,
                        "slack.com": /\.slack\.com$/,
                        "wikipedia.org": /wikipedia\.org$/,
                        "1password.com": /1password\.com$/,
                        "buffer.com": /buffer\.com$/,
                        docusign: /docusign\.[^\.]+$/,
                        amazon: /amazon\.[^\.]+$/
                    }, (regexId = Object.keys(regex).find((function(hostname) {
                        return regex[hostname].test(location.hostname);
                    }))) ? [ 2, regexId ] : [ 2, hostname ]);
                }
                var regex;
            }));
        }));
    }
    function getMicrosoftOverrideId() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(_a) {
                return /(sharepoint\.com$)|(onedrive\.live\.com$)|(office\.com$)/.test(location.hostname) ? /delve\.office\.com$/.test(location.hostname) ? [ 2, "delve.office.com" ] : [ 2, new Promise((function(resolve) {
                    $((function() {
                        return /(sharepoint\.com\/:x:)|(onedrive\.live\.com.*app=Excel)/i.test(location.href) ? resolve("microsoftExcel") : /(sharepoint\.com\/:w:)|(onedrive\.live\.com.*app=Word)/i.test(location.href) ? resolve("microsoftWord") : /(sharepoint\.com\/:p:)|(onedrive\.live\.com.*app=PowerPoint)/i.test(location.href) ? resolve("microsoftPowerPoint") : /sharepoint\.com.*\/onedrive.aspx/i.test(location.href) ? resolve("oneDriveSharepoint") : /onedrive\.live\.com\/edit\.aspx/.test(location.href) ? resolve("onedrive.live.com/edit.aspx") : resolve(getHostname(location.href));
                    }));
                })) ] : [ 2 ];
            }));
        }));
    }
    function shouldApplyOverrides() {
        return !isDockCollapsed();
    }
    function toggleDockCollapsed() {
        chrome.runtime.sendMessage({
            message: "toggleDockCollapsed"
        });
    }
    function removeSwitchOnUpgrade() {
        var upgradeInterval = setInterval((function() {
            try {
                chrome.runtime.sendMessage({
                    message: "periodicCheckForUpgrade"
                }, (function(res) {
                    setCheckOverrides(!!res.checkOverrides);
                }));
            } catch (err) {
                err && !/extension context invalidated/i.test(err.message) || (clearInterval(upgradeInterval), 
                isCleaningUp = !0, runInSuccession((function() {
                    isDockCollapsed() || (reverseOverrides.forEach((function(f) {
                        return f();
                    })), !1), cleanupFunctions.forEach((function(f) {
                        return f();
                    })), cleanUpSessions();
                }), [ 1, 250, 500 ]));
            }
        }), 2e3);
    }
    var floatRight = "", backgroundPositionX = "", prevScrollbarWidth = 0;
    function bodyPosition() {
        var $styles = getStyles(), override = function() {
            return $head.append($styles);
        }, reverse = function() {
            return $styles.remove();
        };
        shouldApplyOverrides() && override(), addOverrides(override, reverse), $((function() {
            if (parseInt($html.css("margin-left"), 10) > 50) return reverse(), void removeOverrides(override, reverse);
            if (function() {
                var bodyStyles = getComputedStyle(document.body);
                "50px" !== bodyStyles.marginLeft && (floatRight = "float: right !important;");
                "none" !== bodyStyles.backgroundImage && (bodyStyles.backgroundPositionX.startsWith("0") ? backgroundPositionX = "background-position-x: 50px !important;" : "50%" === bodyStyles.backgroundPositionX && (backgroundPositionX = "background-position-x: calc(50% + 25px) !important;"));
            }(), floatRight || backgroundPositionX) {
                var $oldStyles = $styles;
                $styles = getStyles(), shouldApplyOverrides() && override(), $oldStyles.remove();
            }
            runInSuccession((function() {
                if (!((scrollbarWidth = getScrollbarWidth()) <= 0 || scrollbarWidth === prevScrollbarWidth || (prevScrollbarWidth = scrollbarWidth, 
                0))) {
                    var scrollbarWidth, $oldStyles = $styles;
                    $styles = getStyles(), shouldApplyOverrides() && override(), $oldStyles.remove();
                }
            }), [ 1e3, 1e3, 2e3 ]);
        }));
    }
    function getStyles() {
        var scrollbarWidth = getScrollbarWidth(), scrollbarAdjust = scrollbarWidth ? " - " + scrollbarWidth + "px" : "";
        return $("\n    <style>\n      @media screen {\n        body {\n          width: calc(100vw - var(--sub-sidebar-width)" + scrollbarAdjust + ") !important;\n          min-width: calc(100vw - var(--sub-sidebar-width)" + scrollbarAdjust + ") !important;\n          box-sizing: border-box !important;\n          margin-left: var(--sub-sidebar-width) !important;\n          " + floatRight + "\n          " + backgroundPositionX + "\n        }\n      }\n    </style>\n  ");
    }
    function getScrollbarWidth() {
        try {
            var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollbarWidth > 0 && scrollbarWidth <= 30) return scrollbarWidth;
        } catch (err) {}
        return 0;
    }
    var fixedElemMap = new Map, normalElemMap = new Map, offScreenLeftElems = new Map, leftPopupElems = new Map, id = 1;
    function getElemId() {
        return id > 99999999 && (id = 1), id++;
    }
    var overrideFunctions = {}, reverseFunctions = {};
    var attributeWidthElems = {
        CANVAS: !0,
        EMBED: !0,
        IFRAME: !0,
        IMG: !0,
        INPUT: !0,
        OBJECT: !0,
        VIDEO: !0
    };
    function getWidthStyle(elem, styles) {
        if (elem.style.width) return elem.style.width;
        var prevDisplay = elem.style.display;
        elem.style.display = "none";
        var width = styles.getPropertyValue("width");
        if (elem.style.display = prevDisplay, "auto" === width && attributeWidthElems[elem.tagName]) {
            var attributeWidth = elem.getAttribute("width");
            if (attributeWidth) {
                if (attributeWidth.endsWith("%")) return attributeWidth;
                var widthNum = parseInt(attributeWidth, 10);
                if (widthNum) return widthNum + "px";
            }
        }
        return width;
    }
    function isElemException(elem) {
        return !!location.hostname.includes(".slack.com") && elem.classList.contains("ReactModal__Overlay");
    }
    function adjustShiftElement($elem, styles, options) {
        void 0 === options && (options = {});
        var elem = $elem[0];
        if (!elem.getAttribute("switch-shift-element-right") && !isElemException(elem)) {
            var bodyStyles = options.bodyStyles, ignoreOffscreenCheck = options.ignoreOffscreenCheck, offset = elem.getBoundingClientRect();
            if ((ignoreOffscreenCheck || !function(elem, offset) {
                var result = offScreenLeftElems.get(elem);
                return !!result && (!!result.hasOffscreenTransition || offset.right <= 50);
            }(elem, offset)) && !function(styles) {
                return styles.marginLeft.endsWith("px") && parseInt(styles.marginLeft, 10) > 50 && styles.marginLeft === styles.marginRight;
            }(styles) && !function(elem, offset) {
                var left = parseInt(elem.style.left.endsWith("px") && elem.style.left, 10) || 0, inlineTransform = elem.style.transform, match = /translateX\((.*)\)/.exec(inlineTransform);
                match || (match = /translate\((.*),.*\)/.exec(inlineTransform));
                var translateX = parseInt(match && match[1].endsWith("px") && match[1], 10) || 0, hasLeft = left + translateX >= 50;
                if (hasLeft) {
                    var previousSibling = elem.previousSibling;
                    if (!previousSibling || !previousSibling.getBoundingClientRect) return hasLeft;
                    if (previousSibling.getBoundingClientRect().right - offset.left == 50) return !1;
                }
                return hasLeft;
            }(elem, offset)) {
                var inheritBackground = bodyStyles && function(styles, bodyStyles) {
                    return "none" !== bodyStyles.backgroundImage && (styles.backgroundImage === bodyStyles.backgroundImage && styles.backgroundPositionX === bodyStyles.backgroundPositionX);
                }(styles, bodyStyles), elemId = getElemId(), newMargin = "calc(" + styles.marginLeft + " + var(--sub-sidebar-width))", $marginStyle = $('\n    <style>\n      [switch-shift-element-right="' + elemId + '"] {\n        margin-left: ' + newMargin + " !important;\n\n        " + (inheritBackground ? "\n          background-position-x: 0 !important;\n        " : "") + "\n      }\n    </style>\n  "), shiftRightOverride = function() {
                    $head.append($marginStyle), elem.setAttribute("switch-shift-element-right", "" + elemId);
                }, shiftRightReverse = function() {
                    $marginStyle.remove(), elem.removeAttribute("switch-shift-element-right");
                };
                shouldApplyOverrides() && shiftRightOverride(), addOverrides(shiftRightOverride, shiftRightReverse), 
                overrideFunctions[elemId] = shiftRightOverride, reverseFunctions[elemId] = shiftRightReverse;
            }
        }
    }
    var exceptions = {
        "mail.google.com": !0
    };
    function adjustWidthElement($elem, styles) {
        if (!exceptions[location.hostname]) {
            var elem = $elem[0];
            if (!elem.getAttribute("switch-adjust-element-width")) if (!elem.getAttribute("switch-adjust-floating-right-width")) if (!isElemException(elem)) if (!elem.getAttribute("switch-off-screen-element-right")) if (!(elem.getBoundingClientRect().right + window.scrollX <= window.innerWidth)) {
                var elemId = getElemId(), newWidth = "calc(" + getWidthStyle(elem, styles) + " - var(--sub-sidebar-width))", $widthStyle = $('\n    <style>\n      [switch-adjust-element-width="' + elemId + '"] {\n        width: ' + newWidth + " !important;\n      }\n    </style>\n  "), widthOverride = function() {
                    $head.append($widthStyle), elem.setAttribute("switch-adjust-element-width", "" + elemId);
                }, widthReverse = function() {
                    $widthStyle.remove(), elem.removeAttribute("switch-adjust-element-width");
                };
                shouldApplyOverrides() && widthOverride(), addOverrides(widthOverride, widthReverse), 
                overrideFunctions[elemId] = widthOverride, reverseFunctions[elemId] = widthReverse;
            }
        }
    }
    var exceptions$1 = {
        "mail.google.com": !0
    };
    var useClass = {
        DIV: !0
    };
    function getFixedPositioning(elems) {
        if (0 === elems.length) return [];
        var tagNameHash = {}, classElems = new Set, fullWidthElems = new Set;
        elems.forEach((function(elem) {
            var styles = fixedElemMap.has(elem) ? fixedElemMap.get(elem).styles : getComputedStyle(elem);
            "50px" === styles.left && "0px" === styles.right ? fullWidthElems.add(elem) : useClass[elem.tagName] ? classElems.add(elem) : tagNameHash[elem.tagName] = !0;
        }));
        var tagNames = Object.keys(tagNameHash).join(", "), $fixedDefaultStyles = $("\n    <style>\n      " + (tagNames ? "\n        " + tagNames + " {\n          left: -6.26129px;\n          right: -6.26129px;\n        }\n      " : "") + "\n\n      .switch-fixed-positioning-test {\n        left: -6.26129px;\n        right: -6.26129px;\n      }\n    </style>\n  "), $leftAutoStyles = $("\n    <style>\n      .switch-fixed-left-auto-test {\n        left: auto !important;\n      }\n    </style>\n  "), results = [], scrollX = window.scrollX;
        return $head.prepend($fixedDefaultStyles), $body.append($leftAutoStyles), elems.forEach((function(elem, index) {
            var styles = fixedElemMap.has(elem) ? fixedElemMap.get(elem).styles : getComputedStyle(elem);
            if (fullWidthElems.has(elem)) results[index] = {
                left: "auto",
                right: "auto"
            }; else {
                elem && elem.classList && "function" == typeof elem.classList.add && classElems.has(elem) && elem.classList.add("switch-fixed-positioning-test");
                var positions = {
                    left: styles.left,
                    right: styles.right
                };
                "-6.26129px" === positions.left && (positions.left = "auto"), "-6.26129px" === positions.right && (positions.right = "auto"), 
                "auto" !== positions.left && (elem && elem.classList && "function" == typeof elem.classList.add && elem.classList.add("switch-fixed-left-auto-test"), 
                "0px" !== styles.left && positions.left === styles.left && (positions.left = "auto"), 
                elem && elem.classList && "function" == typeof elem.classList.add && elem.classList.remove("switch-fixed-left-auto-test")), 
                elem && elem.classList && "function" == typeof elem.classList.add && elem.classList.remove("switch-fixed-positioning-test"), 
                results[index] = positions;
            }
        })), $fixedDefaultStyles.remove(), $leftAutoStyles.remove(), scrollX > 0 && window.scrollTo({
            left: scrollX
        }), results;
    }
    var normalPositions = {
        static: !0,
        relative: !0,
        sticky: !0
    };
    function getOverrideType(elem, styles) {
        if ($dockWrapper && $dockWrapper[0] && $dockWrapper[0].contains(elem)) return null;
        if (elem.classList.contains("ui-tooltip")) return null;
        if (styles || (styles = getComputedStyle(elem)), "none" === styles.display) return null;
        if (normalPositions[styles.position]) return parseInt(styles.width, 10) !== window.innerWidth || styles.display.startsWith("table") || function(elem) {
            var parent = elem.parentElement;
            if (!parent || "HTML" === parent.tagName || "HEAD" === parent.tagName) return null;
            for (;parent && "HTML" !== parent.tagName; ) {
                if (normalElemMap.has(parent) || fixedElemMap.has(parent)) return parent;
                parent = parent.parentElement;
            }
            return null;
        }(elem) ? null : {
            type: "normal",
            styles: styles,
            $elem: $(elem)
        };
        if ("auto" === styles.width) return null;
        if (function(elem) {
            if ("mail.google.com" === location.hostname && elem.classList.contains("mixmax-sidebar")) return !0;
        }(elem)) return null;
        if (function(styles) {
            if (!styles.width.endsWith("px") || !styles.height.endsWith("px")) return !1;
            var width = parseInt(styles.width, 10), height = parseInt(styles.height, 10);
            return !(width > 200) && width * height <= 25;
        }(styles)) return null;
        var $elem = $(elem);
        if ("absolute" === styles.position) {
            var fixedParent = function(elem) {
                var parent = elem.parentElement;
                if (!parent || "HTML" === parent.tagName || "HEAD" === parent.tagName) return null;
                for (;parent && "HTML" !== parent.tagName; ) {
                    var styles = getComputedStyle(parent);
                    if (fixedParentPositions[styles.position]) return parent;
                    parent = parent.parentElement;
                }
                return null;
            }(elem);
            if (fixedParent) {
                if (!fixedElemMap.has(fixedParent)) return null;
                var parentStyles = getComputedStyle(fixedParent);
                if (parseInt(styles.width, 10) <= parseInt(parentStyles.width, 10)) return null;
                fixedElemMap.set(elem, {
                    $elem: $elem,
                    styles: styles,
                    adjustWidthOnly: !0
                });
            }
        }
        return {
            type: "fixedPosition",
            styles: styles,
            $elem: $elem
        };
    }
    var fixedParentPositions = {
        relative: !0,
        absolute: !0,
        fixed: !0,
        sticky: !0
    };
    var positionTransitions = {
        left: !0,
        transform: !0,
        all: !0
    };
    function reverseOverride(attr, elem) {
        var elemId = elem.getAttribute(attr);
        if (elemId) {
            var overrideFunction = overrideFunctions[elemId], reverseFunction = reverseFunctions[elemId];
            reverseFunction && (reverseFunction(), removeOverrides(overrideFunction, reverseFunction), 
            delete overrideFunctions[elemId], delete reverseFunctions[elemId]), elem.removeAttribute(attr);
        }
    }
    var adjustAllElements = throttle(adjustAllUnthrottled, 1e3, !0);
    function adjustAllUnthrottled() {
        if (checkOverrides && shouldApplyOverrides()) {
            fixedElemMap.forEach((function(_a, elem) {
                var styles = _a.styles;
                _a.adjustWidthOnly && elem.getAttribute("switch-shift-element-right") && reverseOverride("switch-shift-element-right", elem);
                var result = getOverrideType(elem, styles);
                if (!result || "fixedPosition" !== result.type) return reverseOverride("switch-shift-element-right", elem), 
                reverseOverride("switch-adjust-element-width", elem), reverseOverride("switch-adjust-floating-right-width", elem), 
                leftPopupElems.has(elem) && (elem.removeAttribute("switch-left-popup-id"), leftPopupElems.delete(elem)), 
                fixedElemMap.delete(elem);
            })), normalElemMap.forEach((function(_a, elem) {
                var result = getOverrideType(elem, _a.styles);
                if (!result || "normal" !== result.type) return reverseOverride("switch-adjust-width-normal", elem), 
                normalElemMap.delete(elem);
            })), offScreenLeftElems.forEach((function(_a, elem) {
                var $elem = _a.$elem;
                if (!document.body.contains(elem)) return $elem.off("transitionend"), offScreenLeftElems.delete(elem);
                elem.getBoundingClientRect().right <= 50 && reverseOverride("switch-shift-element-right", elem);
            })), [].slice.call(document.body.getElementsByTagName("*")).forEach((function(elem) {
                if (!normalElemMap.has(elem) && !fixedElemMap.has(elem)) {
                    var result = getOverrideType(elem);
                    if (result) {
                        var type = result.type, styles = result.styles, $elem = result.$elem;
                        "normal" === type ? normalElemMap.set(elem, {
                            styles: styles,
                            $elem: $elem
                        }) : "fixedPosition" === type && fixedElemMap.set(elem, {
                            styles: styles,
                            $elem: $elem
                        });
                    }
                }
            }));
            var fixedElems = [];
            fixedElemMap.forEach((function(_, elem) {
                return fixedElems.push(elem);
            }));
            var positions = getFixedPositioning(fixedElems), bodyStyles = getComputedStyle(document.body);
            fixedElems.forEach((function(elem, index) {
                var _a = fixedElemMap.get(elem), styles = _a.styles, $elem = _a.$elem, adjustWidthOnly = _a.adjustWidthOnly, positioning = positions[index], offset = elem.getBoundingClientRect();
                offset.right <= 50 && function($elem, styles) {
                    var elem = $elem[0];
                    if (!offScreenLeftElems.has(elem)) {
                        var transitions = styles.transitionProperty.split(", "), durations = styles.transitionDuration.split(", "), hasOffscreenTransition = !!transitions.find((function(transition, index) {
                            return positionTransitions[transition] && parseFloat(durations[index]) > 0;
                        }));
                        offScreenLeftElems.set(elem, {
                            $elem: $elem,
                            styles: styles,
                            hasOffscreenTransition: hasOffscreenTransition
                        }), hasOffscreenTransition && ($elem.off("transitionend"), $elem.on("transitionend", (function(e) {
                            var transition = e.originalEvent.propertyName;
                            if (positionTransitions[transition]) {
                                var offset = this.getBoundingClientRect();
                                offset.right <= 50 || offset.left >= 40 || adjustShiftElement($elem, styles, {
                                    ignoreOffscreenCheck: !0
                                });
                            }
                        })));
                    }
                }($elem, styles), offset.left >= window.innerWidth && $elem.attr("switch-off-screen-element-right", "true"), 
                adjustWidthOnly || "absolute" !== styles.position && "fixed" !== styles.position || "auto" !== positioning.left && adjustShiftElement($elem, styles, {
                    bodyStyles: bodyStyles
                }), "auto" === positioning.left && "0px" === positioning.right && function($elem, styles) {
                    var elem = $elem[0];
                    if (!(elem.getAttribute("switch-adjust-floating-right-width") || elem.getAttribute("switch-adjust-element-width") || elem.getAttribute("switch-off-screen-element-right") || isElemException(elem) || parseInt(styles.width, 10) < 300)) {
                        var neighbours = new Set, offset = elem.getBoundingClientRect(), height = parseInt(styles.height, 10);
                        (function(offsetTop, height) {
                            if (height <= 600) return [ offsetTop + .25 * height, offsetTop + .5 * height, offsetTop + .75 * height ];
                            for (var result = [], i = 50; i < height; i += 150) result.push(offsetTop + i);
                            return result;
                        })(offset.top, height).forEach((function(y) {
                            var elems;
                            try {
                                elems = document.elementsFromPoint(offset.left - 1, y);
                            } catch (err) {
                                return;
                            }
                            elems.forEach((function(neighbour) {
                                "BODY" !== neighbour.tagName && "HTML" !== neighbour.tagName && neighbours.add(neighbour);
                            }));
                        }));
                        var maxOverlap = 0;
                        if (neighbours.forEach((function(neighbour) {
                            var overlap = neighbour.getBoundingClientRect().right - offset.left;
                            overlap >= 5 && overlap <= 50 && overlap > maxOverlap && (maxOverlap = overlap);
                        })), maxOverlap) {
                            var elemId = getElemId(), newWidth = "calc(" + getWidthStyle(elem, styles) + " - " + maxOverlap + "px)", $widthStyle = $('\n    <style>\n      [switch-adjust-floating-right-width="' + elemId + '"] {\n        width: ' + newWidth + " !important;\n      }\n    </style>\n  "), widthOverride = function() {
                                $head.append($widthStyle), elem.setAttribute("switch-adjust-floating-right-width", "" + elemId);
                            }, widthReverse = function() {
                                $widthStyle.remove(), elem.removeAttribute("switch-adjust-floating-right-width");
                            };
                            shouldApplyOverrides() && widthOverride(), addOverrides(widthOverride, widthReverse), 
                            overrideFunctions[elemId] = widthOverride, reverseFunctions[elemId] = widthReverse;
                        }
                    }
                }($elem, styles), ("auto" === positioning.left || elem.getAttribute("switch-shift-element-right")) && adjustWidthElement($elem, styles);
            }));
            var normalElems = [];
            normalElemMap.forEach((function(_, elem) {
                return normalElems.push(elem);
            })), normalElems.forEach((function(elem) {
                var _a = normalElemMap.get(elem), styles = _a.styles;
                !function($elem, styles) {
                    if (!exceptions$1[location.hostname]) {
                        var elem = $elem[0];
                        if (!elem.getAttribute("switch-adjust-width-normal") && !elem.getAttribute("switch-adjust-element-width")) {
                            var elemId = getElemId(), newWidth = "calc(" + getWidthStyle(elem, styles) + " - var(--sub-sidebar-width))", $widthStyle = $('\n    <style>\n      [switch-adjust-width-normal="' + elemId + '"] {\n        width: ' + newWidth + " !important;\n      }\n    </style>\n  "), widthOverride = function() {
                                $head.append($widthStyle), elem.setAttribute("switch-adjust-width-normal", "" + elemId);
                            }, widthReverse = function() {
                                $widthStyle.remove(), elem.removeAttribute("switch-adjust-width-normal");
                            };
                            shouldApplyOverrides() && widthOverride(), addOverrides(widthOverride, widthReverse), 
                            overrideFunctions[elemId] = widthOverride, reverseFunctions[elemId] = widthReverse;
                        }
                    }
                }(_a.$elem, styles);
            }));
        }
    }
    function checkLeftPopups() {
        var popupInterval = setInterval((function() {
            if (checkOverrides && shouldApplyOverrides()) {
                var elemSet = new Set, fixedParents = new Map;
                [ .2 * window.innerHeight, .4 * window.innerHeight, .6 * window.innerHeight, .8 * window.innerHeight ].forEach((function(y) {
                    var elem = document.elementFromPoint(51, y);
                    elem && elemSet.add(elem);
                })), elemSet.forEach((function(elemAtPoint) {
                    if (!($dockWrapper && $dockWrapper[0] && $dockWrapper[0].contains(elemAtPoint))) {
                        var _a = function(elem) {
                            if (!elem) return {};
                            var styles = getComputedStyle(elem);
                            if (isFixedLeft(elem, styles)) return {
                                elem: elem,
                                styles: styles
                            };
                            var parent = elem.parentElement;
                            if (!parent || "HTML" === parent.tagName || "HEAD" === parent.tagName) return {};
                            for (;parent && "BODY" !== parent.tagName; ) {
                                var parentStyles = getComputedStyle(parent);
                                if (isFixedLeft(parent, parentStyles)) return {
                                    elem: parent,
                                    styles: parentStyles
                                };
                                parent = parent.parentElement;
                            }
                            return {};
                        }(elemAtPoint), elem = _a.elem, styles = _a.styles;
                        elem && fixedParents.set(elem, {
                            styles: styles
                        });
                    }
                })), fixedParents.forEach((function(_a, elem) {
                    var styles = _a.styles;
                    if (leftPopupElems.has(elem)) {
                        var id_1 = leftPopupElems.get(elem).id;
                        if (elem.getAttribute("switch-left-popup-id") === id_1) return;
                    }
                    if (!(elem.getBoundingClientRect().left >= 40)) {
                        var $elem = $(elem);
                        fixedElemMap.set(elem, {
                            $elem: $elem,
                            styles: styles
                        }), adjustShiftElement($elem, styles), elem.getAttribute("switch-shift-element-right") && adjustWidthElement($elem, styles);
                        var id = "" + getElemId();
                        elem.setAttribute("switch-left-popup-id", id), leftPopupElems.set(elem, {
                            id: id
                        });
                    }
                }));
            }
        }), 1e3);
        addCleanupFunction((function() {
            return clearInterval(popupInterval);
        }));
    }
    function isFixedLeft(elem, styles) {
        return "fixed" === styles.position && (!elem.getAttribute("switch-fixed-left-auto") && ("auto" !== getFixedPositioning([ elem ])[0].left || (elem.setAttribute("switch-fixed-left-auto", "true"), 
        !1)));
    }
    var cleanupInterval = setInterval((function() {
        checkOverrides && leftPopupElems.forEach((function(_, elem) {
            if (!document.body.contains(elem)) return leftPopupElems.delete(elem);
        }));
    }), 6e4);
    addCleanupFunction((function() {
        return clearInterval(cleanupInterval);
    }));
    var exceptions$2 = {
        "docs.google/document": !0,
        "docs.google/spreadsheets": !0,
        "google/maps": !0,
        "kayak.com": !0,
        "messenger.com": !0,
        "portal.azure.com": !0,
        "cloud.mongodb.com": !0
    };
    function generalOverrides(overridId) {
        exceptions$2[overridId] || $((function() {
            runInSuccession((function() {
                return adjustAllElements();
            }), [ 1, 100, 500, 1e3, 2e3 ]), chrome.runtime.onMessage.addListener((function(request) {
                "preferencesUpdated" === request.message ? "dockCollapsed" === request.key && shouldApplyOverrides() && setTimeout((function() {
                    return rerunAdjust();
                }), 100) : ("tabUrlChanged" === request.message || "tabActivated" === request.message) && setTimeout((function() {
                    return rerunAdjust();
                }), 100);
            }));
            var onResize = debounce((function() {
                fixedElemMap.forEach((function(_, elem) {
                    return elem.setAttribute("switch-resize-disable-transitions", "true"), setTimeout((function() {
                        elem.removeAttribute("switch-resize-disable-transitions");
                    }), 2e3), reverseOverride("switch-shift-element-right", elem), reverseOverride("switch-adjust-element-width", elem), 
                    reverseOverride("switch-adjust-floating-right-width", elem), fixedElemMap.delete(elem);
                })), normalElemMap.forEach((function(_, elem) {
                    return elem.setAttribute("switch-resize-disable-transitions", "true"), setTimeout((function() {
                        elem.removeAttribute("switch-resize-disable-transitions");
                    }), 2e3), reverseOverride("switch-adjust-width-normal", elem), normalElemMap.delete(elem);
                })), adjustAllUnthrottled(), rerunAdjust();
            }), 1e3);
            $window.on("resize", onResize);
            var prevScroll1 = window.scrollY, onScrollThrottle = throttle((function() {
                window.scrollY !== prevScroll1 && (adjustAllElements(), prevScroll1 = window.scrollY);
            }), 1e3);
            $window.on("scroll", onScrollThrottle);
            var prevScroll2 = window.scrollY, onScrollDebounce = debounce((function() {
                window.scrollY !== prevScroll2 && (rerunAdjust(), prevScroll2 = window.scrollY);
            }), 1e3);
            $window.on("scroll", onScrollDebounce), addCleanupFunction((function() {
                $window.off("resize", onResize), $window.off("scroll", onScrollThrottle), $window.off("scroll", onScrollDebounce);
            })), checkLeftPopups();
        }));
    }
    function rerunAdjust() {
        runInSuccession((function() {
            return adjustAllElements();
        }), [ 1, 1e3, 2e3 ]);
    }
    var interval, overrides$1 = {
        amazon: function() {
            $((function() {
                var $styles = $("\n      <style>\n        html.a-js body,\n        html.a-no-js body,\n        body {\n          margin-left: var(--sub-sidebar-width) !important;\n        }\n      </style>\n    "), override = function() {
                    return $body.append($styles);
                };
                shouldApplyOverrides() && override(), addOverrides(override, (function() {
                    return $styles.remove();
                }));
            }));
        },
        "cloud.mongodb.com": function() {
            var $styles = $('\n    <style>\n      [data-testid="mongo-header-container"] {\n        width: calc(100vw - 50px) !important;\n        margin-left: 50px !important;\n      }\n\n      [data-testid="side-nav-container"] + div {\n        width: calc(100% - 50px) !important;\n        padding-left: 10px !important;\n      }\n\n      [data-testid="mongo-layout"] {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  '), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "docs.google/document": function() {
            var $styles = $("\n    <style>\n      #docs-editor {\n        padding-right: 50px !important;\n      }\n\n      #docs-side-toolbar {\n        right: 50px !important;\n      }\n    </style>\n  "), firstRun = !0, override = function() {
                if ($head.append($styles), !firstRun && !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                if ($styles.remove(), !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            })), firstRun = !1;
        },
        "docs.google/presentation": function() {
            var $styles = $("\n    <style>\n      #punch-explore-widget {\n        right: 50px !important;\n      }\n\n      #docs-editor {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  "), firstRun = !0, override = function() {
                if ($head.append($styles), !firstRun && !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                if ($styles.remove(), !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            })), firstRun = !1;
        },
        "docs.google/spreadsheets": function() {
            var $styles = $('\n    <style>\n      #docs-toolbar-wrapper {\n        box-sizing: content-box !important;\n      }\n\n      #waffle-grid-container {\n        width: calc(100vw - 50px) !important;\n      }\n\n      .input-box[style~="right:"] {\n        margin-right: 50px !important;\n      }\n\n      #grid-bottom-bar {\n        padding-right: 50px !important;\n      }\n    </style>\n  '), firstRun = !0, override = function() {
                if ($head.append($styles), !firstRun && !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                if ($styles.remove(), !isCleaningUp) {
                    var $viewButton = $("#viewModeButton");
                    clickElement($viewButton), clickElement($viewButton);
                }
            })), firstRun = !1;
        },
        docusign: function() {
            var $styles = $("\n    <style>\n      .hero-meerkat-home::before {\n        width: calc(100% - 50px) !important;\n      }\n    </style>\n  "), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "facebook.com": function() {
            var $styles = $('\n    <style>\n      div[aria-label="Dialog content"] [switch-adjust-element-width] > div:nth-child(2) {\n        width: 350px !important;\n      }\n\n      .uiStreamStory[id] {\n        width: 350px !important;\n      }\n\n      .uiStreamStory[id] > div:first-child {\n        width: 326px !important;\n      }\n\n      #pagelet_bluebar [role="banner"] {\n        width: calc(100vw - 50px) !important;\n      }\n    </style>\n  '), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "google/maps": function() {
            var mainMapsView = !location.pathname.includes("/uv"), $styles = $("\n    <style>\n      " + (mainMapsView ? ".widget-pane," : "") + "\n      .widget-settings-pane,\n      #loading-pane-div,\n      .widget-homescreen,\n      .widget-minimap {\n        margin-left: 50px !important;\n      }\n\n      #omnibox {\n        margin-left: 58px !important;\n      }\n    </style>\n  "), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "kayak.com": function() {
            var $styles = $("\n    <style>\n      #mapViewBodyMapWrapper.js-pinned,\n      .Hotels-Results-HotelRightRail {\n        margin-left: 50px !important;\n      }\n    </style>\n  "), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "mail.google": function() {
            var $gmailStyle = $("\n    <style>\n      body > div > .nH {\n        padding-right: 50px !important;\n        box-sizing: border-box !important;\n      }\n    </style>\n  "), override = function() {
                return $head.append($gmailStyle);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $gmailStyle.remove();
            }));
        },
        "messenger.com": function() {
            var $styles = $('\n    <style>\n      .uiLayer [role="presentation"][style] {\n        width: calc(100% - 50px) !important;\n        margin-left: 50px !important;\n      }\n    </style>\n  '), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "myworkday.com": function() {
            var $styles = $('\n    <style>\n      div[aria-label="navigation pane"] {\n        width: 334px !important;\n        min-width: 334px !important;\n      }\n    </style>\n  '), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "portal.azure.com": function() {
            var $styles = $("\n    <style>\n      #web-container {\n        width: calc(100vw - 50px) !important;\n        left: 50px !important;\n      }\n    </style>\n  "), override = function() {
                return $head.append($styles);
            };
            shouldApplyOverrides() && override(), addOverrides(override, (function() {
                return $styles.remove();
            }));
        },
        "youtube.com": function() {
            var previousCollapsed, $styles = $("\n    <style>\n      #masthead {\n        display: block !important;\n      }\n\n      @media (min-width: 1000px) and (max-width: 1749px) {\n        #secondary {\n          width: 352px !important;\n          min-width: 250px !important;\n        }\n      }\n\n      @media (min-width: 1750px) and (max-width: 1800px) {\n        #secondary {\n          width: calc(402px - 1800px + 100vw) !important;\n          min-width: calc(300px - 1800px + 100vw) !important;\n        }\n      }\n\n      @media (max-width: 999px) {\n        #player {\n          margin-left: -24px !important;\n          margin-right: -24px !important;\n        }\n      }\n    </style>\n  "), style = $("\n    <style> #switch-dock-wrapper{display: none !important;}  [is-watch-page][switch-shift-element-right] {margin-left: 0px !important;} [is-watch-page][switch-adjust-element-width] {width:100% !important; scrollbar-width: none !important;} \n        [is-watch-page]::-webkit-scrollbar {width: 0;} </style> \n"), override = function() {
                "/watch" === location.pathname && $head.append($styles);
            }, reverse = function() {
                $styles.remove();
            };
            shouldApplyOverrides() && override(), addOverrides(override, reverse);
            var adjustOnFullscreen = function() {
                if (document.fullscreenElement) return $head.append(style), $dockWrapper.addClass("switch-full-screen-dock"), 
                void ((previousCollapsed = isDockCollapsed()) || toggleDockCollapsed());
                style.remove(), $dockWrapper.removeClass("switch-full-screen-dock"), !previousCollapsed && isDockCollapsed() && setTimeout((function() {
                    return toggleDockCollapsed();
                }), 500);
            };
            document.addEventListener("fullscreenchange", adjustOnFullscreen, !0), addCleanupFunction((function() {
                document.removeEventListener("fullscreenchange", adjustOnFullscreen, !0);
            })), chrome.runtime.onMessage.addListener((function(request) {
                "tabUrlChanged" === request.message && setTimeout((function() {
                    shouldApplyOverrides() && (document.fullscreenElement || (reverse(), override()));
                }), 100);
            }));
        }
    };
    function applyOverrides$1(overrideId, remoteExclusions, remoteOverrides) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(_a) {
                return location.href.startsWith("chrome-extension") || (bodyPosition(), generalOverrides(overrideId), 
                overrides$1[overrideId] && !remoteExclusions[overrideId] && overrides$1[overrideId](), 
                remoteOverrides[overrideId] && function(styles) {
                    if (styles) {
                        styles = styles.replace(/<\/?style>/gi, "");
                        var $styles = $("<style>" + styles + "</style>"), override = function() {
                            return $head.append($styles);
                        };
                        shouldApplyOverrides() && override(), addOverrides(override, (function() {
                            return $styles.remove();
                        }));
                    }
                }(remoteOverrides[overrideId])), [ 2 ];
            }));
        }));
    }
    !function() {
        __awaiter(this, void 0, void 0, (function() {
            function loadDock() {
                setDockWrapper($(".app-sidebar-root"));
            }
            var _a;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, (dockExists = function() {
                        return $(".app-sidebar-root").length > 0 && $("#switch-bottom-menu").length > 0;
                    }, new Promise((function(resolve) {
                        if (!dockExists()) return resolve(!0);
                        var attempts = 10, dockCleanedUp = !1;
                        addCleanupFunction((function() {
                            return dockCleanedUp = !0;
                        }));
                        var interval = setInterval((function() {
                            return dockCleanedUp || --attempts < 0 ? (clearInterval(interval), resolve(!1)) : dockExists() ? void 0 : (clearInterval(interval), 
                            resolve(!0));
                        }), 1e3);
                    }))) ];

                  case 1:
                    return _b.sent() ? "finance.yahoo.com" !== location.hostname || "/" !== location.pathname ? [ 3, 3 ] : [ 4, new Promise((function(resolve) {
                        setTimeout((function() {
                            return resolve();
                        }), 3e3);
                    })) ] : [ 2 ];

                  case 2:
                    _b.sent(), _b.label = 3;

                  case 3:
                    return [ 4, new Promise((function(resolve) {
                        chrome.runtime.onMessage.addListener((function onRuntimeInitialized(request, sender, sendResponse) {
                            "runtimeInitializedResult" === request.message && (chrome.runtime.onMessage.removeListener(onRuntimeInitialized), 
                            clearInterval(interval), resolve());
                        })), interval = setInterval((function() {
                            try {
                                chrome.runtime.sendMessage({
                                    message: "runtimeInitialized"
                                });
                            } catch (err) {
                                err && !/extension context invalidated/i.test(err.message) || clearInterval(interval);
                            }
                        }), 100), chrome.runtime.sendMessage({
                            message: "runtimeInitialized"
                        });
                    })) ];

                  case 4:
                    return _b.sent(), function() {
                        __awaiter(this, void 0, void 0, (function() {
                            var _a;
                            return __generator(this, (function(_b) {
                                switch (_b.label) {
                                  case 0:
                                    return _a = setState, [ 4, new Promise((function(resolve) {
                                        chrome.runtime.onMessage.addListener((function onInitialState(request, sender, sendResponse) {
                                            "getInitialStateResult" === request.message && (chrome.runtime.onMessage.removeListener(onInitialState), 
                                            setCheckOverrides(request.isActiveTab), resolve(request.state));
                                        })), chrome.runtime.sendMessage({
                                            message: "getInitialState"
                                        });
                                    })) ];

                                  case 1:
                                    return _a.apply(void 0, [ _b.sent() ]), [ 2 ];
                                }
                            }));
                        }));
                    }(), _a = setPreferences, [ 4, new Promise((function(resolve) {
                        chrome.runtime.sendMessage({
                            message: "getInitialPreferences"
                        }, (function(prefs) {
                            return resolve(prefs);
                        }));
                    })) ];

                  case 5:
                    return _a.apply(void 0, [ _b.sent() ]), active = shouldApplyOverrides(), active, 
                    removeSwitchOnUpgrade(), Promise.all([ getOverrideId(), new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_remoteExclusions", "_switch_remoteOverrides" ], (function(result) {
                            var exclusions = result._switch_remoteExclusions, overrides = result._switch_remoteOverrides;
                            return exclusions && "object" == typeof exclusions || (exclusions = {}), overrides && "object" == typeof overrides || (overrides = {}), 
                            resolve({
                                exclusions: exclusions,
                                overrides: overrides
                            });
                        }));
                    })), waitForHead() ]).then((function(_a) {
                        var overrideId = _a[0], remote = _a[1];
                        applyOverrides$1(overrideId, remote.exclusions, remote.overrides);
                    })), Promise.all([ new Promise((function(resolve) {
                        chrome.storage.local.get([ "_switch_remoteFavicons" ], (function(result) {
                            var favicons = result._switch_remoteFavicons;
                            return favicons && "object" == typeof favicons || (favicons = {}), resolve({
                                favicons: favicons
                            });
                        }));
                    })), new Promise((function(resolve, reject) {
                        if ($body) return resolve();
                        var count = 0, interval = setInterval((function() {
                            return count > 5e3 ? (clearInterval(interval), reject({
                                err: "<body> did not load."
                            })) : (++count, document.body ? (clearInterval(interval), setBody($(document.body)), 
                            resolve()) : void 0);
                        }), 1);
                    })) ]).then((function(_a) {
                        var _remoteFavicons, remote = _a[0];
                        _remoteFavicons = remote.favicons, _remoteFavicons, loadDock(), addCleanupFunction((function() {
                            $dockWrapper && $dockWrapper.length > 0 && $dockWrapper.remove(), setDockWrapper(null);
                        })), function(func, times) {
                            void 0 === times && (times = defaultTimes);
                            var timeouts = [];
                            times.forEach((function(time) {
                                var timeout = setTimeout((function() {
                                    func() && timeouts.forEach(clearTimeout);
                                }), time);
                                timeouts.push(timeout);
                            }));
                        }((function() {
                            dockMounted || (loadDock(), dockMounted = !0);
                        }), [ 100, 200, 400, 800, 1600, 2500 ]);
                    })), initSessions(), new MutationObserver((function() {
                        $body && $dockWrapper && 0 === $body.parent().length && $body.length > 0 && $dockWrapper.length > 0 && setBody($("body"));
                    })).observe($html.get(0), {
                        childList: !0
                    }), [ 2 ];
                }
                var active, dockExists;
            }));
        }));
    }();
}();