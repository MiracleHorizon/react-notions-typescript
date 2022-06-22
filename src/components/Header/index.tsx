import React from 'react'
import { useSelector } from 'react-redux'

import SwitchOpenButton from '../../shared/Buttons/Switch/SwitchOpen'
import PageSettingsPopup from './PageSettingsPopup'
import ActionButtons from './ActionButtons'

import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'
import { isPopupOpenSelector } from '../../redux/pagePopupSlice/selectors'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'

import styles from './Header.module.scss'
import reactSvg from '../../assets/img/technologies/react.svg'

const Header: React.FC = () => {
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const isPopupOpen = useSelector(isPopupOpenSelector)
  const currentPage = useSelector(currentPageSelector)

  return (
    <div className={styles.header}>
      {!isSidebarOpen && <SwitchOpenButton />}
      <div className={styles.navbar}>
        <div className={styles.pageTitleBlock}>
          <img src={reactSvg} alt='Page icon' />{' '}
          {/* ДОБАВИТЬ ИКОНКИ ПО СТРАНИЦЕ */}
          <span>{currentPage && currentPage.pageTitle}</span>
        </div>
        <ActionButtons />
        {isPopupOpen && <PageSettingsPopup />}
      </div>
    </div>
  )
}

export default Header
