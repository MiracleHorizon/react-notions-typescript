import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/Popups/index'
import ChangeDecorPopupNavbar from '../ChangeDecorNavbar'
import ChangeIconContent from '../ChangeDecorContent/components/ChangeIconContent'
import { changeIconPopupSelector } from 'redux/popupsSlice/selectors'
import { iconCategoriesSelector } from 'redux/pageDecorationSlice/selectors'
import { closeChangeIconPopup } from 'redux/popupsSlice/slice'
import { refreshIconCategory } from 'redux/pageDecorationSlice/slice'
import { DecorPurposes } from '../ChangeDecorNavbar/ChangeDecorNavbar.types'
import Wrapper from '../ChangeDecorPopup.styles'

const ChangePageIconPopup: React.FC = () => {
  const { coords } = useSelector(changeIconPopupSelector)
  const categories = useSelector(iconCategoriesSelector)
  const popupRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(closeChangeIconPopup())
    dispatch(refreshIconCategory())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper coords={coords} ref={popupRef}>
        <ChangeDecorPopupNavbar
          categories={categories}
          purpose={DecorPurposes.ICON}
        />
        <ChangeIconContent />
      </Wrapper>
    </Popup>
  )
}

export default ChangePageIconPopup
