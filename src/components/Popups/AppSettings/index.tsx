import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from '../index'
import AsideNavigation from './AsideNavigation'
import SelectedSection from './Sections'
import { closeAppSettingsPopup } from 'redux/popupsSlice/slice'
import { Wrapper, Container } from './AppSettingsPopup.styles'

const AppSettingsPopup: React.FC = () => {
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    dispatch(closeAppSettingsPopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup inset>
      <Wrapper ref={popupRef}>
        <Container>
          <AsideNavigation />
          <SelectedSection />
        </Container>
      </Wrapper>
    </Popup>
  )
}

export default AppSettingsPopup
