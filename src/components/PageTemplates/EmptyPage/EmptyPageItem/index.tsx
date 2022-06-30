import React, { useRef } from 'react'
import styles from './EmptyPageItem.module.scss'

interface EmptyPageItemProps {
  title: string
  img: string
  activeItem: string
  onSelect: (title: string) => void
  onClick: () => void
}

const EmptyPageItem: React.FC<EmptyPageItemProps> = props => {
  const { title, img, activeItem, onSelect, onClick } = props
  const itemRef = useRef<HTMLDivElement>(null)

  const className =
    activeItem === title ? `${styles.item} ${styles.active}` : styles.item

  return (
    <div
      className={className}
      ref={itemRef}
      onClick={onClick}
      onMouseEnter={() => onSelect(title)}
    >
      <div className={styles.image}>
        <img src={img} alt='PageIcon' />
      </div>
      <div>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default EmptyPageItem
