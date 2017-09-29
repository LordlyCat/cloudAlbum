webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Serif;\n}\n\n.wrapper {\n    position: relative;\n    margin: auto;\n    margin-top: 99px;\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.wrapper img {\n    display: inline-block;\n    width: 300px;\n    border: solid 2px pink;\n    border-radius: 2%;\n    position: absolute;\n}\n\n.loading {\n    display: block;\n    position: absolute;\n}\n\nheader {\n    width: 100%;\n    height: 60px;\n    background: #d6ecfd;\n    box-shadow: 0px 3px 15px 2px lightgray;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n}\n\nheader div {\n    display: inline-block;\n    line-height: 60px;\n}\n\nheader .home {\n    font-family: Serif;\n    font-size: 35px;\n    line-height: 60px;\n    margin-left: 4%;\n    cursor: pointer;\n}\n\nheader .function {\n    width: 30%;\n    height: 100%;\n    float: right;\n    position: relative;\n}\n\nheader .user {\n    width: 125px;\n    height: 100%;\n    font-size: 20px;\n    line-height: 60px;\n    text-align: right;\n    float: left;\n    overflow: hidden;\n    cursor: pointer;\n}\n\nheader .pullIcon {\n    margin-left: -5px;\n    margin-top: 14px;\n    cursor: pointer;\n    float: left;\n}\n\n.signIn,\n.signOut {\n    height: 100%;\n    cursor: pointer;\n    float: left;\n    overflow: hidden;\n}\n\n.signIn {\n    margin-left: 20%;\n}\n\n.signOut {\n    margin-left: 8%;\n}\n\nheader .board {\n    display: none;\n    width: 140px;\n    height: 200px;\n    background: white;\n    position: absolute;\n    left: 30px;\n    top: 55px;\n    box-shadow: 0px 10px 20px 2px lightgray;\n}\n\nheader .board div {\n    display: block;\n    height: 40px;\n    line-height: 40px;\n    border-bottom: solid 1px lightgray;\n    text-align: center;\n    cursor: pointer;\n}\n\nheader .board div:hover {\n    background: rgba(100, 40, 80, 0.3);\n    color: white;\n}\n\n.triangle {\n    display: none;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 13px solid transparent;\n    border-bottom: 13px solid white;\n    top: 42px;\n    left: 110px;\n    z-index: 99999;\n}\n\n\n.album {\n    display: block;\n    width: 1150px;\n    margin: auto;\n    margin-top: 70px;\n}\n\n.album div.albumBox,\n.add {\n    display: inline-block;\n    width: 240px;\n    height: 300px;\n    box-shadow: 0px 10px 20px 2px lightgray;\n    margin-left: 35px;\n    margin-top: 50px;\n    overflow: hidden;\n}\n\n.album div.cover {\n    width: 100%;\n    height: 240px;\n    background: url(" + __webpack_require__(4) + ") no-repeat;\n    background-size: 40%;\n    background-position: center;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.album div.cover img {\n    height: 100%;\n    width: 100%;\n}\n\n\n.album .albumName {\n    font-size: 22px;\n    margin-left: 5%;\n}\n\n.album .time,\n.album .status {\n    display: inline-block;\n    opacity: 0.5;\n}\n\n.album .time {\n    margin-left: 5%;\n}\n\n.album .status {\n    float: right;\n    margin-right: 6%;\n}\n\n.add img {\n    display: block;\n    width: 80px;\n    margin: auto;\n    margin-top: 34%;\n    cursor: pointer;\n}\n\n.add p {\n    font-size: 26px;\n    text-align: center;\n    margin-top: 20%;\n    opacity: 0.4;\n}\n\n.album .create {\n    display: none;\n    width: 500px;\n    height: 350px;\n    position: fixed;\n    background: white;\n    left: 30%;\n    top: 26%;\n    box-shadow: 0px 10px 20px 2px lightgray;\n    opacity: 0;\n    transition: opacity 2s;\n    z-index: 999999999;\n}\n\n.fullCover {\n    display: none;\n    position: fixed;\n    width: 100%;\n    background: lightgray;\n    opacity: 0.75;\n    top: 0;\n    left: 0;\n    z-index: 9999999;\n}\n\n.create .top {\n    width: 100%;\n    height: 45px;\n    background: #f4f9f9;\n}\n\n.create .top p {\n    display: inline-block;\n    float: left;\n    line-height: 45px;\n    margin-left: 4%;\n}\n\n.create .out {\n    float: right;\n    height: 100%;\n    width: 45px;\n    background: url(" + __webpack_require__(5) + ") no-repeat;\n    background-size: 70%;\n    background-position: 0px 5px;\n    cursor: pointer;\n}\n\n.name,\n.permission {\n    width: 70%;\n    height: 40px;\n    margin: auto;\n    margin-top: 40px;\n}\n\n.albumSetting p {\n    float: left;\n    font-size: 20px;\n    line-height: 40px;\n}\n\n.albumSetting input {\n    float: right;\n    width: 220px;\n    height: 36px;\n    font-size: 20px;\n}\n\nselect {\n    width: 220px;\n    height: 30px;\n    float: right;\n}\n\n.btn {\n    width: 70%;\n    height: 26px;\n    margin: auto;\n    margin-top: 80px;\n}\n\n.btn div {\n    width: 60px;\n    height: 100%;\n    float: right;\n    background: white;\n    text-align: center;\n    border-radius: 10%;\n    margin-right: 4%;\n    box-shadow: 0px 10px 20px 2px lightgray;\n    cursor: pointer;\n}\n\n.btn div:hover {\n    background: #40abd5;\n    color: white;\n}\n\n\n.showPicture {\n    display: none;\n    width: 1150px;\n    margin: auto;\n    margin-top: 110px;\n}\n\n.showPicture div {\n    display: inline-block;\n}\n\n.bar {\n    width: 100%;\n    height: 60px;\n    background: rgba(90, 190, 250, 0.16);\n}\n\n.showPicture .upload {\n    width: 100px;\n    height: 35px;\n    margin-left: 40px;\n    margin-top: 1%;\n    float: left;\n    color: white;\n    font-family: 圆体;\n    text-align: center;\n    line-height: 35px;\n    background: #1da1f2;\n    border-radius: 8%;\n    cursor: pointer;\n}\n\n.showPicture .upload:hover {}\n\n.showPicture .albumName {\n    float: left;\n    height: 100%;\n    font-size: 35px;\n    line-height: 35px;\n    margin-left: 5%;\n    margin-top: 1%;\n}\n\n.showPicture .num {\n    font-size: 15px;\n    line-height: 25px;\n    margin-left: 5%;\n    margin-top: 2%;\n}\n\n.showPicture .delete {\n    height: 35px;\n    width: 70px;\n    font-size: 20px;\n    text-align: center;\n    line-height: 35px;\n    background: white;\n    box-shadow: 0px 5px 5px 1px gray;\n    float: right;\n    margin-top: 1%;\n    margin-right: 3%;\n    cursor: pointer;\n}\n\n.showPicture .back{\n\twidth: 100px;\n\theight: 35px;\n\tfloat: right;\n\tcolor: blue;\n\tfont-size: 21px;\n\tline-height: 35px;\n\ttext-decoration: underline;\n\tmargin-right: 5%;\n\tmargin-top: 1%;\n\tcursor: pointer;\n\t\n}\n\n.showPicture .pictures {\n    width: 100%;\n    margin-top: 50px;\n}\n\n\n\n\n\n\n\n\n/*The end*/", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ui_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_ui_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_Ajax_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_Ajax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_Ajax_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_pullDown_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_pullDown_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icon_pullDown_png__);




//const requireContext = require.context("../img/", true, /^\.\/.*\.jpg$/);
//const imgArr = requireContext.keys().map(requireContext);


var heightArr = [];

function getMinBoxIndex(val, arr) {
    for (var i in arr) {
        if (val === arr[i]) {
            return i;
        }
    }
}

// var wrapper = document.querySelector('.wrapper');
// for (var i = 0; i < imgArr.length; i++) {
//     var img = document.createElement('img');
//     img.src = imgArr[i];
//     wrapper.appendChild(img);
// }

// var imgDOM = wrapper.querySelectorAll('img');
// var loading = document.querySelector('.loading');


//等待图片加载完毕
var n = 0;
// for (var i = 0; i < imgArr.length; i++) {
//     imgDOM[i].onload = function() {
//         if (n < imgDOM.length) {
//             n++;
//             loading.style.display = 'inline-block';
//         }
//         if (n === imgDOM.length) {
//             show();
//             wrapper.style.opacity = 1;
//             loading.style.display = 'none';
//         }
//     }
// }

//排列图片
function show() {
    var col = 4; //列数
    for (var i = 0; i < imgArr.length; i++) {
        if (i <= col - 1 && i !== 0) {
            heightArr.push(imgDOM[i].height);
            imgDOM[i].style.left = 310 * i + 'px';
        } else if (i === 0) {
            heightArr.push(imgDOM[i].height);
            imgDOM[i].style.left = '0px';
        } else {
            //求出最矮的队列高度
            var minHeight = Math.min.apply(null, heightArr);
            //求出最矮队列对应的索引
            var minIndex = getMinBoxIndex(minHeight, heightArr);
            if (minIndex == 0) {
                imgDOM[i].style.left = '0px';
            } else {
                imgDOM[i].style.left = 310 * minIndex + 'px';
            }
            imgDOM[i].style.top = minHeight + 15 + 'px';
            heightArr[minIndex] += (imgDOM[i].height + 15);
            //求出最高的队列高度
            var maxHeight = Math.max.apply(null, heightArr);
            wrapper.style.width = 310 * col - 10 + 'px';
            wrapper.style.height = maxHeight + 10 + 'px';
        }
    }
}


var imgInput = document.querySelector('input');

__WEBPACK_IMPORTED_MODULE_2__js_Ajax_js___default()({
    url: '/',
    method: 'POST',
    
    data: {
        0: 2
    },
    contentType: 'application/x-www-form-urlencoded',
    success: function (data) {
        console.log(data);
    },
    error: function () {
        console.log(0);
    }
})



//The end

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(0);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(0, function() {
			var newContent = __webpack_require__(0);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var user = document.querySelector('.user');
var board = document.querySelector('.board');
var pullIcon = document.querySelector('.pullIcon');
var triangle = document.querySelector('.triangle');
var fullCover = document.querySelector('.fullCover');
var create = document.querySelector('.create');
var add = document.querySelector('.add');
var addButton = add.querySelector('img');
var out = create.querySelector('.out');
var cancel = create.querySelector('.cancel');
var albumNameInput = create.querySelector('input');
var selected = document.querySelector('select');
var album = document.querySelector('.album');
var showBorad = document.querySelector('.showPicture');
var insert = document.querySelector('.insert');
var createButton = create.querySelector('.check');
var albumBoxes = document.querySelectorAll('.albumBox');


//console.log(selected.options[selected.selectedIndex].text);
//设置遮罩层高度
var h = document.documentElement.clientHeight;
fullCover.style.height = h + 'px';

function getStyle(element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return window.getComputedStyle(element, null)[attr];
    }
}

function displayBoard() {
    if (getStyle(board, 'display') === 'block') {
        board.style.display = 'none';
        triangle.style.display = 'none';
    } else {
        board.style.display = 'block';
        triangle.style.display = 'block';
    }
}

function hideCreateBoard() {
    create.style.display = 'none';
    create.style.opacity = 0;
    fullCover.style.display = 'none';
    albumNameInput.value = '';
    selected.selectedIndex = 0;
}

function getTime() {
    var time;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    time = year + '-' + month + '-' + day;
    return time;
}
getTime();

function createAlbum() {
    var firstAlbum = document.querySelectorAll('.albumBox')[0];
    var newAlbum = document.createElement('div');
    newAlbum.className = 'albumBox';

    var albumName = create.querySelector('input').value;
    var permission = selected.options[selected.selectedIndex].text;

    if (albumName.length > 13) {
        alert('The name is too long !');
        return;
    }

    newAlbum.innerHTML = '<div class="cover">' +
        '<img src="" alt="">' +
        '</div>' +
        '<p class="albumName">' + '<span>' + albumName + '</span>' + ' <span>(' + 0 + ')</span>' + '</p>' +
        '<p class="time">' + 'Created at ' + getTime() + '</p>' +
        '<p class="status">' + permission + '</p>';

    if (firstAlbum) {
        album.insertBefore(newAlbum, firstAlbum);
    } else {
        album.insertBefore(newAlbum, add);
    }

    hideCreateBoard();

    //重新获取相册数目
    albumBoxes = document.querySelectorAll('.albumBox');
    newAlbum.addEventListener('click', showAlbumPictures, false);
}

user.addEventListener('click', displayBoard, false);
pullIcon.addEventListener('click', displayBoard, false);
out.addEventListener('click', hideCreateBoard, false);
cancel.addEventListener('click', hideCreateBoard, false);
addButton.addEventListener('click', function() {
    create.style.display = 'block';
    setTimeout(function() {
        fullCover.style.display = 'block';
        create.style.opacity = 1;
    }, 200)
}, false);

createButton.addEventListener('click', createAlbum, false);

var albumName = showBorad.querySelector('.albumName'),
    pictureNum = showBorad.querySelector('.num'),
    permission; //= showBorad.querySelector('.permission');

function showAlbumPictures (event) {
    album.style.display = 'none';
    showBorad.style.display = 'block';

    var event = event || window.event,
        e = event.target || event>srcElement,
        albumBox = e.parentNode;


    // var name,
    //     num,
    //     perm;

    albumName.innerHTML = albumBox.childNodes[1].childNodes[0].innerHTML;
    pictureNum.innerHTML = '共 ' + albumBox.childNodes[1].childNodes[2].innerHTML.replace(/[^\d]/g, '') + ' 张';
    perm = albumBox.childNodes[3].innerHTML;

}

var back = showBorad.querySelector('.back');
function backUpper () {
    showBorad.style.display = 'none';
    album.style.display = 'block';
}

back.addEventListener('click', backUpper, false);




//The end

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function ajax( opts ) {

    //1.设置默认参数
    var defaults = {
        method: 'GET', //请求方式
        url: '', //发送请求的地址
        data: '', //发送数据
        async: true,//是否异步
        cache: true,//是否缓存
        contentType: 'application/x-www-form-urlencoded',//http头信息
        success: function () {},
        error: function () {},
    };

    //2.覆盖参数
    for( var key in opts ) {
        defaults[key] = opts[key];
    };

    //3.数据处理
    if ( typeof defaults.data === 'object' ) { //处理data
        var str = '';
        for( var key in defaults.data ) {
            str += key + '=' + defaults.data[key] + '&'
        }
        defaults.data = str.substring(0, str.length - 1);
    };

    defaults.method = defaults.method.toUpperCase();  //请求方式字符转换成大写

    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime(); //处理 缓存


    if ( defaults.method === 'GET' && (defaults.data || defaults.cache) ) {
        defaults.url += '?' + defaults.data + defaults.cache;
    };

    //4.编写ajax
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXobject('Microsoft.XMLHTTP');


    //与服务器建立链接，告诉服务器你要做什么
    oXhr.open(defaults.method, defaults.url, defaults.async);

    //发送请求
    if ( defaults.method === 'GET' ) {
        oXhr.send(null);
    } else {
        oXhr.setRequestHeader("Content-type", defaults.contentType);
        oXhr.send(defaults.data);
    }

    //等代服务器回馈
    oXhr.onreadystatechange = function () {
        if ( oXhr.readyState === 4 ) {
            if (oXhr.status === 200) {
                defaults.success.call(oXhr, oXhr.responseText);
            } else {
                defaults.error();
            };
        };
    };

};

//module.exports = ajax;


//The end

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjklEQVRYR+2VwQmAMAxFk41cIZvoCG7iBrpJVnCjSMGDh2J/6qEIv9eG/MfjQ1QGPx2cLwSgARqgARr4hwF3nyJiU9VI3I7VzM7WPGzA3WcR2VsL7//FzA5kFgYoy0AIOLzsTAEAEKnwLoAXiHR4N0AFoiv8E8ADQtDC1UqZ7gDS7MwMAWiABmiABoYbuAAfTiYhsEiCIQAAAABJRU5ErkJggg=="

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OWUzNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vYWxidW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pY29uL291dC5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BamF4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL3B1bGxEb3duLnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLHVCQUF1QixpQkFBaUIsNkJBQTZCLEdBQUcsa0JBQWtCLDRCQUE0QixtQkFBbUIsNkJBQTZCLHdCQUF3Qix5QkFBeUIsR0FBRyxjQUFjLHFCQUFxQix5QkFBeUIsR0FBRyxZQUFZLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZDQUE2QyxzQkFBc0IsbUJBQW1CLGFBQWEsR0FBRyxnQkFBZ0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQix5QkFBeUIsc0JBQXNCLHdCQUF3QixzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLGlCQUFpQixtQkFBbUIsbUJBQW1CLHlCQUF5QixHQUFHLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNCQUFzQix3QkFBd0Isd0JBQXdCLGtCQUFrQix1QkFBdUIsc0JBQXNCLEdBQUcsc0JB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QUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxTOzs7Ozs7QUNySkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQsc0VBQXNFOzs7QUFHdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxTOzs7Ozs7QUNwRUEsaUNBQWlDLG9SIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBTZXJpZjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOTlweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLndyYXBwZXIgaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHBpbms7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2ZWNmZDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IDJweCBsaWdodGdyYXk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5oZWFkZXIgLmhvbWUge1xcbiAgICBmb250LWZhbWlseTogU2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLmZ1bmN0aW9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIC51c2VyIHtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLnB1bGxJY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5zaWduSW4sXFxuLnNpZ25PdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWduSW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG5cXG4uc2lnbk91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcXG59XFxuXFxuaGVhZGVyIC5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzBweDtcXG4gICAgdG9wOiA1NXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCBsaWdodGdyYXk7XFxufVxcblxcbmhlYWRlciAuYm9hcmQgZGl2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBsaWdodGdyYXk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLmJvYXJkIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCA0MCwgODAsIDAuMyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRyaWFuZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHdoaXRlO1xcbiAgICB0b3A6IDQycHg7XFxuICAgIGxlZnQ6IDExMHB4O1xcbiAgICB6LWluZGV4OiA5OTk5OTtcXG59XFxuXFxuXFxuLmFsYnVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMTUwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLmFsYnVtIGRpdi5hbGJ1bUJveCxcXG4uYWRkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5hbGJ1bSBkaXYuY292ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ljb24vYWxidW0ucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWxidW0gZGl2LmNvdmVyIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5hbGJ1bSAuYWxidW1OYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5hbGJ1bSAudGltZSxcXG4uYWxidW0gLnN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYWxidW0gLnRpbWUge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5hbGJ1bSAuc3RhdHVzIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYlO1xcbn1cXG5cXG4uYWRkIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzNCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZCBwIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uYWxidW0gLmNyZWF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB0b3A6IDI2JTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAycHggbGlnaHRncmF5O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XFxufVxcblxcbi5mdWxsQ292ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk5OTk5OTtcXG59XFxuXFxuLmNyZWF0ZSAudG9wIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYmFja2dyb3VuZDogI2Y0ZjlmOTtcXG59XFxuXFxuLmNyZWF0ZSAudG9wIHAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbn1cXG5cXG4uY3JlYXRlIC5vdXQge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pY29uL291dC5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmFtZSxcXG4ucGVybWlzc2lvbiB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4uYWxidW1TZXR0aW5nIHAge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmFsYnVtU2V0dGluZyBpbnB1dCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4uYnRuIGRpdiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCBsaWdodGdyYXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0biBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDBhYmQ1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi5zaG93UGljdHVyZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMTUwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XFxufVxcblxcbi5zaG93UGljdHVyZSBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCAxOTAsIDI1MCwgMC4xNik7XFxufVxcblxcbi5zaG93UGljdHVyZSAudXBsb2FkIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IOWchuS9kztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZDogIzFkYTFmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3dQaWN0dXJlIC51cGxvYWQ6aG92ZXIge31cXG5cXG4uc2hvd1BpY3R1cmUgLmFsYnVtTmFtZSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi5zaG93UGljdHVyZSAubnVtIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG59XFxuXFxuLnNob3dQaWN0dXJlIC5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAxcHggZ3JheTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvd1BpY3R1cmUgLmJhY2t7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogMzVweDtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0Y29sb3I6IGJsdWU7XFxuXFx0Zm9udC1zaXplOiAyMXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdG1hcmdpbi1yaWdodDogNSU7XFxuXFx0bWFyZ2luLXRvcDogMSU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcbn1cXG5cXG4uc2hvd1BpY3R1cmUgLnBpY3R1cmVzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qVGhlIGVuZCovXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4uL2pzL3VpLmpzJztcbmltcG9ydCBhamF4IGZyb20gJy4uL2pzL0FqYXguanMnO1xuaW1wb3J0IGljb24gZnJvbSAnLi4vaWNvbi9wdWxsRG93bi5wbmcnO1xuLy9jb25zdCByZXF1aXJlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4uL2ltZy9cIiwgdHJ1ZSwgL15cXC5cXC8uKlxcLmpwZyQvKTtcbi8vY29uc3QgaW1nQXJyID0gcmVxdWlyZUNvbnRleHQua2V5cygpLm1hcChyZXF1aXJlQ29udGV4dCk7XG5cblxudmFyIGhlaWdodEFyciA9IFtdO1xuXG5mdW5jdGlvbiBnZXRNaW5Cb3hJbmRleCh2YWwsIGFycikge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh2YWwgPT09IGFycltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHZhciB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nQXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gICAgIGltZy5zcmMgPSBpbWdBcnJbaV07XG4vLyAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWcpO1xuLy8gfVxuXG4vLyB2YXIgaW1nRE9NID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbi8vIHZhciBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcblxuXG4vL+etieW+heWbvueJh+WKoOi9veWujOavlVxudmFyIG4gPSAwO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdBcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgICBpbWdET01baV0ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGlmIChuIDwgaW1nRE9NLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgbisrO1xuLy8gICAgICAgICAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKG4gPT09IGltZ0RPTS5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIHNob3coKTtcbi8vICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4vLyAgICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8v5o6S5YiX5Zu+54mHXG5mdW5jdGlvbiBzaG93KCkge1xuICAgIHZhciBjb2wgPSA0OyAvL+WIl+aVsFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpIDw9IGNvbCAtIDEgJiYgaSAhPT0gMCkge1xuICAgICAgICAgICAgaGVpZ2h0QXJyLnB1c2goaW1nRE9NW2ldLmhlaWdodCk7XG4gICAgICAgICAgICBpbWdET01baV0uc3R5bGUubGVmdCA9IDMxMCAqIGkgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGhlaWdodEFyci5wdXNoKGltZ0RPTVtpXS5oZWlnaHQpO1xuICAgICAgICAgICAgaW1nRE9NW2ldLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5rGC5Ye65pyA55+u55qE6Zif5YiX6auY5bqmXG4gICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgaGVpZ2h0QXJyKTtcbiAgICAgICAgICAgIC8v5rGC5Ye65pyA55+u6Zif5YiX5a+55bqU55qE57Si5byVXG4gICAgICAgICAgICB2YXIgbWluSW5kZXggPSBnZXRNaW5Cb3hJbmRleChtaW5IZWlnaHQsIGhlaWdodEFycik7XG4gICAgICAgICAgICBpZiAobWluSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGltZ0RPTVtpXS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZ0RPTVtpXS5zdHlsZS5sZWZ0ID0gMzEwICogbWluSW5kZXggKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nRE9NW2ldLnN0eWxlLnRvcCA9IG1pbkhlaWdodCArIDE1ICsgJ3B4JztcbiAgICAgICAgICAgIGhlaWdodEFyclttaW5JbmRleF0gKz0gKGltZ0RPTVtpXS5oZWlnaHQgKyAxNSk7XG4gICAgICAgICAgICAvL+axguWHuuacgOmrmOeahOmYn+WIl+mrmOW6plxuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodEFycik7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gMzEwICogY29sIC0gMTAgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBtYXhIZWlnaHQgKyAxMCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxudmFyIGltZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuYWpheCh7XG4gICAgdXJsOiAnLycsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgXG4gICAgZGF0YToge1xuICAgICAgICAwOiAyXG4gICAgfSxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygwKTtcbiAgICB9XG59KVxuXG5cblxuLy9UaGUgZW5kXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQU82MGxFUVZSNFh1MWRmWXdjWlJuL1BidDdCN1JhK25HekpFYTBKWDVTVTF0VG0xNW5JNjJBRVJWdFJTVWtFbG9VQXdnS0lZYVA3dEp0ZHcrbE1WQUVnbUFNeFE4Q1N1UXFFQkFrTFhUbjJnS3hKUXFDU2l5b0tEdDM3Vkd3bHQ3dVBHWm1iOXU5MjVsNTUydHZkN3J2L25jMzh6N1ArLzZlMy92eGZNd01RZjY2R2dIcTZ0SEx3VU1Tb010SklBa2dDZERsQ0hUNThPVUtJQW5RNVFoMCtmRGxDaUFKME9VSWRQbnc1UW9nQ2REbENIVDU4T1VLSUFuUTVRaDArZkRsQ2lBSjRBMkJhN2FQenVxbHcwczVRU2V6Z1pOQVNIcHJLZThLZ2dBeERBQmxCbDVQOWZJeitTWHAvd1NSSTJvalhBR3UxMGJPTWRpNG1BaG5pSVRKNnkxRllMdkJ1SE1nby93eVNpMk9CTWlYOXIydmlzcVBRWFJXbEFxbHJIQUlNSE1KS1Z4WVhKcithemhKdGRhMkJNaHBJLzJNNmtNRW1oT0ZFaWtqY2dRT0dPQ3pCOVQwMDJFbE54RWdONlNmQnNhMnNJSmwrOVlqd0pRNHE3aHN6bU5oTkUwZ1FIN296ZGtWZnVkRkFwMFVScWhzTzBVSU1BOVhVOU0rZHNQU2Q3MFJWT01FQW1RMS9WNEN6bk1SZGdEZ0hjejRBNGdPQjFVcTI0a1JJRkFTNEVVQStnSE1kbXpCL0dBaGsvNnlXS0w5SFVjSWtDdU56QWNaZjNJUnRMR2dLbGNIVlNUYkJVY2dxNVhYRXFqb0tJSDRFNFZsNmQxQk5Cd2xnS2IvSE1EWEhYaXlwcUQyYlE2aVFMYUpCb0ZjcWZ3MUVOM3ZJTzIrZ3FxNHJkek8zS2xmeVdyNktBRW4ydHo1aTRLcW5CL05NSURydFBMQ0JPRTBNTTBFWTdrbGx6QUtZQTh6N2UyWm50eVNYelRML0Z2K0ppR1EwL1E3QVh4ck1qRE1lS3VZVVdZRUFjeGFBZGFXeXBrRTBYWTdBWlZrWXY3M2w4NTVNWWp3eGpaWlRWOUg0TlVBelJYSlltQVFDZHhTN0Zla045SUFWblpuK1lOVXBiL1k0c2Y4cVVJbWJXdERON3d0QW1TMTh1VUUrbEVUczRBL0YxWGxWSkhCM0s1bmg0WlhFaHMzZXpGOHN4emVuSnpXYzZWY0VZNGlrOVgwRnduNHFBM21WeFZVNVNhL3RySUlrTk9HQ3dCbm13bkFEeFRWOUZmOUNtM1lWdFlSa0EvYTNtckhHSzBTcjdoQlRlOEpKZWNZYWV6a3FUSG9scUxhZDRYZllZNFRvSHc3UUpmYXpjQ0NtbDdqVjJpTlZPVzdBVm9kcEcxVEcwbUNJNUJrTmYySEJGemxaYkxtZCsrZktWbzlhd1FvNlhlQWNIRlVCTWlWOUN0QXVEa1M0OWVGTUVhVHlkU2lmUCtzdlpIS2pabXdyRmIrQVlIczNQRXRCVlZaMlRpY3JGYitIVEdOSmhPOWwrU1huYmpQYnFpUkV5QzdRMTlPQnJhNjRjckFtMkFlQk5FUll4SXNqK0EwMTNhTWJjV01zaUptTm91MHU3NEpBUG9Nd0g5TEpuck90SnM4MFJPZ3BHOGxHbmZ2SmczZE5Ed3g4b1dNc3NrT2xmeU8vWE9yUnNXODlpVm4xS2lyWXhLK0NGRFNuMmhJNC8vVFFDb3pvTTU2dFJIYlNBbFFPL0h6ZzNiR000MXZnSmQ3T2N4bHRlRk5CUDZ1UFFsNGIwRk56NHQwV3NWSVdBZ0NtS044NlkzaitoYmN0WmpHNmtPT2xnQ2w4bVlpdXNBT3p5cDRrUmZqMTl0bUk1UVZJL3NLdStxSEFMbFMrWEVRbmRrb2xNRTNGdFgwTlMwaFFLNms3d2RoWnZNSjFiK0xZcDVnS3djcmUrMmlrMEZkSGlHNk1iakJEd0d5RTdjQWEzUU1qS1U0K1lGOFp2WnI1dCtSclFCdWg3OWtJalV2eU9uZFpTdDRxcUFxdFRCeWwvM0NFcUJHQXI2MXFLYS9NelVFWUg2K2tFa3ZER0luNXpORjk1NEQvQkFncCtrUEEvaDhNL1pjTHFocHErWWp1aFZBMC9NRXJMTXhkT0RaNnJhcUZGUkZXTkFhaEhSKzJsaUpMWkRwc1N4a3BzR0JUTjg5ZnRvSHVkY1BBYkxheUZjSXhxL3Q5RERqSThXTThySWtRQkFyb0piVlRESnRuWGptNGMxQkk2ZGV1K0dIQUtiTVhFbi9Gd2p2YVpMUGZHNGhrLzVWZEFSd0NBQXhlRTlSVFp1VkxiNS9UbHVBNlZJV1ZhWHBzT2xiUWNBRzVnRzFlbkJzdDIyQ2kzR2xVNXdqb0xvSnpmd1NJRnNxUDBwRW4yM1dUVmNYMUw2TkxTZUFxZmhZT3dSbVhZSmRadktxbFNGcjN3UndMdk83cWFBcVYwVkdBTlBRVGtVbHpIeFBNWlAybFJpeVp0bC9LMytQeXEyTVl2YU5qOUhwckhORUJiY3daTzJYQURtSFNpOEc3aWlxeXFXUkVpQ242WU5PWVZ5L2dTQzNiQ0luc0tJZHhTSmU4aHgxRmpDd3ZxZ3E0VkxoTnF6dGNBSU1yd2I0YnR2WjVpT2xteXZwTjROZ205dG00TldpcWdpcmlxS2E4WFU1VnA2aVd0bHR0eUk1NmZKTGVpOTk3bWdDV0tkT1RUZkx1T3l6ZW94Ukptd3Fxc3A2dThHYUlGZXFsYnVka2ttMU51MUpCbVcxOG00QytZcG5oRGtBTzVHaDR3bmdhWmxraklKNGtIRTBIUXp3U2lIQUlZSktYbWFYMHoyaTRoWnpWU0xnL1hidG93NWJkendCeG4zUHlBdENUTmN2bFVndERCSlNEbWQ4bDIzTkZNeTRrcFBZNDFZREVlV1pKUllFc0U3TEx0azh2d2J4azByMks5dnRmdnRnejlFV2pkNk5LSVdkbk5helNGU2U1YVh2c1NHQVY1ZEpOR2h6ZVRYQUsvMmtra1V5dlZ5dlpTUEh0anB1Uzh6UEo2ZjNMRzgwYXE1VTNnT2lqOXR2QlJnc3Fzb3FMN3JkN29rVkFTd1NEQTJ2QlBNbXB6MVNBTWlXNUxUVTZpaG1qbC9nczVyK0lBRVRhdXpxTXB4V0pHdkZBRGsrb3NWRXE0ckwra3hYT2ZBdmRnU29qelNyNmFaUHZOb2pFYlp3QXB2QytQcjFSQTJCNXhxYzJPWW5VU011YW5YMlJNeHhPaVRGckJMMzVQVFV2RENFamkwQjZrUVkzMWVYTTJIbWVDR29lV21VZ1QwRTJwdWNsaHdNQTVBcExFeWlSamlMUGRUZnU3bkNZYU9Fc1NkQTRMWFBZMFAzZzV0N3RzNHQvR3lwOStpR1d2RU1vN0xINFZsTHkzTUltakNTQkhBaGd2RGdWck9pWThyV0xjbGp1YUhUVW5POXJrNnUyMGlJaEpFa2dBc0JYTE4wamUxc1pxQzdHd2NFOGVYZGNpTkJvNFNTQUE0RUVFWHJtcHNkUGNpNWxiTmJhMGJBeEk1YllXdFF1WklBTmdRUW45cWRsZzFhazB3a3R3bVNQRTJQWEhrOGpsaTNpY2psTjJFa0NUQUovWndtQ05VS3JjVjduUjVkTjROUXFXbXBoVjczZlNkVlVVWUpKUUVhVUJhRmFzMVRPeWZwQ2hnWWREeVJ1eERFNyt4MEVqVytGWmhlUWVpRWtTVEFPTXFpL0h4anRFNjBETnNiTHRxMHN5aEw2dldRS1FrQXdJdTdOM24yK3RrcWdwU3dDWGVhV3NsYzZDaWhKSUNWYVhSK0FybG1DUHZaNjRrRU5ra2VMOGIxZWsvWWhGSFhFMERrN29sY05qY1NURVhOZ1REVUxFZ1lkVFVCUkRQWTY5THRWS3NRUmJiT3kwb1FKa3JZdFFRUUh1UjhMdDNOKzNHMGh6NFJFWUltakxxU0FDSjNMNmkvYmgwbUQxVVdoa2s3aXd6dDZCb0dUQmgxSFFGRUdicDJsWXNGTlh4ak85R1daaGVIaUIwQnhtZnZCVXlZNi9jSldpL3VubGYvT1FxRHRVS0czNFJSckFnUXBqRERpcU83bEdXNXVYdXRNRlNyWlBwTkdNV0dBRzZST2pNVm1wcldzOEl0eGk1MjkveS9kcVpWUmd3cjF6Vkt5Qmd0WkpSWmRSMnhJWURvU1JvM0VvajJScS91WGxqRFRHVjd0NFJSNDFrZ0ZnUVF6ZDQ2c0JZSkVqMnJHaC8yRU1YTXpRVFA1SExzcVRSVXEzVFYzamxRMlc4bnYvR2MwL0VFRU0zZXBnRTJQRFRhS25ldlZVYUxXbTVPMHpuV0JCQVowQkV3ODZIUkpGYVJZVDVaYlA4OWdUaTdlMTZKRW1zQ3VMNDJ4U3NDTHZkTlZaZzJncTRHRmhGckFvZ3FhcEhBU2pLc2J3ZTR2aERhSHIycERkTUd0bURJaHJFbGdHdWUyeXlxYk1odytYMW85Rmc4OFR2eEpKWUVFQ1ZwN0o2UDkwR0NVQVdaSVNma2xEZVBIUUZFWlZrQUhGOFNLYXprUFViZFBUZFd4WW9Bb2ppOWx3eWRrOHZvOXltY0taK3FMVklZS3dLSWdqMWVLMnBORWpDc3g4ZXRieGEyNjMwQUxiS3BMN0d4SVlCdytmYjVJcWVhQzFsZHlZVFIxQW5KYldIcjhIMmgza0UzeDRJQXdwcTJBQytGN0NBYnRMVXJIVThBVVhHR2hSNWprem1UMjRwa1RKVTdmV094WTNJQjRuTHNtQ0xmNGQzdUNBSUlzM1FkRG1LY3V6Y0ZCQ2pmQ3FMTEpvTTA4VFZvTGsrMXhCbmRHUFI5UWoxQVNkOUloTy9aMk9vM3hVejZuTW4vOS9heTZDRjlQUmpYTnd2RmI0c1p4ZnFHbis4MGJ3eUFqVU1YSjM4YklhY04veFRnQzIxc2RXY3hvelI5L2RVVEFiSkR3OThtNXR1YUFHRzhWc2dvMWhPdHRRUGcyRGFuOStERkFjeDQ5bkZpSWl4YjBwOGx3dUttc1JBMkZKWXBUWi9zOFVhQUhjTm5rTUZQMkFORVN3cHEzN05IU1ZCWmpkcVhRZHYyeFk1NEd0SmZyNWw1THhLSndjYjNDbVpMK29lSjhKS0RwUE1LcW5KZm9DMmd0c1RyYndLWVliTUs3Q3BrbEtYK3VpL3ZiZ1VDYmlYa2g0OUx6cnh4OFd6VGhoTitubFlBczRVZ1E3ZXhvQ3AyWDZ4dXhUaWxUQnNFMWc3cDV5VVk5enFBNDVnMTlVeUFhM2VPbkpxcUdpKzRvSDlYa3BNRDlTOU9TaXRORFFKcm54azVPVEZtbUFmMGJ6cHJQTHBOQjE0QnJGWEErUU5EUitReTgyTUFkb1BvOE5SQTBLMWFLQVVZbnlUcjgrL09Qd1llTHFySzJVNTNlRjRCVEFIWDdqb3dKelYyNkNVUTlYVXI3TEVhTjJNMEFjeGZuMUZlajRRQXBwRHJoNFpQWitiZnh3cUlMdTBzTVg5dVF5YjlxTnZ3ZmEwQWRVRTViYVNmMlhpRUNFY2VTZXBTakR0MTJBY004TmtEYXZwcFVRY0RFY0FVbXQ4K2VrbzFNWFlYZ05ORlN1VDFLVVNBc1pXcDU2S2lPdk1WTDFvREU2QXVmRzJwZkc2QzZKSmc1ZHhldWlqdjhZakFVd2J6SFFPWjlQMGU3N2R1eTJyNnp3ZzRmM0liWnI2OW1FbGY1dmtMM1BubkR2UlZEeDM2TkJNdEllWUZJT3IxMHhGNXIyOEVLbUQ4MFVqd1VFL3Y4VnZ6aTJjTSs1WlFJOEJEQkh5aGlRQ2dnYUxhbC9WTWdDREtaWnYySTVBcjZTK0FjR3BUVDVndUwyVDZicE1FYUwrTld0YUQ4WE9jN1ZtQkV2amlobjdGWEIzazcxaEZJS3ZwOXhGd3J0MzRralA1M2ZuNTZiY0RFK0M2bmZzV0pMZzYyMDQ0SnhPdkRDeVo4NDlqRmRnNGpFdFF3WFVrZHhDWUFEbHR1QUJ3MWg0TUxqTjZsM2wxVmVJQWFKejZtTlgwaXdDK2hVQW4yUFk3a2N3VSttZHI1clhBQkZpM1MvK1FVY0hMYnNBdytBRUN0aE1sWGpDSXEzRUNNWFo5TlJLOWdORVB4amVJY0xKTC81OHNxTW9aOWV1QkNXQUt5R242VDl5elZMR0Q4Ump2TUI5azlDNW9YSmxERWVEcTUvYWQyUE5POVhtUEg0TTh4c0dOdy9DYTM3TVFpZ0Rta0d0ZjZNU1E0MzRUQjF5Nm9ZL2pmdi9rb1lZbVFHMHJHT2xuR0k4RytTeExOMkRmempFeTQ5K0pCSjIvWVZuZmszYjlpSVFBMWtxdzgrMlRrcFgvWGNQZ2k0aG9lanNITFhXYkh6bkZXd1MrUFhtOFVzZ3Zwb05PbUVSR2dMcUMvTTZSR1JXanVnWUdGaEhSS1FEbUFYaXZOTW9VSU1EWUJhSmRCSDU4ZzZvODRrVmo1QVR3b2xUZTB6a0lTQUowamkzYTBoTkpnTGJBM2psS0pRRTZ4eFp0Nllra1FGdGc3eHlsa2dDZFk0dTI5RVFTb0Myd2Q0NVNTWURPc1VWYmVpSUowQmJZTzBlcEpFRG4yS0l0UFpFRWFBdnNuYU5VRXFCemJOR1dua2dDdEFYMnpsRXFDZEE1dG1oTFR5UUIyZ0o3NXlpVkJPZ2NXN1NsSjVJQWJZRzljNVQrSC93RTFCY0hFcDhNQUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNvbi9hbGJ1bS5wbmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUg2a2xFUVZSNFh1MWJPNnhWUlJSZGs5aW9VYkZRRTFHQnhHaURFU3FONEFkakQzN2lCNDJvbFZadmJtT2lGRUtNV2xpOGZRdURsWW9KRUJFVkxLeU1ncWpSV0FpUlJoc0J3VVFvQkkzWWtHeXpybk1PYytiT25EUG44OTRqeWtsdTg5NmNNN1BYWHZzemUvWVkvTThmTXgveVcydVhHbU9XcU9vOUFCWUJXQTNnb21EdXN3QytCSERLR0xOWFZZK0l5T0c1WHQrY0FUQWFqZFlDZUZoVjd3TndkVWRCVGhoalBnV3djM1oyZGsvSGI5UytOaWdBVHRPdnFPbzZBSmNNdk9BenhwamRxcnB4U0dZTUFvQzFkZ1dBalFBZUdsam82T2VNTWR0VjlYVVJPZEIzdmw0QVdHc1hHV1BlVU5YMWZSZlM4ZjB0QUY0VWtWTWQzMGRuQUt5MXBQbTJUS3IvQ2VCREFIUnExQm9YZktyUW9HTVFuU04vWk5OU0FBOEF1Q3hEc0RNQUhoZVIzUmxqcDRhMEJxQ0YxbjhCOEJhQTNWMnA2b0FoME04QXVMNUJ3RTVzYUFVQWhRZndEWUNiYXhhekQ4QW1FZG5iUlNPcGQ2eTFES0diQU54ZDg5MGZBZHpleGlTeUFYRGFlQi9BallrRlVPTlA1Z3J1bUhRcnY2V3FCM01YN1lCNHQ0WVJCT0hSWE5abEFlQ0UvNnJHM2plTENMVVRmZHo3ekF1b1JkbzNmN0dIUG9JL3NtZFBuUkRXV3M3M1V1STc5QXVyY2tCb0JNRFIvcnVFNW84RGVDS21kZmZlRElDbmFnUnVzaEtDOFE2QWNZd2hqZzBmSjV4bGxqblVBbEJuODZwNnlCaHpaN2d3VDNEcnZIcVRrRG4vWjlTUUdCQ2NUMVgzRzJPV1J6N1VDRUl0QUtQUmFGc3N4dGNJVDQvOTlvQ0NoektSRWFNdzVOV0JvS3B2anNmajUxSW9Kd0Z3Y2Y2ajhNVWE0V2NCVU92ejhZaUlqUHlKR3Bod2Z5cFBpQUxnYUV6N0R2TjUvbTI1VDNzMzluT1h3TXlIOE1VY2RKUVVyTXdDM1ZvT0FWZ2NMSVJPY1hITWo2UUEyQTdnc1lnMEszM1B1b0RDRjB0alZya21BSUdSaGdxcFBDbFRtQUxBaGF6dkk4SlBoVHByTGNjeGRWM0laNitJckFuTUlSVWlLd3JrTzFNQXpNek03RExHUEJoSTlJdUkzQkJNUXEvTU1IYytQQXlURmY5anJUMGFKa3VxK3NGNFBLN3NXQ3NBY0Q4UDRPZUlSS1JabWRxbUhPUUNJMUZ4ZEM1SG1ESUZBTXY4ZWtJSVFNejI5NGtJN1dyeU9Mc25TTndYbkU4UFF5UXA3anRGbHRoV0JZdmNJU0xsOWowRTRLK0k1dysxWDVlQ0xqUWdGVCtWWU1FWkVibTBXR2dKUUlMV0ZkdnZvSDN1REttWkRSMlIyZXFjN0dUVGxQRlErNlM0ejRKamtiQlltb3NQUUl6K3pMcm83QXI2dDlGK2FUcldXdTRIbUNIbVBxZTVjZklLSmd4M3VTQ0VMSWl0dVRRREg0RGZJdFhiaXNPdzF0TDJVenU1VUxpdElrTEJDL0J5UWFnSTcvd09OMFM1TERvc0lzdThlV09PL1lTSVhNTXhFd0FTM3YrNGlGem5mWWp4UHBZZjFHbjFhUkhoNG5OQmlBbWZDNXkvampCaGk1bkJsVFNWQW9CWTloUnFzQTM5L2NYa2dqQ1U4Snc3Tk4wWWd5Yk92UUFnSmx4b1M4d0Q2c3BSZlpnd3BQQmNCNHNwM0puVythNkpmQk1BWm1abXRoaGpuZzBrQ01OZkcvdVBnWkZpd3REQ2MrN1FEOFFZUHNrZUN3YkV2R3dJZ09hNjhKcHhNUkFPQkJ1c0xqWS9OYVdJK0E0K0JnRHJrQ3ZxQUpnNENlY2ttZlg5UGdBQS9FUUZCUCtiSGNKbGNra0JBTEgxMXdPUWdXQWZQS1pBR0ZKNHQ3QW1CbDhBNElJSk5QaUFKZ3AxTVlHWUUwVExaQ2xyM2d3VFBtY0NtV0dRbTVvbFdiUEhCOVVsUkxuSlV1NzA3QzRwVS9iRXJyQVNCaGM2RVpxS0RqMmRZcnRFS0lIUWZLZkNRNExRT2hXTzdaaU9pVWg1SkYxVExPMlRBcmZKR0hQcHozSGhab2dIdCtYR3puM28zR2JJcGNOc1NMb3FtQ1hjRHJmeEExMjN3ekVtdE5rT2gvWS9wVnhWUFRrZWp5ZU5XMDBGa1p6aVFrb3pUSEZYdWt5eVMzcGJPa1pyTFl1YlpWMnlnUW81YTQ0V1JMaDdDby9Dam9wSTZmbGRTWXdzdUNLVGo5eGo4RmNXUmpMZks0WlI4OVJncnZEY1dDME5TbUl4K2srWHhKd1pzQlh0NG1DUi82bWlxS3IrUFI2UHl5Ty9uTEo0NWVURnNZQmE3Wk1UdENSQzF2QWpMS0FHMnQvdnVsTExENFJIWkJjT1JrSnNFMGRqRlYvZ0hOdjVmalJHUmxTTzh4cVB4cHhncWVKbjdIQzBUNWtzaTljWmd5b25WMDZHVlAyeUV0WXJZZENmeUZyYjVuaWNJT1RXN0RQa2FUWGtvRHMvOEE5QytoMlBPd1RaZC9OckpDS3d2SHhMcENtQlhacGRDNmF0SlBZRzg5UnBYV1F0cFA3bC9rZnArWTB4MTJZM1NEZ1FZbmtCLy9VRGdMc2l6Vkh6NlJOaXgrRXNlMzFCQlVVUWJkY2lVM3dnc1UydUE0R2dFWWk1Q3BIVXJvMDFTYVdFNzl3a1ZaZ0NnRzhCM0JSQk5jVUVhb0xOQ3Z6bFpveE5ac0FNajhEeXFMTFNHZTd5a3BUbWZ3SndXMTBYYW02alpBcUVQd0NzcldtVUpBaE1nN3N5Z2hwbk9qd2x1Rk1RSFI1dmtsUnMzcUhaS0h3eUNvVHE0RlpZVmIrT09NVmlLSnVqTjZmVTZMYlNYQ3gvRExNcFFDZ3dzMHhHRm1hZ3lRc1IxbHEyeVViYmM1M1R1Mk9RVnRsQ0tDZkVld2x6NEREMjVHekliWmIyTkVqMVpuZVd1K0lOK3dZcVNZNEhQalgvU0k3dzJRendRS0I5cDh5aEdFWmhtRFJsQzlYa0FEeXdYZzV6KytEZExOcjc3elQ2Z0lnNU1FZDRMWEtXR0E1bHpyQUxBQXNqbmU3Mk9OYXhMNENkWFdGRnB6SWZ2YjB4NW9YY3R2dmk1ZFlBZUd4WXA2cmJhL3lDdjBBNnk4OW8zOGFZeVpVWlZUM3RYNWt4eGpCaUVGejZDUDd1VFRpM1VIQW1PZXZuN2NxTVA3dnJ6ODFoUXc3TFc0L3BxdlZlSmhCYnBhUHE4NG4yMnRhQ1pieXd3OTBXNjMyenRMTUpKSUJnK2VwVlhwek1OSTBNV2Y4ZDRrTGJUbmNmcWJmZ3ZYMUEwOHBkMjkzazZteWsydHowZWlIMFNXUE1KKzdtV2FkcmNVMFREY3FBMUdRdVhhVmptMXllVnRYVnhwaks1V2xWUFd1TW1WeWVkb2tRcThxZEwwUTJDVDduRE1oZHdFS1Ard2N4czUxOUhCMkg4QUFBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNvbi9vdXQucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcicpO1xudmFyIGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG52YXIgcHVsbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHVsbEljb24nKTtcbnZhciB0cmlhbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlhbmdsZScpO1xudmFyIGZ1bGxDb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsQ292ZXInKTtcbnZhciBjcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlJyk7XG52YXIgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xudmFyIGFkZEJ1dHRvbiA9IGFkZC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbnZhciBvdXQgPSBjcmVhdGUucXVlcnlTZWxlY3RvcignLm91dCcpO1xudmFyIGNhbmNlbCA9IGNyZWF0ZS5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG52YXIgYWxidW1OYW1lSW5wdXQgPSBjcmVhdGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbnZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xudmFyIGFsYnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsYnVtJyk7XG52YXIgc2hvd0JvcmFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dQaWN0dXJlJyk7XG52YXIgaW5zZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2VydCcpO1xudmFyIGNyZWF0ZUJ1dHRvbiA9IGNyZWF0ZS5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbnZhciBhbGJ1bUJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsYnVtQm94Jyk7XG5cblxuLy9jb25zb2xlLmxvZyhzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xuLy/orr7nva7pga7nvanlsYLpq5jluqZcbnZhciBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbmZ1bGxDb3Zlci5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcblxuZnVuY3Rpb24gZ2V0U3R5bGUoZWxlbWVudCwgYXR0cikge1xuICAgIGlmIChlbGVtZW50LmN1cnJlbnRTdHlsZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jdXJyZW50U3R5bGVbYXR0cl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2F0dHJdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCkge1xuICAgIGlmIChnZXRTdHlsZShib2FyZCwgJ2Rpc3BsYXknKSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0cmlhbmdsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0cmlhbmdsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVDcmVhdGVCb2FyZCgpIHtcbiAgICBjcmVhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjcmVhdGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgZnVsbENvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYWxidW1OYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBzZWxlY3RlZC5zZWxlY3RlZEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICB2YXIgdGltZTtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIH1cbiAgICBpZiAoZGF5IDwgMTApIHtcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgIH1cbiAgICB0aW1lID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuICAgIHJldHVybiB0aW1lO1xufVxuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVBbGJ1bSgpIHtcbiAgICB2YXIgZmlyc3RBbGJ1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGJ1bUJveCcpWzBdO1xuICAgIHZhciBuZXdBbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0FsYnVtLmNsYXNzTmFtZSA9ICdhbGJ1bUJveCc7XG5cbiAgICB2YXIgYWxidW1OYW1lID0gY3JlYXRlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG4gICAgdmFyIHBlcm1pc3Npb24gPSBzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICBpZiAoYWxidW1OYW1lLmxlbmd0aCA+IDEzKSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgbmFtZSBpcyB0b28gbG9uZyAhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdBbGJ1bS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNvdmVyXCI+JyArXG4gICAgICAgICc8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8cCBjbGFzcz1cImFsYnVtTmFtZVwiPicgKyAnPHNwYW4+JyArIGFsYnVtTmFtZSArICc8L3NwYW4+JyArICcgPHNwYW4+KCcgKyAwICsgJyk8L3NwYW4+JyArICc8L3A+JyArXG4gICAgICAgICc8cCBjbGFzcz1cInRpbWVcIj4nICsgJ0NyZWF0ZWQgYXQgJyArIGdldFRpbWUoKSArICc8L3A+JyArXG4gICAgICAgICc8cCBjbGFzcz1cInN0YXR1c1wiPicgKyBwZXJtaXNzaW9uICsgJzwvcD4nO1xuXG4gICAgaWYgKGZpcnN0QWxidW0pIHtcbiAgICAgICAgYWxidW0uaW5zZXJ0QmVmb3JlKG5ld0FsYnVtLCBmaXJzdEFsYnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGJ1bS5pbnNlcnRCZWZvcmUobmV3QWxidW0sIGFkZCk7XG4gICAgfVxuXG4gICAgaGlkZUNyZWF0ZUJvYXJkKCk7XG5cbiAgICAvL+mHjeaWsOiOt+WPluebuOWGjOaVsOebrlxuICAgIGFsYnVtQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxidW1Cb3gnKTtcbiAgICBuZXdBbGJ1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGJ1bVBpY3R1cmVzLCBmYWxzZSk7XG59XG5cbnVzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Qm9hcmQsIGZhbHNlKTtcbnB1bGxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUJvYXJkLCBmYWxzZSk7XG5vdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQ3JlYXRlQm9hcmQsIGZhbHNlKTtcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVDcmVhdGVCb2FyZCwgZmFsc2UpO1xuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY3JlYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bGxDb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY3JlYXRlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0sIDIwMClcbn0sIGZhbHNlKTtcblxuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQWxidW0sIGZhbHNlKTtcblxudmFyIGFsYnVtTmFtZSA9IHNob3dCb3JhZC5xdWVyeVNlbGVjdG9yKCcuYWxidW1OYW1lJyksXG4gICAgcGljdHVyZU51bSA9IHNob3dCb3JhZC5xdWVyeVNlbGVjdG9yKCcubnVtJyksXG4gICAgcGVybWlzc2lvbjsgLy89IHNob3dCb3JhZC5xdWVyeVNlbGVjdG9yKCcucGVybWlzc2lvbicpO1xuXG5mdW5jdGlvbiBzaG93QWxidW1QaWN0dXJlcyAoZXZlbnQpIHtcbiAgICBhbGJ1bS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNob3dCb3JhZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIHZhciBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudCxcbiAgICAgICAgZSA9IGV2ZW50LnRhcmdldCB8fCBldmVudD5zcmNFbGVtZW50LFxuICAgICAgICBhbGJ1bUJveCA9IGUucGFyZW50Tm9kZTtcblxuXG4gICAgLy8gdmFyIG5hbWUsXG4gICAgLy8gICAgIG51bSxcbiAgICAvLyAgICAgcGVybTtcblxuICAgIGFsYnVtTmFtZS5pbm5lckhUTUwgPSBhbGJ1bUJveC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MO1xuICAgIHBpY3R1cmVOdW0uaW5uZXJIVE1MID0gJ+WFsSAnICsgYWxidW1Cb3guY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzJdLmlubmVySFRNTC5yZXBsYWNlKC9bXlxcZF0vZywgJycpICsgJyDlvKAnO1xuICAgIHBlcm0gPSBhbGJ1bUJveC5jaGlsZE5vZGVzWzNdLmlubmVySFRNTDtcblxufVxuXG52YXIgYmFjayA9IHNob3dCb3JhZC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpO1xuZnVuY3Rpb24gYmFja1VwcGVyICgpIHtcbiAgICBzaG93Qm9yYWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhbGJ1bS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tVcHBlciwgZmFsc2UpO1xuXG5cblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91aS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBhamF4KCBvcHRzICkge1xuXG4gICAgLy8xLuiuvue9rum7mOiupOWPguaVsFxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJywgLy/or7fmsYLmlrnlvI9cbiAgICAgICAgdXJsOiAnJywgLy/lj5HpgIHor7fmsYLnmoTlnLDlnYBcbiAgICAgICAgZGF0YTogJycsIC8v5Y+R6YCB5pWw5o2uXG4gICAgICAgIGFzeW5jOiB0cnVlLC8v5piv5ZCm5byC5q2lXG4gICAgICAgIGNhY2hlOiB0cnVlLC8v5piv5ZCm57yT5a2YXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywvL2h0dHDlpLTkv6Hmga9cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7fSxcbiAgICB9O1xuXG4gICAgLy8yLuimhuebluWPguaVsFxuICAgIGZvciggdmFyIGtleSBpbiBvcHRzICkge1xuICAgICAgICBkZWZhdWx0c1trZXldID0gb3B0c1trZXldO1xuICAgIH07XG5cbiAgICAvLzMu5pWw5o2u5aSE55CGXG4gICAgaWYgKCB0eXBlb2YgZGVmYXVsdHMuZGF0YSA9PT0gJ29iamVjdCcgKSB7IC8v5aSE55CGZGF0YVxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIGZvciggdmFyIGtleSBpbiBkZWZhdWx0cy5kYXRhICkge1xuICAgICAgICAgICAgc3RyICs9IGtleSArICc9JyArIGRlZmF1bHRzLmRhdGFba2V5XSArICcmJ1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHRzLmRhdGEgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMubWV0aG9kID0gZGVmYXVsdHMubWV0aG9kLnRvVXBwZXJDYXNlKCk7ICAvL+ivt+axguaWueW8j+Wtl+espui9rOaNouaIkOWkp+WGmVxuXG4gICAgZGVmYXVsdHMuY2FjaGUgPSBkZWZhdWx0cy5jYWNoZSA/ICcnIDogJyYnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8v5aSE55CGIOe8k+WtmFxuXG5cbiAgICBpZiAoIGRlZmF1bHRzLm1ldGhvZCA9PT0gJ0dFVCcgJiYgKGRlZmF1bHRzLmRhdGEgfHwgZGVmYXVsdHMuY2FjaGUpICkge1xuICAgICAgICBkZWZhdWx0cy51cmwgKz0gJz8nICsgZGVmYXVsdHMuZGF0YSArIGRlZmF1bHRzLmNhY2hlO1xuICAgIH07XG5cbiAgICAvLzQu57yW5YaZYWpheFxuICAgIHZhciBvWGhyID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0ID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgQWN0aXZlWG9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcblxuXG4gICAgLy/kuI7mnI3liqHlmajlu7rnq4vpk77mjqXvvIzlkYror4nmnI3liqHlmajkvaDopoHlgZrku4DkuYhcbiAgICBvWGhyLm9wZW4oZGVmYXVsdHMubWV0aG9kLCBkZWZhdWx0cy51cmwsIGRlZmF1bHRzLmFzeW5jKTtcblxuICAgIC8v5Y+R6YCB6K+35rGCXG4gICAgaWYgKCBkZWZhdWx0cy5tZXRob2QgPT09ICdHRVQnICkge1xuICAgICAgICBvWGhyLnNlbmQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb1hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIGRlZmF1bHRzLmNvbnRlbnRUeXBlKTtcbiAgICAgICAgb1hoci5zZW5kKGRlZmF1bHRzLmRhdGEpO1xuICAgIH1cblxuICAgIC8v562J5Luj5pyN5Yqh5Zmo5Zue6aaIXG4gICAgb1hoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICggb1hoci5yZWFkeVN0YXRlID09PSA0ICkge1xuICAgICAgICAgICAgaWYgKG9YaHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zdWNjZXNzLmNhbGwob1hociwgb1hoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5lcnJvcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG59O1xuXG4vL21vZHVsZS5leHBvcnRzID0gYWpheDtcblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9BamF4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBamtsRVFWUllSKzJWd1FtQU1BeEZrNDFjSVp2b0NHN2lCcnBKVm5DalNNR0RoMkovNnFFSXY5ZUcvTWZqUTFRR1B4MmNMd1NnQVJxZ0FScjRod0YzbnlKaVU5VkkzSTdWek03V1BHekEzV2NSMlZzTDcvL0Z6QTVrRmdZb3kwQUlPTHpzVEFFQUVLbndMb0FYaUhSNE4wQUZvaXY4RThBRFF0REMxVXFaN2dEUzdNd01BV2lBQm1pQUJvWWJ1QUFmVGlZaHNFaUNJUUFBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNvbi9wdWxsRG93bi5wbmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=