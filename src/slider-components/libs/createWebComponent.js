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
export function createWebComponent(classComponent, elementToApply = null) {
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
