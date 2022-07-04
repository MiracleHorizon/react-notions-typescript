import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import Tooltip from 'shared/Tooltip'
import ListItemOptionsButton from 'shared/Buttons/ListItemOptions'
import AddNewPageButton from 'shared/Buttons/AddNewPage'
import EmptyPageIconSVG from 'shared/SVG/EmptyPage'
import TriangleSVG from 'shared/SVG/Triangle'
import { activePageSelector } from 'redux/sidebarsSlice/selectors'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeRightSidebar, setActivePage } from 'redux/sidebarsSlice/slice'
import { ListItemOptions, SidebarListItemProps } from './ListItem.types'
import {
  IconBlock,
  Information,
  PageIcon,
  StyledItem,
  Title,
  ToggleIconBlock,
} from './ListItem.styles'

const SidebarListItem: React.FC<SidebarListItemProps> = ({ page }) => {
  const { id, title, icon, isHasIcon, isFavorite } = page // isChild.
  const { isOpen, toggleIsOpen } = useToggle(false)
  const listItemOptionsTitle = isFavorite
    ? ListItemOptions.FAVORITE
    : ListItemOptions.COMMON
  const dispatch = useDispatch()

  const activePage = useSelector(activePageSelector)
  const isActive = activePage.title === title && activePage.id === id

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const iconRef = useRef<HTMLDivElement>(null)
  const isPageIconHovering = useHover(iconRef)

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
      isActive={isActive}
      onClick={onSelectCurrentPage}
    >
      <ToggleIconBlock isChild={false} onClick={onTogglePageContent}>
        <TriangleSVG isOpen={isOpen} />
      </ToggleIconBlock>
      <Information>
        <IconBlock ref={iconRef}>
          {isHasIcon ? (
            <PageIcon src={icon} alt='Page icon' />
          ) : (
            <EmptyPageIconSVG
              {...{ sizes: { width: 16, height: 16 }, transparency: 0.85 }}
            />
          )}
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
          <ListItemOptionsButton title={listItemOptionsTitle} />
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

export default SidebarListItem
