import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useInput } from 'hooks/useInput'

import QuickSearchForm from './SearchForm/QuickSearchForm'
import RecentLists from './RecentLists/RecentLists'
import { closeQuickSearchModal } from 'redux/modalsSlice/slice'

import {
  Wrapper,
  Container,
  ContentBlock,
  Content,
  AsideFilter,
} from './QuickSearch.styles'

const QuickSearch: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const modalRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(closeQuickSearchModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Wrapper isFullWidth={isFilterOpen} ref={modalRef}>
      <Container>
        <ContentBlock>
          <Content>
            <QuickSearchForm
              inputValue={inputValue}
              onChangeInputValue={onChangeInputValue}
              onClearInput={onClearInput}
            />
            {inputValue === '' ? <RecentLists /> : <div>qwe</div>}
          </Content>
          {isFilterOpen && <AsideFilter></AsideFilter>}
        </ContentBlock>
      </Container>
    </Wrapper>
  )
}

export default QuickSearch

// <footer style={{ flexShrink: 0 }}></footer>
// <span>Searching...</span>
// <button onClick={onOpenFilter}>Open filter</button>
// const onOpenFilter = (): void => setIsFilterOpen(true)
