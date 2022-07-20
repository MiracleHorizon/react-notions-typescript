import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { useKeyboardSelect } from 'hooks/keyboard/useKeyboardSelect'
import { useKeyboardEnter } from 'hooks/keyboard/useKeyboardEnter'
import EmptyPageList from './EmptyPageList'
import { currentPageSelector } from 'redux/selectors'
import {
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
  EMPTY_PAGE_OPTION_TITLES as titles,
  EMPTY_PAGE_OPTIONS_LIST as options,
} from 'redux/reducers/optionsSlice/optionsStorage'
import {
  EmptyPageWrapper,
  PageTitle,
  DescriptionContainer,
  Description,
  TemplatesTitleContainer,
  TemplatesTitle,
} from './EmptyPage.styles'

const EmptyPage: FC = memo(() => {
  const { _id, title } = useSelector(currentPageSelector)
  const { activeItem, setActiveItem, onSelectItem } = useSelectItem('')

  const onKeyboardSelectItem = useKeyboardSelect({
    titles,
    activeItem,
    setActiveItem,
  })

  const onKeyboardEnterItemAction = useKeyboardEnter({ activeItem, options })

  // [bugs][EmptyPage, Hooks].
  // In useEffect -> need to remove event listeners from empty page component
  // by click outside.

  useEventListener('keydown', onKeyboardSelectItem)
  useEventListener('keydown', onKeyboardEnterItemAction)

  useEffect(() => setActiveItem(''), [_id, setActiveItem])

  return (
    <EmptyPageWrapper>
      <PageTitle>{title}</PageTitle>
      <DescriptionContainer>
        <Description>
          Press Enter to continue with an empty page, or pick a template (↑↓ to
          select)
        </Description>
      </DescriptionContainer>
      <EmptyPageList
        list={EMPTY_PAGE_DECORATION_OPTIONS}
        activeItem={activeItem}
        onSelect={onSelectItem}
        // setActiveItem={setActiveItem}
      />
      <TemplatesTitleContainer>
        <TemplatesTitle>Templates</TemplatesTitle>
      </TemplatesTitleContainer>
      <EmptyPageList
        list={EMPTY_PAGE_TEMPLATES_OPTIONS}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
    </EmptyPageWrapper>
  )
})

export default EmptyPage
