import React, { FC, memo } from 'react'

import Props from './ToggleCommentStateButton.types'
import { StyledButton, Title } from './ToggleCommentStateButton.styles'

const ToggleCommentStateButton: FC<Props> = memo(({ isResolved, action }) => (
  <StyledButton onClick={action}>
    <Title>{isResolved ? 'Re-open' : 'Resolve'}</Title>
  </StyledButton>
))

export default ToggleCommentStateButton
