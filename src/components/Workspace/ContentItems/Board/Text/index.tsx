import React, { FC, memo } from 'react'
import ContentEditable from 'react-contenteditable'

import ContentItem from '../index'

import { useContentEditable } from 'hooks/contentEditable'
import Props from './TextItem.types'
import { ContentDatasets } from 'models/content/content.types'
import ItemContainer from './TextItem.styles'

const TextItem: FC<Props> = memo(props => {
  const { _id, content, contentType, background, textColor, itemIndex } = props
  const { textValue, handleChange, handleKeydown, handleBlur } =
    useContentEditable({
      itemId: _id!,
      itemContent: content,
    })

  return (
    <ContentItem dataContent={ContentDatasets.TEXT} itemIndex={itemIndex}>
      <ItemContainer
        placeholder={contentType}
        background={background}
        textColor={textColor}
      >
        <ContentEditable
          spellCheck
          placeholder="Type '/' for commands"
          html={textValue}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onBlur={handleBlur}
        />
      </ItemContainer>
    </ContentItem>
  )
})

export default TextItem
