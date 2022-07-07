import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { DeleteTrashSvg } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { deletePage } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const DeleteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsPopupSelector).pageId
  const dispatch = useDispatch()

  const onDeletePage = (): void => {
    dispatch(closePageOptionsModal())
    dispatch(deletePage(pageId))
  }
  const onDeleteNotion = (): void => {}

  return (
    <PageOptionItem
      title='Delete'
      IconSvg={DeleteTrashSvg}
      action={onDeletePage}
      {...props}
    />
  )
}

export default DeleteItem
