export function createElement(tagName) {
  const element = document.createElement(tagName)

  return element
}


export function setClasses(element, classes) {
  if (Array.isArray(classes)) {
    element.className = classes.join(' ')
  } else if (typeof classes === 'string') {
    element.className = classes
  }
}

export function setChildren(element, children) {
  element.append(...children)
}


const lowerCaseToHyphen = string => string.split(/(?=[A-Z])/).map(str => str.toLowerCase()).join('-')

/**
 *
 * @param {CSSStyleDeclaration} style
 * @param {{}} properties
 */
export function setStyleProperties(style, properties) {
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
