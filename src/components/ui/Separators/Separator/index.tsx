import React, { FC, memo } from 'react'

import Props from './Separator.types'
import StyledSeparator from './Separator.styles'

const Separator: FC<Props> = memo(({ color }) => (
  <StyledSeparator color={color} />
))

export default Separator
