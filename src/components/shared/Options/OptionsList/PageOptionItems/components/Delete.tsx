import React, { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'

import PageOptionItem from '../PageOptionItem'
import { DeleteTrashSvg } from 'components/ui/SVG'

import { ActiveListItem } from 'types'
import { IListContentItem } from 'models/content/content.types'
import { deletePage, updatePage } from 'api/reduxAsyncThunks/notions'
import {
  showMoveToTrashAlert,
  closePageOptionsPopup,
  setMoveToTrashAlertPage,
  closeContentOptionsPopup,
} from 'redux/actions'
import {
  contentOptionsPopupSelector,
  currentPageCopySelector,
  pageOptionsPopupSelector,
} from 'redux/selectors'

interface DeleteItemProps extends ActiveListItem {
  destination?: 'page' | 'item'
}

const DeleteItem: FC<DeleteItemProps> = memo(({ destination, ...other }) => {
  const currentPageCopy = useSelector(currentPageCopySelector)
  const { itemIndex } = useSelector(contentOptionsPopupSelector)
  const { page } = useSelector(pageOptionsPopupSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onDeletePage = useCallback((): void => {
    appDispatch(deletePage(page._id))
    dispatch(setMoveToTrashAlertPage(page._id)) //!
    dispatch(showMoveToTrashAlert())
    dispatch(closePageOptionsPopup())
  }, [appDispatch, dispatch, page])

  const onDeleteContentItem = useCallback((): void => {
    currentPageCopy.content = currentPageCopy.content.filter(
      (_: IListContentItem, index: number) => index !== itemIndex
    )

    appDispatch(updatePage(currentPageCopy))
    dispatch(closeContentOptionsPopup())
    dispatch(showMoveToTrashAlert())
  }, [appDispatch, dispatch, currentPageCopy, itemIndex])

  return (
    <PageOptionItem
      title='Delete'
      IconSvg={DeleteTrashSvg}
      action={destination === 'item' ? onDeleteContentItem : onDeletePage}
      {...other}
    />
  )
})

export default DeleteItem
