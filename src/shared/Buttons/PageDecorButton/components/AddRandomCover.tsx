import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SmileySvg } from 'shared/SVG'
import { setPageCover } from 'redux/workSpaceSlice/slice'
import { coversListsSelector } from 'redux/pageDecorationSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import getRandomCover from 'helpers/getRandomCover'
import { StyledOption, Title } from '../PageDecorButton.styles'

const AddRandomCoverButton: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const covers = useSelector(coversListsSelector)
  const dispatch = useDispatch()

  const onAddRandomCover = (): void => {
    dispatch(setPageCover({ cover: getRandomCover(covers), id }))
    // Пост запрос.
  }

  return (
    <StyledOption role='button' onClick={onAddRandomCover}>
      <SmileySvg />
      <Title>Add cover</Title>
    </StyledOption>
  )
}

export default AddRandomCoverButton
