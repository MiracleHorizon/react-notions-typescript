import React from 'react'

import { PagesListTitleProps } from './ListTitle.types'
import { TitleBlock, Title } from './ListTitle.styles'

const ListTitle: React.FC<PagesListTitleProps> = props => {
  const { title, reference, toggleList } = props

  return (
    <TitleBlock ref={reference} onClick={toggleList}>
      <Title>{title}</Title>
    </TitleBlock>
  )
}

export default ListTitle
