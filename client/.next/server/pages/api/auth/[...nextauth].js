"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.TWITTER_CLIENT_ID,\n            clientSecret: process.env.TWITTER_CLIENT_SECRET,\n            version: \"2.0\"\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNFO0FBRW5ELE1BQU1HLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RILGlFQUFjQSxDQUFDO1lBQ2JJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0FSLGtFQUFlQSxDQUFDO1lBQ2RHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksaUJBQWlCO1lBQ3ZDRixjQUFjSCxRQUFRQyxHQUFHLENBQUNLLHFCQUFxQjtZQUMvQ0MsU0FBUztRQUNYO0tBRUQ7QUFDSCxFQUFFO0FBRUYsaUVBQWViLGdEQUFRQSxDQUFDRyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFrZS1uZXdzLWRldGVjdGlvbi8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3R3aXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgVHdpdHRlclByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgdmVyc2lvbjogXCIyLjBcIixcclxuICAgIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiVFdJVFRFUl9DTElFTlRfSUQiLCJUV0lUVEVSX0NMSUVOVF9TRUNSRVQiLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();