/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(48)('wks');
var uid = __webpack_require__(30);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2EngineItemTypes = exports.IX2EngineEventTypes = exports.IX2EngineConstants = exports.IX2EngineActionTypes = exports.IX2EasingUtils = exports.IX2Easings = exports.IX2BrowserSupport = undefined;

var _IX2BrowserSupport = __webpack_require__(58);

var IX2BrowserSupport = _interopRequireWildcard(_IX2BrowserSupport);

var _IX2Easings = __webpack_require__(122);

var IX2Easings = _interopRequireWildcard(_IX2Easings);

var _IX2EasingUtils = __webpack_require__(123);

var IX2EasingUtils = _interopRequireWildcard(_IX2EasingUtils);

var _IX2EngineActionTypes = __webpack_require__(124);

var IX2EngineActionTypes = _interopRequireWildcard(_IX2EngineActionTypes);

var _IX2EngineEventTypes = __webpack_require__(125);

var IX2EngineEventTypes = _interopRequireWildcard(_IX2EngineEventTypes);

var _IX2EngineItemTypes = __webpack_require__(75);

var IX2EngineItemTypes = _interopRequireWildcard(_IX2EngineItemTypes);

var _IX2EngineConstants = __webpack_require__(76);

var IX2EngineConstants = _interopRequireWildcard(_IX2EngineConstants);

var _IX2ElementsReducer = __webpack_require__(247);

var IX2ElementsReducer = _interopRequireWildcard(_IX2ElementsReducer);

var _IX2VanillaPlugins = __webpack_require__(126);

var IX2VanillaPlugins = _interopRequireWildcard(_IX2VanillaPlugins);

var _IX2VanillaUtils = __webpack_require__(252);

var IX2VanillaUtils = _interopRequireWildcard(_IX2VanillaUtils);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

exports.IX2BrowserSupport = IX2BrowserSupport;
exports.IX2Easings = IX2Easings;
exports.IX2EasingUtils = IX2EasingUtils;
exports.IX2EngineActionTypes = IX2EngineActionTypes;
exports.IX2EngineConstants = IX2EngineConstants;
exports.IX2EngineEventTypes = IX2EngineEventTypes;
exports.IX2EngineItemTypes = IX2EngineItemTypes;
exports.IX2ElementsReducer = IX2ElementsReducer;
exports.IX2VanillaPlugins = IX2VanillaPlugins;
exports.IX2VanillaUtils = IX2VanillaUtils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(104);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(85);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(181),
    baseMatchesProperty = __webpack_require__(235),
    identity = __webpack_require__(72),
    isArray = __webpack_require__(0),
    property = __webpack_require__(242);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(193),
    getValue = __webpack_require__(198);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(90);
var defined = __webpack_require__(44);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    getRawTag = __webpack_require__(194),
    objectToString = __webpack_require__(195);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(103),
    isLength = __webpack_require__(66);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */

/**
 * Webflow: Core site library
 */

var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = Webflow._ = __webpack_require__(138);
var tram = Webflow.tram = __webpack_require__(81) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;

/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} options
 * @return {object}
 */
Webflow.define = function (name, factory, options) {
  if (modules[name]) {
    unbindModule(modules[name]);
  }
  var instance = modules[name] = factory($, _, options) || {};
  bindModule(instance);
  return instance;
};

/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */
Webflow.require = function (name) {
  return modules[name];
};

function bindModule(module) {
  // If running in Webflow app, subscribe to design/preview events
  if (Webflow.env()) {
    isFunction(module.design) && $win.on('__wf_design', module.design);
    isFunction(module.preview) && $win.on('__wf_preview', module.preview);
  }
  // Subscribe to front-end destroy event
  isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
  // Look for ready method on module
  if (module.ready && isFunction(module.ready)) {
    addReady(module);
  }
}

function addReady(module) {
  // If domready has already happened, run ready method
  if (domready) {
    module.ready();
    return;
  }
  // Otherwise add ready method to the primary queue (only once)
  if (_.contains(primary, module.ready)) {
    return;
  }
  primary.push(module.ready);
}

function unbindModule(module) {
  // Unsubscribe module from window events
  isFunction(module.design) && $win.off('__wf_design', module.design);
  isFunction(module.preview) && $win.off('__wf_preview', module.preview);
  isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);
  // Remove ready method from primary queue
  if (module.ready && isFunction(module.ready)) {
    removeReady(module);
  }
}

function removeReady(module) {
  primary = _.filter(primary, function (readyFn) {
    return readyFn !== module.ready;
  });
}

/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */
Webflow.push = function (ready) {
  // If domready has already happened, invoke handler
  if (domready) {
    isFunction(ready) && ready();
    return;
  }
  // Otherwise push into secondary queue
  secondary.push(ready);
};

/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */
Webflow.env = function (mode) {
  var designFlag = window.__wf_design;
  var inApp = typeof designFlag !== 'undefined';
  if (!mode) {
    return inApp;
  }
  if (mode === 'design') {
    return inApp && designFlag;
  }
  if (mode === 'preview') {
    return inApp && !designFlag;
  }
  if (mode === 'slug') {
    return inApp && window.__wf_slug;
  }
  if (mode === 'editor') {
    return window.WebflowEditor;
  }
  if (mode === 'test') {
    return  false || window.__wf_test;
  }
  if (mode === 'frame') {
    return window !== window.top;
  }
};

// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;

// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function (evt) {
  touchTarget = evt.target;
});

/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */
Webflow.validClick = touch ? function (clickTarget) {
  return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function () {
  return true;
};

/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */
var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy();

// Create a proxy instance for throttled events
function eventProxy(target, types) {
  // Set up throttled method (using custom frame-based _.throttle)
  var handlers = [];
  var proxy = {};
  proxy.up = _.throttle(function (evt) {
    _.each(handlers, function (h) {
      h(evt);
    });
  });

  // Bind events to target
  if (target && types) {
    target.on(types, proxy.up);
  }

  /**
   * Add an event handler
   * @param  {function} handler
   */
  proxy.on = function (handler) {
    if (typeof handler !== 'function') {
      return;
    }
    if (_.contains(handlers, handler)) {
      return;
    }
    handlers.push(handler);
  };

  /**
   * Remove an event handler
   * @param  {function} handler
   */
  proxy.off = function (handler) {
    // If no arguments supplied, clear all handlers
    if (!arguments.length) {
      handlers = [];
      return;
    }
    // Otherwise, remove handler from the list
    handlers = _.filter(handlers, function (h) {
      return h !== handler;
    });
  };

  return proxy;
}

// Webflow.location - Wrap window.location in api
Webflow.location = function (url) {
  window.location = url;
};

if (Webflow.env()) {
  // Ignore redirects inside a Webflow design/edit environment
  Webflow.location = function () {};
}

// Webflow.ready - Call primary and secondary handlers
Webflow.ready = function () {
  domready = true;

  // Restore modules after destroy
  if (destroyed) {
    restoreModules();

    // Otherwise run primary ready methods
  } else {
    _.each(primary, callReady);
  }

  // Run secondary ready methods
  _.each(secondary, callReady);

  // Trigger resize
  Webflow.resize.up();
};

function callReady(readyFn) {
  isFunction(readyFn) && readyFn();
}

function restoreModules() {
  destroyed = false;
  _.each(modules, bindModule);
}

/**
 * Webflow.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */
var deferLoad;
Webflow.load = function (handler) {
  deferLoad.then(handler);
};

function bindLoad() {
  // Reject any previous deferred (to support destroy)
  if (deferLoad) {
    deferLoad.reject();
    $win.off('load', deferLoad.resolve);
  }
  // Create deferred and bind window load event
  deferLoad = new $.Deferred();
  $win.on('load', deferLoad.resolve);
}

// Webflow.destroy - Trigger a destroy event for all modules
Webflow.destroy = function (options) {
  options = options || {};
  destroyed = true;
  $win.triggerHandler('__wf_destroy');

  // Allow domready reset for tests
  if (options.domready != null) {
    domready = options.domready;
  }

  // Unbind modules
  _.each(modules, unbindModule);

  // Clear any proxy event handlers
  Webflow.resize.off();
  Webflow.scroll.off();
  Webflow.redraw.off();

  // Clear any queued ready methods
  primary = [];
  secondary = [];

  // If load event has not yet fired, replace the deferred
  if (deferLoad.state() === 'pending') {
    bindLoad();
  }
};

// Listen for domready
$(Webflow.ready);

// Listen for window.onload and resolve deferred
bindLoad();

// Export commonjs module
module.exports = window.Webflow = Webflow;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var ctx = __webpack_require__(84);
var hide = __webpack_require__(13);
var has = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(40);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.clone = clone;
exports.addLast = addLast;
exports.addFirst = addFirst;
exports.removeLast = removeLast;
exports.removeFirst = removeFirst;
exports.insert = insert;
exports.removeAt = removeAt;
exports.replaceAt = replaceAt;
exports.getIn = getIn;
exports.set = set;
exports.setIn = setIn;
exports.update = update;
exports.updateIn = updateIn;
exports.merge = merge;
exports.mergeDeep = mergeDeep;
exports.mergeIn = mergeIn;
exports.omit = omit;
exports.addDefaults = addDefaults;


/*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */

var INVALID_ARGS = 'INVALID_ARGS';

// ===============================================
// ### Helpers
// ===============================================


function throwStr(msg) {
  throw new Error(msg);
}

function getKeysAndSymbols(obj) {
  var keys = Object.keys(obj);
  if (Object.getOwnPropertySymbols) {
    return keys.concat(Object.getOwnPropertySymbols(obj));
  }
  return keys;
}

var hasOwnProperty = {}.hasOwnProperty;

function clone(obj) {
  if (Array.isArray(obj)) return obj.slice();
  var keys = getKeysAndSymbols(obj);
  var out = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    out[key] = obj[key];
  }
  return out;
}

function doMerge(fAddDefaults, fDeep, first) {
  var out = first;
  !(out != null) && throwStr( false ? undefined : INVALID_ARGS);
  var fChanged = false;

  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  for (var idx = 0; idx < rest.length; idx++) {
    var obj = rest[idx];
    if (obj == null) continue;
    var keys = getKeysAndSymbols(obj);
    if (!keys.length) continue;
    for (var j = 0; j <= keys.length; j++) {
      var key = keys[j];
      if (fAddDefaults && out[key] !== undefined) continue;
      var nextVal = obj[key];
      if (fDeep && isObject(out[key]) && isObject(nextVal)) {
        nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
      }
      if (nextVal === undefined || nextVal === out[key]) continue;
      if (!fChanged) {
        fChanged = true;
        out = clone(out);
      }
      out[key] = nextVal;
    }
  }
  return out;
}

function isObject(o) {
  var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
  return o != null && (type === 'object' || type === 'function');
}

// _deepFreeze = (obj) ->
//   Object.freeze obj
//   for key in Object.getOwnPropertyNames obj
//     val = obj[key]
//     if isObject(val) and not Object.isFrozen val
//       _deepFreeze val
//   obj

// ===============================================
// -- ### Arrays
// ===============================================

// -- #### addLast()
// -- Returns a new array with an appended item or items.
// --
// -- Usage: `addLast<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addLast(arr, 'c')
// -- // ['a', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- arr3 = addLast(arr, ['c', 'd'])
// -- // ['a', 'b', 'c', 'd']
// -- ```
// `array.concat(val)` also handles the scalar case,
// but is apparently very slow
function addLast(array, val) {
  if (Array.isArray(val)) return array.concat(val);
  return array.concat([val]);
}

// -- #### addFirst()
// -- Returns a new array with a prepended item or items.
// --
// -- Usage: `addFirst<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addFirst(arr, 'c')
// -- // ['c', 'a', 'b']
// -- arr2 === arr
// -- // false
// -- arr3 = addFirst(arr, ['c', 'd'])
// -- // ['c', 'd', 'a', 'b']
// -- ```
function addFirst(array, val) {
  if (Array.isArray(val)) return val.concat(array);
  return [val].concat(array);
}

// -- #### removeLast()
// -- Returns a new array removing the last item.
// --
// -- Usage: `removeLast<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeLast(arr)
// -- // ['a']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeLast(arr3) === arr3
// -- // true
// -- ```
function removeLast(array) {
  if (!array.length) return array;
  return array.slice(0, array.length - 1);
}

// -- #### removeFirst()
// -- Returns a new array removing the first item.
// --
// -- Usage: `removeFirst<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeFirst(arr)
// -- // ['b']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeFirst(arr3) === arr3
// -- // true
// -- ```
function removeFirst(array) {
  if (!array.length) return array;
  return array.slice(1);
}

// -- #### insert()
// -- Returns a new array obtained by inserting an item or items
// -- at a specified index.
// --
// -- Usage: `insert<T>(array: Array<T>, idx: number, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = insert(arr, 1, 'd')
// -- // ['a', 'd', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- insert(arr, 1, ['d', 'e'])
// -- // ['a', 'd', 'e', 'b', 'c']
// -- ```
function insert(array, idx, val) {
  return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
}

// -- #### removeAt()
// -- Returns a new array obtained by removing an item at
// -- a specified index.
// --
// -- Usage: `removeAt<T>(array: Array<T>, idx: number): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = removeAt(arr, 1)
// -- // ['a', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- removeAt(arr, 4) === arr
// -- // true
// -- ```
function removeAt(array, idx) {
  if (idx >= array.length || idx < 0) return array;
  return array.slice(0, idx).concat(array.slice(idx + 1));
}

// -- #### replaceAt()
// -- Returns a new array obtained by replacing an item at
// -- a specified index. If the provided item is the same as
// -- (*referentially equal to*) the previous item at that position,
// -- the original array is returned.
// --
// -- Usage: `replaceAt<T>(array: Array<T>, idx: number, newItem: T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = replaceAt(arr, 1, 'd')
// -- // ['a', 'd', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- replaceAt(arr, 1, 'b') === arr
// -- // true
// -- ```
function replaceAt(array, idx, newItem) {
  if (array[idx] === newItem) return array;
  var len = array.length;
  var result = Array(len);
  for (var i = 0; i < len; i++) {
    result[i] = array[i];
  }
  result[idx] = newItem;
  return result;
}

// ===============================================
// -- ### Collections (objects and arrays)
// ===============================================
// -- The following types are used throughout this section
// -- ```js
// -- type ArrayOrObject = Array<any>|Object;
// -- type Key = number|string;
// -- ```

// -- #### getIn()
// -- Returns a value from an object at a given path. Works with
// -- nested arrays and objects. If the path does not exist, it returns
// -- `undefined`.
// --
// -- Usage: `getIn(obj: ?ArrayOrObject, path: Array<Key>): any`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: ['a', 'b', 'c'] }
// -- getIn(obj, ['d', 'd1'])
// -- // 3
// -- getIn(obj, ['e', 1])
// -- // 'b'
// -- ```
function getIn(obj, path) {
  !Array.isArray(path) && throwStr( false ? undefined : INVALID_ARGS);
  if (obj == null) return undefined;
  var ptr = obj;
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    ptr = ptr != null ? ptr[key] : undefined;
    if (ptr === undefined) return ptr;
  }
  return ptr;
}

// -- #### set()
// -- Returns a new object with a modified attribute.
// -- If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `set<T>(obj: ?T, key: Key, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = set(obj, 'b', 5)
// -- // { a: 1, b: 5, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- set(obj, 'b', 2) === obj
// -- // true
// -- ```
function set(obj, key, val) {
  var fallback = typeof key === 'number' ? [] : {};
  var finalObj = obj == null ? fallback : obj;
  if (finalObj[key] === val) return finalObj;
  var obj2 = clone(finalObj);
  obj2[key] = val;
  return obj2;
}

// -- #### setIn()
// -- Returns a new object with a modified **nested** attribute.
// --
// -- Notes:
// --
// -- * If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// -- * If the path does not exist, it will be created before setting
// -- the new value.
// --
// -- Usage: `setIn<T: ArrayOrObject>(obj: T, path: Array<Key>, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 = setIn(obj, ['d', 'd1'], 4)
// -- // { a: 1, b: 2, d: { d1: 4, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 === obj
// -- // false
// -- obj2.d === obj.d
// -- // false
// -- obj2.e === obj.e
// -- // true
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = setIn(obj, ['d', 'd1'], 3)
// -- // { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj3 === obj
// -- // true
// -- obj3.d === obj.d
// -- // true
// -- obj3.e === obj.e
// -- // true
// --
// -- // ... unknown paths create intermediate keys. Numeric segments are treated as array indices:
// -- setIn({ a: 3 }, ['unknown', 0, 'path'], 4)
// -- // { a: 3, unknown: [{ path: 4 }] }
// -- ```
function doSetIn(obj, path, val, idx) {
  var newValue = void 0;
  var key = path[idx];
  if (idx === path.length - 1) {
    newValue = val;
  } else {
    var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === 'number' ? [] : {};
    newValue = doSetIn(nestedObj, path, val, idx + 1);
  }
  return set(obj, key, newValue);
}

function setIn(obj, path, val) {
  if (!path.length) return val;
  return doSetIn(obj, path, val, 0);
}

// -- #### update()
// -- Returns a new object with a modified attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `update<T: ArrayOrObject>(obj: T, key: Key,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = update(obj, 'b', (val) => val + 1)
// -- // { a: 1, b: 3, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- update(obj, 'b', (val) => val) === obj
// -- // true
// -- ```
function update(obj, key, fnUpdate) {
  var prevVal = obj == null ? undefined : obj[key];
  var nextVal = fnUpdate(prevVal);
  return set(obj, key, nextVal);
}

// -- #### updateIn()
// -- Returns a new object with a modified **nested** attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `updateIn<T: ArrayOrObject>(obj: T, path: Array<Key>,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, d: { d1: 3, d2: 4 } }
// -- obj2 = updateIn(obj, ['d', 'd1'], (val) => val + 1)
// -- // { a: 1, d: { d1: 4, d2: 4 } }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = updateIn(obj, ['d', 'd1'], (val) => val)
// -- // { a: 1, d: { d1: 3, d2: 4 } }
// -- obj3 === obj
// -- // true
// -- ```
function updateIn(obj, path, fnUpdate) {
  var prevVal = getIn(obj, path);
  var nextVal = fnUpdate(prevVal);
  return setIn(obj, path, nextVal);
}

// -- #### merge()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- Similar to `Object.assign()`, but immutable.
// --
// -- Usage:
// --
// -- * `merge(obj1: Object, obj2: ?Object): Object`
// -- * `merge(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5 }
// -- obj3 = merge(obj1, obj2)
// -- // { a: 1, b: 2, c: 4, d: 5 }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- merge(obj1, { c: 3 }) === obj1
// -- // true
// -- ```
function merge(a, b, c, d, e, f) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
    rest[_key2 - 6] = arguments[_key2];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
}

// -- #### mergeDeep()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- If both the first and second entries are objects they are merged recursively.
// -- Similar to `Object.assign()`, but immutable, and deeply merging.
// --
// -- Usage:
// --
// -- * `mergeDeep(obj1: Object, obj2: ?Object): Object`
// -- * `mergeDeep(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: { a: 1 } }
// -- obj2 = { b: 3, c: { b: 2 } }
// -- obj3 = mergeDeep(obj1, obj2)
// -- // { a: 1, b: 3, c: { a: 1, b: 2 }  }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeDeep(obj1, { c: { a: 1 } }) === obj1
// -- // true
// -- ```
function mergeDeep(a, b, c, d, e, f) {
  for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
    rest[_key3 - 6] = arguments[_key3];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
}

// -- #### mergeIn()
// -- Similar to `merge()`, but merging the value at a given nested path.
// -- Note that the returned type is the same as that of the first argument.
// --
// -- Usage:
// --
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>, obj2: ?Object): T`
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>,
// -- ...objects: Array<?Object>): T`
// --
// -- ```js
// -- obj1 = { a: 1, d: { b: { d1: 3, d2: 4 } } }
// -- obj2 = { d3: 5 }
// -- obj3 = mergeIn(obj1, ['d', 'b'], obj2)
// -- // { a: 1, d: { b: { d1: 3, d2: 4, d3: 5 } } }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeIn(obj1, ['d', 'b'], { d2: 4 }) === obj1
// -- // true
// -- ```
function mergeIn(a, path, b, c, d, e, f) {
  var prevVal = getIn(a, path);
  if (prevVal == null) prevVal = {};
  var nextVal = void 0;

  for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
    rest[_key4 - 7] = arguments[_key4];
  }

  if (rest.length) {
    nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
  } else {
    nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
  }
  return setIn(a, path, nextVal);
}

// -- #### omit()
// -- Returns an object excluding one or several attributes.
// --
// -- Usage: `omit(obj: Object, attrs: Array<string>|string): Object`
//
// -- ```js
// -- obj = { a: 1, b: 2, c: 3, d: 4 }
// -- omit(obj, 'a')
// -- // { b: 2, c: 3, d: 4 }
// -- omit(obj, ['b', 'c'])
// -- // { a: 1, d: 4 }
// --
// -- // The same object is returned if there are no changes:
// -- omit(obj, 'z') === obj1
// -- // true
// -- ```
function omit(obj, attrs) {
  var omitList = Array.isArray(attrs) ? attrs : [attrs];
  var fDoSomething = false;
  for (var i = 0; i < omitList.length; i++) {
    if (hasOwnProperty.call(obj, omitList[i])) {
      fDoSomething = true;
      break;
    }
  }
  if (!fDoSomething) return obj;
  var out = {};
  var keys = getKeysAndSymbols(obj);
  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];
    if (omitList.indexOf(key) >= 0) continue;
    out[key] = obj[key];
  }
  return out;
}

// -- #### addDefaults()
// -- Returns a new object built as follows: `undefined` keys in the first one
// -- are filled in with the corresponding values from the second one
// -- (even if they are `null`).
// --
// -- Usage:
// --
// -- * `addDefaults(obj: Object, defaults: Object): Object`
// -- * `addDefaults(obj: Object, ...defaultObjects: Array<?Object>): Object`
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5, e: null }
// -- obj3 = addDefaults(obj1, obj2)
// -- // { a: 1, b: 2, c: 3, d: 5, e: null }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- addDefaults(obj1, { c: 4 }) === obj1
// -- // true
// -- ```
function addDefaults(a, b, c, d, e, f) {
  for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
    rest[_key5 - 6] = arguments[_key5];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
}

// ===============================================
// ### Public API
// ===============================================
var timm = {
  clone: clone,
  addLast: addLast,
  addFirst: addFirst,
  removeLast: removeLast,
  removeFirst: removeFirst,
  insert: insert,
  removeAt: removeAt,
  replaceAt: replaceAt,

  getIn: getIn,
  // eslint-disable-next-line object-shorthand
  set: set, // so that flow doesn't complain
  setIn: setIn,
  update: update,
  updateIn: updateIn,
  merge: merge,
  mergeDeep: mergeDeep,
  mergeIn: mergeIn,
  omit: omit,
  addDefaults: addDefaults
};

exports.default = timm;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(139);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(153);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(89);
var enumBugKeys = __webpack_require__(49);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(183),
    listCacheDelete = __webpack_require__(184),
    listCacheGet = __webpack_require__(185),
    listCacheHas = __webpack_require__(186),
    listCacheSet = __webpack_require__(187);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(59);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(207);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(111),
    baseKeys = __webpack_require__(67),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(225),
    isObjectLike = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(70);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(71),
    stringToPath = __webpack_require__(236),
    toString = __webpack_require__(117);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(248);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(263);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(48)('keys');
var uid = __webpack_require__(30);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(28) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(44);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(52);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSFORM_STYLE_PREFIXED = exports.TRANSFORM_PREFIXED = exports.FLEX_PREFIXED = exports.ELEMENT_MATCHES = exports.withBrowser = exports.IS_BROWSER_ENV = undefined;

var _find = __webpack_require__(100);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var IS_BROWSER_ENV = exports.IS_BROWSER_ENV = typeof window !== 'undefined'; /* eslint-env browser */
var withBrowser = exports.withBrowser = function (fn, fallback) {
  if (IS_BROWSER_ENV) {
    return fn();
  }
  return fallback;
};

var ELEMENT_MATCHES = exports.ELEMENT_MATCHES = withBrowser(function () {
  return (0, _find2.default)(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (key) {
    return key in Element.prototype;
  });
});

var FLEX_PREFIXED = exports.FLEX_PREFIXED = withBrowser(function () {
  var el = document.createElement('i');
  var values = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
  var none = '';
  try {
    var length = values.length;

    for (var i = 0; i < length; i++) {
      var value = values[i];
      el.style.display = value;
      if (el.style.display === value) {
        return value;
      }
    }
    return none;
  } catch (err) {
    return none;
  }
}, 'flex');

var TRANSFORM_PREFIXED = exports.TRANSFORM_PREFIXED = withBrowser(function () {
  var el = document.createElement('i');
  if (el.style.transform == null) {
    var prefixes = ['Webkit', 'Moz', 'ms'];
    var suffix = 'Transform';
    var length = prefixes.length;

    for (var i = 0; i < length; i++) {
      var prop = prefixes[i] + suffix;
      if (el.style[prop] !== undefined) {
        return prop;
      }
    }
  }
  return 'transform';
}, 'transform');

var TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split('transform')[0];

var TRANSFORM_STYLE_PREFIXED = exports.TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + 'TransformStyle' : 'transformStyle';

/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(199),
    mapCacheDelete = __webpack_require__(206),
    mapCacheGet = __webpack_require__(208),
    mapCacheHas = __webpack_require__(209),
    mapCacheSet = __webpack_require__(210);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(226);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(112)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(227),
    baseUnary = __webpack_require__(228),
    nodeUtil = __webpack_require__(229);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(68),
    nativeKeys = __webpack_require__(230);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(231),
    Map = __webpack_require__(60),
    Promise = __webpack_require__(232),
    Set = __webpack_require__(233),
    WeakMap = __webpack_require__(114),
    baseGetTag = __webpack_require__(15),
    toSource = __webpack_require__(105);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    toKey = __webpack_require__(25);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(40);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(245);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isSymbol = __webpack_require__(40);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TRANSFORM_MOVE = exports.TRANSFORM_MOVE = 'TRANSFORM_MOVE';
var TRANSFORM_SCALE = exports.TRANSFORM_SCALE = 'TRANSFORM_SCALE';
var TRANSFORM_ROTATE = exports.TRANSFORM_ROTATE = 'TRANSFORM_ROTATE';
var TRANSFORM_SKEW = exports.TRANSFORM_SKEW = 'TRANSFORM_SKEW';

var STYLE_OPACITY = exports.STYLE_OPACITY = 'STYLE_OPACITY';
var STYLE_SIZE = exports.STYLE_SIZE = 'STYLE_SIZE';
var STYLE_BOX_SHADOW = exports.STYLE_BOX_SHADOW = 'STYLE_BOX_SHADOW';
var STYLE_FILTER = exports.STYLE_FILTER = 'STYLE_FILTER';
var STYLE_BACKGROUND_COLOR = exports.STYLE_BACKGROUND_COLOR = 'STYLE_BACKGROUND_COLOR';
var STYLE_BORDER = exports.STYLE_BORDER = 'STYLE_BORDER';
var STYLE_TEXT_COLOR = exports.STYLE_TEXT_COLOR = 'STYLE_TEXT_COLOR';

var GENERAL_COMBO_CLASS = exports.GENERAL_COMBO_CLASS = 'GENERAL_COMBO_CLASS';
var GENERAL_DISPLAY = exports.GENERAL_DISPLAY = 'GENERAL_DISPLAY';
var GENERAL_CONTINUOUS_ACTION = exports.GENERAL_CONTINUOUS_ACTION = 'GENERAL_CONTINUOUS_ACTION';
var GENERAL_START_ACTION = exports.GENERAL_START_ACTION = 'GENERAL_START_ACTION';
var GENERAL_STOP_ACTION = exports.GENERAL_STOP_ACTION = 'GENERAL_STOP_ACTION';
var GENERAL_LOOP = exports.GENERAL_LOOP = 'GENERAL_LOOP';

var OBJECT_VALUE = exports.OBJECT_VALUE = 'OBJECT_VALUE';

