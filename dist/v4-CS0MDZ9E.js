import { createContext, useCallback, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var UiToolkitContext = createContext(null);
function UiToolkitProvider({ children: e, config: _ }) {
	return /* @__PURE__ */ jsx(UiToolkitContext.Provider, {
		value: _,
		children: e
	});
}
function useUiToolkitConfig() {
	let e = useContext(UiToolkitContext);
	if (!e) throw Error("useUiToolkitConfig must be used within a UiToolkitProvider");
	return e;
}
function useUiToolkitConfigOptional() {
	return useContext(UiToolkitContext);
}
function useTranslation() {
	let e = useContext(UiToolkitContext);
	return {
		t: useCallback((_) => e && e.translations[_] || _, [e]),
		locale: e?.locale ?? "en"
	};
}
function useMainModuleResult() {
	let e = useContext(UiToolkitContext);
	if (!e) throw Error("useMainModuleResult must be used within a UiToolkitProvider");
	return e.mainModuleResult;
}
var PlotRepository = class {
	constructor() {
		this.config = null;
	}
	configure(e) {
		this.config = e;
	}
	getConfig() {
		if (!this.config) throw Error("PlotRepository is not configured. Either use UiToolkitProvider or call plotRepository.configure()");
		return this.config;
	}
	getAuthHeader() {
		let { accessToken: e } = this.getConfig();
		return e.startsWith("Bearer ") ? e : `Bearer ${e}`;
	}
	getBaseUrl() {
		let { apiUrl: e } = this.getConfig();
		return e.endsWith("/") ? e.slice(0, -1) : e;
	}
	async makeGET(e) {
		return (await fetch(`${this.getBaseUrl()}/${e}`, { headers: { Authorization: this.getAuthHeader() } })).json();
	}
	async makePOST(e, _) {
		return (await fetch(`${this.getBaseUrl()}/${e}`, {
			method: "POST",
			headers: {
				Authorization: this.getAuthHeader(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify(_)
		})).json();
	}
	async fetchMain() {
		return this.makeGET("web/main");
	}
	async login(e) {
		return this.makeGET("web/main");
	}
	async fetchSitePlan() {
		return this.makeGET(`web/availability/siteplan?language=${document.documentElement.lang}`);
	}
	async fetchPlotsTableData() {
		return this.makeGET("web/availability/plots");
	}
	async fetchImage(e, _) {
		return this.makeGET(`asset/presignedurl/${e}?width=${_}&isThumbnail=false`);
	}
};
const plotRepository = new PlotRepository();
function createPlotRepository(e) {
	let _ = new PlotRepository();
	return _.configure(e), _;
}
function usePlotRepository() {
	let e = useUiToolkitConfig();
	return useMemo(() => createPlotRepository(e), [e]);
}
function cn(...e) {
	return e.filter(Boolean).join(" ");
}
function formatCurrency(e, _, v, y, b, x) {
	if (!v && !x) return "";
	if (!e) return "N/A";
	let S = Math.round(e * 100) / 100, C = _ === null ? "decimal" : _ ?? "currency", w = {
		style: C,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	};
	return C === "currency" && (w.currency = y || "GBP"), S.toLocaleString(b, w);
}
const toLowerKebabCase = (e) => {
	let _ = {
		ç: "c",
		ğ: "g",
		ı: "i",
		ö: "o",
		ş: "s",
		ü: "u",
		Ç: "c",
		Ğ: "g",
		İ: "i",
		Ö: "o",
		Ş: "s",
		Ü: "u"
	};
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[çğışöüÇĞİŞÖÜ]/g, (e) => _[e] ?? e).toLowerCase().replace(/ /g, "-");
}, generatePlotUrl = async (e, _, v, y, b, x, S, C) => {
	let w = [
		_,
		v,
		y,
		b,
		x
	], T = document.documentElement.lang, E = T === "en" ? "/" : `/${T}/`;
	return w.forEach((e, _) => {
		e && (E += `${toLowerKebabCase(e)}${_ + 1 == w.length ? "" : "-"}`);
	}), `${E}${C ? "-" + C + "-bedrooms" : ""}${S ? "-" + toLowerKebabCase(S) : ""}/${e}`;
};
var getRandomValues, rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !getRandomValues)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return getRandomValues(rnds8);
}
var byteToHex = [];
for (let e = 0; e < 256; ++e) byteToHex.push((e + 256).toString(16).slice(1));
function unsafeStringify(e, _ = 0) {
	return byteToHex[e[_ + 0]] + byteToHex[e[_ + 1]] + byteToHex[e[_ + 2]] + byteToHex[e[_ + 3]] + "-" + byteToHex[e[_ + 4]] + byteToHex[e[_ + 5]] + "-" + byteToHex[e[_ + 6]] + byteToHex[e[_ + 7]] + "-" + byteToHex[e[_ + 8]] + byteToHex[e[_ + 9]] + "-" + byteToHex[e[_ + 10]] + byteToHex[e[_ + 11]] + byteToHex[e[_ + 12]] + byteToHex[e[_ + 13]] + byteToHex[e[_ + 14]] + byteToHex[e[_ + 15]];
}
var native_default = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function v4(e, _, v) {
	if (native_default.randomUUID && !_ && !e) return native_default.randomUUID();
	e ||= {};
	let y = e.random || (e.rng || rng)();
	if (y[6] = y[6] & 15 | 64, y[8] = y[8] & 63 | 128, _) {
		v ||= 0;
		for (let e = 0; e < 16; ++e) _[v + e] = y[e];
		return _;
	}
	return unsafeStringify(y);
}
var v4_default = v4;
export { usePlotRepository as a, UiToolkitProvider as c, useUiToolkitConfig as d, useUiToolkitConfigOptional as f, generatePlotUrl as i, useMainModuleResult as l, cn as n, createPlotRepository as o, formatCurrency as r, plotRepository as s, v4_default as t, useTranslation as u };
