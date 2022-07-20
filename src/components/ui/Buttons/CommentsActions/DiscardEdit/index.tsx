import React, { FC, memo } from 'react'

import Props from './DiscardEditCommentButton.types'
import { CircleSvg } from 'components/ui/SVG'
import { StyledButton } from './DiscardEditCommentButton.styles'

const DiscardEditCommentButton: FC<Props> = memo(({ onClickAction }) => (
  <StyledButton role='button' onClick={onClickAction}>
    <CircleSvg />
  </StyledButton>
))

export default DiscardEditCommentButton
