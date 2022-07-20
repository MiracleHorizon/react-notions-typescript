import React, { FC, memo } from 'react'

import { ChangeCoverGalleryProps } from '../ChangeDecorLists.types'
import CoverGalleryItem from './CoverGalleryItem'
import coverGalleryLinkHandler from 'helpers/decor/coverGalleryLinkHandler'
import {
  ListTitleContainer,
  CoversGalleryList,
  StyledLink,
  ListTitle,
} from './ChangeCoverGallery.styles'
import { ListsWrapper, ListContainer } from '../ChangeDecorLists.styles'

const ChangeCoverGallery: FC<ChangeCoverGalleryProps> = memo(
  ({ decorations }) => (
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
)

export default ChangeCoverGallery
