"use strict";
(self["webpackChunkweb_library"] = self["webpackChunkweb_library"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/homepage.component */ 5274);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 600);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 2172);
/* harmony import */ var _book_details_page_book_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-details-page/book-details-page.component */ 9332);
/* harmony import */ var _category_page_category_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-page/category-page.component */ 1412);
/* harmony import */ var _book_upload_page_book_upload_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-upload-page/book-upload-page.component */ 9020);
/* harmony import */ var _book_update_page_book_update_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-update-page/book-update-page.component */ 8720);
/* harmony import */ var _pdf_reader_pdf_reader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pdf-reader/pdf-reader.component */ 4918);
/* harmony import */ var _auth_anonymous_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/anonymous.guard */ 9339);
/* harmony import */ var _auth_auth_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.resolver */ 2787);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ 8444);
/* harmony import */ var _google_callback_google_callback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./google-callback/google-callback.component */ 4024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
















const routes = [{
  path: 'home',
  component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent,
  title: 'Home - WebLibrary'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  canActivate: [_auth_anonymous_guard__WEBPACK_IMPORTED_MODULE_9__.AnonymousGuard],
  resolve: {
    authCheck: _auth_auth_resolver__WEBPACK_IMPORTED_MODULE_10__.AuthResolver
  }
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
  canActivate: [_auth_anonymous_guard__WEBPACK_IMPORTED_MODULE_9__.AnonymousGuard],
  resolve: {
    authCheck: _auth_auth_resolver__WEBPACK_IMPORTED_MODULE_10__.AuthResolver
  }
}, {
  path: 'profile/:userId',
  component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__.ProfilePageComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard]
}, {
  path: 'book/:id',
  component: _book_details_page_book_details_page_component__WEBPACK_IMPORTED_MODULE_4__.BookDetailsPageComponent,
  title: 'Book Details'
}, {
  path: 'categories',
  component: _category_page_category_page_component__WEBPACK_IMPORTED_MODULE_5__.CategoryPageComponent,
  title: 'Categories'
}, {
  path: 'upload',
  component: _book_upload_page_book_upload_page_component__WEBPACK_IMPORTED_MODULE_6__.BookUploadPageComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard]
}, {
  path: 'edit/:id',
  component: _book_update_page_book_update_page_component__WEBPACK_IMPORTED_MODULE_7__.BookUpdatePageComponent
}, {
  path: 'read/:id',
  component: _pdf_reader_pdf_reader_component__WEBPACK_IMPORTED_MODULE_8__.PdfReaderComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard]
}, {
  path: 'auth/google-callback',
  component: _google_callback_google_callback_component__WEBPACK_IMPORTED_MODULE_12__.GoogleCallbackComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent),
/* harmony export */   browserRefresh: () => (/* binding */ browserRefresh)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 5498);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2152);





let browserRefresh = false;
class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'web-library';
    this.subscription = router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }
  ngOnInit() {
    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {}
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "lib-header")(2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      styles: ["@font-face {\n    font-family: roboto;\n    src: url('Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: robotoMedium;\n    src: url('Roboto-Medium.ttf');\n}\n\n@font-face {\n    font-family: titleFont;\n    src: url('Recoleta-RegularDEMO.otf');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQStDO0FBQ25EOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE4QztBQUNsRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBcUQ7QUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvTWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvUmVjb2xldGEtUmVndWxhckRFTU8ub3RmJyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 600);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-list/book-list.component */ 3496);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book/book.component */ 5896);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/filters.component */ 8136);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ 5274);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 2172);
/* harmony import */ var _infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infinite-scroll.directive */ 107);
/* harmony import */ var _book_details_page_book_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-details-page/book-details-page.component */ 9332);
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-details/book-details.component */ 9070);
/* harmony import */ var _book_scroll_book_scroll_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-scroll/book-scroll.component */ 2552);
/* harmony import */ var _category_page_category_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category-page/category-page.component */ 1412);
/* harmony import */ var _book_upload_page_book_upload_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book-upload-page/book-upload-page.component */ 9020);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 1653);
/* harmony import */ var _example_pdf_viewer_example_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./example-pdf-viewer/example-pdf-viewer.component */ 2998);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ 7560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _book_update_page_book_update_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book-update-page/book-update-page.component */ 8720);
/* harmony import */ var _pdf_reader_pdf_reader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pdf-reader/pdf-reader.component */ 4918);
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-bar/search-bar.component */ 274);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.interceptor */ 1050);
/* harmony import */ var _social_callback_social_callback_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./social-callback/social-callback.component */ 8492);
/* harmony import */ var _google_callback_google_callback_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./google-callback/google-callback.component */ 4024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 7580);
































class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.NgxExtendedPdfViewerModule, _example_pdf_viewer_example_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_17__.ExamplePdfViewerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _pdf_reader_pdf_reader_component__WEBPACK_IMPORTED_MODULE_20__.PdfReaderComponent]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_6__.BookListComponent, _book_book_component__WEBPACK_IMPORTED_MODULE_7__.BookComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__.FiltersComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__.HomepageComponent, _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_10__.ProfilePageComponent, _infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_11__.InfiniteScrollDirective, _book_details_page_book_details_page_component__WEBPACK_IMPORTED_MODULE_12__.BookDetailsPageComponent, _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_13__.BookDetailsComponent, _book_scroll_book_scroll_component__WEBPACK_IMPORTED_MODULE_14__.BookScrollComponent, _category_page_category_page_component__WEBPACK_IMPORTED_MODULE_15__.CategoryPageComponent, _book_upload_page_book_upload_page_component__WEBPACK_IMPORTED_MODULE_16__.BookUploadPageComponent, _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmationDialogComponent, _book_update_page_book_update_page_component__WEBPACK_IMPORTED_MODULE_19__.BookUpdatePageComponent, _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__.SearchBarComponent, _social_callback_social_callback_component__WEBPACK_IMPORTED_MODULE_23__.SocialCallbackComponent, _google_callback_google_callback_component__WEBPACK_IMPORTED_MODULE_24__.GoogleCallbackComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.NgxExtendedPdfViewerModule, _example_pdf_viewer_example_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_17__.ExamplePdfViewerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _pdf_reader_pdf_reader_component__WEBPACK_IMPORTED_MODULE_20__.PdfReaderComponent]
  });
})();

/***/ }),

