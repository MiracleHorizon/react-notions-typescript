import styled from 'styled-components'

export const StyledItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 8px);
  height: 27px;
  margin: 0 4px;
  padding: 0 10px;
  border-radius: 3px;
  background: ${props => props.isSelected && '#efefee'};
  transition: background 0.1s ease-in-out;

  :hover {
    background: #efefee;
  }
  :active {
    background: #e8e7e3;
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: #37352f;
`
