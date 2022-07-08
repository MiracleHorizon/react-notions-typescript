import React from 'react'
import { useSelector } from 'react-redux'

import {
  coversListsSelector,
  selectedCoverCategorySelector,
} from 'redux/pageDecorationSlice/selectors'
import { ChangeCoverCategories } from 'redux/pageDecorationSlice/types'
import CoversGallery from '../../CoversGallery'
import UploadDecor from '../../UploadDecor'
import DecorLink from '../../DecorLink'
import ContentWrapper from '../ChangeDecorContent.styles'

const ChangeCoverContent: React.FC = () => {
  const selectedCategory = useSelector(selectedCoverCategorySelector)
  const coversLists = useSelector(coversListsSelector)

  const selectedCategoryHandler = (): JSX.Element | JSX.Element[] => {
    switch (selectedCategory) {
      case ChangeCoverCategories.GALLERY:
        return coversLists.map(({ title, covers }) => (
          <CoversGallery key={title} title={title} covers={covers} />
        ))
      case ChangeCoverCategories.UPLOAD:
        return (
          <UploadDecor recommendation='Images wider than 1500 pixels work best' />
        )
      case ChangeCoverCategories.LINK:
      default:
        return <DecorLink />
    }
  }

  return <ContentWrapper>{selectedCategoryHandler()}</ContentWrapper>
}

export default ChangeCoverContent
