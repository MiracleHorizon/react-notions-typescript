import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Props from './OpenCommentOptionsButton.types'
import { OptionsDotsSvg } from 'components/ui/SVG'
import {
  openCommentOptionsPopup,
  setCommentOptionsPopupCoords,
  setCommentOptionsPopupId,
} from 'redux/actions'
import { commentOptionsPopupCoordsHandler } from 'utils/coordsHandlers'
import StyledButton from './OpenCommentOptionsButton.styles'

const OpenCommentOptionsButton: FC<Props> = memo(props => {
  const { commentId, floating, index } = props
  const buttonRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenCommentOptionsPopup = useCallback(
    (e: React.MouseEvent): void => {
      e.stopPropagation()

      const popupCoords = commentOptionsPopupCoordsHandler.setCoordsByButton(
        buttonRef.current?.getBoundingClientRect(),
        index
      )

      dispatch(openCommentOptionsPopup())
      dispatch(setCommentOptionsPopupId(commentId))
      dispatch(setCommentOptionsPopupCoords(popupCoords))
    },
    [dispatch, commentId, index]
  )

  return (
    <StyledButton
      role='button'
      ref={buttonRef}
      floating={floating}
      onClick={onOpenCommentOptionsPopup}
    >
      <OptionsDotsSvg width={14} height={14} />
    </StyledButton>
  )
})

export default OpenCommentOptionsButton
