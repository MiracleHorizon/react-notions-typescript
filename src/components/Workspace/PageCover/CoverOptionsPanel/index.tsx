import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './CoverOptionsPanel.types'
import {
  openChangeCoverPopup,
  setChangeCoverPopupCoords,
} from 'redux/popupsSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  PanelWrapper,
  CoverOptions,
  StyledOption,
  OptionTitle,
} from './CoverOptionsPanel.styles'
import { changeCoverPopupCoordsHandler } from 'utils/coordsHandlers'

const CoverOptionsPanel: React.FC<Props> = props => {
  const { isHovering, isRepositionEnabled, setRepositionEnabled } = props
  const {
    pageSettings: { isFullWidth },
  } = useSelector(currentPageSelector)
  const changeCoverButtonRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenChangeCoverPopup = (): void => {
    const popupCoords = changeCoverPopupCoordsHandler.setCoordsByCoverButton(
      changeCoverButtonRef.current?.getBoundingClientRect()
    )

    dispatch(openChangeCoverPopup())
    dispatch(setChangeCoverPopupCoords(popupCoords))
  }

  const onStartCoverRepositioning = (): void => setRepositionEnabled(true)
  const onSaveCoverPosition = (): void => setRepositionEnabled(false)
  const onCancelCoverRepositioning = (): void => setRepositionEnabled(false)

  return (
    <PanelWrapper isFullWidth={isFullWidth}>
      <CoverOptions isHovering={isHovering}>
        <StyledOption
          borderRight
          role='button'
          onClick={
            isRepositionEnabled ? onSaveCoverPosition : onOpenChangeCoverPopup
          }
          position='left'
        >
          <OptionTitle ref={!isRepositionEnabled ? changeCoverButtonRef : null}>
            {isRepositionEnabled ? 'Save position' : 'Change cover'}
          </OptionTitle>
        </StyledOption>
        <StyledOption
          role='button'
          onClick={
            isRepositionEnabled
              ? onCancelCoverRepositioning
              : onStartCoverRepositioning
          }
          position='right'
        >
          <OptionTitle>
            {isRepositionEnabled ? 'Cancel' : 'Reposition'}
          </OptionTitle>
        </StyledOption>
      </CoverOptions>
    </PanelWrapper>
  )
}

export default CoverOptionsPanel
