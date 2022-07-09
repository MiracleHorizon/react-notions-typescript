import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import EmptyPageIconSVG from 'shared/SVG/EmptyPageIcon'
import Tooltip from 'shared/Tooltips/Tooltip'
import Props from './ItemIcon.types'
import {
  openChangeIconPopup,
  setChangeIconPopupCoords,
} from 'redux/popupsSlice/slice'
import { IconBlock, PageIcon } from './ItemIcon.styles'
import { tooltipsCoords } from 'shared/Tooltips/Tooltip/coords'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'

const PagesListItemIcon: React.FC<Props> = ({ icon, isHasIcon }) => {
  const tooltipCoords = tooltipsCoords['pages-list-item-change-icon-btn']
  const emptyPageIconParams = {
    sizes: { width: 16, height: 16 },
    transparency: 0.85,
  } // * Переработать.
  const dispatch = useDispatch()

  const iconRef = useRef<HTMLDivElement>(null)
  const isHovering: boolean = useHover(iconRef)

  const iconRect = iconRef.current?.getBoundingClientRect()
  const changeIconPopupCoords =
    changeIconPopupCoordsHandler.setCoordsBySidebar(iconRect)

  const onOpenChangeIconPopup = (e: React.MouseEvent): void => {
    e.stopPropagation()

    dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
    dispatch(openChangeIconPopup())
  }

  return (
    <>
      <IconBlock ref={iconRef} onClick={onOpenChangeIconPopup}>
        {isHasIcon ? (
          <PageIcon src={icon} alt='Page icon' />
        ) : (
          <EmptyPageIconSVG {...emptyPageIconParams} />
        )}
      </IconBlock>
      {isHovering && <Tooltip title='Change icon' coords={tooltipCoords} />}
    </>
  )
}

export default PagesListItemIcon
