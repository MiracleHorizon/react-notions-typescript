import React from 'react'
import styles from './ListTitle.module.scss'

interface IListTitleProps {
  title: string
  toggleList: () => void
  toggleTooltip: () => void
}

const ListTitle: React.FC<IListTitleProps> = props => {
  const { title, toggleList, toggleTooltip } = props

  return (
    <div
      className={styles.title}
      onClick={toggleList}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <h3>{title.toUpperCase()}</h3>
    </div>
  )
}

export default ListTitle
