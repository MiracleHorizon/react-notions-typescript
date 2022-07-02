import {
  ToggleSidebarBtnProps,
  ToggleSidebarBtnPurposes as Purposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { IElementCoords } from '../../@types/types'
import { SidebarLocations as Locations } from 'components/Workspace/Sidebar/Sidebar.types'

const leftOpenButtonCoords: IElementCoords = {
  top: '10px',
  left: '10px',
}
const leftCloseButtonCoords: IElementCoords = {
  right: '10px',
  top: '10px',
}
const rightCloseButtonCoords: IElementCoords = {
  left: '10px',
  top: '10px',
}

export const toggleSidebarBtnCoordsHandler = (
  params: ToggleSidebarBtnProps
) => {
  const { purpose, location } = params

  let coords: IElementCoords = leftOpenButtonCoords
  let imgRotate: number = 0

  if (purpose === Purposes.CLOSE) {
    coords =
      location === Locations.LEFT
        ? leftCloseButtonCoords
        : rightCloseButtonCoords
    imgRotate = location === Locations.RIGHT ? 0 : 180
  }

  return { coords, imgRotate }
}
