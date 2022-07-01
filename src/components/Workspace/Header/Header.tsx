import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import PageOptionsPanel from './PageOptionsPanel/PageOptionsPanel'
import ChangePageTitleModal from 'shared/ModalWindows/ChangePageTitle'
import ToggleSidebarButton, {
  ToggleSidebarBtnPurposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import {
  isSidebarOpenSelector,
  sidebarStateSelector,
} from 'redux/sidebarSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from 'redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from 'redux/modalsSlice/slice'
import {
  Wrapper,
  Container,
  HeaderPanel,
  PageTitle,
  PageIcon,
  PageTitleBlock,
} from './Header.styles'
import emptyIcon from 'assets/img/optionsImgs/empty.svg'

const Header: React.FC = () => {
  const { title, icon, isHasIcon } = useSelector(currentPageSelector)
  const changePageTitleModalCoords = { left: '10px', top: '40px' }

  const modalRef = useRef<HTMLDivElement>(null)
  const { isOpen: isSidebarOpen, isBubbling } =
    useSelector(sidebarStateSelector)
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
      {!isSidebarOpen || (isSidebarOpen && isBubbling) ? (
        <ToggleSidebarButton purpose={ToggleSidebarBtnPurposes.OPEN} />
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
// <div ref={modalRef} onClick={onOpenChangePageTitleModal}>
//   <PageTitleBlock>
//   <PageIcon src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
//   <PageTitle>{title}</PageTitle>
// </PageTitleBlock>
// {isChangePageTitleModalOpen && (
//   <ChangePageTitleModal coords={changePageTitleModalCoords} />
// )}
// </div>
