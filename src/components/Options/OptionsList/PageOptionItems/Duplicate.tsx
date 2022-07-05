import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { DuplicateSvg } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { duplicatePage } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const DuplicateItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onDuplicatePage = (): void => {
    dispatch(closePageOptionsModal())
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