var FADE_EFFECT = exports.FADE_EFFECT = 'FADE_EFFECT';
var SLIDE_EFFECT = exports.SLIDE_EFFECT = 'SLIDE_EFFECT';
var BLUR_EFFECT = exports.BLUR_EFFECT = 'BLUR_EFFECT';
var GROW_EFFECT = exports.GROW_EFFECT = 'GROW_EFFECT';
var GROW_BIG_EFFECT = exports.GROW_BIG_EFFECT = 'GROW_BIG_EFFECT';
var SHRINK_EFFECT = exports.SHRINK_EFFECT = 'SHRINK_EFFECT';
var SHRINK_BIG_EFFECT = exports.SHRINK_BIG_EFFECT = 'SHRINK_BIG_EFFECT';
var SPIN_EFFECT = exports.SPIN_EFFECT = 'SPIN_EFFECT';
var FLY_EFFECT = exports.FLY_EFFECT = 'FLY_EFFECT';
var POP_EFFECT = exports.POP_EFFECT = 'POP_EFFECT';
var FLIP_EFFECT = exports.FLIP_EFFECT = 'FLIP_EFFECT';
var JIGGLE_EFFECT = exports.JIGGLE_EFFECT = 'JIGGLE_EFFECT';
var PULSE_EFFECT = exports.PULSE_EFFECT = 'PULSE_EFFECT';
var DROP_EFFECT = exports.DROP_EFFECT = 'DROP_EFFECT';
var BLINK_EFFECT = exports.BLINK_EFFECT = 'BLINK_EFFECT';
var BOUNCE_EFFECT = exports.BOUNCE_EFFECT = 'BOUNCE_EFFECT';
var FLIP_LEFT_TO_RIGHT_EFFECT = exports.FLIP_LEFT_TO_RIGHT_EFFECT = 'FLIP_LEFT_TO_RIGHT_EFFECT';
var FLIP_RIGHT_TO_LEFT_EFFECT = exports.FLIP_RIGHT_TO_LEFT_EFFECT = 'FLIP_RIGHT_TO_LEFT_EFFECT';
var RUBBER_BAND_EFFECT = exports.RUBBER_BAND_EFFECT = 'RUBBER_BAND_EFFECT';
var JELLO_EFFECT = exports.JELLO_EFFECT = 'JELLO_EFFECT';

var PLUGIN_BODYMOVIN = exports.PLUGIN_BODYMOVIN = 'PLUGIN_BODYMOVIN';

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IX2_ID_DELIMITER = exports.IX2_ID_DELIMITER = '|';
var WF_PAGE = exports.WF_PAGE = 'data-wf-page';
var W_MOD_JS = exports.W_MOD_JS = 'w-mod-js';
var W_MOD_IX = exports.W_MOD_IX = 'w-mod-ix';
var BOUNDARY_SELECTOR = exports.BOUNDARY_SELECTOR = '.w-dyn-item';
var CONFIG_X_VALUE = exports.CONFIG_X_VALUE = 'xValue';
var CONFIG_Y_VALUE = exports.CONFIG_Y_VALUE = 'yValue';
var CONFIG_Z_VALUE = exports.CONFIG_Z_VALUE = 'zValue';
var CONFIG_VALUE = exports.CONFIG_VALUE = 'value';
var CONFIG_X_UNIT = exports.CONFIG_X_UNIT = 'xUnit';
var CONFIG_Y_UNIT = exports.CONFIG_Y_UNIT = 'yUnit';
var CONFIG_Z_UNIT = exports.CONFIG_Z_UNIT = 'zUnit';
var CONFIG_UNIT = exports.CONFIG_UNIT = 'unit';
var TRANSFORM = exports.TRANSFORM = 'transform';
var TRANSLATE_X = exports.TRANSLATE_X = 'translateX';
var TRANSLATE_Y = exports.TRANSLATE_Y = 'translateY';
var TRANSLATE_Z = exports.TRANSLATE_Z = 'translateZ';
var TRANSLATE_3D = exports.TRANSLATE_3D = 'translate3d';
var SCALE_X = exports.SCALE_X = 'scaleX';
var SCALE_Y = exports.SCALE_Y = 'scaleY';
var SCALE_Z = exports.SCALE_Z = 'scaleZ';
var SCALE_3D = exports.SCALE_3D = 'scale3d';
var ROTATE_X = exports.ROTATE_X = 'rotateX';
var ROTATE_Y = exports.ROTATE_Y = 'rotateY';
var ROTATE_Z = exports.ROTATE_Z = 'rotateZ';
var SKEW = exports.SKEW = 'skew';
var SKEW_X = exports.SKEW_X = 'skewX';
var SKEW_Y = exports.SKEW_Y = 'skewY';
var OPACITY = exports.OPACITY = 'opacity';
var FILTER = exports.FILTER = 'filter';
var WIDTH = exports.WIDTH = 'width';
var HEIGHT = exports.HEIGHT = 'height';
var BACKGROUND_COLOR = exports.BACKGROUND_COLOR = 'backgroundColor';
var BACKGROUND = exports.BACKGROUND = 'background';
var BORDER_COLOR = exports.BORDER_COLOR = 'borderColor';
var COLOR = exports.COLOR = 'color';
var DISPLAY = exports.DISPLAY = 'display';
var FLEX = exports.FLEX = 'flex';
var WILL_CHANGE = exports.WILL_CHANGE = 'willChange';
var AUTO = exports.AUTO = 'AUTO';
var COMMA_DELIMITER = exports.COMMA_DELIMITER = ',';
var COLON_DELIMITER = exports.COLON_DELIMITER = ':';
var BAR_DELIMITER = exports.BAR_DELIMITER = '|';
var CHILDREN = exports.CHILDREN = 'CHILDREN';
var IMMEDIATE_CHILDREN = exports.IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
var SIBLINGS = exports.SIBLINGS = 'SIBLINGS';
var PARENT = exports.PARENT = 'PARENT';
var PRESERVE_3D = exports.PRESERVE_3D = 'preserve-3d';
var HTML_ELEMENT = exports.HTML_ELEMENT = 'HTML_ELEMENT';
var PLAIN_OBJECT = exports.PLAIN_OBJECT = 'PLAIN_OBJECT';
var ABSTRACT_NODE = exports.ABSTRACT_NODE = 'ABSTRACT_NODE';
var RENDER_TRANSFORM = exports.RENDER_TRANSFORM = 'RENDER_TRANSFORM';
var RENDER_GENERAL = exports.RENDER_GENERAL = 'RENDER_GENERAL';
var RENDER_STYLE = exports.RENDER_STYLE = 'RENDER_STYLE';
var RENDER_PLUGIN = exports.RENDER_PLUGIN = 'RENDER_PLUGIN';

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewportWidthChanged = exports.actionListPlaybackChanged = exports.elementStateChanged = exports.instanceRemoved = exports.instanceStarted = exports.instanceAdded = exports.parameterChanged = exports.animationFrameChanged = exports.eventStateChanged = exports.eventListenerAdded = exports.clearRequested = exports.stopRequested = exports.playbackRequested = exports.previewRequested = exports.sessionStopped = exports.sessionStarted = exports.sessionInitialized = exports.rawDataImported = undefined;

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _shared = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _shared$IX2EngineActi = _shared.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _shared$IX2EngineActi.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED = _shared$IX2EngineActi.IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED = _shared$IX2EngineActi.IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED = _shared$IX2EngineActi.IX2_SESSION_STOPPED,
    IX2_PREVIEW_REQUESTED = _shared$IX2EngineActi.IX2_PREVIEW_REQUESTED,
    IX2_PLAYBACK_REQUESTED = _shared$IX2EngineActi.IX2_PLAYBACK_REQUESTED,
    IX2_STOP_REQUESTED = _shared$IX2EngineActi.IX2_STOP_REQUESTED,
    IX2_CLEAR_REQUESTED = _shared$IX2EngineActi.IX2_CLEAR_REQUESTED,
    IX2_EVENT_LISTENER_ADDED = _shared$IX2EngineActi.IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED = _shared$IX2EngineActi.IX2_EVENT_STATE_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED = _shared$IX2EngineActi.IX2_ANIMATION_FRAME_CHANGED,
    IX2_PARAMETER_CHANGED = _shared$IX2EngineActi.IX2_PARAMETER_CHANGED,
    IX2_INSTANCE_ADDED = _shared$IX2EngineActi.IX2_INSTANCE_ADDED,
    IX2_INSTANCE_STARTED = _shared$IX2EngineActi.IX2_INSTANCE_STARTED,
    IX2_INSTANCE_REMOVED = _shared$IX2EngineActi.IX2_INSTANCE_REMOVED,
    IX2_ELEMENT_STATE_CHANGED = _shared$IX2EngineActi.IX2_ELEMENT_STATE_CHANGED,
    IX2_ACTION_LIST_PLAYBACK_CHANGED = _shared$IX2EngineActi.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_VIEWPORT_WIDTH_CHANGED = _shared$IX2EngineActi.IX2_VIEWPORT_WIDTH_CHANGED;
var GENERAL_START_ACTION = _shared.IX2EngineItemTypes.GENERAL_START_ACTION;
var reifyState = _shared.IX2VanillaUtils.reifyState;


var rawDataImported = exports.rawDataImported = function (rawData) {
  return {
    type: IX2_RAW_DATA_IMPORTED,
    payload: (0, _extends3.default)({}, reifyState(rawData))
  };
};

var sessionInitialized = exports.sessionInitialized = function (_ref) {
  var hasBoundaryNodes = _ref.hasBoundaryNodes;
  return {
    type: IX2_SESSION_INITIALIZED,
    payload: {
      hasBoundaryNodes: hasBoundaryNodes
    }
  };
};

var sessionStarted = exports.sessionStarted = function () {
  return {
    type: IX2_SESSION_STARTED,
    payload: {}
  };
};

var sessionStopped = exports.sessionStopped = function () {
  return {
    type: IX2_SESSION_STOPPED,
    payload: {}
  };
};

var previewRequested = exports.previewRequested = function (_ref2) {
  var rawData = _ref2.rawData;
  return {
    type: IX2_PREVIEW_REQUESTED,
    payload: {
      rawData: rawData
    }
  };
};

var playbackRequested = exports.playbackRequested = function (_ref3) {
  var _ref3$actionTypeId = _ref3.actionTypeId,
      actionTypeId = _ref3$actionTypeId === undefined ? GENERAL_START_ACTION : _ref3$actionTypeId,
      actionListId = _ref3.actionListId,
      actionItemId = _ref3.actionItemId,
      eventId = _ref3.eventId,
      allowEvents = _ref3.allowEvents,
      immediate = _ref3.immediate,
      verbose = _ref3.verbose,
      rawData = _ref3.rawData;
  return {
    type: IX2_PLAYBACK_REQUESTED,
    payload: {
      actionTypeId: actionTypeId,
      actionListId: actionListId,
      actionItemId: actionItemId,
      eventId: eventId,
      allowEvents: allowEvents,
      immediate: immediate,
      verbose: verbose,
      rawData: rawData
    }
  };
};

var stopRequested = exports.stopRequested = function (actionListId) {
  return {
    type: IX2_STOP_REQUESTED,
    payload: {
      actionListId: actionListId
    }
  };
};

var clearRequested = exports.clearRequested = function () {
  return {
    type: IX2_CLEAR_REQUESTED,
    payload: {}
  };
};

var eventListenerAdded = exports.eventListenerAdded = function (target, listenerParams) {
  return {
    type: IX2_EVENT_LISTENER_ADDED,
    payload: {
      target: target,
      listenerParams: listenerParams
    }
  };
};

var eventStateChanged = exports.eventStateChanged = function (stateKey, newState) {
  return {
    type: IX2_EVENT_STATE_CHANGED,
    payload: {
      stateKey: stateKey,
      newState: newState
    }
  };
};

var animationFrameChanged = exports.animationFrameChanged = function (now, parameters) {
  return {
    type: IX2_ANIMATION_FRAME_CHANGED,
    payload: {
      now: now,
      parameters: parameters
    }
  };
};

var parameterChanged = exports.parameterChanged = function (key, value) {
  return {
    type: IX2_PARAMETER_CHANGED,
    payload: {
      key: key,
      value: value
    }
  };
};

var instanceAdded = exports.instanceAdded = function (options) {
  return {
    type: IX2_INSTANCE_ADDED,
    payload: (0, _extends3.default)({}, options)
  };
};

var instanceStarted = exports.instanceStarted = function (instanceId) {
  return {
    type: IX2_INSTANCE_STARTED,
    payload: {
      instanceId: instanceId
    }
  };
};

var instanceRemoved = exports.instanceRemoved = function (instanceId) {
  return {
    type: IX2_INSTANCE_REMOVED,
    payload: {
      instanceId: instanceId
    }
  };
};

var elementStateChanged = exports.elementStateChanged = function (elementId, actionTypeId, current, actionItem) {
  return {
    type: IX2_ELEMENT_STATE_CHANGED,
    payload: {
      elementId: elementId,
      actionTypeId: actionTypeId,
      current: current,
      actionItem: actionItem
    }
  };
};

var actionListPlaybackChanged = exports.actionListPlaybackChanged = function (_ref4) {
  var actionListId = _ref4.actionListId,
      isPlaying = _ref4.isPlaying;
  return {
    type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
    payload: {
      actionListId: actionListId,
      isPlaying: isPlaying
    }
  };
};

var viewportWidthChanged = exports.viewportWidthChanged = function (_ref5) {
  var width = _ref5.width,
      mediaQueries = _ref5.mediaQueries;
  return {
    type: IX2_VIEWPORT_WIDTH_CHANGED,
    payload: {
      width: width,
      mediaQueries: mediaQueries
    }
  };
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(133),
    baseLodash = __webpack_require__(79);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(133),
    baseLodash = __webpack_require__(79);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/* prettier-ignore */

var _typeof2 = __webpack_require__(27);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.tram = function (a) {
  function b(a, b) {
    var c = new M.Bare();return c.init(a, b);
  }function c(a) {
    return a.replace(/[A-Z]/g, function (a) {
      return "-" + a.toLowerCase();
    });
  }function d(a) {
    var b = parseInt(a.slice(1), 16),
        c = b >> 16 & 255,
        d = b >> 8 & 255,
        e = 255 & b;return [c, d, e];
  }function e(a, b, c) {
    return "#" + (1 << 24 | a << 16 | b << 8 | c).toString(16).slice(1);
  }function f() {}function g(a, b) {
    j("Type warning: Expected: [" + a + "] Got: [" + (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) + "] " + b);
  }function h(a, b, c) {
    j("Units do not match [" + a + "]: " + b + ", " + c);
  }function i(a, b, c) {
    if (void 0 !== b && (c = b), void 0 === a) return c;var d = c;return $.test(a) || !_.test(a) ? d = parseInt(a, 10) : _.test(a) && (d = 1e3 * parseFloat(a)), 0 > d && (d = 0), d === d ? d : c;
  }function j(a) {
    U.debug && window && window.console.warn(a);
  }function k(a) {
    for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
      var e = a[b];e && d.push(e);
    }return d;
  }var l = function (a, b, c) {
    function d(a) {
      return "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a));
    }function e(a) {
      return "function" == typeof a;
    }function f() {}function g(h, i) {
      function j() {
        var a = new k();return e(a.init) && a.init.apply(a, arguments), a;
      }function k() {}i === c && (i = h, h = Object), j.Bare = k;var l,
          m = f[a] = h[a],
          n = k[a] = j[a] = new f();return n.constructor = j, j.mixin = function (b) {
        return k[a] = j[a] = g(j, b)[a], j;
      }, j.open = function (a) {
        if (l = {}, e(a) ? l = a.call(j, n, m, j, h) : d(a) && (l = a), d(l)) for (var c in l) {
          b.call(l, c) && (n[c] = l[c]);
        }return e(n.init) || (n.init = h), j;
      }, j.open(i);
    }return g;
  }("prototype", {}.hasOwnProperty),
      m = { ease: ["ease", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;return b + c * (-2.75 * f * e + 11 * e * e + -15.5 * f + 8 * e + .25 * a);
    }], "ease-in": ["ease-in", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;return b + c * (-1 * f * e + 3 * e * e + -3 * f + 2 * e);
    }], "ease-out": ["ease-out", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;return b + c * (.3 * f * e + -1.6 * e * e + 2.2 * f + -1.8 * e + 1.9 * a);
    }], "ease-in-out": ["ease-in-out", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;return b + c * (2 * f * e + -5 * e * e + 2 * f + 2 * e);
    }], linear: ["linear", function (a, b, c, d) {
      return c * a / d + b;
    }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (a, b, c, d) {
      return c * (a /= d) * a + b;
    }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (a, b, c, d) {
      return -c * (a /= d) * (a - 2) + b;
    }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
    }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (a, b, c, d) {
      return c * (a /= d) * a * a + b;
    }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (a, b, c, d) {
      return c * ((a = a / d - 1) * a * a + 1) + b;
    }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b;
    }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (a, b, c, d) {
      return c * (a /= d) * a * a * a + b;
    }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (a, b, c, d) {
      return -c * ((a = a / d - 1) * a * a * a - 1) + b;
    }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b;
    }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (a, b, c, d) {
      return c * (a /= d) * a * a * a * a + b;
    }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (a, b, c, d) {
      return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
    }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b;
    }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (a, b, c, d) {
      return -c * Math.cos(a / d * (Math.PI / 2)) + c + b;
    }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (a, b, c, d) {
      return c * Math.sin(a / d * (Math.PI / 2)) + b;
    }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (a, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b;
    }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (a, b, c, d) {
      return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
    }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (a, b, c, d) {
      return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b;
    }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (a, b, c, d) {
      return 0 === a ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b;
    }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (a, b, c, d) {
      return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
    }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (a, b, c, d) {
      return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
    }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
    }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b;
    }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b;
    }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b;
    }] },
      n = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
      o = document,
      p = window,
      q = "bkwld-tram",
      r = /[\-\.0-9]/g,
      s = /[A-Z]/,
      t = "number",
      u = /^(rgb|#)/,
      v = /(em|cm|mm|in|pt|pc|px)$/,
      w = /(em|cm|mm|in|pt|pc|px|%)$/,
      x = /(deg|rad|turn)$/,
      y = "unitless",
      z = /(all|none) 0s ease 0s/,
      A = /^(width|height)$/,
      B = " ",
      C = o.createElement("a"),
      D = ["Webkit", "Moz", "O", "ms"],
      E = ["-webkit-", "-moz-", "-o-", "-ms-"],
      F = function F(a) {
    if (a in C.style) return { dom: a, css: a };var b,
        c,
        d = "",
        e = a.split("-");for (b = 0; b < e.length; b++) {
      d += e[b].charAt(0).toUpperCase() + e[b].slice(1);
    }for (b = 0; b < D.length; b++) {
      if (c = D[b] + d, c in C.style) return { dom: c, css: E[b] + a };
    }
  },
      G = b.support = { bind: Function.prototype.bind, transform: F("transform"), transition: F("transition"), backface: F("backface-visibility"), timing: F("transition-timing-function") };if (G.transition) {
    var H = G.timing.dom;if (C.style[H] = m["ease-in-back"][0], !C.style[H]) for (var I in n) {
      m[I][0] = n[I];
    }
  }var J = b.frame = function () {
    var a = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;return a && G.bind ? a.bind(p) : function (a) {
      p.setTimeout(a, 16);
    };
  }(),
      K = b.now = function () {
    var a = p.performance,
        b = a && (a.now || a.webkitNow || a.msNow || a.mozNow);return b && G.bind ? b.bind(a) : Date.now || function () {
      return +new Date();
    };
  }(),
      L = l(function (b) {
    function d(a, b) {
      var c = k(("" + a).split(B)),
          d = c[0];b = b || {};var e = Y[d];if (!e) return j("Unsupported property: " + d);if (!b.weak || !this.props[d]) {
        var f = e[0],
            g = this.props[d];return g || (g = this.props[d] = new f.Bare()), g.init(this.$el, c, e, b), g;
      }
    }function e(a, b, c) {
      if (a) {
        var e = typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a);if (b || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == e && b) return this.timer = new S({ duration: a, context: this, complete: h }), void (this.active = !0);if ("string" == e && b) {
          switch (a) {case "hide":
              o.call(this);break;case "stop":
              l.call(this);break;case "redraw":
              p.call(this);break;default:
              d.call(this, a, c && c[1]);}return h.call(this);
        }if ("function" == e) return void a.call(this, this);if ("object" == e) {
          var f = 0;u.call(this, a, function (a, b) {
            a.span > f && (f = a.span), a.stop(), a.animate(b);
          }, function (a) {
            "wait" in a && (f = i(a.wait, 0));
          }), t.call(this), f > 0 && (this.timer = new S({ duration: f, context: this }), this.active = !0, b && (this.timer.complete = h));var g = this,
              j = !1,
              k = {};J(function () {
            u.call(g, a, function (a) {
              a.active && (j = !0, k[a.name] = a.nextStyle);
            }), j && g.$el.css(k);
          });
        }
      }
    }function f(a) {
      a = i(a, 0), this.active ? this.queue.push({ options: a }) : (this.timer = new S({ duration: a, context: this, complete: h }), this.active = !0);
    }function g(a) {
      return this.active ? (this.queue.push({ options: a, args: arguments }), void (this.timer.complete = h)) : j("No active transition timer. Use start() or wait() before then().");
    }function h() {
      if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
        var a = this.queue.shift();e.call(this, a.options, !0, a.args);
      }
    }function l(a) {
      this.timer && this.timer.destroy(), this.queue = [], this.active = !1;var b;"string" == typeof a ? (b = {}, b[a] = 1) : b = "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) && null != a ? a : this.props, u.call(this, b, v), t.call(this);
    }function m(a) {
      l.call(this, a), u.call(this, a, w, x);
    }function n(a) {
      "string" != typeof a && (a = "block"), this.el.style.display = a;
    }function o() {
      l.call(this), this.el.style.display = "none";
    }function p() {
      this.el.offsetHeight;
    }function r() {
      l.call(this), a.removeData(this.el, q), this.$el = this.el = null;
    }function t() {
      var a,
          b,
          c = [];this.upstream && c.push(this.upstream);for (a in this.props) {
        b = this.props[a], b.active && c.push(b.string);
      }c = c.join(","), this.style !== c && (this.style = c, this.el.style[G.transition.dom] = c);
    }function u(a, b, e) {
      var f,
          g,
          h,
          i,
          j = b !== v,
          k = {};for (f in a) {
        h = a[f], f in Z ? (k.transform || (k.transform = {}), k.transform[f] = h) : (s.test(f) && (f = c(f)), f in Y ? k[f] = h : (i || (i = {}), i[f] = h));
      }for (f in k) {
        if (h = k[f], g = this.props[f], !g) {
          if (!j) continue;g = d.call(this, f);
        }b.call(this, g, h);
      }e && i && e.call(this, i);
    }function v(a) {
      a.stop();
    }function w(a, b) {
      a.set(b);
    }function x(a) {
      this.$el.css(a);
    }function y(a, c) {
      b[a] = function () {
        return this.children ? A.call(this, c, arguments) : (this.el && c.apply(this, arguments), this);
      };
    }function A(a, b) {
      var c,
          d = this.children.length;for (c = 0; d > c; c++) {
        a.apply(this.children[c], b);
      }return this;
    }b.init = function (b) {
      if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
        var c = W(this.el, "transition");c && !z.test(c) && (this.upstream = c);
      }G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
    }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);
  }),
      M = l(L, function (b) {
    function c(b, c) {
      var d = a.data(b, q) || a.data(b, q, new L.Bare());return d.el || d.init(b), c ? d.start(c) : d;
    }b.init = function (b, d) {
      var e = a(b);if (!e.length) return this;if (1 === e.length) return c(e[0], d);var f = [];return e.each(function (a, b) {
        f.push(c(b, d));
      }), this.children = f, this;
    };
  }),
      N = l(function (a) {
    function b() {
      var a = this.get();this.update("auto");var b = this.get();return this.update(a), b;
    }function c(a, b, c) {
      return void 0 !== b && (c = b), a in m ? a : c;
    }function d(a) {
      var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
    }var f = { duration: 500, ease: "ease", delay: 0 };a.init = function (a, b, d, e) {
      this.$el = a, this.el = a[0];var g = b[0];d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
    }, a.set = function (a) {
      a = this.convert(a, this.type), this.update(a), this.redraw();
    }, a.transition = function (a) {
      this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
    }, a.fallback = function (a) {
      var c = this.el.style[this.name] || this.convert(this.get(), this.type);a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({ from: c, to: a, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
    }, a.get = function () {
      return W(this.el, this.name);
    }, a.update = function (a) {
      V(this.el, this.name, a);
    }, a.stop = function () {
      (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));var a = this.tween;a && a.context && a.destroy();
    }, a.convert = function (a, b) {
      if ("auto" == a && this.auto) return a;var c,
          e = "number" == typeof a,
          f = "string" == typeof a;switch (b) {case t:
          if (e) return a;if (f && "" === a.replace(r, "")) return +a;c = "number(unitless)";break;case u:
          if (f) {
            if ("" === a && this.original) return this.original;if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
          }c = "hex or rgb string";break;case v:
          if (e) return a + this.unit;if (f && b.test(a)) return a;c = "number(px) or string(unit)";break;case w:
          if (e) return a + this.unit;if (f && b.test(a)) return a;c = "number(px) or string(unit or %)";break;case x:
          if (e) return a + this.angle;if (f && b.test(a)) return a;c = "number(deg) or string(angle)";break;case y:
          if (e) return a;if (f && w.test(a)) return a;c = "number(unitless) or string(unit or %)";}return g(c, a), a;
    }, a.redraw = function () {
      this.el.offsetHeight;
    };
  }),
      O = l(N, function (a, b) {
    a.init = function () {
      b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
    };
  }),
      P = l(N, function (a, b) {
    a.init = function () {
      b.init.apply(this, arguments), this.animate = this.fallback;
    }, a.get = function () {
      return this.$el[this.name]();
    }, a.update = function (a) {
      this.$el[this.name](a);
    };
  }),
      Q = l(N, function (a, b) {
    function c(a, b) {
      var c, d, e, f, g;for (c in a) {
        f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
      }
    }a.init = function () {
      b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
    }, a.set = function (a) {
      c.call(this, a, function (a, b) {
        this.current[a] = b;
      }), V(this.el, this.name, this.style(this.current)), this.redraw();
    }, a.transition = function (a) {
      var b = this.values(a);this.tween = new T({ current: this.current, values: b, duration: this.duration, delay: this.delay, ease: this.ease });var c,
          d = {};for (c in this.current) {
        d[c] = c in b ? b[c] : this.current[c];
      }this.active = !0, this.nextStyle = this.style(d);
    }, a.fallback = function (a) {
      var b = this.values(a);this.tween = new T({ current: this.current, values: b, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
    }, a.update = function () {
      V(this.el, this.name, this.style(this.current));
    }, a.style = function (a) {
      var b,
          c = "";for (b in a) {
        c += b + "(" + a[b] + ") ";
      }return c;
    }, a.values = function (a) {
      var b,
          d = {};return c.call(this, a, function (a, c, e) {
        d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
      }), d;
    };
  }),
      R = l(function (b) {
    function c(a) {
      1 === n.push(a) && J(g);
    }function g() {
      var a,
          b,
          c,
          d = n.length;if (d) for (J(g), b = K(), a = d; a--;) {
        c = n[a], c && c.render(b);
      }
    }function i(b) {
      var c,
          d = a.inArray(b, n);d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
    }function j(a) {
      return Math.round(a * o) / o;
    }function k(a, b, c) {
      return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
    }var l = { ease: m.ease[1], from: 0, to: 1 };b.init = function (a) {
      this.duration = a.duration || 0, this.delay = a.delay || 0;var b = a.ease || l.ease;m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;var c = a.from,
          d = a.to;void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
    }, b.play = function () {
      this.active || (this.start || (this.start = K()), this.active = !0, c(this));
    }, b.stop = function () {
      this.active && (this.active = !1, i(this));
    }, b.render = function (a) {
      var b,
          c = a - this.start;if (this.delay) {
        if (c <= this.delay) return;c -= this.delay;
      }if (c < this.duration) {
        var d = this.ease(c, 0, 1, this.duration);return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
      }b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
    }, b.format = function (a, b) {
      if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);if (!this.unit) {
        var c = b.replace(r, ""),
            e = a.replace(r, "");c !== e && h("tween", b, a), this.unit = c;
      }b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
    }, b.destroy = function () {
      this.stop(), this.context = null, this.ease = this.update = this.complete = f;
    };var n = [],
        o = 1e3;
  }),
      S = l(R, function (a) {
    a.init = function (a) {
      this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
    }, a.render = function (a) {
      var b = a - this.start;b < this.duration || (this.complete.call(this.context), this.destroy());
    };
  }),
      T = l(R, function (a, b) {
    a.init = function (a) {
      this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;var b, c;for (b in a.values) {
        c = a.values[b], this.current[b] !== c && this.tweens.push(new R({ name: b, from: this.current[b], to: c, duration: a.duration, delay: a.delay, ease: a.ease, autoplay: !1 }));
      }this.play();
    }, a.render = function (a) {
      var b,
          c,
          d = this.tweens.length,
          e = !1;for (b = d; b--;) {
        c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
      }return e ? void (this.update && this.update.call(this.context)) : this.destroy();
    }, a.destroy = function () {
      if (b.destroy.call(this), this.tweens) {
        var a,
            c = this.tweens.length;for (a = c; a--;) {
          this.tweens[a].destroy();
        }this.tweens = null, this.current = null;
      }
    };
  }),
      U = b.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !G.transition, agentTests: [] };b.fallback = function (a) {
    if (!G.transition) return U.fallback = !0;U.agentTests.push("(" + a + ")");var b = new RegExp(U.agentTests.join("|"), "i");U.fallback = b.test(navigator.userAgent);
  }, b.fallback("6.0.[2-5] Safari"), b.tween = function (a) {
    return new R(a);
  }, b.delay = function (a, b, c) {
    return new S({ complete: b, duration: a, context: c });
  }, a.fn.tram = function (a) {
    return b.call(null, this, a);
  };var V = a.style,
      W = a.css,
      X = { transform: G.transform && G.transform.css },
      Y = { color: [O, u], background: [O, u, "background-color"], "outline-color": [O, u], "border-color": [O, u], "border-top-color": [O, u], "border-right-color": [O, u], "border-bottom-color": [O, u], "border-left-color": [O, u], "border-width": [N, v], "border-top-width": [N, v], "border-right-width": [N, v], "border-bottom-width": [N, v], "border-left-width": [N, v], "border-spacing": [N, v], "letter-spacing": [N, v], margin: [N, v], "margin-top": [N, v], "margin-right": [N, v], "margin-bottom": [N, v], "margin-left": [N, v], padding: [N, v], "padding-top": [N, v], "padding-right": [N, v], "padding-bottom": [N, v], "padding-left": [N, v], "outline-width": [N, v], opacity: [N, t], top: [N, w], right: [N, w], bottom: [N, w], left: [N, w], "font-size": [N, w], "text-indent": [N, w], "word-spacing": [N, w], width: [N, w], "min-width": [N, w], "max-width": [N, w], height: [N, w], "min-height": [N, w], "max-height": [N, w], "line-height": [N, y], "scroll-top": [P, t, "scrollTop"], "scroll-left": [P, t, "scrollLeft"] },
      Z = {};G.transform && (Y.transform = [Q], Z = { x: [w, "translateX"], y: [w, "translateY"], rotate: [x], rotateX: [x], rotateY: [x], scale: [t], scaleX: [t], scaleY: [t], skew: [x], skewX: [x], skewY: [x] }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);var $ = /ms/,
      _ = /s|\./;return a.tram = b;
}(window.jQuery);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(141)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(83)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(18);
var redefine = __webpack_require__(87);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(23);
var $iterCreate = __webpack_require__(143);
var setToStringTag = __webpack_require__(50);
var getPrototypeOf = __webpack_require__(148);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(142);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(86)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(144);
var enumBugKeys = __webpack_require__(49);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(86)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(147).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(145)(false);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(43);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(89);
var hiddenKeys = __webpack_require__(49).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (false) { var unexpectedKeyCache; }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(101),
    findIndex = __webpack_require__(244);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(10),
    isArrayLike = __webpack_require__(16),
    keys = __webpack_require__(36);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32),
    stackClear = __webpack_require__(188),
    stackDelete = __webpack_require__(189),
    stackGet = __webpack_require__(190),
    stackHas = __webpack_require__(191),
    stackSet = __webpack_require__(192);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(56)))

