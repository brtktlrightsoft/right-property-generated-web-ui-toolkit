import { A as VoodvalePlotThumbCardRoot, C as SkyscrapperPlotThumbCard, D as SkyscrapperPlotThumbCardRoot, E as SkyscrapperPlotThumbCardImage, F as HomePageContentWrapper, I as HomePageContent, L as HomeFirstSectionWrapper, M as PlotThumbCardImage, N as PlotThumbCardRoot, O as VoodvalePlotThumbCardBody, P as ItemSlider, R as HomeFirstSection, S as PlotThumbCard, T as SkyscrapperPlotThumbCardBody, _ as SkyscrapperHomesSecondSection, a as VoodvaleHomeFirstSectionWrapper, b as PlotsShowcaseWrapper, c as ContentSection, d as HeaderSectionWrapper, f as HeaderSection, g as SkyscrapperHomesSecondSectionWrapper, h as SkyscrapperShowcaseCard, i as VoodvaleHomeSecondSection, j as PlotThumbCardBody, k as VoodvalePlotThumbCardImage, l as GridSectionWrapper, m as SkyscrapperPlotsShowcase, n as VoodvalePlotsShowcase, o as VoodvaleHomeFirstSection, p as SkyscrapperPlotsShowcaseWrapper, r as VoodvaleHomeSecondSectionWrapper, s as ContentSectionWrapper, t as VoodvalePlotsShowcaseWrapper, u as GridSection, v as SkyscrapperHomeFirstSectionWrapper, w as VoodvalePlotThumbCard, x as PlotsShowcase, y as SkyscrapperHomeFirstSection } from "./VoodvalePlotsShowcaseWrapper-Cw0vhYSL.js";
import { a as useMainModuleResult, c as useUiToolkitConfigOptional, i as UiToolkitProvider, o as useTranslation, s as useUiToolkitConfig, t as cn } from "./utils-DYfvbnRa.js";
import { n as createPlotRepository, r as plotRepository, t as usePlotRepository } from "./usePlotRepository-RELhuOOx.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { FieldLabel } from "@measured/puck";
function Select({ ..._ }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Root, {
		"data-slot": "select",
		..._
	});
}
function SelectGroup({ ..._ }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Group, {
		"data-slot": "select-group",
		..._
	});
}
function SelectValue({ ..._ }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Value, {
		"data-slot": "select-value",
		..._
	});
}
function SelectTrigger({ className: _, size: K = "default", children: q, ...J }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
		"data-slot": "select-trigger",
		"data-size": K,
		className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", _),
		...J,
		children: [q, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className: _, children: K, position: q = "popper", align: J = "center", ...Y }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
		"data-slot": "select-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", q === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", _),
		position: q,
		align: J,
		...Y,
		children: [
			/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
			/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
				className: cn("p-1", q === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: K
			}),
			/* @__PURE__ */ jsx(SelectScrollDownButton, {})
		]
	}) });
}
function SelectLabel({ className: _, ...K }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Label, {
		"data-slot": "select-label",
		className: cn("text-muted-foreground px-2 py-1.5 text-xs", _),
		...K
	});
}
function SelectItem({ className: _, children: K, ...q }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
		"data-slot": "select-item",
		className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", _),
		...q,
		children: [/* @__PURE__ */ jsx("span", {
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) })
		}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children: K })]
	});
}
function SelectSeparator({ className: _, ...K }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
		"data-slot": "select-separator",
		className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", _),
		...K
	});
}
function SelectScrollUpButton({ className: _, ...K }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: cn("flex cursor-default items-center justify-center py-1", _),
		...K,
		children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className: _, ...K }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: cn("flex cursor-default items-center justify-center py-1", _),
		...K,
		children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
	});
}
function ColorPickerField({ name: _, label: K, value: q = "#000000", onChange: J }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FieldLabel, { label: K }), /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
			marginTop: "4px"
		},
		children: [/* @__PURE__ */ jsx("input", {
			type: "color",
			id: _,
			value: q,
			onChange: (_) => J(_.target.value),
			style: {
				width: "40px",
				height: "40px",
				border: "1px solid #e5e7eb",
				borderRadius: "4px",
				cursor: "pointer"
			}
		}), /* @__PURE__ */ jsx("input", {
			type: "text",
			value: q,
			onChange: (_) => J(_.target.value),
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
	render: ({ name: _, value: K, onChange: q, field: J }) => /* @__PURE__ */ jsx(ColorPickerField, {
		name: _,
		label: J?.label ?? "",
		value: K,
		onChange: (_) => q(_)
	})
};
function VoodvaleSection(_) {
	let { title: K = "", description: q = "", sectionTitle: J = "", sectionDescription: Y = "", gridData: X = [], contentImage1: Z = "", contentImage2: Q = "", contentImage3: $ = "" } = _;
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full mx-auto flex flex-col pt-[3rem] px-[5rem] mobile:px-5 max-w-[1440px]",
		children: [
			/* @__PURE__ */ jsx(HeaderSection, {
				title: K,
				description: q
			}),
			/* @__PURE__ */ jsx(GridSection, { gridData: X }),
			/* @__PURE__ */ jsx(ContentSection, {
				sectionTitle: J,
				sectionDescription: Y,
				contentImage1: Z,
				contentImage2: Q,
				contentImage3: $
			})
		]
	});
}
export { ColorPickerField, ContentSection, ContentSectionWrapper, GridSection, GridSectionWrapper, HeaderSection, HeaderSectionWrapper, HomeFirstSection, HomeFirstSectionWrapper, HomePageContent, HomePageContentWrapper, ItemSlider, PlotThumbCard, PlotThumbCardBody, PlotThumbCardImage, PlotThumbCardRoot, PlotsShowcase, PlotsShowcaseWrapper, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SkyscrapperHomeFirstSection, SkyscrapperHomeFirstSectionWrapper, SkyscrapperHomesSecondSection, SkyscrapperHomesSecondSectionWrapper, SkyscrapperPlotThumbCard, SkyscrapperPlotThumbCardBody, SkyscrapperPlotThumbCardImage, SkyscrapperPlotThumbCardRoot, SkyscrapperPlotsShowcase, SkyscrapperPlotsShowcaseWrapper, SkyscrapperShowcaseCard, UiToolkitProvider, VoodvaleHomeFirstSection, VoodvaleHomeFirstSectionWrapper, VoodvaleHomeSecondSection, VoodvaleHomeSecondSectionWrapper, VoodvalePlotThumbCard, VoodvalePlotThumbCardBody, VoodvalePlotThumbCardImage, VoodvalePlotThumbCardRoot, VoodvalePlotsShowcase, VoodvalePlotsShowcaseWrapper, VoodvaleSection, colorPickerField, createPlotRepository, plotRepository, useMainModuleResult, usePlotRepository, useTranslation, useUiToolkitConfig, useUiToolkitConfigOptional };
