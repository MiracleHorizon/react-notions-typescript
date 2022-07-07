import styled from 'styled-components'

const StyledItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 28px;
  max-height: 45px;
  margin: 1px 0;
  padding: 5px 5px 5px 10px;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};
  transition: background 50ms ease-in-out;

  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 50ms ease-in-out;
  }
`

const Icon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: cover;
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Subtitle = styled.span``

export { StyledItem, Icon, Title, Subtitle }
