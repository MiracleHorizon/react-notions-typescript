import React from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { DuplicateSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const DuplicatePageItem: React.FC<ActiveListItem> = props => {
  const dispatch = useDispatch()
  const onDuplicatePage = (): void => {
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Duplicate'
      IconSVG={DuplicateSVG}
      action={onDuplicatePage}
      {...props}
    />
  )
}

export default DuplicatePageItem
