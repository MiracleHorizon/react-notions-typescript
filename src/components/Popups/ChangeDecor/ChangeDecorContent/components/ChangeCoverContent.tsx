import React from 'react'
import { useSelector } from 'react-redux'

import ChangeDecorLists from '../DecorLists'
import UploadDecor from '../../UploadDecor'
import DecorLink from '../../DecorLink'
import { ChangeCoverCategories } from 'redux/pageDecorationSlice/types'
import { selectedCoverCategorySelector } from 'redux/pageDecorationSlice/selectors'
import ContentWrapper from '../ChangeDecorContent.styles'

const ChangeCoverContent: React.FC = () => {
  const selectedCategory = useSelector(selectedCoverCategorySelector)

  const selectedCategoryHandler = (): JSX.Element | JSX.Element[] => {
    switch (selectedCategory) {
      case ChangeCoverCategories.GALLERY:
        return <ChangeDecorLists listTitle='Covers' />
      case ChangeCoverCategories.UPLOAD:
        return (
          <UploadDecor recommendation='Images wider than 1500 pixels work best' />
        )
      case ChangeCoverCategories.LINK:
        return <DecorLink purpose='Cover' />
      default:
        return <DecorLink purpose='Cover' />
    }
  }

  return <ContentWrapper>{selectedCategoryHandler()}</ContentWrapper>
}

export default ChangeCoverContent
