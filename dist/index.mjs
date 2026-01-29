import { A as VoodvalePlotThumbCardRoot, C as SkyscrapperPlotThumbCard, D as SkyscrapperPlotThumbCardRoot, E as SkyscrapperPlotThumbCardImage, F as HomePageContentWrapper, I as HomePageContent, L as HomeFirstSectionWrapper, M as PlotThumbCardImage, N as PlotThumbCardRoot, O as VoodvalePlotThumbCardBody, P as ItemSlider, R as HomeFirstSection, S as PlotThumbCard, T as SkyscrapperPlotThumbCardBody, _ as SkyscrapperHomesSecondSection, a as VoodvaleHomeFirstSectionWrapper, b as PlotsShowcaseWrapper, c as ContentSection, d as HeaderSectionWrapper, f as HeaderSection, g as SkyscrapperHomesSecondSectionWrapper, h as SkyscrapperShowcaseCard, i as VoodvaleHomeSecondSection, j as PlotThumbCardBody, k as VoodvalePlotThumbCardImage, l as GridSectionWrapper, m as SkyscrapperPlotsShowcase, n as VoodvalePlotsShowcase, o as VoodvaleHomeFirstSection, p as SkyscrapperPlotsShowcaseWrapper, r as VoodvaleHomeSecondSectionWrapper, s as ContentSectionWrapper, t as VoodvalePlotsShowcaseWrapper, u as GridSection, v as SkyscrapperHomeFirstSectionWrapper, w as VoodvalePlotThumbCard, x as PlotsShowcase, y as SkyscrapperHomeFirstSection } from "./VoodvalePlotsShowcaseWrapper-BCzzavOm.js";
import { a as useMainModuleResult, c as useUiToolkitConfigOptional, i as UiToolkitProvider, o as useTranslation, s as useUiToolkitConfig } from "./utils-DYfvbnRa.js";
import { n as createPlotRepository, r as plotRepository, t as usePlotRepository } from "./usePlotRepository-RELhuOOx.js";
import { jsx, jsxs } from "react/jsx-runtime";
function VoodvaleSection(_) {
	let { title: V = "", description: H = "", sectionTitle: U = "", sectionDescription: W = "", gridData: G = [], contentImage1: K = "", contentImage2: q = "", contentImage3: J = "" } = _;
	return /* @__PURE__ */ jsxs("div", {
		className: "voodvale-home-second-section",
		children: [
			/* @__PURE__ */ jsx(HeaderSection, {
				title: V,
				description: H
			}),
			/* @__PURE__ */ jsx(GridSection, { gridData: G }),
			/* @__PURE__ */ jsx(ContentSection, {
				sectionTitle: U,
				sectionDescription: W,
				contentImage1: K,
				contentImage2: q,
				contentImage3: J
			})
		]
	});
}
export { ContentSection, ContentSectionWrapper, GridSection, GridSectionWrapper, HeaderSection, HeaderSectionWrapper, HomeFirstSection, HomeFirstSectionWrapper, HomePageContent, HomePageContentWrapper, ItemSlider, PlotThumbCard, PlotThumbCardBody, PlotThumbCardImage, PlotThumbCardRoot, PlotsShowcase, PlotsShowcaseWrapper, SkyscrapperHomeFirstSection, SkyscrapperHomeFirstSectionWrapper, SkyscrapperHomesSecondSection, SkyscrapperHomesSecondSectionWrapper, SkyscrapperPlotThumbCard, SkyscrapperPlotThumbCardBody, SkyscrapperPlotThumbCardImage, SkyscrapperPlotThumbCardRoot, SkyscrapperPlotsShowcase, SkyscrapperPlotsShowcaseWrapper, SkyscrapperShowcaseCard, UiToolkitProvider, VoodvaleHomeFirstSection, VoodvaleHomeFirstSectionWrapper, VoodvaleHomeSecondSection, VoodvaleHomeSecondSectionWrapper, VoodvalePlotThumbCard, VoodvalePlotThumbCardBody, VoodvalePlotThumbCardImage, VoodvalePlotThumbCardRoot, VoodvalePlotsShowcase, VoodvalePlotsShowcaseWrapper, VoodvaleSection, createPlotRepository, plotRepository, useMainModuleResult, usePlotRepository, useTranslation, useUiToolkitConfig, useUiToolkitConfigOptional };
