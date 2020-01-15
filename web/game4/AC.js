!function(e, i) {
	var t = e.documentElement,
		n = navigator.userAgent.match(/iphone|ipod|ipad/gi),
		a = n
			? Math.min(i.devicePixelRatio, 3)
			: 1,
		m = "orientationchange" in window
			? "orientationchange"
			: "resize";
	t.dataset.dpr = a;
	for (var d, l, c = !1, o = e.getElementsByTagName("meta"), r = 0; r < o.length; r++)
		l = o[r],
		"viewport" == l.name && (c = !0, d = l);
	if (c)
		d.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no";
	else {
		var o = e.createElement("meta");
		o.name = "viewport",
		o.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no",
		t.firstElementChild.appendChild(o)
	}
	var s = function() {
		var e = t.clientWidth;
		e / a > 640 && (e = 640 * a),
		window.remScale = e / 640,
		t.style.fontSize = 200 * (e / 640) + "px"
	};
	s(),
	e.addEventListener && i.addEventListener(m, s, !1)
}(document, window);
var havvve = 7;
$(function() {
	var have = 6;

	if ($(".rule").length) {
		var e = "",
			n = null,
			i = null;
		// e = '<div class="rule-modal" style="display: none;"><div class="rule-modal-dialog"><header><i></i><span>活动说明</span><i></i></header><section><div class="description"><div class="description-scroller"></div></div><div class="probability"><div class="nav"><span>更多概率说明</span><i></i></div><div class="text"><div class="probability-wrapper"><div class="probability-scroller"></div></div></div></div></section><div class="close"></div></div></div>',
		// $("body").append(e)
	}
	$(".rule").on("click", function() {
		$(".rule-modal").show(),
		n = new IScroll(".description", {
			mouseWheel: !0,
			scrollbars: !0,
			shrinkScrollbars: "scale",
			click: !0
		}),
		$("#db-content").addClass("filter"),
		document.ontouchmove = function(t) {
			t.preventDefaul$()
		}
	}),
	$(".rule-modal .close").on("click", function() {
		$(".rule-modal").hide(),
		$("#db-content").removeClass("filter"),
		document.ontouchmove = null,
		n.destroy(),
		$(".probability").hasClass("active") && ($(".probability").removeClass("active"), i.destroy())
	}),
	$(".probability .nav").on("click", function() {
		$(".probability").toggleClass("active"),
		$(".probability").hasClass("active")
			? i = new IScroll(".probability-wrapper", {
				mouseWheel: !0,
				scrollbars: !0,
				shrinkScrollbars: "scale",
				click: !0
			})
			: i.destroy(),
		$(".description .iScrollVerticalScrollbar").toggleClass("fade")
	});

	// $('#start').on('click', function() {
	//     if ($(this).hasClass('disabled')) {
	//         return false;
	//     }
	//     $(this).removeClass('toggle').addClass('disabled');
	//     $('#circle').addClass('rotate');
	//     var that = $(this);
	//
	// })
	$('.coupon-modal-close').on('click', function() {
		$('.J_modalShowPrize').hide();
		if (havvve === 0) {
			window.location.href = "../index.html";
		}
	})


});

