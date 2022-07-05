import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { LinkSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { ActiveListItem } from '../../../../@types/generalTypes'

const CopyLinkItem: React.FC<ActiveListItem> = props => {
  const pageId = useSelector(pageOptionsModalSelector).pageId
  const dispatch = useDispatch()

  const onCopyPageLink = (): void => {
    dispatch(closePageOptionsModal())
    // ...
  }

  return (
    <PageOptionItem
      title='Copy link'
      IconSvg={LinkSVG}
      action={onCopyPageLink}
      {...props}
    />
  )
}

export default CopyLinkItem
