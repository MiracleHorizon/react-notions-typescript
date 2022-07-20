import styled from 'styled-components'
import { ItemStyles } from '../../Text/TextItem.types'

export const Wrapper = styled.div`
  align-self: flex-end;
  width: 100%;
  height: auto;
`

export const Container = styled.div<ItemStyles>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 3px 2px 3px 0;
  background: ${props => props.background};

  div[contenteditable][data-content='toggle-list-title'] {
    align-self: flex-start;
    width: 100%;
    height: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    caret-color: rgb(55, 53, 47);
    color: ${props =>
      props.textColor === 'Default' ? 'rgb(55, 53, 47)' : props.textColor};

    :empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
    }
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding-top: 2px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-right: 8px;
`

export const Content = styled.div<{ background: string }>`
  align-self: flex-end;
  width: 100%;
  height: auto;
  min-height: 40px;
  padding-left: 50px;
  margin-top: -4px;
  background: ${props => props.background};
  background-clip: content-box;

  div[data-content='content-list'] {
    margin-left: -23px;
  }
`
