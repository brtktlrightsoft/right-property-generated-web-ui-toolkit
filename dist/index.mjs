import * as React from "react";
import React2, { Component, Fragment, createContext, createElement, forwardRef, isValidElement, memo, startTransition, useCallback, useContext, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState, useTransition } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { createPortal, flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var __create$7 = Object.create, __defProp$8 = Object.defineProperty, __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor, __getOwnPropNames$1 = Object.getOwnPropertyNames, __getProtoOf$1 = Object.getPrototypeOf, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __esmMin = (m, x) => () => (m && (x = m(m = 0)), x), __commonJSMin = (m, x) => () => (x || m((x = { exports: {} }).exports, x), x.exports), __export = (m) => {
	let x = {};
	for (var S in m) __defProp$8(x, S, {
		get: m[S],
		enumerable: !0
	});
	return x;
}, __copyProps$1 = (m, x, S, C) => {
	if (x && typeof x == "object" || typeof x == "function") for (var T = __getOwnPropNames$1(x), D = 0, O = T.length, k; D < O; D++) k = T[D], !__hasOwnProp$8.call(m, k) && k !== S && __defProp$8(m, k, {
		get: ((m) => x[m]).bind(null, k),
		enumerable: !(C = __getOwnPropDesc$7(x, k)) || C.enumerable
	});
	return m;
}, __toESM$1 = (m, x, S) => (S = m == null ? {} : __create$7(__getProtoOf$1(m)), __copyProps$1(x || !m || !m.__esModule ? __defProp$8(S, "default", {
	value: m,
	enumerable: !0
}) : S, m)), __toCommonJS = (m) => __copyProps$1(__defProp$8({}, "__esModule", { value: !0 }), m), __require = /* @__PURE__ */ ((m) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(m, { get: (m, x) => (typeof require < "u" ? require : m)[x] }) : m)(function(m) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + m + "\" in an environment that doesn't expose the `require` function.");
});
function clamp$1(m, [x, S]) {
	return Math.min(S, Math.max(x, m));
}
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(m, x, { checkForDefaultPrevented: S = !0 } = {}) {
	return function(C) {
		if (m?.(C), S === !1 || !C.defaultPrevented) return x?.(C);
	};
}
function createContextScope(x, S = []) {
	let C = [];
	function T(S, T) {
		let D = React.createContext(T), O = C.length;
		C = [...C, T];
		let k = (S) => {
			let { scope: C, children: T, ...k } = S, A = C?.[x]?.[O] || D, j = React.useMemo(() => k, Object.values(k));
			return /* @__PURE__ */ jsx(A.Provider, {
				value: j,
				children: T
			});
		};
		k.displayName = S + "Provider";
		function A(C, k) {
			let A = k?.[x]?.[O] || D, j = React.useContext(A);
			if (j) return j;
			if (T !== void 0) return T;
			throw Error(`\`${C}\` must be used within \`${S}\``);
		}
		return [k, A];
	}
	let D = () => {
		let S = C.map((x) => React.createContext(x));
		return function(C) {
			let T = C?.[x] || S;
			return React.useMemo(() => ({ [`__scope${x}`]: {
				...C,
				[x]: T
			} }), [C, T]);
		};
	};
	return D.scopeName = x, [T, composeContextScopes(D, ...S)];
}
function composeContextScopes(...x) {
	let S = x[0];
	if (x.length === 1) return S;
	let C = () => {
		let C = x.map((m) => ({
			useScope: m(),
			scopeName: m.scopeName
		}));
		return function(x) {
			let T = C.reduce((m, { useScope: S, scopeName: C }) => {
				let T = S(x)[`__scope${C}`];
				return {
					...m,
					...T
				};
			}, {});
			return React.useMemo(() => ({ [`__scope${S.scopeName}`]: T }), [T]);
		};
	};
	return C.scopeName = S.scopeName, C;
}
function setRef(m, x) {
	if (typeof m == "function") return m(x);
	m != null && (m.current = x);
}
function composeRefs(...m) {
	return (x) => {
		let S = !1, C = m.map((m) => {
			let C = setRef(m, x);
			return !S && typeof C == "function" && (S = !0), C;
		});
		if (S) return () => {
			for (let x = 0; x < C.length; x++) {
				let S = C[x];
				typeof S == "function" ? S() : setRef(m[x], null);
			}
		};
	};
}
function useComposedRefs(...x) {
	return React.useCallback(composeRefs(...x), x);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(x) {
	let S = /* @__PURE__ */ createSlotClone(x), C = React.forwardRef((x, C) => {
		let { children: T, ...D } = x, O = React.Children.toArray(T), k = O.find(isSlottable);
		if (k) {
			let x = k.props.children, T = O.map((S) => S === k ? React.Children.count(x) > 1 ? React.Children.only(null) : React.isValidElement(x) ? x.props.children : null : S);
			return /* @__PURE__ */ jsx(S, {
				...D,
				ref: C,
				children: React.isValidElement(x) ? React.cloneElement(x, void 0, T) : null
			});
		}
		return /* @__PURE__ */ jsx(S, {
			...D,
			ref: C,
			children: T
		});
	});
	return C.displayName = `${x}.Slot`, C;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(x) {
	let S = React.forwardRef((x, S) => {
		let { children: C, ...T } = x;
		if (React.isValidElement(C)) {
			let x = getElementRef(C), D = mergeProps(T, C.props);
			return C.type !== React.Fragment && (D.ref = S ? composeRefs(S, x) : x), React.cloneElement(C, D);
		}
		return React.Children.count(C) > 1 ? React.Children.only(null) : null;
	});
	return S.displayName = `${x}.SlotClone`, S;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(x) {
	return React.isValidElement(x) && typeof x.type == "function" && "__radixId" in x.type && x.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(m, x) {
	let S = { ...x };
	for (let C in x) {
		let T = m[C], D = x[C];
		/^on[A-Z]/.test(C) ? T && D ? S[C] = (...m) => {
			let x = D(...m);
			return T(...m), x;
		} : T && (S[C] = T) : C === "style" ? S[C] = {
			...T,
			...D
		} : C === "className" && (S[C] = [T, D].filter(Boolean).join(" "));
	}
	return {
		...m,
		...S
	};
}
function getElementRef(m) {
	let x = Object.getOwnPropertyDescriptor(m.props, "ref")?.get, S = x && "isReactWarning" in x && x.isReactWarning;
	return S ? m.ref : (x = Object.getOwnPropertyDescriptor(m, "ref")?.get, S = x && "isReactWarning" in x && x.isReactWarning, S ? m.props.ref : m.props.ref || m.ref);
}
function createCollection(m) {
	let S = m + "CollectionProvider", [C, T] = createContextScope(S), [D, O] = C(S, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), k = (m) => {
		let { scope: S, children: C } = m, T = React2.useRef(null), O = React2.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(D, {
			scope: S,
			itemMap: O,
			collectionRef: T,
			children: C
		});
	};
	k.displayName = S;
	let A = m + "CollectionSlot", j = /* @__PURE__ */ createSlot(A), M = React2.forwardRef((m, x) => {
		let { scope: S, children: C } = m;
		return /* @__PURE__ */ jsx(j, {
			ref: useComposedRefs(x, O(A, S).collectionRef),
			children: C
		});
	});
	M.displayName = A;
	let N = m + "CollectionItemSlot", P = "data-radix-collection-item", F = /* @__PURE__ */ createSlot(N), I = React2.forwardRef((m, S) => {
		let { scope: C, children: T, ...D } = m, k = React2.useRef(null), A = useComposedRefs(S, k), j = O(N, C);
		return React2.useEffect(() => (j.itemMap.set(k, {
			ref: k,
			...D
		}), () => void j.itemMap.delete(k))), /* @__PURE__ */ jsx(F, {
			[P]: "",
			ref: A,
			children: T
		});
	});
	I.displayName = N;
	function L(S) {
		let C = O(m + "CollectionConsumer", S);
		return React2.useCallback(() => {
			let m = C.collectionRef.current;
			if (!m) return [];
			let x = Array.from(m.querySelectorAll(`[${P}]`));
			return Array.from(C.itemMap.values()).sort((m, S) => x.indexOf(m.ref.current) - x.indexOf(S.ref.current));
		}, [C.collectionRef, C.itemMap]);
	}
	return [
		{
			Provider: k,
			Slot: M,
			ItemSlot: I
		},
		L,
		T
	];
}
var DirectionContext = React.createContext(void 0);
function useDirection(x) {
	let S = React.useContext(DirectionContext);
	return x || S || "ltr";
}
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((x, S) => {
	let C = /* @__PURE__ */ createSlot(`Primitive.${S}`), T = React.forwardRef((m, x) => {
		let { asChild: T, ...D } = m, O = T ? C : S;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(O, {
			...D,
			ref: x
		});
	});
	return T.displayName = `Primitive.${S}`, {
		...x,
		[S]: T
	};
}, {});
function dispatchDiscreteCustomEvent(m, x) {
	m && ReactDOM$1.flushSync(() => m.dispatchEvent(x));
}
function useCallbackRef(x) {
	let S = React.useRef(x);
	return React.useEffect(() => {
		S.current = x;
	}), React.useMemo(() => (...m) => S.current?.(...m), []);
}
function useEscapeKeydown(x, S = globalThis?.document) {
	let C = useCallbackRef(x);
	React.useEffect(() => {
		let m = (m) => {
			m.key === "Escape" && C(m);
		};
		return S.addEventListener("keydown", m, { capture: !0 }), () => S.removeEventListener("keydown", m, { capture: !0 });
	}, [C, S]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React.forwardRef((x, S) => {
	let { disableOutsidePointerEvents: C = !1, onEscapeKeyDown: T, onPointerDownOutside: D, onFocusOutside: O, onInteractOutside: k, onDismiss: A, ...j } = x, M = React.useContext(DismissableLayerContext), [N, P] = React.useState(null), F = N?.ownerDocument ?? globalThis?.document, [, I] = React.useState({}), L = useComposedRefs(S, (m) => P(m)), R = Array.from(M.layers), [z] = [...M.layersWithOutsidePointerEventsDisabled].slice(-1), B = R.indexOf(z), V = N ? R.indexOf(N) : -1, H = M.layersWithOutsidePointerEventsDisabled.size > 0, U = V >= B, W = usePointerDownOutside((m) => {
		let x = m.target, S = [...M.branches].some((m) => m.contains(x));
		!U || S || (D?.(m), k?.(m), m.defaultPrevented || A?.());
	}, F), G = useFocusOutside((m) => {
		let x = m.target;
		[...M.branches].some((m) => m.contains(x)) || (O?.(m), k?.(m), m.defaultPrevented || A?.());
	}, F);
	return useEscapeKeydown((m) => {
		V === M.layers.size - 1 && (T?.(m), !m.defaultPrevented && A && (m.preventDefault(), A()));
	}, F), React.useEffect(() => {
		if (N) return C && (M.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = F.body.style.pointerEvents, F.body.style.pointerEvents = "none"), M.layersWithOutsidePointerEventsDisabled.add(N)), M.layers.add(N), dispatchUpdate(), () => {
			C && M.layersWithOutsidePointerEventsDisabled.size === 1 && (F.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		N,
		F,
		C,
		M
	]), React.useEffect(() => () => {
		N && (M.layers.delete(N), M.layersWithOutsidePointerEventsDisabled.delete(N), dispatchUpdate());
	}, [N, M]), React.useEffect(() => {
		let m = () => I({});
		return document.addEventListener(CONTEXT_UPDATE, m), () => document.removeEventListener(CONTEXT_UPDATE, m);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...j,
		ref: L,
		style: {
			pointerEvents: H ? U ? "auto" : "none" : void 0,
			...x.style
		},
		onFocusCapture: composeEventHandlers(x.onFocusCapture, G.onFocusCapture),
		onBlurCapture: composeEventHandlers(x.onBlurCapture, G.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(x.onPointerDownCapture, W.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React.forwardRef((x, S) => {
	let C = React.useContext(DismissableLayerContext), T = React.useRef(null), D = useComposedRefs(S, T);
	return React.useEffect(() => {
		let m = T.current;
		if (m) return C.branches.add(m), () => {
			C.branches.delete(m);
		};
	}, [C.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...x,
		ref: D
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(x, S = globalThis?.document) {
	let C = useCallbackRef(x), T = React.useRef(!1), D = React.useRef(() => {});
	return React.useEffect(() => {
		let m = (m) => {
			if (m.target && !T.current) {
				let x = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, C, T, { discrete: !0 });
				}, T = { originalEvent: m };
				m.pointerType === "touch" ? (S.removeEventListener("click", D.current), D.current = x, S.addEventListener("click", D.current, { once: !0 })) : x();
			} else S.removeEventListener("click", D.current);
			T.current = !1;
		}, x = window.setTimeout(() => {
			S.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(x), S.removeEventListener("pointerdown", m), S.removeEventListener("click", D.current);
		};
	}, [S, C]), { onPointerDownCapture: () => T.current = !0 };
}
function useFocusOutside(x, S = globalThis?.document) {
	let C = useCallbackRef(x), T = React.useRef(!1);
	return React.useEffect(() => {
		let m = (m) => {
			m.target && !T.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, C, { originalEvent: m }, { discrete: !1 });
		};
		return S.addEventListener("focusin", m), () => S.removeEventListener("focusin", m);
	}, [S, C]), {
		onFocusCapture: () => T.current = !0,
		onBlurCapture: () => T.current = !1
	};
}
function dispatchUpdate() {
	let m = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(m);
}
function handleAndDispatchCustomEvent(m, x, S, { discrete: C }) {
	let T = S.originalEvent.target, D = new CustomEvent(m, {
		bubbles: !1,
		cancelable: !0,
		detail: S
	});
	x && T.addEventListener(m, x, { once: !0 }), C ? dispatchDiscreteCustomEvent(T, D) : T.dispatchEvent(D);
}
var count$1 = 0;
function useFocusGuards() {
	React.useEffect(() => {
		let m = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", m[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", m[1] ?? createFocusGuard()), count$1++, () => {
			count$1 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((m) => m.remove()), count$1--;
		};
	}, []);
}
function createFocusGuard() {
	let m = document.createElement("span");
	return m.setAttribute("data-radix-focus-guard", ""), m.tabIndex = 0, m.style.outline = "none", m.style.opacity = "0", m.style.position = "fixed", m.style.pointerEvents = "none", m;
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React.forwardRef((x, S) => {
	let { loop: C = !1, trapped: T = !1, onMountAutoFocus: D, onUnmountAutoFocus: O, ...k } = x, [A, j] = React.useState(null), M = useCallbackRef(D), N = useCallbackRef(O), P = React.useRef(null), F = useComposedRefs(S, (m) => j(m)), I = React.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React.useEffect(() => {
		if (T) {
			let m = function(m) {
				if (I.paused || !A) return;
				let x = m.target;
				A.contains(x) ? P.current = x : focus(P.current, { select: !0 });
			}, x = function(m) {
				if (I.paused || !A) return;
				let x = m.relatedTarget;
				x !== null && (A.contains(x) || focus(P.current, { select: !0 }));
			}, S = function(m) {
				if (document.activeElement === document.body) for (let x of m) x.removedNodes.length > 0 && focus(A);
			};
			document.addEventListener("focusin", m), document.addEventListener("focusout", x);
			let C = new MutationObserver(S);
			return A && C.observe(A, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), C.disconnect();
			};
		}
	}, [
		T,
		A,
		I.paused
	]), React.useEffect(() => {
		if (A) {
			focusScopesStack.add(I);
			let m = document.activeElement;
			if (!A.contains(m)) {
				let x = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				A.addEventListener(AUTOFOCUS_ON_MOUNT, M), A.dispatchEvent(x), x.defaultPrevented || (focusFirst(removeLinks(getTabbableCandidates(A)), { select: !0 }), document.activeElement === m && focus(A));
			}
			return () => {
				A.removeEventListener(AUTOFOCUS_ON_MOUNT, M), setTimeout(() => {
					let x = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					A.addEventListener(AUTOFOCUS_ON_UNMOUNT, N), A.dispatchEvent(x), x.defaultPrevented || focus(m ?? document.body, { select: !0 }), A.removeEventListener(AUTOFOCUS_ON_UNMOUNT, N), focusScopesStack.remove(I);
				}, 0);
			};
		}
	}, [
		A,
		M,
		N,
		I
	]);
	let L = React.useCallback((m) => {
		if (!C && !T || I.paused) return;
		let x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, S = document.activeElement;
		if (x && S) {
			let x = m.currentTarget, [T, D] = getTabbableEdges(x);
			T && D ? !m.shiftKey && S === D ? (m.preventDefault(), C && focus(T, { select: !0 })) : m.shiftKey && S === T && (m.preventDefault(), C && focus(D, { select: !0 })) : S === x && m.preventDefault();
		}
	}, [
		C,
		T,
		I.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...k,
		ref: F,
		onKeyDown: L
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(m, { select: x = !1 } = {}) {
	let S = document.activeElement;
	for (let C of m) if (focus(C, { select: x }), document.activeElement !== S) return;
}
function getTabbableEdges(m) {
	let x = getTabbableCandidates(m);
	return [findVisible(x, m), findVisible(x.reverse(), m)];
}
function getTabbableCandidates(m) {
	let x = [], S = document.createTreeWalker(m, NodeFilter.SHOW_ELEMENT, { acceptNode: (m) => {
		let x = m.tagName === "INPUT" && m.type === "hidden";
		return m.disabled || m.hidden || x ? NodeFilter.FILTER_SKIP : m.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; S.nextNode();) x.push(S.currentNode);
	return x;
}
function findVisible(m, x) {
	for (let S of m) if (!isHidden(S, { upTo: x })) return S;
}
function isHidden(m, { upTo: x }) {
	if (getComputedStyle(m).visibility === "hidden") return !0;
	for (; m;) {
		if (x !== void 0 && m === x) return !1;
		if (getComputedStyle(m).display === "none") return !0;
		m = m.parentElement;
	}
	return !1;
}
function isSelectableInput(m) {
	return m instanceof HTMLInputElement && "select" in m;
}
function focus(m, { select: x = !1 } = {}) {
	if (m && m.focus) {
		let S = document.activeElement;
		m.focus({ preventScroll: !0 }), m !== S && isSelectableInput(m) && x && m.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let m = [];
	return {
		add(x) {
			let S = m[0];
			x !== S && S?.pause(), m = arrayRemove(m, x), m.unshift(x);
		},
		remove(x) {
			m = arrayRemove(m, x), m[0]?.resume();
		}
	};
}
function arrayRemove(m, x) {
	let S = [...m], C = S.indexOf(x);
	return C !== -1 && S.splice(C, 1), S;
}
function removeLinks(m) {
	return m.filter((m) => m.tagName !== "A");
}
var useLayoutEffect2 = globalThis?.document ? React.useLayoutEffect : () => {}, useReactId = React.useId || (() => void 0), count = 0;
function useId$1(x) {
	let [S, C] = React.useState(useReactId());
	return useLayoutEffect2(() => {
		x || C((m) => m ?? String(count++));
	}, [x]), x || (S ? `radix-${S}` : "");
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (m) => ({
	x: m,
	y: m
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp$2(m, x, S) {
	return max(m, min(x, S));
}
function evaluate(m, x) {
	return typeof m == "function" ? m(x) : m;
}
function getSide(m) {
	return m.split("-")[0];
}
function getAlignment(m) {
	return m.split("-")[1];
}
function getOppositeAxis(m) {
	return m === "x" ? "y" : "x";
}
function getAxisLength(m) {
	return m === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(m) {
	return yAxisSides.has(getSide(m)) ? "y" : "x";
}
function getAlignmentAxis(m) {
	return getOppositeAxis(getSideAxis(m));
}
function getAlignmentSides(m, x, S) {
	S === void 0 && (S = !1);
	let C = getAlignment(m), T = getAlignmentAxis(m), D = getAxisLength(T), O = T === "x" ? C === (S ? "end" : "start") ? "right" : "left" : C === "start" ? "bottom" : "top";
	return x.reference[D] > x.floating[D] && (O = getOppositePlacement(O)), [O, getOppositePlacement(O)];
}
function getExpandedPlacements(m) {
	let x = getOppositePlacement(m);
	return [
		getOppositeAlignmentPlacement(m),
		x,
		getOppositeAlignmentPlacement(x)
	];
}
function getOppositeAlignmentPlacement(m) {
	return m.replace(/start|end/g, (m) => oppositeAlignmentMap[m]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(m, x, S) {
	switch (m) {
		case "top":
		case "bottom": return S ? x ? rlPlacement : lrPlacement : x ? lrPlacement : rlPlacement;
		case "left":
		case "right": return x ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(m, x, S, C) {
	let T = getAlignment(m), D = getSideList(getSide(m), S === "start", C);
	return T && (D = D.map((m) => m + "-" + T), x && (D = D.concat(D.map(getOppositeAlignmentPlacement)))), D;
}
function getOppositePlacement(m) {
	return m.replace(/left|right|bottom|top/g, (m) => oppositeSideMap[m]);
}
function expandPaddingObject(m) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...m
	};
}
function getPaddingObject(m) {
	return typeof m == "number" ? {
		top: m,
		right: m,
		bottom: m,
		left: m
	} : expandPaddingObject(m);
}
function rectToClientRect(m) {
	let { x, y: S, width: C, height: T } = m;
	return {
		width: C,
		height: T,
		top: S,
		left: x,
		right: x + C,
		bottom: S + T,
		x,
		y: S
	};
}
function computeCoordsFromPlacement(m, x, S) {
	let { reference: C, floating: T } = m, D = getSideAxis(x), O = getAlignmentAxis(x), k = getAxisLength(O), A = getSide(x), j = D === "y", M = C.x + C.width / 2 - T.width / 2, N = C.y + C.height / 2 - T.height / 2, P = C[k] / 2 - T[k] / 2, F;
	switch (A) {
		case "top":
			F = {
				x: M,
				y: C.y - T.height
			};
			break;
		case "bottom":
			F = {
				x: M,
				y: C.y + C.height
			};
			break;
		case "right":
			F = {
				x: C.x + C.width,
				y: N
			};
			break;
		case "left":
			F = {
				x: C.x - T.width,
				y: N
			};
			break;
		default: F = {
			x: C.x,
			y: C.y
		};
	}
	switch (getAlignment(x)) {
		case "start":
			F[O] -= P * (S && j ? -1 : 1);
			break;
		case "end":
			F[O] += P * (S && j ? -1 : 1);
			break;
	}
	return F;
}
var computePosition$1 = async (m, x, S) => {
	let { placement: C = "bottom", strategy: T = "absolute", middleware: D = [], platform: O } = S, k = D.filter(Boolean), A = await (O.isRTL == null ? void 0 : O.isRTL(x)), j = await O.getElementRects({
		reference: m,
		floating: x,
		strategy: T
	}), { x: M, y: N } = computeCoordsFromPlacement(j, C, A), P = C, F = {}, I = 0;
	for (let S = 0; S < k.length; S++) {
		let { name: D, fn: L } = k[S], { x: R, y: z, data: B, reset: V } = await L({
			x: M,
			y: N,
			initialPlacement: C,
			placement: P,
			strategy: T,
			middlewareData: F,
			rects: j,
			platform: O,
			elements: {
				reference: m,
				floating: x
			}
		});
		M = R ?? M, N = z ?? N, F = {
			...F,
			[D]: {
				...F[D],
				...B
			}
		}, V && I <= 50 && (I++, typeof V == "object" && (V.placement && (P = V.placement), V.rects && (j = V.rects === !0 ? await O.getElementRects({
			reference: m,
			floating: x,
			strategy: T
		}) : V.rects), {x: M, y: N} = computeCoordsFromPlacement(j, P, A)), S = -1);
	}
	return {
		x: M,
		y: N,
		placement: P,
		strategy: T,
		middlewareData: F
	};
};
async function detectOverflow$1(m, x) {
	x === void 0 && (x = {});
	let { x: S, y: C, platform: T, rects: D, elements: O, strategy: k } = m, { boundary: A = "clippingAncestors", rootBoundary: j = "viewport", elementContext: M = "floating", altBoundary: N = !1, padding: P = 0 } = evaluate(x, m), F = getPaddingObject(P), I = O[N ? M === "floating" ? "reference" : "floating" : M], L = rectToClientRect(await T.getClippingRect({
		element: await (T.isElement == null ? void 0 : T.isElement(I)) ?? !0 ? I : I.contextElement || await (T.getDocumentElement == null ? void 0 : T.getDocumentElement(O.floating)),
		boundary: A,
		rootBoundary: j,
		strategy: k
	})), R = M === "floating" ? {
		x: S,
		y: C,
		width: D.floating.width,
		height: D.floating.height
	} : D.reference, z = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(O.floating)), B = await (T.isElement == null ? void 0 : T.isElement(z)) && await (T.getScale == null ? void 0 : T.getScale(z)) || {
		x: 1,
		y: 1
	}, V = rectToClientRect(T.convertOffsetParentRelativeRectToViewportRelativeRect ? await T.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: O,
		rect: R,
		offsetParent: z,
		strategy: k
	}) : R);
	return {
		top: (L.top - V.top + F.top) / B.y,
		bottom: (V.bottom - L.bottom + F.bottom) / B.y,
		left: (L.left - V.left + F.left) / B.x,
		right: (V.right - L.right + F.right) / B.x
	};
}
var arrow$2 = (m) => ({
	name: "arrow",
	options: m,
	async fn(x) {
		let { x: S, y: C, placement: T, rects: D, platform: O, elements: k, middlewareData: A } = x, { element: j, padding: M = 0 } = evaluate(m, x) || {};
		if (j == null) return {};
		let N = getPaddingObject(M), P = {
			x: S,
			y: C
		}, F = getAlignmentAxis(T), I = getAxisLength(F), L = await O.getDimensions(j), R = F === "y", z = R ? "top" : "left", B = R ? "bottom" : "right", V = R ? "clientHeight" : "clientWidth", H = D.reference[I] + D.reference[F] - P[F] - D.floating[I], U = P[F] - D.reference[F], W = await (O.getOffsetParent == null ? void 0 : O.getOffsetParent(j)), G = W ? W[V] : 0;
		(!G || !await (O.isElement == null ? void 0 : O.isElement(W))) && (G = k.floating[V] || D.floating[I]);
		let K = H / 2 - U / 2, q = G / 2 - L[I] / 2 - 1, EI = min(N[z], q), DI = min(N[B], q), J = EI, Y = G - L[I] - DI, X = G / 2 - L[I] / 2 + K, Z = clamp$2(J, X, Y), OI = !A.arrow && getAlignment(T) != null && X !== Z && D.reference[I] / 2 - (X < J ? EI : DI) - L[I] / 2 < 0, kI = OI ? X < J ? X - J : X - Y : 0;
		return {
			[F]: P[F] + kI,
			data: {
				[F]: Z,
				centerOffset: X - Z - kI,
				...OI && { alignmentOffset: kI }
			},
			reset: OI
		};
	}
}), flip$2 = function(m) {
	return m === void 0 && (m = {}), {
		name: "flip",
		options: m,
		async fn(x) {
			var S;
			let { placement: C, middlewareData: T, rects: D, initialPlacement: O, platform: k, elements: A } = x, { mainAxis: j = !0, crossAxis: M = !0, fallbackPlacements: N, fallbackStrategy: P = "bestFit", fallbackAxisSideDirection: F = "none", flipAlignment: I = !0, ...L } = evaluate(m, x);
			if ((S = T.arrow) != null && S.alignmentOffset) return {};
			let R = getSide(C), z = getSideAxis(O), B = getSide(O) === O, V = await (k.isRTL == null ? void 0 : k.isRTL(A.floating)), H = N || (B || !I ? [getOppositePlacement(O)] : getExpandedPlacements(O)), U = F !== "none";
			!N && U && H.push(...getOppositeAxisPlacements(O, I, F, V));
			let W = [O, ...H], G = await detectOverflow$1(x, L), K = [], q = T.flip?.overflows || [];
			if (j && K.push(G[R]), M) {
				let m = getAlignmentSides(C, D, V);
				K.push(G[m[0]], G[m[1]]);
			}
			if (q = [...q, {
				placement: C,
				overflows: K
			}], !K.every((m) => m <= 0)) {
				let m = (T.flip?.index || 0) + 1, x = W[m];
				if (x && (!(M === "alignment" && z !== getSideAxis(x)) || q.every((m) => getSideAxis(m.placement) === z ? m.overflows[0] > 0 : !0))) return {
					data: {
						index: m,
						overflows: q
					},
					reset: { placement: x }
				};
				let S = q.filter((m) => m.overflows[0] <= 0).sort((m, x) => m.overflows[1] - x.overflows[1])[0]?.placement;
				if (!S) switch (P) {
					case "bestFit": {
						let m = q.filter((m) => {
							if (U) {
								let x = getSideAxis(m.placement);
								return x === z || x === "y";
							}
							return !0;
						}).map((m) => [m.placement, m.overflows.filter((m) => m > 0).reduce((m, x) => m + x, 0)]).sort((m, x) => m[1] - x[1])[0]?.[0];
						m && (S = m);
						break;
					}
					case "initialPlacement":
						S = O;
						break;
				}
				if (C !== S) return { reset: { placement: S } };
			}
			return {};
		}
	};
};
function getSideOffsets(m, x) {
	return {
		top: m.top - x.height,
		right: m.right - x.width,
		bottom: m.bottom - x.height,
		left: m.left - x.width
	};
}
function isAnySideFullyClipped(m) {
	return sides.some((x) => m[x] >= 0);
}
var hide$2 = function(m) {
	return m === void 0 && (m = {}), {
		name: "hide",
		options: m,
		async fn(x) {
			let { rects: S } = x, { strategy: C = "referenceHidden", ...T } = evaluate(m, x);
			switch (C) {
				case "referenceHidden": {
					let m = getSideOffsets(await detectOverflow$1(x, {
						...T,
						elementContext: "reference"
					}), S.reference);
					return { data: {
						referenceHiddenOffsets: m,
						referenceHidden: isAnySideFullyClipped(m)
					} };
				}
				case "escaped": {
					let m = getSideOffsets(await detectOverflow$1(x, {
						...T,
						altBoundary: !0
					}), S.floating);
					return { data: {
						escapedOffsets: m,
						escaped: isAnySideFullyClipped(m)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(m, x) {
	let { placement: S, platform: C, elements: T } = m, D = await (C.isRTL == null ? void 0 : C.isRTL(T.floating)), O = getSide(S), k = getAlignment(S), A = getSideAxis(S) === "y", j = originSides.has(O) ? -1 : 1, M = D && A ? -1 : 1, N = evaluate(x, m), { mainAxis: P, crossAxis: F, alignmentAxis: I } = typeof N == "number" ? {
		mainAxis: N,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: N.mainAxis || 0,
		crossAxis: N.crossAxis || 0,
		alignmentAxis: N.alignmentAxis
	};
	return k && typeof I == "number" && (F = k === "end" ? I * -1 : I), A ? {
		x: F * M,
		y: P * j
	} : {
		x: P * j,
		y: F * M
	};
}
var offset$2 = function(m) {
	return m === void 0 && (m = 0), {
		name: "offset",
		options: m,
		async fn(x) {
			var S;
			let { x: C, y: T, placement: D, middlewareData: O } = x, k = await convertValueToCoords(x, m);
			return D === O.offset?.placement && (S = O.arrow) != null && S.alignmentOffset ? {} : {
				x: C + k.x,
				y: T + k.y,
				data: {
					...k,
					placement: D
				}
			};
		}
	};
}, shift$2 = function(m) {
	return m === void 0 && (m = {}), {
		name: "shift",
		options: m,
		async fn(x) {
			let { x: S, y: C, placement: T } = x, { mainAxis: D = !0, crossAxis: O = !1, limiter: k = { fn: (m) => {
				let { x, y: S } = m;
				return {
					x,
					y: S
				};
			} }, ...A } = evaluate(m, x), j = {
				x: S,
				y: C
			}, M = await detectOverflow$1(x, A), N = getSideAxis(getSide(T)), P = getOppositeAxis(N), F = j[P], I = j[N];
			if (D) {
				let m = P === "y" ? "top" : "left", x = P === "y" ? "bottom" : "right", S = F + M[m], C = F - M[x];
				F = clamp$2(S, F, C);
			}
			if (O) {
				let m = N === "y" ? "top" : "left", x = N === "y" ? "bottom" : "right", S = I + M[m], C = I - M[x];
				I = clamp$2(S, I, C);
			}
			let L = k.fn({
				...x,
				[P]: F,
				[N]: I
			});
			return {
				...L,
				data: {
					x: L.x - S,
					y: L.y - C,
					enabled: {
						[P]: D,
						[N]: O
					}
				}
			};
		}
	};
}, limitShift$2 = function(m) {
	return m === void 0 && (m = {}), {
		options: m,
		fn(x) {
			let { x: S, y: C, placement: T, rects: D, middlewareData: O } = x, { offset: k = 0, mainAxis: A = !0, crossAxis: j = !0 } = evaluate(m, x), M = {
				x: S,
				y: C
			}, N = getSideAxis(T), P = getOppositeAxis(N), F = M[P], I = M[N], L = evaluate(k, x), R = typeof L == "number" ? {
				mainAxis: L,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...L
			};
			if (A) {
				let m = P === "y" ? "height" : "width", x = D.reference[P] - D.floating[m] + R.mainAxis, S = D.reference[P] + D.reference[m] - R.mainAxis;
				F < x ? F = x : F > S && (F = S);
			}
			if (j) {
				let m = P === "y" ? "width" : "height", x = originSides.has(getSide(T)), S = D.reference[N] - D.floating[m] + (x && O.offset?.[N] || 0) + (x ? 0 : R.crossAxis), C = D.reference[N] + D.reference[m] + (x ? 0 : O.offset?.[N] || 0) - (x ? R.crossAxis : 0);
				I < S ? I = S : I > C && (I = C);
			}
			return {
				[P]: F,
				[N]: I
			};
		}
	};
}, size$2 = function(m) {
	return m === void 0 && (m = {}), {
		name: "size",
		options: m,
		async fn(x) {
			var S, C;
			let { placement: T, rects: D, platform: O, elements: k } = x, { apply: A = () => {}, ...j } = evaluate(m, x), M = await detectOverflow$1(x, j), N = getSide(T), P = getAlignment(T), F = getSideAxis(T) === "y", { width: I, height: L } = D.floating, R, z;
			N === "top" || N === "bottom" ? (R = N, z = P === (await (O.isRTL == null ? void 0 : O.isRTL(k.floating)) ? "start" : "end") ? "left" : "right") : (z = N, R = P === "end" ? "top" : "bottom");
			let B = L - M.top - M.bottom, V = I - M.left - M.right, H = min(L - M[R], B), U = min(I - M[z], V), W = !x.middlewareData.shift, G = H, K = U;
			if ((S = x.middlewareData.shift) != null && S.enabled.x && (K = V), (C = x.middlewareData.shift) != null && C.enabled.y && (G = B), W && !P) {
				let m = max(M.left, 0), x = max(M.right, 0), S = max(M.top, 0), C = max(M.bottom, 0);
				F ? K = I - 2 * (m !== 0 || x !== 0 ? m + x : max(M.left, M.right)) : G = L - 2 * (S !== 0 || C !== 0 ? S + C : max(M.top, M.bottom));
			}
			await A({
				...x,
				availableWidth: K,
				availableHeight: G
			});
			let q = await O.getDimensions(k.floating);
			return I !== q.width || L !== q.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(m) {
	return isNode$1(m) ? (m.nodeName || "").toLowerCase() : "#document";
}
function getWindow$1(m) {
	var x;
	return (m == null || (x = m.ownerDocument) == null ? void 0 : x.defaultView) || window;
}
function getDocumentElement(m) {
	return ((isNode$1(m) ? m.ownerDocument : m.document) || window.document)?.documentElement;
}
function isNode$1(m) {
	return hasWindow() ? m instanceof Node || m instanceof getWindow$1(m).Node : !1;
}
function isElement$1(m) {
	return hasWindow() ? m instanceof Element || m instanceof getWindow$1(m).Element : !1;
}
function isHTMLElement$2(m) {
	return hasWindow() ? m instanceof HTMLElement || m instanceof getWindow$1(m).HTMLElement : !1;
}
function isShadowRoot(m) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : m instanceof ShadowRoot || m instanceof getWindow$1(m).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(m) {
	let { overflow: x, overflowX: S, overflowY: C, display: T } = getComputedStyle$2(m);
	return /auto|scroll|overlay|hidden|clip/.test(x + C + S) && !invalidOverflowDisplayValues.has(T);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(m) {
	return tableElements.has(getNodeName(m));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(m) {
	return topLayerSelectors.some((x) => {
		try {
			return m.matches(x);
		} catch {
			return !1;
		}
	});
}
var transformProperties = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], willChangeValues = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], containValues = [
	"paint",
	"layout",
	"strict",
	"content"
];
function isContainingBlock(m) {
	let x = isWebKit(), S = isElement$1(m) ? getComputedStyle$2(m) : m;
	return transformProperties.some((m) => S[m] ? S[m] !== "none" : !1) || (S.containerType ? S.containerType !== "normal" : !1) || !x && (S.backdropFilter ? S.backdropFilter !== "none" : !1) || !x && (S.filter ? S.filter !== "none" : !1) || willChangeValues.some((m) => (S.willChange || "").includes(m)) || containValues.some((m) => (S.contain || "").includes(m));
}
function getContainingBlock(m) {
	let x = getParentNode(m);
	for (; isHTMLElement$2(x) && !isLastTraversableNode(x);) {
		if (isContainingBlock(x)) return x;
		if (isTopLayer(x)) return null;
		x = getParentNode(x);
	}
	return null;
}
function isWebKit() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function isLastTraversableNode(m) {
	return lastTraversableNodeNames.has(getNodeName(m));
}
function getComputedStyle$2(m) {
	return getWindow$1(m).getComputedStyle(m);
}
function getNodeScroll(m) {
	return isElement$1(m) ? {
		scrollLeft: m.scrollLeft,
		scrollTop: m.scrollTop
	} : {
		scrollLeft: m.scrollX,
		scrollTop: m.scrollY
	};
}
function getParentNode(m) {
	if (getNodeName(m) === "html") return m;
	let x = m.assignedSlot || m.parentNode || isShadowRoot(m) && m.host || getDocumentElement(m);
	return isShadowRoot(x) ? x.host : x;
}
function getNearestOverflowAncestor(m) {
	let x = getParentNode(m);
	return isLastTraversableNode(x) ? m.ownerDocument ? m.ownerDocument.body : m.body : isHTMLElement$2(x) && isOverflowElement(x) ? x : getNearestOverflowAncestor(x);
}
function getOverflowAncestors(m, x, S) {
	x === void 0 && (x = []), S === void 0 && (S = !0);
	let C = getNearestOverflowAncestor(m), T = C === m.ownerDocument?.body, D = getWindow$1(C);
	if (T) {
		let m = getFrameElement$1(D);
		return x.concat(D, D.visualViewport || [], isOverflowElement(C) ? C : [], m && S ? getOverflowAncestors(m) : []);
	}
	return x.concat(C, getOverflowAncestors(C, [], S));
}
function getFrameElement$1(m) {
	return m.parent && Object.getPrototypeOf(m.parent) ? m.frameElement : null;
}
function getCssDimensions(m) {
	let x = getComputedStyle$2(m), S = parseFloat(x.width) || 0, C = parseFloat(x.height) || 0, T = isHTMLElement$2(m), D = T ? m.offsetWidth : S, O = T ? m.offsetHeight : C, k = round(S) !== D || round(C) !== O;
	return k && (S = D, C = O), {
		width: S,
		height: C,
		$: k
	};
}
function unwrapElement(m) {
	return isElement$1(m) ? m : m.contextElement;
}
function getScale$1(m) {
	let x = unwrapElement(m);
	if (!isHTMLElement$2(x)) return createCoords(1);
	let S = x.getBoundingClientRect(), { width: C, height: T, $: D } = getCssDimensions(x), O = (D ? round(S.width) : S.width) / C, k = (D ? round(S.height) : S.height) / T;
	return (!O || !Number.isFinite(O)) && (O = 1), (!k || !Number.isFinite(k)) && (k = 1), {
		x: O,
		y: k
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(m) {
	let x = getWindow$1(m);
	return !isWebKit() || !x.visualViewport ? noOffsets : {
		x: x.visualViewport.offsetLeft,
		y: x.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(m, x, S) {
	return x === void 0 && (x = !1), !S || x && S !== getWindow$1(m) ? !1 : x;
}
function getBoundingClientRect(m, x, S, C) {
	x === void 0 && (x = !1), S === void 0 && (S = !1);
	let T = m.getBoundingClientRect(), D = unwrapElement(m), O = createCoords(1);
	x && (C ? isElement$1(C) && (O = getScale$1(C)) : O = getScale$1(m));
	let k = shouldAddVisualOffsets(D, S, C) ? getVisualOffsets(D) : createCoords(0), A = (T.left + k.x) / O.x, j = (T.top + k.y) / O.y, M = T.width / O.x, N = T.height / O.y;
	if (D) {
		let m = getWindow$1(D), x = C && isElement$1(C) ? getWindow$1(C) : C, S = m, T = getFrameElement$1(S);
		for (; T && C && x !== S;) {
			let m = getScale$1(T), x = T.getBoundingClientRect(), C = getComputedStyle$2(T), D = x.left + (T.clientLeft + parseFloat(C.paddingLeft)) * m.x, O = x.top + (T.clientTop + parseFloat(C.paddingTop)) * m.y;
			A *= m.x, j *= m.y, M *= m.x, N *= m.y, A += D, j += O, S = getWindow$1(T), T = getFrameElement$1(S);
		}
	}
	return rectToClientRect({
		width: M,
		height: N,
		x: A,
		y: j
	});
}
function getWindowScrollBarX(m, x) {
	let S = getNodeScroll(m).scrollLeft;
	return x ? x.left + S : getBoundingClientRect(getDocumentElement(m)).left + S;
}
function getHTMLOffset(m, x) {
	let S = m.getBoundingClientRect();
	return {
		x: S.left + x.scrollLeft - getWindowScrollBarX(m, S),
		y: S.top + x.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(m) {
	let { elements: x, rect: S, offsetParent: C, strategy: T } = m, D = T === "fixed", O = getDocumentElement(C), k = x ? isTopLayer(x.floating) : !1;
	if (C === O || k && D) return S;
	let A = {
		scrollLeft: 0,
		scrollTop: 0
	}, j = createCoords(1), M = createCoords(0), N = isHTMLElement$2(C);
	if ((N || !N && !D) && ((getNodeName(C) !== "body" || isOverflowElement(O)) && (A = getNodeScroll(C)), isHTMLElement$2(C))) {
		let m = getBoundingClientRect(C);
		j = getScale$1(C), M.x = m.x + C.clientLeft, M.y = m.y + C.clientTop;
	}
	let P = O && !N && !D ? getHTMLOffset(O, A) : createCoords(0);
	return {
		width: S.width * j.x,
		height: S.height * j.y,
		x: S.x * j.x - A.scrollLeft * j.x + M.x + P.x,
		y: S.y * j.y - A.scrollTop * j.y + M.y + P.y
	};
}
function getClientRects(m) {
	return Array.from(m.getClientRects());
}
function getDocumentRect(m) {
	let x = getDocumentElement(m), S = getNodeScroll(m), C = m.ownerDocument.body, T = max(x.scrollWidth, x.clientWidth, C.scrollWidth, C.clientWidth), D = max(x.scrollHeight, x.clientHeight, C.scrollHeight, C.clientHeight), O = -S.scrollLeft + getWindowScrollBarX(m), k = -S.scrollTop;
	return getComputedStyle$2(C).direction === "rtl" && (O += max(x.clientWidth, C.clientWidth) - T), {
		width: T,
		height: D,
		x: O,
		y: k
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(m, x) {
	let S = getWindow$1(m), C = getDocumentElement(m), T = S.visualViewport, D = C.clientWidth, O = C.clientHeight, k = 0, A = 0;
	if (T) {
		D = T.width, O = T.height;
		let m = isWebKit();
		(!m || m && x === "fixed") && (k = T.offsetLeft, A = T.offsetTop);
	}
	let j = getWindowScrollBarX(C);
	if (j <= 0) {
		let m = C.ownerDocument, x = m.body, S = getComputedStyle(x), T = m.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0, O = Math.abs(C.clientWidth - x.clientWidth - T);
		O <= SCROLLBAR_MAX && (D -= O);
	} else j <= SCROLLBAR_MAX && (D += j);
	return {
		width: D,
		height: O,
		x: k,
		y: A
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(m, x) {
	let S = getBoundingClientRect(m, !0, x === "fixed"), C = S.top + m.clientTop, T = S.left + m.clientLeft, D = isHTMLElement$2(m) ? getScale$1(m) : createCoords(1);
	return {
		width: m.clientWidth * D.x,
		height: m.clientHeight * D.y,
		x: T * D.x,
		y: C * D.y
	};
}
function getClientRectFromClippingAncestor(m, x, S) {
	let C;
	if (x === "viewport") C = getViewportRect(m, S);
	else if (x === "document") C = getDocumentRect(getDocumentElement(m));
	else if (isElement$1(x)) C = getInnerBoundingClientRect(x, S);
	else {
		let S = getVisualOffsets(m);
		C = {
			x: x.x - S.x,
			y: x.y - S.y,
			width: x.width,
			height: x.height
		};
	}
	return rectToClientRect(C);
}
function hasFixedPositionAncestor(m, x) {
	let S = getParentNode(m);
	return S === x || !isElement$1(S) || isLastTraversableNode(S) ? !1 : getComputedStyle$2(S).position === "fixed" || hasFixedPositionAncestor(S, x);
}
function getClippingElementAncestors(m, x) {
	let S = x.get(m);
	if (S) return S;
	let C = getOverflowAncestors(m, [], !1).filter((m) => isElement$1(m) && getNodeName(m) !== "body"), T = null, D = getComputedStyle$2(m).position === "fixed", O = D ? getParentNode(m) : m;
	for (; isElement$1(O) && !isLastTraversableNode(O);) {
		let x = getComputedStyle$2(O), S = isContainingBlock(O);
		!S && x.position === "fixed" && (T = null), (D ? !S && !T : !S && x.position === "static" && T && absoluteOrFixed.has(T.position) || isOverflowElement(O) && !S && hasFixedPositionAncestor(m, O)) ? C = C.filter((m) => m !== O) : T = x, O = getParentNode(O);
	}
	return x.set(m, C), C;
}
function getClippingRect(m) {
	let { element: x, boundary: S, rootBoundary: C, strategy: T } = m, D = [...S === "clippingAncestors" ? isTopLayer(x) ? [] : getClippingElementAncestors(x, this._c) : [].concat(S), C], O = D[0], k = D.reduce((m, S) => {
		let C = getClientRectFromClippingAncestor(x, S, T);
		return m.top = max(C.top, m.top), m.right = min(C.right, m.right), m.bottom = min(C.bottom, m.bottom), m.left = max(C.left, m.left), m;
	}, getClientRectFromClippingAncestor(x, O, T));
	return {
		width: k.right - k.left,
		height: k.bottom - k.top,
		x: k.left,
		y: k.top
	};
}
function getDimensions(m) {
	let { width: x, height: S } = getCssDimensions(m);
	return {
		width: x,
		height: S
	};
}
function getRectRelativeToOffsetParent(m, x, S) {
	let C = isHTMLElement$2(x), T = getDocumentElement(x), D = S === "fixed", O = getBoundingClientRect(m, !0, D, x), k = {
		scrollLeft: 0,
		scrollTop: 0
	}, A = createCoords(0);
	function j() {
		A.x = getWindowScrollBarX(T);
	}
	if (C || !C && !D) if ((getNodeName(x) !== "body" || isOverflowElement(T)) && (k = getNodeScroll(x)), C) {
		let m = getBoundingClientRect(x, !0, D, x);
		A.x = m.x + x.clientLeft, A.y = m.y + x.clientTop;
	} else T && j();
	D && !C && T && j();
	let M = T && !C && !D ? getHTMLOffset(T, k) : createCoords(0);
	return {
		x: O.left + k.scrollLeft - A.x - M.x,
		y: O.top + k.scrollTop - A.y - M.y,
		width: O.width,
		height: O.height
	};
}
function isStaticPositioned(m) {
	return getComputedStyle$2(m).position === "static";
}
function getTrueOffsetParent(m, x) {
	if (!isHTMLElement$2(m) || getComputedStyle$2(m).position === "fixed") return null;
	if (x) return x(m);
	let S = m.offsetParent;
	return getDocumentElement(m) === S && (S = S.ownerDocument.body), S;
}
function getOffsetParent(m, x) {
	let S = getWindow$1(m);
	if (isTopLayer(m)) return S;
	if (!isHTMLElement$2(m)) {
		let x = getParentNode(m);
		for (; x && !isLastTraversableNode(x);) {
			if (isElement$1(x) && !isStaticPositioned(x)) return x;
			x = getParentNode(x);
		}
		return S;
	}
	let C = getTrueOffsetParent(m, x);
	for (; C && isTableElement(C) && isStaticPositioned(C);) C = getTrueOffsetParent(C, x);
	return C && isLastTraversableNode(C) && isStaticPositioned(C) && !isContainingBlock(C) ? S : C || getContainingBlock(m) || S;
}
var getElementRects = async function(m) {
	let x = this.getOffsetParent || getOffsetParent, S = this.getDimensions, C = await S(m.floating);
	return {
		reference: getRectRelativeToOffsetParent(m.reference, await x(m.floating), m.strategy),
		floating: {
			x: 0,
			y: 0,
			width: C.width,
			height: C.height
		}
	};
};
function isRTL(m) {
	return getComputedStyle$2(m).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale: getScale$1,
	isElement: isElement$1,
	isRTL
};
function rectsAreEqual(m, x) {
	return m.x === x.x && m.y === x.y && m.width === x.width && m.height === x.height;
}
function observeMove(m, x) {
	let S = null, C, T = getDocumentElement(m);
	function D() {
		var m;
		clearTimeout(C), (m = S) == null || m.disconnect(), S = null;
	}
	function O(k, A) {
		k === void 0 && (k = !1), A === void 0 && (A = 1), D();
		let j = m.getBoundingClientRect(), { left: M, top: N, width: P, height: F } = j;
		if (k || x(), !P || !F) return;
		let I = floor(N), L = floor(T.clientWidth - (M + P)), R = floor(T.clientHeight - (N + F)), z = floor(M), B = {
			rootMargin: -I + "px " + -L + "px " + -R + "px " + -z + "px",
			threshold: max(0, min(1, A)) || 1
		}, V = !0;
		function H(x) {
			let S = x[0].intersectionRatio;
			if (S !== A) {
				if (!V) return O();
				S ? O(!1, S) : C = setTimeout(() => {
					O(!1, 1e-7);
				}, 1e3);
			}
			S === 1 && !rectsAreEqual(j, m.getBoundingClientRect()) && O(), V = !1;
		}
		try {
			S = new IntersectionObserver(H, {
				...B,
				root: T.ownerDocument
			});
		} catch {
			S = new IntersectionObserver(H, B);
		}
		S.observe(m);
	}
	return O(!0), D;
}
function autoUpdate(m, x, S, C) {
	C === void 0 && (C = {});
	let { ancestorScroll: T = !0, ancestorResize: D = !0, elementResize: O = typeof ResizeObserver == "function", layoutShift: k = typeof IntersectionObserver == "function", animationFrame: A = !1 } = C, j = unwrapElement(m), M = T || D ? [...j ? getOverflowAncestors(j) : [], ...getOverflowAncestors(x)] : [];
	M.forEach((m) => {
		T && m.addEventListener("scroll", S, { passive: !0 }), D && m.addEventListener("resize", S);
	});
	let N = j && k ? observeMove(j, S) : null, P = -1, F = null;
	O && (F = new ResizeObserver((m) => {
		let [C] = m;
		C && C.target === j && F && (F.unobserve(x), cancelAnimationFrame(P), P = requestAnimationFrame(() => {
			var m;
			(m = F) == null || m.observe(x);
		})), S();
	}), j && !A && F.observe(j), F.observe(x));
	let I, L = A ? getBoundingClientRect(m) : null;
	A && R();
	function R() {
		let x = getBoundingClientRect(m);
		L && !rectsAreEqual(L, x) && S(), L = x, I = requestAnimationFrame(R);
	}
	return S(), () => {
		var m;
		M.forEach((m) => {
			T && m.removeEventListener("scroll", S), D && m.removeEventListener("resize", S);
		}), N?.(), (m = F) == null || m.disconnect(), F = null, A && cancelAnimationFrame(I);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (m, x, S) => {
	let C = /* @__PURE__ */ new Map(), T = {
		platform,
		...S
	}, D = {
		...T.platform,
		_c: C
	};
	return computePosition$1(m, x, {
		...T,
		platform: D
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual$1(m, x) {
	if (m === x) return !0;
	if (typeof m != typeof x) return !1;
	if (typeof m == "function" && m.toString() === x.toString()) return !0;
	let S, C, T;
	if (m && x && typeof m == "object") {
		if (Array.isArray(m)) {
			if (S = m.length, S !== x.length) return !1;
			for (C = S; C-- !== 0;) if (!deepEqual$1(m[C], x[C])) return !1;
			return !0;
		}
		if (T = Object.keys(m), S = T.length, S !== Object.keys(x).length) return !1;
		for (C = S; C-- !== 0;) if (!{}.hasOwnProperty.call(x, T[C])) return !1;
		for (C = S; C-- !== 0;) {
			let S = T[C];
			if (!(S === "_owner" && m.$$typeof) && !deepEqual$1(m[S], x[S])) return !1;
		}
		return !0;
	}
	return m !== m && x !== x;
}
function getDPR(m) {
	return typeof window > "u" ? 1 : (m.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(m, x) {
	let S = getDPR(m);
	return Math.round(x * S) / S;
}
function useLatestRef(x) {
	let S = React.useRef(x);
	return index(() => {
		S.current = x;
	}), S;
}
function useFloating(x) {
	x === void 0 && (x = {});
	let { placement: S = "bottom", strategy: C = "absolute", middleware: T = [], platform: D, elements: { reference: O, floating: k } = {}, transform: A = !0, whileElementsMounted: j, open: M } = x, [N, P] = React.useState({
		x: 0,
		y: 0,
		strategy: C,
		placement: S,
		middlewareData: {},
		isPositioned: !1
	}), [F, I] = React.useState(T);
	deepEqual$1(F, T) || I(T);
	let [L, R] = React.useState(null), [z, B] = React.useState(null), V = React.useCallback((m) => {
		m !== K.current && (K.current = m, R(m));
	}, []), H = React.useCallback((m) => {
		m !== q.current && (q.current = m, B(m));
	}, []), W = O || L, G = k || z, K = React.useRef(null), q = React.useRef(null), EI = React.useRef(N), DI = j != null, J = useLatestRef(j), Y = useLatestRef(D), X = useLatestRef(M), Z = React.useCallback(() => {
		if (!K.current || !q.current) return;
		let m = {
			placement: S,
			strategy: C,
			middleware: F
		};
		Y.current && (m.platform = Y.current), computePosition(K.current, q.current, m).then((m) => {
			let x = {
				...m,
				isPositioned: X.current !== !1
			};
			OI.current && !deepEqual$1(EI.current, x) && (EI.current = x, ReactDOM$1.flushSync(() => {
				P(x);
			}));
		});
	}, [
		F,
		S,
		C,
		Y,
		X
	]);
	index(() => {
		M === !1 && EI.current.isPositioned && (EI.current.isPositioned = !1, P((m) => ({
			...m,
			isPositioned: !1
		})));
	}, [M]);
	let OI = React.useRef(!1);
	index(() => (OI.current = !0, () => {
		OI.current = !1;
	}), []), index(() => {
		if (W && (K.current = W), G && (q.current = G), W && G) {
			if (J.current) return J.current(W, G, Z);
			Z();
		}
	}, [
		W,
		G,
		Z,
		J,
		DI
	]);
	let kI = React.useMemo(() => ({
		reference: K,
		floating: q,
		setReference: V,
		setFloating: H
	}), [V, H]), AI = React.useMemo(() => ({
		reference: W,
		floating: G
	}), [W, G]), jI = React.useMemo(() => {
		let m = {
			position: C,
			left: 0,
			top: 0
		};
		if (!AI.floating) return m;
		let x = roundByDPR(AI.floating, N.x), S = roundByDPR(AI.floating, N.y);
		return A ? {
			...m,
			transform: "translate(" + x + "px, " + S + "px)",
			...getDPR(AI.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: C,
			left: x,
			top: S
		};
	}, [
		C,
		A,
		AI.floating,
		N.x,
		N.y
	]);
	return React.useMemo(() => ({
		...N,
		update: Z,
		refs: kI,
		elements: AI,
		floatingStyles: jI
	}), [
		N,
		Z,
		kI,
		AI,
		jI
	]);
}
var arrow$1$1 = (m) => {
	function x(m) {
		return {}.hasOwnProperty.call(m, "current");
	}
	return {
		name: "arrow",
		options: m,
		fn(S) {
			let { element: C, padding: T } = typeof m == "function" ? m(S) : m;
			return C && x(C) ? C.current == null ? {} : arrow$1({
				element: C.current,
				padding: T
			}).fn(S) : C ? arrow$1({
				element: C,
				padding: T
			}).fn(S) : {};
		}
	};
}, offset = (m, x) => ({
	...offset$1(m),
	options: [m, x]
}), shift = (m, x) => ({
	...shift$1(m),
	options: [m, x]
}), limitShift = (m, x) => ({
	...limitShift$1(m),
	options: [m, x]
}), flip = (m, x) => ({
	...flip$1(m),
	options: [m, x]
}), size = (m, x) => ({
	...size$1(m),
	options: [m, x]
}), hide = (m, x) => ({
	...hide$1(m),
	options: [m, x]
}), arrow = (m, x) => ({
	...arrow$1$1(m),
	options: [m, x]
}), NAME$1 = "Arrow", Arrow$1 = React.forwardRef((m, x) => {
	let { children: S, width: C = 10, height: T = 5, ...D } = m;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...D,
		ref: x,
		width: C,
		height: T,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: m.asChild ? S : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME$1;
var Root = Arrow$1;
function useSize(x) {
	let [S, C] = React.useState(void 0);
	return useLayoutEffect2(() => {
		if (x) {
			C({
				width: x.offsetWidth,
				height: x.offsetHeight
			});
			let m = new ResizeObserver((m) => {
				if (!Array.isArray(m) || !m.length) return;
				let S = m[0], T, D;
				if ("borderBoxSize" in S) {
					let m = S.borderBoxSize, x = Array.isArray(m) ? m[0] : m;
					T = x.inlineSize, D = x.blockSize;
				} else T = x.offsetWidth, D = x.offsetHeight;
				C({
					width: T,
					height: D
				});
			});
			return m.observe(x, { box: "border-box" }), () => m.unobserve(x);
		} else C(void 0);
	}, [x]), S;
}
var POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (x) => {
	let { __scopePopper: S, children: C } = x, [T, D] = React.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: S,
		anchor: T,
		onAnchorChange: D,
		children: C
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor", PopperAnchor = React.forwardRef((x, S) => {
	let { __scopePopper: C, virtualRef: T, ...D } = x, O = usePopperContext(ANCHOR_NAME, C), k = React.useRef(null), A = useComposedRefs(S, k), j = React.useRef(null);
	return React.useEffect(() => {
		let m = j.current;
		j.current = T?.current || k.current, m !== j.current && O.onAnchorChange(j.current);
	}), T ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...D,
		ref: A
	});
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME$1 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$1), PopperContent = React.forwardRef((x, S) => {
	let { __scopePopper: C, side: T = "bottom", sideOffset: D = 0, align: O = "center", alignOffset: k = 0, arrowPadding: A = 0, avoidCollisions: j = !0, collisionBoundary: M = [], collisionPadding: N = 0, sticky: P = "partial", hideWhenDetached: F = !1, updatePositionStrategy: I = "optimized", onPlaced: L, ...R } = x, z = usePopperContext(CONTENT_NAME$1, C), [B, V] = React.useState(null), H = useComposedRefs(S, (m) => V(m)), [U, W] = React.useState(null), G = useSize(U), K = G?.width ?? 0, q = G?.height ?? 0, DI = T + (O === "center" ? "" : "-" + O), J = typeof N == "number" ? N : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...N
	}, Y = Array.isArray(M) ? M : [M], X = Y.length > 0, Z = {
		padding: J,
		boundary: Y.filter(isNotNull$2),
		altBoundary: X
	}, { refs: OI, floatingStyles: kI, placement: AI, isPositioned: jI, middlewareData: MI } = useFloating({
		strategy: "fixed",
		placement: DI,
		whileElementsMounted: (...m) => autoUpdate(...m, { animationFrame: I === "always" }),
		elements: { reference: z.anchor },
		middleware: [
			offset({
				mainAxis: D + q,
				alignmentAxis: k
			}),
			j && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: P === "partial" ? limitShift() : void 0,
				...Z
			}),
			j && flip({ ...Z }),
			size({
				...Z,
				apply: ({ elements: m, rects: x, availableWidth: S, availableHeight: C }) => {
					let { width: T, height: D } = x.reference, O = m.floating.style;
					O.setProperty("--radix-popper-available-width", `${S}px`), O.setProperty("--radix-popper-available-height", `${C}px`), O.setProperty("--radix-popper-anchor-width", `${T}px`), O.setProperty("--radix-popper-anchor-height", `${D}px`);
				}
			}),
			U && arrow({
				element: U,
				padding: A
			}),
			transformOrigin({
				arrowWidth: K,
				arrowHeight: q
			}),
			F && hide({
				strategy: "referenceHidden",
				...Z
			})
		]
	}), [NI, Q] = getSideAndAlignFromPlacement(AI), PI = useCallbackRef(L);
	useLayoutEffect2(() => {
		jI && PI?.();
	}, [jI, PI]);
	let $ = MI.arrow?.x, FI = MI.arrow?.y, II = MI.arrow?.centerOffset !== 0, [LI, RI] = React.useState();
	return useLayoutEffect2(() => {
		B && RI(window.getComputedStyle(B).zIndex);
	}, [B]), /* @__PURE__ */ jsx("div", {
		ref: OI.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...kI,
			transform: jI ? kI.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: LI,
			"--radix-popper-transform-origin": [MI.transformOrigin?.x, MI.transformOrigin?.y].join(" "),
			...MI.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: x.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: C,
			placedSide: NI,
			onArrowChange: W,
			arrowX: $,
			arrowY: FI,
			shouldHideArrow: II,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": NI,
				"data-align": Q,
				...R,
				ref: H,
				style: {
					...R.style,
					animation: jI ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$1;
var ARROW_NAME$1 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React.forwardRef(function(m, x) {
	let { __scopePopper: S, ...C } = m, T = useContentContext(ARROW_NAME$1, S), D = OPPOSITE_SIDE[T.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: T.onArrowChange,
		style: {
			position: "absolute",
			left: T.arrowX,
			top: T.arrowY,
			[D]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[T.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[T.placedSide],
			visibility: T.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root, {
			...C,
			ref: x,
			style: {
				...C.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$1;
function isNotNull$2(m) {
	return m !== null;
}
var transformOrigin = (m) => ({
	name: "transformOrigin",
	options: m,
	fn(x) {
		let { placement: S, rects: C, middlewareData: T } = x, D = T.arrow?.centerOffset !== 0, O = D ? 0 : m.arrowWidth, k = D ? 0 : m.arrowHeight, [A, j] = getSideAndAlignFromPlacement(S), M = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[j], N = (T.arrow?.x ?? 0) + O / 2, P = (T.arrow?.y ?? 0) + k / 2, F = "", I = "";
		return A === "bottom" ? (F = D ? M : `${N}px`, I = `${-k}px`) : A === "top" ? (F = D ? M : `${N}px`, I = `${C.floating.height + k}px`) : A === "right" ? (F = `${-k}px`, I = D ? M : `${P}px`) : A === "left" && (F = `${C.floating.width + k}px`, I = D ? M : `${P}px`), { data: {
			x: F,
			y: I
		} };
	}
});
function getSideAndAlignFromPlacement(m) {
	let [x, S = "center"] = m.split("-");
	return [x, S];
}
var Root2$1 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow, PORTAL_NAME$1 = "Portal", Portal = React.forwardRef((x, S) => {
	let { container: C, ...T } = x, [D, O] = React.useState(!1);
	useLayoutEffect2(() => O(!0), []);
	let k = C || D && globalThis?.document?.body;
	return k ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...T,
		ref: S
	}), k) : null;
});
Portal.displayName = PORTAL_NAME$1;
var useInsertionEffect$1 = React.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: x, defaultProp: S, onChange: C = () => {}, caller: T }) {
	let [D, O, k] = useUncontrolledState({
		defaultProp: S,
		onChange: C
	}), A = x !== void 0, j = A ? x : D;
	{
		let S = React.useRef(x !== void 0);
		React.useEffect(() => {
			let m = S.current;
			if (m !== A) {
				let x = m ? "controlled" : "uncontrolled", S = A ? "controlled" : "uncontrolled";
				console.warn(`${T} is changing from ${x} to ${S}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			S.current = A;
		}, [A, T]);
	}
	return [j, React.useCallback((m) => {
		if (A) {
			let S = isFunction(m) ? m(x) : m;
			S !== x && k.current?.(S);
		} else O(m);
	}, [
		A,
		x,
		O,
		k
	])];
}
function useUncontrolledState({ defaultProp: x, onChange: S }) {
	let [C, T] = React.useState(x), D = React.useRef(C), O = React.useRef(S);
	return useInsertionEffect$1(() => {
		O.current = S;
	}, [S]), React.useEffect(() => {
		D.current !== C && (O.current?.(C), D.current = C);
	}, [C, D]), [
		C,
		T,
		O
	];
}
function isFunction(m) {
	return typeof m == "function";
}
function usePrevious(x) {
	let S = React.useRef({
		value: x,
		previous: x
	});
	return React.useMemo(() => (S.current.value !== x && (S.current.previous = S.current.value, S.current.value = x), S.current.previous), [x]);
}
var VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), NAME = "VisuallyHidden", VisuallyHidden = React.forwardRef((m, x) => /* @__PURE__ */ jsx(Primitive.span, {
	...m,
	ref: x,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...m.style
	}
}));
VisuallyHidden.displayName = NAME;
var getDefaultParent = function(m) {
	return typeof document > "u" ? null : (Array.isArray(m) ? m[0] : m).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(m) {
	return m && (m.host || unwrapHost(m.parentNode));
}, correctTargets = function(m, x) {
	return x.map(function(x) {
		if (m.contains(x)) return x;
		var S = unwrapHost(x);
		return S && m.contains(S) ? S : (console.error("aria-hidden", x, "in not contained inside", m, ". Doing nothing"), null);
	}).filter(function(m) {
		return !!m;
	});
}, applyAttributeToOthers = function(m, x, S, C) {
	var T = correctTargets(x, Array.isArray(m) ? m : [m]);
	markerMap[S] || (markerMap[S] = /* @__PURE__ */ new WeakMap());
	var D = markerMap[S], O = [], k = /* @__PURE__ */ new Set(), A = new Set(T), j = function(m) {
		!m || k.has(m) || (k.add(m), j(m.parentNode));
	};
	T.forEach(j);
	var M = function(m) {
		!m || A.has(m) || Array.prototype.forEach.call(m.children, function(m) {
			if (k.has(m)) M(m);
			else try {
				var x = m.getAttribute(C), T = x !== null && x !== "false", A = (counterMap.get(m) || 0) + 1, j = (D.get(m) || 0) + 1;
				counterMap.set(m, A), D.set(m, j), O.push(m), A === 1 && T && uncontrolledNodes.set(m, !0), j === 1 && m.setAttribute(S, "true"), T || m.setAttribute(C, "true");
			} catch (x) {
				console.error("aria-hidden: cannot operate on ", m, x);
			}
		});
	};
	return M(x), k.clear(), lockCount++, function() {
		O.forEach(function(m) {
			var x = counterMap.get(m) - 1, T = D.get(m) - 1;
			counterMap.set(m, x), D.set(m, T), x || (uncontrolledNodes.has(m) || m.removeAttribute(C), uncontrolledNodes.delete(m)), T || m.removeAttribute(S);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(m, x, S) {
	S === void 0 && (S = "data-aria-hidden");
	var C = Array.from(Array.isArray(m) ? m : [m]), T = x || getDefaultParent(m);
	return T ? (C.push.apply(C, Array.from(T.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(C, T, S, "aria-hidden")) : function() {
		return null;
	};
}, __assign = function() {
	return __assign = Object.assign || function(m) {
		for (var x, S = 1, C = arguments.length; S < C; S++) for (var T in x = arguments[S], x) Object.prototype.hasOwnProperty.call(x, T) && (m[T] = x[T]);
		return m;
	}, __assign.apply(this, arguments);
};
function __rest(m, x) {
	var S = {};
	for (var C in m) Object.prototype.hasOwnProperty.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && typeof Object.getOwnPropertySymbols == "function") for (var T = 0, C = Object.getOwnPropertySymbols(m); T < C.length; T++) x.indexOf(C[T]) < 0 && Object.prototype.propertyIsEnumerable.call(m, C[T]) && (S[C[T]] = m[C[T]]);
	return S;
}
function __spreadArray(m, x, S) {
	if (S || arguments.length === 2) for (var C = 0, T = x.length, D; C < T; C++) (D || !(C in x)) && (D ||= Array.prototype.slice.call(x, 0, C), D[C] = x[C]);
	return m.concat(D || Array.prototype.slice.call(x));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef$1(m, x) {
	return typeof m == "function" ? m(x) : m && (m.current = x), m;
}
function useCallbackRef$1(m, x) {
	var S = useState(function() {
		return {
			value: m,
			callback: x,
			facade: {
				get current() {
					return S.value;
				},
				set current(m) {
					var x = S.value;
					x !== m && (S.value = m, S.callback(m, x));
				}
			}
		};
	})[0];
	return S.callback = x, S.facade;
}
var useIsomorphicLayoutEffect$2 = typeof window < "u" ? React.useLayoutEffect : React.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(m, x) {
	var S = useCallbackRef$1(x || null, function(x) {
		return m.forEach(function(m) {
			return assignRef$1(m, x);
		});
	});
	return useIsomorphicLayoutEffect$2(function() {
		var x = currentValues.get(S);
		if (x) {
			var C = new Set(x), T = new Set(m), D = S.current;
			C.forEach(function(m) {
				T.has(m) || assignRef$1(m, null);
			}), T.forEach(function(m) {
				C.has(m) || assignRef$1(m, D);
			});
		}
		currentValues.set(S, m);
	}, [m]), S;
}
function ItoI(m) {
	return m;
}
function innerCreateMedium(m, x) {
	x === void 0 && (x = ItoI);
	var S = [], C = !1;
	return {
		read: function() {
			if (C) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return S.length ? S[S.length - 1] : m;
		},
		useMedium: function(m) {
			var T = x(m, C);
			return S.push(T), function() {
				S = S.filter(function(m) {
					return m !== T;
				});
			};
		},
		assignSyncMedium: function(m) {
			for (C = !0; S.length;) {
				var x = S;
				S = [], x.forEach(m);
			}
			S = {
				push: function(x) {
					return m(x);
				},
				filter: function() {
					return S;
				}
			};
		},
		assignMedium: function(m) {
			C = !0;
			var x = [];
			if (S.length) {
				var T = S;
				S = [], T.forEach(m), x = S;
			}
			var D = function() {
				var S = x;
				x = [], S.forEach(m);
			}, O = function() {
				return Promise.resolve().then(D);
			};
			O(), S = {
				push: function(m) {
					x.push(m), O();
				},
				filter: function(m) {
					return x = x.filter(m), S;
				}
			};
		}
	};
}
function createSidecarMedium(m) {
	m === void 0 && (m = {});
	var x = innerCreateMedium(null);
	return x.options = __assign({
		async: !0,
		ssr: !1
	}, m), x;
}
var SideCar = function(x) {
	var S = x.sideCar, C = __rest(x, ["sideCar"]);
	if (!S) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var T = S.read();
	if (!T) throw Error("Sidecar medium not found");
	return React.createElement(T, __assign({}, C));
};
SideCar.isSideCarExport = !0;
function exportSidecar(m, x) {
	return m.useMedium(x), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React.forwardRef(function(x, S) {
	var C = React.useRef(null), T = React.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), D = T[0], O = T[1], k = x.forwardProps, A = x.children, j = x.className, M = x.removeScrollBar, N = x.enabled, P = x.shards, F = x.sideCar, I = x.noRelative, L = x.noIsolation, R = x.inert, z = x.allowPinchZoom, B = x.as, V = B === void 0 ? "div" : B, H = x.gapMode, U = __rest(x, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), W = F, G = useMergeRefs([C, S]), K = __assign(__assign({}, U), D);
	return React.createElement(React.Fragment, null, N && React.createElement(W, {
		sideCar: effectCar,
		removeScrollBar: M,
		shards: P,
		noRelative: I,
		noIsolation: L,
		inert: R,
		setCallbacks: O,
		allowPinchZoom: !!z,
		lockRef: C,
		gapMode: H
	}), k ? React.cloneElement(React.Children.only(A), __assign(__assign({}, K), { ref: G })) : React.createElement(V, __assign({}, K, {
		className: j,
		ref: G
	}), A));
});
RemoveScroll.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var currentNonce, getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function makeStyleTag() {
	if (!document) return null;
	var m = document.createElement("style");
	m.type = "text/css";
	var x = getNonce();
	return x && m.setAttribute("nonce", x), m;
}
function injectStyles(m, x) {
	m.styleSheet ? m.styleSheet.cssText = x : m.appendChild(document.createTextNode(x));
}
function insertStyleTag(m) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(m);
}
var stylesheetSingleton = function() {
	var m = 0, x = null;
	return {
		add: function(S) {
			m == 0 && (x = makeStyleTag()) && (injectStyles(x, S), insertStyleTag(x)), m++;
		},
		remove: function() {
			m--, !m && x && (x.parentNode && x.parentNode.removeChild(x), x = null);
		}
	};
}, styleHookSingleton = function() {
	var x = stylesheetSingleton();
	return function(S, C) {
		React.useEffect(function() {
			return x.add(S), function() {
				x.remove();
			};
		}, [S && C]);
	};
}, styleSingleton = function() {
	var m = styleHookSingleton();
	return function(x) {
		var S = x.styles, C = x.dynamic;
		return m(S, C), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse$1 = function(m) {
	return parseInt(m || "", 10) || 0;
}, getOffset = function(m) {
	var x = window.getComputedStyle(document.body), S = x[m === "padding" ? "paddingLeft" : "marginLeft"], C = x[m === "padding" ? "paddingTop" : "marginTop"], T = x[m === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse$1(S),
		parse$1(C),
		parse$1(T)
	];
}, getGapWidth = function(m) {
	if (m === void 0 && (m = "margin"), typeof window > "u") return zeroGap;
	var x = getOffset(m), S = document.documentElement.clientWidth, C = window.innerWidth;
	return {
		left: x[0],
		top: x[1],
		right: x[2],
		gap: Math.max(0, C - S + x[2] - x[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles$1 = function(m, x, S, C) {
	var T = m.left, D = m.top, O = m.right, k = m.gap;
	return S === void 0 && (S = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${C};
   padding-right: ${k}px ${C};
  }
  body[${lockAttribute}] {
    overflow: hidden ${C};
    overscroll-behavior: contain;
    ${[
		x && `position: relative ${C};`,
		S === "margin" && `
    padding-left: ${T}px;
    padding-top: ${D}px;
    padding-right: ${O}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${k}px ${C};
    `,
		S === "padding" && `padding-right: ${k}px ${C};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${k}px ${C};
  }
  
  .${fullWidthClassName} {
    margin-right: ${k}px ${C};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${C};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${C};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${k}px;
  }
`;
}, getCurrentUseCounter = function() {
	var m = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(m) ? m : 0;
}, useLockAttribute = function() {
	React.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var m = getCurrentUseCounter() - 1;
			m <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, m.toString());
		};
	}, []);
}, RemoveScrollBar = function(x) {
	var S = x.noRelative, C = x.noImportant, T = x.gapMode, D = T === void 0 ? "margin" : T;
	useLockAttribute();
	var O = React.useMemo(function() {
		return getGapWidth(D);
	}, [D]);
	return React.createElement(Style, { styles: getStyles$1(O, !S, D, C ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options$1 = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options$1, options$1), window.removeEventListener("test", options$1, options$1);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(m) {
	return m.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(m, x) {
	if (!(m instanceof Element)) return !1;
	var S = window.getComputedStyle(m);
	return S[x] !== "hidden" && !(S.overflowY === S.overflowX && !alwaysContainsScroll(m) && S[x] === "visible");
}, elementCouldBeVScrolled = function(m) {
	return elementCanBeScrolled(m, "overflowY");
}, elementCouldBeHScrolled = function(m) {
	return elementCanBeScrolled(m, "overflowX");
}, locationCouldBeScrolled = function(m, x) {
	var S = x.ownerDocument, C = x;
	do {
		if (typeof ShadowRoot < "u" && C instanceof ShadowRoot && (C = C.host), elementCouldBeScrolled(m, C)) {
			var T = getScrollVariables(m, C);
			if (T[1] > T[2]) return !0;
		}
		C = C.parentNode;
	} while (C && C !== S.body);
	return !1;
}, getVScrollVariables = function(m) {
	return [
		m.scrollTop,
		m.scrollHeight,
		m.clientHeight
	];
}, getHScrollVariables = function(m) {
	return [
		m.scrollLeft,
		m.scrollWidth,
		m.clientWidth
	];
}, elementCouldBeScrolled = function(m, x) {
	return m === "v" ? elementCouldBeVScrolled(x) : elementCouldBeHScrolled(x);
}, getScrollVariables = function(m, x) {
	return m === "v" ? getVScrollVariables(x) : getHScrollVariables(x);
}, getDirectionFactor = function(m, x) {
	return m === "h" && x === "rtl" ? -1 : 1;
}, handleScroll = function(m, x, S, C, T) {
	var D = getDirectionFactor(m, window.getComputedStyle(x).direction), O = D * C, k = S.target, A = x.contains(k), j = !1, M = O > 0, N = 0, P = 0;
	do {
		if (!k) break;
		var F = getScrollVariables(m, k), I = F[0], L = F[1] - F[2] - D * I;
		(I || L) && elementCouldBeScrolled(m, k) && (N += L, P += I);
		var R = k.parentNode;
		k = R && R.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? R.host : R;
	} while (!A && k !== document.body || A && (x.contains(k) || x === k));
	return (M && (T && Math.abs(N) < 1 || !T && O > N) || !M && (T && Math.abs(P) < 1 || !T && -O > P)) && (j = !0), j;
}, getTouchXY = function(m) {
	return "changedTouches" in m ? [m.changedTouches[0].clientX, m.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(m) {
	return [m.deltaX, m.deltaY];
}, extractRef = function(m) {
	return m && "current" in m ? m.current : m;
}, deltaCompare = function(m, x) {
	return m[0] === x[0] && m[1] === x[1];
}, generateStyle = function(m) {
	return `
  .block-interactivity-${m} {pointer-events: none;}
  .allow-interactivity-${m} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(x) {
	var S = React.useRef([]), C = React.useRef([0, 0]), T = React.useRef(), D = React.useState(idCounter++)[0], O = React.useState(styleSingleton)[0], k = React.useRef(x);
	React.useEffect(function() {
		k.current = x;
	}, [x]), React.useEffect(function() {
		if (x.inert) {
			document.body.classList.add(`block-interactivity-${D}`);
			var m = __spreadArray([x.lockRef.current], (x.shards || []).map(extractRef), !0).filter(Boolean);
			return m.forEach(function(m) {
				return m.classList.add(`allow-interactivity-${D}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${D}`), m.forEach(function(m) {
					return m.classList.remove(`allow-interactivity-${D}`);
				});
			};
		}
	}, [
		x.inert,
		x.lockRef.current,
		x.shards
	]);
	var A = React.useCallback(function(m, x) {
		if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !k.current.allowPinchZoom;
		var S = getTouchXY(m), D = C.current, O = "deltaX" in m ? m.deltaX : D[0] - S[0], A = "deltaY" in m ? m.deltaY : D[1] - S[1], j, M = m.target, N = Math.abs(O) > Math.abs(A) ? "h" : "v";
		if ("touches" in m && N === "h" && M.type === "range") return !1;
		var P = window.getSelection(), F = P && P.anchorNode;
		if (F && (F === M || F.contains(M))) return !1;
		var I = locationCouldBeScrolled(N, M);
		if (!I) return !0;
		if (I ? j = N : (j = N === "v" ? "h" : "v", I = locationCouldBeScrolled(N, M)), !I) return !1;
		if (!T.current && "changedTouches" in m && (O || A) && (T.current = j), !j) return !0;
		var L = T.current || j;
		return handleScroll(L, x, m, L === "h" ? O : A, !0);
	}, []), j = React.useCallback(function(m) {
		var x = m;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== O)) {
			var C = "deltaY" in x ? getDeltaXY(x) : getTouchXY(x), T = S.current.filter(function(m) {
				return m.name === x.type && (m.target === x.target || x.target === m.shadowParent) && deltaCompare(m.delta, C);
			})[0];
			if (T && T.should) {
				x.cancelable && x.preventDefault();
				return;
			}
			if (!T) {
				var D = (k.current.shards || []).map(extractRef).filter(Boolean).filter(function(m) {
					return m.contains(x.target);
				});
				(D.length > 0 ? A(x, D[0]) : !k.current.noIsolation) && x.cancelable && x.preventDefault();
			}
		}
	}, []), M = React.useCallback(function(m, x, C, T) {
		var D = {
			name: m,
			delta: x,
			target: C,
			should: T,
			shadowParent: getOutermostShadowParent(C)
		};
		S.current.push(D), setTimeout(function() {
			S.current = S.current.filter(function(m) {
				return m !== D;
			});
		}, 1);
	}, []), N = React.useCallback(function(m) {
		C.current = getTouchXY(m), T.current = void 0;
	}, []), P = React.useCallback(function(m) {
		M(m.type, getDeltaXY(m), m.target, A(m, x.lockRef.current));
	}, []), F = React.useCallback(function(m) {
		M(m.type, getTouchXY(m), m.target, A(m, x.lockRef.current));
	}, []);
	React.useEffect(function() {
		return lockStack.push(O), x.setCallbacks({
			onScrollCapture: P,
			onWheelCapture: P,
			onTouchMoveCapture: F
		}), document.addEventListener("wheel", j, nonPassive), document.addEventListener("touchmove", j, nonPassive), document.addEventListener("touchstart", N, nonPassive), function() {
			lockStack = lockStack.filter(function(m) {
				return m !== O;
			}), document.removeEventListener("wheel", j, nonPassive), document.removeEventListener("touchmove", j, nonPassive), document.removeEventListener("touchstart", N, nonPassive);
		};
	}, []);
	var I = x.removeScrollBar, L = x.inert;
	return React.createElement(React.Fragment, null, L ? React.createElement(O, { styles: generateStyle(D) }) : null, I ? React.createElement(RemoveScrollBar, {
		noRelative: x.noRelative,
		gapMode: x.gapMode
	}) : null);
}
function getOutermostShadowParent(m) {
	for (var x = null; m !== null;) m instanceof ShadowRoot && (x = m.host, m = m.host), m = m.parentNode;
	return x;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React.forwardRef(function(x, S) {
	return React.createElement(RemoveScroll, __assign({}, x, {
		ref: S,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select$1 = (x) => {
	let { __scopeSelect: S, children: C, open: T, defaultOpen: D, onOpenChange: O, value: k, defaultValue: A, onValueChange: j, dir: M, name: N, autoComplete: P, disabled: F, required: I, form: L } = x, R = usePopperScope(S), [z, B] = React.useState(null), [V, H] = React.useState(null), [U, W] = React.useState(!1), G = useDirection(M), [K, q] = useControllableState({
		prop: T,
		defaultProp: D ?? !1,
		onChange: O,
		caller: SELECT_NAME
	}), [J, Y] = useControllableState({
		prop: k,
		defaultProp: A,
		onChange: j,
		caller: SELECT_NAME
	}), X = React.useRef(null), Z = z ? L || !!z.closest("form") : !0, [OI, kI] = React.useState(/* @__PURE__ */ new Set()), AI = Array.from(OI).map((m) => m.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$1, {
		...R,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: I,
			scope: S,
			trigger: z,
			onTriggerChange: B,
			valueNode: V,
			onValueNodeChange: H,
			valueNodeHasChildren: U,
			onValueNodeHasChildrenChange: W,
			contentId: useId$1(),
			value: J,
			onValueChange: Y,
			open: K,
			onOpenChange: q,
			dir: G,
			triggerPointerDownPosRef: X,
			disabled: F,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: S,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: x.__scopeSelect,
					onNativeOptionAdd: React.useCallback((m) => {
						kI((x) => new Set(x).add(m));
					}, []),
					onNativeOptionRemove: React.useCallback((m) => {
						kI((x) => {
							let S = new Set(x);
							return S.delete(m), S;
						});
					}, []),
					children: C
				})
			}), Z ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: I,
				tabIndex: -1,
				name: N,
				autoComplete: P,
				value: J,
				onChange: (m) => Y(m.target.value),
				disabled: F,
				form: L,
				children: [J === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(OI)]
			}, AI) : null]
		})
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger", SelectTrigger$1 = React.forwardRef((x, S) => {
	let { __scopeSelect: C, disabled: T = !1, ...D } = x, O = usePopperScope(C), k = useSelectContext(TRIGGER_NAME, C), A = k.disabled || T, j = useComposedRefs(S, k.onTriggerChange), M = useCollection(C), N = React.useRef("touch"), [P, F, I] = useTypeaheadSearch((m) => {
		let x = M().filter((m) => !m.disabled), S = findNextItem(x, m, x.find((m) => m.value === k.value));
		S !== void 0 && k.onValueChange(S.value);
	}), L = (m) => {
		A || (k.onOpenChange(!0), I()), m && (k.triggerPointerDownPosRef.current = {
			x: Math.round(m.pageX),
			y: Math.round(m.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...O,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": k.contentId,
			"aria-expanded": k.open,
			"aria-required": k.required,
			"aria-autocomplete": "none",
			dir: k.dir,
			"data-state": k.open ? "open" : "closed",
			disabled: A,
			"data-disabled": A ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(k.value) ? "" : void 0,
			...D,
			ref: j,
			onClick: composeEventHandlers(D.onClick, (m) => {
				m.currentTarget.focus(), N.current !== "mouse" && L(m);
			}),
			onPointerDown: composeEventHandlers(D.onPointerDown, (m) => {
				N.current = m.pointerType;
				let x = m.target;
				x.hasPointerCapture(m.pointerId) && x.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (L(m), m.preventDefault());
			}),
			onKeyDown: composeEventHandlers(D.onKeyDown, (m) => {
				let x = P.current !== "";
				!(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && F(m.key), !(x && m.key === " ") && OPEN_KEYS.includes(m.key) && (L(), m.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue", SelectValue$1 = React.forwardRef((m, x) => {
	let { __scopeSelect: S, className: C, style: T, children: D, placeholder: O = "", ...k } = m, A = useSelectContext(VALUE_NAME, S), { onValueNodeHasChildrenChange: j } = A, M = D !== void 0, N = useComposedRefs(x, A.onValueNodeChange);
	return useLayoutEffect2(() => {
		j(M);
	}, [j, M]), /* @__PURE__ */ jsx(Primitive.span, {
		...k,
		ref: N,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(A.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: O }) : D
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React.forwardRef((m, x) => {
	let { __scopeSelect: S, children: C, ...T } = m;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...T,
		ref: x,
		children: C || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal", SelectPortal = (m) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...m
});
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent", SelectContent$1 = React.forwardRef((x, S) => {
	let C = useSelectContext(CONTENT_NAME, x.__scopeSelect), [T, D] = React.useState();
	if (useLayoutEffect2(() => {
		D(new DocumentFragment());
	}, []), !C.open) {
		let m = T;
		return m ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: x.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: x.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: x.children })
			})
		}), m) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...x,
		ref: S
	});
});
SelectContent$1.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll"), SelectContentImpl = React.forwardRef((x, S) => {
	let { __scopeSelect: C, position: T = "item-aligned", onCloseAutoFocus: D, onEscapeKeyDown: O, onPointerDownOutside: k, side: A, sideOffset: j, align: M, alignOffset: N, arrowPadding: P, collisionBoundary: F, collisionPadding: I, sticky: L, hideWhenDetached: R, avoidCollisions: z, ...B } = x, V = useSelectContext(CONTENT_NAME, C), [H, U] = React.useState(null), [W, G] = React.useState(null), K = useComposedRefs(S, (m) => U(m)), [q, DI] = React.useState(null), [J, Y] = React.useState(null), X = useCollection(C), [Z, OI] = React.useState(!1), kI = React.useRef(!1);
	React.useEffect(() => {
		if (H) return hideOthers(H);
	}, [H]), useFocusGuards();
	let AI = React.useCallback((m) => {
		let [x, ...S] = X().map((m) => m.ref.current), [C] = S.slice(-1), T = document.activeElement;
		for (let S of m) if (S === T || (S?.scrollIntoView({ block: "nearest" }), S === x && W && (W.scrollTop = 0), S === C && W && (W.scrollTop = W.scrollHeight), S?.focus(), document.activeElement !== T)) return;
	}, [X, W]), jI = React.useCallback(() => AI([q, H]), [
		AI,
		q,
		H
	]);
	React.useEffect(() => {
		Z && jI();
	}, [Z, jI]);
	let { onOpenChange: MI, triggerPointerDownPosRef: NI } = V;
	React.useEffect(() => {
		if (H) {
			let m = {
				x: 0,
				y: 0
			}, x = (x) => {
				m = {
					x: Math.abs(Math.round(x.pageX) - (NI.current?.x ?? 0)),
					y: Math.abs(Math.round(x.pageY) - (NI.current?.y ?? 0))
				};
			}, S = (S) => {
				m.x <= 10 && m.y <= 10 ? S.preventDefault() : H.contains(S.target) || MI(!1), document.removeEventListener("pointermove", x), NI.current = null;
			};
			return NI.current !== null && (document.addEventListener("pointermove", x), document.addEventListener("pointerup", S, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", S, { capture: !0 });
			};
		}
	}, [
		H,
		MI,
		NI
	]), React.useEffect(() => {
		let m = () => MI(!1);
		return window.addEventListener("blur", m), window.addEventListener("resize", m), () => {
			window.removeEventListener("blur", m), window.removeEventListener("resize", m);
		};
	}, [MI]);
	let [Q, PI] = useTypeaheadSearch((m) => {
		let x = X().filter((m) => !m.disabled), S = findNextItem(x, m, x.find((m) => m.ref.current === document.activeElement));
		S && setTimeout(() => S.ref.current.focus());
	}), $ = React.useCallback((m, x, S) => {
		let C = !kI.current && !S;
		(V.value !== void 0 && V.value === x || C) && (DI(m), C && (kI.current = !0));
	}, [V.value]), FI = React.useCallback(() => H?.focus(), [H]), LI = React.useCallback((m, x, S) => {
		let C = !kI.current && !S;
		(V.value !== void 0 && V.value === x || C) && Y(m);
	}, [V.value]), RI = T === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, zI = RI === SelectPopperPosition ? {
		side: A,
		sideOffset: j,
		align: M,
		alignOffset: N,
		arrowPadding: P,
		collisionBoundary: F,
		collisionPadding: I,
		sticky: L,
		hideWhenDetached: R,
		avoidCollisions: z
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: C,
		content: H,
		viewport: W,
		onViewportChange: G,
		itemRefCallback: $,
		selectedItem: q,
		onItemLeave: FI,
		itemTextRefCallback: LI,
		focusSelectedItem: jI,
		selectedItemText: J,
		position: T,
		isPositioned: Z,
		searchRef: Q,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: V.open,
				onMountAutoFocus: (m) => {
					m.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(D, (m) => {
					V.trigger?.focus({ preventScroll: !0 }), m.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: O,
					onPointerDownOutside: k,
					onFocusOutside: (m) => m.preventDefault(),
					onDismiss: () => V.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(RI, {
						role: "listbox",
						id: V.contentId,
						"data-state": V.open ? "open" : "closed",
						dir: V.dir,
						onContextMenu: (m) => m.preventDefault(),
						...B,
						...zI,
						onPlaced: () => OI(!0),
						ref: K,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...B.style
						},
						onKeyDown: composeEventHandlers(B.onKeyDown, (m) => {
							let x = m.ctrlKey || m.altKey || m.metaKey;
							if (m.key === "Tab" && m.preventDefault(), !x && m.key.length === 1 && PI(m.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(m.key)) {
								let x = X().filter((m) => !m.disabled).map((m) => m.ref.current);
								if (["ArrowUp", "End"].includes(m.key) && (x = x.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m.key)) {
									let S = m.target, C = x.indexOf(S);
									x = x.slice(C + 1);
								}
								setTimeout(() => AI(x)), m.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React.forwardRef((x, S) => {
	let { __scopeSelect: C, onPlaced: T, ...D } = x, O = useSelectContext(CONTENT_NAME, C), k = useSelectContentContext(CONTENT_NAME, C), [A, j] = React.useState(null), [M, N] = React.useState(null), P = useComposedRefs(S, (m) => N(m)), F = useCollection(C), I = React.useRef(!1), L = React.useRef(!0), { viewport: R, selectedItem: z, selectedItemText: B, focusSelectedItem: V } = k, H = React.useCallback(() => {
		if (O.trigger && O.valueNode && A && M && R && z && B) {
			let m = O.trigger.getBoundingClientRect(), x = M.getBoundingClientRect(), S = O.valueNode.getBoundingClientRect(), C = B.getBoundingClientRect();
			if (O.dir !== "rtl") {
				let T = C.left - x.left, D = S.left - T, O = m.left - D, k = m.width + O, j = Math.max(k, x.width), M = window.innerWidth - CONTENT_MARGIN, N = clamp$1(D, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, M - j)]);
				A.style.minWidth = k + "px", A.style.left = N + "px";
			} else {
				let T = x.right - C.right, D = window.innerWidth - S.right - T, O = window.innerWidth - m.right - D, k = m.width + O, j = Math.max(k, x.width), M = window.innerWidth - CONTENT_MARGIN, N = clamp$1(D, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, M - j)]);
				A.style.minWidth = k + "px", A.style.right = N + "px";
			}
			let D = F(), k = window.innerHeight - CONTENT_MARGIN * 2, j = R.scrollHeight, N = window.getComputedStyle(M), P = parseInt(N.borderTopWidth, 10), L = parseInt(N.paddingTop, 10), V = parseInt(N.borderBottomWidth, 10), H = parseInt(N.paddingBottom, 10), U = P + L + j + H + V, W = Math.min(z.offsetHeight * 5, U), G = window.getComputedStyle(R), K = parseInt(G.paddingTop, 10), q = parseInt(G.paddingBottom, 10), EI = m.top + m.height / 2 - CONTENT_MARGIN, DI = k - EI, J = z.offsetHeight / 2, Y = z.offsetTop + J, X = P + L + Y, Z = U - X;
			if (X <= EI) {
				let m = D.length > 0 && z === D[D.length - 1].ref.current;
				A.style.bottom = "0px";
				let x = M.clientHeight - R.offsetTop - R.offsetHeight, S = X + Math.max(DI, J + (m ? q : 0) + x + V);
				A.style.height = S + "px";
			} else {
				let m = D.length > 0 && z === D[0].ref.current;
				A.style.top = "0px";
				let x = Math.max(EI, P + R.offsetTop + (m ? K : 0) + J) + Z;
				A.style.height = x + "px", R.scrollTop = X - EI + R.offsetTop;
			}
			A.style.margin = `${CONTENT_MARGIN}px 0`, A.style.minHeight = W + "px", A.style.maxHeight = k + "px", T?.(), requestAnimationFrame(() => I.current = !0);
		}
	}, [
		F,
		O.trigger,
		O.valueNode,
		A,
		M,
		R,
		z,
		B,
		O.dir,
		T
	]);
	useLayoutEffect2(() => H(), [H]);
	let [U, W] = React.useState();
	return useLayoutEffect2(() => {
		M && W(window.getComputedStyle(M).zIndex);
	}, [M]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: C,
		contentWrapper: A,
		shouldExpandOnScrollRef: I,
		onScrollButtonChange: React.useCallback((m) => {
			m && L.current === !0 && (H(), V?.(), L.current = !1);
		}, [H, V]),
		children: /* @__PURE__ */ jsx("div", {
			ref: j,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: U
			},
			children: /* @__PURE__ */ jsx(Primitive.div, {
				...D,
				ref: P,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...D.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React.forwardRef((m, x) => {
	let { __scopeSelect: S, align: C = "start", collisionPadding: T = CONTENT_MARGIN, ...D } = m;
	return /* @__PURE__ */ jsx(Content, {
		...usePopperScope(S),
		...D,
		ref: x,
		align: C,
		collisionPadding: T,
		style: {
			boxSizing: "border-box",
			...D.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React.forwardRef((x, S) => {
	let { __scopeSelect: C, nonce: T, ...D } = x, O = useSelectContentContext(VIEWPORT_NAME, C), k = useSelectViewportContext(VIEWPORT_NAME, C), A = useComposedRefs(S, O.onViewportChange), j = React.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: T
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: C,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...D,
			ref: A,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...D.style
			},
			onScroll: composeEventHandlers(D.onScroll, (m) => {
				let x = m.currentTarget, { contentWrapper: S, shouldExpandOnScrollRef: C } = k;
				if (C?.current && S) {
					let m = Math.abs(j.current - x.scrollTop);
					if (m > 0) {
						let C = window.innerHeight - CONTENT_MARGIN * 2, T = parseFloat(S.style.minHeight), D = parseFloat(S.style.height), O = Math.max(T, D);
						if (O < C) {
							let T = O + m, D = Math.min(C, T), k = T - D;
							S.style.height = D + "px", S.style.bottom === "0px" && (x.scrollTop = k > 0 ? k : 0, S.style.justifyContent = "flex-end");
						}
					}
				}
				j.current = x.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup$1 = React.forwardRef((m, x) => {
	let { __scopeSelect: S, ...C } = m, T = useId$1();
	return /* @__PURE__ */ jsx(SelectGroupContextProvider, {
		scope: S,
		id: T,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "group",
			"aria-labelledby": T,
			...C,
			ref: x
		})
	});
});
SelectGroup$1.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel", SelectLabel$1 = React.forwardRef((m, x) => {
	let { __scopeSelect: S, ...C } = m, T = useSelectGroupContext(LABEL_NAME, S);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: T.id,
		...C,
		ref: x
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = React.forwardRef((x, S) => {
	let { __scopeSelect: C, value: T, disabled: D = !1, textValue: O, ...k } = x, A = useSelectContext(ITEM_NAME, C), j = useSelectContentContext(ITEM_NAME, C), M = A.value === T, [N, P] = React.useState(O ?? ""), [F, I] = React.useState(!1), L = useComposedRefs(S, (m) => j.itemRefCallback?.(m, T, D)), R = useId$1(), z = React.useRef("touch"), B = () => {
		D || (A.onValueChange(T), A.onOpenChange(!1));
	};
	if (T === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: C,
		value: T,
		disabled: D,
		textId: R,
		isSelected: M,
		onItemTextChange: React.useCallback((m) => {
			P((x) => x || (m?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: C,
			value: T,
			disabled: D,
			textValue: N,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": R,
				"data-highlighted": F ? "" : void 0,
				"aria-selected": M && F,
				"data-state": M ? "checked" : "unchecked",
				"aria-disabled": D || void 0,
				"data-disabled": D ? "" : void 0,
				tabIndex: D ? void 0 : -1,
				...k,
				ref: L,
				onFocus: composeEventHandlers(k.onFocus, () => I(!0)),
				onBlur: composeEventHandlers(k.onBlur, () => I(!1)),
				onClick: composeEventHandlers(k.onClick, () => {
					z.current !== "mouse" && B();
				}),
				onPointerUp: composeEventHandlers(k.onPointerUp, () => {
					z.current === "mouse" && B();
				}),
				onPointerDown: composeEventHandlers(k.onPointerDown, (m) => {
					z.current = m.pointerType;
				}),
				onPointerMove: composeEventHandlers(k.onPointerMove, (m) => {
					z.current = m.pointerType, D ? j.onItemLeave?.() : z.current === "mouse" && m.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(k.onPointerLeave, (m) => {
					m.currentTarget === document.activeElement && j.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(k.onKeyDown, (m) => {
					j.searchRef?.current !== "" && m.key === " " || (SELECTION_KEYS.includes(m.key) && B(), m.key === " " && m.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React.forwardRef((x, S) => {
	let { __scopeSelect: C, className: T, style: D, ...O } = x, k = useSelectContext(ITEM_TEXT_NAME, C), A = useSelectContentContext(ITEM_TEXT_NAME, C), j = useSelectItemContext(ITEM_TEXT_NAME, C), M = useSelectNativeOptionsContext(ITEM_TEXT_NAME, C), [N, P] = React.useState(null), F = useComposedRefs(S, (m) => P(m), j.onItemTextChange, (m) => A.itemTextRefCallback?.(m, j.value, j.disabled)), I = N?.textContent, L = React.useMemo(() => /* @__PURE__ */ jsx("option", {
		value: j.value,
		disabled: j.disabled,
		children: I
	}, j.value), [
		j.disabled,
		j.value,
		I
	]), { onNativeOptionAdd: R, onNativeOptionRemove: z } = M;
	return useLayoutEffect2(() => (R(L), () => z(L)), [
		R,
		z,
		L
	]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Primitive.span, {
		id: j.textId,
		...O,
		ref: F
	}), j.isSelected && k.valueNode && !k.valueNodeHasChildren ? ReactDOM$1.createPortal(O.children, k.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React.forwardRef((m, x) => {
	let { __scopeSelect: S, ...C } = m;
	return useSelectItemContext(ITEM_INDICATOR_NAME, S).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...C,
		ref: x
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = React.forwardRef((x, S) => {
	let C = useSelectContentContext(SCROLL_UP_BUTTON_NAME, x.__scopeSelect), T = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, x.__scopeSelect), [D, O] = React.useState(!1), k = useComposedRefs(S, T.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (C.viewport && C.isPositioned) {
			let m = function() {
				O(x.scrollTop > 0);
			}, x = C.viewport;
			return m(), x.addEventListener("scroll", m), () => x.removeEventListener("scroll", m);
		}
	}, [C.viewport, C.isPositioned]), D ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...x,
		ref: k,
		onAutoScroll: () => {
			let { viewport: m, selectedItem: x } = C;
			m && x && (m.scrollTop -= x.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = React.forwardRef((x, S) => {
	let C = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, x.__scopeSelect), T = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, x.__scopeSelect), [D, O] = React.useState(!1), k = useComposedRefs(S, T.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (C.viewport && C.isPositioned) {
			let m = function() {
				let m = x.scrollHeight - x.clientHeight;
				O(Math.ceil(x.scrollTop) < m);
			}, x = C.viewport;
			return m(), x.addEventListener("scroll", m), () => x.removeEventListener("scroll", m);
		}
	}, [C.viewport, C.isPositioned]), D ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...x,
		ref: k,
		onAutoScroll: () => {
			let { viewport: m, selectedItem: x } = C;
			m && x && (m.scrollTop += x.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React.forwardRef((x, S) => {
	let { __scopeSelect: C, onAutoScroll: T, ...D } = x, O = useSelectContentContext("SelectScrollButton", C), k = React.useRef(null), A = useCollection(C), j = React.useCallback(() => {
		k.current !== null && (window.clearInterval(k.current), k.current = null);
	}, []);
	return React.useEffect(() => () => j(), [j]), useLayoutEffect2(() => {
		A().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [A]), /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...D,
		ref: S,
		style: {
			flexShrink: 0,
			...D.style
		},
		onPointerDown: composeEventHandlers(D.onPointerDown, () => {
			k.current === null && (k.current = window.setInterval(T, 50));
		}),
		onPointerMove: composeEventHandlers(D.onPointerMove, () => {
			O.onItemLeave?.(), k.current === null && (k.current = window.setInterval(T, 50));
		}),
		onPointerLeave: composeEventHandlers(D.onPointerLeave, () => {
			j();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = React.forwardRef((m, x) => {
	let { __scopeSelect: S, ...C } = m;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...C,
		ref: x
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = React.forwardRef((m, x) => {
	let { __scopeSelect: S, ...C } = m, T = usePopperScope(S), D = useSelectContext(ARROW_NAME, S), O = useSelectContentContext(ARROW_NAME, S);
	return D.open && O.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...T,
		...C,
		ref: x
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React.forwardRef(({ __scopeSelect: x, value: S, ...C }, T) => {
	let D = React.useRef(null), O = useComposedRefs(T, D), k = usePrevious(S);
	return React.useEffect(() => {
		let m = D.current;
		if (!m) return;
		let x = window.HTMLSelectElement.prototype, C = Object.getOwnPropertyDescriptor(x, "value").set;
		if (k !== S && C) {
			let x = new Event("change", { bubbles: !0 });
			C.call(m, S), m.dispatchEvent(x);
		}
	}, [k, S]), /* @__PURE__ */ jsx(Primitive.select, {
		...C,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...C.style
		},
		ref: O,
		defaultValue: S
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(m) {
	return m === "" || m === void 0;
}
function useTypeaheadSearch(x) {
	let S = useCallbackRef(x), C = React.useRef(""), T = React.useRef(0), D = React.useCallback((m) => {
		let x = C.current + m;
		S(x), (function m(x) {
			C.current = x, window.clearTimeout(T.current), x !== "" && (T.current = window.setTimeout(() => m(""), 1e3));
		})(x);
	}, [S]), O = React.useCallback(() => {
		C.current = "", window.clearTimeout(T.current);
	}, []);
	return React.useEffect(() => () => window.clearTimeout(T.current), []), [
		C,
		D,
		O
	];
}
function findNextItem(m, x, S) {
	let C = x.length > 1 && Array.from(x).every((m) => m === x[0]) ? x[0] : x, T = S ? m.indexOf(S) : -1, D = wrapArray(m, Math.max(T, 0));
	C.length === 1 && (D = D.filter((m) => m !== S));
	let O = D.find((m) => m.textValue.toLowerCase().startsWith(C.toLowerCase()));
	return O === S ? void 0 : O;
}
function wrapArray(m, x) {
	return m.map((S, C) => m[(x + C) % m.length]);
}
var Root2 = Select$1, Trigger = SelectTrigger$1, Value = SelectValue$1, Icon$2 = SelectIcon, Portal$1 = SelectPortal, Content2 = SelectContent$1, Viewport = SelectViewport, Group$1 = SelectGroup$1, Label$1 = SelectLabel$1, Item$1 = SelectItem$1, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, ScrollUpButton = SelectScrollUpButton$1, ScrollDownButton = SelectScrollDownButton$1, Separator = SelectSeparator$1, toKebabCase$1 = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (m) => m.replace(/^([A-Z])|[\s-_]+(\w)/g, (m, x, S) => S ? S.toUpperCase() : x.toLowerCase()), toPascalCase = (m) => {
	let x = toCamelCase(m);
	return x.charAt(0).toUpperCase() + x.slice(1);
}, mergeClasses$1 = (...m) => m.filter((m, x, S) => !!m && m.trim() !== "" && S.indexOf(m) === x).join(" ").trim(), hasA11yProp = (m) => {
	for (let x in m) if (x.startsWith("aria-") || x === "role" || x === "title") return !0;
}, defaultAttributes$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Icon$1 = forwardRef(({ color: m = "currentColor", size: x = 24, strokeWidth: S = 2, absoluteStrokeWidth: C, className: T = "", children: O, iconNode: k, ...A }, j) => createElement("svg", {
	ref: j,
	...defaultAttributes$2,
	width: x,
	height: x,
	stroke: m,
	strokeWidth: C ? Number(S) * 24 / Number(x) : S,
	className: mergeClasses$1("lucide", T),
	...!O && !hasA11yProp(A) && { "aria-hidden": "true" },
	...A
}, [...k.map(([m, x]) => createElement(m, x)), ...Array.isArray(O) ? O : [O]])), createLucideIcon$1 = (m, x) => {
	let S = forwardRef(({ className: S, ...C }, T) => createElement(Icon$1, {
		ref: T,
		iconNode: x,
		className: mergeClasses$1(`lucide-${toKebabCase$1(toPascalCase(m))}`, `lucide-${m}`, S),
		...C
	}));
	return S.displayName = toPascalCase(m), S;
}, Check = createLucideIcon$1("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ChevronDown$1 = createLucideIcon$1("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ChevronUp$1 = createLucideIcon$1("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
function cn(...m) {
	return m.filter(Boolean).join(" ");
}
function Select({ ...m }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "select",
		...m
	});
}
function SelectGroup({ ...m }) {
	return /* @__PURE__ */ jsx(Group$1, {
		"data-slot": "select-group",
		...m
	});
}
function SelectValue({ ...m }) {
	return /* @__PURE__ */ jsx(Value, {
		"data-slot": "select-value",
		...m
	});
}
function SelectTrigger({ className: m, size: x = "default", children: S, ...C }) {
	return /* @__PURE__ */ jsxs(Trigger, {
		"data-slot": "select-trigger",
		"data-size": x,
		className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", m),
		...C,
		children: [S, /* @__PURE__ */ jsx(Icon$2, {
			asChild: !0,
			children: /* @__PURE__ */ jsx(ChevronDown$1, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className: m, children: x, position: S = "popper", align: C = "center", ...T }) {
	return /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
		"data-slot": "select-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", S === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", m),
		position: S,
		align: C,
		...T,
		children: [
			/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
			/* @__PURE__ */ jsx(Viewport, {
				className: cn("p-1", S === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: x
			}),
			/* @__PURE__ */ jsx(SelectScrollDownButton, {})
		]
	}) });
}
function SelectLabel({ className: m, ...x }) {
	return /* @__PURE__ */ jsx(Label$1, {
		"data-slot": "select-label",
		className: cn("text-muted-foreground px-2 py-1.5 text-xs", m),
		...x
	});
}
function SelectItem({ className: m, children: x, ...S }) {
	return /* @__PURE__ */ jsxs(Item$1, {
		"data-slot": "select-item",
		className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", m),
		...S,
		children: [/* @__PURE__ */ jsx("span", {
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
		}), /* @__PURE__ */ jsx(ItemText, { children: x })]
	});
}
function SelectSeparator({ className: m, ...x }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "select-separator",
		className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", m),
		...x
	});
}
function SelectScrollUpButton({ className: m, ...x }) {
	return /* @__PURE__ */ jsx(ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: cn("flex cursor-default items-center justify-center py-1", m),
		...x,
		children: /* @__PURE__ */ jsx(ChevronUp$1, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className: m, ...x }) {
	return /* @__PURE__ */ jsx(ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: cn("flex cursor-default items-center justify-center py-1", m),
		...x,
		children: /* @__PURE__ */ jsx(ChevronDown$1, { className: "size-4" })
	});
}
var require_flat = /* @__PURE__ */ __commonJSMin(((m, x) => {
	x.exports = T, T.flatten = T, T.unflatten = D;
	function S(m) {
		return m && m.constructor && typeof m.constructor.isBuffer == "function" && m.constructor.isBuffer(m);
	}
	function C(m) {
		return m;
	}
	function T(m, x) {
		x ||= {};
		let T = x.delimiter || ".", D = x.maxDepth, O = x.transformKey || C, k = {};
		function A(m, C, j) {
			j ||= 1, Object.keys(m).forEach(function(M) {
				let N = m[M], P = x.safe && Array.isArray(N), F = Object.prototype.toString.call(N), I = S(N), L = F === "[object Object]" || F === "[object Array]", R = C ? C + T + O(M) : O(M);
				if (!P && !I && L && Object.keys(N).length && (!x.maxDepth || j < D)) return A(N, R, j + 1);
				k[R] = N;
			});
		}
		return A(m), k;
	}
	function D(m, x) {
		x ||= {};
		let O = x.delimiter || ".", k = x.overwrite || !1, A = x.transformKey || C, j = {};
		if (S(m) || Object.prototype.toString.call(m) !== "[object Object]") return m;
		function M(m) {
			let S = Number(m);
			return isNaN(S) || m.indexOf(".") !== -1 || x.object ? m : S;
		}
		function N(m, x, S) {
			return Object.keys(S).reduce(function(x, C) {
				return x[m + O + C] = S[C], x;
			}, x);
		}
		function P(m) {
			let x = Object.prototype.toString.call(m), S = x === "[object Array]", C = x === "[object Object]";
			if (m) {
				if (S) return !m.length;
				if (C) return !Object.keys(m).length;
			} else return !0;
		}
		return m = Object.keys(m).reduce(function(S, C) {
			let D = Object.prototype.toString.call(m[C]);
			return !(D === "[object Object]" || D === "[object Array]") || P(m[C]) ? (S[C] = m[C], S) : N(C, S, T(m[C], x));
		}, {}), Object.keys(m).forEach(function(S) {
			let C = S.split(O).map(A), T = M(C.shift()), N = M(C[0]), P = j;
			for (; N !== void 0;) {
				if (T === "__proto__") return;
				let m = Object.prototype.toString.call(P[T]), S = m === "[object Object]" || m === "[object Array]";
				if (!k && !S && P[T] !== void 0) return;
				(k && !S || !k && P[T] == null) && (P[T] = typeof N == "number" && !x.object ? [] : {}), P = P[T], C.length > 0 && (T = M(C.shift()), N = M(C[0]));
			}
			P[T] = D(m[S], x);
		}), j;
	}
})), require_fast_deep_equal = /* @__PURE__ */ __commonJSMin(((m, x) => {
	x.exports = function m(x, S) {
		if (x === S) return !0;
		if (x && S && typeof x == "object" && typeof S == "object") {
			if (x.constructor !== S.constructor) return !1;
			var C, T, D;
			if (Array.isArray(x)) {
				if (C = x.length, C != S.length) return !1;
				for (T = C; T-- !== 0;) if (!m(x[T], S[T])) return !1;
				return !0;
			}
			if (x.constructor === RegExp) return x.source === S.source && x.flags === S.flags;
			if (x.valueOf !== Object.prototype.valueOf) return x.valueOf() === S.valueOf();
			if (x.toString !== Object.prototype.toString) return x.toString() === S.toString();
			if (D = Object.keys(x), C = D.length, C !== Object.keys(S).length) return !1;
			for (T = C; T-- !== 0;) if (!Object.prototype.hasOwnProperty.call(S, D[T])) return !1;
			for (T = C; T-- !== 0;) {
				var O = D[T];
				if (!m(x[O], S[O])) return !1;
			}
			return !0;
		}
		return x !== x && S !== S;
	};
})), import_flat = /* @__PURE__ */ __toESM$1(require_flat(), 1), import_fast_deep_equal$1 = /* @__PURE__ */ __toESM$1(require_fast_deep_equal(), 1), import_fast_deep_equal$2 = /* @__PURE__ */ __toESM$1(require_fast_deep_equal(), 1), __create$6 = Object.create, __defProp$7 = Object.defineProperty, __defProps$6 = Object.defineProperties, __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor, __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$7 = (m, x, S) => x in m ? __defProp$7(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$7.call(x, S) && __defNormalProp$7(m, S, x[S]);
	if (__getOwnPropSymbols$7) for (var S of __getOwnPropSymbols$7(x)) __propIsEnum$7.call(x, S) && __defNormalProp$7(m, S, x[S]);
	return m;
}, __spreadProps = (m, x) => __defProps$6(m, __getOwnPropDescs$6(x)), __objRest = (m, x) => {
	var S = {};
	for (var C in m) __hasOwnProp$7.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && __getOwnPropSymbols$7) for (var C of __getOwnPropSymbols$7(m)) x.indexOf(C) < 0 && __propIsEnum$7.call(m, C) && (S[C] = m[C]);
	return S;
}, __esm = (m, x) => function() {
	return m && (x = (0, m[__getOwnPropNames(m)[0]])(m = 0)), x;
}, __commonJS = (m, x) => function() {
	return x || (0, m[__getOwnPropNames(m)[0]])((x = { exports: {} }).exports, x), x.exports;
}, __copyProps = (m, x, S, C) => {
	if (x && typeof x == "object" || typeof x == "function") for (let T of __getOwnPropNames(x)) !__hasOwnProp$7.call(m, T) && T !== S && __defProp$7(m, T, {
		get: () => x[T],
		enumerable: !(C = __getOwnPropDesc$6(x, T)) || C.enumerable
	});
	return m;
}, __toESM = (m, x, S) => (S = m == null ? {} : __create$6(__getProtoOf(m)), __copyProps(x || !m || !m.__esModule ? __defProp$7(S, "default", {
	value: m,
	enumerable: !0
}) : S, m)), __async = (m, x, S) => new Promise((C, T) => {
	var D = (m) => {
		try {
			k(S.next(m));
		} catch (m) {
			T(m);
		}
	}, O = (m) => {
		try {
			k(S.throw(m));
		} catch (m) {
			T(m);
		}
	}, k = (m) => m.done ? C(m.value) : Promise.resolve(m.value).then(D, O);
	k((S = S.apply(m, x)).next());
}), init_react_import = __esm({ "../tsup-config/react-import.js"() {} });
init_react_import(), init_react_import(), init_react_import();
var defaultSlots = (m, x) => Object.keys(x).reduce((m, S) => x[S].type === "slot" ? __spreadValues({ [S]: [] }, m) : m, m), isPromise = (m) => !!m && typeof m.then == "function", flatten = (m) => m.reduce((m, x) => __spreadValues(__spreadValues({}, m), x), {}), containsPromise = (m) => m.some(isPromise), walkField = ({ value: m, fields: x, mappers: S, propKey: C = "", propPath: T = "", id: D = "", config: O, recurseSlots: k = !1 }) => {
	let A = x[C]?.type, j = S[A];
	if (j && A === "slot") {
		let A = m || [], M = k ? A.map((m) => {
			let x = O.components[m.type];
			if (!x) throw Error(`Could not find component config for ${m.type}`);
			let C = x.fields ?? {};
			return walkField({
				value: __spreadProps(__spreadValues({}, m), { props: defaultSlots(m.props, C) }),
				fields: C,
				mappers: S,
				id: m.props.id,
				config: O,
				recurseSlots: k
			});
		}) : A;
		return containsPromise(M) ? Promise.all(M) : j({
			value: M,
			parentId: D,
			propName: T,
			field: x[C],
			propPath: T
		});
	} else if (j && x[C]) return j({
		value: m,
		parentId: D,
		propName: C,
		field: x[C],
		propPath: T
	});
	if (m && typeof m == "object") if (Array.isArray(m)) {
		let A = x[C]?.type === "array" ? x[C].arrayFields : null;
		if (!A) return m;
		let j = m.map((m, x) => walkField({
			value: m,
			fields: A,
			mappers: S,
			propKey: C,
			propPath: `${T}[${x}]`,
			id: D,
			config: O,
			recurseSlots: k
		}));
		return containsPromise(j) ? Promise.all(j) : j;
	} else if ("$$typeof" in m) return m;
	else return walkObject({
		value: m,
		fields: x[C]?.type === "object" ? x[C].objectFields : x,
		mappers: S,
		id: D,
		getPropPath: (m) => `${T}.${m}`,
		config: O,
		recurseSlots: k
	});
	return m;
}, walkObject = ({ value: m, fields: x, mappers: S, id: C, getPropPath: T, config: D, recurseSlots: O }) => {
	let k = Object.entries(m).map(([m, k]) => {
		let A = walkField({
			value: k,
			fields: x,
			mappers: S,
			propKey: m,
			propPath: T(m),
			id: C,
			config: D,
			recurseSlots: O
		});
		return isPromise(A) ? A.then((x) => ({ [m]: x })) : { [m]: A };
	}, {});
	return containsPromise(k) ? Promise.all(k).then(flatten) : flatten(k);
};
function mapFields(m, x, S, C = !1) {
	let T = "type" in m ? m.type : "root", D = T === "root" ? S.root : S.components?.[T], O = walkObject({
		value: defaultSlots(m.props ?? {}, D?.fields ?? {}),
		fields: D?.fields ?? {},
		mappers: x,
		id: m.props ? m.props.id ?? "root" : "root",
		getPropPath: (m) => m,
		config: S,
		recurseSlots: C
	});
	return isPromise(O) ? O.then((x) => __spreadProps(__spreadValues({}, m), { props: x })) : __spreadProps(__spreadValues({}, m), { props: O });
}
function walkTree(m, x, S) {
	let C = (m) => mapFields(m, { slot: ({ value: m, parentId: x, propName: C }) => {
		let T = m;
		return S(T, {
			parentId: x,
			propName: C
		}) ?? T;
	} }, x, !0);
	if ("props" in m) return C(m);
	let T = m, D = T.zones ?? {}, O = T.content.map(C);
	return {
		root: C(T.root),
		content: S(O, {
			parentId: "root",
			propName: "default-zone"
		}) ?? O,
		zones: Object.keys(D).reduce((m, x) => __spreadProps(__spreadValues({}, m), { [x]: D[x].map(C) }), {})
	};
}
init_react_import(), init_react_import(), init_react_import();
var defaultViewports = [
	{
		width: 360,
		height: "auto",
		icon: "Smartphone",
		label: "Small"
	},
	{
		width: 768,
		height: "auto",
		icon: "Tablet",
		label: "Medium"
	},
	{
		width: 1280,
		height: "auto",
		icon: "Monitor",
		label: "Large"
	}
], defaultAppState = {
	data: {
		content: [],
		root: {},
		zones: {}
	},
	ui: {
		leftSideBarVisible: !0,
		rightSideBarVisible: !0,
		arrayState: {},
		itemSelector: null,
		componentList: {},
		isDragging: !1,
		previewMode: "edit",
		viewports: {
			current: {
				width: defaultViewports[0].width,
				height: defaultViewports[0].height || "auto"
			},
			options: [],
			controlsVisible: !0
		},
		field: { focus: null }
	},
	indexes: {
		nodes: {},
		zones: {}
	}
};
init_react_import(), init_react_import(), init_react_import(), init_react_import();
var rootAreaId = "root", rootZone = "default-zone", rootDroppableId = `${rootAreaId}:${rootZone}`, getZoneId$1 = (m) => m ? m && m.indexOf(":") > -1 ? m.split(":") : [rootDroppableId, m] : [];
function forRelatedZones(m, x, S, C = []) {
	Object.entries(x.zones || {}).forEach(([x, T]) => {
		let [D] = getZoneId$1(x);
		D === m.props.id && S(C, x, T);
	});
}
init_react_import(), init_react_import();
var stripSlots = (m, x) => mapFields(m, { slot: () => null }, x), { flatten: flatten2, unflatten } = import_flat.default, flattenNode = (m, x) => __spreadProps(__spreadValues({}, m), { props: flatten2(stripSlots(m, x).props) }), expandNode = (m) => {
	let x = unflatten(m.props);
	return __spreadProps(__spreadValues({}, m), { props: x });
};
function walkAppState(m, x, S = (m) => m, C = (m) => m) {
	let T = {}, D = {}, O = {}, k = (m, x, C, T, O) => {
		let [k] = x.split(":"), A = (S(C, x, T) ?? C) || [], [M, N] = x.split(":"), P = `${O || k}:${N}`, F = A.map((x, S) => j(x, [...m, P], S));
		return D[P] = {
			contentIds: F.map((m) => m.props.id),
			type: T
		}, [P, F];
	}, A = (x, S, C) => {
		forRelatedZones(x, m.data, (m, x, C) => {
			let [D, O] = k(m, x, C, "dropzone", S);
			T[D] = O;
		}, C);
	}, j = (m, S, T) => {
		let D = C(m, S, T);
		if (!D) return m;
		let j = D.props.id, M = __spreadProps(__spreadValues({}, mapFields(D, { slot: ({ value: m, parentId: x, propPath: C }) => {
			let T = m, [D, O] = k(S, `${x}:${C}`, T, "slot", x);
			return O;
		} }, x).props), { id: j });
		A(m, j, S);
		let N = __spreadProps(__spreadValues({}, m), { props: M }), P = S[S.length - 1], [F, I] = P ? P.split(":") : [null, ""];
		O[j] = {
			data: N,
			flatData: flattenNode(N, x),
			path: S,
			parentId: F,
			zone: I
		};
		let L = __spreadProps(__spreadValues({}, N), { props: __spreadValues({}, N.props) });
		return M.id === "root" && (delete L.type, delete L.props.id), L;
	}, M = m.data.zones || {}, [N, P] = k([], rootDroppableId, m.data.content, "root"), F = P, I = Object.keys(T);
	Object.keys(M || {}).forEach((m) => {
		let [x] = m.split(":");
		if (I.includes(m)) return;
		let [S, C] = k([rootDroppableId], m, M[m], "dropzone", x);
		T[m] = C;
	}, T);
	let L = j({
		type: "root",
		props: __spreadProps(__spreadValues({}, m.data.root.props ?? m.data.root), { id: "root" })
	}, [], -1), R = __spreadProps(__spreadValues({}, m.data.root), { props: L.props });
	return __spreadProps(__spreadValues({}, m), {
		data: {
			root: R,
			content: F,
			zones: __spreadValues(__spreadValues({}, m.data.zones), T)
		},
		indexes: {
			nodes: __spreadValues(__spreadValues({}, m.indexes.nodes), O),
			zones: __spreadValues(__spreadValues({}, m.indexes.zones), D)
		}
	});
}
init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import();
var getChanged = (m, x) => m ? Object.keys(m.props || {}).reduce((S, C) => {
	let T = m?.props || {}, D = x?.props || {};
	return __spreadProps(__spreadValues({}, S), { [C]: !(0, import_fast_deep_equal$1.default)(D[C], T[C]) });
}, {}) : {}, cache = { lastChange: {} }, resolveComponentData = (m, x, ...S) => __async(void 0, [
	m,
	x,
	...S
], function* (m, x, S = {}, C, T, D = "replace") {
	let O = "type" in m && m.type !== "root" ? x.components[m.type] : x.root, k = __spreadValues({}, m), A = O?.resolveData && m.props, j = "id" in m.props ? m.props.id : "root";
	if (A) {
		let { item: x = null, resolved: T = {} } = cache.lastChange[j] || {};
		if (D !== "force" && m && (0, import_fast_deep_equal$2.default)(m, x)) return {
			node: T,
			didChange: !1
		};
		let A = getChanged(m, x);
		C && C(m);
		let { props: M, readOnly: N = {} } = yield O.resolveData(m, {
			changed: A,
			lastData: x,
			metadata: __spreadValues(__spreadValues({}, S), O.metadata),
			trigger: D
		});
		k.props = __spreadValues(__spreadValues({}, m.props), M), Object.keys(N).length && (k.readOnly = N);
	}
	let M = yield mapFields(k, { slot: (m) => __async(void 0, [m], function* ({ value: m }) {
		let O = m;
		return yield Promise.all(O.map((m) => __async(void 0, null, function* () {
			return (yield resolveComponentData(m, x, S, C, T, D)).node;
		})));
	}) }, x);
	return A && T && T(k), cache.lastChange[j] = {
		item: m,
		resolved: M
	}, {
		node: M,
		didChange: !(0, import_fast_deep_equal$2.default)(m, M)
	};
});
init_react_import(), init_react_import();
var setupZone = (m, x) => {
	if (x === rootDroppableId) return m;
	let S = __spreadProps(__spreadValues({}, m), { zones: m.zones ? __spreadValues({}, m.zones) : {} });
	return S.zones[x] = S.zones[x] || [], S;
};
init_react_import();
function useFieldTransforms(m, x, S, C, T) {
	let D = useMemo(() => Object.keys(S).reduce((m, x) => {
		let D = x;
		return __spreadProps(__spreadValues({}, m), { [D]: (m) => {
			var x = m, { parentId: O } = x, k = __objRest(x, ["parentId"]);
			let A = k.propPath.replace(/\[\d+\]/g, "[*]"), j = C?.[k.propPath] || C?.[A] || T || !1, M = S[D];
			return M?.(__spreadProps(__spreadValues({}, k), {
				isReadOnly: j,
				componentId: O
			}));
		} });
	}, {}), [
		S,
		C,
		T
	]), O = useMemo(() => mapFields(x, D, m).props, [
		m,
		x,
		D
	]);
	return useMemo(() => __spreadValues(__spreadValues({}, x.props), O), [x.props, O]);
}
init_react_import();
var getSlotTransform = (m, x = m) => ({ slot: ({ value: S, propName: C, field: T, isReadOnly: D }) => {
	let O = D ? x : m;
	return (m) => O(__spreadProps(__spreadValues({
		allow: T?.type === "slot" ? T.allow : [],
		disallow: T?.type === "slot" ? T.disallow : []
	}, m), {
		zone: C,
		content: S
	}));
} });
init_react_import();
function useSlots(m, x, S, C = S, T, D) {
	return useFieldTransforms(m, x, getSlotTransform(S, C), T, D);
}
init_react_import();
var SlotRenderPure = (m) => /* @__PURE__ */ jsx(SlotRender, __spreadValues({}, m)), Item = ({ config: m, item: x, metadata: S }) => {
	let C = m.components[x.type], T = useSlots(m, x, (x) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, x), {
		config: m,
		metadata: S
	})));
	return /* @__PURE__ */ jsx(C.render, __spreadProps(__spreadValues({}, T), { puck: __spreadProps(__spreadValues({}, T.puck), { metadata: S || {} }) }));
}, SlotRender = forwardRef(function({ className: m, style: x, content: S, config: C, metadata: T }, D) {
	return /* @__PURE__ */ jsx("div", {
		className: m,
		style: x,
		ref: D,
		children: S.map((m) => C.components[m.type] ? /* @__PURE__ */ jsx(Item, {
			config: C,
			item: m,
			metadata: T
		}, m.props.id) : null)
	});
}), getRandomValues, rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !getRandomValues)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return getRandomValues(rnds8);
}
var byteToHex = [];
for (let m = 0; m < 256; ++m) byteToHex.push((m + 256).toString(16).slice(1));
function unsafeStringify(m, x = 0) {
	return byteToHex[m[x + 0]] + byteToHex[m[x + 1]] + byteToHex[m[x + 2]] + byteToHex[m[x + 3]] + "-" + byteToHex[m[x + 4]] + byteToHex[m[x + 5]] + "-" + byteToHex[m[x + 6]] + byteToHex[m[x + 7]] + "-" + byteToHex[m[x + 8]] + byteToHex[m[x + 9]] + "-" + byteToHex[m[x + 10]] + byteToHex[m[x + 11]] + byteToHex[m[x + 12]] + byteToHex[m[x + 13]] + byteToHex[m[x + 14]] + byteToHex[m[x + 15]];
}
var native_default = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function v4(m, x, S) {
	if (native_default.randomUUID && !x && !m) return native_default.randomUUID();
	m ||= {};
	let C = m.random || (m.rng || rng)();
	if (C[6] = C[6] & 15 | 64, C[8] = C[8] & 63 | 128, x) {
		S ||= 0;
		for (let m = 0; m < 16; ++m) x[S + m] = C[m];
		return x;
	}
	return unsafeStringify(C);
}
var v4_default = v4, createStoreImpl = (m) => {
	let x, S = /* @__PURE__ */ new Set(), C = (m, C) => {
		let T = typeof m == "function" ? m(x) : m;
		if (!Object.is(T, x)) {
			let m = x;
			x = C ?? (typeof T != "object" || !T) ? T : Object.assign({}, x, T), S.forEach((S) => S(x, m));
		}
	}, T = () => x, D = {
		setState: C,
		getState: T,
		getInitialState: () => O,
		subscribe: (m) => (S.add(m), () => S.delete(m))
	}, O = x = m(C, T, D);
	return D;
}, createStore = ((m) => m ? createStoreImpl(m) : createStoreImpl), identity = (m) => m;
function useStore(m, S = identity) {
	let C = React2.useSyncExternalStore(m.subscribe, React2.useCallback(() => S(m.getState()), [m, S]), React2.useCallback(() => S(m.getInitialState()), [m, S]));
	return React2.useDebugValue(C), C;
}
var createImpl = (m) => {
	let x = createStore(m), S = (m) => useStore(x, m);
	return Object.assign(S, x), S;
}, create = ((m) => m ? createImpl(m) : createImpl), subscribeWithSelector = (m) => (x, S, C) => {
	let T = C.subscribe;
	return C.subscribe = ((m, x, S) => {
		let D = m;
		if (x) {
			let T = S?.equalityFn || Object.is, O = m(C.getState());
			D = (S) => {
				let C = m(S);
				if (!T(O, C)) {
					let m = O;
					x(O = C, m);
				}
			}, S?.fireImmediately && x(O, O);
		}
		return T(D);
	}), m(x, S, C);
}, i = Symbol.for("preact-signals");
function t() {
	if (s > 1) s--;
	else {
		for (var m, x = !1; h !== void 0;) {
			var S = h;
			for (h = void 0, f++; S !== void 0;) {
				var C = S.o;
				if (S.o = void 0, S.f &= -3, !(8 & S.f) && c$1(S)) try {
					S.c();
				} catch (S) {
					x ||= (m = S, !0);
				}
				S = C;
			}
		}
		if (f = 0, s--, x) throw m;
	}
}
function r(m) {
	if (s > 0) return m();
	s++;
	try {
		return m();
	} finally {
		t();
	}
}
var o = void 0;
function n(m) {
	var x = o;
	o = void 0;
	try {
		return m();
	} finally {
		o = x;
	}
}
var h = void 0, s = 0, f = 0, v = 0;
function e(m) {
	if (o !== void 0) {
		var x = m.n;
		if (x === void 0 || x.t !== o) return x = {
			i: 0,
			S: m,
			p: o.s,
			n: void 0,
			t: o,
			e: void 0,
			x: void 0,
			r: x
		}, o.s !== void 0 && (o.s.n = x), o.s = x, m.n = x, 32 & o.f && m.S(x), x;
		if (x.i === -1) return x.i = 0, x.n !== void 0 && (x.n.p = x.p, x.p !== void 0 && (x.p.n = x.n), x.p = o.s, x.n = void 0, o.s.n = x, o.s = x), x;
	}
}
function u(m, x) {
	this.v = m, this.i = 0, this.n = void 0, this.t = void 0, this.W = x?.watched, this.Z = x?.unwatched, this.name = x?.name;
}
u.prototype.brand = i, u.prototype.h = function() {
	return !0;
}, u.prototype.S = function(m) {
	var x = this, S = this.t;
	S !== m && m.e === void 0 && (m.x = S, this.t = m, S === void 0 ? n(function() {
		var m;
		(m = x.W) == null || m.call(x);
	}) : S.e = m);
}, u.prototype.U = function(m) {
	var x = this;
	if (this.t !== void 0) {
		var S = m.e, C = m.x;
		S !== void 0 && (S.x = C, m.e = void 0), C !== void 0 && (C.e = S, m.x = void 0), m === this.t && (this.t = C, C === void 0 && n(function() {
			var m;
			(m = x.Z) == null || m.call(x);
		}));
	}
}, u.prototype.subscribe = function(m) {
	var x = this;
	return E(function() {
		var S = x.value, C = o;
		o = void 0;
		try {
			m(S);
		} finally {
			o = C;
		}
	}, { name: "sub" });
}, u.prototype.valueOf = function() {
	return this.value;
}, u.prototype.toString = function() {
	return this.value + "";
}, u.prototype.toJSON = function() {
	return this.value;
}, u.prototype.peek = function() {
	var m = o;
	o = void 0;
	try {
		return this.value;
	} finally {
		o = m;
	}
}, Object.defineProperty(u.prototype, "value", {
	get: function() {
		var m = e(this);
		return m !== void 0 && (m.i = this.i), this.v;
	},
	set: function(m) {
		if (m !== this.v) {
			if (f > 100) throw Error("Cycle detected");
			this.v = m, this.i++, v++, s++;
			try {
				for (var x = this.t; x !== void 0; x = x.x) x.t.N();
			} finally {
				t();
			}
		}
	}
});
function d(m, x) {
	return new u(m, x);
}
function c$1(m) {
	for (var x = m.s; x !== void 0; x = x.n) if (x.S.i !== x.i || !x.S.h() || x.S.i !== x.i) return !0;
	return !1;
}
function a(m) {
	for (var x = m.s; x !== void 0; x = x.n) {
		var S = x.S.n;
		if (S !== void 0 && (x.r = S), x.S.n = x, x.i = -1, x.n === void 0) {
			m.s = x;
			break;
		}
	}
}
function l(m) {
	for (var x = m.s, S = void 0; x !== void 0;) {
		var C = x.p;
		x.i === -1 ? (x.S.U(x), C !== void 0 && (C.n = x.n), x.n !== void 0 && (x.n.p = C)) : S = x, x.S.n = x.r, x.r !== void 0 && (x.r = void 0), x = C;
	}
	m.s = S;
}
function y(m, x) {
	u.call(this, void 0), this.x = m, this.s = void 0, this.g = v - 1, this.f = 4, this.W = x?.watched, this.Z = x?.unwatched, this.name = x?.name;
}
y.prototype = new u(), y.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === v)) return !0;
	if (this.g = v, this.f |= 1, this.i > 0 && !c$1(this)) return this.f &= -2, !0;
	var m = o;
	try {
		a(this), o = this;
		var x = this.x();
		(16 & this.f || this.v !== x || this.i === 0) && (this.v = x, this.f &= -17, this.i++);
	} catch (m) {
		this.v = m, this.f |= 16, this.i++;
	}
	return o = m, l(this), this.f &= -2, !0;
}, y.prototype.S = function(m) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var x = this.s; x !== void 0; x = x.n) x.S.S(x);
	}
	u.prototype.S.call(this, m);
}, y.prototype.U = function(m) {
	if (this.t !== void 0 && (u.prototype.U.call(this, m), this.t === void 0)) {
		this.f &= -33;
		for (var x = this.s; x !== void 0; x = x.n) x.S.U(x);
	}
}, y.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var m = this.t; m !== void 0; m = m.x) m.t.N();
	}
}, Object.defineProperty(y.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var m = e(this);
	if (this.h(), m !== void 0 && (m.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function w(m, x) {
	return new y(m, x);
}
function _(m) {
	var x = m.u;
	if (m.u = void 0, typeof x == "function") {
		s++;
		var S = o;
		o = void 0;
		try {
			x();
		} catch (x) {
			throw m.f &= -2, m.f |= 8, b(m), x;
		} finally {
			o = S, t();
		}
	}
}
function b(m) {
	for (var x = m.s; x !== void 0; x = x.n) x.S.U(x);
	m.x = void 0, m.s = void 0, _(m);
}
function g(m) {
	if (o !== this) throw Error("Out-of-order effect");
	l(this), o = m, this.f &= -2, 8 & this.f && b(this), t();
}
function p(m, x) {
	this.x = m, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = x?.name;
}
p.prototype.c = function() {
	var m = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var x = this.x();
		typeof x == "function" && (this.u = x);
	} finally {
		m();
	}
}, p.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, _(this), a(this), s++;
	var m = o;
	return o = this, g.bind(this, m);
}, p.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.o = h, h = this);
}, p.prototype.d = function() {
	this.f |= 8, 1 & this.f || b(this);
}, p.prototype.dispose = function() {
	this.d();
};
function E(m, x) {
	var S = new p(m, x);
	try {
		S.c();
	} catch (m) {
		throw S.d(), m;
	}
	var C = S.d.bind(S);
	return C[Symbol.dispose] = C, C;
}
var __create$5 = Object.create, __defProp$6 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __knownSymbol$5 = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError$6 = (m) => {
	throw TypeError(m);
}, __defNormalProp$6 = (m, x, S) => x in m ? __defProp$6(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$7 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$6.call(x, S) && __defNormalProp$6(m, S, x[S]);
	if (__getOwnPropSymbols$6) for (var S of __getOwnPropSymbols$6(x)) __propIsEnum$6.call(x, S) && __defNormalProp$6(m, S, x[S]);
	return m;
}, __spreadProps$6 = (m, x) => __defProps$5(m, __getOwnPropDescs$5(x)), __name$3 = (m, x) => __defProp$6(m, "name", {
	value: x,
	configurable: !0
}), __decoratorStart$5 = (m) => [
	,
	,
	,
	__create$5(m?.[__knownSymbol$5("metadata")] ?? null)
], __decoratorStrings$5 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn$5 = (m) => m !== void 0 && typeof m != "function" ? __typeError$6("Function expected") : m, __decoratorContext$5 = (m, x, S, C, T) => ({
	kind: __decoratorStrings$5[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError$6("Already initialized") : T.push(__expectFn$5(m || null))
}), __decoratorMetadata$5 = (m, x) => __defNormalProp$6(x, __knownSymbol$5("metadata"), m[3]), __runInitializers$5 = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) x & 1 ? D[T].call(S) : C = D[T].call(S, C);
	return C;
}, __decorateElement$5 = (m, x, S, C, T, D) => {
	var O, k, A, j, M, N = x & 7, P = !!(x & 8), F = !!(x & 16), I = N > 3 ? m.length + 1 : N ? P ? 1 : 2 : 0, L = __decoratorStrings$5[N + 5], R = N > 3 && (m[I - 1] = []), z = m[I] || (m[I] = []), B = N && (!F && !P && (T = T.prototype), N < 5 && (N > 3 || !F) && __getOwnPropDesc$5(N < 4 ? T : {
		get [S]() {
			return __privateGet$6(this, D);
		},
		set [S](m) {
			return __privateSet$6(this, D, m);
		}
	}, S));
	N ? F && N < 4 && __name$3(D, (N > 2 ? "set " : N > 1 ? "get " : "") + S) : __name$3(T, S);
	for (var V = C.length - 1; V >= 0; V--) j = __decoratorContext$5(N, S, A = {}, m[3], z), N && (j.static = P, j.private = F, M = j.access = { has: F ? (m) => __privateIn$3(T, m) : (m) => S in m }, N ^ 3 && (M.get = F ? (m) => (N ^ 1 ? __privateGet$6 : __privateMethod$4)(m, T, N ^ 4 ? D : B.get) : (m) => m[S]), N > 2 && (M.set = F ? (m, x) => __privateSet$6(m, T, x, N ^ 4 ? D : B.set) : (m, x) => m[S] = x)), k = (0, C[V])(N ? N < 4 ? F ? D : B[L] : N > 4 ? void 0 : {
		get: B.get,
		set: B.set
	} : T, j), A._ = 1, N ^ 4 || k === void 0 ? __expectFn$5(k) && (N > 4 ? R.unshift(k) : N ? F ? D = k : B[L] = k : T = k) : typeof k != "object" || !k ? __typeError$6("Object expected") : (__expectFn$5(O = k.get) && (B.get = O), __expectFn$5(O = k.set) && (B.set = O), __expectFn$5(O = k.init) && R.unshift(O));
	return N || __decoratorMetadata$5(m, T), B && __defProp$6(T, S, B), F ? N ^ 4 ? D : B : T;
}, __accessCheck$6 = (m, x, S) => x.has(m) || __typeError$6("Cannot " + S), __privateIn$3 = (m, x) => Object(x) === x ? m.has(x) : __typeError$6("Cannot use the \"in\" operator on this value"), __privateGet$6 = (m, x, S) => (__accessCheck$6(m, x, "read from private field"), S ? S.call(m) : x.get(m)), __privateAdd$6 = (m, x, S) => x.has(m) ? __typeError$6("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$6 = (m, x, S, C) => (__accessCheck$6(m, x, "write to private field"), C ? C.call(m, S) : x.set(m, S), S), __privateMethod$4 = (m, x, S) => (__accessCheck$6(m, x, "access private method"), S);
function computed(m, x) {
	if (x) {
		let S;
		return w(() => {
			let C = m();
			return C && S && x(S, C) ? S : (S = C, C);
		});
	}
	return w(m);
}
function deepEqual(m, x) {
	if (Object.is(m, x)) return !0;
	if (m === null || x === null) return !1;
	if (typeof m == "function" && typeof x == "function") return m === x;
	if (m instanceof Set && x instanceof Set) {
		if (m.size !== x.size) return !1;
		for (let S of m) if (!x.has(S)) return !1;
		return !0;
	}
	if (Array.isArray(m)) return !Array.isArray(x) || m.length !== x.length ? !1 : !m.some((m, S) => !deepEqual(m, x[S]));
	if (typeof m == "object" && typeof x == "object") {
		let S = Object.keys(m), C = Object.keys(x);
		return S.length === C.length ? !S.some((S) => !deepEqual(m[S], x[S])) : !1;
	}
	return !1;
}
function reactive({ get: m }, x) {
	return {
		init(m) {
			return d(m);
		},
		get() {
			return m.call(this).value;
		},
		set(x) {
			let S = m.call(this);
			S.peek() !== x && (S.value = x);
		}
	};
}
function derived(m, x) {
	let S = /* @__PURE__ */ new WeakMap();
	return function() {
		let x = S.get(this);
		return x || (x = computed(m.bind(this)), S.set(this, x)), x.value;
	};
}
function enumerable(m = !0) {
	return function(x, S) {
		S.addInitializer(function() {
			let x = S.kind === "field" || S.static ? this : Object.getPrototypeOf(this), C = Object.getOwnPropertyDescriptor(x, S.name);
			C && Object.defineProperty(x, S.name, __spreadProps$6(__spreadValues$7({}, C), { enumerable: m }));
		});
	};
}
function effects(...m) {
	let x = m.map(E);
	return () => x.forEach((m) => m());
}
var _previous_dec, _initial_dec, _current_dec$1, _current_dec2, _previous_dec2, _initial_dec2 = [reactive], _init$5, _initial, _a$3, initial_get, initial_set, _ValueHistory_instances, _previous, _b$1, previous_get, previous_set, _current, _c$2, current_get, current_set;
_previous_dec2 = [reactive], _current_dec2 = [reactive], _current_dec$1 = [enumerable()], _initial_dec = [enumerable()], _previous_dec = [enumerable()];
var ValueHistory = class {
	constructor(m, x = Object.is) {
		this.defaultValue = m, this.equals = x, __runInitializers$5(_init$5, 5, this), __privateAdd$6(this, _ValueHistory_instances), __privateAdd$6(this, _initial, __runInitializers$5(_init$5, 8, this)), __runInitializers$5(_init$5, 11, this), __privateAdd$6(this, _previous, __runInitializers$5(_init$5, 12, this)), __runInitializers$5(_init$5, 15, this), __privateAdd$6(this, _current, __runInitializers$5(_init$5, 16, this)), __runInitializers$5(_init$5, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return __privateGet$6(this, _ValueHistory_instances, current_get);
	}
	get initial() {
		return __privateGet$6(this, _ValueHistory_instances, initial_get);
	}
	get previous() {
		return __privateGet$6(this, _ValueHistory_instances, previous_get);
	}
	set current(m) {
		let x = n(() => __privateGet$6(this, _ValueHistory_instances, current_get));
		m && x && this.equals(x, m) || r(() => {
			__privateGet$6(this, _ValueHistory_instances, initial_get) || __privateSet$6(this, _ValueHistory_instances, m, initial_set), __privateSet$6(this, _ValueHistory_instances, x, previous_set), __privateSet$6(this, _ValueHistory_instances, m, current_set);
		});
	}
	reset(m = this.defaultValue) {
		r(() => {
			__privateSet$6(this, _ValueHistory_instances, void 0, previous_set), __privateSet$6(this, _ValueHistory_instances, m, initial_set), __privateSet$6(this, _ValueHistory_instances, m, current_set);
		});
	}
};
_init$5 = __decoratorStart$5(null), _initial = /* @__PURE__ */ new WeakMap(), _ValueHistory_instances = /* @__PURE__ */ new WeakSet(), _previous = /* @__PURE__ */ new WeakMap(), _current = /* @__PURE__ */ new WeakMap(), _a$3 = __decorateElement$5(_init$5, 20, "#initial", _initial_dec2, _ValueHistory_instances, _initial), initial_get = _a$3.get, initial_set = _a$3.set, _b$1 = __decorateElement$5(_init$5, 20, "#previous", _previous_dec2, _ValueHistory_instances, _previous), previous_get = _b$1.get, previous_set = _b$1.set, _c$2 = __decorateElement$5(_init$5, 20, "#current", _current_dec2, _ValueHistory_instances, _current), current_get = _c$2.get, current_set = _c$2.set, __decorateElement$5(_init$5, 2, "current", _current_dec$1, ValueHistory), __decorateElement$5(_init$5, 2, "initial", _initial_dec, ValueHistory), __decorateElement$5(_init$5, 2, "previous", _previous_dec, ValueHistory), __decoratorMetadata$5(_init$5, ValueHistory);
function snapshot(m) {
	return n(() => {
		let x = {};
		for (let S in m) x[S] = m[S];
		return x;
	});
}
var _store, WeakStore = class {
	constructor() {
		__privateAdd$6(this, _store, /* @__PURE__ */ new WeakMap());
	}
	get(m, x) {
		return m ? __privateGet$6(this, _store).get(m)?.get(x) : void 0;
	}
	set(m, x, S) {
		if (m) return __privateGet$6(this, _store).has(m) || __privateGet$6(this, _store).set(m, /* @__PURE__ */ new Map()), __privateGet$6(this, _store).get(m)?.set(x, S);
	}
	clear(m) {
		return m ? __privateGet$6(this, _store).get(m)?.clear() : void 0;
	}
};
_store = /* @__PURE__ */ new WeakMap();
var __create$4 = Object.create, __defProp$5 = Object.defineProperty, __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __knownSymbol$4 = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError$5 = (m) => {
	throw TypeError(m);
}, __pow = Math.pow, __defNormalProp$5 = (m, x, S) => x in m ? __defProp$5(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$6 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$5.call(x, S) && __defNormalProp$5(m, S, x[S]);
	if (__getOwnPropSymbols$5) for (var S of __getOwnPropSymbols$5(x)) __propIsEnum$5.call(x, S) && __defNormalProp$5(m, S, x[S]);
	return m;
}, __name$2 = (m, x) => __defProp$5(m, "name", {
	value: x,
	configurable: !0
}), __decoratorStart$4 = (m) => [
	,
	,
	,
	__create$4(m?.[__knownSymbol$4("metadata")] ?? null)
], __decoratorStrings$4 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn$4 = (m) => m !== void 0 && typeof m != "function" ? __typeError$5("Function expected") : m, __decoratorContext$4 = (m, x, S, C, T) => ({
	kind: __decoratorStrings$4[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError$5("Already initialized") : T.push(__expectFn$4(m || null))
}), __decoratorMetadata$4 = (m, x) => __defNormalProp$5(x, __knownSymbol$4("metadata"), m[3]), __runInitializers$4 = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) x & 1 ? D[T].call(S) : C = D[T].call(S, C);
	return C;
}, __decorateElement$4 = (m, x, S, C, T, D) => {
	var O, k, A, j, M, N = x & 7, P = !!(x & 8), F = !!(x & 16), I = N > 3 ? m.length + 1 : N ? P ? 1 : 2 : 0, L = __decoratorStrings$4[N + 5], R = N > 3 && (m[I - 1] = []), z = m[I] || (m[I] = []), B = N && (!F && !P && (T = T.prototype), N < 5 && (N > 3 || !F) && __getOwnPropDesc$4(N < 4 ? T : {
		get [S]() {
			return __privateGet$5(this, D);
		},
		set [S](m) {
			return __privateSet$5(this, D, m);
		}
	}, S));
	N ? F && N < 4 && __name$2(D, (N > 2 ? "set " : N > 1 ? "get " : "") + S) : __name$2(T, S);
	for (var V = C.length - 1; V >= 0; V--) j = __decoratorContext$4(N, S, A = {}, m[3], z), N && (j.static = P, j.private = F, M = j.access = { has: F ? (m) => __privateIn$2(T, m) : (m) => S in m }, N ^ 3 && (M.get = F ? (m) => (N ^ 1 ? __privateGet$5 : __privateMethod$3)(m, T, N ^ 4 ? D : B.get) : (m) => m[S]), N > 2 && (M.set = F ? (m, x) => __privateSet$5(m, T, x, N ^ 4 ? D : B.set) : (m, x) => m[S] = x)), k = (0, C[V])(N ? N < 4 ? F ? D : B[L] : N > 4 ? void 0 : {
		get: B.get,
		set: B.set
	} : T, j), A._ = 1, N ^ 4 || k === void 0 ? __expectFn$4(k) && (N > 4 ? R.unshift(k) : N ? F ? D = k : B[L] = k : T = k) : typeof k != "object" || !k ? __typeError$5("Object expected") : (__expectFn$4(O = k.get) && (B.get = O), __expectFn$4(O = k.set) && (B.set = O), __expectFn$4(O = k.init) && R.unshift(O));
	return N || __decoratorMetadata$4(m, T), B && __defProp$5(T, S, B), F ? N ^ 4 ? D : B : T;
}, __accessCheck$5 = (m, x, S) => x.has(m) || __typeError$5("Cannot " + S), __privateIn$2 = (m, x) => Object(x) === x ? m.has(x) : __typeError$5("Cannot use the \"in\" operator on this value"), __privateGet$5 = (m, x, S) => (__accessCheck$5(m, x, "read from private field"), S ? S.call(m) : x.get(m)), __privateAdd$5 = (m, x, S) => x.has(m) ? __typeError$5("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$5 = (m, x, S, C) => (__accessCheck$5(m, x, "write to private field"), C ? C.call(m, S) : x.set(m, S), S), __privateMethod$3 = (m, x, S) => (__accessCheck$5(m, x, "access private method"), S), Point = class m {
	constructor(m, x) {
		this.x = m, this.y = x;
	}
	static delta(x, S) {
		return new m(x.x - S.x, x.y - S.y);
	}
	static distance(m, x) {
		return Math.hypot(m.x - x.x, m.y - x.y);
	}
	static equals(m, x) {
		return m.x === x.x && m.y === x.y;
	}
	static from({ x, y: S }) {
		return new m(x, S);
	}
}, Rectangle = class m {
	constructor(m, x, S, C) {
		this.left = m, this.top = x, this.width = S, this.height = C, this.scale = {
			x: 1,
			y: 1
		};
	}
	get inverseScale() {
		return {
			x: 1 / this.scale.x,
			y: 1 / this.scale.y
		};
	}
	translate(x, S) {
		let { top: C, left: T, width: D, height: O, scale: k } = this, A = new m(T + x, C + S, D, O);
		return A.scale = __spreadValues$6({}, k), A;
	}
	get boundingRectangle() {
		let { width: m, height: x, left: S, top: C, right: T, bottom: D } = this;
		return {
			width: m,
			height: x,
			left: S,
			top: C,
			right: T,
			bottom: D
		};
	}
	get center() {
		let { left: m, top: x, right: S, bottom: C } = this;
		return new Point((m + S) / 2, (x + C) / 2);
	}
	get area() {
		let { width: m, height: x } = this;
		return m * x;
	}
	equals(x) {
		if (!(x instanceof m)) return !1;
		let { left: S, top: C, width: T, height: D } = this;
		return S === x.left && C === x.top && T === x.width && D === x.height;
	}
	containsPoint(m) {
		let { top: x, left: S, bottom: C, right: T } = this;
		return x <= m.y && m.y <= C && S <= m.x && m.x <= T;
	}
	intersectionArea(x) {
		return x instanceof m ? rectangleRectangleIntersection(this, x) : 0;
	}
	intersectionRatio(m) {
		let { area: x } = this, S = this.intersectionArea(m);
		return S / (m.area + x - S);
	}
	get bottom() {
		let { top: m, height: x } = this;
		return m + x;
	}
	get right() {
		let { left: m, width: x } = this;
		return m + x;
	}
	get aspectRatio() {
		let { width: m, height: x } = this;
		return m / x;
	}
	get corners() {
		return [
			{
				x: this.left,
				y: this.top
			},
			{
				x: this.right,
				y: this.top
			},
			{
				x: this.left,
				y: this.bottom
			},
			{
				x: this.right,
				y: this.bottom
			}
		];
	}
	static from({ top: x, left: S, width: C, height: T }) {
		return new m(S, x, C, T);
	}
	static delta(m, x, S = {
		x: "center",
		y: "center"
	}) {
		let C = (m, x) => {
			let C = S[x], T = x === "x" ? m.left : m.top, D = x === "x" ? m.width : m.height;
			return C == "start" ? T : C == "end" ? T + D : T + D / 2;
		};
		return Point.delta({
			x: C(m, "x"),
			y: C(m, "y")
		}, {
			x: C(x, "x"),
			y: C(x, "y")
		});
	}
	static intersectionRatio(x, S) {
		return m.from(x).intersectionRatio(m.from(S));
	}
};
function rectangleRectangleIntersection(m, x) {
	let S = Math.max(x.top, m.top), C = Math.max(x.left, m.left), T = Math.min(x.left + x.width, m.left + m.width), D = Math.min(x.top + x.height, m.top + m.height), O = T - C, k = D - S;
	return C < T && S < D ? O * k : 0;
}
var _direction_dec$1, _delta_dec$1, _a$2, _timestamp$1, _init$4, Position$1 = class extends (_a$2 = ValueHistory, _delta_dec$1 = [derived], _direction_dec$1 = [derived], _a$2) {
	constructor(m) {
		let x = Point.from(m);
		super(x, (m, x) => Point.equals(m, x)), __runInitializers$4(_init$4, 5, this), __privateAdd$5(this, _timestamp$1, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Point.delta(this.current, this.initial);
	}
	get direction() {
		let { current: m, previous: x } = this;
		if (!x) return null;
		let S = {
			x: m.x - x.x,
			y: m.y - x.y
		};
		return !S.x && !S.y ? null : Math.abs(S.x) > Math.abs(S.y) ? S.x > 0 ? "right" : "left" : S.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(m) {
		let { current: x } = this, S = Point.from(m), C = {
			x: S.x - x.x,
			y: S.y - x.y
		}, T = Date.now(), D = T - __privateGet$5(this, _timestamp$1), O = (m) => Math.round(m / D * 100);
		r(() => {
			__privateSet$5(this, _timestamp$1, T), this.velocity = {
				x: O(C.x),
				y: O(C.y)
			}, super.current = S;
		});
	}
	reset(m = this.defaultValue) {
		super.reset(Point.from(m)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
_init$4 = __decoratorStart$4(_a$2), _timestamp$1 = /* @__PURE__ */ new WeakMap(), __decorateElement$4(_init$4, 2, "delta", _delta_dec$1, Position$1), __decorateElement$4(_init$4, 2, "direction", _direction_dec$1, Position$1), __decoratorMetadata$4(_init$4, Position$1);
function exceedsDistance({ x: m, y: x }, S) {
	let C = Math.abs(m), T = Math.abs(x);
	return typeof S == "number" ? Math.sqrt(__pow(C, 2) + __pow(T, 2)) > S : "x" in S && "y" in S ? C > S.x && T > S.y : "x" in S ? C > S.x : "y" in S ? T > S.y : !1;
}
var Axis$1 = /* @__PURE__ */ ((m) => (m.Horizontal = "x", m.Vertical = "y", m))(Axis$1 || {}), Axes = Object.values(Axis$1), __create$3 = Object.create, __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __knownSymbol$3 = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError$4 = (m) => {
	throw TypeError(m);
}, __defNormalProp$4 = (m, x, S) => x in m ? __defProp$4(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$5 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$4.call(x, S) && __defNormalProp$4(m, S, x[S]);
	if (__getOwnPropSymbols$4) for (var S of __getOwnPropSymbols$4(x)) __propIsEnum$4.call(x, S) && __defNormalProp$4(m, S, x[S]);
	return m;
}, __spreadProps$5 = (m, x) => __defProps$4(m, __getOwnPropDescs$4(x)), __name$1 = (m, x) => __defProp$4(m, "name", {
	value: x,
	configurable: !0
}), __objRest$4 = (m, x) => {
	var S = {};
	for (var C in m) __hasOwnProp$4.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && __getOwnPropSymbols$4) for (var C of __getOwnPropSymbols$4(m)) x.indexOf(C) < 0 && __propIsEnum$4.call(m, C) && (S[C] = m[C]);
	return S;
}, __decoratorStart$3 = (m) => [
	,
	,
	,
	__create$3(m?.[__knownSymbol$3("metadata")] ?? null)
], __decoratorStrings$3 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn$3 = (m) => m !== void 0 && typeof m != "function" ? __typeError$4("Function expected") : m, __decoratorContext$3 = (m, x, S, C, T) => ({
	kind: __decoratorStrings$3[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError$4("Already initialized") : T.push(__expectFn$3(m || null))
}), __decoratorMetadata$3 = (m, x) => __defNormalProp$4(x, __knownSymbol$3("metadata"), m[3]), __runInitializers$3 = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) x & 1 ? D[T].call(S) : C = D[T].call(S, C);
	return C;
}, __decorateElement$3 = (m, x, S, C, T, D) => {
	var O, k, A, j, M, N = x & 7, P = !!(x & 8), F = !!(x & 16), I = N > 3 ? m.length + 1 : N ? P ? 1 : 2 : 0, L = __decoratorStrings$3[N + 5], R = N > 3 && (m[I - 1] = []), z = m[I] || (m[I] = []), B = N && (!F && !P && (T = T.prototype), N < 5 && (N > 3 || !F) && __getOwnPropDesc$3(N < 4 ? T : {
		get [S]() {
			return __privateGet$4(this, D);
		},
		set [S](m) {
			return __privateSet$4(this, D, m);
		}
	}, S));
	N ? F && N < 4 && __name$1(D, (N > 2 ? "set " : N > 1 ? "get " : "") + S) : __name$1(T, S);
	for (var V = C.length - 1; V >= 0; V--) j = __decoratorContext$3(N, S, A = {}, m[3], z), N && (j.static = P, j.private = F, M = j.access = { has: F ? (m) => __privateIn$1(T, m) : (m) => S in m }, N ^ 3 && (M.get = F ? (m) => (N ^ 1 ? __privateGet$4 : __privateMethod$2)(m, T, N ^ 4 ? D : B.get) : (m) => m[S]), N > 2 && (M.set = F ? (m, x) => __privateSet$4(m, T, x, N ^ 4 ? D : B.set) : (m, x) => m[S] = x)), k = (0, C[V])(N ? N < 4 ? F ? D : B[L] : N > 4 ? void 0 : {
		get: B.get,
		set: B.set
	} : T, j), A._ = 1, N ^ 4 || k === void 0 ? __expectFn$3(k) && (N > 4 ? R.unshift(k) : N ? F ? D = k : B[L] = k : T = k) : typeof k != "object" || !k ? __typeError$4("Object expected") : (__expectFn$3(O = k.get) && (B.get = O), __expectFn$3(O = k.set) && (B.set = O), __expectFn$3(O = k.init) && R.unshift(O));
	return N || __decoratorMetadata$3(m, T), B && __defProp$4(T, S, B), F ? N ^ 4 ? D : B : T;
}, __accessCheck$4 = (m, x, S) => x.has(m) || __typeError$4("Cannot " + S), __privateIn$1 = (m, x) => Object(x) === x ? m.has(x) : __typeError$4("Cannot use the \"in\" operator on this value"), __privateGet$4 = (m, x, S) => (__accessCheck$4(m, x, "read from private field"), S ? S.call(m) : x.get(m)), __privateAdd$4 = (m, x, S) => x.has(m) ? __typeError$4("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$4 = (m, x, S, C) => (__accessCheck$4(m, x, "write to private field"), C ? C.call(m, S) : x.set(m, S), S), __privateMethod$2 = (m, x, S) => (__accessCheck$4(m, x, "access private method"), S);
function configure(m, x) {
	return {
		plugin: m,
		options: x
	};
}
function configurator(m) {
	return (x) => configure(m, x);
}
function descriptor(m) {
	return typeof m == "function" ? {
		plugin: m,
		options: void 0
	} : m;
}
var _disabled_dec = [reactive], _init$3, _disabled, _cleanupFunctions$1, Plugin = class {
	constructor(m, x) {
		this.manager = m, this.options = x, __privateAdd$4(this, _disabled, __runInitializers$3(_init$3, 8, this, !1)), __runInitializers$3(_init$3, 11, this), __privateAdd$4(this, _cleanupFunctions$1, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return n(() => this.disabled);
	}
	configure(m) {
		this.options = m;
	}
	registerEffect(m) {
		let x = E(m.bind(this));
		return __privateGet$4(this, _cleanupFunctions$1).add(x), x;
	}
	destroy() {
		__privateGet$4(this, _cleanupFunctions$1).forEach((m) => m());
	}
	static configure(m) {
		return configure(this, m);
	}
};
_init$3 = __decoratorStart$3(null), _disabled = /* @__PURE__ */ new WeakMap(), _cleanupFunctions$1 = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init$3, 4, "disabled", _disabled_dec, Plugin, _disabled), __decoratorMetadata$3(_init$3, Plugin);
var CorePlugin = class extends Plugin {}, _previousValues, PluginRegistry = class {
	constructor(m) {
		this.manager = m, this.instances = /* @__PURE__ */ new Map(), __privateAdd$4(this, _previousValues, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(m) {
		let x = m.map(descriptor).reduceRight((m, x) => m.some(({ plugin: m }) => m === x.plugin) ? m : [x, ...m], []), S = x.map(({ plugin: m }) => m);
		for (let m of __privateGet$4(this, _previousValues)) if (!S.includes(m)) {
			if (m.prototype instanceof CorePlugin) continue;
			this.unregister(m);
		}
		for (let { plugin: m, options: S } of x) this.register(m, S);
		__privateSet$4(this, _previousValues, S);
	}
	get(m) {
		return this.instances.get(m);
	}
	register(m, x) {
		let S = this.instances.get(m);
		if (S) return S.options !== x && (S.options = x), S;
		let C = new m(this.manager, x);
		return this.instances.set(m, C), C;
	}
	unregister(m) {
		let x = this.instances.get(m);
		x && (x.destroy(), this.instances.delete(m));
	}
	destroy() {
		for (let m of this.instances.values()) m.destroy();
		this.instances.clear();
	}
};
_previousValues = /* @__PURE__ */ new WeakMap();
function sortCollisions(m, x) {
	return m.priority === x.priority ? m.type === x.type ? x.value - m.value : x.type - m.type : x.priority - m.priority;
}
var DEFAULT_VALUE = [], _previousCoordinates, _collisions, CollisionObserver = class extends Plugin {
	constructor(m) {
		super(m), __privateAdd$4(this, _previousCoordinates), __privateAdd$4(this, _collisions), this.computeCollisions = this.computeCollisions.bind(this), __privateSet$4(this, _collisions, d(DEFAULT_VALUE)), this.destroy = effects(() => {
			let m = this.computeCollisions(), x = n(() => this.manager.dragOperation.position.current);
			if (m !== DEFAULT_VALUE) {
				let m = __privateGet$4(this, _previousCoordinates);
				if (__privateSet$4(this, _previousCoordinates, x), m && x.x == m.x && x.y == m.y) return;
			} else __privateSet$4(this, _previousCoordinates, void 0);
			__privateGet$4(this, _collisions).value = m;
		}, () => {
			let { dragOperation: m } = this.manager;
			m.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(m = !0) {
		n(() => {
			m ? __privateGet$4(this, _collisions).value = this.computeCollisions() : __privateSet$4(this, _previousCoordinates, void 0);
		});
	}
	computeCollisions(m, x) {
		let { registry: S, dragOperation: C } = this.manager, { source: T, shape: D, status: O } = C;
		if (!O.initialized || !D) return DEFAULT_VALUE;
		let k = [], A = [];
		for (let D of m ?? S.droppables) {
			if (D.disabled || T && !D.accepts(T)) continue;
			let m = x ?? D.collisionDetector;
			if (!m) continue;
			A.push(D), D.shape;
			let S = n(() => m({
				droppable: D,
				dragOperation: C
			}));
			S && (D.collisionPriority != null && (S.priority = D.collisionPriority), k.push(S));
		}
		return A.length === 0 ? DEFAULT_VALUE : (k.sort(sortCollisions), k);
	}
	get collisions() {
		return __privateGet$4(this, _collisions).value;
	}
};
_previousCoordinates = /* @__PURE__ */ new WeakMap(), _collisions = /* @__PURE__ */ new WeakMap();
var Monitor$1 = class {
	constructor() {
		this.registry = /* @__PURE__ */ new Map();
	}
	addEventListener(m, x) {
		let { registry: S } = this, C = new Set(S.get(m));
		return C.add(x), S.set(m, C), () => this.removeEventListener(m, x);
	}
	removeEventListener(m, x) {
		let { registry: S } = this, C = new Set(S.get(m));
		C.delete(x), S.set(m, C);
	}
	dispatch(m, ...x) {
		let { registry: S } = this, C = S.get(m);
		if (C) for (let m of C) m(...x);
	}
}, DragDropMonitor = class extends Monitor$1 {
	constructor(m) {
		super(), this.manager = m;
	}
	dispatch(m, x) {
		let S = [x, this.manager];
		super.dispatch(m, ...S);
	}
};
function defaultPreventable(m, x = !0) {
	let S = !1;
	return __spreadProps$5(__spreadValues$5({}, m), {
		cancelable: x,
		get defaultPrevented() {
			return S;
		},
		preventDefault() {
			x && (S = !0);
		}
	});
}
var CollisionNotifier = class extends CorePlugin {
	constructor(m) {
		super(m);
		let x = (m, x) => m.map(({ id: m }) => m).join("") === x.map(({ id: m }) => m).join(""), S = [];
		this.destroy = effects(() => {
			let { dragOperation: x, collisionObserver: C } = m;
			x.status.initializing && (S = [], C.enable());
		}, () => {
			let { collisionObserver: C, monitor: T } = m, { collisions: D } = C;
			if (C.isDisabled()) return;
			let O = defaultPreventable({ collisions: D });
			if (T.dispatch("collision", O), O.defaultPrevented || x(D, S)) return;
			S = D;
			let [k] = D;
			n(() => {
				k?.id !== m.dragOperation.target?.id && (C.disable(), m.actions.setDropTarget(k?.id).then(() => {
					C.enable();
				}));
			});
		});
	}
}, CollisionPriority = /* @__PURE__ */ ((m) => (m[m.Lowest = 0] = "Lowest", m[m.Low = 1] = "Low", m[m.Normal = 2] = "Normal", m[m.High = 3] = "High", m[m.Highest = 4] = "Highest", m))(CollisionPriority || {}), CollisionType = /* @__PURE__ */ ((m) => (m[m.Collision = 0] = "Collision", m[m.ShapeIntersection = 1] = "ShapeIntersection", m[m.PointerIntersection = 2] = "PointerIntersection", m))(CollisionType || {}), _dropped_dec, _dragging_dec, _initialized_dec, _initializing_dec, _idle_dec, _current_dec, _value_dec = [reactive], _init2$1, _value;
_current_dec = [derived], _idle_dec = [derived], _initializing_dec = [derived], _initialized_dec = [derived], _dragging_dec = [derived], _dropped_dec = [derived];
var Status = class {
	constructor() {
		__runInitializers$3(_init2$1, 5, this), __privateAdd$4(this, _value, __runInitializers$3(_init2$1, 8, this, "idle")), __runInitializers$3(_init2$1, 11, this);
	}
	get current() {
		return this.value;
	}
	get idle() {
		return this.value === "idle";
	}
	get initializing() {
		return this.value === "initializing";
	}
	get initialized() {
		let { value: m } = this;
		return m !== "idle" && m !== "initialization-pending";
	}
	get dragging() {
		return this.value === "dragging";
	}
	get dropped() {
		return this.value === "dropped";
	}
	set(m) {
		this.value = m;
	}
};
_init2$1 = __decoratorStart$3(null), _value = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init2$1, 4, "value", _value_dec, Status, _value), __decorateElement$3(_init2$1, 2, "current", _current_dec, Status), __decorateElement$3(_init2$1, 2, "idle", _idle_dec, Status), __decorateElement$3(_init2$1, 2, "initializing", _initializing_dec, Status), __decorateElement$3(_init2$1, 2, "initialized", _initialized_dec, Status), __decorateElement$3(_init2$1, 2, "dragging", _dragging_dec, Status), __decorateElement$3(_init2$1, 2, "dropped", _dropped_dec, Status), __decoratorMetadata$3(_init2$1, Status);
var DragActions = class {
	constructor(m) {
		this.manager = m;
	}
	setDragSource(m) {
		let { dragOperation: x } = this.manager;
		x.sourceIdentifier = typeof m == "string" || typeof m == "number" ? m : m.id;
	}
	setDropTarget(m) {
		return n(() => {
			let { dragOperation: x } = this.manager, S = m ?? null;
			if (x.targetIdentifier === S) return Promise.resolve(!1);
			x.targetIdentifier = S;
			let C = defaultPreventable({ operation: x.snapshot() });
			return x.status.dragging && this.manager.monitor.dispatch("dragover", C), this.manager.renderer.rendering.then(() => C.defaultPrevented);
		});
	}
	start(m) {
		return n(() => {
			let { dragOperation: x } = this.manager;
			if (m.source != null && this.setDragSource(m.source), !x.source) throw Error("Cannot start a drag operation without a drag source");
			if (!x.status.idle) throw Error("Cannot start a drag operation while another is active");
			let S = new AbortController(), { event: C, coordinates: T } = m;
			r(() => {
				x.status.set("initialization-pending"), x.shape = null, x.canceled = !1, x.activatorEvent = C ?? null, x.position.reset(T);
			});
			let D = defaultPreventable({ operation: x.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", D), D.defaultPrevented ? (x.reset(), S.abort(), S) : (x.status.set("initializing"), x.controller = S, this.manager.renderer.rendering.then(() => {
				if (S.signal.aborted) return;
				let { status: m } = x;
				m.current === "initializing" && (x.status.set("dragging"), this.manager.monitor.dispatch("dragstart", {
					nativeEvent: C,
					operation: x.snapshot(),
					cancelable: !1
				}));
			}), S);
		});
	}
	move(m) {
		return n(() => {
			let { dragOperation: x } = this.manager, { status: S, controller: C } = x;
			if (!S.dragging || !C || C.signal.aborted) return;
			let T = defaultPreventable({
				nativeEvent: m.event,
				operation: x.snapshot(),
				by: m.by,
				to: m.to
			}, m.cancelable ?? !0);
			(m.propagate ?? !0) && this.manager.monitor.dispatch("dragmove", T), queueMicrotask(() => {
				if (T.defaultPrevented) return;
				let S = m.to ?? {
					x: x.position.current.x + (m.by?.x ?? 0),
					y: x.position.current.y + (m.by?.y ?? 0)
				};
				x.position.current = S;
			});
		});
	}
	stop(m = {}) {
		return n(() => {
			let { dragOperation: x } = this.manager, { controller: S } = x;
			if (!S || S.signal.aborted) return;
			let C, T = () => {
				let m = {
					resume: () => {},
					abort: () => {}
				};
				return C = new Promise((x, S) => {
					m.resume = x, m.abort = S;
				}), m;
			};
			S.abort();
			let D = () => {
				this.manager.renderer.rendering.then(() => {
					x.status.set("dropped");
					let m = n(() => x.source?.status === "dropping"), C = () => {
						x.controller === S && (x.controller = void 0), x.reset();
					};
					if (m) {
						let { source: m } = x, S = E(() => {
							m?.status === "idle" && (S(), C());
						});
					} else this.manager.renderer.rendering.then(C);
				});
			};
			x.canceled = m.canceled ?? !1, this.manager.monitor.dispatch("dragend", {
				nativeEvent: m.event,
				operation: x.snapshot(),
				canceled: m.canceled ?? !1,
				suspend: T
			}), C ? C.then(D).catch(() => x.reset()) : D();
		});
	}
}, _disabled_dec2, _data_dec, _id_dec, _manager_dec = [reactive], _init3$1, _manager, _id, _data, _disabled2;
_id_dec = [reactive], _data_dec = [reactive], _disabled_dec2 = [reactive];
var Entity = class {
	constructor(m, x) {
		__privateAdd$4(this, _manager, __runInitializers$3(_init3$1, 8, this)), __runInitializers$3(_init3$1, 11, this), __privateAdd$4(this, _id, __runInitializers$3(_init3$1, 12, this)), __runInitializers$3(_init3$1, 15, this), __privateAdd$4(this, _data, __runInitializers$3(_init3$1, 16, this)), __runInitializers$3(_init3$1, 19, this), __privateAdd$4(this, _disabled2, __runInitializers$3(_init3$1, 20, this)), __runInitializers$3(_init3$1, 23, this);
		let { effects: S, id: C, data: T = {}, disabled: D = !1, register: O = !0 } = m, k = C;
		this.manager = x, this.id = C, this.data = T, this.disabled = D, this.effects = () => [() => {
			let { id: m, manager: x } = this;
			if (m !== k) return x?.registry.register(this), () => x?.registry.unregister(this);
		}, ...S?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), x && O && queueMicrotask(this.register);
	}
	register() {
		return this.manager?.registry.register(this);
	}
	unregister() {
		var m;
		(m = this.manager) == null || m.registry.unregister(this);
	}
	destroy() {
		var m;
		(m = this.manager) == null || m.registry.unregister(this);
	}
};
_init3$1 = __decoratorStart$3(null), _manager = /* @__PURE__ */ new WeakMap(), _id = /* @__PURE__ */ new WeakMap(), _data = /* @__PURE__ */ new WeakMap(), _disabled2 = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init3$1, 4, "manager", _manager_dec, Entity, _manager), __decorateElement$3(_init3$1, 4, "id", _id_dec, Entity, _id), __decorateElement$3(_init3$1, 4, "data", _data_dec, Entity, _data), __decorateElement$3(_init3$1, 4, "disabled", _disabled_dec2, Entity, _disabled2), __decoratorMetadata$3(_init3$1, Entity);
var EntityRegistry = class {
	constructor() {
		this.map = d(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (m, x) => {
			let S = this.map.peek(), C = S.get(m), T = () => this.unregister(m, x);
			if (C === x) return T;
			C && (this.cleanupFunctions.get(C)?.(), this.cleanupFunctions.delete(C));
			let D = new Map(S);
			D.set(m, x), this.map.value = D;
			let O = effects(...x.effects());
			return this.cleanupFunctions.set(x, O), T;
		}, this.unregister = (m, x) => {
			let S = this.map.peek();
			if (S.get(m) !== x) return;
			this.cleanupFunctions.get(x)?.(), this.cleanupFunctions.delete(x);
			let C = new Map(S);
			C.delete(m), this.map.value = C;
		};
	}
	[Symbol.iterator]() {
		return this.map.peek().values();
	}
	get value() {
		return this.map.value.values();
	}
	has(m) {
		return this.map.value.has(m);
	}
	get(m) {
		return this.map.value.get(m);
	}
	destroy() {
		for (let m of this) this.cleanupFunctions.get(m)?.(), m.destroy();
		this.map.value = /* @__PURE__ */ new Map();
	}
}, _isDragSource_dec, _isDragging_dec, _isDropping_dec, _status_dec, _modifiers_dec, _type_dec, _c$1, _init4$1, _type, _modifiers, _status, Draggable$1 = class extends (_c$1 = Entity, _type_dec = [reactive], _modifiers_dec = [reactive], _status_dec = [reactive], _isDropping_dec = [derived], _isDragging_dec = [derived], _isDragSource_dec = [derived], _c$1) {
	constructor(m, x) {
		var S = m, { modifiers: C, type: T, sensors: D } = S, O = __objRest$4(S, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(O, x), __runInitializers$3(_init4$1, 5, this), __privateAdd$4(this, _type, __runInitializers$3(_init4$1, 8, this)), __runInitializers$3(_init4$1, 11, this), __privateAdd$4(this, _modifiers, __runInitializers$3(_init4$1, 12, this)), __runInitializers$3(_init4$1, 15, this), __privateAdd$4(this, _status, __runInitializers$3(_init4$1, 16, this, this.isDragSource ? "dragging" : "idle")), __runInitializers$3(_init4$1, 19, this), this.type = T, this.sensors = D, this.modifiers = C, this.alignment = O.alignment;
	}
	get isDropping() {
		return this.status === "dropping" && this.isDragSource;
	}
	get isDragging() {
		return this.status === "dragging" && this.isDragSource;
	}
	get isDragSource() {
		return this.manager?.dragOperation.source?.id === this.id;
	}
};
_init4$1 = __decoratorStart$3(_c$1), _type = /* @__PURE__ */ new WeakMap(), _modifiers = /* @__PURE__ */ new WeakMap(), _status = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init4$1, 4, "type", _type_dec, Draggable$1, _type), __decorateElement$3(_init4$1, 4, "modifiers", _modifiers_dec, Draggable$1, _modifiers), __decorateElement$3(_init4$1, 4, "status", _status_dec, Draggable$1, _status), __decorateElement$3(_init4$1, 2, "isDropping", _isDropping_dec, Draggable$1), __decorateElement$3(_init4$1, 2, "isDragging", _isDragging_dec, Draggable$1), __decorateElement$3(_init4$1, 2, "isDragSource", _isDragSource_dec, Draggable$1), __decoratorMetadata$3(_init4$1, Draggable$1);
var _isDropTarget_dec, _shape_dec, _collisionPriority_dec, _collisionDetector_dec, _type_dec2, _accept_dec, _c2$1, _init5$1, _accept, _type2, _collisionDetector, _collisionPriority, _shape, Droppable$1 = class extends (_c2$1 = Entity, _accept_dec = [reactive], _type_dec2 = [reactive], _collisionDetector_dec = [reactive], _collisionPriority_dec = [reactive], _shape_dec = [reactive], _isDropTarget_dec = [derived], _c2$1) {
	constructor(m, x) {
		var S = m, { accept: C, collisionDetector: T, collisionPriority: D, type: O } = S, k = __objRest$4(S, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(k, x), __runInitializers$3(_init5$1, 5, this), __privateAdd$4(this, _accept, __runInitializers$3(_init5$1, 8, this)), __runInitializers$3(_init5$1, 11, this), __privateAdd$4(this, _type2, __runInitializers$3(_init5$1, 12, this)), __runInitializers$3(_init5$1, 15, this), __privateAdd$4(this, _collisionDetector, __runInitializers$3(_init5$1, 16, this)), __runInitializers$3(_init5$1, 19, this), __privateAdd$4(this, _collisionPriority, __runInitializers$3(_init5$1, 20, this)), __runInitializers$3(_init5$1, 23, this), __privateAdd$4(this, _shape, __runInitializers$3(_init5$1, 24, this)), __runInitializers$3(_init5$1, 27, this), this.accept = C, this.collisionDetector = T, this.collisionPriority = D, this.type = O;
	}
	accepts(m) {
		let { accept: x } = this;
		return x ? typeof x == "function" ? x(m) : m.type ? Array.isArray(x) ? x.includes(m.type) : m.type === x : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
_init5$1 = __decoratorStart$3(_c2$1), _accept = /* @__PURE__ */ new WeakMap(), _type2 = /* @__PURE__ */ new WeakMap(), _collisionDetector = /* @__PURE__ */ new WeakMap(), _collisionPriority = /* @__PURE__ */ new WeakMap(), _shape = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init5$1, 4, "accept", _accept_dec, Droppable$1, _accept), __decorateElement$3(_init5$1, 4, "type", _type_dec2, Droppable$1, _type2), __decorateElement$3(_init5$1, 4, "collisionDetector", _collisionDetector_dec, Droppable$1, _collisionDetector), __decorateElement$3(_init5$1, 4, "collisionPriority", _collisionPriority_dec, Droppable$1, _collisionPriority), __decorateElement$3(_init5$1, 4, "shape", _shape_dec, Droppable$1, _shape), __decorateElement$3(_init5$1, 2, "isDropTarget", _isDropTarget_dec, Droppable$1), __decoratorMetadata$3(_init5$1, Droppable$1);
var Sensor = class extends Plugin {
	constructor(m, x) {
		super(m, x), this.manager = m, this.options = x;
	}
}, Modifier = class extends Plugin {
	constructor(m, x) {
		super(m, x), this.manager = m, this.options = x;
	}
	apply(m) {
		return m.transform;
	}
}, DragDropRegistry = class {
	constructor(m) {
		this.draggables = new EntityRegistry(), this.droppables = new EntityRegistry(), this.plugins = new PluginRegistry(m), this.sensors = new PluginRegistry(m), this.modifiers = new PluginRegistry(m);
	}
	register(m, x) {
		if (m instanceof Draggable$1) return this.draggables.register(m.id, m);
		if (m instanceof Droppable$1) return this.droppables.register(m.id, m);
		if (m.prototype instanceof Modifier) return this.modifiers.register(m, x);
		if (m.prototype instanceof Sensor) return this.sensors.register(m, x);
		if (m.prototype instanceof Plugin) return this.plugins.register(m, x);
		throw Error("Invalid instance type");
	}
	unregister(m) {
		if (m instanceof Entity) return m instanceof Draggable$1 ? this.draggables.unregister(m.id, m) : m instanceof Droppable$1 ? this.droppables.unregister(m.id, m) : () => {};
		if (m.prototype instanceof Modifier) return this.modifiers.unregister(m);
		if (m.prototype instanceof Sensor) return this.sensors.unregister(m);
		if (m.prototype instanceof Plugin) return this.plugins.unregister(m);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, _transform_dec, _target_dec, _source_dec, _modifiers_dec2, _targetIdentifier_dec, _sourceIdentifier_dec, _activatorEvent_dec, _canceled_dec, _shape_dec2 = [derived], _manager2, _previousSource, _shape2, _init6, _canceled, _activatorEvent, _sourceIdentifier, _targetIdentifier, _modifiers2, _transform;
_canceled_dec = [reactive], _activatorEvent_dec = [reactive], _sourceIdentifier_dec = [reactive], _targetIdentifier_dec = [reactive], _modifiers_dec2 = [reactive], _source_dec = [derived], _target_dec = [derived], _transform_dec = [derived];
var DragOperation = class {
	constructor(m) {
		__runInitializers$3(_init6, 5, this), __privateAdd$4(this, _manager2), __privateAdd$4(this, _previousSource), __privateAdd$4(this, _shape2, new ValueHistory(void 0, (m, x) => m && x ? m.equals(x) : m === x)), this.status = new Status(), __privateAdd$4(this, _canceled, __runInitializers$3(_init6, 8, this, !1)), __runInitializers$3(_init6, 11, this), __privateAdd$4(this, _activatorEvent, __runInitializers$3(_init6, 12, this, null)), __runInitializers$3(_init6, 15, this), __privateAdd$4(this, _sourceIdentifier, __runInitializers$3(_init6, 16, this, null)), __runInitializers$3(_init6, 19, this), __privateAdd$4(this, _targetIdentifier, __runInitializers$3(_init6, 20, this, null)), __runInitializers$3(_init6, 23, this), __privateAdd$4(this, _modifiers2, __runInitializers$3(_init6, 24, this, [])), __runInitializers$3(_init6, 27, this), this.position = new Position$1({
			x: 0,
			y: 0
		}), __privateAdd$4(this, _transform, {
			x: 0,
			y: 0
		}), __privateSet$4(this, _manager2, m);
	}
	get shape() {
		let { current: m, initial: x, previous: S } = __privateGet$4(this, _shape2);
		return !m || !x ? null : {
			current: m,
			initial: x,
			previous: S
		};
	}
	set shape(m) {
		m ? __privateGet$4(this, _shape2).current = m : __privateGet$4(this, _shape2).reset();
	}
	get source() {
		let m = this.sourceIdentifier;
		if (m == null) return null;
		let x = __privateGet$4(this, _manager2).registry.draggables.get(m);
		return x && __privateSet$4(this, _previousSource, x), x ?? __privateGet$4(this, _previousSource) ?? null;
	}
	get target() {
		let m = this.targetIdentifier;
		return m == null ? null : __privateGet$4(this, _manager2).registry.droppables.get(m) ?? null;
	}
	get transform() {
		let { x: m, y: x } = this.position.delta, S = {
			x: m,
			y: x
		};
		for (let m of this.modifiers) S = m.apply(__spreadProps$5(__spreadValues$5({}, this.snapshot()), { transform: S }));
		return __privateSet$4(this, _transform, S), S;
	}
	snapshot() {
		return n(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: __privateGet$4(this, _transform),
			shape: this.shape ? snapshot(this.shape) : null,
			position: snapshot(this.position),
			status: snapshot(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		r(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, __privateGet$4(this, _shape2).reset(), this.position.reset({
				x: 0,
				y: 0
			}), __privateSet$4(this, _transform, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
_init6 = __decoratorStart$3(null), _manager2 = /* @__PURE__ */ new WeakMap(), _previousSource = /* @__PURE__ */ new WeakMap(), _shape2 = /* @__PURE__ */ new WeakMap(), _canceled = /* @__PURE__ */ new WeakMap(), _activatorEvent = /* @__PURE__ */ new WeakMap(), _sourceIdentifier = /* @__PURE__ */ new WeakMap(), _targetIdentifier = /* @__PURE__ */ new WeakMap(), _modifiers2 = /* @__PURE__ */ new WeakMap(), _transform = /* @__PURE__ */ new WeakMap(), __decorateElement$3(_init6, 2, "shape", _shape_dec2, DragOperation), __decorateElement$3(_init6, 4, "canceled", _canceled_dec, DragOperation, _canceled), __decorateElement$3(_init6, 4, "activatorEvent", _activatorEvent_dec, DragOperation, _activatorEvent), __decorateElement$3(_init6, 4, "sourceIdentifier", _sourceIdentifier_dec, DragOperation, _sourceIdentifier), __decorateElement$3(_init6, 4, "targetIdentifier", _targetIdentifier_dec, DragOperation, _targetIdentifier), __decorateElement$3(_init6, 4, "modifiers", _modifiers_dec2, DragOperation, _modifiers2), __decorateElement$3(_init6, 2, "source", _source_dec, DragOperation), __decorateElement$3(_init6, 2, "target", _target_dec, DragOperation), __decorateElement$3(_init6, 2, "transform", _transform_dec, DragOperation), __decoratorMetadata$3(_init6, DragOperation);
var defaultRenderer = { get rendering() {
	return Promise.resolve();
} }, DragDropManager$1 = class {
	constructor(m) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((m) => m.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let { plugins: x = [], sensors: S = [], modifiers: C = [], renderer: T = defaultRenderer } = m ?? {}, D = new DragDropMonitor(this);
		this.registry = new DragDropRegistry(this), this.monitor = D, this.renderer = T, this.actions = new DragActions(this), this.dragOperation = new DragOperation(this), this.collisionObserver = new CollisionObserver(this), this.plugins = [CollisionNotifier, ...x], this.modifiers = C, this.sensors = S;
		let { destroy: O } = this, k = effects(() => {
			let m = n(() => this.dragOperation.modifiers), x = this.modifiers;
			m !== x && m.forEach((m) => m.destroy()), this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((m) => {
				let { plugin: x, options: S } = descriptor(m);
				return new x(this, S);
			}) ?? x;
		});
		this.destroy = () => {
			k(), O();
		};
	}
	get plugins() {
		return this.registry.plugins.values;
	}
	set plugins(m) {
		this.registry.plugins.values = m;
	}
	get modifiers() {
		return this.registry.modifiers.values;
	}
	set modifiers(m) {
		this.registry.modifiers.values = m;
	}
	get sensors() {
		return this.registry.sensors.values;
	}
	set sensors(m) {
		this.registry.sensors.values = m;
	}
}, __typeError$3 = (m) => {
	throw TypeError(m);
}, __accessCheck$3 = (m, x, S) => x.has(m) || __typeError$3("Cannot " + S), __privateGet$3 = (m, x, S) => (__accessCheck$3(m, x, "read from private field"), x.get(m)), __privateAdd$3 = (m, x, S) => x.has(m) ? __typeError$3("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$3 = (m, x, S, C) => (__accessCheck$3(m, x, "write to private field"), x.set(m, S), S), __privateMethod$1 = (m, x, S) => (__accessCheck$3(m, x, "access private method"), S);
function isKeyframeEffect(m) {
	return m ? m instanceof KeyframeEffect ? !0 : "getKeyframes" in m && typeof m.getKeyframes == "function" : !1;
}
function getFinalKeyframe$2(m, x) {
	let S = m.getAnimations();
	if (S.length > 0) for (let m of S) {
		if (m.playState !== "running") continue;
		let { effect: S } = m, C = (isKeyframeEffect(S) ? S.getKeyframes() : []).filter(x);
		if (C.length > 0) return [C[C.length - 1], m];
	}
	return null;
}
function getBoundingRectangle(m) {
	let { width: x, height: S, top: C, left: T, bottom: D, right: O } = m.getBoundingClientRect();
	return {
		width: x,
		height: S,
		top: C,
		left: T,
		bottom: D,
		right: O
	};
}
var canUseDOM = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function isWindow(m) {
	let x = Object.prototype.toString.call(m);
	return x === "[object Window]" || x === "[object global]";
}
function isNode(m) {
	return "nodeType" in m;
}
function getWindow(m) {
	return m ? isWindow(m) ? m : isNode(m) ? "defaultView" in m ? m.defaultView ?? window : m.ownerDocument?.defaultView ?? window : window : window;
}
function isDocument(m) {
	let { Document: x } = getWindow(m);
	return m instanceof x || "nodeType" in m && m.nodeType === Node.DOCUMENT_NODE;
}
function isHTMLElement$1(m) {
	return !m || isWindow(m) ? !1 : m instanceof getWindow(m).HTMLElement || "namespaceURI" in m && typeof m.namespaceURI == "string" && m.namespaceURI.endsWith("html");
}
function isSVGElement$1(m) {
	return m instanceof getWindow(m).SVGElement || "namespaceURI" in m && typeof m.namespaceURI == "string" && m.namespaceURI.endsWith("svg");
}
function getDocument(m) {
	return m ? isWindow(m) ? m.document : isNode(m) ? isDocument(m) ? m : isHTMLElement$1(m) || isSVGElement$1(m) ? m.ownerDocument : document : document : document;
}
function getViewportBoundingRectangle(m) {
	let { documentElement: x } = getDocument(m), S = x.clientWidth, C = x.clientHeight;
	return {
		top: 0,
		left: 0,
		right: S,
		bottom: C,
		width: S,
		height: C
	};
}
function isOverflowVisible(m, x) {
	if (isDetailsElement(m) && m.open === !1) return !1;
	let { overflow: S, overflowX: C, overflowY: T } = getComputedStyle(m);
	return S === "visible" && C === "visible" && T === "visible";
}
function isDetailsElement(m) {
	return m.tagName === "DETAILS";
}
function getVisibleBoundingRectangle(m, x = m.getBoundingClientRect(), S = 0) {
	let C = x, { ownerDocument: T } = m, D = T.defaultView ?? window, O = m.parentElement;
	for (; O && O !== T.documentElement;) {
		if (!isOverflowVisible(O)) {
			let m = O.getBoundingClientRect(), x = S * (m.bottom - m.top), T = S * (m.right - m.left), D = S * (m.bottom - m.top), k = S * (m.right - m.left);
			C = {
				top: Math.max(C.top, m.top - x),
				right: Math.min(C.right, m.right + T),
				bottom: Math.min(C.bottom, m.bottom + D),
				left: Math.max(C.left, m.left - k),
				width: 0,
				height: 0
			}, C.width = C.right - C.left, C.height = C.bottom - C.top;
		}
		O = O.parentElement;
	}
	let k = D.innerWidth, A = D.innerHeight, j = S * A, M = S * k;
	return C = {
		top: Math.max(C.top, 0 - j),
		right: Math.min(C.right, k + M),
		bottom: Math.min(C.bottom, A + j),
		left: Math.max(C.left, 0 - M),
		width: 0,
		height: 0
	}, C.width = C.right - C.left, C.height = C.bottom - C.top, C.width < 0 && (C.width = 0), C.height < 0 && (C.height = 0), C;
}
function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function cloneElement(m) {
	let x = "input, textarea, select, canvas, [contenteditable]", S = m.cloneNode(!0), C = Array.from(m.querySelectorAll(x));
	return Array.from(S.querySelectorAll(x)).forEach((m, x) => {
		let S = C[x];
		isField(m) && isField(S) && (m.type !== "file" && (m.value = S.value), m.type === "radio" && m.name && (m.name = `Cloned__${m.name}`)), isCanvasElement(m) && isCanvasElement(S) && S.width > 0 && S.height > 0 && m.getContext("2d")?.drawImage(S, 0, 0);
	}), S;
}
function isField(m) {
	return "value" in m;
}
function isCanvasElement(m) {
	return m.tagName === "CANVAS";
}
function getElementFromPoint(m, { x, y: S }) {
	let C = m.elementFromPoint(x, S);
	if (isIFrameElement(C)) {
		let { contentDocument: m } = C;
		if (m) {
			let { left: T, top: D } = C.getBoundingClientRect();
			return getElementFromPoint(m, {
				x: x - T,
				y: S - D
			});
		}
	}
	return C;
}
function isIFrameElement(m) {
	return m?.tagName === "IFRAME";
}
var ProxiedElements = /* @__PURE__ */ new WeakMap(), Listeners = class {
	constructor() {
		this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
			for (let m of this.entries) {
				let [x, { type: S, listener: C, options: T }] = m;
				x.removeEventListener(S, C, T);
			}
			this.entries.clear();
		};
	}
	bind(m, x) {
		let S = Array.isArray(x) ? x : [x], C = [];
		for (let x of S) {
			let { type: S, listener: T, options: D } = x, O = [m, x];
			m.addEventListener(S, T, D), this.entries.add(O), C.push(O);
		}
		return function() {
			for (let [m, { type: x, listener: S, options: T }] of C) m.removeEventListener(x, S, T);
		};
	}
};
function getFrameElement(m) {
	let x = m?.ownerDocument.defaultView;
	if (x && x.self !== x.parent) return x.frameElement;
}
function getFrameElements(m) {
	let x = /* @__PURE__ */ new Set(), S = getFrameElement(m);
	for (; S;) x.add(S), S = getFrameElement(S);
	return x;
}
function timeout$1(m, x) {
	let S = setTimeout(m, x);
	return () => clearTimeout(S);
}
function throttle$1(m, x) {
	let S = () => performance.now(), C, T;
	return function(...D) {
		let O = this;
		T ? (C?.(), C = timeout$1(() => {
			m.apply(O, D), T = S();
		}, x - (S() - T))) : (m.apply(O, D), T = S());
	};
}
function isRectEqual(m, x) {
	return m === x ? !0 : !m || !x ? !1 : m.top == x.top && m.left == x.left && m.right == x.right && m.bottom == x.bottom;
}
function isVisible(m, x = m.getBoundingClientRect()) {
	let { width: S, height: C } = getVisibleBoundingRectangle(m, x);
	return S > 0 && C > 0;
}
var Observer = canUseDOM ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, _initialized, ResizeNotifier = class extends Observer {
	constructor(m) {
		super((x) => {
			if (!__privateGet$3(this, _initialized)) {
				__privateSet$3(this, _initialized, !0);
				return;
			}
			m(x, this);
		}), __privateAdd$3(this, _initialized, !1);
	}
};
_initialized = /* @__PURE__ */ new WeakMap();
var threshold = Array.from({ length: 100 }, (m, x) => x / 100), THROTTLE_INTERVAL = 75, _visible, _previousBoundingClientRect, _resizeObserver, _positionObserver, _visibilityObserver, _debug, _disconnected, _observePosition, _PositionObserver_instances, notify_fn, updateDebug_fn, PositionObserver = class {
	constructor(m, x, S = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = m, this.callback = x, __privateAdd$3(this, _PositionObserver_instances), this.disconnect = () => {
			var m, x, S;
			__privateSet$3(this, _disconnected, !0), (m = __privateGet$3(this, _resizeObserver)) == null || m.disconnect(), (x = __privateGet$3(this, _positionObserver)) == null || x.disconnect(), __privateGet$3(this, _visibilityObserver).disconnect(), (S = __privateGet$3(this, _debug)) == null || S.remove();
		}, __privateAdd$3(this, _visible, !0), __privateAdd$3(this, _previousBoundingClientRect), __privateAdd$3(this, _resizeObserver), __privateAdd$3(this, _positionObserver), __privateAdd$3(this, _visibilityObserver), __privateAdd$3(this, _debug), __privateAdd$3(this, _disconnected, !1), __privateAdd$3(this, _observePosition, throttle$1(() => {
			var m;
			let { element: x } = this;
			if ((m = __privateGet$3(this, _positionObserver)) == null || m.disconnect(), __privateGet$3(this, _disconnected) || !__privateGet$3(this, _visible) || !x.isConnected) return;
			let S = x.ownerDocument ?? document, { innerHeight: C, innerWidth: T } = S.defaultView ?? window, D = x.getBoundingClientRect(), { top: O, left: k, bottom: A, right: j } = getVisibleBoundingRectangle(x, D), M = -Math.floor(O), N = -Math.floor(k), P = `${M}px ${-Math.floor(T - j)}px ${-Math.floor(C - A)}px ${N}px`;
			this.boundingClientRect = D, __privateSet$3(this, _positionObserver, new IntersectionObserver((m) => {
				let [S] = m, { intersectionRect: C } = S;
				(S.intersectionRatio === 1 ? Rectangle.intersectionRatio(C, getVisibleBoundingRectangle(x)) : S.intersectionRatio) !== 1 && __privateGet$3(this, _observePosition).call(this);
			}, {
				threshold,
				rootMargin: P,
				root: S
			})), __privateGet$3(this, _positionObserver).observe(x), __privateMethod$1(this, _PositionObserver_instances, notify_fn).call(this);
		}, THROTTLE_INTERVAL)), this.boundingClientRect = m.getBoundingClientRect(), __privateSet$3(this, _visible, isVisible(m, this.boundingClientRect));
		let C = !0;
		this.callback = (m) => {
			C && (C = !1, S.skipInitial) || x(m);
		};
		let T = m.ownerDocument;
		S?.debug && (__privateSet$3(this, _debug, document.createElement("div")), __privateGet$3(this, _debug).style.background = "rgba(0,0,0,0.15)", __privateGet$3(this, _debug).style.position = "fixed", __privateGet$3(this, _debug).style.pointerEvents = "none", T.body.appendChild(__privateGet$3(this, _debug))), __privateSet$3(this, _visibilityObserver, new IntersectionObserver((x) => {
			var S, C;
			let { boundingClientRect: T, isIntersecting: D } = x[x.length - 1], { width: O, height: k } = T, A = __privateGet$3(this, _visible);
			__privateSet$3(this, _visible, D), !(!O && !k) && (A && !D ? ((S = __privateGet$3(this, _positionObserver)) == null || S.disconnect(), this.callback(null), (C = __privateGet$3(this, _resizeObserver)) == null || C.disconnect(), __privateSet$3(this, _resizeObserver, void 0), __privateGet$3(this, _debug) && (__privateGet$3(this, _debug).style.visibility = "hidden")) : __privateGet$3(this, _observePosition).call(this), D && !__privateGet$3(this, _resizeObserver) && (__privateSet$3(this, _resizeObserver, new ResizeNotifier(__privateGet$3(this, _observePosition))), __privateGet$3(this, _resizeObserver).observe(m)));
		}, {
			threshold,
			root: T
		})), __privateGet$3(this, _visible) && !S.skipInitial && this.callback(this.boundingClientRect), __privateGet$3(this, _visibilityObserver).observe(m);
	}
};
_visible = /* @__PURE__ */ new WeakMap(), _previousBoundingClientRect = /* @__PURE__ */ new WeakMap(), _resizeObserver = /* @__PURE__ */ new WeakMap(), _positionObserver = /* @__PURE__ */ new WeakMap(), _visibilityObserver = /* @__PURE__ */ new WeakMap(), _debug = /* @__PURE__ */ new WeakMap(), _disconnected = /* @__PURE__ */ new WeakMap(), _observePosition = /* @__PURE__ */ new WeakMap(), _PositionObserver_instances = /* @__PURE__ */ new WeakSet(), notify_fn = function() {
	__privateGet$3(this, _disconnected) || (__privateMethod$1(this, _PositionObserver_instances, updateDebug_fn).call(this), !isRectEqual(this.boundingClientRect, __privateGet$3(this, _previousBoundingClientRect)) && (this.callback(this.boundingClientRect), __privateSet$3(this, _previousBoundingClientRect, this.boundingClientRect)));
}, updateDebug_fn = function() {
	if (__privateGet$3(this, _debug)) {
		let { top: m, left: x, width: S, height: C } = getVisibleBoundingRectangle(this.element);
		__privateGet$3(this, _debug).style.overflow = "hidden", __privateGet$3(this, _debug).style.visibility = "visible", __privateGet$3(this, _debug).style.top = `${Math.floor(m)}px`, __privateGet$3(this, _debug).style.left = `${Math.floor(x)}px`, __privateGet$3(this, _debug).style.width = `${Math.floor(S)}px`, __privateGet$3(this, _debug).style.height = `${Math.floor(C)}px`;
	}
};
var framePositionObservers = /* @__PURE__ */ new WeakMap(), scrollListeners = /* @__PURE__ */ new WeakMap();
function addFrameListener(m, x) {
	let S = framePositionObservers.get(m);
	return S ||= {
		disconnect: new PositionObserver(m, (x) => {
			let S = framePositionObservers.get(m);
			S && S.callbacks.forEach((m) => m(x));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, S.callbacks.add(x), framePositionObservers.set(m, S), () => {
		S.callbacks.delete(x), S.callbacks.size === 0 && (framePositionObservers.delete(m), S.disconnect());
	};
}
function observeParentFrames(m, x) {
	let S = /* @__PURE__ */ new Set();
	for (let C of m) {
		let m = addFrameListener(C, x);
		S.add(m);
	}
	return () => S.forEach((m) => m());
}
function addScrollListener(m, x) {
	let S = m.ownerDocument;
	if (!scrollListeners.has(S)) {
		let m = new AbortController(), x = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (m) => x.forEach((x) => x(m)), {
			capture: !0,
			passive: !0,
			signal: m.signal
		}), scrollListeners.set(S, {
			disconnect: () => m.abort(),
			listeners: x
		});
	}
	let { listeners: C, disconnect: T } = scrollListeners.get(S) ?? {};
	return !C || !T ? () => {} : (C.add(x), () => {
		C.delete(x), C.size === 0 && (T(), scrollListeners.delete(S));
	});
}
var _elementObserver, _disconnected2, _frames, _handleScroll, FrameObserver = class {
	constructor(m, x, S) {
		this.callback = x, __privateAdd$3(this, _elementObserver), __privateAdd$3(this, _disconnected2, !1), __privateAdd$3(this, _frames), __privateAdd$3(this, _handleScroll, throttle$1((m) => {
			if (!__privateGet$3(this, _disconnected2) && m.target && "contains" in m.target && typeof m.target.contains == "function") {
				for (let x of __privateGet$3(this, _frames)) if (m.target.contains(x)) {
					this.callback(__privateGet$3(this, _elementObserver).boundingClientRect);
					break;
				}
			}
		}, THROTTLE_INTERVAL));
		let C = getFrameElements(m), T = observeParentFrames(C, x), D = addScrollListener(m, __privateGet$3(this, _handleScroll));
		__privateSet$3(this, _frames, C), __privateSet$3(this, _elementObserver, new PositionObserver(m, x, S)), this.disconnect = () => {
			__privateGet$3(this, _disconnected2) || (__privateSet$3(this, _disconnected2, !0), T(), D(), __privateGet$3(this, _elementObserver).disconnect());
		};
	}
};
_elementObserver = /* @__PURE__ */ new WeakMap(), _disconnected2 = /* @__PURE__ */ new WeakMap(), _frames = /* @__PURE__ */ new WeakMap(), _handleScroll = /* @__PURE__ */ new WeakMap();
function supportsPopover(m) {
	return "showPopover" in m && "hidePopover" in m && typeof m.showPopover == "function" && typeof m.hidePopover == "function";
}
function showPopover(m) {
	try {
		supportsPopover(m) && m.isConnected && m.hasAttribute("popover") && !m.matches(":popover-open") && m.showPopover();
	} catch {}
}
function isDocumentScrollingElement(m) {
	return !canUseDOM || !m ? !1 : m === getDocument(m).scrollingElement;
}
function getScrollPosition(m) {
	let x = getWindow(m), S = isDocumentScrollingElement(m) ? getViewportBoundingRectangle(m) : getBoundingRectangle(m), C = isDocumentScrollingElement(m) ? {
		height: x.innerHeight,
		width: x.innerWidth
	} : {
		height: m.clientHeight,
		width: m.clientWidth
	}, T = {
		current: {
			x: m.scrollLeft,
			y: m.scrollTop
		},
		max: {
			x: m.scrollWidth - C.width,
			y: m.scrollHeight - C.height
		}
	};
	return {
		rect: S,
		position: T,
		isTop: T.current.y <= 0,
		isLeft: T.current.x <= 0,
		isBottom: T.current.y >= T.max.y,
		isRight: T.current.x >= T.max.x
	};
}
function canScroll(m, x) {
	let { isTop: S, isBottom: C, isLeft: T, isRight: D, position: O } = getScrollPosition(m), { x: k, y: A } = x ?? {
		x: 0,
		y: 0
	}, j = !S && O.current.y + A > 0, M = !C && O.current.y + A < O.max.y, N = !T && O.current.x + k > 0, P = !D && O.current.x + k < O.max.x;
	return {
		top: j,
		bottom: M,
		left: N,
		right: P,
		x: N || P,
		y: j || M
	};
}
var Scheduler$1 = class {
	constructor(m) {
		this.scheduler = m, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: m, resolvers: x } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let x of m) x();
			for (let m of x) m();
		};
	}
	schedule(m) {
		return this.tasks.add(m), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((m) => this.resolvers.add(m));
	}
}, scheduler = new Scheduler$1((m) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(m) : m();
}), scheduler2 = new Scheduler$1((m) => setTimeout(m, 50)), cachedStyles = /* @__PURE__ */ new Map(), clear = cachedStyles.clear.bind(cachedStyles);
function getComputedStyles(m, x = !1) {
	if (!x) return computeStyles(m);
	let S = cachedStyles.get(m);
	return S || (S = computeStyles(m), cachedStyles.set(m, S), scheduler2.schedule(clear), S);
}
function computeStyles(m) {
	return getWindow(m).getComputedStyle(m);
}
function isFixed(m, x = getComputedStyles(m, !0)) {
	return x.position === "fixed" || x.position === "sticky";
}
function isScrollable(m, x = getComputedStyles(m, !0)) {
	let S = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((m) => {
		let C = x[m];
		return typeof C == "string" ? S.test(C) : !1;
	});
}
var defaultOptions = { excludeElement: !0 };
function getScrollableAncestors(m, x = defaultOptions) {
	let { limit: S, excludeElement: C } = x, T = /* @__PURE__ */ new Set();
	function D(x) {
		if (S != null && T.size >= S || !x) return T;
		if (isDocument(x) && x.scrollingElement != null && !T.has(x.scrollingElement)) return T.add(x.scrollingElement), T;
		if (!isHTMLElement$1(x)) return isSVGElement$1(x) ? D(x.parentElement) : T;
		if (T.has(x)) return T;
		let O = getComputedStyles(x, !0);
		if (C && x === m || isScrollable(x, O) && T.add(x), isFixed(x, O)) {
			let { scrollingElement: m } = x.ownerDocument;
			return m && T.add(m), T;
		}
		return D(x.parentNode);
	}
	return m ? D(m) : T;
}
function getFirstScrollableAncestor(m) {
	let [x] = getScrollableAncestors(m, { limit: 1 });
	return x ?? null;
}
function getFrameTransform(m, x = window.frameElement) {
	let S = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!m) return S;
	let C = getFrameElement(m);
	for (; C;) {
		if (C === x) return S;
		let m = getBoundingRectangle(C), { x: T, y: D } = getScale(C, m);
		S.x += m.left, S.y += m.top, S.scaleX *= T, S.scaleY *= D, C = getFrameElement(C);
	}
	return S;
}
function getScale(m, x = getBoundingRectangle(m)) {
	let S = Math.round(x.width), C = Math.round(x.height);
	if (isHTMLElement$1(m)) return {
		x: S / m.offsetWidth,
		y: C / m.offsetHeight
	};
	let T = getComputedStyles(m, !0);
	return {
		x: (parseFloat(T.width) || S) / S,
		y: (parseFloat(T.height) || C) / C
	};
}
function parseScale(m) {
	if (m === "none") return null;
	let x = m.split(" "), S = parseFloat(x[0]), C = parseFloat(x[1]);
	return isNaN(S) && isNaN(C) ? null : {
		x: isNaN(S) ? C : S,
		y: isNaN(C) ? S : C
	};
}
function parseTranslate(m) {
	if (m === "none") return null;
	let [x, S, C = "0"] = m.split(" "), T = {
		x: parseFloat(x),
		y: parseFloat(S),
		z: parseInt(C, 10)
	};
	return isNaN(T.x) && isNaN(T.y) ? null : {
		x: isNaN(T.x) ? 0 : T.x,
		y: isNaN(T.y) ? 0 : T.y,
		z: isNaN(T.z) ? 0 : T.z
	};
}
function parseTransform(m) {
	let { scale: x, transform: S, translate: C } = m, T = parseScale(x), D = parseTranslate(C), O = parseTransformMatrix(S);
	if (!O && !T && !D) return null;
	let k = {
		x: T?.x ?? 1,
		y: T?.y ?? 1
	}, A = {
		x: D?.x ?? 0,
		y: D?.y ?? 0
	}, j = {
		x: O?.x ?? 0,
		y: O?.y ?? 0,
		scaleX: O?.scaleX ?? 1,
		scaleY: O?.scaleY ?? 1
	};
	return {
		x: A.x + j.x,
		y: A.y + j.y,
		z: D?.z ?? 0,
		scaleX: k.x * j.scaleX,
		scaleY: k.y * j.scaleY
	};
}
function parseTransformMatrix(m) {
	if (m.startsWith("matrix3d(")) {
		let x = m.slice(9, -1).split(/, /);
		return {
			x: +x[12],
			y: +x[13],
			scaleX: +x[0],
			scaleY: +x[5]
		};
	} else if (m.startsWith("matrix(")) {
		let x = m.slice(7, -1).split(/, /);
		return {
			x: +x[4],
			y: +x[5],
			scaleX: +x[0],
			scaleY: +x[3]
		};
	}
	return null;
}
var ScrollDirection = /* @__PURE__ */ ((m) => (m[m.Idle = 0] = "Idle", m[m.Forward = 1] = "Forward", m[m.Reverse = -1] = "Reverse", m))(ScrollDirection || {}), defaultThreshold = {
	x: .2,
	y: .2
}, defaultTolerance = {
	x: 10,
	y: 10
};
function detectScrollIntent(m, x, S, C = 25, T = defaultThreshold, D = defaultTolerance) {
	let { x: O, y: k } = x, { rect: A, isTop: j, isBottom: M, isLeft: N, isRight: P } = getScrollPosition(m), F = getFrameTransform(m), I = parseTransform(getComputedStyles(m, !0)), L = I === null ? !1 : I?.scaleX < 0, R = I === null ? !1 : I?.scaleY < 0, z = new Rectangle(A.left * F.scaleX + F.x, A.top * F.scaleY + F.y, A.width * F.scaleX, A.height * F.scaleY), B = {
		x: 0,
		y: 0
	}, V = {
		x: 0,
		y: 0
	}, H = {
		height: z.height * T.y,
		width: z.width * T.x
	};
	return (!j || R && !M) && k <= z.top + H.height && S?.y !== 1 && O >= z.left - D.x && O <= z.right + D.x ? (B.y = R ? 1 : -1, V.y = C * Math.abs((z.top + H.height - k) / H.height)) : (!M || R && !j) && k >= z.bottom - H.height && S?.y !== -1 && O >= z.left - D.x && O <= z.right + D.x && (B.y = R ? -1 : 1, V.y = C * Math.abs((z.bottom - H.height - k) / H.height)), (!P || L && !N) && O >= z.right - H.width && S?.x !== -1 && k >= z.top - D.y && k <= z.bottom + D.y ? (B.x = L ? -1 : 1, V.x = C * Math.abs((z.right - H.width - O) / H.width)) : (!N || L && !P) && O <= z.left + H.width && S?.x !== 1 && k >= z.top - D.y && k <= z.bottom + D.y && (B.x = L ? 1 : -1, V.x = C * Math.abs((z.left + H.width - O) / H.width)), {
		direction: B,
		speed: V
	};
}
function supportsScrollIntoViewIfNeeded(m) {
	return "scrollIntoViewIfNeeded" in m && typeof m.scrollIntoViewIfNeeded == "function";
}
function scrollIntoViewIfNeeded(m, x = !1) {
	if (supportsScrollIntoViewIfNeeded(m)) {
		m.scrollIntoViewIfNeeded(x);
		return;
	}
	if (!isHTMLElement$1(m)) return m.scrollIntoView();
	var S = getFirstScrollableAncestor(m);
	if (!isHTMLElement$1(S)) return;
	let C = getComputedStyles(S, !0), T = parseInt(C.getPropertyValue("border-top-width")), D = parseInt(C.getPropertyValue("border-left-width")), O = m.offsetTop - S.offsetTop < S.scrollTop, k = m.offsetTop - S.offsetTop + m.clientHeight - T > S.scrollTop + S.clientHeight, A = m.offsetLeft - S.offsetLeft < S.scrollLeft, j = m.offsetLeft - S.offsetLeft + m.clientWidth - D > S.scrollLeft + S.clientWidth, M = O && !k;
	(O || k) && x && (S.scrollTop = m.offsetTop - S.offsetTop - S.clientHeight / 2 - T + m.clientHeight / 2), (A || j) && x && (S.scrollLeft = m.offsetLeft - S.offsetLeft - S.clientWidth / 2 - D + m.clientWidth / 2), (O || k || A || j) && !x && m.scrollIntoView(M);
}
function applyTransform(m, x, S) {
	let { scaleX: C, scaleY: T, x: D, y: O } = x, k = m.left + D + (1 - C) * parseFloat(S), A = m.top + O + (1 - T) * parseFloat(S.slice(S.indexOf(" ") + 1)), j = C ? m.width * C : m.width, M = T ? m.height * T : m.height;
	return {
		width: j,
		height: M,
		top: A,
		right: k + j,
		bottom: A + M,
		left: k
	};
}
function inverseTransform(m, x, S) {
	let { scaleX: C, scaleY: T, x: D, y: O } = x, k = m.left - D - (1 - C) * parseFloat(S), A = m.top - O - (1 - T) * parseFloat(S.slice(S.indexOf(" ") + 1)), j = C ? m.width / C : m.width, M = T ? m.height / T : m.height;
	return {
		width: j,
		height: M,
		top: A,
		right: k + j,
		bottom: A + M,
		left: k
	};
}
function animateTransform({ element: m, keyframes: x, options: S }) {
	return m.animate(x, S).finished;
}
function computeTranslate(m, x = getComputedStyles(m).translate, S = !0) {
	if (S) {
		let x = getFinalKeyframe$2(m, (m) => "translate" in m);
		if (x) {
			let { translate: m = "" } = x[0];
			if (typeof m == "string") {
				let x = parseTranslate(m);
				if (x) return x;
			}
		}
	}
	if (x) {
		let m = parseTranslate(x);
		if (m) return m;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var scheduler3$1 = new Scheduler$1((m) => setTimeout(m, 0)), animations$1 = /* @__PURE__ */ new Map(), clear2 = animations$1.clear.bind(animations$1);
function getDocumentAnimations(m) {
	let x = m.ownerDocument, S = animations$1.get(x);
	if (S) return S;
	S = x.getAnimations(), animations$1.set(x, S), scheduler3$1.schedule(clear2);
	let C = S.filter((x) => isKeyframeEffect(x.effect) && x.effect.target === m);
	return animations$1.set(m, C), S;
}
function forceFinishAnimations(m, x) {
	let S = getDocumentAnimations(m).filter((m) => {
		if (isKeyframeEffect(m.effect)) {
			let { target: S } = m.effect;
			if ((S && x.isValidTarget?.call(x, S)) ?? !0) return m.effect.getKeyframes().some((m) => {
				for (let S of x.properties) if (m[S]) return !0;
			});
		}
	}).map((m) => {
		let { effect: x, currentTime: S } = m, C = x?.getComputedTiming().duration;
		if (!(m.pending || m.playState === "finished") && typeof C == "number" && typeof S == "number" && S < C) return m.currentTime = C, () => {
			m.currentTime = S;
		};
	});
	if (S.length > 0) return () => S.forEach((m) => m?.());
}
var DOMRectangle = class extends Rectangle {
	constructor(m, x = {}) {
		let { frameTransform: S = getFrameTransform(m), ignoreTransforms: C, getBoundingClientRect: T = getBoundingRectangle } = x, D = forceFinishAnimations(m, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (x) => (x !== m || isSafari()) && x.contains(m)
		}), O = T(m), { top: k, left: A, width: j, height: M } = O, N, P = getComputedStyles(m), F = parseTransform(P), I = {
			x: F?.scaleX ?? 1,
			y: F?.scaleY ?? 1
		}, L = getProjectedTransform(m, P);
		D?.(), F && (N = inverseTransform(O, F, P.transformOrigin), (C || L) && (k = N.top, A = N.left, j = N.width, M = N.height));
		let R = {
			width: N?.width ?? j,
			height: N?.height ?? M
		};
		if (L && !C && N) {
			let m = applyTransform(N, L, P.transformOrigin);
			k = m.top, A = m.left, j = m.width, M = m.height, I.x = L.scaleX, I.y = L.scaleY;
		}
		S && (C || (A *= S.scaleX, j *= S.scaleX, k *= S.scaleY, M *= S.scaleY), A += S.x, k += S.y), super(A, k, j, M), this.scale = I, this.intrinsicWidth = R.width, this.intrinsicHeight = R.height;
	}
};
function getProjectedTransform(m, x) {
	let S = m.getAnimations(), C = null;
	if (!S.length) return null;
	for (let m of S) {
		if (m.playState !== "running") continue;
		let S = isKeyframeEffect(m.effect) ? m.effect.getKeyframes() : [], T = S[S.length - 1];
		if (!T) continue;
		let { transform: D, translate: O, scale: k } = T;
		if (D || O || k) {
			let m = parseTransform({
				transform: typeof D == "string" && D ? D : x.transform,
				translate: typeof O == "string" && O ? O : x.translate,
				scale: typeof k == "string" && k ? k : x.scale
			});
			m && (C = C ? {
				x: C.x + m.x,
				y: C.y + m.y,
				z: C.z ?? m.z,
				scaleX: C.scaleX * m.scaleX,
				scaleY: C.scaleY * m.scaleY
			} : m);
		}
	}
	return C;
}
function supportsStyle(m) {
	return "style" in m && typeof m.style == "object" && m.style !== null && "setProperty" in m.style && "removeProperty" in m.style && typeof m.style.setProperty == "function" && typeof m.style.removeProperty == "function";
}
var Styles = class {
	constructor(m) {
		this.element = m, this.initial = /* @__PURE__ */ new Map();
	}
	set(m, x = "") {
		let { element: S } = this;
		if (supportsStyle(S)) for (let [C, T] of Object.entries(m)) {
			let m = `${x}${C}`;
			this.initial.has(m) || this.initial.set(m, S.style.getPropertyValue(m)), S.style.setProperty(m, typeof T == "string" ? T : `${T}px`);
		}
	}
	remove(m, x = "") {
		let { element: S } = this;
		if (supportsStyle(S)) for (let C of m) {
			let m = `${x}${C}`;
			S.style.removeProperty(m);
		}
	}
	reset() {
		let { element: m } = this;
		if (supportsStyle(m)) {
			for (let [x, S] of this.initial) m.style.setProperty(x, S);
			m.getAttribute("style") === "" && m.removeAttribute("style");
		}
	}
};
function isElement(m) {
	return m ? m instanceof getWindow(m).Element || isNode(m) && m.nodeType === Node.ELEMENT_NODE : !1;
}
function isKeyboardEvent(m) {
	if (!m) return !1;
	let { KeyboardEvent: x } = getWindow(m.target);
	return m instanceof x;
}
function isPointerEvent(m) {
	if (!m) return !1;
	let { PointerEvent: x } = getWindow(m.target);
	return m instanceof x;
}
function isTextInput(m) {
	if (!isElement(m)) return !1;
	let { tagName: x } = m;
	return x === "INPUT" || x === "TEXTAREA" || isContentEditable(m);
}
function isContentEditable(m) {
	return m.hasAttribute("contenteditable") && m.getAttribute("contenteditable") !== "false";
}
var ids = {};
function generateUniqueId(m) {
	let x = ids[m] == null ? 0 : ids[m] + 1;
	return ids[m] = x, `${m}-${x}`;
}
var pointerIntersection$2 = ({ dragOperation: m, droppable: x }) => {
	let S = m.position.current;
	if (!S) return null;
	let { id: C } = x;
	return x.shape && x.shape.containsPoint(S) ? {
		id: C,
		value: 1 / Point.distance(x.shape.center, S),
		type: CollisionType.PointerIntersection,
		priority: CollisionPriority.High
	} : null;
}, shapeIntersection$1 = ({ dragOperation: m, droppable: x }) => {
	let { shape: S } = m;
	if (!x.shape || !S?.current) return null;
	let C = S.current.intersectionArea(x.shape);
	if (C) {
		let { position: T } = m, D = Point.distance(x.shape.center, T.current), O = C / (S.current.area + x.shape.area - C) / D;
		return {
			id: x.id,
			value: O,
			type: CollisionType.ShapeIntersection,
			priority: CollisionPriority.Normal
		};
	}
	return null;
}, defaultCollisionDetection = (m) => pointerIntersection$2(m) ?? shapeIntersection$1(m), closestCorners$1 = (m) => {
	let { dragOperation: x, droppable: S } = m, { shape: C, position: T } = x;
	if (!S.shape) return null;
	let D = C ? Rectangle.from(C.current.boundingRectangle).corners : void 0, O = Rectangle.from(S.shape.boundingRectangle).corners.reduce((m, x, S) => m + Point.distance(Point.from(x), D?.[S] ?? T.current), 0) / 4;
	return {
		id: S.id,
		value: 1 / O,
		type: CollisionType.Collision,
		priority: CollisionPriority.Normal
	};
}, __create$2 = Object.create, __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __knownSymbol$2 = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError$2 = (m) => {
	throw TypeError(m);
}, __defNormalProp$3 = (m, x, S) => x in m ? __defProp$3(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$4 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$3.call(x, S) && __defNormalProp$3(m, S, x[S]);
	if (__getOwnPropSymbols$3) for (var S of __getOwnPropSymbols$3(x)) __propIsEnum$3.call(x, S) && __defNormalProp$3(m, S, x[S]);
	return m;
}, __spreadProps$4 = (m, x) => __defProps$3(m, __getOwnPropDescs$3(x)), __name = (m, x) => __defProp$3(m, "name", {
	value: x,
	configurable: !0
}), __objRest$3 = (m, x) => {
	var S = {};
	for (var C in m) __hasOwnProp$3.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && __getOwnPropSymbols$3) for (var C of __getOwnPropSymbols$3(m)) x.indexOf(C) < 0 && __propIsEnum$3.call(m, C) && (S[C] = m[C]);
	return S;
}, __decoratorStart$2 = (m) => [
	,
	,
	,
	__create$2(m?.[__knownSymbol$2("metadata")] ?? null)
], __decoratorStrings$2 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn$2 = (m) => m !== void 0 && typeof m != "function" ? __typeError$2("Function expected") : m, __decoratorContext$2 = (m, x, S, C, T) => ({
	kind: __decoratorStrings$2[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError$2("Already initialized") : T.push(__expectFn$2(m || null))
}), __decoratorMetadata$2 = (m, x) => __defNormalProp$3(x, __knownSymbol$2("metadata"), m[3]), __runInitializers$2 = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) x & 1 ? D[T].call(S) : C = D[T].call(S, C);
	return C;
}, __decorateElement$2 = (m, x, S, C, T, D) => {
	var O, k, A, j, M, N = x & 7, P = !!(x & 8), F = !!(x & 16), I = N > 3 ? m.length + 1 : N ? P ? 1 : 2 : 0, L = __decoratorStrings$2[N + 5], R = N > 3 && (m[I - 1] = []), z = m[I] || (m[I] = []), B = N && (!F && !P && (T = T.prototype), N < 5 && (N > 3 || !F) && __getOwnPropDesc$2(N < 4 ? T : {
		get [S]() {
			return __privateGet$2(this, D);
		},
		set [S](m) {
			return __privateSet$2(this, D, m);
		}
	}, S));
	N ? F && N < 4 && __name(D, (N > 2 ? "set " : N > 1 ? "get " : "") + S) : __name(T, S);
	for (var V = C.length - 1; V >= 0; V--) j = __decoratorContext$2(N, S, A = {}, m[3], z), N && (j.static = P, j.private = F, M = j.access = { has: F ? (m) => __privateIn(T, m) : (m) => S in m }, N ^ 3 && (M.get = F ? (m) => (N ^ 1 ? __privateGet$2 : __privateMethod)(m, T, N ^ 4 ? D : B.get) : (m) => m[S]), N > 2 && (M.set = F ? (m, x) => __privateSet$2(m, T, x, N ^ 4 ? D : B.set) : (m, x) => m[S] = x)), k = (0, C[V])(N ? N < 4 ? F ? D : B[L] : N > 4 ? void 0 : {
		get: B.get,
		set: B.set
	} : T, j), A._ = 1, N ^ 4 || k === void 0 ? __expectFn$2(k) && (N > 4 ? R.unshift(k) : N ? F ? D = k : B[L] = k : T = k) : typeof k != "object" || !k ? __typeError$2("Object expected") : (__expectFn$2(O = k.get) && (B.get = O), __expectFn$2(O = k.set) && (B.set = O), __expectFn$2(O = k.init) && R.unshift(O));
	return N || __decoratorMetadata$2(m, T), B && __defProp$3(T, S, B), F ? N ^ 4 ? D : B : T;
}, __accessCheck$2 = (m, x, S) => x.has(m) || __typeError$2("Cannot " + S), __privateIn = (m, x) => Object(x) === x ? m.has(x) : __typeError$2("Cannot use the \"in\" operator on this value"), __privateGet$2 = (m, x, S) => (__accessCheck$2(m, x, "read from private field"), S ? S.call(m) : x.get(m)), __privateAdd$2 = (m, x, S) => x.has(m) ? __typeError$2("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$2 = (m, x, S, C) => (__accessCheck$2(m, x, "write to private field"), C ? C.call(m, S) : x.set(m, S), S), __privateMethod = (m, x, S) => (__accessCheck$2(m, x, "access private method"), S), defaultAttributes$1 = {
	role: "button",
	roleDescription: "draggable"
}, defaultDescriptionIdPrefix = "dnd-kit-description", defaultAnnouncementIdPrefix = "dnd-kit-announcement", defaultScreenReaderInstructions = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, defaultAnnouncements = {
	dragstart({ operation: { source: m } }) {
		if (m) return `Picked up draggable item ${m.id}.`;
	},
	dragover({ operation: { source: m, target: x } }) {
		if (!(!m || m.id === x?.id)) return x ? `Draggable item ${m.id} was moved over droppable target ${x.id}.` : `Draggable item ${m.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source: m, target: x }, canceled: S }) {
		if (m) return S ? `Dragging was cancelled. Draggable item ${m.id} was dropped.` : x ? `Draggable item ${m.id} was dropped over droppable target ${x.id}` : `Draggable item ${m.id} was dropped.`;
	}
};
function isFocusable(m) {
	let x = m.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(x);
}
function createHiddenText(m, x) {
	let S = document.createElement("div");
	return S.id = m, S.style.setProperty("display", "none"), S.textContent = x, S;
}
function createLiveRegion(m) {
	let x = document.createElement("div");
	return x.id = m, x.setAttribute("role", "status"), x.setAttribute("aria-live", "polite"), x.setAttribute("aria-atomic", "true"), x.style.setProperty("position", "fixed"), x.style.setProperty("width", "1px"), x.style.setProperty("height", "1px"), x.style.setProperty("margin", "-1px"), x.style.setProperty("border", "0"), x.style.setProperty("padding", "0"), x.style.setProperty("overflow", "hidden"), x.style.setProperty("clip", "rect(0 0 0 0)"), x.style.setProperty("clip-path", "inset(100%)"), x.style.setProperty("white-space", "nowrap"), x;
}
var debouncedEvents = ["dragover", "dragmove"], Accessibility = class extends Plugin {
	constructor(m, x) {
		super(m);
		let { id: S, idPrefix: { description: C = defaultDescriptionIdPrefix, announcement: T = defaultAnnouncementIdPrefix } = {}, announcements: D = defaultAnnouncements, screenReaderInstructions: O = defaultScreenReaderInstructions, debounce: k = 500 } = x ?? {}, A = S ? `${C}-${S}` : generateUniqueId(C), j = S ? `${T}-${S}` : generateUniqueId(T), M, N, P, F, I = (m = F) => {
			!P || !m || P?.nodeValue !== m && (P.nodeValue = m);
		}, L = () => scheduler.schedule(I), R = debounce$1(L, k), z = Object.entries(D).map(([m, x]) => this.manager.monitor.addEventListener(m, (S, C) => {
			let T = P;
			if (!T) return;
			let D = x?.(S, C);
			D && T.nodeValue !== D && (F = D, debouncedEvents.includes(m) ? R() : (L(), R.cancel()));
		})), B = () => {
			let m = [];
			M?.isConnected || (M = createHiddenText(A, O.draggable), m.push(M)), N?.isConnected || (N = createLiveRegion(j), P = document.createTextNode(""), N.appendChild(P), m.push(N)), m.length > 0 && document.body.append(...m);
		}, V = /* @__PURE__ */ new Set();
		function H() {
			for (let m of V) m();
		}
		this.registerEffect(() => {
			V.clear();
			for (let m of this.manager.registry.draggables.value) {
				let x = m.handle ?? m.element;
				if (x) {
					(!M || !N) && V.add(B), (!isFocusable(x) || isSafari()) && !x.hasAttribute("tabindex") && V.add(() => x.setAttribute("tabindex", "0")), !x.hasAttribute("role") && x.tagName.toLowerCase() !== "button" && V.add(() => x.setAttribute("role", defaultAttributes$1.role)), x.hasAttribute("aria-roledescription") || V.add(() => x.setAttribute("aria-roledescription", defaultAttributes$1.roleDescription)), x.hasAttribute("aria-describedby") || V.add(() => x.setAttribute("aria-describedby", A));
					for (let S of ["aria-pressed", "aria-grabbed"]) {
						let C = String(m.isDragging);
						x.getAttribute(S) !== C && V.add(() => x.setAttribute(S, C));
					}
					let S = String(m.disabled);
					x.getAttribute("aria-disabled") !== S && V.add(() => x.setAttribute("aria-disabled", S));
				}
			}
			V.size > 0 && scheduler.schedule(H);
		}), this.destroy = () => {
			super.destroy(), M?.remove(), N?.remove(), z.forEach((m) => m());
		};
	}
};
function debounce$1(m, x) {
	let S, C = () => {
		clearTimeout(S), S = setTimeout(m, x);
	};
	return C.cancel = () => clearTimeout(S), C;
}
var Cursor = class extends Plugin {
	constructor(m, x) {
		super(m, x), this.manager = m;
		let S = computed(() => getDocument(this.manager.dragOperation.source?.element));
		this.destroy = E(() => {
			let { dragOperation: m } = this.manager, { cursor: x = "grabbing", nonce: C } = this.options ?? {};
			if (m.status.initialized) {
				let m = S.value, T = m.createElement("style");
				return C && T.setAttribute("nonce", C), T.textContent = `* { cursor: ${x} !important; }`, m.head.appendChild(T), () => T.remove();
			}
		});
	}
}, ATTR_PREFIX = "data-dnd-", DROPPING_ATTRIBUTE = `${ATTR_PREFIX}dropping`, CSS_PREFIX = "--dnd-", ATTRIBUTE = `${ATTR_PREFIX}dragging`, PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`, IGNORED_ATTRIBUTES = [
	ATTRIBUTE,
	PLACEHOLDER_ATTRIBUTE,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], IGNORED_STYLES = ["view-transition-name"], CSS_RULES = `
  :root [${ATTRIBUTE}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${CSS_PREFIX}top, 0px) !important;
    left: var(${CSS_PREFIX}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${CSS_PREFIX}width, auto);
    max-width: var(${CSS_PREFIX}width, auto);
    height: var(${CSS_PREFIX}height, auto);
    max-height: var(${CSS_PREFIX}height, auto);
    transition: var(${CSS_PREFIX}transition) !important;
  }

  :root [${PLACEHOLDER_ATTRIBUTE}] {
    transition: none;
  }

  :root [${PLACEHOLDER_ATTRIBUTE}='hidden'] {
    visibility: hidden;
  }

  [${ATTRIBUTE}] * {
    pointer-events: none !important;
  }

  [${ATTRIBUTE}]:not([${DROPPING_ATTRIBUTE}]) {
    translate: var(${CSS_PREFIX}translate) !important;
  }

  [${ATTRIBUTE}][style*='${CSS_PREFIX}scale'] {
    scale: var(${CSS_PREFIX}scale) !important;
    transform-origin: var(${CSS_PREFIX}transform-origin) !important;
  }

  @layer {
    :where([${ATTRIBUTE}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ATTRIBUTE}]::backdrop, [${ATTR_PREFIX}overlay]:not([${ATTRIBUTE}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function createPlaceholder(m, x = "hidden") {
	return n(() => {
		let { element: S, manager: C } = m;
		if (!S || !C) return;
		let T = findContainedDroppables(S, C.registry.droppables), D = [], O = cloneElement(S), { remove: k } = O;
		return proxyDroppableElements(T, O, D), configurePlaceholder(O, x), O.remove = () => {
			D.forEach((m) => m()), k.call(O);
		}, O;
	});
}
function findContainedDroppables(m, x) {
	let S = /* @__PURE__ */ new Map();
	for (let C of x) if (C.element && (m === C.element || m.contains(C.element))) {
		let m = `${ATTR_PREFIX}${generateUniqueId("dom-id")}`;
		C.element.setAttribute(m, ""), S.set(C, m);
	}
	return S;
}
function proxyDroppableElements(m, x, S) {
	for (let [C, T] of m) {
		if (!C.element) continue;
		let m = `[${T}]`, D = x.matches(m) ? x : x.querySelector(m);
		if (C.element.removeAttribute(T), !D) continue;
		let O = C.element;
		C.proxy = D, D.removeAttribute(T), ProxiedElements.set(O, D), S.push(() => {
			ProxiedElements.delete(O), C.proxy = void 0;
		});
	}
}
function configurePlaceholder(m, x = "hidden") {
	m.setAttribute("inert", "true"), m.setAttribute("tab-index", "-1"), m.setAttribute("aria-hidden", "true"), m.setAttribute(PLACEHOLDER_ATTRIBUTE, x);
}
function isSameFrame(m, x) {
	return m === x ? !0 : getFrameElement(m) === getFrameElement(x);
}
function preventPopoverClose(m) {
	let { target: x } = m;
	"newState" in m && m.newState === "closed" && isElement(x) && x.hasAttribute("popover") && requestAnimationFrame(() => showPopover(x));
}
function isTableRow(m) {
	return m.tagName === "TR";
}
var styleSheetRegistry = /* @__PURE__ */ new Map(), _overlay_dec, _a$1, _init$2, _overlay, _Feedback_instances, render_fn, injectStyles_fn, _Feedback = class extends (_a$1 = Plugin, _overlay_dec = [reactive], _a$1) {
	constructor(m, x) {
		super(m, x), __privateAdd$2(this, _Feedback_instances), __privateAdd$2(this, _overlay, __runInitializers$2(_init$2, 8, this)), __runInitializers$2(_init$2, 11, this), this.state = {
			initial: {},
			current: {}
		}, this.registerEffect(__privateMethod(this, _Feedback_instances, injectStyles_fn)), this.registerEffect(__privateMethod(this, _Feedback_instances, render_fn));
	}
	destroy() {
		super.destroy();
		for (let [m, x] of styleSheetRegistry.entries()) x.instances.has(this) && (x.instances.delete(this), x.instances.size === 0 && (x.cleanup(), styleSheetRegistry.delete(m)));
	}
};
_init$2 = __decoratorStart$2(_a$1), _overlay = /* @__PURE__ */ new WeakMap(), _Feedback_instances = /* @__PURE__ */ new WeakSet(), render_fn = function() {
	let { state: m, manager: x, options: S } = this, { dragOperation: C } = x, { position: T, source: D, status: O } = C;
	if (O.idle) {
		m.current = {}, m.initial = {};
		return;
	}
	if (!D) return;
	let { element: k, feedback: A } = D;
	if (!k || A === "none" || !O.initialized || O.initializing) return;
	let { initial: j } = m, M = this.overlay ?? k, N = getFrameTransform(M), P = getFrameTransform(k), F = !isSameFrame(k, M), I = new DOMRectangle(k, {
		frameTransform: F ? P : null,
		ignoreTransforms: !F
	}), L = {
		x: P.scaleX / N.scaleX,
		y: P.scaleY / N.scaleY
	}, { width: R, height: z, top: B, left: V } = I;
	F && (R /= L.x, z /= L.y);
	let H, U, W = new Styles(M), { transition: G, translate: K, boxSizing: q, paddingBlockStart: EI, paddingBlockEnd: DI, paddingInlineStart: J, paddingInlineEnd: Y, borderInlineStartWidth: X, borderInlineEndWidth: Z, borderBlockStartWidth: OI, borderBlockEndWidth: kI } = getComputedStyles(k), AI = A === "clone", jI = q === "content-box", MI = jI ? parseInt(J) + parseInt(Y) + parseInt(X) + parseInt(Z) : 0, NI = jI ? parseInt(EI) + parseInt(DI) + parseInt(OI) + parseInt(kI) : 0, Q = A !== "move" && !this.overlay ? createPlaceholder(D, AI ? "clone" : "hidden") : null, PI = n(() => isKeyboardEvent(x.dragOperation.activatorEvent));
	if (K !== "none") {
		let m = parseTranslate(K);
		m && !j.translate && (j.translate = m);
	}
	if (!j.transformOrigin) {
		let m = n(() => T.current);
		j.transformOrigin = {
			x: (m.x - V * N.scaleX - N.x) / (R * N.scaleX),
			y: (m.y - B * N.scaleY - N.y) / (z * N.scaleY)
		};
	}
	let { transformOrigin: $ } = j, FI = B * N.scaleY + N.y, II = V * N.scaleX + N.x;
	if (!j.coordinates && (j.coordinates = {
		x: II,
		y: FI
	}, L.x !== 1 || L.y !== 1)) {
		let { scaleX: m, scaleY: x } = P, { x: S, y: C } = $;
		j.coordinates.x += (R * m - R) * S, j.coordinates.y += (z * x - z) * C;
	}
	j.dimensions ||= {
		width: R,
		height: z
	}, j.frameTransform ||= N;
	let LI = {
		x: j.coordinates.x - II,
		y: j.coordinates.y - FI
	}, RI = {
		width: (j.dimensions.width * j.frameTransform.scaleX - R * N.scaleX) * $.x,
		height: (j.dimensions.height * j.frameTransform.scaleY - z * N.scaleY) * $.y
	}, zI = {
		x: LI.x / N.scaleX + RI.width,
		y: LI.y / N.scaleY + RI.height
	}, BI = {
		left: V + zI.x,
		top: B + zI.y
	};
	M.setAttribute(ATTRIBUTE, "true");
	let VI = n(() => C.transform), HI = j.translate ?? {
		x: 0,
		y: 0
	}, UI = `${VI.x * N.scaleX + HI.x}px ${VI.y * N.scaleY + HI.y}px 0`, WI = G ? `${G}, translate 0ms linear` : "";
	W.set({
		width: R - MI,
		height: z - NI,
		top: BI.top,
		left: BI.left,
		translate: UI,
		transition: WI,
		scale: F ? `${L.x} ${L.y}` : "",
		"transform-origin": `${$.x * 100}% ${$.y * 100}%`
	}, CSS_PREFIX), Q && (k.insertAdjacentElement("afterend", Q), S?.rootElement && (typeof S.rootElement == "function" ? S.rootElement(D) : S.rootElement).appendChild(k)), supportsPopover(M) && (M.hasAttribute("popover") || M.setAttribute("popover", "manual"), showPopover(M), M.addEventListener("beforetoggle", preventPopoverClose));
	let GI = new ResizeObserver(() => {
		if (!Q) return;
		let m = new DOMRectangle(Q, {
			frameTransform: N,
			ignoreTransforms: !0
		}), x = $ ?? {
			x: 1,
			y: 1
		}, S = (R - m.width) * x.x + zI.x, T = (z - m.height) * x.y + zI.y;
		if (W.set({
			width: m.width - MI,
			height: m.height - NI,
			top: B + T,
			left: V + S
		}, CSS_PREFIX), H?.takeRecords(), isTableRow(k) && isTableRow(Q)) {
			let m = Array.from(k.cells), x = Array.from(Q.cells);
			for (let [S, C] of m.entries()) {
				let m = x[S];
				C.style.width = `${m.offsetWidth}px`;
			}
		}
		C.shape = new DOMRectangle(M);
	}), KI = new DOMRectangle(M);
	n(() => C.shape = KI);
	let qI = getWindow(M), JI = (m) => {
		this.manager.actions.stop({ event: m });
	};
	PI && qI.addEventListener("resize", JI), n(() => D.status) === "idle" && requestAnimationFrame(() => D.status = "dragging"), Q && (GI.observe(Q), H = new MutationObserver((m) => {
		let x = !1;
		for (let S of m) {
			if (S.target !== k) {
				x = !0;
				continue;
			}
			if (S.type !== "attributes") continue;
			let m = S.attributeName;
			if (m.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(m)) continue;
			let C = k.getAttribute(m);
			if (m === "style") {
				if (supportsStyle(k) && supportsStyle(Q)) {
					let m = k.style;
					for (let x of Array.from(Q.style)) m.getPropertyValue(x) === "" && Q.style.removeProperty(x);
					for (let x of Array.from(m)) {
						if (IGNORED_STYLES.includes(x) || x.startsWith(CSS_PREFIX)) continue;
						let S = m.getPropertyValue(x);
						Q.style.setProperty(x, S);
					}
				}
			} else C === null ? Q.removeAttribute(m) : Q.setAttribute(m, C);
		}
		x && AI && (Q.innerHTML = k.innerHTML);
	}), H.observe(k, {
		attributes: !0,
		subtree: !0,
		childList: !0
	}), U = new MutationObserver((m) => {
		for (let x of m) if (x.addedNodes.length !== 0) for (let m of Array.from(x.addedNodes)) {
			if (m.contains(k) && k.nextElementSibling !== Q) {
				k.insertAdjacentElement("afterend", Q), showPopover(M);
				return;
			}
			if (m.contains(Q) && Q.previousElementSibling !== k) {
				Q.insertAdjacentElement("beforebegin", k), showPopover(M);
				return;
			}
		}
	}), U.observe(k.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}));
	let YI = x.dragOperation.source?.id, XI = () => {
		if (!PI || YI == null) return;
		let m = x.registry.draggables.get(YI), S = m?.handle ?? m?.element;
		isHTMLElement$1(S) && S.focus();
	}, ZI = () => {
		H?.disconnect(), U?.disconnect(), GI.disconnect(), qI.removeEventListener("resize", JI), supportsPopover(M) && (M.removeEventListener("beforetoggle", preventPopoverClose), M.removeAttribute("popover")), M.removeAttribute(ATTRIBUTE), W.reset(), D.status = "idle";
		let x = m.current.translate != null;
		Q && (x || Q.parentElement !== M.parentElement) && M.isConnected && Q.replaceWith(M), Q?.remove();
	}, QI = effects(() => {
		let { transform: x, status: S } = C;
		if (!(!x.x && !x.y && !m.current.translate) && S.dragging) {
			let S = j.translate ?? {
				x: 0,
				y: 0
			}, T = {
				x: x.x / N.scaleX + S.x,
				y: x.y / N.scaleY + S.y
			}, D = m.current.translate, O = n(() => C.modifiers), k = n(() => C.shape?.current), A = PI ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (W.set({
				transition: `${G}, translate ${A}`,
				translate: `${T.x}px ${T.y}px 0`
			}, CSS_PREFIX), H?.takeRecords(), k && k !== KI && D && !O.length) {
				let m = Point.delta(T, D);
				C.shape = Rectangle.from(k.boundingRectangle).translate(m.x * N.scaleX, m.y * N.scaleY);
			} else C.shape = new DOMRectangle(M);
			m.current.translate = T;
		}
	}, function() {
		if (C.status.dropped) {
			this.dispose(), D.status = "dropping";
			let S = m.current.translate, C = S != null;
			if (!S && k !== M && (S = {
				x: 0,
				y: 0
			}), !S) {
				ZI();
				return;
			}
			x.renderer.rendering.then(() => {
				{
					showPopover(M);
					let [, m] = getFinalKeyframe$2(M, (m) => "translate" in m) ?? [];
					m?.pause();
					let x = Q ?? k, T = { frameTransform: isSameFrame(M, x) ? null : void 0 }, O = new DOMRectangle(M, T), A = parseTranslate(getComputedStyles(M).translate) ?? S, j = new DOMRectangle(x, T), N = Rectangle.delta(O, j, D.alignment), P = {
						x: A.x - N.x,
						y: A.y - N.y
					}, F = Math.round(O.intrinsicHeight) === Math.round(j.intrinsicHeight) ? {} : {
						minHeight: [`${O.intrinsicHeight}px`, `${j.intrinsicHeight}px`],
						maxHeight: [`${O.intrinsicHeight}px`, `${j.intrinsicHeight}px`]
					}, I = Math.round(O.intrinsicWidth) === Math.round(j.intrinsicWidth) ? {} : {
						minWidth: [`${O.intrinsicWidth}px`, `${j.intrinsicWidth}px`],
						maxWidth: [`${O.intrinsicWidth}px`, `${j.intrinsicWidth}px`]
					};
					W.set({ transition: G }, CSS_PREFIX), M.setAttribute(DROPPING_ATTRIBUTE, ""), H?.takeRecords(), animateTransform({
						element: M,
						keyframes: __spreadProps$4(__spreadValues$4(__spreadValues$4({}, F), I), { translate: [`${A.x}px ${A.y}px 0`, `${P.x}px ${P.y}px 0`] }),
						options: {
							duration: C || M !== k ? 250 : 0,
							easing: "ease"
						}
					}).then(() => {
						M.removeAttribute(DROPPING_ATTRIBUTE), m?.finish(), ZI(), requestAnimationFrame(XI);
					});
				}
			});
		}
	});
	return () => {
		ZI(), QI();
	};
}, injectStyles_fn = function() {
	let { status: m, source: x, target: S } = this.manager.dragOperation, { nonce: C } = this.options ?? {};
	if (m.initializing) {
		let m = getDocument(x?.element ?? null), T = getDocument(S?.element ?? null), D = /* @__PURE__ */ new Set([m, T]);
		for (let m of D) {
			let x = styleSheetRegistry.get(m);
			if (!x) {
				let S = document.createElement("style");
				S.textContent = CSS_RULES, C && S.setAttribute("nonce", C), m.head.prepend(S);
				let T = new MutationObserver((x) => {
					for (let C of x) if (C.type === "childList") {
						let x = Array.from(C.removedNodes);
						x.length > 0 && x.includes(S) && m.head.prepend(S);
					}
				});
				T.observe(m.head, { childList: !0 }), x = {
					cleanup: () => {
						T.disconnect(), S.remove();
					},
					instances: /* @__PURE__ */ new Set()
				}, styleSheetRegistry.set(m, x);
			}
			x.instances.add(this);
		}
	}
}, __decorateElement$2(_init$2, 4, "overlay", _overlay_dec, _Feedback, _overlay), __decoratorMetadata$2(_init$2, _Feedback), _Feedback.configure = configurator(_Feedback);
var Feedback = _Feedback, LOCKED = !0, UNLOCKED = !1, _dec, _a2, _dec2, _b = (_dec2 = [reactive], ScrollDirection.Forward), _init2, __b, __a;
_a2 = (_dec = [reactive], ScrollDirection.Reverse);
var ScrollLock = class {
	constructor() {
		__privateAdd$2(this, __b, __runInitializers$2(_init2, 8, this, LOCKED)), __runInitializers$2(_init2, 11, this), __privateAdd$2(this, __a, __runInitializers$2(_init2, 12, this, LOCKED)), __runInitializers$2(_init2, 15, this);
	}
	isLocked(m) {
		return m === ScrollDirection.Idle ? !1 : m == null ? this[ScrollDirection.Forward] === LOCKED && this[ScrollDirection.Reverse] === LOCKED : this[m] === LOCKED;
	}
	unlock(m) {
		m !== ScrollDirection.Idle && (this[m] = UNLOCKED);
	}
};
_init2 = __decoratorStart$2(null), __b = /* @__PURE__ */ new WeakMap(), __a = /* @__PURE__ */ new WeakMap(), __decorateElement$2(_init2, 4, _b, _dec2, ScrollLock, __b), __decorateElement$2(_init2, 4, _a2, _dec, ScrollLock, __a), __decoratorMetadata$2(_init2, ScrollLock);
var DIRECTIONS = [ScrollDirection.Forward, ScrollDirection.Reverse], ScrollIntent = class {
	constructor() {
		this.x = new ScrollLock(), this.y = new ScrollLock();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, ScrollIntentTracker = class extends Plugin {
	constructor(m) {
		super(m);
		let x = d(new ScrollIntent()), S = null;
		this.signal = x, E(() => {
			let { status: C } = m.dragOperation;
			if (!C.initialized) {
				S = null, x.value = new ScrollIntent();
				return;
			}
			let { delta: T } = m.dragOperation.position;
			if (S) {
				let m = {
					x: getDirection$2(T.x, S.x),
					y: getDirection$2(T.y, S.y)
				}, C = x.peek();
				r(() => {
					for (let x of Axes) for (let S of DIRECTIONS) m[x] === S && C[x].unlock(S);
					x.value = C;
				});
			}
			S = T;
		});
	}
	get current() {
		return this.signal.peek();
	}
};
function getDirection$2(m, x) {
	return Math.sign(m - x);
}
var _autoScrolling_dec, _a3, _init3, _autoScrolling, _meta, _scroll, Scroller = class extends (_a3 = CorePlugin, _autoScrolling_dec = [reactive], _a3) {
	constructor(m) {
		super(m), __privateAdd$2(this, _autoScrolling, __runInitializers$2(_init3, 8, this, !1)), __runInitializers$2(_init3, 11, this), __privateAdd$2(this, _meta), __privateAdd$2(this, _scroll, () => {
			if (!__privateGet$2(this, _meta)) return;
			let { element: m, by: x } = __privateGet$2(this, _meta);
			x.y && (m.scrollTop += x.y), x.x && (m.scrollLeft += x.x);
		}), this.scroll = (m) => {
			if (this.disabled) return !1;
			let x = this.getScrollableElements();
			if (!x) return __privateSet$2(this, _meta, void 0), !1;
			let { position: S } = this.manager.dragOperation, C = S?.current;
			if (C) {
				let { by: S } = m ?? {}, T = S ? {
					x: getScrollIntent(S.x),
					y: getScrollIntent(S.y)
				} : void 0, D = T ? void 0 : this.scrollIntentTracker.current;
				if (D?.isLocked()) return !1;
				for (let m of x) {
					let x = canScroll(m, S);
					if (x.x || x.y) {
						let { speed: x, direction: O } = detectScrollIntent(m, C, T);
						if (D) for (let m of Axes) D[m].isLocked(O[m]) && (x[m] = 0, O[m] = 0);
						if (O.x || O.y) {
							let { x: C, y: T } = S ?? O, D = C * x.x, k = T * x.y;
							if (D || k) {
								let x = __privateGet$2(this, _meta)?.by;
								if (this.autoScrolling && x && (x.x && !D || x.y && !k)) continue;
								return __privateSet$2(this, _meta, {
									element: m,
									by: {
										x: D,
										y: k
									}
								}), scheduler.schedule(__privateGet$2(this, _scroll)), !0;
							}
						}
					}
				}
			}
			return __privateSet$2(this, _meta, void 0), !1;
		};
		let x = null, S = null, C = computed(() => {
			let { position: S, source: C } = m.dragOperation;
			if (!S) return null;
			let T = getElementFromPoint(getDocument(C?.element), S.current);
			return T && (x = T), T ?? x;
		}), T = computed(() => {
			let x = C.value, { documentElement: T } = getDocument(x);
			if (!x || x === T) {
				let { target: x } = m.dragOperation, C = x?.element;
				if (C) {
					let m = getScrollableAncestors(C, { excludeElement: !1 });
					return S = m, m;
				}
			}
			if (x) {
				let m = getScrollableAncestors(x, { excludeElement: !1 });
				return this.autoScrolling && S && m.size < S?.size ? S : (S = m, m);
			}
			return S = null, null;
		}, deepEqual);
		this.getScrollableElements = () => T.value, this.scrollIntentTracker = new ScrollIntentTracker(m), this.destroy = m.monitor.addEventListener("dragmove", (x) => {
			this.disabled || x.defaultPrevented || !isKeyboardEvent(m.dragOperation.activatorEvent) || !x.by || this.scroll({ by: x.by }) && x.preventDefault();
		});
	}
};
_init3 = __decoratorStart$2(_a3), _autoScrolling = /* @__PURE__ */ new WeakMap(), _meta = /* @__PURE__ */ new WeakMap(), _scroll = /* @__PURE__ */ new WeakMap(), __decorateElement$2(_init3, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling), __decoratorMetadata$2(_init3, Scroller);
function getScrollIntent(m) {
	return m > 0 ? ScrollDirection.Forward : m < 0 ? ScrollDirection.Reverse : ScrollDirection.Idle;
}
var scheduler3 = new class {
	constructor(m) {
		this.scheduler = m, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: m, resolvers: x } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let x of m) x();
			for (let m of x) m();
		};
	}
	schedule(m) {
		return this.tasks.add(m), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((m) => this.resolvers.add(m));
	}
}((m) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(m) : m();
}), AUTOSCROLL_INTERVAL = 10, AutoScroller = class extends Plugin {
	constructor(m, x) {
		super(m);
		let S = m.registry.plugins.get(Scroller);
		if (!S) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = E(() => {
			if (this.disabled) return;
			let { position: x, status: C } = m.dragOperation;
			if (C.dragging) if (S.scroll()) {
				S.autoScrolling = !0;
				let m = setInterval(() => scheduler3.schedule(S.scroll), AUTOSCROLL_INTERVAL);
				return () => {
					clearInterval(m);
				};
			} else S.autoScrolling = !1;
		});
	}
}, listenerOptions = {
	capture: !0,
	passive: !0
}, _timeout, ScrollListener = class extends CorePlugin {
	constructor(m) {
		super(m), __privateAdd$2(this, _timeout), this.handleScroll = () => {
			__privateGet$2(this, _timeout) ?? __privateSet$2(this, _timeout, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), __privateSet$2(this, _timeout, void 0);
			}, 50));
		};
		let { dragOperation: x } = this.manager;
		this.destroy = E(() => {
			if (x.status.dragging) {
				let m = x.source?.element?.ownerDocument ?? document;
				return m.addEventListener("scroll", this.handleScroll, listenerOptions), () => {
					m.removeEventListener("scroll", this.handleScroll, listenerOptions);
				};
			}
		});
	}
};
_timeout = /* @__PURE__ */ new WeakMap();
var PreventSelection = class extends Plugin {
	constructor(m, x) {
		super(m, x), this.manager = m, this.destroy = E(() => {
			let { dragOperation: m } = this.manager, { nonce: x } = this.options ?? {};
			if (m.status.initialized) {
				let m = document.createElement("style");
				return x && m.setAttribute("nonce", x), m.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(m), removeSelection(), document.addEventListener("selectionchange", removeSelection, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", removeSelection, { capture: !0 }), m.remove();
				};
			}
		});
	}
};
function removeSelection() {
	var m;
	(m = document.getSelection()) == null || m.removeAllRanges();
}
var defaults = Object.freeze({
	offset: 10,
	keyboardCodes: {
		start: ["Space", "Enter"],
		cancel: ["Escape"],
		end: [
			"Space",
			"Enter",
			"Tab"
		],
		up: ["ArrowUp"],
		down: ["ArrowDown"],
		left: ["ArrowLeft"],
		right: ["ArrowRight"]
	},
	shouldActivate(m) {
		let { event: x, source: S } = m, C = S.handle ?? S.element;
		return x.target === C;
	}
}), _cleanupFunctions, _KeyboardSensor = class extends Sensor {
	constructor(m, x) {
		super(m), this.manager = m, this.options = x, __privateAdd$2(this, _cleanupFunctions, []), this.listeners = new Listeners(), this.handleSourceKeyDown = (m, x, S) => {
			if (this.disabled || m.defaultPrevented || !isElement(m.target) || x.disabled) return;
			let { keyboardCodes: C = defaults.keyboardCodes, shouldActivate: T = defaults.shouldActivate } = S ?? {};
			C.start.includes(m.code) && this.manager.dragOperation.status.idle && T({
				event: m,
				source: x,
				manager: this.manager
			}) && this.handleStart(m, x, S);
		};
	}
	bind(m, x = this.options) {
		return E(() => {
			let S = m.handle ?? m.element, C = (S) => {
				isKeyboardEvent(S) && this.handleSourceKeyDown(S, m, x);
			};
			if (S) return S.addEventListener("keydown", C), () => {
				S.removeEventListener("keydown", C);
			};
		});
	}
	handleStart(m, x, S) {
		let { element: C } = x;
		if (!C) throw Error("Source draggable does not have an associated element");
		m.preventDefault(), m.stopImmediatePropagation(), scrollIntoViewIfNeeded(C);
		let { center: T } = new DOMRectangle(C);
		if (this.manager.actions.start({
			event: m,
			coordinates: {
				x: T.x,
				y: T.y
			},
			source: x
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let D = getDocument(C), O = [this.listeners.bind(D, [{
			type: "keydown",
			listener: (m) => this.handleKeyDown(m, x, S),
			options: { capture: !0 }
		}])];
		__privateGet$2(this, _cleanupFunctions).push(...O);
	}
	handleKeyDown(m, x, S) {
		let { keyboardCodes: C = defaults.keyboardCodes } = S ?? {};
		if (isKeycode(m, [...C.end, ...C.cancel])) {
			m.preventDefault();
			let x = isKeycode(m, C.cancel);
			this.handleEnd(m, x);
			return;
		}
		isKeycode(m, C.up) ? this.handleMove("up", m) : isKeycode(m, C.down) && this.handleMove("down", m), isKeycode(m, C.left) ? this.handleMove("left", m) : isKeycode(m, C.right) && this.handleMove("right", m);
	}
	handleEnd(m, x) {
		this.manager.actions.stop({
			event: m,
			canceled: x
		}), this.cleanup();
	}
	handleMove(m, x) {
		let { shape: S } = this.manager.dragOperation, C = x.shiftKey ? 5 : 1, T = {
			x: 0,
			y: 0
		}, D = this.options?.offset ?? defaults.offset;
		if (typeof D == "number" && (D = {
			x: D,
			y: D
		}), S) {
			switch (m) {
				case "up":
					T = {
						x: 0,
						y: -D.y * C
					};
					break;
				case "down":
					T = {
						x: 0,
						y: D.y * C
					};
					break;
				case "left":
					T = {
						x: -D.x * C,
						y: 0
					};
					break;
				case "right":
					T = {
						x: D.x * C,
						y: 0
					};
					break;
			}
			(T.x || T.y) && (x.preventDefault(), this.manager.actions.move({
				event: x,
				by: T
			}));
		}
	}
	sideEffects() {
		let m = this.manager.registry.plugins.get(AutoScroller);
		m?.disabled === !1 && (m.disable(), __privateGet$2(this, _cleanupFunctions).push(() => {
			m.enable();
		}));
	}
	cleanup() {
		__privateGet$2(this, _cleanupFunctions).forEach((m) => m()), __privateSet$2(this, _cleanupFunctions, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
_cleanupFunctions = /* @__PURE__ */ new WeakMap(), _KeyboardSensor.configure = configurator(_KeyboardSensor), _KeyboardSensor.defaults = defaults;
var KeyboardSensor = _KeyboardSensor;
function isKeycode(m, x) {
	return x.includes(m.code);
}
var defaults2 = Object.freeze({ activationConstraints(m, x) {
	let { pointerType: S, target: C } = m;
	if (!(S === "mouse" && isElement(C) && (x.handle === C || x.handle?.contains(C)))) return S === "touch" ? { delay: {
		value: 250,
		tolerance: 5
	} } : isTextInput(C) && !m.defaultPrevented ? { delay: {
		value: 200,
		tolerance: 0
	} } : {
		delay: {
			value: 200,
			tolerance: 10
		},
		distance: { value: 5 }
	};
} }), _cleanup, _clearTimeout, _PointerSensor = class extends Sensor {
	constructor(m, x) {
		super(m), this.manager = m, this.options = x, __privateAdd$2(this, _cleanup, /* @__PURE__ */ new Set()), __privateAdd$2(this, _clearTimeout), this.listeners = new Listeners(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, this.handleMove = () => {
			let { event: m, coordinates: x } = this.latest;
			!m || !x || this.manager.actions.move({
				event: m,
				to: x
			});
		}, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(m, x) {
		let { activationConstraints: S = defaults2.activationConstraints } = this.options ?? {};
		return typeof S == "function" ? S(m, x) : S;
	}
	bind(m, x = this.options) {
		return E(() => {
			let S = new AbortController(), { signal: C } = S, T = (S) => {
				isPointerEvent(S) && this.handlePointerDown(S, m, x);
			}, D = [m.handle ?? m.element];
			x?.activatorElements && (D = Array.isArray(x.activatorElements) ? x.activatorElements : x.activatorElements(m));
			for (let m of D) m && (patchWindow(m.ownerDocument.defaultView), m.addEventListener("pointerdown", T, { signal: C }));
			return () => S.abort();
		});
	}
	handlePointerDown(m, x, S = {}) {
		if (this.disabled || !m.isPrimary || m.button !== 0 || !isElement(m.target) || x.disabled || isCapturedBySensor(m) || !this.manager.dragOperation.status.idle) return;
		let { target: C } = m, T = isHTMLElement$1(C) && C.draggable && C.getAttribute("draggable") === "true", D = getFrameTransform(x.element);
		this.initialCoordinates = {
			x: m.clientX * D.scaleX + D.x,
			y: m.clientY * D.scaleY + D.y
		};
		let O = this.activationConstraints(m, x);
		if (m.sensor = this, !O?.delay && !O?.distance) this.handleStart(x, m);
		else {
			let { delay: S } = O;
			if (S) {
				let C = setTimeout(() => this.handleStart(x, m), S.value);
				__privateSet$2(this, _clearTimeout, () => {
					clearTimeout(C), __privateSet$2(this, _clearTimeout, void 0);
				});
			}
		}
		let k = getDocument(m.target), A = this.listeners.bind(k, [
			{
				type: "pointermove",
				listener: (m) => this.handlePointerMove(m, x)
			},
			{
				type: "pointerup",
				listener: this.handlePointerUp,
				options: { capture: !0 }
			},
			{
				type: "dragstart",
				listener: T ? this.handleCancel : preventDefault,
				options: { capture: !0 }
			}
		]);
		__privateGet$2(this, _cleanup).add(() => {
			var m;
			A(), (m = __privateGet$2(this, _clearTimeout)) == null || m.call(this), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(m, x) {
		let S = {
			x: m.clientX,
			y: m.clientY
		}, C = getFrameTransform(x.element);
		if (S.x = S.x * C.scaleX + C.x, S.y = S.y * C.scaleY + C.y, this.manager.dragOperation.status.dragging) {
			m.preventDefault(), m.stopPropagation(), this.latest.event = m, this.latest.coordinates = S, scheduler.schedule(this.handleMove);
			return;
		}
		if (!this.initialCoordinates) return;
		let T = {
			x: S.x - this.initialCoordinates.x,
			y: S.y - this.initialCoordinates.y
		}, { distance: D, delay: O } = this.activationConstraints(m, x) ?? {};
		if (D) {
			if (D.tolerance != null && exceedsDistance(T, D.tolerance)) return this.handleCancel(m);
			if (exceedsDistance(T, D.value)) return this.handleStart(x, m);
		}
		if (O && exceedsDistance(T, O.tolerance)) return this.handleCancel(m);
	}
	handlePointerUp(m) {
		let { status: x } = this.manager.dragOperation;
		if (!x.idle) {
			m.preventDefault(), m.stopPropagation();
			let S = !x.initialized;
			this.manager.actions.stop({
				event: m,
				canceled: S
			});
		}
		this.cleanup();
	}
	handleKeyDown(m) {
		m.key === "Escape" && (m.preventDefault(), this.handleCancel(m));
	}
	handleStart(m, x) {
		var S;
		let { manager: C, initialCoordinates: T } = this;
		if ((S = __privateGet$2(this, _clearTimeout)) == null || S.call(this), !T || !C.dragOperation.status.idle || x.defaultPrevented) return;
		if (C.actions.start({
			coordinates: T,
			event: x,
			source: m
		}).signal.aborted) return this.cleanup();
		x.preventDefault();
		let D = getDocument(x.target), O = D.body;
		O.setPointerCapture(x.pointerId);
		let k = this.listeners.bind(D, [
			{
				type: "touchmove",
				listener: preventDefault,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: preventDefault
			},
			{
				type: "contextmenu",
				listener: preventDefault
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			},
			{
				type: "lostpointercapture",
				listener: (m) => {
					m.target === O && this.handlePointerUp(m);
				}
			}
		]);
		__privateGet$2(this, _cleanup).add(k);
	}
	handleCancel(m) {
		let { dragOperation: x } = this.manager;
		x.status.initialized && this.manager.actions.stop({
			event: m,
			canceled: !0
		}), this.cleanup();
	}
	cleanup() {
		this.latest = {
			event: void 0,
			coordinates: void 0
		}, __privateGet$2(this, _cleanup).forEach((m) => m()), __privateGet$2(this, _cleanup).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
_cleanup = /* @__PURE__ */ new WeakMap(), _clearTimeout = /* @__PURE__ */ new WeakMap(), _PointerSensor.configure = configurator(_PointerSensor), _PointerSensor.defaults = defaults2;
var PointerSensor = _PointerSensor;
function isCapturedBySensor(m) {
	return "sensor" in m;
}
function preventDefault(m) {
	m.preventDefault();
}
function noop$1() {}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(m) {
	!m || windows.has(m) || (m.addEventListener("touchmove", noop$1, {
		capture: !1,
		passive: !1
	}), windows.add(m));
}
var defaultPreset = {
	modifiers: [],
	plugins: [
		Accessibility,
		AutoScroller,
		Cursor,
		Feedback,
		PreventSelection
	],
	sensors: [PointerSensor, KeyboardSensor]
}, DragDropManager = class extends DragDropManager$1 {
	constructor(m = {}) {
		let { plugins: x = defaultPreset.plugins, sensors: S = defaultPreset.sensors, modifiers: C = [] } = m;
		super(__spreadProps$4(__spreadValues$4({}, m), {
			plugins: [
				ScrollListener,
				Scroller,
				...x
			],
			sensors: S,
			modifiers: C
		}));
	}
}, _feedback_dec, _element_dec, _handle_dec, _c, _init4, _handle, _element$1, _feedback, Draggable = class extends (_c = Draggable$1, _handle_dec = [reactive], _element_dec = [reactive], _feedback_dec = [reactive], _c) {
	constructor(m, x) {
		var S = m, { element: C, effects: T = () => [], handle: D, feedback: O = "default" } = S, k = __objRest$3(S, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(__spreadValues$4({ effects: () => [...T(), () => {
			let { manager: m } = this;
			if (!m) return;
			let x = (this.sensors?.map(descriptor) ?? [...m.sensors]).map((x) => {
				let S = x instanceof Sensor ? x : m.registry.register(x.plugin), C = x instanceof Sensor ? void 0 : x.options;
				return S.bind(this, C);
			});
			return function() {
				x.forEach((m) => m());
			};
		}] }, k), x), __privateAdd$2(this, _handle, __runInitializers$2(_init4, 8, this)), __runInitializers$2(_init4, 11, this), __privateAdd$2(this, _element$1, __runInitializers$2(_init4, 12, this)), __runInitializers$2(_init4, 15, this), __privateAdd$2(this, _feedback, __runInitializers$2(_init4, 16, this)), __runInitializers$2(_init4, 19, this), this.element = C, this.handle = D, this.feedback = O;
	}
};
_init4 = __decoratorStart$2(_c), _handle = /* @__PURE__ */ new WeakMap(), _element$1 = /* @__PURE__ */ new WeakMap(), _feedback = /* @__PURE__ */ new WeakMap(), __decorateElement$2(_init4, 4, "handle", _handle_dec, Draggable, _handle), __decorateElement$2(_init4, 4, "element", _element_dec, Draggable, _element$1), __decorateElement$2(_init4, 4, "feedback", _feedback_dec, Draggable, _feedback), __decoratorMetadata$2(_init4, Draggable);
var _proxy_dec, _element_dec2, _c2, _init5, _element2, _d, element_get, element_set, _Droppable_instances, _proxy, Droppable = class extends (_c2 = Droppable$1, _element_dec2 = [reactive], _proxy_dec = [reactive], _c2) {
	constructor(m, x) {
		var S = m, { element: C, effects: T = () => [] } = S, D = __objRest$3(S, ["element", "effects"]);
		let { collisionDetector: O = defaultCollisionDetection } = D, k = (m) => {
			let { manager: x, element: S } = this;
			if (!S || m === null) {
				this.shape = void 0;
				return;
			}
			if (!x) return;
			let C = new DOMRectangle(S), T = n(() => this.shape);
			return C && T?.equals(C) ? T : (this.shape = C, C);
		}, A = d(!1);
		super(__spreadProps$4(__spreadValues$4({}, D), {
			collisionDetector: O,
			effects: () => [
				...T(),
				() => {
					let { element: m, manager: x } = this;
					if (!x) return;
					let { dragOperation: S } = x, { source: C } = S;
					A.value = !!(C && S.status.initialized && m && !this.disabled && this.accepts(C));
				},
				() => {
					let { element: m } = this;
					if (A.value && m) {
						let x = new FrameObserver(m, k);
						return () => {
							x.disconnect(), this.shape = void 0;
						};
					}
				},
				() => {
					if (this.manager?.dragOperation.status.initialized) return () => {
						this.shape = void 0;
					};
				}
			]
		}), x), __privateAdd$2(this, _Droppable_instances), __privateAdd$2(this, _element2, __runInitializers$2(_init5, 8, this)), __runInitializers$2(_init5, 11, this), __privateAdd$2(this, _proxy, __runInitializers$2(_init5, 12, this)), __runInitializers$2(_init5, 15, this), this.element = C, this.refreshShape = () => k();
	}
	set element(m) {
		__privateSet$2(this, _Droppable_instances, m, element_set);
	}
	get element() {
		return this.proxy ?? __privateGet$2(this, _Droppable_instances, element_get);
	}
};
_init5 = __decoratorStart$2(_c2), _element2 = /* @__PURE__ */ new WeakMap(), _Droppable_instances = /* @__PURE__ */ new WeakSet(), _proxy = /* @__PURE__ */ new WeakMap(), _d = __decorateElement$2(_init5, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set, __decorateElement$2(_init5, 4, "proxy", _proxy_dec, Droppable, _proxy), __decoratorMetadata$2(_init5, Droppable);
function isRef(m) {
	return typeof m == "object" && !!m && "current" in m;
}
function currentValue(m) {
	if (m != null) return isRef(m) ? m.current ?? void 0 : m;
}
var useIsomorphicLayoutEffect$1 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? useLayoutEffect : useEffect;
function useForceUpdate() {
	let m = useState(0)[1];
	return useCallback(() => {
		m((m) => m + 1);
	}, [m]);
}
function useDeepSignal(m, x) {
	let S = useRef(/* @__PURE__ */ new Map()), C = useForceUpdate();
	return useIsomorphicLayoutEffect$1(() => {
		if (!m) {
			S.current.clear();
			return;
		}
		return E(() => {
			let T = !1, D = !1;
			for (let C of S.current) {
				let [O] = C, k = n(() => C[1]), A = m[O];
				k !== A && (T = !0, S.current.set(O, A), D = x?.(O, k, A) ?? !1);
			}
			T && (D ? flushSync(C) : C());
		});
	}, [m]), useMemo(() => m && new Proxy(m, { get(m, x) {
		let C = m[x];
		return S.current.set(x, C), C;
	} }), [m]);
}
function useImmediateEffect(m, x) {
	m();
}
function useLatest(m) {
	let x = useRef(m);
	return useIsomorphicLayoutEffect$1(() => {
		x.current = m;
	}, [m]), x;
}
function useOnValueChange(m, x, S = useEffect, C = Object.is) {
	let T = useRef(m);
	S(() => {
		let S = T.current;
		C(m, S) || (T.current = m, x(m, S));
	}, [x, m]);
}
function useOnElementChange(m, x) {
	let S = useRef(currentValue(m));
	useIsomorphicLayoutEffect$1(() => {
		let C = currentValue(m);
		C !== S.current && (S.current = C, x(C));
	});
}
var __defProp$2 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (m, x, S) => x in m ? __defProp$2(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$3 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$2.call(x, S) && __defNormalProp$2(m, S, x[S]);
	if (__getOwnPropSymbols$2) for (var S of __getOwnPropSymbols$2(x)) __propIsEnum$2.call(x, S) && __defNormalProp$2(m, S, x[S]);
	return m;
}, __spreadProps$3 = (m, x) => __defProps$2(m, __getOwnPropDescs$2(x)), __objRest$2 = (m, x) => {
	var S = {};
	for (var C in m) __hasOwnProp$2.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && __getOwnPropSymbols$2) for (var C of __getOwnPropSymbols$2(m)) x.indexOf(C) < 0 && __propIsEnum$2.call(m, C) && (S[C] = m[C]);
	return S;
}, DragDropContext$1 = createContext(new DragDropManager()), Renderer = memo(forwardRef(({ children: m }, x) => {
	let [S, C] = useState(0), T = useRef(null), D = useRef(null), O = useMemo(() => ({
		renderer: { get rendering() {
			return T.current ?? Promise.resolve();
		} },
		trackRendering(m) {
			T.current ||= new Promise((m) => {
				D.current = m;
			}), startTransition(() => {
				m(), C((m) => m + 1);
			});
		}
	}), []);
	return useIsomorphicLayoutEffect$1(() => {
		var m;
		(m = D.current) == null || m.call(D), T.current = null;
	}, [m, S]), useImperativeHandle(x, () => O), null;
})), options = [void 0, deepEqual];
function DragDropProvider(m) {
	var x = m, { children: S, onCollision: C, onBeforeDragStart: T, onDragStart: D, onDragMove: O, onDragOver: k, onDragEnd: A } = x, M = __objRest$2(x, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let N = useRef(null), [F, I] = useState(M.manager ?? null), { plugins: L, modifiers: R, sensors: z } = M, H = useLatest(T), U = useLatest(D), W = useLatest(k), G = useLatest(O), K = useLatest(A), q = useLatest(C);
	return useEffect(() => {
		if (!N.current) throw Error("Renderer not found");
		let { renderer: m, trackRendering: x } = N.current, S = M.manager ?? new DragDropManager(M);
		return S.renderer = m, S.monitor.addEventListener("beforedragstart", (m) => {
			let C = H.current;
			C && x(() => C(m, S));
		}), S.monitor.addEventListener("dragstart", (m) => U.current?.call(U, m, S)), S.monitor.addEventListener("dragover", (m) => {
			let C = W.current;
			C && x(() => C(m, S));
		}), S.monitor.addEventListener("dragmove", (m) => {
			let C = G.current;
			C && x(() => C(m, S));
		}), S.monitor.addEventListener("dragend", (m) => {
			let C = K.current;
			C && x(() => C(m, S));
		}), S.monitor.addEventListener("collision", (m) => q.current?.call(q, m, S)), startTransition(() => I(S)), S.destroy;
	}, [M.manager]), useOnValueChange(L, () => F && (F.plugins = L ?? defaultPreset.plugins), ...options), useOnValueChange(z, () => F && (F.sensors = z ?? defaultPreset.sensors), ...options), useOnValueChange(R, () => F && (F.modifiers = R ?? defaultPreset.modifiers), ...options), /* @__PURE__ */ jsxs(DragDropContext$1.Provider, {
		value: F,
		children: [/* @__PURE__ */ jsx(Renderer, {
			ref: N,
			children: S
		}), S]
	});
}
function useDragDropManager() {
	return useContext(DragDropContext$1);
}
function useInstance(m) {
	let x = useDragDropManager() ?? void 0, [S] = useState(() => m(x));
	return S.manager !== x && (S.manager = x), useIsomorphicLayoutEffect$1(S.register, [x, S]), S;
}
function useDraggable(m) {
	let { disabled: x, data: S, element: C, handle: T, id: D, modifiers: O, sensors: k } = m, A = useInstance((x) => new Draggable(__spreadProps$3(__spreadValues$3({}, m), {
		register: !1,
		handle: currentValue(T),
		element: currentValue(C)
	}), x)), j = useDeepSignal(A, shouldUpdateSynchronously$1);
	return useOnValueChange(D, () => A.id = D), useOnElementChange(T, (m) => A.handle = m), useOnElementChange(C, (m) => A.element = m), useOnValueChange(S, () => S && (A.data = S)), useOnValueChange(x, () => A.disabled = x === !0), useOnValueChange(k, () => A.sensors = k), useOnValueChange(O, () => A.modifiers = O, void 0, deepEqual), useOnValueChange(m.feedback, () => A.feedback = m.feedback ?? "default"), useOnValueChange(m.alignment, () => A.alignment = m.alignment), {
		draggable: j,
		get isDragging() {
			return j.isDragging;
		},
		get isDropping() {
			return j.isDropping;
		},
		get isDragSource() {
			return j.isDragSource;
		},
		handleRef: useCallback((m) => {
			A.handle = m ?? void 0;
		}, [A]),
		ref: useCallback((m) => {
			!m && A.element?.isConnected && !A.manager?.dragOperation.status.idle || (A.element = m ?? void 0);
		}, [A])
	};
}
function shouldUpdateSynchronously$1(m, x, S) {
	return !!(m === "isDragSource" && !S && x);
}
var __create$1 = Object.create, __defProp2$1 = Object.defineProperty, __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor, __knownSymbol$1 = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError$1 = (m) => {
	throw TypeError(m);
}, __defNormalProp2$1 = (m, x, S) => x in m ? __defProp2$1(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __decoratorStart$1 = (m) => [
	,
	,
	,
	__create$1(m?.[__knownSymbol$1("metadata")] ?? null)
], __decoratorStrings$1 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn$1 = (m) => m !== void 0 && typeof m != "function" ? __typeError$1("Function expected") : m, __decoratorContext$1 = (m, x, S, C, T) => ({
	kind: __decoratorStrings$1[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError$1("Already initialized") : T.push(__expectFn$1(m || null))
}), __decoratorMetadata$1 = (m, x) => __defNormalProp2$1(x, __knownSymbol$1("metadata"), m[3]), __runInitializers$1 = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) D[T].call(S);
	return C;
}, __decorateElement$1 = (m, x, S, C, T, D) => {
	for (var O, k, A, j, M = x & 7, N = !1, P = !1, F = 2, I = __decoratorStrings$1[M + 5], L = m[F] || (m[F] = []), R = (T = T.prototype, __getOwnPropDesc$1(T, S)), z = C.length - 1; z >= 0; z--) A = __decoratorContext$1(M, S, k = {}, m[3], L), A.static = N, A.private = P, j = A.access = { has: (m) => S in m }, j.get = (m) => m[S], O = (0, C[z])(R[I], A), k._ = 1, __expectFn$1(O) && (R[I] = O);
	return R && __defProp2$1(T, S, R), T;
}, __accessCheck$1 = (m, x, S) => x.has(m) || __typeError$1("Cannot " + S), __privateGet$1 = (m, x, S) => (__accessCheck$1(m, x, "read from private field"), x.get(m)), __privateAdd$1 = (m, x, S) => x.has(m) ? __typeError$1("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet$1 = (m, x, S, C) => (__accessCheck$1(m, x, "write to private field"), x.set(m, S), S), Point$1 = class m {
	constructor(m, x) {
		this.x = m, this.y = x;
	}
	static delta(x, S) {
		return new m(x.x - S.x, x.y - S.y);
	}
	static distance(m, x) {
		return Math.hypot(m.x - x.x, m.y - x.y);
	}
	static equals(m, x) {
		return m.x === x.x && m.y === x.y;
	}
	static from({ x, y: S }) {
		return new m(x, S);
	}
}, _direction_dec, _delta_dec, _a, _timestamp, _init$1, Position = class extends (_a = ValueHistory, _delta_dec = [derived], _direction_dec = [derived], _a) {
	constructor(m) {
		let x = Point$1.from(m);
		super(x, (m, x) => Point$1.equals(m, x)), __runInitializers$1(_init$1, 5, this), __privateAdd$1(this, _timestamp, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Point$1.delta(this.current, this.initial);
	}
	get direction() {
		let { current: m, previous: x } = this;
		if (!x) return null;
		let S = {
			x: m.x - x.x,
			y: m.y - x.y
		};
		return !S.x && !S.y ? null : Math.abs(S.x) > Math.abs(S.y) ? S.x > 0 ? "right" : "left" : S.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(m) {
		let { current: x } = this, S = Point$1.from(m), C = {
			x: S.x - x.x,
			y: S.y - x.y
		}, T = Date.now(), D = T - __privateGet$1(this, _timestamp), O = (m) => Math.round(m / D * 100);
		r(() => {
			__privateSet$1(this, _timestamp, T), this.velocity = {
				x: O(C.x),
				y: O(C.y)
			}, super.current = S;
		});
	}
	reset(m = this.defaultValue) {
		super.reset(Point$1.from(m)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
_init$1 = __decoratorStart$1(_a), _timestamp = /* @__PURE__ */ new WeakMap(), __decorateElement$1(_init$1, 2, "delta", _delta_dec, Position), __decorateElement$1(_init$1, 2, "direction", _direction_dec, Position), __decoratorMetadata$1(_init$1, Position);
var Axis = /* @__PURE__ */ ((m) => (m.Horizontal = "x", m.Vertical = "y", m))(Axis || {});
Object.values(Axis);
var pointerIntersection$1 = ({ dragOperation: m, droppable: x }) => {
	let S = m.position.current;
	if (!S) return null;
	let { id: C } = x;
	return x.shape && x.shape.containsPoint(S) ? {
		id: C,
		value: 1 / Point$1.distance(x.shape.center, S),
		type: CollisionType.PointerIntersection,
		priority: CollisionPriority.High
	} : null;
}, shapeIntersection = ({ dragOperation: m, droppable: x }) => {
	let { shape: S } = m;
	if (!x.shape || !S?.current) return null;
	let C = S.current.intersectionArea(x.shape);
	if (C) {
		let { position: T } = m, D = Point$1.distance(x.shape.center, T.current), O = C / (S.current.area + x.shape.area - C) / D;
		return {
			id: x.id,
			value: O,
			type: CollisionType.ShapeIntersection,
			priority: CollisionPriority.Normal
		};
	}
	return null;
}, defaultCollisionDetection$1 = (m) => pointerIntersection$1(m) ?? shapeIntersection(m);
function useDroppable(m) {
	let { collisionDetector: x, data: S, disabled: C, element: T, id: D, accept: O, type: k } = m, A = useInstance((x) => new Droppable(__spreadProps$3(__spreadValues$3({}, m), {
		register: !1,
		element: currentValue(T)
	}), x)), j = useDeepSignal(A);
	return useOnValueChange(D, () => A.id = D), useOnElementChange(T, (m) => A.element = m), useOnValueChange(O, () => A.accept = O, void 0, deepEqual), useOnValueChange(x, () => A.collisionDetector = x ?? defaultCollisionDetection$1), useOnValueChange(S, () => S && (A.data = S)), useOnValueChange(C, () => A.disabled = C === !0), useOnValueChange(k, () => A.type = k), {
		droppable: j,
		get isDropTarget() {
			return j.isDropTarget;
		},
		ref: useCallback((m) => {
			!m && A.element?.isConnected && !A.manager?.dragOperation.status.idle || (A.element = m ?? void 0);
		}, [A])
	};
}
var __create = Object.create, __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __knownSymbol = (m, x) => (x = Symbol[m]) ? x : Symbol.for("Symbol." + m), __typeError = (m) => {
	throw TypeError(m);
}, __defNormalProp$1 = (m, x, S) => x in m ? __defProp$1(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$2 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp$1.call(x, S) && __defNormalProp$1(m, S, x[S]);
	if (__getOwnPropSymbols$1) for (var S of __getOwnPropSymbols$1(x)) __propIsEnum$1.call(x, S) && __defNormalProp$1(m, S, x[S]);
	return m;
}, __spreadProps$2 = (m, x) => __defProps$1(m, __getOwnPropDescs$1(x)), __objRest$1 = (m, x) => {
	var S = {};
	for (var C in m) __hasOwnProp$1.call(m, C) && x.indexOf(C) < 0 && (S[C] = m[C]);
	if (m != null && __getOwnPropSymbols$1) for (var C of __getOwnPropSymbols$1(m)) x.indexOf(C) < 0 && __propIsEnum$1.call(m, C) && (S[C] = m[C]);
	return S;
}, __decoratorStart = (m) => [
	,
	,
	,
	__create(null)
], __decoratorStrings = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], __expectFn = (m) => m !== void 0 && typeof m != "function" ? __typeError("Function expected") : m, __decoratorContext = (m, x, S, C, T) => ({
	kind: __decoratorStrings[m],
	name: x,
	metadata: C,
	addInitializer: (m) => S._ ? __typeError("Already initialized") : T.push(__expectFn(m || null))
}), __decoratorMetadata = (m, x) => __defNormalProp$1(x, __knownSymbol("metadata"), m[3]), __runInitializers = (m, x, S, C) => {
	for (var T = 0, D = m[x >> 1], O = D && D.length; T < O; T++) x & 1 ? D[T].call(S) : C = D[T].call(S, C);
	return C;
}, __decorateElement = (m, x, S, C, T, D) => {
	for (var O, k, A, j, M, N = x & 7, P = !1, F = !1, I = m.length + 1, L = __decoratorStrings[N + 5], R = m[I - 1] = [], z = m[I] || (m[I] = []), B = (T = T.prototype, __getOwnPropDesc({
		get [S]() {
			return __privateGet(this, D);
		},
		set [S](m) {
			return __privateSet(this, D, m);
		}
	}, S)), V = C.length - 1; V >= 0; V--) j = __decoratorContext(N, S, A = {}, m[3], z), j.static = P, j.private = F, M = j.access = { has: (m) => S in m }, M.get = (m) => m[S], M.set = (m, x) => m[S] = x, k = (0, C[V])({
		get: B.get,
		set: B.set
	}, j), A._ = 1, k === void 0 ? __expectFn(k) && (B[L] = k) : typeof k != "object" || !k ? __typeError("Object expected") : (__expectFn(O = k.get) && (B.get = O), __expectFn(O = k.set) && (B.set = O), __expectFn(O = k.init) && R.unshift(O));
	return B && __defProp$1(T, S, B), T;
}, __accessCheck = (m, x, S) => x.has(m) || __typeError("Cannot " + S), __privateGet = (m, x, S) => (__accessCheck(m, x, "read from private field"), x.get(m)), __privateAdd = (m, x, S) => x.has(m) ? __typeError("Cannot add the same private member more than once") : x instanceof WeakSet ? x.add(m) : x.set(m, S), __privateSet = (m, x, S, C) => (__accessCheck(m, x, "write to private field"), x.set(m, S), S);
function isSortable(m) {
	return m instanceof SortableDroppable || m instanceof SortableDraggable;
}
var TOLERANCE = 10, SortableKeyboardPlugin = class extends Plugin {
	constructor(m) {
		super(m);
		let x = E(() => {
			let { dragOperation: x } = m;
			if (isKeyboardEvent(x.activatorEvent) && isSortable(x.source) && x.status.initialized) {
				let x = m.registry.plugins.get(Scroller);
				if (x) return x.disable(), () => x.enable();
			}
		}), S = m.monitor.addEventListener("dragmove", (m, x) => {
			queueMicrotask(() => {
				if (this.disabled || m.defaultPrevented || !m.nativeEvent) return;
				let { dragOperation: S } = x;
				if (!isKeyboardEvent(m.nativeEvent) || !isSortable(S.source) || !S.shape) return;
				let { actions: C, collisionObserver: T, registry: D } = x, { by: O } = m;
				if (!O) return;
				let k = getDirection$1(O), { source: A, target: j } = S, { center: M } = S.shape.current, N = [], P = [];
				r(() => {
					for (let m of D.droppables) {
						let { id: x } = m;
						if (!m.accepts(A) || x === j?.id && isSortable(m) || !m.element) continue;
						let S = m.shape, C = new DOMRectangle(m.element, { getBoundingClientRect: (m) => getVisibleBoundingRectangle(m, void 0, .2) });
						!C.height || !C.width || (k == "down" && M.y + TOLERANCE < C.center.y || k == "up" && M.y - TOLERANCE > C.center.y || k == "left" && M.x - TOLERANCE > C.center.x || k == "right" && M.x + TOLERANCE < C.center.x) && (N.push(m), m.shape = C, P.push(() => m.shape = S));
					}
				}), m.preventDefault(), T.disable();
				let F = T.computeCollisions(N, closestCorners$1);
				r(() => P.forEach((m) => m()));
				let [I] = F;
				if (!I) return;
				let { id: L } = I, { index: R, group: z } = A.sortable;
				C.setDropTarget(L).then(() => {
					let { source: m, target: x, shape: D } = S;
					if (!m || !isSortable(m) || !D) return;
					let { index: O, group: k, target: A } = m.sortable, j = R !== O || z !== k, M = j ? A : x?.element;
					if (!M) return;
					scrollIntoViewIfNeeded(M);
					let N = new DOMRectangle(M);
					if (!N) return;
					let P = Rectangle.delta(N, Rectangle.from(D.current.boundingRectangle), m.alignment);
					C.move({ by: P }), j ? C.setDropTarget(m.id).then(() => T.enable()) : T.enable();
				});
			});
		});
		this.destroy = () => {
			S(), x();
		};
	}
};
function getDirection$1(m) {
	let { x, y: S } = m;
	if (x > 0) return "right";
	if (x < 0) return "left";
	if (S > 0) return "down";
	if (S < 0) return "up";
}
var __defProp2 = Object.defineProperty, __defProps2 = Object.defineProperties, __getOwnPropDescs2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols2 = Object.getOwnPropertySymbols, __hasOwnProp2 = Object.prototype.hasOwnProperty, __propIsEnum2 = Object.prototype.propertyIsEnumerable, __defNormalProp2 = (m, x, S) => x in m ? __defProp2(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues2 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp2.call(x, S) && __defNormalProp2(m, S, x[S]);
	if (__getOwnPropSymbols2) for (var S of __getOwnPropSymbols2(x)) __propIsEnum2.call(x, S) && __defNormalProp2(m, S, x[S]);
	return m;
}, __spreadProps2 = (m, x) => __defProps2(m, __getOwnPropDescs2(x));
function arrayMove(m, x, S) {
	if (x === S) return m;
	let C = m.slice();
	return C.splice(S, 0, C.splice(x, 1)[0]), C;
}
function mutate(m, x, S) {
	let { source: C, target: T, canceled: D } = x.operation;
	if (!C || !T || D) return "preventDefault" in x && x.preventDefault(), m;
	let O = (m, x) => m === x || typeof m == "object" && "id" in m && m.id === x;
	if (Array.isArray(m)) {
		let x = m.findIndex((m) => O(m, C.id)), k = m.findIndex((m) => O(m, T.id));
		if (x === -1 || k === -1) return m;
		if (!D && "index" in C && typeof C.index == "number") {
			let T = C.index;
			if (T !== x) return S(m, x, T);
		}
		return S(m, x, k);
	}
	let k = Object.entries(m), A = -1, j, M = -1, N;
	for (let [m, x] of k) if (A === -1 && (A = x.findIndex((m) => O(m, C.id)), A !== -1 && (j = m)), M === -1 && (M = x.findIndex((m) => O(m, T.id)), M !== -1 && (N = m)), A !== -1 && M !== -1) break;
	if (!C.manager) return m;
	let { dragOperation: P } = C.manager, F = P.shape?.current.center ?? P.position.current;
	if (N == null && T.id in m) {
		let x = T.shape && F.y > T.shape.center.y ? m[T.id].length : 0;
		N = T.id, M = x;
	}
	if (j == null || N == null || j === N && A === M) return "preventDefault" in x && x.preventDefault(), m;
	if (j === N) return __spreadProps2(__spreadValues2({}, m), { [j]: S(m[j], A, M) });
	let I = T.shape && Math.round(F.y) > Math.round(T.shape.center.y) ? 1 : 0, L = m[j][A];
	return __spreadProps2(__spreadValues2({}, m), {
		[j]: [...m[j].slice(0, A), ...m[j].slice(A + 1)],
		[N]: [
			...m[N].slice(0, M + I),
			L,
			...m[N].slice(M + I)
		]
	});
}
function move(m, x) {
	return mutate(m, x, arrayMove);
}
var defaultGroup = "__default__", OptimisticSortingPlugin = class extends Plugin {
	constructor(m) {
		super(m);
		let x = () => {
			let x = /* @__PURE__ */ new Map();
			for (let S of m.registry.droppables) if (S instanceof SortableDroppable) {
				let { sortable: m } = S, { group: C } = m, T = x.get(C);
				T || (T = /* @__PURE__ */ new Set(), x.set(C, T)), T.add(m);
			}
			for (let [m, S] of x) x.set(m, new Set(sort(S)));
			return x;
		}, S = [m.monitor.addEventListener("dragover", (m, S) => {
			if (this.disabled) return;
			let { dragOperation: C } = S, { source: T, target: D } = C;
			if (!isSortable(T) || !isSortable(D) || T.sortable === D.sortable) return;
			let O = x(), k = T.sortable.group === D.sortable.group, A = O.get(T.sortable.group), j = k ? A : O.get(D.sortable.group);
			!A || !j || queueMicrotask(() => {
				m.defaultPrevented || S.renderer.rendering.then(() => {
					let C = x();
					for (let [m, x] of O.entries()) {
						let S = Array.from(x).entries();
						for (let [x, T] of S) if (T.index !== x || T.group !== m || !C.get(m)?.has(T)) return;
					}
					let M = T.sortable.element, N = D.sortable.element;
					if (!N || !M || !k && D.id === T.sortable.group) return;
					let P = sort(A), F = k ? P : sort(j), I = T.sortable.group ?? defaultGroup, L = D.sortable.group ?? defaultGroup, R = {
						[I]: P,
						[L]: F
					}, z = move(R, m);
					if (R === z) return;
					let B = z[L].indexOf(T.sortable), V = z[L].indexOf(D.sortable);
					S.collisionObserver.disable(), reorder$1(M, B, N, V), r(() => {
						for (let [m, x] of z[I].entries()) x.index = m;
						if (!k) for (let [m, x] of z[L].entries()) x.group = D.sortable.group, x.index = m;
					}), S.actions.setDropTarget(T.id).then(() => S.collisionObserver.enable());
				});
			});
		}), m.monitor.addEventListener("dragend", (m, S) => {
			if (!m.canceled) return;
			let { dragOperation: C } = S, { source: T } = C;
			isSortable(T) && (T.sortable.initialIndex === T.sortable.index && T.sortable.initialGroup === T.sortable.group || queueMicrotask(() => {
				let m = x(), C = m.get(T.sortable.initialGroup);
				C && S.renderer.rendering.then(() => {
					for (let [x, S] of m.entries()) {
						let m = Array.from(S).entries();
						for (let [S, C] of m) if (C.index !== S || C.group !== x) return;
					}
					let x = sort(C), S = T.sortable.element, D = x[T.sortable.initialIndex], O = D?.element;
					!D || !O || !S || (reorder$1(S, D.index, O, T.index), r(() => {
						for (let [x, S] of m.entries()) {
							let m = Array.from(S).values();
							for (let x of m) x.index = x.initialIndex, x.group = x.initialGroup;
						}
					}));
				});
			}));
		})];
		this.destroy = () => {
			for (let m of S) m();
		};
	}
};
function reorder$1(m, x, S, C) {
	let T = C < x ? "afterend" : "beforebegin";
	S.insertAdjacentElement(T, m);
}
function sortByIndex(m, x) {
	return m.index - x.index;
}
function sort(m) {
	return Array.from(m).sort(sortByIndex);
}
var defaultPlugins = [SortableKeyboardPlugin, OptimisticSortingPlugin], defaultSortableTransition = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, store = new WeakStore(), _group_dec, _index_dec = [reactive], _init, _index, _previousGroup, _previousIndex, _group, _element;
_group_dec = [reactive];
var Sortable2 = class {
	constructor(m, x) {
		__privateAdd(this, _index, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this), __privateAdd(this, _previousGroup), __privateAdd(this, _previousIndex), __privateAdd(this, _group, __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this), __privateAdd(this, _element), this.register = () => (r(() => {
			var m, x;
			(m = this.manager) == null || m.registry.register(this.droppable), (x = this.manager) == null || x.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			r(() => {
				var m, x;
				(m = this.manager) == null || m.registry.unregister(this.droppable), (x = this.manager) == null || x.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			r(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var S = m, { effects: C = () => [], group: T, index: D, sensors: O, type: k, transition: A = defaultSortableTransition, plugins: j = defaultPlugins } = S, M = __objRest$1(S, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new SortableDroppable(M, x, this), this.draggable = new SortableDraggable(__spreadProps$2(__spreadValues$2({}, M), {
			effects: () => [
				() => {
					let m = this.manager?.dragOperation.status;
					m?.initializing && this.id === this.manager?.dragOperation.source?.id && store.clear(this.manager), m?.dragging && store.set(this.manager, this.id, n(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: m, group: x, manager: S } = this, C = __privateGet(this, _previousIndex), T = __privateGet(this, _previousGroup);
					(m !== C || x !== T) && (__privateSet(this, _previousIndex, m), __privateSet(this, _previousGroup, x), this.animate());
				},
				() => {
					let { target: m } = this, { feedback: x, isDragSource: S } = this.draggable;
					x == "move" && S && (this.droppable.disabled = !m);
				},
				() => {
					let { manager: m } = this;
					for (let x of j) m?.registry.register(x);
				},
				...C()
			],
			type: k,
			sensors: O
		}), x, this), __privateSet(this, _element, M.element), this.manager = x, this.index = D, __privateSet(this, _previousIndex, D), this.group = T, __privateSet(this, _previousGroup, T), this.type = k, this.transition = A;
	}
	get initialIndex() {
		return store.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return store.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		n(() => {
			let { manager: m, transition: x } = this, { shape: S } = this.droppable;
			if (!m) return;
			let { idle: C } = m.dragOperation.status;
			!S || !x || C && !x.idle || m.renderer.rendering.then(() => {
				let { element: C } = this;
				if (!C) return;
				let T = this.refreshShape();
				if (!T) return;
				let D = {
					x: S.boundingRectangle.left - T.boundingRectangle.left,
					y: S.boundingRectangle.top - T.boundingRectangle.top
				}, { translate: O } = getComputedStyles(C), k = computeTranslate(C, O, !1), A = computeTranslate(C, O);
				(D.x || D.y) && animateTransform({
					element: C,
					keyframes: { translate: [`${k.x + D.x}px ${k.y + D.y}px ${k.z}`, `${A.x}px ${A.y}px ${A.z}`] },
					options: x
				}).then(() => {
					m.dragOperation.status.dragging || (this.droppable.shape = void 0);
				});
			});
		});
	}
	get manager() {
		return this.draggable.manager;
	}
	set manager(m) {
		r(() => {
			this.draggable.manager = m, this.droppable.manager = m;
		});
	}
	set element(m) {
		r(() => {
			let x = __privateGet(this, _element), S = this.droppable.element, C = this.draggable.element;
			(!S || S === x) && (this.droppable.element = m), (!C || C === x) && (this.draggable.element = m), __privateSet(this, _element, m);
		});
	}
	get element() {
		let m = __privateGet(this, _element);
		if (m) return ProxiedElements.get(m) ?? m ?? this.droppable.element;
	}
	set target(m) {
		this.droppable.element = m;
	}
	get target() {
		return this.droppable.element;
	}
	set source(m) {
		this.draggable.element = m;
	}
	get source() {
		return this.draggable.element;
	}
	get disabled() {
		return this.draggable.disabled && this.droppable.disabled;
	}
	set feedback(m) {
		this.draggable.feedback = m;
	}
	set disabled(m) {
		r(() => {
			this.droppable.disabled = m, this.draggable.disabled = m;
		});
	}
	set data(m) {
		r(() => {
			this.droppable.data = m, this.draggable.data = m;
		});
	}
	set handle(m) {
		this.draggable.handle = m;
	}
	set id(m) {
		r(() => {
			this.droppable.id = m, this.draggable.id = m;
		});
	}
	get id() {
		return this.droppable.id;
	}
	set sensors(m) {
		this.draggable.sensors = m;
	}
	set modifiers(m) {
		this.draggable.modifiers = m;
	}
	set collisionPriority(m) {
		this.droppable.collisionPriority = m;
	}
	set collisionDetector(m) {
		this.droppable.collisionDetector = m ?? defaultCollisionDetection;
	}
	set alignment(m) {
		this.draggable.alignment = m;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(m) {
		r(() => {
			this.droppable.type = m, this.draggable.type = m;
		});
	}
	get type() {
		return this.draggable.type;
	}
	set accept(m) {
		this.droppable.accept = m;
	}
	get accept() {
		return this.droppable.accept;
	}
	get isDropTarget() {
		return this.droppable.isDropTarget;
	}
	get isDragSource() {
		return this.draggable.isDragSource;
	}
	get isDragging() {
		return this.draggable.isDragging;
	}
	get isDropping() {
		return this.draggable.isDropping;
	}
	get status() {
		return this.draggable.status;
	}
	refreshShape() {
		return this.droppable.refreshShape();
	}
	accepts(m) {
		return this.droppable.accepts(m);
	}
};
_init = __decoratorStart(), _index = /* @__PURE__ */ new WeakMap(), _previousGroup = /* @__PURE__ */ new WeakMap(), _previousIndex = /* @__PURE__ */ new WeakMap(), _group = /* @__PURE__ */ new WeakMap(), _element = /* @__PURE__ */ new WeakMap(), __decorateElement(_init, 4, "index", _index_dec, Sortable2, _index), __decorateElement(_init, 4, "group", _group_dec, Sortable2, _group), __decoratorMetadata(_init, Sortable2);
var SortableDraggable = class extends Draggable {
	constructor(m, x, S) {
		super(m, x), this.sortable = S;
	}
	get index() {
		return this.sortable.index;
	}
}, SortableDroppable = class extends Droppable {
	constructor(m, x, S) {
		super(m, x), this.sortable = S;
	}
}, __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (m, x, S) => x in m ? __defProp(m, x, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: S
}) : m[x] = S, __spreadValues$1 = (m, x) => {
	for (var S in x ||= {}) __hasOwnProp.call(x, S) && __defNormalProp(m, S, x[S]);
	if (__getOwnPropSymbols) for (var S of __getOwnPropSymbols(x)) __propIsEnum.call(x, S) && __defNormalProp(m, S, x[S]);
	return m;
}, __spreadProps$1 = (m, x) => __defProps(m, __getOwnPropDescs(x));
function useSortable(m) {
	let { accept: x, collisionDetector: S, collisionPriority: C, id: T, data: D, element: O, handle: k, index: A, group: j, disabled: N, feedback: P, modifiers: F, sensors: I, target: L, type: R } = m, z = __spreadValues$1(__spreadValues$1({}, defaultSortableTransition), m.transition), B = useInstance((x) => new Sortable2(__spreadProps$1(__spreadValues$1({}, m), {
		transition: z,
		register: !1,
		handle: currentValue(k),
		element: currentValue(O),
		target: currentValue(L),
		feedback: P
	}), x)), V = useDeepSignal(B, shouldUpdateSynchronously);
	return useOnValueChange(T, () => B.id = T), useIsomorphicLayoutEffect$1(() => {
		r(() => {
			B.group = j, B.index = A;
		});
	}, [
		B,
		j,
		A
	]), useOnValueChange(R, () => B.type = R), useOnValueChange(x, () => B.accept = x, void 0, deepEqual), useOnValueChange(D, () => D && (B.data = D)), useOnValueChange(A, () => {
		B.manager?.dragOperation.status.idle && z?.idle && B.refreshShape();
	}, useImmediateEffect), useOnElementChange(k, (m) => B.handle = m), useOnElementChange(O, (m) => B.element = m), useOnElementChange(L, (m) => B.target = m), useOnValueChange(N, () => B.disabled = N === !0), useOnValueChange(I, () => B.sensors = I), useOnValueChange(S, () => B.collisionDetector = S), useOnValueChange(C, () => B.collisionPriority = C), useOnValueChange(P, () => B.feedback = P ?? "default"), useOnValueChange(z, () => B.transition = z, void 0, deepEqual), useOnValueChange(F, () => B.modifiers = F, void 0, deepEqual), useOnValueChange(m.alignment, () => B.alignment = m.alignment), {
		sortable: V,
		get isDragging() {
			return V.isDragging;
		},
		get isDropping() {
			return V.isDropping;
		},
		get isDragSource() {
			return V.isDragSource;
		},
		get isDropTarget() {
			return V.isDropTarget;
		},
		handleRef: useCallback((m) => {
			B.handle = m ?? void 0;
		}, [B]),
		ref: useCallback((m) => {
			!m && B.element?.isConnected && !B.manager?.dragOperation.status.idle || (B.element = m ?? void 0);
		}, [B]),
		sourceRef: useCallback((m) => {
			!m && B.source?.isConnected && !B.manager?.dragOperation.status.idle || (B.source = m ?? void 0);
		}, [B]),
		targetRef: useCallback((m) => {
			!m && B.target?.isConnected && !B.manager?.dragOperation.status.idle || (B.target = m ?? void 0);
		}, [B])
	};
}
function shouldUpdateSynchronously(m, x, S) {
	return !!(m === "isDragSource" && !S && x);
}
var isIterable = (m) => Symbol.iterator in m, hasIterableEntries = (m) => "entries" in m, compareEntries = (m, x) => {
	let S = m instanceof Map ? m : new Map(m.entries()), C = x instanceof Map ? x : new Map(x.entries());
	if (S.size !== C.size) return !1;
	for (let [m, x] of S) if (!C.has(m) || !Object.is(x, C.get(m))) return !1;
	return !0;
}, compareIterables = (m, x) => {
	let S = m[Symbol.iterator](), C = x[Symbol.iterator](), T = S.next(), D = C.next();
	for (; !T.done && !D.done;) {
		if (!Object.is(T.value, D.value)) return !1;
		T = S.next(), D = C.next();
	}
	return !!T.done && !!D.done;
};
function shallow(m, x) {
	return Object.is(m, x) ? !0 : typeof m != "object" || !m || typeof x != "object" || !x || Object.getPrototypeOf(m) !== Object.getPrototypeOf(x) ? !1 : isIterable(m) && isIterable(x) ? hasIterableEntries(m) && hasIterableEntries(x) ? compareEntries(m, x) : compareIterables(m, x) : compareEntries({ entries: () => Object.entries(m) }, { entries: () => Object.entries(x) });
}
function useShallow(m) {
	let S = React2.useRef(void 0);
	return (x) => {
		let C = m(x);
		return shallow(S.current, C) ? S.current : S.current = C;
	};
}
function c(m, x, S) {
	var C = this, T = useRef(null), D = useRef(0), O = useRef(null), k = useRef([]), A = useRef(), j = useRef(), M = useRef(m), N = useRef(!0);
	useEffect(function() {
		M.current = m;
	}, [m]);
	var F = !x && x !== 0 && typeof window < "u";
	if (typeof m != "function") throw TypeError("Expected a function");
	x = +x || 0;
	var I = !!(S ||= {}).leading, L = !("trailing" in S) || !!S.trailing, R = "maxWait" in S, V = R ? Math.max(+S.maxWait || 0, x) : null;
	return useEffect(function() {
		return N.current = !0, function() {
			N.current = !1;
		};
	}, []), useMemo(function() {
		var m = function(m) {
			var x = k.current, S = A.current;
			return k.current = A.current = null, D.current = m, j.current = M.current.apply(S, x);
		}, S = function(m, x) {
			F && cancelAnimationFrame(O.current), O.current = F ? requestAnimationFrame(m) : setTimeout(m, x);
		}, P = function(m) {
			if (!N.current) return !1;
			var S = m - T.current;
			return !T.current || S >= x || S < 0 || R && m - D.current >= V;
		}, z = function(x) {
			return O.current = null, L && k.current ? m(x) : (k.current = A.current = null, j.current);
		}, B = function m() {
			var C = Date.now();
			if (P(C)) return z(C);
			if (N.current) {
				var O = x - (C - T.current);
				S(m, R ? Math.min(O, V - (C - D.current)) : O);
			}
		}, H = function() {
			var M = Date.now(), F = P(M);
			if (k.current = [].slice.call(arguments), A.current = C, T.current = M, F) {
				if (!O.current && N.current) return D.current = T.current, S(B, x), I ? m(T.current) : j.current;
				if (R) return S(B, x), m(T.current);
			}
			return O.current || S(B, x), j.current;
		};
		return H.cancel = function() {
			O.current && (F ? cancelAnimationFrame(O.current) : clearTimeout(O.current)), D.current = 0, k.current = T.current = A.current = O.current = null;
		}, H.isPending = function() {
			return !!O.current;
		}, H.flush = function() {
			return O.current ? z(Date.now()) : j.current;
		}, H;
	}, [
		I,
		R,
		x,
		V,
		L,
		F
	]);
}
var import_object_hash = /* @__PURE__ */ __toESM$1((/* @__PURE__ */ __commonJSMin(((m, x) => {
	(function(S) {
		var C;
		typeof m == "object" ? x.exports = S() : typeof define == "function" && define.amd ? define(S) : (typeof window < "u" ? C = window : typeof global < "u" ? C = global : typeof self < "u" && (C = self), C.objectHash = S());
	})(function() {
		return function m(x, S, C) {
			function T(O, k) {
				if (!S[O]) {
					if (!x[O]) {
						var A = typeof __require == "function" && __require;
						if (!k && A) return A(O, !0);
						if (D) return D(O, !0);
						throw Error("Cannot find module '" + O + "'");
					}
					k = S[O] = { exports: {} }, x[O][0].call(k.exports, function(m) {
						var S = x[O][1][m];
						return T(S || m);
					}, k, k.exports, m, x, S, C);
				}
				return S[O].exports;
			}
			for (var D = typeof __require == "function" && __require, O = 0; O < C.length; O++) T(C[O]);
			return T;
		}({
			1: [function(m, x, S) {
				(function(C, T, D, O, k, A, j, M, N) {
					var P = m("crypto");
					function F(m, x) {
						x = R(m, x);
						var S;
						return (S = x.algorithm === "passthrough" ? new V() : P.createHash(x.algorithm)).write === void 0 && (S.write = S.update, S.end = S.update), B(x, S).dispatch(m), S.update || S.end(""), S.digest ? S.digest(x.encoding === "buffer" ? void 0 : x.encoding) : (m = S.read(), x.encoding === "buffer" ? m : m.toString(x.encoding));
					}
					(S = x.exports = F).sha1 = function(m) {
						return F(m);
					}, S.keys = function(m) {
						return F(m, {
							excludeValues: !0,
							algorithm: "sha1",
							encoding: "hex"
						});
					}, S.MD5 = function(m) {
						return F(m, {
							algorithm: "md5",
							encoding: "hex"
						});
					}, S.keysMD5 = function(m) {
						return F(m, {
							algorithm: "md5",
							encoding: "hex",
							excludeValues: !0
						});
					};
					var I = P.getHashes ? P.getHashes().slice() : ["sha1", "md5"], L = (I.push("passthrough"), [
						"buffer",
						"hex",
						"binary",
						"base64"
					]);
					function R(m, x) {
						var S = {};
						if (S.algorithm = (x ||= {}).algorithm || "sha1", S.encoding = x.encoding || "hex", S.excludeValues = !!x.excludeValues, S.algorithm = S.algorithm.toLowerCase(), S.encoding = S.encoding.toLowerCase(), S.ignoreUnknown = !0 === x.ignoreUnknown, S.respectType = !1 !== x.respectType, S.respectFunctionNames = !1 !== x.respectFunctionNames, S.respectFunctionProperties = !1 !== x.respectFunctionProperties, S.unorderedArrays = !0 === x.unorderedArrays, S.unorderedSets = !1 !== x.unorderedSets, S.unorderedObjects = !1 !== x.unorderedObjects, S.replacer = x.replacer || void 0, S.excludeKeys = x.excludeKeys || void 0, m === void 0) throw Error("Object argument required.");
						for (var C = 0; C < I.length; ++C) I[C].toLowerCase() === S.algorithm.toLowerCase() && (S.algorithm = I[C]);
						if (I.indexOf(S.algorithm) === -1) throw Error("Algorithm \"" + S.algorithm + "\"  not supported. supported values: " + I.join(", "));
						if (L.indexOf(S.encoding) === -1 && S.algorithm !== "passthrough") throw Error("Encoding \"" + S.encoding + "\"  not supported. supported values: " + L.join(", "));
						return S;
					}
					function z(m) {
						if (typeof m == "function") return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(m)) != null;
					}
					function B(m, x, S) {
						S ||= [];
						function C(m) {
							return x.update ? x.update(m, "utf8") : x.write(m, "utf8");
						}
						return {
							dispatch: function(x) {
								return this["_" + ((x = m.replacer ? m.replacer(x) : x) === null ? "null" : typeof x)](x);
							},
							_object: function(x) {
								var T, O = Object.prototype.toString.call(x), k = /\[object (.*)\]/i.exec(O);
								if (k = (k = k ? k[1] : "unknown:[" + O + "]").toLowerCase(), 0 <= (O = S.indexOf(x))) return this.dispatch("[CIRCULAR:" + O + "]");
								if (S.push(x), D !== void 0 && D.isBuffer && D.isBuffer(x)) return C("buffer:"), C(x);
								if (k === "object" || k === "function" || k === "asyncfunction") return O = Object.keys(x), m.unorderedObjects && (O = O.sort()), !1 === m.respectType || z(x) || O.splice(0, 0, "prototype", "__proto__", "constructor"), m.excludeKeys && (O = O.filter(function(x) {
									return !m.excludeKeys(x);
								})), C("object:" + O.length + ":"), T = this, O.forEach(function(S) {
									T.dispatch(S), C(":"), m.excludeValues || T.dispatch(x[S]), C(",");
								});
								if (!this["_" + k]) {
									if (m.ignoreUnknown) return C("[" + k + "]");
									throw Error("Unknown object type \"" + k + "\"");
								}
								this["_" + k](x);
							},
							_array: function(x, T) {
								T = T === void 0 ? !1 !== m.unorderedArrays : T;
								var D = this;
								if (C("array:" + x.length + ":"), !T || x.length <= 1) return x.forEach(function(m) {
									return D.dispatch(m);
								});
								var O = [], T = x.map(function(x) {
									var C = new V(), T = S.slice();
									return B(m, C, T).dispatch(x), O = O.concat(T.slice(S.length)), C.read().toString();
								});
								return S = S.concat(O), T.sort(), this._array(T, !1);
							},
							_date: function(m) {
								return C("date:" + m.toJSON());
							},
							_symbol: function(m) {
								return C("symbol:" + m.toString());
							},
							_error: function(m) {
								return C("error:" + m.toString());
							},
							_boolean: function(m) {
								return C("bool:" + m.toString());
							},
							_string: function(m) {
								C("string:" + m.length + ":"), C(m.toString());
							},
							_function: function(x) {
								C("fn:"), z(x) ? this.dispatch("[native]") : this.dispatch(x.toString()), !1 !== m.respectFunctionNames && this.dispatch("function-name:" + String(x.name)), m.respectFunctionProperties && this._object(x);
							},
							_number: function(m) {
								return C("number:" + m.toString());
							},
							_xml: function(m) {
								return C("xml:" + m.toString());
							},
							_null: function() {
								return C("Null");
							},
							_undefined: function() {
								return C("Undefined");
							},
							_regexp: function(m) {
								return C("regex:" + m.toString());
							},
							_uint8array: function(m) {
								return C("uint8array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_uint8clampedarray: function(m) {
								return C("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_int8array: function(m) {
								return C("int8array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_uint16array: function(m) {
								return C("uint16array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_int16array: function(m) {
								return C("int16array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_uint32array: function(m) {
								return C("uint32array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_int32array: function(m) {
								return C("int32array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_float32array: function(m) {
								return C("float32array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_float64array: function(m) {
								return C("float64array:"), this.dispatch(Array.prototype.slice.call(m));
							},
							_arraybuffer: function(m) {
								return C("arraybuffer:"), this.dispatch(new Uint8Array(m));
							},
							_url: function(m) {
								return C("url:" + m.toString());
							},
							_map: function(x) {
								return C("map:"), x = Array.from(x), this._array(x, !1 !== m.unorderedSets);
							},
							_set: function(x) {
								return C("set:"), x = Array.from(x), this._array(x, !1 !== m.unorderedSets);
							},
							_file: function(m) {
								return C("file:"), this.dispatch([
									m.name,
									m.size,
									m.type,
									m.lastModfied
								]);
							},
							_blob: function() {
								if (m.ignoreUnknown) return C("[blob]");
								throw Error("Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse \"options.replacer\" or \"options.ignoreUnknown\"\n");
							},
							_domwindow: function() {
								return C("domwindow");
							},
							_bigint: function(m) {
								return C("bigint:" + m.toString());
							},
							_process: function() {
								return C("process");
							},
							_timer: function() {
								return C("timer");
							},
							_pipe: function() {
								return C("pipe");
							},
							_tcp: function() {
								return C("tcp");
							},
							_udp: function() {
								return C("udp");
							},
							_tty: function() {
								return C("tty");
							},
							_statwatcher: function() {
								return C("statwatcher");
							},
							_securecontext: function() {
								return C("securecontext");
							},
							_connection: function() {
								return C("connection");
							},
							_zlib: function() {
								return C("zlib");
							},
							_context: function() {
								return C("context");
							},
							_nodescript: function() {
								return C("nodescript");
							},
							_httpparser: function() {
								return C("httpparser");
							},
							_dataview: function() {
								return C("dataview");
							},
							_signal: function() {
								return C("signal");
							},
							_fsevent: function() {
								return C("fsevent");
							},
							_tlswrap: function() {
								return C("tlswrap");
							}
						};
					}
					function V() {
						return {
							buf: "",
							write: function(m) {
								this.buf += m;
							},
							end: function(m) {
								this.buf += m;
							},
							read: function() {
								return this.buf;
							}
						};
					}
					S.writeToStream = function(m, x, S) {
						return S === void 0 && (S = x, x = {}), B(x = R(m, x), S).dispatch(m);
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
			}, {
				buffer: 3,
				crypto: 5,
				lYpoI2: 11
			}],
			2: [function(m, x, S) {
				(function(m, x, C, T, D, O, k, A, j) {
					(function(m) {
						var x = typeof Uint8Array < "u" ? Uint8Array : Array, S = 43, C = 47, T = 48, D = 97, O = 65, k = 45, A = 95;
						function j(m) {
							return m = m.charCodeAt(0), m === S || m === k ? 62 : m === C || m === A ? 63 : m < T ? -1 : m < T + 10 ? m - T + 26 + 26 : m < O + 26 ? m - O : m < D + 26 ? m - D + 26 : void 0;
						}
						m.toByteArray = function(m) {
							var S, C;
							if (0 < m.length % 4) throw Error("Invalid string. Length must be a multiple of 4");
							var T = m.length, T = m.charAt(T - 2) === "=" ? 2 : m.charAt(T - 1) === "=" ? 1 : 0, D = new x(3 * m.length / 4 - T), O = 0 < T ? m.length - 4 : m.length, k = 0;
							function A(m) {
								D[k++] = m;
							}
							for (S = 0; S < O; S += 4) A((16711680 & (C = j(m.charAt(S)) << 18 | j(m.charAt(S + 1)) << 12 | j(m.charAt(S + 2)) << 6 | j(m.charAt(S + 3)))) >> 16), A((65280 & C) >> 8), A(255 & C);
							return T == 2 ? A(255 & (C = j(m.charAt(S)) << 2 | j(m.charAt(S + 1)) >> 4)) : T == 1 && (A((C = j(m.charAt(S)) << 10 | j(m.charAt(S + 1)) << 4 | j(m.charAt(S + 2)) >> 2) >> 8 & 255), A(255 & C)), D;
						}, m.fromByteArray = function(m) {
							var x, S, C, T, D = m.length % 3, O = "";
							function k(m) {
								return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(m);
							}
							for (x = 0, C = m.length - D; x < C; x += 3) S = (m[x] << 16) + (m[x + 1] << 8) + m[x + 2], O += k((T = S) >> 18 & 63) + k(T >> 12 & 63) + k(T >> 6 & 63) + k(63 & T);
							switch (D) {
								case 1:
									O = (O += k((S = m[m.length - 1]) >> 2)) + k(S << 4 & 63) + "==";
									break;
								case 2: O = (O = (O += k((S = (m[m.length - 2] << 8) + m[m.length - 1]) >> 10)) + k(S >> 4 & 63)) + k(S << 2 & 63) + "=";
							}
							return O;
						};
					})(S === void 0 ? this.base64js = {} : S);
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
			}, {
				buffer: 3,
				lYpoI2: 11
			}],
			3: [function(m, x, S) {
				(function(x, C, T, D, O, k, A, j, M) {
					var N = m("base64-js"), P = m("ieee754");
					function T(m, x, S) {
						if (!(this instanceof T)) return new T(m, x, S);
						var C, D, O, k, A = typeof m;
						if (x === "base64" && A == "string") for (m = (k = m).trim ? k.trim() : k.replace(/^\s+|\s+$/g, ""); m.length % 4 != 0;) m += "=";
						if (A == "number") C = X(m);
						else if (A == "string") C = T.byteLength(m, x);
						else {
							if (A != "object") throw Error("First argument needs to be a number, array or string.");
							C = X(m.length);
						}
						if (T._useTypedArrays ? D = T._augment(new Uint8Array(C)) : ((D = this).length = C, D._isBuffer = !0), T._useTypedArrays && typeof m.byteLength == "number") D._set(m);
						else if (Z(k = m) || T.isBuffer(k) || k && typeof k == "object" && typeof k.length == "number") for (O = 0; O < C; O++) T.isBuffer(m) ? D[O] = m.readUInt8(O) : D[O] = m[O];
						else if (A == "string") D.write(m, 0, x);
						else if (A == "number" && !T._useTypedArrays && !S) for (O = 0; O < C; O++) D[O] = 0;
						return D;
					}
					function F(m, x, S, C) {
						return T._charsWritten = jI(function(m) {
							for (var x = [], S = 0; S < m.length; S++) x.push(255 & m.charCodeAt(S));
							return x;
						}(x), m, S, C);
					}
					function I(m, x, S, C) {
						return T._charsWritten = jI(function(m) {
							for (var x, S, C = [], T = 0; T < m.length; T++) S = m.charCodeAt(T), x = S >> 8, S %= 256, C.push(S), C.push(x);
							return C;
						}(x), m, S, C);
					}
					function L(m, x, S) {
						var C = "";
						S = Math.min(m.length, S);
						for (var T = x; T < S; T++) C += String.fromCharCode(m[T]);
						return C;
					}
					function R(m, x, S, C) {
						C || ($(typeof S == "boolean", "missing or invalid endian"), $(x != null, "missing offset"), $(x + 1 < m.length, "Trying to read beyond buffer length"));
						var T, C = m.length;
						if (!(C <= x)) return S ? (T = m[x], x + 1 < C && (T |= m[x + 1] << 8)) : (T = m[x] << 8, x + 1 < C && (T |= m[x + 1])), T;
					}
					function z(m, x, S, C) {
						C || ($(typeof S == "boolean", "missing or invalid endian"), $(x != null, "missing offset"), $(x + 3 < m.length, "Trying to read beyond buffer length"));
						var T, C = m.length;
						if (!(C <= x)) return S ? (x + 2 < C && (T = m[x + 2] << 16), x + 1 < C && (T |= m[x + 1] << 8), T |= m[x], x + 3 < C && (T += m[x + 3] << 24 >>> 0)) : (x + 1 < C && (T = m[x + 1] << 16), x + 2 < C && (T |= m[x + 2] << 8), x + 3 < C && (T |= m[x + 3]), T += m[x] << 24 >>> 0), T;
					}
					function B(m, x, S, C) {
						if (C || ($(typeof S == "boolean", "missing or invalid endian"), $(x != null, "missing offset"), $(x + 1 < m.length, "Trying to read beyond buffer length")), !(m.length <= x)) return C = R(m, x, S, !0), 32768 & C ? -1 * (65535 - C + 1) : C;
					}
					function V(m, x, S, C) {
						if (C || ($(typeof S == "boolean", "missing or invalid endian"), $(x != null, "missing offset"), $(x + 3 < m.length, "Trying to read beyond buffer length")), !(m.length <= x)) return C = z(m, x, S, !0), 2147483648 & C ? -1 * (4294967295 - C + 1) : C;
					}
					function H(m, x, S, C) {
						return C || ($(typeof S == "boolean", "missing or invalid endian"), $(x + 3 < m.length, "Trying to read beyond buffer length")), P.read(m, x, S, 23, 4);
					}
					function U(m, x, S, C) {
						return C || ($(typeof S == "boolean", "missing or invalid endian"), $(x + 7 < m.length, "Trying to read beyond buffer length")), P.read(m, x, S, 52, 8);
					}
					function W(m, x, S, C, T) {
						if (T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 1 < m.length, "trying to write beyond buffer length"), NI(x, 65535)), T = m.length, !(T <= S)) for (var D = 0, O = Math.min(T - S, 2); D < O; D++) m[S + D] = (x & 255 << 8 * (C ? D : 1 - D)) >>> 8 * (C ? D : 1 - D);
					}
					function G(m, x, S, C, T) {
						if (T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 3 < m.length, "trying to write beyond buffer length"), NI(x, 4294967295)), T = m.length, !(T <= S)) for (var D = 0, O = Math.min(T - S, 4); D < O; D++) m[S + D] = x >>> 8 * (C ? D : 3 - D) & 255;
					}
					function K(m, x, S, C, T) {
						T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 1 < m.length, "Trying to write beyond buffer length"), Q(x, 32767, -32768)), m.length <= S || W(m, 0 <= x ? x : 65535 + x + 1, S, C, T);
					}
					function q(m, x, S, C, T) {
						T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 3 < m.length, "Trying to write beyond buffer length"), Q(x, 2147483647, -2147483648)), m.length <= S || G(m, 0 <= x ? x : 4294967295 + x + 1, S, C, T);
					}
					function EI(m, x, S, C, T) {
						T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 3 < m.length, "Trying to write beyond buffer length"), PI(x, 34028234663852886e22, -34028234663852886e22)), m.length <= S || P.write(m, x, S, C, 23, 4);
					}
					function DI(m, x, S, C, T) {
						T || ($(x != null, "missing value"), $(typeof C == "boolean", "missing or invalid endian"), $(S != null, "missing offset"), $(S + 7 < m.length, "Trying to write beyond buffer length"), PI(x, 17976931348623157e292, -17976931348623157e292)), m.length <= S || P.write(m, x, S, C, 52, 8);
					}
					S.Buffer = T, S.SlowBuffer = T, S.INSPECT_MAX_BYTES = 50, T.poolSize = 8192, T._useTypedArrays = function() {
						try {
							var m = /* @__PURE__ */ new ArrayBuffer(0), x = new Uint8Array(m);
							return x.foo = function() {
								return 42;
							}, x.foo() === 42 && typeof x.subarray == "function";
						} catch {
							return !1;
						}
					}(), T.isEncoding = function(m) {
						switch (String(m).toLowerCase()) {
							case "hex":
							case "utf8":
							case "utf-8":
							case "ascii":
							case "binary":
							case "base64":
							case "raw":
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le": return !0;
							default: return !1;
						}
					}, T.isBuffer = function(m) {
						return !(m == null || !m._isBuffer);
					}, T.byteLength = function(m, x) {
						var S;
						switch (m += "", x || "utf8") {
							case "hex":
								S = m.length / 2;
								break;
							case "utf8":
							case "utf-8":
								S = kI(m).length;
								break;
							case "ascii":
							case "binary":
							case "raw":
								S = m.length;
								break;
							case "base64":
								S = AI(m).length;
								break;
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								S = 2 * m.length;
								break;
							default: throw Error("Unknown encoding");
						}
						return S;
					}, T.concat = function(m, x) {
						if ($(Z(m), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), m.length === 0) return new T(0);
						if (m.length === 1) return m[0];
						if (typeof x != "number") for (D = x = 0; D < m.length; D++) x += m[D].length;
						for (var S = new T(x), C = 0, D = 0; D < m.length; D++) {
							var O = m[D];
							O.copy(S, C), C += O.length;
						}
						return S;
					}, T.prototype.write = function(m, x, S, C) {
						isFinite(x) ? isFinite(S) || (C = S, S = void 0) : (j = C, C = x, x = S, S = j), x = Number(x) || 0;
						var D, O, k, A, j = this.length - x;
						switch ((!S || j < (S = Number(S))) && (S = j), C = String(C || "utf8").toLowerCase()) {
							case "hex":
								D = function(m, x, S, C) {
									S = Number(S) || 0;
									var D = m.length - S;
									(!C || D < (C = Number(C))) && (C = D), $((D = x.length) % 2 == 0, "Invalid hex string"), D / 2 < C && (C = D / 2);
									for (var O = 0; O < C; O++) {
										var k = parseInt(x.substr(2 * O, 2), 16);
										$(!isNaN(k), "Invalid hex string"), m[S + O] = k;
									}
									return T._charsWritten = 2 * O, O;
								}(this, m, x, S);
								break;
							case "utf8":
							case "utf-8":
								O = this, k = x, A = S, D = T._charsWritten = jI(kI(m), O, k, A);
								break;
							case "ascii":
							case "binary":
								D = F(this, m, x, S);
								break;
							case "base64":
								O = this, k = x, A = S, D = T._charsWritten = jI(AI(m), O, k, A);
								break;
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								D = I(this, m, x, S);
								break;
							default: throw Error("Unknown encoding");
						}
						return D;
					}, T.prototype.toString = function(m, x, S) {
						var C, T, D, O, k = this;
						if (m = String(m || "utf8").toLowerCase(), x = Number(x) || 0, (S = S === void 0 ? k.length : Number(S)) === x) return "";
						switch (m) {
							case "hex":
								C = function(m, x, S) {
									var C = m.length;
									(!x || x < 0) && (x = 0), (!S || S < 0 || C < S) && (S = C);
									for (var T = "", D = x; D < S; D++) T += OI(m[D]);
									return T;
								}(k, x, S);
								break;
							case "utf8":
							case "utf-8":
								C = function(m, x, S) {
									var C = "", T = "";
									S = Math.min(m.length, S);
									for (var D = x; D < S; D++) m[D] <= 127 ? (C += MI(T) + String.fromCharCode(m[D]), T = "") : T += "%" + m[D].toString(16);
									return C + MI(T);
								}(k, x, S);
								break;
							case "ascii":
							case "binary":
								C = L(k, x, S);
								break;
							case "base64":
								T = k, O = S, C = (D = x) === 0 && O === T.length ? N.fromByteArray(T) : N.fromByteArray(T.slice(D, O));
								break;
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								C = function(m, x, S) {
									for (var C = m.slice(x, S), T = "", D = 0; D < C.length; D += 2) T += String.fromCharCode(C[D] + 256 * C[D + 1]);
									return T;
								}(k, x, S);
								break;
							default: throw Error("Unknown encoding");
						}
						return C;
					}, T.prototype.toJSON = function() {
						return {
							type: "Buffer",
							data: Array.prototype.slice.call(this._arr || this, 0)
						};
					}, T.prototype.copy = function(m, x, S, C) {
						if (x ||= 0, (C = C || C === 0 ? C : this.length) !== (S ||= 0) && m.length !== 0 && this.length !== 0) {
							$(S <= C, "sourceEnd < sourceStart"), $(0 <= x && x < m.length, "targetStart out of bounds"), $(0 <= S && S < this.length, "sourceStart out of bounds"), $(0 <= C && C <= this.length, "sourceEnd out of bounds"), C > this.length && (C = this.length);
							var D = (C = m.length - x < C - S ? m.length - x + S : C) - S;
							if (D < 100 || !T._useTypedArrays) for (var O = 0; O < D; O++) m[O + x] = this[O + S];
							else m._set(this.subarray(S, S + D), x);
						}
					}, T.prototype.slice = function(m, x) {
						var S = this.length;
						if (m = Y(m, S, 0), x = Y(x, S, S), T._useTypedArrays) return T._augment(this.subarray(m, x));
						for (var C = x - m, D = new T(C, void 0, !0), O = 0; O < C; O++) D[O] = this[O + m];
						return D;
					}, T.prototype.get = function(m) {
						return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(m);
					}, T.prototype.set = function(m, x) {
						return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(m, x);
					}, T.prototype.readUInt8 = function(m, x) {
						if (x || ($(m != null, "missing offset"), $(m < this.length, "Trying to read beyond buffer length")), !(m >= this.length)) return this[m];
					}, T.prototype.readUInt16LE = function(m, x) {
						return R(this, m, !0, x);
					}, T.prototype.readUInt16BE = function(m, x) {
						return R(this, m, !1, x);
					}, T.prototype.readUInt32LE = function(m, x) {
						return z(this, m, !0, x);
					}, T.prototype.readUInt32BE = function(m, x) {
						return z(this, m, !1, x);
					}, T.prototype.readInt8 = function(m, x) {
						if (x || ($(m != null, "missing offset"), $(m < this.length, "Trying to read beyond buffer length")), !(m >= this.length)) return 128 & this[m] ? -1 * (255 - this[m] + 1) : this[m];
					}, T.prototype.readInt16LE = function(m, x) {
						return B(this, m, !0, x);
					}, T.prototype.readInt16BE = function(m, x) {
						return B(this, m, !1, x);
					}, T.prototype.readInt32LE = function(m, x) {
						return V(this, m, !0, x);
					}, T.prototype.readInt32BE = function(m, x) {
						return V(this, m, !1, x);
					}, T.prototype.readFloatLE = function(m, x) {
						return H(this, m, !0, x);
					}, T.prototype.readFloatBE = function(m, x) {
						return H(this, m, !1, x);
					}, T.prototype.readDoubleLE = function(m, x) {
						return U(this, m, !0, x);
					}, T.prototype.readDoubleBE = function(m, x) {
						return U(this, m, !1, x);
					}, T.prototype.writeUInt8 = function(m, x, S) {
						S || ($(m != null, "missing value"), $(x != null, "missing offset"), $(x < this.length, "trying to write beyond buffer length"), NI(m, 255)), x >= this.length || (this[x] = m);
					}, T.prototype.writeUInt16LE = function(m, x, S) {
						W(this, m, x, !0, S);
					}, T.prototype.writeUInt16BE = function(m, x, S) {
						W(this, m, x, !1, S);
					}, T.prototype.writeUInt32LE = function(m, x, S) {
						G(this, m, x, !0, S);
					}, T.prototype.writeUInt32BE = function(m, x, S) {
						G(this, m, x, !1, S);
					}, T.prototype.writeInt8 = function(m, x, S) {
						S || ($(m != null, "missing value"), $(x != null, "missing offset"), $(x < this.length, "Trying to write beyond buffer length"), Q(m, 127, -128)), x >= this.length || (0 <= m ? this.writeUInt8(m, x, S) : this.writeUInt8(255 + m + 1, x, S));
					}, T.prototype.writeInt16LE = function(m, x, S) {
						K(this, m, x, !0, S);
					}, T.prototype.writeInt16BE = function(m, x, S) {
						K(this, m, x, !1, S);
					}, T.prototype.writeInt32LE = function(m, x, S) {
						q(this, m, x, !0, S);
					}, T.prototype.writeInt32BE = function(m, x, S) {
						q(this, m, x, !1, S);
					}, T.prototype.writeFloatLE = function(m, x, S) {
						EI(this, m, x, !0, S);
					}, T.prototype.writeFloatBE = function(m, x, S) {
						EI(this, m, x, !1, S);
					}, T.prototype.writeDoubleLE = function(m, x, S) {
						DI(this, m, x, !0, S);
					}, T.prototype.writeDoubleBE = function(m, x, S) {
						DI(this, m, x, !1, S);
					}, T.prototype.fill = function(m, x, S) {
						if (x ||= 0, S ||= this.length, $(typeof (m = typeof (m ||= 0) == "string" ? m.charCodeAt(0) : m) == "number" && !isNaN(m), "value is not a number"), $(x <= S, "end < start"), S !== x && this.length !== 0) {
							$(0 <= x && x < this.length, "start out of bounds"), $(0 <= S && S <= this.length, "end out of bounds");
							for (var C = x; C < S; C++) this[C] = m;
						}
					}, T.prototype.inspect = function() {
						for (var m = [], x = this.length, C = 0; C < x; C++) if (m[C] = OI(this[C]), C === S.INSPECT_MAX_BYTES) {
							m[C + 1] = "...";
							break;
						}
						return "<Buffer " + m.join(" ") + ">";
					}, T.prototype.toArrayBuffer = function() {
						if (typeof Uint8Array > "u") throw Error("Buffer.toArrayBuffer not supported in this browser");
						if (T._useTypedArrays) return new T(this).buffer;
						for (var m = new Uint8Array(this.length), x = 0, S = m.length; x < S; x += 1) m[x] = this[x];
						return m.buffer;
					};
					var J = T.prototype;
					function Y(m, x, S) {
						return typeof m == "number" ? x <= (m = ~~m) ? x : 0 <= m || 0 <= (m += x) ? m : 0 : S;
					}
					function X(m) {
						return (m = ~~Math.ceil(+m)) < 0 ? 0 : m;
					}
					function Z(m) {
						return (Array.isArray || function(m) {
							return Object.prototype.toString.call(m) === "[object Array]";
						})(m);
					}
					function OI(m) {
						return m < 16 ? "0" + m.toString(16) : m.toString(16);
					}
					function kI(m) {
						for (var x = [], S = 0; S < m.length; S++) {
							var C = m.charCodeAt(S);
							if (C <= 127) x.push(m.charCodeAt(S));
							else for (var T = S, D = (55296 <= C && C <= 57343 && S++, encodeURIComponent(m.slice(T, S + 1)).substr(1).split("%")), O = 0; O < D.length; O++) x.push(parseInt(D[O], 16));
						}
						return x;
					}
					function AI(m) {
						return N.toByteArray(m);
					}
					function jI(m, x, S, C) {
						for (var T = 0; T < C && !(T + S >= x.length || T >= m.length); T++) x[T + S] = m[T];
						return T;
					}
					function MI(m) {
						try {
							return decodeURIComponent(m);
						} catch {
							return "�";
						}
					}
					function NI(m, x) {
						$(typeof m == "number", "cannot write a non-number as a number"), $(0 <= m, "specified a negative value for writing an unsigned value"), $(m <= x, "value is larger than maximum value for type"), $(Math.floor(m) === m, "value has a fractional component");
					}
					function Q(m, x, S) {
						$(typeof m == "number", "cannot write a non-number as a number"), $(m <= x, "value larger than maximum allowed value"), $(S <= m, "value smaller than minimum allowed value"), $(Math.floor(m) === m, "value has a fractional component");
					}
					function PI(m, x, S) {
						$(typeof m == "number", "cannot write a non-number as a number"), $(m <= x, "value larger than maximum allowed value"), $(S <= m, "value smaller than minimum allowed value");
					}
					function $(m, x) {
						if (!m) throw Error(x || "Failed assertion");
					}
					T._augment = function(m) {
						return m._isBuffer = !0, m._get = m.get, m._set = m.set, m.get = J.get, m.set = J.set, m.write = J.write, m.toString = J.toString, m.toLocaleString = J.toString, m.toJSON = J.toJSON, m.copy = J.copy, m.slice = J.slice, m.readUInt8 = J.readUInt8, m.readUInt16LE = J.readUInt16LE, m.readUInt16BE = J.readUInt16BE, m.readUInt32LE = J.readUInt32LE, m.readUInt32BE = J.readUInt32BE, m.readInt8 = J.readInt8, m.readInt16LE = J.readInt16LE, m.readInt16BE = J.readInt16BE, m.readInt32LE = J.readInt32LE, m.readInt32BE = J.readInt32BE, m.readFloatLE = J.readFloatLE, m.readFloatBE = J.readFloatBE, m.readDoubleLE = J.readDoubleLE, m.readDoubleBE = J.readDoubleBE, m.writeUInt8 = J.writeUInt8, m.writeUInt16LE = J.writeUInt16LE, m.writeUInt16BE = J.writeUInt16BE, m.writeUInt32LE = J.writeUInt32LE, m.writeUInt32BE = J.writeUInt32BE, m.writeInt8 = J.writeInt8, m.writeInt16LE = J.writeInt16LE, m.writeInt16BE = J.writeInt16BE, m.writeInt32LE = J.writeInt32LE, m.writeInt32BE = J.writeInt32BE, m.writeFloatLE = J.writeFloatLE, m.writeFloatBE = J.writeFloatBE, m.writeDoubleLE = J.writeDoubleLE, m.writeDoubleBE = J.writeDoubleBE, m.fill = J.fill, m.inspect = J.inspect, m.toArrayBuffer = J.toArrayBuffer, m;
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
			}, {
				"base64-js": 2,
				buffer: 3,
				ieee754: 10,
				lYpoI2: 11
			}],
			4: [function(m, x, S) {
				(function(S, C, T, D, O, k, A, j, M) {
					var T = m("buffer").Buffer, N = 4, P = new T(N);
					P.fill(0), x.exports = { hash: function(m, x, S, C) {
						for (var D = x(function(m, x) {
							m.length % N != 0 && (S = m.length + (N - m.length % N), m = T.concat([m, P], S));
							for (var S, C = [], D = x ? m.readInt32BE : m.readInt32LE, O = 0; O < m.length; O += N) C.push(D.call(m, O));
							return C;
						}(m = T.isBuffer(m) ? m : new T(m), C), 8 * m.length), x = C, O = new T(S), k = x ? O.writeInt32BE : O.writeInt32LE, A = 0; A < D.length; A++) k.call(O, D[A], 4 * A, !0);
						return O;
					} };
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				buffer: 3,
				lYpoI2: 11
			}],
			5: [function(m, x, S) {
				(function(x, C, T, D, O, k, A, j, M) {
					var T = m("buffer").Buffer, N = m("./sha"), P = m("./sha256"), F = m("./rng"), I = {
						sha1: N,
						sha256: P,
						md5: m("./md5")
					}, L = 64, R = new T(L);
					function z(m, x) {
						var S = I[m ||= "sha1"], C = [];
						return S || B("algorithm:", m, "is not yet supported"), {
							update: function(m) {
								return T.isBuffer(m) || (m = new T(m)), C.push(m), m.length, this;
							},
							digest: function(m) {
								var D = T.concat(C), D = x ? function(m, x, S) {
									T.isBuffer(x) || (x = new T(x)), T.isBuffer(S) || (S = new T(S)), x.length > L ? x = m(x) : x.length < L && (x = T.concat([x, R], L));
									for (var C = new T(L), D = new T(L), O = 0; O < L; O++) C[O] = 54 ^ x[O], D[O] = 92 ^ x[O];
									return S = m(T.concat([C, S])), m(T.concat([D, S]));
								}(S, x, D) : S(D);
								return C = null, m ? D.toString(m) : D;
							}
						};
					}
					function B() {
						var m = [].slice.call(arguments).join(" ");
						throw Error([
							m,
							"we accept pull requests",
							"http://github.com/dominictarr/crypto-browserify"
						].join("\n"));
					}
					R.fill(0), S.createHash = function(m) {
						return z(m);
					}, S.createHmac = z, S.randomBytes = function(m, x) {
						if (!x || !x.call) return new T(F(m));
						try {
							x.call(this, void 0, new T(F(m)));
						} catch (m) {
							x(m);
						}
					};
					var V, H = [
						"createCredentials",
						"createCipher",
						"createCipheriv",
						"createDecipher",
						"createDecipheriv",
						"createSign",
						"createVerify",
						"createDiffieHellman",
						"pbkdf2"
					], U = function(m) {
						S[m] = function() {
							B("sorry,", m, "is not implemented yet");
						};
					};
					for (V in H) U(H[V], V);
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				"./md5": 6,
				"./rng": 7,
				"./sha": 8,
				"./sha256": 9,
				buffer: 3,
				lYpoI2: 11
			}],
			6: [function(m, x, S) {
				(function(S, C, T, D, O, k, A, j, M) {
					var N = m("./helpers");
					function P(m, x) {
						m[x >> 5] |= 128 << x % 32, m[14 + (x + 64 >>> 9 << 4)] = x;
						for (var S = 1732584193, C = -271733879, T = -1732584194, D = 271733878, O = 0; O < m.length; O += 16) {
							var k = S, A = C, j = T, M = D, S = I(S, C, T, D, m[O + 0], 7, -680876936), D = I(D, S, C, T, m[O + 1], 12, -389564586), T = I(T, D, S, C, m[O + 2], 17, 606105819), C = I(C, T, D, S, m[O + 3], 22, -1044525330);
							S = I(S, C, T, D, m[O + 4], 7, -176418897), D = I(D, S, C, T, m[O + 5], 12, 1200080426), T = I(T, D, S, C, m[O + 6], 17, -1473231341), C = I(C, T, D, S, m[O + 7], 22, -45705983), S = I(S, C, T, D, m[O + 8], 7, 1770035416), D = I(D, S, C, T, m[O + 9], 12, -1958414417), T = I(T, D, S, C, m[O + 10], 17, -42063), C = I(C, T, D, S, m[O + 11], 22, -1990404162), S = I(S, C, T, D, m[O + 12], 7, 1804603682), D = I(D, S, C, T, m[O + 13], 12, -40341101), T = I(T, D, S, C, m[O + 14], 17, -1502002290), S = L(S, C = I(C, T, D, S, m[O + 15], 22, 1236535329), T, D, m[O + 1], 5, -165796510), D = L(D, S, C, T, m[O + 6], 9, -1069501632), T = L(T, D, S, C, m[O + 11], 14, 643717713), C = L(C, T, D, S, m[O + 0], 20, -373897302), S = L(S, C, T, D, m[O + 5], 5, -701558691), D = L(D, S, C, T, m[O + 10], 9, 38016083), T = L(T, D, S, C, m[O + 15], 14, -660478335), C = L(C, T, D, S, m[O + 4], 20, -405537848), S = L(S, C, T, D, m[O + 9], 5, 568446438), D = L(D, S, C, T, m[O + 14], 9, -1019803690), T = L(T, D, S, C, m[O + 3], 14, -187363961), C = L(C, T, D, S, m[O + 8], 20, 1163531501), S = L(S, C, T, D, m[O + 13], 5, -1444681467), D = L(D, S, C, T, m[O + 2], 9, -51403784), T = L(T, D, S, C, m[O + 7], 14, 1735328473), S = R(S, C = L(C, T, D, S, m[O + 12], 20, -1926607734), T, D, m[O + 5], 4, -378558), D = R(D, S, C, T, m[O + 8], 11, -2022574463), T = R(T, D, S, C, m[O + 11], 16, 1839030562), C = R(C, T, D, S, m[O + 14], 23, -35309556), S = R(S, C, T, D, m[O + 1], 4, -1530992060), D = R(D, S, C, T, m[O + 4], 11, 1272893353), T = R(T, D, S, C, m[O + 7], 16, -155497632), C = R(C, T, D, S, m[O + 10], 23, -1094730640), S = R(S, C, T, D, m[O + 13], 4, 681279174), D = R(D, S, C, T, m[O + 0], 11, -358537222), T = R(T, D, S, C, m[O + 3], 16, -722521979), C = R(C, T, D, S, m[O + 6], 23, 76029189), S = R(S, C, T, D, m[O + 9], 4, -640364487), D = R(D, S, C, T, m[O + 12], 11, -421815835), T = R(T, D, S, C, m[O + 15], 16, 530742520), S = z(S, C = R(C, T, D, S, m[O + 2], 23, -995338651), T, D, m[O + 0], 6, -198630844), D = z(D, S, C, T, m[O + 7], 10, 1126891415), T = z(T, D, S, C, m[O + 14], 15, -1416354905), C = z(C, T, D, S, m[O + 5], 21, -57434055), S = z(S, C, T, D, m[O + 12], 6, 1700485571), D = z(D, S, C, T, m[O + 3], 10, -1894986606), T = z(T, D, S, C, m[O + 10], 15, -1051523), C = z(C, T, D, S, m[O + 1], 21, -2054922799), S = z(S, C, T, D, m[O + 8], 6, 1873313359), D = z(D, S, C, T, m[O + 15], 10, -30611744), T = z(T, D, S, C, m[O + 6], 15, -1560198380), C = z(C, T, D, S, m[O + 13], 21, 1309151649), S = z(S, C, T, D, m[O + 4], 6, -145523070), D = z(D, S, C, T, m[O + 11], 10, -1120210379), T = z(T, D, S, C, m[O + 2], 15, 718787259), C = z(C, T, D, S, m[O + 9], 21, -343485551), S = B(S, k), C = B(C, A), T = B(T, j), D = B(D, M);
						}
						return [
							S,
							C,
							T,
							D
						];
					}
					function F(m, x, S, C, T, D) {
						return B((x = B(B(x, m), B(C, D))) << T | x >>> 32 - T, S);
					}
					function I(m, x, S, C, T, D, O) {
						return F(x & S | ~x & C, m, x, T, D, O);
					}
					function L(m, x, S, C, T, D, O) {
						return F(x & C | S & ~C, m, x, T, D, O);
					}
					function R(m, x, S, C, T, D, O) {
						return F(x ^ S ^ C, m, x, T, D, O);
					}
					function z(m, x, S, C, T, D, O) {
						return F(S ^ (x | ~C), m, x, T, D, O);
					}
					function B(m, x) {
						var S = (65535 & m) + (65535 & x);
						return (m >> 16) + (x >> 16) + (S >> 16) << 16 | 65535 & S;
					}
					x.exports = function(m) {
						return N.hash(m, P, 16);
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				"./helpers": 4,
				buffer: 3,
				lYpoI2: 11
			}],
			7: [function(m, x, S) {
				(function(m, S, C, T, D, O, k, A, j) {
					var M;
					x.exports = M || function(m) {
						for (var x, S = Array(m), C = 0; C < m; C++) !(3 & C) && (x = 4294967296 * Math.random()), S[C] = x >>> ((3 & C) << 3) & 255;
						return S;
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				buffer: 3,
				lYpoI2: 11
			}],
			8: [function(m, x, S) {
				(function(S, C, T, D, O, k, A, j, M) {
					var N = m("./helpers");
					function P(m, x) {
						m[x >> 5] |= 128 << 24 - x % 32, m[15 + (x + 64 >> 9 << 4)] = x;
						for (var S, C, T, D = Array(80), O = 1732584193, k = -271733879, A = -1732584194, j = 271733878, M = -1009589776, N = 0; N < m.length; N += 16) {
							for (var P = O, L = k, R = A, z = j, B = M, V = 0; V < 80; V++) {
								D[V] = V < 16 ? m[N + V] : I(D[V - 3] ^ D[V - 8] ^ D[V - 14] ^ D[V - 16], 1);
								var H = F(F(I(O, 5), (H = k, C = A, T = j, (S = V) < 20 ? H & C | ~H & T : !(S < 40) && S < 60 ? H & C | H & T | C & T : H ^ C ^ T)), F(F(M, D[V]), (S = V) < 20 ? 1518500249 : S < 40 ? 1859775393 : S < 60 ? -1894007588 : -899497514)), M = j, j = A, A = I(k, 30), k = O, O = H;
							}
							O = F(O, P), k = F(k, L), A = F(A, R), j = F(j, z), M = F(M, B);
						}
						return [
							O,
							k,
							A,
							j,
							M
						];
					}
					function F(m, x) {
						var S = (65535 & m) + (65535 & x);
						return (m >> 16) + (x >> 16) + (S >> 16) << 16 | 65535 & S;
					}
					function I(m, x) {
						return m << x | m >>> 32 - x;
					}
					x.exports = function(m) {
						return N.hash(m, P, 20, !0);
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				"./helpers": 4,
				buffer: 3,
				lYpoI2: 11
			}],
			9: [function(m, x, S) {
				(function(S, C, T, D, O, k, A, j, M) {
					function N(m, x) {
						var S = (65535 & m) + (65535 & x);
						return (m >> 16) + (x >> 16) + (S >> 16) << 16 | 65535 & S;
					}
					function P(m, x) {
						var S, C = [
							1116352408,
							1899447441,
							3049323471,
							3921009573,
							961987163,
							1508970993,
							2453635748,
							2870763221,
							3624381080,
							310598401,
							607225278,
							1426881987,
							1925078388,
							2162078206,
							2614888103,
							3248222580,
							3835390401,
							4022224774,
							264347078,
							604807628,
							770255983,
							1249150122,
							1555081692,
							1996064986,
							2554220882,
							2821834349,
							2952996808,
							3210313671,
							3336571891,
							3584528711,
							113926993,
							338241895,
							666307205,
							773529912,
							1294757372,
							1396182291,
							1695183700,
							1986661051,
							2177026350,
							2456956037,
							2730485921,
							2820302411,
							3259730800,
							3345764771,
							3516065817,
							3600352804,
							4094571909,
							275423344,
							430227734,
							506948616,
							659060556,
							883997877,
							958139571,
							1322822218,
							1537002063,
							1747873779,
							1955562222,
							2024104815,
							2227730452,
							2361852424,
							2428436474,
							2756734187,
							3204031479,
							3329325298
						], T = [
							1779033703,
							3144134277,
							1013904242,
							2773480762,
							1359893119,
							2600822924,
							528734635,
							1541459225
						], D = Array(64);
						m[x >> 5] |= 128 << 24 - x % 32, m[15 + (x + 64 >> 9 << 4)] = x;
						for (var O, k, A = 0; A < m.length; A += 16) {
							for (var j = T[0], M = T[1], P = T[2], F = T[3], R = T[4], z = T[5], B = T[6], V = T[7], H = 0; H < 64; H++) D[H] = H < 16 ? m[H + A] : N(N(N((k = D[H - 2], I(k, 17) ^ I(k, 19) ^ L(k, 10)), D[H - 7]), (k = D[H - 15], I(k, 7) ^ I(k, 18) ^ L(k, 3))), D[H - 16]), S = N(N(N(N(V, I(k = R, 6) ^ I(k, 11) ^ I(k, 25)), R & z ^ ~R & B), C[H]), D[H]), O = N(I(O = j, 2) ^ I(O, 13) ^ I(O, 22), j & M ^ j & P ^ M & P), V = B, B = z, z = R, R = N(F, S), F = P, P = M, M = j, j = N(S, O);
							T[0] = N(j, T[0]), T[1] = N(M, T[1]), T[2] = N(P, T[2]), T[3] = N(F, T[3]), T[4] = N(R, T[4]), T[5] = N(z, T[5]), T[6] = N(B, T[6]), T[7] = N(V, T[7]);
						}
						return T;
					}
					var F = m("./helpers"), I = function(m, x) {
						return m >>> x | m << 32 - x;
					}, L = function(m, x) {
						return m >>> x;
					};
					x.exports = function(m) {
						return F.hash(m, P, 32, !0);
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
			}, {
				"./helpers": 4,
				buffer: 3,
				lYpoI2: 11
			}],
			10: [function(m, x, S) {
				(function(m, x, C, T, D, O, k, A, j) {
					S.read = function(m, x, S, C, T) {
						var D, O, k = 8 * T - C - 1, A = (1 << k) - 1, j = A >> 1, M = -7, N = S ? T - 1 : 0, P = S ? -1 : 1, T = m[x + N];
						for (N += P, D = T & (1 << -M) - 1, T >>= -M, M += k; 0 < M; D = 256 * D + m[x + N], N += P, M -= 8);
						for (O = D & (1 << -M) - 1, D >>= -M, M += C; 0 < M; O = 256 * O + m[x + N], N += P, M -= 8);
						if (D === 0) D = 1 - j;
						else {
							if (D === A) return O ? NaN : Infinity * (T ? -1 : 1);
							O += 2 ** C, D -= j;
						}
						return (T ? -1 : 1) * O * 2 ** (D - C);
					}, S.write = function(m, x, S, C, T, D) {
						var O, k, A = 8 * D - T - 1, j = (1 << A) - 1, M = j >> 1, N = T === 23 ? 2 ** -24 - 2 ** -77 : 0, P = C ? 0 : D - 1, F = C ? 1 : -1, D = x < 0 || x === 0 && 1 / x < 0 ? 1 : 0;
						for (x = Math.abs(x), isNaN(x) || x === Infinity ? (k = isNaN(x) ? 1 : 0, O = j) : (O = Math.floor(Math.log(x) / Math.LN2), x * (C = 2 ** -O) < 1 && (O--, C *= 2), 2 <= (x += 1 <= O + M ? N / C : N * 2 ** (1 - M)) * C && (O++, C /= 2), j <= O + M ? (k = 0, O = j) : 1 <= O + M ? (k = (x * C - 1) * 2 ** T, O += M) : (k = x * 2 ** (M - 1) * 2 ** T, O = 0)); 8 <= T; m[S + P] = 255 & k, P += F, k /= 256, T -= 8);
						for (O = O << T | k, A += T; 0 < A; m[S + P] = 255 & O, P += F, O /= 256, A -= 8);
						m[S + P - F] |= 128 * D;
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
			}, {
				buffer: 3,
				lYpoI2: 11
			}],
			11: [function(m, x, S) {
				(function(m, S, C, T, D, O, k, A, j) {
					var M, N, P;
					function F() {}
					(m = x.exports = {}).nextTick = (N = typeof window < "u" && window.setImmediate, P = typeof window < "u" && window.postMessage && window.addEventListener, N ? function(m) {
						return window.setImmediate(m);
					} : P ? (M = [], window.addEventListener("message", function(m) {
						var x = m.source;
						x !== window && x !== null || m.data !== "process-tick" || (m.stopPropagation(), 0 < M.length && M.shift()());
					}, !0), function(m) {
						M.push(m), window.postMessage("process-tick", "*");
					}) : function(m) {
						setTimeout(m, 0);
					}), m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.on = F, m.addListener = F, m.once = F, m.off = F, m.removeListener = F, m.removeAllListeners = F, m.emit = F, m.binding = function(m) {
						throw Error("process.binding is not supported");
					}, m.cwd = function() {
						return "/";
					}, m.chdir = function(m) {
						throw Error("process.chdir is not supported");
					};
				}).call(this, m("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, m("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
			}, {
				buffer: 3,
				lYpoI2: 11
			}]
		}, {}, [1])(1);
	});
})))(), 1), import_fast_deep_equal = /* @__PURE__ */ __toESM$1(require_fast_deep_equal(), 1), require_classnames = __commonJS({ "../../node_modules/classnames/index.js"(m, x) {
	init_react_import(), (function() {
		var m = {}.hasOwnProperty;
		function S() {
			for (var m = "", x = 0; x < arguments.length; x++) {
				var S = arguments[x];
				S && (m = T(m, C(S)));
			}
			return m;
		}
		function C(x) {
			if (typeof x == "string" || typeof x == "number") return x;
			if (typeof x != "object") return "";
			if (Array.isArray(x)) return S.apply(null, x);
			if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]")) return x.toString();
			var C = "";
			for (var D in x) m.call(x, D) && x[D] && (C = T(C, D));
			return C;
		}
		function T(m, x) {
			return x ? m ? m + " " + x : m + x : m;
		}
		x !== void 0 && x.exports ? (S.default = S, x.exports = S) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return S;
		}) : window.classNames = S;
	})();
} });
init_react_import(), init_react_import(), init_react_import();
var import_classnames = __toESM(require_classnames()), get_class_name_factory_default = (m, x, S = { baseClass: "" }) => (C = {}) => {
	if (typeof C == "string") {
		let T = C;
		return x[`${m}-${T}`] && S.baseClass + x[`${m}-${T}`] || "";
	} else if (typeof C == "object") {
		let T = C, D = {};
		for (let S in T) D[x[`${m}--${S}`]] = T[S];
		let O = x[m];
		return S.baseClass + (0, import_classnames.default)(__spreadValues({ [O]: !!O }, D));
	} else return S.baseClass + x[m] || "";
};
init_react_import();
var getClassName = get_class_name_factory_default("ActionBar", {
	ActionBar: "_ActionBar_rvadt_1",
	"ActionBar-label": "_ActionBar-label_rvadt_18",
	"ActionBar-action": "_ActionBar-action_rvadt_30",
	"ActionBar-group": "_ActionBar-group_rvadt_38"
}), ActionBar = ({ label: m, children: x }) => /* @__PURE__ */ jsxs("div", {
	className: getClassName(),
	onClick: (m) => {
		m.stopPropagation();
	},
	children: [m && /* @__PURE__ */ jsx(ActionBar.Group, { children: /* @__PURE__ */ jsx("div", {
		className: getClassName("label"),
		children: m
	}) }), x]
});
ActionBar.Action = ({ children: m, label: x, onClick: S }) => /* @__PURE__ */ jsx("button", {
	type: "button",
	className: getClassName("action"),
	onClick: S,
	title: x,
	children: m
}), ActionBar.Label = ({ label: m }) => /* @__PURE__ */ jsx("div", {
	className: getClassName("label"),
	children: m
}), ActionBar.Group = ({ children: m }) => /* @__PURE__ */ jsx("div", {
	className: getClassName("group"),
	children: m
}), init_react_import(), init_react_import();
var IconButton_module_default = {
	IconButton: "_IconButton_swpni_1",
	"IconButton--disabled": "_IconButton--disabled_swpni_20",
	"IconButton-title": "_IconButton-title_swpni_33"
};
init_react_import(), init_react_import(), init_react_import(), init_react_import();
var reorder = (m, x, S) => {
	let C = Array.from(m), [T] = C.splice(x, 1);
	return C.splice(S, 0, T), C;
};
init_react_import();
var replace = (m, x, S) => {
	let C = Array.from(m);
	return C.splice(x, 1), C.splice(x, 0, S), C;
};
init_react_import(), init_react_import(), init_react_import(), init_react_import();
var setAction = (m, x, S) => {
	if (typeof x.state == "object") {
		let C = __spreadValues(__spreadValues({}, m), x.state);
		return x.state.indexes ? C : (console.warn("`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."), walkAppState(C, S.config));
	}
	return __spreadValues(__spreadValues({}, m), x.state(m));
};
init_react_import(), init_react_import();
var insert = (m, x, S) => {
	let C = Array.from(m || []);
	return C.splice(x, 0, S), C;
};
init_react_import();
var generateId = (m) => m ? `${m}-${v4_default()}` : v4_default();
init_react_import();
var getIdsForParent = (m, x) => {
	let [S] = m.split(":");
	return (x.indexes.nodes[S]?.path || []).map((m) => m.split(":")[0]);
};
init_react_import();
var populateIds = (m, x, S = !1) => {
	let C = generateId(m.type);
	return walkTree(__spreadProps(__spreadValues({}, m), { props: S ? __spreadProps(__spreadValues({}, m.props), { id: C }) : __spreadValues({}, m.props) }), x, (m) => m.map((m) => {
		let x = generateId(m.type);
		return __spreadProps(__spreadValues({}, m), { props: S ? __spreadProps(__spreadValues({}, m.props), { id: x }) : __spreadValues({ id: x }, m.props) });
	}));
};
function insertAction(m, x, S) {
	let C = x.id || generateId(x.componentType), T = populateIds({
		type: x.componentType,
		props: __spreadProps(__spreadValues({}, S.config.components[x.componentType].defaultProps || {}), { id: C })
	}, S.config), [D] = x.destinationZone.split(":"), O = getIdsForParent(x.destinationZone, m);
	return walkAppState(m, S.config, (m, S) => S === x.destinationZone ? insert(m || [], x.destinationIndex, T) : m, (m, S) => m.props.id === C || m.props.id === D || O.includes(m.props.id) || S.includes(x.destinationZone) ? m : null);
}
init_react_import();
var replaceAction = (m, x, S) => {
	let [C] = x.destinationZone.split(":"), T = getIdsForParent(x.destinationZone, m), D = m.indexes.zones[x.destinationZone].contentIds[x.destinationIndex];
	if (D !== x.data.props.id) throw Error("Can't change the id during a replace action. Please us \"remove\" and \"insert\" to define a new node.");
	let O = [], k = walkTree(x.data, S.config, (m, x) => (O.push(`${x.parentId}:${x.propName}`), m.map((m) => {
		let x = generateId(m.type);
		return __spreadProps(__spreadValues({}, m), { props: __spreadValues({ id: x }, m.props) });
	}))), A = __spreadValues({}, m);
	return Object.keys(m.indexes.zones).forEach((m) => {
		m.split(":")[0] === D && (O.includes(m) || delete A.indexes.zones[m]);
	}), walkAppState(A, S.config, (m, S) => {
		let C = [...m];
		return S === x.destinationZone && (C[x.destinationIndex] = k), C;
	}, (m, x) => {
		let S = x.map((m) => m.split(":")[0]);
		return m.props.id === k.props.id ? k : m.props.id === C || T.indexOf(m.props.id) > -1 || S.indexOf(k.props.id) > -1 ? m : null;
	});
};
init_react_import();
var replaceRootAction = (m, x, S) => walkAppState(m, S.config, (m) => m, (m) => m.props.id === "root" ? __spreadProps(__spreadValues({}, m), {
	props: __spreadValues(__spreadValues({}, m.props), x.root.props),
	readOnly: x.root.readOnly
}) : m);
init_react_import(), init_react_import();
function getItem(m, x) {
	let S = x.indexes.zones?.[m.zone || rootDroppableId];
	return S ? x.indexes.nodes[S.contentIds[m.index]]?.data : void 0;
}
function duplicateAction(m, x, S) {
	let C = getItem({
		index: x.sourceIndex,
		zone: x.sourceZone
	}, m), T = getIdsForParent(x.sourceZone, m), D = __spreadProps(__spreadValues({}, C), { props: __spreadProps(__spreadValues({}, C.props), { id: generateId(C.type) }) }), O = walkAppState(m, S.config, (m, S) => S === x.sourceZone ? insert(m, x.sourceIndex + 1, C) : m, (m, S, C) => {
		let O = S[S.length - 1];
		if (S.map((m) => m.split(":")[0]).indexOf(D.props.id) > -1) return __spreadProps(__spreadValues({}, m), { props: __spreadProps(__spreadValues({}, m.props), { id: generateId(m.type) }) });
		if (O === x.sourceZone && C === x.sourceIndex + 1) return D;
		let [k] = x.sourceZone.split(":");
		return k === m.props.id || T.indexOf(m.props.id) > -1 ? m : null;
	});
	return __spreadProps(__spreadValues({}, O), { ui: __spreadProps(__spreadValues({}, O.ui), { itemSelector: {
		index: x.sourceIndex + 1,
		zone: x.sourceZone
	} }) });
}
init_react_import(), init_react_import(), init_react_import();
var remove = (m, x) => {
	let S = Array.from(m);
	return S.splice(x, 1), S;
}, moveAction = (m, x, S) => {
	if (x.sourceZone === x.destinationZone && x.sourceIndex === x.destinationIndex) return m;
	let C = getItem({
		zone: x.sourceZone,
		index: x.sourceIndex
	}, m);
	if (!C) return m;
	let T = getIdsForParent(x.sourceZone, m), D = getIdsForParent(x.destinationZone, m);
	return walkAppState(m, S.config, (m, S) => S === x.sourceZone && S === x.destinationZone ? insert(remove(m, x.sourceIndex), x.destinationIndex, C) : S === x.sourceZone ? remove(m, x.sourceIndex) : S === x.destinationZone ? insert(m, x.destinationIndex, C) : m, (m, S) => {
		let [O] = x.sourceZone.split(":"), [k] = x.destinationZone.split(":"), A = m.props.id;
		return O === A || k === A || C.props.id === A || T.indexOf(A) > -1 || D.indexOf(A) > -1 || S.includes(x.destinationZone) ? m : null;
	});
}, reorderAction = (m, x, S) => moveAction(m, {
	type: "move",
	sourceIndex: x.sourceIndex,
	sourceZone: x.destinationZone,
	destinationIndex: x.destinationIndex,
	destinationZone: x.destinationZone
}, S);
init_react_import();
var removeAction = (m, x, S) => {
	let C = getItem({
		index: x.index,
		zone: x.zone
	}, m), T = Object.entries(m.indexes.nodes).reduce((m, [x, S]) => S.path.map((m) => m.split(":")[0]).includes(C.props.id) ? [...m, x] : m, [C.props.id]), D = walkAppState(m, S.config, (m, S) => S === x.zone ? remove(m, x.index) : m);
	return Object.keys(D.data.zones || {}).forEach((m) => {
		let x = m.split(":")[0];
		T.includes(x) && D.data.zones && delete D.data.zones[m];
	}), Object.keys(D.indexes.zones).forEach((m) => {
		let x = m.split(":")[0];
		T.includes(x) && delete D.indexes.zones[m];
	}), T.forEach((m) => {
		delete D.indexes.nodes[m];
	}), D;
};
init_react_import();
var zoneCache = {};
function registerZoneAction(m, x) {
	return zoneCache[x.zone] ? __spreadProps(__spreadValues({}, m), {
		data: __spreadProps(__spreadValues({}, m.data), { zones: __spreadProps(__spreadValues({}, m.data.zones), { [x.zone]: zoneCache[x.zone] }) }),
		indexes: __spreadProps(__spreadValues({}, m.indexes), { zones: __spreadProps(__spreadValues({}, m.indexes.zones), { [x.zone]: __spreadProps(__spreadValues({}, m.indexes.zones[x.zone]), {
			contentIds: zoneCache[x.zone].map((m) => m.props.id),
			type: "dropzone"
		}) }) })
	}) : __spreadProps(__spreadValues({}, m), { data: setupZone(m.data, x.zone) });
}
function unregisterZoneAction(m, x) {
	let S = __spreadValues({}, m.data.zones || {}), C = __spreadValues({}, m.indexes.zones || {});
	return S[x.zone] && (zoneCache[x.zone] = S[x.zone], delete S[x.zone]), delete C[x.zone], __spreadProps(__spreadValues({}, m), {
		data: __spreadProps(__spreadValues({}, m.data), { zones: S }),
		indexes: __spreadProps(__spreadValues({}, m.indexes), { zones: C })
	});
}
init_react_import();
var setDataAction = (m, x, S) => typeof x.data == "object" ? (console.warn("`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."), walkAppState(__spreadProps(__spreadValues({}, m), { data: __spreadValues(__spreadValues({}, m.data), x.data) }), S.config)) : walkAppState(__spreadProps(__spreadValues({}, m), { data: __spreadValues(__spreadValues({}, m.data), x.data(m.data)) }), S.config);
init_react_import();
var setUiAction = (m, x) => typeof x.ui == "object" ? __spreadProps(__spreadValues({}, m), { ui: __spreadValues(__spreadValues({}, m.ui), x.ui) }) : __spreadProps(__spreadValues({}, m), { ui: __spreadValues(__spreadValues({}, m.ui), x.ui(m.ui)) });
init_react_import();
var makeStatePublic = (m) => {
	let { data: x, ui: S } = m;
	return {
		data: x,
		ui: S
	};
};
init_react_import();
function storeInterceptor(m, x, S) {
	return (C, T) => {
		let D = m(C, T), O = ![
			"registerZone",
			"unregisterZone",
			"setData",
			"setUi",
			"set"
		].includes(T.type);
		return (T.recordHistory === void 0 ? O : T.recordHistory) && x && x(D), S?.(T, makeStatePublic(D), makeStatePublic(C)), D;
	};
}
function createReducer({ record: m, onAction: x, appStore: S }) {
	return storeInterceptor((m, x) => x.type === "set" ? setAction(m, x, S) : x.type === "insert" ? insertAction(m, x, S) : x.type === "replace" ? replaceAction(m, x, S) : x.type === "replaceRoot" ? replaceRootAction(m, x, S) : x.type === "duplicate" ? duplicateAction(m, x, S) : x.type === "reorder" ? reorderAction(m, x, S) : x.type === "move" ? moveAction(m, x, S) : x.type === "remove" ? removeAction(m, x, S) : x.type === "registerZone" ? registerZoneAction(m, x) : x.type === "unregisterZone" ? unregisterZoneAction(m, x) : x.type === "setData" ? setDataAction(m, x, S) : x.type === "setUi" ? setUiAction(m, x) : m, m, x);
}
init_react_import(), init_react_import();
var keyCodeMap = {
	ControlLeft: "ctrl",
	ControlRight: "ctrl",
	MetaLeft: "meta",
	MetaRight: "meta",
	ShiftLeft: "shift",
	ShiftRight: "shift",
	KeyA: "a",
	KeyB: "b",
	KeyC: "c",
	KeyD: "d",
	KeyE: "e",
	KeyF: "f",
	KeyG: "g",
	KeyH: "h",
	KeyI: "i",
	KeyJ: "j",
	KeyK: "k",
	KeyL: "l",
	KeyM: "m",
	KeyN: "n",
	KeyO: "o",
	KeyP: "p",
	KeyQ: "q",
	KeyR: "r",
	KeyS: "s",
	KeyT: "t",
	KeyU: "u",
	KeyV: "v",
	KeyW: "w",
	KeyX: "x",
	KeyY: "y",
	KeyZ: "z"
}, useHotkeyStore = create()(subscribeWithSelector((m) => ({
	held: {},
	hold: (x) => m((m) => m.held[x] ? m : { held: __spreadProps(__spreadValues({}, m.held), { [x]: !0 }) }),
	release: (x) => m((m) => m.held[x] ? { held: __spreadProps(__spreadValues({}, m.held), { [x]: !1 }) } : m),
	reset: (x = {}) => m(() => ({ held: x })),
	triggers: {}
}))), monitorHotkeys = (m) => {
	let x = (m) => {
		let x = keyCodeMap[m.code];
		if (x) {
			useHotkeyStore.getState().hold(x);
			let { held: S, triggers: C } = useHotkeyStore.getState();
			Object.values(C).forEach(({ combo: x, cb: C }) => {
				Object.entries(x).every(([m, x]) => x === !!S[m]) && Object.entries(S).every(([m, S]) => S === !!x[m]) && (m.preventDefault(), C());
			}), x !== "meta" && x !== "ctrl" && x !== "shift" && useHotkeyStore.getState().release(x);
		}
	}, S = (m) => {
		let x = keyCodeMap[m.code];
		x && (x === "meta" ? useHotkeyStore.getState().reset() : useHotkeyStore.getState().release(x));
	}, C = (m) => {
		document.visibilityState === "hidden" && useHotkeyStore.getState().reset();
	};
	return m.addEventListener("keydown", x), m.addEventListener("keyup", S), m.addEventListener("visibilitychange", C), () => {
		m.removeEventListener("keydown", x), m.removeEventListener("keyup", S), m.removeEventListener("visibilitychange", C);
	};
}, useMonitorHotkeys = () => {
	useEffect(() => monitorHotkeys(document), []);
}, useHotkey = (m, x) => {
	useEffect(() => useHotkeyStore.setState((S) => ({ triggers: __spreadProps(__spreadValues({}, S.triggers), { [`${Object.keys(m).join("+")}`]: {
		combo: m,
		cb: x
	} }) })), []);
}, EMPTY_HISTORY_INDEX = 0;
function debounce(m, x = 300) {
	let S;
	return (...C) => {
		clearTimeout(S), S = setTimeout(() => {
			m(...C);
		}, x);
	};
}
var tidyState = (m) => __spreadProps(__spreadValues({}, m), { ui: __spreadProps(__spreadValues({}, m.ui), { field: { focus: null } }) }), createHistorySlice = (m, x) => ({
	initialAppState: {},
	index: EMPTY_HISTORY_INDEX,
	histories: [],
	hasPast: () => x().history.index > EMPTY_HISTORY_INDEX,
	hasFuture: () => x().history.index < x().history.histories.length - 1,
	prevHistory: () => {
		let { history: m } = x();
		return m.hasPast() ? m.histories[m.index - 1] : null;
	},
	nextHistory: () => {
		let m = x().history;
		return m.hasFuture() ? m.histories[m.index + 1] : null;
	},
	currentHistory: () => x().history.histories[x().history.index],
	back: () => {
		let { history: S, dispatch: C } = x();
		S.hasPast() && (C({
			type: "set",
			state: tidyState(S.prevHistory()?.state || S.initialAppState)
		}), m({ history: __spreadProps(__spreadValues({}, S), { index: S.index - 1 }) }));
	},
	forward: () => {
		let { history: S, dispatch: C } = x();
		if (S.hasFuture()) {
			let x = S.nextHistory()?.state;
			C({
				type: "set",
				state: x ? tidyState(x) : {}
			}), m({ history: __spreadProps(__spreadValues({}, S), { index: S.index + 1 }) });
		}
	},
	setHistories: (S) => {
		let { dispatch: C, history: T } = x();
		C({
			type: "set",
			state: S[S.length - 1]?.state || T.initialAppState
		}), m({ history: __spreadProps(__spreadValues({}, T), {
			histories: S,
			index: S.length - 1
		}) });
	},
	setHistoryIndex: (S) => {
		let { dispatch: C, history: T } = x();
		C({
			type: "set",
			state: T.histories[S]?.state || T.initialAppState
		}), m({ history: __spreadProps(__spreadValues({}, T), { index: S }) });
	},
	record: debounce((S) => {
		let { histories: C, index: T } = x().history, D = {
			state: S,
			id: generateId("history")
		}, O = [...C.slice(0, T + 1), D];
		m({ history: __spreadProps(__spreadValues({}, x().history), {
			histories: O,
			index: O.length - 1
		}) });
	}, 250)
});
function useRegisterHistorySlice(m, { histories: x, index: S, initialAppState: C }) {
	useEffect(() => m.setState({ history: __spreadProps(__spreadValues({}, m.getState().history), {
		histories: x,
		index: S,
		initialAppState: C
	}) }), [
		x,
		S,
		C
	]);
	let T = () => {
		m.getState().history.back();
	}, D = () => {
		m.getState().history.forward();
	};
	useHotkey({
		meta: !0,
		z: !0
	}, T), useHotkey({
		meta: !0,
		shift: !0,
		z: !0
	}, D), useHotkey({
		meta: !0,
		y: !0
	}, D), useHotkey({
		ctrl: !0,
		z: !0
	}, T), useHotkey({
		ctrl: !0,
		shift: !0,
		z: !0
	}, D), useHotkey({
		ctrl: !0,
		y: !0
	}, D);
}
init_react_import();
var createNodesSlice = (m, x) => ({
	nodes: {},
	registerNode: (S, C) => {
		let T = x().nodes, D = {
			id: S,
			methods: {
				sync: () => null,
				hideOverlay: () => null,
				showOverlay: () => null
			},
			element: null
		}, O = T.nodes[S];
		m({ nodes: __spreadProps(__spreadValues({}, T), { nodes: __spreadProps(__spreadValues({}, T.nodes), { [S]: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, D), O), C), { id: S }) }) }) });
	},
	unregisterNode: (S) => {
		let C = x().nodes;
		if (C.nodes[S]) {
			let x = __spreadValues({}, C.nodes);
			delete x[S], m({ nodes: __spreadProps(__spreadValues({}, C), { nodes: x }) });
		}
	}
});
init_react_import(), init_react_import();
var flattenData = (m, x) => {
	let S = [];
	return walkAppState(m, x, (m) => m, (m) => (S.push(m), null)), S;
}, createPermissionsSlice = (m, x) => {
	let S = (...S) => __async(void 0, [...S], function* (S = {}, C) {
		let { state: T, permissions: D, config: O } = x(), { cache: k, globalPermissions: A } = D, j = (S, C = !1) => __async(void 0, null, function* () {
			let { config: T, state: D, setComponentLoading: O } = x(), j = S.type === "root" ? T.root : T.components[S.type];
			if (!j) return;
			let M = __spreadValues(__spreadValues({}, A), j.permissions);
			if (j.resolvePermissions) {
				let T = getChanged(S, k[S.props.id]?.lastData);
				if (Object.values(T).some((m) => m === !0) || C) {
					let C = O(S.props.id, !0, 50), A = yield j.resolvePermissions(S, {
						changed: T,
						lastPermissions: k[S.props.id]?.lastPermissions || null,
						permissions: M,
						appState: makeStatePublic(D),
						lastData: k[S.props.id]?.lastData || null
					}), N = x().permissions;
					m({ permissions: __spreadProps(__spreadValues({}, N), {
						cache: __spreadProps(__spreadValues({}, N.cache), { [S.props.id]: {
							lastData: S,
							lastPermissions: A
						} }),
						resolvedPermissions: __spreadProps(__spreadValues({}, N.resolvedPermissions), { [S.props.id]: A })
					}) }), C();
				}
			}
		}), M = (m = !1) => {
			let { state: S } = x();
			j({
				type: "root",
				props: __spreadProps(__spreadValues({}, S.data.root.props), { id: "root" })
			}, m);
		}, { item: N, type: P, root: F } = S;
		N ? yield j(N, C) : P ? flattenData(T, O).filter((m) => m.type === P).map((m) => __async(void 0, null, function* () {
			yield j(m, C);
		})) : F ? M(C) : flattenData(T, O).map((m) => __async(void 0, null, function* () {
			yield j(m, C);
		}));
	});
	return {
		cache: {},
		globalPermissions: {
			drag: !0,
			edit: !0,
			delete: !0,
			duplicate: !0,
			insert: !0
		},
		resolvedPermissions: {},
		getPermissions: ({ item: m, type: S, root: C } = {}) => {
			let { config: T, permissions: D } = x(), { globalPermissions: O, resolvedPermissions: k } = D;
			if (m) {
				let x = T.components[m.type], S = __spreadValues(__spreadValues({}, O), x?.permissions), C = k[m.props.id];
				return C ? __spreadValues(__spreadValues({}, O), C) : S;
			} else if (S) {
				let m = T.components[S];
				return __spreadValues(__spreadValues({}, O), m?.permissions);
			} else if (C) {
				let m = T.root, x = __spreadValues(__spreadValues({}, O), m?.permissions), S = k.root;
				return S ? __spreadValues(__spreadValues({}, O), S) : x;
			}
			return O;
		},
		resolvePermissions: S,
		refreshPermissions: (m) => S(m, !0)
	};
}, useRegisterPermissionsSlice = (m, x) => {
	useEffect(() => {
		let { permissions: S } = m.getState(), { globalPermissions: C } = S;
		m.setState({ permissions: __spreadProps(__spreadValues({}, S), { globalPermissions: __spreadValues(__spreadValues({}, C), x) }) }), S.resolvePermissions();
	}, [x]), useEffect(() => m.subscribe((m) => m.state.data, () => {
		m.getState().permissions.resolvePermissions();
	}), []), useEffect(() => m.subscribe((m) => m.config, () => {
		m.getState().permissions.resolvePermissions();
	}), []);
};
init_react_import();
var createFieldsSlice = (m, x) => ({
	fields: {},
	loading: !1,
	lastResolvedData: {},
	id: void 0
}), useRegisterFieldsSlice = (m, x) => {
	let S = useCallback((S) => __async(void 0, null, function* () {
		let { fields: C, lastResolvedData: T } = m.getState().fields, D = m.getState().state.indexes.nodes, O = D[x || "root"], k = O?.data, A = (O?.parentId ? D[O.parentId] : null)?.data || null, { getComponentConfig: j, state: M } = m.getState(), N = j(k?.type);
		if (!k || !N) return;
		let P = N.fields || {}, F = N.resolveFields, I = C;
		if (S && (m.setState((m) => ({ fields: __spreadProps(__spreadValues({}, m.fields), {
			fields: P,
			id: x
		}) })), I = P), F) {
			let S = setTimeout(() => {
				m.setState((m) => ({ fields: __spreadProps(__spreadValues({}, m.fields), { loading: !0 }) }));
			}, 50), C = T.props?.id === x ? T : null, D = yield F(k, {
				changed: getChanged(k, C),
				fields: P,
				lastFields: I,
				lastData: C,
				appState: makeStatePublic(M),
				parent: A
			});
			if (clearTimeout(S), m.getState().selectedItem?.props.id !== x) return;
			m.setState({ fields: {
				fields: D,
				loading: !1,
				lastResolvedData: k,
				id: x
			} });
		} else m.setState((m) => ({ fields: __spreadProps(__spreadValues({}, m.fields), {
			fields: P,
			id: x
		}) }));
	}), [x]);
	useEffect(() => (S(!0), m.subscribe((m) => m.state.indexes.nodes[x || "root"], () => S())), [x]);
};
init_react_import();
var toRoot = (m) => {
	if ("type" in m && m.type !== "root") throw Error("Converting non-root item to root.");
	let { readOnly: x } = m;
	if (m.props) {
		if ("id" in m.props) {
			let S = m.props, { id: C } = S;
			return {
				props: __objRest(S, ["id"]),
				readOnly: x
			};
		}
		return {
			props: m.props,
			readOnly: x
		};
	}
	return {
		props: {},
		readOnly: x
	};
}, defaultPageFields = { title: { type: "text" } }, createAppStore = (m) => create()(subscribeWithSelector((x, S) => __spreadProps(__spreadValues({
	state: defaultAppState,
	config: { components: {} },
	componentState: {},
	plugins: [],
	overrides: {},
	viewports: defaultViewports,
	zoomConfig: {
		autoZoom: 1,
		rootHeight: 0,
		zoom: 1
	},
	status: "LOADING",
	iframe: {},
	metadata: {},
	fieldTransforms: {}
}, m), {
	fields: createFieldsSlice(x, S),
	history: createHistorySlice(x, S),
	nodes: createNodesSlice(x, S),
	permissions: createPermissionsSlice(x, S),
	getComponentConfig: (m) => {
		let { config: x, selectedItem: C } = S(), T = x.root?.fields || defaultPageFields;
		return m && m !== "root" ? x.components[m] : C ? x.components[C.type] : __spreadProps(__spreadValues({}, x.root), { fields: T });
	},
	selectedItem: (m?.state)?.ui.itemSelector ? getItem((m?.state)?.ui.itemSelector, m.state) : null,
	dispatch: (m) => x((x) => {
		var C, T;
		let { record: D } = S().history, O = createReducer({
			record: D,
			appStore: x
		})(x.state, m), k = O.ui.itemSelector ? getItem(O.ui.itemSelector, O) : null;
		return (T = (C = S()).onAction) == null || T.call(C, m, O, S().state), __spreadProps(__spreadValues({}, x), {
			state: O,
			selectedItem: k
		});
	}),
	setZoomConfig: (m) => x({ zoomConfig: m }),
	setStatus: (m) => x({ status: m }),
	setComponentState: (m) => x({ componentState: m }),
	pendingLoadTimeouts: {},
	setComponentLoading: (m, C = !0, T = 0) => {
		let { setComponentState: D, pendingLoadTimeouts: O } = S(), k = generateId(), A = () => {
			let { componentState: x } = S();
			D(__spreadProps(__spreadValues({}, x), { [m]: __spreadProps(__spreadValues({}, x[m]), { loadingCount: (x[m]?.loadingCount || 0) + 1 }) }));
		}, j = () => {
			let { componentState: C } = S();
			clearTimeout(M), delete O[k], x({ pendingLoadTimeouts: O }), D(__spreadProps(__spreadValues({}, C), { [m]: __spreadProps(__spreadValues({}, C[m]), { loadingCount: Math.max((C[m]?.loadingCount || 0) - 1, 0) }) }));
		}, M = setTimeout(() => {
			C ? A() : j(), delete O[k], x({ pendingLoadTimeouts: O });
		}, T);
		return x({ pendingLoadTimeouts: __spreadProps(__spreadValues({}, O), { [m]: M }) }), j;
	},
	unsetComponentLoading: (m) => {
		let { setComponentLoading: x } = S();
		x(m, !1);
	},
	setUi: (m, S) => x((x) => {
		let C = createReducer({
			record: () => {},
			appStore: x
		})(x.state, {
			type: "setUi",
			ui: m,
			recordHistory: S
		}), T = C.ui.itemSelector ? getItem(C.ui.itemSelector, C) : null;
		return __spreadProps(__spreadValues({}, x), {
			state: C,
			selectedItem: T
		});
	}),
	resolveComponentData: (m, x) => __async(void 0, null, function* () {
		let { config: C, metadata: T, setComponentLoading: D, permissions: O } = S(), k = {};
		return yield resolveComponentData(m, C, T, (m) => {
			let x = "id" in m.props ? m.props.id : "root";
			k[x] = D(x, !0, 50);
		}, (m) => __async(void 0, null, function* () {
			let x = "id" in m.props ? m.props.id : "root";
			"type" in m ? yield O.refreshPermissions({ item: m }) : yield O.refreshPermissions({ root: !0 }), k[x]();
		}), x);
	}),
	resolveAndCommitData: () => __async(void 0, null, function* () {
		let { config: m, state: x, dispatch: C, resolveComponentData: T } = S();
		walkAppState(x, m, (m) => m, (m) => (T(m, "load").then((m) => {
			let { state: x } = S(), T = x.indexes.nodes[m.node.props.id];
			if (T && m.didChange) if (m.node.props.id === "root") C({
				type: "replaceRoot",
				root: toRoot(m.node)
			});
			else {
				let S = `${T.parentId}:${T.zone}`, D = x.indexes.zones[S].contentIds.indexOf(m.node.props.id);
				C({
					type: "replace",
					data: m.node,
					destinationIndex: D,
					destinationZone: S
				});
			}
		}), m));
	})
}))), appStoreContext = createContext(createAppStore());
function useAppStore(m) {
	return useStore(useContext(appStoreContext), m);
}
function useAppStoreApi() {
	return useContext(appStoreContext);
}
init_react_import(), init_react_import(), init_react_import();
var isProduction = process.env.NODE_ENV === "production", prefix = "Invariant failed";
function invariant$1(m, x) {
	if (!m) {
		if (isProduction) throw Error(prefix);
		var S = typeof x == "function" ? x() : x, C = S ? `${prefix}: ${S}` : prefix;
		throw Error(C);
	}
}
var getRect = function(m) {
	var x = m.top, S = m.right, C = m.bottom, T = m.left;
	return {
		top: x,
		right: S,
		bottom: C,
		left: T,
		width: S - T,
		height: C - x,
		x: T,
		y: x,
		center: {
			x: (S + T) / 2,
			y: (C + x) / 2
		}
	};
}, expand = function(m, x) {
	return {
		top: m.top - x.top,
		left: m.left - x.left,
		bottom: m.bottom + x.bottom,
		right: m.right + x.right
	};
}, shrink = function(m, x) {
	return {
		top: m.top + x.top,
		left: m.left + x.left,
		bottom: m.bottom - x.bottom,
		right: m.right - x.right
	};
}, noSpacing = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}, createBox$1 = function(m) {
	var x = m.borderBox, S = m.margin, C = S === void 0 ? noSpacing : S, T = m.border, D = T === void 0 ? noSpacing : T, O = m.padding, k = O === void 0 ? noSpacing : O, A = getRect(expand(x, C)), j = getRect(shrink(x, D)), M = getRect(shrink(j, k));
	return {
		marginBox: A,
		borderBox: getRect(x),
		paddingBox: j,
		contentBox: M,
		margin: C,
		border: D,
		padding: k
	};
}, parse = function(m) {
	var x = m.slice(0, -2);
	if (m.slice(-2) !== "px") return 0;
	var S = Number(x);
	return isNaN(S) && (process.env.NODE_ENV === "production" ? invariant$1(!1) : invariant$1(!1, "Could not parse value [raw: " + m + ", without suffix: " + x + "]")), S;
}, calculateBox = function(m, x) {
	return createBox$1({
		borderBox: m,
		margin: {
			top: parse(x.marginTop),
			right: parse(x.marginRight),
			bottom: parse(x.marginBottom),
			left: parse(x.marginLeft)
		},
		padding: {
			top: parse(x.paddingTop),
			right: parse(x.paddingRight),
			bottom: parse(x.paddingBottom),
			left: parse(x.paddingLeft)
		},
		border: {
			top: parse(x.borderTopWidth),
			right: parse(x.borderRightWidth),
			bottom: parse(x.borderBottomWidth),
			left: parse(x.borderLeftWidth)
		}
	});
}, getBox = function(m) {
	return calculateBox(m.getBoundingClientRect(), window.getComputedStyle(m));
}, RESET_ZOOM_SMALLER_THAN_FRAME = !0, getZoomConfig = (m, x, S) => {
	let { width: C, height: T } = getBox(x).contentBox, D = m.height === "auto" ? T : m.height, O = 0, k = 1;
	if (m.width > C || D > T) {
		let x = Math.min(C / m.width, 1), A = Math.min(T / D, 1);
		S = x, x < A ? O = D / S : (O = D, S = A), k = S;
	} else RESET_ZOOM_SMALLER_THAN_FRAME && (k = 1, S = 1, O = D);
	return {
		autoZoom: k,
		rootHeight: O,
		zoom: S
	};
}, useResetAutoZoom = (m) => {
	let x = useAppStoreApi();
	return (S) => {
		let { state: C, zoomConfig: T, setZoomConfig: D } = x.getState(), { viewports: O } = C.ui, k = S?.viewports || O;
		m.current && D(getZoomConfig(k?.current, m.current, T.zoom));
	};
};
init_react_import();
var getClassName2 = get_class_name_factory_default("Loader", {
	Loader: "_Loader_nacdm_13",
	"loader-animation": "_loader-animation_nacdm_1"
}), Loader = (m) => {
	var x = m, { color: S, size: C = 16 } = x, T = __objRest(x, ["color", "size"]);
	return /* @__PURE__ */ jsx("span", __spreadValues({
		className: getClassName2(),
		style: {
			width: C,
			height: C,
			color: S
		},
		"aria-label": "loading"
	}, T));
}, getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default), IconButton = ({ children: m, href: x, onClick: S, variant: C = "primary", type: T, disabled: D, tabIndex: O, newTab: k, fullWidth: A, title: j }) => {
	let [M, N] = useState(!1);
	return /* @__PURE__ */ jsxs(x ? "a" : "button", {
		className: getClassName3({
			primary: C === "primary",
			secondary: C === "secondary",
			disabled: D,
			fullWidth: A
		}),
		onClick: (m) => {
			S && (N(!0), Promise.resolve(S(m)).then(() => {
				N(!1);
			}));
		},
		type: T,
		disabled: D || M,
		tabIndex: O,
		target: k ? "_blank" : void 0,
		rel: k ? "noreferrer" : void 0,
		href: x,
		title: j,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: getClassName3("title"),
				children: j
			}),
			m,
			M && /* @__PURE__ */ jsxs(Fragment$1, { children: ["\xA0\xA0", /* @__PURE__ */ jsx(Loader, { size: 14 })] })
		]
	});
};
init_react_import(), init_react_import();
var Button_module_default = {
	Button: "_Button_10byl_1",
	"Button--medium": "_Button--medium_10byl_29",
	"Button--large": "_Button--large_10byl_37",
	"Button-icon": "_Button-icon_10byl_44",
	"Button--primary": "_Button--primary_10byl_48",
	"Button--secondary": "_Button--secondary_10byl_67",
	"Button--flush": "_Button--flush_10byl_84",
	"Button--disabled": "_Button--disabled_10byl_88",
	"Button--fullWidth": "_Button--fullWidth_10byl_95",
	"Button-spinner": "_Button-spinner_10byl_100"
};
init_react_import();
var dataAttrRe = /^(data-.*)$/, filterDataAttrs = (m) => {
	let x = {};
	for (let S in m) Object.prototype.hasOwnProperty.call(m, S) && dataAttrRe.test(S) && (x[S] = m[S]);
	return x;
}, getClassName4 = get_class_name_factory_default("Button", Button_module_default), Button = (m) => {
	var x = m, { children: S, href: C, onClick: T, variant: D = "primary", type: O, disabled: k, tabIndex: A, newTab: j, fullWidth: M, icon: N, size: F = "medium", loading: I = !1 } = x, L = __objRest(x, [
		"children",
		"href",
		"onClick",
		"variant",
		"type",
		"disabled",
		"tabIndex",
		"newTab",
		"fullWidth",
		"icon",
		"size",
		"loading"
	]);
	let [R, z] = useState(I);
	useEffect(() => z(I), [I]);
	let B = C ? "a" : O ? "button" : "span", H = filterDataAttrs(L);
	return /* @__PURE__ */ jsxs(B, __spreadProps(__spreadValues({
		className: getClassName4({
			primary: D === "primary",
			secondary: D === "secondary",
			disabled: k,
			fullWidth: M,
			[F]: !0
		}),
		onClick: (m) => {
			T && (z(!0), Promise.resolve(T(m)).then(() => {
				z(!1);
			}));
		},
		type: O,
		disabled: k || R,
		tabIndex: A,
		target: j ? "_blank" : void 0,
		rel: j ? "noreferrer" : void 0,
		href: C
	}, H), { children: [
		N && /* @__PURE__ */ jsx("div", {
			className: getClassName4("icon"),
			children: N
		}),
		S,
		R && /* @__PURE__ */ jsx("div", {
			className: getClassName4("spinner"),
			children: /* @__PURE__ */ jsx(Loader, { size: 14 })
		})
	] }));
};
init_react_import(), init_react_import();
var styles_module_default3 = {
	InputWrapper: "_InputWrapper_bsxfo_1",
	"Input-label": "_Input-label_bsxfo_5",
	"Input-labelIcon": "_Input-labelIcon_bsxfo_14",
	"Input-disabledIcon": "_Input-disabledIcon_bsxfo_21",
	"Input-input": "_Input-input_bsxfo_26",
	Input: "_Input_bsxfo_1",
	"Input--readOnly": "_Input--readOnly_bsxfo_82",
	"Input-radioGroupItems": "_Input-radioGroupItems_bsxfo_93",
	"Input-radio": "_Input-radio_bsxfo_93",
	"Input-radioInner": "_Input-radioInner_bsxfo_110",
	"Input-radioInput": "_Input-radioInput_bsxfo_155"
};
init_react_import(), init_react_import(), init_react_import();
var styles_module_default4 = {
	ArrayField: "_ArrayField_14u8o_5",
	"ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_14u8o_13",
	"ArrayField-addButton": "_ArrayField-addButton_14u8o_18",
	"ArrayField--hasItems": "_ArrayField--hasItems_14u8o_33",
	"ArrayField-inner": "_ArrayField-inner_14u8o_59",
	ArrayFieldItem: "_ArrayFieldItem_14u8o_67",
	"ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_14u8o_78",
	"ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_14u8o_82",
	"ArrayFieldItem-summary": "_ArrayFieldItem-summary_14u8o_97",
	"ArrayField--addDisabled": "_ArrayField--addDisabled_14u8o_127",
	"ArrayFieldItem-body": "_ArrayFieldItem-body_14u8o_166",
	"ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_14u8o_175",
	"ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_14u8o_183",
	"ArrayFieldItem-actions": "_ArrayFieldItem-actions_14u8o_189"
};
init_react_import(), init_react_import(), init_react_import();
var toKebabCase = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mergeClasses = (...m) => m.filter((m, x, S) => !!m && m.trim() !== "" && S.indexOf(m) === x).join(" ").trim();
init_react_import(), init_react_import();
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Icon = forwardRef((m, x) => {
	var S = m, { color: C = "currentColor", size: T = 24, strokeWidth: O = 2, absoluteStrokeWidth: k, className: A = "", children: j, iconNode: M } = S, N = __objRest(S, [
		"color",
		"size",
		"strokeWidth",
		"absoluteStrokeWidth",
		"className",
		"children",
		"iconNode"
	]);
	return createElement("svg", __spreadValues(__spreadProps(__spreadValues({ ref: x }, defaultAttributes), {
		width: T,
		height: T,
		stroke: C,
		strokeWidth: k ? Number(O) * 24 / Number(T) : O,
		className: mergeClasses("lucide", A)
	}), N), [...M.map(([m, x]) => createElement(m, x)), ...Array.isArray(j) ? j : [j]]);
}), createLucideIcon = (m, x) => {
	let S = forwardRef((S, C) => {
		var T = S, { className: O } = T, k = __objRest(T, ["className"]);
		return createElement(Icon, __spreadValues({
			ref: C,
			iconNode: x,
			className: mergeClasses(`lucide-${toKebabCase(m)}`, O)
		}, k));
	});
	return S.displayName = `${m}`, S;
};
init_react_import();
var ChevronDown = createLucideIcon("ChevronDown", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
init_react_import();
var ChevronUp = createLucideIcon("ChevronUp", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
init_react_import();
var CircleCheckBig = createLucideIcon("CircleCheckBig", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
init_react_import();
var Copy = createLucideIcon("Copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
init_react_import();
var CornerLeftUp = createLucideIcon("CornerLeftUp", [["polyline", {
	points: "14 9 9 4 4 9",
	key: "m9oyvo"
}], ["path", {
	d: "M20 20h-7a4 4 0 0 1-4-4V4",
	key: "1blwi3"
}]]);
init_react_import();
var EllipsisVertical = createLucideIcon("EllipsisVertical", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}]
]);
init_react_import();
var Globe = createLucideIcon("Globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
init_react_import();
var Hash = createLucideIcon("Hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]);
init_react_import();
var Layers = createLucideIcon("Layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
init_react_import();
var LayoutGrid = createLucideIcon("LayoutGrid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]);
init_react_import();
var Link = createLucideIcon("Link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]);
init_react_import();
var List = createLucideIcon("List", [
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M3 18h.01",
		key: "1tta3j"
	}],
	["path", {
		d: "M3 6h.01",
		key: "1rqtza"
	}],
	["path", {
		d: "M8 12h13",
		key: "1za7za"
	}],
	["path", {
		d: "M8 18h13",
		key: "1lx6n3"
	}],
	["path", {
		d: "M8 6h13",
		key: "ik3vkj"
	}]
]);
init_react_import();
var LockOpen = createLucideIcon("LockOpen", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 9.9-1",
	key: "1mm8w8"
}]]);
init_react_import();
var Lock = createLucideIcon("Lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
init_react_import();
var Monitor = createLucideIcon("Monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]);
init_react_import();
var PanelLeft = createLucideIcon("PanelLeft", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]);
init_react_import();
var PanelRight = createLucideIcon("PanelRight", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M15 3v18",
	key: "14nvp0"
}]]);
init_react_import();
var Plus = createLucideIcon("Plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
init_react_import();
var Redo2 = createLucideIcon("Redo2", [["path", {
	d: "m15 14 5-5-5-5",
	key: "12vg1m"
}], ["path", {
	d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
	key: "6uklza"
}]]);
init_react_import();
var Search = createLucideIcon("Search", [["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}], ["path", {
	d: "m21 21-4.3-4.3",
	key: "1qie3q"
}]]);
init_react_import();
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
	["line", {
		x1: "21",
		x2: "14",
		y1: "4",
		y2: "4",
		key: "obuewd"
	}],
	["line", {
		x1: "10",
		x2: "3",
		y1: "4",
		y2: "4",
		key: "1q6298"
	}],
	["line", {
		x1: "21",
		x2: "12",
		y1: "12",
		y2: "12",
		key: "1iu8h1"
	}],
	["line", {
		x1: "8",
		x2: "3",
		y1: "12",
		y2: "12",
		key: "ntss68"
	}],
	["line", {
		x1: "21",
		x2: "16",
		y1: "20",
		y2: "20",
		key: "14d8ph"
	}],
	["line", {
		x1: "12",
		x2: "3",
		y1: "20",
		y2: "20",
		key: "m0wm8r"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "2",
		y2: "6",
		key: "14e1ph"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "10",
		y2: "14",
		key: "1i6ji0"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "18",
		y2: "22",
		key: "1lctlv"
	}]
]);
init_react_import();
var Smartphone = createLucideIcon("Smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]);
init_react_import();
var Tablet = createLucideIcon("Tablet", [["rect", {
	width: "16",
	height: "20",
	x: "4",
	y: "2",
	rx: "2",
	ry: "2",
	key: "76otgf"
}], ["line", {
	x1: "12",
	x2: "12.01",
	y1: "18",
	y2: "18",
	key: "1dp563"
}]]);
init_react_import();
var Trash = createLucideIcon("Trash", [
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
		key: "4alrt4"
	}],
	["path", {
		d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
		key: "v07s0e"
	}]
]);
init_react_import();
var Type = createLucideIcon("Type", [
	["polyline", {
		points: "4 7 4 4 20 4 20 7",
		key: "1nosan"
	}],
	["line", {
		x1: "9",
		x2: "15",
		y1: "20",
		y2: "20",
		key: "swin9y"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "4",
		y2: "20",
		key: "1tx1rr"
	}]
]);
init_react_import();
var Undo2 = createLucideIcon("Undo2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]);
init_react_import();
var ZoomIn = createLucideIcon("ZoomIn", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "11",
		x2: "11",
		y1: "8",
		y2: "14",
		key: "1vmskp"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]);
init_react_import();
var ZoomOut = createLucideIcon("ZoomOut", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]);
init_react_import(), init_react_import(), init_react_import();
var getClassName5 = get_class_name_factory_default("DragIcon", {
	DragIcon: "_DragIcon_17p8x_1",
	"DragIcon--disabled": "_DragIcon--disabled_17p8x_8"
}), DragIcon = ({ isDragDisabled: m }) => /* @__PURE__ */ jsx("div", {
	className: getClassName5({ disabled: m }),
	children: /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 20 20",
		width: "12",
		fill: "currentColor",
		children: /* @__PURE__ */ jsx("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" })
	})
});
init_react_import(), init_react_import();
var touchDefault = { delay: {
	value: 200,
	tolerance: 10
} }, otherDefault = {
	delay: {
		value: 200,
		tolerance: 10
	},
	distance: { value: 5 }
}, useSensors = ({ other: m = otherDefault, mouse: x, touch: S = touchDefault } = {
	touch: touchDefault,
	other: otherDefault
}) => {
	let [C] = useState(() => [PointerSensor.configure({ activationConstraints(C, T) {
		let { pointerType: D, target: O } = C;
		return D === "mouse" && isElement(O) && (T.handle === O || T.handle?.contains(O)) ? x : D === "touch" ? S : m;
	} })]);
	return C;
};
init_react_import(), init_react_import(), init_react_import();
var DEBUG = !1, debugElements = {}, timeout, collisionDebug = (m, x, S, C, T) => {
	if (!DEBUG) return;
	let D = `${S}-debug`;
	clearTimeout(timeout), timeout = setTimeout(() => {
		Object.entries(debugElements).forEach(([m, { svg: x }]) => {
			x.remove(), delete debugElements[m];
		});
	}, 1e3), requestAnimationFrame(() => {
		let S = debugElements[D], O = debugElements[D]?.line, k = debugElements[D]?.text;
		if (!S) {
			let m = "http://www.w3.org/2000/svg", x = document.createElementNS(m, "svg");
			O = document.createElementNS(m, "line"), k = document.createElementNS(m, "text"), x.setAttribute("id", D), x.setAttribute("style", "position: fixed; height: 100%; width: 100%; pointer-events: none; top: 0px; left: 0px;"), x.appendChild(O), x.appendChild(k), k.setAttribute("fill", "black"), document.body.appendChild(x), debugElements[D] = {
				svg: x,
				line: O,
				text: k
			};
		}
		O.setAttribute("x1", m.x.toString()), O.setAttribute("x2", x.x.toString()), O.setAttribute("y1", m.y.toString()), O.setAttribute("y2", x.y.toString()), O.setAttribute("style", `stroke:${C};stroke-width:2`), k.setAttribute("x", (m.x - (m.x - x.x) / 2).toString()), k.setAttribute("y", (m.y - (m.y - x.y) / 2).toString()), T && (k.innerHTML = T);
	});
}, distanceChange = "increasing", directionalCollision = (m, x) => {
	let { dragOperation: S, droppable: C } = m, { shape: T } = C, { position: D } = S, O = S.shape?.current;
	if (!O || !T) return null;
	let k = T.center, A = Math.sqrt((k.x - x.x) ** 2 + (k.y - x.y) ** 2), j = Math.sqrt((k.x - D.current.x) ** 2 + (k.y - D.current.y) ** 2);
	return distanceChange = j === A ? distanceChange : j < A ? "decreasing" : "increasing", collisionDebug(O.center, k, C.id.toString(), "rebeccapurple"), distanceChange === "decreasing" ? {
		id: C.id,
		value: 1,
		type: CollisionType.Collision
	} : null;
};
init_react_import();
var getDirection = (m, x) => m === "dynamic" ? Math.abs(x.y) > Math.abs(x.x) ? x.y === 0 ? null : x.y > 0 ? "down" : "up" : x.x === 0 ? null : x.x > 0 ? "right" : "left" : m === "x" ? x.x === 0 ? null : x.x > 0 ? "right" : "left" : x.y === 0 ? null : x.y > 0 ? "down" : "up";
init_react_import();
var getMidpointImpact = (m, x, S, C = 0) => {
	let T = m.boundingRectangle, D = x.center;
	if (S === "down") {
		let m = C * x.boundingRectangle.height;
		return T.bottom >= D.y + m;
	} else if (S === "up") {
		let m = C * x.boundingRectangle.height;
		return T.top < D.y - m;
	} else if (S === "left") {
		let m = C * x.boundingRectangle.width;
		return D.x - m >= T.left;
	}
	let O = C * x.boundingRectangle.width;
	return T.right - O >= D.x;
};
init_react_import();
var INTERVAL_SENSITIVITY = 10, intervalCache = {
	current: {
		x: 0,
		y: 0
	},
	delta: {
		x: 0,
		y: 0
	},
	previous: {
		x: 0,
		y: 0
	},
	direction: null
}, trackMovementInterval = (m, x = "dynamic") => (intervalCache.current = m, intervalCache.delta = {
	x: m.x - intervalCache.previous.x,
	y: m.y - intervalCache.previous.y
}, intervalCache.direction = getDirection(x, intervalCache.delta) || intervalCache.direction, (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) && (intervalCache.previous = Point.from(m)), intervalCache);
init_react_import();
var pointerIntersection = ({ dragOperation: m, droppable: x }) => {
	let S = m.position.current;
	if (!S) return null;
	let { id: C } = x;
	return x.shape && x.shape.containsPoint(S) ? {
		id: C,
		value: 1 / Point.distance(x.shape.center, S),
		type: CollisionType.PointerIntersection,
		priority: CollisionPriority.High
	} : null;
}, closestCorners = (m) => {
	let { dragOperation: x, droppable: S } = m, { shape: C, position: T } = x;
	if (!S.shape) return null;
	let D = C ? Rectangle.from(C.current.boundingRectangle).corners : void 0, O = Rectangle.from(S.shape.boundingRectangle).corners.reduce((m, x, S) => m + Point.distance(Point.from(x), D?.[S] ?? T.current), 0) / 4;
	return {
		id: S.id,
		value: 1 / O,
		type: CollisionType.Collision,
		priority: CollisionPriority.Normal
	};
};
init_react_import();
var collisionStore = createStore(() => ({ fallbackEnabled: !1 })), flushNext = "", createDynamicCollisionDetector = (m, x = .05) => (S) => {
	let { dragOperation: C, droppable: T } = S, { position: D } = C, O = C.shape?.current, { shape: k } = T;
	if (!O || !k) return null;
	let { center: A } = O, { fallbackEnabled: j } = collisionStore.getState(), M = trackMovementInterval(D.current, m), N = { direction: M.direction }, { center: P } = k, F = getMidpointImpact(O, k, M.direction, x);
	if (C.source?.id === T.id) {
		let m = directionalCollision(S, M.previous);
		if (collisionDebug(A, P, T.id.toString(), "yellow"), m) return __spreadProps(__spreadValues({}, m), {
			priority: CollisionPriority.Highest,
			data: N
		});
	}
	let I = O.intersectionArea(k), L = I / k.area;
	if (I && F) {
		collisionDebug(A, P, T.id.toString(), "green", M.direction);
		let m = {
			id: T.id,
			value: L,
			priority: CollisionPriority.High,
			type: CollisionType.Collision
		}, x = flushNext === T.id;
		return flushNext = "", __spreadProps(__spreadValues({}, m), {
			id: x ? "flush" : m.id,
			data: N
		});
	}
	if (j && C.source?.id !== T.id) {
		let x = k.boundingRectangle.right > O.boundingRectangle.left && k.boundingRectangle.left < O.boundingRectangle.right, C = k.boundingRectangle.bottom > O.boundingRectangle.top && k.boundingRectangle.top < O.boundingRectangle.bottom;
		if (m === "y" && x || C) {
			let x = closestCorners(S);
			if (x) {
				let S = getDirection(m, {
					x: O.center.x - (T.shape?.center.x || 0),
					y: O.center.y - (T.shape?.center.y || 0)
				});
				return N.direction = S, I ? (collisionDebug(A, P, T.id.toString(), "red", S || ""), flushNext = T.id, __spreadProps(__spreadValues({}, x), {
					priority: CollisionPriority.Low,
					data: N
				})) : (collisionDebug(A, P, T.id.toString(), "orange", S || ""), __spreadProps(__spreadValues({}, x), {
					priority: CollisionPriority.Lowest,
					data: N
				}));
			}
		}
	}
	return collisionDebug(A, P, T.id.toString(), "hotpink"), null;
}, SortableProvider = ({ children: m, onDragStart: x, onDragEnd: S, onMove: C }) => /* @__PURE__ */ jsx(DragDropProvider, {
	sensors: useSensors({ mouse: { distance: { value: 5 } } }),
	onDragStart: (m) => x(m.operation.source?.id.toString() ?? ""),
	onDragOver: (m, x) => {
		m.preventDefault();
		let { operation: S } = m, { source: T, target: D } = S;
		if (!T || !D) return;
		let O = T.data.index, k = D.data.index, A = x.collisionObserver.collisions[0]?.data;
		if (O !== k && T.id !== D.id) {
			let m = A?.direction === "up" ? "before" : "after";
			k >= O && --k, m === "after" && (k += 1), C({
				source: O,
				target: k
			});
		}
	},
	onDragEnd: () => {
		setTimeout(() => {
			S();
		}, 250);
	},
	children: m
}), Sortable = ({ id: m, index: x, disabled: S, children: C, type: T = "item" }) => {
	let { ref: D, isDragging: O, isDropping: k, handleRef: A } = useSortable({
		id: m,
		type: T,
		index: x,
		disabled: S,
		data: { index: x },
		collisionDetector: createDynamicCollisionDetector("y")
	});
	return C({
		isDragging: O,
		isDropping: k,
		ref: D,
		handleRef: A
	});
};
init_react_import();
var NestedFieldContext = createContext({}), useNestedFieldContext = () => {
	let m = useContext(NestedFieldContext);
	return __spreadProps(__spreadValues({}, m), { readOnlyFields: m.readOnlyFields || {} });
}, NestedFieldProvider = ({ children: m, name: x, subName: S, wildcardName: C = x, readOnlyFields: T }) => {
	let D = `${x}.${S}`, O = `${C}.${S}`, k = useMemo(() => Object.keys(T).reduce((m, S) => {
		if (S.indexOf(D) > -1 || S.indexOf(O) > -1) {
			let D = new RegExp(`^(${x}|${C}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")), O = S.replace(D, "");
			return __spreadProps(__spreadValues({}, m), { [O]: T[S] });
		}
		return m;
	}, {}), [
		x,
		S,
		C,
		T
	]);
	return /* @__PURE__ */ jsx(NestedFieldContext.Provider, {
		value: {
			readOnlyFields: k,
			localName: S
		},
		children: m
	});
}, getClassName6 = get_class_name_factory_default("ArrayField", styles_module_default4), getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default4), ArrayField = ({ field: m, onChange: x, value: S, name: C, label: T, labelIcon: D, readOnly: O, id: k, Label: A = (m) => /* @__PURE__ */ jsx("div", __spreadValues({}, m)) }) => {
	let j = useAppStore((m) => m.state.ui.arrayState[k]), N = useAppStore((m) => m.setUi), { readOnlyFields: F, localName: I = C } = useNestedFieldContext(), L = S, R = j || {
		items: Array.from(L || []).map((m, x) => ({
			_originalIndex: x,
			_arrayId: `${k}-${x}`
		})),
		openId: ""
	}, [z, H] = useState({
		arrayState: R,
		value: L
	});
	useEffect(() => {
		H({
			arrayState: U.getState().state.ui.arrayState[k] ?? R,
			value: L
		});
	}, [L]);
	let U = useAppStoreApi(), W = useCallback((m) => {
		let x = U.getState().state;
		return { arrayState: __spreadProps(__spreadValues({}, x.ui.arrayState), { [k]: __spreadValues(__spreadValues({}, R), m) }) };
	}, [R, U]), G = useCallback(() => R.items.reduce((m, x) => x._originalIndex > m ? x._originalIndex : m, -1), [R]), K = useCallback((m) => {
		let x = G(), S = Array.from(m || []).map((m, S) => {
			let C = R.items[S], T = {
				_originalIndex: C?._originalIndex === void 0 ? x + 1 : C._originalIndex,
				_arrayId: R.items[S]?._arrayId || `${k}-${x + 1}`
			};
			return T._originalIndex > x && (x = T._originalIndex), T;
		});
		return __spreadProps(__spreadValues({}, R), { items: S });
	}, [R]);
	useEffect(() => {
		R.items.length > 0 && N(W(R));
	}, []);
	let [q, J] = useState(""), Y = !!q, X = !useAppStore((m) => m.permissions.getPermissions({ item: m.selectedItem }).edit), Z = useRef(L), OI = useCallback((x) => {
		if (m.type !== "array" || !m.arrayFields) return;
		let S = U.getState().config;
		return walkField({
			value: x,
			fields: m.arrayFields,
			mappers: { slot: ({ value: m }) => m.map((m) => populateIds(m, S, !0)) },
			config: S
		});
	}, [U, m]);
	if (m.type !== "array" || !m.arrayFields) return null;
	let kI = m.max !== void 0 && z.arrayState.items.length >= m.max || O;
	return /* @__PURE__ */ jsx(A, {
		label: T || C,
		icon: D || /* @__PURE__ */ jsx(List, { size: 16 }),
		el: "div",
		readOnly: O,
		children: /* @__PURE__ */ jsx(SortableProvider, {
			onDragStart: (m) => J(m),
			onDragEnd: () => {
				J(""), x(Z.current);
			},
			onMove: (m) => {
				if (R.items[m.source]._arrayId !== q) return;
				let x = reorder(z.value, m.source, m.target), S = reorder(R.items, m.source, m.target), C = U.getState().state;
				N({ arrayState: __spreadProps(__spreadValues({}, C.ui.arrayState), { [k]: __spreadProps(__spreadValues({}, R), { items: S }) }) }, !1), H({
					value: x,
					arrayState: __spreadProps(__spreadValues({}, R), { items: S })
				}), Z.current = x;
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: getClassName6({
					hasItems: Array.isArray(L) && L.length > 0,
					addDisabled: kI
				}),
				children: [z.arrayState.items.length > 0 && /* @__PURE__ */ jsx("div", {
					className: getClassName6("inner"),
					"data-dnd-container": !0,
					children: z.arrayState.items.map((S, T) => {
						let { _arrayId: D = `${k}-${T}`, _originalIndex: A = T } = S, j = Array.from(z.value || [])[T] || {};
						return /* @__PURE__ */ jsx(Sortable, {
							id: D,
							index: T,
							disabled: O,
							children: ({ isDragging: S, ref: k, handleRef: M }) => /* @__PURE__ */ jsxs("div", {
								ref: k,
								className: getClassNameItem({
									isExpanded: R.openId === D,
									isDragging: S,
									readOnly: O
								}),
								children: [/* @__PURE__ */ jsxs("div", {
									ref: M,
									onClick: (m) => {
										S || (m.preventDefault(), m.stopPropagation(), R.openId === D ? N(W({ openId: "" })) : N(W({ openId: D })));
									},
									className: getClassNameItem("summary"),
									children: [m.getItemSummary ? m.getItemSummary(j, T) : `Item #${A}`, /* @__PURE__ */ jsxs("div", {
										className: getClassNameItem("rhs"),
										children: [!O && /* @__PURE__ */ jsxs("div", {
											className: getClassNameItem("actions"),
											children: [/* @__PURE__ */ jsx("div", {
												className: getClassNameItem("action"),
												children: /* @__PURE__ */ jsx(IconButton, {
													type: "button",
													disabled: !!kI,
													onClick: (m) => {
														m.stopPropagation();
														let S = [...L || []], C = OI(S[T]);
														S.splice(T, 0, C), N(W(K(S)), !1), x(S);
													},
													title: "Duplicate",
													children: /* @__PURE__ */ jsx(Copy, { size: 16 })
												})
											}), /* @__PURE__ */ jsx("div", {
												className: getClassNameItem("action"),
												children: /* @__PURE__ */ jsx(IconButton, {
													type: "button",
													disabled: m.min !== void 0 && m.min >= z.arrayState.items.length,
													onClick: (m) => {
														m.stopPropagation();
														let S = [...L || []], C = [...R.items || []];
														S.splice(T, 1), C.splice(T, 1), N(W({ items: C }), !1), x(S);
													},
													title: "Delete",
													children: /* @__PURE__ */ jsx(Trash, { size: 16 })
												})
											})]
										}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DragIcon, {}) })]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: getClassNameItem("body"),
									children: R.openId === D && /* @__PURE__ */ jsx("fieldset", {
										className: getClassNameItem("fieldset"),
										children: Object.keys(m.arrayFields).map((S) => {
											let O = m.arrayFields[S], k = `${`${C}[${T}]`}.${S}`, A = `${I}[${T}]`, M = `${I}[*]`, N = `${A}.${S}`, P = `${M}.${S}`, R = X || (F[k] === void 0 ? F[P] : F[N]), z = O.label || S;
											return /* @__PURE__ */ jsx(NestedFieldProvider, {
												name: A,
												wildcardName: M,
												subName: S,
												readOnlyFields: F,
												children: /* @__PURE__ */ jsx(AutoFieldPrivate, {
													name: k,
													label: z,
													id: `${D}_${S}`,
													readOnly: R,
													field: __spreadProps(__spreadValues({}, O), { label: z }),
													value: j[S],
													onChange: (m, C) => {
														x(replace(L, T, __spreadProps(__spreadValues({}, j), { [S]: m })), C);
													}
												})
											}, k);
										})
									})
								})]
							})
						}, D);
					})
				}), !kI && /* @__PURE__ */ jsx("button", {
					type: "button",
					className: getClassName6("addButton"),
					onClick: () => {
						if (Y) return;
						let S = L || [], C = defaultSlots(OI(m.defaultItemProps ?? {}), m.arrayFields), T = [...S, C];
						N(W(K(T)), !1), x(T);
					},
					children: /* @__PURE__ */ jsx(Plus, { size: 21 })
				})]
			})
		})
	});
};
init_react_import();
var getClassName7 = get_class_name_factory_default("Input", styles_module_default3), DefaultField = ({ field: m, onChange: x, readOnly: S, value: C, name: T, label: D, labelIcon: O, Label: k, id: A }) => {
	let j = C;
	return /* @__PURE__ */ jsx(k, {
		label: D || T,
		icon: O || /* @__PURE__ */ jsxs(Fragment$1, { children: [m.type === "text" && /* @__PURE__ */ jsx(Type, { size: 16 }), m.type === "number" && /* @__PURE__ */ jsx(Hash, { size: 16 })] }),
		readOnly: S,
		children: /* @__PURE__ */ jsx("input", {
			className: getClassName7("input"),
			autoComplete: "off",
			type: m.type,
			title: D || T,
			name: T,
			value: j?.toString ? j.toString() : "",
			onChange: (S) => {
				if (m.type === "number") {
					let C = Number(S.currentTarget.value);
					if (m.min !== void 0 && C < m.min || m.max !== void 0 && C > m.max) return;
					x(C);
				} else x(S.currentTarget.value);
			},
			readOnly: S,
			tabIndex: S ? -1 : void 0,
			id: A,
			min: m.type === "number" ? m.min : void 0,
			max: m.type === "number" ? m.max : void 0,
			placeholder: m.type === "text" || m.type === "number" ? m.placeholder : void 0,
			step: m.type === "number" ? m.step : void 0
		})
	});
};
init_react_import(), init_react_import(), init_react_import();
var styles_module_default6 = {
	"ExternalInput-actions": "_ExternalInput-actions_91ls0_1",
	"ExternalInput-button": "_ExternalInput-button_91ls0_5",
	"ExternalInput--dataSelected": "_ExternalInput--dataSelected_91ls0_24",
	"ExternalInput--readOnly": "_ExternalInput--readOnly_91ls0_31",
	"ExternalInput-detachButton": "_ExternalInput-detachButton_91ls0_35",
	ExternalInput: "_ExternalInput_91ls0_1",
	ExternalInputModal: "_ExternalInputModal_91ls0_79",
	"ExternalInputModal-grid": "_ExternalInputModal-grid_91ls0_89",
	"ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_91ls0_100",
	"ExternalInputModal-filters": "_ExternalInputModal-filters_91ls0_105",
	"ExternalInputModal-masthead": "_ExternalInputModal-masthead_91ls0_124",
	"ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_91ls0_133",
	"ExternalInputModal-table": "_ExternalInputModal-table_91ls0_133",
	"ExternalInputModal-thead": "_ExternalInputModal-thead_91ls0_149",
	"ExternalInputModal-th": "_ExternalInputModal-th_91ls0_149",
	"ExternalInputModal-td": "_ExternalInputModal-td_91ls0_164",
	"ExternalInputModal-tr": "_ExternalInputModal-tr_91ls0_169",
	"ExternalInputModal-tbody": "_ExternalInputModal-tbody_91ls0_176",
	"ExternalInputModal--hasData": "_ExternalInputModal--hasData_91ls0_202",
	"ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_91ls0_206",
	"ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_91ls0_223",
	"ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_91ls0_227",
	"ExternalInputModal-search": "_ExternalInputModal-search_91ls0_227",
	"ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_91ls0_264",
	"ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_91ls0_289",
	"ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_91ls0_299",
	"ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_91ls0_313",
	"ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_91ls0_326",
	"ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_91ls0_330",
	"ExternalInputModal-footer": "_ExternalInputModal-footer_91ls0_330",
	"ExternalInputModal-field": "_ExternalInputModal-field_91ls0_343"
};
init_react_import(), init_react_import();
var getClassName8 = get_class_name_factory_default("Modal", {
	Modal: "_Modal_ikbaj_1",
	"Modal--isOpen": "_Modal--isOpen_ikbaj_15",
	"Modal-inner": "_Modal-inner_ikbaj_19"
}), Modal = ({ children: m, onClose: x, isOpen: S }) => {
	let [C, T] = useState(null);
	return useEffect(() => {
		T(document.getElementById("puck-portal-root"));
	}, []), C ? createPortal(/* @__PURE__ */ jsx("div", {
		className: getClassName8({ isOpen: S }),
		onClick: x,
		children: /* @__PURE__ */ jsx("div", {
			className: getClassName8("inner"),
			onClick: (m) => m.stopPropagation(),
			children: m
		})
	}), C) : /* @__PURE__ */ jsx("div", {});
};
init_react_import(), init_react_import();
var getClassName9 = get_class_name_factory_default("Heading", {
	Heading: "_Heading_qxrry_1",
	"Heading--xxxxl": "_Heading--xxxxl_qxrry_12",
	"Heading--xxxl": "_Heading--xxxl_qxrry_18",
	"Heading--xxl": "_Heading--xxl_qxrry_22",
	"Heading--xl": "_Heading--xl_qxrry_26",
	"Heading--l": "_Heading--l_qxrry_30",
	"Heading--m": "_Heading--m_qxrry_34",
	"Heading--s": "_Heading--s_qxrry_38",
	"Heading--xs": "_Heading--xs_qxrry_42"
}), Heading = ({ children: m, rank: x, size: S = "m" }) => /* @__PURE__ */ jsx(x ? `h${x}` : "span", {
	className: getClassName9({ [S]: !0 }),
	children: m
});
init_react_import();
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6), getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6), dataCache = {}, ExternalInput = ({ field: m, onChange: x, value: S = null, name: C, id: T, readOnly: D }) => {
	let { mapProp: O = (m) => m, mapRow: A = (m) => m, filterFields: j } = m || {}, [N, F] = useState([]), [I, L] = useState(!1), [R, B] = useState(!0), H = !!j, [U, W] = useState(m.initialFilters || {}), [G, K] = useState(H), J = useMemo(() => N.map(A), [N]), Y = useMemo(() => {
		let m = /* @__PURE__ */ new Set();
		for (let x of J) for (let S of Object.keys(x)) (typeof x[S] == "string" || typeof x[S] == "number" || isValidElement(x[S])) && m.add(S);
		return Array.from(m);
	}, [J]), [X, Z] = useState(m.initialQuery || ""), OI = useCallback((x, S) => __async(void 0, null, function* () {
		B(!0);
		let C = `${T}-${x}-${JSON.stringify(S)}`, D = dataCache[C] || (yield m.fetchList({
			query: x,
			filters: S
		}));
		D && (F(D), B(!1), dataCache[C] = D);
	}), [T, m]), kI = useCallback((x) => m.renderFooter ? m.renderFooter(x) : /* @__PURE__ */ jsxs("span", {
		className: getClassNameModal("footer"),
		children: [
			x.items.length,
			" result",
			x.items.length === 1 ? "" : "s"
		]
	}), [m.renderFooter]);
	return useEffect(() => {
		OI(X, U);
	}, []), /* @__PURE__ */ jsxs("div", {
		className: getClassName10({
			dataSelected: !!S,
			modalVisible: I,
			readOnly: D
		}),
		id: T,
		children: [/* @__PURE__ */ jsxs("div", {
			className: getClassName10("actions"),
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => L(!0),
				className: getClassName10("button"),
				disabled: D,
				children: S ? m.getItemSummary ? m.getItemSummary(S) : "External item" : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Link, { size: "16" }), /* @__PURE__ */ jsx("span", { children: m.placeholder })] })
			}), S && /* @__PURE__ */ jsx("button", {
				type: "button",
				className: getClassName10("detachButton"),
				onClick: () => {
					x(null);
				},
				disabled: D,
				children: /* @__PURE__ */ jsx(LockOpen, { size: 16 })
			})]
		}), /* @__PURE__ */ jsx(Modal, {
			onClose: () => L(!1),
			isOpen: I,
			children: /* @__PURE__ */ jsxs("form", {
				className: getClassNameModal({
					isLoading: R,
					loaded: !R,
					hasData: J.length > 0,
					filtersToggled: G
				}),
				onSubmit: (m) => {
					m.preventDefault(), OI(X, U);
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: getClassNameModal("masthead"),
						children: m.showSearch ? /* @__PURE__ */ jsxs("div", {
							className: getClassNameModal("searchForm"),
							children: [/* @__PURE__ */ jsxs("label", {
								className: getClassNameModal("search"),
								children: [
									/* @__PURE__ */ jsx("span", {
										className: getClassNameModal("searchIconText"),
										children: "Search"
									}),
									/* @__PURE__ */ jsx("div", {
										className: getClassNameModal("searchIcon"),
										children: /* @__PURE__ */ jsx(Search, { size: "18" })
									}),
									/* @__PURE__ */ jsx("input", {
										className: getClassNameModal("searchInput"),
										name: "q",
										type: "search",
										placeholder: m.placeholder,
										onChange: (m) => {
											Z(m.currentTarget.value);
										},
										autoComplete: "off",
										value: X
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: getClassNameModal("searchActions"),
								children: [/* @__PURE__ */ jsx(Button, {
									type: "submit",
									loading: R,
									fullWidth: !0,
									children: "Search"
								}), H && /* @__PURE__ */ jsx("div", {
									className: getClassNameModal("searchActionIcon"),
									children: /* @__PURE__ */ jsx(IconButton, {
										type: "button",
										title: "Toggle filters",
										onClick: (m) => {
											m.preventDefault(), m.stopPropagation(), K(!G);
										},
										children: /* @__PURE__ */ jsx(SlidersHorizontal, { size: 20 })
									})
								})]
							})]
						}) : /* @__PURE__ */ jsx(Heading, {
							rank: "2",
							size: "xs",
							children: m.placeholder || "Select data"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: getClassNameModal("grid"),
						children: [H && /* @__PURE__ */ jsx("div", {
							className: getClassNameModal("filters"),
							children: H && Object.keys(j).map((m) => {
								let x = j[m];
								return /* @__PURE__ */ jsx("div", {
									className: getClassNameModal("field"),
									children: /* @__PURE__ */ jsx(AutoFieldPrivate, {
										field: x,
										name: m,
										id: `external_field_${m}_filter`,
										label: x.label || m,
										value: U[m],
										onChange: (x) => {
											let S = __spreadProps(__spreadValues({}, U), { [m]: x });
											W(S), OI(X, S);
										}
									})
								}, m);
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: getClassNameModal("tableWrapper"),
							children: [/* @__PURE__ */ jsxs("table", {
								className: getClassNameModal("table"),
								children: [/* @__PURE__ */ jsx("thead", {
									className: getClassNameModal("thead"),
									children: /* @__PURE__ */ jsx("tr", {
										className: getClassNameModal("tr"),
										children: Y.map((m) => /* @__PURE__ */ jsx("th", {
											className: getClassNameModal("th"),
											style: { textAlign: "left" },
											children: m
										}, m))
									})
								}), /* @__PURE__ */ jsx("tbody", {
									className: getClassNameModal("tbody"),
									children: J.map((m, S) => /* @__PURE__ */ jsx("tr", {
										style: { whiteSpace: "nowrap" },
										className: getClassNameModal("tr"),
										onClick: () => {
											x(O(N[S])), L(!1);
										},
										children: Y.map((x) => /* @__PURE__ */ jsx("td", {
											className: getClassNameModal("td"),
											children: m[x]
										}, x))
									}, S))
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: getClassNameModal("loadingBanner"),
								children: /* @__PURE__ */ jsx(Loader, { size: 24 })
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: getClassNameModal("footerContainer"),
						children: /* @__PURE__ */ jsx(kI, { items: J })
					})
				]
			})
		})]
	});
}, ExternalField = ({ field: m, onChange: x, value: S, name: C, label: T, labelIcon: D, Label: O, id: k, readOnly: A }) => {
	let j = m, M = m;
	return useEffect(() => {
		M.adaptor && console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.");
	}, []), m.type === "external" ? /* @__PURE__ */ jsx(O, {
		label: T || C,
		icon: D || /* @__PURE__ */ jsx(Link, { size: 16 }),
		el: "div",
		children: /* @__PURE__ */ jsx(ExternalInput, {
			name: C,
			field: __spreadProps(__spreadValues({}, j), {
				placeholder: M.adaptor?.name ? `Select from ${M.adaptor.name}` : j.placeholder || "Select data",
				mapProp: M.adaptor?.mapProp || j.mapProp,
				mapRow: j.mapRow,
				fetchList: M.adaptor?.fetchList ? () => __async(void 0, null, function* () {
					return yield M.adaptor.fetchList(M.adaptorParams);
				}) : j.fetchList
			}),
			onChange: x,
			value: S,
			id: k,
			readOnly: A
		})
	}) : null;
};
init_react_import();
var getClassName11 = get_class_name_factory_default("Input", styles_module_default3), RadioField = ({ field: m, onChange: x, readOnly: S, value: C, name: T, id: D, label: O, labelIcon: k, Label: A }) => m.type !== "radio" || !m.options ? null : /* @__PURE__ */ jsx(A, {
	icon: k || /* @__PURE__ */ jsx(CircleCheckBig, { size: 16 }),
	label: O || T,
	readOnly: S,
	el: "div",
	children: /* @__PURE__ */ jsx("div", {
		className: getClassName11("radioGroupItems"),
		id: D,
		children: m.options.map((m) => /* @__PURE__ */ jsxs("label", {
			className: getClassName11("radio"),
			children: [/* @__PURE__ */ jsx("input", {
				type: "radio",
				className: getClassName11("radioInput"),
				value: JSON.stringify({ value: m.value }),
				name: T,
				onChange: (m) => {
					x(JSON.parse(m.target.value).value);
				},
				disabled: S,
				checked: C === m.value
			}), /* @__PURE__ */ jsx("div", {
				className: getClassName11("radioInner"),
				children: m.label || m.value?.toString()
			})]
		}, m.label + m.value))
	})
});
init_react_import();
var getClassName12 = get_class_name_factory_default("Input", styles_module_default3), SelectField = ({ field: m, onChange: x, label: S, labelIcon: C, Label: T, value: D, name: O, readOnly: k, id: A }) => m.type !== "select" || !m.options ? null : /* @__PURE__ */ jsx(T, {
	label: S || O,
	icon: C || /* @__PURE__ */ jsx(ChevronDown, { size: 16 }),
	readOnly: k,
	children: /* @__PURE__ */ jsx("select", {
		id: A,
		title: S || O,
		className: getClassName12("input"),
		disabled: k,
		onChange: (m) => {
			x(JSON.parse(m.target.value).value);
		},
		value: JSON.stringify({ value: D }),
		children: m.options.map((m) => /* @__PURE__ */ jsx("option", {
			label: m.label,
			value: JSON.stringify({ value: m.value })
		}, m.label + JSON.stringify(m.value)))
	})
});
init_react_import();
var getClassName13 = get_class_name_factory_default("Input", styles_module_default3), TextareaField = ({ field: m, onChange: x, readOnly: S, value: C, name: T, label: D, labelIcon: O, Label: k, id: A }) => /* @__PURE__ */ jsx(k, {
	label: D || T,
	icon: O || /* @__PURE__ */ jsx(Type, { size: 16 }),
	readOnly: S,
	children: /* @__PURE__ */ jsx("textarea", {
		id: A,
		className: getClassName13("input"),
		autoComplete: "off",
		name: T,
		value: C === void 0 ? "" : C,
		onChange: (m) => x(m.currentTarget.value),
		readOnly: S,
		tabIndex: S ? -1 : void 0,
		rows: 5,
		placeholder: m.type === "textarea" ? m.placeholder : void 0
	})
});
init_react_import(), init_react_import();
var getClassName14 = get_class_name_factory_default("ObjectField", {
	ObjectField: "_ObjectField_1ua3y_5",
	"ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13"
}), ObjectField = ({ field: m, onChange: x, value: S, name: C, label: T, labelIcon: D, Label: O, readOnly: k, id: A }) => {
	let { readOnlyFields: j, localName: M = C } = useNestedFieldContext();
	if (m.type !== "object" || !m.objectFields) return null;
	let N = S || {};
	return /* @__PURE__ */ jsx(O, {
		label: T || C,
		icon: D || /* @__PURE__ */ jsx(EllipsisVertical, { size: 16 }),
		el: "div",
		readOnly: k,
		children: /* @__PURE__ */ jsx("div", {
			className: getClassName14(),
			children: /* @__PURE__ */ jsx("fieldset", {
				className: getClassName14("fieldset"),
				children: Object.keys(m.objectFields).map((S) => {
					let C = m.objectFields[S], T = `${M}.${S}`, D = k || j[T], O = C.label || S;
					return /* @__PURE__ */ jsx(NestedFieldProvider, {
						name: M || A,
						subName: S,
						readOnlyFields: j,
						children: /* @__PURE__ */ jsx(AutoFieldPrivate, {
							name: T,
							label: T,
							id: `${A}_${S}`,
							readOnly: D,
							field: __spreadProps(__spreadValues({}, C), { label: O }),
							value: N[S],
							onChange: (m, C) => {
								x(__spreadProps(__spreadValues({}, N), { [S]: m }), C);
							}
						})
					}, T);
				})
			})
		})
	});
};
init_react_import();
var useSafeId = () => {
	if (React2.useId !== void 0) return React2.useId();
	let [m] = useState(generateId());
	return m;
}, getClassName15 = get_class_name_factory_default("Input", styles_module_default3), getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default3), FieldLabel = ({ children: m, icon: x, label: S, el: C = "label", readOnly: T, className: D }) => /* @__PURE__ */ jsxs(C, {
	className: D,
	children: [/* @__PURE__ */ jsxs("div", {
		className: getClassName15("label"),
		children: [
			x ? /* @__PURE__ */ jsx("div", {
				className: getClassName15("labelIcon"),
				children: x
			}) : /* @__PURE__ */ jsx(Fragment$1, {}),
			S,
			T && /* @__PURE__ */ jsx("div", {
				className: getClassName15("disabledIcon"),
				title: "Read-only",
				children: /* @__PURE__ */ jsx(Lock, { size: "12" })
			})
		]
	}), m]
}), FieldLabelInternal = ({ children: m, icon: x, label: S, el: C = "label", readOnly: T }) => {
	let D = useAppStore((m) => m.overrides), O = useMemo(() => D.fieldLabel || FieldLabel, [D]);
	return S ? /* @__PURE__ */ jsx(O, {
		label: S,
		icon: x,
		className: getClassName15({ readOnly: T }),
		readOnly: T,
		el: C,
		children: m
	}) : /* @__PURE__ */ jsx(Fragment$1, { children: m });
}, defaultFields = {
	array: ArrayField,
	external: ExternalField,
	object: ObjectField,
	select: SelectField,
	textarea: TextareaField,
	radio: RadioField,
	text: DefaultField,
	number: DefaultField
};
function AutoFieldInternal(m) {
	let x = useAppStore((m) => m.dispatch), S = useAppStore((m) => m.overrides), C = useAppStore((m) => m.selectedItem?.readOnly), T = useContext(NestedFieldContext), { id: D, Label: O = FieldLabelInternal } = m, k = m.field, A = k.label, j = k.labelIcon, P = useSafeId(), F = D || P, I = useMemo(() => __spreadProps(__spreadValues({}, S.fieldTypes), {
		array: S.fieldTypes?.array || defaultFields.array,
		external: S.fieldTypes?.external || defaultFields.external,
		object: S.fieldTypes?.object || defaultFields.object,
		select: S.fieldTypes?.select || defaultFields.select,
		textarea: S.fieldTypes?.textarea || defaultFields.textarea,
		radio: S.fieldTypes?.radio || defaultFields.radio,
		text: S.fieldTypes?.text || defaultFields.text,
		number: S.fieldTypes?.number || defaultFields.number
	}), [S]), L = useMemo(() => __spreadProps(__spreadValues({}, m), {
		field: k,
		label: A,
		labelIcon: j,
		Label: O,
		id: F
	}), [
		m,
		k,
		A,
		j,
		O,
		F
	]), R = useCallback((m) => {
		L.name && (m.target.nodeName === "INPUT" || m.target.nodeName === "TEXTAREA") && (m.stopPropagation(), x({
			type: "setUi",
			ui: { field: { focus: L.name } }
		}));
	}, [L.name]), B = useCallback((m) => {
		"name" in m.target && x({
			type: "setUi",
			ui: { field: { focus: null } }
		});
	}, []), V = useMemo(() => k.type !== "custom" && k.type !== "slot" ? defaultFields[k.type] : (m) => null, [k.type]), H = useMemo(() => {
		if (k.type === "custom") return k.render ? k.render : null;
		if (k.type !== "slot") return I[k.type];
	}, [k.type, I]), { visible: U = !0 } = m.field;
	if (!U || k.type === "slot") return null;
	if (!H) throw Error(`Field type for ${k.type} did not exist.`);
	return /* @__PURE__ */ jsx(NestedFieldContext.Provider, {
		value: {
			readOnlyFields: T.readOnlyFields || C || {},
			localName: T.localName ?? L.name
		},
		children: /* @__PURE__ */ jsx("div", {
			className: getClassNameWrapper(),
			onFocus: R,
			onBlur: B,
			onClick: (m) => {
				m.stopPropagation();
			},
			children: /* @__PURE__ */ jsx(H, __spreadProps(__spreadValues({}, L), { children: /* @__PURE__ */ jsx(V, __spreadValues({}, L)) }))
		})
	});
}
function AutoFieldPrivate(m) {
	let x = useAppStore((x) => x.state.ui.field.focus === m.name), { value: S, onChange: C } = m, [T, D] = useState(S), O = useCallback((m, x) => {
		D(m), C(m, x);
	}, [C]);
	useEffect(() => {
		x || D(S);
	}, [S]), useEffect(() => {
		x || S !== T && D(S);
	}, [
		x,
		S,
		T
	]);
	let k = {
		value: T,
		onChange: O
	};
	return /* @__PURE__ */ jsx(AutoFieldInternal, __spreadValues(__spreadValues({}, m), k));
}
init_react_import(), init_react_import(), init_react_import(), init_react_import();
var styles_module_default10 = {
	DraggableComponent: "_DraggableComponent_1vaqy_1",
	"DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_1vaqy_12",
	"DraggableComponent-overlay": "_DraggableComponent-overlay_1vaqy_12",
	"DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1vaqy_34",
	"DraggableComponent--hover": "_DraggableComponent--hover_1vaqy_50",
	"DraggableComponent--isSelected": "_DraggableComponent--isSelected_1vaqy_57",
	"DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1vaqy_71",
	"DraggableComponent-actions": "_DraggableComponent-actions_1vaqy_71"
};
init_react_import();
function getDeepScrollPosition(m) {
	let x = {
		x: 0,
		y: 0
	}, S = m;
	for (; S && S !== document.documentElement;) {
		let m = S.parentElement;
		m && (x.x += m.scrollLeft, x.y += m.scrollTop), S = m;
	}
	return x;
}
init_react_import();
var dropZoneContext = createContext(null), ZoneStoreContext = createContext(createStore(() => ({
	zoneDepthIndex: {},
	nextZoneDepthIndex: {},
	areaDepthIndex: {},
	nextAreaDepthIndex: {},
	draggedItem: null,
	previewIndex: {},
	enabledIndex: {},
	hoveringComponent: null
}))), ZoneStoreProvider = ({ children: m, store: x }) => /* @__PURE__ */ jsx(ZoneStoreContext.Provider, {
	value: x,
	children: m
}), DropZoneProvider = ({ children: m, value: x }) => {
	let S = useAppStore((m) => m.dispatch), C = useCallback((m) => {
		S({
			type: "registerZone",
			zone: m
		});
	}, [S]), T = useMemo(() => __spreadValues({ registerZone: C }, x), [x]);
	return /* @__PURE__ */ jsx(Fragment$1, { children: T && /* @__PURE__ */ jsx(dropZoneContext.Provider, {
		value: T,
		children: m
	}) });
};
init_react_import();
function accumulateTransform(m) {
	let x = new DOMMatrixReadOnly(), S = m.parentElement;
	for (; S && S !== document.documentElement;) {
		let m = getComputedStyle(S).transform;
		m && m !== "none" && (x = new DOMMatrixReadOnly(m).multiply(x)), S = S.parentElement;
	}
	return {
		scaleX: x.a,
		scaleY: x.d
	};
}
init_react_import();
function useContextStore(m, x) {
	let S = useContext(m);
	if (!S) throw Error("useContextStore must be used inside context");
	return useStore(S, useShallow(x));
}
init_react_import();
var useOnDragFinished = (m, x = []) => {
	let S = useAppStoreApi();
	return useCallback(() => {
		let x = () => {}, C = (S) => {
			S ? m(!1) : (setTimeout(() => {
				m(!0);
			}, 0), x && x());
		}, T = S.getState().state.ui.isDragging;
		return C(T), T && (x = S.subscribe((m) => m.state.ui.isDragging, (m) => {
			C(m);
		})), x;
	}, [S, ...x]);
}, getClassName16 = get_class_name_factory_default("DraggableComponent", styles_module_default10), DEBUG2 = !1, space = 8, actionsOverlayTop = space * 6.5, actionsTop = -(actionsOverlayTop - 8), actionsSide = space, DefaultActionBar = ({ label: m, children: x, parentAction: S }) => /* @__PURE__ */ jsxs(ActionBar, { children: [/* @__PURE__ */ jsxs(ActionBar.Group, { children: [S, m && /* @__PURE__ */ jsx(ActionBar.Label, { label: m })] }), /* @__PURE__ */ jsx(ActionBar.Group, { children: x })] }), DefaultOverlay = ({ children: m }) => /* @__PURE__ */ jsx(Fragment$1, { children: m }), DraggableComponent = ({ children: m, depth: x, componentType: S, id: C, index: T, zoneCompound: D, isLoading: O = !1, isSelected: k = !1, debug: A, label: j, autoDragAxis: F, userDragAxis: I, inDroppableZone: L = !0 }) => {
	let R = useAppStore((m) => m.selectedItem?.props.id === C ? m.zoomConfig.zoom : 1), U = useAppStore((m) => m.overrides), W = useAppStore((m) => m.dispatch), K = useAppStore((m) => m.iframe), q = useContext(dropZoneContext), [J, Y] = useState({}), X = useCallback((m, x) => {
		var S;
		(S = q?.registerLocalZone) == null || S.call(q, m, x), Y((S) => __spreadProps(__spreadValues({}, S), { [m]: x }));
	}, [Y]), Z = useCallback((m) => {
		var x;
		(x = q?.unregisterLocalZone) == null || x.call(q, m), Y((x) => {
			let S = __spreadValues({}, x);
			return delete S[m], S;
		});
	}, [Y]), OI = Object.values(J).filter(Boolean).length > 0, kI = useAppStore(useShallow((m) => m.state.indexes.nodes[C]?.path)), AI = useAppStore(useShallow((m) => {
		let x = getItem({
			index: T,
			zone: D
		}, m.state);
		return m.permissions.getPermissions({ item: x });
	})), jI = useContext(ZoneStoreContext), [MI, NI] = useState(I || F), Q = useMemo(() => createDynamicCollisionDetector(MI), [MI]), { ref: PI, isDragging: $, sortable: FI } = useSortable({
		id: C,
		index: T,
		group: D,
		type: "component",
		data: {
			areaId: q?.areaId,
			zone: D,
			index: T,
			componentType: S,
			containsActiveZone: OI,
			depth: x,
			path: kI || [],
			inDroppableZone: L
		},
		collisionPriority: x,
		collisionDetector: Q,
		transition: {
			duration: 200,
			easing: "cubic-bezier(0.2, 0, 0, 1)"
		},
		feedback: "clone"
	});
	useEffect(() => {
		let m = jI.getState().enabledIndex[D];
		FI.droppable.disabled = !m, FI.draggable.disabled = !AI.drag;
		let x = jI.subscribe((m) => {
			FI.droppable.disabled = !m.enabledIndex[D];
		});
		return II.current && !AI.drag ? (II.current.setAttribute("data-puck-disabled", ""), () => {
			var m;
			(m = II.current) == null || m.removeAttribute("data-puck-disabled"), x();
		}) : x;
	}, [AI.drag, D]);
	let II = useRef(null), LI = useCallback((m) => {
		PI(m), m && (II.current = m);
	}, [PI]), [RI, zI] = useState();
	useEffect(() => {
		zI(K.enabled ? II.current?.ownerDocument.body : II.current?.closest("[data-puck-preview]") ?? document.body);
	}, [K.enabled, II.current]);
	let BI = useCallback(() => {
		if (!II.current) return;
		let m = II.current.getBoundingClientRect(), x = getDeepScrollPosition(II.current), S = K.enabled ? null : II.current?.closest("[data-puck-preview]"), C = S?.getBoundingClientRect(), T = S ? getDeepScrollPosition(S) : {
			x: 0,
			y: 0
		}, D = {
			x: x.x - T.x - (C?.left ?? 0),
			y: x.y - T.y - (C?.top ?? 0)
		}, O = {
			height: II.current.offsetHeight,
			width: II.current.offsetWidth
		}, k = accumulateTransform(II.current);
		return {
			left: `${(m.left + D.x) / k.scaleX}px`,
			top: `${(m.top + D.y) / k.scaleY}px`,
			height: `${O.height}px`,
			width: `${O.width}px`
		};
	}, [II.current]), [VI, HI] = useState(), UI = useCallback(() => {
		HI(BI());
	}, [II.current, K]);
	useEffect(() => {
		if (II.current) {
			let m = new ResizeObserver(UI);
			return m.observe(II.current), () => {
				m.disconnect();
			};
		}
	}, [II.current]);
	let WI = useAppStore((m) => m.nodes.registerNode), GI = useCallback(() => {
		iL(!1);
	}, []), KI = useCallback(() => {
		iL(!0);
	}, []);
	useEffect(() => (WI(C, {
		methods: {
			sync: UI,
			showOverlay: KI,
			hideOverlay: GI
		},
		element: II.current ?? null
	}), () => {
		WI(C, {
			methods: {
				sync: () => null,
				hideOverlay: () => null,
				showOverlay: () => null
			},
			element: null
		});
	}), [
		C,
		D,
		T,
		S,
		UI
	]);
	let qI = useMemo(() => U.actionBar || DefaultActionBar, [U.actionBar]), JI = useMemo(() => U.componentOverlay || DefaultOverlay, [U.componentOverlay]), YI = useCallback((m) => {
		m.target.closest("[data-puck-overlay-portal]") || m.stopPropagation(), W({
			type: "setUi",
			ui: { itemSelector: {
				index: T,
				zone: D
			} }
		});
	}, [
		T,
		D,
		C
	]), XI = useAppStoreApi(), ZI = useCallback(() => {
		let { nodes: m, zones: x } = XI.getState().state.indexes, S = m[C], T = S?.parentId ? m[S?.parentId] : null;
		if (!T || !S.parentId) return;
		let D = `${T.parentId}:${T.zone}`;
		W({
			type: "setUi",
			ui: { itemSelector: {
				zone: D,
				index: x[D].contentIds.indexOf(S.parentId)
			} }
		});
	}, [q, kI]), QI = useCallback(() => {
		W({
			type: "duplicate",
			sourceIndex: T,
			sourceZone: D
		});
	}, [T, D]), $I = useCallback(() => {
		W({
			type: "remove",
			index: T,
			zone: D
		});
	}, [T, D]), [eL, tL] = useState(!1), nL = useContextStore(ZoneStoreContext, (m) => m.hoveringComponent === C);
	useEffect(() => {
		if (!II.current) return;
		let m = II.current, x = (m) => {
			jI.getState().draggedItem ? tL(!!$) : tL(!0), m.stopPropagation();
		}, S = (m) => {
			m.stopPropagation(), tL(!1);
		};
		return m.setAttribute("data-puck-component", C), m.setAttribute("data-puck-dnd", C), m.style.position = "relative", m.addEventListener("click", YI), m.addEventListener("mouseover", x), m.addEventListener("mouseout", S), () => {
			m.removeAttribute("data-puck-component"), m.removeAttribute("data-puck-dnd"), m.removeEventListener("click", YI), m.removeEventListener("mouseover", x), m.removeEventListener("mouseout", S);
		};
	}, [
		II.current,
		YI,
		OI,
		D,
		C,
		$,
		L
	]);
	let [rL, iL] = useState(!1), [aL, oL] = useState(!0), [sL, cL] = useTransition();
	useEffect(() => {
		cL(() => {
			eL || nL || k ? (UI(), iL(!0), uL(!1)) : iL(!1);
		});
	}, [
		eL,
		nL,
		k,
		K
	]);
	let [lL, uL] = useState(!1), dL = useOnDragFinished((m) => {
		m ? cL(() => {
			UI(), oL(!0);
		}) : oL(!1);
	});
	useEffect(() => {
		$ && uL(!0);
	}, [$]), useEffect(() => {
		if (lL) return dL();
	}, [lL, dL]);
	let fL = useCallback((m) => {
		if (m && m.ownerDocument.defaultView) {
			let x = m.getBoundingClientRect(), S = x.x < 0, C = x.y < 0;
			S && (m.style.transformOrigin = "left top", m.style.left = "0px"), C && (m.style.top = "12px", S || (m.style.transformOrigin = "right top"));
		}
	}, [R]);
	useEffect(() => {
		if (I) {
			NI(I);
			return;
		}
		if (II.current) {
			let m = window.getComputedStyle(II.current);
			if (m.display === "inline" || m.display === "inline-block") {
				NI("x");
				return;
			}
		}
		NI(F);
	}, [
		II,
		I,
		F
	]);
	let pL = useMemo(() => q?.areaId && q?.areaId !== "root" && /* @__PURE__ */ jsx(ActionBar.Action, {
		onClick: ZI,
		label: "Select parent",
		children: /* @__PURE__ */ jsx(CornerLeftUp, { size: 16 })
	}), [q?.areaId]);
	return /* @__PURE__ */ jsxs(DropZoneProvider, {
		value: useMemo(() => __spreadProps(__spreadValues({}, q), {
			areaId: C,
			zoneCompound: D,
			index: T,
			depth: x + 1,
			registerLocalZone: X,
			unregisterLocalZone: Z
		}), [
			q,
			C,
			D,
			T,
			x,
			X,
			Z
		]),
		children: [aL && rL && createPortal(/* @__PURE__ */ jsxs("div", {
			className: getClassName16({
				isSelected: k,
				isDragging: $,
				hover: eL || nL
			}),
			style: __spreadValues({}, VI),
			"data-puck-overlay": !0,
			children: [
				A,
				O && /* @__PURE__ */ jsx("div", {
					className: getClassName16("loadingOverlay"),
					children: /* @__PURE__ */ jsx(Loader, {})
				}),
				/* @__PURE__ */ jsx("div", {
					className: getClassName16("actionsOverlay"),
					style: { top: actionsOverlayTop / R },
					children: /* @__PURE__ */ jsx("div", {
						className: getClassName16("actions"),
						style: {
							transform: `scale(${1 / R}`,
							top: actionsTop / R,
							right: 0,
							paddingLeft: actionsSide,
							paddingRight: actionsSide
						},
						ref: fL,
						children: /* @__PURE__ */ jsxs(qI, {
							parentAction: pL,
							label: DEBUG2 ? C : j,
							children: [AI.duplicate && /* @__PURE__ */ jsx(ActionBar.Action, {
								onClick: QI,
								label: "Duplicate",
								children: /* @__PURE__ */ jsx(Copy, { size: 16 })
							}), AI.delete && /* @__PURE__ */ jsx(ActionBar.Action, {
								onClick: $I,
								label: "Delete",
								children: /* @__PURE__ */ jsx(Trash, { size: 16 })
							})]
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: getClassName16("overlayWrapper"),
					children: /* @__PURE__ */ jsx(JI, {
						componentId: C,
						componentType: S,
						hover: eL,
						isSelected: k,
						children: /* @__PURE__ */ jsx("div", { className: getClassName16("overlay") })
					})
				})
			]
		}), RI || document.body), m(LI)]
	});
};
init_react_import();
var styles_module_default11 = {
	DropZone: "_DropZone_1i2sv_1",
	"DropZone--hasChildren": "_DropZone--hasChildren_1i2sv_11",
	"DropZone--isAreaSelected": "_DropZone--isAreaSelected_1i2sv_24",
	"DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1i2sv_25",
	"DropZone--isRootZone": "_DropZone--isRootZone_1i2sv_25",
	"DropZone--isDestination": "_DropZone--isDestination_1i2sv_35",
	"DropZone-item": "_DropZone-item_1i2sv_47",
	"DropZone-hitbox": "_DropZone-hitbox_1i2sv_51",
	"DropZone--isEnabled": "_DropZone--isEnabled_1i2sv_59",
	"DropZone--isAnimating": "_DropZone--isAnimating_1i2sv_68"
};
init_react_import(), init_react_import();
var styles_module_default12 = {
	Drawer: "_Drawer_pl7z0_1",
	"Drawer-draggable": "_Drawer-draggable_pl7z0_8",
	"Drawer-draggableBg": "_Drawer-draggableBg_pl7z0_12",
	"DrawerItem-draggable": "_DrawerItem-draggable_pl7z0_22",
	"DrawerItem--disabled": "_DrawerItem--disabled_pl7z0_35",
	DrawerItem: "_DrawerItem_pl7z0_22",
	"Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_pl7z0_45",
	"DrawerItem-name": "_DrawerItem-name_pl7z0_63"
};
init_react_import(), init_react_import(), init_react_import();
function timeout2(m, x) {
	let S = setTimeout(m, x);
	return () => clearTimeout(S);
}
function throttle(m, x) {
	let S = () => performance.now(), C, T = 0;
	return function(...D) {
		let O = S(), k = this;
		O - T >= x ? (m.apply(k, D), T = O) : (C?.(), C = timeout2(() => {
			m.apply(k, D), T = S();
		}, x - (O - T)));
	};
}
init_react_import();
var getFrame = () => {
	if (typeof window > "u") return;
	let m = document.querySelector("#preview-frame");
	return m?.tagName === "IFRAME" ? m.contentDocument || document : m?.ownerDocument || document;
};
init_react_import();
var GlobalPosition = class {
	constructor(m, x) {
		this.scaleFactor = 1, this.frameEl = null, this.frameRect = null, this.target = m, this.original = x, this.frameEl = document.querySelector("iframe#preview-frame"), this.frameEl && (this.frameRect = this.frameEl.getBoundingClientRect(), this.scaleFactor = this.frameRect.width / (this.frameEl.contentWindow?.innerWidth || 1));
	}
	get x() {
		return this.original.x;
	}
	get y() {
		return this.original.y;
	}
	get global() {
		return document !== this.target.ownerDocument && this.frameRect ? {
			x: this.x * this.scaleFactor + this.frameRect.left,
			y: this.y * this.scaleFactor + this.frameRect.top
		} : this.original;
	}
	get frame() {
		return document === this.target.ownerDocument && this.frameRect ? {
			x: (this.x - this.frameRect.left) / this.scaleFactor,
			y: (this.y - this.frameRect.top) / this.scaleFactor
		} : this.original;
	}
};
init_react_import();
var BaseEvent = typeof PointerEvent < "u" ? PointerEvent : Event, BubbledPointerEvent = class extends BaseEvent {
	constructor(m, x) {
		super(m, x), this._originalTarget = null, this.originalTarget = x.originalTarget;
	}
	set originalTarget(m) {
		this._originalTarget = m;
	}
	get originalTarget() {
		return this._originalTarget;
	}
}, depthSort = (m) => m.sort((m, x) => {
	let S = m.data, C = x.data;
	return S.depth > C.depth ? 1 : C.depth > S.depth ? -1 : 0;
}), getZoneId = (m) => {
	let x = m?.id;
	if (!m) return null;
	if (m.type === "component") {
		let S = m.data;
		x = S.containsActiveZone ? null : S.zone;
	} else if (m.type === "void") return "void";
	return x;
}, BUFFER = 6, getPointerCollisions = (m, x) => {
	let S = [], C = m.target.ownerDocument.elementsFromPoint(m.x, m.y), T = C.find((m) => m.getAttribute("data-puck-preview")), D = C.find((m) => m.getAttribute("data-puck-drawer"));
	if (D && (C = [D]), T) {
		let x = getFrame();
		x && (C = x.elementsFromPoint(m.frame.x, m.frame.y));
	}
	if (C) for (let T = 0; T < C.length; T++) {
		let D = C[T], O = D.getAttribute("data-puck-dropzone"), k = D.getAttribute("data-puck-dnd"), A = D.hasAttribute("data-puck-dnd-void");
		if (BUFFER && (O || k) && !A) {
			let x = D.getBoundingClientRect(), S = {
				left: x.left + BUFFER,
				right: x.right - BUFFER,
				top: x.top + BUFFER,
				bottom: x.bottom - BUFFER
			};
			if (m.frame.x < S.left || m.frame.x > S.right || m.frame.y > S.bottom || m.frame.y < S.top) continue;
		}
		if (O) {
			let m = x.registry.droppables.get(O);
			m && S.push(m);
		}
		if (k) {
			let m = x.registry.droppables.get(k);
			m && S.push(m);
		}
	}
	return S;
}, findDeepestCandidate = (m, x) => {
	let S = getPointerCollisions(m, x);
	if (S.length > 0) {
		let m = depthSort(S), C = x.dragOperation.source, T = m.findIndex((m) => m.id === C?.id), D = C?.id, O = [...m];
		D && T > -1 && O.splice(T, 1), O = O.filter((m) => {
			let x = m.data;
			if (D && T > -1 && x.path.indexOf(D) > -1) return !1;
			if (m.type === "dropzone") {
				let x = m.data;
				if (!x.isDroppableTarget || x.areaId === D) return !1;
			} else if (m.type === "component" && !m.data.inDroppableZone) return !1;
			return !0;
		}), O.reverse();
		let k = O[0];
		if (!k) return {
			zone: null,
			area: null
		};
		let A = k.data, j = "containsActiveZone" in A;
		return {
			zone: getZoneId(k),
			area: j && A.containsActiveZone ? O[0].id : O[0]?.data.areaId
		};
	}
	return {
		zone: rootDroppableId,
		area: rootAreaId
	};
}, createNestedDroppablePlugin = ({ onChange: m }, x) => class extends Plugin {
	constructor(S, C) {
		super(S), !(typeof window > "u") && this.registerEffect(() => {
			let C = throttle((C) => {
				let T = new GlobalPosition(C instanceof BubbledPointerEvent && C.originalTarget || C.target, {
					x: C.clientX,
					y: C.clientY
				});
				document.elementsFromPoint(T.global.x, T.global.y).some((m) => m.id === x) && m(findDeepestCandidate(T, S), S);
			}, 50), T = (m) => {
				C(m);
			};
			return document.body.addEventListener("pointermove", T, { capture: !0 }), () => {
				document.body.removeEventListener("pointermove", T, { capture: !0 });
			};
		});
	}
};
init_react_import();
var insertComponent = (m, x, S, C) => __async(void 0, null, function* () {
	let T = {
		type: "insert",
		componentType: m,
		destinationIndex: S,
		destinationZone: x,
		id: generateId(m)
	}, { state: D, dispatch: O, resolveComponentData: k } = C, A = insertAction(D, T, C);
	O(__spreadProps(__spreadValues({}, T), { recordHistory: !0 }));
	let j = {
		index: S,
		zone: x
	};
	O({
		type: "setUi",
		ui: { itemSelector: j }
	});
	let M = getItem(j, A);
	if (M) {
		let m = yield k(M, "insert");
		m.didChange && O({
			type: "replace",
			destinationZone: j.zone,
			destinationIndex: j.index,
			data: m.node
		});
	}
});
init_react_import();
function getDeepDir(m) {
	function x(m) {
		return m ? m.getAttribute("dir") || x(m.parentElement) : "ltr";
	}
	return m ? x(m) : "ltr";
}
var DEBUG3 = !1, dragListenerContext = createContext({ dragListeners: {} });
function useDragListener(m, x, S = []) {
	let { setDragListeners: C } = useContext(dragListenerContext);
	useEffect(() => {
		C && C((S) => __spreadProps(__spreadValues({}, S), { [m]: [...S[m] || [], x] }));
	}, S);
}
var AREA_CHANGE_DEBOUNCE_MS = 100, useTempDisableFallback = (m) => {
	let x = useRef(null);
	return useCallback((S) => {
		collisionStore.setState({ fallbackEnabled: !1 });
		let C = generateId();
		x.current = C, setTimeout(() => {
			x.current === C && (collisionStore.setState({ fallbackEnabled: !0 }), S.collisionObserver.forceUpdate(!0));
		}, m);
	}, []);
}, DragDropContextClient = ({ children: m, disableAutoScroll: x }) => {
	let S = useAppStore((m) => m.dispatch), C = useAppStoreApi(), T = useSafeId(), D = useRef(null), O = useTempDisableFallback(100), [k] = useState(() => createStore(() => ({
		zoneDepthIndex: {},
		nextZoneDepthIndex: {},
		areaDepthIndex: {},
		nextAreaDepthIndex: {},
		draggedItem: null,
		previewIndex: {},
		enabledIndex: {},
		hoveringComponent: null
	}))), A = useCallback((m, x) => {
		let { zoneDepthIndex: S = {}, areaDepthIndex: C = {} } = k.getState() || {}, T = Object.keys(S).length > 0, D = Object.keys(C).length > 0, O = !1, A = !1;
		return (m.zone && !S[m.zone] || !m.zone && T) && (O = !0), (m.area && !C[m.area] || !m.area && D) && (A = !0), {
			zoneChanged: O,
			areaChanged: A
		};
	}, [k]), j = useCallback((m, x) => {
		let { zoneChanged: S, areaChanged: C } = A(m, T);
		!S && !C || (k.setState({
			zoneDepthIndex: m.zone ? { [m.zone]: !0 } : {},
			areaDepthIndex: m.area ? { [m.area]: !0 } : {}
		}), O(x), setTimeout(() => {
			x.collisionObserver.forceUpdate(!0);
		}, 50), D.current = null);
	}, [k]), N = c(j, AREA_CHANGE_DEBOUNCE_MS), F = () => {
		N.cancel(), D.current = null;
	};
	useEffect(() => {
		DEBUG3 && k.subscribe((m) => console.log(m.previewIndex, Object.entries(m.zoneDepthIndex || {})[0]?.[0], Object.entries(m.areaDepthIndex || {})[0]?.[0]));
	}, []);
	let [I] = useState(() => [...x ? defaultPreset.plugins.filter((m) => m !== AutoScroller) : defaultPreset.plugins, createNestedDroppablePlugin({ onChange: (m, x) => {
		let S = k.getState(), { zoneChanged: C, areaChanged: O } = A(m, T), M = x.dragOperation.status.dragging;
		if (O || C) {
			let x = {}, S = {};
			m.zone && (x = { [m.zone]: !0 }), m.area && (S = { [m.area]: !0 }), k.setState({
				nextZoneDepthIndex: x,
				nextAreaDepthIndex: S
			});
		}
		if (m.zone !== "void" && S?.zoneDepthIndex.void) {
			j(m, x);
			return;
		}
		if (O) {
			if (M) {
				let S = D.current;
				S && S.area === m.area && S.zone === m.zone || (F(), N(m, x), D.current = m);
			} else F(), j(m, x);
			return;
		}
		C && j(m, x), F();
	} }, T)]), L = useSensors(), [R, H] = useState({}), U = useRef(null), W = useRef(void 0), G = useMemo(() => ({
		mode: "edit",
		areaId: "root",
		depth: 0
	}), []);
	return /* @__PURE__ */ jsx("div", {
		id: T,
		children: /* @__PURE__ */ jsx(dragListenerContext.Provider, {
			value: {
				dragListeners: R,
				setDragListeners: H
			},
			children: /* @__PURE__ */ jsx(DragDropProvider, {
				plugins: I,
				sensors: L,
				onDragEnd: (m, x) => {
					(getFrame()?.querySelector("[data-puck-entry]"))?.removeAttribute("data-puck-dragging");
					let { source: T, target: D } = m.operation;
					if (!T) {
						k.setState({ draggedItem: null });
						return;
					}
					let { zone: O, index: A } = T.data, { previewIndex: j = {} } = k.getState() || {}, M = j[O]?.props.id === T.id ? j[O] : null, N = () => {
						var T, j;
						if (k.setState({ draggedItem: null }), m.canceled || D?.type === "void") {
							k.setState({ previewIndex: {} }), (T = R.dragend) == null || T.forEach((S) => {
								S(m, x);
							}), S({
								type: "setUi",
								ui: {
									itemSelector: null,
									isDragging: !1
								}
							});
							return;
						}
						M && (k.setState({ previewIndex: {} }), M.type === "insert" ? insertComponent(M.componentType, M.zone, M.index, C.getState()) : W.current && S({
							type: "move",
							sourceIndex: W.current.index,
							sourceZone: W.current.zone,
							destinationIndex: M.index,
							destinationZone: M.zone,
							recordHistory: !1
						})), S({
							type: "setUi",
							ui: {
								itemSelector: {
									index: A,
									zone: O
								},
								isDragging: !1
							},
							recordHistory: !0
						}), (j = R.dragend) == null || j.forEach((S) => {
							S(m, x);
						});
					}, P;
					P = E(() => {
						T.status === "idle" && (N(), P?.());
					});
				},
				onDragOver: (m, x) => {
					var S;
					if (m.preventDefault(), !k.getState()?.draggedItem) return;
					F();
					let { source: T, target: D } = m.operation;
					if (!D || !T || D.type === "void") return;
					let [O] = T.id.split(":"), [A] = D.id.split(":"), j = T.data, M = j.zone, N = j.index, P = "", I = 0;
					if (D.type === "component") {
						let m = D.data;
						P = m.zone, I = m.index;
						let S = x.collisionObserver.collisions[0]?.data, C = getDeepDir(D.element), T = S?.direction === "up" || C === "ltr" && S?.direction === "left" || C === "rtl" && S?.direction === "right" ? "before" : "after";
						I >= N && M === P && --I, T === "after" && (I += 1);
					} else P = D.id.toString(), I = 0;
					let L = C.getState().state.indexes.nodes[D.id]?.path || [];
					if (!(A === O || L.find((m) => {
						let [x] = m.split(":");
						return x === O;
					}))) {
						if (U.current === "new") k.setState({ previewIndex: { [P]: {
							componentType: j.componentType,
							type: "insert",
							index: I,
							zone: P,
							element: T.element,
							props: { id: T.id.toString() }
						} } });
						else {
							W.current ||= {
								zone: j.zone,
								index: j.index
							};
							let m = getItem(W.current, C.getState().state);
							m && k.setState({ previewIndex: { [P]: {
								componentType: j.componentType,
								type: "move",
								index: I,
								zone: P,
								props: m.props,
								element: T.element
							} } });
						}
						(S = R.dragover) == null || S.forEach((S) => {
							S(m, x);
						});
					}
				},
				onDragStart: (m, x) => {
					var S;
					let { source: T } = m.operation;
					if (T && T.type !== "void") {
						let m = T.data, x = getItem({
							zone: m.zone,
							index: m.index
						}, C.getState().state);
						x && k.setState({ previewIndex: { [m.zone]: {
							componentType: m.componentType,
							type: "move",
							index: m.index,
							zone: m.zone,
							props: x.props,
							element: T.element
						} } });
					}
					(S = R.dragstart) == null || S.forEach((S) => {
						S(m, x);
					});
				},
				onBeforeDragStart: (m) => {
					U.current = m.operation.source?.type === "drawer" ? "new" : "existing", W.current = void 0, k.setState({ draggedItem: m.operation.source }), C.getState().selectedItem?.props.id === m.operation.source?.id ? S({
						type: "setUi",
						ui: { isDragging: !0 },
						recordHistory: !1
					}) : S({
						type: "setUi",
						ui: {
							itemSelector: null,
							isDragging: !0
						},
						recordHistory: !1
					}), (getFrame()?.querySelector("[data-puck-entry]"))?.setAttribute("data-puck-dragging", "true");
				},
				children: /* @__PURE__ */ jsx(ZoneStoreProvider, {
					store: k,
					children: /* @__PURE__ */ jsx(DropZoneProvider, {
						value: G,
						children: m
					})
				})
			})
		})
	});
}, DragDropContext = ({ children: m, disableAutoScroll: x }) => useAppStore((m) => m.status) === "LOADING" ? m : /* @__PURE__ */ jsx(DragDropContextClient, {
	disableAutoScroll: x,
	children: m
}), getClassName17 = get_class_name_factory_default("Drawer", styles_module_default12), getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default12), DrawerItemInner = ({ children: m, name: x, label: S, dragRef: C, isDragDisabled: T }) => {
	let D = useMemo(() => m || (({ children: m }) => /* @__PURE__ */ jsx("div", {
		className: getClassNameItem2("default"),
		children: m
	})), [m]);
	return /* @__PURE__ */ jsx("div", {
		className: getClassNameItem2({ disabled: T }),
		ref: C,
		onMouseDown: (m) => m.preventDefault(),
		"data-testid": C ? `drawer-item:${x}` : "",
		"data-puck-drawer-item": !0,
		children: /* @__PURE__ */ jsx(D, {
			name: x,
			children: /* @__PURE__ */ jsx("div", {
				className: getClassNameItem2("draggableWrapper"),
				children: /* @__PURE__ */ jsxs("div", {
					className: getClassNameItem2("draggable"),
					children: [/* @__PURE__ */ jsx("div", {
						className: getClassNameItem2("name"),
						children: S ?? x
					}), /* @__PURE__ */ jsx("div", {
						className: getClassNameItem2("icon"),
						children: /* @__PURE__ */ jsx(DragIcon, {})
					})]
				})
			})
		})
	});
}, DrawerItemDraggable = ({ children: m, name: x, label: S, id: C, isDragDisabled: T }) => {
	let { ref: D } = useDraggable({
		id: C,
		data: { componentType: x },
		disabled: T,
		type: "drawer"
	});
	return /* @__PURE__ */ jsxs("div", {
		className: getClassName17("draggable"),
		children: [/* @__PURE__ */ jsx("div", {
			className: getClassName17("draggableBg"),
			children: /* @__PURE__ */ jsx(DrawerItemInner, {
				name: x,
				label: S,
				children: m
			})
		}), /* @__PURE__ */ jsx("div", {
			className: getClassName17("draggableFg"),
			children: /* @__PURE__ */ jsx(DrawerItemInner, {
				name: x,
				label: S,
				dragRef: D,
				isDragDisabled: T,
				children: m
			})
		})]
	});
}, DrawerItem = ({ name: m, children: x, id: S, label: C, index: T, isDragDisabled: D }) => {
	let O = S || m, [k, A] = useState(generateId(O));
	return T !== void 0 && console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."), useDragListener("dragend", () => {
		A(generateId(O));
	}, [O]), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DrawerItemDraggable, {
		name: m,
		label: C,
		id: k,
		isDragDisabled: D,
		children: x
	}) }, k);
}, Drawer = ({ children: m, droppableId: x, direction: S }) => {
	x && console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."), S && console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");
	let C = useSafeId(), { ref: T } = useDroppable({
		id: C,
		type: "void",
		collisionPriority: 0
	});
	return /* @__PURE__ */ jsx("div", {
		className: getClassName17(),
		ref: T,
		"data-puck-dnd": C,
		"data-puck-drawer": !0,
		"data-puck-dnd-void": !0,
		children: m
	});
};
Drawer.Item = DrawerItem, init_react_import();
var getNumItems = (m, x) => m.getState().state.indexes.zones[x].contentIds.length, useMinEmptyHeight = ({ zoneCompound: m, userMinEmptyHeight: x, ref: S }) => {
	let C = useAppStoreApi(), [T, D] = useState(0), [O, k] = useState(!1), { draggedItem: A, isZone: j } = useContextStore(ZoneStoreContext, (x) => ({
		draggedItem: x.draggedItem?.data.zone === m ? x.draggedItem : null,
		isZone: x.draggedItem?.data.zone === m
	})), M = useRef(0), N = useOnDragFinished((x) => {
		var S;
		if (x) {
			let x = getNumItems(C, m);
			if (D(0), x || M.current === 0) {
				k(!1);
				return;
			}
			let T = C.getState().selectedItem, O = C.getState().state.indexes.zones, A = C.getState().nodes;
			(S = A.nodes[T?.props.id]) == null || S.methods.hideOverlay(), setTimeout(() => {
				(O[m]?.contentIds || []).forEach((m) => {
					A.nodes[m]?.methods.sync();
				}), T && setTimeout(() => {
					var m, x;
					(m = A.nodes[T.props.id]) == null || m.methods.sync(), (x = A.nodes[T.props.id]) == null || x.methods.showOverlay();
				}, 200), k(!1);
			}, 100);
		}
	}, [
		C,
		T,
		m
	]);
	return useEffect(() => {
		if (A && S.current && j) {
			let x = S.current.getBoundingClientRect();
			return M.current = getNumItems(C, m), D(x.height), k(!0), N();
		}
	}, [
		S.current,
		A,
		N
	]), [T || x, O];
};
init_react_import();
function assignRef(m, x) {
	typeof m == "function" ? m(x) : m && typeof m == "object" && "current" in m && (m.current = x);
}
function assignRefs(m, x) {
	m.forEach((m) => {
		assignRef(m, x);
	});
}
init_react_import(), init_react_import();
function useRenderedCallback(m, x) {
	let S = useDragDropManager();
	return useCallback((...x) => __async(this, null, function* () {
		return yield S?.renderer.rendering, m(...x);
	}), [...x, S]);
}
var useContentIdsWithPreview = (m, x) => {
	let S = useContext(ZoneStoreContext), C = useContextStore(ZoneStoreContext, (m) => m.previewIndex[x]), T = useAppStore((m) => m.state.ui.isDragging), [D, O] = useState(m), [k, A] = useState(C), j = useRenderedCallback((m, x, S, C, T) => {
		S && !T || (x ? (x.type, O(insert(m.filter((m) => m !== x.props.id), x.index, x.props.id))) : O(T ? m.filter((m) => m !== C) : m), A(x));
	}, []);
	return useEffect(() => {
		let x = S.getState();
		j(m, C, T, x.draggedItem?.id, Object.keys(x.previewIndex || {}).length > 0);
	}, [
		m,
		C,
		T
	]), [D, k];
};
init_react_import();
var GRID_DRAG_AXIS = "dynamic", FLEX_ROW_DRAG_AXIS = "x", DEFAULT_DRAG_AXIS = "y", useDragAxis = (m, x) => {
	let S = useAppStore((m) => m.status), [C, T] = useState(x || DEFAULT_DRAG_AXIS), D = useCallback(() => {
		if (m.current) {
			let x = window.getComputedStyle(m.current);
			x.display === "grid" ? T(GRID_DRAG_AXIS) : x.display === "flex" && x.flexDirection === "row" ? T(FLEX_ROW_DRAG_AXIS) : T(DEFAULT_DRAG_AXIS);
		}
	}, [m.current]);
	return useEffect(() => {
		let m = () => {
			D();
		};
		return window.addEventListener("viewportchange", m), () => {
			window.removeEventListener("viewportchange", m);
		};
	}, []), useEffect(D, [S, x]), [C, D];
};
init_react_import();
var ContextSlotRender = ({ componentId: m, zone: x }) => {
	let S = useAppStore((m) => m.config), C = useAppStore((m) => m.metadata);
	return /* @__PURE__ */ jsx(SlotRenderPure, {
		content: useAppStore(useShallow((S) => {
			let C = S.state.indexes;
			return (C.zones[`${m}:${x}`]?.contentIds ?? []).map((m) => C.nodes[m].flatData);
		})),
		zone: x,
		config: S,
		metadata: C
	});
};
init_react_import(), init_react_import(), init_react_import();
var registerOverlayPortal = (m, x = {}) => {
	if (!m) return;
	let { disableDrag: S = !1, disableDragOnFocus: C = !0 } = x, T = (m) => {
		m.stopPropagation();
	};
	m.addEventListener("mouseover", T, { capture: !0 });
	let D = () => {
		setTimeout(() => {
			m.addEventListener("pointerdown", T, { capture: !0 });
		}, 200);
	};
	return C ? (m.addEventListener("focus", D, { capture: !0 }), m.addEventListener("blur", () => {
		m.removeEventListener("pointerdown", T, { capture: !0 });
	}, { capture: !0 })) : S && m.addEventListener("pointerdown", T, { capture: !0 }), m.setAttribute("data-puck-overlay-portal", "true"), () => {
		m.removeEventListener("mouseover", T, { capture: !0 }), C ? (m.removeEventListener("focus", D, { capture: !0 }), m.removeEventListener("blur", D, { capture: !0 })) : S && m.removeEventListener("pointerdown", T, { capture: !0 }), m.removeAttribute("data-puck-overlay-portal");
	};
};
init_react_import();
var styles_module_default13 = { InlineTextField: "_InlineTextField_1xph6_1" };
init_react_import();
function setDeep(m, x, S) {
	let C = x.split("."), T = __spreadValues({}, m), D = T;
	for (let m = 0; m < C.length; m++) {
		let [x, T] = C[m].replace("]", "").split("["), O = m === C.length - 1;
		if (T !== void 0) {
			Array.isArray(D[x]) || (D[x] = []);
			let m = Number(T);
			if (O) {
				D[x][m] = S;
				continue;
			}
			D[x][m] === void 0 && (D[x][m] = {}), D = D[x][m];
			continue;
		}
		if (O) {
			D[x] = S;
			continue;
		}
		D[x] === void 0 && (D[x] = {}), D = D[x];
	}
	return __spreadValues(__spreadValues({}, m), T);
}
init_react_import();
var getSelectorForId = (m, x) => {
	let S = m.indexes.nodes[x];
	if (!S) return;
	let C = `${S.parentId}:${S.zone}`;
	return {
		zone: C,
		index: m.indexes.zones[C].contentIds.indexOf(x)
	};
}, getClassName18 = get_class_name_factory_default("InlineTextField", styles_module_default13), InlineTextField = memo(({ propPath: m, componentId: x, value: S, isReadOnly: C, opts: T = {} }) => {
	let D = useRef(null), O = useAppStoreApi(), k = T.disableLineBreaks ?? !1;
	useEffect(() => {
		let C = O.getState(), T = C.state.indexes.nodes[x].data;
		if (!C.getComponentConfig(T.type)) throw Error(`InlineTextField Error: No config defined for ${T.type}`);
		if (D.current) {
			S !== D.current.innerText && D.current.replaceChildren(S);
			let C = registerOverlayPortal(D.current), T = (S) => __async(void 0, null, function* () {
				let C = O.getState(), T = C.state.indexes.nodes[x], D = `${T.parentId}:${T.zone}`, A = C.state.indexes.zones[D]?.contentIds.indexOf(x), j = S.target.innerText;
				k && (j = j.replaceAll(/\n/gm, ""));
				let M = setDeep(T.data.props, m, j), N = yield C.resolveComponentData(__spreadProps(__spreadValues({}, T.data), { props: M }), "replace");
				C.dispatch({
					type: "replace",
					data: N.node,
					destinationIndex: A,
					destinationZone: D
				});
			});
			return D.current.addEventListener("input", T), () => {
				var m;
				(m = D.current) == null || m.removeEventListener("input", T), C?.();
			};
		}
	}, [
		O,
		D.current,
		S,
		k
	]);
	let [A, j] = useState(!1), [M, N] = useState(!1);
	return /* @__PURE__ */ jsx("span", {
		className: getClassName18(),
		ref: D,
		contentEditable: A || M ? "plaintext-only" : "false",
		onClick: (m) => {
			m.preventDefault(), m.stopPropagation();
		},
		onClickCapture: (m) => {
			m.preventDefault(), m.stopPropagation();
			let S = getSelectorForId(O.getState().state, x);
			O.getState().setUi({ itemSelector: S });
		},
		onKeyDown: (m) => {
			m.stopPropagation(), (k && m.key === "Enter" || C) && m.preventDefault();
		},
		onKeyUp: (m) => {
			m.stopPropagation(), m.preventDefault();
		},
		onMouseOverCapture: () => j(!0),
		onMouseOutCapture: () => j(!1),
		onFocus: () => N(!0),
		onBlur: () => N(!1)
	});
}), getInlineTextTransform = () => ({
	text: ({ value: m, componentId: x, field: S, propPath: C, isReadOnly: T }) => S.contentEditable ? /* @__PURE__ */ jsx(InlineTextField, {
		propPath: C,
		componentId: x,
		value: m,
		opts: { disableLineBreaks: !0 },
		isReadOnly: T
	}) : m,
	textarea: ({ value: m, componentId: x, field: S, propPath: C, isReadOnly: T }) => S.contentEditable ? /* @__PURE__ */ jsx(InlineTextField, {
		propPath: C,
		componentId: x,
		value: m,
		isReadOnly: T
	}) : m,
	custom: ({ value: m, componentId: x, field: S, propPath: C, isReadOnly: T }) => S.contentEditable && typeof m == "string" ? /* @__PURE__ */ jsx(InlineTextField, {
		propPath: C,
		componentId: x,
		value: m,
		isReadOnly: T
	}) : m
}), getClassName19 = get_class_name_factory_default("DropZone", styles_module_default11), getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`, RENDER_DEBUG = !1, DropZoneEditPure = (m) => /* @__PURE__ */ jsx(DropZoneEdit, __spreadValues({}, m)), DropZoneChildMemo = memo(({ zoneCompound: m, componentId: x, index: S, dragAxis: C, collisionAxis: T, inDroppableZone: D }) => {
	let O = useAppStore((m) => m.metadata), { depth: k = 1 } = useContext(dropZoneContext) ?? {}, A = useContext(ZoneStoreContext), j = useAppStore(useShallow((m) => m.state.indexes.nodes[x]?.flatData.props)), M = useAppStore((m) => m.state.indexes.nodes[x]?.data.type), P = useAppStore(useShallow((m) => m.state.indexes.nodes[x]?.data.readOnly)), F = useMemo(() => {
		if (j) return expandNode({
			type: M,
			props: j
		});
		let S = A.getState().previewIndex[m];
		return x === S?.props.id ? {
			type: S.componentType,
			props: S.props,
			previewType: S.type,
			element: S.element
		} : null;
	}, [
		useAppStoreApi(),
		x,
		m,
		M,
		j
	]), I = useAppStore((m) => F?.type ? m.config.components[F.type] : null), L = useMemo(() => ({
		renderDropZone: DropZoneEditPure,
		isEditing: !0,
		dragRef: null,
		metadata: __spreadValues(__spreadValues({}, O), I?.metadata)
	}), [O, I?.metadata]), R = useAppStore((m) => m.overrides), B = useAppStore((m) => m.componentState[x]?.loadingCount > 0), V = useAppStore((m) => m.selectedItem?.props.id === x || !1), H = I?.label ?? F?.type.toString() ?? "Component", U = useMemo(() => function() {
		return F && "element" in F && F.element ? /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: F.element.outerHTML } }) : /* @__PURE__ */ jsx(DrawerItemInner, {
			name: H,
			children: R.componentItem ?? R.drawerItem
		});
	}, [
		x,
		H,
		R
	]), W = useMemo(() => __spreadProps(__spreadValues(__spreadValues({}, I?.defaultProps), F?.props), {
		puck: L,
		editMode: !0
	}), [
		I?.defaultProps,
		F?.props,
		L
	]), G = useMemo(() => ({
		type: F?.type ?? M,
		props: W
	}), [
		F?.type,
		M,
		W
	]), K = useAppStore((m) => m.config), J = useAppStore((m) => m.plugins), Y = useAppStore((m) => m.fieldTransforms), X = useFieldTransforms(K, G, useMemo(() => __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSlotTransform(DropZoneEditPure, (m) => /* @__PURE__ */ jsx(ContextSlotRender, {
		componentId: x,
		zone: m.zone
	}))), getInlineTextTransform()), J.reduce((m, x) => __spreadValues(__spreadValues({}, m), x.fieldTransforms), {})), Y), [J, Y]), P, B);
	if (!F) return;
	let Z = I ? I.render : () => /* @__PURE__ */ jsxs("div", {
		style: {
			padding: 48,
			textAlign: "center"
		},
		children: ["No configuration for ", F.type]
	}), OI = F.type, kI = "previewType" in F ? F.previewType === "insert" : !1;
	return kI && (Z = U), /* @__PURE__ */ jsx(DraggableComponent, {
		id: x,
		componentType: OI,
		zoneCompound: m,
		depth: k + 1,
		index: S,
		isLoading: B,
		isSelected: V,
		label: H,
		autoDragAxis: C,
		userDragAxis: T,
		inDroppableZone: D,
		children: (m) => I?.inline && !kI ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Z, __spreadProps(__spreadValues({}, X), { puck: __spreadProps(__spreadValues({}, X.puck), { dragRef: m }) })) }) : /* @__PURE__ */ jsx("div", {
			ref: m,
			children: /* @__PURE__ */ jsx(Z, __spreadValues({}, X))
		})
	});
}), DropZoneEdit = forwardRef(function({ zone: m, allow: x, disallow: S, style: C, className: T, minEmptyHeight: D = 128, collisionAxis: O }, k) {
	let A = useContext(dropZoneContext), j = useAppStoreApi(), { areaId: F, depth: I = 0, registerLocalZone: L, unregisterLocalZone: R } = A ?? {}, V = useAppStore(useShallow((m) => F ? m.state.indexes.nodes[F]?.path : null)), H = rootDroppableId;
	F && m !== rootDroppableId && (H = `${F}:${m}`);
	let U = H === rootDroppableId || m === rootDroppableId || F === "root", W = useContextStore(ZoneStoreContext, (m) => m.nextAreaDepthIndex[F || ""]), G = useAppStore(useShallow((m) => m.state.indexes.zones[H]?.contentIds)), K = useAppStore(useShallow((m) => m.state.indexes.zones[H]?.type));
	useEffect(() => {
		(!K || K === "dropzone") && A?.registerZone && A?.registerZone(H);
	}, [K, j]), useEffect(() => {
		K === "dropzone" && H !== rootDroppableId && console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots");
	}, [K]);
	let q = useMemo(() => G || [], [G]), DI = useRef(null), J = useCallback((m) => {
		if (!m) return !0;
		if (S) {
			let C = x || [];
			if ((S || []).filter((m) => C.indexOf(m) === -1).indexOf(m) !== -1) return !1;
		} else if (x && x.indexOf(m) === -1) return !1;
		return !0;
	}, [x, S]), Y = useContextStore(ZoneStoreContext, (m) => J(m.draggedItem?.data.componentType)), X = W || U, Z = useContextStore(ZoneStoreContext, (m) => {
		let x = !0;
		return x = m.zoneDepthIndex[H] ?? !1, x &&= Y, x;
	});
	useEffect(() => (L && L(H, Y || Z), () => {
		R && R(H);
	}), [
		Y,
		Z,
		H
	]);
	let [OI, kI] = useContentIdsWithPreview(q, H), AI = Z && (kI ? OI.length === 1 : OI.length === 0), jI = useContext(ZoneStoreContext);
	useEffect(() => {
		let { enabledIndex: m } = jI.getState();
		jI.setState({ enabledIndex: __spreadProps(__spreadValues({}, m), { [H]: Z }) });
	}, [
		Z,
		jI,
		H
	]);
	let { ref: MI } = useDroppable({
		id: H,
		collisionPriority: Z ? I : 0,
		disabled: !AI,
		collisionDetector: pointerIntersection,
		type: "dropzone",
		data: {
			areaId: F,
			depth: I,
			isDroppableTarget: Y,
			path: V || []
		}
	}), NI = useAppStore((m) => m?.selectedItem && F === m?.selectedItem.props.id), [Q] = useDragAxis(DI, O), [PI, $] = useMinEmptyHeight({
		zoneCompound: H,
		userMinEmptyHeight: D,
		ref: DI
	});
	return /* @__PURE__ */ jsx("div", {
		className: `${getClassName19({
			isRootZone: U,
			hoveringOverArea: X,
			isEnabled: Z,
			isAreaSelected: NI,
			hasChildren: q.length > 0,
			isAnimating: $
		})}${T ? ` ${T}` : ""}`,
		ref: (m) => {
			assignRefs([
				DI,
				MI,
				k
			], m);
		},
		"data-testid": `dropzone:${H}`,
		"data-puck-dropzone": H,
		style: __spreadProps(__spreadValues({}, C), {
			"--min-empty-height": `${PI}px`,
			backgroundColor: RENDER_DEBUG ? getRandomColor() : C?.backgroundColor
		}),
		children: OI.map((m, x) => /* @__PURE__ */ jsx(DropZoneChildMemo, {
			zoneCompound: H,
			componentId: m,
			dragAxis: Q,
			index: x,
			collisionAxis: O,
			inDroppableZone: Y
		}, m))
	});
}), DropZoneRenderItem = ({ config: m, item: x, metadata: S }) => {
	let C = m.components[x.type], T = useSlots(m, x, (x) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, x), {
		config: m,
		metadata: S
	})));
	return /* @__PURE__ */ jsx(DropZoneProvider, {
		value: useMemo(() => ({
			areaId: T.id,
			depth: 1
		}), [T]),
		children: /* @__PURE__ */ jsx(C.render, __spreadProps(__spreadValues({}, T), { puck: __spreadProps(__spreadValues({}, T.puck), {
			renderDropZone: DropZoneRenderPure,
			metadata: __spreadValues(__spreadValues({}, S), C.metadata)
		}) }))
	}, T.id);
}, DropZoneRenderPure = (m) => /* @__PURE__ */ jsx(DropZoneRender, __spreadValues({}, m)), DropZoneRender = forwardRef(function({ className: m, style: x, zone: S }, C) {
	let T = useContext(dropZoneContext), { areaId: D = "root" } = T || {}, { config: O, data: k, metadata: A } = useContext(renderContext), j = `${D}:${S}`, M = k?.content || [];
	return useEffect(() => {
		M || T?.registerZone && T?.registerZone(j);
	}, [M]), !k || !O ? null : (j !== rootDroppableId && (M = setupZone(k, j).zones[j]), /* @__PURE__ */ jsx("div", {
		className: m,
		style: x,
		ref: C,
		children: M.map((m) => O.components[m.type] ? /* @__PURE__ */ jsx(DropZoneRenderItem, {
			config: O,
			item: m,
			metadata: A
		}, m.props.id) : null)
	}));
}), DropZonePure = (m) => /* @__PURE__ */ jsx(DropZone, __spreadValues({}, m)), DropZone = forwardRef(function(m, x) {
	return useContext(dropZoneContext)?.mode === "edit" ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(DropZoneEdit, __spreadProps(__spreadValues({}, m), { ref: x })) }) : /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(DropZoneRender, __spreadProps(__spreadValues({}, m), { ref: x })) });
}), renderContext = React2.createContext({
	config: { components: {} },
	data: {
		root: {},
		content: []
	},
	metadata: {}
});
function Render({ config: m, data: x, metadata: S = {} }) {
	let C = __spreadProps(__spreadValues({}, x), {
		root: x.root || {},
		content: x.content || []
	}), T = "props" in C.root ? C.root.props : C.root, D = T?.title || "", O = useSlots(m, {
		type: "root",
		props: __spreadProps(__spreadValues({}, T), {
			puck: {
				renderDropZone: DropZonePure,
				isEditing: !1,
				dragRef: null,
				metadata: S
			},
			title: D,
			editMode: !1,
			id: "puck-root"
		})
	}, (x) => /* @__PURE__ */ jsx(SlotRender, __spreadProps(__spreadValues({}, x), {
		config: m,
		metadata: S
	}))), k = useMemo(() => ({
		mode: "render",
		depth: 0
	}), []);
	return m.root?.render ? /* @__PURE__ */ jsx(renderContext.Provider, {
		value: {
			config: m,
			data: C,
			metadata: S
		},
		children: /* @__PURE__ */ jsx(DropZoneProvider, {
			value: k,
			children: /* @__PURE__ */ jsx(m.root.render, __spreadProps(__spreadValues({}, O), { children: /* @__PURE__ */ jsx(DropZoneRenderPure, { zone: rootZone }) }))
		})
	}) : /* @__PURE__ */ jsx(renderContext.Provider, {
		value: {
			config: m,
			data: C,
			metadata: S
		},
		children: /* @__PURE__ */ jsx(DropZoneProvider, {
			value: k,
			children: /* @__PURE__ */ jsx(DropZoneRenderPure, { zone: rootZone })
		})
	});
}
init_react_import();
var generateUsePuck = (m) => {
	let x = {
		back: m.history.back,
		forward: m.history.forward,
		setHistories: m.history.setHistories,
		setHistoryIndex: m.history.setHistoryIndex,
		hasPast: m.history.hasPast(),
		hasFuture: m.history.hasFuture(),
		histories: m.history.histories,
		index: m.history.index
	};
	return {
		appState: makeStatePublic(m.state),
		config: m.config,
		dispatch: m.dispatch,
		getPermissions: m.permissions.getPermissions,
		refreshPermissions: m.permissions.refreshPermissions,
		history: x,
		selectedItem: m.selectedItem || null,
		getItemBySelector: (x) => getItem(x, m.state),
		getItemById: (x) => m.state.indexes.nodes[x].data,
		getSelectorForId: (x) => getSelectorForId(m.state, x)
	};
}, UsePuckStoreContext = createContext(null), convertToPickedStore = (m) => ({
	state: m.state,
	config: m.config,
	dispatch: m.dispatch,
	permissions: m.permissions,
	history: m.history,
	selectedItem: m.selectedItem
}), useRegisterUsePuckStore = (m) => {
	let [x] = useState(() => createStore(() => generateUsePuck(convertToPickedStore(m.getState()))));
	return useEffect(() => m.subscribe((m) => convertToPickedStore(m), (m) => {
		x.setState(generateUsePuck(m));
	}), []), x;
};
init_react_import(), init_react_import(), init_react_import();
var styles_module_default14 = {
	SidebarSection: "_SidebarSection_8boj8_1",
	"SidebarSection-title": "_SidebarSection-title_8boj8_12",
	"SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_8boj8_20",
	"SidebarSection-content": "_SidebarSection-content_8boj8_24",
	"SidebarSection--noPadding": "_SidebarSection--noPadding_8boj8_28",
	"SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_8boj8_41",
	"SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_8boj8_70",
	"SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_8boj8_41",
	"SidebarSection-heading": "_SidebarSection-heading_8boj8_82",
	"SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_8boj8_86"
};
init_react_import();
var useBreadcrumbs = (m) => {
	let x = useAppStore((m) => m.selectedItem?.props.id), S = useAppStore((m) => m.config), C = useAppStore((m) => m.state.indexes.nodes[x]?.path), T = useAppStoreApi();
	return useMemo(() => {
		let x = C?.map((m) => {
			let [x] = m.split(":");
			if (x === "root") return {
				label: "Page",
				selector: null
			};
			let C = T.getState().state.indexes.nodes[x], D = C.path[C.path.length - 1], O = (T.getState().state.indexes.zones[D]?.contentIds || []).indexOf(x);
			return {
				label: C ? S.components[C.data.type]?.label ?? C.data.type : "Component",
				selector: C ? {
					index: O,
					zone: C.path[C.path.length - 1]
				} : null
			};
		}) || [];
		return m ? x.slice(x.length - m) : x;
	}, [C, m]);
}, getClassName20 = get_class_name_factory_default("SidebarSection", styles_module_default14), SidebarSection = ({ children: m, title: x, background: S, showBreadcrumbs: C, noBorderTop: T, noPadding: D, isLoading: O }) => {
	let k = useAppStore((m) => m.setUi), A = useBreadcrumbs(1);
	return /* @__PURE__ */ jsxs("div", {
		className: getClassName20({
			noBorderTop: T,
			noPadding: D
		}),
		style: { background: S },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: getClassName20("title"),
				children: /* @__PURE__ */ jsxs("div", {
					className: getClassName20("breadcrumbs"),
					children: [C ? A.map((m, x) => /* @__PURE__ */ jsxs("div", {
						className: getClassName20("breadcrumb"),
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							className: getClassName20("breadcrumbLabel"),
							onClick: () => k({ itemSelector: m.selector }),
							children: m.label
						}), /* @__PURE__ */ jsx(ChevronRight, { size: 16 })]
					}, x)) : null, /* @__PURE__ */ jsx("div", {
						className: getClassName20("heading"),
						children: /* @__PURE__ */ jsx(Heading, {
							rank: "2",
							size: "xs",
							children: x
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: getClassName20("content"),
				children: m
			}),
			O && /* @__PURE__ */ jsx("div", {
				className: getClassName20("loadingOverlay"),
				children: /* @__PURE__ */ jsx(Loader, { size: 32 })
			})
		]
	});
};
init_react_import();
var styles_module_default15 = {
	Puck: "_Puck_1yxlw_19",
	"Puck-portal": "_Puck-portal_1yxlw_31",
	"PuckLayout-inner": "_PuckLayout-inner_1yxlw_38",
	"PuckLayout--mounted": "_PuckLayout--mounted_1yxlw_59",
	"PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_1yxlw_63",
	"PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_1yxlw_69",
	"PuckLayout-mounted": "_PuckLayout-mounted_1yxlw_83",
	PuckLayout: "_PuckLayout_1yxlw_38"
};
init_react_import(), init_react_import();
var getClassName21 = get_class_name_factory_default("PuckFields", {
	PuckFields: "_PuckFields_10bh7_1",
	"PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6",
	"PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10",
	"PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25",
	"PuckFields-field": "_PuckFields-field_10bh7_32",
	"PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36"
}), DefaultFields = ({ children: m }) => /* @__PURE__ */ jsx(Fragment$1, { children: m }), createOnChange = (m, x) => (S, C) => __async(void 0, null, function* () {
	let T, { dispatch: D, state: O, selectedItem: k, resolveComponentData: A } = x.getState(), { data: j, ui: M } = O, { itemSelector: N } = M, P = j.root.props || j.root;
	T = k ? k.props : P;
	let F = __spreadProps(__spreadValues({}, T), { [m]: S });
	k && N ? D({
		type: "replace",
		destinationIndex: N.index,
		destinationZone: N.zone || rootDroppableId,
		data: (yield A(__spreadProps(__spreadValues({}, k), { props: F }), "replace")).node,
		ui: C
	}) : j.root.props ? D({
		type: "replaceRoot",
		root: (yield A(__spreadProps(__spreadValues({}, j.root), { props: F }), "replace")).node,
		ui: __spreadValues(__spreadValues({}, M), C),
		recordHistory: !0
	}) : D({
		type: "setData",
		data: { root: F }
	});
}), FieldsChildMemo = memo(({ fieldName: m }) => {
	let x = useAppStore((x) => x.fields.fields[m]), S = useAppStore((x) => ((x.selectedItem ? x.selectedItem.readOnly : x.state.data.root.readOnly) || {})[m]), C = useAppStore((x) => {
		let S = x.state.data.root.props || x.state.data.root;
		return x.selectedItem ? x.selectedItem.props[m] : S[m];
	}), T = useAppStore((S) => x ? S.selectedItem ? `${S.selectedItem.props.id}_${x.type}_${m}` : `root_${x.type}_${m}` : null), D = useAppStore(useShallow((m) => {
		let { selectedItem: x, permissions: S } = m;
		return x ? S.getPermissions({ item: x }) : S.getPermissions({ root: !0 });
	})), O = useCallback(createOnChange(m, useAppStoreApi()), [m]), { visible: k = !0 } = x ?? {};
	return !x || !T || !k || x.type === "slot" ? null : /* @__PURE__ */ jsx("div", {
		className: getClassName21("field"),
		children: /* @__PURE__ */ jsx(AutoFieldPrivate, {
			field: x,
			name: m,
			id: T,
			readOnly: !D.edit || S,
			value: C,
			onChange: O
		})
	}, T);
}), Fields = memo(({ wrapFields: m = !0 }) => {
	let x = useAppStore((m) => m.overrides), S = useAppStore((m) => ((m.selectedItem ? m.componentState[m.selectedItem.props.id]?.loadingCount : m.componentState.root?.loadingCount) ?? 0) > 0), C = useAppStore(useShallow((m) => m.state.ui.itemSelector)), T = useAppStore((m) => m.selectedItem?.props.id);
	useRegisterFieldsSlice(useAppStoreApi(), T);
	let D = useAppStore((m) => m.fields.loading), O = useAppStore(useShallow((m) => m.fields.id === T ? Object.keys(m.fields.fields) : [])), k = D || S, A = useMemo(() => x.fields || DefaultFields, [x]);
	return /* @__PURE__ */ jsxs("form", {
		className: getClassName21({ wrapFields: m }),
		onSubmit: (m) => {
			m.preventDefault();
		},
		children: [/* @__PURE__ */ jsx(A, {
			isLoading: k,
			itemSelector: C,
			children: O.map((m) => /* @__PURE__ */ jsx(FieldsChildMemo, { fieldName: m }, m))
		}), k && /* @__PURE__ */ jsx("div", {
			className: getClassName21("loadingOverlay"),
			children: /* @__PURE__ */ jsx("div", {
				className: getClassName21("loadingOverlayInner"),
				children: /* @__PURE__ */ jsx(Loader, { size: 16 })
			})
		})]
	});
});
init_react_import(), init_react_import(), init_react_import(), init_react_import();
var getClassName22 = get_class_name_factory_default("ComponentList", {
	ComponentList: "_ComponentList_1rrlt_1",
	"ComponentList--isExpanded": "_ComponentList--isExpanded_1rrlt_5",
	"ComponentList-content": "_ComponentList-content_1rrlt_9",
	"ComponentList-title": "_ComponentList-title_1rrlt_17",
	"ComponentList-titleIcon": "_ComponentList-titleIcon_1rrlt_53"
}), ComponentListItem = ({ name: m, label: x }) => {
	let S = useAppStore((m) => m.overrides), C = useAppStore((x) => x.permissions.getPermissions({ type: m }).insert);
	return useEffect(() => {
		S.componentItem && console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`");
	}, [S]), /* @__PURE__ */ jsx(Drawer.Item, {
		label: x,
		name: m,
		isDragDisabled: !C,
		children: S.componentItem ?? S.drawerItem
	});
}, ComponentList = ({ children: m, title: x, id: S }) => {
	let C = useAppStore((m) => m.config), T = useAppStore((m) => m.setUi), D = useAppStore((m) => m.state.ui.componentList), { expanded: O = !0 } = D[S] || {};
	return /* @__PURE__ */ jsxs("div", {
		className: getClassName22({ isExpanded: O }),
		children: [x && /* @__PURE__ */ jsxs("button", {
			type: "button",
			className: getClassName22("title"),
			onClick: () => T({ componentList: __spreadProps(__spreadValues({}, D), { [S]: __spreadProps(__spreadValues({}, D[S]), { expanded: !O }) }) }),
			title: O ? `Collapse${x ? ` ${x}` : ""}` : `Expand${x ? ` ${x}` : ""}`,
			children: [/* @__PURE__ */ jsx("div", { children: x }), /* @__PURE__ */ jsx("div", {
				className: getClassName22("titleIcon"),
				children: jsx(O ? ChevronUp : ChevronDown, { size: 12 })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: getClassName22("content"),
			children: /* @__PURE__ */ jsx(Drawer, { children: m || Object.keys(C.components).map((m) => /* @__PURE__ */ jsx(ComponentListItem, {
				label: C.components[m].label ?? m,
				name: m
			}, m)) })
		})]
	});
};
ComponentList.Item = ComponentListItem;
var useComponentList = () => {
	let [m, x] = useState(), S = useAppStore((m) => m.config), C = useAppStore((m) => m.state.ui.componentList);
	return useEffect(() => {
		if (Object.keys(C).length > 0) {
			let m = [], T;
			T = Object.entries(C).map(([x, C]) => !C.components || (C.components.forEach((x) => {
				m.push(x);
			}), C.visible === !1) ? null : /* @__PURE__ */ jsx(ComponentList, {
				id: x,
				title: C.title || x,
				children: C.components.map((m, x) => {
					let C = S.components[m] || {};
					return /* @__PURE__ */ jsx(ComponentList.Item, {
						label: C.label ?? m,
						name: m,
						index: x
					}, m);
				})
			}, x));
			let D = Object.keys(S.components).filter((x) => m.indexOf(x) === -1);
			D.length > 0 && !C.other?.components && C.other?.visible !== !1 && T.push(/* @__PURE__ */ jsx(ComponentList, {
				id: "other",
				title: C.other?.title || "Other",
				children: D.map((m, x) => {
					let C = S.components[m] || {};
					return /* @__PURE__ */ jsx(ComponentList.Item, {
						name: m,
						label: C.label ?? m,
						index: x
					}, m);
				})
			}, "other")), x(T);
		}
	}, [
		S.categories,
		S.components,
		C
	]), m;
}, Components = () => {
	let m = useAppStore((m) => m.overrides), x = useComponentList();
	return /* @__PURE__ */ jsx(useMemo(() => (m.components && console.warn("The `components` override has been deprecated and renamed to `drawer`"), m.components || m.drawer || "div"), [m]), { children: x || /* @__PURE__ */ jsx(ComponentList, { id: "all" }) });
};
init_react_import(), init_react_import();
var styleSelector = "style, link[rel=\"stylesheet\"]", collectStyles = (m) => {
	let x = [];
	return m.querySelectorAll(styleSelector).forEach((m) => {
		m.tagName === "STYLE" ? m.innerHTML.trim() && x.push(m) : x.push(m);
	}), x;
}, getStyleSheet = (m) => Array.from(document.styleSheets).find((x) => x.ownerNode.href === m.href), getStyles = (m) => {
	if (m) try {
		return [...Array.from(m.cssRules)].map((m) => m.cssText).join("");
	} catch {
		console.warn("Access to stylesheet %s is denied. Ignoring…", m.href);
	}
	return "";
}, syncAttributes = (m, x) => {
	let S = m.attributes;
	S?.length > 0 && Array.from(S).forEach((m) => {
		x.setAttribute(m.name, m.value);
	});
}, defer = (m) => setTimeout(m, 0), CopyHostStyles = ({ children: m, debug: x = !1, onStylesLoaded: S = () => null }) => {
	let { document: C, window: T } = useFrame();
	return useEffect(() => {
		if (!T || !C) return () => {};
		let m = [], D = {}, O = (x) => m.findIndex((m) => m.original === x), k = (m, S = !1) => __async(void 0, null, function* () {
			let C;
			if (m.nodeName === "LINK" && S) {
				C = document.createElement("style"), C.type = "text/css";
				let S = getStyleSheet(m);
				S ||= (yield new Promise((x) => {
					let S = () => {
						x(), m.removeEventListener("load", S);
					};
					m.addEventListener("load", S);
				}), getStyleSheet(m));
				let T = getStyles(S);
				if (!T) {
					x && console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");
					return;
				}
				C.innerHTML = T, C.setAttribute("data-href", m.getAttribute("href"));
			} else C = m.cloneNode(!0);
			return C;
		}), A = (S) => __async(void 0, null, function* () {
			let T = O(S);
			if (T > -1) {
				x && console.log("Tried to add an element that was already mirrored. Updating instead..."), m[T].mirror.innerText = S.innerText;
				return;
			}
			let A = yield k(S);
			if (!A) return;
			let j = (0, import_object_hash.default)(A.outerHTML);
			if (D[j]) {
				x && console.log("iframe already contains element that is being mirrored. Skipping...");
				return;
			}
			D[j] = !0, C.head.append(A), m.push({
				original: S,
				mirror: A
			}), x && console.log(`Added style node ${S.outerHTML}`);
		}), j = (S) => {
			var C;
			let T = O(S);
			if (T === -1) {
				x && console.log("Tried to remove an element that did not exist. Skipping...");
				return;
			}
			let k = (0, import_object_hash.default)(S.outerHTML);
			(C = m[T]?.mirror) == null || C.remove(), delete D[k], x && console.log(`Removed style node ${S.outerHTML}`);
		}, M = new MutationObserver((m) => {
			m.forEach((m) => {
				m.type === "childList" && (m.addedNodes.forEach((m) => {
					if (m.nodeType === Node.TEXT_NODE || m.nodeType === Node.ELEMENT_NODE) {
						let x = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
						x && x.matches(styleSelector) && defer(() => A(x));
					}
				}), m.removedNodes.forEach((m) => {
					if (m.nodeType === Node.TEXT_NODE || m.nodeType === Node.ELEMENT_NODE) {
						let x = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
						x && x.matches(styleSelector) && defer(() => j(x));
					}
				}));
			});
		}), N = T.parent.document, P = collectStyles(N), F = [], I = 0, L = N.getElementsByTagName("html")[0];
		syncAttributes(L, C.documentElement);
		let R = N.getElementsByTagName("body")[0];
		return syncAttributes(R, C.body), Promise.all(P.map((x, S) => __async(void 0, null, function* () {
			if (x.nodeName === "LINK") {
				let m = x.href;
				if (F.indexOf(m) > -1) return;
				F.push(m);
			}
			let S = yield k(x);
			if (S) return m.push({
				original: x,
				mirror: S
			}), S;
		}))).then((x) => {
			let T = x.filter((m) => m !== void 0);
			T.forEach((x) => {
				x.onload = () => {
					I += 1, I >= m.length && S();
				}, x.onerror = () => {
					console.warn("AutoFrame couldn't load a stylesheet"), I += 1, I >= m.length && S();
				};
			}), C.head.innerHTML = "", C.head.append(...T), M.observe(N.head, {
				childList: !0,
				subtree: !0
			}), T.forEach((m) => {
				let x = (0, import_object_hash.default)(m.outerHTML);
				D[x] = !0;
			});
		}), () => {
			M.disconnect();
		};
	}, []), /* @__PURE__ */ jsx(Fragment$1, { children: m });
}, autoFrameContext = createContext({}), useFrame = () => useContext(autoFrameContext);
function AutoFrame(m) {
	var x = m, { children: S, className: C, debug: T, id: D, onReady: O = () => {}, onNotReady: k = () => {}, frameRef: A } = x, j = __objRest(x, [
		"children",
		"className",
		"debug",
		"id",
		"onReady",
		"onNotReady",
		"frameRef"
	]);
	let [M, N] = useState(!1), [F, I] = useState({}), [L, R] = useState(), [z, B] = useState(!1);
	return useEffect(() => {
		if (A.current) {
			let m = A.current.contentDocument, x = A.current.contentWindow;
			I({
				document: m || void 0,
				window: x || void 0
			}), R(A.current.contentDocument?.getElementById("frame-root")), m && x && z ? O() : k();
		}
	}, [
		A,
		M,
		z
	]), /* @__PURE__ */ jsx("iframe", __spreadProps(__spreadValues({}, j), {
		className: C,
		id: D,
		srcDoc: "<!DOCTYPE html><html><head></head><body><div id=\"frame-root\" data-puck-entry></div></body></html>",
		ref: A,
		onLoad: () => {
			N(!0);
		},
		children: /* @__PURE__ */ jsx(autoFrameContext.Provider, {
			value: F,
			children: M && L && /* @__PURE__ */ jsx(CopyHostStyles, {
				debug: T,
				onStylesLoaded: () => B(!0),
				children: createPortal(S, L)
			})
		})
	}));
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;
init_react_import();
var getClassName23 = get_class_name_factory_default("PuckPreview", {
	PuckPreview: "_PuckPreview_z2rgu_1",
	"PuckPreview-frame": "_PuckPreview-frame_z2rgu_6"
}), useBubbleIframeEvents = (m) => {
	let x = useAppStore((m) => m.status);
	useEffect(() => {
		if (m.current && x === "READY") {
			let x = m.current, S = (m) => {
				let S = new BubbledPointerEvent("pointermove", __spreadProps(__spreadValues({}, m), {
					bubbles: !0,
					cancelable: !1,
					clientX: m.clientX,
					clientY: m.clientY,
					originalTarget: m.target
				}));
				x.dispatchEvent(S);
			}, C = () => {
				var m;
				T(), (m = x.contentDocument) == null || m.addEventListener("pointermove", S, { capture: !0 });
			}, T = () => {
				var m;
				(m = x.contentDocument) == null || m.removeEventListener("pointermove", S);
			};
			return C(), () => {
				T();
			};
		}
	}, [x]);
}, Preview2 = ({ id: m = "puck-preview" }) => {
	let x = useAppStore((m) => m.dispatch), S = useAppStore((m) => m.state.data.root), C = useAppStore((m) => m.config), T = useAppStore((m) => m.setStatus), D = useAppStore((m) => m.iframe), O = useAppStore((m) => m.overrides), k = useAppStore((m) => m.metadata), A = useAppStore((m) => m.state.ui.previewMode === "edit" ? null : m.state.data), j = useCallback((m) => {
		let x = useSlots(C, {
			type: "root",
			props: m
		}, DropZoneEditPure);
		return C.root?.render ? C.root?.render(__spreadValues({ id: "puck-root" }, x)) : /* @__PURE__ */ jsx(Fragment$1, { children: x.children });
	}, [C]), N = useMemo(() => O.iframe, [O]), F = S.props || S, I = useRef(null);
	useBubbleIframeEvents(I);
	let L = A ? /* @__PURE__ */ jsx(Render, {
		data: A,
		config: C,
		metadata: k
	}) : /* @__PURE__ */ jsx(j, __spreadProps(__spreadValues({}, F), {
		puck: {
			renderDropZone: DropZonePure,
			isEditing: !0,
			dragRef: null,
			metadata: k
		},
		editMode: !0,
		children: /* @__PURE__ */ jsx(DropZonePure, { zone: rootDroppableId })
	}));
	return useEffect(() => {
		D.enabled || T("READY");
	}, [D.enabled]), /* @__PURE__ */ jsx("div", {
		className: getClassName23(),
		id: m,
		"data-puck-preview": !0,
		onClick: (m) => {
			let S = m.target;
			!S.hasAttribute("data-puck-component") && !S.hasAttribute("data-puck-dropzone") && x({
				type: "setUi",
				ui: { itemSelector: null }
			});
		},
		children: D.enabled ? /* @__PURE__ */ jsx(AutoFrame_default, {
			id: "preview-frame",
			className: getClassName23("frame"),
			"data-rfd-iframe": !0,
			onReady: () => {
				T("READY");
			},
			onNotReady: () => {
				T("MOUNTED");
			},
			frameRef: I,
			children: /* @__PURE__ */ jsx(autoFrameContext.Consumer, { children: ({ document: m }) => N ? /* @__PURE__ */ jsx(N, {
				document: m,
				children: L
			}) : L })
		}) : /* @__PURE__ */ jsx("div", {
			id: "preview-frame",
			className: getClassName23("frame"),
			ref: I,
			"data-puck-entry": !0,
			children: L
		})
	});
};
init_react_import(), init_react_import(), init_react_import();
var styles_module_default19 = {
	LayerTree: "_LayerTree_7rx04_1",
	"LayerTree-zoneTitle": "_LayerTree-zoneTitle_7rx04_11",
	"LayerTree-helper": "_LayerTree-helper_7rx04_17",
	Layer: "_Layer_7rx04_1",
	"Layer-inner": "_Layer-inner_7rx04_29",
	"Layer--containsZone": "_Layer--containsZone_7rx04_35",
	"Layer-clickable": "_Layer-clickable_7rx04_39",
	"Layer--isSelected": "_Layer--isSelected_7rx04_61",
	"Layer-chevron": "_Layer-chevron_7rx04_77",
	"Layer--childIsSelected": "_Layer--childIsSelected_7rx04_78",
	"Layer-zones": "_Layer-zones_7rx04_82",
	"Layer-title": "_Layer-title_7rx04_96",
	"Layer-name": "_Layer-name_7rx04_105",
	"Layer-icon": "_Layer-icon_7rx04_111",
	"Layer-zoneIcon": "_Layer-zoneIcon_7rx04_116"
};
init_react_import();
var scrollIntoView = (m) => {
	let x = __spreadValues({}, m.style);
	m.style.scrollMargin = "256px", m && (m?.scrollIntoView({ behavior: "smooth" }), m.style.scrollMargin = x.scrollMargin || "");
};
init_react_import();
var onScrollEnd = (m, x) => {
	let S, C = function() {
		clearTimeout(S), S = setTimeout(function() {
			x(), m?.removeEventListener("scroll", C);
		}, 50);
	};
	m?.addEventListener("scroll", C), setTimeout(() => {
		S || x();
	}, 50);
}, getClassName24 = get_class_name_factory_default("LayerTree", styles_module_default19), getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default19), Layer = ({ index: m, itemId: x, zoneCompound: S }) => {
	let C = useAppStore((m) => m.config), T = useAppStore((m) => m.state.ui.itemSelector), D = useAppStore((m) => m.dispatch), O = useCallback((m) => {
		D({
			type: "setUi",
			ui: { itemSelector: m }
		});
	}, [D]), k = useAppStore((m) => m.selectedItem?.props.id) === x || T && T.zone === rootDroppableId && !S, A = useAppStore((m) => m.state.indexes.nodes[x]), j = useAppStore(useShallow((m) => Object.keys(m.state.indexes.zones).filter((m) => m.split(":")[0] === x))), P = j.length > 0, F = useContext(ZoneStoreContext), I = useContextStore(ZoneStoreContext, (m) => m.hoveringComponent === x), L = useAppStore((m) => m.state.indexes.nodes[m.selectedItem?.props.id]?.path.some((m) => {
		let [S] = m.split(":");
		return S === x;
	}) ?? !1), R = C.components[A.data.type]?.label ?? A.data.type.toString();
	return /* @__PURE__ */ jsxs("li", {
		className: getClassNameLayer({
			isSelected: k,
			isHovering: I,
			containsZone: P,
			childIsSelected: L
		}),
		children: [/* @__PURE__ */ jsx("div", {
			className: getClassNameLayer("inner"),
			children: /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: getClassNameLayer("clickable"),
				onClick: () => {
					if (k) {
						O(null);
						return;
					}
					let C = getFrame(), T = C?.querySelector(`[data-puck-component="${x}"]`);
					if (!T) {
						O({
							index: m,
							zone: S
						});
						return;
					}
					scrollIntoView(T), onScrollEnd(C, () => {
						O({
							index: m,
							zone: S
						});
					});
				},
				onMouseEnter: (m) => {
					m.stopPropagation(), F.setState({ hoveringComponent: x });
				},
				onMouseLeave: (m) => {
					m.stopPropagation(), F.setState({ hoveringComponent: null });
				},
				children: [P && /* @__PURE__ */ jsx("div", {
					className: getClassNameLayer("chevron"),
					title: k ? "Collapse" : "Expand",
					children: /* @__PURE__ */ jsx(ChevronDown, { size: "12" })
				}), /* @__PURE__ */ jsxs("div", {
					className: getClassNameLayer("title"),
					children: [/* @__PURE__ */ jsx("div", {
						className: getClassNameLayer("icon"),
						children: A.data.type === "Text" || A.data.type === "Heading" ? /* @__PURE__ */ jsx(Type, { size: "16" }) : /* @__PURE__ */ jsx(LayoutGrid, { size: "16" })
					}), /* @__PURE__ */ jsx("div", {
						className: getClassNameLayer("name"),
						children: R
					})]
				})]
			})
		}), P && j.map((m) => /* @__PURE__ */ jsx("div", {
			className: getClassNameLayer("zones"),
			children: /* @__PURE__ */ jsx(LayerTree, { zoneCompound: m })
		}, m))]
	});
}, LayerTree = ({ label: m, zoneCompound: x }) => {
	let S = useAppStore((S) => {
		if (m) return m;
		if (x === rootDroppableId) return;
		let [C, T] = x.split(":"), D = S.state.indexes.nodes[C]?.data.type;
		return (D && D !== "root" ? S.config.components[D] : S.config.root)?.fields?.[T]?.label ?? T;
	}), C = useAppStore(useShallow((m) => x ? m.state.indexes.zones[x]?.contentIds ?? [] : []));
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [S && /* @__PURE__ */ jsxs("div", {
		className: getClassName24("zoneTitle"),
		children: [/* @__PURE__ */ jsx("div", {
			className: getClassName24("zoneIcon"),
			children: /* @__PURE__ */ jsx(Layers, { size: "16" })
		}), S]
	}), /* @__PURE__ */ jsxs("ul", {
		className: getClassName24(),
		children: [C.length === 0 && /* @__PURE__ */ jsx("div", {
			className: getClassName24("helper"),
			children: "No items"
		}), C.map((m, S) => /* @__PURE__ */ jsx(Layer, {
			index: S,
			itemId: m,
			zoneCompound: x
		}, m))]
	})] });
};
init_react_import();
var findZonesForArea = (m, x) => Object.keys(m.indexes.zones).filter((m) => m.split(":")[0] === x), Outline = () => {
	let m = useAppStore((m) => m.overrides.outline), x = useAppStore(useShallow((m) => findZonesForArea(m.state, "root")));
	return /* @__PURE__ */ jsx(useMemo(() => m || "div", [m]), { children: x.map((m) => /* @__PURE__ */ jsx(LayerTree, {
		label: x.length === 1 ? "" : m.split(":")[1],
		zoneCompound: m
	}, m)) });
};
init_react_import(), init_react_import(), init_react_import();
var styles_module_default20 = {
	ViewportControls: "_ViewportControls_gejzr_1",
	"ViewportControls-divider": "_ViewportControls-divider_gejzr_15",
	"ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_gejzr_21",
	"ViewportButton--isActive": "_ViewportButton--isActive_gejzr_38",
	"ViewportButton-inner": "_ViewportButton-inner_gejzr_38"
}, icons = {
	Smartphone: /* @__PURE__ */ jsx(Smartphone, { size: 16 }),
	Tablet: /* @__PURE__ */ jsx(Tablet, { size: 16 }),
	Monitor: /* @__PURE__ */ jsx(Monitor, { size: 16 })
}, getClassName25 = get_class_name_factory_default("ViewportControls", styles_module_default20), getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default20), ViewportButton = ({ children: m, height: x = "auto", title: S, width: C, onClick: T }) => {
	let D = useAppStore((m) => m.state.ui.viewports), [O, k] = useState(!1);
	return useEffect(() => {
		k(C === D.current.width);
	}, [C, D.current.width]), /* @__PURE__ */ jsx("span", {
		className: getClassNameButton({ isActive: O }),
		children: /* @__PURE__ */ jsx(IconButton, {
			type: "button",
			title: S,
			disabled: O,
			onClick: (m) => {
				m.stopPropagation(), T({
					width: C,
					height: x
				});
			},
			children: /* @__PURE__ */ jsx("span", {
				className: getClassNameButton("inner"),
				children: m
			})
		})
	});
}, defaultZoomOptions = [
	{
		label: "25%",
		value: .25
	},
	{
		label: "50%",
		value: .5
	},
	{
		label: "75%",
		value: .75
	},
	{
		label: "100%",
		value: 1
	},
	{
		label: "125%",
		value: 1.25
	},
	{
		label: "150%",
		value: 1.5
	},
	{
		label: "200%",
		value: 2
	}
], ViewportControls = ({ autoZoom: m, zoom: x, onViewportChange: S, onZoom: C }) => {
	let T = useAppStore((m) => m.viewports), D = defaultZoomOptions.find((x) => x.value === m), O = useMemo(() => [...defaultZoomOptions, ...D ? [] : [{
		value: m,
		label: `${(m * 100).toFixed(0)}% (Auto)`
	}]].filter((x) => x.value <= m).sort((m, x) => m.value > x.value ? 1 : -1), [m]);
	return /* @__PURE__ */ jsxs("div", {
		className: getClassName25(),
		children: [
			T.map((m, x) => /* @__PURE__ */ jsx(ViewportButton, {
				height: m.height,
				width: m.width,
				title: m.label ? `Switch to ${m.label} viewport` : "Switch viewport",
				onClick: S,
				children: typeof m.icon == "string" ? icons[m.icon] || m.icon : m.icon || icons.Smartphone
			}, x)),
			/* @__PURE__ */ jsx("div", { className: getClassName25("divider") }),
			/* @__PURE__ */ jsx(IconButton, {
				type: "button",
				title: "Zoom viewport out",
				disabled: x <= O[0]?.value,
				onClick: (m) => {
					m.stopPropagation(), C(O[Math.max(O.findIndex((m) => m.value === x) - 1, 0)].value);
				},
				children: /* @__PURE__ */ jsx(ZoomOut, { size: 16 })
			}),
			/* @__PURE__ */ jsx(IconButton, {
				type: "button",
				title: "Zoom viewport in",
				disabled: x >= O[O.length - 1]?.value,
				onClick: (m) => {
					m.stopPropagation(), C(O[Math.min(O.findIndex((m) => m.value === x) + 1, O.length - 1)].value);
				},
				children: /* @__PURE__ */ jsx(ZoomIn, { size: 16 })
			}),
			/* @__PURE__ */ jsx("div", { className: getClassName25("divider") }),
			/* @__PURE__ */ jsx("select", {
				className: getClassName25("zoomSelect"),
				value: x.toString(),
				onClick: (m) => {
					m.stopPropagation();
				},
				onChange: (m) => {
					C(parseFloat(m.currentTarget.value));
				},
				children: O.map((m) => /* @__PURE__ */ jsx("option", {
					value: m.value,
					label: m.label
				}, m.label))
			})
		]
	});
};
init_react_import();
var styles_module_default21 = {
	PuckCanvas: "_PuckCanvas_18jay_1",
	"PuckCanvas-controls": "_PuckCanvas-controls_18jay_16",
	"PuckCanvas-inner": "_PuckCanvas-inner_18jay_21",
	"PuckCanvas-root": "_PuckCanvas-root_18jay_30",
	"PuckCanvas--ready": "_PuckCanvas--ready_18jay_55",
	"PuckCanvas-loader": "_PuckCanvas-loader_18jay_60",
	"PuckCanvas--showLoader": "_PuckCanvas--showLoader_18jay_70"
};
init_react_import();
var FrameContext = createContext(null), FrameProvider = ({ children: m }) => {
	let x = useRef(null), S = useMemo(() => ({ frameRef: x }), []);
	return /* @__PURE__ */ jsx(FrameContext.Provider, {
		value: S,
		children: m
	});
}, useCanvasFrame = () => {
	let m = useContext(FrameContext);
	if (m === null) throw Error("useCanvasFrame must be used within a FrameProvider");
	return m;
}, getClassName26 = get_class_name_factory_default("PuckCanvas", styles_module_default21), ZOOM_ON_CHANGE = !0, TRANSITION_DURATION = 150, Canvas = () => {
	let { frameRef: m } = useCanvasFrame(), x = useResetAutoZoom(m), { dispatch: S, overrides: C, setUi: T, zoomConfig: D, setZoomConfig: O, status: k, iframe: A } = useAppStore(useShallow((m) => ({
		dispatch: m.dispatch,
		overrides: m.overrides,
		setUi: m.setUi,
		zoomConfig: m.zoomConfig,
		setZoomConfig: m.setZoomConfig,
		status: m.status,
		iframe: m.iframe
	}))), { leftSideBarVisible: j, rightSideBarVisible: N, leftSideBarWidth: F, rightSideBarWidth: I, viewports: L } = useAppStore(useShallow((m) => ({
		leftSideBarVisible: m.state.ui.leftSideBarVisible,
		rightSideBarVisible: m.state.ui.rightSideBarVisible,
		leftSideBarWidth: m.state.ui.leftSideBarWidth,
		rightSideBarWidth: m.state.ui.rightSideBarWidth,
		viewports: m.state.ui.viewports
	}))), [R, H] = useState(!1), U = useRef(!1), W = useMemo(() => ({ children: m }) => /* @__PURE__ */ jsx(Fragment$1, { children: m }), []), G = useMemo(() => C.preview || W, [C]), K = useCallback(() => {
		if (m.current) {
			let x = m.current, S = getBox(x);
			return {
				width: S.contentBox.width,
				height: S.contentBox.height
			};
		}
		return {
			width: 0,
			height: 0
		};
	}, [m]);
	useEffect(() => {
		x();
	}, [
		m,
		j,
		N,
		F,
		I,
		L
	]), useEffect(() => {
		let { height: m } = K();
		L.current.height === "auto" && O(__spreadProps(__spreadValues({}, D), { rootHeight: m / D.zoom }));
	}, [
		D.zoom,
		K,
		O
	]), useEffect(() => {
		ZOOM_ON_CHANGE && x();
	}, [L.current.width, L]), useEffect(() => {
		if (!m.current) return;
		let S = new ResizeObserver(() => {
			U.current || x();
		});
		return S.observe(m.current), () => {
			S.disconnect();
		};
	}, [m.current]);
	let [J, Y] = useState(!1);
	return useEffect(() => {
		setTimeout(() => {
			Y(!0);
		}, 500);
	}, []), /* @__PURE__ */ jsxs("div", {
		className: getClassName26({
			ready: k === "READY" || !A.enabled || !A.waitForStyles,
			showLoader: J
		}),
		onClick: (m) => {
			let x = m.target;
			!x.hasAttribute("data-puck-component") && !x.hasAttribute("data-puck-dropzone") && S({
				type: "setUi",
				ui: { itemSelector: null },
				recordHistory: !0
			});
		},
		children: [L.controlsVisible && A.enabled && /* @__PURE__ */ jsx("div", {
			className: getClassName26("controls"),
			children: /* @__PURE__ */ jsx(ViewportControls, {
				autoZoom: D.autoZoom,
				zoom: D.zoom,
				onViewportChange: (m) => {
					H(!0), U.current = !0;
					let S = __spreadProps(__spreadValues({}, m), {
						height: m.height || "auto",
						zoom: D.zoom
					});
					T({ viewports: __spreadProps(__spreadValues({}, L), { current: S }) }), ZOOM_ON_CHANGE && x({ viewports: __spreadProps(__spreadValues({}, L), { current: S }) });
				},
				onZoom: (m) => {
					H(!0), U.current = !0, O(__spreadProps(__spreadValues({}, D), { zoom: m }));
				}
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: getClassName26("inner"),
			ref: m,
			children: [/* @__PURE__ */ jsx("div", {
				className: getClassName26("root"),
				style: {
					width: A.enabled ? L.current.width : "100%",
					height: D.rootHeight,
					transform: A.enabled ? `scale(${D.zoom})` : void 0,
					transition: R ? `width ${TRANSITION_DURATION}ms ease-out, height ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out` : "",
					overflow: A.enabled ? void 0 : "auto"
				},
				suppressHydrationWarning: !0,
				id: "puck-canvas-root",
				onTransitionEnd: () => {
					H(!1), U.current = !1;
				},
				children: /* @__PURE__ */ jsx(G, { children: /* @__PURE__ */ jsx(Preview2, {}) })
			}), /* @__PURE__ */ jsx("div", {
				className: getClassName26("loader"),
				children: /* @__PURE__ */ jsx(Loader, { size: 24 })
			})]
		})]
	});
};
init_react_import(), init_react_import();
var loadOverrides = ({ overrides: m, plugins: x }) => {
	let S = __spreadValues({}, m);
	return x?.forEach((m) => {
		m.overrides && Object.keys(m.overrides).forEach((x) => {
			let C = x;
			if (!m.overrides?.[C]) return;
			if (C === "fieldTypes") {
				let x = m.overrides.fieldTypes;
				Object.keys(x).forEach((m) => {
					S.fieldTypes = S.fieldTypes || {};
					let C = S.fieldTypes[m], T = (S) => x[m](__spreadProps(__spreadValues({}, S), { children: C ? C(S) : S.children }));
					S.fieldTypes[m] = T;
				});
				return;
			}
			let T = S[C];
			S[C] = (x) => m.overrides[C](__spreadProps(__spreadValues({}, x), { children: T ? T(x) : x.children }));
		});
	}), S;
}, useLoadedOverrides = ({ overrides: m, plugins: x }) => useMemo(() => loadOverrides({
	overrides: m,
	plugins: x
}), [x, m]);
init_react_import();
var DefaultOverride = ({ children: m }) => /* @__PURE__ */ jsx(Fragment$1, { children: m });
init_react_import();
var styles = "", useInjectStyleSheet = (m, x) => {
	let [S, C] = useState();
	return useEffect(() => {
		C(document.createElement("style"));
	}, []), useEffect(() => {
		var C;
		!S || typeof window > "u" || (S.innerHTML = m, x && ((C = getFrame()?.head) == null || C.appendChild(S)), document.head.appendChild(S));
	}, [x, S]), S;
}, useInjectGlobalCss = (m) => useInjectStyleSheet(styles, m);
init_react_import();
var usePreviewModeHotkeys = () => {
	let m = useAppStoreApi(), x = useCallback(() => {
		let x = m.getState().dispatch;
		x({
			type: "setUi",
			ui: (m) => ({ previewMode: m.previewMode === "edit" ? "interactive" : "edit" })
		});
	}, [m]);
	useHotkey({
		meta: !0,
		i: !0
	}, x), useHotkey({
		ctrl: !0,
		i: !0
	}, x);
};
init_react_import(), init_react_import(), init_react_import();
var getClassName27 = get_class_name_factory_default("MenuBar", {
	MenuBar: "_MenuBar_8pf8c_1",
	"MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14",
	"MenuBar-inner": "_MenuBar-inner_8pf8c_29",
	"MenuBar-history": "_MenuBar-history_8pf8c_45"
});
function MenuBar({ menuOpen: m = !1, renderHeaderActions: x, setMenuOpen: S }) {
	let C = useAppStore((m) => m.history.back), T = useAppStore((m) => m.history.forward), D = useAppStore((m) => m.history.hasFuture()), O = useAppStore((m) => m.history.hasPast());
	return /* @__PURE__ */ jsx("div", {
		className: getClassName27({ menuOpen: m }),
		onClick: (m) => {
			let x = m.target;
			window.matchMedia("(min-width: 638px)").matches || x.tagName === "A" && x.getAttribute("href")?.startsWith("#") && S(!1);
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: getClassName27("inner"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: getClassName27("history"),
				children: [/* @__PURE__ */ jsx(IconButton, {
					type: "button",
					title: "undo",
					disabled: !O,
					onClick: C,
					children: /* @__PURE__ */ jsx(Undo2, { size: 21 })
				}), /* @__PURE__ */ jsx(IconButton, {
					type: "button",
					title: "redo",
					disabled: !D,
					onClick: T,
					children: /* @__PURE__ */ jsx(Redo2, { size: 21 })
				})]
			}), /* @__PURE__ */ jsx(Fragment$1, { children: x && x() })]
		})
	});
}
init_react_import();
var getClassName28 = get_class_name_factory_default("PuckHeader", {
	PuckHeader: "_PuckHeader_15xnq_1",
	"PuckHeader-inner": "_PuckHeader-inner_15xnq_10",
	"PuckHeader-toggle": "_PuckHeader-toggle_15xnq_20",
	"PuckHeader--rightSideBarVisible": "_PuckHeader--rightSideBarVisible_15xnq_27",
	"PuckHeader-rightSideBarToggle": "_PuckHeader-rightSideBarToggle_15xnq_27",
	"PuckHeader--leftSideBarVisible": "_PuckHeader--leftSideBarVisible_15xnq_28",
	"PuckHeader-leftSideBarToggle": "_PuckHeader-leftSideBarToggle_15xnq_28",
	"PuckHeader-title": "_PuckHeader-title_15xnq_32",
	"PuckHeader-path": "_PuckHeader-path_15xnq_36",
	"PuckHeader-tools": "_PuckHeader-tools_15xnq_43",
	"PuckHeader-menuButton": "_PuckHeader-menuButton_15xnq_49",
	"PuckHeader--menuOpen": "_PuckHeader--menuOpen_15xnq_54"
}), Header = memo(() => {
	let { onPublish: m, renderHeader: x, renderHeaderActions: S, headerTitle: C, headerPath: T, iframe: D } = usePropsContext(), O = useAppStore((m) => m.dispatch), k = useAppStoreApi(), A = useMemo(() => x ? (console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"), (m) => {
		var S = m, { actions: C } = S, T = __objRest(S, ["actions"]);
		let D = x, k = useAppStore((m) => m.state);
		return /* @__PURE__ */ jsx(D, __spreadProps(__spreadValues({}, T), {
			dispatch: O,
			state: k,
			children: C
		}));
	}) : DefaultOverride, [x]), j = useMemo(() => S ? (console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."), (m) => {
		let x = S, C = useAppStore((m) => m.state);
		return /* @__PURE__ */ jsx(x, __spreadProps(__spreadValues({}, m), {
			dispatch: O,
			state: C
		}));
	}) : DefaultOverride, [S]), N = useAppStore((m) => m.overrides.header || A), P = useAppStore((m) => m.overrides.headerActions || j), [F, I] = useState(!1), L = useAppStore((m) => (m.state.indexes.nodes.root?.data).props.title ?? ""), R = useAppStore((m) => m.state.ui.leftSideBarVisible), B = useAppStore((m) => m.state.ui.rightSideBarVisible), H = useCallback((m) => {
		let x = window.matchMedia("(min-width: 638px)").matches, S = m === "left" ? R : B, C = m === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
		O({
			type: "setUi",
			ui: __spreadValues({ [`${m}SideBarVisible`]: !S }, x ? {} : { [C]: !1 })
		});
	}, [
		O,
		R,
		B
	]);
	return /* @__PURE__ */ jsx(N, {
		actions: /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(P, { children: /* @__PURE__ */ jsx(Button, {
			onClick: () => {
				let x = k.getState().state.data;
				m && m(x);
			},
			icon: /* @__PURE__ */ jsx(Globe, { size: "14px" }),
			children: "Publish"
		}) }) }),
		children: /* @__PURE__ */ jsx("header", {
			className: getClassName28({
				leftSideBarVisible: R,
				rightSideBarVisible: B
			}),
			children: /* @__PURE__ */ jsxs("div", {
				className: getClassName28("inner"),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: getClassName28("toggle"),
						children: [/* @__PURE__ */ jsx("div", {
							className: getClassName28("leftSideBarToggle"),
							children: /* @__PURE__ */ jsx(IconButton, {
								type: "button",
								onClick: () => {
									H("left");
								},
								title: "Toggle left sidebar",
								children: /* @__PURE__ */ jsx(PanelLeft, { focusable: "false" })
							})
						}), /* @__PURE__ */ jsx("div", {
							className: getClassName28("rightSideBarToggle"),
							children: /* @__PURE__ */ jsx(IconButton, {
								type: "button",
								onClick: () => {
									H("right");
								},
								title: "Toggle right sidebar",
								children: /* @__PURE__ */ jsx(PanelRight, { focusable: "false" })
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: getClassName28("title"),
						children: /* @__PURE__ */ jsxs(Heading, {
							rank: "2",
							size: "xs",
							children: [C || L || "Page", T && /* @__PURE__ */ jsxs(Fragment$1, { children: [" ", /* @__PURE__ */ jsx("code", {
								className: getClassName28("path"),
								children: T
							})] })]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: getClassName28("tools"),
						children: [/* @__PURE__ */ jsx("div", {
							className: getClassName28("menuButton"),
							children: /* @__PURE__ */ jsx(IconButton, {
								type: "button",
								onClick: () => I(!F),
								title: "Toggle menu bar",
								children: jsx(F ? ChevronUp : ChevronDown, { focusable: "false" })
							})
						}), /* @__PURE__ */ jsx(MenuBar, {
							dispatch: O,
							onPublish: m,
							menuOpen: F,
							renderHeaderActions: () => /* @__PURE__ */ jsx(P, { children: /* @__PURE__ */ jsx(Button, {
								onClick: () => {
									let x = k.getState().state.data;
									m && m(x);
								},
								icon: /* @__PURE__ */ jsx(Globe, { size: "14px" }),
								children: "Publish"
							}) }),
							setMenuOpen: I
						})]
					})
				]
			})
		})
	});
});
init_react_import(), init_react_import(), init_react_import();
var getClassName29 = get_class_name_factory_default("ResizeHandle", {
	ResizeHandle: "_ResizeHandle_144bf_2",
	"ResizeHandle--left": "_ResizeHandle--left_144bf_16",
	"ResizeHandle--right": "_ResizeHandle--right_144bf_20"
}), ResizeHandle = ({ position: m, sidebarRef: x, onResize: S, onResizeEnd: C }) => {
	let { frameRef: T } = useCanvasFrame(), D = useResetAutoZoom(T), O = useRef(null), k = useRef(!1), A = useRef(0), j = useRef(0), N = useCallback((x) => {
		if (!k.current) return;
		let C = x.clientX - A.current, T = m === "left" ? j.current + C : j.current - C;
		S(Math.max(192, T)), x.preventDefault();
	}, [S, m]), P = useCallback(() => {
		if (!k.current) return;
		k.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
		let m = document.getElementById("resize-overlay");
		m && document.body.removeChild(m), document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", P), C(x.current?.getBoundingClientRect().width || 0), D();
	}, [C]), F = useCallback((m) => {
		k.current = !0, A.current = m.clientX, j.current = x.current?.getBoundingClientRect().width || 0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let S = document.createElement("div");
		S.id = "resize-overlay", S.setAttribute("data-resize-overlay", ""), document.body.appendChild(S), document.addEventListener("mousemove", N), document.addEventListener("mouseup", P), m.preventDefault();
	}, [
		m,
		N,
		P
	]);
	return /* @__PURE__ */ jsx("div", {
		ref: O,
		className: getClassName29({ [m]: !0 }),
		onMouseDown: F
	});
};
init_react_import();
var getClassName30 = get_class_name_factory_default("Sidebar", {
	Sidebar: "_Sidebar_1xksb_1",
	"Sidebar--left": "_Sidebar--left_1xksb_8",
	"Sidebar--right": "_Sidebar--right_1xksb_14",
	"Sidebar-resizeHandle": "_Sidebar-resizeHandle_1xksb_20"
}), Sidebar = ({ position: m, sidebarRef: x, isVisible: S, onResize: C, onResizeEnd: T, children: D }) => S ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
	ref: x,
	className: getClassName30({ [m]: !0 }),
	children: D
}), /* @__PURE__ */ jsx("div", {
	className: `${getClassName30("resizeHandle")}`,
	children: /* @__PURE__ */ jsx(ResizeHandle, {
		position: m,
		sidebarRef: x,
		onResize: C,
		onResizeEnd: T
	})
})] }) : null;
init_react_import();
function useSidebarResize(m, x) {
	let [S, C] = useState(null), T = useRef(null), D = useAppStore((x) => m === "left" ? x.state.ui.leftSideBarWidth : x.state.ui.rightSideBarWidth);
	return useEffect(() => {
		if (typeof window < "u" && !D) try {
			let S = localStorage.getItem("puck-sidebar-widths");
			if (S) {
				let C = JSON.parse(S)[m];
				C && x({
					type: "setUi",
					ui: { [m === "left" ? "leftSideBarWidth" : "rightSideBarWidth"]: C }
				});
			}
		} catch (x) {
			console.error(`Failed to load ${m} sidebar width from localStorage`, x);
		}
	}, [
		x,
		m,
		D
	]), useEffect(() => {
		D !== void 0 && C(D);
	}, [D]), {
		width: S,
		setWidth: C,
		sidebarRef: T,
		handleResizeEnd: useCallback((S) => {
			x({
				type: "setUi",
				ui: { [m === "left" ? "leftSideBarWidth" : "rightSideBarWidth"]: S }
			});
			let C = {};
			try {
				let m = localStorage.getItem("puck-sidebar-widths");
				C = m ? JSON.parse(m) : {};
			} catch (x) {
				console.error(`Failed to save ${m} sidebar width to localStorage`, x);
			} finally {
				localStorage.setItem("puck-sidebar-widths", JSON.stringify(__spreadProps(__spreadValues({}, C), { [m]: S })));
			}
			window.dispatchEvent(new CustomEvent("viewportchange", {
				bubbles: !0,
				cancelable: !1
			}));
		}, [x, m])
	};
}
var getClassName31 = get_class_name_factory_default("Puck", styles_module_default15), getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default15), FieldSideBar = () => /* @__PURE__ */ jsx(SidebarSection, {
	noPadding: !0,
	noBorderTop: !0,
	showBreadcrumbs: !0,
	title: useAppStore((m) => m.selectedItem ? m.config.components[m.selectedItem.type]?.label ?? m.selectedItem.type.toString() : "Page"),
	children: /* @__PURE__ */ jsx(Fields, {})
}), propsContext = createContext({});
function PropsProvider(m) {
	return /* @__PURE__ */ jsx(propsContext.Provider, {
		value: m,
		children: m.children
	});
}
var usePropsContext = () => useContext(propsContext);
function PuckProvider({ children: m }) {
	let { config: x, data: S, ui: C, onChange: T, permissions: D = {}, plugins: O, overrides: k, viewports: A = defaultViewports, iframe: j, initialHistory: N, metadata: F, onAction: I, fieldTransforms: L } = usePropsContext(), R = useMemo(() => __spreadValues({
		enabled: !0,
		waitForStyles: !0
	}, j), [j]), [H] = useState(() => {
		let m = __spreadValues(__spreadValues({}, defaultAppState.ui), C), T = {};
		if (typeof window < "u") {
			window.matchMedia("(max-width: 638px)").matches && (T = __spreadProps(__spreadValues({}, T), {
				leftSideBarVisible: !1,
				rightSideBarVisible: !1
			}));
			let x = window.innerWidth, S = Object.entries(A).map(([m, S]) => ({
				key: m,
				diff: Math.abs(x - S.width)
			})).sort((m, x) => m.diff > x.diff ? 1 : -1)[0].key;
			R.enabled && (T = __spreadProps(__spreadValues({}, T), { viewports: __spreadProps(__spreadValues({}, m.viewports), { current: __spreadProps(__spreadValues({}, m.viewports.current), {
				height: C?.viewports?.current?.height || A[S]?.height || "auto",
				width: C?.viewports?.current?.width || A[S]?.width
			}) }) }));
		}
		Object.keys(S?.root || {}).length > 0 && !S?.root?.props && console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");
		let D = S?.root?.props || S?.root || {}, O = __spreadValues(__spreadValues({}, x.root?.defaultProps), D);
		return walkAppState(__spreadProps(__spreadValues({}, defaultAppState), {
			data: __spreadProps(__spreadValues({}, S), {
				root: __spreadProps(__spreadValues({}, S?.root), { props: O }),
				content: S.content || []
			}),
			ui: __spreadProps(__spreadValues(__spreadValues({}, m), T), { componentList: x.categories ? Object.entries(x.categories).reduce((m, [x, S]) => __spreadProps(__spreadValues({}, m), { [x]: {
				title: S.title,
				components: S.components,
				expanded: S.defaultExpanded,
				visible: S.visible
			} }), {}) : {} })
		}), x);
	}), { appendData: U = !0 } = N || {}, [W] = useState([...N?.histories || [], ...U ? [{ state: H }] : []].map((m) => {
		let S = __spreadValues(__spreadValues({}, H), m.state);
		return m.state.indexes || (S = walkAppState(S, x)), __spreadProps(__spreadValues({}, m), { state: S });
	})), G = N?.index || W.length - 1, K = W[G].state, q = useLoadedOverrides({
		overrides: k,
		plugins: O
	}), DI = useMemo(() => __spreadValues(__spreadValues({}, (O || []).reduce((m, x) => __spreadValues(__spreadValues({}, m), x.fieldTransforms), {})), L), [L, O]), J = useCallback((m) => ({
		state: m,
		config: x,
		plugins: O || [],
		overrides: q,
		viewports: A,
		iframe: R,
		onAction: I,
		metadata: F,
		fieldTransforms: DI
	}), [
		K,
		x,
		O,
		q,
		A,
		R,
		I,
		F,
		DI
	]), [Y] = useState(() => createAppStore(J(K)));
	useEffect(() => {
		process.env.NODE_ENV !== "production" && (window.__PUCK_INTERNAL_DO_NOT_USE = { appStore: Y });
	}, [Y]), useEffect(() => {
		let m = Y.getState().state;
		Y.setState(__spreadValues({}, J(m)));
	}, [
		x,
		O,
		q,
		A,
		R,
		I,
		F
	]), useRegisterHistorySlice(Y, {
		histories: W,
		index: G,
		initialAppState: K
	});
	let X = useRef(null);
	useEffect(() => {
		Y.subscribe((m) => m.state.data, (m) => {
			if (T) {
				if ((0, import_fast_deep_equal.default)(m, X.current)) return;
				T(m), X.current = m;
			}
		});
	}, []), useRegisterPermissionsSlice(Y, D);
	let Z = useRegisterUsePuckStore(Y);
	return useEffect(() => {
		let { resolveAndCommitData: m } = Y.getState();
		m();
	}, []), /* @__PURE__ */ jsx(appStoreContext.Provider, {
		value: Y,
		children: /* @__PURE__ */ jsx(UsePuckStoreContext.Provider, {
			value: Z,
			children: m
		})
	});
}
function PuckLayout({ children: m }) {
	let { iframe: x, dnd: S, initialHistory: C } = usePropsContext(), T = useMemo(() => __spreadValues({
		enabled: !0,
		waitForStyles: !0
	}, x), [x]);
	useInjectGlobalCss(T.enabled);
	let D = useAppStore((m) => m.dispatch), O = useAppStore((m) => m.state.ui.leftSideBarVisible), k = useAppStore((m) => m.state.ui.rightSideBarVisible), { width: A, setWidth: j, sidebarRef: M, handleResizeEnd: N } = useSidebarResize("left", D), { width: F, setWidth: I, sidebarRef: L, handleResizeEnd: R } = useSidebarResize("right", D);
	useEffect(() => {
		window.matchMedia("(min-width: 638px)").matches || D({
			type: "setUi",
			ui: {
				leftSideBarVisible: !1,
				rightSideBarVisible: !1
			}
		});
		let m = () => {
			window.matchMedia("(min-width: 638px)").matches || D({
				type: "setUi",
				ui: (m) => __spreadValues(__spreadValues({}, m), m.rightSideBarVisible ? { leftSideBarVisible: !1 } : {})
			});
		};
		return window.addEventListener("resize", m), () => {
			window.removeEventListener("resize", m);
		};
	}, []);
	let B = useAppStore((m) => m.overrides), H = useMemo(() => B.puck || DefaultOverride, [B]), [U, W] = useState(!1);
	useEffect(() => {
		W(!0);
	}, []);
	let G = useAppStore((m) => m.status === "READY");
	useMonitorHotkeys(), useEffect(() => {
		if (G && T.enabled) {
			let m = getFrame();
			if (m) return monitorHotkeys(m);
		}
	}, [G, T.enabled]), usePreviewModeHotkeys();
	let K = {};
	return A && (K["--puck-user-left-side-bar-width"] = `${A}px`), F && (K["--puck-user-right-side-bar-width"] = `${F}px`), /* @__PURE__ */ jsxs("div", {
		className: `Puck ${getClassName31()}`,
		children: [/* @__PURE__ */ jsx(DragDropContext, {
			disableAutoScroll: S?.disableAutoScroll,
			children: /* @__PURE__ */ jsx(H, { children: m || /* @__PURE__ */ jsx(FrameProvider, { children: /* @__PURE__ */ jsx("div", {
				className: getLayoutClassName({
					leftSideBarVisible: O,
					mounted: U,
					rightSideBarVisible: k
				}),
				children: /* @__PURE__ */ jsxs("div", {
					className: getLayoutClassName("inner"),
					style: K,
					children: [
						/* @__PURE__ */ jsx(Header, {}),
						/* @__PURE__ */ jsxs(Sidebar, {
							position: "left",
							sidebarRef: M,
							isVisible: O,
							onResize: j,
							onResizeEnd: N,
							children: [/* @__PURE__ */ jsx(SidebarSection, {
								title: "Components",
								noBorderTop: !0,
								children: /* @__PURE__ */ jsx(Components, {})
							}), /* @__PURE__ */ jsx(SidebarSection, {
								title: "Outline",
								children: /* @__PURE__ */ jsx(Outline, {})
							})]
						}),
						/* @__PURE__ */ jsx(Canvas, {}),
						/* @__PURE__ */ jsx(Sidebar, {
							position: "right",
							sidebarRef: L,
							isVisible: k,
							onResize: I,
							onResizeEnd: R,
							children: /* @__PURE__ */ jsx(FieldSideBar, {})
						})
					]
				})
			}) }) })
		}), /* @__PURE__ */ jsx("div", {
			id: "puck-portal-root",
			className: getClassName31("portal")
		})]
	});
}
function Puck(m) {
	return /* @__PURE__ */ jsx(PropsProvider, __spreadProps(__spreadValues({}, m), { children: /* @__PURE__ */ jsx(PuckProvider, __spreadProps(__spreadValues({}, m), { children: /* @__PURE__ */ jsx(PuckLayout, __spreadValues({}, m)) })) }));
}
Puck.Components = Components, Puck.Fields = Fields, Puck.Outline = Outline, Puck.Preview = Preview2, init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import(), init_react_import();
function ColorPickerField({ name: m, label: x, value: S = "#000000", onChange: C }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FieldLabel, { label: x }), /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
			marginTop: "4px"
		},
		children: [/* @__PURE__ */ jsx("input", {
			type: "color",
			id: m,
			value: S,
			onChange: (m) => C(m.target.value),
			style: {
				width: "40px",
				height: "40px",
				border: "1px solid #e5e7eb",
				borderRadius: "4px",
				cursor: "pointer"
			}
		}), /* @__PURE__ */ jsx("input", {
			type: "text",
			value: S,
			onChange: (m) => C(m.target.value),
			placeholder: "#000000",
			style: {
				flex: 1,
				padding: "8px",
				border: "1px solid #e5e7eb",
				borderRadius: "4px",
				fontSize: "14px"
			}
		})]
	})] });
}
const colorPickerField = {
	type: "custom",
	render: ({ name: m, value: x, onChange: S, field: C }) => /* @__PURE__ */ jsx(ColorPickerField, {
		name: m,
		label: C?.label ?? "",
		value: x,
		onChange: (m) => S(m)
	})
};
var LayoutGroupContext = createContext({});
function useConstant(m) {
	let x = useRef(null);
	return x.current === null && (x.current = m()), x.current;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(m, x) {
	m.indexOf(x) === -1 && m.push(x);
}
function removeItem(m, x) {
	let S = m.indexOf(x);
	S > -1 && m.splice(S, 1);
}
var clamp = (m, x, S) => S > x ? x : S < m ? m : S;
function formatErrorMessage(m, x) {
	return x ? `${m}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${x}` : m;
}
var warning = () => {}, invariant = () => {};
process.env.NODE_ENV !== "production" && (warning = (m, x, S) => {
	!m && typeof console < "u" && console.warn(formatErrorMessage(x, S));
}, invariant = (m, x, S) => {
	if (!m) throw Error(formatErrorMessage(x, S));
});
var MotionGlobalConfig = {}, isNumericalString = (m) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(m);
function isObject(m) {
	return typeof m == "object" && !!m;
}
var isZeroValueString = (m) => /^0[^.\s]+$/u.test(m);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(m) {
	let x;
	return () => (x === void 0 && (x = m()), x);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (m) => m, combineFunctions = (m, x) => (S) => x(m(S)), pipe = (...m) => m.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (m, x, S) => {
	let C = x - m;
	return C === 0 ? 1 : (S - m) / C;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(m) {
		return addUniqueItem(this.subscriptions, m), () => removeItem(this.subscriptions, m);
	}
	notify(m, x, S) {
		let C = this.subscriptions.length;
		if (C) if (C === 1) this.subscriptions[0](m, x, S);
		else for (let T = 0; T < C; T++) {
			let C = this.subscriptions[T];
			C && C(m, x, S);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (m) => m * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (m) => m / 1e3;
function velocityPerSecond(m, x) {
	return x ? m * (1e3 / x) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(m, x, S) {
	m || warned.has(x) || (console.warn(formatErrorMessage(x, S)), warned.add(x));
}
var calcBezier = (m, x, S) => (((1 - 3 * S + 3 * x) * m + (3 * S - 6 * x)) * m + 3 * x) * m, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(m, x, S, C, T) {
	let D, O, k = 0;
	do
		O = x + (S - x) / 2, D = calcBezier(O, C, T) - m, D > 0 ? S = O : x = O;
	while (Math.abs(D) > subdivisionPrecision && ++k < subdivisionMaxIterations);
	return O;
}
function cubicBezier(m, x, S, C) {
	if (m === x && S === C) return noop;
	let T = (x) => binarySubdivide(x, 0, 1, m, S);
	return (m) => m === 0 || m === 1 ? m : calcBezier(T(m), x, C);
}
var mirrorEasing = (m) => (x) => x <= .5 ? m(2 * x) / 2 : (2 - m(2 * (1 - x))) / 2, reverseEasing = (m) => (x) => 1 - m(1 - x), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (m) => (m *= 2) < 1 ? .5 * backIn(m) : .5 * (2 - 2 ** (-10 * (m - 1))), circIn = (m) => 1 - Math.sin(Math.acos(m)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (m) => Array.isArray(m) && typeof m[0] != "number", isBezierDefinition = (m) => Array.isArray(m) && typeof m[0] == "number", easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
}, isValidEasing = (m) => typeof m == "string", easingDefinitionToFunction = (m) => {
	if (isBezierDefinition(m)) {
		invariant(m.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [x, S, C, T] = m;
		return cubicBezier(x, S, C, T);
	} else if (isValidEasing(m)) return invariant(easingLookup[m] !== void 0, `Invalid easing type '${m}'`, "invalid-easing-type"), easingLookup[m];
	return m;
}, stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
function createRenderStep(m, x) {
	let S = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), T = !1, D = !1, O = /* @__PURE__ */ new WeakSet(), k = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, A = 0;
	function j(x) {
		O.has(x) && (M.schedule(x), m()), A++, x(k);
	}
	let M = {
		schedule: (m, x = !1, D = !1) => {
			let k = D && T ? S : C;
			return x && O.add(m), k.has(m) || k.add(m), m;
		},
		cancel: (m) => {
			C.delete(m), O.delete(m);
		},
		process: (m) => {
			if (k = m, T) {
				D = !0;
				return;
			}
			T = !0, [S, C] = [C, S], S.forEach(j), x && statsBuffer.value && statsBuffer.value.frameloop[x].push(A), A = 0, S.clear(), T = !1, D && (D = !1, M.process(m));
		}
	};
	return M;
}
var maxElapsed = 40;
function createRenderBatcher(m, x) {
	let S = !1, C = !0, T = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, D = () => S = !0, O = stepsOrder.reduce((m, S) => (m[S] = createRenderStep(D, x ? S : void 0), m), {}), { setup: k, read: A, resolveKeyframes: j, preUpdate: M, update: N, preRender: P, render: F, postRender: I } = O, L = () => {
		let D = MotionGlobalConfig.useManualTiming ? T.timestamp : performance.now();
		S = !1, MotionGlobalConfig.useManualTiming || (T.delta = C ? 1e3 / 60 : Math.max(Math.min(D - T.timestamp, maxElapsed), 1)), T.timestamp = D, T.isProcessing = !0, k.process(T), A.process(T), j.process(T), M.process(T), N.process(T), P.process(T), F.process(T), I.process(T), T.isProcessing = !1, S && x && (C = !1, m(L));
	}, R = () => {
		S = !0, C = !0, T.isProcessing || m(L);
	};
	return {
		schedule: stepsOrder.reduce((m, x) => {
			let C = O[x];
			return m[x] = (m, x = !1, T = !1) => (S || R(), C.schedule(m, x, T)), m;
		}, {}),
		cancel: (m) => {
			for (let x = 0; x < stepsOrder.length; x++) O[stepsOrder[x]].cancel(m);
		},
		state: T,
		steps: O
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (m) => {
		now = m, queueMicrotask(clearTime);
	}
}, activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, checkStringStartsWith = (m) => (x) => typeof x == "string" && x.startsWith(m), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (m) => startsAsVariableToken(m) ? singleCssVariableRegex.test(m.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, number = {
	test: (m) => typeof m == "number",
	parse: parseFloat,
	transform: (m) => m
}, alpha = {
	...number,
	transform: (m) => clamp(0, 1, m)
}, scale = {
	...number,
	default: 1
}, sanitize = (m) => Math.round(m * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(m) {
	return m == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (m, x) => (S) => !!(typeof S == "string" && singleColorRegex.test(S) && S.startsWith(m) || x && !isNullish(S) && Object.prototype.hasOwnProperty.call(S, x)), splitColor = (m, x, S) => (C) => {
	if (typeof C != "string") return C;
	let [T, D, O, k] = C.match(floatRegex);
	return {
		[m]: parseFloat(T),
		[x]: parseFloat(D),
		[S]: parseFloat(O),
		alpha: k === void 0 ? 1 : parseFloat(k)
	};
}, clampRgbUnit = (m) => clamp(0, 255, m), rgbUnit = {
	...number,
	transform: (m) => Math.round(clampRgbUnit(m))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: m, green: x, blue: S, alpha: C = 1 }) => "rgba(" + rgbUnit.transform(m) + ", " + rgbUnit.transform(x) + ", " + rgbUnit.transform(S) + ", " + sanitize(alpha.transform(C)) + ")"
};
function parseHex(m) {
	let x = "", S = "", C = "", T = "";
	return m.length > 5 ? (x = m.substring(1, 3), S = m.substring(3, 5), C = m.substring(5, 7), T = m.substring(7, 9)) : (x = m.substring(1, 2), S = m.substring(2, 3), C = m.substring(3, 4), T = m.substring(4, 5), x += x, S += S, C += C, T += T), {
		red: parseInt(x, 16),
		green: parseInt(S, 16),
		blue: parseInt(C, 16),
		alpha: T ? parseInt(T, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (m) => ({
	test: (x) => typeof x == "string" && x.endsWith(m) && x.split(" ").length === 1,
	parse: parseFloat,
	transform: (x) => `${x}${m}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (m) => percent.parse(m) / 100,
	transform: (m) => percent.transform(m * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: m, saturation: x, lightness: S, alpha: C = 1 }) => "hsla(" + Math.round(m) + ", " + percent.transform(sanitize(x)) + ", " + percent.transform(sanitize(S)) + ", " + sanitize(alpha.transform(C)) + ")"
}, color = {
	test: (m) => rgba.test(m) || hex.test(m) || hsla.test(m),
	parse: (m) => rgba.test(m) ? rgba.parse(m) : hsla.test(m) ? hsla.parse(m) : hex.parse(m),
	transform: (m) => typeof m == "string" ? m : m.hasOwnProperty("red") ? rgba.transform(m) : hsla.transform(m),
	getAnimatableNone: (m) => {
		let x = color.parse(m);
		return x.alpha = 0, color.transform(x);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(m) {
	return isNaN(m) && typeof m == "string" && (m.match(floatRegex)?.length || 0) + (m.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(m) {
	let x = m.toString(), S = [], C = {
		color: [],
		number: [],
		var: []
	}, T = [], D = 0;
	return {
		values: S,
		split: x.replace(complexRegex, (m) => (color.test(m) ? (C.color.push(D), T.push(COLOR_TOKEN), S.push(color.parse(m))) : m.startsWith(VAR_FUNCTION_TOKEN) ? (C.var.push(D), T.push(VAR_TOKEN), S.push(m)) : (C.number.push(D), T.push(NUMBER_TOKEN), S.push(parseFloat(m))), ++D, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: C,
		types: T
	};
}
function parseComplexValue(m) {
	return analyseComplexValue(m).values;
}
function createTransformer(m) {
	let { split: x, types: S } = analyseComplexValue(m), C = x.length;
	return (m) => {
		let T = "";
		for (let D = 0; D < C; D++) if (T += x[D], m[D] !== void 0) {
			let x = S[D];
			x === NUMBER_TOKEN ? T += sanitize(m[D]) : x === COLOR_TOKEN ? T += color.transform(m[D]) : T += m[D];
		}
		return T;
	};
}
var convertNumbersToZero = (m) => typeof m == "number" ? 0 : color.test(m) ? color.getAnimatableNone(m) : m;
function getAnimatableNone$1(m) {
	let x = parseComplexValue(m);
	return createTransformer(m)(x.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(m, x, S) {
	return S < 0 && (S += 1), S > 1 && --S, S < 1 / 6 ? m + (x - m) * 6 * S : S < 1 / 2 ? x : S < 2 / 3 ? m + (x - m) * (2 / 3 - S) * 6 : m;
}
function hslaToRgba({ hue: m, saturation: x, lightness: S, alpha: C }) {
	m /= 360, x /= 100, S /= 100;
	let T = 0, D = 0, O = 0;
	if (!x) T = D = O = S;
	else {
		let C = S < .5 ? S * (1 + x) : S + x - S * x, k = 2 * S - C;
		T = hueToRgb(k, C, m + 1 / 3), D = hueToRgb(k, C, m), O = hueToRgb(k, C, m - 1 / 3);
	}
	return {
		red: Math.round(T * 255),
		green: Math.round(D * 255),
		blue: Math.round(O * 255),
		alpha: C
	};
}
function mixImmediate(m, x) {
	return (S) => S > 0 ? x : m;
}
var mixNumber = (m, x, S) => m + (x - m) * S, mixLinearColor = (m, x, S) => {
	let C = m * m, T = S * (x * x - C) + C;
	return T < 0 ? 0 : Math.sqrt(T);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (m) => colorTypes.find((x) => x.test(m));
function asRGBA(m) {
	let x = getColorType(m);
	if (warning(!!x, `'${m}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !x) return !1;
	let S = x.parse(m);
	return x === hsla && (S = hslaToRgba(S)), S;
}
var mixColor = (m, x) => {
	let S = asRGBA(m), C = asRGBA(x);
	if (!S || !C) return mixImmediate(m, x);
	let T = { ...S };
	return (m) => (T.red = mixLinearColor(S.red, C.red, m), T.green = mixLinearColor(S.green, C.green, m), T.blue = mixLinearColor(S.blue, C.blue, m), T.alpha = mixNumber(S.alpha, C.alpha, m), rgba.transform(T));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(m, x) {
	return invisibleValues.has(m) ? (S) => S <= 0 ? m : x : (S) => S >= 1 ? x : m;
}
function mixNumber$1(m, x) {
	return (S) => mixNumber(m, x, S);
}
function getMixer(m) {
	return typeof m == "number" ? mixNumber$1 : typeof m == "string" ? isCSSVariableToken(m) ? mixImmediate : color.test(m) ? mixColor : mixComplex : Array.isArray(m) ? mixArray : typeof m == "object" ? color.test(m) ? mixColor : mixObject : mixImmediate;
}
function mixArray(m, x) {
	let S = [...m], C = S.length, T = m.map((m, S) => getMixer(m)(m, x[S]));
	return (m) => {
		for (let x = 0; x < C; x++) S[x] = T[x](m);
		return S;
	};
}
function mixObject(m, x) {
	let S = {
		...m,
		...x
	}, C = {};
	for (let T in S) m[T] !== void 0 && x[T] !== void 0 && (C[T] = getMixer(m[T])(m[T], x[T]));
	return (m) => {
		for (let x in C) S[x] = C[x](m);
		return S;
	};
}
function matchOrder(m, x) {
	let S = [], C = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let T = 0; T < x.values.length; T++) {
		let D = x.types[T], O = m.indexes[D][C[D]];
		S[T] = m.values[O] ?? 0, C[D]++;
	}
	return S;
}
var mixComplex = (m, x) => {
	let S = complex.createTransformer(x), C = analyseComplexValue(m), T = analyseComplexValue(x);
	return C.indexes.var.length === T.indexes.var.length && C.indexes.color.length === T.indexes.color.length && C.indexes.number.length >= T.indexes.number.length ? invisibleValues.has(m) && !T.values.length || invisibleValues.has(x) && !C.values.length ? mixVisibility(m, x) : pipe(mixArray(matchOrder(C, T), T.values), S) : (warning(!0, `Complex values '${m}' and '${x}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(m, x));
};
function mix(m, x, S) {
	return typeof m == "number" && typeof x == "number" && typeof S == "number" ? mixNumber(m, x, S) : getMixer(m)(m, x);
}
var frameloopDriver = (m) => {
	let x = ({ timestamp: x }) => m(x);
	return {
		start: (m = !0) => frame.update(x, m),
		stop: () => cancelFrame(x),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (m, x, S = 10) => {
	let C = "", T = Math.max(Math.round(x / S), 2);
	for (let x = 0; x < T; x++) C += Math.round(m(x / (T - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${C.substring(0, C.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(m) {
	let x = 0, S = m.next(x);
	for (; !S.done && x < 2e4;) x += 50, S = m.next(x);
	return x >= 2e4 ? Infinity : x;
}
function createGeneratorEasing(m, x = 100, S) {
	let C = S({
		...m,
		keyframes: [0, x]
	}), T = Math.min(calcGeneratorDuration(C), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (m) => C.next(T * m).value / x,
		duration: /* @__PURE__ */ millisecondsToSeconds(T)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(m, x, S) {
	let C = Math.max(x - velocitySampleDuration, 0);
	return velocityPerSecond(S - m(C), x - C);
}
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, safeMin = .001;
function findSpring({ duration: m = springDefaults.duration, bounce: x = springDefaults.bounce, velocity: S = springDefaults.velocity, mass: C = springDefaults.mass }) {
	let T, D;
	warning(m <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let O = 1 - x;
	O = clamp(springDefaults.minDamping, springDefaults.maxDamping, O), m = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(m)), O < 1 ? (T = (x) => {
		let C = x * O, T = C * m, D = C - S, k = calcAngularFreq(x, O), A = Math.exp(-T);
		return safeMin - D / k * A;
	}, D = (x) => {
		let C = x * O * m, D = C * S + S, k = O ** 2 * x ** 2 * m, A = Math.exp(-C), j = calcAngularFreq(x ** 2, O);
		return (-T(x) + safeMin > 0 ? -1 : 1) * ((D - k) * A) / j;
	}) : (T = (x) => {
		let C = Math.exp(-x * m), T = (x - S) * m + 1;
		return -safeMin + C * T;
	}, D = (x) => Math.exp(-x * m) * ((S - x) * (m * m)));
	let k = 5 / m, A = approximateRoot(T, D, k);
	if (m = /* @__PURE__ */ secondsToMilliseconds(m), isNaN(A)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: m
	};
	{
		let x = A ** 2 * C;
		return {
			stiffness: x,
			damping: O * 2 * Math.sqrt(C * x),
			duration: m
		};
	}
}
var rootIterations = 12;
function approximateRoot(m, x, S) {
	let C = S;
	for (let S = 1; S < rootIterations; S++) C -= m(C) / x(C);
	return C;
}
function calcAngularFreq(m, x) {
	return m * Math.sqrt(1 - x * x);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(m, x) {
	return x.some((x) => m[x] !== void 0);
}
function getSpringOptions(m) {
	let x = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...m
	};
	if (!isSpringType(m, physicsKeys) && isSpringType(m, durationKeys)) if (m.visualDuration) {
		let S = m.visualDuration, C = 2 * Math.PI / (S * 1.2), T = C * C, D = 2 * clamp(.05, 1, 1 - (m.bounce || 0)) * Math.sqrt(T);
		x = {
			...x,
			mass: springDefaults.mass,
			stiffness: T,
			damping: D
		};
	} else {
		let S = findSpring(m);
		x = {
			...x,
			...S,
			mass: springDefaults.mass
		}, x.isResolvedFromDuration = !0;
	}
	return x;
}
function spring(m = springDefaults.visualDuration, x = springDefaults.bounce) {
	let S = typeof m == "object" ? m : {
		visualDuration: m,
		keyframes: [0, 1],
		bounce: x
	}, { restSpeed: C, restDelta: T } = S, D = S.keyframes[0], O = S.keyframes[S.keyframes.length - 1], k = {
		done: !1,
		value: D
	}, { stiffness: A, damping: j, mass: M, duration: N, velocity: P, isResolvedFromDuration: F } = getSpringOptions({
		...S,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(S.velocity || 0)
	}), I = P || 0, L = j / (2 * Math.sqrt(A * M)), R = O - D, z = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(A / M)), B = Math.abs(R) < 5;
	C ||= B ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, T ||= B ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let V;
	if (L < 1) {
		let m = calcAngularFreq(z, L);
		V = (x) => O - Math.exp(-L * z * x) * ((I + L * z * R) / m * Math.sin(m * x) + R * Math.cos(m * x));
	} else if (L === 1) V = (m) => O - Math.exp(-z * m) * (R + (I + z * R) * m);
	else {
		let m = z * Math.sqrt(L * L - 1);
		V = (x) => {
			let S = Math.exp(-L * z * x), C = Math.min(m * x, 300);
			return O - S * ((I + L * z * R) * Math.sinh(C) + m * R * Math.cosh(C)) / m;
		};
	}
	let H = {
		calculatedDuration: F && N || null,
		next: (m) => {
			let x = V(m);
			if (F) k.done = m >= N;
			else {
				let S = m === 0 ? I : 0;
				L < 1 && (S = m === 0 ? /* @__PURE__ */ secondsToMilliseconds(I) : calcGeneratorVelocity(V, m, x));
				let D = Math.abs(S) <= C, A = Math.abs(O - x) <= T;
				k.done = D && A;
			}
			return k.value = k.done ? O : x, k;
		},
		toString: () => {
			let m = Math.min(calcGeneratorDuration(H), maxGeneratorDuration), x = generateLinearEasing((x) => H.next(m * x).value, m, 30);
			return m + "ms " + x;
		},
		toTransition: () => {}
	};
	return H;
}
spring.applyToOptions = (m) => {
	let x = createGeneratorEasing(m, 100, spring);
	return m.ease = x.ease, m.duration = /* @__PURE__ */ secondsToMilliseconds(x.duration), m.type = "keyframes", m;
};
function inertia({ keyframes: m, velocity: x = 0, power: S = .8, timeConstant: C = 325, bounceDamping: T = 10, bounceStiffness: D = 500, modifyTarget: O, min: k, max: A, restDelta: j = .5, restSpeed: M }) {
	let N = m[0], P = {
		done: !1,
		value: N
	}, F = (m) => k !== void 0 && m < k || A !== void 0 && m > A, I = (m) => k === void 0 ? A : A === void 0 || Math.abs(k - m) < Math.abs(A - m) ? k : A, L = S * x, R = N + L, z = O === void 0 ? R : O(R);
	z !== R && (L = z - N);
	let B = (m) => -L * Math.exp(-m / C), V = (m) => z + B(m), H = (m) => {
		let x = B(m), S = V(m);
		P.done = Math.abs(x) <= j, P.value = P.done ? z : S;
	}, U, W, G = (m) => {
		F(P.value) && (U = m, W = spring({
			keyframes: [P.value, I(P.value)],
			velocity: calcGeneratorVelocity(V, m, P.value),
			damping: T,
			stiffness: D,
			restDelta: j,
			restSpeed: M
		}));
	};
	return G(0), {
		calculatedDuration: null,
		next: (m) => {
			let x = !1;
			return !W && U === void 0 && (x = !0, H(m), G(m)), U !== void 0 && m >= U ? W.next(m - U) : (!x && H(m), P);
		}
	};
}
function createMixers(m, x, S) {
	let C = [], T = S || MotionGlobalConfig.mix || mix, D = m.length - 1;
	for (let S = 0; S < D; S++) {
		let D = T(m[S], m[S + 1]);
		x && (D = pipe(Array.isArray(x) ? x[S] || noop : x, D)), C.push(D);
	}
	return C;
}
function interpolate(m, x, { clamp: S = !0, ease: C, mixer: T } = {}) {
	let D = m.length;
	if (invariant(D === x.length, "Both input and output ranges must be the same length", "range-length"), D === 1) return () => x[0];
	if (D === 2 && x[0] === x[1]) return () => x[1];
	let O = m[0] === m[1];
	m[0] > m[D - 1] && (m = [...m].reverse(), x = [...x].reverse());
	let k = createMixers(x, C, T), A = k.length, j = (S) => {
		if (O && S < m[0]) return x[0];
		let C = 0;
		if (A > 1) for (; C < m.length - 2 && !(S < m[C + 1]); C++);
		let T = /* @__PURE__ */ progress(m[C], m[C + 1], S);
		return k[C](T);
	};
	return S ? (x) => j(clamp(m[0], m[D - 1], x)) : j;
}
function fillOffset(m, x) {
	let S = m[m.length - 1];
	for (let C = 1; C <= x; C++) {
		let T = /* @__PURE__ */ progress(0, x, C);
		m.push(mixNumber(S, 1, T));
	}
}
function defaultOffset(m) {
	let x = [0];
	return fillOffset(x, m.length - 1), x;
}
function convertOffsetToTimes(m, x) {
	return m.map((m) => m * x);
}
function defaultEasing(m, x) {
	return m.map(() => x || easeInOut).splice(0, m.length - 1);
}
function keyframes({ duration: m = 300, keyframes: x, times: S, ease: C = "easeInOut" }) {
	let T = isEasingArray(C) ? C.map(easingDefinitionToFunction) : easingDefinitionToFunction(C), D = {
		done: !1,
		value: x[0]
	}, O = interpolate(convertOffsetToTimes(S && S.length === x.length ? S : defaultOffset(x), m), x, { ease: Array.isArray(T) ? T : defaultEasing(x, T) });
	return {
		calculatedDuration: m,
		next: (x) => (D.value = O(x), D.done = x >= m, D)
	};
}
var isNotNull$1 = (m) => m !== null;
function getFinalKeyframe$1(m, { repeat: x, repeatType: S = "loop" }, C, T = 1) {
	let D = m.filter(isNotNull$1), O = T < 0 || x && S !== "loop" && x % 2 == 1 ? 0 : D.length - 1;
	return !O || C === void 0 ? D[O] : C;
}
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(m) {
	typeof m.type == "string" && (m.type = transitionTypeMap[m.type]);
}
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((m) => {
			this.resolve = m;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(m, x) {
		return this.finished.then(m, x);
	}
}, percentToProgress = (m) => m / 100, JSAnimation = class extends WithPromise {
	constructor(m) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: m } = this.options;
			m && m.updatedAt !== time.now() && this.tick(time.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, activeAnimations.mainThread++, this.options = m, this.initAnimation(), this.play(), m.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: m } = this;
		replaceTransitionType(m);
		let { type: x = keyframes, repeat: S = 0, repeatDelay: C = 0, repeatType: T, velocity: D = 0 } = m, { keyframes: O } = m, k = x || keyframes;
		process.env.NODE_ENV !== "production" && k !== keyframes && invariant(O.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${O}`, "spring-two-frames"), k !== keyframes && typeof O[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(O[0], O[1])), O = [0, 100]);
		let A = k({
			...m,
			keyframes: O
		});
		T === "mirror" && (this.mirroredGenerator = k({
			...m,
			keyframes: [...O].reverse(),
			velocity: -D
		})), A.calculatedDuration === null && (A.calculatedDuration = calcGeneratorDuration(A));
		let { calculatedDuration: j } = A;
		this.calculatedDuration = j, this.resolvedDuration = j + C, this.totalDuration = this.resolvedDuration * (S + 1) - C, this.generator = A;
	}
	updateTime(m) {
		let x = Math.round(m - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = x : this.currentTime = this.holdTime;
	}
	tick(m, x = !1) {
		let { generator: S, totalDuration: C, mixKeyframes: T, mirroredGenerator: D, resolvedDuration: O, calculatedDuration: k } = this;
		if (this.startTime === null) return S.next(0);
		let { delay: A = 0, keyframes: j, repeat: M, repeatType: N, repeatDelay: P, type: F, onUpdate: I, finalKeyframe: L } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, m) : this.speed < 0 && (this.startTime = Math.min(m - C / this.speed, this.startTime)), x ? this.currentTime = m : this.updateTime(m);
		let R = this.currentTime - A * (this.playbackSpeed >= 0 ? 1 : -1), z = this.playbackSpeed >= 0 ? R < 0 : R > C;
		this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = C);
		let B = this.currentTime, V = S;
		if (M) {
			let m = Math.min(this.currentTime, C) / O, x = Math.floor(m), S = m % 1;
			!S && m >= 1 && (S = 1), S === 1 && x--, x = Math.min(x, M + 1), x % 2 && (N === "reverse" ? (S = 1 - S, P && (S -= P / O)) : N === "mirror" && (V = D)), B = clamp(0, 1, S) * O;
		}
		let H = z ? {
			done: !1,
			value: j[0]
		} : V.next(B);
		T && (H.value = T(H.value));
		let { done: U } = H;
		!z && k !== null && (U = this.playbackSpeed >= 0 ? this.currentTime >= C : this.currentTime <= 0);
		let W = this.holdTime === null && (this.state === "finished" || this.state === "running" && U);
		return W && F !== inertia && (H.value = getFinalKeyframe$1(j, this.options, L, this.speed)), I && I(H.value), W && this.finish(), H;
	}
	then(m, x) {
		return this.finished.then(m, x);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: m = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(m);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(m) {
		m = /* @__PURE__ */ secondsToMilliseconds(m), this.currentTime = m, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = m : this.driver && (this.startTime = this.driver.now() - m / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(m) {
		this.updateTime(time.now());
		let x = this.playbackSpeed !== m;
		this.playbackSpeed = m, x && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: m = frameloopDriver, startTime: x } = this.options;
		this.driver ||= m((m) => this.tick(m)), this.options.onPlay?.();
		let S = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = S) : this.holdTime === null ? this.startTime ||= x ?? S : this.startTime = S - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(time.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, activeAnimations.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(m) {
		return this.startTime = 0, this.tick(m, !0);
	}
	attachTimeline(m) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), m.observe(this);
	}
};
function fillWildcards(m) {
	for (let x = 1; x < m.length; x++) m[x] ?? (m[x] = m[x - 1]);
}
var radToDeg = (m) => m * 180 / Math.PI, rotate = (m) => rebaseAngle(radToDeg(Math.atan2(m[1], m[0]))), matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (m) => (Math.abs(m[0]) + Math.abs(m[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (m) => radToDeg(Math.atan(m[1])),
	skewY: (m) => radToDeg(Math.atan(m[2])),
	skew: (m) => (Math.abs(m[1]) + Math.abs(m[2])) / 2
}, rebaseAngle = (m) => (m %= 360, m < 0 && (m += 360), m), rotateZ = rotate, scaleX = (m) => Math.sqrt(m[0] * m[0] + m[1] * m[1]), scaleY = (m) => Math.sqrt(m[4] * m[4] + m[5] * m[5]), matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (m) => (scaleX(m) + scaleY(m)) / 2,
	rotateX: (m) => rebaseAngle(radToDeg(Math.atan2(m[6], m[5]))),
	rotateY: (m) => rebaseAngle(radToDeg(Math.atan2(-m[2], m[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (m) => radToDeg(Math.atan(m[4])),
	skewY: (m) => radToDeg(Math.atan(m[1])),
	skew: (m) => (Math.abs(m[1]) + Math.abs(m[4])) / 2
};
function defaultTransformValue(m) {
	return m.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(m, x) {
	if (!m || m === "none") return defaultTransformValue(x);
	let S = m.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), C, T;
	if (S) C = matrix3dParsers, T = S;
	else {
		let x = m.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		C = matrix2dParsers, T = x;
	}
	if (!T) return defaultTransformValue(x);
	let D = C[x], O = T[1].split(",").map(convertTransformToNumber);
	return typeof D == "function" ? D(O) : O[D];
}
var readTransformValue = (m, x) => {
	let { transform: S = "none" } = getComputedStyle(m);
	return parseValueFromTransform(S, x);
};
function convertTransformToNumber(m) {
	return parseFloat(m.trim());
}
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))(), isNumOrPxType = (m) => m === number || m === px, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((m) => !transformKeys.has(m));
function removeNonTranslationalTransform(m) {
	let x = [];
	return nonTranslationalTransformKeys.forEach((S) => {
		let C = m.getValue(S);
		C !== void 0 && (x.push([S, C.get()]), C.set(S.startsWith("scale") ? 1 : 0));
	}), x;
}
var positionalValues = {
	width: ({ x: m }, { paddingLeft: x = "0", paddingRight: S = "0" }) => m.max - m.min - parseFloat(x) - parseFloat(S),
	height: ({ y: m }, { paddingTop: x = "0", paddingBottom: S = "0" }) => m.max - m.min - parseFloat(x) - parseFloat(S),
	top: (m, { top: x }) => parseFloat(x),
	left: (m, { left: x }) => parseFloat(x),
	bottom: ({ y: m }, { top: x }) => parseFloat(x) + (m.max - m.min),
	right: ({ x: m }, { left: x }) => parseFloat(x) + (m.max - m.min),
	x: (m, { transform: x }) => parseValueFromTransform(x, "x"),
	y: (m, { transform: x }) => parseValueFromTransform(x, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let m = Array.from(toResolve).filter((m) => m.needsMeasurement), x = new Set(m.map((m) => m.element)), S = /* @__PURE__ */ new Map();
		x.forEach((m) => {
			let x = removeNonTranslationalTransform(m);
			x.length && (S.set(m, x), m.render());
		}), m.forEach((m) => m.measureInitialState()), x.forEach((m) => {
			m.render();
			let x = S.get(m);
			x && x.forEach(([x, S]) => {
				m.getValue(x)?.set(S);
			});
		}), m.forEach((m) => m.measureEndState()), m.forEach((m) => {
			m.suspendedScrollY !== void 0 && window.scrollTo(0, m.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((m) => m.complete(isForced)), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((m) => {
		m.readKeyframes(), m.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	isForced = !0, readAllKeyframes(), measureAllKeyframes(), isForced = !1;
}
var KeyframeResolver = class {
	constructor(m, x, S, C, T, D = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...m], this.onComplete = x, this.name = S, this.motionValue = C, this.element = T, this.isAsync = D;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: m, name: x, element: S, motionValue: C } = this;
		if (m[0] === null) {
			let T = C?.get(), D = m[m.length - 1];
			if (T !== void 0) m[0] = T;
			else if (S && x) {
				let C = S.readValue(x, D);
				C != null && (m[0] = C);
			}
			m[0] === void 0 && (m[0] = D), C && T === void 0 && C.set(m[0]);
		}
		fillWildcards(m);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(m = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, m), toResolve.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (toResolve.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, isCSSVar = (m) => m.startsWith("--");
function setStyle(m, x, S) {
	isCSSVar(x) ? m.style.setProperty(x, S) : m.style[x] = S;
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), supportsFlags = {};
function memoSupports(m, x) {
	let S = /* @__PURE__ */ memo$1(m);
	return () => supportsFlags[x] ?? S();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([m, x, S, C]) => `cubic-bezier(${m}, ${x}, ${S}, ${C})`, supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
function mapEasingToNativeEasing(m, x) {
	if (m) return typeof m == "function" ? supportsLinearEasing() ? generateLinearEasing(m, x) : "ease-out" : isBezierDefinition(m) ? cubicBezierAsString(m) : Array.isArray(m) ? m.map((m) => mapEasingToNativeEasing(m, x) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[m];
}
function startWaapiAnimation(m, x, S, { delay: C = 0, duration: T = 300, repeat: D = 0, repeatType: O = "loop", ease: k = "easeOut", times: A } = {}, j = void 0) {
	let M = { [x]: S };
	A && (M.offset = A);
	let N = mapEasingToNativeEasing(k, T);
	Array.isArray(N) && (M.easing = N), statsBuffer.value && activeAnimations.waapi++;
	let P = {
		delay: C,
		duration: T,
		easing: Array.isArray(N) ? "linear" : N,
		fill: "both",
		iterations: D + 1,
		direction: O === "reverse" ? "alternate" : "normal"
	};
	j && (P.pseudoElement = j);
	let F = m.animate(M, P);
	return statsBuffer.value && F.finished.finally(() => {
		activeAnimations.waapi--;
	}), F;
}
function isGenerator(m) {
	return typeof m == "function" && "applyToOptions" in m;
}
function applyGeneratorOptions({ type: m, ...x }) {
	return isGenerator(m) && supportsLinearEasing() ? m.applyToOptions(x) : (x.duration ??= 300, x.ease ??= "easeOut", x);
}
var NativeAnimation = class extends WithPromise {
	constructor(m) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !m) return;
		let { element: x, name: S, keyframes: C, pseudoElement: T, allowFlatten: D = !1, finalKeyframe: O, onComplete: k } = m;
		this.isPseudoElement = !!T, this.allowFlatten = D, this.options = m, invariant(typeof m.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let A = applyGeneratorOptions(m);
		this.animation = startWaapiAnimation(x, S, C, A, T), A.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !T) {
				let m = getFinalKeyframe$1(C, this.options, O, this.speed);
				this.updateMotionValue ? this.updateMotionValue(m) : setStyle(x, S, m), this.animation.cancel();
			}
			k?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: m } = this;
		m === "idle" || m === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let m = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(m));
	}
	get iterationDuration() {
		let { delay: m = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(m);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(m) {
		this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(m);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(m) {
		m < 0 && (this.finishedTime = null), this.animation.playbackRate = m;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return Number(this.animation.startTime);
	}
	set startTime(m) {
		this.animation.startTime = m;
	}
	attachTimeline({ timeline: m, observe: x }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, m && supportsScrollTimeline() ? (this.animation.timeline = m, noop) : x(this);
	}
}, unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(m) {
	return m in unsupportedEasingFunctions;
}
function replaceStringEasing(m) {
	typeof m.ease == "string" && isUnsupportedEase(m.ease) && (m.ease = unsupportedEasingFunctions[m.ease]);
}
var sampleDelta = 10, NativeAnimationExtended = class extends NativeAnimation {
	constructor(m) {
		replaceStringEasing(m), replaceTransitionType(m), super(m), m.startTime && (this.startTime = m.startTime), this.options = m;
	}
	updateMotionValue(m) {
		let { motionValue: x, onUpdate: S, onComplete: C, element: T, ...D } = this.options;
		if (!x) return;
		if (m !== void 0) {
			x.set(m);
			return;
		}
		let O = new JSAnimation({
			...D,
			autoplay: !1
		}), k = /* @__PURE__ */ secondsToMilliseconds(this.finishedTime ?? this.time);
		x.setWithVelocity(O.sample(k - sampleDelta).value, O.sample(k).value, sampleDelta), O.stop();
	}
}, isAnimatable = (m, x) => x === "zIndex" ? !1 : !!(typeof m == "number" || Array.isArray(m) || typeof m == "string" && (complex.test(m) || m === "0") && !m.startsWith("url("));
function hasKeyframesChanged(m) {
	let x = m[0];
	if (m.length === 1) return !0;
	for (let S = 0; S < m.length; S++) if (m[S] !== x) return !0;
}
function canAnimate(m, x, S, C) {
	let T = m[0];
	if (T === null) return !1;
	if (x === "display" || x === "visibility") return !0;
	let D = m[m.length - 1], O = isAnimatable(T, x), k = isAnimatable(D, x);
	return warning(O === k, `You are trying to animate ${x} from "${T}" to "${D}". "${O ? D : T}" is not an animatable value.`, "value-not-animatable"), !O || !k ? !1 : hasKeyframesChanged(m) || (S === "spring" || isGenerator(S)) && C;
}
function makeAnimationInstant(m) {
	m.duration = 0, m.type = "keyframes";
}
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(m) {
	let { motionValue: x, name: S, repeatDelay: C, repeatType: T, damping: D, type: O } = m;
	if (!(x?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: k, transformTemplate: A } = x.owner.getProps();
	return supportsWaapi() && S && acceleratedValues.has(S) && (S !== "transform" || !A) && !k && !C && T !== "mirror" && D !== 0 && O !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: m = !0, delay: x = 0, type: S = "keyframes", repeat: C = 0, repeatDelay: T = 0, repeatType: D = "loop", keyframes: O, name: k, motionValue: A, element: j, ...M }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let N = {
			autoplay: m,
			delay: x,
			type: S,
			repeat: C,
			repeatDelay: T,
			repeatType: D,
			name: k,
			motionValue: A,
			element: j,
			...M
		};
		this.keyframeResolver = new (j?.KeyframeResolver || KeyframeResolver)(O, (m, x, S) => this.onKeyframesResolved(m, x, N, !S), k, A, j), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(m, x, S, C) {
		this.keyframeResolver = void 0;
		let { name: T, type: D, velocity: O, delay: k, isHandoff: A, onUpdate: j } = S;
		this.resolvedAt = time.now(), canAnimate(m, T, D, O) || ((MotionGlobalConfig.instantAnimations || !k) && j?.(getFinalKeyframe$1(m, S, x)), m[0] = m[m.length - 1], makeAnimationInstant(S), S.repeat = 0);
		let M = {
			startTime: C ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: x,
			...S,
			keyframes: m
		}, N = !A && supportsBrowserAnimation(M) ? new NativeAnimationExtended({
			...M,
			element: M.motionValue.owner.current
		}) : new JSAnimation(M);
		N.finished.then(() => this.notifyFinished()).catch(noop), this.pendingTimeline &&= (this.stopTimeline = N.attachTimeline(this.pendingTimeline), void 0), this._animation = N;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(m, x) {
		return this.finished.finally(m).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), flushKeyframeResolvers()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(m) {
		this.animation.time = m;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(m) {
		this.animation.speed = m;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(m) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(m) : this.pendingTimeline = m, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(m) {
	let x = splitCSSVariableRegex.exec(m);
	if (!x) return [,];
	let [, S, C, T] = x;
	return [`--${S ?? C}`, T];
}
var maxDepth = 4;
function getVariableValue(m, x, S = 1) {
	invariant(S <= maxDepth, `Max CSS variable fallback depth detected in property "${m}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [C, T] = parseCSSVariable(m);
	if (!C) return;
	let D = window.getComputedStyle(x).getPropertyValue(C);
	if (D) {
		let m = D.trim();
		return isNumericalString(m) ? parseFloat(m) : m;
	}
	return isCSSVariableToken(T) ? getVariableValue(T, x, S + 1) : T;
}
function getValueTransition(m, x) {
	return m?.[x] ?? m?.default ?? m;
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]), auto = {
	test: (m) => m === "auto",
	parse: (m) => m
}, testValueType = (m) => (x) => x.test(m), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
], findDimensionValueType = (m) => dimensionValueTypes.find(testValueType(m));
function isNone(m) {
	return typeof m == "number" ? m === 0 : m === null ? !0 : m === "none" || m === "0" || isZeroValueString(m);
}
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(m) {
	let [x, S] = m.slice(0, -1).split("(");
	if (x === "drop-shadow") return m;
	let [C] = S.match(floatRegex) || [];
	if (!C) return m;
	let T = S.replace(C, ""), D = maxDefaults.has(x) ? 1 : 0;
	return C !== S && (D *= 100), x + "(" + D + T + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (m) => {
		let x = m.match(functionRegex);
		return x ? x.map(applyDefaultFilter).join(" ") : m;
	}
}, int = {
	...number,
	transform: Math.round
}, numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
}, defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
}, getDefaultValueType = (m) => defaultValueTypes[m];
function getAnimatableNone(m, x) {
	let S = getDefaultValueType(m);
	return S !== filter && (S = complex), S.getAnimatableNone ? S.getAnimatableNone(x) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(m, x, S) {
	let C = 0, T;
	for (; C < m.length && !T;) {
		let x = m[C];
		typeof x == "string" && !invalidTemplates.has(x) && analyseComplexValue(x).values.length && (T = m[C]), C++;
	}
	if (T && S) for (let C of x) m[C] = getAnimatableNone(S, T);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(m, x, S, C, T) {
		super(m, x, S, C, T, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: m, element: x, name: S } = this;
		if (!x || !x.current) return;
		super.readKeyframes();
		for (let S = 0; S < m.length; S++) {
			let C = m[S];
			if (typeof C == "string" && (C = C.trim(), isCSSVariableToken(C))) {
				let T = getVariableValue(C, x.current);
				T !== void 0 && (m[S] = T), S === m.length - 1 && (this.finalKeyframe = C);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(S) || m.length !== 2) return;
		let [C, T] = m, D = findDimensionValueType(C), O = findDimensionValueType(T);
		if (D !== O) if (isNumOrPxType(D) && isNumOrPxType(O)) for (let x = 0; x < m.length; x++) {
			let S = m[x];
			typeof S == "string" && (m[x] = parseFloat(S));
		}
		else positionalValues[S] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: m, name: x } = this, S = [];
		for (let x = 0; x < m.length; x++) (m[x] === null || isNone(m[x])) && S.push(x);
		S.length && makeNoneKeyframesAnimatable(m, S, x);
	}
	measureInitialState() {
		let { element: m, unresolvedKeyframes: x, name: S } = this;
		if (!m || !m.current) return;
		S === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[S](m.measureViewportBox(), window.getComputedStyle(m.current)), x[0] = this.measuredOrigin;
		let C = x[x.length - 1];
		C !== void 0 && m.getValue(S, C).jump(C, !1);
	}
	measureEndState() {
		let { element: m, name: x, unresolvedKeyframes: S } = this;
		if (!m || !m.current) return;
		let C = m.getValue(x);
		C && C.jump(this.measuredOrigin, !1);
		let T = S.length - 1, D = S[T];
		S[T] = positionalValues[x](m.measureViewportBox(), window.getComputedStyle(m.current)), D !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = D), this.removedTransforms?.length && this.removedTransforms.forEach(([x, S]) => {
			m.getValue(x).set(S);
		}), this.resolveNoneKeyframes();
	}
};
function resolveElements(m, x, S) {
	if (m instanceof EventTarget) return [m];
	if (typeof m == "string") {
		let C = document;
		x && (C = x.current);
		let T = S?.[m] ?? C.querySelectorAll(m);
		return T ? Array.from(T) : [];
	}
	return Array.from(m);
}
var getValueAsType = (m, x) => x && typeof m == "number" ? x.transform(m) : m;
function isHTMLElement(m) {
	return isObject(m) && "offsetHeight" in m;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (m) => !isNaN(parseFloat(m)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(m, x = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (m) => {
			let x = time.now();
			if (this.updatedAt !== x && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(m), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let m of this.dependents) m.dirty();
		}, this.hasAnimated = !1, this.setCurrent(m), this.owner = x.owner;
	}
	setCurrent(m) {
		this.current = m, this.updatedAt = time.now(), this.canTrackVelocity === null && m !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(m = this.current) {
		this.prevFrameValue = m, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(m) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", m);
	}
	on(m, x) {
		this.events[m] || (this.events[m] = new SubscriptionManager());
		let S = this.events[m].add(x);
		return m === "change" ? () => {
			S(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : S;
	}
	clearListeners() {
		for (let m in this.events) this.events[m].clear();
	}
	attach(m, x) {
		this.passiveEffect = m, this.stopPassiveEffect = x;
	}
	set(m) {
		this.passiveEffect ? this.passiveEffect(m, this.updateAndNotify) : this.updateAndNotify(m);
	}
	setWithVelocity(m, x, S) {
		this.set(x), this.prev = void 0, this.prevFrameValue = m, this.prevUpdatedAt = this.updatedAt - S;
	}
	jump(m, x = !0) {
		this.updateAndNotify(m), this.prev = m, this.prevUpdatedAt = this.prevFrameValue = void 0, x && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(m) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(m);
	}
	removeDependent(m) {
		this.dependents && this.dependents.delete(m);
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let m = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || m - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let x = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), x);
	}
	start(m) {
		return this.stop(), new Promise((x) => {
			this.hasAnimated = !0, this.animation = m(x), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function motionValue(m, x) {
	return new MotionValue(m, x);
}
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, !1), isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function setDragLock(m) {
	return m === "x" || m === "y" ? isDragging[m] ? null : (isDragging[m] = !0, () => {
		isDragging[m] = !1;
	}) : isDragging.x || isDragging.y ? null : (isDragging.x = isDragging.y = !0, () => {
		isDragging.x = isDragging.y = !1;
	});
}
function setupGesture(m, x) {
	let S = resolveElements(m), C = new AbortController();
	return [
		S,
		{
			passive: !0,
			...x,
			signal: C.signal
		},
		() => C.abort()
	];
}
function isValidHover(m) {
	return !(m.pointerType === "touch" || isDragActive());
}
function hover(m, x, S = {}) {
	let [C, T, D] = setupGesture(m, S), O = (m) => {
		if (!isValidHover(m)) return;
		let { target: S } = m, C = x(S, m);
		if (typeof C != "function" || !S) return;
		let D = (m) => {
			isValidHover(m) && (C(m), S.removeEventListener("pointerleave", D));
		};
		S.addEventListener("pointerleave", D, T);
	};
	return C.forEach((m) => {
		m.addEventListener("pointerenter", O, T);
	}), D;
}
var isNodeOrChild = (m, x) => x ? m === x ? !0 : isNodeOrChild(m, x.parentElement) : !1, isPrimaryPointer = (m) => m.pointerType === "mouse" ? typeof m.button != "number" || m.button <= 0 : m.isPrimary !== !1, focusableElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(m) {
	return focusableElements.has(m.tagName) || m.tabIndex !== -1;
}
var isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(m) {
	return (x) => {
		x.key === "Enter" && m(x);
	};
}
function firePointerEvent(m, x) {
	m.dispatchEvent(new PointerEvent("pointer" + x, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (m, x) => {
	let S = m.currentTarget;
	if (!S) return;
	let C = filterEvents(() => {
		if (isPressing.has(S)) return;
		firePointerEvent(S, "down");
		let m = filterEvents(() => {
			firePointerEvent(S, "up");
		});
		S.addEventListener("keyup", m, x), S.addEventListener("blur", () => firePointerEvent(S, "cancel"), x);
	});
	S.addEventListener("keydown", C, x), S.addEventListener("blur", () => S.removeEventListener("keydown", C), x);
};
function isValidPressEvent(m) {
	return isPrimaryPointer(m) && !isDragActive();
}
function press(m, x, S = {}) {
	let [C, T, D] = setupGesture(m, S), O = (m) => {
		let C = m.currentTarget;
		if (!isValidPressEvent(m)) return;
		isPressing.add(C);
		let D = x(C, m), O = (m, x) => {
			window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", A), isPressing.has(C) && isPressing.delete(C), isValidPressEvent(m) && typeof D == "function" && D(m, { success: x });
		}, k = (m) => {
			O(m, C === window || C === document || S.useGlobalTarget || isNodeOrChild(C, m.target));
		}, A = (m) => {
			O(m, !1);
		};
		window.addEventListener("pointerup", k, T), window.addEventListener("pointercancel", A, T);
	};
	return C.forEach((m) => {
		(S.useGlobalTarget ? window : m).addEventListener("pointerdown", O, T), isHTMLElement(m) && (m.addEventListener("focus", (m) => enableKeyboardPress(m, T)), !isElementKeyboardAccessible(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
	}), D;
}
function isSVGElement(m) {
	return isObject(m) && "ownerSVGElement" in m;
}
function isSVGSVGElement(m) {
	return isSVGElement(m) && m.tagName === "svg";
}
var isMotionValue = (m) => !!(m && m.getVelocity), valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (m) => valueTypes.find(testValueType(m)), MotionConfigContext = createContext({
	transformPagePoint: (m) => m,
	isStatic: !1,
	reducedMotion: "never"
});
function usePresence(m = !0) {
	let x = useContext(PresenceContext);
	if (x === null) return [!0, null];
	let { isPresent: S, onExitComplete: C, register: T } = x, D = useId();
	useEffect(() => {
		if (m) return T(D);
	}, [m]);
	let O = useCallback(() => m && C && C(D), [
		D,
		C,
		m
	]);
	return !S && C ? [!1, O] : [!0];
}
var LazyContext = createContext({ strict: !1 }), featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, featureDefinitions = {};
for (let m in featureProps) featureDefinitions[m] = { isEnabled: (x) => featureProps[m].some((m) => !!x[m]) };
function loadFeatures(m) {
	for (let x in m) featureDefinitions[x] = {
		...featureDefinitions[x],
		...m[x]
	};
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(m) {
	return m.startsWith("while") || m.startsWith("drag") && m !== "draggable" || m.startsWith("layout") || m.startsWith("onTap") || m.startsWith("onPan") || m.startsWith("onLayout") || validMotionProps.has(m);
}
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __export({ default: () => is_prop_valid_framer_motion_default }), is_prop_valid_framer_motion_default, init_is_prop_valid_framer_motion = __esmMin((() => {
	throw is_prop_valid_framer_motion_default = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), shouldForward = (m) => !isValidMotionProp(m);
function loadExternalIsValidProp(m) {
	typeof m == "function" && (shouldForward = (x) => x.startsWith("on") ? !isValidMotionProp(x) : m(x));
}
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(m, x, S) {
	let C = {};
	for (let T in m) T === "values" && typeof m.values == "object" || (shouldForward(T) || S === !0 && isValidMotionProp(T) || !x && !isValidMotionProp(T) || m.draggable && T.startsWith("onDrag")) && (C[T] = m[T]);
	return C;
}
var MotionContext = /* @__PURE__ */ createContext({});
function isAnimationControls(m) {
	return typeof m == "object" && !!m && typeof m.start == "function";
}
function isVariantLabel(m) {
	return typeof m == "string" || Array.isArray(m);
}
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(m) {
	return isAnimationControls(m.animate) || variantProps.some((x) => isVariantLabel(m[x]));
}
function isVariantNode(m) {
	return !!(isControllingVariants(m) || m.variants);
}
function getCurrentTreeVariants(m, x) {
	if (isControllingVariants(m)) {
		let { initial: x, animate: S } = m;
		return {
			initial: x === !1 || isVariantLabel(x) ? x : void 0,
			animate: isVariantLabel(S) ? S : void 0
		};
	}
	return m.inherit === !1 ? {} : x;
}
function useCreateMotionContext(m) {
	let { initial: x, animate: S } = getCurrentTreeVariants(m, useContext(MotionContext));
	return useMemo(() => ({
		initial: x,
		animate: S
	}), [variantLabelsAsDependency(x), variantLabelsAsDependency(S)]);
}
function variantLabelsAsDependency(m) {
	return Array.isArray(m) ? m.join(" ") : m;
}
var scaleCorrectors = {};
function addScaleCorrector(m) {
	for (let x in m) scaleCorrectors[x] = m[x], isCSSVariableName(x) && (scaleCorrectors[x].isCSSVariable = !0);
}
function isForcedMotionValue(m, { layout: x, layoutId: S }) {
	return transformProps.has(m) || m.startsWith("origin") || (x || S !== void 0) && (!!scaleCorrectors[m] || m === "opacity");
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(m, x, S) {
	let C = "", T = !0;
	for (let D = 0; D < numTransforms; D++) {
		let O = transformPropOrder[D], k = m[O];
		if (k === void 0) continue;
		let A = !0;
		if (A = typeof k == "number" ? k === (O.startsWith("scale") ? 1 : 0) : parseFloat(k) === 0, !A || S) {
			let m = getValueAsType(k, numberValueTypes[O]);
			if (!A) {
				T = !1;
				let x = translateAlias[O] || O;
				C += `${x}(${m}) `;
			}
			S && (x[O] = m);
		}
	}
	return C = C.trim(), S ? C = S(x, T ? "" : C) : T && (C = "none"), C;
}
function buildHTMLStyles(m, x, S) {
	let { style: C, vars: T, transformOrigin: D } = m, O = !1, k = !1;
	for (let m in x) {
		let S = x[m];
		if (transformProps.has(m)) {
			O = !0;
			continue;
		} else if (isCSSVariableName(m)) {
			T[m] = S;
			continue;
		} else {
			let x = getValueAsType(S, numberValueTypes[m]);
			m.startsWith("origin") ? (k = !0, D[m] = x) : C[m] = x;
		}
	}
	if (x.transform || (O || S ? C.transform = buildTransform(x, m.transform, S) : C.transform &&= "none"), k) {
		let { originX: m = "50%", originY: x = "50%", originZ: S = 0 } = D;
		C.transformOrigin = `${m} ${x} ${S}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(m, x, S) {
	for (let C in x) !isMotionValue(x[C]) && !isForcedMotionValue(C, S) && (m[C] = x[C]);
}
function useInitialMotionValues({ transformTemplate: m }, x) {
	return useMemo(() => {
		let S = createHtmlRenderState();
		return buildHTMLStyles(S, x, m), Object.assign({}, S.vars, S.style);
	}, [x]);
}
function useStyle(m, x) {
	let S = m.style || {}, C = {};
	return copyRawValuesOnly(C, S, m), Object.assign(C, useInitialMotionValues(m, x)), C;
}
function useHTMLProps(m, x) {
	let S = {}, C = useStyle(m, x);
	return m.drag && m.dragListener !== !1 && (S.draggable = !1, C.userSelect = C.WebkitUserSelect = C.WebkitTouchCallout = "none", C.touchAction = m.drag === !0 ? "none" : `pan-${m.drag === "x" ? "y" : "x"}`), m.tabIndex === void 0 && (m.onTap || m.onTapStart || m.whileTap) && (S.tabIndex = 0), S.style = C, S;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(m, x, S = 1, C = 0, T = !0) {
	m.pathLength = 1;
	let D = T ? dashKeys : camelKeys;
	m[D.offset] = px.transform(-C);
	let O = px.transform(x), k = px.transform(S);
	m[D.array] = `${O} ${k}`;
}
function buildSVGAttrs(m, { attrX: x, attrY: S, attrScale: C, pathLength: T, pathSpacing: D = 1, pathOffset: O = 0, ...k }, A, j, M) {
	if (buildHTMLStyles(m, k, j), A) {
		m.style.viewBox && (m.attrs.viewBox = m.style.viewBox);
		return;
	}
	m.attrs = m.style, m.style = {};
	let { attrs: N, style: P } = m;
	N.transform && (P.transform = N.transform, delete N.transform), (P.transform || N.transformOrigin) && (P.transformOrigin = N.transformOrigin ?? "50% 50%", delete N.transformOrigin), P.transform && (P.transformBox = M?.transformBox ?? "fill-box", delete N.transformBox), x !== void 0 && (N.x = x), S !== void 0 && (N.y = S), C !== void 0 && (N.scale = C), T !== void 0 && buildSVGPath(N, T, D, O, !1);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (m) => typeof m == "string" && m.toLowerCase() === "svg";
function useSVGProps(m, x, S, C) {
	let T = useMemo(() => {
		let S = createSvgRenderState();
		return buildSVGAttrs(S, x, isSVGTag(C), m.transformTemplate, m.style), {
			...S.attrs,
			style: { ...S.style }
		};
	}, [x]);
	if (m.style) {
		let x = {};
		copyRawValuesOnly(x, m.style, m), T.style = {
			...x,
			...T.style
		};
	}
	return T;
}
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
function isSVGComponent(m) {
	return typeof m != "string" || m.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(m) > -1 || /[A-Z]/u.test(m));
}
function useRender(m, x, S, { latestValues: T }, O, k = !1) {
	let A = (isSVGComponent(m) ? useSVGProps : useHTMLProps)(x, T, O, m), j = filterProps(x, typeof m == "string", k), M = m === Fragment ? {} : {
		...j,
		...A,
		ref: S
	}, { children: N } = x, P = useMemo(() => isMotionValue(N) ? N.get() : N, [N]);
	return createElement(m, {
		...M,
		children: P
	});
}
function getValueState(m) {
	let x = [{}, {}];
	return m?.values.forEach((m, S) => {
		x[0][S] = m.get(), x[1][S] = m.getVelocity();
	}), x;
}
function resolveVariantFromProps(m, x, S, C) {
	if (typeof x == "function") {
		let [T, D] = getValueState(C);
		x = x(S === void 0 ? m.custom : S, T, D);
	}
	if (typeof x == "string" && (x = m.variants && m.variants[x]), typeof x == "function") {
		let [T, D] = getValueState(C);
		x = x(S === void 0 ? m.custom : S, T, D);
	}
	return x;
}
function resolveMotionValue(m) {
	return isMotionValue(m) ? m.get() : m;
}
function makeState({ scrapeMotionValuesFromProps: m, createRenderState: x }, S, C, T) {
	return {
		latestValues: makeLatestValues(S, C, T, m),
		renderState: x()
	};
}
function makeLatestValues(m, x, S, C) {
	let T = {}, D = C(m, {});
	for (let m in D) T[m] = resolveMotionValue(D[m]);
	let { initial: O, animate: k } = m, A = isControllingVariants(m), j = isVariantNode(m);
	x && j && !A && m.inherit !== !1 && (O === void 0 && (O = x.initial), k === void 0 && (k = x.animate));
	let M = S ? S.initial === !1 : !1;
	M ||= O === !1;
	let N = M ? k : O;
	if (N && typeof N != "boolean" && !isAnimationControls(N)) {
		let x = Array.isArray(N) ? N : [N];
		for (let S = 0; S < x.length; S++) {
			let C = resolveVariantFromProps(m, x[S]);
			if (C) {
				let { transitionEnd: m, transition: x, ...S } = C;
				for (let m in S) {
					let x = S[m];
					if (Array.isArray(x)) {
						let m = M ? x.length - 1 : 0;
						x = x[m];
					}
					x !== null && (T[m] = x);
				}
				for (let x in m) T[x] = m[x];
			}
		}
	}
	return T;
}
var makeUseVisualState = (m) => (x, S) => {
	let C = useContext(MotionContext), T = useContext(PresenceContext), D = () => makeState(m, x, C, T);
	return S ? D() : useConstant(D);
};
function scrapeMotionValuesFromProps$1(m, x, S) {
	let { style: C } = m, T = {};
	for (let D in C) (isMotionValue(C[D]) || x.style && isMotionValue(x.style[D]) || isForcedMotionValue(D, m) || S?.getValue(D)?.liveStyle !== void 0) && (T[D] = C[D]);
	return T;
}
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
function scrapeMotionValuesFromProps(m, x, S) {
	let C = scrapeMotionValuesFromProps$1(m, x, S);
	for (let S in m) if (isMotionValue(m[S]) || isMotionValue(x[S])) {
		let x = transformPropOrder.indexOf(S) === -1 ? S : "attr" + S.charAt(0).toUpperCase() + S.substring(1);
		C[x] = m[S];
	}
	return C;
}
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function isRefObject(m) {
	return m && typeof m == "object" && Object.prototype.hasOwnProperty.call(m, "current");
}
function useMotionRef(m, x, S) {
	return useCallback((C) => {
		C && m.onMount && m.onMount(C), x && (C ? x.mount(C) : x.unmount()), S && (typeof S == "function" ? S(C) : isRefObject(S) && (S.current = C));
	}, [x]);
}
var camelToDash = (m) => m.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), SwitchLayoutGroupContext = createContext({});
function useVisualElement(m, x, S, C, T) {
	let { visualElement: D } = useContext(MotionContext), O = useContext(LazyContext), k = useContext(PresenceContext), A = useContext(MotionConfigContext).reducedMotion, j = useRef(null);
	C ||= O.renderer, !j.current && C && (j.current = C(m, {
		visualState: x,
		parent: D,
		props: S,
		presenceContext: k,
		blockInitialAnimation: k ? k.initial === !1 : !1,
		reducedMotionConfig: A
	}));
	let M = j.current, F = useContext(SwitchLayoutGroupContext);
	M && !M.projection && T && (M.type === "html" || M.type === "svg") && createProjectionNode$1(j.current, S, T, F);
	let I = useRef(!1);
	useInsertionEffect(() => {
		M && I.current && M.update(S, k);
	});
	let R = S[optimizedAppearDataAttribute], z = useRef(!!R && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R));
	return useIsomorphicLayoutEffect(() => {
		M && (I.current = !0, window.MotionIsMounted = !0, M.updateFeatures(), M.scheduleRenderMicrotask(), z.current && M.animationState && M.animationState.animateChanges());
	}), useEffect(() => {
		M && (!z.current && M.animationState && M.animationState.animateChanges(), z.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(R);
		}), !1), M.enteringChildren = void 0);
	}), M;
}
function createProjectionNode$1(m, x, S, C) {
	let { layoutId: T, layout: D, drag: O, dragConstraints: k, layoutScroll: A, layoutRoot: j, layoutCrossfade: M } = x;
	m.projection = new S(m.latestValues, x["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(m.parent)), m.projection.setOptions({
		layoutId: T,
		layout: D,
		alwaysMeasureLayout: !!O || k && isRefObject(k),
		visualElement: m,
		animationType: typeof D == "string" ? D : "both",
		initialPromotionConfig: C,
		crossfade: M,
		layoutScroll: A,
		layoutRoot: j
	});
}
function getClosestProjectingNode(m) {
	if (m) return m.options.allowProjection === !1 ? getClosestProjectingNode(m.parent) : m.projection;
}
function createMotionComponent(m, { forwardMotionProps: x = !1 } = {}, S, C) {
	S && loadFeatures(S);
	let T = isSVGComponent(m) ? useSVGVisualState : useHTMLVisualState;
	function D(D, O) {
		let k, A = {
			...useContext(MotionConfigContext),
			...D,
			layoutId: useLayoutId(D)
		}, { isStatic: j } = A, M = useCreateMotionContext(D), P = T(D, j);
		if (!j && isBrowser) {
			useStrictMode(A, S);
			let x = getProjectionFunctionality(A);
			k = x.MeasureLayout, M.visualElement = useVisualElement(m, P, A, C, x.ProjectionNode);
		}
		return jsxs(MotionContext.Provider, {
			value: M,
			children: [k && M.visualElement ? jsx(k, {
				visualElement: M.visualElement,
				...A
			}) : null, useRender(m, D, useMotionRef(P, M.visualElement, O), P, j, x)]
		});
	}
	D.displayName = `motion.${typeof m == "string" ? m : `create(${m.displayName ?? m.name ?? ""})`}`;
	let k = forwardRef(D);
	return k[motionComponentSymbol] = m, k;
}
function useLayoutId({ layoutId: m }) {
	let x = useContext(LayoutGroupContext).id;
	return x && m !== void 0 ? x + "-" + m : m;
}
function useStrictMode(m, x) {
	let S = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && x && S) {
		let x = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		m.ignoreStrict ? warning(!1, x, "lazy-strict-mode") : invariant(!1, x, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(m) {
	let { drag: x, layout: S } = featureDefinitions;
	if (!x && !S) return {};
	let C = {
		...x,
		...S
	};
	return {
		MeasureLayout: x?.isEnabled(m) || S?.isEnabled(m) ? C.MeasureLayout : void 0,
		ProjectionNode: C.ProjectionNode
	};
}
function createMotionProxy(m, x) {
	if (typeof Proxy > "u") return createMotionComponent;
	let S = /* @__PURE__ */ new Map(), C = (S, C) => createMotionComponent(S, C, m, x);
	return new Proxy((m, x) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), C(m, x)), { get: (T, D) => D === "create" ? C : (S.has(D) || S.set(D, createMotionComponent(D, void 0, m, x)), S.get(D)) });
}
function convertBoundingBoxToBox({ top: m, left: x, right: S, bottom: C }) {
	return {
		x: {
			min: x,
			max: S
		},
		y: {
			min: m,
			max: C
		}
	};
}
function convertBoxToBoundingBox({ x: m, y: x }) {
	return {
		top: x.min,
		right: m.max,
		bottom: x.max,
		left: m.min
	};
}
function transformBoxPoints(m, x) {
	if (!x) return m;
	let S = x({
		x: m.left,
		y: m.top
	}), C = x({
		x: m.right,
		y: m.bottom
	});
	return {
		top: S.y,
		left: S.x,
		bottom: C.y,
		right: C.x
	};
}
function isIdentityScale(m) {
	return m === void 0 || m === 1;
}
function hasScale({ scale: m, scaleX: x, scaleY: S }) {
	return !isIdentityScale(m) || !isIdentityScale(x) || !isIdentityScale(S);
}
function hasTransform(m) {
	return hasScale(m) || has2DTranslate(m) || m.z || m.rotate || m.rotateX || m.rotateY || m.skewX || m.skewY;
}
function has2DTranslate(m) {
	return is2DTranslate(m.x) || is2DTranslate(m.y);
}
function is2DTranslate(m) {
	return m && m !== "0%";
}
function scalePoint(m, x, S) {
	return S + x * (m - S);
}
function applyPointDelta(m, x, S, C, T) {
	return T !== void 0 && (m = scalePoint(m, T, C)), scalePoint(m, S, C) + x;
}
function applyAxisDelta(m, x = 0, S = 1, C, T) {
	m.min = applyPointDelta(m.min, x, S, C, T), m.max = applyPointDelta(m.max, x, S, C, T);
}
function applyBoxDelta(m, { x, y: S }) {
	applyAxisDelta(m.x, x.translate, x.scale, x.originPoint), applyAxisDelta(m.y, S.translate, S.scale, S.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(m, x, S, C = !1) {
	let T = S.length;
	if (!T) return;
	x.x = x.y = 1;
	let D, O;
	for (let k = 0; k < T; k++) {
		D = S[k], O = D.projectionDelta;
		let { visualElement: T } = D.options;
		T && T.props.style && T.props.style.display === "contents" || (C && D.options.layoutScroll && D.scroll && D !== D.root && transformBox(m, {
			x: -D.scroll.offset.x,
			y: -D.scroll.offset.y
		}), O && (x.x *= O.x.scale, x.y *= O.y.scale, applyBoxDelta(m, O)), C && hasTransform(D.latestValues) && transformBox(m, D.latestValues));
	}
	x.x < TREE_SCALE_SNAP_MAX && x.x > TREE_SCALE_SNAP_MIN && (x.x = 1), x.y < TREE_SCALE_SNAP_MAX && x.y > TREE_SCALE_SNAP_MIN && (x.y = 1);
}
function translateAxis(m, x) {
	m.min += x, m.max += x;
}
function transformAxis(m, x, S, C, T = .5) {
	applyAxisDelta(m, x, S, mixNumber(m.min, m.max, T), C);
}
function transformBox(m, x) {
	transformAxis(m.x, x.x, x.scaleX, x.scale, x.originX), transformAxis(m.y, x.y, x.scaleY, x.scale, x.originY);
}
function measureViewportBox(m, x) {
	return convertBoundingBoxToBox(transformBoxPoints(m.getBoundingClientRect(), x));
}
function measurePageBox(m, x, S) {
	let C = measureViewportBox(m, S), { scroll: T } = x;
	return T && (translateAxis(C.x, T.offset.x), translateAxis(C.y, T.offset.y)), C;
}
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
}), createAxis = () => ({
	min: 0,
	max: 0
}), createBox = () => ({
	x: createAxis(),
	y: createAxis()
}), prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser) if (window.matchMedia) {
		let m = window.matchMedia("(prefers-reduced-motion)"), x = () => prefersReducedMotion.current = m.matches;
		m.addEventListener("change", x), x();
	} else prefersReducedMotion.current = !1;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(m, x, S) {
	for (let C in x) {
		let T = x[C], D = S[C];
		if (isMotionValue(T)) m.addValue(C, T);
		else if (isMotionValue(D)) m.addValue(C, motionValue(T, { owner: m }));
		else if (D !== T) if (m.hasValue(C)) {
			let x = m.getValue(C);
			x.liveStyle === !0 ? x.jump(T) : x.hasAnimated || x.set(T);
		} else {
			let x = m.getStaticValue(C);
			m.addValue(C, motionValue(x === void 0 ? T : x, { owner: m }));
		}
	}
	for (let C in S) x[C] === void 0 && m.removeValue(C);
	return x;
}
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], VisualElement = class {
	scrapeMotionValuesFromProps(m, x, S) {
		return {};
	}
	constructor({ parent: m, props: x, presenceContext: S, reducedMotionConfig: C, blockInitialAnimation: T, visualState: D }, O = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let m = time.now();
			this.renderScheduledAt < m && (this.renderScheduledAt = m, frame.render(this.render, !1, !0));
		};
		let { latestValues: k, renderState: A } = D;
		this.latestValues = k, this.baseTarget = { ...k }, this.initialValues = x.initial ? { ...k } : {}, this.renderState = A, this.parent = m, this.props = x, this.presenceContext = S, this.depth = m ? m.depth + 1 : 0, this.reducedMotionConfig = C, this.options = O, this.blockInitialAnimation = !!T, this.isControllingVariants = isControllingVariants(x), this.isVariantNode = isVariantNode(x), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(m && m.current);
		let { willChange: j, ...M } = this.scrapeMotionValuesFromProps(x, {}, this);
		for (let m in M) {
			let x = M[m];
			k[m] !== void 0 && isMotionValue(x) && x.set(k[m]);
		}
	}
	mount(m) {
		this.current = m, visualElementStore.set(m, this), this.projection && !this.projection.instance && this.projection.mount(m), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((m, x) => this.bindToMotionValue(x, m)), hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : prefersReducedMotion.current, process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let m in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((m) => m()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[m].clear();
		for (let m in this.features) {
			let x = this.features[m];
			x && (x.unmount(), x.isMounted = !1);
		}
		this.current = null;
	}
	addChild(m) {
		this.children.add(m), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(m);
	}
	removeChild(m) {
		this.children.delete(m), this.enteringChildren && this.enteringChildren.delete(m);
	}
	bindToMotionValue(m, x) {
		this.valueSubscriptions.has(m) && this.valueSubscriptions.get(m)();
		let S = transformProps.has(m);
		S && this.onBindTransform && this.onBindTransform();
		let C = x.on("change", (x) => {
			this.latestValues[m] = x, this.props.onUpdate && frame.preRender(this.notifyUpdate), S && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), T;
		window.MotionCheckAppearSync && (T = window.MotionCheckAppearSync(this, m, x)), this.valueSubscriptions.set(m, () => {
			C(), T && T(), x.owner && x.stop();
		});
	}
	sortNodePosition(m) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== m.type ? 0 : this.sortInstanceNodePosition(this.current, m.current);
	}
	updateFeatures() {
		let m = "animation";
		for (m in featureDefinitions) {
			let x = featureDefinitions[m];
			if (!x) continue;
			let { isEnabled: S, Feature: C } = x;
			if (!this.features[m] && C && S(this.props) && (this.features[m] = new C(this)), this.features[m]) {
				let x = this.features[m];
				x.isMounted ? x.update() : (x.mount(), x.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(m) {
		return this.latestValues[m];
	}
	setStaticValue(m, x) {
		this.latestValues[m] = x;
	}
	update(m, x) {
		(m.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = m, this.prevPresenceContext = this.presenceContext, this.presenceContext = x;
		for (let x = 0; x < propEventHandlers.length; x++) {
			let S = propEventHandlers[x];
			this.propEventSubscriptions[S] && (this.propEventSubscriptions[S](), delete this.propEventSubscriptions[S]);
			let C = m["on" + S];
			C && (this.propEventSubscriptions[S] = this.on(S, C));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(m, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(m) {
		return this.props.variants ? this.props.variants[m] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(m) {
		let x = this.getClosestVariantNode();
		if (x) return x.variantChildren && x.variantChildren.add(m), () => x.variantChildren.delete(m);
	}
	addValue(m, x) {
		let S = this.values.get(m);
		x !== S && (S && this.removeValue(m), this.bindToMotionValue(m, x), this.values.set(m, x), this.latestValues[m] = x.get());
	}
	removeValue(m) {
		this.values.delete(m);
		let x = this.valueSubscriptions.get(m);
		x && (x(), this.valueSubscriptions.delete(m)), delete this.latestValues[m], this.removeValueFromRenderState(m, this.renderState);
	}
	hasValue(m) {
		return this.values.has(m);
	}
	getValue(m, x) {
		if (this.props.values && this.props.values[m]) return this.props.values[m];
		let S = this.values.get(m);
		return S === void 0 && x !== void 0 && (S = motionValue(x === null ? void 0 : x, { owner: this }), this.addValue(m, S)), S;
	}
	readValue(m, x) {
		let S = this.latestValues[m] !== void 0 || !this.current ? this.latestValues[m] : this.getBaseTargetFromProps(this.props, m) ?? this.readValueFromInstance(this.current, m, this.options);
		return S != null && (typeof S == "string" && (isNumericalString(S) || isZeroValueString(S)) ? S = parseFloat(S) : !findValueType(S) && complex.test(x) && (S = getAnimatableNone(m, x)), this.setBaseTarget(m, isMotionValue(S) ? S.get() : S)), isMotionValue(S) ? S.get() : S;
	}
	setBaseTarget(m, x) {
		this.baseTarget[m] = x;
	}
	getBaseTarget(m) {
		let { initial: x } = this.props, S;
		if (typeof x == "string" || typeof x == "object") {
			let C = resolveVariantFromProps(this.props, x, this.presenceContext?.custom);
			C && (S = C[m]);
		}
		if (x && S !== void 0) return S;
		let C = this.getBaseTargetFromProps(this.props, m);
		return C !== void 0 && !isMotionValue(C) ? C : this.initialValues[m] !== void 0 && S === void 0 ? void 0 : this.baseTarget[m];
	}
	on(m, x) {
		return this.events[m] || (this.events[m] = new SubscriptionManager()), this.events[m].add(x);
	}
	notify(m, ...x) {
		this.events[m] && this.events[m].notify(...x);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(m, x) {
		return m.compareDocumentPosition(x) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(m, x) {
		return m.style ? m.style[x] : void 0;
	}
	removeValueFromRenderState(m, { vars: x, style: S }) {
		delete x[m], delete S[m];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: m } = this.props;
		isMotionValue(m) && (this.childSubscription = m.on("change", (m) => {
			this.current && (this.current.textContent = `${m}`);
		}));
	}
};
function renderHTML(m, { style: x, vars: S }, C, T) {
	let D = m.style, O;
	for (O in x) D[O] = x[O];
	for (O in T?.applyProjectionStyles(D, C), S) D.setProperty(O, S[O]);
}
function getComputedStyle$1(m) {
	return window.getComputedStyle(m);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(m, x) {
		if (transformProps.has(x)) return this.projection?.isProjecting ? defaultTransformValue(x) : readTransformValue(m, x);
		{
			let S = getComputedStyle$1(m), C = (isCSSVariableName(x) ? S.getPropertyValue(x) : S[x]) || 0;
			return typeof C == "string" ? C.trim() : C;
		}
	}
	measureInstanceViewportBox(m, { transformPagePoint: x }) {
		return measureViewportBox(m, x);
	}
	build(m, x, S) {
		buildHTMLStyles(m, x, S.transformTemplate);
	}
	scrapeMotionValuesFromProps(m, x, S) {
		return scrapeMotionValuesFromProps$1(m, x, S);
	}
}, camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
function renderSVG(m, x, S, C) {
	for (let S in renderHTML(m, x, void 0, C), x.attrs) m.setAttribute(camelCaseAttributes.has(S) ? S : camelToDash(S), x.attrs[S]);
}
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(m, x) {
		return m[x];
	}
	readValueFromInstance(m, x) {
		if (transformProps.has(x)) {
			let m = getDefaultValueType(x);
			return m && m.default || 0;
		}
		return x = camelCaseAttributes.has(x) ? x : camelToDash(x), m.getAttribute(x);
	}
	scrapeMotionValuesFromProps(m, x, S) {
		return scrapeMotionValuesFromProps(m, x, S);
	}
	build(m, x, S) {
		buildSVGAttrs(m, x, this.isSVGTag, S.transformTemplate, S.style);
	}
	renderInstance(m, x, S, C) {
		renderSVG(m, x, S, C);
	}
	mount(m) {
		this.isSVGTag = isSVGTag(m.tagName), super.mount(m);
	}
}, createDomVisualElement = (m, x) => isSVGComponent(m) ? new SVGVisualElement(x) : new HTMLVisualElement(x, { allowProjection: m !== Fragment });
function resolveVariant(m, x, S) {
	let C = m.getProps();
	return resolveVariantFromProps(C, x, S === void 0 ? C.custom : S, m);
}
var isKeyframesTarget = (m) => Array.isArray(m);
function setMotionValue(m, x, S) {
	m.hasValue(x) ? m.getValue(x).set(S) : m.addValue(x, motionValue(S));
}
function resolveFinalValueInKeyframes(m) {
	return isKeyframesTarget(m) ? m[m.length - 1] || 0 : m;
}
function setTarget(m, x) {
	let { transitionEnd: S = {}, transition: C = {}, ...T } = resolveVariant(m, x) || {};
	for (let x in T = {
		...T,
		...S
	}, T) setMotionValue(m, x, resolveFinalValueInKeyframes(T[x]));
}
function isWillChangeMotionValue(m) {
	return !!(isMotionValue(m) && m.add);
}
function addValueToWillChange(m, x) {
	let S = m.getValue("willChange");
	if (isWillChangeMotionValue(S)) return S.add(x);
	if (!S && MotionGlobalConfig.WillChange) {
		let S = new MotionGlobalConfig.WillChange("auto");
		m.addValue("willChange", S), S.add(x);
	}
}
function getOptimisedAppearId(m) {
	return m.props[optimizedAppearDataAttribute];
}
var isNotNull = (m) => m !== null;
function getFinalKeyframe(m, { repeat: x, repeatType: S = "loop" }, C) {
	let T = m.filter(isNotNull), D = x && S !== "loop" && x % 2 == 1 ? 0 : T.length - 1;
	return !D || C === void 0 ? T[D] : C;
}
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, criticallyDampedSpring = (m) => ({
	type: "spring",
	stiffness: 550,
	damping: m === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), keyframesTransition = {
	type: "keyframes",
	duration: .8
}, ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, getDefaultTransition = (m, { keyframes: x }) => x.length > 2 ? keyframesTransition : transformProps.has(m) ? m.startsWith("scale") ? criticallyDampedSpring(x[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: m, delay: x, delayChildren: S, staggerChildren: C, staggerDirection: T, repeat: D, repeatType: O, repeatDelay: k, from: A, elapsed: j, ...M }) {
	return !!Object.keys(M).length;
}
var animateMotionValue = (m, x, S, C = {}, T, D) => (O) => {
	let k = getValueTransition(C, m) || {}, A = k.delay || C.delay || 0, { elapsed: j = 0 } = C;
	j -= /* @__PURE__ */ secondsToMilliseconds(A);
	let M = {
		keyframes: Array.isArray(S) ? S : [null, S],
		ease: "easeOut",
		velocity: x.getVelocity(),
		...k,
		delay: -j,
		onUpdate: (m) => {
			x.set(m), k.onUpdate && k.onUpdate(m);
		},
		onComplete: () => {
			O(), k.onComplete && k.onComplete();
		},
		name: m,
		motionValue: x,
		element: D ? void 0 : T
	};
	isTransitionDefined(k) || Object.assign(M, getDefaultTransition(m, M)), M.duration &&= /* @__PURE__ */ secondsToMilliseconds(M.duration), M.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(M.repeatDelay), M.from !== void 0 && (M.keyframes[0] = M.from);
	let N = !1;
	if ((M.type === !1 || M.duration === 0 && !M.repeatDelay) && (makeAnimationInstant(M), M.delay === 0 && (N = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) && (N = !0, makeAnimationInstant(M), M.delay = 0), M.allowFlatten = !k.type && !k.ease, N && !D && x.get() !== void 0) {
		let m = getFinalKeyframe(M.keyframes, k);
		if (m !== void 0) {
			frame.update(() => {
				M.onUpdate(m), M.onComplete();
			});
			return;
		}
	}
	return k.isSync ? new JSAnimation(M) : new AsyncMotionValueAnimation(M);
};
function shouldBlockAnimation({ protectedKeys: m, needsAnimating: x }, S) {
	let C = m.hasOwnProperty(S) && x[S] !== !0;
	return x[S] = !1, C;
}
function animateTarget(m, x, { delay: S = 0, transitionOverride: C, type: T } = {}) {
	let { transition: D = m.getDefaultTransition(), transitionEnd: O, ...k } = x;
	C && (D = C);
	let A = [], j = T && m.animationState && m.animationState.getState()[T];
	for (let x in k) {
		let C = m.getValue(x, m.latestValues[x] ?? null), T = k[x];
		if (T === void 0 || j && shouldBlockAnimation(j, x)) continue;
		let O = {
			delay: S,
			...getValueTransition(D || {}, x)
		}, M = C.get();
		if (M !== void 0 && !C.isAnimating && !Array.isArray(T) && T === M && !O.velocity) continue;
		let N = !1;
		if (window.MotionHandoffAnimation) {
			let S = getOptimisedAppearId(m);
			if (S) {
				let m = window.MotionHandoffAnimation(S, x, frame);
				m !== null && (O.startTime = m, N = !0);
			}
		}
		addValueToWillChange(m, x), C.start(animateMotionValue(x, C, T, m.shouldReduceMotion && positionalKeys.has(x) ? { type: !1 } : O, m, N));
		let P = C.animation;
		P && A.push(P);
	}
	return O && Promise.all(A).then(() => {
		frame.update(() => {
			O && setTarget(m, O);
		});
	}), A;
}
function calcChildStagger(m, x, S, C = 0, T = 1) {
	let D = Array.from(m).sort((m, x) => m.sortNodePosition(x)).indexOf(x), O = m.size, k = (O - 1) * C;
	return typeof S == "function" ? S(D, O) : T === 1 ? D * C : k - D * C;
}
function animateVariant(m, x, S = {}) {
	let C = resolveVariant(m, x, S.type === "exit" ? m.presenceContext?.custom : void 0), { transition: T = m.getDefaultTransition() || {} } = C || {};
	S.transitionOverride && (T = S.transitionOverride);
	let D = C ? () => Promise.all(animateTarget(m, C, S)) : () => Promise.resolve(), O = m.variantChildren && m.variantChildren.size ? (C = 0) => {
		let { delayChildren: D = 0, staggerChildren: O, staggerDirection: k } = T;
		return animateChildren(m, x, C, D, O, k, S);
	} : () => Promise.resolve(), { when: k } = T;
	if (k) {
		let [m, x] = k === "beforeChildren" ? [D, O] : [O, D];
		return m().then(() => x());
	} else return Promise.all([D(), O(S.delay)]);
}
function animateChildren(m, x, S = 0, C = 0, T = 0, D = 1, O) {
	let k = [];
	for (let A of m.variantChildren) A.notify("AnimationStart", x), k.push(animateVariant(A, x, {
		...O,
		delay: S + (typeof C == "function" ? 0 : C) + calcChildStagger(m.variantChildren, A, C, T, D)
	}).then(() => A.notify("AnimationComplete", x)));
	return Promise.all(k);
}
function animateVisualElement(m, x, S = {}) {
	m.notify("AnimationStart", x);
	let C;
	if (Array.isArray(x)) {
		let T = x.map((x) => animateVariant(m, x, S));
		C = Promise.all(T);
	} else if (typeof x == "string") C = animateVariant(m, x, S);
	else {
		let T = typeof x == "function" ? resolveVariant(m, x, S.custom) : x;
		C = Promise.all(animateTarget(m, T, S));
	}
	return C.then(() => {
		m.notify("AnimationComplete", x);
	});
}
function shallowCompare(m, x) {
	if (!Array.isArray(x)) return !1;
	let S = x.length;
	if (S !== m.length) return !1;
	for (let C = 0; C < S; C++) if (x[C] !== m[C]) return !1;
	return !0;
}
var numVariantProps = variantProps.length;
function getVariantContext(m) {
	if (!m) return;
	if (!m.isControllingVariants) {
		let x = m.parent && getVariantContext(m.parent) || {};
		return m.props.initial !== void 0 && (x.initial = m.props.initial), x;
	}
	let x = {};
	for (let S = 0; S < numVariantProps; S++) {
		let C = variantProps[S], T = m.props[C];
		(isVariantLabel(T) || T === !1) && (x[C] = T);
	}
	return x;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(m) {
	return (x) => Promise.all(x.map(({ animation: x, options: S }) => animateVisualElement(m, x, S)));
}
function createAnimationState(m) {
	let x = animateList(m), S = createState(), C = !0, T = (x) => (S, C) => {
		let T = resolveVariant(m, C, x === "exit" ? m.presenceContext?.custom : void 0);
		if (T) {
			let { transition: m, transitionEnd: x, ...C } = T;
			S = {
				...S,
				...C,
				...x
			};
		}
		return S;
	};
	function D(S) {
		x = S(m);
	}
	function O(D) {
		let { props: O } = m, k = getVariantContext(m.parent) || {}, A = [], j = /* @__PURE__ */ new Set(), M = {}, N = Infinity;
		for (let x = 0; x < numAnimationTypes; x++) {
			let P = reversePriorityOrder[x], F = S[P], I = O[P] === void 0 ? k[P] : O[P], L = isVariantLabel(I), R = P === D ? F.isActive : null;
			R === !1 && (N = x);
			let z = I === k[P] && I !== O[P] && L;
			if (z && C && m.manuallyAnimateOnMount && (z = !1), F.protectedKeys = { ...M }, !F.isActive && R === null || !I && !F.prevProp || isAnimationControls(I) || typeof I == "boolean") continue;
			let B = checkVariantsDidChange(F.prevProp, I), V = B || P === D && F.isActive && !z && L || x > N && L, H = !1, U = Array.isArray(I) ? I : [I], W = U.reduce(T(P), {});
			R === !1 && (W = {});
			let { prevResolvedValues: G = {} } = F, K = {
				...G,
				...W
			}, q = (x) => {
				V = !0, j.has(x) && (H = !0, j.delete(x)), F.needsAnimating[x] = !0;
				let S = m.getValue(x);
				S && (S.liveStyle = !1);
			};
			for (let m in K) {
				let x = W[m], S = G[m];
				if (M.hasOwnProperty(m)) continue;
				let C = !1;
				C = isKeyframesTarget(x) && isKeyframesTarget(S) ? !shallowCompare(x, S) : x !== S, C ? x == null ? j.add(m) : q(m) : x !== void 0 && j.has(m) ? q(m) : F.protectedKeys[m] = !0;
			}
			F.prevProp = I, F.prevResolvedValues = W, F.isActive && (M = {
				...M,
				...W
			}), C && m.blockInitialAnimation && (V = !1);
			let EI = z && B;
			V && (!EI || H) && A.push(...U.map((x) => {
				let S = { type: P };
				if (typeof x == "string" && C && !EI && m.manuallyAnimateOnMount && m.parent) {
					let { parent: C } = m, T = resolveVariant(C, x);
					if (C.enteringChildren && T) {
						let { delayChildren: x } = T.transition || {};
						S.delay = calcChildStagger(C.enteringChildren, m, x);
					}
				}
				return {
					animation: x,
					options: S
				};
			}));
		}
		if (j.size) {
			let x = {};
			if (typeof O.initial != "boolean") {
				let S = resolveVariant(m, Array.isArray(O.initial) ? O.initial[0] : O.initial);
				S && S.transition && (x.transition = S.transition);
			}
			j.forEach((S) => {
				let C = m.getBaseTarget(S), T = m.getValue(S);
				T && (T.liveStyle = !0), x[S] = C ?? null;
			}), A.push({ animation: x });
		}
		let P = !!A.length;
		return C && (O.initial === !1 || O.initial === O.animate) && !m.manuallyAnimateOnMount && (P = !1), C = !1, P ? x(A) : Promise.resolve();
	}
	function k(x, C) {
		if (S[x].isActive === C) return Promise.resolve();
		m.variantChildren?.forEach((m) => m.animationState?.setActive(x, C)), S[x].isActive = C;
		let T = O(x);
		for (let m in S) S[m].protectedKeys = {};
		return T;
	}
	return {
		animateChanges: O,
		setActive: k,
		setAnimateFunction: D,
		getState: () => S,
		reset: () => {
			S = createState();
		}
	};
}
function checkVariantsDidChange(m, x) {
	return typeof x == "string" ? x !== m : Array.isArray(x) ? !shallowCompare(x, m) : !1;
}
function createTypeState(m = !1) {
	return {
		isActive: m,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(!0),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
var Feature = class {
	constructor(m) {
		this.isMounted = !1, this.node = m;
	}
	update() {}
}, AnimationFeature = class extends Feature {
	constructor(m) {
		super(m), m.animationState ||= createAnimationState(m);
	}
	updateAnimationControlsSubscription() {
		let { animate: m } = this.node.getProps();
		isAnimationControls(m) && (this.unmountControls = m.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: m } = this.node.getProps(), { animate: x } = this.node.prevProps || {};
		m !== x && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, id$1 = 0, animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: class extends Feature {
		constructor() {
			super(...arguments), this.id = id$1++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: m, onExitComplete: x } = this.node.presenceContext, { isPresent: S } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || m === S) return;
			let C = this.node.animationState.setActive("exit", !m);
			x && !m && C.then(() => {
				x(this.id);
			});
		}
		mount() {
			let { register: m, onExitComplete: x } = this.node.presenceContext || {};
			x && x(this.id), m && (this.unmount = m(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(m, x, S, C = { passive: !0 }) {
	return m.addEventListener(x, S, C), () => m.removeEventListener(x, S);
}
function extractEventInfo(m) {
	return { point: {
		x: m.pageX,
		y: m.pageY
	} };
}
var addPointerInfo = (m) => (x) => isPrimaryPointer(x) && m(x, extractEventInfo(x));
function addPointerEvent(m, x, S, C) {
	return addDomEvent(m, x, addPointerInfo(S), C);
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(m) {
	return m.max - m.min;
}
function isNear(m, x, S) {
	return Math.abs(m - x) <= S;
}
function calcAxisDelta(m, x, S, C = .5) {
	m.origin = C, m.originPoint = mixNumber(x.min, x.max, m.origin), m.scale = calcLength(S) / calcLength(x), m.translate = mixNumber(S.min, S.max, m.origin) - m.originPoint, (m.scale >= SCALE_MIN && m.scale <= SCALE_MAX || isNaN(m.scale)) && (m.scale = 1), (m.translate >= TRANSLATE_MIN && m.translate <= TRANSLATE_MAX || isNaN(m.translate)) && (m.translate = 0);
}
function calcBoxDelta(m, x, S, C) {
	calcAxisDelta(m.x, x.x, S.x, C ? C.originX : void 0), calcAxisDelta(m.y, x.y, S.y, C ? C.originY : void 0);
}
function calcRelativeAxis(m, x, S) {
	m.min = S.min + x.min, m.max = m.min + calcLength(x);
}
function calcRelativeBox(m, x, S) {
	calcRelativeAxis(m.x, x.x, S.x), calcRelativeAxis(m.y, x.y, S.y);
}
function calcRelativeAxisPosition(m, x, S) {
	m.min = x.min - S.min, m.max = m.min + calcLength(x);
}
function calcRelativePosition(m, x, S) {
	calcRelativeAxisPosition(m.x, x.x, S.x), calcRelativeAxisPosition(m.y, x.y, S.y);
}
function eachAxis(m) {
	return [m("x"), m("y")];
}
var getContextWindow = ({ current: m }) => m ? m.ownerDocument.defaultView : null, distance = (m, x) => Math.abs(m - x);
function distance2D(m, x) {
	let S = distance(m.x, x.x), C = distance(m.y, x.y);
	return Math.sqrt(S ** 2 + C ** 2);
}
var PanSession = class {
	constructor(m, x, { transformPagePoint: S, contextWindow: C = window, dragSnapToOrigin: T = !1, distanceThreshold: D = 3 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let m = getPanInfo(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, S = distance2D(m.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!x && !S) return;
			let { point: C } = m, { timestamp: T } = frameData;
			this.history.push({
				...C,
				timestamp: T
			});
			let { onStart: D, onMove: O } = this.handlers;
			x || (D && D(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), O && O(this.lastMoveEvent, m);
		}, this.handlePointerMove = (m, x) => {
			this.lastMoveEvent = m, this.lastMoveEventInfo = transformPoint(x, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (m, x) => {
			this.end();
			let { onEnd: S, onSessionEnd: C, resumeAnimation: T } = this.handlers;
			if (this.dragSnapToOrigin && T && T(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let D = getPanInfo(m.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(x, this.transformPagePoint), this.history);
			this.startEvent && S && S(m, D), C && C(m, D);
		}, !isPrimaryPointer(m)) return;
		this.dragSnapToOrigin = T, this.handlers = x, this.transformPagePoint = S, this.distanceThreshold = D, this.contextWindow = C || window;
		let O = transformPoint(extractEventInfo(m), this.transformPagePoint), { point: k } = O, { timestamp: A } = frameData;
		this.history = [{
			...k,
			timestamp: A
		}];
		let { onSessionStart: j } = x;
		j && j(m, getPanInfo(O, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(m) {
		this.handlers = m;
	}
	end() {
		this.removeListeners && this.removeListeners(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(m, x) {
	return x ? { point: x(m.point) } : m;
}
function subtractPoint(m, x) {
	return {
		x: m.x - x.x,
		y: m.y - x.y
	};
}
function getPanInfo({ point: m }, x) {
	return {
		point: m,
		delta: subtractPoint(m, lastDevicePoint(x)),
		offset: subtractPoint(m, startDevicePoint(x)),
		velocity: getVelocity(x, .1)
	};
}
function startDevicePoint(m) {
	return m[0];
}
function lastDevicePoint(m) {
	return m[m.length - 1];
}
function getVelocity(m, x) {
	if (m.length < 2) return {
		x: 0,
		y: 0
	};
	let S = m.length - 1, C = null, T = lastDevicePoint(m);
	for (; S >= 0 && (C = m[S], !(T.timestamp - C.timestamp > /* @__PURE__ */ secondsToMilliseconds(x)));) S--;
	if (!C) return {
		x: 0,
		y: 0
	};
	let D = /* @__PURE__ */ millisecondsToSeconds(T.timestamp - C.timestamp);
	if (D === 0) return {
		x: 0,
		y: 0
	};
	let O = {
		x: (T.x - C.x) / D,
		y: (T.y - C.y) / D
	};
	return O.x === Infinity && (O.x = 0), O.y === Infinity && (O.y = 0), O;
}
function applyConstraints(m, { min: x, max: S }, C) {
	return x !== void 0 && m < x ? m = C ? mixNumber(x, m, C.min) : Math.max(m, x) : S !== void 0 && m > S && (m = C ? mixNumber(S, m, C.max) : Math.min(m, S)), m;
}
function calcRelativeAxisConstraints(m, x, S) {
	return {
		min: x === void 0 ? void 0 : m.min + x,
		max: S === void 0 ? void 0 : m.max + S - (m.max - m.min)
	};
}
function calcRelativeConstraints(m, { top: x, left: S, bottom: C, right: T }) {
	return {
		x: calcRelativeAxisConstraints(m.x, S, T),
		y: calcRelativeAxisConstraints(m.y, x, C)
	};
}
function calcViewportAxisConstraints(m, x) {
	let S = x.min - m.min, C = x.max - m.max;
	return x.max - x.min < m.max - m.min && ([S, C] = [C, S]), {
		min: S,
		max: C
	};
}
function calcViewportConstraints(m, x) {
	return {
		x: calcViewportAxisConstraints(m.x, x.x),
		y: calcViewportAxisConstraints(m.y, x.y)
	};
}
function calcOrigin(m, x) {
	let S = .5, C = calcLength(m), T = calcLength(x);
	return T > C ? S = /* @__PURE__ */ progress(x.min, x.max - C, m.min) : C > T && (S = /* @__PURE__ */ progress(m.min, m.max - T, x.min)), clamp(0, 1, S);
}
function rebaseAxisConstraints(m, x) {
	let S = {};
	return x.min !== void 0 && (S.min = x.min - m.min), x.max !== void 0 && (S.max = x.max - m.min), S;
}
var defaultElastic = .35;
function resolveDragElastic(m = defaultElastic) {
	return m === !1 ? m = 0 : m === !0 && (m = defaultElastic), {
		x: resolveAxisElastic(m, "left", "right"),
		y: resolveAxisElastic(m, "top", "bottom")
	};
}
function resolveAxisElastic(m, x, S) {
	return {
		min: resolvePointElastic(m, x),
		max: resolvePointElastic(m, S)
	};
}
function resolvePointElastic(m, x) {
	return typeof m == "number" ? m : m[x] || 0;
}
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(m) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = m;
	}
	start(m, { snapToCursor: x = !1, distanceThreshold: S } = {}) {
		let { presenceContext: C } = this.visualElement;
		if (C && C.isPresent === !1) return;
		let T = (m) => {
			let { dragSnapToOrigin: S } = this.getProps();
			S ? this.pauseAnimation() : this.stopAnimation(), x && this.snapToCursor(extractEventInfo(m).point);
		}, D = (m, x) => {
			let { drag: S, dragPropagation: C, onDragStart: T } = this.getProps();
			if (S && !C && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(S), !this.openDragLock)) return;
			this.latestPointerEvent = m, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((m) => {
				let x = this.getAxisMotionValue(m).get() || 0;
				if (percent.test(x)) {
					let { projection: S } = this.visualElement;
					if (S && S.layout) {
						let C = S.layout.layoutBox[m];
						C && (x = calcLength(C) * (parseFloat(x) / 100));
					}
				}
				this.originPoint[m] = x;
			}), T && frame.postRender(() => T(m, x)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: D } = this.visualElement;
			D && D.setActive("whileDrag", !0);
		}, O = (m, x) => {
			this.latestPointerEvent = m, this.latestPanInfo = x;
			let { dragPropagation: S, dragDirectionLock: C, onDirectionLock: T, onDrag: D } = this.getProps();
			if (!S && !this.openDragLock) return;
			let { offset: O } = x;
			if (C && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(O), this.currentDirection !== null && T && T(this.currentDirection);
				return;
			}
			this.updateAxis("x", x.point, O), this.updateAxis("y", x.point, O), this.visualElement.render(), D && D(m, x);
		}, k = (m, x) => {
			this.latestPointerEvent = m, this.latestPanInfo = x, this.stop(m, x), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, A = () => eachAxis((m) => this.getAnimationState(m) === "paused" && this.getAxisMotionValue(m).animation?.play()), { dragSnapToOrigin: j } = this.getProps();
		this.panSession = new PanSession(m, {
			onSessionStart: T,
			onStart: D,
			onMove: O,
			onSessionEnd: k,
			resumeAnimation: A
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: j,
			distanceThreshold: S,
			contextWindow: getContextWindow(this.visualElement)
		});
	}
	stop(m, x) {
		let S = m || this.latestPointerEvent, C = x || this.latestPanInfo, T = this.isDragging;
		if (this.cancel(), !T || !C || !S) return;
		let { velocity: D } = C;
		this.startAnimation(D);
		let { onDragEnd: O } = this.getProps();
		O && frame.postRender(() => O(S, C));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: m, animationState: x } = this.visualElement;
		m && (m.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: S } = this.getProps();
		!S && this.openDragLock && (this.openDragLock(), this.openDragLock = null), x && x.setActive("whileDrag", !1);
	}
	updateAxis(m, x, S) {
		let { drag: C } = this.getProps();
		if (!S || !shouldDrag(m, C, this.currentDirection)) return;
		let T = this.getAxisMotionValue(m), D = this.originPoint[m] + S[m];
		this.constraints && this.constraints[m] && (D = applyConstraints(D, this.constraints[m], this.elastic[m])), T.set(D);
	}
	resolveConstraints() {
		let { dragConstraints: m, dragElastic: x } = this.getProps(), S = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, C = this.constraints;
		m && isRefObject(m) ? this.constraints ||= this.resolveRefConstraints() : m && S ? this.constraints = calcRelativeConstraints(S.layoutBox, m) : this.constraints = !1, this.elastic = resolveDragElastic(x), C !== this.constraints && S && this.constraints && !this.hasMutatedConstraints && eachAxis((m) => {
			this.constraints !== !1 && this.getAxisMotionValue(m) && (this.constraints[m] = rebaseAxisConstraints(S.layoutBox[m], this.constraints[m]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: m, onMeasureDragConstraints: x } = this.getProps();
		if (!m || !isRefObject(m)) return !1;
		let S = m.current;
		invariant(S !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: C } = this.visualElement;
		if (!C || !C.layout) return !1;
		let T = measurePageBox(S, C.root, this.visualElement.getTransformPagePoint()), D = calcViewportConstraints(C.layout.layoutBox, T);
		if (x) {
			let m = x(convertBoxToBoundingBox(D));
			this.hasMutatedConstraints = !!m, m && (D = convertBoundingBoxToBox(m));
		}
		return D;
	}
	startAnimation(m) {
		let { drag: x, dragMomentum: S, dragElastic: C, dragTransition: T, dragSnapToOrigin: D, onDragTransitionEnd: O } = this.getProps(), k = this.constraints || {}, A = eachAxis((O) => {
			if (!shouldDrag(O, x, this.currentDirection)) return;
			let A = k && k[O] || {};
			D && (A = {
				min: 0,
				max: 0
			});
			let j = C ? 200 : 1e6, M = C ? 40 : 1e7, N = {
				type: "inertia",
				velocity: S ? m[O] : 0,
				bounceStiffness: j,
				bounceDamping: M,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...T,
				...A
			};
			return this.startAxisValueAnimation(O, N);
		});
		return Promise.all(A).then(O);
	}
	startAxisValueAnimation(m, x) {
		let S = this.getAxisMotionValue(m);
		return addValueToWillChange(this.visualElement, m), S.start(animateMotionValue(m, S, 0, x, this.visualElement, !1));
	}
	stopAnimation() {
		eachAxis((m) => this.getAxisMotionValue(m).stop());
	}
	pauseAnimation() {
		eachAxis((m) => this.getAxisMotionValue(m).animation?.pause());
	}
	getAnimationState(m) {
		return this.getAxisMotionValue(m).animation?.state;
	}
	getAxisMotionValue(m) {
		let x = `_drag${m.toUpperCase()}`, S = this.visualElement.getProps();
		return S[x] || this.visualElement.getValue(m, (S.initial ? S.initial[m] : void 0) || 0);
	}
	snapToCursor(m) {
		eachAxis((x) => {
			let { drag: S } = this.getProps();
			if (!shouldDrag(x, S, this.currentDirection)) return;
			let { projection: C } = this.visualElement, T = this.getAxisMotionValue(x);
			if (C && C.layout) {
				let { min: S, max: D } = C.layout.layoutBox[x];
				T.set(m[x] - mixNumber(S, D, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: m, dragConstraints: x } = this.getProps(), { projection: S } = this.visualElement;
		if (!isRefObject(x) || !S || !this.constraints) return;
		this.stopAnimation();
		let C = {
			x: 0,
			y: 0
		};
		eachAxis((m) => {
			let x = this.getAxisMotionValue(m);
			if (x && this.constraints !== !1) {
				let S = x.get();
				C[m] = calcOrigin({
					min: S,
					max: S
				}, this.constraints[m]);
			}
		});
		let { transformTemplate: T } = this.visualElement.getProps();
		this.visualElement.current.style.transform = T ? T({}, "") : "none", S.root && S.root.updateScroll(), S.updateLayout(), this.resolveConstraints(), eachAxis((x) => {
			if (!shouldDrag(x, m, null)) return;
			let S = this.getAxisMotionValue(x), { min: T, max: D } = this.constraints[x];
			S.set(mixNumber(T, D, C[x]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let m = this.visualElement.current, x = addPointerEvent(m, "pointerdown", (m) => {
			let { drag: x, dragListener: S = !0 } = this.getProps();
			x && S && this.start(m);
		}), S = () => {
			let { dragConstraints: m } = this.getProps();
			isRefObject(m) && m.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: C } = this.visualElement, T = C.addEventListener("measure", S);
		C && !C.layout && (C.root && C.root.updateScroll(), C.updateLayout()), frame.read(S);
		let D = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), O = C.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: x }) => {
			this.isDragging && x && (eachAxis((x) => {
				let S = this.getAxisMotionValue(x);
				S && (this.originPoint[x] += m[x].translate, S.set(S.get() + m[x].translate));
			}), this.visualElement.render());
		}));
		return () => {
			D(), x(), T(), O && O();
		};
	}
	getProps() {
		let m = this.visualElement.getProps(), { drag: x = !1, dragDirectionLock: S = !1, dragPropagation: C = !1, dragConstraints: T = !1, dragElastic: D = defaultElastic, dragMomentum: O = !0 } = m;
		return {
			...m,
			drag: x,
			dragDirectionLock: S,
			dragPropagation: C,
			dragConstraints: T,
			dragElastic: D,
			dragMomentum: O
		};
	}
};
function shouldDrag(m, x, S) {
	return (x === !0 || x === m) && (S === null || S === m);
}
function getCurrentDirection(m, x = 10) {
	let S = null;
	return Math.abs(m.y) > x ? S = "y" : Math.abs(m.x) > x && (S = "x"), S;
}
var DragGesture = class extends Feature {
	constructor(m) {
		super(m), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(m);
	}
	mount() {
		let { dragControls: m } = this.node.getProps();
		m && (this.removeGroupControls = m.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, asyncHandler = (m) => (x, S) => {
	m && frame.postRender(() => m(x, S));
}, PanGesture = class extends Feature {
	constructor() {
		super(...arguments), this.removePointerDownListener = noop;
	}
	onPointerDown(m) {
		this.session = new PanSession(m, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: m, onPanStart: x, onPan: S, onPanEnd: C } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(m),
			onStart: asyncHandler(x),
			onMove: S,
			onEnd: (m, x) => {
				delete this.session, C && frame.postRender(() => C(m, x));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (m) => this.onPointerDown(m));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, globalProjectionState = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
function pixelsToPercent(m, x) {
	return x.max === x.min ? 0 : m / (x.max - x.min) * 100;
}
var correctBorderRadius = { correct: (m, x) => {
	if (!x.target) return m;
	if (typeof m == "string") if (px.test(m)) m = parseFloat(m);
	else return m;
	return `${pixelsToPercent(m, x.target.x)}% ${pixelsToPercent(m, x.target.y)}%`;
} }, correctBoxShadow = { correct: (m, { treeScale: x, projectionDelta: S }) => {
	let C = m, T = complex.parse(m);
	if (T.length > 5) return C;
	let D = complex.createTransformer(m), O = typeof T[0] == "number" ? 0 : 1, k = S.x.scale * x.x, A = S.y.scale * x.y;
	T[0 + O] /= k, T[1 + O] /= A;
	let j = mixNumber(k, A, .5);
	return typeof T[2 + O] == "number" && (T[2 + O] /= j), typeof T[3 + O] == "number" && (T[3 + O] /= j), D(T);
} }, hasTakenAnySnapshot = !1, MeasureLayoutWithContext = class extends Component {
	componentDidMount() {
		let { visualElement: m, layoutGroup: x, switchLayoutGroup: S, layoutId: C } = this.props, { projection: T } = m;
		addScaleCorrector(defaultScaleCorrectors), T && (x.group && x.group.add(T), S && S.register && C && S.register(T), hasTakenAnySnapshot && T.root.didUpdate(), T.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), T.setOptions({
			...T.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(m) {
		let { layoutDependency: x, visualElement: S, drag: C, isPresent: T } = this.props, { projection: D } = S;
		return D ? (D.isPresent = T, hasTakenAnySnapshot = !0, C || m.layoutDependency !== x || x === void 0 || m.isPresent !== T ? D.willUpdate() : this.safeToRemove(), m.isPresent !== T && (T ? D.promote() : D.relegate() || frame.postRender(() => {
			let m = D.getStack();
			(!m || !m.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: m } = this.props.visualElement;
		m && (m.root.didUpdate(), microtask.postRender(() => {
			!m.currentAnimation && m.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: m, layoutGroup: x, switchLayoutGroup: S } = this.props, { projection: C } = m;
		hasTakenAnySnapshot = !0, C && (C.scheduleCheckAfterUnmount(), x && x.group && x.group.remove(C), S && S.deregister && S.deregister(C));
	}
	safeToRemove() {
		let { safeToRemove: m } = this.props;
		m && m();
	}
	render() {
		return null;
	}
};
function MeasureLayout(m) {
	let [x, S] = usePresence(), C = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...m,
		layoutGroup: C,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: x,
		safeToRemove: S
	});
}
var defaultScaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
function animateSingleValue(m, x, S) {
	let C = isMotionValue(m) ? m : motionValue(m);
	return C.start(animateMotionValue("", C, x, S)), C.animation;
}
var compareByDepth = (m, x) => m.depth - x.depth, FlatTree = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(m) {
		addUniqueItem(this.children, m), this.isDirty = !0;
	}
	remove(m) {
		removeItem(this.children, m), this.isDirty = !0;
	}
	forEach(m) {
		this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(m);
	}
};
function delay(m, x) {
	let S = time.now(), C = ({ timestamp: T }) => {
		let D = T - S;
		D >= x && (cancelFrame(C), m(D - x));
	};
	return frame.setup(C, !0), () => cancelFrame(C);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (m) => typeof m == "string" ? parseFloat(m) : m, isPx = (m) => typeof m == "number" || px.test(m);
function mixValues(m, x, S, C, T, D) {
	T ? (m.opacity = mixNumber(0, S.opacity ?? 1, easeCrossfadeIn(C)), m.opacityExit = mixNumber(x.opacity ?? 1, 0, easeCrossfadeOut(C))) : D && (m.opacity = mixNumber(x.opacity ?? 1, S.opacity ?? 1, C));
	for (let T = 0; T < numBorders; T++) {
		let D = `border${borders[T]}Radius`, O = getRadius(x, D), k = getRadius(S, D);
		O === void 0 && k === void 0 || (O ||= 0, k ||= 0, O === 0 || k === 0 || isPx(O) === isPx(k) ? (m[D] = Math.max(mixNumber(asNumber(O), asNumber(k), C), 0), (percent.test(k) || percent.test(O)) && (m[D] += "%")) : m[D] = k);
	}
	(x.rotate || S.rotate) && (m.rotate = mixNumber(x.rotate || 0, S.rotate || 0, C));
}
function getRadius(m, x) {
	return m[x] === void 0 ? m.borderRadius : m[x];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(m, x, S) {
	return (C) => C < m ? 0 : C > x ? 1 : S(/* @__PURE__ */ progress(m, x, C));
}
function copyAxisInto(m, x) {
	m.min = x.min, m.max = x.max;
}
function copyBoxInto(m, x) {
	copyAxisInto(m.x, x.x), copyAxisInto(m.y, x.y);
}
function copyAxisDeltaInto(m, x) {
	m.translate = x.translate, m.scale = x.scale, m.originPoint = x.originPoint, m.origin = x.origin;
}
function removePointDelta(m, x, S, C, T) {
	return m -= x, m = scalePoint(m, 1 / S, C), T !== void 0 && (m = scalePoint(m, 1 / T, C)), m;
}
function removeAxisDelta(m, x = 0, S = 1, C = .5, T, D = m, O = m) {
	if (percent.test(x) && (x = parseFloat(x), x = mixNumber(O.min, O.max, x / 100) - O.min), typeof x != "number") return;
	let k = mixNumber(D.min, D.max, C);
	m === D && (k -= x), m.min = removePointDelta(m.min, x, S, k, T), m.max = removePointDelta(m.max, x, S, k, T);
}
function removeAxisTransforms(m, x, [S, C, T], D, O) {
	removeAxisDelta(m, x[S], x[C], x[T], x.scale, D, O);
}
var xKeys = [
	"x",
	"scaleX",
	"originX"
], yKeys = [
	"y",
	"scaleY",
	"originY"
];
function removeBoxTransforms(m, x, S, C) {
	removeAxisTransforms(m.x, x, xKeys, S ? S.x : void 0, C ? C.x : void 0), removeAxisTransforms(m.y, x, yKeys, S ? S.y : void 0, C ? C.y : void 0);
}
function isAxisDeltaZero(m) {
	return m.translate === 0 && m.scale === 1;
}
function isDeltaZero(m) {
	return isAxisDeltaZero(m.x) && isAxisDeltaZero(m.y);
}
function axisEquals(m, x) {
	return m.min === x.min && m.max === x.max;
}
function boxEquals(m, x) {
	return axisEquals(m.x, x.x) && axisEquals(m.y, x.y);
}
function axisEqualsRounded(m, x) {
	return Math.round(m.min) === Math.round(x.min) && Math.round(m.max) === Math.round(x.max);
}
function boxEqualsRounded(m, x) {
	return axisEqualsRounded(m.x, x.x) && axisEqualsRounded(m.y, x.y);
}
function aspectRatio(m) {
	return calcLength(m.x) / calcLength(m.y);
}
function axisDeltaEquals(m, x) {
	return m.translate === x.translate && m.scale === x.scale && m.originPoint === x.originPoint;
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(m) {
		addUniqueItem(this.members, m), m.scheduleRender();
	}
	remove(m) {
		if (removeItem(this.members, m), m === this.prevLead && (this.prevLead = void 0), m === this.lead) {
			let m = this.members[this.members.length - 1];
			m && this.promote(m);
		}
	}
	relegate(m) {
		let x = this.members.findIndex((x) => m === x);
		if (x === 0) return !1;
		let S;
		for (let m = x; m >= 0; m--) {
			let x = this.members[m];
			if (x.isPresent !== !1) {
				S = x;
				break;
			}
		}
		return S ? (this.promote(S), !0) : !1;
	}
	promote(m, x) {
		let S = this.lead;
		if (m !== S && (this.prevLead = S, this.lead = m, m.show(), S)) {
			S.instance && S.scheduleRender(), m.scheduleRender(), m.resumeFrom = S, x && (m.resumeFrom.preserveOpacity = !0), S.snapshot && (m.snapshot = S.snapshot, m.snapshot.latestValues = S.animationValues || S.latestValues), m.root && m.root.isUpdating && (m.isLayoutDirty = !0);
			let { crossfade: C } = m.options;
			C === !1 && S.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((m) => {
			let { options: x, resumingFrom: S } = m;
			x.onExitComplete && x.onExitComplete(), S && S.options.onExitComplete && S.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((m) => {
			m.instance && m.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
function buildProjectionTransform(m, x, S) {
	let C = "", T = m.x.translate / x.x, D = m.y.translate / x.y, O = S?.z || 0;
	if ((T || D || O) && (C = `translate3d(${T}px, ${D}px, ${O}px) `), (x.x !== 1 || x.y !== 1) && (C += `scale(${1 / x.x}, ${1 / x.y}) `), S) {
		let { transformPerspective: m, rotate: x, rotateX: T, rotateY: D, skewX: O, skewY: k } = S;
		m && (C = `perspective(${m}px) ${C}`), x && (C += `rotate(${x}deg) `), T && (C += `rotateX(${T}deg) `), D && (C += `rotateY(${D}deg) `), O && (C += `skewX(${O}deg) `), k && (C += `skewY(${k}deg) `);
	}
	let k = m.x.scale * x.x, A = m.y.scale * x.y;
	return (k !== 1 || A !== 1) && (C += `scale(${k}, ${A})`), C || "none";
}
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, transformAxes = [
	"",
	"X",
	"Y",
	"Z"
], animationTarget = 1e3, id = 0;
function resetDistortingTransform(m, x, S, C) {
	let { latestValues: T } = x;
	T[m] && (S[m] = T[m], x.setStaticValue(m, 0), C && (C[m] = 0));
}
function cancelTreeOptimisedTransformAnimations(m) {
	if (m.hasCheckedOptimisedAppear = !0, m.root === m) return;
	let { visualElement: x } = m.options;
	if (!x) return;
	let S = getOptimisedAppearId(x);
	if (window.MotionHasOptimisedAnimation(S, "transform")) {
		let { layout: x, layoutId: C } = m.options;
		window.MotionCancelOptimisedAnimation(S, "transform", frame, !(x || C));
	}
	let { parent: C } = m;
	C && !C.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(C);
}
function createProjectionNode({ attachResizeListener: m, defaultParent: x, measureScroll: S, checkIsScrollRoot: C, resetTransform: T }) {
	return class {
		constructor(m = {}, S = x?.()) {
			this.id = id++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = m, this.root = S ? S.root || S : this, this.path = S ? [...S.path, S] : [], this.parent = S, this.depth = S ? S.depth + 1 : 0;
			for (let m = 0; m < this.path.length; m++) this.path[m].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(m, x) {
			return this.eventHandlers.has(m) || this.eventHandlers.set(m, new SubscriptionManager()), this.eventHandlers.get(m).add(x);
		}
		notifyListeners(m, ...x) {
			let S = this.eventHandlers.get(m);
			S && S.notify(...x);
		}
		hasListeners(m) {
			return this.eventHandlers.has(m);
		}
		mount(x) {
			if (this.instance) return;
			this.isSVG = isSVGElement(x) && !isSVGSVGElement(x), this.instance = x;
			let { layoutId: S, layout: C, visualElement: T } = this.options;
			if (T && !T.current && T.mount(x), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (C || S) && (this.isLayoutDirty = !0), m) {
				let S, C = 0, T = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					C = window.innerWidth;
				}), m(x, () => {
					let m = window.innerWidth;
					m !== C && (C = m, this.root.updateBlockedByResize = !0, S && S(), S = delay(T, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			S && this.root.registerSharedNode(S, this), this.options.animate !== !1 && T && (S || C) && this.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: C }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let D = this.options.transition || T.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: O, onLayoutAnimationComplete: k } = T.getProps(), A = !this.targetLayout || !boxEqualsRounded(this.targetLayout, C), j = !x && S;
				if (this.options.layoutRoot || this.resumeFrom || j || x && (A || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let x = {
						...getValueTransition(D, "layout"),
						onPlay: O,
						onComplete: k
					};
					(T.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(m, j);
				} else x || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = C;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let m = this.getStack();
			m && m.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetSkewAndRotation), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: m } = this.options;
			return m && m.getProps().transformTemplate;
		}
		willUpdate(m = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let m = 0; m < this.path.length; m++) {
				let x = this.path[m];
				x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1);
			}
			let { layoutId: x, layout: S } = this.options;
			if (x === void 0 && !S) return;
			let C = this.getTransformTemplate();
			this.prevTransformTemplateValue = C ? C(this.latestValues, "") : void 0, this.updateSnapshot(), m && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate)) : this.nodes.forEach(clearIsLayoutDirty), this.clearAllSnapshots();
			let m = time.now();
			frameData.delta = clamp(0, 1e3 / 60, m - frameData.timestamp), frameData.timestamp = m, frameData.isProcessing = !0, frameSteps.update.process(frameData), frameSteps.preRender.process(frameData), frameSteps.render.process(frameData), frameData.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, microtask.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, frame.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			frame.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
			let m = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: x } = this.options;
			x && x.notify("LayoutMeasure", this.layout.layoutBox, m ? m.layoutBox : void 0);
		}
		updateScroll(m = "measure") {
			let x = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === m && (x = !1), x && this.instance) {
				let x = C(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: m,
					isRoot: x,
					offset: S(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : x
				};
			}
		}
		resetTransform() {
			if (!T) return;
			let m = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, x = this.projectionDelta && !isDeltaZero(this.projectionDelta), S = this.getTransformTemplate(), C = S ? S(this.latestValues, "") : void 0, D = C !== this.prevTransformTemplateValue;
			m && this.instance && (x || hasTransform(this.latestValues) || D) && (T(this.instance, C), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(m = !0) {
			let x = this.measurePageBox(), S = this.removeElementScroll(x);
			return m && (S = this.removeTransform(S)), roundBox(S), {
				animationId: this.root.animationId,
				measuredBox: x,
				layoutBox: S,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: m } = this.options;
			if (!m) return createBox();
			let x = m.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: m } = this.root;
				m && (translateAxis(x.x, m.offset.x), translateAxis(x.y, m.offset.y));
			}
			return x;
		}
		removeElementScroll(m) {
			let x = createBox();
			if (copyBoxInto(x, m), this.scroll?.wasRoot) return x;
			for (let S = 0; S < this.path.length; S++) {
				let C = this.path[S], { scroll: T, options: D } = C;
				C !== this.root && T && D.layoutScroll && (T.wasRoot && copyBoxInto(x, m), translateAxis(x.x, T.offset.x), translateAxis(x.y, T.offset.y));
			}
			return x;
		}
		applyTransform(m, x = !1) {
			let S = createBox();
			copyBoxInto(S, m);
			for (let m = 0; m < this.path.length; m++) {
				let C = this.path[m];
				!x && C.options.layoutScroll && C.scroll && C !== C.root && transformBox(S, {
					x: -C.scroll.offset.x,
					y: -C.scroll.offset.y
				}), hasTransform(C.latestValues) && transformBox(S, C.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(S, this.latestValues), S;
		}
		removeTransform(m) {
			let x = createBox();
			copyBoxInto(x, m);
			for (let m = 0; m < this.path.length; m++) {
				let S = this.path[m];
				if (!S.instance || !hasTransform(S.latestValues)) continue;
				hasScale(S.latestValues) && S.updateSnapshot();
				let C = createBox();
				copyBoxInto(C, S.measurePageBox()), removeBoxTransforms(x, S.latestValues, S.snapshot ? S.snapshot.layoutBox : void 0, C);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(x, this.latestValues), x;
		}
		setTargetDelta(m) {
			this.targetDelta = m, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(m) {
			this.options = {
				...this.options,
				...m,
				crossfade: m.crossfade === void 0 ? !0 : m.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(m = !1) {
			let x = this.getLead();
			this.isProjectionDirty ||= x.isProjectionDirty, this.isTransformDirty ||= x.isTransformDirty, this.isSharedProjectionDirty ||= x.isSharedProjectionDirty;
			let S = !!this.resumingFrom || this !== x;
			if (!(m || S && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: C, layoutId: T } = this.options;
			if (!this.layout || !(C || T)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let D = this.getClosestProjectingParent();
			D && this.linkedParentVersion !== D.layoutVersion && !D.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (D && D.layout ? this.createRelativeTarget(D, this.layout.layoutBox, D.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, D && !!D.resumingFrom == !!this.resumingFrom && !D.options.layoutScroll && D.target && this.animationProgress !== 1 ? this.createRelativeTarget(D, this.target, D.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(m, x, S) {
			this.relativeParent = m, this.linkedParentVersion = m.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, x, S), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let m = this.getLead(), x = !!this.resumingFrom || this !== m, S = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (S = !1), x && (this.isSharedProjectionDirty || this.isTransformDirty) && (S = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (S = !1), S) return;
			let { layout: C, layoutId: T } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(C || T)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let D = this.treeScale.x, O = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, x), m.layout && !m.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (m.target = m.layout.layoutBox, m.targetWithTransforms = createBox());
			let { target: k } = m;
			if (!k) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, k, this.latestValues), (this.treeScale.x !== D || this.treeScale.y !== O || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", k)), statsBuffer.value && metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(m = !0) {
			if (this.options.visualElement?.scheduleRender(), m) {
				let m = this.getStack();
				m && m.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta(), this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(m, x = !1) {
			let S = this.snapshot, C = S ? S.latestValues : {}, T = { ...this.latestValues }, D = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !x;
			let O = createBox(), k = (S ? S.source : void 0) !== (this.layout ? this.layout.source : void 0), A = this.getStack(), j = !A || A.members.length <= 1, M = !!(k && !j && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let N;
			this.mixTargetDelta = (x) => {
				let S = x / 1e3;
				mixAxisDelta(D.x, m.x, S), mixAxisDelta(D.y, m.y, S), this.setTargetDelta(D), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, O, S), N && boxEquals(this.relativeTarget, N) && (this.isProjectionDirty = !1), N ||= createBox(), copyBoxInto(N, this.relativeTarget)), k && (this.animationValues = T, mixValues(T, C, this.latestValues, S, M, j)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(m) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, activeAnimations.layout++, this.motionValue ||= motionValue(0), this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...m,
					velocity: 0,
					isSync: !0,
					onUpdate: (x) => {
						this.mixTargetDelta(x), m.onUpdate && m.onUpdate(x);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--, m.onComplete && m.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let m = this.getStack();
			m && m.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let m = this.getLead(), { targetWithTransforms: x, target: S, layout: C, latestValues: T } = m;
			if (!(!x || !S || !C)) {
				if (this !== m && this.layout && C && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, C.layoutBox)) {
					S = this.target || createBox();
					let x = calcLength(this.layout.layoutBox.x);
					S.x.min = m.target.x.min, S.x.max = S.x.min + x;
					let C = calcLength(this.layout.layoutBox.y);
					S.y.min = m.target.y.min, S.y.max = S.y.min + C;
				}
				copyBoxInto(x, S), transformBox(x, T), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, x, T);
			}
		}
		registerSharedNode(m, x) {
			this.sharedNodes.has(m) || this.sharedNodes.set(m, new NodeStack()), this.sharedNodes.get(m).add(x);
			let S = x.options.initialPromotionConfig;
			x.promote({
				transition: S ? S.transition : void 0,
				preserveFollowOpacity: S && S.shouldPreserveFollowOpacity ? S.shouldPreserveFollowOpacity(x) : void 0
			});
		}
		isLead() {
			let m = this.getStack();
			return m ? m.lead === this : !0;
		}
		getLead() {
			let { layoutId: m } = this.options;
			return m && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: m } = this.options;
			return m ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: m } = this.options;
			if (m) return this.root.sharedNodes.get(m);
		}
		promote({ needsReset: m, transition: x, preserveFollowOpacity: S } = {}) {
			let C = this.getStack();
			C && C.promote(this, S), m && (this.projectionDelta = void 0, this.needsReset = !0), x && this.setOptions({ transition: x });
		}
		relegate() {
			let m = this.getStack();
			return m ? m.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: m } = this.options;
			if (!m) return;
			let x = !1, { latestValues: S } = m;
			if ((S.z || S.rotate || S.rotateX || S.rotateY || S.rotateZ || S.skewX || S.skewY) && (x = !0), !x) return;
			let C = {};
			S.z && resetDistortingTransform("z", m, C, this.animationValues);
			for (let x = 0; x < transformAxes.length; x++) resetDistortingTransform(`rotate${transformAxes[x]}`, m, C, this.animationValues), resetDistortingTransform(`skew${transformAxes[x]}`, m, C, this.animationValues);
			for (let x in m.render(), C) m.setStaticValue(x, C[x]), this.animationValues && (this.animationValues[x] = C[x]);
			m.scheduleRender();
		}
		applyProjectionStyles(m, x) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				m.visibility = "hidden";
				return;
			}
			let S = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, m.visibility = "", m.opacity = "", m.pointerEvents = resolveMotionValue(x?.pointerEvents) || "", m.transform = S ? S(this.latestValues, "") : "none";
				return;
			}
			let C = this.getLead();
			if (!this.projectionDelta || !this.layout || !C.target) {
				this.options.layoutId && (m.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, m.pointerEvents = resolveMotionValue(x?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (m.transform = S ? S({}, "") : "none", this.hasProjected = !1);
				return;
			}
			m.visibility = "";
			let T = C.animationValues || C.latestValues;
			this.applyTransformsToTarget();
			let D = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, T);
			S && (D = S(T, D)), m.transform = D;
			let { x: O, y: k } = this.projectionDelta;
			for (let x in m.transformOrigin = `${O.origin * 100}% ${k.origin * 100}% 0`, C.animationValues ? m.opacity = C === this ? T.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : T.opacityExit : m.opacity = C === this ? T.opacity === void 0 ? "" : T.opacity : T.opacityExit === void 0 ? 0 : T.opacityExit, scaleCorrectors) {
				if (T[x] === void 0) continue;
				let { correct: S, applyTo: O, isCSSVariable: k } = scaleCorrectors[x], A = D === "none" ? T[x] : S(T[x], C);
				if (O) {
					let x = O.length;
					for (let S = 0; S < x; S++) m[O[S]] = A;
				} else k ? this.options.visualElement.renderState.vars[x] = A : m[x] = A;
			}
			this.options.layoutId && (m.pointerEvents = C === this ? resolveMotionValue(x?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((m) => m.currentAnimation?.stop()), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(m) {
	m.updateLayout();
}
function notifyLayoutUpdate(m) {
	let x = m.resumeFrom?.snapshot || m.snapshot;
	if (m.isLead() && m.layout && x && m.hasListeners("didUpdate")) {
		let { layoutBox: S, measuredBox: C } = m.layout, { animationType: T } = m.options, D = x.source !== m.layout.source;
		T === "size" ? eachAxis((m) => {
			let C = D ? x.measuredBox[m] : x.layoutBox[m], T = calcLength(C);
			C.min = S[m].min, C.max = C.min + T;
		}) : shouldAnimatePositionOnly(T, x.layoutBox, S) && eachAxis((C) => {
			let T = D ? x.measuredBox[C] : x.layoutBox[C], O = calcLength(S[C]);
			T.max = T.min + O, m.relativeTarget && !m.currentAnimation && (m.isProjectionDirty = !0, m.relativeTarget[C].max = m.relativeTarget[C].min + O);
		});
		let O = createDelta();
		calcBoxDelta(O, S, x.layoutBox);
		let k = createDelta();
		D ? calcBoxDelta(k, m.applyTransform(C, !0), x.measuredBox) : calcBoxDelta(k, S, x.layoutBox);
		let A = !isDeltaZero(O), j = !1;
		if (!m.resumeFrom) {
			let C = m.getClosestProjectingParent();
			if (C && !C.resumeFrom) {
				let { snapshot: T, layout: D } = C;
				if (T && D) {
					let O = createBox();
					calcRelativePosition(O, x.layoutBox, T.layoutBox);
					let k = createBox();
					calcRelativePosition(k, S, D.layoutBox), boxEqualsRounded(O, k) || (j = !0), C.options.layoutRoot && (m.relativeTarget = k, m.relativeTargetOrigin = O, m.relativeParent = C);
				}
			}
		}
		m.notifyListeners("didUpdate", {
			layout: S,
			snapshot: x,
			delta: k,
			layoutDelta: O,
			hasLayoutChanged: A,
			hasRelativeLayoutChanged: j
		});
	} else if (m.isLead()) {
		let { onExitComplete: x } = m.options;
		x && x();
	}
	m.options.transition = void 0;
}
function propagateDirtyNodes(m) {
	statsBuffer.value && metrics.nodes++, m.parent && (m.isProjecting() || (m.isProjectionDirty = m.parent.isProjectionDirty), m.isSharedProjectionDirty ||= !!(m.isProjectionDirty || m.parent.isProjectionDirty || m.parent.isSharedProjectionDirty), m.isTransformDirty ||= m.parent.isTransformDirty);
}
function cleanDirtyNodes(m) {
	m.isProjectionDirty = m.isSharedProjectionDirty = m.isTransformDirty = !1;
}
function clearSnapshot(m) {
	m.clearSnapshot();
}
function clearMeasurements(m) {
	m.clearMeasurements();
}
function clearIsLayoutDirty(m) {
	m.isLayoutDirty = !1;
}
function resetTransformStyle(m) {
	let { visualElement: x } = m.options;
	x && x.getProps().onBeforeLayoutMeasure && x.notify("BeforeLayoutMeasure"), m.resetTransform();
}
function finishAnimation(m) {
	m.finishAnimation(), m.targetDelta = m.relativeTarget = m.target = void 0, m.isProjectionDirty = !0;
}
function resolveTargetDelta(m) {
	m.resolveTargetDelta();
}
function calcProjection(m) {
	m.calcProjection();
}
function resetSkewAndRotation(m) {
	m.resetSkewAndRotation();
}
function removeLeadSnapshots(m) {
	m.removeLeadSnapshot();
}
function mixAxisDelta(m, x, S) {
	m.translate = mixNumber(x.translate, 0, S), m.scale = mixNumber(x.scale, 1, S), m.origin = x.origin, m.originPoint = x.originPoint;
}
function mixAxis(m, x, S, C) {
	m.min = mixNumber(x.min, S.min, C), m.max = mixNumber(x.max, S.max, C);
}
function mixBox(m, x, S, C) {
	mixAxis(m.x, x.x, S.x, C), mixAxis(m.y, x.y, S.y, C);
}
function hasOpacityCrossfade(m) {
	return m.animationValues && m.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, userAgentContains = (m) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(m), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(m) {
	m.min = roundPoint(m.min), m.max = roundPoint(m.max);
}
function roundBox(m) {
	roundAxis(m.x), roundAxis(m.y);
}
function shouldAnimatePositionOnly(m, x, S) {
	return m === "position" || m === "preserve-aspect" && !isNear(aspectRatio(x), aspectRatio(S), .2);
}
function checkNodeWasScrollRoot(m) {
	return m !== m.root && m.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (m, x) => addDomEvent(m, "resize", x),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), rootProjectionNode = { current: void 0 }, HTMLProjectionNode = createProjectionNode({
	measureScroll: (m) => ({
		x: m.scrollLeft,
		y: m.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			let m = new DocumentProjectionNode({});
			m.mount(window), m.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = m;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (m, x) => {
		m.style.transform = x === void 0 ? "none" : x;
	},
	checkIsScrollRoot: (m) => window.getComputedStyle(m).position === "fixed"
}), drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
function handleHoverEvent(m, x, S) {
	let { props: C } = m;
	m.animationState && C.whileHover && m.animationState.setActive("whileHover", S === "Start");
	let T = C["onHover" + S];
	T && frame.postRender(() => T(x, extractEventInfo(x)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: m } = this.node;
		m && (this.unmount = hover(m, (m, x) => (handleHoverEvent(this.node, x, "Start"), (m) => handleHoverEvent(this.node, m, "End"))));
	}
	unmount() {}
}, FocusGesture = class extends Feature {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let m = !1;
		try {
			m = this.node.current.matches(":focus-visible");
		} catch {
			m = !0;
		}
		!m || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
function handlePressEvent(m, x, S) {
	let { props: C } = m;
	if (m.current instanceof HTMLButtonElement && m.current.disabled) return;
	m.animationState && C.whileTap && m.animationState.setActive("whileTap", S === "Start");
	let T = C["onTap" + (S === "End" ? "" : S)];
	T && frame.postRender(() => T(x, extractEventInfo(x)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: m } = this.node;
		m && (this.unmount = press(m, (m, x) => (handlePressEvent(this.node, x, "Start"), (m, { success: x }) => handlePressEvent(this.node, m, x ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (m) => {
	let x = observerCallbacks.get(m.target);
	x && x(m);
}, fireAllObserverCallbacks = (m) => {
	m.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: m, ...x }) {
	let S = m || document;
	observers.has(S) || observers.set(S, {});
	let C = observers.get(S), T = JSON.stringify(x);
	return C[T] || (C[T] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: m,
		...x
	})), C[T];
}
function observeIntersection(m, x, S) {
	let C = initIntersectionObserver(x);
	return observerCallbacks.set(m, S), C.observe(m), () => {
		observerCallbacks.delete(m), C.unobserve(m);
	};
}
var thresholdNames = {
	some: 0,
	all: 1
}, InViewFeature = class extends Feature {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: m = {} } = this.node.getProps(), { root: x, margin: S, amount: C = "some", once: T } = m, D = {
			root: x ? x.current : void 0,
			rootMargin: S,
			threshold: typeof C == "number" ? C : thresholdNames[C]
		};
		return observeIntersection(this.node.current, D, (m) => {
			let { isIntersecting: x } = m;
			if (this.isInView === x || (this.isInView = x, T && !x && this.hasEnteredView)) return;
			x && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", x);
			let { onViewportEnter: S, onViewportLeave: C } = this.node.getProps(), D = x ? S : C;
			D && D(m);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: m, prevProps: x } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(m, x)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: m = {} }, { viewport: x = {} } = {}) {
	return (S) => m[S] !== x[S];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
}, layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} }, motion = /* @__PURE__ */ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
function BackgroundMedia({ backgroundData: m, projectName: x }) {
	return !m || !m.backgroundUrl ? /* @__PURE__ */ jsx("div", { className: "absolute z-10 top-0 left-0 w-full h-full object-cover bg-gray-700" }) : m.isVideo ? /* @__PURE__ */ jsx("video", {
		src: m.backgroundUrl,
		autoPlay: !0,
		loop: !0,
		muted: !0,
		playsInline: !0,
		preload: "auto",
		className: "absolute z-10 top-0 left-0 w-full h-full object-cover"
	}) : /* @__PURE__ */ jsx("img", {
		loading: "eager",
		alt: x,
		src: m.backgroundUrl,
		style: { objectFit: "cover" },
		className: "absolute z-10 top-0 left-0 w-full h-full object-cover"
	});
}
function HomeFirstSection({ projectName: m, projectDescription: x, backgroundData: S, scrollIndicatorText: C = "Scroll down", scrollIndicatorOpacity: T = 1 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: S,
					projectName: m
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
							children: m
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-[1rem] mobile:text-[0.8rem] mobile:leading-[1.2rem] leading-[1.45rem] w-[37.5rem] mobile:w-[100%] text-[#FAF9FD] font-light whitespace-pre-wrap",
							children: x
						})]
					}), /* @__PURE__ */ jsxs(motion.div, {
						className: "flex space-x-2.5 rtl:space-x-reverse items-center py-5 lg:mt-auto",
						style: { opacity: T },
						children: [/* @__PURE__ */ jsx(MouseIcon$1, {}), /* @__PURE__ */ jsx("span", {
							className: "text-base font-light justify-self-end text-[#FAF9FD]",
							children: C
						})]
					})]
				})
			]
		})
	});
}
function MouseIcon$1() {
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
function HomeFirstSectionWrapper(m) {
	let { projectName: x = "Right Property", projectDescription: S = "Discover thoughtfully designed homes with seamless connections and serene green spaces.", backgroundUrl: C = "", mediaType: T = "image", scrollIndicatorText: D = "Scroll down", scrollIndicatorOpacity: O = 1 } = m;
	return /* @__PURE__ */ jsx(HomeFirstSection, {
		projectName: x,
		projectDescription: S,
		backgroundData: {
			isVideo: T === "video",
			backgroundUrl: C
		},
		scrollIndicatorText: D,
		scrollIndicatorOpacity: O
	});
}
function Image({ src: m, alt: x, width: S, height: C, className: T }) {
	return m ? /* @__PURE__ */ jsx("img", {
		src: m,
		alt: x,
		className: T
	}) : /* @__PURE__ */ jsx("div", {
		className: cn(T, " bg-gray-400"),
		style: {
			width: S,
			height: C
		}
	});
}
function HomePageContent({ title: m, titleColor: x = "#1a1a1a", subtitle: S, paragraphs: C, image1: T, image2: D, image3: O }) {
	let k = { color: x };
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "hidden md:block pb-15 px-24 pt-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-2 gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "col-span-1 flex flex-col space-y-5",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "font-bold text-5xl",
						style: k,
						children: m
					}),
					/* @__PURE__ */ jsx("h4", {
						className: "font-light text-xl text-primary-dark-1",
						children: S
					}),
					C.map((m, x) => /* @__PURE__ */ jsx("div", {
						className: "w-full font-light text-primary-dark-1",
						children: m.text
					}, x))
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
							src: T,
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
								src: D,
								className: "h-auto w-full",
								alt: ""
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "col-span-1",
							children: /* @__PURE__ */ jsx(Image, {
								width: 290,
								height: 180,
								src: O,
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
					style: k,
					children: m
				}), /* @__PURE__ */ jsx("h4", {
					className: "font-light text-xl text-primary-dark-1",
					children: S
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-auto w-full md:w-1/2 p-5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap space-y-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-full",
						children: /* @__PURE__ */ jsx("img", {
							src: T,
							id: "9b0dbca81a314389a1c60abea63ded99",
							className: "h-60 lg:h-100 w-full",
							alt: ""
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex space-x-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex-auto w-1/2",
							children: /* @__PURE__ */ jsx("img", {
								src: D,
								id: "620c82e2eb894d48b0149c150a1dd4d2",
								className: "h-30 w-full",
								alt: ""
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "flex-auto w-1/2",
							children: /* @__PURE__ */ jsx("img", {
								src: O,
								id: "8bf28ac444a24d39bd8200d914770e9b",
								className: "h-30 w-full",
								alt: ""
							})
						})]
					})]
				})
			})]
		})
	})] });
}
function HomePageContentWrapper(m) {
	let { title: x = "", titleColor: S = "#1a1a1a", subtitle: C = "", paragraphs: T = [], image1: D = "", image2: O = "", image3: k = "" } = m;
	return /* @__PURE__ */ jsx(HomePageContent, {
		title: x,
		titleColor: S,
		subtitle: C,
		paragraphs: T,
		image1: D,
		image2: O,
		image3: k
	});
}
function SkyscrapperHomeFirstSection({ projectName: m, heading: x, subheadingLine1: S, subheadingLine2: C, description: T, buttonLabel: D, buttonHref: O, backgroundData: k, scrollIndicatorText: A = "Scroll down", scrollIndicatorOpacity: j = 1 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "panel absolute left-0 top-0 will-change-transform w-full h-full z-30",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: k,
					projectName: m
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
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "skyscrapper-text-gradient w-[58.3125rem] mobile:w-[19.875rem] text-[10.44rem] mobile:text-[5rem] ml-[11.86rem] mobile:ml-[0] mt-[8.5rem] text-white leading-[78.125%] tracking-[-0.20881rem]",
							children: x
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-[1.56rem] mobile:mt-[5.19rem] ml-[58.56rem] mobile:ml-0",
							children: [
								/* @__PURE__ */ jsxs("h3", {
									className: "mb-[2.75rem] mobile:mb-[2.87rem] max-w-[34rem] mobile:max-w-[23.125rem] text-[3.40rem] text-[#CED7D8] leading-[3.5rem] tracking-[-0.06em]",
									children: [
										S,
										/* @__PURE__ */ jsx("br", {}),
										C
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mb-[2rem] text-[#CED7D8] max-w-[21.5625rem] font-general-sans",
									children: T
								}),
								/* @__PURE__ */ jsx(GradientBorderButton, {
									href: O,
									children: D
								})
							]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							className: "flex space-x-2.5 rtl:space-x-reverse items-center py-5 lg:mt-auto",
							style: { opacity: j },
							children: [/* @__PURE__ */ jsx(MouseIcon, {}), /* @__PURE__ */ jsx("span", {
								className: "text-base font-light justify-self-end text-projectNameDesc",
								children: A
							})]
						})
					]
				})
			]
		})
	});
}
function GradientBorderButton({ children: m, href: x }) {
	return /* @__PURE__ */ jsx("a", {
		href: x,
		children: /* @__PURE__ */ jsx("div", {
			className: "gradient-border-button",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-6 py-3 h-[49px] flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-white font-general-sans text-[0.875rem] font-medium",
					children: m
				})
			})
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
function SkyscrapperHomeFirstSectionWrapper(m) {
	let { projectName: x = "Skyscrapper", heading: S = "A New Peak.", subheadingLine1: C = "in the City", subheadingLine2: T = "of Impossibles", description: D = "Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.", buttonLabel: O = "Explore Listing", buttonHref: k = "/availability", backgroundUrl: A = "", mediaType: j = "image", scrollIndicatorText: M = "Scroll down", scrollIndicatorOpacity: N = 1 } = m;
	return /* @__PURE__ */ jsx(SkyscrapperHomeFirstSection, {
		projectName: x,
		heading: S,
		subheadingLine1: C,
		subheadingLine2: T,
		description: D,
		buttonLabel: O,
		buttonHref: k,
		backgroundData: {
			isVideo: j === "video",
			backgroundUrl: A
		},
		scrollIndicatorText: M,
		scrollIndicatorOpacity: N
	});
}
function SkyscrapperHomesSecondSection({ introText: m, image1: x, image2: S, image3: C, gridTitle: T, gridLead: D, gridItems: O }) {
	return /* @__PURE__ */ jsx("div", {
		id: "second-section",
		className: "second-section left-0 top-0 w-full min-h-[100vh] flex flex-col z-10 pt-[12rem] mobile:pt-[8.5rem]",
		children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "w-full mx-auto flex flex-col px-[5rem] mobile:px-5 max-w-[1440px]",
			children: [/* @__PURE__ */ jsx("p", {
				className: "mx-auto w-[57.48rem] mobile:w-full text-center text-[3.75rem] mobile:text-[2.25rem] leading-[108%] text-[#CED7D8]",
				children: m
			}), /* @__PURE__ */ jsxs("div", {
				className: "mb-[5rem] mobile:mb-[0rem] relative h-[46.875rem] mobile:h-[55vh]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: x,
						alt: "content-1",
						className: "absolute right-1/2 -translate-x-[10%] top-1/2 -translate-y-[80%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
					}),
					/* @__PURE__ */ jsx("img", {
						src: S,
						alt: "content-2",
						className: "absolute right-1/2 translate-x-[105%] top-1/2 -translate-y-[115%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
					}),
					/* @__PURE__ */ jsx("img", {
						src: C,
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
					children: T
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-[10.69rem] mobile:mb-[4.19rem] font-general-sans text-[1.125rem] mobile:text-[1rem]",
					children: D
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 mobile:grid-cols-1 gap-[15.20rem] mobile:gap-[3.75rem]",
					children: O.map((m, x) => /* @__PURE__ */ jsx(GridCell$1, { ...m }, x))
				})
			]
		})] })
	});
}
var GridCell$1 = ({ description: m, increase: x, className: S }) => /* @__PURE__ */ jsxs("div", {
	className: cn("", S),
	children: [
		/* @__PURE__ */ jsx("div", {
			className: "skyscrapper-text-gradient tracking-[-0.1rem] text-[5rem] mb-[1.25rem]",
			children: x
		}),
		/* @__PURE__ */ jsx("div", {
			className: "font-general-sans text-[1rem] leading-[162%] h-[7.75rem]",
			children: m
		}),
		/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-[#FABA6C4D] w-full" })
	]
});
function SkyscrapperHomesSecondSectionWrapper(m) {
	let { introText: x = "A new icon rises on Dubai’s horizon — a sculpted tower where architecture, luxury, and imagination collide.", image1: S = "", image2: C = "", image3: T = "", gridTitle: D = "In the Numbers", gridLead: O = "Our numbers reflect steady growth, strong engagement, and increasing trust from our users. Here’s a quick look at the key metrics driving our progress.", gridItems: k = [
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
	] } = m;
	return /* @__PURE__ */ jsx(SkyscrapperHomesSecondSection, {
		introText: x,
		image1: S,
		image2: C,
		image3: T,
		gridTitle: D,
		gridLead: O,
		gridItems: k
	});
}
function HeaderSection({ title: m, description: x, animationEase: S = "easeOut" }) {
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
			ease: S
		},
		className: "mt-[3rem] mb-[5rem] mobile:mb-[3.125rem] flex mobile:flex-col mobile:gap-[1.875rem] justify-between",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-[34.5rem] mobile:w-[19.6875rem] text-[3rem] mobile:text-[2.25rem] leading-[122%] tracking-[-0.01em] text-[#12161D] font-medium capitalize",
			children: m
		}), /* @__PURE__ */ jsx("div", {
			className: "w-[39.125rem] mobile:w-full text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal",
			children: x
		})]
	});
}
function HeaderSectionWrapper(m) {
	let { title: x = "", description: S = "", animationEase: C = "easeOut" } = m;
	return /* @__PURE__ */ jsx(HeaderSection, {
		title: x,
		description: S,
		animationEase: C
	});
}
var GridCell = ({ title: m, description: x, increase: S, className: C }) => /* @__PURE__ */ jsxs("div", {
	className: cn("flex flex-col bg-white", C),
	children: [/* @__PURE__ */ jsx("div", {
		className: "pt-[1.6875rem] pl-[1.9375rem] mobile:pl-0 mobile:pb-[0.875rem] text-[1.125rem] leading-[144.444%] text-[#4A4A4A] font-normal",
		children: m
	}), /* @__PURE__ */ jsxs("div", {
		className: "pl-[15.875rem] pb-[1.9375rem] mobile:pl-0 ",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-[0.75rem] text-[2.25rem] leading-[133.333%] text-[#C6A195] font-semibold",
			children: S
		}), /* @__PURE__ */ jsx("div", {
			className: "text-[1.125rem] leading-[144.444%] text-[#61656E] font-medium mobile:w-full",
			children: x
		})]
	})]
});
function GridSection({ gridData: m }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 mobile:grid-cols-1",
		children: m.map((m, x) => /* @__PURE__ */ jsx(GridCell, {
			...m,
			className: `hover:bg-[#C7A093]/10 transition-all duration-300 border-t border-[#E3E3E3] ${x === 0 ? "mobile:border-t-1" : ""} mobile:border-b-1 mobile:border-r-0 ${x < 2 ? "border-b" : ""} ${x % 2 == 0 ? "border-r" : ""}`
		}, x))
	});
}
function GridSectionWrapper(m) {
	let { gridData: x = [] } = m;
	return /* @__PURE__ */ jsx(GridSection, { gridData: x });
}
function ContentSection({ sectionTitle: m, sectionDescription: x, contentImage1: S, contentImage2: C, contentImage3: T }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-[11.5rem] mobile:mt-[6.250rem] mb-[7.5rem] flex mobile:flex-col gap-[3.125rem] mobile:gap-0 ",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 w-[34.375rem] mobile:w-full",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-[1.5rem] text-[3rem] mobile:text-[2.25rem] mobile:w-[19.6875rem] leading-[108.333%] text-[#12161D] font-medium capitalize",
						children: m
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-[3.75rem] text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal",
						children: x
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-full h-auto mobile:hidden",
						children: /* @__PURE__ */ jsx(Image, {
							width: 550,
							height: 640,
							src: S,
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
						src: C,
						alt: "content",
						className: "w-full h-auto object-contain"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full h-auto",
					children: /* @__PURE__ */ jsx(Image, {
						width: 461,
						height: 309,
						src: T,
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
						src: S,
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
							src: C,
							alt: "content",
							className: "w-full h-auto object-contain"
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "w-[33.08vw] h-auto",
						children: /* @__PURE__ */ jsx(Image, {
							width: 133,
							height: 212,
							src: T,
							alt: "content",
							className: "w-full h-auto object-contain"
						})
					})]
				})]
			})
		]
	});
}
function ContentSectionWrapper(m) {
	let { sectionTitle: x = "", sectionDescription: S = "", contentImage1: C = "", contentImage2: T = "", contentImage3: D = "" } = m;
	return /* @__PURE__ */ jsx(ContentSection, {
		sectionTitle: x,
		sectionDescription: S,
		contentImage1: C,
		contentImage2: T,
		contentImage3: D
	});
}
function VoodvaleHomeFirstSection({ projectName: m, heading: x, subheading: S, buttonLabel: C, buttonHref: T, backgroundData: D }) {
	return /* @__PURE__ */ jsx("div", {
		className: "panel absolute left-0 top-0 will-change-transform w-full h-full z-30",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover",
			children: [
				/* @__PURE__ */ jsx(BackgroundMedia, {
					backgroundData: D,
					projectName: m
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
						children: x
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-[5rem] mobile:mt-[2.5rem] ml-[45.9375rem] mobile:ml-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-[1.0625rem] mobile:mb-[3.125rem] w-[34rem] mobile:w-[23.125rem] text-[1.25rem] leading-[135%] tracking-[0.03em]",
							children: S
						}), /* @__PURE__ */ jsx("a", {
							href: T,
							style: { boxShadow: "0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)" },
							className: "bg-white rounded-[7px] text-[#484848] flex items-center justify-center w-[10.0625rem] h-[3.125rem]",
							children: C
						})]
					})]
				})
			]
		})
	});
}
function VoodvaleHomeFirstSectionWrapper(m) {
	let { projectName: x = "Voodvale", heading: S = "A New Benchmark of Refined Living.", subheading: C = "Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.", buttonLabel: T = "Explore Listing", buttonHref: D = "/availability", backgroundUrl: O = "", mediaType: k = "image", scrollIndicatorText: A = "Scroll down", scrollIndicatorOpacity: j = 1 } = m;
	return /* @__PURE__ */ jsx(VoodvaleHomeFirstSection, {
		projectName: x,
		heading: S,
		subheading: C,
		buttonLabel: T,
		buttonHref: D,
		backgroundData: {
			isVideo: k === "video",
			backgroundUrl: O
		},
		scrollIndicatorText: A,
		scrollIndicatorOpacity: j
	});
}
function VoodvaleHomeSecondSection({ title: m, description: x, gridData: S, sectionTitle: C, sectionDescription: T, contentImage1: D, contentImage2: O, contentImage3: k }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full mx-auto flex flex-col pt-[3rem] px-[5rem] mobile:px-5 max-w-[1440px]",
		children: [
			/* @__PURE__ */ jsx(HeaderSection, {
				title: m,
				description: x
			}),
			/* @__PURE__ */ jsx(GridSection, { gridData: S }),
			/* @__PURE__ */ jsx(ContentSection, {
				sectionTitle: C,
				sectionDescription: T,
				contentImage1: D,
				contentImage2: O,
				contentImage3: k
			})
		]
	});
}
function VoodvaleHomeSecondSectionWrapper(m) {
	let { title: x = "A Neighbourhood That Feels Like Home", description: S = "Woodvale Quarters brings together the charm of classic British architecture and the convenience of modern living. Surrounded by landscaped gardens and walkable streets, the development celebrates thoughtful design and quality finishes that make every home feel exceptional.", gridData: C = [
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
	], sectionTitle: T = "Find Your Dream\nHome Here", sectionDescription: D = "Experience the charm and comfort of life at Woodvale Quarters.\n\nBrowse our gallery to explore the architecture, surroundings, and amenities that make this community a beautiful place to call home.", contentImage1: O = "", contentImage2: k = "", contentImage3: A = "" } = m;
	return /* @__PURE__ */ jsx(VoodvaleHomeSecondSection, {
		title: x,
		description: S,
		gridData: C,
		sectionTitle: T,
		sectionDescription: D,
		contentImage1: O,
		contentImage2: k,
		contentImage3: A
	});
}
function VoodvaleSection(m) {
	let { title: x = "", description: S = "", sectionTitle: C = "", sectionDescription: T = "", gridData: D = [], contentImage1: O = "", contentImage2: k = "", contentImage3: A = "" } = m;
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full mx-auto flex flex-col pt-[3rem] px-[5rem] mobile:px-5 max-w-[1440px]",
		children: [
			/* @__PURE__ */ jsx(HeaderSection, {
				title: x,
				description: S
			}),
			/* @__PURE__ */ jsx(GridSection, { gridData: D }),
			/* @__PURE__ */ jsx(ContentSection, {
				sectionTitle: C,
				sectionDescription: T,
				contentImage1: O,
				contentImage2: k,
				contentImage3: A
			})
		]
	});
}
export { ColorPickerField, ContentSection, ContentSectionWrapper, GridSection, GridSectionWrapper, HeaderSection, HeaderSectionWrapper, HomeFirstSection, HomeFirstSectionWrapper, HomePageContent, HomePageContentWrapper, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SkyscrapperHomeFirstSection, SkyscrapperHomeFirstSectionWrapper, SkyscrapperHomesSecondSection, SkyscrapperHomesSecondSectionWrapper, VoodvaleHomeFirstSection, VoodvaleHomeFirstSectionWrapper, VoodvaleHomeSecondSection, VoodvaleHomeSecondSectionWrapper, VoodvaleSection, colorPickerField };
