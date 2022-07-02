import React, { useCallback, useEffect } from 'react'

import EmptyPageItem from '../EmptyPageItem'
import { EmptyPageOption } from '../../../../redux/optionsSlice/types'
import styles from './EmptyPageList.module.scss'
import { useKeyboardSelect } from '../../../../hooks/useKeyboardSelect/useKeyboardSelect'

interface EmptyPageListProps {
  list: EmptyPageOption[]
  activeItem: string
  onSelect: (activeItem: string) => void
  setActiveItem?: (title: string) => void
}

const EmptyPageList: React.FC<EmptyPageListProps> = props => {
  const { list, activeItem, onSelect } = props

  return (
    <ul className={styles.list}>
      {list.map(({ title, img, onClick }) => (
        <EmptyPageItem
          key={title}
          title={title}
          img={img}
          activeItem={activeItem}
          onSelect={onSelect}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}

export default EmptyPageList
