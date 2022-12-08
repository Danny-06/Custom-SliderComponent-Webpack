import mainStyleSheet from './styles/main.css'
import { Slider } from './slider-component/index.js'
import _, {buildElement as $} from './functional-dom/index.js'


document.adoptedStyleSheets = [mainStyleSheet]


function WrapperComponent() {
  const domSlider = Slider()

  const previousBtn = _.button()
  const nextBtn     = _.button()

  const toggleDirectionBtn = _.button()
  const toggleReversedBtn = _.button()
  const toggleCyclicBtn = _.button()
  const toggleOverflowBtn = _.button()

  previousBtn.addEventListener('click', event => {
    domSlider.slider.previous()
  })

  nextBtn.addEventListener('click', event => {
    domSlider.slider.next()
  })

  toggleDirectionBtn.addEventListener('click', event => {
    domSlider.slider.toggleDirection()
  })

  toggleReversedBtn.addEventListener('click', event => {
    domSlider.slider.toggleReversed()
  })

  toggleCyclicBtn.addEventListener('click', event => {
    domSlider.slider.toggleCyclic()
  })

  toggleOverflowBtn.addEventListener('click', event => {
    domSlider.classList.toggle('overflow-visible')
  })

  return _.div({class: 'wrapper-component'},
    $(domSlider, {class: 'component'},
      _.div({class: 'box -b1'}, 0),
      _.div({class: 'box -b2'}, 1),
      _.div({class: 'box -b3'}, 2),
      _.div({class: 'box -b4'}, 3),
    ),
    _.div({class: 'buttons'},
      $(previousBtn, {class: 'previous', style: {marginRight: 'auto'}}, 'Previous'),
      $(nextBtn, {class: 'next', style: {marginLeft: 'auto'}}, 'Next'),
    ),
    _.div({class: 'buttons'},
      $(toggleDirectionBtn, {class: 'toggle-direction'}, 'Toggle Direction'),
      $(toggleReversedBtn, {class: 'toggle-reversed'}, 'Toggle Reversed'),
      $(toggleCyclicBtn, {class: 'toggle-cyclic'}, 'Toggle Cyclic'),
      $(toggleOverflowBtn, {class: 'toggle-overflow'}, 'Toggle Overflow'),
    ),
  )
}


const appContent = document.querySelector('#app-content')

const render = WrapperComponent()

appContent.append(render)
