import React from 'react'
import Props from '../types'
import StyledInput from './CommonGrayInput.styles'

const CommonGrayInput: React.FC<Props> = props => {
  const { placeholder, inputRef, inputValue, onChange } = props

  return (
    <StyledInput
      type='text'
      placeholder={placeholder}
      ref={inputRef}
      value={inputValue}
      onChange={onChange}
    />
  )
}

export default CommonGrayInput
