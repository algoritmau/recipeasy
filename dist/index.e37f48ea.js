// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kGakq":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediate = require("core-js/modules/web.immediate");
var _model = require("./model");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _searchResultsView = require("./views/searchResultsView");
var _searchResultsViewDefault = parcelHelpers.interopDefault(_searchResultsView);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
var _bookmarksView = require("./views/bookmarksView");
var _bookmarksViewDefault = parcelHelpers.interopDefault(_bookmarksView);
var _addRecipeView = require("./views/addRecipeView");
var _addRecipeViewDefault = parcelHelpers.interopDefault(_addRecipeView);
const renderRecipe = async function() {
    try {
        const recipeId = window.location.hash.slice(1);
        if (!recipeId) return;
        _recipeViewDefault.default.renderSpinner(); // Update results view to highlight selected recipe
        _searchResultsViewDefault.default.update(_model.paginateSearchedRecipes()); // Update bookmarks view to render bookmarked recipes
        _bookmarksViewDefault.default.update(_model.state.bookmarks); // Loading recipe data
        await _model.loadRecipe(recipeId); // Rendering recipe data
        _recipeViewDefault.default.render(_model.state.recipe);
    } catch (error) {
        _recipeViewDefault.default.renderError(`💥 An error has occured: ${error}`);
    }
};
const controlSearchResults = async function() {
    try {
        _searchResultsViewDefault.default.renderSpinner();
        const query = _searchViewDefault.default.getQuery();
        if (!query) return;
        await _model.searchRecipes(query);
        _searchResultsViewDefault.default.render(_model.paginateSearchedRecipes(1));
        _paginationViewDefault.default.render(_model.state.search);
    } catch (error) {
        _recipeViewDefault.default.renderError(`💥 An error has occured: ${error}`);
    }
};
const controlPagination = (page)=>{
    _searchResultsViewDefault.default.render(_model.paginateSearchedRecipes(page));
    _paginationViewDefault.default.render(_model.state.search);
};
const controlServings = (newServings)=>{
    _model.updateServings(newServings);
    _recipeViewDefault.default.update(_model.state.recipe);
};
const controlRecipeBookmarking = ()=>{
    if (!_model.state.recipe.isBookmarked) _model.bookmarkRecipe(_model.state.recipe);
    else _model.unbookmarkRecipe(_model.state.recipe.id);
    _recipeViewDefault.default.update(_model.state.recipe); // Update recipe view to render bookmarked recipes
    _bookmarksViewDefault.default.render(_model.state.bookmarks);
};
const controlRecipeBookmarks = ()=>{
    _bookmarksViewDefault.default.render(_model.state.bookmarks);
};
const controlAddRecipe = async (recipeData)=>{
    try {
        _addRecipeViewDefault.default.renderSpinner();
        await _model.uploadRecipe(recipeData); // Render recipe
        _recipeViewDefault.default.render(_model.state.recipe); // Confirmation message
        _addRecipeViewDefault.default.renderMessage(); // Render bookmark view
        _bookmarksViewDefault.default.render(_model.state.bookmarks); // Add recipe id to url
        window.history.pushState(null, null, `#${_model.state.recipe.id}`); // Close modal
        setTimeout(()=>{
            _addRecipeViewDefault.default.toggleModal();
        }, 2000);
    } catch (error) {
        _addRecipeViewDefault.default.renderError(error);
    }
};
const init = ()=>{
    _bookmarksViewDefault.default.addRenderHandler(controlRecipeBookmarks);
    _recipeViewDefault.default.addHandlerRender(renderRecipe);
    _searchViewDefault.default.addHandler(controlSearchResults);
    _paginationViewDefault.default.addClickHandler(controlPagination);
    _recipeViewDefault.default.addUpdateServingsHandler(controlServings);
    _recipeViewDefault.default.addRecipeBookmarkHandler(controlRecipeBookmarking);
    _addRecipeViewDefault.default.addUploadRecipeHandler(controlAddRecipe);
};
init();

},{"core-js/modules/web.immediate":"49tUX","./model":"Y4A21","./views/recipeView":"l60JC","./views/searchView":"9OQAM","./views/searchResultsView":"cXIN2","./views/paginationView":"6z7bi","./views/bookmarksView":"4Lqzq","./views/addRecipeView":"i6DNj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var task = require('../internals/task');
var FORCED = !global.setImmediate || !global.clearImmediate;
// http://w3c.github.io/setImmediate/
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
}, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/redefine":"1ZKnU","../internals/set-global":"ldqR5","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has":"luSTT","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"7SuiS":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var split = ''.split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var toString = {
}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"fOR0B":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : String(key);
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = exoticToPrim.call(input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
module.exports = function(it) {
    return typeof it === 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function(argument) {
    return typeof argument === 'function';
};

},{}],"4aV4F":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var getBuiltIn = require('../internals/get-built-in');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && Object(it) instanceof $Symbol;
};

},{"../internals/is-callable":"l3Kyn","../internals/get-built-in":"6ZUSY","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"grUXC"}],"grUXC":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
    }
}
module.exports = version && +version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir"}],"gOMir":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
module.exports = function(argument) {
    try {
        return String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"7MME2":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has":"luSTT","../internals/uid":"a3SEE","../internals/native-symbol":"grUXC","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.18.1',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/set-global":"ldqR5"}],"ldqR5":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = function(key, value) {
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"luSTT":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var hasOwnProperty = {
}.hasOwnProperty;
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
};

},{"../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();
module.exports = function(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"4isCr":[function(require,module,exports) {
var isObject = require('../internals/is-object');
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw TypeError(String(argument) + ' is not an object');
};

},{"../internals/is-object":"Z0pBo"}],"1ZKnU":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var has = require('../internals/has');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        if (!has(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) createNonEnumerableProperty(value, 'name', name);
        state = enforceInternalState(value);
        if (!state.source) state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/has":"luSTT","../internals/create-non-enumerable-property":"8CL42","../internals/set-global":"ldqR5","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF","../internals/function-name":"l6Kgd"}],"9jh7O":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');
var functionToString = Function.toString;
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString.call(it);
};
module.exports = store.inspectSource;

},{"../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
        if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset.call(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget.call(store, it) || {
        };
    };
    has = function(it) {
        return wmhas.call(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return objectHas(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return objectHas(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"7LdJl","../internals/global":"i8HOC","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has":"luSTT","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"7LdJl":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var inspectSource = require('../internals/inspect-source');
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/inspect-source":"9jh7O"}],"eAjGz":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var has = require('../internals/has');
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = has(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {
}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has":"luSTT"}],"9Z12i":[function(require,module,exports) {
var has = require('../internals/has');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has":"luSTT","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
    return result;
};

},{"../internals/has":"luSTT","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-length":"fU04N","../internals/to-absolute-index":"5yh27"}],"fU04N":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"iQHvX"}],"iQHvX":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"5yh27":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"iQHvX"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var fails = require('../internals/fails');
var bind = require('../internals/function-bind-context');
var html = require('../internals/html');
var createElement = require('../internals/document-create-element');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global.location;
} catch (error) {
}
var run = function(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), location.protocol + '//' + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(fn) {
        var args = [];
        var argumentsLength = arguments.length;
        var i = 1;
        while(argumentsLength > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func -- spec requirement
            (isCallable(fn) ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/fails":"hL6D2","../internals/function-bind-context":"7vpmS","../internals/html":"2pze4","../internals/document-create-element":"4bOHl","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"7vpmS":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
// optional / simple context binding
module.exports = function(fn, that, length) {
    aCallable(fn);
    if (that === undefined) return fn;
    switch(length){
        case 0:
            return function() {
                return fn.call(that);
            };
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/a-callable":"gOMir"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"6ZUSY"}],"bzGah":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
var global = require('../internals/global');
module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "searchRecipes", ()=>searchRecipes
);
parcelHelpers.export(exports, "paginateSearchedRecipes", ()=>paginateSearchedRecipes
);
parcelHelpers.export(exports, "updateServings", ()=>updateServings
);
parcelHelpers.export(exports, "bookmarkRecipe", ()=>bookmarkRecipe
);
parcelHelpers.export(exports, "unbookmarkRecipe", ()=>unbookmarkRecipe
);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe
);
var _config = require("./config");
var _renameObjKeys = require("./utils/renameObjKeys");
var _utils = require("./utils/utils");
const state = {
    recipe: {
    },
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: _config.SEARCH_RESULTS_PER_PAGE
    },
    bookmarks: []
};
const loadRecipe = async function(recipeId) {
    try {
        const recipeData = await _utils.doAjaxRequest(`${_config.API_URL}${recipeId}?key=${_config.API_KEY}`);
        const { recipe  } = recipeData.data;
        const keysMap = {
            image_url: 'imageUrl',
            source_url: 'sourceUrl',
            cooking_time: 'cookingTime'
        };
        state.recipe = _renameObjKeys.renameObjKeys(keysMap, recipe);
        if (state.bookmarks.some((bookmark)=>bookmark.id === recipeId
        )) state.recipe.isBookmarked = true;
        else state.recipe.isBookmarked = false;
    } catch (error) {
        throw error;
    }
};
const searchRecipes = async function(query) {
    try {
        state.search.query = query;
        const searchResults = await _utils.doAjaxRequest(`${_config.API_URL}?search=${query}&key=${_config.API_KEY}`);
        state.search.results = searchResults.data.recipes; // Sanitize property name
        state.search.results.forEach((recipe)=>{
            recipe.imageUrl = recipe.image_url;
            delete recipe.image_url;
        });
    } catch (error) {
        throw error;
    }
};
const paginateSearchedRecipes = function(page) {
    state.search.page = page;
    const start = (page - 1) * 10;
    const end = start + 10;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ingredient)=>ingredient.quantity = Math.round(ingredient.quantity * newServings / state.recipe.servings)
    );
    state.recipe.servings = newServings;
};
const bookmarkRecipe = function(recipe) {
    state.bookmarks.push(recipe); // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.isBookmarked = true;
    persistBookmarks();
};
const unbookmarkRecipe = function(recipeId) {
    const index = state.bookmarks.findIndex((recipe)=>recipe.id === recipeId
    );
    state.bookmarks.splice(index, 1); // Mark current recipe as not bookmarked
    if (recipeId === state.recipe.id) state.recipe.isBookmarked = false;
    persistBookmarks();
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const getPersistedBookmarks = function() {
    const bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks) state.bookmarks = JSON.parse(bookmarks);
};
getPersistedBookmarks();
const uploadRecipe = async function(recipeData) {
    try {
        const ingredients = Object.entries(recipeData).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== ''
        ).map((ingredient)=>{
            const ingredientsArray = ingredient[1].trim().split(',');
            const [quantity, unit, description] = ingredientsArray;
            if (ingredientsArray.length !== 3) throw new Error('❌ Invalid ingredient format. Please use the correct format to submit a recipe.');
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: recipeData.title,
            source_url: recipeData.sourceUrl,
            image_url: recipeData.image,
            publisher: recipeData.publisher,
            cooking_time: +recipeData.cookingTime,
            servings: +recipeData.servings,
            ingredients,
            key: recipeData.key
        };
        const { data  } = await _utils.doAjaxRequest(`${_config.API_URL}?key=${_config.API_KEY}`, recipe);
        const uploadedRecipe = data.recipe;
        const keysMap = {
            image_url: 'imageUrl',
            source_url: 'sourceUrl',
            cooking_time: 'cookingTime'
        };
        state.recipe = _renameObjKeys.renameObjKeys(keysMap, uploadedRecipe);
        bookmarkRecipe(state.recipe);
    } catch (error) {
        throw error;
    }
};

},{"./config":"k5Hzs","./utils/renameObjKeys":"llezT","./utils/utils":"1vl8p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
parcelHelpers.export(exports, "TIMEOUT_SECONDS", ()=>TIMEOUT_SECONDS
);
parcelHelpers.export(exports, "SEARCH_RESULTS_PER_PAGE", ()=>SEARCH_RESULTS_PER_PAGE
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const API_KEY = '5cb68340-b9c7-4df9-9225-2d429f504ea9';
const TIMEOUT_SECONDS = 10;
const SEARCH_RESULTS_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"llezT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renameObjKeys", ()=>renameObjKeys
);
const renameObjKeys = (keysMap, obj)=>Object.keys(obj).reduce((acc, key)=>({
            ...acc,
            [keysMap[key] || key]: obj[key]
        })
    , {
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vl8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doAjaxRequest", ()=>doAjaxRequest
);
var _config = require("../config");
const doAjaxRequest = async (url, recipeData = null)=>{
    try {
        const fetchPromise = recipeData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        }) : fetch(url);
        const response = await Promise.race([
            fetchPromise,
            timeout(_config.TIMEOUT_SECONDS)
        ]);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
function timeout(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timed out after ${s} seconds`));
        }, s * 1000);
    });
}

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class RecipeView extends _viewDefault.default {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = "Sorry, we couldn't find the recipe you're looking for. Please try another one.";
    _successMessage = '';
    _generateMarkup() {
        return `
    <figure class="recipe__fig">
        <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" crossOrigin= "anonymous" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_iconsSvgDefault.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_iconsSvgDefault.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-new-servings="${this._data.servings - 1}">
              <svg>
                <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-new-servings="${this._data.servings + 1}">
              <svg>
                <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${_iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${_iconsSvgDefault.default}#icon-bookmark${this._data.isBookmarked ? '-fill' : ''}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateIngredientMarkup).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    }
    _generateIngredientMarkup(ingredient) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_iconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ingredient.quantity || ''}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ingredient.unit}</span>
          ${ingredient.description}
        </div>
      </li>
    `;
    }
    addHandlerRender(handler) {
        [
            'hashchange'
        ].forEach((event)=>window.addEventListener(event, handler)
        );
    }
    addUpdateServingsHandler(handler) {
        this._parentElement.addEventListener('click', function(event) {
            const updateServingsButton = event.target.closest('.btn--update-servings');
            if (!updateServingsButton) return;
            let { newServings  } = updateServingsButton.dataset;
            newServings = parseInt(newServings);
            if (newServings > 0) handler(newServings);
        });
    }
    addRecipeBookmarkHandler(handler) {
        this._parentElement.addEventListener('click', function(event) {
            const bookmarkButton = event.target.closest('.btn--bookmark');
            if (!bookmarkButton) return;
            handler();
        });
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data = null;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length == 0) return this.renderError();
        this._data = data;
        const renderableMarkup = this._generateMarkup();
        if (!render) return renderableMarkup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', renderableMarkup);
    }
    update(data) {
        this._data = data;
        const updatedMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(updatedMarkup);
        const updatedElements = Array.from(newDOM.querySelectorAll('*'));
        const currentElements = Array.from(this._parentElement.querySelectorAll('*'));
        updatedElements.forEach((updatedElement, i)=>{
            var ref;
            const currentElement = currentElements[i]; // Changing text-based content
            if (!updatedElement.isEqualNode(currentElement) && ((ref = updatedElement.firstChild) === null || ref === void 0 ? void 0 : ref.nodeValue.trim()) !== '') currentElement.textContent = updatedElement.textContent;
             // Updating attributes
            if (!updatedElement.isEqualNode(currentElement)) {
                const updatedAttributes = Array.from(updatedElement.attributes);
                updatedAttributes.forEach((updatedAttribute)=>{
                    currentElement.setAttribute(updatedAttribute.name, updatedAttribute.value);
                });
            }
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const spinnerMarkup = `
      <div class="spinner">
        <svg>
          <use href="${_iconsSvgDefault.default}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup);
    }
    renderError(error = this._errorMessage) {
        const errorMarkup = `
      <div class="error">
        <div>
          <svg>
            <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${error}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
    }
    renderMessage(message = this._successMessage) {
        const messageMarkup = `
      <div class="message">
        <div>
          <svg>
            <use href="${_iconsSvgDefault.default}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', messageMarkup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentEl = document.querySelector('.search');
    #searchField = this.#parentEl.querySelector('.search__field');
    getQuery() {
        const query = this.#searchField.value;
        this.#clearInput();
        return query;
    }
     #clearInput() {
        this.#searchField.value = '';
    }
    addHandler(handler) {
        this.#parentEl.addEventListener('submit', function(event) {
            event.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXIN2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class SearchResultsView extends _viewDefault.default {
    _parentElement = document.querySelector('.results');
    _errorMessage = "Sorry, we couldn't find any recipe matching your query. Please try something else.";
    _successMessage = '';
    _generateMarkup() {
        return this._data.map((searchResult)=>_previewViewDefault.default.render(searchResult, false)
        ).join('');
    }
}
exports.default = new SearchResultsView();

},{"./View":"5cUXS","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends _viewDefault.default {
    _generateMarkup() {
        const recipeId = window.location.hash.slice(1);
        return `
    <li class="preview">
      <a class="preview__link ${recipeId === this._data.id ? 'preview__link--active' : ''}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src=${this._data.imageUrl} alt=${this._data.title} crossOrigin= "anonymous" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  `;
    }
}
exports.default = new PreviewView();

},{"./View":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends _viewDefault.default {
    _parentElement = document.querySelector('.pagination');
    addClickHandler(handler) {
        this._parentElement.addEventListener('click', (event)=>{
            const clickedButton = event.target.closest('.pagination__btn');
            if (!clickedButton) return;
            const pageToGo = +clickedButton.dataset.pagetogo;
            handler(pageToGo);
        });
    }
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const currentPage = this._data.page; // First page of many
        if (numPages > 1 && currentPage === 1) return `
        <button data-pagetogo="${currentPage + 1}" class="btn--inline pagination__btn pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
         // Middle page of many
        if (numPages > 1 && currentPage > 1 && currentPage < numPages) return `
        <button data-pagetogo="${currentPage - 1}" class="btn--inline pagination__btn pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
        <button data-pagetogo="${currentPage + 1}" class="btn--inline pagination__btn pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
         // Last page of many
        if (numPages > 1 && currentPage === numPages) return `
        <button data-pagetogo="${currentPage - 1}" class="btn--inline pagination__btn pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `;
         // One and only page
        return ''; // TODO: Abstract this logic into a function
    // const generatePageButtonMarkup = (pageNum, isNext) => `
    //   <button class="btn--inline pagination__btn--${isNext ? 'next' : 'prev'}">
    //     <svg class="search__icon">
    //       <use href="${icons}#icon-arrow-${isNext ? 'right' : 'left'}"></use>
    //     </svg>
    //     <span>Page ${currentpage - 1}</span>
    //   </button>
    // `
    }
}
exports.default = new PaginationView();

},{"./View":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class BookmarksView extends _viewDefault.default {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'Nothing to see here yet. Find your favorite recipes and bookmark them!';
    _successMessage = '';
    addRenderHandler(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>_previewViewDefault.default.render(bookmark, false)
        ).join('');
    }
}
exports.default = new BookmarksView();

},{"./View":"5cUXS","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddRecipeView extends _viewDefault.default {
    _parentElement = document.querySelector('.upload');
    _addRecipeWindow = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpenModal = document.querySelector('.nav__btn--add-recipe');
    _btnCloseModal = document.querySelector('.btn--close-modal');
    _successMessage = 'Your recipe has been successfully uploaded.';
    constructor(){
        super();
        this._addOpenModalHandler();
        this._addCloseModalHandler();
    }
    toggleModal() {
        this._overlay.classList.toggle('hidden');
        this._addRecipeWindow.classList.toggle('hidden');
    }
    _addOpenModalHandler() {
        this._btnOpenModal.addEventListener('click', this.toggleModal.bind(this));
    }
    _addCloseModalHandler() {
        this._btnCloseModal.addEventListener('click', this.toggleModal.bind(this));
        this._overlay.addEventListener('click', this.toggleModal.bind(this));
    }
    addUploadRecipeHandler(handler) {
        this._parentElement.addEventListener('submit', (e)=>{
            e.preventDefault();
            const formData = Object.fromEntries([
                ...new FormData(e.target)
            ]);
            handler(formData);
        });
    }
    _generateMarkup() {
    }
}
exports.default = new AddRecipeView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kGakq","aenu9"], "aenu9", "parcelRequire79ad")

//# sourceMappingURL=index.e37f48ea.js.map
