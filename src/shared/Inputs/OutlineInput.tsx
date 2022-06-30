import React, { ChangeEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ClearInputButton from '../Buttons/ClearInputButton'

interface OutlineInputProps {
  placeholder: string
  inputValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

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

  :focus {
    outline: 2px solid rgb(105, 192, 227, 0.8);
  }
`
const OutlineInput: React.FC<OutlineInputProps> = props => {
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
      {inputValue !== '' && (
        <ClearInputButton
          action={onClear}
          coords={{ top: '7px', right: '10px' }}
        />
      )}
    </InputWrapper>
  )
}

export default OutlineInput
