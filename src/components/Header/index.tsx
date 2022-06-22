import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchOpenButton from '../../shared/Buttons/Switch/SwitchOpen'

import { isSidebarOpenSelector } from '../../redux/sidebarSlice/selectors'

import styles from './Header.module.scss'
import optionsSvg from '../../assets/img/three-dots.svg'
import commentsSvg from '../../assets/img/comments.svg'
import starSvg from '../../assets/img/star-outline.svg'
import reactSvg from '../../assets/img/technologies/react.svg'
import { isPopupOpenSelector } from '../../redux/pagePopupSlice/selectors'
import { setIsOpen } from '../../redux/pagePopupSlice/slice'
import PageSettingsPopup from '../Workspace/PageSettingsPopup'

const Header: React.FC = () => {
  const isSidebarOpen = useSelector(isSidebarOpenSelector)
  const isPopupOpen = useSelector(isPopupOpenSelector)
  const dispatch = useDispatch()

  const togglePopup = () => dispatch(setIsOpen())

  return (
    <div className={styles.header}>
      {!isSidebarOpen && <SwitchOpenButton />}
      <div className={styles.navbar}>
        <div className={styles.pageTitleBlock}>
          <img src={reactSvg} alt='Page icon' />
          <span>React + TypeScript</span>
        </div>
        <div className={styles.actionButtons}>
          <span>Share</span>
          <div>
            <img src={commentsSvg} alt='Comments' />
          </div>
          <div>
            <img src={starSvg} alt='Favorites' />
          </div>
          <div>
            <img src={optionsSvg} alt='Options' onClick={togglePopup} />
          </div>
        </div>
        {isPopupOpen && <PageSettingsPopup />}
      </div>
    </div>
  )
}

export default Header
