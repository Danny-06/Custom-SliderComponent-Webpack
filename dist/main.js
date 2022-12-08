/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = "@charset \"UTF-8\";\r\n\r\n#app-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper-component {\r\n  width: 300px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n\r\n  margin: auto;\r\n}\r\n\r\n.box {\r\n  display: grid;\r\n  place-items: center;  \r\n}\r\n\r\n.component {\r\n  width: 100%;\r\n}\r\n\r\n.component.overflow-visible {\r\n  overflow: visible;\r\n}\r\n\r\n.component > .box {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.component > .box.-b1 {\r\n  background-color: #06f;\r\n}\r\n\r\n.component > .box.-b2 {\r\n  background-color: #609;\r\n}\r\n\r\n.component > .box.-b3 {\r\n  background-color: #290;\r\n}\r\n\r\n.component > .box.-b4 {\r\n  background-color: #aa2a2a;\r\n}\r\n\r\n.buttons {\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  column-gap: 0.5rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.3em 0.5em;\r\n\r\n  border-radius: 0.8em;\r\n  background-color: #333;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #444;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #666;\r\n}\r\n\r\nbutton.previous,\r\nbutton.next {\r\n  background-color: #174d72;\r\n}\r\n\r\nbutton.previous:hover,\r\nbutton.next:hover {\r\n  background-color: #216c9f;\r\n}\r\n\r\nbutton.previous:active,\r\nbutton.next:active {\r\n  background-color: #082437;\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replace(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _SliderComponent_SliderComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);





function Slider() {
  const slider = (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.createWebComponent)(_SliderComponent_SliderComponent_js__WEBPACK_IMPORTED_MODULE_1__.SliderComponent, _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div())

  return slider
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElement": () => (/* reexport safe */ _libs_core_js__WEBPACK_IMPORTED_MODULE_0__.buildElement),
/* harmony export */   "createWebComponent": () => (/* reexport safe */ _libs_create_web_component_js__WEBPACK_IMPORTED_MODULE_1__.createWebComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _libs_create_web_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);




const _ = _libs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);




