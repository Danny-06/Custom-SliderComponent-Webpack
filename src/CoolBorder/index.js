import _, { buildElement as $} from '../functional-dom/index.js'
import stylesheet from './main.css'

export function CoolBorder(options, ...children) {
  const wrapper = _.$.div()

  wrapper.shadowRoot.adoptedStyleSheets = [stylesheet]

  const shadowRootContent = _.div({class: 'my-wrapper -wrapper-border-effect _grid-overlay_'}, 
    _.div({class: 'my-content'},
      _.slot(),
    ),
    _.div({class: 'border-effect'},
      _.div({class: 'border'}),
      _.div({class: 'border'}),
      _.div({class: 'border'}),
      _.div({class: 'border'}),
    )
  )

  wrapper.shadowRoot.append(shadowRootContent)

  return $(wrapper, options, ...children)
}
