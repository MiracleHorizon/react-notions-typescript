import { ElementCoords } from 'types'

export default interface ResizeSidebarTooltipProps extends ElementCoords {
  location: 'Left' | 'Right'
}