/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NSMaker": () => (/* binding */ NSMaker),
/* harmony export */   "buildElement": () => (/* binding */ buildElement),
/* harmony export */   "buildShadowHostElement": () => (/* binding */ buildShadowHostElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/**
 * @typedef {(...children?: HTMLElement) => DocumentFragment} DOMMakerProxyFunc
 */

/**
 * @typedef {{
 *  [key in keyof HTMLElementTagNameMap]: (properties?: FunctionalDOMProperties, ...children: HTMLElement[]) => HTMLElementTagNameMap[key]
 * }} DOMMakerHTMLProxyProperties
 */

/**
 * @typedef ShadowDOMOptions
 * @property {ShadowRootInit} [init]
 * @property {ShadowRootMode} [mode=open]
 * @property {HTMLElement[]} [children]
 */

/**
* @typedef {{
*  $: {[key in keyof HTMLElementTagNameMap]: (properties?: FunctionalDOMProperties, shadowDOMOptions: ShadowDOMOptions, ...children: HTMLElement[]) => HTMLElementTagNameMap[key]}
* }} DOMMakerShadowDOMHTMLProxyProperties
*/

/**
* @typedef {{
*  [key: string]: (properties?: FunctionalDOMProperties, ...children: HTMLElement[]) => HTMLElement
* }} DOMMakerProxyProperties
*/

/**
 * @typedef {DOMMakerProxyFunc & DOMMakerHTMLProxyProperties & DOMMakerShadowDOMHTMLProxyProperties & DOMMakerProxyProperties} DOMMakerProxy
 */

/**
 * @typedef FunctionalDOMProperties
 * @property {string} id
 * @property {string | string[]} class
 * @property {{[key: string]: string}} dataset
 * @property {{[key: string]: string}} attributes
 * @property {{[key: string]: string}} style
 */


/**
 * @type {DOMMakerProxy}
 * 
 * Proxy object that is the core of this library.  
 * By invoking it as a `function` you can wrap multiple `DOM elements` in a `DocumentFramgent`.
 * 
 * If instead we access a `property` of it  
 * we will get a `function` that creates a `DOM element`  
 * which `tagName` match the name of the function.
 * 
 * @example
 *  const div = document.createElement('div')
 *  const button = document.createElement('button')
 * 
 *  // DocumentFragment<HTMLDivElement, HTMLButtonElement>
 *  const documentFragment = DOMMaker(div, button)
 * 
 * @example
 * const div    = DOMMaker.div()
 * const button = DOMMaker.button()
 * 
 * const customElement = DOMMaker['custom-element']()
 *  
 */
const DOMMaker = new Proxy(function() {}, {

  /**
   * 
   * @param {*} target 
   * @param {*} thisArg 
   * @param {HTMLElement[]} argArray 
   * @returns {DocumentFragment}
   */
  apply: (target, thisArg, argArray) => {
    const documentFragment = new DocumentFragment()

    documentFragment.append(...argArray)

    return documentFragment
  },

  /**
   * @template T
   * @param {*} target 
   * @param {T extends keyof HTMLElementTagNameMap ? T : HTMLElement} property 
   * @param {*} receiver 
   * @returns {(properties: FunctionalDOMProperties, ...children: HTMLElement[]) => HTMLElementTagNameMap[T]}
   */
  get: (target, property, receiver) => {
    switch (property) {
      case '$':
        return new Proxy(function() {}, {
          get: (target, innerProperty, receiver) => {
            return function(properties, shadowDOMOptions, ...children) {
              const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(innerProperty)

              buildShadowHostElement(element, properties, shadowDOMOptions, ...children)

              return element
            }
          }
        })

      default:
    }

    return function(properties, ...children) {
      const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(property)

      buildElement(element, properties, ...children)

      return element
    }
  }

})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMMaker);

/**
 * @template T
 * @param {T extends HTMLElement ? T : never} element 
 * @param {FunctionalDOMProperties=} properties 
 * @param  {...HTMLElement} children 
 * @returns {T}
 * 
 * It's similar to `DOMMaker.property()` but instead of  
 * creating an element it just takes an `element` and applies  
 * the `properties` and the `children` to it.
 */
function buildElement(element, properties = {}, ...children) {
  const {id, class: classes, dataset, attributes, style} = properties

  if (id) {
    element.id = id
  }

  if (classes) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setClasses)(element, classes)
  }

  if (dataset) {
    for (const [property, value] of Object.entries(dataset ?? {})) {
      if (value === undefined) continue

      element.dataset[property] = value
    }
  }

  for (const [property, value] of Object.entries(attributes ?? {})) {
    if (value === undefined) continue

    if (['src', 'href'].includes(property)) {
      element.setAttribute(property, tp.createScriptURL(value))

      continue
    }

    element.setAttribute(property, value)
  }

  if (style) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setStyleProperties)(element.style, style)
  }

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setChildren)(element, children)

  return element
}

/**
 * @template T
 * @param {T extends HTMLElement ? T : never} element 
 * @param {FunctionalDOMProperties=} properties 
 * @param {ShadowDOMOptions=} shadowDOMOptions
 * @param  {...HTMLElement} children 
 * @returns {T}
 * 
 * It's similar to `buildElement` but it also accepts
 * an extra parameter to configure the `Shadow DOM`
 */
function buildShadowHostElement(element, properties = {}, shadowDOMOptions = {}, ...children) {
  buildElement(element, properties, ...children)

  const shadowRootInit = {mode: 'open', ...shadowDOMOptions.init}

  if (shadowDOMOptions.mode) {
    shadowRootInit.mode = shadowDOMOptions.mode
  }

  const shadowRoot = element.attachShadow(shadowRootInit)

  shadowRoot.append(...shadowDOMOptions.children)

  return element
}




// TO DO

