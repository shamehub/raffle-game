!function t(e, n, i) {
	function r(a, s) {
		if (!n[a]) {
			if (!e[a]) {
				var c = "function" == typeof require && require;
				if (!s && c)
					return c(a, !0);
				if (o)
					return o(a, !0);
				var u = new Error("Cannot find module '" + a + "'");
				throw u.code = "MODULE_NOT_FOUND",
				u
			}
			var l = n[a] = {
				exports: {}
			};
			e[a][0].call(l.exports, function(t) {
				var n = e[a][1][t];
				return r(
					n
					? n
					: t)
			}, l, l.exports, t, e, n, i)
		}
		return n[a].exports
	}
	for (var o = "function" == typeof require && require, a = 0; a < i.length; a++)
		r(i[a]);
	return r
}({
	1: [
		function(t, e, n) {
			t("../../unit/lib/lib-zepto/1.0.0/zepto.min"),
			t("../../unit/common/js/format/1.0.0"),
			window.FastClick = t("../../unit/lib/lib-fastclick/1.0.0/fastclick")
		}, {
			"../../unit/common/js/format/1.0.0": 2,
			"../../unit/lib/lib-fastclick/1.0.0/fastclick": 3,
			"../../unit/lib/lib-zepto/1.0.0/zepto.min": 4
		}
	],
	2: [
		function(t, e, n) {
			!function(t, e) {
				var n = t.documentElement,
					i = navigator.userAgent.match(/iphone|ipod|ipad/gi),
					r = i
						? Math.min(e.devicePixelRatio, 3)
						: 1,
					o = "orientationchange" in window
						? "orientationchange"
						: "resize";
				n.dataset.dpr = r;
				for (var a, s, c = !1, u = t.getElementsByTagName("meta"), l = 0; l < u.length; l++)
					s = u[l],
					"viewport" == s.name && (c = !0, a = s);
				if (c)
					a.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no";
				else {
					var u = t.createElement("meta");
					u.name = "viewport",
					u.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no",
					n.firstElementChild.appendChild(u)
				}
				var f = function() {
					var t = n.clientWidth;
					t / r > 640 && (t = 640 * r),
					window.remScale = t / 640,
					n.style.fontSize = 200 * (t / 640) + "px"
				};
				f(),
				t.addEventListener && e.addEventListener(o, f, !1)
			}(document, window)
		}, {}
	],
	3: [
		function(t, e, n) {
			!function() {
				"use strict";
				function t(e, n) {
					function r(t, e) {
						return function() {
							return t.apply(e, arguments)
						}
					}
					var o;
					if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
						for (var a = [
							"onMouse",
							"onClick",
							"onTouchStart",
							"onTouchMove",
							"onTouchEnd",
							"onTouchCancel"
						], s = this, c = 0, u = a.length; c < u; c++)
							s[a[c]] = r(s[a[c]], s);
						i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)),
						e.addEventListener("click", this.onClick, !0),
						e.addEventListener("touchstart", this.onTouchStart, !1),
						e.addEventListener("touchmove", this.onTouchMove, !1),
						e.addEventListener("touchend", this.onTouchEnd, !1),
						e.addEventListener("touchcancel", this.onTouchCancel, !1),
						Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
							var r = Node.prototype.removeEventListener;
							"click" === t
								? r.call(e, t, n.hijacked || n, i)
								: r.call(e, t, n, i)
						}, e.addEventListener = function(t, n, i) {
							var r = Node.prototype.addEventListener;
							"click" === t
								? r.call(e, t, n.hijacked || (n.hijacked = function(t) {
									t.propagationStopped || n(t)
								}), i)
								: r.call(e, t, n, i)
						}),
						"function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function(t) {
							o(t)
						}, !1), e.onclick = null)
					}
				}
				var n = navigator.userAgent.indexOf("Windows Phone") >= 0,
					i = navigator.userAgent.indexOf("Android") > 0 && !n,
					r = /iP(ad|hone|od)/.test(navigator.userAgent) && !n,
					o = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
					a = r && /OS [6-7]_\d/.test(navigator.userAgent),
					s = navigator.userAgent.indexOf("BB10") > 0;
				t.prototype.needsClick = function(t) {
					switch (t.nodeName.toLowerCase()) {
						case "button":
						case "select":
						case "textarea":
							if (t.disabled)
								return !0;
							break;
						case "input":
							if (r && "file" === t.type || t.disabled)
								return !0;
							break;
						case "label":
						case "iframe":
						case "video":
							return !0
					}
					return /\bneedsclick\b/.test(t.className)
				},
				t.prototype.needsFocus = function(t) {
					switch (t.nodeName.toLowerCase()) {
						case "textarea":
							return !0;
						case "select":
							return !i;
						case "input":
							switch (t.type) {
								case "button":
								case "checkbox":
								case "file":
								case "image":
								case "radio":
								case "submit":
									return !1
							}
							return !t.disabled && !t.readOnly;
						default:
							return /\bneedsfocus\b/.test(t.className)
					}
				},
				t.prototype.sendClick = function(t, e) {
					var n,
						i;
					document.activeElement && document.activeElement !== t && document.activeElement.blur(),
					i = e.changedTouches[0],
					n = document.createEvent("MouseEvents"),
					n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
					n.forwardedTouchEvent = !0,
					t.dispatchEvent(n)
				},
				t.prototype.determineEventType = function(t) {
					return i && "select" === t.tagName.toLowerCase()
						? "mousedown"
						: "click"
				},
				t.prototype.focus = function(t) {
					var e;
					r && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type
						? (e = t.value.length, t.setSelectionRange(e, e))
						: t.focus()
				},
				t.prototype.updateScrollParent = function(t) {
					var e,
						n;
					if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
						n = t;
						do {
							if (n.scrollHeight > n.offsetHeight) {
								e = n,
								t.fastClickScrollParent = n;
								break
							}
							n = n.parentElement
						} while (n)
					}
					e && (e.fastClickLastScrollTop = e.scrollTop)
				},
				t.prototype.getTargetElementFromEventTarget = function(t) {
					return t.nodeType === Node.TEXT_NODE
						? t.parentNode
						: t
				},
				t.prototype.onTouchStart = function(t) {
					var e,
						n,
						i;
					if (t.targetTouches.length > 1)
						return !0;
					if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], r) {
						if (i = window.getSelection(), i.rangeCount && !i.isCollapsed)
							return !0;
						if (!o) {
							if (n.identifier && n.identifier === this.lastTouchIdentifier)
								return t.preventDefault(),
								!1;
							this.lastTouchIdentifier = n.identifier,
							this.updateScrollParent(e)
						}
					}
					return this.trackingClick = !0,
					this.trackingClickStart = t.timeStamp,
					this.targetElement = e,
					this.touchStartX = n.pageX,
					this.touchStartY = n.pageY,
					t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
					!0
				},
				t.prototype.touchHasMoved = function(t) {
					var e = t.changedTouches[0],
						n = this.touchBoundary;
					return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
				},
				t.prototype.onTouchMove = function(t) {
					return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
				},
				t.prototype.findControl = function(t) {
					return void 0 !== t.control
						? t.control
						: t.htmlFor
							? document.getElementById(t.htmlFor)
							: t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
				},
				t.prototype.onTouchEnd = function(t) {
					var e,
						n,
						s,
						c,
						u,
						l = this.targetElement;
					if (!this.trackingClick)
						return !0;
					if (t.timeStamp - this.lastClickTime < this.tapDelay)
						return this.cancelNextClick = !0,
						!0;
					if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
						return !0;
					if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (u = t.changedTouches[0], l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = l.tagName.toLowerCase(), "label" === s) {
						if (e = this.findControl(l)) {
							if (this.focus(l), i)
								return !1;
							l = e
						}
					} else if (this.needsFocus(l))
						return t.timeStamp - n > 100 || r && window.top !== window && "input" === s
							? (this.targetElement = null, !1)
							: (this.focus(l), this.sendClick(l, t), r && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
					return !(!r || o || (c = l.fastClickScrollParent, !c || c.fastClickLastScrollTop === c.scrollTop)) || (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1)
				},
				t.prototype.onTouchCancel = function() {
					this.trackingClick = !1,
					this.targetElement = null
				},
				t.prototype.onMouse = function(t) {
					return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (
						t.stopImmediatePropagation
						? t.stopImmediatePropagation()
						: t.propagationStopped = !0,
					t.stopPropagation(),
					t.preventDefault(),
					!1))))
				},
				t.prototype.onClick = function(t) {
					var e;
					return this.trackingClick
						? (this.targetElement = null, this.trackingClick = !1, !0)
						: "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
				},
				t.prototype.destroy = function() {
					var t = this.layer;
					i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
					t.removeEventListener("click", this.onClick, !0),
					t.removeEventListener("touchstart", this.onTouchStart, !1),
					t.removeEventListener("touchmove", this.onTouchMove, !1),
					t.removeEventListener("touchend", this.onTouchEnd, !1),
					t.removeEventListener("touchcancel", this.onTouchCancel, !1)
				},
				t.notNeeded = function(t) {
					var e,
						n,
						r,
						o;
					if ("undefined" == typeof window.ontouchstart)
						return !0;
					if (n = + (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
						if (!i)
							return !0;
						if (e = document.querySelector("meta[name=viewport]")) {
							if (e.content.indexOf("user-scalable=no") !== -1)
								return !0;
							if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
								return !0
						}
					}
					if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
						if (e.content.indexOf("user-scalable=no") !== -1)
							return !0;
						if (document.documentElement.scrollWidth <= window.outerWidth)
							return !0
					}
					return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = + (/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
				},
				t.attach = function(e, n) {
					return new t(e, n)
				},
				"function" == typeof define && "object" == typeof define.amd && define.amd
					? define(function() {
						return t
					})
					: "undefined" != typeof e && e.exports
						? (e.exports = t.attach, e.exports.FastClick = t)
						: window.FastClick = t
			}()
		}, {}
	],
	4: [
		function(t, e, n) {
			var i = function() {
				function t(t) {
					return null == t
						? t + ""
						: W[Y.call(t)] || "object"
				}
				function e(e) {
					return "function" == t(e)
				}
				function n(t) {
					return null != t && t == t.window
				}
				function i(t) {
					return null != t && t.nodeType == t.DOCUMENT_NODE
				}
				function r(e) {
					return "object" == t(e)
				}
				function o(t) {
					return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
				}
				function a(t) {
					return "number" == typeof t.length
				}
				function s(t) {
					return L.call(t, function(t) {
						return null != t
					})
				}
				function c(t) {
					return t.length > 0
						? C.fn.concat.apply([], t)
						: t
				}
				function u(t) {
					return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
				}
				function l(t) {
					return t in A
						? A[t]
						: A[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
				}
				function f(t, e) {
					return "number" != typeof e || M[u(t)]
						? e
						: e + "px"
				}
				function h(t) {
					var e,
						n;
					return P[t] || (e = O.createElement(t), O.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), P[t] = n),
					P[t]
				}
				function p(t) {
					return "children" in t
						? j.call(t.children)
						: C.map(t.childNodes, function(t) {
							return 1 == t.nodeType
								? t
								: x
						})
				}
				function d(t, e, n) {
					for (b in e)
						n && (o(e[b]) || G(e[b]))
							? (o(e[b]) && !o(t[b]) && (t[b] = {}), G(e[b]) && !G(t[b]) && (t[b] = []), d(t[b], e[b], n))
							: e[b] !== x && (t[b] = e[b])
					}
				function m(t, e) {
					return null == e
						? C(t)
						: C(t).filter(e)
				}
				function v(t, n, i, r) {
					return e(n)
						? n.call(t, i, r)
						: n
				}
				function g(t, e, n) {
					null == n
						? t.removeAttribute(e)
						: t.setAttribute(e, n)
				}
				function y(t, e) {
					var n = t.className || "",
						i = n && n.baseVal !== x;
					return e === x
						? i
							? n.baseVal
							: n
						: (
							i
							? n.baseVal = e
							: t.className = e,
						x)
				}
				function w(t) {
					var e;
					try {
						return t
							? "true" == t || "false" != t && (
								"null" == t
								? null
								: /^0/.test(t) || isNaN(e = Number(t))
									? /^[\[\{]/.test(t)
										? C.parseJSON(t)
										: t
									: e)
							: t
					} catch (n) {
						return t
					}
				}
				function E(t, e) {
					e(t);
					for (var n = 0, i = t.childNodes.length; i > n; n++)
						E(t.childNodes[n], e)
				}
				var x,
					b,
					C,
					T,
					k,
					S,
					N = [],
					j = N.slice,
					L = N.filter,
					O = window.document,
					P = {},
					A = {},
					M = {
						"column-count": 1,
						columns: 1,
						"font-weight": 1,
						"line-height": 1,
						opacity: 1,
						"z-index": 1,
						zoom: 1
					},
					D = /^\s*<(\w+|!)[^>]*>/,
					_ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
					F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
					q = /^(?:body|html)$/i,
					$ = /([A-Z])/g,
					z = [
						"val",
						"css",
						"html",
						"text",
						"data",
						"width",
						"height",
						"offset"
					],
					R = [
						"after", "prepend", "before", "append"
					],
					I = O.createElement("table"),
					X = O.createElement("tr"),
					Z = {
						tr: O.createElement("tbody"),
						tbody: I,
						thead: I,
						tfoot: I,
						td: X,
						th: X,
						"*": O.createElement("div")
					},
					H = /complete|loaded|interactive/,
					B = /^[\w-]*$/,
					W = {},
					Y = W.toString,
					V = {},
					U = O.createElement("div"),
					J = {
						tabindex: "tabIndex",
						readonly: "readOnly",
						"for": "htmlFor",
						"class": "className",
						maxlength: "maxLength",
						cellspacing: "cellSpacing",
						cellpadding: "cellPadding",
						rowspan: "rowSpan",
						colspan: "colSpan",
						usemap: "useMap",
						frameborder: "frameBorder",
						contenteditable: "contentEditable"
					},
					G = Array.isArray || function(t) {
						return t instanceof Array
					};
				return V.matches = function(t, e) {
					if (!e || !t || 1 !== t.nodeType)
						return !1;
					var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
					if (n)
						return n.call(t, e);
					var i,
						r = t.parentNode,
						o = !r;
					return o && (r = U).appendChild(t),
					i = ~V.qsa(r, e).indexOf(t),
					o && U.removeChild(t),
					i
				},
				k = function(t) {
					return t.replace(/-+(.)?/g, function(t, e) {
						return e
							? e.toUpperCase()
							: ""
					})
				},
				S = function(t) {
					return L.call(t, function(e, n) {
						return t.indexOf(e) == n
					})
				},
				V.fragment = function(t, e, n) {
					var i,
						r,
						a;
					return _.test(t) && (i = C(O.createElement(RegExp.$1))),
					i || (t.replace && (t = t.replace(F, "<$1></$2>")), e === x && (e = D.test(t) && RegExp.$1), e in Z || (e = "*"), a = Z[e], a.innerHTML = "" + t, i = C.each(j.call(a.childNodes), function() {
						a.removeChild(this)
					})),
					o(n) && (r = C(i), C.each(n, function(t, e) {
						z.indexOf(t) > -1
							? r[t](e)
							: r.attr(t, e)
					})),
					i
				},
				V.Z = function(t, e) {
					return t = t || [],
					t.__proto__ = C.fn,
					t.selector = e || "",
					t
				},
				V.isZ = function(t) {
					return t instanceof V.Z
				},
				V.init = function(t, n) {
					var i;
					if (!t)
						return V.Z();
					if ("string" == typeof t)
						if (t = t.trim(), "<" == t[0] && D.test(t))
							i = V.fragment(t, RegExp.$1, n),
							t = null;
						else {
							if (n !== x)
								return C(n).find(t);
							i = V.qsa(O, t)
						}
					else {
						if (e(t))
							return C(O).ready(t);
						if (V.isZ(t))
							return t;
						if (G(t))
							i = s(t);
						else if (r(t))
							i = [t],
							t = null;
						else if (D.test(t))
							i = V.fragment(t.trim(), RegExp.$1, n),
							t = null;
						else {
							if (n !== x)
								return C(n).find(t);
							i = V.qsa(O, t)
						}
					}
					return V.Z(i, t)
				},
				C = function(t, e) {
					return V.init(t, e)
				},
				C.extend = function(t) {
					var e,
						n = j.call(arguments, 1);
					return "boolean" == typeof t && (e = t, t = n.shift()),
					n.forEach(function(n) {
						d(t, n, e)
					}),
					t
				},
				V.qsa = function(t, e) {
					var n,
						r = "#" == e[0],
						o = !r && "." == e[0],
						a = r || o
							? e.slice(1)
							: e,
						s = B.test(a);
					return i(t) && s && r
						? (n = t.getElementById(a))
							? [n]
							: []
						: 1 !== t.nodeType && 9 !== t.nodeType
							? []
							: j.call(
								s && !r
								? o
									? t.getElementsByClassName(a)
									: t.getElementsByTagName(e)
								: t.querySelectorAll(e))
				},
				C.contains = O.documentElement.contains
					? function(t, e) {
						return t !== e && t.contains(e)
					}
					: function(t, e) {
						for (; e && (e = e.parentNode);)
							if (e === t)
								return !0;
					return !1
					},
				C.type = t,
				C.isFunction = e,
				C.isWindow = n,
				C.isArray = G,
				C.isPlainObject = o,
				C.isEmptyObject = function(t) {
					var e;
					for (e in t)
						return !1;
					return !0
				},
				C.inArray = function(t, e, n) {
					return N.indexOf.call(e, t, n)
				},
				C.camelCase = k,
				C.trim = function(t) {
					return null == t
						? ""
						: String.prototype.trim.call(t)
				},
				C.uuid = 0,
				C.support = {},
				C.expr = {},
				C.map = function(t, e) {
					var n,
						i,
						r,
						o = [];
					if (a(t))
						for (i = 0; t.length > i; i++)
							n = e(t[i], i),
							null != n && o.push(n);
				else
						for (r in t)
							n = e(t[r], r),
							null != n && o.push(n);
				return c(o)
				},
				C.each = function(t, e) {
					var n,
						i;
					if (a(t)) {
						for (n = 0; t.length > n; n++)
							if (e.call(t[n], n, t[n]) === !1)
								return t
						}
					else
						for (i in t)
							if (e.call(t[i], i, t[i]) === !1)
								return t;
				return t
				},
				C.grep = function(t, e) {
					return L.call(t, e)
				},
				window.JSON && (C.parseJSON = JSON.parse),
				C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
					W["[object " + e + "]"] = e.toLowerCase()
				}),
				C.fn = {
					forEach: N.forEach,
					reduce: N.reduce,
					push: N.push,
					sort: N.sort,
					indexOf: N.indexOf,
					concat: N.concat,
					map: function(t) {
						return C(C.map(this, function(e, n) {
							return t.call(e, n, e)
						}))
					},
					slice: function() {
						return C(j.apply(this, arguments))
					},
					ready: function(t) {
						return H.test(O.readyState) && O.body
							? t(C)
							: O.addEventListener("DOMContentLoaded", function() {
								t(C)
							}, !1),
						this
					},
					get: function(t) {
						return t === x
							? j.call(this)
							: this[
								t >= 0
									? t
									: t + this.length
							]
					},
					toArray: function() {
						return this.get()
					},
					size: function() {
						return this.length
					},
					remove: function() {
						return this.each(function() {
							null != this.parentNode && this.parentNode.removeChild(this)
						})
					},
					each: function(t) {
						return N.every.call(this, function(e, n) {
							return t.call(e, n, e) !== !1
						}),
						this
					},
					filter: function(t) {
						return e(t)
							? this.not(this.not(t))
							: C(L.call(this, function(e) {
								return V.matches(e, t)
							}))
					},
					add: function(t, e) {
						return C(S(this.concat(C(t, e))))
					},
					is: function(t) {
						return this.length > 0 && V.matches(this[0], t)
					},
					not: function(t) {
						var n = [];
						if (e(t) && t.call !== x)
							this.each(function(e) {
								t.call(this, e) || n.push(this)
							});
						else {
							var i = "string" == typeof t
								? this.filter(t)
								: a(t) && e(t.item)
									? j.call(t)
									: C(t);
							this.forEach(function(t) {
								0 > i.indexOf(t) && n.push(t)
							})
						}
						return C(n)
					},
					has: function(t) {
						return this.filter(function() {
							return r(t)
								? C.contains(this, t)
								: C(this).find(t).size()
						})
					},
					eq: function(t) {
						return -1 === t
							? this.slice(t)
							: this.slice(t, + t + 1)
					},
					first: function() {
						var t = this[0];
						return t && !r(t)
							? t
							: C(t)
					},
					last: function() {
						var t = this[this.length - 1];
						return t && !r(t)
							? t
							: C(t)
					},
					find: function(t) {
						var e,
							n = this;
						return e = t
							? "object" == typeof t
								? C(t).filter(function() {
									var t = this;
									return N.some.call(n, function(e) {
										return C.contains(e, t)
									})
								})
								: 1 == this.length
									? C(V.qsa(this[0], t))
									: this.map(function() {
										return V.qsa(this, t)
									})
							: []
					},
					closest: function(t, e) {
						var n = this[0],
							r = !1;
						for ("object" == typeof t && (r = C(t)); n && !(
							r
							? r.indexOf(n) >= 0
							: V.matches(n, t));)
							n = n !== e && !i(n) && n.parentNode;
						return C(n)
					},
					parents: function(t) {
						for (var e = [], n = this; n.length > 0;)
							n = C.map(n, function(t) {
								return (t = t.parentNode) && !i(t) && 0 > e.indexOf(t)
									? (e.push(t), t)
									: x
							});
						return m(e, t)
					},
					parent: function(t) {
						return m(S(this.pluck("parentNode")), t)
					},
					children: function(t) {
						return m(this.map(function() {
							return p(this)
						}), t)
					},
					contents: function() {
						return this.map(function() {
							return j.call(this.childNodes)
						})
					},
					siblings: function(t) {
						return m(this.map(function(t, e) {
							return L.call(p(e.parentNode), function(t) {
								return t !== e
							})
						}), t)
					},
					empty: function() {
						return this.each(function() {
							this.innerHTML = ""
						})
					},
					pluck: function(t) {
						return C.map(this, function(e) {
							return e[t]
						})
					},
					show: function() {
						return this.each(function() {
							"none" == this.style.display && (this.style.display = ""),
							"none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
						})
					},
					replaceWith: function(t) {
						return this.before(t).remove()
					},
					wrap: function(t) {
						var n = e(t);
						if (this[0] && !n)
							var i = C(t).get(0),
								r = i.parentNode || this.length > 1;
						return this.each(function(e) {
							C(this).wrapAll(
								n
								? t.call(this, e)
								: r
									? i.cloneNode(!0)
									: i)
						})
					},
					wrapAll: function(t) {
						if (this[0]) {
							C(this[0]).before(t = C(t));
							for (var e; (e = t.children()).length;)
								t = e.first();
							C(t).append(this)
						}
						return this
					},
					wrapInner: function(t) {
						var n = e(t);
						return this.each(function(e) {
							var i = C(this),
								r = i.contents(),
								o = n
									? t.call(this, e)
									: t;
							r.length
								? r.wrapAll(o)
								: i.append(o)
						})
					},
					unwrap: function() {
						return this.parent().each(function() {
							C(this).replaceWith(C(this).children())
						}),
						this
					},
					clone: function() {
						return this.map(function() {
							return this.cloneNode(!0)
						})
					},
					hide: function() {
						return this.css("display", "none")
					},
					toggle: function(t) {
						return this.each(function() {
							var e = C(this);
							(
								t === x
								? "none" == e.css("display")
								: t)
								? e.show()
								: e.hide()
						})
					},
					prev: function(t) {
						return C(this.pluck("previousElementSibling")).filter(t || "*")
					},
					next: function(t) {
						return C(this.pluck("nextElementSibling")).filter(t || "*")
					},
					html: function(t) {
						return 0 in arguments
							? this.each(function(e) {
								var n = this.innerHTML;
								C(this).empty().append(v(this, t, e, n))
							})
							: 0 in this
								? this[0].innerHTML
								: null
					},
					text: function(t) {
						return 0 in arguments
							? this.each(function(e) {
								var n = v(this, t, e, this.textContent);
								this.textContent = null == n
									? ""
									: "" + n
							})
							: 0 in this
								? this[0].textContent
								: null
					},
					attr: function(t, e) {
						var n;
						return "string" != typeof t || 1 in arguments
							? this.each(function(n) {
								if (1 === this.nodeType)
									if (r(t))
										for (b in t)
											g(this, b, t[b]);
							else
									g(this, t, v(this, e, n, this.getAttribute(t)))
							})
							: this.length && 1 === this[0].nodeType
								? !(n = this[0].getAttribute(t)) && t in this[0]
									? this[0][t]
									: n
								: x
					},
					removeAttr: function(t) {
						return this.each(function() {
							1 === this.nodeType && g(this, t)
						})
					},
					prop: function(t, e) {
						return t = J[t] || t,
						1 in arguments
							? this.each(function(n) {
								this[t] = v(this, e, n, this[t])
							})
							: this[0] && this[0][t]
					},
					data: function(t, e) {
						var n = "data-" + t.replace($, "-$1").toLowerCase(),
							i = 1 in arguments
								? this.attr(n, e)
								: this.attr(n);
						return null !== i
							? w(i)
							: x
					},
					val: function(t) {
						return 0 in arguments
							? this.each(function(e) {
								this.value = v(this, t, e, this.value)
							})
							: this[0] && (
								this[0].multiple
								? C(this[0]).find("option").filter(function() {
									return this.selected
								}).pluck("value")
								: this[0].value)
					},
					offset: function(t) {
						if (t)
							return this.each(function(e) {
								var n = C(this),
									i = v(this, t, e, n.offset()),
									r = n.offsetParent().offset(),
									o = {
										top: i.top - r.top,
										left: i.left - r.left
									};
								"static" == n.css("position") && (o.position = "relative"),
								n.css(o)
							});
						if (!this.length)
							return null;
						var e = this[0].getBoundingClientRect();
						return {
							left: e.left + window.pageXOffset,
							top: e.top + window.pageYOffset,
							width: Math.round(e.width),
							height: Math.round(e.height)
						}
					},
					css: function(e, n) {
						if (2 > arguments.length) {
							var i = this[0],
								r = getComputedStyle(i, "");
							if (!i)
								return;
							if ("string" == typeof e)
								return i.style[k(e)] || r.getPropertyValue(e);
							if (G(e)) {
								var o = {};
								return C.each(e, function(t, e) {
									o[e] = i.style[k(e)] || r.getPropertyValue(e)
								}),
								o
							}
						}
						var a = "";
						if ("string" == t(e))
							n || 0 === n
								? a = u(e) + ":" + f(e, n)
								: this.each(function() {
									this.style.removeProperty(u(e))
								});
						else
							for (b in e)
								e[b] || 0 === e[b]
									? a += u(b) + ":" + f(b, e[b]) + ";"
									: this.each(function() {
										this.style.removeProperty(u(b))
									});
						return this.each(function() {
							this.style.cssText += ";" + a
						})
					},
					index: function(t) {
						return t
							? this.indexOf(C(t)[0])
							: this.parent().children().indexOf(this[0])
					},
					hasClass: function(t) {
						return !!t && N.some.call(this, function(t) {
							return this.test(y(t))
						}, l(t))
					},
					addClass: function(t) {
						return t
							? this.each(function(e) {
								if ("className" in this) {
									T = [];
									var n = y(this),
										i = v(this, t, e, n);
									i.split(/\s+/g).forEach(function(t) {
										C(this).hasClass(t) || T.push(t)
									}, this),
									T.length && y(this, n + (
										n
										? " "
										: "") + T.join(" "))
								}
							})
							: this
					},
					removeClass: function(t) {
						return this.each(function(e) {
							if ("className" in this) {
								if (t === x)
									return y(this, "");
								T = y(this),
								v(this, t, e, T).split(/\s+/g).forEach(function(t) {
									T = T.replace(l(t), " ")
								}),
								y(this, T.trim())
							}
						})
					},
					toggleClass: function(t, e) {
						return t
							? this.each(function(n) {
								var i = C(this),
									r = v(this, t, n, y(this));
								r.split(/\s+/g).forEach(function(t) {
									(
										e === x
										? !i.hasClass(t)
										: e)
										? i.addClass(t)
										: i.removeClass(t)
								})
							})
							: this
					},
					scrollTop: function(t) {
						if (this.length) {
							var e = "scrollTop" in this[0];
							return t === x
								? e
									? this[0].scrollTop
									: this[0].pageYOffset
								: this.each(
									e
									? function() {
										this.scrollTop = t
									}
									: function() {
										this.scrollTo(this.scrollX, t)
									})
						}
					},
					scrollLeft: function(t) {
						if (this.length) {
							var e = "scrollLeft" in this[0];
							return t === x
								? e
									? this[0].scrollLeft
									: this[0].pageXOffset
								: this.each(
									e
									? function() {
										this.scrollLeft = t
									}
									: function() {
										this.scrollTo(t, this.scrollY)
									})
						}
					},
					position: function() {
						if (this.length) {
							var t = this[0],
								e = this.offsetParent(),
								n = this.offset(),
								i = q.test(e[0].nodeName)
									? {
										top: 0,
										left: 0
									}
									: e.offset();
							return n.top -= parseFloat(C(t).css("margin-top")) || 0,
							n.left -= parseFloat(C(t).css("margin-left")) || 0,
							i.top += parseFloat(C(e[0]).css("border-top-width")) || 0,
							i.left += parseFloat(C(e[0]).css("border-left-width")) || 0, {
								top: n.top - i.top,
								left: n.left - i.left
							}
						}
					},
					offsetParent: function() {
						return this.map(function() {
							for (var t = this.offsetParent || O.body; t && !q.test(t.nodeName) && "static" == C(t).css("position");)
								t = t.offsetParent;
							return t
						})
					}
				},
				C.fn.detach = C.fn.remove,
				["width", "height"].forEach(function(t) {
					var e = t.replace(/./, function(t) {
						return t[0].toUpperCase()
					});
					C.fn[t] = function(r) {
						var o,
							a = this[0];
						return r === x
							? n(a)
								? a["inner" + e]
								: i(a)
									? a.documentElement["scroll" + e]
									: (o = this.offset()) && o[t]
							: this.each(function(e) {
								a = C(this),
								a.css(t, v(this, r, e, a[t]()))
							})
					}
				}),
				R.forEach(function(e, n) {
					var i = n % 2;
					C.fn[e] = function() {
						var e,
							r,
							o = C.map(arguments, function(n) {
								return e = t(n),
								"object" == e || "array" == e || null == n
									? n
									: V.fragment(n)
							}),
							a = this.length > 1;
						return 1 > o.length
							? this
							: this.each(function(t, e) {
								r = i
									? e
									: e.parentNode,
								e = 0 == n
									? e.nextSibling
									: 1 == n
										? e.firstChild
										: 2 == n
											? e
											: null;
								var s = C.contains(O.documentElement, r);
								o.forEach(function(t) {
									if (a)
										t = t.cloneNode(!0);
									else if (!r)
										return C(t).remove();
									r.insertBefore(t, e),
									s && E(t, function(t) {
										null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
									})
								})
							})
					},
					C.fn[
						i
							? e + "To"
							: "insert" + (
								n
								? "Before"
								: "After")
					] = function(t) {
						return C(t)[e](this),
						this
					}
				}),
				V.Z.prototype = C.fn,
				V.uniq = S,
				V.deserializeValue = w,
				C.zepto = V,
				C
			}();
			window.Zepto = i,
			void 0 === window.$ && (window.$ = i),
			function(t) {
				function e(e, n, i) {
					var r = t.Event(n);
					return t(e).trigger(r, i),
					!r.isDefaultPrevented()
				}
				function n(t, n, i, r) {
					return t.global
						? e(n || y, i, r)
						: void 0
				}
				function i(e) {
					e.global && 0 === t.active++ && n(e, null, "ajaxStart")
				}
				function r(e) {
					e.global && !--t.active && n(e, null, "ajaxStop")
				}
				function o(t, e) {
					var i = e.context;
					return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
				}
				function a(t, e, i, r) {
					var o = i.context,
						a = "success";
					i.success.call(o, t, a, e),
					r && r.resolveWith(o, [t, a, e]),
					n(i, o, "ajaxSuccess", [e, i, t]),
					c(a, e, i)
				}
				function s(t, e, i, r, o) {
					var a = r.context;
					r.error.call(a, i, e, t),
					o && o.rejectWith(a, [i, e, t]),
					n(r, a, "ajaxError", [
						i, r, t || e
					]),
					c(e, i, r)
				}
				function c(t, e, i) {
					var o = i.context;
					i.complete.call(o, e, t),
					n(i, o, "ajaxComplete", [e, i]),
					r(i)
				}
				function u() {}
				function l(t) {
					return t && (t = t.split(";", 2)[0]),
					t && (
						t == C
						? "html"
						: t == b
							? "json"
							: E.test(t)
								? "script"
								: x.test(t) && "xml") || "text"
				}
				function f(t, e) {
					return "" == e
						? t
						: (t + "&" + e).replace(/[&?]{1,2}/, "?")
				}
				function h(e) {
					e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
					!e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
				}
				function p(e, n, i, r) {
					return t.isFunction(n) && (r = i, i = n, n = void 0),
					t.isFunction(i) || (r = i, i = void 0), {
						url: e,
						data: n,
						success: i,
						dataType: r
					}
				}
				function d(e, n, i, r) {
					var o,
						a = t.isArray(n),
						s = t.isPlainObject(n);
					t.each(n, function(n, c) {
						o = t.type(c),
						r && (
							n = i
							? r
							: r + "[" + (
								s || "object" == o || "array" == o
								? n
								: "") + "]"),
						!r && a
							? e.add(c.name, c.value)
							: "array" == o || !i && "object" == o
								? d(e, c, i, n)
								: e.add(n, c)
					})
				}
				var m,
					v,
					g = 0,
					y = window.document,
					w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
					E = /^(?:text|application)\/javascript/i,
					x = /^(?:text|application)\/xml/i,
					b = "application/json",
					C = "text/html",
					T = /^\s*$/;
				t.active = 0,
				t.ajaxJSONP = function(e, n) {
					if (!("type" in e))
						return t.ajax(e);
					var i,
						r,
						c = e.jsonpCallback,
						u = (
							t.isFunction(c)
							? c()
							: c) || "jsonp" + ++g,
						l = y.createElement("script"),
						f = window[u],
						h = function(e) {
							t(l).triggerHandler("error", e || "abort")
						},
						p = {
							abort: h
						};
					return n && n.promise(p),
					t(l).on("load error", function(o, c) {
						clearTimeout(r),
						t(l).off().remove(),
						"error" != o.type && i
							? a(i[0], p, e, n)
							: s(null, c || "error", p, e, n),
						window[u] = f,
						i && t.isFunction(f) && f(i[0]),
						f = i = void 0
					}),
					o(p, e) === !1
						? (h("abort"), p)
						: (window[u] = function() {
							i = arguments
						}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
							h("timeout")
						}, e.timeout)), p)
				},
				t.ajaxSettings = {
					type: "GET",
					beforeSend: u,
					success: u,
					error: u,
					complete: u,
					context: null,
					global: !0,
					xhr: function() {
						return new window.XMLHttpRequest
					},
					accepts: {
						script: "text/javascript, application/javascript, application/x-javascript",
						json: b,
						xml: "application/xml, text/xml",
						html: C,
						text: "text/plain"
					},
					crossDomain: !1,
					timeout: 0,
					processData: !0,
					cache: !0
				},
				t.ajax = function(e) {
					var n = t.extend({}, e || {}),
						r = t.Deferred && t.Deferred();
					for (m in t.ajaxSettings)
						void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
					i(n),
					n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
					n.url || (n.url = "" + window.location),
					h(n);
					var c = n.dataType,
						p = /\?.+=\?/.test(n.url);
					if (p && (c = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != c && "jsonp" != c) || (n.url = f(n.url, "_=" + Date.now())), "jsonp" == c)
						return p || (n.url = f(
							n.url, n.jsonp
							? n.jsonp + "=?"
							: n.jsonp === !1
								? ""
								: "callback=?")),
						t.ajaxJSONP(n, r);
					var d,
						g = n.accepts[c],
						y = {},
						w = function(t, e) {
							y[t.toLowerCase()] = [t, e]
						},
						E = /^([\w-]+:)\/\//.test(n.url)
							? RegExp.$1
							: window.location.protocol,
						x = n.xhr(),
						b = x.setRequestHeader;
					if (r && r.promise(x), n.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", g || "*/*"), (g = n.mimeType || g) && (g.indexOf(",") > -1 && (g = g.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(g)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && w("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
						for (v in n.headers)
							w(v, n.headers[v]);
				if (x.setRequestHeader = w, x.onreadystatechange = function() {
						if (4 == x.readyState) {
							x.onreadystatechange = u,
							clearTimeout(d);
							var e,
								i = !1;
							if (x.status >= 200 && 300 > x.status || 304 == x.status || 0 == x.status && "file:" == E) {
								c = c || l(n.mimeType || x.getResponseHeader("content-type")),
								e = x.responseText;
								try {
									"script" == c
										? (0, eval)(e)
										: "xml" == c
											? e = x.responseXML
											: "json" == c && (
												e = T.test(e)
												? null
												: t.parseJSON(e))
								} catch (o) {
									i = o
								}
								i
									? s(i, "parsererror", x, n, r)
									: a(e, x, n, r)
							} else
								s(
									x.statusText || null, x.status
									? "error"
									: "abort",
								x,
								n,
								r)
						}
					}, o(x, n) === !1)
						return x.abort(),
						s(null, "abort", x, n, r),
						x;
					if (n.xhrFields)
						for (v in n.xhrFields)
							x[v] = n.xhrFields[v];
				var C = !("async" in n) || n.async;
					x.open(n.type, n.url, C, n.username, n.password);
					for (v in y)
						b.apply(x, y[v]);
					return n.timeout > 0 && (d = setTimeout(function() {
						x.onreadystatechange = u,
						x.abort(),
						s(null, "timeout", x, n, r)
					}, n.timeout)),
					x.send(
						n.data
						? n.data
						: null),
					x
				},
				t.get = function() {
					return t.ajax(p.apply(null, arguments))
				},
				t.post = function() {
					var e = p.apply(null, arguments);
					return e.type = "POST",
					t.ajax(e)
				},
				t.getJSON = function() {
					var e = p.apply(null, arguments);
					return e.dataType = "json",
					t.ajax(e)
				},
				t.fn.load = function(e, n, i) {
					if (!this.length)
						return this;
					var r,
						o = this,
						a = e.split(/\s/),
						s = p(e, n, i),
						c = s.success;
					return a.length > 1 && (s.url = a[0], r = a[1]),
					s.success = function(e) {
						o.html(
							r
							? t("<div>").html(e.replace(w, "")).find(r)
							: e),
						c && c.apply(o, arguments)
					},
					t.ajax(s),
					this
				};
				var k = encodeURIComponent;
				t.param = function(t, e) {
					var n = [];
					return n.add = function(t, e) {
						this.push(k(t) + "=" + k(e))
					},
					d(n, t, e),
					n.join("&").replace(/%20/g, "+")
				}
			}(i),
			function(t) {
				function e(t) {
					return t._zid || (t._zid = h++)
				}
				function n(t, n, o, a) {
					if (n = i(n), n.ns)
						var s = r(n.ns);
					return (v[e(t)] || []).filter(function(t) {
						return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
					})
				}
				function i(t) {
					var e = ("" + t).split(".");
					return {e: e[0], ns: e.slice(1).sort().join(" ")}
				}
				function r(t) {
					return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
				}
				function o(t, e) {
					return t.del && !y && t.e in w || !!e
				}
				function a(t) {
					return E[t] || y && w[t] || t
				}
				function s(n, r, s, c, l, h, p) {
					var d = e(n),
						m = v[d] || (v[d] = []);
					r.split(/\s/).forEach(function(e) {
						if ("ready" == e)
							return t(document).ready(s);
						var r = i(e);
						r.fn = s,
						r.sel = l,
						r.e in E && (s = function(e) {
							var n = e.relatedTarget;
							return !n || n !== this && !t.contains(this, n)
								? r.fn.apply(this, arguments)
								: f
						}),
						r.del = h;
						var d = h || s;
						r.proxy = function(t) {
							if (t = u(t), !t.isImmediatePropagationStopped()) {
								t.data = c;
								var e = d.apply(
									n, t._args == f
									? [t]
									: [t].concat(t._args));
								return e === !1 && (t.preventDefault(), t.stopPropagation()),
								e
							}
						},
						r.i = m.length,
						m.push(r),
						"addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
					})
				}
				function c(t, i, r, s, c) {
					var u = e(t);
					(i || "").split(/\s/).forEach(function(e) {
						n(t, e, r, s).forEach(function(e) {
							delete v[u][e.i],
							"removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, c))
						})
					})
				}
				function u(e, n) {
					return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(T, function(t, i) {
						var r = n[t];
						e[t] = function() {
							return this[i] = x,
							r && r.apply(n, arguments)
						},
						e[i] = b
					}), (
						n.defaultPrevented !== f
						? n.defaultPrevented
						: "returnValue" in n
							? n.returnValue === !1
							: n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)),
					e
				}
				function l(t) {
					var e,
						n = {
							originalEvent: t
						};
					for (e in t)
						C.test(e) || t[e] === f || (n[e] = t[e]);
					return u(n, t)
				}
				var f,
					h = 1,
					p = Array.prototype.slice,
					d = t.isFunction,
					m = function(t) {
						return "string" == typeof t
					},
					v = {},
					g = {},
					y = "onfocusin" in window,
					w = {
						focus: "focusin",
						blur: "focusout"
					},
					E = {
						mouseenter: "mouseover",
						mouseleave: "mouseout"
					};
				g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents",
				t.event = {
					add: s,
					remove: c
				},
				t.proxy = function(n, i) {
					var r = 2 in arguments && p.call(arguments, 2);
					if (d(n)) {
						var o = function() {
							return n.apply(
								i, r
								? r.concat(p.call(arguments))
								: arguments)
						};
						return o._zid = e(n),
						o
					}
					if (m(i))
						return r
							? (r.unshift(n[i], n), t.proxy.apply(null, r))
							: t.proxy(n[i], n);
					throw new TypeError("expected function")
				},
				t.fn.bind = function(t, e, n) {
					return this.on(t, e, n)
				},
				t.fn.unbind = function(t, e) {
					return this.off(t, e)
				},
				t.fn.one = function(t, e, n, i) {
					return this.on(t, e, n, i, 1)
				};
				var x = function() {
						return !0
					},
					b = function() {
						return !1
					},
					C = /^([A-Z]|returnValue$|layer[XY]$)/,
					T = {
						preventDefault: "isDefaultPrevented",
						stopImmediatePropagation: "isImmediatePropagationStopped",
						stopPropagation: "isPropagationStopped"
					};
				t.fn.delegate = function(t, e, n) {
					return this.on(e, t, n)
				},
				t.fn.undelegate = function(t, e, n) {
					return this.off(e, t, n)
				},
				t.fn.live = function(e, n) {
					return t(document.body).delegate(this.selector, e, n),
					this
				},
				t.fn.die = function(e, n) {
					return t(document.body).undelegate(this.selector, e, n),
					this
				},
				t.fn.on = function(e, n, i, r, o) {
					var a,
						u,
						h = this;
					return e && !m(e)
						? (t.each(e, function(t, e) {
							h.on(t, n, i, e, o)
						}), h)
						: (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (d(i) || i === !1) && (r = i, i = f), r === !1 && (r = b), h.each(function(h, d) {
							o && (a = function(t) {
								return c(d, t.type, r),
								r.apply(this, arguments)
							}),
							n && (u = function(e) {
								var i,
									o = t(e.target).closest(n, d).get(0);
								return o && o !== d
									? (i = t.extend(l(e), {
										currentTarget: o,
										liveFired: d
									}), (a || r).apply(o, [i].concat(p.call(arguments, 1))))
									: f
							}),
							s(d, e, r, i, n, u || a)
						}))
				},
				t.fn.off = function(e, n, i) {
					var r = this;
					return e && !m(e)
						? (t.each(e, function(t, e) {
							r.off(t, n, e)
						}), r)
						: (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = b), r.each(function() {
							c(this, e, i, n)
						}))
				},
				t.fn.trigger = function(e, n) {
					return e = m(e) || t.isPlainObject(e)
						? t.Event(e)
						: u(e),
					e._args = n,
					this.each(function() {
						"dispatchEvent" in this
							? this.dispatchEvent(e)
							: t(this).triggerHandler(e, n)
					})
				},
				t.fn.triggerHandler = function(e, i) {
					var r,
						o;
					return this.each(function(a, s) {
						r = l(
							m(e)
							? t.Event(e)
							: e),
						r._args = i,
						r.target = s,
						t.each(n(s, e.type || e), function(t, e) {
							return o = e.proxy(r),
							!r.isImmediatePropagationStopped() && f
						})
					}),
					o
				},
				"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
					t.fn[e] = function(t) {
						return t
							? this.bind(e, t)
							: this.trigger(e)
					}
				}),
				["focus", "blur"].forEach(function(e) {
					t.fn[e] = function(t) {
						return t
							? this.bind(e, t)
							: this.each(function() {
								try {
									this[e]()
								} catch (t) {}
							}),
						this
					}
				}),
				t.Event = function(t, e) {
					m(t) || (e = t, t = e.type);
					var n = document.createEvent(g[t] || "Events"),
						i = !0;
					if (e)
						for (var r in e)
							"bubbles" == r
								? i = !!e[r]
								: n[r] = e[r];
					return n.initEvent(t, i, !0),
					u(n)
				}
			}(i),
			function(t) {
				t.fn.serializeArray = function() {
					var e,
						n,
						i = [];
					return t([].slice.call(this.get(0).elements)).each(function() {
						e = t(this),
						n = e.attr("type"),
						"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && i.push({name: e.attr("name"), value: e.val()})
					}),
					i
				},
				t.fn.serialize = function() {
					var t = [];
					return this.serializeArray().forEach(function(e) {
						t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
					}),
					t.join("&")
				},
				t.fn.submit = function(e) {
					if (e)
						this.bind("submit", e);
					else if (this.length) {
						var n = t.Event("submit");
						this.eq(0).trigger(n),
						n.isDefaultPrevented() || this.get(0).submit()
					}
					return this
				}
			}(i),
			function(t) {
				"__proto__" in {} || t.extend(t.zepto, {
					Z: function(e, n) {
						return e = e || [],
						t.extend(e, t.fn),
						e.selector = n || "",
						e.__Z = !0,
						e
					},
					isZ: function(e) {
						return "array" === t.type(e) && "__Z" in e
					}
				});
				try {
					getComputedStyle(void 0)
				} catch (e) {
					var n = getComputedStyle;
					window.getComputedStyle = function(t) {
						try {
							return n(t)
						} catch (e) {
							return null
						}
					}
				}
			}(i),
			function(t) {
				function e(e) {
					return e = t(e),
					!(!e.width() && !e.height()) && "none" !== e.css("display")
				}
				function n(t, e) {
					t = t.replace(/=#\]/g, '="#"]');
					var n,
						i,
						r = s.exec(t);
					if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
						var o = Number(i);
						i = isNaN(o)
							? i.replace(/^["']|["']$/g, "")
							: o
					}
					return e(t, n, i)
				}
				var i = t.zepto,
					r = i.qsa,
					o = i.matches,
					a = t.expr[":"] = {
						visible: function() {
							return e(this)
								? this
								: void 0
						},
						hidden: function() {
							return e(this)
								? void 0
								: this
						},
						selected: function() {
							return this.selected
								? this
								: void 0
						},
						checked: function() {
							return this.checked
								? this
								: void 0
						},
						parent: function() {
							return this.parentNode
						},
						first: function(t) {
							return 0 === t
								? this
								: void 0
						},
						last: function(t, e) {
							return t === e.length - 1
								? this
								: void 0
						},
						eq: function(t, e, n) {
							return t === n
								? this
								: void 0
						},
						contains: function(e, n, i) {
							return t(this).text().indexOf(i) > -1
								? this
								: void 0
						},
						has: function(t, e, n) {
							return i.qsa(this, n).length
								? this
								: void 0
						}
					},
					s = RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
					c = /^\s*>/,
					u = "Zepto" + + new Date;
				i.qsa = function(e, o) {
					return n(o, function(n, a, s) {
						try {
							var l;
							!n && a
								? n = "*"
								: c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
							var f = r(e, n)
						} catch (h) {
							throw console.error("error performing selector: %o", o),
							h
						} finally {
							l && l.removeClass(u)
						}
						return a
							? i.uniq(t.map(f, function(t, e) {
								return a.call(t, e, f, s)
							}))
							: f
					})
				},
				i.matches = function(t, e) {
					return n(e, function(e, n, i) {
						return !(e && !o(t, e) || n && n.call(t, null, i) !== t)
					})
				}
			}(i)
		}, {}
	]
}, {}, [1]);