/***/ }),
/* 105 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(211),
    isObjectLike = __webpack_require__(12);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(212),
    arraySome = __webpack_require__(215),
    cacheHas = __webpack_require__(216);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(62),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(223),
    stubArray = __webpack_require__(110);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(224),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(63),
    isIndex = __webpack_require__(64),
    isTypedArray = __webpack_require__(65);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(118);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    arrayMap = __webpack_require__(119),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(40);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeInOut = exports.easeOut = exports.easeIn = exports.ease = undefined;
exports.inQuad = inQuad;
exports.outQuad = outQuad;
exports.inOutQuad = inOutQuad;
exports.inCubic = inCubic;
exports.outCubic = outCubic;
exports.inOutCubic = inOutCubic;
exports.inQuart = inQuart;
exports.outQuart = outQuart;
exports.inOutQuart = inOutQuart;
exports.inQuint = inQuint;
exports.outQuint = outQuint;
exports.inOutQuint = inOutQuint;
exports.inSine = inSine;
exports.outSine = outSine;
exports.inOutSine = inOutSine;
exports.inExpo = inExpo;
exports.outExpo = outExpo;
exports.inOutExpo = inOutExpo;
exports.inCirc = inCirc;
exports.outCirc = outCirc;
exports.inOutCirc = inOutCirc;
exports.outBounce = outBounce;
exports.inBack = inBack;
exports.outBack = outBack;
exports.inOutBack = inOutBack;
exports.inElastic = inElastic;
exports.outElastic = outElastic;
exports.inOutElastic = inOutElastic;
exports.swingFromTo = swingFromTo;
exports.swingFrom = swingFrom;
exports.swingTo = swingTo;
exports.bounce = bounce;
exports.bouncePast = bouncePast;

var _bezierEasing = __webpack_require__(246);

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Easing functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE

var magicSwing = 1.70158;

var ease = exports.ease = (0, _bezierEasing2.default)(0.25, 0.1, 0.25, 1.0);
var easeIn = exports.easeIn = (0, _bezierEasing2.default)(0.42, 0.0, 1.0, 1.0);
var easeOut = exports.easeOut = (0, _bezierEasing2.default)(0.0, 0.0, 0.58, 1.0);
var easeInOut = exports.easeInOut = (0, _bezierEasing2.default)(0.42, 0.0, 0.58, 1.0);

function inQuad(pos) {
  return Math.pow(pos, 2);
}

function outQuad(pos) {
  return -(Math.pow(pos - 1, 2) - 1);
}

function inOutQuad(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 2);
  }
  return -0.5 * ((pos -= 2) * pos - 2);
}

function inCubic(pos) {
  return Math.pow(pos, 3);
}

function outCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
}

function inOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2);
}

function inQuart(pos) {
  return Math.pow(pos, 4);
}

function outQuart(pos) {
  return -(Math.pow(pos - 1, 4) - 1);
}

function inOutQuart(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 4);
  }
  return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
}

function inQuint(pos) {
  return Math.pow(pos, 5);
}

function outQuint(pos) {
  return Math.pow(pos - 1, 5) + 1;
}

function inOutQuint(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 5);
  }
  return 0.5 * (Math.pow(pos - 2, 5) + 2);
}

function inSine(pos) {
  return -Math.cos(pos * (Math.PI / 2)) + 1;
}

function outSine(pos) {
  return Math.sin(pos * (Math.PI / 2));
}

function inOutSine(pos) {
  return -0.5 * (Math.cos(Math.PI * pos) - 1);
}

function inExpo(pos) {
  return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
}

function outExpo(pos) {
  return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
}

function inOutExpo(pos) {
  if (pos === 0) {
    return 0;
  }
  if (pos === 1) {
    return 1;
  }
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(2, 10 * (pos - 1));
  }
  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
}

function inCirc(pos) {
  return -(Math.sqrt(1 - pos * pos) - 1);
}

function outCirc(pos) {
  return Math.sqrt(1 - Math.pow(pos - 1, 2));
}

function inOutCirc(pos) {
  if ((pos /= 0.5) < 1) {
    return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
  }
  return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
}

function outBounce(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
  } else if (pos < 2.5 / 2.75) {
    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
  } else {
    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
  }
}

function inBack(pos) {
  var s = magicSwing;
  return pos * pos * ((s + 1) * pos - s);
}

function outBack(pos) {
  var s = magicSwing;
  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}

function inOutBack(pos) {
  var s = magicSwing;
  if ((pos /= 0.5) < 1) {
    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
  }
  return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}

function inElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;
  if (pos === 0) {
    return 0;
  }
  if (pos === 1) {
    return 1;
  }
  if (!p) {
    p = 0.3;
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
}

function outElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;
  if (pos === 0) {
    return 0;
  }
  if (pos === 1) {
    return 1;
  }
  if (!p) {
    p = 0.3;
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
}

function inOutElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;
  if (pos === 0) {
    return 0;
  }
  if ((pos /= 1 / 2) === 2) {
    return 1;
  }
  if (!p) {
    p = 0.3 * 1.5;
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  if (pos < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }
  return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
}

function swingFromTo(pos) {
  var s = magicSwing;
  return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}

function swingFrom(pos) {
  var s = magicSwing;
  return pos * pos * ((s + 1) * pos - s);
}

function swingTo(pos) {
  var s = magicSwing;
  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}

function bounce(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
  } else if (pos < 2.5 / 2.75) {
    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
  } else {
    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
  }
}

function bouncePast(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
  } else if (pos < 2.5 / 2.75) {
    return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
  } else {
    return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optimizeFloat = optimizeFloat;
exports.applyEasing = applyEasing;

var _IX2Easings = __webpack_require__(122);

var easings = _interopRequireWildcard(_IX2Easings);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function optimizeFloat(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  var pow = Math.pow(base, digits);
  var float = Number(Math.round(value * pow) / pow);
  return Math.abs(float) > 0.0001 ? float : 0;
}

function applyEasing(easing, position) {
  if (position === 0) {
    return 0;
  }
  if (position === 1) {
    return 1;
  }
  return optimizeFloat(position > 0 && easing && easings[easing] ? easings[easing](position) : position);
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IX2_RAW_DATA_IMPORTED = exports.IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
var IX2_SESSION_INITIALIZED = exports.IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
var IX2_SESSION_STARTED = exports.IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
var IX2_SESSION_STOPPED = exports.IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
var IX2_PREVIEW_REQUESTED = exports.IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
var IX2_PLAYBACK_REQUESTED = exports.IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
var IX2_STOP_REQUESTED = exports.IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
var IX2_CLEAR_REQUESTED = exports.IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
var IX2_EVENT_LISTENER_ADDED = exports.IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
var IX2_EVENT_STATE_CHANGED = exports.IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
var IX2_ANIMATION_FRAME_CHANGED = exports.IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
var IX2_PARAMETER_CHANGED = exports.IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
var IX2_INSTANCE_ADDED = exports.IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
var IX2_INSTANCE_STARTED = exports.IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
var IX2_INSTANCE_REMOVED = exports.IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
var IX2_ELEMENT_STATE_CHANGED = exports.IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
var IX2_ACTION_LIST_PLAYBACK_CHANGED = exports.IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
var IX2_VIEWPORT_WIDTH_CHANGED = exports.IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MOUSE_CLICK = exports.MOUSE_CLICK = 'MOUSE_CLICK';
var MOUSE_SECOND_CLICK = exports.MOUSE_SECOND_CLICK = 'MOUSE_SECOND_CLICK';
var MOUSE_DOWN = exports.MOUSE_DOWN = 'MOUSE_DOWN';
var MOUSE_UP = exports.MOUSE_UP = 'MOUSE_UP';
var MOUSE_OVER = exports.MOUSE_OVER = 'MOUSE_OVER';
var MOUSE_OUT = exports.MOUSE_OUT = 'MOUSE_OUT';
var MOUSE_MOVE = exports.MOUSE_MOVE = 'MOUSE_MOVE';

var SCROLL_INTO_VIEW = exports.SCROLL_INTO_VIEW = 'SCROLL_INTO_VIEW';
var SCROLL_OUT_OF_VIEW = exports.SCROLL_OUT_OF_VIEW = 'SCROLL_OUT_OF_VIEW';
var SCROLLING_IN_VIEW = exports.SCROLLING_IN_VIEW = 'SCROLLING_IN_VIEW';

var TAB_ACTIVE = exports.TAB_ACTIVE = 'TAB_ACTIVE';
var TAB_INACTIVE = exports.TAB_INACTIVE = 'TAB_INACTIVE';
var NAVBAR_OPEN = exports.NAVBAR_OPEN = 'NAVBAR_OPEN';
var NAVBAR_CLOSE = exports.NAVBAR_CLOSE = 'NAVBAR_CLOSE';
var SLIDER_ACTIVE = exports.SLIDER_ACTIVE = 'SLIDER_ACTIVE';
var SLIDER_INACTIVE = exports.SLIDER_INACTIVE = 'SLIDER_INACTIVE';
var DROPDOWN_OPEN = exports.DROPDOWN_OPEN = 'DROPDOWN_OPEN';
var DROPDOWN_CLOSE = exports.DROPDOWN_CLOSE = 'DROPDOWN_CLOSE';
var COMPONENT_ACTIVE = exports.COMPONENT_ACTIVE = 'COMPONENT_ACTIVE';
var COMPONENT_INACTIVE = exports.COMPONENT_INACTIVE = 'COMPONENT_INACTIVE';

var PAGE_START = exports.PAGE_START = 'PAGE_START';
var PAGE_FINISH = exports.PAGE_FINISH = 'PAGE_FINISH';
var PAGE_SCROLL_UP = exports.PAGE_SCROLL_UP = 'PAGE_SCROLL_UP';
var PAGE_SCROLL_DOWN = exports.PAGE_SCROLL_DOWN = 'PAGE_SCROLL_DOWN';
var PAGE_SCROLL = exports.PAGE_SCROLL = 'PAGE_SCROLL';

var ELEMENT = exports.ELEMENT = 'ELEMENT';
var VIEWPORT = exports.VIEWPORT = 'VIEWPORT';
var PAGE = exports.PAGE = 'PAGE';

var ECOMMERCE_CART_OPEN = exports.ECOMMERCE_CART_OPEN = 'ECOMMERCE_CART_OPEN';
var ECOMMERCE_CART_CLOSE = exports.ECOMMERCE_CART_CLOSE = 'ECOMMERCE_CART_CLOSE';

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(41);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanupPlugin = exports.renderPlugin = exports.createPluginInstance = exports.getPluginDestination = exports.getPluginOrigin = exports.getPluginConfig = undefined;
exports.isPluginType = isPluginType;

var _IX2LottieUtils = __webpack_require__(251);

var _IX2EngineItemTypes = __webpack_require__(75);

var _IX2BrowserSupport = __webpack_require__(58);

var pluginMethodMap = (0, _defineProperty3.default)({}, _IX2EngineItemTypes.PLUGIN_BODYMOVIN, {
  getConfig: _IX2LottieUtils.getPluginConfig,
  getOrigin: _IX2LottieUtils.getPluginOrigin,
  getDestination: _IX2LottieUtils.getPluginDestination,
  createInstance: _IX2LottieUtils.createPluginInstance,
  render: _IX2LottieUtils.renderPlugin,
  cleanup: _IX2LottieUtils.cleanupPlugin
}); // eslint-disable-next-line webflow/module-top-level-imports
function isPluginType(actionTypeId) {
  return actionTypeId === _IX2EngineItemTypes.PLUGIN_BODYMOVIN;
}

var pluginMethod = function pluginMethod(methodName) {
  return function (actionTypeId) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
      // IX2 plugins require browser libs for now
      return function () {
        return null;
      };
    }
    var plugin = pluginMethodMap[actionTypeId];
    if (!plugin) {
      throw new Error('IX2 no plugin configured for: ' + actionTypeId);
    }
    var method = plugin[methodName];
    if (!method) {
      throw new Error('IX2 invalid plugin method: ' + methodName);
    }
    return method;
  };
};

var getPluginConfig = exports.getPluginConfig = pluginMethod('getConfig');
var getPluginOrigin = exports.getPluginOrigin = pluginMethod('getOrigin');
var getPluginDestination = exports.getPluginDestination = pluginMethod('getDestination');
var createPluginInstance = exports.createPluginInstance = pluginMethod('createInstance');
var renderPlugin = exports.renderPlugin = pluginMethod('render');
var cleanupPlugin = exports.cleanupPlugin = pluginMethod('cleanup');

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(128),
    createBaseEach = __webpack_require__(258);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(256),
    keys = __webpack_require__(36);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(270);

var _toConsumableArray3 = _interopRequireDefault2(_toConsumableArray2);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(280);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.observeRequests = observeRequests;
exports.startEngine = startEngine;
exports.stopEngine = stopEngine;
exports.stopAllActionGroups = stopAllActionGroups;
exports.stopActionGroup = stopActionGroup;
exports.startActionGroup = startActionGroup;

var _find = __webpack_require__(100);

var _find2 = _interopRequireDefault(_find);

var _get = __webpack_require__(38);

var _get2 = _interopRequireDefault(_get);

var _size = __webpack_require__(281);

var _size2 = _interopRequireDefault(_size);

var _omitBy = __webpack_require__(287);

var _omitBy2 = _interopRequireDefault(_omitBy);

var _isEmpty = __webpack_require__(299);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _mapValues = __webpack_require__(300);

var _mapValues2 = _interopRequireDefault(_mapValues);

var _forEach = __webpack_require__(301);

var _forEach2 = _interopRequireDefault(_forEach);

var _endsWith = __webpack_require__(304);

var _endsWith2 = _interopRequireDefault(_endsWith);

var _throttle = __webpack_require__(305);

var _throttle2 = _interopRequireDefault(_throttle);

var _shallowEqual = __webpack_require__(308);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shared = __webpack_require__(2);

var _IX2EngineActions = __webpack_require__(77);

var _IX2BrowserApi = __webpack_require__(310);

var elementApi = _interopRequireWildcard(_IX2BrowserApi);

var _IX2VanillaEvents = __webpack_require__(311);

var _IX2VanillaEvents2 = _interopRequireDefault(_IX2VanillaEvents);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _shared$IX2EngineEven = _shared.IX2EngineEventTypes,
    MOUSE_CLICK = _shared$IX2EngineEven.MOUSE_CLICK,
    MOUSE_SECOND_CLICK = _shared$IX2EngineEven.MOUSE_SECOND_CLICK; /* eslint-env browser */

var _shared$IX2EngineCons = _shared.IX2EngineConstants,
    COLON_DELIMITER = _shared$IX2EngineCons.COLON_DELIMITER,
    BOUNDARY_SELECTOR = _shared$IX2EngineCons.BOUNDARY_SELECTOR,
    HTML_ELEMENT = _shared$IX2EngineCons.HTML_ELEMENT,
    RENDER_GENERAL = _shared$IX2EngineCons.RENDER_GENERAL,
    W_MOD_IX = _shared$IX2EngineCons.W_MOD_IX;
var _shared$IX2EngineItem = _shared.IX2EngineItemTypes,
    GENERAL_START_ACTION = _shared$IX2EngineItem.GENERAL_START_ACTION,
    GENERAL_CONTINUOUS_ACTION = _shared$IX2EngineItem.GENERAL_CONTINUOUS_ACTION;
var _shared$IX2VanillaUti = _shared.IX2VanillaUtils,
    getAffectedElements = _shared$IX2VanillaUti.getAffectedElements,
    getElementId = _shared$IX2VanillaUti.getElementId,
    getDestinationValues = _shared$IX2VanillaUti.getDestinationValues,
    observeStore = _shared$IX2VanillaUti.observeStore,
    getInstanceId = _shared$IX2VanillaUti.getInstanceId,
    renderHTMLElement = _shared$IX2VanillaUti.renderHTMLElement,
    clearAllStyles = _shared$IX2VanillaUti.clearAllStyles,
    getMaxDurationItemIndex = _shared$IX2VanillaUti.getMaxDurationItemIndex,
    getComputedStyle = _shared$IX2VanillaUti.getComputedStyle,
    getInstanceOrigin = _shared$IX2VanillaUti.getInstanceOrigin,
    reduceListToGroup = _shared$IX2VanillaUti.reduceListToGroup,
    shouldNamespaceEventParameter = _shared$IX2VanillaUti.shouldNamespaceEventParameter,
    getNamespacedParameterId = _shared$IX2VanillaUti.getNamespacedParameterId,
    shouldAllowMediaQuery = _shared$IX2VanillaUti.shouldAllowMediaQuery,
    cleanupHTMLElement = _shared$IX2VanillaUti.cleanupHTMLElement,
    stringifyTarget = _shared$IX2VanillaUti.stringifyTarget;
var _shared$IX2VanillaPlu = _shared.IX2VanillaPlugins,
    isPluginType = _shared$IX2VanillaPlu.isPluginType,
    createPluginInstance = _shared$IX2VanillaPlu.createPluginInstance;


var ua = navigator.userAgent;
var IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);

// Keep throttled events at ~80fps to reduce reflows while maintaining render accuracy
var THROTTLED_EVENT_WAIT = 12;
function observeRequests(store) {
  observeStore({
    store: store,
    select: function select(_ref) {
      var ixRequest = _ref.ixRequest;
      return ixRequest.preview;
    },
    onChange: handlePreviewRequest
  });
  observeStore({
    store: store,
    select: function select(_ref2) {
      var ixRequest = _ref2.ixRequest;
      return ixRequest.playback;
    },
    onChange: handlePlaybackRequest
  });
  observeStore({
    store: store,
    select: function select(_ref3) {
      var ixRequest = _ref3.ixRequest;
      return ixRequest.stop;
    },
    onChange: handleStopRequest
  });
  observeStore({
    store: store,
    select: function select(_ref4) {
      var ixRequest = _ref4.ixRequest;
      return ixRequest.clear;
    },
    onChange: handleClearRequest
  });
}

function handlePreviewRequest(_ref5, store) {
  var rawData = _ref5.rawData;

  startEngine({ store: store, rawData: rawData, allowEvents: true });
  document.dispatchEvent(new CustomEvent('IX2_PREVIEW_LOAD'));
}

function isQuickEffect(id) {
  return id && (0, _endsWith2.default)(id, '_EFFECT');
}

function handlePlaybackRequest(playback, store) {
  var actionTypeId = playback.actionTypeId,
      actionListId = playback.actionListId,
      actionItemId = playback.actionItemId,
      eventId = playback.eventId,
      allowEvents = playback.allowEvents,
      immediate = playback.immediate,
      _playback$verbose = playback.verbose,
      verbose = _playback$verbose === undefined ? true : _playback$verbose;
  var rawData = playback.rawData;


  if (actionListId && actionItemId && rawData && immediate) {
    rawData = reduceListToGroup({
      actionListId: actionListId,
      actionItemId: actionItemId,
      rawData: rawData
    });
  }

  startEngine({ store: store, rawData: rawData, allowEvents: allowEvents });

  if (actionListId && actionTypeId === GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
    stopActionGroup({ store: store, actionListId: actionListId });
    renderInitialGroup({ store: store, actionListId: actionListId, eventId: eventId });
    var started = startActionGroup({
      store: store,
      eventId: eventId,
      actionListId: actionListId,
      immediate: immediate,
      verbose: verbose
    });
    if (verbose && started) {
      store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({ actionListId: actionListId, isPlaying: !immediate }));
    }
  }
}

function handleStopRequest(_ref6, store) {
  var actionListId = _ref6.actionListId;

  if (actionListId) {
    stopActionGroup({ store: store, actionListId: actionListId });
  } else {
    stopAllActionGroups({ store: store });
  }
  stopEngine(store);
}

function handleClearRequest(state, store) {
  stopEngine(store);
  clearAllStyles({ store: store, elementApi: elementApi });
}

function startEngine(_ref7) {
  var store = _ref7.store,
      rawData = _ref7.rawData,
      allowEvents = _ref7.allowEvents;

  var _store$getState = store.getState(),
      ixSession = _store$getState.ixSession;

  if (rawData) {
    store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
  }
  if (!ixSession.active) {
    store.dispatch((0, _IX2EngineActions.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR))
    }));
    if (allowEvents) {
      bindEvents(store);
      addDocumentClass();
    }
    store.dispatch((0, _IX2EngineActions.sessionStarted)());
    startRenderLoop(store);
  }
}

function addDocumentClass() {
  var _document = document,
      documentElement = _document.documentElement;

  if (documentElement.className.indexOf(W_MOD_IX) === -1) {
    documentElement.className += ' ' + W_MOD_IX;
  }
}

function startRenderLoop(store) {
  var handleFrame = function handleFrame(now) {
    var _store$getState2 = store.getState(),
        ixSession = _store$getState2.ixSession,
        ixParameters = _store$getState2.ixParameters;

    if (ixSession.active) {
      store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));
      requestAnimationFrame(handleFrame);
    }
  };
  handleFrame(window.performance.now());
}

function stopEngine(store) {
  var _store$getState3 = store.getState(),
      ixSession = _store$getState3.ixSession;

  if (ixSession.active) {
    var eventListeners = ixSession.eventListeners;

    eventListeners.forEach(clearEventListener);
    store.dispatch((0, _IX2EngineActions.sessionStopped)());
  }
}

function clearEventListener(_ref8) {
  var target = _ref8.target,
      listenerParams = _ref8.listenerParams;

  target.removeEventListener.apply(target, listenerParams);
}

function createGroupInstances(_ref9) {
  var store = _ref9.store,
      eventStateKey = _ref9.eventStateKey,
      eventTarget = _ref9.eventTarget,
      eventId = _ref9.eventId,
      eventConfig = _ref9.eventConfig,
      actionListId = _ref9.actionListId,
      parameterGroup = _ref9.parameterGroup,
      smoothing = _ref9.smoothing,
      restingValue = _ref9.restingValue;

  var _store$getState4 = store.getState(),
      ixData = _store$getState4.ixData,
      ixSession = _store$getState4.ixSession;

  var events = ixData.events;

  var event = events[eventId];
  var eventTypeId = event.eventTypeId;

  var targetCache = {};
  var instanceActionGroups = {};
  var instanceConfigs = [];

  var continuousActionGroups = parameterGroup.continuousActionGroups;
  var parameterId = parameterGroup.id;

  if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
    parameterId = getNamespacedParameterId(eventStateKey, parameterId);
  }

  // Limit affected elements when event target is within a boundary node
  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;

  continuousActionGroups.forEach(function (actionGroup) {
    var keyframe = actionGroup.keyframe,
        actionItems = actionGroup.actionItems;


    actionItems.forEach(function (actionItem) {
      var actionTypeId = actionItem.actionTypeId;
      var target = actionItem.config.target;

      if (!target) {
        return;
      }
      var elementRoot = target.boundaryMode ? eventElementRoot : null;

      var key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
      instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);

      if (!targetCache[key]) {
        targetCache[key] = true;
        var config = actionItem.config;

        getAffectedElements({
          config: config,
          event: event,
          eventTarget: eventTarget,
          elementRoot: elementRoot,
          elementApi: elementApi
        }).forEach(function (element) {
          instanceConfigs.push({ element: element, key: key });
        });
      }
    });
  });

  instanceConfigs.forEach(function (_ref10) {
    var element = _ref10.element,
        key = _ref10.key;

    var actionGroups = instanceActionGroups[key];
    var actionItem = (0, _get2.default)(actionGroups, '[0].actionItems[0]', {});
    var actionTypeId = actionItem.actionTypeId;

    var pluginInstance = isPluginType(actionTypeId) ? createPluginInstance(actionTypeId)(element, actionItem) : null;
    var destination = getDestinationValues({ element: element, actionItem: actionItem, elementApi: elementApi }, pluginInstance);
    createInstance({
      store: store,
      element: element,
      eventId: eventId,
      actionListId: actionListId,
      actionItem: actionItem,
      destination: destination,
      continuous: true,
      parameterId: parameterId,
      actionGroups: actionGroups,
      smoothing: smoothing,
      restingValue: restingValue,
      pluginInstance: pluginInstance
    });
  });
}

function appendActionItem() {
  var actionGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyframe = arguments[1];
  var actionItem = arguments[2];

  var newActionGroups = [].concat((0, _toConsumableArray3.default)(actionGroups));
  var groupIndex = void 0;
  newActionGroups.some(function (group, index) {
    if (group.keyframe === keyframe) {
      groupIndex = index;
      return true;
    }
    return false;
  });
  if (groupIndex == null) {
    groupIndex = newActionGroups.length;
    newActionGroups.push({
      keyframe: keyframe,
      actionItems: []
    });
  }
  newActionGroups[groupIndex].actionItems.push(actionItem);
  return newActionGroups;
}

