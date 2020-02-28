var PNotifyMaterial =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PNotifyMaterial.css");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/PNotifyMaterial.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/PNotifyMaterial.css ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*\\nColor Scheme: https://www.google.com/design/spec/style/color.html#color-color-palette\\nRequires stylesheet to work: https://fonts.googleapis.com/css?family=Material+Icons\\n*/\\n[data-pnotify].material-elem,\\n[data-pnotify].material-elem.pnotify-mode-light {\\n  /* https://material.io/design/color/the-color-system.html#tools-for-picking-colors */\\n  --notice-background-color: #FFF59D;\\n  --notice-text-color: #000;\\n  --info-background-color: #9dfff5;\\n  --info-text-color: #000;\\n  --success-background-color: #a7ff9d;\\n  --success-text-color: #000;\\n  --error-background-color: #ffc49d;\\n  --error-text-color: #000;\\n  --primary-button-text-color: #3F51B5;\\n  --primary-button-text-focus-color: #303F9F;\\n  --input-focus-underline-color: #3F51B5;\\n\\n  -webkit-border-radius: 0;\\n  -moz-border-radius: 0;\\n  border-radius: 0;\\n  font-size: 14px;\\n}\\n@media (prefers-color-scheme: dark) {\\n  [data-pnotify].material-elem.pnotify-mode-no-preference {\\n    --notice-background-color: #FF8F00;\\n    --notice-text-color: #FFF;\\n    --info-background-color: #006eff;\\n    --info-text-color: #FFF;\\n    --success-background-color: #00c000;\\n    --success-text-color: #FFF;\\n    --error-background-color: #ff1100;\\n    --error-text-color: #FFF;\\n    --primary-button-text-color: #E1F5FE;\\n    --primary-button-text-focus-color: #E0F7FA;\\n    --input-focus-underline-color: #E1F5FE;\\n  }\\n}\\n[data-pnotify].material-elem.pnotify-mode-dark {\\n  --notice-background-color: #FF8F00;\\n  --notice-text-color: #FFF;\\n  --info-background-color: #006eff;\\n  --info-text-color: #FFF;\\n  --success-background-color: #00c000;\\n  --success-text-color: #FFF;\\n  --error-background-color: #ff1100;\\n  --error-text-color: #FFF;\\n  --primary-button-text-color: #E1F5FE;\\n  --primary-button-text-focus-color: #E0F7FA;\\n  --input-focus-underline-color: #E1F5FE;\\n}\\n[data-pnotify].material-elem.pnotify-shadow {\\n  -webkit-box-shadow: 0px 6px 24px 0px rgba(0,0,0,0.2);\\n  -moz-box-shadow: 0px 6px 24px 0px rgba(0,0,0,0.2);\\n  box-shadow: 0px 6px 24px 0px rgba(0,0,0,0.2);\\n}\\n[data-pnotify] .material-container {\\n  padding: 24px;\\n}\\n[data-pnotify] .material-title {\\n  font-size: 20px;\\n  margin-bottom: 20px;\\n  line-height: 24px;\\n}\\n[data-pnotify] .material-title:last-child {\\n  margin-bottom: 0;\\n}\\n[data-pnotify] .material-text {\\n  font-size: 16px;\\n  line-height: 24px;\\n}\\n[data-pnotify].pnotify-with-icon .material-content {\\n  margin-left: 32px;\\n}\\n[dir=rtl] [data-pnotify].pnotify-with-icon .material-content {\\n  margin-right: 32px;\\n  margin-left: 0;\\n}\\n[data-pnotify] .material-icon,\\n[data-pnotify] .material-closer,\\n[data-pnotify] .material-sticker,\\n[data-pnotify] .material-icon > span:after,\\n[data-pnotify] .material-icon-closer:after,\\n[data-pnotify] .material-icon-sticker:after {\\n  font-family: 'Material Icons';\\n  height: 20px;\\n  width: 20px;\\n  font-size: 20px;\\n  line-height: 24px;\\n  position: relative;\\n}\\n[data-pnotify] .material-action-bar {\\n  margin-top: 20px;\\n  margin-right: -16px;\\n  margin-bottom: -16px;\\n}\\n[dir=rtl] [data-pnotify] .material-action-bar {\\n  margin-left: -16px;\\n  margin-right: 0;\\n}\\n\\n[data-pnotify] .material-notice {\\n  background-color: var(--notice-background-color);\\n  border: none;\\n  color: var(--notice-text-color);\\n}\\n[data-pnotify] .material-info {\\n  background-color: var(--info-background-color);\\n  border: none;\\n  color: var(--info-text-color);\\n}\\n[data-pnotify] .material-success {\\n  background-color: var(--success-background-color);\\n  border: none;\\n  color: var(--success-text-color);\\n}\\n[data-pnotify] .material-error {\\n  background-color: var(--error-background-color);\\n  border: none;\\n  color: var(--error-text-color);\\n}\\n[data-pnotify] .material-icon-notice:after {\\n  content: \\\"priority_high\\\";\\n}\\n[data-pnotify] .material-icon-info:after {\\n  content: \\\"info\\\";\\n}\\n[data-pnotify] .material-icon-success:after {\\n  content: \\\"done\\\";\\n}\\n[data-pnotify] .material-icon-error:after {\\n  content: \\\"error\\\";\\n}\\n[data-pnotify] .material-icon-closer:after {\\n  content: \\\"close\\\";\\n}\\n[data-pnotify] .material-icon-unstuck:after {\\n  content: \\\"pause\\\";\\n}\\n[data-pnotify] .material-icon-stuck:after {\\n  content: \\\"play_arrow\\\";\\n}\\n\\n[data-pnotify] .material-input {\\n  display: block;\\n  width: 100%;\\n  margin-bottom: 8px;\\n\\n  padding: 15px 0 8px;\\n  background-color: transparent;\\n  color: inherit;\\n  border-radius: 0;\\n\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n  border-bottom-style: solid;\\n  border-bottom-color: inherit;\\n  border-bottom-width: 1px;\\n}\\n[data-pnotify] .material-input:focus {\\n  outline: none;\\n  border-bottom-color: var(--input-focus-underline-color);\\n  border-bottom-width: 2px;\\n}\\n\\n/* CSS Material Buttons from https://codepen.io/sebj54/pen/oxluI */\\n[data-pnotify] .material-btn {\\n  position: relative;\\n\\n  padding: 0 16px;\\n\\n  overflow: hidden;\\n\\n  border-width: 0;\\n  outline: none;\\n  border-radius: 2px;\\n\\n  background-color: transparent;\\n  color: inherit;\\n\\n  transition: background-color .3s;\\n\\n  text-transform: uppercase;\\n  height: 36px;\\n  margin: 6px;\\n  min-width: 64px;\\n  font-weight: bold;\\n}\\n[data-pnotify] .material-btn.material-btn-primary {\\n  color: var(--primary-button-text-color);\\n}\\n[data-pnotify] .material-btn:hover,\\n[data-pnotify] .material-btn:focus {\\n  background-color: rgba(0, 0, 0, .12);\\n  color: inherit;\\n}\\n[data-pnotify] .material-btn.material-btn-primary:hover,\\n[data-pnotify] .material-btn.material-btn-primary:focus {\\n  color: var(--primary-button-text-focus-color);\\n}\\n[data-pnotify] .material-btn:before {\\n  content: \\\"\\\";\\n\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n\\n  display: block;\\n  width: 0;\\n  padding-top: 0;\\n\\n  border-radius: 100%;\\n\\n  background-color: rgba(153, 153, 153, .4);\\n\\n  -webkit-transform: translate(-50%, -50%);\\n  -moz-transform: translate(-50%, -50%);\\n  -ms-transform: translate(-50%, -50%);\\n  -o-transform: translate(-50%, -50%);\\n  transform: translate(-50%, -50%);\\n}\\n[data-pnotify] .material-btn:active:before {\\n  width: 120%;\\n  padding-top: 120%;\\n\\n  transition: width .2s ease-out, padding-top .2s ease-out;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/PNotifyMaterial.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/PNotifyMaterial.css":
/*!*********************************!*\
  !*** ./src/PNotifyMaterial.css ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./PNotifyMaterial.css */ \"./node_modules/css-loader/dist/cjs.js!./src/PNotifyMaterial.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://%5Bname%5D/./src/PNotifyMaterial.css?");

/***/ })

/******/ });