import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ToggleOptionButton } from 'components/ui'

import { useAppDispatch } from 'redux/store'
import { ActiveListItem } from 'types'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { StyledItem, Title } from '../ToggleOptionItem.styles'

const ToggleFullWidthOption: FC<ActiveListItem> = memo(
  ({ activeItem, onSelect }) => {
    const pageCopy = objectCopier(useSelector(currentPageSelector))
    const appDispatch = useAppDispatch()

    const onToggleFullWidth = useCallback((): void => {
      pageCopy.pageSettings.isFullWidth = !pageCopy.pageSettings.isFullWidth

      appDispatch(updatePage(pageCopy))
    }, [appDispatch, pageCopy])

    return (
      <StyledItem
        isSelected={activeItem === 'Full width'}
        onClick={onToggleFullWidth}
        onMouseEnter={() => onSelect('Full width')}
      >
        <Title>Full width</Title>
        <ToggleOptionButton isActive={pageCopy.pageSettings.isFullWidth} />
      </StyledItem>
    )
  }
)

export default ToggleFullWidthOption
