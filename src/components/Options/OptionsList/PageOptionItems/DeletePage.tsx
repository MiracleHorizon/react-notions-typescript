import React from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { DeleteTrashSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const DeletePageItem: React.FC<ActiveListItem> = props => {
  const dispatch = useDispatch()
  const onRemovePage = (): void => {
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Delete'
      IconSVG={DeleteTrashSVG}
      action={onRemovePage}
      {...props}
    />
  )
}

export default DeletePageItem
