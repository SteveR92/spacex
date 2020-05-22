module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/launches/[flight_number].js":
/*!*******************************************!*\
  !*** ./pages/launches/[flight_number].js ***!
  \*******************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/launches/[flight_number].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst client = new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({\n  uri: \"http://localhost:5000/graphql\"\n});\nconst LAUNCH_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      details\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  flightNumber\n}) => {\n  let flight_number = parseInt(flightNumber);\n  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], {\n    query: LAUNCH_QUERY,\n    variables: {\n      flight_number\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, ({\n    loading,\n    error,\n    data\n  }) => {\n    if (loading) return __jsx(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 31\n      }\n    }, \"Loading...\");\n    if (error) console.log(error);\n    const {\n      mission_name,\n      flight_number,\n      launch_year,\n      launch_success,\n      details,\n      rocket: {\n        rocket_id,\n        rocket_name,\n        rocket_type\n      }\n    } = data.launch;\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, \"Flight Number: \", flight_number, __jsx(\"br\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }), \"Mission Name: \", mission_name);\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Flight\")));\n});\nconst getServerSideProps = async req => {\n  const res = req.params.flight_number;\n  return {\n    props: {\n      flightNumber: res\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2hlcy9bZmxpZ2h0X251bWJlcl0uanM/OTdhOSJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJMQVVOQ0hfUVVFUlkiLCJncWwiLCJmbGlnaHROdW1iZXIiLCJmbGlnaHRfbnVtYmVyIiwicGFyc2VJbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJkZXRhaWxzIiwicm9ja2V0Iiwicm9ja2V0X2lkIiwicm9ja2V0X25hbWUiLCJyb2NrZXRfdHlwZSIsImxhdW5jaCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInBhcmFtcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsbURBQUosQ0FBaUI7QUFDOUJDLEtBQUcsRUFBRTtBQUR5QixDQUFqQixDQUFmO0FBSUEsTUFBTUMsWUFBWSxHQUFHQyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7OztDQUF6QjtBQWlCZSxnRUFBQztBQUFFQztBQUFGLENBQUQsS0FBc0I7QUFDbkMsTUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNGLFlBQUQsQ0FBNUI7QUFFQSxTQUNFLE1BQUMsMkRBQUQ7QUFBZ0IsVUFBTSxFQUFFTCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFPLFNBQUssRUFBRUcsWUFBZDtBQUE0QixhQUFTLEVBQUU7QUFBRUc7QUFBRixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQztBQUFFRSxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLEdBQUQsS0FBOEI7QUFDN0IsUUFBSUYsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNiLFFBQUlDLEtBQUosRUFBV0UsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFFWCxVQUFNO0FBQ0pJLGtCQURJO0FBRUpQLG1CQUZJO0FBR0pRLGlCQUhJO0FBSUpDLG9CQUpJO0FBS0pDLGFBTEk7QUFNSkMsWUFBTSxFQUFFO0FBQUVDLGlCQUFGO0FBQWFDLG1CQUFiO0FBQTBCQztBQUExQjtBQU5KLFFBT0ZWLElBQUksQ0FBQ1csTUFQVDtBQVFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDa0JmLGFBRGxCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLG9CQUdpQk8sWUFIakIsQ0FERjtBQU9ELEdBcEJILENBREYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQXZCRixDQURGO0FBNkJELENBaENEO0FBa0NPLE1BQU1TLGtCQUFrQixHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUMvQyxRQUFNQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXbkIsYUFBdkI7QUFDQSxTQUFPO0FBQUVvQixTQUFLLEVBQUU7QUFBRXJCLGtCQUFZLEVBQUVtQjtBQUFoQjtBQUFULEdBQVA7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vcGFnZXMvbGF1bmNoZXMvW2ZsaWdodF9udW1iZXJdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLFxufSk7XG5cbmNvbnN0IExBVU5DSF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgTGF1bmNoUXVlcnkoJGZsaWdodF9udW1iZXI6IEludCEpIHtcbiAgICBsYXVuY2goZmxpZ2h0X251bWJlcjogJGZsaWdodF9udW1iZXIpIHtcbiAgICAgIGZsaWdodF9udW1iZXJcbiAgICAgIG1pc3Npb25fbmFtZVxuICAgICAgbGF1bmNoX3llYXJcbiAgICAgIGxhdW5jaF9zdWNjZXNzXG4gICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxuICAgICAgZGV0YWlsc1xuICAgICAgcm9ja2V0IHtcbiAgICAgICAgcm9ja2V0X2lkXG4gICAgICAgIHJvY2tldF9uYW1lXG4gICAgICAgIHJvY2tldF90eXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgKHsgZmxpZ2h0TnVtYmVyIH0pID0+IHtcbiAgbGV0IGZsaWdodF9udW1iZXIgPSBwYXJzZUludChmbGlnaHROdW1iZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxRdWVyeSBxdWVyeT17TEFVTkNIX1FVRVJZfSB2YXJpYWJsZXM9e3sgZmxpZ2h0X251bWJlciB9fT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoND5Mb2FkaW5nLi4uPC9oND47XG4gICAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBtaXNzaW9uX25hbWUsXG4gICAgICAgICAgICBmbGlnaHRfbnVtYmVyLFxuICAgICAgICAgICAgbGF1bmNoX3llYXIsXG4gICAgICAgICAgICBsYXVuY2hfc3VjY2VzcyxcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICByb2NrZXQ6IHsgcm9ja2V0X2lkLCByb2NrZXRfbmFtZSwgcm9ja2V0X3R5cGUgfSxcbiAgICAgICAgICB9ID0gZGF0YS5sYXVuY2g7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIEZsaWdodCBOdW1iZXI6IHtmbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgTWlzc2lvbiBOYW1lOiB7bWlzc2lvbl9uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RmxpZ2h0PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHJlcSkgPT4ge1xuICBjb25zdCByZXMgPSByZXEucGFyYW1zLmZsaWdodF9udW1iZXI7XG4gIHJldHVybiB7IHByb3BzOiB7IGZsaWdodE51bWJlcjogcmVzIH0gfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/launches/[flight_number].js\n");

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** multi ./pages/launches/[flight_number].js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/launches/[flight_number].js */"./pages/launches/[flight_number].js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ })

/******/ });