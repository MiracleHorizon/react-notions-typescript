import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'

import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { getAllCovers } from 'utils/helpers/getAllCovers'
import { coversListsSelector } from 'redux/pageDecorationSlice/selectors'
import {
  removeCover,
  removeIcon,
  setPageCover,
  setPageIcon,
} from 'redux/workSpaceSlice/slice'
import coverSvg from 'assets/img/cover.svg'
import smileSvg from 'assets/img/smile.svg'
import styles from './Navbar.module.scss'
import SwitchDecorationNavbarItem from './NavbarItem'
import {
  refreshCoverCategory,
  refreshIconCategory,
  setIsCoverModalClose,
  setIsIconModalClose,
} from 'redux/pageDecorationSlice/slice'

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
  const randomButtonImg = purpose === DecorPurposes.COVER ? coverSvg : smileSvg

  const dispatch = useDispatch()
  const onAddRandomDecoration = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setPageCover({ cover: _.sample(getAllCovers(covers)), id }))
        dispatch(setIsCoverModalClose())
        dispatch(refreshCoverCategory())
        break
      case DecorPurposes.ICON:
        dispatch(setPageIcon(''))
        dispatch(setIsIconModalClose())
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
        dispatch(setIsIconModalClose())
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
            <img src={randomButtonImg} alt='Random' />
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
