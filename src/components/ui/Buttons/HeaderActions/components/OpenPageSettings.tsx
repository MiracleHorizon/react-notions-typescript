import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { OptionsDotsSvg } from 'components/ui/SVG'
import ToggleFavoriteTooltip from 'components/ui/Tooltips/BlackFilledTooltip/components/ToggleFavorite'
import { openPageSettingsPopup } from 'redux/actions'
import { NodeRect } from 'utils/coordsHandlers'
import ButtonContainer from '../HeaderActionsButtons.styles'

const OpenPageSettingsButton: FC = () => {
  const [buttonRect, setButtonRect] = useState<NodeRect>(undefined)
  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)
  const dispatch = useDispatch()

  const onOpenPageSettingsPopup = useCallback((): void => {
    dispatch(openPageSettingsPopup())
  }, [dispatch])

  useEffect(() => {
    setButtonRect(buttonRef.current?.getBoundingClientRect())
  }, [])

  return (
    <>
      <ButtonContainer
        role='button'
        ref={buttonRef}
        onClick={onOpenPageSettingsPopup}
      >
        <OptionsDotsSvg width={18} height={18} />
      </ButtonContainer>
    </>
  )
}

export default OpenPageSettingsButton
