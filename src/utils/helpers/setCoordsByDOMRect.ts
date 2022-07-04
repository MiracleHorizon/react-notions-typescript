import { ElementPositions, IElementCoords } from '../../@types/types'

interface Params {
  element: HTMLElement | null
  requiredProperties: ElementPositions[] | ElementPositions
}

type Result = IElementCoords | null

const setCoordsByDOMRect = (params: Params): IElementCoords => {
  const { element, requiredProperties } = params
  if (!element) return {}

  const elementDOMReact: DOMRect = element.getBoundingClientRect()

  const result = {
    top: '',
    left: '',
    bottom: '',
    right: '',
  }

  if (requiredProperties.includes(ElementPositions.TOP)) {
    result.top = elementDOMReact.bottom + 5 + 'px'
  }
  if (requiredProperties.includes(ElementPositions.LEFT)) {
    result.left = elementDOMReact.left + 5 + 'px'
  }
  if (requiredProperties.includes(ElementPositions.BOTTOM)) {
    result.bottom = elementDOMReact.bottom - 5 + 'px'
  }
  if (requiredProperties.includes(ElementPositions.RIGHT)) {
    result.right = `calc(100% - ${elementDOMReact.right - 5}px)`
  }

  return Object.fromEntries(
    Object.entries(result).filter(([_, value]) => value !== '')
  )
}

export default setCoordsByDOMRect
