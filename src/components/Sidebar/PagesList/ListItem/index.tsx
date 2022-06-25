import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import ListItemOptionsButton from '../../../../shared/Buttons/ListItemOptions'
import ChangeIconTooltip from '../../../../shared/Tooltips/ChangeIcon'
import { IWorkspacePage } from '../../../../redux/workSpaceSlice/types'
import { setCurrentPage } from '../../../../redux/workSpaceSlice/slice'
import styles from './SidebarListItem.module.scss'
import toggleIcon from '../../../../assets/img/sidebar-arrow.svg'
import emptyIcon from '../../../../assets/img/emptyIcon.svg'

interface ISidebarListItemProps {
  page: IWorkspacePage
  index: number //!
  onSelect: (i: number) => void
}

const SidebarListItem: React.FC<ISidebarListItemProps> = props => {
  const { id, pageTitle, icon, isHasIcon, isFavorite } = props.page
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

  const dispatch = useDispatch()
  const onSelectCurrentPage = () => dispatch(setCurrentPage(id))
  const onToggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <li draggable={true} className={styles.item} onClick={onSelectCurrentPage}>
      <img src={toggleIcon} alt='Toggle' className={styles.toggleIcon} />
      <div>
        <div
          className={styles.icon}
          onMouseEnter={onToggleTooltip}
          onMouseLeave={onToggleTooltip}
        >
          {isTooltipOpen && <ChangeIconTooltip />}
          <img src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
        </div>
        <span className={styles.pageTitle}>{pageTitle}</span>
      </div>
      <ListItemOptionsButton
        title={isFavorite ? 'Remove, rename' : 'Delete, duplicate'}
      />
    </li>
  )
}

export default SidebarListItem

// const activeItem = useSelector(activeItemSelector)
// import { activeItemSelector } from '../../../../redux/sidebarSlice/selectors'
