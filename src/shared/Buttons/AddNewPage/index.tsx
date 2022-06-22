import React from 'react'

import addPageSvg from '../../../assets/img/plus-addPage.svg'
import styles from './AddNewPageButton.module.scss'

const AddNewPageButton: React.FC = () => {
  return (
    <button className={styles.addPageBtn}>
      <img src={addPageSvg} alt='Add Page' />
    </button>
  )
}

export default AddNewPageButton
