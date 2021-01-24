(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+q1r":
/*!*******************************************************************!*\
  !*** ./src/app/components/theme-toggle/theme-toggle.component.ts ***!
  \*******************************************************************/
/*! exports provided: ThemeToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeToggleComponent", function() { return ThemeToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { ovalSelected: a0 }; };
const _c1 = function (a0) { return { buttonSelected: a0 }; };
class ThemeToggleComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.theme = 'bootstrap';
    }
    ngOnInit() {
    }
    toggleTheme() {
        if (this.theme === 'bootstrap') {
            this.theme = 'bootstrap-dark';
        }
        else {
            this.theme = 'bootstrap';
        }
        this.themeService.setTheme(this.theme);
    }
}
ThemeToggleComponent.ɵfac = function ThemeToggleComponent_Factory(t) { return new (t || ThemeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
ThemeToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemeToggleComponent, selectors: [["app-theme-toggle"]], decls: 7, vars: 6, consts: [[1, "theme"], [1, "pt"], [1, "oval", 3, "ngClass", "click"], [1, "button", 3, "ngClass"]], template: function ThemeToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dark mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeToggleComponent_Template_div_click_3_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "light mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.theme == "bootstrap"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.theme == "bootstrap"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".oval[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 10px;\r\n  width: 50px;\r\n  height: 25px;\r\n  border-radius: 25px;\r\n  background-color: #0275d8;\r\n  transition: background-color 0.15s ease-in-out;\r\n}\r\n\r\n.ovalSelected[_ngcontent-%COMP%] {\r\n  background: #04acfa;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 3px;\r\n  margin-left: 3px;\r\n  left: 0px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: #f7f7f7;\r\n  transition: left 0.15s ease-in-out, background-color 0.15s ease-in-out;\r\n}\r\n\r\n.buttonSelected[_ngcontent-%COMP%] {\r\n  left: 25px;\r\n  background-color: #919191;\r\n}\r\n\r\n.theme[_ngcontent-%COMP%]{\r\n  left: 100%;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.pt[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLXRvZ2dsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFFekIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUV6QixzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGhlbWUtdG9nZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZhbFNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMDRhY2ZhO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ1dHRvblNlbGVjdGVkIHtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTkxOTE7XHJcbn1cclxuLnRoZW1le1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnB0e1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-theme-toggle',
                templateUrl: './theme-toggle.component.html',
                styleUrls: ['./theme-toggle.component.css']
            }]
    }], function () { return [{ type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Desktop\Proiecte\angular\Doctor\site\src\main.ts */"zUnb");


/***/ }),

