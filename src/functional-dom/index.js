import { createElement, setChildren, setClasses } from './libs/helpers.js'

/**
 * @typedef {(...children: HTMLElement) => DocumentFragment} DOMMakerFunc
 */

/**
 * @typedef {{[key: string]: (properties: FunctionalDOMProperties, ...children: HTMLElement) => HTMLElement}} DOMMakerProperties
 */

/**
 * @typedef {DOMMakerFunc & DOMMakerProperties} DOMMaker
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
 * @type {DOMMaker}
 */
const DOMMaker = new Proxy(function() {}, {

  apply: (target, thisArg, argArray) => {
    const documentFragment = new DocumentFragment()

    documentFragment.append(...argArray)

    return documentFragment
  },

  get: (target, property, receiver) => {
    return function(properties = {}, ...children) {
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
 * @param {FunctionalDOMProperties} properties 
 * @param  {...HTMLElement} children 
 * @returns {...HTMLElement}
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
