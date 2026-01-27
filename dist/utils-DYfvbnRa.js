import { createContext, useCallback, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var UiToolkitContext = createContext(null);
function UiToolkitProvider({ children: e, config: i }) {
	return /* @__PURE__ */ jsx(UiToolkitContext.Provider, {
		value: i,
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
		t: useCallback((i) => e && e.translations[i] || i, [e]),
		locale: e?.locale ?? "en"
	};
}
function useMainModuleResult() {
	let e = useContext(UiToolkitContext);
	if (!e) throw Error("useMainModuleResult must be used within a UiToolkitProvider");
	return e.mainModuleResult;
}
function cn(...e) {
	return e.filter(Boolean).join(" ");
}
function formatCurrency(e, i, a, o, s, c) {
	if (!a && !c) return "";
	if (!e) return "N/A";
	let l = Math.round(e * 100) / 100, u = i === null ? "decimal" : i ?? "currency", d = {
		style: u,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	};
	return u === "currency" && (d.currency = o || "GBP"), l.toLocaleString(s, d);
}
const toLowerKebabCase = (e) => {
	let i = {
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
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[çğışöüÇĞİŞÖÜ]/g, (e) => i[e] ?? e).toLowerCase().replace(/ /g, "-");
}, generatePlotUrl = async (e, i, a, o, s, c, l, u) => {
	let d = [
		i,
		a,
		o,
		s,
		c
	], f = document.documentElement.lang, p = f === "en" ? "/" : `/${f}/`;
	return d.forEach((e, i) => {
		e && (p += `${toLowerKebabCase(e)}${i + 1 == d.length ? "" : "-"}`);
	}), `${p}${u ? "-" + u + "-bedrooms" : ""}${l ? "-" + toLowerKebabCase(l) : ""}/${e}`;
};
export { useMainModuleResult as a, useUiToolkitConfigOptional as c, UiToolkitProvider as i, formatCurrency as n, useTranslation as o, generatePlotUrl as r, useUiToolkitConfig as s, cn as t };