/**
 * @template T
 * @template R
 * @typedef {{
 *  [key in keyof SVGElementTagNameMap]: (properties?: FunctionalDOMProperties, ...children: T[]) => R extends 'http://www.w3.org/2000/svg' ? SVGElementTagNameMap[key] : Element
 * }} NSMakerProxySVGProperties
 */

/**
 * @template T
 * @template R
 * @typedef {{
 *  [key: string]: (properties?: FunctionalDOMProperties, ...children: T[]) => R extends 'http://www.w3.org/2000/svg' ? SVGElement : T
 * }} NSMakerProxyStringProperties
 */

/**
 * @template T
 * @template R
 * @typedef {NSMakerProxySVGProperties<T, R> & NSMakerProxyStringProperties<T, R>} NSMakerProxyProperties
 */

/**
 * @typedef {<T extends 'http://www.w3.org/2000/svg' | string>(namespace: T) => T extends 'http://www.w3.org/2000/svg' ? NSMakerProxyProperties<SVGElement, T> : NSMakerProxyProperties<Element, T>} NSMaker
 */

/**
 * @type {NSMaker}
 * 
 * Function that returns a Proxy object to create elements of a specific namespace.  
 * It is similar to `DOMMaker` in behavior but just limited to other elements that are not HTML.  
 * 
 * @example
 * const SVGMaker = NSMaker('http://www.w3.org/2000/svg')
 * 
 * const svg = SVGMaker.svg()
 * const rect = SVGMaker.rect()
 * 
 * const CustomMaker = NSMaker('my-namespace')
 * 
 * const customElement = NSMaker.customelement()
 * 
 */
const NSMaker = namespace => {
  return new Proxy(function() {}, {

    /**
     * @template T
     * @param {*} target 
     * @param {T extends keyof HTMLElementTagNameMap ? T : HTMLElement} property 
     * @param {*} receiver 
     * @returns {(properties: FunctionalDOMProperties, ...children: HTMLElement[]) => HTMLElementTagNameMap[T]}
     */
    get: (target, property, receiver) => {  
      return function(properties, ...children) {
        const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElementNS)(property, namespace)
  
        buildElement(element, properties, ...children)
  
        return element
      }
    }
  
  })
}


function buildElementNS() {

}


/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementNS": () => (/* binding */ createElementNS),
/* harmony export */   "setChildren": () => (/* binding */ setChildren),
/* harmony export */   "setClasses": () => (/* binding */ setClasses),
/* harmony export */   "setStyleProperties": () => (/* binding */ setStyleProperties)
/* harmony export */ });
/**
 * @template T
 * @param {T extends keyof HTMLElementTagNameMap ? T : never} tagName 
 * @returns {HTMLElementTagNameMap[T]}
 */
function createElement(tagName) {
  const element = document.createElement(tagName)

  return element
}

/**
 * @template T
 * @template {'http://www.w3.org/2000/svg' | string} R
 * @param {T extends keyof SVGElementTagNameMap ? T : string} tagName 
 * @param {R} namespace
 * @returns {namespace extends 'http://www.w3.org/2000/svg' ? T extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[T] : SVGElement : Element}
 */
