import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 5px;

  p {
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: normal;
    user-select: none;
    color: rgba(55, 53, 47, 0.65);
  }
`

export const StyledForm = styled.form`
  flex: 1;
  padding: 5px;

  input {
    margin-bottom: 5px;
  }
`
