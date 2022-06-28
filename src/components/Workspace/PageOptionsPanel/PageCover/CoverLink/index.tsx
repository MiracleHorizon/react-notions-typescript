import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import styles from './CoverLink.module.scss'
import clearInputSvg from '../../../../../assets/img/clearInput.svg'

const CoverLink: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const onClearInput = (): void => setInputValue('')
  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div className={styles.root}>
      <form>
        <div className={styles.linkInputBlock}>
          <input
            type='url'
            placeholder='Paste an image link...'
            value={inputValue}
            ref={inputRef}
            onChange={onChangeInputValue}
          />
          {inputValue !== '' && (
            <div className={styles.clearInputBtn} onClick={onClearInput}>
              <img src={clearInputSvg} alt='Clear' />
            </div>
          )}
        </div>
        <div className={styles.submitBtn} role='button'>
          <span>Submit</span>
        </div>
      </form>
      <p>Works with any image from the web.</p>
    </div>
  )
}

export default CoverLink
