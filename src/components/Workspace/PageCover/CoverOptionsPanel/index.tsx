import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './CoverOptionsPanel.types'
import {
  openChangeCoverPopup,
  setChangeCoverPopupCoords,
  setChangeCoverPopupPage,
} from 'redux/actions'
import { currentPageSelector } from 'redux/selectors'
import { changeCoverPopupCoordsHandler } from 'utils/coordsHandlers'
import {
  PanelWrapper,
  CoverOptions,
  StyledOption,
  OptionTitle,
} from './CoverOptionsPanel.styles'

const CoverOptionsPanel: FC<Props> = memo(
  ({ isHovering, isRepositionEnabled, setRepositionEnabled }) => {
    const currentPage = useSelector(currentPageSelector)
    const changeCoverButtonRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const onOpenChangeCoverPopup = useCallback((): void => {
      const popupCoords = changeCoverPopupCoordsHandler.coverButton(
        changeCoverButtonRef.current?.getBoundingClientRect()
      )

      dispatch(openChangeCoverPopup())
      dispatch(setChangeCoverPopupPage(currentPage))
      dispatch(setChangeCoverPopupCoords(popupCoords))
    }, [dispatch, currentPage])

    const onStartCoverRepositioning = useCallback((): void => {
      setRepositionEnabled(true)
    }, [setRepositionEnabled])

    const onSaveCoverPosition = useCallback((): void => {
      setRepositionEnabled(false)
    }, [setRepositionEnabled])

    const onCancelCoverRepositioning = useCallback((): void => {
      setRepositionEnabled(false)
    }, [setRepositionEnabled])

    return (
      <PanelWrapper isFullWidth={currentPage.pageSettings.isFullWidth}>
        <CoverOptions isHovering={isHovering}>
          <StyledOption
            borderRight
            role='button'
            position='Left'
            onClick={
              isRepositionEnabled ? onSaveCoverPosition : onOpenChangeCoverPopup
            }
          >
            <OptionTitle
              ref={!isRepositionEnabled ? changeCoverButtonRef : null}
            >
              {isRepositionEnabled ? 'Save position' : 'Change cover'}
            </OptionTitle>
          </StyledOption>
          <StyledOption
            role='button'
            position='Right'
            onClick={
              isRepositionEnabled
                ? onCancelCoverRepositioning
                : onStartCoverRepositioning
            }
          >
            <OptionTitle>
              {isRepositionEnabled ? 'Cancel' : 'Reposition'}
            </OptionTitle>
          </StyledOption>
        </CoverOptions>
      </PanelWrapper>
    )
  }
)

export default CoverOptionsPanel
