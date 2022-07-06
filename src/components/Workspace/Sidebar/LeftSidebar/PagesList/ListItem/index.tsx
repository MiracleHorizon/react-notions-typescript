import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import PagesListItemOptionsButton from 'shared/Buttons/PagesListItemOptions'
import AddNewPageButton from 'shared/Buttons/AddNewPage'
import TriangleSVG from 'shared/SVG/Triangle'
import { activePageSelector } from 'redux/sidebarsSlice/selectors'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeRightSidebar, setActivePage } from 'redux/sidebarsSlice/slice'
import { ListItemOptions, SidebarListItemProps } from './ListItem.types'
import {
  Information,
  StyledItem,
  Title,
  ToggleIconBlock,
} from './ListItem.styles'
import PagesListItemIcon from './ItemIcon'

const PagesListItem: React.FC<SidebarListItemProps> = ({ page }) => {
  const {
    id,
    title,
    isFavorite,
    iconInfo: { icon, isHasIcon },
  } = page //* isChild.
  const { isOpen, toggleIsOpen } = useToggle(false)
  const listItemOptionsTitle = isFavorite
    ? ListItemOptions.FAVORITE
    : ListItemOptions.COMMON //* Переработать.
  const dispatch = useDispatch()

  const activePage = useSelector(activePageSelector)
  const isActive: boolean = activePage.title === title && activePage.id === id

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering: boolean = useHover(itemRef)

  const onSelectCurrentPage = (): void => {
    dispatch(setActivePage({ title, id }))
    dispatch(setCurrentPage(id))
    dispatch(closeRightSidebar())
  }
  const onAddNewPageInside = (e: React.MouseEvent): void => {
    e.stopPropagation()
    //...
  }
  const onTogglePageContent = (e: React.MouseEvent): void => {
    e.stopPropagation()
    toggleIsOpen()
  }

  return (
    <StyledItem
      draggable={true}
      ref={itemRef}
      {...{ isActive, isHovering }}
      onClick={onSelectCurrentPage}
    >
      <ToggleIconBlock isChild={false} onClick={onTogglePageContent}>
        <TriangleSVG isOpen={isOpen} />
      </ToggleIconBlock>
      <Information>
        <PagesListItemIcon {...{ icon, isHasIcon }} />
        <Title isActive={isActive}>{title}</Title>
      </Information>
      {isHovering && (
        <Fragment>
          <PagesListItemOptionsButton id={id} title={listItemOptionsTitle} />
          <AddNewPageButton
            coords={{ top: '4px', right: '8px' }}
            tooltipTitle='Quickly add a page inside'
            onClickAction={onAddNewPageInside}
          />
        </Fragment>
      )}
    </StyledItem>
  )
}

export default PagesListItem