/***/ 9339:
/*!*****************************************!*\
  !*** ./src/app/auth/anonymous.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousGuard: () => (/* binding */ AnonymousGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AnonymousGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthCheckComplete.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => {
      if (this.authService.isUserAuthenticated) {
        console.log('not authorized!');
        this.router.navigate(['/home']);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
      }
      console.log('Authorized');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }));
  }
  static {
    this.ɵfac = function AnonymousGuard_Factory(t) {
      return new (t || AnonymousGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AnonymousGuard,
      factory: AnonymousGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8444:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthCheckComplete.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
      if (!this.authService.isUserAuthenticated) {
        console.log('auth guard triggered!');
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1050:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AuthInterceptor {
  intercept(request, next) {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}


/***/ }),

/***/ 2787:
/*!***************************************!*\
  !*** ./src/app/auth/auth.resolver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthResolver: () => (/* binding */ AuthResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 5498);



class AuthResolver {
  constructor(authService) {
    this.authService = authService;
  }
  resolve() {
    return this.authService.isAuthCheckComplete.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => undefined));
  }
  static {
    this.ɵfac = function AuthResolver_Factory(t) {
      return new (t || AuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthResolver,
      factory: AuthResolver.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 5498:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthService {
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.authCheckedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.authChecked$ = this.authCheckedSubject.asObservable();
    this.userIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.userId$ = this.userIdSubject.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
    this.initializeAuthState();
  }
  get userId() {
    return this.userIdSubject.value;
  }
  get isUserAuthenticated() {
    return !!this.currentUserSubject.value;
  }
  get isAuthCheckComplete() {
    return this.authChecked$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(checked => checked), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }
  login(credentials) {
    if (this.isUserAuthenticated) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => 'Already logged in!');
    }
    return this.http.post('api/auth/login', credentials, {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.initializeAuthState()));
  }
  logout() {
    return this.http.post('api/auth/logout', {}, {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      this.currentUserSubject.next(null);
      this.router.navigate(['/login']);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Logout failed: ', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  register(user) {
    if (this.isUserAuthenticated) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => 'Already logged in!');
    }
    return this.http.post('api/auth/register', user);
  }
  loginWithGoogle() {
    window.location.href = 'https://localhost:7242/api/auth/external-login?provider=Google';
  }
  handleSocialCallback() {
    return this.http.get('api/auth/userinfo', {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(user => {
      this.currentUserSubject.next(user);
      this.router.navigate(['/home']);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => true), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false)));
  }
  initializeAuthState() {
    this.http.get('api/auth/userinfo', {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.authCheckedSubject.next(true))).subscribe({
      next: user => this.currentUserSubject.next(user),
      error: () => this.currentUserSubject.next(null)
    });
    this.initializeUserId();
  }
  initializeUserId() {
    this.currentUser$.subscribe(user => {
      const userId = user?.id || null;
      this.userIdSubject.next(userId);
    });
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 9332:
/*!******************************************************************!*\
  !*** ./src/app/book-details-page/book-details-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookDetailsPageComponent: () => (/* binding */ BookDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-details/book-details.component */ 9070);
/* harmony import */ var _book_scroll_book_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-scroll/book-scroll.component */ 2552);





class BookDetailsPageComponent {
  constructor(route, bookService) {
    this.route = route;
    this.bookService = bookService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) {
        this.fetchBook(Number(bookId));
        setTimeout(() => {
          this.bookService.getSimilarBooks(this.book).subscribe(response => {
            this.similarBooks = response;
          });
        }, 500);
      }
    });
  }
  fetchBook(bookId) {
    this.bookService.getBookById(bookId).subscribe({
      next: result => {
        this.book = result;
      },
      error: error => {
        console.error('Error fetching book details: ', error);
      }
    });
  }
  static {
    this.ɵfac = function BookDetailsPageComponent_Factory(t) {
      return new (t || BookDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BookDetailsPageComponent,
      selectors: [["lib-book-details-page"]],
      decls: 8,
      vars: 2,
      consts: [[1, "center"], ["id", "book-details", 3, "book"], [1, "more-info-container"], [1, "more-info"], [1, "book-list", 3, "books"]],
      template: function BookDetailsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "lib-book-details", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "div", 2)(4, "div", 3)(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "More like this");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "lib-book-scroll", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("book", ctx.book);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("books", ctx.similarBooks);
        }
      },
      dependencies: [_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_1__.BookDetailsComponent, _book_scroll_book_scroll_component__WEBPACK_IMPORTED_MODULE_2__.BookScrollComponent],
      styles: ["#book-details[_ngcontent-%COMP%] {\n    font-family: roboto;\n}\n\n.more-info-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.more-info[_ngcontent-%COMP%] {\n    background-color: #FFE7B1;\n    width: 100%;\n    font-family: roboto;\n    display: inline-block;\n}\n\n.more-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay1kZXRhaWxzLXBhZ2UvYm9vay1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIiNib29rLWRldGFpbHMge1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuLm1vcmUtaW5mby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb3JlLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTdCMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1vcmUtaW5mbyBoMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 9070:
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookDetailsComponent: () => (/* binding */ BookDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 7560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);








function BookDetailsComponent_div_0_div_6_div_1_button_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add to wishlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BookDetailsComponent_div_0_div_6_div_1_button_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Remove from wishlist ");
  }
}
function BookDetailsComponent_div_0_div_6_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookDetailsComponent_div_0_div_6_div_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.addOrRemoveFromWishlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookDetailsComponent_div_0_div_6_div_1_button_1_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BookDetailsComponent_div_0_div_6_div_1_button_1_ng_template_2_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r6.wishlistButtonId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.isBookInWishlist)("ngIfElse", _r8);
  }
}
function BookDetailsComponent_div_0_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookDetailsComponent_div_0_div_6_div_1_button_1_Template, 4, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.book.userId !== ctx_r2.authService.userId);
  }
}
function BookDetailsComponent_div_0_div_6_button_2_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mark as read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BookDetailsComponent_div_0_div_6_button_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Unmark as read ");
  }
}
function BookDetailsComponent_div_0_div_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookDetailsComponent_div_0_div_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.markOrUnmarkAsRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookDetailsComponent_div_0_div_6_button_2_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BookDetailsComponent_div_0_div_6_button_2_ng_template_2_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r3.markAsReadButtonId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.isBookMarkedAsRead)("ngIfElse", _r13);
  }
}
function BookDetailsComponent_div_0_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookDetailsComponent_div_0_div_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.editBook());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit book details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BookDetailsComponent_div_0_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookDetailsComponent_div_0_div_6_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.confirmDeletion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BookDetailsComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookDetailsComponent_div_0_div_6_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BookDetailsComponent_div_0_div_6_button_2_Template, 4, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BookDetailsComponent_div_0_div_6_button_3_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BookDetailsComponent_div_0_div_6_button_4_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isBookMarkedAsRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.book.userId !== ctx_r1.authService.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.book.userId === ctx_r1.authService.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.book.userId === ctx_r1.authService.userId);
  }
}
function BookDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5)(4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookDetailsComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.readBook());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BookDetailsComponent_div_0_div_6_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "span", 11)(15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 11)(20, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Publisher");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 11)(25, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Publish Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 11)(30, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.book.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showUserActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.publisher);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getYearOfDate(ctx_r0.book.publishDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.genre);
  }
}
class BookDetailsComponent {
  constructor(bookService, authService, dialog, router) {
    this.bookService = bookService;
    this.authService = authService;
    this.dialog = dialog;
    this.router = router;
    this.isBookInWishlist = false;
    this.isBookMarkedAsRead = false;
    this.isLoading = true;
    this.showUserActions = false;
    this.wishlistButtonId = "";
    this.markAsReadButtonId = "";
  }
  ngOnInit() {
    setTimeout(() => {
      this.checkIfBookIsInWishlist();
      this.checkIfBookIsMarkedAsRead();
      this.isLoading = false;
    }, 500);
    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {
        this.showUserActions = true;
      } else {
        this.showUserActions = false;
      }
    });
  }
  readBook() {
    this.router.navigate(['/read', this.book.id]);
  }
  getYearOfDate(date) {
    const publishDate = date;
    return new Date(publishDate).getFullYear();
  }
  checkIfBookIsInWishlist() {
    this.bookService.isBookInWishlist(this.authService.userId, this.book.id).subscribe({
      next: response => {
        if (response.status === 200) {
          this.isBookInWishlist = true;
          this.wishlistButtonId = 'delete';
        } else if (response.status === 204) {
          this.isBookInWishlist = false;
          this.wishlistButtonId = 'normal-button';
        }
      }
    });
  }
  checkIfBookIsMarkedAsRead() {
    this.bookService.isBookMarkedAsRead(this.authService.userId, this.book.id).subscribe({
      next: response => {
        if (response.status === 200) {
          this.isBookMarkedAsRead = true;
          this.markAsReadButtonId = 'delete';
        } else if (response.status === 204) {
          this.isBookMarkedAsRead = false;
          this.markAsReadButtonId = 'normal-button';
        }
      }
    });
  }
  addOrRemoveFromWishlist() {
    if (!this.isBookInWishlist) {
      const wishlist = {};
      wishlist.Books = new Array();
      wishlist.Books.push(this.book);
      this.bookService.addBookToWishlist(this.authService.userId, wishlist).subscribe(event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          this.isBookInWishlist = true;
          this.wishlistButtonId = "delete";
        }
      }, error => console.error('Error adding to wishlist: ', error));
    } else {
      this.bookService.removeBookFromWishlist(this.authService.userId, this.book.id).subscribe(event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          this.isBookInWishlist = false;
          this.wishlistButtonId = "normal-button";
        }
      }, error => console.error('Error removing from wishlist: ', error));
    }
  }
  markOrUnmarkAsRead() {
    if (!this.isBookMarkedAsRead) {
      const readBooks = {};
      readBooks.Books = new Array();
      readBooks.Books.push(this.book);
      this.bookService.markBookAsRead(this.authService.userId, readBooks).subscribe(event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          this.isBookMarkedAsRead = true;
          this.markAsReadButtonId = 'delete';
        }
      }, error => console.error('Error marking book as read: ', error));
    } else {
      this.bookService.unmarkBookAsRead(this.authService.userId, this.book.id).subscribe(event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          this.isBookMarkedAsRead = false;
          this.markAsReadButtonId = 'normal-button';
        }
      }, error => console.error('Error unmarking book as read: ', error));
    }
  }
  confirmDeletion() {
    const dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBook();
      }
    });
  }
  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe({
      next: () => {
        console.log('Book removed from library');
        this.router.navigate(['/profile']);
      },
      error: err => {
        console.error('An error appeared while removing book', err);
      }
    });
  }
  editBook() {
    this.router.navigate(['/edit', this.book.id]);
  }
  static {
    this.ɵfac = function BookDetailsComponent_Factory(t) {
      return new (t || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_1__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BookDetailsComponent,
      selectors: [["lib-book-details"]],
      inputs: {
        book: "book"
      },
      decls: 6,
      vars: 1,
      consts: [["class", "book-container", 4, "ngIf"], [1, "more-info"], [1, "book-container"], [1, "book-cover"], [3, "src", "alt"], [1, "book-actions"], ["id", "read", 3, "click"], [4, "ngIf"], [1, "book-description"], [1, "book-details"], [1, "center-info"], [1, "detail-item"], [1, "detail-label"], [1, "detail-type"], ["class", "wishlist", 4, "ngIf"], [3, "id", "click", 4, "ngIf"], ["id", "normal-button", 3, "click", 4, "ngIf"], ["id", "delete", 3, "click", 4, "ngIf"], [1, "wishlist"], [3, "id", "click"], [4, "ngIf", "ngIfElse"], ["remove", ""], ["id", "normal-button", 3, "click"], ["id", "delete", 3, "click"]],
      template: function BookDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BookDetailsComponent_div_0_Template, 34, 9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "More about the author");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\"book.authorDetails\" James Oliver Rigney Jr.\u00A0(October 17, 1948 \u2013 September 16, 2007), better known by his pen name\u00A0Robert Jordan,\u00A0was an American author of\u00A0epic fantasy. He is known best for his series\u00A0The Wheel of Time\u00A0(finished using Jordan\u2019s notes by\u00A0Brandon Sanderson\u00A0after Jordan's death) which comprises 14 books and a\u00A0prequel novel. He is one of several writers to have written original\u00A0Conan the Barbarian\u00A0novels.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: [".book-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    margin: 20px 20px 20px 0px;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    margin-right: 20px;\n}\n\n.book-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border: 1.25px solid;\n    border-radius: 3.5px;\n    width: 135px;\n    height: 200px;\n}\n\n.book-actions[_ngcontent-%COMP%] {\n    display: block;\n    width: 135px;\n}\n\n#read[_ngcontent-%COMP%] {\n    background-color: #D7F583;\n}\n\n#read[_ngcontent-%COMP%]:hover {\n    background-color: #CDEB7E;\n}\n\n#normal-button[_ngcontent-%COMP%] {\n    background-color: #B5B682;\n}\n\n#normal-button[_ngcontent-%COMP%]:hover {\n    background-color: #A9AA7A;\n}\n\n#delete[_ngcontent-%COMP%] {\n    background-color: #DD6358;\n}\n\n#delete[_ngcontent-%COMP%]:hover {\n    background-color: #C1564D;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.book-description[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.center-info[_ngcontent-%COMP%] {\n   margin: 0 auto;\n}\n\n.book-details[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #fff9e6;\n    border-radius: 5px;\n    justify-content: center;\n    text-align: center;\n    margin-right: 40px;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n.detail-type[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.8em;\n    color: #666;\n    border-top: .5px solid #ddd;\n    padding-top: 5px;\n}\n\n.book-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: #FFE7B1;\n    padding: 5px 10px;\n    border-radius: 3px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    padding: 10px;\n    background-color: #d4edda;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.more-info[_ngcontent-%COMP%] {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7R0FDRyxjQUFjO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDBweDtcclxufVxyXG5cclxuLmJvb2stY292ZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYm9vay1jb3ZlciBpbWcge1xyXG4gICAgYm9yZGVyOiAxLjI1cHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzLjVweDtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5ib29rLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbn1cclxuXHJcbiNyZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEN0Y1ODM7XHJcbn1cclxuXHJcbiNyZWFkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREVCN0U7XHJcbn1cclxuXHJcbiNub3JtYWwtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNUI2ODI7XHJcbn1cclxuXHJcbiNub3JtYWwtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOUFBN0E7XHJcbn1cclxuXHJcbiNkZWxldGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENjM1ODtcclxufVxyXG5cclxuI2RlbGV0ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzE1NjREO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJvb2stZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNlbnRlci1pbmZvIHtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5ib29rLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLmRldGFpbC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY5ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuLmRldGFpbC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXR5cGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBib3JkZXItdG9wOiAuNXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYm9vay1kZXRhaWxzIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTdCMTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb3JlLWluZm8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 3496:
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookListComponent: () => (/* binding */ BookListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book/book.component */ 5896);
/* harmony import */ var _infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infinite-scroll.directive */ 107);





