import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { SmileySvg } from 'components/ui/SVG'

import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddRandomIconButton: FC = () => {
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  // const iconsLists = useSelector()

  const onAddRandomIcon = useCallback((): void => {
    // pageCopy.iconsInfo.isHasIcon = true

    console.log('Добавлена случайна иконка')
    //...Тут будет пост запрос
  }, [pageCopy])

  return (
    <StyledOption role='button' onClick={onAddRandomIcon}>
      <SmileySvg />
      <Title>Add icon</Title>
    </StyledOption>
  )
}

export default AddRandomIconButton
