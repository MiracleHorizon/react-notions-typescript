import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveListItem } from 'types'
import PageOptionItem from '../PageOptionItem'
import { DeleteTrashSvg } from 'shared/SVG'
import { closePageOptionsPopup } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { deletePage } from 'redux/workSpaceSlice/slice'
import { showMoveToTrashAlert } from 'redux/alertsSlice/slice'

const DeleteItem: React.FC<ActiveListItem> = props => {
  const { pageId } = useSelector(pageOptionsPopupSelector)
  const dispatch = useDispatch()

  const onDeletePage = (): void => {
    dispatch(closePageOptionsPopup())
    dispatch(deletePage(pageId))
    dispatch(showMoveToTrashAlert())
  }
  const onDeleteNotion = (): void => {
    dispatch(closePageOptionsPopup())
    dispatch(showMoveToTrashAlert())
  }

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
