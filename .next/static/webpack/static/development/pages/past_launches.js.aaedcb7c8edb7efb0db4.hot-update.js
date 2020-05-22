webpackHotUpdate("static/development/pages/past_launches.js",{

/***/ "./components/past_launches/Past_Launch.js":
/*!*************************************************!*\
  !*** ./components/past_launches/Past_Launch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/components/past_launches/Past_Launch.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Past_Launch = function Past_Launch(props) {\n  console.log(props);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"Launch\"), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Query\"], {\n    query: LAUNCHES_QUERY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, function (_ref) {\n    var loading = _ref.loading,\n        error = _ref.error,\n        data = _ref.data;\n    if (loading) return __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 31\n      }\n    }, \"Loading...\");\n    if (error) console.log(error);\n    console.log(data);\n    return __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, \"Test\") //   <Fragment>\n    //     {data.launches.map((launch) => (\n    //       <LaunchItem key={launch.flight_number} launch={launch} />\n    //     ))}\n    //   </Fragment>\n    ;\n  }));\n};\n\n_c = Past_Launch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Past_Launch);\n\nvar _c;\n\n$RefreshReg$(_c, \"Past_Launch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bhc3RfbGF1bmNoZXMvUGFzdF9MYXVuY2guanM/MWMxZSJdLCJuYW1lcyI6WyJQYXN0X0xhdW5jaCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIkxBVU5DSEVTX1FVRVJZIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVHLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLGdCQUE4QjtBQUFBLFFBQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxRQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFFBQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDYixRQUFJQyxLQUFKLEVBQVdKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ1hKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ0EsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkY7QUFRRCxHQWJILENBRkYsQ0FERjtBQW9CRCxDQXRCRDs7S0FBTVAsVztBQXdCU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bhc3RfbGF1bmNoZXMvUGFzdF9MYXVuY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcblxuY29uc3QgUGFzdF9MYXVuY2ggPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TGF1bmNoPC9oMj5cbiAgICAgIDxRdWVyeSBxdWVyeT17TEFVTkNIRVNfUVVFUll9PlxuICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGg0PkxvYWRpbmcuLi48L2g0PjtcbiAgICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGgyPlRlc3Q8L2gyPlxuICAgICAgICAgICAgLy8gICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAvLyAgICAge2RhdGEubGF1bmNoZXMubWFwKChsYXVuY2gpID0+IChcbiAgICAgICAgICAgIC8vICAgICAgIDxMYXVuY2hJdGVtIGtleT17bGF1bmNoLmZsaWdodF9udW1iZXJ9IGxhdW5jaD17bGF1bmNofSAvPlxuICAgICAgICAgICAgLy8gICAgICkpfVxuICAgICAgICAgICAgLy8gICA8L0ZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdF9MYXVuY2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/past_launches/Past_Launch.js\n");

/***/ })

})