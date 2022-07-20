import React, { FC, memo, useCallback, useRef } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useSelector } from 'react-redux'

import ContentItem from '../index'

import Props from '../ContentItem.types'
import { ContentDatasets, IListContentItem } from 'models/content/content.types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector } from 'redux/selectors'
import * as Item from './QuoteItem.styles'

const QuoteItem: FC<Props> = memo(({ itemIndex, _id, content, ...item }) => {
  const currentPageCopy = useSelector(currentPageCopySelector)
  const textValue = useRef<string>(content)
  const appDispatch = useAppDispatch()

  const handleChange = (e: ContentEditableEvent): void => {
    textValue.current = e.target.value
  }

  const handleBlur = useCallback((): void => {
    if (content === textValue.current) return

    currentPageCopy.content.forEach((item: IListContentItem) => {
      if (item._id === _id) item.content = textValue.current
    })

    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, _id, content, currentPageCopy])

  return (
    <ContentItem dataContent={ContentDatasets.QUOTE} itemIndex={itemIndex}>
      <Item.Container {...item}>
        <ContentEditable
          spellCheck
          placeholder='Empty quote'
          html={textValue.current}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Item.Container>
    </ContentItem>
  )
})

export default QuoteItem
