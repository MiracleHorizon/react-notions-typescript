import React, { FC, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { DragContentItemTooltip } from 'components/ui/index'
import { DragContentItemSvg } from 'components/ui/SVG'

import {
  openContentOptionsPopup,
  setContentOptionsPopupCoords,
  setContentOptionsPopupItem,
  setContentStylesPopupItem,
} from 'redux/actions'
import { StyledButton } from './DragContentItemButton.styles'

const DragContentItemButton: FC<{ itemIndex: number }> = ({ itemIndex }) => {
  const dispatch = useDispatch()

  // console.log(itemIndex)

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onOpenContentOptionsPopup = useCallback(
    (e: React.MouseEvent): void => {
      e.preventDefault()

      // dispatch(setContentOptionsPopupCoords(itemIndex))
      dispatch(setContentOptionsPopupItem(itemIndex))
      dispatch(setContentStylesPopupItem(itemIndex))
      dispatch(openContentOptionsPopup())
    },
    [dispatch, itemIndex]
  )

  return (
    <StyledButton
      ref={buttonRef}
      role='button'
      onClick={onOpenContentOptionsPopup}
    >
      <DragContentItemSvg />
      {/*{isHovering && <DragContentItemTooltip />}*/}
    </StyledButton>
  )
}

export default DragContentItemButton
