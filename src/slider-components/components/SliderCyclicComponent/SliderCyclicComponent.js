import sliderCyclicTemplate from './SliderCyclicComponent.html'
import sliderCyclicStyleSheet from './SliderCyclicComponent.css'

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

export class SliderCyclicComponent extends HTMLElement {

  _constructor_() {
    this.attachShadow({mode: 'open'})

    this.shadowRoot.adoptedStyleSheets = [sliderCyclicStyleSheet]

    this.shadowRoot.append(sliderCyclicTemplate.clone(document))

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
