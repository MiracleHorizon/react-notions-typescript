import React from 'react'
import { createPortal } from 'react-dom'

import {
  StyledContainer,
  TitleBlock,
  Title,
  UndoButtonContainer,
  UndoTitle,
} from './MoveToTrashButton.styles'

const MoveToTrashButton: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return createPortal(
    <StyledContainer {...{ isActive }}>
      <TitleBlock>
        <Title>Moved to trash</Title>
      </TitleBlock>
      <UndoButtonContainer role='button'>
        <UndoTitle>Undo</UndoTitle>
      </UndoButtonContainer>
    </StyledContainer>,
    document.getElementById('root') as HTMLElement
  )
}

export default MoveToTrashButton
