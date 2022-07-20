import styled from 'styled-components'

export const Title = styled.h1`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-bottom: 10px;
  padding: 0 50px;
  font-size: 40px;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
  color: rgb(55, 53, 47);

  div[contenteditable]:empty:after {
    content: attr(placeholder);
    -webkit-text-fill-color: rgba(55, 53, 47, 0.15);
  }
`

export default Title
