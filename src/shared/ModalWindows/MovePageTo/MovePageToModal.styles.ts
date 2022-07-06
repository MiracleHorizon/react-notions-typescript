import styled from 'styled-components'
import { ElementCoords } from '../../../@types/generalTypes'

const StyledModal = styled.div<{ coords: ElementCoords }>`
  position: absolute;
  top: ${props => props.coords?.top};
  bottom: ${props => props.coords?.bottom};
  left: ${props => props.coords?.left};
  right: ${props => props.coords?.right};
  min-width: 180px;
  max-width: calc(100vw - 24px);
  max-height: 70vh;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
  user-select: none;
`

const Container = styled.div`
  width: 220px;
  overflow: hidden auto;
`

const InputContainer = styled.div`
  margin: 10px 6px 0 6px;
  padding: 5px;
`

const Content = styled.div`
  margin-bottom: 1px;
  padding: 5px;
`

export { StyledModal, Container, InputContainer, Content }
