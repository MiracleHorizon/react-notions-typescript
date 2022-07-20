import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { SidebarLocations } from 'redux/reducers/sidebarsSlice/types'
import { ToggleSidebarButtonPurposes as Purposes } from 'components/ui/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import {
  closeLeftSidebar,
  closeRightSidebar,
  openLeftSidebar,
  openRightSidebar,
} from 'redux/actions'

interface Params {
  purpose: Purposes
  location: SidebarLocations
}

//* result

export const useSidebarActionHandler = (params: Params) => {
  const { purpose, location } = params
  const dispatch = useDispatch()

  return useCallback(() => {
    if (purpose === Purposes.OPEN) {
      return location === 'Left'
        ? dispatch(openLeftSidebar())
        : dispatch(openRightSidebar())
    }

    if (purpose === Purposes.CLOSE) {
      return location === 'Left'
        ? dispatch(closeLeftSidebar())
        : dispatch(closeRightSidebar())
    }
  }, [dispatch, location, purpose])
}
