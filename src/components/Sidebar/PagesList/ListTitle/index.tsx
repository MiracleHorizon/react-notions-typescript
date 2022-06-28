import React, { RefObject } from 'react'
import styles from './ListTitle.module.scss'

interface SidebarListTitleProps {
  title: string
  reference: RefObject<HTMLDivElement>
  toggleList: () => void
}

const ListTitle: React.FC<SidebarListTitleProps> = props => {
  const { title, reference, toggleList } = props

  return (
    <div className={styles.title} ref={reference} onClick={toggleList}>
      <h3>{title}</h3>
    </div>
  )
}

export default ListTitle
