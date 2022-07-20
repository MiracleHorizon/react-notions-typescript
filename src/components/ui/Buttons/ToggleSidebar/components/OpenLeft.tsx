import React from 'react'

import Props from './types'
import ToggleSidebarButton from '../index'
import { ToggleSidebarButtonPurposes as Purposes } from '../ToggleSidebarButton.types'

const OpenLeftSidebarButton: React.FC<Props> = ({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.OPEN}
    location='Left'
    isParentHovering={isParentHovering}
  />
)

export default OpenLeftSidebarButton
