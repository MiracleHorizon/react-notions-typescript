import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { DeleteTrashSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { deletePage } from 'redux/workSpaceSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const DeleteItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onDeletePage = (): void => {
    dispatch(closePageOptionsModal())
    dispatch(deletePage(pageId))
  }
  const onDeleteNotion = (): void => {}

  return (
    <PageOptionItem
      title='Delete'
      IconSvg={DeleteTrashSVG}
      action={onDeletePage}
      {...props}
    />
  )
}

export default DeleteItem
