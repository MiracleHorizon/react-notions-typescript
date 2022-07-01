import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setPageCover } from '../../../../../../redux/workSpaceSlice/slice'
import { currentPageSelector } from '../../../../../../redux/workSpaceSlice/selectors'
import { setIsCoverModalClose } from '../../../../../../redux/pageDecorationSlice/slice'
import styles from './CoversGalery.module.scss'

interface CoverGalleryItemProps {
  cover: string
}

const CoverGalleryItem: React.FC<CoverGalleryItemProps> = ({ cover }) => {
  const { id } = useSelector(currentPageSelector)

  const dispatch = useDispatch()
  const onSelectPageCover = (): void => {
    dispatch(setPageCover({ cover, id }))
    dispatch(setIsCoverModalClose())
  }

  return (
    <div className={styles.cover} onClick={onSelectPageCover}>
      <div style={{ backgroundColor: cover }} />
    </div>
  )
}

export default CoverGalleryItem
