import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { FavoriteStarSvg, UnfavoriteStarSvg } from 'components/ui/SVG'

import { updatePage } from 'api/reduxAsyncThunks'
import { useAppDispatch } from 'redux/store'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import ButtonContainer from '../HeaderActionsButtons.styles'

const ToggleFavoriteButton: FC = memo(() => {
  const currentPageCopy = objectCopier(useSelector(currentPageSelector))
  const appDispatch = useAppDispatch()

  const onTogglePageFavorite = useCallback((): void => {
    currentPageCopy.isFavorite = !currentPageCopy.isFavorite
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy])

  return (
    <ButtonContainer role='button' onClick={onTogglePageFavorite}>
      {currentPageCopy.isFavorite ? (
        <FavoriteStarSvg />
      ) : (
        <UnfavoriteStarSvg width={20} height={20} />
      )}
    </ButtonContainer>
  )
})

export default ToggleFavoriteButton
