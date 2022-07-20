import React, { FC, memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import SelectContentTypeOption from 'components/shared/Options/SelectContentTypeOption'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { closeContentTypesPopup } from 'redux/actions'
import { contentTypeOptions } from 'utils/options/commentsFilterOptions'
import { Wrapper, Container } from './SelectContentItemTypePopup.styles'

const PageContentItemTypePopup: FC = memo(() => {
  const { activeItem, onSelectItem } = useSelectItem('')
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    dispatch(closeContentTypesPopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Wrapper ref={popupRef}>
      <Container>
        {contentTypeOptions.map(option => (
          <SelectContentTypeOption
            key={option.description}
            onSelect={onSelectItem}
            activeItem={activeItem}
            {...option}
          />
        ))}
      </Container>
    </Wrapper>
  )
})

export default PageContentItemTypePopup
