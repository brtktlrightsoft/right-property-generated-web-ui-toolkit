import { createContext, useCallback, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var UiToolkitContext = createContext(null);
function UiToolkitProvider({ children: e, config: m }) {
	return /* @__PURE__ */ jsx(UiToolkitContext.Provider, {
		value: m,
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
		t: useCallback((m) => e && e.translations[m] || m, [e]),
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
	async makePOST(e, m) {
		return (await fetch(`${this.getBaseUrl()}/${e}`, {
			method: "POST",
			headers: {
				Authorization: this.getAuthHeader(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify(m)
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
	async fetchImage(e, m) {
		return this.makeGET(`asset/presignedurl/${e}?width=${m}&isThumbnail=false`);
	}
};
const plotRepository = new PlotRepository();
function createPlotRepository(e) {
	let m = new PlotRepository();
	return m.configure(e), m;
}
function usePlotRepository() {
	let e = useUiToolkitConfig();
	return useMemo(() => createPlotRepository(e), [e]);
}
export { useMainModuleResult as a, useUiToolkitConfigOptional as c, UiToolkitProvider as i, createPlotRepository as n, useTranslation as o, plotRepository as r, useUiToolkitConfig as s, usePlotRepository as t };
