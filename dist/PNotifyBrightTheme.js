var PNotifyBrightTheme =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PNotifyBrightTheme.css");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PNotifyBrightTheme.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PNotifyBrightTheme.css ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*\\nColor Scheme: http://paletton.com/palette.php?uid=c1T3n2J040kpEKzpEKzbEPSOEyiNk9W\\nIcons: https://materialdesignicons.com/\\nFor calculating icon filters, use: https://codepen.io/sosuke/pen/Pjoqqp\\n*/\\n[data-pnotify].brighttheme-elem {\\n  -webkit-border-radius: 0;\\n  -moz-border-radius: 0;\\n  border-radius: 0;\\n  --notice-primary-button-background-color: var(--notice-border-color);\\n  --notice-primary-button-text-color: var(--notice-text-color);\\n  --info-primary-button-background-color: var(--info-border-color);\\n  --info-primary-button-text-color: var(--info-text-color);\\n  --success-primary-button-background-color: var(--success-border-color);\\n  --success-primary-button-text-color: var(--success-text-color);\\n  --error-primary-button-background-color: var(--error-border-color);\\n  --error-primary-button-text-color: var(--error-text-color);\\n}\\n[data-pnotify].brighttheme-elem,\\n[data-pnotify].brighttheme-elem.pnotify-mode-light {\\n  --notice-background-color: #FFFFA2;\\n  --notice-border-color: #FFFF00;\\n  --notice-text-color: #4F4F00;\\n  --notice-icon-filter: invert(25%) sepia(12%) saturate(7007%) hue-rotate(38deg) brightness(99%) contrast(101%);\\n  --info-background-color: #8FCEDD;\\n  --info-border-color: #0286A5;\\n  --info-text-color: #012831;\\n  --info-icon-filter: invert(11%) sepia(37%) saturate(1946%) hue-rotate(155deg) brightness(95%) contrast(99%);\\n  --success-background-color: #AFF29A;\\n  --success-border-color: #35DB00;\\n  --success-text-color: #104300;\\n  --success-icon-filter: invert(17%) sepia(94%) saturate(1055%) hue-rotate(70deg) brightness(90%) contrast(103%);\\n  --error-background-color: #FFABA2;\\n  --error-border-color: #FF1800;\\n  --error-text-color: #4F0800;\\n  --error-icon-filter: invert(9%) sepia(27%) saturate(7347%) hue-rotate(359deg) brightness(96%) contrast(108%);\\n}\\n@media (prefers-color-scheme: dark) {\\n  [data-pnotify].brighttheme-elem.pnotify-mode-no-preference {\\n    --notice-background-color: #4F4F00;\\n    --notice-border-color: #282814;\\n    --notice-text-color: #FFFFA2;\\n    --notice-icon-filter: invert(92%) sepia(18%) saturate(781%) hue-rotate(6deg) brightness(106%) contrast(107%);\\n    --info-background-color: #012831;\\n    --info-border-color: #0C1618;\\n    --info-text-color: #8FCEDD;\\n    --info-icon-filter: invert(85%) sepia(14%) saturate(933%) hue-rotate(153deg) brightness(92%) contrast(87%);\\n    --success-background-color: #104300;\\n    --success-border-color: #152111;\\n    --success-text-color: #AFF29A;\\n    --success-icon-filter: invert(90%) sepia(9%) saturate(1647%) hue-rotate(52deg) brightness(103%) contrast(90%);\\n    --error-background-color: #4F0800;\\n    --error-border-color: #281614;\\n    --error-text-color: #FFABA2;\\n    --error-icon-filter: invert(70%) sepia(24%) saturate(717%) hue-rotate(315deg) brightness(103%) contrast(104%);\\n  }\\n}\\n[data-pnotify].brighttheme-elem.pnotify-mode-dark {\\n  --notice-background-color: #4F4F00;\\n  --notice-border-color: #282814;\\n  --notice-text-color: #FFFFA2;\\n  --notice-icon-filter: invert(92%) sepia(18%) saturate(781%) hue-rotate(6deg) brightness(106%) contrast(107%);\\n  --info-background-color: #012831;\\n  --info-border-color: #0C1618;\\n  --info-text-color: #8FCEDD;\\n  --info-icon-filter: invert(85%) sepia(14%) saturate(933%) hue-rotate(153deg) brightness(92%) contrast(87%);\\n  --success-background-color: #104300;\\n  --success-border-color: #152111;\\n  --success-text-color: #AFF29A;\\n  --success-icon-filter: invert(90%) sepia(9%) saturate(1647%) hue-rotate(52deg) brightness(103%) contrast(90%);\\n  --error-background-color: #4F0800;\\n  --error-border-color: #281614;\\n  --error-text-color: #FFABA2;\\n  --error-icon-filter: invert(70%) sepia(24%) saturate(717%) hue-rotate(315deg) brightness(103%) contrast(104%);\\n}\\n[data-pnotify] .brighttheme-container {\\n  padding: 1.3rem;\\n}\\n[data-pnotify].pnotify-with-icon .brighttheme-content {\\n  margin-left: calc(1.3rem + 16px);\\n}\\n[dir=rtl] [data-pnotify].pnotify-with-icon .brighttheme-content {\\n  margin-right: calc(1.3rem + 16px);\\n  margin-left: 0;\\n}\\n[data-pnotify] .brighttheme-title {\\n  font-size: 1.2rem;\\n  line-height: 1.4rem;\\n  margin-top: -.1rem;\\n  margin-bottom: 0;\\n}\\n[data-pnotify] .brighttheme-text {\\n  font-size: 1rem;\\n  line-height: 1.2rem;\\n  margin-top: 0;\\n}\\n[data-pnotify] .brighttheme-title + .brighttheme-text,\\n[data-pnotify] .brighttheme-confirm {\\n  margin-top: 1rem;\\n}\\n[data-pnotify] .brighttheme-icon,\\n[data-pnotify] .brighttheme-closer,\\n[data-pnotify] .brighttheme-sticker {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n[data-pnotify] .brighttheme-icon,\\n[data-pnotify] .brighttheme-icon > span,\\n[data-pnotify] .brighttheme-icon > span:after {\\n  width: 1.2rem;\\n  height: 1.2rem;\\n  line-height: 1.2rem;\\n}\\n[data-pnotify] .brighttheme-icon-closer,\\n[data-pnotify] .brighttheme-icon-sticker,\\n[data-pnotify] .brighttheme-icon-closer:after,\\n[data-pnotify] .brighttheme-icon-sticker:after {\\n  width: 1rem;\\n  height: 1rem;\\n  line-height: 1rem;\\n}\\n\\n[data-pnotify] .brighttheme-notice {\\n  background-color: var(--notice-background-color);\\n  border: 0 solid var(--notice-border-color);\\n  color: var(--notice-text-color);\\n}\\n[data-pnotify] .brighttheme-info {\\n  background-color: var(--info-background-color);\\n  border: 0 solid var(--info-border-color);\\n  color: var(--info-text-color);\\n}\\n[data-pnotify] .brighttheme-success {\\n  background-color: var(--success-background-color);\\n  border: 0 solid var(--success-border-color);\\n  color: var(--success-text-color);\\n}\\n[data-pnotify] .brighttheme-error {\\n  background-color: var(--error-background-color);\\n  background-image: repeating-linear-gradient(135deg, transparent, transparent 35px, rgba(255,255,255,.3) 35px, rgba(255,255,255,.3) 70px);\\n  border: 0 solid var(--error-border-color);\\n  color: var(--error-text-color);\\n}\\n[data-pnotify] .brighttheme-icon-notice,\\n[data-pnotify] .brighttheme-notice .brighttheme-icon-closer,\\n[data-pnotify] .brighttheme-notice .brighttheme-icon-sticker {\\n  filter: var(--notice-icon-filter);\\n}\\n[data-pnotify] .brighttheme-icon-info,\\n[data-pnotify] .brighttheme-info .brighttheme-icon-closer,\\n[data-pnotify] .brighttheme-info .brighttheme-icon-sticker {\\n  filter: var(--info-icon-filter);\\n}\\n[data-pnotify] .brighttheme-icon-success,\\n[data-pnotify] .brighttheme-success .brighttheme-icon-closer,\\n[data-pnotify] .brighttheme-success .brighttheme-icon-sticker {\\n  filter: var(--success-icon-filter);\\n}\\n[data-pnotify] .brighttheme-icon-error,\\n[data-pnotify] .brighttheme-error .brighttheme-icon-closer,\\n[data-pnotify] .brighttheme-error .brighttheme-icon-sticker {\\n  filter: var(--error-icon-filter);\\n}\\n[data-pnotify] .brighttheme-icon-notice:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMsMTNIMTFWN0gxM00xMywxN0gxMVYxNUgxM00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiLz48L3N2Zz4=);\\n}\\n[data-pnotify] .brighttheme-icon-info:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMsOUgxMVY3SDEzTTEzLDE3SDExVjExSDEzTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIvPjwvc3ZnPg==);\\n}\\n[data-pnotify] .brighttheme-icon-success:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEwIDE3TDUgMTJMNi40MSAxMC41OUwxMCAxNC4xN0wxNy41OSA2LjU4TDE5IDhMMTAgMTdaIi8+PC9zdmc+);\\n}\\n[data-pnotify] .brighttheme-icon-error:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMsMTRIMTFWMTBIMTNNMTMsMThIMTFWMTZIMTNNMSwyMUgyM0wxMiwyTDEsMjFaIi8+PC9zdmc+);\\n}\\n[data-pnotify] .brighttheme-icon-closer:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaIi8+PC9zdmc+);\\n}\\n[data-pnotify] .brighttheme-icon-sticker:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYsMTJWNEgxN1YySDdWNEg4VjEyTDYsMTRWMTZIMTEuMlYyMkgxMi44VjE2SDE4VjE0TDE2LDEyWiIvPjwvc3ZnPg==);\\n}\\n[data-pnotify] .brighttheme-icon-sticker.brighttheme-icon-stuck:after {\\n  content: url(data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiw1LjI3TDMuMjgsNEwyMCwyMC43MkwxOC43MywyMkwxMi44LDE2LjA3VjIySDExLjJWMTZINlYxNEw4LDEyVjExLjI3TDIsNS4yN00xNiwxMkwxOCwxNFYxNkgxNy44Mkw4LDYuMThWNEg3VjJIMTdWNEgxNlYxMloiLz48L3N2Zz4=);\\n}\\n\\n[data-pnotify] .brighttheme-prompt-bar {\\n  margin-bottom: 1rem;\\n}\\n[data-pnotify] .brighttheme-prompt-bar,\\n[data-pnotify] .brighttheme-action-bar {\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n[data-pnotify] .brighttheme-btn {\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  padding: .4rem 1rem;\\n  border: none;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\\n[data-pnotify] .brighttheme-notice .brighttheme-btn {\\n  color: var(--notice-text-color);\\n}\\n[data-pnotify] .brighttheme-notice .brighttheme-btn-primary {\\n  background-color: var(--notice-primary-button-background-color);\\n  color: var(--notice-primary-button-text-color);\\n}\\n[data-pnotify] .brighttheme-info .brighttheme-btn {\\n  color: var(--info-text-color);\\n}\\n[data-pnotify] .brighttheme-info .brighttheme-btn-primary {\\n  background-color: var(--info-primary-button-background-color);\\n  color: var(--info-primary-button-text-color);\\n}\\n[data-pnotify] .brighttheme-success .brighttheme-btn {\\n  color: var(--success-text-color);\\n}\\n[data-pnotify] .brighttheme-success .brighttheme-btn-primary {\\n  background-color: var(--success-primary-button-background-color);\\n  color: var(--success-primary-button-text-color);\\n}\\n[data-pnotify] .brighttheme-error .brighttheme-btn {\\n  color: var(--error-text-color);\\n}\\n[data-pnotify] .brighttheme-error .brighttheme-btn-primary {\\n  background-color: var(--error-primary-button-background-color);\\n  color: var(--error-primary-button-text-color);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/PNotifyBrightTheme.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/PNotifyBrightTheme.css":
/*!************************************!*\
  !*** ./src/PNotifyBrightTheme.css ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PNotifyBrightTheme.css */ \"./node_modules/css-loader/dist/cjs.js!./src/PNotifyBrightTheme.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://%5Bname%5D/./src/PNotifyBrightTheme.css?");

/***/ })

/******/ });