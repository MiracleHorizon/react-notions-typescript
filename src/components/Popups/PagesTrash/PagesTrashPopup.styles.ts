import styled from 'styled-components'

const StyledPopup = styled.div<{ sidebarWidth: number }>`
  position: absolute;
  left: ${props => props.sidebarWidth + 5}px;
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

const FilterInputContainer = styled.div`
  padding: 10px 12px;
`

export { StyledPopup, FilterInputContainer }
