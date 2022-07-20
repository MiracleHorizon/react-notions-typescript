import React, { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Props from './ResolvedCommentsButton.types'
import { ThinCheckSvg } from 'components/ui/SVG'
import {
  ButtonWrapper,
  StyledButton,
  Title,
} from './ResolvedCommentsButton.styles'

const ResolvedCommentsButton: FC<Props> = memo(({ resolvedCommentsCount }) => {
  const dispatch = useDispatch()

  const onOpenResolvedCommentsPopup = useCallback((): void => {
    // dispatch('')
  }, [])

  return (
    <ButtonWrapper>
      <StyledButton role='button' onClick={onOpenResolvedCommentsPopup}>
        <ThinCheckSvg />
        <Title>
          {resolvedCommentsCount} resolved{' '}
          {resolvedCommentsCount > 1 ? 'comments' : 'comment'}
        </Title>
      </StyledButton>
    </ButtonWrapper>
  )
})

export default ResolvedCommentsButton
