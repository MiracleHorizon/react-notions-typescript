import React from 'react'
import { useSelector } from 'react-redux'

import { SmileySvg } from 'shared/SVG'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddRandomIconButton: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  // const iconsLists = useSelector()

  const onAddRandomIcon = (): void => {
    console.log('Добавлена случайна иконка')
    //...Тут будет пост запрос
  }

  return (
    <StyledOption role='button' onClick={onAddRandomIcon}>
      <SmileySvg />
      <Title>Add icon</Title>
    </StyledOption>
  )
}

export default AddRandomIconButton
