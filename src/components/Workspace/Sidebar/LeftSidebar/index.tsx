import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import UserPanel from './Panels/UserPanel'
import AppOptionsPanel from './Panels/AppOptionsPanel'
import PagesTrashPanel from './Panels/PagesTrashPanel'
import AddNewPagePanel from './Panels/AddNewPagePanel'
import FavoritePagesList from './PagesList/FavoritePagesList'
import CommonPagesList from './PagesList/CommonPagesList'
import PagesTrashPopup from 'components/Popups/PagesTrash'
import PagesListOptionsModal from 'shared/ModalWindows/PagesListOptions'
import {
  currentPageSelector,
  favoritePagesSelector,
} from 'redux/workSpaceSlice/selectors'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { setActivePage } from 'redux/sidebarsSlice/slice'
import {
  pageOptionsModalSelector,
  pagesTrashPopupSelector,
} from 'redux/modalsSlice/selectors'
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
  const { id, title } = useSelector(currentPageSelector)
  const { isOpen, isBubbling, location } = useSelector(leftSidebarSelector)

  const isHasFavoritePages = useSelector(favoritePagesSelector).length > 0
  const isPageOptionsPopupOpen = useSelector(pageOptionsModalSelector).isOpen
  const isPagesTrashPopupOpen = useSelector(pagesTrashPopupSelector)
  const dispatch = useDispatch()

  const resizerRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(sidebarRef)

  useEffect(() => {
    dispatch(setActivePage({ title, id }))
  }, [id, title, dispatch])

  return (
    <Wrapper ref={sidebarRef} {...{ isOpen, isBubbling, width, location }}>
      <Container>
        <UserPanel isHovering={isHovering} />
        <AppOptionsPanel />
        <ShadowSeparator />
        <Content>
          {isHasFavoritePages && <FavoritePagesList />}
          <CommonPagesList />
        </Content>
        <PagesTrashPanel />
        <AddNewPagePanel />
      </Container>
      <ResizerContainer draggable={true} ref={resizerRef} location={location}>
        <Resizer />
      </ResizerContainer>
      {isPageOptionsPopupOpen && <PagesListOptionsModal />}
      {isPagesTrashPopupOpen && <PagesTrashPopup sidebarWidth={width} />}
    </Wrapper>
  )
}

export default LeftSidebar
