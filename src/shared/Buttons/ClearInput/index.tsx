import React from 'react'

import clearInputSvg from '../../../assets/img/inputs/input-clear.svg'
import styles from './ClearInput.module.scss'

interface IClearInputProps {
  action: () => void
}

const ClearInput: React.FC<IClearInputProps> = ({ action }) => {
  return (
    <img
      src={clearInputSvg}
      alt='Clear'
      className={styles.clearInput}
      onClick={action}
    />
  )
}

export default ClearInput
