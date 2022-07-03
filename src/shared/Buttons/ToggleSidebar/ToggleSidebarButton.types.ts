import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { IElementCoords } from '../../../@types/types'

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
    coords: IElementCoords
    imgRotate: number
  }
  isParentHovering: boolean
}

export { ToggleSidebarBtnPurposes }
export type { ToggleSidebarBtnProps, StyledButtonProps }
