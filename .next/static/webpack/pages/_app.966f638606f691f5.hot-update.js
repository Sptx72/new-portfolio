"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefinded,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar NavBar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Felx, {\n                align: \"center\",\n                mr: 5,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    as: \"h1\",\n                    size: \"lg\",\n                    letterSpacing: \"tighter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n                        lineNumber: 43,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n                lineNumber: 41,\n                columnNumber: 21\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"C:\\\\Users\\\\Marco Andres\\\\Desktop\\\\new port\\\\new-portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_s1(NavBar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ3NHO0FBQ3hGOztBQUUvQyxJQUFNZSxRQUFRLEdBQUcsZ0JBQTRCO1FBQTFCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsSUFBTUMsTUFBTSxHQUFHRixJQUFJLEtBQUtELElBQUk7SUFDNUIsSUFBTUksYUFBYSxHQUFHUCxtRUFBaUIsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7SUFDcEUscUJBQ0ksOERBQUNaLGtEQUFRO1FBQUNlLElBQUksRUFBRUEsSUFBSTtrQkFDaEIsNEVBQUNaLGtEQUFJO1lBQ0RpQixDQUFDLEVBQUUsQ0FBQztZQUNKQyxFQUFFLEVBQUVILE1BQU0sR0FBRyxXQUFXLEdBQUdJLFVBQVU7WUFDckNDLEtBQUssRUFBRUwsTUFBTSxHQUFHLFNBQVMsR0FBR0MsYUFBYTtzQkFFcENGLFFBQVE7Ozs7O2lCQUNOOzs7OzthQUNKLENBQ2Q7Q0FDSjtHQWRLSCxRQUFROztRQUVZRiwrREFBaUI7OztBQUZyQ0UsS0FBQUEsUUFBUTtBQWdCZCxJQUFNVSxNQUFNLEdBQUdDLFNBQUFBLEtBQUssRUFBSTs7SUFDcEIsSUFBTSxJQUFLLEdBQUlBLEtBQUssQ0FBYlQsSUFBSTtJQUVYLHFCQUNJLDhEQUFDZCxpREFBRztRQUNKd0IsUUFBUSxFQUFDLE9BQU87UUFDaEJDLEVBQUUsRUFBQyxLQUFLO1FBQ1JDLENBQUMsRUFBQyxNQUFNO1FBQ1JQLEVBQUUsRUFBRVQsbUVBQWlCLENBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQztRQUM5Q2lCLEtBQUssRUFBRTtZQUFDQyxjQUFjLEVBQUMsV0FBVztTQUFDO1FBQ25DQyxNQUFNLEVBQUUsQ0FBQztPQUNMTixLQUFLO2tCQUNMLDRFQUFDeEIsdURBQVM7WUFDTitCLE9BQU8sRUFBQyxNQUFNO1lBQ2RaLENBQUMsRUFBRSxDQUFDO1lBQUVhLElBQUksRUFBQyxjQUFjO1lBQ3pCQyxJQUFJLEVBQUMsTUFBTTtZQUNYQyxLQUFLLEVBQUMsUUFBUTtZQUNkQyxPQUFPLEVBQUMsZUFBZTtzQkFFbkIsNEVBQUNDLElBQUk7Z0JBQUNGLEtBQUssRUFBQyxRQUFRO2dCQUFDRyxFQUFFLEVBQUUsQ0FBQzswQkFDdEIsNEVBQUNqQyxxREFBTztvQkFBQ3NCLEVBQUUsRUFBQyxJQUFJO29CQUFDWSxJQUFJLEVBQUMsSUFBSTtvQkFBQ0MsYUFBYSxFQUFFLFNBQVM7OEJBQy9DLDRFQUFDekMsNkNBQUk7Ozs7NkJBQUU7Ozs7O3lCQUNEOzs7OztxQkFDUDs7Ozs7aUJBQ0M7Ozs7O2FBQ2QsQ0FDVDtDQUNKO0lBM0JLeUIsTUFBTTs7UUFRQVosK0RBQWlCOzs7QUFSdkJZLE1BQUFBLE1BQU07QUE2QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0NvbnRhaW5lcixCb3gsTGluayxTdGFjayxIZWFkaW5nLEZsZXgsTWVudSxNZW51SXRlbSxNZW51TGlzdCxNZW51QnV0dG9uLEljb25CdXR0b24sIHVzZUNvbG9yTW9kZVZhbHVlfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHtIdW1idXJnZXJJY29ufSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHtocmVmLCBwYXRoLCBjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWY7XHJcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIHA9ezJ9IFxyXG4gICAgICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmRlZH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZCYXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7cGF0aH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICBwb3NpdGlvbj0nZml4ZWQnXHJcbiAgICAgICAgYXM9J25hdidcclxuICAgICAgICB3PScxMDAlJ1xyXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywnIzIwMjAyMzgwJyl9XHJcbiAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjonYmx1cigxMHB4J319XHJcbiAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PSdmbGV4JyBcclxuICAgICAgICAgICAgICAgIHA9ezJ9IG1heFc9J2NvbnRhaW5lci5tZCcgXHJcbiAgICAgICAgICAgICAgICB3cmFwPSd3cmFwJyBcclxuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInIFxyXG4gICAgICAgICAgICAgICAganVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RmVseCBhbGlnbj0nY2VudGVyJyBtcj17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMScgc2l6ZT0nbGcnIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZlbHg+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkh1bWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmRlZCIsImNvbG9yIiwiTmF2QmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJGZWx4IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});