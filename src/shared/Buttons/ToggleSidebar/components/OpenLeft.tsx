import React from 'react'
import ToggleSidebarButton from '../index'
import Props from './types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'
import { ToggleSidebarBtnPurposes as Purposes } from '../ToggleSidebarButton.types'

const OpenLeftSidebarButton: React.FC<Props> = ({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.OPEN}
    location={SidebarLocations.LEFT}
    isParentHovering={isParentHovering}
  />
)

export default OpenLeftSidebarButton
