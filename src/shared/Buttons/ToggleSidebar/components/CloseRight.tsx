import React from 'react'
import ToggleSidebarButton from '../index'
import Props from './types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { ToggleSidebarBtnPurposes as Purposes } from '../ToggleSidebarButton.types'

const CloseRightSidebarButton: React.FC<Props> = ({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.CLOSE}
    location={SidebarLocations.RIGHT}
    isParentHovering={isParentHovering}
  />
)

export default CloseRightSidebarButton
