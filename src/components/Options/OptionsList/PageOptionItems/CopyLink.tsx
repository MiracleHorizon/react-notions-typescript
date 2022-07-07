import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { LinkSvg } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { ActiveListItem } from '../../../../@types/generalTypes'

const CopyLinkItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsPopupSelector).pageId
  const dispatch = useDispatch()

  const onCopyPageLink = (): void => {
    dispatch(closePageOptionsModal())
    // ...
  }

  return (
    <PageOptionItem
      title='Copy link'
      IconSvg={LinkSvg}
      action={onCopyPageLink}
      {...props}
    />
  )
}

export default CopyLinkItem
