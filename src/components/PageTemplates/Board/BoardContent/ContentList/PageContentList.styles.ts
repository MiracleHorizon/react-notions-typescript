import styled from 'styled-components'

const ContentList = styled.div<{ pRight?: string }>`
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0 ${props => (props.pRight ? props.pRight : '50')}px 0 0;
  overflow: hidden;
`

export default ContentList
