import React from 'react'

import Props from './Resizer.types'
import { ResizerContainer, Resizer } from './Resizer.styles'

const SidebarResizer: React.FC<Props> = props => {
  const { location, resizerRef, onClickAction } = props

  return (
    <ResizerContainer location={location} ref={resizerRef}>
      <Resizer onClick={onClickAction} />
    </ResizerContainer>
  )
}
export default SidebarResizer
