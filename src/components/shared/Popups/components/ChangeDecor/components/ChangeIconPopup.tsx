import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { DecorPurposes } from '../ChangeDecorNavbar/ChangeDecorNavbar.types'
import Popup from 'components/shared/Popups/index'
import ChangeDecorPopupNavbar from '../ChangeDecorNavbar'
import ChangeIconContent from '../ChangeDecorContent/components/ChangeIconContent'
import {
  changeIconPopupSelector,
  iconCategoriesSelector,
} from 'redux/selectors'
import { closeChangeIconPopup, refreshIconCategory } from 'redux/actions'
import Wrapper from '../ChangeDecorPopup.styles'

const ChangeIconPopup: FC = memo(() => {
  const { coords } = useSelector(changeIconPopupSelector)
  const categories = useSelector(iconCategoriesSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback((): void => {
    dispatch(closeChangeIconPopup())
    dispatch(refreshIconCategory())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords} purpose='Icons'>
        <ChangeDecorPopupNavbar
          categories={categories}
          purpose={DecorPurposes.ICON}
        />
        <ChangeIconContent />
      </Wrapper>
    </Popup>
  )
})

export default ChangeIconPopup
