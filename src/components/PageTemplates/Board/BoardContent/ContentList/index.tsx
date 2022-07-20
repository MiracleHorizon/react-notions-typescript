import React, { FC, memo } from 'react'

import TextItem from 'components/Workspace/ContentItems/Board/Text'
import MiniTodoItem from 'components/Workspace/ContentItems/Board/Todo'
import QuoteItem from 'components/Workspace/ContentItems/Board/Quote'
import DividerItem from 'components/Workspace/ContentItems/Board/Divider'
import HeadingItem from 'components/Workspace/ContentItems/Board/Heading'
import WebBookmarkItem from 'components/Workspace/ContentItems/Board/WebBookmark'
import ToggleListItem from 'components/Workspace/ContentItems/Board/List/Toggle'

import Props from './PageContentList.types'
import { IListContentItem as Item } from 'models/content/content.types'
import ContentList from './PageContentList.styles'

const PageContentList: FC<Props> = memo(({ reference, content, pRight }) => {
  const itemHandler = (item: Item, itemIndex: number): JSX.Element => {
    switch (item.contentType) {
      case 'Text':
        return <TextItem key={item._id} {...item} itemIndex={itemIndex} />
      case 'Todo':
        return <MiniTodoItem key={item._id} itemIndex={itemIndex} {...item} />
      case 'Quote':
        return <QuoteItem key={item._id} {...item} itemIndex={itemIndex} />
      case 'Divider':
        return <DividerItem key={item._id} itemIndex={itemIndex} />
      case 'Heading1':
        return (
          <HeadingItem
            headingLevel='1'
            key={item._id}
            itemIndex={itemIndex}
            {...item}
          />
        )
      case 'Heading2':
        return (
          <HeadingItem
            headingLevel='2'
            key={item._id}
            itemIndex={itemIndex}
            {...item}
          />
        )
      case 'Heading3':
        return (
          <HeadingItem
            headingLevel='3'
            key={item._id}
            itemIndex={itemIndex}
            {...item}
          />
        )
      case 'ToggleHeading1':
        return <></>
      case 'ToggleHeading2':
        return <></>
      case 'ToggleHeading3':
        return <></>
      case 'WebBookmark':
        return (
          <WebBookmarkItem key={item._id} {...item} itemIndex={itemIndex} />
        )
      case 'ToggleList':
        return <ToggleListItem key={item._id} {...item} itemIndex={itemIndex} />
      default:
        return <></>
    }
  }

  return (
    <ContentList data-content='content-list' pRight={pRight} ref={reference}>
      {content.map((item, index) => itemHandler(item, index))}
    </ContentList>
  )
})

export default PageContentList
