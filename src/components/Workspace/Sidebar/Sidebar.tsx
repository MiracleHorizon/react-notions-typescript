import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './Panels/UserPanel/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel/AppOptionsPanel'
import FavoritePagesList from './PagesList/FavoritePagesList'
import CommonPagesList from './PagesList/CommonPagesList'
import AddNewPagePanel from './Panels/AddNewPagePanel/AddNewPagePanel'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { sidebarStateSelector } from 'redux/sidebarSlice/selectors'
import { setActivePage } from 'redux/sidebarSlice/slice'
import {
  Wrapper,
  Container,
  ShadowSeparator,
  Content,
  ResizerContainer,
  Resizer,
} from './Sidebar.styles'

const Sidebar: React.FC = () => {
  const [width, setWidth] = useState<number>(300)
  const { title, id } = useSelector(currentPageSelector)
  const { isOpen, isBubbling } = useSelector(sidebarStateSelector)
  const resizerRef = useRef<HTMLDivElement>(null)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage({ title, id: id! })) //!
  }, [id, title, dispatch])

  return (
    <Wrapper ref={sidebarRef} {...{ isOpen, isBubbling, width }}>
      <Container>
        <UserPanel isHovering={isHovering} />
        <AppOptionsPanel />
        <ShadowSeparator />
        <Content>
          <FavoritePagesList />
          <CommonPagesList />
        </Content>
        <AddNewPagePanel />
      </Container>
      <ResizerContainer draggable={true} ref={resizerRef}>
        <Resizer />
      </ResizerContainer>
    </Wrapper>
  )
}

export default Sidebar