/***/ "6WGc":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IntroComponent {
    constructor() { }
    ngOnInit() {
        const menuToggle = document.querySelector(".toggle");
        const showcase = document.querySelector(".showcase");
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            showcase.classList.toggle("active");
        });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 54, vars: 0, consts: [[1, "showcase"], [1, "logo"], [1, "toggle"], ["muted", "", "src", "/assets/video/intro.mp4", "loop", "", "autoplay", ""], [1, "overlay"], [1, "text"], ["routerLink", "/about"], [1, "social"], ["href", "#"], ["src", "https://i.ibb.co/x7P24fL/facebook.png"], ["href", "tel:0748489982"], ["width", "3.5em", "height", "3.5em", "viewBox", "0 0 16 16", "fill", "#000", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"], ["href", "whatsapp://tel:0748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "3.5em", "height", "3.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], [1, "menu"], ["routerLink", ""], ["routerLink", "/home"], ["routerLink", "/"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dr. Caraba Alexandru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Medicina interna si nefrologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reumatologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cu o vasta experienta de peste 20 de ani de medicina va stau la dispozitie pentru investigatii si tratamente. Ofer servicii de specialitate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Medicina Interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nefrologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reumatologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Despre mine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Servicii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Preturi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 40px 100px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  background: url(https://i.ibb.co/HrfVRcx/menu.png);\n  background-repeat: no-repeat;\n  background-size: 30px;\n  background-position: center;\n  cursor: pointer;\n}\n.toggle.active[_ngcontent-%COMP%] {\n  background: url(https://i.ibb.co/rt3HybH/close.png);\n  background-repeat: no-repeat;\n  background-size: 25px;\n  background-position: center;\n  cursor: pointer;\n}\n.showcase[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 100%;\n  min-height: 100vh;\n  padding: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n  z-index: 2;\n}\n.showcase.active[_ngcontent-%COMP%] {\n  right: 300px;\n}\n.showcase[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.8;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #03a9f4;\n  mix-blend-mode: overlay;\n}\n.text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 500;\n  color: #fff;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #fff;\n  margin: 20px 0;\n  font-weight: 400;\n  max-width: 700px;\n}\n.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7em;\n  background: #fff;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 500;\n  margin-top: 10px;\n  color: #111;\n  letter-spacing: 2px;\n  transition: 0.2s;\n  width: 17vw;\n}\n.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  letter-spacing: 4px;\n}\n.social[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 24px;\n  color: #111;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #03a9f4;\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.9em;\n    background: #fff;\n    padding: 0 10px;\n    width: 55vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 10;\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 10px;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.9em;\n    background: #fff;\n    padding: 0 0px;\n    width: 50vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 1em;\n    background: #fff;\n    padding: 0 10px;\n    width: 45vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n    text-align: justify;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 1em;\n    background: #fff;\n    padding: 0 10px;\n    width: 40vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (max-width: 991px) {\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyR0FBQTtBQUNSO0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQUY7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUlHO0VBQ0QsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURGO0FBS0E7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSEY7QUFLQTtFQUVFLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0E7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUhGO0FBS0E7RUFFRSxZQUFBO0FBSEY7QUFNQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUE7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELHVCQUFBO0FBSkY7QUFNQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBUUE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFQRjtBQVNDO0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFSRjtBQVVDO0VBRUMsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFURjtBQVdDO0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVkY7QUFZQTtFQUVFLG1CQUFBO0FBVkY7QUFZQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBYUE7RUFFRSxnQkFBQTtBQVhGO0FBYUE7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFhQTtFQUVFLHVDQUFBO0FBWEY7QUFhQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhQTtFQUVFLGtCQUFBO0FBWEY7QUFhQTtFQUVFLGdCQUFBO0FBWEY7QUFhQTtFQUVFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFYRjtBQWFBO0VBRUUsY0FBQTtBQVhGO0FBcUJBO0VBQ0U7SUFFRSxrQkFBQTtJQUNBLFdBQUE7RUFuQkY7RUFzQkE7SUFFRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQXJCRjtFQXVCQztJQUdDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBdkJGO0VBeUJDO0lBRUMsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUF4QkY7RUEwQkM7SUFFQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBekJGOztFQTZCQTtJQUVFLG1CQUFBO0VBM0JGOztFQThCQTs7SUFHRSxhQUFBO0VBNUJGOztFQThCQTtJQUVFLGNBQUE7RUE1QkY7O0VBOEJBO0lBRUUsY0FBQTtFQTVCRjs7RUErQkE7SUFFRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBN0JGO0FBQ0Y7QUFnQ0E7RUFDRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtFQS9CRjtFQWtDQTtJQUVFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBakNGO0VBbUNDO0lBR0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUFuQ0Y7RUFxQ0M7SUFFQyxnQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXBDRjtFQXNDQztJQUVDLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFyQ0Y7O0VBMENBO0lBRUUsbUJBQUE7RUF4Q0Y7O0VBMkNBOztJQUdFLGFBQUE7RUF6Q0Y7O0VBMkNBO0lBRUUsY0FBQTtFQXpDRjs7RUEyQ0E7SUFFRSxjQUFBO0VBekNGO0FBQ0Y7QUErQ0E7RUFFRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtFQS9DRjtFQWtEQTtJQUVFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBakRGO0VBbURDO0lBR0MsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUFuREY7RUFxREM7SUFFQyxnQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXBERjtFQXNEQztJQUVDLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQXJERjs7RUF5REE7SUFFRSxtQkFBQTtFQXZERjs7RUEwREE7O0lBR0UsYUFBQTtFQXhERjs7RUEwREE7SUFFRSxjQUFBO0VBeERGOztFQTBEQTtJQUVFLGNBQUE7RUF4REY7QUFDRjtBQStEQztFQUNDO0lBRUUsa0JBQUE7SUFDQSxXQUFBO0VBOURGO0VBaUVBO0lBRUUsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBaEVGO0VBa0VDO0lBR0MsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBbEVGO0VBb0VDO0lBRUMsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQW5FRjtFQXFFQztJQUVDLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQXBFRjs7RUF3RUE7SUFFRSxtQkFBQTtFQXRFRjs7RUF5RUE7O0lBR0UsYUFBQTtFQXZFRjs7RUF5RUE7SUFFRSxjQUFBO0VBdkVGOztFQXlFQTtJQUVFLGNBQUE7RUF2RUY7QUFDRjtBQTRGQTtFQUVFOztJQUdFLGFBQUE7RUE1RkY7O0VBOEZBO0lBRUUsZ0JBQUE7RUE1RkY7O0VBOEZBO0lBRUUsZ0JBQUE7RUE1RkY7QUFDRiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qXHJcbntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuaGVhZGVyXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDBweCAxMDBweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaGVhZGVyXHJcbntcclxuICAgLmxvZ297XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaWJiLmNvL0hyZlZSY3gvbWVudS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRvZ2dsZS5hY3RpdmVcclxue1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaWJiLmNvL3J0M0h5YkgvY2xvc2UucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaG93Y2FzZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzExMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnNob3djYXNlLmFjdGl2ZVxyXG57XHJcbiAgcmlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uc2hvd2Nhc2UgdmlkZW8gXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4ub3ZlcmxheVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAgYmFja2dyb3VuZDogIzAzYTlmNDsgXHJcbiAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbn1cclxuLnRleHRcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcblxyXG5cclxuaDJcclxue1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIGgzXHJcbntcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4gcFxyXG57XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuIGFcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjMTExO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICB3aWR0aDogMTd2dztcclxufX1cclxuLnRleHQgYTpob3ZlclxyXG57XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxufVxyXG4uc29jaWFsXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4uc29jaWFsIGxpXHJcbntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwgbGkgYVxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc29jaWFsIGxpIGE6aG92ZXJcclxue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxufVxyXG4ubWVudVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubWVudSB1bFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tZW51IHVsIGxpXHJcbntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51IHVsIGxpIGFcclxue1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMxMTE7XHJcbn1cclxuLm1lbnUgdWwgbGkgYTpob3ZlclxyXG57XHJcbiAgY29sb3I6ICMwM2E5ZjQ7IFxyXG59XHJcblxyXG4gIFxyXG4gICBcclxuXHJcbiBcclxuQG1lZGlhICAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6ICAyNzZweCkgeyBcclxuICAgIFxyXG4gfVxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDI3NnB4KSBhbmQgKG1heC13aWR0aDogMzc1Ljk4cHgpIHsgXHJcbiAgLnRleHRcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICBcclxuICBcclxuICBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgaDNcclxuICB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgIHBcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuICAgYVxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgIFxyXG4gIH1cclxufVxyXG4gIC50ZXh0IGE6aG92ZXJcclxuICB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2hvd2Nhc2UsXHJcbiAgLnNob3djYXNlIGhlYWRlclxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0IGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC50ZXh0IGgzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuICAuc29jaWFsXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gfVxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDM3NnB4KSBhbmQgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcbiAgLnRleHRcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICBcclxuICBcclxuICBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgaDNcclxuICB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgIHBcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuICAgYVxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjAgMHB4O1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbn1cclxuICAudGV4dCBhOmhvdmVyXHJcbiAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnNob3djYXNlLFxyXG4gIC5zaG93Y2FzZSBoZWFkZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dCBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAudGV4dCBoM1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcblxyXG4gfVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7ICBcclxuICBcclxuICAudGV4dFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIFxyXG4gIGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICBoM1xyXG4gIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMC41ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgcFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gICBhXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgIFxyXG4gIH1cclxufVxyXG4gIC50ZXh0IGE6aG92ZXJcclxuICB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2hvd2Nhc2UsXHJcbiAgLnNob3djYXNlIGhlYWRlclxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0IGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC50ZXh0IGgzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuIH1cclxuIFxyXG5cclxuIFxyXG4gLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCA5OTIpXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkgeyAgXHJcbiAgLnRleHRcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICBcclxuICBcclxuICBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgIGgzXHJcbiAge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMC41ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgcFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICAgYVxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICBcclxuICB9XHJcbn1cclxuICAudGV4dCBhOmhvdmVyXHJcbiAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnNob3djYXNlLFxyXG4gIC5zaG93Y2FzZSBoZWFkZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dCBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAudGV4dCBoM1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcblxyXG4gXHJcbiB9XHJcbiBcclxuIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgIFxyXG4gXHJcbiB9XHJcbiBcclxuIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcblxyXG4gXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweClcclxue1xyXG4gIC5zaG93Y2FzZSxcclxuICAuc2hvd2Nhc2UgaGVhZGVyXHJcbiAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcbiAgLnRleHQgaDJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICAudGV4dCBoM1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 56, vars: 0, consts: [["id", "jumbotron", 1, "jumbotron", "text-center", 2, "margin-bottom", "0px"], [1, "tjumbo"], [1, "title"], ["muted", "", "src", "/assets/video/head1.mp4", "loop", "", "autoplay", ""], ["id", "intro", 1, "intro"], [1, "row", "align-items-center"], [1, "col-md-12", "col-xs-12", "centru1"], [1, "text-center", "titlu1"], [1, "row"], [1, "col-md-3", "col-xs-12", "carddiv"], [1, "card"], ["src", "assets/pics/medicinainterna.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card-body"], ["routerLink", "/interne", 1, "btn", "btn-primary"], ["src", "assets/pics/nefrologie.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#", 1, "btn", "btn-primary"], ["src", "assets/pics/reumatologie.jpg", "alt", "Card image cap", 1, "card-img-top"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caraba Alexandru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Medic primar medicina interna si nefrologie, specialist reumatologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Conferentiar UMF, Victor Babes\u201D Timisoara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bun Venit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Medicina interna este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nefrologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nefrologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reumatologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Reumatologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Preturi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Reumatologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\n#jumbotron[_ngcontent-%COMP%] {\n  color: white;\n  background-position: center;\n  min-height: 40vh;\n}\n.container[_ngcontent-%COMP%] {\n  min-width: 95vw;\n  position: relative;\n  left: 5%;\n  right: 5%;\n}\n.intro[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: dodgerblue, 0.5;\n  color: white;\n  background-position: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n.centru1[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  height: 10vh;\n  min-width: 100%;\n  text-align: center;\n  justify-content: center;\n}\n.centru1[_ngcontent-%COMP%]   .titlu1[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 35px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.stanga1[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  justify-items: stretch;\n  padding: 0 25px;\n}\n.stanga1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin: 20px 0px 10px 30px;\n  line-height: 200%;\n  padding-right: 25px;\n}\n.stanga1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin: 20px 0px 10px 30px;\n  line-height: 150%;\n  padding-right: 25px;\n}\n.dreapta1[_ngcontent-%COMP%] {\n  padding-left: 125px;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n.dreapta1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0px 10px 10px 50px;\n  width: 350px;\n  height: 350px;\n  min-width: 100px;\n}\n.carddiv[_ngcontent-%COMP%] {\n  min-width: 25vw;\n  min-height: 50vh;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n.carddiv[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.carddiv[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  min-width: 150px;\n  min-height: 150px;\n  max-width: 250px;\n  max-height: 250px;\n  margin-bottom: 50px;\n}\n.card[_ngcontent-%COMP%] {\n  min-width: 150px;\n  min-height: 150px;\n  max-width: 200px;\n  max-height: 200px;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .carddiv[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .card-img-top[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    left: 50%;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .carddiv[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    align-items: center;\n  }\n}\na[href][_ngcontent-%COMP%] {\n  position: relative;\n}\na[href][_ngcontent-%COMP%], a[href][_ngcontent-%COMP%]:link, a[href][_ngcontent-%COMP%]:visited, a[href][_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: #ffffff;\n  padding-bottom: 3px;\n  font-weight: bold;\n}\na[href][_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  width: 0;\n  height: 1px;\n  transition: 0.35s cubic-bezier(0.17, 0.67, 0.5, 1.03);\n}\na[href][_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJHQUFBO0FBQ1I7RUFHSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQURKO0FBS0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUZGO0FBS0E7RUFDSSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU1BO0VBR0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFMRjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7QUFKSjtBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0FBUkY7QUFXRTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFXRTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWEY7QUFhRTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVhGO0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JFO0VBQ0UsZ0JBQUE7QUFkSjtBQWtCRTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7QUF3QkE7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXRCSjtBQTZCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBMUJKO0FBaUNBO0VBQ0M7SUFDRSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBOUJEOztFQWlDRDtJQUNDLGNBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VBOUJBO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNDLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBaENEO0FBQ0Y7QUFnRUE7RUFDRSxrQkFBQTtBQTlERjtBQWdFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUE5REY7QUFnRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUE3REY7QUErREE7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7QUE1REYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4janVtYm90cm9ue1xyXG4gIFxyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNDB2aDtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1pbi13aWR0aDogOTV2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG5cclxufVxyXG4uaW50cm97XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvYmsxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZSwuNTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7ICBcclxuICB9XHJcblxyXG4gICAgXHJcbi5jZW50cnUxe1xyXG4gIFxyXG4gIFxyXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLnRpdGx1MXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHggO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG4gIH1cclxuICBcclxufSAgXHJcblxyXG4uc3RhbmdhMXtcclxuICBtaW4td2lkdGg6IDUwdnc7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG4gIFxyXG4gIHBhZGRpbmc6MCAyNXB4O1xyXG5cclxuXHJcbiAgaDR7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW46MjBweCAwcHggMTBweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIGgze1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luOjIwcHggMHB4IDEwcHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kcmVhcHRhMXtcclxuICBwYWRkaW5nLWxlZnQ6ICAxMjVweDtcclxuICBtaW4td2lkdGg6IDUwdnc7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBcclxuICBpbWd7XHJcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxufSAgIFxyXG5cclxuICBcclxuLmNhcmRkaXZ7XHJcbiAgbWluLXdpZHRoOiAyNXZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCA7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBcclxuICBcclxuICAuY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIFxyXG59ICAgIFxyXG4gICBcclxuIFxyXG5cclxuLmNhcmR7XHJcbiBcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogIDI3NnB4KSB7IFxyXG4gICAgXHJcbn1cclxuQG1lZGlhICAobWluLXdpZHRoOiAyNzZweCkgYW5kIChtYXgtd2lkdGg6IDM3NS45OHB4KSB7IFxyXG4gLmNhcmRkaXZ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuIH1cclxuIC5jYXJkLWltZy10b3B7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbn1cclxuIFxyXG5cclxuQG1lZGlhICAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gIC5jYXJkZGl2e1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7ICBcclxuIFxyXG4gXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgOTkyKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkgeyAgXHJcbiBcclxuXHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcblxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcblxyXG5cclxuIH1cclxuIFxyXG5cclxuXHJcbmFbaHJlZl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5hW2hyZWZdLCBhW2hyZWZdOmxpbmssIGFbaHJlZl06dmlzaXRlZCwgYVtocmVmXTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAvLyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzA3MGMxMTtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmFbaHJlZl06OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNjcsIDAuNSwgMS4wMyk7XHJcbn1cclxuYVtocmVmXTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(themeService, renderer) {
        this.themeService = themeService;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.themeService.themeChanges().subscribe(theme => {
            if (theme.oldValue) {
                this.renderer.removeClass(document.body, theme.oldValue);
            }
            this.renderer.addClass(document.body, theme.newValue);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



;
class ThemeService {
    constructor() {
        this.initialSetting = {
            oldValue: null,
            newValue: 'bootstrap'
        };
        this.themeSelection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialSetting);
    }
    setTheme(theme) {
        this.themeSelection.next({
            oldValue: this.themeSelection.value.newValue,
            newValue: theme
        });
    }
    themeChanges() {
        return this.themeSelection.asObservable();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/theme-toggle/theme-toggle.component */ "+q1r");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intro/intro.component */ "6WGc");
/* harmony import */ var _components_interne_interne_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/interne/interne.component */ "a8hh");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ThemeToggleComponent"],
        _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
        _components_interne_interne_component__WEBPACK_IMPORTED_MODULE_8__["InterneComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ThemeToggleComponent"],
                    _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
                    _components_interne_interne_component__WEBPACK_IMPORTED_MODULE_8__["InterneComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a8hh":
/*!*********************************************************!*\
  !*** ./src/app/components/interne/interne.component.ts ***!
  \*********************************************************/
/*! exports provided: InterneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterneComponent", function() { return InterneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");



class InterneComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterneComponent.ɵfac = function InterneComponent_Factory(t) { return new (t || InterneComponent)(); };
InterneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterneComponent, selectors: [["app-interne"]], decls: 82, vars: 0, consts: [[1, "intro"], [1, "text-center"], [1, "tabbable"], [1, "nav", "nav-tabs"], [1, "active"], ["href", "#tab1", "data-toggle", "tab"], ["href", "#tab2", "data-toggle", "tab"], ["href", "#tab3", "data-toggle", "tab"], [1, "tab-content"], ["id", "tab1", 1, "tab-pane", "active"], [1, "container1"], [1, "row"], [1, "col-md-6", "col-xs12", "col-xl-12"], ["src", "/assets/pics/body.gif", "alt", "", 1, "img-fluid"], ["id", "tab2", 1, "tab-pane"], ["id", "tab3", 1, "tab-pane"], ["href", "#tab31", "data-toggle", "tab"], ["href", "#tab32", "data-toggle", "tab"], ["href", "#tab33", "data-toggle", "tab"], ["href", "#tab34", "data-toggle", "tab"], ["id", "tab31", 1, "tab-pane", "active"], [1, "container2"], ["src", "/assets/pics/EKG.jpg", "alt", "", 1, "img-fluid"], ["id", "tab32", 1, "tab-pane"], ["src", "/assets/pics/ECO.jpg", "alt", "", 1, "img-fluid"], ["id", "tab33", 1, "tab-pane"], ["src", "/assets/pics/echo.jpg", "alt", "", 1, "img-fluid"], ["id", "tab34", 1, "tab-pane"], ["src", "/assets/pics/radiologie.jpg", "alt", "", 1, "img-fluid"]], template: function InterneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ce este medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ce boli trateaza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Aparatura folosita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Medicina interna este ramura si specialitatea medicala care se ocupa cu prevenirea, diagnosticul si tratamentul nechirurgical al afectiunilor, in special cele ale organelor interne. Specialitatea medicina interna se adreseaza adultilor. Prin medicina interna se furnizeza pacientilor si servicii de preventie a bolii si de promovare a sanatatii, contribuind la medicina preventiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Specialistii de medicina interna (care se numesc si \"internisti\") au competenta de a rezolva probleme de diagnostic complex si de a monitoriza boli cronice severe si conditii de polipatologie. Specialistii de medicina interna diagnosticheaza si trateaza adultii cu afectiuni respiratorii, cardiace, digestive, renale, osteoarticulare. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "EKG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Eco-Doppler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ECO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Imagistica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Edan SE-1200 Express Basic este un electrocardiograf cu 12 canale si achizitie simultana pe 12 canale, avand performante clinice precise si cu un design usor de utilizat. Este echipat cu o tastatura alfanumerica complexa, precum si cu o operare practica printr-o singura atingere, cu comenzi rapide pentru varsta si gen. Dispune de un ecran LCD color de 8 inch pentru examinarea optima a rezultatelor. Ecranul are functie de hibernare pentru a prelungi durata de viata a LCD-ului, precum si pentru a economisi energia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Ecografia Doppler reprezint\u0103 o metoda de investigarea a vaselor mari de la nivelul g\u00E2tului \u0219i capului care ne d\u0103 informa\u021Bii precise despre gradul de afectare al acestora, dar av\u00E2nd \u00EEn vedere c\u0103 boala vasculara este o afec\u021Biune sistemic\u0103 (\u00EEn tot corpul) ne d\u0103 informa\u021Bii \u0219i despre statusul vascular al pacientului. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " O ecografie abdominala este una din investigatiile de imagistica pe care medicul specialist le recomanda pentru a putea stabili diagnosticul in cazul unui pacient cu probleme gastroenterologice si nu numai. Ecografia abdominala este o investigatie imagistica bazata pe ultrasunete prin care se pot examina organele, vasele si tesuturile intraabdominale. Ecografia abdominala este o metoda rapida de diagnostic, neiradianta, care se poate repeta ori de cate ori este nevoie si nu este dureroasa. Dispozitivul care se aplica pe corpul pacientului numit sonda, emite ultrasunete catre organele si tesuturile intraabdominale si apoi recepteaza undele reflectate si le transmite ecografului. Imaginile obtinute sunt in nuante de gri, alb si negru. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tehnologia aparatelor de ecografie a evoluat mult, existand in prezent soft-uri prin care se poate calcula elasticitatea organelor sau tesuturilor examinate, tehnica denumita elastografie. Elastografia masoara gradul de fibroza sau duritate al organelor sau tumorilor, fiind utila in aprecierea stadiului bolii si a riscului de dezvoltare a complicatiilor. Astfel, o fibroza avansata la nivelul ficatului inseamna ciroza. De asemenea atunci cand descoperim noduli cu diferite localizari utilizarea elastografiei ne poate orienta catre diagnosticul de nodul benign sau malign; de obicei nodulii \u201Cduri\u201D la elastografie sunt mai probabil maligni. O alta tehnologie avansata de care pot beneficia anumite aparate de ecografie este softul de contrast. Ecografia cu contrast foloseste un gaz inert care formeaza milioane de microbule; acestea se injecteaza intravenos si permit obtinerea unei imagini a unui organ sau a unui nodul bazata pe semnalul din vase. Dupa administrarea acestei substante de contrast ea se elimina prin respiratie in aproximativ 15 minute. Daca in urma unei ecografii de rutina se depisteaza un nodul hepatic de obicei indrumam pacientul catre o examinare imagistica superioara prin rezonanta magnetica sau tomografie computerizata cu substanta de contrast. Astfel, se poate caracteriza nodulul respectiv ca fiind o leziune benigna, inofensiva, sau o leziune maligna, adica de origine canceroasa. Ecografia cu substanta de contrast poate oferi aceste informatii in timpul aceleiasi investigatii, ulterior putand veni in completare o evaluare RMN sau CT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Ecografia Doppler reprezint\u0103 o metoda de investigarea a vaselor mari de la nivelul g\u00E2tului \u0219i capului care ne d\u0103 informa\u021Bii precise despre gradul de afectare al acestora, dar av\u00E2nd \u00EEn vedere c\u0103 boala vasculara este o afec\u021Biune sistemic\u0103 (\u00EEn tot corpul) ne d\u0103 informa\u021Bii \u0219i despre statusul vascular al pacientului. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".intro[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #1789fa, 0.5;\n  color: white;\n  background-position: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.container1[_ngcontent-%COMP%] {\n  padding: 100px;\n  min-width: 70vw;\n  min-height: 90vh;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.container1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nli[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.247);\n  border-color: 3px solid blue;\n  border-radius: 35px;\n  margin: 0px 20px;\n  padding: 0px 15px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRlcm5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFBTjs7QUFDTTtFQUNJLGtCQUFBO0FBQ1Y7O0FBSUU7RUFFRSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFRRTtFQUVFLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOUiIsImZpbGUiOiJpbnRlcm5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL2JrMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTM3LCAyNTApLC41O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dzsgIFxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjF7XHJcbiAgICBcclxuICAgICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNzB2dztcclxuICAgICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC4yKTtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAubmF2e1xyXG4gICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbGl7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAzcHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcblxyXG4gICAgYXsgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interne',
                templateUrl: './interne.component.html',
                styleUrls: ['./interne.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 34, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "bg-light", "sticky-top"], ["data-toggle", "collapse", "data-target", "#minmenu", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "minmenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "", "data-page", "acasa", "id", "navacasa", 1, "nav-link"], [1, "dropdown", "show"], ["role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "nav-link"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/interne", "data-page", "despre", 1, "dropdown-item", "nav-link"], ["routerLink", "/reumato", "data-page", "despre", 1, "dropdown-item", "nav-link"], ["href", "#", "data-page", "despre", 1, "dropdown-item", "nav-link"], ["routerLink", "/about", "data-page", "despre", "id", "navdespre", 1, "nav-link"], ["routerLink", "/preturi", "data-page", "preturi", "id", "navpret", 1, "nav-link"], ["href", "tel:0748489982", "id", "navsuna", 1, "nav-link"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"], ["routerLink", "/contact", "data-page", "contact", "id", "navcontact", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Acasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Servicii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reumatologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Despre Mine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Preturi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Suna-ma! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["-navbar(.bootstrap)[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  border-color: darkgrey;\n}\n-navbar(.bootstrap)[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #414141;\n}\n-navbar(.bootstrap-dark)[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #212529;\n  border-color: darkgrey;\n}\n-navbar(.bootstrap-dark)[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7QUFDWjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBR1E7RUFDSSxjQUFBO0FBRFoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtbmF2YmFyKC5ib290c3RyYXApIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QtbmF2YmFyKC5ib290c3RyYXAtZGFyaykge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI2QzZDNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_interne_interne_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/interne/interne.component */ "a8hh");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro/intro.component */ "6WGc");








const routes = [
    { path: '', component: _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'interne', component: _components_interne_interne_component__WEBPACK_IMPORTED_MODULE_4__["InterneComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map