import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { ElementCoords } from '../../../types'

enum ToggleSidebarBtnPurposes {
  OPEN = 'open',
  CLOSE = 'close',
}

interface ToggleSidebarBtnProps {
  purpose: ToggleSidebarBtnPurposes
  location: SidebarLocations
  isParentHovering: boolean
}

interface StyledButtonProps {
  purpose: ToggleSidebarBtnPurposes
  properties: {
    coords: ElementCoords
    imgRotate: number
  }
  isParentHovering: boolean
}

export { ToggleSidebarBtnPurposes }
export type { ToggleSidebarBtnProps, StyledButtonProps }
