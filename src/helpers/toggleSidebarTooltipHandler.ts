import { ElementCoords } from 'types'
import { SidebarLocations } from 'redux/reducers/sidebarsSlice/types'
import { ToggleSidebarButtonPurposes as Purposes } from 'components/ui/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { tooltipsCoordsList } from 'components/ui/Tooltips/BlackFilledTooltip/BlackFilledTooltip.coords'

interface Params {
  purpose: Purposes
  location: SidebarLocations
}

interface Result {
  title: string
  description: string
  coords: ElementCoords
}

const toggleSidebarTooltipHandler = (params: Params): Result => {
  const { purpose, location } = params

  const title: string =
    purpose === Purposes.OPEN ? 'Lock sidebar open' : 'Close sidebar'
  const description: string = location === 'Right' ? 'Shift + /' : '/'

  let coords: ElementCoords =
    purpose === Purposes.OPEN && location === 'Left'
      ? tooltipsCoordsList['open-left-sidebar-btn']
      : tooltipsCoordsList['close-left-sidebar-btn']

  if (purpose === Purposes.CLOSE && location === 'Right') {
    coords = tooltipsCoordsList['close-right-sidebar-btn']
  }

  return { title, description: `Ctrl + ${description}`, coords }
}

export default toggleSidebarTooltipHandler
