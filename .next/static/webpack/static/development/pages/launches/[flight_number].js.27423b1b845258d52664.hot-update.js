webpackHotUpdate("static/development/pages/launches/[flight_number].js",{

/***/ "./pages/launches/[flight_number].js":
/*!*******************************************!*\
  !*** ./pages/launches/[flight_number].js ***!
  \*******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/launches/[flight_number].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query LaunchQuery($flight_number: Int!) {\\n    launch(flight_number: $flight_number) {\\n      flight_number\\n      mission_name\\n      launch_year\\n      launch_success\\n      launch_date_local\\n      details\\n      rocket {\\n        rocket_id\\n        rocket_name\\n        rocket_type\\n        second_stage {\\n          payloads {\\n            nationality\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar client = new apollo_boost__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  uri: \"http://localhost:5000/graphql\"\n});\nvar LAUNCH_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var flightNumber = _ref.flightNumber;\n  var flight_number = parseInt(flightNumber);\n  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: client,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], {\n    query: LAUNCH_QUERY,\n    variables: {\n      flight_number: flight_number\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, function (_ref2) {\n    var loading = _ref2.loading,\n        error = _ref2.error,\n        data = _ref2.data;\n    if (loading) return __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 31\n      }\n    }, \"Loading...\");\n    if (error) console.log(error);\n    var _data$launch = data.launch,\n        mission_name = _data$launch.mission_name,\n        flight_number = _data$launch.flight_number,\n        launch_year = _data$launch.launch_year,\n        launch_success = _data$launch.launch_success,\n        details = _data$launch.details,\n        _data$launch$rocket = _data$launch.rocket,\n        rocket_id = _data$launch$rocket.rocket_id,\n        rocket_name = _data$launch$rocket.rocket_name,\n        rocket_type = _data$launch$rocket.rocket_type,\n        nationality = _data$launch$rocket.second_stage.payloads.nationality;\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }, \"Flight Number: \", flight_number, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }), \"Mission Name: \", mission_name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }\n    }), \"nationality: \", nationality);\n  }));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2hlcy9bZmxpZ2h0X251bWJlcl0uanM/OTdhOSJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJMQVVOQ0hfUVVFUlkiLCJncWwiLCJmbGlnaHROdW1iZXIiLCJmbGlnaHRfbnVtYmVyIiwicGFyc2VJbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxhdW5jaCIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJkZXRhaWxzIiwicm9ja2V0Iiwicm9ja2V0X2lkIiwicm9ja2V0X25hbWUiLCJyb2NrZXRfdHlwZSIsIm5hdGlvbmFsaXR5Iiwic2Vjb25kX3N0YWdlIiwicGF5bG9hZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLG9EQUFKLENBQWlCO0FBQzlCQyxLQUFHLEVBQUU7QUFEeUIsQ0FBakIsQ0FBZjtBQUlBLElBQU1DLFlBQVksR0FBR0Msa0RBQUgsbUJBQWxCOztBQXNCZSwrRUFBc0I7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ25DLE1BQUlDLGFBQWEsR0FBR0MsUUFBUSxDQUFDRixZQUFELENBQTVCO0FBRUEsU0FDRSxNQUFDLDJEQUFEO0FBQWdCLFVBQU0sRUFBRUwsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVHLFlBQWQ7QUFBNEIsYUFBUyxFQUFFO0FBQUVHLG1CQUFhLEVBQWJBO0FBQUYsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLGlCQUE4QjtBQUFBLFFBQTNCRSxPQUEyQixTQUEzQkEsT0FBMkI7QUFBQSxRQUFsQkMsS0FBa0IsU0FBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzdCLFFBQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDYixRQUFJQyxLQUFKLEVBQVdFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRmtCLHVCQWtCekJDLElBQUksQ0FBQ0csTUFsQm9CO0FBQUEsUUFLM0JDLFlBTDJCLGdCQUszQkEsWUFMMkI7QUFBQSxRQU0zQlIsYUFOMkIsZ0JBTTNCQSxhQU4yQjtBQUFBLFFBTzNCUyxXQVAyQixnQkFPM0JBLFdBUDJCO0FBQUEsUUFRM0JDLGNBUjJCLGdCQVEzQkEsY0FSMkI7QUFBQSxRQVMzQkMsT0FUMkIsZ0JBUzNCQSxPQVQyQjtBQUFBLDJDQVUzQkMsTUFWMkI7QUFBQSxRQVd6QkMsU0FYeUIsdUJBV3pCQSxTQVh5QjtBQUFBLFFBWXpCQyxXQVp5Qix1QkFZekJBLFdBWnlCO0FBQUEsUUFhekJDLFdBYnlCLHVCQWF6QkEsV0FieUI7QUFBQSxRQWVYQyxXQWZXLHVCQWN6QkMsWUFkeUIsQ0FldkJDLFFBZnVCLENBZVhGLFdBZlc7QUFtQjdCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDa0JoQixhQURsQixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixvQkFHaUJRLFlBSGpCLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLG1CQUtnQlEsV0FMaEIsQ0FERjtBQVNELEdBN0JILENBREYsQ0FERjtBQW1DRCxDQXRDRCIsImZpbGUiOiIuL3BhZ2VzL2xhdW5jaGVzL1tmbGlnaHRfbnVtYmVyXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSBcImFwb2xsby1ib29zdFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIixcbn0pO1xuXG5jb25zdCBMQVVOQ0hfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IExhdW5jaFF1ZXJ5KCRmbGlnaHRfbnVtYmVyOiBJbnQhKSB7XG4gICAgbGF1bmNoKGZsaWdodF9udW1iZXI6ICRmbGlnaHRfbnVtYmVyKSB7XG4gICAgICBmbGlnaHRfbnVtYmVyXG4gICAgICBtaXNzaW9uX25hbWVcbiAgICAgIGxhdW5jaF95ZWFyXG4gICAgICBsYXVuY2hfc3VjY2Vzc1xuICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcbiAgICAgIGRldGFpbHNcbiAgICAgIHJvY2tldCB7XG4gICAgICAgIHJvY2tldF9pZFxuICAgICAgICByb2NrZXRfbmFtZVxuICAgICAgICByb2NrZXRfdHlwZVxuICAgICAgICBzZWNvbmRfc3RhZ2Uge1xuICAgICAgICAgIHBheWxvYWRzIHtcbiAgICAgICAgICAgIG5hdGlvbmFsaXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgKHsgZmxpZ2h0TnVtYmVyIH0pID0+IHtcbiAgbGV0IGZsaWdodF9udW1iZXIgPSBwYXJzZUludChmbGlnaHROdW1iZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxRdWVyeSBxdWVyeT17TEFVTkNIX1FVRVJZfSB2YXJpYWJsZXM9e3sgZmxpZ2h0X251bWJlciB9fT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoND5Mb2FkaW5nLi4uPC9oND47XG4gICAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBtaXNzaW9uX25hbWUsXG4gICAgICAgICAgICBmbGlnaHRfbnVtYmVyLFxuICAgICAgICAgICAgbGF1bmNoX3llYXIsXG4gICAgICAgICAgICBsYXVuY2hfc3VjY2VzcyxcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICByb2NrZXQ6IHtcbiAgICAgICAgICAgICAgcm9ja2V0X2lkLFxuICAgICAgICAgICAgICByb2NrZXRfbmFtZSxcbiAgICAgICAgICAgICAgcm9ja2V0X3R5cGUsXG4gICAgICAgICAgICAgIHNlY29uZF9zdGFnZToge1xuICAgICAgICAgICAgICAgIHBheWxvYWRzOiB7IG5hdGlvbmFsaXR5IH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0gPSBkYXRhLmxhdW5jaDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgRmxpZ2h0IE51bWJlcjoge2ZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBNaXNzaW9uIE5hbWU6IHttaXNzaW9uX25hbWV9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBuYXRpb25hbGl0eToge25hdGlvbmFsaXR5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAocmVxKSA9PiB7XG4gIGNvbnN0IHJlcyA9IHJlcS5wYXJhbXMuZmxpZ2h0X251bWJlcjtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZmxpZ2h0TnVtYmVyOiByZXMgfSB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/launches/[flight_number].js\n");

/***/ })

})