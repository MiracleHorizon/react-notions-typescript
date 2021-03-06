import styled from 'styled-components'

export const Wrapper = styled.div<{ leftSidebarWidth: number }>`
  position: absolute;
  left: ${props => props.leftSidebarWidth + 5}px;
  bottom: 10px;
  width: 420px;
  min-width: 180px;
  max-width: calc(100vw - 24px);
  height: 50vh;
  max-height: 70vh;
  padding-bottom: 20px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
`

export const FilterInputContainer = styled.div`
  padding: 10px 12px;
`
