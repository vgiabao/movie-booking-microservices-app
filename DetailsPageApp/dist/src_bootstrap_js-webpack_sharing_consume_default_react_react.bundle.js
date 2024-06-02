"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_10_react_project"] = self["webpackChunk_10_react_project"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react_react"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _components_DetailsContent_DetailsContent_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DetailsContent/DetailsContent.jsx */ \"./src/components/DetailsContent/DetailsContent.jsx\");\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailsContent_DetailsContent_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://10-react-project/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById(\"app\"));\n\n//# sourceURL=webpack://10-react-project/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/DetailsContent/DetailsContent.jsx":
/*!**********************************************************!*\
  !*** ./src/components/DetailsContent/DetailsContent.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DetailsContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsContent.scss */ \"./src/components/DetailsContent/DetailsContent.scss\");\n\n\nconst DetailsContent = props => {\n  const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"01/02/2022\");\n  const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"10 Am\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {\n    const resp = await fetch(\"http://localhost:5555/movies\");\n    const data = await resp.json();\n    let pathArr = props?.location?.pathname.split(\"/\");\n    let id = pathArr[pathArr.length - 1];\n    const selectedMovie = data.filter(movie => {\n      return movie.id === parseInt(id);\n    });\n    console.log(selectedMovie);\n    setMovie(id, data);\n  }, []);\n  const renderImage = () => {\n    const imgUrl = `http://localhost:5555/images/${movie.imageUrl}`;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: imgUrl\n    });\n  };\n  const bookMovie = () => {\n    const booking = {\n      movie: movie.id,\n      date,\n      time\n    };\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"details-content-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"details-content-row\"\n  }, renderImage(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"details-content-column ml-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"movie-title\"\n  }, movie.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, movie.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"details-content-column align-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"details-content-book-movie\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"mb-2\"\n  }, \"Book Movie\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    placeholder: \"Select Date\",\n    className: \"mb-2\",\n    onChange: e => setDate(e.target.value),\n    value: date\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"01/02/2022\"\n  }, \"01/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"02/02/2022\"\n  }, \"02/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"03/02/2022\"\n  }, \"03/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"04/02/2022\"\n  }, \"04/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"05/02/2022\"\n  }, \"05/02/2022\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    placeholder: \"Select Time\",\n    className: \"mb-2\",\n    onChange: e => setTime(e.target.value),\n    value: time\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"10 Am\"\n  }, \"10 Am\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"12:30 PM\"\n  }, \"12:30 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"4 PM\"\n  }, \"4 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"8 PM\"\n  }, \"8 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"9:30 PM\"\n  }, \"9:30 PM\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: bookMovie\n  }, \"Book Now\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsContent);\n\n//# sourceURL=webpack://10-react-project/./src/components/DetailsContent/DetailsContent.jsx?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/App.scss?");

/***/ }),

/***/ "./src/components/DetailsContent/DetailsContent.scss":
/*!***********************************************************!*\
  !*** ./src/components/DetailsContent/DetailsContent.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/DetailsContent/DetailsContent.scss?");

/***/ })

}]);