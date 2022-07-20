import { useCallback, useRef } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux'

import {
  UseContentEditableParams as Params,
  UseContentEditableResult as Result,
} from './contentEditable.types'
import { IListContentItem as Item } from 'models/content/content.types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { closeContentTypesPopup, openContentTypesPopup } from 'redux/actions'
import { currentPageCopySelector } from 'redux/selectors'
import { defaultContentItem } from 'models/content'

export const useContentEditable = ({ itemId, itemContent }: Params): Result => {
  const currentPageCopy = useSelector(currentPageCopySelector)
  const { content: currentPageContent } = currentPageCopy
  const textValue = useRef<string>(itemContent)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (e: ContentEditableEvent): void => {
      if (e.target.value.startsWith('/')) {
        dispatch(openContentTypesPopup())
      }

      textValue.current = e.target.value
    },
    [dispatch]
  )

  // KeyboardEvent
  const handleKeydown = useCallback(
    (e: any): void => {
      let updatedContent: any

      if (e.code === 'Enter') {
        e.preventDefault()

        currentPageCopy.content = [...currentPageContent, defaultContentItem]
        appDispatch(updatePage(currentPageCopy))
      }

      if (e.code === 'KeyX' && e.ctrlKey) {
        updatedContent = currentPageContent.filter((item: Item) => {
          return item._id !== itemId
        })

        currentPageCopy.content = updatedContent
        appDispatch(updatePage(currentPageCopy))
        dispatch(closeContentTypesPopup())
      }

      if (e.code === 'Backspace' && textValue.current === '') {
        updatedContent = currentPageContent.filter((item: Item) => {
          return item._id !== itemId
        })

        currentPageCopy.content = updatedContent
        appDispatch(updatePage(currentPageCopy))
        dispatch(closeContentTypesPopup())
      }
    },
    [appDispatch, dispatch, currentPageContent, currentPageCopy, itemId]
  )

  const handleBlur = useCallback((): void => {
    currentPageCopy.content.forEach((item: Item) => {
      if (item._id === itemId) item.content = textValue.current
    })

    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy, itemId])

  return {
    textValue: textValue.current,
    handleChange,
    handleKeydown,
    handleBlur,
  }
}
