import React from 'react'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import addPageSvg from 'assets/img/plus-addPage.svg'
import styles from './NewPageBar.module.scss'

const NewPageBar: React.FC = () => {
  const onCreateNewPage = useCreateNewPage()

  return (
    <div className={styles.newPageBar} onClick={onCreateNewPage}>
      <div role='button' className={styles.newPageBtn}>
        <img src={addPageSvg} alt='Add page' />
      </div>
      <span>New page</span>
    </div>
  )
}

export default NewPageBar
