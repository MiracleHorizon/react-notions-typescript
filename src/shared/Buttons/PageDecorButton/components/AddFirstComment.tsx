import React from 'react'

import { AddCommentSvg } from 'shared/SVG'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddFirstCommentButton: React.FC = () => {
  const onAddFirstComment = (): void => {
    console.log('Добавлен первый комментарий')
    // Пост запрос.
  }

  return (
    <StyledOption role='button' onClick={onAddFirstComment}>
      <AddCommentSvg />
      <Title>Add comment</Title>
    </StyledOption>
  )
}

export default AddFirstCommentButton
