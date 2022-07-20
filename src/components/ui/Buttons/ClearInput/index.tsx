import React from 'react'

import { ClearInputSvg } from 'components/ui/SVG'
import Props from './ClearInputButton.types'
import IconContainer from './ClearInputButton.styles'

const ClearInputButton: React.FC<Props> = ({ action, coords }) => (
  <IconContainer {...coords} onClick={action}>
    <ClearInputSvg />
  </IconContainer>
)

export default ClearInputButton
