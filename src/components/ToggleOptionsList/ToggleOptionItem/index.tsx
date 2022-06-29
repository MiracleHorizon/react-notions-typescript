import React from 'react'
import { useDispatch } from 'react-redux'

import { ToggleOption } from '../../../utils/helpers/toggleOptionsHandler'
import styles from './ToggleOptionItem.module.scss'

interface ToggleOptionItemProps {
  option: ToggleOption
  activeItem: string
  onSelect: (title: string) => void
}

const ToggleOptionItem: React.FC<ToggleOptionItemProps> = props => {
  const { option, activeItem, onSelect } = props
  const { id, title, isActive, toggleIsActive } = option
  const activeButtonClass = `${styles.toggleButton} ${styles.active}`

  const dispatch = useDispatch()
  const onToggleButton = (): void => {
    dispatch(toggleIsActive(id))
  }
  const styleHandler =
    activeItem === title ? styles.item + ' ' + styles.active : styles.item

  return (
    <div
      className={styleHandler}
      onClick={onToggleButton}
      onMouseEnter={() => onSelect(title)}
    >
      <span>{title}</span>
      <div className={isActive ? activeButtonClass : styles.toggleButton}>
        <div />
      </div>
    </div>
  )
}

export default ToggleOptionItem
