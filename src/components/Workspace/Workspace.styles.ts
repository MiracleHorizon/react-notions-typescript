import styled from 'styled-components'

// const Wrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: row;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0;
//   width: 100vw;
//   height: 100%;
// `
//
// const Content = styled.div`
//   min-height: 100vh;
//   //min-width: 100%;
// `

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`

const Content = styled.div`
  min-height: 100vh;
  min-width: 100%;
  overflow: auto;
`

export { Wrapper, Content }
