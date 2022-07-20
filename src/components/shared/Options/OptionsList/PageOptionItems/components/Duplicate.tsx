import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveListItem } from 'types'
import PageOptionItem from '../PageOptionItem'
import { DuplicateSvg } from 'components/ui/SVG'
import { closePageOptionsPopup, duplicatePage } from 'redux/actions'
import { pageOptionsPopupSelector } from 'redux/selectors'

const DuplicateItem: FC<ActiveListItem> = memo(props => {
  const { page } = useSelector(pageOptionsPopupSelector)
  const dispatch = useDispatch()

  const onDuplicatePage = useCallback((): void => {
    dispatch(closePageOptionsPopup())
    dispatch(duplicatePage(page._id)) //!
  }, [dispatch, page])

  const onDuplicateNotion = useCallback((): void => {}, [])

  return (
    <PageOptionItem
      title='Duplicate'
      IconSvg={DuplicateSvg}
      action={onDuplicatePage}
      {...props}
    />
  )
})

export default DuplicateItem
