import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchOpenButton from '../../shared/Buttons/Switch/SwitchOpen'
import ActionButtons from './ActionButtons'
import ChangePageTitleModal from '../../shared/ModalWindows/ChangePageTitle'
import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from '../../redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from '../../redux/modalsSlice/slice'
import styles from './Header.module.scss'
import emptyIcon from '../../assets/img/emptyIcon.svg'

const Header: React.FC = () => {
  const changePageTitleModalRef = useRef<HTMLDivElement>(null)
  const { pageTitle, icon, isHasIcon } = useSelector(currentPageSelector)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const isChangePageTitleModalOpen = useSelector(changePageTitleModalSelector)
  const changePageTitleModalCoords = { left: '10px', top: '40px' }

  const dispatch = useDispatch()
  const onOpenChangePageTitleModal = () => dispatch(openChangePageTitleModal())

  useEffect(() => {
    const modalClickHandler = (e: MouseEvent): void => {
      if (!changePageTitleModalRef.current) return

      if (!e.composedPath().includes(changePageTitleModalRef.current)) {
        dispatch(closeChangePageTitleModal())
      }
    }
    document.body.addEventListener('click', modalClickHandler)

    return () => {
      document.body.removeEventListener('click', modalClickHandler)
    }
  }, [dispatch])

  return (
    <header className={styles.header}>
      {!isSidebarOpen && <SwitchOpenButton />}
      <div className={styles.navbar} onClick={onOpenChangePageTitleModal}>
        <div ref={changePageTitleModalRef}>
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
