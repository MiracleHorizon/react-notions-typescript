import styled from 'styled-components'

const themeColor = 'rgba(55, 53, 47)' //!

export const Container = styled.div<{ textColor: string; background: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  width: 100%;
  height: auto;
  min-height: 35px;
  padding: 1px 14px;
  border-left: 3px solid
    ${props => (props.textColor === 'Default' ? themeColor : props.textColor)};
  background: ${props => props.background};

  div[contenteditable]:empty:after {
    content: attr(placeholder);
    width: 100%;
    height: 100%;
    font-size: 19px;
    line-height: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    color: ${props => props.textColor};
    caret-color: rgb(55, 53, 47);
    -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
  }
`

export const Content = styled.span`
  width: 100%;
  line-height: 24px;
`
