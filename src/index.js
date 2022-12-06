import mainStyleSheet from './styles/main.css'
import { Slider } from './slider-component/index.js'
import _, {buildElement as $} from './functional-dom/index.js'


document.adoptedStyleSheets = [mainStyleSheet]


function WrapperComponent() {
  const domSlider = Slider()

  const previousBtn = _.button()
  const nextBtn     = _.button()

  previousBtn.addEventListener('click', event => {
    domSlider.slider.previous()
  })

  nextBtn.addEventListener('click', event => {
    domSlider.slider.next()
  })

  return _.div({class: 'wrapper-component'},
    $(domSlider, {class: 'component'},
      _.div({class: 'box -b1'}, 0),
      _.div({class: 'box -b2'}, 1),
      _.div({class: 'box -b3'}, 2),
      _.div({class: 'box -b4'}, 3),
    ),
    _.div({class: 'buttons'},
      $(previousBtn, {class: 'previous'}, 'Previous'),
      $(nextBtn,     {class: 'next'},     'Next'),
    )
  )
}


const appContent = document.querySelector('#app-content')

const render = WrapperComponent()

appContent.append(render)
