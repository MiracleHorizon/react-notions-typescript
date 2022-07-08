import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from '../PageOptionItem'
import { DuplicateSvg } from 'shared/SVG'
import { closePageOptionsPopup } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { duplicatePage } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../../types'

const DuplicateItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsPopupSelector).pageId
  const dispatch = useDispatch()

  const onDuplicatePage = (): void => {
    dispatch(closePageOptionsPopup())
    dispatch(duplicatePage(pageId))
  }
  const onDuplicateNotion = (): void => {}

  return (
    <PageOptionItem
      title='Duplicate'
      IconSvg={DuplicateSvg}
      action={onDuplicatePage}
      {...props}
    />
  )
}

export default DuplicateItem
