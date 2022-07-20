import styled from 'styled-components'

export const ListCreateDateInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.65);
`

export const ListContainer = styled.div<{ isActive: boolean }>`
  cursor: text;
  padding-top: 10px;
  padding-left: 15px;
  background: ${props => props.isActive && 'rgba(255, 212, 0, 0.067)'};
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  transition: background 0.3s ease-in-out;

  :hover {
    background: ${props => !props.isActive && 'rgba(55, 53, 47, 0.03)'};
  }
`
