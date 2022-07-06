import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import ClearInputButton from 'shared/Buttons/ClearInputButton'
import InputProps from '../types'

const InputWrapper = styled.div`
  position: relative;
`

const StyledInput = styled.input`
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

const OutlineInput: React.FC<InputProps> = props => {
  const { placeholder, inputValue, onChange, onClear } = props
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => inputRef.current?.focus(), [])

  return (
    <InputWrapper>
      <StyledInput
        type='text'
        placeholder={placeholder}
        value={inputValue}
        ref={inputRef}
        onChange={onChange}
      />
      {inputValue !== '' && onClear && (
        <ClearInputButton
          action={onClear}
          coords={{ top: '7px', right: '10px' }}
        />
      )}
    </InputWrapper>
  )
}

export default OutlineInput
