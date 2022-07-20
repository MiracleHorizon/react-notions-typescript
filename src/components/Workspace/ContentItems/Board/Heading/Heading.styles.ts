import styled from 'styled-components'
import { HeadingContainerProps } from './Heading.types'

const HeadingContainer = styled.div<HeadingContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: ${props => props.params.parentHeight};
  margin-bottom: ${props => props.params.marginTop};
  padding: 3px 2px;
  background: ${props => props.background};

  div[contenteditable] {
    width: 100%;
    min-height: ${props => props.params.height};
    font-size: ${props => props.params.fontSize};
    font-weight: 600;
    white-space: pre-wrap;
    word-break: break-word;
    overflow: hidden;
    color: ${props =>
      props.textColor === 'Default' ? 'rgb(55, 53, 47)' : props.textColor};
  }

  div[contenteditable]:empty:after {
    content: attr(placeholder);
    -webkit-text-fill-color: rgba(55, 53, 47, 0.2);
  }
`

export default HeadingContainer
