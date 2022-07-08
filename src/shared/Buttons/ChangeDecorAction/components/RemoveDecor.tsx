import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeCover, removeIcon } from 'redux/workSpaceSlice/slice'
import {
  refreshCoverCategory,
  refreshIconCategory,
  setIsCoverModalClose,
} from 'redux/pageDecorationSlice/slice'
import { closeChangeIconPopup } from 'redux/popupsSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { DecorPurposes } from '../../../../components/Popups/ChangeDecor/ChangeDecorNavbar/ChangeDecorNavbar.types'
import Props from '../ChangeDecorActionButton.types'
import {
  ActionButtonContainer,
  ActionButton,
  ActionTitle,
} from '../ChangeDecorActionButton.styles'

const RemoveDecorButton: React.FC<Props> = ({ purpose }) => {
  const { id } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  const onRemoveDecor = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(removeCover(id))
        dispatch(setIsCoverModalClose()) //!
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        dispatch(removeIcon(id))
        dispatch(closeChangeIconPopup())
        dispatch(refreshIconCategory())
        break
    }
  }

  return (
    <ActionButtonContainer onClick={onRemoveDecor}>
      <ActionButton role='button'>
        <ActionTitle>Remove</ActionTitle>
      </ActionButton>
    </ActionButtonContainer>
  )
}

export default RemoveDecorButton
