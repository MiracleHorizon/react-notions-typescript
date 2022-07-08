import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ListsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 0;
  height: 250px;
  padding: 5px 10px;
  overflow: hidden auto;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export { Wrapper, ListsWrapper, ListContainer }
