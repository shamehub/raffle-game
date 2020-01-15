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
}(document, window);;
function Lottery(id, cover, coverType, width, height, drawPercentCallback) {
	this.mask = document.getElementById(id);
	this.cover = cover;
	this.coverType = coverType;
	this.background = null;
	this.backCtx = null;
	this.maskCtx = null;
	this.lottery = null;
	this.lotteryType = 'image';
	this.width = this.mask.offsetWidth || 300;
	this.height = this.mask.offsetHeight || 100;
	this.clientRect = null;
	this.drawPercentCallback = drawPercentCallback;
	this.drawLottery();
	this.drawMask();
}

Lottery.prototype = {
	createElement: function(tagName, attributes) {
		var ele = document.createElement(tagName);
		for (var key in attributes) {
			ele.setAttribute(key, attributes[key]);
		}
		return ele;
	},
	getTransparentPercent: function(ctx, width, height) {
		var imgData = ctx.getImageData(0, 0, width, height),
			pixles = imgData.data,
			transPixs = [];
		for (var i = 0, j = pixles.length; i < j; i += 4) {
			var a = pixles[i + 3];
			if (a < 128) {
				transPixs.push(i);
			}
		}
		return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
	},
	resizeCanvas: function(canvas, width, height) {
		canvas.width = width;
		canvas.height = height;
		canvas.getContext('2d').clearRect(0, 0, width, height);
	},
	drawPoint: function(x, y) {
		this.maskCtx.beginPath();
		var radgrad = this.maskCtx.createRadialGradient(x, y, 0, x, y, 50);
		radgrad.addColorStop(0, 'rgba(0,0,0,0.6)');
		radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
		this.maskCtx.fillStyle = radgrad;
		this.maskCtx.arc(x, y, 50, 0, Math.PI * 2, true);
		this.maskCtx.fill();
		if (this.drawPercentCallback) {
			this.drawPercentCallback.call(null, this.getTransparentPercent(this.maskCtx, this.width, this.height));
		}
	},
	bindEvent: function() {
		var _this = this;
		var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		var clickEvtName = device
			? 'touchstart'
			: 'mousedown';
		var moveEvtName = device
			? 'touchmove'
			: 'mousemove';
		if (!device) {
			var isMouseDown = false;
			document.addEventListener('mouseup', function(e) {
				isMouseDown = false;
			}, false);
		} else {
			document.addEventListener("touchmove", function(e) {
				if (isMouseDown) {
					e.preventDefault();
				}
			}, false);
			document.addEventListener('touchend', function(e) {
				isMouseDown = false;
			}, false);
		}
		this.mask.addEventListener(clickEvtName, function(e) {
			e.preventDefault();
			$('.start-tip').hide();
			isMouseDown = true;
			var docEle = document.documentElement;
			if (!_this.clientRect) {
				_this.clientRect = {
					left: 0,
					top: 0
				};
			}
			var x = (
				device
				? e.touches[0].clientX
				: e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
			var y = (
				device
				? e.touches[0].clientY
				: e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
			_this.drawPoint(x, y);
		}, false);

		this.mask.addEventListener(moveEvtName, function(e) {
			e.preventDefault();
			if (!device && !isMouseDown) {
				return false;
			}
			var docEle = document.documentElement;
			if (!_this.clientRect) {
				_this.clientRect = {
					left: 0,
					top: 0
				};
			}
			var x = (
				device
				? e.touches[0].clientX
				: e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
			var y = (
				device
				? e.touches[0].clientY
				: e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
			_this.drawPoint(x, y);
		}, false);
	},
	drawLottery: function() {
		this.clientRect = this.mask.getBoundingClientRect();
		this.bindEvent();
		this.maskCtx = this.maskCtx || this.mask.getContext('2d');
	},
	drawMask: function() {
		this.resizeCanvas(this.mask, this.width, this.height);
		if (this.coverType == 'color') {
			this.maskCtx.fillStyle = this.cover;
			this.maskCtx.fillRect(0, 0, this.width, this.height);
			this.maskCtx.globalCompositeOperation = 'destination-out';
		} else if (this.coverType == 'image') {
			var image = new Image(),
				_this = this;
			image.onload = function() {
				_this.maskCtx.drawImage(this, 0, 0);
				_this.maskCtx.globalCompositeOperation = 'destination-out';
			}
			image.src = this.cover;
		}

	}
};
$(function() {
	var lottery = new Lottery('card', '#979797', 'color', 398, 243, function(percent) {
		if (percent >= 50) {
			$('.J_modalShowPrize').show();
			lottery.drawMask();
			$('.start').show();
		}
	});
	var have = 6;
	$('.status').text('今日免费： ' + have + '次');
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

	$('.start').on('click', function() {
		if (have <= 0) {
			return;
		}
		$(this).hide();
		$('.start-tip').show();
		var that = $(this);
		$.get('../public/lucky-prize/prizes.json', function(data) {
			var num = Math.floor(Math.random()*data.length);
			have--;
			$('.DB_guide').hide();
			$('.J_modalShowPrize .logandgo').attr('src', data[num].img_url);
			$('.result-show-dialog img').attr('src', data[num].img_url);
			$('.J_btnCoupon').attr('href', data[num].click_url);
			$('.result-show-dialog img p').text(data[num].title);
			$('#titleandgo').text(data[num].title);
			$('#button_desc').text(data[num].btn_text);
			$('.status').text('今日免费： ' + have + '次');
			_czc.push(["_trackEvent","游戏3","展现",data[num].name]);
			_czc.push(["_trackEvent","总计","展现",data[num].name]);
			if (have === 0) {
				that.removeClass('toggle').addClass('disabled');
			}

			$('.coupon-wrapper').on('click', function() {
				_czc.push(["_trackEvent","游戏3","点击",data[num].name]);
				_czc.push(["_trackEvent","总计","点击",data[num].name]);
				window.location.href = data[num].click_url;
			})

			$('.J_btnCoupon').on('click', function() {
				_czc.push(["_trackEvent","游戏3","点击",data[num].name]);
				_czc.push(["_trackEvent","总计","点击",data[num].name]);
				$('.J_modalShowPrize').hide();
			})
		})
	})

	$('.coupon-modal-close').on('click', function() {
		$('.J_modalShowPrize').hide();
		lottery.drawMask();
		if (have === 0) {
			window.location.href = '../index.html';
		}
	})

});
