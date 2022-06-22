import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentPage } from '../../../../redux/workSpaceSlice/slice'

import googleSvg from '../../../../assets/img/appImgs/google-logo.png'
import arrow from '../../../../assets/img/sidebar-arrow.svg'
import styles from './SidebarListItem.module.scss'

interface ISidebarListItemProps {
  title: string
  id: number
  index: number
  onSelect: (i: number) => void
}

const SidebarListItem: React.FC<ISidebarListItemProps> = props => {
  const { title, id, index, onSelect } = props
  const dispatch = useDispatch()

  const onSelectCurrentPage = (): void => {
    dispatch(setCurrentPage(id))
  }

  return (
    <li draggable={true} className={styles.item} onClick={onSelectCurrentPage}>
      <img src={arrow} alt='Toggle' className={styles.toggleIcon} />
      <div>
        <div className={styles.icon}>
          <img src={googleSvg} alt='Title Img' />
        </div>
        <span>{title}</span>
      </div>
    </li>
  )
}

export default SidebarListItem

// const activeItem = useSelector(activeItemSelector)
// import { activeItemSelector } from '../../../../redux/sidebarSlice/selectors'
