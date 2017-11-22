
/*!
 * VERSION: 0.1.5
 * DATE: 2017-10-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * GSDevTools is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("GSDevTools", ["TweenLite", "core.Animation", "core.SimpleTimeline", "TimelineLite", "utils.Draggable", "plugins.CSSPlugin"], function(e, t, o, n, i) {
		var r, s, a, l, c, d = document,
			p = d.documentElement,
			f = "http://www.w3.org/2000/svg",
			g = "http://www.w3.org/1999/xhtml",
			u = 0,
			h = {},
			m = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
			v = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
			x = function(e) {
				for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), o = [m, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = o.length; --n > -1;) if (-1 !== e.indexOf(o[n])) return !0;
				return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "GSDevTools" + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
			}(window ? window.location.host : ""),
			y = function(e, t, o) {
				var n = d.createElementNS ? d.createElementNS("svg" === e ? f : g, e) : d.createElement(e);
				return t && ("string" == typeof t && (t = d.querySelector(t)), t.appendChild(n)), "svg" === e && (n.setAttribute("xmlns", f), n.setAttribute("xmlns:xlink", g)), o && (n.style.cssText = o), n
			},
			w = function() {
				d.selection ? d.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
			},
			b = t._rootTimeline,
			T = function(t, o) {
				for (var n = [], i = 0, r = t._first; r;) r instanceof e ? r.vars.id && (n[i++] = r) : (o && r.vars.id && (n[i++] = r), i = (n = n.concat(T(r, o))).length), r = r._next;
				return n
			},
			S = function(e) {
				var t = 0,
					o = e._first;
				if (!o) return e.duration();
				for (; o;) t = Math.max(t, o.totalDuration() > 999 ? o.endTime(!1) : o._startTime + o._totalDuration / o._timeScale), o = o._next;
				return t
			},
			_ = function(e) {
				if (!e) return null;
				if (e instanceof t) return e;
				for (var o = T(b, !0), n = o.length; --n > -1;) if (o[n].vars.id === e) return o[n]
			},
			C = function(e, t, o, n) {
				var i, r, s;
				return "string" == typeof e && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100), e = n / 100 * t.duration() + i) : isNaN(e) && t.getLabelTime && -1 !== t.getLabelTime(e) ? e = t.getLabelTime(e) : t === N && ((r = e.indexOf("=")) > 0 ? (i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1)), e = e.substr(0, r - 1)) : i = 0, (s = _(e)) && (e = k(s, o / 100 * s.duration()) + i))), e = isNaN(e) ? o : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
			},
			k = function(e, t) {
				var o = e;
				if (t = t || 0, o.timeline) for (; o.timeline.timeline;) t = t / o._timeScale + o._startTime, o = o.timeline;
				return t
			},
			M = function(t, o, n) {
				r || (y("style", p).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", r = !0), "string" == typeof t && (t = document.querySelector(t));
				var i = y("div", t || p.body || p);
				return i.setAttribute("class", "gs-dev-tools" + (o ? " minimal" : "")), i.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', t && (i.style.position = "absolute", i.style.top = o ? "calc(100% - 42px)" : "calc(100% - 51px)"), n && ("string" == typeof n ? i.style.cssText = n : "object" == typeof n && (n.data = "root", e.set(i, n).kill()), i.style.top && (i.style.bottom = "auto"), i.style.width && e.set(i, {
					xPercent: -50,
					left: "50%",
					right: "auto",
					data: "root"
				}).kill()), !o && i.offsetWidth < 600 && (i.setAttribute("class", "gs-dev-tools minimal"), t && (i.style.top = "calc(100% - 42px)")), i
			},
			L = function(e, t, o, n) {
				var i, r;
				if ("mousedown" !== t && "mouseup" !== t || (e.style.cursor = "pointer"), "mousedown" === t && (r = void 0 !== e.onpointerdown ? "pointerdown" : void 0 !== e.ontouchstart ? "touchstart" : null)) return i = function(t) {
					"select" !== t.target.nodeName.toLowerCase() && t.type === r ? (t.stopPropagation(), s && (t.preventDefault(), o.call(e, t))) : t.type !== r && o.call(e, t), s = !0
				}, e.addEventListener(r, i, n), void e.addEventListener(t, i, n);
				e.addEventListener(t, o, n)
			},
			D = function(e, t, o, n) {
				var i, r = e.options,
					s = r.length;
				for (t += ""; --s > -1;) if (r[s].innerHTML === t || r[s].value === t) return e.selectedIndex = s, o.innerHTML = r[s].innerHTML, r[s];
				n && ((i = y("option", e)).setAttribute("value", t), i.innerHTML = o.innerHTML = "string" == typeof n ? n : t, e.selectedIndex = r.length - 1)
			},
			P = function(e, t, o) {
				var n = e.options,
					i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
				return e.selectedIndex = i, o && (o.innerHTML = n[i].innerHTML), n[i].value
			},
			N = new n({
				data: "root",
				id: "Global Timeline",
				autoRemoveChildren: !1,
				smoothChildTiming: !0
			}),
			X = new n({
				data: "root",
				id: "Global Temp",
				autoRemoveChildren: !1,
				smoothChildTiming: !0
			}),
			E = e.to(N, 1, {
				time: 1,
				ease: Linear.easeNone,
				data: "root",
				id: "_rootTween",
				paused: !0,
				immediateRender: !1
			}),
			Y = function() {
				var e, t, n = X._first;
				if (n) {
					if (a && a.animation() === N) {
						for (e = N._duration; n;) t = n._next, "function" == typeof n.target && n.target === n.vars.onComplete && !n._duration || n.target && n.target._gsIgnore ? o.prototype.add.call(b, n, n._startTime - n._delay) : N.add(n, n._startTime - n._delay), n = t;
						return e !== N.duration()
					}
					for (; n;) t = n._next, n._gc || n._totalTime === n._totalDuration ? n.kill() : o.prototype.add.call(b, n, n._startTime - n._delay), n = t
				}
			},
			O = function() {
				a && (a.update(), l = !1), e.ticker.removeEventListener("tick", O)
			},
			B = function(e) {
				var t = new n({
					data: "root",
					onComplete: function() {
						t.kill()
					}
				});
				return t.to(e.querySelector(".play-1"), .5, {
					attr: {
						d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
					},
					ease: Power3.easeInOut,
					rotation: 360,
					transformOrigin: "50% 50%"
				}).to(e.querySelector(".play-2"), .5, {
					attr: {
						d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
					},
					ease: Power3.easeInOut,
					rotation: 360,
					transformOrigin: "50% 50%"
				}, .05), t
			},
			H = function(e) {
				var t = new n({
					data: "root",
					paused: !0,
					onComplete: function() {
						t.kill()
					}
				});
				return t.to(e, .5, {
					rotation: 360,
					ease: Power3.easeInOut,
					transformOrigin: "50% 50%"
				}).to(e.querySelectorAll(".loop-path"), .5, {
					fill: "#91e600",
					ease: Linear.easeNone
				}, 0), t
			},
			R = function(o) {
        // if (this.vars = o = o || {}, o.id = o.id || ("string" == typeof o.animation ? o.animation : u++), h[o.id + ""] = this, !x)
        //  return window.location.href = "http://" + m + v + "?plugin=GSDevTools&source=codepen", !1;
				var n, r, s, l, d, f, g, b, k, X, O = this,
					R = M(o.container, o.minimal, o.css),
					z = function(e) {
						return R.querySelector(e)
					},
					F = function(e, t) {
						return !1 !== o.persist && "undefined" != typeof sessionStorage && sessionStorage.setItem("gs-dev-" + e + o.id, t), t
					},
					W = function(e) {
						var t;
						if (!1 !== o.persist && "undefined" != typeof sessionStorage) return t = sessionStorage.getItem("gs-dev-" + e + o.id), "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
					},
					V = z(".playhead"),
					G = z(".timeline-track"),
					j = z(".progress-bar"),
					q = z(".time"),
					U = z(".duration"),
					Z = 0,
					Q = function(e, t, o) {
						return function(i) {
							var a, c = G.getBoundingClientRect(),
								p = e.getBoundingClientRect(),
								f = p.width * t,
								g = e._gsTransform.x,
								u = c.left - p.left - f + g,
								h = c.right - p.right + (p.width - f) + g,
								m = u;
							o && (e !== K && (a = K.getBoundingClientRect()).left && (u += a.left + a.width - c.left), e !== J && (a = J.getBoundingClientRect()).left && (h -= c.left + c.width - a.left)), d = le, this.applyBounds({
								minX: u,
								maxX: h
							}), n = b.duration() / c.width, r = -m * n, l ? b.pause() : b.pause(r + n * this.x), this.target === V && (this.activated && (this.allowEventDefault = !1), this.activated = !0), s = !0
						}
					},
					$ = i.create(V, {
						type: "x",
						cursor: "ew-resize",
						allowNativeTouchScrolling: !1,
						allowEventDefault: !0,
						onPress: Q(V, .5, !0),
						onDrag: function() {
							var e = r + n * this.x;
							e < 0 ? e = 0 : e > b._duration && (e = b._duration), l || b.time(e), j.style.width = Math.min(oe - te, Math.max(0, e / b._duration * 100 - te)) + "%", q.innerHTML = e.toFixed(2)
						},
						onRelease: function(e) {
							le || b.resume()
						}
					})[0],
					K = z(".in-point"),
					J = z(".out-point"),
					ee = function() {
						te = 0, oe = 100, K.style.left = "0%", J.style.left = "100%", F("in", te), F("out", oe), re(!0)
					},
					te = 0,
					oe = 100,
					ne = i.create(K, {
						type: "x",
						cursor: "ew-resize",
						zIndexBoost: !1,
						allowNativeTouchScrolling: !1,
						allowEventDefault: !0,
						onPress: Q(K, 1, !0),
						onDoubleClick: ee,
						onDrag: function() {
							te = (r + n * this.x) / b.duration() * 100, b.progress(te / 100), re(!0)
						},
						onRelease: function() {
							te < 0 && (te = 0), w(), K.style.left = te + "%", F("in", te), e.set(K, {
								x: 0,
								data: "root",
								display: "block"
							}), le || b.resume()
						}
					})[0],
					ie = i.create(J, {
						type: "x",
						cursor: "ew-resize",
						allowNativeTouchScrolling: !1,
						allowEventDefault: !0,
						zIndexBoost: !1,
						onPress: Q(J, 0, !0),
						onDoubleClick: ee,
						onDrag: function() {
							oe = (r + n * this.x) / b.duration() * 100, b.progress(oe / 100), re(!0)
						},
						onRelease: function() {
							oe > 100 && (oe = 100), w(), J.style.left = oe + "%", F("out", oe), e.set(J, {
								x: 0,
								data: "root",
								display: "block"
							}), d || (ce(), b.resume())
						}
					})[0],
					re = function(e) {
						if (!$.isPressed || e) {
							var t = 100 * b.progress() || 0;
							t > 100 && (t = 100), t >= oe ? !f || b.paused() || $.isDragging ? (t !== oe && (t = oe, b.progress(t / 100)), le || de()) : (t = te, b.progress(t / 100).resume()) : t < te && (t = te, b.progress(t / 100)), (t !== Z || e) && (j.style.left = te + "%", j.style.width = Math.max(0, t - te) + "%", V.style.left = t + "%", q.innerHTML = b._time.toFixed(2), U.innerHTML = b._duration.toFixed(2), s && (V.style.transform = "translate(-50%,0)", V._gsTransform.x = 0, V._gsTransform.xPercent = -50, s = !1), Z = t)
						}
					},
					se = z(".play-pause"),
					ae = B(se),
					le = !1,
					ce = function() {
						b.progress() >= oe / 100 && b.progress(te / 100), ae.play(), b.play(), le && O.update(), le = !1
					},
					de = function() {
						ae.reverse(), b && b.pause(), le = !0
					},
					pe = function() {
						le ? ce() : de()
					},
					fe = function(e) {
						$.isPressed || (b.progress(te / 100), le || b.resume())
					},
					ge = z(".loop"),
					ue = H(ge),
					he = function(e) {
						F("loop", f = e), f ? (ue.play(), b.progress() >= oe / 100 && b.progress(te / 100).resume()) : ue.reverse()
					},
					me = function() {
						he(!f)
					},
					ve = z(".animation-list"),
					xe = z(".animation-label"),
					ye = function() {
						var e, t, n = T(k && !1 === o.globalSync ? k : N, !0),
							i = ve.children,
							r = 0;
						for (k && !1 === o.globalSync ? n.unshift(k) : o.hideGlobalTimeline || n.unshift(N), t = 0; t < n.length; t++)(e = i[t] || y("option", ve)).animation = n[t], r = t && n[t].vars.id === n[t - 1].vars.id ? r + 1 : 0, e.setAttribute("value", e.innerHTML = n[t].vars.id + (r ? " [" + r + "]" : n[t + 1] && n[t + 1].vars.id === n[t].vars.id ? " [0]" : ""));
						for (; t < i.length; t++) ve.removeChild(i[t])
					},
					we = function(n) {
						var i, r, s, l, c = 1;
						if (!arguments.length) return g;
						if ("string" == typeof n && (n = _(n)), n instanceof t || console.log("GSDevTools error: invalid animation."), n !== g) {
							if (g && (g._inProgress = te, g._outProgress = oe), g = n, b && (c = b.timeScale(), b.target === k && (k.resume(), b.kill())), te = g._inProgress || 0, oe = g._outProgress || 100, K.style.left = te + "%", J.style.left = oe + "%", X && (F("animation", g.vars.id), F("in", te), F("out", oe)), r = 0, l = Math.min(1e3, o.maxDuration || 1e3, S(g)), g === N || !1 !== o.globalSync) {
								if (Y(), b = E, a && a !== O && console.log("Error: GSDevTools can only have one instance that's globally synchronized."), a = O, g !== N) for ((s = (i = g).totalDuration()) > 99999999 && (s = i.duration()); i.timeline.timeline;) r = r / i._timeScale + i._startTime, s = s / i._timeScale + i._startTime, i = i.timeline;
								else s = N.duration();
								s - r > l && (s = r + l), N.pause(r), E.vars.time = s, E.invalidate(), E.duration(s - r).timeScale(c), le ? E.progress(1).pause(0) : e.delayedCall(.01, function() {
									E.resume().progress(te / 100), le && ce()
								})
							} else {
								if (a === O && (a = null), g !== k && k) {
									for ((s = (i = g).totalDuration()) > 99999999 && (s = i.duration()); i.timeline.timeline && i !== k;) r = r / i._timeScale + i._startTime, s = s / i._timeScale + i._startTime, i = i.timeline;
									s - r > l && (s = r + l), k.pause(r), (b = e.to(k, s - r, {
										time: s,
										ease: Linear.easeNone,
										data: "root"
									})).timeScale(c)
								} else b = g;
								E.pause(), N.resume(), b.seek(0)
							}
							U.innerHTML = b.duration().toFixed(2), D(ve, g.vars.id, xe)
						}
					},
					be = function() {
						var e, t, o;
						g === N && (e = (E._timeline._time - E._startTime) * E._timeScale, 1e3 === (o = Math.min(1e3, N.duration())) && (o = Math.min(1e3, S(N))), 1 !== (t = E.duration() / o) && o && (te *= t, oe < 100 && (oe *= t), E.seek(0), E.vars.time = o, E.invalidate(), E.duration(o), E.time(e), U.innerHTML = o.toFixed(2), re(!0)))
					},
					Te = z(".time-scale select"),
					Se = z(".time-scale-label"),
					_e = e.to([z(".gs-bottom"), z(".gs-top")], .3, {
						autoAlpha: 0,
						y: 50,
						ease: Power2.easeIn,
						data: "root",
						paused: !0
					}),
					Ce = !1,
					ke = function() {
						Ce || (_e.play(), De.pause(), Ce = !0)
					},
					Me = function() {
						De.pause(), Ce && (_e.reverse(), Ce = !1)
					},
					Le = function() {
						Ce ? Me() : ke()
					},
					De = e.delayedCall(1.3, ke).pause(),
					Pe = function(e) {
						A && !I && (I = N._startTime), X = !e, (k = _(o.animation)) && !k.vars.id && (k.vars.id = "[no id]"), ye();
						var t = _(W("animation"));
						t && (t._inProgress = W("in") || 0, t._outProgress = W("out") || 100), o.paused && de(), g = null, we(k || t || N);
						var n = o.timeScale || W("timeScale"),
							i = t === g;
						n && (D(Te, n, Se, n + "x"), E.timeScale(n)), 100 === (te = ("inTime" in o ? C(o.inTime, g, 0, 0) : i ? t._inProgress : 0) || 0) && !o.animation && t && (we(N), te = C(o.inTime, g, 0, 0) || 0), te && (K.style.left = te + "%", K.style.display = J.style.display = "block"), (oe = ("outTime" in o ? C(o.outTime, g, 100, te) : i ? t._outProgress : 0) || 100) < te && (oe = 100), 100 !== oe && (J.style.left = oe + "%", K.style.display = J.style.display = "block"), (f = "loop" in o ? o.loop : W("loop")) && he(!0), o.paused && b.progress(te / 100, !0).pause(), A && g === N && I && !1 !== o.globalSync && !le && b.time(-I, !0), re(!0)
					};
				L(ve, "change", function(e) {
					we(ve.options[ve.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), le && ce()
				}), L(ve, "mousedown", ye), L(se, "mousedown", pe), L(z(".seek-bar"), "mousedown", function(e) {
					if (!$.isPressed) {
						var t = e.target.getBoundingClientRect(),
							o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
						if (o < te) return te = o = Math.max(0, o), K.style.left = te + "%", void ne.startDrag(e);
						if (o > oe) return oe = o = Math.min(100, o), J.style.left = oe + "%", void ie.startDrag(e);
						b.progress(o / 100).pause(), re(!0), $.startDrag(e)
					}
				}), L(z(".rewind"), "mousedown", fe), L(ge, "mousedown", me), L(Te, "change", function(t) {
					var o = parseFloat(Te.options[Te.selectedIndex].value) || 1;
					b.timeScale(o), F("timeScale", o), le || (b.progress() >= oe / 100 ? b.progress(te / 100).pause() : b.pause(), e.delayedCall(.01, function() {
						b.resume()
					})), Se.innerHTML = o + "x", Te.blur && Te.blur()
				}), "auto" === o.visibility ? (L(R, "mouseout", function(e) {
					i.hitTest(e, R) || $.isDragging || ne.isDragging || ie.isDragging || De.restart(!0)
				}), L(R, "mouseover", Me)) : "hidden" === o.visibility && (Ce = !0, _e.progress(1)), !1 !== o.keyboard && (c && o.keyboard ? console.log("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (c = O, L(p, "keydown", function(e) {
					var t, o = e.keyCode ? e.keyCode : e.which;
					32 === o ? pe() : 38 === o ? (t = parseFloat(P(Te, -1, Se)), b.timeScale(t), F("timeScale", t)) : 40 === o ? (t = parseFloat(P(Te, 1, Se)), b.timeScale(t), F("timeScale", t)) : 37 === o ? fe() : 39 === o ? b.progress(oe / 100) : 76 === o ? me() : 72 === o ? Le() : 73 === o ? (te = 100 * b.progress(), F("in", te), K.style.left = te + "%", re(!0)) : 79 === o && (oe = 100 * b.progress(), F("out", oe), J.style.left = oe + "%", re(!0))
				}))), e.set(V, {
					xPercent: -50,
					x: 0,
					data: "root"
				}), e.set(K, {
					xPercent: -100,
					x: 0,
					data: "root"
				}), K._gsIgnore = J._gsIgnore = V._gsIgnore = se._gsIgnore = ge._gsIgnore = !0, e.killTweensOf([K, J, V]), Pe(A), A && e.delayedCall(1e-4, Pe, [!1], this), e.ticker.addEventListener("tick", re), this.update = function(e) {
					a === O && (E._paused && !e || Y(), be())
				}, this.minimal = function(e) {
					var t, n = R.classList.contains("minimal");
					if (!arguments.length || n === e) return n;
					e ? R.classList.add("minimal") : R.classList.remove("minimal"), o.container && (R.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"), $.isPressed && (l = !0, $.endDrag($.pointerEvent), l = !1, t = 100 * b.progress(), j.style.width = Math.max(0, t - te) + "%", V.style.left = t + "%", V.style.transform = "translate(-50%,0)", V._gsTransform.x = 0, V._gsTransform.xPercent = -50, $.startDrag($.pointerEvent, !0))
				}, this.animation = we, this.updateList = ye
			},
			z = !0,
			A = !0,
			F = e.onOverwrite,
			I = 0;
		return R.version = "0.1.5", R.logOverwrites = !1, R.getById = function(e) {
			return h[e]
		}, b._startTime += b._time, N._startTime = X._startTime = b._time = b._totalTime = 0, e.delayedCall(.01, function() {
			a ? a.update() : Y()
		}), e.delayedCall(2, function() {
			var e, t, n;
			if (!a) for (Y(), e = N._first, n = N._startTime; e;) t = e._next, e._totalDuration !== e._totalTime || 1 !== e.ratio ? o.prototype.add.call(b, e, e._startTime - e._delay + n) : e.kill(), e = t;
			z = !1, A = !1
		}), b.add = function(t, n, i, r) {
			var s = t.data;
			if (z && t.vars && "root" !== s && "ignore" !== s && "isStart" !== s && "isFromStart" !== s && "_draggable" !== s && !(A && !t._duration && t instanceof e) && (!t.vars.onComplete || t.vars.onComplete !== t.vars.onReverseComplete)) {
				var a = N;
				return E._time && (E._paused ? (a = X, t._recordedTime = N.rawTime()) : (n = (b._time - E._startTime) * E._timeScale, l || (e.ticker.addEventListener("tick", O), l = !0))), a.add(t, n, i, r), t.vars.repeat && (a._dirty = !0), this
			}
			return o.prototype.add.apply(this, arguments)
		}, N._enabled = X._enabled = function(e, t) {
			return o.prototype._enabled.apply(this, arguments)
		}, n.prototype._remove = function(e, t) {
			return o.prototype._remove.apply(this, arguments), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
		}, e.onOverwrite = function(e, t, o, n) {
			R.logOverwrites && (n ? console.log("[Overwrite warning] the following properties were overwritten: ", n, "| target:", o, "| overwritten tween: ", e, "| overwriting tween:", t) : console.log("[Overwrite warning] the following tween was overwritten:", e, "by", t)), "function" == typeof F && F(e, t, o, n)
		}, R.create = function(e) {
			return new R(e)
		}, R
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(e) {
	"use strict";
	var t = function() {
			return (_gsScope.GreenSockGlobals || _gsScope).GSDevTools
		};
	"undefined" != typeof module && module.exports ? (require("../TweenLite.js"), require("../TimelineLite.js"), require("../plugins/CSSPlugin.js"), require("./Draggable.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite", "TimelineLite", "CSSPlugin", "Draggable"], t)
}(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(e, t, o) {
		var n, i, r, s, a, l, c, d, p, f = {
			css: {},
			data: "_draggable"
		},
			g = {
				css: {},
				data: "_draggable"
			},
			u = {
				css: {},
				data: "_draggable"
			},
			h = {
				css: {}
			},
			m = _gsScope._gsDefine.globals,
			v = {},
			x = {
				style: {}
			},
			y = _gsScope.document || {
				createElement: function() {
					return x
				}
			},
			w = y.documentElement || {},
			b = function(e) {
				return y.createElementNS ? y.createElementNS("http://www.w3.org/1999/xhtml", e) : y.createElement(e)
			},
			T = b("div"),
			S = [],
			_ = function() {
				return !1
			},
			C = 180 / Math.PI,
			k = 999999999999999,
			M = Date.now ||
		function() {
			return (new Date).getTime()
		}, L = !(y.addEventListener || !y.all), D = y.createElement("div"), P = [], N = {}, X = 0, E = /^(?:a|input|textarea|button|select)$/i, Y = 0, O = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"), B = 0, H = {}, R = {}, z = function(e) {
			if ("string" == typeof e && (e = t.selector(e)), !e || e.nodeType) return [e];
			var o, n = [],
				i = e.length;
			for (o = 0; o !== i; n.push(e[o++]));
			return n
		}, A = function(e, t) {
			var o, n = {};
			if (t) for (o in e) n[o] = e[o] * t;
			else for (o in e) n[o] = e[o];
			return n
		}, F = function() {
			for (var e = P.length; --e > -1;) P[e]()
		}, I = function(e) {
			P.push(e), 1 === P.length && t.ticker.addEventListener("tick", F, this, !1, 1)
		}, W = function(e) {
			for (var o = P.length; --o > -1;) P[o] === e && P.splice(o, 1);
			t.to(V, 0, {
				overwrite: "all",
				delay: 15,
				onComplete: V,
				data: "_draggable"
			})
		}, V = function() {
			P.length || t.ticker.removeEventListener("tick", F)
		}, G = function(e, t) {
			var o;
			for (o in t) void 0 === e[o] && (e[o] = t[o]);
			return e
		}, j = function() {
			return null != window.pageYOffset ? window.pageYOffset : null != y.scrollTop ? y.scrollTop : w.scrollTop || y.body.scrollTop || 0
		}, q = function() {
			return null != window.pageXOffset ? window.pageXOffset : null != y.scrollLeft ? y.scrollLeft : w.scrollLeft || y.body.scrollLeft || 0
		}, U = function(e, t) {
			Oe(e, "scroll", t), Q(e.parentNode) || U(e.parentNode, t)
		}, Z = function(e, t) {
			Be(e, "scroll", t), Q(e.parentNode) || Z(e.parentNode, t)
		}, Q = function(e) {
			return !(e && e !== w && e !== y && e !== y.body && e !== window && e.nodeType && e.parentNode)
		}, $ = function(e, t) {
			var o = "x" === t ? "Width" : "Height",
				n = "scroll" + o,
				i = "client" + o,
				r = y.body;
			return Math.max(0, Q(e) ? Math.max(w[n], r[n]) - (window["inner" + o] || w[i] || r[i]) : e[n] - e[i])
		}, K = function(e) {
			var t = Q(e),
				o = $(e, "x"),
				n = $(e, "y");
			t ? e = R : K(e.parentNode), e._gsMaxScrollX = o, e._gsMaxScrollY = n, e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0
		}, J = function(e, t) {
			return e = e || window.event, v.pageX = e.clientX + y.body.scrollLeft + w.scrollLeft, v.pageY = e.clientY + y.body.scrollTop + w.scrollTop, t && (e.returnValue = !1), v
		}, ee = function(e) {
			return e ? ("string" == typeof e && (e = t.selector(e)), e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]), e === window || e.nodeType && e.style ? e : null) : e
		}, te = function(e, t) {
			var o, i, r, s = e.style;
			if (void 0 === s[t]) {
				for (r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5, o = t.charAt(0).toUpperCase() + t.substr(1); --i > -1 && void 0 === s[r[i] + o];);
				if (i < 0) return "";
				t = (n = 3 === i ? "ms" : r[i]) + o
			}
			return t
		}, oe = function(e, t, o) {
			var n = e.style;
			n && (void 0 === n[t] && (t = te(e, t)), null == o ? n.removeProperty ? n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(t) : void 0 !== n[t] && (n[t] = o))
		}, ne = y.defaultView ? y.defaultView.getComputedStyle : _, ie = /(?:Left|Right|Width)/i, re = /(?:\d|\-|\+|=|#|\.)*/g, se = function(e, t, o, n, i) {
			if ("px" === n || !n) return o;
			if ("auto" === n || !o) return 0;
			var r, s = ie.test(t),
				a = e,
				l = T.style,
				c = o < 0;
			return c && (o = -o), "%" === n && -1 !== t.indexOf("border") ? r = o / 100 * (s ? e.clientWidth : e.clientHeight) : (l.cssText = "border:0 solid red;position:" + le(e, "position", !0) + ";line-height:0;", "%" !== n && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = o + n : (a = e.parentNode || y.body, l[s ? "width" : "height"] = o + n), a.appendChild(T), r = parseFloat(T[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(T), 0 !== r || i || (r = se(e, t, o, n, !0))), c ? -r : r
		}, ae = function(e, t) {
			if ("absolute" !== le(e, "position", !0)) return 0;
			var o = "left" === t ? "Left" : "Top",
				n = le(e, "margin" + o, !0);
			return e["offset" + o] - (se(e, t, parseFloat(n), (n + "").replace(re, "")) || 0)
		}, le = function(e, t, o) {
			var n, i = (e._gsTransform || {})[t];
			return i || 0 === i ? i : (e.style[t] ? i = e.style[t] : (n = ne(e)) ? i = (i = n.getPropertyValue(t.replace(/([A-Z])/g, "-$1").toLowerCase())) || n.length ? i : n[t] : e.currentStyle && (i = e.currentStyle[t]), "auto" !== i || "top" !== t && "left" !== t || (i = ae(e, t)), o ? i : parseFloat(i) || 0)
		}, ce = function(e, t, o) {
			var n = e.vars,
				i = n[o],
				r = e._listeners[t];
			"function" == typeof i && i.apply(n[o + "Scope"] || n.callbackScope || e, n[o + "Params"] || [e.pointerEvent]), r && e.dispatchEvent(t)
		}, de = function(e, t) {
			var o, n, i, r = ee(e);
			return r ? Pe(r, t) : void 0 !== e.left ? (i = _e(t), {
				left: e.left - i.x,
				top: e.top - i.y,
				width: e.width,
				height: e.height
			}) : (n = e.min || e.minX || e.minRotation || 0, o = e.min || e.minY || 0, {
				left: n,
				top: o,
				width: (e.max || e.maxX || e.maxRotation || 0) - n,
				height: (e.max || e.maxY || 0) - o
			})
		}, pe = function() {
			if (!y.createElementNS) return s = 0, void(a = !1);
			var e, t, o, n, i = b("div"),
				r = y.createElementNS("http://www.w3.org/2000/svg", "svg"),
				p = b("div"),
				f = i.style,
				g = y.body || w,
				u = "flex" === le(g, "display", !0);
			y.body && ue && (f.position = "absolute", g.appendChild(p), p.appendChild(i), n = i.offsetParent, p.style[ue] = "rotate(1deg)", d = i.offsetParent === n, p.style.position = "absolute", f.height = "10px", n = i.offsetTop, p.style.border = "5px solid red", c = n !== i.offsetTop, g.removeChild(p)), f = r.style, r.setAttributeNS(null, "width", "400px"), r.setAttributeNS(null, "height", "400px"), r.setAttributeNS(null, "viewBox", "0 0 400 400"), f.display = "block", f.boxSizing = "border-box", f.border = "0px solid red", f.transform = "none", i.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", g.appendChild(i), i.appendChild(r), t = (o = r.createSVGPoint().matrixTransform(r.getScreenCTM())).y, i.scrollTop = 100, o.x = o.y = 0, o = o.matrixTransform(r.getScreenCTM()), l = t - o.y < 100.1 ? 0 : t - o.y - 150, i.removeChild(r), g.removeChild(i), g.appendChild(r), u && (g.style.display = "block"), t = (e = r.getScreenCTM()).e, f.border = "50px solid red", e = r.getScreenCTM(), 0 === t && 0 === e.e && 0 === e.f && 1 === e.a ? (s = 1, a = !0) : (s = t !== e.e ? 1 : 0, a = 1 !== e.a), u && (g.style.display = "flex"), g.removeChild(r)
		}, fe = "" !== te(T, "perspective"), ge = te(T, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), ue = te(T, "transform"), he = ue.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), me = {}, ve = {}, xe = _gsScope.SVGElement, ye = function(e) {
			return !!(xe && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
		}, we = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11, be = [], Te = [], Se = function(e) {
			if (!e.getBoundingClientRect || !e.parentNode || !ue) return {
				offsetTop: 0,
				offsetLeft: 0,
				scaleX: 1,
				scaleY: 1,
				offsetParent: w
			};
			if (!1 !== Ge.cacheSVGData && e._dCache && e._dCache.lastUpdate === t.ticker.frame) return e._dCache;
			var o, n, i, r, c, d, p, f, g, u, h, m, v = e,
				x = Ce(e);
			if (x.lastUpdate = t.ticker.frame, e.getBBox && !x.isSVGRoot) {
				for (v = e.parentNode, o = e.getBBox(); v && "svg" !== (v.nodeName + "").toLowerCase();) v = v.parentNode;
				return r = Se(v), x.offsetTop = o.y * r.scaleY, x.offsetLeft = o.x * r.scaleX, x.scaleX = r.scaleX, x.scaleY = r.scaleY, x.offsetParent = v || w, x
			}
			for ((i = x.offsetParent) === y.body && (i = w), Te.length = be.length = 0; v && ("matrix(1, 0, 0, 1, 0, 0)" !== (c = le(v, ue, !0)) && "none" !== c && "translate3d(0px, 0px, 0px)" !== c && (Te.push(v), be.push(v.style[ue]), v.style[ue] = "none"), v !== i);) v = v.parentNode;
			for (n = i.getBoundingClientRect(), c = e.getScreenCTM(), p = (f = e.createSVGPoint()).matrixTransform(c), f.x = f.y = 10, f = f.matrixTransform(c), x.scaleX = (f.x - p.x) / 10, x.scaleY = (f.y - p.y) / 10, void 0 === s && pe(), x.borderBox && !a && e.getAttribute("width") && (r = ne(e) || {}, g = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth) || 0, u = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth) || 0, h = parseFloat(r.width) || 0, m = parseFloat(r.height) || 0, x.scaleX *= (h - g) / h, x.scaleY *= (m - u) / m), l ? (o = e.getBoundingClientRect(), x.offsetLeft = o.left - n.left, x.offsetTop = o.top - n.top) : (x.offsetLeft = p.x - n.left, x.offsetTop = p.y - n.top), x.offsetParent = i, d = Te.length; --d > -1;) Te[d].style[ue] = be[d];
			return x
		}, _e = function(e, o) {
			if (o = o || {}, !e || e === w || !e.parentNode || e === window) return {
				x: 0,
				y: 0
			};
			var n = ne(e),
				i = ge && n ? n.getPropertyValue(ge) : "50% 50%",
				r = i.split(" "),
				s = -1 !== i.indexOf("left") ? "0%" : -1 !== i.indexOf("right") ? "100%" : r[0],
				a = -1 !== i.indexOf("top") ? "0%" : -1 !== i.indexOf("bottom") ? "100%" : r[1];
			return "center" !== a && null != a || (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), e.getBBox && ye(e) ? (e._gsTransform || (t.set(e, {
				x: "+=0",
				overwrite: !1
			}), void 0 === e._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), i = e.getBBox(), o.x = e._gsTransform.xOrigin - i.x, o.y = e._gsTransform.yOrigin - i.y) : (e.getBBox && -1 !== (s + a).indexOf("%") && (e = {
				offsetWidth: (e = e.getBBox()).width,
				offsetHeight: e.height
			}), o.x = -1 !== s.indexOf("%") ? e.offsetWidth * parseFloat(s) / 100 : parseFloat(s), o.y = -1 !== a.indexOf("%") ? e.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), o
		}, Ce = function(e) {
			if (!1 !== Ge.cacheSVGData && e._dCache && e._dCache.lastUpdate === t.ticker.frame) return e._dCache;
			var o, n = e._dCache = e._dCache || {},
				i = ne(e),
				r = e.getBBox && ye(e),
				s = "svg" === (e.nodeName + "").toLowerCase();
			if (n.isSVG = r, n.isSVGRoot = s, n.borderBox = "border-box" === i.boxSizing, n.computedStyle = i, s)(o = e.parentNode || w).insertBefore(T, e), n.offsetParent = T.offsetParent || w, o.removeChild(T);
			else if (r) {
				for (o = e.parentNode; o && "svg" !== (o.nodeName + "").toLowerCase();) o = o.parentNode;
				n.offsetParent = o
			} else n.offsetParent = e.offsetParent;
			return n
		}, ke = function(e, t, o, n, i) {
			if (e === window || !e || !e.style || !e.parentNode) return [1, 0, 0, 1, 0, 0];
			var r, a, l, p, f, g, u, h, m, v, x, b, T, S, _ = e._dCache || Ce(e),
				C = e.parentNode,
				k = C._dCache || Ce(C),
				M = _.computedStyle,
				L = _.isSVG ? k.offsetParent : C.offsetParent;
			return r = _.isSVG && -1 !== (e.style[ue] + "").indexOf("matrix") ? e.style[ue] : M ? M.getPropertyValue(he) : e.currentStyle ? e.currentStyle[ue] : "1,0,0,1,0,0", e.getBBox && -1 !== (e.getAttribute("transform") + "").indexOf("matrix") && (r = e.getAttribute("transform")), (r = (r + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]), n ? r[4] = r[5] = 0 : _.isSVG && (f = e._gsTransform) && (f.xOrigin || f.yOrigin) && (r[0] = parseFloat(r[0]), r[1] = parseFloat(r[1]), r[2] = parseFloat(r[2]), r[3] = parseFloat(r[3]), r[4] = parseFloat(r[4]) - (f.xOrigin - (f.xOrigin * r[0] + f.yOrigin * r[2])), r[5] = parseFloat(r[5]) - (f.yOrigin - (f.xOrigin * r[1] + f.yOrigin * r[3]))), t && (void 0 === s && pe(), l = _.isSVG || _.isSVGRoot ? Se(e) : e, _.isSVG ? (p = e.getBBox(), v = k.isSVGRoot ? {
				x: 0,
				y: 0
			} : C.getBBox(), l = {
				offsetLeft: p.x - v.x,
				offsetTop: p.y - v.y,
				offsetParent: _.offsetParent
			}) : _.isSVGRoot ? (x = parseInt(M.borderTopWidth, 10) || 0, b = parseInt(M.borderLeftWidth, 10) || 0, T = (r[0] - s) * b + r[2] * x, S = r[1] * b + (r[3] - s) * x, g = t.x, u = t.y, h = g - (g * r[0] + u * r[2]), m = u - (g * r[1] + u * r[3]), r[4] = parseFloat(r[4]) + h, r[5] = parseFloat(r[5]) + m, t.x -= h, t.y -= m, g = l.scaleX, u = l.scaleY, i || (t.x *= g, t.y *= u), r[0] *= g, r[1] *= u, r[2] *= g, r[3] *= u, we || (t.x += T, t.y += S), L === y.body && l.offsetParent === w && (L = w)) : !c && e.offsetParent && (t.x += parseInt(le(e.offsetParent, "borderLeftWidth"), 10) || 0, t.y += parseInt(le(e.offsetParent, "borderTopWidth"), 10) || 0), a = C === w || C === y.body, r[4] = Number(r[4]) + t.x + (l.offsetLeft || 0) - o.x - (a ? 0 : C.scrollLeft || 0), r[5] = Number(r[5]) + t.y + (l.offsetTop || 0) - o.y - (a ? 0 : C.scrollTop || 0), C && "fixed" === le(e, "position", M) && (r[4] += q(), r[5] += j()), !C || C === w || L !== l.offsetParent || k.isSVG || d && "100100" !== ke(C).join("") || (l = k.isSVGRoot ? Se(C) : C, r[4] -= l.offsetLeft || 0, r[5] -= l.offsetTop || 0, c || !k.offsetParent || _.isSVG || _.isSVGRoot || (r[4] -= parseInt(le(k.offsetParent, "borderLeftWidth"), 10) || 0, r[5] -= parseInt(le(k.offsetParent, "borderTopWidth"), 10) || 0))), r
		}, Me = function(e, t) {
			if (!e || e === window || !e.parentNode) return [1, 0, 0, 1, 0, 0];
			for (var o, n, i, r, s, a, l, c, d = _e(e, me), p = _e(e.parentNode, ve), f = ke(e, d, p, !1, !t);
			(e = e.parentNode) && e.parentNode && e !== w;) d = p, p = _e(e.parentNode, d === me ? ve : me), l = ke(e, d, p), o = f[0], n = f[1], i = f[2], r = f[3], s = f[4], a = f[5], f[0] = o * l[0] + n * l[2], f[1] = o * l[1] + n * l[3], f[2] = i * l[0] + r * l[2], f[3] = i * l[1] + r * l[3], f[4] = s * l[0] + a * l[2] + l[4], f[5] = s * l[1] + a * l[3] + l[5];
			return t && (o = f[0], n = f[1], i = f[2], r = f[3], s = f[4], a = f[5], c = o * r - n * i, f[0] = r / c, f[1] = -n / c, f[2] = -i / c, f[3] = o / c, f[4] = (i * a - r * s) / c, f[5] = -(o * a - n * s) / c), f
		}, Le = function(e, t, o, n, i) {
			e = ee(e);
			var r = Me(e, !1),
				s = t.x,
				a = t.y;
			return o && (_e(e, t), s -= t.x, a -= t.y), n = !0 === n ? t : n || {}, n.x = s * r[0] + a * r[2] + r[4], n.y = s * r[1] + a * r[3] + r[5], n
		}, De = function(e, t, o) {
			var n = e.x * t[0] + e.y * t[2] + t[4],
				i = e.x * t[1] + e.y * t[3] + t[5];
			return e.x = n * o[0] + i * o[2] + o[4], e.y = n * o[1] + i * o[3] + o[5], e
		}, Pe = function(e, t, o) {
			if (!(e = ee(e))) return null;
			t = ee(t);
			var n, i, r, s, a, l, c, d, p, f, g, u, h, m, v, x, b, T, S, _, C, k, M = e.getBBox && ye(e);
			if (e === window) s = j(), r = (i = q()) + (w.clientWidth || e.innerWidth || y.body.clientWidth || 0), a = s + ((e.innerHeight || 0) - 20 < w.clientHeight ? w.clientHeight : e.innerHeight || y.body.clientHeight || 0);
			else {
				if (void 0 === t || t === window) return e.getBoundingClientRect();
				i = -(n = _e(e)).x, s = -n.y, M ? (h = (u = e.getBBox()).width, m = u.height) : "svg" !== (e.nodeName + "").toLowerCase() && e.offsetWidth ? (h = e.offsetWidth, m = e.offsetHeight) : (C = ne(e), h = parseFloat(C.width), m = parseFloat(C.height)), r = i + h, a = s + m, "svg" !== e.nodeName.toLowerCase() || L || (k = (v = Se(e)).computedStyle || {}, T = (e.getAttribute("viewBox") || "0 0").split(" "), S = parseFloat(T[0]), _ = parseFloat(T[1]), x = parseFloat(k.borderLeftWidth) || 0, b = parseFloat(k.borderTopWidth) || 0, r -= h - (h - x) / v.scaleX - S, a -= m - (m - b) / v.scaleY - _, i -= x / v.scaleX - S, s -= b / v.scaleY - _, C && (r += (parseFloat(k.borderRightWidth) + x) / v.scaleX, a += (b + parseFloat(k.borderBottomWidth)) / v.scaleY))
			}
			return e === t ? {
				left: i,
				top: s,
				width: r - i,
				height: a - s
			} : (l = Me(e), c = Me(t, !0), d = De({
				x: i,
				y: s
			}, l, c), p = De({
				x: r,
				y: s
			}, l, c), f = De({
				x: r,
				y: a
			}, l, c), g = De({
				x: i,
				y: a
			}, l, c), i = Math.min(d.x, p.x, f.x, g.x), s = Math.min(d.y, p.y, f.y, g.y), H.x = H.y = 0, o && _e(t, H), {
				left: i + H.x,
				top: s + H.y,
				width: Math.max(d.x, p.x, f.x, g.x) - i,
				height: Math.max(d.y, p.y, f.y, g.y) - s
			})
		}, Ne = function(e) {
			return !!(e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
		}, Xe = function(e) {
			var t, o, n, i = [],
				r = e.length;
			for (t = 0; t < r; t++) if (o = e[t], Ne(o)) for (n = o.length, n = 0; n < o.length; n++) i.push(o[n]);
			else o && 0 !== o.length && i.push(o);
			return i
		}, Ee = "ontouchstart" in w && "orientation" in window, Ye = function(e) {
			for (var t = e.split(","), o = (void 0 !== T.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== T.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), n = {}, i = 8; --i > -1;) n[t[i]] = o[i], n[o[i]] = t[i];
			return n
		}("touchstart,touchmove,touchend,touchcancel"), Oe = function(e, t, o, n) {
			e.addEventListener ? e.addEventListener(Ye[t] || t, o, n) : e.attachEvent && e.attachEvent("on" + t, o)
		}, Be = function(e, t, o) {
			e.removeEventListener ? e.removeEventListener(Ye[t] || t, o) : e.detachEvent && e.detachEvent("on" + t, o)
		}, He = function(e, t) {
			for (var o = e.length; --o > -1;) if (e[o].identifier === t) return !0;
			return !1
		}, Re = function(e) {
			i = e.touches && Y < e.touches.length, Be(e.target, "touchend", Re)
		}, ze = function(e) {
			i = e.touches && Y < e.touches.length, Oe(e.target, "touchend", Re)
		}, Ae = function(e, t, o, n, i, r) {
			var s, a, l, c = {};
			if (t) if (1 !== i && t instanceof Array) {
				if (c.end = s = [], l = t.length, "object" == typeof t[0]) for (a = 0; a < l; a++) s[a] = A(t[a], i);
				else for (a = 0; a < l; a++) s[a] = t[a] * i;
				o += 1.1, n -= 1.1
			} else c.end = "function" == typeof t ?
			function(o) {
				var n, r, s = t.call(e, o);
				if (1 !== i) if ("object" == typeof s) {
					n = {};
					for (r in s) n[r] = s[r] * i;
					s = n
				} else s *= i;
				return s
			} : t;
			return (o || 0 === o) && (c.max = o), (n || 0 === n) && (c.min = n), r && (c.velocity = 0), c
		}, Fe = function(e) {
			var t;
			return !(!e || !e.getAttribute || "BODY" === e.nodeName) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !E.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Fe(e.parentNode))
		}, Ie = function(e, t) {
			for (var o, n = e.length; --n > -1;)(o = e[n]).ondragstart = o.onselectstart = t ? null : _, oe(o, "userSelect", t ? "text" : "none")
		}, We = function() {
			var e, t = y.createElement("div"),
				o = y.createElement("div"),
				n = o.style,
				i = y.body || T;
			return n.display = "inline-block", n.position = "relative", t.style.cssText = o.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", t.appendChild(o), i.appendChild(t), p = o.offsetHeight + 18 > t.scrollHeight, n.width = "100%", ue || (n.paddingRight = "500px", e = t.scrollLeft = t.scrollWidth - t.clientWidth, n.left = "-90px", e = e !== t.scrollLeft), i.removeChild(t), e
		}(), Ve = function(e, o) {
			e = ee(e), o = o || {};
			var n, i, r, s, a, l, c = y.createElement("div"),
				d = c.style,
				f = e.firstChild,
				g = 0,
				u = 0,
				h = e.scrollTop,
				m = e.scrollLeft,
				v = e.scrollWidth,
				x = e.scrollHeight,
				w = 0,
				b = 0,
				T = 0;
			fe && !1 !== o.force3D ? (a = "translate3d(", l = "px,0px)") : ue && (a = "translate(", l = "px)"), this.scrollTop = function(e, t) {
				if (!arguments.length) return -this.top();
				this.top(-e, t)
			}, this.scrollLeft = function(e, t) {
				if (!arguments.length) return -this.left();
				this.left(-e, t)
			}, this.left = function(n, i) {
				if (!arguments.length) return -(e.scrollLeft + u);
				var r = e.scrollLeft - m,
					s = u;
				if ((r > 2 || r < -2) && !i) return m = e.scrollLeft, t.killTweensOf(this, !0, {
					left: 1,
					scrollLeft: 1
				}), this.left(-m), void(o.onKill && o.onKill());
				(n = -n) < 0 ? (u = n - .5 | 0, n = 0) : n > b ? (u = n - b | 0, n = b) : u = 0, (u || s) && (a ? this._suspendTransforms || (d[ue] = a + -u + "px," + -g + l) : d.left = -u + "px", We && u + w >= 0 && (d.paddingRight = u + w + "px")), e.scrollLeft = 0 | n, m = e.scrollLeft
			}, this.top = function(n, i) {
				if (!arguments.length) return -(e.scrollTop + g);
				var r = e.scrollTop - h,
					s = g;
				if ((r > 2 || r < -2) && !i) return h = e.scrollTop, t.killTweensOf(this, !0, {
					top: 1,
					scrollTop: 1
				}), this.top(-h), void(o.onKill && o.onKill());
				(n = -n) < 0 ? (g = n - .5 | 0, n = 0) : n > T ? (g = n - T | 0, n = T) : g = 0, (g || s) && (a ? this._suspendTransforms || (d[ue] = a + -u + "px," + -g + l) : d.top = -g + "px"), e.scrollTop = 0 | n, h = e.scrollTop
			}, this.maxScrollTop = function() {
				return T
			}, this.maxScrollLeft = function() {
				return b
			}, this.disable = function() {
				for (f = c.firstChild; f;) s = f.nextSibling, e.appendChild(f), f = s;
				e === c.parentNode && e.removeChild(c)
			}, this.enable = function() {
				if ((f = e.firstChild) !== c) {
					for (; f;) s = f.nextSibling, c.appendChild(f), f = s;
					e.appendChild(c), this.calibrate()
				}
			}, this.calibrate = function(t) {
				var o, s, a = e.clientWidth === n;
				h = e.scrollTop, m = e.scrollLeft, a && e.clientHeight === i && c.offsetHeight === r && v === e.scrollWidth && x === e.scrollHeight && !t || ((g || u) && (o = this.left(), s = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), a && !t || (d.display = "block", d.width = "auto", d.paddingRight = "0px", (w = Math.max(0, e.scrollWidth - e.clientWidth)) && (w += le(e, "paddingLeft") + (p ? le(e, "paddingRight") : 0))), d.display = "inline-block", d.position = "relative", d.overflow = "visible", d.verticalAlign = "top", d.width = "100%", d.paddingRight = w + "px", p && (d.paddingBottom = le(e, "paddingBottom", !0)), L && (d.zoom = "1"), n = e.clientWidth, i = e.clientHeight, v = e.scrollWidth, x = e.scrollHeight, b = e.scrollWidth - n, T = e.scrollHeight - i, r = c.offsetHeight, d.display = "block", (o || s) && (this.left(o), this.top(s)))
			}, this.content = c, this.element = e, this._suspendTransforms = !1, this.enable()
		}, Ge = function(n, s) {
			e.call(this, n), n = ee(n), r || (r = m.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = A(s || {}), this.target = n, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !! s.allowEventDefault;
			var a, l, c, d, p, v, x, b, T, _, P, E, F, V, j, q, $, te, ne, ie, re, se, ae, pe, fe, ge, ue, he, me, ve, xe, we, be, Te, Se = (s.type || (L ? "top,left" : "x,y")).toLowerCase(),
				_e = -1 !== Se.indexOf("x") || -1 !== Se.indexOf("y"),
				Ce = -1 !== Se.indexOf("rotation"),
				ke = Ce ? "rotation" : _e ? "x" : "left",
				De = _e ? "y" : "top",
				Pe = -1 !== Se.indexOf("x") || -1 !== Se.indexOf("left") || "scroll" === Se,
				Ne = -1 !== Se.indexOf("y") || -1 !== Se.indexOf("top") || "scroll" === Se,
				Xe = s.minimumMovement || 2,
				Re = this,
				We = z(s.trigger || s.handle || n),
				je = {},
				qe = 0,
				Ue = !1,
				Qe = s.autoScrollMarginTop || 40,
				$e = s.autoScrollMarginRight || 40,
				Ke = s.autoScrollMarginBottom || 40,
				Je = s.autoScrollMarginLeft || 40,
				et = s.clickableTest || Fe,
				tt = 0,
				ot = function(e) {
					if (!(Re.isPressed && e.which < 2)) return e.preventDefault(), e.stopPropagation(), !1;
					Re.endDrag()
				},
				nt = function(e) {
					if (Re.autoScroll && Re.isDragging && (Ue || te)) {
						var t, o, i, r, s, a, c, d, p = n,
							f = 15 * Re.autoScroll;
						for (Ue = !1, R.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != w.scrollTop ? w.scrollTop : y.body.scrollTop, R.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != w.scrollLeft ? w.scrollLeft : y.body.scrollLeft, r = Re.pointerX - R.scrollLeft, s = Re.pointerY - R.scrollTop; p && !o;) t = (o = Q(p.parentNode)) ? R : p.parentNode, i = o ? {
							bottom: Math.max(w.clientHeight, window.innerHeight || 0),
							right: Math.max(w.clientWidth, window.innerWidth || 0),
							left: 0,
							top: 0
						} : t.getBoundingClientRect(), a = c = 0, Ne && ((d = t._gsMaxScrollY - t.scrollTop) < 0 ? c = d : s > i.bottom - Ke && d ? (Ue = !0, c = Math.min(d, f * (1 - Math.max(0, i.bottom - s) / Ke) | 0)) : s < i.top + Qe && t.scrollTop && (Ue = !0, c = -Math.min(t.scrollTop, f * (1 - Math.max(0, s - i.top) / Qe) | 0)), c && (t.scrollTop += c)), Pe && ((d = t._gsMaxScrollX - t.scrollLeft) < 0 ? a = d : r > i.right - $e && d ? (Ue = !0, a = Math.min(d, f * (1 - Math.max(0, i.right - r) / $e) | 0)) : r < i.left + Je && t.scrollLeft && (Ue = !0, a = -Math.min(t.scrollLeft, f * (1 - Math.max(0, r - i.left) / Je) | 0)), a && (t.scrollLeft += a)), o && (a || c) && (window.scrollTo(t.scrollLeft, t.scrollTop), vt(Re.pointerX + a, Re.pointerY + c)), p = t
					}
					if (te) {
						var g = Re.x,
							u = Re.y;
						g < 1e-6 && g > -1e-6 && (g = 0), u < 1e-6 && u > -1e-6 && (u = 0), Ce ? (Re.deltaX = g - me.data.rotation, me.data.rotation = Re.rotation = g, me.setRatio(1)) : l ? (Ne && (Re.deltaY = u - l.top(), l.top(u)), Pe && (Re.deltaX = g - l.left(), l.left(g))) : _e ? (Ne && (Re.deltaY = u - me.data.y, me.data.y = u), Pe && (Re.deltaX = g - me.data.x, me.data.x = g), me.setRatio(1)) : (Ne && (Re.deltaY = u - parseFloat(n.style.top || 0), n.style.top = u + "px"), Pe && (Re.deltaY = g - parseFloat(n.style.left || 0), n.style.left = g + "px")), !b || e || we || (we = !0, ce(Re, "drag", "onDrag"), we = !1)
					}
					te = !1
				},
				it = function(e, o) {
					var i, r = Re.x,
						s = Re.y;
					n._gsTransform || !_e && !Ce || t.set(n, {
						x: "+=0",
						overwrite: !1,
						data: "_draggable"
					}), _e ? (Re.y = n._gsTransform.y, Re.x = n._gsTransform.x) : Ce ? Re.x = Re.rotation = n._gsTransform.rotation : l ? (Re.y = l.top(), Re.x = l.left()) : (Re.y = parseInt(n.style.top, 10) || 0, Re.x = parseInt(n.style.left, 10) || 0), (ie || re || se) && !o && (Re.isDragging || Re.isThrowing) && (se && (H.x = Re.x, H.y = Re.y, (i = se(H)).x !== Re.x && (Re.x = i.x, te = !0), i.y !== Re.y && (Re.y = i.y, te = !0)), ie && (i = ie(Re.x)) !== Re.x && (Re.x = i, Ce && (Re.rotation = i), te = !0), re && ((i = re(Re.y)) !== Re.y && (Re.y = i), te = !0)), te && nt(!0), e || (Re.deltaX = Re.x - r, Re.deltaY = Re.y - s, ce(Re, "throwupdate", "onThrowUpdate"))
				},
				rt = function() {
					var e, t, o, i;
					x = !1, l ? (l.calibrate(), Re.minX = _ = -l.maxScrollLeft(), Re.minY = E = -l.maxScrollTop(), Re.maxX = T = Re.maxY = P = 0, x = !0) : s.bounds && (e = de(s.bounds, n.parentNode), Ce ? (Re.minX = _ = e.left, Re.maxX = T = e.left + e.width, Re.minY = E = Re.maxY = P = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (e = s.bounds, Re.minX = _ = e.minX, Re.minY = E = e.minY, Re.maxX = T = e.maxX, Re.maxY = P = e.maxY) : (t = de(n, n.parentNode), Re.minX = _ = le(n, ke) + e.left - t.left, Re.minY = E = le(n, De) + e.top - t.top, Re.maxX = T = _ + (e.width - t.width), Re.maxY = P = E + (e.height - t.height)), _ > T && (Re.minX = T, Re.maxX = T = _, _ = Re.minX), E > P && (Re.minY = P, Re.maxY = P = E, E = Re.minY), Ce && (Re.minRotation = _, Re.maxRotation = T), x = !0), s.liveSnap && (i = (o = !0 === s.liveSnap ? s.snap || {} : s.liveSnap) instanceof Array || "function" == typeof o, Ce ? (ie = gt(i ? o : o.rotation, _, T, 1), re = null) : o.points ? se = ut(i ? o : o.points, _, T, E, P, o.radius, l ? -1 : 1) : (Pe && (ie = gt(i ? o : o.x || o.left || o.scrollLeft, _, T, l ? -1 : 1)), Ne && (re = gt(i ? o : o.y || o.top || o.scrollTop, E, P, l ? -1 : 1))))
				},
				st = function() {
					Re.isThrowing = !1, ce(Re, "throwcomplete", "onThrowComplete")
				},
				at = function() {
					Re.isThrowing = !1
				},
				lt = function(e, t) {
					var o, i, a, c;
					e && r ? (!0 === e && (i = (o = s.snap || s.liveSnap || {}) instanceof Array || "function" == typeof o, e = {
						resistance: (s.throwResistance || s.resistance || 1e3) / (Ce ? 10 : 1)
					}, Ce ? e.rotation = Ae(Re, i ? o : o.rotation, T, _, 1, t) : (Pe && (e[ke] = Ae(Re, i ? o : o.points || o.x || o.left || o.scrollLeft, T, _, l ? -1 : 1, t || "x" === Re.lockedAxis)), Ne && (e[De] = Ae(Re, i ? o : o.points || o.y || o.top || o.scrollTop, P, E, l ? -1 : 1, t || "y" === Re.lockedAxis)), (o.points || o instanceof Array && "object" == typeof o[0]) && (e.linkedProps = ke + "," + De, e.radius = o.radius))), Re.isThrowing = !0, c = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - Re.edgeResistance + .2 : s.overshootTolerance, Re.tween = a = r.to(l || n, {
						throwProps: e,
						data: "_draggable",
						ease: s.ease || m.Power3.easeOut,
						onComplete: st,
						onOverwrite: at,
						onUpdate: s.fastMode ? ce : it,
						onUpdateParams: s.fastMode ? [Re, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : S
					}, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === c || "object" == typeof e && e.resistance > 1e3 ? 0 : .5 : s.minDuration, c), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), it(!0, !0), Re.endX = Re.x, Re.endY = Re.y, Ce && (Re.endRotation = Re.x), a.play(0), it(!0, !0), l && (l._suspendTransforms = !1))) : x && Re.applyBounds()
				},
				ct = function(e) {
					var t, o, i, r, s, a, l, p, f, g = fe || [1, 0, 0, 1, 0, 0];
					fe = Me(n.parentNode, !0), e && Re.isPressed && g.join(",") !== fe.join(",") && (t = g[0], o = g[1], i = g[2], r = g[3], s = g[4], a = g[5], f = c * (-o / (l = t * r - o * i)) + d * (t / l) + -(t * a - o * s) / l, d = (p = c * (r / l) + d * (-i / l) + (i * a - r * s) / l) * fe[1] + f * fe[3] + fe[5], c = p * fe[0] + f * fe[2] + fe[4]), fe[1] || fe[2] || 1 != fe[0] || 1 != fe[3] || 0 != fe[4] || 0 != fe[5] || (fe = null)
				},
				dt = function() {
					var e = 1 - Re.edgeResistance;
					ct(!1), fe && (c = Re.pointerX * fe[0] + Re.pointerY * fe[2] + fe[4], d = Re.pointerX * fe[1] + Re.pointerY * fe[3] + fe[5]), te && (vt(Re.pointerX, Re.pointerY), nt(!0)), l ? (rt(), v = l.top(), p = l.left()) : (pt() ? (it(!0, !0), rt()) : Re.applyBounds(), Ce ? ($ = Re.rotationOrigin = Le(n, {
						x: 0,
						y: 0
					}), it(!0, !0), p = Re.x, v = Re.y = Math.atan2($.y - Re.pointerY, Re.pointerX - $.x) * C) : (ue = n.parentNode ? n.parentNode.scrollTop || 0 : 0, he = n.parentNode ? n.parentNode.scrollLeft || 0 : 0, v = le(n, De), p = le(n, ke))), x && e && (p > T ? p = T + (p - T) / e : p < _ && (p = _ - (_ - p) / e), Ce || (v > P ? v = P + (v - P) / e : v < E && (v = E - (E - v) / e))), Re.startX = p, Re.startY = v
				},
				pt = function() {
					return Re.tween && Re.tween.isActive()
				},
				ft = function() {
					!D.parentNode || pt() || Re.isDragging || D.parentNode.removeChild(D)
				},
				gt = function(e, t, o, n) {
					return "function" == typeof e ?
					function(i) {
						var r = Re.isPressed ? 1 - Re.edgeResistance : 1;
						return e.call(Re, i > o ? o + (i - o) * r : i < t ? t + (i - t) * r : i) * n
					} : e instanceof Array ?
					function(n) {
						for (var i, r, s = e.length, a = 0, l = k; --s > -1;)(r = (i = e[s]) - n) < 0 && (r = -r), r < l && i >= t && i <= o && (a = s, l = r);
						return e[a]
					} : isNaN(e) ?
					function(e) {
						return e
					} : function() {
						return e * n
					}
				},
				ut = function(e, t, o, n, i, r, s) {
					return r = r && r < k ? r * r : k, "function" == typeof e ?
					function(a) {
						var l, c, d, p = Re.isPressed ? 1 - Re.edgeResistance : 1,
							f = a.x,
							g = a.y;
						return a.x = f = f > o ? o + (f - o) * p : f < t ? t + (f - t) * p : f, a.y = g = g > i ? i + (g - i) * p : g < n ? n + (g - n) * p : g, (l = e.call(Re, a)) !== a && (a.x = l.x, a.y = l.y), 1 !== s && (a.x *= s, a.y *= s), r < k && (c = a.x - f) * c + (d = a.y - g) * d > r && (a.x = f, a.y = g), a
					} : e instanceof Array ?
					function(t) {
						for (var o, n, i, s, a = e.length, l = 0, c = k; --a > -1;)(s = (o = (i = e[a]).x - t.x) * o + (n = i.y - t.y) * n) < c && (l = a, c = s);
						return c <= r ? e[l] : t
					} : function(e) {
						return e
					}
				},
				ht = function(e, o) {
					var i;
					if (a && !Re.isPressed && e && ("mousedown" !== e.type && "pointerdown" !== e.type || o || !(M() - tt < 30) || !Ye[Re.pointerEvent.type])) {
						if (ge = pt(), Re.pointerEvent = e, Ye[e.type] ? (pe = -1 !== e.type.indexOf("touch") ? e.currentTarget || e.target : y, Oe(pe, "touchend", xt), Oe(pe, "touchmove", mt), Oe(pe, "touchcancel", xt), Oe(y, "touchstart", ze)) : (pe = null, Oe(y, "mousemove", mt)), xe = null, Oe(y, "mouseup", xt), e && e.target && Oe(e.target, "mouseup", xt), ae = et.call(Re, e.target) && !s.dragClickables && !o) return Oe(e.target, "change", xt), ce(Re, "press", "onPress"), void Ie(We, !0);
						if (ve = !(!pe || Pe === Ne || !1 === Re.vars.allowNativeTouchScrolling) && (Pe ? "y" : "x"), L ? e = J(e, !0) : ve || Re.allowEventDefault || (e.preventDefault(), e.preventManipulation && e.preventManipulation()), e.changedTouches ? (e = j = e.changedTouches[0], q = e.identifier) : e.pointerId ? q = e.pointerId : j = q = null, Y++, I(nt), d = Re.pointerY = e.pageY, c = Re.pointerX = e.pageX, (ve || Re.autoScroll) && K(n.parentNode), !n.parentNode || !Re.autoScroll || l || Ce || !n.parentNode._gsMaxScrollX || D.parentNode || n.getBBox || (D.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(D)), dt(), Re.tween && Re.tween.kill(), Re.isThrowing = !1, t.killTweensOf(l || n, !0, je), l && t.killTweensOf(n, !0, {
							scrollTo: 1
						}), Re.tween = Re.lockedAxis = null, (s.zIndexBoost || !Ce && !l && !1 !== s.zIndexBoost) && (n.style.zIndex = Ge.zIndex++), Re.isPressed = !0, b = !(!s.onDrag && !Re._listeners.drag), !Ce) for (i = We.length; --i > -1;) oe(We[i], "cursor", s.cursor || "move");
						ce(Re, "press", "onPress")
					}
				},
				mt = function(e) {
					var t, o, n, r, s, l, p = e;
					if (a && !i && Re.isPressed && e) {
						if (Re.pointerEvent = e, t = e.changedTouches) {
							if ((e = t[0]) !== j && e.identifier !== q) {
								for (r = t.length; --r > -1 && (e = t[r]).identifier !== q;);
								if (r < 0) return
							}
						} else if (e.pointerId && q && e.pointerId !== q) return;
						if (L) e = J(e, !0);
						else {
							if (pe && ve && !xe && (o = e.pageX, n = e.pageY, fe && (r = o * fe[0] + n * fe[2] + fe[4], n = o * fe[1] + n * fe[3] + fe[5], o = r), s = Math.abs(o - c), l = Math.abs(n - d), (s !== l && (s > Xe || l > Xe) || O && ve === xe) && (xe = s > l && Pe ? "x" : "y", !1 !== Re.vars.lockAxisOnTouchScroll && (Re.lockedAxis = "x" === xe ? "y" : "x", "function" == typeof Re.vars.onLockAxis && Re.vars.onLockAxis.call(Re, p)), O && ve === xe))) return void xt(p);
							Re.allowEventDefault || ve && (!xe || ve === xe) || !1 === p.cancelable || (p.preventDefault(), p.preventManipulation && p.preventManipulation())
						}
						Re.autoScroll && (Ue = !0), vt(e.pageX, e.pageY)
					}
				},
				vt = function(e, t) {
					var o, n, i, r, s, a, l = 1 - Re.dragResistance,
						f = 1 - Re.edgeResistance;
					Re.pointerX = e, Re.pointerY = t, Ce ? (r = Math.atan2($.y - t, e - $.x) * C, (s = Re.y - r) > 180 ? v -= 360 : s < -180 && (v += 360), Re.x !== p || Math.abs(v - r) > Xe ? (Re.y = r, i = p + (v - r) * l) : i = p) : (fe && (a = e * fe[0] + t * fe[2] + fe[4], t = e * fe[1] + t * fe[3] + fe[5], e = a), o = e - c, (n = t - d) < Xe && n > -Xe && (n = 0), o < Xe && o > -Xe && (o = 0), (Re.lockAxis || Re.lockedAxis) && (o || n) && ((a = Re.lockedAxis) || (Re.lockedAxis = a = Pe && Math.abs(o) > Math.abs(n) ? "y" : Ne ? "x" : null, a && "function" == typeof Re.vars.onLockAxis && Re.vars.onLockAxis.call(Re, Re.pointerEvent)), "y" === a ? n = 0 : "x" === a && (o = 0)), i = p + o * l, r = v + n * l), (ie || re || se) && (Re.x !== i || Re.y !== r && !Ce) ? (se && (H.x = i, H.y = r, i = (a = se(H)).x, r = a.y), ie && (i = ie(i)), re && (r = re(r))) : x && (i > T ? i = T + (i - T) * f : i < _ && (i = _ + (i - _) * f), Ce || (r > P ? r = P + (r - P) * f : r < E && (r = E + (r - E) * f))), Ce || fe || (i = Math.round(i), r = Math.round(r)), (Re.x !== i || Re.y !== r && !Ce) && (Ce ? (Re.endRotation = Re.x = Re.endX = i, te = !0) : (Ne && (Re.y = Re.endY = r, te = !0), Pe && (Re.x = Re.endX = i, te = !0)), !Re.isDragging && Re.isPressed && (Re.isDragging = !0, ce(Re, "dragstart", "onDragStart")))
				},
				xt = function(e, o) {
					if (a && Re.isPressed && (!e || null == q || o || !(e.pointerId && e.pointerId !== q || e.changedTouches && !He(e.changedTouches, q)))) {
						Re.isPressed = !1;
						var i, r, l, c, d, p = e,
							f = Re.isDragging,
							g = t.delayedCall(.001, ft);
						if (pe ? (Be(pe, "touchend", xt), Be(pe, "touchmove", mt), Be(pe, "touchcancel", xt), Be(y, "touchstart", ze)) : Be(y, "mousemove", mt), Be(y, "mouseup", xt), e && e.target && Be(e.target, "mouseup", xt), te = !1, ae) return e && (Be(e.target, "change", xt), Re.pointerEvent = p), Ie(We, !1), ce(Re, "release", "onRelease"), ce(Re, "click", "onClick"), void(ae = !1);
						if (W(nt), !Ce) for (r = We.length; --r > -1;) oe(We[r], "cursor", s.cursor || "move");
						if (f && (qe = B = M(), Re.isDragging = !1), Y--, e) {
							if (L && (e = J(e, !1)), (i = e.changedTouches) && (e = i[0]) !== j && e.identifier !== q) {
								for (r = i.length; --r > -1 && (e = i[r]).identifier !== q;);
								if (r < 0) return
							}
							Re.pointerEvent = p, Re.pointerX = e.pageX, Re.pointerY = e.pageY
						}
						return p && !f ? (ge && (s.snap || s.bounds) && lt(s.throwProps), ce(Re, "release", "onRelease"), O && "touchmove" === p.type || -1 !== p.type.indexOf("cancel") || (ce(Re, "click", "onClick"), M() - tt < 300 && ce(Re, "doubleclick", "onDoubleClick"), c = p.target || p.srcElement || n, tt = M(), d = function() {
							tt !== be && Re.enabled() && !Re.isPressed && (c.click ? c.click() : y.createEvent && ((l = y.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, Re.pointerEvent.screenX, Re.pointerEvent.screenY, Re.pointerX, Re.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(l)))
						}, O || p.defaultPrevented || t.delayedCall(1e-5, d))) : (lt(s.throwProps), L || Re.allowEventDefault || !p || !s.dragClickables && et.call(Re, p.target) || !f || ve && (!xe || ve !== xe) || !1 === p.cancelable || (p.preventDefault(), p.preventManipulation && p.preventManipulation()), ce(Re, "release", "onRelease")), pt() && g.duration(Re.tween.duration()), f && ce(Re, "dragend", "onDragEnd"), !0
					}
				},
				yt = function(e) {
					if (e && Re.isDragging && !l) {
						var t = e.target || e.srcElement || n.parentNode,
							o = t.scrollLeft - t._gsScrollX,
							i = t.scrollTop - t._gsScrollY;
						(o || i) && (fe ? (c -= o * fe[0] + i * fe[2], d -= i * fe[3] + o * fe[1]) : (c -= o, d -= i), t._gsScrollX += o, t._gsScrollY += i, vt(Re.pointerX, Re.pointerY))
					}
				},
				wt = function(e) {
					var t = M(),
						o = t - tt < 40,
						n = t - qe < 40,
						i = o && be === tt,
						r = !! e.preventDefault,
						s = Re.pointerEvent && Re.pointerEvent.defaultPrevented,
						a = o && Te === tt,
						l = e.isTrusted || null == e.isTrusted && o && i;
					if (r && (i || n && !1 !== Re.vars.suppressClickOnDrag) && e.stopImmediatePropagation(), o && (!Re.pointerEvent || !Re.pointerEvent.defaultPrevented) && (!i || l !== a)) return l && i && (Te = tt), void(be = tt);
					(Re.isPressed || n || o) && (r ? l && e.detail && o && !s || (e.preventDefault(), e.preventManipulation && e.preventManipulation()) : e.returnValue = !1)
				},
				bt = function(e) {
					return fe ? {
						x: e.x * fe[0] + e.y * fe[2] + fe[4],
						y: e.x * fe[1] + e.y * fe[3] + fe[5]
					} : {
						x: e.x,
						y: e.y
					}
				};
			(ne = Ge.get(this.target)) && ne.kill(), this.startDrag = function(e, t) {
				var o, i, r, s;
				ht(e || Re.pointerEvent, !0), t && !Re.hitTest(e || Re.pointerEvent) && (o = Ze(e || Re.pointerEvent), i = Ze(n), r = bt({
					x: o.left + o.width / 2,
					y: o.top + o.height / 2
				}), s = bt({
					x: i.left + i.width / 2,
					y: i.top + i.height / 2
				}), c -= r.x - s.x, d -= r.y - s.y), Re.isDragging || (Re.isDragging = !0, ce(Re, "dragstart", "onDragStart"))
			}, this.drag = mt, this.endDrag = function(e) {
				xt(e || Re.pointerEvent, !0)
			}, this.timeSinceDrag = function() {
				return Re.isDragging ? 0 : (M() - qe) / 1e3
			}, this.timeSinceClick = function() {
				return (M() - tt) / 1e3
			}, this.hitTest = function(e, t) {
				return Ge.hitTest(Re.target, e, t)
			}, this.getDirection = function(e, t) {
				var o, n, i, s, a, l, c = "velocity" === e && r ? e : "object" != typeof e || Ce ? "start" : "element";
				return "element" === c && (a = Ze(Re.target), l = Ze(e)), o = "start" === c ? Re.x - p : "velocity" === c ? r.getVelocity(this.target, ke) : a.left + a.width / 2 - (l.left + l.width / 2), Ce ? o < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2, n = "start" === c ? Re.y - v : "velocity" === c ? r.getVelocity(this.target, De) : a.top + a.height / 2 - (l.top + l.height / 2), s = (i = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right", i < t && ("" !== s && (s += "-"), s += n < 0 ? "up" : "down"), s)
			}, this.applyBounds = function(e) {
				var t, o, i, r, a, l;
				if (e && s.bounds !== e) return s.bounds = e, Re.update(!0);
				if (it(!0), rt(), x) {
					if (t = Re.x, o = Re.y, t > T ? t = T : t < _ && (t = _), o > P ? o = P : o < E && (o = E), (Re.x !== t || Re.y !== o) && (i = !0, Re.x = Re.endX = t, Ce ? Re.endRotation = t : Re.y = Re.endY = o, te = !0, nt(!0), Re.autoScroll && !Re.isDragging)) for (K(n.parentNode), r = n, R.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != w.scrollTop ? w.scrollTop : y.body.scrollTop, R.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != w.scrollLeft ? w.scrollLeft : y.body.scrollLeft; r && !l;) a = (l = Q(r.parentNode)) ? R : r.parentNode, Ne && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), Pe && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), r = a;
					Re.isThrowing && (i || Re.endX > T || Re.endX < _ || Re.endY > P || Re.endY < E) && lt(s.throwProps, i)
				}
				return Re
			}, this.update = function(e, t, o) {
				var i = Re.x,
					r = Re.y;
				return ct(!t), e ? Re.applyBounds() : (te && o && nt(!0), it(!0)), t && (vt(Re.pointerX, Re.pointerY), te && nt(!0)), Re.isPressed && !t && (Pe && Math.abs(i - Re.x) > .01 || Ne && Math.abs(r - Re.y) > .01 && !Ce) && dt(), Re.autoScroll && (K(n.parentNode), Ue = Re.isDragging, nt(!0)), Re.autoScroll && (Z(n, yt), U(n, yt)), Re
			}, this.enable = function(e) {
				var i, c, d;
				if ("soft" !== e) {
					for (c = We.length; --c > -1;) d = We[c], Oe(d, "mousedown", ht), Oe(d, "touchstart", ht), Oe(d, "click", wt, !0), Ce || oe(d, "cursor", s.cursor || "move"), oe(d, "touchCallout", "none"), oe(d, "touchAction", Pe === Ne ? "none" : Pe ? "pan-y" : "pan-x"), ye(d) && oe(d.ownerSVGElement || d, "touchAction", Pe === Ne ? "none" : Pe ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Oe(d, "contextmenu", ot);
					Ie(We, !1)
				}
				return U(n, yt), a = !0, r && "soft" !== e && r.track(l || n, _e ? "x,y" : Ce ? "rotation" : "top,left"), l && l.enable(), n._gsDragID = i = "d" + X++, N[i] = this, l && (l.element._gsDragID = i), t.set(n, {
					x: "+=0",
					overwrite: !1,
					data: "_draggable"
				}), me = {
					t: n,
					data: L ? V : n._gsTransform,
					tween: {},
					setRatio: L ?
					function() {
						t.set(n, F)
					} : o._internals.setTransformRatio || o._internals.set3DTransformRatio
				}, dt(), Re.update(!0), Re
			}, this.disable = function(e) {
				var t, o, i = Re.isDragging;
				if (!Ce) for (t = We.length; --t > -1;) oe(We[t], "cursor", null);
				if ("soft" !== e) {
					for (t = We.length; --t > -1;) o = We[t], oe(o, "touchCallout", null), oe(o, "touchAction", null), Be(o, "mousedown", ht), Be(o, "touchstart", ht), Be(o, "click", wt), Be(o, "contextmenu", ot);
					Ie(We, !0), pe && (Be(pe, "touchcancel", xt), Be(pe, "touchend", xt), Be(pe, "touchmove", mt)), Be(y, "mouseup", xt), Be(y, "mousemove", mt)
				}
				return Z(n, yt), a = !1, r && "soft" !== e && r.untrack(l || n, _e ? "x,y" : Ce ? "rotation" : "top,left"), l && l.disable(), W(nt), Re.isDragging = Re.isPressed = ae = !1, i && ce(Re, "dragend", "onDragEnd"), Re
			}, this.enabled = function(e, t) {
				return arguments.length ? e ? Re.enable(t) : Re.disable(t) : a
			}, this.kill = function() {
				return Re.isThrowing = !1, t.killTweensOf(l || n, !0, je), Re.disable(), delete N[n._gsDragID], Re
			}, -1 !== Se.indexOf("scroll") && (l = this.scrollProxy = new Ve(n, G({
				onKill: function() {
					Re.isPressed && xt(null)
				}
			}, s)), n.style.overflowY = Ne && !Ee ? "auto" : "hidden", n.style.overflowX = Pe && !Ee ? "auto" : "hidden", n = l.content), !1 !== s.force3D && t.set(n, {
				force3D: !0
			}), Ce ? je.rotation = 1 : (Pe && (je[ke] = 1), Ne && (je[De] = 1)), Ce ? (V = (F = h).css, F.overwrite = !1) : _e && (V = (F = Pe && Ne ? f : Pe ? g : u).css, F.overwrite = !1), this.enable()
		}, je = Ge.prototype = new e;
		je.constructor = Ge, je.pointerX = je.pointerY = je.startX = je.startY = je.deltaX = je.deltaY = 0, je.isDragging = je.isPressed = !1, Ge.version = "0.16.0", Ge.zIndex = 1e3, Oe(y, "touchcancel", function() {}), Oe(y, "contextmenu", function(e) {
			var t;
			for (t in N) N[t].isPressed && N[t].endDrag()
		}), Ge.create = function(e, o) {
			"string" == typeof e && (e = t.selector(e));
			for (var n = e && 0 !== e.length ? Ne(e) ? Xe(e) : [e] : [], i = n.length; --i > -1;) n[i] = new Ge(n[i], o);
			return n
		}, Ge.get = function(e) {
			return N[(ee(e) || {})._gsDragID]
		}, Ge.timeSinceDrag = function() {
			return (M() - B) / 1e3
		};
		var qe = {},
			Ue = function(e) {
				var t, o, n = 0,
					i = 0;
				for (t = (e = ee(e)).offsetWidth, o = e.offsetHeight; e;) n += e.offsetTop, i += e.offsetLeft, e = e.offsetParent;
				return {
					top: n,
					left: i,
					width: t,
					height: o
				}
			},
			Ze = function(e, t) {
				if (e === window) return qe.left = qe.top = 0, qe.width = qe.right = w.clientWidth || e.innerWidth || y.body.clientWidth || 0, qe.height = qe.bottom = (e.innerHeight || 0) - 20 < w.clientHeight ? w.clientHeight : e.innerHeight || y.body.clientHeight || 0, qe;
				var o = e.pageX !== t ? {
					left: e.pageX - q(),
					top: e.pageY - j(),
					right: e.pageX - q() + 1,
					bottom: e.pageY - j() + 1
				} : e.nodeType || e.left === t || e.top === t ? L ? Ue(e) : ee(e).getBoundingClientRect() : e;
				return o.right === t && o.width !== t ? (o.right = o.left + o.width, o.bottom = o.top + o.height) : o.width === t && (o = {
					width: o.right - o.left,
					height: o.bottom - o.top,
					right: o.right,
					left: o.left,
					bottom: o.bottom,
					top: o.top
				}), o
			};
		return Ge.hitTest = function(e, t, o) {
			if (e === t) return !1;
			var n, i, r, s = Ze(e),
				a = Ze(t),
				l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
			return l || !o ? !l : (r = -1 !== (o + "").indexOf("%"), o = parseFloat(o) || 0, n = {
				left: Math.max(s.left, a.left),
				top: Math.max(s.top, a.top)
			}, n.width = Math.min(s.right, a.right) - n.left, n.height = Math.min(s.bottom, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (r ? (o *= .01, (i = n.width * n.height) >= s.width * s.height * o || i >= a.width * a.height * o) : n.width > o && n.height > o))
		}, D.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ge
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();