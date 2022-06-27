import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategory } from '../../../../redux/switchCoverSlice/slice'
import { selectedCategorySelector } from '../../../../redux/switchCoverSlice/selectors'
import styles from './NavbarItem.module.scss'

interface NavbarItemProps {
  category: string
}

const SwitchCoverNavbarItem: React.FC<NavbarItemProps> = ({ category }) => {
  const selectedCategory = useSelector(selectedCategorySelector)

  const dispatch = useDispatch()
  const onSelectCategory = (): void => {
    dispatch(setCategory(category))
  }

  return (
    <div className={styles.actionBtnBlock} onClick={onSelectCategory}>
      <div role='button' className={styles.actionBtn}>
        <span>{category}</span>
      </div>
      {selectedCategory === category && <div className={styles.border} />}
    </div>
  )
}

export default SwitchCoverNavbarItem
