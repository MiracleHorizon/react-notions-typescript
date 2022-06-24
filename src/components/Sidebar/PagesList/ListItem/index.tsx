import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentPage } from '../../../../redux/workSpaceSlice/slice'
import arrow from '../../../../assets/img/sidebar-arrow.svg'
import styles from './SidebarListItem.module.scss'
import emptyIcon from '../../../../assets/img/emptyIcon.svg'

interface ISidebarListItemProps {
  title: string
  icon: string
  id: number
  index: number
  isHasIcon: boolean
  onSelect: (i: number) => void
}

const SidebarListItem: React.FC<ISidebarListItemProps> = props => {
  const { id, title, icon, isHasIcon, index, onSelect } = props
  const dispatch = useDispatch()

  const onSelectCurrentPage = (): void => {
    dispatch(setCurrentPage(id))
  }

  return (
    <li draggable={true} className={styles.item} onClick={onSelectCurrentPage}>
      <img src={arrow} alt='Toggle' className={styles.toggleIcon} />
      <div>
        <div className={styles.icon}>
          <img src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
        </div>
        <span>{title}</span>
      </div>
    </li>
  )
}

export default SidebarListItem

// const activeItem = useSelector(activeItemSelector)
// import { activeItemSelector } from '../../../../redux/sidebarSlice/selectors'
