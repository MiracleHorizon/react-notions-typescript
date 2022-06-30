import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Tooltip from 'shared/Tooltip/Tooltip'
import ListItemOptionsButton from 'shared/Buttons/ListItemOptions'
import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { activePageSelector } from 'redux/sidebarSlice/selectors'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { setActivePage } from 'redux/sidebarSlice/slice'
import toggleIcon from 'assets/img/sidebar-arrow.svg'
import emptyIcon from 'assets/img/optionsImgs/empty.svg'
import {
  StyledItem,
  ToggleIcon,
  Information,
  IconBlock,
  Icon,
  Title,
} from './ListItem.styles'

const SidebarListItem: React.FC<{ page: IWorkspacePage }> = ({ page }) => {
  const { id, title, icon, isHasIcon, isFavorite } = page
  const activePage = useSelector(activePageSelector)
  const isActive = activePage.title === title

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const iconRef = useRef<HTMLDivElement>(null)
  const isPageIconHovering = useHover(iconRef) //!

  const dispatch = useDispatch()
  const onSelectCurrentPage = (): void => {
    dispatch(setActivePage({ title, id: id! }))
    dispatch(setCurrentPage(id))
  }

  return (
    <StyledItem
      draggable={true}
      ref={itemRef}
      isActive={isActive}
      onClick={onSelectCurrentPage}
    >
      <ToggleIcon src={toggleIcon} alt='Toggle' />
      <Information>
        <IconBlock ref={iconRef}>
          <Icon src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
          {isPageIconHovering && (
            <Tooltip
              title='Change icon'
              coords={{ left: '-30px', top: '25px' }}
            />
          )}
        </IconBlock>
        <Title isActive={isActive}>{title}</Title>
      </Information>
      {isHovering && (
        <ListItemOptionsButton
          title={isFavorite ? 'Remove, rename' : 'Delete, duplicate'}
        />
      )}
    </StyledItem>
  )
}

export default SidebarListItem