function BookListComponent_lib_book_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "lib-book", 2);
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("book", book_r1);
  }
}
class BookListComponent {
  constructor(bookService) {
    this.bookService = bookService;
    this.books = [];
    this.currentPage = 1;
    this.isLoading = false;
    this.hasMore = true;
  }
  ngOnInit() {
    this.loadMore();
  }
  ngOnChanges(changes) {
    if (changes['loadBooksFn']) {
      this.resetLoadedBooks();
      this.loadMore();
    }
  }
  loadMore() {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;
    this.loadBooksFn(this.currentPage).subscribe({
      next: newBooks => {
        this.handleNewBooks(newBooks);
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  handleNewBooks(newBooks) {
    if (!this.hasMore) return;
    this.books = [...this.books, ...newBooks];
    this.currentPage++;
    this.hasMore = newBooks.length > 0;
    this.isLoading = false;
    setTimeout(() => this.checkAutoLoad(), 0);
  }
  checkAutoLoad() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (documentHeight <= windowHeight && this.hasMore && !this.isLoading) {
      this.loadMore();
    }
  }
  // private loadNextBooks(newBooks: IBookModel[]): void {
  //   if (!this.hasMore) return;
  //   this.books = [...this.books, ...newBooks];
  //   this.currentPage++;
  //   this.hasMore = newBooks.length > 0;
  //   this.isLoading = false;
  //   // Load more if the page isn't scrollable
  //   setTimeout(() => this.checkAutoLoad(), 0);
  // }
  resetLoadedBooks() {
    this.books = [];
    this.currentPage = 1;
    this.hasMore = true;
    this.isLoading = false;
  }
  static {
    this.ɵfac = function BookListComponent_Factory(t) {
      return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BookListComponent,
      selectors: [["lib-book-list"]],
      inputs: {
        similarBooks: "similarBooks",
        loadBooksFn: "loadBooksFn"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 1,
      consts: [["libInfiniteScroll", "", 1, "book-list-container", 3, "scrolled"], [3, "book", 4, "ngFor", "ngForOf"], [3, "book"]],
      template: function BookListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function BookListComponent_Template_div_scrolled_0_listener() {
            return ctx.loadMore();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookListComponent_lib_book_1_Template, 1, 1, "lib-book", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.books);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _book_book_component__WEBPACK_IMPORTED_MODULE_1__.BookComponent, _infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective],
      styles: [".book-list-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: start;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stbGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 2552:
/*!******************************************************!*\
  !*** ./src/app/book-scroll/book-scroll.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookScrollComponent: () => (/* binding */ BookScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.component */ 5896);




const _c0 = ["scrollContent"];
function BookScrollComponent_lib_book_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "lib-book", 6);
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("book", book_r2);
  }
}
class BookScrollComponent {
  constructor(route, cdRef) {
    this.route = route;
    this.cdRef = cdRef;
    this.canScrollLeft = false;
    this.canScrollRight = false;
  }
  ngAfterViewInit() {
    this.route.paramMap.subscribe(() => {
      this.resetScroll();
    });
    setTimeout(() => {
      this.checkScroll();
      const resizeObserver = new ResizeObserver(() => this.checkScroll());
      resizeObserver.observe(this.scrollContent.nativeElement);
    }, 0);
  }
  checkScroll() {
    const el = this.scrollContent.nativeElement;
    const tolerance = 1;
    this.canScrollLeft = el.scrollLeft > tolerance;
    this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance;
    this.cdRef.detectChanges();
  }
  onResize() {
    this.checkScroll();
  }
  scrollLeft() {
    this.scrollContent.nativeElement.scrollBy({
      left: -800,
      behavior: 'smooth'
    });
    setTimeout(() => this.checkScroll(), 400);
  }
  scrollRight() {
    this.scrollContent.nativeElement.scrollBy({
      left: 800,
      behavior: 'smooth'
    });
    setTimeout(() => this.checkScroll(), 400);
  }
  resetScroll() {
    if (this.scrollContent?.nativeElement) {
      this.scrollContent.nativeElement.scrollLeft = 0;
    }
  }
  static {
    this.ɵfac = function BookScrollComponent_Factory(t) {
      return new (t || BookScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BookScrollComponent,
      selectors: [["lib-book-scroll"]],
      viewQuery: function BookScrollComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollContent = _t.first);
        }
      },
      hostBindings: function BookScrollComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function BookScrollComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        books: "books"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "book-scroll-container"], [1, "arrow-button", "left", 3, "disabled", "click"], [1, "content-wrapper", 3, "scroll"], ["scrollContent", ""], [3, "book", 4, "ngFor", "ngForOf"], [1, "arrow-button", "right", 3, "disabled", "click"], [3, "book"]],
      template: function BookScrollComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookScrollComponent_Template_button_click_1_listener() {
            return ctx.scrollLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2190");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function BookScrollComponent_Template_div_scroll_3_listener() {
            return ctx.checkScroll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BookScrollComponent_lib_book_5_Template, 1, 1, "lib-book", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookScrollComponent_Template_button_click_6_listener() {
            return ctx.scrollRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.canScrollLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.canScrollRight);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _book_book_component__WEBPACK_IMPORTED_MODULE_0__.BookComponent],
      styles: [".book-scroll-container[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 100%;\n\n    display: block;\n    overflow: visible;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    padding: 15px 0;\n    gap: 20px;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    min-width: 100%;\n    box-sizing: border-box;\n    scrollbar-gutter: stable;\n}\n\n.content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n}\n\n.arrow-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background: rgba(0, 0, 0, 0.7);\n    color: white;\n    border: none;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    font-size: 1.2rem;\n    cursor: pointer;\n    transition: all 0.2s;\n    z-index: 2;\n}\n\n.arrow-button[_ngcontent-%COMP%]:disabled {\n    opacity: 0.0;\n    cursor: default;\n}\n\n\n\n\n\n\n\n.left[_ngcontent-%COMP%] {\n    left: -45px;\n}\n\n.right[_ngcontent-%COMP%] {\n    right: -45px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay1zY3JvbGwvYm9vay1zY3JvbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIscUJBQXFCOztJQUVyQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0dBR0c7O0FBRUg7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyogLmFycm93LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4xKTtcclxufSAqL1xyXG5cclxuLmxlZnQge1xyXG4gICAgbGVmdDogLTQ1cHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICByaWdodDogLTQ1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 8720:
/*!****************************************************************!*\
  !*** ./src/app/book-update-page/book-update-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookUpdatePageComponent: () => (/* binding */ BookUpdatePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function BookUpdatePageComponent_em_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_em_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_em_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Publisher is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_em_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Genre is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_em_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_em_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Publish Year is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookUpdatePageComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author info is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class BookUpdatePageComponent {
  constructor(formBuilder, route, bookService, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.bookService = bookService;
    this.router = router;
    this.submitted = false;
    this.title = "";
    this.editForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publishDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publishYear: [new Date().getFullYear(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      genre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      moreAboutAuthor: ['']
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadData(id);
      }
    });
  }
  loadData(id) {
    this.bookService.getBookById(id).subscribe({
      next: result => {
        this.title = result.title;
        const publishYear = new Date(result.publishDate).getFullYear();
        this.editForm.patchValue({
          ...result,
          publishYear: publishYear
        });
      },
      error: err => {
        console.error('Failed to fetch data: ', err);
      }
    });
  }
  onSubmit() {
    if (this.editForm.valid) {
      const rawData = this.editForm.value;
      const updatedData = {
        ...rawData,
        publishDate: new Date(rawData.publishYear, 1, 1)
      };
      this.bookService.updateBook(this.route.snapshot.params['id'], updatedData).subscribe({
        next: response => {
          this.router.navigate(['/book', response.id]);
        },
        error: err => {
          console.error('Update failed', err);
        },
        complete: () => {
          console.log('Book updated!');
        }
      });
    }
  }
  static {
    this.ɵfac = function BookUpdatePageComponent_Factory(t) {
      return new (t || BookUpdatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BookUpdatePageComponent,
      selectors: [["lib-book-update-page"]],
      decls: 41,
      vars: 9,
      consts: [[1, "center"], [1, "book-update-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "title"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "author"], ["type", "text", "formControlName", "publisher"], ["type", "text", "formControlName", "genre"], ["formControlName", "description"], ["type", "text", "formControlName", "publishYear", "min", "0", "max", "2025"], ["formControlName", "moreAboutAuthor"], ["type", "submit", 1, "submit-button"], [1, "error"]],
      template: function BookUpdatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BookUpdatePageComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookUpdatePageComponent_em_8_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BookUpdatePageComponent_em_13_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Publisher");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BookUpdatePageComponent_em_18_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Genre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BookUpdatePageComponent_em_23_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Book description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, BookUpdatePageComponent_em_28_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Publish Year");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BookUpdatePageComponent_em_33_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "More info about the author");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, BookUpdatePageComponent_div_38_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Update Book");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Update \"", ctx.title, "\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.editForm.get("title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.editForm.get("title")) == null ? null : tmp_2_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.editForm.get("author")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.editForm.get("author")) == null ? null : tmp_3_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.editForm.get("publisher")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.editForm.get("publisher")) == null ? null : tmp_4_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.editForm.get("genre")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.editForm.get("genre")) == null ? null : tmp_5_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.editForm.get("description")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.editForm.get("description")) == null ? null : tmp_6_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.editForm.get("publishDate")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.editForm.get("publishDate")) == null ? null : tmp_7_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.editForm.get("moreAboutAuthor")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.editForm.get("moreAboutAuthor")) == null ? null : tmp_8_0.touched) || ctx.submitted));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".book-update-form[_ngcontent-%COMP%] {\n    padding: 2rem;\n    font-family: roboto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.5rem;\n    border: 0.7px solid black;\n    border-radius: 5px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 150px;\n    resize: none;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n    background-color: #CDEB7E;\n    padding: 0.75rem 1.5rem;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n    background-color: #BED975;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 0.875rem;\n    margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay11cGRhdGUtcGFnZS9ib29rLXVwZGF0ZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLXVwZGF0ZS1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuN3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFQjdFO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRUQ5NzU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 9020:
