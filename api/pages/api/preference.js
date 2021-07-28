/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ preference; }
});

;// CONCATENATED MODULE: external "mercadopago"
var external_mercadopago_namespaceObject = require("mercadopago");;
var external_mercadopago_default = /*#__PURE__*/__webpack_require__.n(external_mercadopago_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/preference.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const accessToken = process.env.ACCESS_TOKEN_MP || '';
external_mercadopago_default().configurations.setAccessToken(accessToken);

const handler = async (req, res) => {
  try {
    const preference = {
      items: [{
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity)
      }],
      back_urls: {
        success: `${req.headers.origin}/api/feedback`,
        failure: `${req.headers.origin}/api/feedback`,
        pending: `${req.headers.origin}/api/feedback`
      },
      auto_return: 'approved'
    };
    const response = await external_mercadopago_default().preferences.create(preference);
    res.status(200).json({
      id: response.body.id
    });
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ var preference = (handler);

/***/ }),

/***/ 2450:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ next_serverless_loaderpage_2Fapi_2Fpreference_absolutePagePath_private_next_pages_2Fapi_2Fpreference_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_7hzbeguILoD1YsiYkkHlY_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_2230c31508c199fd2a88fa48aaaf078482_22_2C_22previewModeSigningKey_22_3A_22f3dd317a07ff7c11151d26f2206a817609778aa37dc8c0b1c203086811f9438e_22_2C_22previewModeEncryptionKey_22_3A_228177ba69ef6fdb8cc81693d71a1b0cc7dce1f94d703c378d5f2679df68a04582_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFDQ0VTU19UT0tFTl9NUD1URVNULTgxMjE3ODMzMTg4NTMzNDEtMDcyODAxLWMwYmM1ZjIxMzIwYTJmYTVlN2QxOGNhMDdlMGZkYjA2LTI5ODI1MzU2XG5ORVhUX1BVQkxJQ19LRVlfTVA9VEVTVC0zMmMyMWU5NC01NzA3LTQ0N2MtOWE5NS05YWZkZDYwNGIzOGMifV0_3D_i18n_; }
});

;// CONCATENATED MODULE: external "next/dist/next-server/server/node-polyfill-fetch"
var node_polyfill_fetch_namespaceObject = require("next/dist/next-server/server/node-polyfill-fetch");;
// EXTERNAL MODULE: ./.next/routes-manifest.json
var routes_manifest = __webpack_require__(5706);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(8277);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fpreference&absolutePagePath=private-next-pages%2Fapi%2Fpreference.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=7hzbeguILoD1YsiYkkHlY&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%2230c31508c199fd2a88fa48aaaf078482%22%2C%22previewModeSigningKey%22%3A%22f3dd317a07ff7c11151d26f2206a817609778aa37dc8c0b1c203086811f9438e%22%2C%22previewModeEncryptionKey%22%3A%228177ba69ef6fdb8cc81693d71a1b0cc7dce1f94d703c378d5f2679df68a04582%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFDQ0VTU19UT0tFTl9NUD1URVNULTgxMjE3ODMzMTg4NTMzNDEtMDcyODAxLWMwYmM1ZjIxMzIwYTJmYTVlN2QxOGNhMDdlMGZkYjA2LTI5ODI1MzU2XG5ORVhUX1BVQkxJQ19LRVlfTVA9VEVTVC0zMmMyMWU5NC01NzA3LTQ0N2MtOWE5NS05YWZkZDYwNGIzOGMifV0%3D&i18n=!

        
      const { processEnv } = __webpack_require__(4227)
      processEnv([{"path":".env","contents":"ACCESS_TOKEN_MP=TEST-8121783318853341-072801-c0bc5f21320a2fa5e7d18ca07e0fdb06-29825356\nNEXT_PUBLIC_KEY_MP=TEST-32c21e94-5707-447c-9a95-9afdd604b38c"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest/* rewrites */.Dg)
          ? routes_manifest/* rewrites */.Dg
          : []

        if (!Array.isArray(routes_manifest/* rewrites */.Dg)) {
          combinedRewrites.push(...routes_manifest/* rewrites.beforeFiles */.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest/* rewrites.afterFiles */.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest/* rewrites.fallback */.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(4025),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/preference",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"30c31508c199fd2a88fa48aaaf078482",previewModeSigningKey:"f3dd317a07ff7c11151d26f2206a817609778aa37dc8c0b1c203086811f9438e",previewModeEncryptionKey:"8177ba69ef6fdb8cc81693d71a1b0cc7dce1f94d703c378d5f2679df68a04582"}
        })
        /* harmony default export */ var next_serverless_loaderpage_2Fapi_2Fpreference_absolutePagePath_private_next_pages_2Fapi_2Fpreference_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_7hzbeguILoD1YsiYkkHlY_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_2230c31508c199fd2a88fa48aaaf078482_22_2C_22previewModeSigningKey_22_3A_22f3dd317a07ff7c11151d26f2206a817609778aa37dc8c0b1c203086811f9438e_22_2C_22previewModeEncryptionKey_22_3A_228177ba69ef6fdb8cc81693d71a1b0cc7dce1f94d703c378d5f2679df68a04582_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFDQ0VTU19UT0tFTl9NUD1URVNULTgxMjE3ODMzMTg4NTMzNDEtMDcyODAxLWMwYmM1ZjIxMzIwYTJmYTVlN2QxOGNhMDdlMGZkYjA2LTI5ODI1MzU2XG5ORVhUX1BVQkxJQ19LRVlfTVA9VEVTVC0zMmMyMWU5NC01NzA3LTQ0N2MtOWE5NS05YWZkZDYwNGIzOGMifV0_3D_i18n_ = (apiHandler);
      

/***/ }),

/***/ 5517:
/***/ (function(module) {

module.exports = require("@hapi/accept");;

/***/ }),

/***/ 4227:
/***/ (function(module) {

module.exports = require("@next/env");;

/***/ }),

/***/ 227:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 9034:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/i18n/detect-domain-locale.js");;

/***/ }),

/***/ 939:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/i18n/detect-locale-cookie.js");;

/***/ }),

/***/ 7468:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path.js");;

/***/ }),

/***/ 2378:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/router/utils/path-match.js");;

/***/ }),

/***/ 2480:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination.js");;

/***/ }),

/***/ 199:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/router/utils/route-matcher.js");;

/***/ }),

/***/ 4386:
/***/ (function(module) {

module.exports = require("next/dist/next-server/lib/router/utils/route-regex.js");;

/***/ }),

/***/ 2240:
/***/ (function(module) {

module.exports = require("next/dist/next-server/server/api-utils.js");;

/***/ }),

/***/ 9622:
/***/ (function(module) {

module.exports = require("next/dist/next-server/server/denormalize-page-path.js");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

module.exports = require("url");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [56,277,706], function() { return __webpack_require__(2450); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			169: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(56);
/******/ 			__webpack_require__.e(277);
/******/ 			__webpack_require__.e(706);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;