import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './ChangeDecorNavbarItem.types'
import { DecorPurposes } from '../ChangeDecorNavbar.types'
import {
  selectedCoverCategorySelector,
  selectedIconCategorySelector,
} from 'redux/pageDecorationSlice/selectors'
import {
  setCoverCategory,
  setIconCategory,
} from 'redux/pageDecorationSlice/slice'
import {
  Item,
  ItemWrapper,
  StyledActiveBorder,
  Title,
} from './ChangeDecorNavbarItem.styles'

const ChangeDecorNavbarItem: React.FC<Props> = ({ category, purpose }) => {
  const selectedCategory = useSelector(
    purpose === DecorPurposes.COVER
      ? selectedCoverCategorySelector
      : selectedIconCategorySelector
  )
  const dispatch = useDispatch()

  const onSelectCategory = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setCoverCategory(category))
        break
      case DecorPurposes.ICON:
        dispatch(setIconCategory(category))
        break
    }
  }

  return (
    <ItemWrapper>
      <Item role='button' onClick={onSelectCategory}>
        <Title>{category}</Title>
      </Item>
      {selectedCategory === category && <StyledActiveBorder />}
    </ItemWrapper>
  )
}

export default ChangeDecorNavbarItem
