import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { DecorPurposes } from '../ChangeDecorNavbar/ChangeDecorNavbar.types'
import Popup from 'components/shared/Popups/index'
import ChangeDecorPopupNavbar from 'components/shared/Popups/components/ChangeDecor/ChangeDecorNavbar'
import ChangeCoverContent from '../ChangeDecorContent/components/ChangeCoverContent'
import { refreshCoverCategory, closeChangeCoverPopup } from 'redux/actions'
import {
  changeCoverPopupSelector,
  coverCategoriesSelector,
} from 'redux/selectors'
import Wrapper from '../ChangeDecorPopup.styles'

const ChangePageCoverPopup: FC = memo(() => {
  const { coords } = useSelector(changeCoverPopupSelector)
  const categories = useSelector(coverCategoriesSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback((): void => {
    dispatch(closeChangeCoverPopup())
    dispatch(refreshCoverCategory())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords} purpose='Covers'>
        <ChangeDecorPopupNavbar
          categories={categories}
          purpose={DecorPurposes.COVER}
        />
        <ChangeCoverContent />
      </Wrapper>
    </Popup>
  )
})

export default ChangePageCoverPopup
