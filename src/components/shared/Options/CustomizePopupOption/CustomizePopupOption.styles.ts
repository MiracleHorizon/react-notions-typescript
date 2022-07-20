import styled from 'styled-components'

export const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 27px;
  margin: 1px 0;

  svg {
    position: absolute;
    width: 18px !important;
    height: 18px !important;
    margin-right: 8px;
    fill: #2f2f2f !important;
  }
`

export const Title = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 25px;
`
