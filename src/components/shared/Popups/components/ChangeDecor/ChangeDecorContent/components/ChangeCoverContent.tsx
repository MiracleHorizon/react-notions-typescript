import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ChangeCoverCategories } from 'redux/reducers/pageDecorationSlice/types'
import ChangeDecorLists from '../DecorLists'
import UploadDecor from '../../UploadDecor'
import DecorLink from '../../DecorLink'
import { selectedCoverCategorySelector } from 'redux/selectors'
import ContentWrapper from '../ChangeDecorContent.styles'

const ChangeCoverContent: FC = () => {
  const selectedCategory = useSelector(selectedCoverCategorySelector)

  const selectedCategoryHandler = useCallback(():
    | JSX.Element
    | JSX.Element[] => {
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
        return <ChangeDecorLists listTitle='Covers' />
    }
  }, [selectedCategory])

  return <ContentWrapper>{selectedCategoryHandler()}</ContentWrapper>
}

export default ChangeCoverContent
