function cn(...e) {
	return e.filter(Boolean).join(" ");
}
function formatCurrency(e, t, n, r, i, a) {
	if (!n && !a) return "";
	if (!e) return "N/A";
	let o = Math.round(e * 100) / 100, s = t === null ? "decimal" : t ?? "currency", c = {
		style: s,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	};
	return s === "currency" && (c.currency = r || "GBP"), o.toLocaleString(i, c);
}
const toLowerKebabCase = (e) => {
	let t = {
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
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[çğışöüÇĞİŞÖÜ]/g, (e) => t[e] ?? e).toLowerCase().replace(/ /g, "-");
}, generatePlotUrl = async (e, t, r, i, a, o, s, c) => {
	let l = [
		t,
		r,
		i,
		a,
		o
	], u = document.documentElement.lang, d = u === "en" ? "/" : `/${u}/`;
	return l.forEach((e, t) => {
		e && (d += `${toLowerKebabCase(e)}${t + 1 == l.length ? "" : "-"}`);
	}), `${d}${c ? "-" + c + "-bedrooms" : ""}${s ? "-" + toLowerKebabCase(s) : ""}/${e}`;
};
export { formatCurrency as n, generatePlotUrl as r, cn as t };
