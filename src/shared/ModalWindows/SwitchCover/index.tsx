import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import SwitchCoverContent from '../../../components/Workspace/PageOptionsPanel/PageCover/SwitchCoverContent'
import SwitchDecorationNavbar from '../../../components/Workspace/PageOptionsPanel/SwitchDecoration/Navbar'
import {
  refreshCoverCategory,
  setIsCoverModalClose,
} from '../../../redux/pageDecorationSlice/slice'
import { coverCategoriesSelector } from '../../../redux/pageDecorationSlice/selectors'
import styles from './SwitchCover.module.scss'

const SwitchPageCoverModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const categories = useSelector(coverCategoriesSelector)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(setIsCoverModalClose()) //! Переписать названия
    dispatch(refreshCoverCategory())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <div className={styles.modal}>
      <div className={styles.root} ref={modalRef}>
        <div className={styles.switchCover}>
          <SwitchDecorationNavbar categories={categories} purpose='cover' />
          <SwitchCoverContent />
        </div>
      </div>
    </div>
  )
}

export default SwitchPageCoverModal
