import sliderTemplate from './SliderComponent.html'
import sliderStyleSheet from './SliderComponent.css'

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
        if (event.propertyName !== 'transform') return

        resolve(value)

        if (this._cyclic) {
          this.handleCyclicTransitionEnd()
        }

        this._isTransitioning = false
      }, {once: true})
    })
  }

  handleCyclicTransitionStart(value) {
    const isEndToStart = this._currentIndex === this.length - 1 && value === 0
    const isStartToEnd = this._currentIndex === 0 && value === this.length - 1

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

export class SliderComponent extends HTMLElement {

  _constructor_() {
    this.attachShadow({mode: 'open'})

    this.shadowRoot.adoptedStyleSheets = [sliderStyleSheet]

    this.shadowRoot.append(sliderTemplate.clone(document))

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
