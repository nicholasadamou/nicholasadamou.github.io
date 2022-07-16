var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
	appDir: '_app',
	assets: /* @__PURE__ */ new Set([
		'.DS_Store',
		'demo.png',
		'hero.png',
		'logos/blackbird.png',
		'logos/ibm.png',
		'websites/nicholas-adamou-desktop.png',
		'websites/nicholas-adamou-mobile.png',
		'websites/vineyard-vines-sales-desktop.png',
		'websites/wifi-card-desktop.png'
	]),
	mimeTypes: { '.png': 'image/png' },
	_: {
		entry: {
			file: 'immutable/start-27f43772.js',
			imports: [
				'immutable/start-27f43772.js',
				'immutable/chunks/index-4432b0ee.js',
				'immutable/chunks/preload-helper-19022909.js'
			],
			stylesheets: []
		},
		nodes: [
			() => Promise.resolve().then(() => __toESM(require('./nodes/0.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/1.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/2.js')))
		],
		routes: [
			{
				type: 'page',
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				path: '/',
				shadow: null,
				a: [0, 2],
				b: [1]
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
