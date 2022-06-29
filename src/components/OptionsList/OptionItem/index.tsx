import React from 'react'

import { IOptionItem } from 'redux/optionsSlice/types'
import classNameHandler from 'utils/helpers/optionItemClassNameHandler'
import styles from './OptionItem.module.scss'

interface OptionItemProps {
  option: IOptionItem
  activeItem?: string
  onSelect?: (title: string) => void
  className?: string
}

const OptionItem: React.FC<OptionItemProps> = props => {
  const {
    option: { title, imgUrl },
    activeItem,
    onSelect,
    className,
  } = props

  const isActive = activeItem === title && styles.active

  return (
    <div
      className={classNameHandler(className) + ' ' + isActive}
      onMouseEnter={() => onSelect && onSelect(title)}
    >
      <img src={imgUrl} alt='Option' />
      <span>{title}</span>
    </div>
  )
}

export default OptionItem
