import { useDispatch } from 'react-redux'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import {
  closeLeftSidebar,
  closeRightSidebar,
  openLeftSidebar,
  openRightSidebar,
} from 'redux/sidebarsSlice/slice'

interface Params {
  purpose: Purposes
  location: SidebarLocations
}

//* result

export const useSidebarActionHandler = (params: Params) => {
  const { purpose, location } = params
  const dispatch = useDispatch()

  if (purpose === Purposes.OPEN) {
    return location === SidebarLocations.LEFT
      ? () => dispatch(openLeftSidebar())
      : () => dispatch(openRightSidebar())
  }

  if (purpose === Purposes.CLOSE) {
    return location === SidebarLocations.LEFT
      ? () => dispatch(closeLeftSidebar())
      : () => dispatch(closeRightSidebar())
  }
}
