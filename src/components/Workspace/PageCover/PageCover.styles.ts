import styled from 'styled-components'
import { CoverWrapperProps, StyledCoverProps } from './PageCover.types'

const CoverWrapper = styled.div<CoverWrapperProps>`
  cursor: ${props => (props.isRepositioning ? 'all-scroll' : 'default')};
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  height: 30vh;
  min-height: ${props => (props.isHasCover ? '270px' : '0')};
  max-height: 40vh;
  user-select: none;
`

const StyledCover = styled.img<StyledCoverProps>`
  width: 100%;
  height: 30vh;
  display: block;
  object-fit: cover;
  object-position: center ${props => props.coverPosition}%;
  background: ${props => props.coverType === 'CoverColors' && props.cover};
  //transition: object-position 0.3s ease-in-out;
`

export { CoverWrapper, StyledCover }
