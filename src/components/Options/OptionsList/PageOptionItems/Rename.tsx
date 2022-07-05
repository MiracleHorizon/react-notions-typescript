import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { RenameSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { ActiveListItem } from '../../../../@types/generalTypes'

const RenameItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onRenamePage = (): void => {
    dispatch(closePageOptionsModal())
    // ...
  }
  const onRenameNotion = (): void => {}

  return (
    <PageOptionItem
      title='Rename'
      IconSvg={RenameSVG}
      action={onRenamePage}
      {...props}
    />
  )
}

export default RenameItem
