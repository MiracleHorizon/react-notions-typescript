import React from 'react'
import ToggleSidebarButton from '../index'
import Props from './types'
import { ToggleSidebarBtnPurposes as Purposes } from '../ToggleSidebarButton.types'

const CloseRightSidebarButton: React.FC<Props> = ({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.CLOSE}
    location='Right'
    isParentHovering={isParentHovering}
  />
)

export default CloseRightSidebarButton
