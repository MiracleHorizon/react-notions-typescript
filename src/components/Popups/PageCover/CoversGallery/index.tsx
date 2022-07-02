import React from 'react'

import CoverGalleryItem from './CoverGalleryItem'
import { CoverColors } from '../../../../redux/workSpaceSlice/types'
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
          <CoverGalleryItem key={cover} cover={cover} />
        ))}
      </div>
    </div>
  )
}

export default CoversGallery