/*!****************************************************************!*\
  !*** ./src/app/book-upload-page/book-upload-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookUploadPageComponent: () => (/* binding */ BookUploadPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);







function BookUploadPageComponent_em_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_em_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Author is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_em_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Publisher is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_em_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Genre is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_em_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_em_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "em", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Publish Year is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Author info is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Selected: ", ctx_r7.coverImageFile.name, " ");
  }
}
function BookUploadPageComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Cover image is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BookUploadPageComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Selected: ", ctx_r9.textFile.name, " ");
  }
}
function BookUploadPageComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PDF file is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class BookUploadPageComponent {
  constructor(formBuilder, bookService, authService, router) {
    this.formBuilder = formBuilder;
    this.bookService = bookService;
    this.authService = authService;
    this.router = router;
    this.coverImageFile = null;
    this.textFile = null;
    this.submitted = false;
    this.bookUploadData = {
      title: '',
      author: '',
      genre: '',
      publisher: '',
      publishDate: new Date(),
      moreAboutAuthor: '',
      description: ''
    };
    this.bookForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      publishDate: [''],
      publishYear: [new Date().getFullYear(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      genre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      moreAboutAuthor: ['']
    });
  }
  onCoverImageSelected(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.coverImageFile = file;
    }
  }
  onTextFileSelected(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.textFile = file;
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.bookForm.valid && this.coverImageFile && this.textFile) {
      const formData = new FormData();
      const userId = this.authService.userId ? this.authService.userId : '';
      formData.append('UploaderId', userId);
      formData.append('Title', this.bookForm.get('title')?.value);
      formData.append('Author', this.bookForm.get('author')?.value);
      formData.append('Publisher', this.bookForm.get('publisher')?.value);
      formData.append('Genre', this.bookForm.get('genre')?.value);
      formData.append('Description', this.bookForm.get('description')?.value);
      formData.append('PublishDate', new Date(this.bookForm.get('publishYear')?.value, 1, 1).toISOString());
      formData.append('MoreAboutAuthor', this.bookForm.get('moreAboutAuthor')?.value);
      formData.append('CoverImage', this.coverImageFile, this.bookForm.get('title')?.value.toLowerCase());
      formData.append('TextFile', this.textFile, this.bookForm.get('title')?.value.toLowerCase());
      console.log('Uploading book');
      this.bookService.uploadBook(formData).subscribe({
        next: response => {
          this.bookForm.reset();
          this.submitted = false;
          this.coverImageFile = null;
          this.textFile = null;
          console.log('redirecting to new book page');
          this.router.navigate(['/book', response.id]);
        },
        error: err => {
          console.error('Upload failed', err);
        },
        complete: () => {
          console.log('Book uploaded!');
        }
      });
    } else {
      this.bookForm.markAllAsTouched();
    }
  }
  static {
    this.ɵfac = function BookUploadPageComponent_Factory(t) {
      return new (t || BookUploadPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BookUploadPageComponent,
      selectors: [["lib-book-upload-page"]],
      decls: 54,
      vars: 12,
      consts: [[1, "center"], [1, "book-upload-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "title"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "author"], ["type", "text", "formControlName", "publisher"], ["type", "text", "formControlName", "genre"], ["formControlName", "description"], ["type", "text", "formControlName", "publishYear"], ["formControlName", "moreAboutAuthor"], [1, "file-upload-group"], [1, "file-upload"], ["type", "file", "accept", "image/*", 3, "change"], ["class", "file-info", 4, "ngIf"], ["type", "file", "accept", "application/pdf", 3, "change"], ["type", "submit", 1, "submit-button"], [1, "error"], [1, "file-info"]],
      template: function BookUploadPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BookUploadPageComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Upload new book");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BookUploadPageComponent_em_8_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookUploadPageComponent_em_13_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Publisher");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, BookUploadPageComponent_em_18_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Genre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BookUploadPageComponent_em_23_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2)(25, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Book description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "textarea", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BookUploadPageComponent_em_28_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 2)(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Publish Year");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, BookUploadPageComponent_em_33_Template, 2, 0, "em", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 2)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "More info about the author");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BookUploadPageComponent_div_38_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11)(40, "div", 12)(41, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Cover Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BookUploadPageComponent_Template_input_change_43_listener($event) {
            return ctx.onCoverImageSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, BookUploadPageComponent_div_44_Template, 2, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, BookUploadPageComponent_div_45_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 12)(47, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Text File (PDF)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BookUploadPageComponent_Template_input_change_49_listener($event) {
            return ctx.onTextFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, BookUploadPageComponent_div_50_Template, 2, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, BookUploadPageComponent_div_51_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Add Book");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.bookForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.bookForm.get("title")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.bookForm.get("title")) == null ? null : tmp_1_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.bookForm.get("author")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.bookForm.get("author")) == null ? null : tmp_2_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.bookForm.get("publisher")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.bookForm.get("publisher")) == null ? null : tmp_3_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.bookForm.get("genre")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.bookForm.get("genre")) == null ? null : tmp_4_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.bookForm.get("description")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.bookForm.get("description")) == null ? null : tmp_5_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.bookForm.get("publishYear")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.bookForm.get("publishYear")) == null ? null : tmp_6_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.bookForm.get("moreAboutAuthor")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.bookForm.get("moreAboutAuthor")) == null ? null : tmp_7_0.touched) || ctx.submitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.coverImageFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.coverImageFile && ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.textFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.textFile && ctx.submitted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".book-upload-form[_ngcontent-%COMP%] {\n    padding: 2rem;\n    font-family: roboto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.5rem;\n    border: 0.7px solid black;\n    border-radius: 5px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 150px;\n    resize: none;\n}\n\n.file-upload-group[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.file-upload[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.5rem;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n    background-color: #CDEB7E;\n    padding: 0.75rem 1.5rem;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n    background-color: #BED975;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 0.875rem;\n    margin-top: 0.25rem;\n}\n\n.file-info[_ngcontent-%COMP%] {\n    color: #28a745;\n    margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay11cGxvYWQtcGFnZS9ib29rLXVwbG9hZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay11cGxvYWQtZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjdweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZCBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERUI3RTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVEOTc1O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLmZpbGUtaW5mbyB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 5896:
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookComponent: () => (/* binding */ BookComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const _c0 = function (a1) {
  return ["/book", a1];
};
class BookComponent {
  static {
    this.ɵfac = function BookComponent_Factory(t) {
      return new (t || BookComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookComponent,
      selectors: [["lib-book"]],
      inputs: {
        book: "book"
      },
      decls: 5,
      vars: 6,
      consts: [[1, "book-card", 3, "routerLink"], [1, "cover"], [1, "book-cover", 3, "src", "alt"], [1, "book-title"]],
      template: function BookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.book.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.book.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".book-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    border: 2px solid rgba(0, 0, 0, 0.25);\n    border-radius: 3.5px;\n    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n    width: 150px;\n    height: 230px;\n    text-align: center;\n    padding: 10px;\n    background-color: #FFEAC1;\n    margin: 10px;\n    cursor: pointer;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    border: 1.25px solid black;\n    border-radius: 3.5px;\n    width: 150px;\n    height: 190px;\n}\n\n.book-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n    \n\n    \n\n    display: block;\n}\n\n.book-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding-top: 1px;\n    font-family: titleFont;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVBQzE7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib29rLWNvdmVyIHtcclxuICAgIGJvcmRlcjogMS4yNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMy41cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG59XHJcblxyXG4uYm9vay1jb3ZlciBpbWcge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC8qIGhlaWdodDogYXV0bzsgKi9cclxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ib29rLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xyXG59XHJcblxyXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5ib29rLWNvdmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcbiAgICAuYm9vay1jYXJkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgLmJvb2stY292ZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbn0gKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 2560:
/*!**************************************!*\
  !*** ./src/app/book/book.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookService: () => (/* binding */ BookService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class BookService {
  constructor(http) {
    this.http = http;
    this.userId = 2; // should add an UserService to handle the userId
  }

  getBookById(bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('bookId', bookId);
    return this.http.get('/api/book', {
      params
    });
  }
  getTopPopularBooks(pageNumber = 1) {
    let params = this.assignMainParams(pageNumber);
    return this.http.get('/api/book/top-popular', {
      params
    });
  }
  getBooksByUploader(uploaderId, pageNumber = 1) {
    let params = this.assignMainUserParams(uploaderId, pageNumber);
    return this.http.get('/api/book/uploader', {
      params
    });
  }
  getReadingHistoryOfUser(userId, pageNumber = 1) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('pageNumber', pageNumber.toString());
    return this.http.get('/api/reading-history', {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.books));
  }
  getUserWishlist(userId, pageNumber = 1) {
    let params = this.assignMainUserParams(userId, pageNumber);
    return this.http.get('/api/wishlist', {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.books));
  }
  getBooksMarkedAsReadByUser(userId, pageNumber = 1) {
    let params = this.assignMainUserParams(userId, pageNumber);
    return this.http.get('/api/read-books', {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.books));
  }
  getSimilarBooks(currentBook) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('id', currentBook.id.toString());
    return this.http.get('/api/book/similar-books', {
      params
    });
  }
  uploadBook(formData) {
    return this.http.post('/api/book', formData, {
      reportProgress: true,
      observe: 'body'
    });
  }
  updateBook(bookId, bookDto) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('bookId', bookId);
    return this.http.put('api/book', bookDto, {
      params
    });
  }
  addBookToReadingHistory(userId, readingHistoryDto) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '');
    return this.http.put('api/reading-history/read', readingHistoryDto, {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }
  addBookToWishlist(userId, wishlistDto) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '');
    return this.http.put('/api/wishlist/add-book', wishlistDto, {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }
  removeBookFromWishlist(userId, bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('bookId', bookId.toString());
    return this.http.put('/api/wishlist/remove-book', "", {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }
  isBookInWishlist(userId, bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('bookId', bookId.toString());
    return this.http.get('/api/wishlist/is-book-in-wishlist', {
      params,
      observe: 'response'
    });
  }
  markBookAsRead(userId, readBooksDto) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '');
    return this.http.put('api/read-books/add', readBooksDto, {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }
  unmarkBookAsRead(userId, bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('bookId', bookId.toString());
    return this.http.put('api/read-books/remove', "", {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }
  isBookMarkedAsRead(userId, bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('bookId', bookId.toString());
    return this.http.get('api/read-books/is-marked-as-read', {
      params,
      observe: 'response'
    });
  }
  deleteBook(bookId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('bookId', bookId.toString());
    return this.http.delete('api/book', {
      params
    });
  }
  searchBooks(searchQuery, filters, pageNumber) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('searchQuery', searchQuery).set('pageNumber', pageNumber.toString());
    return this.http.post('api/book/search', filters, {
      params
    });
  }
  assignMainUserParams(userId, pageNumber) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('userId', userId ? userId : '').set('pageNumber', pageNumber.toString());
  }
  assignMainParams(pageNumber) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('pageNumber', pageNumber.toString());
  }
  static {
    this.ɵfac = function BookService_Factory(t) {
      return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BookService,
      factory: BookService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1412:
/*!**********************************************************!*\
  !*** ./src/app/category-page/category-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPageComponent: () => (/* binding */ CategoryPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CategoryPageComponent {
  static {
    this.ɵfac = function CategoryPageComponent_Factory(t) {
      return new (t || CategoryPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryPageComponent,
      selectors: [["lib-category-page"]],
      decls: 0,
      vars: 0,
      template: function CategoryPageComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 7560:
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);



class ConfirmationDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  static {
    this.ɵfac = function ConfirmationDialogComponent_Factory(t) {
      return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationDialogComponent,
      selectors: [["lib-confirmation-dialog"]],
      decls: 7,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 1, "center", 3, "mat-dialog-close"], ["mat-button", "", 1, "center", 3, "mat-dialog-close"]],
      template: function ConfirmationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm book removal from library?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 2998:
/*!********************************************************************!*\
  !*** ./src/app/example-pdf-viewer/example-pdf-viewer.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplePdfViewerComponent: () => (/* binding */ ExamplePdfViewerComponent)
/* harmony export */ });
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 1653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class ExamplePdfViewerComponent {
  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
  */
  constructor(pdfService) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    // pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    // pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.
    this.pdfService = pdfService;
  }
  static {
    this.ɵfac = function ExamplePdfViewerComponent_Factory(t) {
      return new (t || ExamplePdfViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__.NgxExtendedPdfViewerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExamplePdfViewerComponent,
      selectors: [["lib-example-pdf-viewer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__.NgxExtendedPdfViewerService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "src"]],
      template: function ExamplePdfViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/pdfs/Bootstrap-vs-Material-Design-vs-Prime-vs-Tailwind.pdf");
        }
      },
      dependencies: [ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__.NgxExtendedPdfViewerModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__.NgxExtendedPdfViewerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}


/***/ }),

/***/ 8136:
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersComponent: () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function FiltersComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function FiltersComponent_div_1_div_3_Template_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.addFilter(category_r1.key, _r4.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_1_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.addFilter(category_r1.key, _r4.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FiltersComponent_div_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_1_div_4_div_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const value_r11 = restoredCtx.$implicit;
      const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.removeFilter(category_r1.key, value_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r11, " ");
  }
}
function FiltersComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FiltersComponent_div_1_div_4_div_1_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.selectedFilters.get(category_r1.key));
  }
}
function FiltersComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.toggleInput(category_r1.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FiltersComponent_div_1_div_3_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FiltersComponent_div_1_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.visibleInputs[category_r1.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visibleInputs[category_r1.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.selectedFilters.get(category_r1.key)) == null ? null : tmp_3_0.size);
  }
}
class FiltersComponent {
  constructor() {
    this.filtersChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.categories = [{
      key: 'author',
      label: 'Author'
    }, {
      key: 'publisher',
      label: 'Publisher'
    }, {
      key: 'genre',
      label: 'Genre'
    }, {
      key: 'language',
      label: 'Language'
    }];
    this.selectedFilters = new Map([['author', new Set()], ['publisher', new Set()], ['genre', new Set()], ['language', new Set()]]);
    this.visibleInputs = {
      author: false,
      publisher: false,
      genre: false,
      language: false
    };
  }
  toggleInput(category) {
    this.visibleInputs[category] = !this.visibleInputs[category];
  }
  addFilter(category, value) {
    const trimmedValue = value?.trim();
    if (!trimmedValue) return;
    this.selectedFilters.get(category)?.add(trimmedValue);
    this.visibleInputs[category] = false;
    this.emitFilters();
  }
  removeFilter(category, value) {
    this.selectedFilters.get(category)?.delete(value);
    this.emitFilters();
  }
  emitFilters() {
    this.filtersChanged.emit(new Map(this.selectedFilters));
  }
  static {
    this.ɵfac = function FiltersComponent_Factory(t) {
      return new (t || FiltersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FiltersComponent,
      selectors: [["lib-filters"]],
      outputs: {
        filtersChanged: "filtersChanged"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "filters-container"], ["class", "filter-category", 4, "ngFor", "ngForOf"], [1, "filter-category"], [1, "btn-toggle", 3, "click"], ["class", "filter-input", 4, "ngIf"], ["class", "selectedFilters", 4, "ngIf"], [1, "filter-input"], ["type", "text", 3, "keyup.enter"], ["newFilterInput", ""], [1, "btn-add", 3, "click"], [1, "selectedFilters"], ["class", "filter-chip", 4, "ngFor", "ngForOf"], [1, "filter-chip"], [1, "btn-remove", 3, "click"]],
      template: function FiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FiltersComponent_div_1_Template, 5, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.filters-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    padding: 20px;\n}\n\n.filter-category[_ngcontent-%COMP%] { \n    margin-bottom: 15px;\n}\n\n.btn-toggle[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    padding: 10px;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    border-radius: 3px;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n\n.btn-toggle.active[_ngcontent-%COMP%] {\n    background-color: #0056b3;\n}\n\n.filter-input[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.filter-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    margin-right: 10px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n    background-color: #28a745;\n    color: white;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\n.selectedFilters[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n}\n\n.filter-chip[_ngcontent-%COMP%] {\n    background-color: #e9ecef;\n    border: 1px solid #ccc;\n    border-radius: 15px;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: #dc3545;\n    cursor: pointer;\n    margin-left: 5px;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbn1cclxuXHJcbi5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZpbHRlcnMtc2VjdGlvbiB1bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0gKi9cclxuXHJcbi5maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItY2F0ZWdvcnkgeyBcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQgaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWRGaWx0ZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmZpbHRlci1jaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG4tcmVtb3ZlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4024:
/*!**************************************************************!*\
  !*** ./src/app/google-callback/google-callback.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleCallbackComponent: () => (/* binding */ GoogleCallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class GoogleCallbackComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.handleSocialCallback().subscribe(success => {
      if (!success) this.router.navigate(['/login']);
    });
  }
  static {
    this.ɵfac = function GoogleCallbackComponent_Factory(t) {
      return new (t || GoogleCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GoogleCallbackComponent,
      selectors: [["lib-google-callback"]],
      decls: 2,
      vars: 0,
      template: function GoogleCallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "google-callback works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




function HeaderComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hi ", ctx_r2.username, " ");
  }
}
const _c0 = function (a1) {
  return ["/profile", a1];
};
class HeaderComponent {
  constructor(authService) {
    this.authService = authService;
    this.username = '';
    this.isAuthenticated = false;
    this.isLoggingOut = false;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        console.log('Logged in as: ', user.email);
        this.username = user.email;
        this.isAuthenticated = true;
      } else {
        console.log('No user is logged in!');
        this.isAuthenticated = false;
      }
    });
  }
  logout() {
    if (this.isLoggingOut) return;
    this.isLoggingOut = true;
    this.authService.logout().subscribe({
      complete: () => this.isLoggingOut = false,
      error: () => this.isLoggingOut = false
    });
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["lib-header"]],
      decls: 10,
      vars: 5,
      consts: [[1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLinkActive", "active", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["routerLink", "/upload", "routerLinkActive", "active", 2, "float", "right"], ["authenticatedLinks", ""], ["routerLink", "/register", "routerLinkActive", "active", 2, "float", "right"], ["routerLink", "/login", "routerLinkActive", "active", 2, "float", "right"], [2, "float", "right", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Books");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ng_container_5_Template, 5, 0, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.authService.userId));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: #033f63;\n    color: white;\n    padding: 20px;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    margin: 0 15px;\n    text-decoration: none;\n    font-family: robotoMedium;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    text-decoration-color: #3D99A5;\n    text-decoration-thickness: 2px;\n    -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n    text-underline-offset: 5px;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:enabled {\n    color: #cdcdcd;\n    text-decoration: underline;\n    text-decoration-color: #3D99A5;\n    text-decoration-thickness: 2px;\n    -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n    text-underline-offset: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QiwwQkFBMEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzNmNjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvTWVkaXVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMzRDk5QTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcclxufVxyXG5cclxuLm5hdmJhciBhOmVuYWJsZWQge1xyXG4gICAgY29sb3I6ICNjZGNkY2Q7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzNEOTlBNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcclxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["lib-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 5274:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-list/book-list.component */ 3496);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/filters.component */ 8136);
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-bar/search-bar.component */ 274);





class HomepageComponent {
  constructor(bookService) {
    this.bookService = bookService;
    this.filtersDict = {};
    this.lastQuery = '';
    this.loadBooksFn = page => this.bookService.getTopPopularBooks(page);
  }
  handleSearch(query) {
    if (query !== '') {
      this.loadBooksFn = page => this.bookService.searchBooks(query, this.filtersDict, page);
      this.lastQuery = query;
    } else {
      this.loadBooksFn = page => this.bookService.getTopPopularBooks(page);
      this.lastQuery = query;
    }
  }
  onFiltersChanged(filters) {
    this.filtersDict = {};
    filters.forEach((values, key) => {
      if (values.size > 0) {
        this.filtersDict[key] = Array.from(values);
      }
    });
    this.loadBooksFn = page => this.bookService.searchBooks(this.lastQuery, this.filtersDict, page);
  }
  static {
    this.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["lib-homepage"]],
      decls: 4,
      vars: 1,
      consts: [[3, "searchSubmitted"], [1, "center"], [1, "book-list", 3, "loadBooksFn"], [1, "filters", 3, "filtersChanged"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "lib-search-bar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("searchSubmitted", function HomepageComponent_Template_lib_search_bar_searchSubmitted_0_listener($event) {
            return ctx.handleSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "lib-book-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "lib-filters", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filtersChanged", function HomepageComponent_Template_lib_filters_filtersChanged_3_listener($event) {
            return ctx.onFiltersChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadBooksFn", ctx.loadBooksFn);
        }
      },
      dependencies: [_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__.BookListComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__.FiltersComponent, _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__.SearchBarComponent],
      styles: [".book-list[_ngcontent-%COMP%] {\n    flex: 2;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding-top: 20px;\n}\n\n.filters[_ngcontent-%COMP%] {\n    flex: 1;\n    padding-top: 20px;\n    max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1saXN0IHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVycyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 107:
/*!**********************************************!*\
  !*** ./src/app/infinite-scroll.directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteScrollDirective: () => (/* binding */ InfiniteScrollDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2575);



class InfiniteScrollDirective {
  constructor() {
    this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.thresold = 100; // pixels from the bottom to trigger loading
  }

  ngOnInit() {
    this.scrollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'scroll').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(200)).subscribe(() => this.checkScroll());
  }
  ngOnDestroy() {
    this.scrollSubscription?.unsubscribe();
  }
  checkScroll() {
    const position = window.scrollY + window.innerHeight;
    const height = document.documentElement.scrollHeight;
    if (position > height - this.thresold) {
      this.scrolled.emit();
    }
  }
  static {
    this.ɵfac = function InfiniteScrollDirective_Factory(t) {
      return new (t || InfiniteScrollDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InfiniteScrollDirective,
      selectors: [["", "libInfiniteScroll", ""]],
      outputs: {
        scrolled: "scrolled"
      }
    });
  }
}


/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function LoginComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function LoginComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email format!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_9_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.loginForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function LoginComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.loginForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
class LoginComponent {
  constructor(authService, fb, router) {
    this.authService = authService;
    this.fb = fb;
    this.router = router;
    this.errorMessage = '';
    this.isLoading = false;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {
    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }
  onSubmit() {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const {
      email,
      password
    } = this.loginForm.value;
    this.authService.login({
      email,
      password
    }).subscribe({
      next: response => {
        this.router.navigate(['/home']);
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Invalid email or password!';
        this.loginForm.reset();
      },
      complete: () => this.isLoading = false
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["lib-login"]],
      decls: 31,
      vars: 6,
      consts: [[1, "login-container"], [3, "formGroup", "ngSubmit"], [1, "center-form"], ["class", "error-message", 4, "ngIf"], [1, "indicator"], ["type", "email", "formControlName", "email"], ["class", "error", 4, "ngIf"], ["type", "password", "formControlName", "password"], ["href", "#"], [1, "remember"], ["type", "checkbox", "id", "remember"], ["for", "remember"], ["type", "submit", 3, "disabled"], [1, "google-btn", 3, "click"], ["src", "assets/logos/google logo.png"], [1, "register-link"], ["routerLink", "/register"], [1, "error-message"], [1, "error"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "E-mail address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 3, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Keep me logged in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2)(21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_23_listener() {
            return ctx.authService.loginWithGoogle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Continue with Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Register here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isLoading ? "Logging in..." : "Login");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".login-container[_ngcontent-%COMP%] {\n    background-color: #fffcf4;\n    border: 0.45px solid #cdcdcd; \n    border-radius: 10px;\n    \n\n    margin: 10% auto;\n    padding: 20px;\n    width: 300px;\n    font-family: roboto;\n}\n\n.login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #28666E;\n    margin-bottom: 20px;\n}\n\n.indicator[_ngcontent-%COMP%] {\n    font-size: 17px;\n    float:left;\n    margin-left:12px;\n}\n\n.login-container[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n    border: 0.7px solid #000000;\n    border-radius: 2.34px;\n    padding: 10px;\n    width: 85%;\n    margin-bottom: 10px;\n}\n\n.login-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #007BFF;\n    text-decoration: none;\n    margin-bottom: 10px;\n    margin-left: 12px;\n    display:inline-block;\n}\n\n.login-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.remember[_ngcontent-%COMP%] {\n    margin-left: 7px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    display: block;\n}\n\n#remember[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.remember[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #033f63;\n    font-size: 18px;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 1.75px;\n    width: 50%;\n    cursor: pointer;\n    margin-bottom: 10px;\n}\n\n.login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(0, 58, 116);\n}\n\n.google-btn[_ngcontent-%COMP%] {\n    background-color: #dddddd;\n    border-radius: 2px;\n    cursor: pointer;\n    font-size: 13px;\n    font-weight: 700;\n    width:70%;\n    margin: 0 auto;\n    padding: 1.5px 0;\n}\n\n.google-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 8px 0;\n    font-size: 14px;\n}\n\n.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 20%;\n    max-height: 20%;\n    vertical-align: middle;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 0.875rem;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: #dc3545;\n    margin: 1rem 0;\n}\n\n.register-link[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZjZjQ7XHJcbiAgICBib3JkZXI6IDAuNDVweCBzb2xpZCAjY2RjZGNkOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaDIge1xyXG4gICAgY29sb3I6ICMyODY2NkU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMnB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4ubG9naW4tY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmxvZ2luLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgYm9yZGVyOiAwLjdweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi4zNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGEge1xyXG4gICAgY29sb3I6ICMwMDdCRkY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucmVtZW1iZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNyZW1lbWJlciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucmVtZW1iZXIgbGFiZWwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzM2Y2MztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEuNzVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTgsIDExNik7XHJcbn1cclxuXHJcbi5nb29nbGUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjVweCAwO1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0biBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0biBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4918:
/*!****************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfReaderComponent: () => (/* binding */ PdfReaderComponent)
/* harmony export */ });
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 1653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);









function PdfReaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Loading book...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PdfReaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error, "\n");
  }
}
function PdfReaderComponent_ngx_extended_pdf_viewer_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-extended-pdf-viewer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function PdfReaderComponent_ngx_extended_pdf_viewer_2_Template_ngx_extended_pdf_viewer_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPageChange($event));
    })("pagesLoaded", function PdfReaderComponent_ngx_extended_pdf_viewer_2_Template_ngx_extended_pdf_viewer_pagesLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.restorePosition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.book.filePath)("page", ctx_r2.currentPageNumber)("showSecondaryToolbarButton", true)("showSidebarButton", true)("showRotateButton", false)("showTextEditor", false)("showHandToolButton", false)("showOpenFileButton", false)("showBookModeButton", true)("showDownloadButton", false)("showPrintButton", false)("textLayer", false)("enableDragAndDrop", false)("enablePrint", false)("contextMenuAllowed", false);
  }
}
class PdfReaderComponent {
  constructor(bookService, authService, route, pdfService, cdr) {
    this.bookService = bookService;
    this.authService = authService;
    this.route = route;
    this.pdfService = pdfService;
    this.cdr = cdr;
    this.book = null;
    this.isLoading = true;
    this.error = null;
    this.currentPageNumber = 1;
    this.storageKeyPrefix = 'pdfPosition_';
  }
  ngOnInit() {
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        const bookId = params.get('id');
        if (bookId) {
          const savedPosition = localStorage.getItem(`${this.storageKeyPrefix}${bookId}`);
          this.currentPageNumber = savedPosition ? parseInt(savedPosition, 10) : 1;
          this.fetchBook(Number(bookId));
        } else {
          this.error = 'Invalid book ID';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
    }, 500);
  }
  fetchBook(bookId) {
    this.loadBook(bookId);
    setTimeout(() => {
      this.addBookToReadingHistory();
    }, 1000);
  }
  restorePosition() {
    // if (this.book?.id) {
    //   const savedPosition = localStorage.getItem(`${this.storageKeyPrefix}${this.book.id}`);
    //   if (savedPosition) {
    //     const newPage = parseInt(savedPosition, 10);
    //     if (newPage !== this.currentPageNumber) {
    //       this.currentPageNumber = newPage;
    //       this.cdr.detectChanges();
    //     }
    //   }
    // }
  }
  onPageChange(newPage) {
    if (this.book?.id) {
      localStorage.setItem(`${this.storageKeyPrefix}${this.book.id}`, newPage.toString());
    }
  }
  onRightClick(event) {
    event.preventDefault();
    return;
  }
  handleKeyboardEvent(event) {
    const blockedCombinations = [{
      ctrl: true,
      key: 's'
    }, {
      ctrl: true,
      key: 'p'
    }, {
      ctrl: true,
      shift: true,
      key: 'S'
    }, {
      meta: true,
      key: 's'
    }, {
      key: 'PrintScreen'
    }, {
      alt: true,
      key: 'PrintScreen'
    }];
    if (blockedCombinations.some(combo => event.ctrlKey === (combo.ctrl || false) && event.shiftKey === (combo.shift || false) && event.metaKey === (combo.meta || false) && event.key.toLowerCase() === combo.key.toLowerCase())) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    if (event.key === 'PrintScreen' || event.altKey && event.key === 'PrintScreen') {
      event.preventDefault();
      navigator.clipboard.writeText('');
      return false;
    }
    return true;
  }
  loadBook(bookId) {
    this.bookService.getBookById(bookId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      this.error = 'Failed to load book';
      this.isLoading = false;
      this.cdr.markForCheck();
      console.error('Error fetching book details: ', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    })).subscribe(result => {
      this.book = result;
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }
  addBookToReadingHistory() {
    const readingHistoryDto = {};
    readingHistoryDto.Books = new Array();
    readingHistoryDto.Books.push(this.book ? this.book : {});
    readingHistoryDto.AccessDate = new Date();
    console.log('Reading History DTO:', readingHistoryDto.Books[0].title);
    console.log('User ID:', this.authService.userId);
    this.bookService.addBookToReadingHistory(this.authService.userId, readingHistoryDto).subscribe(response => {
      console.log('Book added to reading history!');
    }, error => {
      console.error('Error adding book to reading history!');
    });
  }
  static {
    this.ɵfac = function PdfReaderComponent_Factory(t) {
      return new (t || PdfReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxExtendedPdfViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PdfReaderComponent,
      selectors: [["lib-pdf-reader"]],
      hostBindings: function PdfReaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function PdfReaderComponent_contextmenu_HostBindingHandler($event) {
            return ctx.book($event);
          })("keydown", function PdfReaderComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxExtendedPdfViewerService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [["class", "loading-spinner", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["height", "100vh", "class", "no-selection prevent-context-menu cursor-pointer", 3, "src", "page", "showSecondaryToolbarButton", "showSidebarButton", "showRotateButton", "showTextEditor", "showHandToolButton", "showOpenFileButton", "showBookModeButton", "showDownloadButton", "showPrintButton", "textLayer", "enableDragAndDrop", "enablePrint", "contextMenuAllowed", "pageChange", "pagesLoaded", 4, "ngIf"], [1, "loading-spinner"], [1, "error-message"], ["height", "100vh", 1, "no-selection", "prevent-context-menu", "cursor-pointer", 3, "src", "page", "showSecondaryToolbarButton", "showSidebarButton", "showRotateButton", "showTextEditor", "showHandToolButton", "showOpenFileButton", "showBookModeButton", "showDownloadButton", "showPrintButton", "textLayer", "enableDragAndDrop", "enablePrint", "contextMenuAllowed", "pageChange", "pagesLoaded"]],
      template: function PdfReaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PdfReaderComponent_div_0_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PdfReaderComponent_div_1_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PdfReaderComponent_ngx_extended_pdf_viewer_2_Template, 1, 15, "ngx-extended-pdf-viewer", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.book == null ? null : ctx.book.filePath) && !ctx.isLoading && !ctx.error);
        }
      },
      dependencies: [ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxExtendedPdfViewerModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxExtendedPdfViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["@media print {\n    body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n        visibility: hidden !important;\n    }\n\n    ngx-extended-pdf-viewer[_ngcontent-%COMP%], ngx-extended-pdf-viewer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .no-print[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n\n  .prevent-context-menu {\n    user-select: none;\n    -webkit-user-select: none;\n}\n\n  .prevent-context-menu .page {\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGRmLXJlYWRlci9wZGYtcmVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTs7UUFFSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gICAgYm9keSAqIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcixcclxuICAgIG5neC1leHRlbmRlZC1wZGYtdmlld2VyICoge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubm8tcHJpbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5wcmV2ZW50LWNvbnRleHQtbWVudSB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucHJldmVudC1jb250ZXh0LW1lbnUgLnBhZ2Uge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}


/***/ }),

/***/ 2172:
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-list/book-list.component */ 3496);






