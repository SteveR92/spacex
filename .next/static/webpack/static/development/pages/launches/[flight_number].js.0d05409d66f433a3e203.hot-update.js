webpackHotUpdate("static/development/pages/launches/[flight_number].js",{

/***/ "./pages/launches/[flight_number].js":
/*!*******************************************!*\
  !*** ./pages/launches/[flight_number].js ***!
  \*******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/launches/[flight_number].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query LaunchQuery($flight_number: Int!) {\\n    launch(flight_number: $flight_number) {\\n      flight_number\\n      mission_name\\n      launch_year\\n      launch_success\\n      launch_date_local\\n      details\\n      rocket {\\n        rocket_id\\n        rocket_name\\n        rocket_type\\n        second_stage {\\n          payloads {\\n            nationality\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar client = new apollo_boost__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  uri: \"http://localhost:5000/graphql\"\n});\nvar LAUNCH_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var flightNumber = _ref.flightNumber;\n  var flight_number = parseInt(flightNumber);\n  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"ApolloProvider\"], {\n    client: client,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: LAUNCH_QUERY,\n    variables: {\n      flight_number: flight_number\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, function (_ref2) {\n    var loading = _ref2.loading,\n        error = _ref2.error,\n        data = _ref2.data;\n    console.log({\n      data: data\n    });\n    if (loading) return __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 31\n      }\n    }, \"Loading...\");\n    if (error) console.log(error);\n\n    var _data$launch = data.launch,\n        mission_name = _data$launch.mission_name,\n        flight_number = _data$launch.flight_number,\n        launch_year = _data$launch.launch_year,\n        launch_success = _data$launch.launch_success,\n        details = _data$launch.details,\n        _data$launch$rocket = _data$launch.rocket,\n        rocket_name = _data$launch$rocket.rocket_name,\n        rocket_type = _data$launch$rocket.rocket_type,\n        _data$launch$rocket$s = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_data$launch$rocket.second_stage.payloads, 1),\n        nationality = _data$launch$rocket$s[0].nationality;\n\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }, \"Flight Number: \", flight_number, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }), \"Mission Name: \", mission_name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }\n    }), \"nationality: \", nationality, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }), \"rocket: \", rocket_name);\n  }));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2hlcy9bZmxpZ2h0X251bWJlcl0uanM/OTdhOSJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJMQVVOQ0hfUVVFUlkiLCJncWwiLCJmbGlnaHROdW1iZXIiLCJmbGlnaHRfbnVtYmVyIiwicGFyc2VJbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxhdW5jaCIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJkZXRhaWxzIiwicm9ja2V0Iiwicm9ja2V0X25hbWUiLCJyb2NrZXRfdHlwZSIsInNlY29uZF9zdGFnZSIsInBheWxvYWRzIiwibmF0aW9uYWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsb0RBQUosQ0FBaUI7QUFDOUJDLEtBQUcsRUFBRTtBQUR5QixDQUFqQixDQUFmO0FBSUEsSUFBTUMsWUFBWSxHQUFHQyxrREFBSCxtQkFBbEI7O0FBc0JlLCtFQUFzQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDbkMsTUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNGLFlBQUQsQ0FBNUI7QUFFQSxTQUNFLE1BQUMsMkRBQUQ7QUFBZ0IsVUFBTSxFQUFFTCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFPLFNBQUssRUFBRUcsWUFBZDtBQUE0QixhQUFTLEVBQUU7QUFBRUcsbUJBQWEsRUFBYkE7QUFBRixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csaUJBQThCO0FBQUEsUUFBM0JFLE9BQTJCLFNBQTNCQSxPQUEyQjtBQUFBLFFBQWxCQyxLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLFVBQUksRUFBSkE7QUFBRixLQUFaO0FBQ0EsUUFBSUYsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNiLFFBQUlDLEtBQUosRUFBV0UsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBSGtCLHVCQWtCekJDLElBQUksQ0FBQ0csTUFsQm9CO0FBQUEsUUFNM0JDLFlBTjJCLGdCQU0zQkEsWUFOMkI7QUFBQSxRQU8zQlIsYUFQMkIsZ0JBTzNCQSxhQVAyQjtBQUFBLFFBUTNCUyxXQVIyQixnQkFRM0JBLFdBUjJCO0FBQUEsUUFTM0JDLGNBVDJCLGdCQVMzQkEsY0FUMkI7QUFBQSxRQVUzQkMsT0FWMkIsZ0JBVTNCQSxPQVYyQjtBQUFBLDJDQVczQkMsTUFYMkI7QUFBQSxRQVl6QkMsV0FaeUIsdUJBWXpCQSxXQVp5QjtBQUFBLFFBYXpCQyxXQWJ5Qix1QkFhekJBLFdBYnlCO0FBQUEsNklBY3pCQyxZQWR5QixDQWV2QkMsUUFmdUI7QUFBQSxRQWVWQyxXQWZVLDRCQWVWQSxXQWZVOztBQW1CN0IsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNrQmpCLGFBRGxCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLG9CQUdpQlEsWUFIakIsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsbUJBS2dCUyxXQUxoQixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixjQU9XSixXQVBYLENBREY7QUFXRCxHQS9CSCxDQURGLENBREY7QUFxQ0QsQ0F4Q0QiLCJmaWxlIjoiLi9wYWdlcy9sYXVuY2hlcy9bZmxpZ2h0X251bWJlcl0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsXCIsXG59KTtcblxuY29uc3QgTEFVTkNIX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBMYXVuY2hRdWVyeSgkZmxpZ2h0X251bWJlcjogSW50ISkge1xuICAgIGxhdW5jaChmbGlnaHRfbnVtYmVyOiAkZmxpZ2h0X251bWJlcikge1xuICAgICAgZmxpZ2h0X251bWJlclxuICAgICAgbWlzc2lvbl9uYW1lXG4gICAgICBsYXVuY2hfeWVhclxuICAgICAgbGF1bmNoX3N1Y2Nlc3NcbiAgICAgIGxhdW5jaF9kYXRlX2xvY2FsXG4gICAgICBkZXRhaWxzXG4gICAgICByb2NrZXQge1xuICAgICAgICByb2NrZXRfaWRcbiAgICAgICAgcm9ja2V0X25hbWVcbiAgICAgICAgcm9ja2V0X3R5cGVcbiAgICAgICAgc2Vjb25kX3N0YWdlIHtcbiAgICAgICAgICBwYXlsb2FkcyB7XG4gICAgICAgICAgICBuYXRpb25hbGl0eVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0ICh7IGZsaWdodE51bWJlciB9KSA9PiB7XG4gIGxldCBmbGlnaHRfbnVtYmVyID0gcGFyc2VJbnQoZmxpZ2h0TnVtYmVyKTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8UXVlcnkgcXVlcnk9e0xBVU5DSF9RVUVSWX0gdmFyaWFibGVzPXt7IGZsaWdodF9udW1iZXIgfX0+XG4gICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGg0PkxvYWRpbmcuLi48L2g0PjtcbiAgICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1pc3Npb25fbmFtZSxcbiAgICAgICAgICAgIGZsaWdodF9udW1iZXIsXG4gICAgICAgICAgICBsYXVuY2hfeWVhcixcbiAgICAgICAgICAgIGxhdW5jaF9zdWNjZXNzLFxuICAgICAgICAgICAgZGV0YWlscyxcbiAgICAgICAgICAgIHJvY2tldDoge1xuICAgICAgICAgICAgICByb2NrZXRfbmFtZSxcbiAgICAgICAgICAgICAgcm9ja2V0X3R5cGUsXG4gICAgICAgICAgICAgIHNlY29uZF9zdGFnZToge1xuICAgICAgICAgICAgICAgIHBheWxvYWRzOiBbeyBuYXRpb25hbGl0eSB9XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSA9IGRhdGEubGF1bmNoO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBGbGlnaHQgTnVtYmVyOiB7ZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIE1pc3Npb24gTmFtZToge21pc3Npb25fbmFtZX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIG5hdGlvbmFsaXR5OiB7bmF0aW9uYWxpdHl9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICByb2NrZXQ6IHtyb2NrZXRfbmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHJlcSkgPT4ge1xuICBjb25zdCByZXMgPSByZXEucGFyYW1zLmZsaWdodF9udW1iZXI7XG4gIHJldHVybiB7IHByb3BzOiB7IGZsaWdodE51bWJlcjogcmVzIH0gfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/launches/[flight_number].js\n");

/***/ })

})