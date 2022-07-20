import styled from 'styled-components'

export const PanelWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 45px;
  margin-top: auto;
  padding: 5px 10px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
  background: transparent;
  user-select: none;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const StyledPlusButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(55, 53, 47, 0.65);
`
