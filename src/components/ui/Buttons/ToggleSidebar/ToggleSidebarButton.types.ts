import { ElementCoords } from 'types'
import { SidebarLocations } from 'redux/reducers/sidebarsSlice/types'

export enum ToggleSidebarButtonPurposes {
  OPEN = 'open',
  CLOSE = 'close',
}

export interface StyledButtonProps {
  purpose: ToggleSidebarButtonPurposes
  properties: {
    coords: ElementCoords
    imgRotate: number
  }
  isParentHovering: boolean
}

export default interface ToggleSidebarButtonProps {
  purpose: ToggleSidebarButtonPurposes
  location: SidebarLocations
  isParentHovering: boolean
}
