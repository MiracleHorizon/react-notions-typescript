import styled from 'styled-components'

const StyledContainer = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  margin: 1px 0;
  padding: 1px 0 1px 8px;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Title = styled.span`
  margin-left: 8px;
  font-size: 14px;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { StyledContainer, Title }
