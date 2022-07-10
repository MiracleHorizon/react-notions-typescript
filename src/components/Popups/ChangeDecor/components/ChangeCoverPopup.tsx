import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { DecorPurposes } from '../ChangeDecorNavbar/ChangeDecorNavbar.types'
import Popup from 'components/Popups/index'
import ChangeDecorPopupNavbar from 'components/Popups/ChangeDecor/ChangeDecorNavbar'
import ChangeCoverContent from '../ChangeDecorContent/components/ChangeCoverContent'
import { refreshCoverCategory } from 'redux/pageDecorationSlice/slice'
import { closeChangeCoverPopup } from 'redux/popupsSlice/slice'
import { coverCategoriesSelector } from 'redux/pageDecorationSlice/selectors'
import { changeCoverPopupSelector } from 'redux/popupsSlice/selectors'
import Wrapper from '../ChangeDecorPopup.styles'

const ChangePageCoverPopup: React.FC = () => {
  const { coords } = useSelector(changeCoverPopupSelector)
  const categories = useSelector(coverCategoriesSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    dispatch(closeChangeCoverPopup())
    dispatch(refreshCoverCategory())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper coords={coords} purpose='Covers' ref={popupRef}>
        <ChangeDecorPopupNavbar
          categories={categories}
          purpose={DecorPurposes.COVER}
        />
        <ChangeCoverContent />
      </Wrapper>
    </Popup>
  )
}

export default ChangePageCoverPopup
