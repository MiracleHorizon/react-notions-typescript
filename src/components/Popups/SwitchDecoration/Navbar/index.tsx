import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchDecorationNavbarItem from './NavbarItem'
import { CoverSvg, SmileySvg } from 'shared/SVG'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { coversListsSelector } from 'redux/pageDecorationSlice/selectors'
import { closeChangeIconPopup } from 'redux/popupsSlice/slice'
import {
  removeCover,
  removeIcon,
  setPageCover,
  setPageIcon,
} from 'redux/workSpaceSlice/slice'
import {
  refreshCoverCategory,
  refreshIconCategory,
  setIsCoverModalClose,
} from 'redux/pageDecorationSlice/slice'
import getRandomCover from 'helpers/getRandomCover'
import styles from './Navbar.module.scss'

enum DecorPurposes {
  COVER = 'cover',
  ICON = 'icon',
}

interface SwitchDecorationNavbarProps {
  categories: string[]
  purpose: string
}

const SwitchDecorationNavbar: React.FC<SwitchDecorationNavbarProps> = props => {
  const { categories, purpose } = props
  const { id } = useSelector(currentPageSelector)
  const covers = useSelector(coversListsSelector)

  const dispatch = useDispatch()
  const onAddRandomDecoration = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setPageCover({ cover: getRandomCover(covers), id }))
        dispatch(setIsCoverModalClose())
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        dispatch(setPageIcon({ icon: '', id }))
        dispatch(closeChangeIconPopup())
        dispatch(refreshIconCategory())
        break
    }
  }
  const onRemoveDecoration = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(removeCover(id))
        dispatch(setIsCoverModalClose())
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        dispatch(removeIcon(id))
        dispatch(closeChangeIconPopup())
        dispatch(refreshIconCategory())
        break
    }
  }

  return (
    <div className={styles.navbar}>
      {categories.map(category => (
        <SwitchDecorationNavbarItem
          key={category}
          category={category}
          purpose={purpose}
        />
      ))}
      <div className={styles.actions}>
        <div className={styles.btn} onClick={onAddRandomDecoration}>
          <div role='button'>
            {purpose === DecorPurposes.COVER ? <CoverSvg /> : <SmileySvg />}
            <span>Random</span>
          </div>
        </div>
        <div className={styles.btn} onClick={onRemoveDecoration}>
          <div role='button'>
            <span>Remove</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchDecorationNavbar
export { DecorPurposes }