function bindEvents(store) {
  var _store$getState5 = store.getState(),
      ixData = _store$getState5.ixData;

  var eventTypeMap = ixData.eventTypeMap;


  updateViewportWidth(store);

  (0, _forEach2.default)(eventTypeMap, function (events, key) {
    var logic = _IX2VanillaEvents2.default[key];
    if (!logic) {
      console.warn('IX2 event type not configured: ' + key);
      return;
    }
    bindEventType({
      logic: logic,
      store: store,
      events: events
    });
  });

  var _store$getState6 = store.getState(),
      ixSession = _store$getState6.ixSession;

  if (ixSession.eventListeners.length) {
    bindResizeEvents(store);
  }
}

var WINDOW_RESIZE_EVENTS = ['resize', 'orientationchange'];

function bindResizeEvents(store) {
  var handleResize = function handleResize() {
    updateViewportWidth(store);
  };
  WINDOW_RESIZE_EVENTS.forEach(function (type) {
    window.addEventListener(type, handleResize);
    store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [type, handleResize]));
  });
  handleResize();
}

function updateViewportWidth(store) {
  var _store$getState7 = store.getState(),
      ixSession = _store$getState7.ixSession,
      ixData = _store$getState7.ixData;

  var width = window.innerWidth;
  if (width !== ixSession.viewportWidth) {
    var mediaQueries = ixData.mediaQueries;

    store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({ width: width, mediaQueries: mediaQueries }));
  }
}

var mapFoundValues = function mapFoundValues(object, iteratee) {
  return (0, _omitBy2.default)((0, _mapValues2.default)(object, iteratee), _isEmpty2.default);
};

var forEachEventTarget = function forEachEventTarget(eventTargets, eventCallback) {
  (0, _forEach2.default)(eventTargets, function (elements, eventId) {
    elements.forEach(function (element, index) {
      var eventStateKey = eventId + COLON_DELIMITER + index;
      eventCallback(element, eventId, eventStateKey);
    });
  });
};

var getAffectedForEvent = function getAffectedForEvent(event) {
  var config = { target: event.target };
  return getAffectedElements({ config: config, elementApi: elementApi });
};

function bindEventType(_ref11) {
  var logic = _ref11.logic,
      store = _ref11.store,
      events = _ref11.events;

  injectBehaviorCSSFixes(events);
  var eventTypes = logic.types,
      eventHandler = logic.handler;

  var _store$getState8 = store.getState(),
      ixData = _store$getState8.ixData;

  var actionLists = ixData.actionLists;

  var eventTargets = mapFoundValues(events, getAffectedForEvent);

  if (!(0, _size2.default)(eventTargets)) {
    return;
  }

  (0, _forEach2.default)(eventTargets, function (elements, key) {
    var event = events[key];
    var eventAction = event.action,
        eventId = event.id;
    var actionListId = eventAction.config.actionListId;


    if (eventAction.actionTypeId === GENERAL_CONTINUOUS_ACTION) {
      var configs = Array.isArray(event.config) ? event.config : [event.config];

      configs.forEach(function (eventConfig) {
        var continuousParameterGroupId = eventConfig.continuousParameterGroupId;

        var paramGroups = (0, _get2.default)(actionLists, actionListId + '.continuousParameterGroups', []);
        var parameterGroup = (0, _find2.default)(paramGroups, function (_ref12) {
          var id = _ref12.id;
          return id === continuousParameterGroupId;
        });
        var smoothing = (eventConfig.smoothing || 0) / 100;
        var restingValue = (eventConfig.restingState || 0) / 100;

        if (!parameterGroup) {
          return;
        }

        elements.forEach(function (eventTarget, index) {
          var eventStateKey = eventId + COLON_DELIMITER + index;
          createGroupInstances({
            store: store,
            eventStateKey: eventStateKey,
            eventTarget: eventTarget,
            eventId: eventId,
            eventConfig: eventConfig,
            actionListId: actionListId,
            parameterGroup: parameterGroup,
            smoothing: smoothing,
            restingValue: restingValue
          });
        });
      });
    }

    if (eventAction.actionTypeId === GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
      renderInitialGroup({ store: store, actionListId: actionListId, eventId: eventId });
    }
  });

  var handleEvent = function handleEvent(nativeEvent) {
    var _store$getState9 = store.getState(),
        ixSession = _store$getState9.ixSession;

    forEachEventTarget(eventTargets, function (element, eventId, eventStateKey) {
      var event = events[eventId];
      var oldState = ixSession.eventState[eventStateKey];
      var eventAction = event.action,
          _event$mediaQueries = event.mediaQueries,
          mediaQueries = _event$mediaQueries === undefined ? ixData.mediaQueryKeys : _event$mediaQueries;
      // Bypass event handler if current media query is not listed in event config

      if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return;
      }
      var handleEventWithConfig = function handleEventWithConfig() {
        var eventConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newState = eventHandler({
          store: store,
          element: element,
          event: event,
          eventConfig: eventConfig,
          nativeEvent: nativeEvent,
          eventStateKey: eventStateKey
        }, oldState);
        if (!(0, _shallowEqual2.default)(newState, oldState)) {
          store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
        }
      };
      if (eventAction.actionTypeId === GENERAL_CONTINUOUS_ACTION) {
        var configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach(handleEventWithConfig);
      } else {
        handleEventWithConfig();
      }
    });
  };

  var handleEventThrottled = (0, _throttle2.default)(handleEvent, THROTTLED_EVENT_WAIT);

  var addListeners = function addListeners(_ref13) {
    var _ref13$target = _ref13.target,
        target = _ref13$target === undefined ? document : _ref13$target,
        types = _ref13.types,
        shouldThrottle = _ref13.throttle;

    types.split(' ').filter(Boolean).forEach(function (type) {
      var handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
      target.addEventListener(type, handlerFunc);
      store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [type, handlerFunc]));
    });
  };

  if (Array.isArray(eventTypes)) {
    eventTypes.forEach(addListeners);
  } else if (typeof eventTypes === 'string') {
    addListeners(logic);
  }
}

/**
 * Injects CSS into the document to fix behavior issues across
 * different devices.
 */

function injectBehaviorCSSFixes(events) {
  if (!IS_MOBILE_SAFARI) {
    return;
  }

  var injectedSelectors = {};

  var cssText = '';
  for (var eventId in events) {
    var _events$eventId = events[eventId],
        eventTypeId = _events$eventId.eventTypeId,
        target = _events$eventId.target;


    var selector = elementApi.getQuerySelector(target);
    if (injectedSelectors[selector]) {
      continue;
    }

    // add a "cursor: pointer" style rule to ensure that CLICK events get fired for IOS devices
    if (eventTypeId === MOUSE_CLICK || eventTypeId === MOUSE_SECOND_CLICK) {
      injectedSelectors[selector] = true;
      cssText += selector + '{' + 'cursor: pointer;' + 'touch-action: manipulation;' + '}';
    }
  }

  if (cssText) {
    var style = document.createElement('style');
    style.textContent = cssText;
    document.body.appendChild(style);
  }
}

function renderInitialGroup(_ref14) {
  var store = _ref14.store,
      actionListId = _ref14.actionListId,
      eventId = _ref14.eventId;

  var _store$getState10 = store.getState(),
      ixData = _store$getState10.ixData,
      ixSession = _store$getState10.ixSession;

  var actionLists = ixData.actionLists,
      events = ixData.events;

  var event = events[eventId];
  var actionList = actionLists[actionListId];

  if (actionList && actionList.useFirstGroupAsInitialState) {
    var initialStateItems = (0, _get2.default)(actionList, 'actionItemGroups[0].actionItems', []);

    // Bypass initial state render if current media query is not listed in event config
    var mediaQueries = (0, _get2.default)(event, 'mediaQueries', ixData.mediaQueryKeys);
    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
      return;
    }

    initialStateItems.forEach(function (actionItem) {
      var config = actionItem.config,
          actionTypeId = actionItem.actionTypeId;

      var itemElements = getAffectedElements({ config: config, event: event, elementApi: elementApi });
      var shouldUsePlugin = isPluginType(actionTypeId);

      itemElements.forEach(function (element) {
        var pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)(element, actionItem) : null;
        createInstance({
          destination: getDestinationValues({ element: element, actionItem: actionItem, elementApi: elementApi }, pluginInstance),
          immediate: true,
          store: store,
          element: element,
          eventId: eventId,
          actionItem: actionItem,
          actionListId: actionListId,
          pluginInstance: pluginInstance
        });
      });
    });
  }
}

function stopAllActionGroups(_ref15) {
  var store = _ref15.store;

  var _store$getState11 = store.getState(),
      ixInstances = _store$getState11.ixInstances;

  (0, _forEach2.default)(ixInstances, function (instance) {
    if (!instance.continuous) {
      var actionListId = instance.actionListId,
          verbose = instance.verbose;

      removeInstance(instance, store);
      if (verbose) {
        store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({ actionListId: actionListId, isPlaying: false }));
      }
    }
  });
}

function stopActionGroup(_ref16) {
  var store = _ref16.store,
      eventId = _ref16.eventId,
      eventTarget = _ref16.eventTarget,
      eventStateKey = _ref16.eventStateKey,
      actionListId = _ref16.actionListId;

  var _store$getState12 = store.getState(),
      ixInstances = _store$getState12.ixInstances,
      ixSession = _store$getState12.ixSession;

  // Check for element boundary before stopping engine instances


  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;

  (0, _forEach2.default)(ixInstances, function (instance) {
    var boundaryMode = (0, _get2.default)(instance, 'actionItem.config.target.boundaryMode');
    // Validate event key if eventStateKey was provided, otherwise default to true
    var validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
    // Remove engine instances that match the required ids
    if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
      // Avoid removal when root boundary does not contain instance element
      if (eventElementRoot && boundaryMode && !elementApi.elementContains(eventElementRoot, instance.element)) {
        return;
      }
      removeInstance(instance, store);
      if (instance.verbose) {
        store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({ actionListId: actionListId, isPlaying: false }));
      }
    }
  });
}

function startActionGroup(_ref17) {
  var store = _ref17.store,
      eventId = _ref17.eventId,
      eventTarget = _ref17.eventTarget,
      eventStateKey = _ref17.eventStateKey,
      actionListId = _ref17.actionListId,
      _ref17$groupIndex = _ref17.groupIndex,
      groupIndex = _ref17$groupIndex === undefined ? 0 : _ref17$groupIndex,
      immediate = _ref17.immediate,
      verbose = _ref17.verbose;

  var _store$getState13 = store.getState(),
      ixData = _store$getState13.ixData,
      ixSession = _store$getState13.ixSession;

  var events = ixData.events;

  var event = events[eventId] || {};
  var _event$mediaQueries2 = event.mediaQueries,
      mediaQueries = _event$mediaQueries2 === undefined ? ixData.mediaQueryKeys : _event$mediaQueries2;

  var actionList = (0, _get2.default)(ixData, 'actionLists.' + actionListId, {});
  var actionItemGroups = actionList.actionItemGroups;
  // Reset to first group when event loop is configured

  if (groupIndex >= actionItemGroups.length && (0, _get2.default)(event, 'config.loop')) {
    groupIndex = 0;
  }
  // Skip initial state group during action list playback, as it should already be applied
  if (groupIndex === 0 && actionList.useFirstGroupAsInitialState) {
    groupIndex++;
  }
  // Abort playback if no action items exist at group index
  var actionItems = (0, _get2.default)(actionItemGroups, [groupIndex, 'actionItems'], []);
  if (!actionItems.length) {
    return false;
  }
  // Abort playback if current media query is not listed in event config
  if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
    return false;
  }
  // Limit affected elements when event target is within a boundary node
  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;

  var carrierIndex = getMaxDurationItemIndex(actionItems);
  var groupStartResult = false;

  actionItems.forEach(function (actionItem, actionIndex) {
    var config = actionItem.config,
        actionTypeId = actionItem.actionTypeId;

    var shouldUsePlugin = isPluginType(actionTypeId);
    var target = config.target;

    if (!target) {
      return;
    }
    var elementRoot = target.boundaryMode ? eventElementRoot : null;
    var elements = getAffectedElements({
      config: config,
      event: event,
      eventTarget: eventTarget,
      elementRoot: elementRoot,
      elementApi: elementApi
    });
    elements.forEach(function (element, elementIndex) {
      var pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)(element, actionItem) : null;
      groupStartResult = true;
      var isCarrier = carrierIndex === actionIndex && elementIndex === 0;
      var computedStyle = getComputedStyle({ element: element, actionItem: actionItem });
      var destination = getDestinationValues({ element: element, actionItem: actionItem, elementApi: elementApi }, pluginInstance);
      createInstance({
        store: store,
        element: element,
        actionItem: actionItem,
        eventId: eventId,
        eventTarget: eventTarget,
        eventStateKey: eventStateKey,
        actionListId: actionListId,
        groupIndex: groupIndex,
        isCarrier: isCarrier,
        computedStyle: computedStyle,
        destination: destination,
        immediate: immediate,
        verbose: verbose,
        pluginInstance: pluginInstance
      });
    });
  });
  return groupStartResult;
}

function createInstance(options) {
  var store = options.store,
      computedStyle = options.computedStyle,
      rest = (0, _objectWithoutProperties3.default)(options, ['store', 'computedStyle']);

  var autoStart = !rest.continuous;
  var element = rest.element,
      actionItem = rest.actionItem,
      immediate = rest.immediate,
      pluginInstance = rest.pluginInstance;

  var instanceId = getInstanceId();

  var _store$getState14 = store.getState(),
      ixElements = _store$getState14.ixElements;

  var elementId = getElementId(ixElements, element);

  var _ref18 = ixElements[elementId] || {},
      refState = _ref18.refState;

  var refType = elementApi.getRefType(element);

  var origin = getInstanceOrigin(element, refState, computedStyle, actionItem, elementApi, pluginInstance);

  store.dispatch((0, _IX2EngineActions.instanceAdded)((0, _extends3.default)({
    instanceId: instanceId,
    elementId: elementId,
    origin: origin,
    refType: refType
  }, rest)));

  dispatchCustomEvent(document.body, 'ix2-animation-started', instanceId);

  if (immediate) {
    renderImmediateInstance(store, instanceId);
    return;
  }

  observeStore({
    store: store,
    select: function select(_ref19) {
      var ixInstances = _ref19.ixInstances;
      return ixInstances[instanceId];
    },
    onChange: handleInstanceChange
  });

  if (autoStart) {
    store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId));
  }
}

function removeInstance(instance, store) {
  dispatchCustomEvent(document.body, 'ix2-animation-stopping', {
    instanceId: instance.id,
    state: store.getState()
  });
  var elementId = instance.elementId,
      actionItem = instance.actionItem;

  var _store$getState15 = store.getState(),
      ixElements = _store$getState15.ixElements;

  var _ref20 = ixElements[elementId] || {},
      ref = _ref20.ref,
      refType = _ref20.refType;

  if (refType === HTML_ELEMENT) {
    cleanupHTMLElement(ref, actionItem, elementApi);
  }
  store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
}

function dispatchCustomEvent(element, eventName, detail) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, detail);
  element.dispatchEvent(event);
}

function renderImmediateInstance(store, instanceId) {
  store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId));

  var _store$getState16 = store.getState(),
      ixParameters = _store$getState16.ixParameters;

  store.dispatch((0, _IX2EngineActions.animationFrameChanged)(Number.POSITIVE_INFINITY, ixParameters));

  var _store$getState17 = store.getState(),
      ixInstances = _store$getState17.ixInstances;

  handleInstanceChange(ixInstances[instanceId], store);
}

function handleInstanceChange(instance, store) {
  var active = instance.active,
      continuous = instance.continuous,
      complete = instance.complete,
      elementId = instance.elementId,
      actionItem = instance.actionItem,
      actionTypeId = instance.actionTypeId,
      renderType = instance.renderType,
      current = instance.current,
      groupIndex = instance.groupIndex,
      eventId = instance.eventId,
      eventTarget = instance.eventTarget,
      eventStateKey = instance.eventStateKey,
      actionListId = instance.actionListId,
      isCarrier = instance.isCarrier,
      styleProp = instance.styleProp,
      verbose = instance.verbose,
      pluginInstance = instance.pluginInstance;

  // Bypass render if current media query is not listed in event config

  var _store$getState18 = store.getState(),
      ixData = _store$getState18.ixData,
      ixSession = _store$getState18.ixSession;

  var events = ixData.events;

  var event = events[eventId] || {};
  var _event$mediaQueries3 = event.mediaQueries,
      mediaQueries = _event$mediaQueries3 === undefined ? ixData.mediaQueryKeys : _event$mediaQueries3;

  if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
    return;
  }

  if (continuous || active || complete) {
    if (current || renderType === RENDER_GENERAL && complete) {
      // Render current values to ref state and grab latest
      store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));

      var _store$getState19 = store.getState(),
          ixElements = _store$getState19.ixElements;

      var _ref21 = ixElements[elementId] || {},
          ref = _ref21.ref,
          refType = _ref21.refType,
          refState = _ref21.refState;

      var actionState = refState && refState[actionTypeId];

      // Choose render based on ref type
      switch (refType) {
        case HTML_ELEMENT:
          {
            renderHTMLElement(ref, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance);
            break;
          }
      }
    }

    if (complete) {
      if (isCarrier) {
        var started = startActionGroup({
          store: store,
          eventId: eventId,
          eventTarget: eventTarget,
          eventStateKey: eventStateKey,
          actionListId: actionListId,
          groupIndex: groupIndex + 1,
          verbose: verbose
        });
        if (verbose && !started) {
          store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({ actionListId: actionListId, isPlaying: false }));
        }
      }

      removeInstance(instance, store);
    }
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(131);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(324),
    noop = __webpack_require__(325);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(326);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(164);
__webpack_require__(166);
__webpack_require__(332);
__webpack_require__(333);
module.exports = __webpack_require__(334);


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: Brand pages on the subdomain
 */

var Webflow = __webpack_require__(17);

Webflow.define('brand', module.exports = function ($) {
  var api = {};
  var doc = document;
  var $html = $('html');
  var $body = $('body');
  var namespace = '.w-webflow-badge';
  var location = window.location;
  var isPhantom = /PhantomJS/i.test(navigator.userAgent);
  var fullScreenEvents = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
  var brandElement;

  // -----------------------------------
  // Module methods

  api.ready = function () {
    var shouldBrand = $html.attr('data-wf-status');
    var publishedDomain = $html.attr('data-wf-domain') || '';
    if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
      shouldBrand = true;
    }
    if (shouldBrand && !isPhantom) {
      brandElement = brandElement || createBadge();
      ensureBrand();
      setTimeout(ensureBrand, 500);

      $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
    }
  };

  function onFullScreenChange() {
    var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
    $(brandElement).attr('style', fullScreen ? 'display: none !important;' : '');
  }

  function createBadge() {
    var $brand = $('<a class="w-webflow-badge"></a>').attr('href', 'https://webflow.com?utm_campaign=brandjs');

    var $logoArt = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg').css({
      marginRight: '8px',
      width: '16px'
    });

    var $logoText = $('<img>').attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg');

    $brand.append($logoArt, $logoText);
    return $brand[0];
  }

  function ensureBrand() {
    var found = $body.children(namespace);
    var match = found.length && found.get(0) === brandElement;
    var inEditor = Webflow.env('editor');
    if (match) {
      // Remove brand when Editor is active
      if (inEditor) {
        found.remove();
      }
      // Exit early, brand is in place
      return;
    }
    // Remove any invalid brand elements
    if (found.length) {
      found.remove();
    }
    // Append the brand (unless Editor is active)
    if (!inEditor) {
      $body.append(brandElement);
    }
  }

  // Export module
  return api;
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
// Include tram for frame-throttling

var $ = window.$;
var tram = __webpack_require__(81) && $.tram;

/*eslint-disable */

