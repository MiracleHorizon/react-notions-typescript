import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CoverSvg, SmileySvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import Props from '../ChangeDecorActionButton.types'
import { DecorPurposes } from 'components/shared/Popups/components/ChangeDecor/ChangeDecorNavbar/ChangeDecorNavbar.types'
import { updatePage } from 'api/reduxAsyncThunks'
import { refreshCoverCategory, refreshIconCategory } from 'redux/actions'
import { coversListsSelector, currentPageSelector } from 'redux/selectors'
import { getRandomCover } from 'helpers/decor/getRandomDecor'
import objectCopier from 'helpers/objectCopier'
import {
  ActionButtonContainer,
  ActionButton,
  ActionTitle,
} from '../ChangeDecorActionButton.styles'

const AddRandomDecorButton: FC<Props> = memo(({ purpose }) => {
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  const covers = useSelector(coversListsSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onAddRandomDecor = useCallback((): void => {
    switch (purpose) {
      case DecorPurposes.ICON:
        pageCopy.iconInfo.isHasIcon = true
        pageCopy.iconInfo.iconUrl = ''

        dispatch(refreshIconCategory())
        break
      case DecorPurposes.COVER:
        pageCopy.coverInfo.isHasCover = true
        pageCopy.coverInfo.coverUrl = getRandomCover(covers)

        dispatch(refreshCoverCategory())
        break
    }

    appDispatch(updatePage(pageCopy))
  }, [appDispatch, dispatch, covers, pageCopy, purpose])

  return (
    <ActionButtonContainer onClick={onAddRandomDecor}>
      <ActionButton role='button'>
        {purpose === DecorPurposes.COVER ? <CoverSvg /> : <SmileySvg />}
        <ActionTitle>Random</ActionTitle>
      </ActionButton>
    </ActionButtonContainer>
  )
})

export default AddRandomDecorButton
