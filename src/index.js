import mainStyleSheet from './styles/main.css'
import { createWebComponent, SliderComponent } from './slider-components/index.js'


document.adoptedStyleSheets = [mainStyleSheet]


const sliderComponent       = createWebComponent(SliderComponent, document.getElementById('slider'))

const scButtonNext     = sliderComponent.parentElement.querySelector('.next')
const scButtonPrevious = sliderComponent.parentElement.querySelector('.previous')

scButtonNext.addEventListener('click', event => {
  sliderComponent.slider.next()
})

scButtonPrevious.addEventListener('click', event => {
  sliderComponent.slider.previous()
})
