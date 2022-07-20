import React, { FC, memo } from 'react'

import Props from './SubmitEditCommentButton.types'
import { CircleCheckFilledSvg } from 'components/ui/SVG'
import StyledButton from './SubmitEditCommentButton.styles'

const SubmitEditCommentButton: FC<Props> = memo(
  ({ isActive, onClickAction }) => (
    <StyledButton role='button' onClick={onClickAction}>
      <CircleCheckFilledSvg isActive={isActive} />
    </StyledButton>
  )
)

export default SubmitEditCommentButton
