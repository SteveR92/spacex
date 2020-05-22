webpackHotUpdate("static/development/pages/index.js",{

/***/ "./gql/allCharacters.js":
/*!******************************!*\
  !*** ./gql/allCharacters.js ***!
  \******************************/
/*! exports provided: ALL_CHARACTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CHARACTERS\", function() { return ALL_CHARACTERS; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query allCharacters {\\n    characters {\\n      results {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar ALL_CHARACTERS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncWwvYWxsQ2hhcmFjdGVycy5qcz9iZDUxIl0sIm5hbWVzIjpbIkFMTF9DSEFSQUNURVJTIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHQyxrREFBSCxtQkFBcEIiLCJmaWxlIjoiLi9ncWwvYWxsQ2hhcmFjdGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmV4cG9ydCBjb25zdCBBTExfQ0hBUkFDVEVSUyA9IGdxbGBcbiAgcXVlcnkgYWxsQ2hhcmFjdGVycyB7XG4gICAgY2hhcmFjdGVycyB7XG4gICAgICByZXN1bHRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./gql/allCharacters.js\n");

/***/ }),

/***/ "./gql/getLaunches.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/apollo */ \"./libs/apollo.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _gql_allCharacters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gql/allCharacters */ \"./gql/allCharacters.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_gql_allCharacters__WEBPACK_IMPORTED_MODULE_4__[\"ALL_CHARACTERS\"]),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (error) return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  }, \"Error\");\n  if (loading) return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Setting up Apollo GraphQL in Next.js with Server Side Rendering\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, data.characters.results.map(function (data) {\n    return __jsx(\"ul\", {\n      key: data.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, data.name));\n  })));\n};\n\n_s(IndexPage, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_libs_apollo__WEBPACK_IMPORTED_MODULE_1__[\"withApollo\"])({\n  ssr: true\n})(IndexPage));\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVF1ZXJ5IiwiQUxMX0NIQVJBQ1RFUlMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY2hhcmFjdGVycyIsInJlc3VsdHMiLCJtYXAiLCJpZCIsIm5hbWUiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msb0VBQVEsQ0FBQ0MsaUVBQUQsQ0FEbkI7QUFBQSxNQUNkQyxPQURjLGFBQ2RBLE9BRGM7QUFBQSxNQUNMQyxLQURLLGFBQ0xBLEtBREs7QUFBQSxNQUNFQyxJQURGLGFBQ0VBLElBREY7O0FBRXRCLE1BQUlELEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFYixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVFQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQUNILElBQUQ7QUFBQSxXQUMzQjtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDSSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtKLElBQUksQ0FBQ0ssSUFBVixDQURGLENBRDJCO0FBQUEsR0FBNUIsQ0FESCxDQUpGLENBREY7QUFjRCxDQW5CRDs7R0FBTVYsUztVQUM2QkMsNEQ7OztLQUQ3QkQsUztBQXFCU1csOEhBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMEJaLFNBQTFCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vbGlicy9hcG9sbG9cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7IEFMTF9DSEFSQUNURVJTIH0gZnJvbSBcIi4uL2dxbC9hbGxDaGFyYWN0ZXJzXCI7XG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEFMTF9DSEFSQUNURVJTKTtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yPC9oMT47XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+XG4gICAgICAgIDxoMz5TZXR0aW5nIHVwIEFwb2xsbyBHcmFwaFFMIGluIE5leHQuanMgd2l0aCBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmc8L2gzPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhLmNoYXJhY3RlcnMucmVzdWx0cy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICA8dWwga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgIDxsaT57ZGF0YS5uYW1lfTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkoSW5kZXhQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})