/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
module.exports = function () {
  var _ = {};

  // Current version.
  _.VERSION = '1.6.0-Webflow';

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      concat = ArrayProto.concat,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeForEach = ArrayProto.forEach,
      nativeMap = ArrayProto.map,
      nativeReduce = ArrayProto.reduce,
      nativeReduceRight = ArrayProto.reduceRight,
      nativeFilter = ArrayProto.filter,
      nativeEvery = ArrayProto.every,
      nativeSome = ArrayProto.some,
      nativeIndexOf = ArrayProto.indexOf,
      nativeLastIndexOf = ArrayProto.lastIndexOf,
      nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeBind = FuncProto.bind;

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function (obj, iterator, context) {
    /* jshint shadow:true */
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function (obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function (value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function (obj, predicate, context) {
    var result;
    any(obj, function (value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function (obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function (value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function (obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function (value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function (obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function (value) {
      return value === target;
    });
  };

  // Function (ahem) Functions
  // --------------------

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function (func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered once every
  // browser animation frame - using tram's requestAnimationFrame polyfill.
  _.throttle = function (func) {
    var wait, args, context;
    return function () {
      if (wait) return;
      wait = true;
      args = arguments;
      context = this;
      tram.frame(function () {
        wait = false;
        func.apply(context, args);
      });
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function later() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Object Functions
  // ----------------

  // Fill in a given object with default properties.
  _.defaults = function (obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) {
      if (_.has(obj, key)) keys.push(key);
    }return keys;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Is a given variable an object?
  _.isObject = function (obj) {
    return obj === Object(obj);
  };

  // Utility Functions
  // -----------------

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function () {
    return new Date().getTime();
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function escapeChar(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function template(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Export underscore
  return _;
}();

/* eslint-enable */

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(149);
module.exports = __webpack_require__(52).f('iterator');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var defined = __webpack_require__(44);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(88);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(50);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(91);
var toAbsoluteIndex = __webpack_require__(146);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(51);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);
var global = __webpack_require__(5);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(23);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(151);
var step = __webpack_require__(152);
var Iterators = __webpack_require__(23);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(83)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(18);
var redefine = __webpack_require__(87);
var META = __webpack_require__(156).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(48);
var setToStringTag = __webpack_require__(50);
var uid = __webpack_require__(30);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(52);
var wksDefine = __webpack_require__(53);
var enumKeys = __webpack_require__(157);
var isArray = __webpack_require__(158);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(20);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(45);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(88);
var gOPNExt = __webpack_require__(159);
var $GOPD = __webpack_require__(160);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(29);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(92).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(54).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(30)('meta');
var isObject = __webpack_require__(20);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(92).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(45);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(85);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 161 */
/***/ (function(module, exports) {



/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('observable');


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @wf-will-never-add-flow-to-this-file
/* eslint-disable */


var IXEvents = __webpack_require__(165);

function dispatchCustomEvent(element, eventName) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, null);
  element.dispatchEvent(event);
}

/**
 * Webflow: IX Event triggers for other modules
 */

var $ = window.jQuery;
var api = {};
var namespace = '.w-ix';

var eventTriggers = {
  reset: function reset(i, el) {
    IXEvents.triggers.reset(i, el);
  },
  intro: function intro(i, el) {
    IXEvents.triggers.intro(i, el);
    dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
  },
  outro: function outro(i, el) {
    IXEvents.triggers.outro(i, el);
    dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
  }
};

api.triggers = {};

api.types = {
  INTRO: 'w-ix-intro' + namespace,
  OUTRO: 'w-ix-outro' + namespace
};

$.extend(api.triggers, eventTriggers);

module.exports = api;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: IX Event triggers for other modules
 */


var $ = window.jQuery;
var api = {};
var eventQueue = [];
var namespace = '.w-ix';

var eventTriggers = {
  reset: function reset(i, el) {
    el.__wf_intro = null;
  },
  intro: function intro(i, el) {
    if (el.__wf_intro) {
      return;
    }
    el.__wf_intro = true;
    $(el).triggerHandler(api.types.INTRO);
  },
  outro: function outro(i, el) {
    if (!el.__wf_intro) {
      return;
    }
    el.__wf_intro = null;
    $(el).triggerHandler(api.types.OUTRO);
  }
};

api.triggers = {};

api.types = {
  INTRO: 'w-ix-intro' + namespace,
  OUTRO: 'w-ix-outro' + namespace
};

// Trigger any events in queue + restore trigger methods
api.init = function () {
  var count = eventQueue.length;
  for (var i = 0; i < count; i++) {
    var memo = eventQueue[i];
    memo[0](0, memo[1]);
  }
  eventQueue = [];
  $.extend(api.triggers, eventTriggers);
};

// Replace all triggers with async wrapper to queue events until init
api.async = function () {
  for (var key in eventTriggers) {
    var func = eventTriggers[key];
    if (!eventTriggers.hasOwnProperty(key)) {
      continue;
    }

    // Replace trigger method with async wrapper
    api.triggers[key] = function (i, el) {
      eventQueue.push([func, el]);
    };
  }
};

// Default triggers to async queue
api.async();

module.exports = api;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: Interactions 2
 */

var Webflow = __webpack_require__(17);
var ix2 = __webpack_require__(167);

ix2.setEnv(Webflow.env);

Webflow.define('ix2', module.exports = function () {
  return ix2;
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.store = exports.destroy = exports.init = exports.setEnv = undefined;

var _redux = __webpack_require__(93);

var _IX2Reducer = __webpack_require__(179);

var _IX2Reducer2 = _interopRequireDefault(_IX2Reducer);

var _IX2VanillaEngine = __webpack_require__(129);

var _IX2EngineActions = __webpack_require__(77);

var actions = _interopRequireWildcard(_IX2EngineActions);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var store = (0, _redux.createStore)(_IX2Reducer2.default);

function setEnv(env) {
  if (env()) {
    (0, _IX2VanillaEngine.observeRequests)(store);
  }
}

function init(rawData) {
  destroy();
  (0, _IX2VanillaEngine.startEngine)({ store: store, rawData: rawData, allowEvents: true });
}

function destroy() {
  (0, _IX2VanillaEngine.stopEngine)(store);
}

exports.setEnv = setEnv;
exports.init = init;
exports.destroy = destroy;
exports.store = store;
exports.actions = actions;

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(56)))

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(56), __webpack_require__(177)(module)))

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(93);

var _IX2DataReducer = __webpack_require__(180);

var _IX2RequestReducer = __webpack_require__(262);

var _IX2SessionReducer = __webpack_require__(267);

var _shared = __webpack_require__(2);

var _IX2InstancesReducer = __webpack_require__(268);

var _IX2ParametersReducer = __webpack_require__(269);

var ixElements = _shared.IX2ElementsReducer.ixElements;

exports.default = (0, _redux.combineReducers)({
  ixData: _IX2DataReducer.ixData,
  ixRequest: _IX2RequestReducer.ixRequest,
  ixSession: _IX2SessionReducer.ixSession,
  ixElements: ixElements,
  ixInstances: _IX2InstancesReducer.ixInstances,
  ixParameters: _IX2ParametersReducer.ixParameters
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixData = undefined;

var _shared = __webpack_require__(2);

var IX2_RAW_DATA_IMPORTED = _shared.IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;


var ixData = exports.ixData = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
  var action = arguments[1];

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixData || Object.freeze({});
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(182),
    getMatchData = __webpack_require__(234),
    matchesStrictComparable = __webpack_require__(116);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(102),
    baseIsEqual = __webpack_require__(106);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(33);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(33);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(33);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(33);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32),
    Map = __webpack_require__(60),
    MapCache = __webpack_require__(61);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(103),
    isMasked = __webpack_require__(196),
    isObject = __webpack_require__(4),
    toSource = __webpack_require__(105);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(197);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(200),
    ListCache = __webpack_require__(32),
    Map = __webpack_require__(60);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(201),
    hashDelete = __webpack_require__(202),
    hashGet = __webpack_require__(203),
    hashHas = __webpack_require__(204),
    hashSet = __webpack_require__(205);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(34);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(34);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(34);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(34);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(102),
    equalArrays = __webpack_require__(107),
    equalByTag = __webpack_require__(217),
    equalObjects = __webpack_require__(221),
    getTag = __webpack_require__(69),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(63),
    isTypedArray = __webpack_require__(65);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(61),
    setCacheAdd = __webpack_require__(213),
    setCacheHas = __webpack_require__(214);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    Uint8Array = __webpack_require__(218),
    eq = __webpack_require__(59),
    equalArrays = __webpack_require__(107),
    mapToArray = __webpack_require__(219),
    setToArray = __webpack_require__(220);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 220 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(222);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(108),
    getSymbols = __webpack_require__(109),
    keys = __webpack_require__(36);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 226 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isLength = __webpack_require__(66),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(104);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(112)(module)))

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(113);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(115),
    keys = __webpack_require__(36);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(106),
    get = __webpack_require__(38),
    hasIn = __webpack_require__(239),
    isKey = __webpack_require__(71),
    isStrictComparable = __webpack_require__(115),
    matchesStrictComparable = __webpack_require__(116),
    toKey = __webpack_require__(25);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(237);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(238);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(61);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(240),
    hasPath = __webpack_require__(241);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(64),
    isLength = __webpack_require__(66),
    toKey = __webpack_require__(25);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(120),
    basePropertyDeep = __webpack_require__(243),
    isKey = __webpack_require__(71),
    toKey = __webpack_require__(25);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(70);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(121),
    baseIteratee = __webpack_require__(10),
    toInteger = __webpack_require__(73);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(74);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixElements = undefined;
exports.createElementState = createElementState;
exports.mergeActionState = mergeActionState;

var _timm = __webpack_require__(26);

var _IX2EngineConstants = __webpack_require__(76);

var _IX2EngineActionTypes = __webpack_require__(124);

var initialState = {};

var refState = 'refState';

var ixElements = exports.ixElements = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _IX2EngineActionTypes.IX2_SESSION_STOPPED:
      {
        return initialState;
      }
    case _IX2EngineActionTypes.IX2_INSTANCE_ADDED:
      {
        var _action$payload = action.payload,
            elementId = _action$payload.elementId,
            ref = _action$payload.element,
            origin = _action$payload.origin,
            actionItem = _action$payload.actionItem,
            refType = _action$payload.refType;
        var actionTypeId = actionItem.actionTypeId;

        var newState = state;

        // Create new ref entry if it doesn't exist
        if ((0, _timm.getIn)(newState, [elementId, ref]) !== ref) {
          newState = createElementState(newState, ref, refType, elementId, actionItem);
        }

        // Merge origin values into ref state
        return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
      }
    case _IX2EngineActionTypes.IX2_ELEMENT_STATE_CHANGED:
      {
        var _action$payload2 = action.payload,
            _elementId = _action$payload2.elementId,
            _actionTypeId = _action$payload2.actionTypeId,
            current = _action$payload2.current,
            _actionItem = _action$payload2.actionItem;

        return mergeActionState(state, _elementId, _actionTypeId, current, _actionItem);
      }
    default:
      {
        return state;
      }
  }
};

function createElementState(state, ref, refType, elementId, actionItem) {
  var refId = refType === _IX2EngineConstants.PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, ['config', 'target', 'objectId']) : null;
  return (0, _timm.mergeIn)(state, [elementId], {
    id: elementId,
    ref: ref,
    refId: refId,
    refType: refType
  });
}

function mergeActionState(state, elementId, actionTypeId, actionState,
// FIXME: weak type is used
actionItem) {
  var units = pickUnits(actionItem);
  var mergePath = [elementId, refState, actionTypeId];
  return (0, _timm.mergeIn)(state, mergePath, actionState, units);
}

var valueUnitPairs = [[_IX2EngineConstants.CONFIG_X_VALUE, _IX2EngineConstants.CONFIG_X_UNIT], [_IX2EngineConstants.CONFIG_Y_VALUE, _IX2EngineConstants.CONFIG_Y_UNIT], [_IX2EngineConstants.CONFIG_Z_VALUE, _IX2EngineConstants.CONFIG_Z_UNIT], [_IX2EngineConstants.CONFIG_VALUE, _IX2EngineConstants.CONFIG_UNIT]];

// FIXME: weak type is used
// eslint-disable-next-line flowtype/no-weak-types
function pickUnits(actionItem) {
  var config = actionItem.config;

  return valueUnitPairs.reduce(function (result, pair) {
    var valueKey = pair[0];
    var unitKey = pair[1];
    var configValue = config[valueKey];
    var configUnit = config[unitKey];
    if (configValue != null && configUnit != null) {
      result[unitKey] = configUnit;
    }
    return result;
  }, {});
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(249), __esModule: true };

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(250);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(18);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-env browser */

var getPluginConfig = exports.getPluginConfig = function (pluginInstance, position, config, key) {
  return pluginInstance ? pluginInstance.totalFrames * position : config[key];
};

var getPluginOrigin = exports.getPluginOrigin = function (pluginInstance, actionItem) {
  var startAtPercent = actionItem.config.startAtPercent;
  var totalFrames = pluginInstance.totalFrames;

  return { value: Math.floor(startAtPercent / 100 * totalFrames) };
};

var getPluginDestination = exports.getPluginDestination = function (pluginInstance, actionItem) {
  var endAtPercent = actionItem.config.endAtPercent;
  var totalFrames = pluginInstance.totalFrames;

  return { value: Math.floor(endAtPercent / 100 * totalFrames) };
};

var createPluginInstance = exports.createPluginInstance = function (element, actionItem) {
  var config = actionItem.config;


  if (!config.animationData) {
    return null;
  }

  var lottie = window.Webflow.require('lottie');
  var name = element.getAttribute('data-w-id');
  lottie.destroy(name);

  var instance = lottie.loadAnimation({
    name: name,
    container: element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: JSON.parse(config.animationData)
  });

  instance.setSubframe(true);

  if (!config.useAnimationDuration) {
    instance.setSpeed(getBodymovinSpeed(config.duration, instance));
  }

  return instance;
};

var renderPlugin = exports.renderPlugin = function (pluginInstance, refState, actionItem) {
  var direction = actionItem.config.direction;

  var frame = direction === -1 ? refState[actionItem.actionTypeId].value : pluginInstance.totalFrames - refState[actionItem.actionTypeId].value;
  pluginInstance.setCurrentRawFrameValue(frame);
};

var cleanupPlugin = exports.cleanupPlugin = function (element) {
  var lottie = window.Webflow.require('lottie');
  var name = element.getAttribute('data-w-id');
  lottie.destroy(name);
};

var framesToSeconds = function framesToSeconds(totalFrames, frameRate) {
  return frameRate / totalFrames * 1000;
};

var getBodymovinSpeed = function getBodymovinSpeed(actionItemDuration, pluginInstance) {
  var totalFrames = pluginInstance.totalFrames,
      frameRate = pluginInstance.frameRate;

  return actionItemDuration / framesToSeconds(totalFrames, frameRate);
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(27);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty2 = __webpack_require__(41);

var _defineProperty3 = _interopRequireDefault2(_defineProperty2);

var _Object$freeze, _Object$freeze2, _transformDefaults;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemConfigByKey = undefined;
exports.getInstanceId = getInstanceId;
exports.getElementId = getElementId;
exports.reifyState = reifyState;
exports.observeStore = observeStore;
exports.getAffectedElements = getAffectedElements;
exports.getComputedStyle = getComputedStyle;
exports.getInstanceOrigin = getInstanceOrigin;
exports.getDestinationValues = getDestinationValues;
exports.getRenderType = getRenderType;
exports.getStyleProp = getStyleProp;
exports.renderHTMLElement = renderHTMLElement;
exports.clearAllStyles = clearAllStyles;
exports.cleanupHTMLElement = cleanupHTMLElement;
exports.getMaxDurationItemIndex = getMaxDurationItemIndex;
exports.getActionListProgress = getActionListProgress;
exports.reduceListToGroup = reduceListToGroup;
exports.shouldNamespaceEventParameter = shouldNamespaceEventParameter;
exports.getNamespacedParameterId = getNamespacedParameterId;
exports.shouldAllowMediaQuery = shouldAllowMediaQuery;
exports.stringifyTarget = stringifyTarget;

var _defaultTo = __webpack_require__(253);

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _reduce = __webpack_require__(254);

var _reduce2 = _interopRequireDefault(_reduce);

var _findLast = __webpack_require__(260);

var _findLast2 = _interopRequireDefault(_findLast);

var _get = __webpack_require__(38);

var _get2 = _interopRequireDefault(_get);

var _timm = __webpack_require__(26);

var _IX2EasingUtils = __webpack_require__(123);

var _IX2VanillaPlugins = __webpack_require__(126);

var _IX2EngineConstants = __webpack_require__(76);

var _IX2EngineEventTypes = __webpack_require__(125);

var _IX2EngineItemTypes = __webpack_require__(75);

var _IX2BrowserSupport = __webpack_require__(58);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var trim = function trim(v) {
  return v.trim();
}; /* eslint-env browser */

var colorStyleProps = Object.freeze((_Object$freeze = {}, (0, _defineProperty3.default)(_Object$freeze, _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR, _IX2EngineConstants.BACKGROUND_COLOR), (0, _defineProperty3.default)(_Object$freeze, _IX2EngineItemTypes.STYLE_BORDER, _IX2EngineConstants.BORDER_COLOR), (0, _defineProperty3.default)(_Object$freeze, _IX2EngineItemTypes.STYLE_TEXT_COLOR, _IX2EngineConstants.COLOR), _Object$freeze));

var willChangeProps = Object.freeze((_Object$freeze2 = {}, (0, _defineProperty3.default)(_Object$freeze2, _IX2BrowserSupport.TRANSFORM_PREFIXED, _IX2EngineConstants.TRANSFORM), (0, _defineProperty3.default)(_Object$freeze2, _IX2EngineConstants.BACKGROUND_COLOR, _IX2EngineConstants.BACKGROUND), (0, _defineProperty3.default)(_Object$freeze2, _IX2EngineConstants.OPACITY, _IX2EngineConstants.OPACITY), (0, _defineProperty3.default)(_Object$freeze2, _IX2EngineConstants.FILTER, _IX2EngineConstants.FILTER), (0, _defineProperty3.default)(_Object$freeze2, _IX2EngineConstants.WIDTH, _IX2EngineConstants.WIDTH), (0, _defineProperty3.default)(_Object$freeze2, _IX2EngineConstants.HEIGHT, _IX2EngineConstants.HEIGHT), _Object$freeze2));

var objectCache = {};

var instanceCount = 1;
function getInstanceId() {
  return 'i' + instanceCount++;
}

var elementCount = 1;
function getElementId(ixElements, ref) {
  // TODO: optimize element lookup
  for (var key in ixElements) {
    var ixEl = ixElements[key];
    if (ixEl && ixEl.ref === ref) {
      return ixEl.id;
    }
  }
  return 'e' + elementCount++;
}

function reifyState() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      events = _ref.events,
      actionLists = _ref.actionLists,
      site = _ref.site;

  var eventTypeMap = (0, _reduce2.default)(events, function (result, event) {
    var eventTypeId = event.eventTypeId;

    if (!result[eventTypeId]) {
      result[eventTypeId] = {};
    }
    result[eventTypeId][event.id] = event;
    return result;
  }, {});

  var mediaQueries = site && site.mediaQueries;
  var mediaQueryKeys = [];
  if (mediaQueries) {
    mediaQueryKeys = mediaQueries.map(function (mq) {
      return mq.key;
    });
  } else {
    mediaQueries = [];
    console.warn('IX2 missing mediaQueries in site data');
  }

  return {
    ixData: {
      events: events,
      actionLists: actionLists,
      eventTypeMap: eventTypeMap,
      mediaQueries: mediaQueries,
      mediaQueryKeys: mediaQueryKeys
    }
  };
}

var strictEqual = function strictEqual(a, b) {
  return a === b;
};

function observeStore(_ref2) {
  var store = _ref2.store,
      select = _ref2.select,
      onChange = _ref2.onChange,
      _ref2$comparator = _ref2.comparator,
      comparator = _ref2$comparator === undefined ? strictEqual : _ref2$comparator;
  var getState = store.getState,
      subscribe = store.subscribe;

  var unsubscribe = subscribe(handleChange);
  var currentState = select(getState());
  function handleChange() {
    var nextState = select(getState());
    if (nextState == null) {
      unsubscribe();
      return;
    }
    if (!comparator(nextState, currentState)) {
      currentState = nextState;
      onChange(currentState, store);
    }
  }
  return unsubscribe;
}

function normalizeTarget(target) {
  var type = typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target);
  if (type === 'string') {
    return { id: target };
  } else if (target != null && type === 'object') {
    var id = target.id,
        objectId = target.objectId,
        selector = target.selector,
        selectorGuids = target.selectorGuids,
        appliesTo = target.appliesTo,
        useEventTarget = target.useEventTarget;

    return { id: id, objectId: objectId, selector: selector, selectorGuids: selectorGuids, appliesTo: appliesTo, useEventTarget: useEventTarget };
  }
  return {};
}

function getAffectedElements(_ref3) {
  var config = _ref3.config,
      event = _ref3.event,
      eventTarget = _ref3.eventTarget,
      elementRoot = _ref3.elementRoot,
      elementApi = _ref3.elementApi;

  if (!elementApi) {
    throw new Error('IX2 missing elementApi');
  }

  var getValidDocument = elementApi.getValidDocument,
      getQuerySelector = elementApi.getQuerySelector,
      queryDocument = elementApi.queryDocument,
      getChildElements = elementApi.getChildElements,
      getSiblingElements = elementApi.getSiblingElements,
      matchSelector = elementApi.matchSelector,
      elementContains = elementApi.elementContains,
      isSiblingNode = elementApi.isSiblingNode;
  var target = config.target;

  if (!target) {
    return [];
  }

  var _normalizeTarget = normalizeTarget(target),
      id = _normalizeTarget.id,
      objectId = _normalizeTarget.objectId,
      selector = _normalizeTarget.selector,
      selectorGuids = _normalizeTarget.selectorGuids,
      appliesTo = _normalizeTarget.appliesTo,
      useEventTarget = _normalizeTarget.useEventTarget;

  if (objectId) {
    var ref = objectCache[objectId] || (objectCache[objectId] = {});
    return [ref];
  }

  if (appliesTo === _IX2EngineEventTypes.PAGE) {
    var doc = getValidDocument(id);
    return doc ? [doc] : [];
  }

  var overrides = (0, _get2.default)(event, 'action.config.affectedElements', {});
  var override = overrides[id || selector] || {};
  var validOverride = Boolean(override.id || override.selector);

  var limitAffectedElements = void 0;
  var baseSelector = void 0;
  var finalSelector = void 0;

  var eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));

  if (validOverride) {
    limitAffectedElements = override.limitAffectedElements;
    baseSelector = eventTargetSelector;
    finalSelector = getQuerySelector(override);
  } else {
    // pass in selectorGuids as well for server-side rendering.
    baseSelector = finalSelector = getQuerySelector({
      id: id,
      selector: selector,
      selectorGuids: selectorGuids
    });
  }

  if (event && useEventTarget) {
    // eventTarget is not defined when this function is called in a clear request, so find
    // all target elements associated with the event data, and return affected elements.
    var eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument(eventTargetSelector);

    if (finalSelector) {
      if (useEventTarget === _IX2EngineConstants.PARENT) {
        return queryDocument(finalSelector).filter(function (parentElement) {
          return eventTargets.some(function (targetElement) {
            return elementContains(parentElement, targetElement);
          });
        });
      }
      if (useEventTarget === _IX2EngineConstants.CHILDREN) {
        return queryDocument(finalSelector).filter(function (childElement) {
          return eventTargets.some(function (targetElement) {
            return elementContains(targetElement, childElement);
          });
        });
      }
      if (useEventTarget === _IX2EngineConstants.SIBLINGS) {
        return queryDocument(finalSelector).filter(function (siblingElement) {
          return eventTargets.some(function (targetElement) {
            return isSiblingNode(targetElement, siblingElement);
          });
        });
      }
    }
    return eventTargets;
  }

  if (baseSelector == null || finalSelector == null) {
    return [];
  }

  if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
    return queryDocument(finalSelector).filter(function (element) {
      return elementRoot.contains(element);
    });
  }

  if (limitAffectedElements === _IX2EngineConstants.CHILDREN) {
    return queryDocument(baseSelector, finalSelector);
  } else if (limitAffectedElements === _IX2EngineConstants.IMMEDIATE_CHILDREN) {
    return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else if (limitAffectedElements === _IX2EngineConstants.SIBLINGS) {
    return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else {
    return queryDocument(finalSelector);
  }
}

function getComputedStyle(_ref4) {
  var element = _ref4.element,
      actionItem = _ref4.actionItem;

  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return {};
  }
  var actionTypeId = actionItem.actionTypeId;

  switch (actionTypeId) {
    case _IX2EngineItemTypes.STYLE_SIZE:
    case _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR:
    case _IX2EngineItemTypes.STYLE_BORDER:
    case _IX2EngineItemTypes.STYLE_TEXT_COLOR:
    case _IX2EngineItemTypes.GENERAL_DISPLAY:
      return window.getComputedStyle(element);
    default:
      return {};
  }
}

var pxValueRegex = /px/;

var getFilterDefaults = function getFilterDefaults(actionState, filters) {
  return filters.reduce(function (result, filter) {
    if (result[filter.type] == null) {
      result[filter.type] = filterDefaults[filter.type];
    }

    return result;
  }, actionState || {});
};

function getInstanceOrigin(element) {
  var refState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var computedStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var actionItem = arguments[3];
  var elementApi = arguments[4];
  var pluginInstance = arguments[5];
  var getStyle = elementApi.getStyle;
  var actionTypeId = actionItem.actionTypeId,
      config = actionItem.config;


  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(pluginInstance, actionItem);
  }

  switch (actionTypeId) {
    case _IX2EngineItemTypes.TRANSFORM_MOVE:
    case _IX2EngineItemTypes.TRANSFORM_SCALE:
    case _IX2EngineItemTypes.TRANSFORM_ROTATE:
    case _IX2EngineItemTypes.TRANSFORM_SKEW:
      return refState[actionTypeId] || transformDefaults[actionTypeId];
    case _IX2EngineItemTypes.STYLE_FILTER:
      return getFilterDefaults(refState[actionTypeId], actionItem.config.filters);
    case _IX2EngineItemTypes.STYLE_OPACITY:
      return { value: (0, _defaultTo2.default)(parseFloat(getStyle(element, _IX2EngineConstants.OPACITY)), 1.0) };
    case _IX2EngineItemTypes.STYLE_SIZE:
      {
        var inlineWidth = getStyle(element, _IX2EngineConstants.WIDTH);
        var inlineHeight = getStyle(element, _IX2EngineConstants.HEIGHT);
        var widthValue = void 0;
        var heightValue = void 0;
        // When destination unit is 'AUTO', ensure origin values are in px
        if (config.widthUnit === _IX2EngineConstants.AUTO) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
        } else {
          widthValue = (0, _defaultTo2.default)(parseFloat(inlineWidth), parseFloat(computedStyle.width));
        }
        if (config.heightUnit === _IX2EngineConstants.AUTO) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
        } else {
          heightValue = (0, _defaultTo2.default)(parseFloat(inlineHeight), parseFloat(computedStyle.height));
        }
        return {
          widthValue: widthValue,
          heightValue: heightValue
        };
      }
    case _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR:
    case _IX2EngineItemTypes.STYLE_BORDER:
    case _IX2EngineItemTypes.STYLE_TEXT_COLOR:
      return parseColor({ element: element, actionTypeId: actionTypeId, computedStyle: computedStyle, getStyle: getStyle });
    case _IX2EngineItemTypes.GENERAL_DISPLAY:
      return {
        value: (0, _defaultTo2.default)(getStyle(element, _IX2EngineConstants.DISPLAY), computedStyle.display)
      };
    case _IX2EngineItemTypes.OBJECT_VALUE:
      return refState[actionTypeId] || { value: 0 };
    default:
      return;
  }
}

var reduceFilters = function reduceFilters(result, filter) {
  if (filter) {
    result[filter.type] = filter.value || 0;
  }
  return result;
};

var getItemConfigByKey = exports.getItemConfigByKey = function (actionTypeId, key, config, pluginInstance, position) {
  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(pluginInstance, position, config, key);
  }

  switch (actionTypeId) {
    case _IX2EngineItemTypes.STYLE_FILTER:
      {
        var filter = (0, _findLast2.default)(config.filters, function (_ref5) {
          var type = _ref5.type;
          return type === key;
        });
        return filter ? filter.value : 0;
      }
    default:
      return config[key];
  }
};

function getDestinationValues(_ref6, pluginInstance) {
  var element = _ref6.element,
      actionItem = _ref6.actionItem,
      elementApi = _ref6.elementApi;
  var actionTypeId = actionItem.actionTypeId;


  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    return (0, _IX2VanillaPlugins.getPluginDestination)(actionTypeId)(pluginInstance, actionItem);
  }

  switch (actionTypeId) {
    case _IX2EngineItemTypes.TRANSFORM_MOVE:
    case _IX2EngineItemTypes.TRANSFORM_SCALE:
    case _IX2EngineItemTypes.TRANSFORM_ROTATE:
    case _IX2EngineItemTypes.TRANSFORM_SKEW:
      {
        var _actionItem$config = actionItem.config,
            xValue = _actionItem$config.xValue,
            yValue = _actionItem$config.yValue,
            zValue = _actionItem$config.zValue;

        return { xValue: xValue, yValue: yValue, zValue: zValue };
      }
    case _IX2EngineItemTypes.STYLE_SIZE:
      {
        var getStyle = elementApi.getStyle,
            setStyle = elementApi.setStyle,
            getProperty = elementApi.getProperty;
        var _actionItem$config2 = actionItem.config,
            widthUnit = _actionItem$config2.widthUnit,
            heightUnit = _actionItem$config2.heightUnit;
        var _actionItem$config3 = actionItem.config,
            widthValue = _actionItem$config3.widthValue,
            heightValue = _actionItem$config3.heightValue;

        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return { widthValue: widthValue, heightValue: heightValue };
        }
        if (widthUnit === _IX2EngineConstants.AUTO) {
          var temp = getStyle(element, _IX2EngineConstants.WIDTH);
          setStyle(element, _IX2EngineConstants.WIDTH, '');
          widthValue = getProperty(element, 'offsetWidth');
          setStyle(element, _IX2EngineConstants.WIDTH, temp);
        }
        if (heightUnit === _IX2EngineConstants.AUTO) {
          var _temp = getStyle(element, _IX2EngineConstants.HEIGHT);
          setStyle(element, _IX2EngineConstants.HEIGHT, '');
          heightValue = getProperty(element, 'offsetHeight');
          setStyle(element, _IX2EngineConstants.HEIGHT, _temp);
        }
        return { widthValue: widthValue, heightValue: heightValue };
      }
    case _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR:
    case _IX2EngineItemTypes.STYLE_BORDER:
    case _IX2EngineItemTypes.STYLE_TEXT_COLOR:
      {
        var _actionItem$config4 = actionItem.config,
            rValue = _actionItem$config4.rValue,
            gValue = _actionItem$config4.gValue,
            bValue = _actionItem$config4.bValue,
            aValue = _actionItem$config4.aValue;

        return { rValue: rValue, gValue: gValue, bValue: bValue, aValue: aValue };
      }
    case _IX2EngineItemTypes.STYLE_FILTER:
      {
        return actionItem.config.filters.reduce(reduceFilters, {});
      }
    default:
      {
        var value = actionItem.config.value;

        return { value: value };
      }
  }
}

function getRenderType(actionTypeId) {
  if (/^TRANSFORM_/.test(actionTypeId)) {
    return _IX2EngineConstants.RENDER_TRANSFORM;
  }
  if (/^STYLE_/.test(actionTypeId)) {
    return _IX2EngineConstants.RENDER_STYLE;
  }
  if (/^GENERAL_/.test(actionTypeId)) {
    return _IX2EngineConstants.RENDER_GENERAL;
  }
  if (/^PLUGIN_/.test(actionTypeId)) {
    return _IX2EngineConstants.RENDER_PLUGIN;
  }
}

function getStyleProp(renderType, actionTypeId) {
  return renderType === _IX2EngineConstants.RENDER_STYLE ? actionTypeId.replace('STYLE_', '').toLowerCase() : null;
}

function renderHTMLElement(element, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
  switch (renderType) {
    case _IX2EngineConstants.RENDER_TRANSFORM:
      {
        return renderTransform(element, refState, actionState, actionItem, elementApi);
      }
    case _IX2EngineConstants.RENDER_STYLE:
      {
        return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
      }
    case _IX2EngineConstants.RENDER_GENERAL:
      {
        return renderGeneral(element, actionItem, elementApi);
      }
    case _IX2EngineConstants.RENDER_PLUGIN:
      {
        var actionTypeId = actionItem.actionTypeId;

        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
        }
      }
  }
}

var transformDefaults = (_transformDefaults = {}, (0, _defineProperty3.default)(_transformDefaults, _IX2EngineItemTypes.TRANSFORM_MOVE, Object.freeze({
  xValue: 0,
  yValue: 0,
  zValue: 0
})), (0, _defineProperty3.default)(_transformDefaults, _IX2EngineItemTypes.TRANSFORM_SCALE, Object.freeze({
  xValue: 1,
  yValue: 1,
  zValue: 1
})), (0, _defineProperty3.default)(_transformDefaults, _IX2EngineItemTypes.TRANSFORM_ROTATE, Object.freeze({
  xValue: 0,
  yValue: 0,
  zValue: 0
})), (0, _defineProperty3.default)(_transformDefaults, _IX2EngineItemTypes.TRANSFORM_SKEW, Object.freeze({
  xValue: 0,
  yValue: 0
})), _transformDefaults);

var filterDefaults = Object.freeze({
  blur: 0,
  'hue-rotate': 0,
  invert: 0,
  grayscale: 0,
  saturate: 100,
  sepia: 0,
  contrast: 100,
  brightness: 100
});

var getFilterUnit = function getFilterUnit(filterType, actionItemConfig) {
  var filter = (0, _findLast2.default)(actionItemConfig.filters, function (_ref7) {
    var type = _ref7.type;
    return type === filterType;
  });

  if (filter && filter.unit) {
    return filter.unit;
  }

  switch (filterType) {
    case 'blur':
      return 'px';
    case 'hue-rotate':
      return 'deg';
    default:
      return '%';
  }
};

var transformKeys = Object.keys(transformDefaults);

function renderTransform(element, refState, actionState, actionItem, elementApi) {
  var newTransform = transformKeys.map(function (actionTypeId) {
    var defaults = transformDefaults[actionTypeId];

    var _ref8 = refState[actionTypeId] || {},
        _ref8$xValue = _ref8.xValue,
        xValue = _ref8$xValue === undefined ? defaults.xValue : _ref8$xValue,
        _ref8$yValue = _ref8.yValue,
        yValue = _ref8$yValue === undefined ? defaults.yValue : _ref8$yValue,
        _ref8$zValue = _ref8.zValue,
        zValue = _ref8$zValue === undefined ? defaults.zValue : _ref8$zValue,
        _ref8$xUnit = _ref8.xUnit,
        xUnit = _ref8$xUnit === undefined ? '' : _ref8$xUnit,
        _ref8$yUnit = _ref8.yUnit,
        yUnit = _ref8$yUnit === undefined ? '' : _ref8$yUnit,
        _ref8$zUnit = _ref8.zUnit,
        zUnit = _ref8$zUnit === undefined ? '' : _ref8$zUnit;

    switch (actionTypeId) {
      case _IX2EngineItemTypes.TRANSFORM_MOVE:
        return _IX2EngineConstants.TRANSLATE_3D + '(' + xValue + xUnit + ', ' + yValue + yUnit + ', ' + zValue + zUnit + ')';
      case _IX2EngineItemTypes.TRANSFORM_SCALE:
        return _IX2EngineConstants.SCALE_3D + '(' + xValue + xUnit + ', ' + yValue + yUnit + ', ' + zValue + zUnit + ')';
      case _IX2EngineItemTypes.TRANSFORM_ROTATE:
        return _IX2EngineConstants.ROTATE_X + '(' + xValue + xUnit + ') ' + _IX2EngineConstants.ROTATE_Y + '(' + yValue + yUnit + ') ' + _IX2EngineConstants.ROTATE_Z + '(' + zValue + zUnit + ')';
      case _IX2EngineItemTypes.TRANSFORM_SKEW:
        return _IX2EngineConstants.SKEW + '(' + xValue + xUnit + ', ' + yValue + yUnit + ')';
      default:
        return '';
    }
  }).join(' ');

  var setStyle = elementApi.setStyle;

  addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
  setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform);

  // Set transform-style: preserve-3d
  if (hasDefined3dTransform(actionItem, actionState)) {
    setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, _IX2EngineConstants.PRESERVE_3D);
  }
}

