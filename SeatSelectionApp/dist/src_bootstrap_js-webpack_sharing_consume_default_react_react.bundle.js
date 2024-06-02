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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _components_SeatSelectionContent_SeatSelectionContent_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SeatSelectionContent/SeatSelectionContent.jsx */ \"./src/components/SeatSelectionContent/SeatSelectionContent.jsx\");\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SeatSelectionContent_SeatSelectionContent_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://10-react-project/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById(\"app\"));\n\n//# sourceURL=webpack://10-react-project/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/SeatSelectionContent/SeatSelectionContent.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/SeatSelectionContent/SeatSelectionContent.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?024c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SeatSelectionContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeatSelectionContent.scss */ \"./src/components/SeatSelectionContent/SeatSelectionContent.scss\");\n\n\nconst SeatSelectionContent = () => {\n  const [bookingData, setBookingData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    movie: \"Select Movie\",\n    date: \"Select Date\",\n    time: \"Select Time\",\n    imageUrl: \"\"\n  });\n  const [seatsCount, setSeatsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const loadBooking = async booking => {\n    const resp = await fetch(\"http://localhost:5555/movies\");\n    const data = await resp.json();\n    const selectedMovie = data.filter(movie => {\n      return movie.id === parseInt(booking.movie);\n    });\n    setBookingData({\n      movie: selectedMovie[0].name,\n      date: booking.date,\n      time: booking.time,\n      imageUrl: selectedMovie[0].imageUrl\n    });\n  };\n  const renderImage = () => {\n    const imgUrl = `http://localhost:5555/images/${bookingData.imageUrl}`;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: imgUrl\n    });\n  };\n  const toggleSeatSelection = e => {\n    if (e.target.classList.contains(\"selected\")) {\n      setSeatsCount(seatsCount - 1);\n    } else {\n      setSeatsCount(seatsCount + 1);\n    }\n    e.target.classList.toggle(\"selected\");\n  };\n  const renderSeats = () => {\n    let seats = [1, 2, 3, 4, 5, 6, 7];\n    return seats.map(seat => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"seat\",\n      key: seat,\n      onClick: toggleSeatSelection\n    }, seat));\n  };\n  const seatsBooked = () => {\n    alert(`Movie Booked ${bookingData.movie}, seats Booked ${seatsCount} -- ENJOY !!!!!`);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"seat-selection-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"column\"\n  }, renderImage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"column full-width p-20\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"movie-title\"\n  }, bookingData.movie), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"mt-2\"\n  }, \" Book Movie\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"mt-2\"\n  }, \"Selected Date : \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, bookingData.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"mt-2\"\n  }, \"Time Selected : \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, bookingData.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"screen-select-container mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"screen\"\n  }, \"Screen\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"seats-container mt-2\"\n  }, renderSeats())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row mt-2 space-between\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Selected Seats : \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, seatsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Total Cost \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, seatsCount * 10, \"$\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: seatsBooked\n  }, \"Book\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeatSelectionContent);\n\n//# sourceURL=webpack://10-react-project/./src/components/SeatSelectionContent/SeatSelectionContent.jsx?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/App.scss?");

/***/ }),

/***/ "./src/components/SeatSelectionContent/SeatSelectionContent.scss":
/*!***********************************************************************!*\
  !*** ./src/components/SeatSelectionContent/SeatSelectionContent.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/SeatSelectionContent/SeatSelectionContent.scss?");

/***/ })

}]);