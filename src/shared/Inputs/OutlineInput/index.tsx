import React, { useEffect, useRef } from 'react'
import ClearInputButton from 'shared/Buttons/ClearInput/ClearInputButton'
import Props from '../types'
import { InputContainer, StyledInput } from './OutlineInput.styles'

const OutlineInput: React.FC<Props> = props => {
  const { placeholder, inputValue, onChange, onClear } = props
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => inputRef.current?.focus(), [])

  return (
    <InputContainer>
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
          coords={{ top: '8px', right: '5px' }}
        />
      )}
    </InputContainer>
  )
}

export default OutlineInput
