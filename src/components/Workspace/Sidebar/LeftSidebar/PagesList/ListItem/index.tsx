import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import PagesListItemIcon from './ItemIcon'
import PagesListItemOptionsButton from 'shared/Buttons/PagesListItemOptions'
import AddNewPageButton from 'shared/Buttons/AddNewPage'
import TriangleSVG from 'shared/SVG/Triangle'
import { activePageSelector } from 'redux/sidebarsSlice/selectors'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeRightSidebar, setActivePage } from 'redux/sidebarsSlice/slice'
import { addRecentPage } from 'redux/quickSearchSlice/slice'
import Props from './ListItem.types'
import titleHandler from 'helpers/listItemOptionsTitleHandler'
import selectedItemHandler from 'helpers/selectedItemHandler'
import {
  Information,
  StyledItem,
  Title,
  ToggleIconContainer,
} from './ListItem.styles'
import {
  openPageOptionsPopup,
  setPageOptionsPopupCoords,
} from '../../../../../../redux/popupsSlice/slice'
import { pageOptionsPopupCoordsHandler } from '../../../../../../utils/coordsHandlers'
import { ElementCoords } from '../../../../../../types'

const PagesListItem: React.FC<Props> = ({ page }) => {
  const { id, title, isFavorite, iconInfo } = page //* isChild.
  const { isOpen, toggleIsOpen } = useToggle(false)
  const listItemOptionsTitle = titleHandler(isFavorite)
  const dispatch = useDispatch()

  const activeItem = useSelector(activePageSelector)
  const isActive = selectedItemHandler({ activeItem, item: { id, title } })
  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering: boolean = useHover(itemRef)

  const onSelectCurrentPage = (): void => {
    dispatch(setActivePage({ title, id }))
    dispatch(setCurrentPage(id))
    dispatch(closeRightSidebar())
    // Тут будет пост запрос.
  }

  const onAddNewPageInside = (e: React.MouseEvent): void => {
    e.stopPropagation()
    //...
  }

  const onTogglePageContent = (e: React.MouseEvent): void => {
    e.stopPropagation()
    toggleIsOpen()
  }

  const onOpenPageOptionsPopup = (e: React.MouseEvent): void => {
    e.preventDefault()

    const pageOptionsPopupCoords: ElementCoords = {
      top: e.clientY - 2 + 'px',
      left: e.clientX - 2 + 'px',
    }

    dispatch(openPageOptionsPopup())
    dispatch(setPageOptionsPopupCoords(pageOptionsPopupCoords))
  }

  return (
    <StyledItem
      draggable
      ref={itemRef}
      {...{ isActive, isHovering }}
      onClick={onSelectCurrentPage}
      onContextMenu={onOpenPageOptionsPopup}
    >
      <ToggleIconContainer isChild={false} onClick={onTogglePageContent}>
        <TriangleSVG isOpen={isOpen} />
      </ToggleIconContainer>
      <Information>
        <PagesListItemIcon {...iconInfo} />
        <Title isActive={isActive}>{title}</Title>
      </Information>
      {isHovering && (
        <>
          <PagesListItemOptionsButton
            optionsTitle={listItemOptionsTitle}
            {...{ id, title, iconInfo }}
          />
          <AddNewPageButton
            coords={{ top: '4px', right: '8px' }}
            tooltipTitle='Quickly add a page inside'
            onClickAction={onAddNewPageInside}
          />
        </>
      )}
    </StyledItem>
  )
}

export default PagesListItem
