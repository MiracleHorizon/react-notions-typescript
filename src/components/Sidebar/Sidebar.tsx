import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './Panels/UserPanel/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel/AppOptionsPanel'
import FavoritePagesList from './PagesList/FavoritePagesList'
import CommonPagesList from './PagesList/CommonPagesList'
import AddNewPagePanel from './Panels/AddNewPagePanel/AddNewPagePanel'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { setActivePage } from 'redux/sidebarSlice/slice'
import { Wrapper, Container, ShadowSeparator, Content } from './Sidebar.styles'

const Sidebar: React.FC = () => {
  const [width, setWidth] = useState<number>(300)
  const { title, id } = useSelector(currentPageSelector)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  const dispatch = useDispatch()
  const onChangeSidebarWidth = (width: number): void => setWidth(width)

  useEffect(() => {
    dispatch(setActivePage({ title, id: id! })) //!
  }, [id, title, dispatch])

  return (
    <Wrapper ref={sidebarRef} isOpen={isSidebarOpen} width={width}>
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
    </Wrapper>
  )
}

export default Sidebar
