import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import PageOptionsPanel from './PageOptionsPanel/PageOptionsPanel'
import ChangePageTitleModal from 'shared/ModalWindows/ChangePageTitle'
import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
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
import emptyIcon from 'assets/img/optionsImgs/empty.svg'

const Header: React.FC = () => {
  const { title, icon, isHasIcon } = useSelector(currentPageSelector)
  const changePageTitleModalCoords = { left: '10px', top: '40px' }

  const modalRef = useRef<HTMLDivElement>(null)
  const {
    isOpen: isLeftSidebarOpen,
    isBubbling,
    location,
  } = useSelector(leftSidebarSelector)
  const isChangePageTitleModalOpen = useSelector(changePageTitleModalSelector)

  const dispatch = useDispatch()
  const onOpenChangePageTitleModal = (): void => {
    dispatch(openChangePageTitleModal())
  }
  const handleClickOutside = (): void => {
    dispatch(closeChangePageTitleModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Wrapper>
      {!isLeftSidebarOpen || (isLeftSidebarOpen && isBubbling) ? (
        <ToggleSidebarButton purpose={Purposes.OPEN} location={location} />
      ) : null}
      <Container>
        <HeaderPanel>
          <PageTitleBlock>
            <PageIcon src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
            <PageTitle>{title}</PageTitle>
          </PageTitleBlock>
          {isChangePageTitleModalOpen && (
            <ChangePageTitleModal coords={changePageTitleModalCoords} />
          )}
          <PageOptionsPanel />
        </HeaderPanel>
      </Container>
    </Wrapper>
  )
}

export default Header
