import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export const ListsWrapper = styled.div<{ purpose: 'Covers' | 'Emojis' }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 0;
  height: ${props => (props.purpose === 'Covers' ? '300px' : '250px')};
  padding: 5px 10px;
  overflow: hidden auto;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`
