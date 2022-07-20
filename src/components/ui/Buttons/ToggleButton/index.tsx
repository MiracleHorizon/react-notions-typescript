import React, { FC, memo } from 'react'

import { TriangleSvg } from 'components/ui/SVG'

import Props from './ToggleButton.types'
import IconContainer from './ToggleButton.styles'

const ToggleButton: FC<Props> = memo(
  ({ isExpanded, toggleExpanded, svgColor }) => {
    return (
      <IconContainer role='button' onClick={toggleExpanded}>
        <TriangleSvg color={svgColor} isOpen={isExpanded} />
      </IconContainer>
    )
  }
)

export default ToggleButton
