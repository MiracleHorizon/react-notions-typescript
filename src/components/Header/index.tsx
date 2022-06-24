import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchOpenButton from '../../shared/Buttons/Switch/SwitchOpen'
import ActionButtons from './ActionButtons'
import ChangePageTitleModal from '../../shared/ChangePageTitleModal'
import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { changePageTitleModalSelector } from '../../redux/modalsSlice/selectors'
import {
  closeChangePageTitleModal,
  openChangePageTitleModal,
} from '../../redux/modalsSlice/slice'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const changePageTitleModalRef = useRef<HTMLDivElement>(null)
  const isChangePageTitleModalOpen = useSelector(changePageTitleModalSelector)
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const { pageTitle, pageImg } = useSelector(currentPageSelector)

  const dispatch = useDispatch()

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
    <div className={styles.header}>
      {!isSidebarOpen && <SwitchOpenButton />}
      <div
        className={styles.navbar}
        onClick={() => dispatch(openChangePageTitleModal())}
      >
        <div ref={changePageTitleModalRef}>
          <div className={styles.pageTitleBlock}>
            <img src={pageImg} alt='Page Icon' />
            <span>{pageTitle}</span>
          </div>
          {isChangePageTitleModalOpen && <ChangePageTitleModal />}
        </div>
        <ActionButtons />
      </div>
    </div>
  )
}

export default Header
