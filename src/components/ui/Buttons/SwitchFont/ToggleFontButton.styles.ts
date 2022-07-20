import styled from 'styled-components'
import fontFamilyHandler from '../../../../helpers/decor/fontFamilyHandler'
import { TPageFont } from '../../../../redux/reducers/notionsSlice/types'

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

  :focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }
  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
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

const Abbreviation = styled.span<{
  isActive: boolean
  fontFamily: TPageFont | string
}>`
  font-family: ${props => fontFamilyHandler(props.fontFamily)} !important;
  margin-bottom: 5px;
  font-size: 26px;
  color: ${props => props.isActive && 'rgb(46, 170, 220)'};
`

export { ButtonContainer, FontButton, Title, Abbreviation }
