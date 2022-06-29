import React from 'react'

import EmptyPageItem from '../EmptyPageItem'
import { EmptyPageOption } from '../../../../redux/optionsSlice/types'
import styles from './EmptyPageList.module.scss'

interface EmptyPageListProps {
  list: EmptyPageOption[]
  activeItem: string
  onHover: (activeItem: string) => void
}

const EmptyPageList: React.FC<EmptyPageListProps> = props => {
  const { list, activeItem, onHover } = props

  return (
    <ul className={styles.list}>
      {list.map(({ title, img, onClick }) => (
        <EmptyPageItem
          key={title}
          title={title}
          img={img}
          activeItem={activeItem}
          onHover={onHover}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}

export default EmptyPageList
