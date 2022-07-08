import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/Popups/index'
import ChangeDecorPopupNavbar from 'components/Popups/ChangeDecor/ChangeDecorNavbar'
import ChangeCoverContent from '../ChangeDecorContent/components/ChangeCoverContent'
import {
  refreshCoverCategory,
  setIsCoverModalClose,
} from 'redux/pageDecorationSlice/slice'
import { coverCategoriesSelector } from 'redux/pageDecorationSlice/selectors'
import { DecorPurposes } from '../ChangeDecorNavbar/ChangeDecorNavbar.types'
import { PopupWrapper, ContentContainer } from '../ChangeDecorPopup.styles'

const ChangePageCoverPopup: React.FC = () => {
  const coords = {}
  const categories = useSelector(coverCategoriesSelector)
  const popupRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(setIsCoverModalClose()) //! Переписать названия
    dispatch(refreshCoverCategory())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <PopupWrapper coords={coords} ref={popupRef}>
        <ChangeDecorPopupNavbar
          categories={categories}
          purpose={DecorPurposes.ICON}
        />
        <ContentContainer>
          <ChangeCoverContent />
        </ContentContainer>
      </PopupWrapper>
    </Popup>
  )
}

export default ChangePageCoverPopup
