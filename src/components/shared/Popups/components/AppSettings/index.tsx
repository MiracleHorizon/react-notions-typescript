import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from '../../index'
import AsideNavigation from './AsideNavigation'
import SelectedSection from './Sections'
import { closeAppSettingsPopup } from 'redux/actions'
import { Wrapper, Container } from './AppSettingsPopup.styles'

const AppSettingsPopup: FC = memo(() => {
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback((): void => {
    dispatch(closeAppSettingsPopup())
  }, [dispatch])

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
})

export default AppSettingsPopup
