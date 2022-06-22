import React from 'react'

import googleSvg from '../../../../assets/img/appImgs/google-logo.png'
import arrow from '../../../../assets/img/sidebar-arrow.svg'
import styles from './SidebarListItem.module.scss'

interface ISidebarListItemProps {
  title: string
  index: number
  onSelect: (i: number) => void
}

const SidebarListItem: React.FC<ISidebarListItemProps> = ({
  title,
  index,
  onSelect,
}) => {
  return (
    <li
      draggable={true}
      className={styles.item}
      onClick={() => onSelect(index)}
    >
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
// import { useSelector } from 'react-redux'
// import { activeItemSelector } from '../../../../redux/sidebarSlice/selectors'
