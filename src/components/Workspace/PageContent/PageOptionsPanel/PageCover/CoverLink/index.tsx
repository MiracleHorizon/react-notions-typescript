import React from 'react'
import { useInput } from 'hooks/useInput'

import OutlineInput from 'shared/Inputs/OutlineInput'
import styles from './CoverLink.module.scss'

const CoverLink: React.FC = () => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')

  return (
    <div className={styles.root}>
      <form>
        <OutlineInput
          placeholder='Paste an image link...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
        <div className={styles.submitBtn} role='button'>
          <span>Submit</span>
        </div>
      </form>
      <p>Works with any image from the web.</p>
    </div>
  )
}

export default CoverLink
