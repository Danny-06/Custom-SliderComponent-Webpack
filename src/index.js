import mainStyleSheet from './styles/main.css'
import { createWebComponent, SliderComponent, SliderCyclicComponent } from './slider-components/index.js'


document.adoptedStyleSheets = [mainStyleSheet]


const sliderComponent       = createWebComponent(SliderComponent, document.getElementById('slider'))
const sliderCyclicComponent = createWebComponent(SliderCyclicComponent, document.getElementById('slider-cyclic'))


const scButtonNext     = sliderComponent.parentElement.querySelector('.next')
const scButtonPrevious = sliderComponent.parentElement.querySelector('.previous')

const sccButtonNext     = sliderCyclicComponent.parentElement.querySelector('.next')
const sccButtonPrevious = sliderCyclicComponent.parentElement.querySelector('.previous')

scButtonNext.addEventListener('click', event => {
  sliderComponent.slider.next()
})

scButtonPrevious.addEventListener('click', event => {
  sliderComponent.slider.previous()
})

sccButtonNext.addEventListener('click', event => {
  sliderCyclicComponent.slider.next()
})

sccButtonPrevious.addEventListener('click', event => {
  sliderCyclicComponent.slider.previous()
})
