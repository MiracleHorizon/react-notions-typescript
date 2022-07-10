import React from 'react'
import { ChangeCoverGalleryProps as Props } from '../ChangeDecorLists.types'

import coverGalleryLinkHandler from 'helpers/coverGalleryLinkHandler'
import CoverGalleryItem from './CoverGalleryItem'
import {
  ListTitleContainer,
  CoversGalleryList,
  StyledLink,
  ListTitle,
} from './ChangeCoverGallery.styles'
import { ListsWrapper, ListContainer } from '../ChangeDecorLists.styles'

const ChangeCoverGallery: React.FC<Props> = ({ decorations }) => {
  return (
    <ListsWrapper purpose='Covers'>
      {decorations.map(({ title, content }) => (
        <ListContainer key={title}>
          <ListTitleContainer>
            <StyledLink href={coverGalleryLinkHandler(title)} target='_blank' />
            <ListTitle>{title}</ListTitle>
          </ListTitleContainer>
          <CoversGalleryList>
            {content.map(cover => (
              <CoverGalleryItem key={cover.coverImg} {...cover} />
            ))}
          </CoversGalleryList>
        </ListContainer>
      ))}
    </ListsWrapper>
  )
}

export default ChangeCoverGallery
