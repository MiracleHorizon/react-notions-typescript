import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import useResize from 'hooks/mouse/resize'
import RightSidebarHeader from './RightSidebarHeader'
import EmptyRightSidebar from './EmptyRightSidebar'
import SidebarResizer from '../Resizer'
import SidebarCommentsList from './Comments'
import { CloseRightSidebarButton } from 'components/ui'
import { ResizeDirections } from 'hooks/mouse/resize/useResize.types'
import { rightSidebarStateSelector, currentPageSelector } from 'redux/selectors'
import { closeRightSidebar, setRightSidebarWidth } from 'redux/actions'
import * as Sidebar from '../Sidebar.styles'

const RightSidebar: FC = memo(() => {
  const { activeCommentsFilter, ...rightSidebarInfo } = useSelector(
    rightSidebarStateSelector
  )
  const {
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const resizeSidebarParams = useMemo(() => {
    return {
      direction: ResizeDirections.LEFT,
      references: {
        node: sidebarRef,
        resizer: resizerRef,
      },
      setWidth: setRightSidebarWidth,
      restrictions: { maxWidth: 480, minWidth: 385 },
    }
  }, []) // Замыкание.

  const isResizingEnabled = useResize(resizeSidebarParams)

  const onCloseSidebar = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      if (!isResizingEnabled) dispatch(closeRightSidebar())
    },
    [dispatch, isResizingEnabled]
  )

  return (
    <Sidebar.Wrapper
      ref={sidebarRef}
      {...{ ...rightSidebarInfo, isResizerHovering, isResizingEnabled }}
    >
      <Sidebar.Container>
        <CloseRightSidebarButton isParentHovering={isHovering} />
        <RightSidebarHeader />
        {isHasComments ? (
          <SidebarCommentsList />
        ) : (
          <EmptyRightSidebar title={activeCommentsFilter.toLowerCase()} />
        )}
      </Sidebar.Container>
      <SidebarResizer
        isActive={!isResizingEnabled && isResizerHovering}
        isResizingEnabled={isResizingEnabled}
        location={rightSidebarInfo.location}
        resizerRef={resizerRef}
        onClickAction={onCloseSidebar}
      />
    </Sidebar.Wrapper>
  )
})

export default RightSidebar
