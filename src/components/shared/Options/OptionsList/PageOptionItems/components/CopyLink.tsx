import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveListItem } from 'types'
import PageOptionItem from '../PageOptionItem'
import { LinkSvg } from 'components/ui/SVG'
import { closePageOptionsPopup } from 'redux/actions'
import { pageOptionsPopupSelector } from 'redux/selectors'

const CopyLinkItem: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const dispatch = useDispatch()

  const onCopyPageLink = useCallback((): void => {
    dispatch(closePageOptionsPopup())
    // ...
  }, [dispatch])

  return (
    <PageOptionItem
      title='Copy link'
      IconSvg={LinkSvg}
      action={onCopyPageLink}
      {...props}
    />
  )
})

export default CopyLinkItem
