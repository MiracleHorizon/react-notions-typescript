import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover, useOnClickOutside } from 'usehooks-ts'

import PageOptionsPanel from './PageOptionsPanel'
import ChangePageTitleModal from 'shared/ModalWindows/ChangePageTitle'
import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from 'redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from 'redux/modalsSlice/slice'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import {
  Container,
  HeaderPanel,
  PageIcon,
  PageTitle,
  PageTitleBlock,
  Wrapper,
} from './Header.styles'

const Header: React.FC = () => {
  const { title, icon, isHasIcon } = useSelector(currentPageSelector)
  const isChangePageTitleModalOpen = useSelector(changePageTitleModalSelector)
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const headerRef = useRef<HTMLHeadElement>(null)
  const isHovering = useHover(headerRef)

  const {
    isOpen: isLeftSidebarOpen,
    isBubbling: isLeftSidebarBubbling,
    location: leftSidebarLocation,
  } = useSelector(leftSidebarSelector)

  const onOpenChangePageTitleModal = (): void => {
    dispatch(openChangePageTitleModal())
  }
  const handleClickOutside = (): void => {
    dispatch(closeChangePageTitleModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Wrapper ref={headerRef}>
      {(!isLeftSidebarOpen || (isLeftSidebarOpen && isLeftSidebarBubbling)) && (
        <ToggleSidebarButton
          isParentHovering={isHovering}
          purpose={Purposes.OPEN}
          location={leftSidebarLocation}
        />
      )}
      <Container>
        <HeaderPanel>
          <PageTitleBlock onClick={onOpenChangePageTitleModal}>
            {isHasIcon && <PageIcon src={icon} alt='Page icon' />}
            <PageTitle>{title}</PageTitle>
          </PageTitleBlock>
          {isChangePageTitleModalOpen && (
            <ChangePageTitleModal coords={{ left: '10px', top: '40px' }} />
          )}
          <PageOptionsPanel />
        </HeaderPanel>
      </Container>
    </Wrapper>
  )
}

export default Header
