import styled from 'styled-components'

const StyledItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-height: 28px;
  margin: 1px 0;
  padding: 0 5px;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 50ms ease-in-out;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
  }
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { StyledItem, Title }
