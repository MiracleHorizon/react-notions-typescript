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

const CommonPagesItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 1px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};
  transition: background 50ms ease-in-out;

  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 50ms ease-in-out;
  }
`

const AvatarContainer = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  margin-left: 3px;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const MoveToTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 2px;
`

const CommonPagesTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export {
  StyledModal,
  Container,
  InputContainer,
  Content,
  CommonPagesItem,
  AvatarContainer,
  Avatar,
  MoveToTitle,
  CommonPagesTitle,
}
