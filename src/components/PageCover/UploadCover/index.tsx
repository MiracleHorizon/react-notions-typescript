import React from 'react'

import styles from './UploadCover.module.scss'

const UploadCover: React.FC = () => {
  return (
    <div className={styles.upload}>
      <div>
        <div className={styles.chooseBtn}>
          <span>Choose an image</span>
        </div>
        <p>Images wider then 1500 pixels work best.</p>
        <p>The maximum size per file is 2 MB.</p>
      </div>
    </div>
  )
}

export default UploadCover
