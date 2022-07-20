import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  top: 20%;
  flex: 1;
  max-width: 320px;
  user-select: none;
`

export const Form = styled.form`
  position: relative;
  margin-top: 10px;
  margin-bottom: 5px;

  input {
    height: 36px;
    margin-top: 7px;
    margin-bottom: 8px;
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const LabelTitle = styled.label`
  font-size: 12px;
  color: rgba(55, 53, 47, 0.65);
`
