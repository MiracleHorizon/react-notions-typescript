import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ToggleOptionButton } from 'components/ui'

import { useAppDispatch } from 'redux/store'
import { ActiveListItem } from 'types'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { StyledItem, Title } from '../ToggleOptionItem.styles'

const ToggleSmallTextOption: FC<ActiveListItem> = memo(
  ({ activeItem, onSelect }) => {
    const pageCopy = objectCopier(useSelector(currentPageSelector))
    const appDispatch = useAppDispatch()

    const onToggleSmallText = useCallback((): void => {
      pageCopy.pageSettings.isSmallText = !pageCopy.pageSettings.isSmallText

      appDispatch(updatePage(pageCopy))
    }, [appDispatch, pageCopy])

    return (
      <StyledItem
        isSelected={activeItem === 'Small text'}
        onClick={onToggleSmallText}
        onMouseEnter={() => onSelect('Small text')}
      >
        <Title>Small text</Title>
        <ToggleOptionButton isActive={pageCopy.pageSettings.isSmallText} />
      </StyledItem>
    )
  }
)

export default ToggleSmallTextOption
