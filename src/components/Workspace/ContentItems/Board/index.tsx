import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import ListContentItemOptions from '../ContentItemOptions'

import { ItemWrapperProps } from './ContentItem.types'
import { Wrapper } from './ContentItem.styles'

const ContentItem: FC<ItemWrapperProps> = memo(
  ({ children, itemIndex, dataContent, height, optionsPanelTopOffset }) => {
    const itemRef = useRef<HTMLDivElement>(null)
    const isHovering = useHover(itemRef)

    return (
      <Wrapper
        data-content={dataContent}
        marginY={3}
        height={height}
        ref={itemRef}
      >
        {isHovering && (
          <ListContentItemOptions
            topOffset={optionsPanelTopOffset}
            itemIndex={itemIndex}
          />
        )}
        {children}
      </Wrapper>
    )
  }
)

export default ContentItem
