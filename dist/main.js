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

  const css = "@charset \"UTF-8\";\r\n\r\n#app-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n\r\n  overflow-x: hidden;\r\n}\r\n\r\n.wrapper-component {\r\n  width: 300px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n\r\n  margin: auto;\r\n}\r\n\r\n.wrapper-component:nth-child(1) {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.wrapper-component:nth-child(2) {\r\n  margin-top: 0;\r\n}\r\n\r\n.box {\r\n  display: grid;\r\n  place-items: center;  \r\n}\r\n\r\n.component {\r\n  width: 100%;\r\n}\r\n\r\n.component > .box {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.component > .box.-b1 {\r\n  background-color: #06f;\r\n}\r\n\r\n.component > .box.-b2 {\r\n  background-color: #609;\r\n}\r\n\r\n.component > .box.-b3 {\r\n  background-color: #290;\r\n}\r\n\r\n.component > .box.-b4 {\r\n  background-color: #aa2a2a;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: 0.5rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.3em 0.5em;\r\n\r\n  border-radius: 0.8em;\r\n  background-color: #333;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #444;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #666;\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replace(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* reexport safe */ _components_SliderComponent_SliderComponent_js__WEBPACK_IMPORTED_MODULE_1__.SliderComponent),
/* harmony export */   "SliderCyclicComponent": () => (/* reexport safe */ _components_SliderCyclicComponent_SliderCyclicComponent_js__WEBPACK_IMPORTED_MODULE_2__.SliderCyclicComponent),
/* harmony export */   "createWebComponent": () => (/* reexport safe */ _libs_createWebComponent_js__WEBPACK_IMPORTED_MODULE_0__.createWebComponent)
/* harmony export */ });
/* harmony import */ var _libs_createWebComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _components_SliderComponent_SliderComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_SliderCyclicComponent_SliderCyclicComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);