function renderFilter(element, actionState, actionItemConfig, elementApi) {
  var filterValue = (0, _reduce2.default)(actionState, function (result, value, type) {
    return result + ' ' + type + '(' + value + getFilterUnit(type, actionItemConfig) + ')';
  }, '');

  var setStyle = elementApi.setStyle;

  addWillChange(element, _IX2EngineConstants.FILTER, elementApi);
  setStyle(element, _IX2EngineConstants.FILTER, filterValue);
}

function hasDefined3dTransform(_ref9, _ref10) {
  var actionTypeId = _ref9.actionTypeId;
  var xValue = _ref10.xValue,
      yValue = _ref10.yValue,
      zValue = _ref10.zValue;

  // TRANSLATE_Z
  return actionTypeId === _IX2EngineItemTypes.TRANSFORM_MOVE && zValue !== undefined ||
  // SCALE_Z
  actionTypeId === _IX2EngineItemTypes.TRANSFORM_SCALE && zValue !== undefined ||
  // ROTATE_X or ROTATE_Y
  actionTypeId === _IX2EngineItemTypes.TRANSFORM_ROTATE && (xValue !== undefined || yValue !== undefined);
}

var paramCapture = '\\(([^)]+)\\)';
var rgbValidRegex = /^rgb/;
var rgbMatchRegex = RegExp('rgba?' + paramCapture);

function getFirstMatch(regex, value) {
  var match = regex.exec(value);
  return match ? match[1] : '';
}

function parseColor(_ref11) {
  var element = _ref11.element,
      actionTypeId = _ref11.actionTypeId,
      computedStyle = _ref11.computedStyle,
      getStyle = _ref11.getStyle;

  var prop = colorStyleProps[actionTypeId];
  var inlineValue = getStyle(element, prop);
  var value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
  var matches = getFirstMatch(rgbMatchRegex, value).split(_IX2EngineConstants.COMMA_DELIMITER);
  return {
    rValue: (0, _defaultTo2.default)(parseInt(matches[0], 10), 255),
    gValue: (0, _defaultTo2.default)(parseInt(matches[1], 10), 255),
    bValue: (0, _defaultTo2.default)(parseInt(matches[2], 10), 255),
    aValue: (0, _defaultTo2.default)(parseFloat(matches[3]), 1)
  };
}

function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
  var setStyle = elementApi.setStyle;
  var actionTypeId = actionItem.actionTypeId,
      config = actionItem.config;

  switch (actionTypeId) {
    case _IX2EngineItemTypes.STYLE_SIZE:
      {
        var _actionItem$config5 = actionItem.config,
            _actionItem$config5$w = _actionItem$config5.widthUnit,
            widthUnit = _actionItem$config5$w === undefined ? '' : _actionItem$config5$w,
            _actionItem$config5$h = _actionItem$config5.heightUnit,
            heightUnit = _actionItem$config5$h === undefined ? '' : _actionItem$config5$h;
        var widthValue = actionState.widthValue,
            heightValue = actionState.heightValue;

        if (widthValue !== undefined) {
          if (widthUnit === _IX2EngineConstants.AUTO) {
            widthUnit = 'px';
          }
          addWillChange(element, _IX2EngineConstants.WIDTH, elementApi);
          setStyle(element, _IX2EngineConstants.WIDTH, widthValue + widthUnit);
        }
        if (heightValue !== undefined) {
          if (heightUnit === _IX2EngineConstants.AUTO) {
            heightUnit = 'px';
          }
          addWillChange(element, _IX2EngineConstants.HEIGHT, elementApi);
          setStyle(element, _IX2EngineConstants.HEIGHT, heightValue + heightUnit);
        }
        break;
      }
    case _IX2EngineItemTypes.STYLE_FILTER:
      {
        renderFilter(element, actionState, config, elementApi);
        break;
      }
    case _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR:
    case _IX2EngineItemTypes.STYLE_BORDER:
    case _IX2EngineItemTypes.STYLE_TEXT_COLOR:
      {
        var prop = colorStyleProps[actionTypeId];

        var rValue = Math.round(actionState.rValue);
        var gValue = Math.round(actionState.gValue);
        var bValue = Math.round(actionState.bValue);
        var aValue = actionState.aValue;

        addWillChange(element, prop, elementApi);

        setStyle(element, prop, aValue >= 1 ? 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')' : 'rgba(' + rValue + ',' + gValue + ',' + bValue + ',' + aValue + ')');
        break;
      }
    default:
      {
        var _config$unit = config.unit,
            unit = _config$unit === undefined ? '' : _config$unit;

        addWillChange(element, styleProp, elementApi);
        setStyle(element, styleProp, actionState.value + unit);
        break;
      }
  }
}

function renderGeneral(element, actionItem, elementApi) {
  var setStyle = elementApi.setStyle;

  switch (actionItem.actionTypeId) {
    case _IX2EngineItemTypes.GENERAL_DISPLAY:
      {
        var value = actionItem.config.value;

        if (value === _IX2EngineConstants.FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
          setStyle(element, _IX2EngineConstants.DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
        } else {
          setStyle(element, _IX2EngineConstants.DISPLAY, value);
        }
        return;
      }
  }
}

function addWillChange(element, prop, elementApi) {
  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return;
  }
  var validProp = willChangeProps[prop];
  if (!validProp) {
    return;
  }
  var getStyle = elementApi.getStyle,
      setStyle = elementApi.setStyle;

  var value = getStyle(element, _IX2EngineConstants.WILL_CHANGE);
  if (!value) {
    setStyle(element, _IX2EngineConstants.WILL_CHANGE, validProp);
    return;
  }
  var values = value.split(_IX2EngineConstants.COMMA_DELIMITER).map(trim);
  if (values.indexOf(validProp) === -1) {
    setStyle(element, _IX2EngineConstants.WILL_CHANGE, values.concat(validProp).join(_IX2EngineConstants.COMMA_DELIMITER));
  }
}

function removeWillChange(element, prop, elementApi) {
  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return;
  }
  var validProp = willChangeProps[prop];
  if (!validProp) {
    return;
  }
  var getStyle = elementApi.getStyle,
      setStyle = elementApi.setStyle;

  var value = getStyle(element, _IX2EngineConstants.WILL_CHANGE);
  if (!value || value.indexOf(validProp) === -1) {
    return;
  }
  setStyle(element, _IX2EngineConstants.WILL_CHANGE, value.split(_IX2EngineConstants.COMMA_DELIMITER).map(trim).filter(function (v) {
    return v !== validProp;
  }).join(_IX2EngineConstants.COMMA_DELIMITER));
}

function clearAllStyles(_ref12) {
  var store = _ref12.store,
      elementApi = _ref12.elementApi;

  var _store$getState = store.getState(),
      ixData = _store$getState.ixData;

  var _ixData$events = ixData.events,
      events = _ixData$events === undefined ? {} : _ixData$events,
      _ixData$actionLists = ixData.actionLists,
      actionLists = _ixData$actionLists === undefined ? {} : _ixData$actionLists;

  Object.keys(events).forEach(function (eventId) {
    var event = events[eventId];
    var config = event.action.config;
    var actionListId = config.actionListId;

    var actionList = actionLists[actionListId];
    if (actionList) {
      clearActionListStyles({ actionList: actionList, event: event, elementApi: elementApi });
    }
  });
  Object.keys(actionLists).forEach(function (actionListId) {
    clearActionListStyles({ actionList: actionLists[actionListId], elementApi: elementApi });
  });
}

function clearActionListStyles(_ref13) {
  var _ref13$actionList = _ref13.actionList,
      actionList = _ref13$actionList === undefined ? {} : _ref13$actionList,
      event = _ref13.event,
      elementApi = _ref13.elementApi;
  var actionItemGroups = actionList.actionItemGroups,
      continuousParameterGroups = actionList.continuousParameterGroups;

  actionItemGroups && actionItemGroups.forEach(function (actionGroup) {
    clearActionGroupStyles({ actionGroup: actionGroup, event: event, elementApi: elementApi });
  });
  continuousParameterGroups && continuousParameterGroups.forEach(function (paramGroup) {
    var continuousActionGroups = paramGroup.continuousActionGroups;

    continuousActionGroups.forEach(function (actionGroup) {
      clearActionGroupStyles({ actionGroup: actionGroup, event: event, elementApi: elementApi });
    });
  });
}

function clearActionGroupStyles(_ref14) {
  var actionGroup = _ref14.actionGroup,
      event = _ref14.event,
      elementApi = _ref14.elementApi;
  var actionItems = actionGroup.actionItems;

  actionItems.forEach(function (_ref15) {
    var actionTypeId = _ref15.actionTypeId,
        config = _ref15.config;

    var clearElement = processElementByType({
      effect: clearStyleProp,
      actionTypeId: actionTypeId,
      elementApi: elementApi
    });
    getAffectedElements({ config: config, event: event, elementApi: elementApi }).forEach(clearElement);
  });
}

function cleanupHTMLElement(element, actionItem, elementApi) {
  var setStyle = elementApi.setStyle,
      getStyle = elementApi.getStyle;
  var actionTypeId = actionItem.actionTypeId;


  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    return (0, _IX2VanillaPlugins.cleanupPlugin)(actionTypeId)(element, actionItem);
  }

  if (actionTypeId === _IX2EngineItemTypes.STYLE_SIZE) {
    var config = actionItem.config;

    if (config.widthUnit === _IX2EngineConstants.AUTO) {
      setStyle(element, _IX2EngineConstants.WIDTH, '');
    }
    if (config.heightUnit === _IX2EngineConstants.AUTO) {
      setStyle(element, _IX2EngineConstants.HEIGHT, '');
    }
  }

  if (getStyle(element, _IX2EngineConstants.WILL_CHANGE)) {
    processElementByType({ effect: removeWillChange, actionTypeId: actionTypeId, elementApi: elementApi })(element);
  }
}

var processElementByType = function processElementByType(_ref16) {
  var effect = _ref16.effect,
      actionTypeId = _ref16.actionTypeId,
      elementApi = _ref16.elementApi;
  return function (element) {
    switch (actionTypeId) {
      case _IX2EngineItemTypes.TRANSFORM_MOVE:
      case _IX2EngineItemTypes.TRANSFORM_SCALE:
      case _IX2EngineItemTypes.TRANSFORM_ROTATE:
      case _IX2EngineItemTypes.TRANSFORM_SKEW:
        effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
        break;
      case _IX2EngineItemTypes.STYLE_FILTER:
        effect(element, _IX2EngineConstants.FILTER, elementApi);
        break;
      case _IX2EngineItemTypes.STYLE_OPACITY:
        effect(element, _IX2EngineConstants.OPACITY, elementApi);
        break;
      case _IX2EngineItemTypes.STYLE_SIZE:
        effect(element, _IX2EngineConstants.WIDTH, elementApi);
        effect(element, _IX2EngineConstants.HEIGHT, elementApi);
        break;
      case _IX2EngineItemTypes.STYLE_BACKGROUND_COLOR:
      case _IX2EngineItemTypes.STYLE_BORDER:
      case _IX2EngineItemTypes.STYLE_TEXT_COLOR:
        effect(element, colorStyleProps[actionTypeId], elementApi);
        break;
      case _IX2EngineItemTypes.GENERAL_DISPLAY:
        effect(element, _IX2EngineConstants.DISPLAY, elementApi);
        break;
    }
  };
};

function clearStyleProp(element, prop, elementApi) {
  var setStyle = elementApi.setStyle;

  removeWillChange(element, prop, elementApi);
  setStyle(element, prop, '');
  // Clear transform-style: preserve-3d
  if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
    setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, '');
  }
}

function getMaxDurationItemIndex(actionItems) {
  var maxDuration = 0;
  var resultIndex = 0;
  actionItems.forEach(function (actionItem, index) {
    var config = actionItem.config;

    var total = config.delay + config.duration;
    if (total >= maxDuration) {
      maxDuration = total;
      resultIndex = index;
    }
  });
  return resultIndex;
}

function getActionListProgress(actionList, instance) {
  var actionItemGroups = actionList.actionItemGroups,
      useFirstGroupAsInitialState = actionList.useFirstGroupAsInitialState;
  var instanceItem = instance.actionItem,
      _instance$verboseTime = instance.verboseTimeElapsed,
      verboseTimeElapsed = _instance$verboseTime === undefined ? 0 : _instance$verboseTime;

  var totalDuration = 0;
  var elapsedDuration = 0;
  actionItemGroups.forEach(function (group, index) {
    if (useFirstGroupAsInitialState && index === 0) {
      return;
    }
    var actionItems = group.actionItems;

    var carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
    var config = carrierItem.config,
        actionTypeId = carrierItem.actionTypeId;

    if (instanceItem.id === carrierItem.id) {
      elapsedDuration = totalDuration + verboseTimeElapsed;
    }
    var duration = getRenderType(actionTypeId) === _IX2EngineConstants.RENDER_GENERAL ? 0 : config.duration;
    totalDuration += config.delay + duration;
  });
  return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
}

function reduceListToGroup(_ref17) {
  var actionListId = _ref17.actionListId,
      actionItemId = _ref17.actionItemId,
      rawData = _ref17.rawData;
  var actionLists = rawData.actionLists;

  var actionList = actionLists[actionListId];
  var actionItemGroups = actionList.actionItemGroups,
      continuousParameterGroups = actionList.continuousParameterGroups;

  var newActionItems = [];

  var takeItemUntilMatch = function takeItemUntilMatch(actionItem) {
    newActionItems.push((0, _timm.mergeIn)(actionItem, ['config'], {
      delay: 0,
      duration: 0
    }));
    return actionItem.id === actionItemId;
  };

  actionItemGroups && actionItemGroups.some(function (_ref18) {
    var actionItems = _ref18.actionItems;

    return actionItems.some(takeItemUntilMatch);
  });

  continuousParameterGroups && continuousParameterGroups.some(function (paramGroup) {
    var continuousActionGroups = paramGroup.continuousActionGroups;

    return continuousActionGroups.some(function (_ref19) {
      var actionItems = _ref19.actionItems;

      return actionItems.some(takeItemUntilMatch);
    });
  });

  return (0, _timm.setIn)(rawData, ['actionLists'], (0, _defineProperty3.default)({}, actionListId, {
    id: actionListId,
    actionItemGroups: [{
      actionItems: newActionItems
    }]
  }));
}

function shouldNamespaceEventParameter(eventTypeId, _ref21) {
  var basedOn = _ref21.basedOn;

  return eventTypeId === _IX2EngineEventTypes.SCROLLING_IN_VIEW && (basedOn === _IX2EngineEventTypes.ELEMENT || basedOn == null) || eventTypeId === _IX2EngineEventTypes.MOUSE_MOVE && basedOn === _IX2EngineEventTypes.ELEMENT;
}

function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
  return eventStateKey + _IX2EngineConstants.COLON_DELIMITER + continuousParameterGroupId;
}

function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
  // During design mode, current media query key does not exist
  if (mediaQueryKey == null) {
    return true;
  }
  return mediaQueries.indexOf(mediaQueryKey) !== -1;
}

function stringifyTarget(target) {
  if (typeof target === 'string') {
    return target;
  }
  var _target$id = target.id,
      id = _target$id === undefined ? '' : _target$id,
      _target$selector = target.selector,
      selector = _target$selector === undefined ? '' : _target$selector,
      _target$useEventTarge = target.useEventTarget,
      useEventTarget = _target$useEventTarge === undefined ? '' : _target$useEventTarge;

  return id + _IX2EngineConstants.BAR_DELIMITER + selector + _IX2EngineConstants.BAR_DELIMITER + useEventTarget;
}

/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * _.defaultTo(1, 10);
 * // => 1
 *
 * _.defaultTo(undefined, 10);
 * // => 10
 */
function defaultTo(value, defaultValue) {
  return (value == null || value !== value) ? defaultValue : value;
}

module.exports = defaultTo;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(255),
    baseEach = __webpack_require__(127),
    baseIteratee = __webpack_require__(10),
    baseReduce = __webpack_require__(259),
    isArray = __webpack_require__(0);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(257);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(16);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(101),
    findLastIndex = __webpack_require__(261);

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(121),
    baseIteratee = __webpack_require__(10),
    toInteger = __webpack_require__(73);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(41);

var _defineProperty3 = _interopRequireDefault2(_defineProperty2);

var _Object$create;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixRequest = undefined;

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _shared = __webpack_require__(2);

var _timm = __webpack_require__(26);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _shared$IX2EngineActi = _shared.IX2EngineActionTypes,
    IX2_PREVIEW_REQUESTED = _shared$IX2EngineActi.IX2_PREVIEW_REQUESTED,
    IX2_PLAYBACK_REQUESTED = _shared$IX2EngineActi.IX2_PLAYBACK_REQUESTED,
    IX2_STOP_REQUESTED = _shared$IX2EngineActi.IX2_STOP_REQUESTED,
    IX2_CLEAR_REQUESTED = _shared$IX2EngineActi.IX2_CLEAR_REQUESTED;


var initialState = {
  preview: {},
  playback: {},
  stop: {},
  clear: {}
};

var stateKeys = Object.create(null, (_Object$create = {}, (0, _defineProperty3.default)(_Object$create, IX2_PREVIEW_REQUESTED, { value: 'preview' }), (0, _defineProperty3.default)(_Object$create, IX2_PLAYBACK_REQUESTED, { value: 'playback' }), (0, _defineProperty3.default)(_Object$create, IX2_STOP_REQUESTED, { value: 'stop' }), (0, _defineProperty3.default)(_Object$create, IX2_CLEAR_REQUESTED, { value: 'clear' }), _Object$create));

var ixRequest = exports.ixRequest = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type in stateKeys) {
    var key = [stateKeys[action.type]];
    return (0, _timm.setIn)(state, [key], (0, _extends3.default)({}, action.payload));
  }
  return state;
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(18);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(266) });


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(31);
var toObject = __webpack_require__(51);
var IObject = __webpack_require__(90);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixSession = undefined;

var _shared = __webpack_require__(2);

var _timm = __webpack_require__(26);

var _shared$IX2EngineActi = _shared.IX2EngineActionTypes,
    IX2_SESSION_INITIALIZED = _shared$IX2EngineActi.IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED = _shared$IX2EngineActi.IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED = _shared$IX2EngineActi.IX2_SESSION_STOPPED,
    IX2_EVENT_LISTENER_ADDED = _shared$IX2EngineActi.IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED = _shared$IX2EngineActi.IX2_EVENT_STATE_CHANGED,
    IX2_ACTION_LIST_PLAYBACK_CHANGED = _shared$IX2EngineActi.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_VIEWPORT_WIDTH_CHANGED = _shared$IX2EngineActi.IX2_VIEWPORT_WIDTH_CHANGED;


var initialState = {
  active: false,
  eventListeners: [],
  eventState: {},
  playbackState: {},
  viewportWidth: 0,
  mediaQueryKey: null,
  hasBoundaryNodes: false
};

var ixSession = exports.ixSession = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case IX2_SESSION_INITIALIZED:
      {
        var hasBoundaryNodes = action.payload.hasBoundaryNodes;

        return (0, _timm.set)(state, 'hasBoundaryNodes', hasBoundaryNodes);
      }
    case IX2_SESSION_STARTED:
      {
        return (0, _timm.set)(state, 'active', true);
      }
    case IX2_SESSION_STOPPED:
      {
        return initialState;
      }
    case IX2_EVENT_LISTENER_ADDED:
      {
        var eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
        return (0, _timm.set)(state, 'eventListeners', eventListeners);
      }
    case IX2_EVENT_STATE_CHANGED:
      {
        var _action$payload = action.payload,
            stateKey = _action$payload.stateKey,
            newState = _action$payload.newState;

        return (0, _timm.setIn)(state, ['eventState', stateKey], newState);
      }
    case IX2_ACTION_LIST_PLAYBACK_CHANGED:
      {
        var _action$payload2 = action.payload,
            actionListId = _action$payload2.actionListId,
            isPlaying = _action$payload2.isPlaying;

        return (0, _timm.setIn)(state, ['playbackState', actionListId], isPlaying);
      }
    case IX2_VIEWPORT_WIDTH_CHANGED:
      {
        var _action$payload3 = action.payload,
            width = _action$payload3.width,
            mediaQueries = _action$payload3.mediaQueries;

        var mediaQueryCount = mediaQueries.length;
        var mediaQueryKey = null;
        for (var i = 0; i < mediaQueryCount; i++) {
          var _mediaQueries$i = mediaQueries[i],
              key = _mediaQueries$i.key,
              min = _mediaQueries$i.min,
              max = _mediaQueries$i.max;

          if (width >= min && width <= max) {
            mediaQueryKey = key;
            break;
          }
        }
        return (0, _timm.merge)(state, {
          viewportWidth: width,
          mediaQueryKey: mediaQueryKey
        });
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixInstances = undefined;

var _shared = __webpack_require__(2);

var _timm = __webpack_require__(26);

var _shared$IX2EngineActi = _shared.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _shared$IX2EngineActi.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_STOPPED = _shared$IX2EngineActi.IX2_SESSION_STOPPED,
    IX2_INSTANCE_ADDED = _shared$IX2EngineActi.IX2_INSTANCE_ADDED,
    IX2_INSTANCE_STARTED = _shared$IX2EngineActi.IX2_INSTANCE_STARTED,
    IX2_INSTANCE_REMOVED = _shared$IX2EngineActi.IX2_INSTANCE_REMOVED,
    IX2_ANIMATION_FRAME_CHANGED = _shared$IX2EngineActi.IX2_ANIMATION_FRAME_CHANGED; /* eslint-env browser */

var _shared$IX2EasingUtil = _shared.IX2EasingUtils,
    optimizeFloat = _shared$IX2EasingUtil.optimizeFloat,
    applyEasing = _shared$IX2EasingUtil.applyEasing;
var RENDER_GENERAL = _shared.IX2EngineConstants.RENDER_GENERAL;
var _shared$IX2VanillaUti = _shared.IX2VanillaUtils,
    getItemConfigByKey = _shared$IX2VanillaUti.getItemConfigByKey,
    getRenderType = _shared$IX2VanillaUti.getRenderType,
    getStyleProp = _shared$IX2VanillaUti.getStyleProp;


var continuousInstance = function continuousInstance(state, action) {
  var lastPosition = state.position,
      parameterId = state.parameterId,
      actionGroups = state.actionGroups,
      destinationKeys = state.destinationKeys,
      smoothing = state.smoothing,
      restingValue = state.restingValue,
      actionTypeId = state.actionTypeId,
      pluginInstance = state.pluginInstance;
  var parameters = action.payload.parameters;

  var velocity = Math.max(1 - smoothing, 0.01);
  var paramValue = parameters[parameterId];
  if (paramValue == null) {
    velocity = 1;
    paramValue = restingValue;
  }
  var nextPosition = Math.max(paramValue, 0) || 0;
  var positionDiff = optimizeFloat(nextPosition - lastPosition);
  var position = optimizeFloat(lastPosition + positionDiff * velocity);
  var keyframePosition = position * 100;

  if (position === lastPosition && state.current) {
    return state;
  }

  var fromActionItem = void 0;
  var toActionItem = void 0;
  var positionOffset = void 0;
  var positionRange = void 0;

  for (var i = 0, length = actionGroups.length; i < length; i++) {
    var _actionGroups$i = actionGroups[i],
        keyframe = _actionGroups$i.keyframe,
        actionItems = _actionGroups$i.actionItems;


    if (i === 0) {
      fromActionItem = actionItems[0];
    }

    if (keyframePosition >= keyframe) {
      fromActionItem = actionItems[0];

      var nextGroup = actionGroups[i + 1];
      var hasNextItem = nextGroup && keyframePosition !== keyframe;

      toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;

      if (hasNextItem) {
        positionOffset = keyframe / 100;
        positionRange = (nextGroup.keyframe - keyframe) / 100;
      }
    }
  }

  var current = {};

  if (fromActionItem && !toActionItem) {
    for (var _i = 0, _length = destinationKeys.length; _i < _length; _i++) {
      var key = destinationKeys[_i];
      current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config, pluginInstance, position);
    }
  } else if (fromActionItem && toActionItem) {
    var localPosition = (position - positionOffset) / positionRange;
    var easing = fromActionItem.config.easing;
    var eased = applyEasing(easing, localPosition);
    for (var _i2 = 0, _length2 = destinationKeys.length; _i2 < _length2; _i2++) {
      var _key = destinationKeys[_i2];
      var fromVal = getItemConfigByKey(actionTypeId, _key, fromActionItem.config, pluginInstance, position);
      var toVal = getItemConfigByKey(actionTypeId, _key, toActionItem.config, pluginInstance, position);
      var diff = toVal - fromVal;
      var value = diff * eased + fromVal;
      current[_key] = value;
    }
  }

  return (0, _timm.merge)(state, {
    position: position,
    current: current
  });
};

var timedInstance = function timedInstance(state, action) {
  var _state = state,
      active = _state.active,
      origin = _state.origin,
      start = _state.start,
      immediate = _state.immediate,
      renderType = _state.renderType,
      verbose = _state.verbose,
      actionItem = _state.actionItem,
      destination = _state.destination,
      destinationKeys = _state.destinationKeys;


  var easing = actionItem.config.easing;
  var _actionItem$config = actionItem.config,
      duration = _actionItem$config.duration,
      delay = _actionItem$config.delay;

  if (renderType === RENDER_GENERAL) {
    duration = 0;
  } else if (immediate) {
    duration = delay = 0;
  }
  var now = action.payload.now;


  if (active && origin) {
    var delta = now - (start + delay);

    if (verbose) {
      var verboseDelta = now - start;
      var verboseDuration = duration + delay;
      var verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
      state = (0, _timm.set)(state, 'verboseTimeElapsed', verboseDuration * verbosePosition);
    }

    if (delta < 0) {
      return state;
    }

    var position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
    var eased = applyEasing(easing, position);

    var newProps = {};

    var current = null;

    if (destinationKeys.length) {
      current = destinationKeys.reduce(function (result, key) {
        var destValue = destination[key];
        var originVal = parseFloat(origin[key]) || 0;
        var diff = parseFloat(destValue) - originVal;
        var value = diff * eased + originVal;
        result[key] = value;
        return result;
      }, {});
    }

    newProps.current = current;
    newProps.position = position;

    if (position === 1) {
      newProps.active = false;
      newProps.complete = true;
    }

    return (0, _timm.merge)(state, newProps);
  }
  return state;
};

