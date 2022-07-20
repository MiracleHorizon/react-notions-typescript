import React, { FC, memo } from 'react'

import Props from './types'
import { ToggleSidebarButtonPurposes as Purposes } from '../ToggleSidebarButton.types'
import ToggleSidebarButton from '../index'

const CloseLeftSidebarButton: FC<Props> = memo(({ isParentHovering }) => (
  <ToggleSidebarButton
    purpose={Purposes.CLOSE}
    location='Left'
    isParentHovering={isParentHovering}
  />
))

export default CloseLeftSidebarButton
