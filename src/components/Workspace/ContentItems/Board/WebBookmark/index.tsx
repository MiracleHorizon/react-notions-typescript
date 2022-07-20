import React, { FC, memo, useMemo, useRef, useState } from 'react'

import ContentItem from '../index'
import CreateBookmarkPopup from 'components/shared/Popups/components/CreateBookmark'
import { BookSvg } from 'components/ui/SVG'

import Props from '../ContentItem.types'
import { ContentDatasets } from 'models/content/content.types'
import { bookmarkPopupCoordsHandler } from 'utils/coordsHandlers'
import * as Item from './WebBookmarkItem.styles'

const WebBookmarkItem: FC<Props> = memo(({ _id, content, itemIndex }) => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const itemRect = itemRef.current?.getBoundingClientRect()
  const popupCoords = bookmarkPopupCoordsHandler.item(itemRect)
  const isEmpty = content.length === 0

  const domainTitle = useMemo(() => {
    return !isEmpty ? new URL(content).hostname : ''
  }, [content, isEmpty])

  const onOpenCreateBookmarkPopup = (): void => {
    if (isEmpty) setPopupOpen(true)
  }

  return (
    <>
      <ContentItem
        dataContent={ContentDatasets.WEB_BOOKMARK}
        itemIndex={itemIndex}
      >
        <Item.Container
          ref={itemRef}
          isEmpty={isEmpty}
          onClick={onOpenCreateBookmarkPopup}
        >
          {isEmpty ? (
            <>
              <Item.IconContainer>
                <BookSvg />
              </Item.IconContainer>
              <Item.Title>Add a web bookmark</Item.Title>
            </>
          ) : (
            <Item.Url href={content} target='_blank'>
              <Item.DomainTitle>{domainTitle}</Item.DomainTitle>
              <Item.UrlTitle>{content}</Item.UrlTitle>
            </Item.Url>
          )}
        </Item.Container>
      </ContentItem>
      {isPopupOpen && (
        <CreateBookmarkPopup
          itemId={_id!}
          coords={popupCoords}
          setPopupOpen={setPopupOpen}
        />
      )}
    </>
  )
})

export default WebBookmarkItem
