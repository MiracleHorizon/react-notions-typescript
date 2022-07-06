import React from 'react'
import { useSelector } from 'react-redux'

import Props from './PageCover.types'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  CoverWrapper,
  StyledCover,
  CoverOptionsPanel,
  CoverOptions,
  StyledOption,
  OptionTitle,
} from './PageCover.styles'

const PageCover: React.FC<Props> = () => {
  const {
    coverInfo: { isHasCover, cover, coverType },
  } = useSelector(currentPageSelector)

  return (
    <CoverWrapper isHasCover={isHasCover}>
      <StyledCover {...{ cover, coverType }} />
      {!isHasCover && (
        <CoverOptionsPanel>
          <CoverOptions>
            <StyledOption>
              <OptionTitle>Change cover</OptionTitle>
            </StyledOption>
            <StyledOption>
              <OptionTitle>Reposition</OptionTitle>
            </StyledOption>
          </CoverOptions>
        </CoverOptionsPanel>
      )}
    </CoverWrapper>
  )
}

export default PageCover
