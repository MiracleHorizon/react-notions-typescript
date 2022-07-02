import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { IElementCoords } from '../../../@types/types'

enum ToggleSidebarBtnPurposes {
  OPEN = 'open',
  CLOSE = 'close',
}

interface ToggleSidebarBtnProps {
  purpose: ToggleSidebarBtnPurposes
  location: SidebarLocations
}

interface StyledButtonProps {
  purpose: ToggleSidebarBtnPurposes
  properties: {
    coords: IElementCoords
    imgRotate: number
  }
}

export { ToggleSidebarBtnPurposes }
export type { ToggleSidebarBtnProps, StyledButtonProps }