/***/ }),
/* 3 */
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
 * Allows the creation of custom elements through a `<div>`.
 * The class provided is invoked in the `<div>` and then its prototype is changed
 * with the prototype of the class.
 * 
 * To declare the `constructor` of the class it must be declared as `_constructor_`
 * instead of the normal constructor to allow the function to invoke it in the `<div>`.
 * 
 * Since the `<div>` is not an instance of the component is not posible to use `private properties`.
 * For that reason, is recommended to replace them with properties that starts with an underscore.
 * 
 * @param {class} classComponent 
 * @param {HTMLElement} [elementToApply=null]
 * @returns {HTMLElement}
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
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _SliderComponent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _SliderComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



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
      _currentSlottedElement: {writable: true, value: null},
      _currentPlaceholderElement: {writable: true, value: null}
    })

    this._direction = this.targetComponent.dataset.direction ?? this._direction
    this.direction = this._direction

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

    this.targetComponent.ignoreAttributeChange = true

    this.targetComponent.dataset.direction = value

    queueMicrotask(() => {
      this.targetComponent.ignoreAttributeChange = false
    })

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

  setCurrentIndex(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Value must be a number`)
    }

    if (this._cyclic && this._isTransitioning) {
      return
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

      this.wrapper.addEventListener('transitionend', event => {
        resolve(value)

        if (this._cyclic) {
          this.handleCyclicTransitionEnd()
        }

        this._isTransitioning = false
      }, {once: true})
    })
  }

  handleCyclicTransitionStart(value) {
    if (this._currentIndex === this.length - 1 && value === 0) {
      this.position++

      this._currentSlottedElement = this.targetComponent.firstElementChild
      this._currentSlottedElement.slot = 'next'

      this._currentPlaceholderElement = document.createElement('div')
      this._currentPlaceholderElement.classList.add('placeholder')

      this.wrapper.prepend(this._currentPlaceholderElement)
    } else if (this._currentIndex === 0 && value === this.length - 1) {
      this.removeTransition()

      this.position++

      // Trigger layout to calculate styles
      this.wrapper.getBoundingClientRect()

      this.restoreTransition()

      this.position--

      this._currentSlottedElement = this.targetComponent.lastElementChild
      this._currentSlottedElement.slot = 'previous'
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

    if (this._currentPlaceholderElement != null) {
      this._currentPlaceholderElement.remove()
      this._currentPlaceholderElement = null
    }

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

  get innerHTML() {
    return super.innerHTML
  }

  set innerHTML(value) {
    super.innerHTML = value
  }

  static get observedAttributes() {
    return ['data-direction']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.ignoreAttributeChange) return

    switch (name) {
      case 'data-direction':
        this.slider.direction = newValue
      break
    }
  }

}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  function queryDeclarativeTemplatesShadowDOM(documentFragment) {
    const templates = [...documentFragment.querySelectorAll('template[shadowroot]:first-child')]
  
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

  const html = "<div part=\"wrapper\" class=\"wrapper\">\r\n  <slot name=\"previous\"></slot>\r\n  <slot></slot>\r\n  <slot name=\"next\"></slot>\r\n</div>\r\n"

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
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = ":host {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:not(:host),\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n* {\r\n  min-width: 0;\r\n  min-height: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n\r\n  transition-property: transform;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.wrapper, .wrapper.horizontal {\r\n  flex-direction: row;\r\n  transform: translateX( calc( -100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.horizontal.reversed {\r\n  flex-direction: row-reverse;\r\n  transform: translateX( calc( 100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.vertical {\r\n  flex-direction: column;\r\n  transform: translateY( calc( -100% * var(--position, 0)) );\r\n}\r\n\r\n.wrapper.vertical.reversed {\r\n  flex-direction: column-reverse;\r\n  transform: translateY( calc( 100% * var(--position, 0)) );\r\n}\r\n\r\n.placeholder {\r\n  width: 100%;\r\n  height: 100%;\r\n  visibility: hidden;\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replace(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderCyclicComponent": () => (/* binding */ SliderCyclicComponent)
/* harmony export */ });
/* harmony import */ var _SliderCyclicComponent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _SliderCyclicComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



class CyclicSliderInterface {

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
      _isTransitioning: {writable: true, value: false}
    })

    this._direction = this.targetComponent.dataset.direction ?? this._direction
    this.direction = this._direction

    this._isTransitioning = false

    this.setCurrentSlot(this.targetComponent.firstElementChild)
    this.setCurrentPosition()

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

    this.targetComponent.ignoreAttributeChange = true

    this.targetComponent.dataset.direction = value

    queueMicrotask(() => {
      this.targetComponent.ignoreAttributeChange = false
    })

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

  static get SlotPositions() {
    return {
      Previous: 'previous',
      Current: 'current',
      Next: 'next'
    }
  }

  setSlot(element, name) {
    if (!element) return
    element.slot = name
  }

  setPreviousSlot(element) {
    this.setSlot(element, CyclicSliderInterface.SlotPositions.Previous)
  }

  setCurrentSlot(element) {
    this.setSlot(element, CyclicSliderInterface.SlotPositions.Current)
  }

  setNextSlot(element) {
    this.setSlot(element, CyclicSliderInterface.SlotPositions.Next)
  }

  get position() {
    const positionValue = parseInt(this.wrapper.style.getPropertyValue('--position'))
    return isNaN(positionValue) ? 0 : positionValue
  }

  set position(value) {
    this.wrapper.style.setProperty('--position', value)
  }

  setPreviousPosition() {
    this.position--
  }

  setCurrentPosition() {
    this.position = 0
  }

  setNextPosition() {
    this.position++
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

  setCurrentIndex(value) {
    if (this._isTransitioning) return

    if (typeof value !== 'number') {
      throw new TypeError(`Value must be a number`)
    }

    this._isTransitioning = true

    value = Math.floor(value)

    value %= this.length

    if (value < 0) {
      value = this.length + value
    }

    if (value === this._currentIndex) return

    if (this._currentIndex === this.length - 1 && value !== 0 && value !== this._currentIndex - 1) {
      throw new Error(`Next index cannot be more than 1`)
    }
    else
    if (this._currentIndex === 0 && value !== this.length - 1 && value !== this._currentIndex + 1) {
      throw new Error(`Next index cannot be more than 1`)
    }
    else
    if (this._currentIndex > 0 && this._currentIndex < this.length - 1 && Math.abs(this._currentIndex - value) > 1) {
      throw new Error(`Next index cannot be more than 1`)
    }

    const targetElement = this.getElement(value)

    let positionReference

    if (this._currentIndex === this.length - 1 && value === 0) {
      positionReference = 1
      this.setNextSlot(targetElement)
    }
    else
    if (this._currentIndex === 0 && value === this.length - 1) {
      positionReference = -1
      this.setPreviousSlot(targetElement)
    }
    else
    if (value > this._currentIndex) {
      positionReference = 1
      this.setNextSlot(targetElement)
    } else {
      positionReference = -1
      this.setPreviousSlot(targetElement)
    }

    this._currentIndex = value

    this.position = this._reversed ? -positionReference : positionReference

    if (positionReference === 1) {
      if (this._reversed) {
        this.setPreviousSlot(targetElement)
      } else {
        this.setNextSlot(targetElement)
      }
    }
    else {
      if (this._reversed) {
        this.setNextSlot(targetElement)
      } else {
        this.setPreviousSlot(targetElement)
      }
    }

    this.position = this._reversed ? -positionReference : positionReference

    return new Promise(resolve => {
      if (!this.hasTransition) {
        this.resetPosition(targetElement)

        resolve(value)
        return
      }

      this.wrapper.addEventListener('transitionend', event => {
        this.removeTransition()

        this.resetPosition(targetElement)

        // Trigger layout to calculate styles
        this.wrapper.getBoundingClientRect()

        this.restoreTransition()

        resolve(value)
      }, {once: true})
    })
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

  resetPosition(targetElement) {
    this._isTransitioning = false

    this.targetComponent.querySelectorAll('[slot]').forEach(e => e.removeAttribute('slot'))

    this.setCurrentSlot(targetElement)
    this.setCurrentPosition()
  }

  next() {
    return this.setCurrentIndex(this.currentIndex + 1)
  }

  previous() {
    return this.setCurrentIndex(this.currentIndex - 1)
  }

}

class SliderCyclicComponent extends HTMLElement {

  _constructor_() {
    this.attachShadow({mode: 'open'})

    this.shadowRoot.adoptedStyleSheets = [_SliderCyclicComponent_css__WEBPACK_IMPORTED_MODULE_1__["default"]]

    this.shadowRoot.append(_SliderCyclicComponent_html__WEBPACK_IMPORTED_MODULE_0__["default"].clone(document))

    const wrapper = this.shadowRoot.querySelector('.wrapper')

    Object.defineProperties(this, {
      slider: {
        enumerable: true,
        value: new CyclicSliderInterface(this, wrapper)
      }
    })
  }

  get innerHTML() {
    return super.innerHTML
  }

  set innerHTML(value) {
    super.innerHTML = value
  }

  static get observedAttributes() {
    return ['data-direction']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.ignoreAttributeChange) return

    switch (name) {
      case 'data-direction':
        this.slider.direction = newValue
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

  const html = "<div part=\"wrapper\" class=\"wrapper\">\r\n  <div class=\"slide -previous\">\r\n    <slot name=\"previous\"></slot>\r\n  </div>\r\n  <div class=\"slide -current\">\r\n    <slot name=\"current\"></slot>\r\n  </div>\r\n  <div class=\"slide -next\">\r\n    <slot name=\"next\"></slot>\r\n  </div>\r\n</div>\r\n"

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

  const css = ":host {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:not(:host),\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n* {\r\n  min-width: 0;\r\n  min-height: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n\r\n  transition-property: transform;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.wrapper, .wrapper.horizontal {\r\n  flex-direction: row;\r\n  transform: translateX( calc( -100% * var(--position, 0) + -100%) );\r\n}\r\n\r\n.wrapper.vertical {\r\n  flex-direction: column;\r\n  transform: translateY( calc( -100% * var(--position, 0) + -100%) );\r\n}\r\n\r\n.wrapper > .slide {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"

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
/* harmony import */ var _slider_components_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);




document.adoptedStyleSheets = [_styles_main_css__WEBPACK_IMPORTED_MODULE_0__["default"]]


const sliderComponent       = (0,_slider_components_index_js__WEBPACK_IMPORTED_MODULE_1__.createWebComponent)(_slider_components_index_js__WEBPACK_IMPORTED_MODULE_1__.SliderComponent, document.getElementById('slider'))
const sliderCyclicComponent = (0,_slider_components_index_js__WEBPACK_IMPORTED_MODULE_1__.createWebComponent)(_slider_components_index_js__WEBPACK_IMPORTED_MODULE_1__.SliderCyclicComponent, document.getElementById('slider-cyclic'))


const scButtonNext     = sliderComponent.parentElement.querySelector('.next')
const scButtonPrevious = sliderComponent.parentElement.querySelector('.previous')

const sccButtonNext     = sliderCyclicComponent.parentElement.querySelector('.next')
const sccButtonPrevious = sliderCyclicComponent.parentElement.querySelector('.previous')

scButtonNext.addEventListener('click', event => {
  sliderComponent.slider.next()
})

scButtonPrevious.addEventListener('click', event => {
  sliderComponent.slider.previous()
})

sccButtonNext.addEventListener('click', event => {
  sliderCyclicComponent.slider.next()
})

sccButtonPrevious.addEventListener('click', event => {
  sliderCyclicComponent.slider.previous()
})

})();

/******/ })()
;