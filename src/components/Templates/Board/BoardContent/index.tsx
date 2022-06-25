import React from 'react'
import { useSelector } from 'react-redux'

import SidebarListOptions from '../../../../shared/ModalWindows/SidebarListOptions'
import PageSettings from '../../../../shared/ModalWindows/PageSettings'
import {
  favoritePageOptionsSelector,
  privatePageOptionsSelector,
} from '../../../../redux/optionsSlice/selectors'
import styles from './BoardContent.module.scss'

const BoardContent: React.FC = () => {
  const favoritePageOptions = useSelector(favoritePageOptionsSelector)
  const privatePageOptions = useSelector(privatePageOptionsSelector)

  return (
    <div className={styles.content}>
      <SidebarListOptions options={favoritePageOptions} />
      <SidebarListOptions options={privatePageOptions} />
      <PageSettings />
    </div>
  )
}

export default BoardContent