function createElementNS(tagName, namespace) {
  const element = document.createElementNS(namespace, tagName)

  return element
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {string | string[]} classes 
 */
function setClasses(element, classes) {
  if (Array.isArray(classes)) {
    element.className = classes.join(' ')
  } else if (typeof classes === 'string') {
    element.className = classes
  }
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {HTMLElement[]} children 
 */
function setChildren(element, children) {
  element.append(...children)
}


/**
 * 
 * @param {string} string 
 * @returns {string}
 */
const lowerCaseToHyphen = string => string.split(/(?=[A-Z])/).map(str => str.toLowerCase()).join('-')

/**
 *
 * @param {CSSStyleDeclaration} style
 * @param {{[key: string]: string}} properties
 */
function setStyleProperties(style, properties) {
  for (const property in properties) {

    let propertyName = property

    const isCustomProperty = propertyName.startsWith('--')
    const hasHyphen = propertyName.includes('-')
    if(!isCustomProperty && !hasHyphen) {
      propertyName = lowerCaseToHyphen(propertyName)
    }

    const prefixVendors = propertyName.search(/^(webkit|moz|ms|o)-/) !== -1
    if(prefixVendors) {
      propertyName = `-${propertyName}`
    }

    const priority = properties[property].match(/![a-z]+$/ig)?.[0].slice(1) ?? ''
    const propertyValue = priority ? properties[property].replace(new RegExp(`!${priority}$`, 'i'), '') : properties[property]

    style.setProperty(propertyName, propertyValue, priority)

  }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWebComponent": () => (/* binding */ createWebComponent)
/* harmony export */ });
const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes') {
      const target = mutation.target

      const name = mutation.attributeName
      const oldValue = mutation.oldValue
      const newValue = target.getAttribute(name)

      target?.attributeChangedCallback(name, oldValue, newValue)
    }
  })
})

/**
 * Allows the creation of custom elements through any `HTMLElement` like a `<div>`.  
 * The class provided is invoked in the `element` and then its `prototype` is changed  
 * with the prototype of the `class`.  
 * 
 * To declare the `constructor` of the class it must be declared as `_constructor_`  
 * instead of the normal constructor to allow the function to invoke it in the `element`.  
 * 
 * Since the `element` is not an instance of the component is not posible to use `private properties`.  
 * For that reason, is recommended to replace them with properties that starts with an underscore.  
 * 
 * @template T
 * @param {T.prototype extends HTMLElement ? T : never} classComponent 
 * @param {HTMLElement} [elementToApply=null]
 * @returns {InstanceType<T>}
 * 
 * @example
 * const component = createWebComponent(class MyComponent extends HTMLElement {
 *   _constructor_() {
 *     this.property = 'value'
 *
 *     console.log(this._privateValue)
 *   }
 *
 *   get innerHTML() {
 *     return super.innerHTML
 *   }
 *
 *   set innerHTML(value) {
 *     super.innerHTML = value
 *   }
 *
 *   static get observedAttributes() {
 *     return ['my-attribute']
 *   }
 *
 *   attributeChangedCallback(name, oldValue, newValue) {
 *     console.log(...arguments)
 *   }
 * })
 */
