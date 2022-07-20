import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { HeaderCommentsSvg } from 'components/ui/SVG'
import { toggleRightSidebar } from 'redux/actions'
import ButtonContainer from '../HeaderActionsButtons.styles'

const ToggleRightSidebarButton: FC = () => {
  const dispatch = useDispatch()

  const onToggleRightSidebar = useCallback((): void => {
    dispatch(toggleRightSidebar())
  }, [dispatch])

  return (
    <ButtonContainer role='button' onClick={onToggleRightSidebar}>
      <HeaderCommentsSvg />
    </ButtonContainer>
  )
}

export default ToggleRightSidebarButton
