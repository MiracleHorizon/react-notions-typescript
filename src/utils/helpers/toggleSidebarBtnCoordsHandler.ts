import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { SidebarLocations as Locations } from 'components/Workspace/Sidebar/Sidebar.types'
import { ElementCoords } from '../../@types/generalTypes'

interface Params {
  purpose: Purposes
  location: Locations
}

const leftOpenButtonCoords: ElementCoords = {
  top: '10px',
  left: '10px',
}
const leftCloseButtonCoords: ElementCoords = {
  right: '10px',
  top: '10px',
}

const rightCloseButtonCoords: ElementCoords = {
  left: '10px',
  top: '10px',
}

export const toggleSidebarBtnCoordsHandler = (params: Params) => {
  const { purpose, location } = params

  let coords: ElementCoords = leftOpenButtonCoords
  let imgRotate: number = 0

  if (purpose === Purposes.CLOSE) {
    coords =
      location === Locations.LEFT
        ? leftCloseButtonCoords
        : rightCloseButtonCoords
    imgRotate = location === Locations.RIGHT ? 180 : 0
  }

  return { coords, imgRotate }
}
