import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Props from './PagesListItemOptionsButton.types'
import Tooltip from 'shared/Tooltips/Tooltip'
import OptionsDotsSVG from 'shared/SVG/OptionsDots'
import {
  openPageOptionsPopup,
  setPageOptions,
  setPageOptionsId,
  setPageOptionsPopupCoords,
  setRenamePopupCoords,
  setRenamePopupEssence,
} from 'redux/popupsSlice/slice'
import { setCoordsByPointer } from 'helpers/setCoordsByPointer'
import pageOptionsHandler from 'helpers/pageOptionsHandler'
import { renamePopupCoordsHandler } from 'utils/coordsHandlers'
import StyledButton from './PagesListItemOptionsButton.styles'

const PagesListItemOptionsButton: React.FC<Props> = props => {
  const { optionsTitle, ...page } = props
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const options = pageOptionsHandler(optionsTitle)

  const optionsButtonRect = optionsButtonRef.current?.getBoundingClientRect()
  const renamePagePopupCoords =
    renamePopupCoordsHandler.setCoordsBySidebar(optionsButtonRect)

  const dispatch = useDispatch()
  const onOpenPageOptionsModal = (e: React.MouseEvent): void => {
    e.stopPropagation()

    const popupCoords = setCoordsByPointer(e)

    dispatch(openPageOptionsPopup())
    dispatch(setPageOptions(options))
    dispatch(setPageOptionsId(page.id))
    dispatch(setPageOptionsPopupCoords(popupCoords))

    dispatch(setRenamePopupEssence(page))
    dispatch(setRenamePopupCoords(renamePagePopupCoords))
  }

  return (
    <StyledButton ref={optionsButtonRef} onClick={onOpenPageOptionsModal}>
      <OptionsDotsSVG sizes={{ width: 14, height: 14 }} />
      {isHovering && (
        <Tooltip
          title={`${optionsTitle}, and more...`}
          coords={{ left: '-70px', bottom: '-32px' }}
        />
      )}
    </StyledButton>
  )
}

export default PagesListItemOptionsButton
