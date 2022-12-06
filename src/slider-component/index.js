import _ from '../functional-dom/index.js'
import { createWebComponent } from '../functional-dom/libs/create-web-component.js'
import { SliderComponent } from './SliderComponent/SliderComponent.js'


export function Slider() {
  const slider = createWebComponent(SliderComponent, _.div())

  return slider
}
