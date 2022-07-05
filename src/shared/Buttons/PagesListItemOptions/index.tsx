import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Tooltip from 'shared/Tooltip'
import OptionsDotsSVG from 'shared/SVG/OptionsDots'
import {
  openPageOptionsModal,
  setPageOptions,
  setPageOptionsId,
  setPageOptionsModalCoords,
} from 'redux/modalsSlice/slice'
import { PagesListItemOptionsButtonProps as Props } from './PagesListItemOptionsButton.types'
import pageOptionsHandler from 'utils/helpers/pageOptionsHandler'
import StyledButton from './PagesListItemOptionsButton.styles'

const PagesListItemOptionsButton: React.FC<Props> = ({ id, title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const options = pageOptionsHandler(title)

  const dispatch = useDispatch()
  const onOpenPageOptionsModal = (e: React.MouseEvent): void => {
    e.stopPropagation()

    const pointerCoords = {
      top: e.clientY - 2 + 'px',
      left: e.clientX - 2 + 'px',
    }

    dispatch(openPageOptionsModal())
    dispatch(setPageOptionsModalCoords(pointerCoords))
    dispatch(setPageOptions(options))
    dispatch(setPageOptionsId(id))
  }

  return (
    <StyledButton ref={optionsButtonRef} onClick={onOpenPageOptionsModal}>
      <OptionsDotsSVG sizes={{ width: 14, height: 14 }} />
      {isHovering && (
        <Tooltip
          title={`${title}, and more...`}
          coords={{ left: '-70px', bottom: '-32px' }}
        />
      )}
    </StyledButton>
  )
}

export default PagesListItemOptionsButton
