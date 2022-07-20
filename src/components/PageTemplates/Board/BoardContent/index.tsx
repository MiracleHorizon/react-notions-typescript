import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'

import PageTitle from 'components/Workspace/PageTitle'
import PageCommentsPanel from 'components/Workspace/PageComments'
import PageContentList from './ContentList'

import { defaultItem } from 'features/Items'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector, currentPageSelector } from 'redux/selectors'
import fontFamilyHandler from 'helpers/decor/fontFamilyHandler'
import { AddContentField, Content, Wrapper } from './BoardContent.styles'

const ListContent: FC = memo(() => {
  const {
    content,
    pageSettings: { isSmallText, selectedFont },
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)
  const currentPageCopy = useSelector(currentPageCopySelector)
  const listRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()

  const pageFontFamily = useMemo(
    () => fontFamilyHandler(selectedFont),
    [selectedFont]
  )

  const onCreateNewContentItem = useCallback((): void => {
    const lastItem = content[content.length - 1]

    if (
      content.length === 0 ||
      lastItem.content !== '' ||
      lastItem.contentType === 'Divider'
    ) {
      currentPageCopy.content = [...currentPageCopy.content, defaultItem]
      appDispatch(updatePage(currentPageCopy))
    }
  }, [appDispatch, content, currentPageCopy])

  return (
    <Wrapper isSmallText={isSmallText} fontFamily={pageFontFamily}>
      <PageTitle />
      {isHasComments && <PageCommentsPanel />}
      <Content>
        <PageContentList pRight='50' content={content} reference={listRef} />
        <AddContentField onClick={onCreateNewContentItem} />
      </Content>
    </Wrapper>
  )
})

export default ListContent
