import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { PageOptionsTooltip } from 'components/ui/index'
import { OptionsDotsSvg } from 'components/ui/SVG'

import Props from './PagesListItemOptionsButton.types'
import {
  openPageOptionsPopup,
  setPageOptions,
  setPageOptionsPage,
  setPageOptionsPopupCoords,
  setRenamePopupCoords,
  setRenamePopupEntity,
} from 'redux/actions'
import pageOptionsHandler from 'helpers/pages/pageOptionsHandler'
import setCoordsByPointer from 'helpers/coords/setCoordsByPointer'
import { renamePopupCoordsHandler } from 'utils/coordsHandlers'
import StyledButton from './PagesListItemOptionsButton.styles'

const PagesListItemOptionsButton: FC<Props> = memo(({ title, page }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const dispatch = useDispatch()

  const options = useMemo(() => pageOptionsHandler(title), [title])

  const onOpenPageOptionsPopup = useCallback(
    (e: React.MouseEvent): void => {
      e.stopPropagation()

      const popupCoords = renamePopupCoordsHandler.sidebar(
        optionsButtonRef.current?.getBoundingClientRect()
      )

      dispatch(openPageOptionsPopup())
      dispatch(setPageOptions(options))
      dispatch(setPageOptionsPage(page))
      dispatch(setPageOptionsPopupCoords(setCoordsByPointer(e)))

      dispatch(setRenamePopupEntity(page))
      dispatch(setRenamePopupCoords(popupCoords))
    },
    [dispatch, options, page]
  )

  return (
    <StyledButton ref={optionsButtonRef} onClick={onOpenPageOptionsPopup}>
      <OptionsDotsSvg width={14} height={14} />
      {isHovering && <PageOptionsTooltip title={`${title}, and more...`} />}
    </StyledButton>
  )
})

export default PagesListItemOptionsButton
