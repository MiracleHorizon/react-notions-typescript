import React from 'react'
import Props from './Separator.types'
import StyledSeparator from './Separator.styles'

const Separator: React.FC<Props> = ({ color }) => (
  <StyledSeparator color={color} />
)

export default Separator
