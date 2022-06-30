import styled from 'styled-components'

const StyledItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 8px);
  margin: 0 4px;
  padding: 0 10px;
  border-radius: 3px;
  background: ${props => props.isSelected && '#efefee'};

  :hover {
    background: #efefee;
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: #e8e7e3;
    transition: background 0.1s ease-in-out;
  }
`

const Title = styled.span`
  font-size: 14px;
  color: #37352f;
`

export { StyledItem, Title }
