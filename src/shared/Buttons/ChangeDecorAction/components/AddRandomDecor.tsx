import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CoverSvg, SmileySvg } from 'shared/SVG'
import { setPageCover, setPageIcon } from 'redux/workSpaceSlice/slice'
import {
  refreshCoverCategory,
  refreshIconCategory,
  setIsCoverModalClose,
} from 'redux/pageDecorationSlice/slice'
import { closeChangeIconPopup } from 'redux/popupsSlice/slice'
import { coversListsSelector } from 'redux/pageDecorationSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import getRandomCover from 'helpers/getRandomCover'
import { DecorPurposes } from '../../../../components/Popups/ChangeDecor/ChangeDecorNavbar/ChangeDecorNavbar.types'
import Props from '../ChangeDecorActionButton.types'
import {
  ActionButtonContainer,
  ActionButton,
  ActionTitle,
} from '../ChangeDecorActionButton.styles'

const AddRandomDecorButton: React.FC<Props> = ({ purpose }) => {
  const covers = useSelector(coversListsSelector)
  const { id } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  const onAddRandomDecor = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setPageCover({ cover: getRandomCover(covers), id }))
        dispatch(setIsCoverModalClose())
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        dispatch(setPageIcon({ icon: '', id }))
        dispatch(closeChangeIconPopup())
        dispatch(refreshIconCategory())
        break
    }
  }

  return (
    <ActionButtonContainer onClick={onAddRandomDecor}>
      <ActionButton role='button'>
        {purpose === DecorPurposes.COVER ? <CoverSvg /> : <SmileySvg />}
        <ActionTitle>Random</ActionTitle>
      </ActionButton>
    </ActionButtonContainer>
  )
}

export default AddRandomDecorButton
