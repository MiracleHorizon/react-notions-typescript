import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: 32px;
  font-size: 14px;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px 10px 5px 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden auto;

  ::placeholder {
    color: rgba(55, 53, 47, 0.5);
    user-select: none;
  }
`

// export const StyledInput = styled.div<{ isInputFocused: boolean }>`
//   cursor: ${props => !props.isInputFocused && 'pointer'};
//   width: 100%;
//   padding: 5px 10px 5px 6px;
//   border: none;
//   border-radius: 4px;
//   font-size: 14px;
//   white-space: pre-wrap;
//   word-break: break-word;
//   overflow: hidden auto;
//
//   :empty:before {
//     content: attr(placeholder);
//     color: #555;
//   }
//
//   ::placeholder {
//     color: rgba(55, 53, 47, 0.5);
//   }
//
//   :hover {
//     ${props => !props.isInputFocused && 'background: rgba(55, 53, 47, 0.06);}'}
//   }
// `

//   <StyledInput
// tabIndex={0}
// contentEditable
// placeholder='Add a comment...'
// ref={inputRef}
// isInputFocused={isInputFocused}
// onFocus={onFocusOnInput}
// />
