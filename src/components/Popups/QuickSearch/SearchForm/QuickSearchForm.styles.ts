import styled from 'styled-components'

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 52px;
  padding: 0 15px;
  box-shadow: rgb(55 53 47 / 9%) 0 1px 0;
  background: transparent;

  svg {
    pointer-events: none;
  }

  ::placeholder {
    font-weight: 300;
    color: rgb(193, 192, 190);
  }
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  min-width: 0;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  text-overflow: ellipsis;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  resize: none;
  border: none;
`

const SearchIconBlock = styled.div`
  position: absolute;
  top: 16px;
  left: 15px;
`

const SearchIcon = styled.img`
  width: 22px;
  height: 22px;
  opacity: 0.6;
  pointer-events: none;
`

export { StyledForm, StyledInput, SearchIconBlock, SearchIcon }
