import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { CoverSvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { coversListsSelector, currentPageSelector } from 'redux/selectors'
import { getRandomCover } from 'helpers/decor/getRandomDecor'
import objectCopier from 'helpers/objectCopier'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddRandomCoverButton: FC = memo(() => {
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  const covers = useSelector(coversListsSelector)
  const appDispatch = useAppDispatch()

  const onAddRandomCover = useCallback((): void => {
    pageCopy.coverInfo.isHasCover = true
    pageCopy.coverInfo.coverUrl = getRandomCover(covers)

    appDispatch(updatePage(pageCopy))
  }, [appDispatch, pageCopy, covers])

  return (
    <StyledOption role='button' onClick={onAddRandomCover}>
      <CoverSvg />
      <Title>Add cover</Title>
    </StyledOption>
  )
})

export default AddRandomCoverButton
