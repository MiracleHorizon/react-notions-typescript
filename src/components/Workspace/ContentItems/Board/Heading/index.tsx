import React, { FC, memo, useMemo } from 'react'
import ContentEditable from 'react-contenteditable'

import ContentItem from '../index'

import { useContentEditable } from 'hooks/contentEditable'
import Props from './Heading.types'
import { HeadingItemHandler } from 'utils/contentItems/heading'
import HeadingContainer from './Heading.styles'

const HeadingItem: FC<Props> = memo(
  ({ itemIndex, textColor, background, headingLevel, ...item }) => {
    const { textValue, handleChange, handleKeydown, handleBlur } =
      useContentEditable({
        itemId: item._id!,
        itemContent: item.content,
      })
    const headingItemHandler = useMemo(
      () => new HeadingItemHandler(headingLevel),
      [headingLevel]
    )
    const headingParams = useMemo(
      () => headingItemHandler.getParams(),
      [headingItemHandler]
    )

    return (
      <ContentItem
        dataContent={headingItemHandler.getDataset()}
        optionsPanelTopOffset={headingItemHandler.getOffset()}
        itemIndex={itemIndex}
      >
        <HeadingContainer
          params={headingParams}
          background={background}
          textColor={textColor}
        >
          <ContentEditable
            spellCheck
            placeholder={headingItemHandler.getPlaceholder()}
            html={textValue}
            onChange={handleChange}
            onKeyDown={handleKeydown}
            onBlur={handleBlur}
          />
        </HeadingContainer>
      </ContentItem>
    )
  }
)

export default HeadingItem
