module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./apolloClient.js":
/*!*************************!*\
  !*** ./apolloClient.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createApolloClient; });\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction createApolloClient(initialState, ctx) {\n  // The `ctx` (NextPageContext) will only be present on the server.\n  // use it to extract auth headers (ctx.req) or similar.\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    ssrMode: Boolean(ctx),\n    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n      uri: \"https://rickandmortyapi.com/graphql\",\n      // Server URL (must be absolute)\n      credentials: \"same-origin\",\n      // Additional fetch() options like `credentials` or `headers`\n      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default())\n    }),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]().restore(initialState)\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanM/ODc4YSJdLCJuYW1lcyI6WyJjcmVhdGVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJjdHgiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiQm9vbGVhbiIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiZmV0Y2giLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0Esa0JBQVQsQ0FBNEJDLFlBQTVCLEVBQTBDQyxHQUExQyxFQUErQztBQUM1RDtBQUNBO0FBQ0EsU0FBTyxJQUFJQywwREFBSixDQUFpQjtBQUN0QkMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FETTtBQUV0QkksUUFBSSxFQUFFLElBQUlDLHlEQUFKLENBQWE7QUFDakJDLFNBQUcsRUFBRSxxQ0FEWTtBQUMyQjtBQUM1Q0MsaUJBQVcsRUFBRSxhQUZJO0FBRVc7QUFDNUJDLHdFQUFLQTtBQUhZLEtBQWIsQ0FGZ0I7QUFPdEJDLFNBQUssRUFBRSxJQUFJQyxtRUFBSixHQUFvQkMsT0FBcEIsQ0FBNEJaLFlBQTVCO0FBUGUsR0FBakIsQ0FBUDtBQVNEIiwiZmlsZSI6Ii4vYXBvbGxvQ2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSBcImFwb2xsby1jbGllbnRcIjtcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCI7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gXCJhcG9sbG8tbGluay1odHRwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpIHtcbiAgLy8gVGhlIGBjdHhgIChOZXh0UGFnZUNvbnRleHQpIHdpbGwgb25seSBiZSBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuXG4gIC8vIHVzZSBpdCB0byBleHRyYWN0IGF1dGggaGVhZGVycyAoY3R4LnJlcSkgb3Igc2ltaWxhci5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IEJvb2xlYW4oY3R4KSxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9ncmFwaHFsXCIsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICBmZXRjaCxcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apolloClient.js\n");

/***/ }),

/***/ "./gql/allCharacters.js":
/*!******************************!*\
  !*** ./gql/allCharacters.js ***!
  \******************************/
/*! exports provided: ALL_CHARACTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CHARACTERS\", function() { return ALL_CHARACTERS; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ALL_CHARACTERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query allCharacters {\n    characters {\n      results {\n        id\n        name\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncWwvYWxsQ2hhcmFjdGVycy5qcz9iZDUxIl0sIm5hbWVzIjpbIkFMTF9DSEFSQUNURVJTIiwiZ3FsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHQyxrREFBSTs7Ozs7Ozs7O0NBQTNCIiwiZmlsZSI6Ii4vZ3FsL2FsbENoYXJhY3RlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5leHBvcnQgY29uc3QgQUxMX0NIQVJBQ1RFUlMgPSBncWxgXG4gIHF1ZXJ5IGFsbENoYXJhY3RlcnMge1xuICAgIGNoYXJhY3RlcnMge1xuICAgICAgcmVzdWx0cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./gql/allCharacters.js\n");

/***/ }),

/***/ "./libs/apollo.js":
/*!************************!*\
  !*** ./libs/apollo.js ***!
  \************************/
