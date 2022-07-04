import React from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from './PageOptionItem'
import { LinkSVG } from 'shared/SVG'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { ActiveListItem } from '../../../../@types/generalTypes'

const CopyPageLinkItem: React.FC<ActiveListItem> = props => {
  const dispatch = useDispatch()
  const onCopyPageLink = (): void => {
    dispatch(closePageOptionsModal())
  }

  return (
    <PageOptionItem
      title='Copy link'
      IconSVG={LinkSVG}
      action={onCopyPageLink}
      {...props}
    />
  )
}

export default CopyPageLinkItem
