/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/13.
 */
!function e(h, f, d) {
	function b(k, m) {
		if (!f[k]) {
			if (!h[k]) {
				var i = "function" == typeof require && require;
				if (!m && i) {
					return i(k, !0)
				}
				if (c) {
					return c(k, !0)
				}
				var j = new Error("Cannot find module '" + k + "'");
				throw j.code = "MODULE_NOT_FOUND",
					j
			}
			var a = f[k] = {
				exports: {}
			};
			h[k][0].call(a.exports, function(n) {
				var l = h[k][1][n];
				return b(l ? l : n)
			}, a, a.exports, e, h, f, d)
		}
		return f[k].exports
	}
	for (var c = "function" == typeof require && require, g = 0; g < d.length; g++) {
		b(d[g])
	}
	return b
}({
	1: [function(f, g, d) {
		function c() {
			var h, i = $(".header-reminder"), a = $('<div class="header-reminder-panel"><p class="waiting">正在加载中...</div>').appendTo(i);
			$(".header-reminder-link").click(function(k) {
				if (k.preventDefault(),
						k.stopPropagation(),
						h) {
					return void a.show().html(h)
				}
				i.find(".reminder-mark").remove();
				var j = this.href.split("#");
				b.get(j[1]).done(function(p) {
					if (p.error) {
						return void a.show().html(p.error.message)
					}
					var l = []
						, m = p["new"].notifications.map(function(n) {
						return l.push(n.id),
						'<li data-id="' + n.id + '">' + n.content + "</li>"
					});
					0 == m.length && m.push('<p class="blank">(无提醒)</p>'),
						h = "<ul>" + m.join("") + "</ul>",
						a.show().html(h),
					l.length && b.post(j[2], {
						ids: l
					})
				})
			}),
				a.click(function(j) {
					j.stopPropagation()
				}),
				$(document).click(function() {
					a.hide()
				}),
				$(".header-username").each(function(l, m) {
					var k = $(m)
						, j = [];
					b.get(k.data("url")).done(function(v) {
						if (v.error) {
							return void console.log(v.error.message)
						}
						if (0 != v.length) {
							k.addClass("header-pger");
							var q = !0
								, y = !1
								, t = void 0;
							try {
								for (var p, x = v[Symbol.iterator](); !(q = (p = x.next()).done); q = !0) {
									var z = p.value;
									j.push('<li>\n                   <div class="header-pger-panel-pic">\n                     <img src="' + z.pger.avatar + '">\n                   </div>\n                   <a href="' + z.pger.url + '">' + z.pger.name + '的主页</a>\n                   (<a href="' + z.pger.backyard_url + '">进入后台</a>)\n                 </li>')
								}
							} catch (A) {
								y = !0,
									t = A
							} finally {
								try {
									!q && x["return"] && x["return"]()
								} finally {
									if (y) {
										throw t
									}
								}
							}
							var r, w = $('\n                  <div class="header-pger-panel">\n                    <div class="header-pger-panel-inner">\n                    <ul>\n                    ' + j.join("") + "\n                    </ul>\n                    </div>\n                  </div>\n               ").hide().appendTo(k);
							k.on("mouseenter", function(n) {
								return w.show()
							}),
								k.on("mouseleave", function(n) {
									r = setTimeout(function() {
										return w.hide()
									}, 200)
								}),
								w.on("mouseenter", function(n) {
									clearTimeout(r),
										w.show()
								}),
								w.on("mouseleave", function(n) {
									return w.hide()
								})
						}
					})
				})
		}
		var b = f("./mods/Request");
		f("./mods/search"),
		window._YPY_USER && c()
	}
		, {
			"./mods/Request": 2,
			"./mods/search": 4
		}],
	//./mods/Request
	2: [function(f, g, d) {
		var c = f("./cookie")
			, b = {
			post: function(j, k, i, h) {
				return $.ajax({
					url: j,
					type: "post",
					dataType: "json",
					data: $.extend({}, k, {
						ck: c.get("ck")
					})
				}).done(function(a) {
					i && i(a)
				}).fail(function(a, l) {
					h && h(a, l)
				})
			},
			get: function(i, j, h, a) {
				return $.ajax({
					url: i,
					type: "get",
					dataType: "json",
					data: $.extend({}, j)
				}).done(function(k) {
					h && h(k)
				}).fail(function(k, l) {
					a && a(k, l)
				})
			},
			put: function(j, k, i, h) {
				return $.ajax({
					url: j,
					type: "put",
					dataType: "json",
					data: $.extend({}, k, {
						ck: c.get("ck")
					})
				}).done(function(a) {
					i && i(a)
				}).fail(function(a, l) {
					h && h(a, l)
				})
			},
			"delete": function(j, k, i, h) {
				return $.ajax({
					url: j,
					type: "delete",
					dataType: "json",
					data: $.extend({}, k, {
						ck: c.get("ck")
					})
				}).done(function(a) {
					i && i(a)
				}).fail(function(a, l) {
					h && h(a, l)
				})
			}
		};
		g.exports = b
	}
		, {
			"./cookie": 3
		}],
	3: [function(b, c, a) {
		c.exports = {
			set: function(j, l, h, g) {
				var d, f, k = new Date;
				k.setTime(k.getTime() + 24 * (l || 30) * 60 * 60 * 1000),
					d = "; expires=" + k.toGMTString();
				for (f in j) {
					document.cookie = f + "=" + j[f] + d + "; domain=" + (h || "douban.com") + "; path=" + (g || "/")
				}
			},
			get: function(h) {
				var i, g, f = h + "=", d = document.cookie.split(";");
				for (i = 0; i < d.length; i++) {
					for (g = d[i]; " " == g.charAt(0); ) {
						g = g.substring(1, g.length)
					}
					if (0 === g.indexOf(f)) {
						return g.substring(f.length, g.length).replace(/\"/g, "")
					}
				}
				return null
			}
		}
	}
		, {}],
	//"./mods/search": 4
	4: [function(G, z, w) {
		var k, J, C = G("./Request"), y = $(".header-nav > ul").width(), I = $(".header-nav-search"), j = $(".header-nav-search-container"), q = $(".header-nav-search-icon"), B = $(".header-nav-search-close"), H = $(".header-nav-search-input > input"), D = $(".header-nav-search-panel"), x = $(".header-nav-search-panel-inner"), F = I.data("query");
		H.css("width", y - 30);
		var b = function(a) {
				return '\n  <div class="blank-result">\n    没有关于 “<mark>' + a + "</mark>” 的相关结果\n  </div>\n"
			}
			, E = function(a) {
				return '\n  <div class="header-nav-search-panel-result-item">' + a + "</div>\n"
			}
			, A = function(c, d, a) {
				return '\n  <div class="header-nav-search-panel-section' + (a ? " " + a : "") + '">\n    <div class="header-nav-search-panel-label">' + c + '</div>\n    <div class="header-nav-search-panel-result">\n      ' + d.join("") + "\n    </div>\n  </div>\n"
			}
			, K = function(a) {
				if (a && !a.error) {
					var c = [];
					a.type_match.length ? c.push(A("服务类型", a.type_match.map(function(d) {
						return E('<a href="/' + d.type_id + '">' + d.type_name + "</a>")
					}))) : a.type_suggest.length && c.push(A("服务类型", a.type_suggest.map(function(d) {
						return E('<a href="/' + d.type_id + '">' + d.type_name + "</a>")
					}))),
						a.pger_match.length ? c.push(A("摄影师", a.pger_match.map(function(d) {
							return E('<a href="/' + d.pger_id + '">' + d.pger_name + "</a>")
						}))) : a.pger_suggest.length && c.push(A("摄影师", a.pger_suggest.map(function(d) {
							return E('<a href="/' + d.pger_id + '">' + d.pger_name + "</a>")
						}))),
						a.loc_match.length ? c.push(A("城市", a.loc_match.map(function(d) {
							return E('所有 <a href="/package/loc/' + d.loc_id + '">' + d.loc_name + "</a> 的拍摄套系") + E('所有 <a href="/explore/pger/' + d.loc_id + '">' + d.loc_name + "</a> 的摄影师")
						}), "header-nav-search-panel-section-city")) : a.loc_suggest.length && c.push(A("城市", a.loc_suggest.map(function(d) {
							return E('所有 <a href="/package/loc/' + d.loc_id + '">' + d.loc_name + "</a> 的拍摄套系") + E('所有 <a href="/explore/pger/' + d.loc_id + '">' + d.loc_name + "</a> 的摄影师")
						}), "header-nav-search-panel-section-city")),
					0 == c.length && c.push(b(J)),
						D.show(),
						x.html(c.join(""))
				}
			}
			;
		q.on("click", function(a) {
			I.parent().addClass("header-nav-search-active"),
				j.css("left", -y),
				H.focus()
		}),
			B.on("click", function(a) {
				I.parent().removeClass("header-nav-search-active"),
					j.css("left", 1000 * -y),
					D.hide(),
					H.val("")
			}),
			H.on("keypress keyup", function(a) {
				k && clearTimeout(k),
					k = setTimeout(function() {
						return J = a.target.value,
							"" == $.trim(J) ? void D.hide() : void C.get(F, {
								q: J
							}).done(K)
					}, 300)
			})
	}
		, {
			"./Request": 2
		}]
}, {}, [1]);
