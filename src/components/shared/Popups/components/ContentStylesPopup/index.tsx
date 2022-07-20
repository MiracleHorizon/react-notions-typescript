import React, { FC, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import ContentStylesOption from 'components/shared/Options/ContentStylesOption'
import { Separator } from 'components/ui'

import { closeContentStylesPopup } from 'redux/actions'
import { contentStylesPopupSelector } from 'redux/selectors'
import { contentTextColors, contentBackgrounds } from 'styles/colors'
import {
  Wrapper,
  OptionsList,
  ListTitle,
} from './PageContentStylesPopup.styles'

const PageContentStylesPopup: FC = () => {
  const popupRef = useRef<HTMLDivElement>(null)
  const { itemIndex } = useSelector(contentStylesPopupSelector)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback((): void => {
    dispatch(closeContentStylesPopup())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Wrapper ref={popupRef}>
      <OptionsList>
        <ListTitle>Color</ListTitle>
        {Object.entries(contentTextColors).map(([key, value]) => (
          <ContentStylesOption
            key={key}
            destination='color'
            itemIndex={itemIndex}
            title={key}
            textColor={value.color}
          />
        ))}
      </OptionsList>
      <Separator />
      <OptionsList>
        <ListTitle>Background</ListTitle>
        {Object.entries(contentBackgrounds).map(([key, value]) => (
          <ContentStylesOption
            key={key}
            destination='background'
            itemIndex={itemIndex}
            title={key}
            background={value.background}
          />
        ))}
      </OptionsList>
    </Wrapper>
  )
}

export default PageContentStylesPopup
