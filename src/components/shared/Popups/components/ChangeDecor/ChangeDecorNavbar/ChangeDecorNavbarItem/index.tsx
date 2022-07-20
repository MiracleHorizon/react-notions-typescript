import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './ChangeDecorNavbarItem.types'
import { DecorPurposes } from '../ChangeDecorNavbar.types'
import { setCoverCategory, setIconCategory } from 'redux/actions'
import {
  selectedCoverCategorySelector,
  selectedIconCategorySelector,
} from 'redux/selectors'
import {
  Item,
  ItemWrapper,
  StyledActiveBorder,
  Title,
} from './ChangeDecorNavbarItem.styles'

const ChangeDecorNavbarItem: FC<Props> = memo(({ category, purpose }) => {
  const selectedCategory = useSelector(
    purpose === DecorPurposes.COVER
      ? selectedCoverCategorySelector
      : selectedIconCategorySelector
  )
  const dispatch = useDispatch()

  const onSelectCategory = useCallback((): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setCoverCategory(category))
        break
      case DecorPurposes.ICON:
        dispatch(setIconCategory(category))
        break
    }
  }, [dispatch, category, purpose])

  return (
    <ItemWrapper>
      <Item role='button' onClick={onSelectCategory}>
        <Title>{category}</Title>
      </Item>
      {selectedCategory === category && <StyledActiveBorder />}
    </ItemWrapper>
  )
})

export default ChangeDecorNavbarItem
