import styled from 'styled-components'

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 60px;
  margin: 0 1px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
  :focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }
`

const FontButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55px;
  height: 45px;
`

const Title = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(55, 53, 47, 0.65);
`

const Abbreviation = styled.span<{ isActive: boolean; fontFamily: string }>`
  font-family: ${props => props.fontFamily} !important;
  margin-bottom: 5px;
  font-size: 26px;
  color: ${props => props.isActive && 'rgb(46, 170, 220)'};
`

export { ButtonContainer, FontButton, Title, Abbreviation }
