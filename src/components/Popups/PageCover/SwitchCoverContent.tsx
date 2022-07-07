import React from 'react'
import { useSelector } from 'react-redux'

import CoversGallery from './CoversGallery'
import UploadCover from './UploadCover'
import CoverLink from './CoverLink'
import { SwitchCoverCategories } from 'redux/pageDecorationSlice/types'
import { coversListsSelector } from 'redux/pageDecorationSlice/selectors'
import { selectedCoverCategorySelector } from 'redux/pageDecorationSlice/selectors'
import styles from 'components/Popups/SwitchCover/SwitchCover.module.scss'

const SwitchCoverContent: React.FC = () => {
  const coversLists = useSelector(coversListsSelector)
  const selectedCategory = useSelector(selectedCoverCategorySelector)

  const selectedCategoryHandler = (): JSX.Element[] | JSX.Element => {
    switch (selectedCategory) {
      case SwitchCoverCategories.GALLERY:
        return coversLists.map(({ title, covers }) => (
          <CoversGallery key={title} title={title} covers={covers} />
        ))
      case SwitchCoverCategories.UPLOAD:
        return <UploadCover />
      case SwitchCoverCategories.LINK:
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