var ixInstances = exports.ixInstances = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
  var action = arguments[1];

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixInstances || Object.freeze({});
      }
    case IX2_SESSION_STOPPED:
      {
        return Object.freeze({});
      }
    case IX2_INSTANCE_ADDED:
      {
        var _action$payload = action.payload,
            instanceId = _action$payload.instanceId,
            elementId = _action$payload.elementId,
            actionItem = _action$payload.actionItem,
            eventId = _action$payload.eventId,
            eventTarget = _action$payload.eventTarget,
            eventStateKey = _action$payload.eventStateKey,
            actionListId = _action$payload.actionListId,
            groupIndex = _action$payload.groupIndex,
            isCarrier = _action$payload.isCarrier,
            origin = _action$payload.origin,
            destination = _action$payload.destination,
            immediate = _action$payload.immediate,
            verbose = _action$payload.verbose,
            continuous = _action$payload.continuous,
            parameterId = _action$payload.parameterId,
            actionGroups = _action$payload.actionGroups,
            smoothing = _action$payload.smoothing,
            restingValue = _action$payload.restingValue,
            pluginInstance = _action$payload.pluginInstance;
        var actionTypeId = actionItem.actionTypeId;

        var renderType = getRenderType(actionTypeId);
        var styleProp = getStyleProp(renderType, actionTypeId);
        var destinationKeys = Object.keys(destination).filter(function (key) {
          return destination[key] != null;
        });

        return (0, _timm.set)(state, instanceId, {
          id: instanceId,
          elementId: elementId,
          active: false,
          position: 0,
          start: 0,
          origin: origin,
          destination: destination,
          destinationKeys: destinationKeys,
          immediate: immediate,
          verbose: verbose,
          current: null,
          actionItem: actionItem,
          actionTypeId: actionTypeId,
          eventId: eventId,
          eventTarget: eventTarget,
          eventStateKey: eventStateKey,
          actionListId: actionListId,
          groupIndex: groupIndex,
          renderType: renderType,
          isCarrier: isCarrier,
          styleProp: styleProp,
          continuous: continuous,
          parameterId: parameterId,
          actionGroups: actionGroups,
          smoothing: smoothing,
          restingValue: restingValue,
          pluginInstance: pluginInstance
        });
      }
    case IX2_INSTANCE_STARTED:
      {
        var _instanceId = action.payload.instanceId;

        return (0, _timm.mergeIn)(state, [_instanceId], {
          active: true,
          complete: false,
          start: window.performance.now()
        });
      }
    case IX2_INSTANCE_REMOVED:
      {
        var _instanceId2 = action.payload.instanceId;

        if (!state[_instanceId2]) {
          return state;
        }
        var newState = {};
        var keys = Object.keys(state);
        var length = keys.length;

        for (var i = 0; i < length; i++) {
          var key = keys[i];
          if (key !== _instanceId2) {
            newState[key] = state[key];
          }
        }
        return newState;
      }
    case IX2_ANIMATION_FRAME_CHANGED:
      {
        var _newState = state;
        var _keys = Object.keys(state);
        var _length3 = _keys.length;

        for (var _i3 = 0; _i3 < _length3; _i3++) {
          var _key2 = _keys[_i3];
          var instance = state[_key2];
          var reducer = instance.continuous ? continuousInstance : timedInstance;
          _newState = (0, _timm.set)(_newState, _key2, reducer(instance, action));
        }
        return _newState;
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixParameters = undefined;

var _shared = __webpack_require__(2);

var _shared$IX2EngineActi = _shared.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _shared$IX2EngineActi.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_STOPPED = _shared$IX2EngineActi.IX2_SESSION_STOPPED,
    IX2_PARAMETER_CHANGED = _shared$IX2EngineActi.IX2_PARAMETER_CHANGED;

// prettier-ignore

var ixParameters = exports.ixParameters = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {/*mutable flat state*/};
  var action = arguments[1];

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixParameters || {/*mutable flat state*/};
      }
    case IX2_SESSION_STOPPED:
      {
        return {/*mutable flat state*/};
      }
    case IX2_PARAMETER_CHANGED:
      {
        var _action$payload = action.payload,
            key = _action$payload.key,
            value = _action$payload.value;

        state[key] = value;
        return state;
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(271);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(272), __esModule: true };

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(273);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(84);
var $export = __webpack_require__(18);
var toObject = __webpack_require__(51);
var call = __webpack_require__(274);
var isArrayIter = __webpack_require__(275);
var toLength = __webpack_require__(91);
var createProperty = __webpack_require__(276);
var getIterFn = __webpack_require__(277);

$export($export.S + $export.F * !__webpack_require__(279)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(23);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(22);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(278);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(23);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(46);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(67),
    getTag = __webpack_require__(69),
    isArrayLike = __webpack_require__(16),
    isString = __webpack_require__(282),
    stringSize = __webpack_require__(283);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(284),
    hasUnicode = __webpack_require__(285),
    unicodeSize = __webpack_require__(286);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(120);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),
/* 285 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(10),
    negate = __webpack_require__(288),
    pickBy = __webpack_require__(289);

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

module.exports = omitBy;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(119),
    baseIteratee = __webpack_require__(10),
    basePickBy = __webpack_require__(290),
    getAllKeysIn = __webpack_require__(293);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(70),
    baseSet = __webpack_require__(291),
    castPath = __webpack_require__(39);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(292),
    castPath = __webpack_require__(39),
    isIndex = __webpack_require__(64),
    isObject = __webpack_require__(4),
    toKey = __webpack_require__(25);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(130),
    eq = __webpack_require__(59);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(108),
    getSymbolsIn = __webpack_require__(294),
    keysIn = __webpack_require__(296);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(62),
    getPrototype = __webpack_require__(295),
    getSymbols = __webpack_require__(109),
    stubArray = __webpack_require__(110);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(113);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(111),
    baseKeysIn = __webpack_require__(297),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isPrototype = __webpack_require__(68),
    nativeKeysIn = __webpack_require__(298);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 298 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(67),
    getTag = __webpack_require__(69),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(0),
    isArrayLike = __webpack_require__(16),
    isBuffer = __webpack_require__(63),
    isPrototype = __webpack_require__(68),
    isTypedArray = __webpack_require__(65);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(130),
    baseForOwn = __webpack_require__(128),
    baseIteratee = __webpack_require__(10);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(302),
    baseEach = __webpack_require__(127),
    castFunction = __webpack_require__(303),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 302 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(72);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(132),
    baseToString = __webpack_require__(118),
    toInteger = __webpack_require__(73),
    toString = __webpack_require__(117);

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

module.exports = endsWith;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(306),
    isObject = __webpack_require__(4);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    now = __webpack_require__(307),
    toNumber = __webpack_require__(74);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(309);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(27);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClosestElement = undefined;
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.getProperty = getProperty;
exports.matchSelector = matchSelector;
exports.getQuerySelector = getQuerySelector;
exports.getValidDocument = getValidDocument;
exports.queryDocument = queryDocument;
exports.elementContains = elementContains;
exports.isSiblingNode = isSiblingNode;
exports.getChildElements = getChildElements;
exports.getSiblingElements = getSiblingElements;
exports.getRefType = getRefType;

var _shared = __webpack_require__(2);

var ELEMENT_MATCHES = _shared.IX2BrowserSupport.ELEMENT_MATCHES; /* eslint-env browser */

var _shared$IX2EngineCons = _shared.IX2EngineConstants,
    IX2_ID_DELIMITER = _shared$IX2EngineCons.IX2_ID_DELIMITER,
    HTML_ELEMENT = _shared$IX2EngineCons.HTML_ELEMENT,
    PLAIN_OBJECT = _shared$IX2EngineCons.PLAIN_OBJECT,
    WF_PAGE = _shared$IX2EngineCons.WF_PAGE;


function setStyle(element, prop, value) {
  element.style[prop] = value;
}

function getStyle(element, prop) {
  return element.style[prop];
}

function getProperty(element, prop) {
  return element[prop];
}

function matchSelector(selector) {
  return function (element) {
    return element[ELEMENT_MATCHES](selector);
  };
}

function getQuerySelector(_ref) {
  var id = _ref.id,
      selector = _ref.selector;

  if (id) {
    var nodeId = id;
    if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
      var pair = id.split(IX2_ID_DELIMITER);
      var pageId = pair[0];
      nodeId = pair[1];
      // Short circuit query if we're on the wrong page
      if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
        return null;
      }
    }
    return '[data-w-id^="' + nodeId + '"]';
  }
  return selector;
}

function getValidDocument(pageId) {
  if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE)) {
    return document;
  }
  return null;
}

function queryDocument(baseSelector, descendantSelector) {
  return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + ' ' + descendantSelector : baseSelector));
}

function elementContains(parent, child) {
  return parent.contains(child);
}

function isSiblingNode(a, b) {
  return a !== b && a.parentNode === b.parentNode;
}

function getChildElements() {
  var sourceElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var elements = [];
  for (var i = 0, length = sourceElements.length; i < length; i++) {
    var children = sourceElements[i].children;
    var childCount = children.length;

    if (!childCount) {
      continue;
    }
    for (var j = 0; j < childCount; j++) {
      elements.push(children[j]);
    }
  }
  return elements;
}

function getSiblingElements() {
  var sourceElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var elements = [];
  var parentCache = [];
  for (var i = 0, length = sourceElements.length; i < length; i++) {
    var parentNode = sourceElements[i].parentNode;

    if (!parentNode || !parentNode.children || !parentNode.children.length) {
      continue;
    }
    if (parentCache.indexOf(parentNode) !== -1) {
      continue;
    }
    parentCache.push(parentNode);
    var el = parentNode.firstElementChild;
    while (el != null) {
      if (sourceElements.indexOf(el) === -1) {
        elements.push(el);
      }
      el = el.nextElementSibling;
    }
  }
  return elements;
}

// eslint complains about prettier's formatting
/* eslint-disable indent */
var getClosestElement = exports.getClosestElement = Element.prototype.closest ? function (element, selector) {
  if (!document.documentElement.contains(element)) {
    return null;
  }
  return element.closest(selector);
} : function (element, selector) {
  if (!document.documentElement.contains(element)) {
    return null;
  }
  var el = element;
  do {
    if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
      return el;
    }
    el = el.parentNode;
  } while (el != null);
  return null;
};
/* eslint-enable indent */

function getRefType(ref) {
  if (ref != null && (typeof ref === 'undefined' ? 'undefined' : (0, _typeof3.default)(ref)) == 'object') {
    return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
  }
  return null;
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(41);

var _defineProperty3 = _interopRequireDefault2(_defineProperty2);

var _typeof2 = __webpack_require__(27);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _exports$default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(42);

var _extends3 = _interopRequireDefault(_extends2);

var _flow = __webpack_require__(312);

var _flow2 = _interopRequireDefault(_flow);

var _get = __webpack_require__(38);

var _get2 = _interopRequireDefault(_get);

var _clamp = __webpack_require__(331);

var _clamp2 = _interopRequireDefault(_clamp);

var _IX2VanillaEngine = __webpack_require__(129);

var _IX2EngineActions = __webpack_require__(77);

var _shared = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-env browser */
var _shared$IX2EngineEven = _shared.IX2EngineEventTypes,
    MOUSE_CLICK = _shared$IX2EngineEven.MOUSE_CLICK,
    MOUSE_SECOND_CLICK = _shared$IX2EngineEven.MOUSE_SECOND_CLICK,
    MOUSE_DOWN = _shared$IX2EngineEven.MOUSE_DOWN,
    MOUSE_UP = _shared$IX2EngineEven.MOUSE_UP,
    MOUSE_OVER = _shared$IX2EngineEven.MOUSE_OVER,
    MOUSE_OUT = _shared$IX2EngineEven.MOUSE_OUT,
    DROPDOWN_CLOSE = _shared$IX2EngineEven.DROPDOWN_CLOSE,
    DROPDOWN_OPEN = _shared$IX2EngineEven.DROPDOWN_OPEN,
    SLIDER_ACTIVE = _shared$IX2EngineEven.SLIDER_ACTIVE,
    SLIDER_INACTIVE = _shared$IX2EngineEven.SLIDER_INACTIVE,
    TAB_ACTIVE = _shared$IX2EngineEven.TAB_ACTIVE,
    TAB_INACTIVE = _shared$IX2EngineEven.TAB_INACTIVE,
    NAVBAR_CLOSE = _shared$IX2EngineEven.NAVBAR_CLOSE,
    NAVBAR_OPEN = _shared$IX2EngineEven.NAVBAR_OPEN,
    MOUSE_MOVE = _shared$IX2EngineEven.MOUSE_MOVE,
    PAGE_SCROLL_DOWN = _shared$IX2EngineEven.PAGE_SCROLL_DOWN,
    SCROLL_INTO_VIEW = _shared$IX2EngineEven.SCROLL_INTO_VIEW,
    COMPONENT_ACTIVE = _shared$IX2EngineEven.COMPONENT_ACTIVE,
    COMPONENT_INACTIVE = _shared$IX2EngineEven.COMPONENT_INACTIVE,
    SCROLL_OUT_OF_VIEW = _shared$IX2EngineEven.SCROLL_OUT_OF_VIEW,
    PAGE_SCROLL_UP = _shared$IX2EngineEven.PAGE_SCROLL_UP,
    SCROLLING_IN_VIEW = _shared$IX2EngineEven.SCROLLING_IN_VIEW,
    PAGE_FINISH = _shared$IX2EngineEven.PAGE_FINISH,
    ECOMMERCE_CART_CLOSE = _shared$IX2EngineEven.ECOMMERCE_CART_CLOSE,
    ECOMMERCE_CART_OPEN = _shared$IX2EngineEven.ECOMMERCE_CART_OPEN,
    PAGE_START = _shared$IX2EngineEven.PAGE_START,
    PAGE_SCROLL = _shared$IX2EngineEven.PAGE_SCROLL,
    ELEMENT = _shared$IX2EngineEven.ELEMENT,
    VIEWPORT = _shared$IX2EngineEven.VIEWPORT,
    PAGE = _shared$IX2EngineEven.PAGE;
var COLON_DELIMITER = _shared.IX2EngineConstants.COLON_DELIMITER;
var getNamespacedParameterId = _shared.IX2VanillaUtils.getNamespacedParameterId;


var composableFilter = function composableFilter(predicate) {
  return function (options) {
    if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object' && predicate(options)) {
      return true;
    }
    return options;
  };
};

var isElement = composableFilter(function (_ref) {
  var element = _ref.element,
      nativeEvent = _ref.nativeEvent;

  return element === nativeEvent.target;
});

var containsElement = composableFilter(function (_ref2) {
  var element = _ref2.element,
      nativeEvent = _ref2.nativeEvent;

  return element.contains(nativeEvent.target);
});

var isOrContainsElement = (0, _flow2.default)([isElement, containsElement]);

var getAutoStopEvent = function getAutoStopEvent(store, autoStopEventId) {
  if (autoStopEventId) {
    var _store$getState = store.getState(),
        ixData = _store$getState.ixData;

    var events = ixData.events;

    var eventToStop = events[autoStopEventId];
    if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
      return eventToStop;
    }
  }
  return null;
};

var hasAutoStopEvent = function hasAutoStopEvent(_ref3) {
  var store = _ref3.store,
      event = _ref3.event;
  var eventAction = event.action;
  var autoStopEventId = eventAction.config.autoStopEventId;

  return Boolean(getAutoStopEvent(store, autoStopEventId));
};

var actionGroupCreator = function actionGroupCreator(_ref4, state) {
  var store = _ref4.store,
      event = _ref4.event,
      element = _ref4.element,
      eventStateKey = _ref4.eventStateKey;
  var eventAction = event.action,
      eventId = event.id;
  var _eventAction$config = eventAction.config,
      actionListId = _eventAction$config.actionListId,
      autoStopEventId = _eventAction$config.autoStopEventId;

  var eventToStop = getAutoStopEvent(store, autoStopEventId);
  if (eventToStop) {
    (0, _IX2VanillaEngine.stopActionGroup)({
      store: store,
      eventId: autoStopEventId,
      eventTarget: element,
      eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
      actionListId: (0, _get2.default)(eventToStop, 'action.config.actionListId')
    });
  }
  (0, _IX2VanillaEngine.stopActionGroup)({
    store: store,
    eventId: eventId,
    eventTarget: element,
    eventStateKey: eventStateKey,
    actionListId: actionListId
  });
  (0, _IX2VanillaEngine.startActionGroup)({
    store: store,
    eventId: eventId,
    eventTarget: element,
    eventStateKey: eventStateKey,
    actionListId: actionListId
  });
  return state;
};

var withFilter = function withFilter(filter, handler) {
  return function (options, state) {
    return filter(options, state) === true ? handler(options, state) : state;
  };
};

var baseActionGroupOptions = {
  handler: withFilter(isOrContainsElement, actionGroupCreator)
};

var baseActivityActionGroupOptions = (0, _extends3.default)({}, baseActionGroupOptions, {
  types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(' ')
});

var CONTINUOUS_SCROLL_EVENT_TYPES = [{ target: window, types: 'resize orientationchange', throttle: true }, {
  target: document,
  types: 'scroll wheel readystatechange IX2_PREVIEW_LOAD',
  throttle: true
}];

var TRIGGERED_SCROLL_EVENT_TYPES = [{ target: document, types: 'scroll wheel', throttle: true }];

var MOUSE_OVER_OUT_TYPES = 'mouseover mouseout';

var baseScrollActionGroupOptions = {
  types: TRIGGERED_SCROLL_EVENT_TYPES
};

var AUTO_STOP_DISABLED_EVENTS = {
  PAGE_START: PAGE_START,
  PAGE_FINISH: PAGE_FINISH
};

var getDocumentState = function () {
  var supportOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = document.compatMode === 'CSS1Compat';
  var rootElement = isCSS1Compat ? document.documentElement : document.body;
  return function () {
    return {
      scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
      scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,

      // required to remove elasticity in Safari scrolling.
      stiffScrollTop: (0, _clamp2.default)(supportOffset ? window.pageYOffset : rootElement.scrollTop, 0, rootElement.scrollHeight - window.innerHeight),
      scrollWidth: rootElement.scrollWidth,
      scrollHeight: rootElement.scrollHeight,
      clientWidth: rootElement.clientWidth,
      clientHeight: rootElement.clientHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  };
}();

var areBoxesIntersecting = function areBoxesIntersecting(a, b) {
  return !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
};

var isElementHovered = function isElementHovered(_ref5) {
  var element = _ref5.element,
      nativeEvent = _ref5.nativeEvent;
  var type = nativeEvent.type,
      target = nativeEvent.target,
      relatedTarget = nativeEvent.relatedTarget;

  var containsTarget = element.contains(target);
  if (type === 'mouseover' && containsTarget) {
    return true;
  }
  var containsRelated = element.contains(relatedTarget);
  if (type === 'mouseout' && containsTarget && containsRelated) {
    return true;
  }
  return false;
};

var isElementVisible = function isElementVisible(options) {
  var element = options.element,
      config = options.event.config;

  var _getDocumentState = getDocumentState(),
      clientWidth = _getDocumentState.clientWidth,
      clientHeight = _getDocumentState.clientHeight;

  var scrollOffsetValue = config.scrollOffsetValue;
  var scrollOffsetUnit = config.scrollOffsetUnit;
  var isPX = scrollOffsetUnit === 'PX';

  var offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;

  return areBoxesIntersecting(element.getBoundingClientRect(), {
    left: 0,
    top: offsetPadding,
    right: clientWidth,
    bottom: clientHeight - offsetPadding
  });
};

var whenComponentActiveChange = function whenComponentActiveChange(handler) {
  return function (options, oldState) {
    var type = options.nativeEvent.type;
    // prettier-ignore

    var isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;

    var newState = (0, _extends3.default)({}, oldState, {
      isActive: isActive
    });

    if (!oldState || newState.isActive !== oldState.isActive) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
};

var whenElementHoverChange = function whenElementHoverChange(handler) {
  return function (options, oldState) {
    var newState = {
      elementHovered: isElementHovered(options)
    };
    if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
      return handler(options, newState) || newState;
    }
    return newState;
  };
};

var whenElementVisibiltyChange = function whenElementVisibiltyChange(handler) {
  return function (options, oldState) {
    var newState = (0, _extends3.default)({}, oldState, {
      elementVisible: isElementVisible(options)
    });
    if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
      return handler(options, newState) || newState;
    }
    return newState;
  };
};

var whenScrollDirectionChange = function whenScrollDirectionChange(handler) {
  return function (options) {
    var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _getDocumentState2 = getDocumentState(),
        scrollTop = _getDocumentState2.stiffScrollTop,
        scrollHeight = _getDocumentState2.scrollHeight,
        innerHeight = _getDocumentState2.innerHeight;

    var _options$event = options.event,
        config = _options$event.config,
        eventTypeId = _options$event.eventTypeId;
    var scrollOffsetValue = config.scrollOffsetValue,
        scrollOffsetUnit = config.scrollOffsetUnit;

    var isPX = scrollOffsetUnit === 'PX';

    var scrollHeightBounds = scrollHeight - innerHeight;
    // percent top since innerHeight may change for mobile devices which also changes the scrollTop value.
    var percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));

    // no state change
    if (oldState && oldState.percentTop === percentTop) {
      return oldState;
    }

    var scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;

    var scrollingDown = void 0;
    var scrollDirectionChanged = void 0;
    var anchorTop = 0;

    if (oldState) {
      scrollingDown = percentTop > oldState.percentTop;
      scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
      anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
    }

    var inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;

    var newState = (0, _extends3.default)({}, oldState, {
      percentTop: percentTop,
      inBounds: inBounds,
      anchorTop: anchorTop,
      scrollingDown: scrollingDown
    });

    if (oldState && inBounds && (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
};

var pointIntersects = function pointIntersects(point, rect) {
  return point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
};

var whenPageLoadFinish = function whenPageLoadFinish(handler) {
  return function (options, oldState) {
    var newState = {
      finished: document.readyState === 'complete'
    };
    if (newState.finished && !(oldState && oldState.finshed)) {
      handler(options);
    }
    return newState;
  };
};

var whenPageLoadStart = function whenPageLoadStart(handler) {
  return function (options, oldState) {
    var newState = {
      started: true
    };
    if (!oldState) {
      handler(options);
    }
    return newState;
  };
};

var whenClickCountChange = function whenClickCountChange(handler) {
  return function (options) {
    var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { clickCount: 0 };

    var newState = {
      clickCount: oldState.clickCount % 2 + 1
    };
    if (newState.clickCount !== oldState.clickCount) {
      return handler(options, newState) || newState;
    }
    return newState;
  };
};

var getComponentActiveOptions = function getComponentActiveOptions() {
  var allowNestedChildrenEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return (0, _extends3.default)({}, baseActivityActionGroupOptions, {
    handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange(function (options, state) {
      return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
    }))
  });
};

var getComponentInactiveOptions = function getComponentInactiveOptions() {
  var allowNestedChildrenEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return (0, _extends3.default)({}, baseActivityActionGroupOptions, {
    handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange(function (options, state) {
      return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
    }))
  });
};

var scrollIntoOutOfViewOptions = (0, _extends3.default)({}, baseScrollActionGroupOptions, {
  handler: whenElementVisibiltyChange(function (options, state) {
    var elementVisible = state.elementVisible;
    var event = options.event,
        store = options.store;

    var _store$getState2 = store.getState(),
        ixData = _store$getState2.ixData;

    var events = ixData.events;

    // trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
    // are registered.

    if (!events[event.action.config.autoStopEventId] && state.triggered) {
      return state;
    }

    if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
      actionGroupCreator(options);
      return (0, _extends3.default)({}, state, {
        triggered: true
      });
    } else {
      return state;
    }
  })
});

var MOUSE_OUT_ROUND_THRESHOLD = 0.05;

