import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

import ContentItem from '../index'
import { ToggleTodoButton } from 'components/ui'

import { useToggle } from 'hooks/mouse/toggle'
import Props from '../ContentItem.types'
import {
  ContentDatasets,
  IListContentItem as Item,
} from 'models/content/content.types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector } from 'redux/selectors'
import { closeContentTypesPopup, openContentTypesPopup } from 'redux/actions'
import { defaultContentItem } from 'models/content'
import * as Todo from './MiniTodo.styles'

const MiniTodoItem: FC<Props> = memo(
  ({ _id, content, textColor, background, itemIndex }) => {
    const { isActive, toggleActive } = useToggle(false)
    const currentPageCopy = useSelector(currentPageCopySelector)
    const { content: currentPageContent } = currentPageCopy
    const textValue = useRef<string>(content)
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

        if (e.code === 'Backspace' && textValue.current === '') {
          updatedContent = currentPageContent.filter((item: Item) => {
            return item._id !== _id
          })

          currentPageCopy.content = updatedContent
          appDispatch(updatePage(currentPageCopy))
          dispatch(closeContentTypesPopup())
        }
      },
      [appDispatch, dispatch, currentPageContent, currentPageCopy, _id]
    )

    const handleBlur = useCallback((): void => {
      currentPageCopy.content.forEach((item: Item) => {
        if (item._id === _id) item.content = textValue.current
      })

      appDispatch(updatePage(currentPageCopy))
    }, [appDispatch, currentPageCopy, _id])

    return (
      <ContentItem dataContent={ContentDatasets.TODO} itemIndex={itemIndex}>
        <Todo.Wrapper>
          <Todo.Container
            textColor={textColor}
            background={background}
            isActive={isActive}
          >
            <Todo.ButtonContainer>
              <ToggleTodoButton
                isActive={isActive}
                toggleActive={toggleActive}
                squareColor={textColor}
              />
            </Todo.ButtonContainer>
            <ContentEditable
              spellCheck
              placeholder='To-do'
              html={textValue.current}
              onChange={handleChange}
            />
          </Todo.Container>
        </Todo.Wrapper>
      </ContentItem>
    )
  }
)

export default MiniTodoItem
