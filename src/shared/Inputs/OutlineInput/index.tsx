import React, { ChangeEvent, useEffect, useRef } from 'react'

import styles from './OutlineInput.module.scss'
import clearSvg from 'assets/img/clearInput.svg'

interface OutlineInputProps {
  placeholder: string
  inputValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

const OutlineInput: React.FC<OutlineInputProps> = props => {
  const { placeholder, inputValue, onChange, onClear } = props
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div className={styles.inputBlock}>
      <input
        type='text'
        placeholder={placeholder}
        ref={inputRef}
        value={inputValue}
        onChange={onChange}
      />
      {inputValue !== '' && (
        <div className={styles.clearInputBtn} onClick={onClear}>
          <img src={clearSvg} alt='Clear' />
        </div>
      )}
    </div>
  )
}

export default OutlineInput
