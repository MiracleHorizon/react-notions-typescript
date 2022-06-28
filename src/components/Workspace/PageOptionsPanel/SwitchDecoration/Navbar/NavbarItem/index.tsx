import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCoverCategory } from '../../../../../../redux/pageDecorationSlice/slice'
import { selectedCoverCategorySelector } from '../../../../../../redux/pageDecorationSlice/selectors'
import styles from './NavbarItem.module.scss'

const SwitchDecorationNavbarItem: React.FC<{ category: string }> = props => {
  const { category } = props
  const selectedCategory = useSelector(selectedCoverCategorySelector)

  const dispatch = useDispatch()
  const onSelectCategory = (): void => {
    dispatch(setCoverCategory(category))
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

export default SwitchDecorationNavbarItem
