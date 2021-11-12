exports.ids = [1];
exports.modules = {

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ccs_swiper_vue_vue_type_style_index_0_id_341ca4ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ccs_swiper_vue_vue_type_style_index_0_id_341ca4ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ccs_swiper_vue_vue_type_style_index_0_id_341ca4ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ccs_swiper_vue_vue_type_style_index_0_id_341ca4ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ccs_swiper_vue_vue_type_style_index_0_id_341ca4ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ccs-swiper.vue?vue&type=template&id=341ca4ee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-carousel',{attrs:{"trigger":"click","height":_vm.bannerHeight}},_vm._l((_vm.carouselList),function(item,index){return _c('el-carousel-item',{key:index,staticClass:"carouselItem",style:({'background-image': ' url( ' + _vm.getImgUrl(item.imgUrl) +' ) ' }),attrs:{"flex":"cross:center"}},[_c('div',{staticClass:"main-container ",style:({height:_vm.bannerHeight}),attrs:{"flex":"cross:center"}},[_c('div',[_c('div',{staticClass:"banner-title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"banner-text"},[_vm._v(_vm._s(item.bannerDesc))]),_vm._v(" "),_c('div',{staticClass:"banner-btn",on:{"click":function($event){return _vm.handleAtomDetail(item)}}},[_vm._v("查看详情")])])])])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ccs-swiper.vue?vue&type=template&id=341ca4ee&scoped=true&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ccs-swiper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ccs_swipervue_type_script_lang_js_ = ({
  props: {
    carouselList: {
      type: Array,
      default: []
    }
  },
  computed: {
    getImgUrl() {
      return function (path) {
        return Object(utils["b" /* concatImgUrl */])(path);
      };
    }

  },

  data() {
    return {
      bannerHeight: "500px"
    };
  },

  mounted() {
    this.imgLoad();
  },

  methods: {
    handleAtomDetail(item) {
      window.open(item.linkUrl);
    },

    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = window.screen.height / 3 + 'px';
      });
    }

  },
  watch: {}
});
// CONCATENATED MODULE: ./components/ccs-swiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ccs_swipervue_type_script_lang_js_ = (ccs_swipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ccs-swiper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(151)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ccs_swipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "341ca4ee",
  "27fc8fd8"
  
)

/* harmony default export */ var ccs_swiper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=ccs-swiper.js.map