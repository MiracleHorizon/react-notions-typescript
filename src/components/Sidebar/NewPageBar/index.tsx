import React from 'react'

import styles from './NewPageBar.module.scss'
import addPageSvg from '../../../assets/img/plus-addPage.svg'

const NewPageBar: React.FC = () => {
  return (
    <div className={styles.newPageBar}>
      <button>
        <img src={addPageSvg} alt='Add Page' />
      </button>
      <span>New page</span>
    </div>
  )
}

export default NewPageBar
