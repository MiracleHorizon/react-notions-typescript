import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import ActionButtons from './ActionButtons'
import ChangePageTitleModal from '../../shared/ModalWindows/ChangePageTitle'
import SwitchSidebarButton from '../../shared/Buttons/SwitchSidebar'
import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from '../../redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from '../../redux/modalsSlice/slice'
import styles from './Header.module.scss'
import emptyIcon from '../../assets/img/optionsImgs/emptyIcon.svg'

const Header: React.FC = () => {
  const { pageTitle, icon, isHasIcon } = useSelector(currentPageSelector)
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
    <header className={styles.header}>
      {!isSidebarOpen && <SwitchSidebarButton purpose='open' />}
      <div className={styles.navbar}>
        <div ref={modalRef} onClick={onOpenChangePageTitleModal}>
          <div className={styles.pageTitleBlock}>
            <img src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
            <span>{pageTitle}</span>
          </div>
          {isChangePageTitleModalOpen && (
            <ChangePageTitleModal coords={changePageTitleModalCoords} />
          )}
        </div>
        <ActionButtons />
      </div>
    </header>
  )
}

export default Header
