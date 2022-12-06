import { createElement, setChildren, setClasses } from './libs/helpers.js'

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
