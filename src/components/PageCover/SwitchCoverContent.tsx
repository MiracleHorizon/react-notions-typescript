import React from 'react'
import { useSelector } from 'react-redux'

import CoversGallery from './CoversGallery'
import UploadCover from './UploadCover'
import CoverLink from './CoverLink'
import { NavbarCategories } from '../../redux/switchCoverSlice/types'
import {
  coversListsSelector,
  selectedCategorySelector,
} from '../../redux/switchCoverSlice/selectors'
import styles from '../../shared/ModalWindows/SwitchCover/SwitchCover.module.scss'

const SwitchCoverContent: React.FC = () => {
  const coversLists = useSelector(coversListsSelector)
  const selectedCategory = useSelector(selectedCategorySelector)

  const selectedCategoryHandler = (): JSX.Element[] | JSX.Element => {
    switch (selectedCategory) {
      case NavbarCategories.GALLERY:
        return coversLists.map(({ title, covers }) => (
          <CoversGallery key={title} title={title} covers={covers} />
        ))
      case NavbarCategories.UPLOAD:
        return <UploadCover />
      case NavbarCategories.LINK:
        return <CoverLink />
      default:
        return <h2>Nothing found</h2>
    }
  }

  return (
    <div className={styles.contentBlock}>
      <div className={styles.content}>{selectedCategoryHandler()}</div>
    </div>
  )
}

export default SwitchCoverContent
