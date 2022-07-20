import React, { FC, memo, useEffect, useMemo, useRef } from 'react'

import { ClearInputButton } from 'components/ui/index'

import Props from '../types'
import { InputContainer, StyledInput } from './OutlineInput.styles'

const OutlineInput: FC<Props> = memo(
  ({ placeholder, type, inputValue, onChange, onClear, renderFocusable }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const clearInputButtonCoords = useMemo(() => {
      return { top: '8px', right: '5px' }
    }, [])

    useEffect(() => {
      renderFocusable && inputRef.current?.focus()
    }, [renderFocusable])

    return (
      <InputContainer>
        <StyledInput
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={inputValue}
          ref={inputRef}
          onChange={onChange}
        />
        {inputValue !== '' && onClear && (
          <ClearInputButton action={onClear} coords={clearInputButtonCoords} />
        )}
      </InputContainer>
    )
  }
)

export default OutlineInput
