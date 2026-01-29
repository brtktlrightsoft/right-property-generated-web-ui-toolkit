import { a as useMainModuleResult, n as formatCurrency, o as useTranslation, r as generatePlotUrl } from "./utils-DYfvbnRa.js";
import { t as usePlotRepository } from "./usePlotRepository-RELhuOOx.js";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { fabric } from "fabric";
import { usePinch } from "@use-gesture/react";
import { createPortal } from "react-dom";
var getRandomValues, rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !getRandomValues)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return getRandomValues(rnds8);
}
var byteToHex = [];
for (let e = 0; e < 256; ++e) byteToHex.push((e + 256).toString(16).slice(1));
function unsafeStringify(e, t = 0) {
	return byteToHex[e[t + 0]] + byteToHex[e[t + 1]] + byteToHex[e[t + 2]] + byteToHex[e[t + 3]] + "-" + byteToHex[e[t + 4]] + byteToHex[e[t + 5]] + "-" + byteToHex[e[t + 6]] + byteToHex[e[t + 7]] + "-" + byteToHex[e[t + 8]] + byteToHex[e[t + 9]] + "-" + byteToHex[e[t + 10]] + byteToHex[e[t + 11]] + byteToHex[e[t + 12]] + byteToHex[e[t + 13]] + byteToHex[e[t + 14]] + byteToHex[e[t + 15]];
}
var native_default = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function v4(e, t, n) {
	if (native_default.randomUUID && !t && !e) return native_default.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || rng)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return unsafeStringify(r);
}
var v4_default = v4;
const PlanItemTypeEnum = {
	None: 0,
	Room: 1,
	Plot: 2,
	PlotContainer: 3
}, PlanItemTypeEnumNames = {
	[PlanItemTypeEnum.None]: "None",
	[PlanItemTypeEnum.Room]: "Room",
	[PlanItemTypeEnum.Plot]: "Plot",
	[PlanItemTypeEnum.PlotContainer]: "PlotContainer"
};
function getPlanItemTypeEnum(e) {
	return PlanItemTypeEnum[e] ?? PlanItemTypeEnum.None;
}
const PlanObjectTypeEnum = {
	None: 0,
	Rectangle: 1,
	Circle: 2,
	Polygon: 3
}, PlanObjectTypeEnumNames = {
	[PlanObjectTypeEnum.None]: "None",
	[PlanObjectTypeEnum.Rectangle]: "Rectangle",
	[PlanObjectTypeEnum.Circle]: "Circle",
	[PlanObjectTypeEnum.Polygon]: "Polygon"
};
var PlanLabelObject = class extends fabric.Group {
	get label() {
		return this._text.text;
	}
	constructor(e, t, n, r, i, a, o, s = 16) {
		super([], {
			left: n,
			top: r,
			selectable: !1,
			hasControls: !1,
			evented: !1,
			lockRotation: !0
		}), this.PADDING_RIGHT_LEFT = 10, this.PADDING_TOP_BOTTOM = 4, this._text = new fabric.Text(e, {
			left: i / 2 + n,
			top: a / 2 + r,
			fontSize: s,
			lineHeight: 16,
			fontFamily: "Inter",
			originX: "center",
			originY: "center",
			textAlign: "center",
			hasControls: !1,
			selectable: !1,
			lockRotation: !0,
			fill: "white",
			fontWeight: "bolder",
			opacity: o ?? 1
		}), this._rectangle = new fabric.Rect({
			left: i / 2 + n,
			top: a / 2 + r,
			originX: "center",
			originY: "center",
			width: (this._text.width ?? 0) + 200,
			height: (this._text.height ?? 0) + this.PADDING_TOP_BOTTOM * 2,
			selectable: !1,
			hasControls: !1,
			evented: !1,
			hasBorders: !1,
			lockRotation: !0,
			fill: t,
			rx: 12,
			ry: 12,
			opacity: o ?? 1
		}), this.addWithUpdate(this._rectangle), this.addWithUpdate(this._text);
	}
	setLabel(e) {
		try {
			this._text.set("text", e), this._rectangle.set("width", (this._text.width ?? 0) + this.PADDING_RIGHT_LEFT * 2);
		} catch {}
	}
	addStroke() {
		this._text.set("stroke", "black"), this._text.set("strokeWidth", 15), this._text.set("paintFirst", "stroke");
	}
	setColor(e) {
		this._rectangle.set("fill", e);
	}
	hideBackground() {
		this._rectangle.set("opacity", 0);
	}
	setOpacity(e) {
		this._rectangle.set("opacity", e), this._text.set("opacity", e);
	}
}, PlanCircleObject = class e extends fabric.Circle {
	get objectId() {
		return this._objectId;
	}
	get objectType() {
		return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Circle];
	}
	get objectName() {
		return this.itemName ? this.itemName : "New Shape";
	}
	get icon() {
		return this.itemId ? "assets/icons/link.svg" : "assets/icons/link-broken.svg";
	}
	constructor(e) {
		super({
			left: e.left,
			top: e.top,
			radius: Math.min(e.width ?? 0, e.height ?? 0) / 2,
			selectable: !1,
			hasControls: !1,
			originX: "center",
			originY: "center",
			evented: !1,
			hasBorders: !0,
			strokeWidth: .2,
			stroke: "#000000",
			fill: e.fill,
			opacity: e.opacity ?? .6
		}), this._objectId = v4_default(), this.containerId = 0, this.itemId = "", this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemName = "", e.objectId && (this._objectId = e.objectId), this.containerType = e.containerType, this.containerId = e.containerId, this.itemType = e.itemType, this.itemId = e.itemId, this.label = new PlanLabelObject(this.objectType, e.fill ?? "0x000000", e.left ?? 0, e.top ?? 0, 0, 0), this.text = new fabric.Text(this.objectType, {
			fontSize: 15,
			fontFamily: "Arial",
			originX: "center",
			originY: "center",
			textAlign: "center",
			hasControls: !1,
			selectable: !1,
			evented: !1,
			left: this.left,
			top: this.top,
			width: this.width,
			height: (this.height ?? 0) / 2,
			visible: !1
		});
	}
	finishDrawing() {
		this.setControlsVisibility({
			bl: !0,
			br: !0,
			mb: !1,
			ml: !1,
			mr: !1,
			mt: !1,
			tl: !0,
			tr: !0,
			mtr: !1
		}), this.selectable = !1, this.evented = !0, this.hasControls = !0, this.centeredScaling = !0, this.hoverCursor = "pointer", this.text.visible = !0, this.label.visible = !0, this.setCoords();
	}
	redraw(e) {
		let t = this.left, n = this.top;
		this.set("radius", Math.max(Math.abs(e.x - (t ?? 0)), Math.abs(e.y - (n ?? 0)))).setCoords(), this.text.set("left", this.left).set("top", this.top).set("width", this.width);
	}
	duplicate() {
		let t = new e({
			objectId: "",
			objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Circle],
			containerType: this.containerType,
			containerId: this.containerId,
			itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
			itemId: "",
			left: (this.left ?? 0) + (this.width ?? 0),
			top: this.top,
			fill: this.fill,
			radius: this.radius,
			label: this.label
		});
		return t.finishDrawing(), t;
	}
	assign(e) {
		e ? (this.itemType = e.type, this.itemId = e.id, this.itemName = e.number ?? e.name, this.itemInformation = e.informations?.join("\r\n") ?? "", this.text.visible = !0, this.label.visible = !0, this.setControlVisible("assignControl", !1), this.setControlVisible("unassignControl", !0), this.changeColor(e.color)) : (this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemId = "", this.itemName = "", this.setControlVisible("unassignControl", !1), this.setControlVisible("assignControl", !0)), this.setText(this.itemName ?? "");
	}
	move() {
		this.setCoords(), this.text.set("left", this.left).set("top", this.top).setCoords();
	}
	resize() {
		this.text.set("left", this.left).set("top", this.top).set("width", (this.radius ?? 0) * (this.scaleX ?? 1)).setCoords();
	}
	modify() {
		this.setCoords().set("radius", (this.radius ?? 0) * (this.scaleX ?? 1)).set("scaleX", 1).set("scaleY", 1);
	}
	setText(e) {
		this.label.setLabel(e);
	}
	changeColor(e) {
		e && (this.set("fill", e), this.label.setColor(e));
	}
}, PlanRectangleObject = class e extends fabric.Rect {
	get objectId() {
		return this._objectId;
	}
	get objectType() {
		return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle];
	}
	get objectName() {
		return this.itemName ? this.itemName : "New Shape";
	}
	get icon() {
		return this.itemId ? "assets/icons/link.svg" : "assets/icons/link-broken.svg";
	}
	constructor(e) {
		super({
			objectCaching: !1,
			left: e.left,
			top: e.top,
			width: e.width ?? 1,
			height: e.height ?? 1,
			originX: "center",
			originY: "center",
			selectable: !1,
			hasControls: !1,
			evented: !1,
			hasBorders: !0,
			strokeWidth: .2,
			stroke: "#000000",
			fill: e.fill,
			opacity: e.opacity ?? .6
		}), this._objectId = v4_default(), this.containerId = 0, this.itemId = "", this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemName = "", e.objectId && (this._objectId = e.objectId), this.containerType = e.containerType, this.containerId = e.containerId, this.itemType = e.itemType, this.itemId = e.itemId, this.label = new PlanLabelObject(this.objectType, e.fill ?? "0x000000", e.left ?? 0, e.top ?? 0, 0, 0), this.text = new fabric.Text(this.objectType, {
			fontSize: 15,
			fontFamily: "Arial",
			originX: "center",
			originY: "center",
			textAlign: "center",
			hasControls: !1,
			selectable: !1,
			evented: !1,
			left: this.left,
			top: this.top,
			width: this.width * .75,
			height: this.height / 2,
			visible: !1
		}), this._pointer = new fabric.Point(e.left, e.top);
	}
	finishDrawing() {
		this.selectable = !1, this.evented = !0, this.hasControls = !0, this.lockRotation = !0, this.hoverCursor = "pointer", this.text.visible = !0;
	}
	redraw(e) {
		let t = Math.abs(e.x - this._pointer.x), n = Math.abs(e.y - this._pointer.y);
		if (!t || !n) return !1;
		let r = (e.x + this._pointer.x) / 2, i = (e.y + this._pointer.y) / 2;
		this.set("left", r).set("top", i).set("width", t).set("height", n), this.text.set("width", t).set("left", r).set("top", i);
	}
	duplicate() {
		let t = new e({
			objectId: "",
			objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle],
			containerType: this.containerType,
			containerId: this.containerId,
			itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
			itemId: "",
			left: this.left + this.width,
			top: this.top,
			width: this.width,
			height: this.height,
			fill: this.fill,
			label: this.label
		});
		return t.finishDrawing(), t;
	}
	assign(e) {
		e ? (this.itemType = e.type, this.itemId = e.id, this.itemName = e.number ?? "", this.text.visible = !0, this.itemInformation = e.informations?.join("\r\n"), this.setControlVisible("assignControl", !1), this.setControlVisible("unassignControl", !0), this.changeColor(e.color)) : (this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemId = "", this.itemName = "", this.setControlVisible("unassignControl", !1), this.setControlVisible("assignControl", !0)), this.setText(this.itemId ? this.itemName : this.objectType);
	}
	move() {
		this.setCoords(), this.text.set("left", this.left).set("top", this.top).setCoords();
	}
	resize() {
		let e = this.getScaledWidth();
		this.text.set("left", this.left).set("top", this.top).set("width", e * .75).setCoords();
	}
	modify() {
		this.set("width", this.getScaledWidth()).set("height", this.getScaledHeight()).set("scaleX", 1).set("scaleY", 1).setCoords();
	}
	setText(e) {
		this.label.setLabel(e);
	}
	changeColor(e) {
		e && this.set("fill", e);
	}
}, PlanPolygonObject = class e extends fabric.Polygon {
	get objectId() {
		return this._objectId;
	}
	get objectType() {
		return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon];
	}
	get objectName() {
		return this.itemName ? this.itemName : "New Shape";
	}
	get icon() {
		return this.itemId ? "assets/icons/link.svg" : "assets/icons/link-broken.svg";
	}
	constructor(e) {
		let t = e.points || [], n = e.left ?? 0, r = e.top ?? 0, i = e.width ?? 0, a = e.height ?? 0;
		if (t.length > 0) {
			let e = t.map((e) => e.x), o = t.map((e) => e.y), s = Math.min(...e), c = Math.max(...e), l = Math.min(...o), u = Math.max(...o);
			i = c - s, a = u - l, n = s, r = l;
			let d = (s + c) / 2, f = (l + u) / 2;
			t = t.map((e) => new fabric.Point(e.x - d, e.y - f)), n = d, r = f;
		}
		super(t, {
			left: n,
			top: r,
			width: i,
			height: a,
			opacity: e.opacity ?? .6,
			fill: e.fill,
			hoverCursor: "pointer",
			selectable: !1,
			hasControls: !1,
			evented: !1,
			originX: "center",
			originY: "center"
		}), this._objectId = v4_default(), this.containerId = 0, this.itemId = "", this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemName = "", e.objectId && (this._objectId = e.objectId), this.containerType = e.containerType, this.containerId = e.containerId, this.itemType = e.itemType, this.itemId = e.itemId;
		let o = n - i / 2, s = r - a / 2;
		this.label = new PlanLabelObject(this.objectType, e.fill ?? "0x000000", o, s, i, a), this.text = new fabric.Text(this.objectType, {
			fontSize: 15,
			fontFamily: "Arial",
			originX: "center",
			originY: "center",
			textAlign: "center",
			hasControls: !1,
			selectable: !1,
			evented: !1,
			left: n,
			top: r,
			width: i,
			height: a / 2,
			visible: !1
		});
	}
	finishDrawing() {
		this.selectable = !1, this.evented = !0, this.hasControls = !1, this.text.visible = !0;
	}
	duplicate() {
		let t = this.points.map((e) => new fabric.Point(e.x + (this.left ?? 0), e.y + (this.top ?? 0))), n = t.map((e) => e.x), r = Math.min(...n), i = Math.max(...n) - r, a = t.map((e) => new fabric.Point(e.x + i, e.y)), o = new e({
			objectId: "",
			objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon],
			containerType: this.containerType,
			containerId: this.containerId,
			itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
			itemId: "",
			points: a,
			fill: this.fill,
			opacity: this.opacity,
			label: null
		});
		return o.finishDrawing(), o;
	}
	assign(e) {
		e ? (this.itemType = e.type, this.itemId = e.id, this.itemName = e.number ? `${e.number}` : e.name, this.text.visible = !0, this.itemInformation = e.informations?.join("\r\n"), this.setControlVisible("assignControl", !1), this.setControlVisible("unassignControl", !0), this.changeColor(e.color)) : (this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemId = "", this.itemName = "", this.setControlVisible("unassignControl", !1), this.setControlVisible("assignControl", !0)), this.setText(this.itemId ? this.itemName : this.objectType);
	}
	move() {
		this.setCoords(), this.text.set("left", this.left).set("top", this.top).setCoords();
		let e = this.left - this.width / 2, t = this.top - this.height / 2;
		this.label.set("left", e), this.label.set("top", t), this.label.setCoords();
	}
	setText(e) {
		this.label.setLabel(e);
	}
	changeColor(e) {
		e && this.set("fill", e);
	}
	resize() {
		let e = this.getScaledWidth(), t = this.getScaledHeight();
		this.text.set("left", this.left).set("top", this.top).set("width", e).setCoords();
		let n = this.left - e / 2, r = this.top - t / 2;
		this.label.set("left", n), this.label.set("top", r), this.label.setCoords();
	}
	modify() {
		let e = this.getScaledWidth(), t = this.getScaledHeight(), n = e - this.width, r = t - this.height;
		this.calcPoints(this.points, n, r, e / this.width, t / this.height), this.setCoords().set("width", e).set("height", t).set("scaleX", 1).set("scaleY", 1);
		let i = this.left - e / 2, a = this.top - t / 2;
		this.label.set("left", i), this.label.set("top", a), this.label.setCoords();
	}
	toPlanObject(e) {
		let t = this.points.map((e) => new fabric.Point(e.x + (this.left ?? 0), e.y + (this.top ?? 0))), n = t.map((e) => e.x), r = t.map((e) => e.y), i = Math.min(...n), a = Math.max(...n), o = Math.min(...r), s = Math.max(...r), c = a - i, l = s - o, u = i, d = o;
		return {
			objectId: this.objectId,
			objectType: this.objectType,
			containerId: this.containerId,
			containerType: this.containerType,
			itemId: this.itemId,
			itemType: this.itemType,
			left: u / e.x,
			top: d / e.y,
			width: c / e.x,
			height: l / e.y,
			radius: 0,
			points: t.map((t, n) => ({
				id: v4_default(),
				order: n,
				x: t.x / e.x,
				y: t.y / e.y
			})),
			fill: this.fill,
			opacity: this.opacity,
			svg: this.toSVG()
		};
	}
	calcPoints(e, t, n, r, i) {
		let a = Math.min(...e.map((e) => e.x)), o = e.map((e, t) => e.x == a ? t : -1).filter((e) => e != -1), s = Math.max(...o), c = [];
		for (let t = s; t < s + e.length; t++) {
			let n = t % e.length, r = e[n], i = e[(n + 1) % e.length];
			c.push(i.x - r.x);
		}
		for (let n = s; n < s + e.length; n++) {
			let i = n % e.length, a = e[i], o = e[(i + e.length - 1) % e.length];
			i == s ? a.x -= t / 2 : a.x = o.x + c[n - s - 1] * r;
		}
		let l = Math.min(...e.map((e) => e.y)), u = e.map((e, t) => e.y == l ? t : -1).filter((e) => e != -1), d = Math.min(...u), f = [];
		for (let t = d; t < d + e.length; t++) {
			let n = t % e.length, r = e[n], i = e[(n + 1) % e.length];
			f.push(i.y - r.y);
		}
		for (let t = d; t < d + e.length; t++) {
			let r = t % e.length, a = e[r], o = e[(r + e.length - 1) % e.length];
			r == d ? a.y -= n / 2 : a.y = o.y + f[t - d - 1] * i;
		}
	}
}, PlanLineObject = class extends fabric.Line {
	get id() {
		return this._id;
	}
	constructor(e, t, n) {
		super([
			t.x,
			t.y,
			n.x,
			n.y
		], {
			strokeWidth: .2,
			stroke: "#000000",
			selectable: !1,
			hasControls: !1,
			evented: !1,
			hasBorders: !1
		}), this._id = v4_default(), this.canvas = e, this.selectable = !1, this.canvas.add(this);
	}
	redraw(e) {
		this.set("x2", e.x), this.set("y2", e.y);
	}
}, PlanObjectController = class {
	get planObjects() {
		return this._planObjects;
	}
	get containerObjects() {
		return this._containerObjects;
	}
	get selectedObject() {
		return this._selectedObjects.length == 1 ? this._selectedObjects[0] : null;
	}
	get isRectangle() {
		return this.selectedObject ? this.selectedObject instanceof PlanRectangleObject : !1;
	}
	get isCircle() {
		return this.selectedObject ? this.selectedObject instanceof PlanCircleObject : !1;
	}
	get isPolygon() {
		return this.selectedObject ? this.selectedObject instanceof PlanPolygonObject : !1;
	}
	get isLine() {
		return this.selectedObject ? this.selectedObject instanceof PlanLineObject : !1;
	}
	get selectedItemType() {
		return this.isRectangle ? "Rectangle" : this.isCircle ? "Circle" : this.isPolygon ? "Polygon" : this.isLine ? "Vector" : "";
	}
	constructor(e) {
		this._planObjects = [], this._containerObjects = [], this._selectedObjects = [], this._planObjects = e;
	}
	getPlanObjectByItemId(e) {
		return this.planObjects.find((t) => t.itemId == e);
	}
	isObjectSelected(e) {
		return this.selectedObject ? this.selectedObject.objectId === e : !1;
	}
	onKeydownDelete() {
		this.deleteObjects();
	}
	deleteObjects() {
		!this._selectedObjects || !this._selectedObjects.length || this._selectedObjects.forEach((e) => {
			let t = this.containerObjects.findIndex((t) => t.objectId === e.objectId);
			this.containerObjects.splice(t, 1);
		});
	}
	initObject(e, t) {
		let n = Math.min(e.width ?? 0, e.height ?? 0) / 2, r = {
			objectId: e.objectId,
			objectType: e.objectType,
			containerId: e.containerId,
			containerType: e.containerType,
			itemId: e.itemId,
			itemType: e.itemType,
			left: t.x * e.left,
			top: t.y * e.top,
			width: e.width * t.x,
			height: e.height * t.y,
			radius: (e.radius ?? n) * t.x,
			points: e.points ? e.points.map((e) => new fabric.Point(t.x * e.x, t.y * e.y)) : [],
			fill: e.fill,
			opacity: e.opacity,
			label: null
		};
		if (e.objectType === PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle]) {
			let e = new PlanRectangleObject(r);
			return e.finishDrawing(), this.containerObjects.push(e), e;
		} else if (e.objectType === PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon]) {
			let e = new PlanPolygonObject(r);
			return e.finishDrawing(), this.containerObjects.push(e), e;
		} else {
			let e = new PlanCircleObject(r);
			return e.finishDrawing(), this.containerObjects.push(e), e;
		}
	}
	initContainerObjects(e) {
		this._containerObjects = this.planObjects.map((t) => this.initObject(t, e)).filter((e) => e != null);
	}
	startDrawingRectangle(e) {
		return new PlanRectangleObject(e);
	}
	startDrawingCircle(e) {
		return new PlanCircleObject(e);
	}
	finishDrawing(e) {
		this.containerObjects.push(e);
	}
}, PlanItemController = class {
	get items() {
		return this._items;
	}
	constructor(e) {
		this._items = [], this._items = e;
	}
	getItem(e) {
		return this.items.find((t) => t.id == e);
	}
};
function usePlotStatus(t) {
	let { plotStatusList: n } = useMainModuleResult();
	if (Array.isArray(n)) return n.find((e) => e.name.toLowerCase() == t?.toLowerCase());
}
const useProjectArea = () => {
	let { measurementSystem: t } = useMainModuleResult(), n = t === "metric" ? "m²" : "sqft";
	return {
		unit: n,
		prepareArea: (e) => e == null || e == 0 ? "N/A" : `${e} ${n ?? ""}`
	};
};
function BedroomIcon({ width: e = "1.5625rem", className: t }) {
	return /* @__PURE__ */ jsxs("svg", {
		style: { width: e },
		className: t,
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M22.8734 16.0297V9.55908C22.8734 8.45451 21.978 7.55908 20.8734 7.55908H11.2379C10.5692 7.55908 9.94472 7.89328 9.57379 8.44968L8.75576 9.67673L8.68311 9.5501",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M1.69678 3.32397V16.0299M1.69678 23.0887V16.0299M1.69678 19.5593H22.8732M22.8732 23.0887V14.9122C22.8732 14.3599 22.4255 13.9122 21.8732 13.9122H5.88549C4.55941 13.9122 3.28764 14.439 2.34996 15.3767L1.69678 16.0299",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "5.93224",
				cy: "10.3827",
				r: "2.52941",
				stroke: "currentColor",
				strokeWidth: "2"
			})
		]
	});
}
function RulerIcon({ className: e, width: t }) {
	return /* @__PURE__ */ jsx("svg", {
		style: { width: t },
		className: e,
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("g", {
			clipPath: "url(#clip0_679_1033)",
			children: /* @__PURE__ */ jsx("path", {
				d: "M9.66666 3.66667L10.6667 4.66667M7.66666 5.66667L8.66666 6.66667M5.66666 7.66667L6.66666 8.66667M3.66666 9.66667L4.66666 10.6667M1.71043 11.7105L4.28951 14.2896C4.42152 14.4216 4.48752 14.4876 4.56363 14.5123C4.63058 14.5341 4.70269 14.5341 4.76964 14.5123C4.84575 14.4876 4.91175 14.4216 5.04376 14.2896L14.2895 5.04382C14.4215 4.91182 14.4875 4.84581 14.5123 4.7697C14.534 4.70276 14.534 4.63064 14.5123 4.56369C14.4875 4.48758 14.4215 4.42158 14.2895 4.28957L11.7104 1.71049C11.5784 1.57848 11.5124 1.51248 11.4363 1.48775C11.3694 1.466 11.2972 1.466 11.2303 1.48775C11.1542 1.51248 11.0882 1.57848 10.9562 1.71049L1.71043 10.9562C1.57842 11.0882 1.51242 11.1542 1.48769 11.2304C1.46594 11.2973 1.46594 11.3694 1.48769 11.4364C1.51242 11.5125 1.57842 11.5785 1.71043 11.7105Z",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
function BathroomIcon({ width: e = "1.5625rem" }) {
	return /* @__PURE__ */ jsxs("svg", {
		style: { width: e },
		height: "25",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M9.88428 11.95V11.35M12.9897 11.1024V10.75",
				stroke: "#50555F",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M22.166 16.0437H3.10596L3.10615 16.9564C3.10671 19.5713 5.22663 21.6908 7.84149 21.6908H17.6269C20.1338 21.6908 22.166 19.6585 22.166 17.1517V16.0437Z",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M20.754 23.8085L18.6364 21.6908H7.34226L5.22461 23.8085M5.22461 16.0438V4.1594M5.22461 4.04378V4.1594M5.22461 4.1594V4.1594C5.22461 2.80095 6.32585 1.69971 7.6843 1.69971H10.084C10.6363 1.69971 11.084 2.14742 11.084 2.69971V3.88906M11.084 3.88906C10.1616 4.08596 9.22808 5.39148 8.04814 7.57307H14.4011C13.7302 6.14195 13.1391 5.14968 12.5847 4.55384C12.0639 3.994 11.5755 3.78414 11.084 3.88906Z",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round"
			})
		]
	});
}
var use_isomorphic_layout_effect_default = typeof window < "u" ? useLayoutEffect : useEffect;
function useEventListener(e, t, n, r) {
	let i = useRef(t);
	use_isomorphic_layout_effect_default(() => {
		i.current = t;
	}, [t]), useEffect(() => {
		let t = n?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let a = (e) => i.current(e);
		return t.addEventListener(e, a, r), () => {
			t.removeEventListener(e, a, r);
		};
	}, [
		e,
		n,
		r
	]);
}
var use_event_listener_default = useEventListener;
function useOnClickOutside(e, t, n = "mousedown", r = []) {
	use_event_listener_default(n, (n) => {
		let i = e?.current;
		if (!(!i || i.contains(n.target))) {
			for (let e of r) {
				let t = document.querySelector(e);
				if (t && t.contains(n.target)) return;
			}
			n.target.tagName !== "HTML" && t(n);
		}
	});
}
var use_on_click_outside_default = useOnClickOutside;
function PlanViewPopup({ canvas: i, obj: a, item: o, onClickOutside: c }) {
	let { t: p } = useTranslation(), m = useRef(null), [h, g] = useState([1, 1]), { showPrice: _, currency: v, clientName: y, projectName: b, country: x, city: S, district: C } = useMainModuleResult(), w = usePlotStatus(o.plotInfo?.statusName ?? "available"), T = useRef(!1), { prepareArea: E } = useProjectArea();
	use_on_click_outside_default(m, (e) => {
		e.preventDefault(), c();
	}, "mousedown"), use_on_click_outside_default(m, (e) => {
		e.preventDefault(), T.current = !0;
	}, "touchmove"), use_on_click_outside_default(m, (e) => {
		e.preventDefault(), T.current ? T.current = !1 : c();
	}, "touchend");
	let D = (e, t) => {
		let n = e.getZoom(), r = e.getWidth(), i = e.getHeight(), o = a.label.getBoundingRect(), s = o.top + o.height / 2, c = o.left + o.width / 2;
		return {
			canvasTop: 0,
			canvasLeft: 0,
			canvasRight: r,
			canvasBottom: i,
			objectTop: s - 10,
			objectLeft: c - 10,
			popupWidth: m.current?.offsetWidth ?? 0,
			popupHeight: m.current?.offsetHeight ?? 0,
			zoom: n
		};
	}, O = () => {
		if (m.current == null) return;
		let e = D(i, a), t = [1, 1], n = e?.objectLeft ?? 0, r = (e?.objectTop ?? 0) - e.popupHeight;
		n + e.popupWidth > e.canvasRight && (n = e?.objectLeft - e.popupWidth, t[0] = -1), r - e.popupHeight < e.canvasTop && (r = e?.objectTop, t[1] = -1);
		let [o, s] = oe(t[0], t[1]);
		g(t), m.current.style.left = n + o + "px", m.current.style.top = r + s + "px";
	}, oe = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0], se = (e, t) => e > 0 && t > 0 ? "triangle-bottom-left" : e > 0 && t < 0 ? "triangle-top-left" : e < 0 && t > 0 ? "triangle-bottom-right" : "triangle-top-right";
	useEffect(() => {
		O(), i.on("before:render", () => {
			O();
		});
	}, []);
	let k = w?.name.toLowerCase() == "sold" ? p("web.availability.status.Sold") : formatCurrency(o.plotInfo?.price ?? 0, null, _, v, document.documentElement.lang);
	return /* @__PURE__ */ jsxs("div", {
		ref: m,
		onClick: async () => {
			let e = PlanItemTypeEnum[a?.itemType ?? ""], t = "/availability/site-plan", n = document.documentElement.lang;
			if (e === PlanItemTypeEnum.PlotContainer) t = n === "en" ? "" : `/${n}/availability/site-plan/plot-container/${a?.itemId}`, window.location.href = t;
			else if (e === PlanItemTypeEnum.Plot) {
				let e = await generatePlotUrl(a.itemId.toString(), y, b, x, S, C, o.plotInfo?.name, o.plotInfo?.bedrooms);
				window.location.href = e;
			}
		},
		className: "plan-view-popup",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "plan-view-popup-header",
				children: [/* @__PURE__ */ jsx("div", { children: o.plotInfo?.typeName }), /* @__PURE__ */ jsxs("div", {
					className: "plan-view-popup-status",
					children: [/* @__PURE__ */ jsx("span", {
						style: { color: w?.color },
						children: p(`${w?.name}`)
					}), /* @__PURE__ */ jsx("svg", {
						width: "16",
						height: "16",
						className: "rtl:rotate-180",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							d: "M11.3546 8.00004C11.3546 7.75416 11.2606 7.54444 11.0726 7.35642L5.43193 1.83868C5.27283 1.67958 5.07758 1.60004 4.84616 1.60004C4.37611 1.60004 4.00006 1.96162 4.00006 2.43168C4.00006 2.66309 4.09407 2.8728 4.25317 3.03913L9.34424 8.00004L4.25317 12.9609C4.1013 13.12 4.00006 13.3298 4.00006 13.5612C4.00006 14.0385 4.37611 14.4 4.84616 14.4C5.07758 14.4 5.27283 14.3205 5.43193 14.1614L11.0726 8.64365C11.2679 8.45563 11.3546 8.24591 11.3546 8.00004Z",
							fill: w?.color
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "plan-view-popup-name",
				children: o.plotInfo?.name
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "plan-view-popup-details",
				children: [
					_ && /* @__PURE__ */ jsxs("div", {
						style: { color: w?.color },
						className: "plan-view-popup-detail-item",
						children: [/* @__PURE__ */ jsxs("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 16 16",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("g", {
								clipPath: "url(#clip0_679_1027)",
								children: /* @__PURE__ */ jsx("path", {
									d: "M9.01964 5.56788C8.63803 5.83995 8.17103 5.99998 7.66665 5.99998C6.37798 5.99998 5.33331 4.95531 5.33331 3.66665C5.33331 2.37798 6.37798 1.33331 7.66665 1.33331C8.50197 1.33331 9.23478 1.77226 9.64698 2.43207M3.99998 13.3914H5.74017C5.96706 13.3914 6.19257 13.4184 6.41252 13.4724L8.25124 13.9192C8.65021 14.0164 9.06583 14.0259 9.46896 13.9476L11.502 13.5521C12.039 13.4474 12.533 13.1903 12.9202 12.8136L14.3586 11.4145C14.7693 11.0156 14.7693 10.3683 14.3586 9.96869C13.9887 9.60894 13.4031 9.56844 12.9847 9.87352L11.3084 11.0965C11.0683 11.272 10.7762 11.3665 10.4757 11.3665H8.85698L9.88736 11.3665C10.4681 11.3665 10.9386 10.9089 10.9386 10.3439V10.1394C10.9386 9.67031 10.6104 9.26129 10.1427 9.14789L8.55238 8.76114C8.29357 8.69837 8.02851 8.66665 7.76207 8.66665C7.11887 8.66665 5.95458 9.19919 5.95458 9.19919L3.99998 10.0166M13.3333 4.33331C13.3333 5.62198 12.2886 6.66665 11 6.66665C9.71132 6.66665 8.66665 5.62198 8.66665 4.33331C8.66665 3.04465 9.71132 1.99998 11 1.99998C12.2886 1.99998 13.3333 3.04465 13.3333 4.33331ZM1.33331 9.73331L1.33331 13.6C1.33331 13.9733 1.33331 14.16 1.40598 14.3026C1.46989 14.4281 1.57188 14.5301 1.69732 14.594C1.83993 14.6666 2.02661 14.6666 2.39998 14.6666H2.93331C3.30668 14.6666 3.49337 14.6666 3.63597 14.594C3.76141 14.5301 3.8634 14.4281 3.92732 14.3026C3.99998 14.16 3.99998 13.9733 3.99998 13.6V9.73331C3.99998 9.35995 3.99998 9.17326 3.92732 9.03065C3.8634 8.90521 3.76141 8.80323 3.63597 8.73931C3.49337 8.66665 3.30668 8.66665 2.93331 8.66665L2.39998 8.66665C2.02661 8.66665 1.83993 8.66665 1.69732 8.73931C1.57188 8.80322 1.46989 8.90521 1.40598 9.03065C1.33331 9.17326 1.33331 9.35994 1.33331 9.73331Z",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
								id: "clip0_679_1027",
								children: /* @__PURE__ */ jsx("rect", {
									width: "16",
									height: "16",
									fill: "white"
								})
							}) })]
						}), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: k
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: w?.color },
						className: "plan-view-popup-detail-item",
						children: [/* @__PURE__ */ jsx(BedroomIcon, {
							className: "stroke-footerTextColor",
							width: "1rem"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: o.plotInfo?.bedrooms + ` ${p("web.unit_detail.bedroom")}`
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: w?.color },
						className: "plan-view-popup-detail-item",
						children: [/* @__PURE__ */ jsx(RulerIcon, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: E(o.plotInfo?.metricArea ?? 0)
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: w?.color },
						className: "plan-view-popup-detail-item",
						children: [/* @__PURE__ */ jsx(BathroomIcon, {
							className: "stroke-footerTextColor",
							width: "1rem"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: o.plotInfo?.bathrooms + ` ${p("web.unit_detail.bathrooms").toLowerCase()}`
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute w-0 h-0 ${se(h[0], h[1])} ` })
		]
	});
}
function ContainerPlanPopup({ canvas: e, obj: t, item: n, onClickOutside: r, onNavigate: i, formatCurrency: a = (e) => `£${e.toLocaleString()}`, t: o = (e) => e, showPrice: c = !0 }) {
	let p = useRef(null), [m, h] = useState([1, 1]), g = useRef(!1), _ = (e) => {
		p.current && !p.current.contains(e.target) && (e.type === "mousedown" ? (e.preventDefault(), r()) : e.type === "touchmove" ? (e.preventDefault(), g.current = !0) : e.type === "touchend" && (e.preventDefault(), g.current ? g.current = !1 : r()));
	};
	useEffect(() => (document.addEventListener("mousedown", _), document.addEventListener("touchmove", _), document.addEventListener("touchend", _), () => {
		document.removeEventListener("mousedown", _), document.removeEventListener("touchmove", _), document.removeEventListener("touchend", _);
	}), []);
	let v = (e, n) => {
		let r = e.getZoom(), i = e.getWidth(), a = e.getHeight(), o = t.label.getBoundingRect();
		return {
			canvasTop: 0,
			canvasLeft: 0,
			canvasRight: i,
			canvasBottom: a,
			objectTop: o.top + o.height / 2,
			objectLeft: o.left + o.width / 2,
			popupWidth: p.current?.offsetWidth ?? 0,
			popupHeight: p.current?.offsetHeight ?? 0,
			zoom: r
		};
	}, y = () => {
		if (p.current == null) return;
		let n = v(e, t), r = [1, 1], i = n?.objectLeft ?? 0, a = (n?.objectTop ?? 0) - n.popupHeight;
		i + n.popupWidth > n.canvasRight && (i = n?.objectLeft - n.popupWidth, r[0] = -1), a - n.popupHeight < n.canvasTop && (a = n?.objectTop, r[1] = -1);
		let [o, s] = b(r[0], r[1]);
		h(r), p.current.style.left = i + o + "px", p.current.style.top = a + s + "px";
	}, b = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0, 0];
	return useEffect(() => {
		y(), e.on("before:render", () => {
			y();
		});
	}, []), /* @__PURE__ */ jsxs("div", {
		ref: p,
		onClick: async () => {
			let e = "/availability/site-plan";
			e = `/availability/site-plan/container/${t?.itemId}`, i && i(e);
		},
		className: "plan-view-popup",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "plan-view-popup-header",
				children: [/* @__PURE__ */ jsx("div", { children: n.plotContainerInfo?.name }), /* @__PURE__ */ jsx("div", {
					className: "plan-view-popup-status",
					children: /* @__PURE__ */ jsx("svg", {
						width: "16",
						height: "16",
						className: "rtl:rotate-180",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							d: "M11.3546 8.00004C11.3546 7.75416 11.2606 7.54444 11.0726 7.35642L5.43193 1.83868C5.27283 1.67958 5.07758 1.60004 4.84616 1.60004C4.37611 1.60004 4.00006 1.96162 4.00006 2.43168C4.00006 2.66309 4.09407 2.8728 4.25317 3.03913L9.34424 8.00004L4.25317 12.9609C4.1013 13.12 4.00006 13.3298 4.00006 13.5612C4.00006 14.0385 4.37611 14.4 4.84616 14.4C5.07758 14.4 5.27283 14.3205 5.43193 14.1614L11.0726 8.64365C11.2679 8.45563 11.3546 8.24591 11.3546 8.00004Z",
							fill: "currentColor"
						})
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "plan-view-popup-container-details",
				children: [
					c && /* @__PURE__ */ jsxs("div", {
						className: "plan-view-popup-detail-item",
						children: [/* @__PURE__ */ jsxs("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 16 16",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("g", {
								clipPath: "url(#clip0_679_1027)",
								children: /* @__PURE__ */ jsx("path", {
									d: "M9.01964 5.56788C8.63803 5.83995 8.17103 5.99998 7.66665 5.99998C6.37798 5.99998 5.33331 4.95531 5.33331 3.66665C5.33331 2.37798 6.37798 1.33331 7.66665 1.33331C8.50197 1.33331 9.23478 1.77226 9.64698 2.43207M3.99998 13.3914H5.74017C5.96706 13.3914 6.19257 13.4184 6.41252 13.4724L8.25124 13.9192C8.65021 14.0164 9.06583 14.0259 9.46896 13.9476L11.502 13.5521C12.039 13.4474 12.533 13.1903 12.9202 12.8136L14.3586 11.4145C14.7693 11.0156 14.7693 10.3683 14.3586 9.96869C13.9887 9.60894 13.4031 9.56844 12.9847 9.87352L11.3084 11.0965C11.0683 11.272 10.7762 11.3665 10.4757 11.3665H8.85698L9.88736 11.3665C10.4681 11.3665 10.9386 10.9089 10.9386 10.3439V10.1394C10.9386 9.67031 10.6104 9.26129 10.1427 9.14789L8.55238 8.76114C8.29357 8.69837 8.02851 8.66665 7.76207 8.66665C7.11887 8.66665 5.95458 9.19919 5.95458 9.19919L3.99998 10.0166M13.3333 4.33331C13.3333 5.62198 12.2886 6.66665 11 6.66665C9.71132 6.66665 8.66665 5.62198 8.66665 4.33331C8.66665 3.04465 9.71132 1.99998 11 1.99998C12.2886 1.99998 13.3333 3.04465 13.3333 4.33331ZM1.33331 9.73331L1.33331 13.6C1.33331 13.9733 1.33331 14.16 1.40598 14.3026C1.46989 14.4281 1.57188 14.5301 1.69732 14.594C1.83993 14.6666 2.02661 14.6666 2.39998 14.6666H2.93331C3.30668 14.6666 3.49337 14.6666 3.63597 14.594C3.76141 14.5301 3.8634 14.4281 3.92732 14.3026C3.99998 14.16 3.99998 13.9733 3.99998 13.6V9.73331C3.99998 9.35995 3.99998 9.17326 3.92732 9.03065C3.8634 8.90521 3.76141 8.80323 3.63597 8.73931C3.49337 8.66665 3.30668 8.66665 2.93331 8.66665L2.39998 8.66665C2.02661 8.66665 1.83993 8.66665 1.69732 8.73931C1.57188 8.80322 1.46989 8.90521 1.40598 9.03065C1.33331 9.17326 1.33331 9.35994 1.33331 9.73331Z",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
								id: "clip0_679_1027",
								children: /* @__PURE__ */ jsx("rect", {
									width: "16",
									height: "16",
									fill: "white"
								})
							}) })]
						}), /* @__PURE__ */ jsx("div", {
							className: "text-bodyContentColor",
							children: `${a(n.plotContainerInfo?.priceMin ?? 0)} - ${a(n.plotContainerInfo?.priceMax ?? 0)}`
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "plan-view-popup-detail-item",
						children: /* @__PURE__ */ jsx("div", {
							className: "text-bodyContentColor",
							children: `${n.plotContainerInfo?.bedroomsMin} ${o("web.unit_detail.bedroom")} - ${n.plotContainerInfo?.bedroomsMax} ${o("web.unit_detail.bedroom")}`
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "plan-view-popup-detail-item",
						children: /* @__PURE__ */ jsx("div", {
							className: "text-bodyContentColor",
							children: `${n.plotContainerInfo?.areaMin} ${o(n.plotContainerInfo?.areaUnit ?? "")} - ${n.plotContainerInfo?.areaMax} ${o(n.plotContainerInfo?.areaUnit ?? "")}`
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute w-0 h-0 ${((e, t) => e > 0 && t > 0 ? "triangle-bottom-left" : e > 0 && t < 0 ? "triangle-top-left" : e < 0 && t > 0 ? "triangle-bottom-right" : "triangle-top-right")(m[0], m[1])}` })
		]
	});
}
var FloorViewPopup = React.forwardRef(({ canvas: e, obj: t, item: n, onClickOutside: r, onNavigate: i, measurementSystem: a = "metric" }, o) => {
	let c = useRef(null), [p, m] = useState([1, 1]), h = useRef(!1), g = (e) => {
		c.current && !c.current.contains(e.target) && (e.type === "mousedown" ? (e.preventDefault(), r()) : e.type === "touchmove" ? (e.preventDefault(), h.current = !0) : e.type === "touchend" && (e.preventDefault(), h.current ? h.current = !1 : r()));
	};
	useEffect(() => (document.addEventListener("mousedown", g), document.addEventListener("touchmove", g), document.addEventListener("touchend", g), () => {
		document.removeEventListener("mousedown", g), document.removeEventListener("touchmove", g), document.removeEventListener("touchend", g);
	}), []);
	let _ = (e) => {
		let n = e.getZoom(), r = e.getWidth(), i = e.getHeight(), a = t.label.getBoundingRect();
		return {
			canvasTop: 0,
			canvasLeft: 0,
			canvasRight: r,
			canvasBottom: i,
			objectTop: a.top + a.height / 2,
			objectLeft: a.left + a.width / 2,
			popupWidth: c.current?.offsetWidth ?? 0,
			popupHeight: c.current?.offsetHeight ?? 0,
			zoom: n
		};
	}, v = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0, 0], y = (e, t) => e > 0 && t > 0 ? "triangle-bottom-left" : e > 0 && t < 0 ? "triangle-top-left" : e < 0 && t > 0 ? "triangle-bottom-right" : "triangle-top-right";
	useEffect(() => {
		let t = () => {
			if (c.current == null) return;
			let t = _(e), n = [1, 1], r = t?.objectLeft ?? 0, i = (t?.objectTop ?? 0) - t.popupHeight;
			r + t.popupWidth > t.canvasRight && (r = t?.objectLeft - t.popupWidth, n[0] = -1), i - t.popupHeight < t.canvasTop && (i = t?.objectTop, n[1] = -1);
			let [a, o] = v(n[0], n[1]);
			m(n), c.current && (c.current.style.left = r + a + "px", c.current.style.top = i + o + "px");
		};
		return t(), e.on("before:render", t), () => {
			e.off("before:render", t);
		};
	}, [t, e]);
	let b = a === "metric" ? n.informations?.[0] : n.informations?.[1];
	return /* @__PURE__ */ jsxs("div", {
		ref: (e) => {
			c.current = e, typeof o == "function" ? o(e) : o && (o.current = e);
		},
		onClick: async () => {
			let e = "/availability/site-plan";
			e = `/availability/site-plan/container/${t?.itemId}`, i && i(e);
		},
		className: "plan-view-popup",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "plan-view-popup-header",
				children: /* @__PURE__ */ jsx("div", { children: n.name })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "plan-view-popup-floor-details",
				children: b ?? ""
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute w-0 h-0 ${y(p[0], p[1])}` })
		]
	});
});
FloorViewPopup.displayName = "FloorViewPopup";
var floor_view_popup_default = FloorViewPopup;
function PlanView({ planId: e, objects: t, items: n, background: r, color: i, canvasSubject: a, useHalfWidth: c, onNavigate: g, formatCurrency: _, t: v, showPrice: y, measurementSystem: b }) {
	let x = useRef(null), S = useRef(null), C = useRef(null), w = useRef(null), E = useRef(null), D = useRef(null), A = useRef(null), j = useRef(0), M = useRef(0), N = useRef(!1), ce = useRef(!1), P = useRef(0), F = useRef(1), I = useRef(new PlanItemController(n)), L = useRef(new PlanObjectController(t)), le = useRef(t), R = useRef(""), z = useRef(null), B = useRef(0), V = useRef(0), H = useRef(0), U = useRef(null), [W, G] = useState([]), K = useRef(null), ue = () => {
		let e = K.current;
		e && A.current.setDimensions({
			width: e.clientWidth,
			height: e.clientHeight
		});
	}, q = () => {
		ue();
		let e = 1;
		if (S.current?.width !== 0 || S.current?.height !== 0) {
			let t = A.current.getWidth() / (c ? 2 : 1), n = S.current.width, r = S.current.height, i = A.current.getHeight(), a = t / n, o = i / r;
			e = Math.min(a, o), A.current.setZoom(e), A.current.absolutePan(new fabric.Point((n * e - t) / 2, (r * e - i) / 2)), F.current = e;
		}
		A.current.renderAll(), z.current = A.current?.viewportTransform;
	};
	useEffect(() => {
		let e = (e) => e.preventDefault(), t = () => q(), n = K.current ?? document, r = document?.getElementById("puck-canvas-root");
		n.addEventListener("gesturestart", e), n.addEventListener("gesturechange", e), n.addEventListener("gestureend", e), window.addEventListener("resize", t);
		let i = null;
		return r && (i = new ResizeObserver(() => {
			q();
		}), i.observe(r)), () => {
			n.removeEventListener("gesturestart", e), n.removeEventListener("gesturechange", e), n.removeEventListener("gestureend", e), window.removeEventListener("resize", t), i && r && (i.unobserve(r), i.disconnect());
		};
	}, [K]), usePinch((e) => {
		let { da: t } = e;
		e.event.preventDefault(), P.current == 0 && (P.current = t[0]);
		let n = t[0] / P.current * A.current.getZoom();
		n > 20 && (n = 20), n < F.current && (n = F.current), A.current.setZoom(n), Q(), P.current = t[0], A.current.renderAll();
	}, { target: U }), useEffect(() => {
		A.current && a && a.attach(() => {
			q();
		}, "onFit");
	}, [a, A.current]), useEffect(() => {
		if (!r?.objectUrl) return;
		let e = typeof window < "u" ? window.document : document;
		return e.addEventListener("gesturestart", (e) => e.preventDefault()), e.addEventListener("gesturechange", (e) => e.preventDefault()), J(), () => {
			try {
				A.current && (A.current?.dispose(), S.current?.dispose());
			} catch (e) {
				console.error(e);
			}
		};
	}, [r]), useEffect(() => {
		let r = e == R.current;
		if (A.current && r) A.current.remove(...A.current.getObjects()), L.current.deleteObjects(), I.current = new PlanItemController(n), L.current = new PlanObjectController(t), L.current.initContainerObjects(C.current), L.current.containerObjects.forEach((e) => {
			let t = I.current.getItem(e.itemId);
			t && (e.assign(t), A.current.add(e, e.label));
		}), A.current?.requestRenderAll();
		else if (A.current && !r) try {
			A.current && (A.current.remove(...A.current.getObjects()), S.current?.dispose(), L.current.deleteObjects(), I.current = new PlanItemController(n), L.current = new PlanObjectController(t), J());
		} catch (e) {
			console.error(e);
		}
		le.current = t, R.current = e;
	}, [t]);
	let J = () => {
		fabric.Image.fromURL(r.objectUrl ?? "", (e) => {
			e.setOptions({
				stroke: "#333333",
				strokeWidth: 0,
				opacity: 1,
				hasBorders: !1
			}), S.current = e, C.current = new fabric.Point(S.current.width ?? 0, S.current.height ?? 0), pe(), ge(S.current?.width ?? 0, S.current?.height ?? 0), q();
		});
	}, de = (e) => {
		if (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) {
			let t = e.target, n = getPlanItemTypeEnum(I.current.getItem(t.itemId)?.type ?? "");
			n == PlanItemTypeEnum.Room && (D.current = n, Y(t));
		}
	}, fe = (e) => {
		if ((e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && D.current == PlanItemTypeEnum.Room) {
			let t = w.current?.getBoundingClientRect(), { clientX: n, clientY: r } = e.e;
			if (n >= Math.round((t?.left ?? 0) - 10) && n <= Math.round((t?.right ?? 0) + 10) && r >= Math.round((t?.top ?? 0) - 10) && r <= Math.round((t?.bottom ?? 0) + 10)) return;
			X();
		}
	}, pe = () => {
		S.current && (A.current, A.current = new fabric.Canvas(x.current, {
			hoverCursor: "move",
			selection: !0,
			selectionBorderColor: "blue",
			backgroundColor: "#cccccc",
			renderOnAddRemove: !1,
			objectCaching: !1,
			backgroundImage: S.current
		}), A.current.backgroundColor = i ?? "#ff00", A.current.selection = !1, A.current.defaultCursor = "grab", A.current.on("mouse:wheel", function(e) {
			let t = e.e.deltaY, n = A.current.getZoom(), r = new fabric.Point(A.current.getWidth() / 2, A.current.getHeight() / 2);
			n *= .999 ** t, n > 20 && (n = 20), n < F.current && (n = F.current);
			let i = A.current.getPointer(e.e), a = new fabric.Point(i.x, i.y), o = fabric.util.transformPoint(a, A.current.viewportTransform);
			A.current.zoomToPoint(r, n);
			let s = fabric.util.transformPoint(a, A.current.viewportTransform), c = new fabric.Point(o.x - s.x, o.y - s.y);
			A.current.relativePan(c), Q(), A.current.renderAll(), e.e.preventDefault(), e.e.stopPropagation();
		}), A.current.on("mouse:move", function(e) {
			N.current && (e.e.type == "mousemove" ? $(e.e.clientX, e.e.clientY) : e.e.touches && e.e.touches.length > 1 || $(e.e.touches[0].clientX, e.e.touches[0].clientY));
		}), A.current.on("mouse:up", he), A.current.on("mouse:down", Z), A.current.on("mouse:over", de), A.current.on("mouse:out", fe), L.current.initContainerObjects(C.current), L.current.containerObjects.forEach((e) => {
			let t = I.current.getItem(e.itemId);
			if (t) if (e.itemType == "Room") {
				t && e.assign(t);
				let n = e.fill;
				e.fill = "#ff00", e.label = new PlanLabelObject(t.name, n ?? "0x000000", e.left ?? 0, e.top ?? 0, e.width ?? 0, e.height ?? 0, 1, 56), e.label.hideBackground(), e.label.addStroke(), A.current.add(e, e.label);
			} else t && e.assign(t), A.current.add(e, e.label);
		}), A.current.on("mouse:mouseup", (e) => {
			(e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && (Y(e.target), A.current?.requestRenderAll());
		}), A.current.requestRenderAll(), ce.current = !0);
	}, me = async (e) => {
		let t = getPlanItemTypeEnum(e?.itemType ?? ""), n = "/availability/site-plan";
		t === PlanItemTypeEnum.PlotContainer ? (n = `/availability/site-plan/plot-container/${e?.itemId}`, g && g(n)) : t === PlanItemTypeEnum.Plot && (n = `/plot/${e?.itemId}`, g && g(n));
	}, Y = (e) => {
		let t = I.current.getItem(e.itemId), n = getPlanItemTypeEnum(t?.type ?? "");
		switch (D.current = n, n) {
			case PlanItemTypeEnum.Plot:
				G([/* @__PURE__ */ jsx(PlanViewPopup, {
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						X();
					}
				}, "container_element")]);
				break;
			case PlanItemTypeEnum.PlotContainer:
				G([/* @__PURE__ */ jsx(ContainerPlanPopup, {
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						X();
					},
					onNavigate: g,
					formatCurrency: _,
					t: v,
					showPrice: y
				}, "container_element")]);
				break;
			case PlanItemTypeEnum.Room:
				G([/* @__PURE__ */ jsx(floor_view_popup_default, {
					ref: w,
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						X();
					},
					onNavigate: g,
					measurementSystem: b
				}, "container_element")]);
				break;
		}
	}, X = useCallback(() => {
		D.current = null, G([]), E.current = null;
	}, [W]), Z = (e) => {
		N.current = !0, e.e.type.includes("mouse") && (j.current = e.e.clientX, M.current = e.e.clientY), e.e.type.includes("touch") && (j.current = e.e.touches[0].clientX, M.current = e.e.touches[0].clientY), (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && E.current && E.current.itemId == e.target.itemId ? me(E.current) : (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && setTimeout(() => {
			Y(e.target), A.current?.requestRenderAll();
		}, 150);
	}, he = (e) => {
		N.current = !1, A.current?.fire("canvas:dragEnd"), P.current = 0;
	}, ge = (e, t) => {
		B.current = e, V.current = t;
	}, Q = () => {
		Date.now() - H.current < 8 || (H.current = Date.now(), _e(), A.current?.requestRenderAll());
	}, _e = () => {
		if (B.current === 0 || V.current === 0 || !A.current?.viewportTransform) return;
		let e = A.current?.viewportTransform, t = A.current?.getZoom(), n = A.current?.getWidth(), r = B.current, i = V.current, a = A.current?.getHeight(), o = z.current[4], s = z.current[5];
		e[4] >= z.current[4] ? A.current.viewportTransform[4] = z.current[4] : e[4] < n - r * t - o && (A.current.viewportTransform[4] = n - r * t - o), e[5] >= z.current[5] ? A.current.viewportTransform[5] = z.current[5] : e[5] < a - i * t - s && (A.current.viewportTransform[5] = a - i * t - s);
	}, $ = (e, t) => {
		if (A.current?.getZoom() == F.current) return;
		let n = new fabric.Point(e - j.current, t - M.current);
		A.current.relativePan(n), Q(), A.current?.requestRenderAll(), j.current = e, M.current = t;
	};
	return /* @__PURE__ */ jsx("div", {
		className: "plan-view-container",
		ref: K,
		children: /* @__PURE__ */ jsxs("div", {
			ref: U,
			className: "plan-view-canvas-wrapper",
			children: [W.map((e) => createPortal(e, U.current)), /* @__PURE__ */ jsx("canvas", { ref: x })]
		})
	});
}
var CanvasSubject = class {
	constructor() {
		this.events = ["onFit"], this.observers = { onFit: [] };
	}
	attach(e, t) {
		this.observers[t].push(e);
	}
	detach(e, t) {
		this.observers[t] = this.observers[t].filter((t) => e !== t);
	}
	notify(e) {
		this.observers[e].forEach((e) => e());
	}
};
function PlanViewWrapper(e) {
	let { planId: t, objects: n, background: r, color: a, elementId: o = "canvas_container", useHalfWidth: c = !1, showPrice: l = !0, measurementSystem: f = "metric" } = e, [p, m] = useState(null), h = usePlotRepository();
	useEffect(() => {
		h.fetchSitePlan().then((e) => {
			m(e);
		});
	}, []);
	let g = [], _ = null;
	try {
		g = typeof n == "string" ? n ? JSON.parse(n) : [] : n || [], _ = typeof r == "string" ? r ? JSON.parse(r) : null : r;
	} catch (e) {
		return console.error("Error parsing PlanView props:", e), /* @__PURE__ */ jsx("div", {
			className: "p-4 text-red-600",
			children: "Error: Invalid JSON data for PlanView component"
		});
	}
	return !_ || !t ? /* @__PURE__ */ jsx("div", {
		className: "plan-view-wrapper-loading",
		children: /* @__PURE__ */ jsx("div", { className: "plan-view-wrapper-spinner" })
	}) : /* @__PURE__ */ jsx(PlanView, {
		planId: t,
		objects: g,
		items: p?.plan.items ?? [],
		background: _,
		color: a,
		elementId: o,
		useHalfWidth: c,
		showPrice: l,
		measurementSystem: f
	}, p?.plan.id ?? "siteplan");
}
export { CanvasSubject, ContainerPlanPopup, floor_view_popup_default as FloorViewPopup, PlanCircleObject, PlanItemController, PlanItemTypeEnum, PlanLabelObject, PlanObjectController, PlanObjectTypeEnum, PlanPolygonObject, PlanRectangleObject, PlanView, PlanViewPopup, PlanViewWrapper };
