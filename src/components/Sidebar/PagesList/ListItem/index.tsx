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
import { PagesListProps } from '../../index'

interface SidebarListItemProps extends PagesListProps {
  page: IWorkspacePage
}

const SidebarListItem: React.FC<SidebarListItemProps> = props => {
  const { page, activeItem, onSelect } = props
  const { id, pageTitle, icon, isHasIcon, isFavorite } = page

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const isPageIconHovering = useHover(tooltipRef)

  const dispatch = useDispatch()
  const onSelectCurrentPage = (): void => {
    dispatch(setCurrentPage(id))
    onSelect(pageTitle)
  }

  const className =
    activeItem === pageTitle ? styles.item + ' ' + styles.active : styles.item

  return (
    <li
      draggable={true}
      className={className}
      ref={itemRef}
      onClick={onSelectCurrentPage}
    >
      <img src={toggleIcon} alt='Toggle' className={styles.toggleIcon} />
      <div>
        <div className={styles.icon} ref={tooltipRef}>
          <img src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
          {isPageIconHovering && <ChangeIconTooltip />}
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
