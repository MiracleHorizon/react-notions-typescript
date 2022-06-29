import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import ListItemOptionsButton from 'shared/Buttons/ListItemOptions'
import ChangeIconTooltip from 'shared/Tooltips/ChangeIcon'
import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import toggleIcon from 'assets/img/sidebar-arrow.svg'
import emptyIcon from 'assets/img/optionsImgs/empty.svg'
import styles from './SidebarListItem.module.scss'

interface SidebarListItemProps {
  page: IWorkspacePage
  index: number //!
  onSelect: (i: number) => void
}

const SidebarListItem: React.FC<SidebarListItemProps> = props => {
  const { id, pageTitle, icon, isHasIcon, isFavorite } = props.page

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const isTooltipHovering = useHover(tooltipRef)

  const dispatch = useDispatch()
  const onSelectCurrentPage = (): void => {
    dispatch(setCurrentPage(id))
  }

  return (
    <li
      draggable={true}
      className={styles.item}
      ref={itemRef}
      onClick={onSelectCurrentPage}
    >
      <img src={toggleIcon} alt='Toggle' className={styles.toggleIcon} />
      <div>
        <div className={styles.icon} ref={tooltipRef}>
          <img src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
          {isTooltipHovering && <ChangeIconTooltip />}
        </div>
        <span className={styles.pageTitle}>{pageTitle}</span>
      </div>
      {isHovering && (
        <ListItemOptionsButton
          title={isFavorite ? 'Remove, rename' : 'Delete, duplicate'}
        />
      )}
    </li>
  )
}

export default SidebarListItem
