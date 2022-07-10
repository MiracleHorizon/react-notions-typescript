import React from 'react'
import { useSelector } from 'react-redux'

import DecorLink from '../../DecorLink'
import UploadDecor from '../../UploadDecor'
import ChangeDecorLists from '../DecorLists'
import { selectedIconCategorySelector } from 'redux/pageDecorationSlice/selectors'
import { ChangeIconCategories } from 'redux/pageDecorationSlice/types'
import ContentWrapper from '../ChangeDecorContent.styles'

const ChangeIconContent: React.FC = () => {
  const selectedCategory = useSelector(selectedIconCategorySelector)

  const selectedCategoryHandler = (): JSX.Element | JSX.Element[] => {
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
  }

  return <ContentWrapper>{selectedCategoryHandler()}</ContentWrapper>
}

export default ChangeIconContent
