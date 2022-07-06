import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import PageSettingsPanel from './PageSettingsPanel'
import HeaderPageTitle from './PageTitle'
import OpenLeftSidebarButton from 'shared/Buttons/ToggleSidebar/components/OpenLeft'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { Container, HeaderPanel, Wrapper } from './Header.styles'

const Header: React.FC = () => {
  const { isOpen: isLeftSidebarOpen, isBubbling: isLeftSidebarBubbling } =
    useSelector(leftSidebarSelector)

  const headerRef = useRef<HTMLHeadElement>(null)
  const isHovering = useHover(headerRef)

  return (
    <Wrapper ref={headerRef}>
      {(!isLeftSidebarOpen || (isLeftSidebarOpen && isLeftSidebarBubbling)) && (
        <OpenLeftSidebarButton isParentHovering={isHovering} />
      )}
      <Container>
        <HeaderPanel>
          <HeaderPageTitle />
          <PageSettingsPanel />
        </HeaderPanel>
      </Container>
    </Wrapper>
  )
}

export default Header