exports.default = (_exports$default = {}, (0, _defineProperty3.default)(_exports$default, SLIDER_ACTIVE, getComponentActiveOptions()), (0, _defineProperty3.default)(_exports$default, SLIDER_INACTIVE, getComponentInactiveOptions()), (0, _defineProperty3.default)(_exports$default, DROPDOWN_OPEN, getComponentActiveOptions()), (0, _defineProperty3.default)(_exports$default, DROPDOWN_CLOSE, getComponentInactiveOptions()), (0, _defineProperty3.default)(_exports$default, NAVBAR_OPEN, getComponentActiveOptions(false)), (0, _defineProperty3.default)(_exports$default, NAVBAR_CLOSE, getComponentInactiveOptions(false)), (0, _defineProperty3.default)(_exports$default, TAB_ACTIVE, getComponentActiveOptions()), (0, _defineProperty3.default)(_exports$default, TAB_INACTIVE, getComponentInactiveOptions()), (0, _defineProperty3.default)(_exports$default, ECOMMERCE_CART_OPEN, {
  types: 'ecommerce-cart-open',
  handler: withFilter(isOrContainsElement, actionGroupCreator)
}), (0, _defineProperty3.default)(_exports$default, ECOMMERCE_CART_CLOSE, {
  types: 'ecommerce-cart-close',
  handler: withFilter(isOrContainsElement, actionGroupCreator)
}), (0, _defineProperty3.default)(_exports$default, MOUSE_CLICK, {
  types: 'click',
  handler: withFilter(isOrContainsElement, whenClickCountChange(function (options, _ref6) {
    var clickCount = _ref6.clickCount;

    if (hasAutoStopEvent(options)) {
      clickCount === 1 && actionGroupCreator(options);
    } else {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty3.default)(_exports$default, MOUSE_SECOND_CLICK, {
  types: 'click',
  handler: withFilter(isOrContainsElement, whenClickCountChange(function (options, _ref7) {
    var clickCount = _ref7.clickCount;

    if (clickCount === 2) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty3.default)(_exports$default, MOUSE_DOWN, (0, _extends3.default)({}, baseActionGroupOptions, {
  types: 'mousedown'
})), (0, _defineProperty3.default)(_exports$default, MOUSE_UP, (0, _extends3.default)({}, baseActionGroupOptions, {
  types: 'mouseup'
})), (0, _defineProperty3.default)(_exports$default, MOUSE_OVER, {
  types: MOUSE_OVER_OUT_TYPES,
  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
    if (state.elementHovered) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty3.default)(_exports$default, MOUSE_OUT, {
  types: MOUSE_OVER_OUT_TYPES,
  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
    if (!state.elementHovered) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty3.default)(_exports$default, MOUSE_MOVE, {
  types: 'mousemove mouseout scroll',
  handler: function handler(_ref8) {
    var store = _ref8.store,
        element = _ref8.element,
        eventConfig = _ref8.eventConfig,
        nativeEvent = _ref8.nativeEvent,
        eventStateKey = _ref8.eventStateKey;
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 };
    var basedOn = eventConfig.basedOn,
        selectedAxis = eventConfig.selectedAxis,
        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        reverse = eventConfig.reverse,
        _eventConfig$restingS = eventConfig.restingState,
        restingState = _eventConfig$restingS === undefined ? 0 : _eventConfig$restingS;
    var _nativeEvent$clientX = nativeEvent.clientX,
        clientX = _nativeEvent$clientX === undefined ? state.clientX : _nativeEvent$clientX,
        _nativeEvent$clientY = nativeEvent.clientY,
        clientY = _nativeEvent$clientY === undefined ? state.clientY : _nativeEvent$clientY,
        _nativeEvent$pageX = nativeEvent.pageX,
        pageX = _nativeEvent$pageX === undefined ? state.pageX : _nativeEvent$pageX,
        _nativeEvent$pageY = nativeEvent.pageY,
        pageY = _nativeEvent$pageY === undefined ? state.pageY : _nativeEvent$pageY;

    var isXAxis = selectedAxis === 'X_AXIS';
    var isMouseOut = nativeEvent.type === 'mouseout';

    var value = restingState / 100;
    var namespacedParameterId = continuousParameterGroupId;
    var elementHovered = false;

    switch (basedOn) {
      case VIEWPORT:
        {
          value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
          break;
        }
      case PAGE:
        {
          var _getDocumentState3 = getDocumentState(),
              scrollLeft = _getDocumentState3.scrollLeft,
              scrollTop = _getDocumentState3.scrollTop,
              scrollWidth = _getDocumentState3.scrollWidth,
              scrollHeight = _getDocumentState3.scrollHeight;

          value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
          break;
        }
      case ELEMENT:
      default:
        {
          namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);

          var isMouseEvent = nativeEvent.type.indexOf('mouse') === 0;

          // Use isOrContainsElement for mouse events since they are fired from the target
          if (isMouseEvent && isOrContainsElement({ element: element, nativeEvent: nativeEvent }) !== true) {
            break;
          }

          var rect = element.getBoundingClientRect();
          var left = rect.left,
              top = rect.top,
              width = rect.width,
              height = rect.height;

          // Otherwise we'll need to calculate the mouse position from the previous handler state
          // against the target element's rect

          if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
            break;
          }

          elementHovered = true;

          value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
          break;
        }
    }

    // cover case where the event is a mouse out, but the value is not quite at 100%
    if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
      value = Math.round(value);
    }

    // Only update based on element if the mouse is moving over or has just left the element
    if (basedOn !== ELEMENT || elementHovered || elementHovered !== state.elementHovered) {
      value = reverse ? 1 - value : value;
      store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
    }

    return {
      elementHovered: elementHovered,
      clientX: clientX,
      clientY: clientY,
      pageX: pageX,
      pageY: pageY
    };
  }
}), (0, _defineProperty3.default)(_exports$default, PAGE_SCROLL, {
  types: CONTINUOUS_SCROLL_EVENT_TYPES,
  handler: function handler(_ref9) {
    var store = _ref9.store,
        eventConfig = _ref9.eventConfig;
    var continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        reverse = eventConfig.reverse;

    var _getDocumentState4 = getDocumentState(),
        scrollTop = _getDocumentState4.scrollTop,
        scrollHeight = _getDocumentState4.scrollHeight,
        clientHeight = _getDocumentState4.clientHeight;

    var value = scrollTop / (scrollHeight - clientHeight);
    value = reverse ? 1 - value : value;
    store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
  }
}), (0, _defineProperty3.default)(_exports$default, SCROLLING_IN_VIEW, {
  types: CONTINUOUS_SCROLL_EVENT_TYPES,
  handler: function handler(_ref10) {
    var element = _ref10.element,
        store = _ref10.store,
        eventConfig = _ref10.eventConfig,
        eventStateKey = _ref10.eventStateKey;
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { scrollPercent: 0 };

    var _getDocumentState5 = getDocumentState(),
        scrollLeft = _getDocumentState5.scrollLeft,
        scrollTop = _getDocumentState5.scrollTop,
        scrollWidth = _getDocumentState5.scrollWidth,
        scrollHeight = _getDocumentState5.scrollHeight,
        visibleHeight = _getDocumentState5.clientHeight;

    var basedOn = eventConfig.basedOn,
        selectedAxis = eventConfig.selectedAxis,
        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        startsEntering = eventConfig.startsEntering,
        startsExiting = eventConfig.startsExiting,
        addEndOffset = eventConfig.addEndOffset,
        addStartOffset = eventConfig.addStartOffset,
        _eventConfig$addOffse = eventConfig.addOffsetValue,
        addOffsetValue = _eventConfig$addOffse === undefined ? 0 : _eventConfig$addOffse,
        _eventConfig$endOffse = eventConfig.endOffsetValue,
        endOffsetValue = _eventConfig$endOffse === undefined ? 0 : _eventConfig$endOffse;


    var isXAxis = selectedAxis === 'X_AXIS';

    if (basedOn === VIEWPORT) {
      var value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
      if (value !== state.scrollPercent) {
        store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
      }
      return {
        scrollPercent: value
      };
    } else {
      var namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
      var elementRect = element.getBoundingClientRect();
      var offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
      var offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;

      // flip the offset percentages depending on start / exit type
      offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
      offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;

      var offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
      var offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
      var offsetHeight = offsetElementBottom - offsetElementTop;

      var fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);

      var fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
      var fixedScrollPerc = fixedScrollTop / fixedScrollHeight;

      if (fixedScrollPerc !== state.scrollPercent) {
        store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
      }
      return {
        scrollPercent: fixedScrollPerc
      };
    }
  }
}), (0, _defineProperty3.default)(_exports$default, SCROLL_INTO_VIEW, scrollIntoOutOfViewOptions), (0, _defineProperty3.default)(_exports$default, SCROLL_OUT_OF_VIEW, scrollIntoOutOfViewOptions), (0, _defineProperty3.default)(_exports$default, PAGE_SCROLL_DOWN, (0, _extends3.default)({}, baseScrollActionGroupOptions, {
  handler: whenScrollDirectionChange(function (options, state) {
    if (state.scrollingDown) {
      actionGroupCreator(options);
    }
  })
})), (0, _defineProperty3.default)(_exports$default, PAGE_SCROLL_UP, (0, _extends3.default)({}, baseScrollActionGroupOptions, {
  handler: whenScrollDirectionChange(function (options, state) {
    if (!state.scrollingDown) {
      actionGroupCreator(options);
    }
  })
})), (0, _defineProperty3.default)(_exports$default, PAGE_FINISH, {
  types: 'readystatechange IX2_PREVIEW_LOAD',
  handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
}), (0, _defineProperty3.default)(_exports$default, PAGE_START, {
  types: 'readystatechange IX2_PREVIEW_LOAD',
  handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
}), _exports$default);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(313);

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(78),
    flatRest = __webpack_require__(314),
    getData = __webpack_require__(134),
    getFuncName = __webpack_require__(135),
    isArray = __webpack_require__(0),
    isLaziable = __webpack_require__(327);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(315),
    overRest = __webpack_require__(318),
    setToString = __webpack_require__(320);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(316);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(62),
    isFlattenable = __webpack_require__(317);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(319);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 319 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(321),
    shortOut = __webpack_require__(323);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(322),
    defineProperty = __webpack_require__(131),
    identity = __webpack_require__(72);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 322 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 323 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(114);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 325 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 326 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(80),
    getData = __webpack_require__(134),
    getFuncName = __webpack_require__(135),
    lodash = __webpack_require__(328);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(80),
    LodashWrapper = __webpack_require__(78),
    baseLodash = __webpack_require__(79),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(12),
    wrapperClone = __webpack_require__(329);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(80),
    LodashWrapper = __webpack_require__(78),
    copyArray = __webpack_require__(330);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 330 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(132),
    toNumber = __webpack_require__(74);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: Auto-select links to current page or section
 */

var Webflow = __webpack_require__(17);

Webflow.define('links', module.exports = function ($, _) {
  var api = {};
  var $win = $(window);
  var designer;
  var inApp = Webflow.env();
  var location = window.location;
  var tempLink = document.createElement('a');
  var linkCurrent = 'w--current';
  var validHash = /^#[\w:.-]+$/;
  var indexPage = /index\.(html|php)$/;
  var dirList = /\/$/;
  var anchors;
  var slug;

  // -----------------------------------
  // Module methods

  api.ready = api.design = api.preview = init;

  // -----------------------------------
  // Private methods

  function init() {
    designer = inApp && Webflow.env('design');
    slug = Webflow.env('slug') || location.pathname || '';

    // Reset scroll listener, init anchors
    Webflow.scroll.off(scroll);
    anchors = [];

    // Test all links for a selectable href
    var links = document.links;
    for (var i = 0; i < links.length; ++i) {
      select(links[i]);
    }

    // Listen for scroll if any anchors exist
    if (anchors.length) {
      Webflow.scroll.on(scroll);
      scroll();
    }
  }

  function select(link) {
    var href = designer && link.getAttribute('href-disabled') || link.getAttribute('href');
    tempLink.href = href;

    // Ignore any hrefs with a colon to safely avoid all uri schemes
    if (href.indexOf(':') >= 0) {
      return;
    }

    var $link = $(link);

    // Check for valid hash links w/ sections and use scroll anchor
    if (href.indexOf('#') === 0 && validHash.test(href)) {
      var $section = $(href);
      $section.length && anchors.push({ link: $link, sec: $section, active: false });
      return;
    }

    // Ignore empty # links
    if (href === '#' || href === '') {
      return;
    }

    // Determine whether the link should be selected
    var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
    setClass($link, linkCurrent, match);
  }

  function scroll() {
    var viewTop = $win.scrollTop();
    var viewHeight = $win.height();

    // Check each anchor for a section in view
    _.each(anchors, function (anchor) {
      var $link = anchor.link;
      var $section = anchor.sec;
      var top = $section.offset().top;
      var height = $section.outerHeight();
      var offset = viewHeight * 0.5;
      var active = $section.is(':visible') && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
      if (anchor.active === active) {
        return;
      }
      anchor.active = active;
      setClass($link, linkCurrent, active);
    });
  }

  function setClass($elem, className, add) {
    var exists = $elem.hasClass(className);
    if (add && exists) {
      return;
    }
    if (!add && !exists) {
      return;
    }
    add ? $elem.addClass(className) : $elem.removeClass(className);
  }

  // Export module
  return api;
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: Smooth scroll
 */

var Webflow = __webpack_require__(17);

Webflow.define('scroll', module.exports = function ($) {
  var $doc = $(document);
  var win = window;
  var loc = win.location;
  var history = inIframe() ? null : win.history;
  var validHash = /^[a-zA-Z0-9][\w:.-]*$/;

  function inIframe() {
    try {
      return Boolean(win.frameElement);
    } catch (e) {
      return true;
    }
  }

  function ready() {
    // The current page url without the hash part.
    var locHref = loc.href.split('#')[0];

    // When clicking on a link, check if it links to another part of the page
    $doc.on('click', 'a', function (e) {
      if (Webflow.env('design')) {
        return;
      }

      // Ignore links being used by jQuery mobile
      if (window.$.mobile && $(e.currentTarget).hasClass('ui-link')) {
        return;
      }

      // Ignore empty # links
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        return;
      }

      // The href property always contains the full url so we can compare
      // with the document’s location to only target links on this page.
      var parts = this.href.split('#');
      var hash = parts[0] === locHref ? parts[1] : null;
      if (hash) {
        findEl(hash, e);
      }
    });
  }

  function findEl(hash, e) {
    if (!validHash.test(hash)) {
      return;
    }

    var el = $('#' + hash);
    if (!el.length) {
      return;
    }

    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Push new history state
    if (loc.hash !== hash && history && history.pushState &&
    // Navigation breaks Chrome when the protocol is `file:`.
    !(Webflow.env.chrome && loc.protocol === 'file:')) {
      var oldHash = history.state && history.state.hash;
      if (oldHash !== hash) {
        history.pushState({ hash: hash }, '', '#' + hash);
      }
    }

    // If a fixed header exists, offset for the height
    var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
    var header = $('header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])');
    var offset = header.css('position') === 'fixed' ? header.outerHeight() : 0;

    win.setTimeout(function () {
      scroll(el, offset);
    }, e ? 0 : 300);
  }

  function scroll(el, offset) {
    var start = $(win).scrollTop();
    var end = el.offset().top - offset;

    // If specified, scroll so that the element ends up in the middle of the viewport
    if (el.data('scroll') === 'mid') {
      var available = $(win).height() - offset;
      var elHeight = el.outerHeight();
      if (elHeight < available) {
        end -= Math.round((available - elHeight) / 2);
      }
    }

    var mult = 1;

    // Check for custom time multiplier on the body and the element
    $('body').add(el).each(function () {
      var time = parseFloat($(this).attr('data-scroll-time'), 10);
      if (!isNaN(time) && (time === 0 || time > 0)) {
        mult = time;
      }
    });

    // Shim for IE8 and below
    if (!Date.now) {
      Date.now = function () {
        return new Date().getTime();
      };
    }

    var clock = Date.now();
    var animate = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || function (fn) {
      win.setTimeout(fn, 15);
    };
    var duration = (472.143 * Math.log(Math.abs(start - end) + 125) - 2000) * mult;

    var step = function step() {
      var elapsed = Date.now() - clock;
      win.scroll(0, getY(start, end, elapsed, duration));

      if (elapsed <= duration) {
        animate(step);
      }
    };

    step();
  }

  function getY(start, end, elapsed, duration) {
    if (elapsed > duration) {
      return end;
    }

    return start + (end - start) * ease(elapsed / duration);
  }

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  // Export module
  return { ready: ready };
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @wf-will-never-add-flow-to-this-file
/* eslint-disable */
/**
 * Webflow: Touch events
 */

var Webflow = __webpack_require__(17);

Webflow.define('touch', module.exports = function ($) {
  var api = {};
  var fallback = !document.addEventListener;
  var getSelection = window.getSelection;

  // Fallback to click events in old IE
  if (fallback) {
    $.event.special.tap = { bindType: 'click', delegateType: 'click' };
  }

  api.init = function (el) {
    if (fallback) {
      return null;
    }
    el = typeof el === 'string' ? $(el).get(0) : el;
    return el ? new Touch(el) : null;
  };

  function Touch(el) {
    var active = false;
    var dirty = false;
    var useTouch = false;
    var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
    var startX;
    var startY;
    var lastX;

    el.addEventListener('touchstart', start, false);
    el.addEventListener('touchmove', move, false);
    el.addEventListener('touchend', end, false);
    el.addEventListener('touchcancel', cancel, false);
    el.addEventListener('mousedown', start, false);
    el.addEventListener('mousemove', move, false);
    el.addEventListener('mouseup', end, false);
    el.addEventListener('mouseout', cancel, false);

    function start(evt) {
      // We don’t handle multi-touch events yet.
      var touches = evt.touches;
      if (touches && touches.length > 1) {
        return;
      }

      active = true;
      dirty = false;

      if (touches) {
        useTouch = true;
        startX = touches[0].clientX;
        startY = touches[0].clientY;
      } else {
        startX = evt.clientX;
        startY = evt.clientY;
      }

      lastX = startX;
    }

    function move(evt) {
      if (!active) {
        return;
      }

      if (useTouch && evt.type === 'mousemove') {
        evt.preventDefault();
        evt.stopPropagation();
        return;
      }

      var touches = evt.touches;
      var x = touches ? touches[0].clientX : evt.clientX;
      var y = touches ? touches[0].clientY : evt.clientY;

      var velocityX = x - lastX;
      lastX = x;

      // Allow swipes while pointer is down, but prevent them during text selection
      if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
        triggerEvent('swipe', evt, {
          direction: velocityX > 0 ? 'right' : 'left'
        });
        cancel();
      }

      // If pointer moves more than 10px flag to cancel tap
      if (Math.abs(x - startX) > 10 || Math.abs(y - startY) > 10) {
        dirty = true;
      }
    }

    function end(evt) {
      if (!active) {
        return;
      }
      active = false;

      if (useTouch && evt.type === 'mouseup') {
        evt.preventDefault();
        evt.stopPropagation();
        useTouch = false;
        return;
      }

      if (!dirty) {
        triggerEvent('tap', evt);
      }
    }

    function cancel() {
      active = false;
    }

    function destroy() {
      el.removeEventListener('touchstart', start, false);
      el.removeEventListener('touchmove', move, false);
      el.removeEventListener('touchend', end, false);
      el.removeEventListener('touchcancel', cancel, false);
      el.removeEventListener('mousedown', start, false);
      el.removeEventListener('mousemove', move, false);
      el.removeEventListener('mouseup', end, false);
      el.removeEventListener('mouseout', cancel, false);
      el = null;
    }

    // Public instance methods
    this.destroy = destroy;
  }

  // Wrap native event to supoprt preventdefault + stopPropagation
  function triggerEvent(type, evt, data) {
    var newEvent = $.Event(type, { originalEvent: evt });
    $(evt.target).trigger(newEvent, data);
  }

  // Listen for touch events on all nodes by default.
  api.instance = api.init(document);

  // Export module
  return api;
});

/***/ })
/******/ ]);/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-14":{"id":"e-14","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-14-pop","autoStopEventId":"e-15"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd69d"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555094431583},"e-21":{"id":"e-21","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-21-pop","autoStopEventId":"e-22"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1d9"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555099335221},"e-26":{"id":"e-26","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-26-pop","autoStopEventId":"e-27"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766d8"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555101069309},"e-30":{"id":"e-30","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-30-pop","autoStopEventId":"e-31"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4b7"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555106720900},"e-34":{"id":"e-34","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".content","originalId":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4b6","appliesTo":"CLASS"},"config":[{"continuousParameterGroupId":"a-14-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1555110236336},"e-35":{"id":"e-35","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd69c"},"config":[{"continuousParameterGroupId":"a-14-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1555110841844},"e-36":{"id":"e-36","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1d8"},"config":[{"continuousParameterGroupId":"a-14-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1555110858509},"e-37":{"id":"e-37","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766d7"},"config":[{"continuousParameterGroupId":"a-14-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1555110876071},"e-48":{"id":"e-48","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-49"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c0"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113271941},"e-49":{"id":"e-49","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c0"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113271942},"e-50":{"id":"e-50","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c2"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113327537},"e-51":{"id":"e-51","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c2"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113327538},"e-52":{"id":"e-52","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6a6"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113340363},"e-53":{"id":"e-53","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6a6"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113340363},"e-54":{"id":"e-54","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6a8"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113351428},"e-55":{"id":"e-55","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6a8"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113351428},"e-56":{"id":"e-56","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e2"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113381105},"e-57":{"id":"e-57","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e2"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113381105},"e-58":{"id":"e-58","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e1"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113390933},"e-59":{"id":"e-59","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e1"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555113390933},"e-60":{"id":"e-60","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".main","originalId":"5cafd0175705490444182aee|4aed8ff7-6819-1261-11c4-016ab98be632","appliesTo":"CLASS"},"config":[{"continuousParameterGroupId":"a-3-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-3-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1555113875423},"e-68":{"id":"e-68","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb12e792edee048877e164a|bd2517d3-e253-2d85-ace1-686c752778f9"},"config":[{"continuousParameterGroupId":"a-3-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-3-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1555116143013},"e-71":{"id":"e-71","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-71-pop","autoStopEventId":"e-72"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb12e792edee048877e164a|bd2517d3-e253-2d85-ace1-686c75277906"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555116143013},"e-73":{"id":"e-73","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb12e792edee048877e164a|bd2517d3-e253-2d85-ace1-686c7527790f"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555116143013},"e-74":{"id":"e-74","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb12e792edee048877e164a|bd2517d3-e253-2d85-ace1-686c7527790f"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555116143013},"e-87":{"id":"e-87","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-88"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"PAGE","styleBlockIds":[],"id":"5cafd0175705490444182aee"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555118215193},"e-91":{"id":"e-91","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"e-91-slideInBottom","autoStopEventId":"e-92"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb12e792edee048877e164a|15a520c4-645c-4f34-4ef7-8fbc2324a735"},"config":{"loop":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1555124457331},"e-94":{"id":"e-94","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"PAGE","styleBlockIds":[],"id":"5cb12e792edee048877e164a"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555124730757},"e-97":{"id":"e-97","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c0"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555130580799},"e-99":{"id":"e-99","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb15a772da2adbf5c52b549|436fbd69-0660-58bd-7afd-6d3b41f78b74"},"config":[{"continuousParameterGroupId":"a-14-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1555165358571},"e-100":{"id":"e-100","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"POP_EFFECT","config":{"actionListId":"e-100-pop","autoStopEventId":"e-101"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb15a772da2adbf5c52b549|436fbd69-0660-58bd-7afd-6d3b41f78b75"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1555165358571},"e-102":{"id":"e-102","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-103"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb15a772da2adbf5c52b549|436fbd69-0660-58bd-7afd-6d3b41f78b7e"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555165358571},"e-103":{"id":"e-103","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cb15a772da2adbf5c52b549|436fbd69-0660-58bd-7afd-6d3b41f78b7e"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555165358571},"e-106":{"id":"e-106","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e1"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555176960136},"e-108":{"id":"e-108","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e2"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555177009626},"e-110":{"id":"e-110","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6a6"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555177020627},"e-112":{"id":"e-112","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".overlay-link","originalId":"5cb152bf2edee054f37e7b32|7ef778fe-1006-902f-df12-ccc9b2f31f0a","appliesTo":"CLASS"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555177903220},"e-113":{"id":"e-113","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".overlay-link","originalId":"5cb152bf2edee054f37e7b32|7ef778fe-1006-902f-df12-ccc9b2f31f0a","appliesTo":"CLASS"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555177903221},"e-114":{"id":"e-114","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".overlay-darkmode","originalId":"5cb15a772da2adbf5c52b549|59f8ea71-0f96-448d-9ef0-a6b4bbd0b001","appliesTo":"CLASS"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555178290879},"e-115":{"id":"e-115","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".overlay-darkmode","originalId":"5cb15a772da2adbf5c52b549|59f8ea71-0f96-448d-9ef0-a6b4bbd0b001","appliesTo":"CLASS"},"config":{"loop":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555178290880}},"actionLists":{"a":{"id":"a","title":"load-start","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"yValue":10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"yValue":10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"yValue":10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"value":0,"unit":""}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"value":0,"unit":""}},{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"value":0,"unit":""}},{"id":"a-n-42","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"flex","target":{"id":"5cafd0175705490444182aee|6965b263-ef83-58b2-0a62-9d20e8aa6113"}}},{"id":"a-n-45","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|4aed8ff7-6819-1261-11c4-016ab98be632"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"value":1,"unit":""}},{"id":"a-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"yValue":0,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":50,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"value":1,"unit":""}},{"id":"a-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"yValue":0,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"yValue":0,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-n-35","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"value":0,"unit":""}},{"id":"a-n-36","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|21fe25b6-b0f8-149c-4472-c38fc9a34535"},"yValue":-10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":1050,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"value":0,"unit":""}},{"id":"a-n-38","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1050,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|ae36434c-3c4c-7aae-f39c-fbc30d1d9c6f"},"yValue":-10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}},{"id":"a-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":1100,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"value":0,"unit":""}},{"id":"a-n-39","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1100,"easing":"easeInOut","duration":400,"target":{"id":"5cafd0175705490444182aee|df3cbca4-c72d-d29f-cbf7-9cf4bff2486c"},"yValue":-10,"xUnit":"PX","yUnit":"VH","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-41","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"id":"5cafd0175705490444182aee|6965b263-ef83-58b2-0a62-9d20e8aa6113"}}}]},{"actionItems":[{"id":"a-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":400,"target":{"id":"5cafd0175705490444182aee|4aed8ff7-6819-1261-11c4-016ab98be632"},"value":1,"unit":""}}]}],"createdOn":1555027345256,"useFirstGroupAsInitialState":true},"a-3":{"id":"a-3","title":"mockups","continuousParameterGroups":[{"id":"a-3-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c4"},"yValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6aa"},"yValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-19","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e6"},"yValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-20","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e5"},"yValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c4"},"yValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6aa"},"yValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-21","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e6"},"yValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-22","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e5"},"yValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}]},{"id":"a-3-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c4"},"xValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6aa"},"xValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e6"},"xValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e5"},"xValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c4"},"xValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|f6e562be-26ae-2e39-f2e6-b2acc8cfd6aa"},"xValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-17","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|9440a272-09f4-4df0-99ac-10a71265a1e6"},"xValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-3-n-18","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|50836dbd-b856-74ba-35c2-e3caa5f766e5"},"xValue":-4,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}]}],"createdOn":1555035142163},"a-4":{"id":"a-4","title":"dark-mode","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.moon","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","672ec9bd-d33f-c266-19b1-5aaf23775f74"]},"zValue":720,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.moon","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","672ec9bd-d33f-c266-19b1-5aaf23775f74"]},"value":0,"unit":""}},{"id":"a-4-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".body","selectorGuids":["dc38890a-ec18-4baa-7f5e-a0a0e5a18736"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-4-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".body","selectorGuids":["dc38890a-ec18-4baa-7f5e-a0a0e5a18736"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-7","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".overlay-link","selectorGuids":["a9306f26-0d49-bbd6-b530-7935383c12b6"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".overlay-divider","selectorGuids":["4aa8f8fc-c03e-6953-e771-7dbcc9bb1fa9"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-13","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".social-underline","selectorGuids":["735cffc4-b282-a0ec-fa46-00d5692340ab"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-9","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-12","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"globalSwatchId":"20899c2d","target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-4-n-14","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".numeral.single","selectorGuids":["d4765e2b-2e86-db03-59d7-63b84fb6e067","545e9624-f36e-3734-491c-39abccce7ddd"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".numeral.group","selectorGuids":["d4765e2b-2e86-db03-59d7-63b84fb6e067","763e069c-63ad-03c5-c79a-f01ed9d341e5"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-4-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.sun","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","92d7a1d8-71bd-1ee5-2be3-21f5f79b687f"]},"value":1,"unit":""}},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":300,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.sun","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","92d7a1d8-71bd-1ee5-2be3-21f5f79b687f"]},"zValue":720,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"createdOn":1555040648858,"useFirstGroupAsInitialState":false},"a-5":{"id":"a-5","title":"light-mode","actionItemGroups":[{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".body","selectorGuids":["dc38890a-ec18-4baa-7f5e-a0a0e5a18736"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-5-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".body","selectorGuids":["dc38890a-ec18-4baa-7f5e-a0a0e5a18736"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".overlay-link","selectorGuids":["a9306f26-0d49-bbd6-b530-7935383c12b6"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".overlay-divider","selectorGuids":["4aa8f8fc-c03e-6953-e771-7dbcc9bb1fa9"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-13","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".social-underline","selectorGuids":["735cffc4-b282-a0ec-fa46-00d5692340ab"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-14","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".numeral.single","selectorGuids":["d4765e2b-2e86-db03-59d7-63b84fb6e067","545e9624-f36e-3734-491c-39abccce7ddd"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".numeral.group","selectorGuids":["d4765e2b-2e86-db03-59d7-63b84fb6e067","763e069c-63ad-03c5-c79a-f01ed9d341e5"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.sun","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","92d7a1d8-71bd-1ee5-2be3-21f5f79b687f"]},"value":0,"unit":""}},{"id":"a-5-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.sun","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","92d7a1d8-71bd-1ee5-2be3-21f5f79b687f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-5-n-9","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-12","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":255,"gValue":255,"bValue":255,"aValue":1}},{"id":"a-5-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":600,"globalSwatchId":"20899c2d","target":{"selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"rValue":26,"gValue":26,"bValue":26,"aValue":1}},{"id":"a-5-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.moon","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","672ec9bd-d33f-c266-19b1-5aaf23775f74"]},"value":1,"unit":""}},{"id":"a-5-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":300,"easing":"easeOut","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".darkmode.moon","selectorGuids":["880c2ebf-c550-369a-c437-611d03253fe6","672ec9bd-d33f-c266-19b1-5aaf23775f74"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"createdOn":1555040648858,"useFirstGroupAsInitialState":false},"a-14":{"id":"a-14","title":"3D BAAABBYYY","continuousParameterGroups":[{"id":"a-14-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-14-n-4","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"filters":[{"type":"blur","filterId":"d00a","value":4,"unit":"px"}]}},{"id":"a-14-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"yValue":-5,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":45,"actionItems":[{"id":"a-14-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-14-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"filters":[{"type":"blur","filterId":"d00a","value":0,"unit":"px"}]}}]},{"keyframe":55,"actionItems":[{"id":"a-14-n-13","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-14-n-14","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"filters":[{"type":"blur","filterId":"d00a","value":0,"unit":"px"}]}}]},{"keyframe":100,"actionItems":[{"id":"a-14-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"xValue":0.55,"yValue":0.55,"locked":true}},{"id":"a-14-n-6","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"filters":[{"type":"blur","filterId":"d00a","value":6,"unit":"px"}]}},{"id":"a-14-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5cafd0175705490444182aee|eb95900b-9e89-101d-7749-8cc8b15f8f76"},"yValue":5,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1555110100055},"a-15":{"id":"a-15","title":"social-hover-in","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":200,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".social-underline","selectorGuids":["735cffc4-b282-a0ec-fa46-00d5692340ab"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX"}}]}],"createdOn":1555113058945,"useFirstGroupAsInitialState":false},"a-16":{"id":"a-16","title":"social-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":200,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".social-underline","selectorGuids":["735cffc4-b282-a0ec-fa46-00d5692340ab"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX"}}]}],"createdOn":1555113058945,"useFirstGroupAsInitialState":false},"a-17":{"id":"a-17","title":"button-hover-in","actionItemGroups":[{"actionItems":[{"id":"a-17-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":100,"target":{"useEventTarget":"PARENT","selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"createdOn":1555113275035,"useFirstGroupAsInitialState":false},"a-18":{"id":"a-18","title":"button-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-18-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":100,"target":{"useEventTarget":"PARENT","selector":".button","selectorGuids":["f99b0ccf-2a11-679b-0d0f-3c2bc022f1d4"]},"xValue":1,"yValue":1,"locked":true}}]}],"createdOn":1555113275035,"useFirstGroupAsInitialState":false},"a-19":{"id":"a-19","title":"social-hover-in 2","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":200,"locked":false,"target":{},"widthValue":100,"widthUnit":"%","heightUnit":"PX"}}]}],"createdOn":1555113058945,"useFirstGroupAsInitialState":false},"a-22":{"id":"a-22","title":"weather-out","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5cafd0175705490444182aee|778e256f-63b6-0bb4-3085-0286bb4bd4c0"},"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"createdOn":1555130593036,"useFirstGroupAsInitialState":false},"a-23":{"id":"a-23","title":"main-in","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"xValue":5,"xUnit":"VW","yUnit":"PX","zUnit":"PX"}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"xValue":0,"xUnit":"VW","yUnit":"PX","zUnit":"PX"}},{"id":"a-23-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"value":1,"unit":""}}]}],"createdOn":1555176818134,"useFirstGroupAsInitialState":true},"a-24":{"id":"a-24","title":"main-out","actionItemGroups":[{"actionItems":[{"id":"a-24-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"xValue":-5,"xUnit":"VW","yUnit":"PX","zUnit":"PX"}},{"id":"a-24-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".main","selectorGuids":["c663a145-06fb-1f7a-34b6-f639c4e00be1"]},"value":1,"unit":""}}]}],"createdOn":1555176818134,"useFirstGroupAsInitialState":false},"e-14-pop":{"id":"e-14-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]},"e-21-pop":{"id":"e-21-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]},"e-26-pop":{"id":"e-26-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]},"e-30-pop":{"id":"e-30-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]},"e-71-pop":{"id":"e-71-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]},"e-91-slideInBottom":{"id":"e-91-slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":null,"useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":null,"useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":null,"useEventTarget":true},"value":1}}]}]},"e-100-pop":{"id":"e-100-pop","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":null,"useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":null,"useEventTarget":true},"xValue":1,"yValue":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);
