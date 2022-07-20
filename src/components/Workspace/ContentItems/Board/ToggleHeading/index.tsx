import React, { FC, memo, useCallback, useRef } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useDispatch } from 'react-redux'

import ContentItem from '../index'

import Props from './ToggleHeading.types'
import { openContentTypesPopup } from 'redux/actions'
import * as Item from './ToggleHeading.styles'

const ToggleHeadingItem: FC<Props> = memo(
  ({ itemIndex, background, textColor, _id, content, ...other }) => {
    const textValue = useRef<string>('Toggle heading')
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

    return (
      // <ContentItem  itemIndex={itemIndex}>
      //   <Item.Container {...{ textColor, background }}>
      //     <ContentEditable html={textValue.current} onChange={handleChange} />
      //   </Item.Container>
      // </ContentItem>
      <></>
    )
  }
)

export default ToggleHeadingItem