class ProfilePageComponent {
  constructor(router, route, bookService, authService) {
    this.router = router;
    this.route = route;
    this.bookService = bookService;
    this.authService = authService;
    this.currentFilter = 'reading';
    this.profileId = '';
    this.error = null;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.browserRefresh = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.profileId = userId;
        this.currentFilter = 'reading';
        this.loadBooksFn = this.getLoadBooksFn(this.currentFilter);
      } else {
        this.error = 'Invalid profile ID';
      }
    });
    this.route.queryParams.subscribe(params => {
      this.currentFilter = params['filter'] || 'reading';
      this.loadBooksFn = this.getLoadBooksFn(this.currentFilter);
    });
  }
  ngAfterViewInit() {
    // this.browserRefresh = browserRefresh;
    // console.log('refreshed?:', this.browserRefresh);
    // if (this.browserRefresh) {
    //   this.restoreActiveButton();
    // }
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  setFilter(filter) {
    this.currentFilter = filter;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        filter
      },
      queryParamsHandling: 'merge' // preserve other params
    });
  }

  getLoadBooksFn(filter) {
    switch (filter) {
      case 'reading':
        return page => this.bookService.getReadingHistoryOfUser(this.profileId, page);
      case 'wishlist':
        return page => this.bookService.getUserWishlist(this.profileId, page);
      case 'uploads':
        return page => this.bookService.getBooksByUploader(this.profileId, page);
      case 'already-read':
        return page => this.bookService.getBooksMarkedAsReadByUser(this.profileId, page);
      default:
        return () => new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => subscriber.next([]));
    }
  }
  highlightButton(buttonId) {
    const buttons = document.querySelectorAll('.profile-sections button');
    buttons.forEach(btn => btn.classList.remove('active'));
    const button = document.getElementById(buttonId);
    if (button != null) {
      button.classList.add('active');
      localStorage.setItem('activeButtonId', button.id);
    }
  }
  restoreActiveButton() {
    const activeButtonId = localStorage.getItem('activeButtonId');
    console.log(activeButtonId);
    if (activeButtonId) {
      this.highlightButton(activeButtonId);
    } else {
      this.highlightButton(this.currentFilter);
    }
  }
  static {
    this.ɵfac = function ProfilePageComponent_Factory(t) {
      return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProfilePageComponent,
      selectors: [["lib-profile-page"]],
      decls: 11,
      vars: 9,
      consts: [[1, "center"], [1, "book-list", 3, "loadBooksFn"], [1, "profile-sections"], ["id", "reading", 3, "click"], ["id", "wishlist", 3, "click"], ["id", "uploads", 3, "click"], ["id", "already-read", 3, "click"]],
      template: function ProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "lib-book-list", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePageComponent_Template_button_click_3_listener() {
            ctx.setFilter("reading");
            return ctx.highlightButton("reading");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Currently Reading");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePageComponent_Template_button_click_5_listener() {
            ctx.setFilter("wishlist");
            return ctx.highlightButton("wishlist");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Wishlist");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePageComponent_Template_button_click_7_listener() {
            ctx.setFilter("uploads");
            return ctx.highlightButton("uploads");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Uploads");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePageComponent_Template_button_click_9_listener() {
            ctx.setFilter("already-read");
            return ctx.highlightButton("already-read");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Already Read");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loadBooksFn", ctx.loadBooksFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "reading");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "wishlist");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "uploads");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "already-read");
        }
      },
      dependencies: [_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__.BookListComponent],
      styles: [".book-list[_ngcontent-%COMP%] {\n    flex: 2;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: left;\n    padding-top: 20px;\n}\n\n.profile-sections[_ngcontent-%COMP%] {\n    flex: 1;\n    padding-top: 50px;\n    max-width: 30%;\n}\n\n.profile-sections[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 80%;\n    padding: 10px;\n    margin: 5px 0;\n    background-color: transparent;\n    border: none;\n    border-radius: 3px;\n    font-size: 18px;\n    text-align: left;\n    cursor: pointer;\n    transition: background-color 0.3 ease;\n    font-family: roboto;\n}\n\n.profile-sections[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #FFEAAA;\n}\n\n.profile-sections[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .profile-sections[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n    outline: none;\n    background-color: #FFEBBF;\n}\n\n.profile-sections[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n    background-color: #FFEBBF;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWxpc3Qge1xyXG4gICAgZmxleDogMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtc2VjdGlvbnMge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNlY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMyBlYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuLnByb2ZpbGUtc2VjdGlvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVBQUE7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNlY3Rpb25zIGJ1dHRvbjphY3RpdmUsXHJcbi5wcm9maWxlLXNlY3Rpb25zIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUJCRjtcclxufVxyXG5cclxuLnByb2ZpbGUtc2VjdGlvbnMgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQkJGO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 600:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function RegisterComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function RegisterComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function RegisterComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email format!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_10_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_10_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.registerForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function RegisterComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_14_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_14_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(authService, fb, router) {
    this.authService = authService;
    this.fb = fb;
    this.router = router;
    this.errorMessage = '';
    this.successMessage = '';
    this.registerForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  ngOnInit() {
    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }
  passwordMatchValidator(form) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : {
      mismatch: true
    };
  }
  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (this.registerForm.invalid) {
      return;
    }
    const {
      email,
      password
    } = this.registerForm.value;
    this.authService.register({
      email,
      password
    }).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: err => {
        this.errorMessage = err.error?.errors?.[0]?.description || err.error?.error || 'Registration failed. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["lib-register"]],
      decls: 29,
      vars: 7,
      consts: [[1, "register-container"], [3, "formGroup", "ngSubmit"], [1, "center-form"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "indicator"], ["type", "email", "formControlName", "email"], ["class", "error", 4, "ngIf"], ["type", "password", "formControlName", "password"], ["type", "password", "formControlName", "confirmPassword"], ["type", "submit", 3, "disabled"], [1, "google-btn", 3, "click"], ["src", "assets/logos/google logo.png"], [1, "login-link"], ["routerLink", "/login"], [1, "error-message"], [1, "success-message"], [1, "error"], [4, "ngIf"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register new account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegisterComponent_div_5_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "E-mail address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterComponent_div_14_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Confirm password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_21_listener() {
            return ctx.authService.loginWithGoogle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Continue with Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Login here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_5_0.touched) && (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["mismatch"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".register-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #28666E;\n    margin-bottom: 20px;\n}\n\n.register-container[_ngcontent-%COMP%] {\n    background-color: #fffcf4;\n    border: 0.45px solid #cdcdcd; \n    border-radius: 10px;\n    margin: 10% auto;\n    padding: 20px;\n    width: 300px;\n    font-family: roboto;\n}\n\n.indicator[_ngcontent-%COMP%] {\n    font-family: 'georgia';\n    font-size: 17px;\n    float:left;\n    margin-left:12px;\n}\n\n.register-container[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .register-container[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], .register-container[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n    border: 0.7px solid #000000;\n    border-radius: 2.34px;\n    padding: 10px;\n    width: 85%;\n    margin-bottom: 10px;\n}\n\n.register-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #033f63;\n    font-size: 18px;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 1.75px;\n    width: 50%;\n    cursor: pointer;\n    margin-bottom: 10px;\n}\n\n.register-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(0, 58, 116);\n}\n\n.google-btn[_ngcontent-%COMP%] {\n    background-color: #dddddd;\n    border-radius: 2px;\n    cursor: pointer;\n    font-size: 13px;\n    font-weight: 700;\n    width:70%;\n    margin: 0 auto;\n    padding: 1.5px 0;\n}\n\n.google-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 8px 0;\n    font-size: 14px;\n}\n\n.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 20%;\n    max-height: 20%;\n    vertical-align: middle;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 0.875rem;\n    margin-bottom: 8px;\n}\n\n.login-link[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    text-align: center;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: #dc3545;\n    margin: 1rem 0;\n}\n\n.success-message[_ngcontent-%COMP%] {\n    color: #28a745;\n    margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNvbnRhaW5lciBoMiB7XHJcbiAgICBjb2xvcjogIzI4NjY2RTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmNmNDtcclxuICAgIGJvcmRlcjogMC40NXB4IHNvbGlkICNjZGNkY2Q7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcbiAgICBmb250LWZhbWlseTogJ2dlb3JnaWEnO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OjEycHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5yZWdpc3Rlci1jb250YWluZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4ucmVnaXN0ZXItY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICBib3JkZXI6IDAuN3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjM0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzNmNjM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxLjc1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDU4LCAxMTYpO1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMS41cHggMDtcclxufVxyXG5cclxuLmdvb2dsZS1idG4gcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmdvb2dsZS1idG4gaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgbWF4LWhlaWdodDogMjAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmxvZ2luLWxpbmsge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uc3VjY2Vzcy1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 274:
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBarComponent: () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1817);
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../book/book.service */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);





class SearchBarComponent {
  constructor(bookService) {
    this.bookService = bookService;
    this.searchSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.searchQuery = '';
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.searchSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(query => {
      this.searchSubmitted.emit(query);
    });
  }
  onSearchInputChange(event) {
    const input = event.target;
    this.searchSubject.next(input.value);
  }
  search() {
    this.searchSubmitted.emit(this.searchQuery);
  }
  static {
    this.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["lib-search-bar"]],
      outputs: {
        searchSubmitted: "searchSubmitted"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "search-bar"], [1, "label"], ["for", "searchQuery"], ["id", "searchQuery", "type", "text", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 3, "ngModel", "ngModelChange", "input"], ["searchInput", ""], ["type", "button", 3, "click"], ["src", "../assets/images/search-button.png", "alt", "Search Icon"]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.searchQuery = $event;
          })("input", function SearchBarComponent_Template_input_input_4_listener($event) {
            return ctx.onSearchInputChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_6_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".label[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 8px;\n    margin-left: 10px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    width: 60%;\n    box-sizing: border-box;\n    margin: 0 auto;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    border: 0.7px solid black;\n    border-radius: 5px;\n    padding: 8px;\n    font-size: 16px;\n    max-width: 60%;\n    box-sizing: border-box;\n    margin: 10px;\n    margin-top: 2px;\n}\n\n\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #B5B682;\n    border: none;\n    border-radius: 5px;\n    padding: 0;\n    cursor: pointer;\n    height: 35px;\n    margin-bottom: 8px;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 3px;\n    width: 35px;\n    height: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIGlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXI6IDAuN3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjVCNjgyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIgYnV0dG9uIGltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 8492:
/*!**************************************************************!*\
  !*** ./src/app/social-callback/social-callback.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialCallbackComponent: () => (/* binding */ SocialCallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class SocialCallbackComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.handleSocialCallback().subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.router.navigate(['/login'])
    });
  }
  static {
    this.ɵfac = function SocialCallbackComponent_Factory(t) {
      return new (t || SocialCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SocialCallbackComponent,
      selectors: [["lib-social-callback"]],
      decls: 2,
      vars: 0,
      template: function SocialCallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Processing login...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map