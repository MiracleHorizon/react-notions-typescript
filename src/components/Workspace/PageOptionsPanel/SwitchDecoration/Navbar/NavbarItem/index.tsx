import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DecorPurposes } from '../index'

import {
  selectedCoverCategorySelector,
  selectedIconCategorySelector,
} from 'redux/pageDecorationSlice/selectors'
import {
  setCoverCategory,
  setIconCategory,
} from 'redux/pageDecorationSlice/slice'
import styles from './NavbarItem.module.scss'

interface SwitchNavbarItemProps {
  category: string
  purpose: string
}

const SwitchDecorationNavbarItem: React.FC<SwitchNavbarItemProps> = props => {
  const { category, purpose } = props
  const selectedCategory = useSelector(
    purpose === DecorPurposes.COVER
      ? selectedCoverCategorySelector
      : selectedIconCategorySelector
  )

  const dispatch = useDispatch()
  const onSelectCategory = (): void => {
    switch (purpose) {
      case DecorPurposes.COVER:
        dispatch(setCoverCategory(category))
        break
      case DecorPurposes.ICON:
        dispatch(setIconCategory(category))
        break
    }
  }

  return (
    <div className={styles.actionBtnBlock}>
      <div
        role='button'
        className={styles.actionBtn}
        onClick={onSelectCategory}
      >
        <span>{category}</span>
      </div>
      {selectedCategory === category && <div className={styles.border} />}
    </div>
  )
}

export default SwitchDecorationNavbarItem
