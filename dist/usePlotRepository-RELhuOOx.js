import { s as useUiToolkitConfig } from "./utils-DYfvbnRa.js";
import { useMemo } from "react";
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
	async makePOST(e, i) {
		return (await fetch(`${this.getBaseUrl()}/${e}`, {
			method: "POST",
			headers: {
				Authorization: this.getAuthHeader(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify(i)
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
	async fetchImage(e, i) {
		return this.makeGET(`asset/presignedurl/${e}?width=${i}&isThumbnail=false`);
	}
};
const plotRepository = new PlotRepository();
function createPlotRepository(e) {
	let i = new PlotRepository();
	return i.configure(e), i;
}
function usePlotRepository() {
	let a = useUiToolkitConfig();
	return useMemo(() => createPlotRepository(a), [a]);
}
export { createPlotRepository as n, plotRepository as r, usePlotRepository as t };