(function(t) {
	var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
		? function(t) {
			return typeof t
		}
		: function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
				? "symbol"
				: typeof t
		};
	var s = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator)
		? function(t) {
			return "undefined" == typeof t
				? "undefined"
				: _typeof2(t)
		}
		: function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
				? "symbol"
				: "undefined" == typeof t
					? "undefined"
					: _typeof2(t)
		};

	function i(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}

	function e(t) {
		return o
			? o + t
			: t.toLowerCase()
	}
	var o,
		n,
		r,
		a,
		h,
		l,
		c,
		d,
		p,
		u,
		f = "",
		m = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		g = document.createElement("div"),
		v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		y = {};
	t.each(m, function(t, i) {
		if (void 0 !== g.style[t + "TransitionProperty"])
			return f = "-" + t.toLowerCase() + "-",
			o = i,
			!1
	}),
	n = f + "transform",
	y[r = f + "transition-property"] = y[a = f + "transition-duration"] = y[l = f + "transition-delay"] = y[h = f + "transition-timing-function"] = y[c = f + "animation-name"] = y[d = f + "animation-duration"] = y[u = f + "animation-delay"] = y[p = f + "animation-timing-function"] = "",
	t.fx = {
		off: void 0 === o && void 0 === g.style.transitionProperty,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: f,
		transitionEnd: e("TransitionEnd"),
		animationEnd: e("AnimationEnd")
	},
	t.fn.animate = function(i, e, s, o, n) {
		return t.isFunction(e) && (o = e, s = void 0, e = void 0),
		t.isFunction(s) && (o = s, s = void 0),
		t.isPlainObject(e) && (s = e.easing, o = e.complete, n = e.delay, e = e.duration),
		e && (e = (
			"number" == typeof e
			? e
			: t.fx.speeds[e] || t.fx.speeds._default) / 1e3),
		n && (n = parseFloat(n) / 1e3),
		this.anim(i, e, s, o, n)
	},
	t.fn.anim = function(e, o, f, m, g) {
		var w,
			b,
			x,
			S = {},
			T = "",
			k = this,
			z = t.fx.transitionEnd,
			E = !1;
		if (void 0 === o && (o = t.fx.speeds._default / 1e3), void 0 === g && (g = 0), t.fx.off && (o = 0), "string" == typeof e)
			S[c] = e,
			S[d] = o + "s",
			S[u] = g + "s",
			S[p] = f || "linear",
			z = t.fx.animationEnd;
		else {
			b = [];
			for (w in e)
				v.test(w)
					? T += w + "(" + e[w] + ") "
					: (S[w] = e[w], b.push(i(w)));
			T && (S[n] = T, b.push(n)),
			o > 0 && "object" === (
				"undefined" == typeof e
				? "undefined"
				: s(e)) && (S[r] = b.join(", "), S[a] = o + "s", S[l] = g + "s", S[h] = f || "linear")
		}
		return x = function(i) {
			if ("undefined" != typeof i) {
				if (i.target !== i.currentTarget)
					return;
				t(i.target).unbind(z, x)
			} else
				t(this).unbind(z, x);
			E = !0,
			!t(this).attr("stop") && t(this).css(y),
			m && m.call(this)
		},
		o > 0 && (this.bind(z, x), setTimeout(function() {
			E || x.call(k)
		}, 1e3 * (o + g) + 25)),

		this.size() && this.get(0).clientLeft,
		this.css(S),
		o <= 0 && setTimeout(function() {
			k.each(function() {
				x.call(this)
			})
		}, 0),
		this
	},
	g = null
})($);

