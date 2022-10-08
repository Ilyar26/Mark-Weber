/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/***/ (() => {

eval("\r\n\r\nconst roomButtons = document.querySelector('.buttons');\r\nconst btns = roomButtons.querySelectorAll('button');\r\n\r\nbtns.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n        btns.forEach(item => {\r\n            if(item.classList.contains('active')) {\r\n                item.classList.remove('active');\r\n            }\r\n        })\r\n        e.target.classList.add('active');\r\n    })\r\n});\r\n\r\nconst square = document.querySelector('.square');\r\nconst price = document.querySelector('.price');\r\nconst inputs = document.querySelectorAll('.input-wrap');\r\n\r\nconst minSquareInput = inputs[0].querySelector('input');\r\nconst maxSquareInput = inputs[1].querySelector('input');\r\nconst minPriceInput = inputs[2].querySelector('input');\r\nconst maxPriceInput = inputs[3].querySelector('input');\r\n\r\nconst minAvailableSquare = 32;\r\nconst maxAvailableSquare = 186;\r\nconst minAvailablePrice = 1.5;\r\nconst maxAvailablePrice = 17.5;\r\n\r\nlet minSquare = minSquareInput.value = minAvailableSquare;\r\nlet maxSquare = maxSquareInput.value = maxAvailableSquare ;\r\nlet minPrice = minPriceInput.value = minAvailablePrice;\r\nlet maxPrice = maxPriceInput.value = maxAvailablePrice;\r\n\r\n\r\nconst setPolzunok = (selector, min, max) => {\r\n    $( selector ).slider( \"values\", [ min, max] );\r\n}\r\n\r\nminSquareInput.onchange= () => {\r\n    minSquare = +minSquareInput.value;\r\n\r\n    if(minSquare > maxSquare) {\r\n        minSquare = minSquareInput.value = +maxSquareInput.value - 1;\r\n    } else if(minSquare > maxAvailableSquare) {\r\n        minSquare = minSquareInput.value = maxAvailableSquare - 1;\r\n    } else if(minSquare < minAvailableSquare) {\r\n        minSquare = minSquareInput.value = minAvailableSquare;\r\n    } else {\r\n        minSquare = +minSquareInput.value;\r\n    }\r\n\r\n    setPolzunok(\".polzunok-square\", minSquare, maxSquare);\r\n}\r\n\r\nmaxSquareInput.onchange = () => {\r\n    maxSquare = +maxSquareInput.value;\r\n\r\n    if(maxSquare < minSquare) {\r\n        maxSquare = maxSquareInput.value = (+minSquareInput.value + 1);\r\n    } else if(maxSquare > maxAvailableSquare) {\r\n        maxSquare = maxSquareInput.value = maxAvailableSquare;\r\n    } else if(maxSquare < minAvailableSquare) {\r\n        maxSquare = maxSquareInput.value = minAvailableSquare + 1;\r\n    } else {\r\n        maxSquare = +maxSquareInput.value;\r\n    }\r\n\r\n    setPolzunok(\".polzunok-square\", minSquare, maxSquare);\r\n}\r\n\r\nminPriceInput.onchange= () => {\r\n    minPrice = +minPriceInput.value;\r\n\r\n    if(minPrice > maxPrice) {\r\n    minPrice = minPriceInput.value = +maxPriceInput.value - 1;\r\n    } else if(minPrice > maxAvailablePrice) {\r\n    minPrice = minPriceInput.value = maxAvailablePrice - 1;\r\n    } else if(minPrice < minAvailablePrice) {\r\n    minPrice = minPriceInput.value = minAvailablePrice;\r\n    } else {\r\n        minPrice = +minPriceInput.value;\r\n    }\r\n    setPolzunok(\".polzunok-price\", minPrice, maxPrice);\r\n}\r\n\r\nmaxPriceInput.onchange = () => {\r\n    maxPrice = +maxPriceInput.value;\r\n\r\n    if(maxPrice < minPrice) {\r\n        maxPrice = maxPriceInput.value = +minPriceInput.value + 1;\r\n    } else if(maxPrice > maxAvailablePrice) {\r\n        maxPrice = maxPriceInput.value = maxAvailablePrice;\r\n    } else if(maxPrice < minAvailablePrice) {\r\n        maxPrice = maxPriceInput.value = minAvailablePrice + 1;\r\n    } else {\r\n        maxPrice = +maxPriceInput.value;\r\n    }\r\n    setPolzunok(\".polzunok-price\", minPrice, maxPrice);\r\n}\r\n\r\n$(\".polzunok-square\").slider({\r\n    min: minAvailableSquare,\r\n    max: maxAvailableSquare,\r\n    values: [minAvailableSquare, maxAvailableSquare],\r\n    range: true,\r\n    animate: \"fast\",  \r\n});\r\n\r\n\r\n$( \".polzunok-square\" ).slider({\r\n    slide: () => {\r\n        let squares = $( \".polzunok-square\").slider( \"values\" );\r\n        minSquare = minSquareInput.value = squares[0]; \r\n        maxSquare = maxSquareInput.value = squares[1]; \r\n    }\r\n});\r\n\r\n$(\".polzunok-price\").slider({\r\n    min: 1.5,\r\n    max: 17.5,\r\n    values: [1.5, 17.5],\r\n    range: true,\r\n    animate: \"fast\",  \r\n});\r\n\r\n$( \".polzunok-price\" ).slider({\r\n    slide: () => {\r\n        let prices = $( \".polzunok-price\").slider( \"values\" );\r\n        minPrice = minPriceInput.value = prices[0]; \r\n        maxPrice = maxPriceInput.value = prices[1]; \r\n    }\r\n});\r\n\r\nconst modalWindow = document.createElement('div');\r\nconst modal = document.querySelector(\".modal\")\r\nconst footer = document.querySelector('footer');\r\nconst findButton = document.querySelector(\".show-button\");\r\nconst clearButton = document.querySelector(\".modal-button\");\r\nconst closeButton = clearButton.querySelector('button');\r\nconst options = document.querySelectorAll(\"option\");\r\n\r\n\r\n\r\nmodalWindow.classList.add(\"modal-window\");\r\nclearButton.before(modalWindow);\r\n\r\nconst find = (rooms, minSquare, maxSquare, minPrice, maxPrice, district) => {\r\n    modalWindow.innerHTML = `\r\n                                <div class=\"modal-header\">\r\n                                Вы указали следующие фильтры:\r\n                                <ul>\r\n                                    <li>Количество комнат:${rooms}</li>\r\n                                    <li>Площадь от ${minSquare}  м² до ${maxSquare}  м²</li>\r\n                                    <li>Cтоимось от ${minPrice} млн.р до ${maxPrice} млн.р.</li>\r\n                                    <li>Жилой массив: ${district}</li>\r\n                                </ul>\r\n                            `\r\n    modal.style.display = \"block\";\r\n}\r\n\r\nconst clear = () => {\r\n    modal.style.display = \"none\";\r\n    modalWindow.innerHTML = '';\r\n}\r\n\r\nfindButton.addEventListener('click', () => {\r\n    let rooms, minSquareFlat, maxSquareFlat, minPriceFlat, maxPriceFlat, selectedDistrict;\r\n    btns.forEach(item => {\r\n        if(item.classList.contains('active')) {\r\n            rooms = item.textContent;\r\n        }\r\n    })\r\n    minSquareFlat = +minSquareInput.value.replace(/,/, '.');\r\n    maxSquareFlat = +maxSquareInput.value.replace(/,/, '.');\r\n    minPriceFlat = +minPriceInput.value.replace(/,/, '.');\r\n    maxPriceFlat = +maxPriceInput.value.replace(/,/, '.');\r\n\r\n    options.forEach(option => {\r\n        if(option.selected === true) {\r\n            selectedDistrict = option.value;\r\n        }\r\n    })\r\n\r\n    find(rooms, minSquareFlat, maxSquareFlat, minPriceFlat, maxPriceFlat, selectedDistrict);\r\n})\r\n\r\ncloseButton.addEventListener(\"click\", () => {\r\n    clear();\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://mark-web/./src/filters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\nconst link = __webpack_require__(/*! ./links */ \"./src/links.js\");\r\nconst filter = __webpack_require__(/*! ./filters */ \"./src/filters.js\");\r\nconst slider = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://mark-web/./src/index.js?");

/***/ }),

