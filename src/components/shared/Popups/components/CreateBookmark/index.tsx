import React, { FC, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/shared/Popups/index'
import { FilledButton, OutlineInput } from 'components/ui'

import Props from './CreateBookmarkPopup.types'
import { IListContentItem } from 'models/content/content.types'
import { useAppDispatch } from 'redux/store'
import { useInput } from 'hooks/keyboard/input'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector } from 'redux/selectors'
import { urlHandler } from 'utils/contentItems/urlHandler'
import { Wrapper, TooltipTitle } from './CreateBookmarkPopup.styles'

const CreateBookmarkPopup: FC<Props> = ({ itemId, setPopupOpen, coords }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const currentPageCopy = useSelector(currentPageCopySelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()

  const onHandleUrl = useCallback((): void => {
    if (urlHandler(inputValue)) {
      currentPageCopy.content = currentPageCopy.content.map(
        (item: IListContentItem) => {
          if (item._id !== itemId) return item

          item.content = inputValue
          return item
        }
      )

      appDispatch(updatePage(currentPageCopy))
    }
  }, [appDispatch, currentPageCopy, inputValue, itemId])

  const handleClickOutside = (): void => setPopupOpen(false)

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords}>
        <OutlineInput
          renderFocusable
          type='url'
          placeholder='Paste in https://...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
        <FilledButton title='Create bookmark' onClickAction={onHandleUrl} />
        <TooltipTitle>Create a visual bookmark from a link.</TooltipTitle>
      </Wrapper>
    </Popup>
  )
}

export default CreateBookmarkPopup
