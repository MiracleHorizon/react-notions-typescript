import React from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { RenameSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const RenamePageItem: React.FC<ActiveListItem> = props => {
  const dispatch = useDispatch()
  const onRenamePage = (): void => {
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Rename'
      IconSVG={RenameSVG}
      action={onRenamePage}
      {...props}
    />
  )
}

export default RenamePageItem
