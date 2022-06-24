import React from 'react'

import styles from './PageCover.module.scss'

interface IPageCoverProps {
  cover: string
}

const PageCover: React.FC<IPageCoverProps> = ({ cover }) => {
  return <div className={styles.banner} style={{ backgroundColor: cover }} />
}

export default PageCover
