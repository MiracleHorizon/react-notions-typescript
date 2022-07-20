import React, { FC, memo } from 'react'

import Props from './types'
import ToggleSidebarButton from '../index'
import { ToggleSidebarButtonPurposes as Purposes } from '../ToggleSidebarButton.types'

const CloseRightSidebarButton: FC<Props> = memo(({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.CLOSE}
    location='Right'
    isParentHovering={isParentHovering}
  />
))

export default CloseRightSidebarButton
