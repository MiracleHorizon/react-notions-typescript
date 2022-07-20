import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'

import Props from '../ChangeDecorActionButton.types'
import { DecorPurposes } from 'components/shared/Popups/components/ChangeDecor/ChangeDecorNavbar/ChangeDecorNavbar.types'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  refreshCoverCategory,
  refreshIconCategory,
  closeChangeCoverPopup,
  closeChangeIconPopup,
} from 'redux/actions'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import {
  ActionButtonContainer,
  ActionButton,
  ActionTitle,
} from '../ChangeDecorActionButton.styles'

const RemoveDecorButton: FC<Props> = memo(({ purpose }) => {
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onRemoveDecor = useCallback((): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        pageCopy.coverInfo.isHasCover = false
        pageCopy.coverInfo.coverUrl = ''

        dispatch(closeChangeCoverPopup())
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        pageCopy.iconInfo.isHasIcon = false
        pageCopy.iconInfo.iconUrl = ''

        dispatch(closeChangeIconPopup())
        dispatch(refreshIconCategory())
        break
    }

    appDispatch(updatePage(pageCopy))
  }, [appDispatch, dispatch, pageCopy, purpose])

  return (
    <ActionButtonContainer onClick={onRemoveDecor}>
      <ActionButton role='button'>
        <ActionTitle>Remove</ActionTitle>
      </ActionButton>
    </ActionButtonContainer>
  )
})

export default RemoveDecorButton
