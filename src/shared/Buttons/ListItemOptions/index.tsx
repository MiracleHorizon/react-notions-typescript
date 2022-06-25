import React, { useState } from 'react'

import SidebarCategoryTooltip from '../../Tooltips/SidebarCategory'
import styles from './ListItemOptions.module.scss'
import optionsIcon from '../../../assets/img/three-dots.svg'

interface IOptionsButtonProps {
  title: string
}

const ListItemOptionsButton: React.FC<IOptionsButtonProps> = ({ title }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

  const toggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <div
      className={styles.options}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <img src={optionsIcon} alt='Options' />
      {isTooltipOpen && <SidebarCategoryTooltip title={title} />}
    </div>
  )
}

export default ListItemOptionsButton
