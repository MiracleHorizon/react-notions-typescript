import React from 'react'
import ToggleSidebarButton from '../index'
import Props from './types'
import { ToggleSidebarBtnPurposes as Purposes } from '../ToggleSidebarButton.types'

const CloseLeftSidebarButton: React.FC<Props> = ({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.CLOSE}
    location='Left'
    isParentHovering={isParentHovering}
  />
)

export default CloseLeftSidebarButton
