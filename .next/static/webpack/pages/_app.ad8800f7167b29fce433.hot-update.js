webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/DarkMode/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/DarkMode/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DarkMode; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/DarkMode/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");


var _jsxFileName = "C:\\Users\\luanl\\Downloads\\XDM Downloads\\NLW#5\\Projeto\\podcastrnext\\src\\components\\DarkMode\\index.tsx",
    _s = $RefreshSig$();




function DarkMode() {
  _s();

  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"])(),
      theme = _useTheme.theme,
      setTheme = _useTheme.setTheme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState[0],
      setActive = _useState[1];

  setTheme('light');

  var toggleClass = function toggleClass() {
    setActive(!isActive);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: isActive ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hidden : null,
      onClick: toggleClass,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/sol/sol.svg",
        onClick: function onClick() {
          return setTheme('dark');
        },
        alt: "",
        id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sol
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: !isActive ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hidden : null,
      onClick: toggleClass,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/lua/noite.svg",
        onClick: function onClick() {
          setTheme('light');
        },
        alt: "",
        id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.lua
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(DarkMode, "Oj4UqMzRrrOSHC1gFxFS1EMF8Sk=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"]];
});

_c = DarkMode;

var _c;

$RefreshReg$(_c, "DarkMode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFya01vZGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkRhcmtNb2RlIiwidXNlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwic3R5bGVzIiwiZGFya01vZGUiLCJoaWRkZW4iLCJzb2wiLCJsdWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFSkMsNERBQVEsRUFGSjtBQUFBLE1BRXZCQyxLQUZ1QixhQUV2QkEsS0FGdUI7QUFBQSxNQUVqQkMsUUFGaUIsYUFFakJBLFFBRmlCOztBQUFBLGtCQUdEQyxzREFBUSxDQUFDLEtBQUQsQ0FIUDtBQUFBLE1BR3hCQyxRQUh3QjtBQUFBLE1BR2RDLFNBSGM7O0FBSS9CSCxVQUFRLENBQUMsT0FBRCxDQUFSOztBQUNBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJELGFBQVMsQ0FBQyxDQUFDRCxRQUFGLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUVJO0FBQUssYUFBUyxFQUFFRywwREFBTSxDQUFDQyxRQUF2QjtBQUFBLDRCQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFFSixRQUFRLEdBQUdHLDBEQUFNLENBQUNFLE1BQVYsR0FBbUIsSUFBNUQ7QUFBa0UsYUFBTyxFQUFFSCxXQUEzRTtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1KLFFBQVEsQ0FBQyxNQUFELENBQWQ7QUFBQSxTQUFqQztBQUF5RCxXQUFHLEVBQUMsRUFBN0Q7QUFBZ0UsVUFBRSxFQUFFSywwREFBTSxDQUFDRztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUUsQ0FBQ04sUUFBRCxHQUFZRywwREFBTSxDQUFDRSxNQUFuQixHQUE0QixJQUE3RDtBQUFtRSxhQUFPLEVBQUVILFdBQTVFO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBTyxFQUFFLG1CQUFNO0FBQUVKLGtCQUFRLENBQUMsT0FBRCxDQUFSO0FBQW1CLFNBQTlEO0FBQWdFLFdBQUcsRUFBQyxFQUFwRTtBQUF1RSxVQUFFLEVBQUVLLDBEQUFNLENBQUNJO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFhSDs7R0F0QnVCWixRO1VBRU9DLG9EOzs7S0FGUEQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFkODgwMGY3MTY3YjI5ZmNlNDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrTW9kZSgpIHtcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lLHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgc2V0VGhlbWUoJ2xpZ2h0JylcclxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhcmtNb2RlfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IHN0eWxlcy5oaWRkZW4gOiBudWxsfSBvbkNsaWNrPXt0b2dnbGVDbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zb2wvc29sLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKCdkYXJrJyl9IGFsdD1cIlwiIGlkPXtzdHlsZXMuc29sfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17IWlzQWN0aXZlID8gc3R5bGVzLmhpZGRlbiA6IG51bGx9IG9uQ2xpY2s9e3RvZ2dsZUNsYXNzfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2x1YS9ub2l0ZS5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7IHNldFRoZW1lKCdsaWdodCcpIH19IGFsdD1cIlwiIGlkPXtzdHlsZXMubHVhfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9