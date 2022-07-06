import styled from 'styled-components'

const CoverWrapper = styled.div<{ isHasCover: boolean }>`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: ${props => (props.isHasCover ? '270px' : '0')};
  max-height: 300px;
  height: 100%;
`

const StyledCover = styled.div<{ cover: string; coverType: string }>`
  width: 100%;
  height: 40vh;
  display: block;
  object-fit: cover;
  background: ${props =>
    props.coverType === 'CoverColors' ? props.cover : `url(${props.cover})`};
  object-position: center 0;
  background-size: cover;
`

const CoverOptionsPanel = styled.div``

const CoverOptions = styled.div``

const StyledOption = styled.div``

const OptionTitle = styled.span``

export {
  CoverWrapper,
  StyledCover,
  CoverOptionsPanel,
  CoverOptions,
  StyledOption,
  OptionTitle,
}
