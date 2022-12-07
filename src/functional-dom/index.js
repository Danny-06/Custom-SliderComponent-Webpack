import { createElement, setChildren, setClasses } from './libs/helpers.js'

/**
 * @typedef {(...children: HTMLElement) => DocumentFragment} DOMMakerFunc
 */

/**
 * @typedef {{
 *  [key in keyof HTMLElementTagNameMap]: (properties: FunctionalDOMProperties, ...children: HTMLElement) => HTMLElementTagNameMap[key]
 * }} DOMMakerProperties
 */

/**
 * @typedef {DOMMakerFunc & DOMMakerProperties} DOMMakerProxy
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
   * @param {T extends keyof HTMLElementTagNameMap ? T : never} property 
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
 * @param {T extends Node ? T : never} element 
 * @param {FunctionalDOMProperties} properties 
 * @param  {...HTMLElement} children 
 * @returns {T}
 */
export function buildElement(element, properties, ...children) {
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
