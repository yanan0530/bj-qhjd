//rem布局，文件不同设备去计算对应的rem值
! function(window) {
	/* 设计图文档宽度 */
	var docWidth = 750
	var doc = window.document,
		docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	var recalc = (function refreshRem() {
		var clientWidth = docEl.getBoundingClientRect().width
		/* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
		/* 20：大于750px不再放大 */
		docEl.style.fontSize = Math.max(
			Math.min(20 * (clientWidth / docWidth), 20), 8.55) * 5 + 'px'
		return refreshRem
	})()
	/* 添加倍屏标识，安卓为1 */
	docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ?
		window.devicePixelRatio :
		1)
	if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
		/* 添加IOS标识 */
		doc.documentElement.classList.add('ios')
		/* IOS8以上给html添加hairline样式，以便特殊处理 */
		if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],
				10) >= 8)
			doc.documentElement.classList.add('hairline')
	}
	if (!doc.addEventListener) return
	window.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
}(window)
// ! function(n, e) {
//  	var t = n.documentElement,
//  		i = "orientationchange" in window ? "orientationchange" : "resize",
//  		d = function() {
//  			var n = t.clientWidth;
//  			n && (t.style.fontSize = n >= 750 ? "100px" : n / 750 * 100 + "px")
//  		}
//  	;
//  	n.addEventListener && (e.addEventListener(i, d, !1), n.addEventListener("DOMContentLoaded", d, !1))
//  }
//  (document, window);
/*小米官网适配
! function(n) {
	var e = n.document,
		t = e.documentElement,
		i = 720,
		d = i / 100,
		o = "orientationchange" in n ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth || 320;
			n > 720 && (n = 720);
			t.style.fontSize = n / d + "px"
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);*/