(function(i) {
	var have = 6;
	i('.need-credits').html('今日免费： ' + have + '次').show();
	var e = {
		prizeList: [
			{
				"id": 4,
				"skinName": "支付宝定额弹层",
				"skinType": 1,
				"isDeleted": false,
				"code": "<link rel=\"stylesheet\" href=\"//yun.yuyiya.com/h5-tuia/alipayModal/index_201708211647.css\">\n<script type=\"text/javascript\">\nvar oHead = document.querySelector('.modal-group');\nvar oScript = document.createElement('script');\noScript.type = \"text/javascript\";\noScript.src = \"//yun.yuyiya.com/h5-tuia/alipayModal/index_201709140000.js\";\noHead.appendChild(oScript);\n</script>",
				"image": ""
			}, {
				"id": 2,
				"skinName": "支付宝随机弹层",
				"skinType": 2,
				"isDeleted": false,
				"code": "<link rel=\"stylesheet\" href=\"//yun.yuyiya.com/h5-tuia/alipayModal/index_201708211647.css\">\n<script type=\"text/javascript\">\nvar oHead = document.querySelector('.modal-group');\nvar oScript = document.createElement('script');\noScript.type = \"text/javascript\";\noScript.src = \"//yun.yuyiya.com/h5-tuia/alipayModal/index_201709140000.js\";\noHead.appendChild(oScript);\n</script>",
				"image": ""
			}, {
				"id": 3,
				"skinName": "谢谢参与弹层",
				"skinType": 3,
				"isDeleted": false,
				"code": "<link rel=\"stylesheet\" href=\"//yun.yuyiya.com/h5-tuia/thanksPrize/index_201709062000.css\">\n<script type=\"text/javascript\">\nvar oHead = document.querySelector('.modal-group');\nvar oScript = document.createElement('script');\noScript.type = \"text/javascript\";\noScript.src = \"//yun.yuyiya.com/h5-tuia/thanksPrize/index_201709140000.js\";\noHead.appendChild(oScript);\n</script>",
				"image": ""
			}, {
				"id": 29,
				"skinName": "推荐弹层",
				"skinType": 5,
				"isDeleted": false,
				"code": "<link rel=\"stylesheet\" href=\"//yun.yuyiya.com/h5-tuia/recommend/index_201709140000.css\">\n<script type=\"text/javascript\">\nvar oHead = document.querySelector('.modal-group');\nvar oScript = document.createElement('script');\noScript.type = \"text/javascript\";\noScript.src = \"//yun.yuyiya.com/h5-tuia/recommend/index_201709140000.js\";\noHead.appendChild(oScript);\n</script>",
				"image": ""
			}, {
				"id": 8,
				"skinName": "礼物盒",
				"skinType": 4,
				"isDeleted": false,
				"code": "<link rel=\"stylesheet\" href=\"//yun.yuyiya.com/h5-tuia/couponPrize/1.3/index_201709141600.css\">\n<script type=\"text/javascript\">\nvar oHead = document.querySelector('.modal-group');\nvar oScript = document.createElement('script');\noScript.type = \"text/javascript\";\noScript.src = \"//yun.yuyiya.com/h5-tuia/couponPrize/1.3/index_201709290000.js\";\noHead.appendChild(oScript);\n</script>",
				"image": ""
			}
		],
		_UA: navigator.userAgent.toLowerCase(),
		lastResult: null,
		hasNoTimes: !1,
		againOrderId: null,
		guide: null,
		isShowBuoy: !1,
		init: function() {
			this._UA.match(/iphone|ipad/gi)
				? i(".apple").show()
				: i(".apple").hide(),
			// this.getStyle(),
			this.getOption(),
			this.events()
		},
		getStyle: function() {
			var t = this;
			window.dbStyleConfigStart = + new Date,
			t.getTuiaStyle({
				success: function(e) {
					if (e.success) {
						var s = [
							[
								".main", "backgroundImage", "bgImage"
							],
							[
								"body", "backgroundColor", "bgColor"
							],
							[
								".record", "backgroundImage", "record"
							],
							[
								".rule", "backgroundImage", "rule"
							],
							[
								".prize-tag", "backgroundImage", "prizeTag"
							],
							[
								".prize-list", "backgroundColor", "showcaseBgColor"
							],
							[
								".prize-list .prize-img-box", "backgroundColor", "prizeBgColor"
							],
							[
								".prize-list .prize-img-box,.prize-list", "borderColor", "showcaseBorderColor"
							],
							[
								".apple", "color", "appleTextColor"
							],
							[
								".apple", "backgroundColor", "appleBgColor"
							],
							[
								".wawa.box1 .prize", "backgroundImage", "box1"
							],
							[
								".wawa.box2 .prize", "backgroundImage", "box2"
							],
							[
								".wawa.box3 .prize", "backgroundImage", "box3"
							],
							[
								".mactop", "backgroundImage", "mactop"
							],
							[
								".macborder", "backgroundImage", "macborder"
							],
							[
								".macbg", "backgroundImage", "macbg"
							],
							[
								".conveyorBelt", "backgroundImage", "conveyorBelt"
							],
							[
								".conveyorBelt.backward .maoding i,.conveyorBelt.forward .maoding i", "backgroundImage", "maoding"
							],
							[
								".need-credits", "color", "needCredits"
							],
							[
								".start", "backgroundImage", "btn"
							],
							[
								".start:active", "backgroundImage", "btn-active"
							],
							[
								".start[disabled]", "backgroundImage", "btn-disabled"
							]
						];
						requireStyle.init(e, s),
						i("#db-content").show(),
						window.dbStyleConfigEnd = + new Date,
						i(document).height() >= i(window).height() && i(".apple").removeClass("fixed")
					} else
						t.showModal("systemError", {message: e.desc})
				},
				error: function(i) {
					t.showModal("networkError")
				}
			})
		},
		getOption: function() {
			var t = this;
			t.zhuazi.init();
			t.dollMac.init();
			t.dollMac.start();
		},
		events: function() {
			var t = this;
			// i("#prize-list").on("click", ".prize-item", function() {
			//         new GetPrizeDetail({
			//             url: "/activity/getPrizeDetail",
			//             prizeType: i(this).data("type"),
			//             data: {
			//                 optionId: i(this).data("id")
			//             }
			//         })
			//     }),
			i("body").on("click", "#recommend-modal .close", function() {
				t.dollMac.reInit()
				if (have === 0) {
					window.location.href = "../index.html";
				}
			}),
			i(".start").on("click", function() {
				t.doStart()
			})
		},
		doStart: function() {
			if (have >= 0) {
				this.hasNoTimes
					? this.showModal("over")
					: (this.guide && this.guide.hide(), this.lastResult = null, i(".start").prop("disabled", !0), this.zhuazi.run(), this.getOrder())
			}
		},
		getOrder: function() {
			var t = this,
				i = {};
			i.data = {
				"limitTimes": 6,
				"orderId": "38719725230939",
				"success": true,
				"isShowBuoy": false,
				"message": "成功",
				"limitType": 1
			};
			t.againOrderId && (i.againOrderId = t.againOrderId);

			t.againOrderId = null;
			t.renderElement(i.data);
			t.isShowBuoy = i.data.isShowBuoy;
			setTimeout(function() {
				t.getLottery(i.data.orderId)
			}, 500);

			t.showModal("over")
			// t.showModal("preview")
		},
		getLottery: function(t) {
			var i = this;
			$.get('../public/lucky-prize/prizes.json',function(data) {
        var num = Math.floor(Math.random()*data.length);
				have--;
				havvve--;
				$('.DB_guide').hide();
				// setTimeout(function() {
				// that.removeClass('disabled').addClass('toggle');
				$('.J_modalShowPrize .logandgo').attr('src', data[num].img_url);
				$('.J_btnCoupon').attr('href', data[num].click_url);
				$('#titleandgo').text(data[num].title);
				$('#button_desc').text(data[num].btn_text);
				_czc.push(["_trackEvent","游戏4","展现",data[num].name]);
				_czc.push(["_trackEvent","总计","展现",data[num].name]);

				$('.coupon-wrapper').on('click', function() {
					_czc.push(["_trackEvent","游戏4","点击",data[num].name]);
					_czc.push(["_trackEvent","总计","点击",data[num].name]);
					window.location.href = data[num].click_url;
				})
				$('.J_btnCoupon').on('click', function() {
					_czc.push(["_trackEvent","游戏4","点击",data[num].name]);
					_czc.push(["_trackEvent","总计","点击",data[num].name]);
					$('.J_modalShowPrize').hide();
				})

				// }, 4000);
			})
			i.lastResult = {
				"code": "0000000",
				"desc": "成功",
				"data": {
					"result": 2,
					"activityId": 501,
					"orderId": "38725758210939",
					"lottery": {
						"st_info_dpm_title_click": "{\"dpm\":\"32157.4.7.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/statistics/click\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"androidDownloadUrl": "//activity.yuyiya.com/activity/redirect?url=https%3A%2F%2Fcreditcardapp.bankcomm.com%2Fapplynew%2Ffront%2Fapply%2Ftrack%2Frecord.html%3FtrackCode%3DA111118594676%26amp%3BcardId%3D17&orderId=taw-38725758210939&dcm=104.11233.24.18116&dpm=32157.4.1.1&activityId=501&device_type=tuia",
						"link": "//activity.yuyiya.com/activity/indexRecord?vmName=detail&orderId=38725758210939&dpm=32157.4.3.0&dcm=104.11233.24.18116",
						"useBtnText": "不需面审",
						"title": "限22-40 新户",
						"type": "lucky",
						"advertId": 11233,
						"openUrl": "",
						"imgurl": "//yun.yuyiya.com/tuia/img/laghqkuhl0.jpg",
						"st_info_dpm_exposure": "{\"dpm\":\"32157.4.1.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/activity/showLog\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domainWeb\":\"//activity.yuyiya.com\",\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"showUse": true,
						"linkTo": 0,
						"st_info_dpm_btn_again": "{\"dpm\":\"32157.4.8.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/statistics/click\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"iosDownloadUrl": "//activity.yuyiya.com/activity/redirect?url=https%3A%2F%2Fcreditcardapp.bankcomm.com%2Fapplynew%2Ffront%2Fapply%2Ftrack%2Frecord.html%3FtrackCode%3DA111118594676%26amp%3BcardId%3D17&orderId=taw-38725758210939&dcm=104.11233.24.18116&dpm=32157.4.1.1&activityId=501&device_type=tuia",
						"tip": "交通银行信用卡，额度高，限量免费申请。极速审批，快至2天发卡！",
						"id": 2920,
						"isDownloadUrl": true,
						"st_info_dpm_btn_close": "{\"dpm\":\"32157.4.4.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/statistics/click\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"st_info_dpm_img_click": "{\"dpm\":\"32157.4.5.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/statistics/click\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"st_info_dpm_btn_get": "{\"dpm\":\"32157.4.6.1\",\"orderId\":\"taw-38725758210939\",\"consumerId\":2004808619,\"domain4Web\":\"//activity.yuyiya.com\",\"deliveryType\":1,\"device_type\":\"tuia\",\"materialId\":18116,\"url\":\"/statistics/click\",\"advertId\":11233,\"dcm\":\"104.11233.24.18116\",\"activityId\":501,\"domain\":\"//embedlog.duiba.com.cn\",\"appId\":32157,\"dsm\":\"1.3111.5.37\"}",
						"validate": "2017-12-31"
					},
					"tick": "",
					"status": "success"
				},
				"success": true
			};
			// i.againOrderId = e.data.againTag ? e.data.againTag : null;
			i.dollMac.stop();
		},
		dollMac: {
			init: function() {
				i(".start").prop("disabled", !1)
			},
			status: "ready",
			forwardConveyorBeltRun: function() {
				function t() {
					i(".forward .wawas").append('<div class="wawa"><div class="prize"><img src=""></div><div class="shadow"></div></div>');
					var t = r - s + "px,0,0",
						n = r / a;
					if ("stop" == l.status) {
						var h = e.getTranslateX(document.querySelector(".zhuazi")) + i(".zhuazi").width() / 2,
							c = h - 11 - o / 2;
						e.zhuazi.stop((c + o) / a),
						e.zhuazi.$prize = i(".forward .wawa").last();
						for (var d = !1, p = 0; p < e.prizeList.length; p++)
							e.prizeList[p].id == e.lastResult.data.lottery.id && (d = !0, i(".forward .wawa").last().find("img").attr("src", e.prizeList[p].image)),
							d || i(".forward .wawa").last().find("img").attr("src", e.getRandomPrize())
					} else
						i(".forward .wawa").last().find("img").attr("src", e.getRandomPrize());
					i(".forward .wawa").last().attr("class", "wawa " + e.getRandomStyle()).animate({
						translate3d: t
					}, n, "linear", function() {
						i(this).remove()
					})
				}
				var s = 114 * window.remScale,
					o = 114 * window.remScale,
					n = 220 * window.remScale,
					r = 3 * (o + n),
					a = r / 5e3,
					h = r / 3 / a,
					l = this;
				t(),
				setInterval(t, h)
			},
			backwardConveyorBeltRun: function() {
				function t() {
					i(".backward .wawas").append('<div class="wawa"><div class="prize"><img src=""></div><div class="shadow"></div></div>'),
					i(".backward .wawa").last().attr("class", "wawa " + e.getRandomStyle()).animate({
						translate3d: s - r + "px,0,0"
					}, r / a, "linear", function() {
						i(this).remove()
					}).find("img").attr("src", e.getRandomPrize())
				}
				var s = 570 * window.remScale,
					o = 61 * window.remScale,
					n = 160 * window.remScale,
					r = 3 * (o + n),
					a = r / 5e3,
					h = r / 3 / a;
				t(),
				setInterval(t, h)
			},
			start: function() {
				this.status = "running",
				this.forwardConveyorBeltRun(),
				this.backwardConveyorBeltRun()
			},
			stop: function() {
				this.status = "stop"
			},
			reset: function() {
				this.reInit()
				// ,
				//     setTimeout(function() {
				//         e.hasNoTimes ? e.showModal("over") : e.showPlugin(e.isShowBuoy)
				//     }, 600)
			},
			reInit: function() {
				e.zhuazi.reset(),
				this.init()
			}
		},
		zhuazi: {
			initX: 220 * window.remScale,
			eleHeight: 246 * window.remScale,
			halfHeight: 280 * window.remScale,
			allHeight: 434 * window.remScale,
			$prize: null,
			status: "ready",
			init: function() {
				i(".zhuazi").show(),
				this.status = "ready",
				this.$prize = null,
				this.contracts()
			},
			reset: function() {
				this.init(),
				i(".zhuazi").attr("stop", !1).css({
					height: this.eleHeight,
					translate3d: this.initX + "px,0,0"
				}).find(".wawa").remove()
			},
			run: function() {
				function t(s) {
					i(".zhuazi").animate(
						{
						translate3d: 310 * window.remScale + "px,0,0"
					}, s
						? 1e3
						: 2e3,
					"linear",
					function() {
						"running" == e.status && i(".zhuazi").animate({
							translate3d: 130 * window.remScale + "px,0,0"
						}, 2e3, "linear", function() {
							"running" == e.status && t(!1)
						})
					})
				}
				var e = this;
				this.status = "running",
				t(!0)
			},
			stop: function(t) {
				this.status = "snatch",
				e.dollMac.status = "running",
				e.stopAnimate(document.querySelector(".zhuazi")),
				this.snatch(t)
			},
			snatch: function(t) {
				var s = this;
				i(".zhuazi").attr("stop", !0),
				this.deploy(),
				i(".zhuazi").animate({
					height: this.allHeight
				}, t, "linear", function() {
					function t() {
						var t = '<div class="' + s.$prize.attr("class") + '"><div class="prize"><img src="' + s.$prize.find("img").attr("src") + '"></div></div>';
						i(".zhuazi").append(t),
						s.$prize.hide()
					}
					"success" == e.lastResult.status && 0 != e.lastResult.data.result
						? 2 == e.lastResult.data.result
							? (t(), i(".zhuazi").animate({
								height: s.eleHeight
							}, 1e3, function() {
								var t = e.lastResult.data.lottery;
								if ("coupon" == t.type || "lucky" == t.type) {
									var s = function() {
										window.showCouponPrize({
											result: e.lastResult.data,
											callback: {
												close: function() {
													e.dollMac.reset();
												},
												use: function() {
													i(".J_modalShowPrize").remove(),
													e.dollMac.reset()
												},
												again: function() {
													i(".J_modalShowPrize").remove(),
													e.dollMac.reInit(),
													setTimeout(function() {
														e.doStart()
													}, 500)
												}
											}
										})
									};
									s()
								} else if ("alipay" === t.type) {
									var o = function() {
										window.showAlipayPrize({
											result: e.lastResult.data,
											callback: {
												close: function() {
													e.dollMac.reset()
												}
											}
										})
									};
									o()
								} else
									window.showObjectPrize({
										name: t.title,
										type: t.type,
										img: t.imgurl,
										onsubmit: function() {
											window.location.href = t.link
										},
										onclose: function() {
											e.dollMac.reset()
										}
									})
							}))
							: 1 == e.lastResult.data.result && (t(), i(".zhuazi").animate({
								height: s.eleHeight
							}, 1e3, function() {
								e.showModal("again")
							}))
						: true
							? (t(), i(".zhuazi").animate({
								height: s.halfHeight
							}, 1e3, function() {
								s.contracts(),
								i(".zhuazi .wawa").animate({
									translate3d: "-50%, " + 156 * window.remScale + "px, 0"
								}, 500, function() {
									// i(this).hide();
									i('.J_modalShowPrize').show();
									i('.needCredits').text('今日免费： ' + have + '次');
									e.dollMac.reset();
									if (have < 0) {
										i(".start").prop("disabled", true)
									}
									// setTimeout(function(){

									// e.dollMac.init();
									// e.dollMac.reInit();
									// }, 1000);
								})
							}))
							: (i(".zhuazi").animate({
								height: s.eleHeight
							}, 1e3, function() {
								i('.J_modalShowPrize').show();
								i('.needCredits').text('今日免费： ' + have + '次');
								e.dollMac.reset();
								if (have < 0) {
									i(".start").prop("disabled", true)
								}
								// e.dollMac.reInit();
								// window.showThanks({
								//     result: e.lastResult.data,
								//     callback: {
								//         close: function() {
								//             e.dollMac.reset()
								//         }
								//     }
								// })
							}), setTimeout(function() {
								s.contracts()
							}, 200))
				})
			},
			deploy: function() {
				i(".left-foot").animate({rotate: "16deg"}),
				i(".right-foot").animate({rotate: "-16deg"})
			},
			contracts: function() {
				$(".left-foot").animate({rotate: "0deg"}),
				i(".right-foot").animate({rotate: "0deg"})
			}
		},
		Random: function(t, i) {
			return Math.floor(Math.random() * (i - t + 1) + t)
		},
		getRandomStyle: function() {
			var t = ["box1", "box2", "box3"];
			return t[this.Random(0, t.length - 1)]
		},
		getRandomPrize: function() {
			return this.prizeList[this.Random(0, this.prizeList.length - 1)].image
		},
		stopAnimate: function(t) {
			var i = "translate3d(" + this.getTranslateX(t) + "px,0,0)";
			t.style.WebkitTransform = i,
			t.style.transition = null
		},
		getTranslateX: function(t) {
			var i = window.getComputedStyle(t, null),
				e = i.getPropertyValue("-webkit-transform") || i.getPropertyValue("transform"),
				s = e.replace(/\s/gi, "");
			return parseFloat(s.split(",")[4])
		},
		hideModal: function() {
			i("#db-content").removeClass("filter"),
			document.ontouchmove = null,
			this.dollMac.reset()
		},
		showModal: function(t, i) {
			// console.log('show suc')
		},
		renderElement: function(t) {
			i(".need-credits").html('今日免费： ' + have + '次').show(),
			t.limitTimes || CFG.preview
				? this.hasNoTimes = !1
				: this.hasNoTimes = !0
		},
		createErrorObject: function(t, e) {
			var n = "",
				i = "",
				r = "",
				o = "";
			switch (
				e
				? e
				: e = {},
			t) {
				case "systemError":
					n = e.title
						? e.title
						: "抽奖失败",
					i = e.message,
					r = "再抽一次";
					break;
				case "networkError":
					n = "噢哦，网络解析错误！",
					i = "再试一遍吧~",
					r = "再试一遍";
					break;
				case "gameClose":
					n = "活动结束",
					i = "该活动已经结束啦~",
					r = "知道了";
					break;
				case "over":
					n = "抽奖次数已全部用完",
					i = "已经没有次数啦~",
					r = "知道了";
					break;
				case "todayOver":
					n = "今天抽奖次数已用完",
					i = "明天再来哦~",
					r = "知道了";
					break;
				case "noPrize":
					n = "哎呀，就差那么一点点~",
					i = "别灰心，再来一次！",
					r = "再抽一次";
					break;
				case "again":
					n = "恭喜您，中奖了",
					i = "获得免费再抽一次",
					r = "再抽一次";
					break;
				case "preview":
					n = "预览用户无法参与活动",
					i = "换正常用户来吧~",
					r = "知道了"
			}
			return {type: t, title: n, tip: i, btnText: r, link: o}
		}
	};
	e.init()
})($)
