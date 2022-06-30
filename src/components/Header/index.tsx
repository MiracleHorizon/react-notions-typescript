import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import ActionButtons from './ActionButtons'
import ChangePageTitleModal from 'shared/ModalWindows/ChangePageTitle'
import ToggleSidebarButton, {
  ToggleSidebarBtnPurposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import { isSidebarOpenSelector } from 'redux/sidebarSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from 'redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from 'redux/modalsSlice/slice'
import emptyIcon from 'assets/img/optionsImgs/empty.svg'

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderPanel,
  PageTitleBlock,
  PageTitle,
  PageIcon,
} from './Header.styles'

const Header: React.FC = () => {
  const { title, icon, isHasIcon } = useSelector(currentPageSelector)
  const changePageTitleModalCoords = { left: '10px', top: '40px' }

  const modalRef = useRef<HTMLDivElement>(null)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
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
    <HeaderWrapper>
      {!isSidebarOpen && (
        <ToggleSidebarButton purpose={ToggleSidebarBtnPurposes.OPEN} />
      )}
      <HeaderContainer>
        <HeaderPanel>
          <div ref={modalRef} onClick={onOpenChangePageTitleModal}>
            <PageTitleBlock>
              <PageIcon src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
              <PageTitle>{title}</PageTitle>
            </PageTitleBlock>
            {isChangePageTitleModalOpen && (
              <ChangePageTitleModal coords={changePageTitleModalCoords} />
            )}
          </div>
          <ActionButtons />
        </HeaderPanel>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
