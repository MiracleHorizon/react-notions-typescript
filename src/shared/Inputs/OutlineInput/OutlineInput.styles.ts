import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 3px 6px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  line-height: 21px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  color: rgb(55, 53, 47);
  background: rgba(242, 241, 238, 0.6);
  user-select: none;

  :focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }

  ::placeholder {
    opacity: 0.6;
  }
`