/*! exports provided: initOnContext, withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initOnContext\", function() { return initOnContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withApollo\", function() { return withApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apolloClient */ \"./apolloClient.js\");\nvar _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/libs/apollo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n // On the client, we store the Apollo Client in the following variable.\n// This prevents the client from reinitializing between page transitions.\n\nlet globalApolloClient = null;\n/**\n * Installs the Apollo Client on NextPageContext\n * or NextAppContext. Useful if you want to use apolloClient\n * inside getStaticProps, getStaticPaths or getServerSideProps\n * @param {NextPageContext | NextAppContext} ctx\n */\n\nconst initOnContext = ctx => {\n  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level\n  // as antipattern since it disables project wide Automatic Static Optimization.\n\n  if (true) {\n    if (inAppContext) {\n      console.warn(\"Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\\n\" + \"Read more: https://err.sh/next.js/opt-out-auto-static-optimization\\n\");\n    }\n  } // Initialize ApolloClient if not already done\n\n\n  const apolloClient = ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.\n  // Otherwise, the component would have to call initApollo() again but this\n  // time without the context. Once that happens, the following code will make sure we send\n  // the prop as `null` to the browser.\n\n  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.\n  // This allows us to consume the apolloClient inside our\n  // custom `getInitialProps({ apolloClient })`.\n\n\n  ctx.apolloClient = apolloClient;\n\n  if (inAppContext) {\n    ctx.ctx.apolloClient = apolloClient;\n  }\n\n  return ctx;\n};\n/**\n * Always creates a new apollo client on the server\n * Creates or reuses apollo client in the browser.\n * @param  {NormalizedCacheObject} initialState\n * @param  {NextPageContext} ctx\n */\n\nconst initApolloClient = (initialState, ctx) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  } // Reuse client on the client-side\n\n\n  if (!globalApolloClient) {\n    globalApolloClient = Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  }\n\n  return globalApolloClient;\n};\n/**\n * Creates a withApollo HOC\n * that provides the apolloContext\n * to a next.js Page or AppTree.\n * @param  {Object} withApolloOptions\n * @param  {Boolean} [withApolloOptions.ssr=false]\n * @returns {(PageComponent: ReactNode) => ReactNode}\n */\n\n\nconst withApollo = ({\n  ssr = false\n} = {}) => PageComponent => {\n  const WithApollo = (_ref) => {\n    let {\n      apolloClient,\n      apolloState\n    } = _ref,\n        pageProps = _objectWithoutProperties(_ref, [\"apolloClient\", \"apolloState\"]);\n\n    let client;\n\n    if (apolloClient) {\n      // Happens on: getDataFromTree & next.js ssr\n      client = apolloClient;\n    } else {\n      // Happens on: next.js csr\n      client = initApolloClient(apolloState, undefined);\n    }\n\n    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n      client: client,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 7\n      }\n    }, __jsx(PageComponent, _extends({}, pageProps, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }\n    })));\n  }; // Set the correct displayName in development\n\n\n  if (true) {\n    const displayName = PageComponent.displayName || PageComponent.name || \"Component\";\n    WithApollo.displayName = `withApollo(${displayName})`;\n  }\n\n  if (ssr || PageComponent.getInitialProps) {\n    WithApollo.getInitialProps = async ctx => {\n      const inAppContext = Boolean(ctx.ctx);\n      const {\n        apolloClient\n      } = initOnContext(ctx); // Run wrapped getInitialProps methods\n\n      let pageProps = {};\n\n      if (PageComponent.getInitialProps) {\n        pageProps = await PageComponent.getInitialProps(ctx);\n      } else if (inAppContext) {\n        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);\n      } // Only on the server:\n\n\n      if (true) {\n        const {\n          AppTree\n        } = ctx; // When redirecting, the response is finished.\n        // No point in continuing to render\n\n        if (ctx.res && ctx.res.finished) {\n          return pageProps;\n        } // Only if dataFromTree is enabled\n\n\n        if (ssr && AppTree) {\n          try {\n            // Import `@apollo/react-ssr` dynamically.\n            // We don't want to have this in our client bundle.\n            const {\n              getDataFromTree\n            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ \"@apollo/react-ssr\", 7)); // Since AppComponents and PageComponents have different context types\n            // we need to modify their props a little.\n\n            let props;\n\n            if (inAppContext) {\n              props = _objectSpread(_objectSpread({}, pageProps), {}, {\n                apolloClient\n              });\n            } else {\n              props = {\n                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {\n                  apolloClient\n                })\n              };\n            } // Take the Next.js AppTree, determine which queries are needed to render,\n            // and fetch them. This method can be pretty slow since it renders\n            // your entire AppTree once for every query. Check out apollo fragments\n            // if you want to reduce the number of rerenders.\n            // https://www.apollographql.com/docs/react/data/fragments/\n\n\n            await getDataFromTree(__jsx(AppTree, _extends({}, props, {\n              __self: undefined,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 150,\n                columnNumber: 35\n              }\n            })));\n          } catch (error) {\n            // Prevent Apollo Client GraphQL errors from crashing SSR.\n            // Handle them in components via the data.error prop:\n            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error\n            console.error(\"Error while running `getDataFromTree`\", error);\n          } // getDataFromTree does not call componentWillUnmount\n          // head side effect therefore need to be cleared manually\n\n\n          next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();\n        }\n      }\n\n      return _objectSpread(_objectSpread({}, pageProps), {}, {\n        // Extract query data from the Apollo store\n        apolloState: apolloClient.cache.extract(),\n        // Provide the client for ssr. As soon as this payload\n        // gets JSON.stringified it will remove itself.\n        apolloClient: ctx.apolloClient\n      });\n    };\n  }\n\n  return WithApollo;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL2Fwb2xsby5qcz82MGFkIl0sIm5hbWVzIjpbImdsb2JhbEFwb2xsb0NsaWVudCIsImluaXRPbkNvbnRleHQiLCJjdHgiLCJpbkFwcENvbnRleHQiLCJCb29sZWFuIiwiY29uc29sZSIsIndhcm4iLCJhcG9sbG9DbGllbnQiLCJpbml0QXBvbGxvQ2xpZW50IiwiYXBvbGxvU3RhdGUiLCJ0b0pTT04iLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJ3aXRoQXBvbGxvIiwic3NyIiwiUGFnZUNvbXBvbmVudCIsIldpdGhBcG9sbG8iLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ1bmRlZmluZWQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJBcHBUcmVlIiwicmVzIiwiZmluaXNoZWQiLCJnZXREYXRhRnJvbVRyZWUiLCJwcm9wcyIsImVycm9yIiwiSGVhZCIsInJld2luZCIsImNhY2hlIiwiZXh0cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLElBQXpCO0FBRUE7Ozs7Ozs7QUFNTyxNQUFNQyxhQUFhLEdBQUlDLEdBQUQsSUFBUztBQUNwQyxRQUFNQyxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDQSxHQUFMLENBQTVCLENBRG9DLENBR3BDO0FBQ0E7O0FBQ0EsWUFBNEM7QUFDMUMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQkUsYUFBTyxDQUFDQyxJQUFSLENBQ0Usd0dBQ0Usc0VBRko7QUFJRDtBQUNGLEdBWm1DLENBY3BDOzs7QUFDQSxRQUFNQyxZQUFZLEdBQ2hCTCxHQUFHLENBQUNLLFlBQUosSUFDQUMsZ0JBQWdCLENBQUNOLEdBQUcsQ0FBQ08sV0FBSixJQUFtQixFQUFwQixFQUF3Qk4sWUFBWSxHQUFHRCxHQUFHLENBQUNBLEdBQVAsR0FBYUEsR0FBakQsQ0FGbEIsQ0Fmb0MsQ0FtQnBDO0FBQ0E7QUFDQTtBQUNBOztBQUNBSyxjQUFZLENBQUNHLE1BQWIsR0FBc0IsTUFBTSxJQUE1QixDQXZCb0MsQ0F5QnBDO0FBQ0E7QUFDQTs7O0FBQ0FSLEtBQUcsQ0FBQ0ssWUFBSixHQUFtQkEsWUFBbkI7O0FBQ0EsTUFBSUosWUFBSixFQUFrQjtBQUNoQkQsT0FBRyxDQUFDQSxHQUFKLENBQVFLLFlBQVIsR0FBdUJBLFlBQXZCO0FBQ0Q7O0FBRUQsU0FBT0wsR0FBUDtBQUNELENBbENNO0FBb0NQOzs7Ozs7O0FBTUEsTUFBTU0sZ0JBQWdCLEdBQUcsQ0FBQ0csWUFBRCxFQUFlVCxHQUFmLEtBQXVCO0FBQzlDO0FBQ0E7QUFDQSxZQUFtQztBQUNqQyxXQUFPVSw2REFBa0IsQ0FBQ0QsWUFBRCxFQUFlVCxHQUFmLENBQXpCO0FBQ0QsR0FMNkMsQ0FPOUM7OztBQUNBLE1BQUksQ0FBQ0Ysa0JBQUwsRUFBeUI7QUFDdkJBLHNCQUFrQixHQUFHWSw2REFBa0IsQ0FBQ0QsWUFBRCxFQUFlVCxHQUFmLENBQXZDO0FBQ0Q7O0FBRUQsU0FBT0Ysa0JBQVA7QUFDRCxDQWJEO0FBZUE7Ozs7Ozs7Ozs7QUFRTyxNQUFNYSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxLQUFHLEdBQUc7QUFBUixJQUFrQixFQUFuQixLQUEyQkMsYUFBRCxJQUFtQjtBQUNyRSxRQUFNQyxVQUFVLEdBQUcsVUFBaUQ7QUFBQSxRQUFoRDtBQUFFVCxrQkFBRjtBQUFnQkU7QUFBaEIsS0FBZ0Q7QUFBQSxRQUFoQlEsU0FBZ0I7O0FBQ2xFLFFBQUlDLE1BQUo7O0FBQ0EsUUFBSVgsWUFBSixFQUFrQjtBQUNoQjtBQUNBVyxZQUFNLEdBQUdYLFlBQVQ7QUFDRCxLQUhELE1BR087QUFDTDtBQUNBVyxZQUFNLEdBQUdWLGdCQUFnQixDQUFDQyxXQUFELEVBQWNVLFNBQWQsQ0FBekI7QUFDRDs7QUFFRCxXQUNFLE1BQUMsa0VBQUQ7QUFBZ0IsWUFBTSxFQUFFRCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFELGVBQW1CRCxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERjtBQUtELEdBZkQsQ0FEcUUsQ0FrQnJFOzs7QUFDQSxZQUEyQztBQUN6QyxVQUFNRyxXQUFXLEdBQ2ZMLGFBQWEsQ0FBQ0ssV0FBZCxJQUE2QkwsYUFBYSxDQUFDTSxJQUEzQyxJQUFtRCxXQURyRDtBQUVBTCxjQUFVLENBQUNJLFdBQVgsR0FBMEIsY0FBYUEsV0FBWSxHQUFuRDtBQUNEOztBQUVELE1BQUlOLEdBQUcsSUFBSUMsYUFBYSxDQUFDTyxlQUF6QixFQUEwQztBQUN4Q04sY0FBVSxDQUFDTSxlQUFYLEdBQTZCLE1BQU9wQixHQUFQLElBQWU7QUFDMUMsWUFBTUMsWUFBWSxHQUFHQyxPQUFPLENBQUNGLEdBQUcsQ0FBQ0EsR0FBTCxDQUE1QjtBQUNBLFlBQU07QUFBRUs7QUFBRixVQUFtQk4sYUFBYSxDQUFDQyxHQUFELENBQXRDLENBRjBDLENBSTFDOztBQUNBLFVBQUllLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxVQUFJRixhQUFhLENBQUNPLGVBQWxCLEVBQW1DO0FBQ2pDTCxpQkFBUyxHQUFHLE1BQU1GLGFBQWEsQ0FBQ08sZUFBZCxDQUE4QnBCLEdBQTlCLENBQWxCO0FBQ0QsT0FGRCxNQUVPLElBQUlDLFlBQUosRUFBa0I7QUFDdkJjLGlCQUFTLEdBQUcsTUFBTU0sK0NBQUcsQ0FBQ0QsZUFBSixDQUFvQnBCLEdBQXBCLENBQWxCO0FBQ0QsT0FWeUMsQ0FZMUM7OztBQUNBLGdCQUFtQztBQUNqQyxjQUFNO0FBQUVzQjtBQUFGLFlBQWN0QixHQUFwQixDQURpQyxDQUVqQztBQUNBOztBQUNBLFlBQUlBLEdBQUcsQ0FBQ3VCLEdBQUosSUFBV3ZCLEdBQUcsQ0FBQ3VCLEdBQUosQ0FBUUMsUUFBdkIsRUFBaUM7QUFDL0IsaUJBQU9ULFNBQVA7QUFDRCxTQU5nQyxDQVFqQzs7O0FBQ0EsWUFBSUgsR0FBRyxJQUFJVSxPQUFYLEVBQW9CO0FBQ2xCLGNBQUk7QUFDRjtBQUNBO0FBQ0Esa0JBQU07QUFBRUc7QUFBRixnQkFBc0IsTUFBTSx3SEFBbEMsQ0FIRSxDQUtGO0FBQ0E7O0FBQ0EsZ0JBQUlDLEtBQUo7O0FBQ0EsZ0JBQUl6QixZQUFKLEVBQWtCO0FBQ2hCeUIsbUJBQUssbUNBQVFYLFNBQVI7QUFBbUJWO0FBQW5CLGdCQUFMO0FBQ0QsYUFGRCxNQUVPO0FBQ0xxQixtQkFBSyxHQUFHO0FBQUVYLHlCQUFTLGtDQUFPQSxTQUFQO0FBQWtCVjtBQUFsQjtBQUFYLGVBQVI7QUFDRCxhQVpDLENBY0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esa0JBQU1vQixlQUFlLENBQUMsTUFBQyxPQUFELGVBQWFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELENBQXJCO0FBQ0QsV0FwQkQsQ0FvQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0F4QixtQkFBTyxDQUFDd0IsS0FBUixDQUFjLHVDQUFkLEVBQXVEQSxLQUF2RDtBQUNELFdBMUJpQixDQTRCbEI7QUFDQTs7O0FBQ0FDLDBEQUFJLENBQUNDLE1BQUw7QUFDRDtBQUNGOztBQUVELDZDQUNLZCxTQURMO0FBRUU7QUFDQVIsbUJBQVcsRUFBRUYsWUFBWSxDQUFDeUIsS0FBYixDQUFtQkMsT0FBbkIsRUFIZjtBQUlFO0FBQ0E7QUFDQTFCLG9CQUFZLEVBQUVMLEdBQUcsQ0FBQ0s7QUFOcEI7QUFRRCxLQWhFRDtBQWlFRDs7QUFFRCxTQUFPUyxVQUFQO0FBQ0QsQ0E5Rk0iLCJmaWxlIjoiLi9saWJzL2Fwb2xsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5pbXBvcnQgY3JlYXRlQXBvbGxvQ2xpZW50IGZyb20gXCIuLi9hcG9sbG9DbGllbnRcIjtcblxuLy8gT24gdGhlIGNsaWVudCwgd2Ugc3RvcmUgdGhlIEFwb2xsbyBDbGllbnQgaW4gdGhlIGZvbGxvd2luZyB2YXJpYWJsZS5cbi8vIFRoaXMgcHJldmVudHMgdGhlIGNsaWVudCBmcm9tIHJlaW5pdGlhbGl6aW5nIGJldHdlZW4gcGFnZSB0cmFuc2l0aW9ucy5cbmxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsO1xuXG4vKipcbiAqIEluc3RhbGxzIHRoZSBBcG9sbG8gQ2xpZW50IG9uIE5leHRQYWdlQ29udGV4dFxuICogb3IgTmV4dEFwcENvbnRleHQuIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byB1c2UgYXBvbGxvQ2xpZW50XG4gKiBpbnNpZGUgZ2V0U3RhdGljUHJvcHMsIGdldFN0YXRpY1BhdGhzIG9yIGdldFNlcnZlclNpZGVQcm9wc1xuICogQHBhcmFtIHtOZXh0UGFnZUNvbnRleHQgfCBOZXh0QXBwQ29udGV4dH0gY3R4XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0T25Db250ZXh0ID0gKGN0eCkgPT4ge1xuICBjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xuXG4gIC8vIFdlIGNvbnNpZGVyIGluc3RhbGxpbmcgYHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSlgIG9uIGdsb2JhbCBBcHAgbGV2ZWxcbiAgLy8gYXMgYW50aXBhdHRlcm4gc2luY2UgaXQgZGlzYWJsZXMgcHJvamVjdCB3aWRlIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uLlxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChpbkFwcENvbnRleHQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJXYXJuaW5nOiBZb3UgaGF2ZSBvcHRlZC1vdXQgb2YgQXV0b21hdGljIFN0YXRpYyBPcHRpbWl6YXRpb24gZHVlIHRvIGB3aXRoQXBvbGxvYCBpbiBgcGFnZXMvX2FwcGAuXFxuXCIgK1xuICAgICAgICAgIFwiUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL29wdC1vdXQtYXV0by1zdGF0aWMtb3B0aW1pemF0aW9uXFxuXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSBBcG9sbG9DbGllbnQgaWYgbm90IGFscmVhZHkgZG9uZVxuICBjb25zdCBhcG9sbG9DbGllbnQgPVxuICAgIGN0eC5hcG9sbG9DbGllbnQgfHxcbiAgICBpbml0QXBvbGxvQ2xpZW50KGN0eC5hcG9sbG9TdGF0ZSB8fCB7fSwgaW5BcHBDb250ZXh0ID8gY3R4LmN0eCA6IGN0eCk7XG5cbiAgLy8gV2Ugc2VuZCB0aGUgQXBvbGxvIENsaWVudCBhcyBhIHByb3AgdG8gdGhlIGNvbXBvbmVudCB0byBhdm9pZCBjYWxsaW5nIGluaXRBcG9sbG8oKSB0d2ljZSBpbiB0aGUgc2VydmVyLlxuICAvLyBPdGhlcndpc2UsIHRoZSBjb21wb25lbnQgd291bGQgaGF2ZSB0byBjYWxsIGluaXRBcG9sbG8oKSBhZ2FpbiBidXQgdGhpc1xuICAvLyB0aW1lIHdpdGhvdXQgdGhlIGNvbnRleHQuIE9uY2UgdGhhdCBoYXBwZW5zLCB0aGUgZm9sbG93aW5nIGNvZGUgd2lsbCBtYWtlIHN1cmUgd2Ugc2VuZFxuICAvLyB0aGUgcHJvcCBhcyBgbnVsbGAgdG8gdGhlIGJyb3dzZXIuXG4gIGFwb2xsb0NsaWVudC50b0pTT04gPSAoKSA9PiBudWxsO1xuXG4gIC8vIEFkZCBhcG9sbG9DbGllbnQgdG8gTmV4dFBhZ2VDb250ZXh0ICYgTmV4dEFwcENvbnRleHQuXG4gIC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNvbnN1bWUgdGhlIGFwb2xsb0NsaWVudCBpbnNpZGUgb3VyXG4gIC8vIGN1c3RvbSBgZ2V0SW5pdGlhbFByb3BzKHsgYXBvbGxvQ2xpZW50IH0pYC5cbiAgY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcbiAgaWYgKGluQXBwQ29udGV4dCkge1xuICAgIGN0eC5jdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50O1xuICB9XG5cbiAgcmV0dXJuIGN0eDtcbn07XG5cbi8qKlxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxuICogQHBhcmFtICB7Tm9ybWFsaXplZENhY2hlT2JqZWN0fSBpbml0aWFsU3RhdGVcbiAqIEBwYXJhbSAge05leHRQYWdlQ29udGV4dH0gY3R4XG4gKi9cbmNvbnN0IGluaXRBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlLCBjdHgpID0+IHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUsIGN0eCk7XG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghZ2xvYmFsQXBvbGxvQ2xpZW50KSB7XG4gICAgZ2xvYmFsQXBvbGxvQ2xpZW50ID0gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSwgY3R4KTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSB3aXRoQXBvbGxvIEhPQ1xuICogdGhhdCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxuICogdG8gYSBuZXh0LmpzIFBhZ2Ugb3IgQXBwVHJlZS5cbiAqIEBwYXJhbSAge09iamVjdH0gd2l0aEFwb2xsb09wdGlvbnNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFt3aXRoQXBvbGxvT3B0aW9ucy5zc3I9ZmFsc2VdXG4gKiBAcmV0dXJucyB7KFBhZ2VDb21wb25lbnQ6IFJlYWN0Tm9kZSkgPT4gUmVhY3ROb2RlfVxuICovXG5leHBvcnQgY29uc3Qgd2l0aEFwb2xsbyA9ICh7IHNzciA9IGZhbHNlIH0gPSB7fSkgPT4gKFBhZ2VDb21wb25lbnQpID0+IHtcbiAgY29uc3QgV2l0aEFwb2xsbyA9ICh7IGFwb2xsb0NsaWVudCwgYXBvbGxvU3RhdGUsIC4uLnBhZ2VQcm9wcyB9KSA9PiB7XG4gICAgbGV0IGNsaWVudDtcbiAgICBpZiAoYXBvbGxvQ2xpZW50KSB7XG4gICAgICAvLyBIYXBwZW5zIG9uOiBnZXREYXRhRnJvbVRyZWUgJiBuZXh0LmpzIHNzclxuICAgICAgY2xpZW50ID0gYXBvbGxvQ2xpZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIYXBwZW5zIG9uOiBuZXh0LmpzIGNzclxuICAgICAgY2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudChhcG9sbG9TdGF0ZSwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKTtcbiAgfTtcblxuICAvLyBTZXQgdGhlIGNvcnJlY3QgZGlzcGxheU5hbWUgaW4gZGV2ZWxvcG1lbnRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cbiAgICAgIFBhZ2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgUGFnZUNvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gICAgV2l0aEFwb2xsby5kaXNwbGF5TmFtZSA9IGB3aXRoQXBvbGxvKCR7ZGlzcGxheU5hbWV9KWA7XG4gIH1cblxuICBpZiAoc3NyIHx8IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgICBjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xuICAgICAgY29uc3QgeyBhcG9sbG9DbGllbnQgfSA9IGluaXRPbkNvbnRleHQoY3R4KTtcblxuICAgICAgLy8gUnVuIHdyYXBwZWQgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZHNcbiAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICAgIGlmIChQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgfSBlbHNlIGlmIChpbkFwcENvbnRleHQpIHtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcbiAgICAgICAgLy8gV2hlbiByZWRpcmVjdGluZywgdGhlIHJlc3BvbnNlIGlzIGZpbmlzaGVkLlxuICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxuICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHBhZ2VQcm9wcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgaWYgZGF0YUZyb21UcmVlIGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHNzciAmJiBBcHBUcmVlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEltcG9ydCBgQGFwb2xsby9yZWFjdC1zc3JgIGR5bmFtaWNhbGx5LlxuICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIHRoaXMgaW4gb3VyIGNsaWVudCBidW5kbGUuXG4gICAgICAgICAgICBjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KFwiQGFwb2xsby9yZWFjdC1zc3JcIik7XG5cbiAgICAgICAgICAgIC8vIFNpbmNlIEFwcENvbXBvbmVudHMgYW5kIFBhZ2VDb21wb25lbnRzIGhhdmUgZGlmZmVyZW50IGNvbnRleHQgdHlwZXNcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbW9kaWZ5IHRoZWlyIHByb3BzIGEgbGl0dGxlLlxuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKGluQXBwQ29udGV4dCkge1xuICAgICAgICAgICAgICBwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb3BzID0geyBwYWdlUHJvcHM6IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIHRoZSBOZXh0LmpzIEFwcFRyZWUsIGRldGVybWluZSB3aGljaCBxdWVyaWVzIGFyZSBuZWVkZWQgdG8gcmVuZGVyLFxuICAgICAgICAgICAgLy8gYW5kIGZldGNoIHRoZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSBwcmV0dHkgc2xvdyBzaW5jZSBpdCByZW5kZXJzXG4gICAgICAgICAgICAvLyB5b3VyIGVudGlyZSBBcHBUcmVlIG9uY2UgZm9yIGV2ZXJ5IHF1ZXJ5LiBDaGVjayBvdXQgYXBvbGxvIGZyYWdtZW50c1xuICAgICAgICAgICAgLy8gaWYgeW91IHdhbnQgdG8gcmVkdWNlIHRoZSBudW1iZXIgb2YgcmVyZW5kZXJzLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9kYXRhL2ZyYWdtZW50cy9cbiAgICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZSg8QXBwVHJlZSB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWBcIiwgZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XG4gICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgICAgSGVhZC5yZXdpbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgIC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcbiAgICAgICAgYXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGNsaWVudCBmb3Igc3NyLiBBcyBzb29uIGFzIHRoaXMgcGF5bG9hZFxuICAgICAgICAvLyBnZXRzIEpTT04uc3RyaW5naWZpZWQgaXQgd2lsbCByZW1vdmUgaXRzZWxmLlxuICAgICAgICBhcG9sbG9DbGllbnQ6IGN0eC5hcG9sbG9DbGllbnQsXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gV2l0aEFwb2xsbztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/apollo.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/apollo */ \"./libs/apollo.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gql_allCharacters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gql/allCharacters */ \"./gql/allCharacters.js\");\nvar _jsxFileName = \"/Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst IndexPage = () => {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_gql_allCharacters__WEBPACK_IMPORTED_MODULE_4__[\"ALL_CHARACTERS\"]);\n  if (error) return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  }, \"Error\");\n  if (loading) return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Setting up Apollo GraphQL in Next.js with Server Side Rendering\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, data.characters.results.map(data => __jsx(\"ul\", {\n    key: data.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, data.name)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_libs_apollo__WEBPACK_IMPORTED_MODULE_1__[\"withApollo\"])({\n  ssr: true\n})(IndexPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkFMTF9DSEFSQUNURVJTIiwiY2hhcmFjdGVycyIsInJlc3VsdHMiLCJtYXAiLCJpZCIsIm5hbWUiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLG9FQUFRLENBQUNDLGlFQUFELENBQXpDO0FBQ0EsTUFBSUgsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ1gsTUFBSUQsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUViLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxDQUFDRyxVQUFMLENBQWdCQyxPQUFoQixDQUF3QkMsR0FBeEIsQ0FBNkJMLElBQUQsSUFDM0I7QUFBSSxPQUFHLEVBQUVBLElBQUksQ0FBQ00sRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixJQUFJLENBQUNPLElBQVYsQ0FERixDQURELENBREgsQ0FKRixDQURGO0FBY0QsQ0FuQkQ7O0FBcUJlQyw4SEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQlosU0FBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuLi9saWJzL2Fwb2xsb1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHsgQUxMX0NIQVJBQ1RFUlMgfSBmcm9tIFwiLi4vZ3FsL2FsbENoYXJhY3RlcnNcIjtcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoQUxMX0NIQVJBQ1RFUlMpO1xuICBpZiAoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I8L2gxPjtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5cbiAgICAgICAgPGgzPlNldHRpbmcgdXAgQXBvbGxvIEdyYXBoUUwgaW4gTmV4dC5qcyB3aXRoIFNlcnZlciBTaWRlIFJlbmRlcmluZzwvaDM+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGEuY2hhcmFjdGVycy5yZXN1bHRzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDx1bCBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPGxpPntkYXRhLm5hbWV9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShJbmRleFBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/SteveRoe/Documents/Coding/letsgo/spacex/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-ssr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiPzEyMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9yZWFjdC1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-ssr\n");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });