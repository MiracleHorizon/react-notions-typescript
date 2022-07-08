import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import Popup from '../index'
import QuickSearchForm from './SearchForm/QuickSearchForm'
import RecentLists from './RecentLists/RecentLists'
import { closeQuickSearchPopup } from 'redux/popupsSlice/slice'
import {
  Wrapper,
  Container,
  ContentBlock,
  Content,
  AsideFilter,
} from './QuickSearchPopup.styles'

const QuickSearchPopup: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const popupRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(closeQuickSearchPopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup isHasInset={true}>
      <Wrapper isFullWidth={isFilterOpen} ref={popupRef}>
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
    </Popup>
  )
}

export default QuickSearchPopup
