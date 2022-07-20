import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 5px;
  max-width: 300px;
  max-height: 750px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  overflow: hidden auto;
  background: white;
`

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 4px;
`
