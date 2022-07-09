import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import useResize from 'hooks/useResize/useResize'
import RightSidebarHeader from './RightSidebarHeader'
import EmptyRightSidebar from './EmptyRightSidebar'
import CloseRightSidebarButton from 'shared/Buttons/ToggleSidebar/components/CloseRight'
import SidebarResizer from '../Resizer'
import { rightSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { setRightSidebarWidth } from 'redux/sidebarsSlice/slice'
import { Container, Content, Wrapper } from '../Sidebar.styles'

const RightSidebar: React.FC = () => {
  const { activeCommentsFilter, ...rightSidebarInfo } =
    useSelector(rightSidebarSelector)
  const {
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const { isResizingEnabled } = useResize({
    resizeDirection: 'Left',
    references: {
      node: sidebarRef,
      resizer: resizerRef,
    },
    setWidth: setRightSidebarWidth,
    restrictions: { maxWidth: 480, minWidth: 340 },
  })

  const onCloseSidebar = (): void => {
    // if (!isResizingEnabled) dispatch(closeRightSidebar())
  }

  return (
    <Wrapper
      ref={sidebarRef}
      {...{
        ...rightSidebarInfo,
        isResizerHovering,
        isResizingEnabled,
      }}
    >
      <Container>
        <CloseRightSidebarButton isParentHovering={isHovering} />
        <RightSidebarHeader />
        {isHasComments ? (
          <Content></Content>
        ) : (
          <EmptyRightSidebar title={activeCommentsFilter.toLowerCase()} />
        )}
      </Container>
      <SidebarResizer
        location={rightSidebarInfo.location}
        resizerRef={resizerRef}
        onClickAction={onCloseSidebar}
      />
    </Wrapper>
  )
}

export default RightSidebar