/***/ "./src/links.js":
/*!**********************!*\
  !*** ./src/links.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nconst column = document.querySelector('.districts');\r\nconst links = column.querySelectorAll('a');\r\n\r\nconst footer = document.querySelector('.footer');\r\n\r\nconst districtDescription = document.createElement('div');\r\ndistrictDescription.classList.add(\"overlay\");\r\n\r\n\r\nconst inner = ({src,descriptionHeader,descriptionInfo}) =>{\r\n    districtDescription.style.display = 'block'; \r\n    districtDescription.innerHTML = `<div class=\"description\">\r\n                                        <img src=\"${src}\" alt=\"\">\r\n                                        <div class=\"description-header\">${descriptionHeader}</div> \r\n                                        <div class=\"description-info\">${descriptionInfo}</div>\r\n                                    </div>`\r\n    footer.after(districtDescription);                               \r\n    setTimeout(() => {\r\n        districtDescription.style.opacity = \"1\"; \r\n    }, 300)\r\n}\r\n\r\nconst clear = () => {\r\n    districtDescription.style.opacity = \"0\"; \r\n    districtDescription.innerHTML ='';\r\n    districtDescription.style.display = 'none';\r\n}\r\n\r\nconst districtObj = {\r\n    districts : [\r\n        {src: \"../img/district.png\", descriptionHeader: \"Северный парк\", descriptionInfo: \"Жилой комплекс небывалого масштаба с развитой инфраструктурой\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Станция Столичная\", descriptionInfo: \"Современный, стремительно развивающийся жилой комплекс. Он возводится в экологически чистом районе на юго-востоке Петергофа.\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Лето\", descriptionInfo: \"Вдали от шума и пыли городских улиц. Для тех, кто ценит чистоту, уют и комфорт без лишнего пафоса\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Сказочный сад\", descriptionInfo: \"Жилой комплекс имеет географически выгодное местоположение в непосредственной близости от нагорной части города и рядом с основными автомобильными развязками\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Краски\", descriptionInfo: \"Уникальная среда для жизни, где сочетаются возможности большого города и загородный комфорт.\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Ренессанс\", descriptionInfo: \"Жилой комплекс возводится на 13,75 га и расположен в одном из наиболее престижных и экологически чистых районов.\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Компасс сити\", descriptionInfo: \"Жилой комплекс имеет удачное расположение и социальное окружение.\"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Бруклин\", descriptionInfo: \"Жилой — это эко-квартал, который находится в сосновом бору \"},\r\n        {src: \"../img/district.png\", descriptionHeader: \"Монблан\", descriptionInfo: \"Жилой комплекс с замечательной и новейшей инфраструктурой\"},\r\n    ]\r\n}\r\n\r\nlinks.forEach(link => {\r\n    link.addEventListener('mouseover', (e) => {\r\n        districtObj.districts.forEach((district, index) =>\r\n        district.descriptionHeader === e.target.parentNode.textContent\r\n        ? inner(districtObj.districts[index])\r\n        : index++\r\n        )\r\n    })\r\n})\r\n\r\nlinks.forEach(link => {\r\n    link.addEventListener('mouseout', () => {\r\n        clear();\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://mark-web/./src/links.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

eval("\r\n\r\nconst bgSwitches = document.querySelector(\".bg-switches\");\r\nconst leftSwitch = bgSwitches.querySelector('.left');\r\nconst rightSwitch = bgSwitches.querySelector('.right');\r\nconst videoFlower = document.querySelector(\".bgvideo-2\");\r\n\r\nrightSwitch.addEventListener('click', () => {\r\n    videoFlower.style.transform = \"translateX(-0%)\";\r\n    videoFlower.style.transform = \"-ms-translateX(-0%)\";\r\n    videoFlower.style.transition = \"1s all\";\r\n    videoFlower.style.width = \"100%\"\r\n})\r\n\r\nleftSwitch.addEventListener('click', () => {\r\n    videoFlower.style.transform = \"translateX(100%)\"\r\n})\r\n\r\nconst orderLink = document.querySelector(\".order-link\");\r\nconst linkSymbol = document.querySelector(\".link-symbol\");\r\n\r\norderLink.addEventListener('mouseover', () => {\r\n    linkSymbol.style.marginLeft = \"20px\";\r\n    linkSymbol.style.transition = \"0.3s all\";\r\n})\r\norderLink.addEventListener('mouseleave', () => {\r\n    linkSymbol.style.marginLeft = \"0px\";\r\n})\r\n\r\n\n\n//# sourceURL=webpack://mark-web/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;