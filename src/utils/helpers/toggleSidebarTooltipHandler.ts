import {
  ToggleSidebarBtnPurposes as Purposes,
  ToggleSidebarBtnPurposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { ElementCoords } from '../../@types/generalTypes'

interface Params {
  purpose: ToggleSidebarBtnPurposes
  location: SidebarLocations
}

interface Result {
  title: string
  description: string
  coords: ElementCoords
}

const leftOpenButtonTooltipCoords: ElementCoords = {
  top: '10px',
  left: '40px',
}
const leftCloseButtonTooltipCoords: ElementCoords = {
  top: '43px',
  right: '-20px',
}
const rightCloseButtonTooltipCoords: ElementCoords = {
  top: '43px',
  left: '-20px',
}

export const toggleSidebarTooltipHandler = (params: Params): Result => {
  const { purpose, location } = params

  const title: string =
    purpose === Purposes.OPEN ? 'Lock sidebar open' : 'Close sidebar'
  const description: string =
    location === SidebarLocations.RIGHT ? 'Shift + /' : '/'
  let coords: ElementCoords

  purpose === Purposes.OPEN && location === SidebarLocations.LEFT
    ? (coords = leftOpenButtonTooltipCoords)
    : (coords = leftCloseButtonTooltipCoords)

  if (purpose === Purposes.CLOSE && location === SidebarLocations.RIGHT) {
    coords = rightCloseButtonTooltipCoords
  }

  return { title, description: `Ctrl + ${description}`, coords }
}
