import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 45vw;
  max-width: calc(100vw - 24px);
  height: 55vh;
  max-height: calc(100vh - 24px);
  border-radius: 5px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px,
    rgb(15 15 15 / 20%) 0 15px 40px;
  background: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export { Wrapper, Container }
