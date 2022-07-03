import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import Tooltip from 'shared/Tooltip/Tooltip'
import ListItemOptionsButton from 'shared/Buttons/ListItemOptions'
import AddNewPageButton from 'shared/Buttons/AddNewPage/AddNewPageButton'
import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { activePageSelector } from 'redux/sidebarsSlice/selectors'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { setActivePage } from 'redux/sidebarsSlice/slice'
import toggleIcon from 'assets/img/arrow.svg'
import emptyIcon from 'assets/img/optionsImgs/empty.svg'
import {
  StyledItem,
  ToggleIconBlock,
  ToggleIcon,
  Information,
  IconBlock,
  PageIcon,
  Title,
} from './ListItem.styles'

const SidebarListItem: React.FC<{ page: IWorkspacePage }> = ({ page }) => {
  const { id, title, icon, isHasIcon, isFavorite } = page
  const { isOpen, toggleIsOpen } = useToggle(false)
  const activePage = useSelector(activePageSelector)
  const isActive = activePage.title === title && activePage.id === id
  const dispatch = useDispatch()

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const iconRef = useRef<HTMLDivElement>(null)
  const isPageIconHovering = useHover(iconRef) //!

  const onSelectCurrentPage = (): void => {
    dispatch(setActivePage({ title, id }))
    dispatch(setCurrentPage(id))
  }
  const onAddNewPageInside = (): void => {}

  return (
    <StyledItem
      draggable={true}
      ref={itemRef}
      isActive={isActive}
      onClick={onSelectCurrentPage}
    >
      <ToggleIconBlock isChild={false} onClick={toggleIsOpen}>
        <ToggleIcon isOpen={isOpen} src={toggleIcon} alt='Toggle' />
      </ToggleIconBlock>
      <Information>
        <IconBlock ref={iconRef}>
          <PageIcon src={isHasIcon ? icon : emptyIcon} alt='Page icon' />
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
        <Fragment>
          <ListItemOptionsButton
            title={isFavorite ? 'Remove, rename' : 'Delete, duplicate'}
          />
          <AddNewPageButton
            coords={{ top: '4px', right: '8px' }}
            tooltipTitle='Quickly add a page inside'
            action={onAddNewPageInside}
          />
        </Fragment>
      )}
    </StyledItem>
  )
}

export default SidebarListItem
