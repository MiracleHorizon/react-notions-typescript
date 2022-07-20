import styled from 'styled-components'
import { ElementCoords } from 'types'

const Wrapper = styled.div<{ coords: ElementCoords }>`
  position: absolute;
  top: ${props => props.coords.top};
  bottom: ${props => props.coords.bottom};
  left: ${props => props.coords.left};
  right: ${props => props.coords.right};
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  width: 380px;
  min-height: 38px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
`

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid #dfdedd;
  border-radius: 4px;
  background: white;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  pointer-events: none;
`

const StyledForm = styled.form`
  flex: 1;
  margin-left: 5px;
`

export { Wrapper, IconContainer, Icon, StyledForm }
