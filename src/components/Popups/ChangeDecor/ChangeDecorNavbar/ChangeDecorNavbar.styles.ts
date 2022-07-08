import styled from 'styled-components'

const NavbarWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgb(55 53 47 / 9%) 0px -1px 0px inset;
  background: white;
  user-select: none;
`

const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export { NavbarWrapper, ActionsContainer }
