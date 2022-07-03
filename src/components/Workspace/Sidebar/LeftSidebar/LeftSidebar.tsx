import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './Panels/UserPanel/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel/AppOptionsPanel'
import FavoritePagesList from './PagesList/FavoritePagesList'
import CommonPagesList from './PagesList/CommonPagesList'
import AddNewPagePanel from './Panels/AddNewPagePanel/AddNewPagePanel'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { setActivePage } from 'redux/sidebarsSlice/slice'
import {
  Wrapper,
  Container,
  ShadowSeparator,
  Content,
  ResizerContainer,
  Resizer,
} from '../Sidebar.styles'

const LeftSidebar: React.FC = () => {
  const [width, setWidth] = useState<number>(300)
  const { title, id } = useSelector(currentPageSelector)
  const { isOpen, isBubbling, location } = useSelector(leftSidebarSelector)
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  useEffect(() => {
    dispatch(setActivePage({ title, id: id! })) //!
  }, [id, title, dispatch])

  return (
    <Wrapper ref={sidebarRef} {...{ isOpen, isBubbling, width, location }}>
      <Container>
        <UserPanel {...{ isHovering, location }} />
        <AppOptionsPanel />
        <ShadowSeparator />
        <Content>
          <FavoritePagesList />
          <CommonPagesList />
        </Content>
        <AddNewPagePanel />
      </Container>
      <ResizerContainer draggable={true} ref={resizerRef} location={location}>
        <Resizer />
      </ResizerContainer>
    </Wrapper>
  )
}

export default LeftSidebar

// const onKeyboardBindToggleSidebar = useKeyboardBind({
//   keyboardCode: 'Backslash',
//   ctrlKey: true,
//   action: toggleSidebar(),
// })

// useEventListener('keydown', onKeyboardBindToggleSidebar)
