import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import RightSidebarHeader from './RightSidebarHeader'
import EmptyRightSidebar from './EmptyRightSidebar'
import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar'
import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import {
  Container,
  Content,
  Resizer,
  ResizerContainer,
  Wrapper,
} from '../Sidebar.styles'

const RightSidebar: React.FC = () => {
  const { isOpen, location, width, activeCommentsFilter } =
    useSelector(rightSidebarSelector)
  const {
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  return (
    <Wrapper ref={sidebarRef} {...{ isOpen, width, location }}>
      <Container>
        <ToggleSidebarButton
          isParentHovering={isHovering}
          purpose={Purposes.CLOSE}
          location={location}
        />
        <RightSidebarHeader />
        {isHasComments ? (
          <Content></Content>
        ) : (
          <EmptyRightSidebar title={activeCommentsFilter.toLowerCase()} />
        )}
      </Container>
      <ResizerContainer location={location}>
        <Resizer />
      </ResizerContainer>
    </Wrapper>
  )
}

export default RightSidebar
