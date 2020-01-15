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
$(function() {
	var have = 6;
	$('.needCredits p').text('今日免费： ' + have + '次');
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

	$('#start').on('click', function() {
		if ($(this).hasClass('disabled')) {     // 判断抽奖按钮的状态
			return false;
		}
		$(this).removeClass('toggle').addClass('disabled');
		$('#circle').addClass('rotate');				//转盘开始动画
		var that = $(this);
		$.get('../public/lucky-prize/prizes.json',function(data){
			var num = Math.floor(Math.random()*data.length);
			have--;
			$('.DB_guide').hide();
			setTimeout(function() {
				that.removeClass('disabled').addClass('toggle');
				$('#circle').removeClass('rotate');
				$('.J_modalShowPrize .logandgo').attr('src', data[num].img_url);
				$('.J_btnCoupon').attr('href', data[num].click_url);
				$('#titleandgo').text(data[num].title);
				$('#button_desc').text(data[num].btn_text);
				$('.J_modalShowPrize').show();
				_czc.push(["_trackEvent","游戏2","展现",data[num].name]);
				_czc.push(["_trackEvent","总计","展现",data[num].name]);
				$('.needCredits p').text('今日免费： ' + have + '次');
				if (have === 0) {
					that.removeClass('toggle').addClass('disabled');
				}
				$('.coupon-wrapper').on('click', function() {
					_czc.push(["_trackEvent","游戏2","点击",data[num].name]);
					_czc.push(["_trackEvent","总计","点击",data[num].name]);
					window.location.href = data[num].click_url;
				})
			}, 4000);
			$('.J_btnCoupon').on('click', function() {
				_czc.push(["_trackEvent","游戏2","点击",data[num].name]);
				_czc.push(["_trackEvent","总计","点击",data[num].name]);
				$('.J_modalShowPrize').hide();
			})
		})
	})

	$('.coupon-modal-close').on('click', function() {
		$('.J_modalShowPrize').hide();
		if (have === 0) {
			window.location.href = "../index.html";
		}
	})



});
