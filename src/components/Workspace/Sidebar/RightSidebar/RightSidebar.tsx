import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import EmptyRightSidebar from './EmptyRightSidebar/EmptyRightSidebar'
import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import {
  Wrapper,
  Container,
  Content,
  ResizerContainer,
  Resizer,
} from '../Sidebar.styles'
import RightSidebarHeader from './RightSidebarHeader/RightSidebarHeader'

const RightSidebar: React.FC = () => {
  const { isOpen, location, width } = useSelector(rightSidebarSelector)
  const { isHasComments } = useSelector(currentPageSelector)

  const [emptyCommentsTitle, setEmptyCommentsTitle] = useState<string>('open')

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
          <EmptyRightSidebar title={emptyCommentsTitle} />
        )}
      </Container>
      <ResizerContainer location={location}>
        <Resizer />
      </ResizerContainer>
    </Wrapper>
  )
}

export default RightSidebar
