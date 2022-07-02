import React from 'react'
import { useSelector } from 'react-redux'

import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import {
  Wrapper,
  Container,
  Content,
  ResizerContainer,
  Resizer,
} from '../Sidebar.styles'

const RightSidebar: React.FC = () => {
  const { isOpen, location, width } = useSelector(rightSidebarSelector)

  return (
    <Wrapper {...{ isOpen, width, location }}>
      {isOpen && (
        <ToggleSidebarButton purpose={Purposes.CLOSE} location={location} />
      )}
      <Container>
        <Content></Content>
      </Container>
      <ResizerContainer location={location}>
        <Resizer />
      </ResizerContainer>
    </Wrapper>
  )
}

export default RightSidebar
