import styled from 'styled-components'

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

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export { CommonPagesItem, MoveToTitle, Title, AvatarContainer, Avatar }
