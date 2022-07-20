import React, { FC, memo } from 'react'

import Props from './SendButton.types'
import { SendArrowSvg } from 'components/ui/SVG'
import StyledButton from './SendButton.styles'

const SendButton: FC<Props> = memo(({ isActive, action }) => (
  <StyledButton
    role='button'
    aria-disabled={!isActive}
    onClick={action}
    isActive={isActive}
  >
    <SendArrowSvg isActive={isActive} />
  </StyledButton>
))

export default SendButton
