import { t as cn } from "./utils-DYfvbnRa.js";
import React, { createContext, forwardRef, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function BackgroundMedia({ backgroundData: e, projectName: _ }) {
	return !e || !e.backgroundUrl ? /* @__PURE__ */ jsx("div", { className: "absolute z-10 top-0 left-0 w-full h-full object-cover bg-gray-700" }) : e.isVideo ? /* @__PURE__ */ jsx("video", {
		src: e.backgroundUrl,
		autoPlay: !0,
		loop: !0,
		muted: !0,
		playsInline: !0,
		preload: "auto",
		className: "absolute z-10 top-0 left-0 w-full h-full object-cover"
	}) : /* @__PURE__ */ jsx("img", {
		loading: "eager",
		alt: _,
		src: e.backgroundUrl,
		style: { objectFit: "cover" },
		className: "absolute z-10 top-0 left-0 w-full h-full object-cover"
	});
}
var DEFAULT_BACKGROUND$2 = "/assets/wimbledon/background.webp";
function HomeFirstSection({ projectName: e, projectDescription: _, backgroundData: v, scrollIndicatorText: y = "Scroll down", scrollIndicatorOpacity: b = 1 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "panel absolute left-0 top-0 will-change-transform w-full h-full z-30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: v?.backgroundUrl ? {
						isVideo: v.isVideo,
						backgroundUrl: v.backgroundUrl
					} : {
						isVideo: !1,
						backgroundUrl: DEFAULT_BACKGROUND$2
					},
					projectName: e
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute z-20 top-0 left-0 h-[100vh] w-[100vw]",
					style: {
						opacity: .5,
						backgroundColor: "black"
					}
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute z-30 top-0 left-0 h-[100vh] w-[100vw]",
					style: {
						opacity: 0,
						background: "linear-gradient(0deg, var(--menuBgColor), var(--menuBgColor)), linear-gradient(180deg, var(--menuBgColor) 0%, rgba(0, 53, 110, 0) 100%)"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "page-container z-30 justify-end lg:justify-center px-5 py-5 lg:px-7.5 lg:py-7.5 mobile:p-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-12.5 flex flex-col justify-end lg:justify-center lg:grow",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "font-bold text-5xl mb-2.5 text-[#FAF9FD]",
							children: e
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-[1rem] mobile:text-[0.8rem] mobile:leading-[1.2rem] leading-[1.45rem] w-[37.5rem] mobile:w-[100%] text-[#FAF9FD] font-light whitespace-pre-wrap",
							children: _
						})]
					}), /* @__PURE__ */ jsxs(motion.div, {
						id: "scroll-indicator",
						className: "flex space-x-2.5 rtl:space-x-reverse items-center py-5 lg:mt-auto",
						style: { opacity: b },
						children: [/* @__PURE__ */ jsx(MouseIcon, {}), /* @__PURE__ */ jsx("span", {
							className: "text-base font-light justify-self-end text-[#FAF9FD]",
							children: y
						})]
					})]
				})
			]
		})
	});
}
function MouseIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		width: "16",
		height: "24",
		viewBox: "0 0 16 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "0.5",
				y: "0.5",
				width: "15",
				height: "23",
				rx: "7.5",
				stroke: "white"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "8",
				cy: "6",
				r: "1",
				fill: "white"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "8",
				y1: "7.5",
				x2: "8",
				y2: "11.5",
				stroke: "white"
			})
		]
	});
}
function HomeFirstSectionWrapper(e) {
	let { projectName: _ = "Right Property", projectDescription: v = "Discover thoughtfully designed homes with seamless connections and serene green spaces.", backgroundUrl: y = "", mediaType: b = "image", scrollIndicatorText: x = "Scroll down", scrollIndicatorOpacity: S = 1 } = e;
	return /* @__PURE__ */ jsx(HomeFirstSection, {
		projectName: _,
		projectDescription: v,
		backgroundData: {
			isVideo: b === "video",
			backgroundUrl: y
		},
		scrollIndicatorText: x,
		scrollIndicatorOpacity: S
	});
}
function Image({ src: _, fallbackSrc: v, alt: y, width: b, height: x, className: S }) {
	return _ ? /* @__PURE__ */ jsx("img", {
		src: _,
		alt: y,
		className: S
	}) : v ? /* @__PURE__ */ jsx("img", {
		src: v,
		alt: y,
		className: S
	}) : /* @__PURE__ */ jsx("div", {
		className: cn(S, " bg-gray-400"),
		style: {
			width: b,
			height: x
		}
	});
}
var DEFAULT_MAIN_IMAGE = "/assets/wimbledon/wimbledon_content_main.avif", DEFAULT_IMAGE_2$2 = "/assets/wimbledon/wimbledon_content_left.avif", DEFAULT_IMAGE_3$2 = "/assets/wimbledon/wimbledon_content_right.avif";
function HomePageContent({ title: e, titleColor: _ = "#1a1a1a", subtitle: v, paragraphs: y, image1: b, image2: x, image3: S }) {
	let C = { color: _ };
	return /* @__PURE__ */ jsxs("div", {
		className: "font-fira",
		children: [/* @__PURE__ */ jsx("div", {
			className: "hidden md:block pb-15 px-24 pt-20 max-w-[1440px] mx-auto",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "col-span-1 flex flex-col space-y-5",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "font-bold text-5xl",
							style: C,
							children: e
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "font-light text-xl text-primary-dark-1",
							children: v
						}),
						y.map((e, _) => /* @__PURE__ */ jsx("div", {
							className: "w-full font-light text-primary-dark-1",
							children: e.text
						}, _))
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "col-span-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col space-y-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-full",
							children: /* @__PURE__ */ jsx(Image, {
								width: 600,
								height: 400,
								src: b || DEFAULT_MAIN_IMAGE,
								fallbackSrc: DEFAULT_MAIN_IMAGE,
								className: "h-60 lg:h-100 w-full",
								alt: ""
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full grid grid-cols-2 gap-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "col-span-1",
								children: /* @__PURE__ */ jsx(Image, {
									width: 290,
									height: 180,
									src: x || DEFAULT_IMAGE_2$2,
									fallbackSrc: DEFAULT_IMAGE_2$2,
									className: "h-auto w-full",
									alt: ""
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "col-span-1",
								children: /* @__PURE__ */ jsx(Image, {
									width: 290,
									height: 180,
									src: S || DEFAULT_IMAGE_3$2,
									fallbackSrc: DEFAULT_IMAGE_3$2,
									className: "h-auto w-full",
									alt: ""
								})
							})]
						})]
					})
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap mb-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-auto w-full md:w-1/2 p-5",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "font-bold text-5xl mb-5",
						style: C,
						children: e
					}), /* @__PURE__ */ jsx("h4", {
						className: "font-light text-xl text-primary-dark-1",
						children: v
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex-auto w-full md:w-1/2 p-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap space-y-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-full",
							children: /* @__PURE__ */ jsx(Image, {
								width: 400,
								height: 280,
								src: b || DEFAULT_MAIN_IMAGE,
								fallbackSrc: DEFAULT_MAIN_IMAGE,
								className: "h-60 lg:h-100 w-full",
								alt: ""
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex-auto w-1/2",
								children: /* @__PURE__ */ jsx(Image, {
									width: 290,
									height: 120,
									src: x || DEFAULT_IMAGE_2$2,
									fallbackSrc: DEFAULT_IMAGE_2$2,
									className: "h-30 w-full",
									alt: ""
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-auto w-1/2",
								children: /* @__PURE__ */ jsx(Image, {
									width: 290,
									height: 120,
									src: S || DEFAULT_IMAGE_3$2,
									fallbackSrc: DEFAULT_IMAGE_3$2,
									className: "h-30 w-full",
									alt: ""
								})
							})]
						})]
					})
				})]
			})
		})]
	});
}
function HomePageContentWrapper(e) {
	let { title: _ = "", titleColor: v = "#1a1a1a", subtitle: y = "", paragraphs: b = [], image1: x = "", image2: S = "", image3: C = "" } = e;
	return /* @__PURE__ */ jsx(HomePageContent, {
		title: _,
		titleColor: v,
		subtitle: y,
		paragraphs: b,
		image1: x,
		image2: S,
		image3: C
	});
}
function isObject$2(e) {
	return typeof e == "object" && !!e && "constructor" in e && e.constructor === Object;
}
function extend$2(e = {}, _ = {}) {
	let v = [
		"__proto__",
		"constructor",
		"prototype"
	];
	Object.keys(_).filter((e) => v.indexOf(e) < 0).forEach((v) => {
		e[v] === void 0 ? e[v] = _[v] : isObject$2(_[v]) && isObject$2(e[v]) && Object.keys(_[v]).length > 0 && extend$2(e[v], _[v]);
	});
}
var ssrDocument = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: {
		blur() {},
		nodeName: ""
	},
	querySelector() {
		return null;
	},
	querySelectorAll() {
		return [];
	},
	getElementById() {
		return null;
	},
	createEvent() {
		return { initEvent() {} };
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return [];
			}
		};
	},
	createElementNS() {
		return {};
	},
	importNode() {
		return null;
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	}
};
function getDocument() {
	let e = typeof document < "u" ? document : {};
	return extend$2(e, ssrDocument), e;
}
var ssrWindow = {
	document: ssrDocument,
	navigator: { userAgent: "" },
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	},
	history: {
		replaceState() {},
		pushState() {},
		go() {},
		back() {}
	},
	CustomEvent: function() {
		return this;
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return { getPropertyValue() {
			return "";
		} };
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {};
	},
	requestAnimationFrame(e) {
		return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
	},
	cancelAnimationFrame(e) {
		typeof setTimeout > "u" || clearTimeout(e);
	}
};
function getWindow() {
	let e = typeof window < "u" ? window : {};
	return extend$2(e, ssrWindow), e;
}
function classesToTokens(e = "") {
	return e.trim().split(" ").filter((e) => !!e.trim());
}
function deleteProps(e) {
	let _ = e;
	Object.keys(_).forEach((e) => {
		try {
			_[e] = null;
		} catch {}
		try {
			delete _[e];
		} catch {}
	});
}
function nextTick(e, _ = 0) {
	return setTimeout(e, _);
}
function now() {
	return Date.now();
}
function getComputedStyle$1(e) {
	let _ = getWindow(), v;
	return _.getComputedStyle && (v = _.getComputedStyle(e, null)), !v && e.currentStyle && (v = e.currentStyle), v ||= e.style, v;
}
function getTranslate(e, _ = "x") {
	let v = getWindow(), y, b, x, S = getComputedStyle$1(e);
	return v.WebKitCSSMatrix ? (b = S.transform || S.webkitTransform, b.split(",").length > 6 && (b = b.split(", ").map((e) => e.replace(",", ".")).join(", ")), x = new v.WebKitCSSMatrix(b === "none" ? "" : b)) : (x = S.MozTransform || S.OTransform || S.MsTransform || S.msTransform || S.transform || S.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), y = x.toString().split(",")), _ === "x" && (b = v.WebKitCSSMatrix ? x.m41 : y.length === 16 ? parseFloat(y[12]) : parseFloat(y[4])), _ === "y" && (b = v.WebKitCSSMatrix ? x.m42 : y.length === 16 ? parseFloat(y[13]) : parseFloat(y[5])), b || 0;
}
function isObject$1(e) {
	return typeof e == "object" && !!e && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function isNode(e) {
	return typeof window < "u" && window.HTMLElement !== void 0 ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function extend$1(...e) {
	let _ = Object(e[0]), v = [
		"__proto__",
		"constructor",
		"prototype"
	];
	for (let y = 1; y < e.length; y += 1) {
		let b = e[y];
		if (b != null && !isNode(b)) {
			let e = Object.keys(Object(b)).filter((e) => v.indexOf(e) < 0);
			for (let v = 0, y = e.length; v < y; v += 1) {
				let y = e[v], x = Object.getOwnPropertyDescriptor(b, y);
				x !== void 0 && x.enumerable && (isObject$1(_[y]) && isObject$1(b[y]) ? b[y].__swiper__ ? _[y] = b[y] : extend$1(_[y], b[y]) : !isObject$1(_[y]) && isObject$1(b[y]) ? (_[y] = {}, b[y].__swiper__ ? _[y] = b[y] : extend$1(_[y], b[y])) : _[y] = b[y]);
			}
		}
	}
	return _;
}
function setCSSProperty(e, _, v) {
	e.style.setProperty(_, v);
}
function animateCSSModeScroll({ swiper: e, targetPosition: _, side: v }) {
	let y = getWindow(), b = -e.translate, x = null, S, C = e.params.speed;
	e.wrapperEl.style.scrollSnapType = "none", y.cancelAnimationFrame(e.cssModeFrameID);
	let w = _ > b ? "next" : "prev", T = (e, _) => w === "next" && e >= _ || w === "prev" && e <= _, E = () => {
		S = (/* @__PURE__ */ new Date()).getTime(), x === null && (x = S);
		let w = Math.max(Math.min((S - x) / C, 1), 0), D = b + (.5 - Math.cos(w * Math.PI) / 2) * (_ - b);
		if (T(D, _) && (D = _), e.wrapperEl.scrollTo({ [v]: D }), T(D, _)) {
			e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
				e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [v]: D });
			}), y.cancelAnimationFrame(e.cssModeFrameID);
			return;
		}
		e.cssModeFrameID = y.requestAnimationFrame(E);
	};
	E();
}
function elementChildren(e, _ = "") {
	let v = getWindow(), y = [...e.children];
	return v.HTMLSlotElement && e instanceof HTMLSlotElement && y.push(...e.assignedElements()), _ ? y.filter((e) => e.matches(_)) : y;
}
function elementIsChildOfSlot(e, _) {
	let v = [_];
	for (; v.length > 0;) {
		let _ = v.shift();
		if (e === _) return !0;
		v.push(..._.children, ..._.shadowRoot ? _.shadowRoot.children : [], ..._.assignedElements ? _.assignedElements() : []);
	}
}
function elementIsChildOf(e, _) {
	let v = getWindow(), y = _.contains(e);
	return !y && v.HTMLSlotElement && _ instanceof HTMLSlotElement && (y = [..._.assignedElements()].includes(e), y ||= elementIsChildOfSlot(e, _)), y;
}
function showWarning(e) {
	try {
		console.warn(e);
		return;
	} catch {}
}
function createElement(e, _ = []) {
	let v = document.createElement(e);
	return v.classList.add(...Array.isArray(_) ? _ : classesToTokens(_)), v;
}
function elementPrevAll(e, _) {
	let v = [];
	for (; e.previousElementSibling;) {
		let y = e.previousElementSibling;
		_ ? y.matches(_) && v.push(y) : v.push(y), e = y;
	}
	return v;
}
function elementNextAll(e, _) {
	let v = [];
	for (; e.nextElementSibling;) {
		let y = e.nextElementSibling;
		_ ? y.matches(_) && v.push(y) : v.push(y), e = y;
	}
	return v;
}
function elementStyle(e, _) {
	return getWindow().getComputedStyle(e, null).getPropertyValue(_);
}
function elementIndex(e) {
	let _ = e, v;
	if (_) {
		for (v = 0; (_ = _.previousSibling) !== null;) _.nodeType === 1 && (v += 1);
		return v;
	}
}
function elementParents(e, _) {
	let v = [], y = e.parentElement;
	for (; y;) _ ? y.matches(_) && v.push(y) : v.push(y), y = y.parentElement;
	return v;
}
function elementOuterSize(e, _, v) {
	let y = getWindow();
	return v ? e[_ === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(y.getComputedStyle(e, null).getPropertyValue(_ === "width" ? "margin-right" : "margin-top")) + parseFloat(y.getComputedStyle(e, null).getPropertyValue(_ === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
function setInnerHTML(e, _ = "") {
	typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", { createHTML: (e) => e }).createHTML(_) : e.innerHTML = _;
}
var support;
function calcSupport() {
	let e = getWindow(), _ = getDocument();
	return {
		smoothScroll: _.documentElement && _.documentElement.style && "scrollBehavior" in _.documentElement.style,
		touch: !!("ontouchstart" in e || e.DocumentTouch && _ instanceof e.DocumentTouch)
	};
}
function getSupport() {
	return support ||= calcSupport(), support;
}
var deviceCached;
function calcDevice({ userAgent: e } = {}) {
	let _ = getSupport(), v = getWindow(), y = v.navigator.platform, b = e || v.navigator.userAgent, x = {
		ios: !1,
		android: !1
	}, S = v.screen.width, C = v.screen.height, w = b.match(/(Android);?[\s\/]+([\d.]+)?/), T = b.match(/(iPad)(?!\1).*OS\s([\d_]+)/), E = b.match(/(iPod)(.*OS\s([\d_]+))?/), D = !T && b.match(/(iPhone\sOS|iOS)\s([\d_]+)/), O = y === "Win32", k = y === "MacIntel";
	return !T && k && _.touch && [
		"1024x1366",
		"1366x1024",
		"834x1194",
		"1194x834",
		"834x1112",
		"1112x834",
		"768x1024",
		"1024x768",
		"820x1180",
		"1180x820",
		"810x1080",
		"1080x810"
	].indexOf(`${S}x${C}`) >= 0 && (T = b.match(/(Version)\/([\d.]+)/), T ||= [
		0,
		1,
		"13_0_0"
	], k = !1), w && !O && (x.os = "android", x.android = !0), (T || D || E) && (x.os = "ios", x.ios = !0), x;
}
function getDevice(e = {}) {
	return deviceCached ||= calcDevice(e), deviceCached;
}
var browser;
function calcBrowser() {
	let e = getWindow(), _ = getDevice(), v = !1;
	function y() {
		let _ = e.navigator.userAgent.toLowerCase();
		return _.indexOf("safari") >= 0 && _.indexOf("chrome") < 0 && _.indexOf("android") < 0;
	}
	if (y()) {
		let _ = String(e.navigator.userAgent);
		if (_.includes("Version/")) {
			let [e, y] = _.split("Version/")[1].split(" ")[0].split(".").map((e) => Number(e));
			v = e < 16 || e === 16 && y < 2;
		}
	}
	let b = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), x = y(), S = x || b && _.ios;
	return {
		isSafari: v || x,
		needPerspectiveFix: v,
		need3dFix: S,
		isWebView: b
	};
}
function getBrowser() {
	return browser ||= calcBrowser(), browser;
}
function Resize({ swiper: e, on: _, emit: v }) {
	let y = getWindow(), b = null, x = null, S = () => {
		!e || e.destroyed || !e.initialized || (v("beforeResize"), v("resize"));
	}, C = () => {
		!e || e.destroyed || !e.initialized || (b = new ResizeObserver((_) => {
			x = y.requestAnimationFrame(() => {
				let { width: v, height: y } = e, b = v, x = y;
				_.forEach(({ contentBoxSize: _, contentRect: v, target: y }) => {
					y && y !== e.el || (b = v ? v.width : (_[0] || _).inlineSize, x = v ? v.height : (_[0] || _).blockSize);
				}), (b !== v || x !== y) && S();
			});
		}), b.observe(e.el));
	}, w = () => {
		x && y.cancelAnimationFrame(x), b && b.unobserve && e.el && (b.unobserve(e.el), b = null);
	}, T = () => {
		!e || e.destroyed || !e.initialized || v("orientationchange");
	};
	_("init", () => {
		if (e.params.resizeObserver && y.ResizeObserver !== void 0) {
			C();
			return;
		}
		y.addEventListener("resize", S), y.addEventListener("orientationchange", T);
	}), _("destroy", () => {
		w(), y.removeEventListener("resize", S), y.removeEventListener("orientationchange", T);
	});
}
function Observer({ swiper: e, extendParams: _, on: v, emit: y }) {
	let b = [], x = getWindow(), S = (_, v = {}) => {
		let S = new (x.MutationObserver || x.WebkitMutationObserver)((_) => {
			if (e.__preventObserver__) return;
			if (_.length === 1) {
				y("observerUpdate", _[0]);
				return;
			}
			let v = function() {
				y("observerUpdate", _[0]);
			};
			x.requestAnimationFrame ? x.requestAnimationFrame(v) : x.setTimeout(v, 0);
		});
		S.observe(_, {
			attributes: v.attributes === void 0 ? !0 : v.attributes,
			childList: e.isElement || (v.childList === void 0 ? !0 : v).childList,
			characterData: v.characterData === void 0 ? !0 : v.characterData
		}), b.push(S);
	};
	_({
		observer: !1,
		observeParents: !1,
		observeSlideChildren: !1
	}), v("init", () => {
		if (e.params.observer) {
			if (e.params.observeParents) {
				let _ = elementParents(e.hostEl);
				for (let e = 0; e < _.length; e += 1) S(_[e]);
			}
			S(e.hostEl, { childList: e.params.observeSlideChildren }), S(e.wrapperEl, { attributes: !1 });
		}
	}), v("destroy", () => {
		b.forEach((e) => {
			e.disconnect();
		}), b.splice(0, b.length);
	});
}
var eventsEmitter = {
	on(e, _, v) {
		let y = this;
		if (!y.eventsListeners || y.destroyed || typeof _ != "function") return y;
		let b = v ? "unshift" : "push";
		return e.split(" ").forEach((e) => {
			y.eventsListeners[e] || (y.eventsListeners[e] = []), y.eventsListeners[e][b](_);
		}), y;
	},
	once(e, _, v) {
		let y = this;
		if (!y.eventsListeners || y.destroyed || typeof _ != "function") return y;
		function b(...v) {
			y.off(e, b), b.__emitterProxy && delete b.__emitterProxy, _.apply(y, v);
		}
		return b.__emitterProxy = _, y.on(e, b, v);
	},
	onAny(e, _) {
		let v = this;
		if (!v.eventsListeners || v.destroyed || typeof e != "function") return v;
		let y = _ ? "unshift" : "push";
		return v.eventsAnyListeners.indexOf(e) < 0 && v.eventsAnyListeners[y](e), v;
	},
	offAny(e) {
		let _ = this;
		if (!_.eventsListeners || _.destroyed || !_.eventsAnyListeners) return _;
		let v = _.eventsAnyListeners.indexOf(e);
		return v >= 0 && _.eventsAnyListeners.splice(v, 1), _;
	},
	off(e, _) {
		let v = this;
		return !v.eventsListeners || v.destroyed || !v.eventsListeners || e.split(" ").forEach((e) => {
			_ === void 0 ? v.eventsListeners[e] = [] : v.eventsListeners[e] && v.eventsListeners[e].forEach((y, b) => {
				(y === _ || y.__emitterProxy && y.__emitterProxy === _) && v.eventsListeners[e].splice(b, 1);
			});
		}), v;
	},
	emit(...e) {
		let _ = this;
		if (!_.eventsListeners || _.destroyed || !_.eventsListeners) return _;
		let v, y, b;
		return typeof e[0] == "string" || Array.isArray(e[0]) ? (v = e[0], y = e.slice(1, e.length), b = _) : (v = e[0].events, y = e[0].data, b = e[0].context || _), y.unshift(b), (Array.isArray(v) ? v : v.split(" ")).forEach((e) => {
			_.eventsAnyListeners && _.eventsAnyListeners.length && _.eventsAnyListeners.forEach((_) => {
				_.apply(b, [e, ...y]);
			}), _.eventsListeners && _.eventsListeners[e] && _.eventsListeners[e].forEach((e) => {
				e.apply(b, y);
			});
		}), _;
	}
};
function updateSize() {
	let e = this, _, v, y = e.el;
	_ = e.params.width !== void 0 && e.params.width !== null ? e.params.width : y.clientWidth, v = e.params.height !== void 0 && e.params.height !== null ? e.params.height : y.clientHeight, !(_ === 0 && e.isHorizontal() || v === 0 && e.isVertical()) && (_ = _ - parseInt(elementStyle(y, "padding-left") || 0, 10) - parseInt(elementStyle(y, "padding-right") || 0, 10), v = v - parseInt(elementStyle(y, "padding-top") || 0, 10) - parseInt(elementStyle(y, "padding-bottom") || 0, 10), Number.isNaN(_) && (_ = 0), Number.isNaN(v) && (v = 0), Object.assign(e, {
		width: _,
		height: v,
		size: e.isHorizontal() ? _ : v
	}));
}
function updateSlides() {
	let e = this;
	function _(_, v) {
		return parseFloat(_.getPropertyValue(e.getDirectionLabel(v)) || 0);
	}
	let v = e.params, { wrapperEl: y, slidesEl: b, rtlTranslate: x, wrongRTL: S } = e, C = e.virtual && v.virtual.enabled, w = C ? e.virtual.slides.length : e.slides.length, T = elementChildren(b, `.${e.params.slideClass}, swiper-slide`), E = C ? e.virtual.slides.length : T.length, D = [], O = [], k = [], A = v.slidesOffsetBefore;
	typeof A == "function" && (A = v.slidesOffsetBefore.call(e));
	let j = v.slidesOffsetAfter;
	typeof j == "function" && (j = v.slidesOffsetAfter.call(e));
	let M = e.snapGrid.length, N = e.slidesGrid.length, P = e.size - A - j, F = v.spaceBetween, I = -A, L = 0, R = 0;
	if (P === void 0) return;
	typeof F == "string" && F.indexOf("%") >= 0 ? F = parseFloat(F.replace("%", "")) / 100 * P : typeof F == "string" && (F = parseFloat(F)), e.virtualSize = -F - A - j, T.forEach((e) => {
		x ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
	}), v.centeredSlides && v.cssMode && (setCSSProperty(y, "--swiper-centered-offset-before", ""), setCSSProperty(y, "--swiper-centered-offset-after", ""));
	let z = v.grid && v.grid.rows > 1 && e.grid;
	z ? e.grid.initSlides(T) : e.grid && e.grid.unsetSlides();
	let B, V = v.slidesPerView === "auto" && v.breakpoints && Object.keys(v.breakpoints).filter((e) => v.breakpoints[e].slidesPerView !== void 0).length > 0;
	for (let y = 0; y < E; y += 1) {
		B = 0;
		let b = T[y];
		if (!(b && (z && e.grid.updateSlide(y, b, T), elementStyle(b, "display") === "none"))) {
			if (C && v.slidesPerView === "auto") v.virtual.slidesPerViewAutoSlideSize && (B = v.virtual.slidesPerViewAutoSlideSize), B && b && (v.roundLengths && (B = Math.floor(B)), b.style[e.getDirectionLabel("width")] = `${B}px`);
			else if (v.slidesPerView === "auto") {
				V && (b.style[e.getDirectionLabel("width")] = "");
				let y = getComputedStyle(b), x = b.style.transform, S = b.style.webkitTransform;
				if (x && (b.style.transform = "none"), S && (b.style.webkitTransform = "none"), v.roundLengths) B = e.isHorizontal() ? elementOuterSize(b, "width", !0) : elementOuterSize(b, "height", !0);
				else {
					let e = _(y, "width"), v = _(y, "padding-left"), x = _(y, "padding-right"), S = _(y, "margin-left"), C = _(y, "margin-right"), w = y.getPropertyValue("box-sizing");
					if (w && w === "border-box") B = e + S + C;
					else {
						let { clientWidth: _, offsetWidth: y } = b;
						B = e + v + x + S + C + (y - _);
					}
				}
				x && (b.style.transform = x), S && (b.style.webkitTransform = S), v.roundLengths && (B = Math.floor(B));
			} else B = (P - (v.slidesPerView - 1) * F) / v.slidesPerView, v.roundLengths && (B = Math.floor(B)), b && (b.style[e.getDirectionLabel("width")] = `${B}px`);
			b && (b.swiperSlideSize = B), k.push(B), v.centeredSlides ? (I = I + B / 2 + L / 2 + F, L === 0 && y !== 0 && (I = I - P / 2 - F), y === 0 && (I = I - P / 2 - F), Math.abs(I) < 1 / 1e3 && (I = 0), v.roundLengths && (I = Math.floor(I)), R % v.slidesPerGroup === 0 && D.push(I), O.push(I)) : (v.roundLengths && (I = Math.floor(I)), (R - Math.min(e.params.slidesPerGroupSkip, R)) % e.params.slidesPerGroup === 0 && D.push(I), O.push(I), I = I + B + F), e.virtualSize += B + F, L = B, R += 1;
		}
	}
	if (e.virtualSize = Math.max(e.virtualSize, P) + j, x && S && (v.effect === "slide" || v.effect === "coverflow") && (y.style.width = `${e.virtualSize + F}px`), v.setWrapperSize && (y.style[e.getDirectionLabel("width")] = `${e.virtualSize + F}px`), z && e.grid.updateWrapperSize(B, D), !v.centeredSlides) {
		let _ = [];
		for (let y = 0; y < D.length; y += 1) {
			let b = D[y];
			v.roundLengths && (b = Math.floor(b)), D[y] <= e.virtualSize - P && _.push(b);
		}
		D = _, Math.floor(e.virtualSize - P) - Math.floor(D[D.length - 1]) > 1 && D.push(e.virtualSize - P);
	}
	if (C && v.loop) {
		let _ = k[0] + F;
		if (v.slidesPerGroup > 1) {
			let y = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / v.slidesPerGroup), b = _ * v.slidesPerGroup;
			for (let e = 0; e < y; e += 1) D.push(D[D.length - 1] + b);
		}
		for (let y = 0; y < e.virtual.slidesBefore + e.virtual.slidesAfter; y += 1) v.slidesPerGroup === 1 && D.push(D[D.length - 1] + _), O.push(O[O.length - 1] + _), e.virtualSize += _;
	}
	if (D.length === 0 && (D = [0]), F !== 0) {
		let _ = e.isHorizontal() && x ? "marginLeft" : e.getDirectionLabel("marginRight");
		T.filter((e, _) => !v.cssMode || v.loop ? !0 : _ !== T.length - 1).forEach((e) => {
			e.style[_] = `${F}px`;
		});
	}
	if (v.centeredSlides && v.centeredSlidesBounds) {
		let e = 0;
		k.forEach((_) => {
			e += _ + (F || 0);
		}), e -= F;
		let _ = e > P ? e - P : 0;
		D = D.map((e) => e <= 0 ? -A : e > _ ? _ + j : e);
	}
	if (v.centerInsufficientSlides) {
		let e = 0;
		k.forEach((_) => {
			e += _ + (F || 0);
		}), e -= F;
		let _ = (A || 0) + (j || 0);
		if (e + _ < P) {
			let v = (P - e - _) / 2;
			D.forEach((e, _) => {
				D[_] = e - v;
			}), O.forEach((e, _) => {
				O[_] = e + v;
			});
		}
	}
	if (Object.assign(e, {
		slides: T,
		snapGrid: D,
		slidesGrid: O,
		slidesSizesGrid: k
	}), v.centeredSlides && v.cssMode && !v.centeredSlidesBounds) {
		setCSSProperty(y, "--swiper-centered-offset-before", `${-D[0]}px`), setCSSProperty(y, "--swiper-centered-offset-after", `${e.size / 2 - k[k.length - 1] / 2}px`);
		let _ = -e.snapGrid[0], v = -e.slidesGrid[0];
		e.snapGrid = e.snapGrid.map((e) => e + _), e.slidesGrid = e.slidesGrid.map((e) => e + v);
	}
	if (E !== w && e.emit("slidesLengthChange"), D.length !== M && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), O.length !== N && e.emit("slidesGridLengthChange"), v.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !C && !v.cssMode && (v.effect === "slide" || v.effect === "fade")) {
		let _ = `${v.containerModifierClass}backface-hidden`, y = e.el.classList.contains(_);
		E <= v.maxBackfaceHiddenSlides ? y || e.el.classList.add(_) : y && e.el.classList.remove(_);
	}
}
function updateAutoHeight(e) {
	let _ = this, v = [], y = _.virtual && _.params.virtual.enabled, b = 0, x;
	typeof e == "number" ? _.setTransition(e) : e === !0 && _.setTransition(_.params.speed);
	let S = (e) => y ? _.slides[_.getSlideIndexByData(e)] : _.slides[e];
	if (_.params.slidesPerView !== "auto" && _.params.slidesPerView > 1) if (_.params.centeredSlides) (_.visibleSlides || []).forEach((e) => {
		v.push(e);
	});
	else for (x = 0; x < Math.ceil(_.params.slidesPerView); x += 1) {
		let e = _.activeIndex + x;
		if (e > _.slides.length && !y) break;
		v.push(S(e));
	}
	else v.push(S(_.activeIndex));
	for (x = 0; x < v.length; x += 1) if (v[x] !== void 0) {
		let e = v[x].offsetHeight;
		b = e > b ? e : b;
	}
	(b || b === 0) && (_.wrapperEl.style.height = `${b}px`);
}
function updateSlidesOffset() {
	let e = this, _ = e.slides, v = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
	for (let y = 0; y < _.length; y += 1) _[y].swiperSlideOffset = (e.isHorizontal() ? _[y].offsetLeft : _[y].offsetTop) - v - e.cssOverflowAdjustment();
}
var toggleSlideClasses$1 = (e, _, v) => {
	_ && !e.classList.contains(v) ? e.classList.add(v) : !_ && e.classList.contains(v) && e.classList.remove(v);
};
function updateSlidesProgress(e = this && this.translate || 0) {
	let _ = this, v = _.params, { slides: y, rtlTranslate: b, snapGrid: x } = _;
	if (y.length === 0) return;
	y[0].swiperSlideOffset === void 0 && _.updateSlidesOffset();
	let S = -e;
	b && (S = e), _.visibleSlidesIndexes = [], _.visibleSlides = [];
	let C = v.spaceBetween;
	typeof C == "string" && C.indexOf("%") >= 0 ? C = parseFloat(C.replace("%", "")) / 100 * _.size : typeof C == "string" && (C = parseFloat(C));
	for (let e = 0; e < y.length; e += 1) {
		let w = y[e], T = w.swiperSlideOffset;
		v.cssMode && v.centeredSlides && (T -= y[0].swiperSlideOffset);
		let E = (S + (v.centeredSlides ? _.minTranslate() : 0) - T) / (w.swiperSlideSize + C), D = (S - x[0] + (v.centeredSlides ? _.minTranslate() : 0) - T) / (w.swiperSlideSize + C), O = -(S - T), k = O + _.slidesSizesGrid[e], A = O >= 0 && O <= _.size - _.slidesSizesGrid[e], j = O >= 0 && O < _.size - 1 || k > 1 && k <= _.size || O <= 0 && k >= _.size;
		j && (_.visibleSlides.push(w), _.visibleSlidesIndexes.push(e)), toggleSlideClasses$1(w, j, v.slideVisibleClass), toggleSlideClasses$1(w, A, v.slideFullyVisibleClass), w.progress = b ? -E : E, w.originalProgress = b ? -D : D;
	}
}
function updateProgress(e) {
	let _ = this;
	if (e === void 0) {
		let v = _.rtlTranslate ? -1 : 1;
		e = _ && _.translate && _.translate * v || 0;
	}
	let v = _.params, y = _.maxTranslate() - _.minTranslate(), { progress: b, isBeginning: x, isEnd: S, progressLoop: C } = _, w = x, T = S;
	if (y === 0) b = 0, x = !0, S = !0;
	else {
		b = (e - _.minTranslate()) / y;
		let v = Math.abs(e - _.minTranslate()) < 1, C = Math.abs(e - _.maxTranslate()) < 1;
		x = v || b <= 0, S = C || b >= 1, v && (b = 0), C && (b = 1);
	}
	if (v.loop) {
		let v = _.getSlideIndexByData(0), y = _.getSlideIndexByData(_.slides.length - 1), b = _.slidesGrid[v], x = _.slidesGrid[y], S = _.slidesGrid[_.slidesGrid.length - 1], w = Math.abs(e);
		C = w >= b ? (w - b) / S : (w + S - x) / S, C > 1 && --C;
	}
	Object.assign(_, {
		progress: b,
		progressLoop: C,
		isBeginning: x,
		isEnd: S
	}), (v.watchSlidesProgress || v.centeredSlides && v.autoHeight) && _.updateSlidesProgress(e), x && !w && _.emit("reachBeginning toEdge"), S && !T && _.emit("reachEnd toEdge"), (w && !x || T && !S) && _.emit("fromEdge"), _.emit("progress", b);
}
var toggleSlideClasses = (e, _, v) => {
	_ && !e.classList.contains(v) ? e.classList.add(v) : !_ && e.classList.contains(v) && e.classList.remove(v);
};
function updateSlidesClasses() {
	let e = this, { slides: _, params: v, slidesEl: y, activeIndex: b } = e, x = e.virtual && v.virtual.enabled, S = e.grid && v.grid && v.grid.rows > 1, C = (e) => elementChildren(y, `.${v.slideClass}${e}, swiper-slide${e}`)[0], w, T, E;
	if (x) if (v.loop) {
		let _ = b - e.virtual.slidesBefore;
		_ < 0 && (_ = e.virtual.slides.length + _), _ >= e.virtual.slides.length && (_ -= e.virtual.slides.length), w = C(`[data-swiper-slide-index="${_}"]`);
	} else w = C(`[data-swiper-slide-index="${b}"]`);
	else S ? (w = _.find((e) => e.column === b), E = _.find((e) => e.column === b + 1), T = _.find((e) => e.column === b - 1)) : w = _[b];
	w && (S || (E = elementNextAll(w, `.${v.slideClass}, swiper-slide`)[0], v.loop && !E && (E = _[0]), T = elementPrevAll(w, `.${v.slideClass}, swiper-slide`)[0], v.loop)), _.forEach((e) => {
		toggleSlideClasses(e, e === w, v.slideActiveClass), toggleSlideClasses(e, e === E, v.slideNextClass), toggleSlideClasses(e, e === T, v.slidePrevClass);
	}), e.emitSlidesClasses();
}
var processLazyPreloader = (e, _) => {
	if (!e || e.destroyed || !e.params) return;
	let v = _.closest((() => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`)());
	if (v) {
		let _ = v.querySelector(`.${e.params.lazyPreloaderClass}`);
		!_ && e.isElement && (v.shadowRoot ? _ = v.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
			v.shadowRoot && (_ = v.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), _ && _.remove());
		})), _ && _.remove();
	}
}, unlazy = (e, _) => {
	if (!e.slides[_]) return;
	let v = e.slides[_].querySelector("[loading=\"lazy\"]");
	v && v.removeAttribute("loading");
}, preload = (e) => {
	if (!e || e.destroyed || !e.params) return;
	let _ = e.params.lazyPreloadPrevNext, v = e.slides.length;
	if (!v || !_ || _ < 0) return;
	_ = Math.min(_, v);
	let y = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), b = e.activeIndex;
	if (e.params.grid && e.params.grid.rows > 1) {
		let v = b, x = [v - _];
		x.push(...Array.from({ length: _ }).map((e, _) => v + y + _)), e.slides.forEach((_, v) => {
			x.includes(_.column) && unlazy(e, v);
		});
		return;
	}
	let x = b + y - 1;
	if (e.params.rewind || e.params.loop) for (let y = b - _; y <= x + _; y += 1) {
		let _ = (y % v + v) % v;
		(_ < b || _ > x) && unlazy(e, _);
	}
	else for (let y = Math.max(b - _, 0); y <= Math.min(x + _, v - 1); y += 1) y !== b && (y > x || y < b) && unlazy(e, y);
};
function getActiveIndexByTranslate(e) {
	let { slidesGrid: _, params: v } = e, y = e.rtlTranslate ? e.translate : -e.translate, b;
	for (let e = 0; e < _.length; e += 1) _[e + 1] === void 0 ? y >= _[e] && (b = e) : y >= _[e] && y < _[e + 1] - (_[e + 1] - _[e]) / 2 ? b = e : y >= _[e] && y < _[e + 1] && (b = e + 1);
	return v.normalizeSlideIndex && (b < 0 || b === void 0) && (b = 0), b;
}
function updateActiveIndex(e) {
	let _ = this, v = _.rtlTranslate ? _.translate : -_.translate, { snapGrid: y, params: b, activeIndex: x, realIndex: S, snapIndex: C } = _, w = e, T, E = (e) => {
		let v = e - _.virtual.slidesBefore;
		return v < 0 && (v = _.virtual.slides.length + v), v >= _.virtual.slides.length && (v -= _.virtual.slides.length), v;
	};
	if (w === void 0 && (w = getActiveIndexByTranslate(_)), y.indexOf(v) >= 0) T = y.indexOf(v);
	else {
		let e = Math.min(b.slidesPerGroupSkip, w);
		T = e + Math.floor((w - e) / b.slidesPerGroup);
	}
	if (T >= y.length && (T = y.length - 1), w === x && !_.params.loop) {
		T !== C && (_.snapIndex = T, _.emit("snapIndexChange"));
		return;
	}
	if (w === x && _.params.loop && _.virtual && _.params.virtual.enabled) {
		_.realIndex = E(w);
		return;
	}
	let D = _.grid && b.grid && b.grid.rows > 1, O;
	if (_.virtual && b.virtual.enabled && b.loop) O = E(w);
	else if (D) {
		let e = _.slides.find((e) => e.column === w), v = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
		Number.isNaN(v) && (v = Math.max(_.slides.indexOf(e), 0)), O = Math.floor(v / b.grid.rows);
	} else if (_.slides[w]) {
		let e = _.slides[w].getAttribute("data-swiper-slide-index");
		O = e ? parseInt(e, 10) : w;
	} else O = w;
	Object.assign(_, {
		previousSnapIndex: C,
		snapIndex: T,
		previousRealIndex: S,
		realIndex: O,
		previousIndex: x,
		activeIndex: w
	}), _.initialized && preload(_), _.emit("activeIndexChange"), _.emit("snapIndexChange"), (_.initialized || _.params.runCallbacksOnInit) && (S !== O && _.emit("realIndexChange"), _.emit("slideChange"));
}
function updateClickedSlide(e, _) {
	let v = this, y = v.params, b = e.closest(`.${y.slideClass}, swiper-slide`);
	!b && v.isElement && _ && _.length > 1 && _.includes(e) && [..._.slice(_.indexOf(e) + 1, _.length)].forEach((e) => {
		!b && e.matches && e.matches(`.${y.slideClass}, swiper-slide`) && (b = e);
	});
	let x = !1, S;
	if (b) {
		for (let e = 0; e < v.slides.length; e += 1) if (v.slides[e] === b) {
			x = !0, S = e;
			break;
		}
	}
	if (b && x) v.clickedSlide = b, v.virtual && v.params.virtual.enabled ? v.clickedIndex = parseInt(b.getAttribute("data-swiper-slide-index"), 10) : v.clickedIndex = S;
	else {
		v.clickedSlide = void 0, v.clickedIndex = void 0;
		return;
	}
	y.slideToClickedSlide && v.clickedIndex !== void 0 && v.clickedIndex !== v.activeIndex && v.slideToClickedSlide();
}
var update = {
	updateSize,
	updateSlides,
	updateAutoHeight,
	updateSlidesOffset,
	updateSlidesProgress,
	updateProgress,
	updateSlidesClasses,
	updateActiveIndex,
	updateClickedSlide
};
function getSwiperTranslate(e = this.isHorizontal() ? "x" : "y") {
	let _ = this, { params: v, rtlTranslate: y, translate: b, wrapperEl: x } = _;
	if (v.virtualTranslate) return y ? -b : b;
	if (v.cssMode) return b;
	let S = getTranslate(x, e);
	return S += _.cssOverflowAdjustment(), y && (S = -S), S || 0;
}
function setTranslate(e, _) {
	let v = this, { rtlTranslate: y, params: b, wrapperEl: x, progress: S } = v, C = 0, w = 0;
	v.isHorizontal() ? C = y ? -e : e : w = e, b.roundLengths && (C = Math.floor(C), w = Math.floor(w)), v.previousTranslate = v.translate, v.translate = v.isHorizontal() ? C : w, b.cssMode ? x[v.isHorizontal() ? "scrollLeft" : "scrollTop"] = v.isHorizontal() ? -C : -w : b.virtualTranslate || (v.isHorizontal() ? C -= v.cssOverflowAdjustment() : w -= v.cssOverflowAdjustment(), x.style.transform = `translate3d(${C}px, ${w}px, 0px)`);
	let T, E = v.maxTranslate() - v.minTranslate();
	T = E === 0 ? 0 : (e - v.minTranslate()) / E, T !== S && v.updateProgress(e), v.emit("setTranslate", v.translate, _);
}
function minTranslate() {
	return -this.snapGrid[0];
}
function maxTranslate() {
	return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(e = 0, _ = this.params.speed, v = !0, y = !0, b) {
	let x = this, { params: S, wrapperEl: C } = x;
	if (x.animating && S.preventInteractionOnTransition) return !1;
	let w = x.minTranslate(), T = x.maxTranslate(), E;
	if (E = y && e > w ? w : y && e < T ? T : e, x.updateProgress(E), S.cssMode) {
		let e = x.isHorizontal();
		if (_ === 0) C[e ? "scrollLeft" : "scrollTop"] = -E;
		else {
			if (!x.support.smoothScroll) return animateCSSModeScroll({
				swiper: x,
				targetPosition: -E,
				side: e ? "left" : "top"
			}), !0;
			C.scrollTo({
				[e ? "left" : "top"]: -E,
				behavior: "smooth"
			});
		}
		return !0;
	}
	return _ === 0 ? (x.setTransition(0), x.setTranslate(E), v && (x.emit("beforeTransitionStart", _, b), x.emit("transitionEnd"))) : (x.setTransition(_), x.setTranslate(E), v && (x.emit("beforeTransitionStart", _, b), x.emit("transitionStart")), x.animating || (x.animating = !0, x.onTranslateToWrapperTransitionEnd ||= function(e) {
		!x || x.destroyed || e.target === this && (x.wrapperEl.removeEventListener("transitionend", x.onTranslateToWrapperTransitionEnd), x.onTranslateToWrapperTransitionEnd = null, delete x.onTranslateToWrapperTransitionEnd, x.animating = !1, v && x.emit("transitionEnd"));
	}, x.wrapperEl.addEventListener("transitionend", x.onTranslateToWrapperTransitionEnd))), !0;
}
var translate = {
	getTranslate: getSwiperTranslate,
	setTranslate,
	minTranslate,
	maxTranslate,
	translateTo
};
function setTransition(e, _) {
	let v = this;
	v.params.cssMode || (v.wrapperEl.style.transitionDuration = `${e}ms`, v.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), v.emit("setTransition", e, _);
}
function transitionEmit({ swiper: e, runCallbacks: _, direction: v, step: y }) {
	let { activeIndex: b, previousIndex: x } = e, S = v;
	S ||= b > x ? "next" : b < x ? "prev" : "reset", e.emit(`transition${y}`), _ && S === "reset" ? e.emit(`slideResetTransition${y}`) : _ && b !== x && (e.emit(`slideChangeTransition${y}`), S === "next" ? e.emit(`slideNextTransition${y}`) : e.emit(`slidePrevTransition${y}`));
}
function transitionStart(e = !0, _) {
	let v = this, { params: y } = v;
	y.cssMode || (y.autoHeight && v.updateAutoHeight(), transitionEmit({
		swiper: v,
		runCallbacks: e,
		direction: _,
		step: "Start"
	}));
}
function transitionEnd(e = !0, _) {
	let v = this, { params: y } = v;
	v.animating = !1, !y.cssMode && (v.setTransition(0), transitionEmit({
		swiper: v,
		runCallbacks: e,
		direction: _,
		step: "End"
	}));
}
var transition = {
	setTransition,
	transitionStart,
	transitionEnd
};
function slideTo(e = 0, _, v = !0, y, b) {
	typeof e == "string" && (e = parseInt(e, 10));
	let x = this, S = e;
	S < 0 && (S = 0);
	let { params: C, snapGrid: w, slidesGrid: T, previousIndex: E, activeIndex: D, rtlTranslate: O, wrapperEl: k, enabled: A } = x;
	if (!A && !y && !b || x.destroyed || x.animating && C.preventInteractionOnTransition) return !1;
	_ === void 0 && (_ = x.params.speed);
	let j = Math.min(x.params.slidesPerGroupSkip, S), M = j + Math.floor((S - j) / x.params.slidesPerGroup);
	M >= w.length && (M = w.length - 1);
	let N = -w[M];
	if (C.normalizeSlideIndex) for (let e = 0; e < T.length; e += 1) {
		let _ = -Math.floor(N * 100), v = Math.floor(T[e] * 100), y = Math.floor(T[e + 1] * 100);
		T[e + 1] === void 0 ? _ >= v && (S = e) : _ >= v && _ < y - (y - v) / 2 ? S = e : _ >= v && _ < y && (S = e + 1);
	}
	if (x.initialized && S !== D && (!x.allowSlideNext && (O ? N > x.translate && N > x.minTranslate() : N < x.translate && N < x.minTranslate()) || !x.allowSlidePrev && N > x.translate && N > x.maxTranslate() && (D || 0) !== S)) return !1;
	S !== (E || 0) && v && x.emit("beforeSlideChangeStart"), x.updateProgress(N);
	let P;
	P = S > D ? "next" : S < D ? "prev" : "reset";
	let F = x.virtual && x.params.virtual.enabled;
	if (!(F && b) && (O && -N === x.translate || !O && N === x.translate)) return x.updateActiveIndex(S), C.autoHeight && x.updateAutoHeight(), x.updateSlidesClasses(), C.effect !== "slide" && x.setTranslate(N), P !== "reset" && (x.transitionStart(v, P), x.transitionEnd(v, P)), !1;
	if (C.cssMode) {
		let e = x.isHorizontal(), v = O ? N : -N;
		if (_ === 0) F && (x.wrapperEl.style.scrollSnapType = "none", x._immediateVirtual = !0), F && !x._cssModeVirtualInitialSet && x.params.initialSlide > 0 ? (x._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
			k[e ? "scrollLeft" : "scrollTop"] = v;
		})) : k[e ? "scrollLeft" : "scrollTop"] = v, F && requestAnimationFrame(() => {
			x.wrapperEl.style.scrollSnapType = "", x._immediateVirtual = !1;
		});
		else {
			if (!x.support.smoothScroll) return animateCSSModeScroll({
				swiper: x,
				targetPosition: v,
				side: e ? "left" : "top"
			}), !0;
			k.scrollTo({
				[e ? "left" : "top"]: v,
				behavior: "smooth"
			});
		}
		return !0;
	}
	let I = getBrowser().isSafari;
	return F && !b && I && x.isElement && x.virtual.update(!1, !1, S), x.setTransition(_), x.setTranslate(N), x.updateActiveIndex(S), x.updateSlidesClasses(), x.emit("beforeTransitionStart", _, y), x.transitionStart(v, P), _ === 0 ? x.transitionEnd(v, P) : x.animating || (x.animating = !0, x.onSlideToWrapperTransitionEnd ||= function(e) {
		!x || x.destroyed || e.target === this && (x.wrapperEl.removeEventListener("transitionend", x.onSlideToWrapperTransitionEnd), x.onSlideToWrapperTransitionEnd = null, delete x.onSlideToWrapperTransitionEnd, x.transitionEnd(v, P));
	}, x.wrapperEl.addEventListener("transitionend", x.onSlideToWrapperTransitionEnd)), !0;
}
function slideToLoop(e = 0, _, v = !0, y) {
	typeof e == "string" && (e = parseInt(e, 10));
	let b = this;
	if (b.destroyed) return;
	_ === void 0 && (_ = b.params.speed);
	let x = b.grid && b.params.grid && b.params.grid.rows > 1, S = e;
	if (b.params.loop) if (b.virtual && b.params.virtual.enabled) S += b.virtual.slidesBefore;
	else {
		let e;
		if (x) {
			let _ = S * b.params.grid.rows;
			e = b.slides.find((e) => e.getAttribute("data-swiper-slide-index") * 1 === _).column;
		} else e = b.getSlideIndexByData(S);
		let _ = x ? Math.ceil(b.slides.length / b.params.grid.rows) : b.slides.length, { centeredSlides: v, slidesOffsetBefore: C, slidesOffsetAfter: w } = b.params, T = v || !!C || !!w, E = b.params.slidesPerView;
		E === "auto" ? E = b.slidesPerViewDynamic() : (E = Math.ceil(parseFloat(b.params.slidesPerView, 10)), T && E % 2 == 0 && (E += 1));
		let D = _ - e < E;
		if (T && (D ||= e < Math.ceil(E / 2)), y && T && b.params.slidesPerView !== "auto" && !x && (D = !1), D) {
			let v = T ? e < b.activeIndex ? "prev" : "next" : e - b.activeIndex - 1 < b.params.slidesPerView ? "next" : "prev";
			b.loopFix({
				direction: v,
				slideTo: !0,
				activeSlideIndex: v === "next" ? e + 1 : e - _ + 1,
				slideRealIndex: v === "next" ? b.realIndex : void 0
			});
		}
		if (x) {
			let e = S * b.params.grid.rows;
			S = b.slides.find((_) => _.getAttribute("data-swiper-slide-index") * 1 === e).column;
		} else S = b.getSlideIndexByData(S);
	}
	return requestAnimationFrame(() => {
		b.slideTo(S, _, v, y);
	}), b;
}
function slideNext(e, _ = !0, v) {
	let y = this, { enabled: b, params: x, animating: S } = y;
	if (!b || y.destroyed) return y;
	e === void 0 && (e = y.params.speed);
	let C = x.slidesPerGroup;
	x.slidesPerView === "auto" && x.slidesPerGroup === 1 && x.slidesPerGroupAuto && (C = Math.max(y.slidesPerViewDynamic("current", !0), 1));
	let w = y.activeIndex < x.slidesPerGroupSkip ? 1 : C, T = y.virtual && x.virtual.enabled;
	if (x.loop) {
		if (S && !T && x.loopPreventsSliding) return !1;
		if (y.loopFix({ direction: "next" }), y._clientLeft = y.wrapperEl.clientLeft, y.activeIndex === y.slides.length - 1 && x.cssMode) return requestAnimationFrame(() => {
			y.slideTo(y.activeIndex + w, e, _, v);
		}), !0;
	}
	return x.rewind && y.isEnd ? y.slideTo(0, e, _, v) : y.slideTo(y.activeIndex + w, e, _, v);
}
function slidePrev(e, _ = !0, v) {
	let y = this, { params: b, snapGrid: x, slidesGrid: S, rtlTranslate: C, enabled: w, animating: T } = y;
	if (!w || y.destroyed) return y;
	e === void 0 && (e = y.params.speed);
	let E = y.virtual && b.virtual.enabled;
	if (b.loop) {
		if (T && !E && b.loopPreventsSliding) return !1;
		y.loopFix({ direction: "prev" }), y._clientLeft = y.wrapperEl.clientLeft;
	}
	let D = C ? y.translate : -y.translate;
	function O(e) {
		return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
	}
	let k = O(D), A = x.map((e) => O(e)), j = b.freeMode && b.freeMode.enabled, M = x[A.indexOf(k) - 1];
	if (M === void 0 && (b.cssMode || j)) {
		let e;
		x.forEach((_, v) => {
			k >= _ && (e = v);
		}), e !== void 0 && (M = j ? x[e] : x[e > 0 ? e - 1 : e]);
	}
	let N = 0;
	if (M !== void 0 && (N = S.indexOf(M), N < 0 && (N = y.activeIndex - 1), b.slidesPerView === "auto" && b.slidesPerGroup === 1 && b.slidesPerGroupAuto && (N = N - y.slidesPerViewDynamic("previous", !0) + 1, N = Math.max(N, 0))), b.rewind && y.isBeginning) {
		let b = y.params.virtual && y.params.virtual.enabled && y.virtual ? y.virtual.slides.length - 1 : y.slides.length - 1;
		return y.slideTo(b, e, _, v);
	} else if (b.loop && y.activeIndex === 0 && b.cssMode) return requestAnimationFrame(() => {
		y.slideTo(N, e, _, v);
	}), !0;
	return y.slideTo(N, e, _, v);
}
function slideReset(e, _ = !0, v) {
	let y = this;
	if (!y.destroyed) return e === void 0 && (e = y.params.speed), y.slideTo(y.activeIndex, e, _, v);
}
function slideToClosest(e, _ = !0, v, y = .5) {
	let b = this;
	if (b.destroyed) return;
	e === void 0 && (e = b.params.speed);
	let x = b.activeIndex, S = Math.min(b.params.slidesPerGroupSkip, x), C = S + Math.floor((x - S) / b.params.slidesPerGroup), w = b.rtlTranslate ? b.translate : -b.translate;
	if (w >= b.snapGrid[C]) {
		let e = b.snapGrid[C], _ = b.snapGrid[C + 1];
		w - e > (_ - e) * y && (x += b.params.slidesPerGroup);
	} else {
		let e = b.snapGrid[C - 1], _ = b.snapGrid[C];
		w - e <= (_ - e) * y && (x -= b.params.slidesPerGroup);
	}
	return x = Math.max(x, 0), x = Math.min(x, b.slidesGrid.length - 1), b.slideTo(x, e, _, v);
}
function slideToClickedSlide() {
	let e = this;
	if (e.destroyed) return;
	let { params: _, slidesEl: v } = e, y = _.slidesPerView === "auto" ? e.slidesPerViewDynamic() : _.slidesPerView, b = e.getSlideIndexWhenGrid(e.clickedIndex), x, S = e.isElement ? "swiper-slide" : `.${_.slideClass}`, C = e.grid && e.params.grid && e.params.grid.rows > 1;
	if (_.loop) {
		if (e.animating) return;
		x = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), _.centeredSlides ? e.slideToLoop(x) : b > (C ? (e.slides.length - y) / 2 - (e.params.grid.rows - 1) : e.slides.length - y) ? (e.loopFix(), b = e.getSlideIndex(elementChildren(v, `${S}[data-swiper-slide-index="${x}"]`)[0]), nextTick(() => {
			e.slideTo(b);
		})) : e.slideTo(b);
	} else e.slideTo(b);
}
var slide = {
	slideTo,
	slideToLoop,
	slideNext,
	slidePrev,
	slideReset,
	slideToClosest,
	slideToClickedSlide
};
function loopCreate(e, _) {
	let v = this, { params: y, slidesEl: b } = v;
	if (!y.loop || v.virtual && v.params.virtual.enabled) return;
	let x = () => {
		elementChildren(b, `.${y.slideClass}, swiper-slide`).forEach((e, _) => {
			e.setAttribute("data-swiper-slide-index", _);
		});
	}, S = () => {
		let e = elementChildren(b, `.${y.slideBlankClass}`);
		e.forEach((e) => {
			e.remove();
		}), e.length > 0 && (v.recalcSlides(), v.updateSlides());
	}, C = v.grid && y.grid && y.grid.rows > 1;
	y.loopAddBlankSlides && (y.slidesPerGroup > 1 || C) && S();
	let w = y.slidesPerGroup * (C ? y.grid.rows : 1), T = v.slides.length % w !== 0, E = C && v.slides.length % y.grid.rows !== 0, D = (e) => {
		for (let _ = 0; _ < e; _ += 1) {
			let e = v.isElement ? createElement("swiper-slide", [y.slideBlankClass]) : createElement("div", [y.slideClass, y.slideBlankClass]);
			v.slidesEl.append(e);
		}
	};
	T ? (y.loopAddBlankSlides ? (D(w - v.slides.length % w), v.recalcSlides(), v.updateSlides()) : showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), x()) : (E && (y.loopAddBlankSlides ? (D(y.grid.rows - v.slides.length % y.grid.rows), v.recalcSlides(), v.updateSlides()) : showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), x());
	let O = y.centeredSlides || !!y.slidesOffsetBefore || !!y.slidesOffsetAfter;
	v.loopFix({
		slideRealIndex: e,
		direction: O ? void 0 : "next",
		initial: _
	});
}
function loopFix({ slideRealIndex: e, slideTo: _ = !0, direction: v, setTranslate: y, activeSlideIndex: b, initial: x, byController: S, byMousewheel: C } = {}) {
	let w = this;
	if (!w.params.loop) return;
	w.emit("beforeLoopFix");
	let { slides: T, allowSlidePrev: E, allowSlideNext: D, slidesEl: O, params: k } = w, { centeredSlides: A, slidesOffsetBefore: j, slidesOffsetAfter: M, initialSlide: N } = k, P = A || !!j || !!M;
	if (w.allowSlidePrev = !0, w.allowSlideNext = !0, w.virtual && k.virtual.enabled) {
		_ && (!P && w.snapIndex === 0 ? w.slideTo(w.virtual.slides.length, 0, !1, !0) : P && w.snapIndex < k.slidesPerView ? w.slideTo(w.virtual.slides.length + w.snapIndex, 0, !1, !0) : w.snapIndex === w.snapGrid.length - 1 && w.slideTo(w.virtual.slidesBefore, 0, !1, !0)), w.allowSlidePrev = E, w.allowSlideNext = D, w.emit("loopFix");
		return;
	}
	let F = k.slidesPerView;
	F === "auto" ? F = w.slidesPerViewDynamic() : (F = Math.ceil(parseFloat(k.slidesPerView, 10)), P && F % 2 == 0 && (F += 1));
	let I = k.slidesPerGroupAuto ? F : k.slidesPerGroup, L = P ? Math.max(I, Math.ceil(F / 2)) : I;
	L % I !== 0 && (L += I - L % I), L += k.loopAdditionalSlides, w.loopedSlides = L;
	let R = w.grid && k.grid && k.grid.rows > 1;
	T.length < F + L || w.params.effect === "cards" && T.length < F + L * 2 ? showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : R && k.grid.fill === "row" && showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
	let z = [], B = [], V = R ? Math.ceil(T.length / k.grid.rows) : T.length, H = x && V - N < F && !P, U = H ? N : w.activeIndex;
	b === void 0 ? b = w.getSlideIndex(T.find((e) => e.classList.contains(k.slideActiveClass))) : U = b;
	let W = v === "next" || !v, G = v === "prev" || !v, K = 0, q = 0, J = (R ? T[b].column : b) + (P && y === void 0 ? -F / 2 + .5 : 0);
	if (J < L) {
		K = Math.max(L - J, I);
		for (let e = 0; e < L - J; e += 1) {
			let _ = e - Math.floor(e / V) * V;
			if (R) {
				let e = V - _ - 1;
				for (let _ = T.length - 1; _ >= 0; --_) T[_].column === e && z.push(_);
			} else z.push(V - _ - 1);
		}
	} else if (J + F > V - L) {
		q = Math.max(J - (V - L * 2), I), H && (q = Math.max(q, F - V + N + 1));
		for (let e = 0; e < q; e += 1) {
			let _ = e - Math.floor(e / V) * V;
			R ? T.forEach((e, v) => {
				e.column === _ && B.push(v);
			}) : B.push(_);
		}
	}
	if (w.__preventObserver__ = !0, requestAnimationFrame(() => {
		w.__preventObserver__ = !1;
	}), w.params.effect === "cards" && T.length < F + L * 2 && (B.includes(b) && B.splice(B.indexOf(b), 1), z.includes(b) && z.splice(z.indexOf(b), 1)), G && z.forEach((e) => {
		T[e].swiperLoopMoveDOM = !0, O.prepend(T[e]), T[e].swiperLoopMoveDOM = !1;
	}), W && B.forEach((e) => {
		T[e].swiperLoopMoveDOM = !0, O.append(T[e]), T[e].swiperLoopMoveDOM = !1;
	}), w.recalcSlides(), k.slidesPerView === "auto" ? w.updateSlides() : R && (z.length > 0 && G || B.length > 0 && W) && w.slides.forEach((e, _) => {
		w.grid.updateSlide(_, e, w.slides);
	}), k.watchSlidesProgress && w.updateSlidesOffset(), _) {
		if (z.length > 0 && G) {
			if (e === void 0) {
				let e = w.slidesGrid[U], _ = w.slidesGrid[U + K] - e;
				C ? w.setTranslate(w.translate - _) : (w.slideTo(U + Math.ceil(K), 0, !1, !0), y && (w.touchEventsData.startTranslate = w.touchEventsData.startTranslate - _, w.touchEventsData.currentTranslate = w.touchEventsData.currentTranslate - _));
			} else if (y) {
				let e = R ? z.length / k.grid.rows : z.length;
				w.slideTo(w.activeIndex + e, 0, !1, !0), w.touchEventsData.currentTranslate = w.translate;
			}
		} else if (B.length > 0 && W) if (e === void 0) {
			let e = w.slidesGrid[U], _ = w.slidesGrid[U - q] - e;
			C ? w.setTranslate(w.translate - _) : (w.slideTo(U - q, 0, !1, !0), y && (w.touchEventsData.startTranslate = w.touchEventsData.startTranslate - _, w.touchEventsData.currentTranslate = w.touchEventsData.currentTranslate - _));
		} else {
			let e = R ? B.length / k.grid.rows : B.length;
			w.slideTo(w.activeIndex - e, 0, !1, !0);
		}
	}
	if (w.allowSlidePrev = E, w.allowSlideNext = D, w.controller && w.controller.control && !S) {
		let x = {
			slideRealIndex: e,
			direction: v,
			setTranslate: y,
			activeSlideIndex: b,
			byController: !0
		};
		Array.isArray(w.controller.control) ? w.controller.control.forEach((e) => {
			!e.destroyed && e.params.loop && e.loopFix({
				...x,
				slideTo: e.params.slidesPerView === k.slidesPerView ? _ : !1
			});
		}) : w.controller.control instanceof w.constructor && w.controller.control.params.loop && w.controller.control.loopFix({
			...x,
			slideTo: w.controller.control.params.slidesPerView === k.slidesPerView ? _ : !1
		});
	}
	w.emit("loopFix");
}
function loopDestroy() {
	let e = this, { params: _, slidesEl: v } = e;
	if (!_.loop || !v || e.virtual && e.params.virtual.enabled) return;
	e.recalcSlides();
	let y = [];
	e.slides.forEach((e) => {
		let _ = e.swiperSlideIndex === void 0 ? e.getAttribute("data-swiper-slide-index") * 1 : e.swiperSlideIndex;
		y[_] = e;
	}), e.slides.forEach((e) => {
		e.removeAttribute("data-swiper-slide-index");
	}), y.forEach((e) => {
		v.append(e);
	}), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var loop = {
	loopCreate,
	loopFix,
	loopDestroy
};
function setGrabCursor(e) {
	let _ = this;
	if (!_.params.simulateTouch || _.params.watchOverflow && _.isLocked || _.params.cssMode) return;
	let v = _.params.touchEventsTarget === "container" ? _.el : _.wrapperEl;
	_.isElement && (_.__preventObserver__ = !0), v.style.cursor = "move", v.style.cursor = e ? "grabbing" : "grab", _.isElement && requestAnimationFrame(() => {
		_.__preventObserver__ = !1;
	});
}
function unsetGrabCursor() {
	let e = this;
	e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
		e.__preventObserver__ = !1;
	}));
}
var grabCursor = {
	setGrabCursor,
	unsetGrabCursor
};
function closestElement(e, _ = this) {
	function v(_) {
		if (!_ || _ === getDocument() || _ === getWindow()) return null;
		_.assignedSlot && (_ = _.assignedSlot);
		let y = _.closest(e);
		return !y && !_.getRootNode ? null : y || v(_.getRootNode().host);
	}
	return v(_);
}
function preventEdgeSwipe(e, _, v) {
	let y = getWindow(), { params: b } = e, x = b.edgeSwipeDetection, S = b.edgeSwipeThreshold;
	return x && (v <= S || v >= y.innerWidth - S) ? x === "prevent" ? (_.preventDefault(), !0) : !1 : !0;
}
function onTouchStart(e) {
	let _ = this, v = getDocument(), y = e;
	y.originalEvent && (y = y.originalEvent);
	let b = _.touchEventsData;
	if (y.type === "pointerdown") {
		if (b.pointerId !== null && b.pointerId !== y.pointerId) return;
		b.pointerId = y.pointerId;
	} else y.type === "touchstart" && y.targetTouches.length === 1 && (b.touchId = y.targetTouches[0].identifier);
	if (y.type === "touchstart") {
		preventEdgeSwipe(_, y, y.targetTouches[0].pageX);
		return;
	}
	let { params: x, touches: S, enabled: C } = _;
	if (!C || !x.simulateTouch && y.pointerType === "mouse" || _.animating && x.preventInteractionOnTransition) return;
	!_.animating && x.cssMode && x.loop && _.loopFix();
	let w = y.target;
	if (x.touchEventsTarget === "wrapper" && !elementIsChildOf(w, _.wrapperEl) || "which" in y && y.which === 3 || "button" in y && y.button > 0 || b.isTouched && b.isMoved) return;
	let T = !!x.noSwipingClass && x.noSwipingClass !== "", E = y.composedPath ? y.composedPath() : y.path;
	T && y.target && y.target.shadowRoot && E && (w = E[0]);
	let D = x.noSwipingSelector ? x.noSwipingSelector : `.${x.noSwipingClass}`, O = !!(y.target && y.target.shadowRoot);
	if (x.noSwiping && (O ? closestElement(D, w) : w.closest(D))) {
		_.allowClick = !0;
		return;
	}
	if (x.swipeHandler && !w.closest(x.swipeHandler)) return;
	S.currentX = y.pageX, S.currentY = y.pageY;
	let k = S.currentX, A = S.currentY;
	if (!preventEdgeSwipe(_, y, k)) return;
	Object.assign(b, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0
	}), S.startX = k, S.startY = A, b.touchStartTime = now(), _.allowClick = !0, _.updateSize(), _.swipeDirection = void 0, x.threshold > 0 && (b.allowThresholdMove = !1);
	let j = !0;
	w.matches(b.focusableElements) && (j = !1, w.nodeName === "SELECT" && (b.isTouched = !1)), v.activeElement && v.activeElement.matches(b.focusableElements) && v.activeElement !== w && (y.pointerType === "mouse" || y.pointerType !== "mouse" && !w.matches(b.focusableElements)) && v.activeElement.blur();
	let M = j && _.allowTouchMove && x.touchStartPreventDefault;
	(x.touchStartForcePreventDefault || M) && !w.isContentEditable && y.preventDefault(), x.freeMode && x.freeMode.enabled && _.freeMode && _.animating && !x.cssMode && _.freeMode.onTouchStart(), _.emit("touchStart", y);
}
function onTouchMove(e) {
	let _ = getDocument(), v = this, y = v.touchEventsData, { params: b, touches: x, rtlTranslate: S, enabled: C } = v;
	if (!C || !b.simulateTouch && e.pointerType === "mouse") return;
	let w = e;
	if (w.originalEvent && (w = w.originalEvent), w.type === "pointermove" && (y.touchId !== null || w.pointerId !== y.pointerId)) return;
	let T;
	if (w.type === "touchmove") {
		if (T = [...w.changedTouches].find((e) => e.identifier === y.touchId), !T || T.identifier !== y.touchId) return;
	} else T = w;
	if (!y.isTouched) {
		y.startMoving && y.isScrolling && v.emit("touchMoveOpposite", w);
		return;
	}
	let E = T.pageX, D = T.pageY;
	if (w.preventedByNestedSwiper) {
		x.startX = E, x.startY = D;
		return;
	}
	if (!v.allowTouchMove) {
		w.target.matches(y.focusableElements) || (v.allowClick = !1), y.isTouched && (Object.assign(x, {
			startX: E,
			startY: D,
			currentX: E,
			currentY: D
		}), y.touchStartTime = now());
		return;
	}
	if (b.touchReleaseOnEdges && !b.loop) {
		if (v.isVertical()) {
			if (D < x.startY && v.translate <= v.maxTranslate() || D > x.startY && v.translate >= v.minTranslate()) {
				y.isTouched = !1, y.isMoved = !1;
				return;
			}
		} else if (S && (E > x.startX && -v.translate <= v.maxTranslate() || E < x.startX && -v.translate >= v.minTranslate())) return;
		else if (!S && (E < x.startX && v.translate <= v.maxTranslate() || E > x.startX && v.translate >= v.minTranslate())) return;
	}
	if (_.activeElement && _.activeElement.matches(y.focusableElements) && _.activeElement !== w.target && w.pointerType !== "mouse" && _.activeElement.blur(), _.activeElement && w.target === _.activeElement && w.target.matches(y.focusableElements)) {
		y.isMoved = !0, v.allowClick = !1;
		return;
	}
	y.allowTouchCallbacks && v.emit("touchMove", w), x.previousX = x.currentX, x.previousY = x.currentY, x.currentX = E, x.currentY = D;
	let O = x.currentX - x.startX, k = x.currentY - x.startY;
	if (v.params.threshold && Math.sqrt(O ** 2 + k ** 2) < v.params.threshold) return;
	if (y.isScrolling === void 0) {
		let e;
		v.isHorizontal() && x.currentY === x.startY || v.isVertical() && x.currentX === x.startX ? y.isScrolling = !1 : O * O + k * k >= 25 && (e = Math.atan2(Math.abs(k), Math.abs(O)) * 180 / Math.PI, y.isScrolling = v.isHorizontal() ? e > b.touchAngle : 90 - e > b.touchAngle);
	}
	if (y.isScrolling && v.emit("touchMoveOpposite", w), y.startMoving === void 0 && (x.currentX !== x.startX || x.currentY !== x.startY) && (y.startMoving = !0), y.isScrolling || w.type === "touchmove" && y.preventTouchMoveFromPointerMove) {
		y.isTouched = !1;
		return;
	}
	if (!y.startMoving) return;
	v.allowClick = !1, !b.cssMode && w.cancelable && w.preventDefault(), b.touchMoveStopPropagation && !b.nested && w.stopPropagation();
	let A = v.isHorizontal() ? O : k, j = v.isHorizontal() ? x.currentX - x.previousX : x.currentY - x.previousY;
	b.oneWayMovement && (A = Math.abs(A) * (S ? 1 : -1), j = Math.abs(j) * (S ? 1 : -1)), x.diff = A, A *= b.touchRatio, S && (A = -A, j = -j);
	let M = v.touchesDirection;
	v.swipeDirection = A > 0 ? "prev" : "next", v.touchesDirection = j > 0 ? "prev" : "next";
	let N = v.params.loop && !b.cssMode, P = v.touchesDirection === "next" && v.allowSlideNext || v.touchesDirection === "prev" && v.allowSlidePrev;
	if (!y.isMoved) {
		if (N && P && v.loopFix({ direction: v.swipeDirection }), y.startTranslate = v.getTranslate(), v.setTransition(0), v.animating) {
			let e = new window.CustomEvent("transitionend", {
				bubbles: !0,
				cancelable: !0,
				detail: { bySwiperTouchMove: !0 }
			});
			v.wrapperEl.dispatchEvent(e);
		}
		y.allowMomentumBounce = !1, b.grabCursor && (v.allowSlideNext === !0 || v.allowSlidePrev === !0) && v.setGrabCursor(!0), v.emit("sliderFirstMove", w);
	}
	if ((/* @__PURE__ */ new Date()).getTime(), b._loopSwapReset !== !1 && y.isMoved && y.allowThresholdMove && M !== v.touchesDirection && N && P && Math.abs(A) >= 1) {
		Object.assign(x, {
			startX: E,
			startY: D,
			currentX: E,
			currentY: D,
			startTranslate: y.currentTranslate
		}), y.loopSwapReset = !0, y.startTranslate = y.currentTranslate;
		return;
	}
	v.emit("sliderMove", w), y.isMoved = !0, y.currentTranslate = A + y.startTranslate;
	let F = !0, I = b.resistanceRatio;
	if (b.touchReleaseOnEdges && (I = 0), A > 0 ? (N && P && y.allowThresholdMove && y.currentTranslate > (b.centeredSlides ? v.minTranslate() - v.slidesSizesGrid[v.activeIndex + 1] - (b.slidesPerView !== "auto" && v.slides.length - b.slidesPerView >= 2 ? v.slidesSizesGrid[v.activeIndex + 1] + v.params.spaceBetween : 0) - v.params.spaceBetween : v.minTranslate()) && v.loopFix({
		direction: "prev",
		setTranslate: !0,
		activeSlideIndex: 0
	}), y.currentTranslate > v.minTranslate() && (F = !1, b.resistance && (y.currentTranslate = v.minTranslate() - 1 + (-v.minTranslate() + y.startTranslate + A) ** I))) : A < 0 && (N && P && y.allowThresholdMove && y.currentTranslate < (b.centeredSlides ? v.maxTranslate() + v.slidesSizesGrid[v.slidesSizesGrid.length - 1] + v.params.spaceBetween + (b.slidesPerView !== "auto" && v.slides.length - b.slidesPerView >= 2 ? v.slidesSizesGrid[v.slidesSizesGrid.length - 1] + v.params.spaceBetween : 0) : v.maxTranslate()) && v.loopFix({
		direction: "next",
		setTranslate: !0,
		activeSlideIndex: v.slides.length - (b.slidesPerView === "auto" ? v.slidesPerViewDynamic() : Math.ceil(parseFloat(b.slidesPerView, 10)))
	}), y.currentTranslate < v.maxTranslate() && (F = !1, b.resistance && (y.currentTranslate = v.maxTranslate() + 1 - (v.maxTranslate() - y.startTranslate - A) ** I))), F && (w.preventedByNestedSwiper = !0), !v.allowSlideNext && v.swipeDirection === "next" && y.currentTranslate < y.startTranslate && (y.currentTranslate = y.startTranslate), !v.allowSlidePrev && v.swipeDirection === "prev" && y.currentTranslate > y.startTranslate && (y.currentTranslate = y.startTranslate), !v.allowSlidePrev && !v.allowSlideNext && (y.currentTranslate = y.startTranslate), b.threshold > 0) if (Math.abs(A) > b.threshold || y.allowThresholdMove) {
		if (!y.allowThresholdMove) {
			y.allowThresholdMove = !0, x.startX = x.currentX, x.startY = x.currentY, y.currentTranslate = y.startTranslate, x.diff = v.isHorizontal() ? x.currentX - x.startX : x.currentY - x.startY;
			return;
		}
	} else {
		y.currentTranslate = y.startTranslate;
		return;
	}
	!b.followFinger || b.cssMode || ((b.freeMode && b.freeMode.enabled && v.freeMode || b.watchSlidesProgress) && (v.updateActiveIndex(), v.updateSlidesClasses()), b.freeMode && b.freeMode.enabled && v.freeMode && v.freeMode.onTouchMove(), v.updateProgress(y.currentTranslate), v.setTranslate(y.currentTranslate));
}
function onTouchEnd(e) {
	let _ = this, v = _.touchEventsData, y = e;
	y.originalEvent && (y = y.originalEvent);
	let b;
	if (y.type === "touchend" || y.type === "touchcancel") {
		if (b = [...y.changedTouches].find((e) => e.identifier === v.touchId), !b || b.identifier !== v.touchId) return;
	} else {
		if (v.touchId !== null || y.pointerId !== v.pointerId) return;
		b = y;
	}
	if ([
		"pointercancel",
		"pointerout",
		"pointerleave",
		"contextmenu"
	].includes(y.type) && !(["pointercancel", "contextmenu"].includes(y.type) && (_.browser.isSafari || _.browser.isWebView))) return;
	v.pointerId = null, v.touchId = null;
	let { params: x, touches: S, rtlTranslate: C, slidesGrid: w, enabled: T } = _;
	if (!T || !x.simulateTouch && y.pointerType === "mouse") return;
	if (v.allowTouchCallbacks && _.emit("touchEnd", y), v.allowTouchCallbacks = !1, !v.isTouched) {
		v.isMoved && x.grabCursor && _.setGrabCursor(!1), v.isMoved = !1, v.startMoving = !1;
		return;
	}
	x.grabCursor && v.isMoved && v.isTouched && (_.allowSlideNext === !0 || _.allowSlidePrev === !0) && _.setGrabCursor(!1);
	let E = now(), D = E - v.touchStartTime;
	if (_.allowClick) {
		let e = y.path || y.composedPath && y.composedPath();
		_.updateClickedSlide(e && e[0] || y.target, e), _.emit("tap click", y), D < 300 && E - v.lastClickTime < 300 && _.emit("doubleTap doubleClick", y);
	}
	if (v.lastClickTime = now(), nextTick(() => {
		_.destroyed || (_.allowClick = !0);
	}), !v.isTouched || !v.isMoved || !_.swipeDirection || S.diff === 0 && !v.loopSwapReset || v.currentTranslate === v.startTranslate && !v.loopSwapReset) {
		v.isTouched = !1, v.isMoved = !1, v.startMoving = !1;
		return;
	}
	v.isTouched = !1, v.isMoved = !1, v.startMoving = !1;
	let O;
	if (O = x.followFinger ? C ? _.translate : -_.translate : -v.currentTranslate, x.cssMode) return;
	if (x.freeMode && x.freeMode.enabled) {
		_.freeMode.onTouchEnd({ currentPos: O });
		return;
	}
	let k = O >= -_.maxTranslate() && !_.params.loop, A = 0, j = _.slidesSizesGrid[0];
	for (let e = 0; e < w.length; e += e < x.slidesPerGroupSkip ? 1 : x.slidesPerGroup) {
		let _ = e < x.slidesPerGroupSkip - 1 ? 1 : x.slidesPerGroup;
		w[e + _] === void 0 ? (k || O >= w[e]) && (A = e, j = w[w.length - 1] - w[w.length - 2]) : (k || O >= w[e] && O < w[e + _]) && (A = e, j = w[e + _] - w[e]);
	}
	let M = null, N = null;
	x.rewind && (_.isBeginning ? N = x.virtual && x.virtual.enabled && _.virtual ? _.virtual.slides.length - 1 : _.slides.length - 1 : _.isEnd && (M = 0));
	let P = (O - w[A]) / j, F = A < x.slidesPerGroupSkip - 1 ? 1 : x.slidesPerGroup;
	if (D > x.longSwipesMs) {
		if (!x.longSwipes) {
			_.slideTo(_.activeIndex);
			return;
		}
		_.swipeDirection === "next" && (P >= x.longSwipesRatio ? _.slideTo(x.rewind && _.isEnd ? M : A + F) : _.slideTo(A)), _.swipeDirection === "prev" && (P > 1 - x.longSwipesRatio ? _.slideTo(A + F) : N !== null && P < 0 && Math.abs(P) > x.longSwipesRatio ? _.slideTo(N) : _.slideTo(A));
	} else {
		if (!x.shortSwipes) {
			_.slideTo(_.activeIndex);
			return;
		}
		_.navigation && (y.target === _.navigation.nextEl || y.target === _.navigation.prevEl) ? y.target === _.navigation.nextEl ? _.slideTo(A + F) : _.slideTo(A) : (_.swipeDirection === "next" && _.slideTo(M === null ? A + F : M), _.swipeDirection === "prev" && _.slideTo(N === null ? A : N));
	}
}
function onResize() {
	let e = this, { params: _, el: v } = e;
	if (v && v.offsetWidth === 0) return;
	_.breakpoints && e.setBreakpoint();
	let { allowSlideNext: y, allowSlidePrev: b, snapGrid: x } = e, S = e.virtual && e.params.virtual.enabled;
	e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
	let C = S && _.loop;
	(_.slidesPerView === "auto" || _.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !C ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !S ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
		e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
	}, 500)), e.allowSlidePrev = b, e.allowSlideNext = y, e.params.watchOverflow && x !== e.snapGrid && e.checkOverflow();
}
function onClick(e) {
	let _ = this;
	_.enabled && (_.allowClick || (_.params.preventClicks && e.preventDefault(), _.params.preventClicksPropagation && _.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function onScroll() {
	let e = this, { wrapperEl: _, rtlTranslate: v, enabled: y } = e;
	if (!y) return;
	e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -_.scrollLeft : e.translate = -_.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
	let b, x = e.maxTranslate() - e.minTranslate();
	b = x === 0 ? 0 : (e.translate - e.minTranslate()) / x, b !== e.progress && e.updateProgress(v ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function onLoad(e) {
	let _ = this;
	processLazyPreloader(_, e.target), !(_.params.cssMode || _.params.slidesPerView !== "auto" && !_.params.autoHeight) && _.update();
}
function onDocumentTouchStart() {
	let e = this;
	e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
var events = (e, _) => {
	let v = getDocument(), { params: y, el: b, wrapperEl: x, device: S } = e, C = !!y.nested, w = _ === "on" ? "addEventListener" : "removeEventListener", T = _;
	!b || typeof b == "string" || (v[w]("touchstart", e.onDocumentTouchStart, {
		passive: !1,
		capture: C
	}), b[w]("touchstart", e.onTouchStart, { passive: !1 }), b[w]("pointerdown", e.onTouchStart, { passive: !1 }), v[w]("touchmove", e.onTouchMove, {
		passive: !1,
		capture: C
	}), v[w]("pointermove", e.onTouchMove, {
		passive: !1,
		capture: C
	}), v[w]("touchend", e.onTouchEnd, { passive: !0 }), v[w]("pointerup", e.onTouchEnd, { passive: !0 }), v[w]("pointercancel", e.onTouchEnd, { passive: !0 }), v[w]("touchcancel", e.onTouchEnd, { passive: !0 }), v[w]("pointerout", e.onTouchEnd, { passive: !0 }), v[w]("pointerleave", e.onTouchEnd, { passive: !0 }), v[w]("contextmenu", e.onTouchEnd, { passive: !0 }), (y.preventClicks || y.preventClicksPropagation) && b[w]("click", e.onClick, !0), y.cssMode && x[w]("scroll", e.onScroll), y.updateOnWindowResize ? e[T](S.ios || S.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[T]("observerUpdate", onResize, !0), b[w]("load", e.onLoad, { capture: !0 }));
};
function attachEvents() {
	let e = this, { params: _ } = e;
	e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), e.onDocumentTouchStart = onDocumentTouchStart.bind(e), _.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), e.onLoad = onLoad.bind(e), events(e, "on");
}
function detachEvents() {
	events(this, "off");
}
var events$1 = {
	attachEvents,
	detachEvents
}, isGridEnabled = (e, _) => e.grid && _.grid && _.grid.rows > 1;
function setBreakpoint() {
	let e = this, { realIndex: _, initialized: v, params: y, el: b } = e, x = y.breakpoints;
	if (!x || x && Object.keys(x).length === 0) return;
	let S = getDocument(), C = y.breakpointsBase === "window" || !y.breakpointsBase ? y.breakpointsBase : "container", w = ["window", "container"].includes(y.breakpointsBase) || !y.breakpointsBase ? e.el : S.querySelector(y.breakpointsBase), T = e.getBreakpoint(x, C, w);
	if (!T || e.currentBreakpoint === T) return;
	let E = (T in x ? x[T] : void 0) || e.originalParams, D = isGridEnabled(e, y), O = isGridEnabled(e, E), k = e.params.grabCursor, A = E.grabCursor, j = y.enabled;
	D && !O ? (b.classList.remove(`${y.containerModifierClass}grid`, `${y.containerModifierClass}grid-column`), e.emitContainerClasses()) : !D && O && (b.classList.add(`${y.containerModifierClass}grid`), (E.grid.fill && E.grid.fill === "column" || !E.grid.fill && y.grid.fill === "column") && b.classList.add(`${y.containerModifierClass}grid-column`), e.emitContainerClasses()), k && !A ? e.unsetGrabCursor() : !k && A && e.setGrabCursor(), [
		"navigation",
		"pagination",
		"scrollbar"
	].forEach((_) => {
		if (E[_] === void 0) return;
		let v = y[_] && y[_].enabled, b = E[_] && E[_].enabled;
		v && !b && e[_].disable(), !v && b && e[_].enable();
	});
	let M = E.direction && E.direction !== y.direction, N = y.loop && (E.slidesPerView !== y.slidesPerView || M), P = y.loop;
	M && v && e.changeDirection(), extend$1(e.params, E);
	let F = e.params.enabled, I = e.params.loop;
	Object.assign(e, {
		allowTouchMove: e.params.allowTouchMove,
		allowSlideNext: e.params.allowSlideNext,
		allowSlidePrev: e.params.allowSlidePrev
	}), j && !F ? e.disable() : !j && F && e.enable(), e.currentBreakpoint = T, e.emit("_beforeBreakpoint", E), v && (N ? (e.loopDestroy(), e.loopCreate(_), e.updateSlides()) : !P && I ? (e.loopCreate(_), e.updateSlides()) : P && !I && e.loopDestroy()), e.emit("breakpoint", E);
}
function getBreakpoint(e, _ = "window", v) {
	if (!e || _ === "container" && !v) return;
	let y = !1, b = getWindow(), x = _ === "window" ? b.innerHeight : v.clientHeight, S = Object.keys(e).map((e) => typeof e == "string" && e.indexOf("@") === 0 ? {
		value: x * parseFloat(e.substr(1)),
		point: e
	} : {
		value: e,
		point: e
	});
	S.sort((e, _) => parseInt(e.value, 10) - parseInt(_.value, 10));
	for (let e = 0; e < S.length; e += 1) {
		let { point: x, value: C } = S[e];
		_ === "window" ? b.matchMedia(`(min-width: ${C}px)`).matches && (y = x) : C <= v.clientWidth && (y = x);
	}
	return y || "max";
}
var breakpoints = {
	setBreakpoint,
	getBreakpoint
};
function prepareClasses(e, _) {
	let v = [];
	return e.forEach((e) => {
		typeof e == "object" ? Object.keys(e).forEach((y) => {
			e[y] && v.push(_ + y);
		}) : typeof e == "string" && v.push(_ + e);
	}), v;
}
function addClasses() {
	let e = this, { classNames: _, params: v, rtl: y, el: b, device: x } = e, S = prepareClasses([
		"initialized",
		v.direction,
		{ "free-mode": e.params.freeMode && v.freeMode.enabled },
		{ autoheight: v.autoHeight },
		{ rtl: y },
		{ grid: v.grid && v.grid.rows > 1 },
		{ "grid-column": v.grid && v.grid.rows > 1 && v.grid.fill === "column" },
		{ android: x.android },
		{ ios: x.ios },
		{ "css-mode": v.cssMode },
		{ centered: v.cssMode && v.centeredSlides },
		{ "watch-progress": v.watchSlidesProgress }
	], v.containerModifierClass);
	_.push(...S), b.classList.add(..._), e.emitContainerClasses();
}
function removeClasses() {
	let e = this, { el: _, classNames: v } = e;
	!_ || typeof _ == "string" || (_.classList.remove(...v), e.emitContainerClasses());
}
var classes = {
	addClasses,
	removeClasses
};
function checkOverflow() {
	let e = this, { isLocked: _, params: v } = e, { slidesOffsetBefore: y } = v;
	if (y) {
		let _ = e.slides.length - 1, v = e.slidesGrid[_] + e.slidesSizesGrid[_] + y * 2;
		e.isLocked = e.size > v;
	} else e.isLocked = e.snapGrid.length === 1;
	v.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), v.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), _ && _ !== e.isLocked && (e.isEnd = !1), _ !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = { checkOverflow }, defaults = {
	init: !0,
	direction: "horizontal",
	oneWayMovement: !1,
	swiperElementNodeName: "SWIPER-CONTAINER",
	touchEventsTarget: "wrapper",
	initialSlide: 0,
	speed: 300,
	cssMode: !1,
	updateOnWindowResize: !0,
	resizeObserver: !0,
	nested: !1,
	createElements: !1,
	eventsPrefix: "swiper",
	enabled: !0,
	focusableElements: "input, select, option, textarea, button, video, label",
	width: null,
	height: null,
	preventInteractionOnTransition: !1,
	userAgent: null,
	url: null,
	edgeSwipeDetection: !1,
	edgeSwipeThreshold: 20,
	autoHeight: !1,
	setWrapperSize: !1,
	virtualTranslate: !1,
	effect: "slide",
	breakpoints: void 0,
	breakpointsBase: "window",
	spaceBetween: 0,
	slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerGroupSkip: 0,
	slidesPerGroupAuto: !1,
	centeredSlides: !1,
	centeredSlidesBounds: !1,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	normalizeSlideIndex: !0,
	centerInsufficientSlides: !1,
	watchOverflow: !0,
	roundLengths: !1,
	touchRatio: 1,
	touchAngle: 45,
	simulateTouch: !0,
	shortSwipes: !0,
	longSwipes: !0,
	longSwipesRatio: .5,
	longSwipesMs: 300,
	followFinger: !0,
	allowTouchMove: !0,
	threshold: 5,
	touchMoveStopPropagation: !1,
	touchStartPreventDefault: !0,
	touchStartForcePreventDefault: !1,
	touchReleaseOnEdges: !1,
	uniqueNavElements: !0,
	resistance: !0,
	resistanceRatio: .85,
	watchSlidesProgress: !1,
	grabCursor: !1,
	preventClicks: !0,
	preventClicksPropagation: !0,
	slideToClickedSlide: !1,
	loop: !1,
	loopAddBlankSlides: !0,
	loopAdditionalSlides: 0,
	loopPreventsSliding: !0,
	rewind: !1,
	allowSlidePrev: !0,
	allowSlideNext: !0,
	swipeHandler: null,
	noSwiping: !0,
	noSwipingClass: "swiper-no-swiping",
	noSwipingSelector: null,
	passiveListeners: !0,
	maxBackfaceHiddenSlides: 10,
	containerModifierClass: "swiper-",
	slideClass: "swiper-slide",
	slideBlankClass: "swiper-slide-blank",
	slideActiveClass: "swiper-slide-active",
	slideVisibleClass: "swiper-slide-visible",
	slideFullyVisibleClass: "swiper-slide-fully-visible",
	slideNextClass: "swiper-slide-next",
	slidePrevClass: "swiper-slide-prev",
	wrapperClass: "swiper-wrapper",
	lazyPreloaderClass: "swiper-lazy-preloader",
	lazyPreloadPrevNext: 0,
	runCallbacksOnInit: !0,
	_emitClasses: !1
};
function moduleExtendParams(e, _) {
	return function(v = {}) {
		let y = Object.keys(v)[0], b = v[y];
		if (typeof b != "object" || !b) {
			extend$1(_, v);
			return;
		}
		if (e[y] === !0 && (e[y] = { enabled: !0 }), y === "navigation" && e[y] && e[y].enabled && !e[y].prevEl && !e[y].nextEl && (e[y].auto = !0), ["pagination", "scrollbar"].indexOf(y) >= 0 && e[y] && e[y].enabled && !e[y].el && (e[y].auto = !0), !(y in e && "enabled" in b)) {
			extend$1(_, v);
			return;
		}
		typeof e[y] == "object" && !("enabled" in e[y]) && (e[y].enabled = !0), e[y] || (e[y] = { enabled: !1 }), extend$1(_, v);
	};
}
var prototypes = {
	eventsEmitter,
	update,
	translate,
	transition,
	slide,
	loop,
	grabCursor,
	events: events$1,
	breakpoints,
	checkOverflow: checkOverflow$1,
	classes
}, extendedDefaults = {}, Swiper$1 = class e {
	constructor(..._) {
		let v, y;
		_.length === 1 && _[0].constructor && Object.prototype.toString.call(_[0]).slice(8, -1) === "Object" ? y = _[0] : [v, y] = _, y ||= {}, y = extend$1({}, y), v && !y.el && (y.el = v);
		let b = getDocument();
		if (y.el && typeof y.el == "string" && b.querySelectorAll(y.el).length > 1) {
			let _ = [];
			return b.querySelectorAll(y.el).forEach((v) => {
				let b = extend$1({}, y, { el: v });
				_.push(new e(b));
			}), _;
		}
		let x = this;
		x.__swiper__ = !0, x.support = getSupport(), x.device = getDevice({ userAgent: y.userAgent }), x.browser = getBrowser(), x.eventsListeners = {}, x.eventsAnyListeners = [], x.modules = [...x.__modules__], y.modules && Array.isArray(y.modules) && x.modules.push(...y.modules);
		let S = {};
		return x.modules.forEach((e) => {
			e({
				params: y,
				swiper: x,
				extendParams: moduleExtendParams(y, S),
				on: x.on.bind(x),
				once: x.once.bind(x),
				off: x.off.bind(x),
				emit: x.emit.bind(x)
			});
		}), x.params = extend$1({}, extend$1({}, defaults, S), extendedDefaults, y), x.originalParams = extend$1({}, x.params), x.passedParams = extend$1({}, y), x.params && x.params.on && Object.keys(x.params.on).forEach((e) => {
			x.on(e, x.params.on[e]);
		}), x.params && x.params.onAny && x.onAny(x.params.onAny), Object.assign(x, {
			enabled: x.params.enabled,
			el: v,
			classNames: [],
			slides: [],
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],
			isHorizontal() {
				return x.params.direction === "horizontal";
			},
			isVertical() {
				return x.params.direction === "vertical";
			},
			activeIndex: 0,
			realIndex: 0,
			isBeginning: !0,
			isEnd: !1,
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: !1,
			cssOverflowAdjustment() {
				return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
			},
			allowSlideNext: x.params.allowSlideNext,
			allowSlidePrev: x.params.allowSlidePrev,
			touchEventsData: {
				isTouched: void 0,
				isMoved: void 0,
				allowTouchCallbacks: void 0,
				touchStartTime: void 0,
				isScrolling: void 0,
				currentTranslate: void 0,
				startTranslate: void 0,
				allowThresholdMove: void 0,
				focusableElements: x.params.focusableElements,
				lastClickTime: 0,
				clickTimeout: void 0,
				velocities: [],
				allowMomentumBounce: void 0,
				startMoving: void 0,
				pointerId: null,
				touchId: null
			},
			allowClick: !0,
			allowTouchMove: x.params.allowTouchMove,
			touches: {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			},
			imagesToLoad: [],
			imagesLoaded: 0
		}), x.emit("_swiper"), x.params.init && x.init(), x;
	}
	getDirectionLabel(e) {
		return this.isHorizontal() ? e : {
			width: "height",
			"margin-top": "margin-left",
			"margin-bottom ": "margin-right",
			"margin-left": "margin-top",
			"margin-right": "margin-bottom",
			"padding-left": "padding-top",
			"padding-right": "padding-bottom",
			marginRight: "marginBottom"
		}[e];
	}
	getSlideIndex(e) {
		let { slidesEl: _, params: v } = this, y = elementIndex(elementChildren(_, `.${v.slideClass}, swiper-slide`)[0]);
		return elementIndex(e) - y;
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(this.slides.find((_) => _.getAttribute("data-swiper-slide-index") * 1 === e));
	}
	getSlideIndexWhenGrid(e) {
		return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e;
	}
	recalcSlides() {
		let e = this, { slidesEl: _, params: v } = e;
		e.slides = elementChildren(_, `.${v.slideClass}, swiper-slide`);
	}
	enable() {
		let e = this;
		e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
	}
	disable() {
		let e = this;
		e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
	}
	setProgress(e, _) {
		let v = this;
		e = Math.min(Math.max(e, 0), 1);
		let y = v.minTranslate(), b = (v.maxTranslate() - y) * e + y;
		v.translateTo(b, _ === void 0 ? 0 : _), v.updateActiveIndex(), v.updateSlidesClasses();
	}
	emitContainerClasses() {
		let e = this;
		if (!e.params._emitClasses || !e.el) return;
		let _ = e.el.className.split(" ").filter((_) => _.indexOf("swiper") === 0 || _.indexOf(e.params.containerModifierClass) === 0);
		e.emit("_containerClasses", _.join(" "));
	}
	getSlideClasses(e) {
		let _ = this;
		return _.destroyed ? "" : e.className.split(" ").filter((e) => e.indexOf("swiper-slide") === 0 || e.indexOf(_.params.slideClass) === 0).join(" ");
	}
	emitSlidesClasses() {
		let e = this;
		if (!e.params._emitClasses || !e.el) return;
		let _ = [];
		e.slides.forEach((v) => {
			let y = e.getSlideClasses(v);
			_.push({
				slideEl: v,
				classNames: y
			}), e.emit("_slideClass", v, y);
		}), e.emit("_slideClasses", _);
	}
	slidesPerViewDynamic(e = "current", _ = !1) {
		let { params: v, slides: y, slidesGrid: b, slidesSizesGrid: x, size: S, activeIndex: C } = this, w = 1;
		if (typeof v.slidesPerView == "number") return v.slidesPerView;
		if (v.centeredSlides) {
			let e = y[C] ? Math.ceil(y[C].swiperSlideSize) : 0, _;
			for (let v = C + 1; v < y.length; v += 1) y[v] && !_ && (e += Math.ceil(y[v].swiperSlideSize), w += 1, e > S && (_ = !0));
			for (let v = C - 1; v >= 0; --v) y[v] && !_ && (e += y[v].swiperSlideSize, w += 1, e > S && (_ = !0));
		} else if (e === "current") for (let e = C + 1; e < y.length; e += 1) (_ ? b[e] + x[e] - b[C] < S : b[e] - b[C] < S) && (w += 1);
		else for (let e = C - 1; e >= 0; --e) b[C] - b[e] < S && (w += 1);
		return w;
	}
	update() {
		let e = this;
		if (!e || e.destroyed) return;
		let { snapGrid: _, params: v } = e;
		v.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll("[loading=\"lazy\"]")].forEach((_) => {
			_.complete && processLazyPreloader(e, _);
		}), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
		function y() {
			let _ = e.rtlTranslate ? e.translate * -1 : e.translate, v = Math.min(Math.max(_, e.maxTranslate()), e.minTranslate());
			e.setTranslate(v), e.updateActiveIndex(), e.updateSlidesClasses();
		}
		let b;
		if (v.freeMode && v.freeMode.enabled && !v.cssMode) y(), v.autoHeight && e.updateAutoHeight();
		else {
			if ((v.slidesPerView === "auto" || v.slidesPerView > 1) && e.isEnd && !v.centeredSlides) {
				let _ = e.virtual && v.virtual.enabled ? e.virtual.slides : e.slides;
				b = e.slideTo(_.length - 1, 0, !1, !0);
			} else b = e.slideTo(e.activeIndex, 0, !1, !0);
			b || y();
		}
		v.watchOverflow && _ !== e.snapGrid && e.checkOverflow(), e.emit("update");
	}
	changeDirection(e, _ = !0) {
		let v = this, y = v.params.direction;
		return e ||= y === "horizontal" ? "vertical" : "horizontal", e === y || e !== "horizontal" && e !== "vertical" ? v : (v.el.classList.remove(`${v.params.containerModifierClass}${y}`), v.el.classList.add(`${v.params.containerModifierClass}${e}`), v.emitContainerClasses(), v.params.direction = e, v.slides.forEach((_) => {
			e === "vertical" ? _.style.width = "" : _.style.height = "";
		}), v.emit("changeDirection"), _ && v.update(), v);
	}
	changeLanguageDirection(e) {
		let _ = this;
		_.rtl && e === "rtl" || !_.rtl && e === "ltr" || (_.rtl = e === "rtl", _.rtlTranslate = _.params.direction === "horizontal" && _.rtl, _.rtl ? (_.el.classList.add(`${_.params.containerModifierClass}rtl`), _.el.dir = "rtl") : (_.el.classList.remove(`${_.params.containerModifierClass}rtl`), _.el.dir = "ltr"), _.update());
	}
	mount(e) {
		let _ = this;
		if (_.mounted) return !0;
		let v = e || _.params.el;
		if (typeof v == "string" && (v = document.querySelector(v)), !v) return !1;
		v.swiper = _, v.parentNode && v.parentNode.host && v.parentNode.host.nodeName === _.params.swiperElementNodeName.toUpperCase() && (_.isElement = !0);
		let y = () => `.${(_.params.wrapperClass || "").trim().split(" ").join(".")}`, b = (() => v && v.shadowRoot && v.shadowRoot.querySelector ? v.shadowRoot.querySelector(y()) : elementChildren(v, y())[0])();
		return !b && _.params.createElements && (b = createElement("div", _.params.wrapperClass), v.append(b), elementChildren(v, `.${_.params.slideClass}`).forEach((e) => {
			b.append(e);
		})), Object.assign(_, {
			el: v,
			wrapperEl: b,
			slidesEl: _.isElement && !v.parentNode.host.slideSlots ? v.parentNode.host : b,
			hostEl: _.isElement ? v.parentNode.host : v,
			mounted: !0,
			rtl: v.dir.toLowerCase() === "rtl" || elementStyle(v, "direction") === "rtl",
			rtlTranslate: _.params.direction === "horizontal" && (v.dir.toLowerCase() === "rtl" || elementStyle(v, "direction") === "rtl"),
			wrongRTL: elementStyle(b, "display") === "-webkit-box"
		}), !0;
	}
	init(e) {
		let _ = this;
		if (_.initialized || _.mount(e) === !1) return _;
		_.emit("beforeInit"), _.params.breakpoints && _.setBreakpoint(), _.addClasses(), _.updateSize(), _.updateSlides(), _.params.watchOverflow && _.checkOverflow(), _.params.grabCursor && _.enabled && _.setGrabCursor(), _.params.loop && _.virtual && _.params.virtual.enabled ? _.slideTo(_.params.initialSlide + _.virtual.slidesBefore, 0, _.params.runCallbacksOnInit, !1, !0) : _.slideTo(_.params.initialSlide, 0, _.params.runCallbacksOnInit, !1, !0), _.params.loop && _.loopCreate(void 0, !0), _.attachEvents();
		let v = [..._.el.querySelectorAll("[loading=\"lazy\"]")];
		return _.isElement && v.push(..._.hostEl.querySelectorAll("[loading=\"lazy\"]")), v.forEach((e) => {
			e.complete ? processLazyPreloader(_, e) : e.addEventListener("load", (e) => {
				processLazyPreloader(_, e.target);
			});
		}), preload(_), _.initialized = !0, preload(_), _.emit("init"), _.emit("afterInit"), _;
	}
	destroy(e = !0, _ = !0) {
		let v = this, { params: y, el: b, wrapperEl: x, slides: S } = v;
		return v.params === void 0 || v.destroyed ? null : (v.emit("beforeDestroy"), v.initialized = !1, v.detachEvents(), y.loop && v.loopDestroy(), _ && (v.removeClasses(), b && typeof b != "string" && b.removeAttribute("style"), x && x.removeAttribute("style"), S && S.length && S.forEach((e) => {
			e.classList.remove(y.slideVisibleClass, y.slideFullyVisibleClass, y.slideActiveClass, y.slideNextClass, y.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
		})), v.emit("destroy"), Object.keys(v.eventsListeners).forEach((e) => {
			v.off(e);
		}), e !== !1 && (v.el && typeof v.el != "string" && (v.el.swiper = null), deleteProps(v)), v.destroyed = !0, null);
	}
	static extendDefaults(e) {
		extend$1(extendedDefaults, e);
	}
	static get extendedDefaults() {
		return extendedDefaults;
	}
	static get defaults() {
		return defaults;
	}
	static installModule(_) {
		e.prototype.__modules__ || (e.prototype.__modules__ = []);
		let v = e.prototype.__modules__;
		typeof _ == "function" && v.indexOf(_) < 0 && v.push(_);
	}
	static use(_) {
		return Array.isArray(_) ? (_.forEach((_) => e.installModule(_)), e) : (e.installModule(_), e);
	}
};
Object.keys(prototypes).forEach((e) => {
	Object.keys(prototypes[e]).forEach((_) => {
		Swiper$1.prototype[_] = prototypes[e][_];
	});
}), Swiper$1.use([Resize, Observer]);
var paramsList = /* @__PURE__ */ "eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control".split(".");
function isObject(e) {
	return typeof e == "object" && !!e && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function extend(e, _) {
	let v = [
		"__proto__",
		"constructor",
		"prototype"
	];
	Object.keys(_).filter((e) => v.indexOf(e) < 0).forEach((v) => {
		e[v] === void 0 ? e[v] = _[v] : isObject(_[v]) && isObject(e[v]) && Object.keys(_[v]).length > 0 ? _[v].__swiper__ ? e[v] = _[v] : extend(e[v], _[v]) : e[v] = _[v];
	});
}
function needsNavigation(e = {}) {
	return e.navigation && e.navigation.nextEl === void 0 && e.navigation.prevEl === void 0;
}
function needsPagination(e = {}) {
	return e.pagination && e.pagination.el === void 0;
}
function needsScrollbar(e = {}) {
	return e.scrollbar && e.scrollbar.el === void 0;
}
function uniqueClasses(e = "") {
	let _ = e.split(" ").map((e) => e.trim()).filter((e) => !!e), v = [];
	return _.forEach((e) => {
		v.indexOf(e) < 0 && v.push(e);
	}), v.join(" ");
}
function wrapperClass(e = "") {
	return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function updateSwiper({ swiper: e, slides: _, passedParams: v, changedParams: y, nextEl: b, prevEl: x, scrollbarEl: S, paginationEl: C }) {
	let w = y.filter((e) => e !== "children" && e !== "direction" && e !== "wrapperClass"), { params: T, pagination: E, navigation: D, scrollbar: O, virtual: k, thumbs: A } = e, j, M, N, P, F, I, L, R;
	y.includes("thumbs") && v.thumbs && v.thumbs.swiper && !v.thumbs.swiper.destroyed && T.thumbs && (!T.thumbs.swiper || T.thumbs.swiper.destroyed) && (j = !0), y.includes("controller") && v.controller && v.controller.control && T.controller && !T.controller.control && (M = !0), y.includes("pagination") && v.pagination && (v.pagination.el || C) && (T.pagination || T.pagination === !1) && E && !E.el && (N = !0), y.includes("scrollbar") && v.scrollbar && (v.scrollbar.el || S) && (T.scrollbar || T.scrollbar === !1) && O && !O.el && (P = !0), y.includes("navigation") && v.navigation && (v.navigation.prevEl || x) && (v.navigation.nextEl || b) && (T.navigation || T.navigation === !1) && D && !D.prevEl && !D.nextEl && (F = !0);
	let z = (_) => {
		e[_] && (e[_].destroy(), _ === "navigation" ? (e.isElement && (e[_].prevEl.remove(), e[_].nextEl.remove()), T[_].prevEl = void 0, T[_].nextEl = void 0, e[_].prevEl = void 0, e[_].nextEl = void 0) : (e.isElement && e[_].el.remove(), T[_].el = void 0, e[_].el = void 0));
	};
	y.includes("loop") && e.isElement && (T.loop && !v.loop ? I = !0 : !T.loop && v.loop ? L = !0 : R = !0), w.forEach((e) => {
		if (isObject(T[e]) && isObject(v[e])) Object.assign(T[e], v[e]), (e === "navigation" || e === "pagination" || e === "scrollbar") && "enabled" in v[e] && !v[e].enabled && z(e);
		else {
			let _ = v[e];
			(_ === !0 || _ === !1) && (e === "navigation" || e === "pagination" || e === "scrollbar") ? _ === !1 && z(e) : T[e] = v[e];
		}
	}), w.includes("controller") && !M && e.controller && e.controller.control && T.controller && T.controller.control && (e.controller.control = T.controller.control), y.includes("children") && _ && k && T.virtual.enabled ? (k.slides = _, k.update(!0)) : y.includes("virtual") && k && T.virtual.enabled && (_ && (k.slides = _), k.update(!0)), y.includes("children") && _ && T.loop && (R = !0), j && A.init() && A.update(!0), M && (e.controller.control = T.controller.control), N && (e.isElement && (!C || typeof C == "string") && (C = document.createElement("div"), C.classList.add("swiper-pagination"), C.part.add("pagination"), e.el.appendChild(C)), C && (T.pagination.el = C), E.init(), E.render(), E.update()), P && (e.isElement && (!S || typeof S == "string") && (S = document.createElement("div"), S.classList.add("swiper-scrollbar"), S.part.add("scrollbar"), e.el.appendChild(S)), S && (T.scrollbar.el = S), O.init(), O.updateSize(), O.setTranslate()), F && (e.isElement && ((!b || typeof b == "string") && (b = document.createElement("div"), b.classList.add("swiper-button-next"), setInnerHTML(b, e.navigation.arrowSvg), b.part.add("button-next"), e.el.appendChild(b)), (!x || typeof x == "string") && (x = document.createElement("div"), x.classList.add("swiper-button-prev"), setInnerHTML(x, e.navigation.arrowSvg), x.part.add("button-prev"), e.el.appendChild(x))), b && (T.navigation.nextEl = b), x && (T.navigation.prevEl = x), D.init(), D.update()), y.includes("allowSlideNext") && (e.allowSlideNext = v.allowSlideNext), y.includes("allowSlidePrev") && (e.allowSlidePrev = v.allowSlidePrev), y.includes("direction") && e.changeDirection(v.direction, !1), (I || R) && e.loopDestroy(), (L || R) && e.loopCreate(), e.update();
}
function getParams(e = {}, _ = !0) {
	let v = { on: {} }, y = {}, b = {};
	extend(v, defaults), v._emitClasses = !0, v.init = !1;
	let x = {}, S = paramsList.map((e) => e.replace(/_/, "")), C = Object.assign({}, e);
	return Object.keys(C).forEach((C) => {
		e[C] !== void 0 && (S.indexOf(C) >= 0 ? isObject(e[C]) ? (v[C] = {}, b[C] = {}, extend(v[C], e[C]), extend(b[C], e[C])) : (v[C] = e[C], b[C] = e[C]) : C.search(/on[A-Z]/) === 0 && typeof e[C] == "function" ? _ ? y[`${C[2].toLowerCase()}${C.substr(3)}`] = e[C] : v.on[`${C[2].toLowerCase()}${C.substr(3)}`] = e[C] : x[C] = e[C]);
	}), [
		"navigation",
		"pagination",
		"scrollbar"
	].forEach((e) => {
		v[e] === !0 && (v[e] = {}), v[e] === !1 && delete v[e];
	}), {
		params: v,
		passedParams: b,
		rest: x,
		events: y
	};
}
function mountSwiper({ el: e, nextEl: _, prevEl: v, paginationEl: y, scrollbarEl: b, swiper: x }, S) {
	needsNavigation(S) && _ && v && (x.params.navigation.nextEl = _, x.originalParams.navigation.nextEl = _, x.params.navigation.prevEl = v, x.originalParams.navigation.prevEl = v), needsPagination(S) && y && (x.params.pagination.el = y, x.originalParams.pagination.el = y), needsScrollbar(S) && b && (x.params.scrollbar.el = b, x.originalParams.scrollbar.el = b), x.init(e);
}
function getChangedParams(e, _, v, y, b) {
	let x = [];
	if (!_) return x;
	let S = (e) => {
		x.indexOf(e) < 0 && x.push(e);
	};
	if (v && y) {
		let e = y.map(b), _ = v.map(b);
		e.join("") !== _.join("") && S("children"), y.length !== v.length && S("children");
	}
	return paramsList.filter((e) => e[0] === "_").map((e) => e.replace(/_/, "")).forEach((v) => {
		if (v in e && v in _) if (isObject(e[v]) && isObject(_[v])) {
			let y = Object.keys(e[v]), b = Object.keys(_[v]);
			y.length === b.length ? (y.forEach((y) => {
				e[v][y] !== _[v][y] && S(v);
			}), b.forEach((y) => {
				e[v][y] !== _[v][y] && S(v);
			})) : S(v);
		} else e[v] !== _[v] && S(v);
	}), x;
}
var updateOnVirtualData = (e) => {
	!e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(e) {
		for (var _ = 1; _ < arguments.length; _++) {
			var v = arguments[_];
			for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (e[y] = v[y]);
		}
		return e;
	}, _extends.apply(this, arguments);
}
function isChildSwiperSlide(e) {
	return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function processChildren(e) {
	let v = [];
	return React.Children.toArray(e).forEach((e) => {
		isChildSwiperSlide(e) ? v.push(e) : e.props && e.props.children && processChildren(e.props.children).forEach((e) => v.push(e));
	}), v;
}
function getChildren(e) {
	let v = [], y = {
		"container-start": [],
		"container-end": [],
		"wrapper-start": [],
		"wrapper-end": []
	};
	return React.Children.toArray(e).forEach((e) => {
		if (isChildSwiperSlide(e)) v.push(e);
		else if (e.props && e.props.slot && y[e.props.slot]) y[e.props.slot].push(e);
		else if (e.props && e.props.children) {
			let _ = processChildren(e.props.children);
			_.length > 0 ? _.forEach((e) => v.push(e)) : y["container-end"].push(e);
		} else y["container-end"].push(e);
	}), {
		slides: v,
		slots: y
	};
}
function renderVirtual(e, v, y) {
	if (!y) return null;
	let b = (e) => {
		let _ = e;
		return e < 0 ? _ = v.length + e : _ >= v.length && (_ -= v.length), _;
	}, x = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${y.offset}px` } : { top: `${y.offset}px` }, { from: S, to: C } = y, w = e.params.loop ? -v.length : 0, T = e.params.loop ? v.length * 2 : v.length, E = [];
	for (let e = w; e < T; e += 1) e >= S && e <= C && E.push(v[b(e)]);
	return E.map((v, y) => /* @__PURE__ */ React.cloneElement(v, {
		swiper: e,
		style: x,
		key: v.props.virtualIndex || v.key || `slide-${y}`
	}));
}
function useIsomorphicLayoutEffect(e, _) {
	return typeof window > "u" ? useEffect(e, _) : useLayoutEffect(e, _);
}
var SwiperSlideContext = /* @__PURE__ */ createContext(null), SwiperContext = /* @__PURE__ */ createContext(null), Swiper = /* @__PURE__ */ forwardRef(({ className: e, tag: v = "div", wrapperTag: y = "div", children: b, onSwiper: S, ...T } = {}, E) => {
	let D = !1, [O, k] = useState("swiper"), [A, j] = useState(null), [M, N] = useState(!1), P = useRef(!1), F = useRef(null), I = useRef(null), L = useRef(null), R = useRef(null), z = useRef(null), B = useRef(null), V = useRef(null), H = useRef(null), { params: U, passedParams: W, rest: G, events: K } = getParams(T), { slides: q, slots: J } = getChildren(b), Y = () => {
		N(!M);
	};
	Object.assign(U.on, { _containerClasses(e, _) {
		k(_);
	} });
	let X = () => {
		Object.assign(U.on, K), D = !0;
		let e = { ...U };
		if (delete e.wrapperClass, I.current = new Swiper$1(e), I.current.virtual && I.current.params.virtual.enabled) {
			I.current.virtual.slides = q;
			let e = {
				cache: !1,
				slides: q,
				renderExternal: j,
				renderExternalUpdate: !1
			};
			extend(I.current.params.virtual, e), extend(I.current.originalParams.virtual, e);
		}
	};
	F.current || X(), I.current && I.current.on("_beforeBreakpoint", Y);
	let Z = () => {
		D || !K || !I.current || Object.keys(K).forEach((e) => {
			I.current.on(e, K[e]);
		});
	}, Q = () => {
		!K || !I.current || Object.keys(K).forEach((e) => {
			I.current.off(e, K[e]);
		});
	};
	useEffect(() => () => {
		I.current && I.current.off("_beforeBreakpoint", Y);
	}), useEffect(() => {
		!P.current && I.current && (I.current.emitSlidesClasses(), P.current = !0);
	}), useIsomorphicLayoutEffect(() => {
		if (E && (E.current = F.current), F.current) return I.current.destroyed && X(), mountSwiper({
			el: F.current,
			nextEl: z.current,
			prevEl: B.current,
			paginationEl: V.current,
			scrollbarEl: H.current,
			swiper: I.current
		}, U), S && !I.current.destroyed && S(I.current), () => {
			I.current && !I.current.destroyed && I.current.destroy(!0, !1);
		};
	}, []), useIsomorphicLayoutEffect(() => {
		Z();
		let e = getChangedParams(W, L.current, q, R.current, (e) => e.key);
		return L.current = W, R.current = q, e.length && I.current && !I.current.destroyed && updateSwiper({
			swiper: I.current,
			slides: q,
			passedParams: W,
			changedParams: e,
			nextEl: z.current,
			prevEl: B.current,
			scrollbarEl: H.current,
			paginationEl: V.current
		}), () => {
			Q();
		};
	}), useIsomorphicLayoutEffect(() => {
		updateOnVirtualData(I.current);
	}, [A]);
	function $() {
		return U.virtual ? renderVirtual(I.current, q, A) : q.map((e, v) => /* @__PURE__ */ React.cloneElement(e, {
			swiper: I.current,
			swiperSlideIndex: v
		}));
	}
	return /* @__PURE__ */ React.createElement(v, _extends({
		ref: F,
		className: uniqueClasses(`${O}${e ? ` ${e}` : ""}`)
	}, G), /* @__PURE__ */ React.createElement(SwiperContext.Provider, { value: I.current }, J["container-start"], /* @__PURE__ */ React.createElement(y, { className: wrapperClass(U.wrapperClass) }, J["wrapper-start"], $(), J["wrapper-end"]), needsNavigation(U) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
		ref: B,
		className: "swiper-button-prev"
	}), /* @__PURE__ */ React.createElement("div", {
		ref: z,
		className: "swiper-button-next"
	})), needsScrollbar(U) && /* @__PURE__ */ React.createElement("div", {
		ref: H,
		className: "swiper-scrollbar"
	}), needsPagination(U) && /* @__PURE__ */ React.createElement("div", {
		ref: V,
		className: "swiper-pagination"
	}), J["container-end"]));
});
Swiper.displayName = "Swiper";
var SwiperSlide = /* @__PURE__ */ forwardRef(({ tag: e = "div", children: v, className: y = "", swiper: b, zoom: x, lazy: S, virtualIndex: T, swiperSlideIndex: E, ...D } = {}, O) => {
	let k = useRef(null), [A, j] = useState("swiper-slide"), [M, N] = useState(!1);
	function P(e, _, v) {
		_ === k.current && j(v);
	}
	useIsomorphicLayoutEffect(() => {
		if (E !== void 0 && (k.current.swiperSlideIndex = E), O && (O.current = k.current), !(!k.current || !b)) {
			if (b.destroyed) {
				A !== "swiper-slide" && j("swiper-slide");
				return;
			}
			return b.on("_slideClass", P), () => {
				b && b.off("_slideClass", P);
			};
		}
	}), useIsomorphicLayoutEffect(() => {
		b && k.current && !b.destroyed && j(b.getSlideClasses(k.current));
	}, [b]);
	let F = {
		isActive: A.indexOf("swiper-slide-active") >= 0,
		isVisible: A.indexOf("swiper-slide-visible") >= 0,
		isPrev: A.indexOf("swiper-slide-prev") >= 0,
		isNext: A.indexOf("swiper-slide-next") >= 0
	}, I = () => typeof v == "function" ? v(F) : v, L = () => {
		N(!0);
	};
	return /* @__PURE__ */ React.createElement(e, _extends({
		ref: k,
		className: uniqueClasses(`${A}${y ? ` ${y}` : ""}`),
		"data-swiper-slide-index": T,
		onLoad: L
	}, D), x && /* @__PURE__ */ React.createElement(SwiperSlideContext.Provider, { value: F }, /* @__PURE__ */ React.createElement("div", {
		className: "swiper-zoom-container",
		"data-swiper-zoom": typeof x == "number" ? x : void 0
	}, I(), S && !M && /* @__PURE__ */ React.createElement("div", { className: "swiper-lazy-preloader" }))), !x && /* @__PURE__ */ React.createElement(SwiperSlideContext.Provider, { value: F }, I(), S && !M && /* @__PURE__ */ React.createElement("div", { className: "swiper-lazy-preloader" })));
});
SwiperSlide.displayName = "SwiperSlide";
function ItemSlider({ items: e, variant: _ = "default", language: v = "en" }) {
	let [y, b] = useState("desktop"), S = `viewport-${y}`;
	switch (useEffect(() => {
		let e = document?.getElementById("puck-canvas-root"), _ = null, v = () => {
			let _ = e ? e.getBoundingClientRect().width : window.innerWidth;
			b(_ > 1024 ? "desktop" : _ > 768 ? "tablet" : "mobile");
		};
		return e ? (_ = new ResizeObserver(v), _.observe(e)) : (v(), window.addEventListener("resize", v)), () => {
			_ && e ? (_.unobserve(e), _.disconnect()) : window.removeEventListener("resize", v);
		};
	}, []), _) {
		case "voodvale": return /* @__PURE__ */ jsx(VoodvaleItemSlider, {
			items: e,
			language: v,
			viewPort: y
		}, S);
		case "skyscrapper": return /* @__PURE__ */ jsx(SkyscrapperItemSlider, {
			items: e,
			language: v,
			viewPort: y
		}, S);
		default: return /* @__PURE__ */ jsx(DefaultItemSlider, {
			items: e,
			language: v,
			viewPort: y
		}, S);
	}
}
var DefaultItemSlider = ({ items: e, language: _, viewPort: v }) => {
	let y = _ === "ar", b = v === "desktop" ? {
		spaceBetween: 60,
		slidesPerView: 4,
		slidesOffsetAfter: 60
	} : {
		spaceBetween: 15,
		slidesPerView: 1.3,
		slidesOffsetAfter: 15
	};
	return /* @__PURE__ */ jsx(Swiper, {
		dir: y ? "rtl" : "ltr",
		spaceBetween: b.spaceBetween,
		slidesPerView: b.slidesPerView,
		slidesOffsetAfter: b.slidesOffsetAfter,
		preventClicks: !1,
		preventClicksPropagation: !1,
		children: e.map((e, _) => /* @__PURE__ */ jsx(SwiperSlide, { children: e }, `swiperSlider${_}`))
	}, y ? "rtl" : "ltr");
}, VoodvaleItemSlider = ({ items: e, language: _, viewPort: v }) => {
	let y = _ === "ar", b = v === "desktop" ? {
		spaceBetween: 30,
		slidesPerView: 3,
		slidesOffsetAfter: 0
	} : {
		spaceBetween: 30,
		slidesPerView: 1.2,
		slidesOffsetAfter: 30
	};
	return /* @__PURE__ */ jsx(Swiper, {
		dir: y ? "rtl" : "ltr",
		spaceBetween: b.spaceBetween,
		slidesPerView: b.slidesPerView,
		slidesOffsetAfter: b.slidesOffsetAfter,
		preventClicks: !1,
		preventClicksPropagation: !1,
		children: e.map((e, _) => /* @__PURE__ */ jsx(SwiperSlide, { children: e }, `swiperSlider${_}`))
	});
}, SkyscrapperItemSlider = ({ items: e, language: _, viewPort: v }) => {
	let y = _ === "ar", b = v === "desktop" ? {
		spaceBetween: 60,
		slidesPerView: 2.2,
		slidesOffsetAfter: 60
	} : {
		spaceBetween: 13,
		slidesPerView: 1.2,
		slidesOffsetAfter: 90
	};
	return /* @__PURE__ */ jsx(Swiper, {
		dir: y ? "rtl" : "ltr",
		spaceBetween: b.spaceBetween,
		slidesPerView: b.slidesPerView,
		slidesOffsetAfter: b.slidesOffsetAfter,
		preventClicks: !1,
		preventClicksPropagation: !1,
		children: e.map((e, _) => /* @__PURE__ */ jsx(SwiperSlide, { children: e }, `swiperSlider${_}`))
	}, y ? "rtl" : "ltr");
};
const PlotThumbCardRoot = ({ children: e }) => /* @__PURE__ */ jsx("div", {
	className: "flex flex-grow flex-col space-y-2.5",
	children: e
}), PlotThumbCardImage = ({ imageUrl: e }) => e ? /* @__PURE__ */ jsx("img", {
	src: e,
	alt: "Plot Image",
	className: "mobile:w-full w-full h-[156px] object-cover"
}) : /* @__PURE__ */ jsx("div", {
	className: "mobile:w-full w-full h-[156px] bg-gray-300 rounded flex items-center justify-center",
	children: /* @__PURE__ */ jsx("span", {
		className: "text-gray-500",
		children: "Image"
	})
}), PlotThumbCardBody = ({ plot: e }) => /* @__PURE__ */ jsxs("div", {
	className: "flex justify-between items-end",
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex space-x-2.5 rtl:space-x-reverse items-end",
		children: [/* @__PURE__ */ jsx("div", {
			style: { lineHeight: "1rem" },
			children: e.plotName || `Plot ${e.plotNumber || e.id}`
		}), e.price && /* @__PURE__ */ jsxs("div", {
			className: "text-xs opacity-50",
			children: ["$", e.price.toLocaleString()]
		})]
	}), e.plotStatus && /* @__PURE__ */ jsx("div", {
		className: "text-xs px-2 py-1 bg-gray-200 rounded",
		children: e.plotStatus
	})]
}), VoodvalePlotThumbCardRoot = ({ children: e, plot: _ }) => /* @__PURE__ */ jsxs("div", {
	className: "flex flex-grow flex-col rounded-[12px] overflow-hidden relative border border-[#E6E6E6]",
	children: [e, _.plotStatus && /* @__PURE__ */ jsx("div", {
		className: "absolute top-[1.25rem] left-[1.25rem]",
		children: /* @__PURE__ */ jsx("div", {
			className: "px-[1.25rem] py-[0.625rem] rounded-[7px] text-[0.75rem] leading-[normal] font-medium text-[#FFF] min-w-0 min-h-0 bg-gray-600",
			children: _.plotStatus
		})
	})]
}), VoodvalePlotThumbCardImage = ({ imageUrl: e }) => e ? /* @__PURE__ */ jsx("img", {
	src: e,
	alt: "Plot Image",
	className: "w-full h-[240px] object-cover"
}) : /* @__PURE__ */ jsx("div", {
	className: "w-full h-[240px] object-cover bg-gray-300 rounded flex items-center justify-center",
	children: /* @__PURE__ */ jsx("span", {
		className: "text-gray-500",
		children: "Image "
	})
}), VoodvalePlotThumbCardBody = ({ plot: e }) => /* @__PURE__ */ jsxs("div", {
	className: "flex justify-between items-center bg-white px-[1.25rem] pt-[1.4018rem] pb-[1.625rem]",
	children: [/* @__PURE__ */ jsx("div", {
		className: "text-[1.125rem] leading-[100%] text-[#181A20] font-medium",
		children: e.plotName || `Plot ${e.plotNumber || e.id}`
	}), e.price && /* @__PURE__ */ jsxs("div", {
		className: "text-[1.125rem] leading-[158.333%] text-[#A87D6F] font-medium",
		children: ["$", e.price.toLocaleString()]
	})]
}), SkyscrapperPlotThumbCardRoot = ({ children: e }) => /* @__PURE__ */ jsx("div", {
	className: "flex flex-grow flex-col space-y-[1.5rem]",
	children: e
}), SkyscrapperPlotThumbCardImage = ({ plot: e }) => {
	let _ = !e.imageUrl;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-[24px] overflow-hidden relative",
		children: [/* @__PURE__ */ jsx("div", {
			className: "h-[19.375rem] w-full",
			style: { background: _ ? "black" : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${e.imageUrl ?? ""}) lightgray -76.39px 0.265px / 114.913% 99.858% no-repeat` },
			children: _ && /* @__PURE__ */ jsx("div", {
				className: "w-full h-full flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-gray-400",
					children: "Loading..."
				})
			})
		}), e.plotStatus && /* @__PURE__ */ jsx(SkyscrapperBadge, {
			plot: e,
			className: "absolute top-[1.5rem] left-[1.5rem]"
		})]
	});
}, SkyscrapperPlotThumbCardBody = ({ plot: e }) => /* @__PURE__ */ jsx("div", {
	className: "flex justify-between items-end",
	children: /* @__PURE__ */ jsxs("div", {
		className: "flex justify-between w-full items-center text-[1.125rem]",
		children: [/* @__PURE__ */ jsx("div", {
			style: { lineHeight: "1rem" },
			children: e.plotName || `Plot ${e.plotNumber || e.id}`
		}), e.price && /* @__PURE__ */ jsxs("div", {
			className: "text-[#FABA6C] text-[1.375rem]",
			children: ["$", e.price.toLocaleString()]
		})]
	})
});
var SkyscrapperBadge = ({ plot: _, className: v }) => /* @__PURE__ */ jsxs("div", {
	className: cn("border flex items-center gap-[0.5rem] border-white/17 rounded-[11px] px-[0.75rem] py-[0.62rem] font-general-sans text-[0.625rem] text-white tracking-[0.01875rem]", v),
	style: { backgroundColor: "#00000066" },
	children: [/* @__PURE__ */ jsx("div", { className: "w-[5px] h-[5px] rounded-full bg-white" }), /* @__PURE__ */ jsx("div", { children: _.plotStatus || "Available" })]
});
function PlotThumbCard({ plot: e, variant: _ = "default" }) {
	switch (_) {
		case "voodvale": return /* @__PURE__ */ jsx(VoodvalePlotThumbCard, { plot: e });
		case "skyscrapper": return /* @__PURE__ */ jsx(SkyscrapperPlotThumbCard, { plot: e });
		default: return /* @__PURE__ */ jsx(DefaultPlotThumbCard, { plot: e });
	}
}
var DefaultPlotThumbCard = ({ plot: e }) => /* @__PURE__ */ jsxs(PlotThumbCardRoot, {
	plot: e,
	children: [/* @__PURE__ */ jsx(PlotThumbCardImage, { imageUrl: e.imageUrl }), /* @__PURE__ */ jsx(PlotThumbCardBody, { plot: e })]
});
const SkyscrapperPlotThumbCard = ({ plot: e }) => /* @__PURE__ */ jsxs(SkyscrapperPlotThumbCardRoot, {
	plot: e,
	children: [/* @__PURE__ */ jsx(SkyscrapperPlotThumbCardImage, { plot: e }), /* @__PURE__ */ jsx(SkyscrapperPlotThumbCardBody, { plot: e })]
});
function VoodvalePlotThumbCard({ plot: e }) {
	return /* @__PURE__ */ jsxs(VoodvalePlotThumbCardRoot, {
		plot: e,
		children: [/* @__PURE__ */ jsx(VoodvalePlotThumbCardImage, { imageUrl: e.imageUrl }), /* @__PURE__ */ jsx(VoodvalePlotThumbCardBody, { plot: e })]
	});
}
function PlotsShowcase({ plots: e, title: _ = "Available Units", showAllLink: v, language: y = "en" }) {
	let b = e.map((e, _) => /* @__PURE__ */ jsx("a", {
		href: e.href,
		children: /* @__PURE__ */ jsx(PlotThumbCard, {
			plot: e,
			variant: "default"
		}, `showcase_card${_}`)
	}, `detail_link${_}`));
	return /* @__PURE__ */ jsx("div", {
		className: "w-full mx-auto flex flex-col",
		children: /* @__PURE__ */ jsx("div", {
			className: "page-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-5 px-5 lg:px-7.5 py-5 lg:py-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-end",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-x-2.5 rtl:space-x-reverse flex items-end",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-2xl",
							suppressHydrationWarning: !0,
							children: _
						}), /* @__PURE__ */ jsx("h6", {
							className: "opacity-50 text-xs",
							suppressHydrationWarning: !0,
							children: `${e.length} units`
						})]
					}), v && /* @__PURE__ */ jsx("a", {
						href: v,
						children: /* @__PURE__ */ jsx("div", {
							suppressHydrationWarning: !0,
							children: "Show All"
						})
					})]
				}), /* @__PURE__ */ jsx(ItemSlider, {
					items: b.slice(0, 5),
					variant: "default",
					language: y
				})]
			})
		})
	});
}
function PlotsShowcaseWrapper(e) {
	let { plots: _ = [], title: v = "Available Units", showAllLink: y = "/availability", locale: b = "en", language: x = "en" } = e;
	return /* @__PURE__ */ jsx(PlotsShowcase, {
		plots: _,
		title: v,
		showAllLink: y,
		locale: b,
		language: x
	});
}
var DEFAULT_BACKGROUND$1 = "/assets/skyscrapper/background.webp";
function SkyscrapperHomeFirstSection({ projectName: e, heading: _, subheadingLine1: v, subheadingLine2: y, description: b, buttonLabel: x, buttonHref: S, backgroundData: C }) {
	let w = C?.backgroundUrl ? {
		isVideo: C.isVideo,
		backgroundUrl: C.backgroundUrl
	} : {
		isVideo: !1,
		backgroundUrl: DEFAULT_BACKGROUND$1
	};
	return /* @__PURE__ */ jsx("div", {
		className: "panel absolute font-instrument-serif left-0 top-0 will-change-transform w-full h-full z-30",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "pt-17.5 pb-[2rem] flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: w,
					projectName: e
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute z-20 top-0 left-0",
					style: {
						opacity: .1,
						backgroundColor: "black",
						height: "100vh",
						width: "100vw"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "page-container z-30 text-white",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "skyscrapper-text-gradient w-[58.3125rem] mobile:w-[19.875rem] text-[10.44rem] mobile:text-[5rem] ml-[11.86rem] mobile:ml-[0] mt-[8.5rem] text-white leading-[1.1em] tracking-[-0.20881rem]",
						children: _
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-[1.56rem] mobile:mt-[5.19rem] ml-[58.56rem] mobile:ml-0",
						children: [
							/* @__PURE__ */ jsxs("h3", {
								className: "mb-[2.75rem] mobile:mb-[2.87rem] max-w-[34rem] mobile:max-w-[23.125rem] text-[3.40rem] text-[#CED7D8] leading-[3.5rem] tracking-[-0.06em]",
								children: [
									v,
									/* @__PURE__ */ jsx("br", {}),
									y
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mb-[2rem] text-[#CED7D8] max-w-[21.5625rem] font-general-sans",
								children: b
							}),
							/* @__PURE__ */ jsx(GradientBorderButton, {
								href: S,
								children: x
							})
						]
					})]
				})
			]
		})
	});
}
function GradientBorderButton({ children: e, href: _ }) {
	return /* @__PURE__ */ jsx("a", {
		href: _,
		children: /* @__PURE__ */ jsx("div", {
			className: "gradient-border-button",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-6 py-3 h-[49px] flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-white font-general-sans text-[0.875rem] font-medium",
					children: e
				})
			})
		})
	});
}
function SkyscrapperHomeFirstSectionWrapper(e) {
	let { projectName: _ = "Skyscrapper", heading: v = "A New Peak.", subheadingLine1: y = "in the City", subheadingLine2: b = "of Impossibles", description: x = "Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.", buttonLabel: S = "Explore Listing", buttonHref: C = "/availability", backgroundUrl: w = "", mediaType: E = "image", scrollIndicatorText: D = "Scroll down", scrollIndicatorOpacity: O = 1 } = e;
	return /* @__PURE__ */ jsx(SkyscrapperHomeFirstSection, {
		projectName: _,
		heading: v,
		subheadingLine1: y,
		subheadingLine2: b,
		description: x,
		buttonLabel: S,
		buttonHref: C,
		backgroundData: {
			isVideo: E === "video",
			backgroundUrl: w
		},
		scrollIndicatorText: D,
		scrollIndicatorOpacity: O
	});
}
var DEFAULT_IMAGE_1$1 = "/assets/skyscrapper/skyscrapper_content_1.webp", DEFAULT_IMAGE_2$1 = "/assets/skyscrapper/skyscrapper_content_2.webp", DEFAULT_IMAGE_3$1 = "/assets/skyscrapper/skyscrapper_content_3.webp";
function SkyscrapperHomesSecondSection({ introText: e, image1: _, image2: v, image3: y, gridTitle: b, gridLead: x, gridItems: S }) {
	return /* @__PURE__ */ jsx("div", {
		id: "second-section",
		className: "bg-black text-[#CED7D8] font-instrument-serif second-section left-0 top-0 w-full min-h-[100vh] flex flex-col z-10 pt-[12rem] mobile:pt-[8.5rem]",
		children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "w-full mx-auto flex flex-col px-[5rem] mobile:px-5 max-w-[1440px]",
			children: [/* @__PURE__ */ jsx("p", {
				className: "mx-auto w-[57.48rem] mobile:w-full text-center text-[3.75rem] mobile:text-[2.25rem] leading-[108%] text-[#CED7D8]",
				children: e
			}), /* @__PURE__ */ jsxs("div", {
				className: "mb-[5rem] mobile:mb-[0rem] relative h-[46.875rem] mobile:h-[55vh]",
				children: [
					/* @__PURE__ */ jsx(Image, {
						width: 233,
						height: 288,
						src: _ || DEFAULT_IMAGE_1$1,
						fallbackSrc: DEFAULT_IMAGE_1$1,
						alt: "content-1",
						className: "absolute right-1/2 -translate-x-[10%] top-1/2 -translate-y-[80%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
					}),
					/* @__PURE__ */ jsx(Image, {
						width: 233,
						height: 288,
						src: v || DEFAULT_IMAGE_2$1,
						fallbackSrc: DEFAULT_IMAGE_2$1,
						alt: "content-2",
						className: "absolute right-1/2 translate-x-[105%] top-1/2 -translate-y-[115%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
					}),
					/* @__PURE__ */ jsx(Image, {
						width: 233,
						height: 288,
						src: y || DEFAULT_IMAGE_3$1,
						fallbackSrc: DEFAULT_IMAGE_3$1,
						alt: "content-3",
						className: "absolute right-1/2 translate-x-[75%] top-1/2 -translate-y-[2%] w-[19.57rem] h-[24.20rem] mobile:w-[13.375rem] mobile:h-[16.625rem] object-cover skyscrapper-image-mask lg"
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "pt-[10rem] mobile:pt-[0rem] pb-[12rem] mobile:pb-[9rem] pl-[11.57rem] pr-[22.27rem] mobile:px-[1.3rem] mx-auto max-w-[1440px]",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-[3.75rem] mobile:text-[2.25rem] mb-[3rem] mobile:mb-[2.25rem]",
					children: b
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-[10.69rem] mobile:mb-[4.19rem] font-general-sans text-[1.125rem] mobile:text-[1rem]",
					children: x
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 mobile:grid-cols-1 gap-[15.20rem] mobile:gap-[3.75rem]",
					children: S.map((e, _) => /* @__PURE__ */ jsx(GridCell$1, { ...e }, _))
				})
			]
		})] })
	});
}
var GridCell$1 = ({ description: _, increase: v, className: y }) => /* @__PURE__ */ jsxs("div", {
	className: cn("", y),
	children: [
		/* @__PURE__ */ jsx("div", {
			className: "skyscrapper-text-gradient leading-[100%] tracking-[-0.1rem] text-[5rem] mb-[1.25rem]",
			children: v
		}),
		/* @__PURE__ */ jsx("div", {
			className: "font-general-sans text-[1rem] leading-[162%] h-[7.75rem]",
			children: _
		}),
		/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-[#FABA6C4D] w-full" })
	]
});
function SkyscrapperHomesSecondSectionWrapper(e) {
	let { introText: _ = "A new icon rises on Dubai’s horizon — a sculpted tower where architecture, luxury, and imagination collide.", image1: v = "", image2: y = "", image3: b = "", gridTitle: x = "In the Numbers", gridLead: S = "Our numbers reflect steady growth, strong engagement, and increasing trust from our users. Here’s a quick look at the key metrics driving our progress.", gridItems: C = [
		{
			increase: "50+",
			description: "Families who've found their perfect home in communities like Woodvale Quarters."
		},
		{
			increase: "100%",
			description: "Built on lasting trust and attention to detail in every development."
		},
		{
			increase: "100%",
			description: "Resident satisfaction through quality, care, and commitment."
		},
		{
			increase: "15+",
			description: "Years of expertise shaping elegant, well-crafted homes."
		}
	] } = e;
	return /* @__PURE__ */ jsx(SkyscrapperHomesSecondSection, {
		introText: _,
		image1: v,
		image2: y,
		image3: b,
		gridTitle: x,
		gridLead: S,
		gridItems: C
	});
}
function SkyscrapperShowcaseCard({ plot: e, index: _, variant: v }) {
	switch (v) {
		case "first": return /* @__PURE__ */ jsx(FirstShowcaseCard, {
			plot: e,
			index: _
		});
		case "default": return /* @__PURE__ */ jsx(DefaultShowcaseCard, {
			plot: e,
			index: _
		});
	}
}
var FirstShowcaseCard = ({ plot: e, index: _ }) => {
	let v = !e.imageUrl;
	return /* @__PURE__ */ jsxs("div", {
		className: "group rounded-[24px] bg-[#1A1A1A] w-full h-[29.9375rem] mobile:h-[15.18rem] pl-[1.75rem] mobile:pl-[0.89rem]\n        pr-[1.82rem] mobile:pr-[0.92rem] pt-[2rem] mobile:pt-[1.17rem] pb-[1.62rem] mobile:pb-[0.82rem] relative",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-[1.13rem] right-[0.69rem] invisible group-hover:visible transition-all duration-300",
				children: /* @__PURE__ */ jsx(Arrow$1, {})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-[2.2rem] mobile:mb-[0.99rem] pl-[1.22rem] mobile:pl-[0.62rem] flex gap-[1.75rem] items-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "text-[#CED7D8] text-[1.5rem] tracking-[0.045rem] mobile:text-[0.875rem] mobile:tracking-[0.02rem]",
					children: (_ + 1).toString().padStart(2, "0")
				})
			}),
			/* @__PURE__ */ jsx(Name, {
				name: e.plotName ?? "",
				className: "pl-[1.22rem] mobile:pl-[0.62rem] mb-[2.49rem] mobile:mb-[1.11rem]"
			}),
			v ? /* @__PURE__ */ jsx(LoaderComp, { className: "w-full h-[15.437rem]" }) : /* @__PURE__ */ jsx("div", {
				className: "object-cover object-center w-full h-[15.437rem] mobile:h-[7.83rem] rounded-[11px] bg-gray-700 flex items-center justify-center",
				style: {
					backgroundImage: e.imageUrl ? `url(${e.imageUrl})` : void 0,
					backgroundSize: "cover",
					backgroundPosition: "center"
				},
				children: !e.imageUrl && /* @__PURE__ */ jsx("span", {
					className: "text-gray-400",
					children: "No Image"
				})
			})
		]
	});
}, DefaultShowcaseCard = ({ plot: e, index: _ }) => /* @__PURE__ */ jsxs("div", {
	className: "group rounded-[24px] flex flex-col justify-between h-[29.9375rem] mobile:h-[15.18rem] relative",
	children: [
		/* @__PURE__ */ jsx("div", {
			style: { background: e.imageUrl ? `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${e.imageUrl ?? ""}) lightgray -76.39px 0.265px / 114.913% 99.858% no-repeat` : "black" },
			className: "absolute rounded-[24px] overflow-hidden top-0 left-0 w-full h-full !bg-cover !bg-center z-[4]"
		}),
		/* @__PURE__ */ jsx("div", {
			className: "absolute z-[6] top-[1.13rem] right-[0.69rem] invisible group-hover:visible transition-all duration-300",
			children: /* @__PURE__ */ jsx(Arrow$1, {})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "pl-[2.02rem] mobile:pl-[1.02rem] pr-[1.82rem] mobile:pr-[0.92rem] pt-[2rem] mobile:pt-[1.17rem] pb-[1.62rem]\n          mobile:pb-[0.82rem] flex gap-[1.75rem] items-center z-[6]",
			children: /* @__PURE__ */ jsx("div", {
				className: "text-[#CED7D8] text-[1.5rem] tracking-[0.045rem] mobile:text-[0.875rem] mobile:tracking-[0.02rem]",
				children: (_ + 1).toString().padStart(2, "0")
			})
		}),
		/* @__PURE__ */ jsx(Name, {
			name: e.plotName ?? "",
			className: "pl-[2.02rem] mobile:pl-[1.02rem] mb-[2.49rem] mobile:mb-[1.11rem] z-[6]"
		})
	]
}), LoaderComp = ({ className: _ }) => /* @__PURE__ */ jsx("div", {
	className: cn("select-none w-full min-h-[11.25rem] max-w-full h-full flex grow", _),
	children: /* @__PURE__ */ jsx("div", {
		className: "w-full max-w-full grow flex animate-pulse items-center justify-center bg-gray-300 rounded dark:bg-gray-700",
		children: /* @__PURE__ */ jsx("svg", {
			className: "w-12 h-12 text-gray-200",
			xmlns: "http://www.w3.org/2000/svg",
			"aria-hidden": "true",
			fill: "currentColor",
			viewBox: "0 0 640 512",
			children: /* @__PURE__ */ jsx("path", { d: "M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" })
		})
	})
}), Name = ({ name: _, className: v }) => /* @__PURE__ */ jsx("div", {
	className: cn("text-[2.5rem] mobile:text-[1.25rem] mobile:tracking-[-0.0125rem] leading-[75%] tracking-[-0.025rem] text-[#CED7D8]", v),
	children: _
}), Arrow$1 = () => /* @__PURE__ */ jsxs("svg", {
	width: "72",
	height: "72",
	viewBox: "0 0 72 72",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ jsx("path", {
		d: "M21 51L51 21",
		stroke: "#EFB76F",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ jsx("path", {
		d: "M21 21H51V51",
		stroke: "#EFB76F",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
});
function SkyscrapperPlotsShowcase({ plots: e, title: _ = "Available Units", subtitle: v = "Five distinct residence types, tailored to your needs.", language: y = "en" }) {
	let b = e.map((e, _) => /* @__PURE__ */ jsx("a", {
		href: e.href,
		children: /* @__PURE__ */ jsx(SkyscrapperShowcaseCard, {
			plot: e,
			index: _,
			variant: _ === 0 ? "first" : "default"
		})
	}, `detail_link${_}`));
	return /* @__PURE__ */ jsx("div", {
		className: "relative w-full mx-auto flex flex-col bg-black",
		children: /* @__PURE__ */ jsx("div", {
			className: "relative z-[1] page-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "pt-[6.8125rem] mobile:pt-[4.1875rem] pb-[7.5rem] mobile:pb-[9rem] mobile:pl-[1.3rem] mobile:pr-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-[3.875rem] mobile:mb-[2rem] flex justify-between items-center",
					children: /* @__PURE__ */ jsx("div", {
						suppressHydrationWarning: !0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "pl-[11.57rem] mobile:pl-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mb-[2.87rem] mobile:mb-[2.25rem] text-[2.75rem] mobile:text-[2.25rem] leading-[100%] text-[#FFF]\n                    font-medium",
								children: _
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[1.25rem] mobile:text-[1rem] text-white",
								children: v
							})]
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "pl-[3.87rem] mobile:pl-0",
					children: /* @__PURE__ */ jsx(ItemSlider, {
						items: b.slice(0, 5),
						variant: "skyscrapper",
						language: y
					})
				})]
			})
		})
	});
}
function SkyscrapperPlotsShowcaseWrapper(e) {
	let { plots: _ = [], title: v = "Available Units", subtitle: y = "Five distinct residence types, tailored to your needs.", locale: b = "en", language: x = "en" } = e;
	return /* @__PURE__ */ jsx(SkyscrapperPlotsShowcase, {
		plots: _,
		title: v,
		subtitle: y,
		locale: b,
		language: x
	});
}
function HeaderSection({ title: e, description: _, animationEase: v = "easeOut" }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .6,
			ease: v
		},
		className: "mt-[3rem] mb-[5rem] mobile:mb-[3.125rem] flex mobile:flex-col mobile:gap-[1.875rem] justify-between",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-[34.5rem] mobile:w-[19.6875rem] text-[3rem] mobile:text-[2.25rem] leading-[122%] tracking-[-0.01em] text-[#12161D] font-medium capitalize",
			children: e
		}), /* @__PURE__ */ jsx("div", {
			className: "w-[39.125rem] mobile:w-full text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal",
			children: _
		})]
	});
}
function HeaderSectionWrapper(e) {
	let { title: _ = "", description: v = "", animationEase: y = "easeOut" } = e;
	return /* @__PURE__ */ jsx(HeaderSection, {
		title: _,
		description: v,
		animationEase: y
	});
}
var GridCell = ({ title: _, description: v, increase: y, className: b }) => /* @__PURE__ */ jsxs("div", {
	className: cn("flex flex-col bg-white", b),
	children: [/* @__PURE__ */ jsx("div", {
		className: "pt-[1.6875rem] pl-[1.9375rem] mobile:pl-0 mobile:pb-[0.875rem] text-[1.125rem] leading-[144.444%] text-[#4A4A4A] font-normal",
		children: _
	}), /* @__PURE__ */ jsxs("div", {
		className: "pl-[15.875rem] pb-[1.9375rem] mobile:pl-0 ",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-[0.75rem] text-[2.25rem] leading-[133.333%] text-[#C6A195] font-semibold",
			children: y
		}), /* @__PURE__ */ jsx("div", {
			className: "text-[1.125rem] leading-[144.444%] text-[#61656E] font-medium mobile:w-full",
			children: v
		})]
	})]
});
function GridSection({ gridData: e }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 mobile:grid-cols-1",
		children: e.map((e, _) => /* @__PURE__ */ jsx(GridCell, {
			...e,
			className: `hover:bg-[#C7A093]/10 transition-all duration-300 border-t border-[#E3E3E3] ${_ === 0 ? "mobile:border-t-1" : ""} mobile:border-b-1 mobile:border-r-0 ${_ < 2 ? "border-b" : ""} ${_ % 2 == 0 ? "border-r" : ""}`
		}, _))
	});
}
function GridSectionWrapper(e) {
	let { gridData: _ = [] } = e;
	return /* @__PURE__ */ jsx(GridSection, { gridData: _ });
}
var DEFAULT_IMAGE_1 = "/assets/woodvale/voodvale-content-1.avif", DEFAULT_IMAGE_2 = "/assets/woodvale/voodvale-content-2.avif", DEFAULT_IMAGE_3 = "/assets/woodvale/voodvale-content-3.avif";
function ContentSection({ sectionTitle: e, sectionDescription: _, contentImage1: v, contentImage2: y, contentImage3: b }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-[11.5rem] mobile:mt-[6.250rem] mb-[7.5rem] flex mobile:flex-col gap-[3.125rem] mobile:gap-0 ",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 w-[34.375rem] mobile:w-full",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-[1.5rem] text-[3rem] mobile:text-[2.25rem] mobile:w-[19.6875rem] leading-[108.333%] text-[#12161D] font-medium capitalize",
						children: e
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-[3.75rem] text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal",
						children: _
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-full h-auto mobile:hidden",
						children: /* @__PURE__ */ jsx(Image, {
							width: 550,
							height: 640,
							src: v || DEFAULT_IMAGE_1,
							fallbackSrc: DEFAULT_IMAGE_1,
							alt: "content",
							className: "w-full h-auto object-contain"
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-grow mobile:hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-full h-auto mb-[4.25rem]",
					children: /* @__PURE__ */ jsx(Image, {
						width: 680,
						height: 734,
						src: y || DEFAULT_IMAGE_2,
						fallbackSrc: DEFAULT_IMAGE_2,
						alt: "content",
						className: "w-full h-auto object-contain"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full h-auto",
					children: /* @__PURE__ */ jsx(Image, {
						width: 461,
						height: 309,
						src: b || DEFAULT_IMAGE_3,
						fallbackSrc: DEFAULT_IMAGE_3,
						alt: "content",
						className: "w-full h-auto object-contain"
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hidden mobile:flex justify-center mobile:gap-[0.903125rem]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mt-[5.375rem] w-[39.8vw] h-auto",
					children: /* @__PURE__ */ jsx(Image, {
						width: 133,
						height: 154,
						src: v || DEFAULT_IMAGE_1,
						fallbackSrc: DEFAULT_IMAGE_1,
						alt: "content",
						className: "w-full h-auto object-contain"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-[1.25rem]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-[48.75vw] h-auto",
						children: /* @__PURE__ */ jsx(Image, {
							width: 197,
							height: 212,
							src: y || DEFAULT_IMAGE_2,
							fallbackSrc: DEFAULT_IMAGE_2,
							alt: "content",
							className: "w-full h-auto object-contain"
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "w-[33.08vw] h-auto",
						children: /* @__PURE__ */ jsx(Image, {
							width: 133,
							height: 212,
							src: b || DEFAULT_IMAGE_3,
							fallbackSrc: DEFAULT_IMAGE_3,
							alt: "content",
							className: "w-full h-auto object-contain"
						})
					})]
				})]
			})
		]
	});
}
function ContentSectionWrapper(e) {
	let { sectionTitle: _ = "", sectionDescription: v = "", contentImage1: y = "", contentImage2: b = "", contentImage3: x = "" } = e;
	return /* @__PURE__ */ jsx(ContentSection, {
		sectionTitle: _,
		sectionDescription: v,
		contentImage1: y,
		contentImage2: b,
		contentImage3: x
	});
}
var DEFAULT_BACKGROUND = "/assets/woodvale/wodvale_bg.avif";
function VoodvaleHomeFirstSection({ projectName: e, heading: _, subheading: v, buttonLabel: y, buttonHref: b, backgroundData: x }) {
	let S = x?.backgroundUrl ? {
		isVideo: x.isVideo,
		backgroundUrl: x.backgroundUrl
	} : {
		isVideo: !1,
		backgroundUrl: DEFAULT_BACKGROUND
	};
	return /* @__PURE__ */ jsx("div", {
		className: "panel absolute left-0 top-0 will-change-transform w-full h-full z-30",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "pt-17.5 pb-[2rem] flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: S,
					projectName: e
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute z-20 top-0 left-0",
					style: {
						opacity: .5,
						backgroundColor: "black",
						height: "100vh",
						width: "100vw"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "page-container z-30 text-white",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "w-[58.3125rem] mobile:w-[19.875rem] font-medium text-[5.625rem] mobile:text-[3rem] ml-[7.875rem] mobile:ml-[0] mt-[8.5rem] text-white leading-[107%] tracking-[-0.01em] capitalize",
						children: _
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-[5rem] mobile:mt-[2.5rem] ml-[45.9375rem] mobile:ml-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-[1.0625rem] mobile:mb-[3.125rem] w-[34rem] mobile:w-[23.125rem] text-[1.25rem] leading-[135%] tracking-[0.03em]",
							children: v
						}), /* @__PURE__ */ jsx("a", {
							href: b,
							style: { boxShadow: "0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)" },
							className: "bg-white rounded-[7px] text-[#484848] flex items-center justify-center w-[10.0625rem] h-[3.125rem]",
							children: y
						})]
					})]
				})
			]
		})
	});
}
function VoodvaleHomeFirstSectionWrapper(e) {
	let { projectName: _ = "Voodvale", heading: v = "A New Benchmark of Refined Living.", subheading: y = "Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.", buttonLabel: b = "Explore Listing", buttonHref: x = "/availability", backgroundUrl: S = "", mediaType: C = "image", scrollIndicatorText: w = "Scroll down", scrollIndicatorOpacity: E = 1 } = e;
	return /* @__PURE__ */ jsx(VoodvaleHomeFirstSection, {
		projectName: _,
		heading: v,
		subheading: y,
		buttonLabel: b,
		buttonHref: x,
		backgroundData: {
			isVideo: C === "video",
			backgroundUrl: S
		},
		scrollIndicatorText: w,
		scrollIndicatorOpacity: E
	});
}
function VoodvaleHomeSecondSection({ title: e, description: _, gridData: v, sectionTitle: y, sectionDescription: b, contentImage1: x, contentImage2: S, contentImage3: C }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full mx-auto flex flex-col pt-[3rem] px-[5rem] mobile:px-5 max-w-[1440px]",
		children: [
			/* @__PURE__ */ jsx(HeaderSection, {
				title: e,
				description: _
			}),
			/* @__PURE__ */ jsx(GridSection, { gridData: v }),
			/* @__PURE__ */ jsx(ContentSection, {
				sectionTitle: y,
				sectionDescription: b,
				contentImage1: x,
				contentImage2: S,
				contentImage3: C
			})
		]
	});
}
function VoodvaleHomeSecondSectionWrapper(e) {
	let { title: _ = "A Neighbourhood That Feels Like Home", description: v = "Woodvale Quarters brings together the charm of classic British architecture and the convenience of modern living. Surrounded by landscaped gardens and walkable streets, the development celebrates thoughtful design and quality finishes that make every home feel exceptional.", gridData: y = [
		{
			title: "Dream Homes Realised",
			increase: "50+",
			description: "Families who've found their perfect home in communities like Woodvale Quarters."
		},
		{
			title: "Trusted by Homeowners",
			increase: "100%",
			description: "Built on lasting trust and attention to detail in every development."
		},
		{
			title: "Pride in Every Home",
			increase: "100%",
			description: "Resident satisfaction through quality, care, and commitment."
		},
		{
			title: "Built on Experience",
			increase: "15+",
			description: "Years of expertise shaping elegant, well-crafted homes."
		}
	], sectionTitle: b = "Find Your Dream\nHome Here", sectionDescription: x = "Experience the charm and comfort of life at Woodvale Quarters.\n\nBrowse our gallery to explore the architecture, surroundings, and amenities that make this community a beautiful place to call home.", contentImage1: S = "", contentImage2: C = "", contentImage3: w = "" } = e;
	return /* @__PURE__ */ jsx(VoodvaleHomeSecondSection, {
		title: _,
		description: v,
		gridData: y,
		sectionTitle: b,
		sectionDescription: x,
		contentImage1: S,
		contentImage2: C,
		contentImage3: w
	});
}
function VoodvalePlotsShowcase({ plots: e, title: _ = "Available Units", seeAllTitle: v = "See All Properties", showAllLink: y, language: b = "en", showcaseVectorUrl: x, showcaseMobileVectorUrl: S }) {
	let C = e.map((e, _) => /* @__PURE__ */ jsx("a", {
		href: e.href,
		children: /* @__PURE__ */ jsx(VoodvalePlotThumbCard, { plot: e }, `showcase_card${_}`)
	}, `detail_link${_}`));
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full mx-auto flex flex-col",
		style: { background: "radial-gradient(113.94% 104.88% at 55.95% -2.12%, #DECFCD 0%, #B38A82 56.73%, #988289 100%)" },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "relative z-[1] page-container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "pt-[6.8125rem] mobile:pt-[4.1875rem] pb-[7.8125rem] mobile:pb-[9rem] px-[8.4375rem] mobile:pl-[1rem] mobile:pr-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-[3.875rem] mobile:mb-[2rem] flex justify-between items-center",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[2.75rem] mobile:text-[2.25rem] leading-[118.182%] text-[#FFF] font-medium",
							suppressHydrationWarning: !0,
							children: _
						}), /* @__PURE__ */ jsx(SeeAllProperties, {
							className: "mobile:hidden",
							pathname: y || "",
							title: v || "See All Properties"
						})]
					}), /* @__PURE__ */ jsx(ItemSlider, {
						items: C.slice(0, 3),
						variant: "voodvale",
						language: b
					})]
				})
			}),
			/* @__PURE__ */ jsx(SeeAllProperties, {
				className: "hidden mobile:block absolute z-[1] left-1/2 -translate-x-1/2 bottom-[4.1875rem]",
				pathname: y || "",
				title: v || "See All Properties"
			}),
			x && /* @__PURE__ */ jsx("div", {
				className: "mobile:hidden z-[0] absolute w-[100vw] h-auto object-contain -bottom-[12.72vw] left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ jsx("img", {
					src: x,
					alt: "showcase vector",
					className: "w-full h-full object-contain"
				})
			}),
			S && /* @__PURE__ */ jsx("div", {
				className: "mobile:block hidden z-[0] absolute w-[100vw] h-auto object-contain -bottom-[21vw] left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ jsx("img", {
					src: S,
					alt: "showcase mobile vector",
					className: "w-full h-full object-contain"
				})
			})
		]
	});
}
var SeeAllProperties = ({ pathname: _, title: v, className: y }) => /* @__PURE__ */ jsx("a", {
	className: cn("mobile:hidden", y),
	href: _,
	children: /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[1rem] text-[#FFF]",
			children: v
		}), /* @__PURE__ */ jsx(Arrow, {})]
	})
}), Arrow = () => /* @__PURE__ */ jsxs("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ jsx("g", {
		clipPath: "url(#clip0_4171_3931)",
		children: /* @__PURE__ */ jsx("path", {
			d: "M15 0.65V10.35C15 10.5167 14.9417 10.6667 14.825 10.8C14.7083 10.9333 14.5583 11 14.375 11C14.1917 11 14.0333 10.9333 13.9 10.8C13.7667 10.6667 13.7 10.5167 13.7 10.35V2.2L1.1 14.8C0.966667 14.9333 0.808333 15 0.625 15C0.441667 15 0.291667 14.9417 0.175 14.825C0.0583333 14.7083 0 14.5583 0 14.375C0 14.1917 0.0666667 14.0333 0.2 13.9L12.8 1.3H4.65C4.48333 1.3 4.33333 1.23333 4.2 1.1C4.06667 0.966666 4 0.808333 4 0.625C4 0.441667 4.06667 0.291666 4.2 0.175C4.33333 0.0583334 4.48333 0 4.65 0H14.35C14.55 0 14.7083 0.0583334 14.825 0.175C14.9417 0.291666 15 0.45 15 0.65Z",
			fill: "white"
		})
	}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
		id: "clip0_4171_3931",
		children: /* @__PURE__ */ jsx("rect", {
			width: "15",
			height: "15",
			fill: "white",
			transform: "matrix(1 0 0 -1 0 15)"
		})
	}) })]
});
function VoodvalePlotsShowcaseWrapper(e) {
	let { plots: _ = [], title: v = "Available Units", showAllLink: y = "/availability", locale: b = "en", language: x = "en", showcaseVectorUrl: S = "", showcaseMobileVectorUrl: C = "" } = e;
	return /* @__PURE__ */ jsx(VoodvalePlotsShowcase, {
		plots: _,
		title: v,
		showAllLink: y,
		locale: b,
		language: x,
		showcaseVectorUrl: S,
		showcaseMobileVectorUrl: C
	});
}
export { VoodvalePlotThumbCardRoot as A, SkyscrapperPlotThumbCard as C, SkyscrapperPlotThumbCardRoot as D, SkyscrapperPlotThumbCardImage as E, HomePageContentWrapper as F, HomePageContent as I, HomeFirstSectionWrapper as L, PlotThumbCardImage as M, PlotThumbCardRoot as N, VoodvalePlotThumbCardBody as O, ItemSlider as P, HomeFirstSection as R, PlotThumbCard as S, SkyscrapperPlotThumbCardBody as T, SkyscrapperHomesSecondSection as _, VoodvaleHomeFirstSectionWrapper as a, PlotsShowcaseWrapper as b, ContentSection as c, HeaderSectionWrapper as d, HeaderSection as f, SkyscrapperHomesSecondSectionWrapper as g, SkyscrapperShowcaseCard as h, VoodvaleHomeSecondSection as i, PlotThumbCardBody as j, VoodvalePlotThumbCardImage as k, GridSectionWrapper as l, SkyscrapperPlotsShowcase as m, VoodvalePlotsShowcase as n, VoodvaleHomeFirstSection as o, SkyscrapperPlotsShowcaseWrapper as p, VoodvaleHomeSecondSectionWrapper as r, ContentSectionWrapper as s, VoodvalePlotsShowcaseWrapper as t, GridSection as u, SkyscrapperHomeFirstSectionWrapper as v, VoodvalePlotThumbCard as w, PlotsShowcase as x, SkyscrapperHomeFirstSection as y };
