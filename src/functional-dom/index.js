import { createElement, setChildren, setClasses, setStyleProperties } from './libs/helpers.js'

/**
 * @typedef {(...children?: HTMLElement) => DocumentFragment} DOMMakerFunc
 */

/**
 * @typedef {{
 *  [key in keyof HTMLElementTagNameMap]: (properties?: FunctionalDOMProperties, ...children?: HTMLElement) => HTMLElementTagNameMap[key]
 * }} DOMMakerHTMLProperties
 */

/**
* @typedef {{
*  [key: string]: (properties?: FunctionalDOMProperties, ...children?: HTMLElement) => HTMLElement
* }} DOMMakerProperties
*/

/**
 * @typedef {DOMMakerFunc & DOMMakerHTMLProperties & DOMMakerProperties} DOMMakerProxy
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
   * @returns {(properties: FunctionalDOMProperties, ...children: HTMLElement) => HTMLElementTagNameMap[T]}
   */
  get: (target, property, receiver) => {
    return function(properties, ...children) {
      const element = createElement(property)

      buildElement(element, properties, ...children)

      return element
    }
  }

})

const _ = DOMMaker

export default _

/**
 * @template T
 * @param {T extends HTMLElement ? T : never} element 
 * @param {FunctionalDOMProperties=} properties 
 * @param  {...HTMLElement=} children 
 * @returns {T}
 * 
 * It's similar to `DOMMaker.property()` but instead of  
 * creating an element it just takes an `element` and applies  
 * the `properties` and the `children` to it.
 */
export function buildElement(element, properties = {}, ...children) {
  const {id, class: classes, style, dataset, attributes} = properties

  if (id) {
    element.id = id
  }

  if (classes) {
    setClasses(element, classes)
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
    setStyleProperties(element.style, style)
  }

  setChildren(element, children)

  return element
}
