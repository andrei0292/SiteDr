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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");



class AboutComponent {
    constructor() { }
    ngOnInit() {
        var items = document.querySelectorAll(".timeline li");
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        }
        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    if (!items[i].classList.contains("in-view")) {
                        items[i].classList.add("in-view");
                    }
                }
                else if (items[i].classList.contains("in-view")) {
                    items[i].classList.remove("in-view");
                }
            }
        }
        window.addEventListener("load", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 75, vars: 0, consts: [[1, "page"], [1, "intro"], [1, "timeline"], [1, "discovery"], [1, "scientist"], ["href", "/assets/pics/bk5.jpg"], ["src", "/assets/pics/bk5.jpg"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Doctor Caraba Alexandru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Despre mine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Initiere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Am inceput sa punem bazele noi mele meserii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Primul an de facultate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Am inceput cursurile la Univ de medicina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ultimul an de facultate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Ultimul an de facultate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Angajare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " M-am angajat in spitalul ca si medic rezident ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Profesor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Am devenit profesor in cadrul univ. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Va astept cu drag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Povestea continua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.page[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: black;\n  background-position: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.intro[_ngcontent-%COMP%] {\n  min-height: 25vh;\n}\n.intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-align: center;\n  color: white;\n}\n.intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 25px;\n  text-align: center;\n  color: white;\n}\nbody[_ngcontent-%COMP%] {\n  font: normal 16px/1.5;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  background: linear-gradient(54deg, #0dc0d8, #8bfff4);\n  color: #6c6e94;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n.timeline[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  width: 6px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: #fff;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%) rotate(45deg);\n  width: 20px;\n  height: 20px;\n  z-index: 2;\n  background: #05a093;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 20px;\n  background: linear-gradient(154deg, #afdfe6, #ffffff);\n  box-shadow: 4px 13px 30px 1px rgba(15, 162, 182, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #05a093;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  width: 80px;\n  height: 30px;\n  top: -15px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 1.5px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  margin: 20px;\n  border: 1px solid black;\n  overflow: hidden;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  display: block;\n  transition: transform 0.4s;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  transform-origin: 50% 50%;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)    > div[_ngcontent-%COMP%] {\n  left: 45px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n  left: -439px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   div[_ngcontent-%COMP%] {\n  transform: translate3d(100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   div[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media screen and (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 250px;\n    flex-direction: column;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: -289px;\n  }\n}\n@media screen and (max-width: 600px) {\n  body[_ngcontent-%COMP%] {\n    background: #8bfff4;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: calc(100vw - 91px);\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBTVI7RUFDSSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBSUU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEZBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRko7QUFJRTtFQUNFLDBGQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUE7RUFDRSxxQkFBQTtFQUNBLDBGQUFBO0VBQ0Esb0RBeENpQjtFQXlDakIsY0F4Q1c7RUF5Q1gsa0JBQUE7RUFDQSxvQkFBQTtBQUhGO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBTUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSk47QUFLTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHFEQTNFTztFQTRFUCxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSlI7QUFLUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUhWO0FBS1E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhWO0FBSVU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkFBQTtBQUZaO0FBSVU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRkFBQTtBQUZaO0FBS1E7RUFDRSxrQkFBQTtBQUhWO0FBS1E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQTZCLHVEQUFBO0FBSHZDO0FBS1E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUE2QixrQkFBQTtBQUh2QztBQVlhO0VBQ0MscUJBQUE7RUFDQSx5QkFBQTtBQVZkO0FBZ0JRO0VBQ0UsVUFBQTtBQWRWO0FBa0JRO0VBQ0UsWUFBQTtBQWhCVjtBQTJCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBeEJSO0FBMkJRO0VBQ0UscURBQUE7QUF6QlY7QUE2QlE7RUFDRSxzREFBQTtBQTNCVjtBQStCUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUE3QlY7QUFvQ0E7RUFDSTtJQUNJLGVBQUE7RUFqQ047O0VBc0NNO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0VBbkNSO0VBb0NRO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFsQ1Y7RUFzQ1E7SUFDRSxZQUFBO0VBcENWO0FBQ0Y7QUEyQ0E7RUFDRTtJQUNFLG1CQUFBO0VBekNGOztFQTZDSTtJQUNFLGlCQUFBO0VBMUNOO0VBMkNNO0lBQ0UseUJBQUE7RUF6Q1I7RUE0Q1E7SUFDRSxVQUFBO0VBMUNWO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjpsaW5lYXItZ3JhZGllbnQoMTU0ZGVnLCAjYWZkZmU2LCAjZmZmZmZmKTtcclxuJGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg1NGRlZywgIzBkYzBkOCwgIzhiZmZmNCk7XHJcbiR0ZXh0LWNvbG9yOiAjNmM2ZTk0O1xyXG4ucGFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy9iazEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3OyAgXHJcbn1cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaW50cm97XHJcbiAgbWluLWhlaWdodDogMjV2aDtcclxuICBcclxuICBoMntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIGgze1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICB9XHJcblxyXG5ib2R5IHtcclxuICBmb250OiBub3JtYWwgMTZweC8xLjUgO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi8vIFNUWUxJTkdcclxuLnRpbWVsaW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzA1YTA5MztcclxuICAgICAgfVxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDEzcHggMzBweCAxcHggcmdiYSgxNSwgMTYyLCAxODIsIDAuMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0aW1lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNWEwOTM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNjb3Zlcnkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2NpZW50aXN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgICAgLyogY2xpcCB0aGUgZXhjZXNzIHdoZW4gY2hpbGQgZ2V0cyBiaWdnZXIgdGhhbiBwYXJlbnQgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40czsgICAvKiBzbW9vdGhlciB6b29tICovXHJcblxyXG4gICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAvLyAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5zY2llbnRpc3Q6aG92ZXIgaW1nIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAvLyAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBsZWZ0OiAtNDM5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBTklNQVRJT05cclxuLnRpbWVsaW5lIHtcclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuaW4tdmlldyB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5wYWdle1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAudGltZWxpbmUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjg5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzhiZmZmNDtcclxuICB9XHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkxcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
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
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 71, vars: 0, consts: [[1, "showcase"], [1, "logo"], [1, "toggle"], ["src", "/assets/pics/bk5.jpg"], [1, "overlay"], [1, "text"], ["routerLink", "/interne"], ["routerLink", "/nefrologie"], ["routerLink", "/reumatologie"], [1, "social"], ["href", "tel:0748489982"], ["width", "3.5em", "height", "3.5em", "viewBox", "0 0 16 16", "fill", "#000", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"], ["href", "whatsapp://tel:0748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "3.5em", "height", "3.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["href", "https://www.facebook.com/"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], [1, "menu"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/home"], ["routerLink", "/"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dr. Caraba Alexandru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nefrologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reumatologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Despre mine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Servicii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Preturi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 40px 100px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  background: url(https://i.ibb.co/HrfVRcx/menu.png);\n  background-repeat: no-repeat;\n  background-size: 30px;\n  background-position: center;\n  cursor: pointer;\n}\n.toggle.active[_ngcontent-%COMP%] {\n  background: url(https://i.ibb.co/rt3HybH/close.png);\n  background-repeat: no-repeat;\n  background-size: 25px;\n  background-position: center;\n  cursor: pointer;\n}\n.showcase[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 100%;\n  min-height: 100vh;\n  padding: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n  z-index: 2;\n}\n.showcase.active[_ngcontent-%COMP%] {\n  right: 300px;\n}\n.showcase[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.8;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  mix-blend-mode: overlay;\n}\n.text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 500;\n  color: #fff;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #fff;\n  margin: 20px 0;\n  font-weight: 400;\n  max-width: 700px;\n}\n.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7em;\n  background: #fff;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 500;\n  margin-top: 10px;\n  color: #111;\n  letter-spacing: 2px;\n  transition: 0.2s;\n  width: 17vw;\n}\n.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  letter-spacing: 4px;\n}\n.social[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 24px;\n  color: #111;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #03a9f4;\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.9em;\n    background: #fff;\n    padding: 0 10px;\n    width: 55vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 10;\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 10px;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.9em;\n    background: #fff;\n    padding: 0 0px;\n    width: 50vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 1em;\n    background: #fff;\n    padding: 0 10px;\n    width: 45vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .text[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: 400;\n    color: #fff;\n    line-height: 1em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #fff;\n    line-height: 0.5em;\n    text-transform: uppercase;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n    color: #fff;\n    margin: 20px 0;\n    font-weight: 400;\n    max-width: 700px;\n    text-align: justify;\n  }\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 1em;\n    background: #fff;\n    padding: 0 10px;\n    width: 40vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-weight: 10px;\n    margin-top: 5px;\n    color: #111;\n    letter-spacing: 1px;\n    transition: 0.1s;\n  }\n\n  .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    letter-spacing: 2px;\n  }\n\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (max-width: 991px) {\n  .showcase[_ngcontent-%COMP%], .showcase[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyR0FBQTtBQUNSO0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQUY7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUlHO0VBQ0QsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURGO0FBS0E7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSEY7QUFLQTtFQUVFLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0E7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUhGO0FBS0E7RUFFRSxZQUFBO0FBSEY7QUFNQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUE7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtBQUxGO0FBT0E7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFMRjtBQVNBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBUkY7QUFVQztFQUVDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBVEY7QUFXQztFQUVDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFZQztFQUVDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVhGO0FBYUE7RUFFRSxtQkFBQTtBQVhGO0FBYUE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBRUUsZ0JBQUE7QUFaRjtBQWNBO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVpGO0FBY0E7RUFFRSx1Q0FBQTtBQVpGO0FBY0E7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpGO0FBY0E7RUFFRSxrQkFBQTtBQVpGO0FBY0E7RUFFRSxnQkFBQTtBQVpGO0FBY0E7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWkY7QUFjQTtFQUVFLGNBQUE7QUFaRjtBQXNCQTtFQUNFO0lBRUUsa0JBQUE7SUFDQSxXQUFBO0VBcEJGO0VBdUJBO0lBRUUsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUF0QkY7RUF3QkM7SUFHQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFQXhCRjtFQTBCQztJQUVDLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBekJGO0VBMkJDO0lBRUMsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQTFCRjs7RUE4QkE7SUFFRSxtQkFBQTtFQTVCRjs7RUErQkE7O0lBR0UsYUFBQTtFQTdCRjs7RUErQkE7SUFFRSxjQUFBO0VBN0JGOztFQStCQTtJQUVFLGNBQUE7RUE3QkY7O0VBZ0NBO0lBRUUsa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQTlCRjtBQUNGO0FBaUNBO0VBQ0U7SUFFRSxrQkFBQTtJQUNBLFdBQUE7RUFoQ0Y7RUFtQ0E7SUFFRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQWxDRjtFQW9DQztJQUdDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBcENGO0VBc0NDO0lBRUMsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFyQ0Y7RUF1Q0M7SUFFQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBdENGOztFQTJDQTtJQUVFLG1CQUFBO0VBekNGOztFQTRDQTs7SUFHRSxhQUFBO0VBMUNGOztFQTRDQTtJQUVFLGNBQUE7RUExQ0Y7O0VBNENBO0lBRUUsY0FBQTtFQTFDRjtBQUNGO0FBZ0RBO0VBRUU7SUFFRSxrQkFBQTtJQUNBLFdBQUE7RUFoREY7RUFtREE7SUFFRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQWxERjtFQW9EQztJQUdDLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBcERGO0VBc0RDO0lBRUMsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFyREY7RUF1REM7SUFFQyxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUF0REY7O0VBMERBO0lBRUUsbUJBQUE7RUF4REY7O0VBMkRBOztJQUdFLGFBQUE7RUF6REY7O0VBMkRBO0lBRUUsY0FBQTtFQXpERjs7RUEyREE7SUFFRSxjQUFBO0VBekRGO0FBQ0Y7QUFnRUM7RUFDQztJQUVFLGtCQUFBO0lBQ0EsV0FBQTtFQS9ERjtFQWtFQTtJQUVFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQWpFRjtFQW1FQztJQUdDLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFQW5FRjtFQXFFQztJQUVDLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFwRUY7RUFzRUM7SUFFQyxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFyRUY7O0VBeUVBO0lBRUUsbUJBQUE7RUF2RUY7O0VBMEVBOztJQUdFLGFBQUE7RUF4RUY7O0VBMEVBO0lBRUUsY0FBQTtFQXhFRjs7RUEwRUE7SUFFRSxjQUFBO0VBeEVGO0FBQ0Y7QUE2RkE7RUFFRTs7SUFHRSxhQUFBO0VBN0ZGOztFQStGQTtJQUVFLGdCQUFBO0VBN0ZGOztFQStGQTtJQUVFLGdCQUFBO0VBN0ZGO0FBQ0YiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuKlxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhlYWRlclxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmhlYWRlclxyXG57XHJcbiAgIC5sb2dve1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZVxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9IcmZWUmN4L21lbnUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50b2dnbGUuYWN0aXZlXHJcbntcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9ydDNIeWJIL2Nsb3NlLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2hvd2Nhc2Vcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zaG93Y2FzZS5hY3RpdmVcclxue1xyXG4gIHJpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnNob3djYXNlIGltZyBcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5vdmVybGF5XHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vICBiYWNrZ3JvdW5kOiAjMDNhOWY0OyBcclxuICBtaXgtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxufVxyXG4udGV4dFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuXHJcblxyXG5oMlxyXG57XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4gaDNcclxue1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiBwXHJcbntcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG4gYVxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHdpZHRoOiAxN3Z3O1xyXG59fVxyXG4udGV4dCBhOmhvdmVyXHJcbntcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG59XHJcbi5zb2NpYWxcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5zb2NpYWwgbGlcclxue1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNvY2lhbCBsaSBhXHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zb2NpYWwgbGkgYTpob3ZlclxyXG57XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG59XHJcbi5tZW51XHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZW51IHVsXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lbnUgdWwgbGlcclxue1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUgdWwgbGkgYVxyXG57XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzExMTtcclxufVxyXG4ubWVudSB1bCBsaSBhOmhvdmVyXHJcbntcclxuICBjb2xvcjogIzAzYTlmNDsgXHJcbn1cclxuXHJcbiAgXHJcbiAgIFxyXG5cclxuIFxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogIDI3NnB4KSB7IFxyXG4gICAgXHJcbiB9XHJcbkBtZWRpYSAgKG1pbi13aWR0aDogMjc2cHgpIGFuZCAobWF4LXdpZHRoOiAzNzUuOThweCkgeyBcclxuICAudGV4dFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIFxyXG4gIGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICBoM1xyXG4gIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMC41ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgcFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gICBhXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbiAgLnRleHQgYTpob3ZlclxyXG4gIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93Y2FzZSxcclxuICAuc2hvd2Nhc2UgaGVhZGVyXHJcbiAge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLnRleHQgaDJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLnRleHQgaDNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiB9XHJcbkBtZWRpYSAgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcclxuICAudGV4dFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIFxyXG4gIGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICBoM1xyXG4gIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMC41ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgcFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gICBhXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MCAwcHg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxufVxyXG4gIC50ZXh0IGE6aG92ZXJcclxuICB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2hvd2Nhc2UsXHJcbiAgLnNob3djYXNlIGhlYWRlclxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0IGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC50ZXh0IGgzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuXHJcbiB9XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgIFxyXG4gIFxyXG4gIC50ZXh0XHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgXHJcbiAgXHJcbiAgaDJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgIGgzXHJcbiAge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICBwXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICB9XHJcbiAgIGFcclxuICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgd2lkdGg6IDQ1dnc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbiAgLnRleHQgYTpob3ZlclxyXG4gIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93Y2FzZSxcclxuICAuc2hvd2Nhc2UgaGVhZGVyXHJcbiAge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLnRleHQgaDJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLnRleHQgaDNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gfVxyXG4gXHJcblxyXG4gXHJcbiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIDk5MilcclxuIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7ICBcclxuICAudGV4dFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIFxyXG4gIGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAgaDNcclxuICB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICBwXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG4gICBhXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgIFxyXG4gIH1cclxufVxyXG4gIC50ZXh0IGE6aG92ZXJcclxuICB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2hvd2Nhc2UsXHJcbiAgLnNob3djYXNlIGhlYWRlclxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0IGgyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC50ZXh0IGgzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuXHJcbiBcclxuIH1cclxuIFxyXG4gLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcbiBcclxuIH1cclxuIFxyXG4gLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICBcclxuXHJcbiBcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KVxyXG57XHJcbiAgLnNob3djYXNlLFxyXG4gIC5zaG93Y2FzZSBoZWFkZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuICAudGV4dCBoMlxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIC50ZXh0IGgzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbn0iXX0= */"] });
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 60, vars: 0, consts: [["id", "jumbotron", 1, "jumbotron", "text-center", 2, "margin-bottom", "0px"], [1, "tjumbo"], [1, "title"], ["id", "intro", 1, "intro"], [1, "row", "align-items-center"], [1, "col-md-12", "col-xs-12", "centru1"], [1, "text-center", "titlu1"], [1, "row"], [1, "col-md-3", "col-xs-12", "carddiv"], [1, "card"], ["src", "assets/pics/medicinainterna.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card-body"], ["routerLink", "/interne", 1, "btn", "btn-primary"], ["src", "assets/pics/nefrologie.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#", 1, "btn", "btn-primary"], ["src", "assets/pics/reumatologie.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "texte"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bun Venit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Medicina interna este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nefrologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nefrologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reumatologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reumatologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Preturi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Reumatologia este ramura medicinii care se ocupa cu...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Citeste mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, molestias?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptatum ducimus? Dolorum vel dolorem consequatur reiciendis sapiente aperiam fugit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\n#jumbotron[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: dodgerblue, 0.5;\n  color: white;\n  background-position: center;\n  min-height: 40vh;\n}\n.container[_ngcontent-%COMP%] {\n  min-width: 95vw;\n  position: relative;\n  left: 5%;\n  right: 5%;\n}\n.intro[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: dodgerblue, 0.5;\n  color: white;\n  background-position: center;\n  min-height: 120vh;\n  min-width: 100vw;\n}\n.centru1[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  height: 10vh;\n  min-width: 100%;\n  text-align: center;\n  justify-content: center;\n}\n.centru1[_ngcontent-%COMP%]   .titlu1[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 35px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.stanga1[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  justify-items: stretch;\n  padding: 0 25px;\n}\n.stanga1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin: 20px 0px 10px 30px;\n  line-height: 200%;\n  padding-right: 25px;\n}\n.stanga1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin: 20px 0px 10px 30px;\n  line-height: 150%;\n  padding-right: 25px;\n}\n.dreapta1[_ngcontent-%COMP%] {\n  padding-left: 125px;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n.dreapta1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0px 10px 10px 50px;\n  width: 350px;\n  height: 350px;\n  min-width: 100px;\n}\n.carddiv[_ngcontent-%COMP%] {\n  min-width: 25vw;\n  min-height: 50vh;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n.carddiv[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.carddiv[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  min-width: 150px;\n  min-height: 150px;\n  max-width: 250px;\n  max-height: 250px;\n  margin-bottom: 50px;\n}\n.card[_ngcontent-%COMP%] {\n  min-width: 150px;\n  min-height: 150px;\n  max-width: 200px;\n  max-height: 200px;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.texte[_ngcontent-%COMP%] {\n  min-height: 30vh;\n  min-width: 100%;\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.texte[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  margin: 10px 80px 10px 10px;\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .carddiv[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    margin-bottom: 60px;\n    display: block;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .card-img-top[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    left: 50%;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .carddiv[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    align-items: center;\n  }\n}\na[href][_ngcontent-%COMP%] {\n  position: relative;\n}\na[href][_ngcontent-%COMP%], a[href][_ngcontent-%COMP%]:link, a[href][_ngcontent-%COMP%]:visited, a[href][_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: #ffffff;\n  padding-bottom: 3px;\n  font-weight: bold;\n}\na[href][_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  width: 0;\n  height: 1px;\n  transition: 0.35s cubic-bezier(0.17, 0.67, 0.5, 1.03);\n}\na[href][_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJHQUFBO0FBQ1I7RUFFSSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREY7QUFJQTtFQUNJLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBS0E7RUFHRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUpGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQUhKO0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLGVBQUE7QUFQRjtBQVVFO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFSRjtBQVVFO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFSRjtBQWFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBVkY7QUFlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWVFO0VBQ0UsZ0JBQUE7QUFiSjtBQWlCRTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFmRjtBQXVCQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBckJKO0FBNEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUF6Qko7QUE2QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUExQkY7QUEyQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQXpCSjtBQStCQTtFQUNDO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUE1QkQ7O0VBZ0NEO0lBQ0MsY0FBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUE3QkE7QUFDRjtBQWlDQTtFQUNFO0lBQ0MsY0FBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUEvQkQ7QUFDRjtBQStEQTtFQUNFLGtCQUFBO0FBN0RGO0FBK0RBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtBQTdERjtBQStEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQTVERjtBQThEQTtFQUNFLFdBQUE7RUFDQSx3Q0FBQTtBQTNERiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbiNqdW1ib3Ryb257XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvYmsxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZSwuNTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWluLXdpZHRoOiA5NXZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1JTtcclxuICByaWdodDogNSU7XHJcblxyXG59XHJcbi5pbnRyb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy9iazEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlLC41O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dzsgIFxyXG4gIH1cclxuXHJcbiAgICBcclxuLmNlbnRydTF7XHJcbiAgXHJcbiAgXHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAudGl0bHUxe1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCA7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG59ICBcclxuXHJcbi5zdGFuZ2Exe1xyXG4gIG1pbi13aWR0aDogNTB2dztcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgXHJcbiAgcGFkZGluZzowIDI1cHg7XHJcblxyXG5cclxuICBoNHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIG1hcmdpbjoyMHB4IDBweCAxMHB4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW46MjBweCAwcHggMTBweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRyZWFwdGExe1xyXG4gIHBhZGRpbmctbGVmdDogIDEyNXB4O1xyXG4gIG1pbi13aWR0aDogNTB2dztcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIFxyXG4gIGltZ3tcclxuICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG59ICAgXHJcblxyXG4gIFxyXG4uY2FyZGRpdntcclxuICBtaW4td2lkdGg6IDI1dnc7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4IDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIFxyXG4gIFxyXG4gIC5jYXJke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBcclxuICAgIFxyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbn0gICAgXHJcbiAgIFxyXG4gXHJcblxyXG4uY2FyZHtcclxuIFxyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0ZXtcclxuICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAgMTBweCA4MHB4IDEwcHggMTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhICAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6ICAyNzZweCkgeyBcclxuICAgIFxyXG59XHJcbkBtZWRpYSAgKG1pbi13aWR0aDogMjc2cHgpIGFuZCAobWF4LXdpZHRoOiAzNzUuOThweCkgeyBcclxuIC5jYXJkZGl2e1xyXG4gICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbiB9XHJcblxyXG4gLmNhcmQtaW1nLXRvcHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxufVxyXG4gXHJcblxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDM3NnB4KSBhbmQgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcbiAgLmNhcmRkaXZ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgIFxyXG4gXHJcbiBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCA5OTIpXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7ICBcclxuIFxyXG5cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7ICBcclxuXHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICBcclxuXHJcblxyXG4gfVxyXG4gXHJcblxyXG5cclxuYVtocmVmXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmFbaHJlZl0sIGFbaHJlZl06bGluaywgYVtocmVmXTp2aXNpdGVkLCBhW2hyZWZdOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIC8vIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDcwYzExO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuYVtocmVmXTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB0cmFuc2l0aW9uOiAwLjM1cyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC41LCAxLjAzKTtcclxufVxyXG5hW2hyZWZdOmhvdmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuIl19 */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class InterneComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterneComponent.ɵfac = function InterneComponent_Factory(t) { return new (t || InterneComponent)(); };
InterneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterneComponent, selectors: [["app-interne"]], decls: 85, vars: 0, consts: [[1, "intro"], [1, "text-center"], [1, "tabbable"], [1, "nav", "nav-tabs"], ["routerLink", "/home"], [1, "active"], ["href", "#tab1", "data-toggle", "tab"], ["href", "#tab2", "data-toggle", "tab"], ["href", "#tab3", "data-toggle", "tab"], [1, "tab-content"], ["id", "tab1", 1, "tab-pane", "active"], [1, "container1"], [1, "row"], [1, "col-md-6", "col-xs12", "col-xl-12"], ["src", "/assets/pics/body.gif", "alt", "", 1, "img-fluid"], ["id", "tab2", 1, "tab-pane"], ["id", "tab3", 1, "tab-pane"], ["href", "#tab31", "data-toggle", "tab"], ["href", "#tab32", "data-toggle", "tab"], ["href", "#tab33", "data-toggle", "tab"], ["href", "#tab34", "data-toggle", "tab"], ["id", "tab31", 1, "tab-pane", "active"], [1, "container2"], ["src", "/assets/pics/EKG.jpg", "alt", "", 1, "img-fluid"], ["id", "tab32", 1, "tab-pane"], ["src", "/assets/pics/ECO.jpg", "alt", "", 1, "img-fluid"], ["id", "tab33", 1, "tab-pane"], ["src", "/assets/pics/echo.jpg", "alt", "", 1, "img-fluid"], ["id", "tab34", 1, "tab-pane"], ["src", "/assets/pics/radiologie.jpg", "alt", "", 1, "img-fluid"]], template: function InterneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inapoi la servicii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ce este medicina interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ce boli trateaza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aparatura folosita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Medicina interna este ramura si specialitatea medicala care se ocupa cu prevenirea, diagnosticul si tratamentul nechirurgical al afectiunilor, in special cele ale organelor interne. Specialitatea medicina interna se adreseaza adultilor. Prin medicina interna se furnizeza pacientilor si servicii de preventie a bolii si de promovare a sanatatii, contribuind la medicina preventiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Specialistii de medicina interna (care se numesc si \"internisti\") au competenta de a rezolva probleme de diagnostic complex si de a monitoriza boli cronice severe si conditii de polipatologie. Specialistii de medicina interna diagnosticheaza si trateaza adultii cu afectiuni respiratorii, cardiace, digestive, renale, osteoarticulare. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "EKG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Eco-Doppler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ECO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Imagistica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Edan SE-1200 Express Basic este un electrocardiograf cu 12 canale si achizitie simultana pe 12 canale, avand performante clinice precise si cu un design usor de utilizat. Este echipat cu o tastatura alfanumerica complexa, precum si cu o operare practica printr-o singura atingere, cu comenzi rapide pentru varsta si gen. Dispune de un ecran LCD color de 8 inch pentru examinarea optima a rezultatelor. Ecranul are functie de hibernare pentru a prelungi durata de viata a LCD-ului, precum si pentru a economisi energia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Ecografia Doppler reprezint\u0103 o metoda de investigarea a vaselor mari de la nivelul g\u00E2tului \u0219i capului care ne d\u0103 informa\u021Bii precise despre gradul de afectare al acestora, dar av\u00E2nd \u00EEn vedere c\u0103 boala vasculara este o afec\u021Biune sistemic\u0103 (\u00EEn tot corpul) ne d\u0103 informa\u021Bii \u0219i despre statusul vascular al pacientului. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " O ecografie abdominala este una din investigatiile de imagistica pe care medicul specialist le recomanda pentru a putea stabili diagnosticul in cazul unui pacient cu probleme gastroenterologice si nu numai. Ecografia abdominala este o investigatie imagistica bazata pe ultrasunete prin care se pot examina organele, vasele si tesuturile intraabdominale. Ecografia abdominala este o metoda rapida de diagnostic, neiradianta, care se poate repeta ori de cate ori este nevoie si nu este dureroasa. Dispozitivul care se aplica pe corpul pacientului numit sonda, emite ultrasunete catre organele si tesuturile intraabdominale si apoi recepteaza undele reflectate si le transmite ecografului. Imaginile obtinute sunt in nuante de gri, alb si negru. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Tehnologia aparatelor de ecografie a evoluat mult, existand in prezent soft-uri prin care se poate calcula elasticitatea organelor sau tesuturilor examinate, tehnica denumita elastografie. Elastografia masoara gradul de fibroza sau duritate al organelor sau tumorilor, fiind utila in aprecierea stadiului bolii si a riscului de dezvoltare a complicatiilor. Astfel, o fibroza avansata la nivelul ficatului inseamna ciroza. De asemenea atunci cand descoperim noduli cu diferite localizari utilizarea elastografiei ne poate orienta catre diagnosticul de nodul benign sau malign; de obicei nodulii \u201Cduri\u201D la elastografie sunt mai probabil maligni. O alta tehnologie avansata de care pot beneficia anumite aparate de ecografie este softul de contrast. Ecografia cu contrast foloseste un gaz inert care formeaza milioane de microbule; acestea se injecteaza intravenos si permit obtinerea unei imagini a unui organ sau a unui nodul bazata pe semnalul din vase. Dupa administrarea acestei substante de contrast ea se elimina prin respiratie in aproximativ 15 minute. Daca in urma unei ecografii de rutina se depisteaza un nodul hepatic de obicei indrumam pacientul catre o examinare imagistica superioara prin rezonanta magnetica sau tomografie computerizata cu substanta de contrast. Astfel, se poate caracteriza nodulul respectiv ca fiind o leziune benigna, inofensiva, sau o leziune maligna, adica de origine canceroasa. Ecografia cu substanta de contrast poate oferi aceste informatii in timpul aceleiasi investigatii, ulterior putand veni in completare o evaluare RMN sau CT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Ecografia Doppler reprezint\u0103 o metoda de investigarea a vaselor mari de la nivelul g\u00E2tului \u0219i capului care ne d\u0103 informa\u021Bii precise despre gradul de afectare al acestora, dar av\u00E2nd \u00EEn vedere c\u0103 boala vasculara este o afec\u021Biune sistemic\u0103 (\u00EEn tot corpul) ne d\u0103 informa\u021Bii \u0219i despre statusul vascular al pacientului. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".intro[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/bk1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #1789fa, 0.5;\n  color: white;\n  background-position: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.container1[_ngcontent-%COMP%] {\n  padding: 100px;\n  min-width: 70vw;\n  min-height: 90vh;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.container1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nli[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.247);\n  border-color: 3px solid blue;\n  border-radius: 35px;\n  margin: 0px 20px;\n  padding: 0px 15px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n}\n\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .nav[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 25vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #subcat[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRlcm5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFBTjs7QUFDTTtFQUNJLGtCQUFBO0FBQ1Y7O0FBSUU7RUFFRSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFRRTtFQUVFLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOUjs7QUFZQTtFQUNFO0lBRUUsTUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBVkY7O0VBYUE7SUFDRSxNQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFWRjtBQUNGIiwiZmlsZSI6ImludGVybmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm97XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvYmsxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMzcsIDI1MCksLjU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3OyAgXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyMXtcclxuICAgIFxyXG4gICAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgICAgbWluLXdpZHRoOiA3MHZ3O1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjIpO1xyXG4gICAgICBoMntcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5uYXZ7XHJcbiAgICBcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBsaXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0Nyk7XHJcbiAgICBib3JkZXItY29sb3I6IDNweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuXHJcbiAgICBheyAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhICAobWluLXdpZHRoOiAyNzZweCkgYW5kIChtYXgtd2lkdGg6IDM3NS45OHB4KSB7IFxyXG4gIC5uYXZ7XHJcbiAgICBcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gICNzdWJjYXR7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgIl19 */"] });
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