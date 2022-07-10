import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSelectItem } from 'hooks/useSelectItem'
import { useKeyboardSelect } from 'hooks/keyboard/useKeyboardSelect'
import { useKeyboardEnter } from 'hooks/keyboard/useKeyboardEnter'

import EmptyPageList from './EmptyPageList'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
  EMPTY_PAGE_OPTION_TITLES as titles,
  EMPTY_PAGE_OPTIONS_LIST as options,
} from 'redux/optionsSlice/optionsStorage'
import {
  EmptyPageWrapper,
  DescriptionContainer,
  Description,
  TemplatesTitleContainer,
  StyledTitle,
} from './EmptyPage.styles'

const EmptyPage: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
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

  useEffect(() => {
    document.addEventListener('keydown', onKeyboardSelectItem)
    document.addEventListener('keydown', onKeyboardEnterItemAction)

    return () => {
      document.removeEventListener('keydown', onKeyboardSelectItem)
      document.removeEventListener('keydown', onKeyboardEnterItemAction)
    }
  }, [onKeyboardSelectItem, onKeyboardEnterItemAction])

  useEffect(() => setActiveItem(''), [id, setActiveItem])

  return (
    <EmptyPageWrapper>
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
        setActiveItem={setActiveItem}
      />
      <div>
        <TemplatesTitleContainer>
          <StyledTitle>Templates</StyledTitle>
        </TemplatesTitleContainer>
        <EmptyPageList
          list={EMPTY_PAGE_TEMPLATES_OPTIONS}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </div>
    </EmptyPageWrapper>
  )
}

export default EmptyPage
