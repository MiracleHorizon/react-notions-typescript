import { ElementCoords } from 'types'
import { SidebarLocations } from 'redux/reducers/sidebarsSlice/types'
import { ToggleSidebarButtonPurposes as Purposes } from 'components/ui/Buttons/ToggleSidebar/ToggleSidebarButton.types'

//! Переписать

interface Params {
  purpose: Purposes
  location: SidebarLocations
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

const toggleSidebarPropertiesHandler = (params: Params) => {
  const { purpose, location } = params

  let coords: ElementCoords = leftOpenButtonCoords
  let imgRotate: number = 180

  if (purpose === Purposes.CLOSE) {
    coords =
      location === 'Left' ? leftCloseButtonCoords : rightCloseButtonCoords

    imgRotate = location === 'Right' ? 180 : 0
  }

  return { coords, imgRotate }
}

export default toggleSidebarPropertiesHandler
