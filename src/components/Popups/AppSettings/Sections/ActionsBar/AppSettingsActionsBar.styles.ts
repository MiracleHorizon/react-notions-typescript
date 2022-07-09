import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 13px 40px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
  background: transparent;
`

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 100%;

  div {
    margin: 0 5px;
    height: 34px;
  }
`

export { Wrapper, ActionsContainer }
