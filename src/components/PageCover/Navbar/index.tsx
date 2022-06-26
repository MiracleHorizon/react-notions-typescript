import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchCoverNavbarItem from './NavbarItem'
import { categoriesSelector } from '../../../redux/switchCoverSlice/selectors'
import styles from './Navbar.module.scss'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { removeCover } from '../../../redux/workSpaceSlice/slice'
import { setIsModalClose } from '../../../redux/switchCoverSlice/slice'

const SwitchCoverNavbar: React.FC = () => {
  const categories = useSelector(categoriesSelector)
  const { id } = useSelector(currentPageSelector)

  const dispatch = useDispatch()
  const onRemovePageCover = (): void => {
    dispatch(removeCover(id))
    dispatch(setIsModalClose())
  }

  return (
    <div className={styles.navbar}>
      {categories.map(category => (
        <SwitchCoverNavbarItem key={category} category={category} />
      ))}
      <div className={styles.removeBtnBlock}>
        <div role='button' onClick={onRemovePageCover}>
          <span>Remove</span>
        </div>
      </div>
    </div>
  )
}

export default SwitchCoverNavbar
