import React from 'react'

import { CoverColors } from '../../../redux/workSpaceSlice/types'
import styles from './CoversGalery.module.scss'

interface CoverGalleryProps {
  title: string
  covers: CoverColors[]
}

const CoversGallery: React.FC<CoverGalleryProps> = ({ title, covers }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.covers}>
        {covers.map(cover => (
          <div className={styles.cover} key={cover}>
            <div style={{ backgroundColor: cover }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoversGallery
