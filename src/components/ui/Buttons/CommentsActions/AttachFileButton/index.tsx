import React, { FC, memo, useMemo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Props from './AttachFileButton.types'
import { BlackFilledTooltip } from 'components/ui/index'
import { AttachFileSvg } from 'components/ui/SVG'
import { tooltipsCoordsList } from 'components/ui/Tooltips/BlackFilledTooltip/BlackFilledTooltip.coords'
import StyledButton from './AttachFileButton.styles'

const AttachFileButton: FC<Props> = memo(({ onClickAction }) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const tooltipCoords = useMemo(() => {
    return tooltipsCoordsList['workspace-comments-attach-file-btn']
  }, [])

  return (
    <StyledButton role='button' ref={buttonRef} onClick={onClickAction}>
      <AttachFileSvg />
      {isHovering && (
        <BlackFilledTooltip title='Attach file' coords={tooltipCoords} />
      )}
    </StyledButton>
  )
})

export default AttachFileButton
