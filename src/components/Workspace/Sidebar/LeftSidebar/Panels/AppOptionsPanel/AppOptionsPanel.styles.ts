import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`

export const List = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 27px;
  border-radius: 3px;
  margin: 0 4px;
  padding-left: 15px;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const OptionTitle = styled.span`
  margin-left: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(55, 53, 47, 0.65);
`
