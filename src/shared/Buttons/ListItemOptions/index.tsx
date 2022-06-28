import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import SidebarCategoryTooltip from '../../Tooltips/SidebarCategory'
import styles from './ListItemOptions.module.scss'
import optionsIcon from '../../../assets/img/three-dots.svg'

interface OptionsButtonProps {
  title: string
}

const ListItemOptionsButton: React.FC<OptionsButtonProps> = ({ title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)

  return (
    <div className={styles.options}>
      <img src={optionsIcon} ref={optionsButtonRef} alt='Options' />
      {isHovering && <SidebarCategoryTooltip title={title} />}
    </div>
  )
}

export default ListItemOptionsButton
