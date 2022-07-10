import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from '../ChangeDecorActionButton.types'
import { DecorPurposes } from 'components/Popups/ChangeDecor/ChangeDecorNavbar/ChangeDecorNavbar.types'
import { removeCover, removeIcon } from 'redux/workSpaceSlice/slice'
import {
  refreshCoverCategory,
  refreshIconCategory,
} from 'redux/pageDecorationSlice/slice'
import {
  closeChangeCoverPopup,
  closeChangeIconPopup,
} from 'redux/popupsSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
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
        dispatch(closeChangeCoverPopup()) //!
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
