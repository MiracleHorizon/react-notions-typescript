import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './CoverOptionsPanel.types'
import { openChangeCoverPopup } from 'redux/popupsSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  PanelWrapper,
  CoverOptions,
  StyledOption,
  OptionTitle,
} from './CoverOptionsPanel.styles'

const CoverOptionsPanel: React.FC<Props> = props => {
  const { isHovering, isRepositioning, setIsRepositioning } = props
  const {
    pageSettings: { isFullWidth },
  } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  const onOpenChangeCoverPopup = (): void => {
    dispatch(openChangeCoverPopup())
  }

  const onStartCoverRepositioning = (): void => setIsRepositioning(true)
  const onSaveCoverPosition = (): void => setIsRepositioning(false)
  const onCancelCoverRepositioning = (): void => setIsRepositioning(false)

  return (
    <PanelWrapper isFullWidth={isFullWidth}>
      <CoverOptions isHovering={isHovering}>
        <StyledOption
          borderRight
          role='button'
          onClick={
            isRepositioning ? onSaveCoverPosition : onOpenChangeCoverPopup
          }
          position='left'
        >
          <OptionTitle>
            {isRepositioning ? 'Save position' : 'Change cover'}
          </OptionTitle>
        </StyledOption>
        <StyledOption
          role='button'
          onClick={
            isRepositioning
              ? onCancelCoverRepositioning
              : onStartCoverRepositioning
          }
          position='right'
        >
          <OptionTitle>{isRepositioning ? 'Cancel' : 'Reposition'}</OptionTitle>
        </StyledOption>
      </CoverOptions>
    </PanelWrapper>
  )
}

export default CoverOptionsPanel
