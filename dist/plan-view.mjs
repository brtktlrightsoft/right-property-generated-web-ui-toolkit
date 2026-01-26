import { a as usePlotRepository, i as generatePlotUrl, l as useMainModuleResult, r as formatCurrency, t as v4_default, u as useTranslation } from "./v4-CS0MDZ9E.js";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import { fabric } from "fabric";
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
		let t = e.points || [], n = e.left ?? 0, r = e.top ?? 0, a = e.width ?? 0, o = e.height ?? 0;
		if (t.length > 0) {
			let e = t.map((e) => e.x), i = t.map((e) => e.y), s = Math.min(...e), c = Math.max(...e), l = Math.min(...i), u = Math.max(...i);
			a = c - s, o = u - l, n = s, r = l;
			let d = (s + c) / 2, f = (l + u) / 2;
			t = t.map((e) => new fabric.Point(e.x - d, e.y - f)), n = d, r = f;
		}
		super(t, {
			left: n,
			top: r,
			width: a,
			height: o,
			opacity: e.opacity ?? .6,
			fill: e.fill,
			hoverCursor: "pointer",
			selectable: !1,
			hasControls: !1,
			evented: !1,
			originX: "center",
			originY: "center"
		}), this._objectId = v4_default(), this.containerId = 0, this.itemId = "", this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None], this.itemName = "", e.objectId && (this._objectId = e.objectId), this.containerType = e.containerType, this.containerId = e.containerId, this.itemType = e.itemType, this.itemId = e.itemId;
		let s = n - a / 2, c = r - o / 2;
		this.label = new PlanLabelObject(this.objectType, e.fill ?? "0x000000", s, c, a, o), this.text = new fabric.Text(this.objectType, {
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
			width: a,
			height: o / 2,
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
		let t = this.points.map((e) => new fabric.Point(e.x + (this.left ?? 0), e.y + (this.top ?? 0))), n = t.map((e) => e.x), r = t.map((e) => e.y), a = Math.min(...n), o = Math.max(...n), s = Math.min(...r), c = Math.max(...r), l = o - a, u = c - s, d = a, f = s;
		return {
			objectId: this.objectId,
			objectType: this.objectType,
			containerId: this.containerId,
			containerType: this.containerType,
			itemId: this.itemId,
			itemType: this.itemType,
			left: d / e.x,
			top: f / e.y,
			width: l / e.x,
			height: u / e.y,
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
function clamp(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
var V = {
	toVector(e, t) {
		return e === void 0 && (e = t), Array.isArray(e) ? e : [e, e];
	},
	add(e, t) {
		return [e[0] + t[0], e[1] + t[1]];
	},
	sub(e, t) {
		return [e[0] - t[0], e[1] - t[1]];
	},
	addTo(e, t) {
		e[0] += t[0], e[1] += t[1];
	},
	subTo(e, t) {
		e[0] -= t[0], e[1] -= t[1];
	}
};
function rubberband(e, t, n) {
	return t === 0 || Math.abs(t) === Infinity ? e ** (n * 5) : e * t * n / (t + n * e);
}
function rubberbandIfOutOfBounds(e, t, n, r = .15) {
	return r === 0 ? clamp(e, t, n) : e < t ? -rubberband(t - e, n - t, r) + t : e > n ? +rubberband(e - n, n - t, r) + n : e;
}
function computeRubberband(e, [t, n], [r, i]) {
	let [[a, o], [s, c]] = e;
	return [rubberbandIfOutOfBounds(t, a, o, r), rubberbandIfOutOfBounds(n, s, c, i)];
}
function _toPrimitive(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _toPropertyKey(e) {
	var t = _toPrimitive(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function _defineProperty(e, t, n) {
	return t = _toPropertyKey(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ownKeys(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _objectSpread2(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
			_defineProperty(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var EVENT_TYPE_MAP = {
	pointer: {
		start: "down",
		change: "move",
		end: "up"
	},
	mouse: {
		start: "down",
		change: "move",
		end: "up"
	},
	touch: {
		start: "start",
		change: "move",
		end: "end"
	},
	gesture: {
		start: "start",
		change: "change",
		end: "end"
	}
};
function capitalize(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
var actionsWithoutCaptureSupported = ["enter", "leave"];
function hasCapture(e = !1, t) {
	return e && !actionsWithoutCaptureSupported.includes(t);
}
function toHandlerProp(e, t = "", n = !1) {
	let r = EVENT_TYPE_MAP[e], i = r && r[t] || t;
	return "on" + capitalize(e) + capitalize(i) + (hasCapture(n, i) ? "Capture" : "");
}
var pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
function parseProp(e) {
	let t = e.substring(2).toLowerCase(), n = !!~t.indexOf("passive");
	n && (t = t.replace("passive", ""));
	let r = pointerCaptureEvents.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(r);
	return i && (t = t.replace("capture", "")), {
		device: t,
		capture: i,
		passive: n
	};
}
function toDomEventType(e, t = "") {
	let n = EVENT_TYPE_MAP[e];
	return e + (n && n[t] || t);
}
function isTouch(e) {
	return "touches" in e;
}
function getCurrentTargetTouchList(e) {
	return Array.from(e.touches).filter((t) => {
		var n, r;
		return t.target === e.currentTarget || ((n = e.currentTarget) == null || (r = n.contains) == null ? void 0 : r.call(n, t.target));
	});
}
function distanceAngle(e, t) {
	try {
		let n = t.clientX - e.clientX, r = t.clientY - e.clientY, i = (t.clientX + e.clientX) / 2, a = (t.clientY + e.clientY) / 2, o = Math.hypot(n, r);
		return {
			angle: -(Math.atan2(n, r) * 180) / Math.PI,
			distance: o,
			origin: [i, a]
		};
	} catch {}
	return null;
}
function touchIds(e) {
	return getCurrentTargetTouchList(e).map((e) => e.identifier);
}
function touchDistanceAngle(e, t) {
	let [n, r] = Array.from(e.touches).filter((e) => t.includes(e.identifier));
	return distanceAngle(n, r);
}
var LINE_HEIGHT = 40, PAGE_HEIGHT = 800;
function wheelValues(e) {
	let { deltaX: t, deltaY: n, deltaMode: r } = e;
	return r === 1 ? (t *= LINE_HEIGHT, n *= LINE_HEIGHT) : r === 2 && (t *= PAGE_HEIGHT, n *= PAGE_HEIGHT), [t, n];
}
function getEventDetails(e) {
	let t = {};
	if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
		let { shiftKey: n, altKey: r, metaKey: i, ctrlKey: a } = e;
		Object.assign(t, {
			shiftKey: n,
			altKey: r,
			metaKey: i,
			ctrlKey: a
		});
	}
	return t;
}
function call(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
function noop() {}
function chain(...e) {
	return e.length === 0 ? noop : e.length === 1 ? e[0] : function() {
		let t;
		for (let n of e) t = n.apply(this, arguments) || t;
		return t;
	};
}
function assignDefault(e, t) {
	return Object.assign({}, t, e || {});
}
var BEFORE_LAST_KINEMATICS_DELAY = 32, Engine = class {
	constructor(e, t, n) {
		this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
	}
	get state() {
		return this.ctrl.state[this.key];
	}
	set state(e) {
		this.ctrl.state[this.key] = e;
	}
	get shared() {
		return this.ctrl.state.shared;
	}
	get eventStore() {
		return this.ctrl.gestureEventStores[this.key];
	}
	get timeoutStore() {
		return this.ctrl.gestureTimeoutStores[this.key];
	}
	get config() {
		return this.ctrl.config[this.key];
	}
	get sharedConfig() {
		return this.ctrl.config.shared;
	}
	get handler() {
		return this.ctrl.handlers[this.key];
	}
	reset() {
		let { state: e, shared: t, ingKey: n, args: r } = this;
		t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
	}
	start(e) {
		let t = this.state, n = this.config;
		t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? call(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp);
	}
	computeValues(e) {
		let t = this.state;
		t._values = e, t.values = this.config.transform(e);
	}
	computeInitial() {
		let e = this.state;
		e._initial = e._values, e.initial = e.values;
	}
	compute(e) {
		let { state: t, config: n, shared: r } = this;
		t.args = this.args;
		let i = 0;
		if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, getEventDetails(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, i = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
			let e = t._delta.map(Math.abs);
			V.addTo(t._distance, e);
		}
		this.axisIntent && this.axisIntent(e);
		let [a, o] = t._movement, [s, c] = n.threshold, { _step: l, values: u } = t;
		if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(a) >= s && u[0]), l[1] === !1 && (l[1] = Math.abs(o) >= c && u[1])) : (l[0] === !1 && (l[0] = Math.abs(a) >= s && Math.sign(a) * s), l[1] === !1 && (l[1] = Math.abs(o) >= c && Math.sign(o) * c)), t.intentional = l[0] !== !1 || l[1] !== !1, !t.intentional) return;
		let d = [0, 0];
		if (n.hasCustomTransform) {
			let [e, t] = u;
			d[0] = l[0] === !1 ? 0 : e - l[0], d[1] = l[1] === !1 ? 0 : t - l[1];
		} else d[0] = l[0] === !1 ? 0 : a - l[0], d[1] = l[1] === !1 ? 0 : o - l[1];
		this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
		let f = t.offset, p = t._active && !t._blocked || t.active;
		p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = call(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
		let [m, h] = t.offset, [[g, _], [v, y]] = t._bounds;
		t.overflow = [m < g ? -1 : m > _ ? 1 : 0, h < v ? -1 : h > y ? 1 : 0], t._movementBound[0] = t.overflow[0] ? t._movementBound[0] === !1 ? t._movement[0] : t._movementBound[0] : !1, t._movementBound[1] = t.overflow[1] ? t._movementBound[1] === !1 ? t._movement[1] : t._movementBound[1] : !1;
		let b = t._active && n.rubberband || [0, 0];
		if (t.offset = computeRubberband(t._bounds, t.offset, b), t.delta = V.sub(t.offset, f), this.computeMovement(), p && (!t.last || i > BEFORE_LAST_KINEMATICS_DELAY)) {
			t.delta = V.sub(t.offset, f);
			let e = t.delta.map(Math.abs);
			V.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && i > 0 && (t.velocity = [e[0] / i, e[1] / i], t.timeDelta = i);
		}
	}
	emit() {
		let e = this.state, t = this.shared, n = this.config;
		if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
		let r = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, t), e), {}, { [this.aliasKey]: e.values }));
		r !== void 0 && (e.memo = r);
	}
	clean() {
		this.eventStore.clean(), this.timeoutStore.clean();
	}
}, identity = (e) => e, DEFAULT_RUBBERBAND = .15, commonConfigResolver = {
	enabled(e = !0) {
		return e;
	},
	eventOptions(e, t, n) {
		return _objectSpread2(_objectSpread2({}, n.shared.eventOptions), e);
	},
	preventDefault(e = !1) {
		return e;
	},
	triggerAllEvents(e = !1) {
		return e;
	},
	rubberband(e = 0) {
		switch (e) {
			case !0: return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
			case !1: return [0, 0];
			default: return V.toVector(e);
		}
	},
	from(e) {
		if (typeof e == "function") return e;
		if (e != null) return V.toVector(e);
	},
	transform(e, t, n) {
		let r = e || n.shared.transform;
		if (this.hasCustomTransform = !!r, process.env.NODE_ENV === "development") {
			let e = r || identity;
			return (t) => {
				let n = e(t);
				return (!isFinite(n[0]) || !isFinite(n[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${n[0]},1]`), n;
			};
		}
		return r || identity;
	},
	threshold(e) {
		return V.toVector(e, 0);
	}
};
process.env.NODE_ENV === "development" && Object.assign(commonConfigResolver, {
	domTarget(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
		return NaN;
	},
	lockDirection(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
		return NaN;
	},
	initial(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
		return NaN;
	}
});
var DEFAULT_AXIS_THRESHOLD = 0, coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
	axis(e, t, { axis: n }) {
		if (this.lockDirection = n === "lock", !this.lockDirection) return n;
	},
	axisThreshold(e = DEFAULT_AXIS_THRESHOLD) {
		return e;
	},
	bounds(e = {}) {
		if (typeof e == "function") return (t) => coordinatesConfigResolver.bounds(e(t));
		if ("current" in e) return () => e.current;
		if (typeof HTMLElement == "function" && e instanceof HTMLElement) return e;
		let { left: t = -Infinity, right: n = Infinity, top: r = -Infinity, bottom: i = Infinity } = e;
		return [[t, n], [r, i]];
	}
}), isBrowser = typeof window < "u" && window.document && window.document.createElement;
function supportsTouchEvents() {
	return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
	return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
	return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
	return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
	try {
		return "constructor" in GestureEvent;
	} catch {
		return !1;
	}
}
var SUPPORT = {
	isBrowser,
	gesture: supportsGestureEvents(),
	touch: supportsTouchEvents(),
	touchscreen: isTouchScreen(),
	pointer: supportsPointerEvents(),
	pointerLock: supportsPointerLock()
}, DEFAULT_PREVENT_SCROLL_DELAY = 250, DEFAULT_DRAG_DELAY = 180, DEFAULT_SWIPE_VELOCITY = .5, DEFAULT_SWIPE_DISTANCE = 50, DEFAULT_SWIPE_DURATION = 250, DEFAULT_KEYBOARD_DISPLACEMENT = 10, DEFAULT_DRAG_AXIS_THRESHOLD = {
	mouse: 0,
	touch: 0,
	pen: 8
}, dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
	device(e, t, { pointer: { touch: n = !1, lock: r = !1, mouse: i = !1 } = {} }) {
		return this.pointerLock = r && SUPPORT.pointerLock, SUPPORT.touch && n ? "touch" : this.pointerLock ? "mouse" : SUPPORT.pointer && !i ? "pointer" : SUPPORT.touch ? "touch" : "mouse";
	},
	preventScrollAxis(e, t, { preventScroll: n }) {
		if (this.preventScrollDelay = typeof n == "number" ? n : n || n === void 0 && e ? DEFAULT_PREVENT_SCROLL_DELAY : void 0, !(!SUPPORT.touchscreen || n === !1)) return e || (n === void 0 ? void 0 : "y");
	},
	pointerCapture(e, t, { pointer: { capture: n = !0, buttons: r = 1, keys: i = !0 } = {} }) {
		return this.pointerButtons = r, this.keys = i, !this.pointerLock && this.device === "pointer" && n;
	},
	threshold(e, t, { filterTaps: n = !1, tapsThreshold: r = 3, axis: i = void 0 }) {
		let a = V.toVector(e, n ? r : i ? 1 : 0);
		return this.filterTaps = n, this.tapsThreshold = r, a;
	},
	swipe({ velocity: e = DEFAULT_SWIPE_VELOCITY, distance: t = DEFAULT_SWIPE_DISTANCE, duration: n = DEFAULT_SWIPE_DURATION } = {}) {
		return {
			velocity: this.transform(V.toVector(e)),
			distance: this.transform(V.toVector(t)),
			duration: n
		};
	},
	delay(e = 0) {
		switch (e) {
			case !0: return DEFAULT_DRAG_DELAY;
			case !1: return 0;
			default: return e;
		}
	},
	axisThreshold(e) {
		return e ? _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), e) : DEFAULT_DRAG_AXIS_THRESHOLD;
	},
	keyboardDisplacement(e = DEFAULT_KEYBOARD_DISPLACEMENT) {
		return e;
	}
});
process.env.NODE_ENV === "development" && Object.assign(dragConfigResolver, {
	useTouch(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
		return NaN;
	},
	experimental_preventWindowScrollY(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
		return NaN;
	},
	swipeVelocity(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
		return NaN;
	},
	swipeDistance(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
		return NaN;
	},
	swipeDuration(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
		return NaN;
	}
});
function clampStateInternalMovementToBounds(e) {
	let [t, n] = e.overflow, [r, i] = e._delta, [a, o] = e._direction;
	(t < 0 && r > 0 && a < 0 || t > 0 && r < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && i > 0 && o < 0 || n > 0 && i < 0 && o > 0) && (e._movement[1] = e._movementBound[1]);
}
var SCALE_ANGLE_RATIO_INTENT_DEG = 30, PINCH_WHEEL_RATIO = 100, PinchEngine = class extends Engine {
	constructor(...e) {
		super(...e), _defineProperty(this, "ingKey", "pinching"), _defineProperty(this, "aliasKey", "da");
	}
	init() {
		this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
	}
	reset() {
		super.reset();
		let e = this.state;
		e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0;
	}
	computeOffset() {
		let { type: e, movement: t, lastOffset: n } = this.state;
		e === "wheel" ? this.state.offset = V.add(t, n) : this.state.offset = [(1 + t[0]) * n[0], t[1] + n[1]];
	}
	computeMovement() {
		let { offset: e, lastOffset: t } = this.state;
		this.state.movement = [e[0] / t[0], e[1] - t[1]];
	}
	axisIntent() {
		let e = this.state, [t, n] = e._movement;
		if (!e.axis) {
			let r = Math.abs(t) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(n);
			r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale");
		}
	}
	restrictToAxis(e) {
		this.config.lockDirection && (this.state.axis === "scale" ? e[1] = 0 : this.state.axis === "angle" && (e[0] = 0));
	}
	cancel() {
		let e = this.state;
		e.canceled || setTimeout(() => {
			e.canceled = !0, e._active = !1, this.compute(), this.emit();
		}, 0);
	}
	touchStart(e) {
		this.ctrl.setEventIds(e);
		let t = this.state, n = this.ctrl.touchIds;
		if (t._active && t._touchIds.every((e) => n.has(e)) || n.size < 2) return;
		this.start(e), t._touchIds = Array.from(n).slice(0, 2);
		let r = touchDistanceAngle(e, t._touchIds);
		r && this.pinchStart(e, r);
	}
	pointerStart(e) {
		if (e.buttons != null && e.buttons % 2 != 1) return;
		this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
		let t = this.state, n = t._pointerEvents, r = this.ctrl.pointerIds;
		if (t._active && Array.from(n.keys()).every((e) => r.has(e)) || (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2)) return;
		this.start(e);
		let i = distanceAngle(...Array.from(n.values()));
		i && this.pinchStart(e, i);
	}
	pinchStart(e, t) {
		let n = this.state;
		n.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit();
	}
	touchMove(e) {
		if (!this.state._active) return;
		let t = touchDistanceAngle(e, this.state._touchIds);
		t && this.pinchMove(e, t);
	}
	pointerMove(e) {
		let t = this.state._pointerEvents;
		if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
		let n = distanceAngle(...Array.from(t.values()));
		n && this.pinchMove(e, n);
	}
	pinchMove(e, t) {
		let n = this.state, r = n._values[1], i = t.angle - r, a = 0;
		Math.abs(i) > 270 && (a += Math.sign(i)), this.computeValues([t.distance, t.angle - 360 * a]), n.origin = t.origin, n.turns = a, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit();
	}
	touchEnd(e) {
		this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e) => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(e), this.emit());
	}
	pointerEnd(e) {
		let t = this.state;
		this.ctrl.setEventIds(e);
		try {
			e.target.releasePointerCapture(e.pointerId);
		} catch {}
		t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit());
	}
	gestureStart(e) {
		e.cancelable && e.preventDefault();
		let t = this.state;
		t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit());
	}
	gestureMove(e) {
		if (e.cancelable && e.preventDefault(), !this.state._active) return;
		let t = this.state;
		this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
		let n = t._movement;
		t._movement = [e.scale - 1, e.rotation], t._delta = V.sub(t._movement, n), this.compute(e), this.emit();
	}
	gestureEnd(e) {
		this.state._active && (this.state._active = !1, this.compute(e), this.emit());
	}
	wheel(e) {
		let t = this.config.modifierKey;
		t && (Array.isArray(t) ? !t.find((t) => e[t]) : !e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
	}
	wheelStart(e) {
		this.start(e), this.wheelChange(e);
	}
	wheelChange(e) {
		"uv" in e || (e.cancelable && e.preventDefault(), process.env.NODE_ENV === "development" && !e.defaultPrevented && console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));
		let t = this.state;
		t._delta = [-wheelValues(e)[1] / PINCH_WHEEL_RATIO * t.offset[0], 0], V.addTo(t._movement, t._delta), clampStateInternalMovementToBounds(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit();
	}
	wheelEnd() {
		this.state._active && (this.state._active = !1, this.compute(), this.emit());
	}
	bind(e) {
		let t = this.config.device;
		t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), { passive: !1 });
	}
}, pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
	device(e, t, { shared: n, pointer: { touch: r = !1 } = {} }) {
		if (n.target && !SUPPORT.touch && SUPPORT.gesture) return "gesture";
		if (SUPPORT.touch && r) return "touch";
		if (SUPPORT.touchscreen) {
			if (SUPPORT.pointer) return "pointer";
			if (SUPPORT.touch) return "touch";
		}
	},
	bounds(e, t, { scaleBounds: n = {}, angleBounds: r = {} }) {
		let i = (e) => {
			let t = assignDefault(call(n, e), {
				min: -Infinity,
				max: Infinity
			});
			return [t.min, t.max];
		}, a = (e) => {
			let t = assignDefault(call(r, e), {
				min: -Infinity,
				max: Infinity
			});
			return [t.min, t.max];
		};
		return typeof n != "function" && typeof r != "function" ? [i(), a()] : (e) => [i(e), a(e)];
	},
	threshold(e, t, n) {
		return this.lockDirection = n.axis === "lock", V.toVector(e, this.lockDirection ? [.1, 3] : 0);
	},
	modifierKey(e) {
		return e === void 0 ? "ctrlKey" : e;
	},
	pinchOnWheel(e = !0) {
		return e;
	}
});
_objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, { mouseOnly: (e = !0) => e }), _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, { mouseOnly: (e = !0) => e });
var EngineMap = /* @__PURE__ */ new Map(), ConfigResolverMap = /* @__PURE__ */ new Map();
function registerAction(e) {
	EngineMap.set(e.key, e.engine), ConfigResolverMap.set(e.key, e.resolver);
}
var pinchAction = {
	key: "pinch",
	engine: PinchEngine,
	resolver: pinchConfigResolver
};
function _objectWithoutPropertiesLoose(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function _objectWithoutProperties(e, t) {
	if (e == null) return {};
	var n = _objectWithoutPropertiesLoose(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var sharedConfigResolver = {
	target(e) {
		if (e) return () => "current" in e ? e.current : e;
	},
	enabled(e = !0) {
		return e;
	},
	window(e = SUPPORT.isBrowser ? window : void 0) {
		return e;
	},
	eventOptions({ passive: e = !0, capture: t = !1 } = {}) {
		return {
			passive: e,
			capture: t
		};
	},
	transform(e) {
		return e;
	}
}, _excluded = [
	"target",
	"eventOptions",
	"window",
	"enabled",
	"transform"
];
function resolveWith(e = {}, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) switch (typeof i) {
		case "function":
			if (process.env.NODE_ENV === "development") {
				let t = i.call(n, e[r], r, e);
				Number.isNaN(t) || (n[r] = t);
			} else n[r] = i.call(n, e[r], r, e);
			break;
		case "object":
			n[r] = resolveWith(e[r], i);
			break;
		case "boolean":
			i && (n[r] = e[r]);
			break;
	}
	return n;
}
function parse(e, t, n = {}) {
	let r = e, { target: i, eventOptions: a, window: o, enabled: s, transform: c } = r, l = _objectWithoutProperties(r, _excluded);
	if (n.shared = resolveWith({
		target: i,
		eventOptions: a,
		window: o,
		enabled: s,
		transform: c
	}, sharedConfigResolver), t) {
		let e = ConfigResolverMap.get(t);
		n[t] = resolveWith(_objectSpread2({ shared: n.shared }, l), e);
	} else for (let e in l) {
		let t = ConfigResolverMap.get(e);
		if (t) n[e] = resolveWith(_objectSpread2({ shared: n.shared }, l[e]), t);
		else if (process.env.NODE_ENV === "development" && ![
			"drag",
			"pinch",
			"scroll",
			"wheel",
			"move",
			"hover"
		].includes(e)) {
			if (e === "domTarget") throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
			console.warn(`[@use-gesture]: Unknown config key \`${e}\` was used. Please read the documentation for further information.`);
		}
	}
	return n;
}
var EventStore = class {
	constructor(e, t) {
		_defineProperty(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = t;
	}
	add(e, t, n, r, i) {
		let a = this._listeners, o = toDomEventType(t, n), s = _objectSpread2(_objectSpread2({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), i);
		e.addEventListener(o, r, s);
		let c = () => {
			e.removeEventListener(o, r, s), a.delete(c);
		};
		return a.add(c), c;
	}
	clean() {
		this._listeners.forEach((e) => e()), this._listeners.clear();
	}
}, TimeoutStore = class {
	constructor() {
		_defineProperty(this, "_timeouts", /* @__PURE__ */ new Map());
	}
	add(e, t, n = 140, ...r) {
		this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r));
	}
	remove(e) {
		let t = this._timeouts.get(e);
		t && window.clearTimeout(t);
	}
	clean() {
		this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
	}
}, Controller = class {
	constructor(e) {
		_defineProperty(this, "gestures", /* @__PURE__ */ new Set()), _defineProperty(this, "_targetEventStore", new EventStore(this)), _defineProperty(this, "gestureEventStores", {}), _defineProperty(this, "gestureTimeoutStores", {}), _defineProperty(this, "handlers", {}), _defineProperty(this, "config", {}), _defineProperty(this, "pointerIds", /* @__PURE__ */ new Set()), _defineProperty(this, "touchIds", /* @__PURE__ */ new Set()), _defineProperty(this, "state", { shared: {
			shiftKey: !1,
			metaKey: !1,
			ctrlKey: !1,
			altKey: !1
		} }), resolveGestures(this, e);
	}
	setEventIds(e) {
		if (isTouch(e)) return this.touchIds = new Set(touchIds(e)), this.touchIds;
		if ("pointerId" in e) return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
	}
	applyHandlers(e, t) {
		this.handlers = e, this.nativeHandlers = t;
	}
	applyConfig(e, t) {
		this.config = parse(e, t, this.config);
	}
	clean() {
		this._targetEventStore.clean();
		for (let e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
	}
	effect() {
		return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
	}
	bind(...e) {
		let t = this.config.shared, n = {}, r;
		if (!(t.target && (r = t.target(), !r))) {
			if (t.enabled) {
				for (let t of this.gestures) {
					let i = this.config[t], a = bindToProps(n, i.eventOptions, !!r);
					i.enabled && new (EngineMap.get(t))(this, e, t).bind(a);
				}
				let i = bindToProps(n, t.eventOptions, !!r);
				for (let t in this.nativeHandlers) i(t, "", (n) => this.nativeHandlers[t](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
					event: n,
					args: e
				})), void 0, !0);
			}
			for (let e in n) n[e] = chain(...n[e]);
			if (!r) return n;
			for (let e in n) {
				let { device: t, capture: i, passive: a } = parseProp(e);
				this._targetEventStore.add(r, t, "", n[e], {
					capture: i,
					passive: a
				});
			}
		}
	}
};
function setupGesture(e, t) {
	e.gestures.add(t), e.gestureEventStores[t] = new EventStore(e, t), e.gestureTimeoutStores[t] = new TimeoutStore();
}
function resolveGestures(e, t) {
	t.drag && setupGesture(e, "drag"), t.wheel && setupGesture(e, "wheel"), t.scroll && setupGesture(e, "scroll"), t.move && setupGesture(e, "move"), t.pinch && setupGesture(e, "pinch"), t.hover && setupGesture(e, "hover");
}
var bindToProps = (e, t, n) => (r, i, a, o = {}, s = !1) => {
	let c = o.capture ?? t.capture, l = o.passive ?? t.passive, u = s ? r : toHandlerProp(r, i, c);
	n && l && (u += "Passive"), e[u] = e[u] || [], e[u].push(a);
};
function useRecognizers(e, t = {}, n, r) {
	let i = React.useMemo(() => new Controller(e), []);
	if (i.applyHandlers(e, r), i.applyConfig(t, n), React.useEffect(i.effect.bind(i)), React.useEffect(() => i.clean.bind(i), []), t.target === void 0) return i.bind.bind(i);
}
function usePinch(e, t) {
	return registerAction(pinchAction), useRecognizers({ pinch: e }, t || {}, "pinch");
}
function usePlotStatus(e) {
	let { plotStatusList: t } = useMainModuleResult();
	if (Array.isArray(t)) return t.find((t) => t.name.toLowerCase() == e?.toLowerCase());
}
const useProjectArea = () => {
	let { measurementSystem: e } = useMainModuleResult(), t = e === "metric" ? "m²" : "sqft";
	return {
		unit: t,
		prepareArea: (e) => e == null || e == 0 ? "N/A" : `${e} ${t ?? ""}`
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
function PlanViewPopup({ canvas: e, obj: i, item: o, onClickOutside: s }) {
	let { t: l } = useTranslation(), m = useRef(null), [h, _] = useState([1, 1]), { showPrice: v, currency: y, clientName: b, projectName: $e, country: et, city: tt, district: x } = useMainModuleResult(), S = usePlotStatus(o.plotInfo?.statusName ?? "available"), C = useRef(!1), { prepareArea: nt } = useProjectArea();
	use_on_click_outside_default(m, (e) => {
		e.preventDefault(), s();
	}, "mousedown"), use_on_click_outside_default(m, (e) => {
		e.preventDefault(), C.current = !0;
	}, "touchmove"), use_on_click_outside_default(m, (e) => {
		e.preventDefault(), C.current ? C.current = !1 : s();
	}, "touchend");
	let w = (e, t) => {
		let n = e.getZoom(), r = e.getWidth(), a = e.getHeight(), o = i.label.getBoundingRect(), s = o.top + o.height / 2, c = o.left + o.width / 2;
		return {
			canvasTop: 0,
			canvasLeft: 0,
			canvasRight: r,
			canvasBottom: a,
			objectTop: s - 10,
			objectLeft: c - 10,
			popupWidth: m.current?.offsetWidth ?? 0,
			popupHeight: m.current?.offsetHeight ?? 0,
			zoom: n
		};
	}, T = () => {
		if (m.current == null) return;
		let t = w(e, i), n = [1, 1], r = t?.objectLeft ?? 0, a = (t?.objectTop ?? 0) - t.popupHeight;
		r + t.popupWidth > t.canvasRight && (r = t?.objectLeft - t.popupWidth, n[0] = -1), a - t.popupHeight < t.canvasTop && (a = t?.objectTop, n[1] = -1);
		let [o, s] = E(n[0], n[1]);
		_(n), m.current.style.left = r + o + "px", m.current.style.top = a + s + "px";
	}, E = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0], D = (e, t) => e > 0 && t > 0 ? "triangle-bottom-left" : e > 0 && t < 0 ? "triangle-top-left" : e < 0 && t > 0 ? "triangle-bottom-right" : "triangle-top-right";
	useEffect(() => {
		T(), e.on("before:render", () => {
			T();
		});
	}, []);
	let O = S?.name.toLowerCase() == "sold" ? l("web.availability.status.Sold") : formatCurrency(o.plotInfo?.price ?? 0, null, v, y, document.documentElement.lang);
	return /* @__PURE__ */ jsxs("div", {
		ref: m,
		onClick: async () => {
			let e = PlanItemTypeEnum[i?.itemType ?? ""], n = "/availability/site-plan", r = document.documentElement.lang;
			if (e === PlanItemTypeEnum.PlotContainer) n = r === "en" ? "" : `/${r}/availability/site-plan/plot-container/${i?.itemId}`, window.location.href = n;
			else if (e === PlanItemTypeEnum.Plot) {
				let e = await generatePlotUrl(i.itemId.toString(), b, $e, et, tt, x, o.plotInfo?.name, o.plotInfo?.bedrooms);
				window.location.href = e;
			}
		},
		className: "cursor-pointer mobile:text-[0.8rem] absolute p-4 bg-thirdLayer text-bodyContentColor touch-none",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "text-[1em] leading-[1.375em] font-bold flex justify-between",
				children: [/* @__PURE__ */ jsx("div", { children: o.plotInfo?.typeName }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1 text-[0.8125em] leading-[1.375em]",
					children: [/* @__PURE__ */ jsx("span", {
						style: { color: S?.color },
						children: l(`${S?.name}`)
					}), /* @__PURE__ */ jsx("svg", {
						width: "16",
						height: "16",
						className: "rtl:rotate-180",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							d: "M11.3546 8.00004C11.3546 7.75416 11.2606 7.54444 11.0726 7.35642L5.43193 1.83868C5.27283 1.67958 5.07758 1.60004 4.84616 1.60004C4.37611 1.60004 4.00006 1.96162 4.00006 2.43168C4.00006 2.66309 4.09407 2.8728 4.25317 3.03913L9.34424 8.00004L4.25317 12.9609C4.1013 13.12 4.00006 13.3298 4.00006 13.5612C4.00006 14.0385 4.37611 14.4 4.84616 14.4C5.07758 14.4 5.27283 14.3205 5.43193 14.1614L11.0726 8.64365C11.2679 8.45563 11.3546 8.24591 11.3546 8.00004Z",
							fill: S?.color
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs leading-[1.375em] text-inActiveBodyContentColor mb-4",
				children: o.plotInfo?.name
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex grid grid-cols-2 gap-[0.7081rem] mobile:gap-[2.125em] whitespace-pre text-[0.75rem]",
				children: [
					v && /* @__PURE__ */ jsxs("div", {
						style: { color: S?.color },
						className: "flex flex-[1] gap-[0.25em] items-center",
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
							children: O
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: S?.color },
						className: "flex gap-[0.25em] items-center",
						children: [/* @__PURE__ */ jsx(BedroomIcon, {
							className: "stroke-footerTextColor",
							width: "1rem"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: o.plotInfo?.bedrooms + ` ${l("web.unit_detail.bedroom")}`
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: S?.color },
						className: "mobile:-mt-[1.625em] flex gap-[0.25em] items-center",
						children: [/* @__PURE__ */ jsx(RulerIcon, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: nt(o.plotInfo?.metricArea ?? 0)
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { color: S?.color },
						className: "mobile:-mt-[1.625em] flex gap-[0.25em] items-center",
						children: [/* @__PURE__ */ jsx(BathroomIcon, {
							className: "stroke-footerTextColor",
							width: "1rem"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-bodyContentColor",
							children: o.plotInfo?.bathrooms + ` ${l("web.unit_detail.bathrooms").toLowerCase()}`
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute w-0 h-0 ${D(h[0], h[1])} ` })
		]
	});
}
function ContainerPlanPopup({ canvas: e, obj: t, item: n, onClickOutside: r, onNavigate: i, formatCurrency: a = (e) => `£${e.toLocaleString()}`, t: o = (e) => e, showPrice: s = !0 }) {
	let l = useRef(null), [m, h] = useState([1, 1]), g = useRef(!1), _ = (e) => {
		l.current && !l.current.contains(e.target) && (e.type === "mousedown" ? (e.preventDefault(), r()) : e.type === "touchmove" ? (e.preventDefault(), g.current = !0) : e.type === "touchend" && (e.preventDefault(), g.current ? g.current = !1 : r()));
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
			popupWidth: l.current?.offsetWidth ?? 0,
			popupHeight: l.current?.offsetHeight ?? 0,
			zoom: r
		};
	}, y = () => {
		if (l.current == null) return;
		let n = v(e, t), r = [1, 1], i = n?.objectLeft ?? 0, a = (n?.objectTop ?? 0) - n.popupHeight;
		i + n.popupWidth > n.canvasRight && (i = n?.objectLeft - n.popupWidth, r[0] = -1), a - n.popupHeight < n.canvasTop && (a = n?.objectTop, r[1] = -1);
		let [o, s] = b(r[0], r[1]);
		h(r), l.current.style.left = i + o + "px", l.current.style.top = a + s + "px";
	}, b = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0, 0];
	return useEffect(() => {
		y(), e.on("before:render", () => {
			y();
		});
	}, []), /* @__PURE__ */ jsxs("div", {
		ref: l,
		onClick: async () => {
			let e = "/availability/site-plan";
			e = `/availability/site-plan/container/${t?.itemId}`, i && i(e);
		},
		className: "cursor-pointer mobile:text-[0.8rem] absolute p-4 bg-thirdLayer text-bodyContentColor touch-none",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-[0.875em] text-[1em] leading-[1.375em] font-bold flex justify-between",
				children: [/* @__PURE__ */ jsx("div", { children: n.plotContainerInfo?.name }), /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-1 text-[0.8125em] leading-[1.375em]",
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
				className: "grid grid-cols-1 whitespace-pre",
				children: [
					s && /* @__PURE__ */ jsxs("div", {
						className: "col-span-1 flex gap-[0.5em] items-center",
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
						className: "col-span-1 flex gap-[0.5em] items-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "text-bodyContentColor",
							children: `${n.plotContainerInfo?.bedroomsMin} ${o("web.unit_detail.bedroom")} - ${n.plotContainerInfo?.bedroomsMax} ${o("web.unit_detail.bedroom")}`
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col-span-1 flex gap-[0.5em] items-center",
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
	let s = useRef(null), [l, m] = useState([1, 1]), h = useRef(!1), g = (e) => {
		s.current && !s.current.contains(e.target) && (e.type === "mousedown" ? (e.preventDefault(), r()) : e.type === "touchmove" ? (e.preventDefault(), h.current = !0) : e.type === "touchend" && (e.preventDefault(), h.current ? h.current = !1 : r()));
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
			popupWidth: s.current?.offsetWidth ?? 0,
			popupHeight: s.current?.offsetHeight ?? 0,
			zoom: n
		};
	}, v = (e, t) => e > 0 && t > 0 ? [10, -20] : e > 0 && t < 0 ? [20, 40] : e < 0 && t > 0 ? [20, -20] : e < 0 && t < 0 ? [10, 40] : [0, 0], y = (e, t) => e > 0 && t > 0 ? "triangle-bottom-left" : e > 0 && t < 0 ? "triangle-top-left" : e < 0 && t > 0 ? "triangle-bottom-right" : "triangle-top-right";
	useEffect(() => {
		let t = () => {
			if (s.current == null) return;
			let t = _(e), n = [1, 1], r = t?.objectLeft ?? 0, i = (t?.objectTop ?? 0) - t.popupHeight;
			r + t.popupWidth > t.canvasRight && (r = t?.objectLeft - t.popupWidth, n[0] = -1), i - t.popupHeight < t.canvasTop && (i = t?.objectTop, n[1] = -1);
			let [a, o] = v(n[0], n[1]);
			m(n), s.current && (s.current.style.left = r + a + "px", s.current.style.top = i + o + "px");
		};
		return t(), e.on("before:render", t), () => {
			e.off("before:render", t);
		};
	}, [t, e]);
	let b = a === "metric" ? n.informations?.[0] : n.informations?.[1];
	return /* @__PURE__ */ jsxs("div", {
		ref: (e) => {
			s.current = e, typeof o == "function" ? o(e) : o && (o.current = e);
		},
		onClick: async () => {
			let e = "/availability/site-plan";
			e = `/availability/site-plan/container/${t?.itemId}`, i && i(e);
		},
		className: "cursor-pointer mobile:text-[0.8rem] absolute p-4 bg-thirdLayer text-bodyContentColor touch-none",
		style: { scale: 1 },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-[0.875em] text-[1em] leading-[1.375em] font-bold flex justify-between",
				children: /* @__PURE__ */ jsx("div", { children: n.name })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 whitespace-pre",
				children: b ?? ""
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute w-0 h-0 ${y(l[0], l[1])}` })
		]
	});
});
FloorViewPopup.displayName = "FloorViewPopup";
var floor_view_popup_default = FloorViewPopup;
function PlanView({ planId: e, objects: t, items: n, background: r, color: i, canvasSubject: a, useHalfWidth: o, onNavigate: l, formatCurrency: _, t: y, showPrice: b, measurementSystem: S }) {
	let w = useRef(null), T = useRef(null), E = useRef(null), D = useRef(null), O = useRef(null), k = useRef(null), A = useRef(null), j = useRef(0), M = useRef(0), N = useRef(!1), rt = useRef(!1), P = useRef(0), F = useRef(1), I = useRef(new PlanItemController(n)), L = useRef(new PlanObjectController(t)), it = useRef(t), R = useRef(""), z = useRef(null), B = useRef(0), H = useRef(0), U = useRef(0), W = useRef(null), [G, K] = useState([]), q = useRef(null), at = () => {
		let e = q.current;
		e && A.current.setDimensions({
			width: e.clientWidth,
			height: e.clientHeight
		});
	}, J = () => {
		at();
		let e = 1;
		if (T.current?.width !== 0 || T.current?.height !== 0) {
			let t = A.current.getWidth() / (o ? 2 : 1), n = T.current.width, r = T.current.height, i = A.current.getHeight(), a = t / n, s = i / r;
			e = Math.min(a, s), A.current.setZoom(e), A.current.absolutePan(new fabric.Point((n * e - t) / 2, (r * e - i) / 2)), F.current = e;
		}
		A.current.renderAll(), z.current = A.current?.viewportTransform;
	};
	useEffect(() => {
		let e = (e) => e.preventDefault(), t = () => J(), n = q.current ?? document, r = document?.getElementById("puck-canvas-root");
		n.addEventListener("gesturestart", e), n.addEventListener("gesturechange", e), n.addEventListener("gestureend", e), window.addEventListener("resize", t);
		let i = null;
		return r && (i = new ResizeObserver(() => {
			J();
		}), i.observe(r)), () => {
			n.removeEventListener("gesturestart", e), n.removeEventListener("gesturechange", e), n.removeEventListener("gestureend", e), window.removeEventListener("resize", t), i && r && (i.unobserve(r), i.disconnect());
		};
	}, [q]), usePinch((e) => {
		let { da: t } = e;
		e.event.preventDefault(), P.current == 0 && (P.current = t[0]);
		let n = t[0] / P.current * A.current.getZoom();
		n > 20 && (n = 20), n < F.current && (n = F.current), A.current.setZoom(n), Q(), P.current = t[0], A.current.renderAll();
	}, { target: W }), useEffect(() => {
		A.current && a && a.attach(() => {
			J();
		}, "onFit");
	}, [a, A.current]), useEffect(() => {
		if (!r?.objectUrl) return;
		let e = typeof window < "u" ? window.document : document;
		return e.addEventListener("gesturestart", (e) => e.preventDefault()), e.addEventListener("gesturechange", (e) => e.preventDefault()), Y(), () => {
			try {
				A.current && (A.current?.dispose(), T.current?.dispose());
			} catch (e) {
				console.error(e);
			}
		};
	}, [r]), useEffect(() => {
		let r = e == R.current;
		if (A.current && r) A.current.remove(...A.current.getObjects()), L.current.deleteObjects(), I.current = new PlanItemController(n), L.current = new PlanObjectController(t), L.current.initContainerObjects(E.current), L.current.containerObjects.forEach((e) => {
			let t = I.current.getItem(e.itemId);
			t && (e.assign(t), A.current.add(e, e.label));
		}), A.current?.requestRenderAll();
		else if (A.current && !r) try {
			A.current && (A.current.remove(...A.current.getObjects()), T.current?.dispose(), L.current.deleteObjects(), I.current = new PlanItemController(n), L.current = new PlanObjectController(t), Y());
		} catch (e) {
			console.error(e);
		}
		it.current = t, R.current = e;
	}, [t]);
	let Y = () => {
		fabric.Image.fromURL(r.objectUrl ?? "", (e) => {
			e.setOptions({
				stroke: "#333333",
				strokeWidth: 0,
				opacity: 1,
				hasBorders: !1
			}), T.current = e, E.current = new fabric.Point(T.current.width ?? 0, T.current.height ?? 0), ct(), ft(T.current?.width ?? 0, T.current?.height ?? 0), J();
		});
	}, ot = (e) => {
		if (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) {
			let t = e.target, n = getPlanItemTypeEnum(I.current.getItem(t.itemId)?.type ?? "");
			n == PlanItemTypeEnum.Room && (k.current = n, X(t));
		}
	}, st = (e) => {
		if ((e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && k.current == PlanItemTypeEnum.Room) {
			let t = D.current?.getBoundingClientRect(), { clientX: n, clientY: r } = e.e;
			if (n >= Math.round((t?.left ?? 0) - 10) && n <= Math.round((t?.right ?? 0) + 10) && r >= Math.round((t?.top ?? 0) - 10) && r <= Math.round((t?.bottom ?? 0) + 10)) return;
			Z();
		}
	}, ct = () => {
		T.current && (A.current, A.current = new fabric.Canvas(w.current, {
			hoverCursor: "move",
			selection: !0,
			selectionBorderColor: "blue",
			backgroundColor: "#cccccc",
			renderOnAddRemove: !1,
			objectCaching: !1,
			backgroundImage: T.current
		}), A.current.backgroundColor = i ?? "#ff00", A.current.selection = !1, A.current.defaultCursor = "grab", A.current.on("mouse:wheel", function(e) {
			let t = e.e.deltaY, n = A.current.getZoom(), r = new fabric.Point(A.current.getWidth() / 2, A.current.getHeight() / 2);
			n *= .999 ** t, n > 20 && (n = 20), n < F.current && (n = F.current);
			let i = A.current.getPointer(e.e), a = new fabric.Point(i.x, i.y), o = fabric.util.transformPoint(a, A.current.viewportTransform);
			A.current.zoomToPoint(r, n);
			let s = fabric.util.transformPoint(a, A.current.viewportTransform), c = new fabric.Point(o.x - s.x, o.y - s.y);
			A.current.relativePan(c), Q(), A.current.renderAll(), e.e.preventDefault(), e.e.stopPropagation();
		}), A.current.on("mouse:move", function(e) {
			N.current && (e.e.type == "mousemove" ? $(e.e.clientX, e.e.clientY) : e.e.touches && e.e.touches.length > 1 || $(e.e.touches[0].clientX, e.e.touches[0].clientY));
		}), A.current.on("mouse:up", dt), A.current.on("mouse:down", ut), A.current.on("mouse:over", ot), A.current.on("mouse:out", st), L.current.initContainerObjects(E.current), L.current.containerObjects.forEach((e) => {
			let t = I.current.getItem(e.itemId);
			if (t) if (e.itemType == "Room") {
				t && e.assign(t);
				let n = e.fill;
				e.fill = "#ff00", e.label = new PlanLabelObject(t.name, n ?? "0x000000", e.left ?? 0, e.top ?? 0, e.width ?? 0, e.height ?? 0, 1, 56), e.label.hideBackground(), e.label.addStroke(), A.current.add(e, e.label);
			} else t && e.assign(t), A.current.add(e, e.label);
		}), A.current.on("mouse:mouseup", (e) => {
			(e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && (X(e.target), A.current?.requestRenderAll());
		}), A.current.requestRenderAll(), rt.current = !0);
	}, lt = async (e) => {
		let t = getPlanItemTypeEnum(e?.itemType ?? ""), n = "/availability/site-plan";
		t === PlanItemTypeEnum.PlotContainer ? (n = `/availability/site-plan/plot-container/${e?.itemId}`, l && l(n)) : t === PlanItemTypeEnum.Plot && (n = `/plot/${e?.itemId}`, l && l(n));
	}, X = (e) => {
		let t = I.current.getItem(e.itemId), n = getPlanItemTypeEnum(t?.type ?? "");
		switch (k.current = n, n) {
			case PlanItemTypeEnum.Plot:
				K([/* @__PURE__ */ jsx(PlanViewPopup, {
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						Z();
					}
				}, "container_element")]);
				break;
			case PlanItemTypeEnum.PlotContainer:
				K([/* @__PURE__ */ jsx(ContainerPlanPopup, {
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						Z();
					},
					onNavigate: l,
					formatCurrency: _,
					t: y,
					showPrice: b
				}, "container_element")]);
				break;
			case PlanItemTypeEnum.Room:
				K([/* @__PURE__ */ jsx(floor_view_popup_default, {
					ref: D,
					canvas: A.current,
					obj: e,
					item: t,
					onClickOutside: () => {
						Z();
					},
					onNavigate: l,
					measurementSystem: S
				}, "container_element")]);
				break;
		}
	}, Z = useCallback(() => {
		k.current = null, K([]), O.current = null;
	}, [G]), ut = (e) => {
		N.current = !0, e.e.type.includes("mouse") && (j.current = e.e.clientX, M.current = e.e.clientY), e.e.type.includes("touch") && (j.current = e.e.touches[0].clientX, M.current = e.e.touches[0].clientY), (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && O.current && O.current.itemId == e.target.itemId ? lt(O.current) : (e.target instanceof PlanRectangleObject || e.target instanceof PlanCircleObject || e.target instanceof PlanPolygonObject) && setTimeout(() => {
			X(e.target), A.current?.requestRenderAll();
		}, 150);
	}, dt = (e) => {
		N.current = !1, A.current?.fire("canvas:dragEnd"), P.current = 0;
	}, ft = (e, t) => {
		B.current = e, H.current = t;
	}, Q = () => {
		Date.now() - U.current < 8 || (U.current = Date.now(), pt(), A.current?.requestRenderAll());
	}, pt = () => {
		if (B.current === 0 || H.current === 0 || !A.current?.viewportTransform) return;
		let e = A.current?.viewportTransform, t = A.current?.getZoom(), n = A.current?.getWidth(), r = B.current, i = H.current, a = A.current?.getHeight(), o = z.current[4], s = z.current[5];
		e[4] >= z.current[4] ? A.current.viewportTransform[4] = z.current[4] : e[4] < n - r * t - o && (A.current.viewportTransform[4] = n - r * t - o), e[5] >= z.current[5] ? A.current.viewportTransform[5] = z.current[5] : e[5] < a - i * t - s && (A.current.viewportTransform[5] = a - i * t - s);
	}, $ = (e, t) => {
		if (A.current?.getZoom() == F.current) return;
		let n = new fabric.Point(e - j.current, t - M.current);
		A.current.relativePan(n), Q(), A.current?.requestRenderAll(), j.current = e, M.current = t;
	};
	return /* @__PURE__ */ jsx("div", {
		className: "w-full max-w-[1440px] mb-[7.5rem] mobile:mb-[9rem] mx-auto xl:h-[600px] h-[300px] overflow-hidden",
		ref: q,
		children: /* @__PURE__ */ jsxs("div", {
			ref: W,
			className: "relative",
			children: [G.map((e) => createPortal(e, W.current)), /* @__PURE__ */ jsx("canvas", { ref: w })]
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
function PlanViewWrapper(t) {
	let { planId: n, objects: r, background: i, color: a, elementId: o = "canvas_container", useHalfWidth: s = !1, showPrice: l = !0, measurementSystem: u = "metric" } = t, [p, m] = useState(null), h = usePlotRepository();
	useEffect(() => {
		h.fetchSitePlan().then((e) => {
			m(e);
		});
	}, []);
	let g = [], _ = null;
	try {
		g = typeof r == "string" ? r ? JSON.parse(r) : [] : r || [], _ = typeof i == "string" ? i ? JSON.parse(i) : null : i;
	} catch (e) {
		return console.error("Error parsing PlanView props:", e), /* @__PURE__ */ jsx("div", {
			className: "p-4 text-red-600",
			children: "Error: Invalid JSON data for PlanView component"
		});
	}
	return !_ || !n ? /* @__PURE__ */ jsx("div", {
		className: "w-full h-[600px] flex items-center justify-center p-4",
		children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-4 border-gray-200 border-t-[#5ec6d3] rounded-full animate-spin" })
	}) : /* @__PURE__ */ jsx(PlanView, {
		planId: n,
		objects: g,
		items: p?.plan.items ?? [],
		background: _,
		color: a,
		elementId: o,
		useHalfWidth: s,
		showPrice: l,
		measurementSystem: u
	}, p?.plan.id ?? "siteplan");
}
export { CanvasSubject, ContainerPlanPopup, floor_view_popup_default as FloorViewPopup, PlanCircleObject, PlanItemController, PlanItemTypeEnum, PlanLabelObject, PlanObjectController, PlanObjectTypeEnum, PlanPolygonObject, PlanRectangleObject, PlanView, PlanViewPopup, PlanViewWrapper };
