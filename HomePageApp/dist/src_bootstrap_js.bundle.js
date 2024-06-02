"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_10_react_project"] = self["webpackChunk_10_react_project"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _components_HomeContent_HomeContent_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HomeContent/HomeContent.jsx */ \"./src/components/HomeContent/HomeContent.jsx\");\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HomeContent_HomeContent_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://10-react-project/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack://10-react-project/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/HomeContent/HomeContent.jsx":
/*!****************************************************!*\
  !*** ./src/components/HomeContent/HomeContent.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuickBooking_QuickBooking_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../QuickBooking/QuickBooking.jsx */ \"./src/components/QuickBooking/QuickBooking.jsx\");\n/* harmony import */ var _HomeContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeContent.scss */ \"./src/components/HomeContent/HomeContent.scss\");\n/* harmony import */ var _utils_RoutingProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/RoutingProvider */ \"./src/utils/RoutingProvider.js\");\n\n\nconst MovieCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_remote_components_MovieCard\").then(__webpack_require__.t.bind(__webpack_require__, /*! remote_components/MovieCard */ \"webpack/container/remote/remote_components/MovieCard\", 23)));\n\n\nconst dummyItem = [{\n  name: \"Dummy Movie\"\n}];\nconst HomeContent = props => {\n  const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dummyItem);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {\n    // Add the logic to load the movies from server and set to the state\n    const resp = await fetch(\"http://localhost:5555/movies\");\n    const data = await resp.json();\n    setMovies(data);\n  }, []);\n  const handleMovieClick = item => {\n    if (typeof props.handleMovieClick === \"function\") {\n      props.handleMovieClick(item);\n    }\n  };\n  const renderMovieList = () => {\n    let items = movies.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        onClick: () => handleMovieClick(item),\n        key: item.name\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MovieCard, {\n        title: item.name,\n        imageUrl: item.imageUrl\n      }));\n    });\n    return items;\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"home-content-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_RoutingProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: props.routing\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuickBooking_QuickBooking_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"movies-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: null\n  }, renderMovieList()))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContent);\n\n//# sourceURL=webpack://10-react-project/./src/components/HomeContent/HomeContent.jsx?");

/***/ }),

/***/ "./src/components/QuickBooking/QuickBooking.jsx":
/*!******************************************************!*\
  !*** ./src/components/QuickBooking/QuickBooking.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuickBooking_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickBooking.scss */ \"./src/components/QuickBooking/QuickBooking.scss\");\n/* harmony import */ var _utils_RoutingProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/RoutingProvider */ \"./src/utils/RoutingProvider.js\");\n\nconst Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_remote_components_Typography\").then(__webpack_require__.t.bind(__webpack_require__, /*! remote_components/Typography */ \"webpack/container/remote/remote_components/Typography\", 23)));\nconst MovieData = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_movie_app_movie_data\").then(__webpack_require__.t.bind(__webpack_require__, /*! movie_app/movie_data */ \"webpack/container/remote/movie_app/movie_data\", 23)));\n\n\nconst QuickBooking = () => {\n  const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"1\");\n  const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"01/02/2022\");\n  const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"10 Am\");\n  const bookMovie = context => {\n    const booking = {\n      movie,\n      date,\n      time\n    };\n    // Call the next function of the MovieData context to pass the booking details\n    if (MovieData) MovieData.default.next(booking);\n    context.history.push('book');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_RoutingProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Consumer, null, context => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"quick-booking-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: null\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Typography, {\n      text: \"Quick Booking\",\n      type: \"title\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"spacer\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"mr-1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Select Movie\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n      onChange: e => setMovie(e.target.value),\n      value: movie\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"1\"\n    }, \"Avengers End Game\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"2\"\n    }, \"Spiderman\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"3\"\n    }, \"IronMan\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"4\"\n    }, \"Doctor Strange\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"5\"\n    }, \"Black Panther\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"6\"\n    }, \"Thor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"7\"\n    }, \"Captain America\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"8\"\n    }, \"Black Widow\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"9\"\n    }, \"Venom\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"10\"\n    }, \"Ethernals\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"mr-1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Select Date: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n      onChange: e => setDate(e.target.value),\n      value: date\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"01/02/2022\"\n    }, \"01/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"02/02/2022\"\n    }, \"02/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"03/02/2022\"\n    }, \"03/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"04/02/2022\"\n    }, \"04/02/2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"05/02/2022\"\n    }, \"05/02/2022\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"mr-1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Select Time: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n      onChange: e => setTime(e.target.value),\n      value: time\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"10 Am\"\n    }, \"10 Am\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"12:30 PM\"\n    }, \"12:30 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"4 PM\"\n    }, \"4 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"8 PM\"\n    }, \"8 PM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: \"9:30 PM\"\n    }, \"9:30 PM\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      onClick: () => bookMovie(context)\n    }, \"Book\"));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickBooking);\n\n//# sourceURL=webpack://10-react-project/./src/components/QuickBooking/QuickBooking.jsx?");

/***/ }),

/***/ "./src/utils/RoutingProvider.js":
/*!**************************************!*\
  !*** ./src/utils/RoutingProvider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RoutingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoutingContext);\n\n//# sourceURL=webpack://10-react-project/./src/utils/RoutingProvider.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/App.scss?");

/***/ }),

/***/ "./src/components/HomeContent/HomeContent.scss":
/*!*****************************************************!*\
  !*** ./src/components/HomeContent/HomeContent.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/HomeContent/HomeContent.scss?");

/***/ }),

/***/ "./src/components/QuickBooking/QuickBooking.scss":
/*!*******************************************************!*\
  !*** ./src/components/QuickBooking/QuickBooking.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/QuickBooking/QuickBooking.scss?");

/***/ })

}]);