import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from 'redux/store'
import Props from './ContentStylesOption.types'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector } from 'redux/selectors'
import {
  OptionContainer,
  StyleTitle,
  StylePreviewContainer,
} from './ContentStylesOption.styles'

const ContentStylesOption: FC<Props> = memo(
  ({ title, destination, itemIndex, background, textColor }) => {
    const currentPageCopy = useSelector(currentPageCopySelector)
    const appDispatch = useAppDispatch()

    const onChangeItemStyle = useCallback(() => {
      destination === 'color'
        ? (currentPageCopy.content[itemIndex].textColor = textColor)
        : (currentPageCopy.content[itemIndex].background = background)

      appDispatch(updatePage(currentPageCopy))
    }, [
      appDispatch,
      background,
      currentPageCopy,
      destination,
      itemIndex,
      textColor,
    ])

    return (
      <OptionContainer onClick={onChangeItemStyle}>
        <StylePreviewContainer {...{ background, textColor }}>
          <span>A</span>
        </StylePreviewContainer>
        <StyleTitle>{title}</StyleTitle>
      </OptionContainer>
    )
  }
)

export default ContentStylesOption
