import React from 'react'

import PagesListItem from './ListItem'
import { PagesListProps } from './PagesList.types'
import { Container, List } from './PagesList.styles'

const PagesList: React.FC<PagesListProps> = ({ pages }) => {
  const listItemsHandler = (): JSX.Element | JSX.Element[] => {
    if (!Array.isArray(pages)) return <PagesListItem page={pages} />

    return pages.map(page => <PagesListItem key={page.id} page={page} />)
  }

  return (
    <Container>
      <List>{listItemsHandler()}</List>
    </Container>
  )
}

export default PagesList
