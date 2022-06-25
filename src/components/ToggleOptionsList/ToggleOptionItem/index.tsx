import React from 'react'
import { useDispatch } from 'react-redux'
import { ToggleOption } from '../../../utils/toggleOptionsHandler'
import styles from './ToggleOptionItem.module.scss'

const ToggleOptionItem: React.FC<ToggleOption> = option => {
  const { id, title, isActive, toggleIsActive } = option
  const activeButtonClass = `${styles.toggleButton} ${styles.active}`

  const dispatch = useDispatch()
  const onToggleButton = () => dispatch(toggleIsActive(id))

  return (
    <div className={styles.item} onClick={onToggleButton}>
      <span>{title}</span>
      <div className={isActive ? activeButtonClass : styles.toggleButton}>
        <div />
      </div>
    </div>
  )
}

export default ToggleOptionItem