function createWebComponent(classComponent, elementToApply = null) {
  if (!(classComponent.prototype instanceof HTMLElement)) {
    throw new TypeError(`class component must extends HTMLElement`)
  }

  const component = elementToApply ?? document.createElement('div')

  if (classComponent.observedAttributes) {
    mutationObserver.observe(component, {
      attributes: true,
      attributeFilter: classComponent.observedAttributes,
      attributeOldValue: true
    })
  }

  Object.setPrototypeOf(component, classComponent.prototype)
  classComponent.prototype._constructor_?.call(component)

  return component
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _SliderComponent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _SliderComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



class SliderInterface {

  constructor(targetComponent, wrapper) {

    const stylesheet = targetComponent.shadowRoot.adoptedStyleSheets[0]
    const rule = [...stylesheet.cssRules].find(rule => rule.selectorText === '.wrapper')

    Object.defineProperties(this, {
      targetComponent: {enumerable: true, value: targetComponent},
      wrapper:         {enumerable: true, value: wrapper},
      _currentIndex:   {writable: true,   value: 0},
      _wrapperCSSRule: {value: rule},
      _storedTransitionDuration: {writable: true, value: undefined},
      _direction: {writable: true, value: 'horizontal'},
      _reversed: {writable: true, value: false},
      _cyclic: {writable: true, value: false},
      _isTransitioning: {writable: true, value: false},
      _currentSlottedElement: {writable: true, value: null}
    })

    this._direction = this.targetComponent.dataset.direction ?? this._direction

  }

  toggleCyclic() {
    return this.cyclic = !this.cyclic
  }

  get cyclic() {
    return this._cyclic
  }

  set cyclic(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError(`value must be a boolean`)
    }

    this._cyclic = value
  }

  toggleReversed() {
    return this.reversed = !this.reversed
  }

  get reversed() {
    return this._reversed
  }

  set reversed(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError(`value must be a boolean`)
    }

    this._reversed = value

    this.removeTransition()

    if (value) {
      this.wrapper.classList.add('reversed')
    } else {
      this.wrapper.classList.remove('reversed')
    }

    // Trigger layout to calculate styles
    this.wrapper.getBoundingClientRect()

    this.restoreTransition()
  }

  toggleDirection() {
    this.direction = this._direction === 'horizontal' ? 'vertical' : 'horizontal'
  }

  get direction() {
    return this._direction
  }

  set direction(value) {
    if (value == null) {
      delete this.targetComponent.dataset.direction

      this._direction = 'horizontal'

      this.wrapper.classList.remove('vertical')
      this.wrapper.classList.add('horizontal')
      return
    }

    if (value !== 'horizontal' && value !== 'vertical') {
      throw new TypeError(`direction must be either 'horizontal' or 'vertical'`)
    }

    this._direction = value

    this.removeTransition()

    if (value === 'horizontal') {
      this.wrapper.classList.remove('vertical')
      this.wrapper.classList.add('horizontal')
    } else {
      this.wrapper.classList.remove('horizontal')
      this.wrapper.classList.add('vertical')
    }

    // Trigger layout to calculate styles
    this.wrapper.getBoundingClientRect()

    this.restoreTransition()
  }

  getElement(index) {
    return this.targetComponent.children[index]
  }

  get length() {
    return this.targetComponent.childElementCount
  }

  get currentIndex() {
    return this._currentIndex
  }

  set currentIndex(value) {
    this.setCurrentIndex(value)
  }

  async setCurrentIndex(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Value must be a number`)
    }

    if (this._cyclic && this._isTransitioning && this._isCurrentIndexStartOrEnd) {
      await this._waitForTransformTransitionEnd()
    }

    this._isTransitioning = true


    value = Math.floor(value)

    value %= this.length

    if (value < 0) {
      value = this.length + value
    }

    if (value === this._currentIndex) return

    if (this._cyclic) {
      this.handleCyclicTransitionStart(value)
    } else {
      this.position = value
    }

    this._currentIndex = value

    return new Promise(resolve => {
      if (!this.hasTransition) {
        resolve(value)

        if (this._cyclic) {
          this.handleCyclicTransitionEnd()
        }

        this._isTransitioning = false
        return
      }

      this._waitForTransformTransitionEnd()
      .then(() => {
        resolve(value)

        if (this._cyclic) {
          this.handleCyclicTransitionEnd()
        }

        this._isTransitioning = false
      })
    })
  }

  async _waitForTransformTransitionEnd() {
    await this._waitForEvent(this.wrapper, 'transitionend', event => event.propertyName !== 'transform')
  }

  _waitForEvent(target, eventType, callbackCheck) {
    return new Promise(resolve => {
      const abortController = new AbortController()

      target.addEventListener(eventType, event => {
        if (callbackCheck(event)) return

        resolve(event)

        abortController.abort()
      }, {signal: abortController.signal})
    })
  }

  get _isCurrentIndexStart() {
    return this.isValueStart(this._currentIndex)
  }

  get _isCurrentIndexEnd() {
    return this.isValueEnd(this._currentIndex)
  }

  get _isCurrentIndexStartOrEnd() {
    return this._isCurrentIndexStart || this._isCurrentIndexEnd
  }

  isValueStart(value) {
    return value === 0
  }

  isValueEnd(value) {
    return value === this.length - 1
  }

  handleCyclicTransitionStart(value) {
    const isEndToStart = this._isCurrentIndexEnd && this.isValueStart(value)
    const isStartToEnd = this._isCurrentIndexStart && this.isValueEnd(value)

    if (isEndToStart) {
      this.removeTransition()

      this._currentSlottedElement = this.targetComponent.firstElementChild
      this._currentSlottedElement.slot = 'next'

      this.position--

      // Trigger layout to calculate styles
      this.wrapper.getBoundingClientRect()

      this.restoreTransition()

      this.position++
    } else if (isStartToEnd) {
      this.removeTransition()

      this._currentSlottedElement = this.targetComponent.lastElementChild
      this._currentSlottedElement.slot = 'previous'

      this.position++

      // Trigger layout to calculate styles
      this.wrapper.getBoundingClientRect()

      this.restoreTransition()

      this.position--
    } else {
      this.position = value
    }
  }

  handleCyclicTransitionEnd() {
    if (this._currentSlottedElement == null) return

    this.removeTransition()

    this.position = this._currentIndex

    this._currentSlottedElement.removeAttribute('slot')
    this._currentSlottedElement = null

    // Trigger layout to calculate styles
    this.wrapper.getBoundingClientRect()

    this.restoreTransition()
  }

  get transitionDuration() {
    return this._wrapperCSSRule.style.transitionDuration
  }

  set transitionDuration(value) {
    this._wrapperCSSRule.style.transitionDuration = value
  }

  get hasTransition() {
    return this.transitionDuration !== '0s' && this.transitionDuration !== '0ms'
  }

  removeTransition() {
    this._storedTransitionDuration = this.transitionDuration
    this.transitionDuration = '0s'
  }

  restoreTransition() {
    this.transitionDuration = this._storedTransitionDuration
  }

  next() {
    return this.setCurrentIndex(this.currentIndex + 1)
  }

  previous() {
    return this.setCurrentIndex(this.currentIndex - 1)
  }

  get position() {
    const positionValue = parseInt(this.wrapper.style.getPropertyValue('--position'))
    return isNaN(positionValue) ? 0 : positionValue
  }

  set position(value) {
    this.wrapper.style.setProperty('--position', value)
  }

}

class SliderComponent extends HTMLElement {

  _constructor_() {
    this.attachShadow({mode: 'open'})

    this.shadowRoot.adoptedStyleSheets = [_SliderComponent_css__WEBPACK_IMPORTED_MODULE_1__["default"]]

    this.shadowRoot.append(_SliderComponent_html__WEBPACK_IMPORTED_MODULE_0__["default"].clone(document))

    const wrapper = this.shadowRoot.querySelector('.wrapper')

    Object.defineProperties(this, {
      slider: {
        enumerable: true,
        value: new SliderInterface(this, wrapper)
      }
    })
  }

  /**
   * @type {SliderInterface}
   */
  slider

  get innerHTML() {
    return super.innerHTML
  }

  set innerHTML(value) {
    super.innerHTML = value
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.ignoreAttributeChange) return

    switch (name) {
      case '':
      break
    }
  }

}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  function queryDeclarativeTemplatesShadowDOM(documentFragment) {
    const templates = [...documentFragment.querySelectorAll('template[shadowroot]:first-child')]
  
    templates.forEach(template => {
      const innerTemplates = queryDeclarativeTemplatesShadowDOM(template.content)
      templates.push(...innerTemplates)
    })
  
    return templates
  }

  function parseDeclarativeShadowDOM(hostElement) {
    if (!hostElement) {
      throw new Error(`HostElement not found for declarative shadow DOM`)
    }
  
    const template = hostElement.querySelector(':scope > template[shadowroot]:first-child')
  
    const hasTemplate = template != null
  
    if (!hasTemplate) return false
  
    template.remove()
  
    const mode = template.getAttribute('shadowroot')
  
    const shadowRoot = hostElement.attachShadow({mode})
    shadowRoot.append(template.content)
  
    return shadowRoot
  }

  function parseMultipleDeclarativeShadowDOM(element) {
    const templates = queryDeclarativeTemplatesShadowDOM(element)
  
    const shadowRoots = templates.map(template => parseDeclarativeShadowDOM(template.parentElement))
  
    return shadowRoots
  }

  function turnStringIntoTrustedHTML(htmlString) {
    const trustedHTMLPolicy = trustedTypes.createPolicy('trustedHTML', {createHTML: string => string})
    return trustedHTMLPolicy.createHTML(htmlString)
  }

  const html = "<div part=\"wrapper\" class=\"wrapper horizontal\">\r\n  <slot name=\"previous\"></slot>\r\n  <slot></slot>\r\n  <slot name=\"next\"></slot>\r\n</div>\r\n"

  const trustedHTML = turnStringIntoTrustedHTML(html)

  const htmlDoc = document.implementation.createHTMLDocument()

  const documentFragment = htmlDoc.createRange().createContextualFragment(trustedHTML)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    documentFragment: documentFragment.cloneNode(true),

    clone(ownerDocument = null) {
      const clonedDF = documentFragment.cloneNode(true)
      parseMultipleDeclarativeShadowDOM(clonedDF)

      if (ownerDocument instanceof Document) {
        ownerDocument.adoptNode(clonedDF)
      }

      return clonedDF
    }
  });
  

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = ":host {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:not(:host),\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n* {\r\n  min-width: 0;\r\n  min-height: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n\r\n  transition-property: transform;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.wrapper,\r\n.wrapper.horizontal {\r\n  flex-direction: row;\r\n  transform: translateX( calc( -100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.reversed,\r\n.wrapper.horizontal.reversed {\r\n  flex-direction: row-reverse;\r\n  transform: translateX( calc( 100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.vertical {\r\n  flex-direction: column;\r\n  transform: translateY( calc( -100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.vertical.reversed {\r\n  flex-direction: column-reverse;\r\n  transform: translateY( calc( 100% * var(--position, 0)) );\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replace(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _slider_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





document.adoptedStyleSheets = [_styles_main_css__WEBPACK_IMPORTED_MODULE_0__["default"]]


function WrapperComponent() {
  const domSlider = (0,_slider_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Slider)()

  const previousBtn = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()
  const nextBtn     = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()

  const toggleDirectionBtn = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()
  const toggleReversedBtn = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()
  const toggleCyclicBtn = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()
  const toggleOverflowBtn = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].button()

  previousBtn.addEventListener('click', event => {
    domSlider.slider.previous()
  })

  nextBtn.addEventListener('click', event => {
    domSlider.slider.next()
  })

  toggleDirectionBtn.addEventListener('click', event => {
    domSlider.slider.toggleDirection()
  })

  toggleReversedBtn.addEventListener('click', event => {
    domSlider.slider.toggleReversed()
  })

  toggleCyclicBtn.addEventListener('click', event => {
    domSlider.slider.toggleCyclic()
  })

  toggleOverflowBtn.addEventListener('click', event => {
    domSlider.classList.toggle('overflow-visible')
  })

  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].$.div({class: 'wrapper-component'},
    {children: [_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].slot()]},

    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(domSlider, {class: 'component'},
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'box -b1'}, 0),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'box -b2'}, 1),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'box -b3'}, 2),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'box -b4'}, 3),
    ),
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'buttons'},
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(previousBtn, {class: 'previous', style: {marginRight: 'auto'}}, 'Previous'),
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(nextBtn, {class: 'next', style: {marginLeft: 'auto'}}, 'Next'),
    ),
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].div({class: 'buttons'},
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(toggleDirectionBtn, {class: 'toggle-direction'}, 'Toggle Direction'),
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(toggleReversedBtn, {class: 'toggle-reversed'}, 'Toggle Reversed'),
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(toggleCyclicBtn, {class: 'toggle-cyclic'}, 'Toggle Cyclic'),
      (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.buildElement)(toggleOverflowBtn, {class: 'toggle-overflow'}, 'Toggle Overflow'),
    ),
  )
}


const appContent = document.querySelector('#app-content')

const render = WrapperComponent()

appContent.append(render)

})();

/******/ })()
;