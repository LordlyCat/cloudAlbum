webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Serif;\n}\n\n.wrapper {\n    position: relative;\n    margin: auto;\n    margin-top: 99px;\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.wrapper img {\n    display: inline-block;\n    width: 300px;\n    border: solid 2px pink;\n    border-radius: 2%;\n    position: absolute;\n}\n\n.loading {\n    display: block;\n    position: absolute;\n}\n\nheader {\n    width: 100%;\n    height: 60px;\n    background: #d6ecfd;\n    box-shadow: 0px 3px 15px 2px lightgray;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n}\n\nheader div {\n    display: inline-block;\n    line-height: 60px;\n}\n\nheader .home {\n    font-family: Serif;\n    font-size: 35px;\n    line-height: 60px;\n    margin-left: 4%;\n    cursor: pointer;\n}\n\nheader .function {\n    width: 30%;\n    height: 100%;\n    float: right;\n    position: relative;\n}\n\nheader .user {\n    width: 125px;\n    height: 100%;\n    font-size: 20px;\n    line-height: 60px;\n    text-align: right;\n    float: left;\n    overflow: hidden;\n    cursor: pointer;\n}\n\nheader .pullIcon {\n    margin-left: -5px;\n    margin-top: 14px;\n    cursor: pointer;\n    float: left;\n}\n\n.signIn,\n.signOut {\n    height: 100%;\n    cursor: pointer;\n    float: left;\n    overflow: hidden;\n}\n\n.signIn {\n    margin-left: 20%;\n}\n\n.signOut {\n    margin-left: 8%;\n}\n\nheader .board {\n    display: none;\n    width: 140px;\n    height: 200px;\n    background: white;\n    position: absolute;\n    left: 30px;\n    top: 55px;\n    box-shadow: 0px 10px 20px 2px lightgray;\n}\n\nheader .board div {\n    display: block;\n    height: 40px;\n    line-height: 40px;\n    border-bottom: solid 1px lightgray;\n    text-align: center;\n    cursor: pointer;\n}\n\nheader .board div:hover {\n    background: rgba(100, 40, 80, 0.3);\n    color: white;\n}\n\n.triangle {\n    display: none;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 13px solid transparent;\n    border-bottom: 13px solid white;\n    top: 42px;\n    left: 110px;\n    z-index: 99999;\n}\n\n\n.album {\n\tdisplay: block;\n    width: 1150px;\n    margin: auto;\n    margin-top: 70px;\n}\n\n.album div.albumBox,\n.add {\n    display: inline-block;\n    width: 240px;\n    height: 300px;\n    box-shadow: 0px 10px 20px 2px lightgray;\n    margin-left: 35px;\n    margin-top: 50px;\n    overflow: hidden;\n}\n\n.album div.cover {\n    width: 100%;\n    height: 240px;\n    background: url(" + __webpack_require__(4) + ") no-repeat;\n    background-size: 40%;\n    background-position: center;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.album div.cover img {\n    height: 100%;\n    width: 100%;\n}\n\n.album .albumName {\n    font-size: 22px;\n    margin-left: 5%;\n}\n\n.album .time,\n.album .status {\n    display: inline-block;\n    opacity: 0.5;\n}\n\n.album .time {\n    margin-left: 5%;\n}\n\n.album .status {\n    float: right;\n    margin-right: 6%;\n}\n\n.add img {\n    display: block;\n    width: 80px;\n    margin: auto;\n    margin-top: 34%;\n    cursor: pointer;\n}\n\n.add p {\n    font-size: 26px;\n    text-align: center;\n    margin-top: 20%;\n    opacity: 0.4;\n}\n\n.album .create {\n\tdisplay: none;\n    width: 500px;\n    height: 350px;\n    position: fixed;\n    background: white;\n    left: 30%;\n    top: 26%;\n    box-shadow: 0px 10px 20px 2px lightgray;\n    opacity: 0;\n    transition: opacity 2s;\n    z-index: 999999999;\n}\n\n.fullCover{\n\tdisplay: none;\n\tposition: fixed;\n\twidth: 100%;\n\tbackground: lightgray;\n\topacity: 0.75;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 9999999;\n}\n\n.create .top{\n\twidth: 100%;\n\theight: 45px;\n\tbackground: #f4f9f9;\n}\n\n.create .top p{\n\tdisplay: inline-block;\n\tfloat: left;\n\tline-height: 45px;\n\tmargin-left: 4%;\n}\n\n.create .out{\n\tfloat: right;\n\theight: 100%;\n\twidth: 45px;\n\tbackground: url(" + __webpack_require__(5) + ") no-repeat;\n\tbackground-size: 70%;\n\tbackground-position: 0px 5px;\n\tcursor: pointer;\n}\n\n.name, .permission{\n\twidth: 70%;\n\theight: 40px;\n\tmargin: auto;\n\tmargin-top: 40px;\n}\n\n.albumSetting p{\n\tfloat: left;\n\tfont-size: 20px;\n\tline-height: 40px;\n}\n\n.albumSetting input{\n\tfloat: right;\n\twidth: 220px;\n\theight: 36px;\n\tfont-size: 20px;\n}\n\nselect{\n\twidth: 220px;\n\theight: 30px;\n\tfloat: right;\n}\n\n.btn{\n\twidth: 70%;\n\theight: 26px;\n\tmargin: auto;\n\tmargin-top: 80px;\n\n}\n\n.btn div{\n\twidth: 60px;\n\theight: 100%;\n\tfloat: right;\n\tbackground: white;\n\ttext-align: center;\n\tborder-radius: 10%;\n\tmargin-right: 4%;\n\tbox-shadow: 0px 10px 20px 2px lightgray;\n\tcursor: pointer;\n}\n.btn div:hover{\n\tbackground: #40abd5;\n\tcolor: white;\n}\n\n\n\n\n.showPicture{\n\tdisplay: none;\n    width: 1150px;\n    margin: auto;\n    margin-top: 110px;\n}\n.bar{\n\twidth: 100%;\n\tbackground: rgba(90, 190, 250, 0.16);\n}\n.showPicture .upload{\n\tdisplay: inline-block;\n\twidth: 120px;\n\theight: 35px;\n\tmargin-left: 40px;\n\tcolor: white;\n\tfont-family: 圆体;\n\ttext-align: center;\n\tline-height: 35px;\n\tbackground: #1da1f2;\n\tborder-radius: 8%;\n}\n\n.showPicture .albumName{\n\tdisplay: inline-block;\n\tfloat: left;\n\theight: 100%;\n\tfont-size: 35px;\n\tline-height: 35px;\n}\n\n.showPicture .pictures{\n\twidth: 100%;\n\theight: 400px;\n\tmargin-top: 50px;\n}\n\n\n\n\n\n\n/*The end*/\n", ""]);

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
//console.log(23333);
alert(233)
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAO60lEQVR4Xu1dfYwcZRn/Pbt7B7Ra+nGzJEa0JX5SU1tTm15nI62AERVtRSUkEloUAwgKIYaP7tJtdw+lMVAEgmAMxQ8CSuQqEBAkLXTn2gKxJQqCSiyoKDt37VGwlt7uPGZmb9u925l552tvd7rv/nc38z7P+/6e3/vxfMwMQf66GgHq6tHLwUMSoMtJIAkgCdDlCHT58OUKIAnQ5Qh0+fDlCiAJ0OUIdPnw5QogCdDlCHT58OUKIAnQ5Qh0+fDlCiAJ4A2Ba7aPzuqlw0s5QSezgZNASHprKe8KggAxDABlBl5P9fIz+SXp/wSRI2ojXAGu10bOMdi4mAhniITJ6y1FYLvBuHMgo/wySi2OBMiX9r2visqPQXRWlAqlrHAIMHMJKVxYXJr+azhJtda2BMhpI/2M6kMEmhOFEikjcgQOGOCzB9T002ElNxEgN6SfBsa2sIJl+9YjwJQ4q7hszmNhNE0gQH7ozdkVfudFAp0URqhsO0UIMA9XU9M+dsPSd70RVOMEAmQ1/V4CznMRdgDgHcz4A4gOB1Uq24kRIFAS4EUA+gHMdmzB/GAhk/6yWKL9HUcIkCuNzAcZf3IRtLGgKlcHVSTbBUcgq5XXEqjoKIH4E4Vl6d1BNBwlgKb/HMDXHXiypqD2bQ6iQLaJBoFcqfw1EN3vIO2+gqq4rdzO3KlfyWr6KAEn2tz5i4KqnB/NMIDrtPLCBOE0MM0EY7kllzAKYA8z7e2ZntySXzTL/Fv+JiGQ0/Q7AXxrMjDMeKuYUWYEAcxaAdaWypkE0XY7AZVkYv73l855MYjwxjZZTV9H4NUAzRXJYmAQCdxS7FekN9IAVnZn+YNUpb/Y4sf8qUImbWtDN7wtAmS18uUE+lETs4A/F1XlVJHB3K5nh4ZXEhs3ezF8sxzenJzWc6VcEY4ik9X0Fwn4qA3mVxVU5Sa/trIIkNOGCwBnmwnADxTV9Ff9Cm3YVtYRkA/a3mrHGK0Sr7hBTe8JJecYaezkqTHolqLad4XfYY4ToHw7QJfazcCCml7jV2iNVOW7AVodpG1TG0mCI5BkNf2HBFzlZbLmd++fKVo9awQo6XeAcHFUBMiV9CtAuDkS49eFMEaTydSifP+svZHKjZmwrFb+AYHs3PEtBVVZ2TicrFb+HTGNJhO9l+SXnbjPbqiREyC7Q19OBra64crAm2AeBNERYxIsj+A013aMbcWMsiJmNou0u74JAPoMwH9LJnrOtJs80ROgpG8lGnfvJg3dNDwx8oWMsskOlfyO/XOrRsW89iVn1KirYxK+CFDSn2hI4//TQCozoM56tRHbSAlQO/Hzg3bGM41vgJd7OcxlteFNBP6uPQl4b0FNz4t0WsVIWAgCmKN86Y3j+hbctZjG6kOOlgCl8mYiusAOzyp4kRfj19tmI5QVI/sKu+qHALlS+XEQndkolME3FtX0NS0hQK6k7wdhZvMJ1b+LYp5gKwcre+2ik0FdHiG6MbjBDwGyE7cAa3QMjKU4+YF8ZvZr5t+RrQBuh79kIjUvyOndZSt4qqAqtTByl/3CEqBGAr61qKa/MzUEYH6+kEkvDGIn5zNF954D/BAgp+kPA/h8M/ZcLqhpq+YjuhVA0/MErLMxdODZ6raqFFRFWNAahHR+2liJLZDpsSxkpsGBTN89ftoHudcPAbLayFcIxq/t9DDjI8WM8rIkQBAroJbVTDJtnXjm4c1BI6deu+GHAKbMXEn/FwjvaZLPfG4hk/5VdARwCAAxeE9RTZuVLb5/TluA6VIWVaXpsOlbQcAG5gG1enBst22Ci3GlU5wjoLoJzfwSIFsqP0pEn23WTVcX1L6NLSeAqfhYOwRmXYJdZvKqlSFr3wRwLvO7qaAqV0VGANPQTkUlzHxPMZP2lRiyZtl/K3+Pyq2MYvaNj9HprHNEBbcwZO2XADmHSi8G7iiqyqWREiCn6YNOYVy/gSC3bCInsKIdxSJe8hx1FjCwvqgq4VLhNqztcAIMrwb4btvZ5iOlmyvpN4Ngm9tm4NWiqgiriqKa8XU5Vp6iWtlttyI56fJLei997mgCWKdOTTfLuOyzeoxRJmwqqsp6u8GaIFeqlbudkkm1Nu1JBmW18m4C+YpnhDkAO5Gh4wngaZlkjIJ4kHE0HQzwSiHAIYJKXmaX0z2i4hZzVSLg/Xbtow5bdzwBxn3PyAtCTNcvlUgtDBJSDmd8l23NFMy4kpPY41YDEeWZJRYEsE7LLtk8vwbxk0r2K9vtfvtgz9EWjd6NKIWdnNazSFSe5aXvsSGAV5dJNGhzeTXAK/2kkkUyvVyvZSPHtjpuS8zPJ6f3LG80aq5U3gOij9tvBRgsqsoqL7rd7okVASwSDA2vBPMmpz1SAMiW5LTU6ihmjl/gs5r+IAETauzqMpxWJGvFADk+osVEq4rL+kxXOfAvdgSojzSr6aZPvNojEbZwApvC+Pr1RA2B5xqc2OYnUSMuanX2RMxxOiTFrBL35PTUvDCEji0B6kQY31eXM2HmeCGoeWmUgT0E2puclhwMA5ApLEyiRjiLPdTfu7nCYaOEsSdA4LXPY0P3g5t7ts4t/Gyp9+iGWvEMo7LH4VlLy3MImjCSBHAhgvDgVrOiY8rWLcljuaHTUnO9rk6u20iIhJEkgAsBXLN0je1sZqC7GwcE8eXdciNBo4SSAA4EEEXrmpsdPci5lbNba0bAxI5bYWtQuZIANgQQn9qdlg1ak0wktwmSPE2PXHk8jli3icjlN2EkCTAJ/ZwmCNUKrcV7nR5dN4NQqWmphV73fSdVUUYJJQEaUBaFas1TOyfpChgYdDyRuxDE7+x0EjW+FZheQeiEkSTAOMqi/HxjtE60DNsbLtq0syhL6vWQKQkAwIu7N3n2+tkqgpSwCXeaWslc6CihJICVaXR+ArlmCPvZ64kENkkeL8b1ek/YhFHXE0Dk7olcNjcSTEXNgTDULEgYdTUBRDPY69LtVKsQRbbOy0oQJkrYtQQQHuR8Lt3N+3G0hz4REYImjLqSACJ3L6i/bh0mD1UWhkk7iwzt6BoGTBh1HQFEGbp2lYsFNXxjO9GWZheHiB0BxmfvBUyY6/cJWi/unlf/OQqDtUKG34RRrAgQpjDDiqO7lGW5uXutMFSrZPpNGMWGAG6ROjMVmprWs8Itxi529/y/dqZVRgwr1zVKyBgtZJRZdR2xIYDoSRo3Eoj2Rq/uXljDTGV7t4RR41kgFgQQzd46sBYJEj2rGh/2EMXMzQTP5HLsqTRUq3TV3jlQ2W8nv/Gc0/EEEM3epgE2PDTaKnevVUaLWm5O0znWBBAZ0BEw86HRJFaRYT5ZbP89gTi7e16JEmsCuL42xSsCLvdNVZg2gq4GFhFrAogqapHASjKsbwe4vhDaHr2pDdMGtmDIhrElgGue2yyqbMhw+X1o9Fg88TvxJJYEECVp7J6P90GCUAWZISfklDePHQFEZVkAHF8SKazkPUbdPTdWxYoAoji9lwydk8vo9ymcKZ+qLVIYKwKIgj1eK2pNEjCsx8etbxa2630ALbKpL7GxIYBw+fb5IqeaC1ldyYTR1AnJbWHr8H2h3kE3x4IAwpq2AC+F7CAbtLUrHU8AUXGGhR5jkzmT24pkTJU7fWOxY3IB4nLsmCLf4d3uCAIIs3QdDmKcuzcFBCjfCqLLJoM08TVoLk+1xBndGPR9Qj1ASd9IhO/Z2Oo3xUz6nMn/9/ay6CF9PRjXNwvFb4sZxfqGn+80bwyAjUMXJ38bIacN/xTgC21sdWcxozR9/dUTAbJDw98m5tuaAGG8Vsgo1hOttQPg2Dan9+DFAcx49nFiIixb0p8lwuKmsRA2FJYpTZ/s8UaAHcNnkMFP2ANESwpq37NHSVBZjdqXQdv2xY54GtJfr5l5LxKJwcb3CmZL+oeJ8JKDpPMKqnJfoC2gtsTrbwKYYbMK7CpklKX+ui/vbgUCbiXkh49Lzrxx8WzThhN+nlYAs4UgQ7exoCp2X6xuxTilTBsE1g7p5yUY9zqA45g19UyAa3eOnJqqGi+4oH9XkpMD9S9OSitNDQJrnxk5OTFmmAf0bzprPLpNB14BrFXA+QNDR+Qy82MAdoPo8NRA0K1aKAUYnyTr8+/OPwYeLqrK2U53eF4BTAHX7jowJzV26CUQ9XUr7LEaN2M0Acxfn1Fej4QAppDrh4ZPZ+bfxwqILu0sMX9uQyb9qNvwfa0AdUE5baSf2XiECEceSepSjDt12AcM8NkDavppUQcDEcAUmt8+eko1MXYXgNNFSuT1KUSAsZWp56KiOvMVL1oDE6AufG2pfG6C6JJg5dxeuijv8YjAUwbzHQOZ9P0e77duy2r6zwg4f3IbZr69mElf5vkL3PnnDvRVDx36NBMtIeYFIOr10xF5r28EKmD80UjwUE/v8Vvzi2cM+5ZQI8BDBHyhiQCggaLal/VMgCDKZZv2I5Ar6S+AcGpTT5guL2T6bpMEaL+NWtaD8XOc7VmBEvjihn7FXB3k71hFIKvp9xFwrt34kjP53fn56bcDE+C6nfsWJLg62044JxOvDCyZ849jFdg4jEtQwXUkdxCYADltuABw1h4MLjN6l3l1VeIAaJz6mNX0iwC+hUAn2PY7kcwU+mdr5rXABFi3S/+QUcHLbsAw+AECthMlXjCIq3ECMXZ9NRK9gNEPxjeIcLJL/58sqMoZ9euBCWAKyGn6T9yzVLGD8RjvMB9k9C5oXJlDEeDq5/ad2PNO9XmPH4M8xsGNw/Ca37MQigDmkGtf6MSQ434TB1y6oY/jfv/koYYmQG0rGOlnGI8G+SxLN2DfzjEy49+JBJ2/YVnfk3b9iIQA1kqw8+2TkpX/XcPgi4hoejsHLXWbHznFWwS+PXm8UsgvpoNOmERGgLqC/M6RGRWjugYGFhHRKQDmAXivNMoUIMDYBaJdBH58g6o84kVj5ATwolTe0zkISAJ0ji3a0hNJgLbA3jlKJQE6xxZt6YkkQFtg7xylkgCdY4u29EQSoC2wd45SSYDOsUVbeiIJ0BbYO0epJEDn2KItPZEEaAvsnaNUEqBzbNGWnkgCtAX2zlEqCdA5tmhLTyQB2gJ75yiVBOgcW7SlJ5IAbYG9c5T+H/wE1BcHEp8MAAAAAElFTkSuQmCC"

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

    newAlbum.innerHTML = '<div class="cover">' +
        '<img src="" alt="">' +
        '</div>' +
        '<p class="albumName">' + albumName + ' <span>(' + 0 + ')</span>' + '</p>' +
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

module.exports = ajax;


//The end

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjklEQVRYR+2VwQmAMAxFk41cIZvoCG7iBrpJVnCjSMGDh2J/6qEIv9eG/MfjQ1QGPx2cLwSgARqgARr4hwF3nyJiU9VI3I7VzM7WPGzA3WcR2VsL7//FzA5kFgYoy0AIOLzsTAEAEKnwLoAXiHR4N0AFoiv8E8ADQtDC1UqZ7gDS7MwMAWiABmiABoYbuAAfTiYhsEiCIQAAAABJRU5ErkJggg=="

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OWUzNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vYWxidW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pY29uL291dC5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BamF4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL3B1bGxEb3duLnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLHVCQUF1QixpQkFBaUIsNkJBQTZCLEdBQUcsa0JBQWtCLDRCQUE0QixtQkFBbUIsNkJBQTZCLHdCQUF3Qix5QkFBeUIsR0FBRyxjQUFjLHFCQUFxQix5QkFBeUIsR0FBRyxZQUFZLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZDQUE2QyxzQkFBc0IsbUJBQW1CLGFBQWEsR0FBRyxnQkFBZ0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQix5QkFBeUIsc0JBQXNCLHdCQUF3QixzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLGlCQUFpQixtQkFBbUIsbUJBQW1CLHlCQUF5QixHQUFHLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNCQUFzQix3QkFBd0Isd0JBQXdCLGtCQUFrQix1QkFBdUIsc0JBQXNCLEdBQUcsc0JB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QUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEOzs7QUFHQSxTOzs7Ozs7QUM3R0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQsc0VBQXNFOzs7QUFHdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxTOzs7Ozs7QUNwRUEsaUNBQWlDLG9SIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBTZXJpZjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOTlweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLndyYXBwZXIgaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHBpbms7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2ZWNmZDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IDJweCBsaWdodGdyYXk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5oZWFkZXIgLmhvbWUge1xcbiAgICBmb250LWZhbWlseTogU2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLmZ1bmN0aW9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIC51c2VyIHtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLnB1bGxJY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5zaWduSW4sXFxuLnNpZ25PdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWduSW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG5cXG4uc2lnbk91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcXG59XFxuXFxuaGVhZGVyIC5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzBweDtcXG4gICAgdG9wOiA1NXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCBsaWdodGdyYXk7XFxufVxcblxcbmhlYWRlciAuYm9hcmQgZGl2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBsaWdodGdyYXk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgLmJvYXJkIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCA0MCwgODAsIDAuMyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRyaWFuZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHdoaXRlO1xcbiAgICB0b3A6IDQycHg7XFxuICAgIGxlZnQ6IDExMHB4O1xcbiAgICB6LWluZGV4OiA5OTk5OTtcXG59XFxuXFxuXFxuLmFsYnVtIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDExNTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4uYWxidW0gZGl2LmFsYnVtQm94LFxcbi5hZGQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAycHggbGlnaHRncmF5O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFsYnVtIGRpdi5jb3ZlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaWNvbi9hbGJ1bS5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbGJ1bSBkaXYuY292ZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFsYnVtIC5hbGJ1bU5hbWUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuLmFsYnVtIC50aW1lLFxcbi5hbGJ1bSAuc3RhdHVzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5hbGJ1bSAudGltZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuLmFsYnVtIC5zdGF0dXMge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNiU7XFxufVxcblxcbi5hZGQgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDM0JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHAge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5hbGJ1bSAuY3JlYXRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdG9wOiAyNiU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IGxpZ2h0Z3JheTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xcbn1cXG5cXG4uZnVsbENvdmVye1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG5cXHRvcGFjaXR5OiAwLjc1O1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDk5OTk5OTk7XFxufVxcblxcbi5jcmVhdGUgLnRvcHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0YmFja2dyb3VuZDogI2Y0ZjlmOTtcXG59XFxuXFxuLmNyZWF0ZSAudG9wIHB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGxpbmUtaGVpZ2h0OiA0NXB4O1xcblxcdG1hcmdpbi1sZWZ0OiA0JTtcXG59XFxuXFxuLmNyZWF0ZSAub3V0e1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDQ1cHg7XFxuXFx0YmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ljb24vb3V0LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYW1lLCAucGVybWlzc2lvbntcXG5cXHR3aWR0aDogNzAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLmFsYnVtU2V0dGluZyBwe1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmFsYnVtU2V0dGluZyBpbnB1dHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0d2lkdGg6IDIyMHB4O1xcblxcdGhlaWdodDogMzZweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbnNlbGVjdHtcXG5cXHR3aWR0aDogMjIwcHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmJ0bntcXG5cXHR3aWR0aDogNzAlO1xcblxcdGhlaWdodDogMjZweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLXRvcDogODBweDtcXG5cXG59XFxuXFxuLmJ0biBkaXZ7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAlO1xcblxcdG1hcmdpbi1yaWdodDogNCU7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCAycHggbGlnaHRncmF5O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0biBkaXY6aG92ZXJ7XFxuXFx0YmFja2dyb3VuZDogIzQwYWJkNTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblxcbi5zaG93UGljdHVyZXtcXG5cXHRkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTE1MHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDExMHB4O1xcbn1cXG4uYmFye1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoOTAsIDE5MCwgMjUwLCAwLjE2KTtcXG59XFxuLnNob3dQaWN0dXJlIC51cGxvYWR7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAxMjBweDtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiDlnIbkvZM7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdGJhY2tncm91bmQ6ICMxZGExZjI7XFxuXFx0Ym9yZGVyLXJhZGl1czogOCU7XFxufVxcblxcbi5zaG93UGljdHVyZSAuYWxidW1OYW1le1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uc2hvd1BpY3R1cmUgLnBpY3R1cmVze1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLypUaGUgZW5kKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vanMvdWkuanMnO1xuaW1wb3J0IGFqYXggZnJvbSAnLi4vanMvQWpheC5qcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pY29uL3B1bGxEb3duLnBuZyc7XG4vL2NvbnN0IHJlcXVpcmVDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vaW1nL1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuanBnJC8pO1xuLy9jb25zdCBpbWdBcnIgPSByZXF1aXJlQ29udGV4dC5rZXlzKCkubWFwKHJlcXVpcmVDb250ZXh0KTtcblxuXG52YXIgaGVpZ2h0QXJyID0gW107XG5cbmZ1bmN0aW9uIGdldE1pbkJveEluZGV4KHZhbCwgYXJyKSB7XG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gYXJyW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdBcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyAgICAgaW1nLnNyYyA9IGltZ0FycltpXTtcbi8vICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG4vLyB9XG5cbi8vIHZhciBpbWdET00gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuLy8gdmFyIGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuXG5cbi8v562J5b6F5Zu+54mH5Yqg6L295a6M5q+VXG52YXIgbiA9IDA7XG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IGltZ0Fyci5sZW5ndGg7IGkrKykge1xuLy8gICAgIGltZ0RPTVtpXS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgaWYgKG4gPCBpbWdET00ubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBuKys7XG4vLyAgICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAobiA9PT0gaW1nRE9NLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgc2hvdygpO1xuLy8gICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcbi8vICAgICAgICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy/mjpLliJflm77niYdcbmZ1bmN0aW9uIHNob3coKSB7XG4gICAgdmFyIGNvbCA9IDQ7IC8v5YiX5pWwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPD0gY29sIC0gMSAmJiBpICE9PSAwKSB7XG4gICAgICAgICAgICBoZWlnaHRBcnIucHVzaChpbWdET01baV0uaGVpZ2h0KTtcbiAgICAgICAgICAgIGltZ0RPTVtpXS5zdHlsZS5sZWZ0ID0gMzEwICogaSArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgaGVpZ2h0QXJyLnB1c2goaW1nRE9NW2ldLmhlaWdodCk7XG4gICAgICAgICAgICBpbWdET01baV0uc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/msYLlh7rmnIDnn67nmoTpmJ/liJfpq5jluqZcbiAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbi5hcHBseShudWxsLCBoZWlnaHRBcnIpO1xuICAgICAgICAgICAgLy/msYLlh7rmnIDnn67pmJ/liJflr7nlupTnmoTntKLlvJVcbiAgICAgICAgICAgIHZhciBtaW5JbmRleCA9IGdldE1pbkJveEluZGV4KG1pbkhlaWdodCwgaGVpZ2h0QXJyKTtcbiAgICAgICAgICAgIGlmIChtaW5JbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1nRE9NW2ldLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nRE9NW2ldLnN0eWxlLmxlZnQgPSAzMTAgKiBtaW5JbmRleCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWdET01baV0uc3R5bGUudG9wID0gbWluSGVpZ2h0ICsgMTUgKyAncHgnO1xuICAgICAgICAgICAgaGVpZ2h0QXJyW21pbkluZGV4XSArPSAoaW1nRE9NW2ldLmhlaWdodCArIDE1KTtcbiAgICAgICAgICAgIC8v5rGC5Ye65pyA6auY55qE6Zif5YiX6auY5bqmXG4gICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0QXJyKTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSAzMTAgKiBjb2wgLSAxMCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArIDEwICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG52YXIgaW1nSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG5hamF4KHtcbiAgICB1cmw6ICcvJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBcbiAgICBkYXRhOiB7XG4gICAgICAgIDA6IDJcbiAgICB9LFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKDApO1xuICAgIH1cbn0pXG4vL2NvbnNvbGUubG9nKDIzMzMzKTtcbmFsZXJ0KDIzMylcbi8vVGhlIGVuZFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFPNjBsRVFWUjRYdTFkZll3Y1pSbi9QYnQ3QjdSYStuR3pKRWEwSlg1U1UxdFRtMTVuSTYyQUVSVnRSU1VrRWxvVUF3Z0tJWWFQN3RKdGR3K2xNVkFFZ21BTXhROENTdVFxRUJBa0xYVG4yZ0t4SlFxQ1NpeW9LRHQzN1ZHd2x0N3VQR1ptYjl1OTI1bDU1MnR2ZDdydi9uYzM4ejdQKy82ZTMvdnhmTXdNUWY2NkdnSHE2dEhMd1VNU29NdEpJQWtnQ2REbENIVDU4T1VLSUFuUTVRaDArZkRsQ2lBSjBPVUlkUG53NVFvZ0NkRGxDSFQ1OE9VS0lBblE1UWgwK2ZEbENpQUo0QTJCYTdhUHp1cWx3MHM1UVNlemdaTkFTSHByS2U4S2dnQXhEQUJsQmw1UDlmSXorU1hwL3dTUkkyb2pYQUd1MTBiT01kaTRtQWhuaUlUSjZ5MUZZTHZCdUhNZ28vd3lTaTJPQk1pWDlyMnZpc3FQUVhSV2xBcWxySEFJTUhNSktWeFlYSnIrYXpoSnRkYTJCTWhwSS8yTTZrTUVtaE9GRWlramNnUU9HT0N6QjlUMDAyRWxOeEVnTjZTZkJzYTJzSUpsKzlZandKUTRxN2hzem1OaE5FMGdRSDdvemRrVmZ1ZEZBcDBVUnFoc08wVUlNQTlYVTlNK2RzUFNkNzBSVk9NRUFtUTEvVjRDem5NUmRnRGdIY3o0QTRnT0IxVXEyNGtSSUZBUzRFVUErZ0hNZG16Qi9HQWhrLzZ5V0tMOUhVY0lrQ3VOekFjWmYzSVJ0TEdnS2xjSFZTVGJCVWNncTVYWEVxam9LSUg0RTRWbDZkMUJOQndsZ0tiL0hNRFhIWGl5cHFEMmJRNmlRTGFKQm9GY3FmdzFFTjN2SU8yK2dxcTRyZHpPM0tsZnlXcjZLQUVuMnR6NWk0S3FuQi9OTUlEcnRQTENCT0UwTU0wRVk3a2xsekFLWUE4ejdlMlpudHlTWHpUTC9GditKaUdRMC9RN0FYeHJNakRNZUt1WVVXWUVBY3hhQWRhV3lwa0UwWFk3QVpWa1l2NzNsODU1TVlqd3hqWlpUVjlINE5VQXpSWEpZbUFRQ2R4UzdGZWtOOUlBVm5abitZTlVwYi9ZNHNmOHFVSW1iV3RETjd3dEFtUzE4dVVFK2xFVHM0QS9GMVhsVkpIQjNLNW5oNFpYRWhzM2V6RjhzeHplbkp6V2M2VmNFWTRpazlYMEZ3bjRxQTNtVnhWVTVTYS90cklJa05PR0N3Qm5td25BRHhUVjlGZjlDbTNZVnRZUmtBL2EzbXJIR0swU3I3aEJUZThKSmVjWWFlemtxVEhvbHFMYWQ0WGZZWTRUb0h3N1FKZmF6Y0NDbWw3alYyaU5WT1c3QVZvZHBHMVRHMG1DSTVCa05mMkhCRnpsWmJMbWQrK2ZLVm85YXdRbzZYZUFjSEZVQk1pVjlDdEF1RGtTNDllRk1FYVR5ZFNpZlArc3ZaSEtqWm13ckZiK0FZSHMzUEV0QlZWWjJUaWNyRmIrSFRHTkpoTzlsK1NYbmJqUGJxaVJFeUM3UTE5T0JyYTY0Y3JBbTJBZUJORVJZeElzaitBMDEzYU1iY1dNc2lKbU5vdTB1NzRKQVBvTXdIOUxKbnJPdEpzODBST2dwRzhsR25mdkpnM2RORHd4OG9XTXNza09sZnlPL1hPclJzVzg5aVZuMUtpcll4SytDRkRTbjJoSTQvL1RRQ296b001NnRSSGJTQWxRTy9IemczYkdNNDF2Z0pkN09jeGx0ZUZOQlA2dVBRbDRiMEZOejR0MFdzVklXQWdDbUtOODZZM2oraGJjdFpqRzZrT09sZ0NsOG1ZaXVzQU96eXA0a1JmajE5dG1JNVFWSS9zS3UrcUhBTGxTK1hFUW5ka29sTUUzRnRYME5TMGhRSzZrN3dkaFp2TUoxYitMWXA1Z0t3Y3JlKzJpazBGZEhpRzZNYmpCRHdHeUU3Y0FhM1FNaktVNCtZRjhadlpyNXQrUnJRQnVoNzlrSWpVdnlPbmRaU3Q0cXFBcXRUQnlsLzNDRXFCR0FyNjFxS2EvTXpVRVlINitrRWt2REdJbjV6TkY5NTREL0JBZ3Ara1BBL2g4TS9aY0xxaHBxK1lqdWhWQTAvTUVyTE14ZE9EWjZyYXFGRlJGV05BYWhIUisybGlKTFpEcHNTeGtwc0dCVE44OWZ0b0h1ZGNQQWJMYXlGY0l4cS90OUREakk4V004cklrUUJBcm9KYlZUREp0blhqbTRjMUJJNmRldStHSEFLYk1YRW4vRndqdmFaTFBmRzRoay81VmRBUndDQUF4ZUU5UlRadVZMYjUvVGx1QTZWSVdWYVhwc09sYlFjQUc1Z0cxZW5Cc3QyMkNpM0dsVTV3am9Mb0p6ZndTSUZzcVAwcEVuMjNXVFZjWDFMNk5MU2VBcWZoWU93Um1YWUpkWnZLcWxTRnIzd1J3THZPN3FhQXFWMFZHQU5QUVRrVWx6SHhQTVpQMmxSaXladGwvSzMrUHlxMk1ZdmFOajlIcHJITkVCYmN3Wk8yWEFEbUhTaThHN2lpcXlxV1JFaUNuNllOT1lWeS9nU0MzYkNJbnNLSWR4U0plOGh4MUZqQ3d2cWdxNFZMaE5xenRjQUlNcndiNGJ0dlo1aU9sbXl2cE40TmdtOXRtNE5XaXFnaXJpcUthOFhVNVZwNmlXdGx0dHlJNTZmSkxlaTk5N21nQ1dLZE9UVGZMdU95emVveFJKbXdxcXNwNnU4R2FJRmVxbGJ1ZGtrbTFOdTFKQm1XMThtNEMrWXBuaERrQU81R2g0d25nYVpsa2pJSjRrSEUwSFF6d1NpSEFJWUpLWG1hWDB6Mmk0aFp6VlNMZy9YYnRvdzViZHp3QnhuM1B5QXRDVE5jdmxVZ3REQkpTRG1kOGwyM05GTXk0a3BQWTQxWURFZVdaSlJZRXNFN0xMdGs4dndieGswcjJLOXZ0ZnZ0Z3o5RVdqZDZOS0lXZG5OYXpTRlNlNWFYdnNTR0FWNWRKTkdoemVUWEFLLzJra2tVeXZWeXZaU1BIdGpwdVM4elBKNmYzTEc4MGFxNVUzZ09pajl0dkJSZ3Nxc29xTDdyZDdva1ZBU3dTREEydkJQTW1wejFTQU1pVzVMVFU2aWhtamwvZ3M1citJQUVUYXV6cU1weFdKR3ZGQURrK29zVkVxNHJMK2t4WE9mQXZkZ1NvanpTcjZhWlB2Tm9qRWJad0FwdkMrUHIxUkEyQjV4cWMyT1luVVNNdWFuWDJSTXh4T2lURnJCTDM1UFRVdkRDRWppMEI2a1FZMzFlWE0ySG1lQ0dvZVdtVWdUMEUycHVjbGh3TUE1QXBMRXlpUmppTFBkVGZ1N25DWWFPRXNTZEE0TFhQWTBQM2c1dDd0czR0L0d5cDkraUdXdkVNbzdMSDRWbEx5M01JbWpDU0JIQWhndkRnVnJPaVk4cldMY2xqdWFIVFVuTzlyazZ1MjBpSWhKRWtnQXNCWExOMGplMXNacUM3R3djRThlWGRjaU5CbzRTU0FBNEVFRVhybXBzZFBjaTVsYk5iYTBiQXhJNWJZV3RRdVpJQU5nUVFuOXFkbGcxYWswd2t0d21TUEUyUFhIazhqbGkzaWNqbE4yRWtDVEFKL1p3bUNOVUtyY1Y3blI1ZE40TlFxV21waFY3M2ZTZFZVVVlKSlFFYVVCYUZhczFUT3lmcENoZ1lkRHlSdXhERTcreDBFalcrRlpoZVFlaUVrU1RBT01xaS9IeGp0RTYwRE5zYkx0cTBzeWhMNnZXUUtRa0F3SXU3TjNuMit0a3FncFN3Q1hlYVdzbGM2Q2loSklDVmFYUitBcmxtQ1B2WjY0a0VOa2tlTDhiMWVrL1loRkhYRTBEazdvbGNOamNTVEVYTmdURFVMRWdZZFRVQlJEUFk2OUx0VktzUVJiYk95MG9RSmtyWXRRUVFIdVI4THQzTiszRzBoejRSRVlJbWpMcVNBQ0ozTDZpL2JoMG1EMVVXaGtrN2l3enQ2Qm9HVEJoMUhRRkVHYnAybFlzRk5YeGpPOUdXWmhlSGlCMEJ4bWZ2QlV5WTYvY0pXaS91bmxmL09RcUR0VUtHMzRSUnJBZ1FwakREaXFPN2xHVzV1WHV0TUZTclpQcE5HTVdHQUc2Uk9qTVZtcHJXczhJdHhpNTI5L3kvZHFaVlJnd3IxelZLeUJndFpKUlpkUjJ4SVlEb1NSbzNFb2oyUnEvdVhsakRUR1Y3dDRSUjQxa2dGZ1FRemQ0NnNCWUpFajJyR2gvMkVNWE16UVRQNUhMc3FUUlVxM1RWM2psUTJXOG52L0djMC9FRUVNM2VwZ0UyUERUYUtuZXZWVWFMV201TzB6bldCQkFaMEJFdzg2SFJKRmFSWVQ1WmJQODlnVGk3ZTE2SkVtc0N1TDQyeFNzQ0x2ZE5WWmcyZ3E0R0ZoRnJBb2dxYXBIQVNqS3Nid2U0dmhEYUhyMnBEZE1HdG1ESWhyRWxnR3VlMnl5cWJNaHcrWDFvOUZnODhUdnhKSllFRUNWcDdKNlA5MEdDVUFXWklTZmtsRGVQSFFGRVpWa0FIRjhTS2F6a1BVYmRQVGRXeFlvQW9qaTlsd3lkazh2bzl5bWNLWitxTFZJWUt3S0lnajFlSzJwTkVqQ3N4OGV0YnhhMjYzMEFMYktwTDdHeElZQncrZmI1SXFlYUMxbGR5WVRSMUFuSmJXSHI4SDJoM2tFM3g0SUF3cHEyQUMrRjdDQWJ0TFVySFU4QVVYR0doUjVqa3ptVDI0cGtUSlU3ZldPeFkzSUI0bkxzbUNMZjRkM3VDQUlJczNRZERtS2N1emNGQkNqZkNxTExKb00wOFRWb0xrKzF4Qm5kR1BSOVFqMUFTZDlJaE8vWjJPbzN4VXo2bk1uLzkvYXk2Q0Y5UFJqWE53dkZiNHNaeGZxR24rODBid3lBalVNWEozOGJJYWNOL3hUZ0MyMXNkV2N4b3pSOS9kVVRBYkpEdzk4bTV0dWFBR0c4VnNnbzFoT3R0UVBnMkRhbjkrREZBY3g0OW5GaUlpeGIwcDhsd3VLbXNSQTJGSllwVFovczhVYUFIY05ua01GUDJBTkVTd3BxMzdOSFNWQlpqZHFYUWR2MnhZNTRHdEpmcjVsNUx4S0p3Y2IzQ21aTCtvZUo4SktEcFBNS3FuSmZvQzJndHNUcmJ3S1lZYk1LN0Nwa2xLWCt1aS92YmdVQ2JpWGtoNDlMenJ4eDhXelRoaE4rbmxZQXM0VWdRN2V4b0NwMlg2eHV4VGlsVEJzRTFnN3A1eVVZOXpxQTQ1ZzE5VXlBYTNlT25KcXFHaSs0b0g5WGtwTUQ5UzlPU2l0TkRRSnJueGs1T1RGbW1BZjBienByUExwTkIxNEJyRlhBK1FORFIrUXk4Mk1BZG9QbzhOUkEwSzFhS0FVWW55VHI4Ky9PUHdZZUxxcksyVTUzZUY0QlRBSFg3am93SnpWMjZDVVE5WFVyN0xFYU4yTTBBY3hmbjFGZWo0UUFwcERyaDRaUForYmZ4d3FJTHUwc01YOXVReWI5cU52d2ZhMEFkVUU1YmFTZjJYaUVDRWNlU2VwU2pEdDEyQWNNOE5rRGF2cHBVUWNERWNBVW10OCtla28xTVhZWGdOTkZTdVQxS1VTQXNaV3A1NktpT3ZNVkwxb0RFNkF1ZkcycGZHNkM2SkpnNWR4ZXVpanY4WWpBVXdiekhRT1o5UDBlNzdkdXkycjZ6d2c0ZjNJYlpyNjltRWxmNXZrTDNQbm5EdlJWRHgzNk5CTXRJZVlGSU9yMTB4RjVyMjhFS21EODBVandVRS92OFZ2emkyY00rNVpRSThCREJIeWhpUUNnZ2FMYWwvVk1nQ0RLWlp2Mkk1QXI2UytBY0dwVFQ1Z3VMMlQ2YnBNRWFMK05XdGFEOFhPYzdWbUJFdmppaG43RlhCM2s3MWhGSUt2cDl4RndydDM0a2pQNTNmbjU2YmNERStDNm5mc1dKTGc2MjA0NEp4T3ZEQ3laODQ5akZkZzRqRXRRd1hVa2R4Q1lBRGx0dUFCdzFoNE1Mak42bDNsMVZlSUFhSno2bU5YMGl3QytoVUFuMlBZN2tjd1UrbWRyNXJYQUJGaTNTLytRVWNITGJzQXcrQUVDdGhNbFhqQ0lxM0VDTVhaOU5SSzlnTkVQeGplSWNMSkwvNThzcU1vWjlldUJDV0FLeUduNlQ5eXpWTEdEOFJqdk1COWs5QzVvWEpsREVlRHE1L2FkMlBOTzlYbVBINE04eHNHTncvQ2EzN01RaWdEbWtHdGY2TVNRNDM0VEIxeTZvWS9qZnYva29ZWW1RRzByR09sbkdJOEcrU3hMTjJEZnpqRXk0OStKQkoyL1lWbmZrM2I5aUlRQTFrcXc4KzJUa3BYL1hjUGdpNGhvZWpzSExYV2JIem5GV3dTK1BYbThVc2d2cG9OT21FUkdnTHFDL002UkdSV2p1Z1lHRmhIUktRRG1BWGl2Tk1vVUlNRFlCYUpkQkg1OGc2bzg0a1ZqNUFUd29sVGUwemtJU0FKMGppM2EwaE5KZ0xiQTNqbEtKUUU2eHhadDZZa2tRRnRnN3h5bGtnQ2RZNHUyOUVRU29DMndkNDVTU1lET3NVVmJlaUlKMEJiWU8wZXBKRURuMktJdFBaRUVhQXZzbmFOVUVxQnpiTkdXbmtnQ3RBWDJ6bEVxQ2RBNXRtaExUeVFCMmdKNzV5aVZCT2djVzdTbEo1SUFiWUc5YzVUK0gvd0UxQmNIRXA4TUFBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ljb24vYWxidW0ucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFINmtsRVFWUjRYdTFiTzZ4VlJSUmRrOWlvVWJGUUUxR0J4R2lERVNxTjRBZGpEMzdpQjQyb2xWWnZibU9pRkVLTVdsaThmUXVEbFlvSkVCRVZMS3lNZ3FqUldBaVJSaHNCd1VRb0JJM1lrR3l6cm5NT2MrYk9uRFBuODk0anlrbHU4OTZjTTdQWFh2c3plL1lZL004Zk14L3lXMnVYR21PV3FPbzlBQllCV0EzZ29tRHVzd0MrQkhES0dMTlhWWStJeU9HNVh0K2NBVEFhamRZQ2VGaFY3d053ZFVkQlRoaGpQZ1d3YzNaMmRrL0hiOVMrTmlnQVR0T3ZxT282QUpjTXZPQXp4cGpkcXJweFNHWU1Bb0MxZGdXQWpRQWVHbGpvNk9lTU1kdFY5WFVST2RCM3ZsNEFXR3NYR1dQZVVOWDFmUmZTOGYwdEFGNFVrVk1kMzBkbkFLeTFwUG0yVEtyL0NlQkRBSFJxMUJvWGZLclFvR01RblNOL1pOTlNBQThBdUN4RHNETUFIaGVSM1JsanA0YTBCcUNGMW44QjhCYUEzVjJwNm9BaDBNOEF1TDVCd0U1c2FBVUFoUWZ3RFlDYmF4YXpEOEFtRWRuYlJTT3BkNnkxREtHYkFOeGQ4OTBmQWR6ZXhpU3lBWERhZUIvQWpZa0ZVT05QNWdydW1IUXJ2NldxQjNNWDdZQjR0NFlSQk9IUlhOWmxBZUNFLzZyRzNqZUxDTFVUZmR6N3pBdW9SZG8zZjdHSFBvSS9zbWRQblJEV1dzNzNVdUk3OUF1cmNrQm9CTURSL3J1RTVvOERlQ0ttZGZmZURJQ25hZ1J1c2hLQzhRNkFjWXdoamcwZko1eGxsam5VQWxCbjg2cDZ5Qmh6Wjdnd1QzRHJ2SHFUa0RuL1o5U1FHQkNjVDFYM0cyT1dSejdVQ0VJdEFLUFJhRnNzeHRjSVQ0Lzk5b0NDaHpLUkVhTXc1TldCb0twdmpzZmo1MUlvSndGd2NmNmo4TVVhNFdjQlVPdno4WWlJalB5SkdwaHdmeXBQaUFMZ2FFejdEdk41L20yNVQzczM5bk9Yd015SDhNVWNkSlFVck13QzNWb09BVmdjTElST2NYSE1qNlFBMkE3Z3NZZzBLMzNQdW9EQ0YwdGpWcmttQUlHUmhncXBQQ2xUbUFMQWhhenZJOEpQaFRwckxjY3hkVjNJWjYrSXJBbk1JUlVpS3dya08xTUF6TXpNN0RMR1BCaEk5SXVJM0JCTVFxL01NSGMrUEF5VEZmOWpyVDBhSmt1cStzRjRQSzdzV0NzQWNEOFA0T2VJUktSWm1kcW1IT1FDSTFGeGRDNUhtRElGQU12OGVrSUlRTXoyOTRrSTdXcnlPTHNuU053WG5FOFBReVFwN2p0Rmx0aFdCWXZjSVNMbDlqMEU0SytJNXcrMVg1ZUNMalFnRlQrVllNRVpFYm0wV0dnSlFJTFdGZHZ2b0gzdURLbVpEUjJSMmVxYzdHVFRsUEZRKzZTNHo0SmprYkJZbW9zUFFJeit6THJvN0FyNnQ5RithVHJXV3U0SG1DSG1QcWU1Y2ZJS0pneDN1U0NFTElpdHVUUURINERmSXRYYmlzT3cxdEwyVXp1NVVMaXRJa0xCQy9CeVFhZ0k3L3dPTjBTNUxEb3NJc3U4ZVdPTy9ZU0lYTU14RXdBUzN2KzRpRnpuZllqeFBwWWYxR24xYVJIaDRuTkJpQW1mQzV5L2pqQmhpNW5CbFRTVkFvQlk5aFJxc0EzOS9jWGtnakNVOEp3N05OMFlneWJPdlFBZ0pseG9TOHdENnNwUmZaZ3dwUEJjQjRzcDNKblcrYTZKZkJNQVptWm10aGhqbmcwa0NNTmZHL3VQZ1pGaXd0RENjKzdRRDhRWVBza2VDd2JFdkd3SWdPYTY4SnB4TVJBT0JCdXNMalkvTmFXSStBNCtCZ0Rya0N2cUFKZzRDZWNrbWZYOVBnQUEvRVFGQlArYkhjSmxja2tCQUxIMTF3T1FnV0FmUEtaQUdGSjR0N0FtQmw4QTRJSUpOUGlBSmdwMU1ZR1lFMFRMWkNscjNnd1RQbWNDbVdHUW01b2xXYlBIQjlVbFJMbkpVdTcwN0M0cFUvYkVyckFTQmhjNkVacUtEajJkWXJ0RUtJSFFmS2ZDUTRMUU9oV083WmlPaVVoNUpGMVRMTzJUQXJmSkdIUHB6M0hoWm9nSHQrWEd6bjNvM0diSXBjTnNTTG9xbUNYY0RyZnhBMTIzd3pFbXROa09oL1kvcFZ4VlBUa2VqeWVOVzAwRmtaemlRa296VEhGWHVreXlTM3BiT2tackxZdWJaVjJ5Z1FvNWE0NFdSTGg3Q28vQ2pvcEk2ZmxkU1l3c3VDS1RqOXhqOEZjV1JqTGZLNFpSODlSZ3J2RGNXQzBOU21JeCtrK1h4Sndac0JYdDRtQ1IvNm1pcUtyK1BSNlB5eU8vbkxKNDVlVEZzWUJhN1pNVHRDUkMxdkFqTEtBRzJ0L3Z1bExMRDRSSFpCY09Sa0pzRTBkakZWL2dITnY1ZmpSR1JsU084eHFQeHB4Z3FlSm43SEMwVDVrc2k5Y1pneW9uVjA2R1ZQMnlFdFlyWWRDZnlGcmI1bmljSU9UVzdEUGthVFhrb0RzLzhBOUMraDJQT3dUWmQvTnJKQ0t3dkh4THBDbUJYWnBkQzZhdEpQWUc4OVJwWFdRdHBQN2wva2ZwK1kweDEyWTNTRGdRWW5rQi8vVURnTHNpelZIejZSTml4K0VzZTMxQkJVVVFiZGNpVTN3Z3NVMnVBNEdnRVlpNUNwSFVybzAxU2FXRTc5d2tWWmdDZ0c4QjNCUkJOY1VFYW9MTkN2emxab3hOWnNBTWo4RHlxTExTR2U3eWtwVG1md0p3VzEwWGFtNmpaQXFFUHdDc3JXbVVKQWhNZzdzeWdocG5PandsdUZNUUhSNXZrbFJzM3FIWktId3lDb1RxNEZaWVZiK09PTVZpS0p1ak42ZlU2TGJTWEN4L0RMTXBRQ2d3czB4R0ZtYWd5UXNSMWxxMnlVYmJjNTNUdTJPUVZ0bENLQ2ZFZXdsejRERDI1R3pJYlpiMk5FajFabmVXdStJTit3WXFTWTRIUGpYL1NJN3cyUXp3UUtCOXA4eWhHRVpobURSbEM5WGtBRHl3WGc1eisrRGRMTnI3N3pUNmdJZzVNRWQ0TFhLV0dBNWx6ckFMQUFzam5lNzJPTmF4TDRDZFhXRkZweklmdmIweDVvWGN0dnZpNWRZQWVHeFlwNnJiYS95Q3YwQTZ5ODlvMzhhWXlaVVpWVDN0WDVreHhqQmlFRno2Q1A3dVRUaTNVSEFtT2V2bjdjcU1QN3ZyejgxaFF3N0xXNC9wcXZWZUpoQmJwYVBxODRuMjJ0YUNaYnl3dzkwVzYzMnp0TE1KSklCZytlcFZYcHpNTkkwTVdmOGQ0a0xiVG5jZnFiZmd2WDFBMDhwZDI5M2s2bXlrMnR6MGVpSDBTV1BNSis3bVdhZHJjVTBURGNxQTFHUXVYYVZqbTF5ZVZ0WFZ4cGpLNVdsVlBXdU1tVnllZG9rUXE4cWRMMFEyQ1Q3bkRNaGR3RUtQK3djeHM1MTlIQjJIOEFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ljb24vb3V0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcbnZhciBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xudmFyIHB1bGxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1bGxJY29uJyk7XG52YXIgdHJpYW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpYW5nbGUnKTtcbnZhciBmdWxsQ292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbENvdmVyJyk7XG52YXIgY3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZScpO1xudmFyIGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcbnZhciBhZGRCdXR0b24gPSBhZGQucXVlcnlTZWxlY3RvcignaW1nJyk7XG52YXIgb3V0ID0gY3JlYXRlLnF1ZXJ5U2VsZWN0b3IoJy5vdXQnKTtcbnZhciBjYW5jZWwgPSBjcmVhdGUucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xudmFyIGFsYnVtTmFtZUlucHV0ID0gY3JlYXRlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG52YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbnZhciBhbGJ1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGJ1bScpO1xudmFyIGluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNlcnQnKTtcbnZhciBjcmVhdGVCdXR0b24gPSBjcmVhdGUucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XG52YXIgYWxidW1Cb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGJ1bUJveCcpO1xuXG5cbi8vY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5zZWxlY3RlZEluZGV4XS50ZXh0KTtcbi8v6K6+572u6YGu572p5bGC6auY5bqmXG52YXIgaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5mdWxsQ292ZXIuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICBpZiAoZWxlbWVudC5jdXJyZW50U3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY3VycmVudFN0eWxlW2F0dHJdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVthdHRyXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcbiAgICBpZiAoZ2V0U3R5bGUoYm9hcmQsICdkaXNwbGF5JykgPT09ICdibG9jaycpIHtcbiAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHJpYW5nbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHJpYW5nbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlQ3JlYXRlQm9hcmQoKSB7XG4gICAgY3JlYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY3JlYXRlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGZ1bGxDb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFsYnVtTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgc2VsZWN0ZWQuc2VsZWN0ZWRJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgdmFyIHRpbWU7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcbiAgICB9XG4gICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICB9XG4gICAgdGltZSA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgICByZXR1cm4gdGltZTtcbn1cbmdldFRpbWUoKTtcblxuZnVuY3Rpb24gY3JlYXRlQWxidW0oKSB7XG4gICAgdmFyIGZpcnN0QWxidW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxidW1Cb3gnKVswXTtcbiAgICB2YXIgbmV3QWxidW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdBbGJ1bS5jbGFzc05hbWUgPSAnYWxidW1Cb3gnO1xuXG4gICAgdmFyIGFsYnVtTmFtZSA9IGNyZWF0ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgIHZhciBwZXJtaXNzaW9uID0gc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4gICAgbmV3QWxidW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJjb3ZlclwiPicgK1xuICAgICAgICAnPGltZyBzcmM9XCJcIiBhbHQ9XCJcIj4nICtcbiAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAnPHAgY2xhc3M9XCJhbGJ1bU5hbWVcIj4nICsgYWxidW1OYW1lICsgJyA8c3Bhbj4oJyArIDAgKyAnKTwvc3Bhbj4nICsgJzwvcD4nICtcbiAgICAgICAgJzxwIGNsYXNzPVwidGltZVwiPicgKyAnQ3JlYXRlZCBhdCAnICsgZ2V0VGltZSgpICsgJzwvcD4nICtcbiAgICAgICAgJzxwIGNsYXNzPVwic3RhdHVzXCI+JyArIHBlcm1pc3Npb24gKyAnPC9wPic7XG5cbiAgICBpZiAoZmlyc3RBbGJ1bSkge1xuICAgICAgICBhbGJ1bS5pbnNlcnRCZWZvcmUobmV3QWxidW0sIGZpcnN0QWxidW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsYnVtLmluc2VydEJlZm9yZShuZXdBbGJ1bSwgYWRkKTtcbiAgICB9XG5cbiAgICBoaWRlQ3JlYXRlQm9hcmQoKTtcblxuICAgIC8v6YeN5paw6I635Y+W55u45YaM5pWw55uuXG4gICAgYWxidW1Cb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGJ1bUJveCcpO1xufVxuXG51c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUJvYXJkLCBmYWxzZSk7XG5wdWxsSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlCb2FyZCwgZmFsc2UpO1xub3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUNyZWF0ZUJvYXJkLCBmYWxzZSk7XG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQ3JlYXRlQm9hcmQsIGZhbHNlKTtcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNyZWF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmdWxsQ292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNyZWF0ZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9LCAyMDApXG59LCBmYWxzZSk7XG5cbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFsYnVtLCBmYWxzZSk7XG5cblxuLy9UaGUgZW5kXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdWkuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYWpheCggb3B0cyApIHtcblxuICAgIC8vMS7orr7nva7pu5jorqTlj4LmlbBcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsIC8v6K+35rGC5pa55byPXG4gICAgICAgIHVybDogJycsIC8v5Y+R6YCB6K+35rGC55qE5Zyw5Z2AXG4gICAgICAgIGRhdGE6ICcnLCAvL+WPkemAgeaVsOaNrlxuICAgICAgICBhc3luYzogdHJ1ZSwvL+aYr+WQpuW8guatpVxuICAgICAgICBjYWNoZTogdHJ1ZSwvL+aYr+WQpue8k+WtmFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsLy9odHRw5aS05L+h5oGvXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge30sXG4gICAgfTtcblxuICAgIC8vMi7opobnm5blj4LmlbBcbiAgICBmb3IoIHZhciBrZXkgaW4gb3B0cyApIHtcbiAgICAgICAgZGVmYXVsdHNba2V5XSA9IG9wdHNba2V5XTtcbiAgICB9O1xuXG4gICAgLy8zLuaVsOaNruWkhOeQhlxuICAgIGlmICggdHlwZW9mIGRlZmF1bHRzLmRhdGEgPT09ICdvYmplY3QnICkgeyAvL+WkhOeQhmRhdGFcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICBmb3IoIHZhciBrZXkgaW4gZGVmYXVsdHMuZGF0YSApIHtcbiAgICAgICAgICAgIHN0ciArPSBrZXkgKyAnPScgKyBkZWZhdWx0cy5kYXRhW2tleV0gKyAnJidcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0cy5kYXRhID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gICAgfTtcblxuICAgIGRlZmF1bHRzLm1ldGhvZCA9IGRlZmF1bHRzLm1ldGhvZC50b1VwcGVyQ2FzZSgpOyAgLy/or7fmsYLmlrnlvI/lrZfnrKbovazmjaLmiJDlpKflhplcblxuICAgIGRlZmF1bHRzLmNhY2hlID0gZGVmYXVsdHMuY2FjaGUgPyAnJyA6ICcmJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvL+WkhOeQhiDnvJPlrZhcblxuXG4gICAgaWYgKCBkZWZhdWx0cy5tZXRob2QgPT09ICdHRVQnICYmIChkZWZhdWx0cy5kYXRhIHx8IGRlZmF1bHRzLmNhY2hlKSApIHtcbiAgICAgICAgZGVmYXVsdHMudXJsICs9ICc/JyArIGRlZmF1bHRzLmRhdGEgKyBkZWZhdWx0cy5jYWNoZTtcbiAgICB9O1xuXG4gICAgLy80Lue8luWGmWFqYXhcbiAgICB2YXIgb1hociA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IEFjdGl2ZVhvYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG5cblxuICAgIC8v5LiO5pyN5Yqh5Zmo5bu656uL6ZO+5o6l77yM5ZGK6K+J5pyN5Yqh5Zmo5L2g6KaB5YGa5LuA5LmIXG4gICAgb1hoci5vcGVuKGRlZmF1bHRzLm1ldGhvZCwgZGVmYXVsdHMudXJsLCBkZWZhdWx0cy5hc3luYyk7XG5cbiAgICAvL+WPkemAgeivt+axglxuICAgIGlmICggZGVmYXVsdHMubWV0aG9kID09PSAnR0VUJyApIHtcbiAgICAgICAgb1hoci5zZW5kKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9YaHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBkZWZhdWx0cy5jb250ZW50VHlwZSk7XG4gICAgICAgIG9YaHIuc2VuZChkZWZhdWx0cy5kYXRhKTtcbiAgICB9XG5cbiAgICAvL+etieS7o+acjeWKoeWZqOWbnummiFxuICAgIG9YaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIG9YaHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgICAgIGlmIChvWGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuc3VjY2Vzcy5jYWxsKG9YaHIsIG9YaHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuZXJyb3IoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhamF4O1xuXG5cbi8vVGhlIGVuZFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL0FqYXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFqa2xFUVZSWVIrMlZ3UW1BTUF4Rms0MWNJWnZvQ0c3aUJycEpWbkNqU01HRGgySi82cUVJdjllRy9NZmpRMVFHUHgyY0x3U2dBUnFnQVJyNGh3RjNueUppVTlWSTNJN1Z6TTdXUEd6QTNXY1IyVnNMNy8vRnpBNWtGZ1lveTBBSU9MenNUQUVBRUtud0xvQVhpSFI0TjBBRm9pdjhFOEFEUXREQzFVcVo3Z0RTN013TUFXaUFCbWlBQm9ZYnVBQWZUaVloc0VpQ0lRQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pY29uL3B1bGxEb3duLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==