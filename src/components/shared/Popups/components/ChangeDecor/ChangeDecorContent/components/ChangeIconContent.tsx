import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ChangeIconCategories } from 'redux/reducers/pageDecorationSlice/types'
import DecorLink from '../../DecorLink'
import UploadDecor from '../../UploadDecor'
import ChangeDecorLists from '../DecorLists'
import { selectedIconCategorySelector } from 'redux/selectors'
import ContentWrapper from '../ChangeDecorContent.styles'

const ChangeIconContent: FC = () => {
  const selectedCategory = useSelector(selectedIconCategorySelector)

  const selectedCategoryHandler = useCallback(():
    | JSX.Element
    | JSX.Element[] => {
    switch (selectedCategory) {
      case ChangeIconCategories.EMOJI:
        return <ChangeDecorLists listTitle='Emoji' />
      case ChangeIconCategories.UPLOAD:
        return (
          <UploadDecor recommendation='Recommended sizes is 280 x 280 pixels' />
        )
      case ChangeIconCategories.LINK:
        return <DecorLink purpose='Icon' />
      default:
        return <ChangeDecorLists listTitle={'Emoji'} />
    }
  }, [selectedCategory])

  return <ContentWrapper>{selectedCategoryHandler()}</ContentWrapper>
}

export default ChangeIconContent
